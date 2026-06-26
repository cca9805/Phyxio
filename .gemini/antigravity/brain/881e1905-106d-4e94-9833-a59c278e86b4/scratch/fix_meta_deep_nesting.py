import os
import re

def fix_meta_deep_nesting(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    in_mini_graph = False
    in_output_policy = False
    in_dependencies = False
    
    for line in lines:
        stripped = line.strip()
        if not stripped:
            new_lines.append(line)
            continue
            
        m_key = re.match(r'^(\s*)(\w+):\s*(.*)$', line)
        if m_key:
            indent = len(m_key.group(1))
            key = m_key.group(2)
            rest = m_key.group(3).strip()
            
            if key == "mini_graph":
                in_mini_graph = True
                in_output_policy = False
                in_dependencies = False
                new_lines.append(line)
                continue
            elif key == "output_policy":
                in_mini_graph = False
                in_output_policy = True
                in_dependencies = False
                new_lines.append(line)
                continue
            elif key == "dependencies":
                in_mini_graph = False
                in_output_policy = False
                in_dependencies = True
                new_lines.append(line)
                continue
            elif indent == 0 and key not in ["mini_graph", "output_policy", "dependencies"]:
                # We hit another root key
                if not (key in ["interpretacion", "ui"] or (key == "enabled" and (in_mini_graph or in_output_policy))):
                    in_mini_graph = False
                    in_output_policy = False
                    in_dependencies = False
            
            # Fix children
            if in_mini_graph and key in ["enabled", "preferred_type"]:
                new_lines.append(f"    {key}: {rest}\n")
                modified = True
                continue
            
            if in_output_policy and key in ["show_summary_first", "max_inline_messages", "show_warnings", "show_likely_errors"]:
                new_lines.append(f"    {key}: {rest}\n")
                modified = True
                continue
                
            if in_dependencies and key in ["requires_formulas", "requires_magnitudes", "supports_graph_binding"]:
                new_lines.append(f"    {key}: {rest}\n")
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
            if file.endswith("meta.yaml"):
                path = os.path.join(root, file)
                if fix_meta_deep_nesting(path):
                    count += 1
                    print(f"Fixed Meta Deep Nesting: {path}")

    print(f"\nDone. Fixed {count} meta.yaml files.")
