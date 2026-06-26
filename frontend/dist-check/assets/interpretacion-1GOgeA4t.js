const e=`version: 2
id: interpretacion-ecuacion-de-onda-electromagnetica
leaf_id: ecuacion-de-onda-electromagnetica
nombre:
  es: "Interpretación de la ecuación de onda electromagnética"
  en: "Interpretation of the electromagnetic wave equation"
scope:
  area: "fisica-clasica"
  bloque: "electromagnetismo"
  subbloque: "ecuaciones-de-maxwell"
  parent_id: "ecuaciones-de-maxwell"
  ruta_relativa: "fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/ecuacion-de-onda-electromagnetica"
dependencies:
  formulas:
    - velocidad_luz
    - relacion_dispersion
    - onda_E
    - onda_B
    - solucion_onda_plana_E
  magnitudes:
    - c
    - omega
    - k
    - E
    - B
    - epsilon0
    - mu0
    - lambda
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
result_blocks:
  summary:
    title:
      es: "Resumen físico"
      en: "Physical summary"
  physical_reading:
    title:
      es: "Lectura física"
      en: "Physical reading"
  coherence:
    title:
      es: "Coherencia del resultado"
      en: "Result coherence"
  model_validity:
    title:
      es: "Validez del modelo"
      en: "Model validity"
  graph_reading:
    title:
      es: "Lectura del gráfico"
      en: "Graph reading"
  likely_errors:
    title:
      es: "Errores probables"
      en: "Likely errors"
  next_step:
    title:
      es: "Siguiente paso"
      en: "Next step"
targets:
  c:
    summary_rules:
      - id: c_sum_ok
        when: "abs(result - 299792458) < 1e6"
        status: success
        text:
          es: "[[c]] ≈ 2.998×10⁸ m/s. Este resultado indica la velocidad de propagación de las ondas EM en el vacío, que depende únicamente de [[mu0]] y [[epsilon0]]."
          en: "[[c]] ≈ 2.998×10⁸ m/s. This result indicates the EM wave propagation speed in vacuum, which depends solely on [[mu0]] and [[epsilon0]]."
      - id: c_sum_default
        when: "true"
        status: info
        text:
          es: "[[c]] describe la velocidad de propagación de la onda electromagnética en el vacío. Su valor depende de [[mu0]] y [[epsilon0]]: aumenta si las constantes disminuyen."
          en: "[[c]] describes the electromagnetic wave propagation speed in vacuum. Its value depends on [[mu0]] and [[epsilon0]]: it increases if the constants decrease."
    physical_reading_rules:
      - id: c_phys_high
        when: "result > 3.1e8"
        status: error
        text:
          es: "El valor supera el límite físico. Revisa que [[mu0]] y [[epsilon0]] tengan los valores correctos del vacío."
          en: "The value exceeds the physical limit. Check that [[mu0]] and [[epsilon0]] have the correct vacuum values."
      - id: c_phys_low
        when: "result < 2.9e8"
        status: warning
        text:
          es: "El valor es notablemente menor que [[c]]. Un error en [[mu0]] o [[epsilon0]] por un factor de 2π es el origen más frecuente."
          en: "The value is notably lower than [[c]]. An error in [[mu0]] or [[epsilon0]] by a factor of 2π is the most common source."
      - id: c_phys_default
        when: "true"
        status: ok
        text:
          es: "[[c]] mide la velocidad a la que [[E]] y [[B]] se regeneran mutuamente al propagarse. No hay un soporte material necesario."
          en: "[[c]] measures the speed at which [[E]] and [[B]] mutually regenerate as they propagate. No material support is needed."
    coherence_rules:
      - id: c_coh_ok
        when: "abs(result - 299792458) < 1e4"
        status: ok
        text:
          es: "Resultado consistente con la definición del metro en el SI desde 1983."
          en: "Result consistent with the SI metre definition since 1983."
      - id: c_coh_default
        when: "true"
        status: info
        text:
          es: "El cociente [[omega]]/[[k]] debe dar siempre [[c]] en el vacío; verificar con la relación de dispersión."
          en: "The ratio [[omega]]/[[k]] must always give [[c]] in vacuum; verify with the dispersion relation."
    model_validity_rules:
      - id: c_val_default
        when: "true"
        status: ok
        text:
          es: "Esta fórmula es válida exclusivamente en el vacío sin cargas ni corrientes libres. En medios materiales, [[c]] se reemplaza por [[c]]/n donde n es el índice de refracción del medio."
          en: "This formula is valid exclusively in vacuum with no free charges or currents. In material media, [[c]] is replaced by [[c]]/n where n is the medium's refractive index."
    graph_rules:
      - id: c_graph_default
        when: "true"
        status: info
        text:
          es: "En el gráfico de la relación de dispersión (eje [[omega]] vs. eje [[k]]), [[c]] es la pendiente de la recta. Una pendiente mayor o menor señalaría un error en el cálculo."
          en: "In the dispersion relation graph ([[omega]] axis vs [[k]] axis), [[c]] is the slope of the line. A larger or smaller slope would indicate an error in the calculation."
    likely_errors:
      - id: c_err_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar [[epsilon0]] = 8.85 en lugar de 8.854×10⁻¹² F/m, omitiendo el exponente. Esto produce un [[c]] diez órdenes de magnitud fuera del valor correcto."
          en: "Common error: using [[epsilon0]] = 8.85 instead of 8.854×10⁻¹² F/m, omitting the exponent. This produces a [[c]] ten orders of magnitude off."
    next_step_rules:
      - id: c_next_default
        when: "true"
        status: info
        text:
          es: "Con [[c]] calculado, aplicar la relación de dispersión [[omega]] = [[c]]·[[k]] para determinar [[k]] o [[lambda]] de una señal de frecuencia conocida."
          en: "With [[c]] computed, apply the dispersion relation [[omega]] = [[c]]·[[k]] to determine [[k]] or [[lambda]] for a signal of known frequency."

  epsilon0:
    summary_rules:
      - id: eps_sum_default
        when: "true"
        status: info
        text:
          es: "[[epsilon0]] describe la respuesta eléctrica del vacío. Indica cuánto campo eléctrico produce una carga; depende inversamente de la fuerza de la interacción coulombiana."
          en: "[[epsilon0]] describes the electrical response of vacuum. It indicates how much electric field a charge produces; it depends inversely on the strength of the Coulomb interaction."
    physical_reading_rules:
      - id: eps_phys_default
        when: "true"
        status: ok
        text:
          es: "[[epsilon0]] cuantifica cuánto campo eléctrico produce una carga unitaria en el vacío. Un valor calculado diferente al estándar indica un error en [[mu0]] o [[c]]."
          en: "[[epsilon0]] quantifies how much electric field a unit charge produces in vacuum. A calculated value different from the standard indicates an error in [[mu0]] or [[c]]."
    coherence_rules:
      - id: eps_coh_default
        when: "true"
        status: ok
        text:
          es: "Verificar que el resultado sea del orden de 8.85×10⁻¹² F/m. Diferencias mayores a un factor 10 indican error de unidades."
          en: "Verify that the result is of order 8.85×10⁻¹² F/m. Differences greater than a factor of 10 indicate a unit error."
    model_validity_rules:
      - id: eps_val_default
        when: "true"
        status: ok
        text:
          es: "Este despeje es válido solo para el vacío. En un dieléctrico, la permitividad efectiva es ε = εᵣ·[[epsilon0]] con εᵣ > 1."
          en: "This rearrangement is valid only for vacuum. In a dielectric, the effective permittivity is ε = εᵣ·[[epsilon0]] with εᵣ > 1."
    graph_rules:
      - id: eps_graph_default
        when: "true"
        status: info
        text:
          es: "[[epsilon0]] no tiene representación directa en la gráfica de dispersión, pero fija la pendiente [[c]] junto con [[mu0]]."
          en: "[[epsilon0]] has no direct representation in the dispersion graph, but it fixes the slope [[c]] together with [[mu0]]."
    likely_errors:
      - id: eps_err_default
        when: "true"
        status: warning
        text:
          es: "Confundir [[epsilon0]] (vacío) con ε (medio material) es un error habitual. En vacío no hay factor εᵣ."
          en: "Confusing [[epsilon0]] (vacuum) with ε (material medium) is a common mistake. In vacuum there is no εᵣ factor."
    next_step_rules:
      - id: eps_next_default
        when: "true"
        status: info
        text:
          es: "Con [[epsilon0]] verificado, revisar la fuerza de Coulomb o la capacidad de un condensador de placas paralelas para una comprobación experimental independiente."
          en: "With [[epsilon0]] verified, check the Coulomb force or the capacitance of a parallel-plate capacitor for an independent experimental check."

  mu0:
    summary_rules:
      - id: mu0_sum_default
        when: "true"
        status: info
        text:
          es: "[[mu0]] describe la respuesta magnética del vacío. Indica cuánto campo magnético genera una corriente; domina la fuerza entre conductores paralelos."
          en: "[[mu0]] describes the magnetic response of vacuum. It indicates how much magnetic field a current generates; it dominates the force between parallel conductors."
    physical_reading_rules:
      - id: mu0_phys_default
        when: "true"
        status: ok
        text:
          es: "[[mu0]] cuantifica cuánto campo magnético produce una corriente unitaria en el vacío. Su valor estándar es 4π×10⁻⁷ H/m."
          en: "[[mu0]] quantifies how much magnetic field a unit current produces in vacuum. Its standard value is 4π×10⁻⁷ H/m."
    coherence_rules:
      - id: mu0_coh_default
        when: "true"
        status: ok
        text:
          es: "Verificar que el resultado sea del orden de 1.257×10⁻⁶ H/m. Un valor fuera de ese rango indica error de unidades o en [[epsilon0]] o [[c]]."
          en: "Verify that the result is of order 1.257×10⁻⁶ H/m. A value outside that range indicates a unit error or an error in [[epsilon0]] or [[c]]."
    model_validity_rules:
      - id: mu0_val_default
        when: "true"
        status: ok
        text:
          es: "Este despeje es válido solo para el vacío. En un medio magnético, la permeabilidad efectiva es μ = μᵣ·[[mu0]] con μᵣ ≥ 1."
          en: "This rearrangement is valid only for vacuum. In a magnetic medium, the effective permeability is μ = μᵣ·[[mu0]] with μᵣ ≥ 1."
    graph_rules:
      - id: mu0_graph_default
        when: "true"
        status: info
        text:
          es: "[[mu0]] no aparece directamente en el eje de la gráfica de dispersión, pero junto con [[epsilon0]] fija la pendiente [[c]] de la recta [[omega]] vs [[k]]."
          en: "[[mu0]] does not appear directly on the dispersion graph axis, but together with [[epsilon0]] it fixes the slope [[c]] of the [[omega]] vs [[k]] line."
    likely_errors:
      - id: mu0_err_default
        when: "true"
        status: warning
        text:
          es: "Confundir [[mu0]] con μᵣ·[[mu0]] al trabajar en medios magnéticos es un error frecuente. En el vacío μᵣ = 1 exactamente."
          en: "Confusing [[mu0]] with μᵣ·[[mu0]] when working in magnetic media is a common error. In vacuum μᵣ = 1 exactly."
    next_step_rules:
      - id: mu0_next_default
        when: "true"
        status: info
        text:
          es: "Con [[mu0]] verificado, calcular la fuerza por unidad de longitud entre dos conductores paralelos a 1 m de separación con 1 A de corriente como comprobación independiente."
          en: "With [[mu0]] verified, compute the force per unit length between two parallel conductors 1 m apart carrying 1 A as an independent check."

  k:
    summary_rules:
      - id: k_sum_default
        when: "true"
        status: info
        text:
          es: "[[k]] resume la densidad espacial de fase de la onda: indica cuántos radianes completa por metro. Depende de [[omega]] y de [[c]]: aumenta con la frecuencia."
          en: "[[k]] resumes the spatial phase density of the wave: it indicates how many radians it completes per metre. It depends on [[omega]] and [[c]]: it increases with frequency."
    physical_reading_rules:
      - id: k_phys_ok
        when: "result > 0"
        status: ok
        text:
          es: "[[k]] positivo indica onda propagante en la dirección +x. La [[lambda]] correspondiente es 2π/[[k]]."
          en: "Positive [[k]] indicates a propagating wave in the +x direction. The corresponding [[lambda]] is 2π/[[k]]."
      - id: k_phys_default
        when: "true"
        status: info
        text:
          es: "Un [[k]] mayor implica una [[lambda]] más corta (mayor frecuencia [[omega]]). En el vacío la relación [[omega]] = [[c]]·[[k]] es siempre lineal."
          en: "A larger [[k]] implies a shorter [[lambda]] (higher frequency [[omega]]). In vacuum the relation [[omega]] = [[c]]·[[k]] is always linear."
    coherence_rules:
      - id: k_coh_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[k]] = [[omega]]/[[c]] sea consistente con [[lambda]] = 2π/[[k]]. Los tres deben dar la misma [[c]] como cociente [[omega]]/[[k]]."
          en: "Verify that [[k]] = [[omega]]/[[c]] is consistent with [[lambda]] = 2π/[[k]]. All three must give the same [[c]] as the ratio [[omega]]/[[k]]."
    model_validity_rules:
      - id: k_val_default
        when: "true"
        status: ok
        text:
          es: "En el vacío [[k]] es siempre real y positivo para ondas propagantes. En medios con pérdidas [[k]] tiene una parte imaginaria que describe atenuación."
          en: "In vacuum [[k]] is always real and positive for propagating waves. In lossy media [[k]] has an imaginary part describing attenuation."
    graph_rules:
      - id: k_graph_default
        when: "true"
        status: info
        text:
          es: "En el gráfico [[omega]] vs [[k]], el punto ([[k]], [[omega]]) debe caer exactamente sobre la recta de pendiente [[c]]. Desviaciones indican dispersión o error de cálculo."
          en: "In the [[omega]] vs [[k]] graph, the point ([[k]], [[omega]]) must fall exactly on the line of slope [[c]]. Deviations indicate dispersion or a calculation error."
    likely_errors:
      - id: k_err_default
        when: "true"
        status: warning
        text:
          es: "Error habitual: usar la frecuencia ordinaria f en lugar de la frecuencia angular [[omega]] = 2πf al calcular [[k]] = [[omega]]/[[c]]. El resultado queda mal por un factor 2π."
          en: "Common error: using ordinary frequency f instead of angular frequency [[omega]] = 2πf when computing [[k]] = [[omega]]/[[c]]. The result is off by a factor of 2π."
    next_step_rules:
      - id: k_next_default
        when: "true"
        status: info
        text:
          es: "Con [[k]] calculado, obtener [[lambda]] = 2π/[[k]] para conocer el espaciado de la onda y comparar con dimensiones físicas relevantes (longitud de antena, fibra, cavidad)."
          en: "With [[k]] computed, obtain [[lambda]] = 2π/[[k]] to know the wave spacing and compare with relevant physical dimensions (antenna length, fibre, cavity)."

  omega:
    summary_rules:
      - id: omega_sum_default
        when: "true"
        status: info
        text:
          es: "[[omega]] indica la posición de la señal en el espectro EM: describe cuántos radianes oscilan por segundo. Domina la energía del fotón y determina el tipo de interacción con la materia."
          en: "[[omega]] indicates the position of the signal in the EM spectrum: it describes how many radians oscillate per second. It dominates the photon energy and determines the type of interaction with matter."
    physical_reading_rules:
      - id: omega_phys_vis
        when: "result > 2.4e15 and result < 4.7e15"
        status: ok
        text:
          es: "[[omega]] en el rango 2.4–4.7×10¹⁵ rad/s corresponde a luz visible (longitud de onda 400–780 nm)."
          en: "[[omega]] in the range 2.4–4.7×10¹⁵ rad/s corresponds to visible light (wavelength 400–780 nm)."
      - id: omega_phys_default
        when: "true"
        status: ok
        text:
          es: "[[omega]] = [[c]]·[[k]] en el vacío. El valor de [[omega]] determina la posición en el espectro EM y, con ella, el tipo de interacción con la materia."
          en: "[[omega]] = [[c]]·[[k]] in vacuum. The value of [[omega]] determines the position in the EM spectrum and thereby the type of interaction with matter."
    coherence_rules:
      - id: omega_coh_default
        when: "true"
        status: ok
        text:
          es: "Comprobar que [[omega]]/[[k]] da [[c]] y que 2π/[[k]] da [[lambda]] razonable para el rango del espectro que se está calculando."
          en: "Check that [[omega]]/[[k]] gives [[c]] and that 2π/[[k]] gives a reasonable [[lambda]] for the spectrum range being calculated."
    model_validity_rules:
      - id: omega_val_default
        when: "true"
        status: ok
        text:
          es: "La relación de dispersión [[omega]] = [[c]]·[[k]] es lineal y exacta en el vacío para todo [[omega]]. En medios materiales [[omega]] y [[k]] están relacionados por [[omega]] = ([[c]]/n)·[[k]]."
          en: "The dispersion relation [[omega]] = [[c]]·[[k]] is linear and exact in vacuum for all [[omega]]. In material media [[omega]] and [[k]] are related by [[omega]] = ([[c]]/n)·[[k]]."
    graph_rules:
      - id: omega_graph_default
        when: "true"
        status: info
        text:
          es: "En el gráfico de la relación de dispersión, [[omega]] aparece en el eje vertical. El punto ([[k]], [[omega]]) debe estar sobre la recta de pendiente [[c]]."
          en: "In the dispersion relation graph, [[omega]] appears on the vertical axis. The point ([[k]], [[omega]]) must lie on the line of slope [[c]]."
    likely_errors:
      - id: omega_err_default
        when: "true"
        status: warning
        text:
          es: "Confundir [[omega]] (rad/s) con la frecuencia ordinaria f (Hz). La conversión es [[omega]] = 2πf. Si se usa f directamente en [[omega]] = [[c]]·[[k]], el resultado queda errado por 2π."
          en: "Confusing [[omega]] (rad/s) with ordinary frequency f (Hz). The conversion is [[omega]] = 2πf. Using f directly in [[omega]] = [[c]]·[[k]] gives a result off by 2π."
    next_step_rules:
      - id: omega_next_default
        when: "true"
        status: info
        text:
          es: "Con [[omega]] calculado, identificar el rango del espectro EM y las propiedades de interacción con la materia relevantes para la aplicación (visibilidad, absorción, penetración)."
          en: "With [[omega]] computed, identify the EM spectrum range and the matter-interaction properties relevant for the application (visibility, absorption, penetration)."

  lambda:
    summary_rules:
      - id: lambda_sum_default
        when: "true"
        status: info
        text:
          es: "[[lambda]] resume la escala espacial de la onda: indica el período de repetición del campo. Depende de [[c]] y de [[omega]]: disminuye al aumentar la frecuencia."
          en: "[[lambda]] resumes the spatial scale of the wave: it indicates the field repetition period. It depends on [[c]] and [[omega]]: it decreases as frequency increases."
    physical_reading_rules:
      - id: lambda_phys_nm
        when: "result > 3.8e-7 and result < 7.8e-7"
        status: ok
        text:
          es: "[[lambda]] en el rango 380–780 nm corresponde a luz visible. Esta es la ventana en la que el ojo humano es sensible."
          en: "[[lambda]] in the 380–780 nm range corresponds to visible light. This is the window in which the human eye is sensitive."
      - id: lambda_phys_default
        when: "true"
        status: ok
        text:
          es: "[[lambda]] fija la escala espacial de la onda. Objetos mucho menores que [[lambda]] no perturban significativamente la onda; objetos comparables a [[lambda]] producen difracción notable."
          en: "[[lambda]] sets the spatial scale of the wave. Objects much smaller than [[lambda]] do not significantly perturb the wave; objects comparable to [[lambda]] produce noticeable diffraction."
    coherence_rules:
      - id: lambda_coh_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[lambda]] = [[c]]/f y [[lambda]] = 2π/[[k]] den el mismo resultado. Una discrepancia indica mezcla de unidades o fórmulas distintas."
          en: "Verify that [[lambda]] = [[c]]/f and [[lambda]] = 2π/[[k]] give the same result. A discrepancy indicates mixed units or different formulae."
    model_validity_rules:
      - id: lambda_val_default
        when: "true"
        status: ok
        text:
          es: "La relación [[lambda]] = 2π/[[k]] es exacta en el vacío. En un medio material, [[lambda]] = [[lambda]]_vacío/n porque [[k]] = n·[[omega]]/[[c]]."
          en: "The relation [[lambda]] = 2π/[[k]] is exact in vacuum. In a material medium, [[lambda]] = [[lambda]]_vacuum/n because [[k]] = n·[[omega]]/[[c]]."
    graph_rules:
      - id: lambda_graph_default
        when: "true"
        status: info
        text:
          es: "[[lambda]] es el período espacial visible en el gráfico de [[E]] vs x: la distancia entre dos máximos consecutivos del campo. En el gráfico [[omega]] vs [[k]], [[lambda]] = 2π/[[k]] corresponde a la posición horizontal del punto."
          en: "[[lambda]] is the spatial period visible in the [[E]] vs x graph: the distance between two consecutive field maxima. In the [[omega]] vs [[k]] graph, [[lambda]] = 2π/[[k]] corresponds to the horizontal position of the point."
    likely_errors:
      - id: lambda_err_default
        when: "true"
        status: warning
        text:
          es: "Confundir [[lambda]] en el vacío con [[lambda]] en el medio material. En agua (n ≈ 1.33), la [[lambda]] visible es unos 413–585 nm, no 550 nm."
          en: "Confusing [[lambda]] in vacuum with [[lambda]] in the material medium. In water (n ≈ 1.33), visible [[lambda]] is about 413–585 nm, not 550 nm."
    next_step_rules:
      - id: lambda_next_default
        when: "true"
        status: info
        text:
          es: "Con [[lambda]] calculada, comparar con dimensiones físicas del sistema (longitud de antena, apertura, tamaño de obstáculo) para evaluar si la difracción es relevante."
          en: "With [[lambda]] computed, compare with physical dimensions of the system (antenna length, aperture, obstacle size) to assess whether diffraction is relevant."

  E:
    summary_rules:
      - id: E_sum_default
        when: "true"
        status: info
        text:
          es: "[[E]] describe la oscilación del campo eléctrico en la onda: indica la fuerza por unidad de carga en cada punto. Su amplitud domina el transporte de energía junto con [[B]]."
          en: "[[E]] describes the oscillation of the electric field in the wave: it indicates the force per unit charge at each point. Its amplitude dominates energy transport together with [[B]]."
    physical_reading_rules:
      - id: E_phys_default
        when: "true"
        status: ok
        text:
          es: "El valor instantáneo de [[E]] determina la fuerza sobre una carga de prueba en ese punto. La intensidad media de la onda es proporcional al cuadrado de la amplitud E₀."
          en: "The instantaneous value of [[E]] determines the force on a test charge at that point. The mean wave intensity is proportional to the square of the amplitude E₀."
    coherence_rules:
      - id: E_coh_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[E]] sea transversal a la dirección de propagación [[k]]. Un [[E]] con componente longitudinal indicaría violación de ∇·[[E]] = 0."
          en: "Verify that [[E]] is transverse to the propagation direction [[k]]. An [[E]] with a longitudinal component would indicate violation of ∇·[[E]] = 0."
    model_validity_rules:
      - id: E_val_default
        when: "true"
        status: ok
        text:
          es: "La solución [[E]] = E₀cos(kx − [[omega]]t) es válida para el vacío. En un medio absorbente, la amplitud E₀ decrece exponencialmente con la distancia de propagación."
          en: "The solution [[E]] = E₀cos(kx − [[omega]]t) is valid for vacuum. In an absorbing medium, the amplitude E₀ decreases exponentially with propagation distance."
    graph_rules:
      - id: E_graph_default
        when: "true"
        status: info
        text:
          es: "En el gráfico SVG, [[E]] aparece como una sinusoide en el eje transversal. La separación entre crestas es [[lambda]]; la amplitud visual es E₀."
          en: "In the SVG graph, [[E]] appears as a sinusoid on the transverse axis. The distance between crests is [[lambda]]; the visual amplitude is E₀."
    likely_errors:
      - id: E_err_default
        when: "true"
        status: warning
        text:
          es: "Confundir la amplitud E₀ con el valor RMS E_rms = E₀/√2. Para calcular intensidad media, usar E_rms²·ε₀·c, no E₀²·ε₀·c."
          en: "Confusing amplitude E₀ with RMS value E_rms = E₀/√2. To compute mean intensity, use E_rms²·ε₀·c, not E₀²·ε₀·c."
    next_step_rules:
      - id: E_next_default
        when: "true"
        status: info
        text:
          es: "Con [[E]] en un punto conocido, calcular el [[B]] correspondiente mediante la relación de amplitudes B₀ = E₀/[[c]], y el vector de Poynting para la intensidad."
          en: "With [[E]] at a known point, compute the corresponding [[B]] via the amplitude relation B₀ = E₀/[[c]], and the Poynting vector for intensity."

  B:
    summary_rules:
      - id: B_sum_default
        when: "true"
        status: info
        text:
          es: "[[B]] describe la oscilación del campo magnético en la onda: indica la fuerza sobre cargas móviles. Su amplitud depende de [[E]] y de [[c]]: disminuye si [[c]] aumenta."
          en: "[[B]] describes the magnetic field oscillation in the wave: it indicates the force on moving charges. Its amplitude depends on [[E]] and [[c]]: it decreases if [[c]] increases."
    physical_reading_rules:
      - id: B_phys_default
        when: "true"
        status: ok
        text:
          es: "[[B]] es perpendicular a [[E]] y a la dirección de propagación [[k]]. Su amplitud es siempre E₀/[[c]], lo que indica que [[B]] es mucho menor en unidades SI pero igual en densidad de energía."
          en: "[[B]] is perpendicular to [[E]] and to the propagation direction [[k]]. Its amplitude is always E₀/[[c]], indicating that [[B]] is much smaller in SI units but equal in energy density."
    coherence_rules:
      - id: B_coh_default
        when: "true"
        status: ok
        text:
          es: "Verificar que la amplitud de [[B]] sea consistente con E₀/[[c]]. Si [[B]] y [[E]] no tienen ese cociente, la solución no satisface la ecuación de onda."
          en: "Verify that the amplitude of [[B]] is consistent with E₀/[[c]]. If [[B]] and [[E]] do not have that ratio, the solution does not satisfy the wave equation."
    model_validity_rules:
      - id: B_val_default
        when: "true"
        status: ok
        text:
          es: "La relación B₀ = E₀/[[c]] es válida solo en el vacío. En un medio material, B₀ = n·E₀/[[c]] donde n es el índice de refracción, que depende de [[omega]]."
          en: "The relation B₀ = E₀/[[c]] is valid only in vacuum. In a material medium, B₀ = n·E₀/[[c]] where n is the refractive index, which depends on [[omega]]."
    graph_rules:
      - id: B_graph_default
        when: "true"
        status: info
        text:
          es: "En el gráfico SVG, [[B]] aparece como una sinusoide en el eje perpendicular a [[E]]. Los picos de [[B]] y [[E]] coinciden en fase y posición."
          en: "In the SVG graph, [[B]] appears as a sinusoid on the axis perpendicular to [[E]]. The peaks of [[B]] and [[E]] coincide in phase and position."
    likely_errors:
      - id: B_err_default
        when: "true"
        status: warning
        text:
          es: "Error habitual: calcular solo la densidad de energía de [[E]] e ignorar la de [[B]]. Ambas contribuyen por igual: u_E = u_B = ε₀E²/2 en cada instante."
          en: "Common error: computing only the energy density of [[E]] and ignoring that of [[B]]. Both contribute equally: u_E = u_B = ε₀E²/2 at every instant."
    next_step_rules:
      - id: B_next_default
        when: "true"
        status: info
        text:
          es: "Con [[B]] calculado, obtener el vector de Poynting S = [[E]]×[[B]]/[[mu0]] para determinar la intensidad y la dirección de flujo de energía de la onda."
          en: "With [[B]] computed, obtain the Poynting vector S = [[E]]×[[B]]/[[mu0]] to determine the intensity and energy flux direction of the wave."
`;export{e as default};
