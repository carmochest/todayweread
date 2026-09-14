/* Today We Read — storefront prototype */
(function(){
"use strict";

/* ---------- Butterfly ---------- */
const BF_PATHS = "<path fill=\"#FFD468\" d=\"M 993.1 1293.8 C 1009.1 1208.7 1015.8 1170.4 1028.5 1110.4 C 1055 984.1 1093.7 741.9 1108.8 628.6 L 1124.1 629.7 C 1142 628.8 1156.7 619.5 1172.7 611.8 C 1227.2 585.9 1282.1 562.3 1338.1 539.7 C 1382.6 521.7 1428.6 507.6 1470.7 484 C 1481.6 477.9 1510.4 465.6 1539.1 454.3 C 1568.6 442.6 1599.1 468.6 1592.5 499.5 C 1584.5 536.8 1575.1 575.8 1570.6 606.4 C 1558 692.7 1534.9 770.3 1518.4 856 C 1506.3 918.6 1492.4 972.2 1481.9 1035.3 C 1478.7 1054.6 1463.1 1129.6 1463.1 1129.6 C 1463.1 1129.6 1385.5 1159.8 1367.3 1166.1 C 1363 1167.5 1358.7 1169 1354.4 1170.4 C 1297.1 1189.3 1237.1 1203.3 1179.1 1220.8 C 1116.5 1239.5 1056.9 1258.5 1000.8 1290.5 C 998.7 1291.6 996.6 1292.9 994.5 1294.1 Z M 993.1 1293.8 \"/><path fill=\"#FFD468\" d=\"M 923.3 597.3 L 939.3 597.4 C 903.6 754.8 886 872 861.9 1009 C 848.4 1085.6 829.3 1160.8 813.3 1240.1 L 800.7 1237.6 C 759.2 1211.1 722.2 1173.9 680.7 1144.6 C 647.3 1121 614.4 1100.3 583.6 1072.8 C 551.7 1044.5 518.8 1025.5 483.5 1005.5 C 474.2 1000.4 464.7 995 455 989.5 C 433 976.9 402.3 948.8 402.3 948.8 C 402.3 948.8 414.4 892.2 417.4 875.2 C 426.1 823.8 440.6 771.7 451.3 720.8 C 471.5 625.5 493.6 526.2 512.8 430.6 C 519.1 399.2 523.2 369.3 529.3 339.6 C 535 311.7 568.9 300.4 590.5 319 C 622.3 346.3 658.5 372.3 688.8 396.9 C 744.6 442.1 802.3 488.4 855.2 536.7 C 871.9 551.8 908.3 592.4 923.3 597.3 \"/><path fill=\"#FFD468\" d=\"M 993.1 1293.8 C 992.6 1296.4 992.1 1299 991.6 1301.6 C 991.4 1301.6 991.1 1301.6 990.8 1301.5 C 985.1 1300.5 979.4 1298.9 973.7 1296.9 C 960.7 1292.4 947.9 1286.1 935 1281.9 C 933.1 1281.3 931.2 1280.7 929.3 1280.2 C 923.2 1278.5 917.1 1276.8 910.9 1275.3 C 904.4 1273.8 897.8 1272.3 891.2 1271 C 881.1 1269.1 871.1 1267.3 861.1 1265.7 C 854.1 1264.5 847.1 1263.4 840.2 1262.3 C 829.5 1260.6 818.8 1257.4 808.7 1262.9 C 809.5 1258.6 810.4 1254.4 811.2 1250.1 C 811.8 1246.8 812.5 1243.4 813.3 1240.1 C 829.3 1160.8 848.4 1085.6 861.9 1009 C 886 872 903.6 754.8 939.3 597.4 C 965.6 593.4 1007.5 598.4 1033.3 603.7 C 1055.1 608.2 1082.1 610 1110.2 618.1 C 1109.8 621.4 1109.3 625 1108.8 628.6 C 1093.7 741.9 1055 984.1 1028.5 1110.4 C 1015.8 1170.4 1009.1 1208.7 993.1 1293.8 \"/><path fill=\"#945777\" d=\"M 1576.1 503.6 C 1574.6 510.8 1573 518 1571.4 525.2 C 1565 553.9 1559 580.9 1555.6 604.2 C 1548.2 655 1537.3 701.8 1525.8 751.4 C 1518.1 784.2 1510.3 818.2 1503.5 853.2 C 1498.7 878.2 1493.5 902.1 1488.4 925.2 C 1481 959.4 1473.3 994.8 1467 1032.8 C 1465.7 1040.6 1462 1059.6 1456.3 1087.6 C 1452.4 1106.8 1438.9 1122.7 1420.7 1129.8 C 1382 1144.7 1367.6 1150 1362.3 1151.8 C 1358.2 1153.2 1354 1154.6 1349.7 1156 C 1316.5 1167 1281.7 1176.4 1248 1185.6 C 1223.9 1192.2 1199 1199 1174.7 1206.3 C 1123.8 1221.5 1074 1237.3 1026.6 1260 C 1021.2 1262.6 1015.2 1258.1 1016.3 1252.2 L 1017.7 1244.9 C 1027.2 1193.6 1033.6 1159.7 1043.3 1113.5 C 1068.8 991.7 1105.1 766.1 1121.4 648.5 C 1122.1 643.3 1125.8 639.1 1130.9 637.8 C 1153.2 632.1 1181.4 622.6 1196.3 615.5 C 1237.3 596 1269.2 583.4 1306.1 568.8 C 1317.9 564.1 1330.3 559.2 1343.7 553.8 C 1356.6 548.6 1369.5 543.7 1382.5 538.8 C 1414.3 526.9 1447.3 514.5 1478.1 497.2 C 1486.7 492.4 1509.9 482.3 1538.6 470.8 C 1549 466.6 1560.3 468.8 1568.5 476.7 C 1575.7 483.5 1578.2 493.9 1576.1 503.6 M 1330.5 1357.8 C 1330.1 1362.4 1325.9 1365.5 1321.4 1364.9 C 1316.2 1364.1 1310.9 1363.1 1304.3 1361.8 C 1300.3 1361 1295.9 1360.1 1290.2 1359.1 C 1264.2 1355.3 1246.5 1351.4 1226.1 1346.8 C 1215.6 1344.4 1204.6 1342 1191.9 1339.4 C 1160.8 1333.2 1099.5 1312.6 1052.5 1296.3 C 1045.7 1294 1045.4 1284.6 1051.9 1281.7 C 1094 1262.8 1138.2 1248.8 1183.4 1235.3 C 1207.3 1228.1 1232 1221.3 1256 1214.8 C 1283.6 1207.3 1312 1199.5 1339.8 1190.9 C 1344.2 1189.5 1348.5 1193.1 1348 1197.6 C 1342.5 1243.3 1334.3 1317 1330.5 1357.8 M 1239.9 1476.7 C 1239.1 1480.6 1234.9 1482.8 1231.2 1481.1 C 1224.6 1478.2 1217.7 1474.8 1210.4 1470.7 C 1191.5 1460.4 1173.1 1447.9 1155.2 1435.8 C 1149.3 1431.8 1143.5 1427.8 1137.8 1424.1 C 1114.5 1408.6 1064.5 1362.5 1028.3 1328.3 C 1025 1325.3 1028.2 1319.9 1032.5 1321.4 C 1081.1 1338.4 1150.8 1362.1 1185.9 1369.1 C 1198.4 1371.6 1209.2 1374 1219.5 1376.4 C 1230 1378.7 1240.2 1381 1251.3 1383.2 C 1254.9 1383.9 1257.2 1387.4 1256.5 1391 Z M 1173.9 1568.2 C 1171.7 1581.4 1169.6 1594.3 1167.8 1606 C 1167.1 1610.4 1161.3 1611.8 1158.7 1608.1 C 1154.1 1602 1150.1 1596.3 1147.8 1593 C 1145.4 1589.6 1143.4 1586.7 1141.8 1584.5 C 1128.7 1566.6 1115.6 1547.9 1103 1529.8 C 1097.9 1522.4 1092.7 1515 1087.6 1507.7 C 1081.6 1498.9 1075.5 1490.3 1069.3 1481.7 C 1048.2 1452.2 1016.9 1396.2 995 1350.8 C 992.5 1345.6 999.1 1340.7 1003.3 1344.7 C 1040.9 1380.2 1095.7 1432.5 1121.1 1449.3 C 1126.7 1453 1132.4 1456.9 1138.2 1460.8 C 1152.1 1470.2 1166.3 1479.8 1181.1 1488.7 C 1183.9 1490.4 1185.4 1493.5 1185 1496.8 C 1182.7 1514.2 1178.2 1541.5 1173.9 1568.2 M 1012.8 1588.3 C 1011.4 1601.5 1010 1614.4 1008.6 1626.7 C 976.3 1530.4 949.6 1430.8 944.6 1333.6 C 944.3 1328 952 1326.2 954.3 1331.3 C 973.1 1373.4 1000.5 1428.3 1025.1 1469.2 C 1026.9 1472.1 1027.7 1475.6 1027.2 1479 Z M 981.9 1271.3 C 980.7 1277.5 974.2 1281 968.4 1278.7 C 966.1 1277.8 963.9 1276.9 961.7 1275.9 C 954.6 1273 947.2 1269.9 939.4 1267.4 C 937.4 1266.8 935.3 1266.2 933.5 1265.7 C 927.2 1263.9 920.8 1262.1 914.3 1260.6 C 907.7 1259 900.9 1257.5 894 1256.2 C 891.8 1255.7 889.6 1255.4 887.3 1255 C 886.9 1254.9 886.4 1254.8 886 1254.7 C 878.5 1253.4 871 1252 863.6 1250.8 C 856.6 1249.6 849.5 1248.4 842.6 1247.3 L 838.1 1246.6 C 832.5 1245.7 828.7 1240.3 829.9 1234.7 L 848.4 1149.2 C 858.8 1102.1 868.7 1057.7 876.8 1011.6 C 881.7 983.4 886.4 956.4 890.9 929.8 C 907.5 833.6 923.1 742.5 948.8 627 C 949.9 622 954.3 618.4 959.4 618.4 C 981.5 618.3 1009 621.7 1029.2 625.8 C 1037.6 627.5 1046.4 628.8 1055.7 630.2 C 1065.5 631.7 1075.4 633.2 1085.5 635.2 C 1089.4 636 1092 639.7 1091.5 643.6 C 1075.3 760.6 1039.1 985.9 1013.6 1107.3 C 1003.9 1153.8 997.5 1187.8 987.9 1239.4 Z M 768.1 1459.5 C 738.6 1501.8 709 1539 678.4 1572 C 674.8 1575.8 668.5 1572.4 669.8 1567.3 C 680 1528.4 692.7 1481.3 703 1447.9 C 704 1445 705.7 1442.4 708.1 1440.4 C 710.4 1438.4 712.8 1436.5 715.1 1434.5 C 735 1416.9 806.6 1341.3 847.3 1295.8 C 851.2 1291.4 858.3 1296 855.8 1301.4 C 833.5 1350.4 799 1415 768.1 1459.5 M 579 1387.9 C 580 1383.7 583.4 1380.4 587.6 1379.6 C 589.6 1379.2 591.5 1378.8 594.2 1378 C 673.2 1355.3 754.8 1311.6 814.8 1280 C 820 1277.3 825 1283.9 821 1288.2 C 781.8 1331.1 713 1396 695.1 1411.7 C 682.8 1422.5 669.6 1432.9 655 1443.6 C 629.1 1462.5 601.4 1480.1 574.6 1497.1 C 569.9 1500 565.2 1503 560.5 1506 C 556.5 1508.5 551.4 1505.1 552.4 1500.5 C 555.3 1487.1 558.6 1473.9 561.8 1460.8 Z M 482.4 1272.1 C 483.3 1267.8 487.2 1265 491.5 1265.4 C 518.4 1268 548.7 1271 576 1272.8 C 587.8 1273.5 599.5 1273.9 611.3 1273.9 C 639.1 1273.9 666.9 1272.1 694 1270.4 C 703.8 1269.8 713.6 1269.2 723.3 1268.6 C 728.3 1268.3 739.2 1268.3 745.1 1267.7 C 758 1266.3 772.6 1263.5 780.4 1263 C 785.5 1262.7 787.4 1269.5 782.9 1271.8 C 724.5 1300.9 626.1 1340.4 588 1348.4 C 582.4 1349.6 576.8 1350.8 571 1351.9 L 556.5 1355 C 538.2 1358.7 522.2 1361.7 505.1 1365 C 493.3 1367.2 481.3 1369.5 467.8 1372.1 C 463.6 1372.9 460 1369 461.1 1364.9 C 469 1336.3 475.8 1303.3 480.4 1280.8 Z M 454.2 1231.3 C 450.3 1231 447.6 1227.3 448.4 1223.5 C 450.6 1213.6 453.2 1203.2 455 1196.1 L 458.7 1182 C 463.3 1164 466.3 1152.1 472.1 1127 C 473.6 1120.4 475.2 1113.7 476.8 1106.8 C 481.9 1085.9 487.4 1063 490.6 1040.8 C 491.5 1034.7 498.4 1031.5 503.8 1034.7 C 528.8 1049.8 550.9 1065.4 573.5 1084.1 C 597.3 1103.8 623.2 1123.2 649.1 1141 C 656.7 1146.3 664.3 1151.6 672 1157 C 690 1169.7 707.6 1184.3 724.6 1198.5 C 737 1208.8 749.7 1219.3 762.7 1229.2 C 766.2 1231.8 764.6 1237.4 760.3 1237.6 C 753.4 1238 746.3 1238 739.8 1238 C 733.3 1238.1 727.1 1238.1 721.7 1238.4 C 711.9 1238.9 702 1239.5 692.1 1240.2 C 654.4 1242.6 615.5 1245 578 1242.6 C 554.7 1241 530.9 1238.6 508 1236.3 C 494.9 1235 481.9 1233.7 468.8 1232.5 C 464.2 1232.1 459.3 1231.7 454.2 1231.3 M 462.5 976.3 C 456.1 972.7 448.1 967.1 438.7 959.7 C 426.6 950.3 420.9 934.3 424 919.2 C 428.3 898.7 431.1 884.8 432.3 877.7 C 437.6 846.6 445.2 814.4 452.6 783.3 C 457.2 763.8 462 743.6 466.1 723.9 C 473 691.6 480 658.8 487.1 625.8 C 500.8 562.4 515 496.8 527.7 433.6 C 530.8 417.9 533.4 402.6 535.9 387.8 C 538.6 371.8 541.2 356.7 544.4 341.5 C 545.7 334.9 549.8 328.9 555.9 326.1 C 563.8 322.3 572.6 323.5 579 329 C 598.9 346.2 620.4 362.8 641.2 378.8 C 654.7 389.2 667.4 399 679.3 408.7 L 690.5 417.7 C 742.4 459.7 796 503.1 845 547.9 C 848.8 551.2 853.9 556.2 859.9 561.9 C 884.8 585.7 901.6 601.1 913.9 609.8 C 917.9 612.6 919.9 617.5 918.8 622.3 C 893.3 737.6 877.6 828.7 861.1 924.7 C 856.6 951.2 851.9 978.2 847 1006.4 C 839 1051.8 829.2 1095.9 818.8 1142.6 C 814 1164.1 809.2 1186 804.6 1208 C 803.4 1213.8 796.6 1216.5 791.9 1213.1 C 775.8 1201.5 760.2 1188.7 744 1175.2 C 726.5 1160.7 708.4 1145.6 689.5 1132.2 C 681.7 1126.7 673.9 1121.4 666.2 1116.1 C 640.7 1098.6 617.9 1080.5 593.6 1061.5 C 556.1 1032.1 529.6 1014.2 490.8 992.3 C 481.6 987.2 472.2 981.9 462.5 976.3 M 447.4 1099.7 C 445.7 1106.7 444.1 1113.6 442.6 1120.2 C 436.9 1145 433.9 1156.7 429.3 1174.5 L 425.7 1188.6 C 421.9 1203.6 415.5 1228.8 414.6 1243.9 C 414.1 1252.2 420.5 1259.4 428.8 1259.8 C 434.6 1260.2 440.3 1260.6 446 1261.1 C 450 1261.4 452.8 1265.1 451.9 1269 C 451.6 1270.8 451.2 1272.7 450.8 1274.7 C 444.2 1306.4 433.3 1359.4 421.9 1388.2 C 421.9 1388.2 421.9 1388.2 421.9 1388.2 C 421.9 1388.3 421.9 1388.3 421.8 1388.4 C 421.8 1388.6 421.7 1388.8 421.7 1389 C 421.4 1389.7 421.2 1390.4 421 1391.2 C 421 1391.6 421 1392.1 420.9 1392.5 C 420.9 1393.1 420.8 1393.6 420.8 1394.1 C 420.8 1394.8 420.9 1395.4 421 1396.1 C 421 1396.4 421 1396.7 421.1 1397 C 421.1 1397 421.1 1397 421.1 1397.1 C 421.4 1398.6 422.1 1400.1 422.9 1401.5 C 423 1401.7 423.1 1401.9 423.2 1402.1 C 424 1403.3 425 1404.4 426.1 1405.4 C 426.3 1405.6 426.6 1405.8 426.8 1405.9 C 427.9 1406.8 429 1407.5 430.3 1408 C 430.4 1408.1 430.5 1408.1 430.7 1408.1 C 430.8 1408.2 431 1408.2 431.2 1408.3 C 432.8 1408.8 434.3 1409.1 435.9 1409.1 C 435.9 1409.1 435.9 1409.1 435.9 1409.1 L 435.9 1409.1 C 435.9 1409.1 435.9 1409.1 435.9 1409.1 C 436.9 1409.1 437.9 1409 439 1408.8 C 468.2 1402.8 489.8 1398.7 510.7 1394.7 C 519.9 1393 528.7 1391.3 537.8 1389.5 C 541.9 1388.7 545.6 1392.2 544.9 1396.3 C 541.8 1414.6 537.3 1433.6 532.4 1453.6 C 525.3 1482.2 518.1 1511.8 514.6 1542.5 C 513.9 1548.3 516.7 1554.1 521.8 1557.1 C 524.2 1558.6 526.9 1559.3 529.6 1559.3 C 532.6 1559.3 535.5 1558.5 538.1 1556.7 C 555.4 1545.1 573.4 1533.7 590.8 1522.6 C 611.4 1509.6 632.5 1496.2 653.1 1481.9 C 656.6 1479.5 661.3 1482.8 660.1 1486.9 C 642.1 1551.4 623.5 1626.1 622.5 1630.3 C 620.9 1636.7 623.7 1643.5 629.4 1646.9 C 631.8 1648.3 634.5 1649 637.2 1649 C 640.8 1649 644.5 1647.7 647.3 1645.2 C 698.3 1599.3 745.9 1544.3 792.9 1476.8 C 823.1 1433.4 851 1370.8 872.6 1324.1 C 875.1 1318.8 883 1321.2 882 1327 L 851.3 1492.7 C 851 1494.6 816.5 1678.1 816.5 1690.9 C 816.5 1699.3 823.3 1706.3 831.6 1706.3 C 840 1706.3 846.8 1699.7 846.8 1691.3 C 847.4 1680.8 869.4 1559.9 881 1498.4 L 907.3 1345.3 C 908.4 1339.7 916.5 1340 917.1 1345.7 C 929.2 1455.1 964 1593.8 1000.6 1696 C 1002.7 1702.1 1008.5 1706.1 1014.8 1706.1 C 1015.3 1706.1 1015.8 1706 1016.4 1706 C 1023.2 1705.3 1028.6 1699.8 1029.8 1693 C 1034.9 1665 1038.8 1629.3 1042.9 1591.6 C 1045.3 1569.7 1047.8 1547.4 1050.5 1526.1 C 1051.2 1520.5 1058.4 1518.8 1061.6 1523.4 L 1078.2 1547.1 C 1090.9 1565.4 1104.1 1584.2 1117.4 1602.4 C 1118.9 1604.4 1120.8 1607.2 1123 1610.3 C 1144.6 1641.1 1158.8 1658.7 1172 1663.2 C 1173.6 1663.8 1175.3 1664.1 1176.9 1664.1 C 1179.8 1664.1 1182.6 1663.2 1185.1 1661.7 C 1189 1659.2 1191.5 1655.1 1192 1650.5 C 1193.5 1635.9 1198.7 1604 1203.8 1573.1 C 1207.3 1551.2 1210.8 1530.2 1213.2 1513.6 C 1213.7 1510.1 1217.5 1508.1 1220.8 1509.5 C 1229.6 1513.3 1238 1516.3 1246.3 1518.6 C 1247.6 1518.9 1248.9 1519.1 1250.2 1519.1 C 1253 1519.1 1255.8 1518.3 1258.3 1516.8 C 1261.8 1514.5 1264.3 1510.9 1265.1 1506.7 C 1266.8 1497.5 1268.4 1488.7 1269.9 1480.1 L 1286 1395.8 C 1286.6 1392.2 1290 1389.9 1293.5 1390.6 C 1307.8 1393.4 1325.9 1396.5 1340.7 1396.5 C 1341.8 1396.5 1342.8 1396.4 1344 1396.4 C 1351.9 1396.3 1358.4 1390.1 1358.9 1382.2 C 1360.7 1352.9 1374.1 1231.5 1380.3 1182.9 C 1380.7 1179.4 1383.1 1176.5 1386.4 1175.2 C 1396.9 1171.3 1412 1165.5 1431.6 1158 C 1459.5 1147.3 1480 1123 1485.9 1093.7 C 1491.8 1064.9 1495.5 1046.1 1496.9 1037.8 C 1503.1 1000.5 1510.3 967.1 1518 931.7 C 1523.1 908.4 1528.3 884.3 1533.3 858.9 C 1539.9 824.5 1547.7 790.8 1555.3 758.3 C 1566.4 710.2 1578 660.6 1585.6 608.6 C 1588.8 586.4 1594.7 559.8 1600.9 531.8 C 1602.5 524.5 1604.1 517.3 1605.7 510.1 C 1609.4 493.2 1606 475.3 1595.5 461.6 C 1579.1 440.2 1551.3 433.1 1527.4 442.7 C 1516 447.2 1477.8 462.7 1463.3 470.8 C 1434.5 487 1404 498.4 1371.8 510.5 C 1358.6 515.4 1345.4 520.4 1332.4 525.7 C 1319 531.1 1306.7 536 1294.9 540.6 C 1257.5 555.4 1225.2 568.2 1183.3 588.2 C 1170.5 594.3 1140.4 604.6 1118.2 609.8 C 1115.1 610.5 1111.9 610.5 1108.8 609.8 L 1085.6 604.4 C 1081.8 603.7 1079.2 600 1080 596.1 C 1083.1 581.4 1085.1 569.9 1087.1 558.7 C 1088.5 550.2 1090 541.8 1091.9 532.2 C 1093 526.6 1094 519.9 1095.1 512.6 C 1098.5 490.1 1103.2 459.3 1114.5 446.5 C 1119.6 440.6 1127.8 433.7 1136.6 434.3 C 1144.4 434.8 1152.6 441 1159.6 451.6 C 1163.7 457.8 1171.7 460.9 1178.5 457.9 C 1187.5 454.1 1190.4 443.5 1185.4 435.8 C 1173 416.6 1156.4 405.3 1138.7 404.1 C 1127 403.2 1109.2 406.5 1091.7 426.6 C 1074.6 446 1069.4 480.4 1065.2 508.1 C 1064.2 514.8 1063.2 521.1 1062.2 526.4 C 1060.2 536.2 1058.7 544.8 1057.2 553.5 C 1055.2 565 1053.1 576.9 1049.9 592.2 C 1049.2 595.7 1045.8 598.1 1042.3 597.5 C 1039.9 597.1 1037.5 596.6 1035.3 596.1 C 1030.2 595.1 1023.9 594 1016.9 592.9 C 1012.3 592.2 1009.1 587.7 1010.2 583.2 C 1013.4 569 1015.2 554.3 1016.7 541.8 L 1017.8 533.3 C 1018.3 528.7 1019.1 523 1020 516.6 C 1023.1 494 1027.3 463.2 1028.1 446.7 C 1028.2 444.1 1028.5 441.3 1028.8 438.4 C 1029.9 428.6 1031.1 417.5 1027.9 407 C 1021.6 386.7 1004.7 373.8 982.6 372.6 C 958.5 371.4 934.8 384.5 925.2 404.2 C 921.6 411.7 923.5 421.1 930.6 425.2 C 938.7 429.8 948.7 426.3 952.2 418.1 C 956.1 408.9 968.8 402.1 980.9 402.9 C 987.4 403.2 995.8 405.8 998.9 415.9 C 1000.3 420.4 999.5 428.3 998.7 435.2 C 998.4 438.7 998 442.1 997.9 445.2 C 997.1 460.4 993 490.5 990 512.5 C 989.1 519 988.3 524.8 987.7 529.4 L 986.7 538.2 L 978.7 582.5 C 978.1 586 974.9 588.5 971.4 588.4 C 962.2 588 953.2 588.1 945 588.7 C 940.8 589.1 936.7 587.9 933.6 585.2 L 880.8 540 C 874.6 534.1 869.2 528.9 865.4 525.5 C 815.7 480.2 761.7 436.5 709.5 394.2 L 698.4 385.2 C 686.1 375.2 673.3 365.3 659.7 354.9 C 639.6 339.4 618.9 323.4 599.9 307.1 C 586.2 295.3 567.2 290.6 549.9 295.9 C 531.9 301.6 518.7 316 514.9 334.4 C 511.6 350.5 508.8 366.8 506.1 382.7 C 503.6 397.3 501 412.4 498 427.6 C 485.3 490.7 471.2 556.1 457.6 619.5 C 450.4 652.5 443.4 685.3 436.5 717.6 C 432.4 737 427.7 757 423.1 776.3 C 415.6 807.9 407.9 840.5 402.4 872.6 C 401.3 879.2 398.5 893.2 394.4 913 C 388.8 939.8 398.6 966.8 420 983.5 C 430.6 991.8 439.8 998.2 447.5 1002.6 C 449.4 1003.7 451.3 1004.8 453.1 1005.8 C 459.3 1009.3 462.5 1016.3 461.3 1023.2 Z M 1025.9 708.7 C 1028.1 709.8 1030.4 710.3 1032.7 710.3 C 1038.2 710.3 1043.5 707.2 1046.2 702 C 1048.4 697.6 1050 684.2 1050 684 C 1050.6 675.8 1044.6 668.7 1036.5 667.9 C 1028.2 667.1 1020.9 672.9 1019.9 681.1 C 1019.7 682.4 1018.6 688.8 1018.2 690.8 C 1016.1 697.7 1019.2 705.3 1025.9 708.7 M 984.3 704 C 991.4 704 997.3 699.2 999 692.7 C 999.2 692.2 999.3 691.7 999.3 691.5 L 999.3 691.5 C 999.4 691 999.5 690.4 999.6 690 L 999.8 689.1 C 999.8 688.9 999.8 688.7 999.8 688.5 C 999.9 688.1 1000 687.7 1000.1 687.3 C 1000.2 687 1000.2 686.7 1000.2 686.4 L 1000.6 684.5 C 1000.9 682.7 1001.2 681 1001.4 680 C 1003.4 672.6 999.5 664.7 992.2 661.9 C 984.4 658.9 975.6 662.8 972.6 670.6 C 971.9 672.5 971.6 674.1 970.7 679.5 L 970.4 681.3 C 970.3 681.8 970.2 682.3 970.1 682.9 C 970.1 682.9 970.1 682.9 970.1 682.9 C 970 683.6 969.8 684.3 969.7 684.9 C 969.4 686.2 969.2 687.6 969.2 688.9 C 969.2 697.2 976 704 984.3 704 M 983.3 816 C 986.2 816.7 989 817 991.8 817 C 998.6 817 1005.1 815 1011 811.1 C 1029.6 798.9 1037.2 770.6 1040 754.8 C 1041.5 746.6 1036 738.7 1027.8 737.2 C 1019.5 735.8 1011.7 741.2 1010.2 749.4 C 1007.1 766.8 1000.6 781.8 994.4 785.8 C 993.2 786.6 992.2 787 990.2 786.5 C 982.7 784.8 981.1 775.3 984 750.3 L 984.3 747.7 C 985.3 739.4 979.3 731.9 971 730.9 C 962.8 729.9 955.2 735.9 954.3 744.2 L 954 746.7 C 951.6 766.4 946.7 807.5 983.3 816 \"/>";
const BF_VB = "380 280 1240 1440";
const BF_CLIPS = {
  l:"0,0 900,0 900,590 960,600 960,2000 0,2000",
  c:"900,0 1200,0 1200,590 1100,600 1005,1310 820,1290 900,600",
  r:"960,600 1200,590 1200,0 2000,0 2000,2000 960,2000"
};
let bfN = 0;
function butterflyHTML(){
  const id = "bf"+(bfN++);
  const svg = k => `<svg viewBox="${BF_VB}" aria-hidden="true"><defs><clipPath id="${id}${k}"><polygon points="${BF_CLIPS[k]}"/></clipPath></defs><g clip-path="url(#${id}${k})">${BF_PATHS}</g></svg>`;
  return `<div class="bf-wing bf-wing-l">${svg("l")}</div>${svg("c")}<div class="bf-wing bf-wing-r">${svg("r")}</div>`;
}
document.querySelectorAll("[data-butterfly]").forEach(el => { el.innerHTML = butterflyHTML(); });

/* ---------- Catalogue (example titles — placeholder content) ---------- */
const THB = n => "฿" + n.toLocaleString("en-US");
const BOOKS = [
  {id:"b1", title:"The Magnifying Glass", author:"Prae Sirisawat", cat:"Picture Books", price:590, tags:["new","picks"], pattern:0, pal:0, format:"Hardcover · 40 pp · 24 × 28 cm", blurb:"A wordless picture book about a girl who inherits her grandmother's magnifying glass and discovers that everything, looked at closely enough, is a little bit strange."},
  {id:"b2", title:"Shophouse Tiles of Bangkok", author:"Warren Lim & Ploy Nakornthab", cat:"Design & Art", price:1450, tags:["new","picks"], pattern:1, pal:1, format:"Softcover · 224 pp · 17 × 24 cm", blurb:"A field guide to the encaustic and terrazzo floor tiles of Bangkok's old shophouses, with 300 patterns photographed and mapped by district."},
  {id:"b3", title:"Wall Label", author:"Ines Marchetti", cat:"Fiction", price:520, tags:["new","picks"], pattern:2, pal:3, format:"Paperback · 188 pp", blurb:"A novel told entirely in the wall labels of an imaginary museum retrospective — the artist's life assembled one caption at a time."},
  {id:"b4", title:"How to Fold a River", author:"Tomo Ishida", cat:"Picture Books", price:640, tags:["new"], pattern:3, pal:3, format:"Hardcover · 48 pp", blurb:"An origami adventure where each spread is a fold — and the river finally becomes a paper boat."},
  {id:"b5", title:"Slow Ink", author:"Chalida Boonyarat", cat:"Non-fiction", price:780, tags:["new"], pattern:4, pal:4, format:"Softcover · 160 pp", blurb:"Essays on handwriting, letterpress and why slowness is a design decision."},
  {id:"b6", title:"A Dictionary of Small Machines", author:"Ola Bergström", cat:"Non-fiction", price:890, tags:["new"], pattern:5, pal:5, format:"Hardcover · 240 pp", blurb:"Whisks, hinges, zips and 120 other everyday mechanisms, each explained in one drawing."},
  {id:"b7", title:"Night Market Alphabet", author:"Mint Tangtrongchit", cat:"Picture Books", price:450, tags:["bestseller"], pattern:6, pal:1, format:"Board book · 28 pp", blurb:"A to Z through a Bangkok night market, with a foldout of the whole street."},
  {id:"b8", title:"The Grid and the Garden", author:"Hana Lévy", cat:"Design & Art", price:1650, tags:["limited"], pattern:1, pal:6, format:"Clothbound · 312 pp · numbered edition of 500", blurb:"On graphic systems that make room for accidents. Numbered edition with a screen-printed slipcase."},
  {id:"b9", title:"Nobody Owns the Moon", author:"Ravi Menon", cat:"Fiction", price:495, tags:["bestseller"], pattern:7, pal:3, format:"Paperback · 264 pp", blurb:"Three siblings, one inheritance, and a family argument about who gets to keep the sky."},
  {id:"b10", title:"Colour Is a Verb", author:"Studio Kamol", cat:"Design & Art", price:1280, tags:["bestseller"], pattern:0, pal:2, format:"Softcover · 200 pp", blurb:"A working colour manual from a Bangkok studio — swatches, mistakes, and the notes in the margins."},
  {id:"b11", title:"Where Did the Bus Go?", author:"Prae Sirisawat", cat:"Picture Books", price:560, tags:[], pattern:3, pal:5, format:"Hardcover · 36 pp", blurb:"A lost bus, a very patient cat, and a city drawn from the top of a footbridge."},
  {id:"b12", title:"The Committee of Clouds", author:"Ines Marchetti", cat:"Fiction", price:540, tags:[], pattern:5, pal:0, format:"Paperback · 220 pp", blurb:"A comic novel in which the weather is decided by committee, and the committee cannot agree."},
  {id:"b13", title:"Kitchen Physics", author:"Dr. Nim Rattanakul", cat:"Non-fiction", price:720, tags:[], pattern:2, pal:4, format:"Softcover · 176 pp", blurb:"Why soufflés rise, why toast burns, and other experiments you can eat."},
  {id:"b14", title:"Today We Read × Papier Tigre", author:"Collaboration", cat:"Limited Editions", price:1900, tags:["limited"], pattern:4, pal:6, format:"Boxed set · 3 notebooks + print", blurb:"A boxed collaboration: three notebooks with our butterfly on the endpapers and a risograph print."},
  {id:"b15", title:"Very Big, Very Small", author:"Tomo Ishida", cat:"Picture Books", price:610, tags:[], pattern:7, pal:2, format:"Hardcover · 44 pp", blurb:"A picture book about scale — an ant's map of a kitchen, a whale's map of a bathtub."},
  {id:"b16", title:"Letters to a Young Bookseller", author:"Ada Quinlan", cat:"Non-fiction", price:650, tags:[], pattern:6, pal:0, format:"Paperback · 144 pp", blurb:"Twelve letters on how to choose, how to shelve, and how to say no to a bestseller."}
];
const NONBOOKS = [
  {id:"n1", title:"Butterfly Book Stand", cat:"Objects", price:1250, tags:["new"], pattern:8, pal:0, format:"Powder-coated steel · 18 cm", blurb:"A folded-steel stand that holds a book open at the page you left — shaped like our butterfly mid-flap."},
  {id:"n2", title:"Shelf Talker Card Game", cat:"Games", price:690, tags:["new"], pattern:9, pal:2, format:"110 cards · 2–6 players", blurb:"Pitch a made-up book in 30 seconds. The table decides whether it goes on the shelf."},
  {id:"n3", title:"Tile Pattern Risograph Print", cat:"Prints", price:850, tags:["limited"], pattern:1, pal:6, format:"A3 · 2-colour risograph · edition of 100", blurb:"One shophouse tile pattern from the book, printed at scale on Munken paper."},
  {id:"n4", title:"Reading Log Notebook", cat:"Stationery", price:380, tags:[], pattern:4, pal:4, format:"A5 · 96 pp · thread-sewn", blurb:"A page per book: date, one line, and a square to draw the cover from memory."},
  {id:"n5", title:"Wooden Alphabet Blocks", cat:"Games", price:1450, tags:[], pattern:6, pal:1, format:"26 beech blocks · from 3 years", blurb:"Thai and Latin letters on opposite faces, hand-painted in butter yellow and plum."},
  {id:"n6", title:"Today We Read Tote", cat:"Objects", price:590, tags:["bestseller"], pattern:8, pal:5, format:"Heavy cotton canvas · 38 × 42 cm", blurb:"Holds eleven picture books. We counted."},
  {id:"n7", title:"Pocket Magnifier", cat:"Objects", price:320, tags:[], pattern:0, pal:3, format:"Brass · 3× magnification", blurb:"The magnifying glass from the picture book, more or less."},
  {id:"n8", title:"Cloud Committee Jigsaw", cat:"Games", price:980, tags:["limited"], pattern:5, pal:2, format:"500 pieces · 50 × 70 cm", blurb:"A collaboration with the illustrator of The Committee of Clouds. Mostly sky, sorry."}
];
const PALS = [
  ["#FFD468","#945777"],["#F4E7EE","#5E3349"],["#945777","#FFD468"],["#BFD9D0","#2F5C4E"],
  ["#FCF8EC","#945777"],["#F6C7B1","#7A3A2C"],["#5E3349","#FFD468"],["#D8DDF0","#2E3F7A"]
];
function cover(item, big){
  const [bg, fg] = PALS[item.pal];
  const p = item.pattern;
  let art = "";
  if(p===0) art = `<circle cx="150" cy="150" r="80" fill="${fg}"/><circle cx="150" cy="150" r="42" fill="${bg}"/><circle cx="215" cy="215" r="22" fill="${fg}"/>`;
  if(p===1) art = Array.from({length:6},(_,i)=>Array.from({length:4},(_,j)=>`<rect x="${20+j*65}" y="${20+i*65}" width="55" height="55" rx="${(i+j)%2?27:4}" fill="${fg}" opacity="${(i+j)%2?1:.35}"/>`).join("")).join("");
  if(p===2) art = `<path d="M0 240 Q75 140 150 240 T300 240 V400 H0Z" fill="${fg}"/><path d="M0 290 Q75 200 150 290 T300 290 V400 H0Z" fill="${bg}" opacity=".5"/>`;
  if(p===3) art = Array.from({length:7},(_,i)=>`<rect x="0" y="${110+i*38}" width="300" height="18" fill="${fg}" opacity="${1-i*.11}"/>`).join("");
  if(p===4) art = `<rect x="40" y="70" width="220" height="220" fill="none" stroke="${fg}" stroke-width="10"/><rect x="90" y="120" width="120" height="120" fill="${fg}"/>`;
  if(p===5) art = `<path d="M60 300 A90 90 0 0 1 240 300Z" fill="${fg}"/><path d="M100 300 A50 50 0 0 1 200 300Z" fill="${bg}"/><circle cx="150" cy="110" r="30" fill="${fg}"/>`;
  if(p===6) art = Array.from({length:5},(_,i)=>`<circle cx="${40+i*55}" cy="${140+(i%2)*80}" r="26" fill="${fg}"/>`).join("");
  if(p===7) art = `<polygon points="150,60 270,300 30,300" fill="${fg}"/><polygon points="150,150 215,280 85,280" fill="${bg}"/>`;
  if(p===8) art = `<path d="M60 220 L150 140 L240 220 L150 300Z" fill="${fg}"/><path d="M150 140 V300" stroke="${bg}" stroke-width="10"/>`;
  if(p===9) art = Array.from({length:3},(_,i)=>`<rect x="${70+i*30}" y="${90+i*30}" width="150" height="200" rx="10" fill="${fg}" opacity="${.4+i*.3}" transform="rotate(${-10+i*8} 150 200)"/>`).join("");
  const fs = big ? 26 : 22;
  return `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${item.title}"><rect width="300" height="400" fill="${bg}"/>${art}<rect y="316" width="300" height="84" fill="${bg}"/>
  <text x="24" y="352" font-family="PP Mori, Helvetica, sans-serif" font-weight="600" font-size="${fs}" fill="${fg}">${wrapText(item.title, 20).map((l,i)=>`<tspan x="24" dy="${i?fs*1.1:0}">${l}</tspan>`).join("")}</text>
  ${item.author?`<text x="24" y="386" font-family="PP Mori, Helvetica, sans-serif" font-size="12" fill="${fg}" opacity=".85">${item.author}</text>`:""}</svg>`;
}
function wrapText(s,n){const w=s.split(" "),out=[];let cur="";for(const x of w){if((cur+" "+x).trim().length>n){out.push(cur.trim());cur=x}else cur+=" "+x}if(cur.trim())out.push(cur.trim());return out.slice(0,2)}
const esc = s => s.replace(/&/g,"&amp;").replace(/</g,"&lt;");
const TAG = {new:"New release", picks:"Book club pick", bestseller:"Bestseller", limited:"Limited edition"};

/* ---------- State ---------- */
let cart = {}, wish = new Set();
try{ cart = JSON.parse(localStorage.getItem("twr.cart")||"{}"); wish = new Set(JSON.parse(localStorage.getItem("twr.wish")||"[]")); }catch(e){}
function save(){ try{ localStorage.setItem("twr.cart", JSON.stringify(cart)); localStorage.setItem("twr.wish", JSON.stringify([...wish])); }catch(e){} }
const ALL = [...BOOKS, ...NONBOOKS];
const find = id => ALL.find(x=>x.id===id);

/* ---------- Card ---------- */
function card(item){
  const tag = item.tags.find(t=>TAG[t]);
  return `<article class="card" data-id="${item.id}">
    <div class="cover">${cover(item)}${tag?`<span class="tag">${TAG[tag]}</span>`:""}</div>
    <button class="open" aria-label="View ${esc(item.title)}" data-open="${item.id}"></button>
    <div class="meta"><span class="cat">${item.cat}</span><span class="title">${esc(item.title)}</span>${item.author?`<span class="author">${esc(item.author)}</span>`:""}<span class="price">${THB(item.price)}</span></div>
    <div class="actions"><button class="btn small solid" data-add="${item.id}">Add to cart</button><button class="wish ${wish.has(item.id)?"on":""}" data-wish="${item.id}" aria-label="Add to wishlist" aria-pressed="${wish.has(item.id)}"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg></button></div>
  </article>`;
}

/* ---------- Home ---------- */
document.getElementById("railNew").innerHTML = BOOKS.filter(b=>b.tags.includes("new")).map(card).join("");
document.getElementById("pickStack").innerHTML = BOOKS.filter(b=>b.tags.includes("picks")).map(b=>`<div class="cover">${cover(b,true)}</div>`).join("");
const CATS = [
  {name:"Children's", key:"Picture Books", art:0, pal:0},
  {name:"Lifestyle", key:"Non-fiction", art:2, pal:3},
  {name:"Art & Design", key:"Design & Art", art:1, pal:1},
  {name:"Fiction & Literature", key:"Fiction", art:5, pal:2},
  {name:"Non-Fiction", key:"Non-fiction", art:3, pal:4}
];
document.getElementById("cats").innerHTML = CATS.map(c=>{
  const n = BOOKS.filter(b=>b.cat===c.key).length;
  const [bg,fg]=PALS[c.pal];
  return `<a class="cat-tile" href="#books" data-tab="${c.key}" style="background:${bg};color:${fg}">${cover({title:"",pattern:c.art,pal:c.pal}).replace(/<text[\s\S]*?<\/text>/g,"")}<span class="name">${c.name}</span><span class="count">${n} titles</span></a>`;
}).join("");
document.getElementById("giftRow").innerHTML = NONBOOKS.slice(0,4).map(n=>`<a class="gift" href="#nonbooks" data-open-later="${n.id}"><div class="thumb">${cover(n).replace(/<text[\s\S]*?<\/text>/g,"").replace('viewBox="0 0 300 400"','viewBox="0 10 300 300"')}</div><span class="name">${esc(n.title)}</span><span class="price">${THB(n.price)}</span></a>`).join("");

/* ---------- Events ---------- */
const EVENTS = {
  current:{title:"Looking Closely — a mini-exhibition", when:"1–30 September 2026 · in the shop, free", desc:"Original drawings from The Magnifying Glass hung at child height, a wall of shophouse tiles you can touch, and a reading corner with 40 magnifiers to borrow.", pal:6, art:0},
  upcoming:[
    {title:"Fold a River — origami workshop with Tomo Ishida", when:"Sat 3 Oct · 11:00 & 14:00 · ages 5+ · ฿350", desc:"Ninety minutes, one long strip of paper, and a river that ends up as a boat. Parents fold too.", pal:3, art:3},
    {title:"Wall Label — reading & signing with Ines Marchetti", when:"Thu 15 Oct · 19:00 · free, booking essential", desc:"The author reads from her museum-caption novel, followed by a conversation about writing in fragments.", pal:1, art:2}
  ],
  past:[
    {title:"Colour Is a Verb — swatch night", when:"August 2026", desc:"Studio Kamol mixed paint live from reader requests.", pal:2, art:4},
    {title:"Night Market Alphabet — launch party", when:"July 2026", desc:"Twenty-six snacks, one per letter.", pal:5, art:6},
    {title:"Small Machines — take-apart afternoon", when:"June 2026", desc:"Kids dismantled 40 broken appliances; most went back together.", pal:0, art:5}
  ]
};
function evArt(e){ return cover({title:"",pattern:e.art,pal:e.pal}).replace(/<text[\s\S]*?<\/text>/g,"").replace('viewBox="0 0 300 400"','viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice"'); }
const cur = EVENTS.current;
document.getElementById("evCurrent").innerHTML = `<a class="ev-hero" href="#events" onclick="event.preventDefault();toast('Event detail page — ${esc(cur.title)}')"><svg class="art" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice">${evArt(cur).replace(/^<svg[^>]*>|<\/svg>$/g,"")}</svg><div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(94,51,73,0) 30%,rgba(94,51,73,.85))"></div><div class="body"><p class="eyebrow">Now on</p><h3 class="display">${cur.title}</h3><p>${cur.desc}</p><p class="when">${cur.when}</p></div></a>`;
document.getElementById("evUpcoming").innerHTML = EVENTS.upcoming.map(e=>`<div class="ev-card"><div class="art">${evArt(e)}</div><div class="body"><span class="when">${e.when}</span><h3>${e.title}</h3><p>${e.desc}</p><button class="btn small solid" onclick="toast('Booking opens here — Shopify product or external link.')">Book a place</button></div></div>`).join("");
document.getElementById("evPast").innerHTML = EVENTS.past.map(e=>`<div class="item"><div class="art">${evArt(e)}</div><h4>${e.title}</h4><p>${e.desc}</p><span class="when">${e.when}</span></div>`).join("");
document.getElementById("homeEvents").innerHTML = `<div class="ev-two" style="margin-top:0">${[cur, EVENTS.upcoming[0]].map((e,i)=>`<div class="ev-card"><div class="art">${evArt(e)}</div><div class="body"><span class="when">${i?e.when:"Now on · "+e.when}</span><h3>${e.title}</h3><p>${e.desc}</p><a class="btn small" href="#events">${i?"Book a place":"See the exhibition"}</a></div></div>`).join("")}</div>`;

/* ---------- Shop views ---------- */
function shop(cfg){
  const {items, tabsEl, gridEl, countEl, emptyEl, searchEl, tabs} = cfg;
  let tab = tabs[0].key, q = "";
  function render(){
    const t = tabs.find(x=>x.key===tab);
    const list = items.filter(t.f).filter(i => !q || (i.title+" "+(i.author||"")+" "+i.cat).toLowerCase().includes(q));
    gridEl.innerHTML = list.map(card).join("");
    countEl.textContent = `${list.length} ${list.length===1?"title":"titles"}`;
    emptyEl.hidden = list.length>0;
    tabsEl.querySelectorAll(".tab").forEach(b=>b.setAttribute("aria-selected", b.dataset.key===tab));
  }
  tabsEl.innerHTML = tabs.map(t=>`<button class="tab" role="tab" data-key="${t.key}">${t.label}</button>`).join("");
  tabsEl.addEventListener("click", e=>{ const b=e.target.closest(".tab"); if(!b) return; tab=b.dataset.key; render(); });
  searchEl.addEventListener("input", ()=>{ q=searchEl.value.trim().toLowerCase(); render(); });
  render();
  return { setTab(k){ if(tabs.some(t=>t.key===k)){ tab=k; searchEl.value=""; q=""; render(); } }, render };
}
const bookShop = shop({
  items:BOOKS, tabsEl:document.getElementById("bookTabs"), gridEl:document.getElementById("bookGrid"), countEl:document.getElementById("bookCount"), emptyEl:document.getElementById("bookEmpty"), searchEl:document.getElementById("bookSearch"),
  tabs:[
    {key:"all", label:"All books", f:()=>true},
    {key:"new", label:"New release", f:b=>b.tags.includes("new")},
    {key:"Picture Books", label:"Picture books", f:b=>b.cat==="Picture Books"},
    {key:"Fiction", label:"Adults: Fiction", f:b=>b.cat==="Fiction"},
    {key:"Non-fiction", label:"Adults: Non-fiction", f:b=>b.cat==="Non-fiction"},
    {key:"Design & Art", label:"Adults: Design & Art", f:b=>b.cat==="Design & Art"},
    {key:"limited", label:"Limited editions / Collaborations", f:b=>b.tags.includes("limited")||b.cat==="Limited Editions"},
    {key:"picks", label:"Book club picks", f:b=>b.tags.includes("picks")}
  ]
});
const nbShop = shop({
  items:NONBOOKS, tabsEl:document.getElementById("nbTabs"), gridEl:document.getElementById("nbGrid"), countEl:document.getElementById("nbCount"), emptyEl:document.getElementById("nbEmpty"), searchEl:document.getElementById("nbSearch"),
  tabs:[
    {key:"all", label:"All", f:()=>true},
    {key:"new", label:"New release", f:b=>b.tags.includes("new")},
    {key:"Games", label:"Games", f:b=>b.cat==="Games"},
    {key:"Prints", label:"Prints", f:b=>b.cat==="Prints"},
    {key:"Objects", label:"Objects & stationery", f:b=>b.cat==="Objects"||b.cat==="Stationery"},
    {key:"limited", label:"Limited editions / Collaborations", f:b=>b.tags.includes("limited")}
  ]
});

/* ---------- Gift card ---------- */
const denoms=[500,1000,2000]; let denom=1000;
const denomEl=document.getElementById("denoms");
denomEl.innerHTML = denoms.map(d=>`<button class="denom" aria-pressed="${d===denom}" data-d="${d}">${THB(d)}</button>`).join("");
denomEl.addEventListener("click",e=>{const b=e.target.closest(".denom");if(!b)return;denom=+b.dataset.d;denomEl.querySelectorAll(".denom").forEach(x=>x.setAttribute("aria-pressed",+x.dataset.d===denom));document.getElementById("gcVal").textContent=THB(denom);});

/* ---------- Account ---------- */
function renderAccount(){
  const w=[...wish].map(find).filter(Boolean);
  document.getElementById("wishList").innerHTML = w.length ? w.map(i=>`<div class="item"><div class="cover">${cover(i)}</div><div><div class="t">${esc(i.title)}</div><div class="s">${i.author?esc(i.author)+" · ":""}${THB(i.price)}</div></div><button class="btn small" data-add="${i.id}">Add</button></div>`).join("") : `<p style="font-size:14px;color:var(--ink-soft)">Nothing saved yet — tap the heart on any title.</p>`;
  const orders=[
    {no:"#TWR-1042", date:"11 Sep 2026", items:[BOOKS[6],BOOKS[9]], status:"shipped", label:"Shipped · Kerry"},
    {no:"#TWR-0987", date:"28 Aug 2026", items:[BOOKS[2]], status:"done", label:"Delivered"},
    {no:"#TWR-0871", date:"2 Aug 2026", items:[NONBOOKS[1],BOOKS[0]], status:"done", label:"Delivered"}
  ];
  document.getElementById("orderList").innerHTML = orders.map(o=>`<div class="item"><div class="cover">${cover(o.items[0])}</div><div><div class="t">${o.no} · ${o.items.map(i=>esc(i.title)).join(", ")}</div><div class="s">${o.date} · ${THB(o.items.reduce((a,b)=>a+b.price,0))}</div></div><span class="status ${o.status}">${o.label}</span></div>`).join("");
}

/* ---------- Cart ---------- */
function cartItems(){ return Object.entries(cart).map(([id,q])=>({item:find(id),q})).filter(x=>x.item); }
function renderCart(){
  const lines=cartItems();
  const n=lines.reduce((a,l)=>a+l.q,0);
  document.getElementById("cartCount").textContent=n;
  const el=document.getElementById("cartLines");
  el.innerHTML = lines.map(l=>`<div class="line"><div class="cover">${cover(l.item)}</div><div><div class="t">${esc(l.item.title)}</div><div class="a">${l.item.author?esc(l.item.author)+" · ":""}${l.item.cat}</div><div class="qty"><button data-q="${l.item.id}" data-d="-1" aria-label="Decrease">−</button><span>${l.q}</span><button data-q="${l.item.id}" data-d="1" aria-label="Increase">+</button></div></div><div><div class="p">${THB(l.item.price*l.q)}</div><button class="rm" data-rm="${l.item.id}">Remove</button></div></div>`).join("");
  document.getElementById("cartEmpty").hidden = lines.length>0;
  document.getElementById("policyBox").style.display = lines.length?"":"none";
  const sub=lines.reduce((a,l)=>a+l.item.price*l.q,0);
  const ship = sub===0?0 : sub>=1500?0:60;
  document.getElementById("sumItems").textContent=THB(sub);
  document.getElementById("sumShip").textContent= ship?THB(ship):(sub?"Free":"฿0");
  document.getElementById("sumTotal").textContent=THB(sub+ship);
  document.getElementById("checkoutBtn").disabled = !lines.length;
}
function add(id){ cart[id]=(cart[id]||0)+1; save(); renderCart(); const i=find(id); toast(`Added “${i.title}” to your bag`); }

/* ---------- Drawer ---------- */
const drawer=document.getElementById("drawer"), bg=document.getElementById("drawerBg");
function openProduct(id){
  const i=find(id); if(!i) return;
  document.getElementById("drawerInner").innerHTML = `<button class="close" id="drawerClose" aria-label="Close"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
  <div class="pd"><div class="cover">${cover(i,true)}</div><div>
    <span class="eyebrow">${i.cat}${i.tags.find(t=>TAG[t])?" · "+TAG[i.tags.find(t=>TAG[t])]:""}</span>
    <h2>${esc(i.title)}</h2>${i.author?`<p class="author">${esc(i.author)}</p>`:""}
    <p class="price">${THB(i.price)}</p>
    <div class="spec"><b>Format</b><span>${i.format}</span><b>Availability</b><span>In stock · ships from Bangkok</span><b>Delivery</b><span>฿60 Bangkok · free over ฿1,500</span></div>
    <p class="desc">${i.blurb}</p>
    <div class="actions"><button class="btn solid" data-add="${i.id}">Add to cart</button><button class="btn" data-wish="${i.id}">${wish.has(i.id)?"Saved to wishlist":"Add to wishlist"}</button></div>
    <p class="note">Wishlist needs a member account. Returns accepted only for wrong or damaged items — see the exchange &amp; refund policy.</p>
  </div></div>`;
  drawer.classList.add("open"); bg.classList.add("open"); document.body.style.overflow="hidden";
  document.getElementById("drawerClose").focus();
}
function closeDrawer(){ drawer.classList.remove("open"); bg.classList.remove("open"); document.body.style.overflow=""; }
bg.addEventListener("click", closeDrawer);
document.addEventListener("keydown", e=>{ if(e.key==="Escape") closeDrawer(); });

/* ---------- Global click handling ---------- */
document.addEventListener("click", e=>{
  const t=e.target;
  const a=t.closest("[data-add]"); if(a){ add(a.dataset.add); return; }
  const w=t.closest("[data-wish]"); if(w){ const id=w.dataset.wish; if(wish.has(id)){wish.delete(id)} else {wish.add(id); toast("Saved to your wishlist")} save(); document.querySelectorAll(`[data-wish="${id}"]`).forEach(x=>{ if(x.classList.contains("wish")){x.classList.toggle("on",wish.has(id)); x.setAttribute("aria-pressed",wish.has(id));} else x.textContent=wish.has(id)?"Saved to wishlist":"Add to wishlist"; }); renderAccount(); return; }
  const o=t.closest("[data-open]"); if(o){ openProduct(o.dataset.open); return; }
  const q=t.closest("[data-q]"); if(q){ cart[q.dataset.q]=Math.max(0,(cart[q.dataset.q]||0)+ +q.dataset.d); if(!cart[q.dataset.q]) delete cart[q.dataset.q]; save(); renderCart(); return; }
  const r=t.closest("[data-rm]"); if(r){ delete cart[r.dataset.rm]; save(); renderCart(); return; }
  const tb=t.closest("[data-tab]"); if(tb){ pendingTab=tb.dataset.tab; }
  const gl=t.closest("[data-open-later]"); if(gl){ pendingOpen=gl.dataset.openLater; }
  if(t.closest("#drawerClose")) closeDrawer();
});
document.getElementById("checkoutBtn").addEventListener("click", ()=>{
  if(!document.getElementById("ackPolicy").checked){ toast("Please accept the exchange & refund policy first."); document.getElementById("ackPolicy").focus(); return; }
  toast("Handing over to Shopify Checkout (card / PromptPay)…");
});

/* ---------- Routing ---------- */
let pendingTab=null, pendingOpen=null;
const views=[...document.querySelectorAll(".view")];
function route(){
  const h=(location.hash||"#home").slice(1);
  const name=views.some(v=>v.dataset.view===h)?h:"home";
  views.forEach(v=>v.classList.toggle("active", v.dataset.view===name));
  document.querySelectorAll("nav.main a").forEach(a=>{ if(a.getAttribute("href")==="#"+name) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current"); });
  document.getElementById("mainNav").classList.remove("open");
  if(name==="books" && pendingTab){ bookShop.setTab(pendingTab); pendingTab=null; }
  if(name==="nonbooks" && pendingOpen){ const id=pendingOpen; pendingOpen=null; setTimeout(()=>openProduct(id),150); }
  if(name==="cart") renderCart();
  if(name==="account") renderAccount();
  closeDrawer();
  window.scrollTo({top:0, behavior:"instant"});
}
window.addEventListener("hashchange", route);
document.getElementById("menuBtn").style.display="";
document.getElementById("menuBtn").addEventListener("click", ()=>{ const n=document.getElementById("mainNav"); n.classList.toggle("open"); document.getElementById("menuBtn").setAttribute("aria-expanded", n.classList.contains("open")); });

/* ---------- Toast ---------- */
let toastT;
window.toast = function(msg){ const t=document.getElementById("toast"); document.getElementById("toastText").textContent=msg; t.classList.add("show"); clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove("show"),2600); };

renderCart(); renderAccount(); route();
})();
