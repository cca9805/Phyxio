const e=`version: "2.0"
id: interp-diferencia-de-potencial
leaf_id: diferencia-de-potencial

nombre:
  es: "Interpretación — Diferencia de potencial"
  en: "Interpretation — Potential Difference"

scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: electrostatica
  parent_id: potencial-electrico
  ruta_relativa: fisica-clasica/electromagnetismo/electrostatica/potencial-electrico/diferencia-de-potencial

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: "Interpretación física de la diferencia de potencial"
    en: "Physical interpretation of potential difference"
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_sections: 2
    priority: [summary, likely_errors]

dependencies:
  formulas:
    - diferencia_potencial_trabajo
    - diferencia_potencial_campo_uniforme
  magnitudes:
    - V_AB
    - W_AB
    - q
    - E_unif
    - d_AB

global_context:
  physical_domain:
    es: "Trabajo eléctrico y diferencia de potencial en sistemas electrostáticos, con énfasis en campo uniforme y relación energía-carga."
    en: "Electric work and potential difference in electrostatic systems, with emphasis on uniform field and energy-charge relationship."
  axis_convention:
    es: "El eje x representa el campo eléctrico uniforme [[E_unif]] en N/C; el eje y representa la diferencia de potencial [[V_AB]] en voltios."
    en: "The x-axis represents the uniform electric field [[E_unif]] in N/C; the y-axis represents the potential difference [[V_AB]] in volts."
  standard_assumptions:
    - "Régimen electrostático (cargas en reposo)"
    - "Campo eléctrico conservativo"
    - "En campo uniforme, la diferencia de potencial es proporcional a la distancia"
  standard_warnings:
    - "La diferencia de potencial no depende de la trayectoria elegida entre A y B, pero sí del orden de los puntos."
    - "La fórmula campo × distancia solo es válida para campo uniforme."

result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: Resumen
      en: Summary
  physical_reading:
    enabled: true
    order: 2
    title:
      es: Lectura física
      en: Physical reading
  coherence:
    enabled: true
    order: 3
    title:
      es: Coherencia del resultado
      en: Result coherence
  model_validity:
    enabled: true
    order: 4
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    enabled: true
    order: 5
    title:
      es: Lectura del gráfico
      en: Graph reading
  likely_errors:
    enabled: true
    order: 6
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    enabled: true
    order: 7
    title:
      es: Siguiente paso
      en: Next step

targets:
  V_AB:
    magnitude_type: scalar_signed
    semantic_role:
      es: "Diferencia de potencial entre los puntos A y B del campo eléctrico"
      en: "Potential difference between points A and B of the electric field"
    summary_rules:
      - id: vab_summary_positive
        when: "V_AB > 0"
        status: ok
        text:
          es: "[[V_AB]] positivo indica que el punto A está a mayor potencial que B: el campo realiza trabajo positivo sobre una carga positiva desplazada de A a B. El resultado resume la capacidad energética del campo en ese intervalo."
          en: "Positive [[V_AB]] indicates that point A is at higher potential than B: the field does positive work on a positive charge moved from A to B. The result summarises the energetic capacity of the field over that interval."
      - id: vab_summary_negative
        when: "V_AB < 0"
        status: ok
        text:
          es: "[[V_AB]] negativo indica que B está a mayor potencial que A: el campo frena a una carga positiva desplazada de A a B. El resultado depende del orden de los puntos y describe el sentido de la diferencia energética."
          en: "Negative [[V_AB]] indicates that B is at higher potential than A: the field opposes a positive charge moved from A to B. The result depends on point order and describes the direction of the energy difference."
      - id: vab_summary_zero
        when: "V_AB == 0"
        status: ok
        text:
          es: "[[V_AB]] nulo resume que A y B son equipotenciales: el campo no realiza ni requiere trabajo para desplazar una carga entre ellos. El desplazamiento es a lo largo de una superficie equipotencial."
          en: "Zero [[V_AB]] summarises that A and B are equipotential: the field does no work to move a charge between them. The displacement is along an equipotential surface."
      - id: vab_summary_default
        when: "true"
        status: ok
        text:
          es: "[[V_AB]] indica la energía por unidad de carga disponible entre A y B. Su valor resume la diferencia de potencial eléctrico y depende exclusivamente de la geometría del campo, no de la carga de prueba."
          en: "[[V_AB]] indicates the energy per unit charge available between A and B. Its value summarises the electric potential difference and depends exclusively on the field geometry, not on the test charge."
    physical_reading_rules:
      - id: vab_reading_positive
        when: "V_AB > 0"
        status: ok
        text:
          es: "Un valor positivo de [[V_AB]] significa que el campo eléctrico actúa como motor para cargas positivas en la dirección A→B: la energía potencial disminuye y la cinética aumenta. La causalidad va del campo a la energía de la carga."
          en: "A positive value of [[V_AB]] means the electric field acts as a motor for positive charges in the A→B direction: potential energy decreases and kinetic energy increases. The causality goes from the field to the charge energy."
      - id: vab_reading_negative
        when: "V_AB < 0"
        status: ok
        text:
          es: "Un valor negativo de [[V_AB]] indica que el campo frena a las cargas positivas en la dirección A→B. Para mover una carga positiva en ese sentido se requiere trabajo externo."
          en: "A negative value of [[V_AB]] indicates that the field decelerates positive charges in the A→B direction. Moving a positive charge in that direction requires external work."
      - id: vab_reading_default
        when: "true"
        status: ok
        text:
          es: "[[V_AB]] cuantifica la variación de energía potencial por unidad de carga positiva al pasar de A a B. Su interpretación física depende del signo: positivo implica liberación de energía, negativo implica absorción."
          en: "[[V_AB]] quantifies the change in potential energy per unit positive charge going from A to B. Its physical interpretation depends on the sign: positive implies energy release, negative implies energy absorption."
    coherence_rules:
      - id: vab_coherence_field_sign
        when: "V_AB > 0"
        status: ok
        text:
          es: "[[V_AB]] positivo es coherente si el campo apunta de A a B o tiene componente en ese sentido. Verificar que el campo y el desplazamiento tengan la orientación correcta."
          en: "Positive [[V_AB]] is coherent if the field points from A to B or has a component in that direction. Verify that the field and displacement have the correct orientation."
      - id: vab_coherence_default
        when: "true"
        status: ok
        text:
          es: "El signo de [[V_AB]] debe ser coherente con la geometría del campo. Si el campo es uniforme y apunta de A a B, [[V_AB]] debe ser positivo y proporcional a [[E_unif]] y [[d_AB]]."
          en: "The sign of [[V_AB]] must be coherent with the field geometry. If the field is uniform and points from A to B, [[V_AB]] must be positive and proportional to [[E_unif]] and [[d_AB]]."
    model_validity_rules:
      - id: vab_validity_uniform
        when: "true"
        status: ok
        text:
          es: "La fórmula del campo uniforme es válida solo cuando el campo es constante entre A y B. En campos no uniformes, el resultado de multiplicar campo por distancia subestima o sobreestima [[V_AB]]."
          en: "The uniform field formula is valid only when the field is constant between A and B. In non-uniform fields, multiplying field by distance underestimates or overestimates [[V_AB]]."
      - id: vab_validity_default
        when: "true"
        status: ok
        text:
          es: "La definición de [[V_AB]] como trabajo por unidad de carga es siempre válida en electrostática. La limitación del modelo aparece al elegir la fórmula simplificada para campo uniforme fuera de su dominio."
          en: "The definition of [[V_AB]] as work per unit charge is always valid in electrostatics. The model limitation appears when choosing the simplified uniform-field formula outside its domain."
    graph_rules:
      - id: vab_graph_linear
        when: "true"
        status: ok
        text:
          es: "En el gráfico [[V_AB]] frente a [[E_unif]], la relación es lineal con pendiente [[d_AB]]. Un aumento del campo con separación fija produce un aumento proporcional de [[V_AB]]. La recta pasa por el origen."
          en: "In the graph of [[V_AB]] versus [[E_unif]], the relation is linear with slope [[d_AB]]. An increase in field at fixed separation produces a proportional increase in [[V_AB]]. The line passes through the origin."
      - id: vab_graph_default
        when: "true"
        status: ok
        text:
          es: "El gráfico [[V_AB]] vs [[E_unif]] permite leer visualmente la proporcionalidad: la pendiente indica [[d_AB]]. Si la pendiente cambia, la separación entre placas está variando."
          en: "The graph of [[V_AB]] vs [[E_unif]] allows visual reading of the proportionality: the slope indicates [[d_AB]]. If the slope changes, the plate separation is varying."
    likely_errors:
      - id: vab_error_subscripts
        when: "true"
        status: warning
        text:
          es: "Error frecuente: invertir el orden de los subíndices. [[V_AB]] y el potencial B→A son opuestos en signo. Un resultado positivo con los subíndices invertidos dará el trabajo con signo incorrecto."
          en: "Frequent error: reversing the subscript order. [[V_AB]] and the B→A potential are opposite in sign. A positive result with reversed subscripts will give the work with the wrong sign."
      - id: vab_error_energy_confusion
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir [[V_AB]] con la energía potencial. [[V_AB]] se mide en voltios (energía por carga); la energía potencial de una carga específica requiere multiplicar por [[q]]."
          en: "Frequent error: confusing [[V_AB]] with potential energy. [[V_AB]] is measured in volts (energy per charge); the potential energy of a specific charge requires multiplying by [[q]]."
      - id: vab_error_default
        when: "true"
        status: warning
        text:
          es: "Verificar que la diferencia de potencial se calcula con la proyección del desplazamiento sobre el campo, no con la distancia total de la trayectoria."
          en: "Verify that the potential difference is computed with the projection of the displacement onto the field, not the total path length."
    next_step_rules:
      - id: vab_next_work
        when: "true"
        status: ok
        text:
          es: "Con [[V_AB]] calculado, el paso siguiente es obtener el trabajo eléctrico sobre una carga concreta multiplicando por [[q]]. Si la carga es negativa, el signo del trabajo se invierte."
          en: "With [[V_AB]] computed, the next step is to obtain the electric work on a specific charge by multiplying by [[q]]. If the charge is negative, the sign of the work is reversed."
      - id: vab_next_default
        when: "true"
        status: ok
        text:
          es: "Explorar cómo varía [[V_AB]] al cambiar la separación [[d_AB]] o el campo [[E_unif]]. Este análisis de sensibilidad conecta con el diseño de condensadores."
          en: "Explore how [[V_AB]] varies when changing the separation [[d_AB]] or the field [[E_unif]]. This sensitivity analysis connects with capacitor design."

  W_AB:
    magnitude_type: scalar_signed
    semantic_role:
      es: "Trabajo realizado por el campo eléctrico al desplazar la carga de A a B"
      en: "Work done by the electric field when displacing the charge from A to B"
    summary_rules:
      - id: wab_summary_positive
        when: "W_AB > 0"
        status: ok
        text:
          es: "[[W_AB]] positivo indica que el campo impulsa a la carga en la dirección del desplazamiento: la carga gana energía cinética. El resultado resume una transferencia de energía del campo a la carga."
          en: "Positive [[W_AB]] indicates that the field drives the charge in the displacement direction: the charge gains kinetic energy. The result summarises an energy transfer from the field to the charge."
      - id: wab_summary_negative
        when: "W_AB < 0"
        status: ok
        text:
          es: "[[W_AB]] negativo indica que el campo frena a la carga: la carga pierde energía cinética o un agente externo debe aportar trabajo. El resultado resume la oposición del campo al movimiento."
          en: "Negative [[W_AB]] indicates that the field decelerates the charge: the charge loses kinetic energy or an external agent must supply work. The result summarises the field opposition to the motion."
      - id: wab_summary_default
        when: "true"
        status: ok
        text:
          es: "[[W_AB]] indica la energía transferida por el campo a la carga. Su valor depende tanto de [[V_AB]] como del signo y magnitud de [[q]]."
          en: "[[W_AB]] indicates the energy transferred by the field to the charge. Its value depends on both [[V_AB]] and the sign and magnitude of [[q]]."
    physical_reading_rules:
      - id: wab_reading_default
        when: "true"
        status: ok
        text:
          es: "[[W_AB]] cuantifica el efecto dinámico de la diferencia de potencial sobre la carga [[q]]. La causalidad es directa: el campo actúa sobre la carga y produce un cambio en su energía mecánica. Un resultado positivo implica aceleración; negativo, deceleración."
          en: "[[W_AB]] quantifies the dynamic effect of the potential difference on charge [[q]]. The causality is direct: the field acts on the charge and produces a change in its mechanical energy. A positive result implies acceleration; negative implies deceleration."
    coherence_rules:
      - id: wab_coherence_sign
        when: "W_AB > 0"
        status: ok
        text:
          es: "Trabajo positivo es coherente cuando [[V_AB]] y [[q]] tienen el mismo signo: ambos positivos o ambos negativos. Si uno es positivo y el otro negativo, el trabajo debe ser negativo."
          en: "Positive work is coherent when [[V_AB]] and [[q]] have the same sign: both positive or both negative. If one is positive and the other negative, the work must be negative."
      - id: wab_coherence_default
        when: "true"
        status: ok
        text:
          es: "El signo de [[W_AB]] debe ser coherente con los signos de [[V_AB]] y [[q]]. Un resultado positivo indica que la fuerza eléctrica favorece el movimiento; negativo, que lo dificulta."
          en: "The sign of [[W_AB]] must be coherent with the signs of [[V_AB]] and [[q]]. A positive result means the electric force favors the motion; negative means it opposes it."
    model_validity_rules:
      - id: wab_validity_conservative
        when: "true"
        status: ok
        text:
          es: "[[W_AB]] es independiente de la trayectoria porque el campo eléctrico es conservativo. Si se obtienen valores distintos para trayectorias distintas, hay un error en el planteamiento."
          en: "[[W_AB]] is path-independent because the electric field is conservative. If different values are obtained for different paths, there is an error in the setup."
      - id: wab_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo es válido para movimientos en campos electrostáticos. En presencia de campos variables en el tiempo o fuerzas magnéticas, [[W_AB]] requiere consideraciones adicionales."
          en: "The model is valid for motion in electrostatic fields. In the presence of time-varying fields or magnetic forces, [[W_AB]] requires additional considerations."
    graph_rules:
      - id: wab_graph_default
        when: "true"
        status: ok
        text:
          es: "[[W_AB]] no aparece directamente en el gráfico [[V_AB]] vs [[E_unif]], pero puede calcularse gráficamente como el producto de la lectura de [[V_AB]] por el valor de [[q]] dado en el problema."
          en: "[[W_AB]] does not appear directly in the [[V_AB]] vs [[E_unif]] graph, but can be computed graphically as the product of the [[V_AB]] reading by the value of [[q]] given in the problem."
    likely_errors:
      - id: wab_error_sign_q
        when: "true"
        status: warning
        text:
          es: "Error frecuente: olvidar el signo de [[q]] al calcular [[W_AB]]. Una carga negativa invierte el signo del trabajo respecto a la diferencia de potencial."
          en: "Frequent error: forgetting the sign of [[q]] when computing [[W_AB]]. A negative charge reverses the sign of the work relative to the potential difference."
      - id: wab_error_external
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir el trabajo del campo eléctrico con el trabajo externo. Si el campo realiza trabajo positivo, un agente externo habrá realizado trabajo negativo de igual módulo para mantener el movimiento lento."
          en: "Frequent error: confusing the electric field work with external work. If the field does positive work, an external agent will have done negative work of equal magnitude to maintain slow motion."
      - id: wab_error_default
        when: "true"
        status: warning
        text:
          es: "Verificar que se usa [[V_AB]] con el orden de subíndices correcto al calcular [[W_AB]]. Un error de signo en [[V_AB]] produce un error de signo en [[W_AB]]."
          en: "Verify that [[V_AB]] is used with the correct subscript order when computing [[W_AB]]. A sign error in [[V_AB]] produces a sign error in [[W_AB]]."
    next_step_rules:
      - id: wab_next_kinetic
        when: "W_AB > 0"
        status: ok
        text:
          es: "Con [[W_AB]] positivo, aplicar el teorema trabajo-energía cinética: la variación de energía cinética de la carga iguala [[W_AB]] si no actúan otras fuerzas."
          en: "With positive [[W_AB]], apply the work-kinetic energy theorem: the change in kinetic energy of the charge equals [[W_AB]] if no other forces act."
      - id: wab_next_default
        when: "true"
        status: ok
        text:
          es: "[[W_AB]] conecta la diferencia de potencial con la dinámica de la carga. El paso siguiente es calcular la velocidad final usando el teorema trabajo-energía cinética."
          en: "[[W_AB]] connects the potential difference with the charge dynamics. The next step is to compute the final speed using the work-kinetic energy theorem."

  E_unif:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Campo eléctrico uniforme que genera la diferencia de potencial en la región considerada"
      en: "Uniform electric field generating the potential difference in the considered region"
    summary_rules:
      - id: eunif_summary_large
        when: "E_unif > 1e6"
        status: warning
        text:
          es: "[[E_unif]] supera el millón de N/C. Este valor se acerca al campo de ruptura dieléctrica del aire (3×10⁶ N/C). El modelo de campo uniforme puede depender de la geometría del condensador."
          en: "[[E_unif]] exceeds one million N/C. This value approaches the dielectric breakdown field of air (3×10⁶ N/C). The uniform field model may depend on capacitor geometry."
      - id: eunif_summary_default
        when: "true"
        status: ok
        text:
          es: "[[E_unif]] indica la intensidad del campo eléctrico uniforme entre los puntos considerados. Su valor determina cuánta diferencia de potencial se genera por unidad de distancia en la dirección del campo."
          en: "[[E_unif]] indicates the intensity of the uniform electric field between the considered points. Its value determines how much potential difference is generated per unit distance in the field direction."
    physical_reading_rules:
      - id: eunif_reading_default
        when: "true"
        status: ok
        text:
          es: "[[E_unif]] representa la fuerza eléctrica por unidad de carga en la región uniforme. Cuanto mayor es [[E_unif]], mayor es la diferencia de potencial para la misma separación, y mayor la aceleración de cargas libres."
          en: "[[E_unif]] represents the electric force per unit charge in the uniform region. The larger [[E_unif]], the greater the potential difference for the same separation, and the greater the acceleration of free charges."
    coherence_rules:
      - id: eunif_coherence_positive
        when: "E_unif < 0"
        status: error
        text:
          es: "[[E_unif]] negativo es incoherente: representa el módulo del campo y debe ser positivo. La dirección del campo se trata por separado con el orden de los subíndices de [[V_AB]]."
          en: "Negative [[E_unif]] is incoherent: it represents the field magnitude and must be positive. The field direction is handled separately through the subscript order of [[V_AB]]."
      - id: eunif_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[E_unif]] debe ser positivo. La relación con [[V_AB]] es proporcional con factor [[d_AB]]: si [[E_unif]] aumenta con [[d_AB]] fijo, [[V_AB]] aumenta en la misma proporción."
          en: "[[E_unif]] must be positive. The relation with [[V_AB]] is proportional with factor [[d_AB]]: if [[E_unif]] increases with fixed [[d_AB]], [[V_AB]] increases in the same proportion."
    model_validity_rules:
      - id: eunif_validity_uniform
        when: "true"
        status: ok
        text:
          es: "El modelo de campo uniforme es válido en la región central de condensadores planos con placas grandes respecto a la separación. Se invalida cerca de los bordes o cuando el cociente entre separación y dimensión lateral supera el 10 %."
          en: "The uniform field model is valid in the central region of flat capacitors with plates large compared to the separation. It breaks down near the edges or when the ratio of separation to lateral dimension exceeds 10 %."
      - id: eunif_validity_default
        when: "true"
        status: ok
        text:
          es: "Verificar que el campo es realmente uniforme en toda la región entre A y B antes de usar esta fórmula. En campos de carga puntual, [[E_unif]] varía con la distancia y no puede usarse directamente."
          en: "Verify that the field is truly uniform throughout the region between A and B before using this formula. In point charge fields, [[E_unif]] varies with distance and cannot be used directly."
    graph_rules:
      - id: eunif_graph_default
        when: "true"
        status: ok
        text:
          es: "[[E_unif]] es la variable de control natural del gráfico [[V_AB]] vs [[E_unif]]. La pendiente de la recta iguala [[d_AB]]. Variando [[E_unif]] se traza la dependencia lineal de la diferencia de potencial."
          en: "[[E_unif]] is the natural control variable of the [[V_AB]] vs [[E_unif]] graph. The slope of the line equals [[d_AB]]. Varying [[E_unif]] traces the linear dependence of the potential difference."
    likely_errors:
      - id: eunif_error_non_uniform
        when: "true"
        status: warning
        text:
          es: "Error frecuente: aplicar la fórmula de campo uniforme cuando el campo varía con la posición. Cerca de una carga puntual el campo no es uniforme y se requiere integración de línea."
          en: "Frequent error: applying the uniform field formula when the field varies with position. Near a point charge the field is not uniform and line integration is required."
      - id: eunif_error_default
        when: "true"
        status: warning
        text:
          es: "Verificar que [[E_unif]] tiene unidades de N/C o V/m (son equivalentes). Un resultado en N·m o en V·m indica un error dimensional."
          en: "Verify that [[E_unif]] has units of N/C or V/m (they are equivalent). A result in N·m or V·m indicates a dimensional error."
    next_step_rules:
      - id: eunif_next_force
        when: "true"
        status: ok
        text:
          es: "Con [[E_unif]] conocido, se puede calcular la fuerza eléctrica sobre cualquier carga como el producto del campo por la carga. El paso siguiente conecta el campo con la dinámica de partículas cargadas."
          en: "With [[E_unif]] known, the electric force on any charge can be computed as the product of the field by the charge. The next step connects the field with the dynamics of charged particles."
      - id: eunif_next_default
        when: "true"
        status: ok
        text:
          es: "Explorar cómo cambia [[E_unif]] al variar la tensión aplicada o la separación de placas. Este análisis conecta con el diseño de condensadores."
          en: "Explore how [[E_unif]] changes as the applied voltage or plate separation varies. This analysis connects with capacitor design."

  d_AB:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Proyección del desplazamiento A→B sobre la dirección del campo uniforme"
      en: "Projection of the A→B displacement onto the uniform field direction"
    summary_rules:
      - id: dab_summary_default
        when: "true"
        status: ok
        text:
          es: "[[d_AB]] indica la componente del desplazamiento en la dirección del campo. Su valor resume qué fracción del recorrido entre A y B contribuye efectivamente a la diferencia de potencial. Depende de la geometría y la orientación del desplazamiento."
          en: "[[d_AB]] indicates the component of the displacement in the field direction. Its value summarises what fraction of the path from A to B effectively contributes to the potential difference. It depends on the geometry and displacement orientation."
    physical_reading_rules:
      - id: dab_reading_zero
        when: "d_AB == 0"
        status: ok
        text:
          es: "[[d_AB]] nulo significa que el desplazamiento es perpendicular al campo: la carga se mueve sobre una superficie equipotencial y [[V_AB]] es cero. El campo no realiza trabajo en ese movimiento."
          en: "Zero [[d_AB]] means the displacement is perpendicular to the field: the charge moves along an equipotential surface and [[V_AB]] is zero. The field does no work in that motion."
      - id: dab_reading_default
        when: "true"
        status: ok
        text:
          es: "[[d_AB]] cuantifica qué tan alineado está el desplazamiento con el campo. Un valor mayor indica que el desplazamiento sigue más la dirección del campo, produciendo una diferencia de potencial mayor para el mismo campo."
          en: "[[d_AB]] quantifies how aligned the displacement is with the field. A larger value indicates that the displacement follows the field direction more closely, producing a larger potential difference for the same field."
    coherence_rules:
      - id: dab_coherence_positive
        when: "d_AB < 0"
        status: error
        text:
          es: "[[d_AB]] negativo es incoherente: representa una longitud de proyección y debe ser positivo. El signo de [[V_AB]] se controla con el orden de los subíndices, no con el signo de [[d_AB]]."
          en: "Negative [[d_AB]] is incoherent: it represents a projection length and must be positive. The sign of [[V_AB]] is controlled by the subscript order, not by the sign of [[d_AB]]."
      - id: dab_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[d_AB]] debe ser positivo y no mayor que la distancia total entre A y B. Si [[d_AB]] supera la distancia real, hay un error en la proyección."
          en: "[[d_AB]] must be positive and not greater than the total distance between A and B. If [[d_AB]] exceeds the actual distance, there is an error in the projection."
    model_validity_rules:
      - id: dab_validity_default
        when: "true"
        status: ok
        text:
          es: "[[d_AB]] es la proyección del desplazamiento vectorial sobre la dirección del campo uniforme. Para campos no uniformes, esta proyección no basta y se requiere integración de línea sobre toda la trayectoria."
          en: "[[d_AB]] is the projection of the displacement vector onto the uniform field direction. For non-uniform fields, this projection is not sufficient and line integration over the entire path is required."
    graph_rules:
      - id: dab_graph_default
        when: "true"
        status: ok
        text:
          es: "En el gráfico [[V_AB]] vs [[d_AB]], la relación es lineal con pendiente [[E_unif]]. Aumentar la separación entre las placas de un condensador aumenta [[V_AB]] proporcionalmente."
          en: "In the graph of [[V_AB]] vs [[d_AB]], the relation is linear with slope [[E_unif]]. Increasing the plate separation of a capacitor increases [[V_AB]] proportionally."
    likely_errors:
      - id: dab_error_path_length
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar la longitud total de la trayectoria en lugar de la proyección sobre el campo. Si la trayectoria es curva o no paralela al campo, [[d_AB]] es menor que la distancia recorrida."
          en: "Frequent error: using the total path length instead of the projection onto the field. If the path is curved or not parallel to the field, [[d_AB]] is less than the distance traveled."
      - id: dab_error_default
        when: "true"
        status: warning
        text:
          es: "Verificar que [[d_AB]] se mide en metros. Separaciones expresadas en milímetros o centímetros deben convertirse antes de calcular [[V_AB]]."
          en: "Verify that [[d_AB]] is measured in metres. Separations expressed in millimetres or centimetres must be converted before computing [[V_AB]]."
    next_step_rules:
      - id: dab_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[d_AB]] y [[V_AB]] calculados, el paso siguiente es obtener [[E_unif]] como cociente entre ambos. Este resultado conecta con el diseño geométrico de condensadores y aceleradores de partículas."
          en: "With [[d_AB]] and [[V_AB]] computed, the next step is to obtain [[E_unif]] as their ratio. This result connects with the geometric design of capacitors and particle accelerators."

  q:
    magnitude_type: scalar_signed
    semantic_role:
      es: "Carga eléctrica que se desplaza entre A y B para calcular el trabajo del campo"
      en: "Electric charge displaced between A and B to compute the field work"
    summary_rules:
      - id: q_summary_positive
        when: "q > 0"
        status: ok
        text:
          es: "[[q]] positiva indica que se trata de una carga positiva (protón, ión positivo). El campo la impulsa si [[V_AB]] es positivo, acelerándola de A a B. El resultado resume la naturaleza de la carga que experimenta la diferencia de potencial."
          en: "Positive [[q]] indicates a positive charge (proton, positive ion). The field drives it if [[V_AB]] is positive, accelerating it from A to B. The result summarises the nature of the charge experiencing the potential difference."
      - id: q_summary_negative
        when: "q < 0"
        status: ok
        text:
          es: "[[q]] negativa indica una carga negativa (electrón, ión negativo). El campo la frena si [[V_AB]] es positivo, pero la acelera si [[V_AB]] es negativo. El signo de [[q]] invierte el efecto de la diferencia de potencial."
          en: "Negative [[q]] indicates a negative charge (electron, negative ion). The field decelerates it if [[V_AB]] is positive, but accelerates it if [[V_AB]] is negative. The sign of [[q]] inverts the effect of the potential difference."
      - id: q_summary_default
        when: "true"
        status: ok
        text:
          es: "[[q]] indica la carga que se desplaza entre A y B. Su valor depende del tipo de partícula y determina el trabajo eléctrico realizado para una diferencia de potencial dada."
          en: "[[q]] indicates the charge displaced between A and B. Its value depends on the particle type and determines the electric work done for a given potential difference."
    physical_reading_rules:
      - id: q_reading_default
        when: "true"
        status: ok
        text:
          es: "[[q]] conecta la magnitud del campo ([[V_AB]]) con el efecto dinámico observable ([[W_AB]]). La diferencia de potencial existe independientemente de [[q]]; es la carga la que decide cuánta energía se transfiere."
          en: "[[q]] connects the field quantity ([[V_AB]]) with the observable dynamic effect ([[W_AB]]). The potential difference exists independently of [[q]]; it is the charge that decides how much energy is transferred."
    coherence_rules:
      - id: q_coherence_zero
        when: "q == 0"
        status: error
        text:
          es: "[[q]] nula es incoherente en este contexto: una carga cero no puede experimentar trabajo ni definir la diferencia de potencial a través de su movimiento."
          en: "Zero [[q]] is incoherent in this context: a zero charge cannot experience work or define potential difference through its motion."
      - id: q_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[q]] puede ser cualquier valor no nulo. El signo de [[W_AB]] depende conjuntamente del signo de [[q]] y del signo de [[V_AB]]."
          en: "[[q]] can be any non-zero value. The sign of [[W_AB]] jointly depends on the sign of [[q]] and the sign of [[V_AB]]."
    model_validity_rules:
      - id: q_validity_test_charge
        when: "true"
        status: ok
        text:
          es: "En el modelo ideal, [[q]] es una carga de prueba que no perturba el campo. En la práctica, cargas grandes pueden redistribuir otras cargas del sistema y alterar [[V_AB]]. El modelo es válido para cargas pequeñas comparadas con las que generan el campo."
          en: "In the ideal model, [[q]] is a test charge that does not perturb the field. In practice, large charges can redistribute other charges in the system and alter [[V_AB]]. The model is valid for charges small compared to those generating the field."
      - id: q_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo es válido para cargas clásicas en campos electrostáticos. A escala subatómica, efectos cuánticos modifican el comportamiento."
          en: "The model is valid for classical charges in electrostatic fields. At subatomic scale, quantum effects modify the behaviour."
    graph_rules:
      - id: q_graph_default
        when: "true"
        status: ok
        text:
          es: "[[q]] no aparece en el gráfico [[V_AB]] vs [[E_unif]], pero escala el trabajo [[W_AB]] para cualquier diferencia de potencial leída en el gráfico. Multiplicar el valor de [[V_AB]] del gráfico por [[q]] da el trabajo directamente."
          en: "[[q]] does not appear in the [[V_AB]] vs [[E_unif]] graph, but scales the work [[W_AB]] for any potential difference read from the graph. Multiplying the [[V_AB]] value from the graph by [[q]] gives the work directly."
    likely_errors:
      - id: q_error_sign
        when: "true"
        status: warning
        text:
          es: "Error frecuente: olvidar el signo de [[q]] al calcular [[W_AB]]. El electrón tiene carga negativa; calcular su trabajo con el módulo de la carga sin signo da un resultado con signo incorrecto."
          en: "Frequent error: forgetting the sign of [[q]] when computing [[W_AB]]. The electron has negative charge; computing its work with the unsigned charge magnitude gives an incorrect sign."
      - id: q_error_independence
        when: "true"
        status: warning
        text:
          es: "Error frecuente: creer que [[V_AB]] depende de [[q]]. La diferencia de potencial es una propiedad del campo entre A y B, independiente de la carga de prueba que se desplace."
          en: "Frequent error: believing that [[V_AB]] depends on [[q]]. The potential difference is a property of the field between A and B, independent of the test charge being displaced."
      - id: q_error_default
        when: "true"
        status: warning
        text:
          es: "Verificar que la unidad de [[q]] es el culombio (C). Cargas expresadas en microcoulombios o nanocoulombios deben convertirse antes de calcular [[W_AB]]."
          en: "Verify that the unit of [[q]] is the coulomb (C). Charges expressed in microcoulombs or nanocoulombs must be converted before computing [[W_AB]]."
    next_step_rules:
      - id: q_next_work
        when: "true"
        status: ok
        text:
          es: "Con [[q]] y [[V_AB]] determinados, el siguiente paso es calcular [[W_AB]] multiplicando ambos. Si la carga parte del reposo, igualar [[W_AB]] a la energía cinética final para obtener la velocidad."
          en: "With [[q]] and [[V_AB]] determined, the next step is to compute [[W_AB]] by multiplying both. If the charge starts from rest, equate [[W_AB]] to the final kinetic energy to obtain the speed."
      - id: q_next_default
        when: "true"
        status: ok
        text:
          es: "Explorar cómo cambia el trabajo al variar el tipo de partícula (electrón vs protón): mismo campo, mismo recorrido, distinto [[q]] produce distintas energías cinéticas finales."
          en: "Explore how work changes when the particle type varies (electron vs proton): same field, same path, different [[q]] produces different final kinetic energies."

cross_checks:
  - id: trabajo_potencial_consistencia
    when: "W_AB != 0 && V_AB == 0"
    status: error
    text:
      es: "Inconsistencia: el trabajo no puede ser no nulo si la diferencia de potencial es cero y la carga es finita."
      en: "Inconsistency: work cannot be non-zero if the potential difference is zero and the charge is finite."
  - id: campo_distancia_consistencia
    when: "E_unif > 0 && d_AB == 0"
    status: error
    text:
      es: "Inconsistencia: la distancia entre puntos no puede ser cero si se está calculando la diferencia de potencial en campo uniforme."
      en: "Inconsistency: the distance between points cannot be zero if the potential difference is being computed in a uniform field."

error_patterns:
  - id: confundir_potencial_energia
    description:
      es: "Confundir la diferencia de potencial [[V_AB]] con la energía potencial eléctrica. La diferencia de potencial es energía por unidad de carga (voltios); la energía potencial requiere multiplicar por la carga (julios)."
      en: "Confusing potential difference [[V_AB]] with electric potential energy. Potential difference is energy per unit charge (volts); potential energy requires multiplying by the charge (joules)."
  - id: invertir_subindices
    description:
      es: "Invertir el orden de los subíndices de [[V_AB]] y [[V_BA]], tratándolos como equivalentes cuando son opuestos en signo."
      en: "Reversing the subscript order of [[V_AB]] and [[V_BA]], treating them as equivalent when they are opposite in sign."

graph_binding:
  enabled: true
  graph_type: Coord
  x_axis: E_unif
  y_axis: V_AB
  secondary_y: W_AB

mini_graph:
  enabled: true
  preferred_type: Coord
  fallback: none

output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_mode:
    max_sections: 2
    priority: [summary, likely_errors]
  extended_mode:
    show_all: true
`;export{e as default};
