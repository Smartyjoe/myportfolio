import sys
import requests
import os
from datetime import datetime

# CONFIGURATION
WORKER_URL = "https://image-ai.desmart79.workers.dev"
AUTH_KEY = "Bearer soni-ekoiai-9maomo29"

def main():
    if len(sys.argv) < 2:
        print("Usage: python gen_image.py '<PROMPT>' [FILENAME] [FOLDER] [RESOLUTION]")
        return

    prompt = sys.argv[1]
    filename = sys.argv[2] if len(sys.argv) >= 3 and sys.argv[2] else f"img_{datetime.now().strftime('%M%S')}.png"
    folder = sys.argv[3] if len(sys.argv) >= 4 else "."
    
    # Handle Resolution (e.g., "1024x768")
    width, height = 1024, 1024
    if len(sys.argv) >= 5:
        try:
            res = sys.argv[4].lower().split('x')
            width = int(res[0])
            height = int(res[1])
        except:
            print("Invalid resolution format. Using 1024x1024.")

    if not os.path.exists(folder): os.makedirs(folder)
    save_path = os.path.join(folder, filename if filename.endswith('.png') else filename + ".png")

    try:
        payload = {"prompt": prompt, "width": width, "height": height}
        response = requests.post(WORKER_URL, headers={"Authorization": AUTH_KEY}, json=payload)
        
        if response.status_code == 200:
            with open(save_path, "wb") as f: f.write(response.content)
            print(f"SUCCESS: {width}x{height} image saved to {save_path}")
        else:
            print(f"FAILED: {response.text}")
    except Exception as e:
        print(f"ERROR: {str(e)}")

if __name__ == "__main__": main()