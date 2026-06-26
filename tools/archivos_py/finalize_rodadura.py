import yaml

MAP_PATH = r'c:\Users\USER\Desktop\Phyxio\frontend\src\v2\map\phyxio-map.yaml'

with open(MAP_PATH, 'r', encoding='utf-8') as f:
    map_data = yaml.safe_load(f)

def find_node(parent, node_id):
    if parent.get('id') == node_id: return parent
    for child in parent.get('children', []):
        res = find_node(child, node_id)
        if res: return res
    return None

root = map_data['root']
rodadura = find_node(root, 'rodadura')
dinamica_rodadura = find_node(rodadura, 'dinamica-de-la-rodadura-sin-deslizamiento')

# 1. Update Rodadura children
# Remove old condicion and set unified one
rodadura['children'] = [c for c in rodadura['children'] if c['id'] != 'condicion-de-rodadura-sin-deslizamiento']
unified_cond = {
    'id': 'condicion-de-rodadura-sin-deslizamiento',
    'orden': 211340,
    'type': 'leaf',
    'titulo': 'Condición de rodadura sin deslizamiento',
    'titulo_en': 'No-Slip Rolling Condition',
    'descripcion': 'Relación cinemática v = ωR y diagnóstico de deslizamiento.',
    'description_en': 'Kinematic relationship v = ωR and slip diagnosis.',
    'ruta_relativa': 'fisica-clasica/mecanica/rotacion/rodadura/condicion-de-rodadura-sin-deslizamiento',
    'icon': '🛑',
    'graficos': ['Svg', 'Coord'],
    'niveles': {'es': ['BACHILLERATO', 'UNIVERSIDAD'], 'en': ['Upper Secondary', 'University']}
}
rodadura['children'].insert(0, unified_cond)

# 2. Update Dinamica sub-block
# Remove duplicate kinematics and add dynamics theory
dinamica_rodadura['children'] = [c for c in dinamica_rodadura['children'] if c['id'] != 'condicion-cinematica']

dynamics_theory = {
    'id': 'analisis-dinamico-de-la-rodadura',
    'orden:': 212451,
    'type': 'leaf',
    'titulo': 'Análisis dinámico de la rodadura',
    'titulo_en': 'Dynamic Analysis of Rolling',
    'descripcion': 'Balances de fuerzas y torques en cuerpos que ruedan sin deslizar.',
    'description_en': 'Force and torque balances for bodies rolling without slipping.',
    'ruta_relativa': 'fisica-clasica/mecanica/rotacion/rodadura/dinamica-de-la-rodadura-sin-deslizamiento/analisis-dinamico-de-la-rodadura',
    'icon': '⚖️',
    'graficos': ['Dcl', 'Svg'],
    'niveles': {'es': ['BACHILLERATO', 'UNIVERSIDAD'], 'en': ['Upper Secondary', 'University']}
}
# Ejemplos clasicos should stay but maybe update order
ejemplos = find_node(dinamica_rodadura, 'ejemplos-clasicos')
if ejemplos:
    ejemplos['orden'] = 212455

dinamica_rodadura['children'] = [dynamics_theory, ejemplos]

# 3. Update Bridge in Cinematica
cinematica = find_node(root, 'cinematica')
rot_cin = find_node(cinematica, 'rotacion')
bridge_rod = next((c for c in rot_cin['children'] if c['id'] == 'rodadura-cinematica-sin-deslizamiento'), None)
if bridge_rod:
    bridge_rod['link_to'] = 'fisica-clasica/mecanica/rotacion/rodadura/condicion-de-rodadura-sin-deslizamiento'

# Sort and Save
def sort_children(node):
    if 'children' in node:
        node['children'].sort(key=lambda x: x.get('orden', 999999))
        for child in node['children']:
            sort_children(child)

sort_children(root)

with open(MAP_PATH, 'w', encoding='utf-8') as f:
    yaml.dump(map_data, f, allow_unicode=True, sort_keys=False)

print("Map updated successfully.")
