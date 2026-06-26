const e=`magnitudes:
  - id: m
    symbol: m
    nombre:
      es: masa
      en: mass
    descripcion:
      es: Cantidad de materia del bloque o del sistema equivalente que se acelera.
      en: Amount of matter of the block or equivalent system that accelerates.
    unidad_si: kg
    dimension: M
    is_vector: false
    components: null
    category: fundamental
    physical_role: inertia_measure
    used_in: [normal_horizontal, aceleracion_dinamica]
    common_mistake:
      es: Pensar que una masa mayor implica siempre mayor rozamiento sin analizar la normal y el régimen.
      en: Thinking that a larger mass always implies greater friction without analyzing the normal and the regime.
    typical_range:
      es: De 0.1 kg a varias decenas de kg en ejercicios introductorios.
      en: From 0.1 kg to several tens of kg in introductory exercises.
    sign_behavior:
      has_sign: false
      meaning:
        es: La masa es siempre positiva y solo mide inercia.
        en: Mass is always positive and only measures inertia.
    zero_behavior:
      allowed: false
      meaning:
        es: Un sistema con masa nula no pertenece al modelo mecánico del leaf.
        en: A zero-mass system does not belong to this mechanical model.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: m > 0
    interpretation_role:
      primary_for: [a, N]
      secondary_for: [f_emax, F_ext_crit]
    graph_binding:
      channels: []
    pedagogical_notes: La masa no decide por sí sola el sentido del movimiento, pero sí modula cuánto cambia la velocidad ante una resultante dada.

  - id: g
    symbol: g
    nombre:
      es: aceleración de la gravedad
      en: gravitational acceleration
    descripcion:
      es: Intensidad del campo gravitatorio usada para convertir masa en peso.
      en: Gravitational field intensity used to convert mass into weight.
    unidad_si: m/s^2
    dimension: LT^-2
    is_vector: false
    components: null
    category: constant
    physical_role: environment_parameter
    used_in: [normal_horizontal]
    common_mistake:
      es: Tratarla como una fuerza en lugar de como una aceleración del entorno.
      en: Treating it as a force instead of an acceleration of the environment.
    typical_range:
      es: En la Tierra suele aproximarse como 9.8 m/s^2 o 10 m/s^2.
      en: On Earth it is usually approximated as 9.8 m/s^2 or 10 m/s^2.
    sign_behavior:
      has_sign: false
      meaning:
        es: Aquí se usa su módulo, porque la dirección ya queda absorbida en la construcción de la normal.
        en: Here its magnitude is used because direction is already absorbed in the construction of the normal.
    zero_behavior:
      allowed: false
      meaning:
        es: Si g fuera nula, el contacto horizontal perdería el origen usual de la normal.
        en: If g were zero, a horizontal contact would lose the usual source of the normal reaction.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: g > 0
    interpretation_role:
      primary_for: [N]
      secondary_for: [f_emax]
    graph_binding:
      channels: []
    pedagogical_notes: Conviene recordar que cambiar de planeta cambia la normal y, por tanto, la fricción disponible incluso con el mismo material.

  - id: N
    symbol: N
    nombre:
      es: fuerza normal
      en: normal force
    descripcion:
      es: Fuerza de contacto perpendicular a la superficie que ajusta el apoyo entre los cuerpos.
      en: Contact force perpendicular to the surface that adjusts the support between bodies.
    unidad_si: N
    dimension: MLT^-2
    is_vector: false
    components: null
    category: derived
    physical_role: contact_response
    used_in: [normal_horizontal, friccion_estatica_max, aceleracion_dinamica, umbral_deslizamiento]
    common_mistake:
      es: Igualarla automáticamente al peso en cualquier geometría, incluso cuando hay otras fuerzas con componente normal.
      en: Automatically equating it to weight in any geometry, even when there are other forces with a normal component.
    typical_range:
      es: Del mismo orden que m·g en apoyos horizontales sencillos.
      en: Of the same order as m·g in simple horizontal supports.
    sign_behavior:
      has_sign: false
      meaning:
        es: Se maneja como módulo positivo de la reacción perpendicular.
        en: It is handled as the positive magnitude of the perpendicular reaction.
    zero_behavior:
      allowed: true
      meaning:
        es: N igual a cero indica pérdida de contacto o ausencia de apoyo efectivo.
        en: N equal to zero indicates loss of contact or absence of effective support.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: N >= 0
    interpretation_role:
      primary_for: [f_emax, F_ext_crit]
      secondary_for: [a]
    graph_binding:
      channels: []
    pedagogical_notes: La normal no es un dato decorativo; fija cuánta fricción puede aparecer antes de que el sistema deslice.

  - id: mu_e
    symbol: \\mu_e
    nombre:
      es: coeficiente de rozamiento estático
      en: static friction coefficient
    descripcion:
      es: Parámetro adimensional que cuantifica el máximo rozamiento antes del deslizamiento.
      en: Dimensionless parameter that quantifies the maximum friction before slipping.
    unidad_si: 1
    dimension: 1
    is_vector: false
    components: null
    category: parameter
    physical_role: contact_limit_parameter
    used_in: [friccion_estatica_max, umbral_deslizamiento]
    common_mistake:
      es: Creer que el rozamiento estático siempre vale mu_e N, cuando en realidad solo puede llegar hasta ese valor.
      en: Believing that static friction is always mu_e N, when in reality it can only reach that value.
    typical_range:
      es: Entre 0.1 y 1.0 en superficies secas de aula.
      en: Between 0.1 and 1.0 on dry classroom surfaces.
    sign_behavior:
      has_sign: false
      meaning:
        es: Es un parámetro positivo que expresa capacidad de adherencia.
        en: It is a positive parameter expressing adhesion capacity.
    zero_behavior:
      allowed: true
      meaning:
        es: Si mu_e vale cero, el contacto no puede sostener una componente tangencial sin deslizar.
        en: If mu_e equals zero, the contact cannot sustain a tangential component without slipping.
    value_nature:
      kind: parameter
      nonnegative_only: true
      expected_interval: mu_e >= 0
    interpretation_role:
      primary_for: [f_emax, F_ext_crit]
      secondary_for: [a]
    graph_binding:
      channels: []
    pedagogical_notes: Su papel central en este leaf es decidir el régimen, no calcular por sí solo el valor real del rozamiento.

  - id: mu_c
    symbol: \\mu_c
    nombre:
      es: coeficiente de rozamiento cinético
      en: kinetic friction coefficient
    descripcion:
      es: Parámetro adimensional que cuantifica el rozamiento durante el deslizamiento.
      en: Dimensionless parameter that quantifies friction during sliding.
    unidad_si: 1
    dimension: 1
    is_vector: false
    components: null
    category: parameter
    physical_role: sliding_parameter
    used_in: [aceleracion_dinamica]
    common_mistake:
      es: Usarlo en reposo antes de comprobar si el sistema ha superado el umbral estático.
      en: Using it at rest before checking if the system has exceeded the static threshold.
    typical_range:
      es: Suele ser algo menor que mu_e para el mismo par de materiales.
      en: Usually somewhat smaller than mu_e for the same pair of materials.
    sign_behavior:
      has_sign: false
      meaning:
        es: Se usa como módulo positivo del parámetro de deslizamiento.
        en: It is used as the positive magnitude of the sliding parameter.
    zero_behavior:
      allowed: true
      meaning:
        es: Mu_c igual a cero representa un deslizamiento ideal sin rozamiento cinético.
        en: Mu_c equal to zero represents ideal sliding without kinetic friction.
    value_nature:
      kind: parameter
      nonnegative_only: true
      expected_interval: mu_c >= 0
    interpretation_role:
      primary_for: [a]
      secondary_for: [F_ext_crit]
    graph_binding:
      channels: []
    pedagogical_notes: En problemas reales puede depender de temperatura y velocidad, pero aquí se idealiza como constante por tramos.

  - id: F_ext
    symbol: F_ext
    nombre:
      es: fuerza externa tangencial
      en: external tangential force
    descripcion:
      es: Fuerza aplicada paralela al movimiento potencial o real sobre la superficie.
      en: Applied force parallel to the potential or real motion on the surface.
    unidad_si: N
    dimension: MLT^-2
    is_vector: false
    components: null
    category: state
    physical_role: driving_action
    used_in: [aceleracion_dinamica, umbral_deslizamiento]
    common_mistake:
      es: Confundir la fuerza aplicada con la resultante y olvidar que el rozamiento modifica el balance dinámico.
      en: Confusing the applied force with the resultant and forgetting that friction modifies the dynamic balance.
    typical_range:
      es: Desde unos pocos newtons hasta varias decenas en ejercicios básicos.
      en: From a few newtons up to several tens in basic exercises.
    sign_behavior:
      has_sign: true
      meaning:
        es: Su signo fija el sentido positivo elegido para el posible movimiento.
        en: Its sign fixes the chosen positive direction for the possible motion.
    zero_behavior:
      allowed: true
      meaning:
        es: Si F_ext es cero, solo quedan las fuerzas internas del contacto y el sistema puede seguir en reposo.
        en: If F_ext is zero, only contact forces remain and the system may stay at rest.
    value_nature:
      kind: signed_scalar
      nonnegative_only: false
      expected_interval: cualquier valor real según el eje elegido
    interpretation_role:
      primary_for: [a, F_ext_crit]
      secondary_for: [f_emax]
    graph_binding:
      channels: []
    pedagogical_notes: En este leaf interesa sobre todo compararla con el umbral estático y después con la fricción cinética efectiva.

  - id: f_emax
    symbol: f_emax
    nombre:
      es: rozamiento estático máximo
      en: maximum static friction
    descripcion:
      es: Valor límite del rozamiento estático que el contacto puede sostener antes de deslizar.
      en: Limiting value of static friction that the contact can sustain before sliding.
    unidad_si: N
    dimension: MLT^-2
    is_vector: false
    components: null
    category: derived
    physical_role: regime_threshold
    used_in: [friccion_estatica_max, umbral_deslizamiento]
    common_mistake:
      es: Tomarlo como el valor real de la fricción estática incluso cuando la fuerza aplicada es menor.
      en: Taking it as the actual value of static friction even when the applied force is smaller.
    typical_range:
      es: Del mismo orden que mu_e·N.
      en: Of the same order as mu_e·N.
    sign_behavior:
      has_sign: false
      meaning:
        es: Se usa como cota positiva del módulo, no como fuerza orientada.
        en: It is used as a positive bound for the magnitude, not as an oriented force.
    zero_behavior:
      allowed: true
      meaning:
        es: Si vale cero, el contacto no ofrece resistencia tangencial estática.
        en: If it equals zero, the contact offers no static tangential resistance.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: f_emax >= 0
    interpretation_role:
      primary_for: [F_ext_crit]
      secondary_for: [a]
    graph_binding:
      channels: []
    pedagogical_notes: Es la bisagra conceptual del leaf porque separa claramente el análisis de adhesión del análisis de deslizamiento.

  - id: F_ext_crit
    symbol: F_ext_crit
    nombre:
      es: fuerza externa crítica
      en: critical external force
    descripcion:
      es: Fuerza externa mínima necesaria para romper el reposo en el modelo horizontal simple.
      en: Minimum external force required to break rest in the simple horizontal model.
    unidad_si: N
    dimension: MLT^-2
    is_vector: false
    components: null
    category: derived
    physical_role: transition_threshold
    used_in: [umbral_deslizamiento]
    common_mistake:
      es: Creer que superar el umbral da una aceleración grande sin analizar la masa ni mu_c.
      en: Believing that exceeding the threshold gives a large acceleration without analyzing the mass or mu_c.
    typical_range:
      es: Igual a mu_e·N en el modelo horizontal ideal.
      en: Equal to mu_e·N in the ideal horizontal model.
    sign_behavior:
      has_sign: false
      meaning:
        es: Se lee como módulo crítico del empuje en el sentido elegido.
        en: It is read as the critical magnitude of the push in the chosen direction.
    zero_behavior:
      allowed: true
      meaning:
        es: Si vale cero, cualquier fuerza tangencial rompe el reposo.
        en: If it is zero, any tangential force breaks rest.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: F_ext_crit >= 0
    interpretation_role:
      primary_for: [a]
      secondary_for: [f_emax]
    graph_binding:
      channels: []
    pedagogical_notes: Comparar F_ext con esta magnitud evita mezclar fórmulas de regímenes incompatibles en el mismo paso.

  - id: a
    symbol: a
    nombre:
      es: aceleración
      en: acceleration
    descripcion:
      es: Cambio temporal de la velocidad del sistema cuando el contacto ya no sostiene el reposo.
      en: Time rate of change of velocity once the contact no longer sustains rest.
    unidad_si: m/s^2
    dimension: LT^-2
    is_vector: false
    components: null
    category: state
    physical_role: dynamic_response
    used_in: [aceleracion_dinamica]
    common_mistake:
      es: Calcularla directamente con la segunda ley sin decidir antes si el sistema sigue en régimen estático.
      en: Calculating it directly with the second law without first deciding if the system remains in the static regime.
    typical_range:
      es: Desde 0 hasta varios m/s^2 en ejercicios introductorios.
      en: From 0 to several m/s^2 in introductory exercises.
    sign_behavior:
      has_sign: true
      meaning:
        es: El signo indica si la aceleración va a favor o en contra del eje elegido.
        en: The sign indicates whether acceleration points with or against the chosen axis.
    zero_behavior:
      allowed: true
      meaning:
        es: Aceleración nula puede significar equilibrio dinámico o régimen estático correctamente sostenido.
        en: Zero acceleration may mean dynamic balance or a correctly sustained static regime.
    value_nature:
      kind: signed_scalar
      nonnegative_only: false
      expected_interval: cualquier valor real según el eje elegido
    interpretation_role:
      primary_for: [a]
      secondary_for: [F_ext_crit]
    graph_binding:
      channels: []
    pedagogical_notes: Su lectura solo tiene sentido después de haber comprobado que el sistema ha entrado en deslizamiento o que la resultante dinámica está bien definida.
  - id: f_r
    symbol: f_r
    nombre:
      es: fuerza de rozamiento real
      en: actual friction force
    descripcion:
      es: Fuerza tangencial de interacción entre superficies que se opone al deslizamiento relativo.
      en: Tangential interaction force between surfaces that opposes relative sliding.
    unidad_si: N
    dimension: MLT^-2
    is_vector: false
    components: null
    category: derived
    physical_role: resistive_force
    used_in: [friccion_estatica_reposo, friccion_cinetica]
    common_mistake:
      es: Usar mu_c*N cuando el sistema todavía está en reposo.
      en: Using mu_c*N while the system is still at rest.
    typical_range:
      es: Desde 0 hasta f_emax (en reposo) o igual a mu_c*N (en movimiento).
      en: From 0 to f_emax (at rest) or equal to mu_c*N (in motion).
    sign_behavior:
      has_sign: false
      meaning:
        es: Se reporta como módulo de la fuerza de oposición.
        en: Reported as the magnitude of the opposing force.
    zero_behavior:
      allowed: true
      meaning:
        es: Fricción nula implica ausencia de empuje o superficies ideales sin rozamiento.
        en: Zero friction implies absence of drive or ideal frictionless surfaces.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: f_r >= 0
    interpretation_role:
      primary_for: [a]
      secondary_for: [f_emax]
    graph_binding:
      channels: []
    pedagogical_notes:
      es: Su valor "salta" de régimen estático a cinético al cruzar el umbral si mu_e es distinto de mu_c.
      en: Its value "jumps" from static to kinetic regime when crossing the threshold if mu_e is different from mu_c.

  - id: v
    symbol: v
    nombre:
      es: velocidad
      en: velocity
    descripcion:
      es: Rapidez con la que el bloque se desplaza respecto a la superficie de contacto.
      en: Speed at which the block moves relative to the contact surface.
    unidad_si: m/s
    dimension: LT^-1
    is_vector: false
    components: null
    category: state
    physical_role: motion_measure
    used_in: [modelos.md]
    common_mistake:
      es: Olvidar que el rozamiento seco se idealiza como independiente de la velocidad en este modelo básico.
      en: Forgetting that dry friction is idealized as independent of speed in this basic model.
    typical_range:
      es: De 0 m/s a 10 m/s en el dominio de validez del leaf.
      en: From 0 m/s to 10 m/s within the leaf's validity domain.
    sign_behavior:
      has_sign: false
      meaning:
        es: Se maneja como módulo de la velocidad (rapidez).
        en: It is handled as the magnitude of velocity (speed).
    zero_behavior:
      allowed: true
      meaning:
        es: Velocidad nula corresponde al régimen estático o al reposo instantáneo.
        en: Zero velocity corresponds to the static regime or instantaneous rest.
    value_nature:
      kind: scalar
      nonnegative_only: true
      expected_interval: v >= 0
    interpretation_role:
      primary_for: [a]
      secondary_for: [f_r]
    graph_binding:
      channels: []
    pedagogical_notes:
      es: Aunque no entra en las fórmulas dinámicas principales, su valor delimita el dominio de validez del modelo.
      en: Although it does not enter the main dynamic formulas, its value delimits the model's validity domain.
`;export{e as default};
