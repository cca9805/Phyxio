import os
import re

def fix_trailing_list_indentation(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    current_key_indent = -1
    
    for i in range(len(lines)):
        line = lines[i]
        stripped = line.strip()
        
        # Match a key line: ^(\s*)(\w+):
        m_key = re.match(r'^(\s*)(\w+):\s*$', line)
        if m_key:
            current_key_indent = len(m_key.group(1))
            new_lines.append(line)
            continue
            
        # Match a list item line: ^(\s*)-\s*
        m_item = re.match(r'^(\s*)-\s*(.*)$', line)
        if m_item:
            indent = len(m_item.group(1))
            item_val = m_item.group(2)
            
            # If we are under a key, the list item should be indented +2 or +4
            # Usually it's +2 or +4. Phyxio often uses +4 for clarity.
            # But the key is that all items in the same list must have the SAME indent.
            
            # Check previous line if it was also a list item
            if i > 0:
                prev_line = new_lines[-1]
                m_prev_item = re.match(r'^(\s*)-\s*', prev_line)
                if m_prev_item:
                    prev_indent = len(m_prev_item.group(1))
                    if indent != prev_indent:
                        new_lines.append(f"{' '*prev_indent}- {item_val}\n")
                        modified = True
                        continue
                elif current_key_indent != -1:
                    # First item of a list. Let's ensure it's at least +2
                    if indent <= current_key_indent:
                        new_lines.append(f"{' '*(current_key_indent + 2)}- {item_val}\n")
                        modified = True
                        continue

        new_lines.append(line)

    if modified:
        with open(file_path, "w", encoding="utf-8") as f:
            f.writelines(new_lines)
        return True
    return False

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".yaml"):
                path = os.path.join(root, file)
                if fix_trailing_list_indentation(path):
                    count += 1
                    print(f"Fixed Trailing Indentation: {path}")

    print(f"\nDone. Fixed {count} YAML files.")
