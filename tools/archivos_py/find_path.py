
import yaml

map_path = r"c:\Users\USER\Desktop\Phyxio\frontend\src\v2\map\phyxio-map.yaml"
target_id = 'propiedades-elasticas-del-solido'

def find_path(node, target, path=""):
    current_id = node.get('id', 'root')
    current_path = f"{path}/{current_id}"
    if current_id == target:
        return current_path
    for child in node.get('children', []):
        res = find_path(child, target, current_path)
        if res:
            return res
    return None

with open(map_path, 'r', encoding='utf-8') as f:
    data = yaml.safe_load(f)

print(f"Path to {target_id}:")
print(find_path(data['root'], target_id))
