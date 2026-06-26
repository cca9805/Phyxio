const e=`version: "v5"
id: interp-ley-de-biot-savart
leaf_id: ley-de-biot-savart
nombre:
  es: Interpretacion de la ley de Biot Savart
  en: Biot-Savart law interpretation
scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: magnetismo
  parent_id: fuentes-del-campo-magnetico
  ruta_relativa: fisica-clasica/electromagnetismo/magnetismo/fuentes-del-campo-magnetico/ley-de-biot-savart
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
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits:
    max_blocks: 2
    max_words: 80
dependencies:
  formulas: [biot_savart_diferencial, campo_hilo_largo, campo_espira_centro]
  magnitudes: [B, dB, mu0, I, dl, r, s_theta, R]
global_context:
  physical_domain:
    es: Magnetostatica clasica con corrientes estacionarias y superposicion vectorial de contribuciones.
    en: Classical magnetostatics with steady currents and vector superposition of contributions.
  axis_convention:
    es: La direccion se decide con la regla de la mano derecha aplicada al elemento de corriente.
    en: Direction is decided by the right-hand rule applied to the current element.
  standard_assumptions:
    - corriente estacionaria
    - conductor idealizado como linea o espira delgada
    - medio aproximado como vacio
  standard_warnings:
    - no sumar contribuciones como escalares si sus direcciones cambian
    - no usar la formula de hilo largo cerca de extremos
    - no confundir radio con diametro en espiras
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
  dB:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: Contribucion elemental de campo antes de integrar toda la corriente.
      en: Elementary field contribution before integrating the whole current.
    summary_rules:
      - id: db_summary_default
        when: "true"
        status: ok
        text:
          es: "[[dB]] indica cuanto aporta un elemento local de corriente antes de sumar toda la geometria."
          en: "[[dB]] indicates how much one local current element contributes before summing the whole geometry."
    physical_reading_rules:
      - id: db_physical_default
        when: "true"
        status: ok
        text:
          es: La contribucion aumenta con [[I]], [[dl]] y [[s_theta]], pero disminuye con la distancia [[r]].
          en: The contribution increases with [[I]], [[dl]] and [[s_theta]], but decreases with distance [[r]].
    coherence_rules:
      - id: db_coherence_negative
        when: "dB < 0"
        status: error
        text:
          es: El modulo [[dB]] no debe ser negativo; la direccion se interpreta aparte.
          en: The magnitude [[dB]] must not be negative; direction is interpreted separately.
      - id: db_coherence_default
        when: "true"
        status: ok
        text:
          es: Si [[s_theta]] es pequeno, el elemento esta casi alineado con el punto y aporta poco campo.
          en: If [[s_theta]] is small, the element is nearly aligned with the point and contributes little field.
    model_validity_rules:
      - id: db_validity_default
        when: "true"
        status: ok
        text:
          es: La lectura exige corriente estacionaria y una distancia no nula al elemento.
          en: The reading requires steady current and nonzero distance to the element.
    graph_rules:
      - id: db_graph_default
        when: "true"
        status: ok
        text:
          es: En el grafico, [[dB]] debe caer al aumentar [[r]] para los demas parametros fijos.
          en: In the graph, [[dB]] should fall as [[r]] increases for fixed remaining parameters.
    likely_errors:
      - id: db_error_direction
        when: "true"
        status: warning
        text:
          es: "Error tipico: sumar modulos de [[dB]] sin comprobar direcciones."
          en: "Typical mistake: adding [[dB]] magnitudes without checking directions."
    next_step_rules:
      - id: db_next_default
        when: "true"
        status: ok
        text:
          es: El siguiente paso es decidir si la simetria permite integrar y obtener [[B]].
          en: The next step is to decide whether symmetry allows integration and gives [[B]].

  B:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: Campo magnetico total despues de sumar la distribucion de corriente.
      en: Total magnetic field after summing the current distribution.
    summary_rules:
      - id: b_summary_default
        when: "true"
        status: ok
        text:
          es: "[[B]] describe el campo resultante y depende de la corriente, la distancia y la geometria."
          en: "[[B]] describes the resulting field and depends on current, distance, and geometry."
    physical_reading_rules:
      - id: b_physical_default
        when: "true"
        status: ok
        text:
          es: Un campo mayor significa que las contribuciones de corriente se suman con mayor eficacia en el punto.
          en: A larger field means current contributions add more effectively at the point.
    coherence_rules:
      - id: b_coherence_negative
        when: "B < 0"
        status: error
        text:
          es: El modulo [[B]] no debe ser negativo; el signo pertenece a una componente orientada.
          en: The magnitude [[B]] must not be negative; sign belongs to an oriented component.
      - id: b_coherence_default
        when: "true"
        status: ok
        text:
          es: Para hilo largo, aumentar [[r]] con [[I]] fija debe reducir [[B]].
          en: For a long wire, increasing [[r]] with fixed [[I]] must reduce [[B]].
    model_validity_rules:
      - id: b_validity_default
        when: "true"
        status: ok
        text:
          es: La formula directa depende de la geometria; hilo largo y espira central no son intercambiables.
          en: The direct formula depends on geometry; long wire and loop center are not interchangeable.
    graph_rules:
      - id: b_graph_default
        when: "true"
        status: ok
        text:
          es: La curva de [[B]] frente a [[r]] debe mostrar la perdida de intensidad con la distancia.
          en: The curve of [[B]] versus [[r]] should show loss of strength with distance.
    likely_errors:
      - id: b_error_geometry
        when: "true"
        status: warning
        text:
          es: "Error tipico: usar la formula de hilo largo para una espira o para un punto cercano al extremo."
          en: "Typical mistake: using the long-wire formula for a loop or for a point near an end."
    next_step_rules:
      - id: b_next_default
        when: "true"
        status: ok
        text:
          es: Comprueba la geometria, el sentido de la corriente y el orden de magnitud del resultado.
          en: Check the geometry, current direction, and order of magnitude of the result.
cross_checks:
  - id: biot_targets_present
    es: Los targets interpretados coinciden con los resultados calculables de formulas.yaml.
    en: Interpreted targets match the calculable results in formulas.yaml.
error_patterns:
  - id: scalar_sum_error
    target: dB
    message:
      es: No sumar contribuciones vectoriales como si todas fueran paralelas.
      en: Do not add vector contributions as if all were parallel.
graph_binding:
  graph_type: Coord
  x_magnitude: r
  y_magnitude: B
mini_graph:
  enabled: true
  type: inverse_curve
  x: r
  y: B
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
    priority: [summary, likely_errors]
  extended_mode:
    show_all: true
`;export{e as default};
