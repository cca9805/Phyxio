import sys; sys.path.insert(0, 'tools')
from phyxio_leaf_validator import read_text, load_yaml, EJEMPLOS_SECTIONS_ES, EJEMPLOS_SECTIONS_EN, analyze_required_heading_structure
from pathlib import Path

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/coste-de-la-electricidad')

# Check empty sections
for fname, secs in [('ejemplos.md', EJEMPLOS_SECTIONS_ES), ('ejemplos.en.md', EJEMPLOS_SECTIONS_EN)]:
    t = read_text(base / fname)
    a = analyze_required_heading_structure(t, secs)
    print(f'\n{fname}')
    print('  missing:', a['missing'])
    print('  duplicates:', [d['section'] for d in a['duplicates']])
    print('  order_issues:', a['order_issues'])
    for sec in a.get('sections', []):
        if not sec.get('body', '').strip():
            print(f"  EMPTY SECTION: {sec['heading']}")

# Check example_semantics - what magnitudes are expected
mags = load_yaml(base / 'magnitudes.yaml')
if isinstance(mags, list):
    mag_ids = {m['id'] for m in mags if isinstance(m, dict) and 'id' in m}
elif isinstance(mags, dict):
    mag_ids = set(mags.keys())
print('\nmagnitudes IDs:', sorted(mag_ids))

# Check which mag IDs appear in ejemplos.md
import re
t = read_text(base / 'ejemplos.md')
found = re.findall(r'\[\[(?:[^\]|]+\|)?([^\]|]+)\]\]', t)
print('\nmag refs in ejemplos.md:', sorted(set(found)))
core_mags = [m for m in found if m in mag_ids]
print('core mags found:', sorted(set(core_mags)))
missing_core = mag_ids - set(found)
print('mag IDs NOT in ejemplos.md:', sorted(missing_core))
