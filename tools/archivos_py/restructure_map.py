import yaml
import os

MAP_PATH = r'c:\Users\USER\Desktop\Phyxio\frontend\src\v2\map\phyxio-map.yaml'

with open(MAP_PATH, 'r', encoding='utf-8') as f:
    map_data = yaml.safe_load(f)

# Helper to find node by ID recursively
def find_node(parent, node_id):
    if parent.get('id') == node_id:
        return parent
    for child in parent.get('children', []):
        res = find_node(child, node_id)
        if res: return res
    return None

# Helper to find and remove node by ID
def find_and_remove(parent, node_id):
    children = parent.get('children', [])
    for i, child in enumerate(children):
        if child['id'] == node_id:
            return children.pop(i)
        res = find_and_remove(child, node_id)
        if res: return res
    return None

root = map_data['root']
fisica_clasica = find_node(root, 'fisica-clasica')
mecanica = find_node(fisica_clasica, 'mecanica')

cinematica = find_node(mecanica, 'cinematica')
dinamica = find_node(mecanica, 'dinamica')
trabajo_energia = find_node(mecanica, 'trabajo-y-energia')
cantidad_movimiento = find_node(mecanica, 'cantidad-de-movimiento')

# Move rotation nodes
# They might be in cinematica/rotacion or directly in mecanica/rotacion (if moved partially)
rotacion_old_in_cin = find_and_remove(cinematica, 'rotacion')
rotacion_block = find_node(mecanica, 'rotacion')

if not rotacion_block:
    rotacion_block = {
        'id': 'rotacion',
        'orden': 213000,
        'type': 'block',
        'titulo': 'Rotación',
        'titulo_en': 'Rotation',
        'ruta_relativa': 'fisica-clasica/mecanica/rotacion',
        'children': []
    }
    mecanica['children'].append(rotacion_block)

# Sub-blocks
def get_or_create_subblock(parent, id, titulo, titulo_en, orden):
    sb = next((c for c in parent.get('children', []) if c['id'] == id), None)
    if not sb:
        sb = {
            'id': id, 'orden': orden, 'type': 'block',
            'titulo': titulo, 'titulo_en': titulo_en,
            'ruta_relativa': f"{parent['ruta_relativa']}/{id}",
            'children': []
        }
        if 'children' not in parent: parent['children'] = []
        parent['children'].append(sb)
    return sb

fundamentos = get_or_create_subblock(rotacion_block, 'fundamentos', 'Fundamentos de Rotación', 'Rotation Fundamentals', 213100)
dinamica_sb = get_or_create_subblock(rotacion_block, 'dinamica', 'Dinámica de Rotación', 'Rotational Dynamics', 213200)
energia = get_or_create_subblock(rotacion_block, 'energia', 'Energía en Rotación', 'Energy in Rotation', 213300)
rodadura = get_or_create_subblock(rotacion_block, 'rodadura', 'Rodadura', 'Rolling', 213400)
momento_angular_sb = get_or_create_subblock(rotacion_block, 'momento-angular', 'Momento Angular', 'Angular Momentum', 213500)

# Move leaves from old structures
def move_leaves(source_block, target_block, leaves_ids):
    if not source_block: return
    for lid in leaves_ids:
        leaf = find_and_remove(source_block, lid)
        if leaf:
            if 'children' not in target_block: target_block['children'] = []
            target_block['children'].append(leaf)

# From cinematica/rotacion
move_leaves(rotacion_old_in_cin, fundamentos, ['magnitudes-angulares', 'cinematica-rotacional', 'relacion-lineal-angular'])
leaf_cond = find_and_remove(rotacion_old_in_cin, 'rodadura-cinematica-sin-deslizamiento')
if leaf_cond:
    leaf_cond['id'] = 'condicion-de-rodadura-sin-deslizamiento'
    leaf_cond['titulo'] = 'Condición de rodadura sin deslizamiento'
    rodadura['children'].append(leaf_cond)

# From existing rotacion/dinamica-rotacional and rotacion/energia-de-rotacion
move_leaves(rotacion_block, dinamica_sb, ['torque-momento', 'momento-de-inercia', 'segunda-ley-rotacional'])
move_leaves(rotacion_block, energia, ['energia-cinetica-rotacional', 'trabajo-y-torque'])
move_leaves(rotacion_block, momento_angular_sb, ['definicion-momento-angular', 'conservacion-momento-angular', 'precesion'])

# Renames
leaf_roz = find_and_remove(rotacion_block, 'rotacion-con-rozamiento')
if leaf_roz:
    leaf_roz['id'] = 'rozamiento-en-rotacion-y-rodadura'
    leaf_roz['titulo'] = 'Rozamiento en rotación y rodadura'
    dinamica_sb['children'].append(leaf_roz)

leaf_din_rod = find_and_remove(rotacion_block, 'rodadura-sin-deslizamiento')
if leaf_din_rod:
    leaf_din_rod['id'] = 'dinamica-de-la-rodadura-sin-deslizamiento'
    leaf_din_rod['titulo'] = 'Dinámica de la rodadura sin deslizamiento'
    rodadura['children'].append(leaf_din_rod)

# Clean up temporary blocks if empty
rotacion_block['children'] = [c for c in rotacion_block['children'] if c['id'] in ['fundamentos', 'dinamica', 'energia', 'rodadura', 'momento-angular']]

# Add Placeholders
def add_placeholder(parent, id, titulo, titulo_en, orden):
    if any(c['id'] == id for c in parent['children']): return
    parent['children'].append({
        'id': id, 'orden': orden, 'type': 'leaf',
        'titulo': titulo, 'titulo_en': titulo_en,
        'ruta_relativa': f"{parent['ruta_relativa']}/{id}",
        'icon': '📘', 'graficos': ['Svg'],
        'niveles': {'es': ['BACHILLERATO', 'UNIVERSIDAD'], 'en': ['Upper Secondary', 'University']}
    })

add_placeholder(fundamentos, 'mapa-conceptual-de-rotacion', 'Mapa conceptual de rotación', 'Rotational Concept Map', 213105)
add_placeholder(fundamentos, 'analogia-lineal-angular', 'Analogía lineal-angular', 'Linear-Angular Analogy', 213115)
add_placeholder(rodadura, 'rodadura-como-puente-entre-traslacion-y-rotacion', 'Rodadura como puente entre traslación y rotación', 'Rolling as a Bridge', 213405)
add_placeholder(rodadura, 'estrategia-para-problemas-de-rodadura', 'Estrategia para problemas de rodadura', 'Strategy for Rolling Problems', 213425)
add_placeholder(energia, 'energia-en-rodadura', 'Energía en rodadura', 'Energy in Rolling', 213325)

# Bridges
def add_bridge(parent, id, titulo, titulo_en, link_to, orden):
    if any(c['id'] == id for c in parent['children']): return
    parent['children'].append({
        'id': id, 'orden': orden, 'type': 'bridge',
        'titulo': titulo, 'titulo_en': titulo_en,
        'link_to': link_to, 'icon': '🔗'
    })

add_bridge(cinematica, 'rotacion-link', 'Rotación (Fundamentos)', 'Rotation (Fundamentals)', 'fisica-clasica/mecanica/rotacion/fundamentos', 211300)
add_bridge(dinamica, 'rotacion-link', 'Rotación (Dinámica)', 'Rotation (Dynamics)', 'fisica-clasica/mecanica/rotacion/dinamica', 212400)
add_bridge(trabajo_energia, 'energia-de-rotacion-link', 'Energía de rotación', 'Rotational Energy', 'fisica-clasica/mecanica/rotacion/energia', 214500)
add_bridge(cantidad_movimiento, 'momento-angular-link', 'Momento Angular', 'Angular Momentum', 'fisica-clasica/mecanica/rotacion/momento-angular', 215600)

# Recursive sort and path update
def sort_and_update(node, parent_path):
    if 'children' in node:
        node['children'].sort(key=lambda x: x.get('orden', 999999))
        for child in node['children']:
            if child['type'] != 'bridge':
                child['ruta_relativa'] = f"{parent_path}/{child['id']}"
            sort_and_update(child, child.get('ruta_relativa', ''))

sort_and_update(root, '')

with open(MAP_PATH, 'w', encoding='utf-8') as f:
    yaml.dump(map_data, f, allow_unicode=True, sort_keys=False)

print("Map updated successfully.")
