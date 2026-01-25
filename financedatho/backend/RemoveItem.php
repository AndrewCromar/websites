<?php
include_once $_SERVER['DOCUMENT_ROOT'] . '/hellhotelnodepth/backend/CreateDBConnection.php';

function DeleteItem($id)
{
    $conn = CreateDBConnection();
    $stmt = $conn->prepare("DELETE FROM items WHERE id=?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->close();
    $conn->close();
}

DeleteItem($_POST['id']);
echo "OK";
