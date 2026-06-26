import json
import subprocess
import sys
from pathlib import Path

PYTHON = sys.executable
VALIDATOR = Path("tools/phyxio_leaf_validator.py")
DATA_BASE = Path("frontend/src/data_v2_i18n/fisica-clasica/mecanica/fluidos")

def get_all_leaves(base_path):
    leaves = []
    for path in base_path.rglob("meta.yaml"):
        leaves.append(path.parent)
    return leaves

def run_validator(leaf_path):
    result = subprocess.run(
        [PYTHON, str(VALIDATOR), str(leaf_path), "--json"],
        capture_output=True, text=True, encoding="utf-8"
    )
    if result.returncode != 0 or not result.stdout.strip():
        return {"error": result.stderr.strip() or "empty output", "overall_score_5": 0}
    try:
        return json.loads(result.stdout)
    except json.JSONDecodeError as e:
        return {"error": f"JSON parse error: {e}", "overall_score_5": 0}

def main():
    leaves = get_all_leaves(DATA_BASE)
    print(f"Found {len(leaves)} leaves. Validating...")
    
    report = {}
    for leaf in leaves:
        rel_path = leaf.relative_to(DATA_BASE)
        print(f"Validating {rel_path}...")
        report[str(rel_path)] = run_validator(leaf)
    
    with open("fluidos_validation_report.json", "w", encoding="utf-8") as f:
        json.dump(report, f, ensure_ascii=False, indent=2)
    
    print("\nValidation complete. Summary:")
    for rel_path, data in report.items():
        score = data.get("overall_score_5", 0)
        status = "OK" if score >= 4.5 else "FIX NEEDED"
        print(f"[{status}] {rel_path}: {score:.2f}/5")

if __name__ == "__main__":
    main()
