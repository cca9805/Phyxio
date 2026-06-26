import yaml
import re

MAP_PATH = r'c:\Users\USER\Desktop\Phyxio\frontend\src\v2\map\phyxio-map.yaml'

with open(MAP_PATH, 'r', encoding='utf-8') as f:
    map_data = yaml.safe_load(f)

# Common text placeholders to replace
REPLACEMENTS = {
    'apps': '🛠️',
    'tools': '🏗️',
    'folder': '📁',
    'leaf': '🍃',
    'physics': '⚛️',
    'math': '➗',
    'science': '🔬'
}

def is_emoji(text):
    if not text: return False
    # Simple check: if it contains only alphanumeric, it's probably not an emoji
    return not re.match(r'^[a-zA-Z0-9_\-]+$', text)

def fix_icons(node):
    icon = node.get('icon')
    if icon:
        if icon in REPLACEMENTS:
            node['icon'] = REPLACEMENTS[icon]
            print(f"Fixed icon for {node.get('id')}: {icon} -> {node['icon']}")
        elif not is_emoji(icon):
            # If it's something like 'custom-icon', we might want to flag it
            # For now, let's just fix the ones we know
            pass
            
    if 'children' in node:
        for child in node['children']:
            fix_icons(child)

fix_icons(map_data['root'])

with open(MAP_PATH, 'w', encoding='utf-8') as f:
    yaml.dump(map_data, f, allow_unicode=True, sort_keys=False)

print("Text icons updated.")
