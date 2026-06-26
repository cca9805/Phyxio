import os
import re

def deep_indent_correction(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    # We are looking for blocks that should be at 2 spaces but are at 4 (under result_semantics)
    # OR blocks that should be at 4 but are at 2.
    
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Match:     domain_checks:
        m = re.match(r'^    (domain_checks|coherence_checks|graph_implications|pedagogical_triggers):\s*$', line)
        if m:
            key = m.group(1)
            new_lines.append(f"  {key}:\n")
            modified = True
            i += 1
            # Adjust children (should be at 2 or 4)
            while i < len(lines):
                # If next line is a list item indented 2 spaces, it's now correct relative to new parent
                # But it's better to indent it to 4 for clarity
                m_item = re.match(r'^  - (.*)$', lines[i])
                if m_item:
                    val = m_item.group(1).strip()
                    new_lines.append(f"  - {val}\n") # Keeping it at 2 for now as it's common
                    i += 1
                    # Inner children
                    while i < len(lines):
                        m_inner = re.match(r'^  (\w+):\s*(.*)$', lines[i])
                        if m_inner and not re.match(r'^  -', lines[i]):
                            k = m_inner.group(1)
                            v = m_inner.group(2).strip()
                            new_lines.append(f"    {k}: {v}\n")
                            i += 1
                            # Bilingual inner
                            while i < len(lines):
                                m_bi = re.match(r'^    (es|en):\s*(.*)$', lines[i])
                                if m_bi:
                                    bk = m_bi.group(1)
                                    bv = m_bi.group(2).strip()
                                    new_lines.append(f"      {bk}: {bv}\n")
                                    i += 1
                                else:
                                    break
                        else:
                            break
                elif re.match(r'^  \w+:', lines[i]): # Next sibling
                    break
                else:
                    break
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
            if file.endswith("formulas.yaml"):
                path = os.path.join(root, file)
                if deep_indent_correction(path):
                    count += 1
                    print(f"Deep Corrected: {path}")

    print(f"\nDone. Deep Corrected {count} formulas.yaml files.")
