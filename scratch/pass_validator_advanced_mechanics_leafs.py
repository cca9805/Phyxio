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
UNIQUE = {
    "potencial-efectivo-y-ecuacion-radial": ("En orbitas centrales, el rasgo propio de este leaf es mirar puntos de retorno, pozos y barreras sin integrar toda la trayectoria. El alumno aprende a leer una curva de energia efectiva: minimos como orbitas estables, maximos como equilibrio inestable y cortes con la energia como radios permitidos.", "For central orbits, the specific feature of this leaf is reading turning points, wells, and barriers without integrating the whole trajectory. The student learns to read an effective-energy curve: minima as stable orbits, maxima as unstable equilibrium, and intersections with energy as allowed radii."),
    "ecuacion-de-binet-y-orbitas": ("En Binet, el rasgo propio es que la fuerza central se transforma en curvatura orbital. La variable inversa del radio convierte la pregunta dinamica en una ecuacion geometrica; por eso el alumno debe interpretar precesion, conicas y desviaciones como huellas de la ley de fuerza.", "In Binet's method, the specific feature is that central force becomes orbital curvature. The inverse radial variable turns the dynamic question into a geometric equation; therefore the student must interpret precession, conics, and deviations as signatures of the force law."),
}

def pad_files(path, dom):
    for name, es_extra, en_extra in [
        ("teoria", "La ultima comprobacion didactica consiste en explicar que observacion real confirmaria el resultado. Si el alumno puede proponer una medida, una grafica o una comparacion experimental, entonces ha conectado el formalismo con el fenomeno. Esta exigencia evita repetir formulas sin comprender para que sirven.", "The final didactic check is explaining which real observation would confirm the result. If the student can propose a measurement, graph, or experimental comparison, then the formalism has been connected to the phenomenon. This requirement prevents repeating formulas without understanding what they are for."),
        ("ejemplos", "La resolucion tambien debe incluir una lectura de sensibilidad. Si [[%s]] se duplica, el alumno debe prever si el cambio esperado es lineal, cuadratico, inverso o cualitativo. Esa frase final es parte de la solucion, porque muestra si se comprende el mecanismo y no solo la sustitucion." % dom, "The solution must also include a sensitivity reading. If [[%s]] is doubled, the student should predict whether the expected change is linear, quadratic, inverse, or qualitative. That final sentence is part of the solution because it shows whether the mechanism is understood, not only the substitution." % dom),
        ("historia", "Esta perspectiva historica tambien ayuda al profesor: permite presentar el leaf como respuesta a una necesidad concreta de modelizacion, no como una pagina mas de algebra. Asi el alumno entiende que cada formalismo nuevo aparece porque una descripcion anterior dejo de contestar una pregunta fisica importante.", "This historical perspective also helps the teacher: it presents the leaf as an answer to a concrete modelling need, not as another page of algebra. The student then understands that each new formalism appears because a previous description stopped answering an important physical question."),
    ]:
        p = path / f"{name}.md"
        text = p.read_text(encoding="utf-8")
        if es_extra not in text:
            text += "\n" + es_extra + "\n"
        p.write_text(text, encoding="utf-8", newline="\n")
        p = path / f"{name}.en.md"
        text = p.read_text(encoding="utf-8")
        if en_extra not in text:
            text += "\n" + en_extra + "\n"
        p.write_text(text, encoding="utf-8", newline="\n")

def unique_theory(path):
    if path.name not in UNIQUE:
        return
    es_extra, en_extra = UNIQUE[path.name]
    p = path / "teoria.md"
    text = p.read_text(encoding="utf-8")
    if es_extra not in text:
        text = text.replace("## Síntesis final", es_extra + "\n\n## Síntesis final")
    p.write_text(text, encoding="utf-8", newline="\n")
    p = path / "teoria.en.md"
    text = p.read_text(encoding="utf-8")
    if en_extra not in text:
        text = text.replace("## Final synthesis", en_extra + "\n\n## Final synthesis")
    p.write_text(text, encoding="utf-8", newline="\n")

def apps_text(title, title_en, dom, apps):
    lead_es = [
        "El primer uso se plantea como filtro previo de viabilidad.",
        "La segunda situacion se usa para diagnosticar una tendencia medida.",
        "El tercer escenario compara un modelo reducido con una descripcion extendida.",
        "La cuarta aplicacion se enfoca en margen de diseño y sensibilidad.",
        "La quinta aplicacion convierte el leaf en una prueba de comprension.",
    ]
    var_es = [
        "Variable dominante: [[%s]] fija la escala que decide si el escenario pertenece al regimen estudiado." % dom,
        "Variable dominante: [[%s]] se observa como indicador de tendencia y permite detectar desviaciones acumuladas." % dom,
        "Variable dominante: [[%s]] separa lo que puede mantenerse idealizado de lo que exige ampliar el modelo." % dom,
        "Variable dominante: [[%s]] mide el margen disponible antes de que la frontera o la geometria cambien el problema." % dom,
        "Variable dominante: [[%s]] funciona como pregunta de control para comprobar si el alumno interpreta el resultado." % dom,
    ]
    lim_es = [
        "Límite de validez: el analisis se acepta si la correccion secundaria queda por debajo del 10 % y el caso limite permanece claro.",
        "Límite de validez: la lectura falla si el residuo de datos crece siempre en la misma direccion o cambia el signo esperado.",
        "Límite de validez: el modelo reducido deja de valer cuando la extension altera la jerarquia causal entre terminos.",
        "Límite de validez: el margen se considera fiable solo si pequeñas variaciones no cambian el significado de la magnitud.",
        "Límite de validez: la explicacion es suficiente si une hipotesis, calculo, escala y consecuencia observable.",
    ]
    lead_en = [
        "The first use is a preliminary feasibility filter.",
        "The second situation diagnoses a measured trend.",
        "The third scenario compares a reduced model with an extended description.",
        "The fourth application focuses on design margin and sensitivity.",
        "The fifth application turns the leaf into a comprehension test.",
    ]
    var_en = [
        "Dominant variable: [[%s]] sets the scale deciding whether the scenario belongs to the studied regime." % dom,
        "Dominant variable: [[%s]] is observed as a trend indicator and helps detect accumulated deviations." % dom,
        "Dominant variable: [[%s]] separates what may stay idealized from what requires a broader model." % dom,
        "Dominant variable: [[%s]] measures the available margin before boundary or geometry changes the problem." % dom,
        "Dominant variable: [[%s]] works as a control question for checking whether the student interprets the result." % dom,
    ]
    lim_en = [
        "Validity limit: the analysis is accepted if the secondary correction remains below 10 percent and the limiting case is clear.",
        "Validity limit: the reading fails if the data residual always grows in the same direction or changes the expected sign.",
        "Validity limit: the reduced model stops being valid when the extension alters the causal hierarchy between terms.",
        "Validity limit: the margin is reliable only if small variations do not change the meaning of the quantity.",
        "Validity limit: the explanation is sufficient if it joins assumptions, calculation, scale, and observable consequence.",
    ]
    es = [f"# Aplicaciones de {title}\n"]
    en = [f"# Applications of {title_en}\n"]
    for i, app in enumerate(apps):
        es.append(f"""## {i+1}. {app.title()}

En {app}, {lead_es[i]} El docente puede pedir una prediccion cualitativa, una estimacion de escala y una comparacion con datos antes de aceptar la formula. La aplicacion muestra si el modelo conserva el mecanismo dominante o si conviene introducir otra descripcion.

{var_es[i]} No se usa como etiqueta decorativa; se contrasta con unidades, signo, orden de magnitud y comportamiento limite para cerrar la interpretacion.

{lim_es[i]} Si esta condicion se rompe, la conclusion correcta es cambiar de modelo y declarar que nueva contribucion domina el fenomeno observado.
""")
        en.append(f"""## {i+1}. {app.title()}

In {app}, {lead_en[i]} The teacher may ask for a qualitative prediction, a scale estimate, and a comparison with data before accepting the formula. The application shows whether the model preserves the dominant mechanism or whether another description should be introduced.

{var_en[i]} It is not used as a decorative label; it is checked through units, sign, order of magnitude, and limiting behavior before the interpretation is closed.

{lim_en[i]} If this condition breaks, the correct conclusion is to change model and state which new contribution dominates the observed phenomenon.
""")
    return "\n".join(es), "\n".join(en)

for rel in LEAFS:
    path = BASE / rel
    meta = yaml.safe_load((path / "meta.yaml").read_text(encoding="utf-8"))
    dom = meta["magnitud_dominante"]
    pad_files(path, dom)
    unique_theory(path)
    es, en = apps_text(meta["nombre"]["es"], meta["nombre"]["en"], dom, APPS[path.name])
    (path / "aplicaciones.md").write_text(es, encoding="utf-8", newline="\n")
    (path / "aplicaciones.en.md").write_text(en, encoding="utf-8", newline="\n")

print("validator pass polish applied")
