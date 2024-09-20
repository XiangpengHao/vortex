window.BENCHMARK_DATA = {
  "lastUpdate": 1726847969702,
  "repoUrl": "https://github.com/spiraldb/vortex",
  "entries": {
    "Vortex bytes_at": [
      {
        "commit": {
          "author": {
            "email": "dan@spiraldb.com",
            "name": "Dan King",
            "username": "danking"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80c23d50b6a3730eb606953ad72ad0650312bd89",
          "message": "fix: version -> benchmark in GHA bench.yml (#893)\n\nI renamed this in bench-pr.yml and changed the references to the matrix\r\nvariable in both files, but forgot to rename it here in bench.yml",
          "timestamp": "2024-09-20T11:19:02-04:00",
          "tree_id": "6af96dd7d72f3764f2a6959809024555610ae461",
          "url": "https://github.com/spiraldb/vortex/commit/80c23d50b6a3730eb606953ad72ad0650312bd89"
        },
        "date": 1726845950243,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "bytes_at/array_data",
            "value": 630.0797154495973,
            "unit": "ns",
            "range": 0.4040898979544636
          },
          {
            "name": "bytes_at/array_data #2",
            "value": 1036.9092623934907,
            "unit": "ns",
            "range": 0.6229287397039798
          }
        ]
      }
    ],
    "Vortex random_access": [
      {
        "commit": {
          "author": {
            "email": "dan@spiraldb.com",
            "name": "Dan King",
            "username": "danking"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80c23d50b6a3730eb606953ad72ad0650312bd89",
          "message": "fix: version -> benchmark in GHA bench.yml (#893)\n\nI renamed this in bench-pr.yml and changed the references to the matrix\r\nvariable in both files, but forgot to rename it here in bench.yml",
          "timestamp": "2024-09-20T11:19:02-04:00",
          "tree_id": "6af96dd7d72f3764f2a6959809024555610ae461",
          "url": "https://github.com/spiraldb/vortex/commit/80c23d50b6a3730eb606953ad72ad0650312bd89"
        },
        "date": 1726845972545,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "vortex/tokio local disk",
            "value": 1265918.2491115367,
            "unit": "ns",
            "range": 5106.1060879332945
          },
          {
            "name": "vortex/localfs",
            "value": 1455274.151722514,
            "unit": "ns",
            "range": 27647.030753519153
          },
          {
            "name": "parquet/tokio local disk",
            "value": 194984908.03333333,
            "unit": "ns",
            "range": 3574661.382499993
          }
        ]
      }
    ],
    "Vortex DataFusion": [
      {
        "commit": {
          "author": {
            "email": "dan@spiraldb.com",
            "name": "Dan King",
            "username": "danking"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80c23d50b6a3730eb606953ad72ad0650312bd89",
          "message": "fix: version -> benchmark in GHA bench.yml (#893)\n\nI renamed this in bench-pr.yml and changed the references to the matrix\r\nvariable in both files, but forgot to rename it here in bench.yml",
          "timestamp": "2024-09-20T11:19:02-04:00",
          "tree_id": "6af96dd7d72f3764f2a6959809024555610ae461",
          "url": "https://github.com/spiraldb/vortex/commit/80c23d50b6a3730eb606953ad72ad0650312bd89"
        },
        "date": 1726846071312,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "arrow/planning",
            "value": 821684.2998366854,
            "unit": "ns",
            "range": 2541.9077616096474
          },
          {
            "name": "arrow/exec",
            "value": 1769622.7571484672,
            "unit": "ns",
            "range": 1364.3998261914821
          },
          {
            "name": "vortex-pushdown-compressed/planning",
            "value": 515451.0811567107,
            "unit": "ns",
            "range": 1088.5329503435642
          },
          {
            "name": "vortex-pushdown-compressed/exec",
            "value": 3088349.1664705877,
            "unit": "ns",
            "range": 5615.270838235272
          },
          {
            "name": "vortex-pushdown-uncompressed/planning",
            "value": 512353.7491326764,
            "unit": "ns",
            "range": 624.8239423614577
          },
          {
            "name": "vortex-pushdown-uncompressed/exec",
            "value": 2944284.9370588227,
            "unit": "ns",
            "range": 2915.2811985297594
          },
          {
            "name": "vortex-nopushdown-compressed/planning",
            "value": 721484.9883103865,
            "unit": "ns",
            "range": 484.4758781148121
          },
          {
            "name": "vortex-nopushdown-compressed/exec",
            "value": 13374309.42,
            "unit": "ns",
            "range": 16419.964562499896
          },
          {
            "name": "vortex-nopushdown-uncompressed/planning",
            "value": 720177.9309094431,
            "unit": "ns",
            "range": 1088.4671169615467
          },
          {
            "name": "vortex-nopushdown-uncompressed/exec",
            "value": 1684453.355530756,
            "unit": "ns",
            "range": 906.7713363126386
          }
        ]
      }
    ],
    "Vortex Compression": [
      {
        "commit": {
          "author": {
            "email": "dan@spiraldb.com",
            "name": "Dan King",
            "username": "danking"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80c23d50b6a3730eb606953ad72ad0650312bd89",
          "message": "fix: version -> benchmark in GHA bench.yml (#893)\n\nI renamed this in bench-pr.yml and changed the references to the matrix\r\nvariable in both files, but forgot to rename it here in bench.yml",
          "timestamp": "2024-09-20T11:19:02-04:00",
          "tree_id": "6af96dd7d72f3764f2a6959809024555610ae461",
          "url": "https://github.com/spiraldb/vortex/commit/80c23d50b6a3730eb606953ad72ad0650312bd89"
        },
        "date": 1726846873921,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Yellow Taxi Trip Data Compression Time/taxi compression",
            "value": 2495489852.9,
            "unit": "ns",
            "range": 5324639.5
          },
          {
            "name": "Yellow Taxi Trip Data Compression Time/taxi compression throughput",
            "value": 470808924,
            "unit": "bytes",
            "range": 0
          },
          {
            "name": "Yellow Taxi Trip Data Vortex-to-ParquetZstd Ratio/taxi",
            "value": 0.950720132370233,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Yellow Taxi Trip Data Vortex-to-ParquetUncompressed Ratio/taxi",
            "value": 0.6102863396038999,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Yellow Taxi Trip Data Compression Ratio/taxi",
            "value": 0.108380354319707,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Yellow Taxi Trip Data Compression Size/taxi",
            "value": 51026438,
            "unit": "bytes",
            "range": 0
          },
          {
            "name": "Public BI Compression Time/AirlineSentiment compression",
            "value": 414285.3202901558,
            "unit": "ns",
            "range": 407.49095674967975
          },
          {
            "name": "Public BI Compression Time/AirlineSentiment compression throughput",
            "value": 2020,
            "unit": "bytes",
            "range": 0
          },
          {
            "name": "Public BI Vortex-to-ParquetZstd Ratio/AirlineSentiment",
            "value": 6.400830737279335,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Public BI Vortex-to-ParquetUncompressed Ratio/AirlineSentiment",
            "value": 4.353107344632768,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Public BI Compression Ratio/AirlineSentiment",
            "value": 0.6207920792079208,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Public BI Compression Size/AirlineSentiment",
            "value": 1254,
            "unit": "bytes",
            "range": 0
          },
          {
            "name": "Public BI Compression Time/Arade compression",
            "value": 3167474224,
            "unit": "ns",
            "range": 8338450.532500029
          },
          {
            "name": "Public BI Compression Time/Arade compression throughput",
            "value": 787023760,
            "unit": "bytes",
            "range": 0
          },
          {
            "name": "Public BI Vortex-to-ParquetZstd Ratio/Arade",
            "value": 0.49183013997883884,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Public BI Vortex-to-ParquetUncompressed Ratio/Arade",
            "value": 0.43899818060510326,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Public BI Compression Ratio/Arade",
            "value": 0.18677686300093405,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Public BI Compression Size/Arade",
            "value": 146997829,
            "unit": "bytes",
            "range": 0
          },
          {
            "name": "Public BI Compression Time/Bimbo compression",
            "value": 22609347933.1,
            "unit": "ns",
            "range": 21958403.818748474
          },
          {
            "name": "Public BI Compression Time/Bimbo compression throughput",
            "value": 7121333608,
            "unit": "bytes",
            "range": 0
          },
          {
            "name": "Public BI Vortex-to-ParquetZstd Ratio/Bimbo",
            "value": 1.2947888412478443,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Public BI Vortex-to-ParquetUncompressed Ratio/Bimbo",
            "value": 0.8779098843621267,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Public BI Compression Ratio/Bimbo",
            "value": 0.06426202635499392,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Public BI Compression Size/Bimbo",
            "value": 457631328,
            "unit": "bytes",
            "range": 0
          },
          {
            "name": "Public BI Compression Time/CMSprovider compression",
            "value": 13440398203.5,
            "unit": "ns",
            "range": 26367885.942500114
          },
          {
            "name": "Public BI Compression Time/CMSprovider compression throughput",
            "value": 5149123964,
            "unit": "bytes",
            "range": 0
          },
          {
            "name": "Public BI Vortex-to-ParquetZstd Ratio/CMSprovider",
            "value": 1.2015352627069367,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Public BI Vortex-to-ParquetUncompressed Ratio/CMSprovider",
            "value": 0.7758227798964876,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Public BI Compression Ratio/CMSprovider",
            "value": 0.1759921383395927,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Public BI Compression Size/CMSprovider",
            "value": 906205337,
            "unit": "bytes",
            "range": 0
          },
          {
            "name": "Public BI Compression Time/Euro2016 compression",
            "value": 2221059535.5,
            "unit": "ns",
            "range": 17257836.180000067
          },
          {
            "name": "Public BI Compression Time/Euro2016 compression throughput",
            "value": 393253221,
            "unit": "bytes",
            "range": 0
          },
          {
            "name": "Public BI Vortex-to-ParquetZstd Ratio/Euro2016",
            "value": 1.4734606471495095,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Public BI Vortex-to-ParquetUncompressed Ratio/Euro2016",
            "value": 0.6251573935832805,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Public BI Compression Ratio/Euro2016",
            "value": 0.4338117856128126,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Public BI Compression Size/Euro2016",
            "value": 170597882,
            "unit": "bytes",
            "range": 0
          },
          {
            "name": "Public BI Compression Time/Food compression",
            "value": 1099698480.6,
            "unit": "ns",
            "range": 3283747.3000000715
          },
          {
            "name": "Public BI Compression Time/Food compression throughput",
            "value": 332718229,
            "unit": "bytes",
            "range": 0
          },
          {
            "name": "Public BI Vortex-to-ParquetZstd Ratio/Food",
            "value": 1.2275612994918959,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Public BI Vortex-to-ParquetUncompressed Ratio/Food",
            "value": 0.6940930688896351,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Public BI Compression Ratio/Food",
            "value": 0.13019563770279627,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Public BI Compression Size/Food",
            "value": 43318462,
            "unit": "bytes",
            "range": 0
          },
          {
            "name": "Public BI Compression Time/HashTags compression",
            "value": 2942846431,
            "unit": "ns",
            "range": 13470919.942500114
          },
          {
            "name": "Public BI Compression Time/HashTags compression throughput",
            "value": 804495592,
            "unit": "bytes",
            "range": 0
          },
          {
            "name": "Public BI Vortex-to-ParquetZstd Ratio/HashTags",
            "value": 1.6539300656954907,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Public BI Vortex-to-ParquetUncompressed Ratio/HashTags",
            "value": 0.4702155832326322,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Public BI Compression Ratio/HashTags",
            "value": 0.26188628016746174,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "Public BI Compression Size/HashTags",
            "value": 210686358,
            "unit": "bytes",
            "range": 0
          },
          {
            "name": "TPC-H l_comment Compression Time/chunked-without-fsst compression",
            "value": 193243963.4165873,
            "unit": "ns",
            "range": 602588.1973016113
          },
          {
            "name": "TPC-H l_comment Compression Time/chunked-without-fsst compression throughput",
            "value": 183010921,
            "unit": "bytes",
            "range": 0
          },
          {
            "name": "TPC-H l_comment Vortex-to-ParquetZstd Ratio/chunked-without-fsst",
            "value": 3.2154753234004985,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "TPC-H l_comment Vortex-to-ParquetUncompressed Ratio/chunked-without-fsst",
            "value": 0.9983650596000513,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "TPC-H l_comment Compression Ratio/chunked-without-fsst",
            "value": 0.999965750677797,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "TPC-H l_comment Compression Size/chunked-without-fsst",
            "value": 183004653,
            "unit": "bytes",
            "range": 0
          },
          {
            "name": "TPC-H l_comment Compression Time/chunked-with-fsst compression",
            "value": 1123679440.9,
            "unit": "ns",
            "range": 813616.8756250143
          },
          {
            "name": "TPC-H l_comment Compression Time/chunked-with-fsst compression throughput",
            "value": 183010921,
            "unit": "bytes",
            "range": 0
          },
          {
            "name": "TPC-H l_comment Vortex-to-ParquetZstd Ratio/chunked-with-fsst",
            "value": 1.505559811115435,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "TPC-H l_comment Vortex-to-ParquetUncompressed Ratio/chunked-with-fsst",
            "value": 0.4674575791693884,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "TPC-H l_comment Compression Ratio/chunked-with-fsst",
            "value": 0.4433667376604263,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "TPC-H l_comment Compression Size/chunked-with-fsst",
            "value": 81140955,
            "unit": "bytes",
            "range": 0
          },
          {
            "name": "TPC-H l_comment Compression Time/canonical-with-fsst compression",
            "value": 1122060074.65,
            "unit": "ns",
            "range": 769123.1031249762
          },
          {
            "name": "TPC-H l_comment Compression Time/canonical-with-fsst compression throughput",
            "value": 183010937,
            "unit": "bytes",
            "range": 0
          },
          {
            "name": "TPC-H l_comment Vortex-to-ParquetZstd Ratio/canonical-with-fsst",
            "value": 1.5026367800563647,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "TPC-H l_comment Vortex-to-ParquetUncompressed Ratio/canonical-with-fsst",
            "value": 0.4665463348275034,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "TPC-H l_comment Compression Ratio/canonical-with-fsst",
            "value": 0.44238636404555426,
            "unit": "ratio",
            "range": 0
          },
          {
            "name": "TPC-H l_comment Compression Size/canonical-with-fsst",
            "value": 80961543,
            "unit": "bytes",
            "range": 0
          }
        ]
      }
    ],
    "Vortex benchmarks": [
      {
        "commit": {
          "author": {
            "email": "dan@spiraldb.com",
            "name": "Dan King",
            "username": "danking"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80c23d50b6a3730eb606953ad72ad0650312bd89",
          "message": "fix: version -> benchmark in GHA bench.yml (#893)\n\nI renamed this in bench-pr.yml and changed the references to the matrix\r\nvariable in both files, but forgot to rename it here in bench.yml",
          "timestamp": "2024-09-20T11:19:02-04:00",
          "tree_id": "6af96dd7d72f3764f2a6959809024555610ae461",
          "url": "https://github.com/spiraldb/vortex/commit/80c23d50b6a3730eb606953ad72ad0650312bd89"
        },
        "date": 1726847967479,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "tpch_q1/vortex-in-memory-no-pushdown",
            "value": 450439889.4,
            "unit": "ns",
            "range": 2822192.925000012
          },
          {
            "name": "tpch_q1/vortex-in-memory-pushdown",
            "value": 508579908.1,
            "unit": "ns",
            "range": 1631958.6724999845
          },
          {
            "name": "tpch_q1/arrow",
            "value": 441911525.2,
            "unit": "ns",
            "range": 966986.400000006
          },
          {
            "name": "tpch_q1/parquet",
            "value": 649329490.5,
            "unit": "ns",
            "range": 1249966.2462500334
          },
          {
            "name": "tpch_q1/vortex-file-compressed",
            "value": 593190711.2,
            "unit": "ns",
            "range": 947515.7462499738
          },
          {
            "name": "tpch_q1/vortex-file-uncompressed",
            "value": 610686523.8,
            "unit": "ns",
            "range": 2925875.5
          },
          {
            "name": "tpch_q2/vortex-in-memory-no-pushdown",
            "value": 147561594.05710316,
            "unit": "ns",
            "range": 240483.79053720832
          },
          {
            "name": "tpch_q2/vortex-in-memory-pushdown",
            "value": 145858708.0763889,
            "unit": "ns",
            "range": 260283.71374997497
          },
          {
            "name": "tpch_q2/arrow",
            "value": 123449023.95765872,
            "unit": "ns",
            "range": 318882.6517262012
          },
          {
            "name": "tpch_q2/parquet",
            "value": 157070732.76484126,
            "unit": "ns",
            "range": 1547421.9690873027
          },
          {
            "name": "tpch_q2/vortex-file-compressed",
            "value": 157088258.3295238,
            "unit": "ns",
            "range": 344184.1089285761
          },
          {
            "name": "tpch_q2/vortex-file-uncompressed",
            "value": 163808504.08801588,
            "unit": "ns",
            "range": 579966.8873650879
          },
          {
            "name": "tpch_q3/vortex-in-memory-no-pushdown",
            "value": 147880445.69337302,
            "unit": "ns",
            "range": 133989.25019842386
          },
          {
            "name": "tpch_q3/vortex-in-memory-pushdown",
            "value": 181444367.14218256,
            "unit": "ns",
            "range": 163186.14204365015
          },
          {
            "name": "tpch_q3/arrow",
            "value": 143373216.3157143,
            "unit": "ns",
            "range": 124767.99666965008
          },
          {
            "name": "tpch_q3/parquet",
            "value": 334439718.75,
            "unit": "ns",
            "range": 925273.321875006
          },
          {
            "name": "tpch_q3/vortex-file-compressed",
            "value": 291818714.6,
            "unit": "ns",
            "range": 2546872.5
          },
          {
            "name": "tpch_q3/vortex-file-uncompressed",
            "value": 350484066.3,
            "unit": "ns",
            "range": 1207664.2868749797
          },
          {
            "name": "tpch_q4/vortex-in-memory-no-pushdown",
            "value": 104730375.04861112,
            "unit": "ns",
            "range": 110179.53828124702
          },
          {
            "name": "tpch_q4/vortex-in-memory-pushdown",
            "value": 137449425.910873,
            "unit": "ns",
            "range": 195948.3957142681
          },
          {
            "name": "tpch_q4/arrow",
            "value": 100089010.73968253,
            "unit": "ns",
            "range": 142842.6670357138
          },
          {
            "name": "tpch_q4/parquet",
            "value": 212490545.89999998,
            "unit": "ns",
            "range": 285888.5383333415
          },
          {
            "name": "tpch_q4/vortex-file-compressed",
            "value": 255086156.1,
            "unit": "ns",
            "range": 1310959.25
          },
          {
            "name": "tpch_q4/vortex-file-uncompressed",
            "value": 297169253.45,
            "unit": "ns",
            "range": 2442607.400000006
          },
          {
            "name": "tpch_q5/vortex-in-memory-no-pushdown",
            "value": 288060891.85,
            "unit": "ns",
            "range": 991517.4018750191
          },
          {
            "name": "tpch_q5/vortex-in-memory-pushdown",
            "value": 300773238.65,
            "unit": "ns",
            "range": 2807439.555000007
          },
          {
            "name": "tpch_q5/arrow",
            "value": 284904949.65,
            "unit": "ns",
            "range": 924051.963749975
          },
          {
            "name": "tpch_q5/parquet",
            "value": 435904219.2,
            "unit": "ns",
            "range": 788723.7937499881
          },
          {
            "name": "tpch_q5/vortex-file-compressed",
            "value": 325998833,
            "unit": "ns",
            "range": 2205626.6700000167
          },
          {
            "name": "tpch_q5/vortex-file-uncompressed",
            "value": 344436445.55,
            "unit": "ns",
            "range": 2508819.8725000024
          },
          {
            "name": "tpch_q6/vortex-in-memory-no-pushdown",
            "value": 37807573.14958994,
            "unit": "ns",
            "range": 93849.28528621048
          },
          {
            "name": "tpch_q6/vortex-in-memory-pushdown",
            "value": 91079742.46386907,
            "unit": "ns",
            "range": 363882.8497209847
          },
          {
            "name": "tpch_q6/arrow",
            "value": 34738221.047314815,
            "unit": "ns",
            "range": 75131.42193287238
          },
          {
            "name": "tpch_q6/parquet",
            "value": 150343405.39630952,
            "unit": "ns",
            "range": 488714.0046041608
          },
          {
            "name": "tpch_q6/vortex-file-compressed",
            "value": 78090017.69361112,
            "unit": "ns",
            "range": 158221.1732743159
          },
          {
            "name": "tpch_q6/vortex-file-uncompressed",
            "value": 167225870.58892858,
            "unit": "ns",
            "range": 659339.4643898755
          },
          {
            "name": "tpch_q7/vortex-in-memory-no-pushdown",
            "value": 564914909.6,
            "unit": "ns",
            "range": 1428707.842500031
          },
          {
            "name": "tpch_q7/vortex-in-memory-pushdown",
            "value": 619462126,
            "unit": "ns",
            "range": 1769634.988749981
          },
          {
            "name": "tpch_q7/arrow",
            "value": 565965182.2,
            "unit": "ns",
            "range": 6865199.699999988
          },
          {
            "name": "tpch_q7/parquet",
            "value": 702764997.6,
            "unit": "ns",
            "range": 6150446.631249964
          },
          {
            "name": "tpch_q7/vortex-file-compressed",
            "value": 679512930.6,
            "unit": "ns",
            "range": 1952021.7337499857
          },
          {
            "name": "tpch_q7/vortex-file-uncompressed",
            "value": 740956439.5,
            "unit": "ns",
            "range": 3526652.541249931
          },
          {
            "name": "tpch_q8/vortex-in-memory-no-pushdown",
            "value": 215008831.4,
            "unit": "ns",
            "range": 1155432.0833333135
          },
          {
            "name": "tpch_q8/vortex-in-memory-pushdown",
            "value": 235133198.8,
            "unit": "ns",
            "range": 1137080.2399999946
          },
          {
            "name": "tpch_q8/arrow",
            "value": 214438285.09999996,
            "unit": "ns",
            "range": 1013159.7408333272
          },
          {
            "name": "tpch_q8/parquet",
            "value": 478907396.55,
            "unit": "ns",
            "range": 851560.3881250024
          },
          {
            "name": "tpch_q8/vortex-file-compressed",
            "value": 271428506,
            "unit": "ns",
            "range": 586038.525000006
          },
          {
            "name": "tpch_q8/vortex-file-uncompressed",
            "value": 290672649,
            "unit": "ns",
            "range": 2701630.948124975
          },
          {
            "name": "tpch_q9/vortex-in-memory-no-pushdown",
            "value": 393858141.85,
            "unit": "ns",
            "range": 1219513.7587499917
          },
          {
            "name": "tpch_q9/vortex-in-memory-pushdown",
            "value": 405156432.75,
            "unit": "ns",
            "range": 913831.365624994
          },
          {
            "name": "tpch_q9/arrow",
            "value": 391607395.15,
            "unit": "ns",
            "range": 536472.978125006
          },
          {
            "name": "tpch_q9/parquet",
            "value": 694205027.2,
            "unit": "ns",
            "range": 4965869.393749952
          },
          {
            "name": "tpch_q9/vortex-file-compressed",
            "value": 448543492.55,
            "unit": "ns",
            "range": 1076545.8100000024
          },
          {
            "name": "tpch_q9/vortex-file-uncompressed",
            "value": 471422585.6,
            "unit": "ns",
            "range": 4998517.924999982
          },
          {
            "name": "tpch_q10/vortex-in-memory-no-pushdown",
            "value": 219585232.56666666,
            "unit": "ns",
            "range": 270508.19250001013
          },
          {
            "name": "tpch_q10/vortex-in-memory-pushdown",
            "value": 258809658.05,
            "unit": "ns",
            "range": 334189.1256249994
          },
          {
            "name": "tpch_q10/arrow",
            "value": 217215627.23333335,
            "unit": "ns",
            "range": 328576.6333333254
          },
          {
            "name": "tpch_q10/parquet",
            "value": 473041554.25,
            "unit": "ns",
            "range": 1252797.564375013
          },
          {
            "name": "tpch_q10/vortex-file-compressed",
            "value": 443274016.95,
            "unit": "ns",
            "range": 697704.5681250095
          },
          {
            "name": "tpch_q10/vortex-file-uncompressed",
            "value": 398917607.5,
            "unit": "ns",
            "range": 2765243.800000012
          },
          {
            "name": "tpch_q11/vortex-in-memory-no-pushdown",
            "value": 230373770.76666665,
            "unit": "ns",
            "range": 902811.9329166859
          },
          {
            "name": "tpch_q11/vortex-in-memory-pushdown",
            "value": 229261241.4,
            "unit": "ns",
            "range": 739969.6999999732
          },
          {
            "name": "tpch_q11/arrow",
            "value": 176535689.19682539,
            "unit": "ns",
            "range": 234340.77460317314
          },
          {
            "name": "tpch_q11/parquet",
            "value": 180619181.77500004,
            "unit": "ns",
            "range": 337850.59333333373
          },
          {
            "name": "tpch_q11/vortex-file-compressed",
            "value": 234272552.76666665,
            "unit": "ns",
            "range": 1005236.195416674
          },
          {
            "name": "tpch_q11/vortex-file-uncompressed",
            "value": 239689623.5666667,
            "unit": "ns",
            "range": 638834.6666666716
          },
          {
            "name": "tpch_q12/vortex-in-memory-no-pushdown",
            "value": 173387744.83646828,
            "unit": "ns",
            "range": 245508.4795292467
          },
          {
            "name": "tpch_q12/vortex-in-memory-pushdown",
            "value": 249057726.4333333,
            "unit": "ns",
            "range": 266088.0770833343
          },
          {
            "name": "tpch_q12/arrow",
            "value": 168764413.00150794,
            "unit": "ns",
            "range": 109720.28436903656
          },
          {
            "name": "tpch_q12/parquet",
            "value": 355803051.9,
            "unit": "ns",
            "range": 448265.75499999523
          },
          {
            "name": "tpch_q12/vortex-file-compressed",
            "value": 573491631.2,
            "unit": "ns",
            "range": 1909992.5999999642
          },
          {
            "name": "tpch_q12/vortex-file-uncompressed",
            "value": 345336986.85,
            "unit": "ns",
            "range": 1503121.1831249893
          },
          {
            "name": "tpch_q13/vortex-in-memory-no-pushdown",
            "value": 157388308.4130952,
            "unit": "ns",
            "range": 753478.4029464275
          },
          {
            "name": "tpch_q13/vortex-in-memory-pushdown",
            "value": 158042657.26797622,
            "unit": "ns",
            "range": 634653.309788689
          },
          {
            "name": "tpch_q13/arrow",
            "value": 161772043.17734128,
            "unit": "ns",
            "range": 2763646.834460318
          },
          {
            "name": "tpch_q13/parquet",
            "value": 300235686.15,
            "unit": "ns",
            "range": 1057285.75
          },
          {
            "name": "tpch_q13/vortex-file-compressed",
            "value": 205585785.93333334,
            "unit": "ns",
            "range": 2567140.913749993
          },
          {
            "name": "tpch_q13/vortex-file-uncompressed",
            "value": 203575372.2,
            "unit": "ns",
            "range": 1975284.7299999744
          },
          {
            "name": "tpch_q14/vortex-in-memory-no-pushdown",
            "value": 37354124.73518519,
            "unit": "ns",
            "range": 101760.29432871193
          },
          {
            "name": "tpch_q14/vortex-in-memory-pushdown",
            "value": 86082696.9676389,
            "unit": "ns",
            "range": 144419.30679515004
          },
          {
            "name": "tpch_q14/arrow",
            "value": 38568172.33234127,
            "unit": "ns",
            "range": 166610.3226785697
          },
          {
            "name": "tpch_q14/parquet",
            "value": 221648408.46666664,
            "unit": "ns",
            "range": 1278965.1458333284
          },
          {
            "name": "tpch_q14/vortex-file-compressed",
            "value": 86271551.75517856,
            "unit": "ns",
            "range": 354593.7074449435
          },
          {
            "name": "tpch_q14/vortex-file-uncompressed",
            "value": 142539733.82079363,
            "unit": "ns",
            "range": 1418625.2754484266
          },
          {
            "name": "tpch_q15/vortex-in-memory-no-pushdown",
            "value": 66897568.9193254,
            "unit": "ns",
            "range": 863136.1371294633
          },
          {
            "name": "tpch_q15/vortex-in-memory-pushdown",
            "value": 120152430.86087301,
            "unit": "ns",
            "range": 592479.8615049645
          },
          {
            "name": "tpch_q15/arrow",
            "value": 64945240.89097222,
            "unit": "ns",
            "range": 386685.2538055517
          },
          {
            "name": "tpch_q15/parquet",
            "value": 292187209.75,
            "unit": "ns",
            "range": 1644492.9012500048
          },
          {
            "name": "tpch_q15/vortex-file-compressed",
            "value": 148365632.2734524,
            "unit": "ns",
            "range": 831983.3313095421
          },
          {
            "name": "tpch_q15/vortex-file-uncompressed",
            "value": 256367386.8,
            "unit": "ns",
            "range": 629344.174999997
          },
          {
            "name": "tpch_q16/vortex-in-memory-no-pushdown",
            "value": 120003270.94396827,
            "unit": "ns",
            "range": 210601.13079563528
          },
          {
            "name": "tpch_q16/vortex-in-memory-pushdown",
            "value": 123773640.15011907,
            "unit": "ns",
            "range": 166006.85111905634
          },
          {
            "name": "tpch_q16/arrow",
            "value": 105109601.73781747,
            "unit": "ns",
            "range": 415780.32729017735
          },
          {
            "name": "tpch_q16/parquet",
            "value": 121327890.4109524,
            "unit": "ns",
            "range": 355900.80655952543
          },
          {
            "name": "tpch_q16/vortex-file-compressed",
            "value": 136091545.89757937,
            "unit": "ns",
            "range": 167630.02586607635
          },
          {
            "name": "tpch_q16/vortex-file-uncompressed",
            "value": 136865477.0271032,
            "unit": "ns",
            "range": 167833.181287691
          },
          {
            "name": "tpch_q17/vortex-in-memory-no-pushdown",
            "value": 641883863,
            "unit": "ns",
            "range": 4344222.599999964
          },
          {
            "name": "tpch_q17/vortex-in-memory-pushdown",
            "value": 651867511.6,
            "unit": "ns",
            "range": 5886082.091250002
          },
          {
            "name": "tpch_q17/arrow",
            "value": 537912831.8,
            "unit": "ns",
            "range": 5003428.955000043
          },
          {
            "name": "tpch_q17/parquet",
            "value": 581193148.9,
            "unit": "ns",
            "range": 1149459.769999981
          },
          {
            "name": "tpch_q17/vortex-file-compressed",
            "value": 605128384.2,
            "unit": "ns",
            "range": 2778600.7087500095
          },
          {
            "name": "tpch_q17/vortex-file-uncompressed",
            "value": 660256349,
            "unit": "ns",
            "range": 1624602.9725000262
          },
          {
            "name": "tpch_q18/vortex-in-memory-no-pushdown",
            "value": 1010029310.2,
            "unit": "ns",
            "range": 6142052.5
          },
          {
            "name": "tpch_q18/vortex-in-memory-pushdown",
            "value": 1007745271.5,
            "unit": "ns",
            "range": 2526959.9500000477
          },
          {
            "name": "tpch_q18/arrow",
            "value": 1004676211.2,
            "unit": "ns",
            "range": 6244326.327500045
          },
          {
            "name": "tpch_q18/parquet",
            "value": 1197950660.7,
            "unit": "ns",
            "range": 17948853.38625014
          },
          {
            "name": "tpch_q18/vortex-file-compressed",
            "value": 1050696469.9,
            "unit": "ns",
            "range": 4233622.996250033
          },
          {
            "name": "tpch_q18/vortex-file-uncompressed",
            "value": 1098556246.4,
            "unit": "ns",
            "range": 3701248.559999943
          },
          {
            "name": "tpch_q19/vortex-in-memory-no-pushdown",
            "value": 157466350.08615083,
            "unit": "ns",
            "range": 463321.29442062974
          },
          {
            "name": "tpch_q19/vortex-in-memory-pushdown",
            "value": 244871240.73333335,
            "unit": "ns",
            "range": 161478.78333330154
          },
          {
            "name": "tpch_q19/arrow",
            "value": 151844615.4172619,
            "unit": "ns",
            "range": 179524.84523066878
          },
          {
            "name": "tpch_q19/parquet",
            "value": 472870963.6,
            "unit": "ns",
            "range": 856301.4243749976
          },
          {
            "name": "tpch_q19/vortex-file-compressed",
            "value": 699576340.6,
            "unit": "ns",
            "range": 448566.498750031
          },
          {
            "name": "tpch_q19/vortex-file-uncompressed",
            "value": 351599009.9,
            "unit": "ns",
            "range": 1490521.5049999952
          },
          {
            "name": "tpch_q20/vortex-in-memory-no-pushdown",
            "value": 255869803.05,
            "unit": "ns",
            "range": 798818.1537500024
          },
          {
            "name": "tpch_q20/vortex-in-memory-pushdown",
            "value": 285151240.2,
            "unit": "ns",
            "range": 4715130.125
          },
          {
            "name": "tpch_q20/arrow",
            "value": 239027347.66666666,
            "unit": "ns",
            "range": 578576.150000006
          },
          {
            "name": "tpch_q20/parquet",
            "value": 358797335.5,
            "unit": "ns",
            "range": 3543996.4337500036
          },
          {
            "name": "tpch_q20/vortex-file-compressed",
            "value": 312344728.95,
            "unit": "ns",
            "range": 959458.1531250179
          },
          {
            "name": "tpch_q20/vortex-file-uncompressed",
            "value": 404539196.75,
            "unit": "ns",
            "range": 1322611.0162500143
          },
          {
            "name": "tpch_q21/vortex-in-memory-no-pushdown",
            "value": 842991434.8,
            "unit": "ns",
            "range": 2843051.6087500453
          },
          {
            "name": "tpch_q21/vortex-in-memory-pushdown",
            "value": 904063690.5,
            "unit": "ns",
            "range": 2884642.9587500095
          },
          {
            "name": "tpch_q21/arrow",
            "value": 840818136.6,
            "unit": "ns",
            "range": 3127553.0649999976
          },
          {
            "name": "tpch_q21/parquet",
            "value": 970278568.4,
            "unit": "ns",
            "range": 2342086.149999976
          },
          {
            "name": "tpch_q21/vortex-file-compressed",
            "value": 1203946751.1,
            "unit": "ns",
            "range": 4905674.386250019
          },
          {
            "name": "tpch_q21/vortex-file-uncompressed",
            "value": 1309668038,
            "unit": "ns",
            "range": 5915780.296249986
          },
          {
            "name": "tpch_q22/vortex-in-memory-no-pushdown",
            "value": 96045168.62202382,
            "unit": "ns",
            "range": 388867.78145089746
          },
          {
            "name": "tpch_q22/vortex-in-memory-pushdown",
            "value": 97755707.82825397,
            "unit": "ns",
            "range": 637503.7066666707
          },
          {
            "name": "tpch_q22/arrow",
            "value": 67268517.06220238,
            "unit": "ns",
            "range": 215745.93730655313
          },
          {
            "name": "tpch_q22/parquet",
            "value": 96512517.905,
            "unit": "ns",
            "range": 367020.5562291667
          },
          {
            "name": "tpch_q22/vortex-file-compressed",
            "value": 102694395.36416666,
            "unit": "ns",
            "range": 402854.4512500018
          },
          {
            "name": "tpch_q22/vortex-file-uncompressed",
            "value": 110683110.7106746,
            "unit": "ns",
            "range": 234039.28937301785
          }
        ]
      }
    ]
  }
}