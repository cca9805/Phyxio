const e=`version: 2
id: interpretacion-colisiones-inelasticas
leaf_id: colisiones-inelasticas
nombre:
  es: Interpretación de Colisiones Inelásticas
  en: Interpretation of Inelastic Collisions
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: cantidad-de-movimiento
  parent_id: colisiones
  ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-inelasticas
dependencies:
  formulas: [p, e_definition, v1f_inelastic, v2f_inelastic, v_perfectly_inelastic, ki_system, kf_system, delta_k, energy_loss_fraction]
  magnitudes: [m1, m2, v1i, v2i, v1f, v2f, e, Ki, Kf, DeltaK, p, loss_fraction, K]
output_contract:
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
result_blocks:
  summary: { title: { es: Resumen del Proceso Disipativo, en: Dissipative Process Summary } }
  physical_reading: { title: { es: Lectura de la Interacción, en: Interaction Reading } }
  coherence: { title: { es: Consistencia de Conservación, en: Conservation Consistency } }
  model_validity: { title: { es: Límites del Escenario Inelástico, en: Inelastic Scenario Limits } }
  graph_reading: { title: { es: Análisis de Trayectorias, en: Trajectory Analysis } }
  likely_errors: { title: { es: Alertas de Interpretación, en: Interpretation Alerts } }
  next_step: { title: { es: Conexión con otros Modelos, en: Connection with other Models } }
targets:
  v1f:
    summary_rules:
      - id: v1f_summary
        when: "true"
        status: info
        text:
          es: "La velocidad [[v1f]] indica qué tan rápido y en qué dirección se mueve el proyectil tras el impacto inelástico."
          en: "Velocity [[v1f]] indicates how fast and in what direction the projectile moves after the inelastic impact."
    physical_reading_rules:
      - id: v1f_reading
        when: "true"
        status: info
        text:
          es: "Refleja el estado de movimiento residual del cuerpo 1 tras haber transferido parte de su inercia al blanco."
          en: "Reflects the residual motion state of body 1 after having transferred part of its inertia to the target."
    coherence_rules:
      - id: v1f_coh
        when: "true"
        status: ok
        text:
          es: "Consistente con el balance global de momento lineal [[p]]."
          en: "Consistent with the global linear momentum balance [[p]]."
    model_validity_rules:
      - id: v1f_val
        when: "true"
        status: ok
        text:
          es: "Válida en un sistema aislado sin fuerzas externas netas."
          en: "Valid in an isolated system without net external forces."
    graph_rules:
      - id: v1f_gra
        when: "true"
        status: info
        text:
          es: "Representa el cambio brusco de pendiente en la trayectoria temporal del proyectil."
          en: "Represents the sharp slope change in the projectile's temporal trajectory."
    likely_errors:
      - id: v1f_err
        when: "true"
        status: warning
        text:
          es: "Creer que la velocidad final debe ser menor en módulo que la inicial solo por ser inelástico; depende de las masas."
          en: "Believing that final velocity must be lower in magnitude than the initial one just because it's inelastic; it depends on masses."
    next_step_rules:
      - id: v1f_nex
        when: "true"
        status: info
        text:
          es: "Compara con el caso totalmente inelástico para evaluar la disipación relativa."
          en: "Compare with the totally inelastic case to evaluate relative dissipation."
  e:
    summary_rules:
      - id: e_summary
        when: "true"
        status: info
        text:
          es: "El coeficiente [[e]] es el parámetro que mide la 'calidad' del rebote relativo entre los dos cuerpos."
          en: "Coefficient [[e]] is the parameter that measures the 'quality' of the relative rebound between the two bodies."
    physical_reading_rules:
      - id: e_reading
        when: "true"
        status: info
        text:
          es: "Indica qué fracción de la velocidad relativa de aproximación se conserva como velocidad de separación."
          en: "Indicates what fraction of the approach relative velocity is conserved as separation velocity."
    coherence_rules:
      - id: e_coh
        when: "e >= 0 && e <= 1"
        status: ok
        text:
          es: "Valor dentro del rango físico [0, 1] para colisiones pasivas."
          en: "Value within the physical range [0, 1] for passive collisions."
    model_validity_rules:
      - id: e_val
        when: "true"
        status: ok
        text:
          es: "Resume de forma empírica la elasticidad de los materiales en contacto."
          en: "Empirically summarizes the elasticity of the materials in contact."
    graph_rules:
      - id: e_gra
        when: "true"
        status: info
        text:
          es: "Define la divergencia de las trayectorias tras el instante de contacto."
          en: "Defines the divergence of the trajectories after the contact instant."
    likely_errors:
      - id: e_err
        when: "true"
        status: warning
        text:
          es: "Pensar que un valor de [[e]] cercano a 1 implica que no hay pérdida de energía alguna."
          en: "Thinking that an [[e]] value close to 1 implies that there is no energy loss at all."
    next_step_rules:
      - id: e_nex
        when: "true"
        status: info
        text:
          es: "Estudiar su impacto directo en la variación energética [[DeltaK]]."
          en: "Study its direct impact on the energy variation [[DeltaK]]."
  DeltaK:
    summary_rules:
      - id: dk_summary
        when: "true"
        status: info
        text:
          es: "[[DeltaK]] es la medida neta de cuánta energía mecánica se ha degradado irreversiblemente."
          en: "[[DeltaK]] is the net measure of how much mechanical energy has been irreversibly degraded."
    physical_reading_rules:
      - id: dk_reading
        when: "true"
        status: info
        text:
          es: "Representa el coste energético del impacto, usualmente transformado en calor o ruido."
          en: "Represents the impact's energy cost, usually transformed into heat or noise."
    coherence_rules:
      - id: dk_coh
        when: "DeltaK <= 0"
        status: ok
        text:
          es: "Signo negativo consistente con la disipación de energía cinética."
          en: "Negative sign consistent with kinetic energy dissipation."
    model_validity_rules:
      - id: dk_val
        when: "true"
        status: ok
        text:
          es: "Si fuera positivo, indicaría una fuente de energía interna (explosión)."
          en: "If positive, it would indicate an internal energy source (explosion)."
    graph_rules:
      - id: dk_gra
        when: "true"
        status: info
        text:
          es: "Visualiza el escalón descendente en la gráfica de energía total del sistema."
          en: "Visualizes the downward step in the system's total energy graph."
    likely_errors:
      - id: dk_err
        when: "true"
        status: error
        text:
          es: "Olvidar que la energía se conserva globalmente, pero no en su forma mecánica (cinética)."
          en: "Forgetting that energy is conserved globally, but not in its mechanical (kinetic) form."
    next_step_rules:
      - id: dk_nex
        when: "true"
        status: info
        text:
          es: "Evaluar la fracción [[loss_fraction]] para medir la severidad del impacto."
          en: "Evaluate the [[loss_fraction]] to measure the impact severity."
  v2f:
    summary_rules:
      - id: v2f_summary
        when: "true"
        status: info
        text:
          es: "Velocidad con la que el blanco se aleja tras recibir el impulso del impacto."
          en: "Velocity with which the target moves away after receiving the impact's impulse."
    physical_reading_rules:
      - id: v2f_reading
        when: "true"
        status: info
        text:
          es: "Indica cuánto movimiento ha sido transferido al blanco durante el contacto."
          en: "Indicates how much momentum has been transferred to the target during contact."
    coherence_rules:
      - id: v2f_coh
        when: "true"
        status: ok
        text:
          es: "Consistente con el balance de momento [[p]]."
          en: "Consistent with the momentum balance [[p]]."
    model_validity_rules:
      - id: v2f_val
        when: "true"
        status: ok
        text:
          es: "Válida."
          en: "Valid."
    graph_rules:
      - id: v2f_gra
        when: "true"
        status: info
        text:
          es: "Muestra la aceleración instantánea del segundo cuerpo."
          en: "Shows the instantaneous acceleration of the second body."
    likely_errors:
      - id: v2f_err
        when: "true"
        status: warning
        text:
          es: "No considerar que [[v2f]] puede ser menor que la inicial si el blanco ya se movía muy rápido."
          en: "Not considering that [[v2f]] can be lower than the initial one if the target was already moving very fast."
    next_step_rules:
      - id: v2f_nex
        when: "true"
        status: info
        text:
          es: "Verificar la separación relativa final."
          en: "Verify final relative separation."
  m1:
    summary_rules:
      - id: m1_summary
        when: "true"
        status: info
        text:
          es: "Propiedad inercial del proyectil que escala el impacto."
          en: "Inertial property of the projectile that scales the impact."
    physical_reading_rules:
      - id: m1_reading
        when: "true"
        status: info
        text:
          es: "Determina la capacidad del cuerpo incidente para mantener su marcha."
          en: "Determines the incident body's ability to maintain its course."
    coherence_rules:
      - id: m1_coh
        when: "m1 > 0"
        status: ok
        text:
          es: "Masa positiva."
          en: "Positive mass."
    model_validity_rules:
      - id: m1_val
        when: "true"
        status: ok
        text:
          es: "Válida."
          en: "Valid."
    graph_rules:
      - id: m1_gra
        when: "true"
        status: info
        text:
          es: "Controla la escala del impulso transferido."
          en: "Controls the scale of the transferred impulse."
    likely_errors:
      - id: m1_err
        when: "true"
        status: error
        text:
          es: "Confundir masa con peso en contextos con gravedad externa (no aplicable aquí)."
          en: "Confusing mass with weight in contexts with external gravity (not applicable here)."
    next_step_rules:
      - id: m1_nex
        when: "true"
        status: info
        text:
          es: "Analizar el efecto en [[p]]."
          en: "Analyze the effect on [[p]]."
  m2:
    summary_rules:
      - id: m2_summary
        when: "true"
        status: info
        text:
          es: "Propiedad inercial del blanco que opone resistencia al cambio de estado."
          en: "Inertial property of the target that opposes the change of state."
    physical_reading_rules:
      - id: m2_reading
        when: "true"
        status: info
        text:
          es: "Determina la resistencia inercial del blanco ante el impacto."
          en: "Determines the target's inertial resistance to impact."
    coherence_rules:
      - id: m2_coh
        when: "m2 > 0"
        status: ok
        text:
          es: "Masa positiva."
          en: "Positive mass."
    model_validity_rules:
      - id: m2_val
        when: "true"
        status: ok
        text:
          es: "Válida."
          en: "Valid."
    graph_rules:
      - id: m2_gra
        when: "true"
        status: info
        text:
          es: "Controla la respuesta de velocidad del blanco."
          en: "Controls the target's velocity response."
    likely_errors:
      - id: m2_err
        when: "true"
        status: error
        text:
          es: "Asumir que si [[m2]] es muy grande, el choque debe ser elástico por ser rígido."
          en: "Assuming that if [[m2]] is very large, the collision must be elastic because it's rigid."
    next_step_rules:
      - id: m2_nex
        when: "true"
        status: info
        text:
          es: "Analizar el efecto en [[p]]."
          en: "Analyze the effect on [[p]]."
  v1i:
    summary_rules:
      - id: v1i_summary
        when: "true"
        status: info
        text:
          es: "Velocidad de aproximación inicial del proyectil."
          en: "Projectile's initial approach velocity."
    physical_reading_rules:
      - id: v1i_reading
        when: "true"
        status: info
        text:
          es: "Fija la cantidad de movimiento inicial disponible."
          en: "Sets the available initial momentum."
    coherence_rules:
      - id: v1i_coh
        when: "true"
        status: ok
        text:
          es: "Coherente."
          en: "Coherent."
    model_validity_rules:
      - id: v1i_val
        when: "true"
        status: ok
        text:
          es: "Válida."
          en: "Valid."
    graph_rules:
      - id: v1i_gra
        when: "true"
        status: info
        text:
          es: "Define la pendiente inicial de la trayectoria 1."
          en: "Defines the initial slope of trajectory 1."
    likely_errors:
      - id: v1i_err
        when: "true"
        status: warning
        text:
          es: "Errar en el signo si el cuerpo se mueve hacia la izquierda."
          en: "Making a mistake in the sign if the body moves to the left."
    next_step_rules:
      - id: v1i_nex
        when: "true"
        status: info
        text:
          es: "Calcular [[Ki]]."
          en: "Calculate [[Ki]]."
  v2i:
    summary_rules:
      - id: v2i_summary
        when: "true"
        status: info
        text:
          es: "Estado de movimiento previo del blanco."
          en: "Target's previous motion state."
    physical_reading_rules:
      - id: v2i_reading
        when: "true"
        status: info
        text:
          es: "Define el estado de movimiento previo del blanco."
          en: "Defines the target's previous motion state."
    coherence_rules:
      - id: v2i_coh
        when: "true"
        status: ok
        text:
          es: "Coherente."
          en: "Coherent."
    model_validity_rules:
      - id: v2i_val
        when: "true"
        status: ok
        text:
          es: "Válida."
          en: "Valid."
    graph_rules:
      - id: v2i_gra
        when: "true"
        status: info
        text:
          es: "Define la pendiente inicial de la trayectoria 2."
          en: "Defines the initial slope of trajectory 2."
    likely_errors:
      - id: v2i_err
        when: "true"
        status: warning
        text:
          es: "Asumir que si [[v2i]] es cero, el blanco no tiene inercia."
          en: "Assuming that if [[v2i]] is zero, the target has no inertia."
    next_step_rules:
      - id: v2i_nex
        when: "true"
        status: info
        text:
          es: "Calcular [[Ki]]."
          en: "Calculate [[Ki]]."
  Ki:
    summary_rules:
      - id: ki_summary
        when: "true"
        status: info
        text:
          es: "Presupuesto energético total antes de la interacción."
          en: "Total energy budget before the interaction."
    physical_reading_rules:
      - id: ki_reading
        when: "true"
        status: info
        text:
          es: "Establece el presupuesto energético inicial."
          en: "Establishes the initial energy budget."
    coherence_rules:
      - id: ki_coh
        when: "Ki >= 0"
        status: ok
        text:
          es: "Siempre positiva."
          en: "Always positive."
    model_validity_rules:
      - id: ki_val
        when: "true"
        status: ok
        text:
          es: "Válida."
          en: "Valid."
    graph_rules:
      - id: ki_gra
        when: "true"
        status: info
        text:
          es: "Nivel inicial en la gráfica de energía."
          en: "Initial level in the energy graph."
    likely_errors:
      - id: ki_err
        when: "true"
        status: error
        text:
          es: "Sumar los módulos de velocidad antes de elevar al cuadrado."
          en: "Adding velocity magnitudes before squaring."
    next_step_rules:
      - id: ki_nex
        when: "true"
        status: info
        text:
          es: "Comparar con [[Kf]]."
          en: "Compare with [[Kf]]."
  Kf:
    summary_rules:
      - id: kf_summary
        when: "true"
        status: info
        text:
          es: "Energía útil que sobrevive al impacto disipativo."
          en: "Useful energy that survives the dissipative impact."
    physical_reading_rules:
      - id: kf_reading
        when: "true"
        status: info
        text:
          es: "Energía remanente tras la disipación inelástica."
          en: "Remaining energy after inelastic dissipation."
    coherence_rules:
      - id: kf_coh
        when: "Kf >= 0"
        status: ok
        text:
          es: "Siempre positiva."
          en: "Always positive."
    model_validity_rules:
      - id: kf_val
        when: "true"
        status: ok
        text:
          es: "Debe ser menor o igual que [[Ki]]."
          en: "Must be less than or equal to [[Ki]]."
    graph_rules:
      - id: kf_gra
        when: "true"
        status: info
        text:
          es: "Nivel final en la gráfica de energía."
          en: "Final level in the energy graph."
    likely_errors:
      - id: kf_err
        when: "true"
        status: error
        text:
          es: "Creer que [[Kf]] debe ser cero en un choque totalmente inelástico (solo es mínima, no nula)."
          en: "Believing that [[Kf]] must be zero in a totally inelastic collision (it is only minimal, not zero)."
    next_step_rules:
      - id: kf_nex
        when: "true"
        status: info
        text:
          es: "Calcular [[DeltaK]]."
          en: "Calculate [[DeltaK]]."
  p:
    summary_rules:
      - id: p_summary
        when: "true"
        status: info
        text:
          es: "Inercia total del sistema, invariante durante todo el proceso."
          en: "Total system inertia, invariant throughout the whole process."
    physical_reading_rules:
      - id: p_reading
        when: "true"
        status: info
        text:
          es: "Magnitud conservada que rige la redistribución de velocidades."
          en: "Conserved magnitude that governs velocity redistribution."
    coherence_rules:
      - id: p_coh
        when: "true"
        status: ok
        text:
          es: "Constante."
          en: "Constant."
    model_validity_rules:
      - id: p_val
        when: "true"
        status: ok
        text:
          es: "Válida en sistema aislado."
          en: "Valid in an isolated system."
    graph_rules:
      - id: p_gra
        when: "true"
        status: info
        text:
          es: "Línea horizontal en la gráfica de momento lineal."
          en: "Horizontal line in the momentum graph."
    likely_errors:
      - id: p_err
        when: "true"
        status: warning
        text:
          es: "Ignorar que [[p]] es un vector (aunque en 1D se trate con signos)."
          en: "Ignoring that [[p]] is a vector (even if in 1D it's treated with signs)."
    next_step_rules:
      - id: p_nex
        when: "true"
        status: info
        text:
          es: "Determinar [[v1f]] y [[v2f]]."
          en: "Determine [[v1f]] and [[v2f]]."
  loss_fraction:
    summary_rules:
      - id: lf_summary
        when: "true"
        status: info
        text:
          es: "Porcentaje de ineficiencia energética del impacto."
          en: "Percentage of the impact's energy inefficiency."
    physical_reading_rules:
      - id: lf_reading
        when: "true"
        status: info
        text:
          es: "Mide la severidad disipativa del choque."
          en: "Measures the dissipative severity of the collision."
    coherence_rules:
      - id: lf_coh
        when: "loss_fraction >= 0 && loss_fraction <= 1"
        status: ok
        text:
          es: "Consistente."
          en: "Consistent."
    model_validity_rules:
      - id: lf_val
        when: "true"
        status: ok
        text:
          es: "Válida."
          en: "Valid."
    graph_rules:
      - id: lf_gra
        when: "true"
        status: info
        text:
          es: "Representa el salto energético relativo."
          en: "Represents the relative energy jump."
    likely_errors:
      - id: lf_err
        when: "true"
        status: error
        text:
          es: "Confundir la fracción de pérdida con el coeficiente de restitución."
          en: "Confusing the loss fraction with the restitution coefficient."
    next_step_rules:
      - id: lf_nex
        when: "true"
        status: info
        text:
          es: "Finalizar análisis."
          en: "Finish analysis."
  K:
    summary_rules:
      - id: K_summary
        when: "true"
        status: info
        text:
          es: "Actividad cinética global del sistema de partículas."
          en: "Global kinetic activity of the particle system."
    physical_reading_rules:
      - id: K_reading
        when: "true"
        status: info
        text:
          es: "Mide la actividad cinética."
          en: "Measures kinetic activity."
    coherence_rules:
      - id: K_coh
        when: "K >= 0"
        status: ok
        text:
          es: "Siempre positiva o nula."
          en: "Always positive or null."
    model_validity_rules:
      - id: K_val
        when: "true"
        status: ok
        text:
          es: "Válida."
          en: "Valid."
    graph_rules:
      - id: K_gra
        when: "true"
        status: info
        text:
          es: "Evolución de la energía."
          en: "Energy evolution."
    likely_errors:
      - id: K_err
        when: "true"
        status: warning
        text:
          es: "Creer que la energía total del universo cambia (solo cambia la forma)."
          en: "Believing that the universe's total energy changes (only the form changes)."
    next_step_rules:
      - id: K_nex
        when: "true"
        status: info
        text:
          es: "Analizar disipación."
          en: "Analyze dissipation."
`;export{e as default};
