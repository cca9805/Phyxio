import os
import re
import yaml

def rebirth_interpretacion(file_path):
    # This script will use a line-by-line tree builder that handles 
    # the mixed mapping/list items by forcing them into a consistent structure.
    
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Remove anchors/aliases
    content = re.sub(r":\s*['\"]?[&*]\w+['\"]?\s*\n", ": \n", content)
    
    # 2. Fix 'sections: ' followed by '- id' with no indentation difference
    content = re.sub(r"(sections:\s*\n)(\s*)- id", r"\1\2  - id", content)
    content = re.sub(r"(priority_order:\s*\n)(\s*)-", r"\1\2  -", content)
    content = re.sub(r"(standard_assumptions:\s*\n)(\s*)-", r"\1\2  -", content)
    content = re.sub(r"(standard_warnings:\s*\n)(\s*)-", r"\1\2  -", content)
    
    # 3. Fix sibling mapping keys that are at list item level
    lines = content.split("\n")
    fixed_lines = []
    for i in range(len(lines)):
        line = lines[i]
        if re.match(r'^(\s+)\w+:', line) and not line.strip().startswith("-"):
            indent = len(re.match(r'^\s*', line).group(0))
            if i > 0:
                m_prev = re.match(r'^(\s+)-', lines[i-1])
                if m_prev and len(m_prev.group(1)) == indent:
                    fixed_lines.append(" " * (indent - 2) + line.lstrip())
                    continue
        fixed_lines.append(line)
        
    rebirth_content = "\n".join(fixed_lines)
    
    try:
        data = yaml.safe_load(rebirth_content)
        with open(file_path, "w", encoding="utf-8") as f:
            yaml.dump(data, f, allow_unicode=True, sort_keys=False, default_flow_style=False, indent=2)
        return True
    except Exception as e:
        print(f"Still failing {file_path}: {e}")
        return False

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file == "interpretacion.yaml":
                path = os.path.join(root, file)
                if rebirth_interpretacion(path):
                    count += 1
                    print(f"Reborn: {path}")

    print(f"\nDone. Fixed {count} Interpretacion files.")
