const e=`version: 1\r
formulas:\r
- id: weight_definition\r
  title:\r
    es: Definición del peso\r
    en: Definition of weight\r
  equation: P = m*g\r
  latex: P = m g\r
  rearrangements:\r
  - target: P\r
    equation: P = m*g\r
    latex: P = m g\r
    constraints: []\r
  - target: m\r
    equation: m = P/g\r
    latex: m = \\frac{P}{g}\r
    constraints: []\r
  - target: g\r
    equation: g = P/m\r
    latex: g = \\frac{P}{m}\r
    constraints: []\r
  category: force_law\r
  relation_type: definition\r
  physical_meaning:\r
    es: Relaciona el módulo del peso con la masa del cuerpo y la intensidad del campo\r
      gravitatorio.\r
    en: Relates the magnitude of weight to the body's mass and the gravitational field\r
      strength.\r
  constraints:\r
  - Classical Newtonian mechanics\r
  - Constant gravitational field\r
  validity:\r
    es: Válido en entornos gravitatorios constantes (como la superficie terrestre).\r
    en: Valid in constant gravitational environments (such as near Earth's surface).\r
  dimension_check: 'LHS: [N] = [MLT^-2]; RHS: [M][LT^-2] = [MLT^-2]. Consistent.'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - theory\r
  - examples\r
  - interpretation\r
  interpretation_tags:\r
  - real_force\r
  - gravity\r
  result_semantics:\r
    target: P\r
    meaning: Resulta util para interpretar P en el contexto del leaf.\r
  domain_checks:\r
  - expr: m > 0\r
    message:\r
      es: La masa debe ser positiva.\r
      en: Mass must be positive.\r
  - expr: g > 0\r
    message:\r
      es: La gravedad debe ser positiva.\r
      en: Gravity must be positive.\r
  coherence_checks:\r
  - expr: P >= 0\r
    message:\r
      es: El peso no puede ser negativo.\r
      en: Weight cannot be negative.\r
  graph_implications:\r
  - weight_vector_length\r
  pedagogical_triggers:\r
  - always_include_weight\r
- id: friction_limit_static\r
  title:\r
    es: Límite del rozamiento estático\r
    en: Static friction limit\r
  equation: f_s <= mu_s*N\r
  latex: f_s \\le \\mu_s N\r
  rearrangements:\r
  - target: f_s\r
    equation: f_s <= mu_s*N\r
    latex: f_s \\le \\mu_s N\r
    constraints: []\r
  category: force_law\r
  relation_type: constraint\r
  physical_meaning:\r
    es: Expresa que el rozamiento estático se ajusta hasta un máximo antes del deslizamiento.\r
    en: States that static friction adjusts up to a maximum before slipping occurs.\r
  constraints:\r
  - Dry contact surfaces\r
  - Static regime (no relative motion)\r
  validity:\r
    es: Válido para superficies en contacto sin deslizamiento relativo.\r
    en: Valid for surfaces in contact without relative slipping.\r
  dimension_check: '[N] <= [1][N]. Consistent.'\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Es una desigualdad; el valor exacto de f_s depende del balance de otras fuerzas.\r
    en: It is an inequality; the exact value of f_s depends on the balance of other\r
      forces.\r
  used_in:\r
  - theory\r
  - examples\r
  - interpretation\r
  interpretation_tags:\r
  - conditional_force\r
  - threshold\r
  result_semantics:\r
    target: f_s\r
    meaning: Resulta util para interpretar f_s en el contexto del leaf.\r
  domain_checks:\r
  - expr: mu_s >= 0\r
    message:\r
      es: El coeficiente de rozamiento no puede ser negativo.\r
      en: The friction coefficient cannot be negative.\r
  - expr: N >= 0\r
    message:\r
      es: La normal debe ser no negativa.\r
      en: Normal force must be non-negative.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido fisico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - friction_vector_limit\r
  pedagogical_triggers:\r
  - check_contact_existence\r
- id: force_existence_logic\r
  title:\r
    es: Lógica de existencia de fuerzas de contacto\r
    en: Contact force existence logic\r
  equation: (system_contact == 0) -> (N == 0 && f == 0)\r
  latex: c = 0 \\implies N = 0, f = 0\r
  rearrangements: []\r
  category: logic_law\r
  relation_type: constraint\r
  physical_meaning:\r
    es: Las fuerzas de contacto solo pueden existir si el estado de contacto es activo.\r
    en: Contact forces can only exist if the contact state is active.\r
  constraints:\r
  - Classical contact mechanics\r
  validity:\r
    es: Siempre válido para modelos de contacto puntual o superficial simple.\r
    en: Always valid for point or simple surface contact models.\r
  dimension_check: Logical condition. No units.\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Es una regla lógica de validación de modelo, no una ecuación de cálculo.\r
    en: It is a logical model validation rule, not a calculation equation.\r
  used_in:\r
  - interpretation\r
  - model_error_detection\r
  interpretation_tags:\r
  - model_integrity\r
  - contact_state\r
  result_semantics:\r
    target: system_contact\r
    meaning: Resulta util para interpretar system_contact en el contexto del leaf.\r
  domain_checks:\r
  - expr: system_contact == 0 || system_contact == 1\r
    message:\r
      es: El estado de contacto debe ser 0 o 1.\r
      en: Contact state must be 0 or 1.\r
  coherence_checks:\r
  - expr: 'true'\r
    message:\r
      es: Revisa que el resultado tenga sentido fisico.\r
      en: Check that the result makes physical sense.\r
  graph_implications:\r
  - visibility_of_contact_vectors\r
  pedagogical_triggers:\r
  - avoid_invented_forces\r
`;export{e as default};
