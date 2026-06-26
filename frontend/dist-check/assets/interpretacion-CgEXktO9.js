const e=`version: "v5"\r
id: interpretacion_ondas_transversales_de_corte\r
leaf_id: ondas-transversales-de-corte\r
nombre:\r
  es: "Interpretacion de ondas transversales de corte"\r
  en: "Transverse shear wave interpretation"\r
scope:\r
  area: fisica-clasica\r
  bloque: ondas\r
  subbloque: ondas-mecanicas\r
  parent_id: ondas-en-solidos\r
  ruta_relativa: fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-transversales-de-corte\r
dependencies:\r
  formulas:\r
    - velocidad_onda_s\r
    - longitud_onda_transversal\r
    - impedancia_transversal\r
    - relacion_vp_vs_poisson\r
    - energia_onda_transversal\r
  magnitudes:\r
    - v_s\r
    - G_shear\r
    - rho_medio\r
    - lambda_s\r
    - f_onda\r
    - Z_s\r
    - v_p\r
    - nu_poisson\r
    - u_s\r
    - omega_angular\r
    - A_s\r
    - ratio_vp_vs\r
result_blocks:\r
  summary:\r
    enabled: true\r
    order: 1\r
    title:\r
      es: "Resumen"\r
      en: "Summary"\r
  physical_reading:\r
    enabled: true\r
    order: 2\r
    title:\r
      es: "Lectura fisica"\r
      en: "Physical reading"\r
  coherence:\r
    enabled: true\r
    order: 3\r
    title:\r
      es: "Coherencia"\r
      en: "Coherence"\r
  model_validity:\r
    enabled: true\r
    order: 4\r
    title:\r
      es: "Validez del modelo"\r
      en: "Model validity"\r
  graph_reading:\r
    enabled: true\r
    order: 5\r
    title:\r
      es: "Lectura grafica"\r
      en: "Graph reading"\r
  likely_errors:\r
    enabled: true\r
    order: 6\r
    title:\r
      es: "Errores probables"\r
      en: "Likely errors"\r
  next_step:\r
    enabled: true\r
    order: 7\r
    title:\r
      es: "Siguiente paso"\r
      en: "Next step"\r
targets:\r
  v_s:\r
    magnitude_type: "state"\r
    semantic_role:\r
      es: "Magnitud usada para interpretar ondas S en solidos elasticos."\r
      en: "Magnitude used to interpret S waves in elastic solids."\r
    summary_rules:\r
      - id: v_s_summary_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "[[v_s]] resume una parte de la propagacion S: rigidez de corte, inercia, escala, energia o comparacion modal."\r
          en: "[[v_s]] summarises one part of S-wave propagation: shear stiffness, inertia, scale, energy or modal comparison."\r
    physical_reading_rules:\r
      - id: v_s_physical_reading_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Porque la propagacion depende del acoplamiento entre recuperacion elastica de corte e inercia local, [[v_s]] no debe leerse aislada."\r
          en: "The physical cause is coupling between shear elastic recovery and local inertia, so [[v_s]] must not be read in isolation."\r
    coherence_rules:\r
      - id: v_s_coherence_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "La lectura es coherente si las magnitudes son positivas, [[v_s]] queda por debajo de [[v_p]] y las unidades se mantienen en SI."\r
          en: "The reading is coherent if magnitudes are positive, [[v_s]] remains below [[v_p]] and units are kept in SI."\r
    model_validity_rules:\r
      - id: v_s_model_validity_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "El modelo es valido cuando el medio es solido elastico, la deformacion es pequena y [[lambda_s]] promedia la microestructura."\r
          en: "The model is valid when the medium is an elastic solid, deformation is small and [[lambda_s]] averages the microstructure."\r
    graph_rules:\r
      - id: v_s_graph_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "En el grafico, [[v_s]] debe apoyar la lectura visual de rigidez, densidad, escala espacial o impedancia transversal."\r
          en: "On the graph, [[v_s]] must support the visual reading of stiffness, density, spatial scale or shear impedance."\r
    likely_errors:\r
      - id: v_s_likely_errors_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Error plausible: confundir o creer que [[v_s]] como si describiera una onda longitudinal, un fluido o un regimen dispersivo fuera del modelo."\r
          en: "Likely error: using [[v_s]] as if it described a longitudinal wave, a fluid or a dispersive regime outside the model."\r
    next_step_rules:\r
      - id: v_s_next_step_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Siguiente paso: comparar [[v_s]] con rangos reales y decidir si basta el modelo ideal o conviene un modelo extendido."\r
          en: "Next step: compare [[v_s]] with real ranges and decide whether the ideal model is sufficient or an extended model is needed."\r
  G_shear:\r
    magnitude_type: "state"\r
    semantic_role:\r
      es: "Magnitud usada para interpretar ondas S en solidos elasticos."\r
      en: "Magnitude used to interpret S waves in elastic solids."\r
    summary_rules:\r
      - id: G_shear_summary_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "[[G_shear]] resume una parte de la propagacion S: rigidez de corte, inercia, escala, energia o comparacion modal."\r
          en: "[[G_shear]] summarises one part of S-wave propagation: shear stiffness, inertia, scale, energy or modal comparison."\r
    physical_reading_rules:\r
      - id: G_shear_physical_reading_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Porque la propagacion depende del acoplamiento entre recuperacion elastica de corte e inercia local, [[G_shear]] no debe leerse aislada."\r
          en: "The physical cause is coupling between shear elastic recovery and local inertia, so [[G_shear]] must not be read in isolation."\r
    coherence_rules:\r
      - id: G_shear_coherence_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "La lectura es coherente si las magnitudes son positivas, [[v_s]] queda por debajo de [[v_p]] y las unidades se mantienen en SI."\r
          en: "The reading is coherent if magnitudes are positive, [[v_s]] remains below [[v_p]] and units are kept in SI."\r
    model_validity_rules:\r
      - id: G_shear_model_validity_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "El modelo es valido cuando el medio es solido elastico, la deformacion es pequena y [[lambda_s]] promedia la microestructura."\r
          en: "The model is valid when the medium is an elastic solid, deformation is small and [[lambda_s]] averages the microstructure."\r
    graph_rules:\r
      - id: G_shear_graph_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "En el grafico, [[G_shear]] debe apoyar la lectura visual de rigidez, densidad, escala espacial o impedancia transversal."\r
          en: "On the graph, [[G_shear]] must support the visual reading of stiffness, density, spatial scale or shear impedance."\r
    likely_errors:\r
      - id: G_shear_likely_errors_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Error plausible: confundir o creer que [[G_shear]] como si describiera una onda longitudinal, un fluido o un regimen dispersivo fuera del modelo."\r
          en: "Likely error: using [[G_shear]] as if it described a longitudinal wave, a fluid or a dispersive regime outside the model."\r
    next_step_rules:\r
      - id: G_shear_next_step_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Siguiente paso: comparar [[G_shear]] con rangos reales y decidir si basta el modelo ideal o conviene un modelo extendido."\r
          en: "Next step: compare [[G_shear]] with real ranges and decide whether the ideal model is sufficient or an extended model is needed."\r
  rho_medio:\r
    magnitude_type: "state"\r
    semantic_role:\r
      es: "Magnitud usada para interpretar ondas S en solidos elasticos."\r
      en: "Magnitude used to interpret S waves in elastic solids."\r
    summary_rules:\r
      - id: rho_medio_summary_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "[[rho_medio]] resume una parte de la propagacion S: rigidez de corte, inercia, escala, energia o comparacion modal."\r
          en: "[[rho_medio]] summarises one part of S-wave propagation: shear stiffness, inertia, scale, energy or modal comparison."\r
    physical_reading_rules:\r
      - id: rho_medio_physical_reading_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Porque la propagacion depende del acoplamiento entre recuperacion elastica de corte e inercia local, [[rho_medio]] no debe leerse aislada."\r
          en: "The physical cause is coupling between shear elastic recovery and local inertia, so [[rho_medio]] must not be read in isolation."\r
    coherence_rules:\r
      - id: rho_medio_coherence_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "La lectura es coherente si las magnitudes son positivas, [[v_s]] queda por debajo de [[v_p]] y las unidades se mantienen en SI."\r
          en: "The reading is coherent if magnitudes are positive, [[v_s]] remains below [[v_p]] and units are kept in SI."\r
    model_validity_rules:\r
      - id: rho_medio_model_validity_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "El modelo es valido cuando el medio es solido elastico, la deformacion es pequena y [[lambda_s]] promedia la microestructura."\r
          en: "The model is valid when the medium is an elastic solid, deformation is small and [[lambda_s]] averages the microstructure."\r
    graph_rules:\r
      - id: rho_medio_graph_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "En el grafico, [[rho_medio]] debe apoyar la lectura visual de rigidez, densidad, escala espacial o impedancia transversal."\r
          en: "On the graph, [[rho_medio]] must support the visual reading of stiffness, density, spatial scale or shear impedance."\r
    likely_errors:\r
      - id: rho_medio_likely_errors_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Error plausible: confundir o creer que [[rho_medio]] como si describiera una onda longitudinal, un fluido o un regimen dispersivo fuera del modelo."\r
          en: "Likely error: using [[rho_medio]] as if it described a longitudinal wave, a fluid or a dispersive regime outside the model."\r
    next_step_rules:\r
      - id: rho_medio_next_step_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Siguiente paso: comparar [[rho_medio]] con rangos reales y decidir si basta el modelo ideal o conviene un modelo extendido."\r
          en: "Next step: compare [[rho_medio]] with real ranges and decide whether the ideal model is sufficient or an extended model is needed."\r
  lambda_s:\r
    magnitude_type: "state"\r
    semantic_role:\r
      es: "Magnitud usada para interpretar ondas S en solidos elasticos."\r
      en: "Magnitude used to interpret S waves in elastic solids."\r
    summary_rules:\r
      - id: lambda_s_summary_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "[[lambda_s]] resume una parte de la propagacion S: rigidez de corte, inercia, escala, energia o comparacion modal."\r
          en: "[[lambda_s]] summarises one part of S-wave propagation: shear stiffness, inertia, scale, energy or modal comparison."\r
    physical_reading_rules:\r
      - id: lambda_s_physical_reading_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Porque la propagacion depende del acoplamiento entre recuperacion elastica de corte e inercia local, [[lambda_s]] no debe leerse aislada."\r
          en: "The physical cause is coupling between shear elastic recovery and local inertia, so [[lambda_s]] must not be read in isolation."\r
    coherence_rules:\r
      - id: lambda_s_coherence_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "La lectura es coherente si las magnitudes son positivas, [[v_s]] queda por debajo de [[v_p]] y las unidades se mantienen en SI."\r
          en: "The reading is coherent if magnitudes are positive, [[v_s]] remains below [[v_p]] and units are kept in SI."\r
    model_validity_rules:\r
      - id: lambda_s_model_validity_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "El modelo es valido cuando el medio es solido elastico, la deformacion es pequena y [[lambda_s]] promedia la microestructura."\r
          en: "The model is valid when the medium is an elastic solid, deformation is small and [[lambda_s]] averages the microstructure."\r
    graph_rules:\r
      - id: lambda_s_graph_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "En el grafico, [[lambda_s]] debe apoyar la lectura visual de rigidez, densidad, escala espacial o impedancia transversal."\r
          en: "On the graph, [[lambda_s]] must support the visual reading of stiffness, density, spatial scale or shear impedance."\r
    likely_errors:\r
      - id: lambda_s_likely_errors_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Error plausible: confundir o creer que [[lambda_s]] como si describiera una onda longitudinal, un fluido o un regimen dispersivo fuera del modelo."\r
          en: "Likely error: using [[lambda_s]] as if it described a longitudinal wave, a fluid or a dispersive regime outside the model."\r
    next_step_rules:\r
      - id: lambda_s_next_step_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Siguiente paso: comparar [[lambda_s]] con rangos reales y decidir si basta el modelo ideal o conviene un modelo extendido."\r
          en: "Next step: compare [[lambda_s]] with real ranges and decide whether the ideal model is sufficient or an extended model is needed."\r
  f_onda:\r
    magnitude_type: "state"\r
    semantic_role:\r
      es: "Magnitud usada para interpretar ondas S en solidos elasticos."\r
      en: "Magnitude used to interpret S waves in elastic solids."\r
    summary_rules:\r
      - id: f_onda_summary_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "[[f_onda]] resume una parte de la propagacion S: rigidez de corte, inercia, escala, energia o comparacion modal."\r
          en: "[[f_onda]] summarises one part of S-wave propagation: shear stiffness, inertia, scale, energy or modal comparison."\r
    physical_reading_rules:\r
      - id: f_onda_physical_reading_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Porque la propagacion depende del acoplamiento entre recuperacion elastica de corte e inercia local, [[f_onda]] no debe leerse aislada."\r
          en: "The physical cause is coupling between shear elastic recovery and local inertia, so [[f_onda]] must not be read in isolation."\r
    coherence_rules:\r
      - id: f_onda_coherence_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "La lectura es coherente si las magnitudes son positivas, [[v_s]] queda por debajo de [[v_p]] y las unidades se mantienen en SI."\r
          en: "The reading is coherent if magnitudes are positive, [[v_s]] remains below [[v_p]] and units are kept in SI."\r
    model_validity_rules:\r
      - id: f_onda_model_validity_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "El modelo es valido cuando el medio es solido elastico, la deformacion es pequena y [[lambda_s]] promedia la microestructura."\r
          en: "The model is valid when the medium is an elastic solid, deformation is small and [[lambda_s]] averages the microstructure."\r
    graph_rules:\r
      - id: f_onda_graph_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "En el grafico, [[f_onda]] debe apoyar la lectura visual de rigidez, densidad, escala espacial o impedancia transversal."\r
          en: "On the graph, [[f_onda]] must support the visual reading of stiffness, density, spatial scale or shear impedance."\r
    likely_errors:\r
      - id: f_onda_likely_errors_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Error plausible: confundir o creer que [[f_onda]] como si describiera una onda longitudinal, un fluido o un regimen dispersivo fuera del modelo."\r
          en: "Likely error: using [[f_onda]] as if it described a longitudinal wave, a fluid or a dispersive regime outside the model."\r
    next_step_rules:\r
      - id: f_onda_next_step_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Siguiente paso: comparar [[f_onda]] con rangos reales y decidir si basta el modelo ideal o conviene un modelo extendido."\r
          en: "Next step: compare [[f_onda]] with real ranges and decide whether the ideal model is sufficient or an extended model is needed."\r
  Z_s:\r
    magnitude_type: "state"\r
    semantic_role:\r
      es: "Magnitud usada para interpretar ondas S en solidos elasticos."\r
      en: "Magnitude used to interpret S waves in elastic solids."\r
    summary_rules:\r
      - id: Z_s_summary_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "[[Z_s]] resume una parte de la propagacion S: rigidez de corte, inercia, escala, energia o comparacion modal."\r
          en: "[[Z_s]] summarises one part of S-wave propagation: shear stiffness, inertia, scale, energy or modal comparison."\r
    physical_reading_rules:\r
      - id: Z_s_physical_reading_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Porque la propagacion depende del acoplamiento entre recuperacion elastica de corte e inercia local, [[Z_s]] no debe leerse aislada."\r
          en: "The physical cause is coupling between shear elastic recovery and local inertia, so [[Z_s]] must not be read in isolation."\r
    coherence_rules:\r
      - id: Z_s_coherence_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "La lectura es coherente si las magnitudes son positivas, [[v_s]] queda por debajo de [[v_p]] y las unidades se mantienen en SI."\r
          en: "The reading is coherent if magnitudes are positive, [[v_s]] remains below [[v_p]] and units are kept in SI."\r
    model_validity_rules:\r
      - id: Z_s_model_validity_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "El modelo es valido cuando el medio es solido elastico, la deformacion es pequena y [[lambda_s]] promedia la microestructura."\r
          en: "The model is valid when the medium is an elastic solid, deformation is small and [[lambda_s]] averages the microstructure."\r
    graph_rules:\r
      - id: Z_s_graph_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "En el grafico, [[Z_s]] debe apoyar la lectura visual de rigidez, densidad, escala espacial o impedancia transversal."\r
          en: "On the graph, [[Z_s]] must support the visual reading of stiffness, density, spatial scale or shear impedance."\r
    likely_errors:\r
      - id: Z_s_likely_errors_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Error plausible: confundir o creer que [[Z_s]] como si describiera una onda longitudinal, un fluido o un regimen dispersivo fuera del modelo."\r
          en: "Likely error: using [[Z_s]] as if it described a longitudinal wave, a fluid or a dispersive regime outside the model."\r
    next_step_rules:\r
      - id: Z_s_next_step_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Siguiente paso: comparar [[Z_s]] con rangos reales y decidir si basta el modelo ideal o conviene un modelo extendido."\r
          en: "Next step: compare [[Z_s]] with real ranges and decide whether the ideal model is sufficient or an extended model is needed."\r
  v_p:\r
    magnitude_type: "state"\r
    semantic_role:\r
      es: "Magnitud usada para interpretar ondas S en solidos elasticos."\r
      en: "Magnitude used to interpret S waves in elastic solids."\r
    summary_rules:\r
      - id: v_p_summary_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "[[v_p]] resume una parte de la propagacion S: rigidez de corte, inercia, escala, energia o comparacion modal."\r
          en: "[[v_p]] summarises one part of S-wave propagation: shear stiffness, inertia, scale, energy or modal comparison."\r
    physical_reading_rules:\r
      - id: v_p_physical_reading_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Porque la propagacion depende del acoplamiento entre recuperacion elastica de corte e inercia local, [[v_p]] no debe leerse aislada."\r
          en: "The physical cause is coupling between shear elastic recovery and local inertia, so [[v_p]] must not be read in isolation."\r
    coherence_rules:\r
      - id: v_p_coherence_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "La lectura es coherente si las magnitudes son positivas, [[v_s]] queda por debajo de [[v_p]] y las unidades se mantienen en SI."\r
          en: "The reading is coherent if magnitudes are positive, [[v_s]] remains below [[v_p]] and units are kept in SI."\r
    model_validity_rules:\r
      - id: v_p_model_validity_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "El modelo es valido cuando el medio es solido elastico, la deformacion es pequena y [[lambda_s]] promedia la microestructura."\r
          en: "The model is valid when the medium is an elastic solid, deformation is small and [[lambda_s]] averages the microstructure."\r
    graph_rules:\r
      - id: v_p_graph_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "En el grafico, [[v_p]] debe apoyar la lectura visual de rigidez, densidad, escala espacial o impedancia transversal."\r
          en: "On the graph, [[v_p]] must support the visual reading of stiffness, density, spatial scale or shear impedance."\r
    likely_errors:\r
      - id: v_p_likely_errors_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Error plausible: confundir o creer que [[v_p]] como si describiera una onda longitudinal, un fluido o un regimen dispersivo fuera del modelo."\r
          en: "Likely error: using [[v_p]] as if it described a longitudinal wave, a fluid or a dispersive regime outside the model."\r
    next_step_rules:\r
      - id: v_p_next_step_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Siguiente paso: comparar [[v_p]] con rangos reales y decidir si basta el modelo ideal o conviene un modelo extendido."\r
          en: "Next step: compare [[v_p]] with real ranges and decide whether the ideal model is sufficient or an extended model is needed."\r
  nu_poisson:\r
    magnitude_type: "state"\r
    semantic_role:\r
      es: "Magnitud usada para interpretar ondas S en solidos elasticos."\r
      en: "Magnitude used to interpret S waves in elastic solids."\r
    summary_rules:\r
      - id: nu_poisson_summary_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "[[nu_poisson]] resume una parte de la propagacion S: rigidez de corte, inercia, escala, energia o comparacion modal."\r
          en: "[[nu_poisson]] summarises one part of S-wave propagation: shear stiffness, inertia, scale, energy or modal comparison."\r
    physical_reading_rules:\r
      - id: nu_poisson_physical_reading_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Porque la propagacion depende del acoplamiento entre recuperacion elastica de corte e inercia local, [[nu_poisson]] no debe leerse aislada."\r
          en: "The physical cause is coupling between shear elastic recovery and local inertia, so [[nu_poisson]] must not be read in isolation."\r
    coherence_rules:\r
      - id: nu_poisson_coherence_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "La lectura es coherente si las magnitudes son positivas, [[v_s]] queda por debajo de [[v_p]] y las unidades se mantienen en SI."\r
          en: "The reading is coherent if magnitudes are positive, [[v_s]] remains below [[v_p]] and units are kept in SI."\r
    model_validity_rules:\r
      - id: nu_poisson_model_validity_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "El modelo es valido cuando el medio es solido elastico, la deformacion es pequena y [[lambda_s]] promedia la microestructura."\r
          en: "The model is valid when the medium is an elastic solid, deformation is small and [[lambda_s]] averages the microstructure."\r
    graph_rules:\r
      - id: nu_poisson_graph_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "En el grafico, [[nu_poisson]] debe apoyar la lectura visual de rigidez, densidad, escala espacial o impedancia transversal."\r
          en: "On the graph, [[nu_poisson]] must support the visual reading of stiffness, density, spatial scale or shear impedance."\r
    likely_errors:\r
      - id: nu_poisson_likely_errors_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Error plausible: confundir o creer que [[nu_poisson]] como si describiera una onda longitudinal, un fluido o un regimen dispersivo fuera del modelo."\r
          en: "Likely error: using [[nu_poisson]] as if it described a longitudinal wave, a fluid or a dispersive regime outside the model."\r
    next_step_rules:\r
      - id: nu_poisson_next_step_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Siguiente paso: comparar [[nu_poisson]] con rangos reales y decidir si basta el modelo ideal o conviene un modelo extendido."\r
          en: "Next step: compare [[nu_poisson]] with real ranges and decide whether the ideal model is sufficient or an extended model is needed."\r
  u_s:\r
    magnitude_type: "state"\r
    semantic_role:\r
      es: "Magnitud usada para interpretar ondas S en solidos elasticos."\r
      en: "Magnitude used to interpret S waves in elastic solids."\r
    summary_rules:\r
      - id: u_s_summary_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "[[u_s]] resume una parte de la propagacion S: rigidez de corte, inercia, escala, energia o comparacion modal."\r
          en: "[[u_s]] summarises one part of S-wave propagation: shear stiffness, inertia, scale, energy or modal comparison."\r
    physical_reading_rules:\r
      - id: u_s_physical_reading_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Porque la propagacion depende del acoplamiento entre recuperacion elastica de corte e inercia local, [[u_s]] no debe leerse aislada."\r
          en: "The physical cause is coupling between shear elastic recovery and local inertia, so [[u_s]] must not be read in isolation."\r
    coherence_rules:\r
      - id: u_s_coherence_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "La lectura es coherente si las magnitudes son positivas, [[v_s]] queda por debajo de [[v_p]] y las unidades se mantienen en SI."\r
          en: "The reading is coherent if magnitudes are positive, [[v_s]] remains below [[v_p]] and units are kept in SI."\r
    model_validity_rules:\r
      - id: u_s_model_validity_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "El modelo es valido cuando el medio es solido elastico, la deformacion es pequena y [[lambda_s]] promedia la microestructura."\r
          en: "The model is valid when the medium is an elastic solid, deformation is small and [[lambda_s]] averages the microstructure."\r
    graph_rules:\r
      - id: u_s_graph_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "En el grafico, [[u_s]] debe apoyar la lectura visual de rigidez, densidad, escala espacial o impedancia transversal."\r
          en: "On the graph, [[u_s]] must support the visual reading of stiffness, density, spatial scale or shear impedance."\r
    likely_errors:\r
      - id: u_s_likely_errors_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Error plausible: confundir o creer que [[u_s]] como si describiera una onda longitudinal, un fluido o un regimen dispersivo fuera del modelo."\r
          en: "Likely error: using [[u_s]] as if it described a longitudinal wave, a fluid or a dispersive regime outside the model."\r
    next_step_rules:\r
      - id: u_s_next_step_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Siguiente paso: comparar [[u_s]] con rangos reales y decidir si basta el modelo ideal o conviene un modelo extendido."\r
          en: "Next step: compare [[u_s]] with real ranges and decide whether the ideal model is sufficient or an extended model is needed."\r
  omega_angular:\r
    magnitude_type: "state"\r
    semantic_role:\r
      es: "Magnitud usada para interpretar ondas S en solidos elasticos."\r
      en: "Magnitude used to interpret S waves in elastic solids."\r
    summary_rules:\r
      - id: omega_angular_summary_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "[[omega_angular]] resume una parte de la propagacion S: rigidez de corte, inercia, escala, energia o comparacion modal."\r
          en: "[[omega_angular]] summarises one part of S-wave propagation: shear stiffness, inertia, scale, energy or modal comparison."\r
    physical_reading_rules:\r
      - id: omega_angular_physical_reading_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Porque la propagacion depende del acoplamiento entre recuperacion elastica de corte e inercia local, [[omega_angular]] no debe leerse aislada."\r
          en: "The physical cause is coupling between shear elastic recovery and local inertia, so [[omega_angular]] must not be read in isolation."\r
    coherence_rules:\r
      - id: omega_angular_coherence_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "La lectura es coherente si las magnitudes son positivas, [[v_s]] queda por debajo de [[v_p]] y las unidades se mantienen en SI."\r
          en: "The reading is coherent if magnitudes are positive, [[v_s]] remains below [[v_p]] and units are kept in SI."\r
    model_validity_rules:\r
      - id: omega_angular_model_validity_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "El modelo es valido cuando el medio es solido elastico, la deformacion es pequena y [[lambda_s]] promedia la microestructura."\r
          en: "The model is valid when the medium is an elastic solid, deformation is small and [[lambda_s]] averages the microstructure."\r
    graph_rules:\r
      - id: omega_angular_graph_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "En el grafico, [[omega_angular]] debe apoyar la lectura visual de rigidez, densidad, escala espacial o impedancia transversal."\r
          en: "On the graph, [[omega_angular]] must support the visual reading of stiffness, density, spatial scale or shear impedance."\r
    likely_errors:\r
      - id: omega_angular_likely_errors_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Error plausible: confundir o creer que [[omega_angular]] como si describiera una onda longitudinal, un fluido o un regimen dispersivo fuera del modelo."\r
          en: "Likely error: using [[omega_angular]] as if it described a longitudinal wave, a fluid or a dispersive regime outside the model."\r
    next_step_rules:\r
      - id: omega_angular_next_step_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Siguiente paso: comparar [[omega_angular]] con rangos reales y decidir si basta el modelo ideal o conviene un modelo extendido."\r
          en: "Next step: compare [[omega_angular]] with real ranges and decide whether the ideal model is sufficient or an extended model is needed."\r
  A_s:\r
    magnitude_type: "state"\r
    semantic_role:\r
      es: "Magnitud usada para interpretar ondas S en solidos elasticos."\r
      en: "Magnitude used to interpret S waves in elastic solids."\r
    summary_rules:\r
      - id: A_s_summary_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "[[A_s]] resume una parte de la propagacion S: rigidez de corte, inercia, escala, energia o comparacion modal."\r
          en: "[[A_s]] summarises one part of S-wave propagation: shear stiffness, inertia, scale, energy or modal comparison."\r
    physical_reading_rules:\r
      - id: A_s_physical_reading_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Porque la propagacion depende del acoplamiento entre recuperacion elastica de corte e inercia local, [[A_s]] no debe leerse aislada."\r
          en: "The physical cause is coupling between shear elastic recovery and local inertia, so [[A_s]] must not be read in isolation."\r
    coherence_rules:\r
      - id: A_s_coherence_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "La lectura es coherente si las magnitudes son positivas, [[v_s]] queda por debajo de [[v_p]] y las unidades se mantienen en SI."\r
          en: "The reading is coherent if magnitudes are positive, [[v_s]] remains below [[v_p]] and units are kept in SI."\r
    model_validity_rules:\r
      - id: A_s_model_validity_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "El modelo es valido cuando el medio es solido elastico, la deformacion es pequena y [[lambda_s]] promedia la microestructura."\r
          en: "The model is valid when the medium is an elastic solid, deformation is small and [[lambda_s]] averages the microstructure."\r
    graph_rules:\r
      - id: A_s_graph_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "En el grafico, [[A_s]] debe apoyar la lectura visual de rigidez, densidad, escala espacial o impedancia transversal."\r
          en: "On the graph, [[A_s]] must support the visual reading of stiffness, density, spatial scale or shear impedance."\r
    likely_errors:\r
      - id: A_s_likely_errors_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Error plausible: confundir o creer que [[A_s]] como si describiera una onda longitudinal, un fluido o un regimen dispersivo fuera del modelo."\r
          en: "Likely error: using [[A_s]] as if it described a longitudinal wave, a fluid or a dispersive regime outside the model."\r
    next_step_rules:\r
      - id: A_s_next_step_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Siguiente paso: comparar [[A_s]] con rangos reales y decidir si basta el modelo ideal o conviene un modelo extendido."\r
          en: "Next step: compare [[A_s]] with real ranges and decide whether the ideal model is sufficient or an extended model is needed."\r
  ratio_vp_vs:\r
    magnitude_type: "state"\r
    semantic_role:\r
      es: "Magnitud usada para interpretar ondas S en solidos elasticos."\r
      en: "Magnitude used to interpret S waves in elastic solids."\r
    summary_rules:\r
      - id: ratio_vp_vs_summary_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "[[ratio_vp_vs]] resume una parte de la propagacion S: rigidez de corte, inercia, escala, energia o comparacion modal."\r
          en: "[[ratio_vp_vs]] summarises one part of S-wave propagation: shear stiffness, inertia, scale, energy or modal comparison."\r
    physical_reading_rules:\r
      - id: ratio_vp_vs_physical_reading_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Porque la propagacion depende del acoplamiento entre recuperacion elastica de corte e inercia local, [[ratio_vp_vs]] no debe leerse aislada."\r
          en: "The physical cause is coupling between shear elastic recovery and local inertia, so [[ratio_vp_vs]] must not be read in isolation."\r
    coherence_rules:\r
      - id: ratio_vp_vs_coherence_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "La lectura es coherente si las magnitudes son positivas, [[v_s]] queda por debajo de [[v_p]] y las unidades se mantienen en SI."\r
          en: "The reading is coherent if magnitudes are positive, [[v_s]] remains below [[v_p]] and units are kept in SI."\r
    model_validity_rules:\r
      - id: ratio_vp_vs_model_validity_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "El modelo es valido cuando el medio es solido elastico, la deformacion es pequena y [[lambda_s]] promedia la microestructura."\r
          en: "The model is valid when the medium is an elastic solid, deformation is small and [[lambda_s]] averages the microstructure."\r
    graph_rules:\r
      - id: ratio_vp_vs_graph_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "En el grafico, [[ratio_vp_vs]] debe apoyar la lectura visual de rigidez, densidad, escala espacial o impedancia transversal."\r
          en: "On the graph, [[ratio_vp_vs]] must support the visual reading of stiffness, density, spatial scale or shear impedance."\r
    likely_errors:\r
      - id: ratio_vp_vs_likely_errors_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Error plausible: confundir o creer que [[ratio_vp_vs]] como si describiera una onda longitudinal, un fluido o un regimen dispersivo fuera del modelo."\r
          en: "Likely error: using [[ratio_vp_vs]] as if it described a longitudinal wave, a fluid or a dispersive regime outside the model."\r
    next_step_rules:\r
      - id: ratio_vp_vs_next_step_rules_1\r
        when: "true"\r
        status: "ok"\r
        text:\r
          es: "Siguiente paso: comparar [[ratio_vp_vs]] con rangos reales y decidir si basta el modelo ideal o conviene un modelo extendido."\r
          en: "Next step: compare [[ratio_vp_vs]] with real ranges and decide whether the ideal model is sufficient or an extended model is needed."\r
output_contract:\r
  sections:\r
    - summary\r
    - physical_reading\r
    - coherence\r
    - model_validity\r
    - graph_reading\r
    - likely_errors\r
    - next_step\r
  inline_mode:\r
    max_sections: 2\r
    priority: [summary, likely_errors]\r
  extended_mode:\r
    show_all: true\r
`;export{e as default};
