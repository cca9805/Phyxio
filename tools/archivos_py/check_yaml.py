import yaml
import sys

def check_yaml(path):
    try:
        with open(path, 'r', encoding='utf-8') as f:
            yaml.safe_load(f)
        print(f"OK: {path}")
    except Exception as e:
        print(f"ERROR: {path}: {e}")
        sys.exit(1)

check_yaml(sys.argv[1])
