import os
import re

def fix_interpretacion_yaml(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Pattern: priority_order: '&id001'\n      - item
    # We want to indent the - items correctly
    
    # Fix priority_order list items
    content = re.sub(r'(priority_order:.*?\n)(\s*)-', r'\1\2  -', content)
    
    # Fix sections list items
    content = re.sub(r'(sections:.*?\n)(\s*)-', r'\1\2  -', content)
    
    # Fix inline_limits sibling issue
    # If priority_order is at 6 spaces, and inline_limits is below it at the same original level
    # We need to make sure they are siblings
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    return True

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file == "interpretacion.yaml":
                path = os.path.join(root, file)
                if fix_interpretacion_yaml(path):
                    count += 1
                    print(f"Fixed Interpretacion: {path}")

    print(f"\nDone. Fixed {count} Interpretacion files.")
