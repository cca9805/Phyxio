const e=`version: 2\r
id: interpretacion-resonancia-electrica\r
leaf_id: resonancia-electrica\r
nombre:\r
  es: Interpretacion de resonancia electrica\r
  en: Interpretation of electrical resonance\r
scope:\r
  area: fisica-clasica\r
  bloque: electromagnetismo\r
  subbloque: corriente-alterna\r
  parent_id: corriente-alterna\r
  ruta_relativa: fisica-clasica/electromagnetismo/corriente-alterna/resonancia-electrica\r
dependencies:\r
  formulas:\r
  - omega_resonancia\r
  - frecuencia_resonancia\r
  - factor_calidad\r
  - ancho_banda\r
  - corriente_resonancia\r
  magnitudes:\r
  - omega0\r
  - f0\r
  - L\r
  - C\r
  - R\r
  - Q\r
  - BW\r
  - V\r
  - Ires\r
output_contract:\r
  sections: [ summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step ]\r
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
      es: Lectura estructural\r
      en: Structural reading\r
  likely_errors:\r
    title:\r
      es: Errores probables\r
      en: Likely errors\r
  next_step:\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
targets:\r
  f0:\r
    summary_rules:\r
    - id: f0_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: f0 ubica la sintonía central del resonador.\r
        en: Resonant frequency sets central tuning point of resonator.\r
    physical_reading_rules:\r
    - id: f0_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Cambios en L o C desplazan la frecuencia de resonancia.\r
        en: Changes in inductance or capacitance shift resonant frequency.\r
    coherence_rules:\r
    - id: f0_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe ser positiva y consistente con omega0.\r
        en: It must be positive and consistent with resonant angular frequency.\r
    model_validity_rules:\r
    - id: f0_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Válida en régimen sinusoidal con parámetros cercanos a lineales.\r
        en: Valid in sinusoidal regime with near-linear parameters.\r
    graph_rules:\r
    - id: f0_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Corresponde al centro del pico de respuesta frecuencial.\r
        en: Corresponds to center of frequency-response peak.\r
    likely_errors:\r
    - id: f0_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: omitir conversión entre omega0 y f0.'\r
        en: 'Common mistake: omitting conversion between angular and ordinary frequency.'\r
    next_step_rules:\r
    - id: f0_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa f0 junto a Q para estimar selectividad operativa.\r
        en: Use resonant frequency with quality factor to estimate practical selectivity.\r
  Q:\r
    summary_rules:\r
    - id: q_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Q resume compromiso entre selectividad y amortiguamiento.\r
        en: Quality factor summarizes tradeoff between selectivity and damping.\r
    physical_reading_rules:\r
    - id: q_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Q alta implica pico más agudo y mayor sensibilidad a tolerancias.\r
        en: High quality factor means sharper peak and higher tolerance sensitivity.\r
    coherence_rules:\r
    - id: q_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe aumentar cuando R disminuye con L y omega0 fijas.\r
        en: It should increase when resistance decreases at fixed inductance and angular frequency.\r
    model_validity_rules:\r
    - id: q_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Interpretación correcta requiere R efectiva representativa de pérdidas reales.\r
        en: Correct interpretation requires effective resistance representative of real losses.\r
    graph_rules:\r
    - id: q_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Determina anchura del lóbulo principal en la curva de respuesta.\r
        en: Determines width of main lobe in response curve.\r
    likely_errors:\r
    - id: q_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: interpretar Q como eficiencia energética.'\r
        en: 'Frequent error: interpreting quality factor as energy efficiency.'\r
    next_step_rules:\r
    - id: q_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Conecta Q con BW para verificar especificación de filtro.\r
        en: Connect quality factor with bandwidth to verify filter specification.\r
  BW:\r
    summary_rules:\r
    - id: bw_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: BW cuantifica el rango útil alrededor de resonancia.\r
        en: Bandwidth quantifies usable range around resonance.\r
    physical_reading_rules:\r
    - id: bw_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si Q aumenta, el ancho de banda tiende a reducirse.\r
        en: If quality factor rises, bandwidth tends to shrink.\r
    coherence_rules:\r
    - id: bw_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe mantener consistencia con f0 y Q.\r
        en: It must remain consistent with resonant frequency and quality factor.\r
    model_validity_rules:\r
    - id: bw_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Relación BW=f0/Q es aproximada y depende del régimen de amortiguamiento.\r
        en: Bandwidth relation is approximate and depends on damping regime.\r
    graph_rules:\r
    - id: bw_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se observa como separación entre frecuencias de semipotencia.\r
        en: It is observed as separation between half-power frequencies.\r
    likely_errors:\r
    - id: bw_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error típico: tratar BW como constante al cambiar R.'\r
        en: 'Typical mistake: treating bandwidth as constant when resistance changes.'\r
    next_step_rules:\r
    - id: bw_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Verifica BW frente a requerimiento de selectividad del sistema.\r
        en: Check bandwidth against system selectivity requirement.\r
  Ires:\r
    summary_rules:\r
    - id: ires_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Ires estima la corriente de rama en condición resonante serie.\r
        en: Resonant current estimates branch current under series resonance condition.\r
    physical_reading_rules:\r
    - id: ires_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Con R baja, la corriente resonante puede crecer y exigir protección adicional.\r
        en: With low resistance, resonant current can grow and require additional protection.\r
    coherence_rules:\r
    - id: ires_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe ser coherente con V y R en condiciones RMS.\r
        en: It must be coherent with voltage and resistance in RMS conditions.\r
    model_validity_rules:\r
    - id: ires_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Esta estimación aplica en rama serie cercana al punto resonante.\r
        en: This estimate applies to series branch near resonant point.\r
    graph_rules:\r
    - id: ires_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Marca altura del pico de respuesta de corriente.\r
        en: Marks height of current-response peak.\r
    likely_errors:\r
    - id: ires_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: no contrastar Ires con límite térmico real.'\r
        en: 'Common mistake: not checking resonant current against real thermal limit.'\r
    next_step_rules:\r
    - id: ires_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Integra Ires con estrategia de protección y margen térmico.\r
        en: Integrate resonant current with protection strategy and thermal margin.\r
  omega0:\r
    summary_rules:\r
    - id: omega0_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: omega0 fija la escala angular de la resonancia.\r
        en: Resonant angular frequency sets angular scale of resonance.\r
    physical_reading_rules:\r
    - id: omega0_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Cambios en L y C desplazan omega0 en sentido inverso al producto LC.\r
        en: Changes in inductance and capacitance shift angular frequency inversely with LC product.\r
    coherence_rules:\r
    - id: omega0_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe ser positiva y consistente con f0.\r
        en: It must be positive and consistent with resonant frequency.\r
    model_validity_rules:\r
    - id: omega0_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Aplica en modelo lineal con parámetros equivalentes estables.\r
        en: Applies in linear model with stable equivalent parameters.\r
    graph_rules:\r
    - id: omega0_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Define la posición angular del pico de respuesta.\r
        en: Defines angular position of response peak.\r
    likely_errors:\r
    - id: omega0_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: confundir escala angular con hertz.'\r
        en: 'Common mistake: confusing angular scale with hertz.'\r
    next_step_rules:\r
    - id: omega0_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Convierte omega0 a f0 para decisión operativa.\r
        en: Convert resonant angular frequency to hertz for operating decision.\r
  L:\r
    summary_rules:\r
    - id: l_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: L participa en la ubicación de resonancia y en la selectividad.\r
        en: Inductance participates in resonance placement and selectivity.\r
    physical_reading_rules:\r
    - id: l_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Al aumentar L con C fija, f0 disminuye.\r
        en: Increasing inductance at fixed capacitance lowers resonant frequency.\r
    coherence_rules:\r
    - id: l_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe mantenerse positiva para resonancia física.\r
        en: It must remain positive for physical resonance.\r
    model_validity_rules:\r
    - id: l_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Requiere valor efectivo representativo en frecuencia de operación.\r
        en: Requires effective value representative at operating frequency.\r
    graph_rules:\r
    - id: l_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Su cambio desplaza horizontalmente la curva de respuesta.\r
        en: Its variation shifts response curve horizontally.\r
    likely_errors:\r
    - id: l_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: usar mH como H sin conversión.'\r
        en: 'Common mistake: using mH as H without conversion.'\r
    next_step_rules:\r
    - id: l_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Ajusta L cuando necesites mover la sintonía central.\r
        en: Tune inductance when central tuning position must shift.\r
  C:\r
    summary_rules:\r
    - id: c_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: C gobierna junto a L la posición de resonancia.\r
        en: Capacitance governs resonance position together with inductance.\r
    physical_reading_rules:\r
    - id: c_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: A mayor C con L fija, menor frecuencia resonante.\r
        en: Higher capacitance at fixed inductance lowers resonant frequency.\r
    coherence_rules:\r
    - id: c_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe ser positiva y coherente con tipo de componente.\r
        en: It must be positive and coherent with component type.\r
    model_validity_rules:\r
    - id: c_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Puede variar por temperatura y tolerancia en operación real.\r
        en: It may vary with temperature and tolerance in real operation.\r
    graph_rules:\r
    - id: c_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Modifica la posición del pico de frecuencia.\r
        en: Modifies position of frequency peak.\r
    likely_errors:\r
    - id: c_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: usar microfaradios como faradios.'\r
        en: 'Common mistake: using microfarads as farads.'\r
    next_step_rules:\r
    - id: c_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Ajusta C para compensar deriva de sintonía.\r
        en: Adjust capacitance to compensate tuning drift.\r
  R:\r
    summary_rules:\r
    - id: r_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: R controla amortiguamiento, selectividad y corriente resonante.\r
        en: Resistance controls damping, selectivity, and resonant current.\r
    physical_reading_rules:\r
    - id: r_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si R sube, normalmente Q baja y BW aumenta.\r
        en: If resistance rises, quality factor usually drops and bandwidth rises.\r
    coherence_rules:\r
    - id: r_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe incluir pérdidas efectivas y no solo valor nominal.\r
        en: It should include effective losses, not only nominal value.\r
    model_validity_rules:\r
    - id: r_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: En operación real puede cambiar por carga y temperatura.\r
        en: In real operation it may change with load and temperature.\r
    graph_rules:\r
    - id: r_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Cambia altura y anchura del pico de respuesta.\r
        en: Changes height and width of response peak.\r
    likely_errors:\r
    - id: r_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: subestimar R efectiva en el montaje real.'\r
        en: 'Common mistake: underestimating effective resistance in real assembly.'\r
    next_step_rules:\r
    - id: r_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Ajusta amortiguamiento cuando cambie requisito de selectividad.\r
        en: Adjust damping when selectivity requirement changes.\r
  V:\r
    summary_rules:\r
    - id: v_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: V define nivel de excitación que impulsa la respuesta resonante.\r
        en: RMS voltage defines excitation level driving resonant response.\r
    physical_reading_rules:\r
    - id: v_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Con R fija, aumentar V eleva Ires proporcionalmente.\r
        en: At fixed resistance, increasing RMS voltage raises resonant current proportionally.\r
    coherence_rules:\r
    - id: v_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe compararse en la misma convención RMS.\r
        en: It must be compared under the same RMS convention.\r
    model_validity_rules:\r
    - id: v_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Interpretación válida con fuente periódica estable.\r
        en: Interpretation is valid with stable periodic source.\r
    graph_rules:\r
    - id: v_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Influye en escala vertical de respuesta de corriente.\r
        en: Influences vertical scale of current response.\r
    likely_errors:\r
    - id: v_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: mezclar valor pico y valor eficaz.'\r
        en: 'Common mistake: mixing peak and RMS values.'\r
    next_step_rules:\r
    - id: v_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Verifica margen de excitación frente a límite térmico.\r
        en: Verify excitation margin against thermal limit.\r
`;export{e as default};
