<?php

include './CreateDBConnection.php';

function GetValidTokenForUser($userId)
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("SELECT token FROM tokens WHERE user_id = ? AND expires_at > NOW()");
    $stmt->bind_param("s", $userId);

    $stmt->execute();

    $stmt->bind_result($token);
    $stmt->fetch();

    $stmt->close();
    $conn->close();

    return $token;
}
