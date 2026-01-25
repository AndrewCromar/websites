<?php
include_once $_SERVER['DOCUMENT_ROOT'] . '/hellhotelnodepth/backend/CreateDBConnection.php';

function EditItem($id, $name, $link, $price)
{
    $conn = CreateDBConnection();
    $stmt = $conn->prepare("UPDATE items SET name=?, link=?, price=? WHERE id=?");
    $stmt->bind_param("ssdi", $name, $link, $price, $id);
    $stmt->execute();
    $stmt->close();
    $conn->close();
}
