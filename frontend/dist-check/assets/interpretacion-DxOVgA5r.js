const e=`version: "v5_n5"
id: interpretacion_energia_onda
leaf_id: energia-de-una-onda

nombre:
  es: "Interpretación de la energía ondulatoria"
  en: "Wave energy interpretation"

scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: energia-y-transporte
  parent_id: energia-y-transporte
  ruta_relativa: fisica-clasica/ondas/energia-y-transporte/energia-de-una-onda

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: "Interpretación física"
    en: "Physical interpretation"
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
    max_chars_per_section: 200

dependencies:
  formulas:
    - densidad_energia_cuerda
    - energia_total_ciclo
    - potencia_onda_cuerda
    - potencia_onda_general
  magnitudes:
    - E_onda
    - u_energia
    - A
    - omega
    - mu
    - P_onda
    - lambda
    - S
    - v

global_context:
  physical_domain:
    es: "Ondas mecánicas en cuerdas y medios continuos unidimensionales; ondas electromagnéticas en medios transparentes."
    en: "Mechanical waves in strings and one-dimensional continuous media; electromagnetic waves in transparent media."
  axis_convention:
    es: "Eje x en dirección de propagación; desplazamiento transversal según y (ondas mecánicas) o campo E según y (ondas EM)."
    en: "x-axis in propagation direction; transverse displacement along y (mechanical waves) or E field along y (EM waves)."
  standard_assumptions:
    - "Medio lineal, isótropo y homogéneo"
    - "Pequeñas perturbaciones (A << lambda)"
    - "Sin disipación viscosa ni térmica"
    - "Sin reflexiones en el tramo considerado"
  standard_warnings:
    - "Aproximación lineal falla para amplitudes grandes"
    - "Disipación real reduce potencia efectiva"
    - "Ondas estacionarias tienen flujo neto nulo"

result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: "Resumen"
      en: "Summary"
  physical_reading:
    enabled: true
    order: 2
    title:
      es: "Lectura física"
      en: "Physical reading"
  coherence:
    enabled: true
    order: 3
    title:
      es: "Coherencia"
      en: "Coherence"
  model_validity:
    enabled: true
    order: 4
    title:
      es: "Validez del modelo"
      en: "Model validity"
  graph_reading:
    enabled: true
    order: 5
    title:
      es: "Lectura gráfica"
      en: "Graph reading"
  likely_errors:
    enabled: true
    order: 6
    title:
      es: "Errores probables"
      en: "Likely errors"
  next_step:
    enabled: true
    order: 7
    title:
      es: "Siguiente paso"
      en: "Next step"

targets:
  u_energia:
    magnitude_type: density
    semantic_role:
      es: "Densidad local instantánea de energía ondulatoria"
      en: "Local instantaneous wave energy density"
    next_step_rules:
      - id: u_next_promedio
        when: "true"
        status: ok
        text:
          es: "Para obtener la energía total, integrar la densidad sobre el volumen de interés o usar la fórmula de energía por ciclo."
          en: "To obtain total energy, integrate density over the volume of interest or use the energy per cycle formula."
    summary_rules:
      - id: u_summary_positive
        when: "u_energia > 0"
        status: ok
        text:
          es: "La densidad [[u_energia]] indica energía almacenada localmente en el medio, oscilando con el cuadrado del desplazamiento."
          en: "The density [[u_energia]] indicates energy locally stored in the medium, oscillating with the square of displacement."
      - id: u_summary_zero
        when: "u_energia == 0"
        status: warning
        text:
          es: "Densidad nula indica un nodo de energía instantáneo; verificar si corresponde a posición de equilibrio del medio."
          en: "Zero density indicates an instantaneous energy node; verify if it corresponds to the medium's equilibrium position."
      - id: u_summary_default
        when: "true"
        status: ok
        text:
          es: "El resultado describe la concentración de energía en cada punto, fundamental para entender transporte localizado."
          en: "The result describes energy concentration at each point, fundamental for understanding localized transport."
    physical_reading_rules:
      - id: u_read_high
        when: "u_energia > 1000"
        status: ok
        text:
          es: "Alta densidad de energía indica perturbación intensa; el medio experimenta grandes deformaciones locales."
          en: "High energy density indicates intense disturbance; the medium experiences large local deformations."
      - id: u_read_low
        when: "u_energia < 0.001"
        status: ok
        text:
          es: "Baja densidad de energía sugierte perturbación débil; el sistema puede estar cerca del umbral de detección."
          en: "Low energy density suggests weak disturbance; the system may be near the detection threshold."
      - id: u_read_default
        when: "true"
        status: ok
        text:
          es: "El valor representa energía por unidad de volumen disponible para intercambio cinético-potencial en la oscilación."
          en: "The value represents energy per unit volume available for kinetic-potential exchange in the oscillation."
    coherence_rules:
      - id: u_coherence_positive
        when: "u_energia >= 0"
        status: ok
        text:
          es: "Coherente: la densidad de energía es siempre no negativa, cumpliendo el principio de energía definida positiva."
          en: "Coherent: energy density is always non-negative, satisfying the principle of positive definite energy."
      - id: u_coherence_default
        when: "true"
        status: error
        text:
          es: "Error: densidad negativa físicamente imposible. Revisar signos de amplitud o frecuencia en el cálculo."
          en: "Error: negative density physically impossible. Check signs of amplitude or frequency in calculation."
    model_validity_rules:
      - id: u_valid_linear
        when: "u_energia < (mu * omega^2 * lambda^2)"
        status: ok
        text:
          es: "Densidad baja respecto a escala del medio: aproximación lineal válida, sin efectos no lineales significativos."
          en: "Density low relative to medium scale: linear approximation valid, without significant nonlinear effects."
      - id: u_valid_nonlinear
        when: "u_energia >= (mu * omega^2 * lambda^2)"
        status: warning
        text:
          es: "Densidad comparable a escala del medio: efectos no lineales posibles, modelo lineal puede subestimar energía real."
          en: "Density comparable to medium scale: possible nonlinear effects, linear model may underestimate real energy."
      - id: u_valid_default
        when: "true"
        status: ok
        text:
          es: "Modelo válido mientras la amplitud sea pequeña frente a la longitud de onda y el medio responda linealmente."
          en: "Model valid as long as amplitude is small compared to wavelength and medium responds linearly."
    graph_rules:
      - id: u_graph_nodes
        when: "u_energia == 0"
        status: warning
        text:
          es: "En el gráfico, puntos de densidad nula corresponden a nodos energéticos donde el medio cruza por equilibrio."
          en: "In the graph, points of zero density correspond to energy nodes where the medium crosses equilibrium."
      - id: u_graph_antinodes
        when: "u_energia > 0"
        status: ok
        text:
          es: "Máximos locales de densidad indican vientres energéticos donde la perturbación es máxima."
          en: "Local maxima of density indicate energy antinodes where disturbance is maximum."
      - id: u_graph_default
        when: "true"
        status: ok
        text:
          es: "La representación gráfica muestra la envolvente de densidad que modula la onda portadora."
          en: "The graphical representation shows the density envelope that modulates the carrier wave."
    likely_errors:
      - id: u_error_node_calc
        when: "u_energia < 0.0001"
        status: warning
        text:
          es: "Posible error: calcular densidad en un nodo donde teóricamente es cero por la periodicidad del seno cuadrado."
          en: "Possible error: calculating density at a node where it is theoretically zero due to the periodicity of sine squared."
      - id: u_error_instant_avg
        when: "true"
        status: warning
        text:
          es: "Confusión frecuente: usar densidad instantánea en lugar de promedio para estimar potencia transportada."
          en: "Frequent confusion: using instantaneous density instead of average to estimate transported power."

  E_onda:
    magnitude_type: energy
    semantic_role:
      es: "Energía total integrada en un ciclo completo de la onda"
      en: "Total energy integrated over a complete wave cycle"
    next_step_rules:
      - id: E_next_potencia
        when: "true"
        status: ok
        text:
          es: "Para calcular la potencia transportada, relacionar esta energía con el tiempo de tránsito del ciclo."
          en: "To calculate transported power, relate this energy to the transit time of the cycle."
    summary_rules:
      - id: E_summary_scale
        when: "E_onda > 0"
        status: ok
        text:
          es: "La energía [[E_onda]] resume la capacidad total de trabajo de la onda en un ciclo, dependiendo del cuadrado de la amplitud y la frecuencia."
          en: "The energy [[E_onda]] summarizes the total work capacity of the wave in one cycle, depending on the square of amplitude and frequency."
      - id: E_summary_default
        when: "true"
        status: ok
        text:
          es: "Este resultado describe la energía mecánica disponible para transferir a receptores a lo largo de la longitud de onda."
          en: "This result describes the mechanical energy available to transfer to receivers along the wavelength."
    physical_reading_rules:
      - id: E_read_large
        when: "E_onda > 1000"
        status: ok
        text:
          es: "Energía elevada indica onda capaz de realizar trabajo mecánico significativo sobre cuerpos en su trayectoria."
          en: "High energy indicates a wave capable of performing significant mechanical work on bodies in its path."
      - id: E_read_small
        when: "E_onda < 1"
        status: ok
        text:
          es: "Energía pequeña sugiere perturbación débil, típica de ondas de prueba o señales de baja intensidad."
          en: "Small energy suggests weak disturbance, typical of test waves or low-intensity signals."
      - id: E_read_default
        when: "true"
        status: ok
        text:
          es: "El valor representa la suma de energías cinética y potencial promediadas sobre un ciclo completo."
          en: "The value represents the sum of kinetic and potential energies averaged over a complete cycle."
    coherence_rules:
      - id: E_coherence_positive
        when: "E_onda >= 0"
        status: ok
        text:
          es: "Coherente: la energía es definida positiva, consistente con su naturaleza de magnitud acumulativa."
          en: "Coherent: energy is positive definite, consistent with its nature as an accumulative magnitude."
      - id: E_coherence_scale
        when: "E_onda > (mu * lambda^3 * omega^2)"
        status: warning
        text:
          es: "Energía inusualmente alta para las propiedades del medio; verificar si no hay confusión entre amplitud y desplazamiento total."
          en: "Unusually high energy for medium properties; verify there is no confusion between amplitude and total displacement."
      - id: E_coherence_default
        when: "true"
        status: ok
        text:
          es: "El orden de magnitud debe ser consistente con la densidad del medio y la escala espacial del ciclo."
          en: "The order of magnitude should be consistent with medium density and spatial scale of the cycle."
    model_validity_rules:
      - id: E_valid_discrete
        when: "E_onda < (mu * lambda * v^2)"
        status: ok
        text:
          es: "Energía menor que energía cinética de traslación del medio: modelo continuo válido, no hay efectos granulares."
          en: "Energy less than medium translational kinetic energy: continuous model valid, no granular effects."
      - id: E_valid_continuum
        when: "true"
        status: ok
        text:
          es: "Modelo de medio continuo aplicable mientras la longitud de onda supere la escala microscópica del material."
          en: "Continuous medium model applicable as long as wavelength exceeds microscopic scale of material."
    graph_rules:
      - id: E_graph_area
        when: "true"
        status: ok
        text:
          es: "En el gráfico de densidad vs posición, el área bajo la curva sobre una longitud de onda debe coincidir con esta energía total."
          en: "In the density vs position graph, the area under the curve over one wavelength should match this total energy."
    likely_errors:
      - id: E_error_linear
        when: "E_onda > 10000"
        status: warning
        text:
          es: "Posible violación de régimen lineal: energías muy altas pueden indicar amplitudes no pequeñas frente a lambda."
          en: "Possible linear regime violation: very high energies may indicate amplitudes not small compared to lambda."
      - id: E_error_factor
        when: "true"
        status: warning
        text:
          es: "Error común: olvidar el factor 1/2 del promedio temporal de seno cuadrado, duplicando la energía calculada."
          en: "Common error: forgetting the 1/2 factor from temporal average of sine squared, doubling calculated energy."

  P_onda:
    magnitude_type: power
    semantic_role:
      es: "Tasa de transferencia de energía a través de una sección del medio"
      en: "Rate of energy transfer through a section of the medium"
    next_step_rules:
      - id: P_next_eficiencia
        when: "true"
        status: ok
        text:
          es: "Para evaluar eficiencia de transferencia, comparar esta potencia con la potencia disipada o reflejada en interfaces."
          en: "To evaluate transfer efficiency, compare this power with power dissipated or reflected at interfaces."
    summary_rules:
      - id: P_summary_flow
        when: "P_onda > 0"
        status: ok
        text:
          es: "La potencia [[P_onda]] indica la energía que atraviesa la sección del medio cada segundo, determinando el flujo energético."
          en: "The power [[P_onda]] indicates the energy crossing the medium section every second, determining energy flow."
      - id: P_summary_zero
        when: "P_onda == 0"
        status: warning
        text:
          es: "Potencia nula detectada: posible onda estacionaria o cancelación de flujos opuestos, verificar condiciones de contorno."
          en: "Zero power detected: possible standing wave or cancellation of opposite flows, verify boundary conditions."
      - id: P_summary_default
        when: "true"
        status: ok
        text:
          es: "Este resultado describe la capacidad de la onda para transportar energía útil hacia receptores distantes."
          en: "This result describes the wave's capacity to transport useful energy to distant receivers."
    physical_reading_rules:
      - id: P_read_high
        when: "P_onda > 1000"
        status: ok
        text:
          es: "Alta potencia indica transferencia energética rápida; útil para aplicaciones de comunicación o energía mecánica."
          en: "High power indicates rapid energy transfer; useful for communication or mechanical energy applications."
      - id: P_read_low
        when: "P_onda < 0.1"
        status: ok
        text:
          es: "Baja potencia sugiere señal débil o transmisión a larga distancia con atenuación significativa."
          en: "Low power suggests weak signal or long-distance transmission with significant attenuation."
      - id: P_read_default
        when: "true"
        status: ok
        text:
          es: "El valor representa el balance neto entre energía entrante y saliente en la sección considerada."
          en: "The value represents the net balance between incoming and outgoing energy in the considered section."
    coherence_rules:
      - id: P_coherence_positive
        when: "P_onda >= 0"
        status: ok
        text:
          es: "Coherente: la potencia es no negativa para ondas progresivas unidireccionales."
          en: "Coherent: power is non-negative for unidirectional progressive waves."
      - id: P_coherence_flux
        when: "P_onda > (E_onda * v / lambda)"
        status: warning
        text:
          es: "Potencia inusualmente alta respecto a energía y velocidad; verificar consistencia con la sección transversal efectiva."
          en: "Unusually high power relative to energy and velocity; verify consistency with effective cross-section."
      - id: P_coherence_default
        when: "true"
        status: ok
        text:
          es: "La potencia debe ser consistente con la energía por unidad de longitud multiplicada por la velocidad de propagación."
          en: "Power should be consistent with energy per unit length multiplied by propagation velocity."
    model_validity_rules:
      - id: P_valid_steady
        when: "P_onda > 0"
        status: ok
        text:
          es: "Flujo positivo confirma régimen estacionario de transferencia sin acumulación neta en el tramo."
          en: "Positive flow confirms stationary transfer regime without net accumulation in the section."
      - id: P_valid_conservation
        when: "P_onda < (u_energia * S * v * 1.1)"
        status: ok
        text:
          es: "Potencia dentro del 10% de la predicción teórica: conservación de energía satisfecha, sin fuentes ni sumideros ocultos."
          en: "Power within 10% of theoretical prediction: energy conservation satisfied, without hidden sources or sinks."
      - id: P_valid_default
        when: "true"
        status: warning
        text:
          es: "Modelo válido mientras no haya reflexiones significativas ni disipación por fricción interna del medio."
          en: "Model valid as long as there are no significant reflections or dissipation by medium internal friction."
    graph_rules:
      - id: P_graph_vector
        when: "true"
        status: ok
        text:
          es: "En representaciones vectoriales, la potencia se indica con flechas en dirección de propagación, proporcionales a su magnitud."
          en: "In vector representations, power is indicated with arrows in propagation direction, proportional to magnitude."
    likely_errors:
      - id: P_error_standing
        when: "P_onda < 0.001"
        status: warning
        text:
          es: "Confusión típica: aplicar fórmula de potencia progresiva a onda estacionaria donde el flujo neto es cero."
          en: "Typical confusion: applying progressive power formula to standing wave where net flow is zero."
      - id: P_error_section
        when: "true"
        status: warning
        text:
          es: "Error común: usar área total en lugar de sección transversal perpendicular a la dirección de propagación."
          en: "Common error: using total area instead of cross-section perpendicular to propagation direction."

  A:
    magnitude_type: length
    semantic_role:
      es: "Amplitud máxima de la perturbación ondulatoria"
      en: "Maximum amplitude of wave disturbance"
    next_step_rules:
      - id: A_next_energia
        when: "true"
        status: ok
        text:
          es: "Con la amplitud conocida, calcular energía o potencia usando las fórmulas de transporte energético."
          en: "With known amplitude, calculate energy or power using energy transport formulas."
    summary_rules:
      - id: A_summary_exists
        when: "A > 0"
        status: ok
        text:
          es: "La amplitud [[A]] describe la intensidad de la perturbación, cuadráticamente relacionada con la energía transportada."
          en: "The amplitude [[A]] describes disturbance intensity, quadratically related to transported energy."
      - id: A_summary_default
        when: "true"
        status: ok
        text:
          es: "Este valor representa el máximo desplazamiento respecto al equilibrio, determinante para el régimen lineal."
          en: "This value represents maximum displacement from equilibrium, determinant for linear regime."
    physical_reading_rules:
      - id: A_read_linear
        when: "A < (lambda / 10)"
        status: ok
        text:
          es: "Amplitud pequeña frente a lambda: régimen lineal válido, sinusoidal pura sin distorsión apreciable."
          en: "Amplitude small compared to lambda: valid linear regime, pure sinusoidal without appreciable distortion."
      - id: A_read_nonlinear
        when: "A >= (lambda / 10)"
        status: warning
        text:
          es: "Amplitud significativa frente a lambda: posibles efectos no lineales, armónicos de orden superior activos."
          en: "Amplitude significant compared to lambda: possible nonlinear effects, higher-order harmonics active."
      - id: A_read_default
        when: "true"
        status: ok
        text:
          es: "El valor indica la escala de deformación del medio respecto a su estado de equilibrio."
          en: "The value indicates medium deformation scale relative to its equilibrium state."
    coherence_rules:
      - id: A_coherence_positive
        when: "A >= 0"
        status: ok
        text:
          es: "Coherente: la amplitud es definida positiva como magnitud máxima."
          en: "Coherent: amplitude is positive definite as maximum magnitude."
      - id: A_coherence_default
        when: "true"
        status: error
        text:
          es: "Error: amplitud negativa físicamente imposible; verificar definición de coordenada de perturbación."
          en: "Error: negative amplitude physically impossible; verify disturbance coordinate definition."
    model_validity_rules:
      - id: A_valid_small
        when: "A < (lambda / 20)"
        status: ok
        text:
          es: "Régimen claramente lineal: modelo armónico simple altamente preciso, sin correcciones necesarias."
          en: "Clearly linear regime: simple harmonic model highly accurate, no corrections needed."
      - id: A_valid_borderline
        when: "A >= (lambda / 20) and A < (lambda / 5)"
        status: warning
        text:
          es: "Zona de transición: modelo lineal aceptable pero con error sistemático creciente hacia el 10%."
          en: "Transition zone: linear model acceptable but with growing systematic error toward 10%."
      - id: A_valid_nonlinear
        when: "A >= (lambda / 5)"
        status: error
        text:
          es: "Régimen no lineal: modelo lineal inadecuado, requiere teoría de perturbaciones finitas o numérica."
          en: "Nonlinear regime: linear model inadequate, requires finite perturbation theory or numerical methods."
    graph_rules:
      - id: A_graph_scale
        when: "true"
        status: ok
        text:
          es: "En gráficos de perturbación vs posición, la amplitud corresponde a la escala vertical máxima de la envolvente."
          en: "In disturbance vs position graphs, amplitude corresponds to maximum vertical scale of the envelope."
    likely_errors:
      - id: A_error_peak
        when: "true"
        status: warning
        text:
          es: "Confusión frecuente: confundir amplitud con desplazamiento instantáneo en un punto arbitrario."
          en: "Frequent confusion: confusing amplitude with instantaneous displacement at an arbitrary point."

  omega:
    magnitude_type: frequency
    semantic_role:
      es: "Frecuencia angular de la oscilación ondulatoria"
      en: "Angular frequency of wave oscillation"
    next_step_rules:
      - id: omega_next_periodo
        when: "true"
        status: ok
        text:
          es: "El período de oscilación es el inverso de la frecuencia angular dividido por 2π."
          en: "The oscillation period is the inverse of angular frequency divided by 2π."
    summary_rules:
      - id: omega_summary_positive
        when: "omega > 0"
        status: ok
        text:
          es: "La frecuencia angular [[omega]] determina la rapidez de oscilación de la onda, afectando cuadráticamente la energía transportada."
          en: "The angular frequency [[omega]] determines the rapidity of wave oscillation, quadratically affecting transported energy."
    physical_reading_rules:
      - id: omega_read_high
        when: "omega > 10000"
        status: ok
        text:
          es: "Alta frecuencia angular implica oscilaciones rápidas y mayor densidad de energía para igual amplitud."
          en: "High angular frequency implies rapid oscillations and higher energy density for equal amplitude."
    coherence_rules:
      - id: omega_coherence_positive
        when: "omega > 0"
        status: ok
        text:
          es: "Coherente: la frecuencia angular es siempre positiva para ondas propagantes."
          en: "Coherent: angular frequency is always positive for propagating waves."
    model_validity_rules:
      - id: omega_valid_all
        when: "true"
        status: ok
        text:
          es: "La frecuencia angular es válida en todo el rango del modelo lineal."
          en: "Angular frequency is valid throughout the linear model range."
    graph_rules:
      - id: omega_graph_scale
        when: "true"
        status: ok
        text:
          es: "En gráficos temporales, la frecuencia angular determina la densidad de ciclos por unidad de tiempo."
          en: "In temporal graphs, angular frequency determines the density of cycles per unit time."
    likely_errors:
      - id: omega_error_confusion
        when: "true"
        status: warning
        text:
          es: "No confundir frecuencia angular (rad/s) con frecuencia ordinaria (Hz)."
          en: "Do not confuse angular frequency (rad/s) with ordinary frequency (Hz)."

  lambda:
    magnitude_type: length
    semantic_role:
      es: "Longitud de onda espacial de la perturbación"
      en: "Spatial wavelength of disturbance"
    next_step_rules:
      - id: lambda_next_numero
        when: "true"
        status: ok
        text:
          es: "El número de onda k es 2π dividido por la longitud de onda."
          en: "The wavenumber k is 2π divided by wavelength."
    summary_rules:
      - id: lambda_summary_positive
        when: "lambda > 0"
        status: ok
        text:
          es: "La longitud de onda [[lambda]] determina la escala espacial de la perturbación periódica."
          en: "The wavelength [[lambda]] determines the spatial scale of the periodic disturbance."
    physical_reading_rules:
      - id: lambda_read_scale
        when: "true"
        status: ok
        text:
          es: "La longitud de onda indica la distancia entre puntos equivalentes consecutivos de la onda."
          en: "Wavelength indicates the distance between consecutive equivalent points of the wave."
    coherence_rules:
      - id: lambda_coherence_positive
        when: "lambda > 0"
        status: ok
        text:
          es: "Coherente: la longitud de onda es siempre positiva para ondas periódicas."
          en: "Coherent: wavelength is always positive for periodic waves."
    model_validity_rules:
      - id: lambda_valid_check
        when: "lambda > 0"
        status: ok
        text:
          es: "La longitud de onda debe ser mucho mayor que la escala molecular para validez del medio continuo."
          en: "Wavelength must be much larger than molecular scale for continuum medium validity."
    graph_rules:
      - id: lambda_graph_scale
        when: "true"
        status: ok
        text:
          es: "En gráficos espaciales, la longitud de onda determina el período espacial de la perturbación."
          en: "In spatial graphs, wavelength determines the spatial period of the disturbance."
    likely_errors:
      - id: lambda_error_half
        when: "true"
        status: warning
        text:
          es: "Confusión común: usar media longitud de onda en lugar de longitud completa."
          en: "Common confusion: using half wavelength instead of full length."

  S:
    magnitude_type: area
    semantic_role:
      es: "Sección transversal del medio conductor de la onda"
      en: "Cross-sectional area of wave-carrying medium"
    next_step_rules:
      - id: S_next_intensidad
        when: "true"
        status: ok
        text:
          es: "La intensidad se obtiene dividiendo la potencia por la sección transversal."
          en: "Intensity is obtained by dividing power by cross-sectional area."
    summary_rules:
      - id: S_summary_positive
        when: "S > 0"
        status: ok
        text:
          es: "La sección [[S]] determina cuántos elementos del medio participan en el transporte energético."
          en: "The section [[S]] determines how many medium elements participate in energy transport."
    physical_reading_rules:
      - id: S_read_large
        when: "S > 1"
        status: ok
        text:
          es: "Sección grande implica mayor número de elementos del medio transportando energía."
          en: "Large section implies more medium elements transporting energy."
    coherence_rules:
      - id: S_coherence_positive
        when: "S > 0"
        status: ok
        text:
          es: "Coherente: la sección transversal es siempre positiva."
          en: "Coherent: cross-sectional area is always positive."
    model_validity_rules:
      - id: S_valid_all
        when: "true"
        status: ok
        text:
          es: "La sección es válida mientras el medio sea homogéneo en la región considerada."
          en: "Section is valid as long as the medium is homogeneous in the considered region."
    graph_rules:
      - id: S_graph_flujo
        when: "true"
        status: ok
        text:
          es: "En gráficos de flujo, la sección determina la escala de la potencia total transportada."
          en: "In flow graphs, section determines the scale of total transported power."
    likely_errors:
      - id: S_error_geometry
        when: "true"
        status: warning
        text:
          es: "Verificar que la sección usada corresponda a la geometría real del problema."
          en: "Verify that the section used corresponds to the real geometry of the problem."

  v:
    magnitude_type: velocity
    semantic_role:
      es: "Velocidad de propagación de la perturbación ondulatoria"
      en: "Propagation velocity of wave disturbance"
    next_step_rules:
      - id: v_next_tiempo
        when: "true"
        status: ok
        text:
          es: "El tiempo de tránsito de la onda es la longitud dividida por la velocidad."
          en: "Wave transit time is length divided by velocity."
    summary_rules:
      - id: v_summary_positive
        when: "v > 0"
        status: ok
        text:
          es: "La velocidad [[v]] determina la rapidez de transporte de la energía y la información."
          en: "The velocity [[v]] determines the speed of energy and information transport."
    physical_reading_rules:
      - id: v_read_high
        when: "v > 1000"
        status: ok
        text:
          es: "Alta velocidad de propagación indica medio rígido o de baja densidad."
          en: "High propagation velocity indicates rigid or low-density medium."
    coherence_rules:
      - id: v_coherence_positive
        when: "v > 0"
        status: ok
        text:
          es: "Coherente: la velocidad de propagación es siempre positiva."
          en: "Coherent: propagation velocity is always positive."
    model_validity_rules:
      - id: v_valid_linear
        when: "true"
        status: ok
        text:
          es: "La velocidad es independiente de la amplitud en régimen lineal."
          en: "Velocity is independent of amplitude in linear regime."
    graph_rules:
      - id: v_graph_vector
        when: "true"
        status: ok
        text:
          es: "En gráficos vectoriales, la velocidad se representa con flechas en dirección de propagación."
          en: "In vector graphs, velocity is represented with arrows in propagation direction."
    likely_errors:
      - id: v_error_particulas
        when: "true"
        status: warning
        text:
          es: "No confundir velocidad de propagación con velocidad de oscilación de partículas."
          en: "Do not confuse propagation velocity with particle oscillation velocity."

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
