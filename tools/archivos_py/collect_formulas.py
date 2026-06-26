
import os
import yaml

base_path = r"c:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica"
output_file = r"c:\Users\USER\Desktop\Phyxio\docsV2\formulas-mecanica.md"

def get_yaml_content(path):
    if not os.path.exists(path):
        return None
    with open(path, 'r', encoding='utf-8') as f:
        try:
            return yaml.safe_load(f)
        except Exception:
            return None

def get_subblock_title(path):
    overview_path = os.path.join(path, 'overview.md')
    if os.path.exists(overview_path):
        with open(overview_path, 'r', encoding='utf-8') as f:
            first_line = f.readline()
            if first_line.startswith('#'):
                return first_line.replace('#', '').strip()
    return os.path.basename(path).replace('-', ' ').capitalize()

def get_leaf_title(meta):
    # Try titulo first, then nombre
    for key in ['titulo', 'nombre']:
        title = meta.get(key)
        if title:
            if isinstance(title, dict):
                return title.get('es', list(title.values())[0])
            return str(title)
    return ""

results = []

# List all subblocks
for subblock_dir in sorted(os.listdir(base_path)):
    subblock_path = os.path.join(base_path, subblock_dir)
    if not os.path.isdir(subblock_path):
        continue
    
    subblock_title = get_subblock_title(subblock_path)
    
    # List all leaves
    for leaf_dir in sorted(os.listdir(subblock_path)):
        leaf_path = os.path.join(subblock_path, leaf_dir)
        if not os.path.isdir(leaf_path):
            continue
        
        meta_path = os.path.join(leaf_path, 'meta.yaml')
        formulas_path = os.path.join(leaf_path, 'formulas.yaml')
        
        meta = get_yaml_content(meta_path)
        formulas_data = get_yaml_content(formulas_path)
        
        if meta and formulas_data:
            leaf_title = get_leaf_title(meta)
            if not leaf_title:
                leaf_title = leaf_dir.replace('-', ' ').capitalize()
            
            formulas = formulas_data.get('formulas', [])
            for f in formulas:
                name_data = f.get('title', {})
                if isinstance(name_data, dict):
                    formula_name = name_data.get('es', f.get('id', ''))
                else:
                    formula_name = str(name_data) if name_data else f.get('id', '')
                
                equation = f.get('latex', f.get('equation', ''))
                equation = str(equation).replace('\\\\', '\\')
                
                results.append({
                    'area': 'fisica-clasica',
                    'bloque': 'mecanica',
                    'subbloque': subblock_title,
                    'leaf': leaf_title,
                    'nombre': formula_name,
                    'ecuacion': f"${equation}$"
                })

# Create markdown table
md_content = "# Inventario de Fórmulas: Mecánica\n\n"
md_content += "Este documento contiene todas las fórmulas registradas en el bloque de mecánica.\n\n"
md_content += "| Área | Bloque | Subbloque | Leaf | Nombre de la Fórmula | Ecuación |\n"
md_content += "|:---|:---|:---|:---|:---|:---|\n"

for r in results:
    md_content += f"| {r['area']} | {r['bloque']} | {r['subbloque']} | {r['leaf']} | {r['nombre']} | {r['ecuacion']} |\n"

os.makedirs(os.path.dirname(output_file), exist_ok=True)
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(md_content)

print(f"File generated at {output_file}")
