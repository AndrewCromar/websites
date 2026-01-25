<?php
include_once $_SERVER['DOCUMENT_ROOT'] . '/backend/CreateDBConnection.php';

$conn = CreateDBConnection();
$conn->query("DELETE FROM codes WHERE time < (NOW() - INTERVAL 1 DAY)");
$conn->close();
