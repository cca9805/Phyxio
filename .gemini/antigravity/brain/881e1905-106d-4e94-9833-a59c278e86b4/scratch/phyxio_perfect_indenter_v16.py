import os
import re

def phyxio_perfect_indenter_v16(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    file_name = os.path.basename(file_path)
    
    # Root keys (column 0)
    root_keys_base = ["version", "area", "bloque", "subbloque", "parent_id", "ruta_relativa", "orden", "type", "niveles", "icon", "description_en", "pregunta_fisica_central", "representacion_dominante", "magnitud_dominante", "tags", "prerequisitos", "graficos", "dificultad", "tiempo_estimado_min", "interpretacion", "magnitudes", "formulas", "topic", "variables", "config", "steps"]
    
    if file_name == "meta.yaml":
        root_keys_base += ["id", "nombre", "descripcion", "physical_role"]
    elif file_name == "formulas.yaml":
        root_keys_base += ["ui"]
    elif file_name == "interpretacion.yaml":
        root_keys_base += ["id", "nombre", "descripcion"]
    elif file_name == "magnitudes.yaml":
        root_keys_base += ["id"]
        
    h = {
        "id": -3, "symbol": 4, "nombre": 4, "title": -3, "equation": 4, "latex": 4, 
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
        "expr": 8, "message": 8, "channels": 8, "es": -1, "en": -1, "descripcion": 4,
        "archivo": 2, "enabled": -2, "ui": 2, "inline_calculator": 4, "inline_graph": 4,
        "dedicated_tab": 4, "tab_label": 4, "mini_graph": 2, "preferred_type": 4,
        "output_policy": 2, "max_inline_messages": 4, "show_warnings": 4,
        "show_likely_errors": 4, "dependencies": 2, "requires_formulas": 4,
        "requires_magnitudes": 4, "supports_graph_binding": 4, "show_summary_first": 4,
        "physical_role": 4, "default_formula": 2, "groups": 2, "items": 4
    }
    
    stack = [( -1, "root")]
    
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
            
            if key in root_keys_base:
                new_lines.append(f"{key}: {rest}\n")
                modified = True
                stack = [(0, key)]
                continue
            
            if key in h:
                parent_key = "root"
                for s_indent, s_key in reversed(stack):
                    if s_key not in ["es", "en", "id", "title"]:
                        parent_key = s_key
                        break
                
                target = h[key]
                if target == -1: # es/en
                    if parent_key in ["meaning", "sign_meaning", "absolute_value_meaning"]: target = 8
                    elif parent_key in ["message"]: target = 10
                    elif parent_key in ["tab_label", "title", "nombre", "descripcion", "physical_meaning", "validity", "pedagogical_triggers", "common_mistake", "typical_range", "niveles", "tags"]:
                        if file_name == "meta.yaml" and parent_key in ["nombre", "descripcion", "physical_role", "niveles", "tags"]: target = 2
                        elif file_name == "interpretacion.yaml" and parent_key in ["nombre", "descripcion"]: target = 2
                        elif parent_key == "topic": target = 4 
                        else: target = 6
                    elif parent_key in ["groups"]: target = 6
                    else: target = 6
                elif target == -2: # enabled
                    if parent_key == "mini_graph": target = 4
                    else: target = 2
                elif target == -3: # id or title
                    if parent_key == "topic": target = 2
                    else: target = 4
                
                new_lines.append(f"{' '*target}{key}: {rest}\n")
                modified = True
                if key not in ["es", "en", "id", "title"]: 
                    while stack and target <= stack[-1][0] and stack[-1][0] != -1:
                        stack.pop()
                    stack.append((target, key))
                continue
            
        m_id = re.match(r'^(\s*)-\s*id:\s*(.*)$', line)
        if m_id:
            val = m_id.group(2).strip()
            new_lines.append(f"  - id: {val}\n")
            modified = True
            p_key = "root"
            for si, sk in reversed(stack):
                if sk in ["magnitudes", "formulas", "variables", "steps"]:
                    p_key = sk
                    break
            stack = [(0, p_key), (2, "item")]
            continue
            
        m_list_item = re.match(r'^(\s*)-\s*(.*)$', line)
        if m_list_item:
            val = m_list_item.group(2).strip()
            parent_key = "root"
            for s_indent, s_key in reversed(stack):
                if s_key not in ["es", "en", "item", "id", "title"]:
                    parent_key = s_key
                    break
            target = 6
            if file_name == "meta.yaml" and parent_key in ["niveles", "tags"]: target = 4
            elif file_name == "meta.yaml" and parent_key in ["prerequisitos", "graficos"]: target = 2
            elif parent_key in ["primary_for", "secondary_for"]: target = 8
            elif parent_key == "groups": target = 4
            elif parent_key == "items": target = 6
            elif parent_key == "steps": target = 2
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
                if phyxio_perfect_indenter_v16(path):
                    count += 1
                    print(f"Perfect Indented V16: {path}")

    print(f"\nDone. Fixed {count} YAML files.")
