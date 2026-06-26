import os
import re

def formulas_perfect_indenter_v2(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    # Hierarchy for both Formulas and Variables
    h = {
        "id": 4, "symbol": 4, "nombre": 4, "title": 4, "equation": 4, "latex": 4, 
        "rearrangements": 4, "category": 4, "relation_type": 4, 
        "physical_meaning": 4, "constraints": 4, "validity": 4, 
        "dimension_check": 4, "calculable": 4, "result_semantics": 4, 
        "domain_checks": 4, "coherence_checks": 4, "graph_implications": 4, 
        "pedagogical_triggers": 4, "unidad_si": 4, "dimension": 4,
        "target": 6, "kind": 6, "sign_meaning": 6, "absolute_value_meaning": 6, 
        "expr": 8, "message": 8, "es": -1, "en: ": -1, "es:": -1, "en:": -1, "en": -1
    }
    
    current_parent = ""
    in_list = False
    
    for line in lines:
        stripped = line.strip()
        if not stripped:
            new_lines.append(line)
            continue
            
        m_root = re.match(r'^(\w+):\s*(.*)$', line)
        if m_root:
            key = m_root.group(1)
            rest = m_root.group(2).strip()
            if key in ["version", "formulas", "topic", "variables", "ui", "id", "title"]:
                new_lines.append(f"{key}: {rest}\n")
                modified = True
                current_parent = key
                continue
            
        m_item = re.match(r'^(\s*)-\s*id:\s*(.*)$', line)
        if m_item:
            val = m_item.group(2).strip()
            new_lines.append(f"  - id: {val}\n")
            modified = True
            current_parent = "id"
            continue
            
        m_key = re.match(r'^(\s*)(\w+):\s*(.*)$', line)
        if m_key:
            key = m_key.group(2)
            rest = m_key.group(3).strip()
            
            if key in h:
                target = h[key]
                if target == -1: # es/en
                    if current_parent in ["sign_meaning", "absolute_value_meaning"]:
                        target = 8
                    elif current_parent in ["message"]:
                        target = 10
                    elif current_parent in ["topic"]: # root topic
                        target = 2
                    elif current_parent in ["title", "nombre", "descripcion", "physical_meaning", "validity", "pedagogical_triggers"]:
                        # If the key is under a root key (like topic: title:), indent is 4
                        # If under a list item (id: nombre:), indent is 6
                        # Let's check current_parent carefully.
                        # For now, let's just use 6 as most common.
                        target = 6
                    else:
                        target = 6
                
                new_lines.append(f"{' '*target}{key}: {rest}\n")
                modified = True
                current_parent = key
                continue
            
        # List items
        m_list_item = re.match(r'^(\s*)-\s*(.*)$', line)
        if m_list_item:
            val = m_list_item.group(2).strip()
            # If item starts with target: (in rearrangements)
            m_target = re.match(r'^target:\s*(.*)', val)
            if m_target:
                new_lines.append(f"      - target: {m_target.group(1).strip()}\n")
                current_parent = "target"
            # If item starts with expr: (in domain_checks)
            elif re.match(r'^expr:', val):
                new_lines.append(f"      - {val}\n")
                current_parent = "expr"
            else:
                new_lines.append(f"      - {val}\n")
            modified = True
            continue

        # If it's a line that doesn't match anything, it might be a multi-line string or child
        new_lines.append(f"        {stripped}\n") # Indent it a lot to be safe
        modified = True

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
                if formulas_perfect_indenter_v2(path):
                    count += 1
                    print(f"Perfect Indented Formulas V2: {path}")

    print(f"\nDone. Fixed {count} formulas.yaml files.")
