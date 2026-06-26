const e=`version: "2.0"
id: interpretacion-teoria-cinetica
leaf_id: teoria-cinetica

nombre:
  es: Interpretación de la teoría cinética
  en: Kinetic theory interpretation

scope:
  area: fisica-clasica
  bloque: termodinamica
  subbloque: gases-y-modelos
  parent_id: gases-y-modelos
  ruta_relativa: fisica-clasica/termodinamica/gases-y-modelos/teoria-cinetica

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretación cinética
    en: Kinetic interpretation
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
    - velocidad_cuadratica_media
    - energia_cinetica_media
    - presion_cinetica
  magnitudes:
    - v_rms
    - T
    - m_mol
    - E_k_mol
    - k_B
    - N
    - P
    - V

global_context:
  physical_domain:
    es: "Teoría cinética del gas ideal: relación entre el movimiento molecular microscópico y las propiedades termodinámicas macroscópicas."
    en: "Kinetic theory of ideal gases: relationship between microscopic molecular motion and macroscopic thermodynamic properties."
  axis_convention:
    es: "Todas las temperaturas en kelvin; masas moleculares en kg; velocidades en m/s; presiones en Pa; volúmenes en m³."
    en: "All temperatures in kelvin; molecular masses in kg; speeds in m/s; pressures in Pa; volumes in m³."
  standard_assumptions:
    - "Gas ideal sin interacciones intermoleculares"
    - "Distribución de velocidades isotrópica y en equilibrio estadístico"
    - "Energía cinética solo translacional (tres grados de libertad)"
  standard_warnings:
    - "Verificar que T está en kelvin, no en Celsius"
    - "Usar la masa de una molécula en kg, no la masa molar en kg/mol"

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

  v_rms:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Velocidad cuadrática media de las moléculas del gas"
      en: "Root mean square speed of gas molecules"
    next_step_rules:
      - id: vrms_next_high
        when: "v_rms > 1000"
        status: ok
        text:
          es: "Con [[v_rms]] superior a 1000 m/s estás trabajando con un gas ligero o muy caliente. Relaciona este resultado con la energía cinética media usando la fórmula correspondiente."
          en: "With [[v_rms]] above 1000 m/s you are working with a light or very hot gas. Relate this result to the mean kinetic energy using the corresponding formula."
      - id: vrms_next_default
        when: "true"
        status: ok
        text:
          es: "Calcula ahora la energía cinética media [[E_k_mol]] con la misma temperatura, o compara [[v_rms]] para distintos gases manteniendo [[T]] constante."
          en: "Now calculate the mean kinetic energy [[E_k_mol]] with the same temperature, or compare [[v_rms]] for different gases keeping [[T]] constant."
    summary_rules:
      - id: vrms_summary_high
        when: "v_rms > 1500"
        status: ok
        text:
          es: "[[v_rms]] indica una agitación molecular muy intensa: las moléculas se desplazan en promedio a más de 1500 m/s. Este resultado describe un gas ligero o a temperatura elevada."
          en: "[[v_rms]] indicates very intense molecular agitation: molecules move on average at more than 1500 m/s. This result describes a light gas or one at high temperature."
      - id: vrms_summary_medium
        when: "v_rms > 300"
        status: ok
        text:
          es: "[[v_rms]] resume la agitación térmica del gas en un valor representativo: a temperatura ambiente la mayoría de los gases comunes tienen velocidades cuadráticas medias en este rango."
          en: "[[v_rms]] summarizes the thermal agitation of the gas in a representative value: at room temperature most common gases have root mean square speeds in this range."
      - id: vrms_summary_default
        when: "true"
        status: ok
        text:
          es: "[[v_rms]] indica la escala de velocidad típica de las moléculas del gas; depende directamente de [[T]] y de [[m_mol]]. Este valor resume el estado cinético del sistema."
          en: "[[v_rms]] indicates the typical speed scale of the gas molecules; it depends directly on [[T]] and [[m_mol]]. This value summarizes the kinetic state of the system."
    physical_reading_rules:
      - id: vrms_phys_high_T
        when: "T > 500"
        status: ok
        text:
          es: "A temperaturas superiores a 500 K, [[v_rms]] crece como raíz de [[T]]: duplicar la temperatura multiplica [[v_rms]] por raíz de dos, no por dos. La agitación molecular aumenta más lentamente que la temperatura."
          en: "At temperatures above 500 K, [[v_rms]] grows as the square root of [[T]]: doubling temperature multiplies [[v_rms]] by root two, not two. Molecular agitation increases more slowly than temperature."
      - id: vrms_phys_default
        when: "true"
        status: ok
        text:
          es: "[[v_rms]] es la consecuencia directa de la agitación térmica cuantificada por [[T]]: a mayor temperatura, las moléculas colisionan con mayor velocidad media y transfieren más momento a las paredes del recipiente."
          en: "[[v_rms]] is the direct consequence of thermal agitation quantified by [[T]]: at higher temperature, molecules collide with greater average speed and transfer more momentum to the container walls."
    coherence_rules:
      - id: vrms_coh_zero
        when: "v_rms <= 0"
        status: error
        text:
          es: "[[v_rms]] no puede ser nula ni negativa. Verificar que [[T]] es positiva y está en kelvin, y que [[m_mol]] es positiva."
          en: "[[v_rms]] cannot be zero or negative. Check that [[T]] is positive and in kelvin, and that [[m_mol]] is positive."
      - id: vrms_coh_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[v_rms]] es físicamente coherente: positivo y en el rango esperado para un gas bajo las condiciones indicadas."
          en: "The value of [[v_rms]] is physically coherent: positive and in the expected range for a gas under the indicated conditions."
    model_validity_rules:
      - id: vrms_model_light
        when: "v_rms > 3000"
        status: warning
        text:
          es: "Velocidades superiores a 3000 m/s corresponden a gases muy ligeros o temperaturas muy altas. Verificar que el modelo de gas ideal sigue siendo aplicable y que no hay efectos relativistas relevantes."
          en: "Speeds above 3000 m/s correspond to very light gases or very high temperatures. Verify that the ideal gas model remains applicable and that no relevant relativistic effects arise."
      - id: vrms_model_default
        when: "true"
        status: ok
        text:
          es: "El modelo cinético es válido cuando las moléculas están suficientemente separadas y la energía cinética domina sobre las interacciones intermoleculares. Para gases comunes a presiones moderadas este rango es amplio."
          en: "The kinetic model is valid when molecules are sufficiently separated and kinetic energy dominates over intermolecular interactions. For common gases at moderate pressures this range is wide."
    graph_rules:
      - id: vrms_graph_default
        when: "true"
        status: ok
        text:
          es: "En el gráfico de distribución de velocidades, [[v_rms]] aparece a la derecha de la velocidad más probable; su posición en el eje horizontal indica la escala energética del gas."
          en: "In the speed distribution graph, [[v_rms]] appears to the right of the most probable speed; its position on the horizontal axis indicates the energetic scale of the gas."
    likely_errors:
      - id: vrms_error_celsius
        when: "T < 50"
        status: error
        text:
          es: "Temperatura muy baja: posible uso de grados Celsius en lugar de kelvin. Sumar 273.15 a la temperatura en Celsius para obtener kelvin antes de calcular [[v_rms]]."
          en: "Very low temperature: possible use of Celsius instead of kelvin. Add 273.15 to the Celsius temperature to obtain kelvin before calculating [[v_rms]]."
      - id: vrms_error_default
        when: "true"
        status: ok
        text:
          es: "Error frecuente: usar la masa molar (kg/mol) en lugar de la masa por molécula (kg). Dividir la masa molar entre el número de Avogadro (6.022×10²³) para obtener [[m_mol]]."
          en: "Frequent error: using molar mass (kg/mol) instead of mass per molecule (kg). Divide the molar mass by Avogadro's number (6.022×10²³) to obtain [[m_mol]]."

  T:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Temperatura absoluta del gas obtenida de la velocidad cuadrática media"
      en: "Absolute temperature of the gas obtained from root mean square speed"
    next_step_rules:
      - id: T_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[T]] determinado, calcula la energía cinética media [[E_k_mol]] y la presión [[P]] del gas para obtener una imagen completa del estado cinético del sistema."
          en: "With [[T]] determined, calculate the mean kinetic energy [[E_k_mol]] and gas pressure [[P]] for a complete picture of the system's kinetic state."
    summary_rules:
      - id: T_summary_high
        when: "T > 600"
        status: ok
        text:
          es: "[[T]] indica una temperatura alta: el gas está en un estado de agitación molecular intensa. A estas temperaturas los efectos no ideales pueden empezar a ser relevantes."
          en: "[[T]] indicates a high temperature: the gas is in a state of intense molecular agitation. At these temperatures non-ideal effects may start to become relevant."
      - id: T_summary_default
        when: "true"
        status: ok
        text:
          es: "[[T]] resume la temperatura absoluta del gas deducida del movimiento molecular; describe de forma macroscópica el estado cinético medio de las moléculas."
          en: "[[T]] summarizes the absolute temperature of the gas deduced from molecular motion; it describes macroscopically the average kinetic state of the molecules."
    physical_reading_rules:
      - id: T_phys_default
        when: "true"
        status: ok
        text:
          es: "En la teoría cinética, [[T]] no es una magnitud independiente: depende directamente de la energía cinética media molecular. Cada kelvin equivale a un incremento de 3/2 k_B julios de energía cinética por molécula."
          en: "In kinetic theory, [[T]] is not an independent quantity: it depends directly on mean molecular kinetic energy. Each kelvin corresponds to an increase of 3/2 k_B joules of kinetic energy per molecule."
    coherence_rules:
      - id: T_coh_negative
        when: "T <= 0"
        status: error
        text:
          es: "[[T]] no puede ser nula ni negativa en kelvin. Un valor negativo indica casi con certeza que se introdujo la temperatura en Celsius sin convertir."
          en: "[[T]] cannot be zero or negative in kelvin. A negative value almost certainly indicates the temperature was entered in Celsius without converting."
      - id: T_coh_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[T]] es físicamente coherente: positivo y en el rango de temperaturas termodinámicamente accesibles para un gas real."
          en: "The value of [[T]] is physically coherent: positive and in the range of thermodynamically accessible temperatures for a real gas."
    model_validity_rules:
      - id: T_model_default
        when: "true"
        status: ok
        text:
          es: "El modelo cinético traslacional es válido cuando la temperatura es suficientemente alta para que los estados cuánticos de traslación estén densamente poblados, lo que ocurre para todos los gases en condiciones normales."
          en: "The translational kinetic model is valid when temperature is high enough for translational quantum states to be densely populated, which occurs for all gases under normal conditions."
    graph_rules:
      - id: T_graph_default
        when: "true"
        status: ok
        text:
          es: "En el gráfico de distribución de velocidades frente a temperatura, [[T]] controla el ancho y el desplazamiento de la curva hacia velocidades mayores."
          en: "In the speed distribution vs. temperature graph, [[T]] controls the width and shift of the curve toward higher speeds."
    likely_errors:
      - id: T_error_celsius
        when: "T < 200"
        status: warning
        text:
          es: "Temperatura inferior a 200 K: inusual para gases en condiciones de laboratorio estándar. Verificar que no es un valor en Celsius que debería sumarse 273.15."
          en: "Temperature below 200 K: unusual for gases under standard laboratory conditions. Check that it is not a Celsius value that should have 273.15 added."
      - id: T_error_default
        when: "true"
        status: ok
        text:
          es: "Verificar siempre que [[T]] está en kelvin. La confusión Celsius/kelvin es el error más frecuente en cálculos de velocidad cuadrática media."
          en: "Always verify that [[T]] is in kelvin. The Celsius/kelvin confusion is the most frequent error in root mean square speed calculations."

  m_mol:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Masa de una molécula del gas deducida de la velocidad cuadrática media"
      en: "Mass of a single gas molecule deduced from root mean square speed"
    next_step_rules:
      - id: mmol_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[m_mol]] identificado, puedes determinar de qué gas se trata comparando con masas moleculares tabuladas, o usar el valor para calcular la presión cinética."
          en: "With [[m_mol]] identified, you can determine what gas it is by comparing with tabulated molecular masses, or use the value to calculate kinetic pressure."
    summary_rules:
      - id: mmol_summary_default
        when: "true"
        status: ok
        text:
          es: "[[m_mol]] indica la masa de una molécula individual del gas; este valor describe la especie molecular presente y determina directamente la velocidad de agitación a cada temperatura."
          en: "[[m_mol]] indicates the mass of an individual gas molecule; this value describes the molecular species present and directly determines the agitation speed at each temperature."
    physical_reading_rules:
      - id: mmol_phys_default
        when: "true"
        status: ok
        text:
          es: "La masa molecular [[m_mol]] controla inversamente la velocidad cuadrática media: un gas con moléculas más ligeras presenta mayor [[v_rms]] a la misma temperatura, explicando por qué el hidrógeno escapa antes de la atmósfera terrestre."
          en: "Molecular mass [[m_mol]] inversely controls root mean square speed: a gas with lighter molecules shows greater [[v_rms]] at the same temperature, explaining why hydrogen escapes from Earth's atmosphere more readily."
    coherence_rules:
      - id: mmol_coh_zero
        when: "m_mol <= 0"
        status: error
        text:
          es: "[[m_mol]] no puede ser nula ni negativa. Verificar que se usa la masa de una molécula en kg, no la masa molar."
          en: "[[m_mol]] cannot be zero or negative. Verify that the mass of one molecule in kg is used, not the molar mass."
      - id: mmol_coh_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[m_mol]] es físicamente coherente para una masa molecular individual en kilogramos."
          en: "The value of [[m_mol]] is physically coherent for an individual molecular mass in kilograms."
    model_validity_rules:
      - id: mmol_model_default
        when: "true"
        status: ok
        text:
          es: "El modelo cinético asume que [[m_mol]] es constante y que las moléculas son puntuales o esféricas. Para moléculas poliatómicas complejas, la masa sigue siendo válida pero los grados de libertad rotacionales añaden correcciones."
          en: "The kinetic model assumes [[m_mol]] is constant and molecules are point-like or spherical. For complex polyatomic molecules, the mass remains valid but rotational degrees of freedom add corrections."
    graph_rules:
      - id: mmol_graph_default
        when: "true"
        status: ok
        text:
          es: "En un gráfico de [[v_rms]] frente a [[T]], la masa molecular [[m_mol]] determina la pendiente de la curva: gases más pesados tienen curvas más planas."
          en: "In a [[v_rms]] vs. [[T]] graph, molecular mass [[m_mol]] determines the curve slope: heavier gases have flatter curves."
    likely_errors:
      - id: mmol_error_molar
        when: "m_mol > 0.1"
        status: error
        text:
          es: "[[m_mol]] con valor mayor a 0.1 kg sugiere que se usó la masa molar en kg/mol en lugar de la masa de una molécula. Dividir entre 6.022×10²³ para obtener la masa molecular en kg."
          en: "[[m_mol]] with value greater than 0.1 kg suggests molar mass in kg/mol was used instead of molecular mass. Divide by 6.022×10²³ to obtain molecular mass in kg."
      - id: mmol_error_default
        when: "true"
        status: ok
        text:
          es: "Confirmar que [[m_mol]] es la masa de una sola molécula (entre 10⁻²⁷ y 10⁻²⁵ kg para gases comunes), no la masa molar ni la masa de una muestra."
          en: "Confirm that [[m_mol]] is the mass of a single molecule (between 10⁻²⁷ and 10⁻²⁵ kg for common gases), not the molar mass or sample mass."

  E_k_mol:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Energía cinética media translacional de una molécula del gas"
      en: "Mean translational kinetic energy of a single gas molecule"
    next_step_rules:
      - id: Ekm_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[E_k_mol]] calculado, compara la energía cinética media con la energía de los enlaces químicos o con la energía térmica del sistema completo multiplicando por el número de moléculas."
          en: "With [[E_k_mol]] calculated, compare the mean kinetic energy with chemical bond energies or with the total thermal energy of the system by multiplying by the number of molecules."
    summary_rules:
      - id: Ekm_summary_default
        when: "true"
        status: ok
        text:
          es: "[[E_k_mol]] indica cuántos julios de energía cinética posee en promedio cada molécula del gas a la temperatura [[T]]; resume el contenido energético microscópico del sistema. Depende linealmente de [[T]]."
          en: "[[E_k_mol]] indicates how many joules of kinetic energy each gas molecule possesses on average at temperature [[T]]; it summarizes the microscopic energy content of the system. It depends linearly on [[T]]."
    physical_reading_rules:
      - id: Ekm_phys_default
        when: "true"
        status: ok
        text:
          es: "[[E_k_mol]] es la traducción microscópica de la temperatura: cada kelvin equivale a añadir 3/2 k_B joules de energía cinética por molécula. Esta relación lineal —frente a la raíz cuadrada de [[v_rms]]— hace de [[E_k_mol]] la magnitud más directamente ligada a [[T]]."
          en: "[[E_k_mol]] is the microscopic translation of temperature: each kelvin adds 3/2 k_B joules of kinetic energy per molecule. This linear relationship —versus the square root dependence of [[v_rms]]— makes [[E_k_mol]] the quantity most directly linked to [[T]]."
    coherence_rules:
      - id: Ekm_coh_zero
        when: "E_k_mol <= 0"
        status: error
        text:
          es: "[[E_k_mol]] no puede ser nula ni negativa. Verificar que [[T]] está en kelvin con valor positivo."
          en: "[[E_k_mol]] cannot be zero or negative. Verify that [[T]] is in kelvin with a positive value."
      - id: Ekm_coh_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[E_k_mol]] es físicamente coherente: positivo y proporcional a [[T]] mediante el factor 3/2 k_B."
          en: "The value of [[E_k_mol]] is physically coherent: positive and proportional to [[T]] by the factor 3/2 k_B."
    model_validity_rules:
      - id: Ekm_model_default
        when: "true"
        status: ok
        text:
          es: "La fórmula de [[E_k_mol]] solo incluye los tres grados de libertad translacionales. Para gases diatómicos y poliatómicos a temperatura alta, los grados rotacionales y vibracionales añaden contribuciones adicionales no recogidas en esta expresión."
          en: "The [[E_k_mol]] formula only includes the three translational degrees of freedom. For diatomic and polyatomic gases at high temperature, rotational and vibrational degrees of freedom add contributions not captured in this expression."
    graph_rules:
      - id: Ekm_graph_default
        when: "true"
        status: ok
        text:
          es: "En un gráfico de [[E_k_mol]] frente a [[T]], la relación es lineal con pendiente 3/2 k_B. Una desviación de esta linealidad señalaría efectos no ideales o activación de grados de libertad adicionales."
          en: "In an [[E_k_mol]] vs. [[T]] graph, the relationship is linear with slope 3/2 k_B. A deviation from this linearity would signal non-ideal effects or activation of additional degrees of freedom."
    likely_errors:
      - id: Ekm_error_celsius
        when: "T < 50"
        status: error
        text:
          es: "Si [[T]] es muy baja (posible entrada en Celsius), [[E_k_mol]] resultará también muy baja y poco representativa. Convertir la temperatura a kelvin antes del cálculo."
          en: "If [[T]] is very low (possible Celsius input), [[E_k_mol]] will also be very low and unrepresentative. Convert temperature to kelvin before calculating."
      - id: Ekm_error_default
        when: "true"
        status: ok
        text:
          es: "Error frecuente: incluir grados de libertad rotacionales en la fórmula de la energía cinética translacional. La expresión 3/2 k_B T solo cuenta traslación; la rotación añade 1/2 k_B T por cada grado de libertad rotacional activo."
          en: "Frequent error: including rotational degrees of freedom in the translational kinetic energy formula. The expression 3/2 k_B T only counts translation; rotation adds 1/2 k_B T for each active rotational degree of freedom."

  P:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Presión del gas ideal calculada desde el modelo cinético microscópico"
      en: "Ideal gas pressure calculated from the microscopic kinetic model"
    next_step_rules:
      - id: P_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[P]] calculado, verifica la coherencia con la ecuación de estado del gas ideal usando [[N]], [[k_B]] y [[T]], o analiza cómo cambiaría [[P]] al variar [[V]] o [[T]]."
          en: "With [[P]] calculated, verify consistency with the ideal gas equation of state using [[N]], [[k_B]] and [[T]], or analyze how [[P]] would change when varying [[V]] or [[T]]."
    summary_rules:
      - id: P_summary_atm
        when: "P > 50000"
        status: ok
        text:
          es: "[[P]] indica una presión significativa del gas. Este resultado resume el efecto colectivo de [[N]] colisiones moleculares por unidad de tiempo y área; depende del contenido cinético del gas y de su densidad molecular."
          en: "[[P]] indicates a significant gas pressure. This result summarizes the collective effect of [[N]] molecular collisions per unit time and area; it depends on the gas's kinetic content and molecular density."
      - id: P_summary_default
        when: "true"
        status: ok
        text:
          es: "[[P]] resume en un valor macroscópico el bombardeo estadístico de las paredes por [[N]] moléculas con velocidad cuadrática media [[v_rms]]. Esta magnitud emergente describe el estado cinético del gas de forma observable."
          en: "[[P]] summarizes in one macroscopic value the statistical bombardment of walls by [[N]] molecules with root mean square speed [[v_rms]]. This emergent quantity describes the kinetic state of the gas in an observable way."
    physical_reading_rules:
      - id: P_phys_default
        when: "true"
        status: ok
        text:
          es: "La presión [[P]] no es una propiedad de moléculas individuales sino un promedio estadístico. Aumenta cuando [[N]] crece (más partículas), cuando [[V]] disminuye (mayor densidad molecular) o cuando [[T]] sube (mayor velocidad de colisión)."
          en: "Pressure [[P]] is not a property of individual molecules but a statistical average. It increases when [[N]] grows (more particles), when [[V]] decreases (higher molecular density), or when [[T]] rises (higher collision speed)."
    coherence_rules:
      - id: P_coh_zero
        when: "P <= 0"
        status: error
        text:
          es: "[[P]] no puede ser nula ni negativa en un gas ideal. Verificar que [[N]], [[V]] y [[v_rms]] son todos positivos."
          en: "[[P]] cannot be zero or negative in an ideal gas. Verify that [[N]], [[V]] and [[v_rms]] are all positive."
      - id: P_coh_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[P]] es físicamente coherente con la presión esperada para un gas ideal bajo las condiciones indicadas."
          en: "The value of [[P]] is physically coherent with the pressure expected for an ideal gas under the indicated conditions."
    model_validity_rules:
      - id: P_model_high
        when: "P > 10000000"
        status: warning
        text:
          es: "Presión superior a 10 MPa: a presiones muy altas el volumen propio de las moléculas y las interacciones intermoleculares se vuelven relevantes, y el modelo de gas ideal pierde precisión."
          en: "Pressure above 10 MPa: at very high pressures the molecular own volume and intermolecular interactions become relevant, and the ideal gas model loses accuracy."
      - id: P_model_default
        when: "true"
        status: ok
        text:
          es: "El modelo cinético es preciso cuando la distancia media entre moléculas es mucho mayor que el tamaño molecular, lo que se cumple para gases a presión inferior a varios MPa."
          en: "The kinetic model is accurate when the mean distance between molecules is much greater than the molecular size, which holds for gases at pressures below several MPa."
    graph_rules:
      - id: P_graph_default
        when: "true"
        status: ok
        text:
          es: "En un diagrama presión-volumen, [[P]] decrece con [[V]] siguiendo una hipérbola a temperatura constante. Este comportamiento es la representación gráfica directa de la ley de Boyle derivada del modelo cinético."
          en: "In a pressure-volume diagram, [[P]] decreases with [[V]] following a hyperbola at constant temperature. This behavior is the direct graphical representation of Boyle's law derived from the kinetic model."
    likely_errors:
      - id: P_error_units_V
        when: "P < 100"
        status: warning
        text:
          es: "Presión muy baja: posible error de unidades en [[V]]. Verificar que el volumen está en m³ (no en litros ni cm³) al calcular [[P]] en pascales."
          en: "Very low pressure: possible unit error in [[V]]. Verify that volume is in m³ (not liters or cm³) when calculating [[P]] in pascals."
      - id: P_error_default
        when: "true"
        status: ok
        text:
          es: "Error frecuente: confundir [[N]] (número de moléculas) con el número de moles. Para convertir moles a moléculas, multiplicar por 6.022×10²³."
          en: "Frequent error: confusing [[N]] (number of molecules) with the number of moles. To convert moles to molecules, multiply by 6.022×10²³."

  V:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Volumen del gas deducido de la presión cinética"
      en: "Gas volume deduced from kinetic pressure"
    next_step_rules:
      - id: V_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[V]] determinado, analiza cómo cambiaría [[P]] si se modifica [[T]] a volumen constante, o calcula la densidad numérica de moléculas dividiendo [[N]] entre [[V]]."
          en: "With [[V]] determined, analyze how [[P]] would change if [[T]] is modified at constant volume, or calculate the molecular number density by dividing [[N]] by [[V]]."
    summary_rules:
      - id: V_summary_default
        when: "true"
        status: ok
        text:
          es: "[[V]] indica el volumen que debe ocupar el gas para que la presión cinética de [[N]] moléculas con velocidad [[v_rms]] iguale la presión indicada. Depende inversamente de [[P]]."
          en: "[[V]] indicates the volume the gas must occupy for the kinetic pressure of [[N]] molecules with speed [[v_rms]] to equal the stated pressure. It depends inversely on [[P]]."
    physical_reading_rules:
      - id: V_phys_default
        when: "true"
        status: ok
        text:
          es: "En la teoría cinética, [[V]] actúa como el espacio disponible para el movimiento molecular. Comprimir el gas —reducir [[V]]— aumenta la densidad de moléculas y eleva la frecuencia de colisiones con las paredes, lo que se traduce en mayor [[P]]."
          en: "In kinetic theory, [[V]] acts as the available space for molecular motion. Compressing the gas —reducing [[V]]— increases molecular density and raises the collision frequency with the walls, translating into higher [[P]]."
    coherence_rules:
      - id: V_coh_zero
        when: "V <= 0"
        status: error
        text:
          es: "[[V]] no puede ser nulo ni negativo. Verificar los valores de [[P]], [[N]] y [[v_rms]] usados en el cálculo."
          en: "[[V]] cannot be zero or negative. Verify the values of [[P]], [[N]] and [[v_rms]] used in the calculation."
      - id: V_coh_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[V]] es físicamente coherente para el volumen de un recipiente que contiene gas ideal bajo las condiciones indicadas."
          en: "The value of [[V]] is physically coherent for the volume of a container holding ideal gas under the indicated conditions."
    model_validity_rules:
      - id: V_model_default
        when: "true"
        status: ok
        text:
          es: "El modelo cinético requiere que [[V]] sea mucho mayor que el volumen propio de las moléculas. Para gases reales a presión ordinaria, el volumen molecular representa menos del 0.1% del volumen del recipiente."
          en: "The kinetic model requires [[V]] to be much greater than the molecular own volume. For real gases at ordinary pressure, the molecular volume represents less than 0.1% of the container volume."
    graph_rules:
      - id: V_graph_default
        when: "true"
        status: ok
        text:
          es: "En el gráfico P-V, [[V]] es la variable del eje horizontal. El estado del gas se representa como un punto cuya coordenada en ese eje refleja el espacio disponible para las moléculas."
          en: "In the P-V graph, [[V]] is the variable on the horizontal axis. The gas state is represented as a point whose coordinate on that axis reflects the available space for molecules."
    likely_errors:
      - id: V_error_liters
        when: "V > 1"
        status: warning
        text:
          es: "Volumen superior a 1 m³: inusual para recipientes de laboratorio. Verificar que el volumen está en m³ y no en litros (1 litro es 10⁻³ m³)."
          en: "Volume above 1 m³: unusual for laboratory containers. Verify that volume is in m³ and not in liters (1 liter is 10⁻³ m³)."
      - id: V_error_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[V]] está en m³. Usar litros sin convertir produce presiones en pascales erróneas por un factor de mil."
          en: "Verify that [[V]] is in m³. Using liters without converting produces pressure values in pascals off by a factor of one thousand."

  N:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Número de moléculas del gas deducido de la presión cinética"
      en: "Number of gas molecules deduced from kinetic pressure"
    next_step_rules:
      - id: N_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[N]] calculado, conviértelo a moles dividiendo entre 6.022×10²³ para conectar con la química y con la ecuación de estado macroscópica del gas ideal."
          en: "With [[N]] calculated, convert to moles by dividing by 6.022×10²³ to connect with chemistry and with the macroscopic ideal gas equation of state."
    summary_rules:
      - id: N_summary_default
        when: "true"
        status: ok
        text:
          es: "[[N]] indica el número total de moléculas presentes en el gas bajo las condiciones indicadas. Describe la extensión del sistema y determina la contribución colectiva a la presión macroscópica."
          en: "[[N]] indicates the total number of molecules present in the gas under the indicated conditions. It describes the extent of the system and determines the collective contribution to macroscopic pressure."
    physical_reading_rules:
      - id: N_phys_default
        when: "true"
        status: ok
        text:
          es: "[[N]] es la magnitud que conecta la escala molecular con la macroscópica: la enorme magnitud de [[N]] en condiciones normales explica por qué el comportamiento colectivo estadístico produce propiedades macroscópicas suaves y bien definidas."
          en: "[[N]] is the quantity that connects the molecular with the macroscopic scale: the enormous magnitude of [[N]] under normal conditions explains why collective statistical behavior produces smooth and well-defined macroscopic properties."
    coherence_rules:
      - id: N_coh_zero
        when: "N <= 0"
        status: error
        text:
          es: "[[N]] no puede ser nulo ni negativo. Verificar que todos los valores de entrada son positivos y están en unidades correctas."
          en: "[[N]] cannot be zero or negative. Verify that all input values are positive and in correct units."
      - id: N_coh_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[N]] es físicamente coherente. Para referencia, un mol contiene 6.022×10²³ moléculas."
          en: "The value of [[N]] is physically coherent. For reference, one mole contains 6.022×10²³ molecules."
    model_validity_rules:
      - id: N_model_default
        when: "true"
        status: ok
        text:
          es: "El modelo cinético estadístico requiere un número de moléculas suficientemente grande (del orden de 10¹⁰ o más) para que las fluctuaciones sean despreciables y las magnitudes macroscópicas sean bien definidas."
          en: "The statistical kinetic model requires a sufficiently large number of molecules (on the order of 10¹⁰ or more) for fluctuations to be negligible and macroscopic quantities to be well defined."
    graph_rules:
      - id: N_graph_default
        when: "true"
        status: ok
        text:
          es: "[[N]] escala linealmente con la presión en el modelo cinético: duplicar el número de moléculas a [[V]] y [[T]] constantes duplica [[P]]. Esta proporcionalidad se refleja directamente en la escala vertical del gráfico P-V."
          en: "[[N]] scales linearly with pressure in the kinetic model: doubling the number of molecules at constant [[V]] and [[T]] doubles [[P]]. This proportionality is directly reflected in the vertical scale of the P-V graph."
    likely_errors:
      - id: N_error_moles
        when: "N < 1000"
        status: warning
        text:
          es: "Número de moléculas menor a 1000: posible confusión con el número de moles. Para convertir moles a moléculas, multiplicar por 6.022×10²³."
          en: "Number of molecules less than 1000: possible confusion with number of moles. To convert moles to molecules, multiply by 6.022×10²³."
      - id: N_error_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[N]] es el número bruto de moléculas, no el número de moles. Un mol de gas contiene aproximadamente 6×10²³ moléculas."
          en: "Verify that [[N]] is the raw molecule count, not the number of moles. One mole of gas contains approximately 6×10²³ molecules."

cross_checks:
  - id: cross_vrms_Ekm_T
    description:
      es: "Verificar coherencia entre v_rms, E_k_mol y T"
      en: "Verify consistency between v_rms, E_k_mol and T"
    condition: "abs(E_k_mol - 1.5 * k_B * T) < 1e-23"
    status_if_fail: warning
    message:
      es: "Los valores de [[E_k_mol]], [[k_B]] y [[T]] no son mutuamente coherentes. Revisar que los cálculos usan las mismas condiciones de temperatura."
      en: "The values of [[E_k_mol]], [[k_B]] and [[T]] are not mutually consistent. Check that calculations use the same temperature conditions."

error_patterns:
  - id: celsius_kelvin
    description:
      es: "Temperatura en Celsius en lugar de kelvin"
      en: "Temperature in Celsius instead of kelvin"
    detect_when: "T < 100"
    message:
      es: "Temperatura sospechosamente baja. Probable uso de Celsius en lugar de kelvin."
      en: "Suspiciously low temperature. Probable use of Celsius instead of kelvin."
  - id: molar_mass_instead_molecular
    description:
      es: "Uso de masa molar en lugar de masa molecular"
      en: "Use of molar mass instead of molecular mass"
    detect_when: "m_mol > 0.01"
    message:
      es: "Masa molecular sospechosamente grande. Probable uso de masa molar (kg/mol) en lugar de masa de una molécula (kg)."
      en: "Suspiciously large molecular mass. Probable use of molar mass (kg/mol) instead of molecular mass (kg)."

graph_binding:
  enabled: true
  preferred_type: Coord
  channels:
    - eje_x_temperatura
    - eje_y_vrms
    - eje_y_energia_cinetica
    - eje_y_presion

mini_graph:
  enabled: true
  preferred_type: Coord
  trigger_on: v_rms

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
