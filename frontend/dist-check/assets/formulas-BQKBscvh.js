const e=`version: 5
topic:
  id: fuerza-forzada
  title: { es: Fuerza forzada, en: Forced Oscillation }
formulas:
  - id: ecuacion_diferencial_forzada
    title: { es: Ecuacion del oscilador forzado, en: Forced oscillator equation }
    equation: m*x_dd + b*x_d + k*x = F0*cos(omega_f*t)
    latex: m x_{dd}+b x_d+kx=F_0\\cos(\\omega_f t)
    category: modelo_dinamico
    relation_type: ecuacion_diferencial
    physical_meaning: { es: Plantea el balance entre inercia, disipacion, elasticidad y fuerza externa., en: States the balance among inertia, dissipation, elasticity, and external force. }
    constraints: [m > 0, k > 0, b >= 0, omega_f > 0]
    validity: { es: Valida para oscilador lineal con forzado sinusoidal y parametros constantes., en: Valid for a linear oscillator with sinusoidal forcing and constant parameters. }
    dimension_check: "[N] + [N] + [N] = [N]"
    calculable: false
    motivo_no_calculable: { es: "Es la ecuacion de modelo; requiere resolver la respuesta transitoria y estacionaria.", en: "It is the model equation; transient and steady response must be solved." }
    used_in: [amplitud_forzada, desfase_forzada, respuesta_estacionaria]
    interpretation_tags: [modelo, forzado, balance]
    result_semantics: balance_dinamico
    domain_checks: [m > 0, k > 0, omega_f > 0]
    coherence_checks: [unidades_de_fuerza]
    graph_implications: "La respuesta estacionaria oscila con la misma [[omega_f]] que la fuerza."
    pedagogical_triggers: [forzado_externo, regimen_estacionario]
    rearrangements:
      - target: F0
        equation: m*x_dd + b*x_d + k*x
    variables: [m, x_dd, b, x_d, k, x, F0, omega_f, t]
  - id: amplitud_forzada
    title: { es: Amplitud estacionaria, en: Steady-state amplitude }
    equation: X = F0/sqrt((k-m*omega_f^2)^2 + (b*omega_f)^2)
    latex: X=\\frac{F_0}{\\sqrt{(k-m\\omega_f^2)^2+(b\\omega_f)^2}}
    category: respuesta_estacionaria
    relation_type: amplitud_frecuencial
    physical_meaning: { es: Calcula cuanto oscila el sistema despues de desaparecer el transitorio., en: Computes how much the system oscillates after the transient has vanished. }
    constraints: [F0 >= 0, m > 0, k > 0, b >= 0, omega_f > 0]
    validity: { es: Valida para regimen estacionario lineal ante excitacion sinusoidal., en: Valid for linear steady state under sinusoidal excitation. }
    dimension_check: "[L] = [N]/[N m^-1]"
    calculable: true
    motivo_no_calculable: { es: "Requiere [[F0]], [[k]], [[m]], [[b]] y [[omega_f]].", en: "Requires [[F0]], [[k]], [[m]], [[b]], and [[omega_f]]." }
    used_in: [respuesta_estacionaria]
    interpretation_tags: [amplitud, estacionario, frecuencia]
    result_semantics: amplitud_de_respuesta
    domain_checks: [m > 0, k > 0, omega_f > 0]
    coherence_checks: [X >= 0]
    graph_implications: "[[X]] cambia al barrer [[omega_f]]."
    pedagogical_triggers: [respuesta_en_frecuencia, amplitud_permanente]
    rearrangements:
      - target: X
        equation: F0/sqrt((k-m*omega_f^2)^2 + (b*omega_f)^2)
      - target: F0
        equation: X*sqrt((k-m*omega_f^2)^2 + (b*omega_f)^2)
    variables: [X, F0, k, m, omega_f, b]
  - id: desfase_forzada
    title: { es: Desfase estacionario, en: Steady-state phase lag }
    equation: delta = (b*omega_f)/(k-m*omega_f^2)
    latex: \\delta=\\arctan\\left(\\frac{b\\omega_f}{k-m\\omega_f^2}\\right)
    category: respuesta_estacionaria
    relation_type: fase_frecuencial
    physical_meaning: { es: Calcula el retraso angular de la respuesta respecto a la fuerza aplicada., en: Computes the angular lag of the response relative to the applied force. }
    constraints: [m > 0, k > 0, b >= 0, omega_f > 0]
    validity: { es: Valida con seleccion correcta del cuadrante del desfase., en: Valid with correct phase-quadrant selection. }
    dimension_check: "[1] = atan([N m^-1]/[N m^-1])"
    calculable: true
    motivo_no_calculable: { es: "Requiere [[b]], [[omega_f]], [[k]] y [[m]].", en: "Requires [[b]], [[omega_f]], [[k]], and [[m]]." }
    used_in: [respuesta_estacionaria]
    interpretation_tags: [fase, retraso, estacionario]
    result_semantics: desfase_de_respuesta
    domain_checks: [omega_f > 0]
    coherence_checks: [delta]
    graph_implications: "[[delta]] desplaza la curva temporal [[x]] respecto a la fuerza."
    pedagogical_triggers: [fase, fuerza_vs_respuesta]
    rearrangements:
      - target: delta
        equation: (b*omega_f)/(k-m*omega_f^2)
    variables: [delta, b, omega_f, k, m]
  - id: respuesta_estacionaria
    title: { es: Respuesta temporal estacionaria, en: Steady-state time response }
    equation: x = X*cos(omega_f*t - delta)
    latex: x=X\\cos(\\omega_f t-\\delta)
    category: respuesta_temporal
    relation_type: oscilacion_forzada_estacionaria
    physical_meaning: { es: Describe el movimiento permanente sincronizado con la fuerza externa., en: Describes the permanent motion synchronized with the external force. }
    constraints: [X >= 0, omega_f > 0, t >= 0]
    validity: { es: Valida despues de que el transitorio libre haya decaido., en: Valid after the free transient has decayed. }
    dimension_check: "[L] = [L]*1"
    calculable: true
    motivo_no_calculable: { es: "Requiere [[X]], [[omega_f]], [[t]] y [[delta]].", en: "Requires [[X]], [[omega_f]], [[t]], and [[delta]]." }
    used_in: []
    interpretation_tags: [temporal, estacionario, sincronizacion]
    result_semantics: desplazamiento_estacionario
    domain_checks: [t >= 0]
    coherence_checks: [x]
    graph_implications: "[[x]] oscila a la frecuencia impuesta [[omega_f]]."
    pedagogical_triggers: [respuesta_permanente, fase]
    rearrangements:
      - target: x
        equation: X*cos(omega_f*t - delta)
      - target: X
        equation: x/cos(omega_f*t - delta)
    variables: [x, X, omega_f, t, delta]
ui:
  default_formula: amplitud_forzada
  groups:
    - title: { es: Modelo y amplitud, en: Model and amplitude }
      items: [ecuacion_diferencial_forzada, amplitud_forzada]
    - title: { es: Fase y respuesta temporal, en: Phase and time response }
      items: [desfase_forzada, respuesta_estacionaria]
`;export{e as default};
