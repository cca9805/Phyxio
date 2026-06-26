const e=`version: 1.0.0
leaf_id: extensivas
ui:
  default_formula: criterio_extensividad
formulas:
  - id: criterio_extensividad
    title: { es: Criterio de escalado extensivo, en: Extensive scaling criterion }
    equation: X_ext(lambda_escala sistema) = lambda_escala X_ext(sistema)
    latex: "X(\\\\lambda sistema)=\\\\lambda X(sistema)"
    rearrangements:
      - { target: X_ext, equation: X_ext_scaled = lambda_escala X_ext, latex: "X_{scaled}=\\\\lambda X" }
      - { target: lambda_escala, equation: lambda_escala = X_ext_scaled / X_ext, latex: "\\\\lambda=\\\\frac{X_{scaled}}{X}" }
    category: fundamental
    relation_type: scaling_law
    physical_meaning: { es: Una magnitud extensiva se multiplica por el mismo factor que el tamano del sistema., en: An extensive magnitude is multiplied by the same factor as system size. }
    constraints: [copias equivalentes, misma composicion, mismo estado intensivo]
    validity: { es: Valida al escalar sistemas equivalentes sin cambiar sus variables intensivas., en: Valid when scaling equivalent systems without changing intensive variables. }
    dimension_check: { es: "El factor [[lambda_escala]] es adimensional; ambos lados conservan la dimension de [[X_ext]].", en: "The factor [[lambda_escala]] is dimensionless; both sides keep the dimension of [[X_ext]]." }
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion]
    interpretation_tags: [escala, extensividad, tamano]
    result_semantics:
      target: X_ext
      kind: scaled_total
      sign_meaning: { es: Depende de la magnitud concreta y de su referencia., en: Depends on the concrete magnitude and its reference. }
      absolute_value_meaning: { es: Cantidad total tras escalar el sistema., en: Total amount after scaling the system. }
    domain_checks:
      - { condition: "lambda_escala > 0", message: { es: "Escala fisica positiva.", en: "Positive physical scale." } }
    coherence_checks:
      - { check: "duplicar sistema duplica X_ext", es: "Cumple el test basico de extensividad.", en: "Passes the basic extensivity test." }
    graph_implications:
      - { channel: scale_line, mapping: "La recta de [[X_ext]] tiene pendiente proporcional al valor base." }
    pedagogical_triggers:
      - { error: "Confundir extensiva con intensiva", detection: "X_ext no cambia al duplicar", message: { es: "Si no cambia al duplicar, no es extensiva.", en: "If it does not change when doubled, it is not extensive." } }
  - id: aditividad_extensiva
    title: { es: Aditividad de magnitudes extensivas, en: Additivity of extensive magnitudes }
    equation: X_total = X_1 + X_2
    latex: "X_{total}=X_1+X_2"
    rearrangements:
      - { target: X_ext, equation: X_total = X_1 + X_2, latex: "X_{total}=X_1+X_2" }
      - { target: U, equation: U_total = U_1 + U_2, latex: "U_{total}=U_1+U_2" }
      - { target: V, equation: V_total = V_1 + V_2, latex: "V_{total}=V_1+V_2" }
      - { target: m, equation: m_total = m_1 + m_2, latex: "m_{total}=m_1+m_2" }
      - { target: S, equation: S_total = S_1 + S_2, latex: "S_{total}=S_1+S_2" }
    category: fundamental
    relation_type: additivity
    physical_meaning: { es: Al juntar subsistemas independientes, las cantidades extensivas totales se suman., en: When independent subsystems are joined, total extensive quantities add. }
    constraints: [subsistemas compatibles, frontera interna eliminada, interacciones de borde despreciables]
    validity: { es: Valida cuando los efectos de superficie o interaccion entre partes no dominan., en: Valid when surface or interaction effects between parts do not dominate. }
    dimension_check: { es: "Se suman magnitudes de la misma dimension.", en: "Magnitudes with the same dimension are added." }
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion]
    interpretation_tags: [aditividad, total, subsistemas]
    result_semantics:
      target: X_ext
      kind: total_quantity
      sign_meaning: { es: Depende de la magnitud concreta., en: Depends on the concrete magnitude. }
      absolute_value_meaning: { es: Total del sistema compuesto.", en: "Total of the composite system." }
    domain_checks:
      - { condition: "m >= 0 and V >= 0", message: { es: "Masa y volumen fisicos no negativos.", en: "Physical mass and volume are non-negative." } }
    coherence_checks:
      - { check: "misma magnitud en todos los sumandos", es: "No sumar propiedades distintas.", en: "Do not add different properties." }
    graph_implications:
      - { channel: additivity, mapping: "Dos copias aparecen como doble altura en la grafica." }
    pedagogical_triggers:
      - { error: "Sumar temperaturas como si fueran extensivas", detection: "T_total = T_1 + T_2", message: { es: "La temperatura no se suma al juntar sistemas iguales.", en: "Temperature is not added when equal systems are joined." } }
  - id: densidad
    title: { es: Densidad como cociente de extensivas, en: Density as a ratio of extensives }
    equation: rho = m / V
    latex: "\\\\rho=\\\\frac{m}{V}"
    rearrangements:
      - { target: rho, equation: rho = m / V, latex: "\\\\rho=\\\\frac{m}{V}" }
      - { target: m, equation: m = rho V, latex: "m=\\\\rho V" }
      - { target: V, equation: V = m / rho, latex: "V=\\\\frac{m}{\\\\rho}" }
    category: derived
    relation_type: normalization
    physical_meaning: { es: Dividir masa total por volumen total produce una propiedad que no depende del tamano en un sistema homogeneo., en: Dividing total mass by total volume produces a property independent of size in a homogeneous system. }
    constraints: [sistema homogeneo, volumen no nulo]
    validity: { es: Valida como propiedad media si la muestra es homogenea o se acepta un promedio.", en: "Valid as an average property if the sample is homogeneous or an average is accepted." }
    dimension_check: { es: "\`[M] / [L³] = [M L⁻³]\`.", en: "\`[M] / [L³] = [M L⁻³]\`." }
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion]
    interpretation_tags: [normalizacion, densidad, intensiva_derivada]
    result_semantics:
      target: rho
      kind: normalized_property
      sign_meaning: { es: Positiva para materia ordinaria.", en: "Positive for ordinary matter." }
      absolute_value_meaning: { es: Concentracion de masa por volumen.", en: "Mass concentration per volume." }
    domain_checks:
      - { condition: "V > 0", message: { es: "El volumen debe ser positivo.", en: "Volume must be positive." } }
    coherence_checks:
      - { check: "rho no cambia al duplicar m y V", es: "El cociente elimina la escala.", en: "The ratio removes scale." }
    graph_implications:
      - { channel: density_flat, mapping: "La densidad queda horizontal al escalar sistemas homogeneos." }
    pedagogical_triggers:
      - { error: "Clasificar rho como extensiva", detection: "rho_scaled = lambda rho", message: { es: "Si m y V crecen juntos, rho queda constante.", en: "If m and V grow together, rho stays constant." } }
  - id: magnitud_especifica
    title: { es: Magnitud especifica por masa, en: Specific magnitude per mass }
    equation: x_esp = X_ext / m
    latex: "x=\\\\frac{X}{m}"
    rearrangements:
      - { target: x_esp, equation: x_esp = X_ext / m, latex: "x=\\\\frac{X}{m}" }
      - { target: X_ext, equation: X_ext = m x_esp, latex: "X=mx" }
      - { target: m, equation: m = X_ext / x_esp, latex: "m=\\\\frac{X}{x}" }
    category: derived
    relation_type: normalization
    physical_meaning: { es: Al dividir una extensiva por masa se obtiene una propiedad comparable entre muestras.", en: "Dividing an extensive by mass gives a property comparable between samples." }
    constraints: [masa positiva, misma referencia de X]
    validity: { es: Valida para comparar sistemas de la misma sustancia o estado comparable.", en: "Valid for comparing systems of the same substance or comparable state." }
    dimension_check: { es: "Dimension de [[X_ext]] dividida por \`[M]\`.", en: "Dimension of [[X_ext]] divided by \`[M]\`." }
    calculable: true
    motivo_no_calculable: ""
    used_in: [teoria, ejemplos, interpretacion]
    interpretation_tags: [especifica, normalizacion, comparacion]
    result_semantics:
      target: x_esp
      kind: specific_property
      sign_meaning: { es: Depende de X y su referencia.", en: "Depends on X and its reference." }
      absolute_value_meaning: { es: Cantidad de X por kg.", en: "Amount of X per kg." }
    domain_checks:
      - { condition: "m > 0", message: { es: "La masa debe ser positiva.", en: "Mass must be positive." } }
    coherence_checks:
      - { check: "x_esp constante al escalar X_ext y m", es: "La propiedad especifica elimina tamano.", en: "The specific property removes size." }
    graph_implications:
      - { channel: specific_flat, mapping: "La magnitud especifica queda constante al duplicar la muestra." }
    pedagogical_triggers:
      - { error: "Comparar U sin dividir por m", detection: "muestras de distinto tamano", message: { es: "Usa una magnitud especifica para comparar estados.", en: "Use a specific magnitude to compare states." } }
`;export{e as default};
