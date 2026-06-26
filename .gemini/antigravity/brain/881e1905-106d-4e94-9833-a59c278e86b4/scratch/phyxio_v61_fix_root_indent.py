import os
import re

def fix_indentation(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    for line in lines:
        stripped = line.strip()
        if not stripped:
            new_lines.append(line)
            continue
            
        # Root keys must be at 0 indent
        root_keys = ["version", "id", "nombre", "titulo", "type", "area", "bloque", "subbloque", 
                     "parent_id", "ruta_relativa", "orden", "niveles", "icon", "descripcion", 
                     "description_en", "tags", "prerequisitos", "graficos", "physical_role", 
                     "dificultad", "tiempo_estimado_min", "pregunta_fisica_central", 
                     "interpretacion", "magnitudes", "formulas", "topic", "variables", "ui", "config",
                     "leaf_id", "scope", "dependencies", "output_contract", "result_blocks", "targets"]
        
        m = re.match(r'^(\s*)(\w+):\s*(.*)$', line)
        if m:
            key = m.group(2)
            rest = m.group(3)
            if key in root_keys:
                new_lines.append(f"{key}: {rest}\n")
                continue
        
        # Sibling keys (es, en) under nombre/descripcion etc.
        # This is harder without a stack.
        
        new_lines.append(line)

    with open(file_path, "w", encoding="utf-8") as f:
        f.writelines(new_lines)

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".yaml"):
                fix_indentation(os.path.join(root, file))
