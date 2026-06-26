const e=`formulas:

  - id: variacion_entropia_isotermica
    title:
      es: Variación de entropía en proceso isotérmico
      en: Entropy change in isothermal process

    equation: "DeltaS = Q_rev / T"
    latex: "\\\\Delta S = \\\\frac{Q_{rev}}{T}"

    rearrangements:
      - target: DeltaS
        equation: "DeltaS = Q_rev / T"
        latex: "\\\\Delta S = \\\\frac{Q_{rev}}{T}"
      - target: Q_rev
        equation: "Q_rev = DeltaS * T"
        latex: "Q_{rev} = \\\\Delta S \\\\cdot T"
      - target: T
        equation: "T = Q_rev / DeltaS"
        latex: "T = \\\\frac{Q_{rev}}{\\\\Delta S}"

    category: fundamental
    relation_type: definition

    physical_meaning:
      es: "La variación de entropía en un proceso isotérmico reversible es el cociente entre el calor reversible intercambiado y la temperatura absoluta constante del proceso. Es la fórmula de cálculo directo más utilizada en termodinámica elemental: para cambios de fase (fusión, vaporización) a presión constante, la temperatura permanece fija y se aplica directamente."
      en: "The entropy change in a reversible isothermal process is the ratio of the reversible heat exchanged to the constant absolute temperature of the process. It is the most widely used direct calculation formula in elementary thermodynamics: for phase changes (melting, vaporisation) at constant pressure, the temperature remains fixed and the formula applies directly."

    constraints:
      - "El proceso debe ser isotérmico (T constante durante todo el intercambio de calor)."
      - "T debe expresarse en kelvin absolutos (T > 0 siempre)."
      - "Q_rev es el calor del proceso reversible equivalente, no el calor medido en un proceso irreversible."
      - "Para procesos no isotérmicos no puede aplicarse directamente; se requiere la forma integral."

    validity:
      es: "Válida para procesos isotérmicos reversibles: cambios de fase a presión constante, expansión isotérmica de gas ideal, mezcla de gases a temperatura constante. Para procesos irreversibles entre los mismos estados, DeltaS tiene el mismo valor (función de estado) pero Q real ≠ Q_rev."
      en: "Valid for reversible isothermal processes: phase changes at constant pressure, isothermal expansion of ideal gas, mixing of gases at constant temperature. For irreversible processes between the same states, DeltaS has the same value (state function) but Q_real ≠ Q_rev."

    dimension_check: "[M L^2 T^-2 Θ^-1] = [M L^2 T^-2] / [Θ] → J/K"

    calculable: true
    motivo_no_calculable: ""

    used_in:
      - cálculo de DeltaS en fusión y vaporización
      - expansión isotérmica de gas ideal
      - ciclo de Carnot (isotermas)
      - balance entrópico en intercambiadores

    interpretation_tags:
      - isothermal_entropy
      - phase_change
      - direct_calculation
      - clausius_ratio

    result_semantics:
      target: DeltaS
      kind: scalar_signed
      sign_meaning:
        es: "DeltaS > 0 indica absorción de calor (proceso endotérmico): el sistema gana dispersión energética. DeltaS < 0 indica cesión de calor (proceso exotérmico): el sistema pierde dispersión. DeltaS = 0 solo si Q_rev = 0 (proceso adiabático reversible, isentrópico)."
        en: "DeltaS > 0 indicates heat absorption (endothermic process): the system gains energy dispersal. DeltaS < 0 indicates heat release (exothermic process): the system loses dispersal. DeltaS = 0 only if Q_rev = 0 (reversible adiabatic, isentropic process)."
      absolute_value_meaning:
        es: "El valor absoluto cuantifica la magnitud del cambio de dispersión energética. Referencia: fusión de 1 mol de hielo a 273 K produce |DeltaS| ≈ 22 J/(mol·K); vaporización de 1 mol de agua a 373 K produce |DeltaS| ≈ 109 J/(mol·K)."
        en: "The absolute value quantifies the magnitude of the energy dispersal change. Reference: melting 1 mol of ice at 273 K produces |DeltaS| ≈ 22 J/(mol·K); vaporising 1 mol of water at 373 K produces |DeltaS| ≈ 109 J/(mol·K)."

    domain_checks:
      - "T debe ser estrictamente positiva (T > 0 K); un valor nulo o negativo es físicamente imposible."
      - "Q_rev puede ser positivo (absorción) o negativo (cesión); ambos son físicamente válidos."
      - "DeltaS puede ser positivo, negativo o cero."

    coherence_checks:
      - "DeltaS y Q_rev deben tener el mismo signo (ambos positivos para absorción, ambos negativos para cesión)."
      - "Para fusión de hielo: DeltaS ≈ 6010 J / 273 K ≈ 22 J/(mol·K); desviaciones grandes indican error de unidades."
      - "Si T es muy alta (>5000 K) para aplicaciones habituales, verificar que se usan kelvin y no otras unidades."

    graph_implications:
      - "En el diagrama T-S, el proceso isotérmico es una línea horizontal a temperatura T constante. La longitud horizontal es DeltaS y el área bajo la línea (T × DeltaS) es Q_rev."
      - "Comparando dos procesos isotérmicos al mismo Q_rev: el que ocurre a menor T tiene mayor DeltaS (la línea es más corta verticalmente pero más larga horizontalmente)."

    pedagogical_triggers:
      - "Error de unidades de temperatura: usar Celsius en lugar de kelvin altera drásticamente el resultado (a 27 °C vs 300 K el error es de un factor 11)."
      - "Confundir Q real con Q_rev: en un proceso irreversible entre los mismos estados, Q real < Q_rev, pero DeltaS se calcula siempre con Q_rev."
      - "Olvidar que DeltaS es función de estado: no depende del camino sino solo de los estados inicial y final."

  - id: variacion_entropia_calentamiento
    title:
      es: Variación de entropía por calentamiento a presión constante
      en: Entropy change due to heating at constant pressure

    equation: "DeltaS = m * c_p * ln(T_f / T_i)"
    latex: "\\\\Delta S = m \\\\, c_p \\\\ln\\\\!\\\\left(\\\\frac{T_f}{T_i}\\\\right)"

    rearrangements:
      - target: DeltaS
        equation: "DeltaS = m * c_p * ln(T_f / T_i)"
        latex: "\\\\Delta S = m \\\\, c_p \\\\ln\\\\!\\\\left(\\\\frac{T_f}{T_i}\\\\right)"
      - target: T_f
        equation: "T_f = T_i * exp(DeltaS / (m * c_p))"
        latex: "T_f = T_i \\\\, e^{\\\\Delta S / (m \\\\, c_p)}"
      - target: T_i
        equation: "T_i = T_f * exp(-DeltaS / (m * c_p))"
        latex: "T_i = T_f \\\\, e^{-\\\\Delta S / (m \\\\, c_p)}"

    category: derived
    relation_type: integral_relation

    physical_meaning:
      es: "Cuando un cuerpo se calienta (o enfría) de forma reversible a presión constante, con capacidad calorífica específica c_p aproximadamente constante, la variación de entropía depende logarítmicamente del cociente de temperaturas. Esta dependencia logarítmica refleja que cada incremento de temperatura aporta menos entropía cuanto más caliente está el sistema: a mayor T, cada julio de calor produce menor cambio de dispersión."
      en: "When a body is heated (or cooled) reversibly at constant pressure, with approximately constant specific heat capacity c_p, the entropy change depends logarithmically on the temperature ratio. This logarithmic dependence reflects that each temperature increment contributes less entropy the hotter the system is: at higher T, each joule of heat produces a smaller dispersal change."

    constraints:
      - "c_p debe ser constante (o aproximadamente constante) en el rango [T_i, T_f]."
      - "El proceso debe ser a presión constante (isobárico)."
      - "Ambas temperaturas deben expresarse en kelvin (T_i > 0, T_f > 0)."
      - "Para c_p variable con T, la integral debe evaluarse numéricamente o con tablas."

    validity:
      es: "Válida para calentamiento o enfriamiento isobárico reversible con c_p constante. Aplicable a sólidos y líquidos (donde c_p ≈ c_v) y a gases ideales a presión constante. No válida si hay cambio de fase en el intervalo [T_i, T_f]: en ese caso el cambio de fase requiere su propia contribución entrópica adicional."
      en: "Valid for reversible isobaric heating or cooling with constant c_p. Applicable to solids and liquids (where c_p ≈ c_v) and to ideal gases at constant pressure. Not valid if a phase change occurs in the interval [T_i, T_f]: in that case the phase change requires its own additional entropic contribution."

    dimension_check: "[M] · [L^2 T^-2 Θ^-1] · [adimensional] = [M L^2 T^-2 Θ^-1] → J/K"

    calculable: true
    motivo_no_calculable: ""

    used_in:
      - calentamiento de sólidos y líquidos
      - calentamiento de gases ideales a presión constante
      - cálculo del balance entrópico en calorimetría
      - diseño de intercambiadores de calor

    interpretation_tags:
      - heating_process
      - logarithmic_dependence
      - constant_pressure
      - temperature_ratio

    result_semantics:
      target: DeltaS
      kind: scalar_signed
      sign_meaning:
        es: "DeltaS > 0 si T_f > T_i (calentamiento): el sistema absorbe calor y su entropía aumenta. DeltaS < 0 si T_f < T_i (enfriamiento): el sistema cede calor y su entropía disminuye. DeltaS = 0 solo si T_f = T_i (proceso sin cambio de temperatura, trivial)."
        en: "DeltaS > 0 if T_f > T_i (heating): the system absorbs heat and its entropy increases. DeltaS < 0 if T_f < T_i (cooling): the system releases heat and its entropy decreases. DeltaS = 0 only if T_f = T_i (no temperature change, trivial)."
      absolute_value_meaning:
        es: "El valor absoluto mide la magnitud total del cambio entrópico en el calentamiento. Para 1 kg de agua calentada de 20 °C a 80 °C: |DeltaS| ≈ 4186 · ln(353/293) ≈ 780 J/K."
        en: "The absolute value measures the total magnitude of the entropic change during heating. For 1 kg of water heated from 20 °C to 80 °C: |DeltaS| ≈ 4186 · ln(353/293) ≈ 780 J/K."

    domain_checks:
      - "T_i y T_f deben ser estrictamente positivas en kelvin."
      - "El cociente T_f / T_i debe ser positivo (garantizado si ambas T son positivas)."
      - "m debe ser positiva (masa del cuerpo)."
      - "c_p debe ser positiva (capacidad calorífica específica)."

    coherence_checks:
      - "Si T_f > T_i, DeltaS debe ser positivo; si T_f < T_i, DeltaS debe ser negativo."
      - "Para agua (c_p ≈ 4186 J/(kg·K)), calentar 1 kg de 293 K a 373 K: DeltaS ≈ 4186·ln(373/293) ≈ 1007 J/K; desviaciones grandes indican error."
      - "Si DeltaS > m·c_p (calentamiento al doble), verificar que ln se evaluó correctamente (ln(2) ≈ 0.693)."

    graph_implications:
      - "En el diagrama T-S, el calentamiento isobárico es una curva ascendente (T crece con S). La pendiente dT/dS = T/(m·c_p) aumenta con T: la curva se vuelve más empinada a alta temperatura."
      - "El área bajo la curva T-S entre S_i y S_f es igual al calor total Q absorbido en el proceso."

    pedagogical_triggers:
      - "Usar Celsius en lugar de kelvin dentro del logaritmo produce un resultado numéricamente incorrecto e incluso puede dar logaritmo de número negativo."
      - "Confundir c_p con c_v para gases: la diferencia R/M no es despreciable y altera el resultado significativamente."
      - "Aplicar la fórmula directamente cuando hay cambio de fase intermedio: si el agua cruza 100 °C, hay que calcular por tramos (calentamiento + vaporización + calentamiento del vapor)."

  - id: variacion_entropia_gas_ideal
    title:
      es: Variación de entropía de gas ideal (forma general)
      en: Entropy change of ideal gas (general form)

    equation: "DeltaS = n * c_v * ln(T_f / T_i) + n * R * ln(V_f / V_i)"
    latex: "\\\\Delta S = n \\\\, c_v \\\\ln\\\\!\\\\left(\\\\frac{T_f}{T_i}\\\\right) + n R \\\\ln\\\\!\\\\left(\\\\frac{V_f}{V_i}\\\\right)"

    rearrangements:
      - target: DeltaS
        equation: "DeltaS = n * c_v * ln(T_f / T_i) + n * R * ln(V_f / V_i)"
        latex: "\\\\Delta S = n \\\\, c_v \\\\ln\\\\!\\\\left(\\\\frac{T_f}{T_i}\\\\right) + n R \\\\ln\\\\!\\\\left(\\\\frac{V_f}{V_i}\\\\right)"
      - target: V_f
        equation: "V_f = V_i * exp((DeltaS - n * c_v * ln(T_f / T_i)) / (n * R))"
        latex: "V_f = V_i \\\\, e^{\\\\frac{\\\\Delta S - n c_v \\\\ln(T_f/T_i)}{n R}}"
      - target: V_i
        equation: "V_i = V_f * exp(-(DeltaS - n * c_v * ln(T_f / T_i)) / (n * R))"
        latex: "V_i = V_f \\\\, e^{-\\\\frac{\\\\Delta S - n c_v \\\\ln(T_f/T_i)}{n R}}"

    category: derived
    relation_type: integral_relation

    physical_meaning:
      es: "La variación de entropía de un gas ideal entre dos estados (T_i, V_i) y (T_f, V_f) tiene dos contribuciones independientes: una térmica (debida al cambio de temperatura) y una mecánica (debida al cambio de volumen). La contribución térmica refleja la redistribución de energía interna; la contribución volumétrica refleja la redistribución espacial de las moléculas. Ambas contribuciones son aditivas porque S es función de estado."
      en: "The entropy change of an ideal gas between two states (T_i, V_i) and (T_f, V_f) has two independent contributions: a thermal one (due to temperature change) and a mechanical one (due to volume change). The thermal contribution reflects the redistribution of internal energy; the volumetric contribution reflects the spatial redistribution of molecules. Both contributions are additive because S is a state function."

    constraints:
      - "El gas debe comportarse como gas ideal (PV = nRT)."
      - "c_v debe ser constante (o aproximadamente constante) en el rango de temperaturas."
      - "Ambas temperaturas y ambos volúmenes deben ser estrictamente positivos."
      - "R = 8.314 J/(mol·K) es la constante universal de los gases."

    validity:
      es: "Válida para cualquier proceso de gas ideal entre dos estados de equilibrio, independientemente del camino (porque S es función de estado). El camino puede ser reversible o irreversible; el resultado es el mismo. Requiere c_v constante. Para gases reales con interacciones intermoleculares, se necesitan correcciones (ecuación de Van der Waals u otras)."
      en: "Valid for any process of an ideal gas between two equilibrium states, regardless of path (because S is a state function). The path can be reversible or irreversible; the result is the same. Requires constant c_v. For real gases with intermolecular interactions, corrections are needed (Van der Waals equation or others)."

    dimension_check: "[mol] · [L^2 T^-2 Θ^-1] · [adimensional] + [mol] · [L^2 T^-2 Θ^-1 mol^-1] · [adimensional] = [M L^2 T^-2 Θ^-1] → J/K"

    calculable: true
    motivo_no_calculable: ""

    used_in:
      - cálculo de DeltaS en expansiones y compresiones de gases ideales
      - balance entrópico en ciclos termodinámicos (Carnot, Otto, Diesel)
      - procesos de mezcla de gases ideales
      - determinación de la dirección espontánea de un proceso

    interpretation_tags:
      - ideal_gas
      - thermal_contribution
      - volumetric_contribution
      - state_function
      - two_variable_process

    result_semantics:
      target: DeltaS
      kind: scalar_signed
      sign_meaning:
        es: "DeltaS > 0 cuando la combinación de calentamiento y expansión produce un aumento neto de dispersión. DeltaS < 0 cuando enfriamiento y compresión dominan. DeltaS = 0 en un proceso adiabático reversible (isentrópico) donde ambas contribuciones se cancelan exactamente."
        en: "DeltaS > 0 when the combination of heating and expansion produces a net increase in dispersal. DeltaS < 0 when cooling and compression dominate. DeltaS = 0 in a reversible adiabatic (isentropic) process where both contributions cancel exactly."
      absolute_value_meaning:
        es: "El valor absoluto de DeltaS cuantifica el cambio total de dispersión energética y espacial del gas. Para 1 mol de gas ideal monoatómico duplicando T y V: |DeltaS| = (3/2)R·ln(2) + R·ln(2) ≈ 14.4 J/(mol·K)."
        en: "The absolute value of DeltaS quantifies the total change in energy and spatial dispersal of the gas. For 1 mol of monatomic ideal gas doubling both T and V: |DeltaS| = (3/2)R·ln(2) + R·ln(2) ≈ 14.4 J/(mol·K)."

    domain_checks:
      - "T_i, T_f > 0 K obligatorio."
      - "V_i, V_f > 0 (volúmenes estrictamente positivos)."
      - "n > 0 (número de moles positivo)."
      - "c_v > 0 (capacidad calorífica molar a volumen constante positiva)."

    coherence_checks:
      - "Para expansión isotérmica (T_f = T_i): el término térmico se anula y DeltaS = nR·ln(V_f/V_i) > 0 si V_f > V_i."
      - "Para calentamiento isocórico (V_f = V_i): el término volumétrico se anula y DeltaS = n·c_v·ln(T_f/T_i) > 0 si T_f > T_i."
      - "Para proceso isentrópico (DeltaS = 0): se recupera la relación adiabática T·V^(γ-1) = constante."

    graph_implications:
      - "En el diagrama T-S, cada contribución (térmica y volumétrica) suma desplazamiento horizontal. La curva del proceso general de gas ideal depende del camino elegido pero el punto final (S_f) es único."
      - "En una expansión libre (irreversible), T no cambia para gas ideal pero V aumenta: DeltaS = nR·ln(V_f/V_i) > 0 y se visualiza como desplazamiento horizontal a T constante."

    pedagogical_triggers:
      - "Usar c_p en lugar de c_v en esta fórmula: la expresión con c_v usa variables (T, V); si se quiere usar (T, P) se necesita c_p y el término de presión."
      - "Olvidar que ambos logaritmos deben usar la misma base (natural, ln): usar log10 altera el resultado por factor ln(10) ≈ 2.303."
      - "Aplicar esta fórmula a gas real con interacciones: las desviaciones pueden ser significativas cerca de la condensación."
`;export{e as default};
