import json

with open('rodadura_analisis_report_final.json', 'r', encoding='utf-8-sig') as f:
    data = json.load(f)

fails = []
for res in data.get('results', []):
    groups = res.get('groups', {})
    for group_name, group_data in groups.items():
        for check in group_data.get('checks', []):
            if not check.get('ok'):
                fails.append(f"{group_name}: {check.get('message')} ({check.get('details')})")

print(f"Total Fails: {len(fails)}")
for f in fails:
    print(f"- {f}")
