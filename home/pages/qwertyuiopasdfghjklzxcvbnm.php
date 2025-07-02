<?php

$secret = 'mySuperSecretKey123';

if (!isset($_GET['key']) || $_GET['key'] !== $secret) {
    http_response_code(403);
    exit('Forbidden');
}

mail('andrewmcromar@email.com', 'Subject', 'Message triggered by GitHub Action');
echo 'Email sent.';