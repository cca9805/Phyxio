
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

def get_leaf_title(meta):
    if not isinstance(meta, dict): return ""
    for key in ['titulo', 'nombre']:
        title = meta.get(key)
        if title:
            if isinstance(title, dict):
                return title.get('es', list(title.values())[0])
            return str(title)
    return ""

results = []

for root, dirs, files in os.walk(base_path):
    if 'formulas.yaml' in files and 'meta.yaml' in files:
        meta_path = os.path.join(root, 'meta.yaml')
        formulas_path = os.path.join(root, 'formulas.yaml')
        
        meta = get_yaml_content(meta_path)
        formulas_data = get_yaml_content(formulas_path)
        
        if meta and formulas_data:
            rel_path = os.path.relpath(root, base_path)
            path_parts = rel_path.split(os.sep)
            
            subblock_detail = " > ".join([p.replace('-', ' ').capitalize() for p in path_parts[:-1]])
            if not subblock_detail:
                subblock_detail = path_parts[0].replace('-', ' ').capitalize()
            
            leaf_title = get_leaf_title(meta)
            if not leaf_title:
                leaf_title = path_parts[-1].replace('-', ' ').capitalize()
            
            formulas = []
            if isinstance(formulas_data, dict):
                formulas = formulas_data.get('formulas', [])
            elif isinstance(formulas_data, list):
                formulas = formulas_data
            
            for f in formulas:
                if not isinstance(f, dict): continue
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
                    'subbloque': subblock_detail,
                    'leaf': leaf_title,
                    'nombre': formula_name,
                    'ecuacion': f"${equation}$"
                })

# Create markdown table
md_content = "# Inventario Completo de Fórmulas: Mecánica\n\n"
md_content += f"Este documento contiene **{len(results)}** fórmulas registradas en el bloque de mecánica.\n\n"
md_content += "| Área | Bloque | Subbloque | Leaf | Nombre de la Fórmula | Ecuación |\n"
md_content += "|:---|:---|:---|:---|:---|:---|\n"

for r in sorted(results, key=lambda x: (x['subbloque'], x['leaf'])):
    md_content += f"| {r['area']} | {r['bloque']} | {r['subbloque']} | {r['leaf']} | {r['nombre']} | {r['ecuacion']} |\n"

os.makedirs(os.path.dirname(output_file), exist_ok=True)
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(md_content)

print(f"File generated at {output_file}")
print(f"Total formulas found: {len(results)}")
