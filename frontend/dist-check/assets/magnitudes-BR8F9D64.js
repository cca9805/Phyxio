const n=`version: 2\r
magnitudes:\r
  - id: P\r
    symbol: P\r
    nombre:\r
      es: Potencia de la carga\r
      en: Load power\r
    descripcion:\r
      es: Potencia nominal del equipo conectado al interruptor.\r
      en: Nominal power of the device connected to the switch.\r
    unidad: W\r
    unidad_si: W\r
    dimension: M L^2 T^-3\r
    is_vector: false\r
    components: []\r
    category: energia_potencia\r
    physical_role:\r
      es: magnitud de entrada\r
      en: input quantity\r
    rol_fisico:\r
      es: magnitud de entrada\r
      en: input quantity\r
    used_in:\r
      - corriente\r
    common_mistake:\r
      es: Usar la potencia de standby en lugar de la nominal máxima.\r
      en: Using standby power instead of maximum nominal power.\r
    rango_tipico:\r
      min: 1\r
      max: 4000\r
      unidad: W\r
    typical_range:\r
      min: 1\r
      max: 4000\r
      unit: W\r
    sign_behavior:\r
      es: Siempre positivo.\r
      en: Always positive.\r
    zero_behavior:\r
      es: P = 0 implica equipo apagado o en standby.\r
      en: P = 0 implies device off or in standby.\r
    value_nature: continuo\r
    comportamiento: escalar positivo\r
    interpretation_role: input\r
    graph_binding:\r
      es: Eje horizontal en gráfico I vs P.\r
      en: Horizontal axis in I vs P graph.\r
    pedagogical_notes:\r
      es: Se lee directamente de la etiqueta del equipo.\r
      en: Read directly from the device label.\r
    pedagogical_note:\r
      es: Se lee directamente de la etiqueta del equipo.\r
      en: Read directly from the device label.\r
\r
  - id: V\r
    symbol: V\r
    nombre:\r
      es: Tensión de alimentación\r
      en: Supply voltage\r
    descripcion:\r
      es: Tensión nominal de la instalación donde opera el interruptor.\r
      en: Nominal voltage of the installation where the switch operates.\r
    unidad: V\r
    unidad_si: V\r
    dimension: M L^2 T^-3 I^-1\r
    is_vector: false\r
    components: []\r
    category: electromagnetismo\r
    physical_role:\r
      es: parámetro de contexto\r
      en: context parameter\r
    rol_fisico:\r
      es: parámetro de contexto\r
      en: context parameter\r
    used_in:\r
      - corriente\r
    common_mistake:\r
      es: Usar 220 V en lugar de 230 V en instalaciones europeas modernas.\r
      en: Using 220 V instead of 230 V in modern European installations.\r
    rango_tipico:\r
      min: 12\r
      max: 400\r
      unidad: V\r
    typical_range:\r
      min: 12\r
      max: 400\r
      unit: V\r
    sign_behavior:\r
      es: Positivo en corriente alterna (valor eficaz).\r
      en: Positive in AC (RMS value).\r
    zero_behavior:\r
      es: V = 0 implica sin suministro eléctrico.\r
      en: V = 0 implies no electrical supply.\r
    value_nature: continuo\r
    comportamiento: escalar positivo\r
    interpretation_role: input\r
    graph_binding:\r
      es: Parámetro de escala en gráfico I vs P.\r
      en: Scale parameter in I vs P graph.\r
    pedagogical_notes:\r
      es: En instalaciones domésticas europeas es 230 V.\r
      en: In European domestic installations it is 230 V.\r
    pedagogical_note:\r
      es: En instalaciones domésticas europeas es 230 V.\r
      en: In European domestic installations it is 230 V.\r
\r
  - id: I\r
    symbol: I\r
    nombre:\r
      es: Corriente de maniobra\r
      en: Switching current\r
    descripcion:\r
      es: Corriente que circula por los contactos del interruptor en estado ON.\r
      en: Current flowing through the switch contacts when in ON state.\r
    unidad: A\r
    unidad_si: A\r
    dimension: I\r
    is_vector: false\r
    components: []\r
    category: electromagnetismo\r
    physical_role:\r
      es: magnitud derivada\r
      en: derived quantity\r
    rol_fisico:\r
      es: magnitud derivada\r
      en: derived quantity\r
    used_in:\r
      - corriente\r
      - perdida_on\r
    common_mistake:\r
      es: Incluir R_on en el cálculo de I, cuando su efecto es despreciable.\r
      en: Including R_on in the calculation of I, when its effect is negligible.\r
    rango_tipico:\r
      min: 0.01\r
      max: 50\r
      unidad: A\r
    typical_range:\r
      min: 0.01\r
      max: 50\r
      unit: A\r
    sign_behavior:\r
      es: No negativo.\r
      en: Non-negative.\r
    zero_behavior:\r
      es: I = 0 implica interruptor en OFF o carga desconectada.\r
      en: I = 0 implies switch in OFF or load disconnected.\r
    value_nature: continuo\r
    comportamiento: escalar no negativo\r
    interpretation_role: intermediate\r
    graph_binding:\r
      es: Eje vertical en gráfico I vs P.\r
      en: Vertical axis in I vs P graph.\r
    pedagogical_notes:\r
      es: Vincula P con P_on mediante la dependencia cuadrática P_on ∝ I².\r
      en: Links P with P_on via the quadratic dependence P_on ∝ I².\r
    pedagogical_note:\r
      es: Vincula P con P_on mediante la dependencia cuadrática P_on ∝ I².\r
      en: Links P with P_on via the quadratic dependence P_on ∝ I².\r
\r
  - id: R_on\r
    symbol: R_on\r
    nombre:\r
      es: Resistencia en estado ON\r
      en: ON-state resistance\r
    descripcion:\r
      es: Resistencia de los contactos del interruptor cuando está cerrado (ON).\r
      en: Resistance of the switch contacts when closed (ON).\r
    unidad: Ω\r
    unidad_si: ohm\r
    dimension: M L^2 T^-3 I^-2\r
    is_vector: false\r
    components: []\r
    category: electromagnetismo\r
    physical_role:\r
      es: parámetro de calidad del contacto\r
      en: contact quality parameter\r
    rol_fisico:\r
      es: parámetro de calidad del contacto\r
      en: contact quality parameter\r
    used_in:\r
      - perdida_on\r
    common_mistake:\r
      es: Asumir R_on = 0 para todos los interruptores en servicio.\r
      en: Assuming R_on = 0 for all switches in service.\r
    rango_tipico:\r
      min: 0.001\r
      max: 2\r
      unidad: Ω\r
    typical_range:\r
      min: 0.001\r
      max: 2\r
      unit: Ω\r
    sign_behavior:\r
      es: Siempre positivo.\r
      en: Always positive.\r
    zero_behavior:\r
      es: R_on = 0 es el interruptor ideal. No existe en la práctica.\r
      en: R_on = 0 is the ideal switch. Does not exist in practice.\r
    value_nature: continuo\r
    comportamiento: escalar no negativo\r
    interpretation_role: input\r
    graph_binding:\r
      es: Parámetro de la parábola P_on vs I.\r
      en: Parameter of the P_on vs I parabola.\r
    pedagogical_notes:\r
      es: Diferencia el interruptor ideal del real. Su aumento indica degradación.\r
      en: Distinguishes the ideal switch from the real one. Its increase indicates degradation.\r
    pedagogical_note:\r
      es: Diferencia el interruptor ideal del real. Su aumento indica degradación.\r
      en: Distinguishes the ideal switch from the real one. Its increase indicates degradation.\r
\r
  - id: P_on\r
    symbol: P_on\r
    nombre:\r
      es: Pérdida resistiva en ON\r
      en: Resistive loss in ON state\r
    descripcion:\r
      es: Potencia disipada en los contactos del interruptor cuando conduce corriente.\r
      en: Power dissipated in the switch contacts when conducting current.\r
    unidad: W\r
    unidad_si: W\r
    dimension: M L^2 T^-3\r
    is_vector: false\r
    components: []\r
    category: energia_potencia\r
    physical_role:\r
      es: magnitud de riesgo\r
      en: risk quantity\r
    rol_fisico:\r
      es: magnitud de riesgo\r
      en: risk quantity\r
    used_in:\r
      - perdida_on\r
      - energia_on\r
    common_mistake:\r
      es: Calcular P_on = I · R_on omitiendo el cuadrado de I.\r
      en: Calculating P_on = I · R_on omitting the square of I.\r
    rango_tipico:\r
      min: 0\r
      max: 50\r
      unidad: W\r
    typical_range:\r
      min: 0\r
      max: 50\r
      unit: W\r
    sign_behavior:\r
      es: Siempre no negativo.\r
      en: Always non-negative.\r
    zero_behavior:\r
      es: P_on = 0 solo en el interruptor ideal con R_on = 0.\r
      en: P_on = 0 only in the ideal switch with R_on = 0.\r
    value_nature: continuo\r
    comportamiento: escalar no negativo\r
    interpretation_role: output\r
    graph_binding:\r
      es: Eje vertical en gráfico P_on vs I (parábola).\r
      en: Vertical axis in P_on vs I graph (parabola).\r
    pedagogical_notes:\r
      es: 'Resultado central del análisis. Umbral de riesgo: 1 W (vigilar), 5 W (sustituir).'\r
      en: 'Central analysis result. Risk threshold: 1 W (monitor), 5 W (replace).'\r
    pedagogical_note:\r
      es: 'Resultado central del análisis. Umbral de riesgo: 1 W (vigilar), 5 W (sustituir).'\r
      en: 'Central analysis result. Risk threshold: 1 W (monitor), 5 W (replace).'\r
\r
  - id: t_on\r
    symbol: t_on\r
    nombre:\r
      es: Tiempo de conducción\r
      en: Conduction time\r
    descripcion:\r
      es: Tiempo durante el que el interruptor permanece cerrado (ON) en un período de análisis.\r
      en: Time during which the switch remains closed (ON) in an analysis period.\r
    unidad: s\r
    unidad_si: s\r
    dimension: T\r
    is_vector: false\r
    components: []\r
    category: cinematica\r
    physical_role:\r
      es: parámetro temporal\r
      en: temporal parameter\r
    rol_fisico:\r
      es: parámetro temporal\r
      en: temporal parameter\r
    used_in:\r
      - energia_on\r
    common_mistake:\r
      es: Olvidar convertir horas a segundos antes de calcular E_on.\r
      en: Forgetting to convert hours to seconds before calculating E_on.\r
    rango_tipico:\r
      min: 1\r
      max: 86400\r
      unidad: s\r
    typical_range:\r
      min: 1\r
      max: 86400\r
      unit: s\r
    sign_behavior:\r
      es: Siempre positivo.\r
      en: Always positive.\r
    zero_behavior:\r
      es: t_on = 0 implica interruptor nunca encendido en el período.\r
      en: t_on = 0 implies switch never on in the period.\r
    value_nature: continuo\r
    comportamiento: escalar positivo\r
    interpretation_role: input\r
    graph_binding:\r
      es: Eje horizontal en gráfico E_on vs t_on.\r
      en: Horizontal axis in E_on vs t_on graph.\r
    pedagogical_notes:\r
      es: Permite pasar de potencia instantánea P_on a energía acumulada E_on.\r
      en: Allows moving from instantaneous power P_on to accumulated energy E_on.\r
    pedagogical_note:\r
      es: Permite pasar de potencia instantánea P_on a energía acumulada E_on.\r
      en: Allows moving from instantaneous power P_on to accumulated energy E_on.\r
\r
  - id: E_on\r
    symbol: E_on\r
    nombre:\r
      es: Energía disipada en conducción\r
      en: Energy dissipated during conduction\r
    descripcion:\r
      es: Energía total disipada en los contactos del interruptor durante un período de conducción.\r
      en: Total energy dissipated in the switch contacts during a conduction period.\r
    unidad: J\r
    unidad_si: J\r
    dimension: M L^2 T^-2\r
    is_vector: false\r
    components: []\r
    category: energia_potencia\r
    physical_role:\r
      es: magnitud acumulada\r
      en: accumulated quantity\r
    rol_fisico:\r
      es: magnitud acumulada\r
      en: accumulated quantity\r
    used_in:\r
      - energia_on\r
    common_mistake:\r
      es: Interpretar E_on grande como riesgo térmico alto. El riesgo lo determina P_on, no E_on.\r
      en: Interpreting large E_on as high thermal risk. Risk is determined by P_on, not E_on.\r
    rango_tipico:\r
      min: 0\r
      max: 1000000\r
      unidad: J\r
    typical_range:\r
      min: 0\r
      max: 1000000\r
      unit: J\r
    sign_behavior:\r
      es: Siempre no negativo.\r
      en: Always non-negative.\r
    zero_behavior:\r
      es: E_on = 0 implica interruptor ideal o sin tiempo de conducción.\r
      en: E_on = 0 implies ideal switch or zero conduction time.\r
    value_nature: continuo\r
    comportamiento: escalar no negativo\r
    interpretation_role: output\r
    graph_binding:\r
      es: Eje vertical en gráfico E_on vs t_on (recta).\r
      en: Vertical axis in E_on vs t_on graph (line).\r
    pedagogical_notes:\r
      es: Útil para análisis energético. Dividir entre 3 600 000 para convertir a kWh.\r
      en: Useful for energy analysis. Divide by 3,600,000 to convert to kWh.\r
    pedagogical_note:\r
      es: Útil para análisis energético. Dividir entre 3 600 000 para convertir a kWh.\r
      en: Useful for energy analysis. Divide by 3,600,000 to convert to kWh.\r
`;export{n as default};
