const e=`version: "2.0"
id: interp-velocidad-del-sonido
leaf_id: velocidad-del-sonido

nombre:
  es: Interpretación — Velocidad del sonido
  en: Interpretation — Speed of Sound

scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: sonido
  parent_id: sonido
  ruta_relativa: fisica-clasica/ondas/sonido/velocidad-del-sonido

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretación acústica
    en: Acoustic interpretation
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_sections: 3
    sections: [summary, likely_errors, next_step]

dependencies:
  formulas:
    - newton_laplace
    - v_gas_ideal
    - v_son_temperatura_aire
  magnitudes:
    - v_son
    - B_mod
    - rho_med
    - T_abs
    - gamma_gas
    - M_mol

global_context:
  physical_domain:
    es: "Propagación de ondas acústicas en medios materiales: dependencia de la velocidad del sonido de las propiedades elásticas, la densidad y la temperatura del medio."
    en: "Propagation of acoustic waves in material media: dependence of the speed of sound on the elastic properties, density, and temperature of the medium."
  axis_convention:
    es: "En gráfica Coord de v_son vs T_abs: eje x temperatura en K, eje y velocidad en m/s, curva de raíz cuadrada. En gráfica de distancia vs tiempo: eje x tiempo en s, eje y distancia en m, pendiente igual a v_son."
    en: "In Coord graph of v_son vs T_abs: x axis temperature in K, y axis speed in m/s, square-root curve. In distance vs time graph: x axis time in s, y axis distance in m, slope equal to v_son."
  standard_assumptions:
    - "Medio homogéneo, isótropo y en equilibrio termodinámico local"
    - "Amplitudes de presión pequeñas (régimen lineal, sin choque)"
    - "Para gases: comportamiento de gas ideal a presiones y temperaturas ordinarias"
  standard_warnings:
    - "La velocidad del sonido en aire depende de la temperatura y la humedad; los valores tabulados a menudo se dan para aire seco a 0 °C o 20 °C"
    - "La velocidad del sonido no depende de la frecuencia en medios no dispersivos como el aire a frecuencias audibles"

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
      es: Lectura del gráfico
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

  v_son:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Velocidad de propagación acústica: propiedad del medio que determina la rapidez con que la perturbación de presión se desplaza."
      en: "Acoustic propagation speed: property of the medium that determines how fast the pressure perturbation travels."
    summary_rules:
      - id: v_son_summary_air_range
        when: "v_son >= 300 && v_son <= 400"
        status: ok
        text:
          es: "[[v_son]] está en el rango típico del sonido en aire. Resume la rapidez de propagación en el gas: a esta velocidad, el sonido tarda aproximadamente 3 ms en recorrer 1 metro, lo que explica el desfase entre el relámpago y el trueno en tormentas lejanas."
          en: "[[v_son]] is in the typical range of sound in air. It summarises the propagation speed in the gas: at this speed, sound takes approximately 3 ms to travel 1 metre, explaining the delay between lightning and thunder in distant storms."
      - id: v_son_summary_water_range
        when: "v_son >= 1400 && v_son <= 1600"
        status: ok
        text:
          es: "[[v_son]] está en el rango típico del sonido en agua. El sonido se propaga aproximadamente 4.4 veces más rápido en agua que en aire, lo que tiene consecuencias directas en el sonar y en la comunicación de mamíferos marinos."
          en: "[[v_son]] is in the typical range of sound in water. Sound propagates approximately 4.4 times faster in water than in air, which has direct consequences for sonar and marine mammal communication."
      - id: v_son_summary_solid_range
        when: "v_son > 1600"
        status: ok
        text:
          es: "[[v_son]] corresponde al rango de sonido en sólidos o líquidos muy rígidos. Los sólidos transmiten el sonido muy rápido porque su módulo de compresibilidad [[B_mod]] es muy grande respecto a su densidad [[rho_med]]."
          en: "[[v_son]] corresponds to the range of sound in solids or very stiff liquids. Solids transmit sound very fast because their bulk modulus [[B_mod]] is very large relative to their density [[rho_med]]."
      - id: v_son_summary_default
        when: "true"
        status: ok
        text:
          es: "[[v_son]] resume la rapidez de propagación del frente de onda acústica en el medio. Es una propiedad del medio, no de la fuente: no cambia con la amplitud ni con la frecuencia del sonido en medios no dispersivos."
          en: "[[v_son]] summarises the propagation speed of the acoustic wavefront in the medium. It is a property of the medium, not the source: it does not change with the amplitude or frequency of the sound in non-dispersive media."
    physical_reading_rules:
      - id: v_son_reading_medium
        when: "true"
        status: ok
        text:
          es: "La lectura física de [[v_son]] es la distancia que recorre el frente de la onda acústica por unidad de tiempo. Un valor mayor implica que la señal acústica llega antes a un receptor lejano y que la longitud de onda para una frecuencia dada es mayor."
          en: "The physical reading of [[v_son]] is the distance the acoustic wavefront travels per unit time. A higher value means the acoustic signal reaches a distant receiver sooner and that the wavelength for a given frequency is larger."
      - id: v_son_reading_stiffness_inertia
        when: "true"
        status: ok
        text:
          es: "[[v_son]] es la resultante del equilibrio entre la rigidez del medio (tendencia a restaurar la perturbación) y su inercia (resistencia al movimiento). Medios más rígidos ([[B_mod]] alto) propagan más rápido; medios más densos ([[rho_med]] alto) propagan más lento."
          en: "[[v_son]] is the result of the balance between the medium's stiffness (tendency to restore the perturbation) and its inertia (resistance to motion). Stiffer media ([[B_mod]] high) propagate faster; denser media ([[rho_med]] high) propagate slower."
    coherence_rules:
      - id: v_son_coherence_positive
        when: "v_son > 0"
        status: ok
        text:
          es: "[[v_son]] es positiva, coherente con una velocidad física."
          en: "[[v_son]] is positive, coherent with a physical speed."
      - id: v_son_coherence_zero_or_negative
        when: "v_son <= 0"
        status: error
        text:
          es: "[[v_son]] no puede ser cero ni negativa. Verificar que [[B_mod]] y [[rho_med]] sean positivos y que [[T_abs]] esté en kelvin."
          en: "[[v_son]] cannot be zero or negative. Verify that [[B_mod]] and [[rho_med]] are positive and that [[T_abs]] is in kelvin."
      - id: v_son_coherence_default
        when: "true"
        status: ok
        text:
          es: "Coherencia de [[v_son]]: verificar que es consistente con el medio (aire ~340 m/s, agua ~1480 m/s, acero ~5100 m/s)."
          en: "Coherence of [[v_son]]: verify it is consistent with the medium (air ~340 m/s, water ~1480 m/s, steel ~5100 m/s)."
    model_validity_rules:
      - id: v_son_validity_linear
        when: "v_son < 340"
        status: ok
        text:
          es: "[[v_son]] está por debajo de la velocidad del sonido en aire estándar, lo que puede indicar bajas temperaturas o un gas con mayor masa molar. El modelo de gas ideal es válido."
          en: "[[v_son]] is below the speed of sound in standard air, which may indicate low temperatures or a gas with higher molar mass. The ideal gas model is valid."
      - id: v_son_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo es válido para amplitudes acústicas pequeñas (presión de la perturbación mucho menor que la presión de equilibrio). Si [[v_son]] supera la velocidad del sonido en el medio (número de Mach > 1), el modelo lineal falla y se requiere tratamiento no lineal."
          en: "The model is valid for small acoustic amplitudes (perturbation pressure much less than equilibrium pressure). If the source speed exceeds [[v_son]] (Mach number > 1), the linear model fails and non-linear treatment is required."
    graph_rules:
      - id: v_son_graph_slope
        when: "true"
        status: ok
        text:
          es: "En una gráfica Coord de distancia frente al tiempo de llegada del frente de onda, [[v_son]] es la pendiente de la recta. En una gráfica de [[v_son]] frente a [[T_abs]], la curva tiene forma de raíz cuadrada: crece rápidamente a bajas temperaturas y se aplana a altas temperaturas."
          en: "In a Coord graph of distance versus wavefront arrival time, [[v_son]] is the slope of the line. In a graph of [[v_son]] versus [[T_abs]], the curve has the shape of a square root: it grows rapidly at low temperatures and flattens at high temperatures."
    likely_errors:
      - id: v_son_error_source_property
        when: "true"
        status: warning
        text:
          es: "Error frecuente: creer que una fuente más potente produce sonido más rápido. [[v_son]] es una propiedad del medio, completamente independiente de la amplitud de la fuente. Aumentar la potencia solo aumenta la amplitud de la onda (mayor [[B_mod]] de presión), no su velocidad."
          en: "Frequent error: believing that a more powerful source produces faster sound. [[v_son]] is a property of the medium, completely independent of the source amplitude. Increasing power only increases wave amplitude (greater pressure [[B_mod]]), not its speed."
      - id: v_son_error_frequency
        when: "true"
        status: warning
        text:
          es: "Error frecuente: creer que el sonido de mayor frecuencia viaja más rápido. En un gas ideal y en aire a frecuencias audibles, [[v_son]] es independiente de la frecuencia. La dispersión (dependencia de la velocidad con la frecuencia) solo aparece a frecuencias muy altas o en medios inhomogéneos."
          en: "Frequent error: believing that higher-frequency sound travels faster. In an ideal gas and in air at audible frequencies, [[v_son]] is independent of frequency. Dispersion (frequency-dependent speed) only appears at very high frequencies or in inhomogeneous media."
    next_step_rules:
      - id: v_son_next_wavelength
        when: "v_son > 0"
        status: ok
        text:
          es: "Con [[v_son]] calculada, obtener la longitud de onda para cualquier frecuencia como lambda = [[v_son]] / f. Esto permite calcular, por ejemplo, la longitud mínima de tubo resonante para una frecuencia dada."
          en: "With [[v_son]] calculated, obtain the wavelength for any frequency as lambda = [[v_son]] / f. This allows calculating, for example, the minimum resonant tube length for a given frequency."
      - id: v_son_next_default
        when: "true"
        status: ok
        text:
          es: "Comparar [[v_son]] en distintos medios (aire, agua, acero) para ilustrar el papel de la rigidez y la densidad. Usar la tabla de velocidades en distintos medios para contextualizar el resultado obtenido."
          en: "Compare [[v_son]] in different media (air, water, steel) to illustrate the role of stiffness and density. Use the table of speeds in different media to contextualise the calculated result."

  B_mod:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Módulo de compresibilidad: mide la rigidez del medio frente a compresiones; el factor de 'resorte' que hace posible la propagación de la onda."
      en: "Bulk modulus: measures the medium's stiffness against compression; the 'spring' factor that makes wave propagation possible."
    summary_rules:
      - id: B_mod_summary_gas
        when: "B_mod < 1e6"
        status: ok
        text:
          es: "[[B_mod]] está en el rango de gases (decenas a centenas de kPa). Este valor bajo de rigidez, combinado con la baja densidad del gas, resulta en velocidades del sonido moderadas (del orden de centenares de m/s)."
          en: "[[B_mod]] is in the range of gases (tens to hundreds of kPa). This low stiffness value, combined with the low density of the gas, results in moderate speeds of sound (of the order of hundreds of m/s)."
      - id: B_mod_summary_liquid
        when: "B_mod >= 1e6 && B_mod < 1e11"
        status: ok
        text:
          es: "[[B_mod]] está en el rango de líquidos (GPa). La alta rigidez de los líquidos, pese a su densidad moderada, explica su velocidad del sonido mucho mayor que la de los gases."
          en: "[[B_mod]] is in the range of liquids (GPa). The high stiffness of liquids, despite their moderate density, explains their much greater speed of sound compared to gases."
      - id: B_mod_summary_solid
        when: "B_mod >= 1e11"
        status: ok
        text:
          es: "[[B_mod]] está en el rango de sólidos (decenas a centenas de GPa). La extraordinaria rigidez de los sólidos cristalinos es la razón por la que el sonido se propaga tan rápido en ellos."
          en: "[[B_mod]] is in the range of solids (tens to hundreds of GPa). The extraordinary stiffness of crystalline solids is why sound propagates so fast in them."
      - id: B_mod_summary_default
        when: "true"
        status: ok
        text:
          es: "[[B_mod]] resume la rigidez del medio frente a compresiones. Cuanto mayor es [[B_mod]], mayor es la velocidad del sonido para la misma densidad."
          en: "[[B_mod]] summarises the medium's stiffness against compression. The larger [[B_mod]], the greater the speed of sound for the same density."
    physical_reading_rules:
      - id: B_mod_reading_restoring
        when: "true"
        status: ok
        text:
          es: "Físicamente, [[B_mod]] mide cuánta fuerza de restauración ejerce el medio ante una compresión: es la 'constante de resorte' volumétrica del medio. Para los gases, [[B_mod]] es proporcional a la presión de equilibrio multiplicada por el índice adiabático [[gamma_gas]]."
          en: "Physically, [[B_mod]] measures how much restoring force the medium exerts against a compression: it is the volumetric 'spring constant' of the medium. For gases, [[B_mod]] is proportional to the equilibrium pressure times the adiabatic index [[gamma_gas]]."
      - id: B_mod_reading_default
        when: "true"
        status: ok
        text:
          es: "[[B_mod]] se puede medir indirectamente a partir de la velocidad del sonido medida: B = rho * v^2. Este método se usa para caracterizar materiales cuyo módulo es difícil de medir directamente."
          en: "[[B_mod]] can be measured indirectly from the measured speed of sound: B = rho * v^2. This method is used to characterise materials whose modulus is difficult to measure directly."
    coherence_rules:
      - id: B_mod_coherence_positive
        when: "B_mod > 0"
        status: ok
        text:
          es: "[[B_mod]] positivo, coherente con un módulo de compresibilidad físico."
          en: "[[B_mod]] positive, coherent with a physical bulk modulus."
      - id: B_mod_coherence_zero
        when: "B_mod <= 0"
        status: error
        text:
          es: "[[B_mod]] no puede ser cero ni negativo. Un módulo de compresibilidad negativo implicaría que el medio colapsa ante una compresión en lugar de resistirla, lo que es físicamente inestable."
          en: "[[B_mod]] cannot be zero or negative. A negative bulk modulus would imply that the medium collapses under compression instead of resisting it, which is physically unstable."
      - id: B_mod_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar coherencia: [[B_mod]] = [[rho_med]] × [[v_son]]². Para aire a 20 °C: B = 1.20 × 343² ≈ 141 kPa, coherente con el módulo adiabático del aire."
          en: "Verify coherence: [[B_mod]] = [[rho_med]] × [[v_son]]². For air at 20 °C: B = 1.20 × 343² ≈ 141 kPa, coherent with the adiabatic modulus of air."
    model_validity_rules:
      - id: B_mod_validity_adiabatic
        when: "true"
        status: ok
        text:
          es: "Para gases, [[B_mod]] debe ser el módulo adiabático (gamma × P_equilibrio), no el isotérmico (P_equilibrio). Las compresiones acústicas son lo suficientemente rápidas para que no haya intercambio de calor significativo entre las regiones comprimidas y rarefactadas."
          en: "For gases, [[B_mod]] must be the adiabatic modulus (gamma × P_equilibrium), not the isothermal one (P_equilibrium). Acoustic compressions are fast enough that there is no significant heat exchange between compressed and rarefied regions."
    graph_rules:
      - id: B_mod_graph_default
        when: "true"
        status: ok
        text:
          es: "En una gráfica Coord de [[v_son]] frente a [[B_mod]] (con [[rho_med]] constante), la curva tiene forma de raíz cuadrada creciente. Un aumento en [[B_mod]] (mayor rigidez) siempre aumenta [[v_son]]."
          en: "In a Coord graph of [[v_son]] versus [[B_mod]] (with [[rho_med]] constant), the curve has the shape of an increasing square root. An increase in [[B_mod]] (greater stiffness) always increases [[v_son]]."
    likely_errors:
      - id: B_mod_error_young
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar el módulo de Young E en lugar del módulo de compresibilidad B para calcular [[v_son]] en fluidos. El módulo de Young describe deformaciones longitudinales en sólidos de sección fija; para ondas en fluidos se requiere el módulo volumétrico B."
          en: "Frequent error: using Young's modulus E instead of the bulk modulus B to calculate [[v_son]] in fluids. Young's modulus describes longitudinal deformations in solids of fixed cross-section; volumetric modulus B is required for waves in fluids."
    next_step_rules:
      - id: B_mod_next_default
        when: "true"
        status: ok
        text:
          es: "Calcular [[B_mod]] a partir de [[v_son]] y [[rho_med]] medidos para caracterizar el medio acústico. Comparar el valor obtenido con tablas de módulos de compresibilidad para identificar el material."
          en: "Calculate [[B_mod]] from measured [[v_son]] and [[rho_med]] to characterise the acoustic medium. Compare the obtained value with tables of bulk moduli to identify the material."
      - id: B_mod_next_adiabatic_gas
        when: "B_mod < 1e6"
        status: ok
        text:
          es: "Para un gas, verificar que [[B_mod]] es igual a [[gamma_gas]] × P_equilibrio. Si el valor medido difiere significativamente de este producto, el gas puede no comportarse idealmente o el proceso puede no ser estrictamente adiabático."
          en: "For a gas, verify that [[B_mod]] equals [[gamma_gas]] × P_equilibrium. If the measured value differs significantly from this product, the gas may not behave ideally or the process may not be strictly adiabatic."

  rho_med:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Densidad del medio: factor de inercia que se opone a la propagación del sonido."
      en: "Density of the medium: inertia factor that opposes sound propagation."
    summary_rules:
      - id: rho_med_summary_air
        when: "rho_med >= 1.0 && rho_med <= 1.5"
        status: ok
        text:
          es: "[[rho_med]] está en el rango del aire a condiciones ordinarias (1.20 kg/m³ a 20 °C, 1.29 kg/m³ a 0 °C). Resume la baja inercia del gas que, combinada con su módulo B relativamente bajo, produce velocidades del sonido moderadas."
          en: "[[rho_med]] is in the range of air at ordinary conditions (1.20 kg/m³ at 20 °C, 1.29 kg/m³ at 0 °C). It summarises the low inertia of the gas which, combined with its relatively low modulus B, produces moderate speeds of sound."
      - id: rho_med_summary_default
        when: "true"
        status: ok
        text:
          es: "[[rho_med]] resume la inercia del medio por unidad de volumen. Para la misma rigidez [[B_mod]], un medio más denso tendrá menor [[v_son]]. La densidad y la rigidez compiten: es su cociente lo que determina [[v_son]]."
          en: "[[rho_med]] summarises the inertia of the medium per unit volume. For the same stiffness [[B_mod]], a denser medium will have lower [[v_son]]. Density and stiffness compete: it is their ratio that determines [[v_son]]."
    physical_reading_rules:
      - id: rho_med_reading_inertia
        when: "true"
        status: ok
        text:
          es: "La lectura física de [[rho_med]] en el contexto de la velocidad del sonido es la inercia de las partículas del medio. Cuanto mayor es [[rho_med]], más fuerza restauradora necesita el medio para acelerar sus partículas y propagar la onda, y más lenta resulta la propagación."
          en: "The physical reading of [[rho_med]] in the context of the speed of sound is the inertia of the medium particles. The larger [[rho_med]], the more restoring force the medium needs to accelerate its particles and propagate the wave, and the slower the propagation."
      - id: rho_med_reading_default
        when: "true"
        status: ok
        text:
          es: "Para gases ideales a temperatura fija, [[rho_med]] es proporcional a la presión. Un aumento de presión aumenta [[rho_med]] y [[B_mod]] por igual, dejando [[v_son]] sin cambiar: por eso [[v_son]] en un gas ideal es independiente de la presión."
          en: "For ideal gases at fixed temperature, [[rho_med]] is proportional to pressure. A pressure increase increases [[rho_med]] and [[B_mod]] equally, leaving [[v_son]] unchanged: this is why [[v_son]] in an ideal gas is independent of pressure."
    coherence_rules:
      - id: rho_med_coherence_positive
        when: "rho_med > 0"
        status: ok
        text:
          es: "[[rho_med]] positiva, coherente con una densidad física."
          en: "[[rho_med]] positive, coherent with a physical density."
      - id: rho_med_coherence_zero
        when: "rho_med <= 0"
        status: error
        text:
          es: "[[rho_med]] no puede ser cero ni negativa. El vacío (rho = 0) no transmite sonido. Verificar que se introdujo la densidad del medio material correcto."
          en: "[[rho_med]] cannot be zero or negative. Vacuum (rho = 0) does not transmit sound. Verify that the density of the correct material medium was entered."
      - id: rho_med_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar coherencia: [[rho_med]] = [[B_mod]] / [[v_son]]². Para agua: 2.2×10⁹ / 1480² ≈ 1004 kg/m³, coherente con la densidad conocida."
          en: "Verify coherence: [[rho_med]] = [[B_mod]] / [[v_son]]². For water: 2.2×10⁹ / 1480² ≈ 1004 kg/m³, coherent with the known density."
    model_validity_rules:
      - id: rho_med_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo es válido cuando [[rho_med]] es la densidad en equilibrio, sin perturbaciones acústicas. Para amplitudes acústicas grandes, la densidad local varía durante el paso de la onda y el modelo lineal deja de ser exacto."
          en: "The model is valid when [[rho_med]] is the equilibrium density, without acoustic perturbations. For large acoustic amplitudes, the local density varies during wave passage and the linear model is no longer exact."
    graph_rules:
      - id: rho_med_graph_default
        when: "true"
        status: ok
        text:
          es: "En una gráfica Coord de [[v_son]] frente a [[rho_med]] (con [[B_mod]] constante), la curva es decreciente proporcional a 1/sqrt([[rho_med]]). Duplicar la densidad reduce [[v_son]] por un factor de sqrt(2) ≈ 1.41."
          en: "In a Coord graph of [[v_son]] versus [[rho_med]] (with [[B_mod]] constant), the curve is decreasing proportional to 1/sqrt([[rho_med]]). Doubling the density reduces [[v_son]] by a factor of sqrt(2) ≈ 1.41."
    likely_errors:
      - id: rho_med_error_denser_faster
        when: "true"
        status: warning
        text:
          es: "Error frecuente: asumir que un medio más denso transmite el sonido más rápido porque 'hay más materia para transmitir la vibración'. En realidad, la densidad aumenta la inercia y reduce [[v_son]] para el mismo [[B_mod]]. El acero es mucho más denso que el agua, pero también mucho más rígido, y es la mayor rigidez la que explica su mayor velocidad del sonido."
          en: "Frequent error: assuming a denser medium transmits sound faster because 'there is more matter to transmit vibration'. In reality, density increases inertia and reduces [[v_son]] for the same [[B_mod]]. Steel is much denser than water, but also much stiffer, and it is the greater stiffness that explains its higher speed of sound."
    next_step_rules:
      - id: rho_med_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[rho_med]] y [[v_son]] conocidos, calcular la impedancia acústica del medio Z = [[rho_med]] × [[v_son]], que determina qué fracción de la energía sonora se refleja y qué fracción se transmite en una interfaz entre dos medios distintos."
          en: "With [[rho_med]] and [[v_son]] known, calculate the acoustic impedance of the medium Z = [[rho_med]] × [[v_son]], which determines what fraction of the sound energy is reflected and what fraction is transmitted at an interface between two different media."

  T_abs:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Temperatura absoluta del gas: parámetro termodinámico que controla la velocidad media de las moléculas y, con ella, la velocidad del sonido."
      en: "Absolute temperature of the gas: thermodynamic parameter that controls the average speed of molecules and, with it, the speed of sound."
    summary_rules:
      - id: T_abs_summary_low
        when: "T_abs < 260"
        status: ok
        text:
          es: "[[T_abs]] corresponde a temperaturas muy frías (por debajo de -13 °C). A esta temperatura, la velocidad del sonido en aire es notablemente menor que a temperatura ambiente, con consecuencias para la propagación de señales acústicas al aire libre en invierno."
          en: "[[T_abs]] corresponds to very cold temperatures (below -13 °C). At this temperature, the speed of sound in air is noticeably lower than at room temperature, with consequences for the propagation of acoustic signals outdoors in winter."
      - id: T_abs_summary_standard
        when: "T_abs >= 260 && T_abs <= 320"
        status: ok
        text:
          es: "[[T_abs]] está en el rango de temperaturas atmosféricas ordinarias. La velocidad del sonido en aire varía aproximadamente 0.6 m/s por cada grado Celsius en este rango."
          en: "[[T_abs]] is in the range of ordinary atmospheric temperatures. The speed of sound in air varies approximately 0.6 m/s per degree Celsius in this range."
      - id: T_abs_summary_default
        when: "true"
        status: ok
        text:
          es: "[[T_abs]] resume la energía cinética media de las moléculas del gas. A mayor temperatura, las moléculas se mueven más rápido y transmiten la perturbación de presión con mayor velocidad."
          en: "[[T_abs]] summarises the average kinetic energy of the gas molecules. At higher temperature, molecules move faster and transmit the pressure perturbation at higher speed."
    physical_reading_rules:
      - id: T_abs_reading_molecular
        when: "true"
        status: ok
        text:
          es: "A nivel molecular, [[v_son]] en un gas es del mismo orden que la velocidad térmica cuadrática media de las moléculas: v_rms = sqrt(3RT/M). La velocidad del sonido, proporcionalmente a sqrt(RT/M), es ligeramente menor que v_rms por un factor de sqrt(gamma/3). Esta conexión explica por qué [[v_son]] en un gas crece con la temperatura."
          en: "At the molecular level, [[v_son]] in a gas is of the same order as the root-mean-square thermal speed of the molecules: v_rms = sqrt(3RT/M). The speed of sound, proportional to sqrt(RT/M), is slightly lower than v_rms by a factor of sqrt(gamma/3). This connection explains why [[v_son]] in a gas grows with temperature."
      - id: T_abs_reading_default
        when: "true"
        status: ok
        text:
          es: "[[T_abs]] aparece bajo una raíz cuadrada en la fórmula de [[v_son]]. Un aumento del 10 % en T_abs produce un aumento de solo el 5 % en [[v_son]]. La dependencia es sublineal: doblar la temperatura absoluta solo multiplica [[v_son]] por sqrt(2) ≈ 1.41."
          en: "[[T_abs]] appears under a square root in the formula for [[v_son]]. A 10 % increase in T_abs produces only a 5 % increase in [[v_son]]. The dependence is sublinear: doubling the absolute temperature only multiplies [[v_son]] by sqrt(2) ≈ 1.41."
    coherence_rules:
      - id: T_abs_coherence_positive
        when: "T_abs > 0"
        status: ok
        text:
          es: "[[T_abs]] positiva, coherente con una temperatura absoluta."
          en: "[[T_abs]] positive, coherent with an absolute temperature."
      - id: T_abs_coherence_zero_or_negative
        when: "T_abs <= 0"
        status: error
        text:
          es: "[[T_abs]] no puede ser cero ni negativa. Si se obtuvo un valor negativo, es probable que se haya introducido la temperatura en grados Celsius sin convertir a kelvin (T_K = T_C + 273.15)."
          en: "[[T_abs]] cannot be zero or negative. If a negative value was obtained, it is likely that temperature was entered in degrees Celsius without converting to kelvin (T_K = T_C + 273.15)."
      - id: T_abs_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar coherencia: [[T_abs]] = [[v_son]]² × [[M_mol]] / ([[gamma_gas]] × R). Para aire a 343 m/s: T = 343² × 0.029 / (1.4 × 8.314) ≈ 293 K ≈ 20 °C. ✓"
          en: "Verify coherence: [[T_abs]] = [[v_son]]² × [[M_mol]] / ([[gamma_gas]] × R). For air at 343 m/s: T = 343² × 0.029 / (1.4 × 8.314) ≈ 293 K ≈ 20 °C. ✓"
    model_validity_rules:
      - id: T_abs_validity_ideal_gas
        when: "T_abs > 100"
        status: ok
        text:
          es: "A [[T_abs]] por encima de 100 K, el modelo de gas ideal es una excelente aproximación para gases diatómicos como el aire. Por debajo de esta temperatura, los gases reales se desvían del comportamiento ideal."
          en: "At [[T_abs]] above 100 K, the ideal gas model is an excellent approximation for diatomic gases like air. Below this temperature, real gases deviate from ideal behaviour."
      - id: T_abs_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de gas ideal con proceso adiabático es válido a temperaturas ordinarias (200-500 K) y presiones moderadas. A temperaturas muy altas (por encima de ~2000 K), la disociación molecular modifica [[gamma_gas]] y la fórmula pierde precisión."
          en: "The ideal gas model with adiabatic process is valid at ordinary temperatures (200-500 K) and moderate pressures. At very high temperatures (above ~2000 K), molecular dissociation modifies [[gamma_gas]] and the formula loses precision."
    graph_rules:
      - id: T_abs_graph_sqrt_curve
        when: "true"
        status: ok
        text:
          es: "En la gráfica Coord de [[v_son]] frente a [[T_abs]], la curva tiene forma de raíz cuadrada. El origen de la curva (T_abs = 0) corresponde a [[v_son]] = 0. La pendiente de la curva decrece al aumentar T_abs (la curva es cóncava hacia abajo)."
          en: "In the Coord graph of [[v_son]] versus [[T_abs]], the curve has the shape of a square root. The origin of the curve (T_abs = 0) corresponds to [[v_son]] = 0. The slope of the curve decreases as T_abs increases (the curve is concave downward)."
    likely_errors:
      - id: T_abs_error_celsius
        when: "T_abs > 0 && T_abs < 100"
        status: warning
        text:
          es: "[[T_abs]] menor de 100 K es inusual para condiciones atmosféricas. Verificar que no se introdujo la temperatura en grados Celsius (por ejemplo, 20 °C) en lugar de en kelvin (293 K). Usar siempre T_K = T_C + 273.15."
          en: "[[T_abs]] less than 100 K is unusual for atmospheric conditions. Verify that temperature was not entered in degrees Celsius (e.g., 20 °C) instead of kelvin (293 K). Always use T_K = T_C + 273.15."
      - id: T_abs_error_default
        when: "true"
        status: ok
        text:
          es: "Confirmar que [[T_abs]] está en kelvin antes de sustituir en la fórmula de [[v_son]] en gas ideal. Es el error de unidades más frecuente en este leaf."
          en: "Confirm that [[T_abs]] is in kelvin before substituting in the ideal gas [[v_son]] formula. It is the most frequent unit error in this leaf."
    next_step_rules:
      - id: T_abs_next_estimate_temperature
        when: "true"
        status: ok
        text:
          es: "Con [[v_son]] medida en un gas conocido, despejar [[T_abs]] para estimar la temperatura del gas. Esto se usa en meteorología acústica para medir la temperatura de capas de la atmósfera a través de la propagación del sonido."
          en: "With [[v_son]] measured in a known gas, solve for [[T_abs]] to estimate the gas temperature. This is used in acoustic meteorology to measure the temperature of atmospheric layers through sound propagation."
      - id: T_abs_next_default
        when: "true"
        status: ok
        text:
          es: "Calcular el cambio de [[v_son]] en aire al variar la temperatura 10 °C arriba y abajo del valor dado, para cuantificar la sensibilidad de [[v_son]] con la temperatura en condiciones ordinarias."
          en: "Calculate the change in [[v_son]] in air when temperature varies 10 °C above and below the given value, to quantify the sensitivity of [[v_son]] to temperature under ordinary conditions."

  gamma_gas:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Índice adiabático: factor de corrección termodinámico que distingue la compresión adiabática real de la isotérmica predicha por Newton."
      en: "Adiabatic index: thermodynamic correction factor that distinguishes the real adiabatic compression from the isothermal one predicted by Newton."
    summary_rules:
      - id: gamma_gas_summary_diatomic
        when: "gamma_gas >= 1.38 && gamma_gas <= 1.42"
        status: ok
        text:
          es: "[[gamma_gas]] corresponde a un gas diatómico como el aire (N2, O2). La corrección de Laplace respecto a Newton es un factor de sqrt(1.4) ≈ 1.183, es decir, [[v_son]] real es un 18 % mayor que la predicción isotérmica de Newton."
          en: "[[gamma_gas]] corresponds to a diatomic gas like air (N2, O2). The Laplace correction over Newton is a factor of sqrt(1.4) ≈ 1.183, meaning [[v_son]] is 18 % greater than Newton's isothermal prediction."
      - id: gamma_gas_summary_monatomic
        when: "gamma_gas >= 1.60 && gamma_gas <= 1.70"
        status: ok
        text:
          es: "[[gamma_gas]] corresponde a un gas monoatómico (He, Ar, Ne). Los gases monoatómicos tienen [[gamma_gas]] = 5/3 porque solo tienen tres grados de libertad traslacionales, sin grados de libertad rotacionales ni vibracionales."
          en: "[[gamma_gas]] corresponds to a monatomic gas (He, Ar, Ne). Monatomic gases have [[gamma_gas]] = 5/3 because they have only three translational degrees of freedom, without rotational or vibrational degrees of freedom."
      - id: gamma_gas_summary_default
        when: "true"
        status: ok
        text:
          es: "[[gamma_gas]] resume la termodinámica del proceso de compresión acústica. Valores menores de gamma implican que el gas tiene más grados de libertad moleculares y que las compresiones adiabáticas producen menos aumento de temperatura, resultando en menor [[v_son]] para la misma T_abs y M_mol."
          en: "[[gamma_gas]] summarises the thermodynamics of the acoustic compression process. Lower gamma values imply that the gas has more molecular degrees of freedom and that adiabatic compressions produce less temperature increase, resulting in lower [[v_son]] for the same T_abs and M_mol."
    physical_reading_rules:
      - id: gamma_gas_reading_adiabatic
        when: "true"
        status: ok
        text:
          es: "La razón por la que [[gamma_gas]] aparece en la fórmula de [[v_son]] es que las oscilaciones acústicas son tan rápidas que no hay tiempo para intercambio de calor: son adiabáticas. El módulo adiabático es [[gamma_gas]] veces el módulo isotérmico, lo que hace que [[v_son]] sea sqrt([[gamma_gas]]) veces mayor que la predicción de Newton."
          en: "The reason [[gamma_gas]] appears in the formula for [[v_son]] is that acoustic oscillations are so fast that there is no time for heat exchange: they are adiabatic. The adiabatic modulus is [[gamma_gas]] times the isothermal modulus, making [[v_son]] sqrt([[gamma_gas]]) times larger than Newton's prediction."
      - id: gamma_gas_reading_default
        when: "true"
        status: ok
        text:
          es: "[[gamma_gas]] varía ligeramente con la temperatura: a temperaturas muy altas, los modos vibracionales moleculares se excitan y gamma disminuye. Para el aire a temperaturas ordinarias, gamma = 1.4 es una excelente aproximación."
          en: "[[gamma_gas]] varies slightly with temperature: at very high temperatures, molecular vibrational modes are excited and gamma decreases. For air at ordinary temperatures, gamma = 1.4 is an excellent approximation."
    coherence_rules:
      - id: gamma_gas_coherence_greater_one
        when: "gamma_gas > 1"
        status: ok
        text:
          es: "[[gamma_gas]] mayor que 1, coherente con la termodinámica de gases."
          en: "[[gamma_gas]] greater than 1, coherent with gas thermodynamics."
      - id: gamma_gas_coherence_less_one
        when: "gamma_gas <= 1"
        status: error
        text:
          es: "[[gamma_gas]] debe ser estrictamente mayor que 1. La termodinámica impone que la capacidad calorífica a presión constante es siempre mayor que la de volumen constante para gases ideales."
          en: "[[gamma_gas]] must be strictly greater than 1. Thermodynamics requires that the heat capacity at constant pressure is always greater than that at constant volume for ideal gases."
      - id: gamma_gas_coherence_default
        when: "true"
        status: ok
        text:
          es: "Para la mayoría de los problemas de acústica en aire, [[gamma_gas]] = 1.4. Usar otro valor solo si el enunciado especifica un gas diferente al aire o condiciones de temperatura extremas."
          en: "For most acoustics problems in air, [[gamma_gas]] = 1.4. Use a different value only if the problem specifies a gas other than air or extreme temperature conditions."
    model_validity_rules:
      - id: gamma_gas_validity_default
        when: "true"
        status: ok
        text:
          es: "[[gamma_gas]] es constante (independiente de T y P) solo para gases ideales con modos vibracionales no excitados. A temperaturas mayores de ~1000 K para el aire, [[gamma_gas]] comienza a disminuir hacia 1.3 por la excitación de modos vibracionales del N2 y O2."
          en: "[[gamma_gas]] is constant (independent of T and P) only for ideal gases with non-excited vibrational modes. At temperatures above ~1000 K for air, [[gamma_gas]] begins to decrease toward 1.3 due to the excitation of vibrational modes of N2 and O2."
    graph_rules:
      - id: gamma_gas_graph_default
        when: "true"
        status: ok
        text:
          es: "[[gamma_gas]] no tiene un gráfico Coord propio en este leaf; aparece como un parámetro constante que escala [[v_son]]. Su efecto se muestra mejor comparando las predicciones con [[gamma_gas]] = 1 (Newton) y [[gamma_gas]] = 1.4 (Laplace) en una gráfica de [[v_son]] frente a T_abs."
          en: "[[gamma_gas]] does not have its own Coord graph in this leaf; it appears as a constant parameter that scales [[v_son]]. Its effect is best shown by comparing predictions with [[gamma_gas]] = 1 (Newton) and [[gamma_gas]] = 1.4 (Laplace) in a graph of [[v_son]] versus T_abs."
    likely_errors:
      - id: gamma_gas_error_isothermal
        when: "true"
        status: warning
        text:
          es: "Error histórico replicado frecuentemente: olvidar [[gamma_gas]] y usar la fórmula isotérmica v = sqrt(P/rho). Para el aire, este error produce un resultado un 18 % menor que el real (331 m/s en lugar de 343 m/s a 20 °C según la versión corregida)."
          en: "Historically replicated frequent error: forgetting [[gamma_gas]] and using the isothermal formula v = sqrt(P/rho). For air, this error produces a result 18 % lower than the real value (331 m/s instead of 343 m/s at 20 °C according to the corrected version)."
    next_step_rules:
      - id: gamma_gas_next_default
        when: "true"
        status: ok
        text:
          es: "Calcular [[v_son]] con [[gamma_gas]] = 1 (predicción de Newton, isotérmica) y con [[gamma_gas]] = 1.4 (corrección de Laplace, adiabática) para cuantificar la discrepancia histórica y verificar que el valor experimental coincide con la predicción de Laplace."
          en: "Calculate [[v_son]] with [[gamma_gas]] = 1 (Newton's prediction, isothermal) and with [[gamma_gas]] = 1.4 (Laplace correction, adiabatic) to quantify the historical discrepancy and verify that the experimental value matches Laplace's prediction."

  M_mol:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Masa molar del gas: parámetro molecular que determina la inercia de las moléculas individuales y, con ella, la velocidad del sonido en distintos gases."
      en: "Molar mass of the gas: molecular parameter that determines the inertia of individual molecules and, with it, the speed of sound in different gases."
    summary_rules:
      - id: M_mol_summary_light
        when: "M_mol < 0.010"
        status: ok
        text:
          es: "[[M_mol]] corresponde a un gas ligero (helio, hidrógeno). La baja masa molar produce una velocidad del sonido muy alta: en helio, [[v_son]] ≈ 970 m/s, casi tres veces la del aire. Esto es lo que hace que la voz en helio suene aguda."
          en: "[[M_mol]] corresponds to a light gas (helium, hydrogen). The low molar mass produces a very high speed of sound: in helium, [[v_son]] ≈ 970 m/s, almost three times that of air. This is what makes the voice in helium sound high-pitched."
      - id: M_mol_summary_air
        when: "M_mol >= 0.028 && M_mol <= 0.030"
        status: ok
        text:
          es: "[[M_mol]] corresponde al aire seco (M ≈ 0.029 kg/mol). El aire es una mezcla de N2 (0.028 kg/mol, 78 %) y O2 (0.032 kg/mol, 21 %), con masa molar media ≈ 0.029 kg/mol."
          en: "[[M_mol]] corresponds to dry air (M ≈ 0.029 kg/mol). Air is a mixture of N2 (0.028 kg/mol, 78 %) and O2 (0.032 kg/mol, 21 %), with mean molar mass ≈ 0.029 kg/mol."
      - id: M_mol_summary_default
        when: "true"
        status: ok
        text:
          es: "[[M_mol]] resume la inercia molecular del gas. Gases más pesados (mayor [[M_mol]]) transmiten el sonido más lento para la misma temperatura, porque sus moléculas tienen mayor masa y se aceleran más lentamente por la misma perturbación de presión."
          en: "[[M_mol]] summarises the molecular inertia of the gas. Heavier gases (larger [[M_mol]]) transmit sound more slowly at the same temperature, because their molecules have greater mass and accelerate more slowly by the same pressure perturbation."
    physical_reading_rules:
      - id: M_mol_reading_molecular
        when: "true"
        status: ok
        text:
          es: "La lectura física de [[M_mol]] es directa: la masa de cada molécula del gas es [[M_mol]] / N_Avogadro. Cuanto mayor es esa masa, menos responde la molécula a la misma fuerza de presión, y más lenta es la transmisión de la perturbación."
          en: "The physical reading of [[M_mol]] is direct: the mass of each gas molecule is [[M_mol]] / N_Avogadro. The greater this mass, the less the molecule responds to the same pressure force, and the slower the perturbation transmission."
      - id: M_mol_reading_default
        when: "true"
        status: ok
        text:
          es: "Para comparar gases: [[v_son]] en gas A respecto a gas B, a la misma temperatura y con igual [[gamma_gas]], es sqrt([[M_mol]]_B / [[M_mol]]_A). El helio es 7.25 veces más ligero que el aire (0.004 vs 0.029 kg/mol), lo que da sqrt(7.25) ≈ 2.69 veces mayor [[v_son]]."
          en: "To compare gases: [[v_son]] in gas A relative to gas B, at the same temperature and equal [[gamma_gas]], is sqrt([[M_mol]]_B / [[M_mol]]_A). Helium is 7.25 times lighter than air (0.004 vs 0.029 kg/mol), giving sqrt(7.25) ≈ 2.69 times greater [[v_son]]."
    coherence_rules:
      - id: M_mol_coherence_positive
        when: "M_mol > 0"
        status: ok
        text:
          es: "[[M_mol]] positiva, coherente con una masa molar física."
          en: "[[M_mol]] positive, coherent with a physical molar mass."
      - id: M_mol_coherence_units
        when: "M_mol >= 1.0"
        status: warning
        text:
          es: "[[M_mol]] mayor o igual a 1 kg/mol es inusual para gases ordinarios. Verificar que se introdujo en kg/mol y no en g/mol. En g/mol, el aire tiene M = 29 g/mol = 0.029 kg/mol."
          en: "[[M_mol]] greater than or equal to 1 kg/mol is unusual for ordinary gases. Verify that it was entered in kg/mol and not in g/mol. In g/mol, air has M = 29 g/mol = 0.029 kg/mol."
      - id: M_mol_coherence_default
        when: "true"
        status: ok
        text:
          es: "Valores de referencia: He 0.004 kg/mol, H2 0.002 kg/mol, N2 0.028 kg/mol, O2 0.032 kg/mol, CO2 0.044 kg/mol, aire 0.029 kg/mol."
          en: "Reference values: He 0.004 kg/mol, H2 0.002 kg/mol, N2 0.028 kg/mol, O2 0.032 kg/mol, CO2 0.044 kg/mol, air 0.029 kg/mol."
    model_validity_rules:
      - id: M_mol_validity_default
        when: "true"
        status: ok
        text:
          es: "El concepto de [[M_mol]] constante es válido para gases de composición fija. Para mezclas (como el aire húmedo), [[M_mol]] varía con la fracción molar de cada componente (en particular la del vapor de agua, M = 0.018 kg/mol), lo que modifica ligeramente [[v_son]]."
          en: "The concept of constant [[M_mol]] is valid for gases of fixed composition. For mixtures (such as humid air), [[M_mol]] varies with the molar fraction of each component (in particular that of water vapour, M = 0.018 kg/mol), slightly modifying [[v_son]]."
    graph_rules:
      - id: M_mol_graph_default
        when: "true"
        status: ok
        text:
          es: "En una gráfica Coord de [[v_son]] frente a [[M_mol]] (para [[T_abs]] y [[gamma_gas]] fijos), la curva es decreciente proporcional a 1/sqrt([[M_mol]]). El punto correspondiente al helio está muy a la izquierda y muy arriba; el del dióxido de carbono, a la derecha y abajo."
          en: "In a Coord graph of [[v_son]] versus [[M_mol]] (for fixed [[T_abs]] and [[gamma_gas]]), the curve is decreasing proportional to 1/sqrt([[M_mol]]). The point for helium is far to the left and high up; that for carbon dioxide is to the right and below."
    likely_errors:
      - id: M_mol_error_grams
        when: "M_mol >= 0.5"
        status: warning
        text:
          es: "Error frecuente: introducir [[M_mol]] en g/mol en lugar de kg/mol. La constante R = 8.314 J/(mol·K) requiere [[M_mol]] en kg/mol. Si se usa g/mol, [[v_son]] calculada será sqrt(1000) ≈ 31.6 veces mayor que el valor correcto."
          en: "Frequent error: entering [[M_mol]] in g/mol instead of kg/mol. The constant R = 8.314 J/(mol·K) requires [[M_mol]] in kg/mol. If g/mol is used, the calculated [[v_son]] will be sqrt(1000) ≈ 31.6 times larger than the correct value."
    next_step_rules:
      - id: M_mol_next_gases
        when: "true"
        status: ok
        text:
          es: "Calcular [[v_son]] para varios gases (helio, aire, CO2) a la misma temperatura para comparar cómo la masa molar afecta la velocidad del sonido y contextualizar el fenómeno de la voz en helio."
          en: "Calculate [[v_son]] for several gases (helium, air, CO2) at the same temperature to compare how molar mass affects the speed of sound and contextualise the helium voice phenomenon."
      - id: M_mol_next_default
        when: "true"
        status: ok
        text:
          es: "A partir de [[v_son]] medida en un gas y conocida [[T_abs]], despejar [[M_mol]] para identificar el gas desconocido. Este método se usa en espectrometría acústica de gases."
          en: "From measured [[v_son]] in a gas and known [[T_abs]], solve for [[M_mol]] to identify the unknown gas. This method is used in acoustic gas spectrometry."

cross_checks:
  - id: cc_v_son_B_rho
    check: "abs(v_son^2 - B_mod / rho_med) / v_son^2 < 0.01"
    message:
      es: "[[v_son]]² debe ser igual a [[B_mod]] / [[rho_med]] con menos del 1 % de error."
      en: "[[v_son]]² must equal [[B_mod]] / [[rho_med]] with less than 1 % error."
  - id: cc_v_son_T_abs
    check: "abs(v_son - sqrt(gamma_gas * 8.314 * T_abs / M_mol)) / v_son < 0.02"
    message:
      es: "Para un gas ideal, [[v_son]] debe ser sqrt([[gamma_gas]] × R × [[T_abs]] / [[M_mol]]) con menos del 2 % de error."
      en: "For an ideal gas, [[v_son]] must be sqrt([[gamma_gas]] × R × [[T_abs]] / [[M_mol]]) with less than 2 % error."

error_patterns:
  - id: ep_celsius_instead_kelvin
    pattern: "T_abs = T_celsius (sin convertir a kelvin)"
    cause:
      es: "El alumno introdujo la temperatura en °C en lugar de K; la fórmula requiere siempre temperatura absoluta"
      en: "The student entered temperature in °C instead of K; the formula always requires absolute temperature"
  - id: ep_isothermal_formula
    pattern: "v_son = sqrt(P_eq / rho_med) sin gamma"
    cause:
      es: "El alumno usó la fórmula isotérmica de Newton, olvidando el factor gamma de la corrección de Laplace"
      en: "The student used Newton's isothermal formula, forgetting the gamma factor of Laplace's correction"
  - id: ep_molar_mass_grams
    pattern: "M_mol = 29 (en g/mol en lugar de 0.029 kg/mol)"
    cause:
      es: "El alumno usó la masa molar en g/mol en lugar de kg/mol, con R en J/(mol·K)"
      en: "The student used molar mass in g/mol instead of kg/mol, with R in J/(mol·K)"

graph_binding:
  primary_graph: Coord
  description:
    es: "El gráfico Coord principal muestra [[v_son]] frente a [[T_abs]] con forma de raíz cuadrada. Un gráfico secundario puede mostrar [[v_son]] frente a distancia/tiempo como recta de pendiente [[v_son]]."
    en: "The primary Coord graph shows [[v_son]] versus [[T_abs]] with square-root shape. A secondary graph can show [[v_son]] versus distance/time as a straight line of slope [[v_son]]."

mini_graph:
  enabled: true
  preferred_type: Coord
  description:
    es: "Mini-gráfico de [[v_son]] frente a [[T_abs]] para visualizar la dependencia de la velocidad del sonido con la temperatura en el rango atmosférico."
    en: "Mini-graph of [[v_son]] versus [[T_abs]] to visualise the dependence of the speed of sound on temperature in the atmospheric range."

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
