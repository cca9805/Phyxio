import yaml

MAP_PATH = r'c:\Users\USER\Desktop\Phyxio\frontend\src\v2\map\phyxio-map.yaml'

with open(MAP_PATH, 'r', encoding='utf-8') as f:
    map_data = yaml.safe_load(f)

root = map_data['root']

def find_node(parent, node_id):
    if parent.get('id') == node_id: return parent
    for child in parent.get('children', []):
        res = find_node(child, node_id)
        if res: return res
    return None

def find_and_remove(parent, node_id):
    children = parent.get('children', [])
    for i, child in enumerate(children):
        if child['id'] == node_id: return children.pop(i)
        res = find_and_remove(child, node_id)
        if res: return res
    return None

fisica_clasica = find_node(root, 'fisica-clasica')
mecanica = find_node(fisica_clasica, 'mecanica')
cinematica = find_node(mecanica, 'cinematica')
dinamica = find_node(mecanica, 'dinamica')
trabajo_energia = find_node(mecanica, 'trabajo-y-energia')
cantidad_movimiento = find_node(mecanica, 'cantidad-de-movimiento')

# Remove the single links I added before
find_and_remove(cinematica, 'rotacion-link')
find_and_remove(dinamica, 'rotacion-link')
find_and_remove(trabajo_energia, 'energia-de-rotacion-link')
find_and_remove(cantidad_movimiento, 'momento-angular-link')

def create_bridge(id, titulo, titulo_en, link_to, orden, icon='🔗'):
    return {
        'id': id, 'orden': orden, 'type': 'bridge',
        'titulo': titulo, 'titulo_en': titulo_en,
        'link_to': link_to, 'icon': icon
    }

# Restore Cinematica/Rotacion
rot_cin = {
    'id': 'rotacion', 'orden': 211300, 'type': 'block',
    'titulo': 'Rotacion', 'titulo_en': 'Rotational Motion',
    'ruta_relativa': 'fisica-clasica/mecanica/cinematica/rotacion',
    'icon': '🔩', 'children': [
        create_bridge('magnitudes-angulares', 'Magnitudes angulares', 'Angular Quantities', 'fisica-clasica/mecanica/rotacion/fundamentos/magnitudes-angulares', 211310, '⚙️'),
        create_bridge('cinematica-rotacional', 'Cinematica rotacional', 'Rotational Kinematics', 'fisica-clasica/mecanica/rotacion/fundamentos/cinematica-rotacional', 211320, '🛞'),
        create_bridge('relacion-lineal-angular', 'Relacion lineal angular', 'Linear-Angular Relationships', 'fisica-clasica/mecanica/rotacion/fundamentos/relacion-lineal-angular', 211330, '📏'),
        create_bridge('rodadura-cinematica-sin-deslizamiento', 'Condición de rodadura', 'Rolling Condition', 'fisica-clasica/mecanica/rotacion/rodadura/condicion-de-rodadura-sin-deslizamiento', 211340, '🛞')
    ]
}
cinematica['children'].append(rot_cin)

# Restore Dinamica/Dinamica Rotacional
din_rot = {
    'id': 'dinamica-rotacional', 'orden': 212400, 'type': 'block',
    'titulo': 'Dinamica rotacional', 'titulo_en': 'Rotational Dynamics',
    'ruta_relativa': 'fisica-clasica/mecanica/dinamica/dinamica-rotacional',
    'icon': '🪢', 'children': [
        create_bridge('torque-momento', 'Torque / Momento de una fuerza', 'Torque (Moment)', 'fisica-clasica/mecanica/rotacion/dinamica/torque-momento', 212410, '📘'),
        create_bridge('segunda-ley-rotacional', 'Segunda Ley de la Dinámica Rotacional', "Newton's Second Law for Rotation", 'fisica-clasica/mecanica/rotacion/dinamica/segunda-ley-rotacional', 212420, '⚖️'),
        create_bridge('rotacion-con-rozamiento', 'Rozamiento en rotación', 'Rotation with Friction', 'fisica-clasica/mecanica/rotacion/dinamica/rozamiento-en-rotacion-y-rodadura', 212430, '🪢'),
        create_bridge('momento-de-inercia', 'Momento de inercia', 'Moment of Inertia', 'fisica-clasica/mecanica/rotacion/dinamica/momento-de-inercia', 212440, '🌀'),
        create_bridge('rodadura-sin-deslizamiento', 'Dinamica de la rodadura sin deslizamiento', 'Rolling without Slipping Dynamics', 'fisica-clasica/mecanica/rotacion/rodadura/dinamica-de-la-rodadura-sin-deslizamiento', 212450, '🏎️')
    ]
}
dinamica['children'].append(din_rot)

# Restore Trabajo y Energia/Energia de Rotacion
en_rot = {
    'id': 'energia-de-rotacion', 'orden': 214500, 'type': 'block',
    'titulo': 'Energia de rotacion', 'titulo_en': 'Rotational Energy',
    'ruta_relativa': 'fisica-clasica/mecanica/trabajo-y-energia/energia-de-rotacion',
    'icon': '🔋', 'children': [
        create_bridge('energia-cinetica-rotacional', 'Energia cinetica rotacional', 'Rotational Kinetic Energy', 'fisica-clasica/mecanica/rotacion/energia/energia-cinetica-rotacional', 214510, '🌀'),
        create_bridge('trabajo-y-torque', 'Trabajo y torque', 'Work and Torque', 'fisica-clasica/mecanica/rotacion/energia/trabajo-y-torque', 214520, '⚙️')
    ]
}
trabajo_energia['children'].append(en_rot)

# Restore Cantidad de Movimiento/Momento Angular
mom_ang = {
    'id': 'momento-angular', 'orden': 215600, 'type': 'block',
    'titulo': 'Momento angular', 'titulo_en': 'Angular Momentum',
    'ruta_relativa': 'fisica-clasica/mecanica/cantidad-de-movimiento/momento-angular',
    'icon': '🌪️', 'children': [
        create_bridge('definicion-momento-angular', 'Definición de Momento Angular', 'Definition of Angular Momentum', 'fisica-clasica/mecanica/rotacion/momento-angular/definicion-momento-angular', 215610, '🌪️'),
        create_bridge('conservacion-momento-angular', 'Conservación del Momento Angular', 'Conservation of Angular Momentum', 'fisica-clasica/mecanica/rotacion/momento-angular/conservacion-momento-angular', 215620, '⚖️'),
        create_bridge('precesion', 'Precesión', 'Precession', 'fisica-clasica/mecanica/rotacion/momento-angular/precesion', 215630, '🌀')
    ]
}
cantidad_movimiento['children'].append(mom_ang)

# Sort
for block in [cinematica, dinamica, trabajo_energia, cantidad_movimiento]:
    block['children'].sort(key=lambda x: x.get('orden', 999999))

with open(MAP_PATH, 'w', encoding='utf-8') as f:
    yaml.dump(map_data, f, allow_unicode=True, sort_keys=False)

print("Legacy bridge structure restored successfully.")
