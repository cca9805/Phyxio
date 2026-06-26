const e=`version: v5
leaf_id: ondas-transversales-y-longitudinales
magnitudes:
  - id: A
    symbol: "A"
    nombre: { es: amplitud total de perturbacion, en: total disturbance amplitude }
    descripcion: { es: Escala maxima de la perturbacion observada en el medio., en: Maximum scale of the disturbance observed in the medium. }
    unidad_si: m
    dimension: "[L]"
    tipo: escalar
    is_vector: false
    components: []
    category: fundamental
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, formulas, interpretacion, grafico_coord, grafico_svg]
    common_mistake: { es: "Usar [[A]] como si indicara por si sola el tipo de onda.", en: "Using [[A]] as if it alone indicated the wave type." }
    typical_range: { es: "Milimetros a centimetros en demostraciones de aula.", en: "Millimetres to centimetres in classroom demonstrations." }
    sign_behavior:
      has_sign: false
      meaning: { es: "Se usa como modulo positivo de la perturbacion total.", en: "Used as the positive magnitude of total disturbance." }
    zero_behavior:
      allowed: false
      meaning: { es: "Sin amplitud no hay perturbacion para clasificar.", en: "Without amplitude there is no disturbance to classify." }
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "A > 0"
    interpretation_role:
      primary_for: [normalizacion_de_componentes]
      secondary_for: [lectura_de_amplitud]
    graph_binding:
      channels: [coord_envelope, svg_reference]
    pedagogical_notes:
      es: "Presentar [[A]] como escala comun antes de comparar componentes."
      en: "Present [[A]] as the common scale before comparing components."
  - id: u_perp
    symbol: "u_\\\\perp"
    nombre: { es: componente perpendicular de perturbacion, en: perpendicular disturbance component }
    descripcion: { es: Parte de la perturbacion perpendicular a la direccion de propagacion., en: Part of the disturbance perpendicular to the propagation direction. }
    unidad_si: m
    dimension: "[L]"
    tipo: escalar
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, formulas, interpretacion, grafico_coord]
    common_mistake: { es: "Confundir perpendicular con estar dibujado vertical en cualquier esquema.", en: "Confusing perpendicular with being drawn vertical in every diagram." }
    typical_range: { es: "De cero hasta la amplitud total de la perturbacion.", en: "From zero up to the total disturbance amplitude." }
    sign_behavior:
      has_sign: false
      meaning: { es: "Se usa como modulo de componente perpendicular.", en: "Used as magnitude of the perpendicular component." }
    zero_behavior:
      allowed: true
      meaning: { es: "Valor cero indica ausencia de componente transversal.", en: "Zero indicates absence of transverse component." }
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "u_perp >= 0"
    interpretation_role:
      primary_for: [diagnostico_transversal]
      secondary_for: [comparacion_con_u_parallel]
    graph_binding:
      channels: [coord_vertical_component]
    pedagogical_notes:
      es: "Relacionar [[u_perp]] con desplazamiento normal al avance, no con vertical absoluta."
      en: "Relate [[u_perp]] to displacement normal to advance, not to absolute vertical direction."
  - id: u_parallel
    symbol: "u_\\\\parallel"
    nombre: { es: componente paralela de perturbacion, en: parallel disturbance component }
    descripcion: { es: Parte de la perturbacion paralela a la direccion de propagacion., en: Part of the disturbance parallel to the propagation direction. }
    unidad_si: m
    dimension: "[L]"
    tipo: escalar
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, formulas, interpretacion, grafico_svg]
    common_mistake: { es: "Pensar que una onda longitudinal no transporta energia porque el medio vuelve atras.", en: "Thinking a longitudinal wave transports no energy because the medium moves back." }
    typical_range: { es: "De cero hasta la amplitud total de la perturbacion.", en: "From zero up to the total disturbance amplitude." }
    sign_behavior:
      has_sign: false
      meaning: { es: "Se usa como modulo de compresion o desplazamiento paralelo.", en: "Used as magnitude of compression or parallel displacement." }
    zero_behavior:
      allowed: true
      meaning: { es: "Valor cero indica ausencia de componente longitudinal.", en: "Zero indicates absence of longitudinal component." }
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "u_parallel >= 0"
    interpretation_role:
      primary_for: [diagnostico_longitudinal]
      secondary_for: [comparacion_con_u_perp]
    graph_binding:
      channels: [svg_compression_component]
    pedagogical_notes:
      es: "Vincular [[u_parallel]] con compresiones y rarefacciones en sonido."
      en: "Link [[u_parallel]] with compressions and rarefactions in sound."
  - id: C_T
    symbol: "C_T"
    nombre: { es: indice transversal, en: transverse index }
    descripcion: { es: Fraccion de la perturbacion total que es perpendicular al avance., en: Fraction of total disturbance that is perpendicular to advance. }
    unidad_si: "1"
    dimension: "[1]"
    tipo: escalar
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, formulas, interpretacion, grafico_coord]
    common_mistake: { es: "Interpretar [[C_T]] como velocidad o energia.", en: "Interpreting [[C_T]] as speed or energy." }
    typical_range: { es: "Entre 0 y 1 para una clasificacion normalizada.", en: "Between 0 and 1 for a normalized classification." }
    sign_behavior:
      has_sign: false
      meaning: { es: "No usa signo; mide predominio relativo transversal.", en: "No sign is used; it measures relative transverse dominance." }
    zero_behavior:
      allowed: true
      meaning: { es: "Valor cero indica perturbacion sin componente transversal medible.", en: "Zero indicates disturbance with no measurable transverse component." }
    value_nature:
      kind: ratio
      nonnegative_only: true
      expected_interval: "0 <= C_T <= 1"
    interpretation_role:
      primary_for: [clasificacion_transversal]
      secondary_for: [comparacion_de_modos]
    graph_binding:
      channels: [coord_star, classification_bar]
    pedagogical_notes:
      es: "Usar [[C_T]] para decidir predominio, no para sustituir la observacion fisica."
      en: "Use [[C_T]] to decide dominance, not to replace physical observation."
  - id: C_L
    symbol: "C_L"
    nombre: { es: indice longitudinal, en: longitudinal index }
    descripcion: { es: Fraccion de la perturbacion total que es paralela al avance., en: Fraction of total disturbance that is parallel to advance. }
    unidad_si: "1"
    dimension: "[1]"
    tipo: escalar
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, formulas, interpretacion, grafico_svg]
    common_mistake: { es: "Pensar que [[C_L]] describe solo sonido y nunca ondas mecanicas generales.", en: "Thinking [[C_L]] describes only sound and never general mechanical waves." }
    typical_range: { es: "Entre 0 y 1 para una clasificacion normalizada.", en: "Between 0 and 1 for a normalized classification." }
    sign_behavior:
      has_sign: false
      meaning: { es: "No usa signo; mide predominio relativo longitudinal.", en: "No sign is used; it measures relative longitudinal dominance." }
    zero_behavior:
      allowed: true
      meaning: { es: "Valor cero indica perturbacion sin componente paralela medible.", en: "Zero indicates disturbance with no measurable parallel component." }
    value_nature:
      kind: ratio
      nonnegative_only: true
      expected_interval: "0 <= C_L <= 1"
    interpretation_role:
      primary_for: [clasificacion_longitudinal]
      secondary_for: [comparacion_de_modos]
    graph_binding:
      channels: [svg_star, compression_bar]
    pedagogical_notes:
      es: "Usar [[C_L]] para conectar desplazamiento paralelo con compresiones."
      en: "Use [[C_L]] to connect parallel displacement with compressions."
`;export{e as default};
