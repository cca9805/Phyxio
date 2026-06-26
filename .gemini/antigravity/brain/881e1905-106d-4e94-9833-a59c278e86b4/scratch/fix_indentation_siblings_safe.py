import os
import re

def fix_indentation_siblings_safe(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    i = 0
    while i < len(lines):
        line = lines[i]
        m = re.match(r'^(\s+)(domain_checks|coherence_checks|graph_implications|pedagogical_triggers|result_semantics):\s*.*$', line)
        if m:
            indent_str = m.group(1)
            key = m.group(2)
            new_lines.append(f"  {key}:\n")
            modified = True
            i += 1
            while i < len(lines):
                child_m = re.match(r'^\s*-\s*(.*)$', lines[i])
                if child_m:
                    val = child_m.group(1).strip()
                    new_lines.append(f"  - {val}\n")
                    i += 1
                    while i < len(lines):
                        inner_m = re.match(r'^\s*(\w+):\s*(.*)$', lines[i])
                        if inner_m and not re.match(r'^\s*-(.*)$', lines[i]):
                            k = inner_m.group(1)
                            v = inner_m.group(2).strip().strip("'").strip('"')
                            ev = v.replace("'", "''")
                            new_lines.append(f"    {k}: '{ev}'\n")
                            i += 1
                            while i < len(lines):
                                bi_m = re.match(r'^\s*(es|en):\s*(.*)$', lines[i])
                                if bi_m:
                                    bk = bi_m.group(1)
                                    bv = bi_m.group(2).strip().strip("'").strip('"')
                                    ebv = bv.replace("'", "''")
                                    new_lines.append(f"      {bk}: '{ebv}'\n")
                                    i += 1
                                else:
                                    break
                        else:
                            break
                elif re.match(r'^\s*(\w+):\s*(.*)$', lines[i]) and not re.match(r'^\s*-(.*)$', lines[i]):
                    sub_m = re.match(r'^\s*(\w+):\s*(.*)$', lines[i])
                    sk = sub_m.group(1)
                    sv = sub_m.group(2).strip().strip("'").strip('"')
                    esv = sv.replace("'", "''")
                    new_lines.append(f"    {sk}: '{esv}'\n")
                    i += 1
                else:
                    break
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
                if fix_indentation_siblings_safe(path):
                    count += 1
                    print(f"Fixed Safe: {path}")

    print(f"\nDone. Fixed {count} formulas.yaml files.")
