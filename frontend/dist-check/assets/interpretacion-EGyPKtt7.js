const e=`version: 2
id: interpretacion-ejemplos-de-equilibrio
leaf_id: ejemplos-de-equilibrio
nombre:
  es: Interpretación de ejemplos de equilibrio
  en: Interpretation of equilibrium examples
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: dinamica
  parent_id: equilibrio-traslacion
  ruta_relativa: fisica-clasica/mecanica/dinamica/estatica/equilibrio-traslacion/ejemplos-de-equilibrio
dependencies:
  formulas:
    - peso_desde_masa
    - normal_plano_inclinado
    - componente_paralela_del_peso
    - rozamiento_estatico_limite
    - tension_nudo_simetrico
  magnitudes:
    - W
    - m
    - N
    - T
    - F_s_max
    - W_parallel
    - mu_s
    - alpha
    - theta
result_blocks:
  summary:
    title:
      es: Resumen físico
      en: Physical summary
  physical_reading:
    title:
      es: Lectura física
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
      es: Lectura del gráfico
      en: Graph reading
  likely_errors:
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    title:
      es: Siguiente paso
      en: Next step
output_contract:
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
targets:
  W:
    summary_rules:
      - id: weight_summary
        when: "W > 0"
        status: ok
        text:
          es: El peso resume la carga gravitatoria que las demas fuerzas deben equilibrar.
          en: Weight summarizes the gravitational load that the other forces must balance.
    physical_reading_rules:
      - id: weight_reading
        when: "W > 0"
        status: info
        text:
          es: Un aumento de W obliga a crecer a la reaccion o a la tension que sostienen el sistema.
          en: An increase in W forces the supporting reaction or tension to grow.
    coherence_rules:
      - id: weight_positive
        when: "W > 0"
        status: ok
        text:
          es: El valor del peso es coherente como modulo positivo de una fuerza.
          en: The weight value is coherent as a positive force magnitude.
    model_validity_rules:
      - id: weight_model
        when: "true"
        status: ok
        text:
          es: La interpretacion supone gravedad aproximadamente uniforme en todo el sistema.
          en: The interpretation assumes approximately uniform gravity throughout the system.
    graph_rules:
      - id: weight_graph
        when: "true"
        status: info
        text:
          es: En el grafico, la flecha de carga debe crecer si W aumenta.
          en: In the graph, the load arrow should grow if W increases.
    likely_errors:
      - id: weight_mass_mix
        when: "W < 30"
        status: warning
        text:
          es: Si el resultado parece demasiado pequeno, revisa si usaste masa sin multiplicar por g.
          en: If the result looks too small, check whether you used mass without multiplying by g.
    next_step_rules:
      - id: weight_next
        when: "true"
        status: info
        text:
          es: Tras fijar W, identifica que fuerza concreta lo compensa en cada ejemplo.
          en: After fixing W, identify which specific force balances it in each example.

  N:
    summary_rules:
      - id: normal_summary
        when: "N >= 0"
        status: ok
        text:
          es: La normal mide cuanto comprime el cuerpo a la superficie y cuanto responde la superficie.
          en: The normal measures how much the body compresses the surface and how the surface responds.
    physical_reading_rules:
      - id: normal_small_angle
        when: "alpha < 0.2"
        status: info
        text:
          es: Con un plano poco inclinado, la normal queda muy cercana al peso total.
          en: With a mildly inclined plane, the normal stays very close to total weight.
    coherence_rules:
      - id: normal_bound
        when: "N <= W + 1e-9"
        status: ok
        text:
          es: La normal no supera al peso, como cabe esperar en una rampa ordinaria.
          en: The normal does not exceed the weight, as expected on an ordinary ramp.
    model_validity_rules:
      - id: normal_model
        when: "alpha >= 0 && alpha < 1.57079632679"
        status: ok
        text:
          es: La lectura de N supone contacto mantenido y ausencia de aceleracion perpendicular al plano.
          en: Reading N assumes contact is maintained and there is no acceleration perpendicular to the plane.
    graph_rules:
      - id: normal_graph
        when: "true"
        status: info
        text:
          es: La flecha normal debe ser perpendicular al plano, no vertical.
          en: The normal arrow must be perpendicular to the plane, not vertical.
    likely_errors:
      - id: normal_swap
        when: "N > W + 1e-9"
        status: error
        text:
          es: Si N supera a W, casi seguro se han intercambiado seno y coseno.
          en: If N exceeds W, sine and cosine were almost certainly swapped.
    next_step_rules:
      - id: normal_next
        when: "true"
        status: info
        text:
          es: Usa N para decidir el limite de rozamiento estatico disponible.
          en: Use N to determine the available maximum static friction.

  F_s_max:
    summary_rules:
      - id: friction_summary
        when: "F_s_max >= 0"
        status: ok
        text:
          es: El rozamiento maximo fija la capacidad del contacto para sostener el reposo.
          en: Maximum friction sets the contact's ability to sustain rest.
    physical_reading_rules:
      - id: friction_compare
        when: "W_parallel <= F_s_max"
        status: ok
        text:
          es: La adherencia disponible basta para anular la tendencia a deslizar.
          en: The available sticking capability is enough to cancel the tendency to slide.
      - id: friction_insufficient
        when: "W_parallel > F_s_max"
        status: warning
        text:
          es: La componente paralela supera el limite de adherencia; el reposo no puede mantenerse.
          en: The parallel component exceeds the sticking limit; rest cannot be maintained.
    coherence_rules:
      - id: friction_positive
        when: "F_s_max >= 0"
        status: ok
        text:
          es: El valor calculado es coherente como cota superior del rozamiento estatico.
          en: The calculated value is coherent as an upper bound for static friction.
    model_validity_rules:
      - id: friction_model
        when: "mu_s >= 0 && N >= 0"
        status: ok
        text:
          es: Esta lectura usa el modelo seco de Coulomb y no describe superficies deformables complejas.
          en: This reading uses the dry Coulomb model and does not describe complex deformable surfaces.
    graph_rules:
      - id: friction_graph
        when: "true"
        status: info
        text:
          es: En el grafico, la barra de adherencia debe compararse visualmente con la demanda tangencial.
          en: In the graph, the sticking bar should be visually compared with the tangential demand.
    likely_errors:
      - id: friction_equal_always
        when: "abs(F_s_max - W_parallel) < 1e-9"
        status: warning
        text:
          es: Que ambos valores coincidan puede ser correcto, pero no debe imponerse sin justificar que el sistema esta al limite.
          en: Having both values match can be correct, but it should not be imposed without justifying that the system is at the limit.
    next_step_rules:
      - id: friction_next
        when: "true"
        status: info
        text:
          es: Si el reposo falla, el siguiente paso es pasar a dinamica con rozamiento.
          en: If rest fails, the next step is to move to dynamics with friction.

  T:
    summary_rules:
      - id: tension_summary
        when: "T > 0"
        status: ok
        text:
          es: La tension encontrada es la fuerza que cada cable debe transmitir para sostener la carga.
          en: The obtained tension is the force each cable must transmit to support the load.
    physical_reading_rules:
      - id: tension_angle
        when: "theta < 0.35"
        status: warning
        text:
          es: Un angulo pequeno obliga a tensiones muy grandes aunque el peso no cambie.
          en: A small angle forces very large tensions even if the weight does not change.
      - id: tension_vertical
        when: "theta > 1.2"
        status: info
        text:
          es: Con cables casi verticales la tension se acerca a la mitad del peso.
          en: With nearly vertical cables the tension approaches half the weight.
    coherence_rules:
      - id: tension_bound
        when: "T >= W / 2"
        status: ok
        text:
          es: La tension cumple la cota minima esperada para un soporte simetrico.
          en: The tension satisfies the minimum bound expected for a symmetric support.
    model_validity_rules:
      - id: tension_model
        when: "theta > 0 && theta <= 1.57079632679"
        status: ok
        text:
          es: La formula supone dos cables identicos, sin masa y con el mismo angulo.
          en: The formula assumes two identical massless cables with the same angle.
    graph_rules:
      - id: tension_graph
        when: "true"
        status: info
        text:
          es: Las flechas de tension deben seguir la direccion de cada cable y alejarse del nudo.
          en: Tension arrows must follow each cable and point away from the node.
    likely_errors:
      - id: tension_angle_reference
        when: "T < W / 2"
        status: error
        text:
          es: Una tension menor que la mitad del peso indica un error de signo o de referencia angular.
          en: A tension smaller than half the weight indicates a sign or angular-reference error.
    next_step_rules:
      - id: tension_next
        when: "true"
        status: info
        text:
          es: Despues de hallar T, conviene compararla con la resistencia admisible del cable real.
          en: After finding T, compare it with the allowable strength of the real cable.

  W_parallel:
    summary_rules:
      - id: wparallel_summary
        when: "W_parallel >= 0"
        status: ok
        text:
          es: W_parallel mide la parte del peso que intenta hacer deslizar el cuerpo.
          en: W_parallel measures the part of weight that tries to make the body slide.
    physical_reading_rules:
      - id: wparallel_reading
        when: "alpha > 0"
        status: info
        text:
          es: A mayor angulo del plano, mayor demanda tangencial para el equilibrio.
          en: The larger the plane angle, the larger the tangential demand for equilibrium.
    coherence_rules:
      - id: wparallel_bound
        when: "W_parallel <= W + 1e-9"
        status: ok
        text:
          es: La componente paralela no supera al peso total.
          en: The parallel component does not exceed the total weight.
    model_validity_rules:
      - id: wparallel_model
        when: "alpha >= 0"
        status: ok
        text:
          es: La lectura supone que el eje tangencial esta alineado con la rampa.
          en: The reading assumes the tangential axis is aligned with the ramp.
    graph_rules:
      - id: wparallel_graph
        when: "true"
        status: info
        text:
          es: En el grafico, la flecha tangencial debe crecer al aumentar alpha.
          en: In the graph, the tangential arrow should grow as alpha increases.
    likely_errors:
      - id: wparallel_swap
        when: "W_parallel > W + 1e-9"
        status: error
        text:
          es: Si W_parallel supera a W, hay un error de proyeccion o de unidades.
          en: If W_parallel exceeds W, there is a projection or unit error.
    next_step_rules:
      - id: wparallel_next
        when: "true"
        status: info
        text:
          es: El siguiente paso es comparar W_parallel con el rozamiento maximo disponible.
          en: The next step is to compare W_parallel with the maximum available friction.

  m:
    summary_rules:
      - id: mass_summary
        when: "m > 0"
        status: ok
        text:
          es: La masa fija el origen inercial y gravitatorio de la carga.
          en: Mass sets the inertial and gravitational origin of the load.
    physical_reading_rules:
      - id: mass_reading
        when: "m > 0"
        status: info
        text:
          es: Si m aumenta con la misma geometria, tambien lo hacen W y las fuerzas de equilibrio.
          en: If m increases with the same geometry, W and the balancing forces also increase.
    coherence_rules:
      - id: mass_positive
        when: "m > 0"
        status: ok
        text:
          es: La masa se mantiene en el dominio fisico esperado del leaf.
          en: Mass remains in the expected physical domain of the leaf.
    model_validity_rules:
      - id: mass_model
        when: "true"
        status: ok
        text:
          es: La masa se interpreta como escalar concentrado en el cuerpo estudiado.
          en: Mass is interpreted as a scalar concentrated on the studied body.
    graph_rules:
      - id: mass_graph
        when: "true"
        status: info
        text:
          es: En el grafico no aparece como flecha directa, pero controla el tamano de W.
          en: In the graph it does not appear as a direct arrow, but it controls the size of W.
    likely_errors:
      - id: mass_weight_confusion
        when: "m > 0 && W < m"
        status: warning
        text:
          es: Si W resulta menor que m en la Tierra, revisa si confundiste masa con peso.
          en: If W becomes smaller than m on Earth, check whether mass and weight were confused.
    next_step_rules:
      - id: mass_next
        when: "true"
        status: info
        text:
          es: Convierte siempre m en W antes de plantear el equilibrio.
          en: Always convert m into W before setting the equilibrium equations.

  mu_s:
    summary_rules:
      - id: mus_summary
        when: "mu_s >= 0"
        status: ok
        text:
          es: mu_s resume la calidad de adherencia del contacto.
          en: mu_s summarizes the sticking quality of the contact.
    physical_reading_rules:
      - id: mus_reading
        when: "mu_s < 0.2"
        status: warning
        text:
          es: Un mu_s muy bajo hace fragil el reposo en pendientes moderadas.
          en: A very low mu_s makes rest fragile on moderate slopes.
    coherence_rules:
      - id: mus_positive
        when: "mu_s >= 0"
        status: ok
        text:
          es: El coeficiente se mantiene no negativo, como requiere el modelo.
          en: The coefficient remains nonnegative, as required by the model.
    model_validity_rules:
      - id: mus_model
        when: "true"
        status: ok
        text:
          es: El parametro se usa dentro del modelo seco simple de Coulomb.
          en: The parameter is used within the simple dry Coulomb model.
    graph_rules:
      - id: mus_graph
        when: "true"
        status: info
        text:
          es: En el grafico, aumentar mu_s debe elevar la barra de adherencia.
          en: In the graph, increasing mu_s should raise the sticking bar.
    likely_errors:
      - id: mus_force_confusion
        when: "mu_s > 1.2"
        status: warning
        text:
          es: Un valor muy alto puede indicar que se introdujo una fuerza en lugar de un coeficiente.
          en: A very large value may indicate that a force was entered instead of a coefficient.
    next_step_rules:
      - id: mus_next
        when: "true"
        status: info
        text:
          es: Usa mu_s junto con N para calcular el limite de rozamiento, no la fuerza real sin mas.
          en: Use mu_s together with N to compute the friction limit, not the actual force by itself.
cross_checks:
  - id: plane_rest_consistency
    affects: [N, F_s_max, W_parallel]
    when: "alpha >= 0"
    severity: ok
    text:
      es: En la rampa, normal, adherencia y componente paralela deben leerse juntas para decidir si el reposo es posible.
      en: On the ramp, normal, sticking capability, and the parallel component must be read together to decide whether rest is possible.
  - id: cable_efficiency_consistency
    affects: [W, T, theta]
    when: "theta > 0"
    severity: ok
    text:
      es: En cables simetricos, el angulo controla la tension necesaria para el mismo peso.
      en: In symmetric cables, the angle controls the required tension for the same weight.
graph_binding:
  enabled: true
  channels: [load_arrow, normal_arrow, tension_arrow, friction_bar, parallel_component]
mini_graph:
  enabled: true
  preferred_type: Svg
`;export{e as default};
