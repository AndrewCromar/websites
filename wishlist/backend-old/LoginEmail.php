<?php
session_start();
include_once __DIR__ . '/GetUidByEmail.php';
include_once __DIR__ . '/GenerateLoginCode.php';

$email = $_POST['email'] ?? '';
$uid = GetUidByEmail($email);

if (!$uid) {
  echo "ERROR001";
  exit;
}

if (!isset($_SESSION['last_code_request'])) {
  $_SESSION['last_code_request'] = [];
}

$now = time();
$lastRequest = $_SESSION['last_code_request'][$uid] ?? 0;

if ($now - $lastRequest < 30) {
  echo "ERROR_RATE_LIMIT";
  exit;
}

$_SESSION['last_code_request'][$uid] = $now;

$code = GenerateLoginCodeForUser($uid);

$to = $email;
$subject = "Your Wishlist Login Code";
$from = 'no-reply@andrewcromar.org';

$body = <<<EOD
Hello,

Your login code for Wishlist is:

    {$code}

This code is valid for 10 minutes. Please do not share it with anyone.

Thank you,
Wishlist

---
This is an automated message, please do not reply.
EOD;

$headers = "From: Wishlist <{$from}>\r\n";
$headers .= "Reply-To: {$from}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $body, $headers)) {
  echo json_encode(["status" => "ok", "message" => "Email sent"]);
} else {
  echo json_encode(["status" => "error", "message" => "Failed to send email"]);
}
