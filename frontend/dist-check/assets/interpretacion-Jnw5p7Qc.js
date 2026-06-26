const e=`version: "2.0"
id: interp-ondas-sismicas-p-y-s
leaf_id: ondas-sismicas-p-y-s

nombre:
  es: Interpretacion de ondas sismicas P y S
  en: Interpretation of P and S seismic waves

scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: ondas-mecanicas
  parent_id: ondas-en-solidos
  ruta_relativa: fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-sismicas-p-y-s

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
    - velocidad_onda_p
    - velocidad_onda_s
    - relacion_vp_vs_poisson
    - diferencia_tiempos_sismo
  magnitudes:
    - v_p
    - v_s
    - K_bulk
    - G_shear
    - rho_medio
    - ratio_vp_vs
    - nu_poisson
    - delta_t_ps
    - d_foco

global_context:
  physical_domain:
    es: "Propagacion de ondas elasticas de cuerpo (P compresionales y S de cizalla) en medios solidos isotropos e infinitos."
    en: "Propagation of elastic body waves (P compressional and S shear) in isotropic infinite solid media."
  axis_convention:
    es: "Eje x en la direccion de propagacion. Onda P: desplazamiento paralelo a x. Onda S: desplazamiento perpendicular a x."
    en: "x-axis in the propagation direction. P wave: displacement parallel to x. S wave: displacement perpendicular to x."
  standard_assumptions:
    - "Medio isotropo, homogeneo, elastico lineal"
    - "Sin atenuacion intrinseca"
    - "Longitud de onda mucho mayor que heterogeneidades"
    - "Propagacion en linea recta (medio no estratificado)"
  standard_warnings:
    - "A distancias superiores a 200 km, la hipotesis de homogeneidad falla"
    - "En fluidos G es cero y v_s se anula"
    - "No confundir velocidad en barra con velocidad P en medio infinito"

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

  v_p:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Velocidad de propagacion de la onda P (compresion) en el medio."
      en: "Propagation speed of the P (compression) wave in the medium."
    summary_rules:
      - id: vp_summary_default
        when: "true"
        status: ok
        text:
          es: "[[v_p]] resume la velocidad de la onda de compresion. Depende de los modulos elasticos K y G y de la densidad del medio. Siempre es mayor que [[v_s]]."
          en: "[[v_p]] summarizes the compression wave speed. It depends on elastic moduli K and G and the medium density. It is always greater than [[v_s]]."
    physical_reading_rules:
      - id: vp_reading_default
        when: "true"
        status: ok
        text:
          es: "[[v_p]] indica la rapidez con que un frente de compresion avanza en el medio. Un material mas rigido (alto K y G) o menos denso propaga mas rapido."
          en: "[[v_p]] indicates how fast a compression front advances in the medium. A stiffer (high K and G) or less dense material propagates faster."
    coherence_rules:
      - id: vp_coherence_high
        when: "v_p > 9000"
        status: error
        text:
          es: "[[v_p]] supera 9000 m/s, valor anomalo para corteza. Revisar [[K_bulk]] y [[G_shear]] (probablemente en unidades incorrectas)."
          en: "[[v_p]] exceeds 9000 m/s, anomalous for crust. Check [[K_bulk]] and [[G_shear]] (probably in wrong units)."
      - id: vp_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[v_p]] esta en el rango fisicamente plausible para el medio considerado."
          en: "[[v_p]] is in the physically plausible range for the considered medium."
    model_validity_rules:
      - id: vp_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo isotropo homogeneo es valido para distancias menores de 200 km y longitudes de onda mucho mayores que las heterogeneidades del medio."
          en: "The homogeneous isotropic model is valid for distances under 200 km and wavelengths much larger than medium heterogeneities."
    graph_rules:
      - id: vp_graph_default
        when: "true"
        status: ok
        text:
          es: "En las dromocronas, [[v_p]] determina la pendiente de la recta de tiempos de llegada P (pendiente 1/v_p)."
          en: "In travel-time curves, [[v_p]] determines the slope of the P arrival time line (slope 1/v_p)."
    likely_errors:
      - id: vp_error_bar
        when: "true"
        status: ok
        text:
          es: "No usar la formula de barra (raiz de E entre rho). La formula correcta para medio infinito incluye [[K_bulk]] mas 4/3 de [[G_shear]]."
          en: "Do not use the bar formula (root of E over rho). The correct formula for infinite medium includes [[K_bulk]] plus 4/3 times [[G_shear]]."
    next_step_rules:
      - id: vp_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[v_p]] calculada, obtener [[v_s]] para calcular el [[ratio_vp_vs]] y estimar [[nu_poisson]] del medio."
          en: "With [[v_p]] calculated, obtain [[v_s]] to compute [[ratio_vp_vs]] and estimate [[nu_poisson]] of the medium."

  v_s:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Velocidad de propagacion de la onda S (cizalla) en el medio."
      en: "Propagation speed of the S (shear) wave in the medium."
    summary_rules:
      - id: vs_summary_default
        when: "true"
        status: ok
        text:
          es: "[[v_s]] resume la velocidad de la onda de cizalla. Solo depende de [[G_shear]] y [[rho_medio]]. Es cero en fluidos, lo que demuestra la naturaleza solida del medio."
          en: "[[v_s]] summarizes the shear wave speed. It depends only on [[G_shear]] and [[rho_medio]]. It is zero in fluids, proving the solid nature of the medium."
    physical_reading_rules:
      - id: vs_reading_default
        when: "true"
        status: ok
        text:
          es: "[[v_s]] mide la velocidad con que una perturbacion transversal se propaga. Su existencia es prueba de rigidez de cizalla: si [[v_s]] es nula, el medio es fluido."
          en: "[[v_s]] measures the speed at which a transverse perturbation propagates. Its existence proves shear rigidity: if [[v_s]] is zero, the medium is fluid."
    coherence_rules:
      - id: vs_coherence_greater_vp
        when: "v_s > v_p"
        status: error
        text:
          es: "[[v_s]] mayor que [[v_p]] es fisicamente imposible. Revisar [[K_bulk]] y [[G_shear]]."
          en: "[[v_s]] greater than [[v_p]] is physically impossible. Check [[K_bulk]] and [[G_shear]]."
      - id: vs_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[v_s]] es coherente con el medio y es menor que [[v_p]]."
          en: "[[v_s]] is consistent with the medium and is less than [[v_p]]."
    model_validity_rules:
      - id: vs_validity_default
        when: "true"
        status: ok
        text:
          es: "Valida en solidos con [[G_shear]] distinto de cero. En fluidos [[v_s]] se anula."
          en: "Valid in solids with nonzero [[G_shear]]. In fluids [[v_s]] vanishes."
    graph_rules:
      - id: vs_graph_default
        when: "true"
        status: ok
        text:
          es: "La dromocrona S tiene mayor pendiente (1/v_s) que la P, reflejando menor velocidad."
          en: "The S travel-time curve has greater slope (1/v_s) than P, reflecting lower speed."
    likely_errors:
      - id: vs_error_default
        when: "true"
        status: ok
        text:
          es: "Confirmar que [[G_shear]] no es cero (medio solido). Si se obtiene [[v_s]] nula en un solido, [[G_shear]] tiene un error."
          en: "Confirm [[G_shear]] is not zero (solid medium). If [[v_s]] is zero in a solid, [[G_shear]] has an error."
    next_step_rules:
      - id: vs_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[v_s]] y [[v_p]], calcular [[ratio_vp_vs]] para diagnosticar litologia y saturacion."
          en: "With [[v_s]] and [[v_p]], compute [[ratio_vp_vs]] to diagnose lithology and saturation."

  K_bulk:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Modulo de compresibilidad del medio; resistencia a la compresion volumetrica."
      en: "Bulk modulus of the medium; resistance to volumetric compression."
    summary_rules:
      - id: Kb_summary_default
        when: "true"
        status: ok
        text:
          es: "[[K_bulk]] resume la rigidez volumetrica. Un valor alto indica un medio dificil de comprimir, que propaga ondas P rapidamente incluso si [[G_shear]] es bajo."
          en: "[[K_bulk]] summarizes volumetric stiffness. A high value indicates a medium hard to compress, propagating P waves quickly even if [[G_shear]] is low."
    physical_reading_rules:
      - id: Kb_reading_default
        when: "true"
        status: ok
        text:
          es: "[[K_bulk]] explica por que las ondas P existen en fluidos (donde [[G_shear]] es cero pero [[K_bulk]] no). A mayor [[K_bulk]], mayor [[v_p]]."
          en: "[[K_bulk]] explains why P waves exist in fluids (where [[G_shear]] is zero but [[K_bulk]] is not). Higher [[K_bulk]] means higher [[v_p]]."
    coherence_rules:
      - id: Kb_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[K_bulk]] debe ser positivo y del orden de GPa para materiales geologicos."
          en: "[[K_bulk]] must be positive and on the order of GPa for geological materials."
    model_validity_rules:
      - id: Kb_validity_default
        when: "true"
        status: ok
        text:
          es: "Se asume [[K_bulk]] constante e isotropo. En medios anisotropos, el tensor de rigidez es mas complejo."
          en: "[[K_bulk]] is assumed constant and isotropic. In anisotropic media, the stiffness tensor is more complex."
    graph_rules:
      - id: Kb_graph_default
        when: "true"
        status: ok
        text:
          es: "Mayor [[K_bulk]] aumenta [[v_p]] y reduce la pendiente de la dromocrona P."
          en: "Higher [[K_bulk]] increases [[v_p]] and reduces the P travel-time curve slope."
    likely_errors:
      - id: Kb_error_default
        when: "true"
        status: ok
        text:
          es: "Verificar unidades en Pa (no GPa sin convertir). Valores tipicos para corteza: 40–100 GPa."
          en: "Verify units in Pa (not GPa without converting). Typical values for crust: 40–100 GPa."
    next_step_rules:
      - id: Kb_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[K_bulk]] y [[G_shear]], calcular [[v_p]] como raiz de ([[K_bulk]] mas 4/3 [[G_shear]]) entre [[rho_medio]]."
          en: "With [[K_bulk]] and [[G_shear]], compute [[v_p]] as root of ([[K_bulk]] plus 4/3 [[G_shear]]) over [[rho_medio]]."

  G_shear:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Modulo de cizalla; cero en fluidos, positivo en solidos."
      en: "Shear modulus; zero in fluids, positive in solids."
    summary_rules:
      - id: Gs_summary_default
        when: "true"
        status: ok
        text:
          es: "[[G_shear]] resume la rigidez de cizalla del medio. Es el modulo que distingue solidos de fluidos para la propagacion de ondas S."
          en: "[[G_shear]] summarizes the shear rigidity of the medium. It is the modulus that distinguishes solids from fluids for S wave propagation."
    physical_reading_rules:
      - id: Gs_reading_default
        when: "true"
        status: ok
        text:
          es: "[[G_shear]] determina directamente [[v_s]] y contribuye tambien a [[v_p]]. Si [[G_shear]] es cero, las ondas S desaparecen."
          en: "[[G_shear]] directly determines [[v_s]] and also contributes to [[v_p]]. If [[G_shear]] is zero, S waves disappear."
    coherence_rules:
      - id: Gs_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[G_shear]] debe ser positivo en solidos y cero en fluidos. Si es negativo, hay un error."
          en: "[[G_shear]] must be positive in solids and zero in fluids. If negative, there is an error."
    model_validity_rules:
      - id: Gs_validity_default
        when: "true"
        status: ok
        text:
          es: "Se asume [[G_shear]] constante. En medios parcialmente fundidos, G es funcion de la temperatura y la fraccion de fusion."
          en: "[[G_shear]] is assumed constant. In partially molten media, G is a function of temperature and melt fraction."
    graph_rules:
      - id: Gs_graph_default
        when: "true"
        status: ok
        text:
          es: "Mayor [[G_shear]] aumenta tanto [[v_s]] como [[v_p]], reduciendo la pendiente de ambas dromocronas."
          en: "Higher [[G_shear]] increases both [[v_s]] and [[v_p]], reducing the slope of both travel-time curves."
    likely_errors:
      - id: Gs_error_default
        when: "true"
        status: ok
        text:
          es: "Confirmar que [[G_shear]] es cero para fluidos y del orden de 20–80 GPa para rocas de corteza y manto."
          en: "Confirm [[G_shear]] is zero for fluids and on the order of 20–80 GPa for crustal and mantle rocks."
    next_step_rules:
      - id: Gs_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[G_shear]] conocido, calcular [[v_s]] como raiz de [[G_shear]]/[[rho_medio]]."
          en: "With [[G_shear]] known, compute [[v_s]] as root of [[G_shear]]/[[rho_medio]]."

  rho_medio:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Densidad volumetrica del medio de propagacion."
      en: "Volumetric density of the propagation medium."
    summary_rules:
      - id: rm_summary_default
        when: "true"
        status: ok
        text:
          es: "[[rho_medio]] resume la inercia por unidad de volumen del medio. Aparece en el denominador de ambas velocidades; mayor densidad implica menor velocidad a igual rigidez."
          en: "[[rho_medio]] summarizes the inertia per unit volume of the medium. It appears in the denominator of both velocities; higher density means lower speed at equal stiffness."
    physical_reading_rules:
      - id: rm_reading_default
        when: "true"
        status: ok
        text:
          es: "[[rho_medio]] representa la masa que la onda debe acelerar. Duplicar la densidad reduce ambas velocidades por un factor raiz de 2."
          en: "[[rho_medio]] represents the mass the wave must accelerate. Doubling density reduces both velocities by a factor of root 2."
    coherence_rules:
      - id: rm_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[rho_medio]] debe ser positiva. Valores tipicos: 1000 (agua) a 13000 (nucleo) kg/m3."
          en: "[[rho_medio]] must be positive. Typical values: 1000 (water) to 13000 (core) kg/m3."
    model_validity_rules:
      - id: rm_validity_default
        when: "true"
        status: ok
        text:
          es: "Se asume [[rho_medio]] uniforme. En la Tierra real, la densidad crece con la profundidad por efecto de la presion."
          en: "[[rho_medio]] is assumed uniform. In the real Earth, density increases with depth due to pressure."
    graph_rules:
      - id: rm_graph_default
        when: "true"
        status: ok
        text:
          es: "Mayor [[rho_medio]] reduce ambas velocidades y aumenta la pendiente de las dromocronas."
          en: "Higher [[rho_medio]] reduces both velocities and increases the slope of travel-time curves."
    likely_errors:
      - id: rm_error_default
        when: "true"
        status: ok
        text:
          es: "Verificar unidades en kg/m3. Error frecuente: usar g/cm3 sin convertir (factor 1000)."
          en: "Verify units in kg/m3. Frequent error: using g/cm3 without converting (factor 1000)."
    next_step_rules:
      - id: rm_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[rho_medio]], [[K_bulk]] y [[G_shear]], calcular ambas velocidades sismicas."
          en: "With [[rho_medio]], [[K_bulk]], and [[G_shear]], compute both seismic velocities."

  ratio_vp_vs:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Cociente de velocidades P/S; indicador del coeficiente de Poisson y presencia de fluidos."
      en: "P/S velocity ratio; indicator of Poisson's ratio and fluid presence."
    summary_rules:
      - id: rpv_summary_default
        when: "true"
        status: ok
        text:
          es: "[[ratio_vp_vs]] resume la relacion entre las dos velocidades de ondas de cuerpo. Valores altos (mayor que 2) indican saturacion de fluidos; valores cercanos a 1.73 indican roca seca."
          en: "[[ratio_vp_vs]] summarizes the relationship between the two body wave velocities. High values (above 2) indicate fluid saturation; values near 1.73 indicate dry rock."
    physical_reading_rules:
      - id: rpv_reading_default
        when: "true"
        status: ok
        text:
          es: "[[ratio_vp_vs]] depende solo de [[nu_poisson]], no de la densidad. Es un diagnostico directo del tipo de material y su estado de saturacion."
          en: "[[ratio_vp_vs]] depends only on [[nu_poisson]], not on density. It is a direct diagnostic of material type and saturation state."
    coherence_rules:
      - id: rpv_coherence_low
        when: "ratio_vp_vs < 1.4"
        status: warning
        text:
          es: "[[ratio_vp_vs]] menor que 1.4 es anomalo (implicaria material auxetico). Verificar datos."
          en: "[[ratio_vp_vs]] below 1.4 is anomalous (would imply auxetic material). Verify data."
      - id: rpv_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[ratio_vp_vs]] esta en el rango esperado para materiales geologicos."
          en: "[[ratio_vp_vs]] is in the expected range for geological materials."
    model_validity_rules:
      - id: rpv_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo isotropo lineal da una relacion directa entre [[ratio_vp_vs]] y [[nu_poisson]]. En medios anisotropos la relacion es mas compleja."
          en: "The linear isotropic model gives a direct relation between [[ratio_vp_vs]] and [[nu_poisson]]. In anisotropic media the relation is more complex."
    graph_rules:
      - id: rpv_graph_default
        when: "true"
        status: ok
        text:
          es: "[[ratio_vp_vs]] se visualiza como la separacion entre las dromocronas P y S normalizadas."
          en: "[[ratio_vp_vs]] is visualized as the separation between normalized P and S travel-time curves."
    likely_errors:
      - id: rpv_error_default
        when: "true"
        status: ok
        text:
          es: "No asumir siempre raiz de 3. El valor depende del material y su saturacion."
          en: "Do not always assume root of 3. The value depends on the material and its saturation."
    next_step_rules:
      - id: rpv_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[ratio_vp_vs]], calcular [[nu_poisson]] para clasificar la litologia del medio."
          en: "With [[ratio_vp_vs]], compute [[nu_poisson]] to classify the lithology of the medium."

  nu_poisson:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Coeficiente de Poisson obtenido del cociente de velocidades sismicas."
      en: "Poisson's ratio obtained from the seismic velocity ratio."
    summary_rules:
      - id: np_summary_default
        when: "true"
        status: ok
        text:
          es: "[[nu_poisson]] resume la relacion entre deformacion lateral y axial del medio. Valores altos indican comportamiento cuasi-fluido; valores bajos indican material rigido."
          en: "[[nu_poisson]] summarizes the ratio between lateral and axial deformation of the medium. High values indicate quasi-fluid behavior; low values indicate rigid material."
    physical_reading_rules:
      - id: np_reading_default
        when: "true"
        status: ok
        text:
          es: "[[nu_poisson]] cercano a 0.5 indica un medio casi incompresible (fluido). Cercano a 0.25 indica roca cristalina seca. Valores intermedios sugieren saturacion parcial."
          en: "[[nu_poisson]] near 0.5 indicates a nearly incompressible medium (fluid). Near 0.25 indicates dry crystalline rock. Intermediate values suggest partial saturation."
    coherence_rules:
      - id: np_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[nu_poisson]] debe estar entre 0 y 0.5 para un solido termodinamicamente estable."
          en: "[[nu_poisson]] must be between 0 and 0.5 for a thermodynamically stable solid."
    model_validity_rules:
      - id: np_validity_default
        when: "true"
        status: ok
        text:
          es: "La relacion con el cociente de velocidades asume isotropia elastica lineal."
          en: "The relationship with velocity ratio assumes linear elastic isotropy."
    graph_rules:
      - id: np_graph_default
        when: "true"
        status: ok
        text:
          es: "La curva [[ratio_vp_vs]] vs [[nu_poisson]] tiene asintota vertical en nu cercano a 0.5."
          en: "The [[ratio_vp_vs]] vs [[nu_poisson]] curve has a vertical asymptote near nu of 0.5."
    likely_errors:
      - id: np_error_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[nu_poisson]] calculado no excede 0.5 ni es negativo (salvo materiales auxeticos muy especificos)."
          en: "Verify that computed [[nu_poisson]] does not exceed 0.5 or go negative (except for very specific auxetic materials)."
    next_step_rules:
      - id: np_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[nu_poisson]], clasificar el material (seco, saturado, parcialmente fundido) y decidir si el modelo isotropo es adecuado."
          en: "With [[nu_poisson]], classify the material (dry, saturated, partially molten) and decide if the isotropic model is adequate."

  delta_t_ps:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Diferencia de tiempos de llegada entre ondas P y S; base de la localizacion sismica."
      en: "Arrival time difference between P and S waves; basis of seismic location."
    summary_rules:
      - id: dt_summary_default
        when: "true"
        status: ok
        text:
          es: "[[delta_t_ps]] resume el intervalo temporal medido entre la llegada de la P y la S. Es proporcional a la distancia al foco y al factor de velocidades del medio."
          en: "[[delta_t_ps]] summarizes the measured time interval between P and S arrivals. It is proportional to the focus distance and the velocity factor of the medium."
    physical_reading_rules:
      - id: dt_reading_default
        when: "true"
        status: ok
        text:
          es: "[[delta_t_ps]] crece linealmente con [[d_foco]] en un medio homogeneo. Es la magnitud observable directamente en el sismograma."
          en: "[[delta_t_ps]] grows linearly with [[d_foco]] in a homogeneous medium. It is the directly observable magnitude on the seismogram."
    coherence_rules:
      - id: dt_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[delta_t_ps]] debe ser positivo (la P siempre llega antes). Valores mayores de 600 s implicarian distancias mayores que el diametro terrestre."
          en: "[[delta_t_ps]] must be positive (P always arrives first). Values above 600 s would imply distances larger than Earth's diameter."
    model_validity_rules:
      - id: dt_validity_default
        when: "true"
        status: ok
        text:
          es: "La relacion lineal con [[d_foco]] solo es valida para sismos locales (d menor de 200 km). Para distancias mayores se requieren dromocronas corregidas."
          en: "The linear relationship with [[d_foco]] is only valid for local earthquakes (d less than 200 km). For larger distances, corrected travel-time curves are needed."
    graph_rules:
      - id: dt_graph_default
        when: "true"
        status: ok
        text:
          es: "[[delta_t_ps]] es la separacion horizontal entre las dromocronas P y S a la distancia dada."
          en: "[[delta_t_ps]] is the horizontal separation between P and S travel-time curves at the given distance."
    likely_errors:
      - id: dt_error_default
        when: "true"
        status: ok
        text:
          es: "Verificar el orden de la resta (1/v_s menos 1/v_p, no al reves). Si sale negativo, las velocidades estan invertidas."
          en: "Verify the subtraction order (1/v_s minus 1/v_p, not reversed). If negative, velocities are inverted."
    next_step_rules:
      - id: dt_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[delta_t_ps]] medido, calcular [[d_foco]] dividiendo por el factor (1/v_s menos 1/v_p). Con tres estaciones, triangular el epicentro."
          en: "With measured [[delta_t_ps]], compute [[d_foco]] by dividing by the factor (1/v_s minus 1/v_p). With three stations, triangulate the epicenter."

  d_foco:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Distancia al foco sismico obtenida de la diferencia de tiempos P-S."
      en: "Distance to seismic focus obtained from the P-S time difference."
    summary_rules:
      - id: df_summary_default
        when: "true"
        status: ok
        text:
          es: "[[d_foco]] resume la distancia entre el hipocentro del sismo y la estacion. Se obtiene directamente de [[delta_t_ps]] dividido por el factor de velocidades."
          en: "[[d_foco]] summarizes the distance between the earthquake hypocenter and the station. It is obtained directly from [[delta_t_ps]] divided by the velocity factor."
    physical_reading_rules:
      - id: df_reading_default
        when: "true"
        status: ok
        text:
          es: "[[d_foco]] es una distancia en linea recta (3D). No confundir con distancia epicentral (proyeccion en superficie). Para sismos superficiales, ambas son similares."
          en: "[[d_foco]] is a straight-line distance (3D). Do not confuse with epicentral distance (surface projection). For shallow earthquakes, both are similar."
    coherence_rules:
      - id: df_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[d_foco]] debe ser positiva y menor que el diametro terrestre (13000 km)."
          en: "[[d_foco]] must be positive and less than Earth's diameter (13000 km)."
    model_validity_rules:
      - id: df_validity_default
        when: "true"
        status: ok
        text:
          es: "Para distancias mayores de 200 km, la estimacion lineal pierde precision y se necesitan modelos de velocidad radial."
          en: "For distances over 200 km, the linear estimate loses accuracy and radial velocity models are needed."
    graph_rules:
      - id: df_graph_default
        when: "true"
        status: ok
        text:
          es: "[[d_foco]] es el eje horizontal de las dromocronas. La separacion entre las curvas P y S crece con la distancia."
          en: "[[d_foco]] is the horizontal axis of travel-time curves. The separation between P and S curves grows with distance."
    likely_errors:
      - id: df_error_default
        when: "true"
        status: ok
        text:
          es: "Verificar unidades (metros o kilometros). Error frecuente: mezclar km con m en el calculo."
          en: "Verify units (metres or kilometres). Frequent error: mixing km with m in the calculation."
    next_step_rules:
      - id: df_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[d_foco]] de tres estaciones, triangular la posicion del epicentro e hipocentro."
          en: "With [[d_foco]] from three stations, triangulate the epicenter and hypocenter position."

cross_checks:
  - id: vp_mayor_vs
    description:
      es: "v_p debe ser siempre mayor que v_s. Si no, los modulos elasticos estan mal."
      en: "v_p must always be greater than v_s. If not, the elastic moduli are wrong."
  - id: delta_t_positivo
    description:
      es: "delta_t_ps debe ser positivo. Si es negativo, la resta de inversas esta invertida."
      en: "delta_t_ps must be positive. If negative, the inverse subtraction is inverted."

error_patterns:
  - id: vp_menor_vs
    description:
      es: "v_p menor que v_s indica modulos intercambiados o K negativo."
      en: "v_p less than v_s indicates swapped moduli or negative K."
  - id: ratio_muy_alto
    description:
      es: "ratio_vp_vs mayor que 3 sugiere medio casi fluido o datos erroneos."
      en: "ratio_vp_vs above 3 suggests nearly fluid medium or erroneous data."

graph_binding:
  enabled: true
  type: Coord
  primary_channel: dromocronas
  secondary_channel: null
  description:
    es: "Dromocronas (rectas t vs d) para ondas P y S, con pendientes 1/v_p y 1/v_s."
    en: "Travel-time curves (t vs d lines) for P and S waves, with slopes 1/v_p and 1/v_s."

mini_graph:
  enabled: true
  preferred_type: Coord
  description:
    es: "Mini-grafico con las dos dromocronas lineales P y S mostrando la separacion creciente."
    en: "Mini-graph with the two linear P and S travel-time curves showing increasing separation."

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
