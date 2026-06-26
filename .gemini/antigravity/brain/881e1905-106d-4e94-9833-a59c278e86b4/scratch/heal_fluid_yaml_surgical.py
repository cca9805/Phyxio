import os
import re

def heal_yaml_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Pattern: key followed by es and en at wrong indentation
    # Disaster pattern:
    #   key:
    #   es: '...'
    #     en: '...'
    
    def heal_bilingual_complex(match):
        indent = match.group(1)
        key = match.group(2)
        es_val = match.group(3)
        en_val = match.group(4)
        # We want:
        # indent key:
        # indent   es: 'es_val'
        # indent   en: 'en_val'
        return f"{indent}{key}:\n{indent}  es: '{es_val}'\n{indent}  en: '{en_val}'"

    # Regex to catch the specific broken structure
    # Match: ^(indent)key:\n(indent)es: '(val)'\n(indent+2)en: '(val)'
    new_content = re.sub(r'^(\s*)(\w+):\s*\n\1es:\s*\'?([^\'\n]*)\'?\n\1\s+en:\s*\'?([^\'\n]*)\'?', heal_bilingual_complex, content, flags=re.MULTILINE)

    if new_content != content:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
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
