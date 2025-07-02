<?php

$secret = 'boobs';

if (!isset($_GET['key']) || $_GET['key'] !== $secret) {
    http_response_code(403);
    exit('Forbidden');
}

$msg = isset($_GET['msg']) ? $_GET['msg'] : '(No message provided)';

$subject = "Andrew studied some college stuff!";
$body = "Here is what he worked on:\n\n" . $msg;

mail('andrewmcromar@gmail.com', $subject, $body);
echo 'Email sent.';