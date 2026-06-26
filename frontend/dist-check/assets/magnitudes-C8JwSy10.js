const e=`version: 1
magnitudes:
  - id: W
    symbol: W
    nombre:
      es: peso
      en: weight
    descripcion:
      es: Fuerza gravitatoria total ejercida sobre el cuerpo.
      en: Total gravitational force exerted on the body.
    unidad_si: "N"
    dimension: "LMT^{-2}"
    is_vector: true
    components: ["W_x", "W_y"]
    category: derived
    physical_role: gravitational_load
    used_in: [support_example, inclined_plane_example, cable_example]
    common_mistake: "Confundir el peso con la masa y dejar de multiplicar por g."
    typical_range: "1 - 1e5 N en problemas escolares y tecnicos."
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo de cada componente depende del eje elegido, aunque el vector apunta hacia abajo.
        en: The sign of each component depends on the chosen axis, although the vector points downward.
    zero_behavior:
      allowed: false
      meaning:
        es: Un peso nulo no describe el tipo de situaciones tratadas en este leaf.
        en: Zero weight does not describe the situations treated in this leaf.
    value_nature:
      kind: vector_magnitude
      nonnegative_only: true
      expected_interval: "(0, 1e5] N"
    interpretation_role:
      primary_for: [peso_desde_masa, componente_paralela_del_peso, tension_nudo_simetrico]
      secondary_for: [normal_plano_inclinado]
    graph_binding:
      channels: [load_arrow]
    pedagogical_notes: "En el DCL debe dibujarse siempre vertical hacia abajo, aunque luego se proyecte sobre ejes rotados."

  - id: N
    symbol: N
    nombre:
      es: fuerza normal
      en: normal force
    descripcion:
      es: Reaccion perpendicular ejercida por una superficie sobre el cuerpo.
      en: Perpendicular reaction exerted by a surface on the body.
    unidad_si: "N"
    dimension: "LMT^{-2}"
    is_vector: true
    components: ["N_x", "N_y"]
    category: interaction
    physical_role: contact_reaction
    used_in: [support_example, inclined_plane_example]
    common_mistake: "Dibujarla vertical en cualquier situacion en lugar de perpendicular a la superficie."
    typical_range: "1 - 1e5 N."
    sign_behavior:
      has_sign: true
      meaning:
        es: Sus componentes pueden ser positivas o negativas segun el sistema de ejes.
        en: Its components may be positive or negative depending on the axis system.
    zero_behavior:
      allowed: true
      meaning:
        es: Puede anularse si se pierde el contacto con la superficie.
        en: It may vanish if contact with the surface is lost.
    value_nature:
      kind: vector_magnitude
      nonnegative_only: true
      expected_interval: "[0, 1e5] N"
    interpretation_role:
      primary_for: [normal_plano_inclinado]
      secondary_for: [rozamiento_estatico_limite]
    graph_binding:
      channels: [normal_arrow]
    pedagogical_notes: "Su modulo se ajusta al contacto. No es automaticamente igual al peso salvo en apoyo horizontal simple."

  - id: T
    symbol: T
    nombre:
      es: tension
      en: tension
    descripcion:
      es: Fuerza de traccion transmitida por una cuerda o cable ideal.
      en: Pulling force transmitted by an ideal rope or cable.
    unidad_si: "N"
    dimension: "LMT^{-2}"
    is_vector: true
    components: ["T_x", "T_y"]
    category: interaction
    physical_role: tensile_response
    used_in: [cable_example, support_structures]
    common_mistake: "Suponer que la cuerda empuja cuando un calculo entrega una tension negativa."
    typical_range: "10 - 1e4 N."
    sign_behavior:
      has_sign: true
      meaning:
        es: Las componentes de T toman signo segun el eje, pero el modulo de tension es no negativo.
        en: The components of T take signs according to the axis, but the tension magnitude is nonnegative.
    zero_behavior:
      allowed: true
      meaning:
        es: Tension cero describe una cuerda floja o sin carga efectiva.
        en: Zero tension describes a slack or effectively unloaded rope.
    value_nature:
      kind: vector_magnitude
      nonnegative_only: true
      expected_interval: "[0, 1e4] N"
    interpretation_role:
      primary_for: [tension_nudo_simetrico]
      secondary_for: []
    graph_binding:
      channels: [tension_arrow]
    pedagogical_notes: "En el DCL siempre se orienta a lo largo de la cuerda y alejandose del cuerpo aislado."

  - id: F_s_max
    symbol: F_{s,max}
    nombre:
      es: rozamiento estatico maximo
      en: maximum static friction
    descripcion:
      es: Valor limite que el rozamiento estatico puede alcanzar antes de iniciarse el deslizamiento.
      en: Limit value that static friction can reach before sliding begins.
    unidad_si: "N"
    dimension: "LMT^{-2}"
    is_vector: false
    components: null
    category: derived
    physical_role: sticking_limit
    used_in: [inclined_plane_example, contact_example]
    common_mistake: "Tomarlo siempre igual al rozamiento real incluso cuando el sistema no esta al limite."
    typical_range: "0 - 1e4 N."
    sign_behavior:
      has_sign: false
      meaning:
        es: Se reporta como modulo maximo disponible, no como componente orientada.
        en: It is reported as an available maximum magnitude, not as an oriented component.
    zero_behavior:
      allowed: true
      meaning:
        es: Puede ser cero si no hay contacto o si el coeficiente es nulo.
        en: It can be zero if there is no contact or if the coefficient is zero.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: "[0, 1e4] N"
    interpretation_role:
      primary_for: [rozamiento_estatico_limite]
      secondary_for: []
    graph_binding:
      channels: [friction_bar]
    pedagogical_notes: "Debe compararse con la fuerza tangencial exigida. No implica automaticamente que el cuerpo este deslizando."

  - id: W_parallel
    symbol: W_{parallel}
    nombre:
      es: componente paralela del peso
      en: parallel weight component
    descripcion:
      es: Parte del peso alineada con la direccion de deslizamiento sobre el plano.
      en: Part of the weight aligned with the sliding direction on the plane.
    unidad_si: "N"
    dimension: "LMT^{-2}"
    is_vector: false
    components: null
    category: derived
    physical_role: driving_component
    used_in: [inclined_plane_example]
    common_mistake: "Intercambiar seno y coseno al proyectar el peso sobre ejes girados."
    typical_range: "0 - 1e5 N."
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo depende de como se oriente el eje paralelo al plano.
        en: The sign depends on how the axis parallel to the plane is oriented.
    zero_behavior:
      allowed: true
      meaning:
        es: Vale cero cuando el plano es horizontal o el peso es despreciable.
        en: It becomes zero when the plane is horizontal or the weight is negligible.
    value_nature:
      kind: scalar_projection
      nonnegative_only: true
      expected_interval: "[0, 1e5] N"
    interpretation_role:
      primary_for: [componente_paralela_del_peso]
      secondary_for: [rozamiento_estatico_limite]
    graph_binding:
      channels: [parallel_component]
    pedagogical_notes: "Es la cantidad que compite directamente con el rozamiento cuando se estudia reposo sobre una rampa."

  - id: mu_s
    symbol: \\mu_s
    nombre:
      es: coeficiente de rozamiento estatico
      en: static friction coefficient
    descripcion:
      es: Parametro adimensional que mide la capacidad de adherencia antes del deslizamiento.
      en: Dimensionless parameter measuring sticking capability before sliding.
    unidad_si: "1"
    dimension: "1"
    is_vector: false
    components: null
    category: coefficient
    physical_role: contact_parameter
    used_in: [inclined_plane_example, contact_example]
    common_mistake: "Usarlo como fuerza directa en lugar de multiplicarlo por la normal."
    typical_range: "0 - 1.2."
    sign_behavior:
      has_sign: false
      meaning:
        es: Se interpreta como un parametro no negativo del contacto.
        en: It is interpreted as a nonnegative contact parameter.
    zero_behavior:
      allowed: true
      meaning:
        es: Si vale cero, el contacto no ofrece adherencia estatica.
        en: If it is zero, the contact offers no static sticking capability.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: "[0, 1.2]"
    interpretation_role:
      primary_for: [rozamiento_estatico_limite]
      secondary_for: []
    graph_binding:
      channels: [friction_scale]
    pedagogical_notes: "No decide por si solo si el cuerpo se mueve. Solo fija el techo del rozamiento estatico."

  - id: alpha
    symbol: \\alpha
    nombre:
      es: angulo del plano
      en: plane angle
    descripcion:
      es: Angulo que forma el plano inclinado con la horizontal.
      en: Angle formed by the inclined plane with the horizontal.
    unidad_si: "rad"
    dimension: "1"
    is_vector: false
    components: null
    category: configuration
    physical_role: geometric_parameter
    used_in: [inclined_plane_example]
    common_mistake: "Medirlo desde la vertical y mantener la misma descomposicion trigonometrica."
    typical_range: "0 - 1.57 rad."
    sign_behavior:
      has_sign: true
      meaning:
        es: Puede firmarse si se gira el eje en uno u otro sentido, aunque suele trabajarse en modulo positivo.
        en: It may be signed if the axis is rotated one way or the other, although positive magnitude is usual.
    zero_behavior:
      allowed: true
      meaning:
        es: Angulo cero reduce el plano inclinado a un apoyo horizontal.
        en: Zero angle reduces the inclined plane to a horizontal support.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: "[0, 1.57] rad"
    interpretation_role:
      primary_for: [normal_plano_inclinado, componente_paralela_del_peso]
      secondary_for: []
    graph_binding:
      channels: [angle_marker]
    pedagogical_notes: "Conviene ligar el eje x al plano para que alpha aparezca solo en las proyecciones del peso."

  - id: theta
    symbol: \\theta
    nombre:
      es: angulo del cable
      en: cable angle
    descripcion:
      es: Angulo que cada cable forma con la horizontal en un nudo simetrico.
      en: Angle each cable makes with the horizontal in a symmetric node.
    unidad_si: "rad"
    dimension: "1"
    is_vector: false
    components: null
    category: configuration
    physical_role: direction_parameter
    used_in: [cable_example]
    common_mistake: "Medirlo respecto a la vertical y no ajustar la funcion trigonometrica usada."
    typical_range: "0 - 1.57 rad."
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo depende del convenio angular, pero el problema suele usar modulo positivo.
        en: The sign depends on the angular convention, but the problem usually uses positive magnitude.
    zero_behavior:
      allowed: false
      meaning:
        es: Un angulo nulo no puede sostener una carga central con un cable ideal tenso.
        en: A zero angle cannot support a central load with an ideal taut cable.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: "(0, 1.57] rad"
    interpretation_role:
      primary_for: [tension_nudo_simetrico]
      secondary_for: []
    graph_binding:
      channels: [angle_marker]
    pedagogical_notes: "Cuanto menor es theta, mayor debe ser la tension para sostener el mismo peso."

  - id: m
    symbol: m
    nombre:
      es: masa
      en: mass
    descripcion:
      es: Medida escalar de la inercia del cuerpo.
      en: Scalar measure of the body's inertia.
    unidad_si: "kg"
    dimension: "M"
    is_vector: false
    components: null
    category: fundamental
    physical_role: inertial_mass
    used_in: [peso_desde_masa]
    common_mistake: "Sustituir masa donde en realidad se necesita peso."
    typical_range: "0.1 - 1e4 kg."
    sign_behavior:
      has_sign: false
      meaning:
        es: La masa es no negativa en mecanica clasica.
        en: Mass is nonnegative in classical mechanics.
    zero_behavior:
      allowed: false
      meaning:
        es: Una masa nula queda fuera del dominio ordinario del leaf.
        en: Zero mass lies outside the ordinary domain of the leaf.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: "(0, 1e4] kg"
    interpretation_role:
      primary_for: [peso_desde_masa]
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "Solo se convierte en fuerza cuando entra la aceleracion gravitatoria."

  - id: g
    symbol: g
    nombre:
      es: aceleracion gravitatoria
      en: gravitational acceleration
    descripcion:
      es: Intensidad local del campo gravitatorio usada para convertir masa en peso.
      en: Local gravitational field intensity used to convert mass into weight.
    unidad_si: "m/s^2"
    dimension: "LT^{-2}"
    is_vector: false
    components: null
    category: parameter
    physical_role: environmental_parameter
    used_in: [peso_desde_masa]
    common_mistake: "Olvidar sus unidades y tratarla como un numero puro."
    typical_range: "9.8 m/s^2 cerca de la superficie terrestre."
    sign_behavior:
      has_sign: false
      meaning:
        es: En este leaf se usa como modulo positivo del campo gravitatorio.
        en: In this leaf it is used as the positive magnitude of the gravitational field.
    zero_behavior:
      allowed: false
      meaning:
        es: Si g fuera cero desapareceria el peso y el ejemplo cambiaria de tema.
        en: If g were zero, weight would disappear and the example would become a different topic.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: "(0, 20] m/s^2"
    interpretation_role:
      primary_for: [peso_desde_masa]
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "En problemas basicos suele aproximarse como 9.8 o 10 m/s^2, pero conviene declarar el valor usado."
`;export{e as default};
