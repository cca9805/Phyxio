const e=`version: 5
id: interpretacion-polea
leaf_id: polea
nombre:
  es: "Interpretación experta de la física de la polea"
  en: "Expert interpretation of pulley physics"
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: aplicaciones
  parent_id: maquinas-simples
  ruta_relativa: fisica-clasica/mecanica/aplicaciones/maquinas-simples/polea

output_contract:
  sections:
  - summary
  - physical_reading
  - coherence
  - model_validity
  - graph_reading
  - likely_errors
  - next_step

result_blocks:
  summary:
    title:
      es: "Resumen del equilibrio de tramos"
      en: "Rope-segment balance summary"
  physical_reading:
    title:
      es: "Análisis físico profundo"
      en: "Deep physical analysis"
  coherence:
    title:
      es: "Validación de coherencia"
      en: "Coherence validation"
  model_validity:
    title:
      es: "Límites del modelo y suposiciones"
      en: "Model limits and assumptions"
  graph_reading:
    title:
      es: "Lectura del diagrama de poleas"
      en: "Pulley diagram reading"
  likely_errors:
    title:
      es: "Detección proactiva de errores"
      en: "Proactive error detection"
  next_step:
    title:
      es: "Ruta de aprendizaje sugerida"
      en: "Suggested learning path"

ui:
  enabled: true
  display_modes:
  - calculator_inline
  - graph_inline
  - dedicated_tab
  - modal
  labels:
  - pulley_mechanics
  - mechanical_advantage
  - rope_segments
  priority_order:
  - summary_rules
  - physical_reading_rules
  - coherence_rules
  - model_validity_rules
  - graph_rules
  - likely_errors
  - next_step_rules
  inline_limits: 3

dependencies:
  formulas:
  - ley_polea_ideal
  - ley_polea_real
  - aparejo_factorial
  - aparejo_potencial
  - ventaja_mecanica_ideal
  - relacion_desplazamientos
  - balance_energia_polea
  magnitudes:
  - W
  - P
  - n
  - Np
  - eta
  - VM
  - sP
  - sW

global_context:
  physical_domain:
    es: "Estática y cinemática de poleas y aparejos; ventaja mecánica y rendimiento."
    en: "Statics and kinematics of pulleys and tackles; mechanical advantage and efficiency."
  axis_convention:
    es: "Fuerzas verticales hacia arriba positivas; tramos de cuerda contados sobre la polea móvil."
    en: "Upward vertical forces positive; rope segments counted above the moving pulley."
  standard_assumptions:
  - Cuerda inextensible y de masa despreciable.
  - Poleas de masa despreciable frente a la carga principal.
  - Rozamiento solo modelado mediante el rendimiento eta.
  standard_warnings:
  - "Regla de Oro: lo que ganas en fuerza lo pagas en recorrido de cuerda."
  - "Un tramo operado hacia abajo a través de polea fija final no aumenta la ventaja."

targets:
  P:
    magnitude_type: fuerza
    semantic_role:
      es: "Esfuerzo del operador"
      en: "Operator effort"
    summary_rules:
    - id: p_sum_ideal
      when: "result < W / n"
      status: info
      text:
        es: "El esfuerzo es menor que el ideal; verifica si se usó rendimiento."
        en: "Effort is less than ideal; check if efficiency was applied."
    - id: p_sum_ok
      when: "true"
      status: ok
      text:
        es: "El esfuerzo necesario para sostener la carga es [[P]]. El sistema reduce la fuerza en un factor igual al número de tramos efectivos."
        en: "The effort needed to support the load is [[P]]. The system reduces force by a factor equal to the number of effective segments."
    physical_reading_rules:
    - id: p_read_high
      when: "result > W"
      status: danger
      text:
        es: "El esfuerzo supera la carga: el rendimiento es muy bajo o el conteo de tramos es erróneo."
        en: "Effort exceeds the load: efficiency is very low or rope segment count is wrong."
    - id: p_read_normal
      when: "true"
      status: info
      text:
        es: "Cada tramo de cuerda que sostiene [[W]] aporta la misma tensión; [[P]] es la fracción que queda sin anclar al soporte."
        en: "Each rope segment supporting [[W]] contributes equal tension; [[P]] is the fraction not anchored to the support."
    coherence_rules:
    - id: p_coh_neg
      when: "result <= 0"
      status: danger
      text:
        es: "Incoherencia: el esfuerzo debe ser positivo."
        en: "Incoherent: effort must be positive."
    - id: p_coh_ok
      when: "true"
      status: ok
      text:
        es: "El esfuerzo [[P]] es positivo y menor que la carga [[W]], lo cual es coherente."
        en: "Effort [[P]] is positive and less than load [[W]], which is coherent."
    model_validity_rules:
    - id: p_mod_ideal
      when: "true"
      status: info
      text:
        es: "El modelo ideal asume rendimiento 1. Para sistemas reales con rozamiento, usar [[eta]] en la ley real."
        en: "The ideal model assumes efficiency 1. For real systems with friction, use [[eta]] in the real law."
    graph_rules:
    - id: p_graph
      when: "true"
      status: info
      text:
        es: "El vector [[P]] aparece en el diagrama como la flecha de entrada en el extremo libre de la cuerda."
        en: "Vector [[P]] appears in the diagram as the input arrow at the free end of the rope."
    likely_errors:
    - id: p_err_noeta
      when: "true"
      status: warning
      text:
        es: "Error frecuente: ignorar [[eta]] en sistemas reales hace que el cálculo subestime el esfuerzo necesario."
        en: "Common error: ignoring [[eta]] in real systems underestimates the required effort."
    next_step_rules:
    - id: p_next
      when: "true"
      status: info
      text:
        es: "Calcula ahora el recorrido de cuerda necesario [[sP]] para verificar la regla de oro."
        en: "Now calculate the required rope travel [[sP]] to verify the golden rule."

  W:
    magnitude_type: fuerza
    semantic_role:
      es: "Carga o peso a elevar"
      en: "Load or weight to lift"
    summary_rules:
    - id: w_sum_ok
      when: "true"
      status: ok
      text:
        es: "La carga [[W]] obtenida es la resistencia que el sistema debe vencer con los tramos disponibles."
        en: "The load [[W]] obtained is the resistance the system must overcome with the available segments."
    physical_reading_rules:
    - id: w_read_ok
      when: "true"
      status: info
      text:
        es: "[[W]] es la fuerza gravitatoria total. Cada uno de los [[n]] tramos de cuerda soporta una fracción W/n en el modelo ideal."
        en: "[[W]] is the total gravitational force. Each of the [[n]] rope segments bears a fraction W/n in the ideal model."
    coherence_rules:
    - id: w_coh_neg
      when: "result <= 0"
      status: danger
      text:
        es: "La carga debe ser positiva."
        en: "The load must be positive."
    - id: w_coh_ok
      when: "true"
      status: ok
      text:
        es: "La carga [[W]] es positiva y coherente con el esfuerzo aplicado."
        en: "Load [[W]] is positive and coherent with the applied effort."
    model_validity_rules:
    - id: w_mod_ok
      when: "true"
      status: info
      text:
        es: "Válido mientras la masa de las poleas sea despreciable frente a [[W]]."
        en: "Valid as long as pulley mass is negligible compared to [[W]]."
    graph_rules:
    - id: w_graph
      when: "true"
      status: info
      text:
        es: "[[W]] aparece como vector descendente en el diagrama de cuerpo libre de la polea móvil."
        en: "[[W]] appears as a downward vector in the free-body diagram of the moving pulley."
    likely_errors:
    - id: w_err_mass
      when: "true"
      status: warning
      text:
        es: "Error frecuente: confundir masa (kg) con peso (N). [[W]] = m·g."
        en: "Common error: confusing mass (kg) with weight (N). [[W]] = m·g."
    next_step_rules:
    - id: w_next
      when: "true"
      status: info
      text:
        es: "Verifica que el esfuerzo [[P]] resultante sea coherente con la ventaja mecánica del sistema."
        en: "Verify that the resulting effort [[P]] is coherent with the system’s mechanical advantage."

  n:
    magnitude_type: adimensional
    semantic_role:
      es: "Número de tramos efectivos"
      en: "Number of effective rope segments"
    summary_rules:
    - id: n_sum_fija
      when: "result == 1"
      status: info
      text:
        es: "Solo un tramo efectivo: el sistema es una polea fija simple, que solo cambia la dirección de la fuerza."
        en: "Only one effective segment: the system is a simple fixed pulley, which only changes the force direction."
    - id: n_sum_ok
      when: "true"
      status: ok
      text:
        es: "Con [[n]] tramos efectivos la carga se divide entre [[n]] y el esfuerzo se reduce al mismo factor."
        en: "With [[n]] effective segments the load is divided by [[n]] and effort is reduced by the same factor."
    physical_reading_rules:
    - id: n_read_ok
      when: "true"
      status: info
      text:
        es: "Cada tramo de cuerda que sostiene directamente la polea móvil aporta una tensión ascendente igual a [[P]]."
        en: "Each rope segment directly supporting the moving pulley provides an upward tension equal to [[P]]."
    coherence_rules:
    - id: n_coh_zero
      when: "result < 1"
      status: danger
      text:
        es: "El número de tramos debe ser al menos 1."
        en: "The number of segments must be at least 1."
    - id: n_coh_ok
      when: "true"
      status: ok
      text:
        es: "El valor de [[n]] es entero positivo, coherente con un sistema de poleas real."
        en: "The value of [[n]] is a positive integer, coherent with a real pulley system."
    model_validity_rules:
    - id: n_mod_ok
      when: "true"
      status: info
      text:
        es: "Valores de [[n]] mayores que 12 son inusuales en la práctica; el peso propio de los cables empieza a ser relevante."
        en: "Values of [[n]] greater than 12 are unusual in practice; cable self-weight starts to be relevant."
    graph_rules:
    - id: n_graph
      when: "true"
      status: info
      text:
        es: "En el diagrama SVG el número de líneas de cuerda que convergen sobre la polea móvil debe coincidir con [[n]]."
        en: "In the SVG diagram, the number of rope lines converging on the moving pulley must equal [[n]]."
    likely_errors:
    - id: n_err_operador
      when: "true"
      status: warning
      text:
        es: "Error clásico: contar el tramo donde el operador tira como tramo efectivo. Solo cuentan los tramos que sostienen directamente la carga."
        en: "Classic error: counting the operator's segment as effective. Only segments directly supporting the load count."
    next_step_rules:
    - id: n_next
      when: "true"
      status: info
      text:
        es: "Calcula [[VM]] = [[n]] para confirmar la ventaja mecánica ideal, y verifica el recorrido [[sP]] = [[n]]·[[sW]]."
        en: "Calculate [[VM]] = [[n]] to confirm ideal mechanical advantage, and verify rope travel [[sP]] = [[n]]·[[sW]]."

  eta:
    magnitude_type: adimensional
    semantic_role:
      es: "Rendimiento mecánico"
      en: "Mechanical efficiency"
    summary_rules:
    - id: eta_sum_ideal
      when: "result >= 0.99"
      status: ok
      text:
        es: "Rendimiento prácticamente ideal. El modelo sin rozamiento es aplicable."
        en: "Practically ideal efficiency. The frictionless model applies."
    - id: eta_sum_bajo
      when: "result < 0.7"
      status: warning
      text:
        es: "Rendimiento bajo: más del 30% de la energía se pierde en fricción. Revisar lubricación y rigidez del cable."
        en: "Low efficiency: more than 30% of energy is lost to friction. Check lubrication and cable stiffness."
    - id: eta_sum_ok
      when: "true"
      status: info
      text:
        es: "El rendimiento [[eta]] cuantifica las pérdidas. El esfuerzo real es P_ideal / [[eta]]."
        en: "Efficiency [[eta]] quantifies losses. Real effort is P_ideal / [[eta]]."
    physical_reading_rules:
    - id: eta_read_ok
      when: "true"
      status: info
      text:
        es: "Un rendimiento [[eta]] = 0.8 significa que el 20% del esfuerzo combate rozamiento y rigidez, no eleva la carga."
        en: "An efficiency [[eta]] = 0.8 means 20% of effort fights friction and stiffness, not lifting the load."
    coherence_rules:
    - id: eta_coh_rango
      when: "result <= 0 || result > 1"
      status: danger
      text:
        es: "El rendimiento debe estar en (0, 1]. Valor fuera de rango indica error de cálculo."
        en: "Efficiency must be in (0, 1]. Out-of-range value indicates a calculation error."
    - id: eta_coh_ok
      when: "true"
      status: ok
      text:
        es: "El rendimiento [[eta]] está dentro del rango físicamente válido."
        en: "Efficiency [[eta]] is within the physically valid range."
    model_validity_rules:
    - id: eta_mod_ok
      when: "true"
      status: info
      text:
        es: "[[eta]] es constante solo si la velocidad de elevación es constante y baja. A alta velocidad el rozamiento viscoso crece."
        en: "[[eta]] is constant only at low constant lifting speed. At high speed viscous friction increases."
    graph_rules:
    - id: eta_graph
      when: "true"
      status: info
      text:
        es: "El rendimiento no tiene representación geométrica directa; se manifiesta como la diferencia entre el vector esfuerzo ideal y el real."
        en: "Efficiency has no direct geometric representation; it manifests as the difference between ideal and real effort vectors."
    likely_errors:
    - id: eta_err_100
      when: "true"
      status: warning
      text:
        es: "Error frecuente: asumir [[eta]] = 1 en sistemas reales con eje oxidado o cuerda rígida. Siempre estimar [[eta]] antes de calcular."
        en: "Common error: assuming [[eta]] = 1 in real systems with rusty axles or stiff rope. Always estimate [[eta]] before calculating."
    next_step_rules:
    - id: eta_next
      when: "true"
      status: info
      text:
        es: "Comprueba el balance energético completo con la fórmula de balance para confirmar que el trabajo disipado es coherente."
        en: "Check the complete energy balance with the balance formula to confirm that dissipated work is coherent."

  VM:
    magnitude_type: adimensional
    semantic_role:
      es: "Ventaja mecánica ideal"
      en: "Ideal mechanical advantage"
    summary_rules:
    - id: vm_sum_1
      when: "result == 1"
      status: info
      text:
        es: "Ventaja = 1: polea fija simple, solo cambia dirección de la fuerza, no la magnitud."
        en: "Advantage = 1: simple fixed pulley, only changes force direction, not magnitude."
    - id: vm_sum_ok
      when: "true"
      status: ok
      text:
        es: "La ventaja mecánica [[VM]] = [[n]] indica que el operador aplica 1/[[VM]] del peso de la carga."
        en: "Mechanical advantage [[VM]] = [[n]] means the operator applies 1/[[VM]] of the load’s weight."
    physical_reading_rules:
    - id: vm_read_ok
      when: "true"
      status: info
      text:
        es: "[[VM]] es una propiedad geométrica del sistema de poleas, no de la carga ni del operador."
        en: "[[VM]] is a geometric property of the pulley system, not of the load or operator."
    coherence_rules:
    - id: vm_coh_neg
      when: "result <= 0"
      status: danger
      text:
        es: "La ventaja mecánica debe ser positiva."
        en: "Mechanical advantage must be positive."
    - id: vm_coh_ok
      when: "true"
      status: ok
      text:
        es: "[[VM]] positiva y coherente con [[n]] tramos efectivos."
        en: "[[VM]] positive and coherent with [[n]] effective segments."
    model_validity_rules:
    - id: vm_mod_ok
      when: "true"
      status: info
      text:
        es: "[[VM]] ideal no incluye pérdidas. La ventaja real es [[VM]] · [[eta]] si se considera rendimiento."
        en: "Ideal [[VM]] does not include losses. Real advantage is [[VM]] · [[eta]] when efficiency is considered."
    graph_rules:
    - id: vm_graph
      when: "true"
      status: info
      text:
        es: "En el diagrama, [[VM]] es la razón entre el vector carga [[W]] y el vector esfuerzo [[P]]."
        en: "In the diagram, [[VM]] is the ratio between load vector [[W]] and effort vector [[P]]."
    likely_errors:
    - id: vm_err_energia
      when: "true"
      status: warning
      text:
        es: "Error clásico: creer que alta [[VM]] implica ahorro de energía. No: el trabajo total es el mismo; solo se redistribuye entre fuerza y recorrido."
        en: "Classic error: believing high [[VM]] implies energy saving. No: total work is the same; it is only redistributed between force and travel."
    next_step_rules:
    - id: vm_next
      when: "true"
      status: info
      text:
        es: "Con [[VM]] calculada, verifica que [[sP]] = [[VM]] · [[sW]] para comprobar la regla de oro."
        en: "With [[VM]] calculated, verify that [[sP]] = [[VM]] · [[sW]] to check the golden rule."

  sP:
    magnitude_type: longitud
    semantic_role:
      es: "Recorrido de cuerda del operador"
      en: "Operator rope travel"
    summary_rules:
    - id: sp_sum_ok
      when: "true"
      status: ok
      text:
        es: "Para elevar la carga [[sW]], el operador debe recoger [[sP]] = [[n]] · [[sW]] de cuerda. Es el precio en distancia de la ventaja mecánica."
        en: "To lift the load by [[sW]], the operator must pull [[sP]] = [[n]] · [[sW]] of rope. This is the distance cost of mechanical advantage."
    physical_reading_rules:
    - id: sp_read_ok
      when: "true"
      status: info
      text:
        es: "[[sP]] > [[sW]] siempre que [[n]] > 1. La energía se conserva: P·sP = W·sW en el modelo ideal."
        en: "[[sP]] > [[sW]] whenever [[n]] > 1. Energy is conserved: P·sP = W·sW in the ideal model."
    coherence_rules:
    - id: sp_coh_neg
      when: "result <= 0"
      status: danger
      text:
        es: "El desplazamiento debe ser positivo."
        en: "Displacement must be positive."
    - id: sp_coh_ok
      when: "true"
      status: ok
      text:
        es: "[[sP]] es positivo y coherente con la relación cinemática del sistema."
        en: "[[sP]] is positive and coherent with the kinematic constraint of the system."
    model_validity_rules:
    - id: sp_mod_ok
      when: "true"
      status: info
      text:
        es: "Válido solo con cuerda inextensible. Si la cuerda es elástica, [[sP]] será mayor que [[n]] · [[sW]] durante el primer instante de estiramiento."
        en: "Valid only with inextensible rope. If the rope is elastic, [[sP]] will exceed [[n]] · [[sW]] during the initial stretch instant."
    graph_rules:
    - id: sp_graph
      when: "true"
      status: info
      text:
        es: "En una gráfica posición-tiempo, [[sP]] tiene pendiente [[n]] veces mayor que la de [[sW]]."
        en: "In a position-time graph, [[sP]] has a slope [[n]] times greater than that of [[sW]]."
    likely_errors:
    - id: sp_err_igual
      when: "true"
      status: warning
      text:
        es: "Error frecuente: suponer [[sP]] = [[sW]]. Solo ocurre en una polea fija simple (n=1)."
        en: "Common error: assuming [[sP]] = [[sW]]. This only occurs in a simple fixed pulley (n=1)."
    next_step_rules:
    - id: sp_next
      when: "true"
      status: info
      text:
        es: "Usa el balance energético para confirmar que P·[[sP]] coincide con (W·[[sW]])/[[eta]]."
        en: "Use the energy balance to confirm that P·[[sP]] equals (W·[[sW]])/[[eta]]."

  sW:
    magnitude_type: longitud
    semantic_role:
      es: "Recorrido de elevación de la carga"
      en: "Load lifting displacement"
    summary_rules:
    - id: sw_sum_ok
      when: "true"
      status: ok
      text:
        es: "[[sW]] es el desplazamiento útil de la carga. Para conseguirlo el operador debe recoger [[n]] veces esa longitud de cuerda."
        en: "[[sW]] is the useful load displacement. To achieve it the operator must pull [[n]] times that rope length."
    physical_reading_rules:
    - id: sw_read_ok
      when: "true"
      status: info
      text:
        es: "[[sW]] es el objetivo de la operación. Todo el sistema existe para producir este desplazamiento vertical minimizando la fuerza."
        en: "[[sW]] is the operation's objective. The entire system exists to produce this vertical displacement while minimizing force."
    coherence_rules:
    - id: sw_coh_neg
      when: "result <= 0"
      status: danger
      text:
        es: "El desplazamiento de la carga debe ser positivo para una elevación real."
        en: "Load displacement must be positive for a real lift."
    - id: sw_coh_ok
      when: "true"
      status: ok
      text:
        es: "[[sW]] positivo y coherente con la restricción cinemática."
        en: "[[sW]] positive and coherent with the kinematic constraint."
    model_validity_rules:
    - id: sw_mod_ok
      when: "true"
      status: info
      text:
        es: "La relación sP = n·sW es exacta solo con cuerda inextensible y poleas sin deslizamiento."
        en: "The relation sP = n·sW is exact only with inextensible rope and non-slip pulleys."
    graph_rules:
    - id: sw_graph
      when: "true"
      status: info
      text:
        es: "En el diagrama cinemático, la flecha de [[sW]] apunta hacia arriba con longitud proporcional al desplazamiento de la carga."
        en: "In the kinematic diagram, the [[sW]] arrow points upward with length proportional to load displacement."
    likely_errors:
    - id: sw_err_total
      when: "true"
      status: warning
      text:
        es: "Error frecuente: confundir [[sW]] con la longitud total de la cuerda. [[sW]] es solo el cambio de posición vertical de la carga."
        en: "Common error: confusing [[sW]] with the total rope length. [[sW]] is only the vertical position change of the load."
    next_step_rules:
    - id: sw_next
      when: "true"
      status: info
      text:
        es: "Con [[sW]] y [[n]] calculados, verifica el balance energético W·[[sW]] = P·[[sP]]·[[eta]] para comprobar coherencia."
        en: "With [[sW]] and [[n]] calculated, verify the energy balance W·[[sW]] = P·[[sP]]·[[eta]] for consistency."

  Np:
    magnitude_type: adimensional
    semantic_role:
      es: "Número de poleas móviles"
      en: "Number of moving pulleys"
    summary_rules:
    - id: np_sum_ok
      when: "true"
      status: ok
      text:
        es: "Con [[Np]] poleas móviles el aparejo factorial ofrece n = 2·[[Np]] tramos efectivos; el potencial ofrece n = 2^[[Np]] tramos."
        en: "With [[Np]] moving pulleys the factorial tackle offers n = 2·[[Np]] effective segments; the potential offers n = 2^[[Np]] segments."
    physical_reading_rules:
    - id: np_read_ok
      when: "true"
      status: info
      text:
        es: "Cada polea móvil añadida duplica (aparejo potencial) o suma 2 tramos (aparejo factorial) a la ventaja mecánica."
        en: "Each added moving pulley doubles (potential tackle) or adds 2 segments (factorial tackle) to mechanical advantage."
    coherence_rules:
    - id: np_coh_neg
      when: "result < 0"
      status: danger
      text:
        es: "El número de poleas móviles no puede ser negativo."
        en: "The number of moving pulleys cannot be negative."
    - id: np_coh_ok
      when: "true"
      status: ok
      text:
        es: "[[Np]] es entero no negativo, coherente con la geometría del aparejo."
        en: "[[Np]] is a non-negative integer, coherent with the tackle geometry."
    model_validity_rules:
    - id: np_mod_ok
      when: "true"
      status: info
      text:
        es: "Para valores de [[Np]] ≥ 4 en aparejos potenciales el rendimiento real cae notablemente por la fricción acumulada en los ejes."
        en: "For [[Np]] ≥ 4 in potential tackles, real efficiency drops noticeably due to accumulated axle friction."
    graph_rules:
    - id: np_graph
      when: "true"
      status: info
      text:
        es: "En el diagrama SVG cada bloque móvil visible corresponde a una polea del grupo inferior."
        en: "In the SVG diagram each visible moving block corresponds to one pulley in the lower group."
    likely_errors:
    - id: np_err_fijas
      when: "true"
      status: warning
      text:
        es: "Error frecuente: incluir las poleas fijas en [[Np]]. Solo las poleas que se desplazan con la carga cuentan."
        en: "Common error: including fixed pulleys in [[Np]]. Only pulleys that move with the load count."
    next_step_rules:
    - id: np_next
      when: "true"
      status: info
      text:
        es: "Determina [[n]] usando la fórmula del tipo de aparejo y verifica que coincide con el conteo visual de tramos en el diagrama."
        en: "Determine [[n]] using the tackle-type formula and verify it matches the visual rope-segment count in the diagram."
`;export{e as default};
