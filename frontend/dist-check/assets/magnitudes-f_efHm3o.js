const n=`version: 1\r
magnitudes:\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: Masa del bloque\r
    en: Block mass\r
  descripcion:\r
    es: Cantidad de materia del cuerpo que se desplaza por el plano.\r
    en: Amount of matter of the body moving along the incline.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: parameter\r
  used_in:\r
  - descomposicion_paralela\r
  - descomposicion_perpendicular\r
  - normal_plano_ideal\r
  common_mistake:\r
    es: Pensar que la masa cambia la aceleración final en el modelo ideal.\r
    en: Thinking mass changes final acceleration in the ideal model.\r
  typical_range:\r
    es: 0.1 a 1000 kg en problemas didácticos y técnicos.\r
    en: 0.1 to 1000 kg in didactic and technical problems.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud positiva.\r
      en: Used as a positive magnitude.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: m = 0 no representa un cuerpo físico en este leaf.\r
      en: m = 0 does not represent a physical body in this leaf.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '> 0'\r
  interpretation_role:\r
    primary_for:\r
    - escala-de-fuerzas\r
    secondary_for:\r
    - validacion-de-datos\r
  graph_binding:\r
    channels:\r
    - mass_input\r
  pedagogical_notes:\r
    es: Se cancela en a, pero no en P ni en N.\r
    en: It cancels in a, but not in P or N.\r
- id: g\r
  symbol: g\r
  nombre:\r
    es: Aceleración gravitatoria\r
    en: Gravitational acceleration\r
  descripcion:\r
    es: Intensidad local del campo gravitatorio terrestre.\r
    en: Local intensity of the Earth's gravitational field.\r
  unidad_si: m/s^2\r
  dimension: LT^-2\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: parameter\r
  used_in:\r
  - descomposicion_paralela\r
  - descomposicion_perpendicular\r
  - aceleracion_plano_ideal\r
  common_mistake:\r
    es: Usar 10 sin indicar que se trata de una aproximación.\r
    en: Using 10 without stating it is an approximation.\r
  typical_range:\r
    es: 9.78 a 9.83 m/s^2 en la Tierra.\r
    en: 9.78 to 9.83 m/s^2 on Earth.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa el módulo positivo.\r
      en: Positive magnitude is used.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: g = 0 queda fuera del dominio terrestre del modelo.\r
      en: g = 0 is outside the terrestrial domain of the model.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '> 0'\r
  interpretation_role:\r
    primary_for:\r
    - escala-dinamica\r
    secondary_for:\r
    - comparacion-planetaria\r
  graph_binding:\r
    channels:\r
    - gravity_input\r
  pedagogical_notes:\r
    es: Es el factor de escala principal de la aceleración.\r
    en: It is the main scale factor for acceleration.\r
- id: theta\r
  symbol: \\theta\r
  nombre:\r
    es: Ángulo de inclinación\r
    en: Inclination angle\r
  descripcion:\r
    es: Ángulo entre el plano y la horizontal.\r
    en: Angle between the plane and the horizontal.\r
  unidad_si: rad\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: state\r
  physical_role: state\r
  used_in:\r
  - descomposicion_paralela\r
  - descomposicion_perpendicular\r
  - aceleracion_plano_ideal\r
  common_mistake:\r
    es: Mezclar grados y radianes en el cálculo trigonométrico.\r
    en: Mixing degrees and radians in trigonometric calculations.\r
  typical_range:\r
    es: 0 a 1.57 rad para rampas convencionales.\r
    en: 0 to 1.57 rad for conventional ramps.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se toma no negativo en esta convención.\r
      en: Taken as non-negative under this convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Si theta = 0, la componente paralela del peso es nula.\r
      en: If theta = 0, the parallel weight component is zero.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '[0, pi/2]'\r
  interpretation_role:\r
    primary_for:\r
    - control-geometrico\r
    secondary_for:\r
    - lectura-de-sensibilidad\r
  graph_binding:\r
    channels:\r
    - x_axis_angle\r
  pedagogical_notes:\r
    es: Es la variable de barrido principal en el gráfico Coord.\r
    en: It is the main sweep variable in the Coord graph.\r
- id: P\r
  symbol: P\r
  nombre:\r
    es: Peso total\r
    en: Total weight\r
  descripcion:\r
    es: Fuerza gravitatoria total aplicada al bloque.\r
    en: Total gravitational force acting on the block.\r
  unidad_si: N\r
  dimension: MLT^-2\r
  is_vector: true\r
  components:\r
  - P_par\r
  - P_perp\r
  category: fundamental\r
  physical_role: cause\r
  used_in:\r
  - descomposicion_paralela\r
  - descomposicion_perpendicular\r
  common_mistake:\r
    es: Confundir el peso total con su componente paralela.\r
    en: Confusing total weight with its parallel component.\r
  typical_range:\r
    es: Depende de m y g; normalmente 1 a 10000 N.\r
    en: Depends on m and g; typically 1 to 10000 N.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa módulo; la dirección se representa en el DCL.\r
      en: Magnitude is used; direction is represented in the FBD.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: P = 0 implicaría ausencia de masa o gravedad.\r
      en: P = 0 would imply absence of mass or gravity.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '> 0'\r
  interpretation_role:\r
    primary_for:\r
    - causa-primaria\r
    secondary_for:\r
    - descomposicion-vectorial\r
  graph_binding:\r
    channels:\r
    - weight_vector\r
  pedagogical_notes:\r
    es: En este leaf, la dinámica surge de su proyección sobre el plano.\r
    en: In this leaf, dynamics arises from its projection on the incline.\r
- id: P_par\r
  symbol: P_par\r
  nombre:\r
    es: Componente paralela del peso\r
    en: Parallel weight component\r
  descripcion:\r
    es: Parte del peso alineada con la dirección de deslizamiento.\r
    en: Portion of weight aligned with sliding direction.\r
  unidad_si: N\r
  dimension: MLT^-2\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: cause\r
  used_in:\r
  - descomposicion_paralela\r
  - aceleracion_plano_ideal\r
  common_mistake:\r
    es: Usar cos(theta) en lugar de sin(theta).\r
    en: Using cos(theta) instead of sin(theta).\r
  typical_range:\r
    es: 0 a mg según theta.\r
    en: 0 to mg depending on theta.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa el módulo positivo en esta convención.\r
      en: Positive magnitude is used in this convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Es cero si la superficie es horizontal.\r
      en: It is zero if the surface is horizontal.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - fuerza-motriz\r
    secondary_for:\r
    - lectura-causal\r
  graph_binding:\r
    channels:\r
    - driving_force\r
  pedagogical_notes:\r
    es: Es la magnitud que realmente acelera al bloque en x.\r
    en: It is the magnitude that truly accelerates the block along x.\r
- id: P_perp\r
  symbol: P_perp\r
  nombre:\r
    es: Componente perpendicular del peso\r
    en: Perpendicular weight component\r
  descripcion:\r
    es: Parte del peso que comprime el bloque contra el plano.\r
    en: Portion of weight pressing the block against the incline.\r
  unidad_si: N\r
  dimension: MLT^-2\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: constraint\r
  used_in:\r
  - descomposicion_perpendicular\r
  - normal_plano_ideal\r
  common_mistake:\r
    es: Tomarla como responsable de acelerar en la dirección del plano.\r
    en: Taking it as responsible for accelerating along the incline.\r
  typical_range:\r
    es: 0 a mg según theta.\r
    en: 0 to mg depending on theta.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se maneja como módulo positivo.\r
      en: It is handled as a positive magnitude.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Tiende a cero cuando theta se acerca a 90 grados.\r
      en: Tends to zero as theta approaches 90 degrees.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - cierre-en-y\r
    secondary_for:\r
    - estimacion-de-contacto\r
  graph_binding:\r
    channels:\r
    - normal_projection\r
  pedagogical_notes:\r
    es: Determina directamente el valor de la normal en el modelo ideal.\r
    en: Directly determines the normal value in the ideal model.\r
- id: N\r
  symbol: N\r
  nombre:\r
    es: Fuerza normal\r
    en: Normal force\r
  descripcion:\r
    es: Fuerza de contacto perpendicular al plano ejercida por la superficie.\r
    en: Contact force perpendicular to the incline exerted by the surface.\r
  unidad_si: N\r
  dimension: MLT^-2\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: constraint\r
  used_in:\r
  - normal_plano_ideal\r
  common_mistake:\r
    es: Igualarla siempre al peso total mg.\r
    en: Always setting it equal to total weight mg.\r
  typical_range:\r
    es: 0 a mg.\r
    en: 0 to mg.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud positiva de reacción.\r
      en: Used as positive reaction magnitude.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: N = 0 en el límite de plano vertical sin apoyo.\r
      en: N = 0 at the vertical-plane support limit.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - reaccion-de-apoyo\r
    secondary_for:\r
    - control-de-consistencia\r
  graph_binding:\r
    channels:\r
    - normal_vector\r
  pedagogical_notes:\r
    es: Es esencial para interpretar el DCL aunque no cause aceleración en x.\r
    en: It is essential for FBD reading even if it does not cause x-acceleration.\r
- id: a\r
  symbol: a\r
  nombre:\r
    es: Aceleración del bloque\r
    en: Block acceleration\r
  descripcion:\r
    es: Tasa de cambio de velocidad del bloque a lo largo de la pendiente.\r
    en: Rate of change of block velocity along the incline.\r
  unidad_si: m/s^2\r
  dimension: LT^-2\r
  is_vector: false\r
  components: null\r
  category: state\r
  physical_role: dependent\r
  used_in:\r
  - aceleracion_plano_ideal\r
  - tiempo_deslizamiento\r
  - velocidad_final_desde_reposo\r
  common_mistake:\r
    es: Darla negativa por error de convenio sin revisar ejes.\r
    en: Giving it negative due to convention errors without checking axes.\r
  typical_range:\r
    es: 0 a g en este modelo.\r
    en: 0 to g in this model.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se reporta como módulo en el sentido positivo elegido.\r
      en: Reported as magnitude in the chosen positive direction.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: a = 0 cuando theta = 0.\r
      en: a = 0 when theta = 0.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '[0, g]'\r
  interpretation_role:\r
    primary_for:\r
    - resultado-principal\r
    secondary_for:\r
    - comparacion-entre-rampas\r
  graph_binding:\r
    channels:\r
    - y_axis_acceleration\r
  pedagogical_notes:\r
    es: Resume la traducción entre geometría y dinámica.\r
    en: It summarizes the translation between geometry and dynamics.\r
- id: L\r
  symbol: L\r
  nombre:\r
    es: Longitud recorrida en la rampa\r
    en: Travel distance along ramp\r
  descripcion:\r
    es: Distancia medida sobre la superficie inclinada.\r
    en: Distance measured along the inclined surface.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: state\r
  physical_role: state\r
  used_in:\r
  - tiempo_deslizamiento\r
  - velocidad_final_desde_reposo\r
  common_mistake:\r
    es: Confundirla con altura vertical h.\r
    en: Confusing it with vertical height h.\r
  typical_range:\r
    es: 0.1 a 100 m en ejercicios estándar.\r
    en: 0.1 to 100 m in standard exercises.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como distancia positiva.\r
      en: Used as positive distance.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: L = 0 no describe desplazamiento útil.\r
      en: L = 0 does not describe useful displacement.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '> 0'\r
  interpretation_role:\r
    primary_for:\r
    - escala-de-recorrido\r
    secondary_for:\r
    - calculo-cinematico\r
  graph_binding:\r
    channels:\r
    - distance_input\r
  pedagogical_notes:\r
    es: Es la variable espacial usada en las ecuaciones de descenso.\r
    en: It is the spatial variable used in descent equations.\r
- id: t\r
  symbol: t\r
  nombre:\r
    es: Tiempo de descenso\r
    en: Descent time\r
  descripcion:\r
    es: Tiempo requerido para recorrer una longitud L desde reposo.\r
    en: Time required to travel length L from rest.\r
  unidad_si: s\r
  dimension: T\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: dependent\r
  used_in:\r
  - tiempo_deslizamiento\r
  common_mistake:\r
    es: Usar fórmula de MRU cuando hay aceleración constante no nula.\r
    en: Using constant-speed formula when acceleration is non-zero.\r
  typical_range:\r
    es: 0.1 a 60 s según L y theta.\r
    en: 0.1 to 60 s depending on L and theta.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: El tiempo físico se toma positivo.\r
      en: Physical time is taken as positive.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: t = 0 solo corresponde al instante inicial.\r
      en: t = 0 only corresponds to the initial instant.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '> 0'\r
  interpretation_role:\r
    primary_for:\r
    - lectura-temporal\r
    secondary_for:\r
    - planificacion-operativa\r
  graph_binding:\r
    channels:\r
    - time_output\r
  pedagogical_notes:\r
    es: Debe interpretarse junto con L y a, no de forma aislada.\r
    en: It should be interpreted with L and a, not in isolation.\r
- id: v_f\r
  symbol: v_f\r
  nombre:\r
    es: Velocidad final\r
    en: Final speed\r
  descripcion:\r
    es: Velocidad del bloque al final del tramo analizado.\r
    en: Block speed at the end of the analyzed segment.\r
  unidad_si: m/s\r
  dimension: LT^-1\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: dependent\r
  used_in:\r
  - velocidad_final_desde_reposo\r
  common_mistake:\r
    es: Interpretarla como media en lugar de valor final instantáneo.\r
    en: Interpreting it as average instead of final instantaneous value.\r
  typical_range:\r
    es: 0 a 60 m/s en contextos didácticos.\r
    en: 0 to 60 m/s in didactic contexts.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se informa como módulo de rapidez en el sentido elegido.\r
      en: Reported as speed magnitude in the chosen direction.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Puede ser cero si no hay recorrido o no hay aceleración.\r
      en: It can be zero if there is no path or no acceleration.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - resultado-cinematico\r
    secondary_for:\r
    - criterio-de-seguridad\r
  graph_binding:\r
    channels:\r
    - speed_output\r
  pedagogical_notes:\r
    es: Es clave para estimar impacto y control al final de la rampa.\r
    en: It is key to estimate impact and control at the end of the ramp.\r
- id: v\r
  symbol: v\r
  nombre:\r
    es: Velocidad instantánea\r
    en: Instantaneous speed\r
  descripcion:\r
    es: Rapidez del bloque en cualquier punto de su trayectoria.\r
    en: Block speed at any point of its trajectory.\r
  unidad_si: m/s\r
  dimension: LT^-1\r
  is_vector: false\r
  components: null\r
  category: state\r
  physical_role: state\r
  used_in: []\r
  common_mistake:\r
    es: Confundirla con la velocidad media en el tramo.\r
    en: Confusing it with average speed along the segment.\r
  typical_range:\r
    es: 0 a 60 m/s en contextos didácticos.\r
    en: 0 to 60 m/s in didactic contexts.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se reporta como módulo de rapidez.\r
      en: Reported as speed magnitude.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: El bloque está instantáneamente en reposo.\r
      en: The block is instantaneously at rest.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - estado-cinematico\r
    secondary_for:\r
    - validacion-de-limites\r
  graph_binding:\r
    channels:\r
    - velocity_input\r
  pedagogical_notes:\r
    es: Se usa para evaluar límites de validez de modelos (ej. resistencia del aire).\r
    en: Used to evaluate model validity limits (e.g., air resistance).\r
`;export{n as default};
