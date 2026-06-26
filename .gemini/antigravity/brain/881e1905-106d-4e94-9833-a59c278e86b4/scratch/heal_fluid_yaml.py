import os
import re

def heal_yaml_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Pattern 1: key: 'es: Value' followed by indented en:
    # We need to restore the newline and indentation.
    def heal_bilingual(match):
        key = match.group(1)
        es_val = match.group(2)
        indent = match.group(3)
        en_val = match.group(4)
        return f"{key}:\n  es: '{es_val}'\n{indent}en: '{en_val}'"

    # Match key: 'es: ...' \n indent en: ...
    new_content = re.sub(r'(\w+):\s*\'es:\s*([^\'\n]*)\'\n(\s+)en:\s*([^\n]*)', heal_bilingual, content)

    # Pattern 2: Correcting single quotes that shouldn't be there (e.g. descriptions that were already fine)
    # Actually, let's just make sure everything is valid YAML.
    
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
