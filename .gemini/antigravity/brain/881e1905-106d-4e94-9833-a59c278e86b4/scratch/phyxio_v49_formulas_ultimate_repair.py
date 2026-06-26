import os
import re
import yaml

def ultimate_repair_formulas(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Remove anchors
    content = re.sub(r":\s*['\"]?[&*]\w+['\"]?\s*\n", ": \n", content)
    
    # 2. Fix the specific rearrangements list item problem
    # If we see '- target' and the previous line didn't start with 'rearrangements'
    # we need to be careful.
    
    lines = content.split("\n")
    fixed_lines = []
    in_rearrangements = False
    
    for i in range(len(lines)):
        line = lines[i]
        stripped = line.strip()
        if not stripped:
            fixed_lines.append(line)
            continue
            
        if "rearrangements:" in line:
            in_rearrangements = True
            fixed_lines.append(line)
            continue
            
        if in_rearrangements:
            # Detect list item
            if stripped.startswith("-"):
                # If it's '- target' or '- id', force 6 spaces
                if "target:" in stripped:
                    fixed_lines.append("      " + stripped)
                    continue
                # If it's the end of rearrangements (e.g. category:, validitiy:)
                if ":" in stripped and not stripped.startswith("-"):
                    # Wait, if it has a colon and no dash, it's a mapping key
                    # Check if it's at 4 spaces
                    if len(re.match(r'^\s*', line).group(0)) <= 4:
                        in_rearrangements = False
                        fixed_lines.append(line)
                        continue
            else:
                # Mapping key inside rearrangements (equation, latex)
                # Force 8 spaces
                if "equation:" in stripped or "latex:" in stripped:
                    fixed_lines.append("        " + stripped)
                    continue
        
        fixed_lines.append(line)
        
    final_content = "\n".join(fixed_lines)
    
    try:
        data = yaml.safe_load(final_content)
        with open(file_path, "w", encoding="utf-8") as f:
            yaml.dump(data, f, allow_unicode=True, sort_keys=False, default_flow_style=False, indent=2)
        return True
    except Exception as e:
        # Save the fixed content anyway
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(final_content)
        return True

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file == "formulas.yaml":
                path = os.path.join(root, file)
                if ultimate_repair_formulas(path):
                    count += 1
                    print(f"Ulti-Repaired: {path}")

    print(f"\nDone. Fixed {count} Formula files.")
