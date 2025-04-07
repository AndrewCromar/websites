<?php

include_once './DeleteExpiredTokensForUser.php';
include_once './DoesUserHaveValidToken.php';
include_once './GetValidTokenForUserId.php';

function IsTokenValidForUser($token, $userId)
{
    DeleteExpiredTokensForUser($userId);
    if (DoesUserHaveValidToken($userId)) {
        $dbToken = GetValidTokenForUserId($userId);
        return $dbToken === $token;
    } else {
        return false;
    }
}
