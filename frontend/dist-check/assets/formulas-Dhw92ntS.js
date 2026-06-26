const e=`version: 1
ui:
  default_formula: aceleracion_rodadura_plano
formulas:
- id: aceleracion_rodadura_plano
  title:
    es: Estrategia para problemas de rodadura
    en: Strategy for rolling problems
  equation: a_cm = g*sin(phi)/(1 + I/(m*R^2))
  latex: a_{cm}=\\frac{g\\sin\\phi}{1+\\frac{I}{mR^2}}
  rearrangements:
  - target: a_cm
    equation: a_cm = g*sin(phi)/(1 + I/(m*R^2))
    latex: a_{cm}=\\frac{g\\sin\\phi}{1+\\frac{I}{mR^2}}
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: Cómo se elige el método adecuado para resolver un problema de rodadura.
    en: How do we choose the appropriate method to solve a rolling problem.
  constraints:
  - modelo de sólido rígido
  - eje de giro definido
  - convención de signos estable
  validity:
    es: Válida cuando el movimiento puede modelarse como rotación rígida o rodadura
      ideal según el leaf.
    en: Valid when the motion can be modeled as rigid rotation or ideal rolling according
      to the leaf.
  dimension_check: coherente dimensionalmente con las magnitudes declaradas
  calculable: true
  motivo_no_calculable: null
  used_in:
  - estrategia-para-problemas-de-rodadura
  interpretation_tags:
  - rotacion
  - estrategia-para-problemas-de-rodadura
  result_semantics:
    target: a_cm
    kind: scalar
    sign_meaning:
      es: El signo indica sentido o proyección según la convención.
      en: The sign indicates direction or projection according to the convention.
    absolute_value_meaning:
      es: El módulo mide la intensidad física del efecto.
      en: The magnitude measures the physical strength of the effect.
  domain_checks:
  - expr: 'true'
    message:
      es: Comprueba que el modelo de rotación o rodadura sea aplicable.
      en: Check that the rotation or rolling model applies.
  coherence_checks:
  - expr: 'true'
    message:
      es: Verifica unidades, signos y orden de magnitud.
      en: Check units, signs, and order of magnitude.
  graph_implications:
  - SVG de diagrama de decisión; DCL para plano inclinado con rozamiento estático;
    Coord para comparar resultados por energía y dinámica.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Distingue siempre traslación, rotación y rodadura antes de elegir fórmula.
      en: Always distinguish translation, rotation, and rolling before choosing a
        formula.
- id: energia_cinetica_total_rodadura
  title:
    es: Energía cinética total de rodadura
    en: Total kinetic energy in rolling
  equation: K_total = 0.5*m*v_cm^2 + 0.5*I*omega^2
  latex: K_{total}=\\frac{1}{2}mv_{cm}^{2}+\\frac{1}{2}I\\omega^{2}
  rearrangements:
  - target: K_total
    equation: K_total = 0.5*m*v_cm^2 + 0.5*I*omega^2
    latex: K_{total}=\\frac{1}{2}mv_{cm}^{2}+\\frac{1}{2}I\\omega^{2}
  category: derived
  relation_type: energy_balance
  physical_meaning:
    es: Reparte la energía cinética entre avance del centro de masas y giro del sólido.
    en: Splits kinetic energy between center-of-mass translation and rigid-body rotation.
  constraints:
  - sólido rígido
  - rodadura sin deslizamiento si se usa v_cm = omega*R
  - unidades SI
  validity:
    es: Válida cuando la energía cinética puede separarse en traslación del centro de masas y rotación alrededor del centro.
    en: Valid when kinetic energy can be split into center-of-mass translation and rotation about the center.
  dimension_check: energía en julios
  calculable: true
  motivo_no_calculable: null
  used_in:
  - estrategia-para-problemas-de-rodadura
  interpretation_tags:
  - rodadura
  - energia
  result_semantics:
    target: K_total
    kind: scalar
    sign_meaning:
      es: Debe ser no negativa.
      en: It must be nonnegative.
    absolute_value_meaning:
      es: Mide la energía mecánica asociada al movimiento de rodadura.
      en: Measures the mechanical energy associated with rolling motion.
  domain_checks:
  - expr: K_total >= 0
    message:
      es: La energía cinética total no puede ser negativa.
      en: Total kinetic energy cannot be negative.
  coherence_checks:
  - expr: 'true'
    message:
      es: Comprueba que v_cm y omega sean coherentes con el radio si hay rodadura ideal.
      en: Check that v_cm and omega are coherent with the radius under ideal rolling.
  graph_implications:
  - Coord compara el reparto entre traslación y rotación.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Antes de usar energía, decide si hay pérdidas o deslizamiento.
      en: Before using energy, decide whether losses or slipping occur.
- id: energia_mecanica_total_rodadura
  title:
    es: Energía mecánica total de rodadura
    en: Total mechanical energy in rolling
  equation: E_total = K_total + m*g*R*sin(phi)
  latex: E_{total}=K_{total}+m g R\\sin\\phi
  rearrangements:
  - target: E_total
    equation: E_total = K_total + m*g*R*sin(phi)
    latex: E_{total}=K_{total}+m g R\\sin\\phi
  category: derived
  relation_type: energy_balance
  physical_meaning:
    es: Suma energía cinética de rodadura y energía potencial gravitatoria de referencia.
    en: Adds rolling kinetic energy and reference gravitational potential energy.
  constraints:
  - referencia de altura definida
  - gravedad uniforme
  - modelo sin pérdidas si se conserva E_total
  validity:
    es: Válida como balance mecánico cuando las fuerzas no conservativas no realizan trabajo neto disipativo.
    en: Valid as a mechanical balance when nonconservative forces do not perform net dissipative work.
  dimension_check: energía en julios
  calculable: true
  motivo_no_calculable: null
  used_in:
  - estrategia-para-problemas-de-rodadura
  interpretation_tags:
  - rodadura
  - energia
  result_semantics:
    target: E_total
    kind: scalar
    sign_meaning:
      es: Depende de la referencia de energía potencial.
      en: It depends on the potential-energy reference.
    absolute_value_meaning:
      es: Mide el balance mecánico total usado para decidir si el método energético es válido.
      en: Measures the total mechanical balance used to decide whether the energy method is valid.
  domain_checks:
  - expr: 'true'
    message:
      es: Declara la referencia de altura y la presencia de pérdidas.
      en: Declare the height reference and the presence of losses.
  coherence_checks:
  - expr: 'true'
    message:
      es: Si E_total cambia sin trabajo externo, revisa el modelo.
      en: If E_total changes without external work, review the model.
  graph_implications:
  - Coord permite decidir si el método energético cierra el problema.
  pedagogical_triggers:
  - when: 'true'
    message:
      es: Usa energía solo cuando el balance mecánico sea coherente con el contacto.
      en: Use energy only when the mechanical balance is coherent with contact.
`;export{e as default};
