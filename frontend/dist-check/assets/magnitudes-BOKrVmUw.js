const e=`version: 2
magnitudes:
  - id: W
    symbol: W
    nombre:
      es: Carga o peso
      en: Load or weight
    descripcion:
      es: Fuerza gravitatoria total del objeto que se desea elevar.
      en: Total gravitational force of the object to be lifted.
    unidad_si: N
    dimension: F
    is_vector: true
    components: []
    category: mecanica/dinamica
    physical_role:
      es: carga
      en: load
    used_in: [fisica-clasica/mecanica/aplicaciones/maquinas-simples/polea]
    common_mistake:
      es: Confundir masa (kg) con peso (N).
      en: Confusing mass (kg) with weight (N).
    typical_range: [10, 50000]
    sign_behavior: vertical_hacia_abajo
    zero_behavior: ausencia de carga implica sistema en vacío
    value_nature: extensiva
    interpretation_role: output
    graph_binding: weight_vector
    pedagogical_notes: Es la resistencia que el sistema de poleas debe vencer.

  - id: P
    symbol: P
    nombre:
      es: Esfuerzo o potencia
      en: Effort or power
    descripcion:
      es: Fuerza aplicada por el operador en el extremo libre de la cuerda.
      en: Force applied by the operator at the free end of the rope.
    unidad_si: N
    dimension: F
    is_vector: true
    components: []
    category: mecanica/dinamica
    physical_role:
      es: esfuerzo
      en: effort
    used_in: [fisica-clasica/mecanica/aplicaciones/maquinas-simples/polea]
    common_mistake:
      es: Creer que siempre debe ser igual a la carga.
      en: Believing it must always be equal to the load.
    typical_range: [1, 5000]
    sign_behavior: direccion_de_la_cuerda
    zero_behavior: ausencia de esfuerzo implica reposo o caída de la carga
    value_nature: extensiva
    interpretation_role: input
    graph_binding: effort_arrow
    pedagogical_notes: Representa la entrada de fuerza manual o mecánica.

  - id: n
    symbol: n
    nombre:
      es: Tramos de cuerda efectivos
      en: Effective rope segments
    descripcion:
      es: Número de segmentos de cuerda que sostienen directamente la carga móvil.
      en: Number of rope segments directly supporting the moving load.
    unidad_si: "1"
    dimension: "1"
    is_vector: false
    components: []
    category: mecanica/estatica
    physical_role:
      es: parámetro de diseño
      en: design parameter
    used_in: [fisica-clasica/mecanica/aplicaciones/maquinas-simples/polea]
    common_mistake:
      es: Contar el tramo de cuerda donde el operador tira hacia abajo.
      en: Counting the rope segment where the operator pulls downwards.
    typical_range: [1, 12]
    sign_behavior: siempre_positiva
    zero_behavior: no aplica (mínimo 1)
    value_nature: intensiva
    interpretation_role: control
    graph_binding: rope_count
    pedagogical_notes: Define la ventaja mecánica ideal en poleas simples y aparejos factoriales.

  - id: Np
    symbol: N_p
    nombre:
      es: Número de poleas móviles
      en: Number of moving pulleys
    descripcion:
      es: Cantidad de poleas que se desplazan solidarias con la carga.
      en: Number of pulleys that move together with the load.
    unidad_si: "1"
    dimension: "1"
    is_vector: false
    components: []
    category: mecanica/estatica
    physical_role:
      es: configuración del sistema
      en: system configuration
    used_in: [fisica-clasica/mecanica/aplicaciones/maquinas-simples/polea]
    common_mistake:
      es: Incluir la polea fija de soporte en el conteo de móviles.
      en: Including the fixed support pulley in the count of moving ones.
    typical_range: [0, 6]
    sign_behavior: siempre_positiva
    zero_behavior: polea fija simple
    value_nature: intensiva
    interpretation_role: control
    graph_binding: pulley_count
    pedagogical_notes: Es el parámetro clave en polispastos potenciales y factoriales.

  - id: eta
    symbol: \\eta
    nombre:
      es: Rendimiento mecánico
      en: Mechanical efficiency
    descripcion:
      es: Fracción de la energía de entrada que se convierte en trabajo útil.
      en: Fraction of input energy that is converted into useful work.
    unidad_si: "1"
    dimension: "1"
    is_vector: false
    components: []
    category: mecanica/dinamica
    physical_role:
      es: factor de pérdida
      en: loss factor
    used_in: [fisica-clasica/mecanica/aplicaciones/maquinas-simples/polea]
    common_mistake:
      es: Suponer eficiencia del 100% en sistemas reales con fricción.
      en: Assuming 100% efficiency in real systems with friction.
    typical_range: [0, 1]
    sign_behavior: siempre_positiva
    zero_behavior: fricción infinita (bloqueo)
    value_nature: intensiva
    interpretation_role: loss_factor
    graph_binding: friction_indicator
    pedagogical_notes: Cuantifica las pérdidas por rozamiento en los ejes y rigidez de la cuerda.

  - id: VM
    symbol: VM
    nombre:
      es: Ventaja mecánica
      en: Mechanical advantage
    descripcion:
      es: Relación entre la fuerza de salida (carga) y la fuerza de entrada (esfuerzo).
      en: Ratio between output force (load) and input force (effort).
    unidad_si: "1"
    dimension: "1"
    is_vector: false
    components: []
    category: mecanica/estatica
    physical_role:
      es: beneficio mecánico
      en: mechanical benefit
    used_in: [fisica-clasica/mecanica/aplicaciones/maquinas-simples/polea]
    common_mistake:
      es: Pensar que ahorra energía (solo ahorra fuerza).
      en: Thinking it saves energy (it only saves force).
    typical_range: [1, 20]
    sign_behavior: siempre_positiva
    zero_behavior: no aplica
    value_nature: intensiva
    interpretation_role: output
    graph_binding: benefit_meter
    pedagogical_notes: Es el indicador de cuántas veces se multiplica la fuerza.

  - id: sP
    symbol: s_P
    nombre:
      es: Desplazamiento del esfuerzo
      en: Effort displacement
    descripcion:
      es: Distancia recorrida por el punto de aplicación de la fuerza del operador.
      en: Distance traveled by the point of application of the operator's force.
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: mecanica/cinematica
    physical_role:
      es: recorrido de entrada
      en: input travel
    used_in: [fisica-clasica/mecanica/aplicaciones/maquinas-simples/polea]
    common_mistake:
      es: Olvidar que es proporcional a n veces el recorrido de la carga.
      en: Forgetting that it is proportional to n times the load travel.
    typical_range: [0, 100]
    sign_behavior: siempre_positiva
    zero_behavior: sistema estático
    value_nature: extensiva
    interpretation_role: input
    graph_binding: rope_pull_distance
    pedagogical_notes: Representa el costo en distancia para ganar fuerza.

  - id: sW
    symbol: s_W
    nombre:
      es: Desplazamiento de la carga
      en: Load displacement
    descripcion:
      es: Cambio de posición vertical de la carga.
      en: Vertical position change of the load.
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: mecanica/cinematica
    physical_role:
      es: recorrido de salida
      en: output travel
    used_in: [fisica-clasica/mecanica/aplicaciones/maquinas-simples/polea]
    common_mistake:
      es: Confundir con la longitud total de la cuerda.
      en: Confusing with the total length of the rope.
    typical_range: [0, 50]
    sign_behavior: siempre_positiva
    zero_behavior: sistema estático
    value_nature: extensiva
    interpretation_role: output
    graph_binding: load_height_change
    pedagogical_notes: Es el objetivo útil de la máquina.
`;export{e as default};
