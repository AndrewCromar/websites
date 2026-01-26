<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['uid'])) {
    http_response_code(401);
    echo json_encode(["status" => "error", "message" => "Not logged in"]);
    exit;
}

if (!isset($_GET['id']) || !is_numeric($_GET['id'])) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid item ID"]);
    exit;
}

$uid = $_SESSION['uid'];
$itemId = intval($_GET['id']);

include_once $_SERVER['DOCUMENT_ROOT'] . '/backend/CreateDBConnection.php';
$conn = CreateDBConnection();

$stmt = $conn->prepare(
    "SELECT name, link, price FROM items WHERE id = ? AND uid = ?"
);
$stmt->bind_param("ii", $itemId, $uid);
$stmt->execute();
$stmt->bind_result($name, $link, $price);
if ($stmt->fetch()) {
    echo json_encode([
        "status" => "ok",
        "item" => [
            "id" => $itemId,
            "name" => $name,
            "link" => $link,
            "price" => $price
        ]
    ]);
} else {
    echo json_encode(["status" => "error", "message" => "Item not found"]);
}
$stmt->close();
$conn->close();
