const e=`version: 2
id: interpretacion-arrastre-cuadratico
leaf_id: arrastre-cuadratico
nombre:
  es: Interpretacion de Arrastre cuadratico
  en: Interpretation of Quadratic Drag
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: dinamica
  parent_id: fuerza-de-arrastre
  ruta_relativa: fisica-clasica/mecanica/dinamica/fuerzas/fuerza-de-arrastre/arrastre-cuadratico
dependencies:
  formulas:
  - arrastre_cuadratico_reducido
  - coeficiente_cuadratico_equivalente
  magnitudes:
  - F_d
  - c
  - v
  - rho
  - C_d
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
  F_d:
    summary_rules:
    - id: F_d_summary
      when: 'true'
      status: info
      text:
        es: F_d resume una resistencia que se vuelve mucho mas exigente al crecer la rapidez.
        en: F_d summarizes a resistance that becomes much more demanding as speed increases.
    coherence_rules:
    - id: F_d_coherence
      when: 'true'
      status: ok
      text:
        es: Si v se duplica y c no cambia, F_d debe aumentar aproximadamente cuatro veces.
        en: If v doubles while c stays fixed, F_d should rise by roughly a factor of four.
    physical_reading_rules:
    - id: F_d_physical
      when: 'true'
      status: info
      text:
        es: F_d crece porque el flujo inercial y la estela imponen una penalizacion cada vez mayor al aumentar la rapidez.
        en: F_d grows because inertial flow and wake formation impose a larger and larger penalty as speed increases.
    model_validity_rules:
    - id: F_d_validity
      when: 'true'
      status: ok
      text:
        es: Interpreta F_d con este modelo solo si el regimen cuadratico sigue siendo razonable.
        en: Interpret F_d with this model only while the quadratic regime remains reasonable.
    graph_rules:
    - id: F_d_graph
      when: 'true'
      status: info
      text:
        es: En Coord, una curva convexa hacia arriba indica la dependencia cuadratica con v.
        en: In Coord, an upward-curving graph indicates the quadratic dependence on v.
    likely_errors:
    - id: F_d_warn
      when: 'true'
      status: warning
      text:
        es: No leas F_d como si creciera igual que en el modelo lineal.
        en: Do not read F_d as if it grew the same way as in the linear model.
    next_step_rules:
    - id: F_d_next
      when: 'true'
      status: info
      text:
        es: Usa F_d para conectar el leaf con velocidad terminal y con decisiones aerodinamicas.
        en: Use F_d to connect the leaf with terminal velocity and aerodynamic decisions.
  c:
    summary_rules:
    - id: c_summary
      when: 'true'
      status: info
      text:
        es: c resume en un solo parametro la contribucion del medio y de la geometria.
        en: c summarizes the contribution of medium and geometry in a single parameter.
    coherence_rules:
    - id: c_coherence
      when: 'true'
      status: ok
      text:
        es: Si rho, C_d o A aumentan, c tambien debe aumentar.
        en: If rho, C_d, or A increase, c should also increase.
    physical_reading_rules:
    - id: c_physical
      when: 'true'
      status: info
      text:
        es: Un c grande significa que el entorno castiga mucho la rapidez alta porque combina medio denso, forma poco afinada o area frontal grande.
        en: A large c means the environment penalizes high speed strongly because it combines dense fluid, blunt shape, or large frontal area.
    model_validity_rules:
    - id: c_validity
      when: 'true'
      status: ok
      text:
        es: Trata c como constante solo si el regimen y la orientacion del cuerpo no cambian mucho.
        en: Treat c as constant only if regime and body orientation do not change much.
    graph_rules:
    - id: c_graph
      when: 'true'
      status: info
      text:
        es: En la grafica, c controla cuanto se eleva toda la curva de arrastre.
        en: In the graph, c controls how high the whole drag curve rises.
    likely_errors:
    - id: c_warn
      when: 'true'
      status: warning
      text:
        es: No confundas c con una fuerza; es un parametro del modelo.
        en: Do not confuse c with a force; it is a model parameter.
    next_step_rules:
    - id: c_next
      when: 'true'
      status: info
      text:
        es: Usa c para enlazar con C_d, densidad y area de referencia.
        en: Use c to connect with C_d, density, and reference area.
  C_d:
    summary_rules:
    - id: C_d_summary
      when: 'true'
      status: info
      text:
        es: C_d resume como la forma y el regimen contribuyen al valor de c.
        en: C_d summarizes how shape and regime contribute to the value of c.
    coherence_rules:
    - id: C_d_coherence
      when: 'true'
      status: ok
      text:
        es: Si la postura empeora o la forma se vuelve menos afinada, C_d suele aumentar.
        en: If posture worsens or the shape becomes less streamlined, C_d usually increases.
    physical_reading_rules:
    - id: C_d_physical
      when: 'true'
      status: info
      text:
        es: C_d importa porque convierte diferencias de forma en diferencias de resistencia efectiva.
        en: C_d matters because it turns shape differences into effective resistance differences.
    model_validity_rules:
    - id: C_d_validity
      when: 'true'
      status: ok
      text:
        es: Trata C_d como constante solo si la postura y el regimen cambian poco.
        en: Treat C_d as constant only if posture and regime change little.
    graph_rules:
    - id: C_d_graph
      when: 'true'
      status: info
      text:
        es: Cambios en C_d desplazan la curva a traves de su efecto sobre c.
        en: Changes in C_d shift the curve through their effect on c.
    likely_errors:
    - id: C_d_warn
      when: 'true'
      status: warning
      text:
        es: No uses el mismo C_d si la escena cambia de postura o de regimen.
        en: Do not use the same C_d if posture or regime changes.
    next_step_rules:
    - id: C_d_next
      when: 'true'
      status: info
      text:
        es: Usa C_d para enlazar este leaf con coeficiente de arrastre.
        en: Use C_d to connect this leaf with drag coefficient.
  v:
    summary_rules:
    - id: v_summary
      when: 'true'
      status: info
      text:
        es: v resume la rapidez relativa cuya subida hace crecer el arrastre de forma no lineal.
        en: v summarizes the relative speed whose increase makes drag grow nonlinearly.
    coherence_rules:
    - id: v_coherence
      when: 'true'
      status: ok
      text:
        es: Doblar v debe cuadruplicar F_d si c sigue fijo.
        en: Doubling v must quadruple F_d if c remains fixed.
    physical_reading_rules:
    - id: v_physical
      when: 'true'
      status: info
      text:
        es: v importa porque en este regimen la velocidad alta dispara la demanda energetica y resistiva del flujo.
        en: v matters because in this regime high speed sharply increases both energetic and resistive demand.
    model_validity_rules:
    - id: v_validity
      when: 'true'
      status: ok
      text:
        es: Usa v dentro del modelo cuadratico cuando el flujo sea suficientemente inercial.
        en: Use v inside the quadratic model when the flow is sufficiently inertial.
    graph_rules:
    - id: v_graph
      when: 'true'
      status: info
      text:
        es: En Coord, v es la variable horizontal que revela la curvatura propia del modelo.
        en: In Coord, v is the horizontal variable that reveals the model's characteristic curvature.
    likely_errors:
    - id: v_warn
      when: 'true'
      status: warning
      text:
        es: No leas la curva como si fuera una recta; pequenos cambios de v pueden cambiar mucho F_d.
        en: Do not read the curve as if it were a straight line; small changes in v can change F_d strongly.
    next_step_rules:
    - id: v_next
      when: 'true'
      status: info
      text:
        es: Usa v para conectar este leaf con potencia disipada y velocidad terminal.
        en: Use v to connect this leaf with dissipated power and terminal velocity.
`;export{e as default};
