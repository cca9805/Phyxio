import os
import re

def heal_yaml_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    # Keys that are ALWAYS bilingual in Phyxio
    bilingual_keys = ["nombre", "title", "descripcion", "description", "physical_meaning", "validity", "result_semantics", "graph_implications", "common_mistake", "zero_behavior", "sign_behavior", "pedagogical_notes", "tab_label", "pregunta_fisica_central"]

    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Check for broken bilingual key: 'key: 'es: ...''
        # and see if next line has 'en: ...'
        match = re.match(r'^(\s*)(\w+):\s*\'es:\s*([^\'\n]*)\'(\s*)$', line)
        if match:
            indent = match.group(1)
            key = match.group(2)
            es_val = match.group(3)
            
            if key in bilingual_keys:
                # Check next line
                if i + 1 < len(lines):
                    next_line = lines[i+1]
                    en_match = re.search(r'en:\s*\'?([^\'\n]*)', next_line)
                    if en_match:
                        en_val = en_match.group(1).strip()
                        # Reconstruct correctly
                        new_lines.append(f"{indent}{key}:\n")
                        new_lines.append(f"{indent}  es: '{es_val}'\n")
                        new_lines.append(f"{indent}  en: '{en_val}'\n")
                        i += 2
                        modified = True
                        continue
        
        # Another pattern: 'key: 'kind: ...'' where kind is a sub-key
        match_kind = re.match(r'^(\s*)(\w+):\s*\'kind:\s*([^\'\n]*)\'(\s*)$', line)
        if match_kind:
            indent = match_kind.group(1)
            key = match_kind.group(2)
            kind_val = match_kind.group(3)
            new_lines.append(f"{indent}{key}:\n")
            new_lines.append(f"{indent}  kind: '{kind_val}'\n")
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
                if heal_yaml_file(path):
                    count += 1
                    print(f"Healed: {path}")

    print(f"\nDone. Healed {count} YAML files.")
