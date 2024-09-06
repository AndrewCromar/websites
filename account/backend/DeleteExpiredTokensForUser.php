<?php

include_once './CreateDBConnection.php';

function DeleteExpiredTokensForUser($userId)
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("DELETE FROM tokens WHERE userId = ? AND expires_at < NOW()");

    $stmt->bind_param("s", $userId);

    if ($stmt->execute()) {
        return true;
    } else {
        return false;
    }

    $stmt->close();
    $conn->close();
}
