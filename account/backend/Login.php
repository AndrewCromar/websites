<?php

include_once './SanitizeInput.php';
include_once './DoesUsernameExist.php';
include_once './GetUserIdByUsername.php';
include_once './GetUsernameByUserId.php';
include_once './GetPasswordByUserId.php';
include_once './VerifyPassword.php';
include_once './VerifyUsername.php';
include_once './DeleteExpiredTokensForUser.php';
include_once './DoesUserHaveValidToken.php';
include_once './GetValidTokenForUser.php';
include_once './GenerateNewToken.php';
include_once './SaveTokenToDatabaseForUser.php';
include_once './DoesTokenCookieExist.php';
include_once './DoesTokenCookieExist.php';
include_once './GetTokenFromCookie.php';
include_once './SetTokenToCookie.php';

function Login($inputUsername, $inputPassword)
{
    $inputUsername = SanitizeInput($inputUsername);
    $inputPassword = SanitizeInput($inputPassword);
    
    // check if the username exists
    if (!DoesUsernameExist($inputUsername)) return "No account found with that username.";
    
    // get userid from username
    $userId = GetUserIdByUsername($inputUsername);
    
    // get username from userid
    $storedUsername = GetUsernameByUserId($userId);
    // verify username
    $usernameCorrect = VerifyUsername($inputUsername, $storedUsername);
    
    // get hashedpassword from userid
    $storedPassword = GetPasswordByUserId($userId);
    // verify password
    $passwordCorrect = VerifyPassword($inputPassword, $storedPassword);
    
    // check if both username and password are correct
    // if(!$usernameCorrect) return "Username incorect: " . $usernameCorrect . ". Input username: " . $inputUsername . ". Stored username: " . $storedUsername . ". User id: " . $userId . ".";
    // if(!$passwordCorrect) return "Password incorect.";
    if (!$usernameCorrect || !$passwordCorrect) return "Username or password are incorrect.";

    // database tokens
    DeleteExpiredTokensForUser($userId);

    if (DoesUserHaveValidToken($userId)) {
        $storedToken = GetValidTokenForUser($userId);
    } else {
        $newToken = GenerateNewToken();
        SaveTokenToDatabaseForUser($newToken, $userId);
        $storedToken = $newToken;
    }

    // check for token
    if (DoesTokenCookieExist()) {
        $cookieToken = GetTokenFromCookie();
        if (!($cookieToken === $storedToken)) {
            SetTokenToCookie($storedToken);
            $cookieToken = $storedToken;
        }
    } else {
        SetTokenToCookie($storedToken);
        $cookieToken = $storedToken;
    }

    return json_encode(["success" => true, "userId" => $userId]);
}

// AJAX
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';
echo Login($username, $password);