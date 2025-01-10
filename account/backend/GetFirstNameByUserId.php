<?php

include_once './CreateDBConnection.php';

function GetFirstNameByUserId($userId)
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("SELECT firstname FROM users WHERE user_id = ?");
    $stmt->bind_param("s", $userId);

    $stmt->execute();

    $stmt->bind_result($firstname);
    $stmt->fetch();

    $stmt->close();
    $conn->close();

    return $firstname ? $firstname : null;
}