import os
import re

def fix_interpretation_final(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    i = 0
    while i < len(lines):
        line = lines[i]
        # Match: es: (indented X spaces)
        m_es = re.match(r'^(\s+)es:\s*(.*)$', line)
        if m_es:
            indent_str = m_es.group(1)
            val = m_es.group(2).strip()
            # Check next line for en:
            if i + 1 < len(lines):
                m_en = re.match(r'^(\s+)en:\s*(.*)$', lines[i+1])
                if m_en:
                    en_indent_str = m_en.group(1)
                    en_val = m_en.group(2).strip()
                    if indent_str != en_indent_str:
                        # Standardize to 6 spaces if parent was title: at 4
                        # Or just use the maximum of both
                        new_indent = max(len(indent_str), len(en_indent_str))
                        if new_indent < 6: new_indent = 6 # Heuristic for result_blocks
                        
                        new_lines.append(f"{' '*new_indent}es: {val}\n")
                        new_lines.append(f"{' '*new_indent}en: {en_val}\n")
                        modified = True
                        i += 2
                        continue
        
        new_lines.append(line)
        i += 1

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
            if file.endswith("interpretacion.yaml"):
                path = os.path.join(root, file)
                if fix_interpretation_final(path):
                    count += 1
                    print(f"Fixed Interp Final: {path}")

    print(f"\nDone. Fixed {count} interpretacion.yaml files.")
