<?php
include '../../global.php';

function getDbConnection()
{
    global $DB_servername, $DB_username, $DB_password, $DB_name;
    $conn = new mysqli($DB_servername, $DB_username, $DB_password, $DB_name);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
}
