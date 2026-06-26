import os
import re

def fix_value_nature(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    i = 0
    while i < len(lines):
        line = lines[i]
        # Match: value_nature: 'kind: ...'
        m = re.match(r'^(\s*)value_nature:\s*\'?kind:\s*\'?(.*)\'?$', line)
        if m:
            indent = m.group(1)
            kind_val = m.group(2).strip().strip("'").strip('"')
            new_lines.append(f"{indent}value_nature:\n")
            new_lines.append(f"{indent}  kind: '{kind_val}'\n")
            
            # Check for subsequent keys like nonnegative_only or expected_interval
            j = i + 1
            while j < len(lines):
                sub_m = re.match(r'^\s*(nonnegative_only|expected_interval|typical_range):\s*(.*)', lines[j])
                if sub_m:
                    sub_key = sub_m.group(1)
                    sub_val = sub_m.group(2).strip().strip("'").strip('"')
                    new_lines.append(f"{indent}  {sub_key}: '{sub_val}'\n")
                    j += 1
                else:
                    break
            i = j
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
            if file.endswith("magnitudes.yaml"):
                path = os.path.join(root, file)
                if fix_value_nature(path):
                    count += 1
                    print(f"Fixed ValueNature: {path}")

    print(f"\nDone. Fixed {count} magnitudes.yaml files.")
