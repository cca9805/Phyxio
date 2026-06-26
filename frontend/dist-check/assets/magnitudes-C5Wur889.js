const n=`version: 5
magnitudes:
  - id: tau
    symbol: "\\\\tau"
    nombre:
      es: Esfuerzo cortante
      en: Shear stress
    unidad_si: "Pa"
    dimension: "ML^{-1}T^{-2}"
    descripcion:
      es: Fuerza tangencial por unidad de área entre capas de fluido.
      en: Tangential force per unit area between fluid layers.
    tipo: escalar
    is_vector: false
    components: []
    category: "fuerza"
    physical_role: "variable de estado"
    used_in: ["dinámica", "lubricación"]
    common_mistake: "Confundir con presión normal."
    typical_range: "0.1 - 1000 Pa"
    sign_behavior: "siempre positivo en magnitud"
    zero_behavior: "fluido en reposo o ideal"
    value_nature: "continuo"
    interpretation_role: "indicador de fricción"
    graph_binding: "eje Y en reología"
    pedagogical_notes: "Clave para entender la pérdida de energía."

  - id: mu
    symbol: "\\\\mu"
    nombre:
      es: Viscosidad dinámica
      en: Dynamic viscosity
    unidad_si: "Pa·s"
    dimension: "ML^{-1}T^{-1}"
    descripcion:
      es: Medida de la resistencia interna de un fluido a fluir.
      en: Measure of the internal resistance of a fluid to flow.
    tipo: escalar
    is_vector: false
    components: []
    category: "propiedad"
    physical_role: "coeficiente"
    used_in: ["reología", "ingeniería"]
    common_mistake: "Ignorar su fuerte dependencia con la temperatura."
    typical_range: "1e-5 (aire) a 10 (aceites) Pa·s"
    sign_behavior: "siempre estrictamente positivo"
    zero_behavior: "fluido ideal (inviscido)"
    value_nature: "continuo"
    interpretation_role: "resistencia interna"
    graph_binding: "pendiente de la curva"
    pedagogical_notes: "Diferenciar de densidad."

  - id: dudy
    symbol: "du/dy"
    nombre:
      es: Tasa de deformación
      en: Shear rate
    unidad_si: "s^{-1}"
    dimension: "T^{-1}"
    descripcion:
      es: Gradiente de velocidad perpendicular a la dirección del flujo.
      en: Velocity gradient perpendicular to the flow direction.
    tipo: escalar
    is_vector: false
    components: []
    category: "cinemática"
    physical_role: "estímulo"
    used_in: ["reología"]
    common_mistake: "Confundir con velocidad puntual."
    typical_range: "1 - 10^6 s^{-1}"
    sign_behavior: "direccional"
    zero_behavior: "flujo uniforme o reposo"
    value_nature: "continuo"
    interpretation_role: "cinemática del cizalle"
    graph_binding: "eje X en reología"
    pedagogical_notes: "Representa el 'estiramiento' del fluido."

  - id: nu
    symbol: "\\\\nu"
    nombre:
      es: Viscosidad cinemática
      en: Kinematic viscosity
    unidad_si: "m^2/s"
    dimension: "L^2T^{-1}"
    descripcion:
      es: Relación entre la viscosidad dinámica y la densidad del fluido.
      en: Ratio between dynamic viscosity and fluid density.
    tipo: escalar
    is_vector: false
    components: []
    category: "propiedad"
    physical_role: "difusividad"
    used_in: ["análisis dimensional"]
    common_mistake: "Olvidar el factor de densidad al comparar líquidos."
    typical_range: "1e-6 (agua) a 1e-3 m^2/s"
    sign_behavior: "siempre positivo"
    zero_behavior: "difusión nula"
    value_nature: "continuo"
    interpretation_role: "difusividad de momento"
    graph_binding: "escala de longitud"
    pedagogical_notes: "Mide qué tanto le cuesta a la inercia frenarse."

  - id: rho
    symbol: "\\\\rho"
    nombre:
      es: Densidad
      en: Density
    unidad_si: "kg/m^3"
    dimension: "ML^{-3}"
    descripcion:
      es: Masa por unidad de volumen del fluido.
      en: Mass per unit volume of the fluid.
    tipo: escalar
    is_vector: false
    components: []
    category: "propiedad"
    physical_role: "inercia"
    used_in: ["hidrostática", "dinámica"]
    common_mistake: "Confundir con viscosidad."
    typical_range: "1 (aire) a 13600 (mercurio) kg/m^3"
    sign_behavior: "siempre positivo"
    zero_behavior: "vacío"
    value_nature: "continuo"
    interpretation_role: "concentración de masa"
    graph_binding: "factor de escala"
    pedagogical_notes: "Fundamental para el cálculo de nu."

  - id: Re
    symbol: "Re"
    nombre:
      es: Número de Reynolds
      en: Reynolds Number
    unidad_si: "1"
    dimension: "1"
    descripcion:
      es: Relación adimensional entre fuerzas inerciales y fuerzas viscosas.
      en: Dimensionless ratio between inertial forces and viscous forces.
    tipo: escalar
    is_vector: false
    components: []
    category: "parámetro"
    physical_role: "descriptor de régimen"
    used_in: ["dinámica de fluidos"]
    common_mistake: "Olvidar que es adimensional."
    typical_range: "0.1 a 10^7"
    sign_behavior: "siempre positivo"
    zero_behavior: "flujo Stokes"
    value_nature: "continuo"
    interpretation_role: "predictor de turbulencia"
    graph_binding: "selector de régimen"
    pedagogical_notes: "Decide si la viscosidad puede mantener el orden."
`;export{n as default};
