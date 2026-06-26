import os
import re
import yaml

def universal_reconstruction(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    # This is a very forgiving token-based parser
    tokens = []
    for line in lines:
        stripped = line.strip()
        if not stripped: continue
        
        # Calculate indentation
        indent = len(re.match(r'^\s*', line).group(0))
        
        if stripped.startswith("-"):
            # List item
            val = stripped[1:].strip()
            # If the value itself has a colon, it's an inline mapping in a list
            if ":" in val and not (val.startswith("'") or val.startswith('"')):
                # Split only once
                k, v = val.split(":", 1)
                tokens.append({'type': 'list_mapping', 'key': k.strip(), 'val': v.strip(), 'indent': indent})
            else:
                tokens.append({'type': 'list_item', 'val': val, 'indent': indent})
        elif ":" in stripped:
            parts = stripped.split(":", 1)
            key = parts[0].strip()
            val = parts[1].strip()
            # Remove anchors
            val = re.sub(r'[&*]\w+', '', val).strip()
            tokens.append({'type': 'key', 'key': key, 'val': val, 'indent': indent})

    def build_node(start_idx, min_indent):
        i = start_idx
        
        # Determine if this level is a list or a mapping
        # Peak ahead to see what the first child is
        if i < len(tokens):
            if tokens[i]['type'] in ['list_item', 'list_mapping']:
                # Build a list
                items = []
                while i < len(tokens) and tokens[i]['indent'] >= min_indent:
                    if tokens[i]['type'] == 'list_mapping':
                        # Mapping item in a list
                        # This usually starts a block for that item
                        mapping_item = {tokens[i]['key']: tokens[i]['val'] if tokens[i]['val'] else None}
                        # Peak ahead for children of this mapping item
                        # If the next token has a higher indent, it belongs to this mapping_item
                        if i + 1 < len(tokens) and tokens[i+1]['indent'] > tokens[i]['indent']:
                            children, next_idx = build_node(i + 1, tokens[i+1]['indent'])
                            # Merge children into mapping_item
                            if isinstance(children, dict):
                                mapping_item[tokens[i]['key']] = children # Wait, no, children should be values for the key
                                # Actually, if val was empty, children IS the value
                                if not tokens[i]['val']:
                                    mapping_item[tokens[i]['key']] = children
                                else:
                                    # This is complex, but for Phyxio - id: ... children are sibling keys
                                    mapping_item.update(children)
                            i = next_idx
                        else:
                            i += 1
                        items.append(mapping_item)
                    elif tokens[i]['type'] == 'list_item':
                        items.append(tokens[i]['val'])
                        i += 1
                    else:
                        # sibling key at list level? Should not happen in valid YAML but we'll ignore it
                        i += 1
                return items, i
            else:
                # Build a mapping
                node = {}
                while i < len(tokens) and tokens[i]['indent'] >= min_indent:
                    if tokens[i]['type'] == 'key':
                        key = tokens[i]['key']
                        val = tokens[i]['val']
                        if val:
                            node[key] = val
                            i += 1
                        else:
                            # Peak ahead
                            if i + 1 < len(tokens) and tokens[i+1]['indent'] > tokens[i]['indent']:
                                children, next_idx = build_node(i + 1, tokens[i+1]['indent'])
                                node[key] = children
                                i = next_idx
                            else:
                                node[key] = None
                                i += 1
                    else:
                        # list item at mapping level? Should not happen
                        i += 1
                return node, i
        return None, i

    try:
        data, _ = build_node(0, 0)
        with open(file_path, "w", encoding="utf-8") as f:
            yaml.dump(data, f, allow_unicode=True, sort_keys=False, default_flow_style=False, indent=2)
        return True
    except Exception as e:
        print(f"Failed universal reconstruction {file_path}: {e}")
        return False

if __name__ == "__main__":
    root_dir = r"C:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\fluidos"
    count = 0
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".yaml"):
                path = os.path.join(root, file)
                if universal_reconstruction(path):
                    count += 1
                    print(f"Universal Reconstructed: {path}")

    print(f"\nDone. Fixed {count} YAML files.")
