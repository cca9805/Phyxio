const n=`version: 1
magnitudes:
- id: Q
  symbol: Q
  nombre:
    es: "Caudal"
    en: "Flow Rate"
  unidad_si: m^3/s
  descripcion:
    es: "Volumen de fluido que atraviesa una sección por unidad de tiempo."
    en: "Volume of fluid crossing a section per unit of time."
  tipo: escalar
  dimension: "L^3/T"
  is_vector: false
  components: []
  category: "Cinemática"
  physical_role: "variable de flujo"
  used_in: ["Continuidad", "Bernoulli"]
  common_mistake: "Confundir con velocidad o no convertir de L/min"
  typical_range: "0.001 - 100 m^3/s"
  sign_behavior: "siempre positivo"
  zero_behavior: "fluido en reposo"
  value_nature: "continuo"
  interpretation_role: "balance de masa"
  graph_binding: "Eje Y en gráficas de flujo"
  pedagogical_notes: "Clave para entender que el agua no se comprime."
- id: A
  symbol: A
  nombre:
    es: "Área"
    en: "Area"
  unidad_si: m^2
  descripcion:
    es: "Superficie de la sección transversal del conducto."
    en: "Cross-sectional area of the conduit."
  tipo: escalar
  dimension: "L^2"
  is_vector: false
  components: []
  category: "Geometría"
  physical_role: "parámetro geométrico"
  used_in: ["Caudal", "Continuidad"]
  common_mistake: "Usar radio en lugar de diámetro o viceversa"
  typical_range: "0.0001 - 10 m^2"
  sign_behavior: "siempre positivo"
  zero_behavior: "conducto obstruido"
  value_nature: "continuo"
  interpretation_role: "restricción espacial"
  graph_binding: "Representación de boquillas"
  pedagogical_notes: "Inversamente proporcional a la velocidad para Q constante."
- id: v
  symbol: v
  nombre:
    es: "Velocidad"
    en: "Velocity"
  unidad_si: m/s
  descripcion:
    es: "Velocidad media del fluido en la sección."
    en: "Mean fluid velocity in the section."
  tipo: escalar
  dimension: "L/T"
  is_vector: true
  components: ["vx"]
  category: "Cinemática"
  physical_role: "variable de estado"
  used_in: ["Bernoulli", "Caudal"]
  common_mistake: "No elevar al cuadrado en Bernoulli"
  typical_range: "0.1 - 50 m/s"
  sign_behavior: "positivo en dirección del flujo"
  zero_behavior: "estática de fluidos"
  value_nature: "continuo"
  interpretation_role: "energía cinética"
  graph_binding: "Vector de flujo"
  pedagogical_notes: "Aumenta en estrechamientos."
- id: H
  symbol: H
  nombre:
    es: "Altura de energía"
    en: "Energy Head"
  unidad_si: m
  descripcion:
    es: "Energía total del fluido expresada en metros de columna de líquido."
    en: "Total fluid energy expressed in meters of liquid column."
  tipo: escalar
  dimension: "L"
  is_vector: false
  components: []
  category: "Energética"
  physical_role: "potencial total"
  used_in: ["Bernoulli", "Pérdidas de carga"]
  common_mistake: "Mezclar con presión en Pascales"
  typical_range: "0 - 500 m"
  sign_behavior: "siempre positivo respecto a referencia"
  zero_behavior: "ausencia de energía mecánica"
  value_nature: "continuo"
  interpretation_role: "balance energético"
  graph_binding: "Línea de energía total"
  pedagogical_notes: "Disminuye a lo largo del flujo debido a la fricción."
- id: p
  symbol: p
  nombre:
    es: "Presión"
    en: "Pressure"
  unidad_si: Pa
  descripcion:
    es: "Presión estática del fluido en el punto de interés."
    en: "Static fluid pressure at the point of interest."
  tipo: escalar
  dimension: "M/LT^2"
  is_vector: false
  components: []
  category: "Dinámica"
  physical_role: "variable de estado"
  used_in: ["Bernoulli", "Ecuación de estado"]
  common_mistake: "Confundir absoluta con manométrica"
  typical_range: "1e5 - 1e7 Pa"
  sign_behavior: "siempre positivo absoluto"
  zero_behavior: "vacío absoluto"
  value_nature: "continuo"
  interpretation_role: "energía de presión"
  graph_binding: "Línea piezométrica"
  pedagogical_notes: "Disminuye cuando la velocidad aumenta (Efecto Bernoulli)."
- id: rho
  symbol: \\rho
  nombre:
    es: "Densidad"
    en: "Density"
  unidad_si: kg/m^3
  descripcion:
    es: "Masa por unidad de volumen del fluido."
    en: "Mass per unit volume of the fluid."
  tipo: escalar
  dimension: "M/L^3"
  is_vector: false
  components: []
  category: "Propiedad"
  physical_role: "parámetro de fluido"
  used_in: ["Bernoulli", "Inercia"]
  common_mistake: "Usar densidad del aire para agua"
  typical_range: "700 - 1500 kg/m^3"
  sign_behavior: "siempre positivo"
  zero_behavior: "vacío"
  value_nature: "continuo"
  interpretation_role: "masa inercial"
  graph_binding: "no aplica"
  pedagogical_notes: "Constante para fluidos incompresibles."
- id: g
  symbol: g
  nombre:
    es: "Gravedad"
    en: "Gravity"
  unidad_si: m/s^2
  descripcion:
    es: "Aceleración de la gravedad estándar."
    en: "Standard acceleration of gravity."
  tipo: escalar
  dimension: "L/T^2"
  is_vector: true
  components: ["gy"]
  category: "Campo"
  physical_role: "constante ambiental"
  used_in: ["Bernoulli", "Peso"]
  common_mistake: "Olvidar en el término de presión"
  typical_range: "9.81 m/s^2"
  sign_behavior: "hacia abajo"
  zero_behavior: "ingravidez"
  value_nature: "constante"
  interpretation_role: "energía potencial"
  graph_binding: "Orientación del eje Z"
  pedagogical_notes: "Relaciona la presión con la altura de columna."
- id: z
  symbol: z
  nombre:
    es: "Altura geométrica"
    en: "Geometric height"
  unidad_si: m
  descripcion:
    es: "Elevación vertical respecto a un nivel de referencia."
    en: "Vertical elevation relative to a reference level."
  tipo: escalar
  dimension: "L"
  is_vector: false
  components: []
  category: "Geometría"
  physical_role: "posición"
  used_in: ["Bernoulli", "Potencial"]
  common_mistake: "Usar signo incorrecto respecto a referencia"
  typical_range: "-100 - 1000 m"
  sign_behavior: "positivo hacia arriba"
  zero_behavior: "nivel de referencia"
  value_nature: "continuo"
  interpretation_role: "energía potencial"
  graph_binding: "Eje vertical"
  pedagogical_notes: "Define la carga de posición."
- id: D
  symbol: D
  nombre:
    es: "Diámetro"
    en: "Diameter"
  unidad_si: m
  descripcion:
    es: "Diámetro interno de la tubería o conducto circular."
    en: "Internal diameter of the pipe or circular conduit."
  tipo: escalar
  dimension: "L"
  is_vector: false
  components: []
  category: "Geometría"
  physical_role: "dimensión lineal"
  used_in: ["Área", "Reynolds"]
  common_mistake: "Confundir con radio"
  typical_range: "0.01 - 2 m"
  sign_behavior: "siempre positivo"
  zero_behavior: "punto"
  value_nature: "discreto/continuo"
  interpretation_role: "escala del sistema"
  graph_binding: "Ancho del conducto"
  pedagogical_notes: "Parámetro fundamental en diseño de tuberías."
- id: mu
  symbol: \\mu
  nombre:
    es: "Viscosidad"
    en: "Viscosity"
  unidad_si: Pa*s
  descripcion:
    es: "Resistencia interna del fluido al flujo."
    en: "Internal resistance of the fluid to flow."
  tipo: escalar
  dimension: "M/LT"
  is_vector: false
  components: []
  category: "Propiedad"
  physical_role: "parámetro de transporte"
  used_in: ["Reynolds", "Pérdidas"]
  common_mistake: "Ignorar en Bernoulli ideal"
  typical_range: "1e-3 - 1 Pa*s"
  sign_behavior: "siempre positivo"
  zero_behavior: "fluido ideal"
  value_nature: "continuo"
  interpretation_role: "disipación"
  graph_binding: "Capa límite"
  pedagogical_notes: "Determina si el flujo es laminar o turbulento."
`;export{n as default};
