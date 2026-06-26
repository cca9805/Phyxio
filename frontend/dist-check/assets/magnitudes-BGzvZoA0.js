const e=`version: 5
magnitudes:
  - id: c
    symbol: c
    nombre:
      es: Velocidad de propagación
      en: Propagation speed
    si_unit: m/s
    unidad_si: m/s
    dimension: L/T
    is_vector: false
    components: []
    category: cinematica
    physical_role: parametro_medio
    used_in: [onda_fundamental, velocidad_fluido]
    common_mistake: "Confundirla con la velocidad de las partículas individuales."
    sign_behavior: siempre_positivo
    zero_behavior: implica_estatismo
    value_nature: escalar_finito
    interpretation_role: velocidad_fase
    graph_binding: "Velocidad de traslación del perfil de onda."
    descripcion:
      es: Rapidez con la que la perturbación mecánica se desplaza a través del medio fluido.
      en: Speed at which the mechanical disturbance travels through the fluid medium.
    typical_range: [340, 1500]
    pedagogical_notes:
      es: Depende de las propiedades elásticas e inerciales del medio.
      en: Depends on the elastic and inertial properties of the medium.

  - id: f
    symbol: f
    nombre:
      es: Frecuencia
      en: Frequency
    si_unit: Hz
    unidad_si: Hz
    dimension: 1/T
    is_vector: false
    components: []
    category: cinematica
    physical_role: parametro_fuente
    used_in: [onda_fundamental, omega_def]
    common_mistake: "Confundir con la frecuencia angular omega."
    sign_behavior: siempre_positivo
    zero_behavior: estado_estacionario
    value_nature: escalar_finito
    interpretation_role: tono
    graph_binding: "Ritmo de oscilación de las partículas."
    descripcion:
      es: Número de oscilaciones por unidad de tiempo que realizan las partículas del medio.
      en: Number of oscillations per unit time performed by the particles of the medium.
    typical_range: [20, 20000]
    pedagogical_notes:
      es: Característica intrínseca de la fuente emisora.
      en: Intrinsic characteristic of the emitting source.

  - id: lambda
    symbol: \\lambda
    nombre:
      es: Longitud de onda
      en: Wavelength
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: cinematica
    physical_role: propiedad_espacial
    used_in: [onda_fundamental, numero_onda_def]
    common_mistake: "Medirla entre un nodo y un antinodo en lugar de entre dos crestas."
    sign_behavior: siempre_positivo
    zero_behavior: fisicamente_imposible
    value_nature: escalar_finito
    interpretation_role: escala_espacial
    graph_binding: "Distancia entre zonas de máxima compresión."
    descripcion:
      es: Distancia mínima entre dos puntos que oscilan en fase.
      en: Minimum distance between two points oscillating in phase.
    typical_range: [0.01, 17]
    pedagogical_notes:
      es: Representa la periodicidad espacial de la onda.
      en: Represents the wave's spatial periodicity.

  - id: p_hat
    symbol: \\hat{p}
    nombre:
      es: Amplitud de presión
      en: Pressure amplitude
    si_unit: Pa
    unidad_si: Pa
    dimension: M/(L*T^2)
    is_vector: false
    components: []
    category: dinamica
    physical_role: amplitud_perturbacion
    used_in: [relacion_amplitudes]
    common_mistake: "Asumir que es la presión total en lugar de la variación respecto al equilibrio."
    sign_behavior: siempre_positivo
    zero_behavior: ausencia_sonido
    value_nature: escalar_finito
    interpretation_role: intensidad_sonora
    graph_binding: "Densidad de puntos en las zonas de compresión."
    descripcion:
      es: Máxima variación de presión respecto a la presión de equilibrio del fluido.
      en: Maximum pressure variation relative to the equilibrium fluid pressure.
    typical_range: [1e-5, 100]
    pedagogical_notes:
      es: Magnitud clave en la percepción de la sonoridad.
      en: Key magnitude in loudness perception.

  - id: s_hat
    symbol: \\hat{s}
    nombre:
      es: Amplitud de desplazamiento
      en: Displacement amplitude
    si_unit: m
    unidad_si: m
    dimension: L
    is_vector: false
    components: []
    category: cinematica
    physical_role: amplitud_perturbacion
    used_in: [relacion_amplitudes]
    common_mistake: "Confundir con el desplazamiento instantáneo s(x,t)."
    sign_behavior: siempre_positivo
    zero_behavior: reposo
    value_nature: escalar_finito
    interpretation_role: excursion_particula
    graph_binding: "Amplitud del vaivén de los puntos en la simulación."
    descripcion:
      es: Máximo desplazamiento de una partícula de fluido respecto a su posición de equilibrio.
      en: Maximum displacement of a fluid particle from its equilibrium position.
    typical_range: [1e-10, 1e-6]
    pedagogical_notes:
      es: Representa el movimiento físico real de las moléculas.
      en: Represents the actual physical movement of molecules.

  - id: k
    symbol: k
    nombre:
      es: Número de onda
      en: Wave number
    si_unit: rad/m
    unidad_si: rad/m
    dimension: 1/L
    is_vector: false
    components: []
    category: cinematica
    physical_role: parametro_espacial
    used_in: [relacion_amplitudes, numero_onda_def]
    common_mistake: "Olvidar el factor 2pi al relacionarlo con lambda."
    sign_behavior: siempre_positivo
    zero_behavior: longitud_infinita
    value_nature: escalar_finito
    interpretation_role: frecuencia_espacial
    graph_binding: "Frecuencia de las crestas en el eje x."
    descripcion:
      es: Periodicidad espacial de la onda.
      en: Spatial periodicity of the wave.
    typical_range: [0.3, 600]
    pedagogical_notes:
      es: Mide cuántos ciclos ocurren en una unidad de distancia radial.
      en: Measures how many cycles occur in a unit of radial distance.

  - id: omega
    symbol: \\omega
    nombre:
      es: Frecuencia angular
      en: Angular frequency
    si_unit: rad/s
    unidad_si: rad/s
    dimension: 1/T
    is_vector: false
    components: []
    category: cinematica
    physical_role: parametro_temporal
    used_in: [omega_def]
    common_mistake: "Confundir con la frecuencia lineal f."
    sign_behavior: siempre_positivo
    zero_behavior: sin_oscilacion
    value_nature: escalar_finito
    interpretation_role: rapidez_fase_temporal
    graph_binding: "Velocidad angular de la animación."
    descripcion:
      es: Rapidez de cambio de la fase de la onda en el tiempo.
      en: Rate of change of the wave phase over time.
    typical_range: [120, 120000]
    pedagogical_notes:
      es: Mide la rapidez de la oscilación en términos de fase circular.
      en: Measures oscillation speed in terms of circular phase.

  - id: B
    symbol: B
    nombre:
      es: Módulo de compresibilidad
      en: Bulk modulus
    si_unit: Pa
    unidad_si: Pa
    dimension: M/(L*T^2)
    is_vector: false
    components: []
    category: termodinamica
    physical_role: elasticidad_medio
    used_in: [relacion_amplitudes, velocidad_fluido]
    common_mistake: "Usar el valor isotérmico en lugar del adiabático para gases."
    sign_behavior: siempre_positivo
    zero_behavior: medio_infinitamente_compresible
    value_nature: escalar_finito
    interpretation_role: rigidez_volumetrica
    graph_binding: "Factor de escala entre desplazamiento y presión."
    descripcion:
      es: Medida de la resistencia del fluido a la compresión uniforme.
      en: Measure of the fluid's resistance to uniform compression.
    typical_range: [1e5, 2e9]
    pedagogical_notes:
      es: Indica qué tan difícil es cambiar el volumen del fluido.
      en: Indicates how difficult it is to change the fluid's volume.

  - id: rho
    symbol: \\rho
    nombre:
      es: Densidad del medio
      en: Medium density
    si_unit: kg/m^3
    unidad_si: kg/m^3
    dimension: M/L^3
    is_vector: false
    components: []
    category: mecanica_fluidos
    physical_role: inercia_medio
    used_in: [velocidad_fluido]
    common_mistake: "Olvidar que la densidad puede variar con la temperatura y presión."
    sign_behavior: siempre_positivo
    zero_behavior: vacio
    value_nature: escalar_finito
    interpretation_role: inercia_volumetrica
    graph_binding: "Inercia visual en la respuesta del medio."
    descripcion:
      es: Masa por unidad de volumen del fluido en equilibrio.
      en: Mass per unit volume of the fluid in equilibrium.
    typical_range: [1, 1000]
    pedagogical_notes:
      es: Es la magnitud que representa la inercia del sistema acústico.
      en: It is the magnitude representing the inertia of the acoustic system.
`;export{e as default};
