<?php
include 'CreateDBConnection.php';

function GetFirstNameByUserId($userId)
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("SELECT firstname FROM users WHERE userId = ?");
    $stmt->bind_param("s", $userId);

    $stmt->execute();

    $stmt->bind_result($firstname);
    $stmt->fetch();

    $stmt->close();
    $conn->close();

    return $firstname ? $firstname : null;
}