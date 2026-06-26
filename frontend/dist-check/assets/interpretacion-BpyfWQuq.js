const e=`version: "2.0"
id: interp-ondas-flexionales-en-vigas
leaf_id: ondas-flexionales-en-vigas

nombre:
  es: Interpretación de ondas flexionales en vigas
  en: Interpretation of flexural waves in beams

scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: ondas-mecanicas
  parent_id: ondas-en-solidos
  ruta_relativa: fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-flexionales-en-vigas

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretacion
    en: Interpretation
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
    priority: [summary, likely_errors]

dependencies:
  formulas:
    - velocidad_fase_flexional
    - velocidad_grupo_flexional
    - relacion_dispersion_flex
    - longitud_onda_flexional
  magnitudes:
    - v_fase_flex
    - v_grupo_flex
    - E_young
    - I_seccion
    - rho_lin
    - omega
    - k_flex
    - lambda_flex
    - rho_vol
    - A_seccion
    - r_giro

global_context:
  physical_domain:
    es: "Propagación dispersiva de ondas de flexión transversal en vigas elásticas esbeltas según el modelo de Euler-Bernoulli."
    en: "Dispersive propagation of transverse bending waves in slender elastic beams according to the Euler-Bernoulli model."
  axis_convention:
    es: "Eje x a lo largo de la viga; desplazamiento transversal w(x,t) perpendicular al eje neutro."
    en: "x-axis along the beam; transverse displacement w(x,t) perpendicular to the neutral axis."
  standard_assumptions:
    - "Viga esbelta: longitud de onda >> espesor"
    - "Material isótropo, homogéneo, elástico lineal"
    - "Sección transversal constante"
    - "Sin amortiguamiento"
    - "Pequeñas deformaciones"
  standard_warnings:
    - "A frecuencias altas (lambda comparable al espesor), usar Timoshenko"
    - "La velocidad de fase flexional siempre es menor que la longitudinal"
    - "La dispersión hace que los pulsos se ensanchen al propagarse"

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

  v_fase_flex:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Velocidad a la que se desplaza un frente de fase de la onda de flexión; crece con la raíz de la frecuencia."
      en: "Speed at which a bending wave phase front travels; grows with the square root of frequency."
    summary_rules:
      - id: vf_summary_high
        when: "v_fase_flex > 500"
        status: ok
        text:
          es: "[[v_fase_flex]] indica propagación rápida de la fase. La viga es muy rígida o la frecuencia es elevada. Verificar si la longitud de onda resultante sigue siendo mucho mayor que el espesor."
          en: "[[v_fase_flex]] indicates fast phase propagation. The beam is very stiff or frequency is high. Verify whether the resulting wavelength is still much greater than the thickness."
      - id: vf_summary_default
        when: "true"
        status: ok
        text:
          es: "[[v_fase_flex]] resume la velocidad de un frente de fase. A diferencia de ondas longitudinales, esta velocidad depende de la frecuencia: ondas de alta frecuencia viajan más rápido."
          en: "[[v_fase_flex]] summarizes the speed of a phase front. Unlike longitudinal waves, this speed depends on frequency: higher-frequency waves travel faster."
    physical_reading_rules:
      - id: vf_reading_dispersive
        when: "v_fase_flex > 0"
        status: ok
        text:
          es: "[[v_fase_flex]] crece como la raíz cuadrada de [[omega]]. Si se duplica la frecuencia, la velocidad de fase se multiplica por raíz de 2 (aproximadamente 1.41). Esta dispersión positiva significa que los paquetes de ondas se ensanchan al propagarse."
          en: "[[v_fase_flex]] grows as the square root of [[omega]]. If frequency doubles, phase velocity multiplies by the square root of 2 (approximately 1.41). This positive dispersion means wave packets broaden as they propagate."
      - id: vf_reading_default
        when: "true"
        status: ok
        text:
          es: "[[v_fase_flex]] depende de la rigidez EI y de la inercia rho·A del material y sección, más la frecuencia. Un material más rígido o una sección con mayor momento de inercia produce ondas de fase más rápida."
          en: "[[v_fase_flex]] depends on stiffness EI and inertia rho·A of the material and section, plus frequency. A stiffer material or section with greater moment of inertia produces faster phase waves."
    coherence_rules:
      - id: vf_coherence_vs_longitudinal
        when: "v_fase_flex > 6000"
        status: error
        text:
          es: "[[v_fase_flex]] supera la velocidad longitudinal típica. La velocidad de fase flexional siempre es menor que la longitudinal en el mismo material. Revisar unidades de [[I_seccion]] (debe ser m⁴) y [[omega]] (debe ser rad/s)."
          en: "[[v_fase_flex]] exceeds typical longitudinal speed. Flexural phase velocity is always less than longitudinal in the same material. Check units of [[I_seccion]] (must be m⁴) and [[omega]] (must be rad/s)."
      - id: vf_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[v_fase_flex]] es físicamente plausible para la frecuencia y sección consideradas."
          en: "The value of [[v_fase_flex]] is physically plausible for the considered frequency and section."
    model_validity_rules:
      - id: vf_validity_wavelength
        when: "v_fase_flex > 1000"
        status: warning
        text:
          es: "A velocidades de fase elevadas, la longitud de onda puede reducirse hasta ser comparable al espesor de la sección. Calcular [[lambda_flex]] y comparar con el espesor para verificar la validez de Euler-Bernoulli."
          en: "At high phase velocities, the wavelength may decrease until it is comparable to section thickness. Calculate [[lambda_flex]] and compare with thickness to verify Euler-Bernoulli validity."
      - id: vf_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de Euler-Bernoulli es válido mientras la longitud de onda sea al menos 6 veces el espesor de la sección. Para vigas metálicas delgadas a frecuencias audibles, esto se cumple con holgura."
          en: "Euler-Bernoulli model is valid as long as wavelength is at least 6 times the section thickness. For thin metallic beams at audible frequencies, this is easily satisfied."
    graph_rules:
      - id: vf_graph_dispersion
        when: "true"
        status: ok
        text:
          es: "En el gráfico Coord de dispersión, [[v_fase_flex]] aparece como una curva creciente con la raíz de la frecuencia. La pendiente de la curva disminuye a frecuencias altas porque la raíz cuadrada se satura."
          en: "In the Coord dispersion graph, [[v_fase_flex]] appears as a curve growing with the square root of frequency. The curve slope decreases at high frequencies because the square root saturates."
    likely_errors:
      - id: vf_error_units
        when: "v_fase_flex > 10000"
        status: error
        text:
          es: "Velocidad de fase extremadamente alta. El error más probable es usar [[I_seccion]] en cm⁴ sin convertir a m⁴ (factor 10⁻⁸), o [[omega]] en Hz en lugar de rad/s."
          en: "Extremely high phase velocity. The most likely error is using [[I_seccion]] in cm⁴ without converting to m⁴ (factor 10⁻⁸), or [[omega]] in Hz instead of rad/s."
      - id: vf_error_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[omega]] está en rad/s (no en Hz: multiplicar por 2π) y que [[I_seccion]] está en m⁴ (no en cm⁴)."
          en: "Verify that [[omega]] is in rad/s (not Hz: multiply by 2π) and that [[I_seccion]] is in m⁴ (not cm⁴)."
    next_step_rules:
      - id: vf_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[v_fase_flex]] calculado, obtener [[v_grupo_flex]] multiplicando por 2, y [[lambda_flex]] dividiendo 2π entre [[k_flex]]. Comparar [[lambda_flex]] con el espesor para confirmar la validez del modelo."
          en: "With [[v_fase_flex]] computed, obtain [[v_grupo_flex]] by multiplying by 2, and [[lambda_flex]] by dividing 2π by [[k_flex]]. Compare [[lambda_flex]] with thickness to confirm model validity."

  v_grupo_flex:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Velocidad de transporte de energía de la onda de flexión; el doble de la velocidad de fase en Euler-Bernoulli."
      en: "Energy transport speed of the bending wave; twice the phase velocity in Euler-Bernoulli."
    summary_rules:
      - id: vg_summary_default
        when: "true"
        status: ok
        text:
          es: "[[v_grupo_flex]] resume la velocidad a la que un pulso de flexión transporta energía. Es exactamente el doble de [[v_fase_flex]] en el modelo de Euler-Bernoulli, consecuencia de la dispersión cuadrática."
          en: "[[v_grupo_flex]] summarizes the speed at which a bending pulse transports energy. It is exactly twice [[v_fase_flex]] in the Euler-Bernoulli model, a consequence of quadratic dispersion."
    physical_reading_rules:
      - id: vg_reading_default
        when: "true"
        status: ok
        text:
          es: "[[v_grupo_flex]] indica cuánto tarda un impacto en recorrer la viga. Un golpe en un extremo llega al otro a esta velocidad. La energía siempre viaja más rápido que la fase individual."
          en: "[[v_grupo_flex]] indicates how long an impact takes to travel the beam. A blow at one end arrives at the other at this speed. Energy always travels faster than the individual phase."
    coherence_rules:
      - id: vg_coherence_ratio
        when: "v_grupo_flex < v_fase_flex"
        status: error
        text:
          es: "[[v_grupo_flex]] no puede ser menor que [[v_fase_flex]] en ondas flexionales de Euler-Bernoulli. La relación correcta es v_g igual a 2·v_f. Revisar el cálculo."
          en: "[[v_grupo_flex]] cannot be less than [[v_fase_flex]] in Euler-Bernoulli flexural waves. The correct relation is v_g equals 2·v_f. Check the calculation."
      - id: vg_coherence_default
        when: "true"
        status: ok
        text:
          es: "La relación [[v_grupo_flex]] igual a dos veces [[v_fase_flex]] se verifica correctamente."
          en: "The relation [[v_grupo_flex]] equals twice [[v_fase_flex]] is correctly verified."
    model_validity_rules:
      - id: vg_validity_default
        when: "true"
        status: ok
        text:
          es: "La relación exacta v_g igual a 2·v_f es específica del modelo de Euler-Bernoulli. En Timoshenko, v_g crece más lentamente con la frecuencia y se satura en la velocidad de onda de cortante."
          en: "The exact relation v_g equals 2·v_f is specific to the Euler-Bernoulli model. In Timoshenko, v_g grows more slowly with frequency and saturates at the shear wave speed."
    graph_rules:
      - id: vg_graph_default
        when: "true"
        status: ok
        text:
          es: "En el gráfico de dispersión, [[v_grupo_flex]] es la curva superior, exactamente al doble de [[v_fase_flex]]. Ambas curvas crecen con la raíz de la frecuencia pero con pendientes distintas en la misma proporción 2:1."
          en: "In the dispersion graph, [[v_grupo_flex]] is the upper curve, exactly at double [[v_fase_flex]]. Both curves grow with the square root of frequency but with slopes in the same 2:1 ratio."
    likely_errors:
      - id: vg_error_equal
        when: "true"
        status: ok
        text:
          es: "Si [[v_grupo_flex]] resulta igual a [[v_fase_flex]], se ha confundido con un medio no dispersivo. En ondas flexionales v_g es siempre el doble de v_f."
          en: "If [[v_grupo_flex]] equals [[v_fase_flex]], a non-dispersive medium has been assumed. In flexural waves v_g is always twice v_f."
    next_step_rules:
      - id: vg_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[v_grupo_flex]] conocida, estimar el tiempo de llegada de un pulso dividiendo la longitud de la viga entre [[v_grupo_flex]]. Verificar si el modelo de Euler-Bernoulli sigue siendo válido a esa frecuencia."
          en: "With [[v_grupo_flex]] known, estimate pulse arrival time by dividing beam length by [[v_grupo_flex]]. Verify whether the Euler-Bernoulli model remains valid at that frequency."

  omega:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Frecuencia angular de la excitación o del modo de la onda de flexión."
      en: "Angular frequency of the excitation or mode of the bending wave."
    summary_rules:
      - id: om_summary_default
        when: "true"
        status: ok
        text:
          es: "[[omega]] resume la frecuencia angular del fenómeno. A mayor [[omega]], mayor velocidad de fase y menor longitud de onda, según la dispersión cuadrática de la viga."
          en: "[[omega]] summarizes the angular frequency of the phenomenon. Higher [[omega]] means higher phase velocity and shorter wavelength, according to the beam's quadratic dispersion."
    physical_reading_rules:
      - id: om_reading_default
        when: "true"
        status: ok
        text:
          es: "[[omega]] entra en la velocidad de fase bajo una raíz cuadrada: duplicar la frecuencia multiplica v_f por la raíz de 2. Esta dependencia sub-lineal es la firma de la dispersión flexional."
          en: "[[omega]] enters phase velocity under a square root: doubling frequency multiplies v_f by the square root of 2. This sub-linear dependence is the signature of flexural dispersion."
    coherence_rules:
      - id: om_coherence_positive
        when: "omega <= 0"
        status: error
        text:
          es: "[[omega]] debe ser positiva para una onda de flexión propagante."
          en: "[[omega]] must be positive for a propagating bending wave."
      - id: om_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[omega]] es coherente con el rango esperado para la aplicación."
          en: "The value of [[omega]] is consistent with the expected range for the application."
    model_validity_rules:
      - id: om_validity_high
        when: "omega > 100000"
        status: warning
        text:
          es: "A frecuencias angulares muy elevadas, la longitud de onda puede ser comparable al espesor y el modelo de Euler-Bernoulli deja de ser válido. Verificar calculando [[lambda_flex]]."
          en: "At very high angular frequencies, the wavelength may be comparable to thickness and the Euler-Bernoulli model breaks down. Verify by computing [[lambda_flex]]."
      - id: om_validity_default
        when: "true"
        status: ok
        text:
          es: "Para el rango de frecuencia actual, el modelo de viga delgada es apropiado."
          en: "For the current frequency range, the slender beam model is appropriate."
    graph_rules:
      - id: om_graph_default
        when: "true"
        status: ok
        text:
          es: "[[omega]] es el eje vertical en la curva de dispersión omega vs k. La forma parabólica de esta curva es la característica visual de la dispersión cuadrática."
          en: "[[omega]] is the vertical axis in the omega vs k dispersion curve. The parabolic shape of this curve is the visual characteristic of quadratic dispersion."
    likely_errors:
      - id: om_error_hz
        when: "omega < 10"
        status: warning
        text:
          es: "[[omega]] parece muy baja. Verificar si se ha introducido la frecuencia en Hz en lugar de rad/s. Para convertir, multiplicar Hz por 2π."
          en: "[[omega]] seems very low. Verify whether frequency was entered in Hz instead of rad/s. To convert, multiply Hz by 2π."
      - id: om_error_default
        when: "true"
        status: ok
        text:
          es: "Confirmar que [[omega]] está en rad/s. Para 1 kHz, omega vale aproximadamente 6283 rad/s."
          en: "Confirm that [[omega]] is in rad/s. For 1 kHz, omega is approximately 6283 rad/s."
    next_step_rules:
      - id: om_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[omega]] definida, calcular [[v_fase_flex]] y [[k_flex]] para characterizar completamente la onda de flexión a esa frecuencia."
          en: "With [[omega]] defined, compute [[v_fase_flex]] and [[k_flex]] to fully characterize the bending wave at that frequency."

  k_flex:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Número de onda flexional; define la escala espacial del patrón de deformación de la viga."
      en: "Flexural wavenumber; defines the spatial scale of the beam deformation pattern."
    summary_rules:
      - id: kf_summary_default
        when: "true"
        status: ok
        text:
          es: "[[k_flex]] resume la componente espacial de la onda de flexión. Un valor elevado indica longitud de onda corta y deformación finamente distribuida a lo largo de la viga."
          en: "[[k_flex]] summarizes the spatial component of the bending wave. A high value indicates short wavelength and finely distributed deformation along the beam."
    physical_reading_rules:
      - id: kf_reading_default
        when: "true"
        status: ok
        text:
          es: "[[k_flex]] crece como la raíz cuadrada de [[omega]] (no linealmente). Si se duplica la frecuencia, k solo se multiplica por la raíz de 2. Esto contrasta con ondas no dispersivas donde k es directamente proporcional a omega."
          en: "[[k_flex]] grows as the square root of [[omega]] (not linearly). If frequency doubles, k only multiplies by the square root of 2. This contrasts with non-dispersive waves where k is directly proportional to omega."
    coherence_rules:
      - id: kf_coherence_positive
        when: "k_flex <= 0"
        status: error
        text:
          es: "[[k_flex]] debe ser positivo para una onda propagante."
          en: "[[k_flex]] must be positive for a propagating wave."
      - id: kf_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[k_flex]] es coherente con los parámetros de la viga y la frecuencia."
          en: "The value of [[k_flex]] is consistent with beam parameters and frequency."
    model_validity_rules:
      - id: kf_validity_thick
        when: "k_flex > 100"
        status: warning
        text:
          es: "[[k_flex]] elevado implica longitud de onda corta. Si la longitud de onda resultante es menor que 6 veces el espesor, el modelo de Euler-Bernoulli no es adecuado."
          en: "High [[k_flex]] implies short wavelength. If the resulting wavelength is less than 6 times the thickness, the Euler-Bernoulli model is inadequate."
      - id: kf_validity_default
        when: "true"
        status: ok
        text:
          es: "El número de onda está en el rango de validez del modelo de viga delgada."
          en: "The wavenumber is in the validity range of the slender beam model."
    graph_rules:
      - id: kf_graph_default
        when: "true"
        status: ok
        text:
          es: "[[k_flex]] es el eje horizontal en la curva de dispersión. La forma parabólica omega vs k muestra que a medida que k aumenta, omega crece como k². La tangente a la curva en un punto da la velocidad de grupo."
          en: "[[k_flex]] is the horizontal axis in the dispersion curve. The parabolic shape omega vs k shows that as k increases, omega grows as k². The tangent to the curve at a point gives the group velocity."
    likely_errors:
      - id: kf_error_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[k_flex]] se ha calculado correctamente a partir de la relación de dispersión (raíz cuarta de omega²·rho·A/(EI)), no de una fórmula lineal k igual a omega/v."
          en: "Verify that [[k_flex]] has been computed correctly from the dispersion relation (fourth root of omega²·rho·A/(EI)), not from a linear formula k equals omega/v."
    next_step_rules:
      - id: kf_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[k_flex]] calculado, obtener [[lambda_flex]] como 2π/k y comparar con el espesor de la sección. Si [[lambda_flex]] es menor que 6 veces el espesor, cambiar al modelo de Timoshenko."
          en: "With [[k_flex]] computed, obtain [[lambda_flex]] as 2π/k and compare with section thickness. If [[lambda_flex]] is less than 6 times the thickness, switch to the Timoshenko model."

  lambda_flex:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Longitud de onda flexional; la distancia entre máximos consecutivos de deformación transversal."
      en: "Flexural wavelength; the distance between consecutive transverse displacement maxima."
    summary_rules:
      - id: lf_summary_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_flex]] resume la escala espacial de la deformación. Un valor pequeño indica que la viga se deforma con muchos ciclos por unidad de longitud, típico de altas frecuencias."
          en: "[[lambda_flex]] summarizes the spatial scale of deformation. A small value indicates the beam deforms with many cycles per unit length, typical of high frequencies."
    physical_reading_rules:
      - id: lf_reading_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_flex]] disminuye al aumentar la frecuencia, pero más lentamente que en ondas no dispersivas. Duplicar la frecuencia reduce [[lambda_flex]] por el factor raíz de 2, no a la mitad."
          en: "[[lambda_flex]] decreases with increasing frequency, but more slowly than in non-dispersive waves. Doubling frequency reduces [[lambda_flex]] by the square root of 2, not by half."
    coherence_rules:
      - id: lf_coherence_positive
        when: "lambda_flex <= 0"
        status: error
        text:
          es: "[[lambda_flex]] debe ser positiva."
          en: "[[lambda_flex]] must be positive."
      - id: lf_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_flex]] es coherente con [[k_flex]] como 2π/k."
          en: "[[lambda_flex]] is consistent with [[k_flex]] as 2π/k."
    model_validity_rules:
      - id: lf_validity_thin
        when: "lambda_flex < 0.01"
        status: warning
        text:
          es: "[[lambda_flex]] menor que 1 cm puede ser comparable al espesor de la sección. Verificar la condición de viga delgada para la frecuencia actual."
          en: "[[lambda_flex]] less than 1 cm may be comparable to section thickness. Verify the slender beam condition for the current frequency."
      - id: lf_validity_default
        when: "true"
        status: ok
        text:
          es: "La longitud de onda es suficientemente mayor que el espesor para que el modelo de Euler-Bernoulli sea adecuado."
          en: "Wavelength is sufficiently larger than thickness for the Euler-Bernoulli model to be adequate."
    graph_rules:
      - id: lf_graph_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_flex]] define la separación entre crestas en la representación SVG del desplazamiento de la viga. A mayor frecuencia, las crestas están más juntas."
          en: "[[lambda_flex]] defines the separation between crests in the SVG representation of beam displacement. At higher frequency, crests are closer together."
    likely_errors:
      - id: lf_error_default
        when: "true"
        status: ok
        text:
          es: "Confirmar que [[lambda_flex]] es menor que la longitud de onda longitudinal a la misma frecuencia. Las ondas de flexión siempre tienen longitudes de onda más cortas que las longitudinales."
          en: "Confirm that [[lambda_flex]] is shorter than the longitudinal wavelength at the same frequency. Bending waves always have shorter wavelengths than longitudinal ones."
    next_step_rules:
      - id: lf_next_default
        when: "true"
        status: ok
        text:
          es: "Comparar [[lambda_flex]] con la longitud total de la viga para estimar cuántos ciclos caben, y con el espesor para verificar la validez del modelo. Si caben pocos ciclos, las condiciones de contorno dominan la respuesta."
          en: "Compare [[lambda_flex]] with the total beam length to estimate how many cycles fit, and with thickness to verify model validity. If few cycles fit, boundary conditions dominate the response."

  E_young:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Módulo de Young del material de la viga; determina la rigidez elástica."
      en: "Young's modulus of the beam material; determines elastic stiffness."
    summary_rules:
      - id: Ey_summary_default
        when: "true"
        status: ok
        text:
          es: "[[E_young]] resume la rigidez del material. Entra bajo una raíz cuarta en [[v_fase_flex]], por lo que cambiar de material tiene un efecto moderado sobre la velocidad de fase."
          en: "[[E_young]] summarizes material stiffness. It enters under a fourth root in [[v_fase_flex]], so changing material has a moderate effect on phase velocity."
    physical_reading_rules:
      - id: Ey_reading_default
        when: "true"
        status: ok
        text:
          es: "[[E_young]] entra en el producto EI que forma la rigidez a la flexión de la viga. Para vigas del mismo material, la velocidad de fase depende más de la geometría (a través de [[I_seccion]]) que del material."
          en: "[[E_young]] enters the product EI forming the beam's bending stiffness. For beams of the same material, phase velocity depends more on geometry (through [[I_seccion]]) than on material."
    coherence_rules:
      - id: Ey_coherence_positive
        when: "E_young <= 0"
        status: error
        text:
          es: "[[E_young]] debe ser positivo para un sólido elástico."
          en: "[[E_young]] must be positive for an elastic solid."
      - id: Ey_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[E_young]] es coherente con materiales sólidos típicos."
          en: "[[E_young]] is consistent with typical solid materials."
    model_validity_rules:
      - id: Ey_validity_default
        when: "true"
        status: ok
        text:
          es: "[[E_young]] se asume constante en el régimen elástico lineal. Para materiales viscoelásticos, E se convierte en complejo y aparece amortiguamiento."
          en: "[[E_young]] is assumed constant in the linear elastic regime. For viscoelastic materials, E becomes complex and damping appears."
    graph_rules:
      - id: Ey_graph_default
        when: "true"
        status: ok
        text:
          es: "Un mayor [[E_young]] desplaza la curva de dispersión hacia arriba: mayores velocidades a la misma frecuencia."
          en: "A higher [[E_young]] shifts the dispersion curve upward: higher velocities at the same frequency."
    likely_errors:
      - id: Ey_error_gpa
        when: "E_young < 1000"
        status: warning
        text:
          es: "[[E_young]] parece estar en GPa. Convertir a Pa multiplicando por 10⁹ antes de sustituir en la fórmula."
          en: "[[E_young]] seems to be in GPa. Convert to Pa by multiplying by 10⁹ before substituting in the formula."
      - id: Ey_error_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[E_young]] está en Pa y corresponde al material correcto de la viga."
          en: "Verify that [[E_young]] is in Pa and corresponds to the correct beam material."
    next_step_rules:
      - id: Ey_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[E_young]] definido, calcular EI multiplicando por [[I_seccion]], y rho·A multiplicando [[rho_vol]] por [[A_seccion]]. Luego sustituir en la fórmula de [[v_fase_flex]]."
          en: "With [[E_young]] defined, compute EI by multiplying by [[I_seccion]], and rho·A by multiplying [[rho_vol]] by [[A_seccion]]. Then substitute in the [[v_fase_flex]] formula."

  I_seccion:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Momento de inercia de la sección transversal; controla la rigidez a la flexión junto con el módulo de Young."
      en: "Cross-section second moment of area; controls bending stiffness together with Young's modulus."
    summary_rules:
      - id: Is_summary_default
        when: "true"
        status: ok
        text:
          es: "[[I_seccion]] resume la capacidad geométrica de la sección para resistir la flexión. Un valor elevado indica una sección eficiente (tipo viga en I) con material alejado del eje neutro."
          en: "[[I_seccion]] summarizes the geometric capacity of the section to resist bending. A high value indicates an efficient section (I-beam type) with material far from the neutral axis."
    physical_reading_rules:
      - id: Is_reading_default
        when: "true"
        status: ok
        text:
          es: "[[I_seccion]] entra bajo una raíz cuarta en [[v_fase_flex]]. Duplicar [[I_seccion]] solo aumenta v_f por un factor de 2^(1/4) ≈ 1.19. Para aumentar significativamente la velocidad se necesitan cambios grandes en la geometría de la sección."
          en: "[[I_seccion]] enters under a fourth root in [[v_fase_flex]]. Doubling [[I_seccion]] only increases v_f by a factor of 2^(1/4) ≈ 1.19. Significantly increasing speed requires large changes in section geometry."
    coherence_rules:
      - id: Is_coherence_positive
        when: "I_seccion <= 0"
        status: error
        text:
          es: "[[I_seccion]] debe ser positivo para cualquier sección transversal real."
          en: "[[I_seccion]] must be positive for any real cross-section."
      - id: Is_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[I_seccion]] es coherente con las dimensiones de la sección."
          en: "[[I_seccion]] is consistent with the section dimensions."
    model_validity_rules:
      - id: Is_validity_default
        when: "true"
        status: ok
        text:
          es: "[[I_seccion]] es constante a lo largo de la viga en el modelo de sección uniforme. Para vigas de sección variable, se necesitan métodos numéricos o la aproximación WKB."
          en: "[[I_seccion]] is constant along the beam in the uniform section model. For variable-section beams, numerical methods or the WKB approximation are needed."
    graph_rules:
      - id: Is_graph_default
        when: "true"
        status: ok
        text:
          es: "Mayor [[I_seccion]] eleva la curva de dispersión completa, pero con efecto moderado por la raíz cuarta."
          en: "Higher [[I_seccion]] raises the entire dispersion curve, but with a moderate effect due to the fourth root."
    likely_errors:
      - id: Is_error_units
        when: "I_seccion > 0.01"
        status: warning
        text:
          es: "[[I_seccion]] superior a 0.01 m⁴ es excepcional. Verificar si se ha introducido en cm⁴ sin convertir (1 cm⁴ es 10⁻⁸ m⁴)."
          en: "[[I_seccion]] above 0.01 m⁴ is exceptional. Verify whether it was entered in cm⁴ without converting (1 cm⁴ is 10⁻⁸ m⁴)."
      - id: Is_error_default
        when: "true"
        status: ok
        text:
          es: "Para sección rectangular b×h, [[I_seccion]] vale b·h³/12. Confirmar que h es la dimensión perpendicular a la flexión."
          en: "For rectangular section b×h, [[I_seccion]] equals b·h³/12. Confirm that h is the dimension perpendicular to bending."
    next_step_rules:
      - id: Is_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[I_seccion]] y [[E_young]] disponibles, calcular la rigidez EI y el radio de giro como raíz de [[I_seccion]]/[[A_seccion]]. El radio de giro marca el límite de validez del modelo."
          en: "With [[I_seccion]] and [[E_young]] available, compute stiffness EI and the radius of gyration as the root of [[I_seccion]]/[[A_seccion]]. The radius of gyration marks the model validity limit."

  rho_lin:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Masa por unidad de longitud; la inercia lineal que se opone a la aceleración transversal de la viga."
      en: "Mass per unit length; the linear inertia opposing transverse acceleration of the beam."
    summary_rules:
      - id: rl_summary_default
        when: "true"
        status: ok
        text:
          es: "[[rho_lin]] resume la inercia lineal de la viga. Un valor elevado indica una viga pesada por metro que vibra con menor velocidad de fase. La relación entre rigidez EI e inercia [[rho_lin]] determina la velocidad de propagación."
          en: "[[rho_lin]] summarizes the beam linear inertia. A high value indicates a heavy beam per metre that vibrates at lower phase velocity. The ratio of stiffness EI to inertia [[rho_lin]] determines propagation speed."
    physical_reading_rules:
      - id: rl_reading_default
        when: "true"
        status: ok
        text:
          es: "[[rho_lin]] aparece en el denominador bajo la raíz cuarta. Duplicar [[rho_lin]] reduce [[v_fase_flex]] por el factor 2^(1/4) ≈ 1.19. Es equivalente a multiplicar la densidad o el área."
          en: "[[rho_lin]] appears in the denominator under the fourth root. Doubling [[rho_lin]] reduces [[v_fase_flex]] by the factor 2^(1/4) ≈ 1.19. This is equivalent to multiplying density or area."
    coherence_rules:
      - id: rl_coherence_positive
        when: "rho_lin <= 0"
        status: error
        text:
          es: "[[rho_lin]] debe ser positiva para una viga material."
          en: "[[rho_lin]] must be positive for a material beam."
      - id: rl_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[rho_lin]] es coherente con el producto de densidad volumétrica y área de la sección."
          en: "[[rho_lin]] is consistent with the product of volumetric density and cross-sectional area."
    model_validity_rules:
      - id: rl_validity_default
        when: "true"
        status: ok
        text:
          es: "[[rho_lin]] se asume constante en el modelo de sección uniforme. Para vigas con sección variable o material no homogéneo, la masa lineal puede variar a lo largo del eje."
          en: "[[rho_lin]] is assumed constant in the uniform section model. For beams with variable section or non-homogeneous material, linear mass may vary along the axis."
    graph_rules:
      - id: rl_graph_default
        when: "true"
        status: ok
        text:
          es: "Mayor [[rho_lin]] deprime la curva de dispersión, reduciendo todas las velocidades a la misma frecuencia."
          en: "Higher [[rho_lin]] depresses the dispersion curve, reducing all velocities at the same frequency."
    likely_errors:
      - id: rl_error_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[rho_lin]] se ha calculado como [[rho_vol]] × [[A_seccion]] y que ambos están en unidades SI (kg/m³ y m²)."
          en: "Verify that [[rho_lin]] has been computed as [[rho_vol]] × [[A_seccion]] and both are in SI units (kg/m³ and m²)."
    next_step_rules:
      - id: rl_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[rho_lin]] y EI calculados, sustituir en la fórmula de [[v_fase_flex]] para obtener la velocidad de fase a la frecuencia [[omega]] deseada."
          en: "With [[rho_lin]] and EI computed, substitute in the [[v_fase_flex]] formula to obtain phase velocity at the desired frequency [[omega]]."

cross_checks:
  - id: fase_vs_longitudinal
    description:
      es: "La velocidad de fase flexional siempre debe ser menor que la velocidad de onda longitudinal sqrt(E/rho) en el mismo material. Si resulta mayor, hay un error de cálculo."
      en: "Flexural phase velocity must always be less than the longitudinal wave speed sqrt(E/rho) in the same material. If it comes out higher, there is a calculation error."
  - id: grupo_doble_fase
    description:
      es: "En Euler-Bernoulli, v_g debe ser exactamente 2·v_f. Si difiere, se ha aplicado una relación incorrecta."
      en: "In Euler-Bernoulli, v_g must be exactly 2·v_f. If it differs, an incorrect relation has been applied."

error_patterns:
  - id: unidades_I
    description:
      es: "Usar I en cm⁴ sin convertir a m⁴ (factor 10⁻⁸), produciendo velocidades 100 veces mayores."
      en: "Using I in cm⁴ without converting to m⁴ (factor 10⁻⁸), producing speeds 100 times higher."
  - id: omega_vs_f
    description:
      es: "Introducir frecuencia en Hz donde se requiere rad/s, produciendo velocidades 2.5 veces menores que las reales."
      en: "Entering frequency in Hz where rad/s is required, producing speeds 2.5 times lower than actual."

graph_binding:
  enabled: true
  type: Coord
  primary_channel: phase_velocity_curve
  secondary_channel: group_velocity_curve
  description:
    es: "El gráfico principal muestra las curvas de velocidad de fase y de grupo vs frecuencia en escala log-log, mostrando la dispersión cuadrática."
    en: "The main graph shows phase and group velocity curves vs frequency in log-log scale, showing quadratic dispersion."

mini_graph:
  enabled: true
  preferred_type: Coord
  description:
    es: "Mini-gráfico con v_f y v_g vs frecuencia en el rango audible."
    en: "Mini-graph with v_f and v_g vs frequency in the audible range."

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
