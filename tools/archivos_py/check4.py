import sys; sys.path.insert(0, 'tools')
from phyxio_leaf_validator import load_yaml, _collect_formula_entries
from pathlib import Path

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/coste-de-la-electricidad')
entries = _collect_formula_entries(base / 'formulas.yaml')
formula_targets = set()
for item in entries:
    rs = item.get('result_semantics', {})
    if isinstance(rs, dict):
        t = rs.get('target')
        if t:
            formula_targets.add(t)
    rearr = item.get('rearrangements', []) or []
    for r in rearr:
        if isinstance(r, dict):
            t = r.get('target')
            if t:
                formula_targets.add(t)

print('formula_targets:', sorted(formula_targets))

interp = load_yaml(base / 'interpretacion.yaml')
interp_targets = set(interp.get('targets', {}).keys())
print('interp_targets:', sorted(interp_targets))

missing = sorted(formula_targets - interp_targets)
print('missing in interpretacion.yaml.targets:', missing)

# Check example_semantics
from phyxio_leaf_validator import read_text, validate_example_semantics
t = read_text(base / 'ejemplos.md')
res = validate_example_semantics(base / 'ejemplos.md', base / 'magnitudes.yaml', base / 'formulas.yaml', lang='es')
for r in res:
    if not r.passed:
        print('FAIL ejemplo_semantics es:', r.label, '|', r.details)
