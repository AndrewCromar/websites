import os
import json
import re
from datetime import datetime

# Function to extract the number from a file name
def extract_number(filename):
    match = re.search(r'(\d+)', filename)
    return int(match.group(1)) if match else float('inf')

# Function to get the file modification date
def get_modification_date(filepath):
    return os.path.getmtime(filepath)

# Get the directory where the script is located
script_dir = os.path.dirname(os.path.abspath(__file__))

# Define the relative paths to the images directories from the script's location
relative_paths_to_images = {
    "alive": os.path.join("..", "..", "images", "luna", "alive"),
    "dead": os.path.join("..", "..", "images", "luna", "dead")
}

image_paths = {"alive": [], "dead": []}
ordered_images = []

for category, relative_path in relative_paths_to_images.items():
    absolute_path_to_images = os.path.abspath(os.path.join(script_dir, relative_path))

    # Check if the path exists
    if not os.path.exists(absolute_path_to_images):
        raise FileNotFoundError(f"The path {absolute_path_to_images} does not exist.")

    # List all image files in the directory
    image_extensions = ['.jpg', '.jpeg', '.png', '.gif']
    image_files = [f for f in os.listdir(absolute_path_to_images) if os.path.splitext(f)[1].lower() in image_extensions]

    # Sort image files by number and modification date
    image_files.sort(key=lambda f: (extract_number(f), get_modification_date(os.path.join(absolute_path_to_images, f))))

    # Generate the list of image paths relative to the HTML file location
    relative_image_paths = [os.path.join(relative_path, f).replace('\\', '/') for f in image_files]
    image_paths[category].extend(relative_image_paths)
    ordered_images.extend([os.path.join(relative_path, f).replace('\\', '/') for f in image_files])

# Sort ordered_images by number and modification date
ordered_images.sort(key=lambda f: (extract_number(os.path.basename(f)), get_modification_date(os.path.join(script_dir, f))))

# Create the JavaScript file content
js_content = f"""
const imagePaths = {json.dumps(image_paths, indent=4)};
imagePaths.ordered = {json.dumps(ordered_images, indent=4)};
"""

# Define the output path for the JavaScript file
output_js_path = os.path.join(script_dir, 'luna_paths.js')

# Write the content to a JavaScript file
with open(output_js_path, 'w') as js_file:
    js_file.write(js_content)

print(f"JavaScript file with image paths has been generated at {output_js_path}.")