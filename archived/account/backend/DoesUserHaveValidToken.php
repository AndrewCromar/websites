<?php

include_once './CreateDBConnection.php';

function DoesUserHaveValidToken($userId)
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("SELECT token FROM tokens WHERE user_id = ? AND expires_at > NOW()");
    $stmt->bind_param("s", $userId);

    $stmt->execute();

    $stmt->bind_result($token);
    $stmt->fetch();

    $stmt->close();
    $conn->close();

    return !empty($token);
}
