import sys
import os
from pathlib import Path

# Add workspace root to sys.path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from tools.validator_modular._core import validate_leaf

paths = [
    # Corriente Eléctrica (Leaves)
    'frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/corriente-electrica/intensidad-de-corriente',
    'frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/corriente-electrica/resistencia-y-ley-de-ohm',
    'frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/corriente-electrica/potencia-electrica',
    'frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/corriente-electrica/circuitos-de-corriente-continua/leyes-de-kirchhoff',
    'frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/corriente-electrica/circuitos-de-corriente-continua/resistencias-en-paralelo',
    'frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/corriente-electrica/circuitos-de-corriente-continua/resistencias-en-serie',
    'frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/corriente-electrica/circuitos-rc',
    
    # Corriente Alterna (Leaves)
    'frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/corriente-alterna/magnitudes-alternas',
    'frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/corriente-alterna/reactancia/capacitiva',
    'frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/corriente-alterna/reactancia/inductiva',
    'frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/corriente-alterna/circuitos-rlc',
    'frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/corriente-alterna/resonancia-electrica',
]

print("=== RUNNING VALIDATIONS FOR ALL LEAF SUBTOPICS ===")
for p in paths:
    path = Path(p)
    if not path.exists():
        print(f"Path does not exist: {p}")
        continue
    
    r = validate_leaf(path)
    score = r.get('overall_score_5', 0)
    counts = r.get('counts', {})
    
    print(f"\nLeaf: {path.name} (parent: {path.parent.name})")
    print(f"  Score: {score}/5")
    print(f"  Counts: {counts}")
    
    # Check for fails
    fails = []
    groups = r.get('groups', {})
    for gname, g in groups.items():
        if isinstance(g, dict):
            checks = g.get('checks', [])
            if isinstance(checks, list):
                for check in checks:
                    if not check.get('ok', True) or check.get('status') == 'FAIL':
                        fails.append((gname, check.get('message', ''), check.get('details', '')))
            elif isinstance(checks, dict):
                for cname, cv in checks.items():
                    if isinstance(cv, dict) and (not cv.get('ok', True) or cv.get('status') == 'FAIL'):
                        fails.append((gname, f"{cname} -> {cv.get('message','')}", cv.get('details', '')))
    
    if fails:
        print(f"  ❌ Fails found: {len(fails)}")
        for gname, msg, det in fails:
            print(f"    [{gname}] {msg}")
            if det:
                print(f"      Details: {det}")
    else:
        print("  ✅ 0 Fails!")
