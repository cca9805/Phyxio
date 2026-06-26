const e=`formulas:

  - id: ley_boyle
    title:
      es: Ley de Boyle
      en: Boyle's Law
    equation: "p2 = p1 * V1 / V2"
    latex: "p_1 V_1 = p_2 V_2"
    rearrangements:
      - target: p2
        equation: "p2 = p1 * V1 / V2"
        latex: "p_2 = \\\\frac{p_1 V_1}{V_2}"
      - target: p1
        equation: "p1 = p2 * V2 / V1"
        latex: "p_1 = \\\\frac{p_2 V_2}{V_1}"
      - target: V2
        equation: "V2 = p1 * V1 / p2"
        latex: "V_2 = \\\\frac{p_1 V_1}{p_2}"
      - target: V1
        equation: "V1 = p2 * V2 / p1"
        latex: "V_1 = \\\\frac{p_2 V_2}{p_1}"
    category: fundamental
    relation_type: constitutive_relation
    physical_meaning:
      es: "A temperatura constante, el producto presion por volumen de un gas ideal es invariante: si el volumen disminuye, la presion aumenta proporcionalmente."
      en: "At constant temperature, the product of pressure and volume of an ideal gas is invariant: if volume decreases, pressure increases proportionally."
    constraints: [gas ideal, temperatura constante, sistema cerrado]
    validity:
      es: Valida para gas ideal en equilibrio termodinamico con temperatura controlada por un foco.
      en: Valid for an ideal gas in thermodynamic equilibrium with temperature controlled by a reservoir.
    dimension_check: "[M L⁻¹ T⁻²] · [L³] = [M L² T⁻²] ambos lados"
    calculable: true
    motivo_no_calculable: null
    used_in: [calculo de presion o volumen final en proceso isotermico]
    interpretation_tags: [estado_final, presion, volumen, ley_boyle]
    result_semantics:
      target: p2
      kind: state_variable
      sign_meaning:
        es: Presion siempre positiva; indica el estado de presion del gas al final de la expansion o compresion isotermica.
        en: Pressure always positive; indicates the pressure state of the gas at the end of isothermal expansion or compression.
      absolute_value_meaning:
        es: La magnitud de p2 determina cuanto se ha modificado el estado del gas respecto al inicial.
        en: The magnitude of p2 determines how much the gas state has changed from the initial state.
    domain_checks:
      - condition: "p2 > 0"
        message:
          es: La presion final debe ser positiva.
          en: Final pressure must be positive.
      - condition: "V2 > 0"
        message:
          es: El volumen final debe ser positivo.
          en: Final volume must be positive.
    coherence_checks:
      - condition: "p1 * V1 - p2 * V2 < 0.001 * p1 * V1"
        message:
          es: El producto pV debe conservarse dentro del margen de precision numerica.
          en: The pV product must be conserved within numerical precision margin.
    graph_implications:
      - "Los puntos (V1, p1) y (V2, p2) deben yacer sobre la misma hiperbola pV en el diagrama."
    pedagogical_triggers:
      - condition: "V2 > V1 and p2 >= p1"
        message:
          es: "Si el volumen aumenta en un proceso isotermico, la presion debe disminuir. Verificar que p2 < p1 cuando V2 > V1."
          en: "If volume increases in an isothermal process, pressure must decrease. Check that p2 < p1 when V2 > V1."

  - id: trabajo_isotermico
    title:
      es: Trabajo del proceso isotermico
      en: Isothermal process work
    equation: "W = n * 8.314 * T * ln(V2 / V1)"
    latex: "W = n R T \\\\ln\\\\!\\\\left(\\\\frac{V_2}{V_1}\\\\right)"
    rearrangements:
      - target: W
        equation: "W = n * 8.314 * T * ln(V2 / V1)"
        latex: "W = n R T \\\\ln\\\\!\\\\left(\\\\frac{V_2}{V_1}\\\\right)"
      - target: Q_iso
        equation: "Q_iso = n * 8.314 * T * ln(V2 / V1)"
        latex: "Q = n R T \\\\ln\\\\!\\\\left(\\\\frac{V_2}{V_1}\\\\right)"
    category: derived
    relation_type: integral_relation
    physical_meaning:
      es: "El trabajo realizado por el gas en una expansion isotermica reversible es proporcional a la temperatura y al logaritmo natural del cociente de volumenes. Representa el area bajo la hiperbola en el diagrama pV."
      en: "The work done by the gas in a reversible isothermal expansion is proportional to temperature and to the natural logarithm of the volume ratio. It represents the area under the hyperbola in the pV diagram."
    constraints: [gas ideal, proceso reversible, temperatura constante, sistema cerrado]
    validity:
      es: "Valida para gas ideal con calor especifico constante en proceso cuasiestatico isotermico. No aplica a gases reales con interacciones moleculares."
      en: "Valid for an ideal gas with constant specific heat in a quasi-static isothermal process. Does not apply to real gases with molecular interactions."
    dimension_check: "[N] · [M L² T⁻² N⁻¹ Theta⁻¹] · [Theta] · [1] = [M L² T⁻²] = J"
    calculable: true
    motivo_no_calculable: null
    used_in: [calculo de trabajo en ciclos termodinamicos, primer principio isotermico]
    interpretation_tags: [trabajo, calor, isotermico, expansion, compresion]
    result_semantics:
      target: W
      kind: energy_exchange
      sign_meaning:
        es: Positivo cuando el gas se expande (V2 > V1) y realiza trabajo sobre el entorno; negativo en compresion.
        en: Positive when the gas expands (V2 > V1) and does work on the surroundings; negative in compression.
      absolute_value_meaning:
        es: Indica la cantidad de energia mecanica intercambiada con el entorno durante el proceso isotermico.
        en: Indicates the amount of mechanical energy exchanged with the surroundings during the isothermal process.
    domain_checks:
      - condition: "V2 > 0 and V1 > 0"
        message:
          es: Los volumenes inicial y final deben ser positivos para que el logaritmo este definido.
          en: Initial and final volumes must be positive for the logarithm to be defined.
      - condition: "T > 0"
        message:
          es: La temperatura absoluta debe ser positiva.
          en: Absolute temperature must be positive.
      - condition: "n > 0"
        message:
          es: La cantidad de sustancia debe ser positiva.
          en: Amount of substance must be positive.
    coherence_checks:
      - condition: "W > 0 and V2 > V1"
        message:
          es: Trabajo positivo es coherente con expansion (V2 mayor que V1).
          en: Positive work is consistent with expansion (V2 greater than V1).
      - condition: "W < 0 and V2 < V1"
        message:
          es: Trabajo negativo es coherente con compresion (V2 menor que V1).
          en: Negative work is consistent with compression (V2 less than V1).
    graph_implications:
      - "El signo y magnitud de W corresponden al area con signo bajo la hiperbola entre V1 y V2."
    pedagogical_triggers:
      - condition: "W > 0"
        message:
          es: "El gas se expandio y realizo trabajo. Por el primer principio, el gas absorbe exactamente esta cantidad de calor del foco termico."
          en: "The gas expanded and did work. By the first law, the gas absorbs exactly this amount of heat from the thermal reservoir."
      - condition: "W < 0"
        message:
          es: "El gas se comprimo. El entorno realizo trabajo sobre el gas, que cede exactamente este calor al foco termico."
          en: "The gas was compressed. The surroundings did work on the gas, which releases exactly this heat to the thermal reservoir."
`;export{e as default};
