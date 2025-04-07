<?php

include_once './CreateDBConnection.php';

function GetPasswordByUserId($userId)
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("SELECT password FROM users WHERE user_id = ?");
    $stmt->bind_param("s", $userId);

    $stmt->execute();

    $stmt->bind_result($password);
    $stmt->fetch();

    $stmt->close();
    $conn->close();

    return $password ? $password : null;
}