const e=`version: 1
ui:
  default_formula: segunda_ley_newton

formulas:
  - id: segunda_ley_newton
    title:
      es: Segunda ley de Newton
      en: Newton's second law
    equation: F = m * a
    latex: F = m a
    rearrangements:
      - target: F
        equation: F = m * a
        latex: F = m a
      - target: m
        equation: m = F / a
        latex: m = \\frac{F}{a}
      - target: a
        equation: a = F / m
        latex: a = \\frac{F}{m}
    category: fundamental
    relation_type: constitutive_relation
    physical_meaning:
      es: Relaciona la causa dinámica traslacional con la resistencia inercial y la respuesta lineal del sistema.
      en: Relates the translational dynamic cause to inertial resistance and the linear response of the system.
    constraints:
      - es: Sistema clásico.
        en: Classical system.
      - es: Masa constante.
        en: Constant mass.
      - es: Sistema de referencia inercial o fuerzas ficticias tratadas explícitamente.
        en: Inertial frame or fictitious forces treated explicitly.
    validity:
      es: Válida en mecánica clásica para sistemas de masa constante descritos desde un marco inercial.
      en: Valid in classical mechanics for constant-mass systems described from an inertial frame.
    dimension_check: "[F] = M L T^-2; [m a] = M · L T^-2 = M L T^-2"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - teoria.md
      - ejemplos.md
      - interpretacion.yaml
    interpretation_tags:
      - causa_dinamica_traslacional
      - resistencia_lineal
      - respuesta_lineal
      - analogia_lineal_angular
    result_semantics:
      target: F
      kind: vector_result
      sign_meaning:
        es: El signo indica el sentido de la fuerza neta respecto al eje elegido.
        en: The sign indicates the direction of the net force relative to the chosen axis.
      absolute_value_meaning:
        es: El valor absoluto indica la intensidad de la causa dinámica lineal.
        en: The absolute value indicates the strength of the linear dynamic cause.
    domain_checks:
      - id: masa_positiva
        expression: m > 0
        message:
          es: La masa debe ser positiva para aplicar la segunda ley de Newton.
          en: Mass must be positive to apply Newton's second law.
      - id: aceleracion_definida
        expression: a != null
        message:
          es: La aceleración debe estar definida en el eje de análisis.
          en: Acceleration must be defined along the analysis axis.
    coherence_checks:
      - id: fuerza_cero_aceleracion_cero
        expression: abs(F) == 0 and abs(a) == 0
        message:
          es: Fuerza neta nula y aceleración nula son coherentes en un marco inercial.
          en: Zero net force and zero acceleration are coherent in an inertial frame.
      - id: signo_fuerza_aceleracion
        expression: F * a >= 0
        message:
          es: En masa positiva, fuerza neta y aceleración deben tener el mismo sentido.
          en: For positive mass, net force and acceleration must have the same direction.
    graph_implications:
      - id: lado_traslacional
        graph_type: Coord
        channels:
          - translational_side
          - cause_pair
          - response_pair
        message:
          es: En el gráfico comparativo, F y a deben aparecer como causa y respuesta del lado traslacional.
          en: In the comparative graph, F and a should appear as cause and response on the translational side.
    pedagogical_triggers:
      - id: confundir_fuerza_con_movimiento
        detect_when: "F != 0"
        message:
          es: Una fuerza neta no significa necesariamente velocidad grande; significa cambio de velocidad.
          en: A net force does not necessarily mean large velocity; it means change in velocity.
      - id: analogia_no_identidad
        detect_when: "true"
        message:
          es: Esta ecuación sirve como lado traslacional de la analogía; no convierte fuerza y torque en la misma magnitud.
          en: This equation serves as the translational side of the analogy; it does not make force and torque the same quantity.

  - id: segunda_ley_rotacional
    title:
      es: Segunda ley rotacional
      en: Rotational second law
    equation: tau = I * alpha
    latex: \\tau = I \\alpha
    rearrangements:
      - target: tau
        equation: tau = I * alpha
        latex: \\tau = I \\alpha
      - target: I
        equation: I = tau / alpha
        latex: I = \\frac{\\tau}{\\alpha}
      - target: alpha
        equation: alpha = tau / I
        latex: \\alpha = \\frac{\\tau}{I}
    category: fundamental
    relation_type: constitutive_relation
    physical_meaning:
      es: Relaciona la causa dinámica rotacional con la resistencia rotacional y la respuesta angular del sistema.
      en: Relates the rotational dynamic cause to rotational resistance and the angular response of the system.
    constraints:
      - es: Eje de rotación definido.
        en: Defined rotation axis.
      - es: Momento de inercia calculado respecto al eje usado.
        en: Moment of inertia computed about the axis being used.
      - es: Modelo de cuerpo rígido o distribución de masa conocida.
        en: Rigid-body model or known mass distribution.
    validity:
      es: Válida en dinámica rotacional clásica cuando el eje y el momento de inercia están correctamente definidos.
      en: Valid in classical rotational dynamics when the axis and moment of inertia are correctly defined.
    dimension_check: "[tau] = M L^2 T^-2; [I alpha] = M L^2 · T^-2 = M L^2 T^-2"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - teoria.md
      - ejemplos.md
      - interpretacion.yaml
    interpretation_tags:
      - causa_dinamica_rotacional
      - resistencia_rotacional
      - respuesta_rotacional
      - analogia_lineal_angular
      - dependencia_geometrica
    result_semantics:
      target: tau
      kind: axial_vector_result
      sign_meaning:
        es: El signo indica el sentido de giro según el eje elegido y la regla de la mano derecha.
        en: The sign indicates the rotational direction according to the chosen axis and the right-hand rule.
      absolute_value_meaning:
        es: El valor absoluto indica la intensidad de la causa dinámica rotacional.
        en: The absolute value indicates the strength of the rotational dynamic cause.
    domain_checks:
      - id: inercia_positiva
        expression: I > 0
        message:
          es: El momento de inercia debe ser positivo para aplicar la segunda ley rotacional.
          en: Moment of inertia must be positive to apply the rotational second law.
      - id: eje_definido
        expression: I != null
        message:
          es: El momento de inercia solo tiene sentido si el eje de rotación está definido.
          en: Moment of inertia only has meaning if the rotation axis is defined.
    coherence_checks:
      - id: torque_cero_alpha_cero
        expression: abs(tau) == 0 and abs(alpha) == 0
        message:
          es: Torque neto nulo y aceleración angular nula son coherentes si el eje está definido.
          en: Zero net torque and zero angular acceleration are coherent if the axis is defined.
      - id: signo_torque_alpha
        expression: tau * alpha >= 0
        message:
          es: Con momento de inercia positivo, torque neto y aceleración angular deben tener el mismo sentido.
          en: With positive moment of inertia, net torque and angular acceleration must have the same direction.
    graph_implications:
      - id: lado_rotacional
        graph_type: Coord
        channels:
          - rotational_side
          - cause_pair
          - resistance_pair
          - response_pair
        message:
          es: En el gráfico comparativo, tau e alpha deben aparecer como causa y respuesta del lado rotacional.
          en: In the comparative graph, tau and alpha should appear as cause and response on the rotational side.
    pedagogical_triggers:
      - id: ignorar_eje
        detect_when: "true"
        message:
          es: No se puede interpretar tau ni I sin declarar respecto a qué eje se calculan.
          en: tau and I cannot be interpreted without declaring the axis about which they are computed.
      - id: masa_no_es_inercia_rotacional
        detect_when: "true"
        message:
          es: I no es la masa escrita en rotación; depende de la distribución de masa respecto al eje.
          en: I is not mass written in rotational form; it depends on mass distribution relative to the axis.

  - id: correspondencia_lineal_angular
    title:
      es: Correspondencia lineal-angular
      en: Linear-angular correspondence
    equation: F <-> tau; m <-> I; a <-> alpha
    latex: F \\leftrightarrow \\tau,\\quad m \\leftrightarrow I,\\quad a \\leftrightarrow \\alpha
    rearrangements:
      - target: F
        equation: F <-> tau
        latex: F \\leftrightarrow \\tau
      - target: m
        equation: m <-> I
        latex: m \\leftrightarrow I
      - target: a
        equation: a <-> alpha
        latex: a \\leftrightarrow \\alpha
    category: structural
    relation_type: geometric_interpretation
    physical_meaning:
      es: Resume la analogía formal entre la dinámica traslacional y la rotacional sin convertirla en identidad física.
      en: Summarizes the formal analogy between translational and rotational dynamics without making it a physical identity.
    constraints:
      - es: Debe usarse como correspondencia estructural, no como igualdad entre magnitudes.
        en: Must be used as a structural correspondence, not as equality between quantities.
      - es: Requiere distinguir causa, resistencia y respuesta en cada lado de la analogía.
        en: Requires distinguishing cause, resistance, and response on each side of the analogy.
    validity:
      es: Válida como herramienta conceptual y metodológica para comparar traslación y rotación.
      en: Valid as a conceptual and methodological tool for comparing translation and rotation.
    dimension_check: "No es una igualdad dimensional; es una correspondencia estructural entre pares de magnitudes."
    calculable: false
    motivo_no_calculable: "Correspondencia conceptual no numérica; no produce un resultado calculable único."
    used_in:
      - teoria.md
      - modelos.md
      - errores.md
      - interpretacion.yaml
    interpretation_tags:
      - correspondencia_estructural
      - analogia_no_identidad
      - transferencia_de_metodo
      - limite_geometrico
    result_semantics:
      target: tau
      kind: conceptual_mapping
      sign_meaning:
        es: El signo no se interpreta en la correspondencia completa; se interpreta en cada magnitud concreta.
        en: The sign is not interpreted for the whole correspondence; it is interpreted for each specific quantity.
      absolute_value_meaning:
        es: No hay valor absoluto de la correspondencia; cada magnitud conserva su propio significado físico.
        en: There is no absolute value of the correspondence; each quantity keeps its own physical meaning.
    domain_checks:
      - id: no_es_igualdad
        expression: "true"
        message:
          es: La correspondencia no debe evaluarse como una igualdad algebraica.
          en: The correspondence must not be evaluated as an algebraic equality.
    coherence_checks:
      - id: pares_correctos
        expression: "true"
        message:
          es: Los pares correctos son fuerza-torque, masa-momento de inercia y aceleración-aceleración angular.
          en: The correct pairs are force-torque, mass-moment of inertia, and acceleration-angular acceleration.
    graph_implications:
      - id: mapa_comparativo
        graph_type: Coord
        channels:
          - translational_side
          - rotational_side
          - cause_pair
          - resistance_pair
          - response_pair
        message:
          es: El gráfico debe mostrar dos columnas comparables, no una igualdad directa entre magnitudes.
          en: The graph should show two comparable columns, not a direct equality between quantities.
    pedagogical_triggers:
      - id: analogia_memorizada
        detect_when: "true"
        message:
          es: Memorizar la tabla no basta; hay que explicar qué se conserva y qué cambia al pasar a rotación.
          en: Memorizing the table is not enough; one must explain what is preserved and what changes in rotation.
      - id: geometria_omitida
        detect_when: "true"
        message:
          es: Si el alumno ignora el eje o la distribución de masa, está usando la analogía fuera de su dominio.
          en: If the student ignores axis or mass distribution, the analogy is being used outside its domain.
`;export{e as default};
