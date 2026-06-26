import os
import yaml

def canonicalize_interpretacion_yaml(file_path):
    # We need to pre-process the file to fix the &id001 anchor/list issue 
    # before PyYAML can even load it.
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()
    
    new_lines = []
    for line in lines:
        # If it's a list item following an anchor/alias, indent it
        if re.match(r'^\s*-', line):
            # This is a hack, but we need to fix the specific pattern 
            # where list items are at the same level as the parent key with anchor
            new_lines.append("  " + line)
        else:
            new_lines.append(line)
    
    # Actually, let's just do a manual fix of the broken lines
    # The error is that '- item' is at the same level as 'priority_order: ...'
    
    # Re-reading to use regex replacement on the whole block
    content = "".join(new_lines)
    
    try:
        # Load the possibly fixed content
        data = yaml.safe_load(content)
        # Dump it back out in canonical Phyxio v5 style
        with open(file_path, "w", encoding="utf-8") as f:
            yaml.dump(data, f, allow_unicode=True, sort_keys=False, default_flow_style=False, indent=2)
        return True
    except Exception as e:
        print(f"Error canonicalizing {file_path}: {e}")
        return False

import re
if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file == "interpretacion.yaml":
                path = os.path.join(root, file)
                if canonicalize_interpretacion_yaml(path):
                    count += 1
                    print(f"Canonicalized: {path}")

    print(f"\nDone. Canonicalized {count} Interpretacion files.")
