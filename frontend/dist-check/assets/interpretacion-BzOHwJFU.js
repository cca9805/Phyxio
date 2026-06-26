const e=`version: 2\r
id: interpretacion-fase\r
leaf_id: fase\r
nombre:\r
  es: Interpretación de fase en MHS\r
  en: Interpretation of phase in SHM\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: oscilaciones\r
  parent_id: mhs\r
  ruta_relativa: fisica-clasica/mecanica/oscilaciones/mhs/fase\r
dependencies:\r
  formulas: [ fase_instante, posicion_con_fase, velocidad_con_fase, desfase_entre_osciladores ]\r
  magnitudes: [ phi_t, phi, delta_phi, omega, x, v, A, t, phi1, phi2 ]\r
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
    title: { es: Resumen de fase, en: Phase summary }\r
  physical_reading:\r
    title: { es: Lectura causal, en: Causal reading }\r
  coherence:\r
    title: { es: Coherencia del resultado, en: Result coherence }\r
  model_validity:\r
    title: { es: Validez del modelo, en: Model validity }\r
  graph_reading:\r
    title: { es: Lectura gráfica, en: Graph reading }\r
  likely_errors:\r
    title: { es: Errores probables, en: Likely errors }\r
  next_step:\r
    title: { es: Siguiente decisión, en: Next decision }\r
\r
targets:\r
  phi_t:\r
    summary_rules:\r
    - id: phi_t_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[phi_t]] resume físicamente qué punto del ciclo ocupa el oscilador en ese instante.", en: "[[phi_t]] physically summarizes which point of the cycle the oscillator occupies at that instant." }\r
    physical_reading_rules:\r
    - id: phi_t_phys\r
      when: "true"\r
      status: info\r
      text: { es: "Si [[t]] avanza y [[omega]] permanece fija, entonces [[phi_t]] cambia de forma uniforme porque el sistema recorre el ciclo a ritmo constante.", en: "If [[t]] advances and [[omega]] remains fixed, then [[phi_t]] changes uniformly because the system scans the cycle at a constant rate." }\r
    coherence_rules:\r
    - id: phi_t_coh\r
      when: "true"\r
      status: ok\r
      text: { es: "[[phi_t]] debe ser coherente con [[phi]], [[omega]] y la referencia temporal elegida.", en: "[[phi_t]] should be coherent with [[phi]], [[omega]], and the chosen temporal reference." }\r
    model_validity_rules:\r
    - id: phi_t_valid\r
      when: "true"\r
      status: ok\r
      text: { es: "La lectura es válida cuando el movimiento puede modelarse como MHS con pulsación aproximadamente constante.", en: "The reading is valid when the motion can be modeled as SHM with approximately constant angular frequency." }\r
    graph_rules:\r
    - id: phi_t_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En la gráfica, [[phi_t]] permite leer si el sistema está cerca de equilibrio, extremo o cruce intermedio del ciclo.", en: "On the graph, [[phi_t]] makes it possible to read whether the system is near equilibrium, an extreme, or an intermediate crossing of the cycle." }\r
    likely_errors:\r
    - id: phi_t_err\r
      when: "true"\r
      status: warning\r
      text: { es: "Error común: tratar [[phi_t]] como una posición lineal en lugar de un estado angular del ciclo.", en: "Common error: treating [[phi_t]] as a linear position rather than as an angular state of the cycle." }\r
    next_step_rules:\r
    - id: phi_t_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Usar [[phi_t]] para decidir si conviene proyectar el estado sobre [[x]] o sobre [[v]].", en: "Use [[phi_t]] to decide whether the state should be projected onto [[x]] or onto [[v]]." }\r
\r
  x:\r
    summary_rules:\r
    - id: x_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[x]] es la proyección espacial del estado de fase, no la fase completa por sí sola.", en: "[[x]] is the spatial projection of the phase state, not the full phase by itself." }\r
    physical_reading_rules:\r
    - id: x_phys\r
      when: "true"\r
      status: info\r
      text: { es: "Si cambia [[phi_t]], entonces cambia [[x]] porque la fase determina qué fracción de la amplitud se observa sobre el eje espacial.", en: "If [[phi_t]] changes, then [[x]] changes because phase determines which fraction of amplitude is observed on the spatial axis." }\r
    coherence_rules:\r
    - id: x_coh\r
      when: "true"\r
      status: ok\r
      text: { es: "[[x]] debe permanecer entre los límites marcados por [[A]] en el modelo ideal.", en: "[[x]] should remain between the limits set by [[A]] in the ideal model." }\r
    model_validity_rules:\r
    - id: x_valid\r
      when: "true"\r
      status: ok\r
      text: { es: "La interpretación es válida cuando la oscilación es sinusoidal y la amplitud [[A]] permanece estable.", en: "Interpretation is valid when oscillation is sinusoidal and amplitude [[A]] remains stable." }\r
    graph_rules:\r
    - id: x_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En la gráfica, [[x]] ayuda a ubicar la fase en términos de cercanía al equilibrio o a los extremos.", en: "On the graph, [[x]] helps place phase in terms of proximity to equilibrium or to turning points." }\r
    likely_errors:\r
    - id: x_err\r
      when: "true"\r
      status: warning\r
      text: { es: "Error común: suponer que conocer [[x]] basta para distinguir dos estados con distinto sentido de movimiento.", en: "Common error: assuming that knowing [[x]] is enough to distinguish two states with different motion direction." }\r
    next_step_rules:\r
    - id: x_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Combinar [[x]] con [[v]] o con [[phi_t]] para cerrar una lectura completa del estado.", en: "Combine [[x]] with [[v]] or [[phi_t]] to close a full state reading." }\r
\r
  v:\r
    summary_rules:\r
    - id: v_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[v]] distingue el sentido instantáneo con el que el oscilador recorre el ciclo.", en: "[[v]] distinguishes the instantaneous direction with which the oscillator moves through the cycle." }\r
    physical_reading_rules:\r
    - id: v_phys\r
      when: "true"\r
      status: info\r
      text: { es: "Si cambia la fase y el sistema cruza por regiones distintas del ciclo, entonces [[v]] cambia de signo o magnitud porque el movimiento no apunta siempre en la misma dirección.", en: "If phase changes and the system crosses different regions of the cycle, then [[v]] changes sign or magnitude because motion does not always point in the same direction." }\r
    coherence_rules:\r
    - id: v_coh\r
      when: "true"\r
      status: ok\r
      text: { es: "[[v]] debe ser coherente con [[A]], [[omega]] y el estado de fase inferido.", en: "[[v]] should be coherent with [[A]], [[omega]], and the inferred phase state." }\r
    model_validity_rules:\r
    - id: v_valid\r
      when: "true"\r
      status: ok\r
      text: { es: "La lectura es válida si la velocidad deriva de un movimiento sinusoidal sin discontinuidades dinámicas relevantes.", en: "The reading is valid if velocity derives from sinusoidal motion without relevant dynamical discontinuities." }\r
    graph_rules:\r
    - id: v_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En la gráfica, [[v]] aclara si el oscilador avanza hacia equilibrio o se aleja de él.", en: "On the graph, [[v]] clarifies whether the oscillator moves toward equilibrium or away from it." }\r
    likely_errors:\r
    - id: v_err\r
      when: "true"\r
      status: warning\r
      text: { es: "Error común: usar solo [[x]] e ignorar [[v]] cuando se quiere distinguir el sentido del recorrido.", en: "Common error: using only [[x]] and ignoring [[v]] when one wants to distinguish motion direction." }\r
    next_step_rules:\r
    - id: v_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Comparar [[v]] con [[x]] para identificar en qué tramo del ciclo está el sistema.", en: "Compare [[v]] with [[x]] to identify which part of the cycle the system is in." }\r
\r
  delta_phi:\r
    summary_rules:\r
    - id: delta_phi_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[delta_phi]] expresa físicamente el adelanto o retraso angular entre dos osciladores comparables.", en: "[[delta_phi]] physically expresses angular lead or lag between two comparable oscillators." }\r
    physical_reading_rules:\r
    - id: delta_phi_phys\r
      when: "true"\r
      status: info\r
      text: { es: "Si [[phi2]] es mayor que [[phi1]] bajo la misma convención, entonces [[delta_phi]] resulta positiva y el segundo oscilador adelanta en fase.", en: "If [[phi2]] is greater than [[phi1]] under the same convention, then [[delta_phi]] is positive and the second oscillator leads in phase." }\r
    coherence_rules:\r
    - id: delta_phi_coh\r
      when: "true"\r
      status: ok\r
      text: { es: "[[delta_phi]] debe leerse con una convención de signo y una referencia temporal compartidas.", en: "[[delta_phi]] should be read with a shared sign convention and time reference." }\r
    model_validity_rules:\r
    - id: delta_phi_valid\r
      when: "true"\r
      status: ok\r
      text: { es: "La comparación es válida cuando ambos osciladores se describen con la misma definición de fase.", en: "The comparison is valid when both oscillators are described with the same phase definition." }\r
    graph_rules:\r
    - id: delta_phi_graph\r
      when: "true"\r
      status: info\r
      text: { es: "Gráficamente, [[delta_phi]] se interpreta como un corrimiento horizontal relativo entre estados cíclicos equivalentes.", en: "Graphically, [[delta_phi]] is interpreted as a relative horizontal shift between equivalent cyclic states." }\r
    likely_errors:\r
    - id: delta_phi_err\r
      when: "true"\r
      status: warning\r
      text: { es: "Error común: confundir un desfase positivo con mayor amplitud o mayor energía.", en: "Common error: confusing a positive phase difference with greater amplitude or greater energy." }\r
    next_step_rules:\r
    - id: delta_phi_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Usar [[delta_phi]] para decidir quién adelanta y si el retraso puede traducirse a una lectura temporal equivalente.", en: "Use [[delta_phi]] to decide who leads and whether the lag can be translated into an equivalent time reading." }\r
\r
  omega:\r
    summary_rules:\r
    - id: omega_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[omega]] fija el ritmo con el que la fase avanza, no el punto instantáneo del ciclo por sí sola.", en: "[[omega]] sets the rate at which phase advances, not the instantaneous point of the cycle by itself." }\r
    physical_reading_rules:\r
    - id: omega_phys\r
      when: "true"\r
      status: info\r
      text: { es: "Si [[omega]] aumenta, entonces [[phi_t]] cambia más rápido porque el ciclo se recorre en menos tiempo.", en: "If [[omega]] increases, then [[phi_t]] changes faster because the cycle is traversed in less time." }\r
    coherence_rules:\r
    - id: omega_coh\r
      when: "true"\r
      status: ok\r
      text: { es: "[[omega]] debe ser positiva y compatible con el periodo o la rapidez angular asumidos.", en: "[[omega]] should be positive and compatible with the assumed period or angular rate." }\r
    model_validity_rules:\r
    - id: omega_valid\r
      when: "true"\r
      status: ok\r
      text: { es: "La lectura lineal de fase exige que [[omega]] sea aproximadamente constante en la ventana de análisis.", en: "Linear phase reading requires [[omega]] to remain approximately constant over the analysis window." }\r
    graph_rules:\r
    - id: omega_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En la gráfica, [[omega]] controla qué tan rápido se recorren posiciones equivalentes del ciclo.", en: "On the graph, [[omega]] controls how quickly equivalent cycle positions are traversed." }\r
    likely_errors:\r
    - id: omega_err\r
      when: "true"\r
      status: warning\r
      text: { es: "Error común: confundir [[omega]] con la fase misma o usar hertz sin convertir a radianes por segundo.", en: "Common error: confusing [[omega]] with phase itself or using hertz without converting to radians per second." }\r
    next_step_rules:\r
    - id: omega_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Revisar [[omega]] antes de comparar desfases o tiempos equivalentes entre señales.", en: "Check [[omega]] before comparing phase differences or equivalent times between signals." }\r
\r
  phi:\r
    summary_rules:\r
    - id: phi_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[phi]] fija el corrimiento inicial del ciclo y explica por qué dos osciladores pueden arrancar en estados distintos.", en: "[[phi]] sets the initial cycle offset and explains why two oscillators may start from different states." }\r
    physical_reading_rules:\r
    - id: phi_phys\r
      when: "true"\r
      status: info\r
      text: { es: "Si cambia [[phi]] con [[omega]] fija, entonces todo el patrón temporal se desplaza porque el sistema arranca desde otra parte del ciclo.", en: "If [[phi]] changes with fixed [[omega]], then the whole temporal pattern shifts because the system starts from a different part of the cycle." }\r
    coherence_rules:\r
    - id: phi_coh\r
      when: "true"\r
      status: ok\r
      text: { es: "[[phi]] debe ser coherente con la referencia temporal elegida en el problema.", en: "[[phi]] should be coherent with the temporal reference chosen in the problem." }\r
    model_validity_rules:\r
    - id: phi_valid\r
      when: "true"\r
      status: ok\r
      text: { es: "Su interpretación es estable cuando el origen temporal no se redefine durante el análisis.", en: "Its interpretation is stable when the temporal origin is not redefined during analysis." }\r
    graph_rules:\r
    - id: phi_graph\r
      when: "true"\r
      status: info\r
      text: { es: "Gráficamente, [[phi]] se ve como un corrimiento del arranque respecto a otro oscilador o a una referencia patrón.", en: "Graphically, [[phi]] is seen as a shift of the starting point relative to another oscillator or to a reference pattern." }\r
    likely_errors:\r
    - id: phi_err\r
      when: "true"\r
      status: warning\r
      text: { es: "Error común: cambiar la referencia temporal y mantener [[phi]] como si nada hubiera ocurrido.", en: "Common error: changing the temporal reference and keeping [[phi]] as if nothing had happened." }\r
    next_step_rules:\r
    - id: phi_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Contrastar [[phi]] con [[delta_phi]] para distinguir corrimiento inicial de diferencia entre señales.", en: "Contrast [[phi]] with [[delta_phi]] to distinguish initial offset from signal difference." }\r
\r
  A:\r
    summary_rules:\r
    - id: A_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[A]] fija la escala del movimiento, pero no decide por sí sola dónde está el sistema en el ciclo.", en: "[[A]] sets the scale of motion, but it does not by itself decide where the system is in the cycle." }\r
    physical_reading_rules:\r
    - id: A_phys\r
      when: "true"\r
      status: info\r
      text: { es: "Si [[A]] cambia con la misma fase, entonces cambia la magnitud observable de [[x]] y [[v]] porque el ciclo conserva forma pero no escala.", en: "If [[A]] changes with the same phase, then the observable magnitude of [[x]] and [[v]] changes because the cycle keeps its shape but not its scale." }\r
    coherence_rules:\r
    - id: A_coh\r
      when: "true"\r
      status: ok\r
      text: { es: "[[A]] debe ser no negativa y coherente con los máximos de [[x]] y [[v]].", en: "[[A]] should be non-negative and coherent with maxima of [[x]] and [[v]]." }\r
    model_validity_rules:\r
    - id: A_valid\r
      when: "true"\r
      status: ok\r
      text: { es: "Su lectura como parámetro fijo exige ausencia de amortiguamiento dominante en la ventana considerada.", en: "Reading it as a fixed parameter requires absence of dominant damping over the considered window." }\r
    graph_rules:\r
    - id: A_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En la gráfica, [[A]] fija la altura máxima de la oscilación espacial asociada a la fase.", en: "On the graph, [[A]] sets the maximum height of the spatial oscillation associated with phase." }\r
    likely_errors:\r
    - id: A_err\r
      when: "true"\r
      status: warning\r
      text: { es: "Error común: confundir cambio de amplitud con cambio de fase.", en: "Common error: confusing amplitude change with phase change." }\r
    next_step_rules:\r
    - id: A_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Separar siempre escala [[A]] de estado angular [[phi_t]] antes de interpretar el resultado.", en: "Always separate scale [[A]] from angular state [[phi_t]] before interpreting the result." }\r
`;export{e as default};
