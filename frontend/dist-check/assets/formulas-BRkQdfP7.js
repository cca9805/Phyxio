const e=`formulas:
  - id: fuerza_conductor_recto
    title:
      es: fuerza magnetica sobre conductor recto
      en: magnetic force on a straight conductor
    equation: "F_B = I * L * B * s_theta"
    latex: 'F_B = I\\,L\\,B\\,\\sin\\theta \\quad % F_B I L B s_theta'
    rearrangements:
      - target: F_B
        equation: "F_B = I * L * B * s_theta"
        latex: 'F_B = I\\,L\\,B\\,\\sin\\theta \\quad % F_B I L B s_theta'
    category: fundamental
    relation_type: geometric_interpretation
    physical_meaning:
      es: "La fuerza total crece con corriente, longitud dentro del campo, intensidad del campo y componente perpendicular."
      en: "Total force increases with current, length inside the field, field strength, and perpendicular component."
    constraints:
      - "El tramo conductor se aproxima como recto."
      - "El campo magnetico es uniforme sobre la longitud efectiva."
      - "I representa corriente convencional."
      - "s_theta queda entre cero y uno."
    validity:
      es: "Valida para tramos conductores rectos en campos aproximadamente uniformes y sin deformacion mecanica dominante."
      en: "Valid for straight conductor segments in approximately uniform fields without dominant mechanical deformation."
    dimension_check: "A*m*T produce N porque T equivale a N/(A*m)."
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - teoria.md
      - ejemplos.md
      - aplicaciones.md
    interpretation_tags:
      - fuerza_magnetica
      - conductor
      - perpendicularidad
    result_semantics:
      target: F_B
      kind: force_magnitude
      sign_meaning:
        es: "El modulo no conserva signo; el sentido se determina con corriente y campo."
        en: "The magnitude does not retain sign; direction is determined from current and field."
      absolute_value_meaning:
        es: "El valor absoluto mide el empuje mecanico total sobre el tramo conductor."
        en: "The absolute value measures the total mechanical push on the conductor segment."
    domain_checks:
      - id: angular_interval
        condition: "s_theta >= 0 && s_theta <= 1"
        message:
          es: "El factor angular debe estar entre cero y uno."
          en: "The angular factor must lie between zero and one."
      - id: nonnegative_geometry
        condition: "L >= 0 && B >= 0"
        message:
          es: "Longitud efectiva y campo deben ser no negativos."
          en: "Effective length and field must be nonnegative."
    coherence_checks:
      - id: zero_force_cases
        condition: "I == 0 || L == 0 || B == 0 || s_theta == 0"
        message:
          es: "Una entrada nula anula la fuerza magnetica total."
          en: "A zero input cancels the total magnetic force."
    graph_implications:
      - id: linear_with_current
        relation: "F_B crece linealmente con I si L, B y s_theta permanecen fijos."
    pedagogical_triggers:
      - id: direction_confusion
        detect_when: "student_draws_force_parallel_to_current"
        feedback:
          es: "La fuerza no apunta a lo largo de la corriente; se decide con el producto vectorial entre conductor y campo."
          en: "The force does not point along the current; it is decided by the vector product between conductor and field."

  - id: fuerza_por_unidad_longitud
    title:
      es: fuerza magnetica por unidad de longitud
      en: magnetic force per unit length
    equation: "f_L = I * B * s_theta"
    latex: 'f_L = I\\,B\\,\\sin\\theta \\quad % f_L I B s_theta'
    rearrangements:
      - target: f_L
        equation: "f_L = I * B * s_theta"
        latex: 'f_L = I\\,B\\,\\sin\\theta \\quad % f_L I B s_theta'
    category: derived
    relation_type: definition
    physical_meaning:
      es: "La fuerza por longitud mide la carga mecanica distribuida sobre cada metro de conductor."
      en: "Force per length measures the mechanical load distributed over each metre of conductor."
    constraints:
      - "El campo y la corriente son aproximadamente uniformes a lo largo del tramo."
      - "La longitud se trata aparte para comparar conductores distintos."
      - "s_theta representa la orientacion local."
    validity:
      es: "Valida como densidad lineal de fuerza en tramos uniformes o para estimaciones locales."
      en: "Valid as a linear force density in uniform segments or for local estimates."
    dimension_check: "A*T produce N*m^-1."
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - teoria.md
      - ejemplos.md
      - aplicaciones.md
    interpretation_tags:
      - fuerza_lineal
      - comparacion
      - carga_mecanica
    result_semantics:
      target: f_L
      kind: linear_force_density
      sign_meaning:
        es: "El modulo por longitud no expresa sentido; la orientacion se lee con corriente y campo."
        en: "The per-length magnitude does not express direction; orientation is read from current and field."
      absolute_value_meaning:
        es: "El valor indica la fuerza magnetica repartida por metro efectivo."
        en: "The value indicates magnetic force distributed per effective metre."
    domain_checks:
      - id: angular_interval_fl
        condition: "s_theta >= 0 && s_theta <= 1"
        message:
          es: "El factor angular debe ser fisicamente admisible."
          en: "The angular factor must be physically admissible."
    coherence_checks:
      - id: zero_linear_force
        condition: "I == 0 || B == 0 || s_theta == 0"
        message:
          es: "Sin corriente, campo o componente perpendicular no hay fuerza por longitud."
          en: "Without current, field, or perpendicular component there is no force per length."
    graph_implications:
      - id: normalize_length
        relation: "f_L permite comparar conductores sin depender de L."
    pedagogical_triggers:
      - id: total_vs_density
        detect_when: "student_confuses_total_force_and_force_per_length"
        feedback:
          es: "Distingue fuerza total F_B de fuerza por unidad de longitud f_L."
          en: "Distinguish total force F_B from force per unit length f_L."
ui:
  default_formula: fuerza_conductor_recto
`;export{e as default};
