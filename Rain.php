<?php
include 'db.php';

$year=$_POST['userYear'];
$month=$_POST['userMonth'];

$sql1 = "SELECT place, val, st_asgeojson(the_geom) FROM amraghat where mon='{$month}-{$year}'";
$sql2 = "SELECT place, val, st_asgeojson(the_geom) FROM badarpur where mon='{$month}-{$year}'";
$sql3 = "SELECT place, val, st_asgeojson(the_geom) FROM barkhola where mon='{$month}-{$year}'";
$sql4 = "SELECT place, val, st_asgeojson(the_geom) FROM bhanga where mon='{$month}-{$year}'";
$sql5 = "SELECT place, val, st_asgeojson(the_geom) FROM bikrampur where mon='{$month}-{$year}'";
$sql6 = "SELECT place, val, st_asgeojson(the_geom) FROM dewan where mon='{$month}-{$year}'";
$sql7 = "SELECT place, val, st_asgeojson(the_geom) FROM dholai where mon='{$month}-{$year}'";
$sql8 = "SELECT place, val, st_asgeojson(the_geom) FROM dullabcherra where mon='{$month}-{$year}'";
$sql9 = "SELECT place, val, st_asgeojson(the_geom) FROM jafirbond where mon='{$month}-{$year}'";
$sql10 = "SELECT place, val, st_asgeojson(the_geom) FROM katlicherra where mon='{$month}-{$year}'";
$sql11 = "SELECT place, val, st_asgeojson(the_geom) FROM koyah where mon='{$month}-{$year}'";
$sql12 = "SELECT place, val, st_asgeojson(the_geom) FROM lakhipur where mon='{$month}-{$year}'";
$sql13 = "SELECT place, val, st_asgeojson(the_geom) FROM moneirkhal where mon='{$month}-{$year}'";
$sql14 = "SELECT place, val, st_asgeojson(the_geom) FROM palonghat where mon='{$month}-{$year}'";
$sql15 = "SELECT place, val, st_asgeojson(the_geom) FROM patharkandi where mon='{$month}-{$year}'";
$sql16 = "SELECT place, val, st_asgeojson(the_geom) FROM salchapara where mon='{$month}-{$year}'";
$sql17 = "SELECT place, val, st_asgeojson(the_geom) FROM silchar where mon='{$month}-{$year}'";
$sql18 = "SELECT place, val, st_asgeojson(the_geom) FROM silchar_airport where mon='{$month}-{$year}'";
$sql19 = "SELECT place, val, st_asgeojson(the_geom) FROM silcuri where mon='{$month}-{$year}'";

$ra1 = pg_fetch_all(pg_query($dbcon,$sql1));
$ra2 = pg_fetch_all(pg_query($dbcon,$sql2));
$ra3 = pg_fetch_all(pg_query($dbcon,$sql3));
$ra4 = pg_fetch_all(pg_query($dbcon,$sql4));
$ra5 = pg_fetch_all(pg_query($dbcon,$sql5));
$ra6 = pg_fetch_all(pg_query($dbcon,$sql6));
$ra7 = pg_fetch_all(pg_query($dbcon,$sql7));
$ra8 = pg_fetch_all(pg_query($dbcon,$sql8));
$ra9 = pg_fetch_all(pg_query($dbcon,$sql9));
$ra10 = pg_fetch_all(pg_query($dbcon,$sql10));
$ra11 = pg_fetch_all(pg_query($dbcon,$sql11));
$ra12 = pg_fetch_all(pg_query($dbcon,$sql12));
$ra13 = pg_fetch_all(pg_query($dbcon,$sql13));
$ra14 = pg_fetch_all(pg_query($dbcon,$sql14));
$ra15 = pg_fetch_all(pg_query($dbcon,$sql15));
$ra16 = pg_fetch_all(pg_query($dbcon,$sql16));
$ra17 = pg_fetch_all(pg_query($dbcon,$sql17));
$ra18 = pg_fetch_all(pg_query($dbcon,$sql18));
$ra19 = pg_fetch_all(pg_query($dbcon,$sql19));


$allarrays=array_merge($ra1,$ra2,$ra3,$ra4,$ra5,$ra6,$ra7,$ra8,$ra9,$ra10,$ra11,$ra12,$ra13,$ra14,$ra15,$ra16,$ra17,$ra18,$ra19);
echo json_encode($allarrays);

?>