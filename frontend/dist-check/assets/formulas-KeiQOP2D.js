const e=`version: 1\r
formulas:\r
- id: criterio_inercial_primera_ley\r
  title:\r
    es: Criterio de Sistema Inercial (Primera Ley de Newton)\r
    en: Inertial System Criterion (Newton's First Law)\r
  equation: F_neta = 0 => a = 0\r
  latex: \\sum \\vec{F}_{ext} = \\vec{0} \\Rightarrow \\vec{a} = \\vec{0}\r
  rearrangements: []\r
  category: fundamental\r
  relation_type: physical_law\r
  physical_meaning:\r
    es: Un sistema de referencia es inercial si y solo si un cuerpo aislado (sin fuerzas\r
      netas) se mantiene en reposo o en movimiento rectilíneo uniforme. Este es el\r
      criterio operativo para identificar sistemas inerciales.\r
    en: A reference frame is inertial if and only if an isolated body (with no net\r
      forces) remains at rest or in uniform rectilinear motion. This is the operational\r
      criterion for identifying inertial systems.\r
  constraints:\r
  - es: Sistema de referencia no acelerado\r
    en: Non-accelerated reference frame\r
  - es: Sin rotación del sistema\r
    en: No system rotation\r
  - es: Régimen clásico (v << c)\r
    en: Classical regime (v << c)\r
  validity:\r
    es: Define la esencia de los sistemas inerciales. Válido en mecánica clásica para\r
      todos los sistemas no acelerados y no rotantes.\r
    en: Defines the essence of inertial systems. Valid in classical mechanics for\r
      all non-accelerated and non-rotating systems.\r
  dimension_check: '[M L T^{-2}] = [M L T^{-2}]'\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Es un criterio conceptual de validez del marco (implicación lógica), no una\r
      ecuación numérica para despejar una magnitud física.\r
    en: It is a conceptual frame-validity criterion (logical implication), not a numerical\r
      equation to solve a physical magnitude.\r
  used_in:\r
  - es: Identificación de sistemas inerciales\r
    en: Identification of inertial systems\r
  - es: Validación de marcos de referencia\r
    en: Validation of reference frames\r
  - es: Fundamento de la mecánica newtoniana\r
    en: Foundation of Newtonian mechanics\r
  interpretation_tags:\r
  - inertial_criterion\r
  - first_law\r
  - reference_frame_validation\r
  result_semantics:\r
    target: F_neta\r
    meaning: Resulta util para interpretar F_neta en el contexto del leaf.\r
  domain_checks:\r
  - condition: system_rotating\r
    message:\r
      es: 'ADVERTENCIA: Sistema en rotación detectado. El criterio inercial no aplica.\r
        Aparecen fuerzas centrífuga y Coriolis.'\r
      en: 'WARNING: Rotating system detected. Inertial criterion does not apply. Centrifugal\r
        and Coriolis forces appear.'\r
  - condition: system_accelerating\r
    message:\r
      es: 'ADVERTENCIA: Sistema acelerando detectado. NO es inercial. Debes añadir\r
        fuerzas ficticias o cambiar a un SRI.'\r
      en: 'WARNING: Accelerating system detected. NOT inertial. You must add fictitious\r
        forces or switch to an IRF.'\r
  coherence_checks:\r
  - check: if F_neta == 0 and a != 0\r
    message:\r
      es: 'INCOHERENCIA CRÍTICA: Detectada aceleración sin fuerza neta. Tu sistema\r
        NO es inercial.'\r
      en: 'CRITICAL INCOHERENCE: Detected acceleration without net force. Your system\r
        is NOT inertial.'\r
  - check: if F_neta != 0 and a == 0\r
    message:\r
      es: 'INCOHERENCIA: Fuerza neta no nula pero aceleración cero. Verifica si falta\r
        alguna fuerza en el balance.'\r
      en: 'INCOHERENCE: Non-zero net force but zero acceleration. Check if any force\r
        is missing from the balance.'\r
  graph_implications:\r
  - if: F_neta == 0 and a == 0\r
    then:\r
      es: La trayectoria es una línea recta (MRU) o el objeto está en reposo. Confirma\r
        sistema inercial.\r
      en: Trajectory is a straight line (uniform motion) or object is at rest. Confirms\r
        inertial system.\r
  - if: F_neta != 0\r
    then:\r
      es: La aceleración debe ser no nula y en la dirección de F_neta. Visualizar\r
        vector fuerza y aceleración paralelos.\r
      en: Acceleration must be non-zero and in the direction of F_net. Visualize force\r
        and acceleration vectors parallel.\r
  pedagogical_triggers:\r
  - condition: user_observes_acceleration_without_force\r
    error:\r
      es: 'ERROR CONCEPTUAL: Si observas aceleración sin identificar fuerzas reales,\r
        tu sistema NO es inercial. Cambia de referencia.'\r
      en: 'CONCEPTUAL ERROR: If you observe acceleration without identifying real\r
        forces, your system is NOT inertial. Change reference.'\r
  - condition: user_adds_fictitious_forces_in_SRI\r
    warning:\r
      es: 'ADVERTENCIA: No añadas fuerzas ficticias en sistemas inerciales. Solo aparecen\r
        en sistemas no inerciales.'\r
      en: 'WARNING: Do not add fictitious forces in inertial systems. They only appear\r
        in non-inertial systems.'\r
- id: segunda_ley_newton_SRI\r
  title:\r
    es: Segunda Ley de Newton en Sistema Inercial\r
    en: Newton's Second Law in Inertial Frame\r
  equation: F_neta = m*a\r
  latex: \\sum \\vec{F}_{ext} = m \\vec{a}\r
  rearrangements:\r
  - target: a\r
    latex: \\vec{a} = \\frac{\\sum \\vec{F}_{ext}}{m}\r
    equation: a = F_neta / m\r
    constraints: []\r
  - target: F_neta\r
    latex: \\sum \\vec{F}_{ext} = m \\vec{a}\r
    equation: F_neta = m * a\r
    constraints: []\r
  - target: m\r
    latex: m = \\frac{\\sum \\vec{F}_{ext}}{\\vec{a}}\r
    equation: m = F_neta / a\r
    constraints: []\r
  category: fundamental\r
  relation_type: physical_law\r
  physical_meaning:\r
    es: En un sistema inercial, la aceleración de un objeto es directamente proporcional\r
      a la fuerza neta aplicada e inversamente proporcional a su masa. Esta ley conecta\r
      dinámica (fuerzas) con cinemática (aceleración).\r
    en: In an inertial system, an object's acceleration is directly proportional to\r
      the applied net force and inversely proportional to its mass. This law connects\r
      dynamics (forces) with kinematics (acceleration).\r
  constraints:\r
  - es: Masa constante\r
    en: Constant mass\r
  - es: Sistema inercial\r
    en: Inertial system\r
  - es: Régimen clásico (v << c)\r
    en: Classical regime (v << c)\r
  validity:\r
    es: Válido ÚNICAMENTE en sistemas inerciales. En sistemas no inerciales, debe\r
      modificarse para incluir fuerzas ficticias.\r
    en: Valid ONLY in inertial systems. In non-inertial systems, it must be modified\r
      to include fictitious forces.\r
  dimension_check: '[M L T^{-2}] = [M] × [L T^{-2}]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - es: Predecir aceleración dados fuerzas y masa\r
    en: Predicting acceleration given forces and mass\r
  - es: Calcular fuerza neta dada aceleración observada\r
    en: Calculating net force given observed acceleration\r
  - es: Determinar masa inercial de un cuerpo\r
    en: Determining inertial mass of a body\r
  interpretation_tags:\r
  - newtons_second_law\r
  - dynamics\r
  - force_acceleration_relation\r
  result_semantics:\r
    target: a\r
    meaning: Resulta util para interpretar a en el contexto del leaf.\r
  domain_checks:\r
  - condition: m <= 0\r
    message:\r
      es: 'ERROR: Masa no positiva. Físicamente imposible en mecánica clásica.'\r
      en: 'ERROR: Non-positive mass. Physically impossible in classical mechanics.'\r
  - condition: abs(v) > 0.1*c\r
    message:\r
      es: 'ADVERTENCIA: Velocidad cercana a 0.1c. Considerar efectos relativistas.\r
        F = dp/dt en lugar de F = ma.'\r
      en: 'WARNING: Velocity near 0.1c. Consider relativistic effects. F = dp/dt instead\r
        of F = ma.'\r
  coherence_checks:\r
  - check: vector_direction(F_neta) == vector_direction(a)\r
    message:\r
      es: La dirección de la fuerza neta debe coincidir con la dirección de la aceleración.\r
      en: The direction of net force must match the direction of acceleration.\r
  - check: if F_neta == 0 then a == 0\r
    message:\r
      es: Si no hay fuerza neta, no puede haber aceleración (1ª ley).\r
      en: If there is no net force, there cannot be acceleration (1st law).\r
  graph_implications:\r
  - if: F_neta > 0\r
    then:\r
      es: El vector aceleración apunta en la misma dirección que F_neta. Visualizar\r
        ambos paralelos.\r
      en: The acceleration vector points in the same direction as F_net. Visualize\r
        both parallel.\r
  - if: F_neta == 0\r
    then:\r
      es: El vector aceleración es nulo. El objeto sigue trayectoria recta (o está\r
        en reposo).\r
      en: The acceleration vector is zero. Object follows straight trajectory (or\r
        is at rest).\r
  pedagogical_triggers:\r
  - condition: user_applies_in_non_inertial_frame\r
    error:\r
      es: 'ERROR GRAVE: Intentas aplicar F=ma en un sistema no inercial. Debes añadir\r
        fuerzas ficticias o cambiar a SRI.'\r
      en: 'SERIOUS ERROR: You''re trying to apply F=ma in a non-inertial system. You\r
        must add fictitious forces or switch to IRF.'\r
  - condition: forgot_force_in_sum\r
    hint:\r
      es: ¿Incluiste TODAS las fuerzas? Peso, Normal, Roce, Tensión... Verifica el\r
        diagrama de cuerpo libre.\r
      en: Did you include ALL forces? Weight, Normal, Friction, Tension... Check free\r
        body diagram.\r
- id: transformacion_galileana_velocidad\r
  title:\r
    es: Transformación Galileana de Velocidad\r
    en: Galilean Velocity Transformation\r
  equation: v_obs2 = v_obs1 - V_rel\r
  latex: \\vec{v}' = \\vec{v} - \\vec{V}\r
  rearrangements:\r
  - target: v_obs1\r
    latex: \\vec{v} = \\vec{v}' + \\vec{V}\r
    equation: v_obs1 = v_obs2 + V_rel\r
    constraints: []\r
  - target: V_rel\r
    latex: \\vec{V} = \\vec{v} - \\vec{v}'\r
    equation: V_rel = v_obs1 - v_obs2\r
    constraints: []\r
  category: fundamental\r
  relation_type: kinematic_transformation\r
  physical_meaning:\r
    es: Permite convertir la velocidad de un objeto medida en un sistema inercial\r
      S a la velocidad medida en otro sistema inercial S' que se mueve con velocidad\r
      constante V respecto a S.\r
    en: Allows converting an object's velocity measured in an inertial system S to\r
      the velocity measured in another inertial system S' moving with constant velocity\r
      V relative to S.\r
  constraints:\r
  - es: Ambos sistemas deben ser inerciales\r
    en: Both systems must be inertial\r
  - es: V_rel debe ser constante\r
    en: V_rel must be constant\r
  - es: Régimen clásico (V << c)\r
    en: Classical regime (V << c)\r
  validity:\r
    es: Válido para transformaciones entre sistemas inerciales en mecánica clásica.\r
      Falla en relatividad especial (v comparable a c).\r
    en: Valid for transformations between inertial systems in classical mechanics.\r
      Fails in special relativity (v comparable to c).\r
  dimension_check: '[L T^{-1}] = [L T^{-1}] - [L T^{-1}]'\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - es: Conversión de velocidades entre sistemas inerciales\r
    en: Velocity conversion between inertial systems\r
  - es: Análisis de movimiento relativo\r
    en: Relative motion analysis\r
  - es: Navegación con múltiples referencias\r
    en: Navigation with multiple references\r
  interpretation_tags:\r
  - galilean_transformation\r
  - reference_frame_change\r
  - relative_velocity\r
  result_semantics:\r
    target: v_obs1\r
    meaning: Resulta util para interpretar v_obs1 en el contexto del leaf.\r
  domain_checks:\r
  - condition: abs(V_rel) > 0.1*c or abs(v_obs1) > 0.1*c\r
    message:\r
      es: 'ADVERTENCIA: Velocidades cercanas a régimen relativista. Usar transformaciones\r
        de Lorentz en lugar de Galileo.'\r
      en: 'WARNING: Velocities near relativistic regime. Use Lorentz transformations\r
        instead of Galilean.'\r
  coherence_checks:\r
  - check: V_rel is constant\r
    message:\r
      es: V_rel debe ser constante en el tiempo. Si varía, los sistemas no son ambos\r
        inerciales.\r
      en: V_rel must be constant in time. If it varies, the systems are not both inertial.\r
  graph_implications:\r
  - if: V_rel != 0\r
    then:\r
      es: Los vectores velocidad v y v' difieren en dirección e/o magnitud. Visualizar\r
        ambos desde un origen común.\r
      en: Velocity vectors v and v' differ in direction and/or magnitude. Visualize\r
        both from a common origin.\r
  - if: V_rel == 0\r
    then:\r
      es: Ambos sistemas miden la misma velocidad. v' = v.\r
      en: Both systems measure the same velocity. v' = v.\r
  pedagogical_triggers:\r
  - condition: user_forgot_minus_sign\r
    warning:\r
      es: 'ERROR COMÚN: Olvidar el signo menos. Es v'' = v - V, NO v'' = v + V.'\r
      en: 'COMMON ERROR: Forgetting the minus sign. It''s v'' = v - V, NOT v'' = v\r
        + V.'\r
  - condition: user_applies_with_varying_V\r
    error:\r
      es: 'ERROR: V_rel está variando. Esta fórmula solo vale si V es constante (sistemas\r
        inerciales).'\r
      en: 'ERROR: V_rel is varying. This formula only holds if V is constant (inertial\r
        systems).'\r
- id: invariancia_aceleracion_galileana\r
  title:\r
    es: Invariancia de la Aceleración (Relatividad Galileana)\r
    en: Acceleration Invariance (Galilean Relativity)\r
  equation: a_obs2 = a_obs1\r
  latex: \\vec{a}' = \\vec{a}\r
  rearrangements: []\r
  category: fundamental\r
  relation_type: physical_law\r
  physical_meaning:\r
    es: La aceleración de un objeto es la misma cuando se mide desde cualquier sistema\r
      inercial. Esta propiedad es la base del Principio de Relatividad de Galileo\r
      y garantiza que las leyes de Newton sean las mismas en todos los sistemas inerciales.\r
    en: An object's acceleration is the same when measured from any inertial system.\r
      This property is the basis of Galileo's Principle of Relativity and ensures\r
      that Newton's laws are the same in all inertial systems.\r
  constraints:\r
  - es: Ambos sistemas deben ser inerciales\r
    en: Both systems must be inertial\r
  - es: Régimen clásico (v << c)\r
    en: Classical regime (v << c)\r
  validity:\r
    es: Válido para transformaciones entre sistemas inerciales. Si los sistemas miden\r
      aceleraciones diferentes, al menos uno NO es inercial.\r
    en: Valid for transformations between inertial systems. If systems measure different\r
      accelerations, at least one is NOT inertial.\r
  dimension_check: '[L T^{-2}] = [L T^{-2}]'\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Es una propiedad de invariancia entre marcos inerciales, no una relación independiente\r
      de cálculo con grados de libertad nuevos.\r
    en: It is an invariance property between inertial frames, not an independent calculable\r
      relation with new degrees of freedom.\r
  used_in:\r
  - es: Verificación de sistemas inerciales\r
    en: Inertial system verification\r
  - es: Fundamento de la relatividad galileana\r
    en: Foundation of Galilean relativity\r
  - es: Validación de equivalencia de leyes físicas\r
    en: Validation of physical law equivalence\r
  interpretation_tags:\r
  - galilean_invariance\r
  - acceleration_invariance\r
  - relativity_principle\r
  result_semantics:\r
    target: a_obs2\r
    meaning: Resulta util para interpretar a_obs2 en el contexto del leaf.\r
  domain_checks:\r
  - condition: a_obs1 != a_obs2\r
    message:\r
      es: 'ERROR CRÍTICO: Detectada diferencia de aceleración entre sistemas. Al menos\r
        uno NO es inercial.'\r
      en: 'CRITICAL ERROR: Detected acceleration difference between systems. At least\r
        one is NOT inertial.'\r
  coherence_checks:\r
  - check: if systems_both_inertial then a1 == a2\r
    message:\r
      es: La invariancia de aceleración es LA propiedad definitoria de sistemas inerciales.\r
      en: Acceleration invariance is THE defining property of inertial systems.\r
  graph_implications:\r
  - if: a_obs1 == a_obs2\r
    then:\r
      es: Los vectores aceleración desde ambos sistemas se superponen perfectamente.\r
        Confirma sistemas inerciales.\r
      en: Acceleration vectors from both systems overlap perfectly. Confirms inertial\r
        systems.\r
  - if: a_obs1 != a_obs2\r
    then:\r
      es: Los vectores difieren. Indica que al menos un sistema es no inercial.\r
      en: Vectors differ. Indicates at least one system is non-inertial.\r
  pedagogical_triggers:\r
  - condition: user_thinks_acceleration_changes_with_frame\r
    error:\r
      es: 'ERROR CONCEPTUAL GRAVE: La aceleración NO cambia entre sistemas inerciales.\r
        Solo la velocidad cambia.'\r
      en: 'SERIOUS CONCEPTUAL ERROR: Acceleration does NOT change between inertial\r
        systems. Only velocity changes.'\r
  - condition: observed_different_accelerations\r
    diagnostic:\r
      es: Si mides aceleraciones diferentes en dos sistemas, al menos uno está acelerando\r
        (no inercial).\r
      en: If you measure different accelerations in two systems, at least one is accelerating\r
        (non-inertial).\r
`;export{e as default};
