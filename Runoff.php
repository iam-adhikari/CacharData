<?php
include 'db1.php';

$year=$_POST['userYear'];
$month=$_POST['userMonth'];
$day=$_POST['userDay'];


$sql1 = "SELECT place, cumecs, waterlevel, st_asgeojson(the_geom) FROM moneirkhal where days='{$day}-{$month}-{$year}'";
$sql2 = "SELECT place, cumecs, waterlevel, st_asgeojson(the_geom) FROM tulagram where days='{$day}-{$month}-{$year}'";


$ra1 = pg_fetch_all(pg_query($dbcon,$sql1));
$ra2 = pg_fetch_all(pg_query($dbcon,$sql2));



$allarrays=array_merge($ra1,$ra2);
echo json_encode($allarrays);

?>