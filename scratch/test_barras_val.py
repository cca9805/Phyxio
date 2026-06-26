import sys
sys.path.insert(0, 'tools')
from pathlib import Path
from validator_modular._core import validate_leaf

r = validate_leaf(Path('frontend/src/data_v2_i18n/fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-longitudinales-en-barras'))

print(f"Score: {r.get('overall_score_5')}")
print(f"Counts: {r.get('counts')}")

groups = r.get('groups', {})
for gname, g in groups.items():
    if isinstance(g, dict):
        checks = g.get('checks', [])
        if isinstance(checks, list):
            fails = [c for c in checks if isinstance(c, dict) and not c.get('ok', True)]
            if fails:
                print(f"\n=== {gname} (score {g.get('score_5','?')}, {len(fails)} fails) ===")
                for f in fails:
                    msg = f.get('message', '')[:200]
                    det = f.get('details', '')
                    if det:
                        print(f"  FAIL: {msg} | {det}")
                    else:
                        print(f"  FAIL: {msg}")
