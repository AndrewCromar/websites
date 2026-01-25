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

include_once $_SERVER['DOCUMENT_ROOT'] . '/backend/CreateDBConnection.php';

try {
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("DELETE FROM items WHERE uid = ? AND bought = TRUE");
    $stmt->bind_param("i", $uid);
    $stmt->execute();
    $stmt->close();

    $conn->close();

    echo json_encode(["status" => "ok"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => $e->getMessage()]);
}
