const e=`- id: rigidez_flexion_placa
  title:
    es: Rigidez a la flexión de la placa
    en: Plate bending stiffness
  equation: "D_placa = (E_young * h_placa^3) / (12 * (1 - nu_p^2))"
  latex: "D = \\\\frac{E \\\\, h^3}{12 \\\\left(1 - \\\\nu^2\\\\right)}"
  rearrangements:
    - target: D_placa
      equation: "D_placa = (E_young * h_placa^3) / (12 * (1 - nu_p^2))"
      latex: "D = \\\\frac{E \\\\, h^3}{12 \\\\left(1 - \\\\nu^2\\\\right)}"
    - target: E_young
      equation: "E_young = 12 * D_placa * (1 - nu_p^2) / h_placa^3"
      latex: "E = \\\\frac{12 \\\\, D \\\\left(1 - \\\\nu^2\\\\right)}{h^3}"
    - target: h_placa
      equation: "h_placa = (12 * D_placa * (1 - nu_p^2) / E_young)^(1/3)"
      latex: "h = \\\\left(\\\\frac{12 \\\\, D \\\\left(1 - \\\\nu^2\\\\right)}{E}\\\\right)^{1/3}"
  category: derived
  relation_type: definition
  physical_meaning:
    es: "La rigidez a la flexión [[D_placa]] combina el módulo de Young [[E_young]], el espesor [[h_placa]] y el coeficiente de Poisson [[nu_p]]. El cubo del espesor hace que pequeñas variaciones de grosor tengan un efecto enorme sobre las frecuencias modales."
    en: "Bending stiffness [[D_placa]] combines Young's modulus [[E_young]], plate thickness [[h_placa]] and Poisson's ratio [[nu_p]]. The cubic dependence on thickness means small thickness changes have a large effect on modal frequencies."
  constraints:
    - "E_young > 0"
    - "h_placa > 0"
    - "nu_p > 0"
    - "nu_p < 0.5"
  validity:
    es: "Válida para placas delgadas isótropas en el régimen elástico lineal pequeñas deformaciones."
    en: "Valid for thin isotropic plates in the linear elastic small-deformation regime."
  dimension_check: "[M T⁻²] = [M L⁻¹ T⁻²]·[L³] = [M L² T⁻²] / [L] = [M T⁻²] ✓  % D_placa"
  calculable: true
  motivo_no_calculable: ""
  used_in:
    - teoria
    - ejemplos
    - interpretacion
  interpretation_tags:
    - rigidez_placa
    - parametro_material
  result_semantics:
    target: D_placa
    kind: scalar_unsigned
    sign_meaning:
      es: "La rigidez es siempre positiva para sólidos elásticos."
      en: "Stiffness is always positive for elastic solids."
    absolute_value_meaning:
      es: "Un valor elevado de [[D_placa]] implica que la placa resiste mucho la curvatura y sus frecuencias modales serán altas. Vidrio de 1 mm aprox. 0.04 N·m; acero de 5 mm aprox. 950 N·m."
      en: "A high value of [[D_placa]] implies the plate strongly resists curvature and its modal frequencies will be high. 1 mm glass approx. 0.04 N·m; 5 mm steel approx. 950 N·m."
  domain_checks:
    - "D_placa > 0"
    - "D_placa < 1e6"
  coherence_checks:
    - "D_placa aumenta si h_placa aumenta con E_young y nu_p fijos"
    - "D_placa aumenta si E_young aumenta con h_placa y nu_p fijos"
  graph_implications:
    - "D_placa escala el eje vertical del espectro de frecuencias modales"
  pedagogical_triggers:
    - "Si D_placa resulta mayor de 10 000 N·m para una placa de espesor centimetrico, verificar que E_young esta en Pa"
    - "Si el alumno obtiene D negativo, ha asignado nu_p mayor que 0.5"

- id: frecuencia_modal_placa
  title:
    es: Frecuencia modal de placa rectangular borde empotrado
    en: Modal frequency of rectangular plate with fixed edges
  equation: "f_mn = (pi/2) * sqrt(D_placa / rho_s) * ((m/a_dim)^2 + (n/b_dim)^2)"
  latex: "f_{mn} = \\\\frac{\\\\pi}{2} \\\\sqrt{\\\\frac{D}{\\\\rho_s}} \\\\left[\\\\left(\\\\frac{m}{a}\\\\right)^2 + \\\\left(\\\\frac{n}{b}\\\\right)^2\\\\right]"
  rearrangements:
    - target: f_mn
      equation: "f_mn = (pi/2) * sqrt(D_placa / rho_s) * ((m/a_dim)^2 + (n/b_dim)^2)"
      latex: "f_{mn} = \\\\frac{\\\\pi}{2} \\\\sqrt{\\\\frac{D}{\\\\rho_s}} \\\\left[\\\\left(\\\\frac{m}{a}\\\\right)^2 + \\\\left(\\\\frac{n}{b}\\\\right)^2\\\\right]"
    - target: D_placa
      equation: "D_placa = rho_s * (2 * f_mn / (pi * ((m/a_dim)^2 + (n/b_dim)^2)))^2"
      latex: "D = \\\\rho_s \\\\left(\\\\frac{2 f_{mn}}{\\\\pi \\\\left[\\\\left(\\\\frac{m}{a}\\\\right)^2 + \\\\left(\\\\frac{n}{b}\\\\right)^2\\\\right]}\\\\right)^2"
    - target: rho_s
      equation: "rho_s = D_placa * (pi/2 * ((m/a_dim)^2 + (n/b_dim)^2) / f_mn)^2"
      latex: "\\\\rho_s = D \\\\left(\\\\frac{\\\\pi}{2} \\\\frac{\\\\left(\\\\frac{m}{a}\\\\right)^2 + \\\\left(\\\\frac{n}{b}\\\\right)^2}{f_{mn}}\\\\right)^2"
    - target: a_dim
      equation: "a_dim = m / sqrt((2*f_mn/(pi*sqrt(D_placa/rho_s)))^2 - (n/b_dim)^2)"
      latex: "a = \\\\frac{m}{\\\\sqrt{\\\\left(\\\\frac{2 f_{mn}}{\\\\pi \\\\sqrt{D/\\\\rho_s}}\\\\right)^2 - \\\\left(\\\\frac{n}{b}\\\\right)^2}}"
    - target: b_dim
      equation: "b_dim = n / sqrt((2*f_mn/(pi*sqrt(D_placa/rho_s)))^2 - (m/a_dim)^2)"
      latex: "b = \\\\frac{n}{\\\\sqrt{\\\\left(\\\\frac{2 f_{mn}}{\\\\pi \\\\sqrt{D/\\\\rho_s}}\\\\right)^2 - \\\\left(\\\\frac{m}{a}\\\\right)^2}}"
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: "La frecuencia del modo (m,n) en una placa rectangular depende de la rigidez [[D_placa]] y la densidad superficial [[rho_s]] a través de su cociente, y de los índices modales y las dimensiones [[a_dim]] y [[b_dim]]. Modos de mayor índice tienen mayor frecuencia porque sus patrones nodales son más finos."
    en: "The frequency of mode (m,n) in a rectangular plate depends on stiffness [[D_placa]] and surface mass density [[rho_s]] through their ratio, and on the mode indices and dimensions [[a_dim]] and [[b_dim]]. Higher-index modes have higher frequency because their nodal patterns are finer."
  constraints:
    - "D_placa > 0"
    - "rho_s > 0"
    - "a_dim > 0"
    - "b_dim > 0"
    - "m >= 1"
    - "n >= 1"
  validity:
    es: "Válida para placas delgadas rectangulares con bordes empotrados (simplemente apoyados). La aproximación deteriora para placas gruesas donde el cociente a/h < 10."
    en: "Valid for thin rectangular plates with simply supported (fixed) edges. The approximation degrades for thick plates where the ratio a/h < 10."
  dimension_check: "[T⁻¹] = [T⁻¹] · [1] ✓  % f_mn"
  calculable: true
  motivo_no_calculable: ""
  used_in:
    - teoria
    - ejemplos
    - interpretacion
  interpretation_tags:
    - frecuencia_modal
    - espectro_placa
  result_semantics:
    target: f_mn
    kind: scalar_unsigned
    sign_meaning:
      es: "Frecuencia siempre positiva; indica el número de oscilaciones completas por segundo del modo (m,n)."
      en: "Frequency always positive; indicates the number of complete oscillations per second of mode (m,n)."
    absolute_value_meaning:
      es: "Un valor alto de [[f_mn]] indica que el modo es difícil de excitar con fuentes de baja frecuencia y que sus líneas nodales son numerosas. Para una placa de acero de 0.3 m × 0.2 m × 2 mm, el modo (1,1) está en torno a 200 Hz."
      en: "A high value of [[f_mn]] indicates the mode is hard to excite with low-frequency sources and its nodal lines are numerous. For a 0.3 m × 0.2 m × 2 mm steel plate, mode (1,1) is around 200 Hz."
  domain_checks:
    - "f_mn > 0"
    - "f_mn < 20000"
  coherence_checks:
    - "f_11 debe ser el modo de menor frecuencia para placa rectangular"
    - "f_mn aumenta al aumentar m o n"
    - "para placa cuadrada f_mn = f_nm"
  graph_implications:
    - "Cada punto del espectro modal corresponde a un par (m,n); el eje horizontal muestra el numero del modo ordenado por frecuencia"
    - "La densidad modal aumenta con la frecuencia"
  pedagogical_triggers:
    - "Si f_11 resulta en kHz para una placa decimetrica, verificar que D_placa esta en N·m y rho_s en kg/m²"
    - "Si el alumno afirma que el modo (2,1) tiene doble frecuencia que el (1,1), recordar que la relacion no es lineal con los indices"

- id: frecuencia_modal_membrana
  title:
    es: Frecuencia modal de membrana rectangular tensada
    en: Modal frequency of rectangular tensioned membrane
  equation: "f_mn = (1/2) * sqrt(T_mem / rho_mem) * sqrt((m/a_dim)^2 + (n/b_dim)^2)"
  latex: "f_{mn} = \\\\frac{1}{2} \\\\sqrt{\\\\frac{T}{\\\\sigma_m}} \\\\sqrt{\\\\left(\\\\frac{m}{a}\\\\right)^2 + \\\\left(\\\\frac{n}{b}\\\\right)^2}"
  rearrangements:
    - target: f_mn
      equation: "f_mn = (1/2) * sqrt(T_mem / rho_mem) * sqrt((m/a_dim)^2 + (n/b_dim)^2)"
      latex: "f_{mn} = \\\\frac{1}{2} \\\\sqrt{\\\\frac{T}{\\\\sigma_m}} \\\\sqrt{\\\\left(\\\\frac{m}{a}\\\\right)^2 + \\\\left(\\\\frac{n}{b}\\\\right)^2}"
    - target: T_mem
      equation: "T_mem = rho_mem * (2 * f_mn / sqrt((m/a_dim)^2 + (n/b_dim)^2))^2"
      latex: "T = \\\\sigma_m \\\\left(\\\\frac{2 f_{mn}}{\\\\sqrt{\\\\left(\\\\frac{m}{a}\\\\right)^2 + \\\\left(\\\\frac{n}{b}\\\\right)^2}}\\\\right)^2"
    - target: rho_mem
      equation: "rho_mem = T_mem / (2 * f_mn / sqrt((m/a_dim)^2 + (n/b_dim)^2))^2"
      latex: "\\\\sigma_m = \\\\frac{T}{\\\\left(\\\\frac{2 f_{mn}}{\\\\sqrt{\\\\left(\\\\frac{m}{a}\\\\right)^2 + \\\\left(\\\\frac{n}{b}\\\\right)^2}}\\\\right)^2}"
    - target: a_dim
      equation: "a_dim = m / sqrt((2*f_mn/sqrt(T_mem/rho_mem))^2 - (n/b_dim)^2)"
      latex: "a = \\\\frac{m}{\\\\sqrt{\\\\left(\\\\frac{2 f_{mn}}{\\\\sqrt{T/\\\\sigma_m}}\\\\right)^2 - \\\\left(\\\\frac{n}{b}\\\\right)^2}}"
    - target: b_dim
      equation: "b_dim = n / sqrt((2*f_mn/sqrt(T_mem/rho_mem))^2 - (m/a_dim)^2)"
      latex: "b = \\\\frac{n}{\\\\sqrt{\\\\left(\\\\frac{2 f_{mn}}{\\\\sqrt{T/\\\\sigma_m}}\\\\right)^2 - \\\\left(\\\\frac{m}{a}\\\\right)^2}}"
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: "La frecuencia modal de la membrana tensada depende de la velocidad de propagación de ondas transversales determinada por la tensión [[T_mem]] y la densidad [[rho_mem]], y del patrón espacial del modo mediante los índices m,n y las dimensiones [[a_dim]] y [[b_dim]]. La membrana es análoga 2D de la cuerda vibrante."
    en: "The modal frequency of the tensioned membrane depends on the transverse wave speed determined by tension [[T_mem]] and density [[rho_mem]], and on the spatial mode pattern through indices m,n and dimensions [[a_dim]] and [[b_dim]]. The membrane is the 2D analogue of the vibrating string."
  constraints:
    - "T_mem > 0"
    - "rho_mem > 0"
    - "a_dim > 0"
    - "b_dim > 0"
    - "m >= 1"
    - "n >= 1"
  validity:
    es: "Válida para membranas rectangulares con bordes fijos, tensión uniforme e isótropa, y amplitudes pequeñas. No aplica cuando la rigidez a la flexión de la membrana es comparable a la tensión."
    en: "Valid for rectangular membranes with fixed edges, uniform isotropic tension, and small amplitudes. Not applicable when the membrane bending stiffness is comparable to tension."
  dimension_check: "[T⁻¹] = [T⁻¹] · [1] ✓  % f_mn"
  calculable: true
  motivo_no_calculable: ""
  used_in:
    - teoria
    - ejemplos
    - interpretacion
  interpretation_tags:
    - frecuencia_modal
    - espectro_membrana
    - afinado
  result_semantics:
    target: f_mn
    kind: scalar_unsigned
    sign_meaning:
      es: "Frecuencia siempre positiva."
      en: "Frequency always positive."
    absolute_value_meaning:
      es: "Para un parche de batería típico (a = 0.35 m, T = 2000 N/m, rho_mem = 0.3 kg/m²) el modo (1,1) está en torno a 80–120 Hz."
      en: "For a typical drum head (a = 0.35 m, T = 2000 N/m, rho_mem = 0.3 kg/m²) mode (1,1) is around 80–120 Hz."
  domain_checks:
    - "f_mn > 0"
    - "f_mn < 20000"
  coherence_checks:
    - "f_11 es el modo fundamental de la membrana"
    - "f_mn aumenta con T_mem con rho_mem y dimensiones fijas"
    - "f_mn disminuye al aumentar las dimensiones a o b"
  graph_implications:
    - "El espectro modal de membrana es mas denso que el de placa a frecuencias bajas"
    - "La curva de frecuencias vs indice modal crece mas lentamente que en la placa"
  pedagogical_triggers:
    - "Si f_11 de membrana resulta mayor que 1 kHz para dimensiones decimetricas, verificar que rho_mem esta en kg/m² y T_mem en N/m"
    - "Si el alumno confunde la tension de membrana N/m con la presion Pa, recordar la dimension diferente"

- id: densidad_superficial_placa
  title:
    es: Densidad superficial de la placa
    en: Plate surface mass density
  equation: "rho_s = rho_vol * h_placa"
  latex: "\\\\rho_s = \\\\rho \\\\cdot h"
  rearrangements:
    - target: rho_s
      equation: "rho_s = rho_vol * h_placa"
      latex: "\\\\rho_s = \\\\rho \\\\cdot h"
    - target: rho_vol
      equation: "rho_vol = rho_s / h_placa"
      latex: "\\\\rho = \\\\frac{\\\\rho_s}{h}"
    - target: h_placa
      equation: "h_placa = rho_s / rho_vol"
      latex: "h = \\\\frac{\\\\rho_s}{\\\\rho}"
  category: auxiliary
  relation_type: definition
  physical_meaning:
    es: "La densidad superficial [[rho_s]] es el producto de la densidad volumétrica [[rho_vol]] del material y el espesor [[h_placa]]. Es la magnitud de inercia que aparece en la ecuación modal de la placa."
    en: "Surface mass density [[rho_s]] is the product of the material volumetric density [[rho_vol]] and plate thickness [[h_placa]]. It is the inertia quantity that appears in the plate modal equation."
  constraints:
    - "rho_vol > 0"
    - "h_placa > 0"
  validity:
    es: "Universalmente válida para placas homogéneas y de espesor uniforme."
    en: "Universally valid for homogeneous plates with uniform thickness."
  dimension_check: "[M L⁻²] = [M L⁻³]·[L] = [M L⁻²] ✓  % rho_s"
  calculable: true
  motivo_no_calculable: ""
  used_in:
    - teoria
    - ejemplos
    - interpretacion
  interpretation_tags:
    - inercia_placa
    - parametro_material
  result_semantics:
    target: rho_s
    kind: scalar_unsigned
    sign_meaning:
      es: "La densidad superficial es siempre positiva."
      en: "Surface mass density is always positive."
    absolute_value_meaning:
      es: "Un valor elevado de [[rho_s]] indica mayor inercia y frecuencias modales más bajas. Acero 2 mm aprox. 15.7 kg/m²; aluminio 2 mm aprox. 5.4 kg/m²."
      en: "A high value of [[rho_s]] indicates greater inertia and lower modal frequencies. 2 mm steel approx. 15.7 kg/m²; 2 mm aluminium approx. 5.4 kg/m²."
  domain_checks:
    - "rho_s > 0"
  coherence_checks:
    - "rho_s debe aumentar proporcionalmente a h_placa con rho_vol fijo"
  graph_implications:
    - "rho_s escala inversamente las frecuencias modales"
  pedagogical_triggers:
    - "Si rho_s resulta en kg/m³, el alumno ha omitido multiplicar por h_placa"
`;export{e as default};
