const n=`version: 5
magnitudes:
  - id: c
    symbol: "c"
    nombre:
      es: "Velocidad del Sonido"
      en: "Speed of Sound"
    unidad_si: "m/s"
    dimension: "L T⁻¹"
    is_vector: true
    components: ["cx", "cy"]
    descripcion:
      es: "Rapidez con la que las ondas de presión se propagan a través del medio fluido."
      en: "Speed at which pressure waves propagate through the fluid medium."
    category: "acustica"
    physical_role: "variable de estado"
    used_in: ["onda_basica", "sonido_compresible"]
    common_mistake:
      es: "Confundir con la velocidad de las moléculas individuales (velocidad de partícula)."
      en: "Confusing it with the speed of individual molecules (particle velocity)."
    typical_range: [300, 1600]
    sign_behavior: "magnitud positiva"
    zero_behavior: "vacío absoluto"
    value_nature: "continuo"
    interpretation_role: "target"
    graph_binding: "X"
    pedagogical_notes:
      es: "Explicar como la velocidad de transferencia de información mecánica."
      en: "Explain as the speed of mechanical information transfer."

  - id: f
    symbol: "f"
    nombre:
      es: "Frecuencia"
      en: "Frequency"
    unidad_si: "Hz"
    dimension: "T⁻¹"
    is_vector: false
    components: []
    descripcion:
      es: "Número de ciclos de compresión y rarefacción por unidad de tiempo."
      en: "Number of compression and rarefaction cycles per unit of time."
    category: "ondas"
    physical_role: "causa"
    used_in: ["onda_basica"]
    common_mistake:
      es: "Confundir con el periodo (tiempo por ciclo)."
      en: "Confusing it with the period (time per cycle)."
    typical_range: [20, 20000]
    sign_behavior: "siempre positivo"
    zero_behavior: "estado estático"
    value_nature: "continuo"
    interpretation_role: "input"
    graph_binding: "frequency"
    pedagogical_notes:
      es: "Relacionar con el tono percibido (grave vs agudo)."
      en: "Relate to perceived pitch (low vs high)."

  - id: lambda
    symbol: "\\\\lambda"
    nombre:
      es: "Longitud de Onda"
      en: "Wavelength"
    unidad_si: "m"
    dimension: "L"
    is_vector: false
    components: []
    descripcion:
      es: "Distancia física entre dos puntos consecutivos en el mismo estado de perturbación."
      en: "Physical distance between two consecutive points in the same state of disturbance."
    category: "geometria"
    physical_role: "geometria"
    used_in: ["onda_basica"]
    common_mistake:
      es: "Interpretar como una distancia vertical en lugar de horizontal (dirección de propagación)."
      en: "Interpreting as a vertical distance instead of horizontal (propagation direction)."
    typical_range: [0.01, 20]
    sign_behavior: "siempre positivo"
    zero_behavior: "frecuencia infinita"
    value_nature: "continuo"
    interpretation_role: "input"
    graph_binding: "wavelength"
    pedagogical_notes:
      es: "Es la escala espacial de la perturbación."
      en: "It is the spatial scale of the disturbance."

  - id: B
    symbol: "B"
    nombre:
      es: "Módulo de Compresibilidad"
      en: "Bulk Modulus"
    unidad_si: "Pa"
    dimension: "M L⁻¹ T⁻²"
    is_vector: false
    components: []
    descripcion:
      es: "Resistencia del fluido a la compresión uniforme."
      en: "Resistance of the fluid to uniform compression."
    category: "fluidos"
    physical_role: "propiedad del material"
    used_in: ["sonido_compresible"]
    common_mistake:
      es: "Usar el módulo de Young (sólidos) para un fluido."
      en: "Using Young's modulus (solids) for a fluid."
    typical_range: [1.4e5, 2.2e9]
    sign_behavior: "siempre positivo"
    zero_behavior: "compresibilidad infinita"
    value_nature: "continuo"
    interpretation_role: "input"
    graph_binding: "constant"
    pedagogical_notes:
      es: "Representa la 'rigidez' elástica del fluido."
      en: "Represents the elastic 'stiffness' of the fluid."

  - id: rho
    symbol: "\\\\rho"
    nombre:
      es: "Densidad"
      en: "Density"
    unidad_si: "kg/m^3"
    dimension: "M L⁻³"
    is_vector: false
    components: []
    descripcion:
      es: "Masa por unidad de volumen del medio de propagación."
      en: "Mass per unit volume of the propagation medium."
    category: "fluidos"
    physical_role: "propiedad del material"
    used_in: ["sonido_compresible"]
    common_mistake:
      es: "Confundir con la viscosidad del fluido."
      en: "Confusing with fluid viscosity."
    typical_range: [1, 1030]
    sign_behavior: "siempre positivo"
    zero_behavior: "vacío"
    value_nature: "continuo"
    interpretation_role: "input"
    graph_binding: "constant"
    pedagogical_notes:
      es: "Representa la inercia del medio frente a la perturbación."
      en: "Represents the inertia of the medium against the disturbance."
`;export{n as default};
