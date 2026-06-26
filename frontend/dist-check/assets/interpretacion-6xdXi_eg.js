const e=`version: 2
id: interpretacion-ecuacion-del-cohete
leaf_id: ecuacion-del-cohete
nombre:
  es: Interpretación de la Ecuación del Cohete
  en: Interpretation of the Rocket Equation
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: cantidad-de-movimiento
  parent_id: sistemas-de-masa-variable
  ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/sistemas-de-masa-variable/ecuacion-del-cohete
dependencies:
  formulas:
  - dv
  - ve_from_dv
  magnitudes:
  - DeltaV
  - ve
  - m0
  - mf
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
      es: Diagnóstico de Rendimiento Propulsivo
      en: Propulsive Performance Diagnosis
  physical_reading:
    title:
      es: Análisis de la Maniobra Orbital
      en: Orbital Maneuver Analysis
  coherence:
    title:
      es: Validación de la Razón de Masas
      en: Mass Ratio Validation
  model_validity:
    title:
      es: Auditoría de Hipótesis de Tsiolkovski
      en: Tsiolkovsky Hypothesis Audit
  graph_reading:
    title:
      es: Lectura de la Curva de Masa Variable
      en: Variable Mass Curve Reading
  likely_errors:
    title:
      es: Alerta de Errores en Diseño Aeroespacial
      en: Aerospace Design Error Alert
  next_step:
    title:
      es: Optimización de Etapas y Carga Útil
      en: Staging and Payload Optimization
targets:
  DeltaV:
    summary_rules:
    - id: DeltaV_summary_pro
      when: 'true'
      status: info
      text:
        es: "El [[DeltaV]] representa el presupuesto total de cambio de velocidad disponible. Es la 'moneda de cambio' en astronáutica: cada maniobra orbital tiene un coste fijo en DeltaV que el cohete debe pagar consumiendo masa."
        en: "[[DeltaV]] represents the total available velocity change budget. It is the 'currency' in astronautics: every orbital maneuver has a fixed DeltaV cost that the rocket must pay by consuming mass."
    physical_reading_rules:
    - id: DeltaV_ve_comparison
      when: 'DeltaV > ve'
      status: success
      text:
        es: "Régimen de alta eficiencia: El cohete ha superado la velocidad de sus propios gases de escape. Esto es posible gracias a que la masa que se expulsa ya se estaba moviendo a gran velocidad antes de ser eyectada."
        en: "High efficiency regime: The rocket has exceeded its own exhaust gases' velocity. This is possible because the mass being expelled was already moving at high speed before being ejected."
    coherence_rules:
    - id: DeltaV_coherence_pro
      when: 'true'
      status: ok
      text:
        es: "El valor de DeltaV es consistente con la relación logarítmica entre la masa inicial y final."
        en: "The DeltaV value is consistent with the logarithmic relationship between initial and final mass."
    model_validity_rules:
    - id: DeltaV_gravity_loss
      when: 'true'
      status: warning
      text:
        es: "Nota de realismo: En un lanzamiento desde superficie, el DeltaV real será menor debido a las pérdidas gravitatorias y aerodinámicas no contempladas en este modelo ideal."
        en: "Realism note: In a surface launch, the real DeltaV will be lower due to gravitational and aerodynamic losses not covered in this ideal model."
    graph_rules:
    - id: DeltaV_graph_pro
      when: 'true'
      status: info
      text:
        es: "En el gráfico m(v), el DeltaV es la distancia horizontal entre los puntos m0 y mf."
        en: "In the m(v) graph, DeltaV is the horizontal distance between points m0 and mf."
    likely_errors:
    - id: error_linear_dv
      when: 'true'
      status: danger
      text:
        es: "Error de linealidad: No asumas que duplicar el combustible duplica el DeltaV. Debido al logaritmo, cada kilogramo extra de combustible es menos efectivo que el anterior (debes mover el combustible extra)."
        en: "Linearity error: Do not assume that doubling the fuel doubles the DeltaV. Due to the logarithm, every extra kilogram of fuel is less effective than the previous one (you must move the extra fuel)."
    next_step_rules:
    - id: DeltaV_next_stage
      when: 'true'
      status: tip
      text:
        es: "Si el DeltaV es insuficiente para la misión, considera el uso de etapas (staging) para desprenderse de masa estructural muerta."
        en: "If the DeltaV is insufficient for the mission, consider using stages to shed dead structural mass."

  mf:
    summary_rules:
    - id: mf_summary_pro
      when: 'true'
      status: info
      text:
        es: "La masa final [[mf]] es lo que queda tras la combustión: estructura, motores y, lo más importante, la carga útil (satélites o astronautas)."
        en: "Final mass [[mf]] is what remains after combustion: structure, engines, and most importantly, the payload (satellites or astronauts)."
    physical_reading_rules:
    - id: mf_low_payload
      when: 'mf / m0 < 0.1'
      status: warning
      text:
        es: "Razón de masa crítica: Menos del 10% del peso inicial llega al destino. Este es el 'tirano de la ecuación del cohete' que obliga a diseños extremadamente ligeros."
        en: "Critical mass ratio: Less than 10% of the initial weight reaches the destination. This is the 'tyranny of the rocket equation' that forces extremely light designs."
    coherence_rules:
    - id: mf_mass_check
      when: 'mf >= m0'
      status: error
      text:
        es: "Inconsistencia física: La masa final no puede ser mayor o igual a la inicial en un cohete térmico."
        en: "Physical inconsistency: Final mass cannot be greater than or equal to initial mass in a thermal rocket."
    model_validity_rules:
    - id: mf_validity_pro
      when: 'true'
      status: ok
      text:
        es: "Asume que la masa se pierde exclusivamente por eyección de gases a velocidad ve."
        en: "Assumes mass is lost exclusively by gas ejection at velocity ve."
    graph_rules:
    - id: mf_graph_pro
      when: 'true'
      status: info
      text:
        es: "Representa el límite inferior de la curva de masa en el tiempo o en velocidad."
        en: "Represents the lower limit of the mass curve over time or velocity."
    likely_errors:
    - id: error_mf_zero
      when: 'mf <= 0'
      status: danger
      text:
        es: "Error fatal: Un cohete con masa final cero o negativa no tiene sentido físico (no quedaría vehículo)."
        en: "Fatal error: A rocket with zero or negative final mass makes no physical sense (no vehicle would remain)."
    next_step_rules:
    - id: mf_next_structural
      when: 'true'
      status: tip
      text:
        es: "Calcula la fracción de carga útil restando el peso de la estructura seca a mf."
        en: "Calculate the payload fraction by subtracting the dry structure weight from mf."

  ve:
    summary_rules:
    - id: ve_summary_pro
      when: 'true'
      status: info
      text:
        es: "La velocidad de eyección [[ve]] es el indicador supremo de la tecnología del motor. Gases más calientes y ligeros producen una ve mayor."
        en: "Exhaust velocity [[ve]] is the supreme indicator of engine technology. Hotter and lighter gases produce a higher ve."
    physical_reading_rules:
    - id: ve_isp_relation
      when: 'true'
      status: info
      text:
        es: "Recuerda que ve está directamente relacionada con el Impulso Específico (Isp = ve / g0). Un Isp alto permite misiones más lejanas con menos combustible."
        en: "Remember that ve is directly related to Specific Impulse (Isp = ve / g0). A high Isp allows for further missions with less fuel."
    coherence_rules:
    - id: ve_coherence_pro
      when: 'true'
      status: ok
      text:
        es: "Velocidad consistente con los propulsores químicos estándar (típicamente 2000-4500 m/s)."
        en: "Velocity consistent with standard chemical propellants (typically 2000-4500 m/s)."
    model_validity_rules:
    - id: ve_validity_pro
      when: 'true'
      status: ok
      text:
        es: "Válida si se asume una velocidad de salida constante respecto al vehículo."
        en: "Valid assuming a constant exit velocity relative to the vehicle."
    graph_rules:
    - id: ve_graph_pro
      when: 'true'
      status: info
      text:
        es: "Controla la curvatura de la caída de masa; una ve mayor produce una curva más 'plana'."
        en: "Controls the curvature of the mass drop; a higher ve produces a 'flatter' curve."
    likely_errors:
    - id: error_ve_external
      when: 'true'
      status: warning
      text:
        es: "Cuidado: ve es la velocidad RESPECTO al cohete, no respecto a un observador externo en tierra."
        en: "Careful: ve is the velocity RELATIVE to the rocket, not relative to an external observer on Earth."
    next_step_rules:
    - id: ve_next_chem
      when: 'true'
      status: tip
      text:
        es: "Investiga cómo cambiar de combustible (ej. Queroseno a Hidrógeno) aumenta ve y revoluciona el diseño del cohete."
        en: "Investigate how changing fuel (e.g., Kerosene to Hydrogen) increases ve and revolutionizes rocket design."

  m0:
    summary_rules:
    - id: m0_summary
      when: 'true'
      status: info
      text:
        es: "La masa inicial [[m0]] fija el punto de partida de la maniobra: incluye estructura, carga útil y todo el combustible que se va a consumir. Un [[m0]] mayor compra más [[DeltaV]] potencial, pero solo de forma logarítmica."
        en: "Initial mass [[m0]] sets the starting point of the maneuver: it includes structure, payload, and all the fuel to be consumed. A larger [[m0]] buys more potential [[DeltaV]], but only logarithmically."
    physical_reading_rules:
    - id: m0_reading
      when: 'true'
      status: info
      text:
        es: "[[m0]] se lee como el coste de arranque: cuánta masa total debe despegar para que la maniobra sea posible dado [[mf]] y [[ve]]."
        en: "[[m0]] is read as the launch cost: how much total mass must lift off for the maneuver to be possible given [[mf]] and [[ve]]."
    coherence_rules:
    - id: m0_coherence
      when: 'true'
      status: ok
      text:
        es: "Verificar siempre que [[m0]] sea mayor que [[mf]]; si [[m0]] ≤ [[mf]], el resultado no tiene sentido físico."
        en: "Always verify that [[m0]] is greater than [[mf]]; if [[m0]] ≤ [[mf]], the result has no physical meaning."
    model_validity_rules:
    - id: m0_validity
      when: 'true'
      status: ok
      text:
        es: "El modelo es válido siempre que [[m0]] incluya la masa de propelente completa y la estructura no varíe durante la quema."
        en: "The model is valid as long as [[m0]] includes the complete propellant mass and the structure does not change during the burn."
    graph_rules:
    - id: m0_graph
      when: 'true'
      status: info
      text:
        es: "En la curva [[DeltaV]] vs. razón de masas, [[m0]]/[[mf]] es el argumento del logaritmo. Aumentar [[m0]] desplaza el punto operativo hacia la derecha sobre la curva."
        en: "On the [[DeltaV]] vs. mass-ratio curve, [[m0]]/[[mf]] is the argument of the logarithm. Increasing [[m0]] shifts the operating point to the right along the curve."
    likely_errors:
    - id: m0_error_fuel_only
      when: 'true'
      status: warning
      text:
        es: "Error frecuente: usar solo la masa de combustible como [[m0]] y olvidar la estructura y carga útil. [[m0]] es la masa total al inicio del quemado."
        en: "Common error: using only the fuel mass as [[m0]] and forgetting structure and payload. [[m0]] is the total mass at the start of the burn."
    next_step_rules:
    - id: m0_next
      when: 'true'
      status: tip
      text:
        es: "Si [[m0]] resulta imprácticamente grande, considerar cohetes multietapa o mejorar [[ve]] antes de escalar la masa."
        en: "If [[m0]] turns out impractically large, consider multi-stage rockets or improving [[ve]] before scaling the mass."
`;export{e as default};
