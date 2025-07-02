<?php

$secret = 'boobs';
$use_custom_from = true;

if (!isset($_GET['key']) || $_GET['key'] !== $secret) {
    http_response_code(403);
    exit('Forbidden');
}

$msg = isset($_GET['msg']) ? urldecode($_GET['msg']) : '(No message provided)';

$subject = "Andrew studied some college stuff!";

$body = "Hello Scott,\n\nAndrew has been studying and he just finished a notable section.\n\nHere is what he worked on:\n" . $msg . "\n\nThanks,\nAutomated Andrew\n\nP.S. This is just a commit message; it is supposed to be short.";

$to = 'andrewmcromar@gmail.com, scromar@gmail.com';

if ($use_custom_from) {
    $from = 'me@andrewcromar.org';
    $headers = "From: Automated Andrew <{$from}>\r\n";
    $headers .= "Reply-To: {$from}\r\n";
    mail($to, $subject, $body, $headers);
} else {
    mail($to, $subject, $body);
}

echo 'Email sent.';
