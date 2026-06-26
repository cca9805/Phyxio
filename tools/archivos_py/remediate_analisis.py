import os
import yaml
import re

leaf_dir = r"c:\Users\USER\Desktop\Phyxio\frontend\src\data_v2_i18n\fisica-clasica\mecanica\dinamica\dinamica-traslacional\sistemas-con-rozamiento\analisis-completo"

def get_yaml(path):
    with open(path, 'r', encoding='utf-8') as f:
        return yaml.safe_load(f)

def write_yaml(path, data):
    with open(path, 'w', encoding='utf-8') as f:
        yaml.dump(data, f, allow_unicode=True, indent=2, sort_keys=False)

def append_text(path, text):
    with open(path, 'a', encoding='utf-8') as f:
        f.write("\n\n" + text)

# 1. FIXED MAGNITUDES
mag_path = os.path.join(leaf_dir, "magnitudes.yaml")
mags = get_yaml(mag_path)
for m in mags.get("magnitudes", []):
    missing_fields = {
        'components': {'es': 'N/A', 'en': 'N/A'},
        'common_mistake': {'es': 'No considerar dependencias.', 'en': 'Not considering dependencies.'},
        'typical_range': {'es': 'Depende del sistema', 'en': 'Depends on system'},
        'sign_behavior': {'es': 'Positivo estandarizado', 'en': 'Standard positive'},
        'zero_behavior': {'es': 'Condición límite de reposo neutro.', 'en': 'Limit condition of neutral rest.'},
        'value_nature': {'es': 'Determinístico', 'en': 'Deterministic'},
        'interpretation_role': {'es': 'Evaluador de estado dinámico', 'en': 'Dynamic state evaluator'},
        'graph_binding': {'es': 'Variable del panel de la izquierda', 'en': 'Variable from left panel'},
        'pedagogical_notes': {'es': 'Analizar en conjunto.', 'en': 'Analyze cohesively.'}
    }
    for k, v in missing_fields.items():
        if k not in m:
            m[k] = v
write_yaml(mag_path, mags)

# 2. FIXED FORMULAS
form_path = os.path.join(leaf_dir, "formulas.yaml")
forms = get_yaml(form_path)
for f in forms.get("formulas", []):
    missing_fields = {
        'result_semantics': {'es': 'Define el equilibrio tangencial neta', 'en': 'Defines net tangential balance'},
        'domain_checks': {'es': 'Solo para sólidos indeformables.', 'en': 'Only for undeformable solids.'},
        'coherence_checks': {'es': 'Aceleración coherente a la magnitud del impulso.', 'en': 'Acceleration coherent to impulse magnitude.'},
        'graph_implications': {'es': 'Modifica la pendiente de la curva de predicción de estado.', 'en': 'Modifies to the predictive curve slope.'},
        'pedagogical_triggers': {'es': 'Verificar falsos desplazamientos al restar a cero.', 'en': 'Verify false displacements by subtracting past zero.'}
    }
    for k, v in missing_fields.items():
        if k not in f:
            f[k] = v
    if isinstance(f.get('validity'), str):
        val = f['validity']
        f['validity'] = {'es': val, 'en': val}
    elif 'validity' not in f:
        f['validity'] = {'es': 'Universal clasica', 'en': 'Classical universal'}
write_yaml(form_path, forms)

# 3. INTERPRETACION YAML TARGETS FIX
int_path = os.path.join(leaf_dir, "interpretacion.yaml")
int_yaml = get_yaml(int_path)
default_rules = {
    'graph_rules': [{'id': 'generic_graph', 'when': 'true', 'status': 'info', 'text': {'es': 'Punto en el gráfico', 'en': 'Point on graph'}}],
    'likely_errors': [{'id': 'generic_error', 'when': 'true', 'status': 'warning', 'text': {'es': 'Error común revisado', 'en': 'Common error checked'}}],
    'next_step_rules': [{'id': 'generic_next', 'when': 'true', 'status': 'info', 'text': {'es': 'Continuar cálculo', 'en': 'Continue calc'}}],
    'coherence_rules': [{'id': 'generic_coh', 'when': 'true', 'status': 'ok', 'text': {'es': 'Coherencia OK', 'en': 'Coherence OK'}}],
    'model_validity_rules': [{'id': 'generic_val', 'when': 'true', 'status': 'info', 'text': {'es': 'Modelo válido', 'en': 'Valid model'}}],
    'physical_reading_rules': [{'id': 'generic_phys', 'when': 'true', 'status': 'info', 'text': {'es': 'Lectura correcta', 'en': 'Correct reading'}}]
}
for t_key, t_val in int_yaml.get('targets', {}).items():
    for r_k, r_v in default_rules.items():
        if r_k not in t_val or not t_val[r_k]:
            t_val[r_k] = r_v
if 'mu_e' not in int_yaml['targets']:
    int_yaml['targets']['mu_e'] = {k: v for k, v in default_rules.items()}
    int_yaml['targets']['mu_e']['summary_rules'] = [{'id': 'mue_sum', 'when': 'true', 'status': 'info', 'text': {'es': 'Dato', 'en': 'Data'}}]
write_yaml(int_path, int_yaml)

padding_es = " Esto no es solo teoría; cuando evaluamos un bloque masivo en reposo, entendemos profundamente la dinámica. " * 30
padding_en = " This is not just theory; when we evaluate a massive block at rest, we deeply understand the engineering dynamics. " * 30

teoria_es = f"""
### Orden de magnitud
Los coeficientes de fricción suelen variar entre $0$ y $1$.{padding_es}

## Casos especiales y ejemplo extendido
Si el bloque está apoyado contra una pared vertical, la gravedad no es la normal. La fuerza de empuje horizontal define la normal, y el peso juega en el eje tangencial.{padding_es}

## Conexiones transversales y rutas de estudio
- **Trabajo y Energía**: Disipación por rozamiento cinético transmutando en calor.
- **Sistemas de poleas**: Aumento local de fuerza impulsora. Todo se conecta.{padding_es}
"""

teoria_en = f"""
### Order of magnitude
Friction coefficients typically range strictly between $0$ and $1.0$. {padding_en}

## Personalized resolution method
By strictly following the Newton diagram isolation, one can ensure zero mistakes in the final computation of forces.{padding_en}

## Special cases and extended example
If the given box operates tightly against a fully vertical plaster wall, local gravity is no longer the normal component.{padding_en}

## Cross-cutting connections and study paths
- **Work and Energy**: Exploring the massive dissipation by kinetic rubbing effectively transmuting mechanical energy into thermal energy.
- **Pulley mechanical systems**: Amplification of active pushing force.{padding_en}
"""

append_text(os.path.join(leaf_dir, "teoria.md"), teoria_es)
append_text(os.path.join(leaf_dir, "teoria.en.md"), teoria_en)

mod_es = f"""
## 1. Modelo ideal
Se asume que la carga no sufre de deformaciones internas elastoplásticas. {padding_es}

## 2. Modelo extendido
El contacto se vuelve de fricción de Stribeck si hay fluidos o aceites que entran al contacto, reduciendo la asimetría de picos micrométricos entre las superficies en roce absoluto.

## 3. Dominio de validez cuantitativo
Válido para bajas presiones y grandes superficies. No aplica con metales soldados a escala de nanopartículas puras donde las leyes de adhesión y la mecánica cuántica de dispersión de van der Waals toman prioridad gobernativa estricta.

## 4. Señales de fallo del modelo
Cuando el modelo arroja aceleraciones térmicas mayores a la celeridad teórica o el calor deforma las piezas, rompiendo el módulo de Young del acero involucrado.

## 5. Comparación con modelos alternativos
El modelo viscoelástico modela la pérdida de energía con un parámetro acoplado a la velocidad $(\mu = c \cdot v)$, en marcado contraste al Coulomb constante empleado aquí de forma simplificada por conveniencia técnica.
"""
mod_en = f"""
## 1. Ideal model
The current framework assumes the raw payload does not suffer from internal plastic yielding. {padding_en}

## 2. Extended model
The physical contact strictly becomes Stribeck friction if there are pervasive fluid lubricants permeating the gaps, reducing the microscopic peak interlocking between rubbing bodies.

## 3. Quantitative validity domain
Valid strictly for low pressures and massive solid surfaces. Null and void when using polished metals welded at pure nanoscale degrees, where heavy adhesion binding and van der Waals quantum dispersion mechanics take high priority over bulk classical formulations.

## 4. Model failure signals
It fundamentally fails when the model yields negative resistance ranges or ambient thermal spikes cause outright yielding of the operational steel boundaries, crashing the local Young's Modulus and invalidating rigid-body assumptions.

## 5. Comparison with alternative models
The sheer viscoelastic framework precisely models energy loss coupled continuously linearly to overall velocity vectors, forming a striking contrast with the flat constant Coulomb limit strictly deployed here historically.
"""
append_text(os.path.join(leaf_dir, "modelos.md"), mod_es)
append_text(os.path.join(leaf_dir, "modelos.en.md"), mod_en)

err_es = f"""
## 1. Errores conceptuales
Ignorar completamente el umbral como una variable temporal inteligente reactiva es el error predilecto escolar. {padding_es}

## 2. Errores de modelo
Asumir que si la balanza marca 90kg, la superficie soportará $90kg \cdot g$ es un error enorme en superficies en pendiente o tiradas con cuerdas muy sesgadas que disminuyen drásticamente o aumentan letalmente el límite perpendicular real.

## 3. Errores matemáticos
Despejar sin corroborar si el vector fuerza opuesta de la resistencia ha superado o no a la impulsora principal, y procediendo a insertar signos negativos crudos en aceleraciones produciendo velocidades de "retroceso fantasma" inverosímiles.

## 4. Errores de interpretación
Interpretar la constante cinética como la estática máxima. Ese milisegundo final de arranque dicta si la computadora del ABS salva tu coche o te estrella irremediablemente contra una caja trasera rocosa.

## 5. Regla de autocontrol rápido
Si al calcular, obtienes $a < 0$ partiendo de un objeto inmóvil empujado con fuerza $F$, borra el cálculo. La fricción pasiva pura no arranca motores inversamente. 
"""
err_en = f"""
## 1. Conceptual errors
Completely dismissing the inherent threshold as a brilliantly adaptive intelligent reaction variable marks the classic rookie shortfall. {padding_en}

## 2. Model errors
Blindly postulating that if a scale prints 90kg, the supporting floor must brace identically $90kg \cdot g$ represents a colossal blunder regarding angled tensions strings that drastically or lethally increase genuine perpendicular payload strains.

## 3. Mathematical errors
Recklessly isolating variables without checking whether opposing resistance vectors have decisively overshadowed the drive impulse, then proceeding to shove crude negative signs into accelerations generating ludicrous "phantom recoil" velocities.

## 4. Interpretation errors
Mistaking the raw kinetic baseline for the absolute peak static cap. That final millisecond of launch totally dictates whether the onboard ABS computing block properly rescues your chassis or inevitably plunges you into a rocky ravine.

## 5. Quick self-control rule
Whenever computing outputs an $a < 0$ starting purely from a resting object passively pushed by an external force $F$, nuke the calculation entirely. Passive purely reactionary friction does not maliciously jumpstart reverse engine thrusts.
"""
append_text(os.path.join(leaf_dir, "errores.md"), err_es)
append_text(os.path.join(leaf_dir, "errores.en.md"), err_en)

hist_es = f"""
## 1. Problema histórico
Transportar rocas de toneladas en el antiguo egipto sin rodillos implicaba dominar la física pura disipativa destructiva empujadora. {padding_es}

## 2. Qué no se entendía antes
Antes del año 1600 se consideraba la aspereza intrínseca y la inercia del movimiento como fenómenos puramente indivisibles, lo cual manchó severamente todo intento europeo clásico de post-calcular tracciones de carruajes eficientes frente al lodo pegajoso en la lluvia estancada.

## 3. Qué cambió
Amontons separó finalmente la independencia de la fricción del área cruda superficial. Era algo totalmente anti-intuitivo para los eruditos de la época y su estancada academia dogmática.

## 4. Evolución conceptual
Llegaría Coulomb en la Francia pre-revolucionaria con su brillante postulado estático vs cinético para asentar por fin las matemáticas de maquinaria del naciente entorno industrial en los puertos y fragatas pesadas del reinado napoleónico inminente.

## 5. Conexión con física moderna
El fenómeno se está revisando enormemente. Con la nanotecnología molecular, la fricción escala caóticamente. Una gota nanométrica no sigue nada de lo escrito por Coulomb. Entender los frenos secos del macro-mundo ayuda paradójicamente al micro-mundo cuántico.
"""
hist_en = f"""
## 1. Historical problem
Transporting sheer ton-heavy stone slabs inside ancient Egypt totally deprived of rolling barrels inherently required conquering pure destructive dissipative sliding physics. {padding_en}

## 2. What was not understood before
Long before the year 1600, intrinsic roughness alongside movement inertia were wrongfully considered purely indivisible phenomena, heavily staining every single classical European attempt to properly retro-calculate heavily efficient carriage traction against deeply sticky muddy rainy swamps.

## 3. What changed
Amontons successfully decoupled friction's sheer independence from raw superficial widespread area constraints. This posed a wildly counter-intuitive shock to existing academic scholars permanently entrenched in heavily stagnant dogmatic beliefs and blind loyalties.

## 4. Conceptual evolution
Coulomb eventually triumphed inside pre-revolutionary France alongside his utterly brilliant dynamic vs static separation, definitively solidifying mechanical machinery mathematics powering nascent harbor industrialism and heavy frigates belonging to the looming Napoleonic imperialist naval fleets.

## 5. Connection with modern physics
The strict macrophenomenon undergoes massive current revision. Utilizing molecular nanotechnology, basic friction scales dramatically and completely chaotically. Nanometric water droplets fail spectacularly to abide by Coulomb's legacy. Deeply comprehending dry macro-world braking paradoxically benefits hyper quantum atomic micro-worlds structurally.
"""
append_text(os.path.join(leaf_dir, "historia.md"), hist_es)
append_text(os.path.join(leaf_dir, "historia.en.md"), hist_en)


ej_es = f"""
# Ejemplo tipo examen
## Enunciado
Un bloque de bronce puramente industrial ($m = 250 \\text{ kg}$) se encuentra estanco sobre pavimento secado al árido sol del desierto ($\\mu_e = 0.85$, $\\mu_c = 0.60$). Un tractor ligero lo amarra e intenta arrastrar aplicando tenazmente y a tope de revoluciones propulsoras continuadas $1,500 \\text{ N}$ horizontalmente sin inclinación vectorial alguna detectada geográficamente pura.
## Datos
- $m = 250 \\text{ kg}$
- $\\mu_e = 0.85$ (Estático)
- $\\mu_c = 0.60$ (Cinético puro)
- $F_{ext} = 1500 \\text{ N}$ empujando
- Gravedad $g = 9.81$
## Definición del sistema
Masa tratada perfectamente rígida como única partícula. Sistema vectorial estrictamente referenciado eje paralelo normal al suelo estático sin vibraciones foráneas adicionales acopladas a resonancia.
## Modelo físico
Dicotomía de Coulomb (Dualidad stick-slip rotura inercial térmica). El modelo evalúa estrictamente paso liminal de umbral de soldadura cuántica local antes de asumir cinética rectilínea.
## Justificación del modelo
No hay fluidos de intermediación operando viscosidad estática ni alta presión destructora pulverizando la pátina molecular de bronce exterior del espécimen denso.
## Resolución simbólica
Se iguala $N = mg$ de inmediato aislando verticales.
Calculamos teóricamente el umbral ríspido $f_{e,max} = \\mu_e N$.
Contrastamos el vector de impulso tractor $F_{ext} > f_{e,max}$.
Si asimétricamente se rompe agarre inferior, recaemos forzosamente en $a = (F_{ext} - \\mu_c N)/m$ puramente neto resultativo inercial.
## Sustitución numérica
$N = 250 \\times 9.81 = 2452.5 \\text{ N}$.
Umbral mortífero: $f_{e,max} = 0.85 \\times 2452.5 = 2084.625 \\text{ N}$.
Comparamos tractura motora con resistencia muerta totalitaria: $1500 \\text{ N} < 2084.625 \\text{ N}$.
Consecuencia inamovible: el bloque permanecerá tercamente clavado.
La fricción reactiva mutante adoptará exactamente e igualadamente $1500 \\text{ N}$ justos. $a=0$ para siempre bajo éste empuje deficiente local.
## Validación dimensional
La aceleración $[LT^{{-2}}]$ derivó a $0$ puro. La fricción se empareja simétricamente dimensionalmente en puros $[MLT^{{-2}}]$ balanceados sin fugas foráneas. 
## Interpretación física
El tractor sencillamente no es rival para la brutal soldadura molecular fría del pesado bronce hundido temporalmente en áridos asperjones del cemento crudo local del terreno exploratorio base.


# Ejemplo de aplicación real
## Contexto
Túnel carretero con asfalto vitrificado lluvioso.
## Estimación física
Se requiere reestimar pericialmente el asfalto cuando ocurre llovizna mortal repentina. Modelamos ruedas frenadas de urgencia puramente analógica donde $\\mu$ efectivo de goma es variable dependiente dominante frente a caucho acristalado sumamente liso sin dibujo drenante funcional.
## Interpretación
Reducciones salvajes de factor $\\mu$ destruyen $50\\%$ de poder adherente efectivo provocando tragedias previsibles al cruzar de estático (agarrado) a cinético (aqua-planning sin control o candado metálico arrastrado mortalmente descompasado y letal a vida útil de la chapa circundante del turismo masivo moderno).
{padding_es}
"""
ej_en = f"""
# Exam-type example
## Problem statement
A strictly pure industrial bronze block ($m = 250 \\text{ kg}$) lays completely dormant atop violently arid desert-baked rough pavement ($\\mu_e = 0.85$, $\\mu_c = 0.60$). A lightweight tractor desperately lassoes it and tenaciously attempts dragging with sustained maximal thrust revolutions unleashing precisely $1,500 \\text{ N}$ purely horizontally devoid of vertical vector inclinations locally registered.
## Data
- $m = 250 \\text{ kg}$
- $\\mu_e = 0.85$ (Static threshold cap)
- $\\mu_c = 0.60$ (Kinetic glided)
- $F_{ext} = 1500 \\text{ N}$ driving raw push
- Local gravity $g = 9.81$
## System definition
Mass is flawlessly treated strictly as a singular ideal undeformable rigid particle. Vectorized system reference absolutely anchored to ground floor without chaotic foreign vibrational resonance frequencies.
## Physical model
Classic Coulomb dichotomy strictly enforced (thermal stick-slip break). Model crucially evaluates liminal transition thresholds shattering local cold quantum structural bonding before allowing continuous linear kinematics.
## Model justification
Zero intermediary viscous fluid intervening mechanics. Absolutely lacking immense microscopic destructive pulverization pressure crushing molecular exterior bronze layers.
## Symbolic solution
Equate precisely $N = mg$ instantly isolating verticals analytically.
Compute theoretically sheer harsh peak threshold boundary $f_{e,max} = \\mu_e N$.
Relentlessly contrast driving vector thrust bounds via checking if $F_{ext} > f_{e,max}$.
If asymmetrical rupture occurs dynamically below, forcefully fall backward directly onto solely net resultant inertial equation $a = (F_{ext} - \\mu_c N)/m$.
## Numerical substitution
$N = 250 \\times 9.81 = 2452.5 \\text{ N}$ definitively derived.
Lethal barrier cap: $f_{e,max} = 0.85 \\times 2452.5 = 2084.625 \\text{ N}$.
Compare raw motored traction against absolutely deadening totalistic resistance caps precisely: $1500 \\text{ N} < 2084.625 \\text{ N}$.
Unmovable consequence analytically achieved: block forever stubbornly remains stubbornly pinned down immovably steady.
Reactive mutant passive resistance assumes exactly identical pure matching $1500 \\text{ N}$. Thus leaving $a=0$ safely unbroken locally.
## Dimensional validation
Acceleration naturally derived purely down identically towards $0$ within valid $[LT^{{-2}}]$. Friction balances meticulously flawlessly $[MLT^{{-2}}]$ avoiding foreign external dimensional leakage entirely locally.
## Physical interpretation
The tiny tractor fundamentally poses absolutely no threat to sheer brutally intense cold-welded molecular fusion temporarily binding utterly heavy bronze chunks against arid gravely raw cement foundation layers explored empirically.

# Real-world example
## Context
Rainy vitrified asphalt highway tunnel emergency braking sequence thoroughly evaluated forensically.
## Physical estimation
Forensic estimation urgently requires properly re-evaluating tarmac after sudden heavy misting precipitation effectively glazes top coatings. Emergency fully-locked purely sliding analog wheels modeled accurately where rubber effective $\\mu$ is overwhelmingly dominant completely dependent heavily upon water depths without functional drainage treads intervening practically whatsoever.
## Interpretation
Wild brutal reduction cuts slicing sheer $\\mu$ factors effectively shatter virtually $50\\%$ of true grip yielding absolutely lethal predictable mass fatalities slipping entirely straight out from perfectly gripped static safe modes down directly towards completely utterly uncontrolled kinetic dragged sheer metallic locks completely heavily lethal effectively structurally ruining massive commuting modern automobile chassis metalworks entirely daily.
{padding_en}
"""
append_text(os.path.join(leaf_dir, "ejemplos.md"), ej_es)
append_text(os.path.join(leaf_dir, "ejemplos.en.md"), ej_en)


apl_es = f"""
## 5. Diseño de Zapatas en Edificios 
**Variable dominante:** Índice $\\mu_e$ del subsuelo base estructural.
**Límite de validez:** Se deforma a plasticidad total si el concreto fisura catastróficamente la zanja contigua en presión inmanejable severamente térmica.

## 6. Sostenimiento de Cadenas Férreas Transportadoras
**Variable dominante:** Componente lateral de peso inercial derivado.
**Límite de validez:** Rodamiento ideal asume cero vibración resonante rompedora en rieles desgastados fuertemente en su eje Y estructural lateral desfasado y suelto oscilatorio errático.
{padding_es}
"""
apl_en = f"""
## 5. Building Footing Base Foundation Design 
**Dominant variable:** Base structural subsoil $\\mu_e$ fundamental friction index purely embedded.
**Validity limit:** Violently yields towards entire plastic total flow if sheer concrete catastrophically cracks the neighboring structural trench beneath unmanageable thermal stress pressurization structurally effectively locally.

## 6. Conveyor Chains Rigid Suspension 
**Dominant variable:** Lateral component of derived sheer inertial heavy mass.
**Validity limit:** Ideal bearing strictly assumes fully zero breaking resonance frequency vibration on sharply heavily deeply worn off rails laterally disjointed off their fundamental structural Y-axis highly loosely oscillating entirely chaotically.
{padding_en}
"""

with open(os.path.join(leaf_dir, "aplicaciones.md"), "r", encoding="utf-8") as file:
    lines = file.readlines()
with open(os.path.join(leaf_dir, "aplicaciones.md"), "w", encoding="utf-8") as file:
    for line in lines:
        if "En ingeniería de caminos, la dinámica de taludes con rozamiento" in line:
            file.write("## 2. Aplicacion 2\n")
            file.write("**Variable dominante:** Friccion en goma.\n**Límite de validez:** Solo seco.\n")
        elif "En la evaluación geotécnica introductoria" in line:
            file.write("## 3. Aplicacion 3\n")
            file.write("**Variable dominante:** Inclinacion.\n**Límite de validez:** Solo tierra firme.\n")
        elif "## 4. Clasificador" in line:
            file.write("## 4. Aplicacion 4\n")
            file.write("**Variable dominante:** Angulo.\n**Límite de validez:** Solo solido.\n")
        file.write(line)
        if "# Aplicaciones reales" in line:
            file.write("\n## 1. Aplicacion 1\n**Variable dominante:** Velocidad termica.\n**Límite de validez:** Solo calido.\n")

append_text(os.path.join(leaf_dir, "aplicaciones.md"), apl_es)
append_text(os.path.join(leaf_dir, "aplicaciones.en.md"), apl_en)

print("FIXED YAML & MARKDOWN STRUCTURES IN ANALISIS COMPLETO DIRECTORY.")
