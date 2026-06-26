const e=`version: "1.0"
leaf_id: relacion-entre-modulos-elasticos

magnitudes:
  - id: E_young
    nombre:
      es: Modulo de Young
      en: Young modulus
    simbolo: E
    unidad: Pa
    dimension: "[M L⁻¹ T⁻²]"
    tipo: escalar
    physical_role: core_physical_quantity
    symbol: "E"
    unidad_si: "Pa"
    is_vector: false
    components: []
    category: material_parameter
    used_in:
      - relacion_G_E_nu
      - relacion_K_E_nu
      - relacion_E_G_K
      - relacion_lambda_E_nu
    common_mistake:
      es: "Tratar E como la unica constante elastica necesaria; en un solido isotropo se necesitan dos constantes independientes."
      en: "Treating E as the only elastic constant needed; in an isotropic solid two independent constants are required."
    typical_range: "0.01e9 a 1200e9 Pa; acero tipico 200e9 Pa"
    value_nature:
      kind: continuous
      nonnegative_only: true
      expected_interval: "[1e7, 1.2e12]"
    descripcion:
      es: "Rigidez del material frente a traccion o compresion uniaxial. Cociente entre tension normal y deformacion longitudinal en regimen elastico lineal."
      en: "Material stiffness against uniaxial tension or compression. Ratio of normal stress to longitudinal strain in the linear elastic regime."
    rango:
      min: 0.01e9
      max: 1200e9
      tipico: 200e9
      nota:
        es: "Desde elastomeros blandos (decenas de MPa) hasta diamante (aprox. 1200 GPa). Acero tipico 200 GPa."
        en: "From soft elastomers (tens of MPa) to diamond (approx. 1200 GPa). Typical steel 200 GPa."
    sign_behavior:
      es: "Siempre positivo en materiales estables."
      en: "Always positive in stable materials."
    zero_behavior:
      es: "Un E nulo implica que el material no resiste traccion alguna (fluido ideal)."
      en: "Zero E implies the material does not resist any tension (ideal fluid)."
    interpretation_role:
      es: "Entrada principal para calcular G y K mediante las relaciones de este leaf. Es la constante medida mas directamente en ensayos de traccion."
      en: "Main input for calculating G and K via the relationships in this leaf. It is the constant most directly measured in tensile tests."
    graph_binding:
      axis: "control"
      label: { es: "E (GPa)", en: "E (GPa)" }
    pedagogical_notes:
      es: "E es la constante elastica mas intuitiva, pero no es suficiente por si sola: se necesita al menos una segunda constante (como nu) para describir completamente un solido isotropo."
      en: "E is the most intuitive elastic constant, but it is not sufficient on its own: at least a second constant (like nu) is needed to fully describe an isotropic solid."

  - id: G_shear
    nombre:
      es: Modulo de cizalla
      en: Shear modulus
    simbolo: G
    unidad: Pa
    dimension: "[M L⁻¹ T⁻²]"
    tipo: escalar
    physical_role: core_physical_quantity
    symbol: "G"
    unidad_si: "Pa"
    is_vector: false
    components: []
    category: material_parameter
    used_in:
      - relacion_G_E_nu
      - relacion_G_K_nu
      - relacion_E_G_K
    common_mistake:
      es: "Confundir G con E; G mide respuesta a cizalla (cambio de forma), no a traccion (cambio de longitud)."
      en: "Confusing G with E; G measures shear response (shape change), not tensile response (length change)."
    typical_range: "0 a 550e9 Pa; acero tipico 80e9 Pa"
    value_nature:
      kind: continuous
      nonnegative_only: true
      expected_interval: "[0, 5.5e11]"
    descripcion:
      es: "Rigidez del material frente a deformacion de cizalla. Es el segundo parametro de Lame (mu). Se calcula a partir de E y nu, o se mide directamente con la velocidad de ondas transversales."
      en: "Material stiffness against shear deformation. It is the second Lame parameter (mu). Calculated from E and nu, or directly measured via transverse wave velocity."
    rango:
      min: 0
      max: 550e9
      tipico: 80e9
      nota:
        es: "Cero para fluidos ideales. Acero tipico 80 GPa, aluminio 26 GPa, caucho aprox. 0.3 MPa."
        en: "Zero for ideal fluids. Typical steel 80 GPa, aluminium 26 GPa, rubber approx. 0.3 MPa."
    sign_behavior:
      es: "Siempre positivo en materiales estables. Un valor nulo corresponde a un fluido."
      en: "Always positive in stable materials. A zero value corresponds to a fluid."
    zero_behavior:
      es: "G nulo implica que el material no resiste cizalla y fluye libremente."
      en: "Zero G implies the material does not resist shear and flows freely."
    interpretation_role:
      es: "Magnitud derivada central de este leaf. Su valor relativo a E esta determinado por nu."
      en: "Central derived magnitude of this leaf. Its value relative to E is determined by nu."
    graph_binding:
      axis: "y"
      label: { es: "G (GPa)", en: "G (GPa)" }
    pedagogical_notes:
      es: "G siempre es menor o igual que E/2 (igualdad cuando nu tiende a cero). En materiales comunes, G es aproximadamente un tercio de E."
      en: "G is always less than or equal to E/2 (equality when nu approaches zero). In common materials, G is approximately one third of E."

  - id: K_bulk
    nombre:
      es: Modulo de compresibilidad
      en: Bulk modulus
    simbolo: K
    unidad: Pa
    dimension: "[M L⁻¹ T⁻²]"
    tipo: escalar
    physical_role: core_physical_quantity
    symbol: "K"
    unidad_si: "Pa"
    is_vector: false
    components: []
    category: material_parameter
    used_in:
      - relacion_K_E_nu
      - relacion_G_K_nu
      - relacion_E_G_K
    common_mistake:
      es: "Interpretar K como rigidez de traccion; K describe solo la respuesta volumetrica bajo presion hidrostatica."
      en: "Interpreting K as tensile stiffness; K describes only volumetric response under hydrostatic pressure."
    typical_range: "0.1e9 a 440e9 Pa; agua 2.2e9 Pa, acero 160e9 Pa"
    value_nature:
      kind: continuous
      nonnegative_only: true
      expected_interval: "[1e8, 4.4e11]"
    descripcion:
      es: "Rigidez del material frente a compresion volumetrica uniforme. Relaciona la presion hidrostatica con el cambio relativo de volumen. Diverge cuando nu se acerca a 0.5 (material incompresible)."
      en: "Material stiffness against uniform volumetric compression. Relates hydrostatic pressure to relative volume change. Diverges as nu approaches 0.5 (incompressible material)."
    rango:
      min: 0.1e9
      max: 440e9
      tipico: 160e9
      nota:
        es: "Aire 0.14 MPa (a presion atmosferica), agua 2.2 GPa, acero 160 GPa, diamante 440 GPa."
        en: "Air 0.14 MPa (at atmospheric pressure), water 2.2 GPa, steel 160 GPa, diamond 440 GPa."
    sign_behavior:
      es: "Siempre positivo en materiales estables."
      en: "Always positive in stable materials."
    zero_behavior:
      es: "K nulo implicaria un material infinitamente compresible, fisicamente irrealizable."
      en: "Zero K would imply an infinitely compressible material, physically unrealisable."
    interpretation_role:
      es: "Permite evaluar la incompresibilidad relativa del material. Un K mucho mayor que G indica un material cercano a incompresible."
      en: "Allows evaluating relative incompressibility of the material. K much greater than G indicates a nearly incompressible material."
    graph_binding:
      axis: "y"
      label: { es: "K (GPa)", en: "K (GPa)" }
    pedagogical_notes:
      es: "K diverge cuando nu tiende a 0.5. Esto no es un artefacto matematico: los materiales casi incompresibles (como el caucho) tienen K efectivamente mucho mayor que G."
      en: "K diverges as nu approaches 0.5. This is not a mathematical artefact: nearly incompressible materials (like rubber) do have K effectively much greater than G."

  - id: nu_poisson
    nombre:
      es: Coeficiente de Poisson
      en: Poisson ratio
    simbolo: "\\\\nu"
    unidad: adimensional
    dimension: "[1]"
    tipo: escalar
    physical_role: core_physical_quantity
    symbol: "\\\\nu"
    unidad_si: "adimensional"
    is_vector: false
    components: []
    category: material_parameter
    used_in:
      - relacion_G_E_nu
      - relacion_K_E_nu
      - relacion_G_K_nu
      - relacion_lambda_E_nu
    common_mistake:
      es: "Tratar nu como un numero arbitrario sin limites; la estabilidad termodinamica impone -1 < nu <= 0.5 para solidos isotropos."
      en: "Treating nu as an arbitrary number without bounds; thermodynamic stability imposes -1 < nu <= 0.5 for isotropic solids."
    typical_range: "-1 a 0.5; materiales comunes 0.2 a 0.45"
    value_nature:
      kind: continuous
      nonnegative_only: false
      expected_interval: "(-1, 0.5]"
    descripcion:
      es: "Razon entre contraccion transversal y elongacion longitudinal (con signo). Es el parametro que gobierna las relaciones entre todos los modulos en un solido isotropo. Junto con cualquier modulo, determina completamente la respuesta elastica."
      en: "Ratio of transverse contraction to longitudinal elongation (with sign). It is the parameter governing the relationships between all moduli in an isotropic solid. Together with any modulus, it completely determines the elastic response."
    rango:
      min: -1
      max: 0.5
      tipico: 0.3
      nota:
        es: "Corcho aprox. 0, metales tipicos 0.25-0.35, caucho aprox. 0.50, materiales auxeticos < 0."
        en: "Cork approx. 0, typical metals 0.25-0.35, rubber approx. 0.50, auxetic materials < 0."
    sign_behavior:
      es: "Positivo en la mayoria de materiales. Negativo en materiales auxeticos (se expanden lateralmente al estirarse)."
      en: "Positive in most materials. Negative in auxetic materials (they expand laterally when stretched)."
    zero_behavior:
      es: "Nu nulo indica independencia total entre deformaciones longitudinales y transversales. Ejemplo: corcho."
      en: "Zero nu indicates total independence between longitudinal and transverse deformations. Example: cork."
    interpretation_role:
      es: "Es el parametro clave de este leaf: con nu y un modulo cualquiera, se calculan todos los demas. Controla la particion entre respuesta de cizalla y respuesta volumetrica."
      en: "It is the key parameter of this leaf: with nu and any modulus, all others are calculated. Controls the partition between shear and volumetric response."
    graph_binding:
      axis: "x"
      label: { es: "nu", en: "nu" }
    pedagogical_notes:
      es: "Nu es el parametro de control natural de las graficas de este leaf. Al barrer nu de -1 a 0.5, se observa la divergencia de K, la anulacion de G en el limite fluido, y los cruces entre modulos."
      en: "Nu is the natural control parameter of the graphs in this leaf. Sweeping nu from -1 to 0.5, one observes K divergence, G vanishing at the fluid limit, and crossings between moduli."

  - id: lambda_lame
    nombre:
      es: Primer parametro de Lame
      en: First Lame parameter
    simbolo: "\\\\lambda"
    unidad: Pa
    dimension: "[M L⁻¹ T⁻²]"
    tipo: escalar
    physical_role: derived
    symbol: "\\\\lambda"
    unidad_si: "Pa"
    is_vector: false
    components: []
    category: material_parameter
    used_in:
      - relacion_lambda_E_nu
    common_mistake:
      es: "Interpretar lambda como un modulo medible directamente; lambda no tiene una interpretacion mecanica simple por si solo."
      en: "Interpreting lambda as a directly measurable modulus; lambda has no simple mechanical interpretation on its own."
    typical_range: "-200e9 a 500e9 Pa; acero tipico 113e9 Pa"
    value_nature:
      kind: continuous
      nonnegative_only: false
      expected_interval: "[-2e11, 5e11]"
    descripcion:
      es: "Primer parametro de Lame. Aparece en la ley de Hooke generalizada como coeficiente del termino de dilatacion. Puede ser negativo en materiales auxeticos. Junto con G (segundo parametro de Lame), describe completamente la elasticidad isotropa."
      en: "First Lame parameter. Appears in the generalised Hooke law as the coefficient of the dilation term. Can be negative in auxetic materials. Together with G (second Lame parameter), fully describes isotropic elasticity."
    rango:
      min: -200e9
      max: 500e9
      tipico: 113e9
      nota:
        es: "Negativo para materiales auxeticos. Para acero tipico, lambda aprox. 113 GPa."
        en: "Negative for auxetic materials. For typical steel, lambda approx. 113 GPa."
    sign_behavior:
      es: "Positivo para la mayoria de materiales (nu > 0). Nulo cuando nu es cero. Negativo cuando nu < 0."
      en: "Positive for most materials (nu > 0). Zero when nu is zero. Negative when nu < 0."
    zero_behavior:
      es: "Lambda nulo indica nu cero: sin acoplamiento entre dilatacion y tension."
      en: "Zero lambda indicates zero nu: no coupling between dilation and stress."
    interpretation_role:
      es: "Magnitud complementaria a G en la formulacion tensorial. No se usa directamente en ensayos, pero es fundamental en simulaciones de elementos finitos."
      en: "Complementary magnitude to G in the tensorial formulation. Not used directly in tests, but fundamental in finite element simulations."
    graph_binding:
      axis: "y"
      label: { es: "lambda (GPa)", en: "lambda (GPa)" }
    pedagogical_notes:
      es: "Lambda es menos intuitivo que E, G o K, pero junto con G forma la pareja natural de la formulacion tensorial de Hooke."
      en: "Lambda is less intuitive than E, G or K, but together with G it forms the natural pair for the tensorial Hooke formulation."

  - id: ratio_G_E
    nombre:
      es: Cociente G/E
      en: Ratio G/E
    simbolo: "G/E"
    unidad: adimensional
    dimension: "[1]"
    tipo: escalar
    physical_role: derived
    symbol: "G/E"
    unidad_si: "adimensional"
    is_vector: false
    components: []
    category: diagnostic_ratio
    used_in:
      - relacion_G_E_nu
    common_mistake:
      es: "Esperar que G/E sea constante para todos los materiales; depende directamente de nu."
      en: "Expecting G/E to be constant for all materials; it depends directly on nu."
    typical_range: "0 a 0.5; metales comunes 0.35-0.40"
    value_nature:
      kind: continuous
      nonnegative_only: true
      expected_interval: "(0, 0.5]"
    descripcion:
      es: "Cociente adimensional entre el modulo de cizalla y el modulo de Young. Es una funcion univoca de nu: G/E igual a 1/(2(1+nu)). Sirve como diagnostico rapido del valor de nu."
      en: "Dimensionless ratio between shear modulus and Young modulus. It is a unique function of nu: G/E equals 1/(2(1+nu)). Serves as a quick diagnostic of the nu value."
    rango:
      min: 0
      max: 0.5
      tipico: 0.38
      nota:
        es: "0.5 para nu nulo, 0.33 para nu de 0.5, aprox. 0.38 para metales tipicos."
        en: "0.5 for zero nu, 0.33 for nu of 0.5, approx. 0.38 for typical metals."
    sign_behavior:
      es: "Siempre positivo."
      en: "Always positive."
    zero_behavior:
      es: "Un cociente nulo es imposible si ambos modulos son positivos."
      en: "A zero ratio is impossible if both moduli are positive."
    interpretation_role:
      es: "Indicador rapido de la particion cizalla/traccion del material."
      en: "Quick indicator of the material's shear/tension partition."
    graph_binding:
      axis: "y"
      label: { es: "G/E", en: "G/E" }
    pedagogical_notes:
      es: "Plotear G/E frente a nu es la forma mas directa de visualizar la relacion entre ambos modulos."
      en: "Plotting G/E against nu is the most direct way to visualise the relationship between both moduli."

  - id: ratio_K_E
    nombre:
      es: Cociente K/E
      en: Ratio K/E
    simbolo: "K/E"
    unidad: adimensional
    dimension: "[1]"
    tipo: escalar
    physical_role: derived
    symbol: "K/E"
    unidad_si: "adimensional"
    is_vector: false
    components: []
    category: diagnostic_ratio
    used_in:
      - relacion_K_E_nu
    common_mistake:
      es: "Ignorar la divergencia de K/E cuando nu se acerca a 0.5."
      en: "Ignoring the divergence of K/E as nu approaches 0.5."
    typical_range: "0.33 a infinito; metales comunes 0.7-1.2"
    value_nature:
      kind: continuous
      nonnegative_only: true
      expected_interval: "[0.33, 100]"
    descripcion:
      es: "Cociente adimensional entre el modulo de compresibilidad y el modulo de Young. Funcion univoca de nu: K/E igual a 1/(3(1-2nu)). Diverge cuando nu tiende a 0.5."
      en: "Dimensionless ratio between bulk modulus and Young modulus. Unique function of nu: K/E equals 1/(3(1-2nu)). Diverges as nu approaches 0.5."
    rango:
      min: 0.33
      max: 1e6
      tipico: 0.83
      nota:
        es: "0.33 para nu nulo, infinito para nu de 0.5. Acero tipico (nu 0.3): K/E aprox. 0.83."
        en: "0.33 for zero nu, infinity for nu of 0.5. Typical steel (nu 0.3): K/E approx. 0.83."
    sign_behavior:
      es: "Siempre positivo."
      en: "Always positive."
    zero_behavior:
      es: "Imposible si ambos modulos son positivos."
      en: "Impossible if both moduli are positive."
    interpretation_role:
      es: "Cuantifica la incompresibilidad relativa. Un K/E mucho mayor que 1 indica material cercano a incompresible."
      en: "Quantifies relative incompressibility. K/E much greater than 1 indicates nearly incompressible material."
    graph_binding:
      axis: "y"
      label: { es: "K/E", en: "K/E" }
    pedagogical_notes:
      es: "La divergencia de K/E en nu cercano a 0.5 es una señal visual clara del limite de incompresibilidad."
      en: "The divergence of K/E near nu of 0.5 is a clear visual signal of the incompressibility limit."
`;export{e as default};
