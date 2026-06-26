import os
import re

def fix_meta_interpretacion_final_v2(file_path):
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
                in_interpretacion = (key == "interpretacion")
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
                
                # Check children FIRST
                if in_ui and key in ["inline_calculator", "inline_graph", "dedicated_tab", "tab_label"]:
                    new_lines.append(f"    {key}: {rest}\n")
                    modified = True
                    continue
                if in_mini_graph and key in ["enabled", "preferred_type"]:
                    new_lines.append(f"    {key}: {rest}\n")
                    modified = True
                    continue
                if in_output_policy and key in ["show_summary_first", "max_inline_messages", "show_warnings", "show_likely_errors"]:
                    new_lines.append(f"    {key}: {rest}\n")
                    modified = True
                    continue
                if in_dependencies and key in ["requires_formulas", "requires_magnitudes", "supports_graph_binding"]:
                    new_lines.append(f"    {key}: {rest}\n")
                    modified = True
                    continue
                if key in ["es", "en"]:
                    new_lines.append(f"      {key}: {rest}\n")
                    modified = True
                    continue

                # Level 1 children (indented 2)
                l1 = ["enabled", "archivo", "ui", "mini_graph", "output_policy", "dependencies"]
                if key in l1:
                    new_lines.append(f"  {key}: {rest}\n")
                    modified = True
                    in_ui = (key == "ui")
                    in_mini_graph = (key == "mini_graph")
                    in_output_policy = (key == "output_policy")
                    in_dependencies = (key == "dependencies")
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
                if fix_meta_interpretacion_final_v2(path):
                    count += 1
                    print(f"Fixed Meta Interp Final V2: {path}")

    print(f"\nDone. Fixed {count} meta.yaml files.")
