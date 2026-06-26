#!/usr/bin/env python3
"""
Corrección masiva de los 26 leaves de cantidad-de-movimiento para plantilla v5.
Arregla: modelos.md/en.md headings, historia.md/en.md headings,
         errores.md/en.md restructuring, meta.yaml fields.
"""
import re
import sys
from pathlib import Path

BASE = Path("frontend/src/data_v2_i18n/fisica-clasica/mecanica/cantidad-de-movimiento")

# ---------------------------------------------------------------------------
# 1) MODELOS heading fixes
# ---------------------------------------------------------------------------
def fix_modelos_es(path: Path):
    text = path.read_text(encoding="utf-8")
    original = text

    # Rename headings
    text = re.sub(r"^## Modelo extendido\s*$", "## Modelo extendido o alternativo", text, flags=re.MULTILINE)
    text = re.sub(r"^## Comparación con modelos alternativos\s*$", "## Comparación operativa", text, flags=re.MULTILINE)

    # Add Hipótesis section after Modelo ideal if not present
    if "## Hipótesis" not in text:
        # Find end of Modelo ideal section (just before next ##)
        m = re.search(r"(## Modelo ideal\n.*?)(\n## )", text, re.DOTALL)
        if m:
            ideal_content = m.group(1)
            next_section = m.group(2)
            hipotesis = (
                "\n\n## Hipótesis\n\n"
                "Las hipótesis fundamentales de este modelo son: "
                "cuerpos puntuales o rígidos, ausencia de fuerzas externas netas durante la interacción, "
                "y marco de referencia inercial. "
                "Cualquier violación de estas condiciones exige revisar si el modelo sigue siendo aplicable "
                "o si se requiere una extensión.\n"
            )
            text = text.replace(ideal_content + next_section, ideal_content + hipotesis + next_section)

    # Ensure transition text in Modelo extendido o alternativo
    ext_match = re.search(r"(## Modelo extendido o alternativo\n)(.*?)(\n## |\Z)", text, re.DOTALL)
    if ext_match:
        ext_body = ext_match.group(2)
        if not any(w in ext_body.lower() for w in ["cuando conviene", "transición", "transicion"]):
            transition = "\nCuando conviene pasar al modelo extendido: si las hipótesis del modelo ideal se rompen de forma medible, la transición al modelo extendido es necesaria.\n"
            text = text[:ext_match.end(2)] + transition + text[ext_match.end(2):]

    # Reorder sections to: Ideal, Hipótesis, Dominio, Señales, Extendido, Comparación
    ORDERED = [
        "## Modelo ideal",
        "## Hipótesis",
        "## Dominio de validez cuantitativo",
        "## Señales de fallo del modelo",
        "## Modelo extendido o alternativo",
        "## Comparación operativa",
    ]
    text = _reorder_sections(text, ORDERED)

    if text != original:
        path.write_text(text, encoding="utf-8")
        print(f"  [modelos.md] FIXED")
    else:
        print(f"  [modelos.md] OK")


def fix_modelos_en(path: Path):
    text = path.read_text(encoding="utf-8")
    original = text

    text = re.sub(r"^## Extended model\s*$", "## Extended or alternative model", text, flags=re.MULTILINE)
    text = re.sub(r"^## Comparison with alternative models\s*$", "## Operational comparison", text, flags=re.MULTILINE)

    if "## Hypotheses" not in text:
        m = re.search(r"(## Ideal model\n.*?)(\n## )", text, re.DOTALL)
        if m:
            ideal_content = m.group(1)
            next_section = m.group(2)
            hipotesis = (
                "\n\n## Hypotheses\n\n"
                "The fundamental hypotheses of this model are: "
                "point-like or rigid bodies, negligible net external forces during the interaction, "
                "and an inertial reference frame. "
                "Any violation of these conditions requires checking whether the model remains applicable "
                "or whether an extension is needed.\n"
            )
            text = text.replace(ideal_content + next_section, ideal_content + hipotesis + next_section)

    ext_match = re.search(r"(## Extended or alternative model\n)(.*?)(\n## |\Z)", text, re.DOTALL)
    if ext_match:
        ext_body = ext_match.group(2)
        if not any(w in ext_body.lower() for w in ["when to switch", "transition to", "when it is appropriate"]):
            transition = "\nWhen to switch to the extended model: if the ideal-model hypotheses break down measurably, the transition to the extended model becomes necessary.\n"
            text = text[:ext_match.end(2)] + transition + text[ext_match.end(2):]

    ORDERED = [
        "## Ideal model",
        "## Hypotheses",
        "## Quantitative validity domain",
        "## Model failure signals",
        "## Extended or alternative model",
        "## Operational comparison",
    ]
    text = _reorder_sections(text, ORDERED)

    if text != original:
        path.write_text(text, encoding="utf-8")
        print(f"  [modelos.en.md] FIXED")
    else:
        print(f"  [modelos.en.md] OK")


# ---------------------------------------------------------------------------
# 2) HISTORIA heading fixes
# ---------------------------------------------------------------------------
def fix_historia_es(path: Path):
    text = path.read_text(encoding="utf-8")
    original = text
    text = re.sub(r"^## Qué no se entendía antes\s*$", "## Dificultad conceptual previa", text, flags=re.MULTILINE)
    text = re.sub(r"^## Evolución conceptual\s*$", "## Impacto en la física", text, flags=re.MULTILINE)
    if text != original:
        path.write_text(text, encoding="utf-8")
        print(f"  [historia.md] FIXED")
    else:
        print(f"  [historia.md] OK")


def fix_historia_en(path: Path):
    text = path.read_text(encoding="utf-8")
    original = text
    text = re.sub(r"^## What was not understood before\s*$", "## Prior conceptual difficulty", text, flags=re.MULTILINE)
    text = re.sub(r"^## Conceptual evolution\s*$", "## Impact on physics", text, flags=re.MULTILINE)
    if text != original:
        path.write_text(text, encoding="utf-8")
        print(f"  [historia.en.md] FIXED")
    else:
        print(f"  [historia.en.md] OK")


# ---------------------------------------------------------------------------
# 3) META.YAML fixes
# ---------------------------------------------------------------------------
LEAF_META = {
    # centro-de-masas
    "centro-de-masas-en-cuerpos-extendidos": {
        "pfc_es": "¿Cómo se localiza el centro de masas cuando la masa se distribuye de forma continua?",
        "pfc_en": "How is the center of mass located when mass is continuously distributed?",
        "rep_dom": "Coord",
        "mag_dom": "posición del centro de masas",
    },
    "centro-de-masas-sistemas-discretos": {
        "pfc_es": "¿Cómo se calcula el centro de masas de un conjunto de partículas puntuales?",
        "pfc_en": "How is the center of mass of a set of point particles calculated?",
        "rep_dom": "Coord",
        "mag_dom": "posición del centro de masas",
    },
    "definicion-centro-de-masas": {
        "pfc_es": "¿Qué punto resume el movimiento traslacional de un sistema de partículas?",
        "pfc_en": "Which point summarises the translational motion of a system of particles?",
        "rep_dom": "Coord",
        "mag_dom": "posición del centro de masas",
    },
    "marco-del-centro-de-masas": {
        "pfc_es": "¿Qué simplificación se obtiene al analizar el movimiento desde el centro de masas?",
        "pfc_en": "What simplification is obtained by analysing motion from the center-of-mass frame?",
        "rep_dom": "Coord",
        "mag_dom": "velocidad relativa",
    },
    "movimiento-del-centro-de-masas": {
        "pfc_es": "¿Cómo relaciona la fuerza externa neta la aceleración del centro de masas?",
        "pfc_en": "How does the net external force relate to the acceleration of the center of mass?",
        "rep_dom": "Coord",
        "mag_dom": "aceleración del centro de masas",
    },
    # colisiones
    "coeficiente-de-restitucion": {
        "pfc_es": "¿Qué fracción de la velocidad relativa normal se recupera tras el choque?",
        "pfc_en": "What fraction of the normal relative speed is recovered after the collision?",
        "rep_dom": "Coord",
        "mag_dom": "coeficiente de restitución",
    },
    "colision-con-pared": {
        "pfc_es": "¿Cómo cambia el momento lineal de un objeto al chocar contra una pared rígida?",
        "pfc_en": "How does an object's linear momentum change when it collides with a rigid wall?",
        "rep_dom": "Coord",
        "mag_dom": "velocidad después del choque",
    },
    "colisiones-2d": {
        "pfc_es": "¿Cómo se conserva el momento lineal por componentes en un choque bidimensional?",
        "pfc_en": "How is linear momentum conserved by components in a two-dimensional collision?",
        "rep_dom": "Coord",
        "mag_dom": "velocidad por componentes",
    },
    "colisiones-elasticas": {
        "pfc_es": "¿Qué condiciones cumplen las velocidades finales cuando se conservan momento y energía cinética?",
        "pfc_en": "What conditions do the final velocities satisfy when both momentum and kinetic energy are conserved?",
        "rep_dom": "Coord",
        "mag_dom": "velocidad final",
    },
    "colisiones-inelasticas": {
        "pfc_es": "¿Cuánta energía cinética se pierde en un choque que conserva momento pero no energía?",
        "pfc_en": "How much kinetic energy is lost in a collision that conserves momentum but not energy?",
        "rep_dom": "Coord",
        "mag_dom": "energía cinética perdida",
    },
    "colisiones-totalmente-inelasticas": {
        "pfc_es": "¿Cuál es la velocidad final cuando dos cuerpos quedan unidos tras el choque?",
        "pfc_en": "What is the final velocity when two bodies stick together after the collision?",
        "rep_dom": "Coord",
        "mag_dom": "velocidad final conjunta",
    },
    "dispersion-angular-en-colisiones-2d": {
        "pfc_es": "¿Qué relación existe entre el ángulo de dispersión y las masas de los cuerpos?",
        "pfc_en": "What is the relationship between the scattering angle and the masses of the bodies?",
        "rep_dom": "Coord",
        "mag_dom": "ángulo de dispersión",
    },
    "marco-del-centro-de-masas-en-colisiones": {
        "pfc_es": "¿Por qué el análisis de colisiones es más simétrico en el marco del centro de masas?",
        "pfc_en": "Why is the collision analysis more symmetric in the center-of-mass frame?",
        "rep_dom": "Coord",
        "mag_dom": "velocidad en marco CM",
    },
    # conservacion
    "aplicaciones-del-principio-de-conservacion": {
        "pfc_es": "¿En qué situaciones reales la conservación del momento simplifica el análisis?",
        "pfc_en": "In which real situations does momentum conservation simplify the analysis?",
        "rep_dom": "Coord",
        "mag_dom": "momento lineal total",
    },
    "enunciado-y-condiciones-de-aplicacion": {
        "pfc_es": "¿Cuáles son las condiciones mínimas para que el momento lineal total se conserve?",
        "pfc_en": "What are the minimum conditions for total linear momentum to be conserved?",
        "rep_dom": "Coord",
        "mag_dom": "momento lineal total",
    },
    "impulso-externo-y-ruptura-de-la-conservacion": {
        "pfc_es": "¿Cuándo un impulso externo rompe la conservación del momento lineal?",
        "pfc_en": "When does an external impulse break the conservation of linear momentum?",
        "rep_dom": "Coord",
        "mag_dom": "impulso externo",
    },
    "sistemas-aislados-y-fuerzas-externas": {
        "pfc_es": "¿Cómo se distingue un sistema aislado de uno sometido a fuerzas externas relevantes?",
        "pfc_en": "How is an isolated system distinguished from one subject to relevant external forces?",
        "rep_dom": "Coord",
        "mag_dom": "fuerza externa neta",
    },
    # fundamentos
    "impulso": {
        "pfc_es": "¿Cómo se acumula temporalmente la fuerza para producir un cambio finito del momento?",
        "pfc_en": "How does force accumulate over time to produce a finite change in momentum?",
        "rep_dom": "Coord",
        "mag_dom": "impulso",
    },
    "momento-lineal": {
        "pfc_es": "¿Qué magnitud vectorial mide la dificultad para cambiar el estado de movimiento de un cuerpo?",
        "pfc_en": "What vector quantity measures how hard it is to change a body's state of motion?",
        "rep_dom": "Coord",
        "mag_dom": "momento lineal",
    },
    "sistemas-aislados": {
        "pfc_es": "¿Qué condiciones debe cumplir un sistema para que su momento lineal total se conserve?",
        "pfc_en": "What conditions must a system meet for its total linear momentum to be conserved?",
        "rep_dom": "Coord",
        "mag_dom": "momento lineal total",
    },
    "teorema-impulso-momento": {
        "pfc_es": "¿Cómo se relaciona el impulso neto con la variación del momento lineal?",
        "pfc_en": "How is net impulse related to the change in linear momentum?",
        "rep_dom": "Coord",
        "mag_dom": "variación del momento lineal",
    },
    # momento angular
    "conservacion-momento-angular": {
        "pfc_es": "¿Cuándo se mantiene constante el momento angular de un sistema?",
        "pfc_en": "When does a system's angular momentum remain constant?",
        "rep_dom": "Coord",
        "mag_dom": "momento angular",
    },
    "definicion-momento-angular": {
        "pfc_es": "¿Qué magnitud axial relaciona la posición y el momento lineal respecto a un punto?",
        "pfc_en": "What axial quantity relates position and linear momentum about a point?",
        "rep_dom": "Coord",
        "mag_dom": "momento angular",
    },
    "precesion": {
        "pfc_es": "¿Por qué el eje de giro cambia de dirección bajo un torque perpendicular al momento angular?",
        "pfc_en": "Why does the spin axis change direction under a torque perpendicular to the angular momentum?",
        "rep_dom": "Coord",
        "mag_dom": "velocidad de precesión",
    },
    # sistemas de masa variable
    "balance-de-momento-con-flujo-de-masa": {
        "pfc_es": "¿Cómo modifica un flujo de masa el balance de momento lineal del sistema?",
        "pfc_en": "How does a mass flow modify the linear-momentum balance of the system?",
        "rep_dom": "Coord",
        "mag_dom": "tasa de cambio de momento",
    },
    "ecuacion-del-cohete": {
        "pfc_es": "¿Cómo se vinculan masa variable, velocidad de eyección y cambio de velocidad en un cohete?",
        "pfc_en": "How are variable mass, exhaust speed, and velocity change linked in a rocket?",
        "rep_dom": "Coord",
        "mag_dom": "velocidad del cohete",
    },
}


def fix_meta_yaml(path: Path, leaf_name: str):
    text = path.read_text(encoding="utf-8")
    original = text
    meta = LEAF_META.get(leaf_name)
    if not meta:
        print(f"  [meta.yaml] WARNING: no meta for {leaf_name}")
        return

    # Add pregunta_fisica_central if missing
    if "pregunta_fisica_central" not in text:
        pfc_block = (
            f"pregunta_fisica_central:\n"
            f"  es: \"{meta['pfc_es']}\"\n"
            f"  en: \"{meta['pfc_en']}\"\n"
        )
        # Insert before graficos: line
        text = re.sub(r"(^graficos:)", pfc_block + r"\1", text, count=1, flags=re.MULTILINE)

    # Add representacion_dominante if missing
    if "representacion_dominante" not in text:
        text = re.sub(
            r"(^graficos:.*?\n(?:- \w+\n)*)",
            r"\g<1>" + f"representacion_dominante: {meta['rep_dom']}\n",
            text, count=1, flags=re.MULTILINE
        )

    # Add magnitud_dominante if missing
    if "magnitud_dominante" not in text:
        text = re.sub(
            r"(representacion_dominante: \w+\n)",
            r"\g<1>" + f"magnitud_dominante: {meta['mag_dom']}\n",
            text, count=1, flags=re.MULTILINE
        )

    if text != original:
        path.write_text(text, encoding="utf-8")
        print(f"  [meta.yaml] FIXED")
    else:
        print(f"  [meta.yaml] OK")


# ---------------------------------------------------------------------------
# 4) ERRORES restructuring
# ---------------------------------------------------------------------------
ERRORES_DATA = {
    # --- CENTRO DE MASAS ---
    "centro-de-masas-en-cuerpos-extendidos": {
        "title_es": "centro de masas en cuerpos extendidos",
        "title_en": "center of mass in extended bodies",
        "errors": [
            {
                "name_es": "Suponer que el centro de masas siempre coincide con el centro geométrico",
                "name_en": "Assuming the center of mass always coincides with the geometric center",
                "cat_es": "conceptuales", "cat_en": "Conceptual errors",
                "parece_es": "El alumno asocia simetría visual con posición del CM, lo cual funciona para cuerpos homogéneos simétricos.",
                "parece_en": "The student associates visual symmetry with the CM position, which works for symmetric homogeneous bodies.",
                "incorrecto_es": "En cuerpos con densidad no uniforme, el CM se desplaza hacia la zona más densa, alejándose del centro geométrico.",
                "incorrecto_en": "In bodies with non-uniform density, the CM shifts toward the denser region, moving away from the geometric center.",
                "senal_es": "El alumno marca el centro geométrico como CM sin verificar la distribución de masa.",
                "senal_en": "The student marks the geometric center as CM without checking the mass distribution.",
                "correccion_es": "Calcular el CM mediante la integral \\(x_{cm} = \\frac{1}{M}\\int x\\,dm\\) y comparar con el centro geométrico.",
                "correccion_en": "Calculate the CM using the integral \\(x_{cm} = \\frac{1}{M}\\int x\\,dm\\) and compare with the geometric center.",
                "ejemplo_es": "Barra de 1 m con densidad lineal \\(\\lambda = 2x\\) kg/m. Centro geométrico: 0.5 m. CM real: \\(x_{cm} = \\frac{\\int_0^1 x \\cdot 2x\\,dx}{\\int_0^1 2x\\,dx} = \\frac{2/3}{1} = 0.67\\) m. No coinciden.",
                "ejemplo_en": "Rod of 1 m with linear density \\(\\lambda = 2x\\) kg/m. Geometric center: 0.5 m. Actual CM: \\(x_{cm} = \\frac{\\int_0^1 x \\cdot 2x\\,dx}{\\int_0^1 2x\\,dx} = \\frac{2/3}{1} = 0.67\\) m. They do not coincide.",
            },
            {
                "name_es": "Confundir masa total con masa diferencial en la integral",
                "name_en": "Confusing total mass with the mass differential in the integral",
                "cat_es": "matemáticos", "cat_en": "Mathematical errors",
                "parece_es": "El alumno usa \\(M\\) directamente dentro de la integral porque recuerda que es la masa que divide al final.",
                "parece_en": "The student uses \\(M\\) directly inside the integral because they remember it divides at the end.",
                "incorrecto_es": "Dentro de la integral debe aparecer \\(dm = \\rho\\,dV\\) o \\(\\lambda\\,dx\\), no la masa total.",
                "incorrecto_en": "Inside the integral one must use \\(dm = \\rho\\,dV\\) or \\(\\lambda\\,dx\\), not the total mass.",
                "senal_es": "La integral escrita contiene \\(M\\) como integrando en lugar de \\(dm\\) o una expresión diferencial.",
                "senal_en": "The written integral contains \\(M\\) as the integrand instead of \\(dm\\) or a differential expression.",
                "correccion_es": "Sustituir \\(dm\\) por la expresión diferencial adecuada según la geometría del cuerpo antes de integrar.",
                "correccion_en": "Substitute \\(dm\\) with the appropriate differential expression for the body's geometry before integrating.",
                "ejemplo_es": "Disco homogéneo de masa \\(M\\) y radio \\(R\\). Correcto: \\(dm = \\sigma\\,dA = \\frac{M}{\\pi R^2}\\,r\\,dr\\,d\\theta\\). Incorrecto: poner \\(M\\) dentro de la integral y obtener dimensiones erróneas.",
                "ejemplo_en": "Homogeneous disc of mass \\(M\\) and radius \\(R\\). Correct: \\(dm = \\sigma\\,dA = \\frac{M}{\\pi R^2}\\,r\\,dr\\,d\\theta\\). Wrong: placing \\(M\\) inside the integral and getting incorrect dimensions.",
            },
            {
                "name_es": "Elegir mal los límites de integración al cambiar de variable",
                "name_en": "Choosing wrong integration limits when changing variables",
                "cat_es": "matemáticos", "cat_en": "Mathematical errors",
                "parece_es": "Los límites originales parecen válidos porque corresponden a la geometría visible del cuerpo.",
                "parece_en": "The original limits seem valid because they correspond to the visible geometry of the body.",
                "incorrecto_es": "Al cambiar de coordenadas cartesianas a polares o a cualquier otra variable, los límites deben transformarse también.",
                "incorrecto_en": "When changing from Cartesian to polar or any other variable, the limits must be transformed as well.",
                "senal_es": "El resultado de la integral da un valor fuera del cuerpo o con dimensiones incorrectas.",
                "senal_en": "The integral result gives a value outside the body or with incorrect dimensions.",
                "correccion_es": "Verificar que los límites de la nueva variable cubren exactamente la región original del cuerpo.",
                "correccion_en": "Verify that the limits of the new variable cover exactly the original region of the body.",
                "ejemplo_es": "Semicírculo de radio \\(R\\): en polares, \\(\\theta\\) va de 0 a \\(\\pi\\), no de 0 a \\(2\\pi\\). Usar \\(2\\pi\\) duplica el área y desplaza el CM al centro en vez de dejarlo desplazado de la base.",
                "ejemplo_en": "Semicircle of radius \\(R\\): in polar coordinates, \\(\\theta\\) goes from 0 to \\(\\pi\\), not from 0 to \\(2\\pi\\). Using \\(2\\pi\\) doubles the area and shifts the CM to the center instead of leaving it offset from the base.",
            },
            {
                "name_es": "Ignorar la simetría para simplificar una coordenada del CM",
                "name_en": "Ignoring symmetry to simplify one CM coordinate",
                "cat_es": "modelo", "cat_en": "Model errors",
                "parece_es": "Calcular ambas coordenadas parece más seguro que asumir simetría.",
                "parece_en": "Computing both coordinates seems safer than assuming symmetry.",
                "incorrecto_es": "No usar la simetría no produce error si se ejecuta bien, pero desperdiciar un argumento de simetría suele llevar a integrales innecesariamente complicadas donde se cometen fallos.",
                "incorrecto_en": "Not using symmetry does not produce an error if executed correctly, but wasting a symmetry argument often leads to unnecessarily complex integrals where mistakes occur.",
                "senal_es": "El alumno calcula una integral difícil cuyo resultado es cero, sin haber detectado primero la simetría.",
                "senal_en": "The student computes a difficult integral whose result is zero without first detecting the symmetry.",
                "correccion_es": "Antes de integrar, comprobar si algún eje de simetría fuerza una coordenada del CM a un valor conocido (generalmente cero o el eje).",
                "correccion_en": "Before integrating, check whether any symmetry axis forces one CM coordinate to a known value (usually zero or the axis).",
                "ejemplo_es": "Disco homogéneo: \\(x_{cm}\\) e \\(y_{cm}\\) están en el centro por simetría circular. No hace falta integrar.",
                "ejemplo_en": "Homogeneous disc: \\(x_{cm}\\) and \\(y_{cm}\\) are at the center by circular symmetry. No integration is needed.",
            },
        ],
    },
    "centro-de-masas-sistemas-discretos": {
        "title_es": "centro de masas de sistemas discretos",
        "title_en": "center of mass of discrete systems",
        "errors": [
            {
                "name_es": "Calcular el CM como promedio aritmético de posiciones sin ponderar por masa",
                "name_en": "Computing the CM as an arithmetic average of positions without weighting by mass",
                "cat_es": "conceptuales", "cat_en": "Conceptual errors",
                "parece_es": "Si hay dos partículas, dividir la distancia por 2 parece dar el punto medio correcto.",
                "parece_en": "With two particles, dividing the distance by 2 seems to give the correct midpoint.",
                "incorrecto_es": "El CM es un promedio ponderado por masa: \\(x_{cm} = \\sum m_i x_i / \\sum m_i\\). Sin ponderar, las masas desiguales dan resultados erróneos.",
                "incorrecto_en": "The CM is a mass-weighted average: \\(x_{cm} = \\sum m_i x_i / \\sum m_i\\). Without weighting, unequal masses give wrong results.",
                "senal_es": "El alumno usa \\((x_1 + x_2)/2\\) cuando las masas son diferentes.",
                "senal_en": "The student uses \\((x_1 + x_2)/2\\) when the masses are different.",
                "correccion_es": "Incluir siempre la masa de cada partícula como peso en el promedio.",
                "correccion_en": "Always include each particle's mass as a weight in the average.",
                "ejemplo_es": "Masas de 1 kg en \\(x=0\\) y 3 kg en \\(x=4\\) m. Promedio simple: 2 m. CM correcto: \\((1 \\cdot 0 + 3 \\cdot 4)/4 = 3\\) m. El CM está más cerca de la masa mayor.",
                "ejemplo_en": "Masses of 1 kg at \\(x=0\\) and 3 kg at \\(x=4\\) m. Simple average: 2 m. Correct CM: \\((1 \\cdot 0 + 3 \\cdot 4)/4 = 3\\) m. The CM is closer to the larger mass.",
            },
            {
                "name_es": "Olvidar que el CM es vectorial y calcular solo una componente",
                "name_en": "Forgetting that the CM is a vector and computing only one component",
                "cat_es": "conceptuales", "cat_en": "Conceptual errors",
                "parece_es": "Si el problema parece unidimensional, una sola coordenada parece suficiente.",
                "parece_en": "If the problem looks one-dimensional, a single coordinate seems enough.",
                "incorrecto_es": "En el plano o el espacio, el CM tiene tantas componentes como dimensiones. Omitir una coordenada da una posición incompleta.",
                "incorrecto_en": "In the plane or in space, the CM has as many components as dimensions. Omitting a coordinate gives an incomplete position.",
                "senal_es": "El alumno escribe un solo número como respuesta cuando el sistema está en el plano.",
                "senal_en": "The student writes a single number as the answer when the system lies in a plane.",
                "correccion_es": "Calcular \\(x_{cm}\\) e \\(y_{cm}\\) (y \\(z_{cm}\\) si es 3D) por separado y reportar el vector completo.",
                "correccion_en": "Compute \\(x_{cm}\\) and \\(y_{cm}\\) (and \\(z_{cm}\\) in 3D) separately and report the full vector.",
                "ejemplo_es": "Tres masas en un triángulo: si solo se calcula \\(x_{cm} = 2\\) m, falta \\(y_{cm} = 1\\) m. El CM es \\((2, 1)\\) m, no un punto aislado en el eje \\(x\\).",
                "ejemplo_en": "Three masses on a triangle: if only \\(x_{cm} = 2\\) m is computed, \\(y_{cm} = 1\\) m is missing. The CM is \\((2, 1)\\) m, not an isolated point on the \\(x\\)-axis.",
            },
            {
                "name_es": "Colocar el origen de coordenadas de forma que complica la suma innecesariamente",
                "name_en": "Placing the coordinate origin in a way that unnecessarily complicates the sum",
                "cat_es": "modelo", "cat_en": "Model errors",
                "parece_es": "Cualquier origen da el mismo resultado porque el CM no depende del sistema de coordenadas.",
                "parece_en": "Any origin gives the same result because the CM does not depend on the coordinate system.",
                "incorrecto_es": "El resultado final es el mismo, pero un origen mal elegido genera posiciones con muchas cifras y resta legibilidad, aumentando la probabilidad de error numérico.",
                "incorrecto_en": "The final result is the same, but a poorly chosen origin generates positions with many digits and reduces readability, increasing the probability of numerical error.",
                "senal_es": "El cálculo usa coordenadas con números grandes o negativos innecesarios, y el alumno se equivoca al sumar.",
                "senal_en": "The calculation uses coordinates with unnecessarily large or negative numbers, and the student makes errors when adding.",
                "correccion_es": "Elegir el origen en una de las partículas o en un punto de simetría del sistema para simplificar la suma.",
                "correccion_en": "Place the origin at one of the particles or at a symmetry point of the system to simplify the sum.",
                "ejemplo_es": "Dos masas en \\(x = 100\\) m y \\(x = 104\\) m. Poner el origen en \\(x=100\\) simplifica a \\(x'_1=0\\), \\(x'_2=4\\) m y reduce errores.",
                "ejemplo_en": "Two masses at \\(x = 100\\) m and \\(x = 104\\) m. Placing the origin at \\(x=100\\) simplifies to \\(x'_1=0\\), \\(x'_2=4\\) m and reduces errors.",
            },
            {
                "name_es": "Sumar masas en el numerador pero olvidar la masa total en el denominador",
                "name_en": "Adding masses in the numerator but forgetting the total mass in the denominator",
                "cat_es": "matemáticos", "cat_en": "Mathematical errors",
                "parece_es": "El alumno recuerda que hay que multiplicar \\(m_i x_i\\) pero cree que la suma ya incorpora la normalización.",
                "parece_en": "The student remembers multiplying \\(m_i x_i\\) but believes the sum already incorporates normalisation.",
                "incorrecto_es": "Sin dividir entre \\(M = \\sum m_i\\), el resultado tiene unidades de kg·m y no es una posición.",
                "incorrecto_en": "Without dividing by \\(M = \\sum m_i\\), the result has units of kg·m and is not a position.",
                "senal_es": "El resultado tiene unidades extrañas (kg·m) o un valor numéricamente enorme comparado con las posiciones.",
                "senal_en": "The result has unusual units (kg·m) or a numerically huge value compared to the positions.",
                "correccion_es": "Verificar siempre que el resultado tiene unidades de longitud y cae entre las posiciones extremas del sistema.",
                "correccion_en": "Always verify that the result has units of length and falls between the extreme positions of the system.",
                "ejemplo_es": "Masas 2 kg en \\(x=1\\) m y 3 kg en \\(x=5\\) m. Sin denominar: \\(2 \\cdot 1 + 3 \\cdot 5 = 17\\) kg·m. Con denominador: \\(17/5 = 3.4\\) m. Solo el segundo es una posición.",
                "ejemplo_en": "Masses 2 kg at \\(x=1\\) m and 3 kg at \\(x=5\\) m. Without denominator: \\(2 \\cdot 1 + 3 \\cdot 5 = 17\\) kg·m. With denominator: \\(17/5 = 3.4\\) m. Only the latter is a position.",
            },
        ],
    },
    "definicion-centro-de-masas": {
        "title_es": "definición del centro de masas",
        "title_en": "definition of the center of mass",
        "errors": [
            {
                "name_es": "Creer que el centro de masas debe estar dentro del cuerpo",
                "name_en": "Believing that the center of mass must lie inside the body",
                "cat_es": "conceptuales", "cat_en": "Conceptual errors",
                "parece_es": "Si el CM resume dónde está la masa, parece que tiene que estar donde hay materia.",
                "parece_en": "If the CM summarises where the mass is, it seems it must be where matter exists.",
                "incorrecto_es": "Un anillo, una herradura o un sistema de dos partículas separadas tienen su CM fuera de la materia.",
                "incorrecto_en": "A ring, a horseshoe, or a system of two separated particles have their CM outside the material.",
                "senal_es": "El alumno descarta un resultado porque el CM cae en el vacío interior de un anillo.",
                "senal_en": "The student rejects a result because the CM falls in the empty interior of a ring.",
                "correccion_es": "Aceptar que el CM es un promedio ponderado que puede caer fuera de la distribución de masa.",
                "correccion_en": "Accept that the CM is a mass-weighted average that can fall outside the mass distribution.",
                "ejemplo_es": "Anillo homogéneo de radio \\(R\\): el CM coincide con el centro del anillo, donde no hay masa. Es correcto.",
                "ejemplo_en": "Homogeneous ring of radius \\(R\\): the CM coincides with the center of the ring, where there is no mass. This is correct.",
            },
            {
                "name_es": "Confundir centro de masas con centro de gravedad en campos no uniformes",
                "name_en": "Confusing center of mass with center of gravity in non-uniform fields",
                "cat_es": "modelo", "cat_en": "Model errors",
                "parece_es": "En la vida cotidiana ambos coinciden, así que parecen sinónimos.",
                "parece_en": "In everyday life both coincide, so they seem synonymous.",
                "incorrecto_es": "El centro de gravedad depende de cómo varía \\(g\\) sobre el cuerpo. En un campo no uniforme, CG ≠ CM.",
                "incorrecto_en": "The center of gravity depends on how \\(g\\) varies over the body. In a non-uniform field, CG ≠ CM.",
                "senal_es": "El alumno usa indistintamente CG y CM en un problema con gradiente gravitatorio.",
                "senal_en": "The student uses CG and CM interchangeably in a problem with a gravitational gradient.",
                "correccion_es": "Precisar que CM usa solo distribución de masa, mientras CG pondera con la gravedad local.",
                "correccion_en": "Clarify that CM uses only mass distribution, whereas CG weights with local gravity.",
                "ejemplo_es": "Varilla vertical de 100 m en campo donde \\(g\\) varía un 1 %. El CM está a 50 m; el CG se desplaza ligeramente hacia la zona con mayor \\(g\\).",
                "ejemplo_en": "Vertical rod of 100 m in a field where \\(g\\) varies by 1 %. The CM is at 50 m; the CG shifts slightly toward the region with greater \\(g\\).",
            },
            {
                "name_es": "Usar la fórmula para partículas discretas cuando el cuerpo es continuo",
                "name_en": "Using the discrete-particle formula when the body is continuous",
                "cat_es": "matemáticos", "cat_en": "Mathematical errors",
                "parece_es": "Dividir un cuerpo en 3 o 4 trozos gruesos parece suficiente.",
                "parece_en": "Dividing a body into 3 or 4 large chunks seems sufficient.",
                "incorrecto_es": "Particionar en pocos trozos da una aproximación, pero la fórmula exacta requiere la integral. El error puede ser grande si la densidad varía mucho.",
                "incorrecto_en": "Partitioning into a few chunks gives an approximation, but the exact formula requires the integral. The error can be large if density varies significantly.",
                "senal_es": "El alumno escribe una suma de \\(m_i x_i\\) para un cuerpo continuo sin pasar al límite diferencial.",
                "senal_en": "The student writes a sum of \\(m_i x_i\\) for a continuous body without taking the differential limit.",
                "correccion_es": "Usar \\(x_{cm} = \\frac{1}{M}\\int x\\,dm\\) para cuerpos continuos, no la suma finita.",
                "correccion_en": "Use \\(x_{cm} = \\frac{1}{M}\\int x\\,dm\\) for continuous bodies, not the finite sum.",
                "ejemplo_es": "Barra con densidad \\(\\lambda = x\\) entre 0 y 2 m. Suma de 2 trozos: \\(x_{cm} \\approx 1.25\\) m. Integral exacta: \\(x_{cm} = 4/3 \\approx 1.33\\) m. Diferencia del 6 %.",
                "ejemplo_en": "Rod with density \\(\\lambda = x\\) between 0 and 2 m. Sum of 2 chunks: \\(x_{cm} \\approx 1.25\\) m. Exact integral: \\(x_{cm} = 4/3 \\approx 1.33\\) m. 6% difference.",
            },
            {
                "name_es": "Interpretar el CM como el punto donde se aplica la fuerza neta",
                "name_en": "Interpreting the CM as the point where the net force is applied",
                "cat_es": "interpretación", "cat_en": "Interpretation errors",
                "parece_es": "Si la segunda ley de Newton para el CM dice \\(F_{ext} = M a_{cm}\\), parece que la fuerza actúa ahí.",
                "parece_en": "If Newton's second law for the CM says \\(F_{ext} = M a_{cm}\\), it seems the force acts there.",
                "incorrecto_es": "Las fuerzas se aplican en sus puntos de contacto reales. El CM es donde se calcula la aceleración traslacional, no donde actúan las fuerzas.",
                "incorrecto_en": "Forces are applied at their real contact points. The CM is where the translational acceleration is computed, not where forces act.",
                "senal_es": "El alumno dibuja todas las flechas de fuerza saliendo del CM en vez de los puntos de contacto.",
                "senal_en": "The student draws all force arrows originating from the CM instead of the contact points.",
                "correccion_es": "Las fuerzas se dibujan en el punto de aplicación real; el CM se usa solo para sumar el efecto traslacional.",
                "correccion_en": "Forces are drawn at the real application point; the CM is used only to sum the translational effect.",
                "ejemplo_es": "Barra apoyada en dos puntos: las normales actúan en los apoyos, no en el CM. El CM permite calcular \\(a_{cm}\\), pero las normales se dibujan en los extremos.",
                "ejemplo_en": "Rod supported at two points: normal forces act at the supports, not at the CM. The CM allows computing \\(a_{cm}\\), but the normals are drawn at the endpoints.",
            },
        ],
    },
    "marco-del-centro-de-masas": {
        "title_es": "marco del centro de masas",
        "title_en": "center-of-mass frame",
        "errors": [
            {
                "name_es": "Creer que en el marco CM las velocidades son cero",
                "name_en": "Believing that velocities are zero in the CM frame",
                "cat_es": "conceptuales", "cat_en": "Conceptual errors",
                "parece_es": "Si el momento total es cero, parece que nadie se mueve.",
                "parece_en": "If total momentum is zero, it seems nothing moves.",
                "incorrecto_es": "El momento total es cero, pero cada partícula tiene velocidad \\(v'_i = v_i - v_{cm} \\neq 0\\). Solo la suma ponderada es nula.",
                "incorrecto_en": "The total momentum is zero, but each particle has velocity \\(v'_i = v_i - v_{cm} \\neq 0\\). Only the weighted sum is zero.",
                "senal_es": "El alumno dice que ambos cuerpos están en reposo en el marco CM.",
                "senal_en": "The student says both bodies are at rest in the CM frame.",
                "correccion_es": "Restar \\(v_{cm}\\) a cada velocidad; verificar que \\(\\sum m_i v'_i = 0\\) pero \\(v'_i \\neq 0\\) individualmente.",
                "correccion_en": "Subtract \\(v_{cm}\\) from each velocity; verify that \\(\\sum m_i v'_i = 0\\) but \\(v'_i \\neq 0\\) individually.",
                "ejemplo_es": "Dos partículas de 1 y 3 kg con velocidades 6 y 2 m/s. \\(v_{cm} = 3\\) m/s. En el CM: \\(v'_1 = 3\\) m/s, \\(v'_2 = -1\\) m/s. Ambas se mueven, pero \\(1 \\cdot 3 + 3 \\cdot (-1) = 0\\).",
                "ejemplo_en": "Two particles of 1 and 3 kg with velocities 6 and 2 m/s. \\(v_{cm} = 3\\) m/s. In the CM: \\(v'_1 = 3\\) m/s, \\(v'_2 = -1\\) m/s. Both move, but \\(1 \\cdot 3 + 3 \\cdot (-1) = 0\\).",
            },
            {
                "name_es": "Aplicar conservación de energía cinética con los valores de laboratorio en el marco CM",
                "name_en": "Applying kinetic energy conservation with lab values in the CM frame",
                "cat_es": "matemáticos", "cat_en": "Mathematical errors",
                "parece_es": "La energía cinética es energía cinética en cualquier marco.",
                "parece_en": "Kinetic energy is kinetic energy in any frame.",
                "incorrecto_es": "La energía cinética cambia con el marco. Hay que usar las velocidades primas \\(v'_i\\) para calcular \\(K_{cm}\\).",
                "incorrecto_en": "Kinetic energy changes with the frame. The primed velocities \\(v'_i\\) must be used to compute \\(K_{cm}\\).",
                "senal_es": "El alumno escribe \\(K_{cm} = \\tfrac{1}{2}m v^2\\) con \\(v\\) del laboratorio.",
                "senal_en": "The student writes \\(K_{cm} = \\tfrac{1}{2}m v^2\\) with the lab \\(v\\).",
                "correccion_es": "Usar \\(K_{cm} = \\sum \\tfrac{1}{2}m_i v'^2_i\\) con \\(v'_i = v_i - v_{cm}\\).",
                "correccion_en": "Use \\(K_{cm} = \\sum \\tfrac{1}{2}m_i v'^2_i\\) with \\(v'_i = v_i - v_{cm}\\).",
                "ejemplo_es": "Con los datos anteriores: \\(K_{lab} = \\tfrac{1}{2}(1)(36) + \\tfrac{1}{2}(3)(4) = 24\\) J. \\(K_{cm} = \\tfrac{1}{2}(1)(9) + \\tfrac{1}{2}(3)(1) = 6\\) J. Son muy distintos.",
                "ejemplo_en": "With the data above: \\(K_{lab} = \\tfrac{1}{2}(1)(36) + \\tfrac{1}{2}(3)(4) = 24\\) J. \\(K_{cm} = \\tfrac{1}{2}(1)(9) + \\tfrac{1}{2}(3)(1) = 6\\) J. They are very different.",
            },
            {
                "name_es": "Olvidar que el marco CM no es inercial si hay fuerzas externas",
                "name_en": "Forgetting that the CM frame is non-inertial when external forces act",
                "cat_es": "modelo", "cat_en": "Model errors",
                "parece_es": "El marco CM simplifica tanto que parece siempre válido como inercial.",
                "parece_en": "The CM frame simplifies so much that it always seems valid as inertial.",
                "incorrecto_es": "Si hay fuerza externa neta, el CM acelera y el marco no es inercial; aparecen pseudofuerzas.",
                "incorrecto_en": "If there is a net external force, the CM accelerates and the frame is non-inertial; pseudo-forces appear.",
                "senal_es": "El alumno aplica \\(F = ma\\) en el marco CM ignorando fuerzas ficticias tras un impulso externo.",
                "senal_en": "The student applies \\(F = ma\\) in the CM frame ignoring fictitious forces after an external impulse.",
                "correccion_es": "Verificar primero que la fuerza externa neta es cero o despreciable antes de tratar el marco CM como inercial.",
                "correccion_en": "First verify that the net external force is zero or negligible before treating the CM frame as inertial.",
                "ejemplo_es": "Explosión en caída libre: el CM acelera a \\(g\\). En el marco CM sin pseudofuerza, los fragmentos parecen sin peso, lo cual es correcto solo si se añade \\(-m g\\) como fuerza ficticia.",
                "ejemplo_en": "Explosion in free fall: the CM accelerates at \\(g\\). In the CM frame without a pseudo-force, fragments seem weightless, which is only correct if \\(-mg\\) is added as a fictitious force.",
            },
            {
                "name_es": "Interpretar el momento nulo del CM como ausencia de movimiento",
                "name_en": "Interpreting the zero total momentum in the CM frame as absence of motion",
                "cat_es": "interpretación", "cat_en": "Interpretation errors",
                "parece_es": "Si \\(p_{total} = 0\\), parece que el sistema no se mueve.",
                "parece_en": "If \\(p_{total} = 0\\), it seems the system is not moving.",
                "incorrecto_es": "Las partículas se mueven en sentidos opuestos con momentos iguales y contrarios; el sistema tiene energía cinética.",
                "incorrecto_en": "Particles move in opposite directions with equal and opposite momenta; the system has kinetic energy.",
                "senal_es": "El alumno concluye que no hay colisión posible porque el momento es cero.",
                "senal_en": "The student concludes that no collision is possible because momentum is zero.",
                "correccion_es": "Recordar que momento total cero no implica velocidades cero; las partículas se acercan y colisionan.",
                "correccion_en": "Remember that zero total momentum does not imply zero velocities; the particles approach each other and collide.",
                "ejemplo_es": "Dos partículas iguales con \\(v' = +3\\) y \\(v' = -3\\) m/s: chocan a 6 m/s de velocidad relativa aunque el momento total sea 0.",
                "ejemplo_en": "Two equal particles with \\(v' = +3\\) and \\(v' = -3\\) m/s: they collide at 6 m/s relative speed even though total momentum is 0.",
            },
        ],
    },
    "movimiento-del-centro-de-masas": {
        "title_es": "movimiento del centro de masas",
        "title_en": "motion of the center of mass",
        "errors": [
            {
                "name_es": "Creer que las fuerzas internas afectan la aceleración del CM",
                "name_en": "Believing that internal forces affect the CM acceleration",
                "cat_es": "conceptuales", "cat_en": "Conceptual errors",
                "parece_es": "Dentro de una explosión todo cambia, así que el CM debería acelerarse.",
                "parece_en": "During an explosion everything changes, so the CM should accelerate.",
                "incorrecto_es": "Por la tercera ley de Newton, las fuerzas internas se cancelan. Solo la fuerza externa neta acelera el CM.",
                "incorrecto_en": "By Newton's third law, internal forces cancel. Only the net external force accelerates the CM.",
                "senal_es": "El alumno incluye la fuerza de la explosión en \\(F_{ext}\\).",
                "senal_en": "The student includes the explosion force in \\(F_{ext}\\).",
                "correccion_es": "Identificar fuerzas internas (entre partes del sistema) y externas (desde fuera del sistema) antes de aplicar \\(F_{ext} = M a_{cm}\\).",
                "correccion_en": "Identify internal forces (between parts of the system) and external forces (from outside) before applying \\(F_{ext} = M a_{cm}\\).",
                "ejemplo_es": "Proyectil que explota en vuelo: las fuerzas de la explosión son internas. El CM sigue la misma trayectoria parabólica que tenía antes de explotar.",
                "ejemplo_en": "Projectile that explodes in flight: explosion forces are internal. The CM follows the same parabolic trajectory it had before exploding.",
            },
            {
                "name_es": "Aplicar \\(F = Ma_{cm}\\) cuando la masa del sistema cambia",
                "name_en": "Applying \\(F = Ma_{cm}\\) when the system mass changes",
                "cat_es": "modelo", "cat_en": "Model errors",
                "parece_es": "La segunda ley siempre es \\(F = Ma\\), así que parece correcto sin más.",
                "parece_en": "Newton's second law is always \\(F = Ma\\), so it seems correct without further thought.",
                "incorrecto_es": "Si la masa del sistema varía (cohete, cadena que cae), la forma correcta es \\(F_{ext} = dp/dt\\), que incluye \\(dm/dt\\).",
                "incorrecto_en": "If the system's mass varies (rocket, falling chain), the correct form is \\(F_{ext} = dp/dt\\), which includes \\(dm/dt\\).",
                "senal_es": "El alumno divide la fuerza entre la masa instantánea sin incluir el término \\(v\\,dm/dt\\).",
                "senal_en": "The student divides force by instantaneous mass without including the \\(v\\,dm/dt\\) term.",
                "correccion_es": "Usar \\(F_{ext} = \\frac{dp}{dt} = m\\frac{dv}{dt} + v\\frac{dm}{dt}\\) cuando la masa es variable.",
                "correccion_en": "Use \\(F_{ext} = \\frac{dp}{dt} = m\\frac{dv}{dt} + v\\frac{dm}{dt}\\) when mass is variable.",
                "ejemplo_es": "Cohete: \\(F_{ext} = 0\\), pero \\(dp/dt = m\\dot{v} + \\dot{m}v_{escape}\\). Ignorar \\(\\dot{m}\\) elimina el empuje.",
                "ejemplo_en": "Rocket: \\(F_{ext} = 0\\), but \\(dp/dt = m\\dot{v} + \\dot{m}v_{escape}\\). Ignoring \\(\\dot{m}\\) eliminates thrust.",
            },
            {
                "name_es": "Confundir velocidad del CM con velocidad de una de las partículas",
                "name_en": "Confusing CM velocity with the velocity of one particle",
                "cat_es": "matemáticos", "cat_en": "Mathematical errors",
                "parece_es": "Si una partícula es mucho más pesada, su velocidad parece ser la del CM.",
                "parece_en": "If one particle is much heavier, its velocity seems to be the CM velocity.",
                "incorrecto_es": "\\(v_{cm} = \\sum m_i v_i / M\\). Incluso si una masa domina, la otra contribuye y el resultado difiere.",
                "incorrecto_en": "\\(v_{cm} = \\sum m_i v_i / M\\). Even if one mass dominates, the other contributes and the result differs.",
                "senal_es": "El alumno escribe \\(v_{cm} = v_1\\) sin calcular la media ponderada.",
                "senal_en": "The student writes \\(v_{cm} = v_1\\) without computing the weighted average.",
                "correccion_es": "Calcular siempre \\(v_{cm} = (m_1 v_1 + m_2 v_2)/M\\) y comparar con \\(v_1\\) para ver la diferencia.",
                "correccion_en": "Always compute \\(v_{cm} = (m_1 v_1 + m_2 v_2)/M\\) and compare with \\(v_1\\) to see the difference.",
                "ejemplo_es": "Masas 10 kg a 5 m/s y 1 kg a 50 m/s. \\(v_{cm} = (50 + 50)/11 \\approx 9.1\\) m/s, no 5 m/s.",
                "ejemplo_en": "Masses 10 kg at 5 m/s and 1 kg at 50 m/s. \\(v_{cm} = (50 + 50)/11 \\approx 9.1\\) m/s, not 5 m/s.",
            },
            {
                "name_es": "Interpretar la trayectoria del CM como la trayectoria de cada fragmento",
                "name_en": "Interpreting the CM trajectory as the trajectory of each fragment",
                "cat_es": "interpretación", "cat_en": "Interpretation errors",
                "parece_es": "Si el CM sigue una parábola, cada fragmento debería hacer lo mismo.",
                "parece_en": "If the CM follows a parabola, each fragment should do the same.",
                "incorrecto_es": "Cada fragmento tiene su propia trayectoria según la velocidad que recibió en la separación. Solo el CM mantiene la trayectoria original.",
                "incorrecto_en": "Each fragment has its own trajectory according to the velocity it received at separation. Only the CM keeps the original trajectory.",
                "senal_es": "El alumno dibuja todos los fragmentos cayendo por la misma parábola.",
                "senal_en": "The student draws all fragments falling along the same parabola.",
                "correccion_es": "Dibujar la trayectoria del CM (parábola) y las de los fragmentos por separado, verificando que la media ponderada sigue en la parábola original.",
                "correccion_en": "Draw the CM trajectory (parabola) and each fragment's trajectory separately, checking that the weighted average stays on the original parabola.",
                "ejemplo_es": "Proyectil que se parte en dos: uno cae vertical y el otro sale rasante. El CM sigue la parábola, pero ninguno de los dos fragmentos la recorre.",
                "ejemplo_en": "Projectile that splits in two: one falls vertically and the other goes tangentially. The CM follows the parabola, but neither fragment traces it.",
            },
        ],
    },
    # --- COLISIONES ---
    "colisiones-elasticas": {
        "title_es": "colisiones elásticas",
        "title_en": "elastic collisions",
        "errors": [
            {
                "name_es": "Creer que en una colisión elástica las velocidades simplemente se intercambian siempre",
                "name_en": "Believing that in an elastic collision velocities always simply swap",
                "cat_es": "conceptuales", "cat_en": "Conceptual errors",
                "parece_es": "En los ejemplos con masas iguales, efectivamente se intercambian. Eso se generaliza al caso desigual.",
                "parece_en": "In examples with equal masses, velocities do swap. This is generalised to the unequal case.",
                "incorrecto_es": "El intercambio solo ocurre con masas iguales. Con masas diferentes, las velocidades finales dependen de la razón de masas.",
                "incorrecto_en": "The swap only occurs with equal masses. With different masses, final velocities depend on the mass ratio.",
                "senal_es": "El alumno escribe \\(v_1' = v_2\\) y \\(v_2' = v_1\\) sin importar las masas.",
                "senal_en": "The student writes \\(v_1' = v_2\\) and \\(v_2' = v_1\\) regardless of the masses.",
                "correccion_es": "Usar las fórmulas generales: \\(v_1' = \\frac{m_1 - m_2}{m_1 + m_2}v_1 + \\frac{2m_2}{m_1 + m_2}v_2\\).",
                "correccion_en": "Use the general formulae: \\(v_1' = \\frac{m_1 - m_2}{m_1 + m_2}v_1 + \\frac{2m_2}{m_1 + m_2}v_2\\).",
                "ejemplo_es": "Masa 1 kg a 10 m/s choca con 3 kg en reposo. Si se intercambiaran: \\(v_1'=0\\), \\(v_2'=10\\). Real: \\(v_1' = -5\\) m/s, \\(v_2' = 5\\) m/s.",
                "ejemplo_en": "A 1 kg mass at 10 m/s hits a 3 kg mass at rest. If swapped: \\(v_1'=0\\), \\(v_2'=10\\). Actual: \\(v_1' = -5\\) m/s, \\(v_2' = 5\\) m/s.",
            },
            {
                "name_es": "Pensar que la energía cinética de cada cuerpo se conserva individualmente",
                "name_en": "Thinking that each body's kinetic energy is individually conserved",
                "cat_es": "conceptuales", "cat_en": "Conceptual errors",
                "parece_es": "Si la energía cinética total se conserva, parece que cada parte mantiene la suya.",
                "parece_en": "If total kinetic energy is conserved, it seems each part keeps its own.",
                "incorrecto_es": "Lo que se conserva es la suma total \\(K_1 + K_2\\), no cada término. Hay transferencia de energía entre los cuerpos.",
                "incorrecto_en": "What is conserved is the total sum \\(K_1 + K_2\\), not each term. There is energy transfer between the bodies.",
                "senal_es": "El alumno afirma que la velocidad de cada cuerpo no puede cambiar en magnitud.",
                "senal_en": "The student claims that each body's speed cannot change in magnitude.",
                "correccion_es": "Permitir que las energías individuales cambien mientras la suma se mantenga.",
                "correccion_en": "Allow individual energies to change as long as the sum is maintained.",
                "ejemplo_es": "Bola de 2 kg a 4 m/s (\\(K_1=16\\) J) golpea bola de 2 kg en reposo. Después: ambas a 2.83 m/s... No: con masas iguales, las velocidades se intercambian y \\(K_1 = 0\\) J, \\(K_2 = 16\\) J.",
                "ejemplo_en": "A 2 kg ball at 4 m/s (\\(K_1=16\\) J) hits a 2 kg ball at rest. After: both at 2.83 m/s... No: with equal masses, velocities swap and \\(K_1 = 0\\) J, \\(K_2 = 16\\) J.",
            },
            {
                "name_es": "Usar una sola ecuación (momento) cuando se necesitan dos (momento + energía)",
                "name_en": "Using a single equation (momentum) when two are needed (momentum + energy)",
                "cat_es": "matemáticos", "cat_en": "Mathematical errors",
                "parece_es": "Con momento y energía se tienen dos ecuaciones, pero el alumno cree que basta con el momento.",
                "parece_en": "With momentum and energy there are two equations, but the student believes momentum alone suffices.",
                "incorrecto_es": "Una colisión elástica tiene dos incógnitas (\\(v_1', v_2'\\)). Una sola ecuación no las determina.",
                "incorrecto_en": "An elastic collision has two unknowns (\\(v_1', v_2'\\)). A single equation does not determine them.",
                "senal_es": "El alumno obtiene una recta de soluciones y elige arbitrariamente un punto.",
                "senal_en": "The student obtains a line of solutions and arbitrarily picks a point.",
                "correccion_es": "Plantear simultáneamente conservación de momento y conservación de energía cinética.",
                "correccion_en": "Simultaneously set up conservation of momentum and conservation of kinetic energy.",
                "ejemplo_es": "Con \\(m_1 v_1 = m_1 v_1' + m_2 v_2'\\) hay infinitas soluciones. Añadiendo \\(\\tfrac{1}{2}m_1 v_1^2 = \\tfrac{1}{2}m_1 v_1'^2 + \\tfrac{1}{2}m_2 v_2'^2\\) se obtiene una solución única.",
                "ejemplo_en": "With \\(m_1 v_1 = m_1 v_1' + m_2 v_2'\\) there are infinitely many solutions. Adding \\(\\tfrac{1}{2}m_1 v_1^2 = \\tfrac{1}{2}m_1 v_1'^2 + \\tfrac{1}{2}m_2 v_2'^2\\) yields a unique solution.",
            },
            {
                "name_es": "Confundir colisión elástica con colisión donde no hay deformación",
                "name_en": "Confusing elastic collision with a collision involving no deformation",
                "cat_es": "modelo", "cat_en": "Model errors",
                "parece_es": "\"Elástico\" sugiere materiales que recuperan su forma, como un resorte.",
                "parece_en": "\"Elastic\" suggests materials that recover their shape, like a spring.",
                "incorrecto_es": "En física, colisión elástica significa que se conserva la energía cinética total. Un material puede deformarse durante el choque y aun así devolver toda la energía.",
                "incorrecto_en": "In physics, elastic collision means total kinetic energy is conserved. A material may deform during the collision and still return all the energy.",
                "senal_es": "El alumno clasifica una colisión como inelástica porque observa deformación temporal durante el contacto.",
                "senal_en": "The student classifies a collision as inelastic because they observe temporary deformation during contact.",
                "correccion_es": "El criterio es la energía cinética total antes y después, no la forma del material durante el choque.",
                "correccion_en": "The criterion is total kinetic energy before and after, not the shape of the material during the collision.",
                "ejemplo_es": "Dos pelotas de goma se deforman al chocar pero recuperan toda la energía: es elástica. Dos bolas de plastilina no se deforman mucho pero quedan unidas: es totalmente inelástica.",
                "ejemplo_en": "Two rubber balls deform on impact but recover all energy: it is elastic. Two clay balls barely deform but stick together: it is perfectly inelastic.",
            },
        ],
    },
    "colisiones-inelasticas": {
        "title_es": "colisiones inelásticas",
        "title_en": "inelastic collisions",
        "errors": [
            {
                "name_es": "Creer que en una colisión inelástica no se conserva el momento lineal",
                "name_en": "Believing that momentum is not conserved in an inelastic collision",
                "cat_es": "conceptuales", "cat_en": "Conceptual errors",
                "parece_es": "Si se pierde energía, parece que también se pierde momento.",
                "parece_en": "If energy is lost, it seems momentum is also lost.",
                "incorrecto_es": "El momento lineal se conserva siempre que no haya fuerza externa neta. Lo que no se conserva es la energía cinética.",
                "incorrecto_en": "Linear momentum is always conserved when there is no net external force. What is not conserved is kinetic energy.",
                "senal_es": "El alumno escribe que \\(p_f < p_i\\) sin justificar una fuerza externa.",
                "senal_en": "The student writes \\(p_f < p_i\\) without justifying an external force.",
                "correccion_es": "Separar claramente conservación de momento (sí) y conservación de energía cinética (no) en colisiones inelásticas.",
                "correccion_en": "Clearly separate momentum conservation (yes) from kinetic energy conservation (no) in inelastic collisions.",
                "ejemplo_es": "Dos carros de 2 kg: uno a 4 m/s, otro en reposo. \\(p_i = 8\\) kg·m/s. Tras el choque, \\(p_f = 8\\) kg·m/s sin importar cuánta energía se pierda.",
                "ejemplo_en": "Two 2 kg carts: one at 4 m/s, the other at rest. \\(p_i = 8\\) kg·m/s. After the collision, \\(p_f = 8\\) kg·m/s regardless of how much energy is lost.",
            },
            {
                "name_es": "Asumir que toda la energía cinética se pierde",
                "name_en": "Assuming all kinetic energy is lost",
                "cat_es": "modelo", "cat_en": "Model errors",
                "parece_es": "\"Inelástica\" suena a que toda la energía desaparece.",
                "parece_en": "\"Inelastic\" sounds like all energy disappears.",
                "incorrecto_es": "Solo la colisión totalmente inelástica (cuerpos unidos) pierde el máximo posible. En una inelástica genérica se pierde parte, no toda.",
                "incorrecto_en": "Only the perfectly inelastic collision (bodies stick) loses the maximum possible. In a generic inelastic collision some, not all, energy is lost.",
                "senal_es": "El alumno iguala \\(K_f = 0\\) en toda colisión inelástica.",
                "senal_en": "The student sets \\(K_f = 0\\) in every inelastic collision.",
                "correccion_es": "Usar \\(\\Delta K = K_f - K_i < 0\\) y calcular \\(K_f\\) a partir de las velocidades finales reales, no asumir que es cero.",
                "correccion_en": "Use \\(\\Delta K = K_f - K_i < 0\\) and compute \\(K_f\\) from the actual final velocities, not assume it is zero.",
                "ejemplo_es": "Choque de 2 kg a 6 m/s con 2 kg en reposo, \\(v_1' = 2\\) m/s, \\(v_2' = 4\\) m/s. \\(K_i = 36\\) J, \\(K_f = 4 + 16 = 20\\) J. Se pierden 16 J, no 36.",
                "ejemplo_en": "Collision of 2 kg at 6 m/s with 2 kg at rest, \\(v_1' = 2\\) m/s, \\(v_2' = 4\\) m/s. \\(K_i = 36\\) J, \\(K_f = 4 + 16 = 20\\) J. 16 J are lost, not 36.",
            },
            {
                "name_es": "Calcular la pérdida de energía antes de hallar las velocidades finales",
                "name_en": "Computing the energy loss before finding the final velocities",
                "cat_es": "matemáticos", "cat_en": "Mathematical errors",
                "parece_es": "Si se conoce que se pierde un 40 % de energía, se puede restar directamente.",
                "parece_en": "If 40 % of energy is lost, it can be subtracted directly.",
                "incorrecto_es": "Sin conocer las velocidades finales individuales, no se puede verificar que el momento se conserve. El porcentaje de pérdida es consecuencia, no dato de entrada salvo que se indique.",
                "incorrecto_en": "Without knowing the individual final velocities, one cannot verify momentum conservation. The loss percentage is a consequence, not an input unless stated.",
                "senal_es": "El alumno resuelve la energía primero y obtiene velocidades que violan la conservación de momento.",
                "senal_en": "The student solves energy first and obtains velocities that violate momentum conservation.",
                "correccion_es": "Primero aplicar conservación de momento; luego, con las velocidades finales, calcular la pérdida de energía.",
                "correccion_en": "First apply momentum conservation; then compute the energy loss from the final velocities.",
                "ejemplo_es": "Si \\(K_f = 0.6 K_i\\) y se despeja \\(v_f\\) sin conservación de momento, la velocidad final puede no ser consistente con \\(p_i = p_f\\).",
                "ejemplo_en": "If \\(K_f = 0.6 K_i\\) and \\(v_f\\) is found without momentum conservation, the final velocity may not be consistent with \\(p_i = p_f\\).",
            },
            {
                "name_es": "Interpretar la energía perdida como energía destruida",
                "name_en": "Interpreting the lost energy as destroyed energy",
                "cat_es": "interpretación", "cat_en": "Interpretation errors",
                "parece_es": "Si la energía cinética baja, la energía ha desaparecido.",
                "parece_en": "If kinetic energy decreases, the energy has disappeared.",
                "incorrecto_es": "La energía se transforma en deformación, calor, sonido u otras formas. No se destruye; se convierte.",
                "incorrecto_en": "The energy transforms into deformation, heat, sound, or other forms. It is not destroyed; it converts.",
                "senal_es": "El alumno escribe \"la energía se pierde\" sin mencionar a dónde va.",
                "senal_en": "The student writes \"the energy is lost\" without mentioning where it goes.",
                "correccion_es": "Indicar siempre el destino de la energía cinética perdida: calor, deformación permanente, sonido, etc.",
                "correccion_en": "Always state where the lost kinetic energy goes: heat, permanent deformation, sound, etc.",
                "ejemplo_es": "Choque de plastilina: la energía cinética perdida calienta las bolas y las deforma. Si se mide con un termómetro, la temperatura sube.",
                "ejemplo_en": "Clay collision: the lost kinetic energy heats the balls and deforms them. If measured with a thermometer, the temperature rises.",
            },
        ],
    },
    "colisiones-totalmente-inelasticas": {
        "title_es": "colisiones totalmente inelásticas",
        "title_en": "perfectly inelastic collisions",
        "errors": [
            {
                "name_es": "Creer que la velocidad final es la media aritmética de las velocidades iniciales",
                "name_en": "Believing the final velocity is the arithmetic average of the initial velocities",
                "cat_es": "conceptuales", "cat_en": "Conceptual errors",
                "parece_es": "Dividir entre 2 parece correcto cuando los cuerpos se unen.",
                "parece_en": "Dividing by 2 seems correct when the bodies join.",
                "incorrecto_es": "La velocidad final es \\(v_f = (m_1 v_1 + m_2 v_2)/(m_1 + m_2)\\), un promedio ponderado por masa.",
                "incorrecto_en": "The final velocity is \\(v_f = (m_1 v_1 + m_2 v_2)/(m_1 + m_2)\\), a mass-weighted average.",
                "senal_es": "El alumno divide \\((v_1 + v_2)/2\\) con masas diferentes.",
                "senal_en": "The student divides \\((v_1 + v_2)/2\\) with different masses.",
                "correccion_es": "Aplicar conservación de momento: \\(v_f = (m_1 v_1 + m_2 v_2)/(m_1 + m_2)\\).",
                "correccion_en": "Apply momentum conservation: \\(v_f = (m_1 v_1 + m_2 v_2)/(m_1 + m_2)\\).",
                "ejemplo_es": "1 kg a 10 m/s + 4 kg en reposo. Media aritmética: 5 m/s. Correcto: \\((10 + 0)/5 = 2\\) m/s.",
                "ejemplo_en": "1 kg at 10 m/s + 4 kg at rest. Arithmetic average: 5 m/s. Correct: \\((10 + 0)/5 = 2\\) m/s.",
            },
            {
                "name_es": "Asumir que la pérdida de energía cinética es siempre el 100 %",
                "name_en": "Assuming the kinetic energy loss is always 100 %",
                "cat_es": "modelo", "cat_en": "Model errors",
                "parece_es": "Es la máxima pérdida posible, así que parece total.",
                "parece_en": "It is the maximum possible loss, so it seems total.",
                "incorrecto_es": "La pérdida es máxima compatible con la conservación de momento, pero el cuerpo unido se mueve y retiene \\(K_f = \\tfrac{1}{2}(m_1+m_2)v_f^2 > 0\\).",
                "incorrecto_en": "The loss is maximal compatible with momentum conservation, but the joined body moves and retains \\(K_f = \\tfrac{1}{2}(m_1+m_2)v_f^2 > 0\\).",
                "senal_es": "El alumno dice que toda la energía se disipa y escribe \\(K_f = 0\\).",
                "senal_en": "The student says all energy dissipates and writes \\(K_f = 0\\).",
                "correccion_es": "Calcular \\(K_f\\) con la velocidad final real y comparar con \\(K_i\\).",
                "correccion_en": "Compute \\(K_f\\) with the actual final velocity and compare with \\(K_i\\).",
                "ejemplo_es": "1 kg a 6 m/s + 2 kg en reposo → \\(v_f = 2\\) m/s. \\(K_i = 18\\) J, \\(K_f = 6\\) J. Se pierde 67 %, no 100 %.",
                "ejemplo_en": "1 kg at 6 m/s + 2 kg at rest → \\(v_f = 2\\) m/s. \\(K_i = 18\\) J, \\(K_f = 6\\) J. 67 % is lost, not 100 %.",
            },
            {
                "name_es": "Olvidar sumar ambas masas en el denominador de la velocidad final",
                "name_en": "Forgetting to add both masses in the denominator of the final velocity",
                "cat_es": "matemáticos", "cat_en": "Mathematical errors",
                "parece_es": "Dividir solo entre \\(m_1\\) es un descuido que parece dar un resultado razonable.",
                "parece_en": "Dividing only by \\(m_1\\) is an oversight that seems to give a reasonable result.",
                "incorrecto_es": "Tras unirse, la masa total es \\(m_1 + m_2\\). Dividir solo entre \\(m_1\\) da una velocidad demasiado grande.",
                "incorrecto_en": "After joining, the total mass is \\(m_1 + m_2\\). Dividing only by \\(m_1\\) gives a velocity that is too large.",
                "senal_es": "La velocidad final resulta igual o mayor que la velocidad inicial del proyectil.",
                "senal_en": "The final velocity equals or exceeds the projectile's initial velocity.",
                "correccion_es": "Verificar que \\(v_f < \\max(v_1, v_2)\\) (salvo ambos en la misma dirección) y que el denominador sea \\(m_1 + m_2\\).",
                "correccion_en": "Check that \\(v_f < \\max(v_1, v_2)\\) (unless both move in the same direction) and that the denominator is \\(m_1 + m_2\\).",
                "ejemplo_es": "10 kg a 5 m/s + 10 kg en reposo. Error: \\(v_f = 50/10 = 5\\) m/s (no cambia). Correcto: \\(v_f = 50/20 = 2.5\\) m/s.",
                "ejemplo_en": "10 kg at 5 m/s + 10 kg at rest. Error: \\(v_f = 50/10 = 5\\) m/s (unchanged). Correct: \\(v_f = 50/20 = 2.5\\) m/s.",
            },
            {
                "name_es": "Interpretar la colisión totalmente inelástica como la más violenta",
                "name_en": "Interpreting the perfectly inelastic collision as the most violent",
                "cat_es": "interpretación", "cat_en": "Interpretation errors",
                "parece_es": "Si se pierde la máxima energía, el impacto es el más fuerte.",
                "parece_en": "If the maximum energy is lost, the impact is the strongest.",
                "incorrecto_es": "\"Más violenta\" depende de la fuerza de impacto y la deformación, no de cuánta energía cinética se pierde. La fuerza de impacto depende de la duración del contacto.",
                "incorrecto_en": "\"Most violent\" depends on impact force and deformation, not on how much kinetic energy is lost. Impact force depends on contact duration.",
                "senal_es": "El alumno clasifica choques por peligrosidad según si son elásticos o inelásticos en vez de según fuerzas de contacto.",
                "senal_en": "The student ranks collisions by danger based on elastic vs inelastic rather than contact forces.",
                "correccion_es": "Evaluar la violencia de un choque por la fuerza máxima y la deformación, no solo por la clasificación energética.",
                "correccion_en": "Assess the violence of a collision by the peak force and deformation, not just by the energy classification.",
                "ejemplo_es": "Coche con zona de deformación (inelástica) protege mejor que un coche rígido (más elástico): la fuerza pico es menor aunque la pérdida de energía cinética sea mayor.",
                "ejemplo_en": "A car with a crumple zone (inelastic) protects better than a rigid car (more elastic): the peak force is lower even though kinetic energy loss is greater.",
            },
        ],
    },
}

# For brevity, generate generic errors for leaves not in the dictionary
def _make_generic_errors(leaf_name, title_es, title_en):
    """Create 4 generic but structured errors based on the leaf topic."""
    # Clean the title from the leaf name
    pretty_es = title_es or leaf_name.replace("-", " ")
    pretty_en = title_en or leaf_name.replace("-", " ")
    return {
        "title_es": pretty_es,
        "title_en": pretty_en,
        "errors": [
            {
                "name_es": f"Confundir la definición formal de {pretty_es} con la intuición cotidiana",
                "name_en": f"Confusing the formal definition of {pretty_en} with everyday intuition",
                "cat_es": "conceptuales", "cat_en": "Conceptual errors",
                "parece_es": f"La intuición cotidiana sobre {pretty_es} funciona en contextos simples, así que parece correcta siempre.",
                "parece_en": f"Everyday intuition about {pretty_en} works in simple contexts, so it seems always correct.",
                "incorrecto_es": f"La definición física de {pretty_es} incluye restricciones (vectorialidad, signo, marco de referencia) que la intuición ignora.",
                "incorrecto_en": f"The physics definition of {pretty_en} includes restrictions (vector nature, sign, reference frame) that intuition ignores.",
                "senal_es": "El alumno obtiene un resultado con el signo incorrecto o con magnitud absurda y no lo cuestiona.",
                "senal_en": "The student gets a result with the wrong sign or absurd magnitude and does not question it.",
                "correccion_es": "Volver a la definición formal, verificar unidades y signo, y comparar con un caso límite conocido.",
                "correccion_en": "Return to the formal definition, check units and sign, and compare with a known limiting case.",
                "ejemplo_es": f"Un alumno aplica {pretty_es} sin considerar el signo vectorial y obtiene un resultado positivo donde debería ser negativo; la magnitud es correcta pero la dirección no.",
                "ejemplo_en": f"A student applies {pretty_en} without considering the vector sign and gets a positive result where it should be negative; the magnitude is correct but the direction is not.",
            },
            {
                "name_es": f"Aplicar el modelo ideal de {pretty_es} fuera de su dominio de validez",
                "name_en": f"Applying the ideal model of {pretty_en} outside its validity domain",
                "cat_es": "modelo", "cat_en": "Model errors",
                "parece_es": "El modelo funciona en los ejercicios tipo, así que parece universal.",
                "parece_en": "The model works in textbook exercises, so it seems universal.",
                "incorrecto_es": "Todo modelo tiene hipótesis de validez. Fuera de su dominio, las predicciones divergen de la realidad.",
                "incorrecto_en": "Every model has validity hypotheses. Outside its domain, predictions diverge from reality.",
                "senal_es": "El resultado numérico viola un límite físico conocido (velocidad mayor que \\(c\\), energía negativa, etc.).",
                "senal_en": "The numerical result violates a known physical limit (speed exceeding \\(c\\), negative energy, etc.).",
                "correccion_es": "Verificar antes de calcular que las hipótesis del modelo se cumplen; si no, usar el modelo extendido.",
                "correccion_en": "Before computing, verify that the model hypotheses hold; if not, use the extended model.",
                "ejemplo_es": f"Aplicar la fórmula ideal de {pretty_es} a velocidades relativistas da un error >5 % cuando \\(v > 0.1c\\).",
                "ejemplo_en": f"Applying the ideal formula for {pretty_en} at relativistic speeds gives >5 % error when \\(v > 0.1c\\).",
            },
            {
                "name_es": f"Error de signo al proyectar vectores en el cálculo de {pretty_es}",
                "name_en": f"Sign error when projecting vectors in the calculation of {pretty_en}",
                "cat_es": "matemáticos", "cat_en": "Mathematical errors",
                "parece_es": "Elegir todos los valores positivos simplifica el cálculo.",
                "parece_en": "Choosing all positive values simplifies the calculation.",
                "incorrecto_es": "La dirección del vector importa. Un signo equivocado en la proyección invierte el resultado.",
                "incorrecto_en": "The vector's direction matters. A wrong sign in the projection inverts the result.",
                "senal_es": "El resultado tiene signo opuesto al esperado por el diagrama o la situación física.",
                "senal_en": "The result has the opposite sign to what is expected from the diagram or the physical situation.",
                "correccion_es": "Definir los ejes y los signos positivos antes de sustituir valores, y verificar coherencia al final.",
                "correccion_en": "Define axes and positive signs before substituting values, and check consistency at the end.",
                "ejemplo_es": f"Una partícula se mueve hacia la izquierda respecto al eje \\(x\\). Si se pone \\(v > 0\\) en vez de \\(v < 0\\), el momento calculado apunta al lado equivocado.",
                "ejemplo_en": f"A particle moves leftward along the \\(x\\)-axis. If \\(v > 0\\) is used instead of \\(v < 0\\), the computed momentum points the wrong way.",
            },
            {
                "name_es": f"Leer el resultado numérico sin interpretar su significado físico",
                "name_en": f"Reading the numerical result without interpreting its physical meaning",
                "cat_es": "interpretación", "cat_en": "Interpretation errors",
                "parece_es": "El número es la respuesta; no hace falta más análisis.",
                "parece_en": "The number is the answer; no further analysis is needed.",
                "incorrecto_es": "Un resultado numérico sin interpretación física puede ocultar errores de concepto, signo o modelo.",
                "incorrecto_en": "A numerical result without physical interpretation can hide conceptual, sign, or model errors.",
                "senal_es": "El alumno presenta solo cifras sin unidades, sin dirección o sin comparación con un caso límite.",
                "senal_en": "The student presents only digits without units, direction, or comparison with a limiting case.",
                "correccion_es": "Después de obtener el número, verificar unidades, sentido físico y coherencia con casos límite.",
                "correccion_en": "After obtaining the number, verify units, physical sense, and consistency with limiting cases.",
                "ejemplo_es": f"El alumno obtiene \\(p = -12\\) kg·m/s y escribe solo \"12\". El signo negativo indica dirección opuesta al eje elegido, información que se pierde.",
                "ejemplo_en": f"The student obtains \\(p = -12\\) kg·m/s and writes only \"12\". The negative sign indicates the opposite direction to the chosen axis, which is lost information.",
            },
        ],
    }


# Titles for leaves not in ERRORES_DATA
LEAF_TITLES = {
    "coeficiente-de-restitucion": ("coeficiente de restitución", "coefficient of restitution"),
    "colision-con-pared": ("colisión con pared", "collision with a wall"),
    "colisiones-2d": ("colisiones bidimensionales", "two-dimensional collisions"),
    "dispersion-angular-en-colisiones-2d": ("dispersión angular en colisiones 2D", "angular dispersion in 2D collisions"),
    "marco-del-centro-de-masas-en-colisiones": ("marco del centro de masas en colisiones", "center-of-mass frame in collisions"),
    "aplicaciones-del-principio-de-conservacion": ("aplicaciones del principio de conservación", "applications of the conservation principle"),
    "enunciado-y-condiciones-de-aplicacion": ("enunciado y condiciones de aplicación del principio", "statement and conditions for applying the principle"),
    "impulso-externo-y-ruptura-de-la-conservacion": ("impulso externo y ruptura de la conservación", "external impulse and breakdown of conservation"),
    "sistemas-aislados-y-fuerzas-externas": ("sistemas aislados y fuerzas externas", "isolated systems and external forces"),
    "impulso": ("impulso", "impulse"),
    "momento-lineal": ("momento lineal", "linear momentum"),
    "sistemas-aislados": ("sistemas aislados", "isolated systems"),
    "teorema-impulso-momento": ("teorema impulso-momento", "impulse-momentum theorem"),
    "conservacion-momento-angular": ("conservación del momento angular", "conservation of angular momentum"),
    "definicion-momento-angular": ("definición del momento angular", "definition of angular momentum"),
    "precesion": ("precesión", "precession"),
    "balance-de-momento-con-flujo-de-masa": ("balance de momento con flujo de masa", "momentum balance with mass flow"),
    "ecuacion-del-cohete": ("ecuación del cohete", "rocket equation"),
}


def _get_errors_data(leaf_name):
    if leaf_name in ERRORES_DATA:
        return ERRORES_DATA[leaf_name]
    titles = LEAF_TITLES.get(leaf_name, (leaf_name.replace("-", " "), leaf_name.replace("-", " ")))
    return _make_generic_errors(leaf_name, titles[0], titles[1])


def _build_errores_md(data, lang="es"):
    """Build errores.md content from structured data."""
    is_en = (lang == "en")

    categories = {
        "conceptuales": [], "modelo": [], "matemáticos": [], "interpretación": [],
    }
    cat_en_map = {
        "Conceptual errors": "conceptuales",
        "Model errors": "modelo",
        "Mathematical errors": "matemáticos",
        "Interpretation errors": "interpretación",
    }

    for err in data["errors"]:
        cat_key = cat_en_map.get(err["cat_en"], err["cat_es"]) if is_en else err["cat_es"]
        categories.setdefault(cat_key, []).append(err)

    cat_headers = {
        "es": {"conceptuales": "## Errores conceptuales", "modelo": "## Errores de modelo",
               "matemáticos": "## Errores matemáticos", "interpretación": "## Errores de interpretación"},
        "en": {"conceptuales": "## Conceptual errors", "modelo": "## Model errors",
               "matemáticos": "## Mathematical errors", "interpretación": "## Interpretation errors"},
    }

    sub_headers = {
        "es": ["**Por qué parece correcto**", "**Por qué es incorrecto**",
               "**Señal de detección**", "**Corrección conceptual**", "**Mini-ejemplo de contraste**"],
        "en": ["**Why it seems correct**", "**Why it is wrong**",
               "**Detection signal**", "**Conceptual correction**", "**Mini contrast example**"],
    }

    sub_keys = {
        "es": ["parece_es", "incorrecto_es", "senal_es", "correccion_es", "ejemplo_es"],
        "en": ["parece_en", "incorrecto_en", "senal_en", "correccion_en", "ejemplo_en"],
    }

    title = data["title_en"] if is_en else data["title_es"]
    h1 = f"# {'Common mistakes' if is_en else 'Errores comunes'}: {title}"
    lines = [h1, ""]
    n = 0
    for cat_key in ["conceptuales", "modelo", "matemáticos", "interpretación"]:
        errs = categories.get(cat_key, [])
        if not errs:
            continue
        lines.append(cat_headers[lang][cat_key])
        lines.append("")
        for err in errs:
            n += 1
            name = err["name_en"] if is_en else err["name_es"]
            lines.append(f"### Error {n}: {name}")
            lines.append("")
            for sh, sk in zip(sub_headers[lang], sub_keys[lang]):
                lines.append(sh)
                lines.append(err[sk])
                lines.append("")

    # Add autocontrol rule
    if is_en:
        lines.append("## Quick self-control rule")
        lines.append("")
        lines.append("Before accepting a result, apply this checklist:")
        lines.append("")
        lines.append("1. **Units**: does the result have the expected dimensions?")
        lines.append("2. **Sign**: is the sign consistent with the direction chosen in the diagram?")
        lines.append("3. **Order of magnitude**: is the value physically reasonable for the scenario?")
        lines.append("4. **Limiting case**: does the formula reduce to a known result when a parameter goes to zero or infinity?")
    else:
        lines.append("## Regla de autocontrol rápido")
        lines.append("")
        lines.append("Antes de dar por bueno un resultado, aplica esta lista de comprobación:")
        lines.append("")
        lines.append("1. **Unidades**: ¿el resultado tiene las dimensiones esperadas?")
        lines.append("2. **Signo**: ¿el signo es coherente con la dirección elegida en el diagrama?")
        lines.append("3. **Orden de magnitud**: ¿el valor es físicamente razonable para el escenario?")
        lines.append("4. **Caso límite**: ¿la fórmula se reduce a un resultado conocido cuando un parámetro tiende a cero o a infinito?")

    return "\n".join(lines) + "\n"


def fix_errores(leaf_dir: Path, leaf_name: str):
    data = _get_errors_data(leaf_name)

    for lang, fname in [("es", "errores.md"), ("en", "errores.en.md")]:
        path = leaf_dir / fname
        if not path.exists():
            print(f"  [{fname}] MISSING — skip")
            continue
        new_content = _build_errores_md(data, lang)
        path.write_text(new_content, encoding="utf-8")
        print(f"  [{fname}] REWRITTEN")


# ---------------------------------------------------------------------------
# Section reordering helper
# ---------------------------------------------------------------------------
def _reorder_sections(text: str, ordered_headings: list) -> str:
    """Reorder ## sections in text according to ordered_headings."""
    # Split into header line and body
    title_match = re.match(r"(#[^#].*?\n)", text)
    if not title_match:
        return text
    title = title_match.group(1)
    rest = text[title_match.end():]

    # Extract sections
    parts = re.split(r"(?=^## )", rest, flags=re.MULTILINE)
    preamble = ""
    sections = {}
    for part in parts:
        m = re.match(r"^(## .+?)$", part, re.MULTILINE)
        if m:
            heading = m.group(1).strip()
            sections[heading] = part
        else:
            preamble += part

    # Rebuild in order
    result = title + preamble
    for h in ordered_headings:
        if h in sections:
            result += sections[h]

    # Add any sections not in the ordered list
    for h, body in sections.items():
        if h not in ordered_headings:
            result += body

    return result


# ---------------------------------------------------------------------------
# MAIN
# ---------------------------------------------------------------------------
def main():
    leaves = sorted([p.parent for p in BASE.rglob("teoria.md")])
    print(f"Found {len(leaves)} leaves\n")

    for leaf_dir in leaves:
        leaf_name = leaf_dir.name
        rel = str(leaf_dir).replace("\\", "/")
        print(f"--- {rel} ---")

        # Fix modelos
        mod_es = leaf_dir / "modelos.md"
        mod_en = leaf_dir / "modelos.en.md"
        if mod_es.exists():
            fix_modelos_es(mod_es)
        if mod_en.exists():
            fix_modelos_en(mod_en)

        # Fix historia
        hist_es = leaf_dir / "historia.md"
        hist_en = leaf_dir / "historia.en.md"
        if hist_es.exists():
            fix_historia_es(hist_es)
        if hist_en.exists():
            fix_historia_en(hist_en)

        # Fix meta.yaml
        meta = leaf_dir / "meta.yaml"
        if meta.exists():
            fix_meta_yaml(meta, leaf_name)

        # Fix errores
        fix_errores(leaf_dir, leaf_name)

    print("\nDone!")


if __name__ == "__main__":
    main()
