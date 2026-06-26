const e=`version: v5
id: longitud-de-onda
leaf_id: longitud-de-onda
nombre: { es: Longitud de onda, en: Wavelength }
scope: { es: Interpretar separación espacial, número de onda y relación con frecuencia., en: Interpret spatial spacing, wavenumber, and relation with frequency. }
ui:
  display_modes: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  preferred_mode: physical_reading
dependencies:
  magnitudes: [lambda, k, f, T, v, Delta_x, n, x]
  formulas: [numero_onda_longitud, velocidad_longitud_frecuencia, longitud_por_crestas]
global_context: { es: La longitud de onda mide repetición espacial, no altura ni duración temporal., en: Wavelength measures spatial repetition, not height or temporal duration. }
result_blocks:
  summary: { title: { es: Resumen, en: Summary } }
  physical_reading: { title: { es: Lectura física, en: Physical reading } }
  coherence: { title: { es: Coherencia, en: Coherence } }
  model_validity: { title: { es: Validez del modelo, en: Model validity } }
  graph_reading: { title: { es: Lectura gráfica, en: Graph reading } }
  likely_errors: { title: { es: Errores probables, en: Likely errors } }
  next_step: { title: { es: Siguiente paso, en: Next step } }
output_contract:
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  summary_first: true
  include_units: true
  include_warnings: true
targets:
  lambda:
    label: { es: longitud de onda, en: wavelength }
    summary_rules:
      - { id: lambda_summary, when: always, status: ok, text: { es: "[[lambda]] describe la separación espacial entre estados equivalentes.", en: "[[lambda]] describes spatial separation between equivalent states." } }
    physical_reading_rules:
      - { id: lambda_reading, when: always, status: ok, text: { es: "Una [[lambda]] mayor indica crestas más separadas en el espacio.", en: "A larger [[lambda]] indicates crests spaced farther apart in space." } }
    coherence_rules:
      - { id: lambda_coherence, when: always, status: ok, text: { es: "Debe ser coherente con [[k]], [[f]] y [[v]] si esas magnitudes aparecen.", en: "It must be coherent with [[k]], [[f]], and [[v]] if those quantities appear." } }
    model_validity_rules:
      - { id: lambda_validity, when: always, status: warning, text: { es: "La lectura requiere un patrón espacial repetido y reconocible.", en: "The reading requires a repeated and recognizable spatial pattern." } }
    graph_rules:
      - { id: lambda_graph, when: always, status: ok, text: { es: "En el gráfico, [[lambda]] se lee horizontalmente entre crestas o estados equivalentes.", en: "On the graph, [[lambda]] is read horizontally between crests or equivalent states." } }
    likely_errors:
      - { id: lambda_error, when: always, status: warning, text: { es: "Error probable: confundir [[lambda]] con amplitud vertical.", en: "Likely mistake: confusing [[lambda]] with vertical amplitude." } }
    next_step_rules:
      - { id: lambda_next, when: always, status: ok, text: { es: "Relaciona [[lambda]] con [[f]] solo si conoces [[v]].", en: "Relate [[lambda]] to [[f]] only if [[v]] is known." } }
  k:
    label: { es: número de onda, en: wavenumber }
    summary_rules:
      - { id: k_summary, when: always, status: ok, text: { es: "[[k]] resume la densidad espacial de fase.", en: "[[k]] summarizes spatial phase density." } }
    physical_reading_rules:
      - { id: k_reading, when: always, status: ok, text: { es: "A mayor [[k]], menor separación espacial entre estados equivalentes.", en: "Larger [[k]] means smaller spatial separation between equivalent states." } }
    coherence_rules:
      - { id: k_coherence, when: always, status: ok, text: { es: "[[k]] debe variar de forma inversa con [[lambda]].", en: "[[k]] must vary inversely with [[lambda]]." } }
    model_validity_rules:
      - { id: k_validity, when: always, status: warning, text: { es: "Tiene sentido claro si la onda tiene fase espacial definida.", en: "It has clear meaning if the wave has defined spatial phase." } }
    graph_rules:
      - { id: k_graph, when: always, status: ok, text: { es: "Visualmente, [[k]] aumenta cuando el perfil se comprime horizontalmente.", en: "Visually, [[k]] increases when the profile is horizontally compressed." } }
    likely_errors:
      - { id: k_error, when: always, status: warning, text: { es: "Error probable: creer que [[k]] crece junto con [[lambda]].", en: "Likely mistake: believing [[k]] grows together with [[lambda]]." } }
    next_step_rules:
      - { id: k_next, when: always, status: ok, text: { es: "Usa [[k]] cuando la pregunta hable de fase espacial.", en: "Use [[k]] when the question refers to spatial phase." } }
  v:
    label: { es: rapidez de propagación, en: propagation speed }
    summary_rules:
      - { id: v_summary, when: always, status: ok, text: { es: "[[v]] conecta repetición temporal y separación espacial.", en: "[[v]] connects temporal repetition and spatial spacing." } }
    physical_reading_rules:
      - { id: v_reading, when: always, status: ok, text: { es: "Si [[v]] es fija, aumentar [[f]] reduce [[lambda]].", en: "If [[v]] is fixed, increasing [[f]] reduces [[lambda]]." } }
    coherence_rules:
      - { id: v_coherence, when: always, status: ok, text: { es: "[[v]], [[lambda]] y [[f]] deben formar una lectura dimensional coherente.", en: "[[v]], [[lambda]], and [[f]] must form a dimensionally coherent reading." } }
    model_validity_rules:
      - { id: v_validity, when: always, status: warning, text: { es: "La relación simple exige rapidez estable en el medio.", en: "The simple relation requires stable speed in the medium." } }
    graph_rules:
      - { id: v_graph, when: always, status: ok, text: { es: "En una animación, [[v]] mueve el patrón manteniendo la separación [[lambda]].", en: "In an animation, [[v]] moves the pattern while keeping spacing [[lambda]]." } }
    likely_errors:
      - { id: v_error, when: always, status: warning, text: { es: "Error probable: deducir [[lambda]] desde [[f]] sin conocer [[v]].", en: "Likely mistake: deriving [[lambda]] from [[f]] without knowing [[v]]." } }
    next_step_rules:
      - { id: v_next, when: always, status: ok, text: { es: "Comprueba el medio antes de usar la relación de propagación.", en: "Check the medium before using the propagation relation." } }
`;export{e as default};
