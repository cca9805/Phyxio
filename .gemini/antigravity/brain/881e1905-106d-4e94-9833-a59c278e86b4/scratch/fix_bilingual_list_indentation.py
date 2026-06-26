import os
import re

def fix_bilingual_list_indentation(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    current_parent_indent = -1
    
    for i in range(len(lines)):
        line = lines[i]
        stripped = line.strip()
        
        # Match es: or en: at any indentation
        m_bi = re.match(r'^(\s*)(es|en):\s*$', line)
        if m_bi:
            indent = len(m_bi.group(1))
            key = m_bi.group(2)
            
            # Find the parent key indentation
            j = i - 1
            while j >= 0:
                p_line = lines[j]
                m_p = re.match(r'^(\s*)(\w+):\s*$', p_line)
                if m_p and m_p.group(2) not in ["es", "en"]:
                    p_indent = len(m_p.group(1))
                    # Standardize es/en to p_indent + 2
                    if indent != p_indent + 2:
                        new_lines.append(f"{' '*(p_indent + 2)}{key}:\n")
                        modified = True
                        break
                    else:
                        new_lines.append(line)
                        break
                j -= 1
            else:
                new_lines.append(line)
            continue
            
        # Match list items under es/en
        m_item = re.match(r'^(\s*)-\s*(.*)$', line)
        if m_item:
            indent = len(m_item.group(1))
            val = m_item.group(2)
            
            # Find the es/en parent
            j = i - 1
            while j >= 0:
                p_line = lines[j]
                m_p = re.match(r'^(\s*)(es|en):\s*$', p_line)
                if m_p:
                    # We found the bilingual parent. It might have been modified in new_lines.
                    # But we can just use its correct indentation (which we want to be p_indent + 4)
                    # Let's find the p_indent of the key ABOVE the es/en.
                    k = j - 1
                    while k >= 0:
                        gp_line = lines[k]
                        m_gp = re.match(r'^(\s*)(\w+):\s*$', gp_line)
                        if m_gp and m_gp.group(2) not in ["es", "en"]:
                            gp_indent = len(m_gp.group(1))
                            target_indent = gp_indent + 4
                            if indent != target_indent:
                                new_lines.append(f"{' '*target_indent}- {val}\n")
                                modified = True
                                break
                            else:
                                new_lines.append(line)
                                break
                        k -= 1
                    else:
                        new_lines.append(line)
                    break
                
                # If we hit another root key before finding es/en, this item is NOT in a bilingual list
                m_other = re.match(r'^(\w+):', p_line)
                if m_other:
                    new_lines.append(line)
                    break
                j -= 1
            else:
                new_lines.append(line)
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
                if fix_bilingual_list_indentation(path):
                    count += 1
                    print(f"Fixed Bilingual List Indentation: {path}")

    print(f"\nDone. Fixed {count} YAML files.")
