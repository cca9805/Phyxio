import subprocess
import sys

leaves = [
    ("mru", "frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/movimiento-rectilineo/mru"),
    ("mrua", "frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/movimiento-rectilineo/mrua"),
    ("mvbg", "frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/movimiento-rectilineo/movimiento-vertical-bajo-gravedad"),
    ("tiro-h", "frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/movimiento-en-dos-dimensiones/tiro-horizontal"),
    ("tiro-p", "frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/movimiento-en-dos-dimensiones/tiro-parabolico"),
    ("mcua", "frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/movimiento-circular/mcua"),
    ("encuentros", "frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/movimiento-relativo/encuentros-y-persecuciones"),
    ("sis-ref", "frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/movimiento-relativo/sistemas-referencia"),
    ("cine-rot", "frontend/src/data_v2_i18n/fisica-clasica/mecanica/rotacion/fundamentos/cinematica-rotacional"),
]

for name, path in leaves:
    result = subprocess.run(
        [sys.executable, "tools/phyxio_leaf_validator.py", path],
        capture_output=True, text=True, encoding='utf-8', errors='replace'
    )
    output = result.stdout + result.stderr
    score_line = [l for l in output.splitlines() if 'overall_score' in l]
    fail_lines = [l.strip() for l in output.splitlines() if '- FAIL' in l]
    score = score_line[0].strip() if score_line else "?"
    print(f"\n{'='*50}")
    print(f"{name}: {score}")
    for f in fail_lines:
        print(f"  {f}")
