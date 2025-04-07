<?php

function ComparePasswords($password_input, $password_hashed)
{
    return password_verify($password_input, $password_hashed);
}
