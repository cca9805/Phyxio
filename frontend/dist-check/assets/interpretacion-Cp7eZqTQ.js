const e=`version: "v5"
id: interpretacion_flujo_magnetico
leaf_id: flujo-magnetico

nombre:
  es: Interpretación del flujo magnetico
  en: Interpretation of magnetic flux

scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: induccion-electromagnetica
  parent_id: induccion-electromagnetica
  ruta_relativa: fisica-clasica/electromagnetismo/induccion-electromagnetica/flujo-magnetico

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretación física
    en: Physical interpretation
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_rules: 3
    show_warnings: true

dependencies:
  formulas:
    - flujo_uniforme
    - componente_normal
    - flujo_maximo
    - variacion_flujo
  magnitudes:
    - Phi_B
    - B
    - A
    - cos_theta
    - B_perp
    - Phi_max
    - Phi_i
    - Phi_f
    - DeltaPhi

global_context:
  physical_domain:
    es: "Electromagnetismo clasico: lectura geometrica del campo magnetico que atraviesa una superficie orientada."
    en: "Classical electromagnetism: geometric reading of magnetic field crossing an oriented surface."
  axis_convention:
    es: "El signo del flujo se define por la normal de la superficie. El factor cos_theta resume la orientacion entre -1 y 1."
    en: "Flux sign is defined by the surface normal. The factor cos_theta summarizes orientation between -1 and 1."
  standard_assumptions:
    - "Campo uniforme cuando se usa la formula algebraica"
    - "Area efectiva plana o bien definida"
    - "Misma normal para comparar flujo inicial y final"
  standard_warnings:
    - "Un campo grande puede producir flujo nulo si es tangente a la superficie"
    - "La induccion depende de DeltaPhi, no del flujo aislado"

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
      es: Lectura física
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
      es: Lectura gráfica
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
  Phi_B:
    magnitude_type: scalar_signed
    semantic_role:
      es: "[[Phi_B]] expresa el campo magnetico neto que atraviesa la superficie orientada."
      en: "[[Phi_B]] expresses the net magnetic field crossing the oriented surface."
    summary_rules:
      - id: phib_summary_default
        when: "true"
        status: ok
        text:
          es: "[[Phi_B]] indica el acoplamiento campo-superficie; depende de [[B]], [[A]] y [[cos_theta]]."
          en: "[[Phi_B]] indicates field-surface coupling; it depends on [[B]], [[A]], and [[cos_theta]]."
    physical_reading_rules:
      - id: phib_reading_sign
        when: "Phi_B < 0"
        status: ok
        text:
          es: "[[Phi_B]] negativo significa que el campo cruza en sentido opuesto a la normal elegida."
          en: "Negative [[Phi_B]] means the field crosses opposite to the chosen normal."
      - id: phib_reading_default
        when: "true"
        status: ok
        text:
          es: "El modulo de [[Phi_B]] describe cuanto campo atraviesa efectivamente la superficie."
          en: "The magnitude of [[Phi_B]] describes how much field effectively crosses the surface."
    coherence_rules:
      - id: phib_coherence_area
        when: "A < 0"
        status: error
        text:
          es: "El area [[A]] no puede ser negativa; revisa los datos geometricos."
          en: "Area [[A]] cannot be negative; check the geometric data."
      - id: phib_coherence_default
        when: "true"
        status: ok
        text:
          es: "El resultado es coherente si [[cos_theta]] esta entre -1 y 1 y [[A]] es no negativa."
          en: "The result is coherent if [[cos_theta]] lies between -1 and 1 and [[A]] is nonnegative."
    model_validity_rules:
      - id: phib_validity_uniform
        when: "true"
        status: ok
        text:
          es: "La formula de [[Phi_B]] es valida para campo uniforme y superficie plana o area efectiva conocida."
          en: "The formula for [[Phi_B]] is valid for uniform field and a flat surface or known effective area."
    graph_rules:
      - id: phib_graph_default
        when: "true"
        status: ok
        text:
          es: "En la grafica, [[Phi_B]] aumenta linealmente con [[B]] y cambia de signo al invertir [[cos_theta]]."
          en: "On the graph, [[Phi_B]] increases linearly with [[B]] and changes sign when [[cos_theta]] is reversed."
    likely_errors:
      - id: phib_error_angle
        when: "true"
        status: warning
        text:
          es: "Error tipico: usar el angulo con el plano en vez del factor respecto a la normal."
          en: "Typical error: using the angle with the plane instead of the factor relative to the normal."
    next_step_rules:
      - id: phib_next_default
        when: "true"
        status: ok
        text:
          es: "Despues de [[Phi_B]], analiza [[DeltaPhi]] si el problema trata induccion."
          en: "After [[Phi_B]], analyze [[DeltaPhi]] if the problem involves induction."

  B_perp:
    magnitude_type: scalar_signed
    semantic_role:
      es: "[[B_perp]] resume la parte del campo que atraviesa realmente la superficie."
      en: "[[B_perp]] summarizes the part of the field that actually crosses the surface."
    summary_rules:
      - id: bperp_summary_default
        when: "true"
        status: ok
        text:
          es: "[[B_perp]] indica la componente normal; depende de [[B]] y del factor [[cos_theta]]."
          en: "[[B_perp]] indicates the normal component; it depends on [[B]] and factor [[cos_theta]]."
    physical_reading_rules:
      - id: bperp_reading_zero
        when: "B_perp == 0"
        status: ok
        text:
          es: "[[B_perp]] nulo significa que el campo es tangente o que no hay campo aplicado."
          en: "Zero [[B_perp]] means the field is tangent or no field is applied."
      - id: bperp_reading_default
        when: "true"
        status: ok
        text:
          es: "[[B_perp]] describe la causa inmediata del flujo a traves del area."
          en: "[[B_perp]] describes the immediate cause of flux through the area."
    coherence_rules:
      - id: bperp_coherence_factor
        when: "cos_theta < -1 or cos_theta > 1"
        status: error
        text:
          es: "[[cos_theta]] debe estar entre -1 y 1."
          en: "[[cos_theta]] must lie between -1 and 1."
      - id: bperp_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[B_perp]] es coherente si no supera en modulo al campo [[B]]."
          en: "[[B_perp]] is coherent if its magnitude does not exceed field [[B]]."
    model_validity_rules:
      - id: bperp_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de [[B_perp]] asume una direccion de campo definida en toda la superficie."
          en: "The [[B_perp]] model assumes a defined field direction across the surface."
    graph_rules:
      - id: bperp_graph_default
        when: "true"
        status: ok
        text:
          es: "La grafica de [[B_perp]] cruza cero cuando la superficie queda paralela al campo."
          en: "The [[B_perp]] graph crosses zero when the surface becomes parallel to the field."
    likely_errors:
      - id: bperp_error_total_field
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar todo [[B]] aunque solo [[B_perp]] contribuya al flujo."
          en: "Frequent mistake: using all of [[B]] although only [[B_perp]] contributes to flux."
    next_step_rules:
      - id: bperp_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[B_perp]] conocido, multiplica conceptualmente por [[A]] para leer el flujo."
          en: "With [[B_perp]] known, conceptually multiply by [[A]] to read flux."

  Phi_max:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "[[Phi_max]] fija la escala maxima de flujo para un campo y un area dados."
      en: "[[Phi_max]] sets the maximum flux scale for a given field and area."
    summary_rules:
      - id: phimax_summary_default
        when: "true"
        status: ok
        text:
          es: "[[Phi_max]] indica el limite superior positivo; depende de [[B]] y [[A]]."
          en: "[[Phi_max]] indicates the positive upper limit; it depends on [[B]] and [[A]]."
    physical_reading_rules:
      - id: phimax_reading_default
        when: "true"
        status: ok
        text:
          es: "[[Phi_max]] describe el flujo si la superficie esta orientada para cruce perpendicular."
          en: "[[Phi_max]] describes flux when the surface is oriented for perpendicular crossing."
    coherence_rules:
      - id: phimax_coherence_negative
        when: "Phi_max < 0"
        status: error
        text:
          es: "[[Phi_max]] no puede ser negativo porque es una escala maxima."
          en: "[[Phi_max]] cannot be negative because it is a maximum scale."
      - id: phimax_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[Phi_max]] es coherente cuando [[B]] y [[A]] son no negativos."
          en: "[[Phi_max]] is coherent when [[B]] and [[A]] are nonnegative."
    model_validity_rules:
      - id: phimax_validity_default
        when: "true"
        status: ok
        text:
          es: "La escala [[Phi_max]] asume campo uniforme sobre toda el area efectiva."
          en: "Scale [[Phi_max]] assumes a uniform field over the full effective area."
    graph_rules:
      - id: phimax_graph_default
        when: "true"
        status: ok
        text:
          es: "En la grafica, [[Phi_max]] funciona como envolvente para los valores posibles de [[Phi_B]]."
          en: "On the graph, [[Phi_max]] acts as an envelope for possible [[Phi_B]] values."
    likely_errors:
      - id: phimax_error_real_flux
        when: "true"
        status: warning
        text:
          es: "Error probable: tomar [[Phi_max]] como flujo real sin revisar orientacion."
          en: "Likely error: taking [[Phi_max]] as real flux without checking orientation."
    next_step_rules:
      - id: phimax_next_default
        when: "true"
        status: ok
        text:
          es: "Compara [[Phi_B]] con [[Phi_max]] para medir cuanta orientacion efectiva se ha perdido."
          en: "Compare [[Phi_B]] with [[Phi_max]] to measure how much effective orientation has been lost."

  DeltaPhi:
    magnitude_type: scalar_signed
    semantic_role:
      es: "[[DeltaPhi]] expresa el cambio de flujo que alimenta la induccion electromagnetica."
      en: "[[DeltaPhi]] expresses the flux change that drives electromagnetic induction."
    summary_rules:
      - id: dphi_summary_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaPhi]] indica si el flujo aumenta o disminuye; depende de [[Phi_f]] y [[Phi_i]]."
          en: "[[DeltaPhi]] indicates whether flux increases or decreases; it depends on [[Phi_f]] and [[Phi_i]]."
    physical_reading_rules:
      - id: dphi_reading_zero
        when: "DeltaPhi == 0"
        status: ok
        text:
          es: "[[DeltaPhi]] nulo significa que no hay cambio neto de flujo entre los dos estados."
          en: "Zero [[DeltaPhi]] means there is no net flux change between the two states."
      - id: dphi_reading_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaPhi]] describe el tamano y sentido del cambio relevante para Faraday."
          en: "[[DeltaPhi]] describes the size and direction of the change relevant to Faraday."
    coherence_rules:
      - id: dphi_coherence_same
        when: "Phi_f == Phi_i and DeltaPhi != 0"
        status: error
        text:
          es: "Si [[Phi_f]] y [[Phi_i]] coinciden, [[DeltaPhi]] debe ser nulo."
          en: "If [[Phi_f]] and [[Phi_i]] match, [[DeltaPhi]] must be zero."
      - id: dphi_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaPhi]] es coherente si ambos flujos usan la misma normal."
          en: "[[DeltaPhi]] is coherent if both fluxes use the same normal."
    model_validity_rules:
      - id: dphi_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de [[DeltaPhi]] exige comparar estados de la misma superficie y convencion de signo."
          en: "The [[DeltaPhi]] model requires comparing states of the same surface and sign convention."
    graph_rules:
      - id: dphi_graph_default
        when: "true"
        status: ok
        text:
          es: "En la grafica, [[DeltaPhi]] se lee como separacion vertical entre estado inicial y final."
          en: "On the graph, [[DeltaPhi]] is read as the vertical separation between initial and final state."
    likely_errors:
      - id: dphi_error_final_only
        when: "true"
        status: warning
        text:
          es: "Error comun: usar [[Phi_f]] como si fuera [[DeltaPhi]] y olvidar el estado inicial."
          en: "Common mistake: using [[Phi_f]] as if it were [[DeltaPhi]] and forgetting the initial state."
    next_step_rules:
      - id: dphi_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[DeltaPhi]] calculado, el siguiente leaf natural es la ley de Faraday."
          en: "With [[DeltaPhi]] calculated, the natural next leaf is Faraday's law."

cross_checks:
  - id: cc_orientation_range
    condition: "cos_theta < -1 or cos_theta > 1"
    message:
      es: "El factor de orientacion esta fuera del intervalo fisico."
      en: "The orientation factor is outside the physical interval."
  - id: cc_area_positive
    condition: "A < 0"
    message:
      es: "El area efectiva no puede ser negativa."
      en: "Effective area cannot be negative."

error_patterns:
  - id: ep_plane_angle
    detect_when: "cos_theta == 0"
    message:
      es: "Si esperabas flujo maximo, probablemente usaste el angulo con el plano en vez de la normal."
      en: "If you expected maximum flux, you probably used the angle with the plane instead of the normal."
  - id: ep_final_as_change
    detect_when: "DeltaPhi == Phi_f"
    message:
      es: "Revisa si el flujo inicial se omitio al calcular la variacion."
      en: "Check whether the initial flux was omitted when calculating the change."

graph_binding:
  channels:
    - id: campo
      magnitude: B
      role: x_axis
    - id: flujo
      magnitude: Phi_B
      role: y_axis
    - id: orientacion
      magnitude: cos_theta
      role: control
    - id: flujo_maximo
      magnitude: Phi_max
      role: envelope

mini_graph:
  enabled: true
  preferred_type: Coord
  default_view: flujo_vs_campo

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
