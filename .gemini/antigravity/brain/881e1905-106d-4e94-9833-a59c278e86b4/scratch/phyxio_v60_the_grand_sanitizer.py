import os
import yaml

def grand_sanitizer(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        try:
            data = yaml.safe_load(f)
        except Exception as e:
            print(f"Failed to load {file_path}: {e}")
            return False

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
                if grand_sanitizer(path):
                    count += 1
                    print(f"Sanitized: {path}")

    print(f"\nDone. Sanitized {count} YAML files.")
