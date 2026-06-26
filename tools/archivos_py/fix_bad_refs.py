"""
fix_bad_refs.py - Corrige references incorrectas introducidas en el paso anterior.
- [[formula_id]] → {{f:formula_id}} (no son magnitudes, son fórmulas)
- equation field de velocidad_relativa_marco: quita referencia variable no definida
"""
import re
from pathlib import Path

BASE = Path('frontend/src/data_v2_i18n/fisica-clasica/mecanica')

# (file_path, old_string, new_string)
FIXES = [
    # mru ejemplos.md
    (BASE / 'cinematica/movimiento-rectilineo/mru/ejemplos.md',
     '[[mru_posicion]]', '{{f:mru_posicion}}'),
    # mru ejemplos.en.md
    (BASE / 'cinematica/movimiento-rectilineo/mru/ejemplos.en.md',
     '[[mru_posicion]]', '{{f:mru_posicion}}'),
    # mrua ejemplos.md
    (BASE / 'cinematica/movimiento-rectilineo/mrua/ejemplos.md',
     '[[mrua_velocidad]]', '{{f:mrua_velocidad}}'),
    (BASE / 'cinematica/movimiento-rectilineo/mrua/ejemplos.md',
     '[[mrua_posicion]]', '{{f:mrua_posicion}}'),
    (BASE / 'cinematica/movimiento-rectilineo/mrua/ejemplos.md',
     '[[mrua_torricelli]]', '{{f:mrua_torricelli}}'),
    # mrua ejemplos.en.md
    (BASE / 'cinematica/movimiento-rectilineo/mrua/ejemplos.en.md',
     '[[mrua_velocidad]]', '{{f:mrua_velocidad}}'),
    (BASE / 'cinematica/movimiento-rectilineo/mrua/ejemplos.en.md',
     '[[mrua_posicion]]', '{{f:mrua_posicion}}'),
    (BASE / 'cinematica/movimiento-rectilineo/mrua/ejemplos.en.md',
     '[[mrua_torricelli]]', '{{f:mrua_torricelli}}'),
    # mvbg ejemplos.en.md
    (BASE / 'cinematica/movimiento-rectilineo/movimiento-vertical-bajo-gravedad/ejemplos.en.md',
     '[[caida_libre_tiempo_vuelo]]', '{{f:caida_libre_tiempo_vuelo}}'),
    # tiro-h ejemplos.en.md
    (BASE / 'cinematica/movimiento-en-dos-dimensiones/tiro-horizontal/ejemplos.en.md',
     '[[th_alcance]]', '{{f:th_alcance}}'),
]

for fpath, old, new in FIXES:
    if fpath.exists():
        text = fpath.read_text(encoding='utf-8')
        if old in text:
            text = text.replace(old, new)
            fpath.write_text(text, encoding='utf-8')
            print(f'FIXED: {old} → {new} in {fpath.name}')
    else:
        print(f'MISSING: {fpath}')

# Fix sis-ref: remove 'referencia' from velocidad_relativa_marco equation
sisref_form = BASE / 'cinematica/movimiento-relativo/sistemas-referencia/formulas.yaml'
if sisref_form.exists():
    text = sisref_form.read_text(encoding='utf-8')
    old = '  equation: v_frame = constante, frame_sigma = referencia\n  latex: "v_f = \\\\text{constante},\\\\quad \\\\mathrm{frame_sigma}"'
    new = '  equation: v_frame = constante\n  latex: "v_f = \\\\text{constante},\\\\quad \\\\mathrm{frame_sigma}"'
    if old in text:
        text = text.replace(old, new)
        sisref_form.write_text(text, encoding='utf-8')
        print('FIXED: sis-ref velocidad_relativa_marco equation')
    else:
        # Try simpler replacement
        old2 = 'equation: v_frame = constante, frame_sigma = referencia'
        new2 = 'equation: v_frame = constante'
        if old2 in text:
            text = text.replace(old2, new2)
            sisref_form.write_text(text, encoding='utf-8')
            print('FIXED: sis-ref velocidad_relativa_marco equation (simple)')
        else:
            print(f'WARNING: could not find sis-ref equation to fix')
            # Print context
            for l in text.split('\n'):
                if 'equation' in l and 'v_frame' in l:
                    print(f'  Found: {l!r}')

print('\nDone')
