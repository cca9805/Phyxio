const e=`version: 1
id: loop-vertical-y-condicion-de-contacto
leaf_id: loop-vertical-y-condicion-de-contacto
nombre: {es: "Loop vertical y condicion de contacto", en: "Vertical loop and contact condition"}
scope: leaf
result_blocks:
  summary: {title: {es: "Resumen del resultado", en: "Result summary"}, type: text}
  coherence: {title: {es: "Coherencia del resultado", en: "Result coherence"}, type: text}
  physical_reading: {title: {es: "Lectura fisica", en: "Physical reading"}, type: text}
  model_validity: {title: {es: "Validez del modelo", en: "Model validity"}, type: text}
  graph_reading: {title: {es: "Lectura del grafico", en: "Graph reading"}, type: text}
  likely_errors: {title: {es: "Errores probables", en: "Likely errors"}, type: text}
  next_step: {title: {es: "Siguiente paso", en: "Next step"}, type: text}
output_contract:
  sections: [summary, coherence, physical_reading, model_validity, graph_reading, likely_errors, next_step]
dependencies:
  formulas: [radial_general, punto_alto, velocidad_minima_alto, punto_bajo, velocidad_minima_bajo]
  magnitudes: [m, r, g, v, vT, vB, Nn, Frad, ac, E]
targets:
  Frad:
    summary_rules:
      - {id: Frad_sum_1, when: "Frad > 0", status: ok, text: {es: "Esto significa que existe una resultante hacia el centro y, por eso, la trayectoria puede curvarse en lugar de seguir recta.", en: "This means there is an inward resultant and, because of it, the path can bend instead of continuing straight."}}
      - {id: Frad_sum_2, when: "Frad >= m * g", status: ok, text: {es: "La demanda radial es comparable o superior al peso, de modo que el contacto del loop pasa a ser una condicion fisica relevante.", en: "The radial demand is comparable to or greater than the weight, so loop contact becomes a physically relevant condition."}}
    coherence_rules:
      - {id: Frad_coh_1, when: "Frad < 0", status: warning, text: {es: "Frad no puede ser menor que cero.", en: "Frad cannot be less than zero."}}
    physical_reading_rules:
      - {id: Frad_phy_1, when: "Frad > m * g", status: ok, text: {es: "La fuerza radial supera el peso y la pista debe completar la curvatura con una normal importante.", en: "The radial force exceeds the weight, so the track must complete the curvature with a significant normal force."}}
      - {id: Frad_phy_2, when: "Frad == m * g", status: warning, text: {es: "Caso limite: el peso por si solo puede sostener la curvatura critica en la cima.", en: "Limit case: weight alone can sustain the critical curvature at the top."}}
    model_validity_rules:
      - {id: Frad_mod_1, when: "Frad > 100000", status: warning, text: {es: "Valor extremo; revisar si el loop ideal sigue siendo valido o si hay cargas estructurales fuera de rango.", en: "Extreme value; check whether the ideal loop model remains valid or whether structural loads are out of range."}}
    graph_rules:
      - {id: Frad_gra_1, when: "Frad > 0", status: ok, text: {es: "Vector radial visible en el DCL.", en: "Radial vector visible in the FBD."}}
    likely_errors:
      - {id: Frad_err_1, when: "Frad < 0", status: error, text: {es: "Se ha invertido el sentido radial o se ha confundido \`Frad\` con una fuerza adicional en el DCL.", en: "The radial direction has been reversed or \`Frad\` has been confused with an extra force in the FBD."}}
    next_step_rules:
      - {id: Frad_nxt_1, when: "Frad > 0", status: ok, text: {es: "Calcular la normal correspondiente.", en: "Calculate the corresponding normal force."}}
  v:
    summary_rules:
      - {id: v_sum_1, when: "v > 0", status: ok, text: {es: "El cuerpo se mueve por el loop y esa rapidez fija cuanta curvatura debe sostenerse.", en: "The body moves through the loop, and that speed sets how much curvature must be sustained."}}
      - {id: v_sum_2, when: "v < (g * r)**0.5", status: warning, text: {es: "La rapidez queda por debajo del umbral critico de la cima, asi que el contacto puede perderse.", en: "The speed falls below the critical top threshold, so contact may be lost."}}
    coherence_rules:
      - {id: v_coh_1, when: "v <= 0", status: error, text: {es: "La rapidez no puede ser nula.", en: "Speed cannot be zero."}}
    physical_reading_rules:
      - {id: v_phy_1, when: "v > 50", status: warning, text: {es: "Rapidez muy alta: la curvatura exigida crece mucho y las cargas de contacto pueden dispararse.", en: "Very high speed: the required curvature grows strongly and contact loads may spike."}}
      - {id: v_phy_2, when: "v >= (g * r)**0.5", status: ok, text: {es: "La rapidez puede sostener la curvatura minima en la cima del loop.", en: "The speed can sustain the minimum curvature required at the top of the loop."}}
    model_validity_rules:
      - {id: v_mod_1, when: "v > 100", status: warning, text: {es: "Fuera del rango habitual; comprobar si el loop circular ideal sigue siendo una buena aproximacion.", en: "Outside the usual range; check whether the ideal circular loop is still a good approximation."}}
    graph_rules:
      - {id: v_gra_1, when: "v > 0", status: ok, text: {es: "Se representa el vector v tangente al loop.", en: "The vector v is tangent to the loop."}}
    likely_errors:
      - {id: v_err_1, when: "v <= 0", status: error, text: {es: "Revisar el signo de la rapidez o si se ha confundido una velocidad critica con una velocidad imposible.", en: "Check the sign of the speed or whether a critical speed has been confused with an impossible one."}}
    next_step_rules:
      - {id: v_nxt_1, when: "v > 0", status: ok, text: {es: "Comparar con la velocidad critica.", en: "Compare with the critical speed."}}
  m:
    summary_rules:
      - {id: m_sum_1, when: "m > 0", status: ok, text: {es: "La masa es coherente; no cambia las velocidades criticas, pero si escala las fuerzas de contacto.", en: "The mass is consistent; it does not change the critical speeds, but it does scale the contact forces."}}
    coherence_rules:
      - {id: m_coh_1, when: "m <= 0", status: error, text: {es: "La masa no puede ser nula.", en: "Mass cannot be zero."}}
    physical_reading_rules:
      - {id: m_phy_1, when: "m > 0", status: ok, text: {es: "La masa no afecta la velocidad critica.", en: "Mass does not affect the critical speed."}}
    model_validity_rules:
      - {id: m_mod_1, when: "m > 10000", status: warning, text: {es: "Masa fuera del rango habitual.", en: "Mass outside the usual range."}}
    graph_rules:
      - {id: m_gra_1, when: "m > 0", status: ok, text: {es: "La masa se refleja en el peso del DCL.", en: "The mass is reflected in the weight of the FBD."}}
    likely_errors:
      - {id: m_err_1, when: "m <= 0", status: error, text: {es: "Revisar el valor de la masa.", en: "Check the mass value."}}
    next_step_rules:
      - {id: m_nxt_1, when: "m > 0", status: ok, text: {es: "Calcular la fuerza normal.", en: "Calculate the normal force."}}
  r:
    summary_rules:
      - {id: r_sum_1, when: "r > 0", status: ok, text: {es: "El radio es coherente con un loop real y fija los umbrales de rapidez necesarios para sostener la curvatura.", en: "The radius is consistent with a real loop and sets the speed thresholds needed to sustain curvature."}}
    coherence_rules:
      - {id: r_coh_1, when: "r <= 0", status: error, text: {es: "El radio no puede ser nulo.", en: "Radius cannot be zero."}}
    physical_reading_rules:
      - {id: r_phy_1, when: "r > 0", status: ok, text: {es: "Mayor radio requiere mayor velocidad critica.", en: "A larger radius requires a higher critical speed."}}
    model_validity_rules:
      - {id: r_mod_1, when: "r > 100", status: warning, text: {es: "Radio fuera del rango habitual.", en: "Radius outside the usual range."}}
    graph_rules:
      - {id: r_gra_1, when: "r > 0", status: ok, text: {es: "El radio define el tamano del loop.", en: "The radius defines the loop size."}}
    likely_errors:
      - {id: r_err_1, when: "r <= 0", status: error, text: {es: "Revisar el valor del radio.", en: "Check the radius value."}}
    next_step_rules:
      - {id: r_nxt_1, when: "r > 0", status: ok, text: {es: "Calcular la velocidad critica.", en: "Calculate the critical speed."}}
  Nn:
    summary_rules:
      - {id: Nn_sum_1, when: "Nn >= 0", status: ok, text: {es: "Hay contacto con la pista, asi que la pista todavia puede empujar al cuerpo y sostener la trayectoria.", en: "There is contact with the track, so the track can still push the body and sustain the path."}}
      - {id: Nn_sum_2, when: "Nn < 0", status: error, text: {es: "El cuerpo pierde contacto porque la pista tendria que tirar de el para mantener el loop.", en: "The body loses contact because the track would have to pull it in order to maintain the loop."}}
    coherence_rules:
      - {id: Nn_coh_1, when: "Nn < 0", status: error, text: {es: "La normal no puede ser menor que cero.", en: "Normal force cannot be less than zero."}}
    physical_reading_rules:
      - {id: Nn_phy_1, when: "Nn == 0", status: warning, text: {es: "Caso limite de contacto: la pista deja de empujar, pero el cuerpo aun no se ha despegado.", en: "Borderline contact case: the track stops pushing, but the body has not detached yet."}}
    model_validity_rules:
      - {id: Nn_mod_1, when: "Nn > 100000", status: warning, text: {es: "Normal extrema; revisar si el modelo ideal oculta efectos estructurales o de confort.", en: "Extreme normal; check whether the ideal model is hiding structural or comfort effects."}}
    graph_rules:
      - {id: Nn_gra_1, when: "Nn > 0", status: ok, text: {es: "Se dibuja N perpendicular a la pista.", en: "N is drawn perpendicular to the track."}}
    likely_errors:
      - {id: Nn_err_1, when: "Nn < 0", status: error, text: {es: "Se han restado mal las fuerzas o se esta forzando el modelo de contacto mas alla de su dominio.", en: "Forces have been subtracted incorrectly or the contact model is being forced beyond its domain."}}
    next_step_rules:
      - {id: Nn_nxt_1, when: "Nn >= 0", status: ok, text: {es: "Verificar si el cuerpo soporta esa fuerza.", en: "Check whether the body can withstand that force."}}
  vT:
    summary_rules:
      - {id: vT_sum_1, when: "vT >= (g * r)**0.5", status: ok, text: {es: "La rapidez en la cima basta para sostener la curvatura y mantener el contacto.", en: "The speed at the top is enough to sustain curvature and keep contact."}}
      - {id: vT_sum_2, when: "vT < (g * r)**0.5", status: error, text: {es: "La rapidez en la cima no basta: el cuerpo pierde contacto arriba.", en: "The speed at the top is not enough: the body loses contact there."}}
    coherence_rules:
      - {id: vT_coh_1, when: "vT <= 0", status: error, text: {es: "vT no puede ser nula.", en: "vT cannot be zero."}}
    physical_reading_rules:
      - {id: vT_phy_1, when: "vT >= (g * r)**0.5", status: ok, text: {es: "Rapidez suficiente en el punto alto.", en: "Sufficient speed at the top."}}
    model_validity_rules:
      - {id: vT_mod_1, when: "vT > 50", status: warning, text: {es: "Velocidad fuera del rango habitual.", en: "Speed outside the usual range."}}
    graph_rules:
      - {id: vT_gra_1, when: "vT > 0", status: ok, text: {es: "Vector velocidad tangente arriba del loop.", en: "Velocity vector tangent at the top of the loop."}}
    likely_errors:
      - {id: vT_err_1, when: "vT < (g * r)**0.5", status: error, text: {es: "El cuerpo se despega de la pista.", en: "The body detaches from the track."}}
    next_step_rules:
      - {id: vT_nxt_1, when: "vT > 0", status: ok, text: {es: "Calcular la normal en el punto alto.", en: "Calculate the normal force at the top."}}
  vB:
    summary_rules:
      - {id: vB_sum_1, when: "vB >= (5 * g * r)**0.5", status: ok, text: {es: "La rapidez de entrada basta para llegar a la cima sin perder contacto.", en: "The entry speed is enough to reach the top without losing contact."}}
      - {id: vB_sum_2, when: "vB < (5 * g * r)**0.5", status: error, text: {es: "La rapidez de entrada es insuficiente y el cuerpo no completara el loop ideal.", en: "The entry speed is insufficient, so the body will not complete the ideal loop."}}
    coherence_rules:
      - {id: vB_coh_1, when: "vB <= 0", status: error, text: {es: "vB no puede ser nula.", en: "vB cannot be zero."}}
    physical_reading_rules:
      - {id: vB_phy_1, when: "vB >= (5 * g * r)**0.5", status: ok, text: {es: "Energia suficiente para alcanzar el punto alto.", en: "Enough energy to reach the top."}}
    model_validity_rules:
      - {id: vB_mod_1, when: "vB > 100", status: warning, text: {es: "Velocidad fuera del rango habitual.", en: "Speed outside the usual range."}}
    graph_rules:
      - {id: vB_gra_1, when: "vB > 0", status: ok, text: {es: "Vector velocidad tangente en la base del loop.", en: "Velocity vector tangent at the base of the loop."}}
    likely_errors:
      - {id: vB_err_1, when: "vB < (5 * g * r)**0.5", status: error, text: {es: "El cuerpo no llega arriba.", en: "The body does not reach the top."}}
    next_step_rules:
      - {id: vB_nxt_1, when: "vB >= (5 * g * r)**0.5", status: ok, text: {es: "Calcular la normal en el punto bajo.", en: "Calculate the normal force at the bottom."}}
`;export{e as default};
