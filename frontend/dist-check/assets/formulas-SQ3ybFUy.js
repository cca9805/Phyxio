const e=`version: 1
formulas:
- id: peso_vectorial
  target: P
  title:
    es: Definicion vectorial del peso
    en: Vector definition of weight
  equation: P = m*g
  latex: "\\\\vec{P} = m\\\\,\\\\vec{g}"
  rearrangements:
  - target: P
    equation: P = m*g
    latex: "\\\\vec{P} = m\\\\,\\\\vec{g}"
  - target: m
    equation: m = P/g
    latex: "m = \\\\frac{P}{g}"
    constraints:
    - expr: g != 0
      message:
        es: g no es cero.
        en: g cannot be zero.
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: El peso es el producto de la masa por el campo gravitatorio local; es una fuerza vectorial dirigida hacia el centro del astro.
    en: Weight is the product of mass and the local gravitational field; it is a vector force directed toward the center of the attracting body.
  constraints:
  - expr: m > 0
    message:
      es: La masa debe ser positiva.
      en: Mass must be positive.
  validity:
    es: Valida en mecanica clasica con campo gravitatorio aproximadamente uniforme en la zona de estudio.
    en: Valid in classical mechanics with an approximately uniform gravitational field in the study region.
  dimension_check: "[N] = [kg][m/s^2]"
  calculable: true
  motivo_no_calculable: null
  used_in: [ estatica, dinamica, dcl ]
  interpretation_tags:
  - weight_direction
  - vector_vs_scalar
  result_semantics:
    target: P
    meaning:
      es: Fuerza gravitatoria total sobre el cuerpo, con direccion y sentido incluidos.
      en: Total gravitational force on the body, including direction and sense.
  domain_checks:
  - check: "m > 0"
    message:
      es: La masa debe ser estrictamente positiva.
      en: Mass must be strictly positive.
  coherence_checks:
  - check: "Pmod > 0"
    message:
      es: El módulo del peso debe ser positivo si hay masa y gravedad.
      en: Weight magnitude must be positive when mass and gravity exist.
  graph_implications: []
  pedagogical_triggers:
  - trigger: "m_muy_grande"
    detect_when: "m > 1000"
    message:
      es: Con masas grandes (>1000 kg) asegurate de que el soporte puede resistir el peso resultante.
      en: With large masses (>1000 kg) ensure the support can withstand the resulting weight.

- id: modulo_peso
  target: Pmod
  title:
    es: Modulo del peso en campo uniforme
    en: Weight magnitude in a uniform field
  equation: Pmod = m*gmod
  latex: "P = m\\\\,g"
  rearrangements:
  - target: Pmod
    equation: Pmod = m*gmod
    latex: "P = m\\\\,g"
  - target: m
    equation: m = Pmod/gmod
    latex: "m = \\\\frac{P}{g}"
    constraints:
    - expr: gmod != 0
      message:
        es: g no es cero.
        en: g cannot be zero.
  - target: gmod
    equation: gmod = Pmod/m
    latex: "g = \\\\frac{P}{m}"
    constraints:
    - expr: m != 0
      message:
        es: La masa no puede ser cero.
        en: Mass cannot be zero.
  category: fundamental
  relation_type: scalar_form
  physical_meaning:
    es: Forma escalar del peso para calculo directo cuando la direccion ya esta determinada por el DCL.
    en: Scalar form of weight for direct calculation when direction is already determined by the FBD.
  constraints:
  - expr: m > 0
    message:
      es: La masa debe ser positiva.
      en: Mass must be positive.
  - expr: gmod > 0
    message:
      es: La gravedad debe ser positiva.
      en: Gravity must be positive.
  validity:
    es: Valida en campo gravitatorio uniforme, es decir, variaciones de altitud despreciables frente al radio del astro.
    en: Valid in a uniform gravitational field, i.e. altitude variations negligible compared to the body radius.
  dimension_check: "[N] = [kg][m/s^2]"
  calculable: true
  motivo_no_calculable: null
  used_in: [ estatica, dinamica, problemas_introductorios ]
  interpretation_tags:
  - scalar_weight
  - direct_calculation
  result_semantics:
    target: Pmod
    meaning:
      es: Valor numerico del peso en newtons, sin informacion de direccion.
      en: Numerical value of weight in newtons, without direction information.
  domain_checks:
  - check: "m > 0"
    message:
      es: La masa debe ser estrictamente positiva.
      en: Mass must be strictly positive.
  - check: "gmod > 0"
    message:
      es: La gravedad debe ser estrictamente positiva.
      en: Gravity must be strictly positive.
  coherence_checks:
  - check: "Pmod > 0"
    message:
      es: El peso debe ser positivo.
      en: Weight must be positive.
  - check: "Pmod < 1e9"
    message:
      es: Un peso superior a 1 GN es inusual; verificar datos de entrada.
      en: Weight above 1 GN is unusual; check input data.
  graph_implications: []
  pedagogical_triggers:
  - trigger: "peso_mayor_que_1000"
    detect_when: "Pmod > 1000"
    message:
      es: El peso supera 1 kN; considerar si este es un problema de ingenieria o de escala humana.
      en: Weight exceeds 1 kN; consider whether this is an engineering or human-scale problem.

- id: gravedad_campo_central
  target: gmod
  title:
    es: Gravedad en modelo de campo central
    en: Gravity in a central-field model
  equation: gmod = G*M_astro/r^2
  latex: "g = \\\\frac{G\\\\,M}{r^2}"
  rearrangements:
  - target: gmod
    equation: gmod = G*M_astro/r^2
    latex: "g = \\\\frac{G\\\\,M}{r^2}"
  - target: M_astro
    equation: M_astro = gmod*r^2/G
    latex: "M = \\\\frac{g\\\\,r^2}{G}"
    constraints:
    - expr: G != 0
      message:
        es: G no puede ser cero.
        en: G cannot be zero.
  - target: r
    equation: r = sqrt(G*M_astro/gmod)
    latex: "r = \\\\sqrt{\\\\frac{G\\\\,M}{g}}"
    constraints:
    - expr: gmod > 0
      message:
        es: g no es cero.
        en: g cannot be zero.
  category: derived
  relation_type: model_extension
  physical_meaning:
    es: Conecta el campo gravitatorio local con la masa y el radio del astro; explica por que g varia entre planetas y con la altitud.
    en: Connects the local gravitational field with the mass and radius of the attracting body; explains why g varies between planets and with altitude.
  constraints:
  - expr: r > 0
    message:
      es: La distancia al centro debe ser positiva.
      en: Distance to center must be positive.
  - expr: M_astro > 0
    message:
      es: La masa del astro debe ser positiva.
      en: Attracting body mass must be positive.
  validity:
    es: Modelo newtoniano de campo central, sin correcciones relativistas ni distribuciones no esfericas de masa.
    en: Newtonian central-field model, without relativistic corrections or non-spherical mass distributions.
  dimension_check: "[m/s^2] = [N m^2/kg^2][kg]/[m^2]"
  calculable: true
  motivo_no_calculable: null
  used_in: [ gravitacion, astrofisica ]
  interpretation_tags:
  - gravity_variation
  - planetary_comparison
  result_semantics:
    target: gmod
    meaning:
      es: Valor del campo gravitatorio en la superficie o a cierta distancia del centro del astro.
      en: Value of the gravitational field at the surface or at a given distance from the body center.
  domain_checks:
  - check: "r > 0"
    message:
      es: La distancia al centro debe ser estrictamente positiva.
      en: Distance to center must be strictly positive.
  coherence_checks:
  - check: "gmod > 0"
    message:
      es: La gravedad debe ser positiva.
      en: Gravity must be positive.
  graph_implications: []
  pedagogical_triggers:
  - trigger: "r_muy_pequeno"
    detect_when: "r < 1e5"
    message:
      es: Una distancia menor que 100 km sugiere que el cuerpo esta dentro del astro; el modelo de campo central deja de ser valido.
      en: A distance below 100 km suggests the body is inside the attracting mass; the central-field model is no longer valid.

- id: direccion_peso
  title:
    es: Direccion del peso
    en: Direction of weight
  equation: "hat(P) = hat(g)"
  latex: "\\\\hat{P} = \\\\hat{g}"
  rearrangements: []
  category: conceptual
  relation_type: directional_rule
  physical_meaning:
    es: El vector peso tiene la misma direccion y sentido que el campo gravitatorio local; en la superficie terrestre, esto significa verticalmente hacia abajo.
    en: The weight vector has the same direction and sense as the local gravitational field; on the Earth surface, this means vertically downward.
  constraints: []
  validity:
    es: Valida en toda la mecanica clasica.
    en: Valid throughout classical mechanics.
  dimension_check: "adimensional (relacion de direccion)"
  calculable: false
  motivo_no_calculable:
    es: Es un criterio cualitativo de orientacion, no una ecuacion numerica.
    en: It is a qualitative orientation criterion, not a numerical equation.
  used_in: [ dcl, estatica ]
  interpretation_tags:
  - weight_direction
  - dcl_drawing
  result_semantics:
    target: P
    meaning:
      es: La flecha del peso en el DCL debe apuntar en la direccion del campo gravitatorio.
      en: The weight arrow in the FBD must point in the direction of the gravitational field.
  domain_checks: []
  coherence_checks: []
  graph_implications: []
  pedagogical_triggers: []
`;export{e as default};
