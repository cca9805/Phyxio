import os
import re

def fix_list_item_mapping_indentation(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    in_list_item = False
    item_indent = -1
    
    for i in range(len(lines)):
        line = lines[i]
        stripped = line.strip()
        
        if not stripped:
            new_lines.append(line)
            continue
            
        # Match a list item line: ^(\s*)-\s*(\w+):
        m_item = re.match(r'^(\s*)-\s*(\w+):(.*)$', line)
        if m_item:
            item_indent = len(m_item.group(1))
            in_list_item = True
            new_lines.append(line)
            continue
            
        # Match a top-level key or another list item
        if re.match(r'^(\s*)-\s*', line):
            # This is another list item, reset indent but keep in_list_item True
            m_next_item = re.match(r'^(\s*)-\s*', line)
            item_indent = len(m_next_item.group(1))
            in_list_item = True
            new_lines.append(line)
            continue
            
        if in_list_item:
            # Match a sub-key: ^(\s*)(\w+):
            m_sub = re.match(r'^(\s*)(\w+):', line)
            if m_sub:
                sub_indent = len(m_sub.group(1))
                # If sub-key is at the same indent as the item's '-'
                if sub_indent <= item_indent:
                    # Fix it to item_indent + 2
                    new_lines.append(f"{' '*(item_indent + 2)}{stripped}\n")
                    modified = True
                    continue
                
            # If it's a line that doesn't match a sub-key but is part of the mapping
            # We might need to adjust it too, but let's start with sub-keys.
            
            # If we hit a line with less indentation than the list start key, we might be out of the list
            # But in Phyxio, most items are well-structured.
            
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
                if fix_list_item_mapping_indentation(path):
                    count += 1
                    print(f"Fixed List Mapping Indent: {path}")

    print(f"\nDone. Fixed {count} YAML files.")
