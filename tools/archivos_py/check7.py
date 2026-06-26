import sys; sys.path.insert(0, 'tools')
from phyxio_leaf_validator import (
    _collect_magnitude_entries, _collect_formula_entries,
    _rank_core_magnitudes, _rank_core_formulas, _entry_present_in_text,
    read_text, validate_example_semantics, validate_ejemplos
)
from pathlib import Path

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/coste-de-la-electricidad')

# example_semantics
res = validate_example_semantics(base / 'ejemplos.md', base / 'magnitudes.yaml', base / 'formulas.yaml', lang='es')
for r in res:
    status = 'OK' if r.ok else 'FAIL'
    print(f'{status}: {r.label}', '|', r.details if hasattr(r,'details') else '')

print('---')
res2 = validate_ejemplos(base / 'ejemplos.md', lang='es')
for r in res2:
    if not r.ok:
        print('FAIL ejemplos:', r.label, '|', r.details if hasattr(r,'details') else '')
