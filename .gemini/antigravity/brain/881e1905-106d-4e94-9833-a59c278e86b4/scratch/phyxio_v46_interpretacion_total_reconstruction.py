import os
import re
import yaml

def total_reconstruction_interpretacion(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    # 1. Strip all leading/trailing whitespace and build a simple list of tokens
    tokens = []
    for line in lines:
        stripped = line.strip()
        if not stripped: continue
        
        # Calculate original indentation
        indent = len(re.match(r'^\s*', line).group(0))
        
        if stripped.startswith("-"):
            tokens.append({'type': 'list_item', 'val': stripped[1:].strip(), 'indent': indent})
        elif ":" in stripped:
            parts = stripped.split(":", 1)
            key = parts[0].strip()
            val = parts[1].strip()
            # Remove anchors
            val = re.sub(r'[&*]\w+', '', val).strip()
            tokens.append({'type': 'key', 'key': key, 'val': val, 'indent': indent})
            
    # 2. Build a tree from tokens
    def build_tree(start_idx, min_indent):
        node = {}
        i = start_idx
        while i < len(tokens):
            token = tokens[i]
            if token['indent'] < min_indent:
                break
                
            if token['type'] == 'key':
                key = token['key']
                val = token['val']
                if val:
                    node[key] = val
                    i += 1
                else:
                    # Nested block
                    child_node, next_idx = build_tree(i + 1, token['indent'] + 1)
                    node[key] = child_node
                    i = next_idx
            elif token['type'] == 'list_item':
                # This logic is complex because a key can be a list parent
                # We'll just collect all list items at this level
                list_data = []
                while i < len(tokens) and tokens[i]['type'] == 'list_item' and tokens[i]['indent'] >= min_indent:
                    list_data.append(tokens[i]['val'])
                    i += 1
                return list_data, i
            else:
                i += 1
        return node, i

    # 3. Build the data
    try:
        # This simple tree builder is for the specific Phyxio structure
        data, _ = build_tree(0, 0)
        # 4. Save back
        with open(file_path, "w", encoding="utf-8") as f:
            yaml.dump(data, f, allow_unicode=True, sort_keys=False, default_flow_style=False, indent=2)
        return True
    except Exception as e:
        print(f"Failed rebirth {file_path}: {e}")
        return False

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file == "interpretacion.yaml":
                path = os.path.join(root, file)
                if total_reconstruction_interpretacion(path):
                    count += 1
                    print(f"Reconstructed: {path}")

    print(f"\nDone. Fixed {count} Interpretacion files.")
