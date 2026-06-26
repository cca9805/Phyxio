const e=`version: 5\r
id: interpretacion-navier-stokes-intro\r
leaf_id: ecuacion-de-navier-stokes-intro\r
nombre:\r
  es: Interpretacion de Navier-Stokes\r
  en: Navier-Stokes Interpretation\r
scope: mecanica-fluidos\r
\r
dependencies:\r
  requires_formulas: true\r
  requires_magnitudes: true\r
  requires_results: true\r
  supports_graph_binding: true\r
  magnitudes: [a, gp, mu, lapu, rho, gx, Re, v, L]\r
  formulas: [balance_1d, re_apoyo]\r
\r
output_contract:\r
  sections:\r
    - summary\r
    - physical_reading\r
    - coherence\r
    - model_validity\r
    - graph_reading\r
    - likely_errors\r
    - next_step\r
\r
result_blocks:\r
  summary:\r
    title:\r
      es: Resumen de Dinámica\r
      en: Dynamics Summary\r
  physical_reading:\r
    title:\r
      es: Lectura Física Profunda\r
      en: Deep Physical Reading\r
  coherence:\r
    title:\r
      es: Análisis de Coherencia\r
      en: Coherence Analysis\r
  model_validity:\r
    title:\r
      es: Validez del Modelo\r
      en: Model Validity\r
  graph_reading:\r
    title:\r
      es: Interpretación Gráfica\r
      en: Graph Interpretation\r
  likely_errors:\r
    title:\r
      es: Errores Comunes Detectados\r
      en: Common Errors Detected\r
  next_step:\r
    title:\r
      es: Siguiente Paso Sugerido\r
      en: Suggested Next Step\r
\r
targets:\r
  a:\r
    summary_rules:\r
      - id: rule-a-summary\r
        when: "true"\r
        status: success\r
        text:\r
          es: "El balance de fuerzas resultante describe cómo la aceleración material [[a]] depende de la competencia entre presión y viscosidad."\r
          en: "The resulting force balance describes how material acceleration [[a]] depends on the competition between pressure and viscosity."\r
    physical_reading_rules:\r
      - id: rule-a-reading\r
        when: "true"\r
        status: info\r
        text:\r
          es: "La aceleración material [[a]] indica la tasa de cambio de velocidad de una partícula fluida porque el gradiente de presión [[gp]] impulsa el flujo mientras que la viscosidad [[mu]] se opone al movimiento."\r
          en: "Material acceleration [[a]] indicates the rate of change of velocity of a fluid particle because the pressure gradient [[gp]] drives the flow while viscosity [[mu]] opposes the motion."\r
    coherence_rules:\r
      - id: rule-a-coherence\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El valor de [[a]] es coherente con la segunda ley de Newton aplicada al volumen de control del fluido analizado."\r
          en: "The value of [[a]] is coherent with Newton's second law applied to the control volume of the analyzed fluid."\r
    model_validity_rules:\r
      - id: rule-a-validity\r
        when: "true"\r
        status: success\r
        text:\r
          es: "Este modelo es válido para un flujo desarrollado donde la aceleración local es despreciable frente a la aceleración material total calculada."\r
          en: "This model is valid for a developed flow where local acceleration is negligible compared to the total calculated material acceleration."\r
    graph_rules:\r
      - id: rule-a-graph\r
        when: "true"\r
        status: info\r
        text:\r
          es: "En el gráfico, la curva de aceleración muestra la respuesta dinámica del sistema ante variaciones en el gradiente de presión impulsor."\r
          en: "In the graph, the acceleration curve shows the dynamic response of the system to variations in the driving pressure gradient."\r
    likely_errors:\r
      - id: rule-a-errors\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Es un error común confundir la aceleración de la partícula con el cambio de velocidad en un punto fijo del espacio."\r
          en: "It is a common mistake to confuse the particle's acceleration with the change in velocity at a fixed point in space."\r
    next_step_rules:\r
      - id: rule-a-next\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El siguiente paso es integrar esta aceleración para obtener el perfil de velocidades completo a lo largo del conducto."\r
          en: "The next step is to integrate this acceleration to obtain the complete velocity profile along the conduit."\r
\r
  Re:\r
    summary_rules:\r
      - id: rule-re-summary\r
        when: "true"\r
        status: success\r
        text:\r
          es: "El número de Reynolds [[Re]] resume el estado del flujo, comparando la inercia del fluido con su resistencia viscosa interna."\r
          en: "The Reynolds number [[Re]] summarizes the flow state, comparing the fluid's inertia with its internal viscous resistance."\r
    physical_reading_rules:\r
      - id: rule-re-reading\r
        when: "Re < 2300"\r
        status: success\r
        text:\r
          es: "El flujo es laminar porque las fuerzas viscosas [[mu]] dominan sobre la inercia [[rho]], lo que significa que el movimiento es ordenado."\r
          en: "The flow is laminar because viscous forces [[mu]] dominate over inertia [[rho]], which means the motion is orderly."\r
      - id: rule-re-turbulent\r
        when: "Re >= 4000"\r
        status: warning\r
        text:\r
          es: "El flujo es turbulento porque la inercia [[rho]] domina sobre la viscosidad [[mu]], lo que indica que se formarán remolinos y caos."\r
          en: "The flow is turbulent because inertia [[rho]] dominates over viscosity [[mu]], indicating that eddies and chaos will form."\r
    coherence_rules:\r
      - id: rule-re-coherence\r
        when: "Re >= 0"\r
        status: success\r
        text:\r
          es: "Número de Reynolds coherente (no puede ser negativo)."\r
          en: "Coherent Reynolds number (cannot be negative)."\r
    model_validity_rules:\r
      - id: rule-re-validity\r
        when: "Re > 10000"\r
        status: danger\r
        text:\r
          es: "El modelo laminar deja de valer a este número de Reynolds; se requiere un modelo de turbulencia para resultados fiables."\r
          en: "The laminar model breaks down at this Reynolds number; a turbulence model is required for reliable results."\r
    graph_rules:\r
      - id: rule-re-graph\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El Reynolds define la posición del sistema en el mapa de regímenes de flujo."\r
          en: "Reynolds defines the system's position on the flow regime map."\r
    likely_errors:\r
      - id: rule-re-mistake\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Asegúrate de no olvidar incluir el diámetro o la longitud característica [[L]] en el cálculo del número de Reynolds."\r
          en: "Make sure not to forget to include the diameter or characteristic length [[L]] in the Reynolds number calculation."\r
    next_step_rules:\r
      - id: rule-re-next\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Si Re > 2300, estudia los modelos de fricción turbulenta."\r
          en: "If Re > 2300, study turbulent friction models."\r
\r
  v:\r
    summary_rules:\r
      - id: rule-v-summary\r
        when: "true"\r
        status: info\r
        text:\r
          es: "La velocidad característica [[v]] describe la rapidez con la que el fluido transporta su cantidad de movimiento."\r
          en: "The characteristic velocity [[v]] describes the speed at which the fluid transports its momentum."\r
    physical_reading_rules:\r
      - id: rule-v-physics\r
        when: "true"\r
        status: info\r
        text:\r
          es: "La velocidad es una magnitud de estado que indica el transporte convectivo del fluido."\r
          en: "Velocity is a state magnitude indicating the convective transport of the fluid."\r
    coherence_rules:\r
      - id: rule-v-coherence\r
        when: "v >= 0"\r
        status: success\r
        text:\r
          es: "Velocidad físicamente coherente (positiva o nula)."\r
          en: "Physically coherent velocity (positive or zero)."\r
    model_validity_rules:\r
      - id: rule-v-validity\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El modelo asume que v es la velocidad media en la sección transversal."\r
          en: "The model assumes v is the average velocity in the cross section."\r
    graph_rules:\r
      - id: rule-v-graph\r
        when: "true"\r
        status: info\r
        text:\r
          es: "La velocidad se utiliza para el cálculo dinámico del número de Reynolds."\r
          en: "Velocity is used for the dynamic calculation of the Reynolds number."\r
    likely_errors:\r
      - id: rule-v-error\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "No confundas la velocidad local con la velocidad media del perfil de Navier-Stokes."\r
          en: "Do not confuse local velocity with the average velocity of the Navier-Stokes profile."\r
    next_step_rules:\r
      - id: rule-v-next\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Evalúa cómo cambia la velocidad al variar el diámetro del conducto."\r
          en: "Evaluate how velocity changes as the conduit diameter varies."\r
\r
  L:\r
    summary_rules:\r
      - id: rule-l-summary\r
        when: "true"\r
        status: info\r
        text:\r
          es: "La longitud característica [[L]] define la escala geométrica del problema y es crítica para determinar el régimen del flujo."\r
          en: "The characteristic length [[L]] defines the geometric scale of the problem and is critical for determining the flow regime."\r
    physical_reading_rules:\r
      - id: rule-l-physics\r
        when: "true"\r
        status: info\r
        text:\r
          es: "La escala espacial [[L]] determina si las fuerzas viscosas pueden amortiguar las perturbaciones del flujo."\r
          en: "The spatial scale [[L]] determines if viscous forces can dampen flow perturbations."\r
    coherence_rules:\r
      - id: rule-l-coherence\r
        when: "L > 0"\r
        status: success\r
        text:\r
          es: "Longitud característica válida y positiva."\r
          en: "Valid and positive characteristic length."\r
    model_validity_rules:\r
      - id: rule-l-validity\r
        when: "true"\r
        status: info\r
        text:\r
          es: "El modelo es sensible a la definición de L (ej. diámetro vs radio)."\r
          en: "The model is sensitive to the definition of L (e.g., diameter vs radius)."\r
    graph_rules:\r
      - id: rule-l-graph\r
        when: "true"\r
        status: info\r
        text:\r
          es: "L escala linealmente con el número de Reynolds en el análisis adimensional."\r
          en: "L scales linearly with the Reynolds number in the dimensionless analysis."\r
    likely_errors:\r
      - id: rule-l-error\r
        when: "true"\r
        status: warning\r
        text:\r
          es: "Error típico: Usar el radio en lugar del diámetro al calcular el Reynolds en tuberías."\r
          en: "Typical error: Using radius instead of diameter when calculating Reynolds in pipes."\r
    next_step_rules:\r
      - id: rule-l-next\r
        when: "true"\r
        status: info\r
        text:\r
          es: "Considera cómo afecta la escala L a la estabilidad del flujo."\r
          en: "Consider how the scale L affects flow stability."\r
\r
summary:\r
  es: "Navier-Stokes describe el balance entre la inercia de la partícula [[rho]], el empuje por presión [[gp]] y la fricción viscosa [[mu]]."\r
  en: "Navier-Stokes describes the balance between particle inertia [[rho]], pressure push [[gp]], and viscous friction [[mu]]."\r
physical_reading:\r
  es: "La aceleración material [[a]] es el resultado neto de la competencia entre el gradiente de presión impulsor y la resistencia viscosa interna."\r
  en: "Material acceleration [[a]] is the net result of the competition between the driving pressure gradient and internal viscous resistance."\r
coherence:\r
  es: "El sistema es coherente si el balance de fuerzas por unidad de volumen cierra según la segunda ley de Newton."\r
  en: "The system is coherent if the force balance per unit volume closes according to Newton's second law."\r
model_validity:\r
  es: "Válido para fluidos incompresibles Newtonianos. Requiere atención especial al número de Reynolds [[Re]] para asegurar que el régimen es laminar."\r
  en: "Valid for incompressible Newtonian fluids. Requires special attention to the Reynolds number [[Re]] to ensure the regime is laminar."\r
graph_reading:\r
  es: "El gráfico muestra cómo la respuesta dinámica del fluido escala con las fuerzas impulsoras y las propiedades del fluido."\r
  en: "The graph shows how the fluid's dynamic response scales with driving forces and fluid properties."\r
likely_errors:\r
  es: "El error más común es ignorar la condición de no deslizamiento o confundir los términos de aceleración local y convectiva."\r
  en: "The most common error is ignoring the no-slip condition or confusing the local and convective acceleration terms."\r
next_step:\r
  es: "Estudia el flujo de Poiseuille para ver cómo este balance genera perfiles de velocidad parabólicos en tuberías."\r
  en: "Study Poiseuille flow to see how this balance generates parabolic velocity profiles in pipes."\r
`;export{e as default};
