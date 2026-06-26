const n=`- id: L
  symbol: "L"
  nombre:
    es: inductancia propia
    en: self-inductance
  descripcion:
    es: Proporcionalidad entre flujo enlazado y corriente en una bobina lineal.
    en: Proportionality between flux linkage and current in a linear coil.
  unidad_si: H
  dimension: "[M L^2 T^-2 I^-2]"
  is_vector: false
  components: []
  category: derived
  physical_role: core_physical_quantity
  used_in: [flujo_enlazado, fem_autoinducida, energia_magnetica]
  common_mistake: Creer que L cambia automaticamente cuando cambia la corriente en una bobina ideal.
  typical_range: "1e-6 H a 10 H en bobinas tecnicas usuales"
  sign_behavior:
    has_sign: false
    meaning:
      es: En el modelo pasivo lineal se toma positiva.
      en: In the passive linear model it is positive.
  zero_behavior:
    allowed: true
    meaning:
      es: Valor nulo idealiza ausencia de flujo enlazado propio.
      en: A zero value idealizes absence of self-linked flux.
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[0, +inf)"
  interpretation_role:
    primary_for: [oposicion_a_cambios, almacenamiento_magnetico]
    secondary_for: [diseno_de_bobinas]
  graph_binding:
    channels: [slope, parameter_control]
  pedagogical_notes:
    es: "L mide la inercia electromagnetica de la bobina frente a cambios de corriente."
    en: "L measures the electromagnetic inertia of the coil against current changes."
- id: I
  symbol: "I"
  nombre:
    es: corriente de la bobina
    en: coil current
  descripcion:
    es: Corriente que crea el campo magnetico propio de la bobina.
    en: Current creating the coil own magnetic field.
  unidad_si: A
  dimension: "[I]"
  is_vector: false
  components: []
  category: fundamental
  physical_role: core_physical_quantity
  used_in: [flujo_enlazado, energia_magnetica]
  common_mistake: Confundir corriente grande con fem autoinducida grande aunque no cambie.
  typical_range: "1e-3 A a 100 A en circuitos y bobinas de laboratorio"
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo depende del sentido de referencia elegido para la bobina.
      en: The sign depends on the reference direction chosen for the coil.
  zero_behavior:
    allowed: true
    meaning:
      es: Corriente nula implica ausencia de flujo propio en el modelo lineal sin remanencia.
      en: Zero current implies no self-flux in the linear model without remanence.
  value_nature:
    kind: scalar_signed
    nonnegative_only: false
    expected_interval: "any finite value"
  interpretation_role:
    primary_for: [estado_magnetico]
    secondary_for: [energia]
  graph_binding:
    channels: [x_axis]
  pedagogical_notes:
    es: "La autoinduccion no se activa por I constante, sino por cambios de I."
    en: "Self-induction is not activated by constant I, but by changes in I."
- id: lambda_B
  symbol: "\\\\lambda_B"
  nombre:
    es: flujo enlazado
    en: flux linkage
  descripcion:
    es: Suma efectiva del flujo magnetico enlazado por las espiras de la bobina.
    en: Effective sum of magnetic flux linked by the coil turns.
  unidad_si: Wb
  dimension: "[M L^2 T^-2 I^-1]"
  is_vector: false
  components: []
  category: derived
  physical_role: core_physical_quantity
  used_in: [definicion_inductancia, ley_de_faraday]
  common_mistake: Usar el flujo de una sola espira cuando la bobina tiene muchas vueltas.
  typical_range: "1e-8 Wb a 1 Wb segun bobina y corriente"
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo depende del sentido de la normal y del sentido de corriente elegido.
      en: The sign depends on the chosen normal and current direction.
  zero_behavior:
    allowed: true
    meaning:
      es: Puede anularse si no hay corriente o si el flujo neto enlazado se cancela.
      en: It may vanish if there is no current or if net linked flux cancels.
  value_nature:
    kind: scalar_signed
    nonnegative_only: false
    expected_interval: "any"
  interpretation_role:
    primary_for: [acoplamiento_magnetico]
    secondary_for: [fem_inducida]
  graph_binding:
    channels: [y_axis]
  pedagogical_notes:
    es: "El flujo enlazado es la magnitud que convierte una bobina real en un elemento inductivo."
    en: "Flux linkage is the quantity that turns a real coil into an inductive element."
- id: epsilon_L
  symbol: "\\\\varepsilon_L"
  nombre:
    es: fem autoinducida
    en: self-induced emf
  descripcion:
    es: Diferencia de potencial inducida por el cambio de corriente propio.
    en: Potential difference induced by the coil own current change.
  unidad_si: V
  dimension: "[M L^2 T^-3 I^-1]"
  is_vector: false
  components: []
  category: derived
  physical_role: core_physical_quantity
  used_in: [respuesta_transitoria, ley_de_lenz]
  common_mistake: Omitir el signo de oposicion y tratarla como una fuente que ayuda siempre al cambio.
  typical_range: "1e-3 V a 1e4 V en transitorios segun L y rapidez de cambio"
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo representa oposicion al cambio de corriente segun Lenz.
      en: The sign represents opposition to current change according to Lenz.
  zero_behavior:
    allowed: true
    meaning:
      es: Es nula si la corriente no cambia en el modelo ideal.
      en: It is zero if current does not change in the ideal model.
  value_nature:
    kind: scalar_signed
    nonnegative_only: false
    expected_interval: "any"
  interpretation_role:
    primary_for: [oposicion_transitoria]
    secondary_for: [seguridad_en_conmutacion]
  graph_binding:
    channels: [y_axis, warning_color]
  pedagogical_notes:
    es: "La fem autoinducida aparece en cambios rapidos, incluso si la corriente instantanea no es grande."
    en: "Self-induced emf appears during fast changes, even if instantaneous current is not large."
- id: DeltaI
  symbol: "\\\\Delta I"
  nombre:
    es: cambio de corriente
    en: current change
  descripcion:
    es: Diferencia entre corriente final e inicial durante un intervalo.
    en: Difference between final and initial current during an interval.
  unidad_si: A
  dimension: "[I]"
  is_vector: false
  components: []
  category: derived
  physical_role: core_physical_quantity
  used_in: [fem_autoinducida]
  common_mistake: Usar corriente final en lugar de cambio de corriente.
  typical_range: "-100 A a 100 A en transitorios introductorios"
  sign_behavior:
    has_sign: true
    meaning:
      es: Signo positivo indica aumento respecto al sentido de referencia.
      en: Positive sign indicates increase relative to the reference direction.
  zero_behavior:
    allowed: true
    meaning:
      es: Cambio nulo implica fem autoinducida nula.
      en: Zero change implies zero self-induced emf.
  value_nature:
    kind: scalar_signed
    nonnegative_only: false
    expected_interval: "any"
  interpretation_role:
    primary_for: [direccion_del_cambio]
    secondary_for: [diagnostico_de_lenz]
  graph_binding:
    channels: [delta_marker]
  pedagogical_notes:
    es: "El signo de DeltaI debe conservarse para interpretar la oposicion de la bobina."
    en: "The sign of DeltaI must be preserved to interpret the coil opposition."
- id: Deltat
  symbol: "\\\\Delta t"
  nombre:
    es: intervalo de tiempo
    en: time interval
  descripcion:
    es: Duracion durante la cual ocurre el cambio de corriente.
    en: Duration over which the current change occurs.
  unidad_si: s
  dimension: "[T]"
  is_vector: false
  components: []
  category: parameter
  physical_role: core_physical_quantity
  used_in: [rapidez_de_cambio]
  common_mistake: Olvidar convertir milisegundos o microsegundos a segundos.
  typical_range: "1e-9 s a 10 s en transitorios electricos"
  sign_behavior:
    has_sign: false
    meaning:
      es: Se usa como duracion positiva.
      en: It is used as a positive duration.
  zero_behavior:
    allowed: false
    meaning:
      es: Intervalo nulo haria indefinida la rapidez media de cambio.
      en: Zero interval would make the average rate of change undefined.
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for: [rapidez_de_cambio]
    secondary_for: [riesgo_de_sobretension]
  graph_binding:
    channels: [time_scale]
  pedagogical_notes:
    es: "Reducir Deltat aumenta la fem autoinducida para el mismo cambio de corriente."
    en: "Reducing Deltat increases self-induced emf for the same current change."
- id: U_B
  symbol: "U_B"
  nombre:
    es: energia magnetica almacenada
    en: stored magnetic energy
  descripcion:
    es: Energia almacenada en el campo magnetico asociado a la corriente de la bobina.
    en: Energy stored in the magnetic field associated with the coil current.
  unidad_si: J
  dimension: "[M L^2 T^-2]"
  is_vector: false
  components: []
  category: derived
  physical_role: core_physical_quantity
  used_in: [almacenamiento, descarga_inductiva]
  common_mistake: Pensar que la energia desaparece instantaneamente al abrir el circuito.
  typical_range: "1e-9 J a 1e5 J segun bobina y corriente"
  sign_behavior:
    has_sign: false
    meaning:
      es: Es energia almacenada no negativa.
      en: It is nonnegative stored energy.
  zero_behavior:
    allowed: true
    meaning:
      es: Energia nula si no hay corriente o si la inductancia efectiva es nula.
      en: Zero energy if there is no current or effective inductance is zero.
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[0, +inf)"
  interpretation_role:
    primary_for: [almacenamiento_magnetico]
    secondary_for: [riesgo_de_apertura]
  graph_binding:
    channels: [energy_area]
  pedagogical_notes:
    es: "U_B explica por que abrir una bobina con corriente puede producir chispas o sobretensiones."
    en: "U_B explains why opening a current-carrying coil can produce sparks or overvoltage."
`;export{n as default};
