const e=`version: 5
id: ondas-superficiales-interp
leaf_id: ondas-superficiales
scope: local
nombre:
  es: "Análisis de Ondas Superficiales"
  en: "Surface Waves Analysis"

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
      es: "Resumen Conceptual"
      en: "Conceptual Summary"
  physical_reading:
    title:
      es: "Lectura Física"
      en: "Physical Reading"
  coherence:
    title:
      es: "Coherencia de Datos"
      en: "Data Coherence"
  model_validity:
    title:
      es: "Validez del Modelo"
      en: "Model Validity"
  graph_reading:
    title:
      es: "Análisis Visual"
      en: "Visual Analysis"
  likely_errors:
    title:
      es: "Alertas de Interpretación"
      en: "Interpretation Alerts"
  next_step:
    title:
      es: "Pasos Sugeridos"
      en: "Suggested Steps"

dependencies:
  requires_magnitudes: true
  requires_formulas: true
  supports_graph_binding: true
  magnitudes: [c, g, lambda, h]
  formulas: [airy_general, profundas, someras]

targets:
  c:
    summary_rules:
      - id: c-val
        when: c > 0
        status: success
        text:
          es: "La velocidad de fase [[c]] de {c} m/s representa la rapidez con la que las crestas de la ola avanzan sobre la superficie."
          en: "The phase velocity [[c]] of {c} m/s represents the speed at which wave crests advance over the surface."
    physical_reading_rules:
      - id: c-phys
        when: h > lambda / 2
        status: success
        text:
          es: "La gravedad [[g]] actúa como la fuerza restauradora primordial que, al interactuar con la inercia del fluido dictada por la escala espacial [[lambda]], genera una velocidad [[c]] independiente de la profundidad. Este fenómeno de dispersión física es lo que permite que las ondas más largas transporten energía más rápidamente a través del océano abierto."
          en: "Gravity [[g]] acts as the primary restoring force that, interacting with fluid inertia dictated by the spatial scale [[lambda]], generates a phase velocity [[c]] independent of depth. This physical dispersion phenomenon allows longer waves to transport energy faster across the open ocean."
    coherence_rules:
      - id: c-coh
        when: c > 0
        status: success
        text:
          es: "La velocidad obtenida es coherente con el balance entre fuerzas restauradoras e inercia superficial."
          en: "The obtained speed is coherent with the balance between restoring forces and surface inertia."
    model_validity_rules:
      - id: c-valid
        when: h > lambda / 2
        status: success
        text:
          es: "Modelo de aguas profundas válido: el fondo marino no interfiere con el movimiento orbital de las partículas."
          en: "Deep water model valid: the seafloor does not interfere with the particles' orbital motion."
    graph_rules:
      - id: c-graph
        when: c > 0
        status: success
        text:
          es: "En el simulador, esto dicta la rapidez con la que el perfil azul se desplaza de izquierda a derecha."
          en: "In the simulator, this dictates the speed at which the blue profile moves from left to right."
    likely_errors:
      - id: c-err
        when: c > 0
        status: warning
        text:
          es: "No confunda la velocidad de la cresta con la velocidad del paquete de energía (velocidad de grupo)."
          en: "Do not confuse the crest speed with the energy packet speed (group velocity)."
    next_step_rules:
      - id: c-next
        when: c > 0
        status: info
        text:
          es: "Calcule cuánto tardará un swell oceánico en llegar a la costa desde su punto de origen."
          en: "Calculate how long an oceanic swell will take to reach the coast from its point of origin."

  h:
    summary_rules:
      - id: h-val
        when: h > 0
        status: success
        text:
          es: "La profundidad [[h]] ({h} m) es el parámetro crítico que define el escenario de propagación."
          en: "The depth [[h]] ({h} m) is the critical parameter that defines the propagation scenario."
    physical_reading_rules:
      - id: h-phys
        when: h < lambda / 20
        status: success
        text:
          es: "Aguas someras detectadas: la profundidad actúa como el único limitador físico de la velocidad de la ola."
          en: "Shallow water detected: depth acts as the only physical limiter of wave speed."
    coherence_rules:
      - id: h-coh
        when: h > 0
        status: success
        text:
          es: "Valor de profundidad físicamente posible para un entorno marino o de estanque."
          en: "Depth value physically possible for a marine or pond environment."
    model_validity_rules:
      - id: h-valid
        when: h < lambda / 20
        status: success
        text:
          es: "Modelo de aguas someras (tipo tsunami) plenamente aplicable."
          en: "Shallow water model (tsunami type) fully applicable."
    graph_rules:
      - id: h-graph
        when: h > 0
        status: info
        text:
          es: "Se visualiza como la distancia vertical entre la superficie y el lecho marino en la animación."
          en: "It is visualized as the vertical distance between the surface and the seabed in the animation."
    likely_errors:
      - id: h-err
        when: h > 0
        status: warning
        text:
          es: "Asegúrese de que [[h]] sea constante; cambios bruscos en la profundidad causan refracción y shoaling."
          en: "Ensure [[h]] is constant; sudden depth changes cause refraction and shoaling."
    next_step_rules:
      - id: h-next
        when: h > 0
        status: info
        text:
          es: "Reduzca la profundidad para observar cómo la longitud de onda se acorta y la ola se vuelve más lenta."
          en: "Reduce the depth to observe how the wavelength shortens and the wave becomes slower."

  lambda:
    summary_rules:
      - id: l-val
        when: lambda > 0
        status: success
        text:
          es: "La longitud de onda [[lambda]] ({lambda} m) dicta la escala de la perturbación superficial."
          en: "The wavelength [[lambda]] ({lambda} m) dictates the scale of the surface disturbance."
    physical_reading_rules:
      - id: l-phys
        when: lambda > 0
        status: success
        text:
          es: "Determina si la ola es dispersiva (aguas profundas) o no dispersiva (aguas someras)."
          en: "Determines whether the wave is dispersive (deep water) or non-dispersive (shallow water)."
    coherence_rules:
      - id: l-coh
        when: lambda > 0
        status: success
        text:
          es: "La escala espacial es consistente con las dimensiones físicas del sistema fluido."
          en: "The spatial scale is consistent with the physical dimensions of the fluid system."
    model_validity_rules:
      - id: l-valid
        when: lambda > 0.017
        status: success
        text:
          es: "Régimen de gravedad puro: la tensión superficial es despreciable frente a la inercia."
          en: "Pure gravity regime: surface tension is negligible compared to inertia."
    graph_rules:
      - id: l-graph
        when: lambda > 0
        status: success
        text:
          es: "Es la distancia horizontal entre dos crestas en la gráfica."
          en: "It is the horizontal distance between two crests in the graph."
    likely_errors:
      - id: l-err
        when: lambda > 0
        status: warning
        text:
          es: "No confunda [[lambda]] con la distancia recorrida por el agua; es la periodicidad del patrón."
          en: "Do not confuse [[lambda]] with the distance traveled by water; it is the pattern's periodicity."
    next_step_rules:
      - id: l-next
        when: lambda > 0
        status: info
        text:
          es: "Compare este valor con la profundidad [[h]] para confirmar el régimen batimétrico."
          en: "Compare this value with the depth [[h]] to confirm the bathymetric regime."

  g:
    summary_rules:
      - id: g-val
        when: g > 0
        status: success
        text:
          es: "La gravedad [[g]] ({g} m/s²) es el motor dinámico que restaura la superficie a su equilibrio."
          en: "Gravity [[g]] ({g} m/s²) is the dynamic motor that restores the surface to its equilibrium."
    physical_reading_rules:
      - id: g-phys
        when: g > 0
        status: success
        text:
          es: "La aceleración gravitatoria permite la conversión de energía potencial en cinética orbital."
          en: "Gravitational acceleration allows the conversion of potential energy into orbital kinetic energy."
    coherence_rules:
      - id: g-coh
        when: g > 0
        status: success
        text:
          es: "Valor de aceleración consistente con un campo gravitatorio planetario."
          en: "Acceleration value consistent with a planetary gravitational field."
    model_validity_rules:
      - id: g-valid
        when: g > 0
        status: success
        text:
          es: "Imprescindible para la existencia de ondas de gravedad superficiales."
          en: "Essential for the existence of surface gravity waves."
    graph_rules:
      - id: g-graph
        when: g > 0
        status: info
        text:
          es: "Un mayor valor de [[g]] acelera la oscilación visual de la superficie."
          en: "A higher value of [[g]] accelerates the visual oscillation of the surface."
    likely_errors:
      - id: g-err
        when: g > 20
        status: warning
        text:
          es: "Cuidado: un valor de gravedad inusualmente alto sugiere un escenario no terrestre."
          en: "Caution: an unusually high gravity value suggests a non-terrestrial scenario."
    next_step_rules:
      - id: g-next
        when: g > 0
        status: info
        text:
          es: "Experimente cambiando la gravedad (ej. en la Luna) para ver cómo afecta la rapidez del oleaje."
          en: "Experiment by changing gravity (e.g., on the Moon) to see how it affects wave speed."

config:
  decimal_places: 2
  show_graphs: true
`;export{e as default};
