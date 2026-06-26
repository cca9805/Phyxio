import sys; sys.path.insert(0, 'tools')
from phyxio_leaf_validator import (
    _collect_magnitude_entries, _collect_formula_entries,
    _rank_core_magnitudes, _rank_core_formulas, _entry_present_in_text,
    read_text
)
from pathlib import Path

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/coste-de-la-electricidad')

mags = _collect_magnitude_entries(base / 'magnitudes.yaml')
print('mag entries (first 3):', mags[:3])
print('total mag entries:', len(mags))

forms = _collect_formula_entries(base / 'formulas.yaml')
print('formula entries (ids):', [f.get('id') for f in forms])

core_mags = _rank_core_magnitudes(mags, forms)
print('\ncore_magnitudes:', [(m.get('id'), m.get('symbol')) for m in core_mags])

core_forms = _rank_core_formulas(forms)
print('core_formulas:', [f.get('id') for f in core_forms])

# Check each core mag in ejemplos.md
ejemplos_text = read_text(base / 'ejemplos.md')
for m in core_mags:
    present = _entry_present_in_text(m, ejemplos_text)
    print(f"  mag {m.get('id')} in ejemplos.md: {present}")
