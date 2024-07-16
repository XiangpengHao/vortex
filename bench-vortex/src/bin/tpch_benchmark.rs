use std::sync;
use std::time::SystemTime;

use bench_vortex::tpch::dbgen::{DBGen, DBGenOptions};
use bench_vortex::tpch::{load_datasets, tpch_query, Format};
use futures::future::join_all;
use indicatif::ProgressBar;
use itertools::Itertools;
use prettytable::{Cell, Row, Table};

#[tokio::main(flavor = "multi_thread", worker_threads = 8)]
async fn main() {
    // uncomment the below to enable trace logging of datafusion execution
    // setup_logger(LevelFilter::Trace);

    // Run TPC-H data gen.
    let data_dir = DBGen::new(DBGenOptions::default()).generate().unwrap();

    // The formats to run against (vs the baseline)
    let formats = [
        Format::Arrow,
        // Format::Csv,
        Format::Vortex {
            disable_pushdown: false,
        },
        Format::Vortex {
            disable_pushdown: true,
        },
    ];

    // Load datasets
    let ctxs = join_all(
        formats
            .iter()
            .map(|format| load_datasets(&data_dir, *format)),
    )
    .await
    .into_iter()
    .map(|r| r.unwrap())
    .collect_vec();

    // Set up a results table
    let mut table = Table::new();
    {
        let mut cells = vec![Cell::new("Query")];
        cells.extend(formats.iter().map(|f| Cell::new(&format!("{:?}", f))));
        table.add_row(Row::new(cells));
    }

    // Setup a progress bar
    let progress = ProgressBar::new(21 * formats.len() as u64);

    // Send back a channel with the results of Row.
    let (rows_tx, rows_rx) = sync::mpsc::channel();
    for i in 1..=22 {
        if i == 15 {
            continue;
        }
        let _ctxs = ctxs.clone();
        let _tx = rows_tx.clone();
        let _progress = progress.clone();
        rayon::spawn_fifo(move || {
            let query = tpch_query(i);
            let mut cells = Vec::with_capacity(formats.len());
            cells.push(Cell::new(&format!("Q{}", i)));

            let mut elapsed_us = Vec::new();
            let rt = tokio::runtime::Builder::new_current_thread()
                .enable_all()
                .build()
                .unwrap();
            for (ctx, format) in _ctxs.iter().zip(formats.iter()) {
                for _ in 0..3 {
                    // warmup
                    rt.block_on(async {
                        ctx.sql(&query)
                            .await
                            .map_err(|e| println!("Failed to run {} {:?}: {}", i, format, e))
                            .unwrap()
                            .collect()
                            .await
                            .map_err(|e| println!("Failed to collect {} {:?}: {}", i, format, e))
                            .unwrap();
                    })
                }
                let mut measure = Vec::new();
                for _ in 0..20 {
                    let start = SystemTime::now();
                    rt.block_on(async {
                        ctx.sql(&query)
                            .await
                            .map_err(|e| println!("Failed to run {} {:?}: {}", i, format, e))
                            .unwrap()
                            .collect()
                            .await
                            .map_err(|e| println!("Failed to collect {} {:?}: {}", i, format, e))
                            .unwrap();
                    });
                    let elapsed = start.elapsed().unwrap();
                    measure.push(elapsed);
                }
                let fastest = measure.iter().cloned().min().unwrap();
                elapsed_us.push(fastest);

                _progress.inc(1);
            }

            let baseline = elapsed_us.first().unwrap();
            // yellow: 10% slower than baseline
            let yellow = baseline.as_micros() + (baseline.as_micros() / 10);
            // red: 50% slower than baseline
            let red = baseline.as_micros() + (baseline.as_micros() / 2);
            cells.push(Cell::new(&format!("{} us", baseline.as_micros())).style_spec("b"));
            for measure in elapsed_us.iter().skip(1) {
                let style_spec = if measure.as_micros() > red {
                    "bBr"
                } else if measure.as_micros() > yellow {
                    "bFdBy"
                } else {
                    "bFdBG"
                };
                cells
                    .push(Cell::new(&format!("{} us", measure.as_micros())).style_spec(style_spec));
            }

            _tx.send((i, Row::new(cells))).unwrap();
        });
    }

    // delete parent handle to tx
    drop(rows_tx);

    let mut rows = vec![];
    while let Ok((idx, row)) = rows_rx.recv() {
        rows.push((idx, row));
    }
    rows.sort_by(|(idx0, _), (idx1, _)| idx0.cmp(idx1));
    for (_, row) in rows {
        table.add_row(row);
    }

    progress.finish();
    table.printstd();
}
