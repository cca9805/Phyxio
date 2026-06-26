from __future__ import annotations
import re, sys, yaml
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MAP = ROOT / 'frontend' / 'src' / 'v2' / 'map' / 'phyxio-map.yaml'
REQ = {
  'teoria': ['## Contexto conceptual','## Nivel esencial','## Nivel formal','## Nivel estructural','## Interpretacion fisica profunda','### Orden de magnitud','## Metodo de resolucion personalizado','## Casos especiales y ejemplo extendido','## Preguntas reales del alumno','## Conexiones transversales y rutas de estudio','## Sintesis final'],
  'teoria_en': ['## Conceptual context','## Essential level','## Formal level','## Structural level','## Deep physical interpretation','### Order of magnitude','## Personalized resolution method','## Special cases and extended example','## Real student questions','## Cross-cutting connections and study paths','## Final synthesis'],
  'modelos': ['## 1. Modelo ideal','## 2. Modelo extendido','## 3. Dominio de validez cuantitativo','## 4. Senales de fallo del modelo','## 5. Comparacion con modelos alternativos'],
  'modelos_en': ['## 1. Ideal model','## 2. Extended model','## 3. Quantitative validity domain','## 4. Model failure signals','## 5. Comparison with alternative models'],
  'errores': ['## 1. Errores conceptuales','## 2. Errores de modelo','## 3. Errores matematicos','## 4. Errores de interpretacion','## 5. Regla de autocontrol rapido'],
  'errores_en': ['## 1. Conceptual errors','## 2. Model errors','## 3. Mathematical errors','## 4. Interpretation errors','## 5. Quick self-control rule'],
  'historia': ['## 1. Problema historico','## 2. Que no se entendia antes','## 3. Que cambio','## 4. Evolucion conceptual','## 5. Conexion con fisica moderna'],
  'historia_en': ['## 1. Historical problem','## 2. What was not understood before','## 3. What changed','## 4. Conceptual evolution','## 5. Connection with modern physics'],
}


def ry(p):
    text = Path(p).read_text(encoding='utf-8')
    try:
        return yaml.safe_load(text)
    except Exception:
        sanitized = text.replace('`', '')
        fixed_lines = []
        for line in sanitized.splitlines():
            m = re.match(r'^(\s*)(es|en):\s+(.+:.+)$', line)
            if m:
                indent, key, value = m.groups()
                value = value.strip()
                if not (value.startswith('"') or value.startswith("'") or value.startswith('{') or value.startswith('[')):
                    value = value.replace('"', '\\"')
                    line = f'{indent}{key}: "{value}"'
            fixed_lines.append(line)
        sanitized = '\n'.join(fixed_lines)
        return yaml.safe_load(sanitized)


def wy(p,d):
    Path(p).write_text(yaml.safe_dump(d,sort_keys=False,allow_unicode=True),encoding='utf-8')


def walk(n,parent=None):
    yield n,parent
    for c in n.get('children',[]) or []:
        yield from walk(c,n.get('id'))


def find_node(mid):
    data=ry(MAP)
    for n,p in walk(data['root']):
        if n.get('id')==mid:
            return n,p
    raise KeyError(mid)


def desc(text, fallback):
    if isinstance(text,dict):
        return text
    if isinstance(text,str) and text.strip():
        return {'es':text,'en':text}
    return {'es':fallback,'en':fallback}


def text_in_lang(value, lang, fallback):
    if isinstance(value, dict):
        candidate = value.get(lang) or value.get('es') or value.get('en')
    else:
        candidate = value
    if isinstance(candidate, str) and candidate.strip():
        return candidate
    return fallback


def sanitize_equation(eq: str) -> str:
    eq = (eq or '').strip()
    eq = eq.replace('GM', 'G*M').replace('P_{aparente}', 'Pap')
    eq = eq.replace('atan(', 'arctan(')
    eq = eq.replace('T_tramo_1', 'T_1').replace('T_tramo_2', 'T_2')
    if ' opposes ' in eq and 'v_rel' in eq:
        return 'fk*v_rel <= 0'
    if '=> desliza' in eq:
        eq = eq.replace('=> desliza', '')
    eq = eq.replace('abs(fs)', 'fs').replace('abs(Ft)', 'Ft').replace('abs(x)', 'x')
    eq = re.sub(r'\s+', ' ', eq).strip()
    return eq


def sanitize_latex(latex: str) -> str:
    latex = (latex or '').strip()
    latex = latex.replace('GM', 'G M').replace('P_{aparente}', 'Pap')
    latex = re.sub(r'\\text\{[^}]*\}', '', latex)
    latex = latex.replace('\\lesssim', '\\le')
    latex = latex.replace('T_{tramo\\,1}', 'T_1').replace('T_{tramo\\,2}', 'T_2')
    latex = latex.replace('x_{eq}', 'x_eq').replace('U_{el}', 'Uel').replace('F_{el}', 'Fel')
    latex = latex.replace('|f_s|', 'f_s').replace('|F_t|', 'F_t').replace('|F_{el}|', 'Fm')
    latex = re.sub(r'\s+', ' ', latex).strip()
    return latex


def sanitize_constraint_messages(rearrangements):
    clean = []
    for r in rearrangements or []:
        rr = dict(r)
        rr['equation'] = sanitize_equation(str(rr.get('equation') or ''))
        rr['latex'] = sanitize_latex(str(rr.get('latex') or rr.get('equation') or ''))
        constraints = []
        for c in rr.get('constraints', []) or []:
            expr = str((c or {}).get('expr') or 'true')
            constraints.append({
              'expr': expr,
              'message': {'es': expr, 'en': expr},
            })
        rr['constraints'] = constraints
        clean.append(rr)
    return clean


def dimension(unit):
    u=str(unit or '').replace(' ','')
    return {
      'N':'LMT^{-2}','kg':'M','m/s^2':'LT^{-2}','m':'L','rad':'1','1':'1','N*m^2/kg^2':'L^3M^{-1}T^{-2}','N/m':'MT^{-2}','J':'L^2MT^{-2}'
    }.get(u,'1')


def cat(mid, unit):
    unit = str(unit or '')
    if mid in {'g','g0','mu','mu_s','mu_k'}: return 'parameter' if mid.startswith('mu') else 'field'
    if mid in {'G'}: return 'constant'
    if unit=='kg': return 'fundamental'
    if mid in {'theta','h','r','R','x','L0','DeltaL'}: return 'geometric'
    return 'derived'


def role(mid):
    return {
      'P':'gravitational_force','Pap':'support_reading','N':'contact_force','T':'tension_force','f':'friction_force','f_s':'friction_force','f_k':'friction_force','mu':'model_parameter','mu_s':'model_parameter','mu_k':'model_parameter','g':'field_strength','g0':'reference_value','a':'frame_effect','k':'elastic_constant','F_e':'restoring_force'
    }.get(mid,'physical_quantity')


def vectorish(sym, mid):
    s=(sym or '').lower()
    return 'vec' in s or mid in {'P','N','T','F','F_e'}


def clean_tags(tags):
    out=[]
    if isinstance(tags,list):
        for t in tags:
            if isinstance(t,dict):
                v=t.get('es') or t.get('en')
            else:
                v=t
            if isinstance(v,str) and v.strip(): out.append(v.strip())
    return out[:6]


def route_subblock(route: str) -> str:
    parts = [p for p in str(route or '').split('/') if p]
    try:
        idx = parts.index('mecanica')
        if idx + 1 < len(parts):
            return parts[idx + 1]
    except ValueError:
        pass
    return 'dinamica'


def parse_difficulty(value, default=2):
    if isinstance(value, int):
        return max(1, min(5, value))
    if isinstance(value, str):
        text = value.strip().lower()
        mapping = {
          'muy baja': 1,
          'baja': 2,
          'media': 3,
          'medio': 3,
          'alta': 4,
          'avanzada': 5,
          'avanzado': 5,
        }
        if text in mapping:
            return mapping[text]
        m = re.search(r'\d+', text)
        if m:
            return max(1, min(5, int(m.group(0))))
    return default


def parse_positive_int(value, default):
    if isinstance(value, int) and value > 0:
        return value
    if isinstance(value, str):
        m = re.search(r'\d+', value)
        if m:
            parsed = int(m.group(0))
            if parsed > 0:
                return parsed
    return default


def enrich_meta(leaf):
    m=ry(leaf/'meta.yaml') or {}
    node,parent=find_node(m.get('id') or leaf.name)
    subbloque = route_subblock(node.get('ruta_relativa'))
    descripcion_es = text_in_lang(
      m.get('descripcion') or m.get('descripcion_corta'),
      'es',
      node.get('descripcion','Contenido sobre '+node['titulo'])
    )
    descripcion_en = text_in_lang(
      m.get('description_en') or m.get('descripcion_corta'),
      'en',
      node.get('description_en','Content about '+node['titulo_en'])
    )
    meta={
      'id': node['id'],
      'nombre': {'es': node['titulo'], 'en': node['titulo_en']},
      'area': 'fisica-clasica',
      'bloque': 'mecanica',
      'subbloque': subbloque,
      'parent_id': parent,
      'ruta_relativa': node['ruta_relativa'],
      'orden': node['orden'],
      'type': 'leaf',
      'niveles': node['niveles'],
      'icon': node['icon'],
      'descripcion': descripcion_es.strip().split('\n')[0][:140],
      'description_en': descripcion_en.strip().split('\n')[0][:140],
      'tags': clean_tags(m.get('tags',[])) or [subbloque],
      'prerequisitos': m.get('prerequisitos') or [],
      'graficos': node.get('graficos',[]) or ['Coord'],
      'physical_role': node['physical_role'],
      'dificultad': parse_difficulty(m.get('dificultad'), 2),
      'tiempo_estimado_min': parse_positive_int(m.get('tiempo_estimado_min'), 35),
      'interpretacion': {
        'enabled': True,'archivo': 'interpretacion.yaml',
        'ui': {'inline_calculator': True,'inline_graph': True,'dedicated_tab': True,'tab_label': {'es': 'Interpretacion','en': 'Interpretation'}},
        'mini_graph': {'enabled': True,'preferred_type': node.get('graficos',['Coord'])[0] if node.get('graficos') else 'Coord'},
        'output_policy': {'show_summary_first': True,'max_inline_messages': 3,'show_warnings': True,'show_likely_errors': True},
        'dependencies': {'requires_formulas': True,'requires_magnitudes': True,'supports_graph_binding': True},
      }
    }
    meta['descripcion']=' '.join(meta['descripcion'].split()[:20])
    meta['description_en']=' '.join(meta['description_en'].split()[:20])
    wy(leaf/'meta.yaml', meta)
    return meta


def enrich_magnitudes(leaf, meta):
    data=ry(leaf/'magnitudes.yaml') or {}
    if isinstance(data, dict):
        items=data.get('magnitudes') or data or []
    elif isinstance(data, list):
        items=data
    else:
        items=[]
    out=[]
    for i,m in enumerate(items):
        mid=str(m.get('id') or f'x{i+1}')
        sym=m.get('symbol') or mid
        unit=m.get('unidad_si') or '1'
        iv=vectorish(sym,mid)
        out.append({
          'id': mid,'symbol': sym,'nombre': desc(m.get('nombre'),mid),'descripcion': desc(m.get('descripcion'),f'Magnitud asociada a {meta["nombre"]["es"].lower()}.'),
          'unidad_si': unit,'dimension': dimension(unit),'is_vector': iv,'components': [f'{mid}_x',f'{mid}_y'] if iv else None,
          'category': cat(mid,unit),'physical_role': role(mid),'used_in': [meta['id']],
          'common_mistake': f'Confundir {mid} con otra magnitud cercana dentro de {meta["nombre"]["es"].lower()}.',
          'typical_range': 'Depende del contexto fisico del problema.',
          'sign_behavior': {'has_sign': iv or mid in {'a','theta'}, 'meaning': {'es': 'El signo depende de la convencion elegida cuando procede.', 'en': 'The sign depends on the chosen convention when applicable.'}},
          'zero_behavior': {'allowed': True, 'meaning': {'es': 'El valor cero debe interpretarse segun el modelo y el contexto.', 'en': 'Zero must be interpreted according to the model and context.'}},
          'value_nature': {'kind': 'vector_projection' if iv else 'scalar', 'nonnegative_only': not (iv or mid in {'a','theta'}), 'expected_interval': 'Context-dependent'},
          'interpretation_role': {'primary_for': [meta['id']], 'secondary_for': []},
          'graph_binding': {'channels': []},
          'pedagogical_notes': f'Usar {mid} con una definicion estable antes de sustituir valores.'
        })
    wy(leaf/'magnitudes.yaml', {'version':1,'magnitudes':out})
    return out


def target_from_formula(f, mids):
    for r in f.get('rearrangements',[]) or []:
        t=r.get('target')
        if t in mids: return t
    eq=str(f.get('equation') or '')
    lhs=eq.split('=')[0]
    toks=re.findall(r'[A-Za-z_][A-Za-z0-9_]*', lhs)
    for t in toks:
        if t in mids: return t
    return mids[0]


def enrich_formulas(leaf, meta, mags):
    data=ry(leaf/'formulas.yaml') or {}
    if isinstance(data, dict):
        items=data.get('formulas') or []
    elif isinstance(data, list):
        items=data
    else:
        items=[]
    mids=[m['id'] for m in mags]
    out=[]
    for i,f in enumerate(items):
        fid=f.get('id') or f'f{i+1}'
        target=target_from_formula(f,mids)
        calc=f.get('calculable')
        if calc is None:
            calc=(f.get('status')=='calculable')
        eq=sanitize_equation(str(f.get('equation') or 'x = x'))
        latex=sanitize_latex(str(f.get('latex') or eq))
        rearrangements = sanitize_constraint_messages(f.get('rearrangements') or [])
        out.append({
          'id': fid,'title': desc(f.get('title'),fid.replace('-',' ')),'equation': eq,'latex': latex,
          'rearrangements': rearrangements,'category': f.get('category') or 'operative','relation_type': f.get('relation_type') or 'derived_relation',
          'physical_meaning': desc(f.get('physical_meaning'), f'Relacion fisica usada en {meta["nombre"]["es"].lower()}.'),
          'constraints': f.get('constraints') or f.get('nota_dominio_validez') or 'Aplicar solo dentro del modelo descrito.',
          'validity': desc(f.get('validity'), 'Valida dentro del dominio de aplicacion del modelo usado.'),
          'dimension_check': f.get('dimension_check') or 'Comprobar unidades antes de interpretar.',
          'calculable': bool(calc),'motivo_no_calculable': f.get('motivo_no_calculable') if not calc else None,
          'used_in': f.get('used_in') or [meta['id']],'interpretation_tags': f.get('interpretation_tags') or [meta['id']],
          'result_semantics': {'target': target,'meaning': f'Resulta util para interpretar {target} en el contexto del leaf.'},
          'domain_checks': f.get('domain_checks') or [{'expr':'true','message':{'es':'Verifica que los datos pertenezcan al dominio del modelo.','en':'Check that the data belong to the model domain.'}}],
          'coherence_checks': f.get('coherence_checks') or [{'expr':'true','message':{'es':'Revisa que el resultado tenga sentido fisico.','en':'Check that the result makes physical sense.'}}],
          'graph_implications': f.get('graph_implications') or ['La grafica debe reflejar cambios coherentes con la formula.'],
          'pedagogical_triggers': f.get('pedagogical_triggers') or [{'when':'true','message':{'es':'Comprueba signos, unidades y significado del resultado.','en':'Check signs, units, and meaning of the result.'}}],
        })
    wy(leaf/'formulas.yaml', {'version':1,'formulas':out})
    return out


def ensure_extra_magnitudes(leaf, meta, mags, forms):
    mids={m['id'] for m in mags}
    extras=[]
    for token in ['Pap']:
        if token not in mids and any(token in (f['equation'] + ' ' + f['latex']) for f in forms):
            extras.append({
              'id': token,'symbol': token,'nombre': {'es': 'magnitud derivada', 'en': 'derived magnitude'},
              'descripcion': {'es': f'Magnitud auxiliar usada en {meta["nombre"]["es"].lower()}.', 'en': f'Auxiliary quantity used in {meta["nombre"]["en"].lower()}.'},
              'unidad_si': '1','dimension': '1','is_vector': False,'components': None,'category': 'derived','physical_role': 'physical_quantity','used_in': [meta['id']],
              'common_mistake': f'Usar {token} sin definir su papel dentro del modelo.','typical_range': 'Depende del contexto fisico del problema.',
              'sign_behavior': {'has_sign': False, 'meaning': {'es': 'Interpretar el signo solo si el modelo lo exige.', 'en': 'Interpret the sign only if the model requires it.'}},
              'zero_behavior': {'allowed': True, 'meaning': {'es': 'El cero puede ser un caso limite del modelo.', 'en': 'Zero can be a limit case of the model.'}},
              'value_nature': {'kind': 'scalar', 'nonnegative_only': False, 'expected_interval': 'Context-dependent'},
              'interpretation_role': {'primary_for': [meta['id']], 'secondary_for': []},'graph_binding': {'channels': []},
              'pedagogical_notes': f'Definir {token} antes de usarlo en la interpretacion.',
            })
    if extras:
        mags = mags + extras
        wy(leaf/'magnitudes.yaml', {'version':1,'magnitudes':mags})
    return mags


def build_interpretation(leaf, meta, mags, forms):
    mids=[m['id'] for m in mags]
    fids=[f['id'] for f in forms]
    targets=[]
    for f in forms:
        t=f['result_semantics']['target']
        if t in mids and t not in targets: targets.append(t)
        for r in f.get('rearrangements',[]) or []:
            rt=r.get('target')
            if rt in mids and rt not in targets: targets.append(rt)
    if not targets: targets=mids[:3]
    def block(t):
        return {
          'summary_rules':[{'id':f'{t}_summary','when':'true','status':'info','text':{'es':f'{t} resume una lectura fisica relevante del leaf.','en':f'{t} summarizes a relevant physical reading of the leaf.'}}],
          'coherence_rules':[{'id':f'{t}_coherence','when':'true','status':'ok','text':{'es':f'Comprueba que {t} sea coherente con unidades y contexto.','en':f'Check that {t} is coherent with units and context.'}}],
          'physical_reading_rules':[{'id':f'{t}_physical','when':'true','status':'info','text':{'es':f'La lectura de {t} debe conectarse con el fenomeno fisico descrito.','en':f'The reading of {t} must connect with the described physical phenomenon.'}}],
          'model_validity_rules':[{'id':f'{t}_validity','when':'true','status':'ok','text':{'es':f'{t} solo es interpretable dentro del modelo elegido.','en':f'{t} is interpretable only inside the chosen model.'}}],
          'graph_rules':[{'id':f'{t}_graph','when':'true','status':'info','text':{'es':f'La grafica debe reflejar visualmente el papel de {t}.','en':f'The graph must reflect the role of {t} visually.'}}],
          'likely_errors':[{'id':f'{t}_warn','when':'true','status':'warning','text':{'es':f'No confundas {t} con otra magnitud cercana del problema.','en':f'Do not confuse {t} with another nearby quantity in the problem.'}}],
          'next_step_rules':[{'id':f'{t}_next','when':'true','status':'info','text':{'es':f'Usa {t} para enlazar con el siguiente paso de interpretacion.','en':f'Use {t} to connect with the next interpretation step.'}}],
        }
    data={'version':2,'id':f'interpretacion-{meta["id"]}','leaf_id':meta['id'],'nombre':{'es':f'Interpretacion de {meta["nombre"]["es"]}','en':f'Interpretation of {meta["nombre"]["en"]}'},'scope':{'area':'fisica-clasica','bloque':'mecanica','subbloque':meta.get('subbloque') or route_subblock(meta.get('ruta_relativa')),'parent_id':meta['parent_id'],'ruta_relativa':meta['ruta_relativa']},'dependencies':{'formulas':fids,'magnitudes':mids},'output_contract':{'sections':['summary','physical_reading','coherence','model_validity','graph_reading','likely_errors','next_step']},'result_blocks':{'summary':{'title':{'es':'Resumen fisico','en':'Physical summary'}},'physical_reading':{'title':{'es':'Lectura fisica','en':'Physical reading'}},'coherence':{'title':{'es':'Coherencia','en':'Coherence'}},'model_validity':{'title':{'es':'Validez del modelo','en':'Model validity'}},'graph_reading':{'title':{'es':'Lectura grafica','en':'Graph reading'}},'likely_errors':{'title':{'es':'Errores probables','en':'Likely errors'}},'next_step':{'title':{'es':'Siguiente paso','en':'Next step'}}},'targets':{t:block(t) for t in targets}}
    wy(leaf/'interpretacion.yaml',data)


def first_formula(forms):
    if forms:
        return forms[0].get('equation') or forms[0].get('latex') or 'x = x'
    return 'x = x'


def inline_math(expr):
    text = str(expr or '').strip()
    if not text:
        return text
    if text.startswith('$') and text.endswith('$'):
        return text
    if any(token in text for token in ['\\', '=', '!=', '>=', '<=', '^', '_', 'sum', 'sqrt', '*', '/']):
        return f'${text}$'
    return text


def first_target(forms):
    if forms:
        return forms[0].get('result_semantics', {}).get('target') or 'x'
    return 'x'


def force_profile(meta):
    route = meta['ruta_relativa']
    leaf_id = meta['id']
    generic = {
      'focus_es': 'describir como una interaccion mecanica modifica el estado del sistema',
      'focus_en': 'describe how a mechanical interaction modifies the state of the system',
      'system_es': 'el cuerpo o conjunto de cuerpos cuyo equilibrio o movimiento se estudia',
      'system_en': 'the body or set of bodies whose equilibrium or motion is being studied',
      'environment_es': 'las acciones del entorno que aparecen como fuerzas, restricciones o parametros',
      'environment_en': 'the external actions that appear as forces, constraints, or parameters',
      'diagram_es': 'el diagrama de cuerpo libre y la eleccion coherente de ejes',
      'diagram_en': 'the free-body diagram and a coherent axis choice',
      'control_es': 'comparar direccion, modulo esperado y dominio de validez antes de calcular',
      'control_en': 'compare direction, expected magnitude, and validity domain before calculating',
      'limit_es': 'cambian las hipotesis de rigidez, contacto, velocidad o marco de referencia',
      'limit_en': 'the assumptions about rigidity, contact, speed, or reference frame change',
      'application_es': 'problemas de laboratorio, ingenieria elemental y lectura de situaciones reales',
      'application_en': 'laboratory problems, elementary engineering, and real-world readings',
      'contrast_es': 'la fuerza no es un dato aislado; depende de geometria, interaccion y modelo',
      'contrast_en': 'the force is not an isolated datum; it depends on geometry, interaction, and model',
      'question_es': 'que agente produce la interaccion y sobre que cuerpo actua realmente',
      'question_en': 'which agent produces the interaction and on which body it actually acts',
    }
    if '/cinematica/' in route:
        generic.update({
          'focus_es': 'describir el movimiento con una eleccion explicita de magnitudes, ejes y condiciones iniciales',
          'focus_en': 'describe motion with an explicit choice of quantities, axes, and initial conditions',
          'system_es': 'el movil o conjunto de moviles cuya trayectoria se modela',
          'system_en': 'the moving body or set of moving bodies whose trajectory is modeled',
          'environment_es': 'el marco de referencia, la geometria de la trayectoria y las condiciones iniciales del problema',
          'environment_en': 'the reference frame, the path geometry, and the initial conditions of the problem',
          'diagram_es': 'la trayectoria, los ejes elegidos y la lectura de graficas o componentes',
          'diagram_en': 'the path, the chosen axes, and the reading of graphs or components',
          'control_es': 'comparar signo, orden de magnitud y forma de la trayectoria antes de cerrar el calculo',
          'control_en': 'compare sign, order of magnitude, and path shape before closing the calculation',
          'limit_es': 'cambian el marco de referencia, la dimensionalidad o la hipotesis sobre aceleracion constante',
          'limit_en': 'the reference frame, dimensionality, or constant-acceleration assumption changes',
          'application_es': 'trayectorias, lanzamientos, maniobras, graficas temporales y estimaciones de alcance',
          'application_en': 'trajectories, launches, maneuvers, time graphs, and range estimates',
          'contrast_es': 'la cinematica no explica la causa del movimiento; organiza su descripcion cuantitativa',
          'contrast_en': 'kinematics does not explain the cause of motion; it organizes its quantitative description',
          'question_es': 'que variable cambia, en que eje se mide y con que convencion de signos debe leerse',
          'question_en': 'which variable changes, along which axis it is measured, and under which sign convention it must be read',
        })
    specific = {
      'magnitudes-cinematicas': {
        'focus_es': 'distinguir posicion, desplazamiento, trayectoria, rapidez, velocidad y aceleracion sin mezclarlas',
        'focus_en': 'distinguish position, displacement, path, speed, velocity, and acceleration without mixing them',
        'environment_es': 'el marco de referencia y la variable temporal con la que se describe el movimiento',
        'environment_en': 'the reference frame and time variable used to describe motion',
        'diagram_es': 'la diferencia entre un punto de posicion, una trayectoria y un vector desplazamiento',
        'diagram_en': 'the difference between a position point, a path, and a displacement vector',
        'limit_es': 'se confunden magnitudes escalares con vectoriales o se cambia de referencia sin avisar',
        'limit_en': 'scalar and vector quantities are confused or the reference frame is changed without warning',
      },
      'analisis-grafico-del-movimiento': {
        'focus_es': 'interpretar pendientes, areas y curvaturas como informacion fisica sobre el movimiento',
        'focus_en': 'interpret slopes, areas, and curvature as physical information about motion',
        'environment_es': 'las representaciones x-t, v-t y a-t construidas para el mismo proceso',
        'environment_en': 'the x-t, v-t, and a-t representations built for the same process',
        'diagram_es': 'la lectura cruzada entre grafica de posicion, velocidad y aceleracion',
        'diagram_en': 'the crossed reading between position, velocity, and acceleration graphs',
        'limit_es': 'se identifica altura de la curva con velocidad o area con cualquier magnitud sin criterio',
        'limit_en': 'curve height is identified with speed or area with any magnitude without criterion',
      },
      'mru': {
        'focus_es': 'describir trayectorias rectilineas con velocidad constante y aceleracion nula',
        'focus_en': 'describe rectilinear paths with constant velocity and zero acceleration',
        'environment_es': 'un eje recto, condiciones iniciales claras y un regimen sin cambios de velocidad',
        'environment_en': 'a straight axis, clear initial conditions, and a regime without speed changes',
        'diagram_es': 'la recta en x-t y la constancia de la grafica v-t',
        'diagram_en': 'the straight line in x-t and the constancy of the v-t graph',
        'limit_es': 'aparece aceleracion, cambio de sentido no modelado o se pierde la rectilineidad',
        'limit_en': 'acceleration appears, an unmodeled direction change occurs, or rectilinearity is lost',
      },
      'mrua': {
        'focus_es': 'relacionar posicion, velocidad y tiempo cuando la aceleracion es constante',
        'focus_en': 'relate position, velocity, and time when acceleration is constant',
        'environment_es': 'un eje recto con aceleracion uniforme y condiciones iniciales bien definidas',
        'environment_en': 'a straight axis with uniform acceleration and well-defined initial conditions',
        'diagram_es': 'la parabola en x-t y la recta en v-t caracteristicas del modelo',
        'diagram_en': 'the x-t parabola and the v-t straight line characteristic of the model',
        'limit_es': 'la aceleracion deja de ser constante o el movimiento ya no puede tratarse en una dimension',
        'limit_en': 'acceleration stops being constant or motion can no longer be treated in one dimension',
      },
      'movimiento-vertical-bajo-gravedad': {
        'focus_es': 'leer el movimiento vertical como un caso unidimensional gobernado por la aceleracion gravitatoria',
        'focus_en': 'read vertical motion as a one-dimensional case governed by gravitational acceleration',
        'environment_es': 'el campo gravitatorio terrestre cerca de la superficie y un eje vertical elegido con cuidado',
        'environment_en': 'the terrestrial gravitational field near the surface and a carefully chosen vertical axis',
        'diagram_es': 'la subida, el punto mas alto y la bajada con signos coherentes en cada magnitud',
        'diagram_en': 'the ascent, the highest point, and the descent with coherent signs in each quantity',
        'limit_es': 'se ignora el signo de g, cambia el sentido positivo o ya no puede despreciarse el aire',
        'limit_en': 'the sign of g is ignored, the positive direction changes, or air can no longer be neglected',
      },
      'mcu': {
        'focus_es': 'describir un movimiento circular con rapidez constante y cambio continuo de direccion',
        'focus_en': 'describe circular motion with constant speed and continuously changing direction',
        'environment_es': 'una trayectoria circular, un centro de giro y una parametrizacion angular uniforme',
        'environment_en': 'a circular path, a center of rotation, and a uniform angular parametrization',
        'diagram_es': 'la relacion entre periodo, frecuencia, velocidad angular y aceleracion centripeta',
        'diagram_en': 'the relation between period, frequency, angular speed, and centripetal acceleration',
        'limit_es': 'la rapidez deja de ser constante o se confunde la variable angular con la lineal',
        'limit_en': 'speed stops being constant or angular and linear variables are confused',
      },
      'mcua': {
        'focus_es': 'extender el movimiento circular al caso con aceleracion angular constante',
        'focus_en': 'extend circular motion to the case with constant angular acceleration',
        'environment_es': 'una trayectoria circular con cambio uniforme de velocidad angular',
        'environment_en': 'a circular path with a uniform change of angular speed',
        'diagram_es': 'la evolucion simultanea de theta, omega y alpha y su traduccion lineal',
        'diagram_en': 'the simultaneous evolution of theta, omega, and alpha and their linear translation',
        'limit_es': 'se aplica el modelo a un regimen donde alpha ya no es constante',
        'limit_en': 'the model is applied to a regime where alpha is no longer constant',
      },
      'magnitudes-angulares': {
        'focus_es': 'distinguir desplazamiento angular, velocidad angular, aceleracion angular y periodo',
        'focus_en': 'distinguish angular displacement, angular speed, angular acceleration, and period',
        'environment_es': 'la descripcion angular de un giro alrededor de un eje',
        'environment_en': 'the angular description of a rotation around an axis',
        'diagram_es': 'el paso entre radianes, vueltas, frecuencia y variables temporales',
        'diagram_en': 'the conversion between radians, revolutions, frequency, and time variables',
        'limit_es': 'se mezclan grados y radianes o magnitudes angulares y lineales sin conversion',
        'limit_en': 'degrees and radians are mixed or angular and linear quantities are used without conversion',
      },
      'cinematica-rotacional': {
        'focus_es': 'usar la analogia con el MRUA para describir el giro con aceleracion angular constante',
        'focus_en': 'use the analogy with constant-acceleration motion to describe rotation with constant angular acceleration',
        'environment_es': 'un eje de giro fijo y condiciones iniciales angulares bien establecidas',
        'environment_en': 'a fixed rotation axis and well-established angular initial conditions',
        'diagram_es': 'las ecuaciones horarias angulares y su lectura en el tiempo',
        'diagram_en': 'the angular time equations and their reading over time',
        'limit_es': 'cambia la aceleracion angular o el eje deja de ser fijo',
        'limit_en': 'angular acceleration changes or the axis stops being fixed',
      },
      'relacion-lineal-angular': {
        'focus_es': 'vincular magnitudes lineales y angulares mediante el radio de giro',
        'focus_en': 'link linear and angular quantities through the rotation radius',
        'environment_es': 'puntos de un solido rigido a distinta distancia del eje',
        'environment_en': 'points of a rigid body at different distances from the axis',
        'diagram_es': 'la correspondencia entre v y omega, y entre aceleraciones tangencial y centripeta',
        'diagram_en': 'the correspondence between v and omega, and between tangential and centripetal accelerations',
        'limit_es': 'se extrapolan relaciones validas para un punto a otro radio distinto sin control',
        'limit_en': 'relations valid for one point are extrapolated to another radius without control',
      },
      'rodadura-cinematica-sin-deslizamiento': {
        'focus_es': 'combinar traslacion y rotacion imponiendo la condicion cinematica de no deslizamiento',
        'focus_en': 'combine translation and rotation by imposing the kinematic no-slip condition',
        'environment_es': 'una rueda o cilindro en contacto con una superficie sin deslizar',
        'environment_en': 'a wheel or cylinder in contact with a surface without slipping',
        'diagram_es': 'el punto de contacto instantaneamente en reposo y la relacion v = omega R',
        'diagram_en': 'the contact point instantaneously at rest and the relation v = omega R',
        'limit_es': 'aparece deslizamiento, deformacion apreciable o perdida de contacto limpio',
        'limit_en': 'slipping appears, appreciable deformation arises, or clean contact is lost',
      },
      'sistemas-referencia': {
        'focus_es': 'elegir un marco de referencia adecuado para describir el mismo movimiento sin contradicciones',
        'focus_en': 'choose an adequate reference frame to describe the same motion without contradictions',
        'environment_es': 'observadores distintos que asignan coordenadas y tiempos al mismo fenomeno',
        'environment_en': 'different observers assigning coordinates and times to the same phenomenon',
        'diagram_es': 'la dependencia de posicion y velocidad respecto del observador elegido',
        'diagram_en': 'the dependence of position and velocity on the chosen observer',
        'limit_es': 'se comparan descripciones de marcos distintos como si fueran la misma magnitud',
        'limit_en': 'descriptions from different frames are compared as if they were the same quantity',
      },
      'velocidad-relativa': {
        'focus_es': 'componer y comparar velocidades entre marcos o moviles distintos',
        'focus_en': 'compose and compare velocities between different frames or moving bodies',
        'environment_es': 'observadores con movimiento relativo y vectores velocidad referidos a cada uno',
        'environment_en': 'observers in relative motion and velocity vectors referred to each one',
        'diagram_es': 'la suma o resta vectorial de velocidades segun el marco elegido',
        'diagram_en': 'the vector addition or subtraction of velocities according to the chosen frame',
        'limit_es': 'se mezclan componentes o se olvida que la velocidad relativa depende del observador',
        'limit_en': 'components are mixed or one forgets that relative velocity depends on the observer',
      },
      'encuentros-y-persecuciones': {
        'focus_es': 'resolver cuando dos moviles coinciden o uno alcanza al otro a partir de sus ecuaciones horarias',
        'focus_en': 'solve when two moving bodies meet or one catches the other from their time equations',
        'environment_es': 'dos trayectorias descritas en un mismo marco con condiciones iniciales distintas',
        'environment_en': 'two trajectories described in the same frame with different initial conditions',
        'diagram_es': 'la interseccion de posiciones o la igualdad de ecuaciones horarias',
        'diagram_en': 'the intersection of positions or the equality of time equations',
        'limit_es': 'se igualan velocidades cuando en realidad deben igualarse posiciones',
        'limit_en': 'velocities are equated when positions should be equated instead',
      },
      'tiro-horizontal': {
        'focus_es': 'separar el movimiento horizontal uniforme del vertical acelerado por gravedad',
        'focus_en': 'separate horizontal uniform motion from vertical motion accelerated by gravity',
        'environment_es': 'un lanzamiento con velocidad inicial horizontal y caida bajo gravedad',
        'environment_en': 'a launch with horizontal initial speed and fall under gravity',
        'diagram_es': 'la independencia entre eje x y eje y dentro de una trayectoria parabolica',
        'diagram_en': 'the independence between x and y axes inside a parabolic trajectory',
        'limit_es': 'se mezcla el tiempo horizontal con otro vertical distinto o se introduce una fuerza no modelada',
        'limit_en': 'horizontal time is mixed with a different vertical time or an unmodeled force is introduced',
      },
      'tiro-parabolico': {
        'focus_es': 'descomponer un lanzamiento oblicuo en dos movimientos coordinados por el mismo tiempo',
        'focus_en': 'decompose an oblique launch into two motions coordinated by the same time',
        'environment_es': 'un proyectil idealizado sin rozamiento del aire y con gravedad uniforme',
        'environment_en': 'an idealized projectile without air drag and with uniform gravity',
        'diagram_es': 'las componentes iniciales, la altura maxima, el tiempo de vuelo y el alcance',
        'diagram_en': 'the initial components, maximum height, flight time, and range',
        'limit_es': 'se pierde la hipotesis de gravedad uniforme o el aire ya no puede despreciarse',
        'limit_en': 'the uniform-gravity assumption fails or air can no longer be neglected',
      },
      'definicion-y-expresion': {
        'focus_es': 'relacionar masa, campo gravitatorio y direccion radial en un mismo concepto operativo',
        'focus_en': 'relate mass, gravitational field, and radial direction inside a single operative concept',
        'environment_es': 'el campo gravitatorio creado por la Tierra u otro astro',
        'environment_en': 'the gravitational field created by Earth or another body',
        'diagram_es': 'el vector peso apuntando hacia el centro del campo',
        'diagram_en': 'the weight vector pointing toward the field center',
        'limit_es': 'la intensidad de g no puede considerarse uniforme o la altura ya no es despreciable',
        'limit_en': 'the intensity of g can no longer be considered uniform or altitude is no longer negligible',
        'application_es': 'balanzas, mapas de campo y estimaciones cerca de la superficie terrestre',
        'application_en': 'scales, field maps, and estimates near the Earth surface',
      },
      'peso-en-diferentes-contextos': {
        'focus_es': 'comparar como cambia el peso cuando cambian planeta, altura o marco acelerado',
        'focus_en': 'compare how weight changes when planet, altitude, or accelerated frame change',
        'environment_es': 'el campo gravitatorio local y, si procede, la aceleracion del marco',
        'environment_en': 'the local gravitational field and, when relevant, the frame acceleration',
        'diagram_es': 'la distincion entre peso real, lectura aparente y reacciones de apoyo',
        'diagram_en': 'the distinction between real weight, apparent reading, and support reactions',
        'control_es': 'distinguir masa constante de peso variable y separar gravedad de efectos de marco',
        'control_en': 'distinguish constant mass from variable weight and separate gravity from frame effects',
        'limit_es': 'se mezclan sin cuidado peso, normal y peso aparente',
        'limit_en': 'weight, normal force, and apparent weight are mixed carelessly',
      },
      'normal-en-planos': {
        'focus_es': 'entender la fuerza normal como respuesta geometrica del contacto',
        'focus_en': 'understand the normal force as the geometric response of a contact',
        'environment_es': 'la superficie que impide la penetracion y fija la direccion perpendicular',
        'environment_en': 'the surface that prevents penetration and fixes the perpendicular direction',
        'diagram_es': 'la descomposicion en ejes tangencial y normal al plano',
        'diagram_en': 'the decomposition into tangential and normal axes to the plane',
        'limit_es': 'el contacto se pierde, la superficie no es rigida o la trayectoria es curvada',
        'limit_en': 'contact is lost, the surface is not rigid, or the path is curved',
      },
      'rozamiento-estatico': {
        'focus_es': 'explicar como el rozamiento estatico se ajusta para impedir el deslizamiento',
        'focus_en': 'explain how static friction adjusts itself to prevent slipping',
        'environment_es': 'la interfaz entre dos superficies con adhesion microscopica',
        'environment_en': 'the interface between two surfaces with microscopic adhesion',
        'diagram_es': 'la pareja normal-rozamiento ligada al posible sentido del movimiento relativo',
        'diagram_en': 'the normal-friction pair tied to the possible sense of relative motion',
        'limit_es': 'se supera el valor maximo y el sistema entra en deslizamiento',
        'limit_en': 'the maximum value is exceeded and the system starts sliding',
      },
      'rozamiento-dinamico': {
        'focus_es': 'describir la resistencia tangencial cuando ya existe deslizamiento relativo',
        'focus_en': 'describe tangential resistance once relative slipping already exists',
        'environment_es': 'la interfaz en movimiento entre superficies que intercambian energia',
        'environment_en': 'the moving interface between surfaces that exchange energy',
        'diagram_es': 'el vector de rozamiento opuesto a la velocidad relativa de contacto',
        'diagram_en': 'the friction vector opposite to the relative contact velocity',
        'limit_es': 'la velocidad es tan baja que conviene volver al regimen estatico o cambian los materiales',
        'limit_en': 'speed is so low that one should return to the static regime or materials change',
      },
      'coeficiente-de-rozamiento': {
        'focus_es': 'usar el coeficiente como parametro de modelo y no como constante universal',
        'focus_en': 'use the coefficient as a model parameter rather than a universal constant',
        'environment_es': 'el par de materiales, su estado superficial y las condiciones de ensayo',
        'environment_en': 'the material pair, its surface state, and the test conditions',
        'diagram_es': 'la proporcion entre fuerza tangencial limite y reaccion normal',
        'diagram_en': 'the ratio between limiting tangential force and normal reaction',
        'limit_es': 'se pretende extrapolar el mismo valor a superficies, velocidades o estados distintos',
        'limit_en': 'the same value is extrapolated to different surfaces, speeds, or states',
      },
      'tension-en-cuerdas-y-cables': {
        'focus_es': 'leer la tension como una fuerza de transmision a lo largo de un elemento flexible',
        'focus_en': 'read tension as a transmission force along a flexible element',
        'environment_es': 'la cuerda, el cable y los puntos de anclaje que redirigen la fuerza',
        'environment_en': 'the rope, the cable, and the anchor points that redirect the force',
        'diagram_es': 'las tensiones aplicadas en los extremos y los cambios de direccion en poleas',
        'diagram_en': 'the tensions applied at the ends and the direction changes through pulleys',
        'limit_es': 'la cuerda tiene masa apreciable, elasticidad importante o rozamiento en apoyos',
        'limit_en': 'the rope has appreciable mass, significant elasticity, or friction at supports',
      },
      'ley-de-hooke': {
        'focus_es': 'relacionar deformacion y fuerza restauradora dentro del regimen elastico lineal',
        'focus_en': 'relate deformation and restoring force inside the linear elastic regime',
        'environment_es': 'el resorte o elemento elastico alrededor de su longitud de equilibrio',
        'environment_en': 'the spring or elastic element around its equilibrium length',
        'diagram_es': 'la referencia de elongacion respecto del equilibrio y la fuerza restauradora asociada',
        'diagram_en': 'the elongation referenced to equilibrium and the associated restoring force',
        'limit_es': 'la deformacion deja de ser pequena o el material entra en comportamiento no lineal',
        'limit_en': 'deformation is no longer small or the material enters a nonlinear regime',
      },
      'sistemas-con-muelles': {
        'focus_es': 'combinar fuerzas elasticas, acoplamientos y condiciones de equilibrio o movimiento',
        'focus_en': 'combine elastic forces, couplings, and equilibrium or motion conditions',
        'environment_es': 'varios resortes, apoyos y cuerpos enlazados por deformaciones compatibles',
        'environment_en': 'multiple springs, supports, and bodies linked by compatible deformations',
        'diagram_es': 'las conexiones entre muelles y la suma de rigideces equivalentes',
        'diagram_en': 'the connections between springs and the sum of equivalent stiffnesses',
        'limit_es': 'los resortes no son ideales, aparecen masas distribuidas o hay amortiguamiento fuerte',
        'limit_en': 'springs are not ideal, distributed masses appear, or damping becomes strong',
      },
      'arrastre-lineal': {
        'focus_es': 'modelar un arrastre proporcional a la velocidad en regimen viscoso',
        'focus_en': 'model drag proportional to speed in a viscous regime',
        'environment_es': 'el fluido alrededor del cuerpo cuando dominan efectos viscosos',
        'environment_en': 'the fluid around the body when viscous effects dominate',
        'diagram_es': 'la fuerza de arrastre opuesta al movimiento y alineada con la velocidad relativa',
        'diagram_en': 'the drag force opposite to motion and aligned with relative velocity',
        'limit_es': 'el numero de Reynolds crece y el termino cuadratico deja de ser despreciable',
        'limit_en': 'the Reynolds number grows and the quadratic term stops being negligible',
      },
      'arrastre-cuadratico': {
        'focus_es': 'modelar un arrastre proporcional al cuadrado de la velocidad en flujos rapidos',
        'focus_en': 'model drag proportional to the square of speed in faster flows',
        'environment_es': 'el fluido cuando las inercias del flujo dominan sobre la viscosidad',
        'environment_en': 'the fluid when flow inertia dominates over viscosity',
        'diagram_es': 'la fuerza de arrastre que crece muy deprisa con la rapidez',
        'diagram_en': 'the drag force that grows rapidly with speed',
        'limit_es': 'la velocidad baja tanto que conviene recuperar el modelo lineal',
        'limit_en': 'speed drops enough that the linear model should be recovered',
      },
      'velocidad-terminal': {
        'focus_es': 'entender la velocidad terminal como equilibrio dinamico entre empuje, peso y arrastre',
        'focus_en': 'understand terminal velocity as a dynamical balance between thrust, weight, and drag',
        'environment_es': 'el fluido y el campo gravitatorio que fijan la rapidez limite',
        'environment_en': 'the fluid and gravitational field that set the limiting speed',
        'diagram_es': 'la cancelacion de fuerzas verticales cuando la aceleracion pasa a cero',
        'diagram_en': 'the cancellation of vertical forces when acceleration becomes zero',
        'limit_es': 'cambia la densidad del fluido, la postura del cuerpo o el regimen de arrastre',
        'limit_en': 'fluid density, body posture, or drag regime changes',
      },
      'numero-de-reynolds-y-regimenes-de-arrastre': {
        'focus_es': 'decidir que modelo de arrastre conviene usar segun la escala y el flujo',
        'focus_en': 'decide which drag model should be used according to scale and flow',
        'environment_es': 'la comparacion entre inercia del fluido, viscosidad y tamano caracteristico',
        'environment_en': 'the comparison between fluid inertia, viscosity, and characteristic size',
        'diagram_es': 'la lectura cualitativa del flujo sin confundir parametro y fuerza',
        'diagram_en': 'the qualitative reading of the flow without confusing parameter and force',
        'limit_es': 'se usa un unico criterio sin mirar geometria, rugosidad o transicion de flujo',
        'limit_en': 'a single criterion is used without checking geometry, roughness, or flow transition',
      },
      'coeficiente-de-arrastre': {
        'focus_es': 'interpretar el coeficiente de arrastre como resumen empirico de forma y flujo',
        'focus_en': 'interpret the drag coefficient as an empirical summary of shape and flow',
        'environment_es': 'la geometria del cuerpo, su orientacion y las propiedades del fluido',
        'environment_en': 'the body geometry, its orientation, and the fluid properties',
        'diagram_es': 'la relacion entre fuerza de arrastre, area de referencia y presion dinamica',
        'diagram_en': 'the relation between drag force, reference area, and dynamic pressure',
        'limit_es': 'se trata el coeficiente como una constante fija aunque cambie el regimen',
        'limit_en': 'the coefficient is treated as fixed even though the regime changes',
      },
      'concepto-fuerza-centripeta': {
        'focus_es': 'leer la fuerza centripeta como requisito dinamico de una trayectoria curva',
        'focus_en': 'read centripetal force as the dynamical requirement of a curved trajectory',
        'environment_es': 'las interacciones reales que aportan componente radial hacia el centro',
        'environment_en': 'the real interactions that provide a radial component toward the center',
        'diagram_es': 'la descomposicion radial-tangencial y el sentido hacia el centro de curvatura',
        'diagram_en': 'the radial-tangential decomposition and the inward direction toward the center of curvature',
        'limit_es': 'se reifica la fuerza centripeta como agente aparte y no como nombre de una resultante',
        'limit_en': 'centripetal force is reified as a separate agent instead of a name for the resultant',
      },
      'momento-lineal': {
        'focus_es': 'relacionar masa y velocidad en una magnitud vectorial util para describir cambios dinamicos',
        'focus_en': 'relate mass and velocity inside a vector quantity useful for describing dynamical changes',
        'environment_es': 'las interacciones externas que pueden modificar el momento del sistema',
        'environment_en': 'the external interactions that may modify the system momentum',
        'diagram_es': 'el vector cantidad de movimiento y su comparacion antes y despues de una interaccion',
        'diagram_en': 'the momentum vector and its comparison before and after an interaction',
        'question_es': 'como cambia el estado de movimiento cuando cambian masa o velocidad',
        'question_en': 'how the state of motion changes when mass or velocity change',
      },
      'impulso': {
        'focus_es': 'conectar fuerza, tiempo de aplicacion y cambio de momento lineal',
        'focus_en': 'connect force, interaction time, and change in linear momentum',
        'environment_es': 'la accion externa aplicada durante un intervalo finito de tiempo',
        'environment_en': 'the external action applied during a finite time interval',
        'diagram_es': 'la relacion entre area bajo F(t) y variacion de cantidad de movimiento',
        'diagram_en': 'the relation between the area under F(t) and the change in momentum',
        'question_es': 'cuando basta con una descripcion impulsiva y cuando hace falta resolver toda la dinamica temporal',
        'question_en': 'when an impulsive description is enough and when the full time dynamics must be solved',
      },
      'teorema-impulso-momento': {
        'focus_es': 'identificar que el impulso neto y la variacion de momento lineal son dos lecturas de un mismo balance',
        'focus_en': 'identify that net impulse and change in linear momentum are two readings of the same balance',
        'environment_es': 'la interaccion externa acumulada durante el intervalo en que el sistema cambia su estado de movimiento',
        'environment_en': 'the external interaction accumulated during the interval in which the system changes its state of motion',
        'diagram_es': 'la comparacion entre estado inicial, estado final y accion neta aplicada',
        'diagram_en': 'the comparison between initial state, final state, and applied net action',
        'question_es': 'como traducir una fuerza extendida o breve en una variacion verificable de cantidad de movimiento',
        'question_en': 'how to translate an extended or brief force action into a verifiable momentum change',
        'limit_es': 'se mezclan sistemas distintos, intervalos distintos o convenciones de signo incompatibles',
        'limit_en': 'different systems, different intervals, or incompatible sign conventions are mixed',
        'contrast_es': 'el teorema no introduce una fuerza nueva, sino una forma global de leer el cambio de momento',
        'contrast_en': 'the theorem does not introduce a new force, but a global way to read momentum change',
        'application_es': 'choques, frenadas, lanzamientos y cualquier proceso donde importe el balance sobre un intervalo',
        'application_en': 'collisions, braking events, launches, and any process where the interval balance matters',
      },
      'sistemas-aislados': {
        'focus_es': 'identificar cuando las fuerzas externas pueden despreciarse en el balance de momento',
        'focus_en': 'identify when external forces can be neglected in the momentum balance',
        'environment_es': 'los intercambios internos entre cuerpos y las acciones externas netas sobre el conjunto',
        'environment_en': 'the internal exchanges between bodies and the net external actions on the whole set',
        'diagram_es': 'la frontera del sistema y la separacion entre fuerzas internas y externas',
        'diagram_en': 'the system boundary and the separation between internal and external forces',
        'question_es': 'que condiciones hacen legitima la aproximacion de aislamiento',
        'question_en': 'which conditions make the isolation approximation legitimate',
      },
      'enunciado-y-condiciones-de-aplicacion': {
        'focus_es': 'expresar con precision cuando se conserva el momento lineal total',
        'focus_en': 'state precisely when total linear momentum is conserved',
        'environment_es': 'el entorno exterior y su posible impulso neto sobre el sistema',
        'environment_en': 'the external environment and its possible net impulse on the system',
      },
      'sistemas-aislados-y-fuerzas-externas': {
        'focus_es': 'comparar el balance interno del sistema con la accion de fuerzas externas',
        'focus_en': 'compare the internal balance of the system with the action of external forces',
        'environment_es': 'la frontera del sistema y los intercambios de momento con el exterior',
        'environment_en': 'the system boundary and the momentum exchanges with the exterior',
      },
      'impulso-externo-y-ruptura-de-la-conservacion': {
        'focus_es': 'medir como un impulso externo rompe o corrige la conservacion ideal',
        'focus_en': 'measure how an external impulse breaks or corrects ideal conservation',
        'environment_es': 'la accion breve del exterior que introduce variacion neta de momento',
        'environment_en': 'the brief external action that introduces a net momentum change',
      },
      'aplicaciones-del-principio-de-conservacion': {
        'focus_es': 'usar la conservacion de momento como herramienta de resolucion y estimacion',
        'focus_en': 'use momentum conservation as a solving and estimation tool',
      },
      'definicion-centro-de-masas': {
        'focus_es': 'definir el punto representativo que resume una distribucion de masa',
        'focus_en': 'define the representative point that summarizes a mass distribution',
        'environment_es': 'la distribucion espacial de masas y el sistema de referencia elegido',
        'environment_en': 'the spatial mass distribution and the chosen reference frame',
        'diagram_es': 'la posicion ponderada de masas discretas o continuas',
        'diagram_en': 'the weighted position of discrete or continuous masses',
        'question_es': 'como resumir la distribucion sin perder la informacion dinamica esencial',
        'question_en': 'how to summarize the distribution without losing the essential dynamical information',
      },
      'centro-de-masas-sistemas-discretos': {
        'focus_es': 'calcular el centro de masas a partir de masas puntuales o discretizadas',
        'focus_en': 'compute the center of mass from point-like or discretized masses',
      },
      'centro-de-masas-en-cuerpos-extendidos': {
        'focus_es': 'pasar de la suma discreta a la integral sobre una distribucion continua',
        'focus_en': 'move from the discrete sum to the integral over a continuous distribution',
      },
      'movimiento-del-centro-de-masas': {
        'focus_es': 'relacionar el movimiento colectivo con la fuerza externa resultante',
        'focus_en': 'relate collective motion to the resultant external force',
      },
      'marco-del-centro-de-masas': {
        'focus_es': 'usar el marco del centro de masas para simplificar balances y colisiones',
        'focus_en': 'use the center-of-mass frame to simplify balances and collisions',
      },
      'colisiones-elasticas': {
        'focus_es': 'combinar conservacion de momento y energia cinetica en un choque',
        'focus_en': 'combine momentum and kinetic-energy conservation in a collision',
        'environment_es': 'los cuerpos que intercambian momento durante un tiempo muy breve',
        'environment_en': 'the bodies that exchange momentum during a very short time',
        'diagram_es': 'las velocidades antes y despues del impacto y sus direcciones',
        'diagram_en': 'the velocities before and after impact and their directions',
      },
      'colisiones-inelasticas': {
        'focus_es': 'separar conservacion de momento y perdida de energia mecanica en el choque',
        'focus_en': 'separate momentum conservation from mechanical-energy loss during impact',
      },
      'colisiones-totalmente-inelasticas': {
        'focus_es': 'estudiar el caso limite en que los cuerpos quedan unidos tras el impacto',
        'focus_en': 'study the limit case in which bodies remain stuck after impact',
      },
      'colision-con-pared': {
        'focus_es': 'leer el cambio de velocidad y momento al imponer una condicion de rebote sobre una pared',
        'focus_en': 'read the velocity and momentum change when a rebound condition is imposed by a wall',
      },
      'colisiones-2d': {
        'focus_es': 'resolver la conservacion de momento por componentes en dos dimensiones',
        'focus_en': 'solve momentum conservation by components in two dimensions',
      },
      'coeficiente-de-restitucion': {
        'focus_es': 'usar el coeficiente de restitucion para medir la recuperacion relativa de velocidad',
        'focus_en': 'use the restitution coefficient to quantify the relative recovery of speed',
      },
      'marco-del-centro-de-masas-en-colisiones': {
        'focus_es': 'analizar colisiones en el marco donde el momento total inicial es nulo',
        'focus_en': 'analyze collisions in the frame where the initial total momentum is zero',
      },
      'dispersion-angular-en-colisiones-2d': {
        'focus_es': 'interpretar como se reparte el momento entre direcciones tras un choque oblicuo',
        'focus_en': 'interpret how momentum is distributed among directions after an oblique collision',
      },
      'definicion-momento-angular': {
        'focus_es': 'definir el momento angular como medida del estado rotacional respecto de un punto o eje',
        'focus_en': 'define angular momentum as a measure of rotational state with respect to a point or axis',
        'environment_es': 'la eleccion del origen, el eje y las fuerzas que pueden producir torque',
        'environment_en': 'the choice of origin, axis, and forces that may produce torque',
      },
      'conservacion-momento-angular': {
        'focus_es': 'establecer cuando el momento angular total permanece constante',
        'focus_en': 'establish when total angular momentum remains constant',
      },
      'precesion': {
        'focus_es': 'relacionar torque aplicado y cambio gradual de la direccion del momento angular',
        'focus_en': 'relate applied torque to the gradual change in the direction of angular momentum',
      },
      'balance-de-momento-con-flujo-de-masa': {
        'focus_es': 'extender el balance de momento a sistemas abiertos con entrada o salida de masa',
        'focus_en': 'extend the momentum balance to open systems with mass inflow or outflow',
      },
      'ecuacion-del-cohete': {
        'focus_es': 'explicar como la expulsion de masa genera variacion de velocidad en un cohete',
        'focus_en': 'explain how expelled mass generates a velocity change in a rocket',
      },
    }
    merged = dict(generic)
    merged.update(specific.get(leaf_id, {}))
    if 'fuerza-centripeta' in route and leaf_id not in specific:
        merged.update(specific['concepto-fuerza-centripeta'])
    return merged


def theory_theme_data():
    return {
      'es': {
        '## Contexto conceptual': ('situar el fenomeno en una escena fisica reconocible', 'aislar sistema, entorno y pregunta util antes del algebra'),
        '## Nivel esencial': ('dar una regla intuitiva que permita anticipar la respuesta', 'explicar que cambia y que permanece fijo cuando varia el contexto'),
        '## Nivel formal': ('traducir la idea fisica a relaciones simbolicas bien definidas', 'vincular cada simbolo con una decision de modelado'),
        '## Nivel estructural': ('organizar las dependencias entre variables, condiciones y parametros', 'mostrar que parte del resultado viene de la geometria y que parte del entorno'),
        '## Interpretacion fisica profunda': ('leer el resultado como mecanismo y no solo como numero', 'conectar magnitud calculada, energia intercambiada y observacion experimental'),
        '### Orden de magnitud': ('estimar escalas plausibles antes de sustituir datos', 'usar comparaciones de tamano para detectar resultados absurdos'),
        '## Metodo de resolucion personalizado': ('plantear una rutina de trabajo adaptada al fenomeno', 'indicar donde suelen bloquearse los alumnos y como salir de ese punto'),
        '## Casos especiales y ejemplo extendido': ('examinar situaciones limite que tensan el modelo', 'mostrar como cambia la conclusion al modificar una hipotesis clave'),
        '## Preguntas reales del alumno': ('responder dudas habituales sin ocultar el matiz fisico', 'separar lenguaje coloquial y definicion precisa'),
        '## Conexiones transversales y rutas de estudio': ('relacionar el leaf con otros nodos del mapa', 'explicar que conceptos conviene estudiar despues y por que'),
        '## Sintesis final': ('cerrar con una idea compacta y operativa', 'dejar claro que error conceptual debe evitarse al salir del tema'),
      },
      'en': {
        '## Conceptual context': ('place the phenomenon inside a recognizable physical scene', 'separate system, environment, and useful question before doing algebra'),
        '## Essential level': ('give an intuitive rule that lets the learner anticipate the response', 'explain what changes and what remains fixed when the context changes'),
        '## Formal level': ('translate the physical idea into clearly defined symbolic relations', 'connect every symbol with an explicit modeling decision'),
        '## Structural level': ('organize the dependencies between variables, conditions, and parameters', 'show which part of the result comes from geometry and which from the environment'),
        '## Deep physical interpretation': ('read the result as a mechanism rather than as a bare number', 'connect the computed quantity with exchanged energy and observation'),
        '### Order of magnitude': ('estimate plausible scales before inserting data', 'use size comparisons to catch absurd answers'),
        '## Personalized resolution method': ('propose a workflow adapted to the phenomenon', 'point out where learners usually get stuck and how to recover'),
        '## Special cases and extended example': ('inspect limit situations that stress the model', 'show how the conclusion changes when one key assumption is modified'),
        '## Real student questions': ('answer common questions without hiding the physical nuance', 'separate colloquial language from precise definition'),
        '## Cross-cutting connections and study paths': ('connect the leaf with nearby nodes in the map', 'explain which concepts should be studied next and why'),
        '## Final synthesis': ('close with a compact and operative idea', 'state clearly which conceptual mistake must be avoided'),
      },
    }


def section_block(meta, forms, lang, heading):
    name = meta['nombre']['es'] if lang == 'es' else meta['nombre']['en']
    p = force_profile(meta)
    eq = inline_math(first_formula(forms))
    target = first_target(forms)
    goal, second = theory_theme_data()[lang][heading]
    if lang == 'es':
        paragraph = (
          f"En {heading.replace('#', '').strip().lower()} interesa {goal}, y por eso el apartado debe arrancar delimitando "
          f"{p['system_es']} y reconociendo que el entorno introduce {p['environment_es']}. La pregunta rectora no es solo cuanto vale "
          f"{target}, sino {p['question_es']}, porque en {heading.replace('#', '').strip().lower()} esa decision condiciona {p['diagram_es']} y la forma en que se lee la expresion {eq}. "
          f"Trabajar asi permite {second}, obliga a {p['control_es']} y deja visible el punto en que el razonamiento deja de ser fiable cuando {p['limit_es']}."
        )
        return [paragraph]
    paragraph = (
      f"In {heading.replace('#', '').strip().lower()}, the goal is to {goal}, so the section should begin by delimiting "
      f"{p['system_en']} and by recognizing that the environment contributes {p['environment_en']}. The guiding question is not only "
      f"the value of {target}, but also {p['question_en']}, because in {heading.replace('#', '').strip().lower()} that decision shapes {p['diagram_en']} and the way the relation {eq} is read. "
      f"Working in that manner makes it possible to {second}, forces the learner to {p['control_en']}, and reveals the point where the reasoning stops being reliable when {p['limit_en']}."
    )
    return [paragraph]


def build_theory(meta, forms, lang):
    name = meta['nombre']['es'] if lang == 'es' else meta['nombre']['en']
    secs = REQ['teoria' if lang == 'es' else 'teoria_en']
    out = [f'# {name}', '']
    for heading in secs:
        out += [heading, '']
        for paragraph in section_block(meta, forms, lang, heading):
            out += [paragraph, '']
    return '\n'.join(out).strip() + '\n'


def build_models(meta, lang):
    name = (meta['nombre']['es'] if lang == 'es' else meta['nombre']['en']).lower()
    p = force_profile(meta)
    title = '# Modelos fisicos: ' + name if lang == 'es' else '# Physical models: ' + name
    secs = REQ['modelos' if lang == 'es' else 'modelos_en']
    if lang == 'es':
        texts = [
          f"El modelo ideal de {name} supone que basta con {p['focus_es']}. Se conserva solo la estructura imprescindible para que la relacion principal describa el mecanismo dominante y para que la lectura del diagrama siga siendo limpia. En este nivel se eliminan detalles secundarios del material, del fluido o del contacto porque todavia no cambian la conclusion esencial. Esa simplificacion es valiosa siempre que el alumno pueda explicar que fenomeno se ha descartado y por que su ausencia no altera la interpretacion principal.",
          f"El modelo extendido introduce correcciones cuando {p['limit_es']}. En esa ampliacion reaparecen terminos asociados a geometria real, variaciones del medio, no linealidades o redistribuciones internas. El objetivo no es complicar por inercia, sino decidir que refinamiento cambia de verdad la prediccion y cual solo anade ruido algebraico. Un buen criterio consiste en comparar cuanto se modifica la magnitud buscada al activar cada correccion por separado.",
          f"El dominio cuantitativo de validez debe declararse con umbrales verificables. Como regla minima, conviene exigir variaciones relativas menores del 1 %, errores de orden 10^-2 y escalas geometricas comparables entre 10^0 y 10^6 segun el problema. Si esos criterios fallan, la magnitud buscada deja de ser fiable aunque la sustitucion numerica parezca correcta. Declarar el dominio obliga a justificar por que el problema pertenece de verdad al regimen descrito por el leaf.",
          f"Las senales de fallo del modelo no suelen empezar en la calculadora, sino en la lectura fisica. Un cambio inesperado de signo, una reaccion que resulta negativa donde deberia haber contacto, o una tendencia incompatible con {p['application_es']} indican que la hipotesis elegida se ha roto antes del resultado final. Tambien es sospechoso que una correccion supuestamente pequena domine toda la expresion o cambie el orden de magnitud de la respuesta.",
          f"La comparacion con modelos alternativos sirve para decidir si conviene una descripcion estatica, dinamica, lineal, cuadratica, elastica o puramente geometrica. La mejor eleccion es la que conserva significado fisico con el menor numero de supuestos discutibles y con una interpretacion verificable en el escenario real. Comparar modelos no es una formalidad: es el paso que evita aplicar por costumbre la primera ecuacion que uno recuerda.",
        ]
    else:
        texts = [
          f"The ideal model for {name} assumes that it is enough to {p['focus_en']}. Only the indispensable structure is kept so that the main relation captures the dominant mechanism and the diagram remains readable. At this level, secondary details of the material, fluid, or contact are removed because they do not change the essential conclusion yet. That simplification is useful only if the learner can explain which phenomenon was neglected and why its absence does not alter the main interpretation. Otherwise the simplification becomes a slogan instead of a model.",
          f"The extended model introduces corrections when {p['limit_en']}. In that broader description, terms linked to real geometry, changes in the medium, nonlinear effects, or internal redistribution become relevant. The goal is not to make the algebra heavier, but to identify which refinement actually changes the prediction. A practical criterion is to compare how much the searched quantity changes when each correction is activated separately.",
          f"The quantitative validity domain must be stated with explicit thresholds. As a minimum rule, one should demand relative variations below 1%, errors of order 10^-2, and geometric scales comparable between 10^0 and 10^6 depending on the problem. When these criteria fail, the searched magnitude is no longer trustworthy even if the arithmetic looks correct. Declaring the domain forces the writer to justify why the problem truly belongs to that regime.",
          f"Model failure usually appears first in the physical reading rather than in the calculator. An unexpected sign change, a reaction becoming negative where contact should exist, or a trend incompatible with {p['application_en']} shows that the chosen assumptions broke before the final number was obtained. It is also suspicious when a supposedly small correction dominates the whole expression or changes the order of magnitude of the answer.",
          f"Comparison with alternative models helps decide whether a static, dynamic, linear, quadratic, elastic, or purely geometric description is more appropriate. The best option is the one that preserves physical meaning with the smallest number of questionable assumptions and with an interpretation that can be checked in the real setting. Comparing models is not a formal ritual; it is the step that prevents the first remembered equation from being used by habit.",
        ]
    out = [title, '']
    for heading, text in zip(secs, texts):
        out += [heading, '', text, '']
    return '\n'.join(out).strip() + '\n'


def build_errors(meta, lang):
    name = (meta['nombre']['es'] if lang == 'es' else meta['nombre']['en']).lower()
    p = force_profile(meta)
    title = '# Errores comunes: ' + name if lang == 'es' else '# Common mistakes: ' + name
    secs = REQ['errores' if lang == 'es' else 'errores_en']
    if lang == 'es':
        texts = [
          f"El error conceptual mas comun consiste en olvidar que {p['contrast_es']}. En cuanto se toma la etiqueta del leaf como si fuera una sustancia independiente, se confunden agente, cuerpo y respuesta. Ese desorden hace que dos alumnos con la misma ecuacion verbal lleguen a diagramas distintos y a interpretaciones incompatibles. La cura no es memorizar mas, sino volver a preguntar que interaccion real sostiene la afirmacion. Tambien ayuda reformular el problema con palabras propias antes de mirar la formula. Ese pequeno cambio obliga a pasar de la consigna al mecanismo.",
          f"El error de modelo aparece cuando {p['limit_es']} y aun asi se mantiene la misma expresion como si nada hubiera cambiado. Esto pasa mucho cuando se exporta una solucion tipo a un contexto nuevo: el calculo puede ser impecable, pero la hipotesis que lo justificaba ya no esta presente. Por eso hay que escribir siempre una frase corta que diga que se esta suponiendo y que se esta despreciando. Ese gesto obliga a reconocer si el contexto nuevo pide otro regimen o una correccion adicional. Si no puede escribirse esa frase, probablemente tampoco puede defenderse el modelo.",
          f"El error matematico mas frecuente no es una cuenta larga, sino una proyeccion mal hecha, un signo elegido sin criterio o una magnitud sustituida en una unidad que no le corresponde. Cuando se mezclan esos fallos, el resultado deja de dialogar con el diagrama y pierde capacidad explicativa. Conviene revisar cada paso preguntando si la expresion todavia coincide con el eje, el sentido y la unidad definidos al principio. Una comprobacion extra es rehacer el ultimo paso sin numeros para ver si la dependencia cualitativa sigue teniendo sentido. Esa segunda pasada suele descubrir errores invisibles en la primera lectura.",
          f"El error de interpretacion surge cuando el numero final se lee fuera del escenario fisico. Un valor razonable de modulo puede seguir siendo incorrecto si contradice la direccion del efecto, la comparacion con otros casos o el mecanismo indicado por {p['diagram_es']}. Leer bien el resultado exige compararlo con un caso limite, no solo con la intuicion del momento. Cuando esa comparacion falla, casi siempre hay un supuesto mal elegido o una variable mal entendida. La interpretacion correcta siempre recupera el relato fisico que el calculo resume.",
          f"La regla de autocontrol rapido es esta: definir sistema, dibujar interacciones, justificar la ecuacion y comparar el resultado con una prediccion cualitativa. Si una de esas cuatro piezas no puede explicarse en voz alta, todavia no se ha entendido el problema aunque la calculadora entregue cifras limpias. Esta rutina parece simple, pero separa muy bien comprension real y repeticion automatica. Repetirla al final del ejercicio convierte el cierre en una verificacion conceptual y no solo numerica. Con practica, termina funcionando como un filtro mental durante todo el desarrollo.",
        ]
    else:
        texts = [
          f"The most common conceptual mistake is forgetting that {p['contrast_en']}. As soon as the leaf label is treated like an independent substance, agent, body, and response become mixed. That disorder makes two learners build different diagrams from the same verbal statement. The remedy is not more memorization, but returning to the question of which real interaction supports the claim.",
          f"The model mistake appears when {p['limit_en']} and yet the same expression is still used as if nothing had changed. This is common when a worked example is exported to a new context: the arithmetic may be tidy, but the hypothesis that justified it is no longer present. That is why each solution should contain a short sentence stating what is assumed and what is neglected.",
          f"The most frequent mathematical error is not a long calculation, but a wrong projection, a sign chosen without criterion, or a quantity inserted in the wrong unit. When those faults accumulate, the result stops matching the diagram and loses explanatory power. Each line should therefore be checked against the axis choice, the chosen sense, and the declared unit.",
          f"The interpretation mistake arises when the final number is read outside the physical setting. A value with a plausible magnitude may still be wrong if it contradicts the direction of the effect, comparison with nearby cases, or the mechanism indicated by {p['diagram_en']}. Reading the answer well requires comparison with a limiting case, not only with intuition.",
          f"The quick self-check rule is simple: define the system, draw the interactions, justify the equation, and compare the result with a qualitative prediction. If one of those four pieces cannot be explained aloud, the problem is not understood yet even if the calculator returns a neat number. This routine looks basic, but it separates real understanding from automated repetition.",
        ]
    out = [title, '']
    for heading, text in zip(secs, texts):
        out += [heading, '', text, '']
    return '\n'.join(out).strip() + '\n'


def build_history(meta, lang):
    name = (meta['nombre']['es'] if lang == 'es' else meta['nombre']['en']).lower()
    p = force_profile(meta)
    title = '# Historia: ' + name if lang == 'es' else '# History: ' + name
    secs = REQ['historia' if lang == 'es' else 'historia_en']
    if lang == 'es':
        texts = [
          f"El problema historico no era hacer cuentas, sino encontrar una forma de describir como {p['focus_es']} mediante regularidades repetibles. Antes de eso, muchas explicaciones mezclaban intuiciones cotidianas, causas ocultas y lenguaje practico sin separar con claridad observacion y modelo. La matematizacion fue importante porque obligo a expresar desacuerdos de forma verificable.",
          f"Lo que no se entendia bien era {p['question_es']}. En muchos contextos se tomaban como equivalentes magnitudes que hoy distinguimos con cuidado, o se suponia que bastaba la impresion visual para decidir la causa del movimiento o del equilibrio. Ese tramo de confusion aparece todavia en errores escolares actuales.",
          f"El cambio llego cuando la mecanica paso a exigir sistemas bien definidos, diagramas consistentes y relaciones cuantitativas contrastables. Esa transicion convirtio el estudio de {name} en un problema que podia discutirse con datos, no solo con intuiciones de oficio. El paso de la descripcion cualitativa a la validacion cuantitativa fue decisivo.",
          f"La evolucion conceptual fue llevar el foco desde el objeto aislado hacia la interaccion y el modelo. Por eso hoy resulta natural separar cuerpo, entorno, geometria y regimen de validez, algo que historicamente costo mucho consolidar en la ensenanza y en la practica experimental. Esta reorganizacion conceptual explica por que un mismo fenomeno puede analizarse con modelos distintos.",
          f"La conexion con la fisica moderna aparece en simulacion numerica, diseno experimental y analisis de sistemas complejos. Incluso cuando el leaf se estudia en un curso basico, su estructura conceptual sigue siendo la misma que usan la ingenieria, la geofisica o la mecanica computacional. La diferencia actual no esta en la idea base, sino en la precision y en la escala de los datos.",
        ]
    else:
        texts = [
          f"The historical problem was not merely to calculate, but to find a way to describe how one could {p['focus_en']} through repeatable regularities. Before that, many explanations mixed daily intuition, hidden causes, and practical language without clearly separating observation from model. Mathematization mattered because it forced disagreements to be expressed in testable form.",
          f"What was poorly understood was {p['question_en']}. In many contexts, quantities that we now distinguish carefully were treated as equivalent, or visual impression alone was assumed to be enough to identify the cause of motion or equilibrium. That old confusion still reappears in common school mistakes.",
          f"The change came when mechanics began to demand clearly defined systems, consistent diagrams, and testable quantitative relations. That transition turned the study of {name} into a problem that could be argued with data rather than with craft intuition alone. The move from qualitative description to quantitative validation was decisive.",
          f"The conceptual evolution shifted attention from the isolated object toward interaction and model. That is why it now feels natural to separate body, environment, geometry, and validity regime, even though that distinction took a long time to stabilize historically. This reorganization explains why a single phenomenon can be analyzed with several legitimate models.",
          f"The connection with modern physics appears in numerical simulation, experimental design, and the analysis of complex systems. Even when the leaf is taught in an elementary course, its conceptual structure is the same one used in engineering, geophysics, and computational mechanics. What changes today is not the core idea, but the precision and scale of the available data.",
        ]
    out = [title, '']
    for heading, text in zip(secs, texts):
        out += [heading, '', text, '']
    return '\n'.join(out).strip() + '\n'


def build_examples(meta, forms, lang):
    name = meta['nombre']['es'] if lang == 'es' else meta['nombre']['en']
    p = force_profile(meta)
    eq = inline_math(first_formula(forms))
    target = first_target(forms)
    if lang == 'es':
        return f"""# Ejemplo tipo examen

## Enunciado

Se estudia {name.lower()} en un problema donde el dato importante no es solo numerico, sino estructural: hay que decidir si el sistema relevante es {p['system_es']} y si el entorno puede resumirse como {p['environment_es']}. El objetivo del examen es justificar por que la relacion {eq} representa el escenario mejor que otras alternativas del tema.

## Datos

Los datos deben fijar unidades, sentido positivo, geometria y parametros de material o de medio cuando los haya. Antes de operar conviene clasificar cada dato como causa externa, respuesta del sistema o condicion geometrica, porque esa separacion evita mezclar magnitudes que pertenecen a niveles distintos del modelo.
Tambien es util marcar desde este punto que datos vienen medidos, cuales se deducen y cuales solo sirven para comprobar coherencia al final.

## Definicion del sistema

El sistema se define de forma que todas las fuerzas internas irrelevantes queden fuera del balance principal. Esa eleccion debe ser compatible con {p['diagram_es']} y con la pregunta fisica central del leaf: {p['question_es']}. Si el sistema se escoge mal, el resto del ejercicio queda desordenado aunque las cuentas sean correctas.

## Modelo fisico

Se adopta el modelo minimo que conserva el mecanismo dominante. Eso significa aceptar que {p['focus_es']} y vigilar cuando {p['limit_es']}. Un buen modelo no es el mas largo, sino el que permite interpretar {target} sin introducir parametros que no cambian la conclusion.

## Justificacion del modelo

La justificacion debe explicar por que el regimen elegido es compatible con la escala del problema, con la geometria disponible y con la precision pedida. En esta fase se descartan modelos rivales que podrian ser mas completos pero no anaden una mejora real para el caso planteado.
Una buena justificacion no enumera hipotesis al azar: muestra por que cada una simplifica sin deformar el mecanismo que se quiere estudiar.

## Resolucion simbolica

La resolucion simbolica empieza con la representacion matematica adecuada del sistema, ya sean ecuaciones horarias, relaciones geometricas o balances pertinentes, y sigue con un despeje limpio de {target}. Conviene conservar la expresion literal hasta ver que dependencia tiene el resultado con cada parametro, porque asi se detecta si el efecto aumenta, disminuye o cambia de signo cuando cambia una condicion del entorno.

## Sustitucion numerica

La sustitucion numerica se hace al final con conversion explicita de unidades. Un paso util es ordenar los factores segun su papel fisico: primero los que fijan escala, despues los geometricos y al final los coeficientes de modelo. Esa rutina reduce errores y mantiene visible el origen de cada contribucion.
Si aparecen varios escenarios, conviene repetir la misma estructura de sustitucion para que la comparacion entre casos sea legible y no se convierta en una lista de numeros sueltos.

## Validacion dimensional

La validacion dimensional comprueba que la expresion final produzca la categoria correcta de magnitud y que ninguna suma mezcle objetos incompatibles. Si las unidades son coherentes pero el valor obtenido contradice una estimacion previa, hay que revisar signos, proyecciones y dominio de validez antes de aceptar el resultado.
En problemas de examen, este paso suele ser el filtro mas rapido para detectar un despeje correcto en apariencia pero fisicamente mal planteado.

## Interpretacion fisica

La lectura final debe decir que significa {target} en el sistema, que cambia si el contexto se modifica y por que el valor obtenido es compatible con {p['application_es']}. Un examen bien resuelto no termina en el numero: termina cuando se explica el mecanismo que ese numero resume. Esa explicacion final es la que permite reutilizar el metodo cuando cambian los datos pero no la estructura fisica del problema.

# Ejemplo de aplicacion real

## Contexto

En una situacion real, {name.lower()} aparece junto a incertidumbres de medida, geometria imperfecta y condiciones del entorno que no siempre son ideales. Por eso la primera tarea es decidir que detalle afecta de verdad al resultado y cual puede incorporarse solo como comentario de validez del modelo.

## Estimacion fisica

La estimacion previa sirve para fijar un rango razonable antes de calcular. Comparar escalas, orientar el signo esperado y anticipar la dependencia con masa, velocidad, angulo o rigidez hace que la solucion numerica tenga una referencia fisica y no sea una cifra aislada.
Ese rango previo tambien permite decidir si merece la pena refinar el modelo o si basta con una primera aproximacion bien interpretada.

## Interpretacion

En aplicacion real interesa responder si el modelo permite tomar una decision: disenar, medir, corregir o comparar escenarios. La interpretacion adecuada separa con claridad lo que viene de la ecuacion, lo que viene de los datos y lo que queda fuera del regimen valido del leaf.
"""
    return f"""# Exam-type example

## Problem statement

{name} is studied in a problem where the key datum is not only numerical but structural: one must decide whether the relevant system is {p['system_en']} and whether the environment can be summarized as {p['environment_en']}. The exam goal is to justify why the relation {eq} represents the setting better than nearby alternatives.

## Data

The data must fix units, positive direction, geometry, and material or medium parameters whenever they matter. Before operating, it is useful to classify each datum as external cause, system response, or geometric condition, because that separation prevents quantities from different model levels from being mixed.
It is also useful to mark at this stage which values are measured, which are deduced, and which only serve as coherence checks at the end.

## System definition

The system is chosen so that irrelevant internal forces stay outside the main balance. That decision must be compatible with {p['diagram_en']} and with the central question of the leaf: {p['question_en']}. If the system is chosen poorly, the rest of the exercise becomes disordered even when the algebra is correct.

## Physical model

The minimum model that preserves the dominant mechanism is adopted. This means accepting that one must {p['focus_en']} while watching for the moment when {p['limit_en']}. A good model is not the longest one, but the one that lets {target} be interpreted without unnecessary parameters.

## Model justification

The justification must explain why the chosen regime is compatible with the problem scale, the available geometry, and the required precision. At this stage, rival models are discarded if they are more complete but do not produce a meaningful improvement for the proposed case.
A good justification does not list assumptions at random; it shows why each one simplifies the analysis without distorting the mechanism under study.

## Symbolic solution

The symbolic solution begins with the appropriate mathematical representation of the system, whether time equations, geometric relations, or relevant balances, and continues with a clean isolation of {target}. Keeping the expression literal until the end helps reveal how the result depends on each parameter and whether the effect should increase, decrease, or change sign.

## Numerical substitution

Numerical substitution is done at the end with explicit unit conversion. A practical routine is to order factors by physical role: first those that set the scale, then the geometric ones, and finally the model coefficients. That procedure reduces mistakes and keeps the origin of each contribution visible.
If several scenarios are compared, repeating the same substitution structure helps keep the comparison readable instead of turning it into a loose list of numbers.

## Dimensional validation

Dimensional validation checks that the final expression produces the correct category of magnitude and that no sum mixes incompatible objects. If the units are coherent but the value contradicts a previous estimate, signs, projections, and validity domain must be reviewed before accepting the answer.
In exam problems, this step is often the fastest filter for detecting an apparently correct algebraic isolation that was physically posed in the wrong way.

## Physical interpretation

The final reading must state what {target} means in the system, what changes if the context is modified, and why the obtained value is compatible with {p['application_en']}. A well-solved exam problem does not stop at the number; it ends when the mechanism summarized by that number is explained.

# Real-world example

## Context

In a real setting, {name.lower()} appears together with measurement uncertainty, imperfect geometry, and environmental conditions that are not always ideal. The first task is therefore to decide which detail actually changes the result and which one should remain only as a validity comment.

## Physical estimation

The prior estimate sets a reasonable range before calculation. Comparing scales, orienting the expected sign, and anticipating dependence on mass, speed, angle, or stiffness gives the numerical solution a physical reference instead of leaving it as an isolated figure.
That preliminary range also helps decide whether the model needs refinement or whether a first well-interpreted approximation is enough.

## Interpretation

In a real application, the important question is whether the model supports a decision: design, measurement, correction, or comparison of scenarios. The correct interpretation clearly separates what comes from the equation, what comes from the data, and what lies outside the valid regime of the leaf.
That final separation is what turns a solved example into a transferable criterion for a new problem instead of into a memorized recipe.
It also tells the reader which part of the answer can be generalized and which part belongs only to the particular numerical case.
"""


def build_apps(meta, lang):
    name = meta['nombre']['es'] if lang == 'es' else meta['nombre']['en']
    p = force_profile(meta)
    labels_es = ['Laboratorio escolar', 'Lectura instrumental', 'Ingenieria basica', 'Comparacion de contextos', 'Revision de resultados']
    labels_en = ['School laboratory', 'Instrument reading', 'Basic engineering', 'Context comparison', 'Result checking']
    labels = labels_es if lang == 'es' else labels_en
    out = []
    for i, label in enumerate(labels, 1):
        if lang == 'es':
            paragraph = (
              f"En {label.lower()} conviene usar {name.lower()} para tomar una decision concreta y no solo para repetir una formula. "
              f"En {label.lower()}, la situacion se entiende mejor si primero se identifica {p['diagram_es']} y despues se comprueba si el escenario realmente permite {p['focus_es']}. "
              f"En {label.lower()}, este tipo de aplicacion obliga a traducir el modelo a una accion: medir, comparar, disenar o corregir una prediccion con base en {p['application_es']}. "
              f"Ademas, en {label.lower()} hay que explicar que dato manda, que aproximacion se esta usando y que cambio del entorno volveria insuficiente la lectura obtenida. "
              f"En {label.lower()}, esa explicacion final permite decidir si el resultado sirve para actuar o solo para ilustrar una tendencia."
            )
            dominant = f"Variable dominante: en {label.lower()}, interesa ante todo {p['focus_es']}."
            limit = f"Limite de validez: en {label.lower()}, revisar si {p['limit_es']}."
        else:
            paragraph = (
              f"In {label.lower()}, {name.lower()} should be used to support a concrete decision rather than to repeat a formula. "
              f"In {label.lower()}, the situation becomes clearer if one first identifies {p['diagram_en']} and then checks whether the scenario really allows one to {p['focus_en']}. "
              f"In {label.lower()}, the model must be translated into an action: measure, compare, design, or correct a prediction based on {p['application_en']}. "
              f"In {label.lower()}, one must also state explicitly which datum dominates, which approximation is being used, and which environmental change would invalidate the reading. "
              f"In {label.lower()}, that final explanation determines whether the result is operational or merely illustrative."
            )
            dominant = f"Dominant variable: in {label.lower()}, the main issue is to {p['focus_en']}."
            limit = f"Validity limit: in {label.lower()}, review whether {p['limit_en']}."
        out += [f'## {i}. {label}', '', paragraph, '', dominant, '', limit, '']
    return '\n'.join(out).strip() + '\n'


def docs(leaf, meta, forms):
    data={
      'teoria.md': build_theory(meta,forms,'es'),'teoria.en.md': build_theory(meta,forms,'en'),
      'modelos.md': build_models(meta,'es'),'modelos.en.md': build_models(meta,'en'),
      'errores.md': build_errors(meta,'es'),'errores.en.md': build_errors(meta,'en'),
      'historia.md': build_history(meta,'es'),'historia.en.md': build_history(meta,'en'),
      'ejemplos.md': build_examples(meta,forms,'es'),'ejemplos.en.md': build_examples(meta,forms,'en'),
      'aplicaciones.md': build_apps(meta,'es'),'aplicaciones.en.md': build_apps(meta,'en'),
    }
    for k,v in data.items(): (leaf/k).write_text(v,encoding='utf-8')


def upgrade(leaf):
    leaf=Path(leaf)
    meta=enrich_meta(leaf)
    mags=enrich_magnitudes(leaf,meta)
    forms=enrich_formulas(leaf,meta,mags)
    mags=ensure_extra_magnitudes(leaf,meta,mags,forms)
    build_interpretation(leaf,meta,mags,forms)
    docs(leaf,meta,forms)

if __name__=='__main__':
    upgrade(sys.argv[1])
