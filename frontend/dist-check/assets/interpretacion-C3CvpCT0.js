const e=`version: 5
id: aplicaciones-ingenieriles-interp
leaf_id: aplicaciones-ingenieriles
scope: local
nombre:
  es: Análisis de Potencia y Eficiencia
  en: Power and Efficiency Analysis

output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step

result_blocks:
  summary:
    title:
      es: Resumen de Potencia
      en: Power Summary
  physical_reading:
    title:
      es: Significado Físico
      en: Physical Meaning
  coherence:
    title:
      es: Coherencia Energética
      en: Energy Coherence
  model_validity:
    title:
      es: Validez del Diseño
      en: Design Validity
  graph_reading:
    title:
      es: Interpretación del Gráfico
      en: Graph Interpretation
  likely_errors:
    title:
      es: Errores Probables
      en: Likely Errors
  next_step:
    title:
      es: Siguientes Pasos
      en: Next Steps

dependencies:
  requires_magnitudes: true
  requires_formulas: true
  supports_graph_binding: true
  magnitudes: [P_in, P_util, Q, dp, eta]
  formulas: [potencia_bomba, eficiencia]

targets:
  P_util:
    summary_rules:
      - id: putil-val
        when: P_util >= 0
        status: success
        text:
          es: "La potencia hidráulica neta entregada al fluido [[P_util]] es de {{P_util}} W. Este valor representa el trabajo por segundo que efectivamente se traduce en presión y caudal."
          en: "The net hydraulic power delivered to the fluid [[P_util]] is {{P_util}} W. This value represents the work per second that effectively translates into pressure and flow."
    physical_reading_rules:
      - id: putil-meaning
        when: P_util > 10000
        status: info
        text:
          es: "Como consecuencia directa de la alta carga del sistema, la potencia útil supera los 10 kW, lo que clasifica a este sistema dentro de la escala industrial pesada."
          en: "As a direct consequence of the high system load, the useful power exceeds 10 kW, classifying this system within the heavy industrial scale."
    coherence_rules:
      - id: putil-coh
        when: P_util > P_in
        status: error
        text:
          es: "Incoherencia detectada: La potencia útil no puede superar la potencia de entrada suministrada."
          en: "Incoherence detected: Useful power cannot exceed the supplied input power."
    model_validity_rules:
      - id: putil-valid
        when: P_util >= 0
        status: success
        text:
          es: "Cálculo basado en flujo incompresible estacionario."
          en: "Calculation based on steady incompressible flow."
    graph_rules:
      - id: putil-graph
        when: P_util > 0
        status: success
        text:
          es: "La magnitud [[P_util]] define la altura de la curva de potencia en el gráfico coordenado."
          en: "The magnitude [[P_util]] defines the height of the power curve in the coordinate graph."
    likely_errors:
      - id: err-putil-units
        when: P_util > 0
        status: warning
        text:
          es: "Cuidado: Asegúrese de que el caudal [[Q]] esté en m³/s para obtener un resultado correcto en Vatios."
          en: "Caution: Ensure that the flow rate [[Q]] is in m³/s to obtain a correct result in Watts."
    next_step_rules:
      - id: next-putil
        when: P_util > 0
        status: info
        text:
          es: "Pruebe a variar la eficiencia [[eta]] para ver cómo impacta en el costo energético [[P_in]]."
          en: "Try varying the efficiency [[eta]] to see how it impacts the energy cost [[P_in]]."

  P_in:
    summary_rules:
      - id: pin-val
        when: P_in >= 0
        status: info
        text:
          es: "La potencia de entrada [[P_in]] requerida es de {{P_in}} W. Este es el consumo total que debe suministrar el motor eléctrico."
          en: "The required input power [[P_in]] is {{P_in}} W. This is the total consumption that the electric motor must provide."
    physical_reading_rules:
      - id: pin-meaning
        when: P_in > 0
        status: info
        text:
          es: "Representa el coste energético total del proceso, incluyendo todas las ineficiencias del motor y la bomba."
          en: "It represents the total energy cost of the process, including all motor and pump inefficiencies."
    coherence_rules:
      - id: pin-coh
        when: P_in < P_util
        status: error
        text:
          es: "Incoherencia: La potencia consumida no puede ser menor que la potencia útil."
          en: "Incoherence: Consumed power cannot be less than useful power."
    model_validity_rules:
      - id: pin-valid
        when: P_in > 0
        status: success
        text:
          es: "Consumo de energía dentro de los parámetros de diseño mecánico."
          en: "Energy consumption within mechanical design parameters."
    graph_rules:
      - id: pin-graph
        when: P_in > 0
        status: success
        text:
          es: "Se sitúa por encima de la curva de potencia útil debido a las pérdidas energéticas."
          en: "It is located above the useful power curve due to energy losses."
    likely_errors:
      - id: err-pin-concept
        when: P_in > 0
        status: warning
        text:
          es: "Error: No confundir la potencia de entrada con la potencia nominal máxima del motor."
          en: "Error: Do not confuse input power with the motor's maximum rated power."
    next_step_rules:
      - id: next-pin
        when: P_in > 0
        status: info
        text:
          es: "Compare este valor con la capacidad de su red eléctrica para asegurar la viabilidad."
          en: "Compare this value with your electrical grid capacity to ensure feasibility."

  Q:
    summary_rules:
      - id: q-val
        when: Q >= 0
        status: info
        text:
          es: "El caudal operativo [[Q]] es de {{Q}} m³/s. Define la rapidez volumétrica con la que se desplaza el fluido."
          en: "The operating flow rate [[Q]] is {{Q}} m³/s. It defines the volumetric speed at which the fluid moves."
    physical_reading_rules:
      - id: q-meaning
        when: Q > 0.1
        status: info
        text:
          es: "Caudal elevado: típico de tuberías de gran diámetro o sistemas de trasvase masivo."
          en: "High flow rate: typical of large-diameter pipes or massive transfer systems."
    coherence_rules:
      - id: q-coh
        when: Q < 0
        status: error
        text:
          es: "Error: El caudal volumétrico debe ser un valor no negativo."
          en: "Error: Volumetric flow rate must be a non-negative value."
    model_validity_rules:
      - id: q-valid
        when: Q > 1
        status: warning
        text:
          es: "Precaución: Caudales extremadamente altos pueden inducir regímenes turbulentos severos no modelados linealmente."
          en: "Caution: Extremely high flow rates can induce severe turbulent regimes not linearly modeled."
    graph_rules:
      - id: q-graph
        when: Q > 0
        status: success
        text:
          es: "Representa el eje horizontal de la curva característica en el gráfico coordenado."
          en: "Represents the horizontal axis of the characteristic curve in the coordinate graph."
    likely_errors:
      - id: err-q-units
        when: Q > 0
        status: warning
        text:
          es: "Aviso: Verifique la conversión de litros/minuto a metros cúbicos/segundo."
          en: "Warning: Verify the conversion from liters/minute to cubic meters/second."
    next_step_rules:
      - id: next-q
        when: Q > 0
        status: info
        text:
          es: "Observe cómo al duplicar el caudal, la demanda de potencia útil [[P_util]] también se duplica linealmente."
          en: "Observe how by doubling the flow rate, the useful power demand [[P_util]] also doubles linearly."

  eta:
    summary_rules:
      - id: eta-val
        when: eta > 0
        status: success
        text:
          es: "La eficiencia global del sistema es del {{eta * 100}}%. Esto indica qué parte de la energía consumida se aprovecha realmente."
          en: "The overall system efficiency is {{eta * 100}}%. This indicates what portion of the consumed energy is actually utilized."
    physical_reading_rules:
      - id: eta-meaning
        when: eta < 0.5
        status: warning
        text:
          es: "La eficiencia es baja (menor al 50%), lo que sugiere pérdidas excesivas por fricción o un diseño inadecuado para este punto de operación."
          en: "The efficiency is low (less than 50%), suggesting excessive friction losses or an inadequate design for this operating point."
    coherence_rules:
      - id: eta-coh
        when: eta > 1
        status: error
        text:
          es: "Error: La eficiencia no puede ser mayor a 1 (100%) en una máquina real."
          en: "Error: Efficiency cannot be greater than 1 (100%) in a real machine."
    model_validity_rules:
      - id: eta-valid
        when: eta > 0.95
        status: warning
        text:
          es: "Eficiencia extremadamente alta. Verifique que no se han omitido las pérdidas de carga en las tuberías."
          en: "Extremely high efficiency. Verify that pipe head losses have not been omitted."
    graph_rules:
      - id: eta-graph
        when: eta > 0
        status: success
        text:
          es: "La eficiencia determina la separación entre las curvas de potencia de entrada y útil."
          en: "Efficiency determines the separation between input and useful power curves."
    likely_errors:
      - id: err-eta-concept
        when: eta > 0
        status: warning
        text:
          es: "Fallo: No confundir rendimiento con velocidad de operación."
          en: "Failure: Do not confuse performance with operating speed."
    next_step_rules:
      - id: next-eta
        when: eta > 0
        status: info
        text:
          es: "Investigue cómo mejorar el diseño hidráulico para acercarse al punto de máxima eficiencia."
          en: "Investigate how to improve hydraulic design to approach the best efficiency point."

  dp:
    summary_rules:
      - id: dp-val
        when: dp >= 0
        status: success
        text:
          es: "El incremento de presión [[dp]] generado es de {{dp}} Pa. Esto permite vencer la altura manométrica del sistema."
          en: "The pressure increase [[dp]] generated is {{dp}} Pa. This allows overcoming the system's manometric head."
    physical_reading_rules:
      - id: dp-meaning
        when: dp > 500000
        status: info
        text:
          es: "Presión elevada: se requiere una bomba de alta carga para vencer esta resistencia."
          en: "High pressure: a high-head pump is required to overcome this resistance."
    coherence_rules:
      - id: dp-coh
        when: dp == 0 and Q > 0
        status: warning
        text:
          es: "Aviso: Sin diferencia de presión, el flujo real no podría mantenerse contra la fricción en una tubería larga."
          en: "Warning: Without pressure difference, real flow could not be maintained against friction in a long pipe."
    model_validity_rules:
      - id: dp-valid
        when: dp > 0
        status: success
        text:
          es: "Incremento de presión consistente con bombeo estándar."
          en: "Pressure increase consistent with standard pumping."
    graph_rules:
      - id: dp-graph
        when: dp > 0
        status: success
        text:
          es: "La [[dp]] es la pendiente de la relación potencia-caudal en este modelo simplificado."
          en: "The [[dp]] is the slope of the power-flow relationship in this simplified model."
    likely_errors:
      - id: err-dp-bar
        when: dp > 0
        status: warning
        text:
          es: "Aviso: No use bares en la fórmula de potencia; use Pascales."
          en: "Warning: Do not use bars in the power formula; use Pascals."
    next_step_rules:
      - id: next-dp
        when: dp > 0
        status: info
        text:
          es: "Observe cómo el aumento de presión impacta linealmente en la demanda de potencia."
          en: "Observe how increasing pressure linearly impacts power demand."

guidance:
  es: Ajuste el caudal y la presión para ver cuánta potencia útil se entrega al fluido y cómo varía la eficiencia.
  en: Adjust the flow and pressure to see how much useful power is delivered to the fluid and how efficiency varies.
physical_summary:
  es: Las aplicaciones ingenieriles gestionan la transformación de energía mecánica en hidráulica bajo criterios de eficiencia real.
  en: Engineering applications manage the transformation of mechanical energy into hydraulic energy under real efficiency criteria.
didactic_analysis:
  es: Este módulo enfatiza el balance de potencia y la importancia del rendimiento en el diseño industrial.
  en: This module emphasizes power balance and the importance of performance in industrial design.
`;export{e as default};
