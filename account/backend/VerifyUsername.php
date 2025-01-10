<?php

function VerifyUsername($inputUsername, $storedUsername)
{
    return $inputUsername === $storedUsername;
}
