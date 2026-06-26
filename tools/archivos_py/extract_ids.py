
import yaml

map_path = r"c:\Users\USER\Desktop\Phyxio\frontend\src\v2\map\phyxio-map.yaml"

def get_ids(node):
    yield node.get('id')
    for child in node.get('children', []):
        yield from get_ids(child)

with open(map_path, 'r', encoding='utf-8') as f:
    data = yaml.safe_load(f)

with open('scratch/all_ids.txt', 'w', encoding='utf-8') as f:
    for node_id in get_ids(data['root']):
        f.write(f"{node_id}\n")
