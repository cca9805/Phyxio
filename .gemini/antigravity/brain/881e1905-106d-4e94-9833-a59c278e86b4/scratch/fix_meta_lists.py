import os
import re

def fix_meta_yaml(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    i = 0
    while i < len(lines):
        line = lines[i]
        # Match: key: (niveles or tags)
        m = re.match(r'^(\s*)(niveles|tags):\s*$', line)
        if m:
            indent = m.group(1)
            key = m.group(2)
            # Check if next line is es: ''
            if i + 1 < len(lines) and re.match(r'^\s*es:\s*\'\'\s*$', lines[i+1]):
                new_lines.append(line)
                # Next line is es:
                new_lines.append(f"{indent}  es:\n")
                i += 2
                # Keep going until we hit en:
                while i < len(lines):
                    if re.match(r'^\s*en:\s*.*$', lines[i]):
                        new_lines.append(f"{indent}  en:\n")
                        i += 1
                        break
                    else:
                        # Fix indentation of list items
                        item_m = re.match(r'^\s*-\s*(.*)$', lines[i])
                        if item_m:
                            val = item_m.group(1).strip().strip("'").strip('"')
                            new_lines.append(f"{indent}    - '{val}'\n")
                        i += 1
                
                # Keep fixing en: list
                while i < len(lines):
                    item_m = re.match(r'^\s*-\s*(.*)$', lines[i])
                    if item_m:
                        val = item_m.group(1).strip().strip("'").strip('"')
                        new_lines.append(f"{indent}    - '{val}'\n")
                        i += 1
                    else:
                        break
                
                modified = True
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
            if file.endswith("meta.yaml"):
                path = os.path.join(root, file)
                if fix_meta_yaml(path):
                    count += 1
                    print(f"Fixed Meta: {path}")

    print(f"\nDone. Fixed {count} meta.yaml files.")
