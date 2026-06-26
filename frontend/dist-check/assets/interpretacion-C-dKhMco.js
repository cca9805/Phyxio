const e=`version: 2
id: interpretacion-concepto-de-fluido
leaf_id: concepto-de-fluido
nombre:
  es: Interpretación de la Fluidez
  en: Fluidity Interpretation
scope: null
area: fisica-clasica
bloque: mecanica
subbloque: fluidos
parent_id: fundamentos
ruta_relativa: fisica-clasica/mecanica/fluidos/fundamentos/concepto-de-fluido
dependencies:
  requires_formulas: true
  requires_magnitudes: true
  supports_graph_binding: true
  formulas:
  - newton_viscosity
  - shear_rate_def
  - viscosity_kinematic
  - shear_force_total
  - tangential_velocity_rot
  - omega_from_RPM
  magnitudes:
  - mu
  - tau
  - du_dy
  - rho
  - nu
  - A
  - F
  - V
  - h
  - omega
  - R
  - N
  - L
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
      es: "Resumen físico"
      en: "Physical summary"
  physical_reading:
    title:
      es: "Lectura física"
      en: "Physical reading"
  coherence:
    title:
      es: "Coherencia"
      en: "Coherence"
  model_validity:
    title:
      es: "Validez del modelo"
      en: "Model validity"
  graph_reading:
    title:
      es: "Lectura gráfica"
      en: "Graph reading"
  likely_errors:
    title:
      es: "Errores probables"
      en: "Likely errors"
  next_step:
    title:
      es: "Siguiente paso"
      en: "Next step"
targets:
  mu:
    summary_rules:
    - id: mu_summary_viscosity
      when: mu > 0
      status: ok
      text:
        es: "El fluido presenta resistencia interna al movimiento porque tiene viscosidad lo cual describe su balance energético."
        en: "The fluid exhibits internal resistance to movement because it has viscosity which describes its energy balance."
    physical_reading_rules:
    - id: mu_reading_friction
      when: 'true'
      status: info
      text:
        es: "Una viscosidad alta significa que las capas de fluido se oponen al deslizamiento porque existe fricción interna."
        en: "High viscosity means that fluid layers oppose sliding because internal friction exists."
    coherence_rules:
    - id: mu_coherence_sign
      when: 'true'
      status: ok
      text:
        es: "La viscosidad mu debe ser siempre positiva por tanto el resultado es coherente con la termodinámica."
        en: "The viscosity mu must always be positive therefore the result is coherent with thermodynamics."
    model_validity_rules:
    - id: mu_validity_newtonian
      when: 'true'
      status: ok
      text:
        es: "El modelo es válido si la viscosidad mu es constante; si asume un régimen no-newtoniano el modelo falla."
        en: "The model is valid if viscosity mu is constant; if it assumes a non-Newtonian regime the model fails."
    graph_rules:
    - id: mu_graph_slope
      when: 'true'
      status: info
      text:
        es: "En el gráfico, la viscosidad indica la pendiente de la curva por tanto domina la respuesta al esfuerzo."
        en: "In the graph, viscosity indicates the slope of the curve therefore it dominates the response to stress."
    likely_errors:
    - id: mu_error_density
      when: 'true'
      status: warning
      text:
        es: "No vayas a confundir mu con la densidad; creer que son lo mismo es un error común de interpretación."
        en: "Do not confuse mu with density; believing they are the same is a common interpretation mistake."
    next_step_rules:
    - id: mu_next_navier
      when: 'true'
      status: info
      text:
        es: "Ahora prueba a usar mu en las ecuaciones de Navier-Stokes para continuar tu estudio ahora."
        en: "Now try to use mu in the Navier-Stokes equations to continue your study now."
  tau:
    summary_rules:
    - id: tau_summary_stress
      when: tau != 0
      status: ok
      text:
        es: "Se está aplicando un esfuerzo cortante que deforma el fluido porque indica la presencia de una carga."
        en: "A shear stress is being applied that deforms the fluid because it indicates the presence of a load."
    physical_reading_rules:
    - id: tau_reading_deformation
      when: 'true'
      status: info
      text:
        es: "El esfuerzo tau se compensa con la fricción interna lo cual indica una deformación continua."
        en: "The stress tau is balanced by internal friction which indicates continuous deformation."
    coherence_rules:
    - id: tau_coherence_dir
      when: 'true'
      status: ok
      text:
        es: "El esfuerzo tau debe seguir la dirección del movimiento por tanto el signo es coherente."
        en: "The stress tau must follow the direction of movement therefore the sign is coherent."
    model_validity_rules:
    - id: tau_validity_yield
      when: 'true'
      status: ok
      text:
        es: "El modelo supone que el fluido es ideal; si no fluye bajo tau pequeño el modelo de fluido deja de ser válido."
        en: "The model assumes the fluid is ideal; if it does not flow under small tau the fluid model ceases to be valid."
    graph_rules:
    - id: tau_graph_axis
      when: 'true'
      status: info
      text:
        es: "El esfuerzo tau se representa en el eje vertical por tanto muestra la magnitud de la carga en el gráfico."
        en: "The stress tau is represented on the vertical axis therefore it shows the magnitude of the load on the graph."
    likely_errors:
    - id: tau_error_solid
      when: 'true'
      status: warning
      text:
        es: "No vayas a pensar que tau es presión; olvidar que tau es tangencial es un error de modelo."
        en: "Do not think that tau is pressure; forgetting that tau is tangential is a model mistake."
    next_step_rules:
    - id: tau_next_pressure
      when: 'true'
      status: info
      text:
        es: "Siguiente paso: analiza el balance entre el esfuerzo cortante y el gradiente de presión ahora."
        en: "Next step: analyze the balance between shear stress and pressure gradient now."
  du_dy:
    summary_rules:
    - id: du_dy_summary_gradient
      when: 'true'
      status: info
      text:
        es: "El gradiente representa la tasa a la que cambian las capas de velocidad porque describe la deformación."
        en: "The gradient represents the rate at which velocity layers change because it describes the deformation."
    physical_reading_rules:
    - id: du_dy_reading_rate
      when: 'true'
      status: info
      text:
        es: "Este gradiente se opone a la viscosidad en la ecuación significa la rapidez de deformación."
        en: "This gradient opposes viscosity in the equation it means the rate of deformation."
    coherence_rules:
    - id: du_dy_coherence_unit
      when: 'true'
      status: ok
      text:
        es: "El gradiente tiene unidades de s^-1 por tanto es coherente con una tasa de deformación."
        en: "The gradient has units of s^-1 therefore it is coherent with a strain rate."
    model_validity_rules:
    - id: du_dy_validity_slip
      when: 'true'
      status: ok
      text:
        es: "El modelo asume no-deslizamiento en la pared; si el fluido desliza, la validez del cálculo de du_dy falla."
        en: "The model assumes no-slip at the wall; if the fluid slips, the validity of the du_dy calculation fails."
    graph_rules:
    - id: du_dy_graph_rate
      when: 'true'
      status: info
      text:
        es: "La tasa de deformación domina el eje horizontal del gráfico por tanto indica la rapidez del flujo."
        en: "The strain rate dominates the horizontal axis of the graph therefore it indicates the speed of the flow."
    likely_errors:
    - id: du_dy_error_acceleration
      when: 'true'
      status: warning
      text:
        es: "No vayas a suponer que du_dy es la aceleración; pensar que es un cambio temporal es un error."
        en: "Do not assume that du_dy is acceleration; thinking it is a temporal change is a mistake."
    next_step_rules:
    - id: du_dy_next_profile
      when: 'true'
      status: info
      text:
        es: "Conecta el gradiente con la integral para obtener el perfil de velocidades ahora."
        en: "Connect the gradient with the integral to obtain the velocity profile now."
`;export{e as default};
