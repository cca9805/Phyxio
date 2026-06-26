const e=`version: v5
id: interpretacion-tension-y-potencia-en-casa
leaf_id: tension-y-potencia-en-casa
nombre:
  es: Interpretación de tensión y potencia en casa
  en: Voltage and power at home interpretation

scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: electricidad-domestica
  parent_id: electricidad-domestica
  ruta_relativa: fisica-clasica/electromagnetismo/electricidad-domestica/tension-y-potencia-en-casa

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: false
    dedicated_tab: true
    modal: false
  labels:
    summary:
      es: Resumen
      en: Summary
    coherence:
      es: Coherencia
      en: Coherence
    physical_reading:
      es: Lectura física
      en: Physical reading
    validity:
      es: Validez del modelo
      en: Model validity
    graph_reading:
      es: Lectura gráfica
      en: Graph reading
    likely_errors:
      es: Errores probables
      en: Likely errors
    next_step:
      es: Siguiente paso
      en: Next step
  priority_order:
    - summary
    - physical_reading
    - coherence
    - validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_rules_per_section: 2
    max_total_length: 500

dependencies:
  formulas:
    - potencia_base
    - corriente_por_resistencia
    - potencia_resistiva
    - energia
  magnitudes:
    - V
    - I
    - P
    - R
    - E_kWh
    - P_kW
    - t_h

global_context:
  physical_domain:
    es: Instalaciones eléctricas domésticas monofásicas europeas (230 V, 50 Hz) con cargas resistivas lineales.
    en: European single-phase domestic electrical installations (230 V, 50 Hz) with linear resistive loads.
  axis_convention:
    es: Tensión fija a 230 V (eje constante). Corriente y potencia como variables dependientes.
    en: Fixed voltage at 230 V (constant axis). Current and power as dependent variables.
  standard_assumptions:
    - Tensión de red constante (230 V)
    - Cargas óhmicas lineales
    - Sin picos de arranque de motores
    - Sin caídas de tensión en cableado
  standard_warnings:
    - Este modelo no aplica a cargas no lineales (diodos, LEDs con driver)
    - No considera armónicos ni factor de potencia
    - No incluye resistencia de contacto en conectores

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
  P:
    magnitude_type: scalar
    semantic_role:
      es: Magnitud de consumo eléctrico instantáneo. Es el resultado principal de la relación P = V·I.
      en: Instantaneous electrical consumption magnitude. Main result of P = V·I relationship.
    summary_rules:
      - id: summary_p
        when: 'true'
        status: info
        text:
          es: La potencia indica el ritmo de consumo eléctrico. Aparece en la etiqueta de todos los electrodomésticos.
          en: Power indicates the rate of electrical consumption. It appears on the label of all appliances.
    physical_reading_rules:
      - id: physical_p_very_low
        when: P < 10
        status: info
        text:
          es: Consumo muy bajo, típico de cargas en standby o pequeños dispositivos.
          en: Very low consumption, typical of standby loads or small devices.
      - id: physical_p_low
        when: P >= 10 and P < 500
        status: info
        text:
          es: Consumo bajo, típico de iluminación LED, cargadores pequeños.
          en: Low consumption, typical of LED lighting, small chargers.
      - id: physical_p_medium
        when: P >= 500 and P < 2000
        status: info
        text:
          es: Consumo medio, típico de frigoríficos, lavadoras, ordenadores.
          en: Medium consumption, typical of refrigerators, washing machines, computers.
      - id: physical_p_high
        when: P >= 2000 and P < 4000
        status: info
        text:
          es: Consumo alto, típico de hornos, termos eléctricos, aires acondicionados.
          en: High consumption, typical of ovens, electric water heaters, air conditioners.
      - id: physical_p_very_high
        when: P >= 4000
        status: warning
        text:
          es: Consumo muy alto; requiere circuito dedicado y atención a la simultaneidad.
          en: Very high consumption; requires dedicated circuit and attention to simultaneity.
    coherence_rules:
      - id: coherence_p_positive
        when: P >= 0
        status: success
        text:
          es: La potencia es positiva o cero, consistente con el modelo físico.
          en: Power is positive or zero, consistent with physical model.
      - id: coherence_p_domestic
        when: P < 5000
        status: info
        text:
          es: Potencia dentro de rango doméstico típico (< 5 kW).
          en: Power within typical domestic range (< 5 kW).
      - id: coherence_p_high
        when: P >= 5000
        status: warning
        text:
          es: Potencia elevada; verificar que el circuito y cableado soporten la carga.
          en: High power; verify that circuit and wiring support the load.
    model_validity_rules:
      - id: validity_p_constant
        when: 'true'
        status: info
        text:
          es: Asume potencia aproximadamente constante durante el intervalo considerado.
          en: Assumes approximately constant power during the considered interval.
    graph_rules:
      - id: graph_p
        when: 'true'
        status: info
        text:
          es: No aplica - sin gráficos de evolución temporal en este leaf.
          en: N/A - no time evolution graphs in this leaf.
    likely_errors:
      - id: error_p_kw_vs_w
        when: 'true'
        status: warning
        text:
          es: "Error típico: confundir kW con W al calcular energía. 1 kW = 1000 W."
          en: "Typical error: confusing kW with W when calculating energy. 1 kW = 1000 W."
      - id: error_p_power_vs_energy
        when: 'true'
        status: warning
        text:
          es: "Error común: confundir potencia (W, instantánea) con energía (Wh, acumulada)."
          en: "Common error: confusing power (W, instantaneous) with energy (Wh, accumulated)."
    next_step_rules:
      - id: next_p_check_current
        when: 'true'
        status: info
        text:
          es: Calcular la corriente asociada I = P/V y comparar con el límite del circuito.
          en: Calculate associated current I = P/V and compare with circuit limit.
      - id: next_p_calculate_energy
        when: 'true'
        status: info
        text:
          es: Si se conoce el tiempo de uso, calcular energía en kWh para estimar coste.
          en: If usage time is known, calculate energy in kWh to estimate cost.

  V:
    magnitude_type: scalar
    semantic_role:
      es: Tensión eléctrica como condición de contorno fija. Determina el "empuje" disponible.
      en: Electric voltage as fixed boundary condition. Determines the available "push".
    summary_rules:
      - id: summary_v
        when: 'true'
        status: info
        text:
          es: La tensión es el "empuje" eléctrico. En Europa, 230 V es el valor estándar doméstico.
          en: Voltage is the electrical "push". In Europe, 230 V is the standard domestic value.
    physical_reading_rules:
      - id: physical_v_fixed
        when: 'true'
        status: info
        text:
          es: En instalación doméstica, la tensión está fijada por la red; no es variable de decisión.
          en: In domestic installations, voltage is fixed by the grid; not a decision variable.
    coherence_rules:
      - id: coherence_v_europe
        when: V >= 207 and V <= 253
        status: success
        text:
          es: Tensión dentro del rango europeo permitido (230 V ± 10%).
          en: Voltage within permitted European range (230 V ± 10%).
      - id: coherence_v_low
        when: V < 207
        status: warning
        text:
          es: Tensión baja; puede indicar problemas de red o caídas en instalación antigua.
          en: Low voltage; may indicate grid problems or drops in old installation.
      - id: coherence_v_high
        when: V > 253
        status: warning
        text:
          es: Tensión alta; puede dañar equipos sensibles, verificar con electricista.
          en: High voltage; may damage sensitive equipment, verify with electrician.
    model_validity_rules:
      - id: validity_v_domestic
        when: 'true'
        status: info
        text:
          es: Válido para instalaciones monofásicas domésticas europeas (230 V).
          en: Valid for European single-phase domestic installations (230 V).
    graph_rules:
      - id: graph_v
        when: 'true'
        status: info
        text:
          es: No aplica - la tensión se considera constante en este modelo.
          en: N/A - voltage is considered constant in this model.
    likely_errors:
      - id: error_v_confusion
        when: 'true'
        status: warning
        text:
          es: "Error común: confundir tensión (V) con corriente (A) o potencia (W)."
          en: "Common error: confusing voltage (V) with current (A) or power (W)."
    next_step_rules:
      - id: next_v_use_for_current
        when: 'true'
        status: info
        text:
          es: Usar V = 230 V para calcular corriente I = P/V dada una potencia.
          en: Use V = 230 V to calculate current I = P/V given a power.

  I:
    magnitude_type: scalar
    semantic_role:
      es: Corriente eléctrica como efecto del sistema. Magnitud crítica para seguridad.
      en: Electric current as system effect. Critical magnitude for safety.
    summary_rules:
      - id: summary_i
        when: 'true'
        status: info
        text:
          es: La corriente es el flujo eléctrico real. Es la magnitud que calienta cables y dispara protecciones.
          en: Current is the actual electrical flow. It is the magnitude that heats cables and trips protections.
    physical_reading_rules:
      - id: physical_i_very_low
        when: I < 0.1
        status: info
        text:
          es: Corriente ínfima, típica de standby o pequeña electrónica.
          en: Tiny current, typical of standby or small electronics.
      - id: physical_i_low
        when: I >= 0.1 and I < 1
        status: info
        text:
          es: Corriente baja, típica de iluminación LED, cargadores.
          en: Low current, typical of LED lighting, chargers.
      - id: physical_i_medium
        when: I >= 1 and I < 5
        status: info
        text:
          es: Corriente media, típica de electrodomésticos pequeños.
          en: Medium current, typical of small appliances.
      - id: physical_i_high
        when: I >= 5 and I < 16
        status: info
        text:
          es: Corriente alta, típica de hornos, lavadoras, termos.
          en: High current, typical of ovens, washing machines, water heaters.
    coherence_rules:
      - id: coherence_i_positive
        when: I >= 0
        status: success
        text:
          es: Corriente positiva o cero, consistente con el modelo físico.
          en: Current positive or zero, consistent with physical model.
      - id: coherence_i_safe
        when: I < 10
        status: success
        text:
          es: Corriente segura para la mayoría de circuitos domésticos.
          en: Safe current for most domestic circuits.
      - id: coherence_i_caution
        when: I >= 10 and I < 16
        status: warning
        text:
          es: Corriente elevada; verificar límite del cable y enchufe.
          en: High current; verify cable and socket limit.
      - id: coherence_i_danger
        when: I >= 16
        status: danger
        text:
          es: Corriente peligrosa para circuitos estándar de 16 A. Requiere circuito dedicado.
          en: Dangerous current for standard 16 A circuits. Requires dedicated circuit.
    model_validity_rules:
      - id: validity_i_continuous
        when: 'true'
        status: info
        text:
          es: Asume corriente continua o valor eficaz en alterna (sin picos de arranque).
          en: Assumes continuous current or RMS value in AC (without startup peaks).
    graph_rules:
      - id: graph_i
        when: 'true'
        status: info
        text:
          es: No aplica - sin gráficos de evolución temporal.
          en: N/A - no time evolution graphs.
    likely_errors:
      - id: error_i_high_ok
        when: 'true'
        status: warning
        text:
          es: "Error de seguridad: pensar que 'si no salta el magnetotérmico, la corriente es segura'. Puede haber calentamiento local."
          en: "Safety error: thinking 'if the breaker does not trip, the current is safe'. Local heating may still occur."
    next_step_rules:
      - id: next_i_check_circuit
        when: 'true'
        status: info
        text:
          es: Comparar con el límite del circuito (típicamente 10-16 A domésticos).
          en: Compare with circuit limit (typically 10-16 A domestic).
      - id: next_i_calculate_power
        when: 'true'
        status: info
        text:
          es: Si se conoce la tensión, calcular potencia P = V × I.
          en: If voltage is known, calculate power P = V × I.

  R:
    magnitude_type: scalar
    semantic_role:
      es: Resistencia como propiedad de la carga. Determina la relación entre tensión y corriente.
      en: Resistance as load property. Determines the relationship between voltage and current.
    summary_rules:
      - id: summary_r
        when: 'true'
        status: info
        text:
          es: La resistencia determina cuánta corriente circulará a tensión dada. A 230 V, valores bajos son peligrosos.
          en: Resistance determines how much current will flow at given voltage. At 230 V, low values are dangerous.
    physical_reading_rules:
      - id: physical_r_inverse
        when: 'true'
        status: info
        text:
          es: A tensión fija, la corriente es inversamente proporcional a la resistencia.
          en: At fixed voltage, current is inversely proportional to resistance.
    coherence_rules:
      - id: coherence_r_positive
        when: R > 0
        status: success
        text:
          es: Resistencia positiva, consistente con el modelo físico.
          en: Positive resistance, consistent with physical model.
      - id: coherence_r_very_high
        when: R > 10000
        status: info
        text:
          es: Resistencia muy alta; corriente insignificante, carga segura.
          en: Very high resistance; insignificant current, safe load.
      - id: coherence_r_high
        when: R > 100 and R <= 10000
        status: info
        text:
          es: Resistencia alta; corriente baja, típica de lámparas y pequeños dispositivos.
          en: High resistance; low current, typical of lamps and small devices.
      - id: coherence_r_medium
        when: R > 10 and R <= 100
        status: info
        text:
          es: Resistencia media; corriente moderada, verificar si está dentro de límites.
          en: Medium resistance; moderate current, verify if within limits.
      - id: coherence_r_low
        when: R > 1 and R <= 10
        status: warning
        text:
          es: Resistencia baja; puede generar corrientes altas. Verificar cálculo de I = V/R.
          en: Low resistance; may generate high currents. Verify I = V/R calculation.
      - id: coherence_r_very_low
        when: R <= 1
        status: danger
        text:
          es: Resistencia muy baja; probable cortocircuito o fallo grave. NO conectar sin revisar.
          en: Very low resistance; probable short circuit or serious fault. DO NOT connect without checking.
    model_validity_rules:
      - id: validity_r_ohmic
        when: 'true'
        status: info
        text:
          es: Válido para resistencias óhmicas lineales. No aplica a componentes no lineales.
          en: Valid for linear ohmic resistances. Not applicable to nonlinear components.
    graph_rules:
      - id: graph_r
        when: 'true'
        status: info
        text:
          es: No aplica - sin gráficos.
          en: N/A - no graphs.
    likely_errors:
      - id: error_r_safety_confusion
        when: 'true'
        status: warning
        text:
          es: "Error crítico: confundir 'resistencia alta' con peligro. En eléctrica doméstica, 'resistencia baja' es el peligro."
          en: "Critical error: confusing 'high resistance' with danger. In domestic electricity, 'low resistance' is the danger."
    next_step_rules:
      - id: next_r_calculate_current
        when: 'true'
        status: info
        text:
          es: Siempre calcular la corriente resultante I = V/R antes de conectar.
          en: Always calculate resulting current I = V/R before connecting.

  E_kWh:
    magnitude_type: accumulated
    semantic_role:
      es: Energía acumulada como integral de potencia en el tiempo. Magnitud de facturación.
      en: Accumulated energy as integral of power over time. Billing magnitude.
    summary_rules:
      - id: summary_ekwh
        when: 'true'
        status: info
        text:
          es: La energía en kWh es lo que realmente se paga en la factura eléctrica.
          en: Energy in kWh is what is actually paid for in the electricity bill.
    physical_reading_rules:
      - id: physical_ekwh_cost
        when: 'true'
        status: info
        text:
          es: Multiplicar por el precio del kWh para obtener coste económico.
          en: Multiply by kWh price to obtain economic cost.
    coherence_rules:
      - id: coherence_ekwh_positive
        when: E_kWh >= 0
        status: success
        text:
          es: Energía positiva o cero, consistente con el modelo.
          en: Energy positive or zero, consistent with model.
    model_validity_rules:
      - id: validity_ekwh_constant
        when: 'true'
        status: info
        text:
          es: Asume potencia constante durante el período. Para potencia variable, integrar o promediar.
          en: Assumes constant power during the period. For variable power, integrate or average.
    graph_rules:
      - id: graph_ekwh
        when: 'true'
        status: info
        text:
          es: No aplica - sin gráficos.
          en: N/A - no graphs.
    likely_errors:
      - id: error_ekwh_units
        when: 'true'
        status: warning
        text:
          es: "Error frecuente: asegurar que P esté en kW (no W) y t en horas (no minutos) al calcular kWh."
          en: "Frequent error: ensure P is in kW (not W) and t is in hours (not minutes) when calculating kWh."
    next_step_rules:
      - id: next_ekwh_cost
        when: 'true'
        status: info
        text:
          es: Calcular coste multiplicando kWh por precio unitario de la tarifa eléctrica.
          en: Calculate cost by multiplying kWh by unit price of electricity tariff.

  P_kW:
    magnitude_type: scalar
    semantic_role:
      es: Potencia expresada en kilovatios. Magnitud auxiliar para cálculos de factura.
      en: Power expressed in kilowatts. Auxiliary magnitude for billing calculations.
    summary_rules:
      - id: summary_pkw
        when: 'true'
        status: info
        text:
          es: La potencia en kW se usa directamente en el cálculo de energía (kWh = kW × h).
          en: Power in kW is used directly in energy calculation (kWh = kW × h).
    physical_reading_rules:
      - id: physical_pkw_range
        when: 'true'
        status: info
        text:
          es: "Rango doméstico típico: 0.02 kW (standby) a 4 kW (horno, calentador)."
          en: "Typical domestic range: 0.02 kW (standby) to 4 kW (oven, heater)."
    coherence_rules:
      - id: coherence_pkw_positive
        when: P_kW >= 0
        status: success
        text:
          es: Potencia en kW positiva o cero, consistente con el modelo.
          en: Power in kW positive or zero, consistent with model.
    model_validity_rules:
      - id: validity_pkw
        when: 'true'
        status: info
        text:
          es: Asume carga resistiva pura. Factor de potencia unitario.
          en: Assumes pure resistive load. Unity power factor.
    graph_rules:
      - id: graph_pkw
        when: 'true'
        status: info
        text:
          es: No aplica - sin gráficos.
          en: N/A - no graphs.
    likely_errors:
      - id: error_pkw_units
        when: 'true'
        status: warning
        text:
          es: "Error frecuente: dividir entre 1000 para convertir W a kW antes de multiplicar por horas."
          en: "Frequent error: divide by 1000 to convert W to kW before multiplying by hours."
    next_step_rules:
      - id: next_pkw
        when: 'true'
        status: info
        text:
          es: Multiplicar por las horas de uso para obtener la energía consumida en kWh.
          en: Multiply by usage hours to obtain consumed energy in kWh.

  t_h:
    magnitude_type: parameter
    semantic_role:
      es: Tiempo de uso expresado en horas. Magnitud auxiliar para cálculo de factura.
      en: Usage time expressed in hours. Auxiliary magnitude for billing calculation.
    summary_rules:
      - id: summary_th
        when: 'true'
        status: info
        text:
          es: El tiempo en horas es el factor que multiplica la potencia para obtener kWh.
          en: Time in hours is the factor that multiplies power to obtain kWh.
    physical_reading_rules:
      - id: physical_th_range
        when: 'true'
        status: info
        text:
          es: "Un día tiene 24 h; un mes aproximadamente 720 h; un año 8760 h."
          en: "A day has 24 h; a month approximately 720 h; a year 8760 h."
    coherence_rules:
      - id: coherence_th_positive
        when: t_h >= 0
        status: success
        text:
          es: Tiempo positivo o cero, consistente con el modelo.
          en: Time positive or zero, consistent with model.
    model_validity_rules:
      - id: validity_th
        when: 'true'
        status: info
        text:
          es: Asume potencia constante durante el período t_h.
          en: Assumes constant power during the period t_h.
    graph_rules:
      - id: graph_th
        when: 'true'
        status: info
        text:
          es: No aplica - sin gráficos.
          en: N/A - no graphs.
    likely_errors:
      - id: error_th_units
        when: 'true'
        status: warning
        text:
          es: "Error frecuente: convertir minutos a horas (dividir entre 60) antes de calcular kWh."
          en: "Frequent error: convert minutes to hours (divide by 60) before calculating kWh."
    next_step_rules:
      - id: next_th
        when: 'true'
        status: info
        text:
          es: Verificar que el tiempo esté en horas antes de multiplicar por la potencia en kW.
          en: Verify that time is in hours before multiplying by power in kW.

cross_checks:
  - id: check_p_v_i_consistency
    description:
      es: Verificar que P = V × I sea consistente entre los valores calculados.
      en: Verify that P = V × I is consistent among calculated values.
    formula_check: P == V * I
    tolerance_percent: 1

error_patterns:
  - id: pattern_unit_confusion
    description:
      es: Confusión entre W y kW, o entre minutos y horas.
      en: Confusion between W and kW, or between minutes and hours.
    triggers: [P_kW, t_h, E_kWh]
    severity: warning

graph_binding:
  enabled: false
  description:
    es: Sin gráficos disponibles en este leaf.
    en: No graphs available in this leaf.

mini_graph:
  enabled: false
  preferred_type: none

output_contract:
  inline_max_length: 300
  tab_full_content: true
  fallback_language: es
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
`;export{e as default};
