const e=`version: 1.0.0\r
id: adiabatico-interpretacion\r
leaf_id: adiabatico\r
nombre:\r
  es: Interpretacion del proceso adiabatico\r
  en: Adiabatic process interpretation\r
scope:\r
  area: fisica-clasica\r
  bloque: termodinamica\r
  subbloque: gases-y-modelos\r
  parent_id: procesos-termodinamicos\r
  ruta_relativa: fisica-clasica/termodinamica/gases-y-modelos/procesos-termodinamicos/adiabatico\r
ui:\r
  enabled: true\r
  display_modes:\r
    calculator_inline: true\r
    graph_inline: true\r
    dedicated_tab: true\r
    modal: false\r
  labels:\r
    es:\r
      summary: Resumen fisico\r
      reading: Lectura del resultado\r
      coherence: Coherencia\r
      validity: Validez del modelo\r
      graph: Lectura grafica\r
      errors: Errores probables\r
      next_step: Siguiente paso\r
    en:\r
      summary: Physical summary\r
      reading: Result reading\r
      coherence: Coherence\r
      validity: Model validity\r
      graph: Graph reading\r
      errors: Likely errors\r
      next_step: Next step\r
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]\r
  inline_limits:\r
    max_summary_chars: 200\r
    max_warnings: 2\r
    max_suggestions: 2\r
dependencies:\r
  formulas: [primer_principio_adiabatico, trabajo_adiabatico_ideal, ley_adiabata_presion_volumen, cambio_temperatura_adiabatico]\r
  magnitudes: [DeltaU, W, T1, T2, DeltaT_ad, p1, p2, V1, V2, gamma]\r
global_context:\r
  physical_domain:\r
    es: "Procesos termodinamicos sin intercambio de calor en gas ideal."\r
    en: "Thermodynamic processes without heat exchange in ideal gas."\r
  axis_convention:\r
    es: "W positivo indica trabajo realizado por el gas sobre el entorno; DeltaU negativo indica perdida de energia interna."\r
    en: "Positive W means work done by the gas on surroundings; negative DeltaU means loss of internal energy."\r
  standard_assumptions: [gas ideal, proceso cuasiestatico, gamma constante, paredes adiabatas]\r
  standard_warnings: ["no aplicar si hay intercambio de calor apreciable", "verificar que se use temperatura en kelvin"]\r
output_contract:\r
  format: structured_text\r
  include_emojis: true\r
  max_lines_per_section: 5\r
  truncate_long_values: true\r
  decimal_places: 2\r
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]\r
result_blocks:\r
  summary:\r
    enabled: true\r
    priority: 1\r
    title:\r
      es: Resumen fisico\r
      en: Physical summary\r
  physical_reading:\r
    enabled: true\r
    priority: 2\r
    title:\r
      es: Lectura fisica\r
      en: Physical reading\r
  coherence:\r
    enabled: true\r
    priority: 3\r
    title:\r
      es: Coherencia\r
      en: Coherence\r
  model_validity:\r
    enabled: true\r
    priority: 4\r
    title:\r
      es: Validez del modelo\r
      en: Model validity\r
  graph_reading:\r
    enabled: true\r
    priority: 5\r
    title:\r
      es: Lectura grafica\r
      en: Graph reading\r
  likely_errors:\r
    enabled: true\r
    priority: 6\r
    title:\r
      es: Errores probables\r
      en: Likely errors\r
  next_step:\r
    enabled: true\r
    priority: 7\r
    title:\r
      es: Siguiente paso\r
      en: Next step\r
targets:\r
  DeltaU:\r
    magnitude_type: DeltaU\r
    semantic_role:\r
      es: Cambio de energia interna del gas en el proceso adiabatico\r
      en: Change in internal energy of the gas in the adiabatic process\r
    summary_rules:\r
      - id: resumen_dU_negativo\r
        when: "result < 0"\r
        status: info\r
        text:\r
          es: "[[DeltaU]] negativo indica que el gas ha perdido energia interna al expandirse adiabaticamente."\r
          en: "Negative [[DeltaU]] indicates the gas lost internal energy by expanding adiabatically."\r
      - id: resumen_dU_positivo\r
        when: "result > 0"\r
        status: info\r
        text:\r
          es: "[[DeltaU]] positivo indica que el gas ha ganado energia interna al comprimirse adiabaticamente."\r
          en: "Positive [[DeltaU]] indicates the gas gained internal energy by being adiabatically compressed."\r
      - id: resumen_dU_cero\r
        when: "result == 0"\r
        status: warning\r
        text:\r
          es: "[[DeltaU]] nulo en proceso adiabatico implica que no hubo trabajo; revisar si el proceso es adiabatico isocórico."\r
          en: "Zero [[DeltaU]] in an adiabatic process means no work was done; check if the process is adiabatic isochoric."\r
      - id: resumen_dU_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "[[DeltaU]] es el unico termino energetico activo; en proceso adiabatico, Q = 0."\r
          en: "[[DeltaU]] is the only active energy term; in an adiabatic process, Q = 0."\r
    physical_reading_rules:\r
      - id: lectura_dU_expansion\r
        when: "result < 0"\r
        status: info\r
        text:\r
          es: "La energia interna disminuyo porque el gas realizo trabajo mecanico sobre el entorno sin recibir calor."\r
          en: "Internal energy decreased because the gas did mechanical work on the surroundings without receiving heat."\r
      - id: lectura_dU_compresion\r
        when: "result > 0"\r
        status: info\r
        text:\r
          es: "La energia interna aumento porque el entorno realizo trabajo sobre el gas sin que este pueda disipar calor."\r
          en: "Internal energy increased because surroundings did work on the gas and it could not dissipate heat."\r
      - id: lectura_dU_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "En un proceso adiabatico, todo el cambio de energia interna se debe exclusivamente al trabajo intercambiado."\r
          en: "In an adiabatic process, all internal energy change is exclusively due to the exchanged work."\r
    coherence_rules:\r
      - id: coherencia_dU_W\r
        when: "abs(result - (-W)) < 0.01 * abs(result) + 0.01"\r
        status: success\r
        text:\r
          es: "[[DeltaU]] es coherente con el negativo del trabajo; el balance adiabatico se cumple."\r
          en: "[[DeltaU]] is consistent with negative work; the adiabatic balance holds."\r
      - id: coherencia_dU_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Verificar que [[W]] y [[DeltaU]] tengan signos opuestos segun el primer principio adiabatico."\r
          en: "Verify that [[W]] and [[DeltaU]] have opposite signs per the adiabatic first law."\r
    model_validity_rules:\r
      - id: validez_dU_grande\r
        when: "abs(result) > 50000"\r
        status: warning\r
        text:\r
          es: "[[DeltaU]] muy grande puede indicar que el modelo de gas ideal no es adecuado o que el proceso no es totalmente adiabatico."\r
          en: "Very large [[DeltaU]] may indicate the ideal gas model is not adequate or the process is not fully adiabatic."\r
      - id: validez_dU_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El modelo es valido mientras el intercambio de calor sea despreciable y el gas se comporte como ideal."\r
          en: "The model is valid as long as heat exchange is negligible and the gas behaves ideally."\r
    graph_rules:\r
      - id: grafico_dU_area\r
        when: "result < 0"\r
        status: info\r
        text:\r
          es: "El area bajo la curva adiabatica en el diagrama pV representa [[W]]; [[DeltaU]] tiene igual magnitud y signo contrario."\r
          en: "The area under the adiabatic curve in the pV diagram represents [[W]]; [[DeltaU]] has equal magnitude and opposite sign."\r
      - id: grafico_dU_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "La curva adiabatica es mas inclinada que la isoterma porque [[gamma]] > 1; esto refleja el mayor cambio de energia."\r
          en: "The adiabatic curve is steeper than the isotherm because [[gamma]] > 1; this reflects the greater energy change."\r
    likely_errors:\r
      - id: error_dU_calor\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Error frecuente: confundir proceso adiabatico con proceso con calor. En proceso adiabatico Q es estrictamente cero; incluirlo en el balance invalida el resultado."\r
          en: "Frequent error: confusing an adiabatic process with a process involving heat. In an adiabatic process Q is strictly zero; including it in the balance invalidates the result."\r
      - id: error_dU_signo\r
        when: "result > 0 and W > 0"\r
        status: warning\r
        text:\r
          es: "Posible inconsistencia de signos: si el gas realiza trabajo positivo, [[DeltaU]] debe ser negativo."\r
          en: "Possible sign inconsistency: if the gas does positive work, [[DeltaU]] must be negative."\r
      - id: error_dU_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Recordar que el signo de [[DeltaU]] indica si el gas perdio o gano energia interna."\r
          en: "Remember that the sign of [[DeltaU]] indicates whether the gas lost or gained internal energy."\r
    next_step_rules:\r
      - id: siguiente_dU_T2\r
        when: "result < 0"\r
        status: info\r
        text:\r
          es: "Si [[DeltaU]] es negativo, calcular [[T2]] para cuantificar el enfriamiento producido."\r
          en: "If [[DeltaU]] is negative, calculate [[T2]] to quantify the cooling produced."\r
      - id: siguiente_dU_compresion\r
        when: "result > 0"\r
        status: info\r
        text:\r
          es: "[[DeltaU]] positivo indica compresion adiabatica; comparar [[T2]] con [[T1]] para verificar el calentamiento."\r
          en: "Positive [[DeltaU]] indicates adiabatic compression; compare [[T2]] with [[T1]] to verify the heating."\r
      - id: siguiente_dU_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Continuar calculando [[T2]] y [[p2]] para caracterizar completamente el estado final del proceso."\r
          en: "Continue calculating [[T2]] and [[p2]] to fully characterize the final state of the process."\r
\r
  W:\r
    magnitude_type: W\r
    semantic_role:\r
      es: Trabajo mecanico realizado por el gas en el proceso adiabatico\r
      en: Mechanical work done by the gas in the adiabatic process\r
    summary_rules:\r
      - id: resumen_W_expansion\r
        when: "result > 0"\r
        status: info\r
        text:\r
          es: "[[W]] positivo confirma expansion adiabatica: el gas entrego energia mecanica al entorno a costa de su energia interna."\r
          en: "Positive [[W]] confirms adiabatic expansion: the gas delivered mechanical energy to surroundings at the cost of its internal energy."\r
      - id: resumen_W_compresion\r
        when: "result < 0"\r
        status: info\r
        text:\r
          es: "[[W]] negativo indica compresion adiabatica: el entorno realizo trabajo sobre el gas, aumentando su energia interna."\r
          en: "Negative [[W]] indicates adiabatic compression: surroundings did work on the gas, increasing its internal energy."\r
      - id: resumen_W_cero\r
        when: "result == 0"\r
        status: warning\r
        text:\r
          es: "[[W]] nulo en proceso adiabatico implica que no hubo cambio de volumen; revisar condicion del proceso."\r
          en: "Zero [[W]] in an adiabatic process means no volume change; check the process condition."\r
      - id: resumen_W_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "[[W]] es la unica via de intercambio energetico en un proceso adiabatico."\r
          en: "[[W]] is the only energy exchange pathway in an adiabatic process."\r
    physical_reading_rules:\r
      - id: lectura_W_positivo\r
        when: "result > 0"\r
        status: info\r
        text:\r
          es: "El gas se expandio y entrego energia cinetica macroscopica al piston o al entorno. Esa energia provino exclusivamente de su energia interna."\r
          en: "The gas expanded and delivered macroscopic kinetic energy to the piston or surroundings. That energy came exclusively from its internal energy."\r
      - id: lectura_W_negativo\r
        when: "result < 0"\r
        status: info\r
        text:\r
          es: "El entorno comprimo el gas sin que este pudiera liberar calor. Toda la energia mecanica recibida se almaceno como energia interna."\r
          en: "Surroundings compressed the gas without it being able to release heat. All received mechanical energy was stored as internal energy."\r
      - id: lectura_W_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "En proceso adiabatico, [[W]] y [[DeltaU]] son exactamente opuestos en signo e iguales en magnitud."\r
          en: "In an adiabatic process, [[W]] and [[DeltaU]] are exactly opposite in sign and equal in magnitude."\r
    coherence_rules:\r
      - id: coherencia_W_dU\r
        when: "abs(result + DeltaU) < 0.01 * abs(result) + 0.01"\r
        status: success\r
        text:\r
          es: "[[W]] y [[DeltaU]] son opuestos; el balance adiabatico es coherente."\r
          en: "[[W]] and [[DeltaU]] are opposites; the adiabatic balance is coherent."\r
      - id: coherencia_W_volumen\r
        when: "result > 0"\r
        status: info\r
        text:\r
          es: "[[W]] positivo es consistente con [[V2]] mayor que [[V1]]."\r
          en: "Positive [[W]] is consistent with [[V2]] greater than [[V1]]."\r
      - id: coherencia_W_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Verificar que el signo de [[W]] coincida con el sentido del proceso: expansion positiva, compresion negativa."\r
          en: "Verify that the sign of [[W]] matches the process direction: positive for expansion, negative for compression."\r
    model_validity_rules:\r
      - id: validez_W_gamma\r
        when: "gamma <= 1"\r
        status: error\r
        text:\r
          es: "[[gamma]] menor o igual a 1 invalida la ecuacion de la adiabata. Para gas ideal real, [[gamma]] debe ser mayor que 1."\r
          en: "[[gamma]] less than or equal to 1 invalidates the adiabat equation. For a real ideal gas, [[gamma]] must be greater than 1."\r
      - id: validez_W_cuasiestatico\r
        when: "true"\r
        status: info\r
        text:\r
          es: "La formula del trabajo adiabatico asume proceso cuasiestatico reversible. Procesos rapidos o turbulentos pueden dar resultados distintos."\r
          en: "The adiabatic work formula assumes a quasi-static reversible process. Fast or turbulent processes may give different results."\r
      - id: validez_W_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Modelo valido para gas ideal con [[gamma]] constante y sin perdidas por friccion o turbulencia."\r
          en: "Model valid for ideal gas with constant [[gamma]] and no losses from friction or turbulence."\r
    graph_rules:\r
      - id: grafico_W_area\r
        when: "true"\r
        status: info\r
        text:\r
          es: "[[W]] corresponde al area bajo la curva adiabatica en el diagrama pV entre [[V1]] y [[V2]]."\r
          en: "[[W]] corresponds to the area under the adiabatic curve in the pV diagram between [[V1]] and [[V2]]."\r
      - id: grafico_W_pendiente\r
        when: "true"\r
        status: info\r
        text:\r
          es: "La pendiente de la adiabata es mayor que la de la isoterma porque [[gamma]] > 1; esto implica mayor trabajo por unidad de cambio de volumen."\r
          en: "The slope of the adiabat is greater than that of the isotherm because [[gamma]] > 1; this implies more work per unit volume change."\r
      - id: grafico_W_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "En el diagrama pV, comparar la curva adiabatica con la isoterma que pasa por el estado inicial para visualizar la diferencia."\r
          en: "In the pV diagram, compare the adiabatic curve with the isotherm passing through the initial state to visualize the difference."\r
    likely_errors:\r
      - id: error_W_isotermico\r
        when: "abs(result - p1 * V1 * log(V2 / V1)) < 0.05 * abs(result)"\r
        status: warning\r
        text:\r
          es: "El trabajo calculado coincide con el isotermico. Verificar que se haya usado la formula adiabatica con [[gamma]], no la isoterma."\r
          en: "The calculated work matches the isothermal value. Verify that the adiabatic formula with [[gamma]] was used, not the isotherm."\r
      - id: error_W_signo_convenio\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Error comun: mezclar convenios de signo. En este leaf [[W]] > 0 es trabajo hecho por el gas, no sobre el gas."\r
          en: "Common error: mixing sign conventions. In this leaf [[W]] > 0 is work done by the gas, not on the gas."\r
      - id: error_W_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Asegurar que [[V1]], [[V2]], [[p1]], [[p2]] y [[gamma]] esten en unidades coherentes antes de calcular [[W]]."\r
          en: "Ensure [[V1]], [[V2]], [[p1]], [[p2]] and [[gamma]] are in coherent units before calculating [[W]]."\r
    next_step_rules:\r
      - id: siguiente_W_DeltaU\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Calcular [[DeltaU]] como el negativo de [[W]] para completar el balance energetico adiabatico."\r
          en: "Calculate [[DeltaU]] as the negative of [[W]] to complete the adiabatic energy balance."\r
      - id: siguiente_W_T2\r
        when: "result > 0"\r
        status: info\r
        text:\r
          es: "Con [[W]] obtenido, usar la relacion adiabatica para obtener [[T2]] y cuantificar el enfriamiento."\r
          en: "With [[W]] obtained, use the adiabatic relation to get [[T2]] and quantify the cooling."\r
      - id: siguiente_W_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Continuar con el calculo de [[T2]] y [[DeltaT_ad]] para interpretar el efecto termico del proceso."\r
          en: "Continue with calculation of [[T2]] and [[DeltaT_ad]] to interpret the thermal effect of the process."\r
\r
  T2:\r
    magnitude_type: T2\r
    semantic_role:\r
      es: Temperatura final del gas tras el proceso adiabatico\r
      en: Final temperature of the gas after the adiabatic process\r
    summary_rules:\r
      - id: resumen_T2_menor\r
        when: "result < T1"\r
        status: info\r
        text:\r
          es: "[[T2]] menor que [[T1]] confirma expansion adiabatica: el gas se enfrio porque realizo trabajo sin absorber calor."\r
          en: "[[T2]] less than [[T1]] confirms adiabatic expansion: the gas cooled because it did work without absorbing heat."\r
      - id: resumen_T2_mayor\r
        when: "result > T1"\r
        status: info\r
        text:\r
          es: "[[T2]] mayor que [[T1]] confirma compresion adiabatica: el gas se calento porque el entorno realizo trabajo sobre el."\r
          en: "[[T2]] greater than [[T1]] confirms adiabatic compression: the gas heated up because surroundings did work on it."\r
      - id: resumen_T2_igual\r
        when: "abs(result - T1) < 0.5"\r
        status: warning\r
        text:\r
          es: "[[T2]] casi igual a [[T1]]; verificar si hubo cambio de volumen significativo o si el proceso fue realmente adiabatico."\r
          en: "[[T2]] almost equal to [[T1]]; verify whether there was significant volume change or whether the process was truly adiabatic."\r
      - id: resumen_T2_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "[[T2]] es la huella termica del proceso adiabatico: cuantifica el efecto del trabajo sobre la temperatura del gas."\r
          en: "[[T2]] is the thermal footprint of the adiabatic process: it quantifies the effect of work on gas temperature."\r
    physical_reading_rules:\r
      - id: lectura_T2_enfriamiento\r
        when: "result < T1"\r
        status: info\r
        text:\r
          es: "El enfriamiento no se debe a perdida de calor (Q = 0), sino a que la energia interna disminuyo al realizar trabajo de expansion."\r
          en: "The cooling is not due to heat loss (Q = 0), but to internal energy decreasing as the gas did expansion work."\r
      - id: lectura_T2_calentamiento\r
        when: "result > T1"\r
        status: info\r
        text:\r
          es: "El calentamiento no se debe a ganancia de calor (Q = 0), sino a que el entorno deposito energia en el gas al comprimirlo."\r
          en: "The heating is not due to heat gain (Q = 0), but to surroundings depositing energy into the gas by compressing it."\r
      - id: lectura_T2_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "La variacion de [[T2]] es la señal observable del intercambio de trabajo en un proceso adiabatico."\r
          en: "The variation of [[T2]] is the observable signature of work exchange in an adiabatic process."\r
    coherence_rules:\r
      - id: coherencia_T2_positivo\r
        when: "result > 0"\r
        status: success\r
        text:\r
          es: "[[T2]] positiva; temperatura absoluta fisicamente admisible."\r
          en: "Positive [[T2]]; physically admissible absolute temperature."\r
      - id: coherencia_T2_muy_baja\r
        when: "result < 50"\r
        status: warning\r
        text:\r
          es: "[[T2]] muy baja para un proceso de gas ideal ordinario. Verificar valores de [[V1]], [[V2]] y [[gamma]]."\r
          en: "[[T2]] very low for an ordinary ideal gas process. Check values of [[V1]], [[V2]] and [[gamma]]."\r
      - id: coherencia_T2_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "[[T2]] debe satisfacer la relacion adiabatica: [[T2]] = [[T1]] x (V1/V2)^(gamma-1)."\r
          en: "[[T2]] must satisfy the adiabatic relation: [[T2]] = [[T1]] x (V1/V2)^(gamma-1)."\r
    model_validity_rules:\r
      - id: validez_T2_gas_ideal\r
        when: "result < 100"\r
        status: warning\r
        text:\r
          es: "A temperaturas muy bajas, el gas real puede licuarse y el modelo de gas ideal deja de ser valido."\r
          en: "At very low temperatures, a real gas may liquefy and the ideal gas model ceases to be valid."\r
      - id: validez_T2_gamma_constante\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El resultado asume [[gamma]] constante. Si [[T2]] difiere mucho de [[T1]], [[gamma]] puede cambiar apreciablemente en gases reales."\r
          en: "The result assumes constant [[gamma]]. If [[T2]] differs greatly from [[T1]], [[gamma]] may change appreciably in real gases."\r
      - id: validez_T2_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Modelo valido para gas ideal en proceso cuasiestatico con [[gamma]] constante."\r
          en: "Model valid for ideal gas in quasi-static process with constant [[gamma]]."\r
    graph_rules:\r
      - id: grafico_T2_curva_TV\r
        when: "true"\r
        status: info\r
        text:\r
          es: "En el diagrama T-V adiabatico, [[T2]] corresponde al punto final de la curva; su descenso es mas abrupto que en una isoterma."\r
          en: "In the adiabatic T-V diagram, [[T2]] corresponds to the final point of the curve; its drop is steeper than in an isotherm."\r
      - id: grafico_T2_pV\r
        when: "true"\r
        status: info\r
        text:\r
          es: "En el diagrama pV, el estado final ([[p2]], [[V2]]) queda por debajo de la isoterma de [[T1]], indicando que [[T2]] < [[T1]] en expansion."\r
          en: "In the pV diagram, the final state ([[p2]], [[V2]]) lies below the isotherm of [[T1]], indicating [[T2]] < [[T1]] in expansion."\r
      - id: grafico_T2_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "La posicion del estado final en el diagrama pV refleja el valor de [[T2]] a traves de la ecuacion de estado del gas ideal."\r
          en: "The position of the final state in the pV diagram reflects the value of [[T2]] through the ideal gas equation of state."\r
    likely_errors:\r
      - id: error_T2_isotermico\r
        when: "abs(result - T1) < 0.01"\r
        status: warning\r
        text:\r
          es: "[[T2]] igual a [[T1]] es proceso isotermico, no adiabatico. Revisar que se haya aplicado la formula correcta."\r
          en: "[[T2]] equal to [[T1]] is isothermal, not adiabatic. Verify that the correct formula was applied."\r
      - id: error_T2_celsius\r
        when: "result < 0"\r
        status: error\r
        text:\r
          es: "[[T2]] negativa es fisicamente imposible en escala Kelvin. Posible error de unidades: verificar que [[T1]] este en Kelvin."\r
          en: "Negative [[T2]] is physically impossible on the Kelvin scale. Possible unit error: verify that [[T1]] is in Kelvin."\r
      - id: error_T2_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Verificar que [[T2]] sea consistente con el tipo de proceso: menor en expansion, mayor en compresion."\r
          en: "Verify that [[T2]] is consistent with the process type: lower in expansion, higher in compression."\r
    next_step_rules:\r
      - id: siguiente_T2_DeltaT\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Calcular [[DeltaT_ad]] = [[T2]] - [[T1]] para expresar numericamente el cambio termico del proceso."\r
          en: "Calculate [[DeltaT_ad]] = [[T2]] - [[T1]] to numerically express the thermal change of the process."\r
      - id: siguiente_T2_ciclo\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Si el proceso es parte de un ciclo termodinamico, usar [[T2]] como [[T1]] del siguiente proceso."\r
          en: "If the process is part of a thermodynamic cycle, use [[T2]] as [[T1]] for the next process."\r
      - id: siguiente_T2_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Con [[T2]] obtenido, el estado final del gas queda completamente determinado junto con [[p2]] y [[V2]]."\r
          en: "With [[T2]] obtained, the final gas state is completely determined together with [[p2]] and [[V2]]."\r
\r
  T1:\r
    magnitude_type: T1\r
    semantic_role:\r
      es: Temperatura inicial del gas al comienzo del proceso adiabatico\r
      en: Initial temperature of the gas at the start of the adiabatic process\r
    summary_rules:\r
      - id: resumen_T1_kelvin\r
        when: "true"\r
        status: info\r
        text:\r
          es: "[[T1]] es el punto de partida del proceso. Debe expresarse en kelvin para aplicar la relacion adiabatica."\r
          en: "[[T1]] is the starting point of the process. It must be expressed in kelvin to apply the adiabatic relation."\r
    physical_reading_rules:\r
      - id: lectura_T1_fisico\r
        when: "true"\r
        status: info\r
        text:\r
          es: "[[T1]] representa el nivel de agitacion molecular inicial del gas antes de que comience el proceso adiabatico."\r
          en: "[[T1]] represents the initial molecular agitation level of the gas before the adiabatic process begins."\r
    coherence_rules:\r
      - id: coherencia_T1_positivo\r
        when: "result > 0"\r
        status: success\r
        text:\r
          es: "[[T1]] positiva; temperatura absoluta fisicamente admisible."\r
          en: "Positive [[T1]]; physically admissible absolute temperature."\r
      - id: coherencia_T1_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Verificar que [[T1]] este expresada en kelvin y no en Celsius."\r
          en: "Verify that [[T1]] is expressed in kelvin and not in Celsius."\r
    model_validity_rules:\r
      - id: validez_T1_rango\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Modelo valido si [[T1]] esta en el rango donde el gas se comporta como ideal, tipicamente entre 200 K y 2000 K."\r
          en: "Model valid if [[T1]] is in the range where the gas behaves ideally, typically between 200 K and 2000 K."\r
    graph_rules:\r
      - id: grafico_T1_inicio\r
        when: "true"\r
        status: info\r
        text:\r
          es: "[[T1]] es la temperatura del estado inicial en el diagrama T-V adiabatico; es el punto de partida de la curva."\r
          en: "[[T1]] is the temperature of the initial state in the adiabatic T-V diagram; it is the starting point of the curve."\r
    likely_errors:\r
      - id: error_T1_celsius\r
        when: "result < 200"\r
        status: warning\r
        text:\r
          es: "[[T1]] muy bajo; posible error al confundir grados Celsius con kelvin. Verificar que se haya sumado 273.15."\r
          en: "[[T1]] very low; possible confusion between Celsius and kelvin. Verify that 273.15 was added."\r
      - id: error_T1_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Recordar que [[T1]] en Celsius debe convertirse a kelvin antes de usar la formula adiabatica."\r
          en: "Remember that [[T1]] in Celsius must be converted to kelvin before using the adiabatic formula."\r
    next_step_rules:\r
      - id: siguiente_T1_T2\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Con [[T1]] definido, calcular [[T2]] usando la relacion adiabatica para obtener la temperatura final."\r
          en: "With [[T1]] defined, calculate [[T2]] using the adiabatic relation to obtain the final temperature."\r
\r
  DeltaT_ad:\r
    magnitude_type: DeltaT_ad\r
    semantic_role:\r
      es: Cambio de temperatura resultante del proceso adiabatico\r
      en: Temperature change resulting from the adiabatic process\r
    physical_reading_rules:\r
      - id: lectura_DeltaT_fisico\r
        when: "result < 0"\r
        status: info\r
        text:\r
          es: "[[DeltaT_ad]] negativo significa que el gas cedio energia cinetica molecular al realizar trabajo de expansion sin recibir calor."\r
          en: "Negative [[DeltaT_ad]] means the gas gave up molecular kinetic energy by doing expansion work without receiving heat."\r
      - id: lectura_DeltaT_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "[[DeltaT_ad]] cuantifica el efecto termico del intercambio de trabajo sin calor."\r
          en: "[[DeltaT_ad]] quantifies the thermal effect of work exchange without heat."\r
    coherence_rules:\r
      - id: coherencia_DeltaT_signo\r
        when: "result < 0"\r
        status: success\r
        text:\r
          es: "[[DeltaT_ad]] negativo coherente con expansion adiabatica donde [[V2]] es mayor que [[V1]]."\r
          en: "Negative [[DeltaT_ad]] consistent with adiabatic expansion where [[V2]] is greater than [[V1]]."\r
      - id: coherencia_DeltaT_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Verificar que el signo de [[DeltaT_ad]] sea consistente con el tipo de proceso: negativo en expansion, positivo en compresion."\r
          en: "Verify that the sign of [[DeltaT_ad]] is consistent with the process type: negative for expansion, positive for compression."\r
    model_validity_rules:\r
      - id: validez_DeltaT_rango\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Modelo valido si el cambio de temperatura no lleva al gas fuera del rango de gas ideal."\r
          en: "Model valid if the temperature change does not take the gas outside the ideal gas range."\r
    graph_rules:\r
      - id: grafico_DeltaT_curva\r
        when: "true"\r
        status: info\r
        text:\r
          es: "[[DeltaT_ad]] corresponde al desplazamiento vertical en el diagrama T-V entre el estado inicial y el final."\r
          en: "[[DeltaT_ad]] corresponds to the vertical displacement in the T-V diagram between initial and final states."\r
    summary_rules:\r
      - id: resumen_DeltaT_negativo\r
        when: "result < 0"\r
        status: info\r
        text:\r
          es: "[[DeltaT_ad]] negativo confirma expansion adiabatica: el gas se enfrio al realizar trabajo."\r
          en: "Negative [[DeltaT_ad]] confirms adiabatic expansion: the gas cooled by doing work."\r
      - id: resumen_DeltaT_positivo\r
        when: "result > 0"\r
        status: info\r
        text:\r
          es: "[[DeltaT_ad]] positivo confirma compresion adiabatica: el gas se calento al recibir trabajo."\r
          en: "Positive [[DeltaT_ad]] confirms adiabatic compression: the gas heated up by receiving work."\r
      - id: resumen_DeltaT_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "[[DeltaT_ad]] cuantifica el efecto termico del proceso sin intercambio de calor."\r
          en: "[[DeltaT_ad]] quantifies the thermal effect of the process without heat exchange."\r
    likely_errors:\r
      - id: error_DeltaT_cero\r
        when: "abs(result) < 0.1"\r
        status: warning\r
        text:\r
          es: "[[DeltaT_ad]] cercano a cero con cambio de volumen apreciable; posible confusion con proceso isotermico. Verificar formula."\r
          en: "[[DeltaT_ad]] near zero with appreciable volume change; possible confusion with isothermal process. Verify formula."\r
      - id: error_DeltaT_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Recordar que en proceso adiabatico el cambio de temperatura no es cero; confundir adiabatico con isotermico es un error comun."\r
          en: "Remember that in an adiabatic process temperature change is not zero; confusing adiabatic with isothermal is a common mistake."\r
    next_step_rules:\r
      - id: siguiente_DeltaT_DeltaU\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Usar [[DeltaT_ad]] para calcular [[DeltaU]] y completar el balance energetico del proceso."\r
          en: "Use [[DeltaT_ad]] to calculate [[DeltaU]] and complete the energy balance of the process."\r
\r
  V2:\r
    magnitude_type: V2\r
    semantic_role:\r
      es: Volumen final del gas al termino del proceso adiabatico\r
      en: Final volume of the gas at the end of the adiabatic process\r
    physical_reading_rules:\r
      - id: lectura_V2_fisico\r
        when: "result > V1"\r
        status: info\r
        text:\r
          es: "[[V2]] mayor que [[V1]] significa que el gas ha ocupado mas espacio empujando las paredes o el piston."\r
          en: "[[V2]] greater than [[V1]] means the gas has occupied more space by pushing the walls or piston."\r
      - id: lectura_V2_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "[[V2]] define la geometria del estado final y determina la caida de presion y temperatura en la adiabata."\r
          en: "[[V2]] defines the geometry of the final state and determines the pressure and temperature drop in the adiabat."\r
    coherence_rules:\r
      - id: coherencia_V2_positivo\r
        when: "result > 0"\r
        status: success\r
        text:\r
          es: "[[V2]] positivo; volumen fisicamente admisible."\r
          en: "Positive [[V2]]; physically admissible volume."\r
      - id: coherencia_V2_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Verificar que [[V2]] sea coherente con el tipo de proceso: mayor que [[V1]] en expansion, menor en compresion."\r
          en: "Verify that [[V2]] is consistent with the process type: greater than [[V1]] in expansion, less in compression."\r
    model_validity_rules:\r
      - id: validez_V2_no_cero\r
        when: "result > 0"\r
        status: success\r
        text:\r
          es: "[[V2]] mayor que cero; no hay singularidad en la ley adiabatica."\r
          en: "[[V2]] greater than zero; no singularity in the adiabatic law."\r
    graph_rules:\r
      - id: grafico_V2_eje\r
        when: "true"\r
        status: info\r
        text:\r
          es: "[[V2]] es la abscisa del estado final en el diagrama pV; su posicion respecto a [[V1]] indica si hubo expansion o compresion."\r
          en: "[[V2]] is the abscissa of the final state in the pV diagram; its position relative to [[V1]] indicates whether expansion or compression occurred."\r
    summary_rules:\r
      - id: resumen_V2_mayor\r
        when: "result > V1"\r
        status: info\r
        text:\r
          es: "[[V2]] mayor que [[V1]] confirma expansion adiabatica."\r
          en: "[[V2]] greater than [[V1]] confirms adiabatic expansion."\r
      - id: resumen_V2_menor\r
        when: "result < V1"\r
        status: info\r
        text:\r
          es: "[[V2]] menor que [[V1]] confirma compresion adiabatica."\r
          en: "[[V2]] less than [[V1]] confirms adiabatic compression."\r
      - id: resumen_V2_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "[[V2]] determina junto con [[p2]] el estado final en el diagrama pV."\r
          en: "[[V2]] together with [[p2]] determines the final state in the pV diagram."\r
    likely_errors:\r
      - id: error_V2_unidades\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Verificar que [[V2]] este en metros cubicos; confundir litros con metros cubicos es un error frecuente."\r
          en: "Verify that [[V2]] is in cubic metres; confusing litres with cubic metres is a frequent mistake."\r
      - id: error_V2_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Recordar que [[V2]] debe obtenerse de la relacion adiabatica, no asumir que coincide con el valor isotermico."\r
          en: "Remember that [[V2]] must be obtained from the adiabatic relation, not assumed to equal the isothermal value."\r
    next_step_rules:\r
      - id: siguiente_V2_p2\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Con [[V2]] determinado, calcular [[p2]] para caracterizar completamente el estado final."\r
          en: "With [[V2]] determined, calculate [[p2]] to fully characterise the final state."\r
\r
  gamma:\r
    magnitude_type: gamma\r
    semantic_role:\r
      es: Coeficiente adiabatico que determina la pendiente de la curva en el diagrama pV\r
      en: Adiabatic coefficient that determines the slope of the curve in the pV diagram\r
    physical_reading_rules:\r
      - id: lectura_gamma_fisico\r
        when: "true"\r
        status: info\r
        text:\r
          es: "[[gamma]] refleja cuantos grados de libertad tiene el gas para almacenar energia; mayor [[gamma]] significa menos modos disponibles y mayor impacto termico por unidad de trabajo."\r
          en: "[[gamma]] reflects how many degrees of freedom the gas has to store energy; larger [[gamma]] means fewer available modes and greater thermal impact per unit of work."\r
    coherence_rules:\r
      - id: coherencia_gamma_mayor_uno\r
        when: "result > 1"\r
        status: success\r
        text:\r
          es: "[[gamma]] mayor que 1; valor fisicamente valido para gas ideal."\r
          en: "[[gamma]] greater than 1; physically valid value for ideal gas."\r
      - id: coherencia_gamma_fallback\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "[[gamma]] debe ser estrictamente mayor que 1 para que la formula adiabatica sea valida."\r
          en: "[[gamma]] must be strictly greater than 1 for the adiabatic formula to be valid."\r
    model_validity_rules:\r
      - id: validez_gamma_rango\r
        when: "result >= 1.1 and result <= 1.7"\r
        status: success\r
        text:\r
          es: "[[gamma]] en rango fisicamente esperado para gases ideales ordinarios."\r
          en: "[[gamma]] in the physically expected range for ordinary ideal gases."\r
      - id: validez_gamma_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Verificar que [[gamma]] corresponda al tipo de gas: monatomico 1.67, diatomico 1.40, triatom ~1.30."\r
          en: "Verify that [[gamma]] corresponds to the gas type: monatomic 1.67, diatomic 1.40, triatomic ~1.30."\r
    graph_rules:\r
      - id: grafico_gamma_pendiente\r
        when: "true"\r
        status: info\r
        text:\r
          es: "[[gamma]] determina la pendiente de la adiabata en el diagrama pV; valores mayores producen curvas mas pronunciadas."\r
          en: "[[gamma]] determines the slope of the adiabat in the pV diagram; larger values produce steeper curves."\r
    summary_rules:\r
      - id: resumen_gamma_diatomico\r
        when: "abs(result - 1.4) < 0.05"\r
        status: info\r
        text:\r
          es: "[[gamma]] aproximadamente 1.4 corresponde a gas diatomico (aire, nitrogeno, oxigeno)."\r
          en: "[[gamma]] approximately 1.4 corresponds to diatomic gas (air, nitrogen, oxygen)."\r
      - id: resumen_gamma_monatomico\r
        when: "abs(result - 1.67) < 0.05"\r
        status: info\r
        text:\r
          es: "[[gamma]] aproximadamente 1.67 corresponde a gas monatomico (helio, argon)."\r
          en: "[[gamma]] approximately 1.67 corresponds to monatomic gas (helium, argon)."\r
      - id: resumen_gamma_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "[[gamma]] determina la pendiente de la adiabata en el diagrama pV; mayor [[gamma]] implica mayor caida de presion por expansion."\r
          en: "[[gamma]] determines the slope of the adiabat in the pV diagram; larger [[gamma]] implies steeper pressure drop upon expansion."\r
    likely_errors:\r
      - id: error_gamma_uno\r
        when: "abs(result - 1.0) < 0.01"\r
        status: error\r
        text:\r
          es: "[[gamma]] igual a 1 invalida la formula adiabatica. Posible error al confundir [[gamma]] con otro coeficiente o al usar datos de proceso isotermico."\r
          en: "[[gamma]] equal to 1 invalidates the adiabatic formula. Possible error confusing [[gamma]] with another coefficient or using isothermal process data."\r
      - id: error_gamma_fallback\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Verificar el tipo de gas para asignar [[gamma]] correcto: monatomico 1.67, diatomico 1.40, poliatom ~1.30."\r
          en: "Verify the gas type to assign correct [[gamma]]: monatomic 1.67, diatomic 1.40, polyatomic ~1.30."\r
    next_step_rules:\r
      - id: siguiente_gamma_ley\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Con [[gamma]] definido, aplicar la ley adiabatica para calcular [[p2]], [[V2]] o [[T2]] segun los datos disponibles."\r
          en: "With [[gamma]] defined, apply the adiabatic law to calculate [[p2]], [[V2]] or [[T2]] according to available data."\r
\r
  p2:\r
    magnitude_type: p2\r
    semantic_role:\r
      es: Presion final del gas al termino del proceso adiabatico\r
      en: Final pressure of the gas at the end of the adiabatic process\r
    physical_reading_rules:\r
      - id: lectura_p2_fisico\r
        when: "result < p1"\r
        status: info\r
        text:\r
          es: "[[p2]] menor que [[p1]] significa que al expandirse el gas, las moleculas golpean las paredes con menor frecuencia e intensidad."\r
          en: "[[p2]] less than [[p1]] means that as the gas expands, molecules strike the walls with lower frequency and intensity."\r
      - id: lectura_p2_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "[[p2]] refleja la densidad de impactos moleculares al final del proceso adiabatico."\r
          en: "[[p2]] reflects the density of molecular impacts at the end of the adiabatic process."\r
    coherence_rules:\r
      - id: coherencia_p2_positivo\r
        when: "result > 0"\r
        status: success\r
        text:\r
          es: "[[p2]] positiva; presion absoluta fisicamente admisible."\r
          en: "Positive [[p2]]; physically admissible absolute pressure."\r
      - id: coherencia_p2_ley_adiabata\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Verificar que [[p2]] sea coherente con la ley adiabatica: [[p1]] x ([[V1]]/[[V2]])^[[gamma]]."\r
          en: "Verify that [[p2]] is consistent with the adiabatic law: [[p1]] x ([[V1]]/[[V2]])^[[gamma]]."\r
    model_validity_rules:\r
      - id: validez_p2_no_cero\r
        when: "result > 0"\r
        status: success\r
        text:\r
          es: "[[p2]] positiva; modelo de gas ideal aplicable."\r
          en: "Positive [[p2]]; ideal gas model applicable."\r
      - id: validez_p2_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El modelo es valido siempre que [[p2]] no supere varios megapascales y el gas este lejos del punto critico."\r
          en: "The model is valid as long as [[p2]] does not exceed several megapascals and the gas is far from the critical point."\r
    graph_rules:\r
      - id: grafico_p2_estado_final\r
        when: "true"\r
        status: info\r
        text:\r
          es: "[[p2]] es la ordenada del estado final en el diagrama pV; en expansion adiabatica cae mas que en la isoterma correspondiente."\r
          en: "[[p2]] is the ordinate of the final state in the pV diagram; in adiabatic expansion it falls more than in the corresponding isotherm."\r
    summary_rules:\r
      - id: resumen_p2_menor\r
        when: "result < p1"\r
        status: info\r
        text:\r
          es: "[[p2]] menor que [[p1]] confirma expansion adiabatica; la caida es mas pronunciada que en la isoterma."\r
          en: "[[p2]] less than [[p1]] confirms adiabatic expansion; the drop is steeper than in the isotherm."\r
      - id: resumen_p2_mayor\r
        when: "result > p1"\r
        status: info\r
        text:\r
          es: "[[p2]] mayor que [[p1]] confirma compresion adiabatica."\r
          en: "[[p2]] greater than [[p1]] confirms adiabatic compression."\r
      - id: resumen_p2_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "[[p2]] junto con [[V2]] define el estado final del gas en el diagrama pV."\r
          en: "[[p2]] together with [[V2]] defines the final gas state in the pV diagram."\r
    likely_errors:\r
      - id: error_p2_isotermico\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Verificar que [[p2]] se haya calculado con la ley adiabatica y no con la ley de Boyle; confundir ambas leyes es un error tipico."\r
          en: "Verify that [[p2]] was calculated with the adiabatic law and not with Boyle's law; confusing the two is a typical mistake."\r
      - id: error_p2_fallback\r
        when: "true"\r
        status: info\r
        text:\r
          es: "[[p2]] en proceso adiabatico cae mas que en el isotermico para la misma expansion; si el resultado es igual al isotermico, revisar [[gamma]]."\r
          en: "[[p2]] in an adiabatic process drops more than in the isothermal for the same expansion; if the result equals the isothermal value, review [[gamma]]."\r
    next_step_rules:\r
      - id: siguiente_p2_verificacion\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Verificar [[p2]] usando la relacion adiabatica alternativa con temperaturas: [[p2]]/[[p1]] = ([[T2]]/[[T1]])^(gamma/(gamma-1))."\r
          en: "Verify [[p2]] using the alternative adiabatic relation with temperatures: [[p2]]/[[p1]] = ([[T2]]/[[T1]])^(gamma/(gamma-1))."\r
\r
cross_checks:\r
  - id: balance_energetico_adiabatico\r
    description:\r
      es: "Verifica que DeltaU + W = 0 en proceso adiabatico."\r
      en: "Verifies that DeltaU + W = 0 in an adiabatic process."\r
    condition: "abs(DeltaU + W) < 0.01 * max(abs(DeltaU), abs(W)) + 0.01"\r
    status_if_fail: warning\r
    message:\r
      es: "El balance energetico adiabatico no se cumple exactamente; verificar coherencia entre DeltaU y W."\r
      en: "The adiabatic energy balance does not hold exactly; check consistency between DeltaU and W."\r
\r
error_patterns:\r
  - id: pattern_isotermico\r
    detect_when: "abs(T2 - T1) < 0.1 and abs(V2 - V1) > 0.01 * V1"\r
    message:\r
      es: "Temperatura casi constante con cambio de volumen apreciable; esto seria proceso isotermico, no adiabatico."\r
      en: "Temperature nearly constant with appreciable volume change; this would be isothermal, not adiabatic."\r
  - id: pattern_calor_no_nulo\r
    detect_when: "abs(DeltaU + W) > 0.05 * abs(W)"\r
    message:\r
      es: "Discrepancia entre DeltaU y W sugiere que el proceso no fue completamente adiabatico o hay un error de calculo."\r
      en: "Discrepancy between DeltaU and W suggests the process was not fully adiabatic or there is a calculation error."\r
\r
graph_binding:\r
  enabled: true\r
  channels: [pV_adiabat, TV_adiabat]\r
  primary_channel: pV_adiabat\r
  description:\r
    es: "La curva adiabatica en el diagrama pV es mas pronunciada que la isoterma correspondiente por el factor gamma."\r
    en: "The adiabatic curve in the pV diagram is steeper than the corresponding isotherm by the gamma factor."\r
\r
mini_graph:\r
  enabled: true\r
  preferred_type: Coord\r
  description:\r
    es: "Diagrama pV mostrando la curva adiabatica entre el estado inicial y el final."\r
    en: "pV diagram showing the adiabatic curve between initial and final state."\r
\r
output_contract:\r
  format: structured_text\r
  include_emojis: true\r
  max_lines_per_section: 5\r
  truncate_long_values: true\r
  decimal_places: 2\r
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]\r
`;export{e as default};
