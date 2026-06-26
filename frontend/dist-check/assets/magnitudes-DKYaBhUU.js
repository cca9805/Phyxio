const e=`version: "v5"
leaf_id: reflexion

magnitudes:
  - id: theta_i
    symbol: "\\\\theta_i"
    nombre:
      es: Angulo de incidencia
      en: Angle of incidence
    descripcion:
      es: "Angulo entre el rayo incidente y la normal a la superficie en el punto de incidencia."
      en: "Angle between the incident ray and the surface normal at the point of incidence."
    unidad_si: "rad"
    dimension: "[1]"
    is_vector: false
    components: []
    category: fundamental
    physical_role: core_physical_quantity
    used_in:
      - ley_reflexion
      - angulo_critico
      - reflexion_especular
    common_mistake: "Medir el angulo respecto a la superficie en vez de respecto a la normal."
    typical_range: "0 a 90 grados (0 a pi/2 rad)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Siempre positivo: angulo entre rayo y normal."
        en: "Always positive: angle between ray and normal."
    zero_behavior:
      allowed: true
      meaning:
        es: "Incidencia perpendicular: el rayo llega normal a la superficie."
        en: "Perpendicular incidence: the ray arrives normal to the surface."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0, pi/2]"
    interpretation_role:
      primary_for:
        - direccion_rayo_incidente
      secondary_for:
        - reflexion_total
    graph_binding:
      channels:
        - angle-incident
    pedagogical_notes:
      es: "El alumno suele confundir el angulo con la superficie con el angulo con la normal. Insistir en que siempre se mide desde la normal."
      en: "Students often confuse the angle with the surface with the angle to the normal. Emphasise that it is always measured from the normal."

  - id: theta_r
    symbol: "\\\\theta_r"
    nombre:
      es: Angulo de reflexion
      en: Angle of reflection
    descripcion:
      es: "Angulo entre el rayo reflejado y la normal a la superficie en el punto de incidencia."
      en: "Angle between the reflected ray and the surface normal at the point of incidence."
    unidad_si: "rad"
    dimension: "[1]"
    is_vector: false
    components: []
    category: fundamental
    physical_role: core_physical_quantity
    used_in:
      - ley_reflexion
      - trazado_rayos
    common_mistake: "Asumir que el angulo de reflexion se mide desde la superficie y no desde la normal."
    typical_range: "0 a 90 grados (0 a pi/2 rad)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Siempre positivo: angulo medido desde la normal."
        en: "Always positive: angle measured from the normal."
    zero_behavior:
      allowed: true
      meaning:
        es: "Reflexion normal: el rayo reflejado vuelve por el mismo camino que el incidente."
        en: "Normal reflection: the reflected ray returns along the same path as the incident ray."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0, pi/2]"
    interpretation_role:
      primary_for:
        - direccion_rayo_reflejado
      secondary_for: []
    graph_binding:
      channels:
        - angle-reflected
    pedagogical_notes:
      es: "El resultado clave de la reflexion es que este angulo siempre iguala al de incidencia. Su medicion experimental confirma la ley."
      en: "The key result of reflection is that this angle always equals the angle of incidence. Its experimental measurement confirms the law."

  - id: theta_c
    symbol: "\\\\theta_c"
    nombre:
      es: Angulo critico
      en: Critical angle
    descripcion:
      es: "Angulo de incidencia minimo a partir del cual se produce reflexion total interna."
      en: "Minimum angle of incidence above which total internal reflection occurs."
    unidad_si: "rad"
    dimension: "[1]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - reflexion_total_interna
      - fibra_optica
      - prismas
    common_mistake: "Calcular el angulo critico cuando la luz va del medio menos denso al mas denso (no existe en ese caso)."
    typical_range: "Vidrio-aire aproximadamente 42 grados, agua-aire aproximadamente 49 grados"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Siempre positivo: angulo limite."
        en: "Always positive: limiting angle."
    zero_behavior:
      allowed: false
      meaning:
        es: "Un angulo critico de cero no tiene sentido fisico."
        en: "A critical angle of zero has no physical meaning."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, pi/2)"
    interpretation_role:
      primary_for:
        - umbral_reflexion_total
      secondary_for:
        - diseno_fibra_optica
    graph_binding:
      channels:
        - critical-angle-marker
    pedagogical_notes:
      es: "Este angulo solo existe cuando n1 es mayor que n2. Si el alumno obtiene un valor fuera de 0-90 grados, debe revisar el orden de los indices."
      en: "This angle only exists when n1 is greater than n2. If the student obtains a value outside 0-90 degrees, the index order should be checked."

  - id: n1
    symbol: "n_1"
    nombre:
      es: Indice de refraccion del medio incidente
      en: Refractive index of the incident medium
    descripcion:
      es: "Indice de refraccion del medio por el que viaja el rayo antes de llegar a la interfaz."
      en: "Refractive index of the medium through which the ray travels before reaching the interface."
    unidad_si: "-"
    dimension: "[1]"
    is_vector: false
    components: []
    category: parameter
    physical_role: core_physical_quantity
    used_in:
      - angulo_critico
      - reflexion_total_interna
    common_mistake: "Invertir n1 y n2 al calcular el angulo critico, obteniendo un resultado sin sentido fisico."
    typical_range: "1.0 (vacio/aire) a 2.4 (diamante)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Siempre positivo: propiedad intrinseca del material."
        en: "Always positive: intrinsic material property."
    zero_behavior:
      allowed: false
      meaning:
        es: "Un indice de refraccion nulo no existe fisicamente."
        en: "A zero refractive index does not exist physically."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[1, 2.5]"
    interpretation_role:
      primary_for:
        - velocidad_luz_medio
      secondary_for:
        - angulo_critico
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "El indice del medio incidente determina si existe angulo critico. Solo cuando n1 es mayor que n2 se produce reflexion total."
      en: "The refractive index of the incident medium determines whether a critical angle exists. Total reflection only occurs when n1 exceeds n2."

  - id: n2
    symbol: "n_2"
    nombre:
      es: Indice de refraccion del medio transmitido
      en: Refractive index of the transmitted medium
    descripcion:
      es: "Indice de refraccion del medio al otro lado de la interfaz."
      en: "Refractive index of the medium on the other side of the interface."
    unidad_si: "-"
    dimension: "[1]"
    is_vector: false
    components: []
    category: parameter
    physical_role: core_physical_quantity
    used_in:
      - angulo_critico
      - reflexion_total_interna
    common_mistake: "Asumir que n2 siempre es 1 (aire) sin verificar el medio real."
    typical_range: "1.0 (aire) a 1.5 (vidrio comun)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Siempre positivo: propiedad intrinseca del material."
        en: "Always positive: intrinsic material property."
    zero_behavior:
      allowed: false
      meaning:
        es: "Un indice de refraccion nulo no existe fisicamente."
        en: "A zero refractive index does not exist physically."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[1, 2.5]"
    interpretation_role:
      primary_for:
        - velocidad_luz_medio_transmitido
      secondary_for:
        - angulo_critico
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "En la reflexion total interna, n2 es el medio menos denso. Su valor respecto a n1 determina el angulo critico."
      en: "In total internal reflection, n2 is the less dense medium. Its value relative to n1 determines the critical angle."
`;export{e as default};
