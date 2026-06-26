import yaml, re

base = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/cinematica'
rot_base = 'frontend/src/data_v2_i18n/fisica-clasica/mecanica/rotacion/fundamentos'

def append_interp_target(filepath, target_id):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    if f'\n  {target_id}:\n' in content or content.startswith(f'  {target_id}:\n'):
        print(f'  Target {target_id} already exists in {filepath}')
        return
    block = f"""  {target_id}:
    summary_rules:
    - id: {target_id}_summary
      when: 'true'
      status: info
      text:
        es: {target_id} resume una lectura fisica relevante del leaf.
        en: {target_id} summarizes a relevant physical reading of the leaf.
    coherence_rules:
    - id: {target_id}_coherence
      when: 'true'
      status: ok
      text:
        es: Comprueba que {target_id} sea coherente con unidades y contexto.
        en: Check that {target_id} is coherent with units and context.
    physical_reading_rules:
    - id: {target_id}_physical
      when: 'true'
      status: info
      text:
        es: La lectura de {target_id} debe mostrar qué cambio físico produce.
        en: The reading of {target_id} must show which physical change it produces.
    model_validity_rules:
    - id: {target_id}_validity
      when: 'true'
      status: ok
      text:
        es: {target_id} solo es interpretable dentro del modelo elegido.
        en: {target_id} is interpretable only inside the chosen model.
    graph_rules:
    - id: {target_id}_graph
      when: 'true'
      status: info
      text:
        es: La grafica debe reflejar visualmente el papel de {target_id}.
        en: The graph must reflect the role of {target_id} visually.
    likely_errors:
    - id: {target_id}_warn
      when: 'true'
      status: warning
      text:
        es: No confundas {target_id} con otra magnitud cercana del problema.
        en: Do not confuse {target_id} with another nearby quantity in the problem.
    next_step_rules:
    - id: {target_id}_next
      when: 'true'
      status: info
      text:
        es: Continua con la siguiente magnitud del problema.
        en: Continue with the next magnitude in the problem.
"""
    with open(filepath, 'a', encoding='utf-8') as f:
        f.write(block)
    print(f'  Added target {target_id} to {filepath}')


def add_formula_to_interp_deps(filepath, formula_ids):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    data = yaml.safe_load(content)
    existing = data.get('dependencies', {}).get('formulas', []) or []
    to_add = [fid for fid in formula_ids if fid not in existing]
    if not to_add:
        print(f'  All formulas already in interp deps for {filepath}')
        return
    pattern = r'(  formulas:\n(?:  - \S+\n)*)'
    def repl(m):
        return m.group(0) + ''.join(f'  - {f}\n' for f in to_add)
    new_content, n = re.subn(pattern, repl, content, count=1)
    if n:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'  Added {to_add} to interp deps of {filepath}')
    else:
        print(f'  WARNING: could not update interp deps of {filepath}')


def add_formula_to_meta_deps(filepath, formula_ids):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    data = yaml.safe_load(content)
    existing = data.get('dependencies', {}).get('formulas', []) or []
    to_add = [fid for fid in formula_ids if fid not in existing]
    if not to_add:
        print(f'  All formulas already in meta deps for {filepath}')
        return
    # Try multiline list pattern
    pattern = r'(  formulas:\n(?:  - \S+\n)*)'
    def repl(m):
        return m.group(0) + ''.join(f'  - {f}\n' for f in to_add)
    new_content, n = re.subn(pattern, repl, content, count=1)
    if n:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'  Added {to_add} to meta deps of {filepath}')
        return
    # Try empty list pattern
    new_content = content.replace('  formulas: []\n',
        '  formulas:\n' + ''.join(f'  - {f}\n' for f in to_add))
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'  Added {to_add} to meta deps (from empty) of {filepath}')
        return
    print(f'  WARNING: could not update meta deps of {filepath}')
    snippet_start = content.find('formulas:')
    print(f'  Snippet: {repr(content[snippet_start:snippet_start+200])}')


def add_formula_ref_to_teoria(filepath, formula_ids):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    to_add = [fid for fid in formula_ids if f'{{{{f:{fid}}}}}' not in content]
    if not to_add:
        print(f'  All formula refs already in {filepath}')
        return
    additions = '\n'.join(f'{{{{f:{fid}}}}}' for fid in to_add)
    new_content = content.rstrip('\n') + '\n\n' + additions + '\n'
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'  Added {to_add} refs to {filepath}')


def append_magnitudes(filepath, leaf_id, mags_data):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    data = yaml.safe_load(content)
    existing_ids = [m['id'] for m in data.get('magnitudes', [])]
    for mag in mags_data:
        if mag['id'] in existing_ids:
            print(f"  Magnitude {mag['id']} already exists in {filepath}")
            continue
        entry = f"""- id: {mag['id']}
  symbol: {mag['symbol']}
  nombre:
    es: {mag['nombre_es']}
    en: {mag['nombre_en']}
  descripcion:
    es: {mag['desc_es']}
    en: {mag['desc_en']}
  unidad_si: {mag['unidad_si']}
  dimension: {mag['dimension']}
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - {leaf_id}
  common_mistake: No confundir {mag['id']} con otras magnitudes cercanas.
  typical_range: Depende del contexto fisico del problema.
  sign_behavior:
    has_sign: false
    meaning:
      es: El signo depende de la convencion elegida cuando procede.
      en: The sign depends on the chosen convention when applicable.
  zero_behavior:
    allowed: true
    meaning:
      es: El valor cero debe interpretarse segun el modelo y el contexto.
      en: Zero must be interpreted according to the model and context.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: Context-dependent
  interpretation_role:
    primary_for:
    - {leaf_id}
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: Usar {mag['id']} con una definicion estable antes de sustituir valores.
"""
        with open(filepath, 'a', encoding='utf-8') as f:
            f.write(entry)
        print(f"  Added magnitude {mag['id']} to {filepath}")


print("=== Processing mcua ===")
mcua = f'{base}/movimiento-circular/mcua'
append_interp_target(f'{mcua}/interpretacion.yaml', 'a')
add_formula_to_interp_deps(f'{mcua}/interpretacion.yaml', ['mcua_a_total'])
add_formula_to_meta_deps(f'{mcua}/meta.yaml', ['mcua_a_total'])
add_formula_ref_to_teoria(f'{mcua}/teoria.md', ['mcua_a_total'])
add_formula_ref_to_teoria(f'{mcua}/teoria.en.md', ['mcua_a_total'])

print("\n=== Processing movimiento-vertical-bajo-gravedad ===")
mvbg = f'{base}/movimiento-rectilineo/movimiento-vertical-bajo-gravedad'
append_magnitudes(f'{mvbg}/magnitudes.yaml', 'movimiento-vertical-bajo-gravedad', [
    {'id': 't_sub', 'symbol': 't_{sub}', 'nombre_es': 'tiempo de subida', 'nombre_en': 'rise time',
     'desc_es': 'Tiempo que tarda el movil en alcanzar la altura maxima.', 'desc_en': 'Time the body takes to reach maximum height.',
     'unidad_si': 's', 'dimension': 'T'},
    {'id': 'h_max', 'symbol': 'h_{max}', 'nombre_es': 'altura maxima', 'nombre_en': 'maximum height',
     'desc_es': 'Altura maxima alcanzada por el movil lanzado verticalmente hacia arriba.', 'desc_en': 'Maximum height reached by a vertically launched body.',
     'unidad_si': 'm', 'dimension': 'L'},
])
append_interp_target(f'{mvbg}/interpretacion.yaml', 't_sub')
append_interp_target(f'{mvbg}/interpretacion.yaml', 'h_max')
add_formula_to_interp_deps(f'{mvbg}/interpretacion.yaml', ['caida_libre_tiempo_subida', 'caida_libre_altura_maxima'])
add_formula_to_meta_deps(f'{mvbg}/meta.yaml', ['caida_libre_tiempo_subida', 'caida_libre_altura_maxima'])
add_formula_ref_to_teoria(f'{mvbg}/teoria.md', ['caida_libre_tiempo_subida', 'caida_libre_altura_maxima'])
add_formula_ref_to_teoria(f'{mvbg}/teoria.en.md', ['caida_libre_tiempo_subida', 'caida_libre_altura_maxima'])

print("\n=== Processing tiro-horizontal ===")
th = f'{base}/movimiento-en-dos-dimensiones/tiro-horizontal'
append_interp_target(f'{th}/interpretacion.yaml', 'vx')
add_formula_to_interp_deps(f'{th}/interpretacion.yaml', ['th_velocidad_horizontal'])
add_formula_to_meta_deps(f'{th}/meta.yaml', ['th_velocidad_horizontal'])
add_formula_ref_to_teoria(f'{th}/teoria.md', ['th_velocidad_horizontal'])
add_formula_ref_to_teoria(f'{th}/teoria.en.md', ['th_velocidad_horizontal'])

print("\n=== Processing tiro-parabolico ===")
tp = f'{base}/movimiento-en-dos-dimensiones/tiro-parabolico'
append_magnitudes(f'{tp}/magnitudes.yaml', 'tiro-parabolico', [
    {'id': 't_ap', 'symbol': 't_{ap}', 'nombre_es': 'tiempo al apice', 'nombre_en': 'time to apex',
     'desc_es': 'Tiempo que tarda el proyectil en alcanzar la altura maxima.', 'desc_en': 'Time for the projectile to reach maximum height.',
     'unidad_si': 's', 'dimension': 'T'},
    {'id': 'h_max', 'symbol': 'h_{max}', 'nombre_es': 'altura maxima', 'nombre_en': 'maximum height',
     'desc_es': 'Maxima altura vertical alcanzada por el proyectil.', 'desc_en': 'Maximum vertical height reached by the projectile.',
     'unidad_si': 'm', 'dimension': 'L'},
])
append_interp_target(f'{tp}/interpretacion.yaml', 'vx')
append_interp_target(f'{tp}/interpretacion.yaml', 'v')
append_interp_target(f'{tp}/interpretacion.yaml', 't_ap')
append_interp_target(f'{tp}/interpretacion.yaml', 'h_max')
add_formula_to_interp_deps(f'{tp}/interpretacion.yaml', ['tp_velocidad_horizontal', 'tp_tiempo_apice', 'tp_altura_maxima', 'tp_velocidad_total'])
add_formula_to_meta_deps(f'{tp}/meta.yaml', ['tp_velocidad_horizontal', 'tp_tiempo_apice', 'tp_altura_maxima', 'tp_velocidad_total'])
add_formula_ref_to_teoria(f'{tp}/teoria.md', ['tp_velocidad_horizontal', 'tp_tiempo_apice', 'tp_altura_maxima', 'tp_velocidad_total'])
add_formula_ref_to_teoria(f'{tp}/teoria.en.md', ['tp_velocidad_horizontal', 'tp_tiempo_apice', 'tp_altura_maxima', 'tp_velocidad_total'])

print("\n=== Processing cinematica-rotacional ===")
cr = f'{rot_base}/cinematica-rotacional'
append_interp_target(f'{cr}/interpretacion.yaml', 'delta_theta')
add_formula_to_interp_deps(f'{cr}/interpretacion.yaml', ['mcua_desplazamiento_medio'])
add_formula_to_meta_deps(f'{cr}/meta.yaml', ['mcua_desplazamiento_medio'])
add_formula_ref_to_teoria(f'{cr}/teoria.md', ['mcua_desplazamiento_medio'])
add_formula_ref_to_teoria(f'{cr}/teoria.en.md', ['mcua_desplazamiento_medio'])

print("\n=== Processing encuentros-y-persecuciones ===")
ep = f'{base}/movimiento-relativo/encuentros-y-persecuciones'
add_formula_to_interp_deps(f'{ep}/interpretacion.yaml', ['tiempo_encuentro_mru_mru_expandido'])
add_formula_to_meta_deps(f'{ep}/meta.yaml', ['tiempo_encuentro_mru_mru_expandido'])
add_formula_ref_to_teoria(f'{ep}/teoria.md', ['tiempo_encuentro_mru_mru_expandido'])
add_formula_ref_to_teoria(f'{ep}/teoria.en.md', ['tiempo_encuentro_mru_mru_expandido'])

print("\nAll done!")
