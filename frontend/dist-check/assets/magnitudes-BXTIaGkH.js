const n=`version: 1
magnitudes:
- id: tau
  symbol: \\tau
  nombre:
    es: constante de tiempo
    en: time constant
  descripcion:
    es: Escala temporal caracteristica del transitorio en un circuito con resistencia y capacitor.
    en: Characteristic time scale of the transient response in a resistor-capacitor circuit.
  unidad_si: s
  dimension: T
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - circuitos-rc
  common_mistake: Interpretar tau como tiempo de carga completa en lugar de escala de aproximacion exponencial.
  typical_range: "Desde microsegundos en electronica rapida hasta segundos en temporizacion basica."
  sign_behavior:
    has_sign: false
    meaning:
      es: Es una constante positiva definida por producto de resistencia y capacitancia.
      en: It is a positive constant defined by the product of resistance and capacitance.
  zero_behavior:
    allowed: false
    meaning:
      es: Si fuera nula no existiria almacenamiento temporal significativo en el modelo RC.
      en: If it were zero, meaningful temporal storage would not exist in the RC model.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "(0, inf)"
  interpretation_role:
    primary_for:
    - circuitos-rc
    secondary_for: []
  graph_binding:
    channels:
    - escala_horizontal_t
  pedagogical_notes: A un tau la respuesta de carga alcanza alrededor de 63 por ciento del salto total.

- id: R
  symbol: R
  nombre:
    es: resistencia
    en: resistance
  descripcion:
    es: Oposicion al paso de corriente que fija junto con el capacitor la rapidez del transitorio.
    en: Opposition to current flow that, with capacitance, sets transient response speed.
  unidad_si: ohm
  dimension: M L^2 T^-3 I^-2
  is_vector: false
  components: null
  category: parameter
  physical_role: physical_quantity
  used_in:
  - circuitos-rc
  common_mistake: Olvidar convertir kiloohmios a ohmios al calcular el producto temporal.
  typical_range: "De decenas de ohmios a megaohmios segun aplicacion."
  sign_behavior:
    has_sign: false
    meaning:
      es: En el modelo lineal pasivo toma valores positivos.
      en: In the passive linear model it takes positive values.
  zero_behavior:
    allowed: false
    meaning:
      es: Valor nulo elimina la dinamica RC y produce caso no modelado por el transitorio clasico.
      en: Zero value removes RC dynamics and yields a case not represented by the standard transient model.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "(0, inf)"
  interpretation_role:
    primary_for:
    - circuitos-rc
    secondary_for: []
  graph_binding:
    channels:
    - pendiente_inicial_corriente
  pedagogical_notes: Resistencia alta implica transicion mas lenta cuando la capacitancia se mantiene fija.

- id: C
  symbol: C
  nombre:
    es: capacitancia
    en: capacitance
  descripcion:
    es: Capacidad de almacenar carga electrica por unidad de diferencia de potencial.
    en: Ability to store electric charge per unit potential difference.
  unidad_si: F
  dimension: M^-1 L^-2 T^4 I^2
  is_vector: false
  components: null
  category: parameter
  physical_role: physical_quantity
  used_in:
  - circuitos-rc
  common_mistake: Tratar microfaradios como faradios sin conversion decimal correcta.
  typical_range: "De nanofaradios a milifaradios en circuitos analogicos basicos."
  sign_behavior:
    has_sign: false
    meaning:
      es: En componentes pasivos ideales es positiva.
      en: In ideal passive components it is positive.
  zero_behavior:
    allowed: false
    meaning:
      es: Sin capacitancia no hay almacenamiento temporal y desaparece el efecto de memoria.
      en: Without capacitance there is no temporal storage and memory effect disappears.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "(0, inf)"
  interpretation_role:
    primary_for:
    - circuitos-rc
    secondary_for: []
  graph_binding:
    channels:
    - curvatura_transitorio
  pedagogical_notes: Mayor capacitancia suele suavizar cambios rapidos de tension en la rama del capacitor.

- id: Vc
  symbol: V_c
  nombre:
    es: tension del capacitor
    en: capacitor voltage
  descripcion:
    es: Diferencia de potencial en bornes del capacitor durante el proceso temporal.
    en: Potential difference across the capacitor terminals during the transient process.
  unidad_si: V
  dimension: M L^2 T^-3 I^-1
  is_vector: false
  components: null
  category: state
  physical_role: physical_quantity
  used_in:
  - circuitos-rc
  common_mistake: Confundir valor instantaneo con valor final y usar limites temporales incorrectos.
  typical_range: "Entre cero y la tension de excitacion en configuraciones pasivas simples."
  sign_behavior:
    has_sign: true
    meaning:
      es: Depende de la orientacion de referencia y de la excitacion aplicada.
      en: Depends on the reference polarity and applied excitation.
  zero_behavior:
    allowed: true
    meaning:
      es: Puede iniciar en cero durante carga desde capacitor descargado.
      en: It can start at zero during charging from an uncharged capacitor.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: "(-inf, inf)"
  interpretation_role:
    primary_for:
    - circuitos-rc
    secondary_for: []
  graph_binding:
    channels:
    - eje_vertical_vc_t
  pedagogical_notes: Es la magnitud central para leer convergencia y rapidez de respuesta.

- id: Vf
  symbol: V_f
  nombre:
    es: tension final de carga
    en: final charging voltage
  descripcion:
    es: Valor de referencia al que tiende la tension del capacitor en regimen estacionario de carga.
    en: Reference value approached by capacitor voltage at charging steady state.
  unidad_si: V
  dimension: M L^2 T^-3 I^-1
  is_vector: false
  components: null
  category: parameter
  physical_role: physical_quantity
  used_in:
  - circuitos-rc
  common_mistake: Asumir que siempre coincide con la fuente sin considerar divisores o topologias reales.
  typical_range: "Determinada por la fuente y la topologia de excitacion."
  sign_behavior:
    has_sign: true
    meaning:
      es: Puede ser positiva o negativa segun orientacion de la excitacion.
      en: It may be positive or negative depending on excitation orientation.
  zero_behavior:
    allowed: true
    meaning:
      es: Valor nulo define caso de descarga hacia referencia de cero voltios.
      en: Zero value defines discharge toward zero-voltage reference.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: "(-inf, inf)"
  interpretation_role:
    primary_for: []
    secondary_for:
    - circuitos-rc
  graph_binding:
    channels:
    - asintota_superior_vc_t
  pedagogical_notes: Actua como limite asintotico de la curva de carga.

- id: V0
  symbol: V_0
  nombre:
    es: tension inicial
    en: initial voltage
  descripcion:
    es: Condicion inicial de tension del capacitor al inicio del intervalo estudiado.
    en: Initial capacitor voltage condition at the start of the studied interval.
  unidad_si: V
  dimension: M L^2 T^-3 I^-1
  is_vector: false
  components: null
  category: parameter
  physical_role: physical_quantity
  used_in:
  - circuitos-rc
  common_mistake: Ignorar su valor y aplicar ecuacion de carga cuando el proceso real es de descarga.
  typical_range: "Entre cero y el valor maximo previo almacenado en el capacitor."
  sign_behavior:
    has_sign: true
    meaning:
      es: Hereda la polaridad de la condicion inicial del estado del capacitor.
      en: It inherits polarity from the capacitor initial state.
  zero_behavior:
    allowed: true
    meaning:
      es: Valor nulo describe arranque desde capacitor descargado.
      en: Zero value describes startup from uncharged capacitor.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: "(-inf, inf)"
  interpretation_role:
    primary_for: []
    secondary_for:
    - circuitos-rc
  graph_binding:
    channels:
    - ordenada_inicial_vc_t
  pedagogical_notes: Fija el punto de partida para comparar teoria y medicion.

- id: I
  symbol: I
  nombre:
    es: corriente transitoria
    en: transient current
  descripcion:
    es: Corriente que circula durante el transitorio y decae conforme el sistema se aproxima al equilibrio.
    en: Current flowing during transient response that decays as the system approaches equilibrium.
  unidad_si: A
  dimension: I
  is_vector: false
  components: null
  category: state
  physical_role: physical_quantity
  used_in:
  - circuitos-rc
  common_mistake: Considerarla constante durante todo el proceso de carga.
  typical_range: "Desde miliamperios hasta amperios segun fuente y resistencia equivalente."
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo depende de la orientacion elegida para la corriente de rama.
      en: Its sign depends on the chosen branch current orientation.
  zero_behavior:
    allowed: true
    meaning:
      es: En estado estacionario ideal de carga el valor tiende a cero.
      en: In ideal charging steady state, it tends to zero.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: "(-inf, inf)"
  interpretation_role:
    primary_for:
    - circuitos-rc
    secondary_for: []
  graph_binding:
    channels:
    - eje_vertical_i_t
  pedagogical_notes: Su valor inicial domina el estres electrico de arranque en muchos disenos.

- id: t
  symbol: t
  nombre:
    es: tiempo
    en: time
  descripcion:
    es: Variable independiente que recorre la evolucion del transitorio.
    en: Independent variable that spans transient evolution.
  unidad_si: s
  dimension: T
  is_vector: false
  components: null
  category: fundamental
  physical_role: physical_quantity
  used_in:
  - circuitos-rc
  common_mistake: Mezclar milisegundos y segundos sin unificar unidades antes de evaluar exponenciales.
  typical_range: "Desde microsegundos a segundos segun el producto temporal."
  sign_behavior:
    has_sign: false
    meaning:
      es: En este modelo se toma no negativo desde el instante inicial elegido.
      en: In this model it is taken non-negative from chosen initial instant.
  zero_behavior:
    allowed: true
    meaning:
      es: Marca el inicio del experimento o de la excitacion transitoria.
      en: It marks experiment start or transient excitation onset.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "[0, inf)"
  interpretation_role:
    primary_for:
    - circuitos-rc
    secondary_for: []
  graph_binding:
    channels:
    - eje_horizontal
  pedagogical_notes: La comparacion entre t y tau decide si el sistema esta en inicio, transitorio medio o casi estacionario.
`;export{n as default};
