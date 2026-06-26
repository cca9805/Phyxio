const e=`version: 2
id: interpretacion-centro-de-masas-en-cuerpos-extendidos
leaf_id: centro-de-masas-en-cuerpos-extendidos
nombre:
  es: Interpretacion de centro de masas en cuerpos extendidos
  en: Interpretation of the center of mass in extended bodies
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: dinamica
  parent_id: centro-de-masas
  ruta_relativa: fisica-clasica/mecanica/dinamica/estatica/centro-de-masas/centro-de-masas-en-cuerpos-extendidos
dependencies:
  formulas:
  - cm_vectorial
  - cm_x
  - masa_volumen
  - masa_area
  - masa_longitud
  magnitudes:
  - dm
  - M
  - R_cm
  - I_cm
  - xcm
  - I_x
  - rho
  - sigma
  - lambda
  - L
  - V
  - A
output_contract:
  sections:
  - summary
  - physical_reading
  - coherence
  - model_validity
  - graph_reading
  - likely_errors
  - next_step
result_blocks:
  summary:
    title:
      es: Resumen fisico
      en: Physical summary
  physical_reading:
    title:
      es: Lectura fisica
      en: Physical reading
  coherence:
    title:
      es: Coherencia
      en: Coherence
  model_validity:
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    title:
      es: Lectura grafica
      en: Graph reading
  likely_errors:
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    title:
      es: Siguiente paso
      en: Next step
targets:
  xcm:
    summary_rules:
    - id: xcm_summary
      when: "M > 0"
      status: info
      text:
        es: El valor de xcm indica hacia que region del cuerpo continuo se concentra de forma efectiva la masa.
        en: The value of xcm indicates toward which region of the continuous body mass is effectively concentrated.
    coherence_rules:
    - id: xcm_interval
      when: "xcm >= 0 && xcm <= L"
      status: ok
      text:
        es: La coordenada cae dentro del dominio geometrico de la distribucion lineal analizada.
        en: The coordinate lies inside the geometric domain of the analyzed linear distribution.
    physical_reading_rules:
    - id: xcm_density_shift
      when: "true"
      status: info
      text:
        es: Si la densidad aumenta hacia un extremo, xcm se desplaza causalmente hacia esa zona porque alli se acumula mas dm por unidad de longitud, area o volumen.
        en: If density increases toward one side, xcm shifts causally toward that region because more dm accumulates there per unit length, area, or volume.
    model_validity_rules:
    - id: xcm_model_validity
      when: "M > 0"
      status: ok
      text:
        es: La interpretacion solo es valida si el cuerpo puede tratarse como distribucion continua con la densidad adecuada.
        en: The interpretation is valid only if the body can be treated as a continuous distribution with the proper density.
    graph_rules:
    - id: xcm_graph
      when: "M > 0"
      status: info
      text:
        es: En la grafica, el marcador de xcm debe moverse desde la mitad geometrica hacia la region donde la densidad visual es mayor.
        en: In the graph, the xcm marker should move away from the geometric midpoint toward the region of higher visual density.
    likely_errors:
    - id: xcm_geometric_center_confusion
      when: "true"
      status: warning
      text:
        es: Un error comun es igualar centro geometrico y centro de masas incluso cuando la densidad no es uniforme.
        en: A common mistake is to equate geometric center and center of mass even when density is not uniform.
    next_step_rules:
    - id: xcm_next
      when: "M > 0"
      status: info
      text:
        es: El siguiente paso natural es pasar de una componente xcm al vector completo R_cm o comparar varias leyes de densidad.
        en: The natural next step is to move from the component xcm to the full vector R_cm or compare several density laws.

  R_cm:
    summary_rules:
    - id: Rcm_summary
      when: "true"
      status: info
      text:
        es: R_cm resume la posicion global del cuerpo completo y no solo una componente aislada.
        en: R_cm summarizes the global position of the whole body rather than a single isolated component.
    coherence_rules:
    - id: Rcm_coherence
      when: "true"
      status: ok
      text:
        es: R_cm es coherente con xcm cuando el problema se reduce a una sola dimension.
        en: R_cm remains coherent with xcm when the problem is reduced to one dimension.
    physical_reading_rules:
    - id: Rcm_physical
      when: "true"
      status: info
      text:
        es: La lectura vectorial es necesaria cuando la geometria ocupa mas de un eje y la distribucion material se sesga en varias direcciones a la vez.
        en: The vector reading is necessary when geometry spans more than one axis and material distribution is biased in several directions at once.
    model_validity_rules:
    - id: Rcm_model_validity
      when: "M > 0"
      status: ok
      text:
        es: La lectura vectorial exige una geometria continua bien definida y una ley de densidad compatible con el cuerpo analizado.
        en: The vector reading requires a well-defined continuous geometry and a density law compatible with the analyzed body.
    graph_rules:
    - id: Rcm_graph
      when: "M > 0"
      status: info
      text:
        es: En una grafica o esquema, R_cm debe desplazarse hacia la region donde se acumula mas dm.
        en: In a graph or sketch, R_cm should move toward the region where more dm accumulates.
    likely_errors:
    - id: Rcm_scalar_confusion
      when: "true"
      status: warning
      text:
        es: Un error habitual es leer R_cm como si fuera solo una coordenada y olvidar que resume todas las direcciones relevantes del cuerpo.
        en: A common mistake is to read R_cm as if it were only one coordinate and forget that it summarizes all relevant body directions.
    next_step_rules:
    - id: Rcm_next
      when: "M > 0"
      status: info
      text:
        es: El siguiente paso natural es proyectar R_cm sobre ejes concretos o comparar como cambia al modificar la ley de densidad.
        en: The natural next step is to project R_cm onto specific axes or compare how it changes when the density law is modified.

  dm:
    summary_rules:
    - id: dm_summary
      when: "true"
      status: info
      text:
        es: dm representa una contribucion local de masa a partir de la cual se construye toda la integral del centro de masas.
        en: dm represents a local mass contribution from which the whole center-of-mass integral is built.
    coherence_rules:
    - id: dm_coherence
      when: "true"
      status: ok
      text:
        es: dm es coherente solo si se define con el elemento geometrico correcto del cuerpo.
        en: dm is coherent only if it is defined with the correct geometric element of the body.
    physical_reading_rules:
    - id: dm_physical
      when: "true"
      status: info
      text:
        es: Cada dm pesa en la integral segun su posicion y por eso las regiones mas densas arrastran el centro de masas.
        en: Each dm weighs into the integral according to its position, which is why denser regions drag the center of mass.
    model_validity_rules:
    - id: dm_model
      when: "true"
      status: ok
      text:
        es: La construccion de dm debe respetar si el problema es lineal, superficial o volumetrico.
        en: The construction of dm must respect whether the problem is linear, surface based, or volumetric.
    graph_rules:
    - id: dm_graph
      when: "true"
      status: info
      text:
        es: En una visualizacion, dm puede leerse como pequeños aportes repartidos por el dominio.
        en: In a visualization, dm can be read as small contributions spread across the domain.
    likely_errors:
    - id: dm_symbol_only
      when: "true"
      status: warning
      text:
        es: Un error plausible es tratar dm como un simbolo decorativo y no como una masa local construida con densidad y geometria.
        en: A plausible mistake is to treat dm as decorative notation rather than as a local mass built from density and geometry.
    next_step_rules:
    - id: dm_next
      when: "true"
      status: info
      text:
        es: El siguiente paso es escribir dm con lambda, sigma o rho segun la geometria.
        en: The next step is to write dm with lambda, sigma, or rho depending on the geometry.

  A:
    summary_rules:
    - id: A_summary
      when: "A > 0"
      status: info
      text:
        es: A resume el dominio superficial cuando el cuerpo se modela como lamina.
        en: A summarizes the surface domain when the body is modeled as a lamina.
    coherence_rules:
    - id: A_coherence
      when: "A > 0"
      status: ok
      text:
        es: El area debe corresponder a la misma region donde se define la densidad superficial.
        en: Area must correspond to the same region where surface density is defined.
    physical_reading_rules:
    - id: A_physical
      when: "A > 0"
      status: info
      text:
        es: A influye en la masa total solo en combinacion con sigma.
        en: A affects total mass only in combination with sigma.
    model_validity_rules:
    - id: A_model
      when: "A > 0"
      status: ok
      text:
        es: Usar A tiene sentido cuando el espesor es despreciable frente a las otras dimensiones.
        en: Using A makes sense when thickness is negligible relative to the other dimensions.
    graph_rules:
    - id: A_graph
      when: "A > 0"
      status: info
      text:
        es: En un esquema, A se identifica con la region bidimensional ocupada por el cuerpo.
        en: In a sketch, A is identified with the two dimensional region occupied by the body.
    likely_errors:
    - id: A_confusion
      when: "A > 0"
      status: warning
      text:
        es: Un error frecuente es usar A en un cuerpo cuya masa exige ya una lectura volumetrica.
        en: A frequent mistake is to use A for a body whose mass already requires a volumetric reading.
    next_step_rules:
    - id: A_next
      when: "A > 0"
      status: info
      text:
        es: El siguiente paso es combinar A con sigma para construir la masa superficial.
        en: The next step is to combine A with sigma to build surface mass.

  I_cm:
    summary_rules:
    - id: Icm_summary
      when: "true"
      status: info
      text:
        es: I_cm representa el primer momento de masa que aparece en la construccion de R_cm.
        en: I_cm represents the first mass moment that appears in the construction of R_cm.
    coherence_rules:
    - id: Icm_coherence
      when: "M > 0"
      status: ok
      text:
        es: I_cm solo es coherente si se integra la posicion ponderada por dm sobre todo el cuerpo.
        en: I_cm is coherent only if position weighted by dm is integrated over the whole body.
    physical_reading_rules:
    - id: Icm_physical
      when: "true"
      status: info
      text:
        es: I_cm mide como la distribucion espacial de masa tira del centro de masas hacia unas regiones u otras.
        en: I_cm measures how the spatial mass distribution pulls the center of mass toward some regions rather than others.
    model_validity_rules:
    - id: Icm_model
      when: "M > 0"
      status: ok
      text:
        es: Su lectura es valida cuando la densidad y el dominio geometrico han sido elegidos correctamente.
        en: Its reading is valid when density and geometric domain have been chosen correctly.
    graph_rules:
    - id: Icm_graph
      when: "true"
      status: info
      text:
        es: En una visualizacion, I_cm crece cuando aparece mas masa lejos de la referencia escogida.
        en: In a visualization, I_cm grows when more mass appears far from the chosen reference.
    likely_errors:
    - id: Icm_confusion
      when: "true"
      status: warning
      text:
        es: Un error plausible es confundir I_cm con una masa total cuando en realidad incluye tambien informacion espacial.
        en: A plausible mistake is to confuse I_cm with total mass even though it also contains spatial information.
    next_step_rules:
    - id: Icm_next
      when: "M > 0"
      status: info
      text:
        es: El siguiente paso es dividir I_cm por M para recuperar la posicion del centro de masas.
        en: The next step is to divide I_cm by M to recover center-of-mass position.

  I_x:
    summary_rules:
    - id: Ix_summary
      when: "true"
      status: info
      text:
        es: I_x resume el primer momento de masa proyectado sobre el eje x.
        en: I_x summarizes the first mass moment projected onto the x axis.
    coherence_rules:
    - id: Ix_coherence
      when: "M > 0"
      status: ok
      text:
        es: I_x es coherente cuando se integra x multiplicado por dm sobre el dominio correcto.
        en: I_x is coherent when x multiplied by dm is integrated over the correct domain.
    physical_reading_rules:
    - id: Ix_physical
      when: "true"
      status: info
      text:
        es: I_x aumenta si aparece mas masa hacia valores altos de x.
        en: I_x increases if more mass appears toward larger x values.
    model_validity_rules:
    - id: Ix_model
      when: "M > 0"
      status: ok
      text:
        es: Su lectura depende de usar el mismo eje x en todo el problema.
        en: Its reading depends on using the same x axis throughout the problem.
    graph_rules:
    - id: Ix_graph
      when: "true"
      status: info
      text:
        es: En un grafico, I_x se asocia al sesgo horizontal de la distribucion.
        en: In a graph, I_x is associated with the horizontal bias of the distribution.
    likely_errors:
    - id: Ix_confusion
      when: "true"
      status: warning
      text:
        es: Un error comun es olvidar el factor x y convertir I_x en una masa total.
        en: A common mistake is to forget the x factor and turn I_x into total mass.
    next_step_rules:
    - id: Ix_next
      when: "M > 0"
      status: info
      text:
        es: El siguiente paso es dividir I_x por M para obtener x_cm.
        en: The next step is to divide I_x by M to obtain x_cm.

  L:
    summary_rules:
    - id: L_summary
      when: "L > 0"
      status: info
      text:
        es: L fija la escala geometrica de una distribucion lineal.
        en: L sets the geometric scale of a linear distribution.
    coherence_rules:
    - id: L_coherence
      when: "L > 0"
      status: ok
      text:
        es: La longitud debe coincidir con el intervalo real sobre el que se distribuye la masa.
        en: Length must match the real interval over which mass is distributed.
    physical_reading_rules:
    - id: L_physical
      when: "L > 0"
      status: info
      text:
        es: L no decide por si sola el centro de masas, pero fija el dominio donde puede caer x_cm.
        en: L does not determine the center of mass by itself, but it sets the domain where x_cm can lie.
    model_validity_rules:
    - id: L_model
      when: "L > 0"
      status: ok
      text:
        es: Usar L es apropiado cuando el cuerpo se modela como varilla o distribucion lineal.
        en: Using L is appropriate when the body is modeled as a rod or linear distribution.
    graph_rules:
    - id: L_graph
      when: "L > 0"
      status: info
      text:
        es: En la grafica, L delimita el intervalo sobre el que puede moverse el marcador de x_cm.
        en: In the graph, L delimits the interval over which the x_cm marker can move.
    likely_errors:
    - id: L_confusion
      when: "L > 0"
      status: warning
      text:
        es: Un error plausible es leer L como si fuera una posicion y no una escala geometrica del dominio.
        en: A plausible mistake is to read L as if it were a position rather than the geometric scale of the domain.
    next_step_rules:
    - id: L_next
      when: "L > 0"
      status: info
      text:
        es: El siguiente paso es combinar L con la densidad lineal para construir dm o M.
        en: The next step is to combine L with linear density to build dm or M.

  M:
    summary_rules:
    - id: M_summary_extended
      when: "M > 0"
      status: info
      text:
        es: M es la masa total que normaliza la integral del centro de masas.
        en: M is the total mass that normalizes the center-of-mass integral.
    coherence_rules:
    - id: M_coherence_extended
      when: "M > 0"
      status: ok
      text:
        es: La masa total debe obtenerse a partir de la misma densidad y del mismo dominio usados en el numerador.
        en: Total mass must be obtained from the same density and domain used in the numerator.
    physical_reading_rules:
    - id: M_physical_extended
      when: "M > 0"
      status: info
      text:
        es: M convierte el primer momento de masa en una posicion efectiva del cuerpo completo.
        en: M converts the first mass moment into an effective position of the whole body.
    model_validity_rules:
    - id: M_model_extended
      when: "M > 0"
      status: ok
      text:
        es: Su lectura es valida solo si el cuerpo y la ley de densidad se han definido sin omisiones.
        en: Its reading is valid only if body and density law have been defined without omissions.
    graph_rules:
    - id: M_graph_extended
      when: "M > 0"
      status: info
      text:
        es: En una visualizacion, M resume la cantidad total de materia repartida por el dominio.
        en: In a visualization, M summarizes the total amount of matter spread over the domain.
    likely_errors:
    - id: M_confusion_extended
      when: "M > 0"
      status: warning
      text:
        es: Un error comun es construir M con una densidad incompatible con la geometria elegida.
        en: A common mistake is to build M with a density incompatible with the chosen geometry.
    next_step_rules:
    - id: M_next_extended
      when: "M > 0"
      status: info
      text:
        es: El siguiente paso es usar M para normalizar el primer momento y obtener R_cm o x_cm.
        en: The next step is to use M to normalize the first moment and obtain R_cm or x_cm.

  V:
    summary_rules:
    - id: V_summary
      when: "V > 0"
      status: info
      text:
        es: V resume el dominio volumetrico cuando el cuerpo se modela como solido.
        en: V summarizes the volumetric domain when the body is modeled as a solid.
    coherence_rules:
    - id: V_coherence
      when: "V > 0"
      status: ok
      text:
        es: El volumen debe coincidir con la region donde se define la densidad volumetrica.
        en: Volume must match the region where volumetric density is defined.
    physical_reading_rules:
    - id: V_physical
      when: "V > 0"
      status: info
      text:
        es: V influye en la masa total solo junto con rho.
        en: V influences total mass only together with rho.
    model_validity_rules:
    - id: V_model
      when: "V > 0"
      status: ok
      text:
        es: Usar V tiene sentido cuando el espesor y la estructura tridimensional no pueden despreciarse.
        en: Using V makes sense when thickness and three-dimensional structure cannot be neglected.
    graph_rules:
    - id: V_graph
      when: "V > 0"
      status: info
      text:
        es: En un esquema, V identifica la region tridimensional ocupada por materia.
        en: In a sketch, V identifies the three-dimensional region occupied by matter.
    likely_errors:
    - id: V_confusion
      when: "V > 0"
      status: warning
      text:
        es: Un error plausible es reducir un problema volumetrico a uno superficial sin justificarlo.
        en: A plausible mistake is to reduce a volumetric problem to a surface one without justification.
    next_step_rules:
    - id: V_next
      when: "V > 0"
      status: info
      text:
        es: El siguiente paso es combinar V con rho para construir la masa total del solido.
        en: The next step is to combine V with rho to build total solid mass.

  lambda:
    summary_rules:
    - id: lambda_summary
      when: "true"
      status: info
      text:
        es: lambda describe cuanta masa aparece por unidad de longitud.
        en: lambda describes how much mass appears per unit length.
    coherence_rules:
    - id: lambda_coherence
      when: "true"
      status: ok
      text:
        es: lambda es coherente cuando el cuerpo se modela como distribucion lineal.
        en: lambda is coherent when the body is modeled as a linear distribution.
    physical_reading_rules:
    - id: lambda_physical
      when: "true"
      status: info
      text:
        es: Si lambda aumenta hacia una region, esa region arrastra x_cm y R_cm.
        en: If lambda increases toward a region, that region drags x_cm and R_cm.
    model_validity_rules:
    - id: lambda_model
      when: "true"
      status: ok
      text:
        es: Su uso exige que la geometria transversal no sea la variable dominante del problema.
        en: Its use requires cross-sectional geometry not to be the dominant variable of the problem.
    graph_rules:
    - id: lambda_graph
      when: "true"
      status: info
      text:
        es: En la grafica, lambda se lee como mas o menos masa por unidad de recorrido.
        en: In the graph, lambda is read as more or less mass per unit of path.
    likely_errors:
    - id: lambda_confusion
      when: "true"
      status: warning
      text:
        es: Un error frecuente es tratar lambda como masa total y no como densidad lineal local.
        en: A frequent mistake is to treat lambda as total mass rather than as local linear density.
    next_step_rules:
    - id: lambda_next
      when: "true"
      status: info
      text:
        es: El siguiente paso es usar lambda para construir dm y luego integrar.
        en: The next step is to use lambda to build dm and then integrate.

  rho:
    summary_rules:
    - id: rho_summary
      when: "true"
      status: info
      text:
        es: rho describe cuanta masa aparece por unidad de volumen.
        en: rho describes how much mass appears per unit volume.
    coherence_rules:
    - id: rho_coherence
      when: "true"
      status: ok
      text:
        es: rho es coherente cuando el cuerpo requiere una descripcion tridimensional.
        en: rho is coherent when the body requires a three-dimensional description.
    physical_reading_rules:
    - id: rho_physical
      when: "true"
      status: info
      text:
        es: Regiones con rho mayor aportan mas dm y arrastran el centro de masas.
        en: Regions with larger rho contribute more dm and drag the center of mass.
    model_validity_rules:
    - id: rho_model
      when: "true"
      status: ok
      text:
        es: Su uso exige que el volumen y la distribucion interna sean relevantes.
        en: Its use requires volume and internal distribution to be relevant.
    graph_rules:
    - id: rho_graph
      when: "true"
      status: info
      text:
        es: En un esquema, rho se asocia a zonas mas cargadas dentro del volumen.
        en: In a sketch, rho is associated with heavier zones inside the volume.
    likely_errors:
    - id: rho_confusion
      when: "true"
      status: warning
      text:
        es: Un error plausible es usar rho en un problema que deberia tratarse con sigma o lambda.
        en: A plausible mistake is to use rho in a problem that should be treated with sigma or lambda.
    next_step_rules:
    - id: rho_next
      when: "true"
      status: info
      text:
        es: El siguiente paso es combinar rho con el elemento de volumen para formar dm.
        en: The next step is to combine rho with the volume element to form dm.

  sigma:
    summary_rules:
    - id: sigma_summary
      when: "true"
      status: info
      text:
        es: sigma describe cuanta masa aparece por unidad de area.
        en: sigma describes how much mass appears per unit area.
    coherence_rules:
    - id: sigma_coherence
      when: "true"
      status: ok
      text:
        es: sigma es coherente cuando el cuerpo se modela como lamina o placa delgada.
        en: sigma is coherent when the body is modeled as a thin lamina or plate.
    physical_reading_rules:
    - id: sigma_physical
      when: "true"
      status: info
      text:
        es: Zonas con sigma mayor aportan mas masa superficial y desplazan R_cm.
        en: Regions with larger sigma contribute more surface mass and shift R_cm.
    model_validity_rules:
    - id: sigma_model
      when: "true"
      status: ok
      text:
        es: Su uso exige que el espesor pueda despreciarse frente a las otras dimensiones.
        en: Its use requires thickness to be negligible compared with the other dimensions.
    graph_rules:
    - id: sigma_graph
      when: "true"
      status: info
      text:
        es: En una grafica, sigma se lee como variaciones de carga material sobre una superficie.
        en: In a graph, sigma is read as variations of material load over a surface.
    likely_errors:
    - id: sigma_confusion
      when: "true"
      status: warning
      text:
        es: Un error habitual es usar sigma cuando el cuerpo ya necesita una lectura volumetrica completa.
        en: A common mistake is to use sigma when the body already requires a full volumetric reading.
    next_step_rules:
    - id: sigma_next
      when: "true"
      status: info
      text:
        es: El siguiente paso es combinar sigma con el elemento de area para formar dm.
        en: The next step is to combine sigma with the area element to form dm.

cross_checks:
- id: positive_mass_required
  affects:
  - xcm
  - R_cm
  when: "M <= 0"
  severity: error
  text:
    es: Una masa total no positiva invalida la lectura fisica del centro de masas.
    en: A non-positive total mass invalidates the physical reading of the center of mass.
`;export{e as default};
