const e=`\uFEFFversion: 1\r
id: interpretacion-analogia-lineal-angular\r
leaf_id: analogia-lineal-angular\r
\r
nombre:\r
  es: Interpretación de la analogía lineal-angular\r
  en: Interpretation of the linear-angular analogy\r
\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: rotacion\r
  parent_id: fundamentos\r
  ruta_relativa: fisica-clasica/mecanica/rotacion/fundamentos/analogia-lineal-angular\r
\r
ui:\r
  enabled: true\r
  display_modes:\r
    calculator_inline: true\r
    graph_inline: true\r
    dedicated_tab: true\r
    modal: false\r
  labels:\r
    es: Interpretación\r
    en: Interpretation\r
  priority_order:\r
    - summary\r
    - physical_reading\r
    - coherence\r
    - model_validity\r
    - graph_reading\r
    - likely_errors\r
    - next_step\r
  inline_limits:\r
    max_messages: 3\r
    prefer_summary: true\r
\r
dependencies:\r
  formulas:\r
    - segunda_ley_newton\r
    - segunda_ley_rotacional\r
    - correspondencia_lineal_angular\r
  magnitudes:\r
    - F\r
    - m\r
    - a\r
    - tau\r
    - I\r
    - alpha\r
\r
global_context:\r
  physical_domain:\r
    es: Dinámica clásica traslacional y rotacional de cuerpos rígidos.\r
    en: Classical translational and rotational dynamics of rigid bodies.\r
  axis_convention:\r
    es: El signo positivo angular se define según el eje elegido y la regla de la mano derecha.\r
    en: Positive angular sign is defined by the chosen axis and the right-hand rule.\r
  standard_assumptions:\r
    - es: Se trabaja en régimen clásico.\r
      en: Classical regime is assumed.\r
    - es: El eje de rotación está definido antes de interpretar torque, momento de inercia o aceleración angular.\r
      en: The rotation axis is defined before interpreting torque, moment of inertia, or angular acceleration.\r
    - es: La analogía es estructural, no una identidad física entre magnitudes.\r
      en: The analogy is structural, not a physical identity between quantities.\r
  standard_warnings:\r
    - es: No trates masa y momento de inercia como magnitudes equivalentes.\r
      en: Do not treat mass and moment of inertia as equivalent quantities.\r
    - es: "No interpretes el torque como una fuerza: depende del eje y del brazo de palanca."\r
      en: "Do not interpret torque as a force: it depends on the axis and lever arm."\r
\r
result_blocks:\r
  summary:\r
    title:\r
      es: Resumen\r
      en: Summary\r
  physical_reading:\r
    title:\r
      es: Lectura física\r
      en: Physical reading\r
  coherence:\r
    title:\r
      es: Coherencia\r
      en: Coherence\r
  model_validity:\r
    title:\r
      es: Validez del modelo\r
      en: Model validity\r
  graph_reading:\r
    title:\r
      es: Lectura gráfica\r
      en: Graph reading\r
  likely_errors:\r
    title:\r
      es: Errores probables\r
      en: Likely errors\r
  next_step:\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
\r
output_contract:\r
  sections:\r
    - summary\r
    - physical_reading\r
    - coherence\r
    - model_validity\r
    - graph_reading\r
    - likely_errors\r
    - next_step\r
\r
targets:\r
  F:\r
    magnitude_type: vector\r
    semantic_role:\r
      es: Causa dinámica traslacional en la analogía.\r
      en: Translational dynamic cause in the analogy.\r
\r
    summary_rules:\r
      - id: f_summary_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: La fuerza indica la causa del cambio lineal en la parte traslacional de la analogía.\r
          en: Force indicates the cause of linear change in the translational side of the analogy.\r
\r
    physical_reading_rules:\r
      - id: f_physical_reading_rules_1\r
        when: "result == 0"\r
        status: info\r
        text:\r
          es: Una fuerza neta nula no produce aceleración lineal neta.\r
          en: A zero net force does not produce net linear acceleration.\r
      - id: f_physical_reading_rules_2\r
        when: "true"\r
        status: info\r
        text:\r
          es: El papel de la fuerza es equivalente estructuralmente al papel del torque en rotación.\r
          en: The role of force is structurally analogous to the role of torque in rotation.\r
\r
    coherence_rules:\r
      - id: f_coherence_rules_1\r
        when: "m <= 0"\r
        status: info\r
        text:\r
          es: La masa debe ser positiva para que la interpretación de F = m a tenga sentido físico.\r
          en: Mass must be positive for F = m a to have physical meaning.\r
      - id: f_coherence_rules_2\r
        when: "true"\r
        status: info\r
        text:\r
          es: Comprueba que fuerza, masa y aceleración pertenecen al mismo sistema físico.\r
          en: Check that force, mass, and acceleration refer to the same physical system.\r
\r
    model_validity_rules:\r
      - id: f_model_validity_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: La relación traslacional es válida como modelo clásico cuando la masa del sistema está bien definida.\r
          en: The translational relation is valid as a classical model when system mass is well defined.\r
\r
    graph_rules:\r
      - id: f_graph_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: En el gráfico, F debe leerse como la causa lineal que se compara con tau.\r
          en: In the graph, F should be read as the linear cause compared with tau.\r
\r
    likely_errors:\r
      - id: f_likely_errors_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Error típico: pensar que fuerza y torque son la misma magnitud con distinto nombre."\r
          en: "Typical mistake: thinking force and torque are the same quantity with different names."\r
\r
    next_step_rules:\r
      - id: f_next_step_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: Compara ahora F con tau para ver qué cambia al pasar de traslación a rotación.\r
          en: Now compare F with tau to see what changes from translation to rotation.\r
\r
  tau:\r
    magnitude_type: axial_vector\r
    semantic_role:\r
      es: Causa dinámica rotacional en la analogía.\r
      en: Rotational dynamic cause in the analogy.\r
\r
    summary_rules:\r
      - id: tau_summary_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: El torque ocupa en rotación el papel estructural que la fuerza ocupa en traslación.\r
          en: Torque plays in rotation the structural role that force plays in translation.\r
\r
    physical_reading_rules:\r
      - id: tau_physical_reading_rules_1\r
        when: "result == 0"\r
        status: info\r
        text:\r
          es: Un torque neto nulo no produce aceleración angular neta.\r
          en: A zero net torque does not produce net angular acceleration.\r
      - id: tau_physical_reading_rules_2\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El torque no depende solo de la fuerza: también depende del eje y del brazo de palanca."\r
          en: "Torque does not depend only on force: it also depends on axis and lever arm."\r
\r
    coherence_rules:\r
      - id: tau_coherence_rules_1\r
        when: "I <= 0"\r
        status: info\r
        text:\r
          es: El momento de inercia debe ser positivo para interpretar tau = I alpha.\r
          en: Moment of inertia must be positive to interpret tau = I alpha.\r
      - id: tau_coherence_rules_2\r
        when: "true"\r
        status: info\r
        text:\r
          es: Antes de interpretar tau, verifica que el eje de giro esté definido.\r
          en: Before interpreting tau, verify that the rotation axis is defined.\r
\r
    model_validity_rules:\r
      - id: tau_model_validity_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: La analogía con fuerza solo es válida como estructura; tau conserva dependencia geométrica.\r
          en: The analogy with force is valid only structurally; tau keeps geometric dependence.\r
\r
    graph_rules:\r
      - id: tau_graph_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: El gráfico debe mostrar que tau corresponde al lado rotacional de la causa dinámica.\r
          en: The graph should show tau as the rotational side of the dynamic cause.\r
\r
    likely_errors:\r
      - id: tau_likely_errors_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Error típico: calcular tau como si fuera simplemente una fuerza sin brazo de palanca."\r
          en: "Typical mistake: computing tau as if it were simply a force without lever arm."\r
\r
    next_step_rules:\r
      - id: tau_next_step_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: Revisa momento de inercia para entender por qué la analogía con la masa no es perfecta.\r
          en: Review moment of inertia to understand why the analogy with mass is not perfect.\r
\r
  m:\r
    magnitude_type: scalar\r
    semantic_role:\r
      es: Resistencia al cambio lineal.\r
      en: Resistance to linear change.\r
\r
    summary_rules:\r
      - id: m_summary_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: La masa mide la resistencia del sistema a cambiar su movimiento lineal.\r
          en: Mass measures the system resistance to changes in linear motion.\r
\r
    physical_reading_rules:\r
      - id: m_physical_reading_rules_1\r
        when: "result <= 0"\r
        status: info\r
        text:\r
          es: Una masa no positiva no es válida en este modelo clásico.\r
          en: A non-positive mass is not valid in this classical model.\r
      - id: m_physical_reading_rules_2\r
        when: "true"\r
        status: info\r
        text:\r
          es: En la analogía, m cumple el papel estructural que I cumple en rotación.\r
          en: In the analogy, m plays the structural role that I plays in rotation.\r
\r
    coherence_rules:\r
      - id: m_coherence_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: La masa no depende del eje elegido; esta es una diferencia clave frente a I.\r
          en: Mass does not depend on the chosen axis; this is a key difference from I.\r
\r
    model_validity_rules:\r
      - id: m_model_validity_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: El uso de m es válido si el sistema se puede tratar como un cuerpo con masa constante.\r
          en: Using m is valid if the system can be treated as a body with constant mass.\r
\r
    graph_rules:\r
      - id: m_graph_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: En la lectura gráfica, m debe aparecer como resistencia lineal, no como propiedad geométrica.\r
          en: In the graphical reading, m should appear as linear resistance, not as a geometric property.\r
\r
    likely_errors:\r
      - id: m_likely_errors_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Error típico: trasladar propiedades de m a I sin considerar la distribución de masa."\r
          en: "Typical mistake: transferring properties of m to I without considering mass distribution."\r
\r
    next_step_rules:\r
      - id: m_next_step_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: Compara m con I para detectar el límite principal de la analogía.\r
          en: Compare m with I to detect the main limit of the analogy.\r
\r
  I:\r
    magnitude_type: scalar\r
    semantic_role:\r
      es: Resistencia al cambio rotacional.\r
      en: Resistance to rotational change.\r
\r
    summary_rules:\r
      - id: i_summary_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: El momento de inercia mide la resistencia a cambiar el estado de rotación.\r
          en: Moment of inertia measures resistance to changing rotational state.\r
\r
    physical_reading_rules:\r
      - id: i_physical_reading_rules_1\r
        when: "result <= 0"\r
        status: info\r
        text:\r
          es: Un momento de inercia no positivo indica un modelo físico inválido.\r
          en: A non-positive moment of inertia indicates an invalid physical model.\r
      - id: i_physical_reading_rules_2\r
        when: "true"\r
        status: info\r
        text:\r
          es: I no depende solo de cuánta masa hay, sino de cómo está distribuida respecto al eje.\r
          en: I depends not only on how much mass exists, but on how it is distributed relative to the axis.\r
\r
    coherence_rules:\r
      - id: i_coherence_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: Si cambia el eje, puede cambiar I aunque la masa total sea la misma.\r
          en: If the axis changes, I may change even if total mass remains the same.\r
\r
    model_validity_rules:\r
      - id: i_model_validity_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: La analogía m ↔ I solo es válida si se recuerda que I incorpora geometría.\r
          en: The m ↔ I analogy is valid only if I is understood to include geometry.\r
\r
    graph_rules:\r
      - id: i_graph_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: El gráfico debe representar I como resistencia rotacional asociada al eje.\r
          en: The graph should represent I as rotational resistance associated with the axis.\r
\r
    likely_errors:\r
      - id: i_likely_errors_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Error típico: creer que dos cuerpos con la misma masa tienen el mismo momento de inercia."\r
          en: "Typical mistake: believing that two bodies with the same mass have the same moment of inertia."\r
\r
    next_step_rules:\r
      - id: i_next_step_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: Revisa ejemplos de momento de inercia para ver cómo la geometría modifica la rotación.\r
          en: Review moment of inertia examples to see how geometry modifies rotation.\r
\r
  a:\r
    magnitude_type: vector\r
    semantic_role:\r
      es: Respuesta lineal del sistema.\r
      en: Linear response of the system.\r
\r
    summary_rules:\r
      - id: a_summary_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: La aceleración lineal es la respuesta del sistema ante una fuerza neta.\r
          en: Linear acceleration is the system response to a net force.\r
\r
    physical_reading_rules:\r
      - id: a_physical_reading_rules_1\r
        when: "result == 0"\r
        status: info\r
        text:\r
          es: Aceleración nula significa que no cambia la velocidad lineal.\r
          en: Zero acceleration means linear velocity does not change.\r
      - id: a_physical_reading_rules_2\r
        when: "true"\r
        status: info\r
        text:\r
          es: En la analogía, a corresponde estructuralmente a alpha.\r
          en: In the analogy, a corresponds structurally to alpha.\r
\r
    coherence_rules:\r
      - id: a_coherence_rules_1\r
        when: "m <= 0"\r
        status: info\r
        text:\r
          es: No puede interpretarse a mediante F = m a si la masa no es positiva.\r
          en: a cannot be interpreted through F = m a if mass is not positive.\r
      - id: a_coherence_rules_2\r
        when: "true"\r
        status: info\r
        text:\r
          es: El signo de a debe interpretarse según el eje lineal elegido.\r
          en: The sign of a must be interpreted according to the chosen linear axis.\r
\r
    model_validity_rules:\r
      - id: a_model_validity_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: La lectura de a es válida si el movimiento se describe en un sistema de referencia adecuado.\r
          en: Reading a is valid if motion is described in a suitable reference frame.\r
\r
    graph_rules:\r
      - id: a_graph_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: En el gráfico, a debe leerse como la respuesta lineal frente a F.\r
          en: In the graph, a should be read as the linear response to F.\r
\r
    likely_errors:\r
      - id: a_likely_errors_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Error típico: confundir aceleración con velocidad."\r
          en: "Typical mistake: confusing acceleration with velocity."\r
\r
    next_step_rules:\r
      - id: a_next_step_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: Compara a con alpha para ver cómo cambia la respuesta al pasar a rotación.\r
          en: Compare a with alpha to see how the response changes in rotation.\r
\r
  alpha:\r
    magnitude_type: axial_vector\r
    semantic_role:\r
      es: Respuesta rotacional del sistema.\r
      en: Rotational response of the system.\r
\r
    summary_rules:\r
      - id: alpha_summary_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: La aceleración angular es la respuesta rotacional producida por un torque neto.\r
          en: Angular acceleration is the rotational response produced by a net torque.\r
\r
    physical_reading_rules:\r
      - id: alpha_physical_reading_rules_1\r
        when: "result == 0"\r
        status: info\r
        text:\r
          es: Aceleración angular nula significa que la velocidad angular no cambia.\r
          en: Zero angular acceleration means angular velocity does not change.\r
      - id: alpha_physical_reading_rules_2\r
        when: "true"\r
        status: info\r
        text:\r
          es: Alpha ocupa en rotación el papel estructural de a en traslación.\r
          en: Alpha plays in rotation the structural role of a in translation.\r
\r
    coherence_rules:\r
      - id: alpha_coherence_rules_1\r
        when: "I <= 0"\r
        status: info\r
        text:\r
          es: No puede interpretarse alpha mediante tau = I alpha si I no es positivo.\r
          en: alpha cannot be interpreted through tau = I alpha if I is not positive.\r
      - id: alpha_coherence_rules_2\r
        when: "true"\r
        status: info\r
        text:\r
          es: El signo de alpha debe interpretarse según el eje angular elegido.\r
          en: The sign of alpha must be interpreted according to the chosen angular axis.\r
\r
    model_validity_rules:\r
      - id: alpha_model_validity_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: La lectura de alpha es válida cuando el eje de rotación está bien definido.\r
          en: Reading alpha is valid when the rotation axis is well defined.\r
\r
    graph_rules:\r
      - id: alpha_graph_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: En el gráfico, alpha debe aparecer como respuesta rotacional frente a tau.\r
          en: In the graph, alpha should appear as the rotational response to tau.\r
\r
    likely_errors:\r
      - id: alpha_likely_errors_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Error típico: confundir aceleración angular con velocidad angular."\r
          en: "Typical mistake: confusing angular acceleration with angular velocity."\r
\r
    next_step_rules:\r
      - id: alpha_next_step_rules_1\r
        when: "true"\r
        status: info\r
        text:\r
          es: Usa alpha para conectar este leaf con cinemática rotacional y segunda ley rotacional.\r
          en: Use alpha to connect this leaf with rotational kinematics and the rotational second law.\r
\r
cross_checks:\r
  - id: analogia_no_identidad\r
    description:\r
      es: Comprueba que la analogía se usa como estructura y no como identidad física.\r
      en: Checks that the analogy is used as a structure, not as physical identity.\r
    detect_when: "true"\r
    message:\r
      es: La correspondencia F↔tau, m↔I y a↔alpha es formal, no una igualdad de naturaleza física.\r
      en: The correspondence F↔tau, m↔I, and a↔alpha is formal, not equality of physical nature.\r
\r
error_patterns:\r
  - id: masa_igual_momento_inercia\r
    detect_when: "true"\r
    message:\r
      es: "Error típico: tratar I como si fuera simplemente la masa en rotación."\r
      en: "Typical mistake: treating I as simply mass in rotation."\r
\r
  - id: torque_como_fuerza\r
    detect_when: "true"\r
    message:\r
      es: "Error típico: interpretar tau como una fuerza sin considerar brazo de palanca ni eje."\r
      en: "Typical mistake: interpreting tau as a force without considering lever arm or axis."\r
\r
graph_binding:\r
  enabled: true\r
  channels:\r
    - translational_side\r
    - rotational_side\r
    - cause_pair\r
    - resistance_pair\r
    - response_pair\r
\r
mini_graph:\r
  enabled: true\r
  preferred_type: Coord\r
\r
output_contract:\r
  sections:\r
    - summary\r
    - physical_reading\r
    - coherence\r
    - model_validity\r
    - graph_reading\r
    - likely_errors\r
    - next_step\r
  show_summary_first: true\r
  max_inline_messages: 3\r
  show_warnings: true\r
  show_likely_errors: true\r
`;export{e as default};
