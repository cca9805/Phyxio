const n=`version: 1
magnitudes:
- id: momento_lineal_individual
  symbol: \\vec p_i
  nombre:
    es: momento lineal individual
    en: individual linear momentum
  descripcion:
    es: Cantidad de movimiento asociada a una única partícula o cuerpo del sistema.
    en: Quantity of motion associated with a single particle or body in the system.
  unidad_si: kg*m/s
  dimension: M L T^-1
  is_vector: true
  components:
  - momento_lineal_individual_x
  - momento_lineal_individual_y
  category: derived
  physical_role: physical_quantity
  used_in:
  - enunciado-y-condiciones-de-aplicacion
  common_mistake: "Confundir con la energía cinética o ignorar su carácter vectorial al sumar."
  typical_range: "De 0.1 a 10^5 kg·m/s en contextos macroscópicos habituales."
  sign_behavior:
    has_sign: true
    meaning:
      es: "El signo indica el sentido del movimiento respecto al eje de referencia positivo."
      en: "The sign indicates the direction of motion relative to the positive reference axis."
  zero_behavior:
    allowed: true
    meaning:
      es: "La partícula está en reposo respecto al observador inercial."
      en: "The particle is at rest relative to the inertial observer."
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: "[-inf, +inf]"
  interpretation_role:
    primary_for:
    - enunciado-y-condiciones-de-aplicacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: "Debe enfatizarse que aunque el momento total se conserve, los momentos individuales suelen cambiar drásticamente en un choque."
- id: momento_lineal_total
  symbol: \\vec P
  nombre:
    es: momento lineal total
    en: total linear momentum
  descripcion:
    es: Suma vectorial de las cantidades de movimiento de todos los cuerpos que integran el sistema.
    en: Vector sum of the quantities of motion of all bodies making up the system.
  unidad_si: kg*m/s
  dimension: M L T^-1
  is_vector: true
  components:
  - momento_lineal_total_x
  - momento_lineal_total_y
  category: derived
  physical_role: physical_quantity
  used_in:
  - enunciado-y-condiciones-de-aplicacion
  common_mistake: "Sumar las rapideces escalares en lugar de realizar una suma de vectores."
  typical_range: "Variable según el sistema (desde partículas hasta astros)."
  sign_behavior:
    has_sign: true
    meaning:
      es: "Representa la dirección del flujo de movimiento global del sistema."
      en: "Represents the direction of the system's global motion flow."
  zero_behavior:
    allowed: true
    meaning:
      es: "El sistema está globalmente en reposo o sus movimientos internos se cancelan mutuamente."
      en: "The system is globally at rest or its internal motions cancel each other out."
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: "[-inf, +inf]"
  interpretation_role:
    primary_for:
    - enunciado-y-condiciones-de-aplicacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: "Es la magnitud estrella del leaf. Su invariancia es el indicador definitivo de que el sistema está aislado."
- id: masa_individual
  symbol: m_i
  nombre:
    es: masa individual
    en: individual mass
  descripcion:
    es: Cantidad de materia de un cuerpo específico dentro del sistema.
    en: Amount of matter of a specific body within the system.
  unidad_si: kg
  dimension: M
  is_vector: false
  components: null
  category: fundamental
  physical_role: physical_quantity
  used_in:
  - enunciado-y-condiciones-de-aplicacion
  common_mistake: "Tratar la masa como variable en procesos donde no hay pérdida de materia."
  typical_range: "0.1 a 5000 kg en ejemplos típicos."
  sign_behavior:
    has_sign: false
    meaning:
      es: "Magnitud siempre positiva."
      en: "Always positive quantity."
  zero_behavior:
    allowed: false
    meaning:
      es: "Un cuerpo sin masa no tiene sentido en este modelo de partículas."
      en: "A massless body has no meaning in this particle model."
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "[0, +inf]"
  interpretation_role:
    primary_for:
    - enunciado-y-condiciones-de-aplicacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: "Actúa como la inercia que modula cuánto cambia la velocidad ante un intercambio de momento dado."
- id: velocidad_individual
  symbol: \\vec v_i
  nombre:
    es: velocidad individual
    en: individual velocity
  descripcion:
    es: Tasa de cambio de la posición de un cuerpo respecto al tiempo.
    en: Rate of change of a body's position with respect to time.
  unidad_si: m/s
  dimension: L T^-1
  is_vector: true
  components:
  - velocidad_individual_x
  - velocidad_individual_y
  category: derived
  physical_role: physical_quantity
  used_in:
  - enunciado-y-condiciones-de-aplicacion
  common_mistake: "No asignar correctamente el signo según el sistema de referencia."
  typical_range: "0 a 1000 m/s."
  sign_behavior:
    has_sign: true
    meaning:
      es: "Indica el sentido del desplazamiento en el eje coordenado."
      en: "Indicates the direction of displacement on the coordinate axis."
  zero_behavior:
    allowed: true
    meaning:
      es: "El cuerpo está estacionario respecto al observador."
      en: "The body is stationary relative to the observer."
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: "[-c, +c]"
  interpretation_role:
    primary_for:
    - enunciado-y-condiciones-de-aplicacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: "Es vital distinguir entre la velocidad antes y después de la interacción."
- id: masa_total
  symbol: M
  nombre:
    es: masa total
    en: total mass
  descripcion:
    es: Suma de todas las masas individuales que componen el sistema.
    en: Sum of all individual masses making up the system.
  unidad_si: kg
  dimension: M
  is_vector: false
  components: null
  category: fundamental
  physical_role: physical_quantity
  used_in:
  - enunciado-y-condiciones-de-aplicacion
  common_mistake: "Olvidar sumar todas las partes del sistema en colisiones inelásticas."
  typical_range: "Suma de las m_i."
  sign_behavior:
    has_sign: false
    meaning:
      es: "Siempre positiva."
      en: "Always positive."
  zero_behavior:
    allowed: false
    meaning:
      es: "Un sistema sin masa no es objeto de estudio de este leaf."
      en: "A massless system is not the object of study of this leaf."
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "[0, +inf]"
  interpretation_role:
    primary_for:
    - enunciado-y-condiciones-de-aplicacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: "Permite tratar el sistema completo como una única partícula equivalente en el centro de masas."
- id: velocidad_centro_de_masas
  symbol: \\vec v_{cm}
  nombre:
    es: velocidad del centro de masas
    en: center-of-mass velocity
  descripcion:
    es: Velocidad a la que se desplaza el punto geométrico que representa el promedio de masa del sistema.
    en: Velocity at which the geometric point representing the system's mass average moves.
  unidad_si: m/s
  dimension: L T^-1
  is_vector: true
  components:
  - velocidad_centro_de_masas_x
  - velocidad_centro_de_masas_y
  category: derived
  physical_role: physical_quantity
  used_in:
  - enunciado-y-condiciones-de-aplicacion
  common_mistake: "Pensar que cambia durante un choque en un sistema aislado."
  typical_range: "0 a 500 m/s."
  sign_behavior:
    has_sign: true
    meaning:
      es: "Sentido del movimiento del punto de equilibrio de masas."
      en: "Direction of motion of the mass balance point."
  zero_behavior:
    allowed: true
    meaning:
      es: "El sistema está globalmente en reposo, independientemente de sus movimientos internos."
      en: "The system is globally at rest, regardless of its internal motions."
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: "[-inf, +inf]"
  interpretation_role:
    primary_for:
    - enunciado-y-condiciones-de-aplicacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: "Si el sistema está aislado, esta velocidad debe ser estrictamente constante."
- id: fuerza_externa_neta
  symbol: \\vec F_{ext}
  nombre:
    es: fuerza externa neta
    en: net external force
  descripcion:
    es: Resultante de todas las fuerzas que actúan sobre el sistema desde el exterior.
    en: Resultant of all forces acting on the system from the outside.
  unidad_si: N
  dimension: L M T^{-2}
  is_vector: true
  components:
  - fuerza_externa_neta_x
  - fuerza_externa_neta_y
  category: derived
  physical_role: physical_quantity
  used_in:
  - enunciado-y-condiciones-de-aplicacion
  common_mistake: "Incluir fuerzas de contacto internas (como la de choque) en esta magnitud."
  typical_range: "0 a 10^6 N."
  sign_behavior:
    has_sign: true
    meaning:
      es: "Dirección en la que el entorno intenta cambiar el momento del sistema."
      en: "Direction in which the environment attempts to change the system's momentum."
  zero_behavior:
    allowed: true
    meaning:
      es: "Condición de aislamiento: el momento lineal se conserva."
      en: "Isolation condition: linear momentum is conserved."
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: "[-inf, +inf]"
  interpretation_role:
    primary_for:
    - enunciado-y-condiciones-de-aplicacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: "Es el agente interruptor de la conservación. Si no es cero, el leaf de conservación ya no aplica estrictamente."
- id: tiempo
  symbol: \\Delta t
  nombre:
    es: intervalo temporal
    en: time interval
  descripcion:
    es: Duración del proceso de interacción o del intervalo de estudio.
    en: Duration of the interaction process or the study interval.
  unidad_si: s
  dimension: T
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - enunciado-y-condiciones-de-aplicacion
  common_mistake: "Confundir el instante de tiempo con la duración del intervalo."
  typical_range: "10^-6 a 100 s."
  sign_behavior:
    has_sign: false
    meaning:
      es: "El tiempo siempre fluye hacia adelante."
      en: "Time always flows forward."
  zero_behavior:
    allowed: true
    meaning:
      es: "Intervalo instantáneo, útil para la aproximación impulsiva."
      en: "Instantaneous interval, useful for the impulsive approximation."
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "[0, +inf]"
  interpretation_role:
    primary_for:
    - enunciado-y-condiciones-de-aplicacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: "En colisiones, se asume tan pequeño que el impulso externo no alcanza a cambiar el momento significativamente."
- id: variacion_momento_lineal
  symbol: \\Delta \\vec P
  nombre:
    es: variacion del momento total
    en: total momentum change
  descripcion:
    es: Diferencia vectorial entre el momento lineal final e inicial del sistema.
    en: Vector difference between the final and initial linear momentum of the system.
  unidad_si: kg*m/s
  dimension: M L T^-1
  is_vector: true
  components:
  - variacion_momento_lineal_x
  - variacion_momento_lineal_y
  category: derived
  physical_role: physical_quantity
  used_in:
  - enunciado-y-condiciones-de-aplicacion
  common_mistake: "Olvidar que es una resta de vectores, no de magnitudes escalares."
  typical_range: "0 (en sistemas aislados)."
  sign_behavior:
    has_sign: true
    meaning:
      es: "Dirección del impulso neto recibido."
      en: "Direction of the net impulse received."
  zero_behavior:
    allowed: true
    meaning:
      es: "Confirmación de la conservación del momento."
      en: "Confirmation of momentum conservation."
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: "[-inf, +inf]"
  interpretation_role:
    primary_for:
    - enunciado-y-condiciones-de-aplicacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: "Si esta magnitud es nula, el balance P_i = P_f es matemáticamente exacto."
- id: m1
  symbol: m_1
  nombre:
    es: masa del primer cuerpo
    en: mass of the first body
  descripcion:
    es: Masa de la primera partícula involucrada en el balance.
    en: Mass of the first particle involved in the balance.
  unidad_si: kg
  dimension: M
  is_vector: false
  components: null
  category: fundamental
  physical_role: physical_quantity
  used_in: [ enunciado-y-condiciones-de-aplicacion ]
  common_mistake: "Confundir m1 con la masa total del sistema en colisiones inelásticas donde los cuerpos se acoplan."
  typical_range: "0.1 a 5000 kg en ejemplos habituales de examen."
  sign_behavior:
    has_sign: false
    meaning:
      es: "La masa es siempre positiva."
      en: "Mass is always positive."
  zero_behavior:
    allowed: false
    meaning:
      es: "Una masa nula carece de sentido en mecánica clásica."
      en: "A zero mass has no meaning in classical mechanics."
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "[0, +inf]"
  interpretation_role:
    primary_for:
    - enunciado-y-condiciones-de-aplicacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: "Su valor relativo respecto a m2 determina qué cuerpo cambia más su velocidad tras la interacción."
- id: m2
  symbol: m_2
  nombre:
    es: masa del segundo cuerpo
    en: mass of the second body
  descripcion:
    es: Masa de la segunda partícula involucrada en el balance.
    en: Mass of the second particle involved in the balance.
  unidad_si: kg
  dimension: M
  is_vector: false
  components: null
  category: fundamental
  physical_role: physical_quantity
  used_in: [ enunciado-y-condiciones-de-aplicacion ]
  common_mistake: "Olvidar incluir m2 en la masa total (m1+m2) al calcular la velocidad final en colisiones inelásticas."
  typical_range: "0.1 a 5000 kg."
  sign_behavior:
    has_sign: false
    meaning:
      es: "La masa siempre es positiva."
      en: "Mass is always positive."
  zero_behavior:
    allowed: false
    meaning:
      es: "Un segundo cuerpo sin masa haría que general_1d_balance se reduzca al caso trivial."
      en: "A second body without mass reduces general_1d_balance to the trivial case."
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "[0, +inf]"
  interpretation_role:
    primary_for:
    - enunciado-y-condiciones-de-aplicacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: "La razón m1/m2 controla la distribución de velocidades tras el proceso; una razón grande indica que el cuerpo más pesado cambia poco su velocidad."
- id: v1i
  symbol: v_{1i}
  nombre:
    es: velocidad inicial del primer cuerpo
    en: initial velocity of the first body
  descripcion:
    es: Velocidad de la masa 1 justo antes del inicio de la interacción.
    en: Velocity of mass 1 just before the start of the interaction.
  unidad_si: m/s
  dimension: L T^-1
  is_vector: true
  components: [ v1i_x, v1i_y ]
  category: derived
  physical_role: physical_quantity
  used_in: [ enunciado-y-condiciones-de-aplicacion ]
  common_mistake: "No asignar el signo correcto al vector velocidad según el eje de referencia positivo."
  typical_range: "0 a 100 m/s en problemas de examen típicos."
  sign_behavior:
    has_sign: true
    meaning:
      es: "Positivo si el movimiento sigue el eje de referencia; negativo si es en sentido contrario."
      en: "Positive if motion follows the reference axis; negative if opposite."
  zero_behavior:
    allowed: true
    meaning:
      es: "El cuerpo 1 está inicialmente en reposo respecto al observador."
      en: "Body 1 is initially at rest relative to the observer."
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: "[-inf, +inf]"
  interpretation_role:
    primary_for:
    - enunciado-y-condiciones-de-aplicacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: "En la aproximación 1D, el signo distingue un choque frontal de uno por alcance."
- id: v2i
  symbol: v_{2i}
  nombre:
    es: velocidad inicial del segundo cuerpo
    en: initial velocity of the second body
  descripcion:
    es: Velocidad de la masa 2 justo antes del inicio de la interacción.
    en: Velocity of mass 2 just before the start of the interaction.
  unidad_si: m/s
  dimension: L T^-1
  is_vector: true
  components: [ v2i_x, v2i_y ]
  category: derived
  physical_role: physical_quantity
  used_in: [ enunciado-y-condiciones-de-aplicacion ]
  common_mistake: "Asumir que v2i es siempre cero sin verificarlo en el enunciado del problema."
  typical_range: "0 a 100 m/s."
  sign_behavior:
    has_sign: true
    meaning:
      es: "Positivo o negativo según el sentido del movimiento inicial del segundo cuerpo."
      en: "Positive or negative depending on the initial direction of motion of the second body."
  zero_behavior:
    allowed: true
    meaning:
      es: "El segundo cuerpo está inicialmente en reposo, caso más frecuente en problemas básicos."
      en: "The second body is initially at rest, the most common case in basic problems."
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: "[-inf, +inf]"
  interpretation_role:
    primary_for:
    - enunciado-y-condiciones-de-aplicacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: "Si v2i tiene signo opuesto a v1i, se trata de un choque frontal; si es igual o nulo, es un choque de alcance."
- id: v1f
  symbol: v_{1f}
  nombre:
    es: velocidad final del primer cuerpo
    en: final velocity of the first body
  descripcion:
    es: Velocidad de la masa 1 inmediatamente después de la interacción.
    en: Velocity of mass 1 immediately after the interaction.
  unidad_si: m/s
  dimension: L T^-1
  is_vector: true
  components: [ v1f_x, v1f_y ]
  category: derived
  physical_role: physical_quantity
  used_in: [ enunciado-y-condiciones-de-aplicacion ]
  common_mistake: "Confundir v1f con vf (velocidad final común) en colisiones inelásticas donde solo existe una velocidad final."
  typical_range: "Variable; puede ser de signo opuesto a v1i en el caso de retroceso o rebote."
  sign_behavior:
    has_sign: true
    meaning:
      es: "El signo indica si el primer cuerpo continúa en la misma dirección o rebota tras la interacción."
      en: "The sign indicates whether the first body continues in the same direction or rebounds after interaction."
  zero_behavior:
    allowed: true
    meaning:
      es: "El primer cuerpo queda en reposo tras transferir todo su momento al segundo."
      en: "The first body comes to rest after transferring all its momentum to the second."
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: "[-inf, +inf]"
  interpretation_role:
    primary_for:
    - enunciado-y-condiciones-de-aplicacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: "Es la incógnita principal en problemas de retroceso y colisiones elásticas; en la ley de retroceso su signo es siempre opuesto al de v2f."
- id: v2f
  symbol: v_{2f}
  nombre:
    es: velocidad final del segundo cuerpo
    en: final velocity of the second body
  descripcion:
    es: Velocidad de la masa 2 inmediatamente después de la interacción.
    en: Velocity of mass 2 immediately after the interaction.
  unidad_si: m/s
  dimension: L T^-1
  is_vector: true
  components: [ v2f_x, v2f_y ]
  category: derived
  physical_role: physical_quantity
  used_in: [ enunciado-y-condiciones-de-aplicacion ]
  common_mistake: "Olvidar que en una explosión desde el reposo, v2f debe tener signo opuesto a v1f para conservar el momento nulo inicial."
  typical_range: "Variable; en retrocesos puede ser mucho mayor que v2i en magnitud."
  sign_behavior:
    has_sign: true
    meaning:
      es: "Positivo si el segundo cuerpo se aleja en el sentido positivo del eje; negativo en sentido contrario."
      en: "Positive if the second body moves away in the positive axis direction; negative otherwise."
  zero_behavior:
    allowed: true
    meaning:
      es: "El segundo cuerpo queda en reposo tras absorber exactamente el impulso del primero."
      en: "The second body comes to rest after absorbing exactly the impulse from the first."
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: "[-inf, +inf]"
  interpretation_role:
    primary_for:
    - enunciado-y-condiciones-de-aplicacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: "En colisiones 1D, la relación entre v1f y v2f está completamente determinada por el balance de momento y las condiciones del tipo de colisión."
- id: vf
  symbol: v_f
  nombre:
    es: velocidad final común
    en: common final velocity
  descripcion:
    es: Velocidad única compartida por los cuerpos tras un choque perfectamente inelástico.
    en: Single velocity shared by the bodies after a perfectly inelastic collision.
  unidad_si: m/s
  dimension: L T^-1
  is_vector: true
  components: [ vf_x, vf_y ]
  category: derived
  physical_role: physical_quantity
  used_in: [ enunciado-y-condiciones-de-aplicacion ]
  common_mistake: "Aplicar la fórmula inelastic_collision cuando los cuerpos no quedan realmente acoplados, obteniendo un resultado incorrecto."
  typical_range: "Intermedio entre v1i y v2i según la proporción de masas; menor que v1i si m2 estaba en reposo."
  sign_behavior:
    has_sign: true
    meaning:
      es: "El signo indica el sentido de movimiento del conjunto unido tras el impacto."
      en: "The sign indicates the direction of motion of the coupled assembly after impact."
  zero_behavior:
    allowed: true
    meaning:
      es: "El sistema acoplado queda en reposo si los momentos iniciales se cancelan exactamente."
      en: "The coupled system comes to rest if the initial momenta exactly cancel."
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: "[-inf, +inf]"
  interpretation_role:
    primary_for:
    - enunciado-y-condiciones-de-aplicacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: "Siempre es menor en magnitud que v1i si m2 estaba en reposo y m2 > 0, lo que sirve como verificación de coherencia del resultado."
- id: Pinitial
  symbol: P_i
  nombre:
    es: momento lineal inicial total
    en: total initial linear momentum
  descripcion:
    es: Suma de momentos justo antes del intervalo de interacción.
    en: Sum of momenta just before the interaction interval.
  unidad_si: kg*m/s
  dimension: M L T^-1
  is_vector: true
  components: [ Pinitial_x, Pinitial_y ]
  category: derived
  physical_role: physical_quantity
  used_in: [ enunciado-y-condiciones-de-aplicacion ]
  common_mistake: "Calcular Pinitial como suma escalar de módulos en lugar de suma vectorial, especialmente en choques frontales."
  typical_range: "Igual al Pfinal en sistemas aislados; típicamente de 1 a 10^6 kg·m/s."
  sign_behavior:
    has_sign: true
    meaning:
      es: "El signo indica el sentido neto del movimiento global del sistema antes de la interacción."
      en: "The sign indicates the net direction of global system motion before the interaction."
  zero_behavior:
    allowed: true
    meaning:
      es: "El sistema está globalmente en reposo antes de la interacción (caso de explosión desde el reposo)."
      en: "The system is globally at rest before the interaction (explosion from rest case)."
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: "[-inf, +inf]"
  interpretation_role:
    primary_for:
    - enunciado-y-condiciones-de-aplicacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: "Su igualdad con Pfinal es el enunciado numérico exacto del principio de conservación. Si difieren, hay un error de cálculo o de modelado."
- id: Pfinal
  symbol: P_f
  nombre:
    es: momento lineal final total
    en: total final linear momentum
  descripcion:
    es: Suma de momentos inmediatamente después del intervalo de interacción.
    en: Sum of momenta immediately after the interaction interval.
  unidad_si: kg*m/s
  dimension: M L T^-1
  is_vector: true
  components: [ Pfinal_x, Pfinal_y ]
  category: derived
  physical_role: physical_quantity
  used_in: [ enunciado-y-condiciones-de-aplicacion ]
  common_mistake: "Calcular Pfinal usando solo el momento de uno de los cuerpos finales en colisiones con más de un fragmento."
  typical_range: "Igual al Pinitial en sistemas aislados."
  sign_behavior:
    has_sign: true
    meaning:
      es: "El signo del momento final es idéntico al del momento inicial en sistemas aislados."
      en: "The sign of the final momentum is identical to the initial momentum in isolated systems."
  zero_behavior:
    allowed: true
    meaning:
      es: "El sistema queda globalmente en reposo tras la interacción."
      en: "The system comes to rest globally after the interaction."
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: "[-inf, +inf]"
  interpretation_role:
    primary_for:
    - enunciado-y-condiciones-de-aplicacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: "Si Pfinal ≠ Pinitial, se violó la conservación, indicando un error de modelado (fuerza externa ignorada) o un error aritmético."
- id: Fext
  symbol: F_{ext}
  nombre:
    es: fuerza externa neta
    en: net external force
  descripcion:
    es: Resultante de fuerzas externas para el cálculo del impulso.
    en: Resultant of external forces for impulse calculation.
  unidad_si: N
  dimension: L M T^{-2}
  is_vector: true
  components: [ Fext_x, Fext_y ]
  category: derived
  physical_role: physical_quantity
  used_in: [ enunciado-y-condiciones-de-aplicacion ]
  common_mistake: "Incluir la fuerza de contacto interna entre los cuerpos del sistema (fuerza de choque) como fuerza externa; estas son internas y no afectan el momento total."
  typical_range: "0 N (condición de aislamiento) hasta 10^6 N en colisiones violentas."
  sign_behavior:
    has_sign: true
    meaning:
      es: "El signo indica la dirección en que el entorno intenta cambiar el momento del sistema."
      en: "The sign indicates the direction in which the environment attempts to change the system's momentum."
  zero_behavior:
    allowed: true
    meaning:
      es: "Fext = 0 es la condición de aislamiento que habilita la conservación del momento."
      en: "Fext = 0 is the isolation condition that enables momentum conservation."
  value_nature:
    kind: vector_projection
    nonnegative_only: false
    expected_interval: "[-inf, +inf]"
  interpretation_role:
    primary_for:
    - enunciado-y-condiciones-de-aplicacion
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes: "Esta magnitud es el agente interruptor de la conservación. Si no es cero, el balance de momentos debe incluir el término impulso F_ext·Δt. Usada en la fórmula cond como condición de aplicabilidad."
`;export{n as default};
