<?php
// Database connection
$servername = "localhost";
$username = "lunastatus";
$password = "123456789";
$dbname = "lunastatus";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch all images from the database
$sql = "SELECT image_type, image_data FROM images";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Uploaded Images</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .image-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        img {
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 5px;
            width: 300px;
            margin: 10px;
        }
    </style>
</head>
<body>
    <h2>Uploaded Images</h2>
    <div class="image-container">
        <?php
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $imgType = $row['image_type'];
                $imgData = base64_encode($row['image_data']);
                echo '<img src="data:' . $imgType . ';base64,' . $imgData . '" alt="Image">';
            }
        } else {
            echo "No images found.";
        }

        $conn->close();
        ?>
    </div>
</body>
</html>
