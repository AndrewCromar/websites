<?php

include_once './CreateDBConnection.php';

function GetEmailByUserId($userId)
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("SELECT email FROM users WHERE user_id = ?");
    $stmt->bind_param("s", $userId);

    $stmt->execute();

    $stmt->bind_result($email);
    $stmt->fetch();

    $stmt->close();
    $conn->close();

    return $email ? $email : null;
}