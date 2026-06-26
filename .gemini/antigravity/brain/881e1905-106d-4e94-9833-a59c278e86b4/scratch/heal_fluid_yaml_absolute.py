import os
import re

def heal_yaml_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    # Target keys that can be bilingual
    target_keys = ["nombre", "title", "descripcion", "description", "physical_meaning", "validity", "result_semantics", "graph_implications", "common_mistake", "zero_behavior", "sign_behavior", "pedagogical_notes", "tab_label", "pregunta_fisica_central", "message"]

    i = 0
    while i < len(lines):
        line = lines[i]
        # Match key: (with optional dash)
        match = re.match(r'^(\s*(?:-\s*)?)(\w+):\s*$', line)
        if match:
            prefix = match.group(1) # e.g. "  - " or "  "
            key = match.group(2)
            
            if key in target_keys:
                # Calculate correct sub-indent
                # If prefix is "  - ", sub-indent should be "      " (6 spaces)
                # If prefix is "  ", sub-indent should be "    " (4 spaces)
                clean_indent = " " * (len(prefix) + 2) if "-" in prefix else prefix + "  "
                # Actually, YAML prefers sub-keys to be indented more than the parent key's START.
                # If parent is "  - title:", "es:" should be at "      es:" (6 spaces).
                
                j = i + 1
                temp_subs = []
                found_sub = False
                while j < len(lines):
                    next_line = lines[j]
                    if not next_line.strip():
                        j += 1
                        continue
                    sub_match = re.match(r'^\s*(es|en|kind|target):\s*(.*)', next_line)
                    if sub_match:
                        tag = sub_match.group(1)
                        val = sub_match.group(2)
                        # Use a consistent sub-indent
                        temp_subs.append(f"{clean_indent}{tag}: {val}\n")
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
                if heal_yaml_file(path):
                    count += 1
                    print(f"Healed: {path}")

    print(f"\nDone. Healed {count} YAML files.")
