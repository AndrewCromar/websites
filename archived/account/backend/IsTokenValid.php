<?php

include_once './CreateDBConnection.php';
include_once './DeleteExpiredTokens.php';

function IsTokenValid($token)
{
    if (!DeleteExpiredTokens()) return false;

    $conn = CreateDBConnection();

    $stmt = $conn->prepare("SELECT COUNT(*) FROM tokens WHERE token = ?");
    $stmt->bind_param("s", $token);

    $stmt->execute();

    $stmt->bind_result($count);
    $stmt->fetch();

    $stmt->close();
    $conn->close();

    return $count > 0;
}
