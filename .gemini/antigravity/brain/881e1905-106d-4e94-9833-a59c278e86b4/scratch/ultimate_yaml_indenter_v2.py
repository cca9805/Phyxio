import os
import re

def ultimate_yaml_indenter_v2(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    root_keys = ["version", "id", "nombre", "area", "bloque", "subbloque", "parent_id", "ruta_relativa", "orden", "type", "niveles", "icon", "descripcion", "description_en", "pregunta_fisica_central", "representacion_dominante", "magnitud_dominante", "physical_role", "tags", "prerequisitos", "graficos", "dificultad", "tiempo_estimado_min", "interpretacion", "magnitudes", "formulas", "topic", "variables", "ui", "targets", "mini_graph", "output_contract", "dependencies", "inline_limits"]
    
    stack = [( -1, "root")]
    
    for i in range(len(lines)):
        line = lines[i]
        stripped = line.strip()
        if not stripped:
            new_lines.append(line)
            continue
            
        indent = len(re.match(r'^(\s*)', line).group(1))
        m_key = re.match(r'^(\s*)(\w+):\s*(.*)$', line)
        m_item = re.match(r'^(\s*)-\s*(.*)$', line)
        
        if m_key:
            key = m_key.group(2)
            rest = m_key.group(3).strip()
            
            if key in root_keys:
                new_lines.append(f"{key}: {rest}\n")
                if indent != 0 or rest != m_key.group(3).strip(): modified = True
                stack = [(0, key)]
                continue
            
            # Special case for bilingual siblings
            if key == "en" and stack and stack[-1][1] == "es":
                stack.pop()
            
            while stack and indent <= stack[-1][0] and stack[-1][0] != -1:
                stack.pop()
            
            # Additional heuristic: if we are at the same indent as the previous key, it's a sibling
            # But the stack handles that if we use '<='
            
            parent_indent = stack[-1][0] if stack else -1
            target_indent = parent_indent + 2
            
            if indent != target_indent or rest != m_key.group(3).strip():
                new_lines.append(f"{' '*target_indent}{key}: {rest}\n")
                modified = True
                stack.append((target_indent, key))
            else:
                new_lines.append(line)
                stack.append((indent, key))
                
        elif m_item:
            while stack and indent <= stack[-1][0] and stack[-1][0] != -1:
                stack.pop()
            
            parent_indent = stack[-1][0] if stack else -1
            target_indent = parent_indent + 2
            
            val = m_item.group(2).strip()
            if indent != target_indent:
                new_lines.append(f"{' '*target_indent}- {val}\n")
                modified = True
                stack.append((target_indent, "item"))
            else:
                new_lines.append(line)
                stack.append((indent, "item"))
        else:
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
                if ultimate_yaml_indenter_v2(path):
                    count += 1
                    print(f"Ultimate Indented V2: {path}")

    print(f"\nDone. Ultimate Indented V2 {count} YAML files.")
