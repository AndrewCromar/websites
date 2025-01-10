<?php

include_once './SanitizeInput.php';
include_once './DoesUsernameExist.php';
include_once './DoesEmailExist.php';
include_once './RegisterNewUser.php';
include_once './HashPassword.php';
include_once './GetUserCountAtIP.php';

function Register($username, $password, $firstname, $lastname, $email, $ip)
{
    $username = SanitizeInput($username);
    $password = SanitizeInput($password);
    $firstname = SanitizeInput($firstname);
    $lastname = SanitizeInput($lastname);

    $countAtIP = GetUserCountAtIP($ip);
    if ($countAtIP > 5) return "Anti-spam filter engaged.";

    if (!($email == filter_var($email, FILTER_SANITIZE_EMAIL) && filter_var($email, FILTER_VALIDATE_EMAIL))) return "Invalid email.";

    if (DoesUsernameExist($username)) return "Username already exists.";
    if (DoesEmailExist($email)) return "Email already exists.";

    RegisterNewUser($username, HashPassword($password), $firstname, $lastname, $email, $ip);

    return 1;
}

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';
$firstname = $_POST['firstname'] ?? '';
$lastname = $_POST['lastname'] ?? '';
$email = $_POST['email'] ?? '';
$ip = $_POST['ip'] ?? '';
echo Register($username, $password, $firstname, $lastname, $email, $ip);
