<?php

include './DeleteExpiredTokensForUser.php';
include './DoesUserHaveValidToken.php';
include './GetValidTokenForUserId.php';

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
