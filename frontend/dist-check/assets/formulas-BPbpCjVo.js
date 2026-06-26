const e=`version: 1.0.0\r
leaf_id: diagramas-pv\r
ui:\r
  default_formula: gas_ideal\r
formulas:\r
- id: gas_ideal\r
  title: { es: Ley del gas ideal, en: Ideal gas law }\r
  equation: "P * V = n * R * T"\r
  latex: "P V = n R T"\r
  rearrangements:\r
  - { target: P, equation: "P = n * R * T / V", latex: 'P = \\frac{n R T}{V}' }\r
  - { target: V, equation: "V = n * R * T / P", latex: 'V = \\frac{n R T}{P}' }\r
  - { target: T, equation: "T = P * V / (n * R)", latex: 'T = \\frac{P V}{n R}' }\r
  category: fundamental\r
  relation_type: constitutive_relation\r
  physical_meaning: { es: Esta ley relaciona la presion, el volumen y la temperatura de un gas ideal en equilibrio termodinamico., en: This law relates pressure, volume and temperature of an ideal gas in thermodynamic equilibrium. }\r
  constraints: [ gas ideal, volumen definido, temperatura definida ]\r
  validity: { es: Valida para gases diluidos y moderadamente calientes donde las interacciones moleculares son despreciables., en: Valid for dilute, moderately warm gases where molecular interactions are negligible. }\r
  dimension_check: { es: "P V y n R T comparten la dimension de energia.", en: "P V and n R T share the dimension of energy." }\r
  calculable: true\r
  motivo_no_calculable: ""\r
  used_in: [ teoria, modelos, ejemplos, interpretacion ]\r
  interpretation_tags: [ gas_ideal, p_v, estado ]\r
  result_semantics:\r
    target: P\r
    kind: intensive_state\r
    sign_meaning: { es: "No aplica signo: es una presion positiva esperada.", en: "Sign does not apply: it is an expected positive pressure." }\r
    absolute_value_meaning: { es: "La presion calculada define la altura de la curva en el diagrama p-V.", en: "The calculated pressure defines the curve height in the P-V diagram." }\r
  domain_checks:\r
  - { condition: "P > 0", message: { es: "Presion fisica positiva para un gas ideal.", en: "Physical positive pressure for an ideal gas." } }\r
  coherence_checks:\r
  - { check: "P > 0", es: "La presion debe ser positiva para conservar la interpretacion mecanica.", en: "Pressure must be positive to preserve mechanical interpretation." }\r
  graph_implications:\r
  - { channel: pressure_curve, mapping: "La curva isotermica crece hacia la izquierda a medida que aumenta P." }\r
  pedagogical_triggers:\r
  - { error: "Tratar la presion como negativa", detection: "P <= 0", message: { es: "La presion de un gas ideal no puede ser negativa en este contexto.", en: "The pressure of an ideal gas cannot be negative in this context." } }\r
\r
- id: trabajo_isobarico\r
  title: { es: Trabajo isobarico, en: Isobaric work }\r
  equation: "W = - P * DeltaV"\r
  latex: 'W = -P \\\\Delta V'\r
  rearrangements:\r
  - { target: W, equation: "W = - P * DeltaV", latex: 'W = -P \\\\Delta V' }\r
  - { target: DeltaV, equation: "DeltaV = - W / P", latex: '\\\\Delta V = -\\\\frac{W}{P}' }\r
  - { target: P, equation: "P = - W / DeltaV", latex: 'P = -\\\\frac{W}{\\\\Delta V}' }\r
  category: derived\r
  relation_type: integral_relation\r
  physical_meaning: { es: En un cambio de volumen a presion constante, el trabajo mecanico es el producto de la presion y el desplazamiento volumetrico., en: In a constant-pressure volume change, mechanical work is the product of pressure and volumetric displacement. }\r
  constraints: [ proceso isobarico, presion constante, volumen definido ]\r
  validity: { es: Aplica solo si la presion se mantiene esencialmente constante durante el cambio de volumen., en: Applies only when pressure remains essentially constant during the volume change. }\r
  dimension_check: { es: "P * DeltaV tiene la dimension de trabajo o energia.", en: "P * DeltaV has the dimension of work or energy." }\r
  calculable: true\r
  motivo_no_calculable: ""\r
  used_in: [ teoria, ejemplos, interpretacion ]\r
  interpretation_tags: [ trabajo, area_pv, isobarico ]\r
  result_semantics:\r
    target: W\r
    kind: energy_transfer\r
    sign_meaning: { es: "El signo indica si el trabajo es realizado por el gas o sobre el gas.", en: "The sign indicates whether work is done by the gas or on the gas." }\r
    absolute_value_meaning: { es: "El valor absoluto es la energia mecanica intercambiada por unidad de volumen.", en: "The absolute value is the mechanical energy exchanged per volume change." }\r
  domain_checks:\r
  - { condition: "P > 0", message: { es: "La expresion isobarica asume presion positiva definida.", en: "The isobaric expression assumes defined positive pressure." } }\r
  coherence_checks:\r
  - { check: "DeltaV == 0", es: "Si no hay cambio de volumen, el trabajo mecanico es nulo.", en: "If there is no volume change, the mechanical work is zero." }\r
  graph_implications:\r
  - { channel: area_under_curve, mapping: "El area bajo la curva p-V corresponde al trabajo del proceso." }\r
  pedagogical_triggers:\r
  - { error: "Usar formula de trabajo sin DeltaV", detection: "DeltaV == 0 and W != 0", message: { es: "Revisa que el trabajo isobarico dependa del cambio de volumen, no del volumen absoluto.", en: "Check that isobaric work depends on volume change, not absolute volume." } }\r
`;export{e as default};
