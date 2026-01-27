<?php

include_once './CreateDBConnection.php';

function GetLastNameByUserId($userId)
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("SELECT lastname FROM users WHERE user_id = ?");
    $stmt->bind_param("s", $userId);

    $stmt->execute();

    $stmt->bind_result($lastname);
    $stmt->fetch();

    $stmt->close();
    $conn->close();

    return $lastname ? $lastname : null;
}