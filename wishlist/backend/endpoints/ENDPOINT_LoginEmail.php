<?php

// Basic check to see if its an email address.
// Check if the email is in the db.
// Generate login code for user.
// Send login code to user.
// Return email success.

session_start();

$email = trim($_POST['email'] ?? '');

require_once __DIR__ . '/backend/api/IsEmailReal.php';
require_once __DIR__ . '/backend/api/DoesEmailExist.php';
require_once __DIR__ . '/backend/api/GetUidByEmail.php';
require_once __DIR__ . '/backend/api/GenerateLoginCodeForUser.php';
require_once __DIR__ . '/backend/api/SendEmailCode.php';
require_once __DIR__ . '/backend/api/CheckCodeRequestRateLimitForUser.php';

if (!IsEmailReal($email)) { echo "ERROR001"; exit; }
if (!DoesEmailExist($email)) { echo "ERROR002"; exit; }

$uid = GetUidByEmail($email);
if (!$uid) { echo "ERROR005"; return; }

if (CheckCodeRequestRateLimitForuser($uid)) { echo "ERROR004"; exit; }

$code = GenerateLoginCodeForUser($uid);

if (!SendEmailCode($email, $code)) { echo "ERROR003"; exit; }

echo "OK";