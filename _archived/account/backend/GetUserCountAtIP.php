<?php

include_once './CreateDBConnection.php';

function GetUserCountAtIP($ip)
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("SELECT COUNT(*) FROM users WHERE ip = ?");
    $stmt->bind_param("s", $ip);

    $stmt->execute();

    $stmt->bind_result($count);
    $stmt->fetch();

    $stmt->close();
    $conn->close();

    return $count;
}
