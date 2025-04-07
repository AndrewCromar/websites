<?php

include_once './DoesTokenCookieExist.php';
include_once './RemoveTokenCookie.php';

function Logout()
{
    if (DoesTokenCookieExist()) {
        RemoveTokenCookie();
        return true;
    }
    return false;
}

// AJAX
echo Logout();
