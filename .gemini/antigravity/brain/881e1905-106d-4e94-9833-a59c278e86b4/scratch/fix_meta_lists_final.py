import os
import re

def fix_meta_lists_final(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    i = 0
    while i < len(lines):
        line = lines[i]
        # Match: es: (indented 2 spaces)
        m_es = re.match(r'^  es:\s*$', line)
        if m_es:
            new_lines.append(line)
            i += 1
            # Check items and then en:
            while i < len(lines):
                # If next line is en: indented 4 spaces, fix it to 2
                m_en = re.match(r'^    en:\s*(.*)$', lines[i])
                if m_en:
                    val = m_en.group(1).strip()
                    new_lines.append(f"  en: {val}\n")
                    modified = True
                    i += 1
                elif re.match(r'^  (en|icon|descripcion|description_en|tags|prerequisitos|graficos|physical_role|dificultad|tiempo_estimado_min|representacion_dominante|magnitud_dominante|pregunta_fisica_central|interpretacion):', lines[i]):
                    # We hit the NEXT sibling at 2 spaces, stop searching for misplaced en:
                    break
                else:
                    new_lines.append(lines[i])
                    i += 1
            continue

        new_lines.append(line)
        i += 1

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
                if fix_meta_lists_final(path):
                    count += 1
                    print(f"Fixed Meta Final: {path}")

    print(f"\nDone. Fixed {count} meta.yaml files.")
