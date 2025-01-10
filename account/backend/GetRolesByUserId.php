<?php

include_once './CreateDBConnection.php';

function GetRolesByUserId($userId)
{
    $conn = CreateDBConnection();

    // Prepare the query
    $stmt = $conn->prepare("SELECT role_id FROM userroles WHERE user_id = ?");
    $stmt->bind_param("s", $userId);

    // Execute the query
    $stmt->execute();

    // Fetch all roles into an array
    $result = $stmt->get_result();
    $roles = [];
    while ($row = $result->fetch_assoc()) {
        $roles[] = $row['role_id'];
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();

    return $roles;
}
