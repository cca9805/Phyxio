const e=`version: 2\r
id: interpretacion-rozamiento-y-disipacion\r
leaf_id: rozamiento-y-disipacion\r
nombre:\r
  es: Interpretacion de rozamiento y disipacion\r
  en: Interpretation of friction and dissipation\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: trabajo-y-energia\r
  parent_id: fuerzas-no-conservativas\r
  ruta_relativa: fisica-clasica/mecanica/trabajo-y-energia/fuerzas-no-conservativas/rozamiento-y-disipacion\r
dependencies:\r
  formulas:\r
  - fuerza_rozamiento_cinetico\r
  - trabajo_rozamiento\r
  - energia_disipada_rozamiento\r
  - trabajo_rozamiento_horizontal\r
  - balance_energia_mecanica_disipacion\r
  - variacion_energia_mecanica_rozamiento\r
  - potencia_disipada_media\r
  magnitudes:\r
  - fr\r
  - mu\r
  - N\r
  - d\r
  - Wr\r
  - Edis\r
  - m\r
  - g\r
  - Emi\r
  - Emf\r
  - dEm\r
  - Pdis\r
  - t\r
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
  Edis:\r
    summary_rules:\r
    - id: edis_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Edis mide cuanta energia mecanica ha pasado a calor, sonido o deformacion microscopica; se lee como cantidad positiva.\r
        en: Edis measures how much mechanical energy has become heat, sound, or microscopic deformation; it is read as positive.\r
    physical_reading_rules:\r
    - id: edis_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si Edis aumenta, el movimiento deja mas energia en el contacto y menos energia mecanica queda disponible.\r
        en: If Edis increases, motion leaves more energy in the contact and less mechanical energy remains available.\r
    coherence_rules:\r
    - id: edis_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Edis debe coincidir con el modulo de Wr cuando el rozamiento es la unica perdida mecanica.\r
        en: Edis must match the magnitude of Wr when friction is the only mechanical loss.\r
    model_validity_rules:\r
    - id: edis_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Interpreta Edis con este modelo solo si el contacto seco y el coeficiente mu constante son defendibles.\r
        en: Interpret Edis with this model only if dry contact and constant mu are defensible.\r
    graph_rules:\r
    - id: edis_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En la grafica, Edis debe crecer con la distancia de deslizamiento si fr se mantiene aproximadamente constante.\r
        en: On the graph, Edis should grow with sliding distance if fr remains approximately constant.\r
    likely_errors:\r
    - id: edis_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No escribas Edis negativa; el signo negativo pertenece a Wr, no a la energia disipada acumulada.\r
        en: Do not write Edis as negative; the negative sign belongs to Wr, not to accumulated dissipated energy.\r
    next_step_rules:\r
    - id: edis_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Despues de calcular Edis, revisa Pdis si el proceso ocurre en poco tiempo o puede calentar el contacto.\r
        en: After computing Edis, check Pdis if the process occurs quickly or may heat the contact.\r
  Wr:\r
    summary_rules:\r
    - id: wr_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Wr es el trabajo firmado del rozamiento sobre el sistema elegido.\r
        en: Wr is the signed work done by friction on the chosen system.\r
    physical_reading_rules:\r
    - id: wr_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Cuando el rozamiento se opone al movimiento, Wr reduce la energia mecanica del cuerpo.\r
        en: When friction opposes motion, Wr reduces the body's mechanical energy.\r
    coherence_rules:\r
    - id: wr_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Comprueba que el signo de Wr sea compatible con el sentido de fr y el desplazamiento d.\r
        en: Check that the sign of Wr is compatible with the directions of fr and displacement d.\r
    model_validity_rules:\r
    - id: wr_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Wr = -fr d presupone fuerza opuesta al movimiento durante el tramo analizado.\r
        en: Wr = -fr d assumes a force opposite to motion over the analyzed segment.\r
    graph_rules:\r
    - id: wr_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La pendiente de Wr frente a d debe ser negativa si fr se mantiene constante.\r
        en: The slope of Wr versus d must be negative if fr remains constant.\r
    likely_errors:\r
    - id: wr_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: El error tipico es usar el modulo de Wr y perder el signo del balance energetico.\r
        en: The common error is to use the magnitude of Wr and lose the sign in the energy balance.\r
    next_step_rules:\r
    - id: wr_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa Wr para cerrar dEm y despues traduce el modulo perdido como Edis.\r
        en: Use Wr to close dEm and then translate the lost magnitude as Edis.\r
  fr:\r
    summary_rules:\r
    - id: fr_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: fr fija la escala de la perdida mecanica por unidad de distancia.\r
        en: fr sets the scale of mechanical loss per unit distance.\r
    physical_reading_rules:\r
    - id: fr_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: fr aumenta si crece la normal N o si el par de superficies tiene mayor mu.\r
        en: fr increases if the normal force N grows or if the surface pair has larger mu.\r
    coherence_rules:\r
    - id: fr_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: fr debe tener unidades de newton y no puede confundirse con el coeficiente mu.\r
        en: fr must have units of newtons and must not be confused with coefficient mu.\r
    model_validity_rules:\r
    - id: fr_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: fr = mu N es una aproximacion de contacto seco, no una ley universal de cualquier resistencia.\r
        en: fr = mu N is a dry-contact approximation, not a universal law for every resistance.\r
    graph_rules:\r
    - id: fr_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Un grafico fr-N debe ser lineal si mu permanece constante.\r
        en: An fr-N graph must be linear if mu remains constant.\r
    likely_errors:\r
    - id: fr_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No sustituyas N por mg si el cuerpo esta en una rampa o tiene fuerzas verticales adicionales.\r
        en: Do not replace N by mg if the body is on a ramp or has additional vertical forces.\r
    next_step_rules:\r
    - id: fr_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Tras hallar fr, decide si necesitas trabajo Wr o potencia Pdis.\r
        en: After finding fr, decide whether work Wr or power Pdis is needed.\r
  Pdis:\r
    summary_rules:\r
    - id: pdis_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Pdis mide la rapidez de la disipacion, no solo su cantidad total.\r
        en: Pdis measures the rate of dissipation, not only its total amount.\r
    physical_reading_rules:\r
    - id: pdis_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Una Pdis alta indica riesgo de calentamiento aunque Edis no parezca enorme.\r
        en: A high Pdis indicates heating risk even if Edis does not seem huge.\r
    coherence_rules:\r
    - id: pdis_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Pdis debe expresarse en vatios y requiere un intervalo t positivo.\r
        en: Pdis must be expressed in watts and requires a positive time interval t.\r
    model_validity_rules:\r
    - id: pdis_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Si Pdis cambia mucho durante el proceso, la media solo da una estimacion global.\r
        en: If Pdis changes strongly during the process, the average only gives a global estimate.\r
    graph_rules:\r
    - id: pdis_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En una lectura temporal, un mismo Edis repartido en menos t implica mayor Pdis.\r
        en: In a time-based reading, the same Edis spread over less t implies greater Pdis.\r
    likely_errors:\r
    - id: pdis_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas energia en julios con potencia en vatios.\r
        en: Do not confuse energy in joules with power in watts.\r
    next_step_rules:\r
    - id: pdis_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si Pdis es grande, conecta el resultado con limites termicos del sistema.\r
        en: If Pdis is large, connect the result with the system's thermal limits.\r
  dEm:\r
    summary_rules:\r
    - id: dem_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: dEm resume el cambio firmado de energia mecanica producido por el rozamiento.\r
        en: dEm summarizes the signed mechanical-energy change produced by friction.\r
    physical_reading_rules:\r
    - id: dem_physical\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Si dEm es negativo, el sistema conserva energia total pero pierde energia mecanica disponible.\r
        en: If dEm is negative, the system conserves total energy but loses available mechanical energy.\r
    coherence_rules:\r
    - id: dem_coherence\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: dEm debe coincidir con Emf menos Emi y con Wr si el rozamiento es la unica fuerza no conservativa.\r
        en: dEm must match Emf minus Emi and Wr if friction is the only non-conservative force.\r
    model_validity_rules:\r
    - id: dem_validity\r
      when: 'true'\r
      status: ok\r
      text:\r
        es: Si hay motores, golpes o arrastre adicional, dEm ya no puede atribuirse solo al rozamiento seco.\r
        en: If motors, impacts, or additional drag exist, dEm can no longer be attributed only to dry friction.\r
    graph_rules:\r
    - id: dem_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El grafico debe mostrar que dEm cae al acumularse trabajo negativo.\r
        en: The graph should show dEm decreasing as negative work accumulates.\r
    likely_errors:\r
    - id: dem_error\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundas dEm con Edis; una es variacion firmada y la otra energia acumulada positiva.\r
        en: Do not confuse dEm with Edis; one is signed change and the other positive accumulated energy.\r
    next_step_rules:\r
    - id: dem_next\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Usa dEm para decidir si el siguiente modelo debe incluir otras fuerzas no conservativas.\r
        en: Use dEm to decide whether the next model must include other non-conservative forces.\r
  mu:\r
    summary_rules:\r
    - id: mu_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'mu: Resumen de la magnitud en el balance de rozamiento.'\r
        en: 'mu: Summary of the quantity in the friction balance.'\r
    physical_reading_rules:\r
    - id: mu_physical_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'mu: Lectura causal dentro de la perdida mecanica por rozamiento.'\r
        en: 'mu: Causal reading within mechanical loss by friction.'\r
    coherence_rules:\r
    - id: mu_coherence\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'mu: Comprueba unidades, signo y coherencia con las demas magnitudes.'\r
        en: 'mu: Check units, sign, and coherence with the other quantities.'\r
    model_validity_rules:\r
    - id: mu_model_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'mu: Valida solo dentro del modelo de contacto seco elegido.'\r
        en: 'mu: Valid only within the chosen dry-contact model.'\r
    graph_rules:\r
    - id: mu_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'mu: Debe leerse en la grafica como parte del vinculo entre contacto y energia.'\r
        en: 'mu: It should be read on the graph as part of the link between contact and energy.'\r
    likely_errors:\r
    - id: mu_likely_errors\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'mu: No la confundas con otra magnitud del balance energetico.'\r
        en: 'mu: Do not confuse it with another quantity in the energy balance.'\r
    next_step_rules:\r
    - id: mu_next_step\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'mu: Usala para decidir el siguiente calculo del balance de disipacion.'\r
        en: 'mu: Use it to decide the next calculation in the dissipation balance.'\r
  N:\r
    summary_rules:\r
    - id: N_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'N: Resumen de la magnitud en el balance de rozamiento.'\r
        en: 'N: Summary of the quantity in the friction balance.'\r
    physical_reading_rules:\r
    - id: N_physical_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'N: Lectura causal dentro de la perdida mecanica por rozamiento.'\r
        en: 'N: Causal reading within mechanical loss by friction.'\r
    coherence_rules:\r
    - id: N_coherence\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'N: Comprueba unidades, signo y coherencia con las demas magnitudes.'\r
        en: 'N: Check units, sign, and coherence with the other quantities.'\r
    model_validity_rules:\r
    - id: N_model_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'N: Valida solo dentro del modelo de contacto seco elegido.'\r
        en: 'N: Valid only within the chosen dry-contact model.'\r
    graph_rules:\r
    - id: N_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'N: Debe leerse en la grafica como parte del vinculo entre contacto y energia.'\r
        en: 'N: It should be read on the graph as part of the link between contact and energy.'\r
    likely_errors:\r
    - id: N_likely_errors\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'N: No la confundas con otra magnitud del balance energetico.'\r
        en: 'N: Do not confuse it with another quantity in the energy balance.'\r
    next_step_rules:\r
    - id: N_next_step\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'N: Usala para decidir el siguiente calculo del balance de disipacion.'\r
        en: 'N: Use it to decide the next calculation in the dissipation balance.'\r
  d:\r
    summary_rules:\r
    - id: d_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'd: Resumen de la magnitud en el balance de rozamiento.'\r
        en: 'd: Summary of the quantity in the friction balance.'\r
    physical_reading_rules:\r
    - id: d_physical_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'd: Lectura causal dentro de la perdida mecanica por rozamiento.'\r
        en: 'd: Causal reading within mechanical loss by friction.'\r
    coherence_rules:\r
    - id: d_coherence\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'd: Comprueba unidades, signo y coherencia con las demas magnitudes.'\r
        en: 'd: Check units, sign, and coherence with the other quantities.'\r
    model_validity_rules:\r
    - id: d_model_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'd: Valida solo dentro del modelo de contacto seco elegido.'\r
        en: 'd: Valid only within the chosen dry-contact model.'\r
    graph_rules:\r
    - id: d_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'd: Debe leerse en la grafica como parte del vinculo entre contacto y energia.'\r
        en: 'd: It should be read on the graph as part of the link between contact and energy.'\r
    likely_errors:\r
    - id: d_likely_errors\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'd: No la confundas con otra magnitud del balance energetico.'\r
        en: 'd: Do not confuse it with another quantity in the energy balance.'\r
    next_step_rules:\r
    - id: d_next_step\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'd: Usala para decidir el siguiente calculo del balance de disipacion.'\r
        en: 'd: Use it to decide the next calculation in the dissipation balance.'\r
  m:\r
    summary_rules:\r
    - id: m_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'm: Resumen de la magnitud en el balance de rozamiento.'\r
        en: 'm: Summary of the quantity in the friction balance.'\r
    physical_reading_rules:\r
    - id: m_physical_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'm: Lectura causal dentro de la perdida mecanica por rozamiento.'\r
        en: 'm: Causal reading within mechanical loss by friction.'\r
    coherence_rules:\r
    - id: m_coherence\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'm: Comprueba unidades, signo y coherencia con las demas magnitudes.'\r
        en: 'm: Check units, sign, and coherence with the other quantities.'\r
    model_validity_rules:\r
    - id: m_model_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'm: Valida solo dentro del modelo de contacto seco elegido.'\r
        en: 'm: Valid only within the chosen dry-contact model.'\r
    graph_rules:\r
    - id: m_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'm: Debe leerse en la grafica como parte del vinculo entre contacto y energia.'\r
        en: 'm: It should be read on the graph as part of the link between contact and energy.'\r
    likely_errors:\r
    - id: m_likely_errors\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'm: No la confundas con otra magnitud del balance energetico.'\r
        en: 'm: Do not confuse it with another quantity in the energy balance.'\r
    next_step_rules:\r
    - id: m_next_step\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'm: Usala para decidir el siguiente calculo del balance de disipacion.'\r
        en: 'm: Use it to decide the next calculation in the dissipation balance.'\r
  g:\r
    summary_rules:\r
    - id: g_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'g: Resumen de la magnitud en el balance de rozamiento.'\r
        en: 'g: Summary of the quantity in the friction balance.'\r
    physical_reading_rules:\r
    - id: g_physical_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'g: Lectura causal dentro de la perdida mecanica por rozamiento.'\r
        en: 'g: Causal reading within mechanical loss by friction.'\r
    coherence_rules:\r
    - id: g_coherence\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'g: Comprueba unidades, signo y coherencia con las demas magnitudes.'\r
        en: 'g: Check units, sign, and coherence with the other quantities.'\r
    model_validity_rules:\r
    - id: g_model_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'g: Valida solo dentro del modelo de contacto seco elegido.'\r
        en: 'g: Valid only within the chosen dry-contact model.'\r
    graph_rules:\r
    - id: g_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'g: Debe leerse en la grafica como parte del vinculo entre contacto y energia.'\r
        en: 'g: It should be read on the graph as part of the link between contact and energy.'\r
    likely_errors:\r
    - id: g_likely_errors\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'g: No la confundas con otra magnitud del balance energetico.'\r
        en: 'g: Do not confuse it with another quantity in the energy balance.'\r
    next_step_rules:\r
    - id: g_next_step\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'g: Usala para decidir el siguiente calculo del balance de disipacion.'\r
        en: 'g: Use it to decide the next calculation in the dissipation balance.'\r
  Emi:\r
    summary_rules:\r
    - id: Emi_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Emi: Resumen de la magnitud en el balance de rozamiento.'\r
        en: 'Emi: Summary of the quantity in the friction balance.'\r
    physical_reading_rules:\r
    - id: Emi_physical_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Emi: Lectura causal dentro de la perdida mecanica por rozamiento.'\r
        en: 'Emi: Causal reading within mechanical loss by friction.'\r
    coherence_rules:\r
    - id: Emi_coherence\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Emi: Comprueba unidades, signo y coherencia con las demas magnitudes.'\r
        en: 'Emi: Check units, sign, and coherence with the other quantities.'\r
    model_validity_rules:\r
    - id: Emi_model_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Emi: Valida solo dentro del modelo de contacto seco elegido.'\r
        en: 'Emi: Valid only within the chosen dry-contact model.'\r
    graph_rules:\r
    - id: Emi_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Emi: Debe leerse en la grafica como parte del vinculo entre contacto y energia.'\r
        en: 'Emi: It should be read on the graph as part of the link between contact and energy.'\r
    likely_errors:\r
    - id: Emi_likely_errors\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Emi: No la confundas con otra magnitud del balance energetico.'\r
        en: 'Emi: Do not confuse it with another quantity in the energy balance.'\r
    next_step_rules:\r
    - id: Emi_next_step\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Emi: Usala para decidir el siguiente calculo del balance de disipacion.'\r
        en: 'Emi: Use it to decide the next calculation in the dissipation balance.'\r
  Emf:\r
    summary_rules:\r
    - id: Emf_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Emf: Resumen de la magnitud en el balance de rozamiento.'\r
        en: 'Emf: Summary of the quantity in the friction balance.'\r
    physical_reading_rules:\r
    - id: Emf_physical_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Emf: Lectura causal dentro de la perdida mecanica por rozamiento.'\r
        en: 'Emf: Causal reading within mechanical loss by friction.'\r
    coherence_rules:\r
    - id: Emf_coherence\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Emf: Comprueba unidades, signo y coherencia con las demas magnitudes.'\r
        en: 'Emf: Check units, sign, and coherence with the other quantities.'\r
    model_validity_rules:\r
    - id: Emf_model_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Emf: Valida solo dentro del modelo de contacto seco elegido.'\r
        en: 'Emf: Valid only within the chosen dry-contact model.'\r
    graph_rules:\r
    - id: Emf_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Emf: Debe leerse en la grafica como parte del vinculo entre contacto y energia.'\r
        en: 'Emf: It should be read on the graph as part of the link between contact and energy.'\r
    likely_errors:\r
    - id: Emf_likely_errors\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Emf: No la confundas con otra magnitud del balance energetico.'\r
        en: 'Emf: Do not confuse it with another quantity in the energy balance.'\r
    next_step_rules:\r
    - id: Emf_next_step\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 'Emf: Usala para decidir el siguiente calculo del balance de disipacion.'\r
        en: 'Emf: Use it to decide the next calculation in the dissipation balance.'\r
  t:\r
    summary_rules:\r
    - id: t_summary\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 't: Resumen de la magnitud en el balance de rozamiento.'\r
        en: 't: Summary of the quantity in the friction balance.'\r
    physical_reading_rules:\r
    - id: t_physical_reading\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 't: Lectura causal dentro de la perdida mecanica por rozamiento.'\r
        en: 't: Causal reading within mechanical loss by friction.'\r
    coherence_rules:\r
    - id: t_coherence\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 't: Comprueba unidades, signo y coherencia con las demas magnitudes.'\r
        en: 't: Check units, sign, and coherence with the other quantities.'\r
    model_validity_rules:\r
    - id: t_model_validity\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 't: Valida solo dentro del modelo de contacto seco elegido.'\r
        en: 't: Valid only within the chosen dry-contact model.'\r
    graph_rules:\r
    - id: t_graph\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 't: Debe leerse en la grafica como parte del vinculo entre contacto y energia.'\r
        en: 't: It should be read on the graph as part of the link between contact and energy.'\r
    likely_errors:\r
    - id: t_likely_errors\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 't: No la confundas con otra magnitud del balance energetico.'\r
        en: 't: Do not confuse it with another quantity in the energy balance.'\r
    next_step_rules:\r
    - id: t_next_step\r
      when: 'true'\r
      status: info\r
      text:\r
        es: 't: Usala para decidir el siguiente calculo del balance de disipacion.'\r
        en: 't: Use it to decide the next calculation in the dissipation balance.'\r
`;export{e as default};
