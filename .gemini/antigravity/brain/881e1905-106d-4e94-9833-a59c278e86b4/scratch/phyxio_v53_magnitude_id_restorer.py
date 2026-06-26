import os
import re
import yaml

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^\w\s]', '', text)
    text = re.sub(r'\s+', '_', text)
    return text

def restore_magnitude_ids(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        try:
            data = yaml.safe_load(f)
        except:
            return False

    if not data or "magnitudes" not in data:
        return False

    modified = False
    for mag in data["magnitudes"]:
        if "id" not in mag or mag["id"] is None or isinstance(mag["id"], dict):
            # Try to get id from symbol or nombre
            if "symbol" in mag and isinstance(mag["symbol"], str):
                # symbol: v_1 -> v1
                new_id = re.sub(r'[^a-zA-Z0-9]', '', mag["symbol"])
                if not new_id: new_id = "mag_" + str(hash(str(mag)) % 1000)
                mag["id"] = new_id
                modified = True
            elif "nombre" in mag and isinstance(mag["nombre"], dict) and "es" in mag["nombre"]:
                mag["id"] = slugify(mag["nombre"]["es"])
                modified = True
            else:
                mag["id"] = "unknown_magnitude"
                modified = True

    if modified:
        with open(file_path, "w", encoding="utf-8") as f:
            yaml.dump(data, f, allow_unicode=True, sort_keys=False, default_flow_style=False, indent=2)
        return True
    return False

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file == "magnitudes.yaml":
                path = os.path.join(root, file)
                if restore_magnitude_ids(path):
                    count += 1
                    print(f"Restored IDs: {path}")

    print(f"\nDone. Fixed {count} Magnitude files.")
