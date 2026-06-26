const n=`version: 1
formulas:
- id: base_radial
  title:
    es: Ecuacion radial base
    en: Base radial equation
  equation: "Frad = m * v**2 / r"
  latex: "F_{rad} = m \\\\frac{v^2}{r}"
  variables: [Frad, m, v, r]
  used_in: [teoria, ejemplos, aplicaciones]
  category: dynamic
  relation_type: law
  physical_meaning: {es: La resultante radial de fuerzas reales iguala m v al cuadrado entre r., en: The radial resultant of real forces equals m v squared over r.}
  constraints:
    - equation: "r > 0"
      es: "r no puede ser cero"
      en: "r cannot be zero"
    - equation: "m > 0"
      es: "m no puede ser cero"
      en: "m cannot be zero"
  validity: {es: Movimiento circular en marco inercial., en: Circular motion in an inertial frame.}
  dimension_check: "MLT^{-2} = M L^2 T^{-2} / L"
  calculable: true
  motivo_no_calculable: ""
  interpretation_tags: [radial, force, acceleration]
  result_semantics: {es: Fuerza neta radial para mantener el giro., en: Net radial force to maintain the turn.}
  domain_checks:
    - var: r
      condition: "> 0"
  coherence_checks:
    - target: Frad
      condition: ">= 0"
  graph_implications:
    - graph: Coord
      role: "Fc vs v curve"
  pedagogical_triggers:
    - trigger: "v doubles"
      insight: {es: "Fc se cuadruplica.", en: "Fc quadruples."}
  rearrangements:
    - target: Frad
      equation: "Frad = m * v**2 / r"
      latex: "F_{rad} = m \\\\frac{v^2}{r}"
      constraints:
        - equation: "r > 0"
          es: "r no puede ser cero"
          en: "r cannot be zero"
    - target: v
      equation: "v = (Frad * r / m)**0.5"
      latex: "v = \\\\sqrt{\\\\frac{F_{rad} \\\\, r}{m}}"
      constraints:
        - equation: "m > 0"
          es: "m no puede ser cero"
          en: "m cannot be zero"
    - target: r
      equation: "r = m * v**2 / Frad"
      latex: "r = \\\\frac{m \\\\, v^2}{F_{rad}}"
      constraints:
        - equation: "Frad > 0"
          es: "Frad no puede ser cero"
          en: "Frad cannot be zero"
    - target: m
      equation: "m = Frad * r / v**2"
      latex: "m = \\\\frac{F_{rad} \\\\, r}{v^2}"
      constraints:
        - equation: "v > 0"
          es: "v no puede ser cero"
          en: "v cannot be zero"
- id: cuerda_tension
  title:
    es: Cuerda horizontal
    en: Horizontal rope
  equation: "Tn = m * v**2 / r"
  latex: "T = m \\\\frac{v^2}{r}"
  variables: [Tn, m, v, r]
  used_in: [teoria, ejemplos]
  category: dynamic
  relation_type: application
  physical_meaning: {es: La tension de la cuerda es la unica fuerza radial., en: String tension is the only radial force.}
  constraints:
    - equation: "r > 0"
      es: "r no puede ser cero"
      en: "r cannot be zero"
  validity: {es: Cuerda tensa en plano horizontal sin gravedad radial., en: Taut rope in horizontal plane with no radial gravity.}
  dimension_check: "MLT^{-2} = M L^2 T^{-2} / L"
  calculable: true
  motivo_no_calculable: ""
  interpretation_tags: [tension, rope, radial]
  result_semantics: {es: Tension necesaria para mantener el giro., en: Tension needed to maintain the turn.}
  domain_checks:
    - var: r
      condition: "> 0"
  coherence_checks:
    - target: Tn
      condition: ">= 0"
  graph_implications:
    - graph: Coord
      role: "T vs v curve"
  pedagogical_triggers:
    - trigger: "v doubles"
      insight: {es: "T se cuadruplica.", en: "T quadruples."}
  rearrangements:
    - target: Tn
      equation: "Tn = m * v**2 / r"
      latex: "T = m \\\\frac{v^2}{r}"
      constraints:
        - equation: "r > 0"
          es: "r no puede ser cero"
          en: "r cannot be zero"
    - target: v
      equation: "v = (Tn * r / m)**0.5"
      latex: "v = \\\\sqrt{\\\\frac{T \\\\, r}{m}}"
      constraints:
        - equation: "m > 0"
          es: "m no puede ser cero"
          en: "m cannot be zero"
- id: curva_plana_velocidad_max
  title:
    es: Velocidad max en curva plana
    en: Max speed on a flat curve
  equation: "v = (mu * g * r)**0.5"
  latex: "v = \\\\sqrt{\\\\mu_s \\\\, g \\\\, r}"
  variables: [v, mu, g, r]
  used_in: [teoria, ejemplos, aplicaciones]
  category: dynamic
  relation_type: application
  physical_meaning: {es: Rapidez max para no derrapar en curva plana., en: Max speed to avoid skidding on a flat curve.}
  constraints:
    - equation: "r > 0"
      es: "r no puede ser cero"
      en: "r cannot be zero"
    - equation: "mu > 0"
      es: "mu no puede ser cero"
      en: "mu cannot be zero"
  validity: {es: Curva plana sin peralte., en: Flat curve without banking.}
  dimension_check: "LT^{-1} = (1 LT^{-2} L)^{0.5}"
  calculable: true
  motivo_no_calculable: ""
  interpretation_tags: [friction, curve, speed]
  result_semantics: {es: Rapidez de derrape en curva plana., en: Skid speed on flat curve.}
  domain_checks:
    - var: r
      condition: "> 0"
  coherence_checks:
    - target: v
      condition: ">= 0"
  graph_implications:
    - graph: Coord
      role: "v_max vs mu curve"
  pedagogical_triggers:
    - trigger: "mu halves"
      insight: {es: "v max se reduce un 29 %.", en: "v max drops by 29 %."}
  rearrangements:
    - target: v
      equation: "v = (mu * g * r)**0.5"
      latex: "v = \\\\sqrt{\\\\mu_s \\\\, g \\\\, r}"
      constraints:
        - equation: "r > 0"
          es: "r no puede ser cero"
          en: "r cannot be zero"
    - target: mu
      equation: "mu = v**2 / (g * r)"
      latex: "\\\\mu_s = \\\\frac{v^2}{g \\\\, r}"
      constraints:
        - equation: "g > 0"
          es: "g no puede ser cero"
          en: "g cannot be zero"
        - equation: "r > 0"
          es: "r no puede ser cero"
          en: "r cannot be zero"
- id: peralte_ideal
  title:
    es: Curva peraltada sin rozamiento
    en: Banked curve without friction
  equation: "v**2 = r * g * tan(th)"
  latex: "v^2 = r \\\\, g \\\\, \\\\tan \\\\theta"
  variables: [v, r, g, th]
  used_in: [teoria, ejemplos, aplicaciones]
  category: dynamic
  relation_type: application
  physical_meaning: {es: La rapidez de diseno de la curva depende del peralte., en: The design speed of the curve depends on the banking angle.}
  constraints:
    - equation: "r > 0"
      es: "r no puede ser cero"
      en: "r cannot be zero"
  validity: {es: Curva peraltada sin rozamiento., en: Banked curve without friction.}
  dimension_check: "L^2 T^{-2} = L LT^{-2} 1"
  calculable: true
  motivo_no_calculable: ""
  interpretation_tags: [banking, angle, speed]
  result_semantics: {es: Rapidez para la que el peralte basta sin rozamiento., en: Speed for which banking alone suffices without friction.}
  domain_checks:
    - var: r
      condition: "> 0"
  coherence_checks:
    - target: v
      condition: ">= 0"
  graph_implications:
    - graph: Coord
      role: "v vs theta curve"
  pedagogical_triggers:
    - trigger: "theta increases"
      insight: {es: "Mayor peralte permite mayor v.", en: "Greater banking allows higher v."}
  rearrangements:
    - target: v
      equation: "v = (r * g * tan(th))**0.5"
      latex: "v = \\\\sqrt{r \\\\, g \\\\, \\\\tan \\\\theta}"
      constraints:
        - equation: "r > 0"
          es: "r no puede ser cero"
          en: "r cannot be zero"
    - target: th
      equation: "th = arctan(v**2 / (r * g))"
      latex: "\\\\theta = \\\\arctan \\\\frac{v^2}{r \\\\, g}"
      constraints:
        - equation: "r > 0"
          es: "r no puede ser cero"
          en: "r cannot be zero"
- id: loop_contacto_minimo
  title:
    es: Contacto min en la cima del loop
    en: Min contact at the top of the loop
  equation: "v = (g * r)**0.5"
  latex: "v = \\\\sqrt{g \\\\, r}"
  variables: [v, g, r]
  used_in: [teoria, ejemplos, aplicaciones]
  category: dynamic
  relation_type: limit_condition
  physical_meaning: {es: Rapidez min en la cima para no perder contacto., en: Min speed at the top to avoid losing contact.}
  constraints:
    - equation: "r > 0"
      es: "r no puede ser cero"
      en: "r cannot be zero"
  validity: {es: Cima de un loop vertical con N igual a cero., en: Top of a vertical loop with N equal to zero.}
  dimension_check: "LT^{-1} = (LT^{-2} L)^{0.5}"
  calculable: true
  motivo_no_calculable: ""
  interpretation_tags: [loop, contact, min]
  result_semantics: {es: Rapidez de contacto en la cima del bucle., en: Contact speed at the top of the loop.}
  domain_checks:
    - var: r
      condition: "> 0"
  coherence_checks:
    - target: v
      condition: ">= 0"
  graph_implications:
    - graph: Coord
      role: "v_min vs r curve"
  pedagogical_triggers:
    - trigger: "r doubles"
      insight: {es: "v min sube un 41 %.", en: "v min rises by 41 %."}
  rearrangements:
    - target: v
      equation: "v = (g * r)**0.5"
      latex: "v = \\\\sqrt{g \\\\, r}"
      constraints:
        - equation: "r > 0"
          es: "r no puede ser cero"
          en: "r cannot be zero"
    - target: r
      equation: "r = v**2 / g"
      latex: "r = \\\\frac{v^2}{g}"
      constraints:
        - equation: "g > 0"
          es: "g no puede ser cero"
          en: "g cannot be zero"
- id: orbita_circular
  title:
    es: Orbita circular
    en: Circular orbit
  equation: "v = (G * M / r)**0.5"
  latex: "v = \\\\sqrt{\\\\frac{G \\\\, M}{r}}"
  variables: [v, G, M, r]
  used_in: [teoria, ejemplos, aplicaciones]
  category: dynamic
  relation_type: application
  physical_meaning: {es: Rapidez orbital para una orbita circular estable., en: Orbital speed for a stable circular orbit.}
  constraints:
    - equation: "r > 0"
      es: "r no puede ser cero"
      en: "r cannot be zero"
    - equation: "M > 0"
      es: "M no puede ser cero"
      en: "M cannot be zero"
  validity: {es: Orbita circular con masa central dominante., en: Circular orbit with a dominant central mass.}
  dimension_check: "LT^{-1} = (M^{-1}L^3T^{-2} M / L)^{0.5}"
  calculable: true
  motivo_no_calculable: ""
  interpretation_tags: [orbit, gravity, speed]
  result_semantics: {es: Rapidez para orbita circular estable., en: Speed for a stable circular orbit.}
  domain_checks:
    - var: r
      condition: "> 0"
    - var: M
      condition: "> 0"
  coherence_checks:
    - target: v
      condition: ">= 0"
  graph_implications:
    - graph: Coord
      role: "v_orb vs r curve"
  pedagogical_triggers:
    - trigger: "r doubles"
      insight: {es: "v orbital se reduce un 29 %.", en: "Orbital v drops by 29 %."}
  rearrangements:
    - target: v
      equation: "v = (G * M / r)**0.5"
      latex: "v = \\\\sqrt{\\\\frac{G \\\\, M}{r}}"
      constraints:
        - equation: "r > 0"
          es: "r no puede ser cero"
          en: "r cannot be zero"
    - target: r
      equation: "r = G * M / v**2"
      latex: "r = \\\\frac{G \\\\, M}{v^2}"
      constraints:
        - equation: "v > 0"
          es: "v no puede ser cero"
          en: "v cannot be zero"`;export{n as default};
