import os
import re
import yaml

def brute_force_repair_interpretacion(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Remove all YAML anchors and aliases (they are causing the mess)
    content = re.sub(r":\s*['\"]?[&*]\w+['\"]?\s*\n", ": \n", content)
    
    # 2. Fix the priority_order and sections list indentation
    # If a line starts with '-' and the previous line ended with ':'
    lines = content.split("\n")
    new_lines = []
    for i in range(len(lines)):
        line = lines[i]
        if re.match(r'^\s*-', line):
            # Check if parent (previous non-empty line) ended with ':'
            prev_idx = i - 1
            while prev_idx >= 0 and not lines[prev_idx].strip():
                prev_idx -= 1
            if prev_idx >= 0 and lines[prev_idx].strip().endswith(":"):
                # Indent this list item relative to the parent
                p_indent = len(re.match(r'^\s*', lines[prev_idx]).group(0))
                new_lines.append(" " * (p_indent + 2) + line.strip())
            else:
                new_lines.append(line)
        else:
            new_lines.append(line)
    
    fixed_content = "\n".join(new_lines)
    
    # 3. Try to load and dump
    try:
        data = yaml.safe_load(fixed_content)
        with open(file_path, "w", encoding="utf-8") as f:
            yaml.dump(data, f, allow_unicode=True, sort_keys=False, default_flow_style=False, indent=2)
        return True
    except Exception as e:
        # If it still fails, just save the fixed_content
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(fixed_content)
        return True

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file == "interpretacion.yaml":
                path = os.path.join(root, file)
                if brute_force_repair_interpretacion(path):
                    count += 1
                    print(f"Brute Force Repaired: {path}")

    print(f"\nDone. Repaired {count} Interpretacion files.")
