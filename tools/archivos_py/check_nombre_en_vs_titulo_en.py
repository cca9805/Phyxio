import os
import yaml

# Ruta base del workspace
BASE = r"c:/Users/USER/Desktop/Phyxio/frontend/src/data_v2_i18n"
MAP_PATH = r"c:/Users/USER/Desktop/Phyxio/frontend/src/v2/map/phyxio-map.yaml"

# Cargar el mapa completo
with open(MAP_PATH, encoding="utf-8") as f:
    map_yaml = yaml.safe_load(f)

# Construir un dict ruta_relativa -> titulo_en
leafs = {}
def walk(node):
    if isinstance(node, dict):
        if 'ruta_relativa' in node and 'titulo_en' in node:
            leafs[node['ruta_relativa']] = node['titulo_en']
        for v in node.values():
            walk(v)
    elif isinstance(node, list):
        for v in node:
            walk(v)
walk(map_yaml)

# Buscar todos los meta.yaml
for root, dirs, files in os.walk(BASE):
    if 'meta.yaml' in files:
        meta_path = os.path.join(root, 'meta.yaml')
        with open(meta_path, encoding="utf-8") as f:
            meta = yaml.safe_load(f)
        rel = meta.get('ruta_relativa')
        nombre_en = meta.get('nombre', {}).get('en')
        titulo_en = leafs.get(rel)
        if nombre_en != titulo_en:
            print(f"NO COINCIDE: {meta_path}")
            print(f"  nombre.en:  {nombre_en}")
            print(f"  titulo_en:  {titulo_en}")
