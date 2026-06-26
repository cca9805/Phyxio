const e=`version: 1\r
ui:\r
  default_formula: periodo_ps\r
formulas:\r
- id: omega0_ps\r
  title:\r
    es: Pulsación natural del péndulo simple\r
    en: Natural angular frequency of the simple pendulum\r
  equation: omega0 = sqrt(g/L)\r
  latex: \\omega_0 = \\sqrt{\\frac{g}{L}}\r
  category: fundamental\r
  relation_type: characteristic_relation\r
  physical_meaning:\r
    es: Relaciona longitud y gravedad con la rapidez angular propia del movimiento.\r
    en: Relates length and gravity to the system's characteristic angular rate.\r
  constraints: L > 0 and g > 0.\r
  validity:\r
    es: Válida para ángulos pequeños y cuerda o hilo idealizados.\r
    en: Valid for small angles and an idealized string or rod.\r
  dimension_check: "[T^-1] = sqrt([L T^-2]/[L])"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - aplicaciones\r
  interpretation_tags:\r
  - natural_rate\r
  - small_angle\r
  - baseline_dynamics\r
  result_semantics:\r
    target: omega0\r
    kind: characteristic_rate\r
    sign_meaning:\r
      es: Se interpreta como rapidez angular positiva.\r
      en: It is interpreted as a positive angular rate.\r
    absolute_value_meaning:\r
      es: Mayor valor implica oscilación más rápida.\r
      en: Larger value implies faster oscillation.\r
  domain_checks:\r
  - expr: L > 0\r
    message:\r
      es: La longitud debe ser positiva.\r
      en: Length must be positive.\r
  - expr: g > 0\r
    message:\r
      es: La gravedad debe ser positiva.\r
      en: Gravity must be positive.\r
  coherence_checks:\r
  - expr: omega0 > 0\r
    message:\r
      es: La pulsación natural debe resultar positiva.\r
      en: Natural angular frequency must be positive.\r
  graph_implications:\r
  - La gráfica del periodo cambia cuando L o g varían.\r
  pedagogical_triggers:\r
  - when: omega0 > 0\r
    message:\r
      es: Comprueba si el periodo y la frecuencia son coherentes con esta escala.\r
      en: Check whether period and frequency are coherent with this scale.\r
  rearrangements:\r
  - target: omega0\r
    equation: sqrt(g/L)\r
    latex: \\sqrt{\\frac{g}{L}}\r
  - target: L\r
    equation: g/(omega0^2)\r
    latex: \\frac{g}{\\omega_0^2}\r
  - target: g\r
    equation: L*omega0^2\r
    latex: L\\omega_0^2\r
\r
- id: periodo_ps\r
  title:\r
    es: Periodo del péndulo simple\r
    en: Period of the simple pendulum\r
  equation: T = 2*pi*sqrt(L/g)\r
  latex: T = 2\\pi\\sqrt{\\frac{L}{g}}\r
  category: fundamental\r
  relation_type: period_relation\r
  physical_meaning:\r
    es: Traduce longitud y gravedad en tiempo de oscilación.\r
    en: Converts length and gravity into oscillation time.\r
  constraints: L > 0 and g > 0.\r
  validity:\r
    es: Válida para oscilaciones pequeñas alrededor del equilibrio.\r
    en: Valid for small oscillations around equilibrium.\r
  dimension_check: "[T] = sqrt([L]/[L T^-2])"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - aplicaciones\r
  interpretation_tags:\r
  - period\r
  - laboratory_measurement\r
  - model_validation\r
  result_semantics:\r
    target: T\r
    kind: characteristic_time\r
    sign_meaning:\r
      es: El periodo es una duración positiva.\r
      en: Period is a positive duration.\r
    absolute_value_meaning:\r
      es: Mayor valor implica oscilación más lenta.\r
      en: Larger value implies slower oscillation.\r
  domain_checks:\r
  - expr: L > 0\r
    message:\r
      es: La longitud debe ser positiva.\r
      en: Length must be positive.\r
  - expr: g > 0\r
    message:\r
      es: La gravedad debe ser positiva.\r
      en: Gravity must be positive.\r
  coherence_checks:\r
  - expr: T > 0\r
    message:\r
      es: El periodo debe resultar positivo.\r
      en: Period must be positive.\r
  graph_implications:\r
  - La curva T(L) debe crecer con la raíz cuadrada de L.\r
  pedagogical_triggers:\r
  - when: T > 0\r
    message:\r
      es: Contrasta el periodo con la intuición experimental.\r
      en: Contrast the period with experimental intuition.\r
  rearrangements:\r
  - target: T\r
    equation: 2*pi*sqrt(L/g)\r
    latex: 2\\pi\\sqrt{\\frac{L}{g}}\r
  - target: L\r
    equation: g*(T/(2*pi))^2\r
    latex: g\\left(\\frac{T}{2\\pi}\\right)^2\r
  - target: g\r
    equation: 4*pi^2*L/(T^2)\r
    latex: \\frac{4\\pi^2L}{T^2}\r
\r
- id: frecuencia_ps\r
  title:\r
    es: Frecuencia del péndulo simple\r
    en: Frequency of the simple pendulum\r
  equation: f = 1/T\r
  latex: f = \\frac{1}{T}\r
  category: derived\r
  relation_type: inverse_relation\r
  physical_meaning:\r
    es: Expresa cuántos ciclos completos ocurren por segundo.\r
    en: Expresses how many full cycles occur per second.\r
  constraints: T > 0.\r
  validity:\r
    es: Valida mientras el movimiento siga siendo periódico.\r
    en: Valid while the motion remains periodic.\r
  dimension_check: "[Hz] = [T^-1]"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - aplicaciones\r
  interpretation_tags:\r
  - cycle_rate\r
  - reciprocal_quantity\r
  - comparison_to_period\r
  result_semantics:\r
    target: f\r
    kind: cycle_rate\r
    sign_meaning:\r
      es: Se interpreta como conteo positivo de ciclos.\r
      en: It is interpreted as a positive cycle count.\r
    absolute_value_meaning:\r
      es: Mayor valor implica más ciclos por segundo.\r
      en: Larger value implies more cycles per second.\r
  domain_checks:\r
  - expr: T > 0\r
    message:\r
      es: El periodo debe ser positivo.\r
      en: Period must be positive.\r
  coherence_checks:\r
  - expr: f > 0\r
    message:\r
      es: La frecuencia debe resultar positiva.\r
      en: Frequency must be positive.\r
  graph_implications:\r
  - La frecuencia es inversa del periodo.\r
  pedagogical_triggers:\r
  - when: f > 0\r
    message:\r
      es: Verifica que no estés mezclando Hz con rad/s.\r
      en: Verify that you are not mixing Hz and rad/s.\r
  rearrangements:\r
  - target: f\r
    equation: 1/T\r
    latex: \\frac{1}{T}\r
  - target: T\r
    equation: 1/f\r
    latex: \\frac{1}{f}\r
\r
- id: ecuacion_angular_ps\r
  title:\r
    es: Ecuación angular del péndulo simple\r
    en: Angular equation of the simple pendulum\r
  equation: theta = theta0*cos(omega0*t + phi)\r
  latex: \\theta = \\theta_0\\cos(\\omega_0 t + \\varphi)\r
  category: state_relation\r
  relation_type: time_evolution\r
  physical_meaning:\r
    es: Describe la evolución temporal de ángulo, amplitud y fase.\r
    en: Describes the time evolution of angle, amplitude, and phase.\r
  constraints: omega0 > 0.\r
  validity:\r
    es: Útil en el régimen lineal de ángulos pequeños.\r
    en: Useful in the linear regime of small angles.\r
  dimension_check: "[1] = [1]"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - aplicaciones\r
  interpretation_tags:\r
  - time_evolution\r
  - phase\r
  - linear_solution\r
  result_semantics:\r
    target: theta\r
    kind: angular_state\r
    sign_meaning:\r
      es: El signo indica el lado del equilibrio.\r
      en: The sign indicates the side of equilibrium.\r
    absolute_value_meaning:\r
      es: El valor absoluto refleja el desplazamiento instantáneo.\r
      en: The absolute value reflects instantaneous displacement.\r
  domain_checks:\r
  - expr: omega0 > 0\r
    message:\r
      es: La pulsación natural debe ser positiva.\r
      en: Natural angular frequency must be positive.\r
  coherence_checks:\r
  - expr: theta0 >= 0\r
    message:\r
      es: La amplitud debe ser no negativa.\r
      en: Amplitude must be non-negative.\r
  graph_implications:\r
  - La fase desplaza máximos y mínimos en el tiempo.\r
  pedagogical_triggers:\r
  - when: theta0 > 0\r
    message:\r
      es: Comprueba si la amplitud sigue siendo pequeña.\r
      en: Check whether the amplitude is still small.\r
  rearrangements:\r
  - target: theta\r
    equation: theta0*cos(omega0*t + phi)\r
    latex: \\theta_0\\cos(\\omega_0 t + \\varphi)\r
\r
- id: ecuacion_no_lineal_ps\r
  title:\r
    es: Ecuación angular no lineal del péndulo simple\r
    en: Nonlinear angular equation of the simple pendulum\r
  equation: theta_dd + (g/L)*sin(theta) = 0\r
  latex: \\theta_{dd} + \\frac{g}{L}\\sin(\\theta) = 0\r
  category: structural\r
  relation_type: differential_relation\r
  physical_meaning:\r
    es: Mantiene el seno exacto para amplitudes finitas.\r
    en: Keeps the exact sine for finite amplitudes.\r
  constraints: L > 0 and g > 0.\r
  validity:\r
    es: Necesaria cuando el ángulo deja de ser pequeño.\r
    en: Needed when the angle is no longer small.\r
  dimension_check: "[T^-2] = [T^-2]"\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Requiere integración o métodos numéricos; no admite despeje algebraico general.\r
    en: Requires integration or numerical methods; no general algebraic solve exists.\r
  used_in:\r
  - teoria\r
  - modelos\r
  - errores\r
  - ejemplos\r
  interpretation_tags:\r
  - nonlinearity\r
  - finite_amplitude\r
  - restoring_torque\r
  result_semantics:\r
    target: theta_dd\r
    kind: dynamic_response\r
    sign_meaning:\r
      es: El signo refleja el torque restaurador instantáneo.\r
      en: The sign reflects the instantaneous restoring torque.\r
    absolute_value_meaning:\r
      es: Mayor módulo implica mayor aceleración angular.\r
      en: Larger magnitude implies greater angular acceleration.\r
  domain_checks:\r
  - expr: L > 0\r
    message:\r
      es: La longitud debe ser positiva.\r
      en: Length must be positive.\r
  - expr: g > 0\r
    message:\r
      es: La gravedad debe ser positiva.\r
      en: Gravity must be positive.\r
  coherence_checks:\r
  - expr: true\r
    message:\r
      es: Comprueba si el seno linealizado sigue siendo razonable.\r
      en: Check whether the linearized sine is still reasonable.\r
  graph_implications:\r
  - A amplitudes grandes, el periodo deja de ser estrictamente constante.\r
  pedagogical_triggers:\r
  - when: true\r
    message:\r
      es: Si la amplitud crece, cambia al análisis no lineal.\r
      en: If amplitude grows, switch to nonlinear analysis.\r
  rearrangements:\r
  - target: theta_dd\r
    equation: -(g/L)*sin(theta)\r
    latex: -\\frac{g}{L}\\sin(\\theta)\r
\r
- id: energia_ps\r
  title:\r
    es: Energía mecánica del péndulo simple\r
    en: Mechanical energy of the simple pendulum\r
  equation: E = 0.5*L^2*theta_dot^2 + g*L*(1-cos(theta))\r
  latex: E = \\frac{1}{2}L^2(\\theta_{dot})^2 + g\\,L(1-\\cos(\\theta))\r
  category: energy\r
  relation_type: conservation_relation\r
  physical_meaning:\r
    es: Une energía cinética y potencial en el modelo ideal.\r
    en: Combines kinetic and potential energy in the ideal model.\r
  constraints: L > 0 and g > 0.\r
  validity:\r
    es: Útil sin rozamiento y para estudiar amplitudes finitas.\r
    en: Useful without friction and for finite amplitudes.\r
  dimension_check: "[J] = [L^2 T^-2]"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - modelos\r
  - errores\r
  interpretation_tags:\r
  - energy\r
  - finite_amplitude\r
  - ideal_model\r
  result_semantics:\r
    target: E\r
    kind: energy_balance\r
    sign_meaning:\r
      es: Se interpreta como energía positiva o nula según la referencia.\r
      en: It is interpreted as positive or zero depending on the reference.\r
    absolute_value_meaning:\r
      es: Mayor valor implica mayor combinación de velocidad y desplazamiento.\r
      en: Larger value implies a greater combination of speed and displacement.\r
  domain_checks:\r
  - expr: L > 0\r
    message:\r
      es: La longitud debe ser positiva.\r
      en: Length must be positive.\r
  coherence_checks:\r
  - expr: E >= 0\r
    message:\r
      es: La energía debe ser no negativa bajo esta convención.\r
      en: Energy must be non-negative under this convention.\r
  graph_implications:\r
  - La energía ayuda a comparar amplitudes pequeñas y grandes.\r
  pedagogical_triggers:\r
  - when: theta0 > 0\r
    message:\r
      es: Usa energía para revisar el rango de validez.\r
      en: Use energy to check the validity range.\r
  rearrangements:\r
  - target: E\r
    equation: 0.5*L^2*theta_dot^2 + g*L*(1-cos(theta))\r
    latex: \\frac{1}{2}L^2(\\theta_{dot})^2 + g\\,L(1-\\cos(\\theta))\r
`;export{e as default};
