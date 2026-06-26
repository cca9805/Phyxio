const e=`version: "v5"
id: interpretacion_transformadores
leaf_id: transformadores

nombre:
  es: Interpretación de los transformadores
  en: Interpretation of transformers

scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: induccion-electromagnetica
  parent_id: aplicaciones
  ruta_relativa: fisica-clasica/electromagnetismo/induccion-electromagnetica/aplicaciones/transformadores

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretación física
    en: Physical interpretation
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_rules: 3
    show_warnings: true

dependencies:
  formulas:
    - relacion_transformacion
    - relacion_corriente
    - potencia_aparente
    - rendimiento_transformador
    - perdidas_totales
  magnitudes:
    - V_1
    - V_2
    - I_1
    - I_2
    - N_1
    - N_2
    - S
    - eta
    - P_1
    - P_2
    - P_p
    - P_Cu
    - P_Fe

global_context:
  physical_domain:
    es: "Electromagnetismo clásico — conversión de niveles de tensión mediante inducción electromagnética mutua entre devanados acoplados magnéticamente."
    en: "Classical electromagnetism — voltage level conversion through mutual electromagnetic induction between magnetically coupled windings."
  axis_convention:
    es: "Las tensiones y corrientes son valores eficaces (RMS) positivos. El rendimiento está acotado en el intervalo (0, 1). La relación de transformación N_1/N_2 > 1 indica transformador reductor."
    en: "Voltages and currents are positive RMS values. Efficiency is bounded in the interval (0, 1). Turns ratio N_1/N_2 > 1 indicates a step-down transformer."
  standard_assumptions:
    - "Núcleo ferromagnético de alta permeabilidad"
    - "Acoplamiento magnético perfecto entre devanados"
    - "Pérdidas despreciables en primera aproximación"
    - "Régimen estacionario sinusoidal"
    - "Corriente de magnetización pequeña frente a la de carga"
  standard_warnings:
    - "El modelo ideal no incluye pérdidas ni dispersión de flujo"
    - "La corriente de cortocircuito puede ser muy elevada"
    - "Las pérdidas de hierro son aproximadamente constantes a tensión fija"
    - "Las pérdidas de cobre varían con el cuadrado de la carga"

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

  V_1:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "[[V_1]] es la tensión de entrada que alimenta el transformador y determina, junto con la relación de espiras, la tensión de salida."
      en: "[[V_1]] is the input voltage that feeds the transformer and determines, together with the turns ratio, the output voltage."
    summary_rules:
      - id: v1_summary_default
        when: "true"
        status: ok
        text:
          es: "[[V_1]] representa la tensión eficaz aplicada al primario. Es el punto de entrada de energía eléctrica al transformador."
          en: "[[V_1]] represents the RMS voltage applied to the primary. It is the entry point of electrical energy into the transformer."
    physical_reading_rules:
      - id: v1_reading_relation
        when: "true"
        status: ok
        text:
          es: "La tensión primaria induce un flujo magnético variable en el núcleo, que a su vez induce la tensión secundaria según la ley de Faraday."
          en: "The primary voltage induces a varying magnetic flux in the core, which in turn induces the secondary voltage according to Faraday's law."
    coherence_rules:
      - id: v1_coherence_positive
        when: "V_1 <= 0"
        status: error
        text:
          es: "[[V_1]] debe ser positiva. Una tensión nula o negativa indica error de datos."
          en: "[[V_1]] must be positive. Zero or negative voltage indicates data error."
    model_validity_rules:
      - id: v1_validity_range
        when: "true"
        status: ok
        text:
          es: "El modelo es válido para tensiones dentro del rango nominal del transformador. Tensiones excesivas pueden saturar el núcleo."
          en: "The model is valid for voltages within the transformer's nominal range. Excessive voltages may saturate the core."
    graph_rules:
      - id: v1_graph_input
        when: "true"
        status: ok
        text:
          es: "En la curva de rendimiento vs carga, [[V_1]] es un parámetro fijo que define el punto de operación."
          en: "In the efficiency vs load curve, [[V_1]] is a fixed parameter defining the operating point."
    likely_errors:
      - id: v1_error_peak
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar el valor pico en lugar del valor eficaz (RMS). La fórmula usa valores eficaces."
          en: "Common error: using peak value instead of RMS value. The formula uses RMS values."
    next_step_rules:
      - id: v1_next_v2
        when: "true"
        status: ok
        text:
          es: "Con [[V_1]] conocida, calcular [[V_2]] usando la relación de transformación. Verificar si es elevador o reductor."
          en: "With [[V_1]] known, calculate [[V_2]] using the transformation ratio. Verify if it is step-up or step-down."

  V_2:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "[[V_2]] es la tensión de salida disponible para alimentar la carga, determinada por la tensión primaria y la relación de espiras."
      en: "[[V_2]] is the output voltage available to feed the load, determined by the primary voltage and the turns ratio."
    summary_rules:
      - id: v2_summary_default
        when: "true"
        status: ok
        text:
          es: "[[V_2]] es la tensión inducida en el secundario. Depende linealmente de [[V_1]] y de la relación N_2/N_1."
          en: "[[V_2]] is the voltage induced in the secondary. It depends linearly on [[V_1]] and on the ratio N_2/N_1."
    physical_reading_rules:
      - id: v2_reading_step
        when: "N_2 > N_1"
        status: ok
        text:
          es: "Con [[N_2]] mayor que [[N_1]], el transformador es elevador: [[V_2]] supera a [[V_1]]."
          en: "With [[N_2]] greater than [[N_1]], the transformer is step-up: [[V_2]] exceeds [[V_1]]."
      - id: v2_reading_stepdown
        when: "N_2 < N_1"
        status: ok
        text:
          es: "Con [[N_2]] menor que [[N_1]], el transformador es reductor: [[V_2]] es inferior a [[V_1]]."
          en: "With [[N_2]] less than [[N_1]], the transformer is step-down: [[V_2]] is lower than [[V_1]]."
    coherence_rules:
      - id: v2_coherence_relation
        when: "true"
        status: ok
        text:
          es: "Verificar que [[V_2]] sea igual a [[V_1]] multiplicado por la relación N_2/N_1."
          en: "Verify that [[V_2]] equals [[V_1]] multiplied by the ratio N_2/N_1."
    model_validity_rules:
      - id: v2_validity_load
        when: "true"
        status: ok
        text:
          es: "La tensión secundaria disminuye ligeramente bajo carga debido a la impedancia interna, efecto no incluido en el modelo ideal."
          en: "Secondary voltage drops slightly under load due to internal impedance, an effect not included in the ideal model."
    graph_rules:
      - id: v2_graph_vs_load
        when: "true"
        status: ok
        text:
          es: "En la curva de regulación de tensión, [[V_2]] decrece suavemente al aumentar la carga desde vacío hasta plena carga."
          en: "In the voltage regulation curve, [[V_2]] decreases smoothly as load increases from no-load to full load."
    likely_errors:
      - id: v2_error_ratio
        when: "true"
        status: warning
        text:
          es: "Error típico: invertir la relación N_1/N_2 calculando [[V_2]], obteniendo el valor inverso."
          en: "Typical error: inverting the ratio N_1/N_2 when calculating [[V_2]], obtaining the inverse value."
    next_step_rules:
      - id: v2_next_load
        when: "true"
        status: ok
        text:
          es: "Con [[V_2]] conocida, determinar la corriente secundaria [[I_2]] según la carga conectada."
          en: "With [[V_2]] known, determine secondary current [[I_2]] according to the connected load."

  N_1:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "[[N_1]] es el número de espiras del devanado primario, parámetro constructivo que fija la escala de transformación junto con [[N_2]]."
      en: "[[N_1]] is the number of turns in the primary winding, a constructive parameter that sets the transformation scale together with [[N_2]]."
    summary_rules:
      - id: n1_summary_default
        when: "true"
        status: ok
        text:
          es: "[[N_1]] determina la relación de transformación junto con [[N_2]]. A mayor [[N_1]], menor la tensión secundaria para una dada [[N_2]]."
          en: "[[N_1]] determines the transformation ratio together with [[N_2]]. Higher [[N_1]] means lower secondary voltage for a given [[N_2]]."
    physical_reading_rules:
      - id: n1_reading_turns
        when: "true"
        status: ok
        text:
          es: "[[N_1]] representa el número de vueltas de hilo conductor en el devanado primario. Es un parámetro fijado en la construcción."
          en: "[[N_1]] represents the number of turns of conductive wire in the primary winding. It is a parameter fixed during construction."
    coherence_rules:
      - id: n1_coherence_positive
        when: "N_1 <= 0"
        status: error
        text:
          es: "[[N_1]] debe ser un entero positivo. Cero o negativo es físicamente imposible."
          en: "[[N_1]] must be a positive integer. Zero or negative is physically impossible."
    model_validity_rules:
      - id: n1_validity_const
        when: "true"
        status: ok
        text:
          es: "[[N_1]] es constante en el modelo. En la realidad, puede variar ligeramente con la temperatura por dilatación."
          en: "[[N_1]] is constant in the model. In reality, it may vary slightly with temperature due to expansion."
    graph_rules:
      - id: n1_graph_parameter
        when: "true"
        status: ok
        text:
          es: "[[N_1]] y [[N_2]] actúan como parámetros que escalan las curvas de tensión vs carga."
          en: "[[N_1]] and [[N_2]] act as parameters that scale the voltage vs load curves."
    likely_errors:
      - id: n1_error_confuse
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir [[N_1]] con [[N_2]] al determinar si el transformador es elevador o reductor."
          en: "Frequent error: confusing [[N_1]] with [[N_2]] when determining if the transformer is step-up or step-down."
    next_step_rules:
      - id: n1_next_ratio
        when: "true"
        status: ok
        text:
          es: "Con [[N_1]] y [[N_2]] conocidas, calcular la relación de transformación y determinar las tensiones y corrientes."
          en: "With [[N_1]] and [[N_2]] known, calculate the transformation ratio and determine voltages and currents."

  N_2:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "[[N_2]] es el número de espiras del devanado secundario, parámetro constructivo complementario a [[N_1]] para la relación de transformación."
      en: "[[N_2]] is the number of turns in the secondary winding, a constructive parameter complementary to [[N_1]] for the transformation ratio."
    summary_rules:
      - id: n2_summary_default
        when: "true"
        status: ok
        text:
          es: "[[N_2]] determina junto con [[N_1]] la relación de transformación. Si [[N_2]] > [[N_1]], el transformador es elevador."
          en: "[[N_2]] determines together with [[N_1]] the transformation ratio. If [[N_2]] > [[N_1]], the transformer is step-up."
    physical_reading_rules:
      - id: n2_reading_turns
        when: "true"
        status: ok
        text:
          es: "[[N_2]] representa las vueltas del devanado secundario. Es fijado en el diseño según la tensión de salida deseada."
          en: "[[N_2]] represents the turns of the secondary winding. It is fixed in design according to the desired output voltage."
    coherence_rules:
      - id: n2_coherence_positive
        when: "N_2 <= 0"
        status: error
        text:
          es: "[[N_2]] debe ser un entero positivo. Cero o negativo es físicamente imposible."
          en: "[[N_2]] must be a positive integer. Zero or negative is physically impossible."
    model_validity_rules:
      - id: n2_validity_const
        when: "true"
        status: ok
        text:
          es: "[[N_2]] es constante en el modelo. La relación N_2/N_1 determina completamente la transformación de tensiones."
          en: "[[N_2]] is constant in the model. The ratio N_2/N_1 completely determines the voltage transformation."
    graph_rules:
      - id: n2_graph_parameter
        when: "true"
        status: ok
        text:
          es: "La relación [[N_2]]/[[N_1]] es la pendiente de la curva de [[V_2]] vs [[V_1]]."
          en: "The ratio [[N_2]]/[[N_1]] is the slope of the [[V_2]] vs [[V_1]] curve."
    likely_errors:
      - id: n2_error_confuse
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar [[N_2]]/[[N_1]] para corrientes en lugar de [[N_1]]/[[N_2]]. La relación de corrientes es inversa."
          en: "Frequent error: using [[N_2]]/[[N_1]] for currents instead of [[N_1]]/[[N_2]]. The current ratio is inverse."
    next_step_rules:
      - id: n2_next_calculate
        when: "true"
        status: ok
        text:
          es: "Con [[N_2]] y [[V_1]] conocidas, calcular [[V_2]] y verificar si cumple los requisitos de la carga."
          en: "With [[N_2]] and [[V_1]] known, calculate [[V_2]] and verify if it meets the load requirements."

  I_1:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "[[I_1]] es la corriente que demanda el primario, determinada por la corriente secundaria y la conservación de potencia."
      en: "[[I_1]] is the current drawn by the primary, determined by the secondary current and power conservation."
    summary_rules:
      - id: i1_summary_default
        when: "true"
        status: ok
        text:
          es: "[[I_1]] depende de [[I_2]] según la relación inversa de espiras. El primario se ajusta automáticamente a la carga del secundario."
          en: "[[I_1]] depends on [[I_2]] according to the inverse turns ratio. The primary automatically adjusts to the secondary load."
    physical_reading_rules:
      - id: i1_reading_conservation
        when: "true"
        status: ok
        text:
          es: "El principio de conservación de la energía obliga a que la potencia en el primario iguale a la del secundario más pérdidas. Por eso [[I_1]] es inversamente proporcional a la relación de espiras."
          en: "The principle of energy conservation requires that primary power equals secondary power plus losses. Therefore [[I_1]] is inversely proportional to the turns ratio."
    coherence_rules:
      - id: i1_coherence_relation
        when: "true"
        status: ok
        text:
          es: "Verificar que [[I_1]] sea igual a [[I_2]] multiplicado por [[N_2]]/[[N_1]]."
          en: "Verify that [[I_1]] equals [[I_2]] multiplied by [[N_2]]/[[N_1]]."
    model_validity_rules:
      - id: i1_validity_no_load
        when: "I_2 == 0"
        status: warning
        text:
          es: "En vacío, [[I_1]] no es cero: circula la pequeña corriente de magnetización del núcleo."
          en: "At no-load, [[I_1]] is not zero: the small magnetisation current of the core flows."
    graph_rules:
      - id: i1_graph_vs_i2
        when: "true"
        status: ok
        text:
          es: "En la gráfica [[I_1]] vs [[I_2]], la relación es lineal con pendiente [[N_2]]/[[N_1]]."
          en: "In the graph [[I_1]] vs [[I_2]], the relationship is linear with slope [[N_2]]/[[N_1]]."
    likely_errors:
      - id: i1_error_direct
        when: "true"
        status: warning
        text:
          es: "Error típico: aplicar la misma relación de espiras a corrientes que a tensiones. Las corrientes usan la relación inversa."
          en: "Typical error: applying the same turns ratio to currents as to voltages. Currents use the inverse ratio."
    next_step_rules:
      - id: i1_next_power
        when: "true"
        status: ok
        text:
          es: "Con [[I_1]] y [[V_1]] calcular la potencia aparente [[S]] y el rendimiento [[eta]] si se conoce [[P_2]]."
          en: "With [[I_1]] and [[V_1]] calculate apparent power [[S]] and efficiency [[eta]] if [[P_2]] is known."

  I_2:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "[[I_2]] es la corriente entregada al secundario, determinada por la carga conectada y limitada por la capacidad del transformador."
      en: "[[I_2]] is the current delivered to the secondary, determined by the connected load and limited by the transformer capacity."
    summary_rules:
      - id: i2_summary_default
        when: "true"
        status: ok
        text:
          es: "[[I_2]] depende de la impedancia de la carga según la ley de Ohm. A mayor carga, mayor [[I_2]] y mayor [[I_1]]."
          en: "[[I_2]] depends on the load impedance according to Ohm's law. Higher load means higher [[I_2]] and higher [[I_1]]."
    physical_reading_rules:
      - id: i2_reading_load
        when: "true"
        status: ok
        text:
          es: "[[I_2]] es la corriente que realmente realiza el trabajo útil en la carga. Su valor máximo está limitado por [[S]], la potencia nominal del transformador."
          en: "[[I_2]] is the current that actually performs useful work in the load. Its maximum value is limited by [[S]], the transformer rated power."
    coherence_rules:
      - id: i2_coherence_max
        when: "I_2 > S / V_2"
        status: warning
        text:
          es: "[[I_2]] supera el límite de la potencia nominal [[S]]. El transformador está sobrecargado."
          en: "[[I_2]] exceeds the rated power [[S]] limit. The transformer is overloaded."
    model_validity_rules:
      - id: i2_validity_nominal
        when: "true"
        status: ok
        text:
          es: "El modelo es válido mientras [[I_2]] no exceda el valor nominal. Corrientes mayores causan sobrecalentamiento."
          en: "The model is valid as long as [[I_2]] does not exceed the nominal value. Higher currents cause overheating."
    graph_rules:
      - id: i2_graph_vs_load
        when: "true"
        status: ok
        text:
          es: "En la curva de caída de tensión, [[I_2]] es la variable independiente que causa la disminución de [[V_2]]."
          en: "In the voltage drop curve, [[I_2]] is the independent variable causing the decrease in [[V_2]]."
    likely_errors:
      - id: i2_error_short
        when: "I_2 > 10000"
        status: error
        text:
          es: "Corriente secundaria excesiva: posible cortocircuito. El transformador debe desconectarse inmediatamente."
          en: "Excessive secondary current: possible short circuit. The transformer must be disconnected immediately."
    next_step_rules:
      - id: i2_next_i1
        when: "true"
        status: ok
        text:
          es: "Con [[I_2]] conocida, calcular [[I_1]] usando la relación de corrientes inversa, y luego las pérdidas de cobre."
          en: "With [[I_2]] known, calculate [[I_1]] using the inverse current ratio, and then copper losses."

  S:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "[[S]] es la capacidad de transferencia de potencia del transformador, determinando los límites máximos de corriente en ambos devanados."
      en: "[[S]] is the power transfer capacity of the transformer, determining the maximum current limits in both windings."
    summary_rules:
      - id: s_summary_default
        when: "true"
        status: ok
        text:
          es: "[[S]] representa la potencia aparente nominal. Es el parámetro de diseño más importante del transformador."
          en: "[[S]] represents the nominal apparent power. It is the most important design parameter of the transformer."
    physical_reading_rules:
      - id: s_reading_capacity
        when: "true"
        status: ok
        text:
          es: "[[S]] limita la corriente máxima que puede circular por los devanados sin sobrecalentarlos. Es la capacidad de carga máxima."
          en: "[[S]] limits the maximum current that can flow through the windings without overheating them. It is the maximum load capacity."
    coherence_rules:
      - id: s_coherence_check
        when: "V_1 * I_1 > S * 1.1"
        status: warning
        text:
          es: "La potencia calculada excede [[S]] en más del 10%. El transformador está sobrecargado."
          en: "The calculated power exceeds [[S]] by more than 10%. The transformer is overloaded."
    model_validity_rules:
      - id: s_validity_rating
        when: "true"
        status: ok
        text:
          es: "[[S]] es una especificación constructiva constante. El modelo es válido para cargas hasta el 100% de [[S]]."
          en: "[[S]] is a constant constructive specification. The model is valid for loads up to 100% of [[S]]."
    graph_rules:
      - id: s_graph_max
        when: "true"
        status: ok
        text:
          es: "En la curva de rendimiento vs carga, [[S]] marca el punto de máxima carga en el eje horizontal."
          en: "In the efficiency vs load curve, [[S]] marks the maximum load point on the horizontal axis."
    likely_errors:
      - id: s_error_apparent
        when: "true"
        status: warning
        text:
          es: "Error común: usar [[S]] directamente en cálculos de rendimiento que requieren comparar [[P_1]] y [[P_2]]."
          en: "Common error: using [[S]] directly in efficiency calculations that require comparing [[P_1]] and [[P_2]]."
    next_step_rules:
      - id: s_next_limits
        when: "true"
        status: ok
        text:
          es: "Con [[S]] conocida, calcular las corrientes máximas nominales en primario y secundario para proteger el transformador."
          en: "With [[S]] known, calculate the maximum rated currents in primary and secondary to protect the transformer."

  eta:
    magnitude_type: ratio
    semantic_role:
      es: "[[eta]] cuantifica la eficiencia energética del transformador, siempre menor que 1 por las pérdidas inevitables."
      en: "[[eta]] quantifies the energy efficiency of the transformer, always less than 1 due to unavoidable losses."
    summary_rules:
      - id: eta_summary_high
        when: "eta > 0.95"
        status: ok
        text:
          es: "[[eta]] superior al 95% indica un transformador eficiente. Más del 95% de la energía se transfiere útilmente."
          en: "[[eta]] above 95% indicates an efficient transformer. More than 95% of energy is usefully transferred."
      - id: eta_summary_low
        when: "eta < 0.90"
        status: warning
        text:
          es: "[[eta]] inferior al 90% indica pérdidas elevadas. Verificar el estado del transformador o la sobrecarga."
          en: "[[eta]] below 90% indicates high losses. Check transformer condition or overload."
    physical_reading_rules:
      - id: eta_reading_losses
        when: "true"
        status: ok
        text:
          es: "(1 - [[eta]]) representa la fracción de energía perdida como calor en cobre y hierro. A menor [[eta]], mayor calentamiento."
          en: "(1 - [[eta]]) represents the fraction of energy lost as heat in copper and iron. Lower [[eta]] means more heating."
    coherence_rules:
      - id: eta_coherence_range
        when: "eta >= 1 or eta <= 0"
        status: error
        text:
          es: "[[eta]] debe estar estrictamente entre 0 y 1. Fuera de ese rango hay error en los datos."
          en: "[[eta]] must be strictly between 0 and 1. Outside that range there is an error in the data."
    model_validity_rules:
      - id: eta_validity_load
        when: "true"
        status: ok
        text:
          es: "[[eta]] varía con la carga: es máximo típicamente al 50-75% de la carga nominal."
          en: "[[eta]] varies with load: it is typically maximum at 50-75% of nominal load."
    graph_rules:
      - id: eta_graph_vs_load
        when: "true"
        status: ok
        text:
          es: "La curva [[eta]] vs carga tiene forma de campana, con máximo en carga parcial y decrecimiento hacia vacío y plena carga."
          en: "The [[eta]] vs load curve has a bell shape, with maximum at partial load and decreasing toward no-load and full load."
    likely_errors:
      - id: eta_error_percent
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar [[eta]] como porcentaje (98) en lugar de decimal (0.98) en fórmulas."
          en: "Frequent error: using [[eta]] as percentage (98) instead of decimal (0.98) in formulas."
    next_step_rules:
      - id: eta_next_losses
        when: "eta < 0.95"
        status: warning
        text:
          es: "[[eta]] inferior al 95% sugiere revisar pérdidas de cobre e hierro. Considerar mantenimiento o reemplazo."
          en: "[[eta]] below 95% suggests reviewing copper and iron losses. Consider maintenance or replacement."
      - id: eta_next_ok
        when: "eta >= 0.95"
        status: ok
        text:
          es: "Con [[eta]] óptimo, la evaluación del transformador está completa."
          en: "With optimal [[eta]], the transformer evaluation is complete."

  P_1:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "[[P_1]] es la potencia activa que entra al transformador y fija el coste energético real del funcionamiento."
      en: "[[P_1]] is the active power entering the transformer and sets the real energy cost of operation."
    summary_rules:
      - id: p1_summary_default
        when: "true"
        status: ok
        text:
          es: "[[P_1]] indica la potencia absorbida por el primario; depende de [[P_2]] y de [[eta]]."
          en: "[[P_1]] indicates the power absorbed by the primary; it depends on [[P_2]] and [[eta]]."
    physical_reading_rules:
      - id: p1_reading_balance
        when: "true"
        status: ok
        text:
          es: "[[P_1]] debe superar a [[P_2]] porque incluye la potencia útil más las pérdidas internas."
          en: "[[P_1]] must exceed [[P_2]] because it includes useful power plus internal losses."
    coherence_rules:
      - id: p1_coherence_positive
        when: "P_1 <= 0"
        status: error
        text:
          es: "[[P_1]] no puede ser nula o negativa si el transformador entrega potencia a una carga."
          en: "[[P_1]] cannot be zero or negative if the transformer delivers power to a load."
      - id: p1_coherence_default
        when: "true"
        status: ok
        text:
          es: "Una [[P_1]] positiva y mayor que [[P_2]] mantiene el balance energético esperado."
          en: "A positive [[P_1]] greater than [[P_2]] keeps the expected energy balance."
    model_validity_rules:
      - id: p1_validity_eta
        when: "eta <= 0 or eta >= 1"
        status: error
        text:
          es: "El cálculo de [[P_1]] deja de ser válido si [[eta]] no está entre cero y uno."
          en: "The [[P_1]] calculation is invalid if [[eta]] is not between zero and one."
      - id: p1_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de [[P_1]] es válido para régimen estacionario y rendimiento conocido."
          en: "The [[P_1]] model is valid for steady state with known efficiency."
    graph_rules:
      - id: p1_graph_default
        when: "true"
        status: ok
        text:
          es: "En la lectura gráfica, [[P_1]] desplaza el balance hacia la potencia absorbida por el primario."
          en: "In the graph reading, [[P_1]] shifts the balance toward power absorbed by the primary."
    likely_errors:
      - id: p1_error_eta_percent
        when: "eta > 1"
        status: error
        text:
          es: "Error probable: introducir [[eta]] como porcentaje en vez de valor decimal."
          en: "Likely error: entering [[eta]] as a percentage instead of a decimal value."
      - id: p1_error_default
        when: "true"
        status: warning
        text:
          es: "Error común: confundir [[P_1]] con [[S]], aunque una es potencia activa y la otra aparente."
          en: "Common mistake: confusing [[P_1]] with [[S]], although one is active power and the other apparent power."
    next_step_rules:
      - id: p1_next_default
        when: "true"
        status: ok
        text:
          es: "Después de obtener [[P_1]], compara [[P_1]] con [[P_2]] para estimar pérdidas y calentamiento."
          en: "After obtaining [[P_1]], compare [[P_1]] with [[P_2]] to estimate losses and heating."

  P_2:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "[[P_2]] es la potencia activa útil entregada a la carga conectada al secundario."
      en: "[[P_2]] is the useful active power delivered to the load connected to the secondary."
    summary_rules:
      - id: p2_summary_default
        when: "true"
        status: ok
        text:
          es: "[[P_2]] indica la potencia útil disponible; depende de [[P_1]] y del rendimiento [[eta]]."
          en: "[[P_2]] indicates the useful available power; it depends on [[P_1]] and efficiency [[eta]]."
    physical_reading_rules:
      - id: p2_reading_useful
        when: "true"
        status: ok
        text:
          es: "[[P_2]] resume lo que realmente recibe la carga tras descontar las pérdidas internas."
          en: "[[P_2]] summarizes what the load actually receives after internal losses are discounted."
    coherence_rules:
      - id: p2_coherence_exceeds_input
        when: "P_2 > P_1"
        status: error
        text:
          es: "[[P_2]] no puede superar [[P_1]] en un transformador pasivo."
          en: "[[P_2]] cannot exceed [[P_1]] in a passive transformer."
      - id: p2_coherence_default
        when: "true"
        status: ok
        text:
          es: "Una [[P_2]] menor que [[P_1]] mantiene la conservación de energía con pérdidas."
          en: "A [[P_2]] lower than [[P_1]] preserves energy conservation with losses."
    model_validity_rules:
      - id: p2_validity_eta
        when: "eta <= 0 or eta >= 1"
        status: error
        text:
          es: "El cálculo de [[P_2]] no es válido si [[eta]] queda fuera del intervalo físico."
          en: "The [[P_2]] calculation is invalid if [[eta]] lies outside the physical interval."
      - id: p2_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de [[P_2]] asume régimen estacionario y pérdidas ya resumidas por [[eta]]."
          en: "The [[P_2]] model assumes steady state and losses already summarized by [[eta]]."
    graph_rules:
      - id: p2_graph_default
        when: "true"
        status: ok
        text:
          es: "En la lectura gráfica, [[P_2]] representa la salida útil frente a la entrada consumida."
          en: "In the graph reading, [[P_2]] represents useful output against consumed input."
    likely_errors:
      - id: p2_error_ideal
        when: "true"
        status: warning
        text:
          es: "Error frecuente: suponer que [[P_2]] coincide con [[P_1]] aunque el transformador tenga pérdidas."
          en: "Frequent mistake: assuming [[P_2]] equals [[P_1]] even when the transformer has losses."
    next_step_rules:
      - id: p2_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[P_2]] conocida, revisa si la carga y el valor nominal [[S]] son compatibles."
          en: "With [[P_2]] known, check whether the load and the rating [[S]] are compatible."

  P_p:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "[[P_p]] agrupa toda la potencia perdida como calor dentro del transformador."
      en: "[[P_p]] groups all power lost as heat inside the transformer."
    summary_rules:
      - id: pp_summary_default
        when: "true"
        status: ok
        text:
          es: "[[P_p]] indica el balance de pérdidas; depende de [[P_Cu]] y [[P_Fe]]."
          en: "[[P_p]] indicates the loss balance; it depends on [[P_Cu]] and [[P_Fe]]."
    physical_reading_rules:
      - id: pp_reading_heat
        when: "true"
        status: ok
        text:
          es: "[[P_p]] describe la potencia que debe evacuarse térmicamente para evitar sobrecalentamiento."
          en: "[[P_p]] describes the power that must be removed thermally to prevent overheating."
    coherence_rules:
      - id: pp_coherence_negative
        when: "P_p < 0"
        status: error
        text:
          es: "[[P_p]] no puede ser negativa; una pérdida negativa implicaría generación interna de energía."
          en: "[[P_p]] cannot be negative; a negative loss would imply internal energy generation."
      - id: pp_coherence_default
        when: "true"
        status: ok
        text:
          es: "Una [[P_p]] positiva resume pérdidas compatibles con un transformador real."
          en: "A positive [[P_p]] summarizes losses compatible with a real transformer."
    model_validity_rules:
      - id: pp_validity_components
        when: "P_Cu < 0 or P_Fe < 0"
        status: error
        text:
          es: "El modelo de [[P_p]] falla si alguna pérdida componente es negativa."
          en: "The [[P_p]] model fails if any loss component is negative."
      - id: pp_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de [[P_p]] es válido al separar pérdidas de cobre variables y pérdidas de hierro casi constantes."
          en: "The [[P_p]] model is valid when variable copper losses and nearly constant iron losses are separated."
    graph_rules:
      - id: pp_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica de pérdidas, [[P_p]] aumenta cuando domina la contribución variable de [[P_Cu]]."
          en: "In the loss graph, [[P_p]] increases when the variable contribution of [[P_Cu]] dominates."
    likely_errors:
      - id: pp_error_components
        when: "true"
        status: warning
        text:
          es: "Error común: mezclar [[P_Cu]] y [[P_Fe]] como si ambas variaran igual con la carga."
          en: "Common mistake: treating [[P_Cu]] and [[P_Fe]] as if both varied equally with load."
    next_step_rules:
      - id: pp_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[P_p]] calculada, revisa refrigeración, rendimiento [[eta]] y posible sobrecarga."
          en: "With [[P_p]] calculated, review cooling, efficiency [[eta]], and possible overload."

  P_Cu:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "[[P_Cu]] representa las pérdidas resistivas en los devanados de cobre."
      en: "[[P_Cu]] represents resistive losses in the copper windings."
    summary_rules:
      - id: pcu_summary_default
        when: "true"
        status: ok
        text:
          es: "[[P_Cu]] indica la parte de pérdidas que aumenta con la corriente de carga."
          en: "[[P_Cu]] indicates the part of losses that increases with load current."
    physical_reading_rules:
      - id: pcu_reading_load
        when: "true"
        status: ok
        text:
          es: "[[P_Cu]] describe el calentamiento resistivo de los devanados cuando circula corriente."
          en: "[[P_Cu]] describes resistive heating of the windings when current flows."
    coherence_rules:
      - id: pcu_coherence_negative
        when: "P_Cu < 0"
        status: error
        text:
          es: "[[P_Cu]] no puede ser negativa; revisar [[P_p]] y [[P_Fe]]."
          en: "[[P_Cu]] cannot be negative; check [[P_p]] and [[P_Fe]]."
      - id: pcu_coherence_default
        when: "true"
        status: ok
        text:
          es: "Una [[P_Cu]] no negativa es coherente con disipación resistiva real."
          en: "A nonnegative [[P_Cu]] is coherent with real resistive dissipation."
    model_validity_rules:
      - id: pcu_validity_total
        when: "P_Cu > P_p"
        status: warning
        text:
          es: "[[P_Cu]] mayor que [[P_p]] sugiere que las pérdidas de hierro se introdujeron mal."
          en: "[[P_Cu]] greater than [[P_p]] suggests that iron losses were entered incorrectly."
      - id: pcu_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de [[P_Cu]] es válido si [[P_p]] y [[P_Fe]] proceden del mismo punto de operación."
          en: "The [[P_Cu]] model is valid if [[P_p]] and [[P_Fe]] come from the same operating point."
    graph_rules:
      - id: pcu_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica de carga, [[P_Cu]] domina el crecimiento de pérdidas a corrientes altas."
          en: "In the load graph, [[P_Cu]] dominates loss growth at high currents."
    likely_errors:
      - id: pcu_error_load
        when: "true"
        status: warning
        text:
          es: "Error frecuente: tratar [[P_Cu]] como constante, cuando aumenta con la carga."
          en: "Frequent mistake: treating [[P_Cu]] as constant, although it increases with load."
    next_step_rules:
      - id: pcu_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[P_Cu]] conocida, compara su peso frente a [[P_Fe]] para decidir si domina la carga o el núcleo."
          en: "With [[P_Cu]] known, compare its weight against [[P_Fe]] to decide whether load or core dominates."

cross_checks:
  - id: cc_power_conservation
    condition: "P_2 > P_1"
    message:
      es: "La potencia de salida supera la de entrada: imposible por conservación de energía. Revisar datos."
      en: "Output power exceeds input power: impossible by energy conservation. Check data."
  - id: cc_eta_range
    condition: "eta >= 1"
    message:
      es: "El rendimiento es mayor o igual a 1: viola la conservación de energía. Verificar P_1 y P_2."
      en: "Efficiency is greater than or equal to 1: violates energy conservation. Check P_1 and P_2."
  - id: cc_overload
    condition: "V_1 * I_1 > S * 1.2"
    message:
      es: "Sobrecarga grave: la potencia supera el 120% de la nominal. Riesgo de daño térmico."
      en: "Severe overload: power exceeds 120% of rated. Risk of thermal damage."

error_patterns:
  - id: ep_peak_rms
    detect_when: "V_1 > 1000 and V_2 < 100"
    message:
      es: "Posible confusión entre valor pico y eficaz. Verificar que las tensiones son valores RMS."
      en: "Possible confusion between peak and RMS value. Verify that voltages are RMS values."
  - id: ep_ratio_invert
    detect_when: "V_2 > V_1 and N_2 < N_1"
    message:
      es: "Inconsistencia: V_2 > V_1 pero N_2 < N_1. La relación de tensiones debe seguir la relación de espiras."
      en: "Inconsistency: V_2 > V_1 but N_2 < N_1. Voltage ratio must follow turns ratio."
  - id: ep_eta_percent
    detect_when: "eta > 1"
    message:
      es: "El rendimiento supera 1: probablemente se ha introducido como porcentaje. Dividir entre 100."
      en: "Efficiency exceeds 1: it was probably entered as percentage. Divide by 100."

graph_binding:
  channels:
    - id: tension_primaria
      magnitude: V_1
      role: x_axis
    - id: tension_secundaria
      magnitude: V_2
      role: y_axis
    - id: corriente_secundaria
      magnitude: I_2
      role: secondary_y
    - id: eficiencia_transformador
      magnitude: eta
      role: annotation

mini_graph:
  enabled: true
  preferred_type: Coord
  default_view: tension_vs_corriente

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
