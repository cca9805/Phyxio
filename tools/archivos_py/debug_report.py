import json
import sys

with open('rodadura_analisis_report_final.json', 'r', encoding='utf-8-sig') as f:
    data = json.load(f)

for res in data.get('results', []):
    print(f"Leaf: {res.get('leaf_name')}")
    print(f"Overall Score: {res.get('overall_score_5')}")
    groups = res.get('groups', {})
    for group_name, group_data in groups.items():
        score = group_data.get('score_5', 'N/A')
        if score != 5.0:
            print(f"{group_name}: {score}")
            for check in group_data.get('checks', []):
                if not check.get('ok'):
                    print(f"  - [FAIL] {check.get('message')}")
                    if check.get('details'):
                        print(f"    Details: {check.get('details')}")
