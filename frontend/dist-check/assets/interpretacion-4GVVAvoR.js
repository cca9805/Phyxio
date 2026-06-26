const e=`version: "1.0"
id: interp-intensidad-y-nivel-sonoro
leaf_id: intensidad-y-nivel-sonoro

nombre:
  es: Interpretacion de intensidad y nivel sonoro
  en: Interpretation of sound intensity and level

scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: sonido
  parent_id: sonido
  ruta_relativa: fisica-clasica/ondas/sonido/intensidad-y-nivel-sonoro

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: false
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretacion
    en: Interpretation
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
    - intensidad_potencia
    - nivel_intensidad
    - intensidad_distancia
  magnitudes:
    - I
    - L
    - P
    - r
    - I_0

global_context:
  physical_domain:
    es: "Propagacion sonora en campo libre, conversion entre potencia por area y escala logaritmica de nivel."
    en: "Sound propagation in free field, converting power per area into logarithmic level scale."
  axis_convention:
    es: "La distancia [[r]] se mide radialmente desde la fuente hacia el punto de observacion."
    en: "Distance [[r]] is measured radially from the source to the observation point."
  standard_assumptions:
    - "Fuente puntual aproximadamente omnidireccional"
    - "Campo libre sin reflexiones dominantes"
    - "Medio homogeneo y sin absorcion apreciable"
  standard_warnings:
    - "En recintos cerrados, el campo reverberante puede dominar"
    - "Los decibelios no se suman linealmente"
    - "La distancia debe estar en metros para usar la relacion de intensidad"

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
      es: Lectura fisica
      en: Physical reading
  coherence:
    enabled: true
    order: 3
    title:
      es: Coherencia
      en: Coherence
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
      es: Lectura del grafico
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
  I:
    magnitude_type: nonnegative_scalar
    semantic_role:
      es: "Densidad de potencia acustica que llega al observador."
      en: "Acoustic power density reaching the observer."
    summary_rules:
      - id: I_summary
        when: "true"
        status: ok
        text:
          es: "[[I]] resume la energia sonora por unidad de area; aumenta con [[P]] y disminuye al crecer [[r]]."
          en: "[[I]] summarizes sound energy per unit area; it increases with [[P]] and decreases as [[r]] grows."
    physical_reading_rules:
      - id: I_reading
        when: "true"
        status: ok
        text:
          es: "Fisicamente, [[I]] indica cuanta energia acustica atraviesa cada metro cuadrado cada segundo."
          en: "Physically, [[I]] indicates how much acoustic energy crosses each square meter each second."
    coherence_rules:
      - id: I_positive
        when: "I > 0"
        status: ok
        text:
          es: "[[I]] positiva es coherente con una onda sonora real."
          en: "Positive [[I]] is coherent with a real sound wave."
    model_validity_rules:
      - id: I_validity
        when: "true"
        status: warning
        text:
          es: "La lectura de [[I]] supone campo libre; paredes, suelo y directividad pueden modificar el valor medido."
          en: "Reading [[I]] assumes free field; walls, ground and directivity can modify the measured value."
    graph_rules:
      - id: I_graph
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[I]] cae con el cuadrado de [[r]], mientras [[L]] baja de forma logaritmica."
          en: "On the graph, [[I]] falls with the square of [[r]], while [[L]] decreases logarithmically."
    likely_errors:
      - id: I_error_units
        when: "true"
        status: warning
        text:
          es: "Error probable: usar centimetros para [[r]] sin convertir a metros."
          en: "Likely error: using centimeters for [[r]] without converting to meters."
    next_step_rules:
      - id: I_next
        when: "true"
        status: ok
        text:
          es: "Convertir [[I]] a [[L]] para interpretar percepcion, normativa o riesgo auditivo."
          en: "Convert [[I]] to [[L]] to interpret perception, regulation or hearing risk."

  L:
    magnitude_type: signed_scalar
    semantic_role:
      es: "Nivel logaritmico que compara [[I]] con [[I_0]]."
      en: "Logarithmic level comparing [[I]] with [[I_0]]."
    summary_rules:
      - id: L_summary
        when: "true"
        status: ok
        text:
          es: "[[L]] expresa en decibelios cuantas veces la intensidad supera la referencia [[I_0]]."
          en: "[[L]] expresses in decibels how many times intensity exceeds reference [[I_0]]."
    physical_reading_rules:
      - id: L_reading
        when: "true"
        status: ok
        text:
          es: "La escala logaritmica comprime grandes cambios de [[I]] en variaciones manejables de [[L]]."
          en: "The logarithmic scale compresses large changes in [[I]] into manageable changes in [[L]]."
    coherence_rules:
      - id: L_range
        when: "L > -20 && L < 140"
        status: ok
        text:
          es: "[[L]] esta en un rango acustico fisiologicamente plausible."
          en: "[[L]] is in a physiologically plausible acoustic range."
    model_validity_rules:
      - id: L_validity
        when: "true"
        status: ok
        text:
          es: "[[L]] es valido si [[I]] es positiva y la referencia [[I_0]] es la adecuada."
          en: "[[L]] is valid if [[I]] is positive and reference [[I_0]] is appropriate."
    graph_rules:
      - id: L_graph
        when: "true"
        status: ok
        text:
          es: "En una grafica de [[L]] frente a [[r]], duplicar distancia reduce el nivel unos 6 dB en campo libre."
          en: "In a graph of [[L]] versus [[r]], doubling distance lowers level by about 6 dB in free field."
    likely_errors:
      - id: L_error_sum
        when: "true"
        status: warning
        text:
          es: "Error probable: sumar niveles en dB directamente en lugar de sumar intensidades."
          en: "Likely error: adding dB levels directly instead of adding intensities."
    next_step_rules:
      - id: L_next
        when: "true"
        status: ok
        text:
          es: "Comparar [[L]] con referencias: conversacion, trafico, concierto y umbral de dolor."
          en: "Compare [[L]] with references: conversation, traffic, concert and pain threshold."

  P:
    magnitude_type: nonnegative_scalar
    semantic_role:
      es: "Potencia acustica emitida por la fuente."
      en: "Acoustic power emitted by the source."
    summary_rules:
      - id: P_summary
        when: "true"
        status: ok
        text:
          es: "[[P]] fija la energia total disponible antes de repartirse sobre la superficie de propagacion."
          en: "[[P]] sets the total available energy before it spreads over the propagation surface."
    physical_reading_rules:
      - id: P_reading
        when: "true"
        status: ok
        text:
          es: "Al duplicar [[P]], se duplica [[I]], pero [[L]] solo aumenta alrededor de 3 dB."
          en: "Doubling [[P]] doubles [[I]], but [[L]] rises by only about 3 dB."
    coherence_rules:
      - id: P_positive
        when: "P >= 0"
        status: ok
        text:
          es: "[[P]] no negativa es coherente con una fuente sonora fisica."
          en: "Nonnegative [[P]] is coherent with a physical sound source."
    model_validity_rules:
      - id: P_validity
        when: "true"
        status: warning
        text:
          es: "La [[P]] acustica radiada no siempre coincide con la potencia electrica del equipo."
          en: "Radiated acoustic [[P]] does not always match the equipment electrical power."
    graph_rules:
      - id: P_graph
        when: "true"
        status: ok
        text:
          es: "A mayor [[P]], toda la curva de nivel se desplaza hacia arriba."
          en: "Higher [[P]] shifts the whole level curve upward."
    likely_errors:
      - id: P_error
        when: "true"
        status: warning
        text:
          es: "Error probable: confundir potencia electrica del amplificador con potencia acustica radiada."
          en: "Likely error: confusing amplifier electrical power with radiated acoustic power."
    next_step_rules:
      - id: P_next
        when: "true"
        status: ok
        text:
          es: "Usar [[P]] junto con [[r]] para estimar [[I]] en el punto de escucha."
          en: "Use [[P]] together with [[r]] to estimate [[I]] at the listening point."

  r:
    magnitude_type: positive_scalar
    semantic_role:
      es: "Distancia radial desde la fuente hasta el observador."
      en: "Radial distance from source to observer."
    summary_rules:
      - id: r_summary
        when: "true"
        status: ok
        text:
          es: "[[r]] controla la dilucion geometrica: si aumenta, [[I]] cae rapidamente."
          en: "[[r]] controls geometric dilution: as it increases, [[I]] falls rapidly."
    physical_reading_rules:
      - id: r_reading
        when: "true"
        status: ok
        text:
          es: "Duplicar [[r]] reparte la misma [[P]] en cuatro veces mas area."
          en: "Doubling [[r]] spreads the same [[P]] over four times more area."
    coherence_rules:
      - id: r_positive
        when: "r > 0"
        status: ok
        text:
          es: "[[r]] positiva es necesaria para una geometria de propagacion fisica."
          en: "Positive [[r]] is necessary for a physical propagation geometry."
    model_validity_rules:
      - id: r_validity
        when: "true"
        status: warning
        text:
          es: "Si [[r]] es comparable al tamano de la fuente, el modelo puntual puede fallar."
          en: "If [[r]] is comparable to source size, the point-source model can fail."
    graph_rules:
      - id: r_graph
        when: "true"
        status: ok
        text:
          es: "El eje horizontal del grafico muestra como [[r]] modula la caida de [[I]] y [[L]]."
          en: "The graph horizontal axis shows how [[r]] modulates the fall of [[I]] and [[L]]."
    likely_errors:
      - id: r_error_units
        when: "true"
        status: warning
        text:
          es: "Error probable: introducir [[r]] en centimetros cuando la formula espera metros."
          en: "Likely error: entering [[r]] in centimeters when the formula expects meters."
    next_step_rules:
      - id: r_next
        when: "true"
        status: ok
        text:
          es: "Probar el efecto de duplicar [[r]] para comprobar la caida de 6 dB."
          en: "Test the effect of doubling [[r]] to check the 6 dB drop."

  I_0:
    magnitude_type: positive_constant
    semantic_role:
      es: "Referencia fisica para definir el nivel en decibelios."
      en: "Physical reference used to define decibel level."
    summary_rules:
      - id: I0_summary
        when: "true"
        status: ok
        text:
          es: "[[I_0]] fija el cero de la escala: 0 dB significa [[I]] igual a [[I_0]]."
          en: "[[I_0]] sets the scale zero: 0 dB means [[I]] equals [[I_0]]."
    physical_reading_rules:
      - id: I0_reading
        when: "true"
        status: ok
        text:
          es: "[[I_0]] representa aproximadamente el umbral de audicion humano para un tono de referencia."
          en: "[[I_0]] approximately represents the human hearing threshold for a reference tone."
    coherence_rules:
      - id: I0_positive
        when: "I_0 > 0"
        status: ok
        text:
          es: "[[I_0]] positiva permite que el cociente logaritmico sea adimensional."
          en: "Positive [[I_0]] makes the logarithmic ratio dimensionless."
    model_validity_rules:
      - id: I0_validity
        when: "true"
        status: ok
        text:
          es: "Usar [[I_0]] estandar para nivel de intensidad sonora; otras referencias cambian el significado del dB."
          en: "Use standard [[I_0]] for sound intensity level; other references change dB meaning."
    graph_rules:
      - id: I0_graph
        when: "true"
        status: ok
        text:
          es: "[[I_0]] determina la posicion vertical de la escala de [[L]]."
          en: "[[I_0]] determines the vertical placement of the [[L]] scale."
    likely_errors:
      - id: I0_error
        when: "true"
        status: warning
        text:
          es: "Error probable: olvidar que [[I_0]] es una referencia fija, no una intensidad medida."
          en: "Likely error: forgetting that [[I_0]] is a fixed reference, not a measured intensity."
    next_step_rules:
      - id: I0_next
        when: "true"
        status: ok
        text:
          es: "Usar [[I_0]] para convertir entre [[I]] y [[L]] sin cambiar de referencia."
          en: "Use [[I_0]] to convert between [[I]] and [[L]] without changing reference."

mini_graph:
  enabled: false
  preferred_type: none
  x_variable: r
  y_variable: I

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
