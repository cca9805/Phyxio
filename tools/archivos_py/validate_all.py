import sys
sys.path.insert(0, 'tools')
import json
from pathlib import Path

BASE = Path('frontend/src/data_v2_i18n/fisica-clasica/mecanica')
leaves = {
    'mru': BASE / 'cinematica/movimiento-rectilineo/mru',
    'mrua': BASE / 'cinematica/movimiento-rectilineo/mrua',
    'mvbg': BASE / 'cinematica/movimiento-rectilineo/movimiento-vertical-bajo-gravedad',
    'tiro-h': BASE / 'cinematica/movimiento-en-dos-dimensiones/tiro-horizontal',
    'tiro-p': BASE / 'cinematica/movimiento-en-dos-dimensiones/tiro-parabolico',
    'mcua': BASE / 'cinematica/movimiento-circular/mcua',
    'encuentros': BASE / 'cinematica/movimiento-relativo/encuentros-y-persecuciones',
    'sis-ref': BASE / 'cinematica/movimiento-relativo/sistemas-referencia',
    'cine-rot': BASE / 'rotacion/fundamentos/cinematica-rotacional',
}

from phyxio_leaf_validator import validate_leaf
for name, path in leaves.items():
    result = validate_leaf(str(path))
    score = result.get('overall_score', 0)
    fails = [c for c in result.get('checks', []) if c.get('status') == 'fail']
    print(f'{name}: {score:.2f}/5  ({len(fails)} FAILs)')
    for f in fails:
        msg = f.get('description', f.get('name', '?'))
        print(f'  - FAIL: {msg[:80]}')
