const n=`version: 1\r
magnitudes:\r
- id: mu_e\r
  symbol: \\mu_e\r
  nombre:\r
    es: Coeficiente de rozamiento estático\r
    en: Static friction coefficient\r
  descripcion:\r
    es: Límite adimensional que determina la máxima fuerza tangencial sin deslizamiento.\r
    en: Dimensionless limit that sets maximum tangential force before slipping.\r
  unidad_si: '1'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: parameter\r
  used_in:\r
  - umbral_reposo\r
  - angulo_critico\r
  common_mistake:\r
    es: Usarlo en movimiento cuando el bloque ya desliza.\r
    en: Using it during motion after the block is already sliding.\r
  typical_range:\r
    es: 0.10 a 1.20 para contactos sólidos típicos.\r
    en: 0.10 to 1.20 for typical solid contacts.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Siempre no negativo.\r
      en: Always non-negative.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Si vale cero no hay agarre estático.\r
      en: If zero there is no static grip.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - criterio-deslizamiento\r
    secondary_for:\r
    - validacion-de-datos\r
  graph_binding:\r
    channels:\r
    - threshold\r
  pedagogical_notes:\r
    es: Conecta con el ángulo crítico por tan(theta_c)=mu_e.\r
    en: Connects with critical angle through tan(theta_c)=mu_e.\r
- id: mu_c\r
  symbol: \\mu_c\r
  nombre:\r
    es: Coeficiente de rozamiento cinético\r
    en: Kinetic friction coefficient\r
  descripcion:\r
    es: Relación entre fuerza de rozamiento en deslizamiento y normal de contacto.\r
    en: Ratio between sliding friction force and contact normal.\r
  unidad_si: '1'\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: parameter\r
  used_in:\r
  - friccion_cinetica\r
  - aceleracion_plano_rozamiento\r
  common_mistake:\r
    es: Tomarlo igual a mu_e sin justificar experimentalmente.\r
    en: Assuming it is equal to mu_e without experimental justification.\r
  typical_range:\r
    es: 0.05 a 1.00 según materiales y estado superficial.\r
    en: 0.05 to 1.00 depending on materials and surface state.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud positiva.\r
      en: Used as a positive magnitude.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Si vale cero el modelo reduce al caso sin rozamiento cinético.\r
      en: If zero, model reduces to frictionless kinetic case.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-disipacion\r
    secondary_for:\r
    - comparacion-de-materiales\r
  graph_binding:\r
    channels:\r
    - damping\r
  pedagogical_notes:\r
    es: Controla la pendiente de a(theta) para un mismo g.\r
    en: Controls a(theta) slope for the same g.\r
- id: theta\r
  symbol: \\theta\r
  nombre:\r
    es: Ángulo de inclinación\r
    en: Inclination angle\r
  descripcion:\r
    es: Inclinación geométrica del plano respecto de la horizontal.\r
    en: Geometric inclination of the plane relative to horizontal.\r
  unidad_si: rad\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: state\r
  physical_role: state\r
  used_in:\r
  - aceleracion_plano_rozamiento\r
  - umbral_reposo\r
  - angulo_critico\r
  common_mistake:\r
    es: Mezclar grados y radianes sin convertir.\r
    en: Mixing degrees and radians without conversion.\r
  typical_range:\r
    es: 0 a 1.57 rad para problemas de rampa.\r
    en: 0 to 1.57 rad for ramp problems.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se toma no negativo en esta convención.\r
      en: Taken as non-negative in this convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Si theta=0 no hay componente del peso a lo largo del plano.\r
      en: If theta=0 there is no along-plane weight component.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '[0, pi/2]'\r
  interpretation_role:\r
    primary_for:\r
    - control-geométrico\r
    secondary_for:\r
    - comparacion-con-theta-crit\r
  graph_binding:\r
    channels:\r
    - x_axis_angle\r
  pedagogical_notes:\r
    es: Es la variable de barrido principal en el gráfico de coordenadas.\r
    en: It is the main sweep variable in the coordinate graph.\r
- id: N\r
  symbol: N\r
  nombre:\r
    es: Fuerza normal\r
    en: Normal force\r
  descripcion:\r
    es: Fuerza de contacto perpendicular al plano ejercida sobre el bloque.\r
    en: Contact force perpendicular to the plane exerted on the block.\r
  unidad_si: N\r
  dimension: MLT^-2\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: state\r
  used_in:\r
  - friccion_cinetica\r
  common_mistake:\r
    es: Igualarla a mg incluso en plano inclinado.\r
    en: Setting it equal to mg even on an inclined plane.\r
  typical_range:\r
    es: 0 a mg según ángulo.\r
    en: 0 to mg depending on angle.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: En este leaf se usa su módulo positivo.\r
      en: In this leaf its positive magnitude is used.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: En límite vertical N tiende a cero.\r
      en: In vertical limit N tends to zero.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - cierre-de-fuerzas\r
    secondary_for:\r
    - consistencia-de-friccion\r
  graph_binding:\r
    channels:\r
    - support_reaction\r
  pedagogical_notes:\r
    es: Se obtiene con balance en el eje perpendicular al plano.\r
    en: Obtained from force balance normal to the plane.\r
- id: f_r\r
  symbol: f_r\r
  nombre:\r
    es: Fuerza de rozamiento\r
    en: Friction force\r
  descripcion:\r
    es: Fuerza tangencial que se opone al deslizamiento o su tendencia.\r
    en: Tangential force opposing sliding or its tendency.\r
  unidad_si: N\r
  dimension: MLT^-2\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: state\r
  used_in:\r
  - friccion_cinetica\r
  - aceleracion_plano_rozamiento\r
  common_mistake:\r
    es: Fijar su sentido sin estudiar la tendencia de movimiento.\r
    en: Fixing direction without analyzing motion tendency.\r
  typical_range:\r
    es: 0 a mu_e*N en estático y mu_c*N en cinético.\r
    en: 0 to mu_e*N in static and mu_c*N in kinetic regime.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Su signo depende del eje y convenio elegido.\r
      en: Sign depends on chosen axis and convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Puede ser nula si no hay contacto efectivo o mu=0.\r
      en: Can be zero if no effective contact or mu=0.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-disipacion\r
    secondary_for:\r
    - diagnostico-de-regimen\r
  graph_binding:\r
    channels:\r
    - resisting_force\r
  pedagogical_notes:\r
    es: Debe oponerse al movimiento real o inminente.\r
    en: Must oppose real or incipient motion.\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: Masa\r
    en: Mass\r
  descripcion:\r
    es: Cantidad de materia del bloque deslizante.\r
    en: Amount of matter of the sliding block.\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: parameter\r
  used_in:\r
  - friccion_cinetica\r
  - aceleracion_plano_rozamiento\r
  common_mistake:\r
    es: Suponer que modifica a cuando el modelo es lineal en m.\r
    en: Assuming it changes a when model is linear in m.\r
  typical_range:\r
    es: 0.1 a 1000 kg en aplicaciones didácticas e ingenieriles.\r
    en: 0.1 to 1000 kg in didactic and engineering applications.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Siempre positiva.\r
      en: Always positive.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: m=0 no representa cuerpo físico en este leaf.\r
      en: m=0 does not represent a physical body in this leaf.\r
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
    es: Cancela en la expresión de a pero no en N ni f_r.\r
    en: Cancels in a expression but not in N nor f_r.\r
- id: g\r
  symbol: g\r
  nombre:\r
    es: Aceleración gravitatoria\r
    en: Gravitational acceleration\r
  descripcion:\r
    es: Intensidad del campo gravitatorio local.\r
    en: Intensity of local gravitational field.\r
  unidad_si: m/s^2\r
  dimension: LT^-2\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: parameter\r
  used_in:\r
  - aceleracion_plano_rozamiento\r
  common_mistake:\r
    es: Usar 10 sin indicar aproximación cuando se exige precisión.\r
    en: Using 10 without declaring approximation when precision is required.\r
  typical_range:\r
    es: 9.78 a 9.83 m/s^2 en la Tierra.\r
    en: 9.78 to 9.83 m/s^2 on Earth.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa módulo positivo.\r
      en: Positive magnitude is used.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: g=0 sale del dominio de este modelo terrestre.\r
      en: g=0 is outside this terrestrial model domain.\r
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
    es: Fija escala de aceleración para cualquier theta y mu_c.\r
    en: Sets acceleration scale for any theta and mu_c.\r
- id: a\r
  symbol: a\r
  nombre:\r
    es: Aceleración del bloque\r
    en: Block acceleration\r
  descripcion:\r
    es: Respuesta dinámica a lo largo del plano con rozamiento cinético.\r
    en: Dynamic response along incline with kinetic friction.\r
  unidad_si: m/s^2\r
  dimension: LT^-2\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: dependent\r
  used_in:\r
  - aceleracion_plano_rozamiento\r
  common_mistake:\r
    es: Interpretar signo negativo como subida espontánea sin fuerza externa.\r
    en: Interpreting negative sign as spontaneous upward motion without external force.\r
  typical_range:\r
    es: Aproximadamente entre -g y g para problemas estándar.\r
    en: Roughly between -g and g for standard problems.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo indica sentido respecto al eje elegido sobre el plano.\r
      en: Sign indicates direction relative to chosen axis on incline.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: a=0 marca equilibrio dinámico o velocidad constante.\r
      en: a=0 marks dynamic balance or constant speed.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - resultado-principal\r
    secondary_for:\r
    - chequeo-de-regimen\r
  graph_binding:\r
    channels:\r
    - y_axis_acceleration\r
  pedagogical_notes:\r
    es: Debe leerse junto a theta y mu_c, no de forma aislada.\r
    en: Must be read together with theta and mu_c, not in isolation.\r
- id: theta_c\r
  symbol: \\theta_c\r
  nombre:\r
    es: Ángulo crítico de deslizamiento\r
    en: Critical sliding angle\r
  descripcion:\r
    es: Umbral angular a partir del cual no se sostiene el reposo estático.\r
    en: Angular threshold above which static rest cannot be sustained.\r
  unidad_si: rad\r
  dimension: '1'\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: threshold\r
  used_in:\r
  - angulo_critico\r
  - umbral_reposo\r
  common_mistake:\r
    es: Comparar theta en grados con theta_c en radianes.\r
    en: Comparing theta in degrees with theta_c in radians.\r
  typical_range:\r
    es: 0 a 1.57 rad según material.\r
    en: 0 to 1.57 rad depending on material.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa valor angular no negativo.\r
      en: Used as non-negative angular value.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Si es cero, cualquier inclinación positiva desliza.\r
      en: If zero, any positive incline slips.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '[0, pi/2]'\r
  interpretation_role:\r
    primary_for:\r
    - criterio-de-estabilidad\r
    secondary_for:\r
    - diseño-de-seguridad\r
  graph_binding:\r
    channels:\r
    - critical_marker\r
  pedagogical_notes:\r
    es: Resume en un único número la adherencia estática del contacto.\r
    en: Summarizes static grip of the contact in a single number.\r
- id: f_s_max\r
  symbol: f_{s,max}\r
  nombre:\r
    es: Fuerza de rozamiento estático máximo\r
    en: Maximum static friction force\r
  descripcion:\r
    es: Valor límite del agarre tangencial antes del inicio del deslizamiento.\r
    en: Limit value of tangential grip before the onset of sliding.\r
  unidad_si: N\r
  dimension: MLT^-2\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: threshold\r
  used_in:\r
  - friccion_estatica_maxima\r
  - umbral_reposo\r
  common_mistake:\r
    es: Confundirla con la fuerza de rozamiento estática instantánea.\r
    en: Confusing it with the instantaneous static friction force.\r
  typical_range:\r
    es: 0 a mu_e*N según carga y materiales.\r
    en: 0 to mu_e*N depending on load and materials.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa su módulo positivo como valor umbral.\r
      en: Its positive magnitude is used as a threshold value.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Si es cero, el bloque desliza ante cualquier fuerza tangencial.\r
      en: If zero, the block slides under any tangential force.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - criterio-deslizamiento\r
    secondary_for:\r
    - seguridad-estática\r
  graph_binding:\r
    channels:\r
    - static_limit\r
  pedagogical_notes:\r
    es: Es el "techo" de la fuerza de rozamiento antes de la transición al régimen cinético.\r
    en: It is the "ceiling" of the friction force before the transition to the kinetic regime.\r
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
    es: Se usa para evaluar límites de validez de modelos (ej. calentamiento por fricción).\r
    en: Used to evaluate model validity limits (e.g., friction heating).\r
`;export{n as default};
