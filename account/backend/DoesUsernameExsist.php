<?php
include 'CreateDBConnection.php';

function DoesUsernameExist($username)
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("SELECT COUNT(*) FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);

    $stmt->execute();

    $stmt->bind_result($count);
    $stmt->fetch();

    $stmt->close();
    $conn->close();

    return $count > 0;
}
