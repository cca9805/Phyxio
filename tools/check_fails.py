import sys, os; sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))
from tools.validator_modular._core import validate_leaf
from pathlib import Path
import json

r = validate_leaf(Path('frontend/src/data_v2_i18n/pruebas/segunda-ley-fuerza-masa'))
print('Score:', r['overall_score_5'])
print('Counts:', r['counts'])
groups = r['groups']
for gname, g in groups.items():
    if isinstance(g, dict):
        checks = g.get('checks', [])
        if isinstance(checks, list):
            for check in checks:
                if not check.get('ok', True) or check.get('status') == 'FAIL':
                    print(f"\n[{gname}] FAIL: {check.get('message', '')}")
                    if 'details' in check:
                        print("  Details:", check['details'])
        elif isinstance(checks, dict):
            for cname, cv in checks.items():
                if isinstance(cv, dict) and (not cv.get('ok', True) or cv.get('status') == 'FAIL'):
                    print(f"\n[{gname}] FAIL: {cname} -> {cv.get('message','')}")
                    if 'details' in cv:
                        print("  Details:", cv['details'])

