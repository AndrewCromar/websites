<?php
session_start();
include_once $_SERVER['DOCUMENT_ROOT'] . '/hellhotelnodepth/backend/CreateDBConnection.php';

$code = $_POST['code'] ?? '';
$conn = CreateDBConnection();

// find UID for this code
$stmt = $conn->prepare(
    "SELECT uid FROM codes 
     WHERE code = ? 
     AND time > (NOW() - INTERVAL 10 MINUTE)"
);
$stmt->bind_param("s", $code);
$stmt->execute();
$stmt->bind_result($uid);
$stmt->fetch();
$stmt->close();

if (!$uid) {
    echo "ERROR_CODE";
    exit;
}

// mark user as logged in
$_SESSION['uid'] = $uid;

// delete used code
$stmt = $conn->prepare("DELETE FROM codes WHERE uid = ?");
$stmt->bind_param("i", $uid);
$stmt->execute();
$stmt->close();

$conn->close();

echo "OK";
