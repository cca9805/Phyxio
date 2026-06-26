const e=`version: 2
id: interpretacion-fisica-maxwell
leaf_id: interpretacion-fisica
nombre:
  es: "Interpretación física de las ecuaciones de Maxwell"
  en: "Maxwell's Equations Physical Interpretation"
scope:
  area: "fisica-clasica"
  bloque: "electromagnetismo"
  subbloque: "ecuaciones-de-maxwell"
  parent_id: "ecuaciones-de-maxwell"
  ruta_relativa: "fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/interpretacion-fisica"
dependencies:
  magnitudes: ["c", "u", "S", "I", "E", "B", "epsilon0", "mu0", "E0", "EB"]
  formulas: ["velocidad_vacio", "densidad_energia", "poynting_magnitud", "intensidad_media", "relacion_campos"]

output_contract:
  sections:
    - "summary"
    - "physical_reading"
    - "coherence"
    - "model_validity"
    - "graph_reading"
    - "likely_errors"
    - "next_step"

result_blocks:
  summary:
    title: { es: "Resumen físico", en: "Physical summary" }
  physical_reading:
    title: { es: "Lectura física profunda", en: "Deep physical reading" }
  coherence:
    title: { es: "Coherencia del balance", en: "Balance coherence" }
  model_validity:
    title: { es: "Validez y límites", en: "Validity and limits" }
  graph_reading:
    title: { es: "Lectura gráfica", en: "Graph reading" }
  likely_errors:
    title: { es: "Errores probables", en: "Likely errors" }
  next_step:
    title: { es: "Siguiente paso", en: "Next step" }

targets:
  c:
    summary_rules:
      - id: "c_sum"
        when: "always"
        status: "info"
        text:
          es: "La velocidad de la luz [[c]] indica la constante de acoplamiento fundamental y el límite de velocidad del universo."
          en: "The speed of light [[c]] indicates the fundamental coupling constant and the speed limit of the universe."
    physical_reading_rules:
      - id: "c_phys"
        when: "always"
        status: "info"
        text:
          es: "Este valor significa que la información no puede viajar instantáneamente porque surge de las propiedades elásticas intrínsecas del vacío ([[epsilon0]] y [[mu0]])."
          en: "This value means that information cannot travel instantaneously because it arises from the intrinsic elastic properties of vacuum ([[epsilon0]] and [[mu0]])."
    coherence_rules:
      - id: "c_coh"
        when: "always"
        status: "ok"
        text:
          es: "Invariante en todos los marcos de referencia inerciales según la relatividad."
          en: "Invariant in all inertial reference frames according to relativity."
    model_validity_rules:
      - id: "c_val"
        when: "always"
        status: "ok"
        text:
          es: "Válido universalmente para el vacío; asume que el medio es lineal y no dispersivo para mantener [[c]] constante."
          en: "Universally valid for vacuum; assumes the medium is linear and non-dispersive to keep [[c]] constant."
    graph_rules:
      - id: "c_graph"
        when: "always"
        status: "info"
        text:
          es: "Se visualiza como la pendiente del cono de luz en diagramas espacio-temporales."
          en: "It is visualized as the slope of the light cone in space-time diagrams."
    likely_errors:
      - id: "c_err"
        when: "always"
        status: "warning"
        text:
          es: "Confundir la velocidad en medios materiales con la constante universal [[c]] al olvidar el índice de refracción."
          en: "Confusing the speed in material media with the universal constant [[c]] by forgetting the refractive index."
    next_step_rules:
      - id: "c_next"
        when: "always"
        status: "info"
        text:
          es: "Usar [[c]] para convertir distancias astronómicas en tiempos de viaje."
          en: "Use [[c]] to convert astronomical distances into travel times."

  S:
    summary_rules:
      - id: "S_sum"
        when: "always"
        status: "info"
        text:
          es: "El vector de Poynting [[S]] describe el transporte de energía direccional y la potencia por unidad de área."
          en: "The Poynting vector [[S]] describes directional energy transport and power per unit area."
    physical_reading_rules:
      - id: "S_phys"
        when: "always"
        status: "info"
        text:
          es: "Indica hacia dónde fluye la energía electromagnética porque es perpendicular tanto a [[E]] como a [[B]] en una onda plana."
          en: "Indicates where electromagnetic energy flows because it is perpendicular to both [[E]] and [[B]] in a plane wave."
    coherence_rules:
      - id: "S_coh"
        when: "always"
        status: "ok"
        text:
          es: "El balance de energía indica que el flujo neto a través de una superficie cerrada iguala la pérdida interna."
          en: "The energy balance indicates that the net flux through a closed surface equals the internal loss."
    model_validity_rules:
      - id: "S_val"
        when: "always"
        status: "ok"
        text:
          es: "Válido para campos clásicos; asume que no hay efectos cuánticos de alta energía que dispersen el flujo."
          en: "Valid for classical fields; assumes no high-energy quantum effects scatter the flux."
    graph_rules:
      - id: "S_graph"
        when: "always"
        status: "info"
        text:
          es: "Se representa como vectores que salen de las fuentes y se propagan por el espacio."
          en: "It is represented as vectors leaving the sources and propagating through space."
    likely_errors:
      - id: "S_err"
        when: "always"
        status: "warning"
        text:
          es: "Olvidar que [[S]] es un vector y creer que se puede tratar como una cantidad escalar simple sin dirección."
          en: "Forgetting that [[S]] is a vector and believing it can be treated as a simple scalar quantity without direction."
    next_step_rules:
      - id: "S_next"
        when: "always"
        status: "info"
        text:
          es: "Calcular la presión de radiación dividiendo [[S]] por [[c]]."
          en: "Calculate radiation pressure by dividing [[S]] by [[c]]."

  u:
    summary_rules:
      - id: "u_sum"
        when: "always"
        status: "info"
        text:
          es: "La densidad de energía [[u]] resume la presión energética total almacenada en los campos locales."
          en: "Energy density [[u]] summarizes the total energy pressure stored in local fields."
    physical_reading_rules:
      - id: "u_phys"
        when: "always"
        status: "info"
        text:
          es: "Significa que el espacio contiene energía real porque depende cuadráticamente de las amplitudes de [[E]] y [[B]]."
          en: "It means that space contains real energy because it depends quadratically on the amplitudes of [[E]] and [[B]]."
    coherence_rules:
      - id: "u_coh"
        when: "always"
        status: "ok"
        text:
          es: "En una onda plana en el vacío, el balance indica que las densidades eléctrica y magnética son idénticas."
          en: "In a plane wave in vacuum, the balance indicates that electric and magnetic densities are identical."
    model_validity_rules:
      - id: "u_val"
        when: "always"
        status: "ok"
        text:
          es: "Válido mientras los campos asuman valores por debajo del límite de ruptura del vacío de Schwinger."
          en: "Valid as long as the fields assume values below the Schwinger vacuum breakdown limit."
    graph_rules:
      - id: "u_graph"
        when: "always"
        status: "info"
        text:
          es: "Suele representarse mediante mapas de calor o densidades de color en el espacio."
          en: "Usually represented by heat maps or color densities in space."
    likely_errors:
      - id: "u_err"
        when: "always"
        status: "warning"
        text:
          es: "Tomar solo una componente de campo y olvidar que [[u]] depende de la suma de contribuciones eléctrica y magnética."
          en: "Taking only one field component and forgetting that [[u]] depends on the sum of electric and magnetic contributions."
    next_step_rules:
      - id: "u_next"
        when: "always"
        status: "info"
        text:
          es: "Integrar [[u]] en un volumen para obtener la energía total encerrada."
          en: "Integrate [[u]] in a volume to obtain the total enclosed energy."

  E:
    summary_rules:
      - id: "E_sum"
        when: "always"
        status: "info"
        text: { es: "El campo eléctrico [[E]] describe la fuerza sobre cargas.", en: "The electric field [[E]] describes the force on charges." }
    physical_reading_rules:
      - id: "E_phys"
        when: "always"
        status: "info"
        text: { es: "Representa la perturbación del espacio que interactúa con la polaridad de la materia.", en: "Represents the space disturbance interacting with matter polarity." }
    coherence_rules:
      - id: "E_coh"
        when: "always"
        status: "ok"
        text: { es: "Acoplado ortogonalmente a [[B]] en propagación libre.", en: "Orthogonally coupled to [[B]] in free propagation." }
    model_validity_rules:
      - id: "E_val"
        when: "always"
        status: "ok"
        text: { es: "Aproximación clásica de campo continuo.", en: "Classical continuous field approximation." }
    graph_rules:
      - id: "E_graph"
        when: "always"
        status: "info"
        text: { es: "Se visualiza como vectores oscilantes en el eje principal.", en: "Visualized as oscillating vectors on the main axis." }
    likely_errors:
      - id: "E_err"
        when: "always"
        status: "warning"
        text: { es: "Confundir la amplitud del campo con la fuerza neta sin considerar la carga de prueba.", en: "Confusing field amplitude with net force without considering the test charge." }
    next_step_rules:
      - id: "E_next"
        when: "always"
        status: "info"
        text: { es: "Calcular la fuerza de Lorentz sobre una partícula cargada.", en: "Calculate the Lorentz force on a charged particle." }

  B:
    summary_rules:
      - id: "B_sum"
        when: "always"
        status: "info"
        text: { es: "El campo magnético [[B]] describe la fuerza sobre cargas móviles.", en: "The magnetic field [[B]] describes the force on moving charges." }
    physical_reading_rules:
      - id: "B_phys"
        when: "always"
        status: "info"
        text: { es: "Surge de cargas en movimiento o variaciones del campo eléctrico.", en: "Arises from moving charges or electric field variations." }
    coherence_rules:
      - id: "B_coh"
        when: "always"
        status: "ok"
        text: { es: "Su magnitud es c veces menor que la de [[E]] en el vacío.", en: "Its magnitude is c times smaller than that of [[E]] in vacuum." }
    model_validity_rules:
      - id: "B_val"
        when: "always"
        status: "ok"
        text: { es: "Asume la ausencia de monopolos magnéticos.", en: "Assumes the absence of magnetic monopoles." }
    graph_rules:
      - id: "B_graph"
        when: "always"
        status: "info"
        text: { es: "Vectores ortogonales a [[E]] y a la dirección de propagación.", en: "Vectors orthogonal to [[E]] and the propagation direction." }
    likely_errors:
      - id: "B_err"
        when: "always"
        status: "warning"
        text: { es: "Ignorar la contribución magnética a la energía total de la onda.", en: "Ignoring the magnetic contribution to the total wave energy." }
    next_step_rules:
      - id: "B_next"
        when: "always"
        status: "info"
        text: { es: "Analizar el efecto sobre corrientes inducidas.", en: "Analyze the effect on induced currents." }

  E0:
    summary_rules:
      - id: "E0_sum"
        when: "always"
        status: "info"
        text: { es: "La amplitud [[E0]] determina la intensidad máxima de la oscilación eléctrica.", en: "The amplitude [[E0]] determines the maximum intensity of the electric oscillation." }
    physical_reading_rules:
      - id: "E0_phys"
        when: "always"
        status: "info"
        text: { es: "Escala de la perturbación máxima alcanzada por el campo.", en: "Scale of the maximum disturbance reached by the field." }
    coherence_rules:
      - id: "E0_coh"
        when: "always"
        status: "ok"
        text: { es: "Directamente proporcional a la raíz cuadrada de la intensidad.", en: "Directly proportional to the square root of intensity." }
    model_validity_rules:
      - id: "E0_val"
        when: "always"
        status: "ok"
        text: { es: "Asume una onda monocromática de amplitud constante.", en: "Assumes a monochromatic wave of constant amplitude." }
    graph_rules:
      - id: "E0_graph"
        when: "always"
        status: "info"
        text: { es: "Puntos máximos de la envolvente de la oscilación.", en: "Maximum points of the oscillation envelope." }
    likely_errors:
      - id: "E0_err"
        when: "always"
        status: "warning"
        text: { es: "Confundir amplitud pico con valor eficaz (root mean square).", en: "Confusing peak amplitude with RMS value." }
    next_step_rules:
      - id: "E0_next"
        when: "always"
        status: "info"
        text: { es: "Determinar la densidad de energía máxima.", en: "Determine the maximum energy density." }

  I:
    summary_rules:
      - id: "I_sum"
        when: "always"
        status: "info"
        text: { es: "La intensidad media [[I]] resume el flujo de potencia promedio por unidad de superficie.", en: "The average intensity [[I]] summarizes the average power flux per unit area." }
    physical_reading_rules:
      - id: "I_phys"
        when: "always"
        status: "info"
        text: { es: "Medida del brillo o potencia percibida de la radiación.", en: "Measure of the perceived brightness or power of radiation." }
    coherence_rules:
      - id: "I_coh"
        when: "always"
        status: "ok"
        text: { es: "Equivale al promedio temporal del módulo del vector de Poynting.", en: "Equivalent to the time average of the Poynting vector magnitude." }
    model_validity_rules:
      - id: "I_val"
        when: "always"
        status: "ok"
        text: { es: "Promedio sobre ciclos completos de oscilación.", en: "Average over complete oscillation cycles." }
    graph_rules:
      - id: "I_graph"
        when: "always"
        status: "info"
        text: { es: "Se visualiza como la altura de la envolvente de potencia.", en: "Visualized as the height of the power envelope." }
    likely_errors:
      - id: "I_err"
        when: "always"
        status: "warning"
        text: { es: "Confundir intensidad local con potencia total de la fuente.", en: "Confusing local intensity with total source power." }
    next_step_rules:
      - id: "I_next"
        when: "always"
        status: "info"
        text: { es: "Calcular la energía total absorbida por una superficie en un tiempo dado.", en: "Calculate the total energy absorbed by a surface in a given time." }

  EB:
    summary_rules:
      - id: "EB_sum"
        when: "always"
        status: "info"
        text: { es: "La relación [[EB]] indica la proporcionalidad estricta entre campos en el vacío.", en: "The [[EB]] ratio indicates strict proportionality between fields in vacuum." }
    physical_reading_rules:
      - id: "EB_phys"
        when: "always"
        status: "info"
        text: { es: "Refleja la impedancia intrínseca del espacio libre.", en: "Reflects the intrinsic impedance of free space." }
    coherence_rules:
      - id: "EB_coh"
        when: "always"
        status: "ok"
        text: { es: "Su valor numérico debe ser idéntico a la velocidad de la luz [[c]].", en: "Its numerical value must be identical to the speed of light [[c]]." }
    model_validity_rules:
      - id: "EB_val"
        when: "always"
        status: "ok"
        text: { es: "Válido solo para ondas planas en regiones sin fuentes de carga.", en: "Valid only for plane waves in regions without charge sources." }
    graph_rules:
      - id: "EB_graph"
        when: "always"
        status: "info"
        text: { es: "Escala relativa de los vectores en el espacio 3D.", en: "Relative scale of vectors in 3D space." }
    likely_errors:
      - id: "EB_err"
        when: "always"
        status: "warning"
        text: { es: "Suponer que la relación se mantiene igual dentro de un dieléctrico.", en: "Assuming the ratio remains the same inside a dielectric." }
    next_step_rules:
      - id: "EB_next"
        when: "always"
        status: "info"
        text: { es: "Determinar si el medio de propagación es realmente el vacío.", en: "Determine if the propagation medium is truly vacuum." }

  epsilon0:
    summary_rules:
      - id: "epsilon0_sum"
        when: "always"
        status: "info"
        text: { es: "La permitividad [[epsilon0]] describe la elasticidad eléctrica del vacío.", en: "Permittivity [[epsilon0]] describes the electric elasticity of vacuum." }
    physical_reading_rules:
      - id: "epsilon0_phys"
        when: "always"
        status: "info"
        text: { es: "Facilidad con la que el vacío permite la formación de líneas de campo eléctrico.", en: "Ease with which vacuum allows the formation of electric field lines." }
    coherence_rules:
      - id: "epsilon0_coh"
        when: "always"
        status: "ok"
        text: { es: "Define la velocidad de propagación junto con [[mu0]].", en: "Defines the propagation speed together with [[mu0]]." }
    model_validity_rules:
      - id: "epsilon0_val"
        when: "always"
        status: "ok"
        text: { es: "Constante fundamental en el SI.", en: "Fundamental constant in SI." }
    graph_rules:
      - id: "epsilon0_graph"
        when: "always"
        status: "info"
        text: { es: "Factor de escala en la densidad de líneas de campo.", en: "Scaling factor in field line density." }
    likely_errors:
      - id: "epsilon0_err"
        when: "always"
        status: "warning"
        text: { es: "Utilizarla para calcular campos en medios materiales sin considerar la permitividad relativa.", en: "Using it to calculate fields in material media without considering relative permittivity." }
    next_step_rules:
      - id: "epsilon0_next"
        when: "always"
        status: "info"
        text: { es: "Estudiar la respuesta dieléctrica de materiales específicos.", en: "Study the dielectric response of specific materials." }

  mu0:
    summary_rules:
      - id: "mu0_sum"
        when: "always"
        status: "info"
        text: { es: "La permeabilidad [[mu0]] describe la elasticidad magnética del vacío.", en: "Permeability [[mu0]] describes the magnetic elasticity of vacuum." }
    physical_reading_rules:
      - id: "mu0_phys"
        when: "always"
        status: "info"
        text: { es: "Capacidad del vacío para sostener y propagar flujos magnéticos.", en: "Capacity of vacuum to sustain and propagate magnetic fluxes." }
    coherence_rules:
      - id: "mu0_coh"
        when: "always"
        status: "ok"
        text: { es: "Relacionada con la permitividad mediante el inverso del cuadrado de c.", en: "Related to permittivity by the inverse square of c." }
    model_validity_rules:
      - id: "mu0_val"
        when: "always"
        status: "ok"
        text: { es: "Constante fundamental que define la unidad de corriente.", en: "Fundamental constant that defines the unit of current." }
    graph_rules:
      - id: "mu0_graph"
        when: "always"
        status: "info"
        text: { es: "Factor de escala en la intensidad del flujo magnético.", en: "Scaling factor in magnetic flux intensity." }
    likely_errors:
      - id: "mu0_err"
        when: "always"
        status: "warning"
        text: { es: "Confundir con la permeabilidad de materiales ferromagnéticos.", en: "Confusing it with the permeability of ferromagnetic materials." }
    next_step_rules:
      - id: "mu0_next"
        when: "always"
        status: "info"
        text: { es: "Analizar la inducción en presencia de núcleos materiales.", en: "Analyze induction in the presence of material cores." }
`;export{e as default};
