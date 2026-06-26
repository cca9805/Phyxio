import os
import re
import yaml

def manual_dict_fix(file_path):
    # This is a last resort. We will manually parse the YAML into a dict,
    # then dump it back. This avoids the block collection error by 
    # being extremely literal about indentation.
    
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()
        
    # Pre-clean: Remove anchors/aliases and fix the specific sibling error
    new_lines = []
    for line in lines:
        # Remove anchors
        line = re.sub(r":\s*['\"]?[&*]\w+['\"]?\s*\n", ": \n", line)
        # If it's a mapping key that is indented same as a list item, move it back
        # We'll do this in a second pass.
        new_lines.append(line)
        
    # Second pass: detect sibling conflict
    final_lines = []
    for i in range(len(new_lines)):
        line = new_lines[i]
        if re.match(r'^(\s+)\w+:', line) and not line.strip().startswith("-"):
            indent = len(re.match(r'^\s*', line).group(0))
            # Check previous line
            prev_idx = i - 1
            while prev_idx >= 0 and not new_lines[prev_idx].strip():
                prev_idx -= 1
            if prev_idx >= 0:
                m_prev = re.match(r'^(\s+)-', new_lines[prev_idx])
                if m_prev:
                    prev_indent = len(m_prev.group(1))
                    if indent == prev_indent:
                        # Conflict! Force move back.
                        final_lines.append(" " * (indent - 2) + line.lstrip())
                        continue
        final_lines.append(line)
        
    content = "".join(final_lines)
    
    try:
        # Try to load the cleaned content
        data = yaml.safe_load(content)
        with open(file_path, "w", encoding="utf-8") as f:
            yaml.dump(data, f, allow_unicode=True, sort_keys=False, default_flow_style=False, indent=2)
        return True
    except Exception as e:
        # If it still fails, the file is structurally garbage. 
        # We will try a RECOVERY mode: strip all list items from the offending block.
        print(f"Hard failure on {file_path}: {e}")
        return False

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file == "interpretacion.yaml":
                path = os.path.join(root, file)
                if manual_dict_fix(path):
                    count += 1
                    print(f"Exorcised: {path}")

    print(f"\nDone. Fixed {count} Interpretacion files.")
