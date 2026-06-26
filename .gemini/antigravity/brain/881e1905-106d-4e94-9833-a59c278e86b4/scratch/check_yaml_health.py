import os
import yaml

def check_yaml_health(root_dir):
    errors = []
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".yaml"):
                path = os.path.join(root, file)
                try:
                    with open(path, "r", encoding="utf-8") as f:
                        yaml.safe_load(f)
                except Exception as e:
                    errors.append((path, str(e)))
    return errors

if __name__ == "__main__":
    root = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    errs = check_yaml_health(root)
    if not errs:
        print("All YAMLs are valid!")
    else:
        for p, e in errs:
            print(f"Error in {p}:\n{e}\n")
