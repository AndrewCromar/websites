<?php

include_once './CreateDBConnection.php';

function GetCreationDateByUserId($userId)
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("SELECT creationdate FROM users WHERE user_id = ?");
    $stmt->bind_param("s", $userId);

    $stmt->execute();

    $stmt->bind_result($creationdate);
    $stmt->fetch();

    $stmt->close();
    $conn->close();

    return $creationdate ? $creationdate : null;
}