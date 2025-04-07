<?php

include_once './HashPassword.php';

// AJAX
$password = $_POST['password'] ?? '';
echo HashPassword($password);