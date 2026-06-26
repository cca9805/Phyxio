const e=`formulas:

  - id: dilatacion_lineal
    title:
      es: Ley de dilatación lineal
      en: Law of linear thermal expansion
    equation: "DeltaL = alpha * L0 * DeltaT"
    latex: "\\\\Delta L = \\\\alpha \\\\cdot L_0 \\\\cdot \\\\Delta T"
    rearrangements:
      - target: DeltaL
        equation: "DeltaL = alpha * L0 * DeltaT"
        latex: "\\\\Delta L = \\\\alpha \\\\cdot L_0 \\\\cdot \\\\Delta T"
      - target: alpha
        equation: "alpha = DeltaL / (L0 * DeltaT)"
        latex: "\\\\alpha = \\\\dfrac{\\\\Delta L}{L_0 \\\\cdot \\\\Delta T}"
      - target: L0
        equation: "L0 = DeltaL / (alpha * DeltaT)"
        latex: "L_0 = \\\\dfrac{\\\\Delta L}{\\\\alpha \\\\cdot \\\\Delta T}"
      - target: DeltaT
        equation: "DeltaT = DeltaL / (alpha * L0)"
        latex: "\\\\Delta T = \\\\dfrac{\\\\Delta L}{\\\\alpha \\\\cdot L_0}"
    category: fundamental
    relation_type: constitutive_relation
    physical_meaning:
      es: "Establece que la variación de longitud de un sólido es proporcional a su longitud inicial, al coeficiente de dilatación lineal del material y a la variación de temperatura. Es la ley constitutiva básica del comportamiento termomecánico de los sólidos en régimen lineal."
      en: "States that the length change of a solid is proportional to its initial length, the linear expansion coefficient of the material, and the temperature change. It is the basic constitutive law of the thermomechanical behaviour of solids in the linear regime."
    constraints:
      - "DeltaT suficientemente pequeño para que alpha sea constante en ese rango (régimen lineal)"
      - "Ausencia de cambio de estado del material durante el proceso"
      - "L0 estrictamente positivo"
      - "El material es isótropo o se considera solo la dimensión longitudinal"
    validity:
      es: "Válida para variaciones de temperatura moderadas (típicamente hasta 200–300 K desde la referencia) donde alpha puede tratarse como constante. No aplica durante cambios de fase ni en regímenes de temperatura muy elevados donde alpha varía significativamente con T."
      en: "Valid for moderate temperature changes (typically up to 200–300 K from reference) where alpha can be treated as constant. Does not apply during phase changes or at very high temperature regimes where alpha varies significantly with T."
    dimension_check: "[Theta^-1] · [L] · [Theta] = [L] = m ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - teoria.md
      - ejemplos.md
      - interpretacion.yaml
    interpretation_tags:
      - dilatacion_lineal
      - elongacion_termica
      - propiedad_material
    result_semantics:
      target: DeltaL
      kind: scalar_signed
      sign_meaning:
        es: "DeltaL positivo indica elongación (calentamiento); DeltaL negativo indica contracción (enfriamiento). El signo de DeltaL siempre coincide con el de DeltaT para materiales con alpha positivo."
        en: "Positive DeltaL indicates elongation (heating); negative DeltaL indicates contraction (cooling). The sign of DeltaL always matches that of DeltaT for materials with positive alpha."
      absolute_value_meaning:
        es: "El valor absoluto de DeltaL es la magnitud de la variación dimensional. Cuanto mayor es alpha o L0, mayor es el cambio dimensional para el mismo DeltaT."
        en: "The absolute value of DeltaL is the magnitude of the dimensional change. The larger alpha or L0, the greater the dimensional change for the same DeltaT."
    domain_checks:
      - "L0 > 0"
      - "alpha > 0"
      - "DeltaT != 0"
    coherence_checks:
      - "signo(DeltaL) debe coincidir con signo(DeltaT)"
      - "DeltaL/L0 debe ser un cociente pequeño (del orden de alpha * DeltaT, típicamente menor de 0.01)"
    graph_implications:
      - "En la gráfica DeltaL vs DeltaT, la recta pasa por el origen con pendiente alpha * L0"
      - "La pendiente de la recta permite determinar alpha si L0 es conocida"
    pedagogical_triggers:
      - "Si DeltaL resulta mayor que L0, el alumno probablemente confundió alpha con beta o usó unidades erróneas."
      - "Si DeltaL tiene signo contrario a DeltaT, revisar el orden de la resta en DeltaT."

  - id: dilatacion_volumetrica
    title:
      es: Ley de dilatación volumétrica
      en: Law of volumetric thermal expansion
    equation: "DeltaV = beta * V0 * DeltaT"
    latex: "\\\\Delta V = \\\\beta \\\\cdot V_0 \\\\cdot \\\\Delta T"
    rearrangements:
      - target: DeltaV
        equation: "DeltaV = beta * V0 * DeltaT"
        latex: "\\\\Delta V = \\\\beta \\\\cdot V_0 \\\\cdot \\\\Delta T"
      - target: beta
        equation: "beta = DeltaV / (V0 * DeltaT)"
        latex: "\\\\beta = \\\\dfrac{\\\\Delta V}{V_0 \\\\cdot \\\\Delta T}"
      - target: V0
        equation: "V0 = DeltaV / (beta * DeltaT)"
        latex: "V_0 = \\\\dfrac{\\\\Delta V}{\\\\beta \\\\cdot \\\\Delta T}"
    category: fundamental
    relation_type: constitutive_relation
    physical_meaning:
      es: "Establece que la variación de volumen de un cuerpo es proporcional a su volumen inicial, al coeficiente de dilatación volumétrica del material y a la variación de temperatura. Es la extensión tridimensional de la ley de dilatación lineal."
      en: "States that the volume change of a body is proportional to its initial volume, the volumetric expansion coefficient of the material, and the temperature change. It is the three-dimensional extension of the linear expansion law."
    constraints:
      - "DeltaT suficientemente pequeño para que beta sea constante en ese rango"
      - "Material isótropo o comportamiento volumétrico promediado"
      - "Ausencia de cambio de estado durante el proceso"
      - "V0 estrictamente positivo"
    validity:
      es: "Válida en el régimen lineal de temperatura donde beta es constante. Aplica tanto a sólidos como a líquidos. Para gases, la ley de dilatación es diferente (ley de gases ideales). No aplica durante transiciones de fase."
      en: "Valid in the linear temperature regime where beta is constant. Applies to both solids and liquids. For gases, the expansion law is different (ideal gas law). Does not apply during phase transitions."
    dimension_check: "[Theta^-1] · [L^3] · [Theta] = [L^3] = m³ ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - teoria.md
      - ejemplos.md
      - interpretacion.yaml
    interpretation_tags:
      - dilatacion_volumetrica
      - expansion_termica
      - solidos_liquidos
    result_semantics:
      target: DeltaV
      kind: scalar_signed
      sign_meaning:
        es: "DeltaV positivo indica expansión volumétrica (calentamiento para beta positivo); DeltaV negativo indica contracción. El signo de DeltaV coincide con el de DeltaT para materiales convencionales."
        en: "Positive DeltaV indicates volumetric expansion (heating for positive beta); negative DeltaV indicates contraction. The sign of DeltaV matches that of DeltaT for conventional materials."
      absolute_value_meaning:
        es: "El valor absoluto de DeltaV cuantifica cuánto aumenta o disminuye el volumen del cuerpo. Para sólidos, DeltaV es típicamente tres veces mayor que la variación lineal de una sola dimensión de iguales condiciones."
        en: "The absolute value of DeltaV quantifies how much the body's volume increases or decreases. For solids, DeltaV is typically three times larger than the linear change of a single dimension under equal conditions."
    domain_checks:
      - "V0 > 0"
      - "beta > 0"
      - "DeltaT != 0"
    coherence_checks:
      - "signo(DeltaV) debe coincidir con signo(DeltaT) para beta positivo"
      - "DeltaV/V0 debe ser un cociente pequeño, del orden de beta * DeltaT"
    graph_implications:
      - "En la gráfica DeltaV vs DeltaT, la recta pasa por el origen con pendiente beta * V0"
    pedagogical_triggers:
      - "Si el alumno usa alpha en lugar de beta para dilatación volumétrica, el resultado será tres veces menor al real."
      - "Verificar que V0 esté en metros cúbicos y no en litros cuando se usa el SI."

  - id: relacion_beta_alpha
    title:
      es: "Relación entre coeficientes de dilatación lineal y volumétrica"
      en: "Relation between linear and volumetric expansion coefficients"
    equation: "beta = 3 * alpha"
    latex: "\\\\beta \\\\approx 3\\\\,\\\\alpha"
    rearrangements:
      - target: beta
        equation: "beta = 3 * alpha"
        latex: "\\\\beta \\\\approx 3\\\\,\\\\alpha"
      - target: alpha
        equation: "alpha = beta / 3"
        latex: "\\\\alpha \\\\approx \\\\dfrac{\\\\beta}{3}"
    category: derived
    relation_type: geometric_interpretation
    physical_meaning:
      es: "Para sólidos isótropos en el régimen lineal de pequeñas deformaciones, el coeficiente de dilatación volumétrica es aproximadamente tres veces el coeficiente de dilatación lineal. Esta relación se obtiene expandiendo el volumen de un cubo y despreciando los términos de orden superior en alpha·DeltaT."
      en: "For isotropic solids in the linear regime of small deformations, the volumetric expansion coefficient is approximately three times the linear expansion coefficient. This relation is obtained by expanding the volume of a cube and neglecting higher-order terms in alpha·DeltaT."
    constraints:
      - "Sólido isótropo (misma dilatación en las tres direcciones espaciales)"
      - "Régimen lineal: alpha * DeltaT << 1 (términos de orden superior despreciables)"
    validity:
      es: "Válida para sólidos isótropos en el régimen de pequeñas deformaciones térmicas. No aplica a materiales anisótropos (madera, cristales con simetría reducida) donde cada dirección tiene su propio coeficiente lineal."
      en: "Valid for isotropic solids in the regime of small thermal deformations. Does not apply to anisotropic materials (wood, crystals with reduced symmetry) where each direction has its own linear coefficient."
    dimension_check: "[Theta^-1] = [Theta^-1] ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - teoria.md
      - interpretacion.yaml
    interpretation_tags:
      - coherencia_linear_volumetrica
      - isotropia
    result_semantics:
      target: beta
      kind: scalar_unsigned
      sign_meaning:
        es: "beta es siempre positivo para materiales isótropos convencionales. Un valor negativo indicaría un material con comportamiento anómalo no cubierto por este modelo."
        en: "beta is always positive for conventional isotropic materials. A negative value would indicate a material with anomalous behaviour not covered by this model."
      absolute_value_meaning:
        es: "El valor de beta calculado a partir de alpha verifica la coherencia del modelo: si beta difiere significativamente de 3·alpha, el material puede ser anisótropo o el modelo lineal no aplica en ese rango."
        en: "The value of beta calculated from alpha verifies model coherence: if beta differs significantly from 3·alpha, the material may be anisotropic or the linear model does not apply in that range."
    domain_checks:
      - "alpha > 0"
    coherence_checks:
      - "beta debe ser aproximadamente tres veces alpha para sólidos metálicos isótropos"
    graph_implications:
      - "La pendiente de la recta DeltaV vs DeltaT dividida por V0 debe dar aproximadamente 3 veces la pendiente de DeltaL vs DeltaT dividida por L0"
    pedagogical_triggers:
      - "Si el alumno calcula beta igual a alpha (en lugar de 3·alpha), confundió los coeficientes."
`;export{e as default};
