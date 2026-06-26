import sys
sys.path.insert(0, 'tools')
from pathlib import Path
from validator_modular._core import validate_leaf

r = validate_leaf(Path(r'frontend/src/data_v2_i18n/fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/modos-en-placas-y-membranas'))

print(f"Score: {r.get('overall_score_5')}")
print(f"Counts: {r.get('counts')}")
print()

groups = r.get('groups', {})
for gname, g in groups.items():
    if isinstance(g, dict):
        # Try different structures
        checks = g.get('checks', [])
        if isinstance(checks, list):
            fails = [c for c in checks if isinstance(c, dict) and c.get('status') == 'FAIL']
            if fails:
                print(f"=== {gname} ({len(fails)} fails) ===")
                for f in fails[:10]:
                    msg = f.get('message', '')[:200]
                    print(f"  FAIL: {f.get('check','?')} -> {msg}")
                print()
        elif isinstance(checks, dict):
            for cname, cv in checks.items():
                if isinstance(cv, dict) and cv.get('status') == 'FAIL':
                    print(f"  FAIL [{gname}]: {cname} -> {cv.get('message','')[:200]}")

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
                        det_str = str(det)[:200]
                        print(f"  FAIL: {msg} | {det_str}")
                    else:
                        print(f"  FAIL: {msg}")
