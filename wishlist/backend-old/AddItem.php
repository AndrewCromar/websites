<?php
include_once $_SERVER['DOCUMENT_ROOT'] . '/backend/CreateDBConnection.php';

function AddItem($name, $link, $price)
{
    session_start();
    if (!isset($_SESSION['uid'])) {
        http_response_code(401);
        echo "Not logged in";
        exit;
    }

    $conn = CreateDBConnection();
    $stmt = $conn->prepare("INSERT INTO items (uid, name, link, price) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("issd", $_SESSION['uid'], $name, $link, $price);
    $stmt->execute();
    $stmt->close();
    $conn->close();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $link = $_POST['link'];
    $price = floatval($_POST['price']);

    AddItem($name, $link, $price);
    echo "OK";
}
