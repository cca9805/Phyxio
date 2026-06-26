import os
import re

def fix_empty_string_parents(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Pattern: title: ''\n      es:
    # Match: (\w+):\s*\'\'\s*\n(\s+)(\w+):
    def repl(m):
        key = m.group(1)
        indent = m.group(2)
        child = m.group(3)
        return f"{key}:\n{indent}{child}:"

    new_content = re.sub(r'(\w+):\s*\'\'\s*\n(\s+)(\w+):', repl, content)
    
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
                if fix_empty_string_parents(path):
                    count += 1
                    print(f"Fixed Empty Parent: {path}")

    print(f"\nDone. Fixed {count} YAML files.")
