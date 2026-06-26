const e=`version: 2\r
id: interpretacion-inductiva\r
leaf_id: inductiva\r
nombre:\r
  es: Interpretacion de reactancia inductiva\r
  en: Interpretation of inductive reactance\r
scope:\r
  area: fisica-clasica\r
  bloque: electromagnetismo\r
  subbloque: corriente-alterna\r
  parent_id: reactancia\r
  ruta_relativa: fisica-clasica/electromagnetismo/corriente-alterna/reactancia/inductiva\r
dependencies:\r
  formulas:\r
  - reactancia_inductiva\r
  - omega_f\r
  - corriente_inductiva\r
  - reactiva_inductiva\r
  magnitudes:\r
  - Xl\r
  - omega\r
  - L\r
  - f\r
  - V\r
  - Il\r
  - Ql\r
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
  Xl:\r
    summary_rules:\r
    - id: xl_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Xl resume la oposición inductiva dependiente de frecuencia.\r
        en: Inductive reactance summarizes frequency-dependent opposition.\r
    physical_reading_rules:\r
    - id: xl_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si sube frecuencia o inductancia, Xl aumenta y la rama admite menos corriente.\r
        en: If frequency or inductance rises, reactance increases and branch current decreases.\r
    coherence_rules:\r
    - id: xl_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe mantenerse no negativa y coherente con omega y L.\r
        en: It must remain non-negative and coherent with angular frequency and inductance.\r
    model_validity_rules:\r
    - id: xl_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Válida en inductor ideal y régimen sinusoidal estacionario.\r
        en: Valid in ideal inductor and sinusoidal steady regime.\r
    graph_rules:\r
    - id: xl_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La curva Xl contra frecuencia es creciente casi lineal.\r
        en: Reactance versus frequency curve is increasing and near linear.\r
    likely_errors:\r
    - id: xl_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: tratar Xl como resistencia activa constante.'\r
        en: 'Common mistake: treating inductive reactance as constant active resistance.'\r
    next_step_rules:\r
    - id: xl_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa Xl para estimar corriente de rama y exigencia de línea.\r
        en: Use reactance to estimate branch current and line demand.\r
  omega:\r
    summary_rules:\r
    - id: om_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: omega fija la escala angular del fenómeno alterno.\r
        en: Angular frequency sets the angular scale of the alternating phenomenon.\r
    physical_reading_rules:\r
    - id: om_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Al aumentar omega, el inductor se opone más al paso de corriente alterna.\r
        en: As angular frequency rises, the inductor opposes alternating current more.\r
    coherence_rules:\r
    - id: om_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe relacionarse linealmente con f mediante 2pi.\r
        en: It must be linearly related to frequency through 2pi.\r
    model_validity_rules:\r
    - id: om_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Requiere periodicidad bien definida en la señal.\r
        en: Requires well-defined periodicity in the signal.\r
    graph_rules:\r
    - id: om_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Controla pendiente efectiva en Xl(f).\r
        en: It controls effective slope in reactance-frequency behavior.\r
    likely_errors:\r
    - id: om_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: confundir f en Hz con omega en rad/s.'\r
        en: 'Frequent error: confusing frequency in Hz with angular frequency in rad/s.'\r
    next_step_rules:\r
    - id: om_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Verifica conversión antes de calcular reactancia.\r
        en: Verify conversion before calculating reactance.\r
  L:\r
    summary_rules:\r
    - id: l_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: L cuantifica capacidad de almacenamiento magnético de la bobina.\r
        en: Inductance quantifies magnetic-storage capability of the coil.\r
    physical_reading_rules:\r
    - id: l_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: A mayor L, mayor Xl para una frecuencia dada.\r
        en: Larger inductance yields larger reactance at fixed frequency.\r
    coherence_rules:\r
    - id: l_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe mantenerse no negativa y en unidades de henrio.\r
        en: It must remain non-negative and expressed in henries.\r
    model_validity_rules:\r
    - id: l_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Se asume componente lineal antes de saturación magnética relevante.\r
        en: Linear behavior is assumed before significant magnetic saturation.\r
    graph_rules:\r
    - id: l_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Escala verticalmente la curva Xl(f) al variar el parámetro.\r
        en: It vertically scales the reactance-frequency curve when parameter changes.\r
    likely_errors:\r
    - id: l_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: no convertir milihenrios a henrios.'\r
        en: 'Common mistake: not converting millihenries to henries.'\r
    next_step_rules:\r
    - id: l_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Revisa consistencia de unidades antes de sustituir en fórmulas.\r
        en: Check unit consistency before substitution in formulas.\r
  Il:\r
    summary_rules:\r
    - id: il_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Il mide la corriente eficaz que exige la rama inductiva.\r
        en: RMS inductive current measures branch current demand.\r
    physical_reading_rules:\r
    - id: il_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: A tensión fija, incrementos de Xl reducen Il y alivian exigencia de conducción.\r
        en: At fixed voltage, higher reactance lowers current and eases conduction demand.\r
    coherence_rules:\r
    - id: il_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe crecer con V y decrecer con Xl.\r
        en: It must increase with voltage and decrease with reactance.\r
    model_validity_rules:\r
    - id: il_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Interpretación válida cuando V e Il se expresan en RMS coherente.\r
        en: Interpretation is valid when voltage and current are coherently expressed as RMS.\r
    graph_rules:\r
    - id: il_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Permite identificar zonas de sobrecorriente por caída de oposición efectiva.\r
        en: It helps identify overcurrent regions due to reduced effective opposition.\r
    likely_errors:\r
    - id: il_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error típico: usar tensión pico con fórmula RMS de corriente.'\r
        en: 'Typical mistake: using peak voltage with RMS current formula.'\r
    next_step_rules:\r
    - id: il_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Contrasta Il calculada con límite térmico de bobina y protección.\r
        en: Contrast computed current with thermal limits of coil and protection.\r
  Ql:\r
    summary_rules:\r
    - id: ql_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Ql representa magnitud del intercambio reactivo de la rama inductiva.\r
        en: Inductive reactive power represents reactive exchange magnitude in the branch.\r
    physical_reading_rules:\r
    - id: ql_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: No equivale a potencia activa neta, sino a energía intercambiada por ciclo.\r
        en: It is not net active power, but cycle-by-cycle exchanged energy effect.\r
    coherence_rules:\r
    - id: ql_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe crecer cuando aumentan V o Il en régimen comparable.\r
        en: It must grow when voltage or current rise under comparable regime.\r
    model_validity_rules:\r
    - id: ql_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Requiere convención explícita de signo para lectura completa de red.\r
        en: It requires explicit sign convention for full network interpretation.\r
    graph_rules:\r
    - id: ql_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Útil para estimar impacto de cargas inductivas en demanda reactiva.\r
        en: Useful to estimate impact of inductive loads on reactive demand.\r
    likely_errors:\r
    - id: ql_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: interpretar Ql como consumo activo.'\r
        en: 'Common mistake: interpreting reactive power as active consumption.'\r
    next_step_rules:\r
    - id: ql_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Integra Ql con el balance reactivo total del sistema.\r
        en: Integrate reactive power with total system reactive balance.\r
`;export{e as default};
