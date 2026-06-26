from pathlib import Path
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

APPS = {
    "potencial-efectivo-y-ecuacion-radial": ["diseño de orbitas ligadas", "captura gravitatoria", "dispersion de particulas", "pozos de estabilidad", "lectura de puntos de retorno"],
    "ecuacion-de-binet-y-orbitas": ["precesion orbital", "dispersion Rutherford", "diagnostico de leyes centrales", "ajuste de trayectorias", "comparacion con Kepler"],
    "ecuaciones-de-euler": ["estabilidad de satelites", "giroscopos", "trompos asimetricos", "control de actitud", "maquinas rotativas"],
    "marco-rotante-general": ["meteorologia", "plataformas giratorias", "rotor de laboratorio", "navegacion terrestre", "sensores inerciales"],
    "ecuacion-de-euler-de-fluidos": ["chorros ideales", "toberas", "ondas de presion", "hidrodinamica preliminar", "potencial de velocidad"],
    "vorticidad-y-circulacion": ["sustentacion aerodinamica", "torbellinos", "capas de cizalla", "tubos de vortice", "estela de perfiles"],
    "teorema-de-transporte-de-reynolds": ["tuberias", "turbomaquinas", "boquillas", "depositos abiertos", "balances de momento"],
    "routhiano-y-coordenadas-ciclicas": ["reduccion por simetria", "pendulo esferico", "mecanismos con giro libre", "modos ciclicos", "energia reducida"],
    "no-holonomas": ["rodadura sin deslizamiento", "robot movil", "cuchilla sobre plano", "vehiculos con ruedas", "desplazamientos virtuales"],
    "sistemas-con-ligaduras-y-dirac": ["sistemas singulares", "electromagnetismo hamiltoniano", "restricciones gauge", "reduccion de fase", "corchetes modificados"],
}

def dump(data):
    return yaml.safe_dump(data, sort_keys=False, allow_unicode=True, width=1000)

def patch_formulas(path):
    p = path / "formulas.yaml"
    data = yaml.safe_load(p.read_text(encoding="utf-8"))
    for f in data["formulas"]:
        f["latex"] = f["latex"].replace(r"\frac{dU_{eff}}{dr}=0", r"\partial_r U_{eff}=0")
        for r in f.get("rearrangements", []):
            r["latex"] = r["latex"].replace(r"\frac{dU_{eff}}{dr}=0", r"\partial_r U_{eff}=0")
    p.write_text(dump(data), encoding="utf-8", newline="\n")

def add_after(text, marker, extra):
    return text.replace(marker, marker + "\n\n" + extra, 1)

def patch_theory(path, en=False):
    p = path / ("teoria.en.md" if en else "teoria.md")
    text = p.read_text(encoding="utf-8")
    if en:
        extra = ("A useful classroom test is to ask for a qualitative prediction before any substitution: "
                 "which term dominates, which sign is expected, and which limiting case should appear. "
                 "If the student can answer that, the later algebra has a physical target. If not, the "
                 "same calculation becomes fragile because there is no criterion for detecting an impossible result.")
        marker = "The teacher can use contrast questions: what would happen if a velocity vanished, if symmetry disappeared, if the boundary were no longer fixed, or if a correction became comparable with the main term. The answer must preserve physics, not only algebra."
        text = add_after(text, marker, extra)
        extra2 = ("This structural level is also where comparison between methods becomes meaningful. "
                  "Two procedures may produce similar numbers while relying on different assumptions; the accepted answer is the one whose assumptions match the observable system and whose limiting case remains interpretable.")
        marker2 = "The student must justify the precision deserved by the conclusion."
        text = add_after(text, marker2, extra2)
    else:
        extra = ("Una prueba didactica util es pedir una prediccion cualitativa antes de sustituir: "
                 "que termino domina, que signo se espera y que caso limite deberia aparecer. "
                 "Si el alumno responde eso, el algebra posterior tiene objetivo fisico. Si no, "
                 "el mismo calculo queda fragil porque no hay criterio para detectar un resultado imposible.")
        marker = "El profesor puede usar preguntas de contraste: que pasaria si se anula una velocidad, si la simetria desaparece, si la frontera deja de ser fija o si una correccion crece hasta competir con el termino principal. La respuesta debe conservar fisica, no solo algebra."
        text = add_after(text, marker, extra)
        extra2 = ("Este nivel estructural tambien permite comparar metodos. Dos procedimientos pueden dar numeros parecidos y, sin embargo, apoyarse en hipotesis distintas. La respuesta aceptable es la que conserva correspondencia entre hipotesis, observacion y limite interpretable.")
        marker2 = "El alumno debe justificar que precision merece su conclusion."
        text = add_after(text, marker2, extra2)
    p.write_text(text, encoding="utf-8", newline="\n")

def patch_modelos(path, en=False):
    p = path / ("modelos.en.md" if en else "modelos.md")
    text = p.read_text(encoding="utf-8")
    text = text.replace("$\\epsilon < 0.1$", "epsilon < 0.1")
    if en:
        text += "\nA final operational check is to compare prediction, observation, and limiting case in the same paragraph. This prevents the extended model from being used only as a numerical patch.\n"
    p.write_text(text, encoding="utf-8", newline="\n")

def errores(title, dom, en=False):
    if not en:
        return f"""# Errores frecuentes en {title}

## Errores conceptuales

### Error 1: Confundir simbolo con significado

**Por que parece correcto**
La confusion nace de una analogia superficial: el alumno ve un simbolo conocido y cree que conserva automaticamente el mismo significado en cualquier marco o dominio.

**Por que es incorrecto**
En este leaf, el significado depende de hipotesis, escala y sistema. La misma letra puede cambiar de papel si cambia la geometria, la frontera o el tipo de balance.

**Senal de deteccion**
El resultado parece numericamente razonable pero no permite explicar que mecanismo domina ni que cambio observable produciria [[{dom}]].

**Correccion conceptual**
Antes de operar, escribe una frase causal: [[{dom}]] aumenta, disminuye o cambia de regimen porque modifica una parte concreta del modelo.

**Mini-ejemplo de contraste**
Si dos sistemas usan la misma letra para magnitudes distintas, sustituir sin redefinir produce una igualdad formal y una lectura fisica falsa. El resultado correcto exige volver al sistema.

## Errores de modelo

### Error 2: Suponer que la aproximacion no tiene frontera

**Por que parece correcto**
La generalizacion excesiva aparece cuando una formula ha funcionado en ejercicios anteriores y se aplica a cualquier dato parecido.

**Por que es incorrecto**
Toda aproximacion omite terminos. Cuando una correccion se vuelve comparable con la escala principal, el modelo ideal ya no representa el sistema real.

**Senal de deteccion**
La desviacion se repite en el mismo sentido, el caso limite no aparece o la prediccion cambia demasiado al variar poco un dato.

**Correccion conceptual**
Declara un criterio cuantitativo, por ejemplo correccion menor que 10 %, y cambia de modelo cuando ese criterio no se cumple.

**Mini-ejemplo de contraste**
Un ajuste ideal puede parecer limpio con dos puntos, pero fallar con una serie completa. Lo correcto es reconocer el patron y pasar al modelo extendido.

## Errores matemáticos

### Error 3: Perder signo, unidad o dependencia funcional

**Por que parece correcto**
El sesgo algebraico lleva a simplificar expresiones sin conservar la pregunta fisica. El alumno intenta despejar rapido y deja de mirar dimensiones.

**Por que es incorrecto**
Un signo fija direccion o tendencia, una unidad fija naturaleza fisica y una dependencia funcional indica que variable controla el cambio.

**Senal de deteccion**
La dimension no coincide, aparece una cantidad negativa imposible o el resultado no cambia al variar la magnitud que deberia controlarlo.

**Correccion conceptual**
Cada transformacion debe conservar unidades, signo esperado y dependencia con [[{dom}]]. Si una de esas tres cosas falla, el despeje no es valido.

**Mini-ejemplo de contraste**
Eliminar un signo para obtener un valor positivo puede ocultar una direccion opuesta. El resultado correcto conserva el signo y lo interpreta.

## Errores de interpretación

### Error 4: Cerrar con un numero sin decision fisica

**Por que parece correcto**
La costumbre escolar premia llegar a una cifra final. Eso induce a creer que interpretar es repetir el valor obtenido.

**Por que es incorrecto**
En mecanica avanzada, el valor solo importa si permite decidir regimen, estabilidad, compatibilidad, flujo o necesidad de otro modelo.

**Senal de deteccion**
La conclusion no dice que pasaria si [[{dom}]] aumenta o disminuye, ni menciona validez, limite o consecuencia observable.

**Correccion conceptual**
Termina con una decision fisica: el modelo vale, falla, predice una tendencia o exige una extension.

**Mini-ejemplo de contraste**
Un resultado de alta precision puede ser inutil si procede de hipotesis rotas. La conclusion correcta informa primero del fallo del modelo.

## Regla de autocontrol rápido

Antes de aceptar una solucion, aplica cuatro controles: mismo sistema, unidades coherentes, caso limite reconocible y lectura causal de [[{dom}]]. Si uno falla, la respuesta no esta lista para publicarse como conclusion fisica.
"""
    return f"""# Common errors in {title}

## Conceptual errors

### Error 1: Confusing symbol and meaning

**Why it seems correct**
The confusion comes from a superficial analogy: the student sees a familiar symbol and believes it automatically keeps the same meaning in every frame or domain.

**Why it is incorrect**
In this leaf, meaning depends on assumptions, scale, and system. The same letter may change role if geometry, boundary, or balance type changes.

**Detection signal**
The result looks numerically plausible but cannot explain which mechanism dominates or what observable change [[{dom}]] would produce.

**Conceptual correction**
Before operating, write a causal sentence: [[{dom}]] increases, decreases, or changes regime because it modifies a concrete part of the model.

**Mini-example of contrast**
If two systems use the same letter for different quantities, substituting without redefining gives formal equality and false physical reading. The correct result requires returning to the system.

## Model errors

### Error 2: Assuming the approximation has no boundary

**Why it seems correct**
Excessive generalization appears when a formula has worked in previous exercises and is applied to any similar-looking data.

**Why it is incorrect**
Every approximation omits terms. When a correction becomes comparable with the principal scale, the ideal model no longer represents the real system.

**Detection signal**
The deviation repeats in the same direction, the limiting case does not appear, or the prediction changes too much after a small data variation.

**Conceptual correction**
State a quantitative criterion, for example correction below 10 percent, and change model when that criterion is not met.

**Mini-example of contrast**
An ideal fit may look clean with two points but fail with a full series. The correct action is recognizing the pattern and switching to the extended model.

## Mathematical errors

### Error 3: Losing sign, unit, or functional dependence

**Why it seems correct**
Algebraic bias leads to simplifying expressions without preserving the physical question. The student tries to rearrange quickly and stops watching dimensions.

**Why it is incorrect**
A sign fixes direction or trend, a unit fixes physical nature, and a functional dependence indicates which variable controls the change.

**Detection signal**
The dimension does not match, an impossible negative quantity appears, or the result does not change when the controlling quantity varies.

**Conceptual correction**
Every transformation must preserve units, expected sign, and dependence on [[{dom}]]. If one of these three checks fails, the rearrangement is invalid.

**Mini-example of contrast**
Removing a sign to obtain a positive value may hide an opposite direction. The correct result keeps the sign and interprets it.

## Interpretation errors

### Error 4: Ending with a number without physical decision

**Why it seems correct**
School habit rewards reaching a final number. That induces the belief that interpretation is repeating the value obtained.

**Why it is incorrect**
In advanced mechanics, the value matters only if it decides regime, stability, compatibility, flow, or the need for another model.

**Detection signal**
The conclusion does not state what would happen if [[{dom}]] increased or decreased, and it does not mention validity, limit, or observable consequence.

**Conceptual correction**
End with a physical decision: the model is valid, fails, predicts a trend, or requires an extension.

**Mini-example of contrast**
A high-precision result may be useless if it comes from broken assumptions. The correct conclusion reports model failure first.

## Quick self-control rule

Before accepting a solution, apply four controls: same system, coherent units, recognizable limiting case, and causal reading of [[{dom}]]. If one fails, the answer is not ready to be published as a physical conclusion.
"""

def patch_examples(path, en=False):
    p = path / ("ejemplos.en.md" if en else "ejemplos.md")
    text = p.read_text(encoding="utf-8")
    mags = yaml.safe_load((path / "magnitudes.yaml").read_text(encoding="utf-8"))["magnitudes"]
    all_mags = ", ".join(f"[[{m['id']}]]" for m in mags)
    if en:
        text = text.replace("The quantities are assumed to be measured in the same reference system and in SI units.", f"The quantities are assumed to be measured in the same reference system and in SI units: {all_mags}.")
        text = text.replace("Otherwise, the result is reported as a diagnosis of model failure.", "Otherwise, the result is reported as a diagnosis of model failure. The numerical part should include an explicit comparison between the leading contribution and the correction, because that ratio is what turns calculation into a physical judgement.")
        text = text.replace("If those controls fail, the application does not invalidate the physics; it indicates that the extended model is needed.", "If those controls fail, the application does not invalidate the physics; it indicates that the extended model is needed. This is the point the teacher should assess: the student has not only used relations, but has decided whether the relations still describe the real system.")
    else:
        text = text.replace("Las magnitudes se consideran medidas en el mismo sistema de referencia y con unidades SI.", f"Las magnitudes se consideran medidas en el mismo sistema de referencia y con unidades SI: {all_mags}.")
        text = text.replace("Si no, se informa que el resultado es diagnostico de fallo del modelo.", "Si no, se informa que el resultado es diagnostico de fallo del modelo. La parte numerica debe incluir una comparacion explicita entre contribucion principal y correccion, porque esa razon es la que convierte el calculo en juicio fisico.")
        text = text.replace("Si esos controles fallan, la aplicacion no invalida la fisica; indica que se necesita el modelo extendido.", "Si esos controles fallan, la aplicacion no invalida la fisica; indica que se necesita el modelo extendido. Ese es el punto que debe evaluar el profesor: el alumno no solo ha usado relaciones, sino que ha decidido si aun describen el sistema real.")
    p.write_text(text, encoding="utf-8", newline="\n")

def patch_apps(path, apps, dom, title, en=False):
    p = path / ("aplicaciones.en.md" if en else "aplicaciones.md")
    if en:
        intros = [
            "The key decision is operational planning: the model is used before detailed simulation to reject impossible regimes.",
            "The second use is diagnostic: measured trends are compared with the expected sign and scale.",
            "A third use is model selection: the result indicates whether a reduced description is enough.",
            "The fourth use is design review: the controlling quantity is monitored while geometry or boundary conditions vary.",
            "The fifth use is teaching assessment: the student must defend assumptions rather than only compute.",
        ]
        limits = [
            "Validity limit: acceptable when the neglected contribution stays below 10 percent and the limiting case is still recognizable.",
            "Validity limit: acceptable when repeated data do not show a systematic drift away from the predicted trend.",
            "Validity limit: acceptable when the extended terms remain secondary and do not reverse the sign of the result.",
            "Validity limit: acceptable when changes in boundary conditions do not alter the physical role of the dominant quantity.",
            "Validity limit: acceptable when the answer can still explain scale, sign, and observable consequence in one coherent argument.",
        ]
        lines = [f"# Applications of {title}\n"]
        for i, app in enumerate(apps, 1):
            lines.append(f"""## {i}. {app.title()}

In {app}, this leaf provides a criterion for interpreting data before adding unnecessary complexity. {intros[i-1]} The reading is centered on [[{dom}]], but the conclusion must also mention the physical trend and the assumption that keeps the model usable.

Dominant variable: [[{dom}]]. In this context it is tracked as a regime indicator. If it changes scale, the expected behavior may move from stable to unstable, from weak to strong coupling, or from local to global control.

{limits[i-1]} When this condition is not met, the right conclusion is not to force the ideal expression but to switch to the extended model and state why.
""")
    else:
        intros = [
            "La decision principal es de planificacion: el modelo se usa antes de simular con detalle para descartar regimenes imposibles.",
            "El segundo uso es diagnostico: las tendencias medidas se comparan con el signo y la escala esperados.",
            "Un tercer uso es elegir modelo: el resultado indica si una descripcion reducida basta.",
            "El cuarto uso es revisar diseno: la magnitud de control se vigila mientras cambian geometria o frontera.",
            "El quinto uso es evaluacion docente: el alumno debe defender hipotesis y no solo calcular.",
        ]
        limits = [
            "Límite de validez: aceptable cuando la contribucion despreciada queda por debajo del 10 % y el caso limite sigue siendo reconocible.",
            "Límite de validez: aceptable cuando los datos repetidos no muestran deriva sistematica respecto a la tendencia prevista.",
            "Límite de validez: aceptable cuando los terminos extendidos siguen siendo secundarios y no invierten el signo del resultado.",
            "Límite de validez: aceptable cuando los cambios de frontera no alteran el papel fisico de la magnitud dominante.",
            "Límite de validez: aceptable cuando la respuesta aun explica escala, signo y consecuencia observable en un argumento coherente.",
        ]
        lines = [f"# Aplicaciones de {title}\n"]
        for i, app in enumerate(apps, 1):
            lines.append(f"""## {i}. {app.title()}

En {app}, este leaf aporta un criterio para interpretar datos antes de añadir complejidad innecesaria. {intros[i-1]} La lectura se centra en [[{dom}]], pero la conclusion tambien debe mencionar tendencia fisica y la hipotesis que mantiene util el modelo.

Variable dominante: [[{dom}]]. En este contexto se vigila como indicador de regimen. Si cambia de escala, el comportamiento esperado puede pasar de estable a inestable, de acoplamiento debil a fuerte, o de control local a global.

{limits[i-1]} Cuando esa condicion no se cumple, la conclusion correcta no es forzar la expresion ideal, sino pasar al modelo extendido y explicar por que.
""")
    p.write_text("\n".join(lines), encoding="utf-8", newline="\n")

def patch_history(path, en=False):
    p = path / ("historia.en.md" if en else "historia.md")
    text = p.read_text(encoding="utf-8")
    if en:
        text += "\nIn modern teaching, this history matters because it prevents formulas from being presented as isolated artifacts. The student sees that each relation was created to solve a limitation of a previous description, and that advanced mechanics grows by making assumptions explicit rather than by hiding them.\n"
    else:
        text += "\nEn la enseñanza actual, esta historia importa porque evita presentar formulas como objetos aislados. El estudiante ve que cada relacion nacio para resolver una limitacion de una descripcion previa, y que la mecanica avanzada progresa haciendo explicitas sus hipotesis en lugar de ocultarlas.\n"
    p.write_text(text, encoding="utf-8", newline="\n")

def patch_interp(path):
    p = path / "interpretacion.yaml"
    data = yaml.safe_load(p.read_text(encoding="utf-8"))
    for mid, target in data["targets"].items():
        for r in target["summary_rules"]:
            r["text"]["es"] = f"[[{mid}]] indica que mecanismo domina, resume el balance del leaf y depende de que las hipotesis sigan siendo validas."
            r["text"]["en"] = f"[[{mid}]] indicates which mechanism dominates, summarizes the leaf balance, and depends on the assumptions remaining valid."
        for r in target["likely_errors"]:
            r["text"]["es"] = f"Error probable: confundir [[{mid}]] con un dato aislado, olvidar el dominio o suponer que el signo no tiene significado fisico."
            r["text"]["en"] = f"Likely mistake: confuse [[{mid}]] with an isolated datum, forget the domain, or assume that the sign has no physical meaning."
    p.write_text(dump(data), encoding="utf-8", newline="\n")

for rel in LEAFS:
    path = BASE / rel
    meta = yaml.safe_load((path / "meta.yaml").read_text(encoding="utf-8"))
    leaf_id = path.name
    apps = APPS[leaf_id]
    title = meta["nombre"]["es"]
    title_en = meta["nombre"]["en"]
    dom = meta["magnitud_dominante"]
    patch_formulas(path)
    patch_theory(path, False)
    patch_theory(path, True)
    patch_modelos(path, False)
    patch_modelos(path, True)
    (path / "errores.md").write_text(errores(title, dom, False), encoding="utf-8", newline="\n")
    (path / "errores.en.md").write_text(errores(title_en, dom, True), encoding="utf-8", newline="\n")
    patch_examples(path, False)
    patch_examples(path, True)
    patch_apps(path, apps, dom, title, False)
    patch_apps(path, apps, dom, title_en, True)
    patch_history(path, False)
    patch_history(path, True)
    patch_interp(path)

print("polished", len(LEAFS), "advanced leafs")
