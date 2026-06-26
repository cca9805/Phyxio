import json
import sys

try:
    with open('estatica_report.json', 'rb') as f:
        content = f.read().decode('utf-16')
        data = json.loads(content)
        
    for report in data.get('results', []):
        leaf = report.get('leaf_name')
        print(f"\n=== LEAF: {leaf} ===")
        print(f"Score: {report.get('overall_score_5', 0)}/5")
        
        # Flatten checks from all groups
        all_fails = []
        groups = report.get('groups', {})
        for group_name, group_data in groups.items():
            checks = group_data.get('checks', [])
            for check in checks:
                if not check.get('ok'):
                    all_fails.append({
                        "category": group_name,
                        "name": check.get('message'),
                        "details": check.get('details')
                    })
        
        if not all_fails:
            print("NO FAILS")
        for fail in all_fails:
            print(f"- [{fail.get('category')}] {fail.get('name')}")
            # print(f"  Details: {fail.get('details')}")

except Exception as e:
    print(f"Error: {e}")
