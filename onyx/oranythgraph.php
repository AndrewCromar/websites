<?php
if (isset($_GET['data'])) {
    $data = $_GET['data'];

    // Decode Base64
    $compressed = base64_decode($data);
    if ($compressed === false) exit;

    // Decompress
    $raw = gzdecode($compressed);
    if ($raw === false) exit;

    // Read points
    $points = [];
    $len = strlen($raw);
    for ($i = 0; $i < $len; $i += 4) {
        $x = unpack("v", substr($raw, $i, 2))[1]; // ushort
        $y = unpack("v", substr($raw, $i + 2, 2))[1];
        $points[] = [$x, $y];
    }

    // Create image
    $width = 800; // or pass as param
    $height = 400;
    $img = imagecreatetruecolor($width, $height);
    $bg = imagecolorallocatealpha($img, 0, 0, 0, 127); // transparent
    imagefill($img, 0, 0, $bg);
    imagesavealpha($img, true);

    $lineColor = imagecolorallocate($img, 255, 255, 255); // white line

    // Draw lines
    for ($i = 1; $i < count($points); $i++) {
        imageline($img, $points[$i-1][0], $height - 1 - $points[$i-1][1],
                           $points[$i][0], $height - 1 - $points[$i][1],
                           $lineColor);
    }

    header("Content-Type: image/png");
    imagepng($img);
    imagedestroy($img);
}
?>
