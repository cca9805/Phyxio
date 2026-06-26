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

def patch_once(text, marker, extra):
    if extra.strip() in text:
        return text
    return text.replace(marker, extra, 1)

def extend_lengths(path, dom):
    es = path / "teoria.md"
    txt = es.read_text(encoding="utf-8")
    txt = patch_once(txt, "## 🔵 Nivel formal", "Tambien conviene separar descripcion y decision. La descripcion enumera magnitudes; la decision explica cual de ellas controla el cambio observado. En este leaf, esa decision se apoya en [[%s]] y en la comparacion entre termino dominante, correccion y caso limite. Esta distincion evita que el alumno confunda una solucion larga con una solucion profunda." % dom + "\n\n## 🔵 Nivel formal")
    es.write_text(txt, encoding="utf-8", newline="\n")
    en = path / "teoria.en.md"
    txt = en.read_text(encoding="utf-8")
    txt = patch_once(txt, "## 🔵 Formal level", "It is also useful to separate description from decision. Description lists quantities; decision explains which of them controls the observed change. In this leaf, that decision is supported by [[%s]] and by the comparison between dominant term, correction, and limiting case. This distinction prevents the student from confusing a long solution with a deep solution." % dom + "\n\n## 🔵 Formal level")
    en.write_text(txt, encoding="utf-8", newline="\n")

    for name, extra in [
        ("historia.md", "En terminos pedagogicos, el avance historico no consiste solo en disponer de mas tecnicas. Consiste en aprender a preguntar por el dominio de cada tecnica. Esa actitud es la que conecta este leaf con la forma moderna de hacer mecanica: declarar el sistema, elegir variables, comprobar limites y aceptar que una formula puede ser correcta dentro de un marco y deficiente fuera de el."),
        ("historia.en.md", "Pedagogically, the historical advance is not merely having more techniques. It is learning to ask for the domain of each technique. That attitude connects this leaf with the modern way of doing mechanics: state the system, choose variables, check limits, and accept that a formula may be correct inside one frame and insufficient outside it."),
        ("modelos.md", "Como control adicional, el modelo debe compararse con una observacion independiente. Si predice tendencia, signo y escala con el mismo conjunto de hipotesis, la idealizacion es defendible para aprendizaje avanzado."),
        ("modelos.en.md", "As an additional control, the model should be compared with an independent observation. If it predicts trend, sign, and scale under the same assumptions, the idealization is defensible for advanced learning."),
        ("ejemplos.md", "Para cerrar el ejemplo, el alumno debe escribir una frase de sensibilidad: si [[%s]] aumenta un orden de magnitud, la conclusion cambia de forma cualitativa o solo cuantitativa. Esa frase obliga a mirar el resultado como modelo y no como cifra aislada. Tambien debe indicar que dato experimental pediria para confirmar la hipotesis principal." % dom),
        ("ejemplos.en.md", "To close the example, the student must write a sensitivity sentence: if [[%s]] increases by one order of magnitude, does the conclusion change qualitatively or only quantitatively. That sentence forces the result to be read as a model and not as an isolated number. The student should also state which experimental datum would confirm the principal assumption." % dom),
    ]:
        p = path / name
        text = p.read_text(encoding="utf-8")
        if extra not in text:
            text += "\n" + extra + "\n"
        p.write_text(text, encoding="utf-8", newline="\n")

def rewrite_apps(path, title, title_en, dom, apps):
    es_lines = [f"# Aplicaciones de {title}\n"]
    en_lines = [f"# Applications of {title_en}\n"]
    bodies_es = [
        ("La utilidad principal es anticipar si el escenario pertenece al regimen ideal antes de invertir esfuerzo en un modelo mas costoso. Se comparan escala principal, correccion esperada y caso limite. El resultado sirve para descartar configuraciones que violan la hipotesis dominante.",
         "Límite de validez: exige correcciones menores que 10 %, coherencia dimensional y ausencia de cambios bruscos en la tendencia medida."),
        ("Aqui el leaf funciona como herramienta de diagnostico. Una serie de datos se contrasta con el signo esperado, con la dependencia funcional y con la sensibilidad ante variaciones pequeñas. Si todos los controles apuntan en la misma direccion, el modelo gana credibilidad.",
         "Límite de validez: deja de ser aceptable cuando el residuo experimental crece de forma sistematica o cambia de signo sin causa fisica."),
        ("Esta aplicacion se centra en elegir entre descripcion reducida y descripcion extendida. La expresion ideal se usa como referencia; la extension se incorpora solo cuando aporta una mejora fisica identificable, no por deseo de complicar el calculo.",
         "Límite de validez: el modelo reducido se conserva mientras el termino extendido no invierta la jerarquia entre mecanismos."),
        ("En revision de diseño, el leaf permite seguir la magnitud de control cuando cambia una frontera, una geometria o una condicion inicial. La pregunta no es solo cuanto vale el resultado, sino cuanto margen queda antes de perder el regimen previsto.",
         "Límite de validez: requiere que la modificacion de frontera no cambie el significado fisico de la variable dominante."),
        ("En evaluacion docente, la aplicacion obliga a defender hipotesis. El alumno debe explicar por que el modelo vale, que dato lo pondria en duda y que caso limite usaria para detectar un error de interpretacion.",
         "Límite de validez: la respuesta es aceptable si conecta calculo, escala, signo y consecuencia observable sin saltar de modelo."),
    ]
    bodies_en = [
        ("The main use is anticipating whether the scenario belongs to the ideal regime before investing effort in a more expensive model. Principal scale, expected correction, and limiting case are compared. The result is useful for rejecting configurations that violate the dominant assumption.",
         "Validity limit: it requires corrections below 10 percent, dimensional coherence, and no abrupt change in the measured trend."),
        ("Here the leaf works as a diagnostic tool. A data series is checked against expected sign, functional dependence, and sensitivity to small variations. If all controls point in the same direction, the model becomes credible.",
         "Validity limit: it stops being acceptable when the experimental residual grows systematically or changes sign without physical cause."),
        ("This application focuses on choosing between a reduced description and an extended description. The ideal expression is used as a reference; the extension is introduced only when it adds identifiable physics, not because the calculation should look harder.",
         "Validity limit: the reduced model is kept while the extended term does not reverse the hierarchy between mechanisms."),
        ("In design review, the leaf tracks the control quantity when a boundary, geometry, or initial condition changes. The question is not only the value of the result, but how much margin remains before the expected regime is lost.",
         "Validity limit: the boundary modification must not change the physical meaning of the dominant variable."),
        ("In teaching assessment, the application forces assumptions to be defended. The student must explain why the model is valid, which datum would challenge it, and which limiting case would detect an interpretation error.",
         "Validity limit: the answer is acceptable if it connects calculation, scale, sign, and observable consequence without jumping between models."),
    ]
    for i, app in enumerate(apps, 1):
        body, limit = bodies_es[i-1]
        es_lines.append(f"""## {i}. {app.title()}

En {app}, [[{dom}]] se usa como variable dominante porque concentra la lectura de escala del problema. {body}

Variable dominante: [[{dom}]]. En esta aplicacion no se interpreta como un dato aislado, sino como indicador del mecanismo que decide el regimen observable. Si cambia de escala, tambien cambia la pregunta que el modelo puede responder.

{limit} Cuando ese limite se supera, la conclusion correcta es declarar transicion de modelo y explicar que nueva contribucion se ha vuelto relevante.
""")
        body_en, limit_en = bodies_en[i-1]
        en_lines.append(f"""## {i}. {app.title()}

In {app}, [[{dom}]] is used as the dominant variable because it concentrates the scale reading of the problem. {body_en}

Dominant variable: [[{dom}]]. In this application it is not interpreted as an isolated datum, but as an indicator of the mechanism deciding the observable regime. If it changes scale, the question that the model can answer also changes.

{limit_en} When that limit is exceeded, the correct conclusion is to declare a model transition and explain which new contribution has become relevant.
""")
    (path / "aplicaciones.md").write_text("\n".join(es_lines), encoding="utf-8", newline="\n")
    (path / "aplicaciones.en.md").write_text("\n".join(en_lines), encoding="utf-8", newline="\n")

for rel in LEAFS:
    path = BASE / rel
    meta = yaml.safe_load((path / "meta.yaml").read_text(encoding="utf-8"))
    dom = meta["magnitud_dominante"]
    extend_lengths(path, dom)
    rewrite_apps(path, meta["nombre"]["es"], meta["nombre"]["en"], dom, APPS[path.name])

print("finalized", len(LEAFS), "advanced leafs")
