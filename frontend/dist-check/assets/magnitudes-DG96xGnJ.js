const n=`version: 1\r
magnitudes:\r
- id: omega\r
  symbol: omega\r
  nombre:\r
    es: velocidad angular\r
    en: angular velocity\r
  descripcion:\r
    es: Rapidez de giro instantanea del sistema alrededor del eje.\r
    en: Instantaneous rotation rate around the axis.\r
  unidad_si: rad/s\r
  dimension: T^-1\r
  is_vector: false\r
  components: null\r
  category: state\r
  physical_role: state\r
  used_in:\r
  - dinamica_rotacional\r
  - torque_viscoso\r
  - energia_rotacional\r
  common_mistake:\r
    es: Mezclar rpm con rad/s sin conversion previa.\r
    en: Mixing rpm with rad/s without conversion.\r
  typical_range:\r
    es: 0.5 a 300 rad/s en problemas docentes.\r
    en: 0.5 to 300 rad/s in teaching problems.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo representa el sentido de giro.\r
      en: Sign represents rotation direction.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Si vale cero el sistema esta en reposo angular.\r
      en: If zero the system is at angular rest.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - summary\r
    - coherence\r
    secondary_for:\r
    - likely_errors\r
  graph_binding:\r
    channels:\r
    - omega\r
  pedagogical_notes:\r
    es: Declarar convenio de signo antes de interpretar torque.\r
    en: Declare sign convention before interpreting torque.\r
- id: omega0\r
  symbol: omega0\r
  nombre:\r
    es: velocidad angular inicial\r
    en: initial angular velocity\r
  descripcion:\r
    es: Valor de velocidad angular en el instante inicial.\r
    en: Angular velocity at initial instant.\r
  unidad_si: rad/s\r
  dimension: T^-1\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: parameter\r
  used_in:\r
  - decaimiento_exponencial\r
  common_mistake:\r
    es: Usar omega0 con signo opuesto al convenio definido.\r
    en: Using omega0 with opposite sign convention.\r
  typical_range:\r
    es: 1 a 500 rad/s segun el caso.\r
    en: 1 to 500 rad/s depending on case.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Debe mantener el mismo convenio que omega.\r
      en: Must follow same convention as omega.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Si es cero no hay evolucion de frenado por inercia inicial.\r
      en: If zero there is no initial-spin decay process.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - model_validity\r
    secondary_for:\r
    - next_step\r
  graph_binding:\r
    channels:\r
    - omega_initial\r
  pedagogical_notes:\r
    es: Verificar instante de referencia de la medicion.\r
    en: Verify measurement reference instant.\r
- id: alpha\r
  symbol: alpha\r
  nombre:\r
    es: aceleracion angular\r
    en: angular acceleration\r
  descripcion:\r
    es: Variacion temporal de la velocidad angular.\r
    en: Time variation of angular velocity.\r
  unidad_si: rad/s^2\r
  dimension: T^-2\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: state\r
  used_in:\r
  - dinamica_rotacional\r
  common_mistake:\r
    es: Asumir que alpha es constante sin revisar torques.\r
    en: Assuming constant alpha without checking torques.\r
  typical_range:\r
    es: -200 a 200 rad/s^2 en practicas comunes.\r
    en: -200 to 200 rad/s^2 in common labs.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Signo negativo indica frenado bajo convenio usual.\r
      en: Negative sign indicates braking in usual convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Si es cero, omega se mantiene constante localmente.\r
      en: If zero, omega remains locally constant.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - coherence\r
    secondary_for:\r
    - summary\r
  graph_binding:\r
    channels:\r
    - alpha\r
  pedagogical_notes:\r
    es: Distinguir signo fisico de signo algebraico usado.\r
    en: Distinguish physical sign from algebraic sign.\r
- id: I\r
  symbol: I\r
  nombre:\r
    es: momento de inercia\r
    en: moment of inertia\r
  descripcion:\r
    es: Inercia rotacional respecto al eje considerado.\r
    en: Rotational inertia about the chosen axis.\r
  unidad_si: kg*m^2\r
  dimension: M L^2\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: parameter\r
  used_in:\r
  - dinamica_rotacional\r
  - decaimiento_exponencial\r
  - energia_rotacional\r
  common_mistake:\r
    es: Confundir I con masa total del cuerpo.\r
    en: Confusing I with total mass.\r
  typical_range:\r
    es: 0.001 a 100 kg*m^2 segun sistema.\r
    en: 0.001 to 100 kg*m^2 depending on system.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Es no negativo por definicion.\r
      en: It is non-negative by definition.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: I igual a cero no describe un rotor fisico real.\r
      en: I equal to zero does not describe a real rotor.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '> 0'\r
  interpretation_role:\r
    primary_for:\r
    - model_validity\r
    secondary_for:\r
    - coherence\r
  graph_binding:\r
    channels:\r
    - inertia\r
  pedagogical_notes:\r
    es: Confirmar eje de referencia antes de usar I.\r
    en: Confirm reference axis before using I.\r
- id: tau_roz\r
  symbol: tau_roz\r
  nombre:\r
    es: torque de rozamiento\r
    en: friction torque\r
  descripcion:\r
    es: Torque disipativo total que se opone al giro.\r
    en: Total dissipative torque opposing rotation.\r
  unidad_si: N*m\r
  dimension: M L^2 T^-2\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: state\r
  used_in:\r
  - dinamica_rotacional\r
  - torque_coulomb\r
  - torque_viscoso\r
  common_mistake:\r
    es: Ignorar su signo opuesto al movimiento.\r
    en: Ignoring its sign opposite to motion.\r
  typical_range:\r
    es: 0.001 a 2000 N*m segun mecanismo.\r
    en: 0.001 to 2000 N*m depending on mechanism.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Bajo convenio usual es opuesto a omega.\r
      en: Under usual convention it is opposite to omega.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Puede anularse en ausencia de contacto disipativo.\r
      en: It can vanish without dissipative contact.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - physical_reading\r
    - coherence\r
    secondary_for:\r
    - likely_errors\r
  graph_binding:\r
    channels:\r
    - torque\r
  pedagogical_notes:\r
    es: Revisar sentido de giro antes de asignar signo.\r
    en: Check rotation direction before assigning sign.\r
- id: mu_k\r
  symbol: mu_k\r
  nombre:\r
    es: coeficiente de rozamiento cinetico\r
    en: kinetic friction coefficient\r
  descripcion:\r
    es: Relacion adimensional entre friccion cinetica y normal.\r
    en: Dimensionless ratio between kinetic friction and normal force.\r
  unidad_si: 1\r
  dimension: 1\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: parameter\r
  used_in:\r
  - torque_coulomb\r
  common_mistake:\r
    es: Tomarlo constante fuera del rango de material.\r
    en: Treating it constant outside material range.\r
  typical_range:\r
    es: 0.02 a 1.0 segun superficies.\r
    en: 0.02 to 1.0 depending on surfaces.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa.\r
      en: Used as non-negative magnitude.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero idealiza contacto sin friccion.\r
      en: Zero idealizes frictionless contact.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - model_validity\r
    secondary_for:\r
    - next_step\r
  graph_binding:\r
    channels:\r
    - friction_coeff\r
  pedagogical_notes:\r
    es: Vincular mu_k al par de materiales usado.\r
    en: Link mu_k to actual material pair.\r
- id: N_normal\r
  symbol: N_normal\r
  nombre:\r
    es: fuerza normal\r
    en: normal force\r
  descripcion:\r
    es: Fuerza normal efectiva en la interfaz de friccion.\r
    en: Effective normal force at friction interface.\r
  unidad_si: N\r
  dimension: M L T^-2\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: parameter\r
  used_in:\r
  - torque_coulomb\r
  common_mistake:\r
    es: Igualarla siempre al peso sin revisar geometria.\r
    en: Always setting it equal to weight without geometry check.\r
  typical_range:\r
    es: 1 a 100000 N segun montaje.\r
    en: 1 to 100000 N depending on setup.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se utiliza su modulo positivo.\r
      en: Its positive magnitude is used.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Si es cero no hay torque de Coulomb.\r
      en: If zero there is no Coulomb torque.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - model_validity\r
    secondary_for:\r
    - coherence\r
  graph_binding:\r
    channels:\r
    - normal_force\r
  pedagogical_notes:\r
    es: Comprobar apoyo real y angulo de contacto.\r
    en: Check actual support and contact angle.\r
- id: R\r
  symbol: R\r
  nombre:\r
    es: radio efectivo\r
    en: effective radius\r
  descripcion:\r
    es: Brazo de palanca efectivo del torque de friccion.\r
    en: Effective lever arm of friction torque.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: parameter\r
  used_in:\r
  - torque_coulomb\r
  common_mistake:\r
    es: Usar diametro en lugar de radio.\r
    en: Using diameter instead of radius.\r
  typical_range:\r
    es: 0.005 a 1.0 m segun dispositivo.\r
    en: 0.005 to 1.0 m depending on device.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como distancia no negativa.\r
      en: Used as non-negative distance.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: R cero anula brazo y rompe el modelo.\r
      en: Zero R removes lever arm and breaks model.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '> 0'\r
  interpretation_role:\r
    primary_for:\r
    - model_validity\r
    secondary_for:\r
    - likely_errors\r
  graph_binding:\r
    channels:\r
    - radius\r
  pedagogical_notes:\r
    es: Verificar unidad en metros.\r
    en: Verify meter units.\r
- id: b_rot\r
  symbol: b_rot\r
  nombre:\r
    es: coeficiente viscoso rotacional\r
    en: rotational viscous coefficient\r
  descripcion:\r
    es: Parametro lineal del torque viscoso respecto a omega.\r
    en: Linear coefficient of viscous torque with omega.\r
  unidad_si: N*m*s\r
  dimension: M L^2 T^-1\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: parameter\r
  used_in:\r
  - torque_viscoso\r
  - decaimiento_exponencial\r
  common_mistake:\r
    es: Tratarlo adimensional o independiente de temperatura.\r
    en: Treating it dimensionless or temperature-independent.\r
  typical_range:\r
    es: 1e-5 a 10 N*m*s.\r
    en: 1e-5 to 10 N*m*s.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como coeficiente positivo.\r
      en: Used as positive coefficient.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero implica ausencia de disipacion viscosa.\r
      en: Zero implies no viscous dissipation.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - physical_reading\r
    secondary_for:\r
    - model_validity\r
  graph_binding:\r
    channels:\r
    - viscous_coeff\r
  pedagogical_notes:\r
    es: Revisar rango de validez del fluido lubricante.\r
    en: Check lubricant validity range.\r
- id: t\r
  symbol: t\r
  nombre:\r
    es: tiempo\r
    en: time\r
  descripcion:\r
    es: Variable temporal del proceso rotacional.\r
    en: Time variable of rotational process.\r
  unidad_si: s\r
  dimension: T\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: input\r
  used_in:\r
  - decaimiento_exponencial\r
  common_mistake:\r
    es: Confundir instante con intervalo acumulado.\r
    en: Confusing instant with accumulated interval.\r
  typical_range:\r
    es: 0 a 10000 s segun ensayo.\r
    en: 0 to 10000 s depending on test.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa no negativo por causalidad.\r
      en: Used non-negative by causality.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: t cero define condicion inicial.\r
      en: t zero defines initial condition.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - next_step\r
    secondary_for:\r
    - summary\r
  graph_binding:\r
    channels:\r
    - time\r
  pedagogical_notes:\r
    es: Unificar origen temporal de sensores.\r
    en: Unify sensor time origin.\r
- id: theta\r
  symbol: theta\r
  nombre:\r
    es: desplazamiento angular\r
    en: angular displacement\r
  descripcion:\r
    es: Angulo acumulado recorrido durante el proceso.\r
    en: Accumulated angle traveled during process.\r
  unidad_si: rad\r
  dimension: 1\r
  is_vector: false\r
  components: null\r
  category: state\r
  physical_role: state\r
  used_in:\r
  - trabajo_friccion\r
  common_mistake:\r
    es: Olvidar relacion entre radianes y vueltas.\r
    en: Forgetting relation between radians and turns.\r
  typical_range:\r
    es: 0.1 a 100000 rad segun duracion.\r
    en: 0.1 to 100000 rad depending on duration.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo depende del convenio de giro.\r
      en: Sign depends on rotation convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero indica sin desplazamiento acumulado.\r
      en: Zero indicates no accumulated displacement.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - physical_reading\r
    secondary_for:\r
    - coherence\r
  graph_binding:\r
    channels:\r
    - angle\r
  pedagogical_notes:\r
    es: Mantener consistencia de signo con omega.\r
    en: Keep sign consistent with omega.\r
- id: K_rot\r
  symbol: K_rot\r
  nombre:\r
    es: energia cinetica rotacional\r
    en: rotational kinetic energy\r
  descripcion:\r
    es: Energia mecanica asociada al giro del cuerpo.\r
    en: Mechanical energy associated with rotation.\r
  unidad_si: J\r
  dimension: M L^2 T^-2\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: state\r
  used_in:\r
  - energia_rotacional\r
  - balance_energetico\r
  common_mistake:\r
    es: Tratarla lineal en omega en lugar de cuadratica.\r
    en: Treating it linear in omega instead of quadratic.\r
  typical_range:\r
    es: 1e-3 a 1e6 J segun sistema.\r
    en: 1e-3 to 1e6 J depending on system.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Es no negativa en el modelo clasico.\r
      en: It is non-negative in classical model.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero cuando no hay giro.\r
      en: Zero when there is no rotation.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - summary\r
    - physical_reading\r
    secondary_for:\r
    - likely_errors\r
  graph_binding:\r
    channels:\r
    - energy\r
  pedagogical_notes:\r
    es: Revisar coherencia entre I y omega al calcular energia.\r
    en: Check coherence between I and omega when computing energy.\r
`;export{n as default};
