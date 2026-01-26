<?php
session_start();
include_once $_SERVER['DOCUMENT_ROOT'] . '/backend-old/CreateDBConnection.php';

function MarkItemBought($id)
{
    $conn = CreateDBConnection();
    $stmt = $conn->prepare("UPDATE items SET bought=TRUE WHERE id=?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->close();
    $conn->close();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: text/plain');

    if (!isset($_SESSION['uid'])) {
        http_response_code(401);
        echo "ERROR: Not logged in";
        exit;
    }

    if (!isset($_POST['id']) || !is_numeric($_POST['id'])) {
        http_response_code(400);
        echo "ERROR: Missing or invalid item ID";
        exit;
    }

    $id = intval($_POST['id']);

    try {
        MarkItemBought($id);
        echo "OK";
    } catch (Exception $e) {
        http_response_code(500);
        echo "ERROR: " . $e->getMessage();
    }
}
