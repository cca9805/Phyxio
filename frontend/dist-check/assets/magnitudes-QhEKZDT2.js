const e=`version: v5
leaf_id: interferencia-destructiva
magnitudes:
  - id: I_resultante
    symbol: "I"
    nombre:
      es: Intensidad resultante
      en: Resultant intensity
    descripcion:
      es: Intensidad media observada tras la superposición de dos ondas coherentes.
      en: Average intensity observed after superposing two coherent waves.
    unidad_si: "W/m²"
    dimension: "[M T⁻³]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, interpretacion, grafico_coord]
    common_mistake:
      es: Creer que la intensidad desaparece siempre que dos ondas se cruzan.
      en: Believing intensity disappears whenever two waves cross.
    typical_range: "0 a la suma incoherente de intensidades"
    sign_behavior:
      has_sign: false
      meaning:
        es: La intensidad media no tiene signo físico y nunca debe ser negativa.
        en: Average intensity has no physical sign and must never be negative.
    zero_behavior:
      allowed: true
      meaning:
        es: Cero indica cancelación ideal con amplitudes compatibles e iguales.
        en: Zero indicates ideal cancellation with compatible equal amplitudes.
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0, inf)"
    interpretation_role:
      primary_for:
        - minimo_interferencial
      secondary_for:
        - contraste_del_patron
    graph_binding:
      channels:
        - resultant_intensity
    pedagogical_notes:
      es: "Es la lectura observable que separa cancelación real de simple ausencia de fuente."
      en: "It is the observable reading that separates real cancellation from mere absence of a source."

  - id: delta_phi
    symbol: "\\\\Delta\\\\phi"
    nombre:
      es: Diferencia de fase
      en: Phase difference
    descripcion:
      es: Desfase angular entre dos ondas coherentes en el punto observado.
      en: Angular phase offset between two coherent waves at the observed point.
    unidad_si: "rad"
    dimension: "adimensional"
    is_vector: false
    components: []
    category: state
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, interpretacion, grafico_coord]
    common_mistake:
      es: Pensar que cualquier desfase reduce por completo la intensidad.
      en: Thinking any phase offset fully reduces the intensity.
    typical_range: "0 a 2π rad por ciclo"
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo indica qué onda adelanta a la otra antes de considerar periodicidad.
        en: The sign indicates which wave leads before periodicity is considered.
    zero_behavior:
      allowed: true
      meaning:
        es: Fase igual, asociada a refuerzo y no a cancelación destructiva ideal.
        en: Equal phase, associated with reinforcement rather than ideal destructive cancellation.
    value_nature:
      kind: angle
      nonnegative_only: false
      expected_interval: "periódico"
    interpretation_role:
      primary_for:
        - condicion_cancelacion
      secondary_for:
        - lectura_de_patron
    graph_binding:
      channels:
        - phase_slider
    pedagogical_notes:
      es: "La cancelación exige oposición de fase estable, no solo llegada en tiempos distintos."
      en: "Cancellation requires stable opposite phase, not merely different arrival times."

  - id: Delta_r
    symbol: "\\\\Delta r"
    nombre:
      es: Diferencia de camino
      en: Path difference
    descripcion:
      es: Diferencia entre las distancias recorridas por las dos ondas hasta el punto de observación.
      en: Difference between the distances traveled by the two waves to the observation point.
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: []
    category: state
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, interpretacion, grafico_coord]
    common_mistake:
      es: Usar la distancia a una sola fuente como si fuera diferencia de camino.
      en: Using distance to one source as if it were path difference.
    typical_range: "nanómetros en luz visible a metros en sonido"
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo indica qué recorrido se ha tomado como más largo.
        en: The sign indicates which path has been taken as longer.
    zero_behavior:
      allowed: true
      meaning:
        es: Caminos iguales; no produce cancelación destructiva geométrica por sí solo.
        en: Equal paths; it does not by itself produce geometric destructive cancellation.
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "(-inf, inf)"
    interpretation_role:
      primary_for:
        - escala_geometrica_de_fase
      secondary_for:
        - ubicacion_de_minimos
    graph_binding:
      channels:
        - path_difference
    pedagogical_notes:
      es: "Permite traducir geometría de fuentes en oposición de fase observable."
      en: "It translates source geometry into observable phase opposition."

  - id: lambda
    symbol: "\\\\lambda"
    nombre:
      es: Longitud de onda
      en: Wavelength
    descripcion:
      es: Periodo espacial que fija la escala entre diferencias de camino y fase.
      en: Spatial period that sets the scale between path differences and phase.
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: []
    category: parameter
    physical_role: core_physical_quantity
    used_in: [teoria, ejemplos, interpretacion, aplicaciones]
    common_mistake:
      es: Usar una longitud de onda de otro medio al decidir mínimos.
      en: Using a wavelength from another medium when deciding minima.
    typical_range: "400 nm a 700 nm en luz visible; centímetros a metros en sonido audible"
    sign_behavior:
      has_sign: false
      meaning:
        es: La longitud de onda es positiva.
        en: Wavelength is positive.
    zero_behavior:
      allowed: false
      meaning:
        es: Longitud de onda nula no representa una onda física.
        en: Zero wavelength does not represent a physical wave.
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, inf)"
    interpretation_role:
      primary_for:
        - periodicidad_espacial
      secondary_for:
        - escala_del_minimo
    graph_binding:
      channels:
        - wavelength_scale
    pedagogical_notes:
      es: "Define cada cuánto se repite la condición destructiva al cambiar el camino."
      en: "It defines how often the destructive condition repeats as path changes."

  - id: m_orden
    symbol: "m"
    nombre:
      es: Orden de interferencia
      en: Interference order
    descripcion:
      es: Entero que etiqueta los mínimos destructivos sucesivos del patrón.
      en: Integer labeling successive destructive minima in the pattern.
    unidad_si: "adimensional"
    dimension: "adimensional"
    is_vector: false
    components: []
    category: derived
    physical_role: derived
    used_in: [teoria, ejemplos, interpretacion]
    common_mistake:
      es: Redondear cualquier cociente y declarar un mínimo aunque falte medio ciclo.
      en: Rounding any ratio and declaring a minimum even when the half-cycle condition is missing.
    typical_range: "0, ±1, ±2..."
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo identifica lados simétricos del patrón.
        en: The sign identifies symmetric sides of the pattern.
    zero_behavior:
      allowed: true
      meaning:
        es: Primer mínimo destructivo respecto a la referencia elegida.
        en: First destructive minimum relative to the chosen reference.
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "enteros"
    interpretation_role:
      primary_for:
        - conteo_de_minimos
      secondary_for:
        - ordenacion_del_patron
    graph_binding:
      channels:
        - order_markers
    pedagogical_notes:
      es: "No mide intensidad; solo enumera posiciones donde la oposición de fase se repite."
      en: "It does not measure intensity; it only enumerates positions where phase opposition repeats."

  - id: I1
    symbol: "I_1"
    nombre:
      es: Intensidad de la primera onda
      en: First wave intensity
    descripcion:
      es: Intensidad media que aportaría la primera onda por separado.
      en: Average intensity the first wave would contribute alone.
    unidad_si: "W/m²"
    dimension: "[M T⁻³]"
    is_vector: false
    components: []
    category: parameter
    physical_role: parameter
    used_in: [ejemplos, interpretacion, grafico_coord]
    common_mistake:
      es: Creer que una onda fuerte siempre se cancela totalmente con otra débil.
      en: Believing a strong wave is always fully canceled by a weak one.
    typical_range: "depende de la fuente y del detector"
    sign_behavior:
      has_sign: false
      meaning:
        es: La intensidad individual es no negativa.
        en: Individual intensity is non-negative.
    zero_behavior:
      allowed: true
      meaning:
        es: Primera contribución ausente; no hay interferencia de dos ondas reales.
        en: First contribution absent; there is no interference of two real waves.
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0, inf)"
    interpretation_role:
      primary_for:
        - amplitud_individual
      secondary_for:
        - contraste_de_cancelacion
    graph_binding:
      channels:
        - intensity_input_1
    pedagogical_notes:
      es: "Debe compararse con la segunda contribución para saber si el mínimo puede llegar a cero."
      en: "It must be compared with the second contribution to know whether the minimum can reach zero."

  - id: I2
    symbol: "I_2"
    nombre:
      es: Intensidad de la segunda onda
      en: Second wave intensity
    descripcion:
      es: Intensidad media que aportaría la segunda onda por separado.
      en: Average intensity the second wave would contribute alone.
    unidad_si: "W/m²"
    dimension: "[M T⁻³]"
    is_vector: false
    components: []
    category: parameter
    physical_role: parameter
    used_in: [ejemplos, interpretacion, grafico_coord]
    common_mistake:
      es: Suponer que solo la fase importa y olvidar la igualdad de amplitudes.
      en: Assuming only phase matters and forgetting amplitude matching.
    typical_range: "depende de la fuente y del detector"
    sign_behavior:
      has_sign: false
      meaning:
        es: La intensidad individual es no negativa.
        en: Individual intensity is non-negative.
    zero_behavior:
      allowed: true
      meaning:
        es: Segunda contribución ausente; la cancelación destructiva no puede formarse.
        en: Second contribution absent; destructive cancellation cannot form.
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "[0, inf)"
    interpretation_role:
      primary_for:
        - amplitud_individual
      secondary_for:
        - contraste_de_cancelacion
    graph_binding:
      channels:
        - intensity_input_2
    pedagogical_notes:
      es: "La cancelación completa requiere que esta contribución sea comparable con [[I1]]."
      en: "Complete cancellation requires this contribution to be comparable with [[I1]]."
`;export{e as default};
