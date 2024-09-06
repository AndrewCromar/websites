<?php

function SanitizeInput($data)
{
    return htmlspecialchars(strip_tags($data));
}
