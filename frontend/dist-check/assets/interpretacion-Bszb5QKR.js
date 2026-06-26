const e=`version: "v5"
id: interpretacion_cambio_velocidad
leaf_id: cambio-de-velocidad

nombre:
  es: Interpretacion del cambio de velocidad
  en: Change in speed interpretation

scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: fenomenos-ondulatorios
  parent_id: refraccion
  ruta_relativa: fisica-clasica/ondas/fenomenos-ondulatorios/refraccion/cambio-de-velocidad

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    calculator_title:
      es: Calculadora de velocidad en medio
      en: Medium speed calculator
    result_title:
      es: Resultado del calculo
      en: Calculation result
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_messages: 3
    truncate_at: 200

dependencies:
  formulas:
    - velocidad_medio
    - indice_refraccion
    - longitud_onda_medio
    - velocidad_onda_frecuencia
  magnitudes:
    - c_vacio
    - v_medio
    - n_indice
    - lambda_vacio
    - lambda_medio
    - frecuencia_onda

global_context:
  physical_domain:
    es: Propagacion de ondas electromagneticas en medios materiales transparentes
    en: Propagation of electromagnetic waves in transparent material media
  axis_convention:
    es: Velocidades positivas indican propagacion en la direccion de avance de la onda
    en: Positive velocities indicate propagation in the direction of wave advance
  standard_assumptions:
    - El medio es homogeneo e isotropo
    - La onda es electromagnetica (luz)
    - No hay absorcion significativa
    - El medio es lineal y no dispersivo
  standard_warnings:
    - La frecuencia se mantiene constante, no la longitud de onda
    - El indice puede variar con la temperatura

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
  v_medio:
    magnitude_type: velocity
    semantic_role:
      es: Velocidad de propagacion reducida dentro del material, determinada por el indice de refraccion.
      en: Reduced propagation speed inside the material, determined by the refractive index.
    next_step_rules:
      - id: vm_next_compare
        when: "true"
        status: ok
        text:
          es: "Compara [[v_medio]] con otras velocidades de medios tipicos (agua, vidrio) para contextualizar el resultado."
          en: "Compare [[v_medio]] with typical medium speeds (water, glass) to contextualize the result."
    summary_rules:
      - id: vm_summary_range
        when: "v_medio < 1e8"
        status: warning
        text:
          es: "[[v_medio]] indica una velocidad muy baja, tipica de materiales de alto indice como diamante o ciertos vidrios especiales."
          en: "[[v_medio]] indicates a very low speed, typical of high-index materials like diamond or special glasses."
      - id: vm_summary_typical
        when: "v_medio >= 1e8 && v_medio < 2.5e8"
        status: ok
        text:
          es: "[[v_medio]] describe la velocidad de propagacion en el medio, reducida respecto al vacio por el factor [[n_indice]]. Este resultado indica un medio material transparente comun."
          en: "[[v_medio]] describes the propagation speed in the medium, reduced from vacuum by factor [[n_indice]]. This result indicates a common transparent material medium."
      - id: vm_summary_vacuum
        when: "v_medio >= 2.9e8"
        status: warning
        text:
          es: "[[v_medio]] esta muy cerca de c. Verifica si el medio es aire (n ~ 1.0003) o si hay un error en el calculo."
          en: "[[v_medio]] is very close to c. Check if the medium is air (n ~ 1.0003) or if there is a calculation error."
    physical_reading_rules:
      - id: vm_reading_slowdown
        when: "n_indice > 1.5"
        status: ok
        text:
          es: "La velocidad se ha reducido significativamente respecto al vacio. El medio es opticamente denso, lo que aumenta el tiempo de transito y los efectos de refraccion."
          en: "Speed has been significantly reduced from vacuum. The medium is optically dense, increasing transit time and refraction effects."
      - id: vm_reading_moderate
        when: "n_indice > 1.1 && n_indice <= 1.5"
        status: ok
        text:
          es: "La reduccion de velocidad es moderada, tipica de liquidos como agua o aceites opticos. La luz tarda mas en atravesar el medio pero la refraccion no es extrema."
          en: "Speed reduction is moderate, typical of liquids like water or optical oils. Light takes longer to cross the medium but refraction is not extreme."
      - id: vm_reading_default
        when: "true"
        status: ok
        text:
          es: "[[v_medio]] representa la velocidad efectiva de la onda en el medio material, siempre menor que c debido a la interaccion con los atomos del material."
          en: "[[v_medio]] represents the effective wave speed in the material medium, always less than c due to interaction with material atoms."
    coherence_rules:
      - id: vm_coherence_positive
        when: "v_medio <= 0"
        status: error
        text:
          es: "La velocidad debe ser positiva. Revisa los valores de entrada."
          en: "Velocity must be positive. Check input values."
      - id: vm_coherence_less_c
        when: "v_medio > c_vacio"
        status: error
        text:
          es: "Error: la velocidad en el medio excede c. Esto viola la fisica moderna. Revisa el indice de refraccion."
          en: "Error: medium speed exceeds c. This violates modern physics. Check the refractive index."
      - id: vm_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[v_medio]] es coherente con un indice de [[n_indice]], dentro del rango fisicamente permitido."
          en: "[[v_medio]] is coherent with an index of [[n_indice]], within physically allowed range."
    model_validity_rules:
      - id: mv_validity_high_n
        when: "n_indice > 2.5"
        status: warning
        text:
          es: "Indices muy altos pueden indicar materiales exoticos o condiciones especiales. El modelo de indice constante puede no aplicarse."
          en: "Very high indices may indicate exotic materials or special conditions. The constant index model may not apply."
      - id: mv_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo aplica para medios lineales homogeneos. La velocidad calculada es valida para ondas electromagneticas en el rango optico tipico."
          en: "The model applies for linear homogeneous media. The calculated speed is valid for electromagnetic waves in the typical optical range."
    graph_rules:
      - id: gr_graph_velocity
        when: "true"
        status: ok
        text:
          es: "En el grafico de velocidad vs indice, este punto cae sobre la curva hiperbolica caracteristica, confirmando la relacion v = c/n."
          en: "In the velocity vs index graph, this point falls on the characteristic hyperbolic curve, confirming the v = c/n relationship."
    likely_errors:
      - id: le_error_confuse_c_v
        when: "true"
        status: warning
        text:
          es: "Error comun: confundir la velocidad en el medio [[v_medio]] con la velocidad en vacio c. Recuerda que la luz se ralentiza en los materiales."
          en: "Common mistake: confusing medium speed [[v_medio]] with vacuum speed c. Remember that light slows down in materials."
      - id: le_error_inverse_n
        when: "true"
        status: warning
        text:
          es: "Error tipico: pensar que n mayor significa velocidad mayor. Es al contrario: n mayor implica mayor ralentizacion."
          en: "Typical error: thinking higher n means higher speed. It is the opposite: higher n implies more slowing."

  n_indice:
    magnitude_type: refractive_index
    semantic_role:
      es: Indice de refraccion adimensional que cuantifica el factor de ralentizacion de la luz en el medio.
      en: Dimensionless refractive index that quantifies the light slowing factor in the medium.
    next_step_rules:
      - id: ni_next_snell
        when: "true"
        status: ok
        text:
          es: "Con [[n_indice]] conocido, puedes aplicar la ley de Snell para calcular angulos de refraccion."
          en: "With [[n_indice]] known, you can apply Snell's law to calculate refraction angles."
    summary_rules:
      - id: ni_summary_air
        when: "n_indice >= 1.0 && n_indice < 1.05"
        status: ok
        text:
          es: "[[n_indice]] describe un medio muy similar al vacio, tipico de gases a baja presion. La velocidad apenas se reduce."
          en: "[[n_indice]] describes a medium very similar to vacuum, typical of low-pressure gases. Speed is barely reduced."
      - id: ni_summary_liquid
        when: "n_indice >= 1.3 && n_indice < 1.5"
        status: ok
        text:
          es: "[[n_indice]] indica un medio liquido comun como agua o aceites. La luz se propaga a unos tres cuartos de su velocidad en vacio."
          en: "[[n_indice]] indicates a common liquid medium like water or oils. Light propagates at about three-quarters of its vacuum speed."
      - id: ni_summary_glass
        when: "n_indice >= 1.5 && n_indice < 1.9"
        status: ok
        text:
          es: "[[n_indice]] caracteriza vidrios opticos tipicos. El material es moderadamente refringente con buena transparencia."
          en: "[[n_indice]] characterizes typical optical glasses. The material is moderately refractive with good transparency."
      - id: ni_summary_high
        when: "n_indice >= 1.9"
        status: warning
        text:
          es: "[[n_indice]] es alto, tipico de materiales muy densos opticos como diamante o algunos cristales especiales."
          en: "[[n_indice]] is high, typical of very dense optical materials like diamond or special crystals."
      - id: ni_summary_default
        when: "true"
        status: ok
        text:
          es: "El indice [[n_indice]] describe el factor de ralentizacion de la luz. Valores mayores indican medios mas refringentes."
          en: "The index [[n_indice]] describes the light slowing factor. Higher values indicate more refractive media."
    physical_reading_rules:
      - id: ni_reading_factor
        when: "true"
        status: ok
        text:
          es: "El indice [[n_indice]] significa que la luz viaja [[n_indice]] veces mas lento que en el vacio. Este factor determina la refraccion en interfaces."
          en: "The index [[n_indice]] means light travels [[n_indice]] times slower than in vacuum. This factor determines refraction at interfaces."
    coherence_rules:
      - id: ni_coherence_less_one
        when: "n_indice < 1"
        status: error
        text:
          es: "El indice no puede ser menor que 1. Esto violaria la definicion fundamental n = c/v."
          en: "Index cannot be less than 1. This would violate the fundamental definition n = c/v."
      - id: ni_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[n_indice]] es un valor coherente dentro del rango fisicamente posible para medios transparentes."
          en: "[[n_indice]] is a coherent value within the physically possible range for transparent media."
    model_validity_rules:
      - id: ni_validity_range
        when: "n_indice > 3.0"
        status: warning
        text:
          es: "Indices superiores a 3 son raros en medios transparentes visibles. Verifica si el material es correcto o si hay dispersion extrema."
          en: "Indices above 3 are rare in visible transparent media. Verify if the material is correct or if there is extreme dispersion."
      - id: ni_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de indice constante aplica bien para este valor en condiciones opticas estandar."
          en: "The constant index model applies well for this value under standard optical conditions."
    graph_rules:
      - id: ni_graph_bar
        when: "true"
        status: ok
        text:
          es: "En el grafico comparativo de materiales, [[n_indice]] se posiciona entre los valores tipicos conocidos."
          en: "In the comparative materials graph, [[n_indice]] positions among typical known values."
    likely_errors:
      - id: ni_error_less_one
        when: "true"
        status: warning
        text:
          es: "Error clasico: obtener n < 1. Recuerda que n = c/v y v <= c siempre, por tanto n >= 1 siempre."
          en: "Classic error: obtaining n < 1. Remember that n = c/v and v <= c always, therefore n >= 1 always."

  lambda_medio:
    magnitude_type: wavelength
    semantic_role:
      es: Longitud de onda reducida dentro del material, mantenida la frecuencia constante.
      en: Reduced wavelength inside the material, while frequency remains constant.
    next_step_rules:
      - id: lm_next_interference
        when: "true"
        status: ok
        text:
          es: "Con [[lambda_medio]] conocida, puedes analizar condiciones de interferencia en capas delgadas de este material."
          en: "With [[lambda_medio]] known, you can analyze interference conditions in thin films of this material."
    summary_rules:
      - id: lm_summary_shortened
        when: "true"
        status: ok
        text:
          es: "[[lambda_medio]] indica la escala espacial de la onda dentro del medio, reducida por el factor [[n_indice]] respecto al vacio. La frecuencia se mantiene constante."
          en: "[[lambda_medio]] indicates the spatial scale of the wave inside the medium, reduced by factor [[n_indice]] from vacuum. Frequency remains constant."
    physical_reading_rules:
      - id: lm_reading_scale
        when: "true"
        status: ok
        text:
          es: "La longitud de onda en el medio determina la escala de fenomenos de interferencia y difraccion dentro del material. Es crucial para disenar recubrimientos antirreflectantes."
          en: "Wavelength in the medium determines the scale of interference and diffraction phenomena inside the material. It is crucial for designing anti-reflective coatings."
    coherence_rules:
      - id: lm_coherence_positive
        when: "lambda_medio <= 0"
        status: error
        text:
          es: "La longitud de onda debe ser positiva. Revisa los valores de entrada."
          en: "Wavelength must be positive. Check input values."
      - id: lm_coherence_check
        when: "abs(lambda_medio * n_indice - lambda_vacio) > 0.01 * lambda_vacio"
        status: warning
        text:
          es: "Verificacion: lambda_medio * n deberia igualar lambda_vacio. Revisa los calculos."
          en: "Check: lambda_medio * n should equal lambda_vacio. Review calculations."
      - id: lm_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_medio]] es coherente con la longitud de onda en vacio [[lambda_vacio]] y el indice [[n_indice]]."
          en: "[[lambda_medio]] is coherent with vacuum wavelength [[lambda_vacio]] and index [[n_indice]]."
    model_validity_rules:
      - id: lm_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de longitud de onda reducida aplica para medios no dispersivos donde el indice es independiente de la frecuencia."
          en: "The reduced wavelength model applies for non-dispersive media where index is independent of frequency."
    graph_rules:
      - id: lm_graph_curve
        when: "true"
        status: ok
        text:
          es: "En el grafico de longitud de onda vs indice, este punto cae sobre la curva hiperbolica decreciente."
          en: "In the wavelength vs index graph, this point falls on the decreasing hyperbolic curve."
    likely_errors:
      - id: lm_error_frequency_change
        when: "true"
        status: warning
        text:
          es: "Error comun: pensar que la frecuencia cambia al entrar en el medio. Es la longitud de onda la que cambia, no la frecuencia."
          en: "Common mistake: thinking frequency changes when entering the medium. It is the wavelength that changes, not the frequency."

  frecuencia_onda:
    magnitude_type: frequency
    semantic_role:
      es: Frecuencia de la onda determinada por la fuente emisora, invariante al cambiar de medio.
      en: Wave frequency determined by the emitting source, invariant when changing media.
    next_step_rules:
      - id: fo_next_energy
        when: "true"
        status: ok
        text:
          es: "Con [[frecuencia_onda]] conocida, puedes calcular la energia de los fotones usando E = h·f."
          en: "With [[frecuencia_onda]] known, you can calculate photon energy using E = h·f."
    summary_rules:
      - id: fo_summary_constant
        when: "true"
        status: ok
        text:
          es: "[[frecuencia_onda]] se mantiene constante cuando la onda pasa de un medio a otro. Es la longitud de onda y la velocidad las que cambian."
          en: "[[frecuencia_onda]] remains constant when the wave passes from one medium to another. It is wavelength and speed that change."
    physical_reading_rules:
      - id: fo_reading_source
        when: "true"
        status: ok
        text:
          es: "La frecuencia esta determinada por la fuente emisora. El color de la luz no cambia al entrar en un medio diferente."
          en: "The frequency is determined by the emitting source. The color of light does not change when entering a different medium."
    coherence_rules:
      - id: fo_coherence_positive
        when: "frecuencia_onda <= 0"
        status: error
        text:
          es: "La frecuencia debe ser positiva. Revisa los valores de entrada."
          en: "Frequency must be positive. Check input values."
      - id: fo_coherence_check
        when: "abs(v_medio / lambda_medio - frecuencia_onda) > 0.01 * frecuencia_onda"
        status: warning
        text:
          es: "Verificacion: v/lambda deberia igualar la frecuencia. Revisa los calculos."
          en: "Check: v/lambda should equal frequency. Review calculations."
      - id: fo_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[frecuencia_onda]] es coherente con [[v_medio]] y [[lambda_medio]] mediante la relacion v = λ·f."
          en: "[[frecuencia_onda]] is coherent with [[v_medio]] and [[lambda_medio]] through the relationship v = λ·f."
    model_validity_rules:
      - id: fo_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo aplica para ondas armonicas. La frecuencia constante es valida para medios estacionarios."
          en: "The model applies for harmonic waves. Constant frequency is valid for stationary media."
    graph_rules:
      - id: fo_graph_relation
        when: "true"
        status: ok
        text:
          es: "En el diagrama de relacion onda, la frecuencia conecta velocidad y longitud de onda."
          en: "In the wave relation diagram, frequency connects velocity and wavelength."
    likely_errors:
      - id: fo_error_frequency_changes
        when: "true"
        status: warning
        text:
          es: "Error comun: pensar que la frecuencia cambia al entrar en un medio. La frecuencia se conserva; cambian la velocidad y la longitud de onda."
          en: "Common mistake: thinking frequency changes when entering a medium. Frequency is conserved; velocity and wavelength change."

  c_vacio:
    magnitude_type: velocity
    semantic_role:
      es: Velocidad de referencia en vacio usada para comparar la ralentizacion dentro del medio.
      en: Vacuum reference speed used to compare the slowdown inside the medium.
    next_step_rules:
      - id: cv_next_index
        when: "true"
        status: ok
        text:
          es: "Con [[c_vacio]] como referencia, compara [[v_medio]] para interpretar cuanto ralentiza el material."
          en: "With [[c_vacio]] as reference, compare [[v_medio]] to interpret how much the material slows the wave."
    summary_rules:
      - id: cv_summary_reference
        when: "true"
        status: ok
        text:
          es: "[[c_vacio]] indica la velocidad limite de referencia; el resultado depende de [[v_medio]] y [[n_indice]] al reconstruir la escala de vacio."
          en: "[[c_vacio]] indicates the reference limiting speed; the result depends on [[v_medio]] and [[n_indice]] when reconstructing the vacuum scale."
    physical_reading_rules:
      - id: cv_reading_reference
        when: "true"
        status: ok
        text:
          es: "[[c_vacio]] no describe el movimiento dentro del material, sino la referencia externa frente a la que se mide la reduccion."
          en: "[[c_vacio]] does not describe motion inside the material, but the external reference against which the reduction is measured."
    coherence_rules:
      - id: cv_coherence_positive
        when: "c_vacio <= 0"
        status: error
        text:
          es: "[[c_vacio]] debe ser positiva. Revisa la unidad de velocidad usada en el calculo."
          en: "[[c_vacio]] must be positive. Check the velocity unit used in the calculation."
      - id: cv_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[c_vacio]] es coherente si resulta mayor que [[v_medio]] para un [[n_indice]] mayor que uno."
          en: "[[c_vacio]] is coherent if it is greater than [[v_medio]] for a [[n_indice]] greater than one."
    model_validity_rules:
      - id: cv_validity_default
        when: "true"
        status: ok
        text:
          es: "La lectura de [[c_vacio]] aplica como constante de referencia para luz en medios transparentes no relativistas."
          en: "The reading of [[c_vacio]] applies as a reference constant for light in transparent non-relativistic media."
    graph_rules:
      - id: cv_graph_reference
        when: "true"
        status: ok
        text:
          es: "En el grafico, [[c_vacio]] actua como techo de comparacion: las velocidades materiales quedan por debajo."
          en: "In the graph, [[c_vacio]] acts as the comparison ceiling: material speeds remain below it."
    likely_errors:
      - id: cv_error_medium_speed
        when: "true"
        status: warning
        text:
          es: "Error comun: usar [[c_vacio]] como si fuera la velocidad dentro del material. En el medio debe usarse [[v_medio]]."
          en: "Common mistake: using [[c_vacio]] as if it were the speed inside the material. In the medium, use [[v_medio]]."

  lambda_vacio:
    magnitude_type: wavelength
    semantic_role:
      es: Longitud de onda de referencia en vacio antes de entrar en el material.
      en: Vacuum reference wavelength before entering the material.
    next_step_rules:
      - id: lv_next_medium
        when: "true"
        status: ok
        text:
          es: "Con [[lambda_vacio]] conocida, calcula [[lambda_medio]] para leer interferencia o difraccion dentro del material."
          en: "With [[lambda_vacio]] known, calculate [[lambda_medio]] to read interference or diffraction inside the material."
    summary_rules:
      - id: lv_summary_reference
        when: "true"
        status: ok
        text:
          es: "[[lambda_vacio]] describe la escala espacial fuera del medio; al entrar en el material disminuye segun [[n_indice]]."
          en: "[[lambda_vacio]] describes the spatial scale outside the medium; inside the material it decreases according to [[n_indice]]."
    physical_reading_rules:
      - id: lv_reading_scale
        when: "true"
        status: ok
        text:
          es: "[[lambda_vacio]] permite comparar la onda antes y despues del cambio de medio sin cambiar la frecuencia de la fuente."
          en: "[[lambda_vacio]] lets the wave be compared before and after the medium change without changing the source frequency."
    coherence_rules:
      - id: lv_coherence_positive
        when: "lambda_vacio <= 0"
        status: error
        text:
          es: "[[lambda_vacio]] debe ser positiva. Una longitud de onda nula no representa una onda fisica."
          en: "[[lambda_vacio]] must be positive. A zero wavelength does not represent a physical wave."
      - id: lv_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[lambda_vacio]] es coherente si supera a [[lambda_medio]] cuando [[n_indice]] es mayor que uno."
          en: "[[lambda_vacio]] is coherent if it exceeds [[lambda_medio]] when [[n_indice]] is greater than one."
    model_validity_rules:
      - id: lv_validity_default
        when: "true"
        status: ok
        text:
          es: "El uso de [[lambda_vacio]] como referencia aplica cuando el indice usado corresponde a esa misma frecuencia."
          en: "Using [[lambda_vacio]] as reference applies when the index used corresponds to that same frequency."
    graph_rules:
      - id: lv_graph_reference
        when: "true"
        status: ok
        text:
          es: "En el grafico de longitudes, [[lambda_vacio]] funciona como valor inicial antes de la compresion espacial en el medio."
          en: "In the wavelength graph, [[lambda_vacio]] acts as the initial value before spatial compression in the medium."
    likely_errors:
      - id: lv_error_frequency
        when: "true"
        status: warning
        text:
          es: "Error comun: cambiar [[lambda_vacio]] y [[frecuencia_onda]] a la vez. La frecuencia se conserva; cambia la longitud de onda en el medio."
          en: "Common mistake: changing [[lambda_vacio]] and [[frecuencia_onda]] at the same time. Frequency is conserved; medium wavelength changes."

cross_checks:
  - id: check_velocity_index
    description:
      es: Verificar que v_medio * n_indice = c_vacio
      en: Verify that v_medio * n_indice = c_vacio
    formula: "abs(v_medio * n_indice - c_vacio) < 1"

error_patterns:
  - id: err_velocity_equals_c
    pattern: "v_medio >= 0.99 * c_vacio"
    message:
      es: La velocidad es casi igual a c. Verifica si el indice es correcto.
      en: Speed is almost equal to c. Check if the index is correct.
  - id: err_index_less_one
    pattern: "n_indice < 1"
    message:
      es: El indice de refraccion no puede ser menor que 1.
      en: Refractive index cannot be less than 1.

graph_binding:
  enabled: true
  channels:
    - velocity_comparison
    - index_slider
    - medium_selector

mini_graph:
  enabled: true
  preferred_type: Coord

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
    priority:
      - summary
      - likely_errors
  extended_mode:
    show_all: true
`;export{e as default};
