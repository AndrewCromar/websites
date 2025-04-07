<?php
function GetPasswordByUsername($username)
{
    $conn = getDbConnection();
    $stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $passwordHash = null;
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $passwordHash = $row['password'];
    }
    $stmt->close();
    $conn->close();
    return $passwordHash;
}

function GetUserIdByUsername($username)
{
    $conn = getDbConnection();
    $stmt = $conn->prepare("SELECT id, firstname, lastname, password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = null;
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
    }
    $stmt->close();
    $conn->close();
    return $user;
}
