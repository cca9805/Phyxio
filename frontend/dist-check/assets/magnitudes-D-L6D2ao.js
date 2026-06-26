const e=`version: 5
magnitudes:
  - id: p
    symbol: p
    nombre:
      es: presión total
      en: total pressure
    unidad_si: Pa
    descripcion:
      es: Presión absoluta a una profundidad determinada, sumando la atmosférica.
      en: Absolute pressure at a given depth, including atmospheric pressure.
    tipo: escalar
    dimension: M L^-1 T^-2
    is_vector: false
    components: []
    category: state
    physical_role: state_variable
    used_in:
      - presion-hidrostatica
      - principio-fundamental-de-la-hidrostatica
    common_mistake:
      es: Olvidar sumar la presión atmosférica p0 si se pide presión absoluta.
      en: Forgetting to add atmospheric pressure p0 if absolute pressure is required.
    typical_range: [101325, 1e7]
    sign_behavior: strictly_positive
    zero_behavior: vacuum
    value_nature: continuous
    interpretation_role: output
    graph_binding: y-axis
    pedagogical_notes:
      es: Es la suma de la presión en la superficie y la debida a la columna de fluido.
      en: It is the sum of surface pressure and the pressure due to the fluid column.

  - id: p0
    symbol: p_0
    nombre:
      es: presión atmosférica
      en: atmospheric pressure
    unidad_si: Pa
    descripcion:
      es: Presión ejercida por la atmósfera sobre la superficie libre del líquido.
      en: Pressure exerted by the atmosphere on the free surface of the liquid.
    tipo: escalar
    dimension: M L^-1 T^-2
    is_vector: false
    components: []
    category: state
    physical_role: driver
    used_in:
      - presion-hidrostatica
    common_mistake:
      es: Asumir que siempre es exactamente 1 atm si el problema indica otra cosa.
      en: Assuming it is always exactly 1 atm if the problem states otherwise.
    typical_range: [80000, 110000]
    sign_behavior: strictly_positive
    zero_behavior: vacuum
    value_nature: continuous
    interpretation_role: parameter
    graph_binding: none
    pedagogical_notes:
      es: A nivel del mar suele tomarse como 101325 Pa.
      en: At sea level, it is usually taken as 101325 Pa.

  - id: rho
    symbol: \\rho
    nombre:
      es: densidad del fluido
      en: fluid density
    unidad_si: kg/m^3
    descripcion:
      es: Masa por unidad de volumen del fluido.
      en: Mass per unit volume of the fluid.
    tipo: escalar
    dimension: M L^-3
    is_vector: false
    components: []
    category: state
    physical_role: property
    used_in:
      - presion-hidrostatica
    common_mistake:
      es: Usar la densidad en g/cm³ en lugar de kg/m³ en la fórmula SI.
      en: Using density in g/cm³ instead of kg/m³ in the SI formula.
    typical_range: [0.1, 20000]
    sign_behavior: strictly_positive
    zero_behavior: vacuum
    value_nature: continuous
    interpretation_role: parameter
    graph_binding: none
    pedagogical_notes:
      es: Se asume constante en el modelo de fluido incompresible.
      en: It is assumed constant in the incompressible fluid model.

  - id: g
    symbol: g
    nombre:
      es: aceleración de la gravedad
      en: gravitational acceleration
    unidad_si: m/s^2
    descripcion:
      es: Aceleración debida a la atracción gravitatoria.
      en: Acceleration due to gravitational attraction.
    tipo: escalar
    dimension: L T^-2
    is_vector: false
    components: []
    category: constant
    physical_role: driver
    used_in:
      - presion-hidrostatica
    common_mistake:
      es: Usar el valor en otros planetas si el enunciado no lo especifica.
      en: Using the value on other planets if the statement does not specify it.
    typical_range: [1, 30]
    sign_behavior: strictly_positive
    zero_behavior: weightlessness
    value_nature: continuous
    interpretation_role: parameter
    graph_binding: none
    pedagogical_notes:
      es: En la Tierra se suele aproximar por 9.8 m/s².
      en: On Earth, it is usually approximated by 9.8 m/s².

  - id: h
    symbol: h
    nombre:
      es: profundidad
      en: depth
    unidad_si: m
    descripcion:
      es: Distancia vertical medida desde la superficie libre hacia abajo.
      en: Vertical distance measured downwards from the free surface.
    tipo: escalar
    dimension: L
    is_vector: false
    components: []
    category: state
    physical_role: state_variable
    used_in:
      - presion-hidrostatica
    common_mistake:
      es: Confundir altura (desde el fondo) con profundidad (desde la superficie).
      en: Confusing height (from bottom) with depth (from surface).
    typical_range: [0, 11000]
    sign_behavior: positive_or_zero
    zero_behavior: surface
    value_nature: continuous
    interpretation_role: parameter
    graph_binding: x-axis
    pedagogical_notes:
      es: A mayor profundidad, mayor es el peso de la columna de fluido superior.
      en: The deeper you go, the greater the weight of the fluid column above.

  - id: dp
    symbol: \\Delta p
    nombre:
      es: presión manométrica
      en: gauge pressure
    unidad_si: Pa
    descripcion:
      es: Diferencia entre la presión total y la presión atmosférica.
      en: Difference between total pressure and atmospheric pressure.
    tipo: escalar
    dimension: M L^-1 T^-2
    is_vector: false
    components: []
    category: derived
    physical_role: state_variable
    used_in:
      - presion-hidrostatica
    common_mistake:
      es: No distinguir entre presión absoluta (p) y manométrica (dp).
      en: Not distinguishing between absolute pressure (p) and gauge pressure (dp).
    typical_range: [0, 1e7]
    sign_behavior: positive_or_zero
    zero_behavior: surface
    value_nature: continuous
    interpretation_role: output
    graph_binding: none
    pedagogical_notes:
      es: Representa únicamente la presión debida al propio fluido.
      en: It represents only the pressure due to the fluid itself.
`;export{e as default};
