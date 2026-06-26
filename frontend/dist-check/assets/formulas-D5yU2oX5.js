const e=`version: v5
leaf_id: frecuencia-y-periodo
formulas:
  - id: frecuencia_periodo
    title: { es: Relación frecuencia-periodo, en: Frequency-period relation }
    equation: "f = 1 / T"
    latex: "f=1/T % f T"
    rearrangements:
      - target: f
        equation: "f = 1 / T"
        latex: "f=1/T % f T"
      - target: T
        equation: "T = 1 / f"
        latex: "T=1/f % T f"
    category: fundamental
    relation_type: inverse_relation
    physical_meaning: { es: Frecuencia y periodo son formas inversas de describir el mismo ritmo temporal., en: Frequency and period are inverse ways of describing the same temporal rhythm. }
    constraints: ["periodo positivo", "oscilacion periodica"]
    validity: { es: Válida para fenómenos con ciclos repetidos y periodo definido., en: Valid for phenomena with repeated cycles and defined period. }
    dimension_check: "[T^-1] = [T^-1]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion, grafico_coord]
    interpretation_tags: [ritmo_temporal, inversa, ciclo]
    result_semantics:
      target: f
      kind: positive_rate
      sign_meaning: { es: La frecuencia física se interpreta positiva., en: Physical frequency is interpreted as positive. }
      absolute_value_meaning: { es: Indica ciclos por unidad de tiempo., en: Indicates cycles per unit time. }
    domain_checks:
      - id: period_positive
        condition: "T > 0"
        message: { es: El periodo debe ser positivo., en: Period must be positive. }
    coherence_checks:
      - id: inverse_consistency
        condition: "f*T == 1"
        message: { es: Frecuencia y periodo deben ser inversos coherentes., en: Frequency and period must be coherent inverses. }
    graph_implications: { es: En la gráfica temporal, mayor frecuencia implica menor separación entre ciclos., en: On the time graph, higher frequency means smaller spacing between cycles. }
    pedagogical_triggers:
      - id: direct_confusion
        text: { es: Si el alumno cree que ambos crecen juntos, usar ciclos apretados y ciclos separados., en: If the student thinks both grow together, use packed and separated cycles. }
  - id: frecuencia_angular
    title: { es: Frecuencia angular, en: Angular frequency }
    equation: "omega = 2*pi*f"
    latex: "\\\\omega=2\\\\pi f % omega f"
    rearrangements:
      - target: omega
        equation: "omega = 2*pi*f"
        latex: "\\\\omega=2\\\\pi f % omega f"
    category: derived
    relation_type: angular_conversion
    physical_meaning: { es: Convierte ciclos por segundo en avance angular de fase por segundo., en: Converts cycles per second into angular phase advance per second. }
    constraints: ["frecuencia positiva", "fase angular"]
    validity: { es: Válida cuando se describe el ciclo mediante fase angular., en: Valid when the cycle is described through angular phase. }
    dimension_check: "[T^-1] = [T^-1]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion]
    interpretation_tags: [frecuencia_angular, fase]
    result_semantics:
      target: omega
      kind: angular_rate
      sign_meaning: { es: El signo depende del convenio de avance de fase., en: The sign depends on phase-advance convention. }
      absolute_value_meaning: { es: Mide radianes de fase recorridos por segundo., en: Measures radians of phase swept per second. }
    domain_checks:
      - id: frequency_positive
        condition: "f > 0"
        message: { es: La frecuencia debe ser positiva., en: Frequency must be positive. }
    coherence_checks:
      - id: angular_units
        condition: "dimension(omega) == [T^-1]"
        message: { es: La frecuencia angular debe conservar dimensión temporal inversa., en: Angular frequency must keep inverse-time dimension. }
    graph_implications: { es: Mayor omega hace que la fase avance más rápido en una animación temporal., en: Larger omega makes phase advance faster in a time animation. }
    pedagogical_triggers:
      - id: hertz_rad_confusion
        text: { es: Si el alumno mezcla Hz y rad/s, separar conteo de ciclos y fase angular., en: If the student mixes Hz and rad/s, separate cycle count and angular phase. }
  - id: frecuencia_por_conteo
    title: { es: Frecuencia por conteo de ciclos, en: Frequency from cycle count }
    equation: "f = N / Delta_t"
    latex: "f=N/\\\\Delta t % f N Delta_t"
    rearrangements:
      - target: f
        equation: "f = N / Delta_t"
        latex: "f=N/\\\\Delta t % f N Delta_t"
    category: measurement
    relation_type: operational_definition
    physical_meaning: { es: Estima frecuencia contando ciclos durante una ventana temporal., en: Estimates frequency by counting cycles during a time window. }
    constraints: ["conteo no negativo", "intervalo positivo"]
    validity: { es: Válida si el ritmo es estable durante la ventana de observación., en: Valid if rhythm is stable during the observation window. }
    dimension_check: "[T^-1] = [1] [T^-1]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion]
    interpretation_tags: [medida, conteo, periodo]
    result_semantics:
      target: f
      kind: measured_rate
      sign_meaning: { es: El resultado se interpreta como tasa positiva de ciclos., en: The result is interpreted as positive cycle rate. }
      absolute_value_meaning: { es: Indica el promedio de ciclos por segundo en la ventana., en: Indicates average cycles per second in the window. }
    domain_checks:
      - id: interval_positive
        condition: "Delta_t > 0"
        message: { es: El intervalo de observación debe ser positivo., en: Observation interval must be positive. }
    coherence_checks:
      - id: count_window_coherence
        condition: "N >= 0"
        message: { es: El conteo de ciclos no debe ser negativo., en: Cycle count must not be negative. }
    graph_implications: { es: En el gráfico, N cuenta repeticiones dentro de una ventana Delta_t., en: On the graph, N counts repetitions inside a Delta_t window. }
    pedagogical_triggers:
      - id: count_period_confusion
        text: { es: Si el alumno confunde ventana total con periodo, comparar muchos ciclos con un ciclo., en: If the student confuses total window with period, compare many cycles with one cycle. }
`;export{e as default};
