import re

def add_to_interp_magnitudes_deps(filepath, mag_ids):
    """Add magnitude IDs to interpretacion.yaml dependencies.magnitudes list"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    import yaml
    data = yaml.safe_load(content)
    existing = data.get('dependencies', {}).get('magnitudes', []) or []
    to_add = [mid for mid in mag_ids if mid not in existing]
    if not to_add:
        print(f'  All mags already in interp mag-deps for {filepath}')
        return
    pattern = r'(  magnitudes:\n(?:  - \S+\n)*)'
    def repl(m):
        return m.group(0) + ''.join(f'  - {mid}\n' for mid in to_add)
    new_content, n = re.subn(pattern, repl, content, count=1)
    if n:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'  Added {to_add} to interp mag-deps of {filepath}')
    else:
        print(f'  WARNING: no match for mag-deps in {filepath}')


def add_mag_refs_to_teoria(filepath, mag_ids):
    """Add [[id]] references to teoria.md"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    to_add = [mid for mid in mag_ids if f'[[{mid}]]' not in content]
    if not to_add:
        print(f'  All mag refs already in {filepath}')
        return
    additions = '\n'.join(f'[[{mid}]]' for mid in to_add)
    new_content = content.rstrip('\n') + '\n\n' + additions + '\n'
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'  Added {to_add} refs to {filepath}')


base = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica'
rot_base = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/rotacion/fundamentos'

print("=== mcua: add 'a' to mag-deps + [[a]] already done ===")
mcua = f'{base}/movimiento-circular/mcua'
# already done above

print("\n=== movimiento-vertical-bajo-gravedad ===")
mvbg = f'{base}/movimiento-rectilineo/movimiento-vertical-bajo-gravedad'
add_to_interp_magnitudes_deps(f'{mvbg}/interpretacion.yaml', ['t_sub', 'h_max'])
add_mag_refs_to_teoria(f'{mvbg}/teoria.md', ['t_sub', 'h_max'])
add_mag_refs_to_teoria(f'{mvbg}/teoria.en.md', ['t_sub', 'h_max'])

print("\n=== tiro-horizontal ===")
th = f'{base}/movimiento-en-dos-dimensiones/tiro-horizontal'
add_to_interp_magnitudes_deps(f'{th}/interpretacion.yaml', ['vx'])
add_mag_refs_to_teoria(f'{th}/teoria.md', ['vx'])
add_mag_refs_to_teoria(f'{th}/teoria.en.md', ['vx'])

print("\n=== tiro-parabolico ===")
tp = f'{base}/movimiento-en-dos-dimensiones/tiro-parabolico'
add_to_interp_magnitudes_deps(f'{tp}/interpretacion.yaml', ['vx', 'v', 't_ap', 'h_max'])
add_mag_refs_to_teoria(f'{tp}/teoria.md', ['t_ap', 'h_max'])
add_mag_refs_to_teoria(f'{tp}/teoria.en.md', ['t_ap', 'h_max'])

print("\n=== cinematica-rotacional ===")
cr = f'{rot_base}/cinematica-rotacional'
add_to_interp_magnitudes_deps(f'{cr}/interpretacion.yaml', ['delta_theta'])
# delta_theta already in magnitudes, but check if [[delta_theta]] in teoria.md
add_mag_refs_to_teoria(f'{cr}/teoria.md', ['delta_theta'])
add_mag_refs_to_teoria(f'{cr}/teoria.en.md', ['delta_theta'])

print("\nDone!")
