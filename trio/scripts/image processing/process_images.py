import os
import json
from PIL import Image, ExifTags

def load_paths():
    # Get the directory of the current script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    paths_file = os.path.join(script_dir, 'paths.json')

    # Load paths from paths.json
    with open(paths_file, 'r') as file:
        data = json.load(file)
        return [os.path.abspath(os.path.join(script_dir, path)) for path in data["paths"]]

def convert_jpg_to_png(directory):
    for filename in os.listdir(directory):
        if filename.lower().endswith('.jpg'):
            jpg_path = os.path.join(directory, filename)
            png_path = os.path.join(directory, filename.replace('.jpg', '.png'))

            if os.path.exists(png_path):
                print(f"{png_path} already exists. Skipping conversion.")
                continue

            with Image.open(jpg_path) as img:
                try:
                    exif = img._getexif()
                    if exif:
                        for tag, value in exif.items():
                            if tag in ExifTags.TAGS and ExifTags.TAGS[tag] == 'Orientation':
                                if value == 3:
                                    img = img.rotate(180, expand=True)
                                elif value == 6:
                                    img = img.rotate(270, expand=True)
                                elif value == 8:
                                    img = img.rotate(90, expand=True)
                except (AttributeError, KeyError, IndexError):
                    pass

                img.save(png_path, 'PNG')
            
            os.remove(jpg_path)
            print(f"Converted {filename} to PNG and deleted the original .jpg file.")

def rename_pngs(directory):
    png_files = [f for f in os.listdir(directory) if f.lower().endswith('.png')]
    png_files.sort()

    for index, filename in enumerate(png_files, start=1):
        new_filename = f"{index}.png"
        old_path = os.path.join(directory, filename)
        new_path = os.path.join(directory, new_filename)

        if old_path != new_path and not os.path.exists(new_path):
            os.rename(old_path, new_path)
            print(f"Renamed {filename} to {new_filename}")
        else:
            print(f"{filename} is already correctly named or the target file exists. Skipping renaming.")

def crop_pngs(directory):
    png_files = [f for f in os.listdir(directory) if f.lower().endswith('.png')]

    for filename in png_files:
        file_path = os.path.join(directory, filename)
        with Image.open(file_path) as img:
            width, height = img.size

            if width == height:
                print(f"{filename} is already square. Skipping crop.")
                continue

            side_length = min(width, height)
            left = (width - side_length) // 2
            top = (height - side_length) // 2
            right = (width + side_length) // 2
            bottom = (height + side_length) // 2

            img_cropped = img.crop((left, top, right, bottom))
            img_cropped.save(file_path)

        print(f"Cropped {filename} to a square.")

def shrink_images(directory):
    png_files = [f for f in os.listdir(directory) if f.lower().endswith('.png')]

    for filename in png_files:
        file_path = os.path.join(directory, filename)
        with Image.open(file_path) as img:
            img_resized = img.resize((250, 250))
            img_resized.save(file_path)

        print(f"Resized {filename} to 250x250 pixels.")

def save_pngs_to_js(directory):
    png_files = [f for f in os.listdir(directory) if f.lower().endswith('.png')]
    png_files.sort()

    js_content = "const processed_images = [\n"
    for filename in png_files:
        js_content += f"    '{filename}',\n"
    js_content += "];\n"

    js_file_path = os.path.join(directory, 'processed_images.js')
    with open(js_file_path, 'w') as js_file:
        js_file.write(js_content)

    print(f"Saved image names to {js_file_path}")

def process_images():
    # Load directories from paths.json
    directories = load_paths()

    for directory in directories:
        print(f"\nProcessing images in: {directory}\n{'-'*50}")
        convert_jpg_to_png(directory)
        rename_pngs(directory)
        crop_pngs(directory)
        shrink_images(directory)
        save_pngs_to_js(directory)
        print(f"Finished processing images in: {directory}\n{'-'*50}")

if __name__ == "__main__":
    print("Starting image processing...\n")
    process_images()
    print("\nAll processing completed.")
