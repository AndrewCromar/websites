<?php

include_once './CreateDBConnection.php';

function GetUsernameByUserId($userId)
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("SELECT username FROM users WHERE user_id = ?");
    $stmt->bind_param("s", $userId);

    $stmt->execute();

    $stmt->bind_result($username);
    $stmt->fetch();

    $stmt->close();
    $conn->close();

    return $username ? $username : null;
}