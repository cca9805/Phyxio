const e=`version: 5
magnitudes:
  - id: P_util
    symbol: P_{util}
    nombre:
      es: Potencia Útil
      en: Useful Power
    descripcion:
      es: Potencia neta transferida al fluido por una bomba o extraída de él por una turbina.
      en: Net power transferred to the fluid by a pump or extracted from it by a turbine.
    unidad_si: W
    dimension: M L^2 T^-3
    is_vector: false
    components: null
    category: potencia
    physical_role: variable-dependiente
    used_in: [potencia_bomba, eficiencia]
    common_mistake:
      es: Confundirla con la potencia eléctrica consumida, que siempre es mayor debido a las pérdidas.
      en: Confusing it with the electrical power consumed, which is always higher due to losses.
    typical_range: [0, 10^9]
    sign_behavior: depende-del-dispositivo
    zero_behavior: reposo-o-caudal-nulo
    value_nature: extensiva
    interpretation_role: indicador-estado
    graph_binding: coord-app.p_util
    pedagogical_notes:
      es: Representa el trabajo por unidad de tiempo que efectivamente recibe el fluido.
      en: It represents the work per unit of time that the fluid effectively receives.

  - id: Q
    symbol: Q
    nombre:
      es: Caudal Volumétrico
      en: Volumetric Flow Rate
    descripcion:
      es: Volumen de fluido que circula a través de una sección por unidad de tiempo.
      en: Volume of fluid circulating through a section per unit of time.
    unidad_si: m^3/s
    dimension: L^3 T^-1
    is_vector: false
    components: null
    category: cinematica
    physical_role: parametro-sistema
    used_in: [potencia_bomba]
    common_mistake:
      es: Olvidar que el caudal se mantiene constante en flujo estacionario incompresible.
      en: Forgetting that the flow rate remains constant in steady incompressible flow.
    typical_range: [10^-6, 10^4]
    sign_behavior: siempre-positivo
    zero_behavior: estatico
    value_nature: extensiva
    interpretation_role: control-entrada
    graph_binding: coord-app.q
    pedagogical_notes:
      es: Es el producto del área por la velocidad media en la sección.
      en: It is the product of the area by the average velocity in the section.

  - id: dp
    symbol: \\Delta p
    nombre:
      es: Diferencia de Presión
      en: Pressure Difference
    descripcion:
      es: Variación de presión neta que el fluido experimenta al atravesar el dispositivo.
      en: Net pressure variation that the fluid experiences when passing through the device.
    unidad_si: Pa
    dimension: M L^-1 T^-2
    is_vector: false
    components: null
    category: mecanica-fluidos
    physical_role: condicion-entorno
    used_in: [potencia_bomba]
    common_mistake:
      es: No considerar las pérdidas de carga en el sistema antes y después del dispositivo.
      en: Not considering head losses in the system before and after the device.
    typical_range: [0, 10^8]
    sign_behavior: aumento-o-caida
    zero_behavior: sin-gradiente
    value_nature: intensiva
    interpretation_role: parametro-diseño
    graph_binding: null
    pedagogical_notes:
      es: Representa la 'fuerza' impulsora o extraída por unidad de área.
      en: It represents the driving or extracted 'force' per unit area.

  - id: eta
    symbol: \\eta
    nombre:
      es: Eficiencia
      en: Efficiency
    descripcion:
      es: Relación entre la potencia útil y la potencia de entrada suministrada.
      en: Ratio between the useful power and the input power supplied.
    unidad_si: "1"
    dimension: "1"
    is_vector: false
    components: null
    category: coeficiente
    physical_role: parametro-sistema
    used_in: [eficiencia]
    common_mistake:
      es: Expresarla como un porcentaje en cálculos matemáticos directos (debe ser < 1).
      en: Expressing it as a percentage in direct mathematical calculations (must be < 1).
    typical_range: [0, 1]
    sign_behavior: siempre-positivo
    zero_behavior: disipacion-total
    value_nature: intensiva
    interpretation_role: eficiencia-diseño
    graph_binding: null
    pedagogical_notes:
      es: Engloba pérdidas mecánicas, volumétricas e hidráulicas.
      en: It encompasses mechanical, volumetric, and hydraulic losses.

  - id: P_in
    symbol: P_{in}
    nombre:
      es: Potencia de Entrada
      en: Input Power
    descripcion:
      es: Potencia total consumida por el sistema (ej. potencia eléctrica o mecánica en el eje).
      en: Total power consumed by the system (e.g., electrical or mechanical shaft power).
    unidad_si: W
    dimension: M L^2 T^-3
    is_vector: false
    components: null
    category: potencia
    physical_role: condicion-entorno
    used_in: [eficiencia]
    common_mistake:
      es: Suponer que es igual a la potencia útil (ignorando la segunda ley de la termodinámica).
      en: Assuming it equals useful power (ignoring the second law of thermodynamics).
    typical_range: [0, 10^9]
    sign_behavior: siempre-positivo
    zero_behavior: apagado
    value_nature: extensiva
    interpretation_role: indicador-estado
    graph_binding: null
    pedagogical_notes:
      es: Es el costo energético de operar la máquina.
      en: It is the energy cost of operating the machine.
`;export{e as default};
