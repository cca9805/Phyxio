import json
import sys

try:
    with open('navier_report_v9.json', 'rb') as f:
        content = f.read().decode('utf-16')
        data = json.loads(content)
        
    leaf = data['results'][0]
    print(f"Overall Score: {leaf['overall_score_5']}/5")
    
    print("\nFAILS:")
    for grp_name, grp in leaf['groups'].items():
        for chk in grp['checks']:
            if not chk['ok']:
                print(f"[{grp_name}] {chk['message']}")
                if chk.get('details'):
                    print(f"    Details: {chk['details']}")
                    
except Exception as e:
    print(f"Error: {e}")
