import yaml

mag_fields = [
    "id", "symbol", "name", "unit", "type", "dimension", "description",
    "sign_behavior", "zero_behavior", "value_nature", "interpretation_role",
    "graph_binding", "pedagogical_notes", "nivel"
]

try:
    with open('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/formulacion-diferencial/magnitudes.yaml', 'r', encoding='utf-8') as f:
        data = yaml.safe_load(f)

    for mag in data:
        if not isinstance(mag, dict):
            continue
        missing = [f for f in mag_fields if f not in mag]
        if missing:
            print(f"ID: {mag.get('id')} - Missing: {missing}")
        else:
            print(f"ID: {mag.get('id')} - OK")
except Exception as e:
    print(f"Error: {e}")
