<?php

function GenerateNewToken()
{
    return bin2hex(random_bytes(16));
}
