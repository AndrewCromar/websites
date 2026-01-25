<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['uid'])) {
    http_response_code(401);
    echo json_encode(["status" => "error", "message" => "Not logged in"]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
    exit;
}

if (!isset($_POST['id']) || !is_numeric($_POST['id'])) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid item id"]);
    exit;
}

$uid = $_SESSION['uid'];
$itemId = intval($_POST['id']);

include_once $_SERVER['DOCUMENT_ROOT'] . '/hellhotelnodepth/backend/CreateDBConnection.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/hellhotelnodepth/backend/DistributeFunding.php';

$conn = CreateDBConnection();

$stmt = $conn->prepare(
    "SELECT money_saved, bought 
     FROM items 
     WHERE id = ? AND uid = ?"
);
$stmt->bind_param("ii", $itemId, $uid);
$stmt->execute();
$stmt->bind_result($moneySaved, $bought);
$stmt->fetch();
$stmt->close();

if ($moneySaved === null) {
    $conn->close();
    echo json_encode(["status" => "error", "message" => "Item not found"]);
    exit;
}

$stmt = $conn->prepare("DELETE FROM items WHERE id = ? AND uid = ?");
$stmt->bind_param("ii", $itemId, $uid);
$stmt->execute();
$stmt->close();

$conn->close();

if (!$bought && $moneySaved > 0) {
    DistributeFunding($uid, $moneySaved);
}

echo json_encode(["status" => "ok"]);
