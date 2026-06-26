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

def rewrite_apps(path, title, title_en, dom, apps):
    es_templates = [
        """En {app}, el leaf se usa al comienzo del analisis para filtrar configuraciones posibles. La tarea consiste en estimar una escala dominante, compararla con una correccion secundaria y decidir si el regimen esperado merece un calculo detallado. Esta aplicacion es util porque evita simular casos que ya contradicen la lectura fisica basica.

Variable dominante: [[{dom}]] fija la escala de referencia y permite ordenar los datos antes de elegir metodo. Si su valor queda fuera del intervalo previsto, el problema debe replantearse desde las hipotesis.

Límite de validez: se acepta mientras la correccion secundaria permanezca por debajo del 10 % y el caso limite conserve una interpretacion reconocible. Si no, se declara cambio de modelo.""",
        """En {app}, el objetivo es diagnosticar una serie de medidas. Se observan tendencias, signos y curvaturas, y despues se comprueba si la relacion del leaf puede explicarlas sin añadir mecanismos externos. El valor didactico esta en comparar datos con criterio fisico, no en ajustar parametros a ciegas.

Variable dominante: [[{dom}]] actua como indicador de tendencia acumulada. Un cambio monotono, una inversion de signo o una saturacion dan informacion distinta sobre el fenomeno.

Límite de validez: falla cuando los residuos crecen con patron sistematico, cuando el signo medido contradice la prediccion o cuando el ajuste solo mejora ocultando una hipotesis rota.""",
        """En {app}, el leaf ayuda a escoger entre una descripcion reducida y otra mas completa. Se comienza con el modelo ideal para localizar la causa principal, y solo despues se decide si una extension aporta informacion nueva. Asi se evita confundir complejidad con precision.

Variable dominante: [[{dom}]] separa el mecanismo esencial de los efectos accesorios. Si domina claramente, la descripcion reducida conserva valor explicativo; si compite con terminos omitidos, la reduccion pierde fuerza.

Límite de validez: el modelo reducido se mantiene mientras la extension no cambie la jerarquia causal ni desplace el caso limite que justificaba la simplificacion.""",
        """En {app}, la aplicacion se centra en margen de diseño. Una frontera, una geometria o una condicion inicial se modifica lentamente para ver cuanto tarda el sistema en abandonar el regimen seguro. El resultado se interpreta como margen operativo, no como cifra aislada.

Variable dominante: [[{dom}]] mide la distancia conceptual hasta el cambio de comportamiento. Su sensibilidad frente a pequeñas variaciones indica si el diseño es robusto o delicado.

Límite de validez: la estimacion deja de ser fiable cuando una variacion pequeña altera el significado fisico de la magnitud o introduce un mecanismo que el leaf no contiene.""",
        """En {app}, el uso principal es evaluar comprension. El alumno debe justificar sistema, unidades, signo, escala y caso limite antes de presentar la conclusion. Esta aplicacion convierte el leaf en una guia de razonamiento y no solo en una coleccion de formulas.

Variable dominante: [[{dom}]] funciona como pregunta de control. Si el alumno no puede explicar que representa, tampoco puede defender el resultado aunque el algebra este bien escrita.

Límite de validez: la respuesta es suficiente solo si conecta calculo, hipotesis, consecuencia observable y posible transicion a un modelo extendido."""
    ]
    en_templates = [
        """In {app}, the leaf is used at the beginning of the analysis to filter possible configurations. The task is to estimate a dominant scale, compare it with a secondary correction, and decide whether the expected regime deserves a detailed calculation. This application is useful because it avoids simulating cases that already contradict the basic physical reading.

Dominant variable: [[{dom}]] sets the reference scale and helps order the data before choosing a method. If its value lies outside the expected interval, the problem must be rebuilt from the assumptions.

Validity limit: it is accepted while the secondary correction remains below 10 percent and the limiting case keeps a recognizable interpretation. Otherwise, a model change is declared.""",
        """In {app}, the aim is to diagnose a sequence of measurements. Trends, signs, and curvatures are observed, and then the leaf relation is checked to see whether it can explain them without adding external mechanisms. The didactic value lies in comparing data with physical criteria, not in fitting parameters blindly.

Dominant variable: [[{dom}]] acts as an indicator of accumulated trend. A monotonic change, sign reversal, or saturation gives different information about the phenomenon.

Validity limit: it fails when residuals grow with a systematic pattern, when the measured sign contradicts the prediction, or when the fit improves only by hiding a broken assumption.""",
        """In {app}, the leaf helps choose between a reduced description and a more complete one. The ideal model is used first to locate the principal cause, and only then is an extension considered. This prevents complexity from being confused with precision.

Dominant variable: [[{dom}]] separates the essential mechanism from accessory effects. If it clearly dominates, the reduced description keeps explanatory value; if it competes with omitted terms, the reduction loses force.

Validity limit: the reduced model is kept while the extension does not change the causal hierarchy or move the limiting case that justified the simplification.""",
        """In {app}, the application focuses on design margin. A boundary, geometry, or initial condition is slowly modified to see how long the system remains in the safe regime. The result is interpreted as operational margin, not as an isolated number.

Dominant variable: [[{dom}]] measures the conceptual distance to a change of behavior. Its sensitivity to small variations indicates whether the design is robust or delicate.

Validity limit: the estimate stops being reliable when a small variation changes the physical meaning of the quantity or introduces a mechanism absent from the leaf.""",
        """In {app}, the main use is assessing understanding. The student must justify system, units, sign, scale, and limiting case before presenting the conclusion. This application turns the leaf into a reasoning guide rather than a collection of formulas.

Dominant variable: [[{dom}]] works as a control question. If the student cannot explain what it represents, the result cannot be defended even if the algebra is written correctly.

Validity limit: the answer is sufficient only if it connects calculation, assumptions, observable consequence, and possible transition to an extended model."""
    ]
    es = [f"# Aplicaciones de {title}\n"]
    en = [f"# Applications of {title_en}\n"]
    for i, app in enumerate(apps):
        es.append(f"## {i+1}. {app.title()}\n\n" + es_templates[i].format(app=app, dom=dom) + "\n")
        en.append(f"## {i+1}. {app.title()}\n\n" + en_templates[i].format(app=app, dom=dom) + "\n")
    (path / "aplicaciones.md").write_text("\n".join(es), encoding="utf-8", newline="\n")
    (path / "aplicaciones.en.md").write_text("\n".join(en), encoding="utf-8", newline="\n")

def pad_examples(path, dom):
    for name, extra in [
        ("ejemplos.md", "Para completar la validacion, se compara el resultado con dos escenarios: uno donde [[%s]] se reduce a la mitad y otro donde se duplica. Si la respuesta no cambia de forma compatible con la teoria, el error no esta en la aritmetica sino en la eleccion del modelo. Esta prueba de sensibilidad debe quedar escrita porque muestra si el alumno entiende el control fisico de la solucion." % dom),
        ("ejemplos.en.md", "To complete validation, the result is compared with two scenarios: one where [[%s]] is halved and another where it is doubled. If the answer does not change in a way compatible with the theory, the error is not arithmetic but model selection. This sensitivity test must be written because it shows whether the student understands the physical control of the solution." % dom),
        ("teoria.en.md", "A final classroom use is oral defense. The student should be able to state which observation would falsify the model and which measurement would strengthen it. That defense is what separates advanced mechanics from formal manipulation."),
    ]:
        p = path / name
        text = p.read_text(encoding="utf-8")
        if extra not in text:
            text += "\n" + extra + "\n"
        p.write_text(text, encoding="utf-8", newline="\n")

for rel in LEAFS:
    path = BASE / rel
    meta = yaml.safe_load((path / "meta.yaml").read_text(encoding="utf-8"))
    rewrite_apps(path, meta["nombre"]["es"], meta["nombre"]["en"], meta["magnitud_dominante"], APPS[path.name])
    pad_examples(path, meta["magnitud_dominante"])

print("last app polish applied")
