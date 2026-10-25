import os
import zipfile
import time

def package_hostinger():
    start_t = time.time()
    src_dist = 'dist/arun-portfolio/browser'
    src_videos = 'public/Videos'
    zip_filename = 'hostinger-deploy.zip'

    if not os.path.exists(src_dist):
        print(f"Error: {src_dist} does not exist. Run 'npm run build:hostinger' first.")
        return

    if os.path.exists(zip_filename):
        os.remove(zip_filename)

    print(f"Packaging {zip_filename} with full application and portfolio videos...")
    with zipfile.ZipFile(zip_filename, 'w') as zipf:
        # Add all dist files
        for root, dirs, files in os.walk(src_dist):
            for f in files:
                full_path = os.path.join(root, f)
                rel_path = os.path.relpath(full_path, src_dist)
                compress_type = zipfile.ZIP_STORED if f.endswith(('.mp4', '.mov', '.m4v')) else zipfile.ZIP_DEFLATED
                zipf.write(full_path, rel_path, compress_type=compress_type)

        # Add all public/Videos files into Videos/
        if os.path.exists(src_videos):
            for root, dirs, files in os.walk(src_videos):
                for f in files:
                    if f.startswith('.'): continue
                    full_path = os.path.join(root, f)
                    rel_path = os.path.join('Videos', os.path.relpath(full_path, src_videos))
                    zipf.write(full_path, rel_path, compress_type=zipfile.ZIP_STORED)

    sz_mb = os.path.getsize(zip_filename) / (1024 * 1024)
    print(f"Done in {time.time() - start_t:.1f}s! Packaged {zip_filename} ({sz_mb:.2f} MB / {sz_mb/1024:.2f} GB)")

if __name__ == '__main__':
    package_hostinger()
