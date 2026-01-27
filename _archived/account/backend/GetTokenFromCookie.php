<?php

include_once './DoesTokenCookieExist.php';

function GetTokenFromCookie()
{
    if (DoesTokenCookieExist()) {
        return $_COOKIE['token'];
    }
    return false;
}
