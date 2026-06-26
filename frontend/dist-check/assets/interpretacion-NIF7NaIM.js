const e=`version: 2
id: interpretacion-oscilador-armonico
leaf_id: oscilador-armonico
nombre:
  es: Interpretacion del oscilador armonico
  en: Interpretation of the harmonic oscillator
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: mecanica-analitica
  parent_id: aplicaciones
  ruta_relativa: fisica-clasica/mecanica/mecanica-analitica/aplicaciones/oscilador-armonico
dependencies:
  formulas: [omega, Tper, E]
  magnitudes: [m, k, omega, Tper, A, E]
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
    title: { es: Resumen fisico, en: Physical summary }
  physical_reading:
    title: { es: Lectura causal, en: Causal reading }
  coherence:
    title: { es: Coherencia del resultado, en: Result coherence }
  model_validity:
    title: { es: Validez del modelo, en: Model validity }
  graph_reading:
    title: { es: Lectura grafica, en: Graph reading }
  likely_errors:
    title: { es: Errores probables, en: Likely errors }
  next_step:
    title: { es: Siguiente decision, en: Next decision }
targets:
  omega:
    summary_rules:
      - id: omega_summary
        when: "true"
        status: info
        text: { es: "[[omega]] resume el ritmo natural del oscilador; depende del balance entre la rigidez [[k]] que devuelve el sistema al equilibrio y la masa [[m]] que se opone al cambio.", en: "[[omega]] summarizes the oscillator's natural rhythm; it depends on the balance between stiffness [[k]], which restores equilibrium, and mass [[m]], which opposes change." }
    physical_reading_rules:
      - id: omega_physical
        when: "true"
        status: info
        text: { es: "Una [[omega]] alta significa respuesta rapida porque el retorno elastico domina sobre la inercia; una [[omega]] baja indica que domina [[m]] o que [[k]] es demasiado pequena.", en: "A high [[omega]] means fast response because elastic restoration dominates inertia; a low [[omega]] indicates dominant [[m]] or insufficient [[k]]." }
    coherence_rules:
      - id: omega_coherence
        when: "true"
        status: ok
        text: { es: "El resultado es coherente si [[omega]] es positiva, aumenta con [[k]] y disminuye cuando se incrementa [[m]] manteniendo la rigidez fija.", en: "The result is coherent if [[omega]] is positive, rises with [[k]], and decreases when [[m]] increases while stiffness is fixed." }
    model_validity_rules:
      - id: omega_validity
        when: "true"
        status: ok
        text: { es: "El calculo es valido mientras el retorno sea lineal, el equilibrio sea estable, la amplitud sea pequena y el amortiguamiento no cambie apreciablemente el ritmo.", en: "The calculation is valid while restoration is linear, equilibrium is stable, amplitude is small, and damping does not appreciably change the rhythm." }
    graph_rules:
      - id: omega_graph
        when: "true"
        status: info
        text: { es: "En el grafico de Coord, la curva de [[omega]] debe subir al aumentar [[k]] y bajar al aumentar [[m]], mostrando visualmente la competencia entre retorno e inercia.", en: "In the Coord graph, the [[omega]] curve should rise as [[k]] increases and fall as [[m]] increases, visually showing the competition between restoration and inertia." }
    likely_errors:
      - id: omega_error
        when: "true"
        status: warning
        text: { es: "Es comun confundir [[omega]] con frecuencia en hertz o creer que la amplitud [[A]] cambia el ritmo en el oscilador lineal.", en: "A common mistake is to confuse [[omega]] with frequency in hertz or assume that amplitude [[A]] changes the rhythm in the linear oscillator." }
    next_step_rules:
      - id: omega_next
        when: "true"
        status: tip
        text: { es: "Despues de obtener [[omega]], compara el ritmo natural con excitaciones externas y calcula [[Tper]] para leer el ciclo completo.", en: "After obtaining [[omega]], compare the natural rhythm with external excitations and compute [[Tper]] to read the full cycle." }

  Tper:
    summary_rules:
      - id: Tper_summary
        when: "true"
        status: info
        text: { es: "[[Tper]] describe el tiempo de un ciclo completo y resume la misma informacion temporal que [[omega]], pero en una escala directamente observable.", en: "[[Tper]] describes the time of one complete cycle and summarizes the same temporal information as [[omega]], but on a directly observable scale." }
    physical_reading_rules:
      - id: Tper_physical
        when: "true"
        status: info
        text: { es: "Un periodo grande significa oscilacion lenta porque la inercia domina; un periodo pequeno indica retorno rapido y ciclos comprimidos en el tiempo.", en: "A large period means slow oscillation because inertia dominates; a small period indicates fast restoration and cycles compressed in time." }
    coherence_rules:
      - id: Tper_coherence
        when: "true"
        status: ok
        text: { es: "[[Tper]] debe ser positivo y debe crecer cuando [[omega]] baja; si ambas magnitudes aumentan a la vez, hay incoherencia algebraica.", en: "[[Tper]] must be positive and must grow when [[omega]] falls; if both quantities rise together, there is algebraic incoherence." }
    model_validity_rules:
      - id: Tper_validity
        when: "true"
        status: ok
        text: { es: "El periodo constante supone oscilacion lineal sin amortiguamiento dominante; deja de valer si el periodo medido cambia con [[A]].", en: "A constant period assumes linear oscillation without dominant damping; it breaks down if the measured period changes with [[A]]." }
    graph_rules:
      - id: Tper_graph
        when: "true"
        status: info
        text: { es: "En una curva temporal, [[Tper]] es la distancia horizontal entre dos maximos equivalentes o dos pasos por equilibrio con el mismo sentido.", en: "On a time curve, [[Tper]] is the horizontal distance between two equivalent maxima or two equilibrium crossings in the same direction." }
    likely_errors:
      - id: Tper_error
        when: "true"
        status: warning
        text: { es: "El error habitual es pensar que duplicar [[A]] duplica [[Tper]], cuando en el modelo lineal la amplitud no fija el reloj.", en: "The usual mistake is to think that doubling [[A]] doubles [[Tper]], whereas in the linear model amplitude does not set the clock." }
    next_step_rules:
      - id: Tper_next
        when: "true"
        status: tip
        text: { es: "Ahora compara [[Tper]] con el tiempo caracteristico del problema: excitacion externa, muestreo experimental o escala de respuesta del sistema.", en: "Now compare [[Tper]] with the problem's characteristic time: external excitation, experimental sampling, or system response scale." }

  E:
    summary_rules:
      - id: E_summary
        when: "true"
        status: info
        text: { es: "[[E]] resume la energia mecanica conservada del oscilador ideal y depende de la rigidez [[k]] y de la amplitud [[A]].", en: "[[E]] summarizes the conserved mechanical energy of the ideal oscillator and depends on stiffness [[k]] and amplitude [[A]]." }
    physical_reading_rules:
      - id: E_physical
        when: "true"
        status: info
        text: { es: "Una [[E]] alta significa una excitacion mas intensa porque el sistema alcanza mayor desplazamiento o almacena mas energia elastica para la misma amplitud.", en: "A high [[E]] means stronger excitation because the system reaches larger displacement or stores more elastic energy for the same amplitude." }
    coherence_rules:
      - id: E_coherence
        when: "true"
        status: ok
        text: { es: "[[E]] debe ser positiva o nula; si [[A]] se duplica con [[k]] fija, la energia debe multiplicarse por cuatro.", en: "[[E]] must be positive or zero; if [[A]] doubles with fixed [[k]], energy must be multiplied by four." }
    model_validity_rules:
      - id: E_validity
        when: "true"
        status: ok
        text: { es: "La conservacion de [[E]] es valida si se desprecia la disipacion y no hay trabajo externo neto durante el ciclo.", en: "Conservation of [[E]] is valid if dissipation is neglected and there is no net external work during the cycle." }
    graph_rules:
      - id: E_graph
        when: "true"
        status: info
        text: { es: "En el grafico Svg, [[E]] debe leerse como altura energetica constante, mientras energia cinetica y elastica se intercambian durante el ciclo.", en: "In the Svg graph, [[E]] should be read as constant energy height, while kinetic and elastic energy exchange during the cycle." }
    likely_errors:
      - id: E_error
        when: "true"
        status: warning
        text: { es: "Se suele olvidar el cuadrado de [[A]] o suponer que [[m]] entra directamente en la energia de amplitud.", en: "It is common to forget the square of [[A]] or assume that [[m]] directly enters amplitude energy." }
    next_step_rules:
      - id: E_next
        when: "true"
        status: tip
        text: { es: "Revisa ahora si la energia calculada cabe dentro de los limites elasticos y de seguridad del sistema real.", en: "Now review whether the computed energy fits within the real system's elastic and safety limits." }

  k:
    summary_rules: &k_summary
      - id: k_summary
        when: "true"
        status: info
        text: { es: "[[k]] describe la rigidez restauradora; resume cuanto retorno aparece por unidad de desplazamiento.", en: "[[k]] describes restoring stiffness; it summarizes how much restoring action appears per unit displacement." }
    physical_reading_rules: &k_physical
      - id: k_physical
        when: "true"
        status: info
        text: { es: "Mayor [[k]] aumenta [[omega]] porque el sistema recupera el equilibrio con mas intensidad y tambien eleva [[E]] para la misma [[A]].", en: "Greater [[k]] increases [[omega]] because the system restores equilibrium more strongly and also raises [[E]] for the same [[A]]." }
    coherence_rules: &k_coherence
      - id: k_coherence
        when: "true"
        status: ok
        text: { es: "[[k]] debe ser positiva; una rigidez negativa describiria equilibrio inestable, no oscilacion armonica alrededor de equilibrio.", en: "[[k]] must be positive; negative stiffness would describe unstable equilibrium, not harmonic oscillation around equilibrium." }
    model_validity_rules: &k_validity
      - id: k_validity
        when: "true"
        status: ok
        text: { es: "Tratar [[k]] como constante es valido solo dentro del regimen elastico lineal y para desplazamientos suficientemente pequenos.", en: "Treating [[k]] as constant is valid only within the linear elastic regime and for sufficiently small displacements." }
    graph_rules: &k_graph
      - id: k_graph
        when: "true"
        status: info
        text: { es: "En el grafico, al subir [[k]] deben crecer la curva de [[omega]] y la escala energetica asociada a [[E]].", en: "In the graph, as [[k]] rises, the [[omega]] curve and the energy scale associated with [[E]] should increase." }
    likely_errors: &k_errors
      - id: k_error
        when: "true"
        status: warning
        text: { es: "Es facil olvidar convertir N/cm a N/m o creer que [[k]] sigue constante aunque la amplitud sea grande.", en: "It is easy to forget converting N/cm to N/m or to assume [[k]] remains constant even when amplitude is large." }
    next_step_rules: &k_next
      - id: k_next
        when: "true"
        status: tip
        text: { es: "Compara ahora el efecto de variar [[k]] con variar [[m]] para separar control de ritmo y control de energia.", en: "Now compare the effect of changing [[k]] with changing [[m]] to separate rhythm control from energy control." }

  m:
    summary_rules:
      - id: m_summary
        when: "true"
        status: info
        text: { es: "[[m]] resume la inercia oscilante y describe cuanta resistencia aparece frente al cambio de velocidad.", en: "[[m]] summarizes oscillating inertia and describes how much resistance appears against velocity change." }
    physical_reading_rules:
      - id: m_physical
        when: "true"
        status: info
        text: { es: "Aumentar [[m]] reduce [[omega]] porque la misma rigidez debe acelerar mas inercia; por tanto el periodo aumenta.", en: "Increasing [[m]] reduces [[omega]] because the same stiffness must accelerate more inertia; therefore the period increases." }
    coherence_rules:
      - id: m_coherence
        when: "true"
        status: ok
        text: { es: "[[m]] debe usarse en kg y ser positiva; si se introduce en gramos sin conversion, el ritmo calculado queda falseado.", en: "[[m]] must be used in kg and be positive; if entered in grams without conversion, the computed rhythm is distorted." }
    model_validity_rules:
      - id: m_validity
        when: "true"
        status: ok
        text: { es: "La masa puede ser puntual o modal equivalente; el modelo deja de valer si la masa efectiva cambia durante el movimiento.", en: "Mass may be point-like or an equivalent modal mass; the model breaks down if effective mass changes during motion." }
    graph_rules:
      - id: m_graph
        when: "true"
        status: info
        text: { es: "En el grafico, la rama de [[omega]] frente a [[m]] debe descender y la lectura de [[Tper]] debe crecer.", en: "In the graph, the branch of [[omega]] versus [[m]] should fall and the reading of [[Tper]] should grow." }
    likely_errors:
      - id: m_error
        when: "true"
        status: warning
        text: { es: "Un error comun es creer que aumentar [[m]] aumenta la energia [[E]] para la misma amplitud y rigidez.", en: "A common mistake is to believe that increasing [[m]] increases energy [[E]] for the same amplitude and stiffness." }
    next_step_rules:
      - id: m_next
        when: "true"
        status: tip
        text: { es: "Siguiente paso: decide si conviene cambiar [[m]] o [[k]] segun busques bajar la frecuencia o mantener energia.", en: "Next step: decide whether to change [[m]] or [[k]] depending on whether you need to lower frequency or preserve energy." }

  A:
    summary_rules:
      - id: A_summary
        when: "true"
        status: info
        text: { es: "[[A]] describe la amplitud maxima y resume cuanto se separa el sistema del equilibrio antes de soltarlo.", en: "[[A]] describes maximum amplitude and summarizes how far the system is displaced from equilibrium before release." }
    physical_reading_rules:
      - id: A_physical
        when: "true"
        status: info
        text: { es: "Mayor [[A]] significa mas energia porque el potencial elastico crece con el cuadrado del desplazamiento, pero no cambia [[Tper]] en el modelo lineal.", en: "Larger [[A]] means more energy because elastic potential grows with displacement squared, but it does not change [[Tper]] in the linear model." }
    coherence_rules:
      - id: A_coherence
        when: "true"
        status: ok
        text: { es: "[[A]] debe ser no negativa y expresarse en metros; si [[A]] es cero, la energia [[E]] debe ser cero.", en: "[[A]] must be non-negative and expressed in meters; if [[A]] is zero, energy [[E]] must be zero." }
    model_validity_rules:
      - id: A_validity
        when: "true"
        status: ok
        text: { es: "La lectura lineal de [[A]] es valida solo si la amplitud no alcanza topes ni zonas donde [[k]] cambie.", en: "The linear reading of [[A]] is valid only if amplitude does not reach stops or regions where [[k]] changes." }
    graph_rules:
      - id: A_graph
        when: "true"
        status: info
        text: { es: "En el grafico energetico, variar [[A]] debe curvar la escala de [[E]] de forma cuadratica, no lineal.", en: "In the energy graph, changing [[A]] should bend the [[E]] scale quadratically, not linearly." }
    likely_errors:
      - id: A_error
        when: "true"
        status: warning
        text: { es: "Se suele pensar que mas [[A]] siempre ralentiza la oscilacion; ese razonamiento confunde energia con ritmo.", en: "It is common to think that larger [[A]] always slows the oscillation; that reasoning confuses energy with rhythm." }
    next_step_rules:
      - id: A_next
        when: "true"
        status: tip
        text: { es: "Continua comprobando si la amplitud elegida mantiene al sistema dentro del regimen lineal antes de confiar en [[E]].", en: "Continue by checking whether the chosen amplitude keeps the system within the linear regime before trusting [[E]]." }
`;export{e as default};
