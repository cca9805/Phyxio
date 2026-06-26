const e=`version: 2\r
id: interpretacion-energia-potencial-elastica\r
leaf_id: energia-potencial-elastica\r
nombre:\r
  es: Interpretacion de energia potencial elastica\r
  en: Interpretation of elastic potential energy\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: trabajo-y-energia\r
  parent_id: energia-potencial\r
  ruta_relativa: fisica-clasica/mecanica/trabajo-y-energia/energia-potencial/energia-potencial-elastica\r
dependencies:\r
  formulas: [ potencial_elastico_basico, variacion_potencial_elastico, trabajo_fuerza_elastica ]\r
  magnitudes: [ Ue, k, x, xi, xf, dUe, We ]\r
output_contract:\r
  sections: [ summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step ]\r
result_blocks:\r
  summary: { title: { es: Resumen, en: Summary } }\r
  physical_reading: { title: { es: Lectura fisica, en: Physical reading } }\r
  coherence: { title: { es: Coherencia, en: Coherence } }\r
  model_validity: { title: { es: Validez del modelo, en: Model validity } }\r
  graph_reading: { title: { es: Lectura grafica, en: Graph reading } }\r
  likely_errors: { title: { es: Errores probables, en: Likely errors } }\r
  next_step: { title: { es: Siguiente paso, en: Next step } }\r
targets:\r
  Ue:\r
    summary_rules:\r
    - { id: ue_summary, when: "true", status: info, text: { es: "Ue resume la energia almacenada por la deformacion elastica del estado.", en: "Ue summarizes the energy stored by the elastic deformation of the state." } }\r
    physical_reading_rules:\r
    - { id: ue_reading, when: "true", status: info, text: { es: "Una Ue alta indica una deformacion alejada de la longitud natural.", en: "A high Ue indicates a deformation far from the natural length." } }\r
    coherence_rules:\r
    - { id: ue_coherence, when: "true", status: ok, text: { es: "Ue debe leerse junto con k y x en el mismo modelo lineal.", en: "Ue must be read together with k and x in the same linear model." } }\r
    model_validity_rules:\r
    - { id: ue_validity, when: "true", status: info, text: { es: "Si el resorte deja de ser lineal, Ue = 1/2 kx^2 deja de ser fiable.", en: "If the spring stops being linear, Ue = 1/2 kx^2 is no longer reliable." } }\r
    graph_rules:\r
    - { id: ue_graph, when: "true", status: info, text: { es: "En Coord, Ue(x) debe verse como una parabola creciente.", en: "In Coord, Ue(x) should look like a growing parabola." } }\r
    likely_errors:\r
    - { id: ue_error, when: "true", status: warning, text: { es: "Error frecuente: usar x medido desde otro cero de referencia.", en: "Common mistake: using x measured from another reference zero." } }\r
    next_step_rules:\r
    - { id: ue_next, when: "true", status: info, text: { es: "Decide si el problema pide Ue absoluta o una variacion dUe.", en: "Decide whether the problem asks for absolute Ue or a dUe variation." } }\r
  k:\r
    summary_rules:\r
    - { id: k_summary, when: "true", status: info, text: { es: "k es el parametro que fija cuanto crece Ue con la deformacion.", en: "k is the parameter that sets how quickly Ue grows with deformation." } }\r
    physical_reading_rules:\r
    - { id: k_reading, when: "true", status: info, text: { es: "Con mayor k, la misma deformacion almacena mas energia.", en: "With larger k, the same deformation stores more energy." } }\r
    coherence_rules:\r
    - { id: k_coherence, when: "true", status: ok, text: { es: "k debe ser positiva para que el modelo sea fisicamente estable.", en: "k must be positive for the model to be physically stable." } }\r
    model_validity_rules:\r
    - { id: k_validity, when: "true", status: info, text: { es: "Una k variable suele indicar no linealidad o cambio de sistema.", en: "A variable k usually indicates nonlinearity or a change of system." } }\r
    graph_rules:\r
    - { id: k_graph, when: "true", status: info, text: { es: "k solo cambia la abertura de la parabola Ue(x).", en: "k only changes the opening of the Ue(x) parabola." } }\r
    likely_errors:\r
    - { id: k_error, when: "true", status: warning, text: { es: "Error frecuente: confundir rigidez con energia almacenada.", en: "Common mistake: confusing stiffness with stored energy." } }\r
    next_step_rules:\r
    - { id: k_next, when: "true", status: info, text: { es: "Si no conoces k, revisa si el enunciado permite despejarla.", en: "If k is unknown, check whether the statement allows solving for it." } }\r
  x:\r
    summary_rules:\r
    - { id: x_summary, when: "true", status: info, text: { es: "x es la variable de estado que controla la energia por el cuadrado de la deformacion.", en: "x is the state variable that controls energy through the square of deformation." } }\r
    physical_reading_rules:\r
    - { id: x_reading, when: "true", status: info, text: { es: "Duplicar x cuadruplica Ue en el modelo ideal.", en: "Doubling x quadruples Ue in the ideal model." } }\r
    coherence_rules:\r
    - { id: x_coherence, when: "true", status: ok, text: { es: "x debe medirse respecto a la longitud natural o a una referencia fija.", en: "x must be measured from the natural length or a fixed reference." } }\r
    model_validity_rules:\r
    - { id: x_validity, when: "true", status: info, text: { es: "Si x es muy grande, comprueba si el régimen lineal sigue siendo valido.", en: "If x is very large, check whether the linear regime is still valid." } }\r
    graph_rules:\r
    - { id: x_graph, when: "true", status: info, text: { es: "En la grafica, x determina la posicion horizontal del punto evaluado.", en: "On the graph, x determines the horizontal position of the evaluated point." } }\r
    likely_errors:\r
    - { id: x_error, when: "true", status: warning, text: { es: "Error frecuente: tomar x como desplazamiento global del cuerpo.", en: "Common mistake: taking x as the body's global displacement." } }\r
    next_step_rules:\r
    - { id: x_next, when: "true", status: info, text: { es: "Antes de calcular, fija el cero de deformacion.", en: "Before calculating, fix the zero of deformation." } }\r
  xi:\r
    summary_rules:\r
    - { id: xi_summary, when: "true", status: info, text: { es: "xi define el estado inicial de deformacion para comparar energia.", en: "xi defines the initial deformation state for energy comparison." } }\r
    physical_reading_rules:\r
    - { id: xi_reading, when: "true", status: info, text: { es: "xi fija el punto de partida del sistema elastico.", en: "xi sets the spring system starting point." } }\r
    coherence_rules:\r
    - { id: xi_coherence, when: "true", status: ok, text: { es: "xi debe usar la misma referencia que xf.", en: "xi must use the same reference as xf." } }\r
    model_validity_rules:\r
    - { id: xi_validity, when: "true", status: info, text: { es: "Si cambia la referencia, la comparacion entre estados deja de ser valida.", en: "If the reference changes, state comparison is no longer valid." } }\r
    graph_rules:\r
    - { id: xi_graph, when: "true", status: info, text: { es: "En la grafica, xi marca el estado inicial sobre el eje x.", en: "On the graph, xi marks the initial state on the x-axis." } }\r
    likely_errors:\r
    - { id: xi_error, when: "true", status: warning, text: { es: "Error frecuente: elegir xi con un cero distinto al usado en xf.", en: "Common mistake: defining xi with a different zero than xf." } }\r
    next_step_rules:\r
    - { id: xi_next, when: "true", status: info, text: { es: "Compara xi y xf antes de interpretar el signo de dUe.", en: "Compare xi and xf before interpreting the sign of dUe." } }\r
  xf:\r
    summary_rules:\r
    - { id: xf_summary, when: "true", status: info, text: { es: "xf define el estado final de deformacion del proceso.", en: "xf defines the final deformation state of the process." } }\r
    physical_reading_rules:\r
    - { id: xf_reading, when: "true", status: info, text: { es: "xf determina si el resorte termina mas o menos deformado que al inicio.", en: "xf determines whether the spring ends more or less deformed than at start." } }\r
    coherence_rules:\r
    - { id: xf_coherence, when: "true", status: ok, text: { es: "xf debe compararse siempre contra xi en la misma referencia.", en: "xf must always be compared against xi with the same reference." } }\r
    model_validity_rules:\r
    - { id: xf_validity, when: "true", status: info, text: { es: "Si el estado final sale del regimen lineal, la lectura energetica ideal se degrada.", en: "If the final state leaves the linear regime, ideal energy reading degrades." } }\r
    graph_rules:\r
    - { id: xf_graph, when: "true", status: info, text: { es: "En Coord, xf ubica el punto final sobre la parabola Ue(x).", en: "In Coord, xf locates the final point on the Ue(x) parabola." } }\r
    likely_errors:\r
    - { id: xf_error, when: "true", status: warning, text: { es: "Error frecuente: interpretar xf como desplazamiento absoluto y no como deformacion.", en: "Common mistake: reading xf as absolute displacement rather than deformation." } }\r
    next_step_rules:\r
    - { id: xf_next, when: "true", status: info, text: { es: "Usa xf junto con xi para decidir si dUe aumenta o disminuye.", en: "Use xf with xi to decide whether dUe increases or decreases." } }\r
  dUe:\r
    summary_rules:\r
    - { id: due_summary, when: "true", status: info, text: { es: "dUe mide el cambio de energia elastica entre dos estados.", en: "dUe measures the change in elastic energy between two states." } }\r
    physical_reading_rules:\r
    - { id: due_reading, when: "true", status: info, text: { es: "dUe positiva indica mayor energia almacenada al final; negativa indica liberacion.", en: "Positive dUe means more stored energy at the end; negative means release." } }\r
    coherence_rules:\r
    - { id: due_coherence, when: "true", status: ok, text: { es: "dUe debe ser coherente con la comparacion entre xf y xi.", en: "dUe must be coherent with the xf versus xi comparison." } }\r
    model_validity_rules:\r
    - { id: due_validity, when: "true", status: info, text: { es: "Valida solo si ambos estados pertenecen al mismo resorte y referencia.", en: "Valid only if both states belong to the same spring and reference." } }\r
    graph_rules:\r
    - { id: due_graph, when: "true", status: info, text: { es: "dUe es la diferencia vertical entre Ue(xf) y Ue(xi) en la parabola.", en: "dUe is the vertical difference between Ue(xf) and Ue(xi) on the parabola." } }\r
    likely_errors:\r
    - { id: due_error, when: "true", status: warning, text: { es: "Error frecuente: tratar dUe como energia absoluta en lugar de variacion.", en: "Common mistake: treating dUe as absolute energy instead of variation." } }\r
    next_step_rules:\r
    - { id: due_next, when: "true", status: info, text: { es: "Tras hallar dUe, contrasta su signo con We para verificar coherencia.", en: "After finding dUe, contrast its sign with We to verify coherence." } }\r
  We:\r
    summary_rules:\r
    - { id: we_summary, when: "true", status: info, text: { es: "We mide la energia transferida por la fuerza elastica.", en: "We measures energy transferred by the elastic force." } }\r
    physical_reading_rules:\r
    - { id: we_reading, when: "true", status: info, text: { es: "We positiva o negativa depende de si el resorte entrega o absorbe energia.", en: "We positive or negative depends on whether the spring delivers or absorbs energy." } }\r
    coherence_rules:\r
    - { id: we_coherence, when: "true", status: ok, text: { es: "En el modelo ideal, We debe cumplir We = -dUe.", en: "In the ideal model, We must satisfy We = -dUe." } }\r
    model_validity_rules:\r
    - { id: we_validity, when: "true", status: info, text: { es: "La lectura directa de We usa la convencion de energia potencial del resorte ideal.", en: "Direct We reading uses the ideal spring potential-energy convention." } }\r
    graph_rules:\r
    - { id: we_graph, when: "true", status: info, text: { es: "Graficamente, We se interpreta con signo opuesto al cambio de Ue entre estados.", en: "Graphically, We is read with opposite sign to Ue change between states." } }\r
    likely_errors:\r
    - { id: we_error, when: "true", status: warning, text: { es: "Error frecuente: fijar el signo de We sin analizar el proceso fisico.", en: "Common mistake: fixing We sign without analyzing the physical process." } }\r
    next_step_rules:\r
    - { id: we_next, when: "true", status: info, text: { es: "Usa We para cerrar el balance energetico con el resto de magnitudes del sistema.", en: "Use We to close the energy balance with the rest of system magnitudes." } }\r
`;export{e as default};
