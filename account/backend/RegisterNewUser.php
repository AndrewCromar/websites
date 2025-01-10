<?php

include_once './CreateDBConnection.php';

function RegisterNewUser($username, $password, $firstname, $lastname, $email, $ip)
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("INSERT INTO users (username, password, firstname, lastname, email, ip) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $username, $password, $firstname, $lastname, $email, $ip);

    $stmt->execute();

    $stmt->close();
    $conn->close();
}
