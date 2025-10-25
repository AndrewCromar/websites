<?php
if (isset($_GET['data'])) {
    $data = $_GET['data'];
    $imgData = base64_decode($data);
    header("Content-Type: image/png");
    echo $imgData;
    exit;
}
?>