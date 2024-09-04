<?php
include 'CreateDBConnection.php';

function GetCreationDateByUserId($userId)
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("SELECT creationdate FROM users WHERE userId = ?");
    $stmt->bind_param("s", $creationdate);

    $stmt->execute();

    $stmt->bind_result($creationdate);
    $stmt->fetch();

    $stmt->close();
    $conn->close();

    return $creationdate ? $creationdate : null;
}