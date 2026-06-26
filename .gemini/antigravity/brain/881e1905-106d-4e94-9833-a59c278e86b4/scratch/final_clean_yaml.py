import os
import re

def final_clean_yaml(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    # Target keys that are often bilingual
    bilingual_parents = ["nombre", "title", "descripcion", "description", "physical_meaning", "validity", "result_semantics", "graph_implications", "common_mistake", "zero_behavior", "sign_behavior", "pedagogical_notes", "tab_label", "pregunta_fisica_central", "message"]

    i = 0
    while i < len(lines):
        line = lines[i]
        # Case 1: Merged key like 'nombre: es: value'
        # Pattern: ^(\s*(?:-\s*)?)(\w+):\s*\'?(es|en):\s*(.*)\'?$
        m = re.match(r'^(\s*(?:-\s*)?)(\w+):\s*\'?(es|en):\s*(.*)\'?$', line)
        if m:
            prefix = m.group(1)
            parent_key = m.group(2)
            sub_key = m.group(3)
            val = m.group(4).strip().strip("'").strip('"')
            
            clean_indent = " " * (len(prefix) + 2) if "-" in prefix else prefix + "  "
            new_lines.append(f"{prefix}{parent_key}:\n")
            # Using double quotes for the f-string to allow single quotes inside
            escaped_val = val.replace("'", "''")
            new_lines.append(f"{clean_indent}{sub_key}: '{escaped_val}'\n")
            modified = True
            i += 1
            continue
            
        # Case 2: parent_key: on one line, and then es: or en: on next lines
        m = re.match(r'^(\s*(?:-\s*)?)(\w+):\s*$', line)
        if m:
            prefix = m.group(1)
            parent_key = m.group(2)
            
            j = i + 1
            found_sub = False
            temp_subs = []
            while j < len(lines):
                if not lines[j].strip():
                    j += 1
                    continue
                sub_m = re.match(r'^\s*(es|en|kind|target):\s*(.*)', lines[j])
                if sub_m:
                    sub_key = sub_m.group(1)
                    val = sub_m.group(2).strip().strip("'").strip('"')
                    clean_indent = " " * (len(prefix) + 2) if "-" in prefix else prefix + "  "
                    escaped_val = val.replace("'", "''")
                    temp_subs.append(f"{clean_indent}{sub_key}: '{escaped_val}'\n")
                    j += 1
                    found_sub = True
                else:
                    break
            
            if found_sub:
                new_lines.append(line)
                new_lines.extend(temp_subs)
                i = j
                modified = True
                continue

        # Case 3: Simple key: value that should be quoted
        m = re.match(r'^(\s*)(\w+):\s*([^ \n\'"\[\{].*)$', line)
        if m:
            indent = m.group(1)
            key = m.group(2)
            val = m.group(3).strip()
            if key not in ["version", "calculable"]:
                escaped_val = val.replace("'", "''")
                new_lines.append(f"{indent}{key}: '{escaped_val}'\n")
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
                if final_clean_yaml(path):
                    count += 1
                    print(f"Cleaned: {path}")

    print(f"\nDone. Cleaned {count} YAML files.")
