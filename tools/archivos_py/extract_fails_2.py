import json
import sys

try:
        data = json.load(f)
except Exception as e:
    print(f"Error loading JSON: {e}")
    sys.exit(1)

results = data.get('results', [])
if not results:
    print("No results found.")
    sys.exit(0)

leaf = results[0]
groups = leaf.get('groups', {})

print(f"Leaf: {leaf.get('leaf_name')}")
print(f"Score: {leaf.get('overall_score_5')}")
print(f"Fails: {leaf.get('counts', {}).get('fail')}")
print("-" * 40)

for group_name, group_data in groups.items():
    checks = group_data.get('checks', [])
    for check in checks:
        if not check.get('ok'):
            msg = check.get('message')
            details = check.get('details')
            print(f"[{group_name}] FAIL: {msg}")
            if details:
                if isinstance(details, list):
                    for d in details:
                        print(f"  - {d}")
                else:
                    print(f"  - {details}")
