<?php

$secret = 'boobs';

if (!isset($_GET['key']) || $_GET['key'] !== $secret) {
    http_response_code(403);
    exit('Forbidden');
}

$subject = "Andrew studied some college stuff!";
$body = "Andrew has been studying he just finished a notable bit of research.";

$to = 'andrewmcromar@gmail.com, scromar@gmail.com';

mail($to, $subject, $body);

echo 'Email sent.';
