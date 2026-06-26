const e=`version: 5
topic:
  id: energia-orbital
  title:
    es: Energia orbital
    en: Orbital Energy

formulas:
  - id: energia_total_desde_k_u
    title: { es: Energia total orbital, en: Total orbital energy }
    equation: E = K + U
    latex: E = K + U
    category: energia_mecanica
    relation_type: balance
    physical_meaning:
      es: Define la energia mecanica orbital como suma de movimiento y posicion gravitatoria.
      en: Defines orbital mechanical energy as the sum of motion and gravitational position.
    constraints: []
    validity:
      es: Valida en mecanica conservativa con referencia de potencial coherente.
      en: Valid in conservative mechanics with a consistent potential reference.
    dimension_check: "[M*L^2/T^2] = [M*L^2/T^2] + [M*L^2/T^2]"
    calculable: true
    motivo_no_calculable: { es: Requiere conocer K y U., en: Requires K and U. }
    used_in: [energia_cinetica, energia_potencial]
    interpretation_tags: [balance, energia_total, ligadura]
    result_semantics: energia_mecanica
    domain_checks: []
    coherence_checks: [E == K + U]
    graph_implications: E aparece como curva resultante entre K positiva y U negativa.
    pedagogical_triggers: [signo_energetico]
    rearrangements:
      - target: E
        equation: E = K + U
      - target: K
        equation: K = E - U
      - target: U
        equation: U = E - K
    variables: [E, K, U]

  - id: energia_cinetica
    title: { es: Energia cinetica orbital, en: Orbital kinetic energy }
    equation: K = 0.5*m*v^2
    latex: K = \\frac{1}{2} m v^2
    category: energia
    relation_type: definition
    physical_meaning:
      es: Mide la parte de la energia asociada a la rapidez instantanea del satelite.
      en: Measures the part of energy associated with the satellite's instantaneous speed.
    constraints: [m > 0, v >= 0]
    validity:
      es: Regimen clasico no relativista.
      en: Classical non-relativistic regime.
    dimension_check: "[M*L^2/T^2] = [M]*[L/T]^2"
    calculable: true
    motivo_no_calculable: { es: Requiere masa y velocidad., en: Requires mass and speed. }
    used_in: [energia_total_desde_k_u, energia_especifica_estado]
    interpretation_tags: [cinetica, velocidad]
    result_semantics: energia_positiva
    domain_checks: [m > 0, v >= 0]
    coherence_checks: [K >= 0]
    graph_implications: K se representa como contribucion positiva.
    pedagogical_triggers: [rapidez_aumenta_energia]
    rearrangements:
      - target: K
        equation: K = 0.5*m*v^2
      - target: v
        equation: v = sqrt(2*K/m)
    variables: [K, m, v]

  - id: energia_potencial
    title: { es: Energia potencial gravitatoria orbital, en: Orbital gravitational potential energy }
    equation: U = -G*M*m/r
    latex: U = -\\frac{G M m}{r}
    category: energia
    relation_type: potential
    physical_meaning:
      es: Mide la energia de configuracion con cero en el infinito.
      en: Measures configuration energy with zero at infinity.
    constraints: [G > 0, M > 0, m > 0, r > 0]
    validity:
      es: Campo newtoniano de masa central dominante.
      en: Newtonian field of a dominant central mass.
    dimension_check: "[M*L^2/T^2] = [L^3/(M*T^2)]*[M]*[M]/[L]"
    calculable: true
    motivo_no_calculable: { es: Requiere masa central, masa orbital y distancia positiva., en: Requires central mass, orbital mass, and positive distance. }
    used_in: [energia_total_desde_k_u, energia_circular]
    interpretation_tags: [potencial, signo_negativo, infinito]
    result_semantics: energia_negativa
    domain_checks: [r > 0, M > 0, m > 0]
    coherence_checks: [U < 0]
    graph_implications: U debe estar bajo cero y acercarse a cero al crecer r.
    pedagogical_triggers: [referencia_infinito]
    rearrangements:
      - target: U
        equation: U = -G*M*m/r
      - target: r
        equation: r = -G*M*m/U
    variables: [U, G, M, m, r]

  - id: energia_especifica_estado
    title: { es: Energia especifica desde estado instantaneo, en: Specific energy from instantaneous state }
    equation: eps = v^2/2 - G*M/r
    latex: \\varepsilon = \\frac{v^2}{2} - \\frac{G M}{r}
    category: energia_especifica
    relation_type: state_equation
    physical_meaning:
      es: Clasifica la orbita usando velocidad y radio sin depender de la masa del satelite.
      en: Classifies the orbit from speed and radius without depending on satellite mass.
    constraints: [M > 0, r > 0, v >= 0]
    validity:
      es: Problema newtoniano de dos cuerpos con masa central dominante.
      en: Newtonian two-body problem with dominant central mass.
    dimension_check: "[L^2/T^2] = [L/T]^2 - [L^3/(M*T^2)]*[M]/[L]"
    calculable: true
    motivo_no_calculable: { es: Requiere estado instantaneo v y r., en: Requires instantaneous state v and r. }
    used_in: [clasificacion_orbital_conceptual, energia_especifica_ligada]
    interpretation_tags: [energia_especifica, estado, escape]
    result_semantics: clasificador_energetico
    domain_checks: [r > 0, M > 0]
    coherence_checks: []
    graph_implications: eps puede compararse con la linea cero de escape.
    pedagogical_triggers: [independencia_de_masa]
    rearrangements:
      - target: eps
        equation: eps = v^2/2 - G*M/r
      - target: v
        equation: v = sqrt(2*(eps + G*M/r))
    variables: [eps, v, G, M, r]

  - id: energia_total_ligada
    title: { es: Energia total en orbita ligada, en: Total energy in a bound orbit }
    equation: E = -G*M*m/(2*a)
    latex: E = -\\frac{G M m}{2 a}
    category: orbitas_ligadas
    relation_type: orbital_relation
    physical_meaning:
      es: Relaciona energia mecanica negativa con el tamaño de una orbita eliptica.
      en: Relates negative mechanical energy to the size of an elliptical orbit.
    constraints: [a > 0, E < 0]
    validity:
      es: Orbita ligada kepleriana con semieje mayor positivo.
      en: Bound Keplerian orbit with positive semi-major axis.
    dimension_check: "[M*L^2/T^2] = [L^3/(M*T^2)]*[M]*[M]/[L]"
    calculable: true
    motivo_no_calculable: { es: Requiere semieje mayor y masas., en: Requires semi-major axis and masses. }
    used_in: [energia_especifica_ligada]
    interpretation_tags: [ligada, semieje, energia_negativa]
    result_semantics: energia_ligada
    domain_checks: [a > 0, M > 0, m > 0]
    coherence_checks: [E < 0]
    graph_implications: Orbitas mas grandes tienen energia menos negativa.
    pedagogical_triggers: [energia_tamano_orbital]
    rearrangements:
      - target: E
        equation: E = -G*M*m/(2*a)
      - target: a
        equation: a = -G*M*m/(2*E)
    variables: [E, G, M, m, a]

  - id: energia_especifica_ligada
    title: { es: Energia especifica en orbita ligada, en: Specific energy in a bound orbit }
    equation: eps = -G*M/(2*a)
    latex: \\varepsilon = -\\frac{G M}{2 a}
    category: orbitas_ligadas
    relation_type: orbital_relation
    physical_meaning:
      es: Expresa la ligadura orbital por unidad de masa y permite comparar satelites distintos.
      en: Expresses orbital binding per unit mass and allows comparison between different satellites.
    constraints: [a > 0, eps < 0]
    validity:
      es: Orbita ligada kepleriana con masa central dominante.
      en: Bound Keplerian orbit with dominant central mass.
    dimension_check: "[L^2/T^2] = [L^3/(M*T^2)]*[M]/[L]"
    calculable: true
    motivo_no_calculable: { es: Requiere masa central y semieje mayor., en: Requires central mass and semi-major axis. }
    used_in: [energia_especifica_estado, clasificacion_orbital_conceptual]
    interpretation_tags: [energia_especifica, ligada]
    result_semantics: energia_especifica_negativa
    domain_checks: [a > 0, M > 0]
    coherence_checks: [eps < 0]
    graph_implications: eps se acerca a cero cuando a crece.
    pedagogical_triggers: [comparar_orbitas]
    rearrangements:
      - target: eps
        equation: eps = -G*M/(2*a)
      - target: a
        equation: a = -G*M/(2*eps)
    variables: [eps, G, M, a]

  - id: energia_circular
    title: { es: Energia total en orbita circular, en: Total energy in a circular orbit }
    equation: E = -G*M*m/(2*r)
    latex: E_{circ} = -\\frac{G M m}{2 r}
    category: orbitas_circulares
    relation_type: special_case
    physical_meaning:
      es: Caso particular ligado donde el radio instantaneo coincide con el semieje mayor.
      en: Bound special case where instantaneous radius equals semi-major axis.
    constraints: [r > 0, M > 0, m > 0]
    validity:
      es: Solo para orbita circular newtoniana.
      en: Only for a Newtonian circular orbit.
    dimension_check: "[M*L^2/T^2] = [L^3/(M*T^2)]*[M]*[M]/[L]"
    calculable: true
    motivo_no_calculable: { es: Requiere radio circular y masas., en: Requires circular radius and masses. }
    used_in: [energia_total_ligada]
    interpretation_tags: [circular, caso_particular]
    result_semantics: energia_circular_negativa
    domain_checks: [r > 0]
    coherence_checks: [E < 0]
    graph_implications: En grafico circular E es siempre negativa y vale la mitad de U.
    pedagogical_triggers: [caso_circular]
    rearrangements:
      - target: E
        equation: E = -G*M*m/(2*r)
    variables: [E, G, M, m, r]

  - id: clasificacion_orbital_conceptual
    title: { es: Clasificacion por signo energetico, en: Classification by energy sign }
    equation: E_sign_classification = E
    latex: E<0,\\quad E=0,\\quad E>0
    category: criterio_orbital
    relation_type: conceptual_rule
    physical_meaning:
      es: Usa el signo de E o eps para distinguir orbitas ligadas, de escape y abiertas.
      en: Uses the sign of E or eps to distinguish bound, escape, and open orbits.
    constraints: []
    validity:
      es: Criterio cualitativo con referencia de energia cero en infinito.
      en: Qualitative criterion with zero energy reference at infinity.
    dimension_check: "sign(E) clasifica energia con referencia comun"
    calculable: false
    motivo_no_calculable:
      es: Es una regla de clasificacion, no una ecuacion de despeje.
      en: It is a classification rule, not an algebraic equation.
    used_in: [energia_especifica_estado]
    interpretation_tags: [ligada, escape, abierta]
    result_semantics: clasificacion
    domain_checks: []
    coherence_checks: []
    graph_implications: La linea E0 separa regiones energeticas.
    pedagogical_triggers: [signo_de_E]
    rearrangements: []
    variables: [E, eps, E0]

ui:
  default_formula: energia_especifica_estado
  groups:
    - title:
        es: Estado instantaneo
        en: Instantaneous State
      items: [energia_cinetica, energia_potencial, energia_total_desde_k_u, energia_especifica_estado]
    - title:
        es: Orbitas ligadas
        en: Bound Orbits
      items: [energia_total_ligada, energia_especifica_ligada, energia_circular]
    - title:
        es: Clasificacion
        en: Classification
      items: [clasificacion_orbital_conceptual]
`;export{e as default};
