const e=`version: 2
id: interpretacion-energia-cinetica-y-potencial
leaf_id: energia-cinetica-y-potencial
nombre:
  es: Interpretacion de energia cinetica y potencial
  en: Interpretation of kinetic and potential energy
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: mecanica-analitica
  parent_id: lagrangiano
  ruta_relativa: fisica-clasica/mecanica/mecanica-analitica/lagrangiano/energia-cinetica-y-potencial
dependencies:
  formulas: [ energia_cinetica_traslacional, energia_cinetica_generalizada, energia_cinetica_metrica, energia_potencial_gravitatoria, energia_potencial_elastica, lagrangiano_mecanico, energia_mecanica_total ]
  magnitudes: [ T, V, L, E, m, v, qdi, qi, h, g, k, G ]
output_contract:
  sections: [ summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step ]
result_blocks:
  summary: { title: { es: Resumen energetico, en: Energy summary } }
  physical_reading: { title: { es: Lectura fisica, en: Physical reading } }
  coherence: { title: { es: Coherencia, en: Coherence } }
  model_validity: { title: { es: Validez del modelo, en: Model validity } }
  graph_reading: { title: { es: Lectura grafica, en: Graph reading } }
  likely_errors: { title: { es: Errores probables, en: Likely errors } }
  next_step: { title: { es: Siguiente paso, en: Next step } }
targets:
  T:
    summary_rules:
    - { id: t_summary, when: "true", status: info, text: { es: "T mide la energia asociada al movimiento y crece cuadraticamente con la velocidad relevante.", en: "T measures motion-related energy and grows quadratically with the relevant speed." } }
    physical_reading_rules:
    - { id: t_physical, when: "true", status: info, text: { es: "Si T domina sobre V, el estado esta energeticamente gobernado por movimiento mas que por configuracion.", en: "If T dominates V, the state is governed more by motion than by configuration." } }
    coherence_rules:
    - { id: t_coherence, when: "true", status: ok, text: { es: "T no debe ser negativa en los modelos mecanicos ordinarios del leaf.", en: "T must not be negative in the ordinary mechanical models of this leaf." } }
    model_validity_rules:
    - { id: t_validity, when: "true", status: ok, text: { es: "La lectura es valida si la velocidad usada corresponde a la coordenada del modelo.", en: "The reading is valid if the speed used belongs to the model coordinate." } }
    graph_rules:
    - { id: t_graph, when: "true", status: info, text: { es: "En el grafico, T aparece como curva parabolica frente a v.", en: "In the graph, T appears as a parabolic curve versus v." } }
    likely_errors:
    - { id: t_error, when: "true", status: warning, text: { es: "Error frecuente: duplicar la velocidad y esperar que T solo se duplique.", en: "Common mistake: doubling speed and expecting T to only double." } }
    next_step_rules:
    - { id: t_next, when: "true", status: info, text: { es: "Combina T con V para formar L o E segun la pregunta fisica.", en: "Combine T with V to form L or E depending on the physical question." } }
  V:
    summary_rules:
    - { id: v_summary, when: "true", status: info, text: { es: "V mide energia almacenada por configuracion dentro de una interaccion conservativa.", en: "V measures energy stored by configuration within a conservative interaction." } }
    physical_reading_rules:
    - { id: v_physical, when: "true", status: info, text: { es: "Si V domina sobre T, la posicion o deformacion del sistema condiciona la evolucion posterior.", en: "If V dominates T, system position or deformation constrains subsequent evolution." } }
    coherence_rules:
    - { id: v_coherence, when: "true", status: ok, text: { es: "El signo de V depende de la referencia; su gradiente fisico es lo decisivo.", en: "The sign of V depends on reference; its physical gradient is decisive." } }
    model_validity_rules:
    - { id: v_validity, when: "true", status: ok, text: { es: "V solo representa fuerzas conservativas o almacenamiento elastico ideal.", en: "V only represents conservative forces or ideal elastic storage." } }
    graph_rules:
    - { id: v_graph, when: "true", status: info, text: { es: "En el grafico aplicado, V es horizontal si h permanece fija.", en: "In the applied graph, V is horizontal if h remains fixed." } }
    likely_errors:
    - { id: v_error, when: "true", status: warning, text: { es: "Error frecuente: comparar V entre problemas con ceros de energia distintos.", en: "Common mistake: comparing V across problems with different energy zeros." } }
    next_step_rules:
    - { id: v_next, when: "true", status: info, text: { es: "Declara la referencia antes de interpretar L o E.", en: "Declare the reference before interpreting L or E." } }
  L:
    summary_rules:
    - { id: l_summary, when: "true", status: info, text: { es: "L resume el balance T menos V que se usa para generar dinamica lagrangiana.", en: "L summarizes the T minus V balance used to generate Lagrangian dynamics." } }
    physical_reading_rules:
    - { id: l_physical, when: "true", status: info, text: { es: "L no mide energia disponible; mide como el modelo combina movimiento y configuracion.", en: "L does not measure available energy; it measures how the model combines motion and configuration." } }
    coherence_rules:
    - { id: l_coherence, when: "true", status: ok, text: { es: "L puede ser negativo sin ser incoherente, porque resta V.", en: "L may be negative without being incoherent because it subtracts V." } }
    model_validity_rules:
    - { id: l_validity, when: "true", status: ok, text: { es: "L es valido si T y V pertenecen al mismo sistema y coordenadas.", en: "L is valid if T and V belong to the same system and coordinates." } }
    graph_rules:
    - { id: l_graph, when: "true", status: info, text: { es: "El cruce T=V marca L=0, no una condicion de reposo.", en: "The crossing T=V marks L=0, not a rest condition." } }
    likely_errors:
    - { id: l_error, when: "true", status: warning, text: { es: "Error frecuente: sustituir L por E en una derivacion lagrangiana.", en: "Common mistake: replacing L with E in a Lagrangian derivation." } }
    next_step_rules:
    - { id: l_next, when: "true", status: info, text: { es: "Tras construir L, pasa a ecuaciones de Lagrange.", en: "After building L, move to Lagrange's equations." } }
  E:
    summary_rules:
    - { id: e_summary, when: "true", status: info, text: { es: "E suma T y V para discutir energia mecanica total.", en: "E adds T and V to discuss total mechanical energy." } }
    physical_reading_rules:
    - { id: e_physical, when: "true", status: info, text: { es: "E sirve para conservacion; L sirve para construir ecuaciones de movimiento.", en: "E serves conservation; L builds equations of motion." } }
    coherence_rules:
    - { id: e_coherence, when: "true", status: ok, text: { es: "E y L comparten unidades, pero no significado ni uso formal.", en: "E and L share units, but not meaning or formal use." } }
    model_validity_rules:
    - { id: e_validity, when: "true", status: ok, text: { es: "Asumir E constante requiere ausencia de perdidas y dependencia temporal explicita.", en: "Assuming E constant requires no losses and no explicit time dependence." } }
    graph_rules:
    - { id: e_graph, when: "true", status: info, text: { es: "Con V fija, E crece con la misma curvatura que T.", en: "With fixed V, E grows with the same curvature as T." } }
    likely_errors:
    - { id: e_error, when: "true", status: warning, text: { es: "Error frecuente: creer que toda suma T+V se conserva automaticamente.", en: "Common mistake: believing every T+V sum is automatically conserved." } }
    next_step_rules:
    - { id: e_next, when: "true", status: info, text: { es: "Usa E para balance energetico y L para formulacion lagrangiana.", en: "Use E for energy balance and L for Lagrangian formulation." } }
`;export{e as default};
