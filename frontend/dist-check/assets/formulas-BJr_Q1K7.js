const e=`formulas:

  - id: definicion_c
    title:
      es: Definición del calor específico
      en: Definition of specific heat capacity
    equation: "c = Q / (m * DeltaT)"
    latex: "c = \\\\dfrac{Q}{m \\\\cdot \\\\Delta T}"
    rearrangements:
      - target: c
        equation: "c = Q / (m * DeltaT)"
        latex: "c = \\\\dfrac{Q}{m \\\\cdot \\\\Delta T}"
      - target: Q
        equation: "Q = m * c * DeltaT"
        latex: "Q = m \\\\cdot c \\\\cdot \\\\Delta T"
      - target: m
        equation: "m = Q / (c * DeltaT)"
        latex: "m = \\\\dfrac{Q}{c \\\\cdot \\\\Delta T}"
      - target: DeltaT
        equation: "DeltaT = Q / (m * c)"
        latex: "\\\\Delta T = \\\\dfrac{Q}{m \\\\cdot c}"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: "Define el calor específico como el calor transferido por unidad de masa y por unidad de variación de temperatura. Es la definición operacional que permite medir c experimentalmente mediante calorimetría."
      en: "Defines specific heat capacity as the heat transferred per unit mass per unit temperature change. It is the operational definition that allows c to be measured experimentally through calorimetry."
    constraints:
      - "Sin cambio de estado durante el proceso (DeltaT no puede abarcar una transición de fase)"
      - "Calor específico constante en el rango de temperatura considerado"
      - "DeltaT distinto de cero"
      - "m estrictamente positiva"
    validity:
      es: "Válida para procesos sin cambio de estado en rangos de temperatura donde c puede considerarse constante. No aplica durante transiciones de fase ni en rangos de temperatura muy amplios para materiales con c fuertemente dependiente de T."
      en: "Valid for processes without phase change in temperature ranges where c can be considered constant. Does not apply during phase transitions or over very wide temperature ranges for materials with strongly T-dependent c."
    dimension_check: "[M L^2 T^-2] / ([M] · [Theta]) = [L^2 T^-2 Theta^-1] = J/(kg·K) ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - teoria.md
      - ejemplos.md
      - interpretacion.yaml
    interpretation_tags:
      - calor_especifico
      - propiedad_material
      - capacidad_termica
    result_semantics:
      target: c
      kind: scalar_unsigned
      sign_meaning:
        es: "c es siempre positivo para sustancias estables. Un resultado negativo indica error en los datos de entrada (orden de DeltaT invertido o signo de Q incorrecto)."
        en: "c is always positive for stable substances. A negative result indicates an error in the input data (inverted DeltaT order or incorrect Q sign)."
      absolute_value_meaning:
        es: "El valor de c indica cuántos julios se necesitan para calentar un kilogramo del material en un kelvin. Cuanto mayor c, más resistente es el material al cambio de temperatura."
        en: "The value of c indicates how many joules are needed to heat one kilogram of the material by one kelvin. The larger c, the more resistant the material is to temperature change."
    domain_checks:
      - "DeltaT != 0"
      - "m > 0"
      - "c > 0 (resultado)"
    coherence_checks:
      - "signo(Q) debe coincidir con signo(DeltaT)"
      - "c resultado debe ser positivo; si es negativo revisar signos de Q y DeltaT"
    graph_implications:
      - "En gráfica Q vs DeltaT la pendiente es m·c; dividir la pendiente por m da c directamente"
    pedagogical_triggers:
      - "Si c resulta negativo, el alumno probablemente invirtió el orden de la resta en DeltaT."
      - "Si c resulta muy grande (mayor de 10 000 J/(kg·K)), verificar que m no está en gramos."

  - id: capacidad_calorifica_total
    title:
      es: Capacidad calorífica total
      en: Total heat capacity
    equation: "C_total = m * c"
    latex: "C = m \\\\cdot c"
    rearrangements:
      - target: C_total
        equation: "C_total = m * c"
        latex: "C = m \\\\cdot c"
      - target: m
        equation: "m = C_total / c"
        latex: "m = \\\\dfrac{C}{c}"
      - target: c
        equation: "c = C_total / m"
        latex: "c = \\\\dfrac{C}{m}"
    category: derived
    relation_type: definition
    physical_meaning:
      es: "La capacidad calorífica total C de un sistema es el producto de su masa por el calor específico del material. Mide cuánta energía necesita el sistema completo para subir un kelvin. A diferencia de c, C depende de la cantidad de materia."
      en: "The total heat capacity C of a system is the product of its mass and the material's specific heat capacity. It measures how much energy the entire system needs to rise one kelvin. Unlike c, C depends on the amount of matter."
    constraints:
      - "m estrictamente positiva"
      - "c estrictamente positivo"
      - "Sistema homogéneo (un solo material o mezcla homogénea)"
    validity:
      es: "Válida para sistemas de composición uniforme. Para sistemas heterogéneos, C_total es la suma de los productos m_i · c_i de cada componente."
      en: "Valid for systems of uniform composition. For heterogeneous systems, C_total is the sum of the m_i · c_i products of each component."
    dimension_check: "[M] · [L^2 T^-2 Theta^-1] = [M L^2 T^-2 Theta^-1] = J/K ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - teoria.md
      - ejemplos.md
      - interpretacion.yaml
    interpretation_tags:
      - capacidad_calorifica
      - propiedad_extensiva
      - sistema_termico
    result_semantics:
      target: C_total
      kind: scalar_unsigned
      sign_meaning:
        es: "C es siempre positiva. Un valor nulo o negativo indica error en los datos de entrada."
        en: "C is always positive. A zero or negative value indicates an error in the input data."
      absolute_value_meaning:
        es: "C indica la energía total necesaria para que el sistema completo suba un kelvin. Es el parámetro de diseño clave en sistemas de almacenamiento y regulación térmica."
        en: "C indicates the total energy needed for the entire system to rise one kelvin. It is the key design parameter in thermal storage and regulation systems."
    domain_checks:
      - "m > 0"
      - "c > 0"
      - "C_total > 0 (resultado)"
    coherence_checks:
      - "C_total debe aumentar proporcionalmente con m si c permanece constante"
      - "C_total / m debe devolver el valor de c del material"
    graph_implications:
      - "En una gráfica C vs m, la pendiente de la recta es precisamente c del material"
    pedagogical_triggers:
      - "Si el alumno obtiene C igual a c, es probable que haya omitido la masa (masa implícita de 1 kg). Recordar que C = m·c requiere la masa explícita."
`;export{e as default};
