import os
import re

def fix_dangling_list_items(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    current_list_indent = -1
    
    for i, line in enumerate(lines):
        stripped = line.strip()
        if stripped.startswith("-"):
            indent = len(re.match(r'^(\s*)-', line).group(1))
            # If this is a list item and it looks under-indented relative to siblings
            # or if it's the start of a list and it's at column 0/2/etc incorrectly.
            # This is hard.
            pass

    # I'll just use a targeted fix for the 'formulas:' block in interpretacion.yaml
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Fix 'formulas:\n    - item\n\n  - item'
    # Match: (formulas|magnitudes|used_in|niveles|tags|constraints):\n(\s+)- (.*)\n\n(\s+)- (.*)
    # Actually, simpler:
    new_content = re.sub(r'(\w+):\s*\n(\s+)- (.*)\n\n(\s+)-', r'\1:\n\2- \3\n\2-', content)
    
    if new_content != content:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        return True
    return False

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".yaml"):
                path = os.path.join(root, file)
                if fix_dangling_list_items(path):
                    count += 1
                    print(f"Fixed Dangling: {path}")

    print(f"\nDone. Fixed {count} YAML files.")
