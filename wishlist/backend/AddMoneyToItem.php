<?php
include_once $_SERVER['DOCUMENT_ROOT'] . '/backend/CreateDBConnection.php';

function AddMoneyToItem($id, $amount)
{
    $conn = CreateDBConnection();
    $stmt = $conn->prepare("UPDATE items SET money_saved = money_saved + ? WHERE id=?");
    $stmt->bind_param("di", $amount, $id);
    $stmt->execute();
    $stmt->close();
    $conn->close();
}
