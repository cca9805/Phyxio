import yaml
import os

def load_yaml(filepath):
    if not os.path.exists(filepath):
        return None
    with open(filepath, 'r', encoding='utf-8') as f:
        return yaml.safe_load(f)

# The user mentioned "ejemplos-aplicados" as the leaf. 
# Based on previous search, it looks like it's in data_v2_i18n or antiguo_data_v2.
# We'll use the one in data_v2_i18n as it's more likely current.
base_path = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica-fluidos\hidrostatica\ejemplos-aplicados"

formulas_path = os.path.join(base_path, "formulas.yaml")
magnitudes_path = os.path.join(base_path, "magnitudes.yaml")
interpretacion_path = os.path.join(base_path, "interpretacion.yaml")

formulas_data = load_yaml(formulas_path)
magnitudes_data = load_yaml(magnitudes_path)
interpretacion_data = load_yaml(interpretacion_path)

if formulas_data is not None and magnitudes_data is not None and interpretacion_data is not None:
    # Gather magnitude IDs
    magnitude_ids = {m['id'] for m in magnitudes_data}
    
    # Gather formula IDs and targets
    formula_ids = {f['id'] for f in formulas_data}
    formula_targets = {f['target'] for f in formulas_data if 'target' in f}
    
    # 1) targets de formulas.yaml que NO existen en magnitudes.yaml
    targets_not_in_magnitudes = sorted(list(formula_targets - magnitude_ids))
    
    # Analyze interpretation.yaml
    formula_refs_in_interp = set()
    magnitude_refs_in_interp = set()
    
    for item in interpretacion_data:
        if 'formulas' in item and item['formulas']:
            formula_refs_in_interp.update(item['formulas'])
        if 'magnitudes' in item and item['magnitudes']:
            magnitude_refs_in_interp.update(item['magnitudes'])

    # 2) ids de fórmulas referenciados en interpretacion.yaml que NO existen en formulas.yaml
    formulas_missing_in_interp = sorted(list(formula_refs_in_interp - formula_ids))
    
    # 3) ids de magnitudes referenciados en interpretacion.yaml que NO existen en magnitudes.yaml
    magnitudes_missing_in_interp = sorted(list(magnitude_refs_in_interp - magnitude_ids))

    print("1) Targets en formulas.yaml inexistentes en magnitudes.yaml:")
    print(targets_not_in_magnitudes)
    print("\n2) IDs de fórmulas en interpretacion.yaml inexistentes en formulas.yaml:")
    print(formulas_missing_in_interp)
    print("\n3) IDs de magnitudes en interpretacion.yaml inexistentes en magnitudes.yaml:")
    print(magnitudes_missing_in_interp)
else:
    print(f"Error: One or more files not found in {base_path}")
