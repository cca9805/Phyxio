const e=`version: v5
leaf_id: reflexion
magnitudes:
  - id: theta_i
    symbol: "\\\\theta_i"
    nombre:
      es: Ángulo de incidencia
      en: Angle of incidence
    descripcion:
      es: Ángulo entre el rayo incidente y la normal a la frontera.
      en: Angle between the incident ray and the normal to the boundary.
    unidad_si: "rad"
    dimension: "adimensional"
    is_vector: false
    components: []
    category: state
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, interpretacion, grafico_svg]
    common_mistake:
      es: Medirlo respecto a la superficie en vez de respecto a la normal.
      en: Measuring it from the surface instead of from the normal.
    typical_range: "0 a pi/2 rad"
    sign_behavior:
      has_sign: false
      meaning:
        es: Se usa como abertura positiva respecto a la normal elegida.
        en: It is used as a positive opening from the chosen normal.
    zero_behavior:
      allowed: true
      meaning:
        es: Incidencia normal, sin desviación lateral.
        en: Normal incidence, with no lateral deflection.
    value_nature:
      kind: angle
      nonnegative_only: true
      expected_interval: "[0, pi/2]"
    interpretation_role:
      primary_for:
        - direccion_incidente
      secondary_for:
        - simetria_reflexion
    graph_binding:
      channels:
        - incident_angle
    pedagogical_notes:
      es: "Fija la geometría inicial; si se mide desde la superficie, toda la predicción angular se desplaza."
      en: "It fixes the initial geometry; if measured from the surface, the whole angular prediction is shifted."

  - id: theta_r
    symbol: "\\\\theta_r"
    nombre:
      es: Ángulo de reflexión
      en: Angle of reflection
    descripcion:
      es: Ángulo entre el rayo reflejado y la normal a la frontera.
      en: Angle between the reflected ray and the normal to the boundary.
    unidad_si: "rad"
    dimension: "adimensional"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, interpretacion, grafico_svg]
    common_mistake:
      es: Tratarlo como un ángulo independiente que puede elegirse libremente.
      en: Treating it as an independent angle that can be chosen freely.
    typical_range: "0 a pi/2 rad"
    sign_behavior:
      has_sign: false
      meaning:
        es: Se expresa como abertura positiva respecto a la normal.
        en: It is expressed as a positive opening from the normal.
    zero_behavior:
      allowed: true
      meaning:
        es: La onda vuelve sobre la normal en incidencia perpendicular.
        en: The wave returns along the normal under perpendicular incidence.
    value_nature:
      kind: angle
      nonnegative_only: true
      expected_interval: "[0, pi/2]"
    interpretation_role:
      primary_for:
        - direccion_reflejada
      secondary_for:
        - lectura_grafica
    graph_binding:
      channels:
        - reflected_angle
    pedagogical_notes:
      es: "Es la magnitud dominante porque convierte la ley geométrica en dirección observable."
      en: "It is the dominant quantity because it turns the geometric law into an observable direction."

  - id: I_incidente
    symbol: "I_i"
    nombre:
      es: Intensidad incidente
      en: Incident intensity
    descripcion:
      es: Intensidad media transportada por la onda antes de alcanzar la frontera.
      en: Average intensity carried by the wave before reaching the boundary.
    unidad_si: "W/m²"
    dimension: "[M T⁻³]"
    is_vector: false
    components: []
    category: state
    physical_role: parameter
    used_in: [teoria, ejemplos, interpretacion]
    common_mistake:
      es: Suponer que toda la intensidad incidente se refleja siempre.
      en: Assuming all incident intensity is always reflected.
    typical_range: "depende de la fuente y del medio"
    sign_behavior:
      has_sign: false
      meaning:
        es: La intensidad media no es negativa.
        en: Average intensity is not negative.
    zero_behavior:
      allowed: true
      meaning:
        es: Sin onda incidente no hay reflexión.
        en: Without an incident wave there is no reflection.
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0, inf)"
    interpretation_role:
      primary_for:
        - energia_entrante
      secondary_for:
        - balance_frontera
    graph_binding:
      channels:
        - incident_intensity
    pedagogical_notes:
      es: "Distingue la cantidad de energía que llega de la fracción que realmente rebota."
      en: "It separates the amount of energy arriving from the fraction that actually bounces back."

  - id: I_reflejada
    symbol: "I_r"
    nombre:
      es: Intensidad reflejada
      en: Reflected intensity
    descripcion:
      es: Intensidad media transportada por la onda después de reflejarse.
      en: Average intensity carried by the wave after reflection.
    unidad_si: "W/m²"
    dimension: "[M T⁻³]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, interpretacion]
    common_mistake:
      es: Identificar dirección reflejada con reflexión total de energía.
      en: Identifying reflected direction with total reflection of energy.
    typical_range: "0 hasta la intensidad incidente"
    sign_behavior:
      has_sign: false
      meaning:
        es: La intensidad reflejada es no negativa.
        en: Reflected intensity is non-negative.
    zero_behavior:
      allowed: true
      meaning:
        es: Frontera adaptada o absorción/transmisión dominante.
        en: Matched boundary or dominant absorption/transmission.
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0, inf)"
    interpretation_role:
      primary_for:
        - energia_reflejada
      secondary_for:
        - eficiencia_reflexion
    graph_binding:
      channels:
        - reflected_intensity
    pedagogical_notes:
      es: "Permite separar la ley angular de la pregunta energética sobre cuánto se refleja."
      en: "It separates the angular law from the energy question of how much is reflected."

  - id: R_reflectancia
    symbol: "R"
    nombre:
      es: Reflectancia
      en: Reflectance
    descripcion:
      es: Fracción de la intensidad incidente que vuelve como onda reflejada.
      en: Fraction of incident intensity that returns as a reflected wave.
    unidad_si: "adimensional"
    dimension: "adimensional"
    is_vector: false
    components: []
    category: parameter
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, interpretacion, aplicaciones]
    common_mistake:
      es: Usarla como porcentaje sin convertirla a fracción adimensional.
      en: Using it as a percentage without converting it to a dimensionless fraction.
    typical_range: "0 a 1 en fronteras pasivas"
    sign_behavior:
      has_sign: false
      meaning:
        es: Representa una fracción energética no negativa.
        en: It represents a non-negative energy fraction.
    zero_behavior:
      allowed: true
      meaning:
        es: No hay intensidad reflejada apreciable.
        en: There is no appreciable reflected intensity.
    value_nature:
      kind: ratio
      nonnegative_only: true
      expected_interval: "[0, 1]"
    interpretation_role:
      primary_for:
        - fraccion_reflejada
      secondary_for:
        - comparacion_materiales
    graph_binding:
      channels:
        - reflectance_control
    pedagogical_notes:
      es: "Una reflexión puede obedecer la ley angular aunque la reflectancia sea pequeña."
      en: "A reflection can obey the angular law even when reflectance is small."
`;export{e as default};
