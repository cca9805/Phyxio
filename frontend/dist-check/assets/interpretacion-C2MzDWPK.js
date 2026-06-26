const e=`version: "2.0"
id: interp_isotermico
leaf_id: isotermico

nombre:
  es: Interpretacion del proceso isotermico
  en: Isothermal process interpretation

scope:
  area: fisica-clasica
  bloque: termodinamica
  subbloque: gases-y-modelos
  parent_id: procesos-termodinamicos
  ruta_relativa: fisica-clasica/termodinamica/gases-y-modelos/procesos-termodinamicos/isotermico

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
    max_sections: 3
    max_rules_per_section: 2

dependencies:
  formulas:
    - ley_boyle
    - trabajo_isotermico
  magnitudes:
    - p1
    - p2
    - V1
    - V2
    - T
    - n
    - W
    - Q_iso

global_context:
  physical_domain:
    es: Proceso termodinamico de gas ideal a temperatura constante controlada por foco termico.
    en: Thermodynamic process of an ideal gas at constant temperature controlled by a thermal reservoir.
  axis_convention:
    es: "Eje horizontal: volumen V en m³. Eje vertical: presion p en Pa. La curva isoterma es una hiperbola pV constante."
    en: "Horizontal axis: volume V in m³. Vertical axis: pressure p in Pa. The isotherm curve is a hyperbola with constant pV."
  standard_assumptions:
    - Gas ideal (sin interacciones moleculares)
    - Proceso cuasiestatico y reversible
    - Sistema cerrado (n constante)
    - Temperatura mantenida por foco termico externo
  standard_warnings:
    - "Para gases reales con interacciones moleculares, la ley de Boyle presenta desviaciones."
    - "A presiones muy altas (mayores de 100 atm) el modelo de gas ideal falla."

result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: Resumen del proceso
      en: Process summary
  physical_reading:
    enabled: true
    order: 2
    title:
      es: Lectura fisica
      en: Physical reading
  coherence:
    enabled: true
    order: 3
    title:
      es: Coherencia del resultado
      en: Result coherence
  model_validity:
    enabled: true
    order: 4
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    enabled: true
    order: 5
    title:
      es: Lectura del grafico
      en: Graph reading
  likely_errors:
    enabled: true
    order: 6
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    enabled: true
    order: 7
    title:
      es: Siguiente paso
      en: Next step

targets:

  p2:
    magnitude_type: state_variable
    semantic_role:
      es: Presion final del gas tras el proceso isotermico; indica el nuevo estado de equilibrio.
      en: Final gas pressure after the isothermal process; indicates the new equilibrium state.
    summary_rules:
      - id: p2_summary_expansion
        when: "p2 < p1"
        status: ok
        text:
          es: "[[p2]] indica que el gas se expandio: la presion disminuyo desde [[p1]] hasta [[p2]]. El producto pV se conserva en la isoterma."
          en: "[[p2]] indicates the gas expanded: pressure decreased from [[p1]] to [[p2]]. The pV product is conserved on the isotherm."
      - id: p2_summary_compression
        when: "p2 > p1"
        status: ok
        text:
          es: "[[p2]] indica que el gas se comprimo: la presion aumento desde [[p1]] hasta [[p2]]. La temperatura no cambio durante el proceso."
          en: "[[p2]] indicates the gas was compressed: pressure increased from [[p1]] to [[p2]]. Temperature did not change during the process."
      - id: p2_summary_default
        when: "true"
        status: ok
        text:
          es: "[[p2]] resume el estado de presion final del gas en el proceso isotermico. Su valor depende directamente del cociente entre [[V1]] y [[V2]]."
          en: "[[p2]] summarizes the final pressure state of the gas in the isothermal process. Its value depends directly on the ratio between [[V1]] and [[V2]]."
    physical_reading_rules:
      - id: p2_reading_boyle
        when: "true"
        status: ok
        text:
          es: "La presion final [[p2]] se obtiene de la ley de Boyle: al conservarse el producto presion por volumen, si [[V2]] aumenta, [[p2]] disminuye en la misma proporcion."
          en: "Final pressure [[p2]] is obtained from Boyle's Law: since the pressure-volume product is conserved, if [[V2]] increases, [[p2]] decreases in the same proportion."
    coherence_rules:
      - id: p2_coherence_positive
        when: "p2 > 0"
        status: ok
        text:
          es: "[[p2]] es positivo, fisicamente coherente para una presion de gas."
          en: "[[p2]] is positive, physically consistent for a gas pressure."
      - id: p2_coherence_negative
        when: "p2 <= 0"
        status: error
        text:
          es: "Presion final no positiva: resultado fisicamente imposible para gas ideal. Verificar [[p1]], [[V1]] y [[V2]]."
          en: "Non-positive final pressure: physically impossible result for an ideal gas. Check [[p1]], [[V1]], and [[V2]]."
    model_validity_rules:
      - id: p2_validity_high_pressure
        when: "p2 > 10000000"
        status: warning
        text:
          es: "[[p2]] supera los 100 atm. A estas presiones el gas real se desvia del modelo ideal y la ley de Boyle pierde precision."
          en: "[[p2]] exceeds 100 atm. At these pressures, the real gas deviates from the ideal model and Boyle's Law loses accuracy."
      - id: p2_validity_default
        when: "true"
        status: ok
        text:
          es: "El resultado de [[p2]] es valido dentro del dominio del gas ideal a temperatura constante."
          en: "The result for [[p2]] is valid within the ideal gas domain at constant temperature."
    graph_rules:
      - id: p2_graph_hyperbola
        when: "true"
        status: ok
        text:
          es: "En el diagrama pV, [[p2]] es la ordenada del punto final sobre la hiperbola isoterma. Un [[p2]] menor que [[p1]] implica que el punto final esta a la derecha del inicial."
          en: "In the pV diagram, [[p2]] is the ordinate of the final point on the isotherm hyperbola. A [[p2]] less than [[p1]] means the final point is to the right of the initial one."
    likely_errors:
      - id: p2_error_adiabatic_confusion
        when: "true"
        status: warning
        text:
          es: "Error frecuente: asumir que [[p2]] no cambia porque la temperatura es constante. En realidad, [[T]] constante no implica [[p2]] constante; solo implica que el producto [[p1]][[V1]] se conserva."
          en: "Frequent error: assuming [[p2]] does not change because temperature is constant. In reality, constant [[T]] does not imply constant [[p2]]; it only implies that the product [[p1]][[V1]] is conserved."
    next_step_rules:
      - id: p2_next_work
        when: "true"
        status: ok
        text:
          es: "Con [[p2]] y [[V2]] determinados, calcular el trabajo isotermico [[W]] usando la formula con el logaritmo del cociente de volumenes."
          en: "With [[p2]] and [[V2]] determined, calculate the isothermal work [[W]] using the formula with the natural log of the volume ratio."

  p1:
    magnitude_type: state_variable
    semantic_role:
      es: Presion inicial del gas; punto de partida de la isoterma en el diagrama pV.
      en: Initial gas pressure; starting point of the isotherm in the pV diagram.
    summary_rules:
      - id: p1_summary_default
        when: "true"
        status: ok
        text:
          es: "[[p1]] resume el estado de presion inicial del gas. Junto con [[V1]], define el punto de partida sobre la hiperbola isoterma y depende de la temperatura [[T]] del proceso."
          en: "[[p1]] summarizes the initial pressure state of the gas. Together with [[V1]], it defines the starting point on the isotherm hyperbola and depends on the temperature [[T]] of the process."
    physical_reading_rules:
      - id: p1_reading_default
        when: "true"
        status: ok
        text:
          es: "[[p1]] establece la escala de la hiperbola de la ley de Boyle. Un [[p1]] elevado indica un gas mas comprimido al inicio; la isoterma correspondiente tiene mayor area bajo la curva."
          en: "[[p1]] sets the scale of the Boyle's Law hyperbola. A high [[p1]] indicates a more compressed gas at the start; the corresponding isotherm has a larger area under the curve."
    coherence_rules:
      - id: p1_coherence_positive
        when: "p1 > 0"
        status: ok
        text:
          es: "[[p1]] es positivo, fisicamente coherente."
          en: "[[p1]] is positive, physically consistent."
      - id: p1_coherence_negative
        when: "p1 <= 0"
        status: error
        text:
          es: "Presion inicial no positiva: resultado fisicamente imposible. Revisar los datos de entrada."
          en: "Non-positive initial pressure: physically impossible result. Check the input data."
    model_validity_rules:
      - id: p1_validity_default
        when: "true"
        status: ok
        text:
          es: "[[p1]] es valido como condicion inicial dentro del dominio del gas ideal."
          en: "[[p1]] is valid as an initial condition within the ideal gas domain."
    graph_rules:
      - id: p1_graph_default
        when: "true"
        status: ok
        text:
          es: "[[p1]] es la ordenada del punto inicial sobre la hiperbola del diagrama pV. Junto con [[V1]], fija el nivel de la isoterma."
          en: "[[p1]] is the ordinate of the initial point on the pV diagram hyperbola. Together with [[V1]], it sets the isotherm level."
    likely_errors:
      - id: p1_error_celsius
        when: "true"
        status: warning
        text:
          es: "Verificar que [[p1]] esta en pascales y no en kilopascales o atmósferas sin convertir."
          en: "Check that [[p1]] is in pascals and not in kilopascals or atmospheres without conversion."
    next_step_rules:
      - id: p1_next_boyle
        when: "true"
        status: ok
        text:
          es: "Con [[p1]] y [[V1]] conocidos, aplicar la ley de Boyle para determinar [[p2]] o [[V2]] segun el dato que falte."
          en: "With [[p1]] and [[V1]] known, apply Boyle's Law to determine [[p2]] or [[V2]] depending on the missing datum."

  V2:
    magnitude_type: state_variable
    semantic_role:
      es: Volumen final del gas; determina si el proceso fue expansion o compresion y el sentido del trabajo.
      en: Final gas volume; determines whether the process was expansion or compression and the sign of work.
    summary_rules:
      - id: V2_summary_expansion
        when: "V2 > V1"
        status: ok
        text:
          es: "[[V2]] mayor que [[V1]] indica expansion isotermica. El gas realizo trabajo positivo sobre el entorno absorbiendo calor del foco termico."
          en: "[[V2]] greater than [[V1]] indicates isothermal expansion. The gas did positive work on the surroundings by absorbing heat from the thermal reservoir."
      - id: V2_summary_compression
        when: "V2 < V1"
        status: ok
        text:
          es: "[[V2]] menor que [[V1]] indica compresion isotermica. El entorno realizo trabajo sobre el gas, que cede calor al foco termico."
          en: "[[V2]] less than [[V1]] indicates isothermal compression. The surroundings did work on the gas, which releases heat to the thermal reservoir."
      - id: V2_summary_default
        when: "true"
        status: ok
        text:
          es: "[[V2]] resume el volumen final del gas. Su cociente con [[V1]] depende del valor del logaritmo que determina el trabajo isotermico."
          en: "[[V2]] summarizes the final gas volume. Its ratio with [[V1]] depends on the logarithm value that determines the isothermal work."
    physical_reading_rules:
      - id: V2_reading_default
        when: "true"
        status: ok
        text:
          es: "[[V2]] determina el punto final sobre la hiperbola isoterma. El area comprendida entre [[V1]] y [[V2]] bajo la curva es exactamente igual al trabajo [[W]] realizado por el gas."
          en: "[[V2]] determines the final point on the isotherm hyperbola. The area between [[V1]] and [[V2]] under the curve equals exactly the work [[W]] done by the gas."
    coherence_rules:
      - id: V2_coherence_positive
        when: "V2 > 0"
        status: ok
        text:
          es: "[[V2]] es positivo, fisicamente coherente."
          en: "[[V2]] is positive, physically consistent."
      - id: V2_coherence_zero
        when: "V2 <= 0"
        status: error
        text:
          es: "Volumen final no positivo: resultado fisicamente imposible para gas ideal."
          en: "Non-positive final volume: physically impossible result for an ideal gas."
    model_validity_rules:
      - id: V2_validity_default
        when: "true"
        status: ok
        text:
          es: "[[V2]] es valido como estado final dentro del dominio del gas ideal a temperatura constante."
          en: "[[V2]] is valid as a final state within the ideal gas domain at constant temperature."
    graph_rules:
      - id: V2_graph_default
        when: "true"
        status: ok
        text:
          es: "[[V2]] es la abscisa del punto final sobre la hiperbola. Si [[V2]] es mayor que [[V1]], el punto final esta a la derecha y la presion final es menor."
          en: "[[V2]] is the abscissa of the final point on the hyperbola. If [[V2]] is greater than [[V1]], the final point is to the right and final pressure is lower."
    likely_errors:
      - id: V2_error_units
        when: "true"
        status: warning
        text:
          es: "Verificar que [[V2]] esta en metros cubicos. Un volumen en litros produce un trabajo en julios incorrecto por un factor de 1000."
          en: "Check that [[V2]] is in cubic metres. A volume in litres produces an incorrect work in joules by a factor of 1000."
    next_step_rules:
      - id: V2_next_work
        when: "true"
        status: ok
        text:
          es: "Con [[V2]] determinado, calcular el trabajo isotermico [[W]] usando el logaritmo del cociente [[V2]]/[[V1]]."
          en: "With [[V2]] determined, calculate the isothermal work [[W]] using the logarithm of the ratio [[V2]]/[[V1]]."

  V1:
    magnitude_type: state_variable
    semantic_role:
      es: Volumen inicial del gas; fija el punto de partida de la isoterma junto con la presion inicial.
      en: Initial gas volume; sets the starting point of the isotherm together with the initial pressure.
    summary_rules:
      - id: V1_summary_default
        when: "true"
        status: ok
        text:
          es: "[[V1]] resume el volumen inicial del gas en la isoterma. Su valor depende del estado previo del sistema y define junto con [[p1]] la posicion del punto inicial sobre la hiperbola pV."
          en: "[[V1]] summarizes the initial gas volume on the isotherm. Its value depends on the prior system state and, together with [[p1]], defines the position of the starting point on the pV hyperbola."
    physical_reading_rules:
      - id: V1_reading_default
        when: "true"
        status: ok
        text:
          es: "[[V1]] es la condicion inicial del proceso. La hiperbola isoterma en el diagrama pV pasa exactamente por el punto (V1, p1) y el calculo del trabajo usa el logaritmo de V2 dividido entre [[V1]]."
          en: "[[V1]] is the initial condition of the process. The isotherm hyperbola in the pV diagram passes exactly through the point (V1, p1) and the work calculation uses the logarithm of V2 divided by [[V1]]."
    coherence_rules:
      - id: V1_coherence_positive
        when: "V1 > 0"
        status: ok
        text:
          es: "[[V1]] es positivo, fisicamente coherente."
          en: "[[V1]] is positive, physically consistent."
      - id: V1_coherence_zero
        when: "V1 <= 0"
        status: error
        text:
          es: "Volumen inicial no positivo: resultado fisicamente imposible."
          en: "Non-positive initial volume: physically impossible result."
    model_validity_rules:
      - id: V1_validity_default
        when: "true"
        status: ok
        text:
          es: "[[V1]] es valido como condicion inicial dentro del dominio del gas ideal."
          en: "[[V1]] is valid as an initial condition within the ideal gas domain."
    graph_rules:
      - id: V1_graph_default
        when: "true"
        status: ok
        text:
          es: "[[V1]] es la abscisa del punto inicial sobre la hiperbola isoterma en el diagrama pV."
          en: "[[V1]] is the abscissa of the initial point on the isotherm hyperbola in the pV diagram."
    likely_errors:
      - id: V1_error_units
        when: "true"
        status: warning
        text:
          es: "Verificar que [[V1]] esta en metros cubicos. El error de unidades en [[V1]] afecta directamente el logaritmo y por tanto el trabajo calculado."
          en: "Check that [[V1]] is in cubic metres. Unit error in [[V1]] directly affects the logarithm and therefore the calculated work."
    next_step_rules:
      - id: V1_next_boyle
        when: "true"
        status: ok
        text:
          es: "Usar [[V1]] junto con [[p1]] para aplicar la ley de Boyle y determinar el estado final del proceso isotermico."
          en: "Use [[V1]] together with [[p1]] to apply Boyle's Law and determine the final state of the isothermal process."

  W:
    magnitude_type: energy_exchange
    semantic_role:
      es: Trabajo realizado por el gas en el proceso isotermico; igual al calor absorbido del foco termico por el primer principio.
      en: Work done by the gas in the isothermal process; equal to the heat absorbed from the thermal reservoir by the first law.
    summary_rules:
      - id: W_summary_expansion
        when: "W > 0"
        status: ok
        text:
          es: "[[W]] positivo indica que el gas realizo trabajo sobre el entorno durante la expansion isotermica. Por el primer principio, el gas absorbio exactamente [[W]] julios del foco termico para compensar."
          en: "Positive [[W]] indicates the gas did work on the surroundings during isothermal expansion. By the first law, the gas absorbed exactly [[W]] joules from the thermal reservoir to compensate."
      - id: W_summary_compression
        when: "W < 0"
        status: ok
        text:
          es: "[[W]] negativo indica que el entorno realizo trabajo sobre el gas durante la compresion isotermica. El gas cedio exactamente ese calor al foco termico."
          en: "Negative [[W]] indicates the surroundings did work on the gas during isothermal compression. The gas released exactly that amount of heat to the thermal reservoir."
      - id: W_summary_zero
        when: "W == 0"
        status: ok
        text:
          es: "[[W]] nulo indica que [[V1]] y [[V2]] son iguales; no hubo cambio de volumen y por tanto tampoco intercambio de calor en este proceso isotermico."
          en: "Zero [[W]] indicates that [[V1]] and [[V2]] are equal; no volume change occurred and therefore no heat exchange in this isothermal process."
      - id: W_summary_default
        when: "true"
        status: ok
        text:
          es: "[[W]] resume el intercambio de energia mecanica en el proceso isotermico. Depende de [[n]], [[T]] y del logaritmo del cociente de volumenes."
          en: "[[W]] summarizes the mechanical energy exchange in the isothermal process. It depends on [[n]], [[T]], and the logarithm of the volume ratio."
    physical_reading_rules:
      - id: W_reading_first_law
        when: "true"
        status: ok
        text:
          es: "En un proceso isotermico de gas ideal la energia interna no cambia, por lo que [[W]] resulta igual al calor absorbido [[Q_iso]]. Esto significa que toda la energia mecanica producida en la expansion proviene del foco termico."
          en: "In an isothermal ideal gas process the internal energy does not change, so [[W]] equals the absorbed heat [[Q_iso]]. This means all mechanical energy produced in the expansion comes from the thermal reservoir."
    coherence_rules:
      - id: W_coherence_sign_expansion
        when: "W > 0 and V2 > V1"
        status: ok
        text:
          es: "[[W]] positivo con V2 mayor que V1: coherente con expansion isotermica."
          en: "Positive [[W]] with V2 greater than V1: consistent with isothermal expansion."
      - id: W_coherence_sign_compression
        when: "W < 0 and V2 < V1"
        status: ok
        text:
          es: "[[W]] negativo con V2 menor que V1: coherente con compresion isotermica."
          en: "Negative [[W]] with V2 less than V1: consistent with isothermal compression."
      - id: W_coherence_sign_mismatch
        when: "W > 0 and V2 < V1"
        status: error
        text:
          es: "[[W]] positivo con V2 menor que V1 es incoherente. En compresion, el trabajo realizado por el gas debe ser negativo."
          en: "Positive [[W]] with V2 less than V1 is incoherent. In compression, the work done by the gas must be negative."
    model_validity_rules:
      - id: W_validity_ideal
        when: "true"
        status: ok
        text:
          es: "[[W]] es valido bajo el modelo de gas ideal con proceso reversible. Para gases reales o procesos irreversibles, el trabajo diferira de este valor."
          en: "[[W]] is valid under the ideal gas model with a reversible process. For real gases or irreversible processes, the work will differ from this value."
    graph_rules:
      - id: W_graph_area
        when: "true"
        status: ok
        text:
          es: "[[W]] representa el area con signo bajo la hiperbola pV entre [[V1]] y [[V2]]. En el grafico, el area sombreada entre los dos puntos de la isoterma corresponde exactamente a este valor."
          en: "[[W]] represents the signed area under the pV hyperbola between [[V1]] and [[V2]]. In the graph, the shaded area between the two isotherm points corresponds exactly to this value."
    likely_errors:
      - id: W_error_zero_isothermal
        when: "true"
        status: warning
        text:
          es: "Error clasico: asumir que [[W]] es cero en el proceso isotermico porque la temperatura no cambia. La temperatura constante solo implica que la energia interna no cambia, no que el trabajo sea nulo."
          en: "Classic error: assuming [[W]] is zero in the isothermal process because temperature does not change. Constant temperature only implies that internal energy does not change, not that work is zero."
    next_step_rules:
      - id: W_next_first_law
        when: "true"
        status: ok
        text:
          es: "Con [[W]] calculado, aplicar el primer principio para confirmar que el calor absorbido [[Q_iso]] es exactamente igual a [[W]]. Comparar con el proceso adiabatico donde [[Q_iso]] es nulo."
          en: "With [[W]] calculated, apply the first law to confirm that the absorbed heat [[Q_iso]] equals exactly [[W]]. Compare with the adiabatic process where [[Q_iso]] is zero."

  Q_iso:
    magnitude_type: energy_exchange
    semantic_role:
      es: Calor intercambiado con el foco termico para mantener la temperatura constante durante el proceso.
      en: Heat exchanged with the thermal reservoir to maintain constant temperature during the process.
    summary_rules:
      - id: Q_iso_summary_default
        when: "true"
        status: ok
        text:
          es: "[[Q_iso]] indica el calor que el gas absorbe o cede al foco termico. En el proceso isotermico de gas ideal, [[Q_iso]] es exactamente igual a [[W]]: toda la energia del trabajo viene del calor o va hacia el."
          en: "[[Q_iso]] indicates the heat the gas absorbs from or releases to the thermal reservoir. In the isothermal ideal gas process, [[Q_iso]] equals exactly [[W]]: all work energy comes from or goes to heat."
    physical_reading_rules:
      - id: Q_iso_reading_default
        when: "true"
        status: ok
        text:
          es: "[[Q_iso]] positivo significa que el foco termico cede calor al gas (expansion). [[Q_iso]] negativo significa que el gas cede calor al foco (compresion). La magnitud depende de [[n]], [[T]] y del cociente de volumenes."
          en: "Positive [[Q_iso]] means the thermal reservoir gives heat to the gas (expansion). Negative [[Q_iso]] means the gas gives heat to the reservoir (compression). The magnitude depends on [[n]], [[T]], and the volume ratio."
    coherence_rules:
      - id: Q_iso_coherence_equals_W
        when: "true"
        status: ok
        text:
          es: "Por el primer principio, [[Q_iso]] debe ser igual a [[W]] para un proceso isotermico de gas ideal. Si difieren, hay error en el calculo."
          en: "By the first law, [[Q_iso]] must equal [[W]] for an isothermal ideal gas process. If they differ, there is an error in the calculation."
    model_validity_rules:
      - id: Q_iso_validity_default
        when: "true"
        status: ok
        text:
          es: "[[Q_iso]] igual a [[W]] es valido solo para gas ideal. Para gases reales, la diferencia depende de las interacciones moleculares y puede ser significativa."
          en: "[[Q_iso]] equal to [[W]] is valid only for an ideal gas. For real gases, the difference depends on molecular interactions and can be significant."
    graph_rules:
      - id: Q_iso_graph_default
        when: "true"
        status: ok
        text:
          es: "El calor [[Q_iso]] no aparece directamente en el diagrama pV, pero es numericamente igual al area bajo la isoterma, que representa [[W]]."
          en: "Heat [[Q_iso]] does not appear directly in the pV diagram, but it is numerically equal to the area under the isotherm, which represents [[W]]."
    likely_errors:
      - id: Q_iso_error_zero
        when: "true"
        status: warning
        text:
          es: "Error conceptual frecuente: creer que [[Q_iso]] es cero porque la temperatura no cambia. Eso es lo que ocurre en el proceso adiabatico, no en el isotermico."
          en: "Frequent conceptual error: believing [[Q_iso]] is zero because temperature does not change. That is what happens in the adiabatic process, not in the isothermal one."
    next_step_rules:
      - id: Q_iso_next_cycle
        when: "true"
        status: ok
        text:
          es: "Con [[Q_iso]] determinado, analizar como este intercambio de calor encaja en el ciclo termodinamico completo, especialmente si forma parte del ciclo de Carnot."
          en: "With [[Q_iso]] determined, analyze how this heat exchange fits into the complete thermodynamic cycle, especially if it forms part of the Carnot cycle."

cross_checks:
  - id: boyle_product_conservation
    condition: "abs(p1 * V1 - p2 * V2) < 0.001 * p1 * V1"
    message:
      es: "El producto p1·V1 debe ser igual a p2·V2 dentro del margen de error numerico del 0.1 %."
      en: "The product p1·V1 must equal p2·V2 within a 0.1% numerical error margin."
  - id: work_heat_equality
    condition: "abs(W - Q_iso) < 0.001 * abs(W)"
    message:
      es: "El trabajo [[W]] debe ser igual al calor [[Q_iso]] en un proceso isotermico de gas ideal."
      en: "Work [[W]] must equal heat [[Q_iso]] in an isothermal ideal gas process."

error_patterns:
  - id: isothermal_adiabatic_confusion
    detect_when: "W != 0 and Q_iso == 0"
    message:
      es: "Confundir proceso isotermico con adiabatico: en el proceso isotermico [[Q_iso]] no es cero."
      en: "Confusing isothermal with adiabatic process: in the isothermal process [[Q_iso]] is not zero."

graph_binding:
  preferred_type: Coord
  axis_x: V
  axis_y: p
  curve_type: hyperbola
  shading: area_under_curve

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
