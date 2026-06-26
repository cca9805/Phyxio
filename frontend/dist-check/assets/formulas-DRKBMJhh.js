const e=`version: 5
topic:
  id: resonancia
  title: { es: Resonancia, en: Resonance }
formulas:
  - id: amplitud_respuesta
    title: { es: Curva de amplitud forzada, en: Forced-amplitude curve }
    equation: X = F0/sqrt((k-m*omega_f^2)^2 + (b*omega_f)^2)
    latex: X=\\frac{F_0}{\\sqrt{(k-m\\omega_f^2)^2+(b\\omega_f)^2}}
    category: respuesta_frecuencial
    relation_type: amplitud_vs_frecuencia
    physical_meaning: { es: Da la amplitud estacionaria para cada frecuencia de forzado., en: Gives steady amplitude for each forcing frequency. }
    constraints: [F0 >= 0, m > 0, k > 0, b > 0, omega_f > 0]
    validity: { es: Valida en regimen estacionario lineal con excitacion sinusoidal., en: Valid in linear steady state with sinusoidal excitation. }
    dimension_check: "[L] = [N]/[N m^-1]"
    calculable: true
    motivo_no_calculable: { es: "Requiere [[F0]], [[k]], [[m]], [[b]] y [[omega_f]].", en: "Requires [[F0]], [[k]], [[m]], [[b]], and [[omega_f]]." }
    used_in: [frecuencia_resonancia, criterio_resonancia]
    interpretation_tags: [curva, amplitud, pico]
    result_semantics: altura_de_respuesta
    domain_checks: [m > 0, k > 0, omega_f > 0, b > 0]
    coherence_checks: [X >= 0]
    graph_implications: "La grafica de [[X]] frente a [[omega_f]] permite localizar el pico resonante."
    pedagogical_triggers: [barrido_frecuencial, comparacion_de_amplitudes]
    rearrangements:
      - target: X
        equation: F0/sqrt((k-m*omega_f^2)^2 + (b*omega_f)^2)
      - target: F0
        equation: X*sqrt((k-m*omega_f^2)^2 + (b*omega_f)^2)
    variables: [X, F0, k, m, omega_f, b]
  - id: frecuencia_resonancia
    title: { es: Pulsacion de resonancia, en: Resonance angular frequency }
    equation: omega_r = sqrt(k/m - b^2/(2*m^2))
    latex: \\omega_r=\\sqrt{\\frac{k}{m}-\\frac{b^2}{2m^2}}
    category: localizacion_del_pico
    relation_type: maximo_de_amplitud
    physical_meaning: { es: Localiza el maximo de desplazamiento cuando el amortiguamiento permite un pico real., en: Locates the displacement maximum when damping allows a real peak. }
    constraints: [m > 0, k > 0, b >= 0, k/m > b^2/(2*m^2)]
    validity: { es: Valida para oscilador lineal subamortiguado con pico de desplazamiento definido., en: Valid for a linear underdamped oscillator with a defined displacement peak. }
    dimension_check: "[T^-1] = sqrt([T^-2])"
    calculable: true
    motivo_no_calculable: { es: "Requiere [[k]], [[m]] y [[b]].", en: "Requires [[k]], [[m]], and [[b]]." }
    used_in: [criterio_resonancia]
    interpretation_tags: [pico, frecuencia, amortiguamiento]
    result_semantics: posicion_del_pico
    domain_checks: [m > 0, k > 0, k/m > b^2/(2*m^2)]
    coherence_checks: [omega_r > 0]
    graph_implications: "[[omega_r]] marca la posicion horizontal del maximo de [[X]]."
    pedagogical_triggers: [resonancia_real, desplazamiento_del_pico]
    rearrangements:
      - target: omega_r
        equation: sqrt(k/m - b^2/(2*m^2))
    variables: [omega_r, k, m, b]
  - id: factor_calidad
    title: { es: Factor de calidad, en: Quality factor }
    equation: Q = m*omega0/b
    latex: Q=\\frac{m\\omega_0}{b}
    category: selectividad
    relation_type: calidad_resonante
    physical_meaning: { es: Estima cuan estrecho y selectivo es el pico resonante., en: Estimates how narrow and selective the resonance peak is. }
    constraints: [m > 0, omega0 > 0, b > 0]
    validity: { es: Valida para amortiguamiento viscoso lineal y respuesta subamortiguada., en: Valid for linear viscous damping and underdamped response. }
    dimension_check: "[1] = [kg][s^-1]/[kg s^-1]"
    calculable: true
    motivo_no_calculable: { es: "Requiere [[m]], [[omega0]] y [[b]].", en: "Requires [[m]], [[omega0]], and [[b]]." }
    used_in: [criterio_resonancia]
    interpretation_tags: [calidad, anchura, disipacion]
    result_semantics: selectividad_del_pico
    domain_checks: [b > 0, m > 0, omega0 > 0]
    coherence_checks: [Q > 0]
    graph_implications: "Un [[Q]] mayor produce un pico mas estrecho y sensible al barrido de [[omega_f]]."
    pedagogical_triggers: [selectividad, ancho_de_banda]
    rearrangements:
      - target: Q
        equation: m*omega0/b
      - target: b
        equation: m*omega0/Q
      - target: omega0
        equation: Q*b/m
    variables: [Q, m, omega0, b]
  - id: criterio_resonancia
    title: { es: Criterio operativo de resonancia, en: Operational resonance criterion }
    equation: omega_f = omega_r
    latex: \\omega_f\\approx\\omega_r
    category: criterio
    relation_type: condicion_de_pico
    physical_meaning: { es: Resume que hay resonancia de desplazamiento cuando el barrido alcanza el maximo de la curva., en: States that displacement resonance occurs when the sweep reaches the curve maximum. }
    constraints: [omega_f > 0, omega_r > 0, b > 0]
    validity: { es: "Es un criterio operativo; la cercania aceptable depende de la anchura del pico y de [[Q]].", en: "It is an operational criterion; acceptable closeness depends on peak width and [[Q]]." }
    dimension_check: "[T^-1] = [T^-1]"
    calculable: false
    motivo_no_calculable: { es: "No fija una unica tolerancia: debe compararse la curva [[X]] frente a [[omega_f]].", en: "It does not set a unique tolerance: the [[X]] curve versus [[omega_f]] must be compared." }
    used_in: []
    interpretation_tags: [criterio, comparacion, pico]
    result_semantics: decision_resonante
    domain_checks: [omega_f > 0, omega_r > 0]
    coherence_checks: [comparar_curva]
    graph_implications: "La decision se toma mirando si [[omega_f]] cae en la zona alta y estrecha de la curva."
    pedagogical_triggers: [diagnostico, lectura_de_grafica]
    rearrangements:
      - target: omega_f
        equation: omega_r
    variables: [omega_f, omega_r, Q, X, b]
ui:
  default_formula: amplitud_respuesta
  groups:
    - title: { es: Curva y pico, en: Curve and peak }
      items: [amplitud_respuesta, frecuencia_resonancia]
    - title: { es: Selectividad y criterio, en: Selectivity and criterion }
      items: [factor_calidad, criterio_resonancia]
`;export{e as default};
