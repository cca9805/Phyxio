const e=`version: v5
magnitudes:
  - id: I
    symbol: I
    nombre:
      es: Corriente eléctrica
      en: Electric current
    unidad_si: A
    dimension: I
    descripcion:
      es: Intensidad de corriente que circula por un punto de conexión o conductor.
      en: Current intensity flowing through a connection point or conductor.
    is_vector: false
    components: null
    category: core
    physical_role: physical_quantity
    used_in:
      - formulas.yaml
      - teoria.md
      - ejemplos.md
    common_mistake:
      es: Confundir corriente total del circuito con corriente local en un punto de resistencia anómala.
      en: Confusing total circuit current with local current at a point of anomalous resistance.
    typical_range:
      es: En instalación doméstica, de 0 A a 25 A máximo en circuitos estándar.
      en: In domestic installations, from 0 A to 25 A maximum in standard circuits.
    sign_behavior:
      has_sign: false
      meaning:
        es: La corriente se considera en valor absoluto para el cálculo de potencia térmica.
        en: Current is considered in absolute value for thermal power calculation.
    zero_behavior:
      allowed: true
      meaning:
        es: Corriente cero indica ausencia de flujo y por tanto ausencia de potencia térmica.
        en: Zero current indicates absence of flow and therefore absence of thermal power.
    value_nature: scalar
    interpretation_role: primary
    graph_binding:
      enabled: false
      channels: []
    pedagogical_notes:
      es: Debe conectarse con la pregunta física central de evaluación de riesgo.
      en: Must connect with the central physical question of risk assessment.

  - id: R
    symbol: R
    nombre:
      es: Resistencia eléctrica local
      en: Local electrical resistance
    unidad_si: ohm
    dimension: M L^2 T^-3 I^-2
    descripcion:
      es: Resistencia eléctrica en un punto de conexión, contacto o empalme.
      en: Electrical resistance at a connection point, contact, or splice.
    is_vector: false
    components: null
    category: core
    physical_role: physical_quantity
    used_in:
      - formulas.yaml
      - teoria.md
      - ejemplos.md
    common_mistake:
      es: Ignorar que una resistencia local elevada (contacto flojo) genera calentamiento incluso con corriente moderada.
      en: Ignoring that high local resistance (loose contact) generates heating even with moderate current.
    typical_range:
      es: En buen contacto, menor que 0.01 ohm. En contacto degradado, puede superar 0.5 ohm.
      en: In good contact, less than 0.01 ohm. In degraded contact, can exceed 0.5 ohm.
    sign_behavior:
      has_sign: false
      meaning:
        es: La resistencia es siempre positiva o cero en materiales conductores.
        en: Resistance is always positive or zero in conductive materials.
    zero_behavior:
      allowed: false
      meaning:
        es: Resistencia cero es un ideal teórico; todo contacto real tiene alguna resistencia.
        en: Zero resistance is a theoretical ideal; every real contact has some resistance.
    value_nature: scalar
    interpretation_role: primary
    graph_binding:
      enabled: false
      channels: []
    pedagogical_notes:
      es: La resistencia local es clave para identificar puntos críticos de riesgo.
      en: Local resistance is key to identifying critical risk points.

  - id: P_joule
    symbol: P_{joule}
    nombre:
      es: Potencia térmica disipada
      en: Dissipated thermal power
    unidad_si: W
    dimension: M L^2 T^-3
    descripcion:
      es: Potencia térmica disipada en un punto de resistencia por conversión de energía eléctrica.
      en: Thermal power dissipated at a point of resistance by conversion of electrical energy.
    is_vector: false
    components: null
    category: core
    physical_role: primary_magnitude
    used_in:
      - formulas.yaml
      - teoria.md
      - ejemplos.md
      - interpretacion.yaml
    common_mistake:
      es: Evaluar solo la corriente sin considerar que el calentamiento depende del producto I²R.
      en: Evaluating only current without considering that heating depends on the I²R product.
    typical_range:
      es: En instalación doméstica, valores superiores a 5-10 W indican riesgo térmico significativo.
      en: In domestic installations, values above 5-10 W indicate significant thermal risk.
    sign_behavior:
      has_sign: false
      meaning:
        es: La potencia térmica es siempre positiva o cero.
        en: Thermal power is always positive or zero.
    zero_behavior:
      allowed: true
      meaning:
        es: Potencia cero indica contacto ideal o ausencia de corriente.
        en: Zero power indicates ideal contact or absence of current.
    value_nature: scalar
    interpretation_role: primary
    graph_binding:
      enabled: false
      channels: []
    pedagogical_notes:
      es: Magnitud dominante del leaf que determina el nivel de riesgo térmico.
      en: Dominant magnitude of the leaf determining thermal risk level.

  - id: E_joule
    symbol: E_{joule}
    nombre:
      es: Energía térmica acumulada
      en: Accumulated thermal energy
    unidad_si: J
    dimension: M L^2 T^-2
    descripcion:
      es: Energía total disipada como calor durante un tiempo de exposición.
      en: Total energy dissipated as heat during an exposure time.
    is_vector: false
    components: null
    category: core
    physical_role: physical_quantity
    used_in:
      - formulas.yaml
      - teoria.md
      - ejemplos.md
    common_mistake:
      es: Ignorar el tiempo de exposición y evaluar solo la potencia instantánea.
      en: Ignoring exposure time and evaluating only instantaneous power.
    typical_range:
      es: Depende fuertemente del tiempo. Valores diarios superiores a 100 kJ indican riesgo acumulado.
      en: Strongly depends on time. Daily values above 100 kJ indicate accumulated risk.
    sign_behavior:
      has_sign: false
      meaning:
        es: La energía térmica es siempre positiva o cero.
        en: Thermal energy is always positive or zero.
    zero_behavior:
      allowed: true
      meaning:
        es: Energía cero indica ausencia de exposición térmica.
        en: Zero energy indicates absence of thermal exposure.
    value_nature: scalar
    interpretation_role: secondary
    graph_binding:
      enabled: false
      channels: []
    pedagogical_notes:
      es: Importante para evaluar daño térmico acumulado en uso prolongado.
      en: Important for evaluating accumulated thermal damage in prolonged use.

  - id: t
    symbol: t
    nombre:
      es: Tiempo de exposición
      en: Exposure time
    unidad_si: s
    dimension: T
    descripcion:
      es: Duración del intervalo durante el cual circula corriente y se disipa potencia térmica.
      en: Duration of the interval during which current flows and thermal power is dissipated.
    is_vector: false
    components: null
    category: contextual
    physical_role: physical_quantity
    used_in:
      - formulas.yaml
      - teoria.md
      - ejemplos.md
    common_mistake:
      es: No considerar el tiempo acumulado de uso diario al evaluar riesgo.
      en: Not considering accumulated daily usage time when evaluating risk.
    typical_range:
      es: Desde segundos (arranque) hasta horas (uso continuo), típicamente 1-8 h/día.
      en: From seconds (startup) to hours (continuous use), typically 1-8 h/day.
    sign_behavior:
      has_sign: false
      meaning:
        es: El tiempo es siempre positivo en el contexto físico.
        en: Time is always positive in the physical context.
    zero_behavior:
      allowed: true
      meaning:
        es: Tiempo cero indica ausencia de exposición.
        en: Zero time indicates absence of exposure.
    value_nature: scalar
    interpretation_role: contextual
    graph_binding:
      enabled: false
      channels: []
    pedagogical_notes:
      es: Factor multiplicativo crítico en el daño térmico acumulado.
      en: Critical multiplicative factor in accumulated thermal damage.

  - id: R_th
    symbol: R_{th}
    nombre:
      es: Resistencia térmica
      en: Thermal resistance
    unidad_si: K/W
    dimension: M^-1 L^-2 T^3 K
    descripcion:
      es: Relación entre incremento de temperatura y potencia disipada en un punto de conexión.
      en: Ratio between temperature rise and dissipated power at a connection point.
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in:
      - formulas.yaml
      - teoria.md
    common_mistake:
      es: Confundir resistencia térmica con resistencia eléctrica.
      en: Confusing thermal resistance with electrical resistance.
    typical_range:
      es: En conectores domésticos, típicamente 1-10 K/W dependiendo del material y disipación.
      en: In domestic connectors, typically 1-10 K/W depending on material and dissipation.
    sign_behavior:
      has_sign: false
      meaning:
        es: La resistencia térmica es siempre positiva.
        en: Thermal resistance is always positive.
    zero_behavior:
      allowed: false
      meaning:
        es: Resistencia térmica cero sería disipación ideal infinita, inalcanzable.
        en: Zero thermal resistance would be infinite ideal dissipation, unattainable.
    value_nature: scalar
    interpretation_role: secondary
    graph_binding:
      enabled: false
      channels: []
    pedagogical_notes:
      es: Determina cuánto se calienta un punto dada una potencia disipada.
      en: Determines how much a point heats up given a dissipated power.

  - id: DeltaT
    symbol: \\Delta T
    nombre:
      es: Incremento de temperatura
      en: Temperature rise
    unidad_si: K
    dimension: K
    descripcion:
      es: Diferencia entre temperatura del punto caliente y temperatura ambiente.
      en: Difference between hot point temperature and ambient temperature.
    is_vector: false
    components: null
    category: derived
    physical_role: observable_indicator
    used_in:
      - formulas.yaml
      - teoria.md
      - ejemplos.md
    common_mistake:
      es: No detectar el incremento térmico como señal de alarma temprana.
      en: Not detecting temperature rise as early warning signal.
    typical_range:
      es: Normal 0-10 K. Riesgo moderado 10-40 K. Riesgo alto >40 K.
      en: Normal 0-10 K. Moderate risk 10-40 K. High risk >40 K.
    sign_behavior:
      has_sign: true
      meaning:
        es: Valores positivos indican calentamiento; valores negativos no tienen sentido físico aquí.
        en: Positive values indicate heating; negative values have no physical meaning here.
    zero_behavior:
      allowed: true
      meaning:
        es: Incremento cero indica temperatura ambiente, ausencia de calentamiento.
        en: Zero rise indicates ambient temperature, absence of heating.
    value_nature: scalar
    interpretation_role: observable
    graph_binding:
      enabled: false
      channels: []
    pedagogical_notes:
      es: Es el indicador observable más directo del riesgo térmico. Detectable al tacto (cuidado!).
      en: It is the most direct observable indicator of thermal risk. Detectable by touch (careful!).

  - id: DeltaP
    symbol: \\Delta P
    nombre:
      es: Diferencia de potencia térmica
      en: Thermal power difference
    unidad_si: W
    dimension: M L^2 T^-3
    descripcion:
      es: Diferencia entre potencias térmicas disipadas en dos condiciones o puntos diferentes.
      en: Difference between thermal powers dissipated in two different conditions or points.
    is_vector: false
    components: null
    category: auxiliary
    physical_role: derived_quantity
    used_in:
      - ejemplos.md
      - ejemplos.en.md
    common_mistake:
      es: No calcular explícitamente la reducción de potencia tras una intervención.
      en: Not explicitly calculating power reduction after an intervention.
    typical_range:
      es: Depende del contexto. Reducciones superiores a 5 W son significativas en instalaciones domésticas.
      en: Depends on context. Reductions above 5 W are significant in domestic installations.
    sign_behavior:
      has_sign: true
      meaning:
        es: Valor positivo indica reducción de potencia (mejora). Valor negativo indica empeoramiento.
        en: Positive value indicates power reduction (improvement). Negative value indicates worsening.
    zero_behavior:
      allowed: true
      meaning:
        es: Diferencia cero indica que la intervención no cambió el riesgo térmico.
        en: Zero difference indicates the intervention did not change thermal risk.
    value_nature: scalar
    interpretation_role: derived
    graph_binding:
      enabled: false
      channels: []
    pedagogical_notes:
      es: Magnitud auxiliar para cuantificar mejoras tras intervenciones preventivas.
      en: Auxiliary magnitude for quantifying improvements after preventive interventions.

  - id: C_th
    symbol: C_{th}
    nombre:
      es: Capacidad térmica
      en: Thermal capacity
    unidad_si: J/K
    dimension: M L^2 T^-2 K^-1
    descripcion:
      es: Cantidad de energía térmica necesaria para elevar la temperatura del sistema en un grado.
      en: Amount of thermal energy required to raise the system temperature by one degree.
    is_vector: false
    components: null
    category: auxiliary
    physical_role: physical_quantity
    used_in:
      - modelos.md
      - modelos.en.md
    common_mistake:
      es: Confundir capacidad térmica con resistencia térmica.
      en: Confusing thermal capacity with thermal resistance.
    typical_range:
      es: En conectores domésticos, típicamente 1-50 J/K dependiendo de la masa y material.
      en: In domestic connectors, typically 1-50 J/K depending on mass and material.
    sign_behavior:
      has_sign: false
      meaning:
        es: La capacidad térmica es siempre positiva.
        en: Thermal capacity is always positive.
    zero_behavior:
      allowed: false
      meaning:
        es: Capacidad térmica cero sería un sistema sin masa térmica, inalcanzable físicamente.
        en: Zero thermal capacity would be a system without thermal mass, physically unattainable.
    value_nature: scalar
    interpretation_role: secondary
    graph_binding:
      enabled: false
      channels: []
    pedagogical_notes:
      es: Determina la velocidad de respuesta térmica del sistema. Mayor capacidad implica transitorios más lentos.
      en: Determines the thermal response speed of the system. Higher capacity implies slower transients.
`;export{e as default};
