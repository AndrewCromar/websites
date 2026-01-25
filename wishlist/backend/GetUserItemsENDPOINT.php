<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['uid'])) {
    http_response_code(401);
    echo json_encode([]);
    exit;
}

include_once $_SERVER['DOCUMENT_ROOT'] . '/hellhotelnodepth/backend/GetUserItems.php';

$items = GetUserItems($_SESSION['uid']);
echo json_encode($items);
