import os
import re

def final_surgical_fix(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    i = 0
    while i < len(lines):
        line = lines[i]
        
        m1 = re.match(r'^(\s*)(\w+):\s*\'?(\w+):\s*\'?$', line)
        if m1:
            indent = m1.group(1)
            parent = m1.group(2)
            child = m1.group(3)
            new_lines.append(f"{indent}{parent}:\n")
            new_lines.append(f"{indent}  {child}:\n")
            modified = True
            i += 1
            continue

        m2 = re.match(r'^(\s*)(\w+):\s*\'?(\w+):\s*(.*)\'?$', line)
        if m2:
            indent = m2.group(1)
            parent = m2.group(2)
            child = m2.group(3)
            val = m2.group(4).strip().strip("'").strip('"')
            if child in ["es", "en", "target", "kind", "title"]:
                new_lines.append(f"{indent}{parent}:\n")
                escaped = val.replace("'", "''")
                new_lines.append(f"{indent}  {child}: '{escaped}'\n")
                modified = True
                i += 1
                continue

        new_lines.append(line)
        i += 1

    if modified:
        with open(file_path, "w", encoding="utf-8") as f:
            f.writelines(new_lines)
        return True
    return False

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".yaml"):
                path = os.path.join(root, file)
                if final_surgical_fix(path):
                    count += 1
                    print(f"Surgically Fixed: {path}")

    print(f"\nDone. Fixed {count} YAML files.")
