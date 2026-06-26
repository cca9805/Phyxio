const n=`\uFEFFversion: 1
id: interpretacion-bloque-colgante
leaf_id: bloque-colgante
nombre:
  es: Interpretacion de bloque colgante
  en: Interpretation of hanging block
scope:
  es: Lectura causal entre tension, peso, aceleracion y altura en sistemas suspendidos.
  en: Causal reading among tension, weight, acceleration, and height in suspended systems.
dependencies:
  magnitudes:
  - m
  - T
  - W
  - g
  - a
  - h
  - E_p
  formulas:
  - peso_gravitatorio
  - dinamica_vertical
  - tension_aceleracion
  - equilibrio_vertical
  - energia_potencial
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
      es: Resumen
      en: Summary
  physical_reading:
    title:
      es: Lectura fisica
      en: Physical reading
  coherence:
    title:
      es: Coherencia fisica
      en: Physical coherence
  model_validity:
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    title:
      es: Lectura del grafico
      en: Graph reading
  likely_errors:
    title:
      es: Errores comunes
      en: Common errors
  next_step:
    title:
      es: Siguiente paso
      en: Next step
targets:
  W:
    summary_rules:
    - id: W_summary
      when: always
      status: info
      text:
        es: W mide la carga gravitatoria que tira del bloque hacia abajo.
        en: W measures gravitational load pulling block downward.
    coherence_rules:
    - id: W_coherence
      when: W >= 0
      status: ok
      text:
        es: Un modulo no negativo es coherente para el peso.
        en: A non-negative magnitude is coherent for weight.
    physical_reading_rules:
    - id: W_physical
      when: always
      status: info
      text:
        es: Si W aumenta con m, el cable debe soportar mas carga base.
        en: If W increases with m, the rope must bear more baseline load.
    model_validity_rules:
    - id: W_validity
      when: always
      status: info
      text:
        es: Se asume gravedad local aproximadamente uniforme.
        en: Approximately uniform local gravity is assumed.
    graph_rules:
    - id: W_graph
      when: always
      status: info
      text:
        es: W desplaza la recta de equilibrio entre tension y aceleracion.
        en: W shifts equilibrium line between tension and acceleration.
    likely_errors:
    - id: W_error
      when: always
      status: warning
      text:
        es: Error comun - tratar W como si fuera masa.
        en: Common error - treating W as if it were mass.
    next_step_rules:
    - id: W_next
      when: always
      status: info
      text:
        es: Usa W junto con T para inferir sentido de a.
        en: Use W with T to infer direction of a.
  T:
    summary_rules:
    - id: T_summary
      when: always
      status: info
      text:
        es: T es la variable de esfuerzo principal del cable.
        en: T is the main rope effort variable.
    coherence_rules:
    - id: T_coherence
      when: T >= 0
      status: ok
      text:
        es: T no negativa es coherente con traccion del vinculo.
        en: Non-negative T is coherent with link traction.
    physical_reading_rules:
    - id: T_physical
      when: always
      status: info
      text:
        es: Si T supera W en convenio habitual, el bloque acelera hacia arriba.
        en: If T exceeds W in common convention, block accelerates upward.
    model_validity_rules:
    - id: T_validity
      when: always
      status: info
      text:
        es: La lectura supone cuerda ideal y sin holguras relevantes.
        en: Reading assumes ideal rope and no relevant slack.
    graph_rules:
    - id: T_graph
      when: always
      status: info
      text:
        es: T define la posicion vertical del punto en el grafico T(a).
        en: T defines vertical position of point in T(a) graph.
    likely_errors:
    - id: T_error
      when: always
      status: warning
      text:
        es: Error comun - imponer T = W incluso cuando a no es cero.
        en: Common error - forcing T = W even when a is not zero.
    next_step_rules:
    - id: T_next
      when: always
      status: info
      text:
        es: Contrasta T con limite de seguridad del cable real.
        en: Contrast T with real rope safety limit.
  a:
    summary_rules:
    - id: a_summary
      when: always
      status: info
      text:
        es: a resume el resultado dinamico del bloque suspendido.
        en: a summarizes dynamic result of suspended block.
    coherence_rules:
    - id: a_coherence
      when: a <= 20 and a >= -20
      status: ok
      text:
        es: El valor esta en rango razonable para problemas base.
        en: Value is in reasonable range for base problems.
    physical_reading_rules:
    - id: a_physical
      when: always
      status: info
      text:
        es: El signo de a depende del eje y del balance T-W.
        en: Sign of a depends on axis and T-W balance.
    model_validity_rules:
    - id: a_validity
      when: always
      status: info
      text:
        es: Se asume que no hay arrastre dominante del aire.
        en: It assumes no dominant air drag.
    graph_rules:
    - id: a_graph
      when: always
      status: info
      text:
        es: La posicion horizontal del punto indica regimen de ascenso o descenso.
        en: Point horizontal position indicates ascent or descent regime.
    likely_errors:
    - id: a_error
      when: always
      status: warning
      text:
        es: Error comun - olvidar el signo de a durante frenado.
        en: Common error - forgetting sign of a during braking.
    next_step_rules:
    - id: a_next
      when: always
      status: info
      text:
        es: Usa a para conectar con tiempo de maniobra y distancia.
        en: Use a to connect with maneuver time and distance.
  E_p:
    summary_rules:
    - id: Ep_summary
      when: always
      status: info
      text:
        es: E_p permite leer costo energetico del cambio de altura.
        en: E_p allows reading energetic cost of height change.
    coherence_rules:
    - id: Ep_coherence
      when: always
      status: ok
      text:
        es: E_p debe ser consistente con el origen elegido para h.
        en: E_p must be consistent with chosen origin for h.
    physical_reading_rules:
    - id: Ep_physical
      when: always
      status: info
      text:
        es: Al subir h, normalmente aumenta E_p para g positiva.
        en: As h rises, E_p usually increases for positive g.
    model_validity_rules:
    - id: Ep_validity
      when: always
      status: info
      text:
        es: Se usa campo gravitatorio aproximadamente uniforme.
        en: Approximately uniform gravitational field is used.
    graph_rules:
    - id: Ep_graph
      when: always
      status: info
      text:
        es: E_p puede representarse como recta en funcion de h.
        en: E_p can be represented as a line versus h.
    likely_errors:
    - id: Ep_error
      when: always
      status: warning
      text:
        es: Error comun - cambiar referencia de h sin ajustar E_p.
        en: Common error - changing h reference without adjusting E_p.
    next_step_rules:
    - id: Ep_next
      when: always
      status: info
      text:
        es: Combina E_p con energia cinetica para balance mecanico total.
        en: Combine E_p with kinetic energy for total mechanical balance.\r
\r
\r
`;export{n as default};
