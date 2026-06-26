const e=`version: 2\r
id: interpretacion-magnitudes-alternas\r
leaf_id: magnitudes-alternas\r
nombre:\r
  es: Interpretacion de magnitudes alternas\r
  en: Interpretation of AC quantities\r
scope:\r
  area: fisica-clasica\r
  bloque: electromagnetismo\r
  subbloque: corriente-alterna\r
  parent_id: corriente-alterna\r
  ruta_relativa: fisica-clasica/electromagnetismo/corriente-alterna/magnitudes-alternas\r
dependencies:\r
  formulas:\r
  - senal_sinusoidal\r
  - omega_f\r
  - periodo\r
  - valor_eficaz\r
  - potencia_activa\r
  magnitudes:\r
  - v_t\r
  - Vmax\r
  - Vrms\r
  - Irms\r
  - omega\r
  - f\r
  - T\r
  - phi\r
  - P\r
  - t\r
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
  v_t:\r
    summary_rules:\r
    - id: vt_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: v_t describe estado instantáneo de la señal alterna en cada instante.\r
        en: Instantaneous voltage describes AC signal state at each instant.\r
    physical_reading_rules:\r
    - id: vt_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Su valor cambia con fase y tiempo, por lo que no reemplaza a RMS para potencia media.\r
        en: It changes with phase and time, so it does not replace RMS for mean power.\r
    coherence_rules:\r
    - id: vt_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe permanecer acotada entre -Vmax y Vmax en senoide ideal.\r
        en: It must remain bounded between minus and plus amplitude in ideal sine.\r
    model_validity_rules:\r
    - id: vt_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: La interpretación requiere régimen sinusoidal y definición explícita de fase.\r
        en: Interpretation requires sinusoidal regime and explicit phase definition.\r
    graph_rules:\r
    - id: vt_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se asocia a la forma temporal de la onda en eje t.\r
        en: It is linked to waveform temporal shape on time axis.\r
    likely_errors:\r
    - id: vt_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: usar valor instantáneo como si fuera valor eficaz.'\r
        en: 'Common mistake: using instantaneous value as if it were RMS.'\r
    next_step_rules:\r
    - id: vt_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Convierte a Vrms para análisis energético.\r
        en: Convert to RMS for energetic analysis.\r
  omega:\r
    summary_rules:\r
    - id: om_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: omega cuantifica rapidez angular de oscilación.\r
        en: Angular frequency quantifies angular oscillation rate.\r
    physical_reading_rules:\r
    - id: om_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: A mayor omega, más rápido cambia la fase de la señal.\r
        en: Larger angular frequency means faster phase change.\r
    coherence_rules:\r
    - id: om_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe ser proporcional a f mediante factor 2π.\r
        en: It must be proportional to frequency through 2π factor.\r
    model_validity_rules:\r
    - id: om_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Requiere periodicidad estable para conservar significado operativo.\r
        en: Requires stable periodicity to keep operational meaning.\r
    graph_rules:\r
    - id: om_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Controla compresión o expansión temporal de ciclos.\r
        en: Controls temporal compression or expansion of cycles.\r
    likely_errors:\r
    - id: om_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error frecuente: sustituir omega por f sin conversión.'\r
        en: 'Frequent error: replacing angular frequency with frequency without conversion.'\r
    next_step_rules:\r
    - id: om_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Verifica unidades antes de usar funciones trigonométricas.\r
        en: Check units before using trigonometric functions.\r
  T:\r
    summary_rules:\r
    - id: tper_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: T representa duración de un ciclo completo.\r
        en: Period represents full-cycle duration.\r
    physical_reading_rules:\r
    - id: tper_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Disminuye cuando la señal oscila más rápido.\r
        en: It decreases when the signal oscillates faster.\r
    coherence_rules:\r
    - id: tper_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Debe cumplir relación inversa con f.\r
        en: It must satisfy inverse relation with frequency.\r
    model_validity_rules:\r
    - id: tper_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Solo tiene sentido en señal periódica definida.\r
        en: It only makes sense for a defined periodic signal.\r
    graph_rules:\r
    - id: tper_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se lee como separación temporal entre máximos consecutivos.\r
        en: It is read as temporal separation between consecutive maxima.\r
    likely_errors:\r
    - id: tper_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error típico: usar fórmula con 2π para período.'\r
        en: 'Typical error: using 2π formula for period.'\r
    next_step_rules:\r
    - id: tper_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Revisa reciprocidad con frecuencia numéricamente.\r
        en: Check numerical reciprocity with frequency.\r
  Vrms:\r
    summary_rules:\r
    - id: vr_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Vrms resume capacidad energética equivalente de la señal.\r
        en: RMS voltage summarizes equivalent energetic capacity of the signal.\r
    physical_reading_rules:\r
    - id: vr_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Permite comparar AC con DC desde la perspectiva de potencia útil.\r
        en: It allows AC/DC comparison from useful-power perspective.\r
    coherence_rules:\r
    - id: vr_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: En senoide pura no puede superar Vmax.\r
        en: In pure sine it cannot exceed peak amplitude.\r
    model_validity_rules:\r
    - id: vr_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Conversión simple requiere forma sinusoidal sin distorsión dominante.\r
        en: Simple conversion requires sinusoidal shape without dominant distortion.\r
    graph_rules:\r
    - id: vr_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se interpreta como escala operativa de tensión en red.\r
        en: It is interpreted as operational voltage scale in network.\r
    likely_errors:\r
    - id: vr_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error común: promediar algebraicamente la senoide para estimar RMS.'\r
        en: 'Common error: algebraically averaging sine wave to estimate RMS.'\r
    next_step_rules:\r
    - id: vr_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Con Vrms e Irms evalúa potencia activa con fase.\r
        en: With RMS voltage and current evaluate active power with phase.\r
  P:\r
    summary_rules:\r
    - id: p_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: P mide transferencia media neta de energía en AC.\r
        en: Active power measures net mean energy transfer in AC.\r
    physical_reading_rules:\r
    - id: p_read\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Depende de Vrms, Irms y del coseno del desfase.\r
        en: It depends on RMS voltage, RMS current, and phase cosine.\r
    coherence_rules:\r
    - id: p_coh\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Si phi aumenta hacia pi/2, P debe disminuir.\r
        en: If phase approaches pi/2, active power must decrease.\r
    model_validity_rules:\r
    - id: p_val\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Válida en marco sinusoidal y convención coherente de fase.\r
        en: Valid in sinusoidal framework with coherent phase convention.\r
    graph_rules:\r
    - id: p_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Se interpreta como componente útil de la demanda eléctrica.\r
        en: It is interpreted as useful component of electrical demand.\r
    likely_errors:\r
    - id: p_err\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: 'Error típico: omitir cos(phi) y sobreestimar potencia activa.'\r
        en: 'Typical error: omitting cosine factor and overestimating active power.'\r
    next_step_rules:\r
    - id: p_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Contrasta potencia activa con desfase para diagnosticar eficiencia.\r
        en: Contrast active power and phase shift to diagnose efficiency.\r
`;export{e as default};
