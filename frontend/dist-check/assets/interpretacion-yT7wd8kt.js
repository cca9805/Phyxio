const e=`version: v5
id: interpretacion_energia_y_momento_de_la_onda_em
leaf_id: energia-y-momento-de-la-onda-em
nombre:
  es: Interpretacion de energia y momento de la onda EM
  en: EM wave energy and momentum interpretation
scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: ondas-electromagneticas
  parent_id: ondas-electromagneticas
  ruta_relativa: fisica-clasica/electromagnetismo/ondas-electromagneticas/energia-y-momento-de-la-onda-em
ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Lectura energetica
    en: Energy reading
  priority_order: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
  inline_limits:
    max_items: 2
dependencies:
  formulas: [relacion_campos_rms, densidad_energia_rms, intensidad_media_onda, densidad_momento_onda, presion_radiacion_absorbente, potencia_incidente_area]
  magnitudes: [E0, E, B0, epsilon0, c, u_EM, S_med, g_EM, p_rad, A, P_rad]
global_context:
  physical_domain:
    es: Transporte de energia y momento por una onda electromagnetica plana.
    en: Energy and momentum transport by a plane electromagnetic wave.
  axis_convention:
    es: La direccion positiva es la direccion de propagacion del frente de onda.
    en: The positive direction is the wavefront propagation direction.
  standard_assumptions:
    - onda plana
    - propagacion en vacio
    - valores eficaces de campo
    - incidencia normal si se interpreta presion
  standard_warnings:
    - distinguir intensidad local de potencia total
    - no duplicar presion sin reflexion
    - usar area efectiva y no area geometrica arbitraria
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
      es: Lectura grafica
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
  E0:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: campo electrico eficaz que fija la energia de la onda
      en: rms electric field setting wave energy
    summary_rules:
      - id: e0_summary_default
        when: "true"
        status: ok
        text:
          es: "[[E0]] indica la escala electrica eficaz y describe cuanta energia puede almacenar el campo."
          en: "[[E0]] indicates the rms electric scale and describes how much energy the field can store."
    physical_reading_rules:
      - id: e0_reading_default
        when: "true"
        status: ok
        text:
          es: "Si [[E0]] aumenta, la densidad [[u_EM]] aumenta con fuerza porque el campo entra al cuadrado."
          en: "If [[E0]] increases, [[u_EM]] increases strongly because the field enters quadratically."
    coherence_rules:
      - id: e0_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[E0]] es un modulo eficaz no negativo; un valor negativo indicaria una lectura de signo indebida."
          en: "[[E0]] is a nonnegative rms magnitude; a negative value would indicate an improper sign reading."
    model_validity_rules:
      - id: e0_validity_default
        when: "true"
        status: ok
        text:
          es: "La lectura de [[E0]] supone un promedio temporal estable de una onda aproximadamente armonica."
          en: "The [[E0]] reading assumes a stable time average for an approximately harmonic wave."
    graph_rules:
      - id: e0_graph_default
        when: "true"
        status: ok
        text:
          es: "En el esquema Svg, [[E0]] escala el campo electrico que alimenta la lectura energetica."
          en: "In the Svg diagram, [[E0]] scales the electric field feeding the energy reading."
    likely_errors:
      - id: e0_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: mezclar valor eficaz y amplitud maxima sin revisar el promedio energetico."
          en: "Typical error: mixing rms value and peak amplitude without checking the energy average."
    next_step_rules:
      - id: e0_next_default
        when: "true"
        status: ok
        text:
          es: "Usa [[E0]] para obtener [[u_EM]] y despues interpretar [[S_med]]."
          en: "Use [[E0]] to obtain [[u_EM]] and then interpret [[S_med]]."
  B0:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: campo magnetico eficaz acoplado al campo electrico
      en: rms magnetic field coupled to the electric field
    summary_rules:
      - id: b0_summary_default
        when: "true"
        status: ok
        text:
          es: "[[B0]] indica la escala magnetica acoplada y describe la parte magnetica de la onda."
          en: "[[B0]] indicates the coupled magnetic scale and describes the magnetic part of the wave."
    physical_reading_rules:
      - id: b0_reading_default
        when: "true"
        status: ok
        text:
          es: "[[B0]] depende de [[E0]] y [[c]], por eso no debe elegirse como dato independiente en el vacio."
          en: "[[B0]] depends on [[E0]] and [[c]], so it should not be chosen independently in vacuum."
    coherence_rules:
      - id: b0_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[B0]] debe ser no negativo porque representa modulo eficaz del campo magnetico."
          en: "[[B0]] must be nonnegative because it represents rms magnetic-field magnitude."
    model_validity_rules:
      - id: b0_validity_default
        when: "true"
        status: ok
        text:
          es: "La relacion entre [[B0]] y [[E0]] vale para onda plana transversal en el vacio."
          en: "The relation between [[B0]] and [[E0]] holds for a transverse plane wave in vacuum."
    graph_rules:
      - id: b0_graph_default
        when: "true"
        status: ok
        text:
          es: "En el Svg, [[B0]] escala el campo magnetico perpendicular al campo electrico."
          en: "In the Svg, [[B0]] scales the magnetic field perpendicular to the electric field."
    likely_errors:
      - id: b0_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: esperar que [[B0]] y [[E0]] tengan valores numericos parecidos en SI."
          en: "Typical error: expecting [[B0]] and [[E0]] to have similar SI numerical values."
    next_step_rules:
      - id: b0_next_default
        when: "true"
        status: ok
        text:
          es: "Compara [[B0]] con [[E0]] para revisar el acoplamiento de campos antes de calcular energia."
          en: "Compare [[B0]] with [[E0]] to check field coupling before computing energy."
  epsilon0:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: constante de escala energetica del campo electrico en el vacio
      en: vacuum electric-field energy scale constant
    summary_rules:
      - id: eps0_summary_default
        when: "true"
        status: ok
        text:
          es: "[[epsilon0]] indica la escala constitutiva y describe como el vacio almacena energia electrica."
          en: "[[epsilon0]] indicates the constitutive scale and describes how vacuum stores electric energy."
    physical_reading_rules:
      - id: eps0_reading_default
        when: "true"
        status: ok
        text:
          es: "[[epsilon0]] convierte el cuadrado de [[E0]] en densidad de energia [[u_EM]]."
          en: "[[epsilon0]] converts the square of [[E0]] into energy density [[u_EM]]."
    coherence_rules:
      - id: eps0_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[epsilon0]] debe ser positiva para que la energia electromagnetica tenga escala fisica."
          en: "[[epsilon0]] must be positive for electromagnetic energy to have a physical scale."
    model_validity_rules:
      - id: eps0_validity_default
        when: "true"
        status: ok
        text:
          es: "Usar [[epsilon0]] supone vacio; en un medio material se necesita un modelo extendido."
          en: "Using [[epsilon0]] assumes vacuum; in a material medium an extended model is needed."
    graph_rules:
      - id: eps0_graph_default
        when: "true"
        status: ok
        text:
          es: "[[epsilon0]] no es un control visual directo, pero fija la conversion de campo a energia."
          en: "[[epsilon0]] is not a direct visual control, but it fixes field-to-energy conversion."
    likely_errors:
      - id: eps0_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: tratar [[epsilon0]] como permitividad ajustable de cualquier material."
          en: "Typical error: treating [[epsilon0]] as an adjustable permittivity for any material."
    next_step_rules:
      - id: eps0_next_default
        when: "true"
        status: ok
        text:
          es: "Revisa si el problema es de vacio antes de usar [[epsilon0]] en [[u_EM]]."
          en: "Check whether the problem is in vacuum before using [[epsilon0]] in [[u_EM]]."
  c:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: velocidad que convierte densidad en flujo y energia en momento
      en: speed converting density into flux and energy into momentum
    summary_rules:
      - id: c_summary_default
        when: "true"
        status: ok
        text:
          es: "[[c]] indica la escala de propagacion y describe el enlace entre energia, intensidad y momento."
          en: "[[c]] indicates the propagation scale and describes the link between energy, intensity, and momentum."
    physical_reading_rules:
      - id: c_reading_default
        when: "true"
        status: ok
        text:
          es: "[[c]] multiplica [[u_EM]] para obtener [[S_med]] y divide energia para leer momento o presion."
          en: "[[c]] multiplies [[u_EM]] to obtain [[S_med]] and divides energy to read momentum or pressure."
    coherence_rules:
      - id: c_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[c]] debe ser positiva; si no lo es, la propagacion del modelo queda invalidada."
          en: "[[c]] must be positive; otherwise the model propagation is invalid."
    model_validity_rules:
      - id: c_validity_default
        when: "true"
        status: ok
        text:
          es: "La lectura con [[c]] corresponde al vacio; medios dispersivos cambian la conversion efectiva."
          en: "The reading with [[c]] corresponds to vacuum; dispersive media change the effective conversion."
    graph_rules:
      - id: c_graph_default
        when: "true"
        status: ok
        text:
          es: "En el Coord, [[c]] fija la pendiente entre [[u_EM]] y [[S_med]]."
          en: "In the Coord graph, [[c]] fixes the slope between [[u_EM]] and [[S_med]]."
    likely_errors:
      - id: c_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: olvidar dividir por [[c]] al pasar de intensidad a presion."
          en: "Typical error: forgetting to divide by [[c]] when moving from intensity to pressure."
    next_step_rules:
      - id: c_next_default
        when: "true"
        status: ok
        text:
          es: "Usa [[c]] como control dimensional al pasar entre [[u_EM]], [[S_med]], [[g_EM]] y [[p_rad]]."
          en: "Use [[c]] as a dimensional control when moving between [[u_EM]], [[S_med]], [[g_EM]], and [[p_rad]]."
  u_EM:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: energia media almacenada por volumen en la onda
      en: average energy stored per volume in the wave
    summary_rules:
      - id: u_summary_default
        when: "true"
        status: ok
        text:
          es: "[[u_EM]] indica energia por volumen y resume cuanta energia contiene localmente el campo."
          en: "[[u_EM]] indicates energy per volume and summarizes how much energy the field contains locally."
    physical_reading_rules:
      - id: u_reading_default
        when: "true"
        status: ok
        text:
          es: "Mayor [[u_EM]] significa mas energia disponible para convertirse en flujo [[S_med]]."
          en: "Larger [[u_EM]] means more energy available to become flux [[S_med]]."
    coherence_rules:
      - id: u_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[u_EM]] no puede ser negativa porque representa energia media almacenada."
          en: "[[u_EM]] cannot be negative because it represents stored average energy."
    model_validity_rules:
      - id: u_validity_default
        when: "true"
        status: ok
        text:
          es: "La lectura de [[u_EM]] supone campo eficaz y onda plana; pulsos o medios requieren cuidado."
          en: "The [[u_EM]] reading assumes rms field and plane wave; pulses or media require care."
    graph_rules:
      - id: u_graph_default
        when: "true"
        status: ok
        text:
          es: "[[u_EM]] aparece como eje horizontal del grafico de energia frente a intensidad."
          en: "[[u_EM]] appears as the horizontal axis of the energy-versus-intensity graph."
    likely_errors:
      - id: u_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: confundir [[u_EM]] con energia total de un pulso finito."
          en: "Typical error: confusing [[u_EM]] with total energy of a finite pulse."
    next_step_rules:
      - id: u_next_default
        when: "true"
        status: ok
        text:
          es: "Multiplica conceptualmente [[u_EM]] por la propagacion para interpretar [[S_med]]."
          en: "Conceptually combine [[u_EM]] with propagation to interpret [[S_med]]."
  S_med:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: intensidad media que organiza el transporte energetico
      en: average intensity organizing energy transport
    summary_rules:
      - id: s_summary_default
        when: "true"
        status: ok
        text:
          es: "[[S_med]] indica potencia por area y domina la lectura energetica observable de la onda."
          en: "[[S_med]] indicates power per area and dominates the observable energy reading of the wave."
    physical_reading_rules:
      - id: s_reading_default
        when: "true"
        status: ok
        text:
          es: "[[S_med]] aumenta cuando aumenta [[u_EM]], y por eso controla potencia capturada y presion."
          en: "[[S_med]] increases when [[u_EM]] increases, so it controls captured power and pressure."
    coherence_rules:
      - id: s_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[S_med]] debe ser no negativa al leerse como modulo medio del flujo."
          en: "[[S_med]] must be nonnegative when read as average flux magnitude."
    model_validity_rules:
      - id: s_validity_default
        when: "true"
        status: ok
        text:
          es: "[[S_med]] representa un promedio estable; variaciones espaciales fuertes rompen la lectura local simple."
          en: "[[S_med]] represents a stable average; strong spatial variations break the simple local reading."
    graph_rules:
      - id: s_graph_default
        when: "true"
        status: ok
        text:
          es: "En el Coord, [[S_med]] es la magnitud estrella y responde linealmente a [[u_EM]]."
          en: "In the Coord graph, [[S_med]] is the star magnitude and responds linearly to [[u_EM]]."
    likely_errors:
      - id: s_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: leer [[S_med]] como energia total en vez de potencia por area."
          en: "Typical error: reading [[S_med]] as total energy instead of power per area."
    next_step_rules:
      - id: s_next_default
        when: "true"
        status: ok
        text:
          es: "Desde [[S_med]], decide si el problema pide [[p_rad]] local o [[P_rad]] total."
          en: "From [[S_med]], decide whether the problem asks for local [[p_rad]] or total [[P_rad]]."
  g_EM:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: momento electromagnetico por unidad de volumen
      en: electromagnetic momentum per unit volume
    summary_rules:
      - id: g_summary_default
        when: "true"
        status: ok
        text:
          es: "[[g_EM]] indica momento por volumen y resume que la onda transporta momento aunque no tenga masa."
          en: "[[g_EM]] indicates momentum per volume and summarizes that the wave carries momentum without rest mass."
    physical_reading_rules:
      - id: g_reading_default
        when: "true"
        status: ok
        text:
          es: "[[g_EM]] depende de [[u_EM]] y conecta la energia local con el empuje de radiacion."
          en: "[[g_EM]] depends on [[u_EM]] and connects local energy with radiation push."
    coherence_rules:
      - id: g_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[g_EM]] debe ser no negativa como modulo en la direccion de propagacion."
          en: "[[g_EM]] must be nonnegative as a magnitude along propagation."
    model_validity_rules:
      - id: g_validity_default
        when: "true"
        status: ok
        text:
          es: "La lectura de [[g_EM]] supone radiacion libre; medios materiales pueden repartir momento con la materia."
          en: "The [[g_EM]] reading assumes free radiation; material media may share momentum with matter."
    graph_rules:
      - id: g_graph_default
        when: "true"
        status: ok
        text:
          es: "[[g_EM]] aparece como lectura secundaria asociada al mismo flujo que produce [[S_med]]."
          en: "[[g_EM]] appears as a secondary reading associated with the same flux producing [[S_med]]."
    likely_errors:
      - id: g_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: creer que una onda sin masa no puede transportar momento."
          en: "Typical error: believing a massless wave cannot transport momentum."
    next_step_rules:
      - id: g_next_default
        when: "true"
        status: ok
        text:
          es: "Relaciona [[g_EM]] con [[p_rad]] si la onda interactua con una superficie."
          en: "Relate [[g_EM]] to [[p_rad]] if the wave interacts with a surface."
  p_rad:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: presion mecanica producida por absorcion de radiacion
      en: mechanical pressure produced by radiation absorption
    summary_rules:
      - id: p_summary_default
        when: "true"
        status: ok
        text:
          es: "[[p_rad]] indica empuje por area y describe la consecuencia mecanica de la intensidad."
          en: "[[p_rad]] indicates push per area and describes the mechanical consequence of intensity."
    physical_reading_rules:
      - id: p_reading_default
        when: "true"
        status: ok
        text:
          es: "[[p_rad]] aumenta con [[S_med]], pero suele ser pequeña porque se divide por [[c]]."
          en: "[[p_rad]] increases with [[S_med]], but is usually small because it is divided by [[c]]."
    coherence_rules:
      - id: p_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[p_rad]] debe ser no negativa para absorcion normal en el sentido de propagacion."
          en: "[[p_rad]] must be nonnegative for normal absorption along propagation."
    model_validity_rules:
      - id: p_validity_default
        when: "true"
        status: ok
        text:
          es: "[[p_rad]] vale como modelo absorbente; reflexion o incidencia oblicua exigen correcciones."
          en: "[[p_rad]] holds as an absorbing model; reflection or oblique incidence require corrections."
    graph_rules:
      - id: p_graph_default
        when: "true"
        status: ok
        text:
          es: "El grafico muestra [[p_rad]] como efecto mecanico derivado de [[S_med]]."
          en: "The graph shows [[p_rad]] as a mechanical effect derived from [[S_med]]."
    likely_errors:
      - id: p_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: duplicar [[p_rad]] sin comprobar si la superficie refleja."
          en: "Typical error: doubling [[p_rad]] without checking whether the surface reflects."
    next_step_rules:
      - id: p_next_default
        when: "true"
        status: ok
        text:
          es: "Compara [[p_rad]] con presiones ordinarias para decidir si el empuje sera medible."
          en: "Compare [[p_rad]] with ordinary pressures to decide whether the push is measurable."
  A:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: area efectiva que intercepta la intensidad de la onda
      en: effective area intercepting wave intensity
    summary_rules:
      - id: a_summary_default
        when: "true"
        status: ok
        text:
          es: "[[A]] indica superficie efectiva y describe como una intensidad local se convierte en potencia total."
          en: "[[A]] indicates effective surface and describes how local intensity becomes total power."
    physical_reading_rules:
      - id: a_reading_default
        when: "true"
        status: ok
        text:
          es: "[[A]] aumenta [[P_rad]] sin cambiar la presion local [[p_rad]]."
          en: "[[A]] increases [[P_rad]] without changing local pressure [[p_rad]]."
    coherence_rules:
      - id: a_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[A]] debe ser no negativa y representar area realmente iluminada."
          en: "[[A]] must be nonnegative and represent truly illuminated area."
    model_validity_rules:
      - id: a_validity_default
        when: "true"
        status: ok
        text:
          es: "Usar [[A]] supone intensidad casi uniforme sobre el area proyectada."
          en: "Using [[A]] assumes nearly uniform intensity over the projected area."
    graph_rules:
      - id: a_graph_default
        when: "true"
        status: ok
        text:
          es: "[[A]] actua como control de escalado para pasar de [[S_med]] a [[P_rad]]."
          en: "[[A]] acts as a scaling control to move from [[S_med]] to [[P_rad]]."
    likely_errors:
      - id: a_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: usar area geometrica total aunque la onda solo ilumine una proyeccion."
          en: "Typical error: using total geometric area even when the wave illuminates only a projection."
    next_step_rules:
      - id: a_next_default
        when: "true"
        status: ok
        text:
          es: "Revisa orientacion y sombreado antes de multiplicar [[S_med]] por [[A]]."
          en: "Check orientation and shadowing before multiplying [[S_med]] by [[A]]."
  P_rad:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: potencia total interceptada por el area iluminada
      en: total power intercepted by the illuminated area
    summary_rules:
      - id: prad_summary_default
        when: "true"
        status: ok
        text:
          es: "[[P_rad]] indica potencia total y resume cuanta energia por segundo recibe el dispositivo."
          en: "[[P_rad]] indicates total power and summarizes how much energy per second the device receives."
    physical_reading_rules:
      - id: prad_reading_default
        when: "true"
        status: ok
        text:
          es: "[[P_rad]] depende de [[S_med]] y [[A]], por eso no es una propiedad local de la onda sola."
          en: "[[P_rad]] depends on [[S_med]] and [[A]], so it is not a local property of the wave alone."
    coherence_rules:
      - id: prad_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[P_rad]] debe ser no negativa para una superficie que intercepta energia incidente."
          en: "[[P_rad]] must be nonnegative for a surface intercepting incident energy."
    model_validity_rules:
      - id: prad_validity_default
        when: "true"
        status: ok
        text:
          es: "[[P_rad]] es fiable si [[S_med]] es uniforme y [[A]] representa el area efectiva."
          en: "[[P_rad]] is reliable if [[S_med]] is uniform and [[A]] represents effective area."
    graph_rules:
      - id: prad_graph_default
        when: "true"
        status: ok
        text:
          es: "La tarjeta grafica puede mostrar [[P_rad]] como escala total asociada a [[S_med]]."
          en: "The graph card can show [[P_rad]] as the total scale associated with [[S_med]]."
    likely_errors:
      - id: prad_error_default
        when: "true"
        status: warning
        text:
          es: "Error tipico: confundir [[P_rad]] en W con [[S_med]] en W/m2."
          en: "Typical error: confusing [[P_rad]] in W with [[S_med]] in W/m2."
    next_step_rules:
      - id: prad_next_default
        when: "true"
        status: ok
        text:
          es: "Usa [[P_rad]] para balance energetico y [[p_rad]] para empuje mecanico local."
          en: "Use [[P_rad]] for energy budget and [[p_rad]] for local mechanical push."
cross_checks:
  - id: intensidad_desde_energia
    when: "true"
    status: ok
    text:
      es: "[[S_med]] debe crecer con [[u_EM]] porque la onda convierte energia por volumen en flujo."
      en: "[[S_med]] must grow with [[u_EM]] because the wave converts energy per volume into flux."
  - id: potencia_no_es_intensidad
    when: "true"
    status: warning
    text:
      es: "[[P_rad]] y [[S_med]] tienen unidades distintas; una necesita area y la otra no."
      en: "[[P_rad]] and [[S_med]] have different units; one needs area and the other does not."
error_patterns:
  - id: confundir_flujo_y_total
    detect_when: "true"
    status: warning
    text:
      es: "Si el resultado en W/m2 se interpreta como W, se esta mezclando intensidad con potencia total."
      en: "If a W/m2 result is interpreted as W, intensity is being mixed with total power."
  - id: presion_reflectante_sin_modelo
    detect_when: "true"
    status: warning
    text:
      es: "No dupliques la presion de radiacion sin declarar reflexion especular."
      en: "Do not double radiation pressure without declaring specular reflection."
graph_binding:
  enabled: true
  preferred_graph: Coord
  channels:
    x: u_EM
    y: S_med
    star: S_med
    secondary: [g_EM, p_rad, P_rad]
  graph_reading:
    es: "El grafico principal muestra como [[u_EM]] se convierte linealmente en [[S_med]], y como esa intensidad alimenta presion y potencia."
    en: "The main graph shows how [[u_EM]] becomes [[S_med]] linearly, and how that intensity feeds pressure and power."
mini_graph:
  enabled: true
  preferred_type: Coord
  target: S_med
  x_magnitude: u_EM
  y_magnitude: S_med
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
