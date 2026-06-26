import os
import re

def fix_meta_interpretacion_final(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    in_interpretacion = False
    in_ui = False
    in_mini_graph = False
    in_output_policy = False
    in_dependencies = False
    
    root_keys = ["version", "id", "nombre", "area", "bloque", "subbloque", "parent_id", "ruta_relativa", "orden", "type", "niveles", "icon", "descripcion", "description_en", "pregunta_fisica_central", "representacion_dominante", "magnitud_dominante", "tags", "prerequisitos", "graficos", "dificultad", "tiempo_estimado_min", "interpretacion"]
    
    for line in lines:
        stripped = line.strip()
        if not stripped:
            new_lines.append(line)
            continue
            
        m_root = re.match(r'^(\w+):\s*(.*)$', line)
        if m_root:
            key = m_root.group(1)
            rest = m_root.group(2).strip()
            if key in root_keys:
                new_lines.append(f"{key}: {rest}\n")
                if key == "interpretacion":
                    in_interpretacion = True
                else:
                    in_interpretacion = False
                in_ui = False
                in_mini_graph = False
                in_output_policy = False
                in_dependencies = False
                continue
        
        if in_interpretacion:
            m_key = re.match(r'^(\s*)(\w+):\s*(.*)$', line)
            if m_key:
                key = m_key.group(2)
                rest = m_key.group(3).strip()
                
                # Level 1 children of interpretacion (indent 2)
                l1 = ["enabled", "archivo", "ui", "mini_graph", "output_policy", "dependencies"]
                if key in l1:
                    new_lines.append(f"  {key}: {rest}\n")
                    modified = True
                    in_ui = (key == "ui")
                    in_mini_graph = (key == "mini_graph")
                    in_output_policy = (key == "output_policy")
                    in_dependencies = (key == "dependencies")
                    continue
                
                # Level 2 children
                if in_ui:
                    l2_ui = ["inline_calculator", "inline_graph", "dedicated_tab", "tab_label"]
                    if key in l2_ui:
                        new_lines.append(f"    {key}: {rest}\n")
                        modified = True
                        continue
                if in_mini_graph:
                    l2_mg = ["enabled", "preferred_type"]
                    if key in l2_mg:
                        new_lines.append(f"    {key}: {rest}\n")
                        modified = True
                        continue
                if in_output_policy:
                    l2_op = ["show_summary_first", "max_inline_messages", "show_warnings", "show_likely_errors"]
                    if key in l2_op:
                        new_lines.append(f"    {key}: {rest}\n")
                        modified = True
                        continue
                if in_dependencies:
                    l2_dp = ["requires_formulas", "requires_magnitudes", "supports_graph_binding"]
                    if key in l2_dp:
                        new_lines.append(f"    {key}: {rest}\n")
                        modified = True
                        continue
                
                # Bilingual children of Level 2
                if key in ["es", "en"]:
                    new_lines.append(f"      {key}: {rest}\n")
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
            if file.endswith("meta.yaml"):
                path = os.path.join(root, file)
                if fix_meta_interpretacion_final(path):
                    count += 1
                    print(f"Fixed Meta Interp Final: {path}")

    print(f"\nDone. Fixed {count} meta.yaml files.")
