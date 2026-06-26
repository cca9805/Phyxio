const n=`version: 5\r
magnitudes:\r
- id: L\r
  symbol: L\r
  nombre:\r
    es: longitud\r
    en: length\r
  descripcion:\r
    es: Longitud del hilo o de la varilla idealizada.\r
    en: Length of the idealized string or rod.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: geometry\r
  physical_role: physical_quantity\r
  used_in:\r
  - omega0_ps\r
  - periodo_ps\r
  - ecuacion_angular_ps\r
  - ecuacion_no_lineal_ps\r
  - energia_ps\r
  common_mistake: Medirla desde el suelo en vez de desde el punto de suspensión.\r
  typical_range: "0.1 to 5 m in laboratory setups."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: La longitud es positiva por definición geométrica.\r
      en: Length is positive by geometric definition.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Longitud nula elimina el péndulo ideal.\r
      en: Zero length removes the ideal pendulum.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: [ 0.01, 100 ]\r
  interpretation_role:\r
    primary_for:\r
    - pendulo-simple\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - length_slider\r
  pedagogical_notes: A mayor L, más lento es el movimiento angular.\r
\r
- id: g\r
  symbol: g\r
  nombre:\r
    es: gravedad\r
    en: gravity\r
  descripcion:\r
    es: Aceleración gravitatoria local.\r
    en: Local gravitational acceleration.\r
  unidad_si: m/s^2\r
  dimension: L T^-2\r
  is_vector: false\r
  components: []\r
  category: field\r
  physical_role: physical_quantity\r
  used_in:\r
  - omega0_ps\r
  - periodo_ps\r
  - ecuacion_no_lineal_ps\r
  - energia_ps\r
  common_mistake: Usar un valor de g sin fijar planeta, altura o aproximación.\r
  typical_range: "9.7 to 9.9 m/s^2 near Earth's surface."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud positiva en este modelo.\r
      en: It is used as a positive magnitude in this model.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Sin gravedad no hay restauración pendular.\r
      en: Without gravity there is no pendular restoration.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: [ 0.1, 30 ]\r
  interpretation_role:\r
    primary_for:\r
    - pendulo-simple\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - gravity_slider\r
  pedagogical_notes: Cambiar g cambia el ritmo natural de oscilación.\r
\r
- id: theta\r
  symbol: \\theta\r
  nombre:\r
    es: desplazamiento angular\r
    en: angular displacement\r
  descripcion:\r
    es: Ángulo instantáneo respecto al equilibrio.\r
    en: Instantaneous angle relative to equilibrium.\r
  unidad_si: rad\r
  dimension: 1\r
  is_vector: false\r
  components: []\r
  category: state\r
  physical_role: physical_quantity\r
  used_in:\r
  - ecuacion_angular_ps\r
  - ecuacion_no_lineal_ps\r
  - energia_ps\r
  common_mistake: Tratar grados y radianes como equivalentes en el modelo lineal.\r
  typical_range: "small angles for the linear model; finite amplitudes for the nonlinear model."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica el lado del equilibrio.\r
      en: The sign indicates the side of equilibrium.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero marca el paso por equilibrio.\r
      en: Zero marks the passage through equilibrium.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: [ -3.2, 3.2 ]\r
  interpretation_role:\r
    primary_for:\r
    - pendulo-simple\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - angle_trace\r
  pedagogical_notes: Define si el modelo lineal sigue siendo aceptable.\r
\r
- id: theta0\r
  symbol: \\theta_0\r
  nombre:\r
    es: amplitud angular\r
    en: angular amplitude\r
  descripcion:\r
    es: Amplitud inicial del péndulo.\r
    en: Initial pendulum amplitude.\r
  unidad_si: rad\r
  dimension: 1\r
  is_vector: false\r
  components: []\r
  category: state\r
  physical_role: physical_quantity\r
  used_in:\r
  - ecuacion_angular_ps\r
  - ecuacion_no_lineal_ps\r
  - energia_ps\r
  common_mistake: Suponer que cualquier amplitud sirve para la aproximación lineal.\r
  typical_range: "very small to moderate angles depending on the model choice."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como amplitud positiva.\r
      en: It is used as a positive amplitude.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Amplitud nula elimina la oscilación.\r
      en: Zero amplitude removes the oscillation.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: [ 0, 3.2 ]\r
  interpretation_role:\r
    primary_for:\r
    - pendulo-simple\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - amplitude_slider\r
  pedagogical_notes: Si crece, el periodo real deja de coincidir con el lineal.\r
\r
- id: omega0\r
  symbol: \\omega_0\r
  nombre:\r
    es: pulsación natural\r
    en: natural angular frequency\r
  descripcion:\r
    es: Escala angular del movimiento en pequeñas oscilaciones.\r
    en: Angular scale of motion in small oscillations.\r
  unidad_si: rad/s\r
  dimension: T^-1\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - periodo_ps\r
  - frecuencia_ps\r
  - ecuacion_angular_ps\r
  - ecuacion_no_lineal_ps\r
  common_mistake: Confundirla con la frecuencia en Hz.\r
  typical_range: "positive and finite for the linear model."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se reporta como positiva.\r
      en: It is reported as positive.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Cero implicaría ausencia de restauración lineal.\r
      en: Zero would imply no linear restoration.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: [ 0, 100 ]\r
  interpretation_role:\r
    primary_for:\r
    - pendulo-simple\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - natural_rate\r
  pedagogical_notes: Resume el ritmo natural del sistema.\r
\r
- id: T\r
  symbol: T\r
  nombre:\r
    es: periodo\r
    en: period\r
  descripcion:\r
    es: Tiempo de una oscilación completa.\r
    en: Time of one full oscillation.\r
  unidad_si: s\r
  dimension: T\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - frecuencia_ps\r
  - periodo_ps\r
  - ecuacion_angular_ps\r
  - energia_ps\r
  common_mistake: Contar medio ciclo como si fuera un periodo completo.\r
  typical_range: "fractions of a second to tens of seconds depending on L and g."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: El periodo es siempre positivo.\r
      en: Period is always positive.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Un periodo nulo no describe una oscilación real.\r
      en: Zero period does not describe a real oscillation.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: [ 0, 100 ]\r
  interpretation_role:\r
    primary_for:\r
    - pendulo-simple\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - period_curve\r
  pedagogical_notes: Es la magnitud temporal más visible en laboratorio.\r
\r
- id: f\r
  symbol: f\r
  nombre:\r
    es: frecuencia\r
    en: frequency\r
  descripcion:\r
    es: Número de ciclos por segundo.\r
    en: Number of cycles per second.\r
  unidad_si: Hz\r
  dimension: T^-1\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - frecuencia_ps\r
  - ecuacion_angular_ps\r
  - energia_ps\r
  common_mistake: Compararla con omega0 sin convertir unidades.\r
  typical_range: "positive and finite for oscillatory motion."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud positiva.\r
      en: It is used as a positive magnitude.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: Frecuencia nula implica ausencia de oscilación periódica.\r
      en: Zero frequency implies no periodic oscillation.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: [ 0, 100 ]\r
  interpretation_role:\r
    primary_for:\r
    - pendulo-simple\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - frequency_curve\r
  pedagogical_notes: Facilita comparar el péndulo con otros osciladores.\r
\r
- id: t\r
  symbol: t\r
  nombre:\r
    es: tiempo\r
    en: time\r
  descripcion:\r
    es: Variable temporal del movimiento.\r
    en: Time variable of the motion.\r
  unidad_si: s\r
  dimension: T\r
  is_vector: false\r
  components: []\r
  category: state\r
  physical_role: physical_quantity\r
  used_in:\r
  - ecuacion_angular_ps\r
  - ecuacion_no_lineal_ps\r
  - energia_ps\r
  common_mistake: Tomar una instantánea como si fuera evolución completa.\r
  typical_range: "nonnegative during the observation window."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se toma positivo en el intervalo de observación.\r
      en: It is taken as positive in the observation window.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: t = 0 fija la condición inicial.\r
      en: t = 0 sets the initial condition.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: [ 0, 10000 ]\r
  interpretation_role:\r
    primary_for:\r
    - pendulo-simple\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - time_axis\r
  pedagogical_notes: Permite leer el movimiento como función continua.\r
\r
- id: phi\r
  symbol: \\varphi\r
  nombre:\r
    es: fase inicial\r
    en: initial phase\r
  descripcion:\r
    es: Desfase que fija el inicio de la oscilación.\r
    en: Phase shift that sets the oscillation start.\r
  unidad_si: rad\r
  dimension: 1\r
  is_vector: false\r
  components: []\r
  category: state\r
  physical_role: physical_quantity\r
  used_in:\r
  - ecuacion_angular_ps\r
  - ecuacion_no_lineal_ps\r
  common_mistake: Ignorar la fase y suponer que todas las soluciones arrancan igual.\r
  typical_range: "any real phase angle; bounded modulo 2π in practice."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Puede cambiar la posición temporal de máximos y mínimos.\r
      en: It can shift the timing of maxima and minima.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Fase cero define una referencia simple.\r
      en: Zero phase defines a simple reference.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: [ -6.3, 6.3 ]\r
  interpretation_role:\r
    primary_for:\r
    - pendulo-simple\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - phase_shift\r
  pedagogical_notes: Cambia el instante, no la física del periodo.\r
\r
- id: theta_dot\r
  symbol: \\dot\\theta\r
  nombre:\r
    es: velocidad angular\r
    en: angular velocity\r
  descripcion:\r
    es: Primera derivada temporal de theta.\r
    en: First time derivative of theta.\r
  unidad_si: rad/s\r
  dimension: T^-1\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - energia_ps\r
  common_mistake: Confundir velocidad angular con pulsación natural.\r
  typical_range: "changes sign at turning points."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica el sentido de giro.\r
      en: The sign indicates the direction of rotation.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Se anula en los extremos de la oscilación.\r
      en: It vanishes at the turning points.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: [ -100, 100 ]\r
  interpretation_role:\r
    primary_for:\r
    - pendulo-simple\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - angular_velocity\r
  pedagogical_notes: Relaciona amplitud con energía cinética.\r
\r
- id: theta_dd\r
  symbol: theta_dd\r
  nombre:\r
    es: aceleración angular\r
    en: angular acceleration\r
  descripcion:\r
    es: Segunda derivada temporal del ángulo.\r
    en: Second time derivative of the angle.\r
  unidad_si: rad/s^2\r
  dimension: T^-2\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - ecuacion_no_lineal_ps\r
  common_mistake: Tratarla como si fuera la frecuencia natural.\r
  typical_range: "changes sign through the oscillation."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Su signo refleja la restauración hacia el equilibrio.\r
      en: Its sign reflects restoration toward equilibrium.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Puede anularse en puntos concretos sin parar el movimiento.\r
      en: It may vanish at specific points without stopping motion.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: [ -500, 500 ]\r
  interpretation_role:\r
    primary_for:\r
    - pendulo-simple\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - angular_acceleration\r
  pedagogical_notes: Es la firma dinámica del torque neto.\r
\r
- id: E\r
  symbol: E\r
  nombre:\r
    es: energía mecánica\r
    en: mechanical energy\r
  descripcion:\r
    es: Suma de energía cinética y potencial ideal.\r
    en: Sum of ideal kinetic and potential energy.\r
  unidad_si: J\r
  dimension: M L^2 T^-2\r
  is_vector: false\r
  components: []\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
  - energia_ps\r
  - ecuacion_no_lineal_ps\r
  common_mistake: Olvidar la parte cinética cuando el sistema pasa por el equilibrio.\r
  typical_range: "nonnegative when the zero of potential is set at equilibrium."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se toma como magnitud positiva en esta convención.\r
      en: It is taken as a positive magnitude in this convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Puede anularse si la referencia se fija en equilibrio.\r
      en: It can be zero if the reference is set at equilibrium.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: [ 0, 100000 ]\r
  interpretation_role:\r
    primary_for:\r
    - pendulo-simple\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
    - energy_curve\r
  pedagogical_notes: Útil para amplitudes finitas y contraste de modelo.\r
`;export{n as default};
