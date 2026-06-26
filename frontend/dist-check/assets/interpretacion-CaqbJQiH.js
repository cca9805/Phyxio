const e=`version: 1.0.0
id: isobarico-interpretacion
leaf_id: isobarico
nombre:
  es: Interpretacion del proceso isobarico
  en: Isobaric process interpretation
scope:
  area: fisica-clasica
  bloque: termodinamica
  subbloque: gases-y-modelos
  parent_id: procesos-termodinamicos
  ruta_relativa: fisica-clasica/termodinamica/gases-y-modelos/procesos-termodinamicos/isobarico
ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es:
      summary: Resumen fisico
      reading: Lectura del resultado
      coherence: Coherencia
      validity: Validez del modelo
      graph: Lectura grafica
      errors: Errores probables
      next_step: Siguiente paso
    en:
      summary: Physical summary
      reading: Result reading
      coherence: Coherence
      validity: Model validity
      graph: Graph reading
      errors: Likely errors
      next_step: Next step
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits:
    max_summary_chars: 200
    max_warnings: 2
    max_suggestions: 2
dependencies:
  formulas: [trabajo_isobarico, ley_gay_lussac, primer_principio_isobarico]
  magnitudes: [p, V1, V2, DeltaV, T1, T2, DeltaT, W, Q, DeltaU]
global_context:
  physical_domain:
    es: "Procesos termodinamicos a presion constante en gas ideal; el gas puede intercambiar calor con el entorno."
    en: "Thermodynamic processes at constant pressure in ideal gas; the gas can exchange heat with surroundings."
  axis_convention:
    es: "W positivo indica trabajo realizado por el gas sobre el entorno; Q positivo indica calor absorbido por el gas."
    en: "Positive W means work done by the gas on surroundings; positive Q means heat absorbed by the gas."
  standard_assumptions: [gas ideal, proceso cuasiestatico, presion constante, sin cambio de fase]
  standard_warnings: ["verificar que las temperaturas esten en kelvin", "no confundir proceso isobarico con isotermico ni con isocorico"]
output_contract:
  format: structured_text
  include_emojis: true
  max_lines_per_section: 5
  truncate_long_values: true
  decimal_places: 2
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
result_blocks:
  summary:
    enabled: true
    priority: 1
    title:
      es: Resumen fisico
      en: Physical summary
  physical_reading:
    enabled: true
    priority: 2
    title:
      es: Lectura fisica
      en: Physical reading
  coherence:
    enabled: true
    priority: 3
    title:
      es: Coherencia
      en: Coherence
  model_validity:
    enabled: true
    priority: 4
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    enabled: true
    priority: 5
    title:
      es: Lectura grafica
      en: Graph reading
  likely_errors:
    enabled: true
    priority: 6
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    enabled: true
    priority: 7
    title:
      es: Siguiente paso
      en: Next step
targets:
  W:
    magnitude_type: W
    semantic_role:
      es: Trabajo mecanico realizado por el gas a presion constante
      en: Mechanical work done by the gas at constant pressure
    summary_rules:
      - id: resumen_W_expansion
        when: "result > 0"
        status: info
        text:
          es: "[[W]] positivo confirma expansion isobarica: el gas empujo el piston y entrego energia mecanica al entorno."
          en: "Positive [[W]] confirms isobaric expansion: the gas pushed the piston and delivered mechanical energy to surroundings."
      - id: resumen_W_compresion
        when: "result < 0"
        status: info
        text:
          es: "[[W]] negativo indica compresion isobarica: el entorno hizo trabajo sobre el gas reduciendo su volumen."
          en: "Negative [[W]] indicates isobaric compression: surroundings did work on the gas reducing its volume."
      - id: resumen_W_cero
        when: "result == 0"
        status: warning
        text:
          es: "[[W]] nulo implica que no hubo cambio de volumen; verificar si el proceso es realmente isocorico."
          en: "Zero [[W]] implies no volume change; verify if the process is actually isochoric."
      - id: resumen_W_fallback
        when: "true"
        status: info
        text:
          es: "[[W]] = [[p]] * [[DeltaV]] es el area del rectangulo bajo la linea isobarica en el diagrama pV."
          en: "[[W]] = [[p]] * [[DeltaV]] is the rectangular area under the isobaric line in the pV diagram."
    physical_reading_rules:
      - id: lectura_W_expansion
        when: "result > 0"
        status: info
        text:
          es: "El gas se expandio a presion constante: la fuerza de presion actuo sobre el piston durante todo el recorrido [[DeltaV]], transfiriendo energia cinetica macroscopica al entorno."
          en: "The gas expanded at constant pressure: the pressure force acted on the piston throughout the displacement [[DeltaV]], transferring macroscopic kinetic energy to surroundings."
      - id: lectura_W_compresion
        when: "result < 0"
        status: info
        text:
          es: "El entorno comprimo el gas a presion constante: la fuerza externa realizo trabajo sobre el gas, reduciendo su volumen y aumentando su energia interna."
          en: "Surroundings compressed the gas at constant pressure: the external force did work on the gas, reducing its volume and increasing its internal energy."
      - id: lectura_W_fallback
        when: "true"
        status: info
        text:
          es: "En proceso isobarico [[W]] es siempre el producto de la presion constante [[p]] por la variacion de volumen [[DeltaV]]."
          en: "In isobaric process [[W]] is always the product of constant pressure [[p]] by volume change [[DeltaV]]."
    coherence_rules:
      - id: coherencia_W_signo_DeltaV
        when: "result > 0 and DeltaV > 0"
        status: success
        text:
          es: "[[W]] positivo es coherente con [[DeltaV]] positivo; la presion positiva garantiza que el signo del trabajo coincida con el signo de la variacion de volumen."
          en: "Positive [[W]] is consistent with positive [[DeltaV]]; positive pressure guarantees that work sign matches volume change sign."
      - id: coherencia_W_signo_compresion
        when: "result < 0 and DeltaV < 0"
        status: success
        text:
          es: "[[W]] negativo coherente con [[DeltaV]] negativo; compresion isobarica bien identificada."
          en: "Negative [[W]] consistent with negative [[DeltaV]]; isobaric compression correctly identified."
      - id: coherencia_W_fallback
        when: "true"
        status: info
        text:
          es: "Verificar que el signo de [[W]] coincida con el signo de [[DeltaV]]; en proceso isobarico nunca pueden tener signos contrarios."
          en: "Verify that the sign of [[W]] matches the sign of [[DeltaV]]; in isobaric process they can never have opposite signs."
    model_validity_rules:
      - id: validez_W_p_alta
        when: "p > 5000000"
        status: warning
        text:
          es: "Presion muy alta; los gases reales se desvian del comportamiento ideal. El resultado de [[W]] puede ser aproximado."
          en: "Very high pressure; real gases deviate from ideal behavior. The value of [[W]] may be approximate."
      - id: validez_W_cuasiestatico
        when: "true"
        status: info
        text:
          es: "La formula W = p * DeltaV asume proceso cuasiestatico reversible. Procesos rapidos o irreversibles requieren correccion."
          en: "The formula W = p * DeltaV assumes a quasi-static reversible process. Fast or irreversible processes require correction."
      - id: validez_W_fallback
        when: "true"
        status: info
        text:
          es: "Modelo valido para gas ideal a presion constante, proceso lento y sin friccion interna ni cambio de fase."
          en: "Model valid for ideal gas at constant pressure, slow process without internal friction or phase change."
    graph_rules:
      - id: grafico_W_rectangulo
        when: "true"
        status: info
        text:
          es: "En el diagrama pV, [[W]] es el area del rectangulo de base |[[DeltaV]]| y altura [[p]]. La linea isobarica es horizontal a esa altura."
          en: "In the pV diagram, [[W]] is the area of the rectangle with base |[[DeltaV]]| and height [[p]]. The isobaric line is horizontal at that height."
      - id: grafico_W_comparacion
        when: "true"
        status: info
        text:
          es: "Comparado con la adiabata o la isoterma entre los mismos estados, la linea isobarica es mas larga y el trabajo mayor, porque la presion no cae al expandirse."
          en: "Compared to the adiabat or isotherm between the same states, the isobaric line is longer and work is greater, because pressure does not drop during expansion."
      - id: grafico_W_fallback
        when: "true"
        status: info
        text:
          es: "El diagrama pV isobarico es el mas sencillo: una recta horizontal. El area del rectangulo formado es directamente [[W]]."
          en: "The isobaric pV diagram is the simplest: a horizontal line. The area of the formed rectangle is directly [[W]]."
    likely_errors:
      - id: error_W_formula_incorrecta
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir la formula adiabatica W = (p1V1 - p2V2)/(gamma-1) con la isobarica. Es un mistake comun creer que se puede usar la formula logaritmica o adiabatica en proceso isobarico. La formula correcta es siempre W = p * [[DeltaV]]."
          en: "Frequent mistake: confuse the adiabatic formula W = (p1V1 - p2V2)/(gamma-1) with the isobaric one. Students wrongly believe they can use the logarithmic or adiabatic formula in an isobaric process. The correct formula is always W = p * [[DeltaV]]."
      - id: error_W_unidades
        when: "abs(result) > 0 and abs(result) < 0.1"
        status: warning
        text:
          es: "Valor de [[W]] muy pequeno; probable error de unidades. Verificar que [[DeltaV]] este en m³ y [[p]] en Pa, no en litros ni atmosferas."
          en: "Very small [[W]] value; probable unit error. Verify that [[DeltaV]] is in m³ and [[p]] in Pa, not in litres or atmospheres."
      - id: error_W_fallback
        when: "true"
        status: info
        text:
          es: "Asegurar que [[p]] sea la presion constante del proceso y que [[DeltaV]] = [[V2]] - [[V1]] este correctamente calculado."
          en: "Ensure [[p]] is the constant process pressure and [[DeltaV]] = [[V2]] - [[V1]] is correctly calculated."
    next_step_rules:
      - id: siguiente_W_Q
        when: "result > 0"
        status: info
        text:
          es: "Con [[W]] obtenido, calcular [[Q]] = [[DeltaU]] + [[W]] para determinar el calor total absorbido en la expansion isobarica."
          en: "With [[W]] obtained, calculate [[Q]] = [[DeltaU]] + [[W]] to determine the total heat absorbed in isobaric expansion."
      - id: siguiente_W_DeltaU
        when: "true"
        status: info
        text:
          es: "Calcular [[DeltaU]] = [[Q]] - [[W]] para completar el balance energetico del primer principio en este proceso isobarico."
          en: "Calculate [[DeltaU]] = [[Q]] - [[W]] to complete the first-law energy balance for this isobaric process."
      - id: siguiente_W_fallback
        when: "true"
        status: info
        text:
          es: "Continuar con el calculo de [[T2]] mediante la ley de Gay-Lussac para caracterizar completamente el estado final del gas."
          en: "Continue with the calculation of [[T2]] using Gay-Lussac's law to fully characterize the final state of the gas."

  T2:
    magnitude_type: T2
    semantic_role:
      es: Temperatura final del gas tras el proceso isobarico
      en: Final temperature of the gas after the isobaric process
    summary_rules:
      - id: resumen_T2_mayor
        when: "result > T1"
        status: info
        text:
          es: "[[T2]] mayor que [[T1]] confirma expansion isobarica: el gas absorbe calor del entorno y su temperatura sube proporcionalmente al volumen."
          en: "[[T2]] greater than [[T1]] confirms isobaric expansion: the gas absorbs heat from surroundings and its temperature rises proportionally to volume."
      - id: resumen_T2_menor
        when: "result < T1"
        status: info
        text:
          es: "[[T2]] menor que [[T1]] confirma compresion isobarica: el gas cede calor al entorno y su temperatura desciende con el volumen."
          en: "[[T2]] less than [[T1]] confirms isobaric compression: the gas releases heat to surroundings and its temperature drops with volume."
      - id: resumen_T2_igual
        when: "abs(result - T1) < 0.5"
        status: warning
        text:
          es: "[[T2]] casi igual a [[T1]]; verificar si hubo cambio de volumen significativo o si el proceso fue realmente isobarico."
          en: "[[T2]] almost equal to [[T1]]; verify whether there was significant volume change or whether the process was truly isobaric."
      - id: resumen_T2_fallback
        when: "true"
        status: info
        text:
          es: "[[T2]] es proporcional a [[T1]] segun la razon de volumenes: [[T2]] = [[T1]] * ([[V2]] / [[V1]])."
          en: "[[T2]] is proportional to [[T1]] according to the volume ratio: [[T2]] = [[T1]] * ([[V2]] / [[V1]])."
    physical_reading_rules:
      - id: lectura_T2_expansion
        when: "result > T1"
        status: info
        text:
          es: "El calor absorbido por el gas a presion constante aumento la agitacion molecular y por tanto la temperatura. El volumen aumento en la misma proporcion que la temperatura absoluta."
          en: "Heat absorbed by the gas at constant pressure increased molecular agitation and therefore temperature. Volume increased in the same proportion as absolute temperature."
      - id: lectura_T2_compresion
        when: "result < T1"
        status: info
        text:
          es: "El gas fue comprimido y cedio calor al entorno; la temperatura final es menor porque las moleculas tienen menor energia cinetica media."
          en: "The gas was compressed and released heat to surroundings; the final temperature is lower because molecules have lower average kinetic energy."
      - id: lectura_T2_fallback
        when: "true"
        status: info
        text:
          es: "En proceso isobarico la variacion de temperatura [[DeltaT]] es directamente proporcional a la variacion de volumen [[DeltaV]] a traves de la ley de Gay-Lussac."
          en: "In isobaric process the temperature change [[DeltaT]] is directly proportional to volume change [[DeltaV]] through Gay-Lussac's law."
    coherence_rules:
      - id: coherencia_T2_positivo
        when: "result > 0"
        status: success
        text:
          es: "[[T2]] positiva; temperatura absoluta fisicamente admisible."
          en: "Positive [[T2]]; physically admissible absolute temperature."
      - id: coherencia_T2_proporcion
        when: "abs(result / T1 - V2 / V1) < 0.01"
        status: success
        text:
          es: "La razon [[T2]]/[[T1]] coincide con [[V2]]/[[V1]]; la ley de Gay-Lussac se cumple correctamente."
          en: "The ratio [[T2]]/[[T1]] matches [[V2]]/[[V1]]; Gay-Lussac's law is correctly satisfied."
      - id: coherencia_T2_fallback
        when: "true"
        status: info
        text:
          es: "Verificar que [[T2]] / [[T1]] = [[V2]] / [[V1]] para confirmar que el proceso es realmente isobarico."
          en: "Verify that [[T2]] / [[T1]] = [[V2]] / [[V1]] to confirm the process is truly isobaric."
    model_validity_rules:
      - id: validez_T2_muy_alta
        when: "result > 3000"
        status: warning
        text:
          es: "[[T2]] muy alta; a estas temperaturas el gas puede disociarse o ionizarse y el modelo de gas ideal deja de ser valido."
          en: "Very high [[T2]]; at these temperatures the gas may dissociate or ionize and the ideal gas model ceases to be valid."
      - id: validez_T2_muy_baja
        when: "result < 100"
        status: warning
        text:
          es: "[[T2]] muy baja; el gas real puede acercarse a la condensacion y la ley de Gay-Lussac no aplica con precision."
          en: "Very low [[T2]]; real gas may approach condensation and Gay-Lussac's law does not apply precisely."
      - id: validez_T2_fallback
        when: "true"
        status: info
        text:
          es: "Modelo valido para gas ideal a presion moderada y temperatura alejada del punto de licuefaccion."
          en: "Model valid for ideal gas at moderate pressure and temperature far from liquefaction point."
    graph_rules:
      - id: grafico_T2_estado_final
        when: "true"
        status: info
        text:
          es: "En el diagrama pV, el estado final ([[V2]], [[p]]) corresponde a la temperatura [[T2]] segun la ecuacion de estado del gas ideal p*V = n*R*T."
          en: "In the pV diagram, the final state ([[V2]], [[p]]) corresponds to temperature [[T2]] according to the ideal gas equation p*V = n*R*T."
      - id: grafico_T2_isoterma
        when: "result > T1"
        status: info
        text:
          es: "El estado final queda sobre una isoterma mas alta que la inicial en el diagrama pV, confirmando que [[T2]] > [[T1]] tras la expansion isobarica."
          en: "The final state lies on a higher isotherm than the initial one in the pV diagram, confirming [[T2]] > [[T1]] after isobaric expansion."
      - id: grafico_T2_fallback
        when: "true"
        status: info
        text:
          es: "El desplazamiento horizontal de la linea isobarica en el diagrama pV refleja directamente el cambio de temperatura a traves de Gay-Lussac."
          en: "The horizontal displacement of the isobaric line in the pV diagram directly reflects the temperature change through Gay-Lussac's law."
    likely_errors:
      - id: error_T2_celsius
        when: "result < 0"
        status: error
        text:
          es: "[[T2]] negativa es fisicamente imposible en escala kelvin. Probable error de unidades: verificar que [[T1]] este en kelvin, no en Celsius."
          en: "Negative [[T2]] is physically impossible on the kelvin scale. Probable unit error: verify that [[T1]] is in kelvin, not Celsius."
      - id: error_T2_confusion_proceso
        when: "abs(result - T1) < 0.01"
        status: warning
        text:
          es: "[[T2]] igual a [[T1]] corresponde a proceso isotermico, no isobarico con cambio de volumen. Verificar la formula aplicada."
          en: "[[T2]] equal to [[T1]] corresponds to isothermal, not isobaric process with volume change. Check the applied formula."
      - id: error_T2_fallback
        when: "true"
        status: info
        text:
          es: "Recordar que [[T2]] debe ser proporcional a [[T1]] en la misma razon que [[V2]] a [[V1]] para proceso isobarico."
          en: "Remember that [[T2]] must be proportional to [[T1]] in the same ratio as [[V2]] to [[V1]] for isobaric process."
    next_step_rules:
      - id: siguiente_T2_DeltaT
        when: "true"
        status: info
        text:
          es: "Calcular [[DeltaT]] = [[T2]] - [[T1]] para cuantificar el cambio termico y usarlo en el calculo del calor isobarico mediante la capacidad calorifica molar."
          en: "Calculate [[DeltaT]] = [[T2]] - [[T1]] to quantify the thermal change and use it in calculating isobaric heat via molar heat capacity."
      - id: siguiente_T2_ciclo
        when: "true"
        status: info
        text:
          es: "Si el proceso forma parte de un ciclo termodinamico, usar [[T2]] como temperatura inicial del siguiente proceso del ciclo."
          en: "If the process is part of a thermodynamic cycle, use [[T2]] as the initial temperature for the next process in the cycle."
      - id: siguiente_T2_fallback
        when: "true"
        status: info
        text:
          es: "Con [[T2]] obtenido, calcular [[DeltaU]] = [[Q]] - [[W]] para completar el balance energetico del proceso isobarico."
          en: "With [[T2]] obtained, calculate [[DeltaU]] = [[Q]] - [[W]] to complete the energy balance of the isobaric process."

  DeltaU:
    magnitude_type: DeltaU
    semantic_role:
      es: Variacion de energia interna del gas en el proceso isobarico
      en: Change in internal energy of the gas in the isobaric process
    summary_rules:
      - id: resumen_dU_positivo
        when: "result > 0"
        status: info
        text:
          es: "[[DeltaU]] positivo indica que el gas gano energia interna; la temperatura final es mayor que la inicial."
          en: "Positive [[DeltaU]] indicates the gas gained internal energy; the final temperature is greater than the initial."
      - id: resumen_dU_negativo
        when: "result < 0"
        status: info
        text:
          es: "[[DeltaU]] negativo indica que el gas perdio energia interna; la temperatura final es menor que la inicial."
          en: "Negative [[DeltaU]] indicates the gas lost internal energy; the final temperature is lower than the initial."
      - id: resumen_dU_cero
        when: "result == 0"
        status: warning
        text:
          es: "[[DeltaU]] nulo en proceso isobarico con cambio de volumen es inusual para gas ideal; verificar que [[Q]] = [[W]]."
          en: "Zero [[DeltaU]] in isobaric process with volume change is unusual for ideal gas; verify that [[Q]] = [[W]]."
      - id: resumen_dU_fallback
        when: "true"
        status: info
        text:
          es: "[[DeltaU]] = [[Q]] - [[W]]; en proceso isobarico parte del calor se convierte en trabajo y el resto cambia la energia interna."
          en: "[[DeltaU]] = [[Q]] - [[W]]; in isobaric process part of the heat converts to work and the rest changes internal energy."
    physical_reading_rules:
      - id: lectura_dU_expansion
        when: "result > 0"
        status: info
        text:
          es: "El gas absorbio mas calor del que convirtio en trabajo de expansion; el exceso quedo almacenado como mayor energia cinetica molecular."
          en: "The gas absorbed more heat than it converted to expansion work; the excess was stored as higher molecular kinetic energy."
      - id: lectura_dU_compresion
        when: "result < 0"
        status: info
        text:
          es: "El entorno realizo trabajo sobre el gas pero este cedio aun mas calor al entorno; el saldo neto redujo la energia interna y la temperatura bajo."
          en: "Surroundings did work on the gas but it released even more heat to surroundings; the net balance reduced internal energy and temperature dropped."
      - id: lectura_dU_fallback
        when: "true"
        status: info
        text:
          es: "En proceso isobarico [[DeltaU]] no es nulo a diferencia del proceso isotermico; la presion constante no fija la temperatura."
          en: "In isobaric process [[DeltaU]] is not zero unlike the isothermal process; constant pressure does not fix temperature."
    coherence_rules:
      - id: coherencia_dU_balance
        when: "abs(result - (Q - W)) < 0.01 * max(abs(Q), abs(W)) + 0.01"
        status: success
        text:
          es: "[[DeltaU]] = [[Q]] - [[W]] verificado; el primer principio se cumple correctamente."
          en: "[[DeltaU]] = [[Q]] - [[W]] verified; the first law is correctly satisfied."
      - id: coherencia_dU_Q_mayor_W
        when: "result > 0 and Q > W"
        status: success
        text:
          es: "[[DeltaU]] positivo y [[Q]] > [[W]] son coherentes; en expansion isobarica el calor siempre supera al trabajo realizado."
          en: "Positive [[DeltaU]] and [[Q]] > [[W]] are consistent; in isobaric expansion heat always exceeds work done."
      - id: coherencia_dU_fallback
        when: "true"
        status: info
        text:
          es: "Verificar que [[DeltaU]] + [[W]] = [[Q]] para confirmar el balance del primer principio en este proceso isobarico."
          en: "Verify that [[DeltaU]] + [[W]] = [[Q]] to confirm the first-law balance in this isobaric process."
    model_validity_rules:
      - id: validez_dU_gas_ideal
        when: "true"
        status: info
        text:
          es: "Para gas ideal, [[DeltaU]] depende solo de la variacion de temperatura [[DeltaT]], independientemente de como varian p y V. Esto no vale para gases reales a alta presion."
          en: "For ideal gas, [[DeltaU]] depends only on temperature change [[DeltaT]], regardless of how p and V vary. This does not hold for real gases at high pressure."
      - id: validez_dU_cambio_fase
        when: "true"
        status: warning
        text:
          es: "Si el proceso atraviesa un cambio de fase, [[DeltaU]] incluye el calor latente y la formula simple del primer principio debe modificarse."
          en: "If the process crosses a phase change, [[DeltaU]] includes latent heat and the simple first-law formula must be modified."
      - id: validez_dU_fallback
        when: "true"
        status: info
        text:
          es: "Modelo valido para gas ideal sin cambio de fase y con [[DeltaT]] no demasiado grande para que gamma permanezca constante."
          en: "Model valid for ideal gas without phase change and with [[DeltaT]] not too large so that gamma remains constant."
    graph_rules:
      - id: grafico_dU_no_visible
        when: "true"
        status: info
        text:
          es: "[[DeltaU]] no es directamente visible en el diagrama pV isobarico; se infiere como diferencia entre [[Q]] y el area rectangular [[W]]."
          en: "[[DeltaU]] is not directly visible in the isobaric pV diagram; it is inferred as the difference between [[Q]] and the rectangular area [[W]]."
      - id: grafico_dU_temperatura
        when: "result > 0"
        status: info
        text:
          es: "El estado final en el diagrama pV queda sobre una isoterma de mayor temperatura, lo que refleja el aumento de [[DeltaU]]."
          en: "The final state in the pV diagram lies on a higher-temperature isotherm, reflecting the increase in [[DeltaU]]."
      - id: grafico_dU_fallback
        when: "true"
        status: info
        text:
          es: "En el diagrama pV, la posicion del estado final sobre una isoterma mas alta o mas baja refleja el signo de [[DeltaU]]."
          en: "In the pV diagram, the position of the final state on a higher or lower isotherm reflects the sign of [[DeltaU]]."
    likely_errors:
      - id: error_dU_igual_Q
        when: "abs(result - Q) < 0.01 * abs(Q) and abs(W) > 0.05 * abs(Q)"
        status: warning
        text:
          es: "Posible confusion: [[DeltaU]] no es igual a [[Q]] en proceso isobarico porque parte del calor se convierte en trabajo. Usar [[DeltaU]] = [[Q]] - [[W]]."
          en: "Possible confusion: [[DeltaU]] does not equal [[Q]] in isobaric process because part of the heat converts to work. Use [[DeltaU]] = [[Q]] - [[W]]."
      - id: error_dU_cero
        when: "abs(result) < 0.01 * abs(Q)"
        status: warning
        text:
          es: "[[DeltaU]] casi nulo en proceso isobarico con calor distinto de cero; en gas ideal esto solo es posible si el proceso es ademas isotermico, lo cual contradice el proceso isobarico con cambio de volumen."
          en: "Near-zero [[DeltaU]] in isobaric process with nonzero heat; in ideal gas this is only possible if the process is also isothermal, which contradicts isobaric process with volume change."
      - id: error_dU_fallback
        when: "true"
        status: info
        text:
          es: "Recordar que [[DeltaU]] = [[Q]] - [[W]]; la presion constante no implica energia interna constante."
          en: "Remember that [[DeltaU]] = [[Q]] - [[W]]; constant pressure does not imply constant internal energy."
    next_step_rules:
      - id: siguiente_dU_T2
        when: "result > 0"
        status: info
        text:
          es: "[[DeltaU]] positivo confirma que la temperatura subio; calcular [[T2]] para cuantificar el calentamiento isobarico."
          en: "Positive [[DeltaU]] confirms temperature rose; calculate [[T2]] to quantify the isobaric heating."
      - id: siguiente_dU_ciclo
        when: "true"
        status: info
        text:
          es: "Si el proceso isobarico forma parte de un ciclo, el [[DeltaU]] acumulado en todos los procesos del ciclo debe ser nulo para un ciclo cerrado."
          en: "If the isobaric process is part of a cycle, the cumulative [[DeltaU]] over all cycle processes must be zero for a closed cycle."
      - id: siguiente_dU_fallback
        when: "true"
        status: info
        text:
          es: "Completar el balance energetico verificando que [[DeltaU]] + [[W]] = [[Q]] antes de pasar al siguiente proceso del ciclo."
          en: "Complete the energy balance by verifying [[DeltaU]] + [[W]] = [[Q]] before moving to the next process in the cycle."

  p:
    magnitude_type: p
    semantic_role:
      es: Presion constante del proceso isobarico
      en: Constant pressure of the isobaric process
    summary_rules:
      - id: resumen_p_constante
        when: "true"
        status: info
        text:
          es: "[[p]] es la presion constante que define el proceso isobarico."
          en: "[[p]] is the constant pressure that defines the isobaric process."
    physical_reading_rules:
      - id: lectura_p_constante
        when: "true"
        status: info
        text:
          es: "Presion constante implica que el piston se mueve libremente igualando presion exterior en todo momento."
          en: "Constant pressure means the piston moves freely matching external pressure at all times."
    coherence_rules:
      - id: coherencia_p_positiva
        when: "result > 0"
        status: success
        text:
          es: "[[p]] positiva es fisicamente admisible."
          en: "Positive [[p]] is physically admissible."
      - id: coherencia_p_fallback
        when: "true"
        status: info
        text:
          es: "Verificar que [[p]] sea positiva y constante durante todo el proceso."
          en: "Verify that [[p]] is positive and constant throughout the process."
    model_validity_rules:
      - id: validez_p_alta
        when: "result > 5000000"
        status: warning
        text:
          es: "Presion muy alta; el modelo de gas ideal puede dejar de ser valido. Verificar si se requiere correccion de Van der Waals."
          en: "Very high pressure; the ideal gas model may break down. Check whether Van der Waals correction is needed."
      - id: validez_p_fallback
        when: "true"
        status: info
        text:
          es: "Modelo valido para presiones moderadas donde el gas ideal es una buena aproximacion."
          en: "Model valid for moderate pressures where ideal gas is a good approximation."
    graph_rules:
      - id: grafico_p_linea
        when: "true"
        status: info
        text:
          es: "En el diagrama pV, [[p]] constante aparece como una linea horizontal a la altura correspondiente."
          en: "In the pV diagram, constant [[p]] appears as a horizontal line at the corresponding height."
      - id: grafico_p_fallback
        when: "true"
        status: info
        text:
          es: "La altura de la linea isobarica en el diagrama pV corresponde directamente al valor de [[p]]."
          en: "The height of the isobaric line in the pV diagram corresponds directly to the value of [[p]]."
    likely_errors:
      - id: error_p_confusion
        when: "true"
        status: warning
        text:
          es: "Error comun: confundir [[p]] constante con temperatura constante. Recordar que proceso isobarico no implica proceso isotermico."
          en: "Common mistake: confuse constant [[p]] with constant temperature. Remember isobaric process does not imply isothermal."
      - id: error_p_fallback
        when: "true"
        status: info
        text:
          es: "Asegurar que [[p]] sea realmente constante durante todo el proceso antes de aplicar el modelo isobarico."
          en: "Ensure [[p]] is truly constant throughout the process before applying the isobaric model."
    next_step_rules:
      - id: siguiente_p_W
        when: "true"
        status: info
        text:
          es: "Con [[p]] conocido, calcular [[W]] = [[p]] * [[DeltaV]] para cuantificar el trabajo del proceso."
          en: "With [[p]] known, calculate [[W]] = [[p]] * [[DeltaV]] to quantify process work."
      - id: siguiente_p_fallback
        when: "true"
        status: info
        text:
          es: "Usar [[p]] junto con [[T1]] y la ley del gas ideal para verificar el volumen inicial del sistema."
          en: "Use [[p]] along with [[T1]] and the ideal gas law to verify the initial volume of the system."

  T1:
    magnitude_type: T1
    semantic_role:
      es: Temperatura inicial del gas en el proceso isobarico
      en: Initial temperature of the gas in the isobaric process
    summary_rules:
      - id: resumen_T1_positiva
        when: "result > 0"
        status: info
        text:
          es: "[[T1]] positiva en escala kelvin; temperatura inicial fisicamente admisible."
          en: "Positive [[T1]] on kelvin scale; physically admissible initial temperature."
      - id: resumen_T1_fallback
        when: "true"
        status: info
        text:
          es: "[[T1]] es la temperatura inicial del gas en kelvin antes del proceso isobarico."
          en: "[[T1]] is the initial temperature of the gas in kelvin before the isobaric process."
    physical_reading_rules:
      - id: lectura_T1_estado
        when: "true"
        status: info
        text:
          es: "[[T1]] define el estado termico inicial del gas y determina la isoterma inicial en el diagrama pV."
          en: "[[T1]] defines the initial thermal state of the gas and determines the initial isotherm in the pV diagram."
      - id: lectura_T1_fallback
        when: "true"
        status: info
        text:
          es: "La temperatura inicial [[T1]] junto con [[p]] y la ley del gas ideal determina el volumen inicial [[V1]]."
          en: "Initial temperature [[T1]] together with [[p]] and the ideal gas law determines initial volume [[V1]]."
    coherence_rules:
      - id: coherencia_T1_positiva
        when: "result > 0"
        status: success
        text:
          es: "[[T1]] positiva es fisicamente admisible en escala kelvin absoluta."
          en: "Positive [[T1]] is physically admissible on the absolute kelvin scale."
      - id: coherencia_T1_fallback
        when: "true"
        status: info
        text:
          es: "Verificar que [[T1]] este en kelvin; un valor negativo o menor de 100 puede indicar uso incorrecto de Celsius."
          en: "Verify [[T1]] is in kelvin; a negative or very low value may indicate incorrect use of Celsius."
    model_validity_rules:
      - id: validez_T1_muy_baja
        when: "result < 100"
        status: warning
        text:
          es: "[[T1]] muy baja; el gas real puede acercarse al punto de condensacion y el modelo ideal deja de ser valido."
          en: "Very low [[T1]]; the real gas may approach condensation and the ideal model breaks down."
      - id: validez_T1_fallback
        when: "true"
        status: info
        text:
          es: "Modelo valido para [[T1]] lejos del punto de condensacion del gas."
          en: "Model valid for [[T1]] far from the gas condensation point."
    graph_rules:
      - id: grafico_T1_isoterma
        when: "true"
        status: info
        text:
          es: "El estado inicial ([[V1]], [[p]]) queda sobre la isoterma de temperatura [[T1]] en el diagrama pV."
          en: "The initial state ([[V1]], [[p]]) lies on the [[T1]] isotherm in the pV diagram."
      - id: grafico_T1_fallback
        when: "true"
        status: info
        text:
          es: "En el diagrama pV, [[T1]] corresponde a la isoterma que pasa por el estado inicial del proceso isobarico."
          en: "In the pV diagram, [[T1]] corresponds to the isotherm passing through the initial state of the isobaric process."
    likely_errors:
      - id: error_T1_celsius
        when: "result < 0"
        status: error
        text:
          es: "[[T1]] negativa es fisicamente imposible. Probable mistake: usar grados Celsius en lugar de kelvin. Convertir sumando 273.15."
          en: "Negative [[T1]] is physically impossible. Probable mistake: using Celsius instead of kelvin. Convert by adding 273.15."
      - id: error_T1_fallback
        when: "true"
        status: info
        text:
          es: "Recordar que las temperaturas en la ley de Gay-Lussac deben estar siempre en kelvin absolutos."
          en: "Remember that temperatures in Gay-Lussac's law must always be in absolute kelvin."
    next_step_rules:
      - id: siguiente_T1_T2
        when: "true"
        status: info
        text:
          es: "Con [[T1]] conocido, aplicar la ley de Gay-Lussac para obtener [[T2]] o [[V2]] segun el dato disponible."
          en: "With [[T1]] known, apply Gay-Lussac's law to obtain [[T2]] or [[V2]] depending on the available data."
      - id: siguiente_T1_fallback
        when: "true"
        status: info
        text:
          es: "Usar [[T1]] como referencia para calcular [[DeltaT]] y determinar la variacion de energia interna del gas."
          en: "Use [[T1]] as reference to calculate [[DeltaT]] and determine the change in internal energy of the gas."

  V2:
    magnitude_type: V2
    semantic_role:
      es: Volumen final del gas tras el proceso isobarico
      en: Final volume of the gas after the isobaric process
    summary_rules:
      - id: resumen_V2_mayor
        when: "result > V1"
        status: info
        text:
          es: "[[V2]] mayor que [[V1]] confirma expansion isobarica del gas."
          en: "[[V2]] greater than [[V1]] confirms isobaric expansion of the gas."
      - id: resumen_V2_menor
        when: "result < V1"
        status: info
        text:
          es: "[[V2]] menor que [[V1]] confirma compresion isobarica del gas."
          en: "[[V2]] less than [[V1]] confirms isobaric compression of the gas."
      - id: resumen_V2_fallback
        when: "true"
        status: info
        text:
          es: "[[V2]] es el volumen final obtenido por la ley de Gay-Lussac a partir de [[V1]] y la razon de temperaturas."
          en: "[[V2]] is the final volume obtained from Gay-Lussac's law using [[V1]] and the temperature ratio."
    physical_reading_rules:
      - id: lectura_V2_expansion
        when: "result > V1"
        status: info
        text:
          es: "El gas ocupo mayor volumen al absorber calor a presion constante; el piston se desplazo hacia afuera."
          en: "The gas occupied a larger volume upon absorbing heat at constant pressure; the piston moved outward."
      - id: lectura_V2_fallback
        when: "true"
        status: info
        text:
          es: "[[V2]] refleja el nuevo estado de equilibrio del gas tras el proceso isobarico a la temperatura [[T2]]."
          en: "[[V2]] reflects the new equilibrium state of the gas after the isobaric process at temperature [[T2]]."
    coherence_rules:
      - id: coherencia_V2_proporcion
        when: "abs(result / V1 - T2 / T1) < 0.01"
        status: success
        text:
          es: "La razon [[V2]]/[[V1]] coincide con [[T2]]/[[T1]]; la ley de Gay-Lussac se cumple correctamente."
          en: "The ratio [[V2]]/[[V1]] matches [[T2]]/[[T1]]; Gay-Lussac's law is correctly satisfied."
      - id: coherencia_V2_fallback
        when: "true"
        status: info
        text:
          es: "Verificar que [[V2]] / [[V1]] = [[T2]] / [[T1]] para confirmar la coherencia con Gay-Lussac."
          en: "Verify that [[V2]] / [[V1]] = [[T2]] / [[T1]] to confirm consistency with Gay-Lussac."
    model_validity_rules:
      - id: validez_V2_fallback
        when: "true"
        status: info
        text:
          es: "Modelo valido cuando el gas se comporta idealmente; verificar que [[V2]] sea fisicamente razonable para el sistema."
          en: "Model valid when gas behaves ideally; verify [[V2]] is physically reasonable for the system."
      - id: validez_V2_positivo
        when: "result > 0"
        status: success
        text:
          es: "[[V2]] positivo es fisicamente admisible."
          en: "Positive [[V2]] is physically admissible."
    graph_rules:
      - id: grafico_V2_estado_final
        when: "true"
        status: info
        text:
          es: "En el diagrama pV, [[V2]] marca el extremo derecho (expansion) o izquierdo (compresion) de la linea isobarica."
          en: "In the pV diagram, [[V2]] marks the right end (expansion) or left end (compression) of the isobaric line."
      - id: grafico_V2_fallback
        when: "true"
        status: info
        text:
          es: "El estado final ([[V2]], [[p]]) del proceso isobarico es el punto terminal de la recta horizontal en el diagrama pV."
          en: "The final state ([[V2]], [[p]]) of the isobaric process is the terminal point of the horizontal line in the pV diagram."
    likely_errors:
      - id: error_V2_confusion
        when: "true"
        status: warning
        text:
          es: "Error comun: olvidar convertir [[V1]] a m³ antes de calcular [[V2]] mediante Gay-Lussac. Esto lleva a confundir litros con metros cubicos en el resultado."
          en: "Common mistake: forget to convert [[V1]] to m³ before calculating [[V2]] via Gay-Lussac. This leads to confusing litres with cubic metres in the result."
      - id: error_V2_fallback
        when: "true"
        status: info
        text:
          es: "Verificar que [[V2]] = [[V1]] * ([[T2]] / [[T1]]) con temperaturas en kelvin."
          en: "Verify that [[V2]] = [[V1]] * ([[T2]] / [[T1]]) with temperatures in kelvin."
    next_step_rules:
      - id: siguiente_V2_DeltaV
        when: "true"
        status: info
        text:
          es: "Con [[V2]] obtenido, calcular [[DeltaV]] = [[V2]] - [[V1]] para determinar el trabajo isobarico."
          en: "With [[V2]] obtained, calculate [[DeltaV]] = [[V2]] - [[V1]] to determine the isobaric work."
      - id: siguiente_V2_fallback
        when: "true"
        status: info
        text:
          es: "Usar [[V2]] para verificar el balance Gay-Lussac y continuar con el calculo de [[W]] y [[Q]]."
          en: "Use [[V2]] to verify the Gay-Lussac balance and continue with the calculation of [[W]] and [[Q]]."

  DeltaV:
    magnitude_type: DeltaV
    semantic_role:
      es: Variacion de volumen del gas en el proceso isobarico
      en: Volume change of the gas in the isobaric process
    summary_rules:
      - id: resumen_DeltaV_positivo
        when: "result > 0"
        status: info
        text:
          es: "[[DeltaV]] positivo indica expansion; el gas incremento su volumen a presion constante."
          en: "Positive [[DeltaV]] indicates expansion; the gas increased its volume at constant pressure."
      - id: resumen_DeltaV_negativo
        when: "result < 0"
        status: info
        text:
          es: "[[DeltaV]] negativo indica compresion; el gas redujo su volumen a presion constante."
          en: "Negative [[DeltaV]] indicates compression; the gas reduced its volume at constant pressure."
      - id: resumen_DeltaV_fallback
        when: "true"
        status: info
        text:
          es: "[[DeltaV]] = [[V2]] - [[V1]] es la variacion de volumen que determina el trabajo isobarico."
          en: "[[DeltaV]] = [[V2]] - [[V1]] is the volume change that determines isobaric work."
    physical_reading_rules:
      - id: lectura_DeltaV_expansion
        when: "result > 0"
        status: info
        text:
          es: "El gas se expandio; el piston se desplazo una distancia proporcional a [[DeltaV]] realizando trabajo sobre el entorno."
          en: "The gas expanded; the piston displaced a distance proportional to [[DeltaV]] doing work on surroundings."
      - id: lectura_DeltaV_fallback
        when: "true"
        status: info
        text:
          es: "[[DeltaV]] cuantifica el desplazamiento del piston en el proceso isobarico y es directamente proporcional a [[DeltaT]]."
          en: "[[DeltaV]] quantifies the piston displacement in the isobaric process and is directly proportional to [[DeltaT]]."
    coherence_rules:
      - id: coherencia_DeltaV_signo_W
        when: "result > 0 and W > 0"
        status: success
        text:
          es: "[[DeltaV]] positivo coherente con [[W]] positivo; expansion correctamente identificada."
          en: "Positive [[DeltaV]] consistent with positive [[W]]; expansion correctly identified."
      - id: coherencia_DeltaV_fallback
        when: "true"
        status: info
        text:
          es: "Verificar que el signo de [[DeltaV]] sea coherente con el signo de [[W]] = [[p]] * [[DeltaV]]."
          en: "Verify that the sign of [[DeltaV]] is consistent with the sign of [[W]] = [[p]] * [[DeltaV]]."
    model_validity_rules:
      - id: validez_DeltaV_fallback
        when: "true"
        status: info
        text:
          es: "[[DeltaV]] calculado mediante Gay-Lussac es exacto para gas ideal cuasiestatico a presion constante."
          en: "[[DeltaV]] calculated via Gay-Lussac is exact for quasi-static ideal gas at constant pressure."
      - id: validez_DeltaV_unidades
        when: "true"
        status: info
        text:
          es: "Asegurar que [[DeltaV]] este en m³ para que el producto [[p]] * [[DeltaV]] de el trabajo en Joules."
          en: "Ensure [[DeltaV]] is in m³ so that the product [[p]] * [[DeltaV]] gives work in Joules."
    graph_rules:
      - id: grafico_DeltaV_base
        when: "true"
        status: info
        text:
          es: "[[DeltaV]] es la base del rectangulo cuya area representa [[W]] en el diagrama pV isobarico."
          en: "[[DeltaV]] is the base of the rectangle whose area represents [[W]] in the isobaric pV diagram."
      - id: grafico_DeltaV_fallback
        when: "true"
        status: info
        text:
          es: "En el diagrama pV, [[DeltaV]] corresponde a la longitud horizontal de la linea isobarica."
          en: "In the pV diagram, [[DeltaV]] corresponds to the horizontal length of the isobaric line."
    likely_errors:
      - id: error_DeltaV_unidades
        when: "abs(result) > 1"
        status: warning
        text:
          es: "[[DeltaV]] mayor de 1 m³ puede indicar que se olvido convertir de litros a metros cubicos. Recordar que 1 L = 0.001 m³."
          en: "[[DeltaV]] greater than 1 m³ may indicate forgetting to convert from litres to cubic metres. Remember 1 L = 0.001 m³."
      - id: error_DeltaV_fallback
        when: "true"
        status: info
        text:
          es: "Verificar que [[DeltaV]] = [[V2]] - [[V1]] este expresado en metros cubicos antes de multiplicar por [[p]]."
          en: "Verify that [[DeltaV]] = [[V2]] - [[V1]] is expressed in cubic metres before multiplying by [[p]]."
    next_step_rules:
      - id: siguiente_DeltaV_W
        when: "true"
        status: info
        text:
          es: "Con [[DeltaV]] obtenido, calcular [[W]] = [[p]] * [[DeltaV]] para cuantificar el trabajo del proceso isobarico."
          en: "With [[DeltaV]] obtained, calculate [[W]] = [[p]] * [[DeltaV]] to quantify the work of the isobaric process."
      - id: siguiente_DeltaV_fallback
        when: "true"
        status: info
        text:
          es: "Usar [[DeltaV]] para verificar la coherencia con la ley de Gay-Lussac y continuar con el balance energetico."
          en: "Use [[DeltaV]] to verify consistency with Gay-Lussac's law and continue with the energy balance."

  DeltaT:
    magnitude_type: DeltaT
    semantic_role:
      es: Variacion de temperatura del gas en el proceso isobarico
      en: Temperature change of the gas in the isobaric process
    summary_rules:
      - id: resumen_DeltaT_positivo
        when: "result > 0"
        status: info
        text:
          es: "[[DeltaT]] positivo indica calentamiento isobarico; el gas absorbe calor del entorno."
          en: "Positive [[DeltaT]] indicates isobaric heating; the gas absorbs heat from surroundings."
      - id: resumen_DeltaT_negativo
        when: "result < 0"
        status: info
        text:
          es: "[[DeltaT]] negativo indica enfriamiento isobarico; el gas cede calor al entorno."
          en: "Negative [[DeltaT]] indicates isobaric cooling; the gas releases heat to surroundings."
      - id: resumen_DeltaT_fallback
        when: "true"
        status: info
        text:
          es: "[[DeltaT]] = [[T2]] - [[T1]] es la variacion termica que determina [[DeltaU]] en gas ideal."
          en: "[[DeltaT]] = [[T2]] - [[T1]] is the thermal change that determines [[DeltaU]] in ideal gas."
    physical_reading_rules:
      - id: lectura_DeltaT_expansion
        when: "result > 0"
        status: info
        text:
          es: "El gas se calento; la agitacion molecular aumento y tanto [[V]] como [[T]] crecieron a presion constante."
          en: "The gas heated up; molecular agitation increased and both volume and temperature grew at constant pressure."
      - id: lectura_DeltaT_fallback
        when: "true"
        status: info
        text:
          es: "En proceso isobarico [[DeltaT]] es directamente proporcional a [[DeltaV]] a traves de la ley de Gay-Lussac."
          en: "In isobaric process [[DeltaT]] is directly proportional to [[DeltaV]] through Gay-Lussac's law."
    coherence_rules:
      - id: coherencia_DeltaT_signo
        when: "result > 0 and Q > 0"
        status: success
        text:
          es: "[[DeltaT]] positivo coherente con [[Q]] positivo; calentamiento isobarico bien identificado."
          en: "Positive [[DeltaT]] consistent with positive [[Q]]; isobaric heating correctly identified."
      - id: coherencia_DeltaT_fallback
        when: "true"
        status: info
        text:
          es: "Verificar que el signo de [[DeltaT]] sea coherente con el signo de [[Q]] y [[DeltaV]] en el proceso isobarico."
          en: "Verify that the sign of [[DeltaT]] is consistent with the sign of [[Q]] and [[DeltaV]] in the isobaric process."
    model_validity_rules:
      - id: validez_DeltaT_grande
        when: "abs(result) > 1000"
        status: warning
        text:
          es: "[[DeltaT]] muy grande; verificar que el gas no alcance condiciones de disociacion o cambio de fase."
          en: "Very large [[DeltaT]]; verify the gas does not reach dissociation conditions or phase change."
      - id: validez_DeltaT_fallback
        when: "true"
        status: info
        text:
          es: "Modelo valido para [[DeltaT]] moderados donde gamma y Cv permanecen aproximadamente constantes."
          en: "Model valid for moderate [[DeltaT]] where gamma and Cv remain approximately constant."
    graph_rules:
      - id: grafico_DeltaT_isotermas
        when: "true"
        status: info
        text:
          es: "[[DeltaT]] refleja cuantas isotermas se cruzan durante el proceso isobarico en el diagrama pV."
          en: "[[DeltaT]] reflects how many isotherms are crossed during the isobaric process in the pV diagram."
      - id: grafico_DeltaT_fallback
        when: "true"
        status: info
        text:
          es: "La separacion entre la isoterma inicial y la final en el diagrama pV es proporcional a [[DeltaT]]."
          en: "The separation between initial and final isotherms in the pV diagram is proportional to [[DeltaT]]."
    likely_errors:
      - id: error_DeltaT_celsius
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir [[DeltaT]] calculado en Celsius con el calculado en kelvin. Para diferencias de temperatura ambos coinciden, pero recordar que [[T1]] y [[T2]] deben estar en kelvin para la ley de Gay-Lussac."
          en: "Frequent mistake: confuse [[DeltaT]] calculated in Celsius with kelvin. For temperature differences both coincide, but remember [[T1]] and [[T2]] must be in kelvin for Gay-Lussac's law."
      - id: error_DeltaT_fallback
        when: "true"
        status: info
        text:
          es: "Verificar [[DeltaT]] = [[T2]] - [[T1]] con ambas temperaturas en kelvin para evitar errores en [[DeltaU]]."
          en: "Verify [[DeltaT]] = [[T2]] - [[T1]] with both temperatures in kelvin to avoid errors in [[DeltaU]]."
    next_step_rules:
      - id: siguiente_DeltaT_DeltaU
        when: "true"
        status: info
        text:
          es: "Con [[DeltaT]] obtenido, calcular [[DeltaU]] = n * Cv * [[DeltaT]] para cuantificar la variacion de energia interna."
          en: "With [[DeltaT]] obtained, calculate [[DeltaU]] = n * Cv * [[DeltaT]] to quantify the change in internal energy."
      - id: siguiente_DeltaT_fallback
        when: "true"
        status: info
        text:
          es: "Usar [[DeltaT]] para calcular [[Q]] = n * Cp * [[DeltaT]] y verificar el balance energetico completo."
          en: "Use [[DeltaT]] to calculate [[Q]] = n * Cp * [[DeltaT]] and verify the complete energy balance."

  Q:
    magnitude_type: Q
    semantic_role:
      es: Calor intercambiado en el proceso isobarico
      en: Heat exchanged in the isobaric process
    summary_rules:
      - id: resumen_Q_positivo
        when: "result > 0"
        status: info
        text:
          es: "[[Q]] positivo indica que el gas absorbe calor del entorno durante el proceso isobarico."
          en: "Positive [[Q]] indicates the gas absorbs heat from surroundings during the isobaric process."
      - id: resumen_Q_negativo
        when: "result < 0"
        status: info
        text:
          es: "[[Q]] negativo indica que el gas cede calor al entorno durante el proceso isobarico."
          en: "Negative [[Q]] indicates the gas releases heat to surroundings during the isobaric process."
      - id: resumen_Q_fallback
        when: "true"
        status: info
        text:
          es: "[[Q]] = [[DeltaU]] + [[W]]; en proceso isobarico el calor cubre tanto el aumento de energia interna como el trabajo de expansion."
          en: "[[Q]] = [[DeltaU]] + [[W]]; in isobaric process heat covers both the increase in internal energy and the expansion work."
    physical_reading_rules:
      - id: lectura_Q_mayor_W
        when: "result > W and W > 0"
        status: info
        text:
          es: "[[Q]] mayor que [[W]] es consistente con el proceso isobarico: parte del calor se usa para trabajo y el resto aumenta la energia interna."
          en: "[[Q]] greater than [[W]] is consistent with isobaric process: part of the heat goes to work and the rest increases internal energy."
      - id: lectura_Q_fallback
        when: "true"
        status: info
        text:
          es: "En proceso isobarico [[Q]] es siempre mayor en valor absoluto que [[W]] para gas ideal monoatomico o diatomico."
          en: "In isobaric process [[Q]] is always greater in absolute value than [[W]] for monatomic or diatomic ideal gas."
    coherence_rules:
      - id: coherencia_Q_balance
        when: "abs(result - DeltaU - W) < 0.01 * abs(result) + 0.01"
        status: success
        text:
          es: "[[Q]] = [[DeltaU]] + [[W]] verificado; el primer principio se cumple correctamente."
          en: "[[Q]] = [[DeltaU]] + [[W]] verified; the first law is correctly satisfied."
      - id: coherencia_Q_fallback
        when: "true"
        status: info
        text:
          es: "Verificar que [[Q]] - [[W]] = [[DeltaU]] para confirmar el balance del primer principio en el proceso isobarico."
          en: "Verify that [[Q]] - [[W]] = [[DeltaU]] to confirm the first-law balance in the isobaric process."
    model_validity_rules:
      - id: validez_Q_cambio_fase
        when: "true"
        status: warning
        text:
          es: "Si el proceso atraviesa un cambio de fase, [[Q]] incluye calor latente y la relacion Q = n*Cp*DeltaT deja de ser valida."
          en: "If the process crosses a phase change, [[Q]] includes latent heat and the relation Q = n*Cp*DeltaT ceases to be valid."
      - id: validez_Q_fallback
        when: "true"
        status: info
        text:
          es: "Modelo valido para gas ideal sin cambio de fase; [[Q]] = n * Cp * [[DeltaT]] con Cp constante."
          en: "Model valid for ideal gas without phase change; [[Q]] = n * Cp * [[DeltaT]] with constant Cp."
    graph_rules:
      - id: grafico_Q_no_visible
        when: "true"
        status: info
        text:
          es: "[[Q]] no es directamente visible en el diagrama pV; se obtiene como suma del area rectangular [[W]] y la variacion de energia interna [[DeltaU]]."
          en: "[[Q]] is not directly visible in the pV diagram; it is obtained as the sum of the rectangular area [[W]] and the internal energy change [[DeltaU]]."
      - id: grafico_Q_fallback
        when: "true"
        status: info
        text:
          es: "En el diagrama pV isobarico, [[Q]] = [[W]] + [[DeltaU]] donde [[W]] es el area del rectangulo y [[DeltaU]] es el cambio de energia interna."
          en: "In the isobaric pV diagram, [[Q]] = [[W]] + [[DeltaU]] where [[W]] is the rectangular area and [[DeltaU]] is the internal energy change."
    likely_errors:
      - id: error_Q_igual_DeltaU
        when: "abs(result - DeltaU) < 0.01 * abs(DeltaU)"
        status: warning
        text:
          es: "[[Q]] casi igual a [[DeltaU]] puede indicar que se olvido sumar [[W]]. En proceso isobarico siempre [[Q]] = [[DeltaU]] + [[W]]."
          en: "[[Q]] almost equal to [[DeltaU]] may indicate forgetting to add [[W]]. In isobaric process always [[Q]] = [[DeltaU]] + [[W]]."
      - id: error_Q_confusion_isotermico
        when: "true"
        status: warning
        text:
          es: "Error comun: confundir el proceso isobarico con el isotermico y creer que [[Q]] = [[W]] (lo que solo es cierto para gas ideal isotermico). En proceso isobarico [[Q]] > [[W]]."
          en: "Common mistake: confuse isobaric with isothermal process and wrongly believe [[Q]] = [[W]] (which is only true for isothermal ideal gas). In isobaric process [[Q]] > [[W]]."
      - id: error_Q_fallback
        when: "true"
        status: info
        text:
          es: "Recordar que en proceso isobarico [[Q]] = n * Cp * [[DeltaT]] con Cp > Cv para gas ideal."
          en: "Remember that in isobaric process [[Q]] = n * Cp * [[DeltaT]] with Cp > Cv for ideal gas."
    next_step_rules:
      - id: siguiente_Q_balance
        when: "true"
        status: info
        text:
          es: "Con [[Q]] obtenido, verificar el balance energetico [[DeltaU]] + [[W]] = [[Q]] para confirmar la consistencia del calculo."
          en: "With [[Q]] obtained, verify the energy balance [[DeltaU]] + [[W]] = [[Q]] to confirm calculation consistency."
      - id: siguiente_Q_fallback
        when: "true"
        status: info
        text:
          es: "Usar [[Q]] junto con [[W]] para calcular [[DeltaU]] y completar el caracterizacion energetica completa del proceso isobarico."
          en: "Use [[Q]] together with [[W]] to calculate [[DeltaU]] and complete the full energy characterisation of the isobaric process."

cross_checks:
  - id: balance_energetico_isobarico
    description:
      es: "Verifica que DeltaU + W = Q en proceso isobarico."
      en: "Verifies that DeltaU + W = Q in isobaric process."
    condition: "abs(DeltaU + W - Q) < 0.01 * max(abs(Q), abs(W)) + 0.01"
    status_if_fail: warning
    message:
      es: "El balance energetico isobarico no se cumple exactamente; verificar coherencia entre DeltaU, W y Q."
      en: "The isobaric energy balance does not hold exactly; check consistency between DeltaU, W and Q."
  - id: proporcion_gay_lussac
    description:
      es: "Verifica que V1/T1 = V2/T2 para confirmar proceso isobarico."
      en: "Verifies that V1/T1 = V2/T2 to confirm isobaric process."
    condition: "abs(V1 / T1 - V2 / T2) < 0.01 * abs(V1 / T1)"
    status_if_fail: warning
    message:
      es: "La proporcion V/T no es constante; el proceso puede no ser isobarico o hay un error de calculo."
      en: "The V/T ratio is not constant; the process may not be isobaric or there is a calculation error."

error_patterns:
  - id: pattern_isotermico
    detect_when: "abs(T2 - T1) < 0.1 and abs(V2 - V1) > 0.01 * V1"
    message:
      es: "Temperatura casi constante con cambio de volumen apreciable a presion constante es inconsistente con gas ideal; verificar si hay cambio de fase."
      en: "Nearly constant temperature with appreciable volume change at constant pressure is inconsistent with ideal gas; check for phase change."
  - id: pattern_presion_no_constante
    detect_when: "abs(p * V1 / T1 - p * V2 / T2) > 0.05 * abs(p * V1 / T1)"
    message:
      es: "La relacion pV/T no es constante; la presion puede haber cambiado durante el proceso y el proceso no seria estrictamente isobarico."
      en: "The pV/T ratio is not constant; pressure may have changed during the process and it would not be strictly isobaric."

graph_binding:
  enabled: true
  channels: [pV_isobarico]
  primary_channel: pV_isobarico
  description:
    es: "La curva isobarica en el diagrama pV es una linea horizontal; el area del rectangulo bajo esa linea es el trabajo W."
    en: "The isobaric curve in the pV diagram is a horizontal line; the rectangular area under that line is the work W."

mini_graph:
  enabled: true
  preferred_type: Coord
  description:
    es: "Diagrama pV mostrando la linea isobarica horizontal entre el estado inicial (V1, p) y el final (V2, p)."
    en: "pV diagram showing the horizontal isobaric line between initial state (V1, p) and final state (V2, p)."

output_contract:
  format: structured_text
  include_emojis: true
  max_lines_per_section: 5
  truncate_long_values: true
  decimal_places: 2
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
`;export{e as default};
