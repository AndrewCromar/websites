<?php
session_start();
include_once $_SERVER['DOCUMENT_ROOT'] . '/hellhotelnodepth/backend/GetUidByEmail.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/hellhotelnodepth/backend/GenerateLoginCode.php';

$email = $_POST['email'] ?? '';
$uid = GetUidByEmail($email);

if (!$uid) {
    echo "ERROR001";
    exit;
}

// --- RATE LIMIT ---
if (!isset($_SESSION['last_code_request'])) {
    $_SESSION['last_code_request'] = [];
}

$now = time();
$lastRequest = $_SESSION['last_code_request'][$uid] ?? 0;

if ($now - $lastRequest < 30) { // 30 seconds cooldown
    echo "ERROR_RATE_LIMIT";
    exit;
}

$_SESSION['last_code_request'][$uid] = $now;

// --- GENERATE CODE ---
$code = GenerateLoginCodeForUser($uid);

// --- SEND EMAIL ---
$to = $email;
$subject = "Your Login Code for Finance Dat Ho";

$body = "
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background-color: #f7f7f7; color: #333; }
    .container { background-color: #fff; padding: 20px; border-radius: 8px; max-width: 600px; margin: auto; }
    .header { font-size: 20px; font-weight: bold; margin-bottom: 10px; }
    .code { font-size: 24px; font-weight: bold; color: #a200ff; margin: 20px 0; }
    .footer { font-size: 12px; color: #777; margin-top: 30px; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>Hello!</div>
    <p>You requested a login code for <strong>Finance Dat Ho</strong>.</p>
    <p>Your login code is:</p>
    <div class='code'>{$code}</div>
    <p>This code is valid for 10 minutes. Do not share it with anyone.</p>
    <div class='footer'>If you didn't request this code, you can safely ignore this email.</div>
  </div>
</body>
</html>
";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: HellHotel Login <no-reply@financedatho.com>\r\n";
$headers .= "Reply-To: no-reply@financedatho.com\r\n";

mail($to, $subject, $body, $headers);

// return code in response for dev/testing (remove in production)
// echo $code;
