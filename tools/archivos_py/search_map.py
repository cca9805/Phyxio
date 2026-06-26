
import yaml

map_path = r"c:\Users\USER\Desktop\Phyxio\frontend\src\v2\map\phyxio-map.yaml"
keywords = ["torsion", "capilaridad", "elasticidad", "young", "poisson", "jurin", "tension superficial", "estuerzo", "deformacion"]

found_nodes = []

def search_recursive(node, keywords):
    node_str = str(node).lower()
    for kw in keywords:
        if kw in node_str:
            # If found, try to identify the node
            node_id = node.get('id', 'unknown')
            node_title = node.get('titulo', 'unknown')
            found_nodes.append((node_id, node_title, kw))
            break
    
    children = node.get('children', [])
    for child in children:
        search_recursive(child, keywords)

with open(map_path, 'r', encoding='utf-8') as f:
    data = yaml.safe_load(f)

search_recursive(data['root'], keywords)

for node_id, node_title, kw in found_nodes:
    print(f"ID: {node_id} | Title: {node_title} | Keyword: {kw}")
