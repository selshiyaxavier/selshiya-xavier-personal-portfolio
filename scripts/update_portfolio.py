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
        return "Content Creation"
    
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
    if any(x in caption_lower for x in ['content', 'creator', 'social', 'gram']):
        return "Content Creation"
        
    return "Content Creation"

def main():
    print("🚀 Starting Portfolio Update...")
    
    if not os.path.exists(LINKS_FILE):
        print(f"Error: {LINKS_FILE} not found!")
        return

    # Load existing data to preserve manual edits
    existing_data = {}
    if os.path.exists(OUTPUT_JSON):
        try:
            with open(OUTPUT_JSON, 'r') as f:
                data = json.load(f)
                for item in data:
                    existing_data[item['url']] = item
        except Exception as e:
            print(f"⚠️ Could not load existing JSON: {e}")

    with open(LINKS_FILE, 'r') as f:
        urls = [line.strip() for line in f if line.strip()]

    portfolio_data = []

    for url in urls:
        shortcode = get_shortcode(url)
        if not shortcode:
            print(f"⚠️  Invalid URL: {url}")
            continue

        # Check if we already have this item
        existing_item = existing_data.get(url)
        
        # If we have it and it has a valid thumbnail, skip heavy scraping
        # But we still want to keep it in the list to maintain order/presence
        if existing_item and os.path.exists(f"public{existing_item['thumbnail']}"):
            print(f"✅ Found existing: {shortcode} (Preserving manual edits)")
            portfolio_data.append(existing_item)
            continue

        print(f"Processing new/missing: {shortcode}...")
        
        try:
            post = instaloader.Post.from_shortcode(L.context, shortcode)
            
            # Metadata
            caption = post.caption if post.caption else ""
            
            # Smart Category: Use inferred ONLY if it's new. 
            category = infer_category(caption)
            
            # Truncate caption
            display_caption = caption.split('\n')[0] if caption else "Check out this reel!"
            if len(display_caption) > 50:
                 display_caption = display_caption[:47] + "..."

            # Image Filename
            image_filename = f"{shortcode}.jpg"
            target_image_path = os.path.join(IMAGES_DIR, image_filename)
            
            # Download thumbnail
            L.download_post(post, target=TEMP_DIR)
            
            # Move image
            found_image = False
            for file in os.listdir(TEMP_DIR):
                if file.endswith(".jpg"):
                    source = os.path.join(TEMP_DIR, file)
                    shutil.move(source, target_image_path)
                    found_image = True
                    break
            
            if os.path.exists(TEMP_DIR):
                shutil.rmtree(TEMP_DIR)

            portfolio_data.append({
                "url": url,
                "caption": display_caption,
                "full_caption": caption,
                "category": category, # Default inferred
                "thumbnail": f"/images/portfolio/{image_filename}"
            })

        except Exception as e:
            print(f"   ❌ Error processing {shortcode}: {e}")
            # Fallback
            portfolio_data.append({
                "url": url,
                "caption": "Watch on Instagram",
                "category": "Content Creation",
                "thumbnail": f"/images/portfolio/{shortcode}.jpg"
            })

    # Save JSON
    with open(OUTPUT_JSON, 'w') as f:
        json.dump(portfolio_data, f, indent=2)

    print(f"\n✨ Success! Updated {len(portfolio_data)} items in {OUTPUT_JSON}")

if __name__ == "__main__":
    main()
