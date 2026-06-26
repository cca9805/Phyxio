const e=`version: v5
id: interpretacion_materiales_magneticos
leaf_id: materiales-magneticos
nombre:
  es: Interpretacion de materiales magneticos
  en: Magnetic materials interpretation
scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: magnetismo
  parent_id: magnetismo
  ruta_relativa: fisica-clasica/electromagnetismo/magnetismo/materiales-magneticos
ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Lectura del material
    en: Material reading
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_items: 2
dependencies:
  formulas:
    - permeabilidad_absoluta
    - susceptibilidad_desde_permeabilidad
    - magnetizacion_lineal
    - campo_material_lineal
  magnitudes:
    - H
    - M
    - B
    - mu
    - mu0
    - mu_r
    - chi_m
global_context:
  physical_domain:
    es: Magnetismo macroscopico de materiales lineales, homogeneos y reversibles.
    en: Macroscopic magnetism of linear, homogeneous, reversible materials.
  axis_convention:
    es: La direccion positiva se toma en el sentido de la intensidad magnetica aplicada.
    en: The positive direction is taken along the applied magnetic field strength.
  standard_assumptions:
    - respuesta lineal
    - temperatura constante
    - geometria sin desmagnetizacion dominante
    - sin histeresis apreciable
  standard_warnings:
    - saturacion ferromagnetica
    - remanencia tras retirar el campo
    - anisotropia fuerte
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
      es: Lectura grafica
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
  mu:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: escala dimensional de respuesta magnetica lineal
      en: dimensional scale of linear magnetic response
    summary_rules:
      - id: mu_summary_default
        when: "true"
        status: ok
        text:
          es: "[[mu]] indica cuanta respuesta total produce el material por cada unidad de [[H]] aplicada."
          en: "[[mu]] indicates how much total response the material produces per unit of applied [[H]]."
    physical_reading_rules:
      - id: mu_reading_default
        when: "true"
        status: ok
        text:
          es: "Una [[mu]] mayor concentra mas campo magnetico total para la misma excitacion."
          en: "A larger [[mu]] concentrates more total magnetic field for the same excitation."
    coherence_rules:
      - id: mu_coherence_positive
        when: "mu > 0"
        status: ok
        text:
          es: "El signo positivo es coherente con un medio lineal ordinario."
          en: "The positive sign is coherent with an ordinary linear medium."
      - id: mu_coherence_default
        when: "true"
        status: warning
        text:
          es: "Si [[mu]] no es positiva, revisa unidades o si el modelo lineal es aplicable."
          en: "If [[mu]] is not positive, check units or whether the linear model applies."
    model_validity_rules:
      - id: mu_validity_default
        when: "true"
        status: ok
        text:
          es: "La lectura vale mientras la pendiente entre [[B]] y [[H]] no cambie por saturacion."
          en: "The reading is valid while the slope between [[B]] and [[H]] does not change by saturation."
    graph_rules:
      - id: mu_graph_default
        when: "true"
        status: ok
        text:
          es: "En la grafica, [[mu]] aparece como pendiente efectiva de [[B]] frente a [[H]]."
          en: "In the graph, [[mu]] appears as the effective slope of [[B]] versus [[H]]."
    likely_errors:
      - id: mu_error_relative
        when: "true"
        status: warning
        text:
          es: "Error tipico: usar [[mu_r]] como si tuviera unidades de [[mu]]."
          en: "Typical mistake: using [[mu_r]] as if it had the units of [[mu]]."
    next_step_rules:
      - id: mu_next_default
        when: "true"
        status: ok
        text:
          es: "Compara [[mu]] con [[mu0]] para obtener una lectura relativa mediante [[mu_r]]."
          en: "Compare [[mu]] with [[mu0]] to obtain a relative reading through [[mu_r]]."
  mu_r:
    magnitude_type: ratio
    semantic_role:
      es: comparacion del material con el vacio
      en: comparison of the material with vacuum
    summary_rules:
      - id: mur_summary_default
        when: "true"
        status: ok
        text:
          es: "[[mu_r]] resume si el material aumenta, disminuye o apenas modifica el campo respecto al vacio."
          en: "[[mu_r]] summarizes whether the material increases, decreases, or barely modifies the field relative to vacuum."
    physical_reading_rules:
      - id: mur_reading_dia
        when: "mu_r < 1"
        status: ok
        text:
          es: "Un valor menor que uno indica respuesta diamagnetica efectiva."
          en: "A value below one indicates an effective diamagnetic response."
      - id: mur_reading_default
        when: "true"
        status: ok
        text:
          es: "Valores altos indican concentracion fuerte de campo solo si no hay saturacion."
          en: "High values indicate strong field concentration only if saturation is absent."
    coherence_rules:
      - id: mur_coherence_positive
        when: "mu_r > 0"
        status: ok
        text:
          es: "[[mu_r]] positiva mantiene sentido fisico en el modelo lineal basico."
          en: "Positive [[mu_r]] keeps physical meaning in the basic linear model."
      - id: mur_coherence_default
        when: "true"
        status: error
        text:
          es: "Un valor no positivo exige revisar datos o abandonar este modelo."
          en: "A nonpositive value requires checking data or leaving this model."
    model_validity_rules:
      - id: mur_validity_default
        when: "true"
        status: ok
        text:
          es: "[[mu_r]] debe tratarse como pendiente local si el material es ferromagnetico."
          en: "[[mu_r]] should be treated as a local slope if the material is ferromagnetic."
    graph_rules:
      - id: mur_graph_default
        when: "true"
        status: ok
        text:
          es: "La pendiente relativa frente a la recta del vacio representa [[mu_r]]."
          en: "The relative slope against the vacuum line represents [[mu_r]]."
    likely_errors:
      - id: mur_error_percent
        when: "true"
        status: warning
        text:
          es: "Error tipico: leer [[mu_r]] como porcentaje de campo sin considerar [[H]]."
          en: "Typical mistake: reading [[mu_r]] as a field percentage without considering [[H]]."
    next_step_rules:
      - id: mur_next_default
        when: "true"
        status: ok
        text:
          es: "Usa [[chi_m]] para interpretar el signo y la intensidad de la respuesta interna."
          en: "Use [[chi_m]] to interpret the sign and strength of the internal response."
  mu0:
    magnitude_type: constant
    semantic_role:
      es: referencia magnetica del vacio
      en: magnetic reference of vacuum
    summary_rules:
      - id: mu0_summary_default
        when: "true"
        status: ok
        text:
          es: "[[mu0]] indica la escala de referencia que permite comparar cualquier material con el vacio."
          en: "[[mu0]] indicates the reference scale that allows any material to be compared with vacuum."
    physical_reading_rules:
      - id: mu0_reading_default
        when: "true"
        status: ok
        text:
          es: "No describe el material, sino el patron usado para medir su respuesta relativa."
          en: "It does not describe the material, but the pattern used to measure its relative response."
    coherence_rules:
      - id: mu0_coherence_default
        when: "mu0 > 0"
        status: ok
        text:
          es: "Una constante positiva sostiene la comparacion dimensional."
          en: "A positive constant supports the dimensional comparison."
    model_validity_rules:
      - id: mu0_validity_default
        when: "true"
        status: ok
        text:
          es: "[[mu0]] sigue siendo referencia aunque el material deje de ser lineal."
          en: "[[mu0]] remains a reference even if the material stops being linear."
    graph_rules:
      - id: mu0_graph_default
        when: "true"
        status: ok
        text:
          es: "La recta de vacio sirve como comparador visual de pendiente."
          en: "The vacuum line acts as a visual slope comparator."
    likely_errors:
      - id: mu0_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: sustituir [[mu0]] por [[mu]] y perder la respuesta del material."
          en: "Typical mistake: replacing [[mu0]] with [[mu]] and losing the material response."
    next_step_rules:
      - id: mu0_next_default
        when: "true"
        status: ok
        text:
          es: "Despues calcula [[mu_r]] para separar referencia y material."
          en: "Next compute [[mu_r]] to separate reference and material."
  chi_m:
    magnitude_type: signed_ratio
    semantic_role:
      es: respuesta magnetica interna relativa a H
      en: internal magnetic response relative to H
    summary_rules:
      - id: chi_summary_default
        when: "true"
        status: ok
        text:
          es: "[[chi_m]] indica si la magnetizacion acompaña, se opone o apenas responde a [[H]]."
          en: "[[chi_m]] indicates whether magnetization follows, opposes, or barely responds to [[H]]."
    physical_reading_rules:
      - id: chi_reading_negative
        when: "chi_m < 0"
        status: ok
        text:
          es: "El signo negativo describe oposicion diamagnetica de [[M]] respecto a [[H]]."
          en: "The negative sign describes diamagnetic opposition of [[M]] relative to [[H]]."
      - id: chi_reading_default
        when: "true"
        status: ok
        text:
          es: "El modulo de [[chi_m]] mide la fuerza de la respuesta inducida."
          en: "The magnitude of [[chi_m]] measures the strength of the induced response."
    coherence_rules:
      - id: chi_coherence_low
        when: "chi_m <= -1"
        status: error
        text:
          es: "Ese valor haria no positiva la permeabilidad relativa en este modelo."
          en: "That value would make relative permeability nonpositive in this model."
      - id: chi_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor es interpretable como respuesta lineal efectiva."
          en: "The value is interpretable as an effective linear response."
    model_validity_rules:
      - id: chi_validity_default
        when: "true"
        status: ok
        text:
          es: "Si [[chi_m]] cambia con [[H]], usa una susceptibilidad local o curva experimental."
          en: "If [[chi_m]] changes with [[H]], use a local susceptibility or experimental curve."
    graph_rules:
      - id: chi_graph_default
        when: "true"
        status: ok
        text:
          es: "La pendiente de [[M]] frente a [[H]] representa [[chi_m]]."
          en: "The slope of [[M]] versus [[H]] represents [[chi_m]]."
    likely_errors:
      - id: chi_error_zero
        when: "true"
        status: warning
        text:
          es: "Error tipico: pensar que [[chi_m]] negativa significa ausencia de magnetismo."
          en: "Typical mistake: thinking negative [[chi_m]] means absence of magnetism."
    next_step_rules:
      - id: chi_next_default
        when: "true"
        status: ok
        text:
          es: "Relaciona [[chi_m]] con [[M]] para ver la respuesta interna inducida."
          en: "Relate [[chi_m]] to [[M]] to see the induced internal response."
  M:
    magnitude_type: vector_component
    semantic_role:
      es: magnetizacion inducida del material
      en: induced magnetization of the material
    summary_rules:
      - id: m_summary_default
        when: "true"
        status: ok
        text:
          es: "[[M]] describe la respuesta interna resultante del material ante la intensidad [[H]]."
          en: "[[M]] describes the resulting internal response of the material to field strength [[H]]."
    physical_reading_rules:
      - id: m_reading_default
        when: "true"
        status: ok
        text:
          es: "Su signo muestra si los momentos magneticos efectivos acompañan o se oponen al campo aplicado."
          en: "Its sign shows whether effective magnetic moments follow or oppose the applied field."
    coherence_rules:
      - id: m_coherence_zero_h
        when: "H == 0"
        status: warning
        text:
          es: "Con [[H]] nula, una [[M]] persistente sugiere remanencia fuera del modelo reversible."
          en: "With zero [[H]], persistent [[M]] suggests remanence outside the reversible model."
      - id: m_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[M]] es coherente si cambia proporcionalmente con [[H]]."
          en: "[[M]] is coherent if it changes proportionally with [[H]]."
    model_validity_rules:
      - id: m_validity_default
        when: "true"
        status: ok
        text:
          es: "La proporcionalidad entre [[M]] y [[H]] deja de valer cerca de saturacion."
          en: "The proportionality between [[M]] and [[H]] stops holding near saturation."
    graph_rules:
      - id: m_graph_default
        when: "true"
        status: ok
        text:
          es: "En una curva [[M]] frente a [[H]], una recta indica respuesta lineal."
          en: "On an [[M]] versus [[H]] curve, a straight line indicates linear response."
    likely_errors:
      - id: m_error_b
        when: "true"
        status: warning
        text:
          es: "Error tipico: confundir [[M]] con [[B]] y perder la separacion entre material y campo total."
          en: "Typical mistake: confusing [[M]] with [[B]] and losing the separation between material and total field."
    next_step_rules:
      - id: m_next_default
        when: "true"
        status: ok
        text:
          es: "Despues calcula [[B]] para ver el campo total que actuaria sobre cargas o conductores."
          en: "Next compute [[B]] to see the total field acting on charges or conductors."
  H:
    magnitude_type: vector_component
    semantic_role:
      es: excitacion magnetica aplicada por corrientes libres
      en: magnetic excitation applied by free currents
    summary_rules:
      - id: h_summary_default
        when: "true"
        status: ok
        text:
          es: "[[H]] indica la accion magnetizante impuesta antes de sumar la respuesta propia del material."
          en: "[[H]] indicates the imposed magnetizing action before adding the material own response."
    physical_reading_rules:
      - id: h_reading_default
        when: "true"
        status: ok
        text:
          es: "Aumentar [[H]] empuja al material hacia mayor [[M]] mientras el tramo sea lineal."
          en: "Increasing [[H]] drives the material toward larger [[M]] while the segment is linear."
    coherence_rules:
      - id: h_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[H]] puede ser positiva, negativa o nula segun la orientacion elegida."
          en: "[[H]] may be positive, negative, or zero depending on the chosen orientation."
    model_validity_rules:
      - id: h_validity_default
        when: "true"
        status: ok
        text:
          es: "Si [[H]] es muy alta, revisa saturacion antes de aceptar constantes fijas."
          en: "If [[H]] is very high, check saturation before accepting fixed constants."
    graph_rules:
      - id: h_graph_default
        when: "true"
        status: ok
        text:
          es: "[[H]] suele representarse en el eje horizontal como variable controlada."
          en: "[[H]] is usually plotted on the horizontal axis as the controlled variable."
    likely_errors:
      - id: h_error_b
        when: "true"
        status: warning
        text:
          es: "Error tipico: llamar [[H]] campo total y olvidar [[M]]."
          en: "Typical mistake: calling [[H]] the total field and forgetting [[M]]."
    next_step_rules:
      - id: h_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[H]] fijada, calcula [[M]] y [[B]] para completar la lectura del material."
          en: "With [[H]] set, compute [[M]] and [[B]] to complete the material reading."
  B:
    magnitude_type: vector_component
    semantic_role:
      es: campo magnetico total en el medio
      en: total magnetic field in the medium
    summary_rules:
      - id: b_summary_default
        when: "true"
        status: ok
        text:
          es: "[[B]] describe el campo resultante que domina fuerzas magneticas y energia almacenada."
          en: "[[B]] describes the resulting field that dominates magnetic forces and stored energy."
    physical_reading_rules:
      - id: b_reading_default
        when: "true"
        status: ok
        text:
          es: "Para la misma [[H]], un material con mayor [[mu]] produce mayor [[B]]."
          en: "For the same [[H]], a material with larger [[mu]] produces larger [[B]]."
    coherence_rules:
      - id: b_coherence_high
        when: "B > 2"
        status: warning
        text:
          es: "Un campo de varios teslas exige revisar saturacion y condiciones experimentales."
          en: "A field of several teslas requires checking saturation and experimental conditions."
      - id: b_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[B]] es coherente si conserva la relacion lineal con [[H]] en el tramo estudiado."
          en: "[[B]] is coherent if it preserves the linear relation with [[H]] in the studied segment."
    model_validity_rules:
      - id: b_validity_default
        when: "true"
        status: ok
        text:
          es: "Si la curva se aplana, [[B]] ya no se obtiene con una permeabilidad constante."
          en: "If the curve flattens, [[B]] is no longer obtained with a constant permeability."
    graph_rules:
      - id: b_graph_default
        when: "true"
        status: ok
        text:
          es: "La curva [[B]] frente a [[H]] permite ver pendiente, saturacion y region lineal."
          en: "The [[B]] versus [[H]] curve shows slope, saturation, and the linear region."
    likely_errors:
      - id: b_error_source
        when: "true"
        status: warning
        text:
          es: "Error tipico: atribuir todo [[B]] a la bobina y no al material."
          en: "Typical mistake: attributing all [[B]] to the coil and not to the material."
    next_step_rules:
      - id: b_next_default
        when: "true"
        status: ok
        text:
          es: "Compara [[B]] con valores de saturacion conocidos antes de extrapolar."
          en: "Compare [[B]] with known saturation values before extrapolating."
cross_checks:
  - id: mur_chi_consistency
    formula: susceptibilidad_desde_permeabilidad
    text:
      es: "La lectura de [[mu_r]] debe ser compatible con el signo de [[chi_m]]."
      en: "The reading of [[mu_r]] must be compatible with the sign of [[chi_m]]."
error_patterns:
  - id: confuse_b_h
    text:
      es: "Confundir [[B]] y [[H]] elimina la contribucion de [[M]]."
      en: "Confusing [[B]] and [[H]] removes the contribution of [[M]]."
graph_binding:
  primary_graph: Coord
  x_axis: H
  y_axis: B
  secondary_y_axis: M
mini_graph:
  enabled: true
  type: Coord
  highlights:
    - slope_mu
    - slope_chi_m
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
