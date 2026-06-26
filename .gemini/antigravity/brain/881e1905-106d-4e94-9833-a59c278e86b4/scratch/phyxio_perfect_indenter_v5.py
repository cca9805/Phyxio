import os
import re

def phyxio_perfect_indenter_v5(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    file_name = os.path.basename(file_path)
    
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
        "expr": 8, "message": 8, "channels": 8, "es": -1, "en": -1, "descripcion": 4,
        "archivo": 2, "enabled": 2, "ui": 2, "inline_calculator": 4, "inline_graph": 4,
        "dedicated_tab": 4, "tab_label": 4, "mini_graph": 2, "preferred_type": 4,
        "output_policy": 2, "max_inline_messages": 4, "show_warnings": 4,
        "show_likely_errors": 4, "dependencies": 2, "requires_formulas": 4,
        "requires_magnitudes": 4, "supports_graph_binding": 4, "show_summary_first": 4,
        "physical_role": 4
    }
    
    current_parent = ""
    
    for line in lines:
        stripped = line.strip()
        if not stripped:
            new_lines.append(line)
            continue
            
        m_key = re.match(r'^(\s*)(\w+):\s*(.*)$', line)
        if m_key:
            indent = len(m_key.group(1))
            key = m_key.group(2)
            rest = m_key.group(3).strip()
            
            # Root keys only at column 0 in meta.yaml or if they are version/magnitudes/formulas
            absolute_root_keys = ["version", "area", "bloque", "subbloque", "parent_id", "ruta_relativa", "orden", "type", "niveles", "icon", "description_en", "pregunta_fisica_central", "representacion_dominante", "magnitud_dominante", "tags", "prerequisitos", "graficos", "dificultad", "tiempo_estimado_min", "interpretacion", "magnitudes", "formulas", "topic", "variables"]
            
            if file_name == "meta.yaml":
                absolute_root_keys += ["id", "nombre", "descripcion", "physical_role"]
            
            if key in absolute_root_keys:
                new_lines.append(f"{key}: {rest}\n")
                modified = True
                current_parent = key
                continue
            
            if key in h:
                target = h[key]
                if target == -1: # es/en
                    if current_parent in ["meaning", "sign_meaning", "absolute_value_meaning"]: target = 8
                    elif current_parent in ["message"]: target = 10
                    elif current_parent in ["tab_label", "title", "nombre", "descripcion", "physical_meaning", "validity", "pedagogical_triggers", "common_mistake", "typical_range"]:
                        if file_name == "meta.yaml" and current_parent in ["nombre", "descripcion", "physical_role"]:
                            target = 2
                        else:
                            target = 6
                    else: target = 6
                
                new_lines.append(f"{' '*target}{key}: {rest}\n")
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
            
        m_list_item = re.match(r'^(\s*)-\s*(.*)$', line)
        if m_list_item:
            val = m_list_item.group(2).strip()
            if val.startswith("target:"):
                new_lines.append(f"      - {val}\n")
                current_parent = "target"
            elif val.startswith("expr:"):
                new_lines.append(f"      - {val}\n")
                current_parent = "expr"
            else:
                target = 6
                if file_name == "meta.yaml" and current_parent in ["niveles", "tags", "prerequisitos", "graficos"]: target = 4
                if current_parent in ["primary_for", "secondary_for"]: target = 8
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
                if phyxio_perfect_indenter_v5(path):
                    count += 1
                    print(f"Perfect Indented V5: {path}")

    print(f"\nDone. Fixed {count} YAML files.")
