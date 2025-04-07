<?php

include_once './CreateDBConnection.php';

function DeleteExpiredTokens()
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("DELETE FROM tokens WHERE expires_at < NOW()");

    if ($stmt->execute()) {
        return true;
    } else {
        return false;
    }

    $stmt->close();
    $conn->close();
}
