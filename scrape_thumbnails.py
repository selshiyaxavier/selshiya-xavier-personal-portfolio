import instaloader
import os
import shutil

# Initialize Instaloader
L = instaloader.Instaloader()

# List of shortcodes from the URLs
# https://www.instagram.com/reel/DPnMiNzk3eZ/ -> DPnMiNzk3eZ
shortcodes = {
    "DPnMiNzk3eZ": "thumb1.jpg",
    "DPbKHlhk8hx": "thumb2.jpg",
    "DPHCme5k1CF": "thumb3.jpg",
    "DG6_GGhzHC3": "thumb4.jpg",
    "DCoOPb1vwD8": "thumb5.jpg"
}

# Create a temporary directory for downloads
if not os.path.exists("temp_downloads"):
    os.makedirs("temp_downloads")

# Target directory in public folder
public_dir = "public/images/portfolio"
if not os.path.exists(public_dir):
    os.makedirs(public_dir)

print("Starting download...")

for shortcode, filename in shortcodes.items():
    try:
        print(f"Downloading {shortcode}...")
        post = instaloader.Post.from_shortcode(L.context, shortcode)
        
        # Download the post
        L.download_post(post, target="temp_downloads")
        
        # Find the jpg file in the downloaded folder
        # Instaloader saves files as {date}_{UTC}_...jpg
        # We need to find the .jpg file that was just downloaded in temp_downloads
        
        found = False
        for file in os.listdir("temp_downloads"):
            if file.endswith(".jpg"):
                source = os.path.join("temp_downloads", file)
                destination = os.path.join(public_dir, filename)
                shutil.move(source, destination)
                print(f"Saved {filename}")
                found = True
                break
        
        if not found:
            print(f"Could not find image for {shortcode}")

        # Clean up temp folder content for next iteration
        for file in os.listdir("temp_downloads"):
            os.remove(os.path.join("temp_downloads", file))
            
    except Exception as e:
        print(f"Error downloading {shortcode}: {e}")

# Remove temp directory
os.rmdir("temp_downloads")
print("Done!")
