<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['uid'])) {
    http_response_code(401);
    echo json_encode(["status" => "error", "message" => "Not logged in"]);
    exit;
}

// Only POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
    exit;
}

// Validate amount
if (!isset($_POST['amount']) || !is_numeric($_POST['amount'])) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Missing or invalid funding amount"]);
    exit;
}

$uid = $_SESSION['uid'];
$amount = floatval($_POST['amount']);
if ($amount <= 0) {
    echo json_encode(["status" => "error", "message" => "Amount must be positive"]);
    exit;
}

// Include only function libraries, never output anything
include_once $_SERVER['DOCUMENT_ROOT'] . '/hellhotelnodepth/backend/GetUserItems.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/hellhotelnodepth/backend/AddMoneyToItem.php';

try {
    $items = GetUserItems($uid);

    if (!$items || count($items) === 0) {
        echo json_encode(["status" => "error", "message" => "No items to fund"]);
        exit;
    }

    // Calculate total remaining money to reach each item
    $totalRemaining = 0;
    $remainingList = [];
    foreach ($items as $item) {
        $remaining = max($item['price'] - $item['money_saved'], 0);
        $remainingList[] = $remaining;
        $totalRemaining += $remaining;
    }

    if ($totalRemaining === 0) {
        echo json_encode(["status" => "error", "message" => "All items are fully funded"]);
        exit;
    }

    // Add money proportionally
    foreach ($items as $index => $item) {
        $remaining = $remainingList[$index];
        $share = ($remaining / $totalRemaining) * $amount;

        if ($share > 0) {
            AddMoneyToItem($item['id'], $share);
        }
    }

    // Success
    echo json_encode(["status" => "ok"]);
    exit;

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
    exit;
}
