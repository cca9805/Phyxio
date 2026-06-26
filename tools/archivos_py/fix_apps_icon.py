import yaml

MAP_PATH = r'c:\Users\USER\Desktop\Phyxio\frontend\src\v2\map\phyxio-map.yaml'

with open(MAP_PATH, 'r', encoding='utf-8') as f:
    map_data = yaml.safe_load(f)

def fix_aplicaciones_icons(node):
    if node.get('id') == 'aplicaciones':
        if node.get('icon') == 'apps' or not node.get('icon'):
            node['icon'] = '🛠️'
            print(f"Updated icon for aplicaciones at {node.get('ruta_relativa')}")
            
    if 'children' in node:
        for child in node['children']:
            fix_aplicaciones_icons(child)

fix_aplicaciones_icons(map_data['root'])

with open(MAP_PATH, 'w', encoding='utf-8') as f:
    yaml.dump(map_data, f, allow_unicode=True, sort_keys=False)

print("Icons for 'aplicaciones' nodes updated.")
