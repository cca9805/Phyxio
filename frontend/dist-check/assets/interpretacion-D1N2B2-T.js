const e=`version: "2.0"
id: interpretacion-dilatacion
leaf_id: dilatacion

nombre:
  es: Interpretación de la dilatación térmica
  en: Thermal expansion interpretation

scope:
  area: fisica-clasica
  bloque: termodinamica
  subbloque: calor-y-efectos-termicos
  parent_id: calor-y-efectos-termicos
  ruta_relativa: fisica-clasica/termodinamica/calor-y-efectos-termicos/dilatacion

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
    max_sections: 2
    priority: [summary, likely_errors]

dependencies:
  formulas:
    - dilatacion_lineal
    - dilatacion_volumetrica
    - relacion_beta_alpha
  magnitudes:
    - alpha
    - L0
    - DeltaL
    - DeltaT
    - beta
    - V0
    - DeltaV

global_context:
  physical_domain:
    es: "Comportamiento termomecánico de sólidos y líquidos en régimen lineal de pequeñas deformaciones térmicas."
    en: "Thermomechanical behaviour of solids and liquids in the linear regime of small thermal deformations."
  axis_convention:
    es: "DeltaT positivo indica calentamiento; DeltaL y DeltaV positivos indican expansión del material."
    en: "Positive DeltaT indicates heating; positive DeltaL and DeltaV indicate expansion of the material."
  standard_assumptions:
    - "Coeficientes de dilatación constantes en el rango de temperatura considerado"
    - "Material isótropo para la relación beta = 3·alpha"
    - "Ausencia de cambio de estado durante el proceso"
    - "Deformaciones pequeñas: alpha·DeltaT << 1"
  standard_warnings:
    - "La ley lineal pierde precisión para DeltaT mayores de 300 K en muchos materiales"
    - "Los líquidos requieren beta propio; no aplicar beta = 3·alpha a fluidos"

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

  DeltaL:
    magnitude_type: scalar_signed
    semantic_role:
      es: Elongación o contracción del sólido resultante del cambio de temperatura aplicado.
      en: Elongation or contraction of the solid resulting from the applied temperature change.
    summary_rules:
      - id: deltaL_summary_positive
        when: "DeltaL > 0"
        status: ok
        text:
          es: "[[DeltaL]] indica una elongación del sólido: el material se dilata al calentarse. El resultado depende de [[alpha]], [[L0]] y [[DeltaT]] aplicado."
          en: "[[DeltaL]] indicates elongation of the solid: the material expands on heating. The result depends on [[alpha]], [[L0]] and the applied [[DeltaT]]."
      - id: deltaL_summary_negative
        when: "DeltaL < 0"
        status: ok
        text:
          es: "[[DeltaL]] indica una contracción del sólido: el material se acorta al enfriarse. La magnitud de la contracción depende del módulo de [[DeltaT]] y del valor de [[alpha]]."
          en: "[[DeltaL]] indicates contraction of the solid: the material shortens on cooling. The contraction magnitude depends on the absolute value of [[DeltaT]] and [[alpha]]."
      - id: deltaL_summary_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaL]] resume el cambio dimensional lineal del sólido. Su signo indica el sentido del proceso térmico y su valor describe cuánto varía la longitud del material."
          en: "[[DeltaL]] summarises the linear dimensional change of the solid. Its sign indicates the direction of the thermal process and its value describes how much the material length varies."
    physical_reading_rules:
      - id: deltaL_reading_large
        when: "abs(DeltaL) > L0 * 0.01"
        status: warning
        text:
          es: "La variación [[DeltaL]] supera el 1% de la longitud inicial [[L0]]. El modelo lineal puede estar en su límite de validez; conviene verificar si [[alpha]] varía significativamente en el rango de [[DeltaT]] aplicado."
          en: "The change [[DeltaL]] exceeds 1% of the initial length [[L0]]. The linear model may be at its validity limit; check whether [[alpha]] varies significantly over the applied [[DeltaT]] range."
      - id: deltaL_reading_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaL]] aumenta proporcionalmente con [[L0]] y con [[DeltaT]]. Para el mismo calentamiento, un sólido más largo experimenta una elongación mayor en valor absoluto, pero la deformación relativa [[DeltaL]]/[[L0]] es idéntica para cualquier longitud del mismo material."
          en: "[[DeltaL]] increases proportionally with [[L0]] and [[DeltaT]]. For the same heating, a longer solid experiences greater absolute elongation, but the relative strain [[DeltaL]]/[[L0]] is identical for any length of the same material."
    coherence_rules:
      - id: deltaL_coherence_sign
        when: "DeltaL * DeltaT < 0"
        status: error
        text:
          es: "El signo de [[DeltaL]] es opuesto al de [[DeltaT]], lo que es incoherente para un material con [[alpha]] positivo. Revisar el orden de la resta en [[DeltaT]] o el signo introducido en [[alpha]]."
          en: "The sign of [[DeltaL]] is opposite to that of [[DeltaT]], which is inconsistent for a material with positive [[alpha]]. Check the subtraction order in [[DeltaT]] or the sign entered for [[alpha]]."
      - id: deltaL_coherence_ratio
        when: "abs(DeltaL) > L0"
        status: error
        text:
          es: "[[DeltaL]] es mayor que [[L0]], lo que implica una deformación relativa superior al 100%. El modelo lineal no es válido en este régimen; verificar las unidades y los valores de entrada."
          en: "[[DeltaL]] is larger than [[L0]], implying a relative deformation exceeding 100%. The linear model is not valid in this regime; check the units and input values."
      - id: deltaL_coherence_default
        when: "true"
        status: ok
        text:
          es: "La coherencia entre [[DeltaL]], [[alpha]], [[L0]] y [[DeltaT]] es consistente con el modelo lineal de dilatación."
          en: "The coherence between [[DeltaL]], [[alpha]], [[L0]] and [[DeltaT]] is consistent with the linear expansion model."
    model_validity_rules:
      - id: deltaL_validity_smallstrain
        when: "abs(DeltaL) < L0 * 0.005"
        status: ok
        text:
          es: "La deformación relativa es inferior al 0.5%, bien dentro del régimen lineal donde [[alpha]] puede tratarse como constante. El modelo de dilatación lineal es plenamente válido."
          en: "The relative deformation is below 0.5%, well within the linear regime where [[alpha]] can be treated as constant. The linear expansion model is fully valid."
      - id: deltaL_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo es válido mientras [[DeltaT]] no induzca cambio de estado y [[alpha]] permanezca aproximadamente constante. Para variaciones de temperatura superiores a 300 K, conviene usar el valor promedio de [[alpha]] en el rango o el modelo integral."
          en: "The model is valid as long as [[DeltaT]] does not induce a phase change and [[alpha]] remains approximately constant. For temperature changes exceeding 300 K, use the average value of [[alpha]] over the range or the integral model."
    graph_rules:
      - id: deltaL_graph_slope
        when: "true"
        status: ok
        text:
          es: "En la gráfica [[DeltaL]] vs [[DeltaT]], el punto calculado debe caer sobre la recta de pendiente [[alpha]]·[[L0]] que pasa por el origen. Una desviación visible indica error en los datos o no linealidad del material."
          en: "In the [[DeltaL]] vs [[DeltaT]] graph, the calculated point must fall on the straight line of slope [[alpha]]·[[L0]] passing through the origin. A visible deviation indicates data error or material non-linearity."
    likely_errors:
      - id: deltaL_error_units
        when: "true"
        status: warning
        text:
          es: "Error conceptual frecuente: confundir el cambio de longitud con una conversión de unidades. [[L0]] debe estar en SI antes de usar [[alpha]], o [[DeltaL]] queda en unidades mixtas incorrectas."
          en: "Frequent conceptual error: confusing length change with a unit conversion. [[L0]] must be in SI before using [[alpha]], or [[DeltaL]] ends in incorrect mixed units."
      - id: deltaL_error_final_length
        when: "true"
        status: warning
        text:
          es: "Error conceptual frecuente: interpretar [[DeltaL]] como longitud final. [[DeltaL]] solo es el cambio; la pieza final mide la longitud inicial más ese incremento."
          en: "Frequent conceptual error: interpreting [[DeltaL]] as final length. [[DeltaL]] is only the change; the final piece length is the initial length plus that increment."
    next_step_rules:
      - id: deltaL_next_volumetric
        when: "true"
        status: ok
        text:
          es: "Con [[DeltaL]] calculada, el siguiente paso natural es estimar la dilatación volumétrica usando [[beta]] ≈ 3·[[alpha]] y la fórmula de [[DeltaV]]. Esto permite comparar el impacto unidimensional con el tridimensional."
          en: "With [[DeltaL]] calculated, the natural next step is to estimate the volumetric expansion using [[beta]] ≈ 3·[[alpha]] and the [[DeltaV]] formula. This allows comparing the one-dimensional with the three-dimensional impact."

  alpha:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: Coeficiente de dilatación lineal del material, determinado experimentalmente a partir de la elongación medida.
      en: Linear expansion coefficient of the material, determined experimentally from the measured elongation.
    summary_rules:
      - id: alpha_summary_typical
        when: "alpha > 0 and alpha < 30e-6"
        status: ok
        text:
          es: "[[alpha]] resume la sensibilidad térmica dimensional del material: indica cuánto se dilata relativamente cada metro por cada kelvin. El valor obtenido indica un material con dilatación moderada, típica de metales comunes."
          en: "[[alpha]] summarises the thermal dimensional sensitivity of the material: it indicates how much each metre expands relatively per kelvin. The obtained value indicates a material with moderate expansion, typical of common metals."
      - id: alpha_summary_default
        when: "true"
        status: ok
        text:
          es: "[[alpha]] describe la propiedad intensiva de dilatación lineal del material. Su valor depende exclusivamente de la naturaleza del material, no de la geometría ni de la cantidad de materia."
          en: "[[alpha]] describes the intensive linear expansion property of the material. Its value depends exclusively on the nature of the material, not on geometry or amount of matter."
    physical_reading_rules:
      - id: alpha_reading_comparison
        when: "true"
        status: ok
        text:
          es: "Un [[alpha]] grande significa que el material cambia de longitud significativamente ante pequeñas variaciones de [[DeltaT]]. Un [[alpha]] pequeño indica alta estabilidad dimensional frente a cambios térmicos, como en el invar o la cerámica de baja dilatación."
          en: "A large [[alpha]] means the material changes length significantly for small [[DeltaT]] variations. A small [[alpha]] indicates high dimensional stability against thermal changes, as in invar or low-expansion ceramics."
    coherence_rules:
      - id: alpha_coherence_negative
        when: "alpha < 0"
        status: error
        text:
          es: "[[alpha]] negativo es físicamente imposible para materiales convencionales en el modelo estándar. Revisar el signo de [[DeltaL]] o [[DeltaT]] en los datos de entrada."
          en: "Negative [[alpha]] is physically impossible for conventional materials in the standard model. Check the sign of [[DeltaL]] or [[DeltaT]] in the input data."
      - id: alpha_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[alpha]] calculado es coherente con el rango esperado para materiales sólidos."
          en: "The calculated value of [[alpha]] is consistent with the expected range for solid materials."
    model_validity_rules:
      - id: alpha_validity_range
        when: "alpha > 50e-6"
        status: warning
        text:
          es: "[[alpha]] superior a 50×10⁻⁶ K⁻¹ es inusualmente alto para sólidos. Verificar que los datos de [[DeltaL]] y [[DeltaT]] son correctos y que no se ha producido un cambio de estado durante el proceso."
          en: "[[alpha]] above 50×10⁻⁶ K⁻¹ is unusually high for solids. Verify that the [[DeltaL]] and [[DeltaT]] data are correct and that no phase change occurred during the process."
      - id: alpha_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo lineal que define [[alpha]] como constante es válido mientras la deformación relativa sea pequeña y no haya cambio de estado."
          en: "The linear model that defines [[alpha]] as constant is valid as long as the relative deformation is small and there is no phase change."
    graph_rules:
      - id: alpha_graph_slope
        when: "true"
        status: ok
        text:
          es: "En la gráfica [[DeltaL]] vs [[DeltaT]], [[alpha]] es la pendiente dividida entre [[L0]]. Si la recta no pasa por el origen, indica que hay una deformación sistemática no térmica o un error de medida en el valor de referencia."
          en: "In the [[DeltaL]] vs [[DeltaT]] graph, [[alpha]] is the slope divided by [[L0]]. If the line does not pass through the origin, it indicates a systematic non-thermal deformation or a measurement error in the reference value."
    likely_errors:
      - id: alpha_error_volumetric
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar [[beta]] en la fórmula de dilatación lineal. [[beta]] ≈ 3·[[alpha]], por lo que el resultado triplicaría la elongación real."
          en: "Frequent error: using [[beta]] in the linear expansion formula. [[beta]] ≈ 3·[[alpha]], so the result would triple the real elongation."
    next_step_rules:
      - id: alpha_next_beta
        when: "true"
        status: ok
        text:
          es: "Con [[alpha]] conocido, calcular [[beta]] ≈ 3·[[alpha]] permite estimar la dilatación volumétrica del mismo material sin necesidad de datos adicionales."
          en: "With [[alpha]] known, calculating [[beta]] ≈ 3·[[alpha]] allows estimating the volumetric expansion of the same material without additional data."

  L0:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: Longitud inicial del sólido, despejada a partir de la elongación medida, del coeficiente del material y de la variación térmica.
      en: Initial length of the solid, solved from the measured elongation, the material coefficient, and the thermal change.
    summary_rules:
      - id: L0_summary_default
        when: "true"
        status: ok
        text:
          es: "[[L0]] resume la longitud de referencia del sólido antes del proceso térmico. Su valor indica el tamaño original de la pieza, que junto con [[alpha]] determina la escala de la elongación absoluta para cualquier [[DeltaT]]."
          en: "[[L0]] summarises the reference length of the solid before the thermal process. Its value indicates the original size of the part, which together with [[alpha]] determines the scale of the absolute elongation for any [[DeltaT]]."
    physical_reading_rules:
      - id: L0_reading_default
        when: "true"
        status: ok
        text:
          es: "[[L0]] es el amplificador geométrico de la dilatación. Dos barras del mismo material y mismo [[DeltaT]] experimentan elongaciones absolutas proporcionales a sus longitudes iniciales. La deformación relativa [[DeltaL]]/[[L0]] es la misma para cualquier longitud."
          en: "[[L0]] is the geometric amplifier of expansion. Two bars of the same material and same [[DeltaT]] experience absolute elongations proportional to their initial lengths. The relative deformation [[DeltaL]]/[[L0]] is the same for any length."
    coherence_rules:
      - id: L0_coherence_negative
        when: "L0 < 0"
        status: error
        text:
          es: "[[L0]] negativo no tiene significado físico. Revisar los datos de entrada de [[DeltaL]], [[alpha]] y [[DeltaT]]."
          en: "Negative [[L0]] has no physical meaning. Check the input values for [[DeltaL]], [[alpha]] and [[DeltaT]]."
      - id: L0_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[L0]] calculado es coherente con las magnitudes de entrada."
          en: "The calculated value of [[L0]] is consistent with the input magnitudes."
    model_validity_rules:
      - id: L0_validity_default
        when: "true"
        status: ok
        text:
          es: "El cálculo de [[L0]] es válido siempre que [[alpha]] y [[DeltaT]] sean no nulos y el modelo lineal sea aplicable."
          en: "The calculation of [[L0]] is valid as long as [[alpha]] and [[DeltaT]] are non-zero and the linear model is applicable."
    graph_rules:
      - id: L0_graph_default
        when: "true"
        status: ok
        text:
          es: "[[L0]] fija la pendiente de la recta [[DeltaL]] vs [[DeltaT]] en el gráfico. Un [[L0]] mayor produce una recta de mayor pendiente para el mismo [[alpha]]."
          en: "[[L0]] sets the slope of the [[DeltaL]] vs [[DeltaT]] line in the graph. A larger [[L0]] produces a steeper line for the same [[alpha]]."
    likely_errors:
      - id: L0_error_units
        when: "true"
        status: warning
        text:
          es: "Error frecuente: mezclar unidades de [[L0]] (metros vs centímetros) con las de [[DeltaL]]. Asegurarse de que todas las longitudes estén expresadas en la misma unidad."
          en: "Frequent error: mixing units of [[L0]] (metres vs centimetres) with those of [[DeltaL]]. Ensure all lengths are expressed in the same unit."
    next_step_rules:
      - id: L0_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[L0]] determinada, calcular la longitud final del sólido como L0 + [[DeltaL]] para evaluar el impacto dimensional real del proceso térmico."
          en: "With [[L0]] determined, calculate the final length of the solid as L0 + [[DeltaL]] to assess the real dimensional impact of the thermal process."

  DeltaT:
    magnitude_type: scalar_signed
    semantic_role:
      es: Variación de temperatura despejada a partir de la elongación observada y las propiedades del material.
      en: Temperature change solved from the observed elongation and the material properties.
    summary_rules:
      - id: DeltaT_summary_positive
        when: "DeltaT > 0"
        status: ok
        text:
          es: "[[DeltaT]] positivo indica calentamiento del sólido. El resultado describe cuánto aumentó la temperatura para producir la elongación [[DeltaL]] observada. Depende de [[alpha]] y [[L0]] del material."
          en: "Positive [[DeltaT]] indicates heating of the solid. The result describes how much the temperature increased to produce the observed [[DeltaL]] elongation. It depends on [[alpha]] and [[L0]] of the material."
      - id: DeltaT_summary_negative
        when: "DeltaT < 0"
        status: ok
        text:
          es: "[[DeltaT]] negativo indica enfriamiento del sólido, con contracción asociada. El valor absoluto resume cuántos kelvins descendió la temperatura para generar la contracción [[DeltaL]] observada."
          en: "Negative [[DeltaT]] indicates cooling of the solid, with associated contraction. The absolute value summarises how many kelvins the temperature dropped to generate the observed [[DeltaL]] contraction."
      - id: DeltaT_summary_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaT]] resume el cambio de temperatura responsable de la variación dimensional observada. Su signo indica si el proceso fue de calentamiento o enfriamiento."
          en: "[[DeltaT]] summarises the temperature change responsible for the observed dimensional variation. Its sign indicates whether the process was heating or cooling."
    physical_reading_rules:
      - id: DeltaT_reading_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaT]] es el estímulo que activa la dilatación. Cuanto mayor es [[DeltaT]], mayor es la elongación [[DeltaL]] que experimenta el sólido, con una relación estrictamente lineal controlada por [[alpha]] y [[L0]]."
          en: "[[DeltaT]] is the stimulus that drives expansion. The larger [[DeltaT]], the greater the elongation [[DeltaL]] the solid experiences, with a strictly linear relationship controlled by [[alpha]] and [[L0]]."
    coherence_rules:
      - id: DeltaT_coherence_sign
        when: "DeltaT * DeltaL < 0"
        status: error
        text:
          es: "El signo de [[DeltaT]] es opuesto al de [[DeltaL]], incoherente con un [[alpha]] positivo. Revisar el orden de la resta en [[DeltaT]] o verificar el signo de [[DeltaL]]."
          en: "The sign of [[DeltaT]] is opposite to that of [[DeltaL]], inconsistent with positive [[alpha]]. Check the subtraction order in [[DeltaT]] or verify the sign of [[DeltaL]]."
      - id: DeltaT_coherence_default
        when: "true"
        status: ok
        text:
          es: "La coherencia entre [[DeltaT]] y [[DeltaL]] es correcta para un material con [[alpha]] positivo."
          en: "The coherence between [[DeltaT]] and [[DeltaL]] is correct for a material with positive [[alpha]]."
    model_validity_rules:
      - id: DeltaT_validity_large
        when: "abs(DeltaT) > 300"
        status: warning
        text:
          es: "[[DeltaT]] mayor de 300 K puede poner en cuestión la hipótesis de [[alpha]] constante. Para este rango conviene usar el valor promedio de [[alpha]] tabulado en el intervalo."
          en: "[[DeltaT]] greater than 300 K may call into question the assumption of constant [[alpha]]. For this range, use the average value of [[alpha]] tabulated over the interval."
      - id: DeltaT_validity_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[DeltaT]] está dentro del rango donde el modelo lineal con [[alpha]] constante proporciona resultados fiables."
          en: "The value of [[DeltaT]] is within the range where the linear model with constant [[alpha]] provides reliable results."
    graph_rules:
      - id: DeltaT_graph_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaT]] es la variable del eje horizontal en la gráfica [[DeltaL]] vs [[DeltaT]]. El punto calculado debe ubicarse sobre la recta de pendiente [[alpha]]·[[L0]]."
          en: "[[DeltaT]] is the horizontal axis variable in the [[DeltaL]] vs [[DeltaT]] graph. The calculated point must lie on the straight line of slope [[alpha]]·[[L0]]."
    likely_errors:
      - id: DeltaT_error_order
        when: "true"
        status: warning
        text:
          es: "Error frecuente: calcular [[DeltaT]] como temperatura inicial menos temperatura final, obteniendo el signo contrario. La convención correcta es T_final menos T_inicial."
          en: "Frequent error: calculating [[DeltaT]] as initial temperature minus final temperature, obtaining the opposite sign. The correct convention is T_final minus T_initial."
    next_step_rules:
      - id: DeltaT_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[DeltaT]] conocido, calcular la dilatación volumétrica [[DeltaV]] del mismo cuerpo usando [[beta]] y [[V0]] proporciona una visión completa del efecto tridimensional del cambio térmico."
          en: "With [[DeltaT]] known, calculating the volumetric expansion [[DeltaV]] of the same body using [[beta]] and [[V0]] provides a complete picture of the three-dimensional effect of the thermal change."

  DeltaV:
    magnitude_type: scalar_signed
    semantic_role:
      es: Variación de volumen del cuerpo resultante del cambio de temperatura, calculada a partir de beta, V0 y DeltaT.
      en: Volume change of the body resulting from the temperature change, calculated from beta, V0 and DeltaT.
    summary_rules:
      - id: DeltaV_summary_positive
        when: "DeltaV > 0"
        status: ok
        text:
          es: "[[DeltaV]] positivo indica expansión volumétrica: el cuerpo ocupa más espacio al calentarse. El resultado resume el efecto tridimensional del cambio térmico y depende de [[beta]], [[V0]] y [[DeltaT]]."
          en: "Positive [[DeltaV]] indicates volumetric expansion: the body occupies more space on heating. The result summarises the three-dimensional effect of the thermal change and depends on [[beta]], [[V0]] and [[DeltaT]]."
      - id: DeltaV_summary_negative
        when: "DeltaV < 0"
        status: ok
        text:
          es: "[[DeltaV]] negativo indica contracción volumétrica: el cuerpo se comprime al enfriarse. La magnitud del efecto tridimensional es aproximadamente tres veces mayor que la variación relativa de una dimensión sola."
          en: "Negative [[DeltaV]] indicates volumetric contraction: the body shrinks on cooling. The magnitude of the three-dimensional effect is approximately three times greater than the relative change of a single dimension."
      - id: DeltaV_summary_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaV]] describe la variación de volumen del cuerpo. Su valor resume el impacto tridimensional del proceso térmico y es proporcional tanto a [[V0]] como a [[beta]] del material."
          en: "[[DeltaV]] describes the volume change of the body. Its value summarises the three-dimensional impact of the thermal process and is proportional to both [[V0]] and [[beta]] of the material."
    physical_reading_rules:
      - id: DeltaV_reading_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaV]] es aproximadamente tres veces mayor que la variación unidimensional equivalente (mismas condiciones de [[alpha]] y [[DeltaT]]). Esto explica por qué los efectos volumétricos son más críticos en recipientes cerrados que los efectos lineales en barras libres."
          en: "[[DeltaV]] is approximately three times larger than the equivalent one-dimensional change (same [[alpha]] and [[DeltaT]] conditions). This explains why volumetric effects are more critical in closed containers than linear effects in free rods."
    coherence_rules:
      - id: DeltaV_coherence_sign
        when: "DeltaV * DeltaT < 0"
        status: error
        text:
          es: "El signo de [[DeltaV]] es opuesto al de [[DeltaT]] para un material con [[beta]] positivo. Revisar el signo de [[beta]] o el orden de la resta en [[DeltaT]]."
          en: "The sign of [[DeltaV]] is opposite to that of [[DeltaT]] for a material with positive [[beta]]. Check the sign of [[beta]] or the subtraction order in [[DeltaT]]."
      - id: DeltaV_coherence_default
        when: "true"
        status: ok
        text:
          es: "La coherencia entre [[DeltaV]], [[beta]], [[V0]] y [[DeltaT]] es correcta con el modelo lineal."
          en: "The coherence between [[DeltaV]], [[beta]], [[V0]] and [[DeltaT]] is correct with the linear model."
    model_validity_rules:
      - id: DeltaV_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo lineal de [[DeltaV]] es válido mientras [[beta]]·[[DeltaT]] sea pequeño frente a 1 y no haya cambio de estado. Para líquidos en recipientes cerrados, considerar además la presión generada."
          en: "The linear model of [[DeltaV]] is valid as long as [[beta]]·[[DeltaT]] is small compared to 1 and there is no phase change. For liquids in closed containers, also consider the generated pressure."
    graph_rules:
      - id: DeltaV_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica [[DeltaV]] vs [[DeltaT]], el punto debe caer sobre la recta de pendiente [[beta]]·[[V0]]. La comparación visual con la gráfica [[DeltaL]] vs [[DeltaT]] ilustra la relación entre los coeficientes lineal y volumétrico."
          en: "In the [[DeltaV]] vs [[DeltaT]] graph, the point must fall on the straight line of slope [[beta]]·[[V0]]. Visual comparison with the [[DeltaL]] vs [[DeltaT]] graph illustrates the relationship between linear and volumetric coefficients."
    likely_errors:
      - id: DeltaV_error_alpha_instead_beta
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar [[alpha]] en lugar de [[beta]] en la fórmula de dilatación volumétrica, obteniendo un resultado tres veces menor al real para sólidos isótropos."
          en: "Frequent error: using [[alpha]] instead of [[beta]] in the volumetric expansion formula, obtaining a result three times smaller than the real value for isotropic solids."
    next_step_rules:
      - id: DeltaV_next_pressure
        when: "true"
        status: ok
        text:
          es: "Conocido [[DeltaV]], el siguiente paso en problemas de ingeniería es estimar la presión generada si el recipiente es rígido e impide la expansión libre, usando el módulo de compresibilidad del material."
          en: "With [[DeltaV]] known, the next step in engineering problems is to estimate the pressure generated if the container is rigid and prevents free expansion, using the bulk modulus of the material."

  beta:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: Coeficiente de dilatación volumétrica del material, determinado a partir de datos volumétricos o derivado del coeficiente lineal.
      en: Volumetric expansion coefficient of the material, determined from volumetric data or derived from the linear coefficient.
    summary_rules:
      - id: beta_summary_from_alpha
        when: "beta > 0"
        status: ok
        text:
          es: "[[beta]] describe la sensibilidad volumétrica del material ante cambios térmicos. Para sólidos isótropos, [[beta]] resulta aproximadamente tres veces [[alpha]], lo que resume la relación geométrica entre dilatación lineal y tridimensional."
          en: "[[beta]] describes the volumetric thermal sensitivity of the material. For isotropic solids, [[beta]] results in approximately three times [[alpha]], which summarises the geometric relationship between linear and three-dimensional expansion."
      - id: beta_summary_default
        when: "true"
        status: ok
        text:
          es: "[[beta]] resume cuánto varía relativamente el volumen del material por cada kelvin de cambio térmico. Es la propiedad clave en diseño de recipientes y análisis de presiones térmicas."
          en: "[[beta]] summarises how much the material's volume changes relatively per kelvin of thermal change. It is the key property in container design and thermal pressure analysis."
    physical_reading_rules:
      - id: beta_reading_default
        when: "true"
        status: ok
        text:
          es: "Un [[beta]] elevado indica que el material cambia significativamente de volumen con pequeñas variaciones de [[DeltaT]], lo que resulta crítico en recipientes sellados. Materiales con [[beta]] bajo, como el cuarzo fundido, son ideales para aplicaciones de alta estabilidad dimensional."
          en: "A high [[beta]] indicates the material changes volume significantly for small [[DeltaT]] variations, which is critical in sealed containers. Materials with low [[beta]], such as fused quartz, are ideal for high dimensional stability applications."
    coherence_rules:
      - id: beta_coherence_negative
        when: "beta < 0"
        status: error
        text:
          es: "[[beta]] negativo es físicamente imposible para materiales convencionales en el modelo estándar. Revisar los datos de [[DeltaV]] y [[DeltaT]] empleados."
          en: "Negative [[beta]] is physically impossible for conventional materials in the standard model. Check the [[DeltaV]] and [[DeltaT]] data used."
      - id: beta_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[beta]] calculado es coherente con el rango esperado para materiales sólidos o líquidos."
          en: "The calculated value of [[beta]] is consistent with the expected range for solid or liquid materials."
    model_validity_rules:
      - id: beta_validity_default
        when: "true"
        status: ok
        text:
          es: "[[beta]] como constante es válido en el régimen lineal de temperatura. Para líquidos con comportamiento anómalo (como el agua entre 0 y 4 °C) o para variaciones de temperatura muy amplias, [[beta]] depende de T y el modelo de coeficiente constante no aplica."
          en: "[[beta]] as a constant is valid in the linear temperature regime. For liquids with anomalous behaviour (such as water between 0 and 4 °C) or for very wide temperature variations, [[beta]] depends on T and the constant-coefficient model does not apply."
    graph_rules:
      - id: beta_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica [[DeltaV]] vs [[DeltaT]], [[beta]] es la pendiente dividida entre [[V0]]. Comparar con la pendiente de [[DeltaL]] vs [[DeltaT]] dividida entre [[L0]] permite verificar la relación [[beta]] ≈ 3·[[alpha]]."
          en: "In the [[DeltaV]] vs [[DeltaT]] graph, [[beta]] is the slope divided by [[V0]]. Comparing with the slope of [[DeltaL]] vs [[DeltaT]] divided by [[L0]] allows verifying the relation [[beta]] ≈ 3·[[alpha]]."
    likely_errors:
      - id: beta_error_equal_alpha
        when: "true"
        status: warning
        text:
          es: "Error frecuente: asumir que [[beta]] es igual a [[alpha]]. Para sólidos isótropos, [[beta]] ≈ 3·[[alpha]]. Usar [[alpha]] en la fórmula volumétrica produce un resultado tres veces inferior al real."
          en: "Frequent error: assuming [[beta]] equals [[alpha]]. For isotropic solids, [[beta]] ≈ 3·[[alpha]]. Using [[alpha]] in the volumetric formula produces a result three times smaller than the real value."
    next_step_rules:
      - id: beta_next_pressure
        when: "true"
        status: ok
        text:
          es: "Con [[beta]] calculado, el siguiente paso es estimar tensiones y presiones en recipientes rígidos usando la relación entre [[DeltaV]] y el módulo de compresibilidad del material o del fluido contenido."
          en: "With [[beta]] calculated, the next step is to estimate stresses and pressures in rigid containers using the relation between [[DeltaV]] and the bulk modulus of the material or the contained fluid."

  V0:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: Volumen inicial del cuerpo, despejado a partir de la variación de volumen observada y las propiedades del material.
      en: Initial volume of the body, solved from the observed volume change and the material properties.
    summary_rules:
      - id: V0_summary_default
        when: "true"
        status: ok
        text:
          es: "[[V0]] resume el volumen de referencia del cuerpo antes del proceso térmico. Su valor indica la escala del sistema y, junto con [[beta]], determina la variación absoluta de volumen para cualquier [[DeltaT]]."
          en: "[[V0]] summarises the reference volume of the body before the thermal process. Its value indicates the scale of the system and, together with [[beta]], determines the absolute volume change for any [[DeltaT]]."
    physical_reading_rules:
      - id: V0_reading_default
        when: "true"
        status: ok
        text:
          es: "[[V0]] amplifica el efecto del coeficiente [[beta]]: un cuerpo con mayor [[V0]] experimenta una variación de volumen absoluta mayor para el mismo [[DeltaT]], aunque la variación relativa [[DeltaV]]/[[V0]] sea idéntica."
          en: "[[V0]] amplifies the effect of coefficient [[beta]]: a body with larger [[V0]] experiences a greater absolute volume change for the same [[DeltaT]], although the relative change [[DeltaV]]/[[V0]] is identical."
    coherence_rules:
      - id: V0_coherence_negative
        when: "V0 < 0"
        status: error
        text:
          es: "[[V0]] negativo no tiene significado físico. Revisar los datos de entrada de [[DeltaV]], [[beta]] y [[DeltaT]]."
          en: "Negative [[V0]] has no physical meaning. Check the input values for [[DeltaV]], [[beta]] and [[DeltaT]]."
      - id: V0_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[V0]] calculado es físicamente coherente con las magnitudes de entrada."
          en: "The calculated value of [[V0]] is physically consistent with the input magnitudes."
    model_validity_rules:
      - id: V0_validity_default
        when: "true"
        status: ok
        text:
          es: "El cálculo de [[V0]] es válido mientras [[beta]] y [[DeltaT]] sean no nulos y el modelo lineal sea aplicable al material."
          en: "The calculation of [[V0]] is valid as long as [[beta]] and [[DeltaT]] are non-zero and the linear model is applicable to the material."
    graph_rules:
      - id: V0_graph_default
        when: "true"
        status: ok
        text:
          es: "[[V0]] fija la pendiente de la recta [[DeltaV]] vs [[DeltaT]] en el gráfico. Un [[V0]] mayor produce una recta de mayor pendiente para el mismo [[beta]]."
          en: "[[V0]] sets the slope of the [[DeltaV]] vs [[DeltaT]] line in the graph. A larger [[V0]] produces a steeper line for the same [[beta]]."
    likely_errors:
      - id: V0_error_units
        when: "true"
        status: warning
        text:
          es: "Error frecuente: introducir [[V0]] en litros cuando [[beta]] está en K⁻¹ del SI. Convertir a metros cúbicos antes de calcular [[DeltaV]]."
          en: "Frequent error: entering [[V0]] in litres when [[beta]] is in SI K⁻¹. Convert to cubic metres before calculating [[DeltaV]]."
    next_step_rules:
      - id: V0_next_final
        when: "true"
        status: ok
        text:
          es: "Con [[V0]] determinado, calcular el volumen final del cuerpo como V0 + [[DeltaV]] y evaluar si ese volumen cabe en el recipiente de diseño con la holgura necesaria."
          en: "With [[V0]] determined, calculate the final volume of the body as V0 + [[DeltaV]] and assess whether that volume fits in the design container with the necessary clearance."

cross_checks:
  - id: beta_vs_alpha_consistency
    when: "abs(beta - 3 * alpha) > alpha"
    status: warning
    text:
      es: "La relación entre [[beta]] y [[alpha]] se aleja significativamente del factor 3 esperado para sólidos isótropos. El material puede ser anisótropo o los coeficientes corresponden a materiales distintos."
      en: "The relation between [[beta]] and [[alpha]] departs significantly from the expected factor of 3 for isotropic solids. The material may be anisotropic or the coefficients correspond to different materials."

error_patterns:
  - id: units_mismatch
    description:
      es: "Mezcla de unidades entre magnitudes de longitud (cm vs m) o de coeficientes (K⁻¹ vs °C⁻¹)."
      en: "Unit mismatch between length magnitudes (cm vs m) or coefficients (K⁻¹ vs °C⁻¹)."
  - id: sign_inversion_DeltaT
    description:
      es: "Inversión del signo de DeltaT por calcular T_inicial − T_final en lugar de T_final − T_inicial."
      en: "Sign inversion of DeltaT by computing T_initial − T_final instead of T_final − T_initial."

graph_binding:
  type: Coord
  x_axis: DeltaT
  y_axis: DeltaL
  secondary_y: DeltaV

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
