const e=`version: "1.0"
id: interpretacion-instrumentos-opticos
leaf_id: instrumentos-opticos

nombre:
  es: Interpretacion de instrumentos opticos
  en: Optical instruments interpretation

scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: optica-geometrica
  parent_id: optica-geometrica
  ruta_relativa: fisica-clasica/electromagnetismo/optica/optica-geometrica/instrumentos-opticos

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretacion
    en: Interpretation
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_sections: 2
    priority:
      - summary
      - likely_errors

dependencies:
  formulas:
    - ecuacion_lente_delgada
    - aumento_angular_lupa
    - aumento_microscopio
  magnitudes:
    - f
    - d_o
    - d_i
    - M_angular
    - d_pp
    - f_lupa
    - f_obj
    - f_oc
    - L
    - M_micro

global_context:
  physical_domain:
    es: Optica geometrica paraxial aplicada a instrumentos opticos con lentes delgadas.
    en: Paraxial geometrical optics applied to optical instruments with thin lenses.
  axis_convention:
    es: El eje optico es horizontal, con la luz propagandose hacia la derecha. Las distancias de objeto son positivas a la izquierda de la lente; las de imagen, positivas a la derecha.
    en: The optical axis is horizontal, with light propagating to the right. Object distances are positive to the left of the lens; image distances are positive to the right.
  standard_assumptions:
    - "Lentes delgadas en aproximacion paraxial"
    - "Indice de refraccion del medio igual a 1 (aire)"
    - "Ojo del observador relajado (enfoque al infinito)"
  standard_warnings:
    - es: "Si el objeto se situa exactamente en el foco la imagen se forma en el infinito y el aumento angular diverge."
      en: "If the object is placed exactly at the focus the image forms at infinity and the angular magnification diverges."

result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: Resumen
      en: Summary
  physical_reading:
    enabled: true
    order: 2
    title:
      es: Lectura fisica
      en: Physical reading
  coherence:
    enabled: true
    order: 3
    title:
      es: Coherencia
      en: Coherence
  model_validity:
    enabled: true
    order: 4
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    enabled: true
    order: 5
    title:
      es: Lectura del grafico
      en: Graph reading
  likely_errors:
    enabled: true
    order: 6
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    enabled: true
    order: 7
    title:
      es: Siguiente paso
      en: Next step

targets:
  d_i:
    magnitude_type: distance
    semantic_role:
      es: Distancia entre la lente y la imagen formada.
      en: Distance between the lens and the image formed.
    summary_rules:
      - id: di_summary_real
        when: "d_i > 0"
        status: ok
        text:
          es: "[[d_i]] es positiva, lo que indica imagen real al lado opuesto de la lente. Este resultado depende de la relacion entre [[d_o]] y [[f]]."
          en: "[[d_i]] is positive, indicating a real image on the far side of the lens. This result depends on the relationship between [[d_o]] and [[f]]."
      - id: di_summary_virtual
        when: "d_i < 0"
        status: ok
        text:
          es: "[[d_i]] es negativa, lo que indica imagen virtual del mismo lado que el objeto. Esto resume el comportamiento de la lupa."
          en: "[[d_i]] is negative, indicating a virtual image on the same side as the object. This summarises the magnifier behaviour."
      - id: di_summary_default
        when: "true"
        status: ok
        text:
          es: "[[d_i]] indica la posicion de la imagen respecto a la lente y depende de [[d_o]] y [[f]]."
          en: "[[d_i]] indicates the image position relative to the lens and depends on [[d_o]] and [[f]]."
    physical_reading_rules:
      - id: di_phys_convergente
        when: "d_o > f and f > 0"
        status: ok
        text:
          es: "El objeto esta mas alla del foco de una lente convergente, por lo que la imagen real se forma al otro lado. Al aumentar [[d_o]], [[d_i]] disminuye y se acerca al foco imagen."
          en: "The object is beyond the focus of a converging lens, so the real image forms on the far side. As [[d_o]] increases, [[d_i]] decreases and approaches the image focus."
      - id: di_phys_default
        when: "true"
        status: ok
        text:
          es: "La imagen se forma donde los rayos refractados convergen o parecen diverger. La posicion depende de la relacion entre [[d_o]] y [[f]]."
          en: "The image forms where refracted rays converge or appear to diverge. The position depends on the relationship between [[d_o]] and [[f]]."
    coherence_rules:
      - id: di_coh_sign
        when: "d_i > 0 and d_o < f and f > 0"
        status: warning
        text:
          es: "El objeto esta entre la lente convergente y el foco pero la imagen resulta positiva; revisar los datos introducidos."
          en: "The object is between the converging lens and the focus but the image is positive; check the input data."
      - id: di_coh_default
        when: "true"
        status: ok
        text:
          es: "El signo de [[d_i]] es coherente con la posicion del objeto respecto al foco."
          en: "The sign of [[d_i]] is consistent with the object position relative to the focus."
    model_validity_rules:
      - id: di_model_paraxial
        when: "true"
        status: ok
        text:
          es: "El resultado es valido mientras los rayos formen angulos pequenos con el eje optico y la lente sea delgada."
          en: "The result is valid as long as rays form small angles with the optical axis and the lens is thin."
    graph_rules:
      - id: di_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[d_i]] aparece como la posicion horizontal de la imagen; un cambio de signo indica que la imagen pasa de real a virtual."
          en: "On the graph, [[d_i]] appears as the horizontal image position; a sign change indicates the image switches from real to virtual."
    likely_errors:
      - id: di_error_sign
        when: "true"
        status: warning
        text:
          es: "Error frecuente: olvidar el signo de [[d_i]]. Si la imagen es virtual, [[d_i]] debe ser negativa."
          en: "Common error: forgetting the sign of [[d_i]]. If the image is virtual, [[d_i]] must be negative."
    next_step_rules:
      - id: di_next_default
        when: "true"
        status: ok
        text:
          es: "Calcular ahora el aumento angular [[M_angular]] usando la focal y la distancia del punto proximo."
          en: "Now calculate the angular magnification [[M_angular]] using the focal length and the near-point distance."

  d_o:
    magnitude_type: distance
    semantic_role:
      es: Distancia entre el objeto y la lente.
      en: Distance between the object and the lens.
    summary_rules:
      - id: do_summary_default
        when: "true"
        status: ok
        text:
          es: "[[d_o]] indica la posicion del objeto frente a la lente y depende del montaje del instrumento."
          en: "[[d_o]] indicates the object position in front of the lens and depends on the instrument setup."
    physical_reading_rules:
      - id: do_phys_default
        when: "true"
        status: ok
        text:
          es: "La distancia del objeto determina si la imagen sera real o virtual segun su relacion con [[f]]."
          en: "The object distance determines whether the image will be real or virtual according to its relationship with [[f]]."
    coherence_rules:
      - id: do_coh_default
        when: "true"
        status: ok
        text:
          es: "[[d_o]] debe ser positiva para un objeto real situado delante de la lente."
          en: "[[d_o]] must be positive for a real object in front of the lens."
    model_validity_rules:
      - id: do_model_default
        when: "true"
        status: ok
        text:
          es: "Valido en la aproximacion de lente delgada con rayos paraxiales."
          en: "Valid in the thin-lens approximation with paraxial rays."
    graph_rules:
      - id: do_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[d_o]] se representa como la distancia horizontal entre el objeto y la lente."
          en: "On the graph, [[d_o]] is shown as the horizontal distance between the object and the lens."
    likely_errors:
      - id: do_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: medir [[d_o]] desde el foco en vez de desde el centro de la lente."
          en: "Common error: measuring [[d_o]] from the focus instead of from the lens centre."
    next_step_rules:
      - id: do_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[d_o]] y [[f]] conocidos, calcular [[d_i]] mediante la ecuacion de la lente delgada."
          en: "With [[d_o]] and [[f]] known, calculate [[d_i]] using the thin lens equation."

  f:
    magnitude_type: distance
    semantic_role:
      es: Distancia focal de la lente.
      en: Focal length of the lens.
    summary_rules:
      - id: f_summary_default
        when: "true"
        status: ok
        text:
          es: "[[f]] indica la potencia optica de la lente y depende de la curvatura de sus superficies y del indice de refraccion."
          en: "[[f]] indicates the optical power of the lens and depends on the curvature of its surfaces and the refractive index."
    physical_reading_rules:
      - id: f_phys_default
        when: "true"
        status: ok
        text:
          es: "Una focal corta significa mayor capacidad de convergencia y, en instrumentos, mayor aumento potencial."
          en: "A short focal length means greater convergence ability and, in instruments, higher potential magnification."
    coherence_rules:
      - id: f_coh_default
        when: "true"
        status: ok
        text:
          es: "[[f]] positiva indica lente convergente; negativa, divergente."
          en: "Positive [[f]] indicates a converging lens; negative, a diverging lens."
    model_validity_rules:
      - id: f_model_default
        when: "true"
        status: ok
        text:
          es: "Valida para lentes delgadas; en lentes gruesas usar la distancia focal efectiva."
          en: "Valid for thin lenses; for thick lenses use the effective focal length."
    graph_rules:
      - id: f_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[f]] marca la posicion del foco principal sobre el eje optico."
          en: "On the graph, [[f]] marks the principal focus position on the optical axis."
    likely_errors:
      - id: f_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir la focal del objetivo con la del ocular en un instrumento de dos lentes."
          en: "Common error: confusing the objective focal length with the eyepiece focal length in a two-lens instrument."
    next_step_rules:
      - id: f_next_default
        when: "true"
        status: ok
        text:
          es: "Usar [[f]] junto con [[d_o]] para determinar [[d_i]] y luego el aumento."
          en: "Use [[f]] together with [[d_o]] to determine [[d_i]] and then the magnification."

  M_angular:
    magnitude_type: ratio
    semantic_role:
      es: Aumento angular del instrumento optico.
      en: Angular magnification of the optical instrument.
    summary_rules:
      - id: ma_summary_positive
        when: "M_angular > 1"
        status: ok
        text:
          es: "[[M_angular]] es mayor que 1, lo que indica que el instrumento amplifica la imagen respecto a la vision a simple vista. Este resultado depende de la relacion entre [[d_pp]] y la focal."
          en: "[[M_angular]] is greater than 1, indicating the instrument magnifies the image compared to unaided vision. This result depends on the relationship between [[d_pp]] and the focal length."
      - id: ma_summary_default
        when: "true"
        status: ok
        text:
          es: "[[M_angular]] resume el factor de ampliacion angular del instrumento e indica cuantas veces mayor es el angulo subtendido."
          en: "[[M_angular]] summarises the angular magnification factor of the instrument and indicates how many times the subtended angle increases."
    physical_reading_rules:
      - id: ma_phys_lupa
        when: "M_angular > 1 and M_angular < 30"
        status: ok
        text:
          es: "El aumento angular se encuentra en el rango tipico de una lupa simple. Al disminuir la focal, [[M_angular]] aumenta proporcionalmente."
          en: "The angular magnification is in the typical range of a simple magnifier. As the focal length decreases, [[M_angular]] increases proportionally."
      - id: ma_phys_default
        when: "true"
        status: ok
        text:
          es: "[[M_angular]] cuantifica la ampliacion angular del instrumento."
          en: "[[M_angular]] quantifies the angular magnification of the instrument."
    coherence_rules:
      - id: ma_coh_below1
        when: "M_angular < 1"
        status: warning
        text:
          es: "Un aumento angular menor que 1 indicaria que el instrumento reduce la imagen; revisar la focal introducida."
          en: "An angular magnification below 1 would indicate the instrument reduces the image; check the entered focal length."
      - id: ma_coh_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[M_angular]] es coherente con los parametros introducidos."
          en: "The value of [[M_angular]] is consistent with the entered parameters."
    model_validity_rules:
      - id: ma_model_default
        when: "true"
        status: ok
        text:
          es: "Valido con ojo relajado enfocando al infinito y lente delgada paraxial."
          en: "Valid with the relaxed eye focusing at infinity and paraxial thin lens."
    graph_rules:
      - id: ma_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[M_angular]] aparece en el eje vertical y decrece hiperbolicamente al aumentar la focal."
          en: "On the graph, [[M_angular]] appears on the vertical axis and decreases hyperbolically as the focal length increases."
    likely_errors:
      - id: ma_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir aumento angular con aumento lateral; el primero compara angulos, el segundo tamanos."
          en: "Common error: confusing angular magnification with lateral magnification; the former compares angles, the latter sizes."
    next_step_rules:
      - id: ma_next_default
        when: "true"
        status: ok
        text:
          es: "Comparar el aumento obtenido con los valores tipicos del instrumento; si se trata de un microscopio, calcular [[M_micro]]."
          en: "Compare the obtained magnification with typical instrument values; if it is a microscope, calculate [[M_micro]]."

  f_lupa:
    magnitude_type: distance
    semantic_role:
      es: Distancia focal de la lente usada como lupa.
      en: Focal length of the lens used as a magnifying glass.
    summary_rules:
      - id: flupa_summary_default
        when: "true"
        status: ok
        text:
          es: "[[f_lupa]] indica la potencia de la lupa y depende de la curvatura de la lente convergente."
          en: "[[f_lupa]] indicates the magnifier power and depends on the curvature of the converging lens."
    physical_reading_rules:
      - id: flupa_phys_default
        when: "true"
        status: ok
        text:
          es: "A menor [[f_lupa]], mayor aumento angular; la relacion es inversamente proporcional."
          en: "The shorter [[f_lupa]], the higher the angular magnification; the relationship is inversely proportional."
    coherence_rules:
      - id: flupa_coh_default
        when: "true"
        status: ok
        text:
          es: "[[f_lupa]] debe ser positiva para una lente convergente."
          en: "[[f_lupa]] must be positive for a converging lens."
    model_validity_rules:
      - id: flupa_model_default
        when: "true"
        status: ok
        text:
          es: "Valida para lentes delgadas en aproximacion paraxial."
          en: "Valid for thin lenses in paraxial approximation."
    graph_rules:
      - id: flupa_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[f_lupa]] aparece en el eje horizontal; su disminucion eleva la curva de aumento."
          en: "On the graph, [[f_lupa]] appears on the horizontal axis; its decrease raises the magnification curve."
    likely_errors:
      - id: flupa_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar la focal del ocular del microscopio como [[f_lupa]] en la formula de la lupa simple."
          en: "Common error: using the microscope eyepiece focal length as [[f_lupa]] in the simple magnifier formula."
    next_step_rules:
      - id: flupa_next_default
        when: "true"
        status: ok
        text:
          es: "Calcular [[M_angular]] dividiendo [[d_pp]] entre [[f_lupa]]."
          en: "Calculate [[M_angular]] by dividing [[d_pp]] by [[f_lupa]]."

  f_obj:
    magnitude_type: distance
    semantic_role:
      es: Focal del objetivo del microscopio o telescopio.
      en: Objective focal length of the microscope or telescope.
    summary_rules:
      - id: fobj_summary_default
        when: "true"
        status: ok
        text:
          es: "[[f_obj]] indica la potencia optica del objetivo y depende de la curvatura y del vidrio utilizado."
          en: "[[f_obj]] indicates the optical power of the objective and depends on the curvature and glass used."
    physical_reading_rules:
      - id: fobj_phys_default
        when: "true"
        status: ok
        text:
          es: "El objetivo con focal corta produce una imagen intermedia mas ampliada, aumentando el aumento total del microscopio."
          en: "An objective with a short focal length produces a more magnified intermediate image, increasing the total microscope magnification."
    coherence_rules:
      - id: fobj_coh_default
        when: "true"
        status: ok
        text:
          es: "[[f_obj]] debe ser positiva y mucho menor que [[L]]."
          en: "[[f_obj]] must be positive and much smaller than [[L]]."
    model_validity_rules:
      - id: fobj_model_default
        when: "true"
        status: ok
        text:
          es: "Valida para lentes delgadas con longitud de tubo estandar."
          en: "Valid for thin lenses with standard tube length."
    graph_rules:
      - id: fobj_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico, reducir [[f_obj]] eleva la curva de aumento total."
          en: "On the graph, reducing [[f_obj]] raises the total magnification curve."
    likely_errors:
      - id: fobj_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: intercambiar [[f_obj]] con [[f_oc]] en la formula del microscopio."
          en: "Common error: swapping [[f_obj]] with [[f_oc]] in the microscope formula."
    next_step_rules:
      - id: fobj_next_default
        when: "true"
        status: ok
        text:
          es: "Combinar [[f_obj]] con [[f_oc]] y [[L]] para obtener [[M_micro]]."
          en: "Combine [[f_obj]] with [[f_oc]] and [[L]] to obtain [[M_micro]]."

  f_oc:
    magnitude_type: distance
    semantic_role:
      es: Focal del ocular del microscopio o telescopio.
      en: Eyepiece focal length of the microscope or telescope.
    summary_rules:
      - id: foc_summary_default
        when: "true"
        status: ok
        text:
          es: "[[f_oc]] indica la potencia del ocular y depende de su diseno optico."
          en: "[[f_oc]] indicates the eyepiece power and depends on its optical design."
    physical_reading_rules:
      - id: foc_phys_default
        when: "true"
        status: ok
        text:
          es: "El ocular amplifica angularmente la imagen intermedia; a menor focal, mayor aumento angular del ocular."
          en: "The eyepiece angularly magnifies the intermediate image; the shorter the focal length, the higher the eyepiece angular magnification."
    coherence_rules:
      - id: foc_coh_default
        when: "true"
        status: ok
        text:
          es: "[[f_oc]] debe ser positiva."
          en: "[[f_oc]] must be positive."
    model_validity_rules:
      - id: foc_model_default
        when: "true"
        status: ok
        text:
          es: "Valida para oculares delgados en aproximacion paraxial."
          en: "Valid for thin eyepieces in paraxial approximation."
    graph_rules:
      - id: foc_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico, disminuir [[f_oc]] aumenta el aumento total del microscopio."
          en: "On the graph, decreasing [[f_oc]] increases the total microscope magnification."
    likely_errors:
      - id: foc_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: olvidar que el ocular actua sobre la imagen intermedia, no sobre el objeto."
          en: "Common error: forgetting the eyepiece acts on the intermediate image, not on the object."
    next_step_rules:
      - id: foc_next_default
        when: "true"
        status: ok
        text:
          es: "Calcular [[M_micro]] combinando [[f_oc]] con [[f_obj]] y [[L]]."
          en: "Calculate [[M_micro]] by combining [[f_oc]] with [[f_obj]] and [[L]]."

  M_micro:
    magnitude_type: ratio
    semantic_role:
      es: Aumento total del microscopio compuesto.
      en: Total magnification of the compound microscope.
    summary_rules:
      - id: mmicro_summary_high
        when: "M_micro > 100"
        status: ok
        text:
          es: "[[M_micro]] supera 100 aumentos, lo que indica un microscopio con buena capacidad de resolucion. Este resultado depende de [[f_obj]], [[f_oc]] y [[L]]."
          en: "[[M_micro]] exceeds 100 times, indicating a microscope with good resolving ability. This result depends on [[f_obj]], [[f_oc]] and [[L]]."
      - id: mmicro_summary_default
        when: "true"
        status: ok
        text:
          es: "[[M_micro]] indica el aumento total del microscopio y depende del producto de los aumentos del objetivo y del ocular."
          en: "[[M_micro]] indicates the total microscope magnification and depends on the product of the objective and eyepiece magnifications."
    physical_reading_rules:
      - id: mmicro_phys_default
        when: "true"
        status: ok
        text:
          es: "El aumento total es el producto del aumento lateral del objetivo (proporcional a [[L]] dividido entre [[f_obj]]) por el aumento angular del ocular (proporcional a [[d_pp]] dividido entre [[f_oc]])."
          en: "The total magnification is the product of the objective lateral magnification (proportional to [[L]] divided by [[f_obj]]) and the eyepiece angular magnification (proportional to [[d_pp]] divided by [[f_oc]])."
    coherence_rules:
      - id: mmicro_coh_low
        when: "M_micro < 10"
        status: warning
        text:
          es: "Un aumento total menor que 10 es atipico para un microscopio compuesto; revisar las focales y la longitud del tubo."
          en: "A total magnification below 10 is atypical for a compound microscope; check the focal lengths and tube length."
      - id: mmicro_coh_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[M_micro]] es coherente con los parametros introducidos."
          en: "The value of [[M_micro]] is consistent with the entered parameters."
    model_validity_rules:
      - id: mmicro_model_default
        when: "true"
        status: ok
        text:
          es: "Valido para microscopios con lentes delgadas y longitud de tubo estandar de aproximadamente 0.16 m."
          en: "Valid for microscopes with thin lenses and standard tube length of approximately 0.16 m."
    graph_rules:
      - id: mmicro_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[M_micro]] crece linealmente con [[L]] y decrece hiperbolicamente con las focales."
          en: "On the graph, [[M_micro]] grows linearly with [[L]] and decreases hyperbolically with the focal lengths."
    likely_errors:
      - id: mmicro_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: sumar los aumentos del objetivo y del ocular en lugar de multiplicarlos."
          en: "Common error: adding the objective and eyepiece magnifications instead of multiplying them."
    next_step_rules:
      - id: mmicro_next_default
        when: "true"
        status: ok
        text:
          es: "Comparar [[M_micro]] con el poder de resolucion del microscopio y considerar los limites de difraccion."
          en: "Compare [[M_micro]] with the microscope resolving power and consider diffraction limits."

cross_checks:
  - id: cc_aumento_lupa_vs_micro
    description:
      es: "Si se calcula tanto el aumento de la lupa como el del microscopio, el del microscopio debe ser sustancialmente mayor."
      en: "If both magnifier and microscope magnifications are computed, the microscope value should be substantially larger."

error_patterns:
  - id: ep_sumar_aumentos
    description:
      es: "Sumar los aumentos del objetivo y del ocular en lugar de multiplicarlos."
      en: "Adding objective and eyepiece magnifications instead of multiplying them."
  - id: ep_confundir_focales
    description:
      es: "Intercambiar la focal del objetivo con la del ocular."
      en: "Swapping the objective focal length with the eyepiece focal length."

graph_binding:
  primary_graph: Coord
  magnitude_channels:
    M_angular: eje_y_aumento
    f_lupa: eje_x_focal_lupa
    M_micro: eje_y_aumento_micro

mini_graph:
  enabled: true
  preferred_type: Coord
  highlight_magnitude: M_angular

output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_mode:
    max_sections: 2
    priority:
      - summary
      - likely_errors
  extended_mode:
    show_all: true
`;export{e as default};
