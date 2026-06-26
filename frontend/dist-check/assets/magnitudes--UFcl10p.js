const n=`version: v5
leaf_id: difraccion
magnitudes:
  - id: theta_dif
    symbol: "\\\\theta"
    nombre:
      es: Angulo de difraccion
      en: Diffraction angle
    descripcion:
      es: Angulo que forma la direccion del maximo o minimo de difraccion con la direccion de incidencia normal.
      en: Angle between the direction of the diffraction maximum or minimum and the normal incidence direction.
    unidad_si: "rad"
    dimension: "adimensional"
    is_vector: false
    components: []
    category: derived
    physical_role: core_physical_quantity
    used_in:
      - Calculo de posicion de maximos y minimos
      - Diseno de redes de difraccion
      - Optica instrumental
    common_mistake: "Confundir el angulo de difraccion con el angulo de incidencia o con la desviacion total."
    typical_range: "0 a pi/2 rad (0 a 90 grados)"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Positivo hacia un lado de la normal, negativo hacia el otro. El signo indica direccion relativa."
        en: "Positive to one side of the normal, negative to the other. Sign indicates relative direction."
    zero_behavior:
      allowed: true
      meaning:
        es: "Angulo cero corresponde a la direccion de incidencia normal (maximo central)."
        en: "Zero angle corresponds to normal incidence direction (central maximum)."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "[-pi/2, pi/2]"
    interpretation_role:
      primary_for:
        - direccion_frente_difractado
        - posicion_maximos
      secondary_for:
        - resolucion_angular
    graph_binding:
      channels:
        - angular_scale
        - diffraction_pattern_axis
    pedagogical_notes:
      es: "El angulo de difraccion determina la direccion en que se observa cada maximo o minimo. A mayor orden, mayor angulo y mayor separacion de la direccion central."
      en: "The diffraction angle determines the direction in which each maximum or minimum is observed. Higher order means larger angle and greater separation from the central direction."

  - id: lambda
    symbol: "\\\\lambda"
    nombre:
      es: Longitud de onda
      en: Wavelength
    descripcion:
      es: Distancia espacial entre dos puntos consecutivos de la onda que se encuentran en la misma fase.
      en: Spatial distance between two consecutive points of the wave that are in the same phase.
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: []
    category: fundamental
    physical_role: parameter
    used_in:
      - Calculo de angulos de difraccion
      - Diseno de monocromadores
      - Espectroscopia
    common_mistake: "Confundir la longitud de onda con el periodo temporal. La longitud de onda es espacial, no temporal."
    typical_range: "400 nm a 700 nm (visible), 1 nm a 1 m (general)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La longitud de onda es siempre positiva por definicion fisica."
        en: "Wavelength is always positive by physical definition."
    zero_behavior:
      allowed: false
      meaning:
        es: "Longitud de onda nula implicaria frecuencia infinita, fisicamente imposible."
        en: "Zero wavelength would imply infinite frequency, physically impossible."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, inf)"
    interpretation_role:
      primary_for:
        - color_luz
        - escala_espacial_oscilacion
      secondary_for:
        - angulo_difraccion
    graph_binding:
      channels:
        - wavelength_indicator
        - spectral_scale
    pedagogical_notes:
      es: "La longitud de onda es la huella dactilar de cada radiacion. Determina el color en luz visible y la escala de los fenomenos ondulatorios."
      en: "Wavelength is the fingerprint of each radiation. It determines color in visible light and the scale of wave phenomena."

  - id: a_abertura
    symbol: "a"
    nombre:
      es: Ancho de la abertura
      en: Aperture width
    descripcion:
      es: Dimension caracteristica de la abertura por la que pasa la onda. En una rendija, es la anchura perpendicular a la direccion de propagacion.
      en: Characteristic dimension of the aperture through which the wave passes. In a slit, it is the width perpendicular to the propagation direction.
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: []
    category: parameter
    physical_role: parameter
    used_in:
      - Calculo de angulos de difraccion
      - Diseno de filtros espaciales
      - Optica de Fourier
    common_mistake: "Confundir el ancho de la abertura con la separacion entre rendijas en redes de difraccion."
    typical_range: "1 micrometro a 1 milimetro (optica), metros (ondas de radio)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "El ancho es siempre positivo por definicion geometrica."
        en: "Width is always positive by geometric definition."
    zero_behavior:
      allowed: false
      meaning:
        es: "Ancho nulo implicaria abertura cerrada, sin onda transmitida."
        en: "Zero width would imply closed aperture, no transmitted wave."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, inf)"
    interpretation_role:
      primary_for:
        - escala_obstaculo
        - condicion_difraccion
      secondary_for:
        - ancho_maximo_central
    graph_binding:
      channels:
        - aperture_size_indicator
    pedagogical_notes:
      es: "El ancho de la abertura controla la extension angular del patron de difraccion. Aberturas mas estrechas producen difraccion mas pronunciada."
      en: "The aperture width controls the angular spread of the diffraction pattern. Narrower apertures produce more pronounced diffraction."

  - id: m_orden
    symbol: "m"
    nombre:
      es: Orden del maximo o minimo
      en: Order of maximum or minimum
    descripcion:
      es: Numero entero que etiqueta cada maximo o minimo del patron de difraccion. El maximo central tiene orden cero.
      en: Integer number that labels each maximum or minimum in the diffraction pattern. The central maximum has zero order.
    unidad_si: "adimensional"
    dimension: "adimensional"
    is_vector: false
    components: []
    category: derived
    physical_role: derived
    used_in:
      - Calculo de posiciones de maximos
      - Etiquetado de ordenes espectrales
      - Resolucion de redes
    common_mistake: "Confundir el orden espectral con el numero de lineas por unidad de longitud de una red de difraccion."
    typical_range: "0, 1, 2, 3... hasta limites practicos de intensidad"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Positivo a un lado del maximo central, negativo al otro lado. Simetria bilateral."
        en: "Positive to one side of central maximum, negative to the other side. Bilateral symmetry."
    zero_behavior:
      allowed: true
      meaning:
        es: "Orden cero corresponde al maximo central, en la direccion de incidencia."
        en: "Zero order corresponds to the central maximum, in the incidence direction."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "[-inf, inf] enteros"
    interpretation_role:
      primary_for:
        - etiquetado_maximos
        - conteo_ordenes
      secondary_for:
        - dispersion_espectral
    graph_binding:
      channels:
        - order_label
    pedagogical_notes:
      es: "El orden m es un indice entero que cuenta los maximos desde el centro. Cada orden corresponde a una condicion de interferencia constructiva diferente."
      en: "The order m is an integer index counting maxima from the center. Each order corresponds to a different constructive interference condition."

  - id: L_distancia
    symbol: "L"
    nombre:
      es: Distancia a la pantalla
      en: Distance to screen
    descripcion:
      es: Separacion entre la abertura difractante y la pantalla o detector donde se observa el patron.
      en: Separation between the diffracting aperture and the screen or detector where the pattern is observed.
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: []
    category: state
    physical_role: state
    used_in:
      - Calculo de posiciones lineales en pantalla
      - Diseno de montajes opticos
      - Calibracion experimental
    common_mistake: "Confundir la distancia a la pantalla con la distancia focal de una lente colocada despues de la abertura."
    typical_range: "1 metro a 10 metros (laboratorio), micrometros (integrado)"
    sign_behavior:
      has_sign: false
      meaning:
        es: "La distancia es siempre positiva por definicion geometrica."
        en: "Distance is always positive by geometric definition."
    zero_behavior:
      allowed: false
      meaning:
        es: "Distancia nula implicaria pantalla en la abertura, sin espacio para formar el patron."
        en: "Zero distance would imply screen at the aperture, no space to form the pattern."
    value_nature:
      kind: scalar_unsigned
      nonnegative_only: true
      expected_interval: "(0, inf)"
    interpretation_role:
      primary_for:
        - escala_pantalla
      secondary_for:
        - conversion_angular_a_lineal
    graph_binding:
      channels:
        - distance_scale
    pedagogical_notes:
      es: "La distancia a la pantalla convierte los angulos de difraccion en posiciones observables. Mayor distancia amplifica la escala del patron pero reduce la intensidad."
      en: "The screen distance converts diffraction angles into observable positions. Greater distance amplifies the pattern scale but reduces intensity."

  - id: y_posicion
    symbol: "y"
    nombre:
      es: Posicion en la pantalla
      en: Position on screen
    descripcion:
      es: Coordenada lineal del maximo o minimo medida desde el centro del patron en la pantalla.
      en: Linear coordinate of the maximum or minimum measured from the center of the pattern on the screen.
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: []
    category: derived
    physical_role: derived
    used_in:
      - Medicion experimental de patrones
      - Calibracion de espectrometros
      - Procesamiento de imagenes
    common_mistake: "Confundir la posicion lineal con el angulo de difraccion. En campo cercano no coinciden."
    typical_range: "0 a 0.1 m (laboratorio tipico)"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Positiva a un lado del centro, negativa al otro. Indica direccion lateral relativa."
        en: "Positive to one side of center, negative to the other. Indicates relative lateral direction."
    zero_behavior:
      allowed: true
      meaning:
        es: "Posicion cero corresponde al maximo central en la direccion de incidencia."
        en: "Zero position corresponds to the central maximum in the incidence direction."
    value_nature:
      kind: scalar_signed
      nonnegative_only: false
      expected_interval: "[-inf, inf]"
    interpretation_role:
      primary_for:
        - coordenada_observable
      secondary_for:
        - medicion_experimental
    graph_binding:
      channels:
        - screen_position_axis
    pedagogical_notes:
      es: "La posicion en pantalla es lo que realmente se mide experimentalmente. Relaciona la teoria angular con la observacion practica."
      en: "The screen position is what is actually measured experimentally. It relates angular theory to practical observation."
`;export{n as default};
