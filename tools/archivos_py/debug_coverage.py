"""Debug coverage check for R_on."""
import sys
sys.path.insert(0, 'tools')
from pathlib import Path
from phyxio_leaf_validator import load_yaml, _text_contains_token, _collect_magnitude_entries, _safe_yaml_list

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/interruptores')

formulas = _safe_yaml_list(load_yaml(base / 'formulas.yaml'))
formula_blob = " ".join(
    f"{f.get('id', '')} {f.get('target', '')} {f.get('latex', '')}"
    for f in formulas
)
print("formula_blob (first 500):", formula_blob[:500])
print()

mags = _collect_magnitude_entries(base / 'magnitudes.yaml')
for m in mags:
    mag_id = m.get("id", "")
    symbol = m.get("symbol", "")
    found_id = _text_contains_token(formula_blob, mag_id) if mag_id else False
    found_sym = _text_contains_token(formula_blob, symbol) if symbol else False
    connected = found_id or found_sym
    if not connected:
        print(f"ORPHAN: id={mag_id}, symbol={symbol}")
    else:
        print(f"OK: id={mag_id}, symbol={symbol}")
