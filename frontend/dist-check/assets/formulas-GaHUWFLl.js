const n=`\uFEFFversion: 1
formulas:
- id: descomposicion_paralela
  title:
    es: Componente paralela del peso
    en: Parallel weight component
  equation: P_par = m * g * sin(theta)
  latex: 'P_par = m g \\sin(\\theta)'
  rearrangements:
  - target: P_par
    equation: P_par = m * g * sin(theta)
    latex: 'P_par = m g \\sin(\\theta)'
  - target: g
    equation: g = P_par / (m * sin(theta))
    latex: 'g = \\frac{P_par}{m\\sin(\\theta)}'
  category: fundamental
  relation_type: geometric_interpretation
  physical_meaning:
    es: Proyección del peso responsable de acelerar al bloque sobre la rampa.
    en: Projection of weight responsible for accelerating the block on the incline.
  constraints:
    es: Ángulo medido respecto de la horizontal y contacto continuo.
    en: Angle measured from horizontal and sustained contact.
  validity:
    es: Modelo de rampa rígida sin rozamiento.
    en: Rigid-ramp frictionless model.
  dimension_check: '[MLT^-2] = [M][LT^-2][1]'
  calculable: true
  motivo_no_calculable: No aplica.
  used_in:
  - teoria.md
  - ejemplos.md
  interpretation_tags:
  - decomposition
  - driving_force
  result_semantics:
    target: P_par
    kind: scalar
    sign_meaning:
      es: Con eje positivo rampa abajo, se reporta como magnitud positiva.
      en: With downhill-positive axis, it is reported as a positive magnitude.
    absolute_value_meaning:
      es: Intensidad del empuje gravitatorio efectivo en la dirección de movimiento.
      en: Intensity of effective gravitational drive along motion direction.
  domain_checks:
  - condition: m > 0 and g > 0 and 0 <= theta and theta <= pi/2
    message:
      es: Verificar masa, gravedad y rango geométrico del ángulo.
      en: Check mass, gravity, and geometric angle range.
  coherence_checks:
  - check: P_par <= m * g
    warning:
      es: Si P_par supera mg hay error de unidades o trigonometría.
      en: If P_par exceeds mg, there is a units or trigonometry error.
  graph_implications:
  - if: theta increases
    then:
      es: La componente paralela crece y aumenta la aceleración.
      en: Parallel component grows and acceleration increases.
  pedagogical_triggers:
  - condition: theta == 0
    hint:
      es: En horizontal no hay componente motriz del peso.
      en: In horizontal setup there is no driving weight component.

- id: descomposicion_perpendicular
  title:
    es: Componente perpendicular del peso
    en: Perpendicular weight component
  equation: P_perp = m * g * cos(theta)
  latex: 'P_perp = m g \\cos(\\theta)'
  rearrangements:
  - target: P_perp
    equation: P_perp = m * g * cos(theta)
    latex: 'P_perp = m g \\cos(\\theta)'
  - target: theta
    equation: theta = arccos(P_perp / (m * g))
    latex: '\\theta = \\arccos\\!\\left(\\frac{P_perp}{m g}\\right)'
  category: fundamental
  relation_type: geometric_interpretation
  physical_meaning:
    es: Proyección del peso que determina la compresión contra el plano.
    en: Weight projection that determines compression against the incline.
  constraints:
    es: Contacto continuo sin separación del bloque.
    en: Continuous contact without block detachment.
  validity:
    es: Modelo 2D con gravedad uniforme.
    en: 2D model with uniform gravity.
  dimension_check: '[MLT^-2] = [M][LT^-2][1]'
  calculable: true
  motivo_no_calculable: No aplica.
  used_in:
  - teoria.md
  - ejemplos.md
  interpretation_tags:
  - decomposition
  - contact
  result_semantics:
    target: P_perp
    kind: scalar
    sign_meaning:
      es: Se interpreta como magnitud de compresión normal.
      en: Interpreted as normal compression magnitude.
    absolute_value_meaning:
      es: Nivel de fuerza de apoyo necesario para mantener contacto.
      en: Support-force level needed to maintain contact.
  domain_checks:
  - condition: m > 0 and g > 0 and 0 <= theta and theta <= pi/2
    message:
      es: Validar dominio físico de parámetros.
      en: Validate physical parameter domain.
  coherence_checks:
  - check: P_perp >= 0
    warning:
      es: P_perp no puede ser negativa en esta convención.
      en: P_perp cannot be negative in this convention.
  graph_implications:
  - if: theta increases
    then:
      es: La componente perpendicular disminuye y la normal baja.
      en: Perpendicular component decreases and normal lowers.
  pedagogical_triggers:
  - condition: theta > 1.4
    hint:
      es: Cerca de vertical, la normal se acerca a cero.
      en: Near vertical, normal approaches zero.

- id: normal_plano_ideal
  title:
    es: Fuerza normal en plano ideal
    en: Normal force on ideal incline
  equation: N = m * g * cos(theta)
  latex: 'N = m g \\cos(\\theta)'
  rearrangements:
  - target: N
    equation: N = m * g * cos(theta)
    latex: 'N = m g \\cos(\\theta)'
  - target: m
    equation: m = N / (g * cos(theta))
    latex: 'm = \\frac{N}{g\\cos(\\theta)}'
  category: state
  relation_type: equilibrium_relation
  physical_meaning:
    es: En eje perpendicular no hay aceleración, así que la normal iguala P_perp.
    en: Along normal axis there is no acceleration, so normal equals P_perp.
  constraints:
    es: Sin fuerzas externas adicionales en eje normal.
    en: No additional external forces on normal axis.
  validity:
    es: Rampa rígida y contacto sin salto.
    en: Rigid incline and no contact loss.
  dimension_check: '[MLT^-2] = [M][LT^-2][1]'
  calculable: true
  motivo_no_calculable: No aplica.
  used_in:
  - teoria.md
  - ejemplos.md
  interpretation_tags:
  - normal
  - support
  result_semantics:
    target: N
    kind: scalar
    sign_meaning:
      es: Magnitud positiva de reacción del apoyo.
      en: Positive support-reaction magnitude.
    absolute_value_meaning:
      es: Intensidad de contacto entre bloque y plano.
      en: Contact intensity between block and incline.
  domain_checks:
  - condition: m > 0 and g > 0 and 0 <= theta and theta <= pi/2
    message:
      es: Revisar magnitudes básicas y ángulo físico.
      en: Check basic magnitudes and physical angle.
  coherence_checks:
  - check: N <= m * g
    warning:
      es: Si N supera mg en este modelo, hay inconsistencia.
      en: If N exceeds mg in this model, there is inconsistency.
  graph_implications:
  - if: theta approaches pi/2
    then:
      es: El vector normal se acorta hasta casi desaparecer.
      en: Normal vector shrinks until nearly vanishing.
  pedagogical_triggers:
  - condition: abs(N - m*g) < 1e-6
    hint:
      es: Ese valor corresponde a un plano casi horizontal.
      en: That value corresponds to a nearly horizontal plane.

- id: aceleracion_plano_ideal
  title:
    es: Aceleración en plano inclinado sin rozamiento
    en: Acceleration on frictionless incline
  equation: a = g * sin(theta)
  latex: 'a = g \\sin(\\theta)'
  rearrangements:
  - target: a
    equation: a = g * sin(theta)
    latex: 'a = g \\sin(\\theta)'
  - target: theta
    equation: theta = arcsin(a / g)
    latex: '\\theta = \\arcsin\\!\\left(\\frac{a}{g}\\right)'
  - target: g
    equation: g = a / sin(theta)
    latex: 'g = \\frac{a}{\\sin(\\theta)}'
  category: dynamic
  relation_type: physical_law
  physical_meaning:
    es: Relación causal central entre geometría de la rampa y respuesta dinámica.
    en: Core causal relation between incline geometry and dynamic response.
  constraints:
    es: Sin rozamiento, sin empuje adicional, sin pérdidas aerodinámicas dominantes.
    en: No friction, no extra push, and no dominant aerodynamic losses.
  validity:
    es: Modelo ideal de primer orden para pendiente rígida.
    en: First-order ideal model for rigid incline.
  dimension_check: '[LT^-2] = [LT^-2][1]'
  calculable: true
  motivo_no_calculable: No aplica.
  used_in:
  - teoria.md
  - ejemplos.md
  interpretation_tags:
  - acceleration
  - geometry
  result_semantics:
    target: a
    kind: scalar
    sign_meaning:
      es: Con convenio rampa abajo, el valor es no negativo.
      en: Under downhill convention, value is non-negative.
    absolute_value_meaning:
      es: Cambio de velocidad por unidad de tiempo sobre el plano.
      en: Change of speed per unit time along the incline.
  domain_checks:
  - condition: g > 0 and 0 <= theta and theta <= pi/2
    message:
      es: Ángulo y gravedad deben permanecer en dominio físico.
      en: Angle and gravity must remain in physical domain.
  coherence_checks:
  - check: a <= g and a >= 0
    warning:
      es: En este modelo ideal debe cumplirse 0 <= a <= g.
      en: In this ideal model it must hold that 0 <= a <= g.
  graph_implications:
  - if: theta increases
    then:
      es: La curva a(theta) crece de forma monótona.
      en: a(theta) curve grows monotonically.
  pedagogical_triggers:
  - condition: theta == 1.57079632679
    hint:
      es: Límite de caída libre, con a aproximadamente igual a g.
      en: Free-fall limit, with a approximately equal to g.

- id: velocidad_final_desde_reposo
  title:
    es: Velocidad final desde reposo
    en: Final speed from rest
  equation: v_f = sqrt(2 * a * L)
  latex: 'v_f = \\sqrt{2 a L}'
  rearrangements:
  - target: v_f
    equation: v_f = sqrt(2 * a * L)
    latex: 'v_f = \\sqrt{2 a L}'
  - target: a
    equation: a = v_f^2 / (2 * L)
    latex: 'a = \\frac{v_f^2}{2L}'
  category: kinematic
  relation_type: derived_relation
  physical_meaning:
    es: Conecta la aceleración constante con la rapidez de salida tras recorrer L.
    en: Connects constant acceleration with exit speed after traveling L.
  constraints:
    es: Condición inicial de reposo y aceleración constante.
    en: Rest initial condition and constant acceleration.
  validity:
    es: Tramo recto de rampa sin cambios de régimen.
    en: Straight incline segment without regime changes.
  dimension_check: '[LT^-1] = sqrt([LT^-2][L])'
  calculable: true
  motivo_no_calculable: No aplica.
  used_in:
  - teoria.md
  - ejemplos.md
  interpretation_tags:
  - kinematics
  - speed
  result_semantics:
    target: v_f
    kind: scalar
    sign_meaning:
      es: Se reporta como módulo de rapidez final.
      en: Reported as final speed magnitude.
    absolute_value_meaning:
      es: Intensidad de movimiento al final del tramo.
      en: Motion intensity at end of segment.
  domain_checks:
  - condition: a >= 0 and L > 0
    message:
      es: La raíz exige aceleración no negativa y recorrido positivo.
      en: Square root requires non-negative acceleration and positive distance.
  coherence_checks:
  - check: v_f >= 0
    warning:
      es: Rapidez final no puede resultar negativa.
      en: Final speed cannot be negative.
  graph_implications:
  - if: L increases at fixed a
    then:
      es: La rapidez final aumenta como raíz cuadrada de L.
      en: Final speed increases as square root of L.
  pedagogical_triggers:
  - condition: L < 0.01
    hint:
      es: Para trayectos muy cortos, el cambio de velocidad será pequeño.
      en: For very short paths, speed change will be small.

- id: tiempo_deslizamiento
  title:
    es: Tiempo de descenso desde reposo
    en: Descent time from rest
  equation: t = sqrt((2 * L) / a)
  latex: 't = \\sqrt{\\frac{2L}{a}}'
  rearrangements:
  - target: t
    equation: t = sqrt((2 * L) / a)
    latex: 't = \\sqrt{\\frac{2L}{a}}'
  - target: L
    equation: L = 0.5 * a * t^2
    latex: 'L = \\frac{1}{2} a t^2'
  category: kinematic
  relation_type: derived_relation
  physical_meaning:
    es: Determina cuánto tarda el bloque en completar una distancia sobre la rampa.
    en: Determines how long the block takes to complete a distance on the incline.
  constraints:
    es: Movimiento uniformemente acelerado con partida desde reposo.
    en: Uniformly accelerated motion starting from rest.
  validity:
    es: Sin cambios bruscos de inclinación ni fuerzas adicionales.
    en: No abrupt inclination changes or additional forces.
  dimension_check: '[T] = sqrt([L]/[LT^-2])'
  calculable: true
  motivo_no_calculable: No aplica.
  used_in:
  - teoria.md
  - ejemplos.md
  interpretation_tags:
  - kinematics
  - timing
  result_semantics:
    target: t
    kind: scalar
    sign_meaning:
      es: Se interpreta como duración positiva del proceso.
      en: Interpreted as positive process duration.
    absolute_value_meaning:
      es: Escala temporal de descenso para una rampa dada.
      en: Descent time scale for a given incline.
  domain_checks:
  - condition: L > 0 and a > 0
    message:
      es: Deben ser positivos para evitar tiempos no físicos.
      en: They must be positive to avoid non-physical times.
  coherence_checks:
  - check: t > 0
    warning:
      es: El tiempo debe ser estrictamente positivo.
      en: Time must be strictly positive.
  graph_implications:
  - if: a increases at fixed L
    then:
      es: El tiempo disminuye con ley de raíz inversa.
      en: Time decreases following inverse-square-root law.
  pedagogical_triggers:
  - condition: a < 0.1
    hint:
      es: Con aceleración muy baja, el descenso será muy lento.
      en: With very low acceleration, descent will be very slow.\r
`;export{n as default};
