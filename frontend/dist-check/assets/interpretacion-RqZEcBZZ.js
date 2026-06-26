const e=`version: 2\r
id: interpretacion-tension-en-cuerdas-y-cables\r
leaf_id: tension-en-cuerdas-y-cables\r
nombre:\r
  es: Interpretacion de Tension en cuerdas y cables\r
  en: Interpretation of Tension in Ropes and Cables\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: dinamica\r
  parent_id: tension\r
  ruta_relativa: fisica-clasica/mecanica/dinamica/fuerzas/tension/tension-en-cuerdas-y-cables\r
dependencies:\r
  formulas:\r
  - tension_equilibrio_vertical\r
  - tension_vertical_acelerada\r
  - atwood_aceleracion\r
  - atwood_tension\r
  - componentes_tension_x\r
  - componentes_tension_y\r
  - gradiente_tension_cable_masivo\r
  - tension_uniforme_cuerda_ideal\r
  magnitudes:\r
  - T\r
  - m\r
  - g\r
  - a\r
  - m1\r
  - m2\r
  - theta\r
  - Tx\r
  - Ty\r
  - lambda\r
  - dT_dy\r
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
      es: Resumen fisico\r
      en: Physical summary\r
  physical_reading:\r
    title:\r
      es: Lectura fisica\r
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
      es: Lectura grafica\r
      en: Graph reading\r
  likely_errors:\r
    title:\r
      es: Errores probables\r
      en: Likely errors\r
  next_step:\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
targets:\r
  T:\r
    summary_rules:\r
    - id: T_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: T resume una lectura fisica relevante del leaf.\r
        en: T summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: T_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que T sea coherente con unidades y contexto.\r
        en: Check that T is coherent with units and context.\r
    physical_reading_rules:
    - id: T_physical
      when: 'true'
      status: info
      text:
        es: T indica como la cuerda transmite traccion al cuerpo; si T aumenta, aumenta la fuerza con la que el elemento flexible sostiene o acelera el sistema.
        en: T indicates how the rope transmits traction to the body; if T increases, the flexible element supports or accelerates the system more strongly.
    model_validity_rules:\r
    - id: T_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: T solo es interpretable dentro del modelo elegido.\r
        en: T is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: T_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de T.\r
        en: The graph must reflect the role of T visually.\r
    likely_errors:\r
    - id: T_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas T con otra magnitud cercana del problema.\r
        en: Do not confuse T with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: T_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa T para enlazar con el siguiente paso de interpretacion.\r
        en: Use T to connect with the next interpretation step.\r
  m:\r
    summary_rules:\r
    - id: m_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: m resume una lectura fisica relevante del leaf.\r
        en: m summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: m_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que m sea coherente con unidades y contexto.\r
        en: Check that m is coherent with units and context.\r
    physical_reading_rules:\r
    - id: m_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de m debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of m must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: m_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: m solo es interpretable dentro del modelo elegido.\r
        en: m is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: m_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de m.\r
        en: The graph must reflect the role of m visually.\r
    likely_errors:\r
    - id: m_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas m con otra magnitud cercana del problema.\r
        en: Do not confuse m with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: m_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa m para enlazar con el siguiente paso de interpretacion.\r
        en: Use m to connect with the next interpretation step.\r
  g:\r
    summary_rules:\r
    - id: g_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: g resume una lectura fisica relevante del leaf.\r
        en: g summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: g_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que g sea coherente con unidades y contexto.\r
        en: Check that g is coherent with units and context.\r
    physical_reading_rules:\r
    - id: g_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de g debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of g must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: g_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: g solo es interpretable dentro del modelo elegido.\r
        en: g is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: g_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de g.\r
        en: The graph must reflect the role of g visually.\r
    likely_errors:\r
    - id: g_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas g con otra magnitud cercana del problema.\r
        en: Do not confuse g with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: g_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa g para enlazar con el siguiente paso de interpretacion.\r
        en: Use g to connect with the next interpretation step.\r
  a:\r
    summary_rules:\r
    - id: a_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: a resume una lectura fisica relevante del leaf.\r
        en: a summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: a_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que a sea coherente con unidades y contexto.\r
        en: Check that a is coherent with units and context.\r
    physical_reading_rules:\r
    - id: a_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La lectura de a debe conectarse con el fenomeno fisico descrito.\r
        en: The reading of a must connect with the described physical phenomenon.\r
    model_validity_rules:\r
    - id: a_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: a solo es interpretable dentro del modelo elegido.\r
        en: a is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: a_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de a.\r
        en: The graph must reflect the role of a visually.\r
    likely_errors:\r
    - id: a_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas a con otra magnitud cercana del problema.\r
        en: Do not confuse a with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: a_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa a para enlazar con el siguiente paso de interpretacion.\r
        en: Use a to connect with the next interpretation step.\r
  Tx:\r
    summary_rules:\r
    - id: Tx_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Tx resume una lectura fisica relevante del leaf.\r
        en: Tx summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: Tx_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que Tx sea coherente con unidades y contexto.\r
        en: Check that Tx is coherent with units and context.\r
    physical_reading_rules:
    - id: Tx_physical
      when: 'true'
      status: info
      text:
        es: Tx mide la parte horizontal de la tension y muestra cuanto esfuerzo lateral recibe el anclaje o el soporte.
        en: Tx measures the horizontal part of tension and shows how much lateral load the anchor or support receives.
    model_validity_rules:\r
    - id: Tx_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Tx solo es interpretable dentro del modelo elegido.\r
        en: Tx is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: Tx_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de Tx.\r
        en: The graph must reflect the role of Tx visually.\r
    likely_errors:\r
    - id: Tx_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas Tx con otra magnitud cercana del problema.\r
        en: Do not confuse Tx with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: Tx_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa Tx para enlazar con el siguiente paso de interpretacion.\r
        en: Use Tx to connect with the next interpretation step.\r
  Ty:\r
    summary_rules:\r
    - id: Ty_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Ty resume una lectura fisica relevante del leaf.\r
        en: Ty summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: Ty_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que Ty sea coherente con unidades y contexto.\r
        en: Check that Ty is coherent with units and context.\r
    physical_reading_rules:
    - id: Ty_physical
      when: 'true'
      status: info
      text:
        es: Ty mide la parte vertical de la tension y determina directamente cuanta carga puede sostener el cable en equilibrio.
        en: Ty measures the vertical part of tension and directly determines how much load the cable can support in equilibrium.
    model_validity_rules:\r
    - id: Ty_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Ty solo es interpretable dentro del modelo elegido.\r
        en: Ty is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: Ty_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de Ty.\r
        en: The graph must reflect the role of Ty visually.\r
    likely_errors:\r
    - id: Ty_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas Ty con otra magnitud cercana del problema.\r
        en: Do not confuse Ty with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: Ty_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa Ty para enlazar con el siguiente paso de interpretacion.\r
        en: Use Ty to connect with the next interpretation step.\r
  dT_dy:\r
    summary_rules:\r
    - id: dT_dy_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: dT_dy resume una lectura fisica relevante del leaf.\r
        en: dT_dy summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: dT_dy_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que dT_dy sea coherente con unidades y contexto.\r
        en: Check that dT_dy is coherent with units and context.\r
    physical_reading_rules:
    - id: dT_dy_physical
      when: 'true'
      status: info
      text:
        es: dT_dy expresa que la tension cambia con la altura porque cada tramo superior del cable sostiene el peso del tramo inferior.
        en: dT_dy expresses that tension changes with height because each upper cable segment supports the weight of the lower segment.
    model_validity_rules:\r
    - id: dT_dy_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: dT_dy solo es interpretable dentro del modelo elegido.\r
        en: dT_dy is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: dT_dy_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de dT_dy.\r
        en: The graph must reflect the role of dT_dy visually.\r
    likely_errors:\r
    - id: dT_dy_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas dT_dy con otra magnitud cercana del problema.\r
        en: Do not confuse dT_dy with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: dT_dy_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa dT_dy para enlazar con el siguiente paso de interpretacion.\r
        en: Use dT_dy to connect with the next interpretation step.\r
  lambda:\r
    summary_rules:\r
    - id: lambda_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: lambda resume una lectura fisica relevante del leaf.\r
        en: lambda summarizes a relevant physical reading of the leaf.\r
    coherence_rules:\r
    - id: lambda_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que lambda sea coherente con unidades y contexto.\r
        en: Check that lambda is coherent with units and context.\r
    physical_reading_rules:
    - id: lambda_physical
      when: 'true'
      status: info
      text:
        es: lambda fija cuanto pesa el cable por unidad de longitud y, por tanto, cuanto contribuye el propio cable al aumento de tension.
        en: lambda sets how much the cable weighs per unit length and therefore how much the cable itself contributes to the growth of tension.
    model_validity_rules:\r
    - id: lambda_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: lambda solo es interpretable dentro del modelo elegido.\r
        en: lambda is interpretable only inside the chosen model.\r
    graph_rules:\r
    - id: lambda_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La grafica debe reflejar visualmente el papel de lambda.\r
        en: The graph must reflect the role of lambda visually.\r
    likely_errors:\r
    - id: lambda_warn\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas lambda con otra magnitud cercana del problema.\r
        en: Do not confuse lambda with another nearby quantity in the problem.\r
    next_step_rules:\r
    - id: lambda_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa lambda para enlazar con el siguiente paso de interpretacion.\r
        en: Use lambda to connect with the next interpretation step.\r
`;export{e as default};
