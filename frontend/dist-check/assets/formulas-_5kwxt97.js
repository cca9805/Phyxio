const e=`version: 1\r
ui:\r
  default_formula: periodo_pf\r
formulas:\r
- id: omega0_pf\r
  title:\r
    es: Pulsacion natural del pendulo fisico\r
    en: Natural angular frequency of the physical pendulum\r
  equation: omega0 = sqrt((m*g*d)/I)\r
  latex: \\omega_0 = \\sqrt{\\frac{mgd}{I}}\r
  rearrangements:\r
  - target: omega0\r
    equation: omega0 = sqrt((m*g*d)/I)\r
    latex: \\omega_0 = \\sqrt{\\frac{mgd}{I}}\r
    constraints:\r
    - I > 0\r
    - m > 0\r
    - d > 0\r
  - target: I\r
    equation: I = (m*g*d)/(omega0^2)\r
    latex: I = \\frac{mgd}{\\omega_0^2}\r
    constraints:\r
    - omega0 > 0\r
  - target: d\r
    equation: d = (I*omega0^2)/(m*g)\r
    latex: d = \\frac{I\\omega_0^2}{mg}\r
    constraints:\r
    - m > 0\r
    - g > 0\r
  category: fundamental\r
  relation_type: characteristic_relation\r
  physical_meaning:\r
    es: Relaciona inercia y torque gravitatorio para fijar la rapidez angular propia en angulos pequenos.\r
    en: Relates inertia and gravitational torque to set intrinsic angular rate in small-angle motion.\r
  constraints: I > 0, m > 0, d > 0, g > 0 y aproximacion de angulos pequenos.\r
  validity:\r
    es: Valida para oscilaciones pequenas alrededor del equilibrio y eje de giro fijo.\r
    en: Valid for small oscillations around equilibrium with fixed pivot axis.\r
  dimension_check: "[T^-1] = sqrt(([kg]*[m/s^2]*[m])/[kg*m^2])"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - aplicaciones\r
  interpretation_tags:\r
  - ritmo_natural\r
  - inercia_vs_gravedad\r
  result_semantics:\r
    target: omega0\r
    kind: characteristic_rate\r
    sign_meaning:\r
      es: Se usa positiva como rapidez angular caracteristica.\r
      en: It is used as a positive characteristic angular rate.\r
    absolute_value_meaning:\r
      es: Mayor valor implica oscilacion mas rapida.\r
      en: Larger value implies faster oscillation.\r
  domain_checks:\r
  - expr: I > 0\r
    message:\r
      es: El momento de inercia debe ser positivo.\r
      en: Moment of inertia must be positive.\r
  - expr: d > 0\r
    message:\r
      es: La distancia al centro de masas debe ser positiva.\r
      en: Pivot-to-center distance must be positive.\r
  coherence_checks:\r
  - expr: result > 0\r
    message:\r
      es: La pulsacion natural debe resultar positiva.\r
      en: Natural angular frequency must be positive.\r
  graph_implications:\r
  - Si I aumenta con m, g y d fijos, la oscilacion angular se vuelve mas lenta.\r
  pedagogical_triggers:\r
  - when: result > 10\r
    message:\r
      es: Comprueba si la aproximacion de angulos pequenos sigue siendo razonable.\r
      en: Verify whether the small-angle approximation still holds.\r
\r
- id: periodo_pf\r
  title:\r
    es: Periodo del pendulo fisico\r
    en: Period of the physical pendulum\r
  equation: T = 2*pi*sqrt(I/(m*g*d))\r
  latex: T = 2\\pi\\sqrt{\\frac{I}{mgd}}\r
  rearrangements:\r
  - target: T\r
    equation: T = 2*pi*sqrt(I/(m*g*d))\r
    latex: T = 2\\pi\\sqrt{\\frac{I}{mgd}}\r
    constraints:\r
    - I > 0\r
    - m > 0\r
    - d > 0\r
  - target: I\r
    equation: I = (T^2*m*g*d)/(4*pi^2)\r
    latex: I = \\frac{T^2mgd}{4\\pi^2}\r
    constraints:\r
    - T > 0\r
  - target: d\r
    equation: d = (4*pi^2*I)/(T^2*m*g)\r
    latex: d = \\frac{4\\pi^2I}{T^2mg}\r
    constraints:\r
    - T > 0\r
    - m > 0\r
  category: fundamental\r
  relation_type: period_relation\r
  physical_meaning:\r
    es: Traduce geometria e inercia del cuerpo en escala temporal de una oscilacion completa.\r
    en: Converts body geometry and inertia into the time scale of one full oscillation.\r
  constraints: I > 0, m > 0, d > 0 y oscilacion de pequena amplitud.\r
  validity:\r
    es: Valida cuando el sistema oscila con angulos pequenos y disipacion secundaria.\r
    en: Valid when the system oscillates at small angles with secondary dissipation.\r
  dimension_check: "[s] = sqrt([kg*m^2]/([kg]*[m/s^2]*[m]))"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - aplicaciones\r
  interpretation_tags:\r
  - escala_temporal\r
  - comparacion_experimental\r
  result_semantics:\r
    target: T\r
    kind: characteristic_time\r
    sign_meaning:\r
      es: El periodo es una duracion positiva por ciclo.\r
      en: Period is a positive cycle duration.\r
    absolute_value_meaning:\r
      es: Valores altos implican oscilacion mas lenta.\r
      en: Larger values imply slower oscillation.\r
  domain_checks:\r
  - expr: m > 0\r
    message:\r
      es: La masa debe ser positiva.\r
      en: Mass must be positive.\r
  - expr: g > 0\r
    message:\r
      es: La gravedad debe ser positiva.\r
      en: Gravity must be positive.\r
  coherence_checks:\r
  - expr: result > 0\r
    message:\r
      es: El periodo calculado debe ser mayor que cero.\r
      en: Computed period must be greater than zero.\r
  graph_implications:\r
  - El tiempo entre picos angulares consecutivos de theta(t) debe aproximar T.\r
  pedagogical_triggers:\r
  - when: result > 8\r
    message:\r
      es: Revisa si el eje y la distancia d fueron medidos correctamente.\r
      en: Check whether pivot axis and distance d were measured correctly.\r
\r
- id: frecuencia_pf\r
  title:\r
    es: Frecuencia del pendulo fisico\r
    en: Frequency of the physical pendulum\r
  equation: f = 1/T\r
  latex: f = \\frac{1}{T}\r
  rearrangements:\r
  - target: f\r
    equation: f = 1/T\r
    latex: f = \\frac{1}{T}\r
    constraints:\r
    - T > 0\r
  - target: T\r
    equation: T = 1/f\r
    latex: T = \\frac{1}{f}\r
    constraints:\r
    - f > 0\r
  category: derived\r
  relation_type: inverse_relation\r
  physical_meaning:\r
    es: Expresa cuantos ciclos angulares completos se repiten por segundo.\r
    en: Expresses how many full angular cycles repeat per second.\r
  constraints: T > 0 para evitar division por cero.\r
  validity:\r
    es: Valida para movimientos periodicos en regimen lineal.\r
    en: Valid for periodic motion in linear regime.\r
  dimension_check: "[Hz] = [s^-1]"\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - teoria\r
  - ejemplos\r
  - aplicaciones\r
  interpretation_tags:\r
  - ciclos_por_segundo\r
  - conversion_periodo\r
  result_semantics:\r
    target: f\r
    kind: cycle_rate\r
    sign_meaning:\r
      es: Se interpreta positiva como conteo de ciclos.\r
      en: It is interpreted as a positive cycle count.\r
    absolute_value_meaning:\r
      es: Mayor valor implica mayor cantidad de ciclos por segundo.\r
      en: Larger value implies more cycles per second.\r
  domain_checks:\r
  - expr: T > 0\r
    message:\r
      es: El periodo debe ser positivo.\r
      en: Period must be positive.\r
  coherence_checks:\r
  - expr: result > 0\r
    message:\r
      es: La frecuencia debe resultar positiva.\r
      en: Frequency must be positive.\r
  graph_implications:\r
  - Una ventana temporal fija contiene aproximadamente f veces ese numero de ciclos.\r
  pedagogical_triggers:\r
  - when: result > 3\r
    message:\r
      es: Verifica resolucion temporal del registro experimental.\r
      en: Verify temporal resolution of experimental acquisition.\r
\r
- id: ecuacion_no_lineal_pf\r
  title:\r
    es: Ecuacion angular no lineal del pendulo fisico\r
    en: Nonlinear angular equation of the physical pendulum\r
  equation: I*theta_dd + m*g*d*sin(theta) = 0\r
  latex: I\\theta_{dd} + mgd\\sin(\\theta) = 0\r
  rearrangements: []\r
  category: structural\r
  relation_type: differential_relation\r
  physical_meaning:\r
    es: Conecta aceleracion angular con torque gravitatorio sin linealizar el seno del angulo.\r
    en: Connects angular acceleration with gravitational torque without linearising sine.\r
  constraints: Requiere condiciones iniciales y solucion analitica aproximada o integracion numerica.\r
  validity:\r
    es: Aplica para amplitudes generales, incluyendo regimen fuera de angulos pequenos.\r
    en: Applies to general amplitudes, including regimes beyond small-angle assumptions.\r
  dimension_check: "[kg*m^2]*[rad/s^2] y [kg]*[m/s^2]*[m] tienen misma dimension dinamica"\r
  calculable: false\r
  motivo_no_calculable: Es una ecuacion diferencial no lineal y no se resuelve con despeje algebraico directo del leaf.\r
  used_in:\r
  - teoria\r
  - modelos\r
  - errores\r
  interpretation_tags:\r
  - no_linealidad\r
  - torque_restaurador\r
  result_semantics:\r
    target: theta_dd\r
    kind: dynamic_response\r
    sign_meaning:\r
      es: El signo de theta_dd depende del sentido del torque neto respecto a theta.\r
      en: Sign of theta_dd depends on net torque direction relative to theta.\r
    absolute_value_meaning:\r
      es: Mayor modulo indica cambio angular mas brusco.\r
      en: Larger magnitude indicates sharper angular change.\r
  domain_checks:\r
  - expr: I > 0\r
    message:\r
      es: I debe ser positiva para dinamica fisica valida.\r
      en: I must be positive for physically valid dynamics.\r
  coherence_checks:\r
  - expr: true\r
    message:\r
      es: Comprueba consistencia de unidades y convencion de signos antes de integrar.\r
      en: Check unit consistency and sign convention before integrating.\r
  graph_implications:\r
  - Para amplitudes grandes, la senal theta(t) deja de ser sinusoidal perfecta.\r
  pedagogical_triggers:\r
  - when: true\r
    message:\r
      es: Si la amplitud crece, evalua pasar de aproximacion lineal a modelo no lineal.\r
      en: If amplitude grows, consider moving from linear approximation to nonlinear model.\r
`;export{e as default};
