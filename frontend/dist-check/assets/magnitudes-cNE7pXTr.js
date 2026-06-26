const e=`- id: F1
  symbol: F_1
  nombre:
    es: Fuerza de entrada
    en: Input force
  descripcion:
    es: Fuerza aplicada sobre el émbolo pequeño de la prensa hidráulica.
    en: Force applied to the small piston of the hydraulic press.
  unidad_si: N
  dimension: force
  is_vector: false
  components: []
  category: force
  physical_role: causa del incremento de presión
  used_in: [principio-de-pascal]
  common_mistake:
    es: Confundir F1 con la presión generada.
    en: Confusing F1 with the generated pressure.
  typical_range: [0, 10000]
  sign_behavior: siempre positiva (magnitud escalar de la fuerza aplicada)
  zero_behavior: si es cero, no hay incremento de presión en el sistema
  value_nature: extensiva
  interpretation_role: causa_primaria
  graph_binding: vector de carga en el émbolo de entrada
  pedagogical_notes: es la variable independiente controlada por el usuario

- id: A1
  symbol: A_1
  nombre:
    es: Área de entrada
    en: Input area
  descripcion:
    es: Superficie del émbolo pequeño sobre el que se aplica la fuerza.
    en: Surface of the small piston where the force is applied.
  unidad_si: m^2
  dimension: area
  is_vector: false
  components: []
  category: geometry
  physical_role: superficie de transmisión inicial
  used_in: [principio-de-pascal]
  common_mistake:
    es: Usar el radio o el diámetro en lugar del área.
    en: Using radius or diameter instead of area.
  typical_range: [0.0001, 10]
  sign_behavior: estrictamente positiva
  zero_behavior: físicamente imposible en este modelo
  value_nature: extensiva
  interpretation_role: parametro_geometrico
  graph_binding: geometría del émbolo 1
  pedagogical_notes: determina la presión inicial generada para una fuerza dada

- id: F2
  symbol: F_2
  nombre:
    es: Fuerza de salida
    en: Output force
  descripcion:
    es: Fuerza resultante en el émbolo grande.
    en: Resulting force on the large piston.
  unidad_si: N
  dimension: force
  is_vector: false
  components: []
  category: force
  physical_role: carga o peso elevado
  used_in: [principio-de-pascal]
  common_mistake:
    es: Creer que la fuerza de salida es igual a la de entrada sin considerar las áreas.
    en: Believing output force equals input force without considering areas.
  typical_range: [0, 1000000]
  sign_behavior: positiva (hacia arriba)
  zero_behavior: indica que no se está levantando ninguna carga
  value_nature: extensiva
  interpretation_role: efecto_principal
  graph_binding: vector de carga en el émbolo de salida
  pedagogical_notes: es el objetivo principal de la ventaja mecánica

- id: A2
  symbol: A_2
  nombre:
    es: Área de salida
    en: Output area
  descripcion:
    es: Superficie del émbolo grande que transmite la fuerza de salida.
    en: Surface of the large piston that transmits the output force.
  unidad_si: m^2
  dimension: area
  is_vector: false
  components: []
  category: geometry
  physical_role: superficie de amplificación
  used_in: [principio-de-pascal]
  common_mistake:
    es: Intercambiar A1 y A2 en la fórmula.
    en: Swapping A1 and A2 in the formula.
  typical_range: [0.001, 100]
  sign_behavior: estrictamente positiva
  zero_behavior: invalida el sistema hidráulico
  value_nature: extensiva
  interpretation_role: factor_multiplicador
  graph_binding: geometría del émbolo 2
  pedagogical_notes: cuanto mayor sea respecto a A1, mayor será la ventaja mecánica

- id: p
  symbol: p
  nombre:
    es: Presión transmitida
    en: Transmitted pressure
  descripcion:
    es: Presión uniforme transmitida por el fluido.
    en: Uniform pressure transmitted by the fluid.
  unidad_si: Pa
  dimension: pressure
  is_vector: false
  components: []
  category: pressure
  physical_role: mediador de transmisión
  used_in: [principio-de-pascal]
  common_mistake:
    es: Pensar que la presión cambia entre émbolos.
    en: Thinking pressure changes between pistons.
  typical_range: [0, 10000000]
  sign_behavior: positiva (presión de confinamiento)
  zero_behavior: sistema en reposo sin carga externa
  value_nature: intensiva
  interpretation_role: variable_estado
  graph_binding: densidad de vectores de presión
  pedagogical_notes: es la variable que iguala el comportamiento en todo el sistema
`;export{e as default};
