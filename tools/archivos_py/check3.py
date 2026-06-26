import sys; sys.path.insert(0, 'tools')
from phyxio_leaf_validator import read_text, count_words, THEORY_SECTIONS, analyze_required_heading_structure, find_markdown_math_render_issues, find_bare_formula_issues, _collect_formula_entries
from pathlib import Path
base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/coste-de-la-electricidad')

formula_ids = {entry.get("id", "") for entry in _collect_formula_entries(base / "formulas.yaml") if entry.get("id")}
print("formula_ids:", formula_ids)

for f in ['ejemplos.md', 'ejemplos.en.md', 'errores.md', 'errores.en.md']:
    t = read_text(base / f)
    issues = find_markdown_math_render_issues(t, formula_ids=formula_ids, max_hits=8)
    issues += find_bare_formula_issues(t, max_hits=4)
    if issues:
        print(f'\n{f} render issues:')
        for i in issues:
            print(' ', i)

# teoria order + words
t = read_text(base / 'teoria.md')
a = analyze_required_heading_structure(t, THEORY_SECTIONS)
print('\nteoría order_issues:', a['order_issues'])
print('teoria.md words:', count_words(t))

# aplicaciones: check for N. pattern
import re
for f in ['aplicaciones.md', 'aplicaciones.en.md']:
    t = read_text(base / f)
    nums = re.findall(r'^##\s+(\d+)\.\s+', t, re.MULTILINE)
    aplicacion_pattern = re.findall(r'^##\s+Aplicaci', t, re.MULTILINE | re.IGNORECASE)
    print(f'\n{f}: ## N. found={nums}, ## Aplicaci found={len(aplicacion_pattern)}')
