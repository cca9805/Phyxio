const e=`version: 1\r
id: interpretacion-definicion-momento-de-inercia\r
leaf_id: definicion-momento-de-inercia\r
nombre:\r
  es: Interpretacion de definicion de momento de inercia\r
  en: Interpretation of moment of inertia definition\r
scope:\r
  es: lectura numerica, coherencia fisica, validez del modelo y errores comunes\r
  en: numerical reading, physical coherence, model validity, and common errors\r
dependencies:
  magnitudes:
  - I
  - K_rot
  - alpha
  - k
  - dm
  - m
  - m_i
  - omega
  - r
  - r_i
  - rho
  - tau
  formulas:\r
  - definicion_continua\r
  - definicion_discreta\r
  - energia_rotacional\r
  - radio_giro\r
  - segunda_ley_rotacional\r
output_contract:\r
  sections:\r
  - summary\r
  - physical_reading\r
  - coherence\r
  - model_validity\r
  - graph_reading\r
  - likely_errors\r
  - next_step\r
result_blocks:\r
  summary:\r
    title:\r
      es: Resumen\r
      en: Summary\r
  physical_reading:\r
    title:\r
      es: Lectura fisica\r
      en: Physical reading\r
  coherence:\r
    title:\r
      es: Coherencia fisica\r
      en: Physical coherence\r
  model_validity:\r
    title:\r
      es: Validez del modelo\r
      en: Model validity\r
  graph_reading:\r
    title:\r
      es: Lectura del grafico\r
      en: Graph reading\r
  likely_errors:\r
    title:\r
      es: Errores comunes\r
      en: Common errors\r
  next_step:\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
targets:\r
  I:\r
    summary_rules:\r
    - id: I_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: I cuantifica la resistencia al cambio de estado rotacional.\r
        en: I quantifies resistance to changes in rotational state.\r
    coherence_rules:\r
    - id: I_coherence_positive\r
      when: I > 0\r
      status: ok\r
      text:\r
        es: I debe ser positiva para un sistema fisico real.\r
        en: I must be positive for a real physical system.\r
    physical_reading_rules:
    - id: I_physical_main
      when: 'true'
      status: info
      text:
        es: I mide cuanta dificultad tiene el cuerpo para cambiar su giro respecto a un eje concreto; aumenta cuando la masa se aleja del eje y por eso reduce alpha para el mismo torque.
        en: I measures how difficult it is for the body to change its rotation about a specific axis; it increases when mass moves farther from the axis and therefore reduces alpha for the same torque.
    model_validity_rules:\r
    - id: I_validity_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Valido para cuerpo rigido y eje bien definido.\r
        en: Valid for a rigid body and a well-defined axis.\r
    graph_rules:\r
    - id: I_graph_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En grafico, I cambia la pendiente de alpha frente a tau.\r
        en: In graph reading, I changes the slope of alpha versus tau.\r
    likely_errors:\r
    - id: I_error_units\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error comun: mezclar gramos con kilogramos en la masa.'\r
        en: 'Common error: mixing grams and kilograms in mass input.'\r
    next_step_rules:\r
    - id: I_next_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa I para estimar alpha con la segunda ley rotacional.\r
        en: Use I to estimate alpha with rotational second law.\r
  alpha:\r
    summary_rules:\r
    - id: alpha_summary_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Alpha describe la aceleracion angular del sistema.\r
        en: Alpha describes the system angular acceleration.\r
    coherence_rules:\r
    - id: alpha_coherence_sign\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: El signo de alpha debe ser coherente con el signo de tau.\r
        en: Alpha sign must be consistent with tau sign.\r
    physical_reading_rules:
    - id: alpha_physical_main
      when: 'true'
      status: info
      text:
        es: Alpha es la respuesta dinamica del sistema; si sube no significa que haya mas masa, sino que el torque domina sobre la inercia rotacional respecto a ese eje.
        en: Alpha is the system's dynamic response; if it increases, it does not mean there is more mass, but that torque dominates over rotational inertia about that axis.
    model_validity_rules:\r
    - id: alpha_validity_main\r
      when: I > 0\r
      status: info\r
      text:\r
        es: La lectura requiere I positiva y eje de referencia fijo.\r
        en: This reading requires positive I and a fixed reference axis.\r
    graph_rules:\r
    - id: alpha_graph_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Con torque constante, alpha tiende a mantenerse estable.\r
        en: With constant torque, alpha tends to remain stable.\r
    likely_errors:\r
    - id: alpha_error_confusion\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error comun: confundir alpha con omega.'\r
        en: 'Common error: confusing alpha with omega.'\r
    next_step_rules:\r
    - id: alpha_next_main\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Integra alpha para estimar la evolucion temporal de omega.\r
        en: Integrate alpha to estimate time evolution of omega.\r
  K_rot:\r
    summary_rules:\r
    - id: K_rot_summary\r
      when: always\r
      status: info\r
      text:\r
        es: 'K_rot: lectura resumida disponible.'\r
        en: 'K_rot: summary reading available.'\r
    coherence_rules:\r
    - id: K_rot_coherence\r
      when: always\r
      status: info\r
      text:\r
        es: 'K_rot: verificar coherencia con el resto de variables.'\r
        en: 'K_rot: check coherence with the rest of the variables.'\r
    physical_reading_rules:\r
    - id: K_rot_physical\r
      when: always\r
      status: info\r
      text:\r
        es: 'K_rot: interpretar en el contexto f?sico del problema.'\r
        en: 'K_rot: interpret within the physical context of the problem.'\r
    model_validity_rules:\r
    - id: K_rot_validity\r
      when: always\r
      status: info\r
      text:\r
        es: 'K_rot: confirmar hip?tesis y rango de validez del modelo.'\r
        en: 'K_rot: confirm assumptions and model validity range.'\r
    graph_rules:\r
    - id: K_rot_graph\r
      when: always\r
      status: info\r
      text:\r
        es: 'K_rot: revisar correspondencia con la representaci?n gr?fica.'\r
        en: 'K_rot: review consistency with the graphical representation.'\r
    likely_errors:\r
    - id: K_rot_likely_error\r
      when: always\r
      status: warn\r
      text:\r
        es: 'Error com?n: usar K_rot sin revisar signo, unidades o dominio.'\r
        en: 'Common error: using K_rot without checking sign, units, or domain.'\r
    next_step_rules:\r
    - id: K_rot_next_step\r
      when: always\r
      status: info\r
      text:\r
        es: 'Siguiente paso: contrastar K_rot con una ecuaci?n independiente.'\r
        en: 'Next step: cross-check K_rot with an independent equation.'\r
  k:
    summary_rules:\r
    - id: k_summary\r
      when: always\r
      status: info\r
      text:\r
        es: 'k: lectura resumida disponible.'\r
        en: 'k: summary reading available.'\r
    coherence_rules:\r
    - id: k_coherence\r
      when: always\r
      status: info\r
      text:\r
        es: 'k: verificar coherencia con el resto de variables.'\r
        en: 'k: check coherence with the rest of the variables.'\r
    physical_reading_rules:
    - id: k_physical
      when: always
      status: info
      text:
        es: 'k resume la geometria en una distancia equivalente: concentra toda la masa en un radio ficticio que conserva el mismo I respecto al eje elegido.'
        en: 'k summarizes geometry into an equivalent distance: it concentrates all mass at a fictitious radius that preserves the same I about the chosen axis.'
    model_validity_rules:\r
    - id: k_validity\r
      when: always\r
      status: info\r
      text:\r
        es: 'k: confirmar hip?tesis y rango de validez del modelo.'\r
        en: 'k: confirm assumptions and model validity range.'\r
    graph_rules:\r
    - id: k_graph\r
      when: always\r
      status: info\r
      text:\r
        es: 'k: revisar correspondencia con la representaci?n gr?fica.'\r
        en: 'k: review consistency with the graphical representation.'\r
    likely_errors:\r
    - id: k_likely_error\r
      when: always\r
      status: warn\r
      text:\r
        es: 'Error com?n: usar k sin revisar signo, unidades o dominio.'\r
        en: 'Common error: using k without checking sign, units, or domain.'\r
    next_step_rules:\r
    - id: k_next_step\r
      when: always\r
      status: info\r
      text:\r
        es: 'Siguiente paso: contrastar k con una ecuaci?n independiente.'\r
        en: 'Next step: cross-check k with an independent equation.'\r
  m:
    summary_rules:\r
    - id: m_summary\r
      when: always\r
      status: info\r
      text:\r
        es: 'm: lectura resumida disponible.'\r
        en: 'm: summary reading available.'\r
    coherence_rules:\r
    - id: m_coherence\r
      when: always\r
      status: info\r
      text:\r
        es: 'm: verificar coherencia con el resto de variables.'\r
        en: 'm: check coherence with the rest of the variables.'\r
    physical_reading_rules:
    - id: m_physical
      when: always
      status: info
      text:
        es: m fija cuanta materia hay, pero no determina por si sola la inercia rotacional; la distribucion espacial decide como entra en I.
        en: m fixes how much matter there is, but it does not determine rotational inertia by itself; spatial distribution decides how it enters I.
    model_validity_rules:\r
    - id: m_validity\r
      when: always\r
      status: info\r
      text:\r
        es: 'm: confirmar hip?tesis y rango de validez del modelo.'\r
        en: 'm: confirm assumptions and model validity range.'\r
    graph_rules:\r
    - id: m_graph\r
      when: always\r
      status: info\r
      text:\r
        es: 'm: revisar correspondencia con la representaci?n gr?fica.'\r
        en: 'm: review consistency with the graphical representation.'\r
    likely_errors:\r
    - id: m_likely_error\r
      when: always\r
      status: warn\r
      text:\r
        es: 'Error com?n: usar m sin revisar signo, unidades o dominio.'\r
        en: 'Common error: using m without checking sign, units, or domain.'\r
    next_step_rules:\r
    - id: m_next_step\r
      when: always\r
      status: info\r
      text:\r
        es: 'Siguiente paso: contrastar m con una ecuaci?n independiente.'\r
        en: 'Next step: cross-check m with an independent equation.'\r
  omega:
    summary_rules:\r
    - id: omega_summary\r
      when: always\r
      status: info\r
      text:\r
        es: 'omega: lectura resumida disponible.'\r
        en: 'omega: summary reading available.'\r
    coherence_rules:\r
    - id: omega_coherence\r
      when: always\r
      status: info\r
      text:\r
        es: 'omega: verificar coherencia con el resto de variables.'\r
        en: 'omega: check coherence with the rest of the variables.'\r
    physical_reading_rules:
    - id: omega_physical
      when: always
      status: info
      text:
        es: omega no define I, pero junto con I determina cuanta energia rotacional almacena el sistema.
        en: omega does not define I, but together with I it determines how much rotational energy the system stores.
    model_validity_rules:\r
    - id: omega_validity\r
      when: always\r
      status: info\r
      text:\r
        es: 'omega: confirmar hip?tesis y rango de validez del modelo.'\r
        en: 'omega: confirm assumptions and model validity range.'\r
    graph_rules:\r
    - id: omega_graph\r
      when: always\r
      status: info\r
      text:\r
        es: 'omega: revisar correspondencia con la representaci?n gr?fica.'\r
        en: 'omega: review consistency with the graphical representation.'\r
    likely_errors:\r
    - id: omega_likely_error\r
      when: always\r
      status: warn\r
      text:\r
        es: 'Error com?n: usar omega sin revisar signo, unidades o dominio.'\r
        en: 'Common error: using omega without checking sign, units, or domain.'\r
    next_step_rules:\r
    - id: omega_next_step\r
      when: always\r
      status: info\r
      text:\r
        es: 'Siguiente paso: contrastar omega con una ecuaci?n independiente.'\r
        en: 'Next step: cross-check omega with an independent equation.'\r
  tau:
    summary_rules:
    - id: tau_summary\r
      when: always\r
      status: info\r
      text:\r
        es: 'tau: lectura resumida disponible.'\r
        en: 'tau: summary reading available.'\r
    coherence_rules:\r
    - id: tau_coherence\r
      when: always\r
      status: info\r
      text:\r
        es: 'tau: verificar coherencia con el resto de variables.'\r
        en: 'tau: check coherence with the rest of the variables.'\r
    physical_reading_rules:
    - id: tau_physical
      when: always
      status: info
      text:
        es: tau es la causa externa del cambio de giro; su efecto sobre alpha solo puede leerse correctamente cuando I ya esta bien definido para ese eje.
        en: tau is the external cause of rotational change; its effect on alpha can only be read correctly once I is properly defined for that axis.
    model_validity_rules:
    - id: tau_validity
      when: always
      status: info
      text:
        es: 'tau debe interpretarse junto con un eje definido, un signo coherente y un valor de I valido para ese modelo.'
        en: 'tau must be interpreted together with a defined axis, a consistent sign convention, and a value of I that is valid for the chosen model.'
    graph_rules:
    - id: tau_graph
      when: always
      status: info
      text:
        es: 'En el grafico, el mismo tau produce menos alpha cuando la masa esta mas alejada del eje y I aumenta.'
        en: 'In the graph, the same tau produces less alpha when mass is farther from the axis and I increases.'
    likely_errors:
    - id: tau_likely_error
      when: always
      status: warn
      text:
        es: 'Error comun: comparar tau entre sistemas sin comprobar si el eje, el signo y el momento de inercia son equivalentes.'
        en: 'Common error: comparing tau across systems without checking whether the axis, sign convention, and moment of inertia are equivalent.'
    next_step_rules:
    - id: tau_next_step
      when: always
      status: info
      text:
        es: 'Siguiente paso: combinar tau con I mediante la segunda ley rotacional para estimar alpha.'
        en: 'Next step: combine tau with I through the rotational second law to estimate alpha.'

  m_i:
    summary_rules:
    - id: m_i_summary
      when: always
      status: info
      text:
        es: m_i es la masa de cada particula en la suma discreta.
        en: m_i is the mass of each particle in the discrete sum.
    coherence_rules:
    - id: m_i_coherence
      when: always
      status: ok
      text:
        es: Cada m_i debe ser positiva para que la suma discreta tenga sentido fisico.
        en: Each m_i must be positive for the discrete sum to make physical sense.
    physical_reading_rules:
    - id: m_i_physical
      when: always
      status: info
      text:
        es: m_i no aporta por igual a I; su efecto depende del cuadrado de su distancia r_i al eje, de modo que una particula lejana puede dominar la suma.
        en: m_i does not contribute equally to I; its effect depends on the square of its distance r_i from the axis, so a distant particle can dominate the sum.
    model_validity_rules:
    - id: m_i_validity
      when: always
      status: info
      text:
        es: Valido cuando el sistema puede modelarse como conjunto discreto de masas puntuales.
        en: Valid when the system can be modeled as a discrete set of point masses.
    graph_rules:
    - id: m_i_graph
      when: always
      status: info
      text:
        es: El grafico debe sugerir que la masa periferica pesa mas en I que la masa cercana al eje.
        en: The graph should suggest that peripheral mass weighs more in I than mass near the axis.
    likely_errors:
    - id: m_i_error
      when: always
      status: warn
      text:
        es: 'Error comun: sumar m_i sin multiplicar por r_i^2.'
        en: 'Common error: summing m_i without multiplying by r_i^2.'
    next_step_rules:
    - id: m_i_next
      when: always
      status: info
      text:
        es: Usa m_i junto con r_i para construir la definicion_discreta.
        en: Use m_i together with r_i to build the discrete definition.

  dm:
    summary_rules:
    - id: dm_summary
      when: always
      status: info
      text:
        es: dm es el elemento diferencial de masa en la definicion continua.
        en: dm is the differential mass element in the continuous definition.
    coherence_rules:
    - id: dm_coherence
      when: always
      status: ok
      text:
        es: dm debe interpretarse como parte infinitesimal de una distribucion continua, no como masa total.
        en: dm must be interpreted as an infinitesimal part of a continuous distribution, not as total mass.
    physical_reading_rules:
    - id: dm_physical
      when: always
      status: info
      text:
        es: 'dm conecta geometria y materia: cada porcion de masa aporta a I segun r^2, por eso la definicion continua traduce la forma del cuerpo en inercia rotacional.'
        en: 'dm connects geometry and matter: each mass portion contributes to I according to r^2, so the continuous definition translates body shape into rotational inertia.'
    model_validity_rules:
    - id: dm_validity
      when: always
      status: info
      text:
        es: Valido para cuerpos continuos con densidad conocida o modelable.
        en: Valid for continuous bodies with known or modelable density.
    graph_rules:
    - id: dm_graph
      when: always
      status: info
      text:
        es: El grafico debe ayudar a leer que la periferia aporta mas a I porque cada dm se pondera con r^2.
        en: The graph should help read that the periphery contributes more to I because each dm is weighted by r^2.
    likely_errors:
    - id: dm_error
      when: always
      status: warn
      text:
        es: 'Error comun: usar dm como si fuera la masa total o suponer densidad uniforme sin justificarla.'
        en: 'Common error: using dm as if it were total mass or assuming uniform density without justification.'
    next_step_rules:
    - id: dm_next
      when: always
      status: info
      text:
        es: Expresa dm mediante rho y la geometria antes de integrar la definicion_continua.
        en: Express dm through rho and geometry before integrating the continuous definition.
`;export{e as default};
