<?php

$server = 'localhost';
$username = 'postgres';
$password = 'sudip123';
$db_name = 'Rainfall';

$dbcon = pg_connect("host=$server port=5432 dbname=$db_name user=$username password=$password");

    
?>