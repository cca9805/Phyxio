const n=`version: 1
magnitudes:
  - id: m1
    symbol: "m_1"
    nombre:
      es: "masa del cuerpo 1"
      en: "mass of body 1"
    descripcion:
      es: "Inercia traslacional de la primera partícula puntual del sistema."
      en: "Translational inertia of the system's first point particle."
    unidad_si: "kg"
    dimension: "M"
    is_vector: false
    components: null
    category: fundamental
    physical_role: physical_quantity
    used_in:
      - definicion-centro-de-masas
    common_mistake: "Olvidar que en este modelo la masa se considera concentrada en un solo punto geométrico."
    typical_range: "0,1 kg - 100 kg"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La masa es una magnitud escalar siempre no negativa."
        en: "Mass is an always non-negative scalar magnitude."
    zero_behavior:
      allowed: false
      meaning:
        es: "Una masa nula implicaría la inexistencia del cuerpo en el sistema."
        en: "A zero mass would imply the non-existence of the body in the system."
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: "positive_reals"
    interpretation_role:
      primary_for:
        - definicion-centro-de-masas
      secondary_for: []
    graph_binding:
      channels:
        - mass_visual_weight
    pedagogical_notes: "Es la variable que pondera la importancia de la posición x1 en el cálculo del CM."

  - id: m2
    symbol: "m_2"
    nombre:
      es: "masa del cuerpo 2"
      en: "mass of body 2"
    descripcion:
      es: "Inercia traslacional de la segunda partícula puntual del sistema."
      en: "Translational inertia of the system's second point particle."
    unidad_si: "kg"
    dimension: "M"
    is_vector: false
    components: null
    category: fundamental
    physical_role: physical_quantity
    used_in:
      - definicion-centro-de-masas
    common_mistake: "Confundir su valor con el de m1 si las partículas son similares visualmente."
    typical_range: "0,1 kg - 100 kg"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Propiedad escalar positiva."
        en: "Positive scalar property."
    zero_behavior:
      allowed: false
      meaning:
        es: "Se requiere masa para que el punto participe en el balance inercial."
        en: "Mass is required for the point to participate in the inertial balance."
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: "positive_reals"
    interpretation_role:
      primary_for:
        - definicion-centro-de-masas
      secondary_for: []
    graph_binding:
      channels:
        - mass_visual_weight
    pedagogical_notes: "Determina cuánto se desplaza el CM hacia la posición x2."

  - id: x1
    symbol: "x_1"
    nombre:
      es: "posición del cuerpo 1"
      en: "position of body 1"
    descripcion:
      es: "Coordenada horizontal de la primera partícula respecto al origen de coordenadas elegido."
      en: "Horizontal coordinate of the first particle relative to the chosen coordinate origin."
    unidad_si: "m"
    dimension: "L"
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in:
      - definicion-centro-de-masas
    common_mistake: "No usar el mismo origen para x1 y x2."
    typical_range: "-10 m a 10 m"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Indica si el cuerpo está a la derecha (+) o izquierda (-) del origen."
        en: "Indicates whether the body is to the right (+) or left (-) of the origin."
    zero_behavior:
      allowed: true
      meaning:
        es: "El cuerpo coincide exactamente con el origen de coordenadas."
        en: "The body exactly coincides with the coordinate origin."
    value_nature:
      kind: coordinate
      nonnegative_only: false
      expected_interval: "reals"
    interpretation_role:
      primary_for:
        - definicion-centro-de-masas
      secondary_for: []
    graph_binding:
      channels:
        - x_axis_position
    pedagogical_notes: "Sugerencia: Coloca el origen en x1=0 para simplificar los cálculos manuales."

  - id: x2
    symbol: "x_2"
    nombre:
      es: "posición del cuerpo 2"
      en: "position of body 2"
    descripcion:
      es: "Coordenada horizontal de la segunda partícula sobre el mismo eje de referencia."
      en: "Horizontal coordinate of the second particle on the same reference axis."
    unidad_si: "m"
    dimension: "L"
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in:
      - definicion-centro-de-masas
    common_mistake: "Invertir el signo de la posición si se encuentra en el lado negativo del eje."
    typical_range: "-10 m a 10 m"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Posición relativa al origen sobre el eje X."
        en: "Position relative to the origin on the X-axis."
    zero_behavior:
      allowed: true
      meaning:
        es: "El cuerpo 2 se sitúa en el origen."
        en: "Body 2 is located at the origin."
    value_nature:
      kind: coordinate
      nonnegative_only: false
      expected_interval: "reals"
    interpretation_role:
      primary_for:
        - definicion-centro-de-masas
      secondary_for: []
    graph_binding:
      channels:
        - x_axis_position
    pedagogical_notes: "La distancia entre partículas es |x2 - x1|."

  - id: xcm
    symbol: "x_{cm}"
    nombre:
      es: "coordenada del centro de masas"
      en: "center-of-mass coordinate"
    descripcion:
      es: "Punto del espacio que resume la distribución inercial del sistema de dos masas."
      en: "Space point summarizing the inertial distribution of the two-mass system."
    unidad_si: "m"
    dimension: "L"
    is_vector: false
    components: null
    category: state
    physical_role: physical_quantity
    used_in:
      - definicion-centro-de-masas
    common_mistake: "Pensar que siempre es el punto medio geométrico (x1+x2)/2."
    typical_range: "-10 m a 10 m"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Ubicación del baricentro del sistema respecto al origen."
        en: "Location of the system's barycenter relative to the origin."
    zero_behavior:
      allowed: true
      meaning:
        es: "El equilibrio inercial del sistema se encuentra en el origen."
        en: "The system's inertial balance is located at the origin."
    value_nature:
      kind: coordinate
      nonnegative_only: false
      expected_interval: "reals"
    interpretation_role:
      primary_for:
        - definicion-centro-de-masas
      secondary_for: []
    graph_binding:
      channels:
        - center_of_mass_marker
    pedagogical_notes: "Es el punto 'promedio' del sistema; si m1 > m2, xcm estará más cerca de x1."

  - id: M
    symbol: "M"
    nombre:
      es: "masa total"
      en: "total mass"
    descripcion:
      es: "Suma de todas las masas discretas que componen el sistema bajo estudio."
      en: "Sum of all discrete masses making up the system under study."
    unidad_si: "kg"
    dimension: "M"
    is_vector: false
    components: null
    category: fundamental
    physical_role: physical_quantity
    used_in:
      - definicion-centro-de-masas
    common_mistake: "Olvidar sumar alguna de las partículas componentes."
    typical_range: "0,2 kg - 200 kg"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Magnitud escalar estrictamente positiva."
        en: "Strictly positive scalar magnitude."
    zero_behavior:
      allowed: false
      meaning:
        es: "Un sistema sin masa no tiene centro de masas definido."
        en: "A system without mass has no defined center of mass."
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: "positive_reals"
    interpretation_role:
      primary_for:
        - definicion-centro-de-masas
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "Actúa como factor de escala inverso en la fórmula del CM."

  - id: m_i
    symbol: "m_i"
    nombre:
      es: "masa individual genérica"
      en: "generic individual mass"
    descripcion:
      es: "Representación de la masa de una partícula arbitraria 'i' dentro de un conjunto."
      en: "Representation of the mass of an arbitrary particle 'i' within a set."
    unidad_si: "kg"
    dimension: "M"
    is_vector: false
    components: null
    category: parameter
    physical_role: physical_quantity
    used_in:
      - definicion-centro-de-masas
    common_mistake: "No indexar correctamente cada masa al realizar el sumatorio."
    typical_range: "Variable"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Escalar positivo."
        en: "Positive scalar."
    zero_behavior:
      allowed: false
      meaning:
        es: "Cada constituyente i debe aportar masa al sistema."
        en: "Each constituent i must contribute mass to the system."
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: "positive_reals"
    interpretation_role:
      primary_for:
        - definicion-centro-de-masas
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "Variable de iteración para sumatorios generales."

  - id: r_i
    symbol: "\\\\vec r_i"
    nombre:
      es: "posición individual genérica"
      en: "generic individual position"
    descripcion:
      es: "Vector que localiza la partícula i en el espacio euclídeo."
      en: "Vector locating particle i in Euclidean space."
    unidad_si: "m"
    dimension: "L"
    is_vector: true
    components:
      - "r_{i,x}"
      - "r_{i,y}"
    category: state
    physical_role: physical_quantity
    used_in:
      - definicion-centro-de-masas
    common_mistake: "Olvidar que r_i tiene componentes independientes para cada eje."
    typical_range: "Variable"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Indica dirección y sentido respecto al origen vectorial."
        en: "Indicates direction and sense relative to the vector origin."
    zero_behavior:
      allowed: true
      meaning:
        es: "La partícula se encuentra en el origen vectorial."
        en: "The particle is at the vector origin."
    value_nature:
      kind: vector
      nonnegative_only: false
      expected_interval: "reals"
    interpretation_role:
      primary_for:
        - definicion-centro-de-masas
      secondary_for: []
    graph_binding:
      channels:
        - position_vector
    pedagogical_notes: "Base para la definición vectorial general del baricentro."

  - id: rcm
    symbol: "\\\\vec r_{cm}"
    nombre:
      es: "vector posición del centro de masas"
      en: "center-of-mass position vector"
    descripcion:
      es: "Vector que apunta al centro de masas del sistema en 2D o 3D."
      en: "Vector pointing to the system's center of mass in 2D or 3D."
    unidad_si: "m"
    dimension: "L"
    is_vector: true
    components:
      - "rcm_x"
      - "rcm_y"
    category: state
    physical_role: physical_quantity
    used_in:
      - definicion-centro-de-masas
    common_mistake: "Asumir que rcm es el promedio simple de los vectores r_i."
    typical_range: "Variable"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Localización del centro de inercia en el espacio."
        en: "Location of the center of inertia in space."
    zero_behavior:
      allowed: true
      meaning:
        es: "El CM coincide con el origen del sistema de coordenadas."
        en: "The CM coincides with the coordinate system's origin."
    value_nature:
      kind: vector
      nonnegative_only: false
      expected_interval: "reals"
    interpretation_role:
      primary_for:
        - definicion-centro-de-masas
      secondary_for: []
    graph_binding:
      channels:
        - barycenter_vector
    pedagogical_notes: "Es el punto 'promedio' vectorial del sistema."
  - id: R
    symbol: "R"
    nombre:
      es: "radio o dimensión característica"
      en: "radius or characteristic dimension"
    descripcion:
      es: "Medida física de la extensión espacial de un cuerpo."
      en: "Physical measure of a body's spatial extent."
    unidad_si: "m"
    dimension: "L"
    is_vector: false
    components: null
    category: parameter
    physical_role: physical_quantity
    used_in:
      - definicion-centro-de-masas
    common_mistake: "Olvidar que en el modelo de partículas puntuales se asume R << d."
    typical_range: "Variable"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Magnitud siempre positiva."
        en: "Always positive magnitude."
    zero_behavior:
      allowed: false
      meaning:
        es: "Un radio nulo implicaría un punto matemático puro."
        en: "A zero radius would imply a pure mathematical point."
    value_nature:
      kind: length
      nonnegative_only: true
      expected_interval: "positive_reals"
    interpretation_role:
      primary_for:
        - definicion-centro-de-masas
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "Comparar R con d para validar el modelo de puntos."

  - id: d
    symbol: "d"
    nombre:
      es: "distancia de separación"
      en: "separation distance"
    descripcion:
      es: "Distancia entre las partículas o entre un punto y el centro de masas."
      en: "Distance between particles or between a point and the center of mass."
    unidad_si: "m"
    dimension: "L"
    is_vector: false
    components: null
    category: derived
    physical_role: physical_quantity
    used_in:
      - definicion-centro-de-masas
    common_mistake: "Medir d desde la superficie en lugar de desde los centros."
    typical_range: "Variable"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Separación escalar positiva."
        en: "Positive scalar separation."
    zero_behavior:
      allowed: true
      meaning:
        es: "Las partículas están en el mismo punto."
        en: "Particles are at the same point."
    value_nature:
      kind: length
      nonnegative_only: true
      expected_interval: "positive_reals"
    interpretation_role:
      primary_for:
        - definicion-centro-de-masas
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "Es la base para establecer las posiciones x1 y x2."
  - id: point_particle_validity
    symbol: "V_p"
    nombre:
      es: "validez de partícula puntual"
      en: "point particle validity"
    descripcion:
      es: "Indicador lógico que determina si el modelo de partícula puntual es aplicable."
      en: "Logical indicator determining if the point particle model is applicable."
    unidad_si: "dimensionless"
    dimension: "1"
    is_vector: false
    components: null
    category: conceptual
    physical_role: condition
    used_in:
      - models
    common_mistake: "Ignorar este criterio en sistemas donde los cuerpos están muy próximos."
    typical_range: "0 o 1"
    sign_behavior:
      has_sign: false
      meaning:
        es: "No aplica (magnitud lógica)."
        en: "Not applicable (logical magnitude)."
    zero_behavior:
      allowed: true
      meaning:
        es: "El modelo no es válido."
        en: "The model is not valid."
    value_nature:
      kind: logic
      nonnegative_only: true
      expected_interval: "binary"
    interpretation_role:
      primary_for:
        - definicion-centro-de-masas
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "Crucial para entender los límites de la física clásica de puntos."
`;export{n as default};
