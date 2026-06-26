const e=`magnitudes:

  - id: C
    symbol: "C"
    nombre:
      es: Capacidad calorífica total
      en: Total heat capacity
    descripcion:
      es: Propiedad extensiva de un cuerpo concreto que indica cuántos julios son necesarios para elevar su temperatura en un kelvin. Depende tanto del material (a través del calor específico c) como de la masa del cuerpo. Dos cuerpos del mismo material pero distinta masa tienen distinta capacidad calorífica total. También se llama capacidad de calor o calor total del cuerpo.
      en: Extensive property of a specific body indicating how many joules are needed to raise its temperature by one kelvin. It depends on both the material (through the specific heat capacity c) and the mass of the body. Two bodies of the same material but different mass have different total heat capacities. Also called heat capacity or thermal capacity of the body.
    unidad_si: "J/K"
    dimension: "[M L^2 T^-2 Theta^-1]"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - definición de capacidad calorífica total
      - relación entre capacidad calorífica total y calor sensible
    common_mistake: "Confundir la capacidad calorífica total C (extensiva, en J/K) con el calor específico c (intensiva, en J/(kg·K)). C depende del cuerpo concreto; c es una propiedad del material independiente de la masa."
    typical_range: "Desde decenas de J/K para pequeñas muestras metálicas de laboratorio hasta millones de J/K para grandes depósitos de agua."
    sign_behavior:
      has_sign: false
      meaning:
        es: "C es siempre positiva para materiales termodinámicamente estables. Un valor nulo o negativo no tiene sentido físico."
        en: "C is always positive for thermodynamically stable materials. A zero or negative value has no physical meaning."
    zero_behavior:
      allowed: false
      meaning:
        es: "Una capacidad calorífica total nula implicaría que el cuerpo no necesita energía para cambiar de temperatura, lo que es físicamente imposible para cualquier material real."
        en: "Zero total heat capacity would imply the body needs no energy to change temperature, which is physically impossible for any real material."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, +∞)"
    interpretation_role:
      primary_for:
        - cálculo del calor Q absorbido o cedido por el cuerpo dado un DeltaT
        - comparación de la resistencia térmica de distintos cuerpos
      secondary_for:
        - diseño de sistemas de almacenamiento térmico
        - calorimetría: determinación del peso relativo de cada cuerpo en el equilibrio térmico
    graph_binding:
      channels:
        - eje_y_C
    pedagogical_notes:
      es: "C es la pendiente de la recta Q vs DeltaT para el cuerpo dado. Un cuerpo con C grande necesita mucho calor para cambiar poco de temperatura: actúa como un buen amortiguador térmico. La distinción entre C (extensiva) y c (intensiva) es el aprendizaje central de este leaf."
      en: "C is the slope of the Q vs DeltaT line for the given body. A body with large C needs much heat to change temperature little: it acts as a good thermal buffer. The distinction between C (extensive) and c (intensive) is the central learning of this leaf."

  - id: Q
    symbol: "Q"
    nombre:
      es: Calor intercambiado
      en: Exchanged heat
    descripcion:
      es: Energía térmica intercambiada por el cuerpo durante el proceso de calentamiento o enfriamiento. Es positiva si el cuerpo absorbe calor (se calienta) y negativa si lo cede (se enfría). En este leaf, Q se relaciona directamente con C y DeltaT como Q = C · DeltaT.
      en: Thermal energy exchanged by the body during the heating or cooling process. It is positive if the body absorbs heat (warms up) and negative if it releases it (cools down). In this leaf, Q is directly related to C and DeltaT as Q = C · DeltaT.
    unidad_si: J
    dimension: "[M L^2 T^-2]"
    is_vector: false
    components: []
    category: derived
    physical_role: input_parameter
    used_in:
      - definición de capacidad calorífica total
      - relación entre capacidad calorífica total y calor sensible
    common_mistake: "Invertir el signo de Q tomando DeltaT como T_inicial - T_final en lugar de T_final - T_inicial, lo que invierte el sentido de la transferencia de calor."
    typical_range: "Desde julios en experimentos de pequeña escala hasta gigajulios en procesos industriales."
    sign_behavior:
      has_sign: true
      meaning:
        es: "Q > 0: el cuerpo absorbe calor del entorno y su temperatura sube. Q < 0: el cuerpo cede calor al entorno y su temperatura baja."
        en: "Q > 0: the body absorbs heat from the surroundings and its temperature rises. Q < 0: the body releases heat to the surroundings and its temperature falls."
    zero_behavior:
      allowed: true
      meaning:
        es: "Q nulo indica que no ha habido intercambio de calor: o bien el proceso es adiabático, o bien DeltaT es cero (temperatura constante)."
        en: "Zero Q indicates no heat exchange has occurred: either the process is adiabatic, or DeltaT is zero (constant temperature)."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "any"
    interpretation_role:
      primary_for:
        - cálculo de la energía necesaria para calentar o enfriar el cuerpo
        - verificación del balance energético en calorimetría
      secondary_for: []
    graph_binding:
      channels:
        - eje_y_Q
    pedagogical_notes:
      es: "En la gráfica Q vs DeltaT para este cuerpo, Q es proporcional a DeltaT con pendiente C. Cambiar la pendiente equivale a cambiar la masa o el material del cuerpo."
      en: "In the Q vs DeltaT graph for this body, Q is proportional to DeltaT with slope C. Changing the slope is equivalent to changing the mass or material of the body."

  - id: DeltaT
    symbol: "\\\\Delta T"
    nombre:
      es: Variación de temperatura
      en: Temperature change
    descripcion:
      es: Diferencia entre la temperatura final y la inicial del cuerpo. Es positiva si el cuerpo se calienta y negativa si se enfría. Es la variable de entrada principal junto con C para calcular el calor intercambiado por el cuerpo.
      en: Difference between the final and initial temperature of the body. It is positive if the body warms up and negative if it cools down. It is the main input variable together with C to calculate the heat exchanged by the body.
    unidad_si: K
    dimension: "[Theta]"
    is_vector: false
    components: []
    category: fundamental
    physical_role: input_parameter
    used_in:
      - definición de capacidad calorífica total
      - relación entre capacidad calorífica total y calor sensible
    common_mistake: "Calcular DeltaT como valor absoluto de la diferencia de temperaturas, perdiendo el signo que indica si el cuerpo gana o pierde calor."
    typical_range: "Desde fracciones de kelvin en mediciones de precisión hasta cientos de kelvin en aplicaciones industriales."
    sign_behavior:
      has_sign: true
      meaning:
        es: "DeltaT > 0: la temperatura del cuerpo ha subido (ha absorbido calor). DeltaT < 0: la temperatura ha bajado (ha cedido calor). DeltaT = T_final - T_inicial."
        en: "DeltaT > 0: the body's temperature has risen (it has absorbed heat). DeltaT < 0: the temperature has fallen (it has released heat). DeltaT = T_final - T_initial."
    zero_behavior:
      allowed: true
      meaning:
        es: "DeltaT nulo indica que la temperatura no ha variado. Ocurre en procesos isotérmicos o cuando Q = 0."
        en: "Zero DeltaT indicates temperature has not changed. This occurs in isothermal processes or when Q = 0."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "any"
    interpretation_role:
      primary_for:
        - determinación del calor intercambiado dado C del cuerpo
      secondary_for:
        - verificación de la dirección del flujo de calor en un sistema
    graph_binding:
      channels:
        - eje_x_delta_T
    pedagogical_notes:
      es: "DeltaT = T_final - T_inicial, siempre en este orden. Para un cuerpo que se enfría de 80 °C a 20 °C, DeltaT = 20 - 80 = -60 K. El signo negativo indica que el cuerpo ha cedido calor."
      en: "DeltaT = T_final - T_initial, always in this order. For a body cooling from 80 °C to 20 °C, DeltaT = 20 - 80 = -60 K. The negative sign indicates the body has released heat."
`;export{e as default};
