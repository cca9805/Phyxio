import os
import subprocess
import json
import re

leaves_file = "leaves_to_check.txt"
validator_path = r"tools\phyxio_leaf_validator.py"

with open(leaves_file, "r", encoding="utf-8-sig") as f:
    leaves = [line.strip() for line in f if line.strip()]

results = []

for i, leaf in enumerate(leaves):
    print(f"[{i+1}/{len(leaves)}] Checking {os.path.basename(leaf)}...")
    try:
        process = subprocess.run(
            ["python", validator_path, "all", leaf],
            capture_output=True,
            text=True,
            encoding='utf-8'
        )
        output = process.stdout
        
        match = re.search(r"(?:FAIL|OK): Marcado de magnitudes \[\[id\]\] \(globo de ayuda\) cubre el (\d+)%", output)
        percent = match.group(1) if match else "0"
        
        if int(percent) < 100:
            results.append({"path": leaf, "percent": percent})

    except Exception as e:
        print(f"Error checking {leaf}: {e}")

# Sort by percentage
results.sort(key=lambda x: int(x["percent"]))

with open("tagging_audit.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)

print(f"\nAudit complete. Found {len(results)} leaves with coverage < 100%.")
for res in results[:10]:
    print(f"{res['percent']}% - {os.path.basename(res['path'])}")
