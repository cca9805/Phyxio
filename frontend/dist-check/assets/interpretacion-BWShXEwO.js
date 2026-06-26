const e=`version: 2
id: interpretacion-peso-en-diferentes-contextos
leaf_id: peso-en-diferentes-contextos
nombre:
  es: Interpretacion de Peso en diferentes contextos
  en: Interpretation of Weight in Different Contexts
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: dinamica
  parent_id: peso
  ruta_relativa: fisica-clasica/mecanica/dinamica/fuerzas/peso/peso-en-diferentes-contextos
dependencies:
  formulas:
  - peso_local_vectorial
  - peso_superficie
  - gravedad_altura
  - gravedad_campo_central
  - peso_aparente_concepto
  magnitudes:
  - P
  - m
  - g
  - Pmod
  - gmod
  - g0
  - h
  - R
  - G
  - M
  - r
  - Pap
  - a
  - N
output_contract:
  sections:
  - summary
  - physical_reading
  - coherence
  - model_validity
  - graph_reading
  - likely_errors
  - next_step
result_blocks:
  summary:
    title:
      es: Resumen físico
      en: Physical summary
  physical_reading:
    title:
      es: Lectura física profunda
      en: Deep physical reading
  coherence:
    title:
      es: Coherencia del resultado
      en: Result coherence
  model_validity:
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    title:
      es: Lectura gráfica
      en: Graph reading
  likely_errors:
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    title:
      es: Siguiente paso
      en: Next step
targets:
  Pap:
    summary_rules:
    - id: Pap_summary_v5
      when: "true"
      status: info
      text:
        es: "El peso aparente resume la carga total que el soporte debe ejercer sobre el cuerpo elásticamente e indica el factor de carga."
        en: "Apparent weight summarizes the total load the support must exert elastically and indicates the load factor."
    physical_reading_rules:
    - id: Pap_causal_v5
      when: "true"
      status: info
      text:
        es: "Porque el marco está acelerado, surge una fuerza de inercia que se suma al peso real; esto indica que la sensación de pesadez depende del estado de movimiento."
        en: "Because the frame is accelerated, an inertial force arises that adds to real weight; this indicates that the feeling of heaviness depends on the state of motion."
    coherence_rules:
    - id: Pap_coherence_v5
      when: "Pap < 0"
      status: error
      text:
        es: "Un peso aparente negativo es físicamente imposible; indica que el cuerpo ha perdido el contacto con el suelo."
        en: "A negative apparent weight is physically impossible; it indicates the body has lost contact with the floor."
    model_validity_rules:
    - id: Pap_validity_v5
      when: "true"
      status: ok
      text:
        es: "Este modelo es válido mientras el cuerpo se asume como indeformable y no se desprecie la aceleración vertical del sistema."
        en: "This model is valid as long as the body is assumed to be undeformable and vertical system acceleration is not neglected."
    graph_rules:
    - id: Pap_graph_v5
      when: "true"
      status: info
      text:
        es: "En el gráfico DCL, la flecha del vector normal N debe ser igual en magnitud a este valor de Pap."
        en: "In the DCL graph, the arrow of the normal vector N must be equal in magnitude to this Pap value."
    likely_errors:
    - id: Pap_errors_v5
      when: "true"
      status: warning
      text:
        es: "Es común confundir el peso real con el aparente u olvidar que la aceleración del marco añade inercia."
        en: "It is common to confuse real weight with apparent weight or forget that frame acceleration adds inertia."
    next_step_rules:
    - id: Pap_next_v5
      when: "true"
      status: info
      text:
        es: "Considera qué pasaría si la aceleración fuera exactamente igual y opuesta a la gravedad (caída libre)."
        en: "Consider what would happen if the acceleration were exactly equal and opposite to gravity (free fall)."

  gmod:
    summary_rules:
    - id: gmod_summary_v5
      when: "true"
      status: info
      text:
        es: "La gravedad local describe la intensidad del campo en el punto exacto e indica el tirón planetario."
        en: "Local gravity describes the field intensity at the exact point and indicates the planetary pull."
    physical_reading_rules:
    - id: gmod_causal_v5
      when: "true"
      status: info
      text:
        es: "Porque el campo gravitatorio emana de la masa central, su intensidad depende inversamente del cuadrado de la distancia r; esto indica que el alejamiento debilita el peso."
        en: "Because the gravitational field emanates from the central mass, its intensity depends inversely on the square of the distance r; this indicates that distance weakens weight."
    coherence_rules:
    - id: gmod_coherence_v5
      when: "true"
      status: ok
      text:
        es: "El valor debe decrecer monótonamente con la distancia al centro según la ley de la inversa del cuadrado."
        en: "The value must decrease monotonically with distance from the center according to the inverse square law."
    model_validity_rules:
    - id: gmod_validity_v5
      when: "true"
      status: ok
      text:
        es: "Es válido mientras se aproxime el astro a una esfera perfecta y se desprecie el efecto de mareas externas."
        en: "It is valid as long as the astronomical body is approximated as a perfect sphere and external tidal effects are neglected."
    graph_rules:
    - id: gmod_graph_v5
      when: "true"
      status: info
      text:
        es: "La pendiente de la curva de potencial en el gráfico indica el valor de esta intensidad de campo."
        en: "The slope of the potential curve in the graph indicates the value of this field intensity."
    likely_errors:
    - id: gmod_errors_v5
      when: "true"
      status: warning
      text:
        es: "Muchos alumnos creen que la gravedad desaparece al salir de la atmósfera o suelen confundir h con r."
        en: "Many students believe that gravity disappears when leaving the atmosphere or often confuse h with r."
    next_step_rules:
    - id: gmod_next_v5
      when: "true"
      status: info
      text:
        es: "Explora cómo este valor afecta orbitalmente a la velocidad necesaria para mantener una trayectoria circular."
        en: "Explore how this value orbitally affects the speed required to maintain a circular trajectory."

  Pmod:
    summary_rules:
    - id: Pmod_summary_v5
      when: "true"
      status: info
      text:
        es: "El módulo del peso indica la fuerza gravitatoria total e invariable ante cambios de aceleración del marco."
        en: "Weight magnitude indicates the total gravitational force, invariant to changes in frame acceleration."
    physical_reading_rules:
    - id: Pmod_causal_v5
      when: "true"
      status: info
      text:
        es: "Porque existe una interacción entre masas, el peso real depende solo de m y del campo local; esto indica que es una propiedad del sistema cuerpo-astro."
        en: "Because an interaction between masses exists, real weight depends only on m and the local field; this indicates it is a property of the body-astro system."
    coherence_rules:
    - id: Pmod_coherence_v5
      when: "true"
      status: ok
      text:
        es: "Debe ser proporcional a la masa del objeto m en cualquier contexto de campo uniforme."
        en: "It must be proportional to the object's mass m in any uniform field context."
    model_validity_rules:
    - id: Pmod_validity_v5
      when: "true"
      status: ok
      text:
        es: "Este modelo es válido mientras se asuma una masa puntual y se desprecie la estructura interna del cuerpo."
        en: "This model is valid as long as a point mass is assumed and the body's internal structure is neglected."
    graph_rules:
    - id: Pmod_graph_v5
      when: "true"
      status: info
      text:
        es: "En el diagrama, este valor se asocia al vector que siempre apunta hacia el centro del gráfico planetario."
        en: "In the diagram, this value is associated with the vector that always points toward the center of the planetary graph."
    likely_errors:
    - id: Pmod_errors_v5
      when: "true"
      status: warning
      text:
        es: "Confundir el peso real con la masa es un error clásico que lleva a creer que el peso no cambia en la Luna."
        en: "Confusing real weight with mass is a classic mistake leading to the belief that weight does not change on the Moon."
    next_step_rules:
    - id: Pmod_next_v5
      when: "true"
      status: info
      text:
        es: "Analiza qué sucede con el peso a una distancia infinita del astro central."
        en: "Analyze what happens to weight at an infinite distance from the central body."

  P:
    summary_rules: [{id: P_sum, when: "true", status: info, text: {es: "El peso vectorial indica la dirección y sentido de la atracción.", en: "Vector weight indicates the direction and sense of the attraction."}}]
    physical_reading_rules: [{id: P_phys, when: "true", status: info, text: {es: "Porque el peso es una fuerza real, su valor depende solo de la interacción de masas.", en: "Because weight is a real force, its value depends only on mass interaction."}}]
    coherence_rules: [{id: P_coh, when: "true", status: ok, text: {es: "Suelo coherente.", en: "Consistent ground."}}]
    model_validity_rules: [{id: P_val, when: "true", status: ok, text: {es: "Modelo de Newton válido.", en: "Valid Newton model."}}]
    graph_rules: [{id: P_gra, when: "true", status: info, text: {es: "Se ve en el gráfico como vector.", en: "Seen in graph as vector."}}]
    likely_errors: [{id: P_err, when: "true", status: warning, text: {es: "Confundir con normal.", en: "Confuse with normal."}}]
    next_step_rules: [{id: P_nxt, when: "true", status: info, text: {es: "Sigue estudiando.", en: "Keep studying."}}]

  m:
    summary_rules: [{id: m_sum, when: "true", status: info, text: {es: "La masa es la inercia del cuerpo ante cambios de movimiento.", en: "Mass is the body's inertia against changes in motion."}}]
    physical_reading_rules: [{id: m_phys, when: "true", status: info, text: {es: "Porque la masa es invariante, no depende de la gravedad del planeta.", en: "Because mass is invariant, it does not depend on the planet's gravity."}}]
    coherence_rules: [{id: m_coh, when: "true", status: ok, text: {es: "Masa positiva.", en: "Positive mass."}}]
    model_validity_rules: [{id: m_val, when: "true", status: ok, text: {es: "Mecánica clásica.", en: "Classical mechanics."}}]
    graph_rules: [{id: m_gra, when: "true", status: info, text: {es: "Se asocia al tamaño del objeto.", en: "Associated with object size."}}]
    likely_errors: [{id: m_err, when: "true", status: warning, text: {es: "Creer que cambia.", en: "Believe it changes."}}]
    next_step_rules: [{id: m_nxt, when: "true", status: info, text: {es: "Relatividad.", en: "Relativity."}}]

  g:
    summary_rules: [{id: g_sum, when: "true", status: info, text: {es: "Campo gravitatorio vectorial en la zona.", en: "Vector gravitational field in the zone."}}]
    physical_reading_rules: [{id: g_phys, when: "true", status: info, text: {es: "Porque es un campo, existe aunque no haya un cuerpo de prueba.", en: "Because it's a field, it exists even if there's no test body."}}]
    coherence_rules: [{id: g_coh, when: "true", status: ok, text: {es: "Campo entrante.", en: "Inward field."}}]
    model_validity_rules: [{id: g_val, when: "true", status: ok, text: {es: "Simetría esférica.", en: "Spherical symmetry."}}]
    graph_rules: [{id: g_gra, when: "true", status: info, text: {es: "Líneas de campo en el gráfico.", en: "Field lines in the graph."}}]
    likely_errors: [{id: g_err, when: "true", status: warning, text: {es: "Confundir con G.", en: "Confuse with G."}}]
    next_step_rules: [{id: g_nxt, when: "true", status: info, text: {es: "Potencial.", en: "Potential."}}]

  g0:
    summary_rules: [{id: g0_sum, when: "true", status: info, text: {es: "Gravedad de referencia en la superficie.", en: "Reference surface gravity."}}]
    physical_reading_rules: [{id: g0_phys, when: "true", status: info, text: {es: "Porque es un valor de superficie, depende de M y R.", en: "Because it's a surface value, it depends on M and R."}}]
    coherence_rules: [{id: g0_coh, when: "true", status: ok, text: {es: "Valor único por astro.", en: "Unique value per body."}}]
    model_validity_rules: [{id: g0_val, when: "true", status: ok, text: {es: "Cuerpo uniforme.", en: "Uniform body."}}]
    graph_rules: [{id: g0_gra, when: "true", status: info, text: {es: "Nivel cero del gráfico.", en: "Zero level in graph."}}]
    likely_errors: [{id: g0_err, when: "true", status: warning, text: {es: "Usar 9.8 siempre.", en: "Use 9.8 always."}}]
    next_step_rules: [{id: g0_nxt, when: "true", status: info, text: {es: "Altura.", en: "Altitude."}}]

  h:
    summary_rules: [{id: h_sum, when: "true", status: info, text: {es: "Altura radial sobre la superficie.", en: "Radial height above surface."}}]
    physical_reading_rules: [{id: h_phys, when: "true", status: info, text: {es: "Porque indica alejamiento, disminuye el peso real.", en: "Because it indicates distancing, it decreases real weight."}}]
    coherence_rules: [{id: h_coh, when: "true", status: ok, text: {es: "Altura positiva.", en: "Positive height."}}]
    model_validity_rules: [{id: h_val, when: "true", status: ok, text: {es: "Fuera del astro.", en: "Outside the body."}}]
    graph_rules: [{id: h_gra, when: "true", status: info, text: {es: "Eje horizontal del gráfico.", en: "Horizontal axis in graph."}}]
    likely_errors: [{id: h_err, when: "true", status: warning, text: {es: "No sumar R.", en: "Not adding R."}}]
    next_step_rules: [{id: h_nxt, when: "true", status: info, text: {es: "Órbitas.", en: "Orbits."}}]

  M:
    summary_rules: [{id: M_sum, when: "true", status: info, text: {es: "Masa del astro generador del campo.", en: "Mass of the body generating the field."}}]
    physical_reading_rules: [{id: M_phys, when: "true", status: info, text: {es: "Porque es la fuente del campo, domina la intensidad.", en: "Because it's the field source, it dominates intensity."}}]
    coherence_rules: [{id: M_coh, when: "true", status: ok, text: {es: "Masa estelar.", en: "Stellar mass."}}]
    model_validity_rules: [{id: M_val, when: "true", status: ok, text: {es: "Objeto masivo.", en: "Massive object."}}]
    graph_rules: [{id: M_gra, when: "true", status: info, text: {es: "Tamaño del planeta en gráfico.", en: "Planet size in graph."}}]
    likely_errors: [{id: M_err, when: "true", status: warning, text: {es: "Confundir con m.", en: "Confuse with m."}}]
    next_step_rules: [{id: M_nxt, when: "true", status: info, text: {es: "Densidad.", en: "Density."}}]

  r:
    summary_rules: [{id: r_sum, when: "true", status: info, text: {es: "Distancia total al centro de masas.", en: "Total distance to center of mass."}}]
    physical_reading_rules: [{id: r_phys, when: "true", status: info, text: {es: "Porque define la métrica local, determina g.", en: "Because it defines the local metric, it determines g."}}]
    coherence_rules: [{id: r_coh, when: "true", status: ok, text: {es: "Distancia real.", en: "Real distance."}}]
    model_validity_rules: [{id: r_val, when: "true", status: ok, text: {es: "Espacio euclídeo.", en: "Euclidean space."}}]
    graph_rules: [{id: r_gra, when: "true", status: info, text: {es: "Coordenada radial en gráfico.", en: "Radial coordinate in graph."}}]
    likely_errors: [{id: r_err, when: "true", status: warning, text: {es: "Usar h.", en: "Use h."}}]
    next_step_rules: [{id: r_nxt, when: "true", status: info, text: {es: "Potencial.", en: "Potential."}}]

  a:
    summary_rules: [{id: a_sum, when: "true", status: info, text: {es: "Aceleración propia del marco vertical.", en: "Frame's proper vertical acceleration."}}]
    physical_reading_rules: [{id: a_phys, when: "true", status: info, text: {es: "Porque es un marco no inercial, surge fuerza ficticia.", en: "Because it's a non-inertial frame, a fictitious force arises."}}]
    coherence_rules: [{id: a_coh, when: "true", status: ok, text: {es: "Valor dinámico.", en: "Dynamic value."}}]
    model_validity_rules: [{id: a_val, when: "true", status: ok, text: {es: "Marco rígido.", en: "Rigid frame."}}]
    graph_rules: [{id: a_gra, when: "true", status: info, text: {es: "Vector de movimiento del marco.", en: "Frame movement vector."}}]
    likely_errors: [{id: a_err, when: "true", status: warning, text: {es: "Ignorar signo.", en: "Ignore sign."}}]
    next_step_rules: [{id: a_nxt, when: "true", status: info, text: {es: "Ecuaciones.", en: "Equations."}}]
`;export{e as default};
