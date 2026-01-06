import instaloader
import os
import json
import shutil
import re

# Configuration
LINKS_FILE = "data/portfolio_links.txt"
OUTPUT_JSON = "data/portfolio.json"
IMAGES_DIR = "public/images/portfolio"
TEMP_DIR = "temp_downloads"

# Initialize Instaloader
L = instaloader.Instaloader()

# Ensure directories exist
os.makedirs(IMAGES_DIR, exist_ok=True)
os.makedirs(os.path.dirname(OUTPUT_JSON), exist_ok=True)

def get_shortcode(url):
    match = re.search(r'/(?:p|reel)/([a-zA-Z0-9_-]+)', url)
    return match.group(1) if match else None

def infer_category(caption):
    if not caption:
        return "Social Media"
    
    caption_lower = caption.lower()
    
    if any(x in caption_lower for x in ['host', 'emcee', 'anchor', 'stage']):
        return "Event Hosting"
    if any(x in caption_lower for x in ['voice', 'dubbing', 'mic']):
        return "Voice Artist"
    if any(x in caption_lower for x in ['vlog', 'travel', 'trip']):
        return "Vlog"
    if any(x in caption_lower for x in ['interview', 'chat']):
        return "Interview"
    if any(x in caption_lower for x in ['shoot', 'model', 'act']):
        return "Modeling"
        
    return "Social Media"

def main():
    print("🚀 Starting Portfolio Update...")
    
    if not os.path.exists(LINKS_FILE):
        print(f"Error: {LINKS_FILE} not found!")
        return

    with open(LINKS_FILE, 'r') as f:
        urls = [line.strip() for line in f if line.strip()]

    portfolio_data = []

    for url in urls:
        shortcode = get_shortcode(url)
        if not shortcode:
            print(f"⚠️  Invalid URL: {url}")
            continue

        print(f"Processing {shortcode}...")
        
        try:
            post = instaloader.Post.from_shortcode(L.context, shortcode)
            
            # Metadata
            caption = post.caption if post.caption else ""
            category = infer_category(caption)
            
            # Truncate caption for display if too long (optional, but good for UI)
            display_caption = caption.split('\n')[0] if caption else "Check out this reel!"
            if len(display_caption) > 50:
                 display_caption = display_caption[:47] + "..."

            # Image Filename
            image_filename = f"{shortcode}.jpg"
            target_image_path = os.path.join(IMAGES_DIR, image_filename)
            
            # Always download to get fresh thumbnail if changed
            # Instaloader downloads to a folder named after the target
            L.download_post(post, target=TEMP_DIR)
            
            # Find and move the image
            found_image = False
            for file in os.listdir(TEMP_DIR):
                if file.endswith(".jpg"):
                    source = os.path.join(TEMP_DIR, file)
                    shutil.move(source, target_image_path)
                    found_image = True
                    break
            
            # Clean up temp dir
            if os.path.exists(TEMP_DIR):
                shutil.rmtree(TEMP_DIR)

            if found_image:
                print(f"   ✅ Saved thumbnail: {image_filename}")
            else:
                print(f"   ⚠️  Could not download thumbnail for {shortcode}")

            portfolio_data.append({
                "url": url,
                "caption": display_caption,
                "full_caption": caption,
                "category": category,
                "thumbnail": f"/images/portfolio/{image_filename}"
            })

        except Exception as e:
            print(f"   ❌ Error processing {shortcode}: {e}")
            # Fallback if scraping fails but we have the link
            portfolio_data.append({
                "url": url,
                "caption": "Watch on Instagram",
                "category": "Social Media",
                "thumbnail": f"/images/portfolio/{shortcode}.jpg" # Hope it exists or show broken
            })

    # Save JSON
    with open(OUTPUT_JSON, 'w') as f:
        json.dump(portfolio_data, f, indent=2)

    print(f"\n✨ Success! Updated {len(portfolio_data)} items in {OUTPUT_JSON}")

if __name__ == "__main__":
    main()
