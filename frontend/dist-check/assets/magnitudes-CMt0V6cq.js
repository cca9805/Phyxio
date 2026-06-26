const n=`version: 1
magnitudes:
- id: m
  symbol: m
  nombre:
    es: "masa"
    en: "mass"
  descripcion:
    es: "Masa del cuerpo que colisiona con la pared."
    en: "Mass of the body colliding with the wall."
  unidad_si: "kg"
  dimension: "M"
  is_vector: false
  components: null
  category: "fundamental"
  physical_role: "physical_quantity"
  used_in: ["colision-con-pared"]
  common_mistake: "Confundir con el peso o ignorar que la masa de la pared es infinita."
  typical_range: "0.1 - 100 kg"
  sign_behavior:
    has_sign: false
    meaning: "Escalar siempre positivo."
  zero_behavior:
    allowed: false
    meaning: "No hay colisión sin masa."
  value_nature:
    kind: "scalar"
    nonnegative_only: true
  interpretation_role:
    primary_for: ["colision-con-pared"]
  graph_binding:
    channels: []
  pedagogical_notes: "Se asume constante durante el impacto."

- id: vi
  symbol: "v_i"
  nombre:
    es: "velocidad inicial"
    en: "initial velocity"
  descripcion:
    es: "Velocidad del cuerpo justo antes del impacto con la pared."
    en: "Velocity of the body right before impact with the wall."
  unidad_si: "m/s"
  dimension: "L T^-1"
  is_vector: false
  components: null
  category: "fundamental"
  physical_role: "physical_quantity"
  used_in: ["colision-con-pared"]
  common_mistake: "Usar la velocidad de lanzamiento en lugar de la velocidad de impacto."
  typical_range: "1 - 50 m/s"
  sign_behavior:
    has_sign: true
    meaning: "Negativo si se dirige hacia la pared en el eje normal."
  zero_behavior:
    allowed: true
    meaning: "No habría colisión."
  value_nature:
    kind: "scalar"
    nonnegative_only: false
  interpretation_role:
    primary_for: ["colision-con-pared"]
  graph_binding:
    channels: []
  pedagogical_notes: "Es la causa cinemática del proceso."

- id: vf
  symbol: "v_f"
  nombre:
    es: "velocidad final"
    en: "final velocity"
  descripcion:
    es: "Velocidad del cuerpo inmediatamente después del rebote."
    en: "Velocity of the body immediately after the rebound."
  unidad_si: "m/s"
  dimension: "L T^-1"
  is_vector: false
  components: null
  category: "derived"
  physical_role: "physical_quantity"
  used_in: ["colision-con-pared"]
  common_mistake: "Olvidar el signo negativo respecto a la velocidad inicial."
  typical_range: "0 - 50 m/s"
  sign_behavior:
    has_sign: true
    meaning: "Positivo si se aleja de la pared tras el rebote."
  zero_behavior:
    allowed: true
    meaning: "El cuerpo se queda pegado (e=0)."
  value_nature:
    kind: "scalar"
    nonnegative_only: false
  interpretation_role:
    primary_for: ["colision-con-pared"]
  graph_binding:
    channels: []
  pedagogical_notes: "Representa el estado cinemático de salida."

- id: e
  symbol: "e"
  nombre:
    es: "coeficiente de restitución"
    en: "coefficient of restitution"
  descripcion:
    es: "Parámetro que mide la elasticidad del choque entre el cuerpo y la pared."
    en: "Parameter measuring the elasticity of the collision between the body and the wall."
  unidad_si: "1"
  dimension: "1"
  is_vector: false
  components: null
  category: "fundamental"
  physical_role: "physical_quantity"
  used_in: ["colision-con-pared"]
  common_mistake: "Pensar que puede ser mayor que 1 en sistemas pasivos."
  typical_range: "0 - 1"
  sign_behavior:
    has_sign: false
    meaning: "Adimensional siempre positivo."
  zero_behavior:
    allowed: true
    meaning: "Choque perfectamente inelástico."
  value_nature:
    kind: "scalar"
    nonnegative_only: true
  interpretation_role:
    primary_for: ["colision-con-pared"]
  graph_binding:
    channels: []
  pedagogical_notes: "Caracteriza la disipación del contacto."

- id: vin
  symbol: "v_{in}"
  nombre:
    es: "componente normal inicial"
    en: "initial normal component"
  descripcion:
    es: "Proyección de la velocidad inicial sobre la dirección perpendicular a la pared."
    en: "Projection of the initial velocity onto the direction perpendicular to the wall."
  unidad_si: "m/s"
  dimension: "L T^-1"
  is_vector: false
  components: null
  category: "derived"
  physical_role: "physical_quantity"
  used_in: ["colision-con-pared"]
  common_mistake: "Usar el seno en lugar del coseno según la definición del ángulo."
  typical_range: "1 - 50 m/s"
  sign_behavior:
    has_sign: true
    meaning: "Dirección hacia la superficie."
  zero_behavior:
    allowed: true
    meaning: "El choque es puramente tangencial."
  value_nature:
    kind: "scalar"
    nonnegative_only: false
  interpretation_role:
    primary_for: ["colision-con-pared"]
  graph_binding:
    channels: []
  pedagogical_notes: "Es la componente que experimenta la disipación."

- id: vfn
  symbol: "v_{fn}"
  nombre:
    es: "componente normal final"
    en: "final normal component"
  descripcion:
    es: "Proyección de la velocidad final sobre la dirección perpendicular a la pared."
    en: "Projection of the final velocity onto the direction perpendicular to the wall."
  unidad_si: "m/s"
  dimension: "L T^-1"
  is_vector: false
  components: null
  category: "derived"
  physical_role: "physical_quantity"
  used_in: ["colision-con-pared"]
  common_mistake: "Ignorar la inversión de signo."
  typical_range: "0 - 50 m/s"
  sign_behavior:
    has_sign: true
    meaning: "Dirección alejándose de la superficie."
  zero_behavior:
    allowed: true
    meaning: "Rebote nulo en la normal."
  value_nature:
    kind: "scalar"
    nonnegative_only: false
  interpretation_role:
    primary_for: ["colision-con-pared"]
  graph_binding:
    channels: []
  pedagogical_notes: "Única componente afectada por e en paredes lisas."

- id: vit
  symbol: "v_{it}"
  nombre:
    es: "componente tangencial inicial"
    en: "initial tangential component"
  descripcion:
    es: "Proyección de la velocidad inicial paralela a la superficie de la pared."
    en: "Projection of the initial velocity parallel to the wall surface."
  unidad_si: "m/s"
  dimension: "L T^-1"
  is_vector: false
  components: null
  category: "derived"
  physical_role: "physical_quantity"
  used_in: ["colision-con-pared"]
  common_mistake: "Confundir con la componente normal."
  typical_range: "0 - 50 m/s"
  sign_behavior:
    has_sign: true
    meaning: "Sentido del deslizamiento inicial."
  zero_behavior:
    allowed: true
    meaning: "Choque frontal."
  value_nature:
    kind: "scalar"
    nonnegative_only: false
  interpretation_role:
    primary_for: ["colision-con-pared"]
  graph_binding:
    channels: []
  pedagogical_notes: "Se conserva en el modelo de pared lisa."

- id: vft
  symbol: "v_{ft}"
  nombre:
    es: "componente tangencial final"
    en: "final tangential component"
  descripcion:
    es: "Proyección de la velocidad final paralela a la superficie de la pared."
    en: "Projection of the final velocity parallel to the wall surface."
  unidad_si: "m/s"
  dimension: "L T^-1"
  is_vector: false
  components: null
  category: "derived"
  physical_role: "physical_quantity"
  used_in: ["colision-con-pared"]
  common_mistake: "Intentar aplicarle el coeficiente e."
  typical_range: "0 - 50 m/s"
  sign_behavior:
    has_sign: true
    meaning: "Sentido del deslizamiento tras rebote."
  zero_behavior:
    allowed: true
    meaning: "No hay deslizamiento."
  value_nature:
    kind: "scalar"
    nonnegative_only: false
  interpretation_role:
    primary_for: ["colision-con-pared"]
  graph_binding:
    channels: []
  pedagogical_notes: "Igual a vit si no hay fricción."

- id: K
  symbol: "K"
  nombre:
    es: "energía cinética"
    en: "kinetic energy"
  descripcion:
    es: "Energía asociada al movimiento del cuerpo en un instante dado."
    en: "Energy associated with the body's motion at a given instant."
  unidad_si: "J"
  dimension: "M L^2 T^-2"
  is_vector: false
  components: null
  category: "derived"
  physical_role: "physical_quantity"
  used_in: ["colision-con-pared"]
  common_mistake: "Olvidar el cuadrado de la velocidad."
  typical_range: "1 - 1000 J"
  sign_behavior:
    has_sign: false
    meaning: "Escalar siempre positivo."
  zero_behavior:
    allowed: true
    meaning: "Cuerpo en reposo."
  value_nature:
    kind: "scalar"
    nonnegative_only: true
  interpretation_role:
    primary_for: ["colision-con-pared"]
  graph_binding:
    channels: []
  pedagogical_notes: "Escala fundamental de la violencia del impacto."

- id: DeltaK
  symbol: "\\\\Delta K"
  nombre:
    es: "pérdida de energía cinética"
    en: "kinetic energy loss"
  descripcion:
    es: "Cantidad de energía mecánica disipada en forma de calor y deformación durante el impacto."
    en: "Amount of mechanical energy dissipated as heat and deformation during impact."
  unidad_si: "J"
  dimension: "M L^2 T^-2"
  is_vector: false
  components: null
  category: "derived"
  physical_role: "physical_quantity"
  used_in: ["colision-con-pared"]
  common_mistake: "Obtener un valor negativo por invertir el orden de velocidades."
  typical_range: "0 - 500 J"
  sign_behavior:
    has_sign: false
    meaning: "Cantidad disipada (positiva)."
  zero_behavior:
    allowed: true
    meaning: "Choque perfectamente elástico."
  value_nature:
    kind: "scalar"
    nonnegative_only: true
  interpretation_role:
    primary_for: ["colision-con-pared"]
  graph_binding:
    channels: []
  pedagogical_notes: "Medida de la irreversibilidad del choque."

- id: J
  symbol: "J"
  nombre:
    es: "impulso lineal"
    en: "linear impulse"
  descripcion:
    es: "Cambio total en el momento lineal experimentado por el cuerpo debido a la fuerza de la pared."
    en: "Total change in linear momentum experienced by the body due to the wall's force."
  unidad_si: "N s"
  dimension: "M L T^-1"
  is_vector: false
  components: null
  category: "derived"
  physical_role: "physical_quantity"
  used_in: ["colision-con-pared"]
  common_mistake: "Restar magnitudes de velocidad en lugar de vectores (signos)."
  typical_range: "1 - 100 N s"
  sign_behavior:
    has_sign: true
    meaning: "Sentido de la fuerza normal de la pared."
  zero_behavior:
    allowed: true
    meaning: "No hay impacto."
  value_nature:
    kind: "scalar"
    nonnegative_only: false
  interpretation_role:
    primary_for: ["colision-con-pared"]
  graph_binding:
    channels: []
  pedagogical_notes: "Equivalente al área fuerza-tiempo."

- id: h0
  symbol: "h_0"
  nombre:
    es: "altura inicial"
    en: "initial height"
  descripcion:
    es: "Altura desde la que se suelta el cuerpo antes de impactar con el suelo."
    en: "Height from which the body is released before impacting the ground."
  unidad_si: "m"
  dimension: "L"
  is_vector: false
  components: null
  category: "fundamental"
  physical_role: "physical_quantity"
  used_in: ["colision-con-pared"]
  common_mistake: "Medir desde un punto de referencia distinto al suelo."
  typical_range: "0.1 - 10 m"
  sign_behavior:
    has_sign: false
    meaning: "Distancia vertical positiva."
  zero_behavior:
    allowed: false
    meaning: "El cuerpo ya está en el suelo."
  value_nature:
    kind: "scalar"
    nonnegative_only: true
  interpretation_role:
    primary_for: ["colision-con-pared"]
  graph_binding:
    channels: []
  pedagogical_notes: "Fija la energía potencial inicial."

- id: hf
  symbol: "h_f"
  nombre:
    es: "altura de rebote"
    en: "rebound height"
  descripcion:
    es: "Altura máxima alcanzada por el cuerpo tras el primer rebote."
    en: "Maximum height reached by the body after the first bounce."
  unidad_si: "m"
  dimension: "L"
  is_vector: false
  components: null
  category: "derived"
  physical_role: "physical_quantity"
  used_in: ["colision-con-pared"]
  common_mistake: "Suponer que hf/h0 es el coeficiente e directamente."
  typical_range: "0 - 10 m"
  sign_behavior:
    has_sign: false
    meaning: "Distancia vertical positiva."
  zero_behavior:
    allowed: true
    meaning: "Rebote nulo (e=0)."
  value_nature:
    kind: "scalar"
    nonnegative_only: true
  interpretation_role:
    primary_for: ["colision-con-pared"]
  graph_binding:
    channels: []
  pedagogical_notes: "Se relaciona con e mediante la raíz cuadrada."

- id: Delta_t
  symbol: "\\\\Delta t"
  nombre:
    es: "tiempo de contacto"
    en: "contact time"
  descripcion:
    es: "Duración del intervalo de tiempo en el que el cuerpo está en contacto con la pared."
    en: "Duration of the time interval during which the body is in contact with the wall."
  unidad_si: "s"
  dimension: "T"
  is_vector: false
  components: null
  category: "fundamental"
  physical_role: "physical_quantity"
  used_in: ["colision-con-pared"]
  common_mistake: "Confundir con el tiempo de vuelo total."
  typical_range: "0.001 - 0.05 s"
  sign_behavior:
    has_sign: false
    meaning: "Intervalo de tiempo positivo."
  zero_behavior:
    allowed: false
    meaning: "Choque instantáneo (fuerza infinita)."
  value_nature:
    kind: "scalar"
    nonnegative_only: true
  interpretation_role:
    primary_for: ["colision-con-pared"]
  graph_binding:
    channels: []
  pedagogical_notes: "Determina la magnitud de la fuerza media."

- id: F_avg
  symbol: "F_{avg}"
  nombre:
    es: "fuerza media de impacto"
    en: "average impact force"
  descripcion:
    es: "Fuerza neta promedio ejercida por la pared sobre el cuerpo durante la colisión."
    en: "Average net force exerted by the wall on the body during collision."
  unidad_si: "N"
  dimension: "M L T^-2"
  is_vector: false
  components: null
  category: "derived"
  physical_role: "physical_quantity"
  used_in: ["colision-con-pared"]
  common_mistake: "Considerarla la fuerza máxima del impacto."
  typical_range: "10 - 10000 N"
  sign_behavior:
    has_sign: true
    meaning: "Sentido de la reacción de la pared."
  zero_behavior:
    allowed: true
    meaning: "No hay interacción."
  value_nature:
    kind: "scalar"
    nonnegative_only: false
  interpretation_role:
    primary_for: ["colision-con-pared"]
  graph_binding:
    channels: []
  pedagogical_notes: "Simplificación de la fuerza real variable."

- id: theta_i
  symbol: "\\\\theta_i"
  nombre:
    es: "ángulo de incidencia"
    en: "angle of incidence"
  descripcion:
    es: "Ángulo que forma la velocidad inicial con la normal a la pared."
    en: "Angle formed by the initial velocity with the wall normal."
  unidad_si: "rad"
  dimension: "1"
  is_vector: false
  components: null
  category: "fundamental"
  physical_role: "physical_quantity"
  used_in: ["colision-con-pared"]
  common_mistake: "Medir el ángulo con la superficie de la pared en lugar de con la normal."
  typical_range: "0 - 1.57 rad"
  sign_behavior:
    has_sign: false
    meaning: "Apertura angular positiva."
  zero_behavior:
    allowed: true
    meaning: "Choque puramente frontal."
  value_nature:
    kind: "scalar"
    nonnegative_only: true
  interpretation_role:
    primary_for: ["colision-con-pared"]
  graph_binding:
    channels: []
  pedagogical_notes: "Fija la relación entre componentes."

- id: theta_f
  symbol: "\\\\theta_f"
  nombre:
    es: "ángulo de rebote"
    en: "angle of rebound"
  descripcion:
    es: "Ángulo que forma la velocidad final con la normal a la pared."
    en: "Angle formed by the final velocity with the wall normal."
  unidad_si: "rad"
  dimension: "1"
  is_vector: false
  components: null
  category: "derived"
  physical_role: "physical_quantity"
  used_in: ["colision-con-pared"]
  common_mistake: "Suponer que es igual al ángulo de incidencia si e < 1."
  typical_range: "0 - 1.57 rad"
  sign_behavior:
    has_sign: false
    meaning: "Apertura angular positiva tras rebote."
  zero_behavior:
    allowed: true
    meaning: "Rebote puramente normal."
  value_nature:
    kind: "scalar"
    nonnegative_only: true
  interpretation_role:
    primary_for: ["colision-con-pared"]
  graph_binding:
    channels: []
  pedagogical_notes: "Se aleja de la normal cuando hay disipación."
`;export{n as default};
