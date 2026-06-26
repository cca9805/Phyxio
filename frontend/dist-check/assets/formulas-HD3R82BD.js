const e=`version: "1.0"
leaf_id: resonancia-y-modos-en-barras

formulas:
  - id: freq_longitudinal_libre_libre
    nombre:
      es: Frecuencia natural longitudinal de barra libre-libre
      en: Natural longitudinal frequency of a free-free bar
    title:
      es: "Frecuencia natural longitudinal de barra libre-libre"
      en: "Natural longitudinal frequency of a free-free bar"
    equation: "f_n = n * v_L / (2 * L_barra)"
    latex: "f_n = n v_L / (2 L)"
    expresion_latex: "f_n = \\\\frac{n \\\\, v_L}{2L}"
    expresion_verbal:
      es: "La frecuencia del modo n es n veces la velocidad longitudinal dividida entre dos veces la longitud de la barra."
      en: "The frequency of mode n is n times the longitudinal velocity divided by twice the bar length."
    variables:
      - id: f_n
        nombre: { es: Frecuencia natural del modo n, en: Natural frequency of mode n }
        unidad: "Hz"
      - id: n_modo
        nombre: { es: Numero de modo, en: Mode number }
        unidad: "adimensional"
      - id: v_L
        nombre: { es: Velocidad de onda longitudinal, en: Longitudinal wave velocity }
        unidad: "m/s"
      - id: L_barra
        nombre: { es: Longitud de la barra, en: Bar length }
        unidad: "m"
    resultado:
      magnitud_id: f_n
      semantica:
        es: "Frecuencia a la que se establece el modo n de vibracion longitudinal en una barra con extremos libres."
        en: "Frequency at which the nth longitudinal vibration mode is established in a bar with free ends."
    result_semantics:
      es: "Frecuencia a la que se establece el modo n de vibracion longitudinal en una barra con extremos libres."
      en: "Frequency at which the nth longitudinal vibration mode is established in a bar with free ends."
    reordenamientos:
      - id: despeje_v_L
        target: v_L
        expresion_latex: "v_L = \\\\frac{2 L f_n}{n}"
        descripcion:
          es: "Velocidad longitudinal a partir de la frecuencia natural, la longitud y el numero de modo."
          en: "Longitudinal velocity from natural frequency, length and mode number."
      - id: despeje_L
        target: L_barra
        expresion_latex: "L = \\\\frac{n \\\\, v_L}{2 f_n}"
        descripcion:
          es: "Longitud de la barra a partir de la frecuencia, la velocidad y el numero de modo."
          en: "Bar length from frequency, velocity and mode number."
      - id: despeje_n
        target: n_modo
        expresion_latex: "n = \\\\frac{2 L f_n}{v_L}"
        descripcion:
          es: "Numero de modo a partir de la frecuencia, la longitud y la velocidad."
          en: "Mode number from frequency, length and velocity."
    rearrangements:
      - id: despeje_v_L
        target: v_L
        equation: "v_L = 2 * L_barra * f_n / n_modo"
        latex: "v_L = 2 L f_n / n"
        description:
          es: "Velocidad longitudinal a partir de la frecuencia natural, la longitud y el numero de modo."
          en: "Longitudinal velocity from natural frequency, length and mode number."
      - id: despeje_L
        target: L_barra
        equation: "L_barra = n_modo * v_L / (2 * f_n)"
        latex: "L = n v_L / (2 f_n)"
        description:
          es: "Longitud de la barra a partir de la frecuencia, la velocidad y el numero de modo."
          en: "Bar length from frequency, velocity and mode number."
      - id: despeje_n
        target: n_modo
        equation: "n_modo = 2 * L_barra * f_n / v_L"
        latex: "n = 2 L f_n / v_L"
        description:
          es: "Numero de modo a partir de la frecuencia, la longitud y la velocidad."
          en: "Mode number from frequency, length and velocity."
    categoria:
      principal: ondas-en-solidos
      secundaria: resonancia-modos
    category: "resonance_formula"
    relation_type: "derived"
    physical_meaning:
      es: "Los modos longitudinales de una barra libre-libre son armonicos equiespaciados en frecuencia. La longitud fija la frecuencia fundamental y todos los armonicos son multiplos enteros."
      en: "Longitudinal modes of a free-free bar are harmonics equally spaced in frequency. The length sets the fundamental frequency and all harmonics are integer multiples."
    validity:
      es: "Valida para barra delgada (L >> seccion), isotropa, homogenea, elastica lineal, con extremos libres de esfuerzo."
      en: "Valid for a slender bar (L >> cross-section), isotropic, homogeneous, linearly elastic, with stress-free ends."
    dimension_check: "\`[1] * [L T^-1] / [L] -> [T^-1]\`"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - "calculo de frecuencia fundamental"
      - "identificacion de modos"
      - "diseño de barras resonantes"
    interpretation_tags:
      - "resonancia_longitudinal"
      - "armonicos"
      - "libre_libre"
    domain_checks:
      - "Verificar que n sea entero positivo."
      - "Verificar que L_barra y v_L sean positivos."
    coherence_checks:
      - "f_n debe ser positiva."
      - "Las frecuencias deben ser multiplos enteros de la fundamental."
    graph_implications:
      - "Los modos son equiespaciados en frecuencia."
      - "La forma modal tiene n maximos de desplazamiento."
    pedagogical_triggers:
      - "Confundir condiciones libre-libre con fijo-libre."
      - "Olvidar que n empieza en 1, no en 0."
    constraints:
      - "n >= 1 (entero)"
      - "v_L > 0"
      - "L_barra > 0"
      - "f_n > 0"

  - id: freq_longitudinal_fijo_libre
    nombre:
      es: Frecuencia natural longitudinal de barra fijo-libre
      en: Natural longitudinal frequency of a fixed-free bar
    title:
      es: "Frecuencia natural longitudinal de barra fijo-libre"
      en: "Natural longitudinal frequency of a fixed-free bar"
    equation: "f_n = (2*n - 1) * v_L / (4 * L_barra)"
    latex: "f_n = (2n - 1) v_L / (4 L)"
    expresion_latex: "f_n = \\\\frac{(2n-1) \\\\, v_L}{4L}"
    expresion_verbal:
      es: "La frecuencia del modo n es dos-n-menos-uno veces la velocidad longitudinal dividida entre cuatro veces la longitud."
      en: "The frequency of mode n is two-n-minus-one times the longitudinal velocity divided by four times the length."
    variables:
      - id: f_n
        nombre: { es: Frecuencia natural del modo n, en: Natural frequency of mode n }
        unidad: "Hz"
      - id: n_modo
        nombre: { es: Numero de modo, en: Mode number }
        unidad: "adimensional"
      - id: v_L
        nombre: { es: Velocidad de onda longitudinal, en: Longitudinal wave velocity }
        unidad: "m/s"
      - id: L_barra
        nombre: { es: Longitud de la barra, en: Bar length }
        unidad: "m"
    resultado:
      magnitud_id: f_n
      semantica:
        es: "Frecuencia a la que se establece el modo n longitudinal en una barra empotrada en un extremo y libre en el otro."
        en: "Frequency at which the nth longitudinal mode is established in a bar clamped at one end and free at the other."
    result_semantics:
      es: "Frecuencia a la que se establece el modo n longitudinal en una barra empotrada en un extremo y libre en el otro."
      en: "Frequency at which the nth longitudinal mode is established in a bar clamped at one end and free at the other."
    reordenamientos:
      - id: despeje_v_L_fijo_libre
        target: v_L
        expresion_latex: "v_L = \\\\frac{4 L f_n}{2n-1}"
        descripcion:
          es: "Velocidad longitudinal a partir de la frecuencia y la longitud en condicion fijo-libre."
          en: "Longitudinal velocity from frequency and length in fixed-free condition."
      - id: despeje_L_fijo_libre
        target: L_barra
        expresion_latex: "L = \\\\frac{(2n-1) v_L}{4 f_n}"
        descripcion:
          es: "Longitud de la barra a partir de la frecuencia, la velocidad y el modo."
          en: "Bar length from frequency, velocity and mode."
    rearrangements:
      - id: despeje_v_L_fijo_libre
        target: v_L
        equation: "v_L = 4 * L_barra * f_n / (2 * n_modo - 1)"
        latex: "v_L = 4 L f_n / (2n - 1)"
        description:
          es: "Velocidad longitudinal a partir de la frecuencia y la longitud en condicion fijo-libre."
          en: "Longitudinal velocity from frequency and length in fixed-free condition."
      - id: despeje_L_fijo_libre
        target: L_barra
        equation: "L_barra = (2 * n_modo - 1) * v_L / (4 * f_n)"
        latex: "L = (2n - 1) v_L / (4 f_n)"
        description:
          es: "Longitud de la barra a partir de la frecuencia, la velocidad y el modo."
          en: "Bar length from frequency, velocity and mode."
    categoria:
      principal: ondas-en-solidos
      secundaria: resonancia-modos
    category: "resonance_formula"
    relation_type: "derived"
    physical_meaning:
      es: "Solo los armonicos impares existen: el empotramiento fuerza un nodo de desplazamiento en ese extremo. La fundamental esta una octava por debajo de la barra libre-libre de igual longitud."
      en: "Only odd harmonics exist: the clamp forces a displacement node at that end. The fundamental is one octave below the free-free bar of the same length."
    validity:
      es: "Valida para barra delgada, isotropa, homogenea, con un extremo rigidamente empotrado y el otro libre."
      en: "Valid for a slender, isotropic, homogeneous bar with one end rigidly clamped and the other free."
    dimension_check: "\`[1] * [L T^-1] / [L] -> [T^-1]\`"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - "identificacion de modos en barras empotradas"
      - "diapasones y transductores"
      - "verificacion experimental de velocidad"
    interpretation_tags:
      - "resonancia_longitudinal"
      - "armonicos_impares"
      - "fijo_libre"
    domain_checks:
      - "Verificar que n sea entero positivo."
      - "El empotramiento debe ser suficientemente rigido."
    coherence_checks:
      - "Solo armonicos impares: la segunda frecuencia es 3 veces la fundamental, no 2."
      - "f_1 de fijo-libre es la mitad de f_1 libre-libre para la misma longitud."
    graph_implications:
      - "Los modos muestran nodo obligatorio en el extremo empotrado."
      - "El espaciado en frecuencia es no uniforme respecto a n (va como 2n-1)."
    pedagogical_triggers:
      - "Creer que todos los armonicos estan presentes."
      - "Confundir libre-libre con fijo-libre y usar 2L en vez de 4L."
    constraints:
      - "n >= 1 (entero)"
      - "v_L > 0"
      - "L_barra > 0"
      - "f_n > 0"

  - id: freq_torsional_libre_libre
    nombre:
      es: Frecuencia natural torsional de barra libre-libre
      en: Natural torsional frequency of a free-free bar
    title:
      es: "Frecuencia natural torsional de barra libre-libre"
      en: "Natural torsional frequency of a free-free bar"
    equation: "f_n = n * v_T / (2 * L_barra)"
    latex: "f_n = n v_T / (2 L)"
    expresion_latex: "f_n = \\\\frac{n \\\\, v_T}{2L}"
    expresion_verbal:
      es: "La frecuencia torsional del modo n es n veces la velocidad de onda de corte dividida entre dos veces la longitud."
      en: "The torsional frequency of mode n is n times the shear wave velocity divided by twice the length."
    variables:
      - id: f_n
        nombre: { es: Frecuencia natural torsional, en: Natural torsional frequency }
        unidad: "Hz"
      - id: n_modo
        nombre: { es: Numero de modo, en: Mode number }
        unidad: "adimensional"
      - id: v_T
        nombre: { es: Velocidad de onda de corte, en: Shear wave velocity }
        unidad: "m/s"
      - id: L_barra
        nombre: { es: Longitud de la barra, en: Bar length }
        unidad: "m"
    resultado:
      magnitud_id: f_n
      semantica:
        es: "Frecuencia a la que la barra vibra torsionalmente en el modo n con ambos extremos libres de momento torsor."
        en: "Frequency at which the bar vibrates torsionally in mode n with both ends free of torque."
    result_semantics:
      es: "Frecuencia a la que la barra vibra torsionalmente en el modo n con ambos extremos libres de momento torsor."
      en: "Frequency at which the bar vibrates torsionally in mode n with both ends free of torque."
    reordenamientos:
      - id: despeje_v_T
        target: v_T
        expresion_latex: "v_T = \\\\frac{2 L f_n}{n}"
        descripcion:
          es: "Velocidad de corte a partir de la frecuencia torsional."
          en: "Shear velocity from torsional frequency."
    rearrangements:
      - id: despeje_v_T
        target: v_T
        equation: "v_T = 2 * L_barra * f_n / n_modo"
        latex: "v_T = 2 L f_n / n"
        description:
          es: "Velocidad de corte a partir de la frecuencia torsional."
          en: "Shear velocity from torsional frequency."
    categoria:
      principal: ondas-en-solidos
      secundaria: resonancia-modos
    category: "resonance_formula"
    relation_type: "derived"
    physical_meaning:
      es: "Estructura identica a la longitudinal pero con la velocidad de corte. En seccion circular, la velocidad torsional coincide exactamente con la de cizalla; en secciones no circulares hay un factor corrector."
      en: "Identical structure to longitudinal but with shear velocity. For circular cross-section the torsional velocity exactly matches shear velocity; for non-circular sections a correction factor applies."
    validity:
      es: "Valida para barras de seccion circular, isotropas, homogeneas, sin acoplamiento flexion-torsion."
      en: "Valid for circular cross-section bars, isotropic, homogeneous, without bending-torsion coupling."
    dimension_check: "\`[1] * [L T^-1] / [L] -> [T^-1]\`"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - "caracterizacion del modulo de cizalla"
      - "diseño de ejes resonantes"
      - "ensayo no destructivo torsional"
    interpretation_tags:
      - "resonancia_torsional"
      - "velocidad_corte"
      - "seccion_circular"
    domain_checks:
      - "Verificar que la seccion sea circular o usar factor corrector."
      - "n entero positivo."
    coherence_checks:
      - "f_torsional < f_longitudinal para el mismo n y L, porque v_T < v_L siempre."
      - "Los modos son equiespaciados igual que en longitudinal libre-libre."
    graph_implications:
      - "Serie de frecuencias equiespaciadas, debajo de las longitudinales."
      - "Formas modales analogas a las longitudinales pero con angulo de giro."
    pedagogical_triggers:
      - "Confundir v_T con v_L al calcular frecuencias torsionales."
      - "Aplicar a secciones no circulares sin factor corrector."
    constraints:
      - "n >= 1 (entero)"
      - "v_T > 0"
      - "L_barra > 0"

  - id: velocidad_longitudinal_barra
    nombre:
      es: Velocidad de onda longitudinal en barra delgada
      en: Longitudinal wave velocity in a slender bar
    title:
      es: "Velocidad de onda longitudinal en barra delgada"
      en: "Longitudinal wave velocity in a slender bar"
    equation: "v_L = sqrt(E_young / rho)"
    latex: "v_L = sqrt(E / rho)"
    expresion_latex: "v_L = \\\\sqrt{\\\\frac{E}{\\\\rho}}"
    expresion_verbal:
      es: "La velocidad longitudinal en una barra es la raiz cuadrada del modulo de Young dividido entre la densidad."
      en: "The longitudinal velocity in a bar is the square root of Young modulus divided by density."
    variables:
      - id: v_L
        nombre: { es: Velocidad longitudinal, en: Longitudinal velocity }
        unidad: "m/s"
      - id: E_young
        nombre: { es: Modulo de Young, en: Young modulus }
        unidad: "Pa"
      - id: rho
        nombre: { es: Densidad, en: Density }
        unidad: "kg/m³"
    resultado:
      magnitud_id: v_L
      semantica:
        es: "Velocidad a la que se propagan las ondas de compresion-extension a lo largo de la barra."
        en: "Speed at which compression-extension waves propagate along the bar."
    result_semantics:
      es: "Velocidad a la que se propagan las ondas de compresion-extension a lo largo de la barra."
      en: "Speed at which compression-extension waves propagate along the bar."
    reordenamientos:
      - id: despeje_E
        target: E_young
        expresion_latex: "E = \\\\rho \\\\, v_L^2"
        descripcion:
          es: "Modulo de Young a partir de la velocidad longitudinal y la densidad."
          en: "Young modulus from longitudinal velocity and density."
      - id: despeje_rho
        target: rho
        expresion_latex: "\\\\rho = \\\\frac{E}{v_L^2}"
        descripcion:
          es: "Densidad a partir del modulo de Young y la velocidad longitudinal."
          en: "Density from Young modulus and longitudinal velocity."
    rearrangements:
      - id: despeje_E
        target: E_young
        equation: "E_young = rho * v_L^2"
        latex: "E = rho v_L^2"
        description:
          es: "Modulo de Young a partir de la velocidad longitudinal y la densidad."
          en: "Young modulus from longitudinal velocity and density."
      - id: despeje_rho
        target: rho
        equation: "rho = E_young / v_L^2"
        latex: "rho = E / v_L^2"
        description:
          es: "Densidad a partir del modulo de Young y la velocidad longitudinal."
          en: "Density from Young modulus and longitudinal velocity."
    categoria:
      principal: ondas-en-solidos
      secundaria: velocidades
    category: "wave_velocity"
    relation_type: "definition"
    physical_meaning:
      es: "Es la velocidad de barra, diferente de la velocidad P en medio infinito. Solo depende de E y rho porque la barra es libre lateralmente (no hay confinamiento lateral)."
      en: "It is the bar velocity, different from P-wave velocity in an infinite medium. It depends only on E and rho because the bar is laterally free (no lateral confinement)."
    validity:
      es: "Valida para barras delgadas (longitud de onda >> dimension transversal) y frecuencias bajas donde la dispersion por inercia lateral es despreciable."
      en: "Valid for slender bars (wavelength >> transverse dimension) and low frequencies where lateral inertia dispersion is negligible."
    dimension_check: "\`sqrt([M L^-1 T^-2] / [M L^-3]) -> sqrt([L^2 T^-2]) -> [L T^-1]\`"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - "calculo de frecuencias naturales longitudinales"
      - "ensayos de resonancia para medir E"
      - "diseño de barras ultrasonicas"
    interpretation_tags:
      - "velocidad_barra"
      - "modulo_young"
      - "densidad"
    domain_checks:
      - "E_young debe ser positivo."
      - "rho debe ser positiva."
    coherence_checks:
      - "v_L debe ser menor que la velocidad P del mismo material (v_P = sqrt((lambda+2G)/rho))."
      - "Valores tipicos: 5100 m/s (acero), 5000 m/s (aluminio), 3800 m/s (vidrio)."
    graph_implications:
      - "v_L fija la escala de frecuencias en el grafico de modos."
      - "Materiales mas rigidos o menos densos tienen v_L mayor."
    pedagogical_triggers:
      - "Confundir velocidad de barra con velocidad P del medio infinito."
      - "Olvidar que la velocidad depende de E, no de K+4G/3."
    constraints:
      - "E_young > 0"
      - "rho > 0"
      - "v_L > 0"

  - id: velocidad_corte_barra
    nombre:
      es: Velocidad de onda de corte en barra
      en: Shear wave velocity in a bar
    title:
      es: "Velocidad de onda de corte en barra"
      en: "Shear wave velocity in a bar"
    equation: "v_T = sqrt(G_shear / rho)"
    latex: "v_T = sqrt(G / rho)"
    expresion_latex: "v_T = \\\\sqrt{\\\\frac{G}{\\\\rho}}"
    expresion_verbal:
      es: "La velocidad de corte es la raiz cuadrada del modulo de cizalla dividido entre la densidad."
      en: "The shear velocity is the square root of the shear modulus divided by density."
    variables:
      - id: v_T
        nombre: { es: Velocidad de corte, en: Shear velocity }
        unidad: "m/s"
      - id: G_shear
        nombre: { es: Modulo de cizalla, en: Shear modulus }
        unidad: "Pa"
      - id: rho
        nombre: { es: Densidad, en: Density }
        unidad: "kg/m³"
    resultado:
      magnitud_id: v_T
      semantica:
        es: "Velocidad de propagacion de ondas de corte, relevante para modos torsionales."
        en: "Propagation speed of shear waves, relevant for torsional modes."
    result_semantics:
      es: "Velocidad de propagacion de ondas de corte, relevante para modos torsionales."
      en: "Propagation speed of shear waves, relevant for torsional modes."
    reordenamientos:
      - id: despeje_G
        target: G_shear
        expresion_latex: "G = \\\\rho \\\\, v_T^2"
        descripcion:
          es: "Modulo de cizalla a partir de la velocidad de corte y la densidad."
          en: "Shear modulus from shear velocity and density."
    rearrangements:
      - id: despeje_G
        target: G_shear
        equation: "G_shear = rho * v_T^2"
        latex: "G = rho v_T^2"
        description:
          es: "Modulo de cizalla a partir de la velocidad de corte y la densidad."
          en: "Shear modulus from shear velocity and density."
    categoria:
      principal: ondas-en-solidos
      secundaria: velocidades
    category: "wave_velocity"
    relation_type: "definition"
    physical_meaning:
      es: "Mide la rapidez con que se propagan las deformaciones de cizalla pura. En una barra circular, es la velocidad que gobierna los modos torsionales."
      en: "Measures how fast pure shear deformations propagate. In a circular bar, it is the velocity governing torsional modes."
    validity:
      es: "Valida en cualquier medio isotropo homogeneo, independientemente de la geometria."
      en: "Valid in any homogeneous isotropic medium, regardless of geometry."
    dimension_check: "\`sqrt([M L^-1 T^-2] / [M L^-3]) -> [L T^-1]\`"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - "calculo de frecuencias torsionales"
      - "ensayo de modulo de cizalla"
      - "relacion v_L/v_T con coeficiente de Poisson"
    interpretation_tags:
      - "velocidad_corte"
      - "torsion"
      - "cizalla"
    domain_checks:
      - "G_shear debe ser positivo."
      - "rho debe ser positiva."
    coherence_checks:
      - "v_T < v_L siempre (porque G < E para nu > -1)."
      - "El cociente v_L/v_T depende solo de nu."
    graph_implications:
      - "Modos torsionales aparecen debajo de los longitudinales en frecuencia."
      - "La separacion v_L - v_T crece con nu."
    pedagogical_triggers:
      - "Confundir v_T con v_L al sustituir en formulas de frecuencia."
      - "Usar G sin verificar que es el modulo del material."
    constraints:
      - "G_shear > 0"
      - "rho > 0"
      - "v_T > 0"
`;export{e as default};
