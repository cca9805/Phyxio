import os
import re

def fix_yaml_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Pattern to find 'key: "value"' or 'key: value' where value has special characters
    # We want to use single quotes.
    # We'll target the keys we care about.
    keys = "latex|equation|symbol|typical_range|value_nature|expected_interval|title|nombre|descripcion|physical_meaning|validity|result_semantics|graph_implications|motivo_no_calculable"
    
    def replace_with_single_quotes(match):
        key = match.group(1)
        value = match.group(2)
        # Remove any existing outer quotes (single or double)
        value = value.strip('"\'')
        # Escape any single quotes inside the value by doubling them
        escaped_value = value.replace("'", "''")
        return f"{key}: '{escaped_value}'"

    # Match both quoted and unquoted values
    # Regex: (key):\s*("[^"]*"|'[^']*'|[^#\n]*)
    new_content = re.sub(rf'({keys}):\s*("[^"\n]*"|\'[^\'\n]*\'|[^\n]*)', replace_with_single_quotes, content)
    
    if new_content != content:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        return True
    return False

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".yaml"):
                path = os.path.join(root, file)
                if fix_yaml_file(path):
                    count += 1
                    print(f"Fixed: {path}")

    print(f"\nDone. Fixed {count} YAML files.")
