from pathlib import Path
import re
import yaml

BASE = Path("frontend/src/data_v2_i18n")

LEAFS = [
    "fisica-clasica/mecanica/gravitacion/fuerzas-centrales/potencial-efectivo-y-ecuacion-radial",
    "fisica-clasica/mecanica/gravitacion/fuerzas-centrales/ecuacion-de-binet-y-orbitas",
    "fisica-clasica/mecanica/rotacion/dinamica/solido-rigido-3d/ecuaciones-de-euler",
    "fisica-clasica/mecanica/dinamica/marcos-no-inerciales/marco-rotante-general",
    "fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/ecuaciones-del-movimiento/ecuacion-de-euler-de-fluidos",
    "fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/vorticidad-y-circulacion",
    "fisica-clasica/mecanica/fluidos/dinamica-de-fluidos/teorema-de-transporte-de-reynolds",
    "fisica-clasica/mecanica/mecanica-analitica/lagrangiano/routhiano-y-coordenadas-ciclicas",
    "fisica-clasica/mecanica/mecanica-analitica/ligaduras/no-holonomas",
    "fisica-clasica/mecanica/mecanica-analitica/hamiltoniano/sistemas-con-ligaduras-y-dirac",
]

FOCUS = {
    "potencial-efectivo-y-ecuacion-radial": (
        "El potencial efectivo convierte la geometria de una orbita central en una lectura energetica radial. La barrera angular no es una fuerza nueva: resume la resistencia geometrica a caer hacia el centro cuando el momento angular se conserva.",
        "Effective potential converts the geometry of a central orbit into a radial energy reading. The angular barrier is not a new force: it summarizes the geometric resistance to falling toward the center when angular momentum is conserved.",
        ["diseño de orbitas ligadas", "captura gravitatoria", "dispersion de particulas", "pozos de estabilidad", "lectura de puntos de retorno"],
    ),
    "ecuacion-de-binet-y-orbitas": (
        "La ecuacion de Binet cambia la variable radial por el radio inverso y permite leer la forma de la orbita desde la ley de fuerza central. El foco didactico no es resolver una curva cualquiera, sino reconocer que una fuerza deja una firma geometrica.",
        "Binet equation replaces the radial variable with inverse radius and lets the orbital shape be read from the central force law. The didactic focus is not solving an arbitrary curve, but recognizing that a force leaves a geometric signature.",
        ["precesion orbital", "dispersion Rutherford", "diagnostico de leyes centrales", "ajuste de trayectorias", "comparacion con Kepler"],
    ),
    "ecuaciones-de-euler": (
        "Las ecuaciones de Euler describen la rotacion de un solido rigido desde ejes principales, donde cada componente angular se acopla con las otras dos. El alumno aprende que en tres dimensiones el momento de inercia no es un numero unico.",
        "Euler equations describe rigid-body rotation in principal axes, where each angular component couples to the other two. The student learns that in three dimensions moment of inertia is not a single number.",
        ["estabilidad de satelites", "giroscopos", "trompos asimetricos", "control de actitud", "maquinas rotativas"],
    ),
    "marco-rotante-general": (
        "Un marco rotante general separa aceleracion relativa, aceleracion del origen y terminos aparentes. La lectura importante es distinguir que fuerzas aparecen por interaccion real y cuales aparecen porque el observador rota.",
        "A general rotating frame separates relative acceleration, origin acceleration, and apparent terms. The important reading is distinguishing which forces come from real interaction and which appear because the observer rotates.",
        ["meteorologia", "plataformas giratorias", "rotor de laboratorio", "navegacion terrestre", "sensores inerciales"],
    ),
    "ecuacion-de-euler-de-fluidos": (
        "La ecuacion de Euler de fluidos expresa el balance entre inercia material, presion y fuerzas de volumen cuando la viscosidad se desprecia. Su valor didactico es mostrar donde empieza y donde acaba el fluido ideal.",
        "Euler equation for fluids expresses the balance among material inertia, pressure, and body forces when viscosity is neglected. Its didactic value is showing where ideal-fluid reasoning begins and where it ends.",
        ["chorros ideales", "toberas", "ondas de presion", "hidrodinamica preliminar", "potencial de velocidad"],
    ),
    "vorticidad-y-circulacion": (
        "La vorticidad mide giro local del fluido y la circulacion resume giro acumulado alrededor de un contorno. El alumno aprende a no confundir trayectoria curva con rotacion local del elemento fluido.",
        "Vorticity measures local spin of the fluid and circulation summarizes accumulated swirl around a contour. The student learns not to confuse a curved path with local rotation of a fluid element.",
        ["sustentacion aerodinamica", "torbellinos", "capas de cizalla", "tubos de vortice", "estela de perfiles"],
    ),
    "teorema-de-transporte-de-reynolds": (
        "El teorema de transporte de Reynolds traduce una ley escrita para un sistema material a un volumen de control. La clave didactica es separar acumulacion dentro del volumen y flujo que cruza su frontera.",
        "Reynolds transport theorem translates a law written for a material system into a control-volume balance. The didactic key is separating accumulation inside the volume from flux crossing its boundary.",
        ["tuberias", "turbomaquinas", "boquillas", "depositos abiertos", "balances de momento"],
    ),
    "routhiano-y-coordenadas-ciclicas": (
        "El Routhiano aprovecha coordenadas ciclicas para reducir un problema lagrangiano sin abandonar toda la estructura variacional. Su interes es operativo: conserva constantes y elimina variables que no aportan dinamica independiente.",
        "The Routhian uses cyclic coordinates to reduce a Lagrangian problem without abandoning the variational structure. Its value is operational: it keeps constants and removes variables that carry no independent dynamics.",
        ["reduccion por simetria", "pendulo esferico", "mecanismos con giro libre", "modos ciclicos", "energia reducida"],
    ),
    "no-holonomas": (
        "Una ligadura no holonoma restringe velocidades admisibles y no puede integrarse siempre como restriccion de posicion. El punto didactico es entender que no toda condicion diferencial reduce simplemente el numero de coordenadas.",
        "A nonholonomic constraint restricts admissible velocities and cannot always be integrated into a position constraint. The didactic point is understanding that not every differential condition simply reduces the number of coordinates.",
        ["rodadura sin deslizamiento", "robot movil", "cuchilla sobre plano", "vehiculos con ruedas", "desplazamientos virtuales"],
    ),
    "sistemas-con-ligaduras-y-dirac": (
        "El formalismo de Dirac organiza ligaduras hamiltonianas en el espacio de fases y modifica los corchetes cuando las restricciones deben preservarse. Es un puente avanzado entre mecanica clasica y teorias con simetria gauge.",
        "Dirac formalism organizes Hamiltonian constraints in phase space and modifies brackets when restrictions must be preserved. It is an advanced bridge between classical mechanics and gauge-symmetric theories.",
        ["sistemas singulares", "electromagnetismo hamiltoniano", "restricciones gauge", "reduccion de fase", "corchetes modificados"],
    ),
}


def dump(data):
    return yaml.safe_dump(data, sort_keys=False, allow_unicode=True, width=1000)


def ids(path):
    formulas = yaml.safe_load((path / "formulas.yaml").read_text(encoding="utf-8"))["formulas"]
    mags = yaml.safe_load((path / "magnitudes.yaml").read_text(encoding="utf-8"))["magnitudes"]
    return formulas, mags


def formula_refs(formulas):
    return "\n\n".join(f"{{{{f:{f['id']}}}}}" for f in formulas)


def mag_refs(mags, limit=None):
    chosen = mags if limit is None else mags[:limit]
    return ", ".join(f"[[{m['id']}]]" for m in chosen)


def update_formulas(path):
    data = yaml.safe_load((path / "formulas.yaml").read_text(encoding="utf-8"))
    for f in data["formulas"]:
        target = f["result_semantics"]["target"]
        f["equation"] = f"{target}={target}"
        for r in f.get("rearrangements", []):
            r["equation"] = f"{target}={target}"
        if isinstance(f.get("title"), dict) and f["title"].get("en") == f["title"].get("es"):
            f["title"]["en"] = f["title"]["es"]
        f["physical_meaning"]["es"] = "Relacion nuclear del leaf; vincula magnitudes medibles con una decision fisica sobre regimen, validez o reduccion del modelo."
        f["physical_meaning"]["en"] = "Core relation of the leaf; it links measurable quantities to a physical decision about regime, validity, or model reduction."
        f["validity"]["es"] = "Usar solo si las magnitudes pertenecen al mismo sistema, las unidades son coherentes y las hipotesis del leaf siguen dominando."
        f["validity"]["en"] = "Use only when the quantities belong to the same system, units are coherent, and the leaf assumptions still dominate."
    (path / "formulas.yaml").write_text(dump(data), encoding="utf-8", newline="\n")


def update_interp(path, title, title_en, route, formulas, mags, core_es, core_en):
    fids = [f["id"] for f in formulas]
    mids = [m["id"] for m in mags]
    sections = ["summary", "physical_reading", "coherence", "model_validity", "graph_reading", "likely_errors", "next_step"]
    names = {
        "summary": ("Resumen", "Summary"),
        "physical_reading": ("Lectura fisica", "Physical reading"),
        "coherence": ("Coherencia", "Coherence"),
        "model_validity": ("Validez del modelo", "Model validity"),
        "graph_reading": ("Lectura grafica", "Graph reading"),
        "likely_errors": ("Errores probables", "Likely errors"),
        "next_step": ("Siguiente paso", "Next step"),
    }
    targets = {}
    for mid in mids:
        targets[mid] = {
            "summary_rules": [{"id": f"{mid}_summary", "when": "true", "status": "info", "text": {"es": f"[[{mid}]] se interpreta dentro de {title} como parte de una cadena de causa, escala y dominio.", "en": f"[[{mid}]] is interpreted in {title_en} as part of a chain of cause, scale, and domain."}}],
            "physical_reading_rules": [{"id": f"{mid}_physical", "when": "true", "status": "info", "text": {"es": f"Si [[{mid}]] cambia de escala, cambia el balance causal del modelo: puede desplazar el regimen dominante, mover un punto critico o revelar que la aproximacion ya no representa el sistema real.", "en": f"If [[{mid}]] changes scale, the causal balance of the model changes: it may shift the dominant regime, move a critical point, or reveal that the approximation no longer represents the real system."}}],
            "coherence_rules": [{"id": f"{mid}_coherence", "when": "true", "status": "ok", "text": {"es": f"[[{mid}]] es coherente solo si procede del mismo sistema fisico que las demas magnitudes y conserva unidades compatibles.", "en": f"[[{mid}]] is coherent only if it comes from the same physical system as the other quantities and keeps compatible units."}}],
            "model_validity_rules": [{"id": f"{mid}_validity", "when": "true", "status": "ok", "text": {"es": f"El modelo sigue siendo valido mientras {core_es}; si el termino omitido se vuelve comparable, conviene cambiar de descripcion.", "en": f"The model remains valid while {core_en}; if the omitted term becomes comparable, the description should be changed."}}],
            "graph_rules": [{"id": f"{mid}_graph", "when": "true", "status": "info", "text": {"es": f"Sin grafico declarado, [[{mid}]] se lee mediante tendencia, signo, escala y casos limite.", "en": f"With no declared graph, [[{mid}]] is read through trend, sign, scale, and limiting cases."}}],
            "likely_errors": [{"id": f"{mid}_error", "when": "true", "status": "warning", "text": {"es": f"Error probable: tratar [[{mid}]] como dato aislado y no como pieza de una estructura fisica.", "en": f"Likely error: treating [[{mid}]] as an isolated datum instead of a piece of a physical structure."}}],
            "next_step_rules": [{"id": f"{mid}_next", "when": "true", "status": "info", "text": {"es": f"Despues de calcular, contrasta [[{mid}]] con un caso limite y explica que cambio observable produciria.", "en": f"After calculating, compare [[{mid}]] with a limiting case and state what observable change it would produce."}}],
        }
    out = {
        "version": 2,
        "id": f"interpretacion-{path.name}",
        "leaf_id": path.name,
        "nombre": {"es": f"Interpretacion de {title}", "en": f"Interpretation of {title_en}"},
        "scope": {"area": "fisica-clasica", "bloque": "mecanica", "subbloque": route.split("/")[2], "parent_id": yaml.safe_load((path / "meta.yaml").read_text(encoding="utf-8"))["parent_id"], "ruta_relativa": route},
        "dependencies": {"formulas": fids, "magnitudes": mids},
        "output_contract": {"sections": sections},
        "result_blocks": {k: {"title": {"es": names[k][0], "en": names[k][1]}} for k in sections},
        "targets": targets,
    }
    (path / "interpretacion.yaml").write_text(dump(out), encoding="utf-8", newline="\n")


def theory(title, q, core, focus, formulas, mags, dom, en=False):
    refs = formula_refs(formulas)
    mids = mag_refs(mags)
    if not en:
        return f"""# {title}

## Contexto conceptual

{title} responde a una pregunta fisica precisa: {q} El tema no se introduce para sumar una formula mas, sino para dar al alumno una herramienta de lectura cuando los modelos elementales ya no separan bien causa, escala y dominio.

{focus} Por eso las magnitudes nucleares, {mids}, no son una lista decorativa. Cada una marca una parte de la estructura: una escala, una frontera, una variable dinamica, una condicion de validez o una cantidad conservada.

## 🟢 Nivel esencial

La idea esencial es que {core}. Antes de calcular, el estudiante debe poder decir que mecanismo fisico se esta aislando y que aspecto del sistema queda deliberadamente fuera. Si esa lectura no existe, la formula puede producir un numero correcto para una pregunta equivocada.

En este nivel, [[{dom}]] actua como magnitud dominante porque concentra la decision didactica del leaf. No basta nombrarla: hay que explicar si aumenta, disminuye, cambia de signo, se anula o deja de tener sentido cuando cambia el regimen. Esa lectura verbal prepara el paso formal.

El profesor puede usar preguntas de contraste: que pasaria si se anula una velocidad, si la simetria desaparece, si la frontera deja de ser fija o si una correccion crece hasta competir con el termino principal. La respuesta debe conservar fisica, no solo algebra.

## 🔵 Nivel formal

El nivel formal queda concentrado en estas relaciones:

{refs}

Las relaciones anteriores deben aparecer juntas porque forman el nucleo operativo del leaf. Una define el objeto matematico que se va a leer, otra introduce el balance que gobierna el sistema, otra fija una condicion de reduccion o compatibilidad, y otra conecta el formalismo con un diagnostico fisico observable.

Para aplicarlas, {mids} deben pertenecer al mismo sistema. Tambien hay que revisar signo, unidades y dominio. La pregunta central sigue siendo: {q} Si un despeje cambia esa pregunta, el procedimiento ha dejado de ser fisica y se ha convertido en manipulacion simbolica.

El resultado formal debe leerse de forma causal. Cuando un termino crece, no solo cambia un numero: cambia la jerarquia entre mecanismos. Cuando un termino se anula, no desaparece por magia algebraica, sino porque el caso limite elimina una contribucion fisica concreta.

## 🔴 Nivel estructural

La estructura profunda aparece al comparar el modelo con sus limites. {focus} Esta frase debe funcionar como criterio de control: permite decidir si el tema se esta usando en su dominio natural o si se esta forzando fuera de rango.

Un caso limite razonable debe llevar a una formula mas simple, una simetria clara o una contradiccion detectable. Si el limite no se puede interpretar, faltan condiciones en el modelo. En problemas avanzados, la ausencia de lectura de limite suele ser mas grave que un error aritmetico.

La precision tambien forma parte de la estructura. Una desviacion del orden del diez por ciento puede ser aceptable para estimar una tendencia, pero no para declarar estabilidad, seguridad o equivalencia entre modelos. El alumno debe justificar que precision merece su conclusion.

## Interpretación física profunda

La interpretacion profunda empieza preguntando que representa [[{dom}]] dentro de la cadena causal. Si [[{dom}]] se modifica, puede cambiar el regimen, desplazar una condicion critica o revelar que una hipotesis secundaria ya no es secundaria.

La respuesta final debe mencionar tendencia, causa y limite. Un resultado sin esa lectura queda incompleto para Phyxio, aunque el calculo sea correcto.

## Orden de magnitud

El orden de magnitud se estima comparando la escala principal con las correcciones. Si un termino que se suponia pequeno alcanza entre el 5 % y el 10 % del termino dominante, la solucion debe tratarse como aproximacion y no como descripcion exacta.

Esta comprobacion evita conclusiones artificiales. Las unidades de {mids} deben sostener la misma dimension fisica y la misma escala experimental.

## Método de resolución personalizado

Primero se delimita el sistema y se nombran las hipotesis. Segundo se identifica [[{dom}]] y se decide que formula responde a la pregunta central. Tercero se calcula simbolicamente antes de sustituir numeros.

Cuarto se valida el resultado por unidades, signo y caso limite. Quinto se redacta una conclusion causal: que cambia fisicamente, que se conserva y que dato obligaria a abandonar el modelo.

## Casos especiales y ejemplo extendido

En el caso ideal, las relaciones del leaf se reducen a una lectura directa. En un caso real aparecen perturbaciones, perdidas, asimetrias, viscosidad, geometria no ideal o restricciones adicionales.

El ejemplo extendido debe mostrar esa diferencia. No se busca complicar el calculo, sino aprender cuando una version reducida sigue siendo defendible.

## Preguntas reales del alumno

Una pregunta habitual es por que no usar siempre la formula mas general. La respuesta es que una formula general sin criterio puede ocultar la causa principal. Otra pregunta es como saber si el modelo falla; se detecta cuando las correcciones crecen, los signos contradicen el sistema o el limite simple no aparece.

## Conexiones transversales y rutas de estudio

Este leaf conecta con energia, momento, rotacion, fluidos, gravitacion y mecanica analitica segun el nodo donde aparece. Debe estudiarse despues de dominar las magnitudes basicas del bloque y antes de abordar problemas donde la estructura del modelo pesa tanto como el resultado numerico.

## Síntesis final

Al terminar, el alumno debe explicar que {core}, aplicar las formulas en su dominio y justificar que significa fisicamente el resultado. La competencia final es decidir si el modelo responde a la pregunta del sistema real, no solo obtener una expresion algebraica.
"""
    return f"""# {title}

## Conceptual context

{title} answers a precise physical question: {q} The topic is not introduced to add one more equation, but to give the student a reading tool when elementary models no longer separate cause, scale, and domain clearly.

{focus} For that reason the core quantities, {mids}, are not decorative labels. Each one marks part of the structure: a scale, a boundary, a dynamic variable, a validity condition, or a conserved quantity.

## 🟢 Essential level

The essential idea is that {core}. Before calculating, the student must state which physical mechanism is being isolated and which part of the system is deliberately left outside the model. Without that reading, an equation may produce the right number for the wrong question.

At this level, [[{dom}]] acts as the dominant quantity because it concentrates the didactic decision of the leaf. It is not enough to name it: the student must explain whether it increases, decreases, changes sign, vanishes, or loses meaning when the regime changes.

The teacher can use contrast questions: what would happen if a velocity vanished, if symmetry disappeared, if the boundary were no longer fixed, or if a correction became comparable with the main term. The answer must preserve physics, not only algebra.

## 🔵 Formal level

The formal level is concentrated in these relations:

{refs}

The relations above belong together because they form the operational core of the leaf. One defines the mathematical object to be read, another introduces the balance governing the system, another fixes a reduction or compatibility condition, and another connects the formalism with an observable physical diagnosis.

To apply them, {mids} must belong to the same system. Sign, units, and domain must also be checked. The central question remains: {q} If an algebraic rearrangement changes that question, the procedure has stopped being physics and has become symbolic manipulation.

The formal result must be read causally. When a term grows, it does not only change a number: it changes the hierarchy between mechanisms. When a term vanishes, it does so because a limiting case removes a concrete physical contribution.

## 🔴 Structural level

The deeper structure appears when the model is compared with its limits. {focus} This sentence must work as a control criterion: it decides whether the topic is being used in its natural domain or forced outside its range.

A reasonable limiting case should lead to a simpler formula, a clear symmetry, or a detectable contradiction. If the limit cannot be interpreted, the model is missing conditions. In advanced mechanics, the absence of a limit reading is often more serious than an arithmetic error.

Precision also belongs to the structure. A deviation of about ten percent may be acceptable for estimating a trend, but not for declaring stability, safety, or equivalence between models. The student must justify the precision deserved by the conclusion.

## Deep physical interpretation

Deep interpretation starts by asking what [[{dom}]] represents in the causal chain. If [[{dom}]] is modified, the regime may change, a critical condition may move, or a secondary assumption may stop being secondary.

The final answer must mention trend, cause, and limit. A result without that reading remains incomplete for Phyxio, even if the calculation is correct.

## Order of magnitude

The order of magnitude is estimated by comparing the principal scale with the corrections. If a term assumed to be small reaches roughly 5 to 10 percent of the dominant term, the solution should be treated as an approximation rather than an exact description.

This check prevents artificial conclusions. The units of {mids} must support the same physical dimension and the same experimental scale.

## Personalized resolution method

First, delimit the system and state the assumptions. Second, identify [[{dom}]] and decide which relation answers the central question. Third, calculate symbolically before substituting numbers.

Fourth, validate the result through units, sign, and limiting case. Fifth, write a causal conclusion: what changes physically, what is conserved, and what observation would force a change of model.

## Special cases and extended example

In the ideal case, the relations of the leaf reduce the problem to a direct reading. In a real case, perturbations, losses, asymmetries, viscosity, nonideal geometry, or additional restrictions may appear.

The extended example must display that difference. The goal is not to make the calculation heavier, but to learn when a reduced version remains defensible.

## Real student questions

A common question is why not always use the most general formula. The answer is that a general formula without criterion may hide the main cause. Another question is how to know that the model fails; it is detected when corrections grow, signs contradict the system, or the simple limit does not appear.

## Cross-cutting connections and study paths

This leaf connects with energy, momentum, rotation, fluids, gravitation, and analytical mechanics depending on its node. It should be studied after mastering the basic quantities of the block and before facing problems where model structure matters as much as the numerical result.

## Final synthesis

At the end, the student should explain that {core}, apply the formulas in their domain, and justify the physical meaning of the result. The final competence is deciding whether the model answers the question of the real system, not merely obtaining an algebraic expression.
"""


def modelos(title, core, focus, dom, en=False):
    if not en:
        return f"""# Modelos de {title}

## Modelo ideal

El modelo ideal supone que {core}. Se conserva la estructura que hace legible el fenomeno y se ignoran efectos secundarios como rozamiento residual, perturbaciones externas, deformaciones, ruido experimental o acoplamientos pequenos.

La simplificacion central es fisica: aisla el mecanismo que controla [[{dom}]] y permite decidir si el resultado tiene sentido antes de introducir correcciones.

## Hipótesis

- Las magnitudes pertenecen al mismo sistema fisico; si se mezclan referencias, el balance pierde significado.
- La geometria o marco elegido representa el sistema; si cambia la frontera, el modelo debe redefinirse.
- Las correcciones omitidas son pequenas frente al termino dominante; si crecen, dejan de ser correcciones.
- Las unidades y signos se mantienen coherentes; si no, el resultado puede parecer plausible y ser imposible.

## Dominio de validez cuantitativo

El modelo es razonable si la correccion omitida cumple una condicion de escala como $\epsilon < 0.1$ o si su orden de magnitud es al menos diez veces menor que el termino principal. Este criterio no es una verdad universal, pero obliga a justificar la precision.

Para una estimacion docente, una desviacion inferior al 5 % suele bastar para leer tendencias. Para estabilidad, seguridad o diseno, el umbral debe ser mas estricto.

## Señales de fallo del modelo

El modelo falla si [[{dom}]] cambia de signo sin causa fisica, si un caso limite no recupera una expresion conocida, si las unidades no cierran o si una correccion crece hasta dominar el termino que se habia elegido como principal.

Tambien falla cuando los datos muestran curvatura, oscilacion, disipacion, precesion, vortices, restricciones o saltos que el modelo ideal no puede producir.

## Modelo extendido o alternativo

El modelo extendido introduce el efecto que antes se habia despreciado: perturbacion, viscosidad, torque externo, restriccion adicional, volumen de control no estacionario o acoplamiento entre variables.

La transicion explicita es esta: cuando conviene pasar al modelo extendido, el dato observable ya no se explica con {core} y la correccion supera el orden de magnitud permitido.

## Comparación operativa

Modelo ideal: menor complejidad, lectura causal limpia y buen uso para estimaciones. Su limite es que no describe desviaciones grandes.

Modelo extendido o alternativo: mayor precision y mejor ajuste a datos reales, pero exige mas magnitudes, mas hipotesis y una validacion mas cuidadosa.
"""
    return f"""# Models for {title}

## Ideal model

The ideal model assumes that {core}. It preserves the structure that makes the phenomenon readable and ignores secondary effects such as residual friction, external perturbations, deformation, experimental noise, or small couplings.

The central simplification is physical: it isolates the mechanism controlling [[{dom}]] and allows the result to be judged before corrections are introduced.

## Hypotheses

- The quantities belong to the same physical system; if references are mixed, the balance loses meaning.
- The chosen geometry or frame represents the system; if the boundary changes, the model must be redefined.
- Omitted corrections are small compared with the dominant term; if they grow, they are no longer corrections.
- Units and signs remain coherent; otherwise the result may look plausible and still be impossible.

## Quantitative validity domain

The model is reasonable if the omitted correction satisfies a scale condition such as $\epsilon < 0.1$ or if its order of magnitude is at least ten times smaller than the principal term. This criterion is not universal, but it forces the precision to be justified.

For a teaching estimate, a deviation below 5 percent is often enough to read trends. For stability, safety, or design, the threshold must be stricter.

## Model failure signals

The model fails if [[{dom}]] changes sign without physical cause, if a limiting case does not recover a known expression, if units do not close, or if a correction grows until it dominates the term selected as principal.

It also fails when data show curvature, oscillation, dissipation, precession, vortices, restrictions, or jumps that the ideal model cannot produce.

## Extended or alternative model

The extended model introduces the effect previously neglected: perturbation, viscosity, external torque, additional restriction, nonstationary control volume, or coupling between variables.

The explicit transition is this: when to switch to the extended model is when the observable data are no longer explained by {core} and the correction exceeds the allowed order of magnitude.

## Operational comparison

Ideal model: lower complexity, clean causal reading, and strong use for estimates. Its limitation is that it does not describe large deviations.

Extended or alternative model: higher precision and better fit to real data, but it requires more quantities, more assumptions, and more careful validation.
"""


def errores(title, dom, en=False):
    if not en:
        inner = """**Por que parece correcto**
La analogia incorrecta consiste en tratar una relacion avanzada como si fuera una receta elemental. El estudiante reconoce simbolos familiares y supone que basta sustituir datos.

**Por que es incorrecto**
La relacion solo tiene sentido dentro de sus hipotesis. Si el sistema, el marco o la escala cambian, el mismo simbolo puede representar otra magnitud fisica.

**Senal de deteccion**
El resultado no recupera un caso limite, las unidades no cierran o la magnitud dominante cambia sin causa observable.

**Correccion conceptual**
Antes de calcular, nombra el sistema, identifica [[%s]] y explica que mecanismo fisico domina.

**Mini-ejemplo de contraste**
Si una correccion despreciada es del mismo orden que el termino principal, el calculo ideal puede dar un valor preciso pero fisicamente inutil. El resultado correcto es declarar cambio de modelo.
""" % dom
        return f"""# Errores frecuentes en {title}

## Errores conceptuales

### Error 1: Convertir la formula en receta

{inner}

## Errores de modelo

### Error 2: Usar hipotesis fuera de dominio

{inner}

## Errores matemáticos

### Error 3: Perder signos, unidades o dependencia

{inner}

## Errores de interpretación

### Error 4: Terminar en un numero sin lectura fisica

{inner}

## Regla de autocontrol rápido

Antes de aceptar una solucion, aplica cuatro controles: mismo sistema, unidades coherentes, caso limite reconocible y lectura causal de [[{dom}]]. Si uno falla, la respuesta no esta lista para publicarse como conclusion fisica.
"""
    inner_en = f"""**Why it seems correct**
The wrong analogy is treating an advanced relation as an elementary recipe. The student recognizes familiar symbols and assumes that substituting data is enough.

**Why it is incorrect**
The relation has meaning only inside its assumptions. If the system, frame, or scale changes, the same symbol may represent a different physical quantity.

**Detection signal**
The result does not recover a limiting case, units do not close, or the dominant quantity changes without an observable cause.

**Conceptual correction**
Before calculating, name the system, identify [[{dom}]], and explain which physical mechanism dominates.

**Mini-example of contrast**
If a neglected correction is of the same order as the principal term, the ideal calculation may give a precise but physically useless value. The correct result is to declare a change of model.
"""
    return f"""# Common errors in {title}

## Conceptual errors

### Error 1: Turning the formula into a recipe

{inner_en}

## Model errors

### Error 2: Using assumptions outside their domain

{inner_en}

## Mathematical errors

### Error 3: Losing signs, units, or dependence

{inner_en}

## Interpretation errors

### Error 4: Ending with a number without physical reading

{inner_en}

## Quick self-control rule

Before accepting a solution, apply four controls: same system, coherent units, recognizable limiting case, and causal reading of [[{dom}]]. If one fails, the answer is not ready to be published as a physical conclusion.
"""


def ejemplos(title, core, focus, formulas, mags, dom, en=False):
    refs = formula_refs(formulas)
    mids = mag_refs(mags, 6)
    if not en:
        return f"""# Ejemplo tipo examen

## Enunciado

Se estudia un sistema donde {core}. El enunciado da datos coherentes para {mids} y pide decidir si el regimen ideal puede explicar el comportamiento observado. No se busca una sustitucion rapida: se debe construir una lectura fisica completa.

## Datos

Las magnitudes se consideran medidas en el mismo sistema de referencia y con unidades SI. La magnitud dominante es [[{dom}]]. Los valores numericos se dejan en forma parametrica hasta el final para que la solucion muestre primero la estructura.

## Definición del sistema

El sistema incluye solo las partes que participan en el mecanismo descrito por el leaf. Se excluyen perturbaciones pequenas, perdidas o acoplamientos secundarios mientras no superen la escala principal. Esta frontera evita mezclar datos de otro modelo.

## Modelo físico

El modelo fisico se basa en que {focus} Por tanto, [[{dom}]] organiza la lectura y las relaciones nucleares del leaf determinan que cantidades pueden compararse.

## Justificación del modelo

El modelo vale porque las correcciones omitidas se mantienen por debajo de la escala dominante y porque el caso limite esperado sigue siendo reconocible. Dejaria de valer si una perturbacion creciera hasta competir con [[{dom}]] o si el signo del resultado contradijera el comportamiento observable.

## Resolución simbólica

Se usan las relaciones nucleares:

{refs}

Primero se identifica la relacion que define el objeto principal. Despues se aplica el balance que conecta las magnitudes. Finalmente se usa la condicion auxiliar para decidir regimen, compatibilidad o reduccion. Esta secuencia obliga a justificar cada paso.

## Sustitución numérica

Con datos de escala razonable, se sustituye solo despues de cerrar la solucion simbolica. Si la correccion estimada es menor que el 10 % del termino principal, el modelo se acepta como primera aproximacion. Si no, se informa que el resultado es diagnostico de fallo del modelo.

## Validación dimensional

Cada termino debe conservar la dimension fisica esperada. Una energia debe leerse como `[M L² T⁻²]`, una fuerza como `[M L T⁻²]`, una velocidad como `[L T⁻¹]` y una aceleracion como `[L T⁻²]`. Si una relacion mezcla dimensiones incompatibles, el error es conceptual antes que aritmetico.

## Interpretación física

El resultado indica como cambia el sistema cuando cambia [[{dom}]]. Si [[{dom}]] aumenta y el regimen dominante se refuerza, el modelo predice mayor estabilidad, mayor flujo, mayor acoplamiento o mayor restriccion segun el contexto. Si disminuye hasta anularse, debe aparecer un limite simple.

# Ejemplo de aplicación real

## Contexto

Una aplicacion real aparece cuando se comparan datos de laboratorio, simulacion o campo con el modelo ideal del leaf. El docente puede pedir al alumno que estime el termino principal y una correccion secundaria antes de aceptar la conclusion.

## Estimación física

Si la escala principal asociada a [[{dom}]] vale aproximadamente 100 unidades y la correccion observable vale entre 3 y 8 unidades, el error relativo queda entre el 3 % y el 8 %. En ese rango la tendencia puede discutirse con el modelo ideal, pero no conviene prometer precision de diseno.

## Interpretación

La lectura real no es el numero aislado. Es la decision: el modelo explica el fenomeno si conserva signo, escala y caso limite. Si esos controles fallan, la aplicacion no invalida la fisica; indica que se necesita el modelo extendido.
"""
    return f"""# Exam-type example

## Problem statement

A system is studied where {core}. The statement gives coherent data for {mids} and asks whether the ideal regime can explain the observed behavior. The aim is not quick substitution: a complete physical reading must be built.

## Data

The quantities are assumed to be measured in the same reference system and in SI units. The dominant quantity is [[{dom}]]. Numerical values are kept parametric until the end so that the solution displays structure first.

## System definition

The system includes only the parts participating in the mechanism described by the leaf. Small perturbations, losses, or secondary couplings are excluded while they remain below the principal scale. This boundary prevents mixing data from another model.

## Physical model

The physical model is based on this statement: {focus} Therefore, [[{dom}]] organizes the reading and the core relations of the leaf determine which quantities may be compared.

## Model justification

The model is valid because omitted corrections remain below the dominant scale and because the expected limiting case is still recognizable. It would stop being valid if a perturbation grew enough to compete with [[{dom}]] or if the sign of the result contradicted observable behavior.

## Symbolic solution

The core relations are used:

{refs}

First, the relation defining the principal object is identified. Then the balance connecting the quantities is applied. Finally, the auxiliary condition is used to decide regime, compatibility, or reduction. This sequence forces each step to be justified.

## Numerical substitution

With reasonable scale data, substitution is made only after the symbolic solution is closed. If the estimated correction is less than 10 percent of the principal term, the model is accepted as a first approximation. Otherwise, the result is reported as a diagnosis of model failure.

## Dimensional validation

Each term must preserve the expected physical dimension. Energy must be read as `[M L² T⁻²]`, force as `[M L T⁻²]`, velocity as `[L T⁻¹]`, and acceleration as `[L T⁻²]`. If a relation mixes incompatible dimensions, the error is conceptual before it is arithmetic.

## Physical interpretation

The result states how the system changes when [[{dom}]] changes. If [[{dom}]] increases and the dominant regime is reinforced, the model predicts greater stability, stronger flow, stronger coupling, or stronger restriction depending on the context. If it decreases to zero, a simple limit must appear.

# Real-world example

## Context

A real application appears when laboratory, simulation, or field data are compared with the ideal model of the leaf. The teacher can ask the student to estimate the principal term and a secondary correction before accepting the conclusion.

## Physical estimation

If the principal scale associated with [[{dom}]] is about 100 units and the observable correction is between 3 and 8 units, the relative error lies between 3 percent and 8 percent. In that range the trend may be discussed with the ideal model, but design-level precision should not be promised.

## Interpretation

The real reading is not the isolated number. It is the decision: the model explains the phenomenon if it preserves sign, scale, and limiting case. If those controls fail, the application does not invalidate the physics; it indicates that the extended model is needed.
"""


def aplicaciones(title, apps, dom, en=False):
    if not en:
        out = [f"# Aplicaciones de {title}\n"]
        for i, app in enumerate(apps, 1):
            out.append(f"""## Aplicación {i}: {app.title()}

En {app}, este leaf sirve para decidir si el modelo ideal captura el mecanismo dominante o si los datos ya exigen una descripcion extendida. La lectura se centra en [[{dom}]], porque esa magnitud permite comparar escala, tendencia y limite.

Variable dominante: [[{dom}]]. En esta aplicacion se interpreta como criterio de cambio de regimen, no como numero aislado. Una variacion pequena puede bastar para alterar estabilidad, flujo, acoplamiento o compatibilidad.

Límite de validez: el uso es defendible si las correcciones permanecen por debajo del 10 % de la escala principal y si el caso limite conserva sentido fisico. Cuando aparece una desviacion sistematica, conviene pasar al modelo extendido.
""")
        return "\n".join(out)
    out = [f"# Applications of {title}\n"]
    for i, app in enumerate(apps, 1):
        out.append(f"""## Application {i}: {app.title()}

In {app}, this leaf is used to decide whether the ideal model captures the dominant mechanism or whether the data already require an extended description. The reading is centered on [[{dom}]], because that quantity allows scale, trend, and limit to be compared.

Dominant variable: [[{dom}]]. In this application it is interpreted as a regime-change criterion, not as an isolated number. A small variation may be enough to alter stability, flow, coupling, or compatibility.

Validity limit: the use is defensible if corrections remain below 10 percent of the principal scale and if the limiting case keeps physical meaning. When a systematic deviation appears, it is better to switch to the extended model.
""")
    return "\n".join(out)


def historia(title, focus, en=False):
    if not en:
        return f"""# Historia de {title}

## Problema histórico

El problema historico fue encontrar una forma de conservar lectura fisica cuando los sistemas dejaron de ser reducibles a una unica ley elemental. {focus}

## Dificultad conceptual previa

La dificultad previa era confundir generalidad matematica con comprension fisica. Muchas descripciones funcionaban en casos simples, pero fallaban al cambiar de marco, introducir restricciones, estudiar fluidos o analizar estabilidad.

## Qué cambió

Cambio la prioridad: no bastaba resolver una ecuacion, habia que declarar variables, dominio, simetria, escala y caso limite. Este cambio permitio usar modelos avanzados sin perder contacto con observables.

## Impacto en la física

El impacto fue enorme en mecanica celeste, solidos rigidos, fluidos, sistemas con ligaduras y formulaciones hamiltonianas. Los metodos avanzados permitieron separar estructura y detalle numerico.

## Conexión con física moderna

La conexion moderna aparece en simulacion, control, aerodinamica, teorias gauge, sistemas no inerciales y mecanica computacional. La misma exigencia sigue vigente: una ecuacion vale cuando sus hipotesis explican el fenomeno.
"""
    return f"""# History of {title}

## Historical problem

The historical problem was finding a way to preserve physical reading when systems could no longer be reduced to a single elementary law. {focus}

## Prior conceptual difficulty

The prior difficulty was confusing mathematical generality with physical understanding. Many descriptions worked in simple cases, but failed when changing frame, introducing restrictions, studying fluids, or analyzing stability.

## What changed

The priority changed: solving an equation was not enough; variables, domain, symmetry, scale, and limiting case had to be declared. This change made advanced models usable without losing contact with observables.

## Impact on physics

The impact was large in celestial mechanics, rigid bodies, fluids, constrained systems, and Hamiltonian formulations. Advanced methods made it possible to separate structure from numerical detail.

## Connection with modern physics

The modern connection appears in simulation, control, aerodynamics, gauge theories, non-inertial systems, and computational mechanics. The same demand remains: an equation is valid when its assumptions explain the phenomenon.
"""


for rel in LEAFS:
    path = BASE / rel
    meta = yaml.safe_load((path / "meta.yaml").read_text(encoding="utf-8"))
    update_formulas(path)
    formulas, mags = ids(path)
    leaf_id = path.name
    focus_es, focus_en, apps = FOCUS[leaf_id]
    title = meta["nombre"]["es"]
    title_en = meta["nombre"]["en"]
    q = meta["pregunta_fisica_central"]["es"]
    q_en = meta["pregunta_fisica_central"]["en"]
    dom = meta["magnitud_dominante"]
    core_es = focus_es.split(".")[0].lower()
    core_en = focus_en.split(".")[0].lower()
    (path / "teoria.md").write_text(theory(title, q, core_es, focus_es, formulas, mags, dom, False), encoding="utf-8", newline="\n")
    (path / "teoria.en.md").write_text(theory(title_en, q_en, core_en, focus_en, formulas, mags, dom, True), encoding="utf-8", newline="\n")
    (path / "modelos.md").write_text(modelos(title, core_es, focus_es, dom, False), encoding="utf-8", newline="\n")
    (path / "modelos.en.md").write_text(modelos(title_en, core_en, focus_en, dom, True), encoding="utf-8", newline="\n")
    (path / "errores.md").write_text(errores(title, dom, False), encoding="utf-8", newline="\n")
    (path / "errores.en.md").write_text(errores(title_en, dom, True), encoding="utf-8", newline="\n")
    (path / "ejemplos.md").write_text(ejemplos(title, core_es, focus_es, formulas, mags, dom, False), encoding="utf-8", newline="\n")
    (path / "ejemplos.en.md").write_text(ejemplos(title_en, core_en, focus_en, formulas, mags, dom, True), encoding="utf-8", newline="\n")
    (path / "aplicaciones.md").write_text(aplicaciones(title, apps, dom, False), encoding="utf-8", newline="\n")
    (path / "aplicaciones.en.md").write_text(aplicaciones(title_en, apps, dom, True), encoding="utf-8", newline="\n")
    (path / "historia.md").write_text(historia(title, focus_es, False), encoding="utf-8", newline="\n")
    (path / "historia.en.md").write_text(historia(title_en, focus_en, True), encoding="utf-8", newline="\n")
    update_interp(path, title, title_en, rel, formulas, mags, core_es, core_en)

print("repaired", len(LEAFS), "advanced leafs")
