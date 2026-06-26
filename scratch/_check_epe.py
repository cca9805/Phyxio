import sys
sys.path.insert(0, '.')
from tools.validator_modular._core import validate_leaf, find_leaf_dirs, extract_leaf_dir
from pathlib import Path

p = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electrostatica/potencial-electrico/energia-potencial-electrica')
ld, _ = extract_leaf_dir(p)
leaves = find_leaf_dirs(ld)
summary = validate_leaf(leaves[0])

print("word_counts:", summary.get('word_counts', {}))
print("overall_score:", summary.get('overall_score_5'))
print("counts:", summary.get('counts'))
print()
for gname, gdata in summary['groups'].items():
    score = gdata if not isinstance(gdata, dict) else gdata.get('score', '?')
    print(f"GROUP {gname}: {score}")
    if not isinstance(gdata, dict):
        continue
    checks = gdata.get('checks', [])
    for c in checks:
        if isinstance(c, dict) and c.get('status') == 'FAIL':
            label = c.get('label', '?')
            det = c.get('details', '')
            print(f"  FAIL: {label}")
            if det:
                print(f"    => {str(det)[:300]}")
