<?php

$secret = 'boobs';
$use_custom_from = true;

if (!isset($_GET['key']) || $_GET['key'] !== $secret) {
    http_response_code(403);
    exit('Forbidden');
}

$msg = isset($_GET['msg']) ? urldecode($_GET['msg']) : '(No message provided)';

$subject = "Andrew studied some college stuff!";
$body = "Here is what he worked on:\n\n" . $msg;

$to = 'andrewmcromar@gmail.com'; //, scromar@gmail.com';

if ($use_custom_from) {
    $from = 'me@andrewcromar.org';
    $headers = "From: Automated Andrew <{$from}>\r\n";
    $headers .= "Reply-To: {$from}\r\n";
    mail($to, $subject, $body, $headers);
} else {
    mail($to, $subject, $body);
}

echo 'Email sent.';
