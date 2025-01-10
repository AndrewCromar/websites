<?php

function RemoveTokenCookie(){
    if (isset($_COOKIE['token'])) {
        unset($_COOKIE['token']); 
        setcookie('token', '', -1, '/'); 
        return true;
    } else {
        return false;
    }
}