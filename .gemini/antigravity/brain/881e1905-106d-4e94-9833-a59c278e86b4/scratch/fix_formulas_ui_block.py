import os
import re

def fix_formulas_ui_block(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    in_ui = False
    in_groups = False
    in_group_item = False
    
    for line in lines:
        stripped = line.strip()
        if not stripped:
            new_lines.append(line)
            continue
            
        m_root = re.match(r'^(\w+):\s*(.*)$', line)
        if m_root:
            key = m_root.group(1)
            if key == "ui":
                in_ui = True
                new_lines.append(f"ui:\n")
                modified = True
                continue
            elif key in ["version", "formulas", "topic", "variables"]:
                in_ui = False
                in_groups = False
                in_group_item = False
                new_lines.append(line)
                continue
        
        if in_ui:
            m_key = re.match(r'^(\s*)(\w+):\s*(.*)$', line)
            if m_key:
                key = m_key.group(2)
                rest = m_key.group(3).strip()
                
                if key == "default_formula":
                    new_lines.append(f"  default_formula: {rest}\n")
                    modified = True
                    continue
                elif key == "groups":
                    in_groups = True
                    new_lines.append(f"  groups:\n")
                    modified = True
                    continue
                elif key == "title" and in_groups:
                    # Check if it's a list item
                    if line.strip().startswith("-"):
                        new_lines.append(f"    - title:\n")
                    else:
                        new_lines.append(f"      title: {rest}\n")
                    modified = True
                    continue
                elif key == "items" and in_groups:
                    new_lines.append(f"      items:\n")
                    modified = True
                    continue
                elif key in ["es", "en"] and in_groups:
                    new_lines.append(f"        {key}: {rest}\n")
                    modified = True
                    continue
            
            m_item = re.match(r'^(\s*)-\s*(.*)$', line)
            if m_item and in_groups:
                val = m_item.group(2).strip()
                if val.startswith("title:"):
                    new_lines.append(f"    - title:\n")
                else:
                    new_lines.append(f"        - {val}\n")
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
            if file.endswith("formulas.yaml"):
                path = os.path.join(root, file)
                if fix_formulas_ui_block(path):
                    count += 1
                    print(f"Fixed Formulas UI Block: {path}")

    print(f"\nDone. Fixed {count} formulas.yaml files.")
