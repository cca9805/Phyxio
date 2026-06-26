const n=`\uFEFFversion: 1
formulas:
- id: torque_por_angulo
  title:
    es: Torque por angulo entre r y F
    en: Torque from angle between r and F
  equation: tau = r*F*sin(theta)
  latex: '\\tau = r F \\sin(\\theta)'
  rearrangements:
  - target: tau
    equation: tau = r*F*sin(theta)
    latex: '\\tau = r F \\sin(\\theta)'
  - target: F
    equation: F = tau/(r*sin(theta))
    latex: 'F = \\frac{\\tau}{r\\sin(\\theta)}'
  - target: r
    equation: r = tau/(F*sin(theta))
    latex: 'r = \\frac{\\tau}{F\\sin(\\theta)}'
  - target: theta
    equation: theta = arcsin(tau/(r*F))
    latex: '\\theta = \\arcsin\\!\\left(\\\\frac{\\\\tau}{r F}\\right)'
  category: fundamental
  relation_type: geometric_interpretation
  physical_meaning:
    es: Relaciona torque con fuerza, distancia radial y orientacion relativa.
    en: Relates torque to force, radial distance, and relative orientation.
  constraints:
  - expr: r > 0
    message:
      es: r debe ser positiva para representar una distancia fisica.
      en: r must be positive as a physical distance.
  - expr: abs(tau) <= abs(r*F)
    message:
      es: El modulo de tau no puede superar a r*F.
      en: Tau magnitude cannot exceed r*F.
  validity:
    es: Valida para cuerpo rigido con eje fijo y fuerza aplicada en un punto definido.
    en: Valid for rigid body with fixed axis and force applied at a defined point.
  dimension_check: '[M*L^2/T^2] = [L]*[M*L/T^2]'
  calculable: true
  motivo_no_calculable: null
  used_in: [teoria, ejemplos, aplicaciones]
  interpretation_tags: [torque, geometria, signo]
  result_semantics:
    target: tau
    kind: scalar
    sign_meaning:
      es: El signo depende del sentido de giro asumido como positivo.
      en: Sign depends on which rotation sense is set positive.
    absolute_value_meaning:
      es: El modulo expresa la intensidad de efecto rotacional.
      en: Magnitude expresses rotational effect intensity.
  domain_checks:
  - condition: r > 0
    message:
      es: Revisar que r sea positiva y coherente con el esquema.
      en: Check that r is positive and consistent with diagram.
  coherence_checks:
  - check: abs(tau) <= abs(r*F)
    warning:
      es: Si no se cumple, hay error de unidades, angulo o signos.
      en: If not satisfied, there is a units, angle, or sign error.
  graph_implications:
  - if: graph_available
    then:
      es: Curvas de tau deben seguir tendencia senoidal al variar theta.
      en: Tau curves should follow sinusoidal trend when theta varies.
  pedagogical_triggers:
  - condition: wrong_angle_reference
    hint:
      es: Confirmar que theta se mide entre r y F, no contra la horizontal.
      en: Confirm theta is measured between r and F, not from horizontal.

- id: torque_brazo
  title:
    es: Torque por brazo de palanca
    en: Torque from lever arm
  equation: tau = F*b
  latex: '\\tau = F b'
  rearrangements:
  - target: tau
    equation: tau = F*b
    latex: '\\tau = F b'
  - target: F
    equation: F = tau/b
    latex: 'F = \\frac{\\tau}{b}'
  - target: b
    equation: b = tau/F
    latex: 'b = \\frac{\\tau}{F}'
  category: structural
  relation_type: geometric_interpretation
  physical_meaning:
    es: Forma operacional directa cuando se conoce la distancia perpendicular efectiva.
    en: Direct operational form when effective perpendicular distance is known.
  constraints:
  - expr: b >= 0
    message:
      es: b es una distancia perpendicular no negativa.
      en: b is a non-negative perpendicular distance.
  validity:
    es: Equivalente a la forma angular cuando b = r*sin(theta).
    en: Equivalent to angular form when b = r*sin(theta).
  dimension_check: '[M*L^2/T^2] = [M*L/T^2]*[L]'
  calculable: true
  motivo_no_calculable: null
  used_in: [teoria, ejemplos, aplicaciones]
  interpretation_tags: [torque, brazo, geometria]
  result_semantics:
    target: tau
    kind: scalar
    sign_meaning:
      es: El signo depende del sentido de giro adoptado.
      en: Sign depends on adopted rotation sense.
    absolute_value_meaning:
      es: El modulo crece con la fuerza y con el brazo efectivo.
      en: Magnitude grows with force and effective arm.
  domain_checks:
  - condition: b >= 0
    message:
      es: Verificar que b sea una distancia perpendicular real.
      en: Verify b is a real perpendicular distance.
  coherence_checks:
  - check: abs(tau) <= abs(F*max(b,0))
    warning:
      es: Resultado incoherente con datos de entrada y geometria.
      en: Result inconsistent with inputs and geometry.
  graph_implications:
  - if: graph_available
    then:
      es: Variar b a F constante produce respuesta lineal en tau.
      en: Varying b at constant F yields linear tau response.
  pedagogical_triggers:
  - condition: confusion_r_vs_b
    hint:
      es: Diferenciar distancia radial r y brazo perpendicular b.
      en: Distinguish radial distance r from perpendicular arm b.

- id: torque_plano
  title:
    es: Torque escalar en el plano
    en: Planar scalar torque
  equation: tau_z = x*F_y - y*F_x
  latex: '\\tau_z = x F_y - y F_x'
  rearrangements:
  - target: tau_z
    equation: tau_z = x*F_y - y*F_x
    latex: '\\tau_z = x F_y - y F_x'
  category: derived
  relation_type: definition
  physical_meaning:
    es: Expresa el componente de torque alrededor de z usando coordenadas planas.
    en: Expresses z torque component from planar coordinates.
  constraints: null
  validity:
    es: Valida para problemas en plano xy con eje z perpendicular.
    en: Valid for xy-plane problems with z axis normal to plane.
  dimension_check: '[M*L^2/T^2] = [L]*[M*L/T^2] - [L]*[M*L/T^2]'
  calculable: true
  motivo_no_calculable: null
  used_in: [teoria, ejemplos]
  interpretation_tags: [torque_plano, signos, coordenadas]
  result_semantics:
    target: tau_z
    kind: scalar
    sign_meaning:
      es: Signo positivo o negativo segun regla de mano derecha.
      en: Positive or negative sign by right-hand rule.
    absolute_value_meaning:
      es: El modulo indica intensidad de tendencia de giro.
      en: Magnitude indicates rotational tendency intensity.
  domain_checks:
  - condition: axes_declared
    message:
      es: Definir ejes antes de sustituir x, y, F_x y F_y.
      en: Declare axes before substituting x, y, F_x, and F_y.
  coherence_checks:
  - check: units_consistent
    warning:
      es: Si tau_z no queda en N*m, revisar unidades y conversiones.
      en: If tau_z is not in N*m, review units and conversions.
  graph_implications:
  - if: graph_available
    then:
      es: El signo de tau_z debe coincidir con el sentido de giro mostrado.
      en: Tau_z sign must match shown rotation direction.
  pedagogical_triggers:
  - condition: sign_flip_without_reason
    hint:
      es: No invertir signos al pasar de cuadrante sin justificar orientacion.
      en: Do not flip signs between quadrants without orientation rationale.

- id: segunda_ley_rotacional
  title:
    es: Segunda ley rotacional
    en: Rotational second law
  equation: tau = I*alpha
  latex: '\\tau = I\\alpha'
  rearrangements:
  - target: alpha
    equation: alpha = tau/I
    latex: '\\alpha = \\frac{\\tau}{I}'
  - target: I
    equation: I = tau/alpha
    latex: 'I = \\frac{\\tau}{\\alpha}'
  category: fundamental
  relation_type: differential_relation
  physical_meaning:
    es: Conecta causa rotacional neta con respuesta angular del cuerpo.
    en: Connects net rotational cause with body angular response.
  constraints:
  - expr: I > 0
    message:
      es: I debe ser positiva para un sistema fisico.
      en: I must be positive for a physical system.
  validity:
    es: Requiere cuerpo rigido y eje de referencia bien definido.
    en: Requires rigid body and a well-defined reference axis.
  dimension_check: '[M*L^2/T^2] = [M*L^2]*[1/T^2]'
  calculable: true
  motivo_no_calculable: null
  used_in: [teoria, ejemplos, aplicaciones]
  interpretation_tags: [dinamica_rotacional, inercia, respuesta]
  result_semantics:
    target: alpha
    kind: scalar
    sign_meaning:
      es: El signo de alpha sigue el signo de tau para I positiva.
      en: Alpha sign follows tau sign when I is positive.
    absolute_value_meaning:
      es: Mayor alpha implica cambio de giro mas rapido.
      en: Larger alpha means faster change in spin rate.
  domain_checks:
  - condition: I > 0
    message:
      es: Revisar eje y geometria si I no es positiva.
      en: Review axis and geometry if I is not positive.
  coherence_checks:
  - check: sign(alpha) == sign(tau)
    warning:
      es: Si signos difieren, revisar convenio y datos.
      en: If signs differ, review convention and data.
  graph_implications:
  - if: graph_available
    then:
      es: Pendiente angular debe aumentar con torque neto sostenido.
      en: Angular slope should increase with sustained net torque.
  pedagogical_triggers:
  - condition: confusion_tau_vs_force
    hint:
      es: No mezclar segunda ley lineal con segunda ley rotacional.
      en: Do not mix linear second law with rotational second law.
ui:
  default_formula: torque_por_angulo
  groups:
  - title:
      es: Calculo geometrico
      en: Geometric computation
    items: [torque_por_angulo, torque_brazo, torque_plano]
  - title:
      es: Conexion dinamica
      en: Dynamic connection
    items: [segunda_ley_rotacional]\r
\r
\r
\r
`;export{n as default};
