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

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Check if file was uploaded without errors
    if (isset($_FILES["image"]) && $_FILES["image"]["error"] == 0) {
        $image = $_FILES["image"]["tmp_name"];
        $imgData = file_get_contents($image);
        $imgType = $_FILES["image"]["type"];

        // Ensure the file is a PNG image
        if ($imgType == 'image/png') {
            // Prepare SQL statement to insert binary data
            $stmt = $conn->prepare("INSERT INTO images (image_type, image_data) VALUES (?, ?)");
            $stmt->bind_param("sb", $imgType, $null);
            $stmt->send_long_data(1, $imgData);
            if ($stmt->execute()) {
                echo "Image uploaded and stored successfully.";
            } else {
                echo "Error: " . $stmt->error;
            }
            $stmt->close();
        } else {
            echo "Please upload a valid PNG image.";
        }
    } else {
        echo "Error: " . $_FILES["image"]["error"];
    }
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload Compressed PNG Image</title>
</head>
<body>
    <h2>Upload PNG Image</h2>
    <input type="file" id="imageInput" accept="image/png">
    <br><br>
    <button onclick="uploadImage()">Upload Image</button>

    <script>
        function compressImage(file, quality, callback) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (event) {
                const img = new Image();
                img.src = event.target.result;
                img.onload = function () {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const maxWidth = 800; // Adjust this value to your needs
                    const maxHeight = 800; // Adjust this value to your needs
                    let width = img.width;
                    let height = img.height;

                    if (width > height) {
                        if (width > maxWidth) {
                            height *= maxWidth / width;
                            width = maxWidth;
                        }
                    } else {
                        if (height > maxHeight) {
                            width *= maxHeight / height;
                            height = maxHeight;
                        }
                    }
                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);
                    canvas.toBlob(
                        (blob) => {
                            callback(blob);
                        },
                        'image/png',
                        quality // Quality parameter ranges from 0 to 1
                    );
                };
            };
        }

        function uploadImage() {
            const fileInput = document.getElementById('imageInput');
            const file = fileInput.files[0];

            if (file) {
                compressImage(file, 0.8, function (compressedBlob) {
                    const formData = new FormData();
                    formData.append('image', compressedBlob, 'compressed.png');

                    fetch('upload_image.php', {
                        method: 'POST',
                        body: formData
                    })
                    .then(response => response.text())
                    .then(data => {
                        console.log(data);
                        alert(data);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        alert('An error occurred while uploading the image.');
                    });
                });
            } else {
                alert('Please select an image file.');
            }
        }
    </script>
</body>
</html>
