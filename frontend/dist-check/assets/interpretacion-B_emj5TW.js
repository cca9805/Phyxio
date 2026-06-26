const e=`version: "5.0"
id: interp-seguridad-electrica
leaf_id: seguridad-electrica

nombre:
  es: Seguridad electrica
  en: Electrical Safety

scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: electricidad-domestica
  parent_id: electricidad-domestica
  ruta_relativa: fisica-clasica/electromagnetismo/electricidad-domestica/seguridad-electrica

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: false
    dedicated_tab: true
    modal: false
  labels:
    priority_order:
      - summary
      - physical_reading
      - coherence
      - model_validity
      - graph_reading
      - likely_errors
      - next_step
  inline_limits:
    max_rules_per_section: 2
    max_total_length: 500

dependencies:
  formulas:
    - corriente_corporal
    - margen_proteccion
    - ratio_seguridad
  magnitudes:
    - I_cuerpo
    - R_cuerpo
    - V_contacto
    - I_diferencial
    - I_segura
    - margen
    - ratio_seguridad

global_context:
  physical_domain:
    es: Seguridad eléctrica doméstica. Análisis del riesgo de electrocución mediante la Ley de Ohm aplicada al cuerpo humano como resistencia en el circuito de contacto.
    en: Domestic electrical safety. Electrocution risk analysis using Ohm's Law applied to the human body as resistance in the contact circuit.
  axis_convention:
    es: No aplica. Las magnitudes de este leaf son escalares positivas sin convención de signo relevante para el alumno.
    en: Not applicable. Magnitudes in this leaf are positive scalars without a relevant sign convention for the student.
  standard_assumptions:
    - Resistencia corporal modelada como constante durante el contacto (valor normativo IEC 60479)
    - Tensión de red estable a 230 V AC 50 Hz
    - Contacto mano-pie como trayectoria anatómica de referencia (mayor riesgo)
    - Factor de potencia unitario (carga resistiva pura)
  standard_warnings:
    - La resistencia corporal real varía con la humedad, la superficie de contacto y el estado de la piel
    - Los umbrales fisiológicos dependen del tiempo de exposición, no solo de la corriente instantánea
    - Este modelo no aplica a corriente continua ni a alta tensión (> 1000 V)

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
    enabled: false
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
  I_cuerpo:
    magnitude_type: scalar
    semantic_role:
      es: Corriente resultante a través del cuerpo humano. Es el resultado central de aplicar la Ley de Ohm al contacto eléctrico. Determina directamente el nivel de peligro fisiológico.
      en: Resulting current through the human body. Core result of applying Ohm's Law to electrical contact. Directly determines the physiological danger level.
    summary_rules:
      - id: summary_icuerpo_safe
        when: I_cuerpo < 0.010
        status: success
        text:
          es: Corriente corporal calculada por debajo del umbral de tetanización (10 mA). En condiciones normales no produce efectos fisiológicos peligrosos.
          en: Calculated body current below tetanization threshold (10 mA). Under normal conditions does not produce dangerous physiological effects.
      - id: summary_icuerpo_warning
        when: I_cuerpo >= 0.010 and I_cuerpo < 0.030
        status: warning
        text:
          es: "Corriente corporal en zona de tetanización (10–30 mA). Puede impedir soltar el conductor eléctrico. Requiere desconexión diferencial inmediata."
          en: "Body current in tetanization zone (10–30 mA). May prevent releasing the electrical conductor. Requires immediate differential disconnection."
      - id: summary_icuerpo_danger
        when: I_cuerpo >= 0.030
        status: error
        text:
          es: "Corriente corporal superior a 30 mA. Riesgo de fibrilación ventricular si la exposición supera 30 ms. Situación de peligro vital sin desconexión inmediata."
          en: "Body current above 30 mA. Risk of ventricular fibrillation if exposure exceeds 30 ms. Life-threatening situation without immediate disconnection."
    physical_reading_rules:
      - id: physical_icuerpo_ohm
        when: 'true'
        status: info
        text:
          es: "La corriente corporal resulta de dividir la tensión de contacto entre la resistencia del cuerpo. A mayor humedad de la piel, menor resistencia y mayor corriente: el agua multiplica el peligro."
          en: "Body current results from dividing contact voltage by body resistance. The wetter the skin, the lower the resistance and the higher the current: water multiplies the danger."
      - id: physical_icuerpo_path
        when: I_cuerpo >= 0.010
        status: warning
        text:
          es: La trayectoria anatómica importa. El camino mano izquierda-pies atraviesa el corazón y es el más peligroso. Mano derecha-pies es menos crítico pero igualmente peligroso por encima de 30 mA.
          en: Anatomical path matters. The left hand-feet path crosses the heart and is the most dangerous. Right hand-feet is less critical but equally dangerous above 30 mA.
    coherence_rules:
      - id: coherence_icuerpo_positive
        when: I_cuerpo >= 0
        status: success
        text:
          es: Corriente positiva o cero, consistente con el modelo de seguridad eléctrica.
          en: Current positive or zero, consistent with the electrical safety model.
      - id: coherence_icuerpo_range
        when: I_cuerpo <= 0.230
        status: success
        text:
          es: "Corriente corporal dentro del rango físicamente posible con 230 V y resistencia mínima de 1000 Ω (máximo teórico: 230 mA)."
          en: "Body current within physically possible range at 230 V and minimum resistance of 1000 Ω (theoretical maximum: 230 mA)."
    model_validity_rules:
      - id: validity_icuerpo_dc
        when: 'true'
        status: info
        text:
          es: Modelo válido para AC 50 Hz doméstico. Para corriente continua los umbrales fisiológicos son aproximadamente 4 veces más altos; para frecuencias superiores a 100 kHz el efecto piel reduce el daño interno.
          en: Model valid for domestic 50 Hz AC. For direct current physiological thresholds are approximately 4 times higher; for frequencies above 100 kHz the skin effect reduces internal damage.
      - id: validity_icuerpo_time
        when: I_cuerpo >= 0.030
        status: warning
        text:
          es: "El modelo asume exposición instantánea. En exposiciones prolongadas el calor generado (I²·R·t) añade daño térmico al riesgo de fibrilación. El tiempo de desconexión del diferencial (< 30 ms) es crítico."
          en: "Model assumes instantaneous exposure. In prolonged exposures the generated heat (I²·R·t) adds thermal damage to fibrillation risk. The differential disconnection time (< 30 ms) is critical."
    graph_rules:
      - id: graph_icuerpo
        when: 'true'
        status: info
        text:
          es: No aplica — sin gráficos en este leaf.
          en: Not applicable — no graphs in this leaf.
    likely_errors:
      - id: error_icuerpo_tension
        when: 'true'
        status: warning
        text:
          es: "Error frecuente: creer que la tensión, no la corriente, es el agente de daño directo. La tensión determina la corriente, pero es la corriente la que produce fibrilación, tetanización y quemaduras."
          en: "Frequent error: believing voltage, not current, is the direct damage agent. Voltage determines current, but it is current that produces fibrillation, tetanization and burns."
      - id: error_icuerpo_resistencia
        when: R_cuerpo > 50000
        status: warning
        text:
          es: "Resistencia corporal muy alta (> 50 kΩ): verificar si se está usando el valor de piel completamente seca en laboratorio. En situaciones domésticas reales (manos ligeramente húmedas) la resistencia es 1000–5000 Ω."
          en: "Very high body resistance (> 50 kΩ): verify if the completely dry laboratory skin value is being used. In real domestic situations (slightly wet hands) resistance is 1000–5000 Ω."
    next_step_rules:
      - id: next_icuerpo_diferencial
        when: I_cuerpo >= 0.010
        status: info
        text:
          es: Verificar si el diferencial instalado tiene umbral inferior a la corriente calculada. Un diferencial de 30 mA protege si I_cuerpo < 30 mA con tiempo de disparo < 30 ms.
          en: Verify if the installed differential has a threshold below the calculated current. A 30 mA differential protects if I_cuerpo < 30 mA with trip time < 30 ms.
      - id: next_icuerpo_safe
        when: I_cuerpo < 0.010
        status: info
        text:
          es: Resultado dentro de zona segura. Calcular el margen de protección para verificar que el diferencial instalado cubre este escenario con margen suficiente.
          en: Result within safe zone. Calculate protection margin to verify the installed differential covers this scenario with sufficient margin.

  V_contacto:
    magnitude_type: scalar
    semantic_role:
      es: Tensión de contacto aplicada al cuerpo. Determina la corriente corporal resultante junto con la resistencia. Por encima de 50 V AC se considera zona de peligro normativo.
      en: Contact voltage applied to the body. Determines resulting body current together with resistance. Above 50 V AC is considered a normative danger zone.
    summary_rules:
      - id: summary_vcontacto_safe
        when: V_contacto <= 50
        status: success
        text:
          es: Tensión de contacto dentro del umbral de seguridad normativo (≤ 50 V AC, IEC 60364). Riesgo bajo para adultos sanos en condiciones normales.
          en: Contact voltage within normative safety threshold (≤ 50 V AC, IEC 60364). Low risk for healthy adults under normal conditions.
      - id: summary_vcontacto_danger
        when: V_contacto > 50
        status: error
        text:
          es: "Tensión de contacto superior al umbral de seguridad (50 V AC). Incluso con resistencia corporal alta, la corriente resultante puede ser peligrosa. Requiere verificación inmediata de las protecciones."
          en: "Contact voltage above safety threshold (50 V AC). Even with high body resistance, the resulting current can be dangerous. Requires immediate verification of protections."
    physical_reading_rules:
      - id: physical_vcontacto_origin
        when: 'true'
        status: info
        text:
          es: "La tensión de contacto en un domicilio puede ser: 230 V (contacto directo con fase), tensiones parciales por resistencia de tierra, o tensiones de paso/toque en averías. La más frecuente y peligrosa es el contacto directo con la fase."
          en: "Contact voltage in a home can be: 230 V (direct contact with phase), partial voltages through ground resistance, or step/touch voltages in faults. The most common and dangerous is direct contact with the phase."
      - id: physical_vcontacto_50v
        when: V_contacto > 25 and V_contacto <= 50
        status: warning
        text:
          es: "Tensión entre 25 V y 50 V. Zona intermedia: segura para adultos en condiciones normales pero peligrosa en entornos húmedos (IEC 60364 reduce el umbral a 25 V AC en zonas mojadas como baños)."
          en: "Voltage between 25 V and 50 V. Intermediate zone: safe for adults under normal conditions but dangerous in wet environments (IEC 60364 reduces threshold to 25 V AC in wet areas like bathrooms)."
    coherence_rules:
      - id: coherence_vcontacto_positive
        when: V_contacto >= 0
        status: success
        text:
          es: Tensión de contacto positiva o cero, consistente con el modelo de seguridad.
          en: Contact voltage positive or zero, consistent with the safety model.
      - id: coherence_vcontacto_max
        when: V_contacto <= 230
        status: success
        text:
          es: Tensión dentro del rango de la red doméstica (≤ 230 V). Valores superiores indicarían anomalía o sobretensión transitoria.
          en: Voltage within domestic grid range (≤ 230 V). Higher values would indicate anomaly or transient overvoltage.
    model_validity_rules:
      - id: validity_vcontacto
        when: 'true'
        status: info
        text:
          es: La tensión de contacto puede diferir de la tensión de red cuando existe resistencia de tierra. En contactos indirectos (a través de masa metálica), la tensión real puede ser inferior a 230 V dependiendo de la impedancia de tierra.
          en: Contact voltage may differ from grid voltage when ground resistance exists. In indirect contacts (through metal enclosure), the actual voltage may be lower than 230 V depending on ground impedance.
    graph_rules:
      - id: graph_vcontacto
        when: 'true'
        status: info
        text:
          es: No aplica — sin gráficos en este leaf.
          en: Not applicable — no graphs in this leaf.
    likely_errors:
      - id: error_vcontacto_neutro
        when: 'true'
        status: warning
        text:
          es: "Error frecuente: creer que tocar el neutro no es peligroso porque 'no tiene tensión'. En instalaciones con neutro a tierra el neutro está efectivamente a 0 V, pero fallas de tierra o neutros rotos pueden llevar tensión al neutro."
          en: "Frequent error: believing touching the neutral is safe because 'it has no voltage'. In grounded neutral installations the neutral is effectively at 0 V, but ground faults or broken neutrals can carry voltage to the neutral."
    next_step_rules:
      - id: next_vcontacto
        when: V_contacto > 0
        status: info
        text:
          es: Con la tensión de contacto conocida, calcular la corriente corporal usando la resistencia corporal estimada para las condiciones del contacto (seco, húmedo, mojado).
          en: With known contact voltage, calculate body current using estimated body resistance for contact conditions (dry, wet, soaked).

  R_cuerpo:
    magnitude_type: parameter
    semantic_role:
      es: Resistencia eléctrica del cuerpo humano. Parámetro clave que, junto con la tensión de contacto, determina la corriente corporal. Varía enormemente con las condiciones del contacto.
      en: Electrical resistance of the human body. Key parameter that, together with contact voltage, determines body current. Varies greatly with contact conditions.
    summary_rules:
      - id: summary_rcuerpo_wet
        when: R_cuerpo <= 1000
        status: error
        text:
          es: "Resistencia corporal muy baja (≤ 1000 Ω): condiciones de alto riesgo (piel mojada, heridas, contacto amplio). Con 230 V produciría corrientes superiores a 230 mA."
          en: "Very low body resistance (≤ 1000 Ω): high-risk conditions (wet skin, wounds, wide contact area). At 230 V would produce currents above 230 mA."
      - id: summary_rcuerpo_normal
        when: R_cuerpo > 1000 and R_cuerpo <= 10000
        status: warning
        text:
          es: "Resistencia corporal en rango húmedo-normal (1 kΩ–10 kΩ). Con 230 V produciría 23–230 mA, por encima del umbral de fibrilación. Las protecciones diferenciales son esenciales."
          en: "Body resistance in wet-normal range (1 kΩ–10 kΩ). At 230 V would produce 23–230 mA, above fibrillation threshold. Differential protections are essential."
      - id: summary_rcuerpo_dry
        when: R_cuerpo > 10000
        status: info
        text:
          es: "Resistencia corporal alta (> 10 kΩ): condiciones de piel seca sin heridas. Con 230 V produciría menos de 23 mA. El riesgo se reduce pero no desaparece con tensiones superiores a 50 V."
          en: "High body resistance (> 10 kΩ): dry skin without wounds. At 230 V would produce less than 23 mA. Risk is reduced but not eliminated at voltages above 50 V."
    physical_reading_rules:
      - id: physical_rcuerpo_humidity
        when: 'true'
        status: info
        text:
          es: "La humedad es el factor de riesgo principal sobre la resistencia corporal. La piel seca típica tiene 50 000–100 000 Ω. Con piel húmeda baja a 1000–5000 Ω. En contacto con heridas o mucosas puede caer por debajo de 500 Ω."
          en: "Humidity is the main risk factor on body resistance. Typical dry skin has 50,000–100,000 Ω. With wet skin it drops to 1,000–5,000 Ω. In contact with wounds or mucous membranes it can fall below 500 Ω."
    coherence_rules:
      - id: coherence_rcuerpo_positive
        when: R_cuerpo > 0
        status: success
        text:
          es: Resistencia positiva, consistente con modelo físico.
          en: Positive resistance, consistent with physical model.
    model_validity_rules:
      - id: validity_rcuerpo
        when: 'true'
        status: info
        text:
          es: El modelo asume resistencia constante durante el contacto. En realidad, la resistencia de contacto disminuye con el tiempo de exposición (quemaduras que destruyen la piel resistiva), haciendo la corriente progresivamente mayor. Este efecto agrava la situación en contactos prolongados.
          en: The model assumes constant resistance during contact. In reality, contact resistance decreases over exposure time (burns destroying resistive skin), making current progressively higher. This effect worsens the situation in prolonged contacts.
    graph_rules:
      - id: graph_rcuerpo
        when: 'true'
        status: info
        text:
          es: No aplica — sin gráficos en este leaf.
          en: Not applicable — no graphs in this leaf.
    likely_errors:
      - id: error_rcuerpo_constant
        when: 'true'
        status: warning
        text:
          es: "Error frecuente: usar siempre 100 000 Ω como resistencia corporal y concluir que el peligro es bajo. En baños, cocinas u otras zonas húmedas la resistencia puede ser 100 veces menor."
          en: "Frequent error: always using 100,000 Ω as body resistance and concluding the risk is low. In bathrooms, kitchens or other wet areas resistance can be 100 times lower."
    next_step_rules:
      - id: next_rcuerpo
        when: 'true'
        status: info
        text:
          es: Usar el valor de resistencia adecuado para las condiciones del escenario analizado. IEC 60479 recomienda 1000 Ω como valor conservador de diseño para instalaciones domésticas con zonas húmedas.
          en: Use the resistance value appropriate for the scenario conditions being analyzed. IEC 60479 recommends 1000 Ω as a conservative design value for domestic installations with wet areas.

  I_diferencial:
    magnitude_type: parameter
    semantic_role:
      es: Umbral de disparo del interruptor diferencial. Define la corriente de fuga máxima antes de la desconexión automática. Es el parámetro de seguridad activo instalado en el circuito.
      en: Trip threshold of the residual current device (RCD). Defines maximum leakage current before automatic disconnection. It is the active safety parameter installed in the circuit.
    summary_rules:
      - id: summary_idiferencial_30ma
        when: I_diferencial <= 0.030
        status: success
        text:
          es: "Diferencial de alta sensibilidad (≤ 30 mA): cumple el requisito mínimo de protección personal según REBT para circuitos domésticos generales."
          en: "High sensitivity differential (≤ 30 mA): meets minimum personal protection requirement according to REBT for general domestic circuits."
      - id: summary_idiferencial_10ma
        when: I_diferencial <= 0.010
        status: success
        text:
          es: "Diferencial de muy alta sensibilidad (≤ 10 mA): nivel de protección adecuado para zonas húmedas (baños, aseos) según IEC 60364-7-701."
          en: "Very high sensitivity differential (≤ 10 mA): adequate protection level for wet areas (bathrooms, toilets) according to IEC 60364-7-701."
      - id: summary_idiferencial_300ma
        when: I_diferencial > 0.030
        status: warning
        text:
          es: "Diferencial con umbral superior a 30 mA: no apto para protección personal. Solo válido para protección contra incendios (300 mA) o selectividad de circuitos, no como protección frente a electrocución."
          en: "Differential with threshold above 30 mA: not suitable for personal protection. Only valid for fire protection (300 mA) or circuit selectivity, not as electrocution protection."
    physical_reading_rules:
      - id: physical_idiferencial_mechanism
        when: 'true'
        status: info
        text:
          es: El diferencial detecta el desequilibrio entre la corriente que entra (fase) y la que sale (neutro). Si hay diferencia (corriente de fuga a tierra o a través del cuerpo), dispara. No protege frente a cortocircuitos entre fase y neutro.
          en: The RCD detects imbalance between incoming current (phase) and outgoing current (neutral). If there is a difference (leakage current to ground or through the body), it trips. It does not protect against short circuits between phase and neutral.
    coherence_rules:
      - id: coherence_idiferencial_positive
        when: I_diferencial > 0
        status: success
        text:
          es: Umbral del diferencial positivo, consistente con su definición como corriente de disparo.
          en: Differential threshold positive, consistent with its definition as trip current.
    model_validity_rules:
      - id: validity_idiferencial
        when: 'true'
        status: info
        text:
          es: El tiempo de respuesta del diferencial (< 30 ms en los estándar) es tan importante como su sensibilidad en corriente. Un diferencial de 30 mA con tiempo de respuesta de 200 ms podría no evitar la fibrilación en trayectorias cardíacas.
          en: The RCD response time (< 30 ms in standard devices) is as important as its current sensitivity. A 30 mA differential with 200 ms response time might not prevent fibrillation in cardiac pathways.
    graph_rules:
      - id: graph_idiferencial
        when: 'true'
        status: info
        text:
          es: No aplica — sin gráficos en este leaf.
          en: Not applicable — no graphs in this leaf.
    likely_errors:
      - id: error_idiferencial_magnetotermico
        when: 'true'
        status: warning
        text:
          es: "Error frecuente: confundir el diferencial (protección personal, detecta fugas a tierra) con el magnetotérmico (protección del cableado, detecta sobrecargas y cortocircuitos). Son dispositivos distintos con funciones distintas."
          en: "Frequent error: confusing the RCD (personal protection, detects earth leakage) with the MCB (wiring protection, detects overloads and short circuits). These are different devices with different functions."
    next_step_rules:
      - id: next_idiferencial
        when: 'true'
        status: info
        text:
          es: Calcular el margen de protección dividiendo el umbral del diferencial entre la corriente corporal del escenario analizado. Un margen mayor que 1 indica protección efectiva; menor que 1, protección insuficiente.
          en: Calculate the protection margin by dividing the differential threshold by the body current of the analyzed scenario. A margin greater than 1 indicates effective protection; less than 1, insufficient protection.

  margen:
    magnitude_type: scalar
    semantic_role:
      es: Cociente adimensional entre la corriente de disparo del diferencial y la corriente corporal calculada. Cuantifica el nivel de protección efectivo del diferencial frente al escenario analizado.
      en: Dimensionless ratio between RCD trip current and calculated body current. Quantifies the effective protection level of the differential against the analyzed scenario.
    summary_rules:
      - id: summary_margen_ok
        when: margen >= 1
        status: success
        text:
          es: "Margen ≥ 1: el diferencial instalado dispararía antes de que la corriente corporal alcanzara el umbral del diferencial. Protección efectiva en este escenario."
          en: "Margin ≥ 1: the installed differential would trip before body current reaches the differential threshold. Effective protection in this scenario."
      - id: summary_margen_fail
        when: margen < 1
        status: error
        text:
          es: "Margen < 1: la corriente corporal supera el umbral del diferencial. El diferencial no proporcionaría protección en este escenario. Se requiere diferencial más sensible o reducción de la tensión de contacto."
          en: "Margin < 1: body current exceeds the differential threshold. The differential would not provide protection in this scenario. A more sensitive differential or reduction of contact voltage is required."
    physical_reading_rules:
      - id: physical_margen_value
        when: 'true'
        status: info
        text:
          es: "Un margen de 3 significa que la corriente corporal tendría que triplicarse para que el diferencial no disparase a tiempo. Un margen de 0.5 significa que la corriente corporal ya duplica el umbral de disparo."
          en: "A margin of 3 means body current would have to triple for the differential to fail to trip in time. A margin of 0.5 means body current already doubles the trip threshold."
    coherence_rules:
      - id: coherence_margen_positive
        when: margen > 0
        status: success
        text:
          es: Margen positivo, consistente con valores positivos de corriente corporal y umbral diferencial.
          en: Positive margin, consistent with positive values of body current and differential threshold.
    model_validity_rules:
      - id: validity_margen
        when: 'true'
        status: info
        text:
          es: El margen de protección calculado es estático. En instalaciones reales, corrientes de fuga acumuladas por cables deteriorados o equipos envejecidos pueden reducir el margen efectivo al sumar fugas parasitas al escenario de contacto.
          en: The calculated protection margin is static. In real installations, accumulated leakage currents from deteriorated cables or aging equipment can reduce the effective margin by adding parasitic leakage to the contact scenario.
    graph_rules:
      - id: graph_margen
        when: 'true'
        status: info
        text:
          es: No aplica — sin gráficos en este leaf.
          en: Not applicable — no graphs in this leaf.
    likely_errors:
      - id: error_margen_inversion
        when: 'true'
        status: warning
        text:
          es: "Error frecuente: calcular el cociente invertido (I_cuerpo / I_diferencial) e interpretar valores mayores que 1 como protección. El margen correcto es I_diferencial / I_cuerpo; valores mayores que 1 son seguros."
          en: "Frequent error: calculating the inverted ratio (I_cuerpo / I_diferencial) and interpreting values greater than 1 as protection. The correct margin is I_diferencial / I_cuerpo; values greater than 1 are safe."
    next_step_rules:
      - id: next_margen
        when: margen < 1
        status: error
        text:
          es: "Margen insuficiente: considerar instalar un diferencial de mayor sensibilidad (menor umbral), mejorar la resistencia de tierra o reducir la tensión de contacto mediante medidas de protección colectiva (doble aislamiento, separación de circuitos)."
          en: "Insufficient margin: consider installing a more sensitive differential (lower threshold), improving ground resistance or reducing contact voltage through collective protection measures (double insulation, circuit separation)."
      - id: next_margen_ok
        when: margen >= 1
        status: info
        text:
          es: Protección adecuada en este escenario. Verificar también el tiempo de respuesta del diferencial (debe ser < 30 ms) y el estado del circuito de tierra.
          en: Adequate protection in this scenario. Also verify the differential response time (must be < 30 ms) and the state of the ground circuit.

  I_segura:
    magnitude_type: parameter
    semantic_role:
      es: Umbral de corriente segura definido por norma. Permite comparar la corriente corporal calculada con el límite aceptable para diferentes zonas de la instalación.
      en: Safe current threshold defined by standard. Allows comparing calculated body current with the acceptable limit for different installation areas.
    summary_rules:
      - id: summary_isegura
        when: 'true'
        status: info
        text:
          es: "La corriente de seguridad máxima para uso doméstico general es 30 mA (umbral del diferencial estándar). Para zonas húmedas se reduce a 10 mA. Para zonas especiales (quirófanos, baños) puede ser 6 mA o inferior."
          en: "Maximum safe current for general domestic use is 30 mA (standard differential threshold). For wet areas it is reduced to 10 mA. For special areas (operating rooms, bathrooms) it may be 6 mA or lower."
    physical_reading_rules:
      - id: physical_isegura_zones
        when: 'true'
        status: info
        text:
          es: "La norma IEC 60479 clasifica los efectos: zona 1 (0–0.5 mA): sin efecto. Zona 2 (0.5–10 mA): percepción. Zona 3 (10–50 mA): tetanización reversible. Zona 4 (> 50 mA): fibrilación posible o segura según tiempo."
          en: "IEC 60479 classifies effects: zone 1 (0–0.5 mA): no effect. Zone 2 (0.5–10 mA): perception. Zone 3 (10–50 mA): reversible tetanization. Zone 4 (> 50 mA): possible or certain fibrillation depending on time."
    coherence_rules:
      - id: coherence_isegura
        when: I_segura > 0
        status: success
        text:
          es: Umbral de corriente segura positivo, coherente con su definición normativa.
          en: Positive safe current threshold, coherent with its normative definition.
    model_validity_rules:
      - id: validity_isegura
        when: 'true'
        status: info
        text:
          es: Los umbrales de seguridad son estadísticos y se establecen para el percentil más vulnerable de la población (niños, personas con enfermedades cardíacas). Para adultos sanos los umbrales reales son algo más altos, pero la norma conservadora protege a todos.
          en: Safety thresholds are statistical and are established for the most vulnerable population percentile (children, people with heart disease). For healthy adults the actual thresholds are somewhat higher, but the conservative standard protects everyone.
    graph_rules:
      - id: graph_isegura
        when: 'true'
        status: info
        text:
          es: No aplica — sin gráficos en este leaf.
          en: Not applicable — no graphs in this leaf.
    likely_errors:
      - id: error_isegura_fixed
        when: 'true'
        status: warning
        text:
          es: "Error frecuente: tratar 30 mA como umbral fijo independiente del tiempo. La norma IEC 60479 establece que 30 mA es seguro solo si la exposición es menor de 30 ms. Con 100 ms de exposición, el umbral seguro baja a aproximadamente 15 mA."
          en: "Frequent error: treating 30 mA as a fixed threshold independent of time. IEC 60479 establishes that 30 mA is safe only if exposure is less than 30 ms. With 100 ms exposure, the safe threshold drops to approximately 15 mA."
    next_step_rules:
      - id: next_isegura
        when: 'true'
        status: info
        text:
          es: Comparar la corriente corporal calculada con el umbral de seguridad de la zona analizada. En baños y zonas húmedas usar siempre 10 mA como referencia, no 30 mA.
          en: Compare calculated body current with the safety threshold of the analyzed area. In bathrooms and wet areas always use 10 mA as reference, not 30 mA.

  ratio_seguridad:
    magnitude_type: scalar
    semantic_role:
      es: Cociente de seguridad fisiológica. Evalúa cuantitativamente el riesgo biológico comparando la corriente corporal con el umbral seguro.
      en: Physiological safety ratio. Quantitatively evaluates biological risk by comparing body current with the safe threshold.
    summary_rules:
      - id: summary_ratioseg_ok
        when: ratio_seguridad <= 1
        status: success
        text:
          es: Cociente de seguridad inferior o igual a 1. El escenario se mantiene dentro de los márgenes seguros tolerados por el cuerpo humano.
          en: Safety ratio less than or equal to 1. The scenario remains within safe margins tolerated by the human body.
      - id: summary_ratioseg_fail
        when: ratio_seguridad > 1
        status: error
        text:
          es: "¡PELIGRO EXTREMO! El cociente de seguridad es mayor que 1. La corriente supera el límite seguro de 30 mA; riesgo inminente de lesiones graves o muerte por fibrilación."
          en: "EXTREME DANGER! Safety ratio is greater than 1. Current exceeds the safe limit of 30 mA; imminent risk of severe injury or death by fibrillation."
    physical_reading_rules:
      - id: physical_ratioseg_meaning
        when: 'true'
        status: info
        text:
          es: El cociente de seguridad es un indicador neto de riesgo. Si vale 0.5, estamos a la mitad del límite de peligro; si vale 2.0, la corriente corporal duplica el máximo tolerable.
          en: The safety ratio is a net risk indicator. If it is 0.5, we are at half the danger limit; if it is 2.0, body current doubles the maximum tolerable.
    coherence_rules:
      - id: coherence_ratioseg_positive
        when: ratio_seguridad >= 0
        status: success
        text:
          es: El cociente de seguridad es un valor no negativo coherente.
          en: The safety ratio is a coherent non-negative value.
    model_validity_rules:
      - id: validity_ratioseg
        when: 'true'
        status: info
        text:
          es: Este cociente asume una exposición prolongada o estándar. Para pulsos de corriente muy breves (< 10 ms), el cuerpo puede tolerar ratios mayores que 1 sin daño permanente.
          en: This ratio assumes a prolonged or standard exposure. For very brief current pulses (< 10 ms), the body can tolerate ratios greater than 1 without permanent damage.
    graph_rules:
      - id: graph_ratioseg
        when: 'true'
        status: info
        text:
          es: No aplica — sin gráficos en este leaf.
          en: Not applicable — no graphs in this leaf.
    likely_errors:
      - id: error_ratioseg_interpretation
        when: 'true'
        status: warning
        text:
          es: "Error común: creer que un ratio de 0.9 es totalmente seguro a largo plazo. Aunque sea menor que 1, cualquier corriente por encima de 10 mA produce tetanización y no puede ser mantenida indefinidamente."
          en: "Common error: believing a ratio of 0.9 is completely safe in the long term. Even if less than 1, any current above 10 mA causes tetanization and cannot be sustained indefinitely."
    next_step_rules:
      - id: next_ratioseg
        when: ratio_seguridad > 1
        status: warning
        text:
          es: Compara este resultado con el margen de protección diferencial para verificar si el sistema cortará la corriente antes de que cause daño.
          en: Compare this result with the differential protection margin to verify if the system will cut the current before it causes harm.
      - id: next_ratioseg_safe
        when: ratio_seguridad <= 1
        status: success
        text:
          es: Analizar escenarios húmedos (menor resistencia) para ver cómo aumenta el ratio de seguridad fisiológica hasta superar el límite seguro.
          en: Analyze wet scenarios (lower resistance) to see how the physiological safety ratio increases until it exceeds the safe limit.

cross_checks:
  - id: check_ohm_consistency
    description:
      es: Verificar que I_cuerpo sea consistente con V_contacto / R_cuerpo.
      en: Verify that I_cuerpo is consistent with V_contacto / R_cuerpo.
    formula_check: abs(I_cuerpo - V_contacto / R_cuerpo) < 0.001
    tolerance_percent: 1

error_patterns:
  - id: pattern_tension_vs_corriente
    description:
      es: Confundir la tensión de red (230 V) con la magnitud de daño directo, ignorando que es la corriente resultante la que produce el efecto fisiológico.
      en: Confusing grid voltage (230 V) with the direct damage magnitude, ignoring that it is the resulting current that produces the physiological effect.
    triggers: [I_cuerpo, V_contacto, R_cuerpo]
    severity: warning
  - id: pattern_resistencia_seca
    description:
      es: Usar resistencia corporal de piel seca (100 kΩ) en escenarios húmedos, subestimando el riesgo en baños, cocinas o trabajo con humedad.
      en: Using dry-skin body resistance (100 kΩ) in wet scenarios, underestimating risk in bathrooms, kitchens or work with humidity.
    triggers: [R_cuerpo, I_cuerpo]
    severity: error

graph_binding:
  enabled: false
  description:
    es: Sin gráficos disponibles en este leaf.
    en: No graphs available in this leaf.

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
