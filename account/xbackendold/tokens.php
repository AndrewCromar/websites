<?php

function GetValidTokenForUserId($userId)
{
    $conn = getDbConnection();

    // Remove expired tokens for the user
    RemoveExpiredTokens($userId, $conn);

    // Check for an existing valid token
    $stmt = $conn->prepare("SELECT token FROM tokens WHERE user_id = ? AND expires_at > NOW() AND revoked = FALSE");
    if ($stmt === false) {
        die("Prepare failed: " . $conn->error);
    }

    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $stmt->store_result();

    // If an active token exists, return it
    if ($stmt->num_rows > 0) {
        $stmt->bind_result($existingToken);
        $stmt->fetch();
        $stmt->close();
        $conn->close();
        return $existingToken;
    }

    // If no active token exists, generate a new one
    $newToken = GenerateNewTokenForUser($userId, $conn);
    $conn->close();
    return $newToken;
}

function GenerateNewTokenForUser($userId, $conn)
{
    $newToken = bin2hex(random_bytes(32));
    $expiresAt = date('Y-m-d H:i:s', strtotime('+24 hours'));

    AddTokenToDB($userId, $newToken, $expiresAt);

    return $newToken;
}

function AddTokenToDB($userId, $token, $expiresAt)
{
    $conn = getDbConnection();

    $stmt = $conn->prepare("INSERT INTO tokens (token, user_id, expires_at) VALUES (?, ?, ?)");
    if ($stmt === false) {
        die("Prepare failed: " . $conn->error);
    }

    $stmt->bind_param("sis", $token, $userId, $expiresAt);
    if (!$stmt->execute()) {
        die("Execute failed: " . $stmt->error);
    }

    $stmt->close();
}

function RemoveExpiredTokens($userId, $conn)
{
    $stmt = $conn->prepare("DELETE FROM tokens WHERE user_id = ? AND expires_at <= NOW()");
    if ($stmt === false) {
        die("Prepare failed: " . $conn->error);
    }
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $stmt->close();
}
?>
