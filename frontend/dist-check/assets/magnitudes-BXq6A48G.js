const e=`version: 5
magnitudes:
  - id: p1
    symbol: p_1
    nombre:
      es: presión en el punto 1
      en: pressure at point 1
    unidad_si: Pa
    descripcion:
      es: Presión absoluta medida en la cota de referencia inicial.
      en: Absolute pressure measured at the initial reference elevation.
    tipo: escalar
    dimension: M L^-1 T^-2
    is_vector: false
    components: []
    category: state
    physical_role: state_variable
    used_in:
      - principio-fundamental-de-la-hidrostatica
    common_mistake:
      es: Usar la presión manométrica en lugar de la absoluta si se requiere p2 absoluta.
      en: Using gauge pressure instead of absolute pressure if absolute p2 is required.
    typical_range: [0, 1e9]
    sign_behavior: strictly_positive
    zero_behavior: vacuum
    value_nature: continuous
    interpretation_role: parameter
    graph_binding: bar_reference
    pedagogical_notes:
      es: Punto de partida para el cálculo de la variación hidrostática.
      en: Starting point for the calculation of hydrostatic variation.

  - id: p2
    symbol: p_2
    nombre:
      es: presión en el punto 2
      en: pressure at point 2
    unidad_si: Pa
    descripcion:
      es: Presión absoluta resultante en la segunda cota analizada.
      en: Resulting absolute pressure at the second analyzed elevation.
    tipo: escalar
    dimension: M L^-1 T^-2
    is_vector: false
    components: []
    category: state
    physical_role: state_variable
    used_in:
      - principio-fundamental-de-la-hidrostatica
    common_mistake:
      es: Obtener un valor menor a p1 cuando el punto 2 está a menor altura.
      en: Obtaining a value lower than p1 when point 2 is at a lower height.
    typical_range: [0, 1e9]
    sign_behavior: strictly_positive
    zero_behavior: vacuum
    value_nature: continuous
    interpretation_role: output
    graph_binding: bar_result
    pedagogical_notes:
      es: Presión final calculada tras considerar el peso del fluido entre cotas.
      en: Final pressure calculated after considering the fluid weight between elevations.

  - id: rho
    symbol: \\rho
    nombre:
      es: densidad del fluido
      en: fluid density
    unidad_si: kg/m^3
    descripcion:
      es: Masa por unidad de volumen del fluido, asumida constante.
      en: Mass per unit volume of the fluid, assumed constant.
    tipo: escalar
    dimension: M L^-3
    is_vector: false
    components: []
    category: state
    physical_role: property
    used_in:
      - principio-fundamental-de-la-hidrostatica
    common_mistake:
      es: Usar g/cm³ (como 1 para el agua) en lugar de kg/m³ (1000).
      en: Using g/cm³ (like 1 for water) instead of kg/m³ (1000).
    typical_range: [0.1, 25000]
    sign_behavior: strictly_positive
    zero_behavior: vacuum
    value_nature: continuous
    interpretation_role: parameter
    graph_binding: weight_density
    pedagogical_notes:
      es: Factor de proporcionalidad en el gradiente de presión.
      en: Proportionality factor in the pressure gradient.

  - id: g
    symbol: g
    nombre:
      es: gravedad
      en: gravity
    unidad_si: m/s^2
    descripcion:
      es: Intensidad del campo gravitatorio local.
      en: Intensity of the local gravitational field.
    tipo: escalar
    dimension: L T^-2
    is_vector: false
    components: []
    category: constant
    physical_role: driver
    used_in:
      - principio-fundamental-de-la-hidrostatica
    common_mistake:
      es: Olvidar que es una aceleración y no una fuerza.
      en: Forgetting that it is an acceleration and not a force.
    typical_range: [1, 30]
    sign_behavior: strictly_positive
    zero_behavior: weightlessness
    value_nature: continuous
    interpretation_role: parameter
    graph_binding: gravity_field
    pedagogical_notes:
      es: Define la dirección preferente del gradiente de presión (vertical).
      en: Defines the preferred direction of the pressure gradient (vertical).

  - id: z1
    symbol: z_1
    nombre:
      es: cota vertical 1
      en: vertical elevation 1
    unidad_si: m
    descripcion:
      es: Altura del primer punto respecto al nivel de referencia.
      en: Height of the first point relative to the reference level.
    tipo: escalar
    dimension: L
    is_vector: false
    components: []
    category: state
    physical_role: state_variable
    used_in:
      - principio-fundamental-de-la-hidrostatica
    common_mistake:
      es: Medir desde la superficie en lugar de usar un eje Z hacia arriba.
      en: Measuring from the surface instead of using a Z-axis upwards.
    typical_range: [-11000, 11000]
    sign_behavior: real
    zero_behavior: reference_level
    value_nature: continuous
    interpretation_role: parameter
    graph_binding: pos1
    pedagogical_notes:
      es: Posición vertical inicial en el sistema de coordenadas.
      en: Initial vertical position in the coordinate system.

  - id: z2
    symbol: z_2
    nombre:
      es: cota vertical 2
      en: vertical elevation 2
    unidad_si: m
    descripcion:
      es: Altura del segundo punto respecto al nivel de referencia.
      en: Height of the second point relative to the reference level.
    tipo: escalar
    dimension: L
    is_vector: false
    components: []
    category: state
    physical_role: state_variable
    used_in:
      - principio-fundamental-de-la-hidrostatica
    common_mistake:
      es: Confundir los subíndices 1 y 2 en la diferencia (z1 - z2).
      en: Confusing subscripts 1 and 2 in the difference (z1 - z2).
    typical_range: [-11000, 11000]
    sign_behavior: real
    zero_behavior: reference_level
    value_nature: continuous
    interpretation_role: parameter
    graph_binding: pos2
    pedagogical_notes:
      es: Posición vertical final para el cálculo de la presión.
      en: Final vertical position for the pressure calculation.

  - id: dp
    symbol: \\Delta p
    nombre:
      es: salto de presión
      en: pressure jump
    unidad_si: Pa
    descripcion:
      es: Variación neta de presión entre los dos puntos estudiados.
      en: Net pressure variation between the two studied points.
    tipo: escalar
    dimension: M L^-1 T^-2
    is_vector: false
    components: []
    category: derived
    physical_role: state_variable
    used_in:
      - principio-fundamental-de-la-hidrostatica
    common_mistake:
      es: Ignorar que dp debe ser positivo si descendemos.
      en: Ignoring that dp must be positive if we descend.
    typical_range: [-1e9, 1e9]
    sign_behavior: real
    zero_behavior: isobaric
    value_nature: continuous
    interpretation_role: output
    graph_binding: delta_bar
    pedagogical_notes:
      es: Representa el peso de la columna de fluido por unidad de área entre cotas.
      en: Represents the weight of the fluid column per unit area between elevations.

  - id: dz
    symbol: \\Delta z
    nombre:
      es: diferencia de cotas
      en: elevation difference
    unidad_si: m
    descripcion:
      es: Cambio de altura vertical entre los puntos de interés.
      en: Vertical height change between the points of interest.
    tipo: escalar
    dimension: L
    is_vector: false
    components: []
    category: derived
    physical_role: state_variable
    used_in:
      - principio-fundamental-de-la-hidrostatica
    common_mistake:
      es: Restar las profundidades en lugar de las altitudes absolutas.
      en: Subtracting depths instead of absolute altitudes.
    typical_range: [-11000, 11000]
    sign_behavior: real
    zero_behavior: level
    value_nature: continuous
    interpretation_role: output
    graph_binding: delta_pos
    pedagogical_notes:
      es: Es la variable independiente que gobierna el cambio de presión.
      en: It is the independent variable governing the pressure change.
`;export{e as default};
