const n=`version: 1\r
magnitudes:\r
- id: v\r
  symbol: v\r
  nombre:\r
    es: velocidad lineal\r
    en: linear velocity\r
  descripcion:\r
    es: Velocidad del centro de masas respecto al suelo.\r
    en: Velocity of the center of mass with respect to the ground.\r
  unidad_si: m/s\r
  dimension: L/T\r
  is_vector: false\r
  components: null\r
  category: state\r
  physical_role:\r
    es: variable de estado\r
    en: state variable\r
  used_in:\r
  - condicion_rodadura\r
  - residuo_rodadura\r
  common_mistake:\r
    es: Mezclar su signo con un convenio angular opuesto.\r
    en: Mixing its sign with an opposite angular convention.\r
  typical_range:\r
    es: 0.1 a 40 m/s en problemas didacticos.\r
    en: 0.1 to 40 m/s in didactic problems.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo depende del eje positivo elegido para el avance.\r
      en: Sign depends on the selected positive translation axis.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Si vale cero, no hay avance lineal instantaneo.\r
      en: If zero, there is no instantaneous linear advance.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - summary\r
    - physical_reading\r
    secondary_for:\r
    - coherence\r
  graph_binding:\r
    channels:\r
    - x\r
  pedagogical_notes:\r
    es: Conviene fijar sentido positivo antes de operar con omega y R.\r
    en: Fix the positive direction before combining v with omega and R.\r
- id: omega\r
  symbol: \\omega\r
  nombre:\r
    es: velocidad angular\r
    en: angular velocity\r
  descripcion:\r
    es: Tasa de giro del solido alrededor de su eje.\r
    en: Rotation rate of the solid around its axis.\r
  unidad_si: rad/s\r
  dimension: T^-1\r
  is_vector: false\r
  components: null\r
  category: state\r
  physical_role:\r
    es: variable de estado\r
    en: state variable\r
  used_in:\r
  - condicion_rodadura\r
  - residuo_rodadura\r
  - conversion_rpm_rad\r
  common_mistake:\r
    es: Introducir rpm sin convertir a rad/s cuando la formula lo requiere.\r
    en: Introducing rpm without converting to rad/s when required.\r
  typical_range:\r
    es: 0.1 a 300 rad/s para casos de clase.\r
    en: 0.1 to 300 rad/s for classroom cases.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: El signo representa el sentido de giro segun el convenio.\r
      en: Sign represents rotation sense under the chosen convention.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Si vale cero, no hay giro instantaneo.\r
      en: If zero, there is no instantaneous rotation.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - summary\r
    - model_validity\r
    secondary_for:\r
    - likely_errors\r
  graph_binding:\r
    channels:\r
    - angular_rate\r
  pedagogical_notes:\r
    es: Revisar consistencia de signo con el avance lineal v.\r
    en: Check sign consistency with linear advance v.\r
- id: R\r
  symbol: R\r
  nombre:\r
    es: radio efectivo\r
    en: effective radius\r
  descripcion:\r
    es: Distancia entre el centro de giro y el punto de contacto.\r
    en: Distance between rotation center and contact point.\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role:\r
    es: parametro geometrico\r
    en: geometric parameter\r
  used_in:\r
  - condicion_rodadura\r
  - residuo_rodadura\r
  common_mistake:\r
    es: Usar diametro cuando la ecuacion exige radio.\r
    en: Using diameter when the equation requires radius.\r
  typical_range:\r
    es: 0.01 a 1.5 m en sistemas de movilidad.\r
    en: 0.01 to 1.5 m in mobility systems.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: Se usa como magnitud no negativa en el modelo.\r
      en: It is used as a non-negative magnitude in the model.\r
  zero_behavior:\r
    allowed: false\r
    meaning:\r
      es: R igual a cero invalida la geometria de rodadura.\r
      en: R equal to zero invalidates rolling geometry.\r
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
    - radius\r
  pedagogical_notes:\r
    es: Verificar unidades y conversiones antes de calcular omega o v.\r
    en: Check units and conversions before solving for omega or v.\r
- id: delta\r
  symbol: \\Delta\r
  nombre:\r
    es: residuo de rodadura\r
    en: rolling residual\r
  descripcion:\r
    es: Diferencia entre velocidad medida y velocidad predicha por rodadura pura.\r
    en: Difference between measured velocity and pure rolling prediction.\r
  unidad_si: m/s\r
  dimension: L/T\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role:\r
    es: indicador de coherencia\r
    en: coherence indicator\r
  used_in:\r
  - residuo_rodadura\r
  common_mistake:\r
    es: Ignorar su signo y perder el diagnostico de derrape o patinamiento.\r
    en: Ignoring its sign and losing skid or spin diagnostics.\r
  typical_range:\r
    es: -5 a 5 m/s en ensayos docentes.\r
    en: -5 to 5 m/s in teaching tests.\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: Signo positivo o negativo separa regimenes de deslizamiento.\r
      en: Positive or negative sign separates slip regimes.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Cero indica compatibilidad con rodadura pura.\r
      en: Zero indicates compatibility with pure rolling.\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: R\r
  interpretation_role:\r
    primary_for:\r
    - coherence\r
    - likely_errors\r
    secondary_for:\r
    - next_step\r
  graph_binding:\r
    channels:\r
    - residual\r
  pedagogical_notes:\r
    es: Fijar un umbral experimental para decidir cuando delta es practicamente cero.\r
    en: Define an experimental threshold to decide when delta is practically zero.\r
- id: n\r
  symbol: n\r
  nombre:\r
    es: frecuencia de rotacion\r
    en: rotation frequency\r
  descripcion:\r
    es: Numero de revoluciones por minuto medido por el sistema.\r
    en: Revolutions per minute measured by the system.\r
  unidad_si: rpm\r
  dimension: T^-1\r
  is_vector: false\r
  components: null\r
  category: input\r
  physical_role:\r
    es: dato de entrada\r
    en: input datum\r
  used_in:\r
  - conversion_rpm_rad\r
  common_mistake:\r
    es: Tratar rpm como si fuera rad/s sin conversion previa.\r
    en: Treating rpm as rad/s without prior conversion.\r
  typical_range:\r
    es: 10 a 6000 rpm segun el sistema.\r
    en: 10 to 6000 rpm depending on system.\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: En este leaf se usa como modulo de frecuencia.\r
      en: In this leaf it is used as a frequency magnitude.\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: Si vale cero, la rueda esta detenida.\r
      en: If zero, the wheel is stopped.\r
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
    - rpm\r
  pedagogical_notes:\r
    es: Convertir n a omega antes de usar la condicion v = omega * R.\r
    en: Convert n to omega before applying v = omega * R.\r
`;export{n as default};
