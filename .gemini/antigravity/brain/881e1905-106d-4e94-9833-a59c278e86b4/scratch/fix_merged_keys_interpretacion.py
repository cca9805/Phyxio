import os
import re

def fix_merged_keys_interpretacion(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    def repl(m):
        parent = m.group(1)
        child = m.group(2)
        val = m.group(3).strip().strip("'").strip('"')
        ev = val.replace("'", "''")
        return f"{parent}:\n    {child}: '{ev}'"

    new_content = re.sub(r'(\w+):\s*\'(es|en|title|target|kind):\s*\'?(.*?)\'?(?:\n|$)', repl, content)
    
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
                if fix_merged_keys_interpretacion(path):
                    count += 1
                    print(f"Fixed Merged Key: {path}")

    print(f"\nDone. Fixed {count} YAML files.")
