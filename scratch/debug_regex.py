import re
from pathlib import Path

index_path = Path(r"c:\Users\USER\Desktop\Phyxio\frontend\src\v2\components\graphs\dinamica\index.js")
active_idx = index_path.read_text(encoding="utf-8")

export_match = re.search(r'export const graphs\s*=\s*\{(.*?)\n\};', active_idx, re.DOTALL)
if export_match:
    print("Match found!")
    body_all = export_match.group(1)
    # print(body_all[:200])
    
    registered = {}
    for m in re.finditer(r'"([^"]+)"\s*:\s*\{([^}]+)\}', body_all):
        lid = m.group(1)
        body = m.group(2)
        registered[lid] = {k: v for k, v in re.findall(r'(\w+)\s*:\s*(\w+)', body)}
        
    print(f"Registered keys: {list(registered.keys())[:10]}...")
    if "formulacion-diferencial" in registered:
        print("Found formulacion-diferencial!")
        print(registered["formulacion-diferencial"])
    else:
        print("formulacion-diferencial NOT found in registered.")
else:
    print("Match NOT found!")
