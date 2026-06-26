const e=`version: 1
id: interpretacion-con-rozamiento
leaf_id: con-rozamiento
nombre:
  es: Interpretación de plano inclinado con rozamiento
  en: Interpretation of inclined plane with friction
scope:
  es: Lectura causal entre ángulo, fricción y aceleración en régimen estático o deslizante.
  en: Causal reading between angle, friction, and acceleration under static or sliding regime.
dependencies:
  magnitudes:
  - N
  - a
  - f_r
  - g
  - m
  - mu_c
  - mu_e
  - theta
  - theta_c
  - f_s_max
  formulas:
  - aceleracion_plano_rozamiento
  - angulo_critico
  - friccion_cinetica
  - umbral_reposo
  - friccion_estatica_maxima
  - normal_plano_inclinado
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
      es: Resumen
      en: Summary
  physical_reading:
    title:
      es: Lectura física
      en: Physical reading
  coherence:
    title:
      es: Coherencia física
      en: Physical coherence
  model_validity:
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    title:
      es: Lectura del gráfico
      en: Graph reading
  likely_errors:
    title:
      es: Errores comunes
      en: Common errors
  next_step:
    title:
      es: Siguiente paso
      en: Next step
targets:
  a:
    summary_rules:
    - id: a_summary_main
      when: 'true'
      status: info
      text:
        es: La aceleración resulta del balance entre componente de peso y fricción cinética.
        en: Acceleration comes from balance between weight component and kinetic friction.
    coherence_rules:
    - id: a_coherence_bounds
      when: a <= g and a >= -g
      status: ok
      text:
        es: El valor de a está en rango físico razonable para el modelo.
        en: a stays in a reasonable physical range for this model.
    physical_reading_rules:
    - id: a_physical_sign
      when: 'true'
      status: info
      text:
        es: Si a es positiva en tu eje, el bloque acelera rampa abajo según esa convención.
        en: If a is positive in your axis, the block accelerates downhill under that convention.
    model_validity_rules:
    - id: a_validity_regime
      when: 'true'
      status: info
      text:
        es: Esta lectura asume deslizamiento con mu_c aproximadamente constante.
        en: This reading assumes sliding regime with approximately constant mu_c.
    graph_rules:
    - id: a_graph_theta
      when: 'true'
      status: info
      text:
        es: En el gráfico a(theta), cruces por cero separan zonas de frenado y aceleración.
        en: In a(theta) graph, zero crossings separate braking and accelerating zones.
    likely_errors:
    - id: a_error_deg_rad
      when: 'true'
      status: warning
      text:
        es: 'Error común: usar theta en grados cuando la función espera radianes.'
        en: 'Common error: using theta in degrees when function expects radians.'
    next_step_rules:
    - id: a_next_kinematics
      when: 'true'
      status: info
      text:
        es: Con a validada, calcula tiempo y velocidad para contrastar con el experimento.
        en: With validated a, compute time and speed to compare against experiment.
  f_r:
    summary_rules:
    - id: fr_summary_main
      when: 'true'
      status: info
      text:
        es: f_r cuantifica la oposición tangencial del contacto durante el deslizamiento.
        en: f_r quantifies tangential opposition from contact during sliding.
    coherence_rules:
    - id: fr_coherence_non_negative
      when: f_r >= 0 and N >= 0 and mu_c >= 0
      status: ok
      text:
        es: 'Magnitudes coherentes: fricción, normal y coeficiente no negativos.'
        en: 'Coherent magnitudes: friction, normal, and coefficient are non-negative.'
    physical_reading_rules:
    - id: fr_physical_role
      when: 'true'
      status: info
      text:
        es: Si aumenta N o mu_c, crece f_r y baja la aceleración neta rampa abajo.
        en: If N or mu_c increases, f_r rises and downhill net acceleration decreases.
    model_validity_rules:
    - id: fr_validity_regime
      when: 'true'
      status: info
      text:
        es: La expresión f_r = mu_c*N asume rozamiento cinético y contacto seco tipo Coulomb.
        en: Expression f_r = mu_c*N assumes kinetic friction and dry Coulomb-like contact.
    graph_rules:
    - id: fr_graph_reading
      when: 'true'
      status: info
      text:
        es: En el gráfico, f_r desplaza la curva de a(theta) hacia valores menores.
        en: In the graph, f_r shifts the a(theta) curve toward lower values.
    likely_errors:
    - id: fr_error_mu_mix
      when: 'true'
      status: warning
      text:
        es: 'Error común: usar mu_e en lugar de mu_c para un caso deslizante.'
        en: 'Common error: using mu_e instead of mu_c for a sliding case.'
    next_step_rules:
    - id: fr_next_force_balance
      when: 'true'
      status: info
      text:
        es: Verifica el balance en el eje del plano con el signo de f_r opuesto al movimiento.
        en: Verify axis balance on the plane with f_r sign opposite to motion.
  theta:
    summary_rules:
    - id: theta_summary_main
      when: 'true'
      status: info
      text:
        es: theta gobierna simultáneamente impulso gravitatorio y normal de contacto.
        en: theta simultaneously governs gravitational drive and contact normal.
    coherence_rules:
    - id: theta_coherence_range
      when: theta >= 0 and theta <= 1.5708
      status: ok
      text:
        es: theta está dentro del intervalo físico de un plano inclinado convencional.
        en: theta is within physical range of a conventional inclined plane.
    physical_reading_rules:
    - id: theta_physical_transition
      when: 'true'
      status: info
      text:
        es: Al aumentar theta, sube la componente paralela y baja la normal.
        en: As theta increases, parallel component rises and normal decreases.
    model_validity_rules:
    - id: theta_validity_geometry
      when: 'true'
      status: info
      text:
        es: Se asume geometría rígida y ángulo constante durante el tramo analizado.
        en: Rigid geometry and constant angle are assumed during analyzed segment.
    graph_rules:
    - id: theta_graph_marker
      when: 'true'
      status: info
      text:
        es: El marcador vertical de theta permite lectura directa del punto de operación.
        en: Vertical theta marker enables direct reading of operating point.
    likely_errors:
    - id: theta_error_reference
      when: 'true'
      status: warning
      text:
        es: 'Error común: medir theta respecto a la vertical en vez de la horizontal.'
        en: 'Common error: measuring theta from vertical instead of horizontal.'
    next_step_rules:
    - id: theta_next_safety
      when: 'true'
      status: info
      text:
        es: Compara theta con theta_c para decidir si el diseño es seguro en reposo.
        en: Compare theta with theta_c to decide whether design is safe at rest.
  theta_c:
    summary_rules:
    - id: theta_c_summary
      when: 'true'
      status: info
      text:
        es: theta_c transforma mu_e en un umbral angular de estabilidad estática.
        en: theta_c turns mu_e into an angular static-stability threshold.
    coherence_rules:
    - id: theta_c_coherence
      when: theta_c >= 0 and theta_c <= 1.5708
      status: ok
      text:
        es: El valor calculado de theta_c está en dominio físico válido.
        en: Computed theta_c lies in valid physical domain.
    physical_reading_rules:
    - id: theta_c_reading
      when: 'true'
      status: info
      text:
        es: Si theta supera theta_c, el reposo deja de ser sostenible sin ayuda externa.
        en: If theta exceeds theta_c, rest is no longer sustainable without external aid.
    model_validity_rules:
    - id: theta_c_validity
      when: 'true'
      status: info
      text:
        es: Requiere contacto seco y comportamiento cercano al modelo de Coulomb.
        en: Requires dry contact and behavior close to Coulomb model.
    graph_rules:
    - id: theta_c_graph
      when: 'true'
      status: info
      text:
        es: La línea de theta_c divide región estable e inestable en el panel.
        en: theta_c line divides stable and unstable regions in the panel.
    likely_errors:
    - id: theta_c_error_units
      when: 'true'
      status: warning
      text:
        es: 'Error común: comparar theta_c en rad con theta en grados sin convertir.'
        en: 'Common error: comparing theta_c in rad with theta in degrees without conversion.'
    next_step_rules:
    - id: theta_c_next_design
      when: 'true'
      status: info
      text:
        es: Añade margen de seguridad angular para tolerancias y humedad superficial.
        en: Add angular safety margin for tolerances and surface humidity.
  N:
    summary_rules:
    - id: N_summary
      when: 'true'
      status: info
      text:
        es: La fuerza normal define la intensidad del soporte perpendicular al plano.
        en: Normal force defines the intensity of support perpendicular to the plane.
    coherence_rules:
    - id: N_coherence
      when: N >= 0 and N <= m * g
      status: ok
      text:
        es: La normal es positiva y no supera el peso total, coherente con el apoyo simple.
        en: Normal is positive and does not exceed total weight, coherent with simple support.
    physical_reading_rules:
    - id: N_physical
      when: 'true'
      status: info
      text:
        es: Determina la capacidad de fricción del contacto; a mayor N, mayor agarre disponible.
        en: Determines contact friction capacity; higher N means higher available grip.
    model_validity_rules:
    - id: N_validity
      when: 'true'
      status: info
      text:
        es: El modelo asume que no hay otras fuerzas externas con componente normal.
        en: Model assumes no other external forces with a normal component.
    graph_rules:
    - id: N_graph
      when: 'true'
      status: info
      text:
        es: En el panel de fuerzas, N disminuye según el coseno a medida que aumenta la inclinación.
        en: In the force panel, N decreases according to cosine as inclination increases.
    likely_errors:
    - id: N_likely_error
      when: 'true'
      status: warning
      text:
        es: 'Error común: tratar N como si valiera siempre mg, olvidando que en la rampa depende de cos(theta).'
        en: 'Common error: treating N as if it were always mg, forgetting that on an incline it depends on cos(theta).'
    next_step_rules:
    - id: N_next_step
      when: 'true'
      status: info
      text:
        es: Usa N para validar si la rampa soporta la carga sin deformación plástica.
        en: Use N to validate if the ramp supports the load without plastic deformation.
  g:
    summary_rules:
    - id: g_summary
      when: 'true'
      status: info
      text:
        es: La gravedad fija la escala de aceleración para todo el sistema.
        en: Gravity sets the acceleration scale for the entire system.
    coherence_rules:
    - id: g_coherence
      when: g > 0
      status: ok
      text:
        es: Valor de g positivo y estándar para el modelo terrestre.
        en: Positive and standard g value for the terrestrial model.
    physical_reading_rules:
    - id: g_physical
      when: 'true'
      status: info
      text:
        es: Determina tanto la causa del movimiento como la intensidad del contacto normal.
        en: Determines both the cause of motion and the intensity of normal contact.
    model_validity_rules:
    - id: g_validity
      when: 'true'
      status: info
      text:
        es: Se asume campo gravitatorio uniforme y constante en toda la rampa.
        en: Uniform and constant gravitational field is assumed throughout the ramp.
    graph_rules:
    - id: g_graph
      when: 'true'
      status: info
      text:
        es: g actúa como el factor de escala vertical de todas las aceleraciones.
        en: g acts as the vertical scale factor for all accelerations.
    likely_errors:
    - id: g_likely_error
      when: 'true'
      status: warning
      text:
        es: 'Error común: interpretar que cambia g cuando cambia theta; en realidad cambia la proyección del peso.'
        en: 'Common error: thinking g changes when theta changes; what changes is the weight projection.'
    next_step_rules:
    - id: g_next_step
      when: 'true'
      status: info
      text:
        es: Considera variaciones de g si el problema ocurre en otros cuerpos celestes.
        en: Consider g variations if the problem occurs on other celestial bodies.
  mu_c:
    summary_rules:
    - id: mu_c_summary
      when: 'true'
      status: info
      text:
        es: mu_c resume la resistencia al deslizamiento una vez iniciado el movimiento.
        en: mu_c summarizes resistance to sliding once motion has started.
    coherence_rules:
    - id: mu_c_coherence
      when: mu_c >= 0 and mu_c <= mu_e
      status: ok
      text:
        es: Coeficiente cinético no negativo y menor al estático, físicamente consistente.
        en: Non-negative kinetic coefficient and lower than static, physically consistent.
    physical_reading_rules:
    - id: mu_c_physical
      when: 'true'
      status: info
      text:
        es: Controla la tasa de disipación y la aceleración neta cuesta abajo.
        en: Controls dissipation rate and net downhill acceleration.
    model_validity_rules:
    - id: mu_c_validity
      when: 'true'
      status: info
      text:
        es: El modelo de Coulomb asume que mu_c no depende de la velocidad.
        en: Coulomb model assumes mu_c does not depend on speed.
    graph_rules:
    - id: mu_c_graph
      when: 'true'
      status: info
      text:
        es: A mayor mu_c, la curva de aceleración se desplaza hacia valores inferiores.
        en: With higher mu_c, the acceleration curve shifts toward lower values.
    likely_errors:
    - id: mu_c_likely_error
      when: 'true'
      status: warning
      text:
        es: 'Error común: usar mu_c para decidir si el bloque arranca, cuando eso depende de mu_e.'
        en: 'Common error: using mu_c to decide whether motion starts, when that depends on mu_e.'
    next_step_rules:
    - id: mu_c_next_step
      when: 'true'
      status: info
      text:
        es: Compara mu_c con datos experimentales para validar la calidad del recubrimiento.
        en: Compare mu_c with experimental data to validate coating quality.
  mu_e:
    summary_rules:
    - id: mu_e_summary
      when: 'true'
      status: info
      text:
        es: mu_e determina la capacidad máxima de adherencia en reposo.
        en: mu_e determines the maximum adherence capacity at rest.
    coherence_rules:
    - id: mu_e_coherence
      when: mu_e >= 0
      status: ok
      text:
        es: Coeficiente estático no negativo, coherente con la naturaleza de la fricción.
        en: Non-negative static coefficient, coherent with the nature of friction.
    physical_reading_rules:
    - id: mu_e_physical
      when: 'true'
      status: info
      text:
        es: Fija el ángulo crítico a partir del cual el bloque ya no puede sostenerse.
        en: Sets the critical angle beyond which the block can no longer sustain itself.
    model_validity_rules:
    - id: mu_e_validity
      when: 'true'
      status: info
      text:
        es: Asume contacto seco y superficies con rugosidad estable.
        en: Assumes dry contact and surfaces with stable roughness.
    graph_rules:
    - id: mu_e_graph
      when: 'true'
      status: info
      text:
        es: mu_e define la ubicación del marcador de umbral en el eje de ángulos.
        en: mu_e defines the location of the threshold marker on the angle axis.
    likely_errors:
    - id: mu_e_likely_error
      when: 'true'
      status: warning
      text:
        es: 'Error común: sustituir mu_e directamente en la fórmula de aceleración deslizante.'
        en: 'Common error: substituting mu_e directly into the sliding-acceleration formula.'
    next_step_rules:
    - id: mu_e_next_step
      when: 'true'
      status: info
      text:
        es: Usa mu_e para calcular el factor de seguridad frente al deslizamiento inesperado.
        en: Use mu_e to calculate the safety factor against unexpected sliding.
  f_s_max:
    summary_rules:
    - id: fsmax_summary
      when: 'true'
      status: info
      text:
        es: f_s_max marca la capacidad máxima de retención del contacto antes de fallar por deslizamiento.
        en: f_s_max marks the maximum retention capacity of the contact before failure by sliding.
    coherence_rules:
    - id: fsmax_coherence
      when: 'f_s_max >= 0'
      status: ok
      text:
        es: El límite estático es no negativo, coherente con la naturaleza de la fuerza.
        en: Static limit is non-negative, coherent with the nature of the force.
    physical_reading_rules:
    - id: fsmax_reading
      when: 'true'
      status: info
      text:
        es: Si la demanda paralela del peso supera este valor, el bloque no puede quedarse quieto.
        en: If the parallel weight demand exceeds this value, the block cannot stay still.
    model_validity_rules:
    - id: fsmax_validity
      when: 'true'
      status: info
      text:
        es: Solo es relevante para decidir si el movimiento inicia o si el sistema es estable.
        en: Only relevant for deciding if motion starts or if the system is stable.
    graph_rules:
    - id: fsmax_graph
      when: 'true'
      status: info
      text:
        es: En el panel de fuerzas, f_s_max representa el techo de la zona de reposo.
        en: In the force panel, f_s_max represents the ceiling of the rest zone.
    likely_errors:
    - id: fsmax_error
      when: 'true'
      status: warning
      text:
        es: 'Error común: confundir este límite máximo con el valor actual de la fricción estática.'
        en: 'Common error: confusing this maximum limit with the current static friction value.'
    next_step_rules:
    - id: fsmax_next
      when: 'true'
      status: info
      text:
        es: Compara f_s_max con la componente del peso para validar la seguridad del diseño.
        en: Compare f_s_max with weight component to validate design safety.
  m:
    summary_rules:
    - id: m_summary
      when: 'true'
      status: info
      text:
        es: La masa fija la escala absoluta de todas las fuerzas en el sistema.
        en: Mass sets the absolute scale of all forces in the system.
    coherence_rules:
    - id: m_coherence
      when: m > 0
      status: ok
      text:
        es: Masa positiva, coherente con un cuerpo físico real.
        en: Positive mass, coherent with a real physical body.
    physical_reading_rules:
    - id: m_reading
      when: 'true'
      status: info
      text:
        es: Aunque se cancela en la aceleración ideal, determina la carga sobre la rampa y la fricción absoluta.
        en: Although it cancels in ideal acceleration, it determines ramp load and absolute friction.
    model_validity_rules:
    - id: m_validity
      when: 'true'
      status: info
      text:
        es: El modelo asume que m no cambia durante el trayecto (bloque rígido sin desgaste).
        en: Model assumes m does not change during travel (rigid block without wear).
    graph_rules:
    - id: m_graph
      when: 'true'
      status: info
      text:
        es: Cambiar m escala las curvas de fuerza sin alterar la curva de aceleración.
        en: Changing m scales force curves without altering the acceleration curve.
    likely_errors:
    - id: m_error
      when: 'true'
      status: warning
      text:
        es: 'Error común: pensar que una caja más pesada acelerará más rápido solo por ser más grande.'
        en: 'Common error: thinking a heavier box will accelerate faster just by being larger.'
    next_step_rules:
    - id: m_next
      when: 'true'
      status: info
      text:
        es: Usa m para calcular la energía disipada por el rozamiento durante el descenso.
        en: Use m to calculate energy dissipated by friction during descent.
`;export{e as default};
