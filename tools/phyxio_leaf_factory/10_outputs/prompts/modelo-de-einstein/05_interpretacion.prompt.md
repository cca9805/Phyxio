# PROMPT YAML 05 | interpretacion.yaml

Create a downloadable YAML file named `modelo-de-einstein_interpretacion.yaml`.
The file content must be the completed `interpretacion.yaml`.
Do not print the YAML content in the chat.
Do not wrap the YAML in Markdown fences.
Complete and improve `interpretacion.yaml` without changing synced identity/dependency fields.
The downloaded file must contain raw valid YAML only.

Current synchronized interpretacion.yaml:
INTERPRETACION_ACTUAL_INICIO
version: 5.0.0
id: modelo-de-einstein
leaf_id: modelo-de-einstein
nombre:
  es: Modelo de einstein
  en: Einstein Model
scope:
  area: fisica-clasica
  bloque: termodinamica-estadistica
  subbloque: sistemas-modelo
  parent_id: solidos-y-calor-especifico
  ruta_relativa: fisica-clasica/termodinamica-estadistica/sistemas-modelo/solidos-y-calor-especifico/modelo-de-einstein
  orden: 275310
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
  formulas: parametro_reducido_einstein, temperatura_einstein_frecuencia, calor_especifico_molar_einstein, energia_interna_einstein,
    capacidad_calorifica_total_einstein
  magnitudes: temperatura, temperatura_einstein, parametro_reducido, calor_especifico_molar_volumen_constante, capacidad_calorifica_volumen_constante,
    energia_interna, numero_atomos, constante_boltzmann, constante_gases, frecuencia_angular_einstein, constante_planck_reducida
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
  primary_variable: parametro_reducido
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
  parametro_reducido:
    enabled: true
    magnitude_type: scalar
    semantic_role:
      es: auxiliary_variable
      en: reduced parameter
    summary_rules:
    - id: parametro_reducido_summary_base
      when: 'true'
      status: ok
      text:
        es: El resultado [[parametro_reducido]] indica la magnitud física principal que se está interpretando.
        en: The result [[parametro_reducido]] indicates the main physical quantity being interpreted.
    physical_reading_rules:
    - id: parametro_reducido_physical_reading_base
      when: 'true'
      status: info
      text:
        es: Lee [[parametro_reducido]] junto con su unidad, su signo y el contexto físico del leaf.
        en: Read [[parametro_reducido]] together with its unit, sign, and the physical context of the leaf.
    coherence_rules:
    - id: parametro_reducido_coherence_base
      when: 'true'
      status: ok
      text:
        es: Comprueba que [[parametro_reducido]] sea coherente con las magnitudes de entrada y con la dimensión esperada.
        en: Check that [[parametro_reducido]] is consistent with the input quantities and the expected dimension.
    model_validity_rules:
    - id: parametro_reducido_model_validity_base
      when: 'true'
      status: info
      text:
        es: Interpreta [[parametro_reducido]] solo dentro de las hipótesis físicas del modelo usado en este leaf.
        en: Interpret [[parametro_reducido]] only within the physical assumptions of the model used in this leaf.
    graph_rules:
    - id: parametro_reducido_graph_base
      when: 'true'
      status: info
      text:
        es: Relaciona [[parametro_reducido]] con la lectura gráfica disponible en el leaf.
        en: Relate [[parametro_reducido]] to the graph reading available in the leaf.
    likely_errors:
    - id: parametro_reducido_likely_error_base
      when: 'true'
      status: warning
      text:
        es: No interpretes [[parametro_reducido]] como un número aislado. Su sentido depende del modelo, la unidad y el signo.
        en: Do not interpret [[parametro_reducido]] as an isolated number. Its meaning depends on the model, unit, and sign.
    next_step_rules:
    - id: parametro_reducido_next_step_base
      when: 'true'
      status: info
      text:
        es: Después de obtener [[parametro_reducido]], revisa la coherencia física y vuelve a la calculadora si necesitas
          otro despeje.
        en: After obtaining [[parametro_reducido]], check the physical consistency and return to the calculator if another
          rearrangement is needed.
    physical_intuition:
    - id: parametro_reducido_physical_intuition_base
      when: 'true'
      status: info
      text:
        es: Intuitivamente, [[parametro_reducido]] resume cómo responde el sistema cuando cambian las magnitudes relevantes.
        en: Intuitively, [[parametro_reducido]] summarizes how the system responds when the relevant quantities change.
    limiting_cases:
    - id: parametro_reducido_limiting_case_base
      when: 'true'
      status: info
      text:
        es: Analiza los casos límite de [[parametro_reducido]] comprobando qué ocurre si una magnitud dominante crece, disminuye
          o se anula.
        en: Analyze the limiting cases of [[parametro_reducido]] by checking what happens if a dominant quantity grows, decreases,
          or becomes zero.
    sign_convention_reminder:
      enabled: false
      text:
        es: ''
        en: ''
      common_sign_errors: []
  theta_E:
    enabled: true
    magnitude_type: scalar
    semantic_role:
      es: Resultado físico asociado a theta_E
      en: Physical result associated with theta_E
    summary_rules:
    - id: theta_E_summary_base
      when: 'true'
      status: ok
      text:
        es: El resultado [[theta_E]] indica la magnitud física principal que se está interpretando.
        en: The result [[theta_E]] indicates the main physical quantity being interpreted.
    physical_reading_rules:
    - id: theta_E_physical_reading_base
      when: 'true'
      status: info
      text:
        es: Lee [[theta_E]] junto con su unidad, su signo y el contexto físico del leaf.
        en: Read [[theta_E]] together with its unit, sign, and the physical context of the leaf.
    coherence_rules:
    - id: theta_E_coherence_base
      when: 'true'
      status: ok
      text:
        es: Comprueba que [[theta_E]] sea coherente con las magnitudes de entrada y con la dimensión esperada.
        en: Check that [[theta_E]] is consistent with the input quantities and the expected dimension.
    model_validity_rules:
    - id: theta_E_model_validity_base
      when: 'true'
      status: info
      text:
        es: Interpreta [[theta_E]] solo dentro de las hipótesis físicas del modelo usado en este leaf.
        en: Interpret [[theta_E]] only within the physical assumptions of the model used in this leaf.
    graph_rules:
    - id: theta_E_graph_base
      when: 'true'
      status: info
      text:
        es: Relaciona [[theta_E]] con la lectura gráfica disponible en el leaf.
        en: Relate [[theta_E]] to the graph reading available in the leaf.
    likely_errors:
    - id: theta_E_likely_error_base
      when: 'true'
      status: warning
      text:
        es: No interpretes [[theta_E]] como un número aislado. Su sentido depende del modelo, la unidad y el signo.
        en: Do not interpret [[theta_E]] as an isolated number. Its meaning depends on the model, unit, and sign.
    next_step_rules:
    - id: theta_E_next_step_base
      when: 'true'
      status: info
      text:
        es: Después de obtener [[theta_E]], revisa la coherencia física y vuelve a la calculadora si necesitas otro despeje.
        en: After obtaining [[theta_E]], check the physical consistency and return to the calculator if another rearrangement
          is needed.
    physical_intuition:
    - id: theta_E_physical_intuition_base
      when: 'true'
      status: info
      text:
        es: Intuitivamente, [[theta_E]] resume cómo responde el sistema cuando cambian las magnitudes relevantes.
        en: Intuitively, [[theta_E]] summarizes how the system responds when the relevant quantities change.
    limiting_cases:
    - id: theta_E_limiting_case_base
      when: 'true'
      status: info
      text:
        es: Analiza los casos límite de [[theta_E]] comprobando qué ocurre si una magnitud dominante crece, disminuye o se
          anula.
        en: Analyze the limiting cases of [[theta_E]] by checking what happens if a dominant quantity grows, decreases, or
          becomes zero.
    sign_convention_reminder:
      enabled: false
      text:
        es: ''
        en: ''
      common_sign_errors: []
  T:
    enabled: true
    magnitude_type: scalar
    semantic_role:
      es: Resultado físico asociado a T
      en: Physical result associated with T
    summary_rules:
    - id: T_summary_base
      when: 'true'
      status: ok
      text:
        es: El resultado [[T]] indica la magnitud física principal que se está interpretando.
        en: The result [[T]] indicates the main physical quantity being interpreted.
    physical_reading_rules:
    - id: T_physical_reading_base
      when: 'true'
      status: info
      text:
        es: Lee [[T]] junto con su unidad, su signo y el contexto físico del leaf.
        en: Read [[T]] together with its unit, sign, and the physical context of the leaf.
    coherence_rules:
    - id: T_coherence_base
      when: 'true'
      status: ok
      text:
        es: Comprueba que [[T]] sea coherente con las magnitudes de entrada y con la dimensión esperada.
        en: Check that [[T]] is consistent with the input quantities and the expected dimension.
    model_validity_rules:
    - id: T_model_validity_base
      when: 'true'
      status: info
      text:
        es: Interpreta [[T]] solo dentro de las hipótesis físicas del modelo usado en este leaf.
        en: Interpret [[T]] only within the physical assumptions of the model used in this leaf.
    graph_rules:
    - id: T_graph_base
      when: 'true'
      status: info
      text:
        es: Relaciona [[T]] con la lectura gráfica disponible en el leaf.
        en: Relate [[T]] to the graph reading available in the leaf.
    likely_errors:
    - id: T_likely_error_base
      when: 'true'
      status: warning
      text:
        es: No interpretes [[T]] como un número aislado. Su sentido depende del modelo, la unidad y el signo.
        en: Do not interpret [[T]] as an isolated number. Its meaning depends on the model, unit, and sign.
    next_step_rules:
    - id: T_next_step_base
      when: 'true'
      status: info
      text:
        es: Después de obtener [[T]], revisa la coherencia física y vuelve a la calculadora si necesitas otro despeje.
        en: After obtaining [[T]], check the physical consistency and return to the calculator if another rearrangement is
          needed.
    physical_intuition:
    - id: T_physical_intuition_base
      when: 'true'
      status: info
      text:
        es: Intuitivamente, [[T]] resume cómo responde el sistema cuando cambian las magnitudes relevantes.
        en: Intuitively, [[T]] summarizes how the system responds when the relevant quantities change.
    limiting_cases:
    - id: T_limiting_case_base
      when: 'true'
      status: info
      text:
        es: Analiza los casos límite de [[T]] comprobando qué ocurre si una magnitud dominante crece, disminuye o se anula.
        en: Analyze the limiting cases of [[T]] by checking what happens if a dominant quantity grows, decreases, or becomes
          zero.
    sign_convention_reminder:
      enabled: false
      text:
        es: ''
        en: ''
      common_sign_errors: []
  temperatura_einstein:
    enabled: true
    magnitude_type: scalar
    semantic_role:
      es: parameter
      en: Einstein temperature
    summary_rules:
    - id: temperatura_einstein_summary_base
      when: 'true'
      status: ok
      text:
        es: El resultado [[temperatura_einstein]] indica la magnitud física principal que se está interpretando.
        en: The result [[temperatura_einstein]] indicates the main physical quantity being interpreted.
    physical_reading_rules:
    - id: temperatura_einstein_physical_reading_base
      when: 'true'
      status: info
      text:
        es: Lee [[temperatura_einstein]] junto con su unidad, su signo y el contexto físico del leaf.
        en: Read [[temperatura_einstein]] together with its unit, sign, and the physical context of the leaf.
    coherence_rules:
    - id: temperatura_einstein_coherence_base
      when: 'true'
      status: ok
      text:
        es: Comprueba que [[temperatura_einstein]] sea coherente con las magnitudes de entrada y con la dimensión esperada.
        en: Check that [[temperatura_einstein]] is consistent with the input quantities and the expected dimension.
    model_validity_rules:
    - id: temperatura_einstein_model_validity_base
      when: 'true'
      status: info
      text:
        es: Interpreta [[temperatura_einstein]] solo dentro de las hipótesis físicas del modelo usado en este leaf.
        en: Interpret [[temperatura_einstein]] only within the physical assumptions of the model used in this leaf.
    graph_rules:
    - id: temperatura_einstein_graph_base
      when: 'true'
      status: info
      text:
        es: Relaciona [[temperatura_einstein]] con la lectura gráfica disponible en el leaf.
        en: Relate [[temperatura_einstein]] to the graph reading available in the leaf.
    likely_errors:
    - id: temperatura_einstein_likely_error_base
      when: 'true'
      status: warning
      text:
        es: No interpretes [[temperatura_einstein]] como un número aislado. Su sentido depende del modelo, la unidad y el
          signo.
        en: Do not interpret [[temperatura_einstein]] as an isolated number. Its meaning depends on the model, unit, and sign.
    next_step_rules:
    - id: temperatura_einstein_next_step_base
      when: 'true'
      status: info
      text:
        es: Después de obtener [[temperatura_einstein]], revisa la coherencia física y vuelve a la calculadora si necesitas
          otro despeje.
        en: After obtaining [[temperatura_einstein]], check the physical consistency and return to the calculator if another
          rearrangement is needed.
    physical_intuition:
    - id: temperatura_einstein_physical_intuition_base
      when: 'true'
      status: info
      text:
        es: Intuitivamente, [[temperatura_einstein]] resume cómo responde el sistema cuando cambian las magnitudes relevantes.
        en: Intuitively, [[temperatura_einstein]] summarizes how the system responds when the relevant quantities change.
    limiting_cases:
    - id: temperatura_einstein_limiting_case_base
      when: 'true'
      status: info
      text:
        es: Analiza los casos límite de [[temperatura_einstein]] comprobando qué ocurre si una magnitud dominante crece, disminuye
          o se anula.
        en: Analyze the limiting cases of [[temperatura_einstein]] by checking what happens if a dominant quantity grows,
          decreases, or becomes zero.
    sign_convention_reminder:
      enabled: false
      text:
        es: ''
        en: ''
      common_sign_errors: []
  omega_E:
    enabled: true
    magnitude_type: scalar
    semantic_role:
      es: Resultado físico asociado a omega_E
      en: Physical result associated with omega_E
    summary_rules:
    - id: omega_E_summary_base
      when: 'true'
      status: ok
      text:
        es: El resultado [[omega_E]] indica la magnitud física principal que se está interpretando.
        en: The result [[omega_E]] indicates the main physical quantity being interpreted.
    physical_reading_rules:
    - id: omega_E_physical_reading_base
      when: 'true'
      status: info
      text:
        es: Lee [[omega_E]] junto con su unidad, su signo y el contexto físico del leaf.
        en: Read [[omega_E]] together with its unit, sign, and the physical context of the leaf.
    coherence_rules:
    - id: omega_E_coherence_base
      when: 'true'
      status: ok
      text:
        es: Comprueba que [[omega_E]] sea coherente con las magnitudes de entrada y con la dimensión esperada.
        en: Check that [[omega_E]] is consistent with the input quantities and the expected dimension.
    model_validity_rules:
    - id: omega_E_model_validity_base
      when: 'true'
      status: info
      text:
        es: Interpreta [[omega_E]] solo dentro de las hipótesis físicas del modelo usado en este leaf.
        en: Interpret [[omega_E]] only within the physical assumptions of the model used in this leaf.
    graph_rules:
    - id: omega_E_graph_base
      when: 'true'
      status: info
      text:
        es: Relaciona [[omega_E]] con la lectura gráfica disponible en el leaf.
        en: Relate [[omega_E]] to the graph reading available in the leaf.
    likely_errors:
    - id: omega_E_likely_error_base
      when: 'true'
      status: warning
      text:
        es: No interpretes [[omega_E]] como un número aislado. Su sentido depende del modelo, la unidad y el signo.
        en: Do not interpret [[omega_E]] as an isolated number. Its meaning depends on the model, unit, and sign.
    next_step_rules:
    - id: omega_E_next_step_base
      when: 'true'
      status: info
      text:
        es: Después de obtener [[omega_E]], revisa la coherencia física y vuelve a la calculadora si necesitas otro despeje.
        en: After obtaining [[omega_E]], check the physical consistency and return to the calculator if another rearrangement
          is needed.
    physical_intuition:
    - id: omega_E_physical_intuition_base
      when: 'true'
      status: info
      text:
        es: Intuitivamente, [[omega_E]] resume cómo responde el sistema cuando cambian las magnitudes relevantes.
        en: Intuitively, [[omega_E]] summarizes how the system responds when the relevant quantities change.
    limiting_cases:
    - id: omega_E_limiting_case_base
      when: 'true'
      status: info
      text:
        es: Analiza los casos límite de [[omega_E]] comprobando qué ocurre si una magnitud dominante crece, disminuye o se
          anula.
        en: Analyze the limiting cases of [[omega_E]] by checking what happens if a dominant quantity grows, decreases, or
          becomes zero.
    sign_convention_reminder:
      enabled: false
      text:
        es: ''
        en: ''
      common_sign_errors: []
  calor_especifico_molar_volumen_constante:
    enabled: true
    magnitude_type: scalar
    semantic_role:
      es: dependent_variable
      en: molar heat capacity at constant volume
    summary_rules:
    - id: calor_especifico_molar_volumen_constante_summary_base
      when: 'true'
      status: ok
      text:
        es: El resultado [[calor_especifico_molar_volumen_constante]] indica la magnitud física principal que se está interpretando.
        en: The result [[calor_especifico_molar_volumen_constante]] indicates the main physical quantity being interpreted.
    physical_reading_rules:
    - id: calor_especifico_molar_volumen_constante_physical_reading_base
      when: 'true'
      status: info
      text:
        es: Lee [[calor_especifico_molar_volumen_constante]] junto con su unidad, su signo y el contexto físico del leaf.
        en: Read [[calor_especifico_molar_volumen_constante]] together with its unit, sign, and the physical context of the
          leaf.
    coherence_rules:
    - id: calor_especifico_molar_volumen_constante_coherence_base
      when: 'true'
      status: ok
      text:
        es: Comprueba que [[calor_especifico_molar_volumen_constante]] sea coherente con las magnitudes de entrada y con la
          dimensión esperada.
        en: Check that [[calor_especifico_molar_volumen_constante]] is consistent with the input quantities and the expected
          dimension.
    model_validity_rules:
    - id: calor_especifico_molar_volumen_constante_model_validity_base
      when: 'true'
      status: info
      text:
        es: Interpreta [[calor_especifico_molar_volumen_constante]] solo dentro de las hipótesis físicas del modelo usado
          en este leaf.
        en: Interpret [[calor_especifico_molar_volumen_constante]] only within the physical assumptions of the model used
          in this leaf.
    graph_rules:
    - id: calor_especifico_molar_volumen_constante_graph_base
      when: 'true'
      status: info
      text:
        es: Relaciona [[calor_especifico_molar_volumen_constante]] con la lectura gráfica disponible en el leaf.
        en: Relate [[calor_especifico_molar_volumen_constante]] to the graph reading available in the leaf.
    likely_errors:
    - id: calor_especifico_molar_volumen_constante_likely_error_base
      when: 'true'
      status: warning
      text:
        es: No interpretes [[calor_especifico_molar_volumen_constante]] como un número aislado. Su sentido depende del modelo,
          la unidad y el signo.
        en: Do not interpret [[calor_especifico_molar_volumen_constante]] as an isolated number. Its meaning depends on the
          model, unit, and sign.
    next_step_rules:
    - id: calor_especifico_molar_volumen_constante_next_step_base
      when: 'true'
      status: info
      text:
        es: Después de obtener [[calor_especifico_molar_volumen_constante]], revisa la coherencia física y vuelve a la calculadora
          si necesitas otro despeje.
        en: After obtaining [[calor_especifico_molar_volumen_constante]], check the physical consistency and return to the
          calculator if another rearrangement is needed.
    physical_intuition:
    - id: calor_especifico_molar_volumen_constante_physical_intuition_base
      when: 'true'
      status: info
      text:
        es: Intuitivamente, [[calor_especifico_molar_volumen_constante]] resume cómo responde el sistema cuando cambian las
          magnitudes relevantes.
        en: Intuitively, [[calor_especifico_molar_volumen_constante]] summarizes how the system responds when the relevant
          quantities change.
    limiting_cases:
    - id: calor_especifico_molar_volumen_constante_limiting_case_base
      when: 'true'
      status: info
      text:
        es: Analiza los casos límite de [[calor_especifico_molar_volumen_constante]] comprobando qué ocurre si una magnitud
          dominante crece, disminuye o se anula.
        en: Analyze the limiting cases of [[calor_especifico_molar_volumen_constante]] by checking what happens if a dominant
          quantity grows, decreases, or becomes zer

[RECORTADO: usa el archivo real como autoridad si necesitas mas detalle]
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
