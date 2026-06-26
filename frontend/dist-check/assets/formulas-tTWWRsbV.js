const e=`version: v5
leaf_id: superposicion
formulas:
  - id: superposicion_lineal
    title:
      es: Superposicion lineal de perturbaciones
      en: Linear superposition of disturbances
    equation: "y_resultante = y_1 + y_2"
    latex: "y = y_1 + y_2 % y_resultante y_1 y_2"
    rearrangements:
      - target: y_resultante
        equation: "y_resultante = y_1 + y_2"
        latex: "y = y_1 + y_2 % y_resultante y_1 y_2"
      - target: y_1
        equation: "y_1 = y_resultante - y_2"
        latex: "y_1 = y - y_2 % y_resultante y_1 y_2"
      - target: y_2
        equation: "y_2 = y_resultante - y_1"
        latex: "y_2 = y - y_1 % y_resultante y_1 y_2"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: En un medio lineal, la perturbacion total en un punto es la suma algebraica de las perturbaciones individuales.
      en: In a linear medium, the total disturbance at a point is the algebraic sum of the individual disturbances.
    constraints:
      - "medio lineal"
      - "perturbaciones medidas en el mismo punto e instante"
    validity:
      es: Valida si las ondas no modifican las propiedades del medio ni interactuan de forma no lineal.
      en: Valid if waves do not modify medium properties or interact nonlinearly.
    dimension_check: "[L] = [L] + [L]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion, grafico_coord]
    interpretation_tags: [suma_algebraica, perturbacion_resultante]
    result_semantics:
      target: y_resultante
      kind: signed_disturbance
      sign_meaning:
        es: El signo indica el sentido instantaneo de la perturbacion resultante.
        en: The sign indicates the instantaneous direction of the resultant disturbance.
      absolute_value_meaning:
        es: El valor absoluto mide cuanto se separa el medio del equilibrio.
        en: The absolute value measures how far the medium is from equilibrium.
    domain_checks:
      - id: sl_same_point
        condition: "same_point"
        message:
          es: Las perturbaciones deben evaluarse en el mismo punto e instante.
          en: Disturbances must be evaluated at the same point and instant.
    coherence_checks:
      - id: sl_signed_sum
        condition: "signed_sum"
        message:
          es: La suma debe conservar signos, no modulos.
          en: The sum must preserve signs, not magnitudes.
    graph_implications:
      es: La curva resultante sube donde las ondas tienen el mismo signo y se reduce donde tienen signos opuestos.
      en: The resultant curve rises where waves have the same sign and shrinks where signs are opposite.
    pedagogical_triggers:
      - id: sl_trigger_absolute
        text:
          es: Si el alumno suma valores absolutos, pedir que dibuje el sentido de cada perturbacion.
          en: If the student adds absolute values, ask them to draw the direction of each disturbance.
  - id: amplitud_en_fase
    title:
      es: Amplitud resultante para ondas en fase
      en: Resultant amplitude for in-phase waves
    equation: "A_resultante = A_1 + A_2"
    latex: "A = A_1 + A_2 % A_resultante A_1 A_2"
    rearrangements:
      - target: A_resultante
        equation: "A_resultante = A_1 + A_2"
        latex: "A = A_1 + A_2 % A_resultante A_1 A_2"
      - target: A_1
        equation: "A_1 = A_resultante - A_2"
        latex: "A_1 = A - A_2 % A_resultante A_1 A_2"
      - target: A_2
        equation: "A_2 = A_resultante - A_1"
        latex: "A_2 = A - A_1 % A_resultante A_1 A_2"
    category: derived
    relation_type: definition
    physical_meaning:
      es: Si dos ondas llegan en fase, sus amplitudes maximas se refuerzan directamente.
      en: If two waves arrive in phase, their maximum amplitudes reinforce directly.
    constraints:
      - "ondas en fase"
      - "misma direccion de perturbacion"
    validity:
      es: Solo describe el caso de fase compatible; fuera de el se debe sumar la perturbacion instantanea.
      en: Describes only compatible phase; otherwise the instantaneous disturbance must be added.
    dimension_check: "[L] = [L] + [L]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion]
    interpretation_tags: [refuerzo_en_fase, amplitud]
    result_semantics:
      target: A_resultante
      kind: amplitude
      sign_meaning:
        es: La amplitud resultante no tiene signo fisico.
        en: Resultant amplitude has no physical sign.
      absolute_value_meaning:
        es: El valor mide el maximo desplazamiento de la onda combinada en fase.
        en: The value measures maximum displacement of the in-phase combined wave.
    domain_checks:
      - id: af_nonnegative
        condition: "A_1 >= 0 and A_2 >= 0"
        message:
          es: Las amplitudes deben ser no negativas.
          en: Amplitudes must be non-negative.
    coherence_checks:
      - id: af_direct_phase
        condition: "in_phase"
        message:
          es: La suma directa de amplitudes solo es valida en fase.
          en: Direct amplitude addition is valid only in phase.
    graph_implications:
      es: En fase, los picos de la curva resultante superan a cada onda individual.
      en: In phase, peaks of the resultant curve exceed each individual wave.
    pedagogical_triggers:
      - id: af_trigger_phase
        text:
          es: Si se aplica fuera de fase, pedir volver a la suma punto a punto.
          en: If applied out of phase, ask to return to point-by-point addition.
  - id: intensidad_relativa
    title:
      es: Intensidad relativa desde amplitud resultante
      en: Relative intensity from resultant amplitude
    equation: "I_relativa = A_resultante^2"
    latex: "I_{rel} = A^2 % I_relativa A_resultante"
    rearrangements:
      - target: I_relativa
        equation: "I_relativa = A_resultante^2"
        latex: "I_{rel} = A^2 % I_relativa A_resultante"
      - target: A_resultante
        equation: "A_resultante = sqrt(I_relativa)"
        latex: "A = \\\\sqrt{I_{rel}} % I_relativa A_resultante"
    category: derived
    relation_type: average_relation
    physical_meaning:
      es: En ondas lineales, la intensidad media relativa crece con el cuadrado de la amplitud resultante.
      en: In linear waves, relative average intensity grows with the square of resultant amplitude.
    constraints:
      - "I_relativa >= 0"
      - "A_resultante >= 0"
    validity:
      es: Valida como lectura relativa cuando el mismo medio y frecuencia permiten comparar intensidades por amplitud.
      en: Valid as a relative reading when the same medium and frequency allow intensity comparison by amplitude.
    dimension_check: "[1] = [L]^2 normalizado por una amplitud de referencia"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion]
    interpretation_tags: [lectura_energetica, intensidad_relativa]
    result_semantics:
      target: I_relativa
      kind: relative_intensity
      sign_meaning:
        es: No tiene signo fisico y debe ser no negativa.
        en: It has no physical sign and must be non-negative.
      absolute_value_meaning:
        es: El valor mide refuerzo energetico relativo al comparar amplitudes.
        en: The value measures relative energy reinforcement when comparing amplitudes.
    domain_checks:
      - id: ir_nonnegative
        condition: "I_relativa >= 0"
        message:
          es: La intensidad relativa no puede ser negativa.
          en: Relative intensity cannot be negative.
    coherence_checks:
      - id: ir_square
        condition: "square_amplitude"
        message:
          es: Duplicar amplitud cuadruplica la intensidad relativa.
          en: Doubling amplitude quadruples relative intensity.
    graph_implications:
      es: Una pequena diferencia de amplitud produce una diferencia mayor en lectura energetica.
      en: A small amplitude difference produces a larger difference in energy reading.
    pedagogical_triggers:
      - id: ir_trigger_energy
        text:
          es: Si el alumno suma energia localmente, recordar que primero se suma amplitud.
          en: If the student adds energy locally, recall that amplitude is added first.
ui:
  default_formula: superposicion_lineal
  calculator_enabled: true
  graph_binding: true
  interpretation_binding: true
`;export{e as default};
