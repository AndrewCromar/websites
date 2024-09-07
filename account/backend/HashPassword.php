<?php

function HashPassword($password)
{
    return password_hash($password, PASSWORD_BCRYPT);
}

// AJAX
$password = $_POST['password'] ?? '';
echo HashPassword($password);