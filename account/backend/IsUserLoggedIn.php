<?php

include_once './DoesTokenCookieExist.php';
include_once './GetTokenFromCookie.php';
include_once './IsTokenValid.php';

function IsUserLoggedIn()
{
    if (DoesTokenCookieExist()) {
        $token = GetTokenFromCookie();
        if (IsTokenValid($token)) {
            return true;
        }
    }
    return false;
}

echo json_encode(IsUserLoggedIn());
