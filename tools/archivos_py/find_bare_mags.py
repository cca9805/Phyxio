# -*- coding: utf-8 -*-
import sys, re
sys.stdout.reconfigure(encoding='utf-8')
d = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica/magnitudes-cinematicas'

def strip_protected(text):
    FORMULA_RE = re.compile(r'\{\{f:([^}]+)\}\}')
    MAG_RE = re.compile(r'\[\[([^\]]+)\]\]')
    text = re.sub(r'```.*?```', ' ', text, flags=re.DOTALL)
    text = FORMULA_RE.sub(' ', text)
    text = MAG_RE.sub(' ', text)
    text = re.sub(r'\\\((?:\\.|[^\\])*?\\\)', ' ', text)
    text = re.sub(r'(?<!\\)\$(?:\\.|[^\$])*(?<!\\)\$', ' ', text)
    text = re.sub(r'\[[^\]]+\]\([^)]+\)', ' ', text)
    return text

MAGS = ['posicion_vectorial','posicion','desplazamiento','distancia','velocidad_media',
        'rapidez_media','aceleracion_media','cambio_velocidad','tiempo','intervalo_tiempo',
        'velocidad','rapidez','aceleracion']

for fn in ['teoria.md', 'teoria.en.md', 'ejemplos.md', 'ejemplos.en.md']:
    text = open(d+'/'+fn, encoding='utf-8').read()
    print(f'=== {fn} ===')
    for mid in MAGS:
        pat = re.compile(rf'(?<![A-Za-z_\]]){re.escape(mid)}(?![A-Za-z_\[0-9])')
        lines_found = []
        for lno, line in enumerate(text.splitlines(), 1):
            stripped_line = strip_protected(line)
            if pat.search(stripped_line):
                lines_found.append(f'  L{lno}: {repr(line)[:120]}')
        if lines_found:
            print(f'  BARE: {mid}')
            for lf in lines_found[:5]: print(lf)
    print()
