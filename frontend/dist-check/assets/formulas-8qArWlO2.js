const e=`version: 5
topic:
  id: aerodinamica-basica
  title:
    es: Aerodinámica Básica
    en: Basic Aerodynamics
formulas:
- id: arrastre
  title:
    es: Ecuación del Arrastre
    en: Drag Equation
  equation: D_f = 0.5 * rho * C_D * A * v^2
  latex: D_f = \\frac{1}{2} \\rho C_D A v^2
  rearrangements:
  - id: reord_C_D
    target: C_D
    equation: D_f / (0.5 * rho * A * v^2)
    latex: C_D = \\frac{D_f}{\\frac{1}{2} \\rho A v^2}
    descripcion:
      es: Calcula el coeficiente de arrastre a partir de la fuerza medida.
      en: Calculates the drag coefficient from the measured force.
  - id: reord_v
    target: v
    equation: sqrt(D_f / (0.5 * rho * C_D * A))
    latex: v = \\sqrt{\\frac{D_f}{\\frac{1}{2} \\rho C_D A}}
    descripcion:
      es: Determina la velocidad necesaria para generar una fuerza de arrastre específica.
      en: Determines the velocity required to generate a specific drag force.
  category: fluidos-reales
  relation_type: ley-empirica
  physical_meaning:
    es: La fuerza de arrastre es proporcional a la densidad del fluido, al área frontal y al cuadrado de la velocidad.
    en: The drag force is proportional to the fluid density, the frontal area, and the square of the velocity.
  constraints: fluido continuo, régimen subsónico
  validity:
    es: Válido para números de Reynolds donde C_D es aproximadamente constante.
    en: Valid for Reynolds numbers where C_D is approximately constant.
  dimension_check: "[M L T^-2] = [M L^-3] * [1] * [L^2] * [L^2 T^-2] = [M L T^-2]"
  calculable: true
  motivo_no_calculable: ""
  used_in: [ aerodinamica-basica ]
  interpretation_tags: [ resistencia, friccion, presion, diseño ]
  result_semantics:
    target: D_f
    es: Cuantifica la fuerza que se opone al movimiento.
    en: Quantifies the force opposing the motion.
  domain_checks: [ rho > 0, v >= 0, A > 0, C_D > 0 ]
  coherence_checks: [ D_f >= 0 ]
  graph_implications: determina la longitud del vector de arrastre en el DCL
  pedagogical_triggers: paracaidismo, diseño de coches deportivos
  variables_principales: [ D_f, rho, C_D, A, v ]
  unidades_coherentes:
    es: Asegúrese de usar la densidad en kg/m³ y el área en m².
    en: Ensure you use density in kg/m³ and area in m².
  relevancia_didactica: 5
  difficulty_rating: 3

- id: lift_aero
  title:
    es: Ecuación de la Sustentación
    en: Lift Equation
  equation: L_f = 0.5 * rho * C_L * A * v^2
  latex: L_f = \\frac{1}{2} \\rho C_L A v^2
  rearrangements:
  - id: reord_C_L
    target: C_L
    equation: L_f / (0.5 * rho * A * v^2)
    latex: C_L = \\frac{L_f}{\\frac{1}{2} \\rho A v^2}
    descripcion:
      es: Calcula el coeficiente de sustentación necesario.
      en: Calculates the required lift coefficient.
  category: fluidos-reales
  relation_type: ley-empirica
  physical_meaning:
    es: La sustentación depende de la densidad, el área de referencia y la velocidad al cuadrado, modulada por la forma (C_L).
    en: Lift depends on density, reference area, and velocity squared, modulated by shape (C_L).
  constraints: fluido continuo, régimen subsónico
  validity:
    es: Válido antes del ángulo de pérdida (stall).
    en: Valid before the stall angle.
  dimension_check: "[M L T^-2] = [M L^-3] * [1] * [L^2] * [L^2 T^-2] = [M L T^-2]"
  calculable: true
  motivo_no_calculable: ""
  used_in: [ aerodinamica-basica ]
  interpretation_tags: [ vuelo, ala, presion, sustentacion ]
  result_semantics:
    target: L_f
    es: Cuantifica la fuerza ascendente que permite el vuelo.
    en: Quantifies the upward force that allows flight.
  domain_checks: [ rho > 0, v >= 0, A > 0 ]
  coherence_checks: [ L_f >= 0 ]
  graph_implications: escala el vector de sustentación en el eje vertical
  pedagogical_triggers: perfiles alares, spoilers de Fórmula 1
  variables_principales: [ L_f, rho, C_L, A, v ]
  unidades_coherentes:
    es: Las unidades deben ser consistentes en el sistema internacional.
    en: Units must be consistent in the international system.
  relevancia_didactica: 5
  difficulty_rating: 3

ui:
  default_formula: arrastre
  groups:
  - title:
      es: Fuerzas Aerodinámicas
      en: Aerodynamic Forces
    items: [ arrastre, lift_aero ]
`;export{e as default};
