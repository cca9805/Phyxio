const e=`version: 2
id: interpretacion-colisiones-2d
leaf_id: colisiones-2d
nombre:
  es: Interpretacion de Colisiones 2d
  en: Interpretation of 2D Collisions
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: cantidad-de-movimiento
  parent_id: colisiones
  ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-2d
dependencies:
  formulas: [vec, x, y, v1fx, v1fy, v2fx, v2fy, K, x_solve_v1fx, y_solve_v1fy, v1ix, v1iy, v2ix, v2iy, magnitude_v1f, angle_theta1f, ki_system, kf_system, energy_loss]
  magnitudes: [m1, m2, v1i, v2i, v1f, v2f, v1ix, v1iy, v2ix, v2iy, v1fx, v1fy, v2fx, v2fy, theta1i, theta2i, theta1f, theta2f, Ki, Kf, DeltaK, vec, x, y, energy_loss]
output_contract:
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
result_blocks:
  summary: { title: { es: Resumen fisico, en: Physical summary } }
  physical_reading: { title: { es: Lectura fisica, en: Physical reading } }
  coherence: { title: { es: Coherencia, en: Coherence } }
  model_validity: { title: { es: Validez del modelo, en: Model validity } }
  graph_reading: { title: { es: Lectura grafica, en: Graph reading } }
  likely_errors: { title: { es: Errores probables, en: Likely errors } }
  next_step: { title: { es: Siguiente paso, en: Next step } }
targets:
  m1:
    summary_rules: [{ id: m1_s, when: 'true', status: info, text: { es: "La masa [[m1]] dicta la inercia del sistema.", en: "Mass [[m1]] dictates system inertia." } }]
    physical_reading_rules: [{ id: m1_p, when: 'true', status: info, text: { es: "Un aumento en [[m1]] provoca una menor deflexion tras el impacto.", en: "An increase in [[m1]] causes less deflection after impact." } }]
    coherence_rules: [{ id: m1_c, when: 'true', status: ok, text: { es: "Masa positiva.", en: "Positive mass." } }]
    model_validity_rules: [{ id: m1_v, when: 'true', status: ok, text: { es: "Cuerpo rigido.", en: "Rigid body." } }]
    graph_rules: [{ id: m1_g, when: 'true', status: info, text: { es: "Tamaño del vector.", en: "Vector size." } }]
    likely_errors: [{ id: m1_e, when: 'true', status: warning, text: { es: "Confundir masas.", en: "Confusing masses." } }]
    next_step_rules: [{ id: m1_n, when: 'true', status: info, text: { es: "Verificar momento.", en: "Verify momentum." } }]
  m2:
    summary_rules: [{ id: m2_s, when: 'true', status: info, text: { es: "Masa del blanco [[m2]].", en: "Target mass [[m2]]." } }]
    physical_reading_rules: [{ id: m2_p, when: 'true', status: info, text: { es: "Si [[m2]] es muy grande, el proyectil rebota agresivamente.", en: "If [[m2]] is very large, the projectile bounces aggressively." } }]
    coherence_rules: [{ id: m2_c, when: 'true', status: ok, text: { es: "Positiva.", en: "Positive." } }]
    model_validity_rules: [{ id: m2_v, when: 'true', status: ok, text: { es: "Puntual.", en: "Point-like." } }]
    graph_rules: [{ id: m2_g, when: 'true', status: info, text: { es: "Visualizacion.", en: "Visualization." } }]
    likely_errors: [{ id: m2_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: m2_n, when: 'true', status: info, text: { es: "Siguiente.", en: "Next." } }]
  v1i:
    summary_rules: [{ id: v1i_s, when: 'true', status: info, text: { es: "Velocidad inicial [[v1i]].", en: "Initial velocity [[v1i]]." } }]
    physical_reading_rules: [{ id: v1i_p, when: 'true', status: info, text: { es: "La direccion de [[v1i]] determina el eje de impacto primario.", en: "The direction of [[v1i]] determines the primary impact axis." } }]
    coherence_rules: [{ id: v1i_c, when: 'true', status: ok, text: { es: "Vectorial.", en: "Vectorial." } }]
    model_validity_rules: [{ id: v1i_v, when: 'true', status: ok, text: { es: "Cinematica.", en: "Kinematics." } }]
    graph_rules: [{ id: v1i_g, when: 'true', status: info, text: { es: "Flecha.", en: "Arrow." } }]
    likely_errors: [{ id: v1i_e, when: 'true', status: warning, text: { es: "Signo.", en: "Sign." } }]
    next_step_rules: [{ id: v1i_n, when: 'true', status: info, text: { es: "Proyeccion.", en: "Projection." } }]
  v2i:
    summary_rules: [{ id: v2i_s, when: 'true', status: info, text: { es: "Entrada de 2 [[v2i]].", en: "Input of 2 [[v2i]]." } }]
    physical_reading_rules: [{ id: v2i_p, when: 'true', status: info, text: { es: "Si [[v2i]] es nula, el blanco esta en reposo.", en: "If [[v2i]] is zero, the target is at rest." } }]
    coherence_rules: [{ id: v2i_c, when: 'true', status: ok, text: { es: "Valido.", en: "Valid." } }]
    model_validity_rules: [{ id: v2i_v, when: 'true', status: ok, text: { es: "Valido.", en: "Valid." } }]
    graph_rules: [{ id: v2i_g, when: 'true', status: info, text: { es: "Flecha.", en: "Arrow." } }]
    likely_errors: [{ id: v2i_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: v2i_n, when: 'true', status: info, text: { es: "Proyectar.", en: "Project." } }]
  v1f:
    summary_rules: [{ id: v1f_s, when: 'true', status: success, text: { es: "Salida de 1 [[v1f]].", en: "Exit of 1 [[v1f]]." } }]
    physical_reading_rules: [{ id: v1f_p, when: 'true', status: info, text: { es: "El modulo de [[v1f]] disminuye si hay perdidas energeticas.", en: "The magnitude of [[v1f]] decreases if there are energy losses." } }]
    coherence_rules: [{ id: v1f_c, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    model_validity_rules: [{ id: v1f_v, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    graph_rules: [{ id: v1f_g, when: 'true', status: info, text: { es: "Flecha.", en: "Arrow." } }]
    likely_errors: [{ id: v1f_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: v1f_n, when: 'true', status: info, text: { es: "Balance.", en: "Balance." } }]
  v2f:
    summary_rules: [{ id: v2f_s, when: 'true', status: success, text: { es: "Salida de 2 [[v2f]].", en: "Exit of 2 [[v2f]]." } }]
    physical_reading_rules: [{ id: v2f_p, when: 'true', status: info, text: { es: "Representa el impulso ganado por el blanco.", en: "Represents the impulse gained by the target." } }]
    coherence_rules: [{ id: v2f_c, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    model_validity_rules: [{ id: v2f_v, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    graph_rules: [{ id: v2f_g, when: 'true', status: info, text: { es: "Flecha.", en: "Arrow." } }]
    likely_errors: [{ id: v2f_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: v2f_n, when: 'true', status: info, text: { es: "Balance.", en: "Balance." } }]
  v1ix:
    summary_rules: [{ id: v1ix_s, when: 'true', status: info, text: { es: "Componente X [[v1ix]].", en: "X component [[v1ix]]." } }]
    physical_reading_rules: [{ id: v1ix_p, when: 'true', status: info, text: { es: "Genera el avance horizontal del sistema.", en: "Generates the horizontal progress of the system." } }]
    coherence_rules: [{ id: v1ix_c, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    model_validity_rules: [{ id: v1ix_v, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    graph_rules: [{ id: v1ix_g, when: 'true', status: info, text: { es: "Sombra.", en: "Shadow." } }]
    likely_errors: [{ id: v1ix_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: v1ix_n, when: 'true', status: info, text: { es: "Balance.", en: "Balance." } }]
  v1iy:
    summary_rules: [{ id: v1iy_s, when: 'true', status: info, text: { es: "Componente Y [[v1iy]].", en: "Y component [[v1iy]]." } }]
    physical_reading_rules: [{ id: v1iy_p, when: 'true', status: info, text: { es: "Provoca la desviacion transversal del choque.", en: "Causes the transversal deflection of the collision." } }]
    coherence_rules: [{ id: v1iy_c, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    model_validity_rules: [{ id: v1iy_v, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    graph_rules: [{ id: v1iy_g, when: 'true', status: info, text: { es: "Sombra.", en: "Shadow." } }]
    likely_errors: [{ id: v1iy_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: v1iy_n, when: 'true', status: info, text: { es: "Balance.", en: "Balance." } }]
  v2ix:
    summary_rules: [{ id: v2ix_s, when: 'true', status: info, text: { es: "X de 2 [[v2ix]].", en: "X of 2 [[v2ix]]." } }]
    physical_reading_rules: [{ id: v2ix_p, when: 'true', status: info, text: { es: "Aporta momento lineal al eje X inicial.", en: "Contributes linear momentum to the initial X axis." } }]
    coherence_rules: [{ id: v2ix_c, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    model_validity_rules: [{ id: v2ix_v, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    graph_rules: [{ id: v2ix_g, when: 'true', status: info, text: { es: "Sombra.", en: "Shadow." } }]
    likely_errors: [{ id: v2ix_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: v2ix_n, when: 'true', status: info, text: { es: "Siguiente.", en: "Next." } }]
  v2iy:
    summary_rules: [{ id: v2iy_s, when: 'true', status: info, text: { es: "Y de 2 [[v2iy]].", en: "Y of 2 [[v2iy]]." } }]
    physical_reading_rules: [{ id: v2iy_p, when: 'true', status: info, text: { es: "Aporta momento transversal al sistema.", en: "Contributes transversal momentum to the system." } }]
    coherence_rules: [{ id: v2iy_c, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    model_validity_rules: [{ id: v2iy_v, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    graph_rules: [{ id: v2iy_g, when: 'true', status: info, text: { es: "Sombra.", en: "Shadow." } }]
    likely_errors: [{ id: v2iy_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: v2iy_n, when: 'true', status: info, text: { es: "Siguiente.", en: "Next." } }]
  v1fx:
    summary_rules: [{ id: v1fx_s, when: 'true', status: info, text: { es: "X final [[v1fx]].", en: "Final X [[v1fx]]." } }]
    physical_reading_rules: [{ id: v1fx_p, when: 'true', status: info, text: { es: "El valor de [[v1fx]] indica si el proyectil atraviesa al blanco.", en: "The value of [[v1fx]] indicates if the projectile passes through the target." } }]
    coherence_rules: [{ id: v1fx_c, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    model_validity_rules: [{ id: v1fx_v, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    graph_rules: [{ id: v1fx_g, when: 'true', status: info, text: { es: "Sombra.", en: "Shadow." } }]
    likely_errors: [{ id: v1fx_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: v1fx_n, when: 'true', status: info, text: { es: "Siguiente.", en: "Next." } }]
  v1fy:
    summary_rules: [{ id: v1fy_s, when: 'true', status: info, text: { es: "Y final [[v1fy]].", en: "Final Y [[v1fy]]." } }]
    physical_reading_rules: [{ id: v1fy_p, when: 'true', status: info, text: { es: "Cuantifica el rebote lateral tras la interaccion.", en: "Quantifies the lateral bounce after interaction." } }]
    coherence_rules: [{ id: v1fy_c, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    model_validity_rules: [{ id: v1fy_v, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    graph_rules: [{ id: v1fy_g, when: 'true', status: info, text: { es: "Sombra.", en: "Shadow." } }]
    likely_errors: [{ id: v1fy_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: v1fy_n, when: 'true', status: info, text: { es: "Siguiente.", en: "Next." } }]
  v2fx:
    summary_rules: [{ id: v2fx_s, when: 'true', status: info, text: { es: "X final de 2 [[v2fx]].", en: "Final X of 2 [[v2fx]]." } }]
    physical_reading_rules: [{ id: v2fx_p, when: 'true', status: info, text: { es: "Muestra el avance del blanco tras el choque.", en: "Shows target progress after impact." } }]
    coherence_rules: [{ id: v2fx_c, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    model_validity_rules: [{ id: v2fx_v, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    graph_rules: [{ id: v2fx_g, when: 'true', status: info, text: { es: "Sombra.", en: "Shadow." } }]
    likely_errors: [{ id: v2fx_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: v2fx_n, when: 'true', status: info, text: { es: "Siguiente.", en: "Next." } }]
  v2fy:
    summary_rules: [{ id: v2fy_s, when: 'true', status: info, text: { es: "Y final de 2 [[v2fy]].", en: "Final Y of 2 [[v2fy]]." } }]
    physical_reading_rules: [{ id: v2fy_p, when: 'true', status: info, text: { es: "Muestra la desviacion ganada por el blanco.", en: "Shows deflection gained by the target." } }]
    coherence_rules: [{ id: v2fy_c, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    model_validity_rules: [{ id: v2fy_v, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    graph_rules: [{ id: v2fy_g, when: 'true', status: info, text: { es: "Sombra.", en: "Shadow." } }]
    likely_errors: [{ id: v2fy_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: v2fy_n, when: 'true', status: info, text: { es: "Siguiente.", en: "Next." } }]
  theta1i:
    summary_rules: [{ id: t1i_s, when: 'true', status: info, text: { es: "Angulo inicial [[theta1i]].", en: "Initial angle [[theta1i]]." } }]
    physical_reading_rules: [{ id: t1i_p, when: 'true', status: info, text: { es: "Determina la oblicuidad del choque.", en: "Determines collision obliquity." } }]
    coherence_rules: [{ id: t1i_c, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    model_validity_rules: [{ id: t1i_v, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    graph_rules: [{ id: t1i_g, when: 'true', status: info, text: { es: "Arco.", en: "Arc." } }]
    likely_errors: [{ id: t1i_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: t1i_n, when: 'true', status: info, text: { es: "Proyectar.", en: "Project." } }]
  theta2i:
    summary_rules: [{ id: t2i_s, when: 'true', status: info, text: { es: "Angulo de 2 [[theta2i]].", en: "Angle of 2 [[theta2i]]." } }]
    physical_reading_rules: [{ id: t2i_p, when: 'true', status: info, text: { es: "Define la direccion del blanco.", en: "Defines target direction." } }]
    coherence_rules: [{ id: t2i_c, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    model_validity_rules: [{ id: t2i_v, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    graph_rules: [{ id: t2i_g, when: 'true', status: info, text: { es: "Arco.", en: "Arc." } }]
    likely_errors: [{ id: t2i_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: t2i_n, when: 'true', status: info, text: { es: "Siguiente.", en: "Next." } }]
  theta1f:
    summary_rules: [{ id: t1f_s, when: 'true', status: success, text: { es: "Salida de 1 [[theta1f]].", en: "Exit of 1 [[theta1f]]." } }]
    physical_reading_rules: [{ id: t1f_p, when: 'true', status: info, text: { es: "Muestra hacia donde se desvia el proyectil.", en: "Shows where the projectile deflects." } }]
    coherence_rules: [{ id: t1f_c, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    model_validity_rules: [{ id: t1f_v, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    graph_rules: [{ id: t1f_g, when: 'true', status: info, text: { es: "Arco.", en: "Arc." } }]
    likely_errors: [{ id: t1f_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: t1f_n, when: 'true', status: info, text: { es: "Balance.", en: "Balance." } }]
  theta2f:
    summary_rules: [{ id: t2f_s, when: 'true', status: info, text: { es: "Salida de 2 [[theta2f]].", en: "Exit of 2 [[theta2f]]." } }]
    physical_reading_rules: [{ id: t2f_p, when: 'true', status: info, text: { es: "Muestra la dispersion del blanco.", en: "Shows target scattering." } }]
    coherence_rules: [{ id: t2f_c, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    model_validity_rules: [{ id: t2f_v, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    graph_rules: [{ id: t2f_g, when: 'true', status: info, text: { es: "Arco.", en: "Arc." } }]
    likely_errors: [{ id: t2f_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: t2f_n, when: 'true', status: info, text: { es: "Balance.", en: "Balance." } }]
  Ki:
    summary_rules: [{ id: ki_s, when: 'true', status: info, text: { es: "Energia inicial [[Ki]].", en: "Initial energy [[Ki]]." } }]
    physical_reading_rules: [{ id: ki_p, when: 'true', status: info, text: { es: "La energia inicial limita la violencia del choque.", en: "Initial energy limits collision violence." } }]
    coherence_rules: [{ id: ki_c, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    model_validity_rules: [{ id: ki_v, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    graph_rules: [{ id: ki_g, when: 'true', status: info, text: { es: "Barra.", en: "Bar." } }]
    likely_errors: [{ id: ki_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: ki_n, when: 'true', status: info, text: { es: "Balance.", en: "Balance." } }]
  Kf:
    summary_rules: [{ id: kf_s, when: 'true', status: info, text: { es: "Energia final [[Kf]].", en: "Final energy [[Kf]]." } }]
    physical_reading_rules: [{ id: kf_p, when: 'true', status: info, text: { es: "Si [[Kf]] es igual a [[Ki]], el choque es elastico.", en: "If [[Kf]] equals [[Ki]], the collision is elastic." } }]
    coherence_rules: [{ id: kf_c, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    model_validity_rules: [{ id: kf_v, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    graph_rules: [{ id: kf_g, when: 'true', status: info, text: { es: "Barra.", en: "Bar." } }]
    likely_errors: [{ id: kf_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: kf_n, when: 'true', status: info, text: { es: "Siguiente.", en: "Next." } }]
  DeltaK:
    summary_rules: [{ id: dk_s, when: 'true', status: info, text: { es: "Variacion [[DeltaK]].", en: "Variation [[DeltaK]]." } }]
    physical_reading_rules: [{ id: dk_p, when: 'true', status: info, text: { es: "Cuantifica cuanta energia se pierde por calor.", en: "Quantifies how much energy is lost to heat." } }]
    coherence_rules: [{ id: dk_c, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    model_validity_rules: [{ id: dk_v, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    graph_rules: [{ id: dk_g, when: 'true', status: info, text: { es: "Diferencia.", en: "Difference." } }]
    likely_errors: [{ id: dk_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: dk_n, when: 'true', status: info, text: { es: "Balance.", en: "Balance." } }]
  vec:
    summary_rules: [{ id: v_s, when: 'true', status: info, text: { es: "Ley vectorial.", en: "Vector law." } }]
    physical_reading_rules: [{ id: v_p, when: 'true', status: info, text: { es: "La conservacion vectorial asegura que el momento total no varia.", en: "Vector conservation ensures total momentum does not vary." } }]
    coherence_rules: [{ id: v_c, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    model_validity_rules: [{ id: v_v, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    graph_rules: [{ id: v_g, when: 'true', status: info, text: { es: "Vectores.", en: "Vectors." } }]
    likely_errors: [{ id: v_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: v_n, when: 'true', status: info, text: { es: "Siguiente.", en: "Next." } }]
  x:
    summary_rules: [{ id: x_s, when: 'true', status: info, text: { es: "Balance X.", en: "X balance." } }]
    physical_reading_rules: [{ id: x_p, when: 'true', status: info, text: { es: "La proyeccion horizontal gestiona el avance del sistema.", en: "Horizontal projection manages system progress." } }]
    coherence_rules: [{ id: x_c, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    model_validity_rules: [{ id: x_v, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    graph_rules: [{ id: x_g, when: 'true', status: info, text: { es: "Grafica.", en: "Graph." } }]
    likely_errors: [{ id: x_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: x_n, when: 'true', status: info, text: { es: "Siguiente.", en: "Next." } }]
  y:
    summary_rules: [{ id: y_s, when: 'true', status: info, text: { es: "Balance Y.", en: "Y balance." } }]
    physical_reading_rules: [{ id: y_p, when: 'true', status: info, text: { es: "La proyeccion vertical gestiona la deflexion transversal.", en: "Vertical projection manages transversal deflection." } }]
    coherence_rules: [{ id: y_c, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    model_validity_rules: [{ id: y_v, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    graph_rules: [{ id: y_g, when: 'true', status: info, text: { es: "Grafica.", en: "Graph." } }]
    likely_errors: [{ id: y_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: y_n, when: 'true', status: info, text: { es: "Siguiente.", en: "Next." } }]
  energy_loss:
    summary_rules: [{ id: el_s, when: 'true', status: info, text: { es: "Balance de energia.", en: "Energy balance." } }]
    physical_reading_rules: [{ id: el_p, when: 'true', status: info, text: { es: "La perdida de energia revela la inelastisidad del choque.", en: "Energy loss reveals collision inelasticity." } }]
    coherence_rules: [{ id: el_c, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    model_validity_rules: [{ id: el_v, when: 'true', status: ok, text: { es: "OK.", en: "OK." } }]
    graph_rules: [{ id: el_g, when: 'true', status: info, text: { es: "Grafica.", en: "Graph." } }]
    likely_errors: [{ id: el_e, when: 'true', status: warning, text: { es: "Error.", en: "Error." } }]
    next_step_rules: [{ id: el_n, when: 'true', status: info, text: { es: "Siguiente.", en: "Next." } }]
`;export{e as default};
