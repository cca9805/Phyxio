import os
import re
import yaml
from pathlib import Path

def ry(p):
    text = Path(p).read_text(encoding='utf-8')
    try:
        return yaml.safe_load(text)
    except Exception:
        sanitized = text.replace('`', '')
        fixed_lines = []
        for line in sanitized.splitlines():
            m = re.match(r'^(\s*)(es|en|physical_meaning|validity|constraints|physical_reading_rules|summary_rules|likely_errors|graph_rules|next_step_rules):\s+(.+:.+)$', line)
            if m:
                indent, key, value = m.groups()
                value = value.strip()
                if not (value.startswith('"') or value.startswith("'") or value.startswith('{') or value.startswith('[')):
                    value = value.replace('"', '\\"')
                    line = f'{indent}{key}: "{value}"'
            fixed_lines.append(line)
        sanitized = '\n'.join(fixed_lines)
        return yaml.safe_load(sanitized)

def grand_sanitizer_v2(file_path):
    try:
        data = ry(file_path)
        if data is None: return False
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
                if grand_sanitizer_v2(path):
                    count += 1
                    print(f"Sanitized: {path}")

    print(f"\nDone. Sanitized {count} YAML files.")
