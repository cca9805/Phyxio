const e=`- id: velocidad_fase_flexional
  title:
    es: Velocidad de fase de la onda flexional (Euler-Bernoulli)
    en: Flexural wave phase velocity (Euler-Bernoulli)
  equation: "v_fase_flex = (E_young * I_seccion * omega^2 / rho_lin)^(1/4)"
  latex: "v_f = \\\\left(\\\\frac{E I \\\\, \\\\omega^2}{\\\\rho A}\\\\right)^{1/4}"
  rearrangements:
    - target: v_fase_flex
      equation: "v_fase_flex = (E_young * I_seccion * omega^2 / rho_lin)^(1/4)"
      latex: "v_f = \\\\left(\\\\frac{E I \\\\, \\\\omega^2}{\\\\rho A}\\\\right)^{1/4}"
    - target: omega
      equation: "omega = v_fase_flex^2 * sqrt(rho_lin / (E_young * I_seccion))"
      latex: "\\\\omega = v_f^2 \\\\sqrt{\\\\frac{\\\\rho A}{E I}}"
    - target: E_young
      equation: "E_young = rho_lin * v_fase_flex^4 / (I_seccion * omega^2)"
      latex: "E = \\\\frac{\\\\rho A \\\\, v_f^4}{I \\\\, \\\\omega^2}"
    - target: I_seccion
      equation: "I_seccion = rho_lin * v_fase_flex^4 / (E_young * omega^2)"
      latex: "I = \\\\frac{\\\\rho A \\\\, v_f^4}{E \\\\, \\\\omega^2}"
    - target: rho_lin
      equation: "rho_lin = E_young * I_seccion * omega^2 / v_fase_flex^4"
      latex: "\\\\rho A = \\\\frac{E I \\\\, \\\\omega^2}{v_f^4}"
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: "La velocidad de fase [[v_fase_flex]] depende de la rigidez a la flexión [[E_young]]·[[I_seccion]], la inercia [[rho_lin]] y la frecuencia [[omega]]. La raíz cuarta implica una dispersión cuadrática: ondas de mayor frecuencia viajan más rápido."
    en: "Phase velocity [[v_fase_flex]] depends on bending stiffness [[E_young]]·[[I_seccion]], inertia [[rho_lin]] and frequency [[omega]]. The fourth root implies quadratic dispersion: higher-frequency waves travel faster."
  constraints:
    - "E_young > 0"
    - "I_seccion > 0"
    - "rho_lin > 0"
    - "omega > 0"
  validity:
    es: "Válida cuando la longitud de onda flexional es mucho mayor que el espesor de la sección (régimen de onda larga). Falla a frecuencias altas donde la deformación por cortante importa."
    en: "Valid when the flexural wavelength is much greater than the section thickness (long-wave regime). Fails at high frequencies where shear deformation matters."
  dimension_check: "[L T⁻¹] = ([M L⁻¹ T⁻²]·[L⁴]·[T⁻²]/[M L⁻¹])^(1/4) = ([L⁴ T⁻⁴])^(1/4) = [L T⁻¹] ✓"
  calculable: true
  motivo_no_calculable: ""
  used_in:
    - teoria
    - ejemplos
    - interpretacion
  interpretation_tags:
    - velocidad_fase
    - dispersion_flexional
  result_semantics:
    target: v_fase_flex
    kind: scalar_unsigned
    sign_meaning:
      es: "Siempre positiva; indica rapidez de propagación de un frente de fase."
      en: "Always positive; indicates how fast a phase front travels."
    absolute_value_meaning:
      es: "Para acero con sección rectangular de 5 mm de espesor a 1 kHz, la velocidad de fase flexional es aproximadamente 130 m/s, mucho menor que la longitudinal (5100 m/s)."
      en: "For steel with a 5 mm thick rectangular section at 1 kHz, flexural phase velocity is approximately 130 m/s, much less than longitudinal (5100 m/s)."
  domain_checks:
    - "v_fase_flex > 0"
    - "v_fase_flex < 12000"
  coherence_checks:
    - "v_fase_flex debe ser menor que la velocidad longitudinal en el mismo material"
    - "v_fase_flex aumenta si omega aumenta"
    - "v_fase_flex aumenta si I_seccion aumenta con rho_lin fija"
  graph_implications:
    - "La curva v_f vs omega tiene pendiente decreciente (raiz cuadrada)"
    - "La curva v_f vs f en log-log tiene pendiente 1/2"
  pedagogical_triggers:
    - "Si v_fase_flex resulta mayor que la velocidad longitudinal del material, verificar unidades de I_seccion y omega"
    - "Si el alumno obtiene un valor constante de v_f para distintas omega, no está aplicando la dispersión"

- id: velocidad_grupo_flexional
  title:
    es: Velocidad de grupo de la onda flexional
    en: Flexural wave group velocity
  equation: "v_grupo_flex = 2 * v_fase_flex"
  latex: "v_g = 2 \\\\, v_f"
  rearrangements:
    - target: v_grupo_flex
      equation: "v_grupo_flex = 2 * v_fase_flex"
      latex: "v_g = 2 \\\\, v_f"
    - target: v_fase_flex
      equation: "v_fase_flex = v_grupo_flex / 2"
      latex: "v_f = \\\\frac{v_g}{2}"
  category: fundamental
  relation_type: identity
  physical_meaning:
    es: "En el modelo de Euler-Bernoulli, la velocidad de grupo [[v_grupo_flex]] es exactamente el doble de la velocidad de fase [[v_fase_flex]]. Esto es consecuencia directa de la relación de dispersión cuadrática."
    en: "In the Euler-Bernoulli model, group velocity [[v_grupo_flex]] is exactly twice phase velocity [[v_fase_flex]]. This is a direct consequence of the quadratic dispersion relation."
  constraints:
    - "v_fase_flex > 0"
  validity:
    es: "Exacta en el modelo de Euler-Bernoulli. Se deteriora a frecuencias altas donde el modelo de Timoshenko reduce la velocidad de grupo por debajo de 2·v_f."
    en: "Exact in the Euler-Bernoulli model. Degrades at high frequencies where the Timoshenko model reduces group velocity below 2·v_f."
  dimension_check: "[L T⁻¹] = [L T⁻¹] ✓"
  calculable: true
  motivo_no_calculable: ""
  used_in:
    - teoria
    - ejemplos
    - interpretacion
  interpretation_tags:
    - velocidad_grupo
    - transporte_energia
  result_semantics:
    target: v_grupo_flex
    kind: scalar_unsigned
    sign_meaning:
      es: "Siempre positiva; indica la velocidad de transporte de energía."
      en: "Always positive; indicates the speed of energy transport."
    absolute_value_meaning:
      es: "El doble de la velocidad de fase. Para el ejemplo de acero a 1 kHz, v_g es aproximadamente 260 m/s."
      en: "Twice the phase velocity. For the steel example at 1 kHz, v_g is approximately 260 m/s."
  domain_checks:
    - "v_grupo_flex > 0"
  coherence_checks:
    - "v_grupo_flex debe ser exactamente 2 veces v_fase_flex en Euler-Bernoulli"
    - "v_grupo_flex debe ser menor que la velocidad longitudinal del material"
  graph_implications:
    - "La curva v_g vs omega es paralela a la de v_f pero a doble altura en escala lineal"
  pedagogical_triggers:
    - "Si v_grupo_flex resulta igual a v_fase_flex, el alumno ha confundido el modelo con uno no dispersivo"
    - "Si v_grupo_flex es menor que v_fase_flex, se ha invertido la relación"

- id: relacion_dispersion_flex
  title:
    es: Relación de dispersión flexional (Euler-Bernoulli)
    en: Flexural dispersion relation (Euler-Bernoulli)
  equation: "omega = sqrt(E_young * I_seccion / rho_lin) * k_flex^2"
  latex: "\\\\omega = \\\\sqrt{\\\\frac{EI}{\\\\rho A}} \\\\, k^2"
  rearrangements:
    - target: omega
      equation: "omega = sqrt(E_young * I_seccion / rho_lin) * k_flex^2"
      latex: "\\\\omega = \\\\sqrt{\\\\frac{EI}{\\\\rho A}} \\\\, k^2"
    - target: k_flex
      equation: "k_flex = (omega * sqrt(rho_lin / (E_young * I_seccion)))^(1/2)"
      latex: "k = \\\\left(\\\\omega \\\\sqrt{\\\\frac{\\\\rho A}{EI}}\\\\right)^{1/2}"
    - target: E_young
      equation: "E_young = rho_lin * omega^2 / (I_seccion * k_flex^4)"
      latex: "E = \\\\frac{\\\\rho A \\\\, \\\\omega^2}{I \\\\, k^4}"
    - target: I_seccion
      equation: "I_seccion = rho_lin * omega^2 / (E_young * k_flex^4)"
      latex: "I = \\\\frac{\\\\rho A \\\\, \\\\omega^2}{E \\\\, k^4}"
    - target: rho_lin
      equation: "rho_lin = E_young * I_seccion * k_flex^4 / omega^2"
      latex: "\\\\rho A = \\\\frac{E I \\\\, k^4}{\\\\omega^2}"
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: "La relación de dispersión conecta [[omega]] con [[k_flex]] de forma cuadrática. El coeficiente sqrt(EI/rho·A) tiene dimensiones de velocidad al cuadrado y controla la escala temporal de la propagación."
    en: "The dispersion relation connects [[omega]] with [[k_flex]] quadratically. The coefficient sqrt(EI/rho·A) has dimensions of velocity squared and controls the time scale of propagation."
  constraints:
    - "E_young > 0"
    - "I_seccion > 0"
    - "rho_lin > 0"
    - "k_flex > 0"
  validity:
    es: "Exacta en la teoría de Euler-Bernoulli para vigas delgadas. Falla cuando la longitud de onda se acerca al espesor de la sección."
    en: "Exact in Euler-Bernoulli theory for slender beams. Fails when the wavelength approaches the section thickness."
  dimension_check: "[T⁻¹] = ([M L⁻¹ T⁻²]·[L⁴]/[M L⁻¹])^(1/2)·[L⁻²] = [L² T⁻¹]·[L⁻²] = [T⁻¹] ✓"
  calculable: true
  motivo_no_calculable: ""
  used_in:
    - teoria
    - ejemplos
    - interpretacion
  interpretation_tags:
    - relacion_dispersion
    - dispersion_cuadratica
  result_semantics:
    target: k_flex
    kind: scalar_unsigned
    sign_meaning:
      es: "Siempre positivo para ondas propagantes."
      en: "Always positive for propagating waves."
    absolute_value_meaning:
      es: "Un k elevado indica una longitud de onda corta, típica de altas frecuencias en vigas delgadas."
      en: "A large k indicates a short wavelength, typical of high frequencies in slender beams."
  domain_checks:
    - "k_flex > 0"
  coherence_checks:
    - "omega crece como k^2, no como k"
    - "k_flex aumenta si omega aumenta con EI y rho_lin fijas"
  graph_implications:
    - "La curva omega vs k es una parábola, no una recta"
    - "La pendiente de la tangente da la velocidad de grupo"
  pedagogical_triggers:
    - "Si la curva omega-k es lineal, el alumno ha confundido con ondas longitudinales no dispersivas"
    - "El punto donde la parábola se desvía de la medición marca el límite de Euler-Bernoulli"

- id: longitud_onda_flexional
  title:
    es: Longitud de onda flexional
    en: Flexural wavelength
  equation: "lambda_flex = 2 * pi / k_flex"
  latex: "\\\\lambda_f = \\\\frac{2\\\\pi}{k}"
  rearrangements:
    - target: lambda_flex
      equation: "lambda_flex = 2 * pi / k_flex"
      latex: "\\\\lambda_f = \\\\frac{2\\\\pi}{k}"
    - target: k_flex
      equation: "k_flex = 2 * pi / lambda_flex"
      latex: "k = \\\\frac{2\\\\pi}{\\\\lambda_f}"
  category: auxiliary
  relation_type: identity
  physical_meaning:
    es: "La longitud de onda [[lambda_flex]] es la distancia entre dos máximos consecutivos de la deformación. Disminuye al aumentar la frecuencia porque la propagación es dispersiva."
    en: "Flexural wavelength [[lambda_flex]] is the distance between two consecutive displacement maxima. It decreases with increasing frequency because propagation is dispersive."
  constraints:
    - "k_flex > 0"
  validity:
    es: "Definición universal; siempre aplicable si k está bien definido."
    en: "Universal definition; always applicable if k is well defined."
  dimension_check: "[L] = [L] ✓"
  calculable: true
  motivo_no_calculable: ""
  used_in:
    - teoria
    - ejemplos
    - interpretacion
  interpretation_tags:
    - longitud_onda
    - escala_espacial
  result_semantics:
    target: lambda_flex
    kind: scalar_unsigned
    sign_meaning:
      es: "Siempre positiva."
      en: "Always positive."
    absolute_value_meaning:
      es: "Para acero con sección de 5 mm a 1 kHz, la longitud de onda flexional es aproximadamente 0.13 m, mucho menor que la longitudinal (5.1 m a la misma frecuencia)."
      en: "For 5 mm steel section at 1 kHz, flexural wavelength is approximately 0.13 m, much shorter than longitudinal (5.1 m at the same frequency)."
  domain_checks:
    - "lambda_flex > 0"
  coherence_checks:
    - "lambda_flex debe disminuir si omega aumenta"
    - "lambda_flex debe ser mayor que el espesor para validez de Euler-Bernoulli"
  graph_implications:
    - "lambda_flex marca la escala espacial del patron de deformacion en el grafico SVG"
  pedagogical_triggers:
    - "Si lambda_flex resulta menor que el espesor de la seccion, el modelo de Euler-Bernoulli ya no es valido"
`;export{e as default};
