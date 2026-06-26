const e=`version: 2\r
id: interpretacion-centro-de-masas-sistemas-discretos\r
leaf_id: centro-de-masas-sistemas-discretos\r
nombre:\r
  es: "Interpretación de Sistemas Discretos"\r
  en: "Interpretation of Discrete Systems"\r
scope:\r
  area: fisica-clasica\r
  bloque: mecanica\r
  subbloque: cantidad-de-movimiento\r
  parent_id: centro-de-masas\r
  ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/centro-de-masas/centro-de-masas-sistemas-discretos\r
dependencies:\r
  formulas:\r
    - xcm_sum\r
    - ycm_sum\r
    - M_sum\r
    - rcm_vector\r
  magnitudes:\r
    - m_i\r
    - x_i\r
    - y_i\r
    - r_i\r
    - xcm\r
    - ycm\r
    - rcm\r
    - M\r
output_contract:\r
  sections:\r
    - summary\r
    - physical_reading\r
    - coherence\r
    - model_validity\r
    - graph_reading\r
    - likely_errors\r
    - next_step\r
result_blocks:\r
  summary:\r
    title:\r
      es: "Resumen del Sistema de Partículas"\r
      en: "Particle System Summary"\r
  physical_reading:\r
    title:\r
      es: "Análisis de la Distribución Discreta"\r
      en: "Discrete Distribution Analysis"\r
  coherence:\r
    title:\r
      es: "Validación de Consistencia Vectorial"\r
      en: "Vector Consistency Validation"\r
  model_validity:\r
    title:\r
      es: "Auditoría de Validez de Modelo"\r
      en: "Model Validity Audit"\r
  graph_reading:\r
    title:\r
      es: "Diagnóstico de la Nube de Masas"\r
      en: "Mass Cloud Diagnosis"\r
  likely_errors:\r
    title:\r
      es: "Alerta de Sesgos en Sumatorias"\r
      en: "Summation Bias Alert"\r
  next_step:\r
    title:\r
      es: "Extensión a Medios Continuos"\r
      en: "Extension to Continuous Media"\r
\r
targets:\r
  xcm:\r
    magnitude_id: xcm\r
    summary_rules:\r
      - id: xcm_sum_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "La coordenada [[xcm]] localiza el promedio ponderado de la distribución de masa en el eje horizontal, indicando el punto de equilibrio lateral del sistema."\r
          en: "The [[xcm]] coordinate locates the weighted average of the mass distribution on the horizontal axis, indicating the system's lateral equilibrium point."\r
    physical_reading_rules:\r
      - id: xcm_read_cluster\r
        when: 'true'\r
        status: info\r
        text:\r
          es: "Si un grupo de partículas (cluster) tiene mucha más masa que el resto, el centro de masas se verá fuertemente atraído hacia su posición colectiva."\r
          en: "If a group of particles (cluster) has much more mass than the rest, the center of mass will be strongly attracted to its collective position."\r
    coherence_rules:\r
      - id: xcm_coh_bound\r
        when: 'result < min(x_i) || result > max(x_i)'\r
        status: danger\r
        text:\r
          es: "Error crítico: El centro de masas debe estar obligatoriamente entre la x mínima y la x máxima del sistema."\r
          en: "Critical error: The center of mass must strictly lie between the minimum and maximum x of the system."\r
    model_validity_rules:\r
      - id: xcm_val_disc\r
        when: 'true'\r
        status: ok\r
        text:\r
          es: "Tratamiento de partículas puntuales validado para N cuerpos."\r
          en: "Point particle treatment validated for N bodies."\r
    graph_rules:\r
      - id: xcm_graph_center\r
        when: 'true'\r
        status: info\r
        text:\r
          es: "En el diagrama, xcm marca el punto de equilibrio donde el sistema no tendría tendencia a rotar si fuera un cuerpo rígido apoyado en ese eje."\r
          en: "In the diagram, xcm marks the balance point where the system would have no tendency to rotate if it were a rigid body supported on that axis."\r
    likely_errors:\r
      - id: xcm_err_sign\r
        when: 'true'\r
        status: warning\r
        text:\r
          es: "Cuidado con los signos de las posiciones; una partícula en el lado negativo resta al numerador del promedio."\r
          en: "Watch the signs of the positions; a particle on the negative side subtracts from the average's numerator."\r
    next_step_rules:\r
      - id: xcm_next_continuous\r
        when: 'true'\r
        status: info\r
        text:\r
          es: "Prueba a imaginar qué sucede si N aumenta indefinidamente; esto te preparará para el cálculo integral en sólidos."\r
          en: "Try to imagine what happens if N increases indefinitely; this will prepare you for integral calculus in solids."\r
\r
  ycm:\r
    magnitude_id: ycm\r
    summary_rules:\r
      - id: ycm_sum_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "La coordenada [[ycm]] localiza el centro de masas en la dimensión vertical, representando la altura media de la inercia del conjunto de partículas."\r
          en: "The [[ycm]] coordinate locates the center of mass in the vertical dimension, representing the average inertia height of the particle set."\r
    physical_reading_rules:\r
      - id: ycm_read_height\r
        when: 'true'\r
        status: info\r
        text:\r
          es: "La altura ycm indica el nivel medio de la inercia del sistema; valores altos sugieren una concentración de masa en la parte superior del conjunto."\r
          en: "The ycm height indicates the system's average inertia level; high values suggest a mass concentration in the upper part of the set."\r
    coherence_rules:\r
      - id: ycm_coh_bound\r
        when: 'result < min(y_i) || result > max(y_i)'\r
        status: danger\r
        text:\r
          es: "Error crítico: El centro de masas vertical debe estar dentro del rango de alturas de las partículas."\r
          en: "Critical error: The vertical center of mass must lie within the height range of the particles."\r
    model_validity_rules:\r
      - id: ycm_val_planar\r
        when: 'true'\r
        status: ok\r
        text:\r
          es: "El modelo asume que todas las partículas están en el mismo campo gravitatorio uniforme."\r
          en: "The model assumes all particles are in the same uniform gravitational field."\r
    graph_rules:\r
      - id: ycm_graph_line\r
        when: 'true'\r
        status: info\r
        text:\r
          es: "La línea y = ycm divide al sistema en dos regiones con momentos de masa equilibrados respecto al eje horizontal."\r
          en: "The y = ycm line divides the system into two regions with balanced mass moments relative to the horizontal axis."\r
    likely_errors:\r
      - id: ycm_err_mass\r
        when: 'true'\r
        status: warning\r
        text:\r
          es: "No olvides que la masa total M debe ser la misma suma que usaste para la componente x."\r
          en: "Don't forget that the total mass M must be the same sum you used for the x-component."\r
    next_step_rules:\r
      - id: ycm_next_motion\r
        when: 'true'\r
        status: info\r
        text:\r
          es: "El siguiente paso es analizar cómo se mueve este punto ycm cuando se aplican fuerzas externas netas."\r
          en: "The next step is to analyze how this ycm point moves when net external forces are applied."\r
\r
  rcm:\r
    magnitude_id: rcm\r
    summary_rules:\r
      - id: rcm_sum_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El vector rcm define la posición central del sistema en el espacio multidimensional."\r
          en: "The rcm vector defines the central position of the system in multidimensional space."\r
    graph_rules:\r
      - id: rcm_graph_hull\r
        when: 'true'\r
        status: info\r
        text:\r
          es: "Geométricamente, el punto rcm debe caer siempre dentro de la envoltura convexa formada por la nube de puntos del sistema."\r
          en: "Geometrically, the rcm point must always fall within the convex hull formed by the system's point cloud."\r
    likely_errors:\r
      - id: rcm_err_scalar\r
        when: 'true'\r
        status: warning\r
        text:\r
          es: "Asegúrate de sumar los vectores componente a componente; no sumes los módulos de los vectores de posición."\r
          en: "Ensure you sum the vectors component by component; do not sum the magnitudes of the position vectors."\r
    coherence_rules:\r
      - id: rcm_coh_vector\r
        when: 'true'\r
        status: ok\r
        text:\r
          es: "La consistencia entre las componentes escalares (xcm, ycm) y el vector rcm ha sido verificada."\r
          en: "Consistency between the scalar components (xcm, ycm) and the rcm vector has been verified."\r
    physical_reading_rules:\r
      - id: rcm_read_symmetry\r
        when: 'true'\r
        status: info\r
        text:\r
          es: "Si el sistema presenta simetría geométrica y de masas, el vector rcm debe apuntar directamente al centro de simetría."\r
          en: "If the system exhibits geometric and mass symmetry, the rcm vector must point directly to the center of symmetry."\r
    model_validity_rules:\r
      - id: rcm_val_origin\r
        when: 'true'\r
        status: info\r
        text:\r
          es: "El vector rcm es dependiente del sistema de coordenadas, pero la posición física del CM es intrínseca al sistema."\r
          en: "The rcm vector is coordinate-system dependent, but the CM's physical position is intrinsic to the system."\r
    next_step_rules:\r
      - id: rcm_next_momentum\r
        when: 'true'\r
        status: info\r
        text:\r
          es: "Usa rcm para simplificar la descripción del momento lineal total del sistema como P = M * Vcm."\r
          en: "Use rcm to simplify the description of the system's total linear momentum as P = M * Vcm."\r
\r
  M:\r
    magnitude_id: M\r
    summary_rules:\r
      - id: M_sum_default\r
        when: "true"\r
        status: info\r
        text:\r
          es: "La masa total [[M]] representa la inercia traslacional completa del sistema y es el factor de normalización para el cálculo del centro de masas."\r
          en: "The total mass [[M]] represents the system's complete translational inertia and is the normalization factor for the center-of-mass calculation."\r
    physical_reading_rules:\r
      - id: M_read_total\r
        when: 'true'\r
        status: ok\r
        text:\r
          es: "Un valor elevado de [[M]] implica que el sistema requerirá una fuerza neta mayor para lograr la misma aceleración del centro de masas."\r
          en: "A high [[M]] value implies the system will require a greater net force to achieve the same center-of-mass acceleration."\r
    coherence_rules:\r
      - id: M_coh_sum\r
        when: 'true'\r
        status: ok\r
        text:\r
          es: "La masa total es consistente con la suma de las masas individuales [[m1]], [[m2]], etc."\r
          en: "The total mass is consistent with the sum of individual masses [[m1]], [[m2]], etc."\r
    model_validity_rules:\r
      - id: M_val_positive\r
        when: 'result <= 0'\r
        status: danger\r
        text:\r
          es: "Error: La masa total de un sistema físico real debe ser estrictamente positiva."\r
          en: "Error: The total mass of a real physical system must be strictly positive."\r
    graph_rules:\r
      - id: M_graph_scale\r
        when: 'true'\r
        status: info\r
        text:\r
          es: "En el gráfico, el tamaño relativo de la nube de puntos suele estar escalado por la magnitud de [[M]]."\r
          en: "In the graph, the relative size of the point cloud is usually scaled by the magnitude of [[M]]."\r
    likely_errors:\r
      - id: M_err_missing\r
        when: 'true'\r
        status: warning\r
        text:\r
          es: "Asegúrate de haber incluido todas las partículas del sistema en la suma final de [[M]]."\r
          en: "Ensure you have included all particles of the system in the final sum of [[M]]."\r
    next_step_rules:\r
      - id: M_next_dynamics\r
        when: 'true'\r
        status: info\r
        text:\r
          es: "El valor de [[M]] es fundamental para aplicar la segunda ley de Newton al sistema completo: ΣFext = [[M]] * Acm."\r
          en: "The value of [[M]] is fundamental for applying Newton's second law to the entire system: ΣFext = [[M]] * Acm."\r
`;export{e as default};
