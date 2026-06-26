const e=`version: "2.0"
id: interp-ondas-superficiales-rayleigh
leaf_id: ondas-superficiales-rayleigh

nombre:
  es: Interpretacion de ondas superficiales de Rayleigh
  en: Interpretation of Rayleigh surface waves

scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: ondas-mecanicas
  parent_id: ondas-en-solidos
  ruta_relativa: fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-superficiales-rayleigh

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
    - velocidad_rayleigh_aproximada
    - decaimiento_profundidad
    - ecuacion_secular_rayleigh
    - profundidad_penetracion
  magnitudes:
    - v_R
    - v_s
    - nu_poisson
    - A_0
    - A_z
    - alpha_R
    - z_prof
    - lambda_R
    - d_pen
    - eta_R
    - xi_vs_vp

global_context:
  physical_domain:
    es: "Propagacion de ondas elasticas superficiales de Rayleigh en semiespacios isotropos con superficie libre."
    en: "Propagation of Rayleigh elastic surface waves in isotropic half-spaces with a free surface."
  axis_convention:
    es: "Eje x en la direccion de propagacion horizontal. Eje z positivo hacia el interior (profundidad). Movimiento de particula en el plano x-z (sagital)."
    en: "x-axis in horizontal propagation direction. z-axis positive into the interior (depth). Particle motion in the x-z (sagittal) plane."
  standard_assumptions:
    - "Medio semi-infinito isotropo, homogeneo y elastico lineal"
    - "Superficie libre plana sin topografia"
    - "Sin atenuacion intrinseca ni dispersion"
  standard_warnings:
    - "En medios estratificados la onda es dispersiva y v_R depende de la frecuencia"
    - "La formula de Viktorov solo aplica al semiespacio homogeneo"
    - "No confundir v_R con v_s; siempre v_R < v_s"

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
      es: Lectura fisica
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
      es: Lectura del grafico
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

  v_R:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Velocidad de fase de la onda superficial de Rayleigh en el medio."
      en: "Phase velocity of the Rayleigh surface wave in the medium."
    summary_rules:
      - id: vR_summary_default
        when: "true"
        status: ok
        text:
          es: "[[v_R]] es la velocidad de la onda de Rayleigh. Siempre menor que [[v_s]], depende del coeficiente de Poisson. A mayor [[v_R]], mayor rigidez superficial del medio."
          en: "[[v_R]] is the Rayleigh wave velocity. Always less than [[v_s]], it depends on the Poisson ratio. Higher [[v_R]] means greater surface stiffness."
    physical_reading_rules:
      - id: vR_reading_default
        when: "true"
        status: ok
        text:
          es: "[[v_R]] indica la rapidez de propagacion de la perturbacion superficial. Un material mas rigido (mayor [[v_s]]) produce mayor [[v_R]]. El cociente [[v_R]]/[[v_s]] esta entre 0.87 y 0.96."
          en: "[[v_R]] indicates how fast the surface perturbation propagates. A stiffer material (higher [[v_s]]) produces higher [[v_R]]. The ratio [[v_R]]/[[v_s]] is between 0.87 and 0.96."
    coherence_rules:
      - id: vR_coherence_greater_vs
        when: "v_R > v_s"
        status: error
        text:
          es: "[[v_R]] mayor que [[v_s]] es fisicamente imposible. Revisar la formula de Viktorov o el valor de [[nu_poisson]]."
          en: "[[v_R]] greater than [[v_s]] is physically impossible. Check the Viktorov formula or the value of [[nu_poisson]]."
      - id: vR_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[v_R]] es coherente: menor que [[v_s]] y mayor que 0.85 veces [[v_s]]."
          en: "[[v_R]] is coherent: less than [[v_s]] and above 0.85 times [[v_s]]."
    model_validity_rules:
      - id: vR_validity_default
        when: "true"
        status: ok
        text:
          es: "Valido para semiespacio homogeneo isotropo. Si el medio es estratificado, [[v_R]] varia con la frecuencia (dispersion)."
          en: "Valid for isotropic homogeneous half-space. If the medium is stratified, [[v_R]] varies with frequency (dispersion)."
    graph_rules:
      - id: vR_graph_default
        when: "true"
        status: ok
        text:
          es: "En la curva [[v_R]]/[[v_s]] vs [[nu_poisson]], el punto debe caer sobre la curva monotona creciente entre 0.87 y 0.96."
          en: "In the [[v_R]]/[[v_s]] vs [[nu_poisson]] curve, the point should fall on the monotonically increasing curve between 0.87 and 0.96."
    likely_errors:
      - id: vR_error_default
        when: "true"
        status: ok
        text:
          es: "No confundir [[v_R]] con [[v_s]]. Si [[v_R]] supera [[v_s]], se ha invertido la formula o [[nu_poisson]] esta fuera del rango 0 a 0.5."
          en: "Do not confuse [[v_R]] with [[v_s]]. If [[v_R]] exceeds [[v_s]], the formula is inverted or [[nu_poisson]] is outside the range 0 to 0.5."
    next_step_rules:
      - id: vR_next_default
        when: "true"
        status: ok
        text:
          es: "Calcular [[lambda_R]] dividiendo [[v_R]] por la frecuencia de interes para estimar la profundidad de penetracion."
          en: "Calculate [[lambda_R]] by dividing [[v_R]] by the frequency of interest to estimate penetration depth."

  v_s:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Velocidad de onda S del medio, parametro de control de la velocidad de Rayleigh."
      en: "S-wave velocity of the medium, control parameter for Rayleigh velocity."
    summary_rules:
      - id: vs_summary_default
        when: "true"
        status: ok
        text:
          es: "[[v_s]] es la velocidad de cizalla del medio. Determina [[v_R]] a traves del cociente eta. Es cero en fluidos."
          en: "[[v_s]] is the medium shear velocity. It determines [[v_R]] through the ratio eta. It is zero in fluids."
    physical_reading_rules:
      - id: vs_reading_default
        when: "true"
        status: ok
        text:
          es: "[[v_s]] mide la rigidez de cizalla del material. Conocer [[v_s]] es el primer paso para predecir [[v_R]] porque el cociente entre ambas depende solo de [[nu_poisson]]."
          en: "[[v_s]] measures the material shear stiffness. Knowing [[v_s]] is the first step to predicting [[v_R]] because the ratio between them depends only on [[nu_poisson]]."
    coherence_rules:
      - id: vs_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[v_s]] debe ser positiva en un solido y mayor que [[v_R]]."
          en: "[[v_s]] must be positive in a solid and greater than [[v_R]]."
    model_validity_rules:
      - id: vs_validity_default
        when: "true"
        status: ok
        text:
          es: "En ensayos MASW se mide [[v_R]] para deducir [[v_s]]. La conversion asume medio homogeneo en la profundidad sondeada."
          en: "In MASW surveys [[v_R]] is measured to deduce [[v_s]]. The conversion assumes a homogeneous medium within the probed depth."
    graph_rules:
      - id: vs_graph_default
        when: "true"
        status: ok
        text:
          es: "[[v_s]] es la referencia superior en graficas de [[v_R]] vs [[nu_poisson]]; [[v_R]] nunca la alcanza."
          en: "[[v_s]] is the upper reference in [[v_R]] vs [[nu_poisson]] plots; [[v_R]] never reaches it."
    likely_errors:
      - id: vs_error_default
        when: "true"
        status: ok
        text:
          es: "Si [[v_s]] resulta menor que [[v_R]] al invertir la formula, el factor de conversion esta invertido."
          en: "If [[v_s]] turns out less than [[v_R]] when inverting the formula, the conversion factor is inverted."
    next_step_rules:
      - id: vs_next_default
        when: "true"
        status: ok
        text:
          es: "Usar [[v_s]] para clasificar el suelo segun VS30 o para calcular modulos elasticos."
          en: "Use [[v_s]] to classify soil by VS30 or to calculate elastic moduli."

  nu_poisson:
    magnitude_type: scalar_signed
    semantic_role:
      es: "Coeficiente de Poisson del medio; controla la fraccion v_R/v_s."
      en: "Poisson ratio of the medium; controls the fraction v_R/v_s."
    summary_rules:
      - id: nu_summary_default
        when: "true"
        status: ok
        text:
          es: "[[nu_poisson]] modula el cociente [[v_R]]/[[v_s]]. A mayor [[nu_poisson]], mas se acerca [[v_R]] a [[v_s]]."
          en: "[[nu_poisson]] modulates the ratio [[v_R]]/[[v_s]]. Higher [[nu_poisson]] brings [[v_R]] closer to [[v_s]]."
    physical_reading_rules:
      - id: nu_reading_default
        when: "true"
        status: ok
        text:
          es: "[[nu_poisson]] indica la compresibilidad relativa del material. Para materiales casi incompresibles (nu cercano a 0.5), [[v_R]] llega al 95 por ciento de [[v_s]]."
          en: "[[nu_poisson]] indicates the relative compressibility of the material. For nearly incompressible materials (nu close to 0.5), [[v_R]] reaches 95 percent of [[v_s]]."
    coherence_rules:
      - id: nu_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[nu_poisson]] debe estar entre 0 y 0.5 para un solido estable convencional."
          en: "[[nu_poisson]] must be between 0 and 0.5 for a conventional stable solid."
    model_validity_rules:
      - id: nu_validity_default
        when: "true"
        status: ok
        text:
          es: "Valido para materiales isotropos. Materiales auxeticos (nu negativo) requieren la ecuacion secular completa."
          en: "Valid for isotropic materials. Auxetic materials (negative nu) require the full secular equation."
    graph_rules:
      - id: nu_graph_default
        when: "true"
        status: ok
        text:
          es: "[[nu_poisson]] es el eje x en la curva maestra [[v_R]]/[[v_s]] vs nu."
          en: "[[nu_poisson]] is the x-axis in the master curve [[v_R]]/[[v_s]] vs nu."
    likely_errors:
      - id: nu_error_default
        when: "true"
        status: ok
        text:
          es: "Si [[nu_poisson]] sale mayor que 0.5 o negativo al despejar de [[v_R]] y [[v_s]], revisar los datos de entrada."
          en: "If [[nu_poisson]] exceeds 0.5 or is negative when derived from [[v_R]] and [[v_s]], check input data."
    next_step_rules:
      - id: nu_next_default
        when: "true"
        status: ok
        text:
          es: "Verificar [[nu_poisson]] con datos independientes (velocidades P y S, ensayo triaxial)."
          en: "Verify [[nu_poisson]] with independent data (P and S velocities, triaxial test)."

  A_z:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Amplitud de la onda de Rayleigh a profundidad z."
      en: "Rayleigh wave amplitude at depth z."
    summary_rules:
      - id: Az_summary_default
        when: "true"
        status: ok
        text:
          es: "[[A_z]] es la amplitud a profundidad [[z_prof]]. Siempre menor o igual que [[A_0]] (valor en superficie)."
          en: "[[A_z]] is the amplitude at depth [[z_prof]]. Always less than or equal to [[A_0]] (surface value)."
    physical_reading_rules:
      - id: Az_reading_default
        when: "true"
        status: ok
        text:
          es: "[[A_z]] cuantifica el confinamiento superficial: cuanto menor sea respecto a [[A_0]], mas confinada esta la onda. A profundidad igual a [[lambda_R]], queda menos del 30 por ciento."
          en: "[[A_z]] quantifies surface confinement: the smaller it is relative to [[A_0]], the more confined the wave. At depth equal to [[lambda_R]], less than 30 percent remains."
    coherence_rules:
      - id: Az_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[A_z]] debe ser positiva y no superar [[A_0]]. Si crece con la profundidad, hay un error de signo."
          en: "[[A_z]] must be positive and not exceed [[A_0]]. If it grows with depth, there is a sign error."
    model_validity_rules:
      - id: Az_validity_default
        when: "true"
        status: ok
        text:
          es: "Decaimiento exponencial puro valido solo en semiespacio homogeneo. En medios estratificados el perfil puede ser mas complejo."
          en: "Pure exponential decay valid only in homogeneous half-space. In stratified media the profile may be more complex."
    graph_rules:
      - id: Az_graph_default
        when: "true"
        status: ok
        text:
          es: "Curva exponencial decreciente [[A_z]] vs [[z_prof]], con marca en [[z_prof]] igual a [[lambda_R]]."
          en: "Decreasing exponential curve [[A_z]] vs [[z_prof]], with mark at [[z_prof]] equal to [[lambda_R]]."
    likely_errors:
      - id: Az_error_default
        when: "true"
        status: ok
        text:
          es: "Si [[A_z]] supera [[A_0]], el signo del exponente en la formula de decaimiento esta invertido."
          en: "If [[A_z]] exceeds [[A_0]], the exponent sign in the decay formula is inverted."
    next_step_rules:
      - id: Az_next_default
        when: "true"
        status: ok
        text:
          es: "Comparar [[A_z]] con el umbral de deteccion del sensor para determinar si la profundidad es alcanzable."
          en: "Compare [[A_z]] with the sensor detection threshold to determine if the depth is reachable."

  eta_R:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Cociente adimensional v_R/v_s; raiz de la ecuacion secular de Rayleigh."
      en: "Dimensionless ratio v_R/v_s; root of the Rayleigh secular equation."
    summary_rules:
      - id: eta_summary_default
        when: "true"
        status: ok
        text:
          es: "[[eta_R]] resume la fraccion de [[v_s]] que corresponde a [[v_R]]. Para materiales reales esta entre 0.87 y 0.96."
          en: "[[eta_R]] summarizes the fraction of [[v_s]] corresponding to [[v_R]]. For real materials it is between 0.87 and 0.96."
    physical_reading_rules:
      - id: eta_reading_default
        when: "true"
        status: ok
        text:
          es: "[[eta_R]] codifica en un solo numero el efecto del coeficiente de Poisson sobre la velocidad superficial. Conocer [[eta_R]] y [[v_s]] da directamente [[v_R]]."
          en: "[[eta_R]] encodes in a single number the effect of the Poisson ratio on surface velocity. Knowing [[eta_R]] and [[v_s]] directly gives [[v_R]]."
    coherence_rules:
      - id: eta_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[eta_R]] debe estar entre 0.87 y 0.96. Valores fuera de este rango indican error en los datos o material no convencional."
          en: "[[eta_R]] must be between 0.87 and 0.96. Values outside this range indicate data error or unconventional material."
    model_validity_rules:
      - id: eta_validity_default
        when: "true"
        status: ok
        text:
          es: "Raiz exacta de la secular para semiespacio homogeneo isotropo. Valor unico para cada [[nu_poisson]]."
          en: "Exact root of the secular equation for isotropic homogeneous half-space. Unique value for each [[nu_poisson]]."
    graph_rules:
      - id: eta_graph_default
        when: "true"
        status: ok
        text:
          es: "[[eta_R]] se representa como funcion monotona de [[nu_poisson]] o [[xi_vs_vp]]."
          en: "[[eta_R]] is plotted as a monotonic function of [[nu_poisson]] or [[xi_vs_vp]]."
    likely_errors:
      - id: eta_error_default
        when: "true"
        status: ok
        text:
          es: "Si [[eta_R]] sale mayor que 1, se ha seleccionado una raiz espuria de la ecuacion secular."
          en: "If [[eta_R]] exceeds 1, a spurious root of the secular equation has been selected."
    next_step_rules:
      - id: eta_next_default
        when: "true"
        status: ok
        text:
          es: "Multiplicar [[eta_R]] por [[v_s]] para obtener [[v_R]] en unidades fisicas."
          en: "Multiply [[eta_R]] by [[v_s]] to obtain [[v_R]] in physical units."

  alpha_R:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Coeficiente de decaimiento exponencial con la profundidad."
      en: "Exponential decay coefficient with depth."
    summary_rules:
      - id: alpha_summary_default
        when: "true"
        status: ok
        text:
          es: "[[alpha_R]] controla la rapidez con que la amplitud decae con la profundidad. Mayor [[alpha_R]] indica mayor confinamiento superficial."
          en: "[[alpha_R]] controls how quickly amplitude decays with depth. Higher [[alpha_R]] means greater surface confinement."
    physical_reading_rules:
      - id: alpha_reading_default
        when: "true"
        status: ok
        text:
          es: "[[alpha_R]] es del orden de 2 pi dividido entre [[lambda_R]]. Indica que la onda se confina en una capa de espesor comparable a la longitud de onda."
          en: "[[alpha_R]] is of the order of 2 pi divided by [[lambda_R]]. It indicates the wave is confined to a layer of thickness comparable to the wavelength."
    coherence_rules:
      - id: alpha_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[alpha_R]] debe ser positivo. Un valor negativo indicaria crecimiento de amplitud con la profundidad, lo cual es imposible."
          en: "[[alpha_R]] must be positive. A negative value would indicate amplitude growth with depth, which is impossible."
    model_validity_rules:
      - id: alpha_validity_default
        when: "true"
        status: ok
        text:
          es: "Valido para semiespacio homogeneo. En medios estratificados el decaimiento no es exponencial puro."
          en: "Valid for homogeneous half-space. In stratified media the decay is not purely exponential."
    graph_rules:
      - id: alpha_graph_default
        when: "true"
        status: ok
        text:
          es: "[[alpha_R]] define la pendiente de la curva log-lineal de amplitud vs profundidad."
          en: "[[alpha_R]] defines the slope of the log-linear amplitude vs depth curve."
    likely_errors:
      - id: alpha_error_default
        when: "true"
        status: ok
        text:
          es: "No confundir [[alpha_R]] con la atenuacion horizontal. El alumno puede creer que alpha representa perdidas por disipacion, pero aqui es puramente geometrico."
          en: "Do not confuse [[alpha_R]] with horizontal attenuation. The student may wrongly believe alpha represents dissipation losses, but here it is purely geometric."
    next_step_rules:
      - id: alpha_next_default
        when: "true"
        status: ok
        text:
          es: "Calcular [[A_z]] a la profundidad deseada usando la exponencial con [[alpha_R]]."
          en: "Calculate [[A_z]] at the desired depth using the exponential with [[alpha_R]]."

  d_pen:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Profundidad de penetracion efectiva de la onda de Rayleigh."
      en: "Effective penetration depth of the Rayleigh wave."
    summary_rules:
      - id: dpen_summary_default
        when: "true"
        status: ok
        text:
          es: "[[d_pen]] resume la profundidad hasta la que la onda de Rayleigh tiene sensibilidad significativa. Es del orden de [[lambda_R]]."
          en: "[[d_pen]] summarizes the depth to which the Rayleigh wave has significant sensitivity. It is on the order of [[lambda_R]]."
    physical_reading_rules:
      - id: dpen_reading_default
        when: "true"
        status: ok
        text:
          es: "[[d_pen]] indica la profundidad maxima de investigacion del ensayo. Porque depende de la frecuencia, se puede seleccionar la profundidad sondeada ajustando la frecuencia."
          en: "[[d_pen]] indicates the maximum investigation depth of the survey. Because it depends on frequency, the probed depth can be selected by adjusting frequency."
    coherence_rules:
      - id: dpen_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[d_pen]] debe ser positiva y del orden de [[lambda_R]]. Si difiere mucho, revisar el calculo."
          en: "[[d_pen]] must be positive and on the order of [[lambda_R]]. If it differs greatly, check the calculation."
    model_validity_rules:
      - id: dpen_validity_default
        when: "true"
        status: ok
        text:
          es: "Regla aproximada valida para semiespacio homogeneo. En medios estratificados la penetracion real puede ser mayor o menor."
          en: "Approximate rule valid for homogeneous half-space. In stratified media actual penetration may be larger or smaller."
    graph_rules:
      - id: dpen_graph_default
        when: "true"
        status: ok
        text:
          es: "[[d_pen]] se marca como linea de corte en la curva de decaimiento de amplitud."
          en: "[[d_pen]] is marked as a cutoff line in the amplitude decay curve."
    likely_errors:
      - id: dpen_error_default
        when: "true"
        status: ok
        text:
          es: "El alumno puede olvidar que [[d_pen]] cambia con la frecuencia y suponer un valor fijo para todo ensayo."
          en: "The student may forget that [[d_pen]] changes with frequency and assume a fixed value for every survey."
    next_step_rules:
      - id: dpen_next_default
        when: "true"
        status: ok
        text:
          es: "Comparar [[d_pen]] con la profundidad de interes para verificar que el ensayo tiene sensibilidad suficiente."
          en: "Compare [[d_pen]] with the depth of interest to verify the survey has sufficient sensitivity."

  lambda_R:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Longitud de onda de la onda de Rayleigh."
      en: "Wavelength of the Rayleigh wave."
    summary_rules:
      - id: lambdaR_summary_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_R]] resume la escala espacial de la onda y determina la profundidad sondeada."
          en: "[[lambda_R]] summarizes the spatial scale of the wave and determines the probed depth."
    physical_reading_rules:
      - id: lambdaR_reading_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_R]] es [[v_R]] dividida entre la frecuencia. Porque define la penetracion, frecuencias bajas sondean mas profundamente que frecuencias altas."
          en: "[[lambda_R]] is [[v_R]] divided by frequency. Because it defines penetration, low frequencies probe deeper than high frequencies."
    coherence_rules:
      - id: lambdaR_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_R]] debe ser positiva y coherente con [[v_R]] y la frecuencia usada."
          en: "[[lambda_R]] must be positive and consistent with [[v_R]] and the frequency used."
    model_validity_rules:
      - id: lambdaR_validity_default
        when: "true"
        status: ok
        text:
          es: "En medios dispersivos, [[lambda_R]] varia con la frecuencia porque [[v_R]] depende de la frecuencia."
          en: "In dispersive media, [[lambda_R]] varies with frequency because [[v_R]] depends on frequency."
    graph_rules:
      - id: lambdaR_graph_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_R]] marca la escala del eje de profundidad en graficas de decaimiento."
          en: "[[lambda_R]] marks the depth axis scale in decay plots."
    likely_errors:
      - id: lambdaR_error_default
        when: "true"
        status: ok
        text:
          es: "No confundir [[lambda_R]] con la longitud de onda P o S. El alumno puede creer que todas las longitudes de onda son iguales en un mismo medio."
          en: "Do not confuse [[lambda_R]] with P or S wavelength. The student may wrongly believe all wavelengths are equal in the same medium."
    next_step_rules:
      - id: lambdaR_next_default
        when: "true"
        status: ok
        text:
          es: "Usar [[lambda_R]] para estimar [[d_pen]] y verificar si el ensayo alcanza la profundidad deseada."
          en: "Use [[lambda_R]] to estimate [[d_pen]] and verify whether the survey reaches the desired depth."

  z_prof:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Profundidad bajo la superficie libre."
      en: "Depth below the free surface."
    summary_rules:
      - id: zprof_summary_default
        when: "true"
        status: ok
        text:
          es: "[[z_prof]] es la coordenada vertical medida desde la superficie libre hacia el interior."
          en: "[[z_prof]] is the vertical coordinate measured from the free surface inward."
    physical_reading_rules:
      - id: zprof_reading_default
        when: "true"
        status: ok
        text:
          es: "[[z_prof]] indica la posicion donde se evalua la amplitud. A mayor [[z_prof]], menor [[A_z]] porque la onda esta confinada a la superficie."
          en: "[[z_prof]] indicates the position where amplitude is evaluated. Greater [[z_prof]] means lower [[A_z]] because the wave is confined to the surface."
    coherence_rules:
      - id: zprof_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[z_prof]] debe ser positiva o cero. Valores negativos no tienen sentido fisico."
          en: "[[z_prof]] must be positive or zero. Negative values have no physical meaning."
    model_validity_rules:
      - id: zprof_validity_default
        when: "true"
        status: ok
        text:
          es: "Coordenada valida en el semiespacio. El modelo asume que el medio es homogeneo a cualquier profundidad."
          en: "Coordinate valid in the half-space. The model assumes the medium is homogeneous at any depth."
    graph_rules:
      - id: zprof_graph_default
        when: "true"
        status: ok
        text:
          es: "[[z_prof]] es el eje horizontal en la curva de decaimiento [[A_z]] vs profundidad."
          en: "[[z_prof]] is the horizontal axis in the decay curve [[A_z]] vs depth."
    likely_errors:
      - id: zprof_error_default
        when: "true"
        status: ok
        text:
          es: "El alumno puede olvidar que z es positivo hacia abajo y suponer que la convencion es hacia arriba."
          en: "The student may forget that z is positive downward and assume the convention is upward."
    next_step_rules:
      - id: zprof_next_default
        when: "true"
        status: ok
        text:
          es: "Comparar [[z_prof]] con [[d_pen]] para evaluar si la medida tiene sensibilidad a esa profundidad."
          en: "Compare [[z_prof]] with [[d_pen]] to assess whether the measurement has sensitivity at that depth."

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
