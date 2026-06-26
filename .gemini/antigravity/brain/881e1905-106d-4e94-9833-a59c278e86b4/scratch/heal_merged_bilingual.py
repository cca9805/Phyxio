import os
import re

def heal_yaml_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Pattern: key: 'es: ...' followed by dangling lines
    # We want to restore the structure
    
    def restore_bilingual(match):
        indent = match.group(1)
        key = match.group(2)
        es_val = match.group(3)
        dangling = match.group(4)
        en_val = match.group(5)
        
        # Combine es_val and dangling
        full_es = es_val + dangling
        # Strip trailing newlines/spaces
        full_es = full_es.strip()
        full_en = en_val.strip()
        
        return f"{indent}{key}:\n{indent}  es: '{full_es}'\n{indent}  en: '{full_en}'"

    # Match: (indent)(key):\s*'es:\s*([^']*)'\s*\n((?:\s+[^e\n][^\n]*\n)*)\s+en:\s*([^'\n]*)
    # This is getting complex. 
    
    # I'll just use a simpler line-by-line fix for the "merged" lines
    lines = content.split("\n")
    new_lines = []
    modified = False
    i = 0
    while i < len(lines):
        line = lines[i]
        # Match: key: 'es: ...'
        m = re.match(r'^(\s*)(\w+):\s*\'es:\s*(.*)\'\s*$', line)
        if m:
            indent = m.group(1)
            key = m.group(2)
            val = m.group(3)
            # Find the en: part
            j = i + 1
            extra_lines = []
            en_val = ""
            found_en = False
            while j < len(lines):
                if re.match(r'^\s*en:\s*.*', lines[j]):
                    en_match = re.match(r'^\s*en:\s*\'?(.*)\'?\s*$', lines[j])
                    en_val = en_match.group(1) if en_match else ""
                    found_en = True
                    break
                else:
                    extra_lines.append(lines[j].strip())
                    j += 1
            
            if found_en:
                full_es = (val + " " + " ".join(extra_lines)).strip()
                new_lines.append(f"{indent}{key}:")
                new_lines.append(f"{indent}  es: '{full_es}'")
                new_lines.append(f"{indent}  en: '{en_val}'")
                i = j + 1
                modified = True
                continue
        
        new_lines.append(line)
        i += 1

    if modified:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write("\n".join(new_lines))
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
