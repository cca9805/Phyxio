import os
import re
import yaml

def final_structural_solution(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Basic cleanup: Remove anchors/aliases and fix the specific block mapping conflict
    content = re.sub(r":\s*['\"]?[&*]\w+['\"]?\s*\n", ": \n", content)
    
    # 2. Fix multi-line strings that are not quoted (the 'ScannerError' problem)
    # We'll just look for lines that don't look like keys or list items and quote them
    # OR better: use the YAML engine to fix it by being very forgiving.
    
    try:
        # Try to load. If it fails, we use a custom line-by-line fixer.
        data = yaml.safe_load(content)
    except Exception as e:
        # Fixer: Force quote lines that look like orphaned strings
        lines = content.split("\n")
        fixed_lines = []
        for line in lines:
            stripped = line.strip()
            if stripped and ":" not in stripped and not stripped.startswith("-") and not stripped.startswith("#"):
                # Orphaned string line! Quote it or join it to previous.
                # For safety, we'll just wrap it in single quotes.
                fixed_lines.append(re.sub(r'^(\s*)', r"\1'", line) + "'")
            else:
                fixed_lines.append(line)
        try:
            data = yaml.safe_load("\n".join(fixed_lines))
        except:
            return False

    # 3. Fix the ID problem in the data dictionary
    def fix_ids(obj):
        if isinstance(obj, list):
            for item in obj: fix_ids(item)
        elif isinstance(obj, dict):
            if "id" in obj and (obj["id"] is None or isinstance(obj["id"], dict)):
                # Derivamos ID
                if "symbol" in obj and isinstance(obj["symbol"], str):
                    obj["id"] = re.sub(r'[^a-zA-Z0-9]', '', obj["symbol"])
                elif "nombre" in obj and isinstance(obj["nombre"], dict) and "es" in obj["nombre"]:
                    obj["id"] = obj["nombre"]["es"].lower().replace(" ", "_")
                else:
                    obj["id"] = "id_" + str(hash(str(obj)) % 1000)
            for k, v in obj.items(): fix_ids(v)

    fix_ids(data)

    # 4. Dump back with PERFECT formatting
    with open(file_path, "w", encoding="utf-8") as f:
        yaml.dump(data, f, allow_unicode=True, sort_keys=False, default_flow_style=False, indent=2)
    return True

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".yaml"):
                path = os.path.join(root, file)
                if final_structural_solution(path):
                    count += 1
                    print(f"Final Solution Applied: {path}")

    print(f"\nDone. Fixed {count} YAML files.")
