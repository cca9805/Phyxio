const e=`version: 2\r
id: interpretacion-capacitiva\r
leaf_id: capacitiva\r
nombre:\r
  es: Interpretacion de reactancia capacitiva\r
  en: Interpretation of capacitive reactance\r
scope:\r
  area: fisica-clasica\r
  bloque: electromagnetismo\r
  subbloque: corriente-alterna\r
  parent_id: reactancia\r
  ruta_relativa: fisica-clasica/electromagnetismo/corriente-alterna/reactancia/capacitiva\r
dependencies:\r
  formulas:\r
  - reactancia_capacitiva\r
  - omega_f\r
  - corriente_capacitiva\r
  - reactiva_capacitiva\r
  magnitudes:\r
  - Xc\r
  - omega\r
  - C\r
  - f\r
  - V\r
  - Ic\r
  - Qc\r
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
  Xc:\r
    summary_rules:\r
    - id: xc_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Xc resume la oposición capacitiva dependiente de frecuencia.\r
        en: Capacitive reactance summarizes frequency-dependent opposition.\r
    physical_reading_rules:\r
    - id: xc_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si sube frecuencia o capacitancia, Xc disminuye y la rama admite más corriente.\r
        en: If frequency or capacitance rises, reactance drops and branch current rises.\r
    coherence_rules:\r
    - id: xc_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe mantenerse positiva y coherente con valores de omega y C.\r
        en: It must stay positive and coherent with angular frequency and capacitance values.\r
    model_validity_rules:\r
    - id: xc_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Válida en capacitor ideal y régimen sinusoidal estacionario.\r
        en: Valid in ideal capacitor and sinusoidal steady regime.\r
    graph_rules:\r
    - id: xc_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La curva Xc contra frecuencia es decreciente no lineal.\r
        en: Reactance versus frequency curve is nonlinearly decreasing.\r
    likely_errors:\r
    - id: xc_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: tratar Xc como resistencia constante.'\r
        en: 'Common mistake: treating reactance as constant resistance.'\r
    next_step_rules:\r
    - id: xc_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa Xc para estimar corriente de rama y exigencia de línea.\r
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
        es: Al aumentar omega, el capacitor se opone menos al paso de corriente alterna.\r
        en: As angular frequency rises, the capacitor opposes alternating current less.\r
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
        es: Controla compresión temporal de ciclos y pendiente efectiva en Xc(f).\r
        en: It controls cycle compression and effective slope in reactance-frequency behavior.\r
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
  C:\r
    summary_rules:\r
    - id: c_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: C cuantifica la capacidad de almacenamiento de carga del capacitor.\r
        en: Capacitance quantifies charge-storage capability of the capacitor.\r
    physical_reading_rules:\r
    - id: c_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: A mayor C, menor Xc para una frecuencia dada.\r
        en: Larger capacitance yields lower reactance at fixed frequency.\r
    coherence_rules:\r
    - id: c_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe mantenerse positiva y en unidades de faradio.\r
        en: It must stay positive and expressed in farads.\r
    model_validity_rules:\r
    - id: c_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Se asume componente lineal en el rango operativo de interés.\r
        en: Linear-component behavior is assumed in the operating range of interest.\r
    graph_rules:\r
    - id: c_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Desplaza verticalmente la curva Xc(f) al variar el parámetro.\r
        en: It vertically shifts the reactance-frequency curve when parameter changes.\r
    likely_errors:\r
    - id: c_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: no convertir microfaradios a faradios.'\r
        en: 'Common mistake: not converting microfarads to farads.'\r
    next_step_rules:\r
    - id: c_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Revisa consistencia de unidades antes de sustituir en fórmulas.\r
        en: Check unit consistency before substitution in formulas.\r
  Ic:\r
    summary_rules:\r
    - id: ic_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Ic mide la corriente eficaz que exige la rama capacitiva.\r
        en: RMS capacitive current measures branch current demand.\r
    physical_reading_rules:\r
    - id: ic_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: A tensión fija, disminuciones de Xc elevan Ic y pueden exigir mayor capacidad de conducción.\r
        en: At fixed voltage, lower reactance raises current and may require higher conduction capacity.\r
    coherence_rules:\r
    - id: ic_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe crecer con V y decrecer con Xc.\r
        en: It must increase with voltage and decrease with reactance.\r
    model_validity_rules:\r
    - id: ic_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Interpretación válida cuando V e Ic se expresan en RMS coherente.\r
        en: Interpretation is valid when voltage and current are coherently expressed as RMS.\r
    graph_rules:\r
    - id: ic_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Permite identificar zonas de posible sobrecorriente por frecuencia alta.\r
        en: It helps identify potential overcurrent regions at high frequency.\r
    likely_errors:\r
    - id: ic_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error típico: usar tensión pico con fórmula RMS de corriente.'\r
        en: 'Typical mistake: using peak voltage with RMS current formula.'\r
    next_step_rules:\r
    - id: ic_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Contrasta Ic calculada con límite térmico de cableado y protección.\r
        en: Contrast computed current with thermal limits of wiring and protection.\r
  Qc:\r
    summary_rules:\r
    - id: qc_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Qc representa magnitud del intercambio reactivo de la rama capacitiva.\r
        en: Capacitive reactive power represents reactive exchange magnitude in the branch.\r
    physical_reading_rules:\r
    - id: qc_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: No equivale a potencia activa neta, sino a energía intercambiada por ciclo.\r
        en: It is not net active power, but cycle-by-cycle exchanged energy effect.\r
    coherence_rules:\r
    - id: qc_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe crecer cuando aumentan V o Ic en régimen comparable.\r
        en: It must grow when voltage or current rise under comparable regime.\r
    model_validity_rules:\r
    - id: qc_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Requiere convención explícita de signo para lectura completa de red.\r
        en: It requires explicit sign convention for full network interpretation.\r
    graph_rules:\r
    - id: qc_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Útil para estimar impacto de bancos capacitivos en compensación.\r
        en: Useful to estimate impact of capacitor banks in compensation tasks.\r
    likely_errors:\r
    - id: qc_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: interpretar Qc como consumo activo.'\r
        en: 'Common mistake: interpreting reactive power as active consumption.'\r
    next_step_rules:\r
    - id: qc_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Integra Qc con el balance reactivo total del sistema.\r
        en: Integrate reactive power with total system reactive balance.\r
`;export{e as default};
