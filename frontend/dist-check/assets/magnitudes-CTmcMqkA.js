const e=`version: 2
magnitudes:
  - id: m_i
    symbol: m_i
    nombre:
      es: masa de la partícula i
      en: mass of particle i
    descripcion:
      es: Masa puntual individual dentro de una colección discreta finita.
      en: Individual point mass within a finite discrete collection.
    unidad_si: kg
    dimension: M
    is_vector: false
    components:
      scalar: true
      x: false
      y: false
      z: false
    category: local
    physical_role: parameter
    used_in:
      - masa_total_discreta
      - centro_masas_general
    common_mistake:
      es: Tratarla como si todas las masas fueran iguales aunque el enunciado no lo diga.
      en: Treating it as if all masses were equal even when the statement says otherwise.
    typical_range:
      es: En ejercicios introductorios suele ir desde gramos hasta decenas de kilogramos.
      en: In introductory exercises it usually ranges from grams to tens of kilograms.
    sign_behavior:
      es: Debe ser no negativa en el contexto mecánico clásico.
      en: It must be non-negative in classical mechanics.
    zero_behavior:
      es: Si una contribución vale cero, no desplaza ni la masa total ni el promedio ponderado.
      en: If one contribution is zero, it shifts neither total mass nor the weighted average.
    value_nature:
      es: Magnitud escalar extensiva local.
      en: Local extensive scalar quantity.
    interpretation_role:
      es: Actúa como peso físico dentro del promedio ponderado.
      en: It acts as the physical weight inside the weighted average.
    graph_binding:
      es: Controla el tamaño relativo del marcador de cada masa en el gráfico.
      en: It controls the relative size of each mass marker in the graph.
    pedagogical_notes:
      es: Conviene revisar siempre qué masa domina antes de sustituir valores.
      en: It is worth checking which mass dominates before substituting numbers.

  - id: x_i
    symbol: x_i
    nombre:
      es: posición de la partícula i
      en: position of particle i
    descripcion:
      es: Coordenada sobre el eje x de una masa discreta concreta.
      en: Coordinate on the x axis of one specific discrete mass.
    unidad_si: m
    dimension: L
    is_vector: false
    components:
      scalar: true
      x: true
      y: false
      z: false
    category: local
    physical_role: parameter
    used_in:
      - centro_masas_general
    common_mistake:
      es: Mezclar posiciones medidas desde orígenes distintos dentro de la misma suma.
      en: Mixing positions measured from different origins within the same sum.
    typical_range:
      es: Depende del montaje; en ejercicios suele ir de unos pocos centímetros a varios metros.
      en: It depends on the setup; in exercises it usually ranges from a few centimeters to several meters.
    sign_behavior:
      es: Puede ser positiva, negativa o nula según el origen elegido.
      en: It can be positive, negative, or zero depending on the chosen origin.
    zero_behavior:
      es: Si coincide con el origen, su contribución al numerador puede anularse.
      en: If it coincides with the origin, its contribution to the numerator can vanish.
    value_nature:
      es: Coordenada escalar local.
      en: Local scalar coordinate.
    interpretation_role:
      es: Localiza dónde actúa cada masa dentro del promedio.
      en: It locates where each mass acts inside the average.
    graph_binding:
      es: Fija la posición horizontal de cada marcador discreto.
      en: It fixes the horizontal position of each discrete marker.
    pedagogical_notes:
      es: Antes de operar, conviene dibujar el eje y etiquetar cada signo.
      en: Before operating, it is useful to draw the axis and label each sign.

  - id: m_1
    symbol: m_1
    nombre:
      es: primera masa
      en: first mass
    descripcion:
      es: Masa del primer cuerpo en el caso operativo de dos masas sobre una recta.
      en: Mass of the first body in the operational two-mass case on a line.
    unidad_si: kg
    dimension: M
    is_vector: false
    components:
      scalar: true
      x: false
      y: false
      z: false
    category: local
    physical_role: parameter
    used_in:
      - centro_masas_dos_masas
    common_mistake:
      es: Intercambiarla con la masa del otro cuerpo al construir el numerador.
      en: Swapping it with the other body's mass when building the numerator.
    typical_range:
      es: Suele elegirse positiva y comparable con m_2.
      en: It is usually chosen positive and comparable to m_2.
    sign_behavior:
      es: No negativa.
      en: Non-negative.
    zero_behavior:
      es: Si vale cero, el primer cuerpo deja de influir en el centro de masas.
      en: If it is zero, the first body stops influencing the center of mass.
    value_nature:
      es: Magnitud escalar extensiva.
      en: Extensive scalar quantity.
    interpretation_role:
      es: Determina cuánto tira la posición x_1 del resultado final.
      en: It determines how strongly position x_1 pulls the final result.
    graph_binding:
      es: Escala el tamaño o intensidad visual del primer marcador.
      en: It scales the size or visual intensity of the first marker.
    pedagogical_notes:
      es: Comparar m_1 con m_2 ayuda a anticipar hacia qué lado se moverá x_cm.
      en: Comparing m_1 with m_2 helps anticipate which side x_cm will move toward.

  - id: m_2
    symbol: m_2
    nombre:
      es: segunda masa
      en: second mass
    descripcion:
      es: Masa del segundo cuerpo en el caso operativo de dos masas sobre una recta.
      en: Mass of the second body in the operational two-mass case on a line.
    unidad_si: kg
    dimension: M
    is_vector: false
    components:
      scalar: true
      x: false
      y: false
      z: false
    category: local
    physical_role: parameter
    used_in:
      - centro_masas_dos_masas
    common_mistake:
      es: Sustituirla en el término m_1 x_1 por descuido algebraico.
      en: Substituting it into the m_1 x_1 term due to algebraic carelessness.
    typical_range:
      es: Se compara con m_1 para estimar el sesgo del promedio.
      en: It is compared with m_1 to estimate the average bias.
    sign_behavior:
      es: No negativa.
      en: Non-negative.
    zero_behavior:
      es: Si vale cero, el centro de masas queda fijado por el primer cuerpo.
      en: If it is zero, the center of mass is set by the first body.
    value_nature:
      es: Magnitud escalar extensiva.
      en: Extensive scalar quantity.
    interpretation_role:
      es: Determina cuánto arrastra x_2 el valor final de x_cm.
      en: It determines how strongly x_2 drags the final value of x_cm.
    graph_binding:
      es: Escala el tamaño o intensidad visual del segundo marcador.
      en: It scales the size or visual intensity of the second marker.
    pedagogical_notes:
      es: Si m_2 es mayor que m_1, el resultado debe acercarse a x_2.
      en: If m_2 is greater than m_1, the result must move closer to x_2.

  - id: x_1
    symbol: x_1
    nombre:
      es: posición de la primera masa
      en: position of the first mass
    descripcion:
      es: Coordenada del primer cuerpo en el ejemplo de dos masas sobre un eje.
      en: Coordinate of the first body in the two-mass example on one axis.
    unidad_si: m
    dimension: L
    is_vector: false
    components:
      scalar: true
      x: true
      y: false
      z: false
    category: local
    physical_role: parameter
    used_in:
      - centro_masas_dos_masas
    common_mistake:
      es: Cambiarle el signo por olvidar el sentido positivo del eje.
      en: Changing its sign by forgetting the positive axis direction.
    typical_range:
      es: Puede ser negativa o positiva según el origen.
      en: It can be negative or positive depending on the origin.
    sign_behavior:
      es: Depende del sistema de referencia elegido.
      en: It depends on the chosen reference system.
    zero_behavior:
      es: Si vale cero, el primer cuerpo está en el origen.
      en: If it is zero, the first body is at the origin.
    value_nature:
      es: Coordenada escalar.
      en: Scalar coordinate.
    interpretation_role:
      es: Sitúa la primera contribución espacial del sistema.
      en: It locates the system's first spatial contribution.
    graph_binding:
      es: Marca la ubicación horizontal del primer bloque o partícula.
      en: It marks the horizontal location of the first block or particle.
    pedagogical_notes:
      es: Conviene comprobar si x_1 queda a la izquierda o a la derecha de x_2 antes de operar.
      en: It is useful to check whether x_1 lies to the left or right of x_2 before operating.

  - id: x_2
    symbol: x_2
    nombre:
      es: posición de la segunda masa
      en: position of the second mass
    descripcion:
      es: Coordenada del segundo cuerpo en el ejemplo de dos masas sobre un eje.
      en: Coordinate of the second body in the two-mass example on one axis.
    unidad_si: m
    dimension: L
    is_vector: false
    components:
      scalar: true
      x: true
      y: false
      z: false
    category: local
    physical_role: parameter
    used_in:
      - centro_masas_dos_masas
    common_mistake:
      es: Usar una distancia entre masas en lugar de la coordenada x_2 medida desde el origen.
      en: Using the distance between masses instead of the coordinate x_2 measured from the origin.
    typical_range:
      es: Debe interpretarse en la misma escala y con el mismo origen que x_1.
      en: It must be interpreted on the same scale and with the same origin as x_1.
    sign_behavior:
      es: Depende del convenio del eje.
      en: It depends on the axis convention.
    zero_behavior:
      es: Si vale cero, el segundo cuerpo coincide con el origen.
      en: If it is zero, the second body coincides with the origin.
    value_nature:
      es: Coordenada escalar.
      en: Scalar coordinate.
    interpretation_role:
      es: Sitúa la segunda contribución espacial del sistema.
      en: It locates the system's second spatial contribution.
    graph_binding:
      es: Marca la ubicación horizontal del segundo bloque o partícula.
      en: It marks the horizontal location of the second block or particle.
    pedagogical_notes:
      es: Debe leerse siempre con el mismo origen que x_1 para evitar promedios incoherentes.
      en: It must always be read with the same origin as x_1 to avoid incoherent averages.

  - id: M
    symbol: M
    nombre:
      es: masa total
      en: total mass
    descripcion:
      es: Suma de todas las masas discretas del sistema.
      en: Sum of all discrete masses in the system.
    unidad_si: kg
    dimension: M
    is_vector: false
    components:
      scalar: true
      x: false
      y: false
      z: false
    category: global
    physical_role: derived
    used_in:
      - masa_total_discreta
      - centro_masas_general
      - centro_masas_dos_masas
    common_mistake:
      es: Restar masas o usar solo una de ellas como denominador.
      en: Subtracting masses or using only one of them as the denominator.
    typical_range:
      es: Debe ser positiva y comparable con la suma de las entradas dadas.
      en: It must be positive and comparable to the sum of the given inputs.
    sign_behavior:
      es: Positiva en problemas físicos ordinarios.
      en: Positive in ordinary physical problems.
    zero_behavior:
      es: Si M fuera cero, la definición de x_cm dejaría de ser utilizable.
      en: If M were zero, the definition of x_cm would stop being usable.
    value_nature:
      es: Magnitud escalar extensiva global.
      en: Global extensive scalar quantity.
    interpretation_role:
      es: Normaliza el numerador del promedio ponderado.
      en: It normalizes the numerator of the weighted average.
    graph_binding:
      es: Resume el peso total representado por todos los marcadores del sistema.
      en: It summarizes the total weight represented by all system markers.
    pedagogical_notes:
      es: Comprobar M antes de dividir evita errores de planteamiento y de sustitución.
      en: Checking M before dividing prevents setup and substitution errors.

  - id: xcm
    symbol: x_cm
    nombre:
      es: coordenada x del centro de masas
      en: x-coordinate of the center of mass
    descripcion:
      es: Posición efectiva donde puede representarse la distribución discreta del sistema sobre el eje x.
      en: Effective position where the system's discrete distribution can be represented on the x axis.
    unidad_si: m
    dimension: L
    is_vector: false
    components:
      scalar: true
      x: true
      y: false
      z: false
    category: result
    physical_role: dependent
    used_in:
      - centro_masas_general
      - centro_masas_dos_masas
    common_mistake:
      es: Confundirlo con el punto medio incluso cuando las masas son distintas.
      en: Confusing it with the midpoint even when the masses are different.
    typical_range:
      es: Para masas positivas sobre una recta debe quedar entre la posición mínima y la máxima.
      en: For positive masses on a line it should lie between the minimum and maximum positions.
    sign_behavior:
      es: Su signo depende del origen elegido.
      en: Its sign depends on the chosen origin.
    zero_behavior:
      es: Si vale cero, el centro de masas coincide con el origen de referencia.
      en: If it is zero, the center of mass coincides with the reference origin.
    value_nature:
      es: Coordenada escalar resultante.
      en: Resulting scalar coordinate.
    interpretation_role:
      es: Resume dónde se concentra de forma efectiva la distribución material discreta.
      en: It summarizes where the discrete material distribution is effectively concentrated.
    graph_binding:
      es: Se muestra como el punto destacado del centro de masas en la visualización.
      en: It is shown as the highlighted center-of-mass point in the visualization.
    pedagogical_notes:
      es: Debe leerse siempre junto con la comparación entre masas y posiciones extremas.
      en: It should always be read together with the comparison between masses and extreme positions.
`;export{e as default};
