const e=`ui:
  default_formula: normal_horizontal
formulas:
  - id: normal_horizontal
    title:
      es: Fuerza normal en apoyo horizontal
      en: Normal force on a horizontal support
    equation: N = m*g
    latex: N = m g
    rearrangements:
      - target: N
        equation: N = m*g
        latex: N = m g
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: En el modelo horizontal simple, la normal compensa el peso y fija la escala del contacto.
      en: In the simple horizontal model, the normal balances weight and sets the contact scale.
    constraints:
      - contacto permanente
      - superficie horizontal
      - sin aceleración vertical
    validity:
      es: Válida cuando el bloque permanece apoyado sobre una superficie horizontal y no hay otras componentes normales relevantes.
      en: Valid when the block remains supported on a horizontal surface and no other relevant normal components exist.
    dimension_check: "[N] = [kg][m/s^2]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria.md, ejemplos.md]
    interpretation_tags: [contacto, apoyo, escala_del_rozamiento]
    result_semantics:
      target: N
      kind: threshold_input
      sign_meaning:
        es: La normal se interpreta como módulo positivo del apoyo.
        en: The normal is interpreted as the positive magnitude of the support reaction.
      absolute_value_meaning:
        es: Su valor absoluto coincide con la intensidad efectiva del contacto perpendicular.
        en: Its absolute value matches the effective intensity of the perpendicular contact.
    domain_checks:
      - id: masa_positiva
        expr: m > 0
        message:
          es: La masa debe ser positiva para que el apoyo sea físico.
          en: Mass must be positive for the support to be physical.
    coherence_checks:
      - id: normal_no_negativa
        expr: N >= 0
        message:
          es: La normal no puede ser negativa en este modelo.
          en: The normal cannot be negative in this model.
    graph_implications: []
    pedagogical_triggers:
      - id: confundir_normal_con_peso_en_todo_caso
        detect_when: N == m*g
        message:
          es: Aquí coincide con el peso solo porque la geometría es horizontal y no hay otras componentes normales.
          en: Here it matches weight only because the geometry is horizontal and there are no other normal components.

  - id: friccion_estatica_max
    title:
      es: Rozamiento estático máximo
      en: Maximum static friction
    equation: f_emax = mu_e*N
    latex: f_{e,max} = \\mu_e N
    rearrangements:
      - target: f_emax
        equation: f_emax = mu_e*N
        latex: f_{e,max} = \\mu_e N
    category: derived
    relation_type: constitutive_relation
    physical_meaning:
      es: Establece la cota máxima del rozamiento estático disponible antes del deslizamiento.
      en: It sets the maximum available static friction before sliding begins.
    constraints:
      - contacto seco idealizado
      - coeficiente constante por materiales
      - fuerza tangencial evaluada como módulo
    validity:
      es: Válida como límite superior del régimen estático; no da por sí sola el valor real de la fricción si el sistema sigue en reposo.
      en: Valid as an upper bound for the static regime; it does not by itself give the actual friction value while the system remains at rest.
    dimension_check: "[N] = [1][N]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria.md, ejemplos.md]
    interpretation_tags: [umbral, adherencia, decision_de_regimen]
    result_semantics:
      target: f_emax
      kind: threshold
      sign_meaning:
        es: Se lee como cota positiva del módulo de rozamiento estático disponible.
        en: It is read as a positive bound for the available static friction magnitude.
      absolute_value_meaning:
        es: Su valor absoluto mide cuánto empuje tangencial puede sostener el contacto sin deslizar.
        en: Its absolute value measures how much tangential drive the contact can sustain without slipping.
    domain_checks:
      - id: mu_e_valida
        expr: mu_e >= 0
        message:
          es: El coeficiente estático debe ser no negativo.
          en: The static coefficient must be non-negative.
      - id: normal_valida
        expr: N >= 0
        message:
          es: La normal debe ser no negativa para que exista contacto físico.
          en: The normal must be non-negative for physical contact to exist.
    coherence_checks:
      - id: umbral_no_negativo
        expr: f_emax >= 0
        message:
          es: El umbral estático no puede ser negativo.
          en: The static threshold cannot be negative.
    graph_implications: []
    pedagogical_triggers:
      - id: usar_como_valor_real_siempre
        detect_when: f_emax >= 0
        message:
          es: Recuerda que este resultado es una cota máxima; la fricción real en reposo puede ser menor.
          en: Remember that this result is a maximum bound; the actual friction at rest may be smaller.

  - id: umbral_deslizamiento
    title:
      es: Fuerza externa crítica para romper el reposo
      en: Critical external force to break rest
    equation: F_ext_crit = mu_e*N
    latex: F_ext_crit = \\mu_e N
    rearrangements:
      - target: F_ext_crit
        equation: F_ext_crit = mu_e*N
        latex: F_ext_crit = \\mu_e N
    category: structural
    relation_type: constitutive_relation
    physical_meaning:
      es: Resume la comparación decisiva entre empuje aplicado y capacidad de adherencia del contacto.
      en: It summarizes the decisive comparison between the applied drive and the contact adhesion capacity.
    constraints:
      - modelo horizontal simple
      - una sola fuerza tangencial dominante
      - comparación de módulos
    validity:
      es: Válida cuando el reposo puede romperse por una fuerza tangencial única aplicada sobre una superficie horizontal.
      en: Valid when rest may be broken by a single tangential force applied on a horizontal surface.
    dimension_check: "[N] = [1][N]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria.md, ejemplos.md]
    interpretation_tags: [transicion, criterio, cambio_de_regimen]
    result_semantics:
      target: F_ext_crit
      kind: critical_value
      sign_meaning:
        es: Se interpreta como módulo crítico del empuje necesario para abandonar el reposo.
        en: It is interpreted as the critical magnitude of the drive needed to leave rest.
      absolute_value_meaning:
        es: Su valor absoluto marca la frontera entre sostener el reposo y comenzar a deslizar.
        en: Its absolute value marks the frontier between maintaining rest and starting to slide.
    domain_checks:
      - id: coeficiente_estatico_valido
        expr: mu_e >= 0
        message:
          es: El coeficiente estático debe ser no negativo.
          en: The static coefficient must be non-negative.
    coherence_checks:
      - id: fuerza_critica_no_negativa
        expr: F_ext_crit >= 0
        message:
          es: La fuerza crítica no puede ser negativa.
          en: The critical force cannot be negative.
    graph_implications: []
    pedagogical_triggers:
      - id: mezclar_umbral_y_resultante
        detect_when: F_ext_crit >= 0
        message:
          es: Este valor decide el cambio de régimen; todavía no es la resultante dinámica ni la aceleración.
          en: This value decides the regime change; it is not yet the dynamic resultant or the acceleration.

  - id: aceleracion_dinamica
    title:
      es: Aceleración en régimen de deslizamiento
      en: Acceleration in the sliding regime
    equation: a = (F_ext - mu_c*N)/m
    latex: a = \\frac{F_{ext} - \\mu_c N}{m}
    rearrangements:
      - target: a
        equation: a = (F_ext - mu_c*N)/m
        latex: a = \\frac{F_{ext} - \\mu_c N}{m}
    category: fundamental
    relation_type: constitutive_relation
    physical_meaning:
      es: Expresa la respuesta dinámica una vez que el sistema ya desliza y la fricción pasa a ser cinética.
      en: It expresses the dynamic response once the system is already sliding and friction becomes kinetic.
    constraints:
      - régimen cinético confirmado
      - superficie horizontal
      - coeficiente cinético constante
    validity:
      es: Válida solo después de comprobar que la fuerza aplicada supera el umbral estático y el modelo sigue siendo unidimensional.
      en: Valid only after checking that the applied force exceeds the static threshold and the model remains one-dimensional.
    dimension_check: "[m/s^2] = ([N] - [1][N])/[kg]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria.md, ejemplos.md]
    interpretation_tags: [dinamica, deslizamiento, respuesta]
    result_semantics:
      target: a
      kind: dynamic_result
      sign_meaning:
        es: El signo indica el sentido de la aceleración respecto al eje elegido.
        en: The sign indicates the direction of acceleration relative to the chosen axis.
      absolute_value_meaning:
        es: Su valor absoluto mide la intensidad del cambio de velocidad en el régimen cinético.
        en: Its absolute value measures the intensity of the velocity change in the kinetic regime.
    domain_checks:
      - id: masa_valida
        expr: m > 0
        message:
          es: La masa debe ser positiva para que la aceleración sea interpretable.
          en: Mass must be positive for the acceleration to be interpretable.
      - id: coeficiente_cinetico_valido
        expr: mu_c >= 0
        message:
          es: El coeficiente cinético debe ser no negativo.
          en: The kinetic coefficient must be non-negative.
    coherence_checks:
      - id: mantener_regimen_kinetico
        expr: F_ext >= mu_c*N
        message:
          es: El empuje debe ser comparable o superior al rozamiento cinético en el sentido elegido.
          en: The drive must be comparable to or larger than kinetic friction in the chosen direction.
    graph_implications: []
    pedagogical_triggers:
      - id: aplicar_segunda_ley_antes_del_umbral
        detect_when: a == (F_ext - mu_c*N)/m
        message:
          es: Esta ecuación solo se usa después de decidir que el sistema desliza; no sustituye el test del régimen estático.
          en: This equation is only used after deciding that the system slides; it does not replace the static-regime test.
  - id: friccion_estatica_reposo
    title:
      es: Fuerza de rozamiento en reposo
      en: Friction force at rest
    equation: f_r = F_ext
    latex: f_r = F_{ext}
    rearrangements:
      - target: f_r
        equation: f_r = F_ext
        latex: f_r = F_{ext}
    category: fundamental
    relation_type: equilibrium_relation
    physical_meaning:
      es: En el régimen estático, la fricción se ajusta exactamente para anular la fuerza aplicada.
      en: In the static regime, friction adjusts exactly to cancel the applied force.
    constraints:
      - régimen estático confirmado (F_ext < f_emax)
      - sistema en equilibrio
    validity:
      es: Válida mientras no se supere el umbral de deslizamiento.
      en: Valid as long as the sliding threshold is not exceeded.
    dimension_check: "[N] = [N]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria.md, ejemplos.md]
    interpretation_tags: [equilibrio, rozamiento_estatico, ajuste]
    result_semantics:
      target: f_r
      kind: reaction
      sign_meaning:
        es: Se opone al sentido de la fuerza aplicada.
        en: Opposes the direction of the applied force.
      absolute_value_meaning:
        es: Magnitud necesaria para mantener el reposo.
        en: Magnitude needed to maintain rest.
    domain_checks:
      - id: fuerza_dentro_del_umbral
        expr: abs(F_ext) <= f_emax
        message:
          es: La fuerza aplicada no puede superar el máximo estático en este modelo de reposo.
          en: The applied force cannot exceed the static maximum in this rest model.
    coherence_checks: []
    graph_implications: []
    pedagogical_triggers:
      - id: rozamiento_igual_a_umbral_siempre
        detect_when: f_r == f_emax
        message:
          es: "¡Cuidado! El rozamiento solo vale f_emax en el instante justo antes de deslizar. Aquí vale simplemente f_r = F_ext."
          en: "Watch out! Friction only equals f_emax at the very instant before sliding. here it is simply f_r = F_ext."

  - id: friccion_cinetica
    title:
      es: Fuerza de rozamiento cinético
      en: Kinetic friction force
    equation: f_r = mu_c*N
    latex: f_r = \\mu_c N
    rearrangements:
      - target: f_r
        equation: f_r = mu_c*N
        latex: f_r = \\mu_c N
    category: fundamental
    relation_type: constitutive_relation
    physical_meaning:
      es: Una vez que hay deslizamiento, la fricción toma un valor constante proporcional a la normal.
      en: Once there is sliding, friction takes a constant value proportional to the normal force.
    constraints:
      - régimen cinético confirmado (F_ext > f_emax)
      - superficies en movimiento relativo
    validity:
      es: Válida durante el deslizamiento macroscópico.
      en: Valid during macroscopic sliding.
    dimension_check: "[N] = [1][N]"
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria.md, ejemplos.md]
    interpretation_tags: [rozamiento_cinetico, deslizamiento, disipacion]
    result_semantics:
      target: f_r
      kind: constant_friction
      sign_meaning:
        es: Se opone siempre a la velocidad relativa.
        en: Always opposes relative velocity.
      absolute_value_meaning:
        es: Valor constante de la resistencia al avance.
        en: Constant value of the resistance to motion.
    domain_checks:
      - id: mu_c_valido
        expr: mu_c >= 0
        message:
          es: El coeficiente cinético debe ser no negativo.
          en: The kinetic coefficient must be non-negative.
    coherence_checks:
      - id: mu_c_menor_que_mu_e
        expr: mu_c <= mu_e
        message:
          es: "Normalmente mu_c <= mu_e. Revisa si los coeficientes están invertidos."
          en: "Usually mu_c <= mu_e. Check if coefficients are swapped."
    graph_implications: []
    pedagogical_triggers: []
`;export{e as default};
