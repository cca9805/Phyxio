const e=`version: v5
id: interpretacion_propagacion_en_medios
leaf_id: propagacion-en-medios
nombre:
  es: Propagacion en medios
  en: Propagation in Media
scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: ondas-electromagneticas
  parent_id: ondas-electromagneticas
  ruta_relativa: fisica-clasica/electromagnetismo/ondas-electromagneticas/propagacion-en-medios
ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: true
  labels:
    es: Interpretacion fisica
    en: Physical interpretation
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits:
    max_items: 3
dependencies:
  formulas: [velocidad_en_medio, indice_medio_em, longitud_onda_en_medio]
  magnitudes: [c, n, v_m, lambda0, lambda_m, epsilon_r, mu_r]
global_context:
  physical_domain:
    es: Propagacion de ondas electromagneticas en medios materiales lineales.
    en: Propagation of electromagnetic waves in linear material media.
  axis_convention:
    es: El eje horizontal usa [[n]] y el eje vertical usa [[v_m]], mostrando que mayor indice reduce la velocidad.
    en: The horizontal axis uses [[n]] and the vertical axis uses [[v_m]], showing that larger index reduces speed.
  standard_assumptions:
    - es: "El medio se trata como lineal, homogeneo e isotropo."
      en: "The medium is treated as linear, homogeneous, and isotropic."
    - es: "La onda se considera monocromatica y las perdidas no dominan."
      en: "The wave is considered monochromatic and losses are not dominant."
  standard_warnings:
    - es: "Si hay dispersion fuerte, conviene cambiar a un modelo de velocidad de grupo."
      en: "If there is strong dispersion, switch to a group-speed model."
    - es: "Si el material absorbe, un indice real unico no describe toda la propagacion."
      en: "If the material absorbs, a single real index does not describe the whole propagation."
result_blocks:
  summary:
    enabled: true
    order: 1
    title: { es: Resumen, en: Summary }
  physical_reading:
    enabled: true
    order: 2
    title: { es: Lectura fisica, en: Physical reading }
  coherence:
    enabled: true
    order: 3
    title: { es: Coherencia, en: Coherence }
  model_validity:
    enabled: true
    order: 4
    title: { es: Validez del modelo, en: Model validity }
  graph_reading:
    enabled: true
    order: 5
    title: { es: Lectura grafica, en: Graph reading }
  likely_errors:
    enabled: true
    order: 6
    title: { es: Errores probables, en: Likely errors }
  next_step:
    enabled: true
    order: 7
    title: { es: Siguiente paso, en: Next step }
targets:
  v_m:
    magnitude_type: scalar_unsigned
    semantic_role: { es: velocidad de fase dentro del medio, en: phase speed inside the medium }
    summary_rules: &vm_summary
      - id: vm_summary_default
        when: "true"
        status: ok
        text: { es: "[[v_m]] indica la rapidez de fase dentro del medio y disminuye cuando aumenta [[n]].", en: "[[v_m]] indicates phase speed inside the medium and decreases when [[n]] increases." }
    physical_reading_rules:
      - id: vm_reading_default
        when: "true"
        status: ok
        text: { es: "Una [[v_m]] menor significa mayor retardo de fase y menor longitud de onda para la misma frecuencia.", en: "A smaller [[v_m]] means greater phase delay and shorter wavelength for the same frequency." }
    coherence_rules:
      - id: vm_coherence_default
        when: "true"
        status: ok
        text: { es: "[[v_m]] debe ser positiva y no superar [[c]] en un medio ordinario de indice mayor que uno.", en: "[[v_m]] must be positive and not exceed [[c]] in an ordinary medium with index above one." }
    model_validity_rules:
      - id: vm_validity_default
        when: "true"
        status: ok
        text: { es: "La lectura vale para onda monocromatica; para pulsos o dispersion fuerte conviene cambiar de modelo.", en: "The reading is valid for a monochromatic wave; for pulses or strong dispersion, switch model." }
    graph_rules:
      - id: vm_graph_default
        when: "true"
        status: ok
        text: { es: "En el grafico, [[v_m]] baja al mover [[n]] hacia valores mayores.", en: "On the graph, [[v_m]] falls as [[n]] moves toward larger values." }
    likely_errors:
      - id: vm_error_default
        when: "true"
        status: warning
        text: { es: "Error tipico: usar [[c]] como si fuera la velocidad real dentro del material.", en: "Typical mistake: using [[c]] as if it were the real speed inside the material." }
    next_step_rules:
      - id: vm_next_default
        when: "true"
        status: ok
        text: { es: "Despues de [[v_m]], revisa [[lambda_m]] para interpretar fase, interferencia o guiado.", en: "After [[v_m]], check [[lambda_m]] to interpret phase, interference, or guiding." }
  c:
    magnitude_type: scalar_constant
    semantic_role: { es: referencia de velocidad en vacio, en: vacuum speed reference }
    summary_rules:
      - id: c_summary_default
        when: "true"
        status: ok
        text: { es: "[[c]] resume la referencia de vacio y describe el valor limite frente al medio.", en: "[[c]] summarizes the vacuum reference and describes the limiting value compared with the medium." }
    physical_reading_rules:
      - id: c_reading_default
        when: "true"
        status: ok
        text: { es: "[[c]] no es la velocidad material salvo que [[n]] sea practicamente uno.", en: "[[c]] is not the material speed unless [[n]] is practically one." }
    coherence_rules:
      - id: c_coherence_default
        when: "true"
        status: ok
        text: { es: "[[c]] debe permanecer positiva y actuar como referencia para comparar [[v_m]].", en: "[[c]] must remain positive and act as the reference for comparing [[v_m]]." }
    model_validity_rules:
      - id: c_validity_default
        when: "true"
        status: ok
        text: { es: "Usar [[c]] directamente solo es valido para vacio o aire como aproximacion muy cercana.", en: "Using [[c]] directly is valid only for vacuum or air as a very close approximation." }
    graph_rules:
      - id: c_graph_default
        when: "true"
        status: ok
        text: { es: "En el grafico, [[c]] funciona como referencia superior para medios ordinarios.", en: "On the graph, [[c]] acts as the upper reference for ordinary media." }
    likely_errors:
      - id: c_error_default
        when: "true"
        status: warning
        text: { es: "Error frecuente: olvidar que el material obliga a sustituir la velocidad por [[v_m]].", en: "Frequent error: forgetting that the material requires replacing speed by [[v_m]]." }
    next_step_rules:
      - id: c_next_default
        when: "true"
        status: ok
        text: { es: "Compara [[c]] con [[v_m]] para estimar cuanto retarda el medio.", en: "Compare [[c]] with [[v_m]] to estimate how much the medium delays propagation." }
  n:
    magnitude_type: scalar_unsigned
    semantic_role: { es: indice efectivo del medio, en: effective index of the medium }
    summary_rules:
      - id: n_summary_default
        when: "true"
        status: ok
        text: { es: "[[n]] indica cuanto domina el medio sobre la propagacion y describe la reduccion de [[v_m]].", en: "[[n]] indicates how strongly the medium controls propagation and describes the reduction of [[v_m]]." }
    physical_reading_rules:
      - id: n_reading_default
        when: "true"
        status: ok
        text: { es: "Un [[n]] mayor significa mas retardo de fase y menor [[lambda_m]] para la misma frecuencia.", en: "A larger [[n]] means more phase delay and smaller [[lambda_m]] for the same frequency." }
    coherence_rules:
      - id: n_coherence_default
        when: "true"
        status: ok
        text: { es: "[[n]] debe ser positivo en el regimen ordinario tratado por el leaf.", en: "[[n]] must be positive in the ordinary regime treated by the leaf." }
    model_validity_rules:
      - id: n_validity_default
        when: "true"
        status: ok
        text: { es: "El indice efectivo vale si la dispersion y la absorcion no dominan el problema.", en: "The effective index is valid if dispersion and absorption do not dominate the problem." }
    graph_rules:
      - id: n_graph_default
        when: "true"
        status: ok
        text: { es: "[[n]] es el control horizontal del grafico y desplaza la curva de propagacion.", en: "[[n]] is the horizontal control of the graph and shifts the propagation curve." }
    likely_errors:
      - id: n_error_default
        when: "true"
        status: warning
        text: { es: "Error tipico: usar un indice tabulado sin comprobar frecuencia ni material.", en: "Typical mistake: using a tabulated index without checking frequency or material." }
    next_step_rules:
      - id: n_next_default
        when: "true"
        status: ok
        text: { es: "A partir de [[n]], calcula [[v_m]] o [[lambda_m]] segun la pregunta fisica.", en: "From [[n]], compute [[v_m]] or [[lambda_m]] depending on the physical question." }
  epsilon_r:
    magnitude_type: scalar_unsigned
    semantic_role: { es: respuesta electrica efectiva, en: effective electric response }
    summary_rules:
      - id: er_summary_default
        when: "true"
        status: ok
        text: { es: "[[epsilon_r]] describe la respuesta electrica del medio y aumenta la contribucion al indice efectivo.", en: "[[epsilon_r]] describes the electric response of the medium and increases the contribution to effective index." }
    physical_reading_rules:
      - id: er_reading_default
        when: "true"
        status: ok
        text: { es: "Una [[epsilon_r]] mayor suele indicar mas polarizacion electrica y mayor retraso de fase.", en: "A larger [[epsilon_r]] usually indicates more electric polarization and greater phase delay." }
    coherence_rules:
      - id: er_coherence_default
        when: "true"
        status: ok
        text: { es: "[[epsilon_r]] debe ser positiva en el modelo ordinario sin perdidas dominantes.", en: "[[epsilon_r]] must be positive in the ordinary model without dominant losses." }
    model_validity_rules:
      - id: er_validity_default
        when: "true"
        status: ok
        text: { es: "No uses [[epsilon_r]] estatica si la onda esta en otra region espectral.", en: "Do not use static [[epsilon_r]] if the wave is in another spectral region." }
    graph_rules:
      - id: er_graph_default
        when: "true"
        status: ok
        text: { es: "En lectura grafica, [[epsilon_r]] modifica [[n]] y por tanto desplaza [[v_m]].", en: "In graph reading, [[epsilon_r]] modifies [[n]] and therefore shifts [[v_m]]." }
    likely_errors:
      - id: er_error_default
        when: "true"
        status: warning
        text: { es: "Error frecuente: confundir respuesta electrica con indice medido directamente.", en: "Frequent error: confusing electric response with directly measured index." }
    next_step_rules:
      - id: er_next_default
        when: "true"
        status: ok
        text: { es: "Combina [[epsilon_r]] con [[mu_r]] antes de interpretar [[n]].", en: "Combine [[epsilon_r]] with [[mu_r]] before interpreting [[n]]." }
  mu_r:
    magnitude_type: scalar_unsigned
    semantic_role: { es: respuesta magnetica efectiva, en: effective magnetic response }
    summary_rules:
      - id: mur_summary_default
        when: "true"
        status: ok
        text: { es: "[[mu_r]] indica la respuesta magnetica efectiva y depende del tipo de material.", en: "[[mu_r]] indicates the effective magnetic response and depends on material type." }
    physical_reading_rules:
      - id: mur_reading_default
        when: "true"
        status: ok
        text: { es: "En muchos dielectricos opticos [[mu_r]] esta cerca de uno, pero en otros medios puede importar.", en: "In many optical dielectrics [[mu_r]] is close to one, but in other media it may matter." }
    coherence_rules:
      - id: mur_coherence_default
        when: "true"
        status: ok
        text: { es: "[[mu_r]] debe ser positiva en el regimen ordinario usado aqui.", en: "[[mu_r]] must be positive in the ordinary regime used here." }
    model_validity_rules:
      - id: mur_validity_default
        when: "true"
        status: ok
        text: { es: "Si el material es magnetico o metamaterial, revisa si el modelo simple sigue valiendo.", en: "If the material is magnetic or a metamaterial, check whether the simple model still holds." }
    graph_rules:
      - id: mur_graph_default
        when: "true"
        status: ok
        text: { es: "[[mu_r]] participa en el indice y cambia indirectamente la curva de [[v_m]].", en: "[[mu_r]] participates in index and indirectly changes the [[v_m]] curve." }
    likely_errors:
      - id: mur_error_default
        when: "true"
        status: warning
        text: { es: "Error tipico: borrar [[mu_r]] por costumbre sin justificar el rango optico.", en: "Typical mistake: removing [[mu_r]] by habit without justifying the optical range." }
    next_step_rules:
      - id: mur_next_default
        when: "true"
        status: ok
        text: { es: "Comprueba si [[mu_r]] puede aproximarse a uno antes de simplificar.", en: "Check whether [[mu_r]] can be approximated by one before simplifying." }
  lambda_m:
    magnitude_type: scalar_unsigned
    semantic_role: { es: longitud de onda dentro del medio, en: wavelength inside the medium }
    summary_rules:
      - id: lm_summary_default
        when: "true"
        status: ok
        text: { es: "[[lambda_m]] describe la escala espacial real dentro del medio y disminuye cuando aumenta [[n]].", en: "[[lambda_m]] describes the real spatial scale inside the medium and decreases when [[n]] increases." }
    physical_reading_rules:
      - id: lm_reading_default
        when: "true"
        status: ok
        text: { es: "[[lambda_m]] controla fase, interferencia y resonancia dentro del material.", en: "[[lambda_m]] controls phase, interference, and resonance inside the material." }
    coherence_rules:
      - id: lm_coherence_default
        when: "true"
        status: ok
        text: { es: "[[lambda_m]] debe ser positiva y menor que [[lambda0]] si [[n]] es mayor que uno.", en: "[[lambda_m]] must be positive and smaller than [[lambda0]] if [[n]] is greater than one." }
    model_validity_rules:
      - id: lm_validity_default
        when: "true"
        status: ok
        text: { es: "La lectura vale con frecuencia conservada y un indice efectivo estable.", en: "The reading is valid with conserved frequency and a stable effective index." }
    graph_rules:
      - id: lm_graph_default
        when: "true"
        status: ok
        text: { es: "En el grafico, [[lambda_m]] acompana la caida de [[v_m]] cuando aumenta [[n]].", en: "On the graph, [[lambda_m]] follows the drop in [[v_m]] when [[n]] increases." }
    likely_errors:
      - id: lm_error_default
        when: "true"
        status: warning
        text: { es: "Error frecuente: usar [[lambda0]] como si fuera la longitud de onda dentro del material.", en: "Frequent error: using [[lambda0]] as if it were the wavelength inside the material." }
    next_step_rules:
      - id: lm_next_default
        when: "true"
        status: ok
        text: { es: "Usa [[lambda_m]] para analizar fase acumulada, interferencia o guiado.", en: "Use [[lambda_m]] to analyze accumulated phase, interference, or guiding." }
  lambda0:
    magnitude_type: scalar_unsigned
    semantic_role: { es: longitud de onda de referencia en vacio, en: reference vacuum wavelength }
    summary_rules:
      - id: l0_summary_default
        when: "true"
        status: ok
        text: { es: "[[lambda0]] indica la escala de vacio y describe la referencia antes de entrar al medio.", en: "[[lambda0]] indicates the vacuum scale and describes the reference before entering the medium." }
    physical_reading_rules:
      - id: l0_reading_default
        when: "true"
        status: ok
        text: { es: "[[lambda0]] identifica la radiacion antes de corregir su escala espacial por [[n]].", en: "[[lambda0]] identifies radiation before correcting its spatial scale by [[n]]." }
    coherence_rules:
      - id: l0_coherence_default
        when: "true"
        status: ok
        text: { es: "[[lambda0]] debe ser positiva y coherente con la region espectral indicada.", en: "[[lambda0]] must be positive and coherent with the stated spectral region." }
    model_validity_rules:
      - id: l0_validity_default
        when: "true"
        status: ok
        text: { es: "Debe quedar claro si el dato medido corresponde a vacio o al interior del medio.", en: "It must be clear whether the measured datum belongs to vacuum or inside the medium." }
    graph_rules:
      - id: l0_graph_default
        when: "true"
        status: ok
        text: { es: "En el grafico, [[lambda0]] funciona como escala de referencia frente a [[lambda_m]].", en: "On the graph, [[lambda0]] acts as reference scale compared with [[lambda_m]]." }
    likely_errors:
      - id: l0_error_default
        when: "true"
        status: warning
        text: { es: "Error tipico: no distinguir longitud de onda de vacio y longitud de onda material.", en: "Typical mistake: not distinguishing vacuum wavelength from material wavelength." }
    next_step_rules:
      - id: l0_next_default
        when: "true"
        status: ok
        text: { es: "Convierte [[lambda0]] en [[lambda_m]] antes de estudiar fase dentro del material.", en: "Convert [[lambda0]] into [[lambda_m]] before studying phase inside the material." }
cross_checks:
  - id: positive_medium_quantities
    type: positivity
    formulas: [velocidad_en_medio, longitud_onda_en_medio]
    magnitudes: [n, v_m, lambda_m]
    message: { es: "Velocidad, indice y longitud de onda deben permanecer positivos.", en: "Speed, index, and wavelength must remain positive." }
  - id: material_index_sources
    type: material_coherence
    formulas: [indice_medio_em]
    magnitudes: [epsilon_r, mu_r, n]
    message: { es: "El indice efectivo debe proceder de parametros materiales coherentes.", en: "The effective index must come from coherent material parameters." }
error_patterns:
  - id: use_vacuum_speed_in_medium
    detects: [c, v_m]
    message: { es: "No sustituyas [[v_m]] por [[c]] dentro de un medio material.", en: "Do not replace [[v_m]] with [[c]] inside a material medium." }
  - id: confuse_vacuum_medium_wavelength
    detects: [lambda0, lambda_m]
    message: { es: "Distingue [[lambda0]] de [[lambda_m]] antes de interpretar fase.", en: "Distinguish [[lambda0]] from [[lambda_m]] before interpreting phase." }
graph_binding:
  preferred_graph: Coord
  magnitud_estrella: v_m
  variable_control: n
  visible_magnitudes: [n, v_m, lambda_m]
  relation: velocidad_en_medio
mini_graph:
  enabled: true
  type: Coord
  x: n
  y: v_m
  reading: { es: "Curva decreciente de [[v_m]] frente a [[n]] para un medio ordinario.", en: "Decreasing curve of [[v_m]] versus [[n]] for an ordinary medium." }
output_contract:
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_mode:
    max_sections: 2
    priority: [summary, likely_errors]
  extended_mode:
    show_all: true
`;export{e as default};
