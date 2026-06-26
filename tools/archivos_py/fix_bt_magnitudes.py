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

# Pattern: backtick span containing [[id]]
BT_MAG_PATTERN = re.compile(r'`([^`]*\[\[[^\]]+\]\][^`]*)`')

total = 0
for leaf in LEAVES:
    for md in leaf.glob('*.md'):
        text = md.read_text(encoding='utf-8')
        new_text = BT_MAG_PATTERN.sub(lambda m: m.group(1), text)
        if new_text != text:
            md.write_text(new_text, encoding='utf-8')
            print(f'FIXED: {md.name} in {leaf.name}')
            total += 1

print(f'\nTotal files fixed: {total}')
