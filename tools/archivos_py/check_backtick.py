"""Check backtick and word count issues"""
import re, sys
sys.stdout.reconfigure(encoding='utf-8')

BASE = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/magnitudes-cinematicas'

for fn in ['aplicaciones.md', 'aplicaciones.en.md', 'ejemplos.md', 'ejemplos.en.md']:
    lines = open(f'{BASE}/{fn}', encoding='utf-8').readlines()
    print(f'=== {fn}: backtick-mag lines ===')
    for i, l in enumerate(lines, 1):
        if re.search(r'`\[\[', l):
            print(f'L{i}: {l.rstrip()[:150]}')
    text = ''.join(lines)
    words = len(text.split())
    print(f'Word count: {words}')
    print()
