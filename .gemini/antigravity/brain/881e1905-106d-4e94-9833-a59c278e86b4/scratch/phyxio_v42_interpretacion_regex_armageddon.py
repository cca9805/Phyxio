import os
import re

def armageddon_repair_interpretacion(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()
    
    new_lines = []
    for i in range(len(lines)):
        line = lines[i]
        stripped = line.strip()
        if not stripped:
            new_lines.append(line)
            continue
            
        # If this is a mapping key (not a list item)
        m_key = re.match(r'^(\s+)(\w+):', line)
        if m_key and not line.strip().startswith("-"):
            indent = len(m_key.group(1))
            key = m_key.group(2)
            
            # Look back to see if we are at the same level as a list item
            prev_idx = i - 1
            while prev_idx >= 0 and not lines[prev_idx].strip():
                prev_idx -= 1
            
            if prev_idx >= 0:
                m_prev_list = re.match(r'^(\s+)-', lines[prev_idx])
                if m_prev_list:
                    prev_indent = len(m_prev_list.group(1))
                    if indent == prev_indent:
                        # We are a sibling of a list item! MOVE BACK.
                        new_lines.append(" " * (indent - 2) + line.lstrip())
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
                if armageddon_repair_interpretacion(path):
                    count += 1
                    print(f"Armageddon Fixed: {path}")

    print(f"\nDone. Fixed {count} Interpretacion files.")
