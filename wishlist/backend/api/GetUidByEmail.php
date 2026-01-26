<?php
include_once $_SERVER['DOCUMENT_ROOT'] . '/backend/CreateDBConnection.php';

function GetUidByEmail($email)
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("SELECT uid FROM accounts WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->bind_result($uid);
    $stmt->fetch();

    $stmt->close();
    $conn->close();

    return $uid ?: false;
}
