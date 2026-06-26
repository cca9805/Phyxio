import os
import json
import yaml
import re

def json_roundtrip_repair(file_path):
    # This script will use a regex-based pre-repair to make the YAML parsable,
    # then use JSON as an intermediate format to lose the broken indentation,
    # then dump it back as clean YAML.
    
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Pre-repair: Remove anchors and fix common list item issues
    content = re.sub(r":\s*['\"]?[&*]\w+['\"]?\s*\n", ": \n", content)
    
    # 2. Manual line-by-line fix for priority_order and sections
    lines = content.split("\n")
    fixed_lines = []
    for i in range(len(lines)):
        line = lines[i]
        if re.match(r'^\s*-', line):
            # Check if parent key is priority_order or sections
            prev = lines[i-1].strip() if i > 0 else ""
            if "priority_order" in prev or "sections" in prev or "channels" in prev:
                fixed_lines.append("        " + line.strip()) # Force deep indentation
            else:
                fixed_lines.append(line)
        else:
            fixed_lines.append(line)
    
    pre_fixed = "\n".join(fixed_lines)
    
    try:
        # Load pre-fixed YAML
        data = yaml.safe_load(pre_fixed)
        # Roundtrip through JSON to ensure absolute structural integrity
        json_data = json.dumps(data)
        clean_data = json.loads(json_data)
        # Dump back to YAML with canonical indentation
        with open(file_path, "w", encoding="utf-8") as f:
            yaml.dump(clean_data, f, allow_unicode=True, sort_keys=False, default_flow_style=False, indent=2)
        return True
    except Exception as e:
        # If it still fails, we have a problem
        print(f"Failed to repair {file_path}: {e}")
        return False

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file == "interpretacion.yaml":
                path = os.path.join(root, file)
                if json_roundtrip_repair(path):
                    count += 1
                    print(f"JSON Repaired: {path}")

    print(f"\nDone. Repaired {count} Interpretacion files.")
