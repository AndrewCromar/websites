<?php
include 'CreateDBConnection.php';

function GetLastNameByUserId($userId)
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("SELECT lastname FROM users WHERE userId = ?");
    $stmt->bind_param("s", $userId);

    $stmt->execute();

    $stmt->bind_result($lastname);
    $stmt->fetch();

    $stmt->close();
    $conn->close();

    return $lastname ? $lastname : null;
}