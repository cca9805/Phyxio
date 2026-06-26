import os
import re

def fix_bilingual_and_sibling_indentation(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        
        # 1. Match 'es:'
        m_es = re.match(r'^(\s*)es:\s*(.*)$', line)
        if m_es:
            es_indent = len(m_es.group(1))
            es_val = m_es.group(2).strip()
            new_lines.append(line)
            i += 1
            
            # Find matching 'en:'
            found_en = False
            while i < len(lines):
                l_next = lines[i]
                if not l_next.strip():
                    new_lines.append(l_next)
                    i += 1
                    continue
                
                m_en = re.match(r'^(\s*)en:\s*(.*)$', l_next)
                if m_en:
                    en_indent = len(m_en.group(1))
                    en_val = m_en.group(2).strip()
                    if en_indent != es_indent:
                        new_lines.append(f"{' '*es_indent}en: {en_val}\n")
                        modified = True
                    else:
                        new_lines.append(l_next)
                    found_en = True
                    i += 1
                    break
                else:
                    # If we hit something else at the same or less indent than es:, stop
                    next_indent = len(re.match(r'^(\s*)', l_next).group(1))
                    if next_indent <= es_indent:
                        break
                    new_lines.append(l_next)
                    i += 1
            
            if found_en:
                # Now check for siblings that might be over-indented under 'en:'
                while i < len(lines):
                    l_sib = lines[i]
                    if not l_sib.strip():
                        new_lines.append(l_sib)
                        i += 1
                        continue
                    
                    sib_indent = len(re.match(r'^(\s*)', l_sib).group(1))
                    # If this is a key and it's indented more than es:, but it's a known sibling key
                    m_sib_key = re.match(r'^(\s*)(\w+):', l_sib)
                    if m_sib_key:
                        key = m_sib_key.group(2)
                        # Root keys or known magnitude/formula keys
                        known_sibs = ["unidad_si", "dimension", "is_vector", "category", "physical_role", "used_in", "common_mistake", "typical_range", "sign_behavior", "zero_behavior", "value_nature", "equation", "latex", "rearrangements", "result_semantics", "domain_checks"]
                        if key in known_sibs and sib_indent > es_indent:
                            # Pull it back to the level above es:? 
                            # If es: was at 4, parent was at 2. So sibling should be at 4.
                            new_lines.append(f"{' '*es_indent}{l_sib.strip()}\n")
                            modified = True
                            i += 1
                            continue
                        elif sib_indent <= es_indent:
                            break
                    
                    # If it's a list item starting with '-', check its parent
                    if l_sib.strip().startswith("-") and sib_indent > es_indent:
                        # Probably a child of en: that should be pulled back?
                        # This is risky. Let's just do keys for now.
                        pass
                        
                    if sib_indent <= es_indent:
                        break
                        
                    new_lines.append(l_sib)
                    i += 1
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
            if file.endswith(".yaml"):
                path = os.path.join(root, file)
                if fix_bilingual_and_sibling_indentation(path):
                    count += 1
                    print(f"Fixed Bilingual/Siblings: {path}")

    print(f"\nDone. Fixed {count} YAML files.")
