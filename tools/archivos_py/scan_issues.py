import os, sys
sys.path.insert(0,'tools')
from phyxio_leaf_validator import THEORY_SECTIONS, THEORY_SECTIONS_EN

base = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/cantidad-de-movimiento'
groups = ['fundamentos','conservacion-momento-lineal/principio-de-conservacion','colisiones','centro-de-masas','momento-angular','sistemas-de-masa-variable']

for g in groups:
    gp = os.path.join(base, g)
    if not os.path.isdir(gp): continue
    for leaf in sorted(os.listdir(gp)):
        lp = os.path.join(gp, leaf)
        if not os.path.isdir(lp): continue
        for fname, secs in [('teoria.md', THEORY_SECTIONS), ('teoria.en.md', THEORY_SECTIONS_EN)]:
            fp = os.path.join(lp, fname)
            if not os.path.isfile(fp): continue
            text = open(fp,'r',encoding='utf-8').read()
            missing = [s for s in secs if s.lower() not in text.lower()]
            wc = len(text.split())
            issues = []
            if missing:
                issues.append('MISS:' + str(missing))
            if wc < 1200:
                issues.append('WORDS:' + str(wc))
            if issues:
                print(leaf + '/' + fname + ': ' + ' | '.join(issues))
