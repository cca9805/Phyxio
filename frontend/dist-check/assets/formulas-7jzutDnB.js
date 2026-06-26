const e=`version: 5
topic:
  id: mareas-y-perturbaciones
  title:
    es: Mareas y perturbaciones
    en: Tides and Perturbations

formulas:
  - id: aceleracion_mareal
    title:
      es: Aceleración de marea de primer orden
      en: First-order tidal acceleration
    equation: am = 2*G*M*R/d^3
    latex: a_{marea} \\approx \\frac{2 G M R}{d^3}
    category: gravitacion_diferencial
    relation_type: approximation
    physical_meaning:
      es: Estima la diferencia de aceleración gravitatoria entre el centro y el borde de un cuerpo extendido.
      en: Estimates the gravitational acceleration difference between the center and edge of an extended body.
    constraints: [G > 0, M > 0, R > 0, d > R]
    validity:
      es: Aproximación de primer orden válida cuando la distancia al perturbador es mucho mayor que el radio del cuerpo afectado.
      en: First-order approximation valid when distance to the perturber is much larger than the affected body's radius.
    dimension_check: "[L/T^2] = [L^3/(M*T^2)]*[M]*[L]/[L^3]"
    calculable: true
    motivo_no_calculable:
      es: No es calculable si falta masa, distancia o radio característico del cuerpo afectado.
      en: It cannot be calculated if mass, distance, or characteristic radius is missing.
    used_in: [comparacion_perturbadores, parametro_perturbativo]
    interpretation_tags: [marea, gradiente, distancia_cubica]
    result_semantics: diferencial_gravitatorio
    domain_checks: [d > R, R > 0, M > 0]
    coherence_checks: [am > 0, am < ac]
    graph_implications: La curva debe decrecer como inversa cúbica al aumentar la distancia.
    pedagogical_triggers: [distancia_cubica, campo_no_uniforme]
    rearrangements:
      - target: am
        equation: am = 2*G*M*R/d^3
      - target: d
        equation: d = (2*G*M*R/am)^(1/3)
      - target: M
        equation: M = am*d^3/(2*G*R)
    variables: [am, G, M, R, d]

  - id: parametro_perturbativo
    title:
      es: Parámetro perturbativo
      en: Perturbative parameter
    equation: eps = ap/ac
    latex: \\varepsilon = \\frac{a_{pert}}{a_{central}}
    category: criterio_validez
    relation_type: ratio
    physical_meaning:
      es: Compara la intensidad de una perturbación con la aceleración central que define el movimiento principal.
      en: Compares the strength of a perturbation with the central acceleration defining the main motion.
    constraints: [ac > 0, ap >= 0]
    validity:
      es: Útil cuando las aceleraciones se expresan como módulos o escalas comparables.
      en: Useful when accelerations are expressed as comparable magnitudes or scales.
    dimension_check: "[1] = [L/T^2]/[L/T^2]"
    calculable: true
    motivo_no_calculable:
      es: No se puede evaluar si la aceleración central es nula o desconocida.
      en: It cannot be evaluated if the central acceleration is zero or unknown.
    used_in: [aceleracion_total_conceptual]
    interpretation_tags: [pequenez, modelo, perturbacion]
    result_semantics: numero_adimensional
    domain_checks: [ac > 0]
    coherence_checks: [eps >= 0]
    graph_implications: Clasifica visualmente si la perturbación es pequeña, moderada o dominante.
    pedagogical_triggers: [comparacion_de_escalas]
    rearrangements:
      - target: eps
        equation: eps = ap/ac
      - target: ap
        equation: ap = eps*ac
      - target: ac
        equation: ac = ap/eps
    variables: [eps, ap, ac]

  - id: comparacion_perturbadores
    title:
      es: Comparación de mareas entre perturbadores
      en: Comparison of tides between perturbers
    equation: am1 = am2*(M1/M2)*(d2/d1)^3
    latex: a_{marea,1}=a_{marea,2}\\frac{M_1}{M_2}\\left(\\frac{d_2}{d_1}\\right)^3
    category: escalado_relativo
    relation_type: scaling
    physical_meaning:
      es: Permite comparar dos contribuciones mareales separando efecto de masa y efecto de distancia.
      en: Compares two tidal contributions by separating mass effect and distance effect.
    constraints: [M1 > 0, M2 > 0, d1 > 0, d2 > 0]
    validity:
      es: Ambos perturbadores deben actuar sobre el mismo cuerpo afectado y dentro de la misma aproximación de primer orden.
      en: Both perturbers must act on the same affected body within the same first-order approximation.
    dimension_check: "[L/T^2] = [L/T^2]*[1]*[1]^3"
    calculable: true
    motivo_no_calculable:
      es: Requiere una contribución de referencia y las dos masas y distancias.
      en: Requires a reference contribution and both masses and distances.
    used_in: [aceleracion_mareal]
    interpretation_tags: [comparacion, escala, inversa_cubica]
    result_semantics: contribucion_relativa
    domain_checks: [d1 > 0, d2 > 0, M1 > 0, M2 > 0]
    coherence_checks: [am1 >= 0, am2 >= 0]
    graph_implications: Permite mostrar dos curvas normalizadas de contribución mareal.
    pedagogical_triggers: [masa_vs_distancia]
    rearrangements:
      - target: am1
        equation: am1 = am2*(M1/M2)*(d2/d1)^3
      - target: am2
        equation: am2 = am1*(M2/M1)*(d1/d2)^3
    variables: [am1, am2, M1, M2, d1, d2]

  - id: torque_mareal_conceptual
    title:
      es: Escalado conceptual del torque mareal
      en: Conceptual scaling of tidal torque
    equation: tau = tau
    latex: \\tau
    category: escalado_rotacional
    relation_type: conceptual_scaling
    physical_meaning:
      es: Indica que una marea con brazo de palanca y desfase puede producir evolución rotacional.
      en: Indicates that a tide with lever arm and phase lag can produce rotational evolution.
    constraints: [tau >= 0]
    validity:
      es: Relación cualitativa de orden de magnitud; requiere modelo de deformación para cálculo cerrado.
      en: Qualitative order-of-magnitude relation; it requires a deformation model for a closed calculation.
    dimension_check: "[M*L^2/T^2] = [M*L^2/T^2]"
    calculable: false
    motivo_no_calculable:
      es: Falta el modelo de fuerza mareal efectiva, desfase y distribución de masa.
      en: The effective tidal force, phase lag, and mass distribution model is missing.
    used_in: []
    interpretation_tags: [torque, disipacion, acoplamiento]
    result_semantics: escala_rotacional
    domain_checks: [tau >= 0]
    coherence_checks: []
    graph_implications: Se interpreta como efecto acumulativo, no como curva primaria de distancia.
    pedagogical_triggers: [limite_modelo_escalar]
    rearrangements: []
    variables: [tau]

  - id: aceleracion_total_conceptual
    title:
      es: Aceleración total con perturbaciones
      en: Total acceleration with perturbations
    equation: a_total_vec = a_central_vec + sum(a_pert_i_vec)
    latex: \\vec a_{total}=\\vec a_{central}+\\sum_i \\vec a_{pert,i}
    category: superposicion_vectorial
    relation_type: conceptual_sum
    physical_meaning:
      es: Recuerda que las perturbaciones se suman como vectores y pueden cambiar dirección, fase y energía orbital.
      en: States that perturbations add as vectors and can change direction, phase, and orbital energy.
    constraints: []
    validity:
      es: Forma conceptual válida en mecánica newtoniana cuando las aceleraciones relevantes son conocidas vectorialmente.
      en: Conceptual form valid in Newtonian mechanics when the relevant accelerations are known as vectors.
    dimension_check: "[L/T^2] = [L/T^2] + [L/T^2]"
    calculable: false
    motivo_no_calculable:
      es: Requiere geometría, signos, fases orbitales y suma vectorial completa.
      en: It requires geometry, signs, orbital phases, and full vector addition.
    used_in: [parametro_perturbativo]
    interpretation_tags: [superposicion, vectorial, orbita_real]
    result_semantics: aceleracion_vectorial_total
    domain_checks: []
    coherence_checks: []
    graph_implications: Justifica mostrar desviaciones respecto al movimiento central ideal.
    pedagogical_triggers: [no_sumar_modulos]
    rearrangements: []
    variables: [ac, ap]

ui:
  default_formula: aceleracion_mareal
  groups:
    - title:
        es: Mareas de primer orden
        en: First-order Tides
      items: [aceleracion_mareal, comparacion_perturbadores]
    - title:
        es: Criterio perturbativo
        en: Perturbative Criterion
      items: [parametro_perturbativo, aceleracion_total_conceptual, torque_mareal_conceptual]
`;export{e as default};
