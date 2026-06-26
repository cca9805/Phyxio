import os
import re

def heal_yaml_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Pattern: key: 'target: val' \n indent kind: val
    def heal_result_semantics(match):
        indent = match.group(1)
        target_val = match.group(2)
        kind_indent = match.group(3)
        kind_val = match.group(4)
        return f"{indent}result_semantics:\n{indent}  target: {target_val}\n{kind_indent}kind: {kind_val}"

    new_content = re.sub(r'^(\s*)result_semantics:\s*\'target:\s*([^\'\n]*)\'\n(\s+)kind:\s*([^\n]*)', heal_result_semantics, content, flags=re.MULTILINE)

    # Pattern: key: '- Item1' \n indent - Item2
    def heal_list(match):
        indent = match.group(1)
        key = match.group(2)
        item1 = match.group(3)
        return f"{indent}{key}:\n{indent}- {item1}"

    new_content = re.sub(r'^(\s*)(graph_implications|constraints|used_in|interpretation_tags|levels|tags|graficos):\s*\'-\s*([^\'\n]*)\'', heal_list, new_content, flags=re.MULTILINE)

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
