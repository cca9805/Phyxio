const e=`version: 2\r
id: interpretacion-energia-en-mhs\r
leaf_id: energia-en-mhs\r
nombre:\r
  es: Interpretacion de energia en MHS\r
  en: Interpretation of energy in SHM\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: oscilaciones\r
  parent_id: mhs\r
  ruta_relativa: fisica-clasica/mecanica/oscilaciones/mhs/energia-en-mhs\r
dependencies:\r
  formulas: [ energia_cinetica, energia_potencial_elastica, energia_total_mhs, energia_total_amplitud, conservacion_energia_mhs ]\r
  magnitudes: [ K, U, E, m, k, x, v, A, E_total ]\r
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
    title: { es: Resumen energetico, en: Energy summary }\r
  physical_reading:\r
    title: { es: Lectura causal, en: Causal reading }\r
  coherence:\r
    title: { es: Coherencia del resultado, en: Result coherence }\r
  model_validity:\r
    title: { es: Validez del modelo, en: Model validity }\r
  graph_reading:\r
    title: { es: Lectura grafica, en: Graph reading }\r
  likely_errors:\r
    title: { es: Errores probables, en: Likely errors }\r
  next_step:\r
    title: { es: Siguiente decision, en: Next decision }\r
\r
targets:\r
  K:\r
    summary_rules:\r
    - id: K_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[K]] resume fisicamente cuanta energia del sistema esta actuando como movimiento instantaneo en ese estado.", en: "[[K]] physically summarizes how much of the system energy is acting as instantaneous motion in that state." }\r
    physical_reading_rules:\r
    - id: K_phys\r
      when: "true"\r
      status: info\r
      text: { es: "Si aumenta la rapidez [[v]], entonces una mayor fraccion de la energia pasa a manifestarse como [[K]], porque el movimiento instantaneo domina sobre el almacenamiento elastico.", en: "If speed [[v]] increases, then a larger fraction of energy appears as [[K]] because instantaneous motion becomes more dominant than elastic storage." }\r
    coherence_rules:\r
    - id: K_coh\r
      when: "true"\r
      status: ok\r
      text: { es: "[[K]] debe ser no negativa y compatible con [[E]] total.", en: "[[K]] should be non-negative and compatible with total [[E]]." }\r
    model_validity_rules:\r
    - id: K_valid\r
      when: "true"\r
      status: ok\r
      text: { es: "La interpretacion es valida en mecanica clasica no relativista.", en: "Interpretation is valid in classical non-relativistic mechanics." }\r
    graph_rules:\r
    - id: K_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En una grafica energetica, [[K]] crece cerca del equilibrio.", en: "In an energy graph, [[K]] grows near equilibrium." }\r
    likely_errors:\r
    - id: K_err\r
      when: "true"\r
      status: warning\r
      text: { es: "Error comun: creer que [[K]] es maxima en los extremos.", en: "Common error: thinking [[K]] is maximum at turning points." }\r
    next_step_rules:\r
    - id: K_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Comparar [[K]] con [[U]] para cerrar el balance de energia.", en: "Compare [[K]] with [[U]] to close the energy balance." }\r
\r
  U:\r
    summary_rules:\r
    - id: U_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[U]] representa la energia almacenada en la configuracion elastica.", en: "[[U]] represents energy stored in elastic configuration." }\r
    physical_reading_rules:\r
    - id: U_phys\r
      when: "true"\r
      status: info\r
      text: { es: "[[U]] aumenta con el cuadrado de [[x]] segun {{ f:energia_potencial_elastica }}.", en: "[[U]] increases with the square of [[x]] according to {{ f:energia_potencial_elastica }}." }\r
    coherence_rules:\r
    - id: U_coh\r
      when: "true"\r
      status: ok\r
      text: { es: "[[U]] debe ser no negativa y minima cerca del equilibrio ideal.", en: "[[U]] should be non-negative and minimum near ideal equilibrium." }\r
    model_validity_rules:\r
    - id: U_valid\r
      when: "true"\r
      status: ok\r
      text: { es: "Valida si el resorte sigue una respuesta lineal tipo Hooke.", en: "Valid if the spring follows a Hooke-like linear response." }\r
    graph_rules:\r
    - id: U_graph\r
      when: "true"\r
      status: info\r
      text: { es: "[[U]] domina en los extremos del movimiento donde [[x]] es grande en magnitud.", en: "[[U]] dominates at turning points where [[x]] is large in magnitude." }\r
    likely_errors:\r
    - id: U_err\r
      when: "true"\r
      status: warning\r
      text: { es: "Error comun: asociar [[U]] a velocidad en lugar de desplazamiento.", en: "Common error: associating [[U]] with velocity instead of displacement." }\r
    next_step_rules:\r
    - id: U_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Contrastar [[U]] con [[K]] y [[E_total]] para verificar conservacion.", en: "Contrast [[U]] with [[K]] and [[E_total]] to verify conservation." }\r
\r
  E:\r
    summary_rules:\r
    - id: E_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[E]] fija la escala energetica global del MHS ideal.", en: "[[E]] sets the global energetic scale of ideal SHM." }\r
    physical_reading_rules:\r
    - id: E_phys\r
      when: "true"\r
      status: info\r
      text: { es: "[[E]] se interpreta como suma de [[K]] y [[U]] mediante {{ f:energia_total_mhs }}.", en: "[[E]] is interpreted as the sum of [[K]] and [[U]] through {{ f:energia_total_mhs }}." }\r
    coherence_rules:\r
    - id: E_coh\r
      when: "true"\r
      status: ok\r
      text: { es: "[[E]] debe ser no negativa y coherente con [[A]] y [[k]] si se usa {{ f:energia_total_amplitud }}.", en: "[[E]] should be non-negative and coherent with [[A]] and [[k]] if {{ f:energia_total_amplitud }} is used." }\r
    model_validity_rules:\r
    - id: E_valid\r
      when: "true"\r
      status: ok\r
      text: { es: "La lectura de constancia es valida cuando no hay disipacion dominante.", en: "The constancy reading is valid when no dominant dissipation is present." }\r
    graph_rules:\r
    - id: E_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En la grafica, [[E]] debe aparecer como nivel total estable del sistema ideal.", en: "In the graph, [[E]] should appear as a stable total level for the ideal system." }\r
    likely_errors:\r
    - id: E_err\r
      when: "true"\r
      status: warning\r
      text: { es: "Error comun: tratar [[E]] como variable oscilante aun en sistema ideal.", en: "Common error: treating [[E]] as an oscillating quantity in an ideal system." }\r
    next_step_rules:\r
    - id: E_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Usar [[E]] para decidir si el modelo ideal sigue siendo consistente con los datos.", en: "Use [[E]] to decide whether the ideal model remains consistent with the data." }\r
\r
  E_total:\r
    summary_rules:\r
    - id: Et_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[E_total]] enfatiza el principio de conservacion energetica en el sistema ideal.", en: "[[E_total]] emphasizes the energy-conservation principle in the ideal system." }\r
    physical_reading_rules:\r
    - id: Et_phys\r
      when: "true"\r
      status: info\r
      text: { es: "Segun {{ f:conservacion_energia_mhs }}, [[E_total]] no cambia mientras se intercambian [[K]] y [[U]].", en: "According to {{ f:conservacion_energia_mhs }}, [[E_total]] does not change while [[K]] and [[U]] exchange." }\r
    coherence_rules:\r
    - id: Et_coh\r
      when: "true"\r
      status: ok\r
      text: { es: "[[E_total]] debe leerse de forma coherente con [[E]] y con el caracter ideal del modelo.", en: "[[E_total]] should be read coherently with [[E]] and with the ideal character of the model." }\r
    model_validity_rules:\r
    - id: Et_valid\r
      when: "true"\r
      status: ok\r
      text: { es: "Valido cuando el trabajo externo neto y la disipacion son despreciables.", en: "Valid when net external work and dissipation are negligible." }\r
    graph_rules:\r
    - id: Et_graph\r
      when: "true"\r
      status: info\r
      text: { es: "La curva o referencia de [[E_total]] no debe presentar oscilacion idealmente.", en: "The [[E_total]] reference should not oscillate ideally." }\r
    likely_errors:\r
    - id: Et_err\r
      when: "true"\r
      status: warning\r
      text: { es: "Error comun: interpretar intercambios entre [[K]] y [[U]] como perdida de energia total.", en: "Common error: interpreting exchange between [[K]] and [[U]] as loss of total energy." }\r
    next_step_rules:\r
    - id: Et_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Si [[E_total]] deja de ser estable, revisar si el sistema sigue siendo ideal.", en: "If [[E_total]] stops being stable, check whether the system is still ideal." }\r
\r
  A:\r
    summary_rules:\r
    - id: A_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[A]] fija la escala maxima de oscilacion y, por eso, condiciona la escala total de energia del sistema ideal.", en: "[[A]] sets the maximum oscillation scale and therefore conditions the total energy scale of the ideal system." }\r
    physical_reading_rules:\r
    - id: A_phys\r
      when: "true"\r
      status: info\r
      text: { es: "Si [[A]] aumenta con [[k]] fija, entonces la energia total ideal crece porque el sistema alcanza deformaciones maximas mayores.", en: "If [[A]] increases with fixed [[k]], then ideal total energy grows because the system reaches larger maximum deformations." }\r
    coherence_rules:\r
    - id: A_coh\r
      when: "true"\r
      status: ok\r
      text: { es: "[[A]] debe ser no negativa y coherente con la escala energetica inferida para [[E]].", en: "[[A]] should be non-negative and coherent with the inferred energy scale for [[E]]." }\r
    model_validity_rules:\r
    - id: A_valid\r
      when: "true"\r
      status: ok\r
      text: { es: "Su uso como parametro estable exige un oscilador ideal sin amortiguamiento dominante en la ventana analizada.", en: "Using it as a stable parameter requires an ideal oscillator without dominant damping over the analyzed window." }\r
    graph_rules:\r
    - id: A_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En una lectura grafica, [[A]] fija los extremos del desplazamiento y ayuda a interpretar la escala de [[U]] y [[E]].", en: "In a graph reading, [[A]] sets displacement extremes and helps interpret the scale of [[U]] and [[E]]." }\r
    likely_errors:\r
    - id: A_err\r
      when: "true"\r
      status: warning\r
      text: { es: "Error comun: tratar [[A]] como si variara libremente dentro de cada ciclo ideal.", en: "Common error: treating [[A]] as if it varied freely within each ideal cycle." }\r
    next_step_rules:\r
    - id: A_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Usar [[A]] para contrastar si la escala de [[E]] es compatible con el resto del balance.", en: "Use [[A]] to test whether the scale of [[E]] is compatible with the rest of the balance." }\r
\r
  k:\r
    summary_rules:\r
    - id: k_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[k]] expresa cuanta rigidez opone el sistema y determina cuan costosa es energeticamente una deformacion dada.", en: "[[k]] expresses how much stiffness the system provides and determines how energetically costly a given deformation is." }\r
    physical_reading_rules:\r
    - id: k_phys\r
      when: "true"\r
      status: info\r
      text: { es: "Si [[k]] aumenta para el mismo [[x]], entonces [[U]] crece porque el sistema almacena mas energia por unidad de deformacion.", en: "If [[k]] increases for the same [[x]], then [[U]] grows because the system stores more energy per unit deformation." }\r
    coherence_rules:\r
    - id: k_coh\r
      when: "true"\r
      status: ok\r
      text: { es: "[[k]] debe ser positiva y consistente con la escala de [[U]] y [[E]] reconstruidas.", en: "[[k]] should be positive and consistent with the reconstructed scales of [[U]] and [[E]]." }\r
    model_validity_rules:\r
    - id: k_valid\r
      when: "true"\r
      status: ok\r
      text: { es: "La interpretacion energetica requiere que [[k]] represente una rigidez aproximadamente lineal en el rango observado.", en: "Energetic interpretation requires [[k]] to represent approximately linear stiffness in the observed range." }\r
    graph_rules:\r
    - id: k_graph\r
      when: "true"\r
      status: info\r
      text: { es: "Graficamente, [[k]] controla cuan rapido crece [[U]] al alejarse del equilibrio.", en: "Graphically, [[k]] controls how fast [[U]] grows away from equilibrium." }\r
    likely_errors:\r
    - id: k_err\r
      when: "true"\r
      status: warning\r
      text: { es: "Error comun: leer [[k]] como energia en lugar de parametro de rigidez.", en: "Common error: reading [[k]] as an energy rather than a stiffness parameter." }\r
    next_step_rules:\r
    - id: k_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Contrastar [[k]] con [[A]] y [[x]] para decidir si el modelo lineal sigue siendo razonable.", en: "Contrast [[k]] with [[A]] and [[x]] to decide whether the linear model remains reasonable." }\r
\r
  m:\r
    summary_rules:\r
    - id: m_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[m]] fija la escala inercial y condiciona cuanta [[K]] corresponde a una rapidez dada.", en: "[[m]] sets the inertial scale and conditions how much [[K]] corresponds to a given speed." }\r
    physical_reading_rules:\r
    - id: m_phys\r
      when: "true"\r
      status: info\r
      text: { es: "Si [[m]] aumenta con [[v]] fija, entonces [[K]] crece porque hay mas inercia asociada al mismo estado de movimiento.", en: "If [[m]] increases with fixed [[v]], then [[K]] grows because more inertia is associated with the same motion state." }\r
    coherence_rules:\r
    - id: m_coh\r
      when: "true"\r
      status: ok\r
      text: { es: "[[m]] debe ser positiva y compatible con la escala de energia cinetica inferida.", en: "[[m]] should be positive and compatible with the inferred kinetic-energy scale." }\r
    model_validity_rules:\r
    - id: m_valid\r
      when: "true"\r
      status: ok\r
      text: { es: "Su uso es valido cuando la masa efectiva del sistema puede tratarse como estable durante la observacion.", en: "Its use is valid when the effective system mass can be treated as stable during observation." }\r
    graph_rules:\r
    - id: m_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En la lectura grafica, [[m]] no cambia la forma del intercambio pero si la escala de [[K]].", en: "In graph reading, [[m]] does not change the exchange pattern but it does change the scale of [[K]]." }\r
    likely_errors:\r
    - id: m_err\r
      when: "true"\r
      status: warning\r
      text: { es: "Error comun: omitir [[m]] al interpretar energia de movimiento.", en: "Common error: omitting [[m]] when interpreting motion-related energy." }\r
    next_step_rules:\r
    - id: m_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Revisar [[m]] cuando la escala de [[K]] no encaja con [[v]] medida.", en: "Check [[m]] when the scale of [[K]] does not fit measured [[v]]." }\r
\r
  v:\r
    summary_rules:\r
    - id: v_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[v]] indica cuan intenso es el movimiento instantaneo y por eso gobierna la lectura de [[K]].", en: "[[v]] indicates how intense instantaneous motion is and therefore governs the reading of [[K]]." }\r
    physical_reading_rules:\r
    - id: v_phys\r
      when: "true"\r
      status: info\r
      text: { es: "Si aumenta la magnitud de [[v]], entonces el sistema dedica mas energia al movimiento y [[K]] pasa a dominar sobre [[U]].", en: "If the magnitude of [[v]] increases, then the system devotes more energy to motion and [[K]] comes to dominate over [[U]]." }\r
    coherence_rules:\r
    - id: v_coh\r
      when: "true"\r
      status: ok\r
      text: { es: "[[v]] debe ser coherente con una [[K]] no negativa y con el estado dinamico descrito.", en: "[[v]] should be coherent with non-negative [[K]] and with the described dynamic state." }\r
    model_validity_rules:\r
    - id: v_valid\r
      when: "true"\r
      status: ok\r
      text: { es: "La lectura es valida cuando la velocidad medida representa bien el estado instantaneo del oscilador.", en: "The reading is valid when measured velocity represents the oscillator instantaneous state well." }\r
    graph_rules:\r
    - id: v_graph\r
      when: "true"\r
      status: info\r
      text: { es: "Graficamente, [[v]] es maxima cerca del equilibrio y eso coincide con maximos de [[K]].", en: "Graphically, [[v]] is maximal near equilibrium and that matches maxima of [[K]]." }\r
    likely_errors:\r
    - id: v_err\r
      when: "true"\r
      status: warning\r
      text: { es: "Error comun: pensar que [[v]] maxima y [[x]] maxima ocurren al mismo tiempo.", en: "Common error: thinking maximum [[v]] and maximum [[x]] happen at the same time." }\r
    next_step_rules:\r
    - id: v_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Comparar [[v]] con [[x]] para decidir que componente energetica deberia dominar.", en: "Compare [[v]] with [[x]] to decide which energetic component should dominate." }\r
\r
  x:\r
    summary_rules:\r
    - id: x_summary\r
      when: "true"\r
      status: info\r
      text: { es: "[[x]] informa cuan alejado esta el sistema del equilibrio y por eso estructura la lectura de [[U]].", en: "[[x]] tells how far the system is from equilibrium and therefore structures the reading of [[U]]." }\r
    physical_reading_rules:\r
    - id: x_phys\r
      when: "true"\r
      status: info\r
      text: { es: "Si aumenta la magnitud de [[x]], entonces crece [[U]] porque la deformacion elastica almacenada es mayor.", en: "If the magnitude of [[x]] increases, then [[U]] grows because stored elastic deformation becomes larger." }\r
    coherence_rules:\r
    - id: x_coh\r
      when: "true"\r
      status: ok\r
      text: { es: "[[x]] debe ser coherente con la escala de [[U]] y con la amplitud [[A]] declarada.", en: "[[x]] should be coherent with the scale of [[U]] and with the declared amplitude [[A]]." }\r
    model_validity_rules:\r
    - id: x_valid\r
      when: "true"\r
      status: ok\r
      text: { es: "La interpretacion es robusta mientras [[x]] permanezca dentro del rango lineal del resorte.", en: "Interpretation is robust while [[x]] stays within the spring linear range." }\r
    graph_rules:\r
    - id: x_graph\r
      when: "true"\r
      status: info\r
      text: { es: "En la grafica, grandes valores de [[x]] en magnitud corresponden a zonas donde [[U]] domina sobre [[K]].", en: "On the graph, large-magnitude [[x]] values correspond to regions where [[U]] dominates over [[K]]." }\r
    likely_errors:\r
    - id: x_err\r
      when: "true"\r
      status: warning\r
      text: { es: "Error comun: confundir [[x]] con distancia total recorrida durante varios ciclos.", en: "Common error: confusing [[x]] with total distance traveled over several cycles." }\r
    next_step_rules:\r
    - id: x_next\r
      when: "true"\r
      status: tip\r
      text: { es: "Usar [[x]] junto con [[v]] para decidir si el sistema esta mas cerca de un extremo o del equilibrio.", en: "Use [[x]] together with [[v]] to decide whether the system is closer to a turning point or to equilibrium." }\r
`;export{e as default};
