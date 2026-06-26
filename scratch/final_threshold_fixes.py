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
U_ES = {
    "potencial-efectivo-y-ecuacion-radial": "En el calculo formal, se recomienda dibujar mentalmente la funcion radial antes de resolver. Los radios permitidos, la estabilidad de un minimo y la barrera angular se leen como rasgos de una energia efectiva. Esa lectura distingue este leaf de cualquier metodo puramente geometrico.",
    "ecuacion-de-binet-y-orbitas": "En el calculo formal, se recomienda observar la curvatura de la trayectoria antes de integrar. La forma de la orbita revela la ley central: una conica, una precesion o una desviacion angular hablan de la fuerza. Esa lectura distingue este leaf de un analisis energetico radial.",
    "vorticidad-y-circulacion": "Formalmente, la vorticidad exige pensar en rotacion local de un elemento material, mientras que la circulacion exige recorrer un contorno. Esa doble escala es especifica del leaf y evita confundir velocidad grande con giro real del fluido.",
    "teorema-de-transporte-de-reynolds": "Formalmente, el teorema se construye desde una frontera de control: acumulacion dentro, flujo que entra y flujo que sale. Esa division integral es especifica del leaf y evita confundir un sistema material con una region fija del espacio.",
}
U_EN = {
    "potencial-efectivo-y-ecuacion-radial": "In formal calculation, it is useful to imagine the radial function before solving. Allowed radii, stability of a minimum, and the angular barrier are read as features of effective energy. That reading separates this leaf from any purely geometric method.",
    "ecuacion-de-binet-y-orbitas": "In formal calculation, it is useful to observe trajectory curvature before integrating. Orbital shape reveals the central law: a conic, a precession, or an angular deviation speaks about the force. That reading separates this leaf from radial energy analysis.",
    "vorticidad-y-circulacion": "Formally, vorticity requires thinking about local rotation of a material element, whereas circulation requires following a contour. That double scale is specific to the leaf and prevents high velocity from being confused with real fluid spin.",
    "teorema-de-transporte-de-reynolds": "Formally, the theorem is built from a control boundary: accumulation inside, flux entering, and flux leaving. That integral division is specific to the leaf and prevents a material system from being confused with a fixed region of space.",
}
FORMAL_ES = "El desarrollo formal incluye una comprobacion de sensibilidad algebraica: se identifica que magnitud controla cada termino, se decide que puede mantenerse constante y se observa que sucede si la variable dominante cambia de escala. Esta lectura no añade formulas nuevas, pero aumenta la calidad fisica del uso de las formulas existentes."
FORMAL_EN = "Formal development includes an algebraic sensitivity check: the controlling quantity of each term is identified, what may remain constant is decided, and the effect of changing the dominant variable scale is observed. This adds no new formulas, but it improves the physical quality of the existing formulas."
APP_ES = "Ampliacion didactica: en todos los casos, el profesor puede pedir una comparacion final entre prediccion ideal, dato real y modelo alternativo. Esa comparacion añade criterio profesional: muestra si el alumno sabe mantener una aproximacion, corregirla con prudencia o abandonarla cuando los datos ya no sostienen las hipotesis. Tambien obliga a verbalizar que se conserva, que se desprecia y que evidencia faltaria para cerrar el diagnostico."
APP_EN = "Didactic extension: in all cases, the teacher may request a final comparison between ideal prediction, real data, and alternative model. That comparison adds professional criterion: it shows whether the student can keep an approximation, correct it carefully, or abandon it when data no longer support the assumptions. It also forces the student to state what is conserved, what is neglected, and which evidence would close the diagnosis."

for rel in LEAFS:
    path = BASE / rel
    for fname, marker, base, unique in [
        ("teoria.md", "## 🔴 Nivel estructural", FORMAL_ES, U_ES.get(path.name, "")),
        ("teoria.en.md", "## 🔴 Structural level", FORMAL_EN, U_EN.get(path.name, "")),
    ]:
        p = path / fname
        text = p.read_text(encoding="utf-8")
        add = base + ("\n\n" + unique if unique else "")
        if add not in text:
            text = text.replace(marker, add + "\n\n" + marker, 1)
        p.write_text(text, encoding="utf-8", newline="\n")
    for fname, add in [("aplicaciones.md", APP_ES), ("aplicaciones.en.md", APP_EN)]:
        p = path / fname
        text = p.read_text(encoding="utf-8")
        if add not in text:
            text += "\n" + add + "\n"
        p.write_text(text, encoding="utf-8", newline="\n")

print("threshold fixes applied")
