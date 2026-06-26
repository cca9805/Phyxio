const e=`version: 1\r
id: interpretacion-energia-en-rodadura\r
leaf_id: energia-en-rodadura\r
nombre:\r
  es: Interpretacion de energia en rodadura\r
  en: Interpretation of energy in rolling\r
scope:\r
  es: reparto energetico entre traslacion, rotacion, condicion de contacto y validez de rodadura\r
  en: energy split between translation, rotation, contact condition, and rolling validity\r
dependencies:\r
  magnitudes: [K_total, E_total, m, v_cm, I, omega, R, a_cm, alpha, g, phi, theta, tau]\r
  formulas: [energia_total_rodadura, condicion_rodadura_energia, aceleracion_cm_rodadura, energia_mecanica_total_rodadura]\r
output_contract:\r
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]\r
result_blocks:\r
  summary: { title: { es: Resumen, en: Summary } }\r
  physical_reading: { title: { es: Lectura fisica, en: Physical reading } }\r
  coherence: { title: { es: Coherencia fisica, en: Physical coherence } }\r
  model_validity: { title: { es: Validez del modelo, en: Model validity } }\r
  graph_reading: { title: { es: Lectura del grafico, en: Graph reading } }\r
  likely_errors: { title: { es: Errores comunes, en: Common errors } }\r
  next_step: { title: { es: Siguiente paso, en: Next step } }\r
targets:\r
  K_total:\r
    summary_rules:\r
      - id: ktotal_summary\r
        when: 'true'\r
        status: info\r
        text: { es: "K_total indica la energia cinetica que se reparte entre avance del centro de masas y giro del cuerpo.", en: "K_total indicates the kinetic energy split between center-of-mass advance and body spin." }\r
    coherence_rules:\r
      - id: ktotal_coherence\r
        when: K_total >= 0\r
        status: ok\r
        text: { es: "K_total debe ser no negativa y debe igualar la suma de las dos contribuciones.", en: "K_total must be non-negative and equal the sum of the two contributions." }\r
    physical_reading_rules:\r
      - id: ktotal_physical\r
        when: 'true'\r
        status: info\r
        text: { es: "Si I aumenta a igual v_cm, mas energia queda asociada al giro y cambia el reparto fisico.", en: "If I increases at equal v_cm, more energy is associated with spin and the physical split changes." }\r
    model_validity_rules:\r
      - id: ktotal_validity\r
        when: 'true'\r
        status: info\r
        text: { es: "La lectura es valida si el cuerpo es rigido y el contacto no desliza.", en: "The reading is valid if the body is rigid and the contact does not slip." }\r
    graph_rules:\r
      - id: ktotal_graph\r
        when: 'true'\r
        status: info\r
        text: { es: "En el grafico, la barra total debe sumar traslacion y rotacion.", en: "On the graph, the total bar must add translation and rotation." }\r
    likely_errors:\r
      - id: ktotal_error\r
        when: 'true'\r
        status: info\r
        text: { es: "Error conceptual comun - usar solo energia traslacional y olvidar la parte rotacional.", en: "Common conceptual error - using only translational energy and forgetting the rotational part." }\r
    next_step_rules:\r
      - id: ktotal_next\r
        when: 'true'\r
        status: info\r
        text: { es: "Comprueba la condicion v_cm = R*omega antes de imponer rodadura pura.", en: "Check v_cm = R*omega before imposing pure rolling." }\r
  E_total:\r
    summary_rules:\r
      - id: etotal_summary\r
        when: 'true'\r
        status: info\r
        text: { es: "E_total describe el balance mecanico completo cuando se añade energia potencial o una referencia externa.", en: "E_total describes the full mechanical balance when potential energy or an external reference is added." }\r
    coherence_rules:\r
      - id: etotal_coherence\r
        when: 'true'\r
        status: ok\r
        text: { es: "E_total no debe confundirse con K_total si hay altura o energia potencial.", en: "E_total must not be confused with K_total when height or potential energy is present." }\r
    physical_reading_rules:\r
      - id: etotal_physical\r
        when: 'true'\r
        status: info\r
        text: { es: "En una rampa, E_total explica de donde sale el aumento de energia de rodadura.", en: "On an incline, E_total explains where the increase in rolling energy comes from." }\r
    model_validity_rules:\r
      - id: etotal_validity\r
        when: 'true'\r
        status: info\r
        text: { es: "Solo se conserva si no hay perdidas por deslizamiento, deformacion o rozamiento disipativo.", en: "It is conserved only if there are no losses by slipping, deformation, or dissipative friction." }\r
    graph_rules:\r
      - id: etotal_graph\r
        when: 'true'\r
        status: info\r
        text: { es: "El grafico debe mostrar si la energia disponible se reparte o se disipa.", en: "The graph should show whether available energy is split or dissipated." }\r
    likely_errors:\r
      - id: etotal_error\r
        when: 'true'\r
        status: info\r
        text: { es: "Error conceptual comun - llamar energia total a una suma que solo incluye cinetica.", en: "Common conceptual error - calling a kinetic-only sum total energy." }\r
    next_step_rules:\r
      - id: etotal_next\r
        when: 'true'\r
        status: info\r
        text: { es: "Si hay rampa, identifica g, phi y la altura efectiva antes del balance.", en: "If there is an incline, identify g, phi, and effective height before the balance." }\r
  R:\r
    summary_rules:\r
      - id: r_summary\r
        when: 'true'\r
        status: info\r
        text: { es: "R indica el radio que conecta avance y giro en la condicion de rodadura.", en: "R indicates the radius connecting advance and spin in the rolling condition." }\r
    coherence_rules:\r
      - id: r_coherence\r
        when: R > 0\r
        status: ok\r
        text: { es: "R debe ser positivo y pertenecer al cuerpo que realmente contacta.", en: "R must be positive and belong to the body that actually contacts." }\r
    physical_reading_rules:\r
      - id: r_physical\r
        when: 'true'\r
        status: info\r
        text: { es: "Cambiar R altera la relacion entre v_cm, omega y a_cm.", en: "Changing R alters the relation between v_cm, omega, and a_cm." }\r
    model_validity_rules:\r
      - id: r_validity\r
        when: 'true'\r
        status: info\r
        text: { es: "Si el radio efectivo cambia por deformacion, el modelo ideal falla.", en: "If effective radius changes by deformation, the ideal model fails." }\r
    graph_rules:\r
      - id: r_graph\r
        when: 'true'\r
        status: info\r
        text: { es: "En Coord, R cambia la pendiente de las condiciones de rodadura.", en: "In Coord, R changes the slope of rolling constraints." }\r
    likely_errors:\r
      - id: r_error\r
        when: 'true'\r
        status: info\r
        text: { es: "Error comun - usar diametro en lugar de radio.", en: "Common error - using diameter instead of radius." }\r
    next_step_rules:\r
      - id: r_next\r
        when: 'true'\r
        status: info\r
        text: { es: "Verifica si el dato dado es radio, diametro o radio efectivo.", en: "Check whether the datum is radius, diameter, or effective radius." }\r
  a_cm:\r
    summary_rules:\r
      - id: acm_summary\r
        when: 'true'\r
        status: info\r
        text: { es: "a_cm indica como cambia la velocidad del centro de masas durante la rodadura.", en: "a_cm indicates how center-of-mass velocity changes during rolling." }\r
    coherence_rules:\r
      - id: acm_coherence\r
        when: 'true'\r
        status: ok\r
        text: { es: "a_cm debe ser coherente con R y alpha si no hay deslizamiento.", en: "a_cm must be coherent with R and alpha if there is no slipping." }\r
    physical_reading_rules:\r
      - id: acm_physical\r
        when: 'true'\r
        status: info\r
        text: { es: "Menor a_cm en una rampa suele indicar que mas energia se dedica al giro.", en: "Smaller a_cm on an incline often indicates that more energy goes into spin." }\r
    model_validity_rules:\r
      - id: acm_validity\r
        when: 'true'\r
        status: info\r
        text: { es: "La relacion con alpha exige contacto sin deslizamiento.", en: "The relation with alpha requires contact without slipping." }\r
    graph_rules:\r
      - id: acm_graph\r
        when: 'true'\r
        status: info\r
        text: { es: "El grafico debe hacer visible si a_cm acompaña a alpha.", en: "The graph should make visible whether a_cm follows alpha." }\r
    likely_errors:\r
      - id: acm_error\r
        when: 'true'\r
        status: info\r
        text: { es: "Error comun - tratar a_cm como g*sin(phi) aunque exista rotacion.", en: "Common error - treating a_cm as g*sin(phi) even when rotation exists." }\r
    next_step_rules:\r
      - id: acm_next\r
        when: 'true'\r
        status: info\r
        text: { es: "Compara a_cm con el caso de deslizamiento sin rotacion.", en: "Compare a_cm with the sliding-without-rotation case." }\r
  omega:\r
    summary_rules:\r
      - id: omega_summary\r
        when: 'true'\r
        status: info\r
        text: { es: "Omega fija la rapidez de giro que alimenta la energia rotacional.", en: "Omega sets the spin rate feeding rotational energy." }\r
    coherence_rules:\r
      - id: omega_coherence\r
        when: 'true'\r
        status: ok\r
        text: { es: "Omega debe estar en rad/s y concordar con v_cm/R.", en: "Omega must be in rad/s and agree with v_cm/R." }\r
    physical_reading_rules:\r
      - id: omega_physical\r
        when: 'true'\r
        status: info\r
        text: { es: "A igual I, mayor omega aumenta la contribucion rotacional.", en: "At equal I, larger omega increases the rotational contribution." }\r
    model_validity_rules:\r
      - id: omega_validity\r
        when: 'true'\r
        status: info\r
        text: { es: "Una omega comun exige cuerpo rigido.", en: "A common omega requires a rigid body." }\r
    graph_rules:\r
      - id: omega_graph\r
        when: 'true'\r
        status: info\r
        text: { es: "La curva de energia rotacional crece con omega al cuadrado.", en: "The rotational-energy curve grows with omega squared." }\r
    likely_errors:\r
      - id: omega_error\r
        when: 'true'\r
        status: info\r
        text: { es: "Error comun - usar rpm directamente.", en: "Common error - using rpm directly." }\r
    next_step_rules:\r
      - id: omega_next\r
        when: 'true'\r
        status: info\r
        text: { es: "Convierte unidades y verifica la condicion de contacto.", en: "Convert units and verify the contact condition." }\r
`;export{e as default};
