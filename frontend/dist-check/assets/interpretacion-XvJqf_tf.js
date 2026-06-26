const e=`version: 5
id: interpretacion-ecuacion-de-continuidad
leaf_id: ecuacion-de-continuidad
nombre:
  es: Interpretacion de la Ecuacion de Continuidad
  en: Continuity Equation Interpretation
scope: mecanica-fluidos

dependencies:
  requires_formulas: true
  requires_magnitudes: true
  requires_results: true
  supports_graph_binding: true
  magnitudes: [Q, A, v, m_dot, rho]
  formulas: [caudal, caudal_masico]

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
      es: Resumen de Flujo
      en: Flow Summary
  physical_reading:
    title:
      es: Lectura Fisica Profunda
      en: Deep Physical Reading
  coherence:
    title:
      es: Analisis de Coherencia
      en: Coherence Analysis
  model_validity:
    title:
      es: Validez del Modelo
      en: Model Validity
  graph_reading:
    title:
      es: Interpretacion Grafica
      en: Graph Interpretation
  likely_errors:
    title:
      es: Errores Comunes Detectados
      en: Common Errors Detected
  next_step:
    title:
      es: Siguiente Paso Sugerido
      en: Suggested Next Step

targets:
  Q:
    summary_rules:
      - id: rule-q-summary
        when: "Q > 0"
        status: success
        text:
          es: "El caudal volumetrico [[Q]] es constante: esto implica que si el area [[A]] se reduce, la velocidad [[v]] debe aumentar proporcionalmente."
          en: "The volumetric flow rate [[Q]] is constant: this implies that if area [[A]] is reduced, velocity [[v]] must increase proportionally."
    physical_reading_rules:
      - id: rule-q-reading
        when: "Q > 0"
        status: info
        text:
          es: "El caudal indica que cada segundo atraviesan la seccion \${value} metros cubicos de fluido."
          en: "The flow rate indicates that each second \${value} cubic meters of fluid pass through the section."
    coherence_rules:
      - id: rule-q-v-a
        when: "true"
        status: info
        text:
          es: "El caudal es consistente con el producto del area [[A]] y la velocidad [[v]]."
          en: "The flow rate is consistent with the product of area [[A]] and velocity [[v]]."
    model_validity_rules:
      - id: rule-q-valid
        when: "true"
        status: success
        text:
          es: "Valido para flujo estacionario sin perdidas de masa en las paredes."
          en: "Valid for steady flow with no mass losses at the walls."
    graph_rules:
      - id: rule-q-graph
        when: "true"
        status: info
        text:
          es: "En el grafico, [[Q]] actua como la constante de proporcionalidad inversa entre area y velocidad."
          en: "In the graph, [[Q]] acts as the inverse proportionality constant between area and velocity."
    likely_errors:
      - id: rule-q-error
        when: "true"
        status: warning
        text:
          es: "Asegurate de no confundir caudal (volumen/tiempo) con velocidad (espacio/tiempo)."
          en: "Make sure not to confuse flow rate (volume/time) with velocity (space/time)."
    next_step_rules:
      - id: rule-q-next
        when: "true"
        status: info
        text:
          es: "Usa este caudal en la ecuacion de Bernoulli para hallar cambios de presion."
          en: "Use this flow rate in Bernoulli's equation to find pressure changes."

  v:
    summary_rules:
      - id: rule-v-summary
        when: "v > 0"
        status: info
        text:
          es: "El fluido se desplaza a una velocidad media [[v]] en esta seccion."
          en: "The fluid moves at an average velocity [[v]] in this section."
    physical_reading_rules:
      - id: rule-v-narrow
        when: "A < 0.01"
        status: warning
        text:
          es: "La seccion es muy estrecha; el fluido debe alcanzar velocidades altas para mantener la continuidad."
          en: "The section is very small; the fluid must reach high velocities to maintain continuity."
    coherence_rules:
      - id: rule-v-neg
        when: "v < 0"
        status: error
        text:
          es: "Error: Velocidad negativa detectada. Revisa la direccion del flujo definida."
          en: "Error: Negative velocity detected. Check the defined flow direction."
    model_validity_rules:
      - id: rule-v-mach
        when: "v > 100"
        status: warning
        text:
          es: "A esta velocidad, los efectos de compresibilidad podrian dejar de ser despreciables."
          en: "At this speed, compressibility effects might no longer be negligible."
    graph_rules:
      - id: rule-v-graph
        when: "true"
        status: info
        text:
          es: "La curva muestra como [[v]] crece hiperbolicamente al reducir el area [[A]]."
          en: "The curve shows how [[v]] grows hyperbolically as area [[A]] is reduced."
    likely_errors:
      - id: rule-v-const
        when: "true"
        status: warning
        text:
          es: "Error tipico: Pensar que la velocidad es la misma aunque cambie el diametro."
          en: "Typical error: Thinking velocity is the same even if the diameter changes."
    next_step_rules:
      - id: rule-v-energy
        when: "true"
        status: info
        text:
          es: "Calcula la energia cinetica por unidad de volumen ($1/2 \\\\rho v^2$)."
          en: "Calculate kinetic energy per unit volume ($1/2 \\\\rho v^2$)."

  A:
    summary_rules:
      - id: rule-a-summary
        when: "true"
        status: info
        text:
          es: "El area de la seccion [[A]] limita el paso del fluido."
          en: "The cross-sectional area [[A]] limits the fluid passage."
    physical_reading_rules:
      - id: rule-a-size
        when: "A > 0.5"
        status: info
        text:
          es: "Seccion de gran dimension; permite caudales elevados con velocidades bajas."
          en: "Large section; allows high flow rates with low velocities."
    coherence_rules:
      - id: rule-a-zero
        when: "A <= 0"
        status: error
        text:
          es: "Error: El area debe ser estrictamente positiva."
          en: "Error: Area must be strictly positive."
    model_validity_rules:
      - id: rule-a-uniform
        when: "true"
        status: info
        text:
          es: "Se asume un perfil de velocidad uniforme en toda el area [[A]]."
          en: "A uniform velocity profile is assumed across the entire area [[A]]."
    graph_rules:
      - id: rule-a-axis
        when: "true"
        status: info
        text:
          es: "[[A]] es la variable independiente en el eje horizontal del grafico."
          en: "[[A]] is the independent variable on the horizontal axis of the graph."
    likely_errors:
      - id: rule-a-radius
        when: "true"
        status: warning
        text:
          es: "No olvides elevar el radio al cuadrado: $A = \\\\pi r^2$."
          en: "Do not forget to square the radius: $A = \\\\pi r^2$."
    next_step_rules:
      - id: rule-a-ratio
        when: "true"
        status: info
        text:
          es: "Compara la relacion de areas entre dos puntos ($A_1/A_2$)."
          en: "Compare the area ratio between two points ($A_1/A_2$)."

  m_dot:
    summary_rules:
      - id: rule-mdot-summary
        when: "m_dot > 0"
        status: success
        text:
          es: "El caudal masico [[m_dot]] confirma la conservacion total de la materia."
          en: "Mass flow rate [[m_dot]] confirms total conservation of matter."
    physical_reading_rules:
      - id: rule-mdot-reading
        when: "true"
        status: info
        text:
          es: "Se transportan \${value} \\\\text{ kg}$ de fluido cada segundo a traves del sistema."
          en: "\${value} \\\\text{ kg}$ of fluid are transported through the system every second."
    coherence_rules:
      - id: rule-mdot-rho
        when: "true"
        status: info
        text:
          es: "Consistente con la densidad [[rho]] y el caudal volumetrico [[Q]]."
          en: "Consistent with density [[rho]] and volumetric flow rate [[Q]]."
    model_validity_rules:
      - id: rule-mdot-law
        when: "true"
        status: success
        text:
          es: "Ley fundamental de conservacion: $\\\\dot{m}_{in} = \\\\dot{m}_{out}$."
          en: "Fundamental conservation law: $\\\\dot{m}_{in} = \\\\dot{m}_{out}$."
    graph_rules:
      - id: rule-mdot-static
        when: "true"
        status: info
        text:
          es: "[[m_dot]] permanece constante independientemente de los cambios de seccion."
          en: "[[m_dot]] remains constant regardless of section changes."
    likely_errors:
      - id: rule-mdot-units
        when: "true"
        status: warning
        text:
          es: "Verifica que la densidad este en $\\\\text{kg/m}^3$ para obtener [[m_dot]] en $\\\\text{kg/s}$."
          en: "Verify that density is in $\\\\text{kg/m}^3$ to get [[m_dot]] in $\\\\text{kg/s}$."
    next_step_rules:
      - id: rule-mdot-balance
        when: "true"
        status: info
        text:
          es: "Aplica balances de masa en sistemas con multiples entradas y salidas."
          en: "Apply mass balances in systems with multiple inlets and outlets."

  rho:
    summary_rules:
      - id: rule-rho-summary
        when: "true"
        status: info
        text:
          es: "La densidad [[rho]] determina la inercia y el transporte de masa del fluido."
          en: "Density [[rho]] determines the fluid's inertia and mass transport."
    physical_reading_rules:
      - id: rule-rho-water
        when: "rho >= 990 && rho <= 1010"
        status: info
        text:
          es: "El fluido tiene una densidad similar a la del agua dulce."
          en: "The fluid has a density similar to that of fresh water."
    coherence_rules:
      - id: rule-rho-pos
        when: "rho <= 0"
        status: error
        text:
          es: "Error: La densidad debe ser mayor que cero."
          en: "Error: Density must be greater than zero."
    model_validity_rules:
      - id: rule-rho-incomp
        when: "true"
        status: info
        text:
          es: "Se asume incompresibilidad; [[rho]] no varia con la presion o velocidad."
          en: "Incompressibility is assumed; [[rho]] does not vary with pressure or velocity."
    graph_rules:
      - id: rule-rho-none
        when: "true"
        status: info
        text:
          es: "La densidad no afecta a la forma de la curva $v(A)$, pero si al balance de masa."
          en: "Density does not affect the shape of the $v(A)$ curve, but it does affect the mass balance."
    likely_errors:
      - id: rule-rho-units
        when: "true"
        status: warning
        text:
          es: "Asegurate de no usar densidad relativa (sin unidades) en lugar de absoluta."
          en: "Make sure not to use relative density (unitless) instead of absolute density."
    next_step_rules:
      - id: rule-rho-gas
        when: "true"
        status: info
        text:
          es: "Para gases a alta velocidad, considera el modelo de flujo compresible."
          en: "For high-speed gases, consider the compressible flow model."

summary:
  es: "Lectura fisica: El caudal [[Q]] se mantiene constante por conservacion de la masa, lo que obliga al fluido a acelerar en estrechamientos y frenar en ensanchamientos."
  en: "Physical reading: The flow rate [[Q]] remains constant due to mass conservation, forcing the fluid to accelerate in narrowings and slow down in widenings."
physical_reading:
  es: "Debido a la conservacion de la masa, el fluido debe acelerar en los estrechamientos y frenar en los ensanchamientos."
  en: "Due to mass conservation, the fluid must accelerate in narrowings and slow down in widenings."
coherence:
  es: "El balance es coherente si el producto $A \\\\cdot v$ es constante en todas las secciones transversales."
  en: "The balance is coherent if the product $A \\\\cdot v$ is constant at all cross sections."
model_validity:
  es: "Este modelo es extremadamente preciso para liquidos y para gases en regimen subsonico (Mach < 0.3)."
  en: "This model is extremely accurate for liquids and for gases in subsonic regime (Mach < 0.3)."
graph_reading:
  es: "La curva hiperbolica ilustra la relacion de proporcionalidad inversa entre el area disponible y la velocidad resultante."
  en: "The hyperbolic curve illustrates the inverse proportionality relationship between available area and resulting velocity."
likely_errors:
  es: "El error mas frecuente es ignorar el cambio de velocidad al variar el diametro de la tuberia."
  en: "The most frequent error is ignoring the velocity change when varying the pipe diameter."
next_step:
  es: "Combina este resultado con Bernoulli para determinar como cambian las presiones del sistema."
  en: "Combine this result with Bernoulli to determine how system pressures change."
`;export{e as default};
