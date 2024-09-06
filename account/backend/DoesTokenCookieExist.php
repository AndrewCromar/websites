<?php

function DoesTokenCookieExist()
{
    return isset($_COOKIE['token']);
}
