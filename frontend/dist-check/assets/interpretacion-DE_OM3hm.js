const e=`version: v5
id: interpretacion_flujo_energia
leaf_id: flujo-de-energia
nombre:
  es: Interpretación del flujo de energía
  en: Energy flux interpretation
scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: energia-y-transporte
  parent_id: energia-y-transporte
  ruta_relativa: fisica-clasica/ondas/energia-y-transporte/flujo-de-energia

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es:
      summary: Resumen
      physical_reading: Lectura física
      coherence: Coherencia
      model_validity: Validez del modelo
      graph_reading: Lectura gráfica
      likely_errors: Errores probables
      next_step: Siguiente paso
    en:
      summary: Summary
      physical_reading: Physical reading
      coherence: Coherence
      model_validity: Model validity
      graph_reading: Graph reading
      likely_errors: Likely errors
      next_step: Next step
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_sections: 2
    max_rules_per_section: 3

dependencies:
  formulas:
    - flujo_energia_densidad
    - flujo_energia_cuerda
    - potencia_desde_flujo
  magnitudes:
    - S_flujo
    - P_onda
    - u_energia
    - v
    - A
    - A_seccion
    - mu
    - omega
    - lambda

global_context:
  physical_domain:
    es: Ondas progresivas en medios mecánicos unidimensionales y transporte energético ondulatorio.
    en: Progressive waves in one-dimensional mechanical media and wave energy transport.
  axis_convention:
    es: El flujo positivo indica transporte de energía en el sentido positivo del eje x.
    en: Positive flux indicates energy transport in the positive x-axis direction.
  standard_assumptions:
    - Ondas armónicas de pequeña amplitud
    - Medios no disipativos
    - Propagación unidimensional
  standard_warnings:
    - "En medios reales, el flujo disminuye con la distancia debido a disipación"
    - "La reflexión en extremos puede crear ondas estacionarias modificando el flujo neto"

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
    enabled: true
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
  S_flujo:
    magnitude_type: flux_density
    semantic_role:
      es: Densidad de flujo de energía - indica cuánta potencia fluye por unidad de área perpendicular a la propagación.
      en: Energy flux density - indicates how much power flows per unit area perpendicular to propagation.
    next_step_rules:
      - id: sf_next_check_potencia
        when: "true"
        status: ok
        text:
          es: "Comprueba la potencia total [[P_onda]] multiplicando [[S_flujo]] por el área perpendicular para ver el transporte energético total."
          en: "Check the total power [[P_onda]] by multiplying [[S_flujo]] by the perpendicular area to see total energy transport."
      - id: sf_next_verify_densidad
        when: "true"
        status: ok
        text:
          es: "Verifica que la densidad de energía [[u_energia]] sea consistente con el flujo calculado mediante [[v]]."
          en: "Verify that energy density [[u_energia]] is consistent with calculated flux via [[v]]."
    summary_rules:
      - id: sf_summary_positive
        when: "S_flujo > 0"
        status: ok
        text:
          es: "[[S_flujo]] indica transporte activo de energía en la dirección de propagación de la onda. El flujo positivo describe energía que avanza desde la fuente hacia el receptor."
          en: "[[S_flujo]] indicates active energy transport in the wave propagation direction. Positive flux describes energy advancing from source to receiver."
      - id: sf_summary_zero
        when: "S_flujo == 0"
        status: warning
        text:
          es: "Flujo nulo indica ausencia de transporte neto. Esto ocurre en ondas estacionarias en nodos o cuando no hay propagación efectiva."
          en: "Zero flux indicates absence of net transport. This occurs at nodes in standing waves or when there is no effective propagation."
      - id: sf_summary_default
        when: "true"
        status: ok
        text:
          es: "El flujo de energía describe cuánta potencia atraviesa cada metro cuadrado perpendicular a la propagación. Depende de la densidad de energía y la velocidad de propagación."
          en: "Energy flux describes how much power crosses each square meter perpendicular to propagation. It depends on energy density and propagation velocity."
    physical_reading_rules:
      - id: sf_reading_high_flux
        when: "S_flujo > 1000"
        status: ok
        text:
          es: "Flujo elevado indica transporte energético intenso. Verifica que el medio pueda soportar esta intensidad sin dañarse ni entrar en régimen no lineal."
          en: "High flux indicates intense energy transport. Verify that the medium can support this intensity without damage or entering nonlinear regime."
      - id: sf_reading_low_flux
        when: "S_flujo < 0.001"
        status: ok
        text:
          es: "Flujo muy bajo sugiere onda débil o muy alejada de la fuente. Considera si la señal será detectable sobre el ruido de fondo."
          en: "Very low flux suggests weak wave or far from source. Consider whether signal will be detectable over background noise."
      - id: sf_reading_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[S_flujo]] representa la intensidad energética local. A mayor flujo, más energía transporta la onda por unidad de tiempo y área."
          en: "The value of [[S_flujo]] represents local energy intensity. Higher flux means more energy transported by the wave per unit time and area."
    coherence_rules:
      - id: sf_coherence_check_velocity
        when: "abs(v) < 0.01"
        status: error
        text:
          es: "Velocidad de propagación extremadamente baja. Verifica el valor de [[v]] ya que el flujo depende directamente de ella."
          en: "Extremely low propagation velocity. Check the value of [[v]] as flux depends directly on it."
      - id: sf_coherence_positive_check
        when: "S_flujo < 0"
        status: warning
        text:
          es: "Flujo negativo detectado. Esto es físicamente válido si describe dirección opuesta, pero verifica que sea intencional."
          en: "Negative flux detected. This is physically valid if describing opposite direction, but verify it is intentional."
      - id: sf_coherence_default
        when: "true"
        status: ok
        text:
          es: "Coherencia verificada: el flujo es consistente con las magnitudes de entrada."
          en: "Coherence verified: flux is consistent with input magnitudes."
    model_validity_rules:
      - id: sf_validity_lineal
        when: "A > 0.1"
        status: warning
        text:
          es: "Amplitud elevada detectada. El modelo lineal puede estar en el límite de validez. Efectos no lineales podrían modificar el flujo real."
          en: "High amplitude detected. Linear model may be at validity limit. Nonlinear effects could modify actual flux."
      - id: sf_validity_disipacion
        when: "true"
        status: ok
        text:
          es: "El modelo asume medio no disipativo. En distancias grandes, la disipación real reducirá el flujo respecto al valor calculado."
          en: "Model assumes non-dissipative medium. At large distances, real dissipation will reduce flux compared to calculated value."
      - id: sf_validity_default
        when: "true"
        status: ok
        text:
          es: "Modelo válido para ondas armónicas de pequeña amplitud en medios uniformes."
          en: "Model valid for small-amplitude harmonic waves in uniform media."
    graph_rules:
      - id: sf_graph_direction
        when: "S_flujo > 0"
        status: ok
        text:
          es: "En el gráfico, las flechas de flujo deben apuntar en la dirección de propagación positiva. Su longitud proporcional indica magnitud."
          en: "In the graph, flux arrows should point in the positive propagation direction. Their proportional length indicates magnitude."
      - id: sf_graph_envelope
        when: "true"
        status: ok
        text:
          es: "La envolvente de la onda visualiza la amplitud, que controla el flujo cuadráticamente. Puntos de máxima amplitud corresponden a máximo flujo local."
          en: "The wave envelope visualizes amplitude, which controls flux quadratically. Points of maximum amplitude correspond to maximum local flux."
      - id: sf_graph_default
        when: "true"
        status: ok
        text:
          es: "El gráfico muestra la relación entre la forma de la onda y su capacidad de transportar energía."
          en: "The graph shows the relationship between wave shape and its capacity to transport energy."
    likely_errors:
      - id: sf_error_confusion_densidad
        when: "true"
        status: warning
        text:
          es: "Error típico: confundir flujo [[S_flujo]] con densidad de energía [[u_energia]]. El flujo es potencia por área, la densidad es energía por volumen."
          en: "Typical error: confusing flux [[S_flujo]] with energy density [[u_energia]]. Flux is power per area, density is energy per volume."
      - id: sf_error_omega_vs_f
        when: "true"
        status: warning
        text:
          es: "Error común: usar frecuencia f en Hz en lugar de ω en rad/s. Recuerda: ω = 2πf. Usar f directamente introduce error de factor 4π²."
          en: "Common error: using frequency f in Hz instead of ω in rad/s. Remember: ω = 2πf. Using f directly introduces error by factor 4π²."
      - id: sf_error_default
        when: "true"
        status: ok
        text:
          es: "Verifica siempre las unidades: el flujo debe estar en W/m²."
          en: "Always verify units: flux should be in W/m²."

  P_onda:
    magnitude_type: power
    semantic_role:
      es: Potencia total transportada por la onda a través de una sección perpendicular.
      en: Total power transported by the wave through a perpendicular section.
    next_step_rules:
      - id: po_next_eficiencia
        when: "true"
        status: ok
        text:
          es: "Evalúa la eficiencia del transporte comparando la potencia emitida con la recibida a cierta distancia."
          en: "Evaluate transport efficiency by comparing emitted power with power received at a certain distance."
      - id: po_next_balance
        when: "true"
        status: ok
        text:
          es: "Realiza un balance energético considerando todas las potencias de entrada y salida del sistema."
          en: "Perform an energy balance considering all input and output powers of the system."
    summary_rules:
      - id: po_summary_high
        when: "P_onda > 10000"
        status: ok
        text:
          es: "[[P_onda]] indica potencia de onda elevada. El sistema transporta energía a ritmo intenso, relevante para aplicaciones de alta intensidad."
          en: "[[P_onda]] indicates high wave power. The system transports energy at intense rate, relevant for high-intensity applications."
      - id: po_summary_low
        when: "P_onda < 1"
        status: ok
        text:
          es: "Potencia baja sugiere onda débil o área de sección pequeña. Considera aumentar la amplitud o el área interceptada."
          en: "Low power suggests weak wave or small cross-sectional area. Consider increasing amplitude or intercepted area."
      - id: po_summary_default
        when: "true"
        status: ok
        text:
          es: "La potencia [[P_onda]] describe el ritmo total de transferencia energética a través de la sección considerada."
          en: "Power [[P_onda]] describes the total rate of energy transfer through the considered section."
    physical_reading_rules:
      - id: po_reading_magnitude
        when: "true"
        status: ok
        text:
          es: "El valor representa energía por segundo que atraviesa la sección. A mayor potencia, mayor capacidad de realizar trabajo o calentar el receptor."
          en: "The value represents energy per second crossing the section. Higher power means greater capacity to do work or heat the receiver."
      - id: po_reading_default
        when: "true"
        status: ok
        text:
          es: "[[P_onda]] cuantifica la energía disponible por unidad de tiempo para interactuar con sistemas detectores o receptores."
          en: "[[P_onda]] quantifies energy available per unit time to interact with detector or receiver systems."
    coherence_rules:
      - id: po_coherence_area_check
        when: "A_seccion <= 0"
        status: error
        text:
          es: "Área de sección no válida. La potencia requiere área positiva para existir."
          en: "Invalid section area. Power requires positive area to exist."
      - id: po_coherence_default
        when: "true"
        status: ok
        text:
          es: "Potencia consistente con flujo y área de sección."
          en: "Power consistent with flux and section area."
    model_validity_rules:
      - id: po_validity_uniformidad
        when: "true"
        status: ok
        text:
          es: "El modelo asume flujo uniforme sobre toda el área. Para flujos no uniformes, el resultado es un promedio."
          en: "Model assumes uniform flux over the entire area. For non-uniform fluxes, result is an average."
      - id: po_validity_default
        when: "true"
        status: ok
        text:
          es: "Modelo válido para secciones planas y flujos perpendiculares a ellas."
          en: "Model valid for flat sections and fluxes perpendicular to them."
    graph_rules:
      - id: po_graph_visualization
        when: "true"
        status: ok
        text:
          es: "El gráfico muestra la potencia como integral del flujo sobre el área. La visualización ayuda a entender la distribución espacial."
          en: "Graph shows power as integral of flux over area. Visualization helps understand spatial distribution."
      - id: po_graph_default
        when: "true"
        status: ok
        text:
          es: "La representación visual conecta la distribución del flujo con la potencia total acumulada."
          en: "Visual representation connects flux distribution with total accumulated power."
    likely_errors:
      - id: po_error_area_total
        when: "true"
        status: warning
        text:
          es: "Error típico: usar área total en lugar de área perpendicular al flujo. Si la superficie está inclinada, proyecta el área perpendicularmente."
          en: "Typical error: using total area instead of area perpendicular to flux. If surface is inclined, project area perpendicularly."
      - id: po_error_default
        when: "true"
        status: ok
        text:
          es: "Verifica que el área usada sea la interceptada perpendicularmente por la onda."
          en: "Verify that used area is that intercepted perpendicularly by the wave."
    next_step_rules:
      - id: po_next_rendimiento
        when: "true"
        status: ok
        text:
          es: "Calcula el rendimiento del sistema dividiendo la potencia útil entre la potencia total incidente."
          en: "Calculate system efficiency by dividing useful power by total incident power."

  A:
    magnitude_type: amplitude
    semantic_role:
      es: Amplitud de oscilación - controla la intensidad del flujo cuadráticamente.
      en: Oscillation amplitude - controls flux intensity quadratically.
    next_step_rules:
      - id: am_next_impacto
        when: "true"
        status: ok
        text:
          es: "Explora cómo pequeños cambios en la amplitud afectan dramáticamente el flujo debido a la dependencia cuadrática."
          en: "Explore how small amplitude changes dramatically affect flux due to quadratic dependence."
    summary_rules:
      - id: am_summary_control
        when: "true"
        status: ok
        text:
          es: "[[A]] es la 'palanca de control' del flujo de energía. Duplicar la amplitud cuadruplica la potencia transportada."
          en: "[[A]] is the 'control lever' for energy flux. Doubling amplitude quadruples transported power."
    physical_reading_rules:
      - id: am_reading_small
        when: "A < 0.001"
        status: ok
        text:
          es: "Amplitud muy pequeña. El flujo resultante será proporcionalmente débil."
          en: "Very small amplitude. Resulting flux will be proportionally weak."
      - id: am_reading_default
        when: "true"
        status: ok
        text:
          es: "La amplitud determina la intensidad de la perturbación ondulatoria. Mayor amplitud implica más energía almacenada y transportada."
          en: "Amplitude determines the intensity of wave disturbance. Larger amplitude means more stored and transported energy."
    coherence_rules:
      - id: am_coherence_negative
        when: "A < 0"
        status: error
        text:
          es: "Amplitud negativa detectada. La amplitud es por definición positiva."
          en: "Negative amplitude detected. Amplitude is by definition positive."
      - id: am_coherence_default
        when: "true"
        status: ok
        text:
          es: "Amplitud dentro de rango válido."
          en: "Amplitude within valid range."
    model_validity_rules:
      - id: am_validity_lineal
        when: "A > 0.1"
        status: warning
        text:
          es: "Amplitud grande respecto a longitud de onda. El modelo lineal de pequeñas oscilaciones puede estar en el límite."
          en: "Large amplitude relative to wavelength. Small oscillation linear model may be at limit."
      - id: am_validity_default
        when: "true"
        status: ok
        text:
          es: "Modelo válido para amplitudes pequeñas comparadas con la escala del sistema."
          en: "Model valid for amplitudes small compared to system scale."
    graph_rules:
      - id: am_graph_visual
        when: "true"
        status: ok
        text:
          es: "En el gráfico, la amplitud se visualiza como la mitad de la distancia pico a valle de la onda."
          en: "In the graph, amplitude is visualized as half the peak-to-trough distance of the wave."
      - id: am_graph_default
        when: "true"
        status: ok
        text:
          es: "La amplitud determina la 'altura' visual de la onda en la representación gráfica."
          en: "Amplitude determines the visual 'height' of the wave in graphical representation."
    likely_errors:
      - id: am_error_doble
        when: "true"
        status: warning
        text:
          es: "Error común: usar pico a valle en lugar de amplitud (pico a equilibrio). La amplitud es la mitad de la oscilación total."
          en: "Common error: using peak-to-trough instead of amplitude (peak-to-equilibrium). Amplitude is half the total oscillation."
      - id: am_error_default
        when: "true"
        status: ok
        text:
          es: "Verifica que la amplitud corresponda a la mitad de la oscilación máxima."
          en: "Verify that amplitude corresponds to half the maximum oscillation."
    next_step_rules:
      - id: am_next_energia
        when: "true"
        status: ok
        text:
          es: "Relaciona la amplitud con la densidad de energía [[u_energia]] para entender el almacenamiento energético."
          en: "Relate amplitude to energy density [[u_energia]] to understand energy storage."

  u_energia:
    magnitude_type: energy_density
    semantic_role:
      es: Densidad de energia disponible para ser transportada por la onda.
      en: Energy density available to be transported by the wave.
    summary_rules:
      - id: ue_summary_default
        when: "true"
        status: ok
        text:
          es: "[[u_energia]] mide cuanta energia almacena localmente el medio; al multiplicarla por [[v]] se obtiene el flujo [[S_flujo]]."
          en: "[[u_energia]] measures how much energy the medium stores locally; multiplying it by [[v]] gives flux [[S_flujo]]."
    physical_reading_rules:
      - id: ue_reading_default
        when: "true"
        status: ok
        text:
          es: "Una densidad mayor permite transportar mas potencia por area si la velocidad de propagacion se mantiene."
          en: "A larger density allows more power per area to be transported if propagation speed is maintained."
    coherence_rules:
      - id: ue_coherence_nonnegative
        when: "u_energia < 0"
        status: error
        text:
          es: "La densidad de energia no puede ser negativa."
          en: "Energy density cannot be negative."
    model_validity_rules:
      - id: ue_validity_default
        when: "true"
        status: ok
        text:
          es: "La lectura supone que la densidad de energia representa un promedio local compatible con la onda progresiva."
          en: "The reading assumes that energy density represents a local average compatible with the progressive wave."
    graph_rules:
      - id: ue_graph_default
        when: "true"
        status: ok
        text:
          es: "En la grafica, una mayor [[u_energia]] debe aumentar la escala del flujo mostrado."
          en: "In the graph, a larger [[u_energia]] should increase the displayed flux scale."
    likely_errors:
      - id: ue_error_flux
        when: "true"
        status: warning
        text:
          es: "No confundas [[u_energia]] con [[S_flujo]]: una es energia por volumen y la otra potencia por area."
          en: "Do not confuse [[u_energia]] with [[S_flujo]]: one is energy per volume and the other is power per area."
    next_step_rules:
      - id: ue_next_flux
        when: "true"
        status: ok
        text:
          es: "Usa [[S_flujo]] = [[u_energia]] por [[v]] para pasar de energia almacenada a energia transportada."
          en: "Use [[S_flujo]] = [[u_energia]] times [[v]] to move from stored energy to transported energy."

  v:
    magnitude_type: propagation_speed
    semantic_role:
      es: Velocidad con la que avanza la energia ondulatoria por el medio.
      en: Speed at which wave energy advances through the medium.
    summary_rules:
      - id: v_summary_default
        when: "true"
        status: ok
        text:
          es: "[[v]] convierte densidad de energia en flujo: con la misma [[u_energia]], una onda mas rapida transporta energia a mayor ritmo."
          en: "[[v]] converts energy density into flux: for the same [[u_energia]], a faster wave transports energy at a higher rate."
    physical_reading_rules:
      - id: v_reading_default
        when: "true"
        status: ok
        text:
          es: "[[v]] es la velocidad de propagacion de la perturbacion, no la velocidad oscilatoria de cada particula del medio."
          en: "[[v]] is the propagation speed of the disturbance, not the oscillatory speed of each medium particle."
    coherence_rules:
      - id: v_coherence_zero
        when: "abs(v) < 0.01"
        status: error
        text:
          es: "Si [[v]] es casi nula, no hay propagacion efectiva de energia."
          en: "If [[v]] is nearly zero, there is no effective energy propagation."
    model_validity_rules:
      - id: v_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo supone velocidad de propagacion definida y medio aproximadamente uniforme."
          en: "The model assumes a defined propagation speed and an approximately uniform medium."
    graph_rules:
      - id: v_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico, aumentar [[v]] aumenta el transporte energetico para una misma densidad."
          en: "In the graph, increasing [[v]] increases energy transport for the same density."
    likely_errors:
      - id: v_error_particle
        when: "true"
        status: warning
        text:
          es: "No uses la velocidad de vibracion de una particula como si fuera [[v]]."
          en: "Do not use the vibration speed of a particle as if it were [[v]]."
    next_step_rules:
      - id: v_next_density
        when: "true"
        status: ok
        text:
          es: "Combina [[v]] con [[u_energia]] para comprobar el flujo energetico local."
          en: "Combine [[v]] with [[u_energia]] to check the local energy flux."

  omega:
    magnitude_type: angular_frequency
    semantic_role:
      es: Frecuencia angular que fija el ritmo temporal de la oscilacion y entra al cuadrado en el flujo de cuerda.
      en: Angular frequency that sets the temporal oscillation rate and enters quadratically in string-wave flux.
    summary_rules:
      - id: om_summary_default
        when: "true"
        status: ok
        text:
          es: "[[omega]] controla el ritmo de oscilacion; en ondas de cuerda el flujo medio crece como [[omega]] al cuadrado."
          en: "[[omega]] controls oscillation rate; in string waves the average flux grows with [[omega]] squared."
    physical_reading_rules:
      - id: om_reading_default
        when: "true"
        status: ok
        text:
          es: "Un valor mayor de [[omega]] implica oscilaciones mas rapidas y mayor flujo medio si las demas magnitudes no cambian."
          en: "A larger [[omega]] means faster oscillations and larger average flux if the other magnitudes do not change."
    coherence_rules:
      - id: om_coherence_positive
        when: "omega <= 0"
        status: error
        text:
          es: "La frecuencia angular debe ser positiva para una onda oscilatoria."
          en: "Angular frequency must be positive for an oscillatory wave."
    model_validity_rules:
      - id: om_validity_default
        when: "true"
        status: ok
        text:
          es: "La formula de cuerda usa [[omega]] en rad/s dentro de un modelo armonico lineal."
          en: "The string formula uses [[omega]] in rad/s within a linear harmonic model."
    graph_rules:
      - id: om_graph_default
        when: "true"
        status: ok
        text:
          es: "En la grafica, [[omega]] modifica el ritmo temporal y la escala energetica asociada."
          en: "In the graph, [[omega]] changes the temporal rate and the associated energy scale."
    likely_errors:
      - id: om_error_f
        when: "true"
        status: warning
        text:
          es: "No sustituyas la frecuencia en Hz directamente: primero convierte con [[omega]] = 2 pi f."
          en: "Do not substitute frequency in Hz directly: first convert with [[omega]] = 2 pi f."
    next_step_rules:
      - id: om_next_convert
        when: "true"
        status: ok
        text:
          es: "Si el dato viene como frecuencia ordinaria, convierte primero a [[omega]] antes de usar la formula."
          en: "If the datum is ordinary frequency, first convert it to [[omega]] before using the formula."

  A_seccion:
    magnitude_type: perpendicular_area
    semantic_role:
      es: Area efectiva perpendicular que convierte densidad de flujo en potencia total.
      en: Effective perpendicular area that converts flux density into total power.
    summary_rules:
      - id: as_summary_default
        when: "true"
        status: ok
        text:
          es: "[[A_seccion]] multiplica a [[S_flujo]] para obtener la potencia total [[P_onda]] interceptada por una superficie."
          en: "[[A_seccion]] multiplies [[S_flujo]] to obtain total power [[P_onda]] intercepted by a surface."
    physical_reading_rules:
      - id: as_reading_default
        when: "true"
        status: ok
        text:
          es: "Mayor [[A_seccion]] significa que la superficie intercepta mas potencia para el mismo flujo local."
          en: "Larger [[A_seccion]] means the surface intercepts more power for the same local flux."
    coherence_rules:
      - id: as_coherence_positive
        when: "A_seccion <= 0"
        status: error
        text:
          es: "El area perpendicular debe ser positiva."
          en: "The perpendicular area must be positive."
    model_validity_rules:
      - id: as_validity_uniform
        when: "true"
        status: ok
        text:
          es: "La relacion [[P_onda]] = [[S_flujo]] por [[A_seccion]] supone flujo uniforme sobre la seccion."
          en: "The relation [[P_onda]] = [[S_flujo]] times [[A_seccion]] assumes uniform flux over the section."
    graph_rules:
      - id: as_graph_default
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[A_seccion]] representa la superficie que corta perpendicularmente al flujo."
          en: "In the graph, [[A_seccion]] represents the surface cutting the flux perpendicularly."
    likely_errors:
      - id: as_error_projection
        when: "true"
        status: warning
        text:
          es: "Si la superficie esta inclinada, usa el area proyectada perpendicular al flujo, no el area geometrica completa."
          en: "If the surface is tilted, use the area projected perpendicular to the flux, not the full geometric area."
    next_step_rules:
      - id: as_next_power
        when: "true"
        status: ok
        text:
          es: "Multiplica [[A_seccion]] por [[S_flujo]] para obtener [[P_onda]]."
          en: "Multiply [[A_seccion]] by [[S_flujo]] to obtain [[P_onda]]."

mini_graph:
  enabled: true
  preferred_type: Coord
  
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
