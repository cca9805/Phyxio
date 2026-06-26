const e=`version: "2.0"
formulas:

  - id: campo_elemento_diferencial
    title:
      es: Campo de un elemento diferencial de carga
      en: Field of a differential charge element
    equation: "dE = k * dq / r_dist^2"
    latex: "d\\\\vec{E} = \\\\frac{k\\\\, dq}{r^2}\\\\,\\\\hat{r}"
    rearrangements:
      - target: dE
        equation: "dE = k * dq / r_dist^2"
        latex: "d\\\\vec{E} = \\\\frac{k\\\\, dq}{r^2}\\\\,\\\\hat{r}"
      - target: r_dist
        equation: "r_dist = sqrt(k * dq / dE)"
        latex: "r = \\\\sqrt{\\\\frac{k\\\\, dq}{|d\\\\vec{E}|}}"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: >
        Cada elemento infinitesimal de carga dq crea un campo dE en el punto de observación. El campo es radial, proporcional a dq e inversamente proporcional al cuadrado de la distancia r. La integral de dE sobre toda la distribución da el campo resultante E.
      en: >
        Each infinitesimal charge element dq creates a field dE at the observation point. The field is radial, proportional to dq, and inversely proportional to the square of the distance r. The integral of dE over the entire distribution gives the resultant field E.
    constraints:
      - Medio lineal homogéneo isótropo (permitividad relativa constante)
      - El punto campo no coincide con ningún elemento fuente (r > 0)
    validity:
      es: "Válida para cualquier distribución continua de carga en medio lineal; equivalente al principio de superposición aplicado en forma integral."
      en: "Valid for any continuous charge distribution in a linear medium; equivalent to the superposition principle applied in integral form."
    dimension_check: "[V/m] = [N·m²/C²][C]/[m²] ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - cálculo del campo de hilos, anillos, discos y esferas
      - derivación de casos especiales por integración
    interpretation_tags:
      - superposición vectorial
      - integral de campo
    result_semantics:
      target: dE
      kind: differential_quantity
      sign_meaning:
        es: "La dirección de dE apunta del elemento dq al punto campo si dq > 0; en sentido contrario si dq < 0."
        en: "The direction of dE points from element dq to the field point if dq > 0; in the opposite direction if dq < 0."
      absolute_value_meaning:
        es: "El módulo |dE| crece al reducir r o al aumentar dq. Dominan los elementos más cercanos al punto campo."
        en: "The magnitude |dE| grows as r decreases or dq increases. Elements closest to the field point dominate."
    domain_checks:
      - condition: "r_dist > 0"
        message:
          es: "r = 0 produce singularidad: el modelo puntual no es válido cuando el punto campo coincide con la fuente."
          en: "r = 0 produces a singularity: the point model is not valid when the field point coincides with the source."
    coherence_checks:
      - condition: "|dE| decreases as r_dist^2 increases"
        message:
          es: Si dE aumenta al alejarse de la fuente, hay un error en el denominador de la fórmula.
          en: If dE increases when moving away from the source, there is an error in the denominator of the formula.
    graph_implications:
      - En el gráfico E vs r, la contribución de cada dE cae como 1/r² con la distancia a ese elemento.
    pedagogical_triggers:
      - trigger: "r_dist → 0"
        message:
          es: "Cuando r tiende a cero, dE diverge: físicamente significa que una carga puntual ideal no existe; toda carga real tiene extensión finita."
          en: "When r tends to zero, dE diverges: physically this means that an ideal point charge does not exist; all real charges have finite extent."

  - id: campo_hilo_infinito
    title:
      es: Campo de un hilo infinito uniformemente cargado
      en: Field of an infinitely long uniformly charged wire
    equation: "E = lambda / (2 * pi * epsilon_0 * r_dist)"
    latex: "E = \\\\frac{\\\\lambda}{2\\\\pi\\\\varepsilon_0\\\\, r}"
    rearrangements:
      - target: lambda
        equation: "lambda = E * 2 * pi * epsilon_0 * r_dist"
        latex: "\\\\lambda = 2\\\\pi\\\\varepsilon_0\\\\, r\\\\, E"
      - target: r_dist
        equation: "r_dist = lambda / (2 * pi * epsilon_0 * E)"
        latex: "r = \\\\frac{\\\\lambda}{2\\\\pi\\\\varepsilon_0\\\\, E}"
    category: derived
    relation_type: closed_form_integral
    physical_meaning:
      es: >
        Para un hilo infinito con densidad lineal lambda, la simetría cilíndrica cancela todas las componentes axiales de dE. El campo resultante es radial, perpendicular al hilo, y decae como 1/r (más lentamente que el 1/r² de una carga puntual).
      en: >
        For an infinite wire with linear density lambda, cylindrical symmetry cancels all axial components of dE. The resultant field is radial, perpendicular to the wire, and decays as 1/r (more slowly than the 1/r² of a point charge).
    constraints:
      - Hilo de longitud infinita o punto de observación lejos de los extremos
      - Distribución uniforme (lambda constante a lo largo del hilo)
    validity:
      es: Válida para distancias r mucho menores que la longitud del hilo (régimen de hilo infinito). Para hilos finitos es necesaria la integración directa.
      en: Valid for distances r much smaller than the wire length (infinite wire regime). For finite wires, direct integration is required.
    dimension_check: "[V/m] = [C/m]/([C²/(N·m²)][m]) ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - cálculo del campo en geometrías cilíndricas
      - condensadores cilíndricos y cables coaxiales
    interpretation_tags:
      - decaimiento radial 1/r
      - simetría cilíndrica
    result_semantics:
      target: E
      kind: output_quantity
      sign_meaning:
        es: "E > 0 si lambda > 0 (campo apunta radialmente hacia afuera); E cambia de sentido si lambda < 0."
        en: "E > 0 if lambda > 0 (field points radially outward); E reverses if lambda < 0."
      absolute_value_meaning:
        es: "El módulo de E decrece con la distancia radial r; duplicar r reduce E a la mitad (ley 1/r)."
        en: "The magnitude of E decreases with radial distance r; doubling r halves E (1/r law)."
    domain_checks:
      - condition: "r_dist > 0"
        message:
          es: "r = 0 (sobre el eje del hilo) es una singularidad física; el modelo no aplica en ese punto."
          en: "r = 0 (on the wire axis) is a physical singularity; the model does not apply at that point."
    coherence_checks:
      - condition: "E > 0 when lambda > 0"
        message:
          es: Si lambda es positiva y E resulta negativo, hay un error de signo en la sustitución.
          en: If lambda is positive and E comes out negative, there is a sign error in the substitution.
    graph_implications:
      - En el gráfico E vs r, la curva es una hipérbola decreciente (1/r), no una parábola (1/r²).
    pedagogical_triggers:
      - trigger: "r_dist >> longitud_hilo"
        message:
          es: "Cuando r es comparable o mayor que la longitud del hilo, el modelo de hilo infinito deja de ser válido y el campo se aproxima más al de una carga puntual."
          en: "When r is comparable to or greater than the wire length, the infinite wire model breaks down and the field approaches that of a point charge."

  - id: campo_plano_infinito
    title:
      es: Campo de un plano infinito uniformemente cargado
      en: Field of an infinite uniformly charged plane
    equation: "E = sigma / (2 * epsilon_0)"
    latex: "E = \\\\frac{\\\\sigma}{2\\\\varepsilon_0}"
    rearrangements:
      - target: sigma
        equation: "sigma = E * 2 * epsilon_0"
        latex: "\\\\sigma = 2\\\\varepsilon_0\\\\, E"
    category: derived
    relation_type: closed_form_integral
    physical_meaning:
      es: >
        Para un plano infinito con densidad superficial sigma, la simetría plana cancela todas las componentes paralelas al plano. El campo resultante es perpendicular al plano, uniforme (no depende de la distancia) y tiene el mismo módulo a ambos lados.
      en: >
        For an infinite plane with surface density sigma, planar symmetry cancels all components parallel to the plane. The resultant field is perpendicular to the plane, uniform (independent of distance), and has the same magnitude on both sides.
    constraints:
      - Plano de extensión infinita o punto de observación lejos de los bordes
      - Distribución uniforme (sigma constante en todo el plano)
    validity:
      es: Válida para distancias al plano mucho menores que la extensión del plano. Para planos finitos, la integración directa da un campo que varía con la distancia.
      en: Valid for distances to the plane much smaller than the plane extent. For finite planes, direct integration gives a field that varies with distance.
    dimension_check: "[V/m] = [C/m²]/[C²/(N·m²)] ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - condensadores de placas paralelas
      - análisis de superficies conductoras grandes
    interpretation_tags:
      - campo uniforme
      - simetría planar
      - independencia de la distancia
    result_semantics:
      target: E
      kind: output_quantity
      sign_meaning:
        es: "E apunta perpendicularmente al plano alejándose de él si sigma > 0; hacia él si sigma < 0."
        en: "E points perpendicularly away from the plane if sigma > 0; towards it if sigma < 0."
      absolute_value_meaning:
        es: "El módulo de E es constante a cualquier distancia del plano (rasgo único de la simetría plana). Un valor mayor implica mayor densidad superficial de carga."
        en: "The magnitude of E is constant at any distance from the plane (unique feature of planar symmetry). A larger value implies higher surface charge density."
    domain_checks:
      - condition: "sigma != 0"
        message:
          es: "sigma = 0 produce E = 0: el plano es neutro y no genera campo."
          en: "sigma = 0 yields E = 0: the plane is neutral and generates no field."
    coherence_checks:
      - condition: "E independiente de r_dist"
        message:
          es: Si E varía con la distancia al plano en el modelo de plano infinito, hay un error en la fórmula o en la geometría elegida.
          en: If E varies with distance to the plane in the infinite plane model, there is an error in the formula or the chosen geometry.
    graph_implications:
      - En el gráfico E vs r, la curva es una recta horizontal (campo uniforme), en contraste con la hipérbola 1/r del hilo y la 1/r² de la carga puntual.
    pedagogical_triggers:
      - trigger: "r_dist >> dimensiones_plano"
        message:
          es: "Cuando la distancia al plano es comparable a sus dimensiones, el campo empieza a parecerse al de una carga puntual y el modelo de plano infinito deja de ser válido."
          en: "When the distance to the plane is comparable to its dimensions, the field starts resembling that of a point charge and the infinite plane model breaks down."

  - id: campo_distribucion_volumetrica
    title:
      es: Campo diferencial de una distribución volumétrica de carga
      en: Differential field of a volume charge distribution
    equation: "dE = k * rho_vol * dV / r_dist^2"
    latex: "d\\\\vec{E} = \\\\frac{k\\\\,\\\\rho\\\\,dV}{r^2}\\\\,\\\\hat{r}"
    rearrangements:
      - target: dE
        equation: "dE = k * rho_vol * dV / r_dist^2"
        latex: "d\\\\vec{E} = \\\\frac{k\\\\,\\\\rho\\\\,dV}{r^2}\\\\,\\\\hat{r}"
      - target: rho_vol
        equation: "rho_vol = dE * r_dist^2 / (k * dV)"
        latex: "\\\\rho = \\\\frac{|d\\\\vec{E}|\\\\,r^2}{k\\\\,dV}"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: >
        Cada elemento de volumen dV con densidad volumétrica de carga rho_vol contribuye al campo dE en el punto de observación exactamente como una carga puntual dq = rho_vol · dV. La integral sobre el volumen completo da el campo resultante E.
      en: >
        Each volume element dV with volume charge density rho_vol contributes to the field dE at the observation point exactly as a point charge dq = rho_vol · dV. The integral over the entire volume gives the resultant field E.
    constraints:
      - Densidad volumétrica rho_vol puede ser función de posición
      - El punto campo no coincide con ningún elemento fuente (r > 0)
    validity:
      es: "Válida para cualquier distribución volumétrica continua en medio lineal; es la forma más general del principio de superposición."
      en: "Valid for any continuous volume distribution in a linear medium; it is the most general form of the superposition principle."
    dimension_check: "[V/m] = [N·m²/C²][C/m³][m³]/[m²] ✓"
    calculable: false
    motivo_no_calculable: "La integral sobre el volumen requiere especificar la geometría y la función rho_vol(r); no tiene forma cerrada general."
    used_in:
      - cálculo de campos en distribuciones tridimensionales arbitrarias
      - formulación integral de la ley de Gauss
    interpretation_tags:
      - densidad volumétrica
      - integral de volumen
    result_semantics:
      target: dE
      kind: differential_quantity
      sign_meaning:
        es: "La dirección de dE apunta desde dV al punto campo si rho_vol > 0; en sentido contrario si rho_vol < 0."
        en: "The direction of dE points from dV toward the field point if rho_vol > 0; in the opposite direction if rho_vol < 0."
      absolute_value_meaning:
        es: "El módulo |dE| es proporcional a rho_vol e inversamente proporcional a r_dist². Dominan los elementos con mayor rho_vol más próximos al punto campo."
        en: "The magnitude |dE| is proportional to rho_vol and inversely proportional to r_dist². Elements with higher rho_vol closer to the field point dominate."
    domain_checks:
      - condition: "r_dist > 0"
        message:
          es: "r = 0 produce singularidad; el modelo continuo no es válido cuando el punto campo coincide con el elemento fuente."
          en: "r = 0 produces a singularity; the continuum model is not valid when the field point coincides with the source element."
    coherence_checks:
      - condition: "|dE| decreases as r_dist^2 increases"
        message:
          es: Si dE aumenta al alejarse del elemento fuente, hay un error en el denominador.
          en: If dE increases when moving away from the source element, there is an error in the denominator.
    graph_implications:
      - La contribución de cada elemento volumétrico cae como 1/r² con la distancia a ese elemento.
    pedagogical_triggers:
      - trigger: "rho_vol not uniform"
        message:
          es: "Si rho_vol no es uniforme, la integral no tiene forma cerrada general y debe resolverse numéricamente (elementos finitos, diferencias finitas)."
          en: "If rho_vol is not uniform, the integral has no general closed form and must be solved numerically (finite elements, finite differences)."
`;export{e as default};
