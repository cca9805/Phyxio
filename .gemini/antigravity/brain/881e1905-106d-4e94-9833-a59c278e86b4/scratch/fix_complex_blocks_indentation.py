import os
import re

def fix_complex_blocks_indentation(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    complex_keys = [
        "nombre", "descripcion", "niveles", "tags", "value_nature",
        "sign_behavior", "zero_behavior", "interpretation_role",
        "result_semantics", "domain_checks", "coherence_checks",
        "graph_implications", "pedagogical_triggers", "title", "physical_meaning",
        "validity", "summary_rules", "text", "message", "tab_label", "sections"
    ]
    
    new_lines = []
    modified = False
    
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        
        if not stripped:
            new_lines.append(line)
            i += 1
            continue
            
        m_key = re.match(r'^(\s*)(\w+):\s*$', line)
        if m_key:
            indent = len(m_key.group(1))
            key = m_key.group(2)
            
            if key in complex_keys:
                new_lines.append(line)
                i += 1
                # Adjust indentation of subsequent lines until we hit a sibling or parent
                while i < len(lines):
                    next_line = lines[i]
                    next_stripped = next_line.strip()
                    if not next_stripped:
                        new_lines.append(next_line)
                        i += 1
                        continue
                        
                    next_indent = len(re.match(r'^(\s*)', next_line).group(1))
                    
                    # If the next line is indented correctly or more, it might be a child
                    # But if it's LESS or EQUAL, it's a sibling that should be a child
                    if next_indent <= indent:
                        new_lines.append(f"{' '*(indent + 2)}{next_stripped}\n")
                        modified = True
                        i += 1
                        # If this child itself is a complex key, we need to handle it recursively?
                        # For now, let's just do one level.
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
            if file.endswith(".yaml"):
                path = os.path.join(root, file)
                if fix_complex_blocks_indentation(path):
                    count += 1
                    print(f"Fixed Complex Block Indentation: {path}")

    print(f"\nDone. Fixed {count} YAML files.")
