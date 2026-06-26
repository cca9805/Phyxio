import os
import re

def fix_merged_keys_v3(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Pattern: key: 'sub_key: 'val' or key: 'sub_key: val'
    # We want to match cases where the value starts with another key-like pattern.
    def repl(m):
        parent_indent = m.group(1)
        parent_key = m.group(2)
        child_key = m.group(3)
        val = m.group(4).strip().strip("'").strip('"')
        ev = val.replace("'", "''")
        return f"{parent_indent}{parent_key}:\n{parent_indent}  {child_key}: '{ev}'\n"

    # Match: ^(  )v2: 'magnitude_type: 'velocidad'
    # Using re.MULTILINE
    new_content = re.sub(r'^(\s*)(\w+):\s*\'(\w+):\s*\'?(.*?)\'?(?:\n|$)', repl, content, flags=re.MULTILINE)
    
    # Also fix cases where there is a colon inside but no starting quote? 
    # Usually it's the quote that causes the ParserError.
    
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
                if fix_merged_keys_v3(path):
                    count += 1
                    print(f"Fixed Merged Key (V3): {path}")

    print(f"\nDone. Fixed {count} YAML files.")
