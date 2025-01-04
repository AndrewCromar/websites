<?php

include_once './GetUsernameByUserId.php';
include_once './GetFirstNameByUserId.php';
include_once './GetLastNameByUserId.php';
include_once './GetEmailByUserId.php';
include_once './GetAdminByUserId.php';
include_once './GetCreationDateByUserId.php';
include_once './GetUserIdFromCookie.php';
include_once './GetRolesByUserId.php';
include_once './GetRoleNameFromRoleId.php';

function GetUserInfo($userId)
{
    $roleIds = GetRolesByUserId($userId);
    $roleNames = [];

    foreach ($roleIds as $roleId) {
        array_push($roleNames, GetRoleNameFromRoleId($roleId));
    }

    return json_encode([
        'username' => GetUsernameByUserId($userId),
        'firstName' => GetFirstNameByUserId($userId),
        'lastName' => GetLastNameByUserId($userId),
        'email' => GetEmailByUserId($userId),
        'userId' => $userId,
        'roles' => $roleNames,
        'creationDate' => GetCreationDateByUserId($userId)
    ]);
}

header('Content-Type: application/json');
echo GetUserInfo(GetUserIdFromCookie());
