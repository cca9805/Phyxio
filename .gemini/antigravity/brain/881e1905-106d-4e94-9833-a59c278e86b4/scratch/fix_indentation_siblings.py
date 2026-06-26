import os
import re

def fix_indentation_siblings(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    i = 0
    while i < len(lines):
        line = lines[i]
        # Match: indented key followed by '' that should be 2 spaces less
        # Example:     domain_checks: ''
        m = re.match(r'^    (domain_checks|coherence_checks|graph_implications|pedagogical_triggers):\s*\'\'\s*$', line)
        if m:
            key = m.group(1)
            new_lines.append(f"  {key}:\n")
            modified = True
            i += 1
            # Adjust subsequent list items
            while i < len(lines):
                item_m = re.match(r'^  - (.*)$', lines[i])
                if item_m:
                    val = item_m.group(1)
                    new_lines.append(f"  - {val}\n")
                    i += 1
                    # Adjust lines within the list item (indented)
                    while i < len(lines) and lines[i].startswith("    "):
                        # If it's a message block or similar
                        new_lines.append(lines[i][2:]) # Remove 2 spaces
                        i += 1
                elif re.match(r'^  \w+:', lines[i]): # Next sibling already at 2 spaces
                    break
                else:
                    break
            continue

        # Case 2: graph_implications: '- val'
        m = re.match(r'^  (graph_implications):\s*\'?- (.*)\'?$', line)
        if m:
            key = m.group(1)
            val = m.group(2).strip().strip("'").strip('"')
            new_lines.append(f"  {key}:\n")
            new_lines.append(f"  - '{val}'\n")
            modified = True
            i += 1
            continue

        new_lines.append(line)
        i += 1

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
            if file.endswith("formulas.yaml"):
                path = os.path.join(root, file)
                if fix_indentation_siblings(path):
                    count += 1
                    print(f"Fixed Siblings: {path}")

    print(f"\nDone. Fixed {count} formulas.yaml files.")
