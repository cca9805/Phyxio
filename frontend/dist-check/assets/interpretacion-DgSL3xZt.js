const e=`version: "5.0"
id: interp_calor_especifico
leaf_id: calor-especifico

nombre:
  es: Interpretación del calor específico
  en: Interpretation of specific heat capacity

scope:
  area: fisica-clasica
  bloque: termodinamica
  subbloque: calor-y-efectos-termicos
  parent_id: calor-y-efectos-termicos
  ruta_relativa: fisica-clasica/termodinamica/calor-y-efectos-termicos/calor-especifico

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretación
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
    max_blocks: 3
    max_rules_per_block: 2

dependencies:
  formulas:
    - definicion_c
    - capacidad_calorifica_total
  magnitudes:
    - c
    - Q
    - m
    - DeltaT
    - C_total

global_context:
  physical_domain:
    es: "Determinación y aplicación del calor específico como propiedad intensiva de materiales en procesos termodinámicos sin cambio de estado."
    en: "Determination and application of specific heat capacity as an intensive property of materials in thermodynamic processes without phase change."
  axis_convention:
    es: "c es siempre positivo. Si el resultado de c es negativo, existe un error de signo en Q o en DeltaT."
    en: "c is always positive. If the result for c is negative, there is a sign error in Q or DeltaT."
  standard_assumptions:
    - "c constante en el rango de temperatura del proceso"
    - "Sin cambio de estado"
    - "Sistema homogéneo de un solo material"
    - "Proceso cuasi-estático"
  standard_warnings:
    - "No aplicar la definición de c durante un cambio de estado (DeltaT nulo)"
    - "Verificar unidades: c en J/(kg·K), m en kg, DeltaT en K o °C"
    - "Distinguir siempre c (J/(kg·K)) de C_total (J/K)"

result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: Resumen
      en: Summary
  physical_reading:
    enabled: true
    order: 2
    title:
      es: Lectura física
      en: Physical reading
  coherence:
    enabled: true
    order: 3
    title:
      es: Coherencia
      en: Coherence
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
      es: Lectura gráfica
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

  c:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Propiedad intensiva del material que cuantifica su resistencia al cambio de temperatura por unidad de masa."
      en: "Intensive property of the material quantifying its resistance to temperature change per unit mass."
    summary_rules:
      - id: c_summary_water
        when: "c > 4000 && c < 4400"
        status: ok
        text:
          es: "[[c]] está en el rango del agua líquida (4186 J/(kg·K)). Este valor es excepcionalmente alto: el agua es uno de los materiales con mayor calor específico conocido, lo que explica su rol como regulador térmico en los océanos y en los organismos vivos."
          en: "[[c]] is in the range of liquid water (4186 J/(kg·K)). This value is exceptionally high: water has one of the highest known specific heat capacities, explaining its role as a thermal regulator in the oceans and in living organisms."
      - id: c_summary_metal
        when: "c > 100 && c < 1000"
        status: ok
        text:
          es: "[[c]] está en el rango típico de los metales. Los metales tienen calores específicos entre 100 y 1000 J/(kg·K), lo que significa que se calientan y enfrían con relativa rapidez bajo el mismo aporte de energía que el agua."
          en: "[[c]] is in the typical range for metals. Metals have specific heat capacities between 100 and 1000 J/(kg·K), meaning they heat and cool relatively quickly under the same energy input as water."
      - id: c_summary_default
        when: "true"
        status: ok
        text:
          es: "[[c]] describe la resistencia del material al cambio de temperatura por unidad de masa. Cuanto mayor es [[c]], más energía necesita absorber o ceder un kilogramo del material para cambiar su temperatura en un kelvin."
          en: "[[c]] describes the material's resistance to temperature change per unit mass. The larger [[c]], the more energy one kilogram of the material must absorb or release to change its temperature by one kelvin."
    physical_reading_rules:
      - id: c_reading_high
        when: "c > 3000"
        status: ok
        text:
          es: "[[c]] alto indica un material con gran capacidad de almacenamiento térmico por unidad de masa. Se calienta lentamente pero retiene la energía durante más tiempo, lo que lo hace útil como fluido caloportador o como regulador térmico."
          en: "High [[c]] indicates a material with high thermal storage capacity per unit mass. It heats slowly but retains energy longer, making it useful as a heat-transfer fluid or thermal buffer."
      - id: c_reading_default
        when: "true"
        status: ok
        text:
          es: "[[c]] es una propiedad intensiva: su valor no cambia si se toma más o menos cantidad del mismo material. Lo que cambia con la masa es la capacidad calorífica total del sistema, que vale [[m]] · [[c]]."
          en: "[[c]] is an intensive property: its value does not change if more or less of the same material is taken. What changes with mass is the total heat capacity of the system, which equals [[m]] · [[c]]."
    coherence_rules:
      - id: c_coherence_negative
        when: "c < 0"
        status: error
        text:
          es: "Resultado negativo de [[c]]. Para sustancias termodinámicamente estables, [[c]] es siempre positivo. Revisar el signo de [[Q]] y el orden de la resta en [[DeltaT]]."
          en: "Negative result for [[c]]. For thermodynamically stable substances, [[c]] is always positive. Check the sign of [[Q]] and the subtraction order in [[DeltaT]]."
      - id: c_coherence_very_large
        when: "c > 15000"
        status: warning
        text:
          es: "[[c]] superior a 15 000 J/(kg·K) es inusual en materiales macroscópicos a temperatura ambiente. Verificar que [[m]] está en kg y no en gramos, y que [[Q]] está en julios."
          en: "[[c]] above 15 000 J/(kg·K) is unusual for macroscopic materials at room temperature. Check that [[m]] is in kg and not grams, and that [[Q]] is in joules."
      - id: c_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[c]] es positivo y coherente con los rangos físicos conocidos para materiales estables."
          en: "[[c]] is positive and consistent with known physical ranges for stable materials."
    model_validity_rules:
      - id: c_validity_phase
        when: "DeltaT == 0"
        status: error
        text:
          es: "Con [[DeltaT]] nulo, la fórmula de definición de [[c]] es indeterminada. Si la temperatura no varía durante el proceso, probablemente hay un cambio de estado y la magnitud relevante es el calor latente, no [[c]]."
          en: "With zero [[DeltaT]], the definition formula for [[c]] is indeterminate. If temperature does not change during the process, there is probably a phase change and the relevant quantity is latent heat, not [[c]]."
      - id: c_validity_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[c]] obtenido es válido para el rango de temperatura del experimento. Para rangos superiores a 200 K, verificar si [[c]] varía significativamente con T para el material analizado."
          en: "The obtained value of [[c]] is valid for the temperature range of the experiment. For ranges above 200 K, check whether [[c]] varies significantly with T for the analyzed material."
    graph_rules:
      - id: c_graph_slope
        when: "true"
        status: ok
        text:
          es: "En la gráfica Q vs [[DeltaT]], [[c]] aparece como la pendiente de la recta dividida por [[m]]. En la gráfica C vs [[m]], [[c]] es la pendiente de la recta que pasa por el origen."
          en: "In the Q vs [[DeltaT]] graph, [[c]] appears as the slope of the line divided by [[m]]. In the C vs [[m]] graph, [[c]] is the slope of the line passing through the origin."
    likely_errors:
      - id: c_error_units
        when: "c > 10000 && m < 1"
        status: warning
        text:
          es: "Posible error de unidades: [[m]] puede estar en gramos en lugar de kilogramos. Un gramo equivale a 0.001 kg; usar la masa en gramos infla [[c]] en un factor de 1000."
          en: "Possible unit error: [[m]] may be in grams instead of kilograms. One gram equals 0.001 kg; using mass in grams inflates [[c]] by a factor of 1000."
      - id: c_error_default
        when: "true"
        status: ok
        text:
          es: "Error frecuente: invertir el orden de la resta en [[DeltaT]] (T_inicial − T_final en lugar de T_final − T_inicial), lo que produce [[c]] negativo. [[c]] siempre debe ser positivo."
          en: "Common error: reversing the subtraction order in [[DeltaT]] (T_initial − T_final instead of T_final − T_initial), which produces negative [[c]]. [[c]] must always be positive."
    next_step_rules:
      - id: c_next_identify
        when: "true"
        status: ok
        text:
          es: "Con [[c]] determinado, el siguiente paso es compararlo con la tabla de calores específicos de referencia para identificar el material o verificar la consistencia del resultado experimental."
          en: "With [[c]] determined, the next step is to compare it with the reference table of specific heat capacities to identify the material or verify the consistency of the experimental result."

  Q:
    magnitude_type: scalar_signed
    semantic_role:
      es: "Calor total transferido al sistema durante el proceso, usado como dato para determinar c o como resultado cuando c y DeltaT son conocidos."
      en: "Total heat transferred to the system during the process, used as input to determine c or as result when c and DeltaT are known."
    summary_rules:
      - id: Q_summary_positive
        when: "Q > 0"
        status: ok
        text:
          es: "[[Q]] positivo indica que el sistema absorbe energía del entorno. El proceso es endotérmico y el material se calienta."
          en: "Positive [[Q]] indicates the system absorbs energy from the surroundings. The process is endothermic and the material heats up."
      - id: Q_summary_negative
        when: "Q < 0"
        status: ok
        text:
          es: "[[Q]] negativo indica que el sistema cede energía al entorno. El proceso es exotérmico y el material se enfría."
          en: "Negative [[Q]] indicates the system releases energy to the surroundings. The process is exothermic and the material cools down."
      - id: Q_summary_default
        when: "true"
        status: ok
        text:
          es: "[[Q]] es la energía intercambiada en el proceso. En el contexto del calor específico, [[Q]] es el dato medido experimentalmente que, junto con [[m]] y [[DeltaT]], permite calcular [[c]]."
          en: "[[Q]] is the energy exchanged in the process. In the context of specific heat capacity, [[Q]] is the experimentally measured data that, together with [[m]] and [[DeltaT]], allows [[c]] to be calculated."
    physical_reading_rules:
      - id: Q_reading_default
        when: "true"
        status: ok
        text:
          es: "[[Q]] determina la escala energética del proceso. Un [[Q]] grande no implica necesariamente un [[c]] grande: depende también de la masa y de [[DeltaT]]."
          en: "[[Q]] determines the energy scale of the process. A large [[Q]] does not necessarily imply a large [[c]]: it also depends on mass and [[DeltaT]]."
    coherence_rules:
      - id: Q_coherence_sign
        when: "Q > 0 && DeltaT < 0"
        status: error
        text:
          es: "Incoherencia: [[Q]] positivo con [[DeltaT]] negativo. Si el sistema absorbe calor, su temperatura debe aumentar. Revisar el orden de la resta en [[DeltaT]] o el signo de [[Q]]."
          en: "Inconsistency: positive [[Q]] with negative [[DeltaT]]. If the system absorbs heat, its temperature must increase. Check the subtraction order in [[DeltaT]] or the sign of [[Q]]."
      - id: Q_coherence_default
        when: "true"
        status: ok
        text:
          es: "Los signos de [[Q]] y [[DeltaT]] son coherentes entre sí."
          en: "The signs of [[Q]] and [[DeltaT]] are mutually consistent."
    model_validity_rules:
      - id: Q_validity_default
        when: "true"
        status: ok
        text:
          es: "[[Q]] es válido como dato para calcular [[c]] mientras el proceso sea sin cambio de estado y [[DeltaT]] sea distinto de cero."
          en: "[[Q]] is valid as input to calculate [[c]] as long as the process involves no phase change and [[DeltaT]] is nonzero."
    graph_rules:
      - id: Q_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica Q vs [[DeltaT]], el valor calculado de [[Q]] se sitúa sobre la recta de pendiente [[m]] · [[c]]. La pendiente de esta recta es la capacidad calorífica total del sistema."
          en: "In the Q vs [[DeltaT]] graph, the calculated value of [[Q]] lies on the line of slope [[m]] · [[c]]. The slope of this line is the total heat capacity of the system."
    likely_errors:
      - id: Q_error_units
        when: "true"
        status: ok
        text:
          es: "Error frecuente: expresar [[Q]] en kilocalorías en lugar de julios sin convertir. Una kilocaloría equivale a 4186 J."
          en: "Common error: expressing [[Q]] in kilocalories instead of joules without converting. One kilocalorie equals 4186 J."
    next_step_rules:
      - id: Q_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[Q]] calculado, el siguiente paso es verificar que el resultado es coherente con el calor específico del material y plantearse si el proceso completo puede involucrar cambios de estado adicionales."
          en: "With [[Q]] calculated, the next step is to verify that the result is consistent with the material's specific heat capacity and consider whether the complete process may involve additional phase changes."

  m:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Masa del sistema que experimenta el cambio térmico; factor de escala entre c (propiedad intensiva) y C_total (propiedad extensiva)."
      en: "Mass of the system undergoing the thermal change; scaling factor between c (intensive property) and C_total (extensive property)."
    summary_rules:
      - id: m_summary_default
        when: "true"
        status: ok
        text:
          es: "[[m]] determina la capacidad calorífica total del sistema a través del producto [[m]] · [[c]]. Duplicar [[m]] duplica [[C_total]] pero no cambia [[c]], que es una propiedad del material independiente de la cantidad."
          en: "[[m]] determines the total heat capacity of the system through the product [[m]] · [[c]]. Doubling [[m]] doubles [[C_total]] but does not change [[c]], which is a property of the material independent of quantity."
    physical_reading_rules:
      - id: m_reading_default
        when: "true"
        status: ok
        text:
          es: "[[m]] es el puente entre la propiedad intensiva [[c]] del material y la propiedad extensiva [[C_total]] del sistema. Esta distinción es el concepto clave de este leaf."
          en: "[[m]] is the bridge between the intensive property [[c]] of the material and the extensive property [[C_total]] of the system. This distinction is the key concept of this leaf."
    coherence_rules:
      - id: m_coherence_positive
        when: "m <= 0"
        status: error
        text:
          es: "[[m]] debe ser estrictamente positiva. Un valor nulo o negativo no tiene sentido físico."
          en: "[[m]] must be strictly positive. A zero or negative value has no physical meaning."
      - id: m_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[m]] es positiva y coherente con el sistema analizado."
          en: "[[m]] is positive and consistent with the analyzed system."
    model_validity_rules:
      - id: m_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo asume [[m]] constante durante el proceso. En sistemas abiertos donde la masa varía (evaporación, condensación), la relación es solo una aproximación y debe aplicarse a cada tramo de masa constante."
          en: "The model assumes constant [[m]] during the process. In open systems where mass changes (evaporation, condensation), the relation is only an approximation and must be applied to each constant-mass segment."
    graph_rules:
      - id: m_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica [[C_total]] vs [[m]], la pendiente de la recta que pasa por el origen es igual a [[c]] del material. Esta representación permite determinar gráficamente [[c]] a partir de medidas de [[C_total]] para diferentes masas."
          en: "In the [[C_total]] vs [[m]] graph, the slope of the line passing through the origin equals [[c]] of the material. This representation allows [[c]] to be determined graphically from measurements of [[C_total]] for different masses."
    likely_errors:
      - id: m_error_units
        when: "m > 0 && m < 0.01"
        status: warning
        text:
          es: "[[m]] muy pequeña. Verificar si el valor fue introducido en gramos en lugar de kilogramos. Convertir: dividir los gramos entre 1000."
          en: "Very small [[m]]. Check whether the value was entered in grams instead of kilograms. Convert: divide grams by 1000."
      - id: m_error_default
        when: "true"
        status: ok
        text:
          es: "Error frecuente: usar [[m]] en gramos cuando [[c]] está en J/(kg·K), lo que produce un valor de [[Q]] o de [[C_total]] mil veces menor al correcto."
          en: "Common error: using [[m]] in grams when [[c]] is in J/(kg·K), producing a value of [[Q]] or [[C_total]] a thousand times smaller than correct."
    next_step_rules:
      - id: m_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[m]] determinada y [[c]] conocido del material, calcular la capacidad calorífica total [[C_total]] del sistema para evaluar su respuesta térmica ante aportes de energía."
          en: "With [[m]] determined and [[c]] known for the material, calculate the total heat capacity [[C_total]] of the system to evaluate its thermal response to energy inputs."

  DeltaT:
    magnitude_type: scalar_signed
    semantic_role:
      es: "Variación de temperatura medida experimentalmente; denominador de la fórmula de definición de c."
      en: "Experimentally measured temperature change; denominator of the definition formula for c."
    summary_rules:
      - id: DeltaT_summary_positive
        when: "DeltaT > 0"
        status: ok
        text:
          es: "[[DeltaT]] positivo indica calentamiento del sistema. El calor absorbido es positivo y el material ha ganado energía interna."
          en: "Positive [[DeltaT]] indicates the system has warmed up. The absorbed heat is positive and the material has gained internal energy."
      - id: DeltaT_summary_negative
        when: "DeltaT < 0"
        status: ok
        text:
          es: "[[DeltaT]] negativo indica enfriamiento del sistema. El calor es negativo y el material ha cedido energía al entorno."
          en: "Negative [[DeltaT]] indicates the system has cooled down. The heat is negative and the material has released energy to the surroundings."
      - id: DeltaT_summary_zero
        when: "DeltaT == 0"
        status: error
        text:
          es: "[[DeltaT]] nulo hace indeterminada la fórmula de [[c]]. Un proceso sin variación de temperatura implica un cambio de estado, no calor sensible."
          en: "Zero [[DeltaT]] makes the formula for [[c]] indeterminate. A process with no temperature change implies a phase change, not sensible heat."
      - id: DeltaT_summary_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaT]] es la respuesta observable del sistema al calor recibido. Su valor y signo permiten calcular [[c]] a partir de la energía aportada."
          en: "[[DeltaT]] is the observable response of the system to the received heat. Its value and sign allow [[c]] to be calculated from the supplied energy."
    physical_reading_rules:
      - id: DeltaT_reading_precision
        when: "abs(DeltaT) < 1"
        status: warning
        text:
          es: "[[DeltaT]] muy pequeño. Los errores de medida de temperatura pueden ser comparables a [[DeltaT]] mismo, lo que introduce una gran incertidumbre en el valor de [[c]] calculado."
          en: "Very small [[DeltaT]]. Temperature measurement errors may be comparable to [[DeltaT]] itself, introducing large uncertainty in the calculated value of [[c]]."
      - id: DeltaT_reading_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaT]] es el denominador de la definición de [[c]]. Un [[DeltaT]] grande en el experimento mejora la precisión del valor de [[c]] al reducir el efecto relativo de los errores de medida."
          en: "[[DeltaT]] is the denominator of the definition of [[c]]. A large [[DeltaT]] in the experiment improves the precision of [[c]] by reducing the relative effect of measurement errors."
    coherence_rules:
      - id: DeltaT_coherence_extreme
        when: "abs(DeltaT) > 300"
        status: warning
        text:
          es: "[[DeltaT]] mayor de 300 K es inusual en experimentos de laboratorio estándar. Verificar que no hay cambios de estado en el rango de temperatura analizado y que el material no ha sufrido degradación."
          en: "[[DeltaT]] above 300 K is unusual in standard laboratory experiments. Check that no phase changes occur in the analyzed temperature range and that the material has not degraded."
      - id: DeltaT_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaT]] es coherente con el proceso descrito y sus valores son físicamente razonables."
          en: "[[DeltaT]] is consistent with the described process and its values are physically reasonable."
    model_validity_rules:
      - id: DeltaT_validity_default
        when: "true"
        status: ok
        text:
          es: "La fórmula de [[c]] es válida cuando [[DeltaT]] no cruza ninguna temperatura de transición de fase del material. Para procesos que abarcan transiciones, separar en tramos."
          en: "The formula for [[c]] is valid when [[DeltaT]] does not cross any phase transition temperature of the material. For processes that span transitions, separate into segments."
    graph_rules:
      - id: DeltaT_graph_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaT]] aparece en el eje x de la gráfica Q vs ΔT. El punto calculado se sitúa sobre la recta de pendiente [[C_total]], confirmando visualmente la consistencia del resultado."
          en: "[[DeltaT]] appears on the x-axis of the Q vs ΔT graph. The calculated point lies on the line of slope [[C_total]], visually confirming the consistency of the result."
    likely_errors:
      - id: DeltaT_error_order
        when: "true"
        status: ok
        text:
          es: "Error muy frecuente: calcular [[DeltaT]] como T_inicial − T_final en lugar de T_final − T_inicial. Esto invierte el signo de [[c]], que parecería negativo y se confundiría con un error de cálculo."
          en: "Very common error: computing [[DeltaT]] as T_initial − T_final instead of T_final − T_initial. This inverts the sign of [[c]], which would appear negative and be confused with a calculation error."
    next_step_rules:
      - id: DeltaT_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[DeltaT]] determinado, verificar que el rango no incluye ningún cambio de estado y comparar [[c]] calculado con los valores tabulados del material para validar el experimento."
          en: "With [[DeltaT]] determined, verify that the range includes no phase change and compare the calculated [[c]] with tabulated values of the material to validate the experiment."

  C_total:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Capacidad calorífica total del sistema: energía necesaria para que el sistema completo suba un kelvin. Propiedad extensiva que depende de m y de c."
      en: "Total heat capacity of the system: energy needed for the entire system to rise one kelvin. Extensive property depending on m and c."
    summary_rules:
      - id: C_total_summary_large
        when: "C_total > 10000"
        status: ok
        text:
          es: "[[C_total]] superior a 10 000 J/K indica un sistema con gran inercia térmica. Este sistema responderá lentamente a aportes de calor y mantendrá su temperatura de forma estable frente a perturbaciones térmicas externas."
          en: "[[C_total]] above 10 000 J/K indicates a system with high thermal inertia. This system will respond slowly to heat inputs and maintain its temperature stably against external thermal disturbances."
      - id: C_total_summary_default
        when: "true"
        status: ok
        text:
          es: "[[C_total]] resume la inercia térmica total del sistema. A diferencia de [[c]], [[C_total]] depende de la cantidad de materia: el mismo material en mayor cantidad tiene mayor [[C_total]] pero el mismo [[c]]."
          en: "[[C_total]] summarizes the total thermal inertia of the system. Unlike [[c]], [[C_total]] depends on the amount of matter: the same material in larger quantity has greater [[C_total]] but the same [[c]]."
    physical_reading_rules:
      - id: C_total_reading_default
        when: "true"
        status: ok
        text:
          es: "[[C_total]] es el parámetro de diseño clave en ingeniería térmica: determina cuánta energía debe suministrarse o extraerse para cambiar la temperatura del sistema en una cantidad dada, independientemente del tiempo que tarde el proceso."
          en: "[[C_total]] is the key design parameter in thermal engineering: it determines how much energy must be supplied or extracted to change the system temperature by a given amount, regardless of how long the process takes."
    coherence_rules:
      - id: C_total_coherence_positive
        when: "C_total <= 0"
        status: error
        text:
          es: "[[C_total]] debe ser estrictamente positiva. Un valor nulo o negativo indica un error en los datos de entrada de [[m]] o [[c]]."
          en: "[[C_total]] must be strictly positive. A zero or negative value indicates an error in the input data for [[m]] or [[c]]."
      - id: C_total_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[C_total]] es positiva y coherente con los valores de [[m]] y [[c]] del sistema."
          en: "[[C_total]] is positive and consistent with the values of [[m]] and [[c]] of the system."
    model_validity_rules:
      - id: C_total_validity_heterogeneous
        when: "true"
        status: ok
        text:
          es: "La fórmula [[C_total]] = [[m]] · [[c]] es exacta para sistemas homogéneos de un solo material. Para sistemas de varios materiales, [[C_total]] total es la suma de los productos [[m_i]] · [[c_i]] de cada componente."
          en: "The formula [[C_total]] = [[m]] · [[c]] is exact for homogeneous single-material systems. For multi-material systems, total [[C_total]] is the sum of the [[m_i]] · [[c_i]] products of each component."
    graph_rules:
      - id: C_total_graph_slope
        when: "true"
        status: ok
        text:
          es: "En la gráfica [[C_total]] vs [[m]], [[c]] es la pendiente de la recta que pasa por el origen. Este gráfico permite determinar experimentalmente [[c]] midiendo [[C_total]] para varias masas del mismo material."
          en: "In the [[C_total]] vs [[m]] graph, [[c]] is the slope of the line passing through the origin. This graph allows [[c]] to be determined experimentally by measuring [[C_total]] for several masses of the same material."
    likely_errors:
      - id: C_total_error_confusion
        when: "true"
        status: ok
        text:
          es: "Error frecuente: reportar [[C_total]] cuando el enunciado pide [[c]], o viceversa. [[C_total]] se expresa en J/K y depende de la muestra; [[c]] se expresa en J/(kg·K) y es una propiedad del material."
          en: "Common error: reporting [[C_total]] when the problem asks for [[c]], or vice versa. [[C_total]] is expressed in J/K and depends on the sample; [[c]] is expressed in J/(kg·K) and is a property of the material."
    next_step_rules:
      - id: C_total_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[C_total]] calculada, el siguiente paso es usarla en el principio de conservación de energía de la calorimetría: la suma de [[C_total_i]] · [[DeltaT_i]] de todos los cuerpos del sistema debe ser cero en ausencia de pérdidas."
          en: "With [[C_total]] calculated, the next step is to use it in the energy conservation principle of calorimetry: the sum of [[C_total_i]] · [[DeltaT_i]] for all bodies in the system must be zero in the absence of losses."

cross_checks:
  - id: sign_consistency_c
    check: "c debe ser positivo; si es negativo, signo(Q) y signo(DeltaT) son inconsistentes"
    action: "Revisar el orden de la resta en DeltaT y el signo asignado a Q"
  - id: C_vs_c_distinction
    check: "C_total (J/K) y c (J/(kg·K)) no son intercambiables; verificar unidades del resultado pedido"
    action: "Si el resultado pedido es c, dividir C_total entre m"

error_patterns:
  - id: negative_c_from_inverted_DeltaT
    description:
      es: "c negativo por invertir el orden de la resta en DeltaT."
      en: "Negative c due to inverted subtraction order in DeltaT."
  - id: confusion_c_vs_C
    description:
      es: "Confusión entre c (propiedad intensiva) y C_total (propiedad extensiva)."
      en: "Confusion between c (intensive property) and C_total (extensive property)."

graph_binding:
  tipo: Coord
  eje_x: DeltaT
  eje_y: Q
  magnitud_estrella: c

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
    priority:
      - summary
      - likely_errors
  extended_mode:
    show_all: true
`;export{e as default};
