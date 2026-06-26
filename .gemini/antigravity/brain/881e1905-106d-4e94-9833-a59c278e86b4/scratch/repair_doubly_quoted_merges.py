import os
import re

def repair_doubly_quoted_merges(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    for line in lines:
        m = re.match(r'^(\s*)(\w+):\s*\'-\s*\'?(.*)\'?$', line)
        if m:
            indent = m.group(1)
            key = m.group(2)
            val = m.group(3).strip().strip("'").strip('"')
            new_lines.append(f"{indent}{key}:\n")
            ev = val.replace("'", "''")
            new_lines.append(f"{indent}  - '{ev}'\n")
            modified = True
            continue
        
        m2 = re.match(r'^(\s*)(\w+):\s*\'-\s*(.*)\'$', line)
        if m2:
            indent = m2.group(1)
            key = m2.group(2)
            val = m2.group(3).strip().strip("'").strip('"')
            new_lines.append(f"{indent}{key}:\n")
            ev = val.replace("'", "''")
            new_lines.append(f"{indent}  - '{ev}'\n")
            modified = True
            continue

        new_lines.append(line)

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
                if repair_doubly_quoted_merges(path):
                    count += 1
                    print(f"Repaired Merge: {path}")

    print(f"\nDone. Repaired {count} YAML files.")
