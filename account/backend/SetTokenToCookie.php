<?php

function SetTokenToCookie($token)
{
    // Set cookie parameters
    $cookie_name = "token";
    $cookie_value = $token;
    $cookie_expiry = time() + (86400 * 30); // 30 days expiration
    $cookie_path = '/'; // Cookie is available in entire domain
    $cookie_domain = '.andrewcromar.org'; // Leading dot makes it available to all subdomains
    $cookie_secure = true; // Ensures cookie is sent only over HTTPS
    $cookie_httponly = true; // Prevents JavaScript access to cookie

    // Set the cookie
    setcookie($cookie_name, $cookie_value, $cookie_expiry, $cookie_path, $cookie_domain, $cookie_secure, $cookie_httponly);
}
