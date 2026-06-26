const e=`version: 2
id: interpretacion-definicion-fuerza-centrifuga
leaf_id: definicion-fuerza-centrifuga
nombre:
  es: Interpretacion de Definicion fuerza centrifuga
  en: Interpretation of Definition of Centrifugal Force
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: dinamica
  parent_id: fuerza-centrifuga
  ruta_relativa: fisica-clasica/mecanica/dinamica/marcos-no-inerciales/fuerza-centrifuga/definicion-fuerza-centrifuga
dependencies:
  formulas:
  - fuerza_centrifuga_omega
  - fuerza_centrifuga_velocidad
  - relacion_tangencial
  - aceleracion_centrifuga
  - forma_vectorial_conceptual
  magnitudes:
  - m
  - omega
  - r
  - v
  - a_cf
  - F_cf
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
  F_cf:
    summary_rules:
    - id: F_cf_summary
      when: 'true'
      status: info
      text:
        es: F_cf resume el termino radial aparente que aparece al describir la escena desde un marco rotatorio.
        en: F_cf summarizes the apparent radial term that appears when the scene is described from a rotating frame.
    coherence_rules:
    - id: F_cf_coherence
      when: 'true'
      status: ok
      text:
        es: Comprueba que F_cf crezca con m, con omega^2 y con r, y que desaparezca si r = 0.
        en: Check that F_cf grows with m, with omega^2, and with r, and vanishes if r = 0.
    physical_reading_rules:
    - id: F_cf_physical
      when: 'true'
      status: info
      text:
        es: F_cf no es una fuerza real nueva; es la correccion de marco hacia afuera que el observador rotatorio necesita para describir la escena.
        en: F_cf is not a new real force; it is the outward frame correction needed by the rotating observer to describe the scene.
    model_validity_rules:
    - id: F_cf_validity
      when: 'true'
      status: ok
      text:
        es: F_cf solo es interpretable si el observador pertenece a un marco rotatorio con eje y radio bien definidos.
        en: F_cf is interpretable only if the observer belongs to a rotating frame with a well-defined axis and radius.
    graph_rules:
    - id: F_cf_graph
      when: 'true'
      status: info
      text:
        es: La grafica debe mostrar que F_cf aumenta con el alejamiento al eje y con la velocidad angular.
        en: The graph should show that F_cf increases with distance from the axis and with angular speed.
    likely_errors:
    - id: F_cf_warn
      when: 'true'
      status: warning
      text:
        es: No confundas F_cf con la fuerza centripeta real ni le asignes un agente material.
        en: Do not confuse F_cf with the real centripetal force or assign to it a material agent.
    next_step_rules:
    - id: F_cf_next
      when: 'true'
      status: info
      text:
        es: Usa F_cf para pasar a comparaciones con la fuerza centripeta o a problemas de plataformas y centrifugas.
        en: Use F_cf to move toward comparisons with centripetal force or toward platform and centrifuge problems.
  m:
    summary_rules:
    - id: m_summary
      when: 'true'
      status: info
      text:
        es: m fija la escala inercial del termino centrifugo.
        en: m sets the inertial scale of the centrifugal term.
    coherence_rules:
    - id: m_coherence
      when: 'true'
      status: ok
      text:
        es: Si el resto de variables no cambia, duplicar m duplica F_cf.
        en: If the other variables stay fixed, doubling m doubles F_cf.
    physical_reading_rules:
    - id: m_physical
      when: 'true'
      status: info
      text:
        es: La masa no crea el giro, pero si amplifica la magnitud del termino inercial leido por el observador rotatorio.
        en: Mass does not create the rotation, but it scales up the inertial term read by the rotating observer.
    model_validity_rules:
    - id: m_validity
      when: 'true'
      status: ok
      text:
        es: m debe interpretarse como masa del cuerpo que estas describiendo dentro del marco rotatorio.
        en: m must be interpreted as the mass of the body being described inside the rotating frame.
    graph_rules:
    - id: m_graph
      when: 'true'
      status: info
      text:
        es: La grafica debe reflejar proporcionalidad lineal entre m y F_cf si omega y r se mantienen.
        en: The graph should reflect linear proportionality between m and F_cf if omega and r are fixed.
    likely_errors:
    - id: m_warn
      when: 'true'
      status: warning
      text:
        es: No uses la masa como explicacion causal del giro; solo escala el efecto.
        en: Do not use mass as the causal explanation of the rotation; it only scales the effect.
    next_step_rules:
    - id: m_next
      when: 'true'
      status: info
      text:
        es: Usa m para comparar cuerpos distintos en el mismo marco rotatorio.
        en: Use m to compare different bodies in the same rotating frame.
  omega:
    summary_rules:
    - id: omega_summary
      when: 'true'
      status: info
      text:
        es: omega mide cuan rapido gira el marco y controla de forma cuadratica la intensidad de F_cf.
        en: omega measures how fast the frame rotates and quadratically controls the intensity of F_cf.
    coherence_rules:
    - id: omega_coherence
      when: 'true'
      status: ok
      text:
        es: Si omega se duplica y r no cambia, F_cf se cuadruplica.
        en: If omega doubles and r stays fixed, F_cf becomes four times larger.
    physical_reading_rules:
    - id: omega_physical
      when: 'true'
      status: info
      text:
        es: omega no es un dato decorativo; su dependencia cuadratica explica por que los efectos centrifugos crecen tan deprisa.
        en: omega is not decorative data; its quadratic dependence explains why centrifugal effects grow so quickly.
    model_validity_rules:
    - id: omega_validity
      when: 'true'
      status: ok
      text:
        es: omega debe describir un giro suficientemente definido para que el modelo escalar tenga sentido.
        en: omega must describe a sufficiently well-defined rotation for the scalar model to make sense.
    graph_rules:
    - id: omega_graph
      when: 'true'
      status: info
      text:
        es: La grafica debe mostrar una curva creciente, no una dependencia lineal, al variar omega.
        en: The graph should show a growing curve, not a linear trend, when omega varies.
    likely_errors:
    - id: omega_warn
      when: 'true'
      status: warning
      text:
        es: No confundas doblar omega con doblar F_cf; el efecto es cuadratico.
        en: Do not confuse doubling omega with doubling F_cf; the effect is quadratic.
    next_step_rules:
    - id: omega_next
      when: 'true'
      status: info
      text:
        es: Usa omega para pasar a comparaciones de giro lento frente a giro rapido.
        en: Use omega to move toward comparisons between slow and fast rotation.
  r:
    summary_rules:
    - id: r_summary
      when: 'true'
      status: info
      text:
        es: r fija la distancia al eje y con ello la escala radial del efecto centrifugo.
        en: r sets the distance to the axis and therefore the radial scale of the centrifugal effect.
    coherence_rules:
    - id: r_coherence
      when: 'true'
      status: ok
      text:
        es: Si r vale cero, el termino centrifugo debe desaparecer.
        en: If r is zero, the centrifugal term must vanish.
    physical_reading_rules:
    - id: r_physical
      when: 'true'
      status: info
      text:
        es: Alejarse del eje no crea la rotacion, pero aumenta la lectura centrifuga dentro del marco que gira.
        en: Moving away from the axis does not create the rotation, but it increases the centrifugal reading inside the rotating frame.
    model_validity_rules:
    - id: r_validity
      when: 'true'
      status: ok
      text:
        es: r solo es interpretable si existe un eje claro y una geometria radial bien definida.
        en: r is interpretable only if a clear axis and well-defined radial geometry exist.
    graph_rules:
    - id: r_graph
      when: 'true'
      status: info
      text:
        es: La grafica debe mostrar que el efecto es mayor en la periferia que junto al eje.
        en: The graph should show that the effect is larger at the periphery than near the axis.
    likely_errors:
    - id: r_warn
      when: 'true'
      status: warning
      text:
        es: No trates r como una coordenada cualquiera; aqui representa distancia al eje de rotacion.
        en: Do not treat r as just any coordinate; here it represents distance to the rotation axis.
    next_step_rules:
    - id: r_next
      when: 'true'
      status: info
      text:
        es: Usa r para comparar puntos de una misma plataforma o posiciones de una misma pieza.
        en: Use r to compare points on the same platform or positions of the same part.
  v:
    summary_rules:
    - id: v_summary
      when: 'true'
      status: info
      text:
        es: v ofrece una lectura tangencial equivalente a la descripcion angular del mismo efecto centrifugo.
        en: v gives a tangential reading equivalent to the angular description of the same centrifugal effect.
    coherence_rules:
    - id: v_coherence
      when: 'true'
      status: ok
      text:
        es: Comprueba que v y omega sean compatibles mediante v = omega r.
        en: Check that v and omega remain compatible through v = omega r.
    physical_reading_rules:
    - id: v_physical
      when: 'true'
      status: info
      text:
        es: Usar v no cambia el significado de F_cf; solo reexpresa el mismo efecto con una variable tangencial.
        en: Using v does not change the meaning of F_cf; it only reexpresses the same effect with a tangential variable.
    model_validity_rules:
    - id: v_validity
      when: 'true'
      status: ok
      text:
        es: v es util cuando el problema entrega rapidez lineal en lugar de velocidad angular.
        en: v is useful when the problem gives linear speed instead of angular speed.
    graph_rules:
    - id: v_graph
      when: 'true'
      status: info
      text:
        es: La grafica debe reflejar que F_cf crece con v^2 si r se mantiene.
        en: The graph should reflect that F_cf grows with v^2 when r stays fixed.
    likely_errors:
    - id: v_warn
      when: 'true'
      status: warning
      text:
        es: No mezcles una v tangencial medida en laboratorio con una omega de otro marco sin comprobar equivalencia.
        en: Do not mix a tangential v measured in the lab with an omega from another frame without checking equivalence.
    next_step_rules:
    - id: v_next
      when: 'true'
      status: info
      text:
        es: Usa v cuando el enunciado se formule en terminos de rapidez lineal sobre la trayectoria.
        en: Use v when the statement is written in terms of linear speed along the path.
  a_cf:
    summary_rules:
    - id: a_cf_summary
      when: 'true'
      status: info
      text:
        es: a_cf es la aceleracion centrifuga aparente por unidad de masa dentro del marco rotatorio.
        en: a_cf is the apparent centrifugal acceleration per unit mass inside the rotating frame.
    coherence_rules:
    - id: a_cf_coherence
      when: 'true'
      status: ok
      text:
        es: Comprueba que a_cf = omega^2 r y que F_cf = m a_cf sea coherente con el resto del problema.
        en: Check that a_cf = omega^2 r and that F_cf = m a_cf remains coherent with the rest of the problem.
    physical_reading_rules:
    - id: a_cf_physical
      when: 'true'
      status: info
      text:
        es: a_cf traduce el mismo fenomeno a una escala por unidad de masa y permite compararlo con g.
        en: a_cf translates the same phenomenon into a per-unit-mass scale and allows comparison with g.
    model_validity_rules:
    - id: a_cf_validity
      when: 'true'
      status: ok
      text:
        es: a_cf solo tiene este significado dentro de una lectura centrifuga en marco rotatorio.
        en: a_cf has this meaning only inside a centrifugal reading in a rotating frame.
    graph_rules:
    - id: a_cf_graph
      when: 'true'
      status: info
      text:
        es: La grafica debe facilitar comparaciones entre a_cf y otras aceleraciones de referencia como g.
        en: The graph should facilitate comparisons between a_cf and other reference accelerations such as g.
    likely_errors:
    - id: a_cf_warn
      when: 'true'
      status: warning
      text:
        es: No confundas a_cf con aceleracion centripeta real; comparten modulo en algunos casos, no significado.
        en: Do not confuse a_cf with real centripetal acceleration; they may share a magnitude in some cases, but not meaning.
    next_step_rules:
    - id: a_cf_next
      when: 'true'
      status: info
      text:
        es: Usa a_cf para pasar a comparaciones de escala y a lectura de datos experimentales.
        en: Use a_cf to move toward scale comparisons and experimental-data reading.
`;export{e as default};
