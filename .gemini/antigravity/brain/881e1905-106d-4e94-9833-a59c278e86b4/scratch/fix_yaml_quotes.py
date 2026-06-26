import os
import re

def fix_yaml_quotes(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    for line in lines:
        # Match: key: 'Value with Bernoulli's'
        # We want to catch the case where there's a single quote inside the single quotes
        # Pattern: ^(indent)(key):\s*'(.*)'$
        match = re.match(r'^(\s*\w+:\s*)\'(.*)\'(\s*)$', line)
        if match:
            prefix = match.group(1)
            inner = match.group(2)
            suffix = match.group(3)
            
            # If inner contains a single quote that is NOT doubled
            # Look for ' that is not preceded by ' and not followed by '
            # Or just replace all ' with '' in inner
            new_inner = inner.replace("'", "''")
            if new_inner != inner:
                new_lines.append(f"{prefix}'{new_inner}'{suffix}\n")
                modified = True
                continue
        
        # Match: - id: ... (same for list items if they are quoted)
        
        new_lines.append(line)

    if modified:
        with open(file_path, "w", encoding="utf-8") as f:
            f.writelines(new_lines)
        return True
    return False

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".yaml"):
                path = os.path.join(root, file)
                if fix_yaml_quotes(path):
                    count += 1
                    print(f"Fixed quotes: {path}")

    print(f"\nDone. Fixed {count} YAML files.")
