import os
import re

def fix_bilingual_and_sibling_indentation_v2(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    # All known keys for magnitudes and formulas
    known_sibs = [
        "id", "symbol", "nombre", "descripcion", "unidad_si", "dimension",
        "is_vector", "components", "category", "physical_role", "used_in",
        "common_mistake", "typical_range", "sign_behavior", "zero_behavior",
        "value_nature", "kind", "interpretation_tags", "equation", "latex",
        "rearrangements", "result_semantics", "domain_checks", "coherence_checks",
        "graph_implications", "pedagogical_triggers", "title", "physical_meaning",
        "validity", "constraints", "dimension_check", "calculable", "motivo_no_calculable"
    ]
    
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.strip()
        
        m_es = re.match(r'^(\s*)es:\s*(.*)$', line)
        if m_es:
            es_indent = len(m_es.group(1))
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
                    next_indent = len(re.match(r'^(\s*)', l_next).group(1))
                    if next_indent <= es_indent: break
                    new_lines.append(l_next)
                    i += 1
            
            if found_en:
                while i < len(lines):
                    l_sib = lines[i]
                    if not l_sib.strip():
                        new_lines.append(l_sib)
                        i += 1
                        continue
                    
                    sib_indent = len(re.match(r'^(\s*)', l_sib).group(1))
                    m_sib_key = re.match(r'^(\s*)(\w+):', l_sib)
                    if m_sib_key:
                        key = m_sib_key.group(2)
                        if key in known_sibs and sib_indent > es_indent:
                            # Standardize to es_indent? 
                            # If es: is at 6 (child of descripcion at 4), sibling should be at 4.
                            # So target is es_indent - 2.
                            target = max(0, es_indent - 2)
                            new_lines.append(f"{' '*target}{l_sib.strip()}\n")
                            modified = True
                            i += 1
                            continue
                        elif sib_indent <= es_indent - 2:
                            break
                    
                    if sib_indent <= es_indent - 2:
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
                if fix_bilingual_and_sibling_indentation_v2(path):
                    count += 1
                    print(f"Fixed Bilingual/Siblings V2: {path}")

    print(f"\nDone. Fixed {count} YAML files.")
