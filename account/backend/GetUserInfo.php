<?php

include_once './GetUsernameByUserId.php';
include_once './GetFirstNameByUserId.php';
include_once './GetLastNameByUserId.php';
include_once './GetEmailByUserId.php';
include_once './GetAdminByUserId.php';
include_once './GetCreationDateByUserId.php';

function GetUserInfo($userId)
{
    return json_encode([
        'username' => GetUsernameByUserId($userId),
        'firstName' => GetFirstNameByUserId($userId),
        'lastName' => GetLastNameByUserId($userId),
        'email' => GetEmailByUserId($userId),
        'admin' => GetAdminByUserId($userId),
        'creationDate' => GetCreationDateByUserId($userId)
    ]);
}

$userId = $_GET['userId'];
header('Content-Type: application/json');
echo GetUserInfo($userId);
