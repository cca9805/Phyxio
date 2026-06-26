const e=`- id: definicion_inductancia
  title:
    es: Definicion de inductancia propia
    en: Definition of self-inductance
  equation: "L = lambda_B / I"
  latex: "L = \\\\frac{\\\\lambda_B}{I}  % L lambda_B I"
  rearrangements:
    - target: L
      equation: "L = lambda_B / I"
      latex: "L = \\\\frac{\\\\lambda_B}{I}  % L lambda_B I"
    - target: lambda_B
      equation: "lambda_B = L * I"
      latex: "\\\\lambda_B = L\\\\,I  % lambda_B L I"
    - target: I
      equation: "I = lambda_B / L"
      latex: "I = \\\\frac{\\\\lambda_B}{L}  % I lambda_B L"
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: "La inductancia mide cuanto flujo enlazado genera una corriente dada en la propia bobina."
    en: "Inductance measures how much linked flux a given current creates in the same coil."
  constraints:
    - bobina lineal
    - geometria fija
    - material no saturado
  validity:
    es: "Valida si el flujo enlazado es proporcional a la corriente."
    en: "Valid if flux linkage is proportional to current."
  dimension_check: "Wb/A produce H."
  calculable: true
  motivo_no_calculable: ""
  used_in: [teoria, ejemplos, interpretacion]
  interpretation_tags: [acoplamiento, pendiente]
  result_semantics:
    target: L
    kind: positive_scale
    sign_meaning:
      es: "En una bobina pasiva lineal se espera positiva."
      en: "In a passive linear coil it is expected positive."
    absolute_value_meaning:
      es: "Mayor valor indica mas flujo enlazado por amperio."
      en: "Larger value indicates more flux linkage per ampere."
  domain_checks:
    - id: L_positive
      when: "L >= 0"
      status: ok
      message:
        es: "Inductancia no negativa coherente con una bobina pasiva."
        en: "Nonnegative inductance is coherent with a passive coil."
  coherence_checks:
    - id: I_zero_warning
      when: "I == 0"
      status: warning
      message:
        es: "No despejes L dividiendo por corriente nula."
        en: "Do not solve for L by dividing by zero current."
  graph_implications:
    - "L es la pendiente entre lambda_B e I."
  pedagogical_triggers:
    - "Separar flujo enlazado de flujo por una sola espira."
- id: flujo_enlazado_lineal
  title:
    es: Flujo enlazado en una bobina lineal
    en: Flux linkage in a linear coil
  equation: "lambda_B = L * I"
  latex: "\\\\lambda_B = L\\\\,I  % lambda_B L I"
  rearrangements:
    - target: lambda_B
      equation: "lambda_B = L * I"
      latex: "\\\\lambda_B = L\\\\,I  % lambda_B L I"
    - target: L
      equation: "L = lambda_B / I"
      latex: "L = \\\\frac{\\\\lambda_B}{I}  % L lambda_B I"
    - target: I
      equation: "I = lambda_B / L"
      latex: "I = \\\\frac{\\\\lambda_B}{L}  % I lambda_B L"
  category: derived
  relation_type: constitutive_relation
  physical_meaning:
    es: "En una bobina lineal, el flujo enlazado crece proporcionalmente con la corriente."
    en: "In a linear coil, flux linkage grows proportionally with current."
  constraints:
    - inductancia constante
    - sin saturacion magnetica
  validity:
    es: "Valida para el tramo donde L permanece casi constante."
    en: "Valid over the segment where L remains nearly constant."
  dimension_check: "H multiplicado por A produce Wb."
  calculable: true
  motivo_no_calculable: ""
  used_in: [teoria, ejemplos, interpretacion]
  interpretation_tags: [flujo, proporcionalidad]
  result_semantics:
    target: lambda_B
    kind: signed_quantity
    sign_meaning:
      es: "El signo sigue la convencion de corriente y normal."
      en: "The sign follows current and normal conventions."
    absolute_value_meaning:
      es: "Mayor modulo indica mayor enlace magnetico."
      en: "Larger magnitude indicates stronger magnetic linkage."
  domain_checks:
    - id: lambda_linear
      when: "true"
      status: ok
      message:
        es: "Lectura valida dentro del tramo lineal."
        en: "Reading valid inside the linear segment."
  coherence_checks:
    - id: lambda_zero
      when: "I == 0"
      status: ok
      message:
        es: "Con corriente nula, el flujo enlazado propio debe anularse en el modelo sin remanencia."
        en: "With zero current, self-linked flux should vanish in the model without remanence."
  graph_implications:
    - "La grafica lambda_B frente a I es una recta si L es constante."
  pedagogical_triggers:
    - "No confundir flujo enlazado con campo magnetico local."
- id: fem_autoinducida_media
  title:
    es: Fem autoinducida media
    en: Average self-induced emf
  equation: "epsilon_L = -L * DeltaI / Deltat"
  latex: "\\\\varepsilon_L = -L\\\\,\\\\frac{\\\\Delta I}{\\\\Delta t}  % epsilon_L L DeltaI Deltat"
  rearrangements:
    - target: epsilon_L
      equation: "epsilon_L = -L * DeltaI / Deltat"
      latex: "\\\\varepsilon_L = -L\\\\,\\\\frac{\\\\Delta I}{\\\\Delta t}  % epsilon_L L DeltaI Deltat"
    - target: DeltaI
      equation: "DeltaI = -epsilon_L * Deltat / L"
      latex: "\\\\Delta I = -\\\\frac{\\\\varepsilon_L\\\\,\\\\Delta t}{L}  % DeltaI epsilon_L Deltat L"
    - target: Deltat
      equation: "Deltat = -L * DeltaI / epsilon_L"
      latex: "\\\\Delta t = -\\\\frac{L\\\\,\\\\Delta I}{\\\\varepsilon_L}  % Deltat L DeltaI epsilon_L"
    - target: L
      equation: "L = -epsilon_L * Deltat / DeltaI"
      latex: "L = -\\\\frac{\\\\varepsilon_L\\\\,\\\\Delta t}{\\\\Delta I}  % L epsilon_L Deltat DeltaI"
  category: fundamental
  relation_type: average_relation
  physical_meaning:
    es: "La fem autoinducida se opone al cambio medio de corriente."
    en: "The self-induced emf opposes the average current change."
  constraints:
    - inductancia aproximadamente constante
    - intervalo temporal positivo
  validity:
    es: "Valida para estimaciones medias de transitorios lineales."
    en: "Valid for average estimates of linear transients."
  dimension_check: "H por A dividido por s produce V."
  calculable: true
  motivo_no_calculable: ""
  used_in: [teoria, ejemplos, interpretacion]
  interpretation_tags: [oposicion, transitorio]
  result_semantics:
    target: epsilon_L
    kind: signed_quantity
    sign_meaning:
      es: "El signo negativo expresa oposicion al cambio de corriente."
      en: "The negative sign expresses opposition to current change."
    absolute_value_meaning:
      es: "Mayor modulo indica mayor tension transitoria inducida."
      en: "Larger magnitude indicates larger induced transient voltage."
  domain_checks:
    - id: dt_positive
      when: "Deltat > 0"
      status: ok
      message:
        es: "El intervalo temporal positivo permite calcular una rapidez media."
        en: "Positive time interval allows an average rate to be computed."
  coherence_checks:
    - id: dt_zero_error
      when: "Deltat == 0"
      status: error
      message:
        es: "Intervalo nulo invalida la fem media."
        en: "Zero interval invalidates average emf."
  graph_implications:
    - "La fem crece en modulo con la pendiente de I frente al tiempo."
  pedagogical_triggers:
    - "Recordar que la bobina se opone al cambio, no a la corriente constante."
- id: energia_magnetica
  title:
    es: Energia magnetica almacenada
    en: Stored magnetic energy
  equation: "U_B = 0.5 * L * I^2"
  latex: "U_B = \\\\frac{1}{2} L I^2  % U_B L I"
  rearrangements:
    - target: U_B
      equation: "U_B = 0.5 * L * I^2"
      latex: "U_B = \\\\frac{1}{2} L I^2  % U_B L I"
    - target: L
      equation: "L = 2 * U_B / I^2"
      latex: "L = \\\\frac{2U_B}{I^2}  % L U_B I"
    - target: I
      equation: "I = sqrt(2 * U_B / L)"
      latex: "I = \\\\sqrt{\\\\frac{2U_B}{L}}  % I U_B L"
  category: derived
  relation_type: integral_relation
  physical_meaning:
    es: "La energia almacenada en el campo magnetico aumenta con la inductancia y con el cuadrado de la corriente."
    en: "Energy stored in the magnetic field increases with inductance and with the square of current."
  constraints:
    - bobina lineal
    - energia no negativa
  validity:
    es: "Valida para inductancia constante y sin perdidas dominantes."
    en: "Valid for constant inductance and no dominant losses."
  dimension_check: "H por A al cuadrado produce J."
  calculable: true
  motivo_no_calculable: ""
  used_in: [teoria, ejemplos, interpretacion]
  interpretation_tags: [energia, almacenamiento]
  result_semantics:
    target: U_B
    kind: positive_energy
    sign_meaning:
      es: "No usa signo en el modelo pasivo."
      en: "It uses no sign in the passive model."
    absolute_value_meaning:
      es: "Mayor valor indica mas energia disponible al descargar la bobina."
      en: "Larger value indicates more energy available when the coil discharges."
  domain_checks:
    - id: energy_nonnegative
      when: "U_B >= 0"
      status: ok
      message:
        es: "La energia magnetica almacenada no debe ser negativa."
        en: "Stored magnetic energy should not be negative."
  coherence_checks:
    - id: current_zero_energy
      when: "I == 0"
      status: ok
      message:
        es: "Con corriente nula, la energia almacenada debe ser nula."
        en: "With zero current, stored energy should vanish."
  graph_implications:
    - "La energia frente a corriente tiene curvatura cuadratica."
  pedagogical_triggers:
    - "Explicar chispas y sobretensiones como liberacion de energia almacenada."
`;export{e as default};
