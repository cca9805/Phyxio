import os
import re

def magnitudes_master_indenter(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    # Simple state machine
    # 0: root
    # 1: magnitudes list item
    # 2: magnitude sub-key
    # 3: bilingual sub-key
    
    magnitude_keys = ["id", "symbol", "nombre", "descripcion", "unidad_si", "dimension", "is_vector", "components", "category", "physical_role", "used_in", "common_mistake", "typical_range", "sign_behavior", "zero_behavior", "value_nature", "kind", "interpretation_tags"]
    
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
            continue
            
        m_key = re.match(r'^(\s*)(\w+):\s*(.*)$', line)
        if m_key:
            key = m_key.group(2)
            rest = m_key.group(3).strip()
            
            if key in ["version", "magnitudes"]:
                new_lines.append(f"{key}: {rest}\n")
                modified = True
                continue
                
            if key in magnitude_keys:
                new_lines.append(f"    {key}: {rest}\n")
                modified = True
                continue
                
            if key in ["es", "en"]:
                new_lines.append(f"      {key}: {rest}\n")
                modified = True
                continue
                
            # If unknown key, indent it based on previous?
            # For now, let's just assume it's a sub-sub-key
            new_lines.append(f"      {stripped}\n")
            modified = True
            continue
            
        # List items in used_in or tags
        m_item = re.match(r'^(\s*)-\s*(.*)$', line)
        if m_item and not stripped.startswith("- id:"):
            val = m_item.group(2).strip()
            new_lines.append(f"      - {val}\n")
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
                if magnitudes_master_indenter(path):
                    count += 1
                    print(f"Master Indented Magnitudes: {path}")

    print(f"\nDone. Fixed {count} magnitudes.yaml files.")
