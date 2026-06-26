import yaml
import os

MAP_PATH = r'c:\Users\USER\Desktop\Phyxio\frontend\src\v2\map\phyxio-map.yaml'

with open(MAP_PATH, 'r', encoding='utf-8') as f:
    map_data = yaml.safe_load(f)

root = map_data['root']
print(f"Root: {root.get('id')}")

for child in root.get('children', []):
    print(f"  Child: {child.get('id')}")
    if child.get('id') == 'fisica-clasica':
        for sub in child.get('children', []):
            print(f"    Sub: {sub.get('id')}")
            if sub.get('id') == 'mecanica':
                for node in sub.get('children', []):
                    print(f"      Node: {node.get('id')}")
