
import os

graphs_path = r"C:\Users\USER\Desktop\Phyxio\frontend\src\v2\components\graphs"

for root, dirs, files in os.walk(graphs_path):
    for f in files:
        if "." not in f:
            # File with no extension
            full_path = os.path.join(root, f)
            jsx_path = full_path + ".jsx"
            js_path = full_path + ".js"
            
            if os.path.exists(jsx_path):
                print(f"Deleting redundant extensionless file: {full_path} (exists as .jsx)")
                os.remove(full_path)
            elif os.path.exists(js_path):
                # If .js exists but no .jsx, maybe rename the extensionless to .jsx if it has JSX?
                # Or just delete if .js is the "real" one?
                # In Phyxio, .jsx is preferred for components.
                print(f"Redundant files found for {f}: no extension and .js. Checking if .jsx exists later.")
                # For now, let's just delete the extensionless if any extension exists.
                print(f"Deleting extensionless: {full_path}")
                os.remove(full_path)
            else:
                # No extension and no .jsx/.js exists. Rename to .jsx.
                print(f"Renaming {full_path} to {jsx_path}")
                os.rename(full_path, jsx_path)

    # Also clean up .js files if .jsx exists and they are redundant
    for f in files:
        if f.endswith(".js") and not f.endswith(".jsx"):
            full_path = os.path.join(root, f)
            jsx_path = full_path + "x" # .js -> .jsx
            if os.path.exists(jsx_path):
                print(f"Deleting redundant .js file: {full_path} (exists as .jsx)")
                os.remove(full_path)
