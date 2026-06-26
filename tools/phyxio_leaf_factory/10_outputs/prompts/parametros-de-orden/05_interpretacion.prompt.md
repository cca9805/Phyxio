# PROMPT YAML 05 | interpretacion.yaml

Create a downloadable YAML file named `parametros-de-orden_interpretacion.yaml`.
The file content must be the completed `interpretacion.yaml`.
Do not print the YAML content in the chat.
Do not wrap the YAML in Markdown fences.
Complete and improve `interpretacion.yaml` without changing synced identity/dependency fields.
The downloaded file must contain raw valid YAML only.

Current synchronized interpretacion.yaml:
INTERPRETACION_ACTUAL_INICIO
version: 5.0.0
id: parametros-de-orden
leaf_id: parametros-de-orden
nombre:
  es: Parametros de orden
  en: Order Parameters
scope:
  area: fisica-clasica
  bloque: termodinamica-estadistica
  subbloque: transiciones-de-fase
  parent_id: transiciones-de-fase
  ruta_relativa: fisica-clasica/termodinamica-estadistica/transiciones-de-fase/parametros-de-orden
  orden: 276200
output_contract:
  sections: &id001
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
  priority_order: *id001
  inline_limits:
    max_sections: 3
    priority:
    - summary
    - likely_errors
    - next_step
mini_graph:
  enabled: true
  preferred_type: Coord
output_policy:
  show_summary_first: true
  max_inline_messages: 3
  show_warnings: true
  show_likely_errors: true
dependencies:
  formulas: parametro_orden_diferencia_fases, ley_parametro_orden_continuo, temperatura_reducida_orden, susceptibilidad_parametro_orden
  magnitudes: temperatura, temperatura_critica, temperatura_reducida, parametro_de_orden, salto_parametro_de_orden, amplitud_critica,
    exponente_critico_beta, campo_conjugado, susceptibilidad
  requires_formulas: true
  requires_magnitudes: true
  supports_graph_binding: true
global_context:
  enabled: true
  physical_domain:
    es: termodinamica-estadistica
    en: physical concept
  axis_convention:
    es: El signo depende del convenio de ejes elegido cuando intervienen magnitudes vectoriales.
    en: The sign depends on the chosen axis convention when vector quantities are involved.
  standard_assumptions:
  - es: El modelo se interpreta dentro de las hipótesis declaradas en el leaf.
    en: The model is interpreted within the assumptions declared in the leaf.
  standard_warnings:
  - es: No interpretes el resultado sin revisar unidades, signo y validez del modelo.
    en: Do not interpret the result without checking units, sign, and model validity.
graph_binding:
  enabled: true
  type: Coord
  channels:
  - Coord
cross_checks:
  enabled: true
  checks:
  - id: dimension_check
    status: ok
    text:
      es: La interpretación debe respetar la dimensión física de cada resultado.
      en: The interpretation must respect the physical dimension of each result.
error_patterns:
  enabled: true
  patterns:
  - id: unit_sign_model_confusion
    status: warning
    text:
      es: Un error frecuente es leer el número sin unidad, signo o modelo físico.
      en: A common error is reading the number without unit, sign, or physical model.
graph_reading_policy:
  enabled: true
  primary_variable: salto_parametro_de_orden
  reading_sequence:
  - es: Identifica ejes, dirección, sentido y relación entre magnitudes antes de interpretar el resultado.
    en: Identify axes, direction, sense, and the relation between quantities before interpreting the result.
  key_points:
  - es: Conecta la lectura visual con el signo, la unidad y el modelo físico.
    en: Connect the visual reading with sign, unit, and the physical model.
comparative_context:
  enabled: true
  reference_values:
  - es: Compara el resultado con valores cotidianos o escalas físicas conocidas cuando sea posible.
    en: Compare the result with everyday values or known physical scales when possible.
  order_of_magnitude_check: true
dimensional_hint:
  enabled: true
  formula_dimensions:
    es: Comprueba que las unidades finales coinciden con la magnitud interpretada.
    en: Check that the final units match the interpreted quantity.
  common_unit_mistakes:
  - es: Mezclar unidades incompatibles antes de aplicar la fórmula.
    en: Mixing incompatible units before applying the formula.
free_body_diagram_hint:
  enabled: false
  key_forces: []
  equilibrium_condition:
    es: ''
    en: ''
process_type_detection:
  enabled: false
  processes: []
wave_behavior_context:
  enabled: false
  phenomena: []
field_visualization_hint:
  enabled: false
  field_lines:
    direction_rule:
      es: ''
      en: ''
    density_meaning:
      es: ''
      en: ''
  superposition_note:
    es: ''
    en: ''
ray_tracing_hint:
  enabled: false
  construction_rays: []
  image_type_detection: []
targets:
  salto_parametro_de_orden:
    enabled: true
    magnitude_type: scalar
    semantic_role:
      es: diagnostic
      en: order-parameter jump
    summary_rules:
    - id: salto_parametro_de_orden_summary_base
      when: 'true'
      status: ok
      text:
        es: El resultado [[salto_parametro_de_orden]] indica la magnitud física principal que se está interpretando.
        en: The result [[salto_parametro_de_orden]] indicates the main physical quantity being interpreted.
    physical_reading_rules:
    - id: salto_parametro_de_orden_physical_reading_base
      when: 'true'
      status: info
      text:
        es: Lee [[salto_parametro_de_orden]] junto con su unidad, su signo y el contexto físico del leaf.
        en: Read [[salto_parametro_de_orden]] together with its unit, sign, and the physical context of the leaf.
    coherence_rules:
    - id: salto_parametro_de_orden_coherence_base
      when: 'true'
      status: ok
      text:
        es: Comprueba que [[salto_parametro_de_orden]] sea coherente con las magnitudes de entrada y con la dimensión esperada.
        en: Check that [[salto_parametro_de_orden]] is consistent with the input quantities and the expected dimension.
    model_validity_rules:
    - id: salto_parametro_de_orden_model_validity_base
      when: 'true'
      status: info
      text:
        es: Interpreta [[salto_parametro_de_orden]] solo dentro de las hipótesis físicas del modelo usado en este leaf.
        en: Interpret [[salto_parametro_de_orden]] only within the physical assumptions of the model used in this leaf.
    graph_rules:
    - id: salto_parametro_de_orden_graph_base
      when: 'true'
      status: info
      text:
        es: Relaciona [[salto_parametro_de_orden]] con la lectura gráfica disponible en el leaf.
        en: Relate [[salto_parametro_de_orden]] to the graph reading available in the leaf.
    likely_errors:
    - id: salto_parametro_de_orden_likely_error_base
      when: 'true'
      status: warning
      text:
        es: No interpretes [[salto_parametro_de_orden]] como un número aislado. Su sentido depende del modelo, la unidad y
          el signo.
        en: Do not interpret [[salto_parametro_de_orden]] as an isolated number. Its meaning depends on the model, unit, and
          sign.
    next_step_rules:
    - id: salto_parametro_de_orden_next_step_base
      when: 'true'
      status: info
      text:
        es: Después de obtener [[salto_parametro_de_orden]], revisa la coherencia física y vuelve a la calculadora si necesitas
          otro despeje.
        en: After obtaining [[salto_parametro_de_orden]], check the physical consistency and return to the calculator if another
          rearrangement is needed.
    physical_intuition:
    - id: salto_parametro_de_orden_physical_intuition_base
      when: 'true'
      status: info
      text:
        es: Intuitivamente, [[salto_parametro_de_orden]] resume cómo responde el sistema cuando cambian las magnitudes relevantes.
        en: Intuitively, [[salto_parametro_de_orden]] summarizes how the system responds when the relevant quantities change.
    limiting_cases:
    - id: salto_parametro_de_orden_limiting_case_base
      when: 'true'
      status: info
      text:
        es: Analiza los casos límite de [[salto_parametro_de_orden]] comprobando qué ocurre si una magnitud dominante crece,
          disminuye o se anula.
        en: Analyze the limiting cases of [[salto_parametro_de_orden]] by checking what happens if a dominant quantity grows,
          decreases, or becomes zero.
    sign_convention_reminder:
      enabled: false
      text:
        es: ''
        en: ''
      common_sign_errors: []
  parametro_de_orden:
    enabled: true
    magnitude_type: scalar
    semantic_role:
      es: dependent_variable
      en: order parameter
    summary_rules:
    - id: parametro_de_orden_summary_base
      when: 'true'
      status: ok
      text:
        es: El resultado [[parametro_de_orden]] indica la magnitud física principal que se está interpretando.
        en: The result [[parametro_de_orden]] indicates the main physical quantity being interpreted.
    physical_reading_rules:
    - id: parametro_de_orden_physical_reading_base
      when: 'true'
      status: info
      text:
        es: Lee [[parametro_de_orden]] junto con su unidad, su signo y el contexto físico del leaf.
        en: Read [[parametro_de_orden]] together with its unit, sign, and the physical context of the leaf.
    coherence_rules:
    - id: parametro_de_orden_coherence_base
      when: 'true'
      status: ok
      text:
        es: Comprueba que [[parametro_de_orden]] sea coherente con las magnitudes de entrada y con la dimensión esperada.
        en: Check that [[parametro_de_orden]] is consistent with the input quantities and the expected dimension.
    model_validity_rules:
    - id: parametro_de_orden_model_validity_base
      when: 'true'
      status: info
      text:
        es: Interpreta [[parametro_de_orden]] solo dentro de las hipótesis físicas del modelo usado en este leaf.
        en: Interpret [[parametro_de_orden]] only within the physical assumptions of the model used in this leaf.
    graph_rules:
    - id: parametro_de_orden_graph_base
      when: 'true'
      status: info
      text:
        es: Relaciona [[parametro_de_orden]] con la lectura gráfica disponible en el leaf.
        en: Relate [[parametro_de_orden]] to the graph reading available in the leaf.
    likely_errors:
    - id: parametro_de_orden_likely_error_base
      when: 'true'
      status: warning
      text:
        es: No interpretes [[parametro_de_orden]] como un número aislado. Su sentido depende del modelo, la unidad y el signo.
        en: Do not interpret [[parametro_de_orden]] as an isolated number. Its meaning depends on the model, unit, and sign.
    next_step_rules:
    - id: parametro_de_orden_next_step_base
      when: 'true'
      status: info
      text:
        es: Después de obtener [[parametro_de_orden]], revisa la coherencia física y vuelve a la calculadora si necesitas
          otro despeje.
        en: After obtaining [[parametro_de_orden]], check the physical consistency and return to the calculator if another
          rearrangement is needed.
    physical_intuition:
    - id: parametro_de_orden_physical_intuition_base
      when: 'true'
      status: info
      text:
        es: Intuitivamente, [[parametro_de_orden]] resume cómo responde el sistema cuando cambian las magnitudes relevantes.
        en: Intuitively, [[parametro_de_orden]] summarizes how the system responds when the relevant quantities change.
    limiting_cases:
    - id: parametro_de_orden_limiting_case_base
      when: 'true'
      status: info
      text:
        es: Analiza los casos límite de [[parametro_de_orden]] comprobando qué ocurre si una magnitud dominante crece, disminuye
          o se anula.
        en: Analyze the limiting cases of [[parametro_de_orden]] by checking what happens if a dominant quantity grows, decreases,
          or becomes zero.
    sign_convention_reminder:
      enabled: false
      text:
        es: ''
        en: ''
      common_sign_errors: []
  temperatura_reducida:
    enabled: true
    magnitude_type: scalar
    semantic_role:
      es: control_variable
      en: reduced temperature
    summary_rules:
    - id: temperatura_reducida_summary_base
      when: 'true'
      status: ok
      text:
        es: El resultado [[temperatura_reducida]] indica la magnitud física principal que se está interpretando.
        en: The result [[temperatura_reducida]] indicates the main physical quantity being interpreted.
    physical_reading_rules:
    - id: temperatura_reducida_physical_reading_base
      when: 'true'
      status: info
      text:
        es: Lee [[temperatura_reducida]] junto con su unidad, su signo y el contexto físico del leaf.
        en: Read [[temperatura_reducida]] together with its unit, sign, and the physical context of the leaf.
    coherence_rules:
    - id: temperatura_reducida_coherence_base
      when: 'true'
      status: ok
      text:
        es: Comprueba que [[temperatura_reducida]] sea coherente con las magnitudes de entrada y con la dimensión esperada.
        en: Check that [[temperatura_reducida]] is consistent with the input quantities and the expected dimension.
    model_validity_rules:
    - id: temperatura_reducida_model_validity_base
      when: 'true'
      status: info
      text:
        es: Interpreta [[temperatura_reducida]] solo dentro de las hipótesis físicas del modelo usado en este leaf.
        en: Interpret [[temperatura_reducida]] only within the physical assumptions of the model used in this leaf.
    graph_rules:
    - id: temperatura_reducida_graph_base
      when: 'true'
      status: info
      text:
        es: Relaciona [[temperatura_reducida]] con la lectura gráfica disponible en el leaf.
        en: Relate [[temperatura_reducida]] to the graph reading available in the leaf.
    likely_errors:
    - id: temperatura_reducida_likely_error_base
      when: 'true'
      status: warning
      text:
        es: No interpretes [[temperatura_reducida]] como un número aislado. Su sentido depende del modelo, la unidad y el
          signo.
        en: Do not interpret [[temperatura_reducida]] as an isolated number. Its meaning depends on the model, unit, and sign.
    next_step_rules:
    - id: temperatura_reducida_next_step_base
      when: 'true'
      status: info
      text:
        es: Después de obtener [[temperatura_reducida]], revisa la coherencia física y vuelve a la calculadora si necesitas
          otro despeje.
        en: After obtaining [[temperatura_reducida]], check the physical consistency and return to the calculator if another
          rearrangement is needed.
    physical_intuition:
    - id: temperatura_reducida_physical_intuition_base
      when: 'true'
      status: info
      text:
        es: Intuitivamente, [[temperatura_reducida]] resume cómo responde el sistema cuando cambian las magnitudes relevantes.
        en: Intuitively, [[temperatura_reducida]] summarizes how the system responds when the relevant quantities change.
    limiting_cases:
    - id: temperatura_reducida_limiting_case_base
      when: 'true'
      status: info
      text:
        es: Analiza los casos límite de [[temperatura_reducida]] comprobando qué ocurre si una magnitud dominante crece, disminuye
          o se anula.
        en: Analyze the limiting cases of [[temperatura_reducida]] by checking what happens if a dominant quantity grows,
          decreases, or becomes zero.
    sign_convention_reminder:
      enabled: false
      text:
        es: ''
        en: ''
      common_sign_errors: []
  susceptibilidad:
    enabled: true
    magnitude_type: scalar
    semantic_role:
      es: dependent_variable
      en: susceptibility
    summary_rules:
    - id: susceptibilidad_summary_base
      when: 'true'
      status: ok
      text:
        es: El resultado [[susceptibilidad]] indica la magnitud física principal que se está interpretando.
        en: The result [[susceptibilidad]] indicates the main physical quantity being interpreted.
    physical_reading_rules:
    - id: susceptibilidad_physical_reading_base
      when: 'true'
      status: info
      text:
        es: Lee [[susceptibilidad]] junto con su unidad, su signo y el contexto físico del leaf.
        en: Read [[susceptibilidad]] together with its unit, sign, and the physical context of the leaf.
    coherence_rules:
    - id: susceptibilidad_coherence_base
      when: 'true'
      status: ok
      text:
        es: Comprueba que [[susceptibilidad]] sea coherente con las magnitudes de entrada y con la dimensión esperada.
        en: Check that [[susceptibilidad]] is consistent with the input quantities and the expected dimension.
    model_validity_rules:
    - id: susceptibilidad_model_validity_base
      when: 'true'
      status: info
      text:
        es: Interpreta [[susceptibilidad]] solo dentro de las hipótesis físicas del modelo usado en este leaf.
        en: Interpret [[susceptibilidad]] only within the physical assumptions of the model used in this leaf.
    graph_rules:
    - id: susceptibilidad_graph_base
      when: 'true'
      status: info
      text:
        es: Relaciona [[susceptibilidad]] con la lectura gráfica disponible en el leaf.
        en: Relate [[susceptibilidad]] to the graph reading available in the leaf.
    likely_errors:
    - id: susceptibilidad_likely_error_base
      when: 'true'
      status: warning
      text:
        es: No interpretes [[susceptibilidad]] como un número aislado. Su sentido depende del modelo, la unidad y el signo.
        en: Do not interpret [[susceptibilidad]] as an isolated number. Its meaning depends on the model, unit, and sign.
    next_step_rules:
    - id: susceptibilidad_next_step_base
      when: 'true'
      status: info
      text:
        es: Después de obtener [[susceptibilidad]], revisa la coherencia física y vuelve a la calculadora si necesitas otro
          despeje.
        en: After obtaining [[susceptibilidad]], check the physical consistency and return to the calculator if another rearrangement
          is needed.
    physical_intuition:
    - id: susceptibilidad_physical_intuition_base
      when: 'true'
      status: info
      text:
        es: Intuitivamente, [[susceptibilidad]] resume cómo responde el sistema cuando cambian las magnitudes relevantes.
        en: Intuitively, [[susceptibilidad]] summarizes how the system responds when the relevant quantities change.
    limiting_cases:
    - id: susceptibilidad_limiting_case_base
      when: 'true'
      status: info
      text:
        es: Analiza los casos límite de [[susceptibilidad]] comprobando qué ocurre si una magnitud dominante crece, disminuye
          o se anula.
        en: Analyze the limiting cases of [[susceptibilidad]] by checking what happens if a dominant quantity grows, decreases,
          or becomes zero.
    sign_convention_reminder:
      enabled: false
      text:
        es: ''
        en: ''
      common_sign_errors: []
INTERPRETACION_ACTUAL_FIN

Required contract:
- version must remain "5.0.0".
- id, leaf_id, nombre, scope, dependencies, and target keys must remain synchronized.
- dependencies.formulas and dependencies.magnitudes must be YAML lists of real ids.
- output_contract.sections must be exactly: ['summary', 'physical_reading', 'coherence', 'model_validity', 'graph_reading', 'likely_errors', 'next_step']
- result_blocks must include summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step.
- Every target must contain rules for summary, physical_reading, coherence, model_validity, likely_errors, and next_step.
- Every rule must include id, when, status, text.es, text.en.
- graph_reading_policy.enabled must match whether graph reading is useful for this leaf.
- free_body_diagram_hint.enabled is true only for Dcl-oriented leaves.
- No placeholders like <target_id>, TODO, PENDING, completar.

Physics quality:
- Write interpretation rules that diagnose meaning, signs, units, assumptions, limits, and common misconceptions.
- Keep rules concise but specific enough for an assistant to explain student calculator results.
