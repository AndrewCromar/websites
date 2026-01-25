<?php
include_once $_SERVER['DOCUMENT_ROOT'] . '/home3/astartup/public_html/andrewcromar/wishlist/backend/CreateDBConnection.php';

function GenerateLoginCodeForUser($uid)
{
    $conn = CreateDBConnection();

    // generate code
    $code = '';
    $chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for ($i = 0; $i < 6; $i++) {
        $code .= $chars[random_int(0, strlen($chars) - 1)];
    }

    // delete old codes for this user (optional but clean)
    $stmt = $conn->prepare("DELETE FROM codes WHERE uid = ?");
    $stmt->bind_param("i", $uid);
    $stmt->execute();
    $stmt->close();

    // insert new code
    $stmt = $conn->prepare(
        "INSERT INTO codes (uid, code, time) VALUES (?, ?, NOW())"
    );
    $stmt->bind_param("is", $uid, $code);
    $stmt->execute();
    $stmt->close();

    $conn->close();

    return $code; // ONLY for emailing, not for JS
}
