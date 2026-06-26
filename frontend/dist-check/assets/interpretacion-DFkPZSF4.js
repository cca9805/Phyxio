const e=`version: "1.0"
id: relacion-entre-modulos-elasticos-interp
leaf_id: relacion-entre-modulos-elasticos

nombre:
  es: Interpretacion de relaciones entre modulos elasticos
  en: Interpretation of relationships between elastic moduli

scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: ondas-mecanicas
  parent_id: ondas-en-solidos
  ruta_relativa: fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/relacion-entre-modulos-elasticos

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
    priority: [summary, likely_errors]

dependencies:
  formulas:
    - relacion_G_E_nu
    - relacion_K_E_nu
    - relacion_G_K_nu
    - relacion_E_G_K
    - relacion_lambda_E_nu
  magnitudes:
    - E_young
    - G_shear
    - K_bulk
    - nu_poisson
    - lambda_lame
    - ratio_G_E
    - ratio_K_E

global_context:
  physical_domain:
    es: "Relaciones algebraicas entre constantes elasticas de solidos isotropos"
    en: "Algebraic relationships between elastic constants of isotropic solids"
  axis_convention:
    es: "Eje x: coeficiente de Poisson (nu). Eje y: modulos normalizados respecto a E (G/E, K/E, lambda/E)."
    en: "X axis: Poisson ratio (nu). Y axis: moduli normalised to E (G/E, K/E, lambda/E)."
  standard_assumptions:
    - id: isotropia
      text:
        es: "Material isotropo, homogeneo, elastico lineal."
        en: "Isotropic, homogeneous, linearly elastic material."
    - id: estabilidad
      text:
        es: "Estabilidad termodinamica: -1 < nu <= 0.5."
        en: "Thermodynamic stability: -1 < nu <= 0.5."
  standard_warnings:
    - id: anisotropia
      text:
        es: "Si el material es anisotropo, estas relaciones no son validas."
        en: "If the material is anisotropic, these relationships are not valid."

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
    title: { es: Lectura del grafico, en: Graph reading }
  likely_errors:
    enabled: true
    order: 6
    title: { es: Errores probables, en: Likely errors }
  next_step:
    enabled: true
    order: 7
    title: { es: Siguiente paso, en: Next step }

targets:
  G_shear:
    magnitude_type: modulus
    semantic_role:
      es: "Rigidez a cizalla derivada de E y nu."
      en: "Shear stiffness derived from E and nu."
    summary_rules:
      - id: g_summary_high
        when: "G_shear > 0.45 * E_young"
        status: ok
        text:
          es: "[[G_shear]] cercano a E/2: material con nu bajo, rigidez de cizalla proporcionalmente alta."
          en: "[[G_shear]] near E/2: material with low nu, proportionally high shear stiffness."
      - id: g_summary_low
        when: "G_shear < 0.35 * E_young"
        status: ok
        text:
          es: "[[G_shear]] significativamente menor que E/2: nu relativamente alto, mayor compliancia a cizalla."
          en: "[[G_shear]] significantly less than E/2: relatively high nu, greater shear compliance."
      - id: g_summary_default
        when: "true"
        status: ok
        text:
          es: "[[G_shear]] depende de [[E_young]] y [[nu_poisson]] segun G = E / (2(1+nu))."
          en: "[[G_shear]] depends on [[E_young]] and [[nu_poisson]] via G = E / (2(1+nu))."
    physical_reading_rules:
      - id: g_reading_default
        when: "true"
        status: ok
        text:
          es: "G mide la rigidez a cambio de forma. A mayor nu, menor G relativo a E."
          en: "G measures shape change stiffness. The higher nu, the lower G relative to E."
    coherence_rules:
      - id: g_coherence_positive
        when: "G_shear <= 0"
        status: error
        text:
          es: "[[G_shear]] debe ser positivo. Revisar los datos de entrada."
          en: "[[G_shear]] must be positive. Review input data."
      - id: g_coherence_vs_E
        when: "G_shear > E_young / 2 && nu_poisson >= 0"
        status: error
        text:
          es: "[[G_shear]] mayor que E/2 con nu positivo: inconsistencia. Verificar nu."
          en: "[[G_shear]] greater than E/2 with positive nu: inconsistency. Check nu."
      - id: g_coherence_default
        when: "true"
        status: ok
        text:
          es: "G coherente con E y nu."
          en: "G consistent with E and nu."
    model_validity_rules:
      - id: g_validity_default
        when: "true"
        status: ok
        text:
          es: "Valido para material isotropo en regimen elastico lineal."
          en: "Valid for isotropic material in linear elastic regime."
    graph_rules:
      - id: g_graph_default
        when: "true"
        status: ok
        text:
          es: "G/E decrece monotonamente con nu, desde 0.5 (nu=0) hasta 0.33 (nu=0.5)."
          en: "G/E decreases monotonically with nu, from 0.5 (nu=0) to 0.33 (nu=0.5)."
    likely_errors:
      - id: g_error_default
        when: "true"
        status: warning
        text:
          es: "Verificar que se usa nu en la formula y no otro parametro. G = E/(2(1+nu)), no E/(2nu)."
          en: "Check that nu is used in the formula and not another parameter. G = E/(2(1+nu)), not E/(2nu)."
    next_step_rules:
      - id: g_next_default
        when: "true"
        status: ok
        text:
          es: "Calcular [[K_bulk]] con la otra formula para tener la descripcion elastica completa."
          en: "Calculate [[K_bulk]] with the other formula for the complete elastic description."

  K_bulk:
    magnitude_type: modulus
    semantic_role:
      es: "Rigidez volumetrica derivada de E y nu."
      en: "Volumetric stiffness derived from E and nu."
    summary_rules:
      - id: k_summary_divergent
        when: "K_bulk > 5 * E_young"
        status: ok
        text:
          es: "[[K_bulk]] mucho mayor que E: material casi incompresible (nu cercano a 0.5)."
          en: "[[K_bulk]] much greater than E: nearly incompressible material (nu close to 0.5)."
      - id: k_summary_default
        when: "true"
        status: ok
        text:
          es: "[[K_bulk]] indica la resistencia a compresion volumetrica del material."
          en: "[[K_bulk]] indicates the material's resistance to volumetric compression."
    physical_reading_rules:
      - id: k_reading_default
        when: "true"
        status: ok
        text:
          es: "K mide la rigidez a cambio de volumen. Diverge cuando nu tiende a 0.5."
          en: "K measures volume change stiffness. Diverges as nu approaches 0.5."
    coherence_rules:
      - id: k_coherence_positive
        when: "K_bulk <= 0"
        status: error
        text:
          es: "[[K_bulk]] debe ser positivo. Verificar que nu < 0.5."
          en: "[[K_bulk]] must be positive. Check that nu < 0.5."
      - id: k_coherence_default
        when: "true"
        status: ok
        text:
          es: "K coherente con E y nu."
          en: "K consistent with E and nu."
    model_validity_rules:
      - id: k_validity_default
        when: "true"
        status: ok
        text:
          es: "Valido para material isotropo. Para nu = 0.5 exacto, K es formalmente infinito."
          en: "Valid for isotropic material. For exact nu = 0.5, K is formally infinite."
    graph_rules:
      - id: k_graph_default
        when: "true"
        status: ok
        text:
          es: "K/E crece monotonamente con nu y diverge en nu = 0.5."
          en: "K/E grows monotonically with nu and diverges at nu = 0.5."
    likely_errors:
      - id: k_error_default
        when: "true"
        status: warning
        text:
          es: "Si K resulta muy grande, verificar que nu no esta artificialmente cercano a 0.5 por error de redondeo."
          en: "If K is very large, check that nu is not artificially close to 0.5 due to rounding error."
    next_step_rules:
      - id: k_next_default
        when: "true"
        status: ok
        text:
          es: "Verificar coherencia con la relacion E = 9KG/(3K+G)."
          en: "Verify coherence with the relation E = 9KG/(3K+G)."

  nu_poisson:
    magnitude_type: coefficient
    semantic_role:
      es: "Parametro de control que governa todas las relaciones entre modulos."
      en: "Control parameter governing all relationships between moduli."
    summary_rules:
      - id: nu_summary_auxetic
        when: "nu_poisson < 0"
        status: ok
        text:
          es: "[[nu_poisson]] negativo: material auxetico. G > E/2 y K < E/3."
          en: "Negative [[nu_poisson]]: auxetic material. G > E/2 and K < E/3."
      - id: nu_summary_incompressible
        when: "nu_poisson > 0.49"
        status: ok
        text:
          es: "[[nu_poisson]] cercano a 0.5: material casi incompresible. K mucho mayor que G."
          en: "[[nu_poisson]] near 0.5: nearly incompressible material. K much greater than G."
      - id: nu_summary_default
        when: "true"
        status: ok
        text:
          es: "[[nu_poisson]] controla la particion cizalla/volumen. Con E y nu, todos los modulos quedan determinados."
          en: "[[nu_poisson]] controls the shear/volume partition. With E and nu, all moduli are determined."
    physical_reading_rules:
      - id: nu_reading_default
        when: "true"
        status: ok
        text:
          es: "Nu es la razon de contraccion lateral a extension longitudinal. Gobierna el cociente G/K."
          en: "Nu is the ratio of lateral contraction to longitudinal extension. Governs the G/K ratio."
    coherence_rules:
      - id: nu_coherence_range
        when: "nu_poisson <= -1 || nu_poisson > 0.5"
        status: error
        text:
          es: "[[nu_poisson]] fuera del rango termodinamico (-1, 0.5]. Material inestable o error de datos."
          en: "[[nu_poisson]] outside thermodynamic range (-1, 0.5]. Unstable material or data error."
      - id: nu_coherence_default
        when: "true"
        status: ok
        text:
          es: "Nu dentro del rango valido."
          en: "Nu within valid range."
    model_validity_rules:
      - id: nu_validity_default
        when: "true"
        status: ok
        text:
          es: "Las relaciones son exactas para cualquier nu en (-1, 0.5] en un isotropo lineal."
          en: "The relationships are exact for any nu in (-1, 0.5] in a linear isotropic medium."
    graph_rules:
      - id: nu_graph_default
        when: "true"
        status: ok
        text:
          es: "Nu es el eje horizontal natural del grafico. Barrer nu muestra las curvas de G/E y K/E."
          en: "Nu is the natural horizontal axis of the graph. Sweeping nu shows the G/E and K/E curves."
    likely_errors:
      - id: nu_error_default
        when: "true"
        status: warning
        text:
          es: "Verificar que nu se usa con su signo correcto. Nu negativo es valido en materiales auxeticos."
          en: "Check that nu is used with its correct sign. Negative nu is valid in auxetic materials."
    next_step_rules:
      - id: nu_next_default
        when: "true"
        status: ok
        text:
          es: "Con nu y cualquier modulo, calcular los demas usando las formulas de conversion."
          en: "With nu and any modulus, calculate the rest using the conversion formulae."

  lambda_lame:
    magnitude_type: modulus
    semantic_role:
      es: "Primer parametro de Lame, coeficiente del termino de dilatacion."
      en: "First Lame parameter, coefficient of the dilation term."
    summary_rules:
      - id: lam_summary_negative
        when: "lambda_lame < 0"
        status: ok
        text:
          es: "[[lambda_lame]] negativo: material auxetico (nu < 0)."
          en: "Negative [[lambda_lame]]: auxetic material (nu < 0)."
      - id: lam_summary_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_lame]] es un parametro de la formulacion tensorial. Su magnitud no tiene interpretacion mecanica directa."
          en: "[[lambda_lame]] is a parameter of the tensorial formulation. Its magnitude has no direct mechanical interpretation."
    physical_reading_rules:
      - id: lam_reading_default
        when: "true"
        status: ok
        text:
          es: "Lambda aparece en la ley de Hooke generalizada. Su signo sigue el de nu."
          en: "Lambda appears in the generalised Hooke law. Its sign follows that of nu."
    coherence_rules:
      - id: lam_coherence_default
        when: "true"
        status: ok
        text:
          es: "Lambda puede ser positivo, nulo o negativo. No tiene restriccion de signo propia."
          en: "Lambda can be positive, zero or negative. It has no sign restriction of its own."
    model_validity_rules:
      - id: lam_validity_default
        when: "true"
        status: ok
        text:
          es: "Valido para isotropos. En codigos de elementos finitos es la entrada estandar."
          en: "Valid for isotropic media. In finite element codes it is the standard input."
    graph_rules:
      - id: lam_graph_default
        when: "true"
        status: ok
        text:
          es: "Lambda/E cruza por cero cuando nu = 0 y diverge cuando nu tiende a 0.5."
          en: "Lambda/E crosses zero when nu = 0 and diverges as nu approaches 0.5."
    likely_errors:
      - id: lam_error_default
        when: "true"
        status: warning
        text:
          es: "No interpretar lambda como un modulo medible. No existe un 'ensayo de lambda'."
          en: "Do not interpret lambda as a measurable modulus. No 'lambda test' exists."
    next_step_rules:
      - id: lam_next_default
        when: "true"
        status: ok
        text:
          es: "Usar lambda y G como entrada para el tensor constitutivo en simulaciones."
          en: "Use lambda and G as input for the constitutive tensor in simulations."

  E_young:
    magnitude_type: modulus
    semantic_role:
      es: "Rigidez uniaxial, constante de entrada principal."
      en: "Uniaxial stiffness, main input constant."
    summary_rules:
      - id: e_summary_default
        when: "true"
        status: ok
        text:
          es: "[[E_young]] es la constante de entrada. Combinada con [[nu_poisson]], determina todos los demas modulos."
          en: "[[E_young]] is the input constant. Combined with [[nu_poisson]], it determines all other moduli."
    physical_reading_rules:
      - id: e_reading_default
        when: "true"
        status: ok
        text:
          es: "E es la pendiente de la curva tension-deformacion en traccion uniaxial."
          en: "E is the slope of the stress-strain curve in uniaxial tension."
    coherence_rules:
      - id: e_coherence_positive
        when: "E_young <= 0"
        status: error
        text:
          es: "[[E_young]] debe ser positivo. Un valor nulo o negativo no tiene sentido fisico."
          en: "[[E_young]] must be positive. A zero or negative value has no physical meaning."
      - id: e_coherence_cross
        when: "true"
        status: ok
        text:
          es: "Verificar coherencia cruzada: E = 9KG/(3K+G)."
          en: "Cross-check: E = 9KG/(3K+G)."
    model_validity_rules:
      - id: e_validity_default
        when: "true"
        status: ok
        text:
          es: "Valido en regimen elastico lineal. E constante implica que la deformacion es proporcional a la tension."
          en: "Valid in linear elastic regime. Constant E implies strain is proportional to stress."
    graph_rules:
      - id: e_graph_default
        when: "true"
        status: ok
        text:
          es: "E fijo normaliza las curvas G/E y K/E, que dependen solo de nu."
          en: "Fixed E normalises the G/E and K/E curves, which depend only on nu."
    likely_errors:
      - id: e_error_default
        when: "true"
        status: warning
        text:
          es: "No confundir E (pendiente elastica) con resistencia ultima (tension de rotura)."
          en: "Do not confuse E (elastic slope) with ultimate strength (breaking stress)."
    next_step_rules:
      - id: e_next_default
        when: "true"
        status: ok
        text:
          es: "Con E y nu, calcular G, K y lambda usando las formulas de conversion."
          en: "With E and nu, calculate G, K and lambda using the conversion formulae."

cross_checks:
  - id: check_E_from_GK
    description:
      es: "Verificar que E = 9KG/(3K+G) reproduce el E de entrada."
      en: "Verify that E = 9KG/(3K+G) reproduces the input E."
    when: "G_shear > 0 && K_bulk > 0"
    expected: "abs(9*K_bulk*G_shear/(3*K_bulk+G_shear) - E_young) / E_young < 0.01"
    on_fail:
      status: error
      text:
        es: "La verificacion cruzada E = 9KG/(3K+G) no se cumple. Hay un error de calculo."
        en: "Cross-check E = 9KG/(3K+G) not satisfied. There is a calculation error."
  - id: check_G_range
    description:
      es: "G debe estar entre 0 y E/2 para nu positivo."
      en: "G must be between 0 and E/2 for positive nu."
    when: "nu_poisson >= 0"
    expected: "G_shear > 0 && G_shear <= E_young / 2 * 1.01"
    on_fail:
      status: error
      text:
        es: "G fuera del rango esperado para nu positivo."
        en: "G outside expected range for positive nu."
  - id: check_nu_range
    description:
      es: "Nu debe estar en (-1, 0.5]."
      en: "Nu must be in (-1, 0.5]."
    when: "true"
    expected: "nu_poisson > -1 && nu_poisson <= 0.5"
    on_fail:
      status: error
      text:
        es: "Nu fuera del rango termodinamico."
        en: "Nu outside thermodynamic range."

error_patterns:
  - id: ep_K_divergent
    detect_when: "K_bulk > 100 * E_young"
    text:
      es: "K muy grande respecto a E: nu esta extremadamente cerca de 0.5. Verificar si es intencionado."
      en: "K very large relative to E: nu is extremely close to 0.5. Check if intentional."
  - id: ep_G_exceeds_half_E
    detect_when: "G_shear > E_young / 2"
    text:
      es: "G > E/2: solo posible si nu < 0 (material auxetico). Verificar signo de nu."
      en: "G > E/2: only possible if nu < 0 (auxetic material). Check sign of nu."

graph_binding:
  primary_graph: Coord
  x_axis: "nu_poisson"
  y_axis: "G/E, K/E, lambda/E"
  description:
    es: "Cocientes normalizados de modulos en funcion del coeficiente de Poisson."
    en: "Normalised moduli ratios as a function of Poisson ratio."

mini_graph:
  enabled: true
  preferred_type: Coord

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
