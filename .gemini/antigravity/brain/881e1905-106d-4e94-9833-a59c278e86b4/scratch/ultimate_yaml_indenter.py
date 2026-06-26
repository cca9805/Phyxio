import os
import re

def ultimate_yaml_indenter(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    # We identify the file type to apply specific rules
    file_name = os.path.basename(file_path)
    
    # Stack to keep track of current indentation and parent context
    # Each element: (indent, key_type)
    stack = [( -1, "root")]
    
    for i in range(len(lines)):
        line = lines[i]
        stripped = line.strip()
        if not stripped:
            new_lines.append(line)
            continue
            
        # Current indentation
        indent = len(re.match(r'^(\s*)', line).group(1))
        
        # Match a key line: ^(\s*)(\w+):
        m_key = re.match(r'^(\s*)(\w+):\s*(.*)$', line)
        # Match a list item line: ^(\s*)-\s*(.*)$
        m_item = re.match(r'^(\s*)-\s*(.*)$', line)
        
        if m_key:
            key = m_key.group(2)
            rest = m_key.group(3).strip()
            
            # Simple rule: if key is at root level known keys, it must be 0
            root_keys = ["version", "id", "nombre", "area", "bloque", "subbloque", "parent_id", "ruta_relativa", "orden", "type", "niveles", "icon", "descripcion", "description_en", "pregunta_fisica_central", "representacion_dominante", "magnitud_dominante", "physical_role", "tags", "prerequisitos", "graficos", "dificultad", "tiempo_estimado_min", "interpretacion", "magnitudes", "formulas", "topic", "variables", "ui"]
            
            if key in root_keys:
                if indent != 0:
                    new_lines.append(f"{key}: {rest}\n")
                    modified = True
                    stack = [(0, key)]
                else:
                    new_lines.append(line)
                    stack = [(0, key)]
                continue
            
            # If it's a child of a list item or another key
            # Let's find the current parent in stack
            while stack and indent <= stack[-1][0] and stack[-1][0] != -1:
                stack.pop()
            
            parent_indent = stack[-1][0] if stack else -1
            target_indent = parent_indent + 2
            
            if indent != target_indent:
                new_lines.append(f"{' '*target_indent}{key}: {rest}\n")
                modified = True
                stack.append((target_indent, key))
            else:
                new_lines.append(line)
                stack.append((indent, key))
                
        elif m_item:
            # List item
            while stack and indent <= stack[-1][0] and stack[-1][0] != -1:
                stack.pop()
            
            parent_indent = stack[-1][0] if stack else -1
            target_indent = parent_indent # Phyxio often aligns - with parent indent or +2
            # Actually, standard YAML is - at parent_indent or parent_indent+2
            # Phyxio magnitudes/formulas use:
            # magnitudes:
            #   - id: ...
            # so it's +2.
            
            if parent_indent != -1:
                target_indent = parent_indent + 2
            else:
                target_indent = 0 # Root list?
            
            val = m_item.group(2).strip()
            if indent != target_indent:
                new_lines.append(f"{' '*target_indent}- {val}\n")
                modified = True
                # A list item doesn't usually change the key stack for subsequent sibling items,
                # but it DOES set the level for its own children.
                # Let's push a virtual level for the item content.
                stack.append((target_indent, "item"))
            else:
                new_lines.append(line)
                stack.append((indent, "item"))
        else:
            # Scalar line or continued string
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
                if ultimate_yaml_indenter(path):
                    count += 1
                    print(f"Ultimate Indented: {path}")

    print(f"\nDone. Ultimate Indented {count} YAML files.")
