import re
import os
import glob

files = glob.glob(r'frontend/src/data_v2_i18n/fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/marco-del-centro-de-masas-en-colisiones/*.md')
ids = ['m1', 'm2', 'v1', 'v2', 'Vcm', 'u1', 'u2', 'mu', 'K_cm', 'p_cm_total', 'K_total', 'v_rel']

for path in files:
    text = open(path, encoding='utf-8').read()
    for lineno, line in enumerate(text.split('\n'), 1):
        for id in ids:
            if re.search(r'\b' + re.escape(id) + r'\b', line):
                if f'[[{id}]]' not in line and f'{{{{f:{id}}}}}' not in line:
                    print(f"{os.path.basename(path)} L{lineno}: {id} untagged in: {line.strip()}")
