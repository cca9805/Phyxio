const e=`version: 2
id: interpretacion-normal-en-planos
leaf_id: normal-en-planos
nombre:
  es: Interpretacion de Normal en planos
  en: Interpretation of Normal Force on Inclined Planes
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: dinamica
  parent_id: normal
  ruta_relativa: fisica-clasica/mecanica/dinamica/fuerzas/normal/normal-en-planos
dependencies:
  formulas:
  - normal_horizontal_base
  - normal_inclinado_base
  - balance_perpendicular_general
  - condicion_contacto
  - gravedad_desde_normal_horizontal
  magnitudes:
  - N
  - m
  - g
  - theta
  - Fextn
  - aperp
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
  N:
    summary_rules:
    - id: N_summary
      when: 'true'
      status: info
      text:
        es: N mide cuanto debe empujar la superficie para impedir penetracion mientras el contacto siga activo.
        en: N measures how much the surface must push to prevent penetration while contact remains active.
    coherence_rules:
    - id: N_coherence
      when: 'true'
      status: ok
      text:
        es: Si N aumenta al empujar hacia el plano y disminuye al inclinar mas la rampa, la lectura es coherente.
        en: If N grows when pushing into the plane and decreases as the ramp gets steeper, the reading is coherent.
    physical_reading_rules:
    - id: N_physical
      when: 'true'
      status: info
      text:
        es: La normal no copia al peso; nace del balance perpendicular entre peso proyectado, Fextn y posible aperp.
        en: The normal force is not a copy of weight; it comes from the perpendicular balance among projected weight, Fextn, and any aperp.
    model_validity_rules:
    - id: N_validity
      when: 'true'
      status: ok
      text:
        es: Si el calculo exige una normal negativa, el modelo de contacto activo deja de ser valido.
        en: If the calculation requires a negative normal force, the active-contact model is no longer valid.
    graph_rules:
    - id: N_graph
      when: 'true'
      status: info
      text:
        es: En el grafico, N debe verse perpendicular al plano y no vertical por costumbre.
        en: In the graph, N must appear perpendicular to the plane, not vertical by habit.
    likely_errors:
    - id: N_warn
      when: 'true'
      status: warning
      text:
        es: "Error tipico: tomar N como el peso completo o dibujarla opuesta al peso."
        en: "Typical mistake: taking N as the full weight or drawing it opposite to weight."
    next_step_rules:
    - id: N_next
      when: 'true'
      status: info
      text:
        es: Tras interpretar N, revisa si su valor sostiene el contacto y como afectaria al rozamiento.
        en: After interpreting N, check whether its value keeps contact active and how it would affect friction.
  m:
    summary_rules:
    - id: m_summary
      when: 'true'
      status: info
      text:
        es: m fija la escala del peso que alimenta la componente perpendicular del balance.
        en: m sets the weight scale feeding the perpendicular component of the balance.
    coherence_rules:
    - id: m_coherence
      when: 'true'
      status: ok
      text:
        es: Si m crece con theta fija, la compresion de contacto tambien deberia crecer.
        en: If m increases at fixed theta, contact compression should also increase.
    physical_reading_rules:
    - id: m_physical
      when: 'true'
      status: info
      text:
        es: m no cambia la direccion de la normal, pero si la intensidad del peso proyectado que el plano debe sostener.
        en: m does not change the normal-force direction, but it changes the projected weight intensity the plane must support.
    model_validity_rules:
    - id: m_validity
      when: 'true'
      status: ok
      text:
        es: m se interpreta dentro de un modelo clasico donde el cuerpo puede resumirse en una sola masa.
        en: m is interpreted within a classical model where the body can be summarized by a single mass.
    graph_rules:
    - id: m_graph
      when: 'true'
      status: info
      text:
        es: Visualmente, una mayor m debe reflejarse en un peso mas dominante en el DCL.
        en: Visually, a larger m should be reflected in a more dominant weight vector in the FBD.
    likely_errors:
    - id: m_warn
      when: 'true'
      status: warning
      text:
        es: "Error tipico: creer que m solo importa en el eje tangencial y no en la normal."
        en: "Typical mistake: thinking m matters only along the tangential axis and not along the normal axis."
    next_step_rules:
    - id: m_next
      when: 'true'
      status: info
      text:
        es: Usa m para estimar rapidamente el orden de magnitud de N antes de calcular.
        en: Use m to estimate the order of magnitude of N before calculating.
  g:
    summary_rules:
    - id: g_summary
      when: 'true'
      status: info
      text:
        es: g transforma la masa en peso y fija la base gravitatoria del contacto.
        en: g turns mass into weight and sets the gravitational baseline of contact.
    coherence_rules:
    - id: g_coherence
      when: 'true'
      status: ok
      text:
        es: Con m y theta fijos, una mayor g debe aumentar la reaccion normal.
        en: With m and theta fixed, larger g should increase the normal reaction.
    physical_reading_rules:
    - id: g_physical
      when: 'true'
      status: info
      text:
        es: g no es un detalle numerico; es lo que hace que el peso proyectado apriete el cuerpo contra el plano.
        en: g is not a numerical detail; it is what makes projected weight press the body against the plane.
    model_validity_rules:
    - id: g_validity
      when: 'true'
      status: ok
      text:
        es: El uso de g constante supone un campo gravitatorio local aproximadamente uniforme.
        en: Using constant g assumes an approximately uniform local gravitational field.
    graph_rules:
    - id: g_graph
      when: 'true'
      status: info
      text:
        es: En el DCL, g se lee indirectamente a traves del peso y su proyeccion perpendicular.
        en: In the FBD, g is read indirectly through weight and its perpendicular projection.
    likely_errors:
    - id: g_warn
      when: 'true'
      status: warning
      text:
        es: "Error tipico: olvidar que la normal cambia entre condiciones de gravedad distintas."
        en: "Typical mistake: forgetting that the normal force changes under different gravity conditions."
    next_step_rules:
    - id: g_next
      when: 'true'
      status: info
      text:
        es: Despues de usar g, compara el resultado con un caso horizontal para detectar incoherencias.
        en: After using g, compare the result with a horizontal-plane case to detect inconsistencies.
  theta:
    summary_rules:
    - id: theta_summary
      when: 'true'
      status: info
      text:
        es: theta controla como se reparte el peso entre componente tangencial y componente perpendicular.
        en: theta controls how weight splits into tangential and perpendicular components.
    coherence_rules:
    - id: theta_coherence
      when: 'true'
      status: ok
      text:
        es: Si theta aumenta y el resto permanece fijo, la normal debe disminuir en el caso base.
        en: If theta increases while the rest stays fixed, the normal force should decrease in the basic case.
    physical_reading_rules:
    - id: theta_physical
      when: 'true'
      status: info
      text:
        es: theta no cambia el peso total, pero si cambia cuanto de ese peso aprieta el bloque contra la superficie.
        en: theta does not change total weight, but it changes how much of that weight presses the block into the surface.
    model_validity_rules:
    - id: theta_validity
      when: 'true'
      status: ok
      text:
        es: theta debe describir una geometria bien definida; si el plano cambia continuamente, el modelo local debe revisarse.
        en: theta must describe a well-defined geometry; if the plane changes continuously, the local model must be reviewed.
    graph_rules:
    - id: theta_graph
      when: 'true'
      status: info
      text:
        es: El grafico debe mostrar que el angulo del plano fija la direccion de la normal.
        en: The graph should show that the plane angle sets the direction of the normal force.
    likely_errors:
    - id: theta_warn
      when: 'true'
      status: warning
      text:
        es: "Error tipico: usar seno donde corresponde coseno en el eje perpendicular."
        en: "Typical mistake: using sine where cosine is needed on the perpendicular axis."
    next_step_rules:
    - id: theta_next
      when: 'true'
      status: info
      text:
        es: Tras leer theta, revisa tambien como cambia la componente tangencial del peso.
        en: After reading theta, also check how the tangential weight component changes.
  Fextn:
    summary_rules:
    - id: Fextn_summary
      when: 'true'
      status: info
      text:
        es: Fextn representa cualquier accion adicional que empuja hacia dentro o tira hacia fuera del plano.
        en: Fextn represents any additional action pushing into or pulling away from the plane.
    coherence_rules:
    - id: Fextn_coherence
      when: 'true'
      status: ok
      text:
        es: Si Fextn apunta hacia el plano, N debe crecer; si apunta hacia fuera, N debe reducirse.
        en: If Fextn points toward the plane, N should grow; if it points away, N should decrease.
    physical_reading_rules:
    - id: Fextn_physical
      when: 'true'
      status: info
      text:
        es: Fextn muestra que la normal no depende solo del peso; depende de todo el balance perpendicular.
        en: Fextn shows that the normal force does not depend only on weight; it depends on the full perpendicular balance.
    model_validity_rules:
    - id: Fextn_validity
      when: 'true'
      status: ok
      text:
        es: La interpretacion de Fextn exige que su componente perpendicular este bien identificada.
        en: Interpreting Fextn requires its perpendicular component to be clearly identified.
    graph_rules:
    - id: Fextn_graph
      when: 'true'
      status: info
      text:
        es: En el DCL, Fextn debe dibujarse sobre el eje normal y no mezclarse con fuerzas tangenciales.
        en: In the FBD, Fextn must be drawn on the normal axis and not mixed with tangential forces.
    likely_errors:
    - id: Fextn_warn
      when: 'true'
      status: warning
      text:
        es: "Error tipico: ignorar Fextn y aplicar el caso base como si solo actuara el peso."
        en: "Typical mistake: ignoring Fextn and applying the basic case as if only weight acted."
    next_step_rules:
    - id: Fextn_next
      when: 'true'
      status: info
      text:
        es: Tras interpretar Fextn, revisa si el cambio de N afectaria al rozamiento o a la estabilidad.
        en: After interpreting Fextn, check whether the change in N would affect friction or stability.
  aperp:
    summary_rules:
    - id: aperp_summary
      when: 'true'
      status: info
      text:
        es: aperp resume la dinamica perpendicular y decide si el contacto solo equilibra o tambien acelera.
        en: aperp summarizes perpendicular dynamics and decides whether contact only balances or also accelerates.
    coherence_rules:
    - id: aperp_coherence
      when: 'true'
      status: ok
      text:
        es: Si aperp no es despreciable, el caso estatico perpendicular ya no basta por si solo.
        en: If aperp is not negligible, the perpendicular static case is no longer enough on its own.
    physical_reading_rules:
    - id: aperp_physical
      when: 'true'
      status: info
      text:
        es: "aperp indica que el cuerpo no solo esta apoyado: puede estar cambiando su estado de apoyo respecto al plano."
        en: "aperp indicates that the body is not merely supported; it may be changing its support state relative to the plane."
    model_validity_rules:
    - id: aperp_validity
      when: 'true'
      status: ok
      text:
        es: Si aperp cambia rapido o el contacto se interrumpe, puede hacer falta un modelo temporal mas rico.
        en: If aperp changes rapidly or contact is interrupted, a richer time-dependent model may be needed.
    graph_rules:
    - id: aperp_graph
      when: 'true'
      status: info
      text:
        es: El grafico debe sugerir si el movimiento sigue pegado al plano o tiende a separarse de el.
        en: The graph should suggest whether motion remains attached to the plane or tends to detach from it.
    likely_errors:
    - id: aperp_warn
      when: 'true'
      status: warning
      text:
        es: "Error tipico: imponer aperp nula por costumbre cuando la trayectoria o el enunciado indican lo contrario."
        en: "Typical mistake: forcing zero aperp by habit when the path or the statement says otherwise."
    next_step_rules:
    - id: aperp_next
      when: 'true'
      status: info
      text:
        es: Tras leer aperp, revisa si el siguiente paso es un balance con contacto o un analisis de despegue.
        en: After reading aperp, check whether the next step is a contact balance or a detachment analysis.
`;export{e as default};
