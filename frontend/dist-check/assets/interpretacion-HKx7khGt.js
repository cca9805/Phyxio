const e=`version: "5.0"
id: interp_isocorico
leaf_id: isocorico

nombre:
  es: Interpretación del proceso isocórico
  en: Interpretation of the isochoric process

scope:
  area: fisica-clasica
  bloque: termodinamica
  subbloque: gases-y-modelos
  parent_id: procesos-termodinamicos
  ruta_relativa: fisica-clasica/termodinamica/gases-y-modelos/procesos-termodinamicos/isocorico

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretación isocórica
    en: Isochoric interpretation
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
    priority: [summary, likely_errors, next_step]

dependencies:
  formulas:
    - trabajo_isocorico
    - energia_interna_isocorica
    - calor_isocorico
    - variacion_temperatura_isocorica
  magnitudes:
    - p
    - V
    - T
    - T1
    - T2
    - DeltaT
    - Q
    - W
    - DeltaU
    - n
    - Cv

global_context:
  physical_domain:
    es: Proceso termodinámico de un gas en recipiente rígido con volumen estrictamente constante. El trabajo mecánico es nulo y toda la energía intercambiada es calorífica.
    en: Thermodynamic process of a gas in a rigid container with strictly constant volume. Mechanical work is zero and all exchanged energy is thermal.
  axis_convention:
    es: "Diagrama pT: eje horizontal temperatura (K), eje vertical presión (Pa). El proceso isocórico aparece como segmento recto con pendiente positiva que pasa por el origen."
    en: "pT diagram: horizontal axis temperature (K), vertical axis pressure (Pa). The isochoric process appears as a straight segment with positive slope passing through the origin."
  standard_assumptions:
    - gas ideal o comportamiento próximo al ideal
    - proceso quasi-estático
    - Cv constante en el rango de temperaturas
    - recipiente perfectamente rígido
  standard_warnings:
    - "Verificar siempre que las temperaturas están en kelvins, no en grados Celsius."
    - "En el proceso isocórico, W es siempre cero. Si se obtiene un W distinto de cero, el proceso no es isocórico."
    - "Cv y Cp son distintos; usar siempre Cv para el proceso isocórico."

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
      es: Lectura física
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
      es: Lectura del gráfico
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

  W:
    magnitude_type: constante_nula
    semantic_role:
      es: El trabajo mecánico en el proceso isocórico es siempre nulo porque el volumen no cambia.
      en: Mechanical work in the isochoric process is always zero because volume does not change.
    summary_rules:
      - id: W_summary_zero
        when: "W == 0"
        status: ok
        text:
          es: "[[W]] indica que no se realiza trabajo mecánico. El volumen constante impide cualquier expansión o compresión de la frontera del sistema."
          en: "[[W]] indicates no mechanical work is done. Constant volume prevents any expansion or compression of the system boundary."
      - id: W_summary_default
        when: "true"
        status: ok
        text:
          es: "[[W]] resume el balance mecánico del proceso isocórico: ningún trabajo intercambiado con el entorno."
          en: "[[W]] summarises the mechanical balance of the isochoric process: no work exchanged with the surroundings."
    physical_reading_rules:
      - id: W_reading_zero
        when: "W == 0"
        status: ok
        text:
          es: "El valor nulo de [[W]] confirma que toda la energía del proceso fluye exclusivamente como calor. El gas no mueve ninguna frontera mecánica."
          en: "The zero value of [[W]] confirms that all process energy flows exclusively as heat. The gas moves no mechanical boundary."
      - id: W_reading_default
        when: "true"
        status: ok
        text:
          es: "[[W]] nulo es la consecuencia directa del volumen constante. La energía interna aumenta o disminuye solo por intercambio de calor."
          en: "Zero [[W]] is the direct consequence of constant volume. Internal energy increases or decreases only through heat exchange."
    coherence_rules:
      - id: W_coherence_zero
        when: "W == 0"
        status: ok
        text:
          es: "[[W]] es exactamente nulo, coherente con la condición isocórica. El balance del primer principio se simplifica a [[DeltaU]] igual a [[Q]]."
          en: "[[W]] is exactly zero, consistent with the isochoric condition. The first law balance simplifies to [[DeltaU]] equal to [[Q]]."
      - id: W_coherence_default
        when: "true"
        status: ok
        text:
          es: "La condición de coherencia principal del proceso isocórico es que [[W]] sea nulo."
          en: "The main coherence condition of the isochoric process is that [[W]] is zero."
    model_validity_rules:
      - id: W_validity_default
        when: "true"
        status: ok
        text:
          es: "[[W]] nulo es válido siempre que el recipiente sea perfectamente rígido. Si hay deformación del recipiente, existe un trabajo pequeño pero no nulo que el modelo isocórico ideal no contempla."
          en: "Zero [[W]] is valid as long as the container is perfectly rigid. If the container deforms, there is a small but non-zero work that the ideal isochoric model does not account for."
    graph_rules:
      - id: W_graph_default
        when: "true"
        status: ok
        text:
          es: "En el diagrama pV, el proceso isocórico es una línea vertical. El área bajo esa línea es nula, representando visualmente que [[W]] es cero."
          en: "In the pV diagram, the isochoric process is a vertical line. The area under that line is zero, visually representing that [[W]] is zero."
    likely_errors:
      - id: W_error_isobaric
        when: "true"
        status: warning
        text:
          es: "Error probable: usar la fórmula del trabajo isobárico (presión por cambio de volumen) en un proceso isocórico. Dado que el volumen no cambia, el resultado debería ser nulo, no el producto de presión por variación de volumen."
          en: "Likely error: applying the isobaric work formula (pressure times volume change) to an isochoric process. Since volume does not change, the result should be zero, not the product of pressure and volume change."
      - id: W_error_default
        when: "true"
        status: ok
        text:
          es: "Verificar que se reconoce el proceso como isocórico antes de asignar [[W]] nulo."
          en: "Verify that the process is recognised as isochoric before assigning zero [[W]]."
    next_step_rules:
      - id: W_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[W]] nulo, el siguiente paso es aplicar [[DeltaU]] igual a [[Q]] para cuantificar el calor intercambiado."
          en: "With zero [[W]], the next step is to apply [[DeltaU]] equal to [[Q]] to quantify the heat exchanged."

  DeltaU:
    magnitude_type: continua_con_signo
    semantic_role:
      es: Cuantifica el cambio de estado energético interno del gas durante el proceso isocórico. Coincide con el calor absorbido.
      en: Quantifies the change in the internal energetic state of the gas during the isochoric process. It equals the heat absorbed.
    summary_rules:
      - id: DeltaU_summary_positive
        when: "DeltaU > 0"
        status: ok
        text:
          es: "[[DeltaU]] positivo indica que el gas ha absorbido calor y su temperatura ha aumentado. La energía interna del gas ha aumentado, lo que resume el proceso de calentamiento isocórico."
          en: "Positive [[DeltaU]] indicates the gas has absorbed heat and its temperature has increased. The internal energy of the gas has increased, summarising the isochoric heating process."
      - id: DeltaU_summary_negative
        when: "DeltaU < 0"
        status: ok
        text:
          es: "[[DeltaU]] negativo indica que el gas ha cedido calor al entorno y su temperatura ha disminuido. La energía interna del sistema ha disminuido, describiendo un proceso de enfriamiento isocórico."
          en: "Negative [[DeltaU]] indicates the gas has released heat to the surroundings and its temperature has decreased. The internal energy has decreased, describing an isochoric cooling process."
      - id: DeltaU_summary_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaU]] resume el balance energético completo del proceso isocórico y depende de [[n]], [[Cv]] y [[DeltaT]]."
          en: "[[DeltaU]] summarises the complete energy balance of the isochoric process and depends on [[n]], [[Cv]] and [[DeltaT]]."
    physical_reading_rules:
      - id: DeltaU_reading_positive
        when: "DeltaU > 0"
        status: ok
        text:
          es: "El aumento de [[DeltaU]] significa que el gas ha ganado energía cinética molecular. A volumen constante, esto se traduce directamente en un aumento de presión proporcional al aumento de temperatura."
          en: "The increase in [[DeltaU]] means the gas has gained molecular kinetic energy. At constant volume, this translates directly into a pressure increase proportional to the temperature increase."
      - id: DeltaU_reading_negative
        when: "DeltaU < 0"
        status: ok
        text:
          es: "La disminución de [[DeltaU]] refleja que las moléculas del gas han perdido energía cinética. La presión disminuye proporcionalmente a la temperatura, manteniendo el volumen constante."
          en: "The decrease in [[DeltaU]] reflects that gas molecules have lost kinetic energy. Pressure decreases proportionally to temperature while volume remains constant."
      - id: DeltaU_reading_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaU]] representa la variación de energía interna del gas, que depende linealmente de [[DeltaT]] para gas ideal."
          en: "[[DeltaU]] represents the change in internal energy of the gas, which depends linearly on [[DeltaT]] for an ideal gas."
    coherence_rules:
      - id: DeltaU_coherence_equal_Q
        when: "DeltaU > 0"
        status: ok
        text:
          es: "[[DeltaU]] positivo es coherente con [[Q]] positivo (calor absorbido). En el proceso isocórico ambas magnitudes son idénticas."
          en: "Positive [[DeltaU]] is coherent with positive [[Q]] (heat absorbed). In the isochoric process both magnitudes are identical."
      - id: DeltaU_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[DeltaU]] coincide con [[Q]] calculado independientemente. Si difieren, hay un error en los datos o en la aplicación del modelo."
          en: "Verify that [[DeltaU]] matches [[Q]] calculated independently. If they differ, there is an error in the data or in applying the model."
    model_validity_rules:
      - id: DeltaU_validity_large
        when: "DeltaU > 100000"
        status: warning
        text:
          es: "[[DeltaU]] supera 100 kJ. Verificar que el número de moles y el rango de temperatura son físicamente razonables para el sistema estudiado."
          en: "[[DeltaU]] exceeds 100 kJ. Verify that the number of moles and temperature range are physically reasonable for the system under study."
      - id: DeltaU_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de [[DeltaU]] lineal en [[DeltaT]] es válido mientras [[Cv]] sea constante. Para grandes variaciones de temperatura en gases poliatómicos, [[Cv]] puede variar ligeramente."
          en: "The linear [[DeltaU]] in [[DeltaT]] model is valid while [[Cv]] is constant. For large temperature changes in polyatomic gases, [[Cv]] may vary slightly."
    graph_rules:
      - id: DeltaU_graph_positive
        when: "DeltaU > 0"
        status: ok
        text:
          es: "En el diagrama pT, [[DeltaU]] positivo indica que el punto de estado se ha desplazado hacia la derecha y hacia arriba a lo largo de la recta isocórica (misma pendiente que pasa por el origen)."
          en: "In the pT diagram, positive [[DeltaU]] indicates the state point has moved right and up along the isochoric line (same slope through the origin)."
      - id: DeltaU_graph_default
        when: "true"
        status: ok
        text:
          es: "El gráfico pT muestra la recta isocórica. El desplazamiento a lo largo de esta recta es proporcional a [[DeltaU]] y a [[DeltaT]]."
          en: "The pT graph shows the isochoric line. The displacement along this line is proportional to [[DeltaU]] and [[DeltaT]]."
    likely_errors:
      - id: DeltaU_error_Cp
        when: "true"
        status: warning
        text:
          es: "Error probable: usar [[Cv]] igual al calor específico a presión constante (Cp) en lugar del calor específico a volumen constante. Cp es siempre mayor que Cv, por lo que el resultado de [[DeltaU]] estaría sobredimensionado."
          en: "Likely error: using [[Cv]] equal to the heat capacity at constant pressure (Cp) instead of the heat capacity at constant volume. Cp is always greater than Cv, so the [[DeltaU]] result would be overestimated."
      - id: DeltaU_error_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[DeltaT]] se ha calculado como T2 menos T1 con ambas temperaturas en kelvins."
          en: "Verify that [[DeltaT]] has been calculated as T2 minus T1 with both temperatures in kelvins."
    next_step_rules:
      - id: DeltaU_next_positive
        when: "DeltaU > 0"
        status: ok
        text:
          es: "Con [[DeltaU]] positivo, el gas está más caliente. El siguiente paso es verificar la nueva presión del gas usando la ley de Gay-Lussac a volumen constante."
          en: "With positive [[DeltaU]], the gas is hotter. The next step is to verify the new gas pressure using Gay-Lussac's law at constant volume."
      - id: DeltaU_next_default
        when: "true"
        status: ok
        text:
          es: "Comparar [[DeltaU]] con procesos isobáricos o isotérmicos equivalentes para apreciar cuánto calor se necesita en cada caso."
          en: "Compare [[DeltaU]] with equivalent isobaric or isothermal processes to appreciate how much heat is needed in each case."

  n:
    magnitude_type: parametro_positivo
    semantic_role:
      es: Número de moles del gas. Escala linealmente [[DeltaU]] y [[Q]].
      en: Number of moles of gas. Linearly scales [[DeltaU]] and [[Q]].
    summary_rules:
      - id: n_summary_default
        when: "true"
        status: ok
        text:
          es: "[[n]] indica la cantidad de sustancia del gas. Un mayor número de moles significa mayor energía interna almacenada para el mismo [[DeltaT]], lo que resume la proporcionalidad directa entre masa del sistema y calor requerido."
          en: "[[n]] indicates the amount of gas substance. A larger number of moles means more stored internal energy for the same [[DeltaT]], summarising the direct proportionality between system mass and required heat."
      - id: n_summary_fallback
        when: "true"
        status: ok
        text:
          es: "[[n]] depende de la masa del gas y de su masa molar. Aumentar [[n]] escala proporcionalmente el calor necesario."
          en: "[[n]] depends on the gas mass and its molar mass. Increasing [[n]] scales the required heat proportionally."
    physical_reading_rules:
      - id: n_reading_default
        when: "true"
        status: ok
        text:
          es: "[[n]] moles de gas contienen más moléculas que reciben o ceden energía colectivamente. A mayor [[n]], mayor es el calor total para conseguir el mismo incremento de temperatura."
          en: "[[n]] moles of gas contain more molecules that collectively receive or release energy. Larger [[n]] means more total heat is needed to achieve the same temperature increment."
      - id: n_reading_fallback
        when: "true"
        status: ok
        text:
          es: "[[n]] actúa como factor de escala en el proceso isocórico."
          en: "[[n]] acts as a scaling factor in the isochoric process."
    coherence_rules:
      - id: n_coherence_positive
        when: "n > 0"
        status: ok
        text:
          es: "[[n]] positivo es coherente con un sistema físico real. Verificar que se ha obtenido de la masa y la masa molar del gas, no de otro proceso."
          en: "Positive [[n]] is coherent with a real physical system. Verify it was obtained from mass and molar mass of the gas, not from another process."
      - id: n_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[n]] debe ser positivo. Si resulta negativo o nulo, hay un error en los datos de entrada."
          en: "[[n]] must be positive. If it turns out negative or zero, there is an error in the input data."
    model_validity_rules:
      - id: n_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo isocórico es válido para cualquier [[n]] positivo. Si [[n]] es muy grande (centenares de moles), verificar que el recipiente rígido puede contener el gas sin deformarse."
          en: "The isochoric model is valid for any positive [[n]]. If [[n]] is very large (hundreds of moles), verify that the rigid container can hold the gas without deforming."
      - id: n_validity_fallback
        when: "true"
        status: ok
        text:
          es: "[[n]] es un parámetro fijo del sistema; no cambia durante el proceso isocórico."
          en: "[[n]] is a fixed parameter of the system; it does not change during the isochoric process."
    graph_rules:
      - id: n_graph_default
        when: "true"
        status: ok
        text:
          es: "[[n]] no aparece directamente en los ejes del diagrama pT, pero determina la magnitud de [[DeltaU]] para un [[DeltaT]] dado."
          en: "[[n]] does not appear directly on the axes of the pT diagram, but determines the magnitude of [[DeltaU]] for a given [[DeltaT]]."
      - id: n_graph_fallback
        when: "true"
        status: ok
        text:
          es: "El número de moles escala el calor almacenado por el sistema representado en el gráfico."
          en: "The number of moles scales the heat stored by the system shown in the graph."
    likely_errors:
      - id: n_error_mass
        when: "true"
        status: warning
        text:
          es: "Error probable: confundir [[n]] (moles) con la masa en gramos. Para obtener [[n]], dividir la masa del gas por su masa molar. Por ejemplo, 28 g de nitrógeno diatómico equivalen a 1 mol (masa molar de 28 g/mol)."
          en: "Likely error: confusing [[n]] (moles) with mass in grams. To obtain [[n]], divide the gas mass by its molar mass. For example, 28 g of diatomic nitrogen equals 1 mol (molar mass 28 g/mol)."
      - id: n_error_default
        when: "true"
        status: ok
        text:
          es: "Verificar las unidades de [[n]]: siempre en moles, nunca en gramos ni en moléculas."
          en: "Verify the units of [[n]]: always in moles, never in grams or molecules."
    next_step_rules:
      - id: n_next_default
        when: "true"
        status: ok
        text:
          es: "Conocido [[n]], calcular [[DeltaU]] con la fórmula fundamental del proceso isocórico multiplicando [[n]] por [[Cv]] y por [[DeltaT]]."
          en: "With [[n]] known, compute [[DeltaU]] using the fundamental isochoric formula, multiplying [[n]] by [[Cv]] and [[DeltaT]]."
      - id: n_next_fallback
        when: "true"
        status: ok
        text:
          es: "El siguiente paso es identificar el tipo de gas para determinar el valor correcto de [[Cv]]."
          en: "The next step is to identify the type of gas to determine the correct value of [[Cv]]."

  Cv:
    magnitude_type: parametro_positivo
    semantic_role:
      es: Calor específico molar a volumen constante. Caracteriza la capacidad calorífica del gas según sus grados de libertad.
      en: Molar heat capacity at constant volume. Characterises the calorific capacity of the gas according to its degrees of freedom.
    summary_rules:
      - id: Cv_summary_monatomic
        when: "Cv < 14"
        status: ok
        text:
          es: "[[Cv]] aproximadamente 12.5 J por mol y kelvin indica gas monoatómico (helio, argón). Este valor resume la energía cinética translacional de tres grados de libertad."
          en: "[[Cv]] approximately 12.5 J per mol and kelvin indicates a monatomic gas (helium, argon). This value summarises the translational kinetic energy of three degrees of freedom."
      - id: Cv_summary_diatomic
        when: "Cv >= 14 && Cv < 22"
        status: ok
        text:
          es: "[[Cv]] aproximadamente 20.8 J por mol y kelvin indica gas diatómico (nitrógeno, oxígeno). Incluye tres grados translacionales y dos rotacionales, lo que describe su mayor capacidad de almacenar calor respecto al gas monoatómico."
          en: "[[Cv]] approximately 20.8 J per mol and kelvin indicates a diatomic gas (nitrogen, oxygen). It includes three translational and two rotational degrees, describing its greater heat storage capacity compared to monatomic gas."
      - id: Cv_summary_default
        when: "true"
        status: ok
        text:
          es: "[[Cv]] resume la capacidad de almacenamiento de energía interna del gas por mol y por kelvin, dependiendo del número de grados de libertad moleculares."
          en: "[[Cv]] summarises the gas internal energy storage capacity per mole and per kelvin, depending on the number of molecular degrees of freedom."
    physical_reading_rules:
      - id: Cv_reading_default
        when: "true"
        status: ok
        text:
          es: "[[Cv]] determina cuánto calor absorbe el gas por mol y por grado de temperatura. Un gas con mayor [[Cv]] requiere más calor para el mismo incremento de temperatura al mismo [[n]]."
          en: "[[Cv]] determines how much heat the gas absorbs per mole and per degree of temperature. A gas with higher [[Cv]] requires more heat for the same temperature increment at the same [[n]]."
      - id: Cv_reading_fallback
        when: "true"
        status: ok
        text:
          es: "El valor de [[Cv]] permite identificar el tipo de gas en un problema isocórico si se conoce [[DeltaU]], [[n]] y [[DeltaT]]."
          en: "The value of [[Cv]] allows identifying the type of gas in an isochoric problem if [[DeltaU]], [[n]] and [[DeltaT]] are known."
    coherence_rules:
      - id: Cv_coherence_positive
        when: "Cv > 0"
        status: ok
        text:
          es: "[[Cv]] positivo es coherente. El calor específico siempre es positivo para cualquier sustancia real."
          en: "Positive [[Cv]] is coherent. Heat capacity is always positive for any real substance."
      - id: Cv_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que el valor de [[Cv]] corresponde al tipo de gas del problema (mono, di o triatómico)."
          en: "Verify that the [[Cv]] value corresponds to the type of gas in the problem (mono, di or triatomic)."
    model_validity_rules:
      - id: Cv_validity_default
        when: "true"
        status: ok
        text:
          es: "[[Cv]] constante es válido para temperaturas moderadas. A temperaturas muy altas los modos vibracionales se activan y [[Cv]] aumenta, haciendo que el modelo simple sea una subestimación del calor real."
          en: "Constant [[Cv]] is valid at moderate temperatures. At very high temperatures vibrational modes activate and [[Cv]] increases, making the simple model an underestimate of the real heat."
      - id: Cv_validity_fallback
        when: "true"
        status: ok
        text:
          es: "Para gases monoatómicos nobles, [[Cv]] es prácticamente constante en todo el rango de temperatura útil."
          en: "For noble monatomic gases, [[Cv]] is practically constant over the entire useful temperature range."
    graph_rules:
      - id: Cv_graph_default
        when: "true"
        status: ok
        text:
          es: "[[Cv]] no aparece explícitamente en los ejes del diagrama pT, pero determina el valor de [[DeltaU]] para un segmento de longitud [[DeltaT]] dado."
          en: "[[Cv]] does not appear explicitly on the pT diagram axes, but determines the [[DeltaU]] value for a segment of given length [[DeltaT]]."
      - id: Cv_graph_fallback
        when: "true"
        status: ok
        text:
          es: "Gases con mayor [[Cv]] almacenan más energía para el mismo tramo en el diagrama pT."
          en: "Gases with higher [[Cv]] store more energy for the same stretch in the pT diagram."
    likely_errors:
      - id: Cv_error_Cp
        when: "Cv > 25"
        status: warning
        text:
          es: "[[Cv]] superior a 25 J por mol y kelvin podría indicar que se está usando Cp en lugar de Cv. Para gas ideal diatómico, Cp es aproximadamente 29 J por mol y kelvin, mientras que Cv es aproximadamente 20.8."
          en: "[[Cv]] greater than 25 J per mol and kelvin might indicate that Cp is being used instead of Cv. For ideal diatomic gas, Cp is approximately 29 J per mol and kelvin, while Cv is approximately 20.8."
      - id: Cv_error_default
        when: "true"
        status: ok
        text:
          es: "Verificar que el valor de [[Cv]] usado es el correspondiente al proceso a volumen constante, no a presión constante."
          en: "Verify that the [[Cv]] value used corresponds to the constant-volume process, not the constant-pressure one."
    next_step_rules:
      - id: Cv_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[Cv]] identificado, calcular [[DeltaU]] multiplicando por [[n]] y [[DeltaT]]. Comparar con el proceso isobárico para ver la diferencia que produce usar Cp."
          en: "With [[Cv]] identified, compute [[DeltaU]] by multiplying by [[n]] and [[DeltaT]]. Compare with the isobaric process to see the difference that using Cp would produce."
      - id: Cv_next_fallback
        when: "true"
        status: ok
        text:
          es: "El tipo de gas determina [[Cv]]; identificar el gas antes de continuar."
          en: "The type of gas determines [[Cv]]; identify the gas before continuing."

  DeltaT:
    magnitude_type: continua_con_signo
    semantic_role:
      es: Variación de temperatura durante el proceso isocórico. Es el motor que activa el intercambio de calor.
      en: Temperature change during the isochoric process. It is the driver that activates heat exchange.
    summary_rules:
      - id: DeltaT_summary_positive
        when: "DeltaT > 0"
        status: ok
        text:
          es: "[[DeltaT]] positivo indica calentamiento del gas. La temperatura final es mayor que la inicial, lo que resume un proceso de absorción de calor a volumen constante."
          en: "Positive [[DeltaT]] indicates gas heating. The final temperature is greater than the initial, summarising a heat absorption process at constant volume."
      - id: DeltaT_summary_negative
        when: "DeltaT < 0"
        status: ok
        text:
          es: "[[DeltaT]] negativo indica enfriamiento del gas. La temperatura ha disminuido porque el gas ha cedido calor al entorno, lo que describe un proceso exotérmico isocórico."
          en: "Negative [[DeltaT]] indicates gas cooling. The temperature has decreased because the gas has released heat to the surroundings, describing an exothermic isochoric process."
      - id: DeltaT_summary_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaT]] resume la amplitud y el sentido del cambio térmico del proceso isocórico. Su signo determina si el proceso es de calentamiento o enfriamiento."
          en: "[[DeltaT]] summarises the amplitude and direction of the thermal change in the isochoric process. Its sign determines whether the process is heating or cooling."
    physical_reading_rules:
      - id: DeltaT_reading_positive
        when: "DeltaT > 0"
        status: ok
        text:
          es: "[[DeltaT]] positivo significa que las moléculas del gas han ganado energía cinética. A volumen fijo, esto implica que la presión ha aumentado en la misma proporción que la temperatura absoluta."
          en: "Positive [[DeltaT]] means gas molecules have gained kinetic energy. At fixed volume, this implies pressure has increased in the same proportion as the absolute temperature."
      - id: DeltaT_reading_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaT]] positivo implica [[DeltaU]] positivo y [[Q]] positivo. Todos los signos deben ser consistentes en el proceso isocórico."
          en: "Positive [[DeltaT]] implies positive [[DeltaU]] and positive [[Q]]. All signs must be consistent in the isochoric process."
    coherence_rules:
      - id: DeltaT_coherence_sign
        when: "DeltaT > 0"
        status: ok
        text:
          es: "[[DeltaT]] positivo es coherente con [[DeltaU]] positivo y [[Q]] positivo. Verificar que los tres tienen el mismo signo."
          en: "Positive [[DeltaT]] is coherent with positive [[DeltaU]] and positive [[Q]]. Verify that all three have the same sign."
      - id: DeltaT_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaT]] no debe ser nulo en un proceso isocórico real. Un resultado nulo indica ausencia de intercambio de calor."
          en: "[[DeltaT]] must not be zero in a real isochoric process. A zero result indicates no heat exchange."
    model_validity_rules:
      - id: DeltaT_validity_large
        when: "DeltaT > 500"
        status: warning
        text:
          es: "[[DeltaT]] superior a 500 K es una variación muy grande. Verificar que el gas permanece en fase gaseosa y que [[Cv]] no varía significativamente en ese rango."
          en: "[[DeltaT]] greater than 500 K is a very large change. Verify that the gas remains in the gas phase and that [[Cv]] does not vary significantly over that range."
      - id: DeltaT_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo lineal de [[DeltaU]] en [[DeltaT]] es válido mientras el gas permanezca ideal y no cambie de fase."
          en: "The linear model of [[DeltaU]] in [[DeltaT]] is valid as long as the gas remains ideal and does not change phase."
    graph_rules:
      - id: DeltaT_graph_default
        when: "true"
        status: ok
        text:
          es: "[[DeltaT]] corresponde a la longitud horizontal del segmento en el diagrama pT isocórico. Un [[DeltaT]] mayor produce un segmento más largo y, por tanto, una variación de presión mayor."
          en: "[[DeltaT]] corresponds to the horizontal length of the segment in the isochoric pT diagram. A larger [[DeltaT]] produces a longer segment and hence a larger pressure change."
      - id: DeltaT_graph_fallback
        when: "true"
        status: ok
        text:
          es: "Visualizar [[DeltaT]] como el desplazamiento horizontal entre los dos puntos de estado en el diagrama pT."
          en: "Visualise [[DeltaT]] as the horizontal displacement between the two state points in the pT diagram."
    likely_errors:
      - id: DeltaT_error_celsius
        when: "true"
        status: warning
        text:
          es: "Error probable: calcular [[DeltaT]] usando temperaturas en grados Celsius. Aunque la diferencia en kelvins es igual a la diferencia en Celsius, en la ley de Gay-Lussac isocórica las temperaturas absolutas deben estar en kelvins para calcular la razón de presiones correctamente."
          en: "Likely error: computing [[DeltaT]] using temperatures in degrees Celsius. Although the difference in kelvins equals the difference in Celsius, in Gay-Lussac's isochoric law absolute temperatures must be in kelvins to correctly compute the pressure ratio."
      - id: DeltaT_error_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[DeltaT]] es T2 menos T1, no T1 menos T2, para obtener el signo correcto."
          en: "Verify that [[DeltaT]] is T2 minus T1, not T1 minus T2, to get the correct sign."
    next_step_rules:
      - id: DeltaT_next_positive
        when: "DeltaT > 0"
        status: ok
        text:
          es: "Con [[DeltaT]] positivo confirmado, calcular [[DeltaU]] y verificar que la presión final es mayor que la inicial en la misma proporción que T2 dividida entre T1."
          en: "With positive [[DeltaT]] confirmed, compute [[DeltaU]] and verify that the final pressure is greater than the initial one in the same ratio as T2 divided by T1."
      - id: DeltaT_next_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[DeltaT]] también permite verificar el resultado comparando presiones iniciales y finales mediante la ley de Gay-Lussac isocórica."
          en: "The value of [[DeltaT]] also allows verifying the result by comparing initial and final pressures via Gay-Lussac's isochoric law."

  Q:
    magnitude_type: continua_con_signo
    semantic_role:
      es: Calor intercambiado en el proceso isocórico. Igual a DeltaU por ser W nulo.
      en: Heat exchanged in the isochoric process. Equal to DeltaU because W is zero.
    summary_rules:
      - id: Q_summary_positive
        when: "Q > 0"
        status: ok
        text:
          es: "[[Q]] positivo indica que el gas ha absorbido calor del entorno. El sistema resume el comportamiento de un receptor térmico a volumen constante."
          en: "Positive [[Q]] indicates the gas has absorbed heat from the surroundings. The system summarises the behaviour of a thermal receiver at constant volume."
      - id: Q_summary_negative
        when: "Q < 0"
        status: ok
        text:
          es: "[[Q]] negativo indica que el gas ha cedido calor al entorno. El sistema describe el comportamiento de un emisor térmico a volumen constante."
          en: "Negative [[Q]] indicates the gas has released heat to the surroundings. The system describes the behaviour of a thermal emitter at constant volume."
      - id: Q_summary_default
        when: "true"
        status: ok
        text:
          es: "[[Q]] resume el intercambio térmico total del proceso isocórico. Al ser [[W]] nulo, [[Q]] es igual a [[DeltaU]], lo que simplifica el análisis del primer principio."
          en: "[[Q]] summarises the total heat exchange of the isochoric process. Since [[W]] is zero, [[Q]] equals [[DeltaU]], simplifying the first law analysis."
    physical_reading_rules:
      - id: Q_reading_default
        when: "true"
        status: ok
        text:
          es: "[[Q]] fluye entre el gas y el entorno a través de las paredes del recipiente. En el recipiente rígido ideal, este flujo de calor es el único mecanismo de cambio de estado termodinámico."
          en: "[[Q]] flows between the gas and surroundings through the container walls. In the ideal rigid container, this heat flow is the only mechanism of thermodynamic state change."
      - id: Q_reading_fallback
        when: "true"
        status: ok
        text:
          es: "[[Q]] positivo implica que el entorno está más caliente que el gas; negativo implica que el entorno está más frío."
          en: "Positive [[Q]] implies the surroundings are hotter than the gas; negative implies the surroundings are cooler."
    coherence_rules:
      - id: Q_coherence_equal_DeltaU
        when: "Q > 0"
        status: ok
        text:
          es: "[[Q]] positivo debe ser igual a [[DeltaU]] positivo. Si difieren, verificar el cálculo de [[n]], [[Cv]] y [[DeltaT]]."
          en: "Positive [[Q]] must equal positive [[DeltaU]]. If they differ, check the calculation of [[n]], [[Cv]] and [[DeltaT]]."
      - id: Q_coherence_default
        when: "true"
        status: ok
        text:
          es: "La coherencia fundamental del proceso isocórico es que [[Q]] igual a [[DeltaU]]. Verificar este balance antes de dar por bueno el resultado."
          en: "The fundamental coherence of the isochoric process is that [[Q]] equals [[DeltaU]]. Verify this balance before accepting the result."
    model_validity_rules:
      - id: Q_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo que iguala [[Q]] con [[DeltaU]] es válido exclusivamente para el proceso isocórico. En cualquier otro proceso, [[Q]] y [[DeltaU]] difieren por el trabajo [[W]]."
          en: "The model equating [[Q]] with [[DeltaU]] is valid exclusively for the isochoric process. In any other process, [[Q]] and [[DeltaU]] differ by the work [[W]]."
      - id: Q_validity_fallback
        when: "true"
        status: ok
        text:
          es: "Si el proceso no es estrictamente isocórico, usar el primer principio completo con [[W]] no nulo."
          en: "If the process is not strictly isochoric, use the complete first law with non-zero [[W]]."
    graph_rules:
      - id: Q_graph_default
        when: "true"
        status: ok
        text:
          es: "[[Q]] no tiene representación directa de área en el diagrama pV (porque el área es nula), pero en el diagrama pT la longitud del segmento isocórico es proporcional a [[Q]] y a [[DeltaT]]."
          en: "[[Q]] has no direct area representation in the pV diagram (because the area is zero), but in the pT diagram the length of the isochoric segment is proportional to [[Q]] and [[DeltaT]]."
      - id: Q_graph_fallback
        when: "true"
        status: ok
        text:
          es: "El diagrama pT permite visualizar el signo de [[Q]] según el sentido del desplazamiento del estado del gas."
          en: "The pT diagram allows visualising the sign of [[Q]] according to the direction of gas state displacement."
    likely_errors:
      - id: Q_error_W_nonzero
        when: "true"
        status: warning
        text:
          es: "Error probable: sumar un trabajo no nulo al calcular [[Q]] en un proceso isocórico. Dado que [[W]] es cero, [[Q]] es simplemente igual a [[DeltaU]]. Añadir un término de trabajo es un error conceptual grave."
          en: "Likely error: adding a non-zero work term when calculating [[Q]] in an isochoric process. Since [[W]] is zero, [[Q]] simply equals [[DeltaU]]. Adding a work term is a serious conceptual error."
      - id: Q_error_default
        when: "true"
        status: ok
        text:
          es: "Verificar el signo de [[Q]] comparándolo con el signo de [[DeltaT]]: ambos deben ser iguales en el proceso isocórico."
          en: "Verify the sign of [[Q]] by comparing it with the sign of [[DeltaT]]: both must be equal in the isochoric process."
    next_step_rules:
      - id: Q_next_default
        when: "true"
        status: ok
        text:
          es: "Calculado [[Q]], comparar el valor con el proceso isobárico equivalente para apreciar que el proceso isocórico requiere menos calor para el mismo [[DeltaT]] cuando se trata de un gas ideal (Cv menor que Cp)."
          en: "Once [[Q]] is calculated, compare with the equivalent isobaric process to appreciate that the isochoric process requires less heat for the same [[DeltaT]] for an ideal gas (Cv less than Cp)."
      - id: Q_next_fallback
        when: "true"
        status: ok
        text:
          es: "El siguiente paso lógico tras calcular [[Q]] es verificar el cambio de presión del gas usando la ley de Gay-Lussac."
          en: "The logical next step after calculating [[Q]] is to verify the gas pressure change using Gay-Lussac's law."

  T2:
    magnitude_type: continua_positiva
    semantic_role:
      es: Temperatura final del gas al concluir el proceso isocórico.
      en: Final temperature of the gas at the end of the isochoric process.
    summary_rules:
      - id: T2_summary_default
        when: "true"
        status: ok
        text:
          es: "[[T2]] indica la temperatura absoluta del gas al final del proceso. Un [[T2]] mayor que [[T1]] resume un proceso de calentamiento; menor indica enfriamiento."
          en: "[[T2]] indicates the absolute temperature of the gas at the end of the process. [[T2]] greater than [[T1]] summarises a heating process; smaller indicates cooling."
      - id: T2_summary_fallback
        when: "true"
        status: ok
        text:
          es: "[[T2]] determina el estado termodinámico final del gas en el proceso isocórico."
          en: "[[T2]] determines the final thermodynamic state of the gas in the isochoric process."
    physical_reading_rules:
      - id: T2_reading_default
        when: "true"
        status: ok
        text:
          es: "[[T2]] refleja el estado cinético final de las moléculas del gas. A mayor [[T2]], mayor velocidad cuadrática media de las partículas y mayor presión del gas encerrado."
          en: "[[T2]] reflects the final kinetic state of the gas molecules. Higher [[T2]] means greater root-mean-square molecular speed and higher pressure of the enclosed gas."
      - id: T2_reading_fallback
        when: "true"
        status: ok
        text:
          es: "[[T2]] en kelvins siempre debe ser positivo y finito para un gas en condiciones reales."
          en: "[[T2]] in kelvins must always be positive and finite for a gas under real conditions."
    coherence_rules:
      - id: T2_coherence_default
        when: "T2 > 0"
        status: ok
        text:
          es: "[[T2]] positivo es coherente con la termodinámica clásica. La razón de [[T2]] a [[T1]] debe ser igual a la razón de presión final a presión inicial."
          en: "Positive [[T2]] is coherent with classical thermodynamics. The ratio of [[T2]] to [[T1]] must equal the ratio of final to initial pressure."
      - id: T2_coherence_fallback
        when: "true"
        status: ok
        text:
          es: "[[T2]] debe ser mayor que cero. Un resultado negativo indica un error de cálculo."
          en: "[[T2]] must be greater than zero. A negative result indicates a calculation error."
    model_validity_rules:
      - id: T2_validity_default
        when: "true"
        status: ok
        text:
          es: "[[T2]] es válido mientras el gas permanezca en fase gaseosa y no se acerque al cero absoluto ni a temperaturas de disociación molecular."
          en: "[[T2]] is valid as long as the gas remains in the gas phase and does not approach absolute zero or molecular dissociation temperatures."
      - id: T2_validity_fallback
        when: "true"
        status: ok
        text:
          es: "Para gases reales con [[T2]] superior a 1000 K, verificar que no se producen reacciones químicas ni disociación."
          en: "For real gases with [[T2]] above 1000 K, verify that no chemical reactions or dissociation occur."
    graph_rules:
      - id: T2_graph_default
        when: "true"
        status: ok
        text:
          es: "[[T2]] es la coordenada horizontal del punto final en el diagrama pT. Su posición relativa a [[T1]] determina el sentido del desplazamiento en la recta isocórica."
          en: "[[T2]] is the horizontal coordinate of the final point in the pT diagram. Its position relative to [[T1]] determines the direction of displacement along the isochoric line."
      - id: T2_graph_fallback
        when: "true"
        status: ok
        text:
          es: "Localizar [[T2]] en el eje de temperatura del diagrama pT para identificar el estado final del gas."
          en: "Locate [[T2]] on the temperature axis of the pT diagram to identify the final state of the gas."
    likely_errors:
      - id: T2_error_celsius
        when: "true"
        status: warning
        text:
          es: "Error probable: expresar [[T2]] en grados Celsius y usarlo directamente en la razón de presiones de la ley de Gay-Lussac. Convertir siempre a kelvins sumando 273.15."
          en: "Likely error: expressing [[T2]] in degrees Celsius and using it directly in the pressure ratio of Gay-Lussac's law. Always convert to kelvins by adding 273.15."
      - id: T2_error_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[T2]] se obtiene en kelvins para todas las relaciones del proceso isocórico."
          en: "Verify that [[T2]] is obtained in kelvins for all isochoric process relations."
    next_step_rules:
      - id: T2_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[T2]] calculado, obtener [[DeltaT]] como [[T2]] menos [[T1]] y proceder a calcular [[DeltaU]] y [[Q]]."
          en: "With [[T2]] computed, obtain [[DeltaT]] as [[T2]] minus [[T1]] and proceed to calculate [[DeltaU]] and [[Q]]."
      - id: T2_next_fallback
        when: "true"
        status: ok
        text:
          es: "Verificar también la presión final usando la proporción directa entre presión y temperatura a volumen constante."
          en: "Also verify the final pressure using the direct proportion between pressure and temperature at constant volume."

  T1:
    magnitude_type: continua_positiva
    semantic_role:
      es: Temperatura inicial del gas antes del proceso isocórico. Estado de referencia del sistema.
      en: Initial temperature of the gas before the isochoric process. Reference state of the system.
    summary_rules:
      - id: T1_summary_default
        when: "true"
        status: ok
        text:
          es: "[[T1]] indica la temperatura absoluta de partida del gas. Junto con [[T2]], resume el alcance térmico total del proceso isocórico."
          en: "[[T1]] indicates the initial absolute temperature of the gas. Together with [[T2]], it summarises the total thermal range of the isochoric process."
      - id: T1_summary_fallback
        when: "true"
        status: ok
        text:
          es: "[[T1]] es el estado de referencia desde el que comienza el proceso isocórico."
          en: "[[T1]] is the reference state from which the isochoric process begins."
    physical_reading_rules:
      - id: T1_reading_default
        when: "true"
        status: ok
        text:
          es: "[[T1]] en kelvins determina el estado cinético inicial de las moléculas del gas y la presión inicial del recipiente rígido."
          en: "[[T1]] in kelvins determines the initial kinetic state of the gas molecules and the initial pressure of the rigid container."
      - id: T1_reading_fallback
        when: "true"
        status: ok
        text:
          es: "Un [[T1]] mayor implica una presión inicial mayor para el mismo número de moles en el mismo volumen."
          en: "A larger [[T1]] implies a higher initial pressure for the same number of moles in the same volume."
    coherence_rules:
      - id: T1_coherence_default
        when: "T1 > 0"
        status: ok
        text:
          es: "[[T1]] positivo es coherente con la escala Kelvin. Si se proporciona en Celsius, convertir antes de usar en cualquier ratio o fórmula absoluta."
          en: "Positive [[T1]] is consistent with the Kelvin scale. If provided in Celsius, convert before using in any ratio or absolute formula."
      - id: T1_coherence_fallback
        when: "true"
        status: ok
        text:
          es: "Verificar que [[T1]] está en kelvins y es mayor que cero."
          en: "Verify that [[T1]] is in kelvins and greater than zero."
    model_validity_rules:
      - id: T1_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo isocórico es válido para cualquier [[T1]] positivo mientras el gas permanezca en fase gaseosa."
          en: "The isochoric model is valid for any positive [[T1]] as long as the gas remains in the gas phase."
      - id: T1_validity_fallback
        when: "true"
        status: ok
        text:
          es: "[[T1]] muy bajo (próximo al punto de condensación del gas) invalida la aproximación de gas ideal."
          en: "Very low [[T1]] (near the gas condensation point) invalidates the ideal gas approximation."
    graph_rules:
      - id: T1_graph_default
        when: "true"
        status: ok
        text:
          es: "[[T1]] es la coordenada horizontal del punto inicial en el diagrama pT isocórico. Define el punto de partida del segmento sobre la recta que pasa por el origen."
          en: "[[T1]] is the horizontal coordinate of the initial point in the isochoric pT diagram. It defines the starting point of the segment on the line through the origin."
      - id: T1_graph_fallback
        when: "true"
        status: ok
        text:
          es: "Localizar [[T1]] en el eje de temperatura del diagrama pT para identificar el estado inicial del gas."
          en: "Locate [[T1]] on the temperature axis of the pT diagram to identify the initial state of the gas."
    likely_errors:
      - id: T1_error_celsius
        when: "true"
        status: warning
        text:
          es: "Error probable: usar [[T1]] en grados Celsius directamente en la ley de Gay-Lussac para calcular [[T2]]. Por ejemplo, 27 °C debe convertirse a 300 K antes de aplicar la proporción de presiones."
          en: "Likely error: using [[T1]] in degrees Celsius directly in Gay-Lussac's law to compute [[T2]]. For example, 27 °C must be converted to 300 K before applying the pressure ratio."
      - id: T1_error_default
        when: "true"
        status: ok
        text:
          es: "Confirmar que [[T1]] está en kelvins. La conversión de Celsius a kelvins consiste en sumar 273.15."
          en: "Confirm that [[T1]] is in kelvins. The conversion from Celsius to kelvins consists of adding 273.15."
    next_step_rules:
      - id: T1_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[T1]] verificado en kelvins, calcular [[DeltaT]] como [[T2]] menos [[T1]] y usar el resultado para obtener [[DeltaU]] y [[Q]]."
          en: "With [[T1]] verified in kelvins, compute [[DeltaT]] as [[T2]] minus [[T1]] and use the result to obtain [[DeltaU]] and [[Q]]."
      - id: T1_next_fallback
        when: "true"
        status: ok
        text:
          es: "El estado inicial definido por [[T1]] y la presión inicial permite verificar la ley de Gay-Lussac al final del proceso."
          en: "The initial state defined by [[T1]] and the initial pressure allows verifying Gay-Lussac's law at the end of the process."

cross_checks:
  - id: Q_equals_DeltaU
    condition: "abs(Q - DeltaU) < 0.01"
    message:
      es: "Coherencia verificada: [[Q]] es igual a [[DeltaU]], confirmando el proceso isocórico."
      en: "Coherence verified: [[Q]] equals [[DeltaU]], confirming the isochoric process."
  - id: W_is_zero
    condition: "W == 0"
    message:
      es: "[[W]] es nulo, condición necesaria del proceso isocórico."
      en: "[[W]] is zero, necessary condition of the isochoric process."

error_patterns:
  - id: Cp_instead_of_Cv
    detect_when: "Cv > 25"
    message:
      es: "Posible uso de Cp en lugar de Cv. Verificar el valor del calor específico empleado."
      en: "Possible use of Cp instead of Cv. Verify the heat capacity value used."
  - id: celsius_temperature
    detect_when: "T1 < 100 || T2 < 100"
    message:
      es: "Las temperaturas parecen estar en grados Celsius. Convertir a kelvins sumando 273.15."
      en: "Temperatures appear to be in degrees Celsius. Convert to kelvins by adding 273.15."

graph_binding:
  preferred_graph: Coord
  graph_type: pT_isochorique
  axes:
    x: T
    y: p
  annotations:
    - T1
    - T2
    - DeltaT

mini_graph:
  enabled: true
  preferred_type: Coord
  binding:
    highlight: DeltaT
    animate_on: DeltaT

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
