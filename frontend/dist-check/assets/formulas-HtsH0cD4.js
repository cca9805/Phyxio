const e=`version: v5
leaf_id: interferencia-constructiva
formulas:
  - id: condicion_constructiva_camino
    title:
      es: Condicion de interferencia constructiva por camino
      en: Constructive interference condition by path
    equation: "Delta_r = m_orden * lambda"
    latex: "\\\\Delta r = m\\\\lambda"
    rearrangements:
      - target: Delta_r
        equation: "Delta_r = m_orden * lambda"
        latex: "\\\\Delta r = m\\\\lambda"
      - target: m_orden
        equation: "m_orden = Delta_r / lambda"
        latex: "m = \\\\frac{\\\\Delta r}{\\\\lambda}"
      - target: lambda
        equation: "lambda = Delta_r / m_orden"
        latex: "\\\\lambda = \\\\frac{\\\\Delta r}{m}"
    category: condition
    relation_type: constructive_condition
    physical_meaning:
      es: Dos ondas coherentes se refuerzan cuando su diferencia de camino equivale a un numero entero de longitudes de onda.
      en: Two coherent waves reinforce when their path difference equals an integer number of wavelengths.
    constraints:
      - "lambda > 0"
      - "m_orden entero"
    validity:
      es: Valida para ondas coherentes con frecuencia comun y fase estable.
      en: Valid for coherent waves with common frequency and stable phase.
    dimension_check: "[L] = adimensional · [L]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion]
    interpretation_tags: [maximo_constructivo, diferencia_camino]
    result_semantics:
      target: Delta_r
      kind: path_condition
      sign_meaning:
        es: "El signo indica que recorrido se toma como mas largo."
        en: "The sign indicates which path is taken as longer."
      absolute_value_meaning:
        es: "El valor absoluto mide cuanto camino extra separa las llegadas."
        en: "The absolute value measures the extra path separating arrivals."
    domain_checks:
      - id: cc_lambda_positive
        condition: "lambda > 0"
        message:
          es: "La longitud de onda debe ser positiva."
          en: "Wavelength must be positive."
    coherence_checks:
      - id: cc_order_integer
        condition: "m_orden entero"
        message:
          es: "El orden constructivo debe ser entero."
          en: "Constructive order must be integer."
    graph_implications:
      es: "Los maximos aparecen espaciados por ciclos completos de fase."
      en: "Maxima appear separated by whole phase cycles."
    pedagogical_triggers:
      - id: cc_trigger_path
        text:
          es: "Si el alumno usa una sola distancia, pedir comparacion de recorridos."
          en: "If the student uses one distance, ask for path comparison."

  - id: fase_desde_camino
    title:
      es: Diferencia de fase desde diferencia de camino
      en: Phase difference from path difference
    equation: "delta_phi = 2 * PI * Delta_r / lambda"
    latex: "\\\\Delta\\\\phi = \\\\frac{2\\\\pi\\\\Delta r}{\\\\lambda}"
    rearrangements:
      - target: delta_phi
        equation: "delta_phi = 2 * PI * Delta_r / lambda"
        latex: "\\\\Delta\\\\phi = \\\\frac{2\\\\pi\\\\Delta r}{\\\\lambda}"
      - target: Delta_r
        equation: "Delta_r = delta_phi * lambda / (2 * PI)"
        latex: "\\\\Delta r = \\\\frac{\\\\Delta\\\\phi\\\\lambda}{2\\\\pi}"
    category: conversion
    relation_type: phase_path_relation
    physical_meaning:
      es: Convierte una diferencia geometrica de camino en desfase angular entre ondas.
      en: Converts a geometric path difference into angular phase offset between waves.
    constraints:
      - "lambda > 0"
    validity:
      es: Valida para ondas sinusoidales monocromaticas en el mismo medio.
      en: Valid for monochromatic sinusoidal waves in the same medium.
    dimension_check: "adimensional = [L] / [L]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion, grafico_coord]
    interpretation_tags: [fase, camino]
    result_semantics:
      target: delta_phi
      kind: phase_difference
      sign_meaning:
        es: "El signo indica que onda adelanta en fase."
        en: "The sign indicates which wave leads in phase."
      absolute_value_meaning:
        es: "El valor absoluto mide separacion angular entre llegadas."
        en: "The absolute value measures angular separation between arrivals."
    domain_checks:
      - id: fc_lambda_positive
        condition: "lambda > 0"
        message:
          es: "La conversion camino-fase requiere longitud de onda positiva."
          en: "Path-phase conversion requires positive wavelength."
    coherence_checks:
      - id: fc_periodic
        condition: "delta_phi periodico"
        message:
          es: "Desfases separados por ciclos completos son fisicamente equivalentes."
          en: "Phase offsets separated by whole cycles are physically equivalent."
    graph_implications:
      es: "El eje horizontal del grafico puede leerse como fase relativa."
      en: "The graph horizontal axis can be read as relative phase."
    pedagogical_triggers:
      - id: fc_trigger_units
        text:
          es: "Si se mezclan metros y nanometros, pedir conversion antes de decidir fase."
          en: "If meters and nanometers are mixed, ask for conversion before deciding phase."

  - id: intensidad_interferencia_dos_ondas
    title:
      es: Intensidad resultante de dos ondas coherentes
      en: Resultant intensity of two coherent waves
    equation: "I_resultante = I1 + I2 + 2 * sqrt(I1 * I2) * cos(delta_phi)"
    latex: "I = I_1 + I_2 + 2\\\\sqrt{I_1 I_2}\\\\cos(\\\\Delta\\\\phi)"
    rearrangements:
      - target: I_resultante
        equation: "I_resultante = I1 + I2 + 2 * sqrt(I1 * I2) * cos(delta_phi)"
        latex: "I = I_1 + I_2 + 2\\\\sqrt{I_1 I_2}\\\\cos(\\\\Delta\\\\phi)"
    category: superposition
    relation_type: coherent_intensity
    physical_meaning:
      es: La intensidad final depende de las intensidades individuales y del desfase; el termino de interferencia puede reforzar o reducir.
      en: Final intensity depends on individual intensities and phase offset; the interference term can reinforce or reduce.
    constraints:
      - "I1 >= 0"
      - "I2 >= 0"
    validity:
      es: Valida para dos ondas coherentes con polarizacion compatible y misma frecuencia.
      en: Valid for two coherent waves with compatible polarization and the same frequency.
    dimension_check: "[M T⁻³] = [M T⁻³]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion, grafico_coord]
    interpretation_tags: [intensidad, superposicion_coherente]
    result_semantics:
      target: I_resultante
      kind: intensity
      sign_meaning:
        es: "No tiene signo fisico; debe ser no negativa."
        en: "It has no physical sign; it must be non-negative."
      absolute_value_meaning:
        es: "El valor mide intensidad media observada tras recombinar ondas."
        en: "The value measures observed average intensity after wave recombination."
    domain_checks:
      - id: ii_intensities_nonnegative
        condition: "I1 >= 0 and I2 >= 0"
        message:
          es: "Las intensidades individuales deben ser no negativas."
          en: "Individual intensities must be non-negative."
    coherence_checks:
      - id: ii_result_nonnegative
        condition: "I_resultante >= 0"
        message:
          es: "La intensidad resultante no puede ser negativa."
          en: "Resulting intensity cannot be negative."
    graph_implications:
      es: "La curva sube en fase constructiva y baja al alejarse de ella."
      en: "The curve rises at constructive phase and falls away from it."
    pedagogical_triggers:
      - id: ii_trigger_incoherent_sum
        text:
          es: "Si se suman solo intensidades, pedir lectura de fase."
          en: "If only intensities are added, ask for phase reading."
`;export{e as default};
