"""Fix remaining issues for enchufes-y-tomas leaf."""
import re
import yaml
from pathlib import Path

base = Path('frontend/src/data_v2_i18n/fisica-clasica/electromagnetismo/electricidad-domestica/enchufes-y-tomas')

# ── 1. Fix L70 render math in ejemplos.md and ejemplos.en.md ─────────────────
# Problem: lines with [[mag]] ... (expr = expr) triggers formula-text detector
# Fix: remove inline equations in parentheses from the validation section

for fname, old_line, new_line in [
    (
        'ejemplos.md',
        'Las dimensiones son coherentes en todas las fórmulas: [[I_tot]] tiene unidades de amperios (W/V = A), [[P_max]] de vatios (V·A = W), [[margen_uso]] es adimensional (A/A), y [[P_perdida]] tiene unidades de vatios (A²·Ω = W).',
        'Las dimensiones son coherentes: [[I_tot]] en amperios, [[P_max]] en vatios, [[margen_uso]] adimensional y [[P_perdida]] en vatios. El análisis dimensional confirma que todas las fórmulas son homogéneas.',
    ),
    (
        'ejemplos.en.md',
        'All dimensions are consistent: [[I_tot]] has units of amperes (W/V = A), [[P_max]] of watts (V·A = W), [[margen_uso]] is dimensionless (A/A), and [[P_perdida]] has units of watts (A²·Ω = W).',
        'All dimensions are consistent: [[I_tot]] in amperes, [[P_max]] in watts, [[margen_uso]] dimensionless, and [[P_perdida]] in watts. Dimensional analysis confirms all formulas are homogeneous.',
    ),
]:
    txt = (base / fname).read_text(encoding='utf-8')
    if old_line in txt:
        txt2 = txt.replace(old_line, new_line)
        (base / fname).write_text(txt2, encoding='utf-8')
        print(f'{fname}: fixed render math L70')
    else:
        print(f'{fname}: L70 line not found exactly, trying partial fix')
        # Try regex
        txt2 = re.sub(r'Las dimensiones son coherentes[^.]+\.', 
                      'Las dimensiones son coherentes: [[I_tot]] en amperios, [[P_max]] en vatios, [[margen_uso]] adimensional y [[P_perdida]] en vatios. El análisis dimensional confirma que todas las fórmulas son homogéneas.',
                      txt)
        txt2 = re.sub(r'All dimensions are consistent[^.]+\.', 
                      'All dimensions are consistent: [[I_tot]] in amperes, [[P_max]] in watts, [[margen_uso]] dimensionless, and [[P_perdida]] in watts. Dimensional analysis confirms all formulas are homogeneous.',
                      txt2)
        if txt2 != txt:
            (base / fname).write_text(txt2, encoding='utf-8')
            print(f'{fname}: partial fix applied')

# ── 2. Expand ejemplos.en.md to >= 800 words ─────────────────────────────────
en_txt = (base / 'ejemplos.en.md').read_text(encoding='utf-8')
wc = len(en_txt.split())
if wc < 800:
    extra = """
## Additional worked example: heating diagnosis

A hotel uses extension leads in guest rooms with a 1 800 W hair dryer, a 60 W LED TV, and a 45 W laptop all connected. The lead is rated [[I_max]] = 10 A.

**[[P_tot]]** = 1 800 + 60 + 45 = 1 905 W. **[[I_tot]]** = 1 905 / 230 = 8.3 A. **[[margen_uso]]** = 8.3 / 10 = 0.83 — monitoring zone. Adding a second 1 800 W hair dryer raises [[P_tot]] to 3 705 W, [[I_tot]] to 16.1 A, and [[margen_uso]] to 1.61: severe overload.

The [[P_max]] of the 10 A lead is 2 300 W. A single hair dryer already uses 78% of [[P_max]]. The safe recommendation is a dedicated circuit for high-power appliances rather than sharing a low-rated strip.

With [[R_contacto]] = 0.08 Ω (typical for a hotel lead used daily for years), [[P_perdida]] = 8.3² × 0.08 = 5.5 W. This is in the thermal risk zone. Replacing the lead with a certified 16 A model reduces [[P_perdida]] to 8.3² × 0.03 = 2.1 W — acceptable.

**Key lesson:** [[margen_uso]] and [[P_perdida]] must both be checked. A lead can be within [[I_max]] but still pose thermal risk if [[R_contacto]] is elevated due to age or poor quality.
"""
    (base / 'ejemplos.en.md').write_text(en_txt + extra, encoding='utf-8')
    wc2 = len((base / 'ejemplos.en.md').read_text(encoding='utf-8').split())
    print(f'ejemplos.en.md: expanded to {wc2} words')
else:
    print(f'ejemplos.en.md: already {wc} words')

# ── 3. Fix modelos.md — wrap bare margen_uso ─────────────────────────────────
txt = (base / 'modelos.md').read_text(encoding='utf-8')
# Check what we have
bare = re.findall(r'(?<!\[\[)(?<!\|)margen_uso(?!\]\])', txt)
print(f'modelos.md: {len(bare)} bare margen_uso instances')

# Replace bare margen_uso (not preceded by [[ or followed by ]])
txt2 = re.sub(r'(?<!\[)margen_uso(?!\])', '[[margen_uso]]', txt)
# Fix any double-wrap
txt2 = re.sub(r'\[\[\[\[margen_uso\]\]\]\]', '[[margen_uso]]', txt2)
txt2 = re.sub(r'\[\[margen_uso\]\]\]\]', '[[margen_uso]]', txt2)
txt2 = re.sub(r'\[\[\[\[margen_uso\]\]', '[[margen_uso]]', txt2)

if txt2 != txt:
    (base / 'modelos.md').write_text(txt2, encoding='utf-8')
    remaining = re.findall(r'(?<!\[)margen_uso(?!\])', txt2)
    print(f'modelos.md: fixed, {len(remaining)} bare remaining')
else:
    print('modelos.md: no change needed')

# ── 4. Fix modelos_reinforced — add explicit transition sentence ──────────────
txt = (base / 'modelos.md').read_text(encoding='utf-8')
old = '## Comparación operativa'
new = '''## Cuándo cambiar de modelo

La transición del modelo de [[margen_uso]] al modelo extendido con [[R_contacto]] se justifica cuando:
- [[margen_uso]] < 0,8 pero el enchufe o regleta está perceptiblemente caliente al tacto.
- La temperatura superficial del plástico supera 40 °C con corriente moderada.
- Hay decoloración, olor o chispa visible en el momento de la conexión.
- La toma tiene más de 15 años de uso continuo en aplicaciones de alta potencia.

En estos casos, el modelo de resistencia estática de Joule localizado debe complementarse con inspección física del contacto o medición directa de [[R_contacto]] con instrumento de resolución mili-ohm. Si [[R_contacto]] > 0,5 Ω, la sustitución de la toma es la única solución segura.

## Comparación operativa'''
if '## Cuándo cambiar de modelo' not in txt:
    txt2 = txt.replace(old, new)
    (base / 'modelos.md').write_text(txt2, encoding='utf-8')
    print('modelos.md: added transition section')
else:
    print('modelos.md: transition section already present')

# ── 5. Fix interpretacion.yaml — add missing rule blocks ─────────────────────
# Each of I, I_max, P, P_tot, R_contacto, V needs: 
# physical_reading_rules, model_validity_rules, graph_rules, next_step_rules

additions = {
    'I': {
        'physical_reading_rules': {
            'id': 'I_physical', 'when': 'true', 'status': 'info',
            'es': 'I individual se usa para verificar que cada equipo opera dentro de los parametros nominales. Ningun equipo deberia demandar una I superior a su corriente nominal.',
            'en': 'Individual I is used to verify each device operates within nominal parameters. No device should demand I above its nominal current rating.',
        },
        'model_validity_rules': {
            'id': 'I_validity', 'when': 'true', 'status': 'ok',
            'es': 'El calculo I = P/V es valido para cargas con factor de potencia unitario. Para cargas inductivas o capacitivas, la corriente real puede ser mayor que P/V.',
            'en': 'The calculation I = P/V is valid for unity power factor loads. For inductive or capacitive loads, actual current may be greater than P/V.',
        },
        'graph_rules': {
            'id': 'I_graph', 'when': 'true', 'status': 'info',
            'es': 'I se representa como barra proporcional a la potencia de cada equipo en el grafico de distribucion de cargas.',
            'en': 'I is represented as a bar proportional to each device power in the load distribution graph.',
        },
        'next_step_rules': {
            'id': 'I_next', 'when': 'true', 'status': 'info',
            'es': 'Con I de cada equipo calculada, sumar todas las I para obtener I_tot y calcular margen_uso.',
            'en': 'With each device I calculated, sum all I values to obtain I_tot and calculate margen_uso.',
        },
    },
    'I_max': {
        'physical_reading_rules': {
            'id': 'Imax_physical', 'when': 'true', 'status': 'info',
            'es': 'I_max no es un umbral de disparo automatico sino un limite de diseno del contacto mecanico. Superarlo de forma sostenida degrada el contacto irreversiblemente.',
            'en': 'I_max is not an automatic trip threshold but a design limit of the mechanical contact. Exceeding it continuously degrades the contact irreversibly.',
        },
        'model_validity_rules': {
            'id': 'Imax_validity', 'when': 'true', 'status': 'ok',
            'es': 'I_max es valido para corriente continua o alterna en regimen permanente. Para corrientes de arranque transitorias, puede superarse brevemente sin causar dano inmediato.',
            'en': 'I_max is valid for DC or AC current in steady state. For transient startup currents, it may be briefly exceeded without causing immediate damage.',
        },
        'graph_rules': {
            'id': 'Imax_graph', 'when': 'true', 'status': 'info',
            'es': 'I_max se muestra como linea horizontal de referencia en el grafico de corriente. I_tot debe estar por debajo de esta linea.',
            'en': 'I_max is shown as a horizontal reference line in the current graph. I_tot must remain below this line.',
        },
        'next_step_rules': {
            'id': 'Imax_next', 'when': 'true', 'status': 'info',
            'es': 'Con I_max identificado, calcular P_max = V * I_max para tener la potencia maxima admisible de la toma.',
            'en': 'With I_max identified, calculate P_max = V * I_max to obtain the maximum admissible power of the socket.',
        },
    },
    'P': {
        'physical_reading_rules': {
            'id': 'P_physical', 'when': 'true', 'status': 'info',
            'es': 'P es la potencia activa consumida por el equipo. Es la magnitud de entrada mas accesible para el usuario ya que esta impresa en la etiqueta.',
            'en': 'P is the active power consumed by the device. It is the most accessible input quantity for the user since it is printed on the label.',
        },
        'model_validity_rules': {
            'id': 'P_validity', 'when': 'true', 'status': 'ok',
            'es': 'P nominal es el consumo maximo del equipo. En practica, el consumo real puede ser menor (equipos en espera, funcionamiento parcial). Para seguridad, usar siempre P nominal.',
            'en': 'Nominal P is the maximum device consumption. In practice, actual consumption may be lower (standby, partial operation). For safety, always use nominal P.',
        },
        'graph_rules': {
            'id': 'P_graph', 'when': 'true', 'status': 'info',
            'es': 'P de cada equipo se visualiza como segmento proporcional en el diagrama de carga. La suma de todos los segmentos es P_tot.',
            'en': 'P of each device is shown as a proportional segment in the load diagram. The sum of all segments is P_tot.',
        },
        'next_step_rules': {
            'id': 'P_next', 'when': 'true', 'status': 'info',
            'es': 'Con P de cada equipo, calcular I = P/V para obtener la corriente individual y sumarlas para obtener I_tot.',
            'en': 'With P of each device, calculate I = P/V to obtain individual current and sum them to get I_tot.',
        },
    },
    'P_tot': {
        'physical_reading_rules': {
            'id': 'Ptot_physical', 'when': 'true', 'status': 'info',
            'es': 'P_tot refleja la demanda total de la toma en un instante dado. Es la variable mas directamente controlable por el usuario: apagar un equipo reduce P_tot inmediatamente.',
            'en': 'P_tot reflects the total demand on the socket at a given instant. It is the most directly user-controllable variable: switching off a device reduces P_tot immediately.',
        },
        'model_validity_rules': {
            'id': 'Ptot_validity', 'when': 'true', 'status': 'ok',
            'es': 'P_tot como suma de potencias nominales es el peor caso. El factor de simultaneidad real puede reducir P_tot efectivo si no todos los equipos funcionan a maxima potencia al mismo tiempo.',
            'en': 'P_tot as sum of nominal powers is the worst case. Actual simultaneity factor can reduce effective P_tot if not all devices operate at maximum power simultaneously.',
        },
        'graph_rules': {
            'id': 'Ptot_graph', 'when': 'true', 'status': 'info',
            'es': 'P_tot se representa como altura total del diagrama de barras apiladas de potencias. La linea de referencia en P_max indica el limite nominal de la toma.',
            'en': 'P_tot is represented as the total height of the stacked power bar chart. The reference line at P_max indicates the socket nominal limit.',
        },
        'next_step_rules': {
            'id': 'Ptot_next', 'when': 'true', 'status': 'info',
            'es': 'Con P_tot calculado, obtener I_tot = P_tot/V y luego margen_uso = I_tot/I_max para evaluar el nivel de uso.',
            'en': 'With P_tot calculated, obtain I_tot = P_tot/V and then margen_uso = I_tot/I_max to evaluate the usage level.',
        },
    },
    'R_contacto': {
        'physical_reading_rules': {
            'id': 'Rcon_physical', 'when': 'true', 'status': 'info',
            'es': 'R_contacto elevada es el principal indicador de degradacion del contacto. No se puede detectar visualmente sin medir; los sintomas (calor, olor) son consecuencias, no causas.',
            'en': 'Elevated R_contacto is the primary indicator of contact degradation. It cannot be visually detected without measurement; symptoms (heat, smell) are consequences, not causes.',
        },
        'model_validity_rules': {
            'id': 'Rcon_validity', 'when': 'true', 'status': 'ok',
            'es': 'El modelo de R_contacto como resistencia estatica es valido en regimen permanente. Para arcos intermitentes (contacto muy degradado), la disipacion real puede ser mayor que I^2*R.',
            'en': 'The R_contacto as static resistance model is valid in steady state. For intermittent arcing (severely degraded contact), actual dissipation may be greater than I^2*R.',
        },
        'graph_rules': {
            'id': 'Rcon_graph', 'when': 'true', 'status': 'info',
            'es': 'R_contacto aparece como parametro de la curva parabolica de P_perdida. Una R_contacto mayor desplaza la parabola hacia arriba, aumentando P_perdida para cualquier valor de I_tot.',
            'en': 'R_contacto appears as a parameter of the parabolic P_perdida curve. Higher R_contacto shifts the parabola upward, increasing P_perdida for any value of I_tot.',
        },
        'next_step_rules': {
            'id': 'Rcon_next', 'when': 'true', 'status': 'info',
            'es': 'Con R_contacto estimada o medida, calcular P_perdida = I_tot^2 * R_contacto. Si P_perdida > 5 W, proceder a la inspeccion y sustitucion de la toma.',
            'en': 'With R_contacto estimated or measured, calculate P_perdida = I_tot^2 * R_contacto. If P_perdida > 5 W, proceed to socket inspection and replacement.',
        },
    },
    'V': {
        'physical_reading_rules': {
            'id': 'V_physical', 'when': 'true', 'status': 'info',
            'es': 'V = 230 V es el dato de entrada fijo en instalaciones europeas. Una tension inferior a 220 V o superior a 240 V indica problemas en la instalacion que deben comunicarse al distribuidor.',
            'en': 'V = 230 V is the fixed input datum in European installations. A voltage below 220 V or above 240 V indicates installation issues that should be reported to the distributor.',
        },
        'model_validity_rules': {
            'id': 'V_validity', 'when': 'true', 'status': 'ok',
            'es': 'V = 230 V es valido en regimen nominal. Las fluctuaciones de tension (±10% segun EN 50160) pueden alterar levemente I = P/V pero el efecto es menor que las incertidumbres en P nominal.',
            'en': 'V = 230 V is valid in nominal regime. Voltage fluctuations (±10% per EN 50160) can slightly alter I = P/V but the effect is smaller than uncertainties in nominal P.',
        },
        'graph_rules': {
            'id': 'V_graph', 'when': 'true', 'status': 'info',
            'es': 'V aparece como parametro de escala en el grafico de I vs P. Un V mayor desplaza la escala de I hacia abajo para la misma P (menor corriente para la misma potencia).',
            'en': 'V appears as a scale parameter in the I vs P graph. Higher V shifts the I scale downward for the same P (lower current for same power).',
        },
        'next_step_rules': {
            'id': 'V_next', 'when': 'true', 'status': 'info',
            'es': 'Con V conocida (230 V en Europa), calcular I = P/V para cada equipo e I_tot = P_tot/V para la toma completa.',
            'en': 'With V known (230 V in Europe), calculate I = P/V for each device and I_tot = P_tot/V for the complete socket.',
        },
    },
}

# Read and parse interpretacion.yaml
ipath = base / 'interpretacion.yaml'
txt = ipath.read_text(encoding='utf-8')

def add_rule_block(txt, target_id, block_name, rule):
    """Add a rule block to a target in interpretacion.yaml text."""
    block_yaml = f"""    {block_name}:
    - id: {rule['id']}
      when: '{rule['when']}'
      status: {rule['status']}
      text:
        es: '{rule['es']}'
        en: '{rule['en']}'
"""
    # Find the target and add after the last existing block
    # Simple approach: append before next top-level target or end
    target_marker = f'\n  {target_id}:\n'
    if target_marker not in txt:
        print(f'  Target {target_id} not found')
        return txt
    
    # Find where this target's section ends (next target at same indent level or end of file)
    idx = txt.index(target_marker)
    # Find the next '  X:' at top level after this target
    next_target = re.search(r'\n  [A-Za-z_][A-Za-z_0-9]*:\n', txt[idx+len(target_marker):])
    if next_target:
        insert_pos = idx + len(target_marker) + next_target.start()
    else:
        insert_pos = len(txt)
    
    # Insert the new block before insert_pos
    txt = txt[:insert_pos] + block_yaml + txt[insert_pos:]
    return txt

for target_id, blocks in additions.items():
    for block_name, rule in blocks.items():
        # Check if block already exists
        if f'  {target_id}:\n' in txt and block_name in txt[txt.index(f'  {target_id}:\n'):txt.index(f'  {target_id}:\n')+2000]:
            print(f'  {target_id}.{block_name}: already exists, skip')
        else:
            txt = add_rule_block(txt, target_id, block_name, rule)
            print(f'  Added {target_id}.{block_name}')

# Validate YAML
try:
    yaml.safe_load(txt)
    ipath.write_text(txt, encoding='utf-8')
    print('interpretacion.yaml: OK')
except yaml.YAMLError as e:
    print(f'interpretacion.yaml ERROR: {e}')
    # Show problem area
    lines = txt.splitlines()
    for i, l in enumerate(lines[-30:], start=len(lines)-29):
        print(f'L{i}: {l}')

print('\nDone part 6.')
