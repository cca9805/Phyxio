import json

try:
    with open('final_report.json', 'r', encoding='utf-16') as f:
        data = json.load(f)
except:
    with open('final_report.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

fails = []
for res in data.get('results', []):
    groups = res.get('groups', {})
    for group_name, group_data in groups.items():
        for check in group_data.get('checks', []):
            if not check.get('ok'):
                fails.append(f"{group_name}: {check.get('message')}")

print(f"Total Fails: {len(fails)}")
for f in fails:
    print(f"- {f}")
