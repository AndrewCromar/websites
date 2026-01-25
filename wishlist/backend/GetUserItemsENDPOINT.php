<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['uid'])) {
    http_response_code(401);
    echo json_encode([]);
    exit;
}

include_once $_SERVER['DOCUMENT_ROOT'] . '/home3/astartup/public_html/andrewcromar/wishlist/backend/GetUserItems.php';

$items = GetUserItems($_SESSION['uid']);
echo json_encode($items);
