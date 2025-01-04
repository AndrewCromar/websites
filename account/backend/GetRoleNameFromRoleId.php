<?php

include_once './CreateDBConnection.php';

function GetRoleNameFromRoleId($roleId)
{
    $conn = CreateDBConnection();

    $stmt = $conn->prepare("SELECT role_name FROM roles WHERE role_id = ?");
    $stmt->bind_param("s", $roleId);

    $stmt->execute();

    $stmt->bind_result($roleName);
    $stmt->fetch();

    $stmt->close();
    $conn->close();

    return $roleName ? $roleName : null;
}