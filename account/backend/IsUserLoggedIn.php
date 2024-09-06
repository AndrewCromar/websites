<?php

include './DoesTokenCookieExist.php';
include './GetTokenFromCookie.php';
include './IsTokenValid.php';

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
