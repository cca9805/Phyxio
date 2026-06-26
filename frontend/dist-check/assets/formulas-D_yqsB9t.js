const e=`formulas:

  - id: definicion_capacidad_calorifica
    title:
      es: Definición de capacidad calorífica total
      en: Definition of total heat capacity
    equation: "C = Q / DeltaT"
    latex: "C = \\\\dfrac{Q}{\\\\Delta T}"
    rearrangements:
      - target: C
        equation: "C = Q / DeltaT"
        latex: "C = \\\\dfrac{Q}{\\\\Delta T}"
      - target: Q
        equation: "Q = C * DeltaT"
        latex: "Q = C \\\\cdot \\\\Delta T"
      - target: DeltaT
        equation: "DeltaT = Q / C"
        latex: "\\\\Delta T = \\\\dfrac{Q}{C}"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: "La capacidad calorífica total C de un cuerpo es el cociente entre el calor Q que absorbe o cede y la variación de temperatura DeltaT que experimenta. Es la pendiente de la recta Q vs DeltaT para ese cuerpo. Un cuerpo con C grande necesita mucho calor para cambiar poco de temperatura; un cuerpo con C pequeña cambia mucho de temperatura con poco calor."
      en: "The total heat capacity C of a body is the ratio between the heat Q it absorbs or releases and the temperature change DeltaT it experiences. It is the slope of the Q vs DeltaT line for that body. A body with large C needs much heat to change temperature little; a body with small C changes temperature greatly with little heat."
    constraints:
      - "Proceso sin cambio de estado: si el cuerpo cruza una transición de fase, Q incluye el calor latente y C pierde su sentido habitual durante la transición"
      - "C constante en el rango de temperatura del proceso (válido para la mayoría de sólidos y líquidos con variaciones de temperatura inferiores a 100 K)"
      - "DeltaT distinto de cero (si DeltaT = 0, no se puede determinar C a partir de Q/DeltaT)"
    validity:
      es: "Válida para procesos de calor sensible puro a presión constante. C puede variar con la temperatura para rangos amplios o materiales especiales (cerca del cero absoluto, C tiende a cero según la ley de Debye)."
      en: "Valid for pure sensible heat processes at constant pressure. C can vary with temperature over wide ranges or for special materials (near absolute zero, C tends to zero according to Debye's law)."
    dimension_check: "[M L^2 T^-2] / [Theta] = [M L^2 T^-2 Theta^-1] = J/K ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - teoria.md
      - ejemplos.md
      - interpretacion.yaml
    interpretation_tags:
      - capacidad_calorifica
      - propiedad_extensiva
      - calor_sensible
    result_semantics:
      target: C
      kind: scalar_unsigned
      sign_meaning:
        es: "C es siempre positiva. No tiene interpretación de signo: indica cuánta energía necesita el cuerpo por kelvin, independientemente de si se calienta o enfría."
        en: "C is always positive. It carries no sign interpretation: it indicates how much energy the body needs per kelvin, regardless of whether it heats up or cools down."
      absolute_value_meaning:
        es: "C mide la resistencia del cuerpo al cambio de temperatura. Cuanto mayor C, más estable térmicamente es el cuerpo frente a entradas o salidas de calor."
        en: "C measures the body's resistance to temperature change. The larger C, the more thermally stable the body against heat inputs or outputs."
    domain_checks:
      - "C > 0"
      - "DeltaT ≠ 0 para calcular C como C = Q / DeltaT"
    coherence_checks:
      - "Q y DeltaT deben tener el mismo signo: si el cuerpo se calienta (DeltaT > 0), absorbió calor (Q > 0)"
      - "C = m · c debe ser verificable si se conoce la masa m y el calor específico c del material"
    graph_implications:
      - "En la gráfica Q vs DeltaT, C es la pendiente de la recta que pasa por el origen. Dos rectas distintas corresponden a dos cuerpos con distintas C"
    pedagogical_triggers:
      - "Si C resulta negativa, el alumno ha calculado DeltaT en orden inverso (T_inicial - T_final). Verificar el convenio de signos."
      - "Si C es mucho mayor o menor de lo esperado, verificar unidades: C en J/K, Q en J, DeltaT en K o °C (las diferencias de temperatura en °C y en K son idénticas)"

  - id: capacidad_calorifica_desde_especifico
    title:
      es: Capacidad calorífica total a partir del calor específico
      en: Total heat capacity from specific heat capacity
    equation: "C = m * c"
    latex: "C = m \\\\cdot c"
    rearrangements:
      - target: C
        equation: "C = m * c"
        latex: "C = m \\\\cdot c"
    category: derived
    relation_type: composition
    physical_meaning:
      es: "La capacidad calorífica total C de un cuerpo es el producto de su masa m por el calor específico c del material que lo forma. Esta relación conecta la propiedad extensiva C (que depende del cuerpo) con la propiedad intensiva c (que depende solo del material). Duplicar la masa duplica C; duplicar el calor específico también duplica C."
      en: "The total heat capacity C of a body is the product of its mass m by the specific heat capacity c of the material it is made of. This relation connects the extensive property C (which depends on the body) with the intensive property c (which depends only on the material). Doubling the mass doubles C; doubling the specific heat capacity also doubles C."
    constraints:
      - "El cuerpo debe ser homogéneo (un único material o una mezcla homogénea)"
      - "c debe ser el calor específico del material a la temperatura del proceso"
      - "m en kilogramos y c en J/(kg·K) para obtener C en J/K"
    validity:
      es: "Válida para cuerpos homogéneos con c constante en el rango de temperatura. Para cuerpos compuestos de varios materiales, C total es la suma de las C parciales de cada componente: C_total = suma de (m_i · c_i)."
      en: "Valid for homogeneous bodies with constant c over the temperature range. For bodies composed of several materials, total C is the sum of the partial C values of each component: C_total = sum of (m_i · c_i)."
    dimension_check: "[M] · [L^2 T^-2 Theta^-1] = [M L^2 T^-2 Theta^-1] = J/K ✓"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - teoria.md
      - ejemplos.md
      - interpretacion.yaml
    interpretation_tags:
      - capacidad_calorifica
      - calor_especifico
      - masa
      - propiedad_extensiva
    result_semantics:
      target: C
      kind: scalar_unsigned
      sign_meaning:
        es: "C es siempre positiva. Su magnitud indica el 'peso térmico' del cuerpo en cualquier proceso de intercambio de calor."
        en: "C is always positive. Its magnitude indicates the 'thermal weight' of the body in any heat exchange process."
      absolute_value_meaning:
        es: "C en J/K indica literalmente cuántos julios de calor necesita este cuerpo para subir 1 kelvin de temperatura. Un cuerpo de 1 kg de agua tiene C = 4186 J/K; necesita 4186 J para subir 1 °C."
        en: "C in J/K literally indicates how many joules of heat this body needs to rise 1 kelvin in temperature. A 1 kg body of water has C = 4186 J/K; it needs 4186 J to rise 1 °C."
    domain_checks:
      - "m > 0"
      - "c > 0"
    coherence_checks:
      - "C = m · c debe coincidir con C = Q / DeltaT calculado de forma independiente para el mismo cuerpo"
      - "Para el agua a temperatura ambiente: c = 4186 J/(kg·K), así que 1 kg de agua tiene C = 4186 J/K"
    graph_implications:
      - "En la gráfica C vs m para un material dado, c es la pendiente de la recta que pasa por el origen"
    pedagogical_triggers:
      - "Si C calculada como m · c no coincide con C = Q / DeltaT, verificar unidades de m (debe ser kg) y de c (debe ser J/(kg·K))."
      - "Para un cuerpo compuesto, C_total = suma de m_i · c_i; no usar un único c promedio sin ponderar por masas."
`;export{e as default};
