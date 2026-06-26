"""
fix_inline_formula_refs.py - Arregla {{f:id}} que están inline en texto de listas de verificación.
Los reemplaza por el nombre de la fórmula en prosa (sin wrapper).
"""
from pathlib import Path

BASE = Path('frontend/src/data_v2_i18n/fisica-clasica/mecanica')

# (file_path, old_string, new_string)
FIXES = [
    # mru ejemplos.md: línea 96 - {{f:mru_posicion}} inline
    (BASE / 'cinematica/movimiento-rectilineo/mru/ejemplos.md',
     '¿La ecuación {{f:mru_posicion}} se ha despejado correctamente y sin errores de signo?',
     '¿La ecuación de posición (mru_posicion) se ha despejado correctamente y sin errores de signo?'),
    # mru ejemplos.en.md
    (BASE / 'cinematica/movimiento-rectilineo/mru/ejemplos.en.md',
     '¿La ecuación {{f:mru_posicion}} se ha despejado correctamente y sin errores de signo?',
     '¿La ecuación de posición (mru_posicion) se ha despejado correctamente y sin errores de signo?'),
    (BASE / 'cinematica/movimiento-rectilineo/mru/ejemplos.en.md',
     'Has the equation {{f:mru_posicion}} been rearranged correctly without sign errors?',
     'Has the position equation (mru_posicion) been rearranged correctly without sign errors?'),
    # mrua ejemplos.md
    (BASE / 'cinematica/movimiento-rectilineo/mrua/ejemplos.md',
     '¿La ecuación {{f:mrua_velocidad}} o {{f:mrua_posicion}} es la adecuada para los datos disponibles?',
     '¿La ecuación mrua_velocidad o mrua_posicion es la adecuada para los datos disponibles?'),
    (BASE / 'cinematica/movimiento-rectilineo/mrua/ejemplos.md',
     'La ecuación {{f:mrua_torricelli}} es particularmente útil cuando el tiempo no está dado ni es buscado directamente.',
     'La ecuación mrua_torricelli es particularmente útil cuando el tiempo no está dado ni es buscado directamente.'),
    # mrua ejemplos.en.md
    (BASE / 'cinematica/movimiento-rectilineo/mrua/ejemplos.en.md',
     'Is the equation {{f:mrua_velocidad}} or {{f:mrua_posicion}} appropriate for the available data?',
     'Is the equation mrua_velocidad or mrua_posicion appropriate for the available data?'),
    (BASE / 'cinematica/movimiento-rectilineo/mrua/ejemplos.en.md',
     'the same core equations {{f:mrua_velocidad}}, {{f:mrua_posicion}}, and {{f:mrua_torricelli}}',
     'the same core equations mrua_velocidad, mrua_posicion, and mrua_torricelli'),
    # mvbg ejemplos.en.md
    (BASE / 'cinematica/movimiento-rectilineo/movimiento-vertical-bajo-gravedad/ejemplos.en.md',
     'Is {{f:caida_libre_tiempo_vuelo}} being applied with the correct measured time?',
     'Is caida_libre_tiempo_vuelo being applied with the correct measured time?'),
    # tiro-h ejemplos.en.md
    (BASE / 'cinematica/movimiento-en-dos-dimensiones/tiro-horizontal/ejemplos.en.md',
     'any time a horizontal projection must land at a precise location, you first determine the fall time from the height alone, then check whether the horizontal speed produces the required range.',
     'any time a horizontal projection must land at a precise location, you first determine the fall time from the height alone, then check whether the horizontal speed produces the required range with formula th_alcance.'),
    (BASE / 'cinematica/movimiento-en-dos-dimensiones/tiro-horizontal/ejemplos.en.md',
     'Understanding this real application of {{f:th_alcance}} gives',
     'Understanding this real application of the range formula (th_alcance) gives'),
]

total = 0
for fpath, old, new in FIXES:
    if fpath.exists():
        text = fpath.read_text(encoding='utf-8')
        if old in text:
            text = text.replace(old, new)
            fpath.write_text(text, encoding='utf-8')
            print(f'FIXED: {fpath.name}')
            total += 1
        else:
            print(f'NOT FOUND in {fpath.name}: {old[:60]!r}')
    else:
        print(f'MISSING: {fpath}')

print(f'\nTotal: {total}')
