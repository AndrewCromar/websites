<?php

session_start();

$email = trim($_POST['email'] ?? '');
$note = trim($_POST['note'] ?? '');

require_once __DIR__ . '/../../global.php';

// Basic validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { echo json_encode(["status" => "fail", "error" => "ERROR001"]); exit; }
if (strlen($note) > 5000) { echo json_encode(["status" => "fail", "error" => "ERROR002"]); exit; }

// simple rate limit: at least 60s between requests per session
if (isset($_SESSION['last_register_request_time']) && (time() - $_SESSION['last_register_request_time']) < 60) { echo json_encode(["status" => "fail", "error" => "ERROR005"]); exit; }

// Prepare email to admin
$subject = "[Register Request] from $email";
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$message = "A new registration request has been submitted:\n\n";
$message .= "Email: $email\n";
$message .= "IP: $ip\n\n";
$message .= "Notes from applicant:\n$note\n";

$headers = "From: no-reply@" . ($_SERVER['SERVER_NAME'] ?? "example.com") . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Only send when live; otherwise return OK for development
if (isset($live) && $live) {
    if (!isset($ADMIN_EMAIL) || empty($ADMIN_EMAIL)) { echo json_encode(["status" => "fail", "error" => "ERROR003"]); exit; }
    $sent = mail($ADMIN_EMAIL, $subject, $message, $headers);
    if (!$sent) { echo json_encode(["status" => "fail", "error" => "ERROR004"]); exit; }
    // record time to enforce rate limit
    $_SESSION['last_register_request_time'] = time();
    echo json_encode(["status" => "OK"]);
    exit;
} else {
    // dev behavior: don't actually send email, but return OK (optionally could log)
    $_SESSION['last_register_request_time'] = time();
    echo json_encode(["status" => "OK", "dev" => true, "messagePreview" => $subject]);
    exit;
}
