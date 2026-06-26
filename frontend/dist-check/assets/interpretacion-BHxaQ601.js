const e=`version: 5
id: interpretacion-ecuacion-de-bernoulli
leaf_id: ecuacion-de-bernoulli
nombre:
  es: Interpretación de la Ecuación de Bernoulli
  en: Bernoulli's Equation Interpretation
scope: mecanica-fluidos

dependencies:
  magnitudes: [p, rho, v, g, z, q, H]
  formulas: [head, q_dinamica]

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
      es: Resumen de Energía
      en: Energy Summary
  physical_reading:
    title:
      es: Lectura Física Profunda
      en: Deep Physical Reading
  coherence:
    title:
      es: Análisis de Coherencia
      en: Coherence Analysis
  model_validity:
    title:
      es: Validez del Modelo
      en: Model Validity
  graph_reading:
    title:
      es: Interpretación Gráfica
      en: Graph Interpretation
  likely_errors:
    title:
      es: Errores Comunes Detectados
      en: Common Errors Detected
  next_step:
    title:
      es: Siguiente Paso Sugerido
      en: Suggested Next Step

targets:
  p:
    summary_rules:
      - id: rule-p-summary
        when: "p > 0"
        status: info
        text:
          es: "Este valor indica que la presión estática [[p]] contribuye a la carga total del sistema."
          en: "This value indicates that the static pressure [[p]] contributes to the total system head."
    physical_reading_rules:
      - id: rule-p-reading
        when: "p < 101325"
        status: warning
        text:
          es: "La presión es menor que la atmosférica estándar; esto significa que hay una succión relativa en este punto."
          en: "The pressure is lower than standard atmospheric pressure; this means there is relative suction at this point."
    coherence_rules:
      - id: rule-p-neg
        when: "p < 0"
        status: error
        text:
          es: "ERROR: Presión absoluta negativa detectada. Revisa los datos, el fluido podría estar cavitando o el modelo no es válido."
          en: "ERROR: Negative absolute pressure detected. Check data; the fluid might be cavitating or the model is invalid."
    model_validity_rules:
      - id: rule-p-valid
        when: "true"
        status: info
        text:
          es: "Se asume que la presión se mide en una línea de corriente estable."
          en: "It is assumed that pressure is measured along a stable streamline."
    graph_rules:
      - id: rule-p-graph
        when: "true"
        status: info
        text:
          es: "En el gráfico, [[p]] define la altura de la línea piezométrica respecto al centro de la tubería."
          en: "In the graph, [[p]] defines the height of the hydraulic grade line relative to the pipe center."
    likely_errors:
      - id: rule-p-error
        when: "true"
        status: warning
        text:
          es: "Asegúrate de no estar confundiendo presión manométrica con absoluta."
          en: "Ensure you are not confusing gauge pressure with absolute pressure."
    next_step_rules:
      - id: rule-p-next
        when: "true"
        status: info
        text:
          es: "Compara esta presión con la de otros puntos para ver el gradiente de presión."
          en: "Compare this pressure with other points to see the pressure gradient."

  v:
    summary_rules:
      - id: rule-v-summary
        when: "v > 0"
        status: info
        text:
          es: "Este valor indica que el fluido se mueve a una velocidad [[v]], aportando energía cinética."
          en: "This value indicates that the fluid is moving at a velocity [[v]], contributing kinetic energy."
    physical_reading_rules:
      - id: rule-v-fast
        when: "v > 50"
        status: warning
        text:
          es: "A velocidades altas, los efectos de fricción (que Bernoulli ignora) se vuelven significativos."
          en: "At high velocities, friction effects (which Bernoulli ignores) become significant."
    coherence_rules:
      - id: rule-v-coherence
        when: "true"
        status: info
        text:
          es: "La velocidad es consistente con la carga de velocidad calculada."
          en: "Velocity is consistent with the calculated velocity head."
    model_validity_rules:
      - id: rule-v-mach
        when: "v > 100"
        status: warning
        text:
          es: "Si el fluido es gas, podrías estar acercándote al régimen compresible."
          en: "If the fluid is gas, you might be approaching the compressible regime."
    graph_rules:
      - id: rule-v-graph
        when: "true"
        status: info
        text:
          es: "La carga de velocidad separa la línea piezométrica de la línea de energía total."
          en: "The velocity head separates the hydraulic grade line from the total energy line."
    likely_errors:
      - id: rule-v-error
        when: "true"
        status: warning
        text:
          es: "No olvides elevar al cuadrado la velocidad en la ecuación."
          en: "Do not forget to square the velocity in the equation."
    next_step_rules:
      - id: rule-v-next
        when: "true"
        status: info
        text:
          es: "Usa la ecuación de continuidad para ver cómo cambia la velocidad en estrechamientos."
          en: "Use the continuity equation to see how velocity changes in narrowings."

  z:
    summary_rules:
      - id: rule-z-summary
        when: "true"
        status: info
        text:
          es: "La elevación [[z]] determina la energía potencial gravitatoria en este punto."
          en: "Elevation [[z]] determines the gravitational potential energy at this point."
    physical_reading_rules:
      - id: rule-z-ref
        when: "z == 0"
        status: info
        text:
          es: "Este punto se ha tomado como el nivel de referencia (datum)."
          en: "This point has been taken as the reference level (datum)."
    coherence_rules:
      - id: rule-z-coherence
        when: "true"
        status: info
        text:
          es: "La altura es consistente con la geometría del sistema."
          en: "Height is consistent with the system geometry."
    model_validity_rules:
      - id: rule-z-validity
        when: "true"
        status: info
        text:
          es: "La altura se mide verticalmente respecto a la gravedad."
          en: "Height is measured vertically relative to gravity."
    graph_rules:
      - id: rule-z-graph
        when: "true"
        status: info
        text:
          es: "[[z]] marca la posición física de la línea de corriente en el gráfico."
          en: "[[z]] marks the physical position of the streamline on the graph."
    likely_errors:
      - id: rule-z-error
        when: "true"
        status: warning
        text:
          es: "Verifica que el datum sea el mismo para todos los puntos comparados."
          en: "Verify that the datum is the same for all compared points."
    next_step_rules:
      - id: rule-z-next
        when: "true"
        status: info
        text:
          es: "Observa cómo el fluido pierde presión al ganar altura."
          en: "Notice how the fluid loses pressure as it gains height."

  rho:
    summary_rules:
      - id: rule-rho-summary
        when: "true"
        status: info
        text:
          es: "La densidad [[rho]] es constante, lo cual indica que el fluido es incompresible."
          en: "Density [[rho]] is constant, which indicates that the fluid is incompressible."
    physical_reading_rules:
      - id: rule-rho-liquid
        when: "rho > 500"
        status: info
        text:
          es: "El fluido se comporta como un líquido denso."
          en: "The fluid behaves like a dense liquid."
    coherence_rules:
      - id: rule-rho-coherence
        when: "true"
        status: info
        text:
          es: "Densidad verificada dentro de rangos físicos normales."
          en: "Density verified within normal physical ranges."
    model_validity_rules:
      - id: rule-rho-const
        when: "true"
        status: info
        text:
          es: "Bernoulli solo aplica si [[rho]] no cambia entre puntos."
          en: "Bernoulli only applies if [[rho]] does not change between points."
    graph_rules:
      - id: rule-rho-graph
        when: "true"
        status: info
        text:
          es: "La densidad escala los términos de presión en el perfil energético."
          en: "Density scales the pressure terms in the energy profile."
    likely_errors:
      - id: rule-rho-error
        when: "true"
        status: warning
        text:
          es: 'No confundas densidad con peso específico ($\\gamma = \\rho g$).'
          en: 'Do not confuse density with specific weight ($\\gamma = \\rho g$).'
    next_step_rules:
      - id: rule-rho-next
        when: "true"
        status: info
        text:
          es: "Revisa cómo cambiaría el sistema con un fluido más ligero."
          en: "Review how the system would change with a lighter fluid."

  H:
    summary_rules:
      - id: rule-h-summary
        when: "true"
        status: info
        text:
          es: "La carga total [[H]] representa la energía mecánica total disponible por unidad de peso."
          en: "Total head [[H]] represents the total mechanical energy available per unit weight."
    physical_reading_rules:
      - id: rule-h-const
        when: "true"
        status: info
        text:
          es: "En un fluido ideal, [[H]] debe ser la misma en cualquier punto de la línea de corriente."
          en: "In an ideal fluid, [[H]] must be the same at any point along the streamline."
    coherence_rules:
      - id: rule-h-coherence
        when: "true"
        status: info
        text:
          es: "Verificado que la suma de cargas coincide con el valor total."
          en: "Verified that the sum of heads matches the total value."
    model_validity_rules:
      - id: rule-h-loss
        when: "true"
        status: info
        text:
          es: "Si el fluido fuera real, [[H]] disminuiría en el sentido del flujo debido a pérdidas."
          en: "If the fluid were real, [[H]] would decrease in the flow direction due to losses."
    graph_rules:
      - id: rule-h-graph
        when: "true"
        status: info
        text:
          es: "La línea de energía total (TEL) es la cota superior horizontal del gráfico."
          en: "The total energy line (TEL) is the horizontal top boundary of the graph."
    likely_errors:
      - id: rule-h-error
        when: "true"
        status: warning
        text:
          es: "Olvidar un término (presión, velocidad o altura) falseará la carga total."
          en: "Forgetting one term (pressure, velocity, or height) will fake the total head."
    next_step_rules:
      - id: rule-h-next
        when: "true"
        status: info
        text:
          es: "Calcula la potencia del fluido usando la carga total."
          en: "Calculate fluid power using the total head."

  q:
    summary_rules:
      - id: rule-q-summary
        when: "true"
        status: info
        text:
          es: "La presión dinámica [[q]] significa que parte de la energía está en forma de movimiento."
          en: "Dynamic pressure [[q]] means part of the energy is in the form of motion."
    physical_reading_rules:
      - id: rule-q-v
        when: "true"
        status: info
        text:
          es: "Un aumento en la velocidad se traduce directamente en un aumento cuadrático de [[q]]."
          en: "An increase in velocity translates directly into a quadratic increase in [[q]]."
    coherence_rules:
      - id: rule-q-coherence
        when: "true"
        status: info
        text:
          es: "Presión dinámica calculada correctamente a partir de la velocidad."
          en: "Dynamic pressure calculated correctly from velocity."
    model_validity_rules:
      - id: rule-q-valid
        when: "true"
        status: info
        text:
          es: "Esta magnitud es fundamental para el estudio de fuerzas aerodinámicas."
          en: "This magnitude is fundamental for the study of aerodynamic forces."
    graph_rules:
      - id: rule-q-graph
        when: "true"
        status: info
        text:
          es: "Visualmente, [[q]] es el espacio entre la línea piezométrica y la de energía total."
          en: "Visually, [[q]] is the space between the hydraulic grade line and the total energy line."
    likely_errors:
      - id: rule-q-error
        when: "true"
        status: warning
        text:
          es: "No asumas que la presión dinámica es la presión total; solo es una parte."
          en: "Do not assume dynamic pressure is total pressure; it is only a part."
    next_step_rules:
      - id: rule-q-next
        when: "true"
        status: info
        text:
          es: "Estudia la presión de estancamiento sumando [[p]] y [[q]]."
          en: "Study stagnation pressure by adding [[p]] and [[q]]."

  g:
    summary_rules:
      - id: rule-g-summary
        when: "true"
        status: info
        text:
          es: "La gravedad [[g]] significa que el peso del fluido afecta al balance energético."
          en: "Gravity [[g]] means that the fluid's weight affects the energy balance."
    physical_reading_rules:
      - id: rule-g-reading
        when: "true"
        status: info
        text:
          es: "Valor estándar de aceleración gravitatoria terrestre aplicado."
          en: "Standard Earth gravitational acceleration value applied."
    coherence_rules:
      - id: rule-g-coherence
        when: "true"
        status: info
        text:
          es: "Gravedad consistente con un entorno terrestre."
          en: "Gravity consistent with an Earth environment."
    model_validity_rules:
      - id: rule-g-validity
        when: "true"
        status: info
        text:
          es: "Sin gravedad, los términos de altura [[z]] no afectarían a la presión."
          en: "Without gravity, height terms [[z]] would not affect pressure."
    graph_rules:
      - id: rule-g-graph
        when: "true"
        status: info
        text:
          es: "La gravedad define la pendiente de la presión hidrostática."
          en: "Gravity defines the slope of hydrostatic pressure."
    likely_errors:
      - id: rule-g-error
        when: "true"
        status: warning
        text:
          es: "Asegúrate de usar 9.81 m/s² si no se especifica otro valor."
          en: "Ensure you use 9.81 m/s² if no other value is specified."
    next_step_rules:
      - id: rule-g-next
        when: "true"
        status: info
        text:
          es: "Investiga cómo cambiaría la presión en la Luna con menor gravedad."
          en: "Investigate how pressure would change on the Moon with lower gravity."

summary:
  es: "La Ecuación de Bernoulli indica que la energía total por unidad de volumen se conserva a lo largo de un flujo ideal."
  en: "Bernoulli's Equation indicates that the total energy per unit volume is conserved throughout an ideal flow."
physical_reading:
  es: "El intercambio entre presión [[p]] y velocidad [[v]] significa que el fluido 'paga' su aceleración con una caída de presión."
  en: "The exchange between pressure [[p]] and velocity [[v]] means the fluid 'pays' for its acceleration with a pressure drop."
coherence:
  es: "El sistema es coherente si la suma de presión estática, dinámica e hidrostática permanece constante."
  en: "The system is coherent if the sum of static, dynamic, and hydrostatic pressure remains constant."
model_validity:
  es: "Este modelo asume fluido incompresible y sin fricción; esto significa que sobreestima la presión en tuberías reales."
  en: "This model assumes incompressible and frictionless fluid; this means it overestimates pressure in real pipes."
graph_reading:
  es: "La visualización muestra la Línea de Energía Total (TEL) como una constante horizontal sobre las variaciones locales."
  en: "The visualization shows the Total Energy Line (TEL) as a horizontal constant above local variations."
likely_errors:
  es: "El error más común es no usar un nivel de referencia común para [[z]] o ignorar la densidad [[rho]]."
  en: "The most common error is not using a common reference level for [[z]] or ignoring density [[rho]]."
next_step:
  es: "Introduce pérdidas de carga para pasar del modelo ideal de Bernoulli al modelo real de Darcy-Weisbach."
  en: "Introduce head losses to move from the ideal Bernoulli model to the real Darcy-Weisbach model."
`;export{e as default};
