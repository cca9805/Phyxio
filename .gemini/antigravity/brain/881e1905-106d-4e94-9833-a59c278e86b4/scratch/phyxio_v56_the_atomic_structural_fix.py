import os
import re
import yaml

def atomic_structural_fix(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    fixed_lines = []
    for line in lines:
        stripped = line.strip()
        if not stripped:
            fixed_lines.append(line)
            continue
            
        # If it's a continuation line (no colon, no dash, indented)
        if ":" not in stripped and not stripped.startswith("-") and not stripped.startswith("#") and line.startswith(" "):
            if fixed_lines:
                # Join to previous line
                fixed_lines[-1] = fixed_lines[-1].rstrip() + " " + stripped + "\n"
                continue
        
        fixed_lines.append(line)
        
    content = "".join(fixed_lines)
    
    # Remove anchors
    content = re.sub(r":\s*['\"]?[&*]\w+['\"]?\s*\n", ": \n", content)
    
    try:
        data = yaml.safe_load(content)
        # Restore IDs
        def fix_ids(obj):
            if isinstance(obj, list):
                for item in obj: fix_ids(item)
            elif isinstance(obj, dict):
                if "id" in obj and (obj["id"] is None or isinstance(obj["id"], dict)):
                    if "symbol" in obj and isinstance(obj["symbol"], str):
                        obj["id"] = re.sub(r'[^a-zA-Z0-9]', '', obj["symbol"])
                    elif "nombre" in obj and isinstance(obj["nombre"], dict) and "es" in obj["nombre"]:
                        obj["id"] = obj["nombre"]["es"].lower().replace(" ", "_")
                    else:
                        obj["id"] = "id_" + str(hash(str(obj)) % 1000)
                for k, v in obj.items(): fix_ids(v)
        fix_ids(data)
        
        with open(file_path, "w", encoding="utf-8") as f:
            yaml.dump(data, f, allow_unicode=True, sort_keys=False, default_flow_style=False, indent=2)
        return True
    except:
        return False

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".yaml"):
                path = os.path.join(root, file)
                if atomic_structural_fix(path):
                    count += 1
                    print(f"Atomic Fix Applied: {path}")

    print(f"\nDone. Fixed {count} YAML files.")
