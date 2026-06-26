import os
import re

def de_nest_mappings(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()
    
    new_lines = []
    # stack of (indent, type) where type is 'map' or 'list'
    stack = [(-1, 'map')]
    
    for i in range(len(lines)):
        line = lines[i]
        stripped = line.strip()
        if not stripped:
            new_lines.append(line)
            continue
            
        indent = len(re.match(r'^\s*', line).group(0))
        
        # Pop stack based on indentation
        while len(stack) > 1 and indent <= stack[-1][0]:
            stack.pop()
            
        if stripped.startswith("-"):
            # This is a list item
            if stack[-1][1] == 'map':
                # Parent was a map, now we are a list
                stack.append((indent - 2, 'list'))
            new_lines.append(line)
        else:
            # This is a mapping key
            if stack[-1][1] == 'list':
                # We are a mapping key inside a list! MOVE BACK.
                # Find the level of the list's parent
                target_indent = stack[-1][0]
                new_lines.append(" " * target_indent + line.lstrip())
                # Update stack
                stack.pop()
            else:
                new_lines.append(line)
            
            # If this key starts a block, push it
            if stripped.endswith(":"):
                stack.append((indent, 'map'))
                
    with open(file_path, "w", encoding="utf-8") as f:
        f.writelines(new_lines)
    return True

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file == "interpretacion.yaml":
                path = os.path.join(root, file)
                if de_nest_mappings(path):
                    count += 1
                    print(f"De-nested: {path}")

    print(f"\nDone. Fixed {count} Interpretacion files.")
