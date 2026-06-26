const e=`version: 1\r
id: interpretacion-red-electrica\r
leaf_id: red-electrica\r
nombre:\r
  es: Interpretación de la red eléctrica doméstica\r
  en: Household electrical network interpretation\r
scope: interpretation_tab\r
dependencies:\r
  formulas:\r
  - corriente_total\r
  - potencia_total\r
  - margen_capacidad\r
  - frecuencia_contexto\r
  magnitudes:\r
  - V\r
  - f\r
  - I_tot\r
  - P_tot\r
  - I_max\r
  - margen_uso\r
\r
result_blocks:\r
  summary:\r
    title:\r
      es: Resumen del análisis\r
      en: Analysis summary\r
    content:\r
      es: El cálculo de [[I_tot]] a partir de [[P_tot]] y [[V]] permite dimensionar la protección del circuito.\r
      en: The calculation of [[I_tot]] from [[P_tot]] and [[V]] allows sizing the circuit protection.\r
  physical_reading:\r
    title:\r
      es: Lectura física\r
      en: Physical reading\r
    content:\r
      es: |\r
        La corriente total [[I_tot]] representa la suma física de todas las corrientes individuales. \r
        Como cada receptor en paralelo establece un camino independiente, la conservación de carga exige \r
        que [[I_tot]] sea la suma de las corrientes individuales. Cuando [[I_tot]] se acerca a [[I_max]], \r
        el margen de seguridad desaparece y la protección actúa para evitar sobrecalentamiento.\r
      en: |\r
        The total current [[I_tot]] represents the physical sum of all individual currents.\r
        As each parallel receptor establishes an independent path, charge conservation requires\r
        that [[I_tot]] equals the sum of individual currents. When [[I_tot]] approaches [[I_max]],\r
        the safety margin disappears and protection acts to prevent overheating.\r
  coherence:\r
    title:\r
      es: Coherencia física\r
      en: Physical coherence\r
    content:\r
      es: |\r
        La coherencia dimensional se verifica porque [[I_tot]] = [[P_tot]]/[[V]] produce unidades de corriente.\r
        La relación entre potencia, tensión y corriente es consistente con el modelo resistivo.\r
      en: |\r
        Dimensional coherence is verified because [[I_tot]] = [[P_tot]]/[[V]] produces current units.\r
        The relationship between power, voltage and current is consistent with the resistive model.\r
  model_validity:\r
    title:\r
      es: Validez del modelo\r
      en: Model validity\r
    content:\r
      es: |\r
        El modelo es válido para receptores resistivos con factor de potencia unitario a [[V]] = 230 V,\r
        [[f]] = 50 Hz. Falla cuando la impedancia de línea no es despreciable o hay receptores\r
        inductivos/capacitivos.\r
      en: |\r
        The model is valid for resistive loads with unity power factor at [[V]] = 230 V,\r
        [[f]] = 50 Hz. Fails when line impedance is not negligible or with inductive/capacitive loads.\r
  graph_reading:\r
    title:\r
      es: Lectura gráfica\r
      en: Graph reading\r
    content:\r
      es: El gráfico muestra la relación lineal entre potencia conectada y corriente total.\r
      en: The graph shows the linear relationship between connected power and total current.\r
  likely_errors:\r
    title:\r
      es: Errores típicos\r
      en: Common errors\r
    content:\r
      es: |\r
        Creer que la tensión disminuye al conectar más receptores. La red es fuente de tensión constante:\r
        la tensión permanece en 230 V y aumenta la corriente total, no la tensión.\r
      en: |\r
        Believing voltage decreases when connecting more loads. The network is a constant voltage source:\r
        voltage remains at 230 V and total current increases, not voltage.\r
  next_step:\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
    content:\r
      es: |\r
        Verificar que el calibre del magnetotérmico permite margen seguro. Considerar circuitos \r
        independientes si [[margen_uso]] supera el 80 %.\r
      en: |\r
        Verify the circuit breaker rating allows safe margin. Consider independent circuits\r
        if [[margen_uso]] exceeds 80 %.\r
\r
output_contract:\r
  sections:\r
  - summary\r
  - physical_reading\r
  - coherence\r
  - model_validity\r
  - graph_reading\r
  - likely_errors\r
  - next_step\r
  defaults:\r
    show_summary_first: true\r
    max_inline_messages: 3\r
\r
targets:\r
  I_tot:\r
    summary_rules:\r
    - id: summary_i_tot\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La corriente total indica cuántos amperios debe transportar el conductor.\r
        en: The total current indicates how many amperes the conductor must carry.\r
    coherence_rules:\r
    - id: coherence_i_tot\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La dimensión es consistente con potencia dividida por tensión.\r
        en: The dimension is consistent with power divided by voltage.\r
    physical_reading_rules:\r
    - id: physical_i_tot\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Cada receptor en paralelo aporta su corriente a la suma total.\r
        en: Each parallel receptor contributes its current to the total sum.\r
    model_validity_rules:\r
    - id: validity_i_tot\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Válido para receptores resistivos con impedancia de línea despreciable.\r
        en: Valid for resistive loads with negligible line impedance.\r
    graph_rules:\r
    - id: graph_i_tot\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El eje X representa la corriente total del circuito.\r
        en: The X axis represents the total circuit current.\r
    likely_errors:\r
    - id: error_i_tot\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundir corriente total con corriente de un solo receptor.\r
        en: Do not confuse total current with current of a single receptor.\r
    next_step_rules:\r
    - id: next_i_tot\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Comparar con el calibre del magnetotérmico para verificar seguridad.\r
        en: Compare with the circuit breaker rating to verify safety.\r
  P_tot:\r
    summary_rules:\r
    - id: summary_p_tot\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La potencia total cuantifica la energía suministrada por unidad de tiempo.\r
        en: The total power quantifies the energy supplied per unit time.\r
    coherence_rules:\r
    - id: coherence_p_tot\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El producto de tensión por corriente da potencia correctamente.\r
        en: The product of voltage and current gives power correctly.\r
    physical_reading_rules:\r
    - id: physical_p_tot\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La suma de potencias individuales es la potencia total consumida.\r
        en: The sum of individual powers is the total power consumed.\r
    model_validity_rules:\r
    - id: validity_p_tot\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Válido cuando todos los receptores comparten la misma tensión.\r
        en: Valid when all receptors share the same voltage.\r
    graph_rules:\r
    - id: graph_p_tot\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La potencia se muestra como variable derivada en el gráfico.\r
        en: Power is shown as a derived variable in the graph.\r
    likely_errors:\r
    - id: error_p_tot\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No sumar potencias sin verificar que todos operen simultáneamente.\r
        en: Do not sum powers without verifying all operate simultaneously.\r
    next_step_rules:\r
    - id: next_p_tot\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Verificar que la instalación puede soportar la potencia total.\r
        en: Verify the installation can support the total power.\r
  margen_uso:\r
    summary_rules:\r
    - id: summary_margen\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El margen de uso indica la fracción de capacidad utilizada.\r
        en: The usage margin indicates the fraction of capacity used.\r
    coherence_rules:\r
    - id: coherence_margen\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La razón entre corriente y límite es adimensional correctamente.\r
        en: The ratio between current and limit is correctly dimensionless.\r
    physical_reading_rules:\r
    - id: physical_margen\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Un valor cercano a 1 indica que el circuito está al límite.\r
        en: A value close to 1 indicates the circuit is at the limit.\r
    model_validity_rules:\r
    - id: validity_margen\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El margen es válido cuando el calibre es el real del magnetotérmico.\r
        en: The margin is valid when the rating is the actual breaker rating.\r
    graph_rules:\r
    - id: graph_margen\r
      when: 'true'\r
      status: info\r
      text:\r
        es: El margen se representa en el eje Y del gráfico.\r
        en: The margin is represented on the Y axis of the graph.\r
    likely_errors:\r
    - id: error_margen\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No ignorar los picos de arranque que pueden superar temporalmente el margen.\r
        en: Do not ignore starting peaks that may temporarily exceed the margin.\r
    next_step_rules:\r
    - id: next_margen\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Mantener margen suficiente para absorber picos de arranque.\r
        en: Keep sufficient margin to absorb starting peaks.\r
  f:\r
    summary_rules:\r
    - id: summary_f\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La frecuencia de red europea es 50 Hz, característica del suministro alterno.\r
        en: The European network frequency is 50 Hz, a characteristic of AC supply.\r
    coherence_rules:\r
    - id: coherence_f\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La dimensión temporal inversa es consistente con el periodo de 20 ms.\r
        en: The inverse time dimension is consistent with a 20 ms period.\r
    physical_reading_rules:\r
    - id: physical_f\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La frecuencia caracteriza el tipo de corriente pero no afecta cálculos resistivos.\r
        en: The frequency characterizes the current type but does not affect resistive calculations.\r
    model_validity_rules:\r
    - id: validity_f\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Válido para instalaciones europeas estándar. No aplica en redes de 60 Hz.\r
        en: Valid for standard European installations. Does not apply to 60 Hz networks.\r
    graph_rules:\r
    - id: graph_f\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La frecuencia aparece como parámetro contextual en la descripción del sistema.\r
        en: Frequency appears as a contextual parameter in the system description.\r
    likely_errors:\r
    - id: error_f\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: No confundir frecuencia de red con frecuencia de operación de receptores específicos.\r
        en: Do not confuse network frequency with operating frequency of specific receptors.\r
    next_step_rules:\r
    - id: next_f\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Verificar compatibilidad de receptores importados con frecuencia local.\r
        en: Verify compatibility of imported receptors with local frequency.\r
`;export{e as default};
