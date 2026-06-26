import yaml

MAP_PATH = r'c:\Users\USER\Desktop\Phyxio\frontend\src\v2\map\phyxio-map.yaml'

with open(MAP_PATH, 'r', encoding='utf-8') as f:
    map_data = yaml.safe_load(f)

def strip_slashes(node):
    if 'ruta_relativa' in node:
        node['ruta_relativa'] = node['ruta_relativa'].lstrip('/')
    if 'children' in node:
        for child in node['children']:
            strip_slashes(child)

strip_slashes(map_data['root'])

with open(MAP_PATH, 'w', encoding='utf-8') as f:
    yaml.dump(map_data, f, allow_unicode=True, sort_keys=False)

print("Leading slashes stripped.")
