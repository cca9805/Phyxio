const n=`\uFEFFversion: v5\r
\r
magnitudes:\r
  - id: V\r
    symbol: V\r
    nombre:\r
      es: Tensión eléctrica\r
      en: Electric voltage\r
    unidad_si: V\r
    dimension: M L^2 T^-3 I^-1\r
    descripcion:\r
      es: Diferencia de potencial eléctrico entre dos puntos; el "empuje" que mueve la corriente.\r
      en: Electric potential difference between two points; the "push" that moves current.\r
    is_vector: false\r
    components: null\r
    category: fundamental\r
    physical_role: context_magnitude\r
    used_in:\r
      - formulas.yaml\r
      - teoria.md\r
      - ejemplos.md\r
      - interpretacion.yaml\r
    common_mistake:\r
      es: Confundir tensión con corriente o pensar que mayor tensión implica siempre mayor peligro sin considerar la energía.\r
      en: Confusing voltage with current or thinking higher voltage always means greater danger without considering energy.\r
    typical_range:\r
      min: 0\r
      max: 500\r
      unit: V\r
      context: domestic installations (nominal 230V in Europe)\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: La tensión es siempre no negativa en este contexto; el signo no aplica.\r
        en: Voltage is always non-negative in this context; sign does not apply.\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: Tensión cero indica cortocircuito o ausencia de conexión a la red.\r
        en: Zero voltage indicates short circuit or no grid connection.\r
    value_nature:\r
      kind: scalar\r
      nonnegative_only: true\r
      expected_interval: [0, 500]\r
    interpretation_role:\r
      primary_for: circuit_analysis\r
      secondary_for: safety_assessment\r
    graph_binding:\r
      channels: [x_axis_constant, y_axis_input]\r
    pedagogical_notes:\r
      es: La tensión es la causa (el empuje), no el efecto. A tensión fija, la corriente depende de la resistencia.\r
      en: Voltage is the cause (the push), not the effect. At fixed voltage, current depends on resistance.\r
\r
  - id: I\r
    symbol: I\r
    nombre:\r
      es: Intensidad de corriente\r
      en: Current intensity\r
    unidad_si: A\r
    dimension: I\r
    descripcion:\r
      es: Flujo de carga eléctrica por unidad de tiempo; la magnitud que transportan los cables.\r
      en: Flow of electric charge per unit time; the magnitude carried by cables.\r
    is_vector: false\r
    components: null\r
    category: fundamental\r
    physical_role: primary_magnitude\r
    used_in:\r
      - formulas.yaml\r
      - teoria.md\r
      - ejemplos.md\r
      - interpretacion.yaml\r
    common_mistake:\r
      es: Usar corrientes calculadas sin comparar con el límite del cable o la protección asociada.\r
      en: Using calculated currents without comparing against cable limit or associated protection.\r
    typical_range:\r
      min: 0\r
      max: 100\r
      unit: A\r
      context: domestic circuits (0-32A typical)\r
    sign_behavior:\r
      has_sign: true\r
      meaning:\r
        es: Signo positivo indica flujo en sentido convencional; negativo induye sentido opuesto. En continua doméstica siempre es positivo.\r
        en: Positive sign indicates flow in conventional direction; negative indicates opposite direction. In domestic DC always positive.\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: Corriente cero indica circuito abierto o ausencia de carga.\r
        en: Zero current indicates open circuit or no load.\r
    value_nature:\r
      kind: scalar\r
      nonnegative_only: false\r
      expected_interval: [0, 100]\r
    interpretation_role:\r
      primary_for: safety_limits\r
      secondary_for: power_calculation\r
    graph_binding:\r
      channels: [y_axis_output, color_coding]\r
    pedagogical_notes:\r
      es: La corriente es el efecto, no la causa. El peligro real viene de I alta, no de V alta directamente.\r
      en: Current is the effect, not the cause. Real danger comes from high I, not directly from high V.\r
\r
  - id: P\r
    symbol: P\r
    nombre:\r
      es: Potencia eléctrica\r
      en: Electric power\r
    unidad_si: W\r
    dimension: M L^2 T^-3\r
    descripcion:\r
      es: Ritmo de consumo o transformación de energía eléctrica; magnitud dominante del leaf.\r
      en: Rate of consumption or transformation of electrical energy; dominant magnitude of the leaf.\r
    is_vector: false\r
    components: null\r
    category: fundamental\r
    physical_role: primary_magnitude\r
    used_in:\r
      - formulas.yaml\r
      - teoria.md\r
      - ejemplos.md\r
      - interpretacion.yaml\r
    common_mistake:\r
      es: Confundir potencia instantánea con energía acumulada, o usar kW y W sin conversión en cálculos.\r
      en: Confusing instantaneous power with accumulated energy, or using kW and W without conversion in calculations.\r
    typical_range:\r
      min: 0\r
      max: 10000\r
      unit: W\r
      context: domestic appliances (10W to 3000W typical)\r
    sign_behavior:\r
      has_sign: true\r
      meaning:\r
        es: Positiva indica consumo (carga), negativa indicaría generación (no aplica en doméstica pura).\r
        en: Positive indicates consumption (load), negative would indicate generation (not applicable in pure domestic).\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: Potencia cero indica equipo apagado o en standby.\r
        en: Zero power indicates equipment off or in standby.\r
    value_nature:\r
      kind: scalar\r
      nonnegative_only: true\r
      expected_interval: [0, 10000]\r
    interpretation_role:\r
      primary_for: consumption_assessment\r
      secondary_for: cost_estimation\r
    graph_binding:\r
      channels: [y_axis_output, label_annotation]\r
    pedagogical_notes:\r
      es: P=V·I conecta causa (V) y efecto (I). Es la magnitud que se paga en la factura indirectamente (como energía).\r
      en: P=V·I connects cause (V) and effect (I). It is the magnitude paid for indirectly in the bill (as energy).\r
\r
  - id: R\r
    symbol: R\r
    nombre:\r
      es: Resistencia eléctrica\r
      en: Electric resistance\r
    unidad_si: ohm\r
    dimension: M L^2 T^-3 I^-2\r
    descripcion:\r
      es: Oposición al paso de corriente eléctrica; determina cuánta corriente circulará a tensión dada.\r
      en: Opposition to the passage of electric current; determines how much current will flow at given voltage.\r
    is_vector: false\r
    components: null\r
    category: fundamental\r
    physical_role: context_magnitude\r
    used_in:\r
      - formulas.yaml\r
      - teoria.md\r
      - ejemplos.md\r
      - interpretacion.yaml\r
    common_mistake:\r
      es: Pensar que mayor resistencia implica mayor peligro, cuando en doméstica sucede lo contrario.\r
      en: Thinking higher resistance implies greater danger, when in domestic settings the opposite is true.\r
    typical_range:\r
      min: 0.001\r
      max: 1000000\r
      unit: ohm\r
      context: heating elements (10-100 ohm) to insulation (>1 Mohm)\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: La resistencia es intrínsecamente positiva. Valores negativos no tienen sentido físico.\r
        en: Resistance is intrinsically positive. Negative values have no physical meaning.\r
    zero_behavior:\r
      allowed: false\r
      meaning:\r
        es: Resistencia cero implica cortocircuito ideal (peligro extremo).\r
        en: Zero resistance implies ideal short circuit (extreme danger).\r
    value_nature:\r
      kind: scalar\r
      nonnegative_only: true\r
      expected_interval: [0.001, 1000000]\r
    interpretation_role:\r
      primary_for: safety_assessment\r
      secondary_for: power_calculation\r
    graph_binding:\r
      channels: [x_axis_variable, color_coding]\r
    pedagogical_notes:\r
      es: R baja = I alta = peligro. R alta = I baja = seguro. La inversa de la intuición común.\r
      en: Low R = high I = danger. High R = low I = safe. Counter to common intuition.\r
\r
  - id: E_kWh\r
    symbol: E_{kWh}\r
    nombre:\r
      es: Energía consumida\r
      en: Energy consumed\r
    unidad_si: kWh\r
    dimension: M L^2 T^-2\r
    descripcion:\r
      es: Energía eléctrica acumulada durante un período de tiempo; lo que se paga en la factura.\r
      en: Electrical energy accumulated during a period of time; what is paid for in the bill.\r
    is_vector: false\r
    components: null\r
    category: derived\r
    physical_role: secondary_magnitude\r
    used_in:\r
      - formulas.yaml\r
      - teoria.md\r
      - ejemplos.md\r
    common_mistake:\r
      es: Confundir kWh (energía) con kW (potencia), o pensar que un aparato de alta potencia siempre consume más energía total.\r
      en: Confusing kWh (energy) with kW (power), or thinking a high-power appliance always consumes more total energy.\r
    typical_range:\r
      min: 0\r
      max: 10000\r
      unit: kWh\r
      context: monthly billing (100-500 kWh typical household)\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: La energía consumida es siempre positiva. Representa acumulación escalar.\r
        en: Consumed energy is always positive. Represents scalar accumulation.\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: Energía cero indica no uso o período nulo.\r
        en: Zero energy indicates no usage or zero time period.\r
    value_nature:\r
      kind: accumulated\r
      nonnegative_only: true\r
      expected_interval: [0, 10000]\r
    interpretation_role:\r
      primary_for: cost_estimation\r
      secondary_for: consumption_tracking\r
    graph_binding:\r
      channels: [area_under_curve, label_annotation]\r
    pedagogical_notes:\r
      es: E_kWh = P_kW × t_h. La unidad de la factura. Integral de potencia sobre tiempo.\r
      en: E_kWh = P_kW × t_h. The billing unit. Integral of power over time.\r
\r
  - id: P_kW\r
    symbol: P_{kW}\r
    nombre:\r
      es: Potencia en kilovatios\r
      en: Power in kilowatts\r
    unidad_si: kW\r
    dimension: M L^2 T^-3\r
    descripcion:\r
      es: Potencia expresada en kW para facilitar cálculos de energía en kWh.\r
      en: Power expressed in kW to facilitate energy calculations in kWh.\r
    is_vector: false\r
    components: null\r
    category: parameter\r
    physical_role: auxiliary_magnitude\r
    used_in:\r
      - formulas.yaml\r
      - ejemplos.md\r
    common_mistake:\r
      es: Usar P en kW y V en V sin convertir unidades consistentemente.\r
      en: Using P in kW and V in V without converting units consistently.\r
    typical_range:\r
      min: 0\r
      max: 10\r
      unit: kW\r
      context: conversion parameter for energy calculations\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: Parámetro de conversión; hereda el signo de P pero usado siempre en valor absoluto.\r
        en: Conversion parameter; inherits sign from P but always used in absolute value.\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: P_kW cero indica ausencia de consumo.\r
        en: Zero P_kW indicates no consumption.\r
    value_nature:\r
      kind: parameter\r
      nonnegative_only: true\r
      expected_interval: [0, 10]\r
    interpretation_role:\r
      primary_for: unit_conversion\r
      secondary_for: null\r
    graph_binding:\r
      channels: []\r
    pedagogical_notes:\r
      es: Solo existe para evitar conversiones constantes W→kW. No es una magnitud física nueva.\r
      en: Only exists to avoid constant W→kW conversions. Not a new physical magnitude.\r
\r
  - id: t_h\r
    symbol: t_h\r
    nombre:\r
      es: Tiempo de uso\r
      en: Usage time\r
    unidad_si: h\r
    dimension: T\r
    descripcion:\r
      es: Duración del funcionamiento del equipo, típicamente expresada en horas para cálculos de energía.\r
      en: Duration of equipment operation, typically expressed in hours for energy calculations.\r
    is_vector: false\r
    components: null\r
    category: parameter\r
    physical_role: auxiliary_magnitude\r
    used_in:\r
      - formulas.yaml\r
      - ejemplos.md\r
    common_mistake:\r
      es: Olvidar convertir entre minutos y horas cuando se calcula energía en kWh.\r
      en: Forgetting to convert between minutes and hours when calculating energy in kWh.\r
    typical_range:\r
      min: 0\r
      max: 8760\r
      unit: h\r
      context: time parameter for energy accumulation\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: El tiempo transcurre siempre hacia adelante; es un parámetro unidireccional.\r
        en: Time always moves forward; it is a unidirectional parameter.\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: Tiempo cero indica instantáneo o no uso.\r
        en: Zero time indicates instantaneous or no usage.\r
    value_nature:\r
      kind: parameter\r
      nonnegative_only: true\r
      expected_interval: [0, 8760]\r
    interpretation_role:\r
      primary_for: duration_calculation\r
      secondary_for: null\r
    graph_binding:\r
      channels: [x_axis_variable]\r
    pedagogical_notes:\r
      es: Parámetro temporal auxiliar. No confundir con variable de estado del sistema.\r
      en: Auxiliary time parameter. Do not confuse with system state variable.\r
`;export{n as default};
