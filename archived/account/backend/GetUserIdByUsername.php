<?php

include_once './CreateDBConnection.php';

function GetUserIdByUsername($username)
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("SELECT user_id FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);

    $stmt->execute();

    $stmt->bind_result($userId);
    $stmt->fetch();

    $stmt->close();
    $conn->close();

    return $userId ? $userId : null;
}