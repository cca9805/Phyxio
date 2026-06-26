import json
import sys

def check():
    raw = sys.stdin.buffer.read().decode('utf-8-sig')
    data = json.loads(raw)
    res = data['results'][0]
    for k, v in res['groups'].items():
        s = v.get('score_5', 5)
        if s < 5:
            print(f"{k}: {s}")
            for check in v['checks']:
                if not check['ok']:
                    print(f"  - FAIL: {check['msg']}")

if __name__ == "__main__":
    check()
