const e=`- id: permeabilidad_absoluta
  title:
    es: Permeabilidad absoluta del material
    en: Absolute permeability of the material
  equation: "mu = mu0 * mu_r"
  latex: "\\\\mu = \\\\mu_0\\\\,\\\\mu_r  % mu mu0 mu_r"
  rearrangements:
    - target: mu
      equation: "mu = mu0 * mu_r"
      latex: "\\\\mu = \\\\mu_0\\\\,\\\\mu_r  % mu mu0 mu_r"
    - target: mu_r
      equation: "mu_r = mu / mu0"
      latex: "\\\\mu_r = \\\\frac{\\\\mu}{\\\\mu_0}  % mu_r mu mu0"
    - target: mu0
      equation: "mu0 = mu / mu_r"
      latex: "\\\\mu_0 = \\\\frac{\\\\mu}{\\\\mu_r}  % mu0 mu mu_r"
  category: structural
  relation_type: constitutive_relation
  physical_meaning:
    es: "La permeabilidad absoluta traduce la escala relativa del material a una constante con unidades."
    en: "Absolute permeability converts the material relative scale into a dimensional constant."
  constraints:
    - medio lineal
    - respuesta homogenea
    - sin saturacion apreciable
  validity:
    es: "Valida para materiales donde la pendiente B frente a H permanece casi constante."
    en: "Valid for materials where the B versus H slope remains nearly constant."
  dimension_check: "mu0 y mu comparten H/m; mu_r es adimensional."
  calculable: true
  motivo_no_calculable: ""
  used_in:
    - teoria
    - ejemplos
    - interpretacion
  interpretation_tags:
    - escala_material
    - comparacion_vacio
  result_semantics:
    target: mu
    kind: positive_scale
    sign_meaning:
      es: "En este modelo se espera valor positivo."
      en: "In this model a positive value is expected."
    absolute_value_meaning:
      es: "Mayor modulo indica mayor campo total para la misma intensidad magnetica."
      en: "Larger magnitude indicates larger total field for the same magnetic field strength."
  domain_checks:
    - id: mu_positive
      when: "mu > 0"
      status: ok
      message:
        es: "La permeabilidad positiva es coherente con el modelo lineal ordinario."
        en: "Positive permeability is coherent with the ordinary linear model."
  coherence_checks:
    - id: mu_less_vacuum_warning
      when: "mu < mu0"
      status: warning
      message:
        es: "Una permeabilidad menor que la del vacio sugiere respuesta diamagnetica efectiva."
        en: "A permeability below vacuum suggests an effective diamagnetic response."
  graph_implications:
    - "La pendiente B frente a H aumenta con mu."
  pedagogical_triggers:
    - "Revisar si el alumno confunde mu con mu_r."
- id: susceptibilidad_desde_permeabilidad
  title:
    es: Susceptibilidad desde permeabilidad relativa
    en: Susceptibility from relative permeability
  equation: "chi_m = mu_r - 1"
  latex: "\\\\chi_m = \\\\mu_r - 1  % chi_m mu_r"
  rearrangements:
    - target: chi_m
      equation: "chi_m = mu_r - 1"
      latex: "\\\\chi_m = \\\\mu_r - 1  % chi_m mu_r"
    - target: mu_r
      equation: "mu_r = chi_m + 1"
      latex: "\\\\mu_r = \\\\chi_m + 1  % mu_r chi_m"
  category: derived
  relation_type: constitutive_relation
  physical_meaning:
    es: "La susceptibilidad mide la desviacion del material respecto al comportamiento del vacio."
    en: "Susceptibility measures the material departure from vacuum behavior."
  constraints:
    - material isotropo efectivo
    - respuesta reversible
  validity:
    es: "Adecuada mientras mu_r sea una pendiente efectiva estable."
    en: "Appropriate while mu_r is a stable effective slope."
  dimension_check: "chi_m y mu_r son adimensionales."
  calculable: true
  motivo_no_calculable: ""
  used_in:
    - teoria
    - ejemplos
    - interpretacion
  interpretation_tags:
    - clasificacion_material
    - signo_respuesta
  result_semantics:
    target: chi_m
    kind: signed_ratio
    sign_meaning:
      es: "Signo negativo indica oposicion diamagnetica; signo positivo indica alineacion."
      en: "Negative sign indicates diamagnetic opposition; positive sign indicates alignment."
    absolute_value_meaning:
      es: "Mayor modulo indica respuesta material mas intensa ante H."
      en: "Larger magnitude indicates stronger material response to H."
  domain_checks:
    - id: chi_reasonable
      when: "chi_m > -1"
      status: ok
      message:
        es: "La susceptibilidad mantiene mu_r positiva en el modelo ordinario."
        en: "The susceptibility keeps mu_r positive in the ordinary model."
  coherence_checks:
    - id: chi_low_limit
      when: "chi_m <= -1"
      status: error
      message:
        es: "El valor hace no positiva la permeabilidad relativa y rompe este modelo basico."
        en: "The value makes relative permeability nonpositive and breaks this basic model."
  graph_implications:
    - "El signo de chi_m cambia el sentido de M respecto a H."
  pedagogical_triggers:
    - "Distinguir respuesta diamagnetica de ausencia de respuesta."
- id: magnetizacion_lineal
  title:
    es: Magnetizacion lineal inducida
    en: Induced linear magnetization
  equation: "M = chi_m * H"
  latex: "M = \\\\chi_m\\\\,H  % M chi_m H"
  rearrangements:
    - target: M
      equation: "M = chi_m * H"
      latex: "M = \\\\chi_m\\\\,H  % M chi_m H"
    - target: H
      equation: "H = M / chi_m"
      latex: "H = \\\\frac{M}{\\\\chi_m}  % H M chi_m"
    - target: chi_m
      equation: "chi_m = M / H"
      latex: "\\\\chi_m = \\\\frac{M}{H}  % chi_m M H"
  category: fundamental
  relation_type: constitutive_relation
  physical_meaning:
    es: "La magnetizacion inducida es proporcional a la intensidad magnetica aplicada."
    en: "Induced magnetization is proportional to applied magnetic field strength."
  constraints:
    - respuesta lineal
    - material no saturado
    - H no nulo para despejar chi_m
  validity:
    es: "Valida antes de saturacion y sin memoria magnetica dominante."
    en: "Valid before saturation and without dominant magnetic memory."
  dimension_check: "M y H comparten A/m; chi_m es adimensional."
  calculable: true
  motivo_no_calculable: ""
  used_in:
    - teoria
    - ejemplos
    - interpretacion
  interpretation_tags:
    - respuesta_interna
    - proporcionalidad
  result_semantics:
    target: M
    kind: signed_vector_component
    sign_meaning:
      es: "El signo compara la orientacion de M con H."
      en: "The sign compares M orientation with H."
    absolute_value_meaning:
      es: "Mayor modulo indica mayor momento magnetico por volumen."
      en: "Larger magnitude indicates greater magnetic moment per volume."
  domain_checks:
    - id: m_linear_scope
      when: "true"
      status: ok
      message:
        es: "La lectura de M presupone proporcionalidad lineal con H."
        en: "The reading of M assumes linear proportionality with H."
  coherence_checks:
    - id: m_zero_h
      when: "H == 0"
      status: warning
      message:
        es: "Con H nula, una M no nula indicaria remanencia fuera del modelo lineal reversible."
        en: "With zero H, a nonzero M would indicate remanence outside the reversible linear model."
  graph_implications:
    - "La pendiente de M frente a H es chi_m."
  pedagogical_triggers:
    - "Comprobar que el alumno no use B como entrada de esta relacion."
- id: campo_material_lineal
  title:
    es: Campo magnetico en medio lineal
    en: Magnetic field in a linear medium
  equation: "B = mu * H"
  latex: "B = \\\\mu\\\\,H  % B mu H"
  rearrangements:
    - target: B
      equation: "B = mu * H"
      latex: "B = \\\\mu\\\\,H  % B mu H"
    - target: H
      equation: "H = B / mu"
      latex: "H = \\\\frac{B}{\\\\mu}  % H B mu"
    - target: mu
      equation: "mu = B / H"
      latex: "\\\\mu = \\\\frac{B}{H}  % mu B H"
  category: fundamental
  relation_type: constitutive_relation
  physical_meaning:
    es: "El campo total en un medio lineal crece con la intensidad aplicada segun la permeabilidad."
    en: "The total field in a linear medium grows with applied field strength according to permeability."
  constraints:
    - medio lineal
    - direccion comun efectiva de B y H
    - sin histeresis apreciable
  validity:
    es: "Apropiada para tramos de curva B frente a H con pendiente casi constante."
    en: "Appropriate for B versus H curve segments with nearly constant slope."
  dimension_check: "H/m multiplicado por A/m produce tesla."
  calculable: true
  motivo_no_calculable: ""
  used_in:
    - teoria
    - ejemplos
    - interpretacion
  interpretation_tags:
    - campo_resultante
    - diseño_magnetico
  result_semantics:
    target: B
    kind: signed_vector_component
    sign_meaning:
      es: "El signo de B indica orientacion del campo resultante."
      en: "The sign of B indicates the resulting field orientation."
    absolute_value_meaning:
      es: "Mayor modulo indica campo util mas intenso en el material."
      en: "Larger magnitude indicates a stronger useful field in the material."
  domain_checks:
    - id: b_linear_scope
      when: "true"
      status: ok
      message:
        es: "B se interpreta dentro de una pendiente lineal efectiva."
        en: "B is interpreted inside an effective linear slope."
  coherence_checks:
    - id: b_large_warning
      when: "B > 2"
      status: warning
      message:
        es: "Campos de varios teslas suelen exigir revisar saturacion y geometria."
        en: "Fields of several teslas usually require checking saturation and geometry."
  graph_implications:
    - "B aparece como ordenada de la curva constitutiva frente a H."
  pedagogical_triggers:
    - "Evitar interpretar B alto como prueba automatica de modelo lineal valido."
`;export{e as default};
