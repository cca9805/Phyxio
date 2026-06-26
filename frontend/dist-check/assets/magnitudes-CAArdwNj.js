const n=`version: 1\r
magnitudes:\r
- id: tau\r
  symbol: \\tau\r
  nombre:\r
    es: torque_resultante\r
    en: resultant_torque\r
  descripcion:\r
    es: Momento de fuerza neto respecto al eje de analisis.\r
    en: Net moment of force with respect to the analysis axis.\r
  unidad_si: N*m\r
  dimension: M*L^2/T^2\r
  is_vector: true\r
  components:\r
  - tau_x\r
  - tau_y\r
  - tau_z\r
  category: derived\r
  physical_role:\r
    es: Causa rotacional efectiva\r
    en: Effective rotational cause\r
  used_in:\r
  - torque_por_angulo\r
  - torque_brazo\r
  - torque_plano\r
  - segunda_ley_rotacional\r
  common_mistake:\r
    es: Tratar el torque como escalar sin fijar eje y sentido.\r
    en: Treating torque as scalar without fixing axis and sign.\r
  typical_range: -500 a 500 N*m\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo depende del convenio de giro y del eje positivo.\r
      en: Sign depends on spin convention and positive axis choice.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Valor cero implica equilibrio rotacional alrededor del eje.\r
      en: Zero value implies rotational equilibrium around the axis.\r
  value_nature:\r
    kind: vector\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - coherencia-de-signo\r
  graph_binding:\r
    channels:\r
    - torque\r
  pedagogical_notes:\r
    es: Verificar eje, sentido y unidades antes de interpretar el resultado.\r
    en: Verify axis, sign convention, and units before interpretation.\r
- id: tau_z\r
  symbol: \\tau_z\r
  nombre:\r
    es: torque_eje_z\r
    en: z_axis_torque\r
  descripcion:\r
    es: Componente del torque sobre el eje z en problemas planos.\r
    en: Torque component on the z axis in planar problems.\r
  unidad_si: N*m\r
  dimension: M*L^2/T^2\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role:\r
    es: Salida escalar en dinamica plana\r
    en: Scalar output in planar dynamics\r
  used_in:\r
  - torque_plano\r
  common_mistake:\r
    es: Olvidar el signo de horario y antihorario.\r
    en: Ignoring clockwise and counterclockwise sign.\r
  typical_range: -300 a 300 N*m\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Positivo o negativo segun convenio del eje z.\r
      en: Positive or negative depending on z-axis convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero indica balance de momentos en el plano.\r
      en: Zero indicates moment balance in the plane.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - coherencia-de-signo\r
  graph_binding:\r
    channels:\r
    - torque\r
  pedagogical_notes:\r
    es: En 2D, declarar siempre que z sale del plano para evitar ambiguedad.\r
    en: In 2D, always declare z as out of plane to avoid ambiguity.\r
- id: F\r
  symbol: F\r
  nombre:\r
    es: fuerza_aplicada\r
    en: applied_force\r
  descripcion:\r
    es: Magnitud de la fuerza aplicada en el punto de interes.\r
    en: Magnitude of the force applied at the point of interest.\r
  unidad_si: N\r
  dimension: M*L/T^2\r
  is_vector: true\r
  components:\r
  - F_x\r
  - F_y\r
  - F_z\r
  category: fundamental\r
  physical_role:\r
    es: Accion externa\r
    en: External action\r
  used_in:\r
  - torque_por_angulo\r
  - torque_brazo\r
  common_mistake:\r
    es: Usar fuerza total sin descomponer segun direccion efectiva.\r
    en: Using total force without resolving effective direction.\r
  typical_range: 0 a 5000 N\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El vector fuerza cambia de sentido segun la referencia.\r
      en: Force vector direction changes with the chosen frame.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero significa ausencia de accion externa.\r
      en: Zero means no external action.\r
  value_nature:\r
    kind: vector\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - datos-de-entrada\r
    secondary_for:\r
    - coherencia-de-unidades\r
  graph_binding:\r
    channels:\r
    - force\r
  pedagogical_notes:\r
    es: Confirmar si la fuerza es perpendicular o inclinada antes de operar.\r
    en: Confirm whether force is perpendicular or inclined before computing.\r
- id: r\r
  symbol: r\r
  nombre:\r
    es: distancia_al_eje\r
    en: distance_to_axis\r
  descripcion:\r
    es: Distancia desde el eje de giro al punto de aplicacion.\r
    en: Distance from rotation axis to application point.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role:\r
    es: Brazo geometrico radial\r
    en: Radial geometric arm\r
  used_in:\r
  - torque_por_angulo\r
  common_mistake:\r
    es: Medir distancia al origen en vez de al eje de giro real.\r
    en: Measuring distance to origin instead of true rotation axis.\r
  typical_range: 0 a 5 m\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Distancia radial no negativa.\r
      en: Radial distance is non-negative.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero implica fuerza aplicada sobre el eje y torque nulo.\r
      en: Zero means force applied at axis and zero torque.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - datos-de-entrada\r
    secondary_for:\r
    - validez-geometrica\r
  graph_binding:\r
    channels:\r
    - radius\r
  pedagogical_notes:\r
    es: Dibujar eje y punto de aplicacion antes de fijar r.\r
    en: Draw axis and application point before assigning r.\r
- id: b\r
  symbol: b\r
  nombre:\r
    es: brazo_de_palanca\r
    en: lever_arm\r
  descripcion:\r
    es: Distancia perpendicular desde el eje a la linea de accion de la fuerza.\r
    en: Perpendicular distance from axis to line of action of force.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role:\r
    es: Distancia efectiva de momento\r
    en: Effective moment distance\r
  used_in:\r
  - torque_brazo\r
  common_mistake:\r
    es: Usar r en lugar del brazo perpendicular b.\r
    en: Using r instead of perpendicular arm b.\r
  typical_range: 0 a 5 m\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud de distancia.\r
      en: Used as a distance magnitude.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero implica linea de accion pasando por el eje.\r
      en: Zero means line of action passes through axis.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - datos-de-entrada\r
    secondary_for:\r
    - validez-geometrica\r
  graph_binding:\r
    channels:\r
    - lever_arm\r
  pedagogical_notes:\r
    es: Si no se identifica b, usa descomposicion de fuerza o trigonometria.\r
    en: If b is unclear, use force decomposition or trigonometry.\r
- id: theta\r
  symbol: \\theta\r
  nombre:\r
    es: angulo_entre_r_y_F\r
    en: angle_between_r_and_F\r
  descripcion:\r
    es: Angulo entre el vector posicion y la fuerza aplicada.\r
    en: Angle between position vector and applied force.\r
  unidad_si: rad\r
  dimension: 1\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role:\r
    es: Factor direccional del torque\r
    en: Directional factor of torque\r
  used_in:\r
  - torque_por_angulo\r
  common_mistake:\r
    es: Usar el angulo con la horizontal en vez de entre r y F.\r
    en: Using angle to horizontal instead of angle between r and F.\r
  typical_range: 0 a 3.1416 rad\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa en seno, normalmente entre cero y pi.\r
      en: Used in sine, usually between zero and pi.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero o pi produce torque nulo por alineacion.\r
      en: Zero or pi yields zero torque due to alignment.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '[0, pi]'\r
  interpretation_role:\r
    primary_for:\r
    - datos-de-entrada\r
    secondary_for:\r
    - coherencia-geometrica\r
  graph_binding:\r
    channels:\r
    - angle\r
  pedagogical_notes:\r
    es: Aclarar siempre desde que vector se mide theta y en que sentido.\r
    en: Always specify from which vector theta is measured and orientation.\r
- id: x\r
  symbol: x\r
  nombre:\r
    es: coordenada_x\r
    en: x_coordinate\r
  descripcion:\r
    es: Coordenada x del punto de aplicacion de la fuerza.\r
    en: x coordinate of the force application point.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role:\r
    es: Posicion para torque plano\r
    en: Position for planar torque\r
  used_in:\r
  - torque_plano\r
  common_mistake:\r
    es: Usar eje distinto al definido en el diagrama.\r
    en: Using an axis different from the declared diagram.\r
  typical_range: -10 a 10 m\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Signo definido por orientacion del eje x.\r
      en: Sign set by x-axis orientation.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero ubica el punto sobre el eje y.\r
      en: Zero places the point on y axis.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - datos-de-entrada\r
    secondary_for:\r
    - coherencia-geometrica\r
  graph_binding:\r
    channels:\r
    - x\r
  pedagogical_notes:\r
    es: Mantener consistencia con origen y ejes usados en todas las ecuaciones.\r
    en: Keep consistency with origin and axes in all equations.\r
- id: y\r
  symbol: y\r
  nombre:\r
    es: coordenada_y\r
    en: y_coordinate\r
  descripcion:\r
    es: Coordenada y del punto de aplicacion de la fuerza.\r
    en: y coordinate of the force application point.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role:\r
    es: Posicion para torque plano\r
    en: Position for planar torque\r
  used_in:\r
  - torque_plano\r
  common_mistake:\r
    es: Cambiar signo de y al pasar entre cuadrantes sin justificar.\r
    en: Flipping y sign between quadrants without justification.\r
  typical_range: -10 a 10 m\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Signo definido por orientacion del eje y.\r
      en: Sign set by y-axis orientation.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero ubica el punto sobre el eje x.\r
      en: Zero places the point on x axis.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - datos-de-entrada\r
    secondary_for:\r
    - coherencia-geometrica\r
  graph_binding:\r
    channels:\r
    - y\r
  pedagogical_notes:\r
    es: Revisar cuadrante y sentido positivo antes de sustituir.\r
    en: Check quadrant and positive direction before substitution.\r
- id: F_x\r
  symbol: F_x\r
  nombre:\r
    es: componente_x_de_fuerza\r
    en: x_component_of_force\r
  descripcion:\r
    es: Proyeccion de la fuerza sobre el eje x.\r
    en: Projection of force on x axis.\r
  unidad_si: N\r
  dimension: M*L/T^2\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role:\r
    es: Entrada de torque plano\r
    en: Input for planar torque\r
  used_in:\r
  - torque_plano\r
  common_mistake:\r
    es: Asignar signo incorrecto al descomponer la fuerza.\r
    en: Assigning wrong sign during force decomposition.\r
  typical_range: -5000 a 5000 N\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Signo segun orientacion del eje x.\r
      en: Sign according to x-axis orientation.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero implica componente horizontal nula.\r
      en: Zero implies null horizontal component.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - datos-de-entrada\r
    secondary_for:\r
    - coherencia-de-signo\r
  graph_binding:\r
    channels:\r
    - force_x\r
  pedagogical_notes:\r
    es: Verificar descomposicion trigonometrica y signos por cuadrante.\r
    en: Verify trigonometric decomposition and quadrant signs.\r
- id: F_y\r
  symbol: F_y\r
  nombre:\r
    es: componente_y_de_fuerza\r
    en: y_component_of_force\r
  descripcion:\r
    es: Proyeccion de la fuerza sobre el eje y.\r
    en: Projection of force on y axis.\r
  unidad_si: N\r
  dimension: M*L/T^2\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role:\r
    es: Entrada de torque plano\r
    en: Input for planar torque\r
  used_in:\r
  - torque_plano\r
  common_mistake:\r
    es: Perder el signo al cambiar el sentido positivo del eje y.\r
    en: Losing sign when changing positive y-axis direction.\r
  typical_range: -5000 a 5000 N\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Signo segun orientacion del eje y.\r
      en: Sign according to y-axis orientation.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero implica componente vertical nula.\r
      en: Zero implies null vertical component.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - datos-de-entrada\r
    secondary_for:\r
    - coherencia-de-signo\r
  graph_binding:\r
    channels:\r
    - force_y\r
  pedagogical_notes:\r
    es: Mantener consistencia entre diagrama, ejes y signos de F_y.\r
    en: Keep consistency between diagram, axes, and F_y sign.\r
- id: I\r
  symbol: I\r
  nombre:\r
    es: momento_de_inercia\r
    en: moment_of_inertia\r
  descripcion:\r
    es: Inercia rotacional respecto al eje considerado.\r
    en: Rotational inertia with respect to the selected axis.\r
  unidad_si: kg*m^2\r
  dimension: M*L^2\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role:\r
    es: Resistencia a cambiar el estado de giro\r
    en: Resistance to changing rotational state\r
  used_in:\r
  - segunda_ley_rotacional\r
  common_mistake:\r
    es: Usar un valor de I de otro eje sin teorema de ejes.\r
    en: Using I from another axis without axis theorem.\r
  typical_range: 0.001 a 100 kg*m^2\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Magnitud no negativa por definicion.\r
      en: Non-negative magnitude by definition.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero solo para idealizaciones sin masa o eje degenerado.\r
      en: Zero only for idealized massless or degenerate axis cases.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: '>= 0'\r
  interpretation_role:\r
    primary_for:\r
    - datos-de-entrada\r
    secondary_for:\r
    - validez-del-modelo\r
  graph_binding:\r
    channels:\r
    - inertia\r
  pedagogical_notes:\r
    es: Elegir I coherente con geometria y eje del problema.\r
    en: Choose I consistent with geometry and problem axis.\r
- id: alpha\r
  symbol: \\alpha\r
  nombre:\r
    es: aceleracion_angular\r
    en: angular_acceleration\r
  descripcion:\r
    es: Variacion temporal de la velocidad angular.\r
    en: Time variation of angular velocity.\r
  unidad_si: rad/s^2\r
  dimension: 1/T^2\r
  is_vector: true\r
  components:\r
  - alpha_x\r
  - alpha_y\r
  - alpha_z\r
  category: derived\r
  physical_role:\r
    es: Respuesta dinamica rotacional\r
    en: Rotational dynamic response\r
  used_in:\r
  - segunda_ley_rotacional\r
  common_mistake:\r
    es: Confundir aceleracion angular con velocidad angular.\r
    en: Confusing angular acceleration with angular velocity.\r
  typical_range: -200 a 200 rad/s^2\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Signo segun convenio del eje de giro.\r
      en: Sign according to rotation-axis convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero indica giro con velocidad angular constante.\r
      en: Zero indicates rotation with constant angular speed.\r
  value_nature:\r
    kind: vector\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - lectura-de-resultado\r
    secondary_for:\r
    - coherencia-dinamica\r
  graph_binding:\r
    channels:\r
    - angular_acceleration\r
  pedagogical_notes:\r
    es: Relacionar el signo de alpha con el signo del torque neto.\r
    en: Relate alpha sign to net torque sign.\r
`;export{n as default};
