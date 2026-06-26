"""Detect all inline math that may cause issues in teoria files"""
import re

BASE = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/magnitudes-cinematicas'

MARKERS = ['=', r'\approx', r'\propto', r'\to', r'\geq', r'\leq', r'\ll', r'\gg', 
           r'\ne', r'\equiv', r'\sim', r'\pm', r'\cdot', r'\times', r'\div', '^', '_', '+', '-', '*', '/']

for fn in ['teoria.md', 'teoria.en.md']:
    lines = open(f'{BASE}/{fn}', encoding='utf-8').readlines()
    print(f'=== {fn}: inline math issues ===')
    for i, line in enumerate(lines, 1):
        for m in re.findall(r'\$([^$\n]+)\$', line):
            stripped = m.strip()
            if len(stripped) >= 4 and any(mk in stripped for mk in MARKERS):
                is_dim = '[' in stripped and ']' in stripped and any(c in stripped for c in 'MLT')
                if not is_dim:
                    print(f'L{i}: ${stripped[:70]}$')
    print()

# Also check for [[id]] that don't exist in magnitudes
print('=== Checking for invalid [[id]] refs ===')
import yaml
mag_ids = {m['id'] for m in yaml.safe_load(open(f'{BASE}/magnitudes.yaml', encoding='utf-8'))['magnitudes']}
print('Valid mag IDs:', sorted(mag_ids))
for fn in ['teoria.md', 'teoria.en.md', 'ejemplos.md', 'ejemplos.en.md', 'aplicaciones.md', 'aplicaciones.en.md']:
    text = open(f'{BASE}/{fn}', encoding='utf-8').read()
    for m in re.findall(r'\[\[([a-z_]+)\]\]', text):
        if m not in mag_ids:
            print(f'{fn}: [[{m}]] NOT in magnitudes.yaml')
