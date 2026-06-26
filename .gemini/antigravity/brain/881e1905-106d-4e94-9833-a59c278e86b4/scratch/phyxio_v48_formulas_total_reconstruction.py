import os
import re
import yaml

def total_reconstruction_formulas(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    # We'll use a very simple parser that understands the 
    # specific Phyxio formulas.yaml structure:
    # version: ...
    # formulas:
    #   - id: ...
    #     rearrangements:
    #       - target: ...
    #         equation: ...
    
    # Pre-clean: Remove anchors/aliases
    content = "".join(lines)
    content = re.sub(r":\s*['\"]?[&*]\w+['\"]?\s*\n", ": \n", content)
    
    # RECOVERY: If we see '- target:' and it's NOT indented enough, force indent it.
    new_lines = []
    in_rearrangements = False
    for line in content.split("\n"):
        if "rearrangements:" in line:
            in_rearrangements = True
            new_lines.append(line)
            continue
        if in_rearrangements:
            if re.match(r'^\s{0,4}- target:', line):
                new_lines.append("      " + line.strip())
                continue
            if re.match(r'^\s{0,4}\w+:', line) and not line.strip().startswith("-"):
                in_rearrangements = False
        new_lines.append(line)
    
    cleaned_content = "\n".join(new_lines)
    
    try:
        data = yaml.safe_load(cleaned_content)
        with open(file_path, "w", encoding="utf-8") as f:
            yaml.dump(data, f, allow_unicode=True, sort_keys=False, default_flow_style=False, indent=2)
        return True
    except Exception as e:
        print(f"Failed rebirth formulas {file_path}: {e}")
        return False

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file == "formulas.yaml":
                path = os.path.join(root, file)
                if total_reconstruction_formulas(path):
                    count += 1
                    print(f"Reconstructed Formulas: {path}")

    print(f"\nDone. Fixed {count} Formula files.")
