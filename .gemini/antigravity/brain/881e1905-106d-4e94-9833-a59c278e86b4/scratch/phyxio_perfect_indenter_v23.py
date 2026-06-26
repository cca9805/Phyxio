import os
import re

def phyxio_perfect_indenter_v23(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    file_name = os.path.basename(file_path)
    
    # Root keys (column 0)
    root_keys_base = ["version", "id", "leaf_id", "area", "bloque", "subbloque", "parent_id", "ruta_relativa", "orden", "type", "niveles", "icon", "description_en", "pregunta_fisica_central", "representacion_dominante", "magnitud_dominante", "tags", "prerequisitos", "graficos", "dificultad", "tiempo_estimado_min", "interpretacion", "magnitudes", "formulas", "topic", "variables", "config", "steps", "ui"]
    
    if file_name == "meta.yaml":
        root_keys_base += ["nombre", "descripcion", "physical_role"]
    elif file_name == "interpretacion.yaml":
        root_keys_base += ["nombre", "descripcion"]
        
    stack = [( -2, "root")] # Start with -2 so root at 0 is parent + 2
    
    for i in range(len(lines)):
        line = lines[i]
        stripped = line.strip()
        if not stripped:
            new_lines.append(line)
            continue
            
        m_key = re.match(r'^(\s*)(\w+):\s*(.*)$', line)
        if m_key:
            indent = len(m_key.group(1))
            key = m_key.group(2)
            rest = m_key.group(3).strip()
            
            if key in root_keys_base and (indent == 0 or file_name in ["meta.yaml", "interpretacion.yaml", "formulas.yaml"]):
                if indent == 0:
                    new_lines.append(f"{key}: {rest}\n")
                    modified = True
                    stack = [(0, key)]
                    continue

            # RELATIVE INDENTATION LOGIC
            # We use the ORIGINAL indentation to decide when to pop the stack
            while len(stack) > 1 and indent <= stack[-1][0]:
                stack.pop()
            
            parent_indent, parent_key = stack[-1]
            target = parent_indent + 2
            
            # Bilingual parity logic
            if key in ["es", "en"]:
                target = parent_indent + 2 # es/en are always children of their block parent
            
            new_lines.append(f"{' '*target}{key}: {rest}\n")
            modified = True
            
            # Update stack ONLY if this key has NO value (it's a block parent)
            if not rest:
                stack.append((target, key))
            continue
            
        m_id = re.match(r'^(\s*)-\s*id:\s*(.*)$', line)
        if m_id:
            indent = len(m_id.group(1))
            val = m_id.group(2).strip()
            while len(stack) > 1 and indent <= stack[-1][0]:
                stack.pop()
            parent_indent, parent_key = stack[-1]
            target = parent_indent + 2
            new_lines.append(f"{' '*target}- id: {val}\n")
            modified = True
            stack.append((target, "item"))
            continue
            
        m_list_item = re.match(r'^(\s*)-\s*(.*)$', line)
        if m_list_item:
            indent = len(m_list_item.group(1))
            val = m_list_item.group(2).strip()
            while len(stack) > 1 and indent <= stack[-1][0]:
                stack.pop()
            parent_indent, parent_key = stack[-1]
            target = parent_indent + 2
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
            if file.endswith((".yaml")):
                path = os.path.join(root, file)
                if phyxio_perfect_indenter_v23(path):
                    count += 1
                    print(f"Perfect Indented V23: {path}")

    print(f"\nDone. Fixed {count} YAML files.")
