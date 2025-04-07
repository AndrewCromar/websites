<?php
include '../../global.php';

function getDbConnection()
{
    global $DB_servername, $DB_username, $DB_password, $DB_name;
    $conn = new mysqli($DB_servername, $DB_username, $DB_password, $DB_name);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
}

function IsUserLoggedIn($token)
{
    if (!$token) {
        return false;
    }

    $conn = getDbConnection();

    $stmt = $conn->prepare("SELECT token FROM tokens WHERE token = ? AND expires_at > NOW() AND revoked = FALSE");
    if ($stmt === false) {
        die("Prepare failed: " . $conn->error);
    }

    $stmt->bind_param("s", $token);
    $stmt->execute();
    $stmt->store_result();

    $isLoggedIn = $stmt->num_rows > 0;

    $stmt->close();
    $conn->close();

    return $isLoggedIn;
}

$token = $_GET['token'] ?? null;
header('Content-Type: application/json');
echo json_encode(['loggedIn' => IsUserLoggedIn($token)]);
?>
