<?php

function DoesUserIdCookieExist()
{
    return isset($_COOKIE['userId']);
}
