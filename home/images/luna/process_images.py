import os
from PIL import Image, ExifTags

def convert_jpg_to_png():
    # Get the directory of the current file
    dir_path = os.path.dirname(os.path.abspath(__file__))

    # Walk through the directory
    for filename in os.listdir(dir_path):
        # Check if the file is a .jpg file
        if filename.lower().endswith('.jpg'):
            # Construct full file path for .jpg and .png
            jpg_path = os.path.join(dir_path, filename)
            png_path = os.path.join(dir_path, filename.replace('.jpg', '.png'))
            
            # Skip conversion if .png already exists
            if os.path.exists(png_path):
                print(f"{png_path} already exists. Skipping conversion.")
                continue
            
            # Open the .jpg file
            with Image.open(jpg_path) as img:
                # Check if the image has EXIF data to preserve orientation
                try:
                    exif = img._getexif()
                    if exif is not None:
                        # Get the orientation tag
                        for tag, value in exif.items():
                            if tag in ExifTags.TAGS and ExifTags.TAGS[tag] == 'Orientation':
                                # Rotate based on orientation value
                                if value == 3:
                                    img = img.rotate(180, expand=True)
                                elif value == 6:
                                    img = img.rotate(270, expand=True)
                                elif value == 8:
                                    img = img.rotate(90, expand=True)
                except (AttributeError, KeyError, IndexError):
                    pass
                
                # Convert and save as .png
                img.save(png_path, 'PNG')
            
            # Delete the original .jpg file
            os.remove(jpg_path)
            print(f"Converted {filename} to PNG and deleted the original .jpg file.")

def rename_pngs():
    # Get the directory of the current file
    dir_path = os.path.dirname(os.path.abspath(__file__))

    # Get all .png files in the directory
    png_files = [f for f in os.listdir(dir_path) if f.lower().endswith('.png')]

    # Sort the files to ensure they are renamed in order
    png_files.sort()

    # Rename each .png file, but check if it already follows the pattern
    for index, filename in enumerate(png_files, start=1):
        # Construct the new file name
        new_filename = f"{index}.png"
        old_path = os.path.join(dir_path, filename)
        new_path = os.path.join(dir_path, new_filename)

        # Check if the new filename already exists, if so, skip renaming
        if old_path != new_path and not os.path.exists(new_path):
            # Rename the file
            os.rename(old_path, new_path)
            print(f"Renamed {filename} to {new_filename}")
        else:
            print(f"{filename} is already correctly named or the target file exists. Skipping renaming.")

def crop_pngs():
    # Get the directory of the current file
    dir_path = os.path.dirname(os.path.abspath(__file__))

    # Get all .png files in the directory
    png_files = [f for f in os.listdir(dir_path) if f.lower().endswith('.png')]

    # Process each .png file
    for filename in png_files:
        # Construct the full file path
        file_path = os.path.join(dir_path, filename)
        
        # Open the image
        with Image.open(file_path) as img:
            width, height = img.size

            # Skip cropping if image is already square
            if width == height:
                print(f"{filename} is already square. Skipping crop.")
                continue

            # Find the side length of the smallest dimension
            side_length = min(width, height)

            # Calculate the cropping box (centered)
            left = (width - side_length) // 2
            top = (height - side_length) // 2
            right = (width + side_length) // 2
            bottom = (height + side_length) // 2

            # Crop the image
            img_cropped = img.crop((left, top, right, bottom))

            # Save the cropped image (overwrite original file)
            img_cropped.save(file_path)

        print(f"Cropped {filename} to a square.")

def shrink_images():
    # Get the directory of the current file
    dir_path = os.path.dirname(os.path.abspath(__file__))

    # Get all .png files in the directory
    png_files = [f for f in os.listdir(dir_path) if f.lower().endswith('.png')]

    # Process each .png file
    for filename in png_files:
        # Construct the full file path
        file_path = os.path.join(dir_path, filename)
        
        # Open the image
        with Image.open(file_path) as img:
            # Resize the image to 250x250 pixels
            img_resized = img.resize((250, 250))
            
            # Save the resized image (overwrite original file)
            img_resized.save(file_path)

        print(f"Resized {filename} to 250x250 pixels.")

def save_pngs_to_js():
    # Get the directory of the current file
    dir_path = os.path.dirname(os.path.abspath(__file__))

    # Get all .png files in the directory
    png_files = [f for f in os.listdir(dir_path) if f.lower().endswith('.png')]

    # Sort the files
    png_files.sort()

    # Prepare the JavaScript structure
    js_content = "const processed_images = [\n"
    for filename in png_files:
        js_content += f"    '{filename}',\n"
    js_content += "];\n"

    # Write the content to processed_images.js
    js_file_path = os.path.join(dir_path, 'processed_images.js')
    with open(js_file_path, 'w') as js_file:
        js_file.write(js_content)

    print(f"Saved image names to {js_file_path}")

# Run the functions
print("Processing images...\n--------------------------------------------------\nConversion to PNG:")
convert_jpg_to_png()
print("--------------------------------------------------\nRenaming PNGs:")
rename_pngs()
print("--------------------------------------------------\nCropping PNGs:")
crop_pngs()
print("--------------------------------------------------\nResizing PNGs:")
shrink_images()
print("--------------------------------------------------\nSaving image names to JS:")
save_pngs_to_js()
print("--------------------------------------------------\nDone processing images.")