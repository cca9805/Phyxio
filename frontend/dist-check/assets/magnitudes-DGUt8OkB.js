const e=`\uFEFFversion: 2\r
magnitudes:\r
  - id: W\r
    symbol: W\r
    nombre:\r
      es: peso de la carga\r
      en: load weight\r
    descripcion:\r
      es: Fuerza peso total que el sistema debe sostener o elevar.\r
      en: Total weight force that the system must support or lift.\r
    unidad_si: N\r
    dimension: MLT^-2\r
    is_vector: false\r
    category: parameter\r
    physical_role: parameter\r
    used_in:\r
      - fuerza_ideal_poleas\r
    components:\r
      scalar: true\r
      x: false\r
      y: false\r
      tangential: false\r
      radial: false\r
    common_mistake:\r
      es: Confundir el peso con la masa y escribir el dato en kilogramos en vez de en newton.\r
      en: Confusing weight with mass and writing the datum in kilograms instead of newtons.\r
    typical_range:\r
      es: En problemas introductorios suele ir desde decenas hasta algunos miles de newton.\r
      en: In introductory problems it usually ranges from tens to a few thousand newtons.\r
    sign_behavior:\r
      es: En este leaf se usa como magnitud positiva; la dirección física está implícita en el modelo.\r
      en: In this leaf it is used as a positive magnitude; the physical direction is implicit in the model.\r
    zero_behavior:\r
      es: Si W vale cero, desaparece la carga y el problema pierde interés físico.\r
      en: If W is zero, the load disappears and the problem loses physical meaning.\r
    value_nature:\r
      es: Magnitud escalar derivada de la interacción gravitatoria.\r
      en: Scalar quantity derived from the gravitational interaction.\r
    interpretation_role:\r
      es: Representa la exigencia mecánica total que el polipasto debe compensar.\r
      en: It represents the total mechanical demand that the pulley block must compensate.\r
    graph_binding:\r
      es: Fija la escala vertical de fuerzas en gráficos y comparaciones.\r
      en: It sets the vertical force scale in graphs and comparisons.\r
    pedagogical_notes:\r
      es: Conviene recordar que el sistema reparte el peso entre tramos, no entre masas.\r
      en: It is useful to remember that the system shares weight among segments, not among masses.\r
\r
  - id: nSel\r
    symbol: n\r
    nombre:\r
      es: número de tramos activos\r
      en: number of supporting segments\r
    descripcion:\r
      es: Número de segmentos de cuerda que sostienen directamente la carga en el modelo ideal.\r
      en: Number of rope segments directly supporting the load in the ideal model.\r
    unidad_si: '1'\r
    dimension: '1'\r
    is_vector: false\r
    category: parameter\r
    physical_role: parameter\r
    used_in:\r
      - fuerza_ideal_poleas\r
      - traccion_cable_poleas\r
    components:\r
      scalar: true\r
      x: false\r
      y: false\r
      tangential: false\r
      radial: false\r
    common_mistake:\r
      es: Contar segmentos que redirigen la cuerda pero no sostienen realmente la carga.\r
      en: Counting segments that redirect the rope but do not actually support the load.\r
    typical_range:\r
      es: En montaje didáctico suele tomar valores enteros pequeños, entre 1 y 6.\r
      en: In educational setups it usually takes small integer values, between 1 and 6.\r
    sign_behavior:\r
      es: Debe ser positivo y entero dentro de la lectura física del sistema.\r
      en: It must be positive and integer within the physical reading of the system.\r
    zero_behavior:\r
      es: Un valor nulo no tiene sentido porque implicaría ausencia total de sostén por cuerda.\r
      en: A zero value is meaningless because it would imply no rope support at all.\r
    value_nature:\r
      es: Magnitud discreta y adimensional.\r
      en: Discrete and dimensionless quantity.\r
    interpretation_role:\r
      es: Controla simultáneamente la ventaja mecánica y el intercambio con el recorrido de cuerda.\r
      en: It controls both the mechanical advantage and the trade-off with rope travel.\r
    graph_binding:\r
      es: Modifica la pendiente o la curvatura aparente de relaciones idealizadas entre variables.\r
      en: It changes the slope or apparent curvature of idealized relationships between variables.\r
    pedagogical_notes:\r
      es: Es la variable estructural más importante del leaf.\r
      en: It is the most important structural variable in the leaf.\r
\r
  - id: dx_load\r
    symbol: dx_load\r
    nombre:\r
      es: desplazamiento de la carga\r
      en: load displacement\r
    descripcion:\r
      es: Distancia vertical recorrida por la carga durante la maniobra.\r
      en: Vertical distance traveled by the load during the maneuver.\r
    unidad_si: m\r
    dimension: L\r
    is_vector: false\r
    category: parameter\r
    physical_role: parameter\r
    used_in:\r
      - traccion_cable_poleas\r
    components:\r
      scalar: true\r
      x: false\r
      y: true\r
      tangential: false\r
      radial: false\r
    common_mistake:\r
      es: Pensar que coincide siempre con la cuerda tirada por el operador.\r
      en: Thinking that it is always equal to the rope pulled by the operator.\r
    typical_range:\r
      es: En ejercicios habituales va desde unos centímetros hasta algunos metros.\r
      en: In standard exercises it goes from a few centimeters to a few meters.\r
    sign_behavior:\r
      es: En este leaf se interpreta como magnitud positiva asociada al ascenso deseado.\r
      en: In this leaf it is interpreted as a positive magnitude associated with the desired rise.\r
    zero_behavior:\r
      es: Si vale cero, la carga no cambia de posición.\r
      en: If it is zero, the load does not change position.\r
    value_nature:\r
      es: Magnitud cinemática escalar.\r
      en: Scalar kinematic quantity.\r
    interpretation_role:\r
      es: Mide el efecto útil del sistema sobre la carga.\r
      en: It measures the useful effect of the system on the load.\r
    graph_binding:\r
      es: Actúa como variable de entrada en relaciones geométricas de recorrido.\r
      en: It acts as an input variable in geometric travel relations.\r
    pedagogical_notes:\r
      es: Es útil compararla siempre con dx_pull para entender el precio geométrico de la ventaja mecánica.\r
      en: It is useful to compare it with dx_pull to understand the geometric price of mechanical advantage.\r
\r
  - id: F\r
    symbol: F\r
    nombre:\r
      es: fuerza aplicada\r
      en: applied force\r
    descripcion:\r
      es: Fuerza ideal que ejerce el operador sobre el extremo libre de la cuerda.\r
      en: Ideal force exerted by the operator on the free end of the rope.\r
    unidad_si: N\r
    dimension: MLT^-2\r
    is_vector: false\r
    category: derived\r
    physical_role: dependent\r
    used_in:\r
      - fuerza_ideal_poleas\r
    components:\r
      scalar: true\r
      x: false\r
      y: false\r
      tangential: false\r
      radial: false\r
    common_mistake:\r
      es: Suponer que siempre coincide con el peso o que puede hacerse arbitrariamente pequeña sin consecuencias.\r
      en: Assuming that it always equals the weight or that it can become arbitrarily small without consequences.\r
    typical_range:\r
      es: Suele ser menor o igual que W en el modelo ideal con nSel mayor o igual que 1.\r
      en: It is usually less than or equal to W in the ideal model with nSel greater than or equal to 1.\r
    sign_behavior:\r
      es: Se usa como magnitud positiva de esfuerzo aplicado.\r
      en: It is used as a positive magnitude of applied effort.\r
    zero_behavior:\r
      es: Solo puede anularse si la carga también desaparece en el modelo ideal.\r
      en: It can vanish only if the load also disappears in the ideal model.\r
    value_nature:\r
      es: Magnitud mecánica derivada del reparto de tensión.\r
      en: Mechanical quantity derived from tension sharing.\r
    interpretation_role:\r
      es: Representa el esfuerzo que debe aportar el operador.\r
      en: It represents the effort that the operator must provide.\r
    graph_binding:\r
      es: Es la salida principal en gráficos de ventaja mecánica.\r
      en: It is the main output in mechanical-advantage graphs.\r
    pedagogical_notes:\r
      es: Debe leerse siempre junto con nSel para evitar interpretaciones aisladas.\r
      en: It should always be read together with nSel to avoid isolated interpretations.\r
\r
  - id: dx_pull\r
    symbol: dx_pull\r
    nombre:\r
      es: desplazamiento de cuerda tirada\r
      en: pulled rope displacement\r
    descripcion:\r
      es: Longitud de cuerda que el operador debe recoger para producir el ascenso de la carga.\r
      en: Rope length that the operator must pull to produce the rise of the load.\r
    unidad_si: m\r
    dimension: L\r
    is_vector: false\r
    category: derived\r
    physical_role: dependent\r
    used_in:\r
      - traccion_cable_poleas\r
    components:\r
      scalar: true\r
      x: false\r
      y: true\r
      tangential: false\r
      radial: false\r
    common_mistake:\r
      es: Creer que la polea reduce fuerza sin aumentar esta distancia.\r
      en: Believing that the pulley reduces force without increasing this distance.\r
    typical_range:\r
      es: Suele ser igual o mayor que dx_load en todos los montajes ideales relevantes.\r
      en: It is usually equal to or greater than dx_load in all relevant ideal setups.\r
    sign_behavior:\r
      es: Se toma positiva como longitud de cuerda recogida.\r
      en: It is taken as positive as the length of rope pulled.\r
    zero_behavior:\r
      es: Si vale cero, el operador no tira cuerda y la carga no asciende.\r
      en: If it is zero, the operator pulls no rope and the load does not rise.\r
    value_nature:\r
      es: Magnitud cinemática derivada de una restricción geométrica.\r
      en: Kinematic quantity derived from a geometric constraint.\r
    interpretation_role:\r
      es: Mide el coste cinemático de reducir la fuerza requerida.\r
      en: It measures the kinematic cost of reducing the required force.\r
    graph_binding:\r
      es: Es la salida principal en gráficos de intercambio entre fuerza y recorrido.\r
      en: It is the main output in graphs of the trade-off between force and travel.\r
    pedagogical_notes:\r
      es: Es la clave para conectar poleas simples con trabajo y energía.\r
      en: It is the key to connect simple pulleys with work and energy.\r
\r
`;export{e as default};
