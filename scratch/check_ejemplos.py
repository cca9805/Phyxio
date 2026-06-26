import sys
sys.path.insert(0, '.')
from tools.validator_modular._core import EJEMPLOS_SECTIONS_ES, EJEMPLOS_SECTIONS_EN, analyze_required_heading_structure, read_text
from pathlib import Path

for fname, sections in [
    ('ejemplos.md', EJEMPLOS_SECTIONS_ES),
    ('ejemplos.en.md', EJEMPLOS_SECTIONS_EN),
]:
    path = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/ecuacion-de-onda-electromagnetica') / fname
    text = read_text(path)
    result = analyze_required_heading_structure(text, sections)
    print(f'\n=== {fname} ===')
    print('Missing:', result['missing'])
    print('Level issues:', result['level_issues'])
    print('Order issues:', result['order_issues'])
