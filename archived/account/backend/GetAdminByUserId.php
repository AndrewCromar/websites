<?php

include_once './CreateDBConnection.php';

function GetAdminByUserId($userId)
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("SELECT admin FROM users WHERE user_id = ?");
    $stmt->bind_param("s", $userId);

    $stmt->execute();

    $stmt->bind_result($admin);
    $stmt->fetch();

    $stmt->close();
    $conn->close();

    return $admin ? $admin : null;
}
