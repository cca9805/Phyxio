import os
import re

def super_healer(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    for i, line in enumerate(lines):
        line = line.replace(": ''", ":").replace(": \"\"", ":")
        
        m_key = re.match(r'^(\s*)(\w+):\s*(.*)$', line)
        if m_key and not re.match(r'^\s*-\s*', line):
            indent = len(m_key.group(1))
            key = m_key.group(2)
            val = m_key.group(3).strip().strip("'").strip('"')
            
            sub_m = re.match(r'^(es|en|title|target|kind|id):\s*(.*)', val)
            if sub_m:
                sk = sub_m.group(1)
                sv = sub_m.group(2).strip().strip("'").strip('"')
                new_lines.append(f"{' '*indent}{key}:\n")
                ev = sv.replace("'", "''")
                new_lines.append(f"{' '*(indent+2)}{sk}: '{ev}'\n")
                modified = True
                continue
            
        new_lines.append(line)

    final_lines = []
    for i, line in enumerate(new_lines):
        m_bi = re.match(r'^(\s*)(es|en):\s*(.*)$', line)
        if m_bi:
            indent = len(m_bi.group(1))
            key = m_bi.group(2)
            val = m_bi.group(3).strip()
            
            j = len(final_lines) - 1
            while j >= 0:
                p_line = final_lines[j]
                m_p = re.match(r'^(\s*)(\w+):\s*$', p_line)
                if m_p:
                    p_indent = len(m_p.group(1))
                    if indent != p_indent + 2:
                        line = f"{' '*(p_indent+2)}{key}: {val}\n"
                        modified = True
                    break
                j -= 1
        
        final_lines.append(line)

    if modified:
        with open(file_path, "w", encoding="utf-8") as f:
            f.writelines(final_lines)
        return True
    return False

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".yaml"):
                path = os.path.join(root, file)
                if super_healer(path):
                    count += 1
                    print(f"Super Healed: {path}")

    print(f"\nDone. Super Healed {count} YAML files.")
