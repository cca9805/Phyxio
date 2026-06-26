const e=`version: 1
formulas:
- id: condicion_rodadura
  title:
    es: Condición de Rodadura Pura (v)
    en: Pure Rolling Condition (v)
  equation: v = omega*R
  latex: v = \\omega R
  rearrangements:
  - target: v
    equation: v = omega*R
    latex: v = \\omega R
  - target: omega
    equation: omega = v/R
    latex: \\omega = \\frac{v}{R}
  - target: R
    equation: R = v/omega
    latex: R = \\frac{v}{\\omega}
  category: fundamental
  relation_type: geometric_interpretation
  physical_meaning:
    es: Vincula la velocidad lineal del centro con la rotación para garantizar reposo
      instantáneo en el contacto.
    en: Links center linear velocity with rotation to guarantee instantaneous rest
      at contact.
  constraints:
  - expr: R > 0
    message:
      es: El radio R debe ser un valor positivo para una geometría física real.
      en: The radius R must be a positive value for a real physical geometry.
  validity:
    es: Válido para cuerpos rígidos con simetría de revolución en contacto puntual
      con una superficie fija.
    en: Valid for rigid bodies with symmetry of revolution in point contact with a
      fixed surface.
  dimension_check: '[L/T] = [1/T] * [L]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - teoria
  - ejemplos
  - aplicaciones
  interpretation_tags:
  - condicion_rodadura
  - rolling_kinematics
  result_semantics:
    target: v
    kind: scalar
    sign_meaning:
      es: El signo debe leerse con el convenio de ejes adoptado.
      en: Sign must be interpreted with the adopted axis convention.
    absolute_value_meaning:
      es: El modulo expresa la intensidad fisica de la magnitud objetivo.
      en: Magnitude expresses the physical intensity of the target quantity.
  domain_checks:
  - condition: input_values_within_valid_range
    message:
      es: Comprobar que los datos de entrada respetan el dominio fisico de la formula.
      en: Check that inputs satisfy the physical domain of the formula.
  coherence_checks:
  - check: result_consistent_with_units_and_signs
    warning:
      es: Revisar unidades y signos si el resultado contradice la lectura fisica esperada.
      en: Review units and signs if the result contradicts the expected physical reading.
  graph_implications:
  - if: graph_available
    then:
      es: Representar la tendencia del resultado en el grafico asociado para lectura
        cualitativa.
      en: Represent result trend in the associated graph for qualitative reading.
  pedagogical_triggers:
  - condition: common_sign_or_units_error
    hint:
      es: Verificar sistema SI, convenio de signos y orden de magnitud antes de interpretar.
      en: Check SI units, sign convention, and order of magnitude before interpreting.
- id: velocidad_contacto
  title:
    es: Velocidad del Punto de Contacto
    en: Contact Point Velocity
  equation: v_contacto = v - omega*R
  latex: v_c = v - \\omega R
  rearrangements:
  - target: v_contacto
    equation: v_contacto = v - omega*R
    latex: v_c = v - \\omega R
  category: derived
  relation_type: definition
  physical_meaning:
    es: Define la velocidad relativa del punto de la periferia respecto al suelo.
    en: Defines the relative velocity of the periphery point with respect to the ground.
  constraints: null
  validity:
    es: Siempre válido para describir la cinemática de un punto en la base de un cuerpo
      que traslada y rota.
    en: Always valid to describe the kinematics of a point at the base of a body that
      translates and rotates.
  dimension_check: '[L/T] = [L/T] - [1/T]*[L]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - teoria
  - errores
  interpretation_tags:
  - velocidad_contacto
  - rolling_kinematics
  result_semantics:
    target: v_contacto
    kind: scalar
    sign_meaning:
      es: El signo debe leerse con el convenio de ejes adoptado.
      en: Sign must be interpreted with the adopted axis convention.
    absolute_value_meaning:
      es: El modulo expresa la intensidad fisica de la magnitud objetivo.
      en: Magnitude expresses the physical intensity of the target quantity.
  domain_checks:
  - condition: input_values_within_valid_range
    message:
      es: Comprobar que los datos de entrada respetan el dominio fisico de la formula.
      en: Check that inputs satisfy the physical domain of the formula.
  coherence_checks:
  - check: result_consistent_with_units_and_signs
    warning:
      es: Revisar unidades y signos si el resultado contradice la lectura fisica esperada.
      en: Review units and signs if the result contradicts the expected physical reading.
  graph_implications:
  - if: graph_available
    then:
      es: Representar la tendencia del resultado en el grafico asociado para lectura
        cualitativa.
      en: Represent result trend in the associated graph for qualitative reading.
  pedagogical_triggers:
  - condition: common_sign_or_units_error
    hint:
      es: Verificar sistema SI, convenio de signos y orden de magnitud antes de interpretar.
      en: Check SI units, sign convention, and order of magnitude before interpreting.
- id: consistencia_rodadura
  title:
    es: Indicador de Deslizamiento (Delta)
    en: Slip Indicator (Delta)
  equation: delta = v - omega*R
  latex: \\delta = v - \\omega R
  rearrangements:
  - target: delta
    equation: delta = v - omega*R
    latex: \\delta = v - \\omega R
  category: conceptual
  relation_type: geometric_interpretation
  physical_meaning:
    es: Magnitud diagnóstica para verificar si se cumple la rodadura pura o hay deslizamiento.
    en: Diagnostic magnitude to verify if pure rolling holds or if there is slipping.
  constraints: null
  validity:
    es: Se utiliza para detectar derrapes (\\(v > \\omega R\\)) o patinamientos (\\(v
      < \\omega R\\)).
    en: Used to detect skidding (\\(v > \\omega R\\)) or spinning out (\\(v < \\omega R\\)).
  dimension_check: '[L/T] = [L/T] - [L/T]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - teoria
  - ejemplos
  - aplicaciones
  interpretation_tags:
  - consistencia_rodadura
  - rolling_kinematics
  result_semantics:
    target: delta
    kind: scalar
    sign_meaning:
      es: El signo debe leerse con el convenio de ejes adoptado.
      en: Sign must be interpreted with the adopted axis convention.
    absolute_value_meaning:
      es: El modulo expresa la intensidad fisica de la magnitud objetivo.
      en: Magnitude expresses the physical intensity of the target quantity.
  domain_checks:
  - condition: input_values_within_valid_range
    message:
      es: Comprobar que los datos de entrada respetan el dominio fisico de la formula.
      en: Check that inputs satisfy the physical domain of the formula.
  coherence_checks:
  - check: result_consistent_with_units_and_signs
    warning:
      es: Revisar unidades y signos si el resultado contradice la lectura fisica esperada.
      en: Review units and signs if the result contradicts the expected physical reading.
  graph_implications:
  - if: graph_available
    then:
      es: Representar la tendencia del resultado en el grafico asociado para lectura
        cualitativa.
      en: Represent result trend in the associated graph for qualitative reading.
  pedagogical_triggers:
  - condition: common_sign_or_units_error
    hint:
      es: Verificar sistema SI, convenio de signos y orden de magnitud antes de interpretar.
      en: Check SI units, sign convention, and order of magnitude before interpreting.
- id: relacion_aceleracion
  title:
    es: Relación de Aceleraciones (a)
    en: Acceleration Relation (a)
  equation: a = alpha*R
  latex: a = \\alpha R
  rearrangements:
  - target: a
    equation: a = alpha*R
    latex: a = \\alpha R
  - target: alpha
    equation: alpha = a/R
    latex: \\alpha = \\frac{a}{R}
  category: structural
  relation_type: differential_relation
  physical_meaning:
    es: Restricción cinemática para las tasas de cambio de velocidad en régimen de
      rodadura pura.
    en: Kinematic constraint for velocity rates of change in pure rolling regime.
  constraints:
  - expr: R > 0
    message:
      es: El radio R debe ser positivo.
      en: The radius R must be positive.
  validity:
    es: Válido si el radio R es constante y la superficie es indeformable.
    en: Valid if radius R is constant and the surface is undeformable.
  dimension_check: '[L/T^2] = [1/T^2] * [L]'
  calculable: true
  motivo_no_calculable: null
  used_in:
  - teoria
  - ejemplos
  interpretation_tags:
  - relacion_aceleracion
  - rolling_kinematics
  result_semantics:
    target: a
    kind: scalar
    sign_meaning:
      es: El signo debe leerse con el convenio de ejes adoptado.
      en: Sign must be interpreted with the adopted axis convention.
    absolute_value_meaning:
      es: El modulo expresa la intensidad fisica de la magnitud objetivo.
      en: Magnitude expresses the physical intensity of the target quantity.
  domain_checks:
  - condition: input_values_within_valid_range
    message:
      es: Comprobar que los datos de entrada respetan el dominio fisico de la formula.
      en: Check that inputs satisfy the physical domain of the formula.
  coherence_checks:
  - check: result_consistent_with_units_and_signs
    warning:
      es: Revisar unidades y signos si el resultado contradice la lectura fisica esperada.
      en: Review units and signs if the result contradicts the expected physical reading.
  graph_implications:
  - if: graph_available
    then:
      es: Representar la tendencia del resultado en el grafico asociado para lectura
        cualitativa.
      en: Represent result trend in the associated graph for qualitative reading.
  pedagogical_triggers:
  - condition: common_sign_or_units_error
    hint:
      es: Verificar sistema SI, convenio de signos y orden de magnitud antes de interpretar.
      en: Check SI units, sign convention, and order of magnitude before interpreting.
ui:
  default_formula: condicion_rodadura
  groups:
  - title:
      es: Relaciones Cinemáticas (Rodadura Pura)
      en: Kinematic Relations (Pure Rolling)
    items:
    - condicion_rodadura
    - relacion_aceleracion
  - title:
      es: Diagnóstico de Deslizamiento
      en: Slip Diagnosis
    items:
    - velocidad_contacto
    - consistencia_rodadura
`;export{e as default};
