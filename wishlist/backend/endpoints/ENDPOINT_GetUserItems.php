<?php

session_start();

require_once __DIR__ . '/../api/GetUserItems.php';

if (!isset($_SESSION['uid'])) { echo json_encode(["status" => "fail", "error" => "ERROR006"]); exit; }

$uid = $_SESSION['uid'];

$items = GetUserItems($uid);

if ($items === false) { echo json_encode(["status" => "fail", "error" => "ERROR007"]); exit; }

echo json_encode(["status" => "OK", "data" => $items]);
