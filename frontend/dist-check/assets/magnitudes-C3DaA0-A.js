const e=`version: 5
magnitudes:
  - id: dp
    symbol: \\Delta p
    nombre:
      es: Diferencia de presión
      en: Pressure difference
    descripcion:
      es: Variación de presión entre dos puntos del sistema manométrico.
      en: Pressure variation between two points of the manometric system.
    unidad_si: Pa
    dimension: M L^-1 T^-2
    is_vector: false
    components: null
    category: mecanica-fluidos
    physical_role: variable-dependiente
    used_in: [manometro, presion_relativa]
    common_mistake:
      es: Confundir la presión relativa con la presión absoluta total.
      en: Confusing gauge pressure with total absolute pressure.
    typical_range: [-10^5, 10^7]
    sign_behavior: direccion-flujo
    zero_behavior: equilibrio
    value_nature: intensiva
    interpretation_role: indicador-estado
    graph_binding: svg-manometros.dp
    pedagogical_notes:
      es: Es lo que realmente medimos con el manómetro en U.
      en: This is what we actually measure with the U-tube manometer.

  - id: rho
    symbol: \\rho
    nombre:
      es: Densidad del líquido manométrico
      en: Manometric liquid density
    descripcion:
      es: Densidad del fluido contenido en el manómetro (ej. mercurio, agua).
      en: Density of the fluid contained in the manometer (e.g., mercury, water).
    unidad_si: kg/m^3
    dimension: M L^-3
    is_vector: false
    components: null
    category: propiedad-fluido
    physical_role: parametro-sistema
    used_in: [manometro]
    common_mistake:
      es: Usar la densidad del gas que se está midiendo en lugar de la del líquido.
      en: Using the density of the gas being measured instead of the liquid's density.
    typical_range: [800, 14000]
    sign_behavior: siempre-positivo
    zero_behavior: imposible
    value_nature: intensiva
    interpretation_role: condicion-entorno
    graph_binding: svg-manometros.rho
    pedagogical_notes:
      es: Los líquidos densos como el mercurio se usan para medir presiones altas.
      en: Dense liquids like mercury are used to measure high pressures.

  - id: g
    symbol: g
    nombre:
      es: Gravedad
      en: Gravity
    descripcion:
      es: Aceleración del campo gravitatorio local.
      en: Acceleration of the local gravitational field.
    unidad_si: m/s^2
    dimension: L T^-2
    is_vector: true
    components: [0, -1, 0]
    category: campo
    physical_role: constante-local
    used_in: [manometro]
    common_mistake:
      es: Olvidar que el manómetro depende de la gravedad para funcionar.
      en: Forgetting that the manometer depends on gravity to function.
    typical_range: [9.7, 9.9]
    sign_behavior: hacia-abajo
    zero_behavior: ingravidez
    value_nature: intensiva
    interpretation_role: condicion-entorno
    graph_binding: svg-manometros.g
    pedagogical_notes:
      es: Valor estándar terrestre 9.81 m/s².
      en: Standard terrestrial value 9.81 m/s².

  - id: dh
    symbol: \\Delta h
    nombre:
      es: Desnivel de columna
      en: Column level difference
    descripcion:
      es: Diferencia de altura entre las dos ramas del manómetro en U.
      en: Height difference between the two branches of the U-tube manometer.
    unidad_si: m
    dimension: L
    is_vector: false
    components: null
    category: geometrica
    physical_role: variable-independiente
    used_in: [manometro]
    common_mistake:
      es: Medir desde el fondo en lugar de medir la diferencia entre niveles.
      en: Measuring from the bottom instead of measuring the difference between levels.
    typical_range: [0, 2]
    sign_behavior: siempre-positivo
    zero_behavior: equilibrio-presiones
    value_nature: extensiva
    interpretation_role: indicador-visual
    graph_binding: svg-manometros.dh
    pedagogical_notes:
      es: Es la magnitud observable que nos permite calcular la presión.
      en: It is the observable quantity that allows us to calculate pressure.

  - id: p1
    symbol: p_1
    nombre:
      es: Presión de referencia
      en: Reference pressure
    descripcion:
      es: Presión en la rama conocida del manómetro (usualmente la atmosférica).
      en: Pressure in the known branch of the manometer (usually atmospheric).
    unidad_si: Pa
    dimension: M L^-1 T^-2
    is_vector: false
    components: null
    category: mecanica-fluidos
    physical_role: condicion-contorno
    used_in: [presion_relativa]
    common_mistake:
      es: No considerar si el manómetro está abierto o cerrado al vacío.
      en: Not considering whether the manometer is open or closed to a vacuum.
    typical_range: [0, 1.1 * 10^5]
    sign_behavior: siempre-positivo
    zero_behavior: vacio-absoluto
    value_nature: intensiva
    interpretation_role: referencia-presion
    graph_binding: svg-manometros.p1
    pedagogical_notes:
      es: En manómetros abiertos, p1 = p_atm.
      en: In open manometers, p1 = p_atm.

  - id: p2
    symbol: p_2
    nombre:
      es: Presión del gas
      en: Gas pressure
    descripcion:
      es: Presión absoluta que se desea medir en el sistema.
      en: Absolute pressure to be measured in the system.
    unidad_si: Pa
    dimension: M L^-1 T^-2
    is_vector: false
    components: null
    category: mecanica-fluidos
    physical_role: variable-dependiente
    used_in: [presion_relativa]
    common_mistake:
      es: Confundir con la presión relativa dp.
      en: Confusing with the gauge pressure dp.
    typical_range: [0, 10^7]
    sign_behavior: siempre-positivo
    zero_behavior: vacio
    value_nature: intensiva
    interpretation_role: indicador-resultado
    graph_binding: svg-manometros.p2
    pedagogical_notes:
      es: Es el resultado final de la medición.
      en: It is the final result of the measurement.

  - id: F_L
    symbol: F_L
    nombre:
      es: Fuerza de presión izquierda
      en: Left pressure force
    descripcion:
      es: Fuerza ejercida por la presión p1 sobre la columna.
      en: Force exerted by pressure p1 on the column.
    unidad_si: N
    dimension: M L T^-2
    is_vector: true
    components: [1, 0, 0]
    category: fuerza
    physical_role: agente-externo
    used_in: [balance_dcl]
    common_mistake:
      es: Olvidar que la presión actúa en todas direcciones pero aquí nos interesa la horizontal.
      en: Forgetting that pressure acts in all directions but here we are interested in the horizontal one.
    typical_range: [0, 10^4]
    sign_behavior: hacia-derecha
    zero_behavior: vacio
    value_nature: extensiva
    interpretation_role: causa-movimiento
    graph_binding: dcl-manometros.F_L
    pedagogical_notes:
      es: Empuja la columna hacia la derecha.
      en: Pushes the column to the right.

  - id: F_R
    symbol: F_R
    nombre:
      es: Fuerza de presión derecha
      en: Right pressure force
    descripcion:
      es: Fuerza ejercida por la presión p2 sobre la columna.
      en: Force exerted by pressure p2 on the column.
    unidad_si: N
    dimension: M L T^-2
    is_vector: true
    components: [-1, 0, 0]
    category: fuerza
    physical_role: agente-externo
    used_in: [balance_dcl]
    common_mistake:
      es: Invertir su sentido en el diagrama.
      en: Reversing its direction in the diagram.
    typical_range: [0, 10^4]
    sign_behavior: hacia-izquierda
    zero_behavior: vacio
    value_nature: extensiva
    interpretation_role: causa-movimiento
    graph_binding: dcl-manometros.F_R
    pedagogical_notes:
      es: Se opone a la fuerza de la rama izquierda.
      en: It opposes the force from the left branch.
`;export{e as default};
