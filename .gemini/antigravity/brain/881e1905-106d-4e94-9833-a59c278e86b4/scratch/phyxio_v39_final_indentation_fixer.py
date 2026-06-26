import os
import re

def final_indentation_fix(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()
    
    new_lines = []
    in_broken_block = False
    
    for line in lines:
        stripped = line.strip()
        if not stripped:
            new_lines.append(line)
            continue
            
        # If we see priority_order, start the block fix
        if "priority_order" in line:
            in_broken_block = True
            new_lines.append(line)
            continue
            
        if in_broken_block:
            # If we see a 4-space or 2-space key, the block is over
            m_root = re.match(r'^(\s{0,4})\w+:', line)
            if m_root and not line.strip().startswith("-"):
                in_broken_block = False
                new_lines.append(line)
                continue
            
            # Inside the block, if it's a list item, make sure it's at least 8 spaces? 
            # No, if it's a list item, let's keep it.
            # If it's a mapping key like 'inline_limits', force it to 6 spaces!
            m_key = re.match(r'^(\s+)(\w+):', line)
            if m_key and not line.strip().startswith("-"):
                indent = len(m_key.group(1))
                key = m_key.group(2)
                if indent > 6:
                    new_lines.append("      " + line.strip() + "\n")
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
            if file == "interpretacion.yaml":
                path = os.path.join(root, file)
                if final_indentation_fix(path):
                    count += 1
                    print(f"Final Fixed: {path}")

    print(f"\nDone. Fixed {count} Interpretacion files.")
