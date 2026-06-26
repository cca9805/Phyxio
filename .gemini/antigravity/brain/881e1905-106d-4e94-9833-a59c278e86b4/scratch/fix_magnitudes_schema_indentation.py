import os
import re

def fix_magnitudes_schema_indentation(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    magnitude_keys = [
        "id", "symbol", "nombre", "descripcion", "unidad_si", "dimension",
        "is_vector", "components", "category", "physical_role", "used_in",
        "common_mistake", "typical_range", "sign_behavior", "zero_behavior",
        "value_nature", "kind", "interpretation_tags"
    ]
    
    new_lines = []
    modified = False
    
    current_item_indent = -1
    
    for i in range(len(lines)):
        line = lines[i]
        stripped = line.strip()
        if not stripped:
            new_lines.append(line)
            continue
            
        # Match a list item: ^(\s*)-\s*id:
        m_id = re.match(r'^(\s*)-\s*id:(.*)$', line)
        if m_id:
            current_item_indent = len(m_id.group(1))
            new_lines.append(line)
            continue
            
        # Match other keys in the same item
        m_key = re.match(r'^(\s*)(\w+):(.*)$', line)
        if m_key:
            indent = len(m_key.group(1))
            key = m_key.group(2)
            rest = m_key.group(3)
            
            if key in magnitude_keys and current_item_indent != -1:
                target_indent = current_item_indent + 2
                if indent != target_indent:
                    new_lines.append(f"{' '*target_indent}{key}:{rest}\n")
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
                if fix_magnitudes_schema_indentation(path):
                    count += 1
                    print(f"Fixed Magnitudes Schema: {path}")

    print(f"\nDone. Fixed {count} magnitudes.yaml files.")
