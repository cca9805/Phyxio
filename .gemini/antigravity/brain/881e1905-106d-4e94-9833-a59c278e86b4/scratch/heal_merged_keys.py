import os
import re

def heal_yaml_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Pattern: key: 'sub_key:' (with or without quotes)
    def fix_merged_keys(match):
        indent = match.group(1)
        key = match.group(2)
        sub_key = match.group(3)
        return f"{indent}{key}:\n{indent}  {sub_key}:"

    # Match: (indent)(key):\s*'(sub_key):'
    new_content = re.sub(r'^(\s*)(\w+):\s*\'?(\w+):\'?\s*$', fix_merged_keys, content, flags=re.MULTILINE)

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
