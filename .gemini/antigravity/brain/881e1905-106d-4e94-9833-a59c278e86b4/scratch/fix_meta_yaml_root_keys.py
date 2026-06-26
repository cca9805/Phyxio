import os
import re

def fix_meta_yaml_root_keys(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    root_keys = [
        "version", "id", "nombre", "area", "bloque", "subbloque", "parent_id",
        "ruta_relativa", "orden", "type", "niveles", "icon", "descripcion",
        "description_en", "pregunta_fisica_central", "representacion_dominante",
        "magnitud_dominante", "physical_role", "tags", "prerequisitos",
        "graficos", "dificultad", "tiempo_estimado_min", "interpretacion"
    ]
    
    new_lines = []
    modified = False
    
    for line in lines:
        stripped = line.strip()
        if not stripped:
            new_lines.append(line)
            continue
            
        # Match a key at any indentation: ^(\s*)(\w+):
        m = re.match(r'^(\s*)(\w+):(.*)$', line)
        if m:
            indent = len(m.group(1))
            key = m.group(2)
            rest = m.group(3)
            
            if key in root_keys and indent > 0:
                new_lines.append(f"{key}:{rest}\n")
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
                if fix_meta_yaml_root_keys(path):
                    count += 1
                    print(f"Fixed Meta Root Keys: {path}")

    print(f"\nDone. Fixed {count} meta.yaml files.")
