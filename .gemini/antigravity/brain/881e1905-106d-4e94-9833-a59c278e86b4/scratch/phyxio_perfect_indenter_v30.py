import os
import re

def phyxio_perfect_indenter_v30(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    file_name = os.path.basename(file_path)
    
    # Absolute mapping of keys to their MANDATORY indentation in Phyxio v5
    depths = {
        "version": 0, "area": 0, "bloque": 0, "subbloque": 0, "parent_id": 0, 
        "ruta_relativa": 0, "orden": 0, "type": 0, "niveles": 0, "icon": 0, 
        "description_en": 0, "pregunta_fisica_central": 0, 
        "representacion_dominante": 0, "magnitud_dominante": 0, "tags": 0, 
        "prerequisitos": 0, "graficos": 0, "dificultad": 0, 
        "tiempo_estimado_min": 0, "interpretacion": 0, "magnitudes": 0, 
        "formulas": 0, "topic": 0, "variables": 0, "config": 0, "steps": 0,
        "leaf_id": 0, "id": -4, "nombre": -4, "descripcion": -4, 
        "physical_role": -4, "symbol": 4, "equation": 4, "latex": 4, 
        "rearrangements": 4, "category": 4, "relation_type": 4, 
        "physical_meaning": 4, "constraints": 4, "validity": 4, 
        "dimension_check": 4, "calculable": 4, "result_semantics": 4, 
        "domain_checks": 4, "coherence_checks": 4, "graph_implications": 4, 
        "pedagogical_triggers": 4, "unidad_si": 4, "dimension": 4,
        "is_vector": 4, "components": 4, "used_in": 4, "common_mistake": 4,
        "typical_range": 4, "sign_behavior": 4, "zero_behavior": 4,
        "value_nature": 4, "archivo": 2, "enabled": -5,
        "ui": -8, "inline_calculator": 4, "inline_graph": 4, "dedicated_tab": 4, 
        "tab_label": 4, "mini_graph": 2, "preferred_type": 4, "output_policy": 2,
        "max_inline_messages": 4, "max_messages": 2, "show_warnings": -6,
        "show_likely_errors": 4, "dependencies": 2, "requires_formulas": 4,
        "requires_magnitudes": 4, "supports_graph_binding": 4, 
        "show_summary_first": -6, "default_formula": 2, "groups": 2, "items": -7,
        "es": -1, "en": -1, "kind": 6, "nonnegative_only": 6, "expected_interval": 6,
        "target": 6, "sign_meaning": 6, "absolute_value_meaning": 6,
        "has_sign": 6, "meaning": 6, "allowed": 6, "primary_for": 6,
        "secondary_for": 6, "graph_binding": 6, "pedagogical_notes": 6,
        "expr": 8, "message": 8, "channels": 8
    }

    stack = [(-1, "root")]

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
            
            target = -100
            
            if key in depths:
                val = depths[key]
                if val >= 0: target = val
                elif val == -1: # es/en
                    p_idx = len(stack) - 1
                    while p_idx >= 0 and stack[p_idx][1] in ["es", "en"]: p_idx -= 1
                    target = stack[p_idx][0] + 2
                elif val == -4: # id/nombre/descripcion
                    if file_name == "meta.yaml": target = 0
                    elif file_name == "interpretacion.yaml": target = 0
                    elif file_name == "formulas.yaml":
                        if stack[-1][1] == "topic": target = 2
                        else: target = 4
                    else: target = 4
                elif val == -5: # enabled
                    if stack[-1][1] == "interpretacion": target = 2
                    elif stack[-1][1] == "mini_graph": target = 4
                    else: target = 2
                elif val == -6: # show_warnings / show_summary_first
                    if stack[-1][1] == "output_policy": target = 4
                    elif stack[-1][1] == "config": target = 2
                    else: target = 2
                elif val == -7: # items
                    if stack[-1][1] == "item": target = 6
                    else: target = 4
                elif val == -8: # ui
                    if file_name == "formulas.yaml": target = 0
                    elif stack[-1][1] == "interpretacion": target = 2
                    else: target = 0
            
            if target == -100:
                target = stack[-1][0] + 2
            
            new_lines.append(f"{' '*target}{key}: {rest}\n")
            modified = True
            
            if not rest:
                while len(stack) > 1 and target <= stack[-1][0]:
                    stack.pop()
                stack.append((target, key))
            continue
            
        m_id = re.match(r'^(\s*)-\s*id:\s*(.*)$', line)
        if m_id:
            val = m_id.group(2).strip()
            p_idx = len(stack) - 1
            while p_idx >= 0 and stack[p_idx][1] not in ["magnitudes", "formulas", "variables", "steps", "groups", "items"]:
                p_idx -= 1
            target = stack[p_idx][0] + 2
            new_lines.append(f"{' '*target}- id: {val}\n")
            modified = True
            while len(stack) > 1 and target <= stack[-1][0]:
                stack.pop()
            stack.append((target, "item"))
            continue
            
        m_list_item = re.match(r'^(\s*)-\s*(.*)$', line)
        if m_list_item:
            val = m_list_item.group(2).strip()
            target = stack[-1][0] + 2
            if val.startswith("title:"):
                new_lines.append(f"{' '*target}- title:\n")
                while len(stack) > 1 and target <= stack[-1][0]:
                    stack.pop()
                stack.append((target, "item"))
            else:
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
                if phyxio_perfect_indenter_v30(path):
                    count += 1
                    print(f"Perfect Indented V30: {path}")

    print(f"\nDone. Fixed {count} YAML files.")
