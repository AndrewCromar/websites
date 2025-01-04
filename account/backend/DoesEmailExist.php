<?php

include_once './CreateDBConnection.php';

function DoesEmailExist($email)
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("SELECT COUNT(*) FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);

    $stmt->execute();

    $stmt->bind_result($count);
    $stmt->fetch();

    $stmt->close();
    $conn->close();

    return $count > 0;
}
