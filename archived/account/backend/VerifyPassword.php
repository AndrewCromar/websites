<?php

function VerifyPassword($inputPassword, $storedHash)
{
    return password_verify($inputPassword, $storedHash);
}
