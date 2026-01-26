<?php

// Get UID that goes with the code.
// If the UID does not exist error out.
// If the UID does exist mark the user as logged in.
// Delete the codes for the user.
// Return login success.

session_start();

include_once $_SERVER['DOCUMENT_ROOT'] . '/backend/api/GetUidByCode.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/backend/api/DeleteCodesForUser.php';

$code = trim($_POST['code'] ?? '');

$uid = GetUidByCode($code);

if(!$uid) { echo "ERROR005"; exit; }

session_regenerate_id(true);
$_SESSION['uid'] = $uid;

DeleteCodesForUser($uid);

echo "OK";