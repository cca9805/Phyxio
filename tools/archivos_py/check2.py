import sys; sys.path.insert(0, 'tools')
from phyxio_leaf_validator import read_text, find_render_math_risks, count_words, THEORY_SECTIONS, analyze_required_heading_structure
from pathlib import Path
base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/coste-de-la-electricidad')

for f in ['ejemplos.md', 'ejemplos.en.md', 'errores.md', 'errores.en.md']:
    t = read_text(base / f)
    risks = find_render_math_risks(t)
    if risks:
        print(f'{f} render risks: {risks[:5]}')

# teoria order
t = read_text(base / 'teoria.md')
a = analyze_required_heading_structure(t, THEORY_SECTIONS)
print('teoria.md order_issues:', a['order_issues'])
print('teoria.md words:', count_words(t))
