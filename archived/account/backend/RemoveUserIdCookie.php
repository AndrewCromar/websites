<?php

function RemoveUserIdCookie(){
    if (isset($_COOKIE['userId'])) {
        unset($_COOKIE['userId']); 
        setcookie('userId', '', -1, '/'); 
        return true;
    } else {
        return false;
    }
}