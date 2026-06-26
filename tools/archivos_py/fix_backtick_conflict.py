"""
fix_backtick_conflict.py - Quita backticks de líneas donde hay tanto `x` como [[id]]
porque el validador cruza los spans de backtick con los [[id]] adyacentes.
"""
import re
from pathlib import Path

BASE = Path('frontend/src/data_v2_i18n/fisica-clasica/mecanica')
LEAVES = [
    BASE / 'cinematica/movimiento-rectilineo/mru',
    BASE / 'cinematica/movimiento-rectilineo/mrua',
    BASE / 'cinematica/movimiento-rectilineo/movimiento-vertical-bajo-gravedad',
    BASE / 'cinematica/movimiento-en-dos-dimensiones/tiro-horizontal',
    BASE / 'cinematica/movimiento-en-dos-dimensiones/tiro-parabolico',
    BASE / 'cinematica/movimiento-circular/mcua',
    BASE / 'cinematica/movimiento-relativo/encuentros-y-persecuciones',
    BASE / 'cinematica/movimiento-relativo/sistemas-referencia',
    BASE / 'rotacion/fundamentos/cinematica-rotacional',
]

# Pattern that triggers the validator: backtick span followed somewhere by [[id]]
TRIGGER = re.compile(r'`.*?\[\[.*?\]\].*?`')
# Remove all inline backtick spans (single backtick, not code blocks)
BACKTICK_SPAN = re.compile(r'`([^`]+)`')

total = 0
for leaf in LEAVES:
    for md in leaf.glob('*.md'):
        text = md.read_text(encoding='utf-8')
        lines = text.split('\n')
        new_lines = []
        changed = False
        for line in lines:
            if TRIGGER.search(line):
                # Remove all single-backtick spans on this line
                new_line = BACKTICK_SPAN.sub(r'\1', line)
                if new_line != line:
                    changed = True
                    line = new_line
            new_lines.append(line)
        if changed:
            new_text = '\n'.join(new_lines)
            md.write_text(new_text, encoding='utf-8')
            print(f'FIXED: {md.name} in {leaf.name}')
            total += 1

print(f'\nTotal files fixed: {total}')
