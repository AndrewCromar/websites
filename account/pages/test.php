<?php

include_once '../backend/GetTokenFromCookie.php';
include_once '../backend/SetTokenToCookie.php';

// SetTokenToCookie("test");

echo "Current cookie: " . GetTokenFromCookie();
?>
