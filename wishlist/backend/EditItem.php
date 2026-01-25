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

$uid = $_SESSION['uid'];
$id = intval($_POST['id'] ?? 0);
$name = $_POST['name'] ?? '';
$link = $_POST['link'] ?? '';
$price = floatval($_POST['price'] ?? 0);

if (!$id || !$name || $price <= 0) {
    echo json_encode(["status" => "error", "message" => "Missing or invalid fields"]);
    exit;
}

include_once $_SERVER['DOCUMENT_ROOT'] . '/home3/astartup/public_html/andrewcromar/wishlist/backend/CreateDBConnection.php';
$conn = CreateDBConnection();

$stmt = $conn->prepare(
    "UPDATE items SET name = ?, link = ?, price = ? WHERE id = ? AND uid = ?"
);
$stmt->bind_param("ssdii", $name, $link, $price, $id, $uid);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo json_encode(["status" => "ok"]);
} else {
    echo json_encode(["status" => "error", "message" => "Item not found or nothing changed"]);
}

$stmt->close();
$conn->close();
