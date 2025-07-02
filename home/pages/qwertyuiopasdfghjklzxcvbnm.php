<?php

$secret = 'boobs';

if (!isset($_GET['key']) || $_GET['key'] !== $secret) {
    http_response_code(403);
    exit('Forbidden');
}

mail('andrewmcromar@gmail.com', 'Subject', 'Message triggered by GitHub Action');
echo 'Email sent.';