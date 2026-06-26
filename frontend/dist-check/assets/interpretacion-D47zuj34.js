const e=`version: 1
id: interp-condicion-sumatoria-fuerzas
leaf_id: condicion-sumatoria-fuerzas
nombre:
  es: "Interpretacion del equilibrio traslacional"
  en: "Translational equilibrium interpretation"
scope: leaf
ui:
  inline_calculator: true
  inline_graph: true
  dedicated_tab: true
  tab_label:
    es: "Interpretacion"
    en: Interpretation
dependencies:
  formulas:
    - equilibrio_traslacional_vectorial
    - equilibrio_por_componentes
    - descomposicion_x
    - descomposicion_y
    - peso_desde_masa
  magnitudes:
    - F
    - R
    - m
    - theta
    - T
global_context:
  es: "Este leaf analiza la primera condicion de equilibrio: la suma vectorial de fuerzas externas sobre un cuerpo debe ser cero para que no acelere."
  en: "This leaf analyzes the first equilibrium condition: the vector sum of external forces on a body must be zero for it not to accelerate."
result_blocks:
  summary:
    title:
      es: Resumen del resultado
      en: Result summary
  physical_reading:
    title:
      es: Lectura fisica
      en: Physical reading
  coherence:
    title:
      es: Coherencia del resultado
      en: Result coherence
  model_validity:
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    title:
      es: Lectura del grafico
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
  m:
    summary_rules:
      - id: mass_weight_link
        when: "m > 0"
        status: ok
        text:
          es: "La masa positiva puede traducirse a carga mediante \`peso_desde_masa\`, que fija el peso a compensar en el equilibrio."
          en: "A positive mass can be translated into load through \`peso_desde_masa\`, which sets the weight that must be balanced."
    coherence_rules:
      - id: mass_positive
        when: "m > 0"
        status: ok
        text:
          es: "Una masa positiva es coherente con un peso real aplicado al sistema."
          en: "A positive mass is coherent with a real weight applied to the system."
    physical_reading_rules:
      - id: mass_sets_load
        when: "m > 0"
        status: ok
        text:
          es: "La masa no produce equilibrio por si sola, pero porque determina el peso, cambia cuanta tension y cuantas componentes verticales hacen falta para mantener R = 0."
          en: "Mass does not create equilibrium by itself, but because it determines the weight, it changes how much tension and how many vertical components are needed to keep R = 0."
    model_validity_rules:
      - id: mass_known_gravity
        when: "m > 0"
        status: ok
        text:
          es: "La conversion mediante \`peso_desde_masa\` supone una gravedad conocida y aproximadamente uniforme."
          en: "The conversion through \`peso_desde_masa\` assumes a known and approximately uniform gravity."
    graph_rules:
      - id: mass_not_directly_visible
        when: "m > 0"
        status: info
        text:
          es: "En el grafico suele leerse primero el efecto del peso o de T; la masa actua de forma indirecta porque fija la carga."
          en: "In the graph one usually reads the effect of weight or T first; mass acts indirectly because it sets the load."
    likely_errors:
      - id: mass_weight_confusion
        when: "m > 0"
        status: warning
        text:
          es: "Error frecuente: confundir masa con peso y meter m directamente en la sumatoria sin convertir antes con \`peso_desde_masa\`."
          en: "Common mistake: confusing mass with weight and placing m directly in the force sum instead of converting it first with \`peso_desde_masa\`."
    next_step_rules:
      - id: compute_weight_first
        when: "m > 0"
        status: info
        text:
          es: "Si el problema empieza con masa, calcula primero el peso y luego aplica las ecuaciones de equilibrio."
          en: "If the problem starts from mass, compute the weight first and then apply the equilibrium equations."

  T:
    summary_rules:
      - id: tension_summary
        when: "T > 0"
        status: ok
        text:
          es: "La tension obtenida es positiva, lo que confirma que la cuerda esta traccionando correctamente."
          en: "The obtained tension is positive, confirming the rope is correctly pulling."
      - id: tension_zero
        when: "T == 0"
        status: warning
        text:
          es: "Tension nula indica que la cuerda esta floja o no forma parte del equilibrio."
          en: "Zero tension means the rope is slack or not part of the equilibrium."
    coherence_rules:
      - id: tension_vs_weight
        when: "T >= P / 2"
        status: ok
        text:
          es: "Con cables inclinados la tension siempre supera la mitad del peso; resultado coherente."
          en: "With inclined cables tension always exceeds half the weight; result is coherent."
      - id: tension_too_small
        when: "T < P / 2"
        status: error
        text:
          es: "Tension menor que P/2 es imposible con cables simetricos; revisa el angulo."
          en: "Tension less than P/2 is impossible with symmetric cables; check the angle."
    physical_reading_rules:
      - id: tension_large_angle
        when: "theta < 0.35"
        status: warning
        text:
          es: "Si el angulo con la horizontal es muy pequeno, cada cable aporta poca componente vertical; por eso la tension debe aumentar mucho para compensar el peso y mantener R = 0."
          en: "If the angle with the horizontal is very small, each cable contributes little vertical component; therefore tension must rise strongly to balance the weight and keep R = 0."
      - id: tension_near_vertical
        when: "theta > 1.22"
        status: ok
        text:
          es: "Con cables mas cercanos a la vertical, una mayor parte de T actua en la direccion que sostiene la carga, por lo que la configuracion necesita menos tension para el mismo peso."
          en: "With cables closer to vertical, a larger share of T acts in the load-supporting direction, so the same weight can be balanced with less tension."
    model_validity_rules:
      - id: inertial_frame
        when: "true"
        status: ok
        text:
          es: "El modelo asume marco inercial y cuerda ideal sin masa; verificar que estas hipotesis sean razonables."
          en: "The model assumes an inertial frame and ideal massless rope; verify these hypotheses are reasonable."
      - id: large_angle_limit
        when: "theta > 1.48"
        status: warning
        text:
          es: "Con angulos cercanos a 90 grados las cuerdas serian casi verticales; el modelo simetrico pierde utilidad practica."
          en: "With angles near 90 degrees the ropes would be nearly vertical; the symmetric model loses practical usefulness."
    graph_rules:
      - id: dcl_visual
        when: "true"
        status: info
        text:
          es: "En el DCL las flechas de tension deben apuntar alejandose del nudo a lo largo de cada cuerda."
          en: "In the FBD the tension arrows must point away from the node along each rope."
    likely_errors:
      - id: angle_reference_error
        when: "T < P / 2"
        status: error
        text:
          es: "Error frecuente: confundir el eje de referencia y medir el angulo desde la vertical en lugar de desde la horizontal; eso hace intercambiar seno y coseno y rompe el balance por componentes."
          en: "Common mistake: confusing the reference axis and measuring the angle from the vertical instead of the horizontal; that swaps sine and cosine and breaks the component balance."
      - id: scalar_sum_error
        when: "abs(T - P) < 0.01"
        status: error
        text:
          es: "Otro error plausible es olvidar que se suman componentes y no modulos: si un alumno cree que T debe igualar al peso completo, probablemente esta agregando magnitudes escalares en vez de proyectar fuerzas."
          en: "Another plausible mistake is forgetting that components, not raw magnitudes, are added: if a student assumes T must equal the full weight, they are likely summing scalars instead of projected forces."
    next_step_rules:
      - id: rotational_check
        when: "true"
        status: info
        text:
          es: "Verifica tambien la segunda condicion de equilibrio (torques) si el cuerpo tiene extension finita."
          en: "Also verify the second equilibrium condition (torques) if the body has a finite extent."
      - id: compare_with_limit
        when: "T > 1000"
        status: warning
        text:
          es: "Tension alta; comparar con la resistencia del material de la cuerda para evaluar seguridad."
          en: "High tension; compare with the rope material strength to evaluate safety."
  R:
    summary_rules:
      - id: resultant_zero
        when: "abs(R) < 0.01"
        status: ok
        text:
          es: "La resultante es practicamente cero; el cuerpo esta en equilibrio traslacional."
          en: "The resultant is practically zero; the body is in translational equilibrium."
      - id: resultant_nonzero
        when: "abs(R) >= 0.01"
        status: error
        text:
          es: "Resultante distinta de cero indica que hay un desequilibrio; revisar fuerzas omitidas."
          en: "Non-zero resultant indicates an imbalance; check for missing forces."
    coherence_rules:
      - id: resultant_magnitude
        when: "abs(R) < 0.01"
        status: ok
        text:
          es: "Resultado coherente con la condicion de equilibrio traslacional."
          en: "Result coherent with the translational equilibrium condition."
    physical_reading_rules:
      - id: resultant_meaning
        when: "abs(R) >= 0.01"
        status: warning
        text:
          es: "Un cuerpo con resultante no nula experimenta aceleracion en la direccion de la resultante."
          en: "A body with non-zero resultant experiences acceleration in the direction of the resultant."
    model_validity_rules:
      - id: model_resultant
        when: "true"
        status: ok
        text:
          es: "La resultante se calcula valida para marcos inerciales y fuerzas coplanarias."
          en: "The resultant calculation is valid for inertial frames and coplanar forces."
    graph_rules:
      - id: force_polygon
        when: "abs(R) < 0.01"
        status: info
        text:
          es: "En el diagrama vectorial el poligono de fuerzas se cierra, confirmando equilibrio."
          en: "In the vector diagram the force polygon closes, confirming equilibrium."
    likely_errors:
      - id: missing_force
        when: "abs(R) >= 0.01"
        status: error
        text:
          es: "La resultante no nula suele indicar que se omitio una fuerza (normal, rozamiento, etc.)."
          en: "Non-zero resultant usually indicates a missed force (normal, friction, etc.)."
    next_step_rules:
      - id: next_rotation
        when: "abs(R) < 0.01"
        status: info
        text:
          es: "Equilibrio traslacional confirmado; ahora verifica el equilibrio rotacional."
          en: "Translational equilibrium confirmed; now check rotational equilibrium."
  F:
    summary_rules:
      - id: force_decomposed
        when: "F > 0"
        status: ok
        text:
          es: "La fuerza se ha descompuesto correctamente en componentes horizontal y vertical."
          en: "The force has been correctly decomposed into horizontal and vertical components."
    coherence_rules:
      - id: force_components_check
        when: "abs(Fx) <= abs(F) and abs(Fy) <= abs(F)"
        status: ok
        text:
          es: "Las componentes no superan la magnitud total; resultado coherente."
          en: "Components do not exceed the total magnitude; result is coherent."
    physical_reading_rules:
      - id: force_reading
        when: "F > 0"
        status: ok
        text:
          es: "La fuerza actua como agente externo sobre el cuerpo aislado."
          en: "The force acts as an external agent on the isolated body."
    model_validity_rules:
      - id: model_force
        when: "true"
        status: ok
        text:
          es: "Descomposicion valida en geometria euclidiana 2D."
          en: "Decomposition valid in 2D Euclidean geometry."
    graph_rules:
      - id: coord_visual
        when: "true"
        status: info
        text:
          es: "Verificar visualmente en el grafico de coordenadas que las componentes sean correctas."
          en: "Visually verify in the coordinate graph that components are correct."
    likely_errors:
      - id: trig_swap
        when: "abs(Fx - F * sin(theta)) < 0.01"
        status: error
        text:
          es: "Posible intercambio de seno y coseno; F_x usa coseno y F_y usa seno."
          en: "Possible sine-cosine swap; F_x uses cosine and F_y uses sine."
    next_step_rules:
      - id: sum_components
        when: "true"
        status: info
        text:
          es: "Suma todas las componentes F_x y F_y de cada fuerza para plantear las ecuaciones de equilibrio."
          en: "Sum all F_x and F_y components from each force to set up the equilibrium equations."
cross_checks: []
error_patterns: []
graph_binding:
  enabled: false
  channels: []
mini_graph:
  enabled: false
  preferred_type: Coord
output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
`;export{e as default};
