import sys; sys.path.insert(0, 'tools')
from phyxio_leaf_validator import EJEMPLOS_SECTIONS_ES, EJEMPLOS_SECTIONS_EN, read_text, analyze_required_heading_structure
from pathlib import Path
base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/coste-de-la-electricidad')
for fname, secs in [('ejemplos.md', EJEMPLOS_SECTIONS_ES), ('ejemplos.en.md', EJEMPLOS_SECTIONS_EN)]:
    t = read_text(base / fname)
    a = analyze_required_heading_structure(t, secs)
    print(fname, 'missing:', a['missing'])
    print(fname, 'duplicates:', [d['section'] for d in a['duplicates']])
