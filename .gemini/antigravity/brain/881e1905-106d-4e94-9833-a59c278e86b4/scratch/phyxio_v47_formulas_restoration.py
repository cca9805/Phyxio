import os
import re

def fix_formulas_rearrangements(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()
    
    new_lines = []
    in_rearrangements = False
    
    for i in range(len(lines)):
        line = lines[i]
        stripped = line.strip()
        
        if "rearrangements:" in line:
            in_rearrangements = True
            new_lines.append(line)
            continue
            
        if in_rearrangements:
            # If we see a 4-space key that is not 'rearrangements', we are out
            m_root = re.match(r'^(\s{0,4})\w+:', line)
            if m_root and not line.strip().startswith("-"):
                in_rearrangements = False
                new_lines.append(line)
                continue
                
            # Inside rearrangements, if it's NOT a list item but looks like a key (equation, latex)
            # AND it's not indented enough relative to the previous - target
            if (": " in stripped) and not stripped.startswith("-"):
                indent = len(re.match(r'^\s*', line).group(0))
                # If it's equation or latex, force it to be a child of the current list item
                if "equation" in stripped or "latex" in stripped:
                    # We'll just force them to 8 spaces if the list item is at 6
                    new_lines.append("        " + stripped + "\n")
                    continue
        
        new_lines.append(line)
        
    with open(file_path, "w", encoding="utf-8") as f:
        f.writelines(new_lines)
    return True

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file == "formulas.yaml":
                path = os.path.join(root, file)
                if fix_formulas_rearrangements(path):
                    count += 1
                    print(f"Fixed Formulas: {path}")

    print(f"\nDone. Fixed {count} Formula files.")
