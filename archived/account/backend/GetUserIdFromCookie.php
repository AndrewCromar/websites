<?php

include_once './DoesUserIdCookieExist.php';

function GetUserIdFromCookie()
{
    if (DoesUserIdCookieExist()) {
        return $_COOKIE['userId'];
    }
    return false;
}
