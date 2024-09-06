<?php

include './CreateDBConnection.php';

function SaveTokenToDatabaseForUser($token, $userId)
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("INSERT INTO tokens (token, user_id, expires_at) VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 24 HOUR))");

    $stmt->bind_param("si", $token, $userId);

    if ($stmt->execute()) {
        return true;
    } else {
        return false;
    }

    $stmt->close();
    $conn->close();
}
