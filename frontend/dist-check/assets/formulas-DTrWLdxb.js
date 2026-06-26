const e=`formulas:

  - id: definicion_entropia_clausius
    target: DeltaS
    title:
      es: Definición de Clausius de la entropía
      en: Clausius definition of entropy

    equation: "DeltaS = Q_rev / T_abs"
    latex: "\\\\Delta S = \\\\frac{Q_{rev}}{T}"

    rearrangements:
      - target: DeltaS
        equation: "DeltaS = Q_rev / T_abs"
        latex: "\\\\Delta S = \\\\frac{Q_{rev}}{T}"
      - target: Q_rev
        equation: "Q_rev = DeltaS * T_abs"
        latex: "Q_{rev} = \\\\Delta S \\\\cdot T"
      - target: T_abs
        equation: "T_abs = Q_rev / DeltaS"
        latex: "T = \\\\frac{Q_{rev}}{\\\\Delta S}"

    category: fundamental
    relation_type: definition

    physical_meaning:
      es: "Define la variación de entropía de un sistema como el cociente entre el calor intercambiado en un proceso reversible y la temperatura absoluta a la que se realiza ese intercambio. Esta relación establece que el mismo calor produce mayor cambio de entropía a temperatura más baja, capturando cuantitativamente la 'calidad' de la energía térmica. Es la expresión macroscópica de la segunda ley de la termodinámica para procesos reversibles."
      en: "Defines the entropy change of a system as the ratio of heat exchanged in a reversible process to the absolute temperature at which that exchange occurs. This relationship establishes that the same heat produces a greater entropy change at lower temperature, quantitatively capturing the 'quality' of thermal energy. It is the macroscopic expression of the second law of thermodynamics for reversible processes."

    constraints:
      - "El proceso debe ser reversible (cuasi-estático). Para procesos irreversibles, DeltaS > Q_irrev / T."
      - "T_abs debe ser la temperatura en kelvin absolutos (T > 0 K siempre)."
      - "Para un proceso no isotérmico, aplicar la forma integral: DeltaS = integral(dQ_rev / T)."
      - "Q_rev es el calor del proceso reversible equivalente, no el calor real medido en un proceso irreversible."

    validity:
      es: "Válida para cualquier proceso termodinámico reversible entre dos estados de equilibrio. Para procesos isotérmicos reversibles (T constante) es la expresión exacta. Para procesos reversibles no isotérmicos, es la versión diferencial que debe integrarse. No aplicable directamente a procesos irreversibles: en ese caso DeltaS ≥ Q / T (desigualdad de Clausius)."
      en: "Valid for any reversible thermodynamic process between two equilibrium states. For reversible isothermal processes (constant T) it is the exact expression. For reversible non-isothermal processes, it is the differential form that must be integrated. Not directly applicable to irreversible processes: in that case DeltaS ≥ Q / T (Clausius inequality)."

    dimension_check: "[M L^2 T^-2 Θ^-1] = [M L^2 T^-2] / [Θ] → J/K = J / K → dimensionalmente consistente."

    calculable: true
    motivo_no_calculable: ""

    used_in:
      - cálculo de variación de entropía en procesos isotérmicos reversibles
      - ciclo de Carnot y eficiencia máxima
      - criterio de espontaneidad de la segunda ley
      - procesos de cambio de fase (fusión, vaporización, sublimación)
      - balance de entropía en intercambiadores de calor

    interpretation_tags:
      - entropy_change
      - reversible_process
      - clausius_definition
      - second_law
      - thermal_quality

    result_semantics:
      target: DeltaS
      kind: scalar_signed
      sign_meaning:
        es: "DeltaS > 0 indica que la entropía del sistema aumenta: el sistema absorbe calor (Q_rev > 0) a temperatura T_abs. El proceso ocurre espontáneamente en la dirección de mayor dispersión energética. DeltaS < 0 indica que la entropía del sistema disminuye: el sistema cede calor (Q_rev < 0). Esto es posible solo si el entorno aumenta su entropía en mayor medida. DeltaS = 0 corresponde a proceso adiabático reversible (isentrópico)."
        en: "DeltaS > 0 indicates the system entropy increases: the system absorbs heat (Q_rev > 0) at temperature T_abs. The process occurs spontaneously in the direction of greater energy dispersal. DeltaS < 0 indicates the system entropy decreases: the system releases heat (Q_rev < 0). This is possible only if the surroundings increase their entropy by a greater amount. DeltaS = 0 corresponds to a reversible adiabatic process (isentropic)."
      absolute_value_meaning:
        es: "El valor absoluto de DeltaS cuantifica la magnitud del cambio de dispersión energética. Para referencia: la fusión de 1 g de hielo produce |DeltaS| ≈ 1.22 J/K; la vaporización de 1 g de agua produce |DeltaS| ≈ 6.06 J/K."
        en: "The absolute value of DeltaS quantifies the magnitude of the energy dispersal change. For reference: melting 1 g of ice produces |DeltaS| ≈ 1.22 J/K; vaporising 1 g of water produces |DeltaS| ≈ 6.06 J/K."

    domain_checks:
      - "T_abs debe ser estrictamente positiva (T_abs > 0 K); un valor nulo o negativo es físicamente imposible."
      - "DeltaS puede ser positivo, negativo o cero según el sentido del proceso."
      - "Q_rev negativo es físicamente válido e indica cesión de calor al entorno."

    coherence_checks:
      - "Si DeltaS y Q_rev tienen el mismo signo, la coherencia es correcta (ambos positivos o ambos negativos)."
      - "Si T_abs es mayor de 10000 K para aplicaciones habituales, verificar que se usan kelvin y no otra unidad."
      - "DeltaS calculado debe coincidir en unidades con J/K; un resultado en J es indicativo de olvidar el denominador T."

    graph_implications:
      - "En el diagrama T-S (temperatura frente a entropía), DeltaS es el desplazamiento horizontal del proceso. Para proceso isotérmico, es una línea horizontal a altura T; el área bajo esa línea es Q_rev."
      - "Para un ciclo de Carnot en el diagrama T-S, DeltaS en la isoterma caliente y DeltaS en la isoterma fría son iguales y de signo contrario: el ciclo es un rectángulo en el plano T-S."

    pedagogical_triggers:
      - "El error más frecuente es usar T en Celsius: si T = 27 °C en lugar de 300 K, DeltaS resulta unas 11 veces mayor del valor correcto."
      - "Confundir Q con Q_rev para procesos irreversibles: la fórmula de Clausius requiere el calor del proceso reversible equivalente."
      - "No distinguir DeltaS del sistema de DeltaS del universo: la segunda ley establece DeltaS_universo ≥ 0, no DeltaS_sistema ≥ 0."

  - id: entropia_isotermica
    target: Q_rev
    title:
      es: Entropía en proceso isotérmico (forma integrada)
      en: Entropy in isothermal process (integrated form)

    equation: "DeltaS = Q_rev / T_abs"
    latex: "\\\\Delta S = \\\\frac{Q_{rev}}{T}"

    rearrangements:
      - target: DeltaS
        equation: "DeltaS = Q_rev / T_abs"
        latex: "\\\\Delta S = \\\\frac{Q_{rev}}{T}"
      - target: Q_rev
        equation: "Q_rev = DeltaS * T_abs"
        latex: "Q_{rev} = \\\\Delta S \\\\cdot T"
      - target: T_abs
        equation: "T_abs = Q_rev / DeltaS"
        latex: "T = \\\\frac{Q_{rev}}{\\\\Delta S}"

    category: derived
    relation_type: integral_relation

    physical_meaning:
      es: "Es la forma integrada de la definición diferencial de Clausius para el caso especial de un proceso isotérmico (T constante). Como T no varía bajo la integral, puede sacarse del denominador y la integral del calor diferencial es simplemente Q_rev total. Esta es la fórmula de aplicación directa más usada en bachillerato y primeros cursos universitarios para calcular DeltaS en cambios de fase, mezclas a temperatura constante y procesos de expansión isotérmica de gases ideales."
      en: "This is the integrated form of the Clausius differential definition for the special case of an isothermal process (constant T). Since T does not vary under the integral, it can be taken out of the denominator and the integral of the differential heat is simply the total Q_rev. This is the most commonly used direct application formula in secondary and first-year university courses for calculating DeltaS in phase changes, mixing at constant temperature, and isothermal expansion of ideal gases."

    constraints:
      - "Válida SOLO para procesos isotérmicos (temperatura constante a lo largo de todo el proceso)."
      - "El proceso debe ser reversible o el DeltaS calculado debe entenderse como el del proceso reversible equivalente entre los mismos estados inicial y final."
      - "T_abs debe ser positiva y en kelvin."

    validity:
      es: "Válida para procesos isotérmicos reversibles. Aplicable también para calcular DeltaS de un proceso irreversible isotérmico, siempre que se use Q_rev del proceso reversible equivalente (que para estados inicial y final fijos es la misma función de estado). Casos de aplicación directa: cambios de fase a temperatura constante (fusión, vaporización), expansión isotérmica de gas ideal, mezcla de gases a temperatura constante."
      en: "Valid for reversible isothermal processes. Also applicable to calculate DeltaS of an irreversible isothermal process, as long as Q_rev of the equivalent reversible process is used (which for fixed initial and final states is the same state function). Direct application cases: phase changes at constant temperature (melting, vaporisation), isothermal expansion of ideal gas, mixing of gases at constant temperature."

    dimension_check: "[M L^2 T^-2 Θ^-1] = [M L^2 T^-2] / [Θ] → J/K = J / K → dimensionalmente consistente."

    calculable: true
    motivo_no_calculable: ""

    used_in:
      - cálculo de DeltaS en fusión y vaporización
      - expansión isotérmica de gas ideal (Q_rev = nRT·ln(V_f/V_i))
      - mezcla de sustancias a temperatura constante
      - procesos en máquinas frigoríficas y bombas de calor a temperatura constante

    interpretation_tags:
      - isothermal_process
      - entropy_calculation
      - phase_change
      - direct_application

    result_semantics:
      target: DeltaS
      kind: scalar_signed
      sign_meaning:
        es: "Para un proceso isotérmico, DeltaS tiene el mismo signo que Q_rev. Un cambio de fase endotérmico (fusión, vaporización) tiene Q_rev > 0 y por tanto DeltaS > 0: el sistema gana dispersión energética al pasar a un estado más desordenado. Un proceso de condensación o solidificación tiene Q_rev < 0 y DeltaS < 0: el sistema pierde dispersión al pasar a un estado más ordenado."
        en: "For an isothermal process, DeltaS has the same sign as Q_rev. An endothermic phase change (melting, vaporisation) has Q_rev > 0 and therefore DeltaS > 0: the system gains energy dispersal by transitioning to a more disordered state. A condensation or solidification process has Q_rev < 0 and DeltaS < 0: the system loses dispersal by transitioning to a more ordered state."
      absolute_value_meaning:
        es: "El valor absoluto de DeltaS en un proceso isotérmico mide cuántos J/K de dispersión energética se ganan o pierden por cada kelvin de temperatura. Es la pendiente de la recta horizontal en el diagrama T-S del proceso."
        en: "The absolute value of DeltaS in an isothermal process measures how many J/K of energy dispersal are gained or lost per kelvin of temperature. It is the horizontal length of the line in the T-S diagram of the process."

    domain_checks:
      - "T_abs > 0 K en todo momento; la temperatura de un proceso físicamente real siempre es positiva."
      - "Para un proceso de fusión, Q_rev debe ser positivo (calor latente de fusión absorbido)."
      - "DeltaS en vaporización debe ser mayor que DeltaS en fusión para la misma sustancia: el calor latente de vaporización es siempre mayor que el de fusión."

    coherence_checks:
      - "Para agua a 0 °C (273 K): DeltaS de fusión ≈ 6010 J / 273 K ≈ 22 J/(mol·K); si el resultado se aleja mucho de este valor para el agua, revisar unidades."
      - "DeltaS de vaporización del agua a 100 °C (373 K): 40650 J / 373 K ≈ 109 J/(mol·K); es aproximadamente 5 veces mayor que el de fusión."
      - "Si DeltaS resultante es negativo para un cambio de fase endotérmico (fusión, vaporización), se ha introducido el signo erróneo en Q_rev."

    graph_implications:
      - "En el diagrama T-S, un proceso isotérmico es una línea horizontal a temperatura T_abs constante. La longitud horizontal es DeltaS y el área del rectángulo T × DeltaS es igual a Q_rev."
      - "Para un cambio de fase, esta línea horizontal representa la transición completa: toda la energía va a cambiar el estado (DeltaS > 0) sin cambiar la temperatura."

    pedagogical_triggers:
      - "Al calcular DeltaS de fusión del hielo, muchos alumnos olvidan convertir a kelvin: usar 0 en lugar de 273 K haría DeltaS divergir, lo que es un indicador inmediato de error."
      - "Al calcular DeltaS en vaporización, confundir el calor latente por gramo con el calor latente por mol conduce a errores de factor 18 para el agua."
      - "La fórmula isotérmica no aplica a calentamiento sensible (sin cambio de fase): en ese caso T varía y hay que integrar o usar la fórmula con capacidad calorífica específica."
`;export{e as default};
