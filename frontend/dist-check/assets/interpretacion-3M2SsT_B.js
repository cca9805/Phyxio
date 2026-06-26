const e=`version: "2.0"
id: interp_condensadores
leaf_id: condensadores

nombre:
  es: Interpretación de condensadores
  en: Capacitors interpretation

scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: electrostatica
  parent_id: aplicaciones
  ruta_relativa: fisica-clasica/electromagnetismo/electrostatica/aplicaciones/condensadores

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    summary: Resumen
    physical_reading: Lectura física
    coherence: Coherencia
    model_validity: Validez del modelo
    graph_reading: Lectura del gráfico
    likely_errors: Errores probables
    next_step: Siguiente paso
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
    max_chars: 300

dependencies:
  formulas:
    - capacidad_definicion
    - energia_condensador
    - capacidad_plana
  magnitudes:
    - C
    - Q
    - V
    - E_cap
    - C_plana
    - epsilon

global_context:
  physical_domain:
    es: Electrostática aplicada a condensadores ideales de placas planas. Régimen cuasiestático, frecuencia baja, dieléctrico lineal e isotrópico.
    en: Electrostatics applied to ideal parallel-plate capacitors. Quasi-static regime, low frequency, linear and isotropic dielectric.
  axis_convention:
    es: Eje X = tensión V (voltios), Eje Y = carga Q (culombios). La pendiente de la recta Q = C·V representa la capacidad C en faradios.
    en: X axis = voltage V (volts), Y axis = charge Q (coulombs). The slope of the line Q = C·V represents capacitance C in farads.
  standard_assumptions:
    - es: Campo eléctrico uniforme entre armaduras (d << dimensiones laterales).
      en: Uniform electric field between plates (d << lateral dimensions).
    - es: Dieléctrico lineal, homogéneo e isotrópico sin pérdidas.
      en: Linear, homogeneous, and isotropic dielectric without losses.
    - es: Sin efectos de borde ni corrientes de fuga significativas.
      en: No edge effects or significant leakage currents.
  standard_warnings:
    - es: La tensión no debe superar la tensión nominal del condensador; de lo contrario el dieléctrico puede perforar de forma destructiva.
      en: Voltage must not exceed the capacitor's rated voltage; otherwise the dielectric may break down destructively.
    - es: La fórmula de energía E = (1/2)C·V² asume condensador ideal sin pérdidas dieléctricas.
      en: The energy formula E = (1/2)C·V² assumes an ideal capacitor without dielectric losses.

result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: Resumen del estado del condensador
      en: Capacitor state summary
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
      es: Lectura del gráfico Q vs V
      en: Q vs V graph reading
  likely_errors:
    enabled: true
    order: 6
    title:
      es: Errores probables del alumno
      en: Likely student errors
  next_step:
    enabled: true
    order: 7
    title:
      es: Siguiente paso
      en: Next step

targets:

  C:
    magnitude_type: scalar
    semantic_role:
      es: Capacidad eléctrica del condensador. Propiedad intrínseca que determina cuánta carga almacena el dispositivo por voltio de tensión aplicada.
      en: Electric capacitance of the capacitor. Intrinsic property that determines how much charge the device stores per volt of applied voltage.
    summary_rules:
      - id: summary_C_pequena
        when: C < 1e-9
        status: info
        text:
          es: Capacidad en el rango de picofaradios o nanofaradios. Condensador típico de señal o de alta frecuencia.
          en: Capacitance in the picofarad or nanofarad range. Typical signal or high-frequency capacitor.
      - id: summary_C_media
        when: C >= 1e-9 && C < 1e-3
        status: info
        text:
          es: Capacidad en el rango de nanofaradios a microfaradios. Condensador de uso general en circuitos electrónicos.
          en: Capacitance in the nanofarad to microfarad range. General-purpose capacitor in electronic circuits.
      - id: summary_C_grande
        when: C >= 1e-3
        status: info
        text:
          es: Capacidad en el rango de milifaradios o superior. Condensador electrolítico de filtrado o supercondensador.
          en: Capacitance in the millifarad range or higher. Electrolytic filter capacitor or supercapacitor.
      - id: summary_C_fallback
        when: 'true'
        status: info
        text:
          es: Capacidad calculada a partir de la relación C = Q/V. Propiedad geométrica y material del condensador.
          en: Capacitance calculated from the relation C = Q/V. Geometric and material property of the capacitor.
    physical_reading_rules:
      - id: physical_C_meaning
        when: 'true'
        status: info
        text:
          es: La capacidad C indica cuántos culombios de carga acumula el condensador por cada voltio adicional de tensión. Un condensador de mayor C almacena más carga para la misma tensión, pero no necesariamente más energía si la tensión es menor.
          en: Capacitance C indicates how many coulombs of charge the capacitor accumulates per additional volt of voltage. A capacitor with larger C stores more charge for the same voltage, but not necessarily more energy if the voltage is lower.
    coherence_rules:
      - id: coherence_C_positiva
        when: C > 0
        status: success
        text:
          es: La capacidad calculada es positiva, coherente con la definición física.
          en: Calculated capacitance is positive, consistent with the physical definition.
      - id: coherence_C_negativa
        when: C <= 0
        status: error
        text:
          es: Resultado incoherente. La capacidad no puede ser negativa ni nula. Revisar los valores de Q y V.
          en: Incoherent result. Capacitance cannot be negative or zero. Review the values of Q and V.
    model_validity_rules:
      - id: validity_C_rango
        when: C < 1e-15
        status: warning
        text:
          es: Capacidad extremadamente pequeña (< 1 fF). El modelo de condensador ideal puede no ser aplicable; a estas escalas dominan las capacidades parásitas del propio circuito.
          en: Extremely small capacitance (< 1 fF). The ideal capacitor model may not be applicable; at these scales, parasitic capacitances of the circuit itself dominate.
      - id: validity_C_normal
        when: C >= 1e-15
        status: info
        text:
          es: El rango de capacidad es compatible con el modelo de condensador ideal a baja frecuencia.
          en: The capacitance range is compatible with the ideal capacitor model at low frequency.
    graph_rules:
      - id: graph_C_pendiente
        when: 'true'
        status: info
        text:
          es: "En el gráfico Q vs V: la capacidad C es la pendiente de la recta. A mayor C, la recta es más empinada. El punto calculado (V, Q) debe encontrarse exactamente sobre la recta Q = C·V."
          en: "In the Q vs V graph: capacitance C is the slope of the line. Higher C means a steeper line. The calculated point (V, Q) must lie exactly on the line Q = C·V."
    likely_errors:
      - id: error_C_unidades
        when: C > 1
        status: warning
        text:
          es: "Error frecuente: introducir la capacidad en microfaradios (µF) olvidando convertir a faradios. 1 µF = 1×10⁻⁶ F. Si el resultado es mayor que 1 F sin ser un supercondensador, verificar conversión de unidades."
          en: "Common error: entering capacitance in microfarads (µF) forgetting to convert to farads. 1 µF = 1×10⁻⁶ F. If result is greater than 1 F without being a supercapacitor, check unit conversion."
      - id: error_C_fallback
        when: 'true'
        status: info
        text:
          es: "Error conceptual frecuente: confundir C (propiedad fija del condensador) con Q (carga variable que depende de V). Cambiar la tensión no modifica C, solo modifica Q y E."
          en: "Frequent conceptual error: confusing C (fixed capacitor property) with Q (variable charge that depends on V). Changing voltage does not modify C, only Q and E."
    next_step_rules:
      - id: next_C_energia
        when: 'true'
        status: info
        text:
          es: Con C calculado, calcular la energía almacenada E = (1/2)·C·V² para el mismo valor de tensión. Compara dos condensadores de diferente C con la misma tensión para ver cuál almacena más energía.
          en: With C calculated, compute the stored energy E = (1/2)·C·V² for the same voltage value. Compare two capacitors of different C at the same voltage to see which stores more energy.

  Q:
    magnitude_type: scalar
    semantic_role:
      es: Carga almacenada en el condensador. Magnitud de estado que crece linealmente con la tensión aplicada y es proporcional a la capacidad.
      en: Charge stored in the capacitor. State quantity that grows linearly with applied voltage and is proportional to capacitance.
    summary_rules:
      - id: summary_Q_cero
        when: Q == 0
        status: info
        text:
          es: El condensador está descargado. No almacena carga ni energía en este estado.
          en: The capacitor is discharged. It stores no charge or energy in this state.
      - id: summary_Q_positiva
        when: Q > 0
        status: success
        text:
          es: El condensador está cargado con carga positiva en la armadura de referencia. La armadura opuesta tiene carga igual en módulo pero de signo negativo.
          en: The capacitor is charged with positive charge on the reference plate. The opposite plate has equal magnitude but negative charge.
      - id: summary_Q_fallback
        when: 'true'
        status: info
        text:
          es: Carga calculada como Q = C·V. Valor proporcional a la tensión y a la capacidad del condensador.
          en: Charge calculated as Q = C·V. Value proportional to voltage and capacitor capacitance.
    physical_reading_rules:
      - id: physical_Q_linealidad
        when: 'true'
        status: info
        text:
          es: La carga Q = C·V crece linealmente con la tensión V para un condensador de capacidad constante. Duplicar la tensión duplica la carga almacenada. Duplicar la capacidad también duplica la carga para la misma tensión.
          en: Charge Q = C·V grows linearly with voltage V for a capacitor of constant capacitance. Doubling the voltage doubles the stored charge. Doubling the capacitance also doubles the charge for the same voltage.
    coherence_rules:
      - id: coherence_Q_signo
        when: Q >= 0
        status: success
        text:
          es: La carga calculada es no negativa, coherente con la convención de carga positiva en la armadura de referencia.
          en: Calculated charge is non-negative, consistent with the convention of positive charge on the reference plate.
      - id: coherence_Q_coherencia_CV
        when: 'true'
        status: info
        text:
          es: Verificar que Q = C·V es consistente con los valores de C y V introducidos. Una discrepancia indica error en alguno de los tres valores.
          en: Verify that Q = C·V is consistent with the values of C and V entered. A discrepancy indicates an error in one of the three values.
    model_validity_rules:
      - id: validity_Q_lineal
        when: 'true'
        status: info
        text:
          es: La relación lineal Q = C·V es válida para condensadores ideales en régimen estático o cuasiestático. A altas frecuencias la relación se vuelve compleja (impedancia reactiva).
          en: The linear relation Q = C·V is valid for ideal capacitors in static or quasi-static regime. At high frequencies the relation becomes complex (reactive impedance).
    graph_rules:
      - id: graph_Q_posicion
        when: 'true'
        status: info
        text:
          es: "En el gráfico Q vs V: el valor de Q es la ordenada del punto calculado. El punto (V, Q) debe estar sobre la recta de pendiente C. Si la recta es conocida, el punto confirma que el condensador sigue el modelo lineal."
          en: "In the Q vs V graph: the Q value is the ordinate of the calculated point. The point (V, Q) must lie on the line with slope C. If the line is known, the point confirms that the capacitor follows the linear model."
    likely_errors:
      - id: error_Q_signo
        when: 'true'
        status: info
        text:
          es: "Error frecuente: creer que las dos armaduras acumulan ambas carga positiva. En realidad una tiene +Q y la otra −Q. La carga neta del condensador completo es siempre cero."
          en: "Frequent error: believing both plates accumulate positive charge. In reality one has +Q and the other −Q. The net charge of the complete capacitor is always zero."
    next_step_rules:
      - id: next_Q_energia
        when: 'true'
        status: info
        text:
          es: Con Q calculada, obtener la energía almacenada mediante E = Q²/(2C) o equivalentemente E = (1/2)·C·V². Ambas expresiones son equivalentes y pueden usarse según qué magnitudes se conocen.
          en: With Q calculated, obtain stored energy via E = Q²/(2C) or equivalently E = (1/2)·C·V². Both expressions are equivalent and can be used depending on which quantities are known.

  V:
    magnitude_type: scalar
    semantic_role:
      es: Tensión entre las armaduras del condensador. Causa directa de la carga acumulada y de la energía almacenada. Limitada superiormente por la tensión de ruptura del dieléctrico.
      en: Voltage between the capacitor plates. Direct cause of accumulated charge and stored energy. Bounded above by the dielectric breakdown voltage.
    summary_rules:
      - id: summary_V_baja
        when: V < 50
        status: success
        text:
          es: Tensión inferior a 50 V. Rango de baja tensión; compatible con la mayoría de condensadores electrónicos de señal y propósito general.
          en: Voltage below 50 V. Low voltage range; compatible with most signal and general-purpose electronic capacitors.
      - id: summary_V_media
        when: V >= 50 && V <= 400
        status: info
        text:
          es: Tensión entre 50 V y 400 V. Rango de tensión de red doméstica. Verificar que la tensión nominal del condensador sea superior al valor aplicado.
          en: Voltage between 50 V and 400 V. Domestic grid voltage range. Verify that the capacitor's rated voltage exceeds the applied value.
      - id: summary_V_alta
        when: V > 400
        status: warning
        text:
          es: Tensión superior a 400 V. Rango de alta tensión. Asegurar que el condensador tiene una tensión nominal suficiente; la perforación del dieléctrico es irreversible.
          en: Voltage above 400 V. High voltage range. Ensure the capacitor has sufficient rated voltage; dielectric breakdown is irreversible.
      - id: summary_V_fallback
        when: 'true'
        status: info
        text:
          es: Tensión calculada como V = Q/C. Diferencia de potencial entre las armaduras del condensador.
          en: Voltage calculated as V = Q/C. Potential difference between the capacitor plates.
    physical_reading_rules:
      - id: physical_V_causa
        when: 'true'
        status: info
        text:
          es: La tensión V es la causa directa de la carga Q = C·V y de la energía E = (1/2)·C·V². Un pequeño incremento de V produce un incremento proporcional de Q pero un incremento cuadrático de la energía almacenada.
          en: Voltage V is the direct cause of charge Q = C·V and energy E = (1/2)·C·V². A small increase in V produces a proportional increase in Q but a quadratic increase in stored energy.
    coherence_rules:
      - id: coherence_V_rango
        when: V >= 0
        status: success
        text:
          es: Tensión no negativa, coherente con la convención de trabajo con el módulo de la diferencia de potencial.
          en: Non-negative voltage, consistent with the convention of working with the magnitude of the potential difference.
      - id: coherence_V_negativa
        when: V < 0
        status: warning
        text:
          es: Tensión negativa. En el modelo de condensador ideal es equivalente a cambiar la polaridad de carga. Para condensadores electrolíticos polarizados, la tensión negativa puede destruir el componente.
          en: Negative voltage. In the ideal capacitor model this is equivalent to reversing the charge polarity. For polarized electrolytic capacitors, negative voltage can destroy the component.
    model_validity_rules:
      - id: validity_V_ruptura
        when: 'true'
        status: warning
        text:
          es: La fórmula C = Q/V es válida hasta la tensión de ruptura del dieléctrico. Por encima de ese límite el dieléctrico conduce y el condensador se destruye; la relación C = Q/V deja de ser válida.
          en: The formula C = Q/V is valid up to the dielectric breakdown voltage. Above that limit the dielectric conducts and the capacitor is destroyed; the relation C = Q/V ceases to be valid.
    graph_rules:
      - id: graph_V_abscisa
        when: 'true'
        status: info
        text:
          es: "En el gráfico Q vs V: la tensión V es la abscisa (eje X). El punto calculado (V, Q) se ubica sobre la recta de pendiente C. Al aumentar V el punto se desplaza hacia la derecha y hacia arriba sobre la recta."
          en: "In the Q vs V graph: voltage V is the abscissa (X axis). The calculated point (V, Q) lies on the line with slope C. As V increases the point moves right and up along the line."
    likely_errors:
      - id: error_V_ruptura
        when: V > 400
        status: warning
        text:
          es: "Error de diseño frecuente: aplicar una tensión superior a la tensión nominal del condensador. La tensión de servicio debe ser al menos el doble que la tensión de trabajo para tener margen de seguridad frente a picos transitorios."
          en: "Frequent design error: applying a voltage higher than the capacitor's rated voltage. The service voltage should be at least twice the working voltage to have a safety margin against transient peaks."
      - id: error_V_fallback
        when: 'true'
        status: info
        text:
          es: "Confusión típica: creer que la tensión entre armaduras es igual a la tensión de la fuente de alimentación cuando hay resistencias en serie. En circuitos RC, la tensión en el condensador es siempre menor que la tensión de la fuente durante la carga."
          en: "Typical confusion: believing the voltage between plates equals the supply voltage when there are resistors in series. In RC circuits, the capacitor voltage is always less than the supply voltage during charging."
    next_step_rules:
      - id: next_V_energia
        when: 'true'
        status: info
        text:
          es: Con V calculado, obtener la energía almacenada E = (1/2)·C·V². Si se quiere doblar la energía almacenada manteniendo C constante, la tensión debe aumentar en un factor √2 ≈ 1.41.
          en: With V calculated, obtain stored energy E = (1/2)·C·V². To double stored energy while keeping C constant, voltage must increase by a factor √2 ≈ 1.41.

  E_cap:
    magnitude_type: scalar
    semantic_role:
      es: Energía almacenada en el campo eléctrico del condensador. Crece con el cuadrado de la tensión y linealmente con la capacidad. Es la energía disponible para descargar en el circuito externo.
      en: Energy stored in the electric field of the capacitor. Grows with the square of voltage and linearly with capacitance. It is the energy available for discharge into the external circuit.
    summary_rules:
      - id: summary_Ecap_nula
        when: E_cap == 0
        status: info
        text:
          es: El condensador no almacena energía. Está descargado (V = 0 o C = 0).
          en: The capacitor stores no energy. It is discharged (V = 0 or C = 0).
      - id: summary_Ecap_pequena
        when: E_cap > 0 && E_cap < 0.001
        status: info
        text:
          es: Energía almacenada inferior a 1 mJ. Condensador de señal o de baja tensión. No representa un riesgo energético significativo.
          en: Stored energy below 1 mJ. Signal or low-voltage capacitor. Does not represent a significant energy hazard.
      - id: summary_Ecap_media
        when: E_cap >= 0.001 && E_cap < 10
        status: info
        text:
          es: Energía almacenada entre 1 mJ y 10 J. Condensador de filtrado o de aplicación de potencia. Puede producir arco eléctrico al descargarse de forma brusca.
          en: Stored energy between 1 mJ and 10 J. Filter or power application capacitor. Can produce electric arcing when discharged abruptly.
      - id: summary_Ecap_alta
        when: E_cap >= 10
        status: warning
        text:
          es: Energía almacenada superior a 10 J. Condensador de alta energía. La descarga rápida puede ser peligrosa; los condensadores de potencia retienen energía incluso tras desconectar la fuente.
          en: Stored energy above 10 J. High-energy capacitor. Rapid discharge can be dangerous; power capacitors retain energy even after disconnecting the supply.
      - id: summary_Ecap_fallback
        when: 'true'
        status: info
        text:
          es: Energía calculada como E = (1/2)·C·V². Energía potencial eléctrica acumulada en el campo entre las armaduras.
          en: Energy calculated as E = (1/2)·C·V². Electric potential energy accumulated in the field between the plates.
    physical_reading_rules:
      - id: physical_Ecap_cuadratica
        when: 'true'
        status: info
        text:
          es: La energía crece con el cuadrado de la tensión. Duplicar V cuadruplica la energía almacenada. Esta dependencia cuadrática explica por qué los condensadores de alta tensión son significativamente más peligrosos que los de baja tensión con la misma capacidad.
          en: Energy grows with the square of voltage. Doubling V quadruples stored energy. This quadratic dependence explains why high-voltage capacitors are significantly more dangerous than low-voltage ones with the same capacitance.
    coherence_rules:
      - id: coherence_Ecap_positiva
        when: E_cap >= 0
        status: success
        text:
          es: La energía almacenada es no negativa, coherente con el modelo físico.
          en: Stored energy is non-negative, consistent with the physical model.
      - id: coherence_Ecap_negativa
        when: E_cap < 0
        status: error
        text:
          es: Resultado incoherente. La energía almacenada no puede ser negativa. Revisar los valores de C y V.
          en: Incoherent result. Stored energy cannot be negative. Review the values of C and V.
    model_validity_rules:
      - id: validity_Ecap_ideal
        when: 'true'
        status: info
        text:
          es: La fórmula E = (1/2)·C·V² asume condensador ideal sin pérdidas dieléctricas (tangδ = 0). En condensadores electrolíticos reales con alto factor de disipación, la energía efectivamente almacenada puede ser hasta un 20-30% menor que el valor calculado.
          en: The formula E = (1/2)·C·V² assumes an ideal capacitor without dielectric losses (tanδ = 0). In real electrolytic capacitors with high dissipation factor, effectively stored energy can be 20-30% less than the calculated value.
    graph_rules:
      - id: graph_Ecap_area
        when: 'true'
        status: info
        text:
          es: "En el gráfico Q vs V: la energía almacenada es el área del triángulo formado por la recta Q = C·V, el eje X y el punto (V, Q). Área = (1/2)·V·Q = (1/2)·C·V². El gráfico hace visible por qué aparece el factor 1/2."
          en: "In the Q vs V graph: stored energy is the area of the triangle formed by the line Q = C·V, the X axis, and the point (V, Q). Area = (1/2)·V·Q = (1/2)·C·V². The graph makes visible why the 1/2 factor appears."
    likely_errors:
      - id: error_Ecap_factor_mitad
        when: 'true'
        status: warning
        text:
          es: "Error clásico: calcular E = C·V² omitiendo el factor 1/2. La confusión surge por analogía con E = m·v²/2 (energía cinética) donde el 1/2 sí es reconocible. En el condensador el factor 1/2 surge de la integración de la carga desde V = 0."
          en: "Classic error: calculating E = C·V² omitting the 1/2 factor. The confusion arises by analogy with E = m·v²/2 (kinetic energy) where the 1/2 is recognizable. In the capacitor the 1/2 factor arises from integrating charge from V = 0."
      - id: error_Ecap_QV
        when: 'true'
        status: info
        text:
          es: "Error frecuente: calcular E = Q·V en lugar de E = (1/2)·Q·V. El trabajo total de llevar la carga Q desde V=0 hasta V no es Q·V sino la mitad, porque la tensión empezó en 0 y fue creciendo durante la carga."
          en: "Frequent error: calculating E = Q·V instead of E = (1/2)·Q·V. The total work to bring charge Q from V=0 to V is not Q·V but half, because voltage started at 0 and grew during charging."
    next_step_rules:
      - id: next_Ecap_comparar
        when: 'true'
        status: info
        text:
          es: Comparar la energía almacenada con la de una batería equivalente para contextualizar. Una batería de 9 V y 500 mAh almacena unos 16 200 J, mientras que un condensador de 1000 µF a 9 V almacena solo 40.5 mJ, cinco órdenes de magnitud menos.
          en: Compare stored energy with that of an equivalent battery for context. A 9 V, 500 mAh battery stores about 16,200 J, while a 1000 µF capacitor at 9 V stores only 40.5 mJ, five orders of magnitude less.

  C_plana:
    magnitude_type: scalar
    semantic_role:
      es: Capacidad calculada desde la geometría del condensador plano. Vincula el diseño físico (área, separación, dieléctrico) con el comportamiento eléctrico (capacidad).
      en: Capacitance calculated from the parallel-plate capacitor geometry. Links physical design (area, separation, dielectric) to electrical behavior (capacitance).
    summary_rules:
      - id: summary_Cplana_fallback
        when: 'true'
        status: info
        text:
          es: Capacidad geométrica calculada con C = ε·A/d. Resultado que conecta las dimensiones físicas del condensador con su propiedad eléctrica principal.
          en: Geometric capacitance calculated with C = ε·A/d. Result connecting the physical dimensions of the capacitor with its main electrical property.
    physical_reading_rules:
      - id: physical_Cplana_parametros
        when: 'true'
        status: info
        text:
          es: La capacidad geométrica C = ε·A/d aumenta con el área A (más armadura = más campo almacenado), disminuye con la separación d (más campo concentrado = más capacidad para la misma carga), y aumenta con la permitividad ε del dieléctrico.
          en: Geometric capacitance C = ε·A/d increases with area A (more plate area = more stored field), decreases with separation d (more concentrated field = more capacitance for the same charge), and increases with dielectric permittivity ε.
    coherence_rules:
      - id: coherence_Cplana_positiva
        when: C_plana > 0
        status: success
        text:
          es: La capacidad geométrica es positiva, coherente con ε > 0, A > 0 y d > 0.
          en: Geometric capacitance is positive, consistent with ε > 0, A > 0 and d > 0.
      - id: coherence_Cplana_invalida
        when: C_plana <= 0
        status: error
        text:
          es: Resultado inválido. Revisar que ε, A y d son positivos.
          en: Invalid result. Check that ε, A, and d are positive.
    model_validity_rules:
      - id: validity_Cplana_campo_uniforme
        when: 'true'
        status: info
        text:
          es: La fórmula C = ε·A/d asume campo eléctrico uniforme entre las armaduras, lo que requiere d << √A. Si la separación es comparable a las dimensiones de las armaduras, aparecen efectos de borde que aumentan la capacidad real por encima del valor calculado.
          en: The formula C = ε·A/d assumes uniform electric field between plates, requiring d << √A. If separation is comparable to plate dimensions, edge effects appear that increase actual capacitance above the calculated value.
    graph_rules:
      - id: graph_Cplana_pendiente
        when: 'true'
        status: info
        text:
          es: "En el gráfico Q vs V: C_plana es la pendiente de la recta Q = C·V. Si se cambia la geometría (área o separación), la pendiente de la recta cambia proporcionalmente."
          en: "In the Q vs V graph: C_plana is the slope of the Q = C·V line. If geometry changes (area or separation), the slope of the line changes proportionally."
    likely_errors:
      - id: error_Cplana_unidades
        when: 'true'
        status: warning
        text:
          es: "Error habitual de unidades: introducir el área en cm² (debe ser m²) o la separación en cm (debe ser m). 1 cm² = 1×10⁻⁴ m². Un error de esta magnitud en el área produce un resultado 10 000 veces mayor que el correcto."
          en: "Common unit error: entering area in cm² (must be m²) or separation in cm (must be m). 1 cm² = 1×10⁻⁴ m². An error of this magnitude in area produces a result 10,000 times larger than correct."
      - id: error_Cplana_epsilon
        when: 'true'
        status: info
        text:
          es: "Error frecuente: usar la constante dieléctrica relativa εᵣ en lugar de la permitividad absoluta ε = ε₀·εᵣ. La fórmula C = ε·A/d requiere la permitividad absoluta. ε₀ = 8.854×10⁻¹² F/m."
          en: "Frequent error: using the relative dielectric constant εᵣ instead of absolute permittivity ε = ε₀·εᵣ. The formula C = ε·A/d requires absolute permittivity. ε₀ = 8.854×10⁻¹² F/m."
    next_step_rules:
      - id: next_Cplana_optimizar
        when: 'true'
        status: info
        text:
          es: Con C_plana calculada, analizar cómo cambiaría si se duplica A, si se reduce d a la mitad o si se cambia el dieléctrico a uno con εᵣ = 10. Estos análisis de sensibilidad son los que guían el diseño real de condensadores.
          en: With C_plana calculated, analyze how it would change if A is doubled, d is halved, or dielectric changes to one with εᵣ = 10. These sensitivity analyses are what guide real capacitor design.

  epsilon:
    magnitude_type: scalar
    semantic_role:
      es: Permitividad del dieléctrico. Parámetro que cuantifica la polarización del material entre armaduras y determina el factor de amplificación de la capacidad respecto al vacío.
      en: Dielectric permittivity. Parameter quantifying the polarization of the material between plates and determining the amplification factor of capacitance relative to vacuum.
    summary_rules:
      - id: summary_epsilon_vacio
        when: epsilon <= 9e-12
        status: info
        text:
          es: Permitividad próxima a la del vacío (ε₀ = 8.854×10⁻¹² F/m). El material dieléctrico es aire o similar; la capacidad geométrica es la mínima posible para esa geometría.
          en: Permittivity close to that of vacuum (ε₀ = 8.854×10⁻¹² F/m). The dielectric material is air or similar; geometric capacitance is the minimum possible for that geometry.
      - id: summary_epsilon_medio
        when: epsilon > 9e-12 && epsilon < 1e-9
        status: info
        text:
          es: Permitividad en rango de dieléctricos convencionales (εᵣ entre 2 y 100). Materiales típicos como PTFE, cerámica estándar o papel impregnado.
          en: Permittivity in the range of conventional dielectrics (εᵣ between 2 and 100). Typical materials such as PTFE, standard ceramic, or impregnated paper.
      - id: summary_epsilon_alta
        when: epsilon >= 1e-9
        status: info
        text:
          es: Permitividad muy alta. Dieléctrico con constante relativa superior a 100 (cerámica de alta constante o materiales ferroeléctricos). Permite capacidades muy grandes en geometrías reducidas.
          en: Very high permittivity. Dielectric with relative constant above 100 (high-K ceramic or ferroelectric materials). Allows very large capacitances in compact geometries.
      - id: summary_epsilon_fallback
        when: 'true'
        status: info
        text:
          es: Permitividad calculada como ε = C·d/A. Propiedad del material dieléctrico entre las armaduras del condensador.
          en: Permittivity calculated as ε = C·d/A. Property of the dielectric material between the capacitor plates.
    physical_reading_rules:
      - id: physical_epsilon_amplificacion
        when: 'true'
        status: info
        text:
          es: La permitividad ε determina cuántas veces más carga puede almacenar el condensador respecto a uno idéntico con vacío entre las armaduras. El cociente εᵣ = ε/ε₀ es la constante dieléctrica del material εᵣ = 4 significa que el material permite almacenar 4 veces más carga que el vacío.
          en: Permittivity ε determines how many times more charge the capacitor can store compared to an identical one with vacuum between the plates. The ratio εᵣ = ε/ε₀ is the dielectric constant of the material εᵣ = 4 means the material allows storing 4 times more charge than vacuum.
    coherence_rules:
      - id: coherence_epsilon_positiva
        when: epsilon > 0
        status: success
        text:
          es: Permitividad positiva, coherente con cualquier material físico real.
          en: Positive permittivity, consistent with any real physical material.
      - id: coherence_epsilon_invalida
        when: epsilon <= 0
        status: error
        text:
          es: Permitividad nula o negativa. No corresponde a ningún material dieléctrico pasivo real. Revisar los valores de C, d y A.
          en: Zero or negative permittivity. Does not correspond to any real passive dielectric material. Review the values of C, d, and A.
    model_validity_rules:
      - id: validity_epsilon_lineal
        when: 'true'
        status: info
        text:
          es: La permitividad calculada con C = ε·A/d asume un dieléctrico lineal (la polarización es proporcional al campo). Materiales ferroeléctricos o con histéresis dieléctrica no cumplen esta condición y requieren un modelo no lineal.
          en: The permittivity calculated with C = ε·A/d assumes a linear dielectric (polarization is proportional to field). Ferroelectric materials or those with dielectric hysteresis do not meet this condition and require a nonlinear model.
    graph_rules:
      - id: graph_epsilon_pendiente
        when: 'true'
        status: info
        text:
          es: "En el gráfico Q vs V: la permitividad ε determina la pendiente C = ε·A/d. Insertar un dieléctrico con εᵣ más alto aumenta la pendiente de la recta Q vs V."
          en: "In the Q vs V graph: permittivity ε determines the slope C = ε·A/d. Inserting a dielectric with higher εᵣ increases the slope of the Q vs V line."
    likely_errors:
      - id: error_epsilon_relativa
        when: 'true'
        status: warning
        text:
          es: "Error muy frecuente: usar la constante dieléctrica relativa εᵣ (adimensional) directamente en la fórmula en lugar de la permitividad absoluta ε = ε₀·εᵣ (en F/m). El resultado quedaría desfasado por un factor ε₀ ≈ 8.854×10⁻¹² respecto al valor correcto."
          en: "Very frequent error: using the relative dielectric constant εᵣ (dimensionless) directly in the formula instead of absolute permittivity ε = ε₀·εᵣ (in F/m). The result would be off by a factor of ε₀ ≈ 8.854×10⁻¹² compared to the correct value."
    next_step_rules:
      - id: next_epsilon_comparar
        when: 'true'
        status: info
        text:
          es: Calcular el cociente εᵣ = ε/ε₀ para identificar el material dieléctrico. Valores típicos de referencia para εᵣ son 1 (vacío/aire), 2.1 (PTFE), 4.5 (vidrio), 80 (agua) y hasta 10 000 (cerámicas BaTiO₃).
          en: Calculate the ratio εᵣ = ε/ε₀ to identify the dielectric material. Typical reference values for εᵣ are 1 (vacuum/air), 2.1 (PTFE), 4.5 (glass), 80 (water), and up to 10,000 (BaTiO₃ ceramics).

cross_checks:
  - id: check_Q_consistente
    description:
      es: Verificar que Q = C·V es consistente entre los tres valores declarados.
      en: Verify that Q = C·V is consistent among the three declared values.
    condition: abs(Q - C * V) < 1e-10
    message:
      es: Los valores de Q, C y V no son mutuamente consistentes. Verificar que se usa la misma fórmula C = Q/V en todos los cálculos.
      en: The values of Q, C, and V are not mutually consistent. Verify that the same formula C = Q/V is used in all calculations.

  - id: check_energia_consistente
    description:
      es: Verificar que E = (1/2)·C·V² es consistente con C y V declarados.
      en: Verify that E = (1/2)·C·V² is consistent with declared C and V.
    condition: abs(E_cap - 0.5 * C * V * V) < 1e-10
    message:
      es: La energía calculada no es consistente con (1/2)·C·V². Verificar que no se ha omitido el factor 1/2.
      en: Calculated energy is not consistent with (1/2)·C·V². Verify that the 1/2 factor has not been omitted.

error_patterns:
  - id: patron_factor_mitad
    detect_when: E_cap > C * V * V * 0.9
    message:
      es: "Posible error de factor: la energía calculada es aproximadamente C·V², no (1/2)·C·V². El factor 1/2 es obligatorio en la fórmula de energía del condensador."
      en: "Possible factor error: calculated energy is approximately C·V², not (1/2)·C·V². The 1/2 factor is mandatory in the capacitor energy formula."

graph_binding:
  enabled: true
  type: Coord
  axes:
    x: V
    y: Q
  annotations:
    slope: C
    area: E_cap
  description:
    es: Gráfico Q vs V donde la pendiente de la recta es la capacidad C y el área bajo la recta es la energía almacenada E = (1/2)·C·V².
    en: Q vs V graph where the slope of the line is capacitance C and the area under the line is stored energy E = (1/2)·C·V².

mini_graph:
  enabled: true
  preferred_type: Coord
  description:
    es: Gráfico compacto Q vs V mostrando la recta de pendiente C y el punto (V, Q) calculado.
    en: Compact Q vs V graph showing the line with slope C and the calculated point (V, Q).

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
