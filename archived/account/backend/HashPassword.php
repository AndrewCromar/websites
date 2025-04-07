<?php

function HashPassword($password)
{
    return password_hash($password, PASSWORD_BCRYPT);
}