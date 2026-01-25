<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['uid'])) {
    http_response_code(401);
    echo json_encode(["status" => "error", "message" => "Not logged in"]);
    exit;
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
    exit;
}

// Validate amount
if (!isset($_POST['amount']) || !is_numeric($_POST['amount'])) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Missing or invalid amount"]);
    exit;
}

$amount = floatval($_POST['amount']);
if ($amount <= 0) {
    echo json_encode(["status" => "error", "message" => "Amount must be positive"]);
    exit;
}

$uid = $_SESSION['uid'];

// Logic only (no output inside these files)
include_once $_SERVER['DOCUMENT_ROOT'] . '/hellhotelnodepth/backend/DistributeFunding.php';

try {
    DistributeFunding($uid, $amount);
    echo json_encode(["status" => "ok"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
