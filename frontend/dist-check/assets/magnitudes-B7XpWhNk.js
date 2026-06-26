const e=`- id: f_mn
  symbol: "f_{mn}"
  nombre:
    es: Frecuencia del modo (m,n)
    en: Mode (m,n) frequency
  descripcion:
    es: "Frecuencia natural de vibración del modo (m,n) en una placa o membrana rectangular con condiciones de contorno fijas."
    en: "Natural vibration frequency of mode (m,n) in a rectangular plate or membrane with fixed boundary conditions."
  unidad_si: Hz
  dimension: "[T⁻¹]"
  is_vector: false
  components: []
  category: derived
  physical_role: core_physical_quantity
  used_in:
  - teoria
  - ejemplos
  - interpretacion
  - graficos
  common_mistake: "Confundir el índice de modo (m,n) con la frecuencia en Hz; el modo (1,1) es el fundamental pero no necesariamente el único relevante."
  typical_range: "10 Hz a 20 kHz según tamaño y material"
  sign_behavior:
    has_sign: false
    meaning:
      es: "La frecuencia modal es siempre positiva; no hay frecuencias negativas en el espectro vibratorio."
      en: "Modal frequency is always positive; there are no negative frequencies in the vibratory spectrum."
  zero_behavior:
    allowed: false
    meaning:
      es: "Frecuencia cero implicaría modo de cuerpo rígido, no una vibración resonante."
      en: "Zero frequency would imply a rigid body mode, not a resonant vibration."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for:
    - "identificacion del espectro modal"
    - "riesgo de resonancia con fuentes externas"
    secondary_for:
    - "calculo de longitud de onda modal"
  graph_binding:
    channels:
    - "freq_axis"
    - "modal_spectrum"
  pedagogical_notes:
    es: "La frecuencia modal crece con los índices m y n porque cada modo añade nodos adicionales que acortan la longitud de onda efectiva. Un alumno que solo calcula f_{11} pierde la densidad modal real del sistema."
    en: "Modal frequency grows with indices m and n because each mode adds extra nodes that shorten the effective wavelength. A student who only computes f_{11} misses the real modal density of the system."

- id: D_placa
  symbol: "D"
  nombre:
    es: Rigidez a la flexión de la placa
    en: Plate bending stiffness
  descripcion:
    es: "Parámetro que combina el módulo de Young [[E_young]], el espesor [[h_placa]] y el coeficiente de Poisson [[nu_p]] para resistir la curvatura en flexión."
    en: "Parameter combining Young's modulus [[E_young]], plate thickness [[h_placa]] and Poisson's ratio [[nu_p]] to resist bending curvature."
  unidad_si: "N·m"
  dimension: "[M T⁻²]"
  is_vector: false
  components: []
  category: derived
  physical_role: parameter
  used_in:
  - teoria
  - formulas
  - interpretacion
  common_mistake: "Olvidar el factor (1 - nu²) en el denominador, lo que sobreestima la rigidez en un 10–30 % para materiales con coeficiente de Poisson significativo."
  typical_range: "1 N·m (vidrio 1 mm) a 10 000 N·m (acero 10 mm)"
  sign_behavior:
    has_sign: false
    meaning:
      es: "La rigidez es siempre positiva para cualquier material sólido elástico."
      en: "Stiffness is always positive for any elastic solid material."
  zero_behavior:
    allowed: false
    meaning:
      es: "Rigidez nula corresponde a una membrana ideal sin flexión, modelo diferente al de placa."
      en: "Zero stiffness corresponds to an ideal membrane with no bending, a different model from the plate."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for:
    - "calculo de frecuencias modales de placa"
    secondary_for:
    - "comparacion entre regimenes placa y membrana"
  graph_binding:
    channels:
    - "stiffness_param"
  pedagogical_notes:
    es: "La rigidez a la flexión crece con el cubo del espesor: duplicar el espesor multiplica D por ocho, y esto cuadriplica las frecuencias modales. Este efecto no lineal sorprende a los alumnos acostumbrados a relaciones proporcionales."
    en: "Bending stiffness grows with the cube of thickness: doubling the thickness multiplies D by eight, which quadruples modal frequencies. This nonlinear effect surprises students accustomed to proportional relations."

- id: E_young
  symbol: "E"
  nombre:
    es: Módulo de Young
    en: Young's modulus
  descripcion:
    es: "Medida de la rigidez elástica del material ante deformación uniaxial; determina la resistencia a la elongación o compresión."
    en: "Measure of elastic stiffness of the material under uniaxial deformation; determines resistance to elongation or compression."
  unidad_si: Pa
  dimension: "[M L⁻¹ T⁻²]"
  is_vector: false
  components: []
  category: parameter
  physical_role: parameter
  used_in:
  - teoria
  - formulas
  - interpretacion
  common_mistake: "Usar el valor en GPa directamente sin convertir a Pa, lo que produce velocidades y frecuencias con errores de 10⁹."
  typical_range: "0.001 GPa (goma) a 400 GPa (diamante)"
  sign_behavior:
    has_sign: false
    meaning:
      es: "El módulo de Young es siempre positivo para materiales sólidos estables."
      en: "Young's modulus is always positive for stable solid materials."
  zero_behavior:
    allowed: false
    meaning:
      es: "Un módulo nulo implicaría un fluido o gas, no un sólido capaz de transmitir ondas de flexión."
      en: "Zero modulus would imply a fluid or gas, not a solid capable of transmitting bending waves."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for:
    - "calculo de rigidez a la flexion"
    secondary_for:
    - "comparacion entre materiales"
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "El módulo de Young entra en la rigidez de placa elevado a la primera potencia, mientras que el espesor entra al cubo. En diseño acústico, es más eficiente variar el espesor que cambiar de material."
    en: "Young's modulus enters plate stiffness to the first power, while thickness enters to the cube. In acoustic design, varying thickness is more efficient than changing material."

- id: h_placa
  symbol: "h"
  nombre:
    es: Espesor de la placa
    en: Plate thickness
  descripcion:
    es: "Dimensión perpendicular al plano de la placa; controla la rigidez a la flexión y la masa por unidad de área."
    en: "Dimension perpendicular to the plate plane; controls bending stiffness and mass per unit area."
  unidad_si: m
  dimension: "[L]"
  is_vector: false
  components: []
  category: parameter
  physical_role: parameter
  used_in:
  - teoria
  - formulas
  - interpretacion
  common_mistake: "Confundir h con la amplitud de la vibración; son dimensiones completamente distintas."
  typical_range: "0.5 mm (vidrio de ventana) a 50 mm (losa de concreto)"
  sign_behavior:
    has_sign: false
    meaning:
      es: "El espesor es siempre positivo como dimensión geométrica."
      en: "Thickness is always positive as a geometric dimension."
  zero_behavior:
    allowed: false
    meaning:
      es: "Espesor nulo no tiene sentido físico para una placa sólida."
      en: "Zero thickness has no physical meaning for a solid plate."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for:
    - "calculo de rigidez a la flexion"
    - "masa superficial de la placa"
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "El papel del espesor es triple: incrementa la rigidez como h³, aumenta la masa superficial como h, y el cociente D/(rho·h) que determina la frecuencia escala como h². Por tanto duplicar el espesor multiplica las frecuencias modales por cuatro."
    en: "Thickness plays a triple role: it increases stiffness as h³, raises surface mass density as h, and the ratio D/(rho·h) that governs frequency scales as h². Doubling thickness therefore quadruples modal frequencies."

- id: nu_p
  symbol: "ν"
  nombre:
    es: Coeficiente de Poisson
    en: Poisson's ratio
  descripcion:
    es: "Relación entre la deformación transversal y la axial en tracción uniaxial; reduce la rigidez efectiva a la flexión mediante el factor (1 - nu²)."
    en: "Ratio of transverse to axial strain under uniaxial tension; reduces effective bending stiffness through the factor (1 - nu²)."
  unidad_si: adimensional
  dimension: "[1]"
  is_vector: false
  components: []
  category: parameter
  physical_role: parameter
  used_in:
  - teoria
  - formulas
  common_mistake: "Olvidar el término (1 - nu²) en el denominador del cálculo de rigidez de placa, sobreestimando las frecuencias modales."
  typical_range: "0 a 0.5 para la mayoría de materiales isótropos; acero 0.3, goma 0.49"
  sign_behavior:
    has_sign: false
    meaning:
      es: "El coeficiente de Poisson es positivo para casi todos los materiales convencionales; materiales auxéticos presentan valores negativos, pero son casos especiales."
      en: "Poisson's ratio is positive for nearly all conventional materials; auxetic materials show negative values, but these are special cases."
  zero_behavior:
    allowed: true
    meaning:
      es: "Valor cero significa ausencia de acoplamiento lateral, lo que simplifica el modelo pero es una idealización."
      en: "Zero value means no lateral coupling, which simplifies the model but is an idealization."
  value_nature:
    kind: ratio
    nonnegative_only: false
    expected_interval: "(-1, 0.5)"
  interpretation_role:
    primary_for:
    - "correccion de rigidez en placa"
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "Para el acero (nu ≈ 0.3) el factor (1 - nu²) ≈ 0.91, una corrección del 9 %. Ignorarlo introduce un error del 5 % en frecuencias modales. Para el corcho (nu ≈ 0) el factor es exactamente 1."
    en: "For steel (nu ≈ 0.3) the factor (1 - nu²) ≈ 0.91, a 9% correction. Ignoring it introduces a 5% error in modal frequencies. For cork (nu ≈ 0) the factor is exactly 1."

- id: rho_s
  symbol: "ρ_s"
  nombre:
    es: Densidad superficial de la placa
    en: Surface mass density of the plate
  descripcion:
    es: "Masa por unidad de área de la placa, igual al producto de la densidad volumétrica [[rho_vol]] por el espesor [[h_placa]]."
    en: "Mass per unit area of the plate, equal to the product of volumetric density [[rho_vol]] by thickness [[h_placa]]."
  unidad_si: "kg/m²"
  dimension: "[M L⁻²]"
  is_vector: false
  components: []
  category: derived
  physical_role: parameter
  used_in:
  - teoria
  - formulas
  - interpretacion
  common_mistake: "Usar la densidad volumétrica directamente donde corresponde la densidad superficial, obteniendo unidades incorrectas."
  typical_range: "2 kg/m² (vidrio 1 mm) a 400 kg/m² (acero 50 mm)"
  sign_behavior:
    has_sign: false
    meaning:
      es: "La densidad superficial es siempre positiva."
      en: "Surface mass density is always positive."
  zero_behavior:
    allowed: false
    meaning:
      es: "Densidad nula no tiene sentido físico para una placa material."
      en: "Zero density has no physical meaning for a material plate."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for:
    - "calculo de inercia modal de la placa"
    secondary_for:
    - "comparacion de espectros modales entre materiales"
  graph_binding:
    channels:
    - "mass_param"
  pedagogical_notes:
    es: "Aumentar la densidad superficial sin cambiar la rigidez disminuye todas las frecuencias modales. Esta es la base del tratamiento de amortiguamiento mediante masas añadidas en ingeniería acústica."
    en: "Increasing surface mass density without changing stiffness lowers all modal frequencies. This is the basis of vibration damping treatment via added masses in acoustic engineering."

- id: rho_vol
  symbol: "ρ"
  nombre:
    es: Densidad volumétrica del material
    en: Volumetric mass density
  descripcion:
    es: "Masa por unidad de volumen del material que forma la placa o la membrana."
    en: "Mass per unit volume of the material forming the plate or membrane."
  unidad_si: "kg/m³"
  dimension: "[M L⁻³]"
  is_vector: false
  components: []
  category: parameter
  physical_role: parameter
  used_in:
  - teoria
  - formulas
  common_mistake: "Usar la densidad superficial cuando la fórmula pide densidad volumétrica, o viceversa."
  typical_range: "1000 kg/m³ (agua) a 19 300 kg/m³ (tungsteno)"
  sign_behavior:
    has_sign: false
    meaning:
      es: "La densidad volumétrica es siempre positiva."
      en: "Volumetric density is always positive."
  zero_behavior:
    allowed: false
    meaning:
      es: "Densidad cero es físicamente imposible para un sólido real."
      en: "Zero density is physically impossible for a real solid."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for:
    - "calculo de densidad superficial"
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "La densidad volumétrica aparece en la placa multiplicada por el espesor, formando la densidad superficial. Es un parámetro de material, no de geometría."
    en: "Volumetric density appears in the plate multiplied by thickness, forming surface mass density. It is a material parameter, not a geometric one."

- id: a_dim
  symbol: "a"
  nombre:
    es: Longitud de la placa o membrana (dirección x)
    en: Plate or membrane length (x direction)
  descripcion:
    es: "Dimensión de la placa o membrana en la dirección x; determina los nodos en la dirección correspondiente junto con el índice de modo m."
    en: "Plate or membrane dimension in the x direction; determines nodes in the corresponding direction together with mode index m."
  unidad_si: m
  dimension: "[L]"
  is_vector: false
  components: []
  category: parameter
  physical_role: parameter
  used_in:
  - teoria
  - formulas
  - interpretacion
  - ejemplos
  common_mistake: "Intercambiar a y b cuando la placa no es cuadrada, cambiando los índices de modo."
  typical_range: "0.01 m a 10 m"
  sign_behavior:
    has_sign: false
    meaning:
      es: "La longitud es siempre positiva."
      en: "Length is always positive."
  zero_behavior:
    allowed: false
    meaning:
      es: "Longitud nula no tiene sentido geométrico."
      en: "Zero length has no geometric meaning."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for:
    - "calculo de frecuencia modal"
    secondary_for:
    - "identificacion de patrones nodales"
  graph_binding:
    channels:
    - "dim_x_axis"
  pedagogical_notes:
    es: "Para una placa cuadrada los modos (m,n) y (n,m) tienen la misma frecuencia (degeneración modal), lo que produce patrones nodales combinados llamados modos degenerados."
    en: "For a square plate the modes (m,n) and (n,m) share the same frequency (modal degeneracy), producing combined nodal patterns called degenerate modes."

- id: b_dim
  symbol: "b"
  nombre:
    es: Anchura de la placa o membrana (dirección y)
    en: Plate or membrane width (y direction)
  descripcion:
    es: "Dimensión de la placa o membrana en la dirección y; junto con el índice n controla los nodos en esa dirección."
    en: "Plate or membrane dimension in the y direction; together with index n it controls nodes in that direction."
  unidad_si: m
  dimension: "[L]"
  is_vector: false
  components: []
  category: parameter
  physical_role: parameter
  used_in:
  - teoria
  - formulas
  - interpretacion
  - ejemplos
  common_mistake: "Asumir que a y b son iguales cuando la placa es rectangular, cometiendo errores en la frecuencia modal del eje secundario."
  typical_range: "0.01 m a 10 m"
  sign_behavior:
    has_sign: false
    meaning:
      es: "La anchura es siempre positiva."
      en: "Width is always positive."
  zero_behavior:
    allowed: false
    meaning:
      es: "Anchura nula no tiene sentido geométrico."
      en: "Zero width has no geometric meaning."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for:
    - "calculo de frecuencia modal"
    secondary_for:
    - "identificacion de patrones nodales"
  graph_binding:
    channels:
    - "dim_y_axis"
  pedagogical_notes:
    es: "Si b es mucho mayor que a, los modos con n > 1 tienen frecuencias muy altas y el comportamiento del sistema se aproxima al de una barra estrecha."
    en: "If b is much larger than a, modes with n > 1 have very high frequencies and the system behaves similarly to a narrow bar."

- id: T_mem
  symbol: "T"
  nombre:
    es: Tensión superficial de la membrana
    en: Membrane surface tension
  descripcion:
    es: "Fuerza por unidad de longitud que actúa en el plano de la membrana y proporciona la fuerza de restitución responsable de sus modos vibratorios."
    en: "Force per unit length acting in the plane of the membrane, providing the restoring force responsible for its vibratory modes."
  unidad_si: "N/m"
  dimension: "[M T⁻²]"
  is_vector: false
  components: []
  category: parameter
  physical_role: core_physical_quantity
  used_in:
  - teoria
  - formulas
  - interpretacion
  - ejemplos
  common_mistake: "Confundir la tensión superficial de la membrana (N/m) con la tensión normal interna de una placa (Pa). Son dimensiones distintas y no intercambiables."
  typical_range: "10 N/m (parche de batería) a 10 000 N/m (membrana industrial tensada)"
  sign_behavior:
    has_sign: false
    meaning:
      es: "La tensión de membrana es siempre positiva; una membrana sin tensión no vibra."
      en: "Membrane tension is always positive; a membrane without tension does not vibrate."
  zero_behavior:
    allowed: false
    meaning:
      es: "Tensión nula implica frecuencias nulas, lo que corresponde a un sólido flácido, no a una membrana vibrante."
      en: "Zero tension implies zero frequencies, corresponding to a limp solid, not a vibrating membrane."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for:
    - "calculo de frecuencia modal de membrana"
    - "afinado de la membrana"
    secondary_for:
    - "comparacion placa-membrana"
  graph_binding:
    channels:
    - "tension_param"
  pedagogical_notes:
    es: "La tensión superficial de la membrana es el parámetro de control del afinado en percusión: tensarla más sube las frecuencias de todos los modos. Esto lo diferencia de la placa, donde el único control es el material y el espesor."
    en: "Membrane surface tension is the tuning control parameter in percussion: increasing it raises all modal frequencies. This distinguishes it from the plate, where the only controls are material and thickness."

- id: rho_mem
  symbol: "σ_m"
  nombre:
    es: Densidad superficial de la membrana
    en: Membrane surface mass density
  descripcion:
    es: "Masa por unidad de área de la membrana estirada; junto con la tensión [[T_mem]] determina la velocidad de propagación de ondas transversales en la membrana."
    en: "Mass per unit area of the stretched membrane; together with tension [[T_mem]] determines the transverse wave speed in the membrane."
  unidad_si: "kg/m²"
  dimension: "[M L⁻²]"
  is_vector: false
  components: []
  category: parameter
  physical_role: parameter
  used_in:
  - teoria
  - formulas
  - interpretacion
  - ejemplos
  common_mistake: "Usar la densidad volumétrica del material de la membrana sin multiplicar por su espesor, lo que produce densidad superficial incorrecta."
  typical_range: "0.1 kg/m² (mylar 80 µm) a 2 kg/m² (parche de batería)"
  sign_behavior:
    has_sign: false
    meaning:
      es: "La densidad superficial de la membrana es siempre positiva."
      en: "Membrane surface mass density is always positive."
  zero_behavior:
    allowed: false
    meaning:
      es: "Densidad nula haría las frecuencias infinitas, lo que es físicamente imposible."
      en: "Zero density would make frequencies infinite, which is physically impossible."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "(0, +inf)"
  interpretation_role:
    primary_for:
    - "calculo de frecuencia modal de membrana"
    secondary_for: []
  graph_binding:
    channels: []
  pedagogical_notes:
    es: "La relación entre tensión y densidad superficial determina la velocidad de fase en la membrana, análoga a la relación T/mu en una cuerda unidimensional pero extendida a dos dimensiones."
    en: "The ratio of tension to surface mass density determines phase velocity in the membrane, analogous to T/mu in a one-dimensional string but extended to two dimensions."

- id: m
  symbol: "m"
  nombre:
    es: Índice modal en la dirección x
    en: Mode index in x direction
  descripcion:
    es: "Índice entero positivo que cuenta semiperíodos espaciales en la dirección x para el modo (m,n)."
    en: "Positive integer index counting spatial half-periods in the x direction for the mode (m,n)."
  unidad_si: adimensional
  dimension: "[1]"
  is_vector: false
  components: []
  category: auxiliary
  physical_role: index
  used_in:
  - teoria
  - ejemplos
  - interpretacion
  common_mistake: "Tratar m como una unidad física en lugar de un índice entero que describe la forma modal."
  typical_range: "1 a 10 para modos habituales en placas prácticas"
  sign_behavior:
    has_sign: false
    meaning:
      es: "El índice modal es adimensional y no puede ser negativo; comienza en 1."
      en: "The mode index is dimensionless and cannot be negative; it starts at 1."
  zero_behavior:
    allowed: false
    meaning:
      es: "Valor cero no corresponde a un modo vibratorio válido en esta clasificación."
      en: "Zero does not correspond to a valid vibratory mode in this classification."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[1, +inf)"
  interpretation_role:
    primary_for:
    - "describir la forma modal en la dirección x"
    secondary_for:
    - "comparar modos con distinto número de nodos"
  graph_binding:
    channels:
    - "mode_index_x"
  pedagogical_notes:
    es: "Los índices m y n indican el número de semiperíodos en cada dirección y no representan magnitudes físicas con unidades."
    en: "The indices m and n indicate the number of half-periods in each direction and do not represent physical magnitudes with units."

- id: n
  symbol: "n"
  nombre:
    es: Índice modal en la dirección y
    en: Mode index in y direction
  descripcion:
    es: "Índice entero positivo que cuenta semiperíodos espaciales en la dirección y para el modo (m,n)."
    en: "Positive integer index counting spatial half-periods in the y direction for the mode (m,n)."
  unidad_si: adimensional
  dimension: "[1]"
  is_vector: false
  components: []
  category: auxiliary
  physical_role: index
  used_in:
  - teoria
  - ejemplos
  - interpretacion
  common_mistake: "Confundir n con una unidad física o con la ordenada espacial."
  typical_range: "1 a 10 para modos habituales en placas prácticas"
  sign_behavior:
    has_sign: false
    meaning:
      es: "El índice modal es adimensional y no puede ser negativo; comienza en 1."
      en: "The mode index is dimensionless and cannot be negative; it starts at 1."
  zero_behavior:
    allowed: false
    meaning:
      es: "Valor cero no corresponde a un modo vibratorio válido en esta clasificación."
      en: "Zero does not correspond to a valid vibratory mode in this classification."
  value_nature:
    kind: scalar_unsigned
    nonnegative_only: true
    expected_interval: "[1, +inf)"
  interpretation_role:
    primary_for:
    - "describir la forma modal en la dirección y"
    secondary_for:
    - "comparar modos con distinto número de nodos"
  graph_binding:
    channels:
    - "mode_index_y"
  pedagogical_notes:
    es: "Los índices m y n son contadores de nodos y deben usarse para construir patrones modales, no como valores físicos aislados."
    en: "The indices m and n count nodes and should be used to build modal patterns, not as isolated physical values."

- id: x
  symbol: "x"
  nombre:
    es: Coordenada espacial x
    en: Spatial coordinate x
  descripcion:
    es: "Eje espacial en la dirección longitudinal de la placa; se usa para describir variación nodal y patrones modales."
    en: "Spatial axis in the longitudinal direction of the plate; used to describe nodal variation and modal patterns."
  unidad_si: m
  dimension: "[L]"
  is_vector: false
  components: []
  category: geometric
  physical_role: coordinate
  used_in:
  - teoria
  - ejemplos
  common_mistake: "Usar x como unidad en vez de como coordenada; las magnitudes deben llevar unidades si se cuantifican."
  typical_range: "0 a 10 m"
  sign_behavior:
    has_sign: true
    meaning:
      es: "La coordenada puede tomar valores positivos o negativos según el origen elegido."
      en: "The coordinate may take positive or negative values depending on the chosen origin."
  zero_behavior:
    allowed: true
    meaning:
      es: "El valor cero corresponde al origen elegido en la dirección x."
      en: "Zero corresponds to the chosen origin along x."
  value_nature:
    kind: scalar_signed
    nonnegative_only: false
    expected_interval: "(-inf, +inf)"
  interpretation_role:
    primary_for:
    - "describir posiciones y patrones nodales"
    secondary_for:
    - "visualizar la variación espacial"
  graph_binding:
    channels:
    - "space_x_axis"
  pedagogical_notes:
    es: "Las coordenadas x e y son variables de posición, no parámetros materiales; conviene recordar que su unidad es longitud y no un índice modal."
    en: "The coordinates x and y are position variables, not material parameters; remember that their unit is length, not a mode index."

- id: y
  symbol: "y"
  nombre:
    es: Coordenada espacial y
    en: Spatial coordinate y
  descripcion:
    es: "Eje espacial en la dirección transversal de la placa; complementa a la coordenada x en la descripción modal."
    en: "Spatial axis in the transverse direction of the plate; complements x in modal description."
  unidad_si: m
  dimension: "[L]"
  is_vector: false
  components: []
  category: geometric
  physical_role: coordinate
  used_in:
  - teoria
  - ejemplos
  common_mistake: "Confundir la coordenada y con el índice modal n."
  typical_range: "0 a 10 m"
  sign_behavior:
    has_sign: true
    meaning:
      es: "La coordenada puede tomar valores positivos o negativos según el origen elegido."
      en: "The coordinate may take positive or negative values depending on the chosen origin."
  zero_behavior:
    allowed: true
    meaning:
      es: "El valor cero corresponde al origen elegido en la dirección y."
      en: "Zero corresponds to the chosen origin along y."
  value_nature:
    kind: scalar_signed
    nonnegative_only: false
    expected_interval: "(-inf, +inf)"
  interpretation_role:
    primary_for:
    - "describir posiciones y patrones nodales"
    secondary_for:
    - "visualizar la variación espacial"
  graph_binding:
    channels:
    - "space_y_axis"
  pedagogical_notes:
    es: "La coordenada y complementa a x en la construcción de modos bidimensionales; juntas describen la forma de las líneas nodales."
    en: "The y coordinate complements x in constructing two-dimensional modes; together they describe the shape of nodal lines."
`;export{e as default};
