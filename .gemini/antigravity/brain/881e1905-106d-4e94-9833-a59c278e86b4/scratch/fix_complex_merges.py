import os
import re

def fix_merged_complex_keys(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    i = 0
    while i < len(lines):
        line = lines[i]
        # Match: key: 'sub_key: val'
        m = re.match(r'^(\s*)(result_semantics|graph_implications|coherence_checks|domain_checks):\s*\'?(\w+):\s*(.*)\'?$', line)
        if m:
            indent = m.group(1)
            parent_key = m.group(2)
            sub_key = m.group(3)
            sub_val = m.group(4).strip().strip("'").strip('"')
            
            new_lines.append(f"{indent}{parent_key}:\n")
            new_lines.append(f"{indent}  {sub_key}: '{sub_val}'\n")
            
            j = i + 1
            while j < len(lines):
                sub_next_m = re.match(r'^\s+(\w+):\s*(.*)', lines[j])
                if sub_next_m:
                    s_key = sub_next_m.group(1)
                    s_val = sub_next_m.group(2).strip()
                    if s_key in ["sign_meaning", "absolute_value_meaning", "message"]:
                        new_lines.append(f"{indent}  {s_key}:\n")
                        k = j + 1
                        while k < len(lines):
                            bi_m = re.match(r'^\s*(es|en):\s*(.*)', lines[k])
                            if bi_m:
                                b_key = bi_m.group(1)
                                b_val = bi_m.group(2).strip().strip("'").strip('"')
                                escaped = b_val.replace("'", "''")
                                new_lines.append(f"{indent}    {b_key}: '{escaped}'\n")
                                k += 1
                            else:
                                break
                        j = k
                    else:
                        escaped = s_val.strip("'\" ").replace("'", "''")
                        new_lines.append(f"{indent}  {s_key}: '{escaped}'\n")
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
            if file.endswith("formulas.yaml"):
                path = os.path.join(root, file)
                if fix_merged_complex_keys(path):
                    count += 1
                    print(f"Fixed Complex: {path}")

    print(f"\nDone. Fixed {count} formulas.yaml files.")
