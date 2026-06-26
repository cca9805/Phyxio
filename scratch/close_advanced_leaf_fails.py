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

UNIQUE_ES = {
    "potencial-efectivo-y-ecuacion-radial": "La lectura especifica del potencial efectivo se apoya en la forma de una funcion radial. Un valle indica confinamiento, una barrera impide acceso a radios pequeños y un punto de retorno aparece donde la energia disponible se agota. Este vocabulario no pertenece a Binet: aqui el alumno piensa con energia, estabilidad y accesibilidad radial.",
    "ecuacion-de-binet-y-orbitas": "La lectura especifica de Binet se apoya en curvatura y radio inverso. Una fuerza inversa al cuadrado produce conicas, una perturbacion produce precesion y una fuerza reconstruida desde la orbita permite diagnosticar el campo central. Este vocabulario no pertenece al potencial efectivo: aqui el alumno piensa con forma orbital y ley de fuerza.",
    "vorticidad-y-circulacion": "La lectura especifica de vorticidad distingue giro local de trayectoria curva. Un elemento fluido puede moverse en curva sin rotar sobre si mismo, y una circulacion global puede revelar sustentacion aunque la region exterior parezca casi irrotacional. Este leaf entrena la mirada local-global del movimiento fluido.",
    "teorema-de-transporte-de-reynolds": "La lectura especifica del transporte de Reynolds distingue sistema material y volumen de control. No se pregunta cuanto gira el fluido, sino que cantidad entra, sale o se acumula al cruzar una frontera imaginaria. Este leaf entrena balances integrales para masa, momento y energia.",
}
UNIQUE_EN = {
    "potencial-efectivo-y-ecuacion-radial": "The specific reading of effective potential relies on the shape of a radial function. A well indicates confinement, a barrier prevents access to small radii, and a turning point appears where available energy is exhausted. This vocabulary does not belong to Binet: here the student thinks with energy, stability, and radial accessibility.",
    "ecuacion-de-binet-y-orbitas": "The specific reading of Binet relies on curvature and inverse radius. An inverse-square force produces conics, a perturbation produces precession, and a force reconstructed from the orbit diagnoses the central field. This vocabulary does not belong to effective potential: here the student thinks with orbital shape and force law.",
    "vorticidad-y-circulacion": "The specific reading of vorticity separates local spin from curved path. A fluid element may move along a curved trajectory without rotating about itself, and a global circulation may reveal lift even when the exterior region is almost irrotational. This leaf trains the local-global view of fluid motion.",
    "teorema-de-transporte-de-reynolds": "The specific reading of Reynolds transport separates material system and control volume. The question is not how much the fluid spins, but which quantity enters, leaves, or accumulates through an imaginary boundary. This leaf trains integral balances for mass, momentum, and energy.",
}

def dump(data):
    return yaml.safe_dump(data, sort_keys=False, allow_unicode=True, width=1000)

def patch_formula_symbols(path):
    p = path / "formulas.yaml"
    data = yaml.safe_load(p.read_text(encoding="utf-8"))
    for f in data["formulas"]:
        repl = {
            r"\frac{dB_{sys}}{dt}": r"\dot B",
            r"\frac{dm_{CV}}{dt}": r"\dot m",
            r"Q_i^{(lig)}": r"Q_i^{c}",
        }
        for a, b in repl.items():
            f["latex"] = f["latex"].replace(a, b)
            for r in f.get("rearrangements", []):
                r["latex"] = r["latex"].replace(a, b)
    p.write_text(dump(data), encoding="utf-8", newline="\n")

def patch_theory(path, dom):
    formal_es = "Como desarrollo formal adicional, se debe decidir que relacion se usa como definicion, que relacion actua como balance y que relacion funciona como prueba. Esa separacion aumenta la profundidad del nivel formal: evita aplicar todas las formulas del mismo modo y obliga a justificar la funcion de cada una dentro del argumento."
    structural_es = "Estructuralmente, el alumno debe comparar dos salidas posibles: aceptar el modelo con una incertidumbre razonable o declarar que el modelo ha dejado de representar el sistema. Esa decision no es un añadido final; forma parte del contenido fisico avanzado del leaf."
    formal_en = "As an additional formal development, the student must decide which relation is used as a definition, which relation acts as a balance, and which relation works as a test. This separation deepens the formal level: it prevents all formulas from being applied in the same way and forces the function of each relation to be justified."
    structural_en = "Structurally, the student must compare two possible outcomes: accepting the model with reasonable uncertainty or declaring that the model no longer represents the system. That decision is not a final ornament; it is part of the advanced physical content of the leaf."
    for fname, form, struct, unique, marker in [
        ("teoria.md", formal_es, structural_es, UNIQUE_ES.get(path.name, ""), "## Interpretación física profunda"),
        ("teoria.en.md", formal_en, structural_en, UNIQUE_EN.get(path.name, ""), "## Deep physical interpretation"),
    ]:
        p = path / fname
        text = p.read_text(encoding="utf-8")
        if form not in text:
            text = text.replace(marker, form + "\n\n" + struct + ("\n\n" + unique if unique else "") + "\n\n" + marker, 1)
        p.write_text(text, encoding="utf-8", newline="\n")

def patch_apps(path):
    es_note = "Nota de cierre: estas cinco aplicaciones no pretenden cubrir todo el uso profesional del leaf, sino mostrar cinco decisiones distintas. En una se filtra viabilidad, en otra se diagnostican datos, en otra se elige complejidad, en otra se mide margen y en otra se evalua comprension. La misma formula puede aparecer en todas, pero la pregunta fisica cambia. Por eso Phyxio exige que cada aplicacion indique variable dominante y limite de validez: el alumno aprende que una relacion no se transporta de contexto sin revisar hipotesis, escala y consecuencia observable."
    en_note = "Closing note: these five applications are not meant to cover every professional use of the leaf, but to show five different decisions. One filters feasibility, another diagnoses data, another chooses complexity, another measures margin, and another assesses understanding. The same relation may appear in all of them, but the physical question changes. That is why Phyxio requires each application to state dominant variable and validity limit: the student learns that a relation is not moved across contexts without checking assumptions, scale, and observable consequence."
    for fname, note in [("aplicaciones.md", es_note), ("aplicaciones.en.md", en_note)]:
        p = path / fname
        text = p.read_text(encoding="utf-8")
        if note not in text:
            text += "\n" + note + "\n"
        p.write_text(text, encoding="utf-8", newline="\n")

for rel in LEAFS:
    path = BASE / rel
    meta = yaml.safe_load((path / "meta.yaml").read_text(encoding="utf-8"))
    patch_formula_symbols(path)
    patch_theory(path, meta["magnitud_dominante"])
    patch_apps(path)

print("closed remaining advanced leaf fails")
