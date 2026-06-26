import os
import re

def magnitudes_perfect_indenter(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    # Hierarchy definition
    h = {
        "id": 4, "symbol": 4, "nombre": 4, "descripcion": 4, "unidad_si": 4, 
        "dimension": 4, "is_vector": 4, "components": 4, "category": 4, 
        "physical_role": 4, "used_in": 4, "common_mistake": 4, "typical_range": 4, 
        "sign_behavior": 4, "zero_behavior": 4, "value_nature": 4, 
        "interpretation_role": 4, "interpretation_tags": 4, "kind": 6, 
        "nonnegative_only": 6, "expected_interval": 6, "has_sign": 6, 
        "meaning": 6, "allowed": 6, "primary_for": 6, "secondary_for": 6, 
        "graph_binding": 6, "pedagogical_notes": 6, "es": -1, "en": -1, 
        "channels": 8
    }
    
    current_parent = ""
    
    for line in lines:
        stripped = line.strip()
        if not stripped:
            new_lines.append(line)
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
            
            if key in ["version", "magnitudes"]:
                new_lines.append(f"{key}: {rest}\n")
                modified = True
                continue
                
            if key in h:
                target = h[key]
                if target == -1: # es/en
                    # Need to check previous key to know if it's 6 or 8
                    if current_parent in ["meaning"]:
                        target = 8
                    else:
                        target = 6
                
                new_lines.append(f"{' '*target}{key}: {rest}\n")
                modified = True
                current_parent = key
                continue
            
        # List items
        m_item = re.match(r'^(\s*)-\s*(.*)$', line)
        if m_item:
            val = m_item.group(2).strip()
            if current_parent in ["used_in", "interpretation_tags"]:
                target = 6
            elif current_parent in ["primary_for", "secondary_for"]:
                target = 8
            else:
                target = 6 # Default
            new_lines.append(f"{' '*target}- {val}\n")
            modified = True
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
            if file.endswith("magnitudes.yaml"):
                path = os.path.join(root, file)
                if magnitudes_perfect_indenter(path):
                    count += 1
                    print(f"Perfect Indented Magnitudes: {path}")

    print(f"\nDone. Fixed {count} magnitudes.yaml files.")
