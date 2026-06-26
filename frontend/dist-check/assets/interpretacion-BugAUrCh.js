const e=`version: "5.0"
id: interp-introduccion
leaf_id: introduccion

nombre:
  es: "Interpretación — Introduccion a ondas en sólidos"
  en: "Interpretation — Introduction to waves in solids"

scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: ondas-mecanicas
  parent_id: ondas-en-solidos
  ruta_relativa: fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/introduccion

enabled: true

output_contract:
  sections:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_mode:
    max_sections: 2
    priority:
      - summary
      - likely_errors
  extended_mode:
    show_all: true

result_blocks:
  summary:
    title:
      es: "Resumen"
      en: "Summary"
  physical_reading:
    title:
      es: "Lectura física"
      en: "Physical reading"
  coherence:
    title:
      es: "Coherencia"
      en: "Coherence"
  model_validity:
    title:
      es: "Validez del modelo"
      en: "Model validity"
  graph_reading:
    title:
      es: "Lectura de gráfica"
      en: "Graph reading"
  likely_errors:
    title:
      es: "Errores probables"
      en: "Likely errors"
  next_step:
    title:
      es: "Siguiente paso"
      en: "Next step"

dependencies:
  formulas:
    - velocidad_longitudinal_barra
    - velocidad_transversal
    - relacion_dispersion
  magnitudes:
    - v_fase
    - E_young
    - G_mod
    - rho
    - f
    - lambda

global_context:
  physical_domain:
    es: "Propagación de ondas mecánicas en medios sólidos elásticos"
    en: "Mechanical wave propagation in elastic solid media"
  main_question:
    es: "¿Cómo se propagan las ondas mecánicas a través de un sólido y qué determina su velocidad?"
    en: "How do mechanical waves propagate through a solid and what determines their speed?"

targets:
  v_fase:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Rapidez de propagación del frente de onda en el sólido"
      en: "Speed of wavefront propagation in the solid"
    summary_rules:
      - id: v_fase_summary_default
        when: "true"
        status: ok
        text:
          es: "La velocidad de fase calculada es [[v_fase]]. Indica la rapidez con que la perturbación se propaga por el sólido, determinada por la relación entre la rigidez elástica ([[E_young]] o [[G_mod]]) y la densidad [[rho]]."
          en: "The calculated phase velocity is [[v_fase]]. It indicates how fast the disturbance propagates through the solid, determined by the ratio between elastic stiffness ([[E_young]] or [[G_mod]]) and density [[rho]]."
      - id: v_fase_summary_high
        when: "v_fase > 8000"
        status: ok
        text:
          es: "La velocidad [[v_fase]] es muy alta, típica de cerámicas o materiales de alta rigidez y baja densidad. Verificar que los datos del material sean correctos."
          en: "Velocity [[v_fase]] is very high, typical of ceramics or materials with high stiffness and low density. Verify that material data are correct."
      - id: v_fase_summary_low
        when: "v_fase < 500"
        status: warning
        text:
          es: "La velocidad [[v_fase]] es muy baja, propia de elastómeros o polímeros blandos. Si el material es un metal, revisar los datos de entrada."
          en: "Velocity [[v_fase]] is very low, characteristic of elastomers or soft polymers. If the material is a metal, check input data."
    physical_reading_rules:
      - id: v_fase_reading_default
        when: "true"
        status: ok
        text:
          es: "[[v_fase]] expresa la competición entre rigidez e inercia del material. Mayor [[E_young]] (o [[G_mod]]) aumenta la velocidad; mayor [[rho]] la reduce. El resultado refleja cuán rápido se restaura la deformación local frente a cuánta masa hay que mover."
          en: "[[v_fase]] expresses the competition between material stiffness and inertia. Higher [[E_young]] (or [[G_mod]]) increases velocity; higher [[rho]] reduces it. The result reflects how fast local deformation is restored versus how much mass needs to move."
    coherence_rules:
      - id: v_fase_coherence_longitudinal_mayor
        when: "true"
        status: ok
        text:
          es: "Verificar que la velocidad longitudinal sea siempre mayor que la transversal en el mismo material. Si no se cumple, hay un error en la selección del módulo elástico."
          en: "Verify that longitudinal velocity is always greater than transverse in the same material. If not, there is an error in elastic modulus selection."
      - id: v_fase_coherence_rango
        when: "true"
        status: ok
        text:
          es: "Para sólidos de ingeniería, [[v_fase]] debe estar entre 50 m/s (elastómeros) y 12000 m/s (cerámicas avanzadas). Valores fuera de este rango indican error de datos o unidades."
          en: "For engineering solids, [[v_fase]] must be between 50 m/s (elastomers) and 12000 m/s (advanced ceramics). Values outside this range indicate data or unit errors."
    model_validity_rules:
      - id: v_fase_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de onda plana es válido cuando [[lambda]] es mucho mayor que las dimensiones transversales de la pieza. A frecuencias altas aparecen modos guiados y la velocidad deja de ser constante."
          en: "The plane wave model is valid when [[lambda]] is much greater than the transverse dimensions of the part. At high frequencies guided modes appear and velocity ceases to be constant."
    graph_rules:
      - id: v_fase_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica, [[v_fase]] aparece como valor constante si el medio es no dispersivo. Si varía con la frecuencia, el medio es dispersivo y el modelo simple no aplica."
          en: "In the graph, [[v_fase]] appears as a constant value if the medium is non-dispersive. If it varies with frequency, the medium is dispersive and the simple model does not apply."
    likely_errors:
      - id: v_fase_error_raiz
        when: "true"
        status: warning
        text:
          es: "Error frecuente: olvidar la raíz cuadrada. Si [[v_fase]] resulta del orden de millones de m/s, falta la raíz en el cálculo. Verificar dimensionalmente."
          en: "Common error: forgetting the square root. If [[v_fase]] is on the order of millions of m/s, the root is missing from the calculation. Check dimensionally."
      - id: v_fase_error_modulo
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar [[E_young]] para ondas transversales o [[G_mod]] para longitudinales. Cada modo tiene su módulo correcto."
          en: "Common error: using [[E_young]] for transverse waves or [[G_mod]] for longitudinal. Each mode has its correct modulus."
    next_step_rules:
      - id: v_fase_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[v_fase]] conocida, calcular [[lambda]] dividiendo por la frecuencia [[f]], o determinar la impedancia mecánica multiplicando [[rho]] por [[v_fase]] por el área de la sección."
          en: "With [[v_fase]] known, calculate [[lambda]] by dividing by frequency [[f]], or determine mechanical impedance by multiplying [[rho]] times [[v_fase]] times cross-sectional area."

  E_young:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Rigidez longitudinal del material que controla la velocidad de ondas de compresión"
      en: "Longitudinal stiffness of the material controlling compression wave speed"
    summary_rules:
      - id: E_young_summary_default
        when: "true"
        status: ok
        text:
          es: "El módulo de Young [[E_young]] cuantifica la resistencia del sólido a la deformación longitudinal. Junto con [[rho]], determina [[v_fase]] de las ondas longitudinales en barras delgadas."
          en: "Young's modulus [[E_young]] quantifies the solid's resistance to longitudinal deformation. Together with [[rho]], it determines [[v_fase]] of longitudinal waves in thin bars."
    physical_reading_rules:
      - id: E_young_reading_default
        when: "true"
        status: ok
        text:
          es: "[[E_young]] aparece dentro de la raíz cuadrada: duplicar el módulo solo aumenta la velocidad en un factor √2 (aproximadamente 41%). Esto significa que la velocidad es relativamente insensible a variaciones moderadas de rigidez."
          en: "[[E_young]] appears inside the square root: doubling the modulus only increases velocity by a factor of √2 (approximately 41%). This means velocity is relatively insensitive to moderate stiffness variations."
    coherence_rules:
      - id: E_young_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[E_young]] esté en el rango correcto para el material: metales entre 50 y 400 GPa, polímeros entre 1 y 10 GPa, cerámicas entre 100 y 500 GPa."
          en: "Verify that [[E_young]] is in the correct range for the material: metals between 50 and 400 GPa, polymers between 1 and 10 GPa, ceramics between 100 and 500 GPa."
    model_validity_rules:
      - id: E_young_validity_default
        when: "true"
        status: ok
        text:
          es: "La fórmula con [[E_young]] solo es exacta para barras delgadas. En sólidos extensos se usa el módulo de onda plana, que incorpora el coeficiente de Poisson y da velocidades mayores."
          en: "The formula with [[E_young]] is only exact for thin bars. In extended solids the plane wave modulus is used, incorporating Poisson's ratio and giving higher velocities."
    graph_rules:
      - id: E_young_graph_default
        when: "true"
        status: ok
        text:
          es: "[[E_young]] actúa como parámetro que desplaza la curva de velocidad verticalmente. Materiales con mayor módulo producen curvas más altas."
          en: "[[E_young]] acts as a parameter that shifts the velocity curve vertically. Materials with higher modulus produce higher curves."
    likely_errors:
      - id: E_young_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar [[E_young]] en GPa sin convertir a Pa. Verificar que se usa el valor en pascales (multiplicar GPa por 10⁹) antes de sustituir en la fórmula."
          en: "Common error: using [[E_young]] in GPa without converting to Pa. Verify the value is in pascals (multiply GPa by 10⁹) before substituting in the formula."
    next_step_rules:
      - id: E_young_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[E_young]] y [[rho]] conocidos, calcular [[v_fase]] longitudinal. Para ondas transversales, obtener [[G_mod]] del material (o estimarlo como E/(2(1+ν)) si se conoce el coeficiente de Poisson)."
          en: "With [[E_young]] and [[rho]] known, calculate longitudinal [[v_fase]]. For transverse waves, obtain [[G_mod]] of the material (or estimate it as E/(2(1+ν)) if Poisson's ratio is known)."

  G_mod:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Rigidez a cortante que controla la velocidad de ondas transversales"
      en: "Shear stiffness controlling transverse wave speed"
    summary_rules:
      - id: G_mod_summary_default
        when: "true"
        status: ok
        text:
          es: "El módulo de cizalladura [[G_mod]] determina la velocidad de las ondas transversales. Los fluidos tienen [[G_mod]] nulo, por lo que no pueden transmitir este tipo de onda."
          en: "Shear modulus [[G_mod]] determines transverse wave velocity. Fluids have zero [[G_mod]], so they cannot transmit this type of wave."
    physical_reading_rules:
      - id: G_mod_reading_default
        when: "true"
        status: ok
        text:
          es: "[[G_mod]] es siempre menor que [[E_young]] en sólidos isótropos (típicamente entre un tercio y la mitad). Esto garantiza que las ondas transversales sean siempre más lentas que las longitudinales."
          en: "[[G_mod]] is always less than [[E_young]] in isotropic solids (typically between one third and one half). This guarantees that transverse waves are always slower than longitudinal ones."
    coherence_rules:
      - id: G_mod_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[G_mod]] sea menor que [[E_young]] para el mismo material. La relación típica es [[G_mod]] ≈ [[E_young]] / (2 a 3) para materiales isótropos."
          en: "Verify that [[G_mod]] is less than [[E_young]] for the same material. Typical ratio is [[G_mod]] ≈ [[E_young]] / (2 to 3) for isotropic materials."
    model_validity_rules:
      - id: G_mod_validity_default
        when: "true"
        status: ok
        text:
          es: "Si [[G_mod]] es cero (fluido), no existen ondas transversales en ese medio. Solo se propagan ondas longitudinales."
          en: "If [[G_mod]] is zero (fluid), transverse waves do not exist in that medium. Only longitudinal waves propagate."
    graph_rules:
      - id: G_mod_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica comparativa, [[G_mod]] controla la curva de velocidad transversal, siempre por debajo de la longitudinal."
          en: "In the comparative graph, [[G_mod]] controls the transverse velocity curve, always below the longitudinal one."
    likely_errors:
      - id: G_mod_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir [[G_mod]] con [[E_young]]. Si la velocidad transversal resulta igual o mayor que la longitudinal, se ha usado el módulo incorrecto."
          en: "Common error: confusing [[G_mod]] with [[E_young]]. If transverse velocity is equal to or greater than longitudinal, the wrong modulus was used."
    next_step_rules:
      - id: G_mod_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[G_mod]] y [[rho]] calcular la velocidad transversal. Comparar con la longitudinal para verificar coherencia: la transversal debe ser menor."
          en: "With [[G_mod]] and [[rho]] calculate transverse velocity. Compare with longitudinal to verify coherence: transverse must be lower."

  rho:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Inercia del medio que se opone al movimiento vibratorio"
      en: "Medium inertia opposing vibratory motion"
    summary_rules:
      - id: rho_summary_default
        when: "true"
        status: ok
        text:
          es: "La densidad [[rho]] representa la inercia del sólido. Aparece en el denominador de la fórmula de velocidad: mayor densidad implica menor [[v_fase]] a igualdad de rigidez."
          en: "Density [[rho]] represents solid inertia. It appears in the denominator of the velocity formula: higher density means lower [[v_fase]] at equal stiffness."
    physical_reading_rules:
      - id: rho_reading_default
        when: "true"
        status: ok
        text:
          es: "[[rho]] está dentro de la raíz cuadrada en el denominador: duplicar la densidad reduce la velocidad en un factor √2. Materiales pesados como el plomo son lentos a pesar de no ser especialmente blandos."
          en: "[[rho]] is inside the square root in the denominator: doubling density reduces velocity by a factor of √2. Heavy materials like lead are slow despite not being especially soft."
    coherence_rules:
      - id: rho_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[rho]] esté en el rango correcto: metales 2700 a 22500 kg/m³, polímeros 900 a 1500 kg/m³, cerámicas 2000 a 6000 kg/m³."
          en: "Verify that [[rho]] is in the correct range: metals 2700 to 22500 kg/m³, polymers 900 to 1500 kg/m³, ceramics 2000 to 6000 kg/m³."
    model_validity_rules:
      - id: rho_validity_default
        when: "true"
        status: ok
        text:
          es: "Se asume [[rho]] constante y uniforme. En materiales con gradientes de densidad (materiales graduados), la velocidad varía con la posición."
          en: "Constant and uniform [[rho]] is assumed. In materials with density gradients (graded materials), velocity varies with position."
    graph_rules:
      - id: rho_graph_default
        when: "true"
        status: ok
        text:
          es: "[[rho]] afecta la posición vertical de todos los materiales en el gráfico: materiales más densos se desplazan hacia abajo (menor velocidad)."
          en: "[[rho]] affects the vertical position of all materials in the graph: denser materials shift downward (lower velocity)."
    likely_errors:
      - id: rho_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: usar [[rho]] en g/cm³ sin convertir a kg/m³ (multiplicar por 1000). Un factor 1000 en la densidad produce un factor √1000 ≈ 31.6 en la velocidad."
          en: "Common error: using [[rho]] in g/cm³ without converting to kg/m³ (multiply by 1000). A factor of 1000 in density produces a factor of √1000 ≈ 31.6 in velocity."
    next_step_rules:
      - id: rho_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[rho]] y el módulo elástico apropiado, calcular [[v_fase]]. Para obtener la impedancia mecánica del medio, multiplicar [[rho]] por [[v_fase]] por el área de la sección."
          en: "With [[rho]] and the appropriate elastic modulus, calculate [[v_fase]]. To obtain mechanical impedance of the medium, multiply [[rho]] times [[v_fase]] times cross-sectional area."

  f:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Frecuencia de oscilación fijada por la fuente"
      en: "Oscillation frequency set by the source"
    summary_rules:
      - id: f_summary_default
        when: "true"
        status: ok
        text:
          es: "La frecuencia [[f]] es un parámetro fijado por la fuente de excitación. Se conserva al pasar de un medio a otro y determina la longitud de onda [[lambda]] en cada material."
          en: "Frequency [[f]] is a parameter set by the excitation source. It is conserved when passing between media and determines wavelength [[lambda]] in each material."
    physical_reading_rules:
      - id: f_reading_default
        when: "true"
        status: ok
        text:
          es: "[[f]] no depende del medio: la fuente vibra a una frecuencia fija independientemente del material. Al cambiar de medio, [[lambda]] se ajusta pero [[f]] permanece constante."
          en: "[[f]] does not depend on the medium: the source vibrates at a fixed frequency regardless of material. When changing medium, [[lambda]] adjusts but [[f]] remains constant."
    coherence_rules:
      - id: f_coherence_default
        when: "true"
        status: ok
        text:
          es: "Si el problema involucra una interfaz, verificar que [[f]] sea la misma a ambos lados. Solo cambia [[lambda]]."
          en: "If the problem involves an interface, verify that [[f]] is the same on both sides. Only [[lambda]] changes."
    model_validity_rules:
      - id: f_validity_default
        when: "true"
        status: ok
        text:
          es: "A frecuencias altas (longitud de onda comparable a dimensiones de la pieza), el modelo de onda plana falla. Verificar que [[lambda]] sea al menos 5 veces mayor que la dimensión transversal."
          en: "At high frequencies (wavelength comparable to part dimensions), the plane wave model fails. Verify that [[lambda]] is at least 5 times greater than the transverse dimension."
    graph_rules:
      - id: f_graph_default
        when: "true"
        status: ok
        text:
          es: "[[f]] suele ser el eje horizontal en gráficas de dispersión. En medios no dispersivos, [[v_fase]] es constante y [[lambda]] decrece hiperbólicamente con [[f]]."
          en: "[[f]] is usually the horizontal axis in dispersion graphs. In non-dispersive media, [[v_fase]] is constant and [[lambda]] decreases hyperbolically with [[f]]."
    likely_errors:
      - id: f_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: creer que [[f]] cambia al pasar la onda a otro medio. La frecuencia se conserva siempre; solo la longitud de onda se adapta."
          en: "Common error: believing [[f]] changes when the wave passes to another medium. Frequency is always conserved; only wavelength adapts."
    next_step_rules:
      - id: f_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[f]] y [[v_fase]] conocidas, calcular [[lambda]] dividiendo la velocidad entre la frecuencia. Verificar que la longitud de onda resultante sea coherente con el modelo de onda plana."
          en: "With [[f]] and [[v_fase]] known, calculate [[lambda]] by dividing velocity by frequency. Verify that the resulting wavelength is consistent with the plane wave model."

  lambda:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Escala espacial de la perturbación ondulatoria"
      en: "Spatial scale of the wave disturbance"
    summary_rules:
      - id: lambda_summary_default
        when: "true"
        status: ok
        text:
          es: "La longitud de onda [[lambda]] indica la escala espacial de la perturbación. Depende del medio (a través de [[v_fase]]) y de la frecuencia [[f]]."
          en: "Wavelength [[lambda]] indicates the spatial scale of the disturbance. It depends on the medium (through [[v_fase]]) and frequency [[f]]."
    physical_reading_rules:
      - id: lambda_reading_default
        when: "true"
        status: ok
        text:
          es: "[[lambda]] determina la resolución espacial: solo se pueden detectar detalles del orden de la longitud de onda o mayores. Para detectar defectos pequeños se necesitan frecuencias altas (longitudes de onda cortas)."
          en: "[[lambda]] determines spatial resolution: only details on the order of the wavelength or larger can be detected. To detect small defects, high frequencies (short wavelengths) are needed."
    coherence_rules:
      - id: lambda_coherence_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[lambda]] sea mayor que 5 veces la dimensión transversal de la pieza para que el modelo de onda plana sea válido. Si no, hay que considerar modos guiados."
          en: "Verify that [[lambda]] is greater than 5 times the transverse dimension of the part for the plane wave model to be valid. If not, guided modes must be considered."
    model_validity_rules:
      - id: lambda_validity_default
        when: "true"
        status: ok
        text:
          es: "Si [[lambda]] es comparable a las dimensiones transversales, el modelo de barra delgada o medio infinito ya no es aplicable. Hay que usar modelos de guía de ondas."
          en: "If [[lambda]] is comparable to transverse dimensions, the thin bar or infinite medium model is no longer applicable. Waveguide models must be used."
    graph_rules:
      - id: lambda_graph_default
        when: "true"
        status: ok
        text:
          es: "En la gráfica, [[lambda]] decrece hiperbólicamente con la frecuencia si la velocidad es constante. Cada material tiene su propia curva según su [[v_fase]]."
          en: "In the graph, [[lambda]] decreases hyperbolically with frequency if velocity is constant. Each material has its own curve according to its [[v_fase]]."
    likely_errors:
      - id: lambda_error_default
        when: "true"
        status: warning
        text:
          es: "Error frecuente: confundir [[lambda]] con la amplitud de la onda. La longitud de onda es una distancia horizontal (dirección de propagación), no vertical (amplitud)."
          en: "Common error: confusing [[lambda]] with wave amplitude. Wavelength is a horizontal distance (propagation direction), not vertical (amplitude)."
    next_step_rules:
      - id: lambda_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[lambda]] calculada, comparar con las dimensiones de la pieza para verificar validez del modelo. Si se necesita resolver defectos menores que [[lambda]], aumentar la frecuencia."
          en: "With [[lambda]] calculated, compare with part dimensions to verify model validity. If defects smaller than [[lambda]] need to be resolved, increase frequency."

cross_checks:
  - check: "v_fase == f * lambda"
    tolerance: 0.01
    message:
      es: "La relación v = f · λ debe cumplirse siempre."
      en: "The relation v = f · λ must always hold."
  - check: "v_longitudinal > v_transversal"
    tolerance: 0.0
    message:
      es: "La velocidad longitudinal debe ser mayor que la transversal en cualquier sólido isótropo."
      en: "Longitudinal velocity must be greater than transverse in any isotropic solid."

error_patterns:
  - pattern: "olvidar_raiz_cuadrada"
    detect_when: "v_fase > 1e6"
    message:
      es: "El valor de velocidad es absurdamente alto. Probablemente se olvidó la raíz cuadrada en el cálculo."
      en: "Velocity value is absurdly high. Probably the square root was forgotten in the calculation."
  - pattern: "modulo_incorrecto"
    detect_when: "v_transversal > v_longitudinal"
    message:
      es: "La velocidad transversal no puede superar la longitudinal. Se ha usado el módulo elástico incorrecto."
      en: "Transverse velocity cannot exceed longitudinal. The wrong elastic modulus was used."
  - pattern: "unidades_inconsistentes"
    detect_when: "v_fase < 1 or v_fase > 50000"
    message:
      es: "La velocidad está fuera de todo rango físico para sólidos. Revisar las unidades de los datos de entrada."
      en: "Velocity is outside any physical range for solids. Check the units of input data."
`;export{e as default};
