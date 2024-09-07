<?php
include '../../global.php';
include 'dbconn.php';
include 'user.php';
include 'tokens.php';

function VerifyPassword($password, $storedHash)
{
    return password_verify($password, $storedHash);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $user = GetUserIdByUsername($username);

    if ($user) {
        if (VerifyPassword($password, $user['password'])) {
            $token = GetValidTokenForUserId($user['id']);
            $response = [
                'status' => 'success',
                'message' => "Welcome, " . $user["firstname"] . " " . $user["lastname"],
                'token' => $token // This token will be used by JavaScript
            ];
        } else {
            $response = ['status' => 'error', 'message' => 'Invalid password.'];
        }
    } else {
        $response = ['status' => 'error', 'message' => 'No user found with that username.'];
    }

    header('Content-Type: application/json');
    echo json_encode($response);
}
?>
