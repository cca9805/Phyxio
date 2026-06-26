import os
import re

def formulas_perfect_indenter_v3(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    # Comprehensive hierarchy for all Phyxio YAML files
    h = {
        "id": 4, "symbol": 4, "nombre": 4, "title": 4, "equation": 4, "latex": 4, 
        "rearrangements": 4, "category": 4, "relation_type": 4, 
        "physical_meaning": 4, "constraints": 4, "validity": 4, 
        "dimension_check": 4, "calculable": 4, "result_semantics": 4, 
        "domain_checks": 4, "coherence_checks": 4, "graph_implications": 4, 
        "pedagogical_triggers": 4, "unidad_si": 4, "dimension": 4,
        "is_vector": 4, "components": 4, "used_in": 4, "common_mistake": 4,
        "typical_range": 4, "sign_behavior": 4, "zero_behavior": 4,
        "value_nature": 4, "kind": 6, "nonnegative_only": 6, "expected_interval": 6,
        "target": 6, "sign_meaning": 6, "absolute_value_meaning": 6,
        "has_sign": 6, "meaning": 6, "allowed": 6, "primary_for": 6,
        "secondary_for": 6, "graph_binding": 6, "pedagogical_notes": 6,
        "expr": 8, "message": 8, "channels": 8, "es": -1, "en": -1, "descripcion": 4
    }
    
    current_parent = ""
    
    for line in lines:
        stripped = line.strip()
        if not stripped:
            new_lines.append(line)
            continue
            
        m_root = re.match(r'^(\w+):\s*(.*)$', line)
        if m_root:
            key = m_root.group(1)
            rest = m_root.group(2).strip()
            if key in ["version", "formulas", "topic", "variables", "ui", "interpretacion", "id", "title"]:
                new_lines.append(f"{key}: {rest}\n")
                modified = True
                current_parent = key
                continue
            
        m_id = re.match(r'^(\s*)-\s*id:\s*(.*)$', line)
        if m_id:
            val = m_id.group(2).strip()
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
                    if current_parent in ["meaning", "sign_meaning", "absolute_value_meaning"]:
                        target = 8
                    elif current_parent in ["message"]:
                        target = 10
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
            # Handle special list items that are actually mappings
            if val.startswith("target:"):
                new_lines.append(f"      - {val}\n")
                current_parent = "target"
            elif val.startswith("expr:"):
                new_lines.append(f"      - {val}\n")
                current_parent = "expr"
            else:
                # Normal list item, determine indent based on parent
                if current_parent in ["used_in", "rearrangements", "constraints", "domain_checks", "coherence_checks", "graph_implications", "primary_for", "secondary_for"]:
                    target = 6
                    if current_parent in ["primary_for", "secondary_for"]: target = 8
                else:
                    target = 6
                new_lines.append(f"{' '*target}- {val}\n")
            modified = True
            continue

        # Final fallback: preserve original relative indentation if unknown
        indent = len(re.match(r'^(\s*)', line).group(1))
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
            if file.endswith((".yaml")):
                path = os.path.join(root, file)
                if formulas_perfect_indenter_v3(path):
                    count += 1
                    print(f"Perfect Indented V3: {path}")

    print(f"\nDone. Fixed {count} YAML files.")
