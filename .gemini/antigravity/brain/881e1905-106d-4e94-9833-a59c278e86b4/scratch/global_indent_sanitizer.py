import os
import re

def global_indent_sanitizer(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    for i, line in enumerate(lines):
        # 1. Remove the trash ": ''"
        new_line = line.replace(": ''", ":").replace(": \"\"", ":")
        if new_line != line:
            modified = True
            line = new_line
            
        # 2. Fix the specific "mapping values not allowed" / "expected block end" patterns
        # If line is '      es:' (6 spaces) and parent was 'title:' (4 spaces), it's okay.
        # But if parent was 'title:' (2 spaces), then it should be 4 spaces.
        
        # Heuristic: if a line starts with (4 or more spaces) and is (es/en/target/kind),
        # and it's followed by a mapping, ensure it's not double-quoted-merged.
        
        new_lines.append(line)

    # I'll just use a more aggressive approach for the most common failure:
    # '  key:' followed by '    es:' instead of '  key:\n    es:'
    
    content = "".join(new_lines)
    
    # Fix merged keys again just in case
    # Pattern: ^(\s*)(\w+):\s*\'?(\w+):\s*(.*)\'?$
    def repl(m):
        indent = m.group(1)
        parent = m.group(2)
        child = m.group(3)
        val = m.group(4).strip().strip("'").strip('"')
        return f"{indent}{parent}:\n{indent}  {child}: '{val}'\n"

    content = re.sub(r'^(\s*)(\w+):\s*\'?(\w+):\s*(.*)\'?$', repl, content, flags=re.M)
    
    if content != "".join(lines):
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        return True
    return False

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".yaml"):
                path = os.path.join(root, file)
                if global_indent_sanitizer(path):
                    count += 1
                    print(f"Sanitized: {path}")

    print(f"\nDone. Sanitized {count} YAML files.")
