const e=`version: "2.0"
id: interp-modos-en-placas-y-membranas
leaf_id: modos-en-placas-y-membranas

nombre:
  es: Interpretación de modos en placas y membranas
  en: Interpretation of modes in plates and membranes

scope:
  area: fisica-clasica
  bloque: ondas
  subbloque: ondas-mecanicas
  parent_id: ondas-en-solidos
  ruta_relativa: fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/modos-en-placas-y-membranas

ui:
  enabled: true
  display_modes:
    calculator_inline: true
    graph_inline: true
    dedicated_tab: true
    modal: false
  labels:
    es: Interpretacion
    en: Interpretation
  priority_order:
    - summary
    - physical_reading
    - coherence
    - model_validity
    - graph_reading
    - likely_errors
    - next_step
  inline_limits:
    max_sections: 2
    priority: [summary, likely_errors]

dependencies:
  formulas:
    - rigidez_flexion_placa
    - frecuencia_modal_placa
    - frecuencia_modal_membrana
    - densidad_superficial_placa
  magnitudes:
    - f_mn
    - D_placa
    - E_young
    - h_placa
    - nu_p
    - rho_s
    - rho_vol
    - rho_mem
    - T_mem
    - a_dim
    - b_dim

global_context:
  physical_domain:
    es: "Vibración libre de estructuras bidimensionales (placas elásticas y membranas tensadas) con bordes fijos, en el régimen de pequeñas deformaciones."
    en: "Free vibration of two-dimensional structures (elastic plates and tensioned membranes) with fixed edges, in the small-deformation regime."
  axis_convention:
    es: "Coordenadas (x,y) en el plano de la placa o membrana; índices (m,n) numeran los semiperíodos en cada dirección."
    en: "(x,y) coordinates in the plate or membrane plane; indices (m,n) count the half-periods in each direction."
  standard_assumptions:
    - "Placa delgada: h << a, b"
    - "Material isótropo y homogéneo"
    - "Bordes simplemente apoyados o empotrados"
    - "Amplitudes pequeñas (régimen lineal)"
    - "Sin amortiguamiento en el modelo ideal"
  standard_warnings:
    - "Para placas gruesas (a/h < 10) usar teoría de Mindlin"
    - "La degeneración modal en placas cuadradas produce patrones nodales combinados"
    - "La membrana ideal no tiene rigidez a la flexión; para membranas reales aplicar corrección"

result_blocks:
  summary:
    enabled: true
    order: 1
    title:
      es: Resumen
      en: Summary
  physical_reading:
    enabled: true
    order: 2
    title:
      es: Lectura física
      en: Physical reading
  coherence:
    enabled: true
    order: 3
    title:
      es: Coherencia
      en: Coherence
  model_validity:
    enabled: true
    order: 4
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    enabled: true
    order: 5
    title:
      es: Lectura del gráfico
      en: Graph reading
  likely_errors:
    enabled: true
    order: 6
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    enabled: true
    order: 7
    title:
      es: Siguiente paso
      en: Next step

targets:

  f_mn:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Frecuencia natural del modo (m,n); determina en qué frecuencias puede resonar la estructura."
      en: "Natural frequency of mode (m,n); determines at which frequencies the structure can resonate."
    summary_rules:
      - id: fmn_summary_high
        when: "f_mn > 1000"
        status: ok
        text:
          es: "[[f_mn]] indica una frecuencia modal elevada (por encima de 1 kHz). El modo resulta difícil de excitar acústicamente y sus líneas nodales son muy finas. Depende de la rigidez y la geometría."
          en: "[[f_mn]] indicates a high modal frequency (above 1 kHz). The mode is hard to excite acoustically and its nodal lines are very fine. It depends on stiffness and geometry."
      - id: fmn_summary_mid
        when: "f_mn >= 100 && f_mn <= 1000"
        status: ok
        text:
          es: "[[f_mn]] indica una frecuencia modal en rango audible medio. El modo describe un patrón nodal con m semiperíodos en x y n en y, y resulta accesible a fuentes acústicas típicas."
          en: "[[f_mn]] indicates a modal frequency in the mid-audible range. The mode describes a nodal pattern with m half-periods in x and n in y, accessible to typical acoustic sources."
      - id: fmn_summary_low
        when: "f_mn < 100"
        status: warning
        text:
          es: "[[f_mn]] indica una frecuencia modal baja. Para estructuras grandes o poco tensadas, esto resume una respuesta estructural lenta que puede acoplarse con vibraciones mecánicas de baja frecuencia."
          en: "[[f_mn]] indicates a low modal frequency. For large or lightly tensioned structures this describes a slow structural response that may couple with low-frequency mechanical vibrations."
      - id: fmn_summary_default
        when: "true"
        status: ok
        text:
          es: "[[f_mn]] resume la frecuencia de resonancia del modo seleccionado. Su valor depende de la rigidez o tensión, la densidad superficial y los índices de modo."
          en: "[[f_mn]] summarizes the resonance frequency of the selected mode. Its value depends on stiffness or tension, surface mass density and mode indices."
    physical_reading_rules:
      - id: fmn_reading_plate
        when: "f_mn > 0 && D_placa > 0"
        status: ok
        text:
          es: "Para la placa, [[f_mn]] aumenta como el cuadrado de los índices de modo y como la raíz del cociente [[D_placa]] / [[rho_s]]. Aumentar la rigidez o reducir la masa eleva todas las frecuencias modales."
          en: "For the plate, [[f_mn]] increases as the square of mode indices and as the square root of the ratio [[D_placa]] / [[rho_s]]. Increasing stiffness or reducing mass raises all modal frequencies."
      - id: fmn_reading_default
        when: "true"
        status: ok
        text:
          es: "[[f_mn]] es una frecuencia de resonancia: si una fuente externa oscila exactamente a [[f_mn]], la amplitud de vibración de la estructura crece indefinidamente en el modelo sin amortiguamiento."
          en: "[[f_mn]] is a resonance frequency: if an external source oscillates exactly at [[f_mn]], the vibration amplitude of the structure grows indefinitely in the undamped model."
    coherence_rules:
      - id: fmn_coherence_positive
        when: "f_mn <= 0"
        status: error
        text:
          es: "[[f_mn]] no puede ser cero ni negativa. Revisar que [[D_placa]] o [[T_mem]] sean positivos y que los índices m, n sean al menos 1."
          en: "[[f_mn]] cannot be zero or negative. Check that [[D_placa]] or [[T_mem]] are positive and that indices m, n are at least 1."
      - id: fmn_coherence_range
        when: "f_mn > 20000"
        status: warning
        text:
          es: "[[f_mn]] supera los 20 kHz. Revisar unidades de [[D_placa]] (N·m), [[rho_s]] (kg/m²) y dimensiones (m). Un error de conversión de GPa a Pa es la causa más frecuente."
          en: "[[f_mn]] exceeds 20 kHz. Check units of [[D_placa]] (N·m), [[rho_s]] (kg/m²) and dimensions (m). A GPa to Pa conversion error is the most common cause."
      - id: fmn_coherence_default
        when: "true"
        status: ok
        text:
          es: "El rango de [[f_mn]] calculado es físicamente plausible para la estructura descrita."
          en: "The calculated [[f_mn]] range is physically plausible for the described structure."
    model_validity_rules:
      - id: fmn_validity_thick
        when: "f_mn > 5000"
        status: warning
        text:
          es: "A frecuencias modales muy altas, la hipótesis de placa delgada puede dejar de ser válida. Si el espesor [[h_placa]] no es mucho menor que la longitud de onda, usar la teoría de Mindlin."
          en: "At very high modal frequencies, the thin plate hypothesis may break down. If thickness [[h_placa]] is not much smaller than the wavelength, use Mindlin plate theory."
      - id: fmn_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de placa de Kirchhoff o membrana ideal es apropiado para frecuencias en el rango audible cuando la estructura es delgada. Los bordes deben estar realmente fijos para que la ecuación modal sea válida."
          en: "Kirchhoff plate or ideal membrane model is appropriate for audible-range frequencies when the structure is thin. Edges must be truly fixed for the modal equation to be valid."
    graph_rules:
      - id: fmn_graph_spectrum
        when: "f_mn > 0"
        status: ok
        text:
          es: "En el espectro modal (gráfico Coord), [[f_mn]] aparece como un pico vertical en el eje de frecuencias. Modos de mayor índice aparecen a la derecha con espaciado creciente."
          en: "In the modal spectrum (Coord graph), [[f_mn]] appears as a vertical peak on the frequency axis. Higher-index modes appear to the right with increasing spacing."
      - id: fmn_graph_default
        when: "true"
        status: ok
        text:
          es: "El gráfico SVG de patrones nodales muestra las líneas o curvas de amplitud nula correspondientes al modo de frecuencia [[f_mn]] calculada."
          en: "The SVG nodal pattern graph shows the zero-amplitude lines or curves corresponding to the mode at calculated frequency [[f_mn]]."
    likely_errors:
      - id: fmn_error_units
        when: "f_mn > 1e6"
        status: error
        text:
          es: "Frecuencia en MHz no es razonable para estructuras macroscópicas. El error más probable es haber introducido [[E_young]] en GPa sin convertir a Pa, o [[a_dim]] en mm en lugar de m."
          en: "Frequency in MHz is not reasonable for macroscopic structures. The most likely error is entering [[E_young]] in GPa without converting to Pa, or [[a_dim]] in mm instead of m."
      - id: fmn_error_indices
        when: "true"
        status: warning
        text:
          es: "Verificar que los índices m y n son enteros positivos. Un índice cero produciría frecuencia nula, que corresponde a traslación rígida, no a un modo vibratorio."
          en: "Verify that indices m and n are positive integers. An index of zero would produce zero frequency, corresponding to rigid translation, not a vibratory mode."
    next_step_rules:
      - id: fmn_next_resonance
        when: "f_mn > 0"
        status: ok
        text:
          es: "Comparar [[f_mn]] con las frecuencias de fuentes externas (motores, altavoces, excitación humana). Si coinciden, existe riesgo de resonancia. El siguiente paso es calcular la densidad modal para estimar cuántos modos hay en el rango de excitación."
          en: "Compare [[f_mn]] with external source frequencies (motors, speakers, human excitation). If they match, there is a resonance risk. The next step is to compute modal density to estimate how many modes exist in the excitation range."
      - id: fmn_next_default
        when: "true"
        status: ok
        text:
          es: "Explorar el modo (m+1, n) o (m, n+1) para entender cómo evoluciona el espectro modal hacia frecuencias más altas."
          en: "Explore mode (m+1, n) or (m, n+1) to understand how the modal spectrum evolves towards higher frequencies."

  D_placa:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Rigidez a la flexión de la placa; escala todas las frecuencias modales de la placa."
      en: "Plate bending stiffness; scales all plate modal frequencies."
    summary_rules:
      - id: Dp_summary_high
        when: "D_placa > 100"
        status: ok
        text:
          es: "[[D_placa]] indica una placa muy rígida (por encima de 100 N·m). El espectro modal depende de esta rigidez elevada y todas las frecuencias modales serán altas."
          en: "[[D_placa]] indicates a very stiff plate (above 100 N·m). The modal spectrum depends on this high stiffness and all modal frequencies will be elevated."
      - id: Dp_summary_default
        when: "true"
        status: ok
        text:
          es: "[[D_placa]] resume la resistencia de la placa a doblarse. Aumentar [[D_placa]] eleva el espectro modal; reducirlo lo desplaza a frecuencias menores."
          en: "[[D_placa]] summarizes the plate resistance to bending. Increasing [[D_placa]] raises the modal spectrum; reducing it shifts modes to lower frequencies."
    physical_reading_rules:
      - id: Dp_reading_cube
        when: "D_placa > 0"
        status: ok
        text:
          es: "[[D_placa]] crece con el cubo del espesor [[h_placa]]. Duplicar el espesor multiplica [[D_placa]] por ocho y las frecuencias modales por cuatro. Es el parámetro de control más potente en el diseño de placas."
          en: "[[D_placa]] grows with the cube of thickness [[h_placa]]. Doubling the thickness multiplies [[D_placa]] by eight and modal frequencies by four. It is the most powerful control parameter in plate design."
      - id: Dp_reading_default
        when: "true"
        status: ok
        text:
          es: "[[D_placa]] depende de [[E_young]] y [[nu_p]] del material, y del cubo de [[h_placa]]. La rigidez a la flexión no es lo mismo que la rigidez axial."
          en: "[[D_placa]] depends on [[E_young]] and [[nu_p]] of the material, and on the cube of [[h_placa]]. Bending stiffness is not the same as axial stiffness."
    coherence_rules:
      - id: Dp_coherence_positive
        when: "D_placa <= 0"
        status: error
        text:
          es: "[[D_placa]] no puede ser cero ni negativa. Revisar que [[E_young]] y [[h_placa]] sean positivos y [[nu_p]] menor que 0.5."
          en: "[[D_placa]] cannot be zero or negative. Check that [[E_young]] and [[h_placa]] are positive and [[nu_p]] is less than 0.5."
      - id: Dp_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[D_placa]] es coherente con los parámetros del material y el espesor."
          en: "The value of [[D_placa]] is consistent with the material parameters and thickness."
    model_validity_rules:
      - id: Dp_validity_default
        when: "true"
        status: ok
        text:
          es: "La rigidez [[D_placa]] según la teoría de Kirchhoff es válida cuando la placa es delgada (espesor mucho menor que las dimensiones en plano). Para placas gruesas, la rigidez al cortante modifica el resultado."
          en: "Stiffness [[D_placa]] from Kirchhoff theory is valid when the plate is thin (thickness much smaller than in-plane dimensions). For thick plates, shear stiffness modifies the result."
    graph_rules:
      - id: Dp_graph_default
        when: "true"
        status: ok
        text:
          es: "[[D_placa]] no aparece directamente en el espectro modal, pero escala verticalmente todas las frecuencias. Una [[D_placa]] mayor eleva todos los picos del espectro."
          en: "[[D_placa]] does not appear directly in the modal spectrum, but scales all frequencies upward. A larger [[D_placa]] shifts all spectrum peaks higher."
    likely_errors:
      - id: Dp_error_units
        when: "D_placa > 1e8"
        status: error
        text:
          es: "[[D_placa]] extremadamente elevada. El error más probable es haber introducido [[E_young]] en GPa sin convertir a Pa (factor 10⁹)."
          en: "[[D_placa]] is extremely large. The most likely error is entering [[E_young]] in GPa without converting to Pa (factor 10⁹)."
      - id: Dp_error_default
        when: "true"
        status: ok
        text:
          es: "Verificar que [[nu_p]] no sea mayor que 0.5 (límite de incompresibilidad). Para la mayoría de metales, el valor es entre 0.25 y 0.35."
          en: "Verify that [[nu_p]] is not greater than 0.5 (incompressibility limit). For most metals the value is between 0.25 and 0.35."
    next_step_rules:
      - id: Dp_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[D_placa]] calculado, el siguiente paso es calcular la frecuencia modal [[f_mn]] usando la fórmula de placa con los índices y dimensiones deseados."
          en: "With [[D_placa]] calculated, the next step is to compute modal frequency [[f_mn]] using the plate formula with the desired indices and dimensions."

  E_young:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Módulo de Young del material; determina su rigidez elástica y, junto con el espesor, la rigidez a la flexión."
      en: "Young's modulus of the material; determines its elastic stiffness and, together with thickness, the bending stiffness."
    summary_rules:
      - id: Ey_summary_default
        when: "true"
        status: ok
        text:
          es: "[[E_young]] resume la rigidez elástica del material. Un módulo elevado indica un material rígido que transmite y soporta ondas de flexión a frecuencias altas. Su valor depende del material, no de la geometría."
          en: "[[E_young]] summarizes the elastic stiffness of the material. A high modulus indicates a stiff material that supports bending waves at high frequencies. Its value depends on material, not geometry."
    physical_reading_rules:
      - id: Ey_reading_default
        when: "true"
        status: ok
        text:
          es: "[[E_young]] entra linealmente en [[D_placa]]. Para cambiar las frecuencias modales, modificar el material tiene menos impacto que modificar [[h_placa]] por su dependencia cúbica."
          en: "[[E_young]] enters linearly into [[D_placa]]. To change modal frequencies, modifying the material has less impact than modifying [[h_placa]] due to its cubic dependence."
    coherence_rules:
      - id: Ey_coherence_positive
        when: "E_young <= 0"
        status: error
        text:
          es: "[[E_young]] no puede ser cero ni negativo para un sólido elástico."
          en: "[[E_young]] cannot be zero or negative for an elastic solid."
      - id: Ey_coherence_default
        when: "true"
        status: ok
        text:
          es: "El valor de [[E_young]] es coherente con el rango de materiales sólidos: desde 0.001 GPa para elastómeros hasta 400 GPa para diamante."
          en: "The value of [[E_young]] is consistent with the range of solid materials: from 0.001 GPa for elastomers to 400 GPa for diamond."
    model_validity_rules:
      - id: Ey_validity_default
        when: "true"
        status: ok
        text:
          es: "El módulo de Young es constante solo en el régimen lineal elástico y para materiales isótropos. Para materiales compuestos o anisótropos, usar módulos direccionales."
          en: "Young's modulus is constant only in the linear elastic regime and for isotropic materials. For composite or anisotropic materials, use directional moduli."
    graph_rules:
      - id: Ey_graph_default
        when: "true"
        status: ok
        text:
          es: "[[E_young]] influye en [[D_placa]], que a su vez escala el espectro modal. Un material con mayor [[E_young]] eleva todos los picos del espectro por igual."
          en: "[[E_young]] influences [[D_placa]], which in turn scales the modal spectrum. A material with higher [[E_young]] shifts all spectrum peaks up equally."
    likely_errors:
      - id: Ey_error_units
        when: "E_young < 1000"
        status: warning
        text:
          es: "[[E_young]] parece muy bajo. Verificar que se ha introducido en Pa. Si el valor es en GPa, multiplicar por 10⁹."
          en: "[[E_young]] seems very low. Verify it has been entered in Pa. If the value is in GPa, multiply by 10⁹."
      - id: Ey_error_default
        when: "true"
        status: ok
        text:
          es: "Confirmar que [[E_young]] corresponde al módulo de Young y no al módulo de cizalladura [[D_placa]]. Son magnitudes distintas."
          en: "Confirm that [[E_young]] corresponds to Young's modulus and not to shear modulus. They are different quantities."
    next_step_rules:
      - id: Ey_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[E_young]] y [[h_placa]] disponibles, calcular [[D_placa]] mediante la fórmula de rigidez a la flexión antes de proceder al cálculo de frecuencias modales."
          en: "With [[E_young]] and [[h_placa]] available, calculate [[D_placa]] using the bending stiffness formula before proceeding to modal frequency calculation."

  h_placa:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Espesor de la placa; el parámetro geométrico con mayor influencia sobre la rigidez a la flexión."
      en: "Plate thickness; the geometric parameter with the greatest influence on bending stiffness."
    summary_rules:
      - id: hp_summary_default
        when: "true"
        status: ok
        text:
          es: "[[h_placa]] resume el espesor geométrico de la placa. Aumentar [[h_placa]] indica mayor rigidez cúbica y mayor masa superficial, resultando en frecuencias modales más altas. Es el parámetro de diseño más potente para controlar el espectro modal."
          en: "[[h_placa]] summarizes the geometric thickness of the plate. Increasing [[h_placa]] indicates greater cubic stiffness and higher surface mass, resulting in higher modal frequencies. It is the most powerful design parameter for controlling the modal spectrum."
    physical_reading_rules:
      - id: hp_reading_cubic
        when: "h_placa > 0"
        status: ok
        text:
          es: "[[h_placa]] entra al cubo en [[D_placa]] y linealmente en [[rho_s]]. El cociente D/rho_s, que determina [[f_mn]], crece como el cuadrado de [[h_placa]]. Duplicar el espesor cuadriplica las frecuencias modales."
          en: "[[h_placa]] enters [[D_placa]] to the cube and [[rho_s]] linearly. The ratio D/rho_s, which governs [[f_mn]], grows as the square of [[h_placa]]. Doubling thickness quadruples modal frequencies."
      - id: hp_reading_default
        when: "true"
        status: ok
        text:
          es: "[[h_placa]] es una dimensión geométrica pura; no depende del material. En la práctica, el espesor es la variable más accesible para el ingeniero que necesita ajustar las frecuencias de resonancia."
          en: "[[h_placa]] is a pure geometric dimension; it does not depend on material. In practice, thickness is the most accessible variable for the engineer needing to adjust resonance frequencies."
    coherence_rules:
      - id: hp_coherence_positive
        when: "h_placa <= 0"
        status: error
        text:
          es: "[[h_placa]] debe ser positivo. Un espesor nulo o negativo no tiene significado físico."
          en: "[[h_placa]] must be positive. Zero or negative thickness has no physical meaning."
      - id: hp_coherence_thin
        when: "h_placa > a_dim / 10"
        status: warning
        text:
          es: "[[h_placa]] es mayor que el 10 % de [[a_dim]], lo que cuestiona la hipótesis de placa delgada. Considerar el modelo de Mindlin para resultados más precisos."
          en: "[[h_placa]] is greater than 10% of [[a_dim]], which questions the thin plate hypothesis. Consider the Mindlin model for more accurate results."
      - id: hp_coherence_default
        when: "true"
        status: ok
        text:
          es: "El espesor [[h_placa]] es coherente con la hipótesis de placa delgada."
          en: "Thickness [[h_placa]] is consistent with the thin plate hypothesis."
    model_validity_rules:
      - id: hp_validity_default
        when: "true"
        status: ok
        text:
          es: "La teoría de Kirchhoff requiere h << a, b. Si el espesor es comparable a las dimensiones en plano, usar la teoría de Mindlin que incorpora la deformación por cortante."
          en: "Kirchhoff theory requires h << a, b. If thickness is comparable to in-plane dimensions, use Mindlin theory which incorporates shear deformation."
    graph_rules:
      - id: hp_graph_default
        when: "true"
        status: ok
        text:
          es: "[[h_placa]] no aparece en el espectro modal como eje independiente, pero aumentar [[h_placa]] desplaza todos los picos hacia frecuencias más altas de forma cuadrática."
          en: "[[h_placa]] does not appear in the modal spectrum as an independent axis, but increasing [[h_placa]] shifts all peaks to higher frequencies quadratically."
    likely_errors:
      - id: hp_error_units
        when: "h_placa > 1"
        status: warning
        text:
          es: "[[h_placa]] superior a 1 m es inusual para una placa. Verificar que el valor está en metros y no en centímetros o milímetros."
          en: "[[h_placa]] greater than 1 m is unusual for a plate. Verify the value is in metres and not centimetres or millimetres."
      - id: hp_error_default
        when: "true"
        status: ok
        text:
          es: "Confirmar que [[h_placa]] es el espesor perpendicular al plano, no una de las dimensiones en plano ([[a_dim]] o [[b_dim]])."
          en: "Confirm that [[h_placa]] is the thickness perpendicular to the plane, not one of the in-plane dimensions ([[a_dim]] or [[b_dim]])."
    next_step_rules:
      - id: hp_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[h_placa]] definido, calcular [[rho_s]] multiplicando por [[rho_vol]], y [[D_placa]] usando la fórmula de rigidez. Ambos son necesarios para obtener [[f_mn]]."
          en: "With [[h_placa]] defined, compute [[rho_s]] by multiplying by [[rho_vol]], and [[D_placa]] using the stiffness formula. Both are required to obtain [[f_mn]]."

  rho_s:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Densidad superficial de la placa; la inercia por unidad de área que se opone al movimiento vibratorio."
      en: "Plate surface mass density; the inertia per unit area opposing vibratory motion."
    summary_rules:
      - id: rs_summary_default
        when: "true"
        status: ok
        text:
          es: "[[rho_s]] resume la inercia superficial de la placa. Un valor elevado indica que la placa es pesada por unidad de área, lo que deprime las frecuencias modales. La relación entre rigidez y densidad superficial determina el espectro modal."
          en: "[[rho_s]] summarizes the plate surface inertia. A high value indicates a heavy plate per unit area, which depresses modal frequencies. The ratio of stiffness to surface density determines the modal spectrum."
    physical_reading_rules:
      - id: rs_reading_default
        when: "true"
        status: ok
        text:
          es: "[[rho_s]] aparece en el denominador bajo la raíz en la fórmula modal. Un valor doble de [[rho_s]] reduce [[f_mn]] por un factor raíz de dos, mientras que un valor doble de [[D_placa]] la aumenta en el mismo factor."
          en: "[[rho_s]] appears in the denominator under the square root in the modal formula. A doubled [[rho_s]] reduces [[f_mn]] by a factor of square root of two, while a doubled [[D_placa]] increases it by the same factor."
    coherence_rules:
      - id: rs_coherence_positive
        when: "rho_s <= 0"
        status: error
        text:
          es: "[[rho_s]] debe ser positiva. Un valor nulo o negativo no tiene significado físico para una placa material."
          en: "[[rho_s]] must be positive. A zero or negative value has no physical meaning for a material plate."
      - id: rs_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[rho_s]] es coherente con el producto de densidad volumétrica y espesor."
          en: "[[rho_s]] is consistent with the product of volumetric density and thickness."
    model_validity_rules:
      - id: rs_validity_default
        when: "true"
        status: ok
        text:
          es: "[[rho_s]] es uniforme en el modelo de placa homogénea. Para placas con recubrimientos o estratificadas, usar la densidad superficial equivalente de la sección compuesta."
          en: "[[rho_s]] is uniform in the homogeneous plate model. For coated or layered plates, use the equivalent surface density of the composite section."
    graph_rules:
      - id: rs_graph_default
        when: "true"
        status: ok
        text:
          es: "Aumentar [[rho_s]] comprime el espectro modal hacia frecuencias más bajas. Esto se visualiza en el gráfico como un desplazamiento de todos los picos hacia la izquierda."
          en: "Increasing [[rho_s]] compresses the modal spectrum towards lower frequencies. This is visualized in the graph as a leftward shift of all peaks."
    likely_errors:
      - id: rs_error_units
        when: "rho_s > 10000"
        status: warning
        text:
          es: "[[rho_s]] superior a 10 000 kg/m² es excepcional. Verificar que no se está usando densidad volumétrica (kg/m³) en lugar de superficial (kg/m²)."
          en: "[[rho_s]] above 10 000 kg/m² is exceptional. Verify that volumetric density (kg/m³) is not being used instead of surface density (kg/m²)."
      - id: rs_error_default
        when: "true"
        status: ok
        text:
          es: "Confirmar que [[rho_s]] ha sido calculada multiplicando [[rho_vol]] por [[h_placa]] antes de usarla en la fórmula de frecuencias modales."
          en: "Confirm that [[rho_s]] has been calculated by multiplying [[rho_vol]] by [[h_placa]] before using it in the modal frequency formula."
    next_step_rules:
      - id: rs_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[rho_s]] y [[D_placa]] calculados, combinarlos en la fórmula de [[f_mn]] para obtener el espectro modal completo de la placa."
          en: "With [[rho_s]] and [[D_placa]] computed, combine them in the [[f_mn]] formula to obtain the complete modal spectrum of the plate."

  T_mem:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Tensión superficial de la membrana; la fuerza restauradora por unidad de longitud que gobierna todas las frecuencias modales."
      en: "Membrane surface tension; the restoring force per unit length that governs all modal frequencies."
    summary_rules:
      - id: Tm_summary_high
        when: "T_mem > 1000"
        status: ok
        text:
          es: "[[T_mem]] indica una membrana con tensión elevada. Todas las frecuencias modales serán altas, con un espectro bien separado. Esto describe membranas industriales o instrumentos de percusión con parche muy tensado."
          en: "[[T_mem]] indicates a highly tensioned membrane. All modal frequencies will be high, with a well-separated spectrum. This describes industrial membranes or percussion instruments with a tightly tensioned head."
      - id: Tm_summary_default
        when: "true"
        status: ok
        text:
          es: "[[T_mem]] resume la tensión de pretensado de la membrana. Es el parámetro de afinado: aumentarlo eleva todas las frecuencias de resonancia de la membrana."
          en: "[[T_mem]] summarizes the membrane pretension. It is the tuning parameter: increasing it raises all resonance frequencies of the membrane."
    physical_reading_rules:
      - id: Tm_reading_default
        when: "true"
        status: ok
        text:
          es: "[[T_mem]] entra bajo la raíz cuadrada en la velocidad de propagación. Multiplicar [[T_mem]] por cuatro duplica todas las frecuencias modales. Esta relación es análoga a la de la cuerda vibrante."
          en: "[[T_mem]] enters under the square root in propagation speed. Multiplying [[T_mem]] by four doubles all modal frequencies. This relation is analogous to that of the vibrating string."
    coherence_rules:
      - id: Tm_coherence_positive
        when: "T_mem <= 0"
        status: error
        text:
          es: "[[T_mem]] debe ser positiva. Una membrana sin tensión no puede vibrar en modos resonantes."
          en: "[[T_mem]] must be positive. A membrane without tension cannot vibrate in resonant modes."
      - id: Tm_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[T_mem]] es coherente con el rango de tensiones de membrana típicas (10–10 000 N/m)."
          en: "[[T_mem]] is consistent with the typical membrane tension range (10–10 000 N/m)."
    model_validity_rules:
      - id: Tm_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo de membrana ideal supone que la rigidez a la flexión de la membrana es despreciable frente a la tensión. Para membranas gruesas, la rigidez a la flexión añade correcciones a [[f_mn]]."
          en: "The ideal membrane model assumes bending stiffness of the membrane is negligible compared to tension. For thick membranes, bending stiffness adds corrections to [[f_mn]]."
    graph_rules:
      - id: Tm_graph_default
        when: "true"
        status: ok
        text:
          es: "[[T_mem]] escala el espectro modal de la membrana. Mayor tensión desplaza todos los picos del espectro hacia frecuencias más altas de forma uniforme."
          en: "[[T_mem]] scales the membrane modal spectrum. Higher tension shifts all spectrum peaks uniformly to higher frequencies."
    likely_errors:
      - id: Tm_error_units
        when: "T_mem > 1e6"
        status: warning
        text:
          es: "[[T_mem]] superior a 10⁶ N/m es poco físico para membranas. Verificar si se ha introducido tensión normal en Pa en lugar de tensión superficial en N/m."
          en: "[[T_mem]] above 10⁶ N/m is not physical for membranes. Verify that normal stress in Pa has not been entered instead of surface tension in N/m."
      - id: Tm_error_default
        when: "true"
        status: ok
        text:
          es: "Confirmar que [[T_mem]] tiene unidades de N/m (fuerza por longitud), no N/m² (presión). La dimensión es diferente a la del módulo elástico."
          en: "Confirm that [[T_mem]] has units of N/m (force per length), not N/m² (pressure). The dimension is different from the elastic modulus."
    next_step_rules:
      - id: Tm_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[T_mem]] y [[rho_mem]] calculados, usar la fórmula de membrana para obtener [[f_mn]] y determinar si la frecuencia del modo fundamental está en el rango de excitación previsto."
          en: "With [[T_mem]] and [[rho_mem]] computed, use the membrane formula to obtain [[f_mn]] and determine whether the fundamental mode frequency is in the intended excitation range."

  rho_mem:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Densidad superficial de la membrana; la inercia por unidad de área que se opone a los modos vibratorios."
      en: "Membrane surface mass density; the inertia per unit area opposing vibratory modes."
    summary_rules:
      - id: rm_summary_default
        when: "true"
        status: ok
        text:
          es: "[[rho_mem]] resume la masa por unidad de área de la membrana. Un valor elevado deprime las frecuencias modales: una membrana más pesada resuena más lento. La relación entre [[T_mem]] y [[rho_mem]] determina la velocidad de onda en la membrana."
          en: "[[rho_mem]] summarizes mass per unit area of the membrane. A high value depresses modal frequencies: a heavier membrane resonates more slowly. The ratio of [[T_mem]] to [[rho_mem]] determines wave speed in the membrane."
    physical_reading_rules:
      - id: rm_reading_default
        when: "true"
        status: ok
        text:
          es: "[[rho_mem]] aparece bajo la raíz en el denominador. Duplicar [[rho_mem]] reduce [[f_mn]] por el factor raíz de dos, análogamente a la masa lineal en una cuerda. Es el factor de inercia del sistema membrana."
          en: "[[rho_mem]] appears under the root in the denominator. Doubling [[rho_mem]] reduces [[f_mn]] by the square root of two, analogously to linear mass density in a string. It is the inertia factor of the membrane system."
    coherence_rules:
      - id: rm_coherence_positive
        when: "rho_mem <= 0"
        status: error
        text:
          es: "[[rho_mem]] debe ser positiva. Una densidad nula es físicamente imposible."
          en: "[[rho_mem]] must be positive. Zero density is physically impossible."
      - id: rm_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[rho_mem]] es coherente con el rango de membranas reales (0.05 a 2 kg/m²)."
          en: "[[rho_mem]] is consistent with the range of real membranes (0.05 to 2 kg/m²)."
    model_validity_rules:
      - id: rm_validity_default
        when: "true"
        status: ok
        text:
          es: "[[rho_mem]] se asume uniforme en el modelo ideal. En membranas reforzadas o con parches adicionales, la densidad varía espacialmente y el modelo modal simple deja de ser exacto."
          en: "[[rho_mem]] is assumed uniform in the ideal model. In reinforced membranes or those with additional patches, density varies spatially and the simple modal model is no longer exact."
    graph_rules:
      - id: rm_graph_default
        when: "true"
        status: ok
        text:
          es: "Aumentar [[rho_mem]] comprime el espectro modal de la membrana hacia frecuencias más bajas, desplazando todos los picos hacia la izquierda en el gráfico."
          en: "Increasing [[rho_mem]] compresses the membrane modal spectrum towards lower frequencies, shifting all peaks leftward in the graph."
    likely_errors:
      - id: rm_error_volumetric
        when: "rho_mem > 100"
        status: warning
        text:
          es: "[[rho_mem]] superior a 100 kg/m² es inusual. Verificar que no se está usando densidad volumétrica (kg/m³) sin multiplicar por el espesor de la membrana."
          en: "[[rho_mem]] above 100 kg/m² is unusual. Verify that volumetric density (kg/m³) is not being used without multiplying by membrane thickness."
      - id: rm_error_default
        when: "true"
        status: ok
        text:
          es: "Confirmar que [[rho_mem]] tiene unidades de kg/m² y no kg/m³."
          en: "Confirm that [[rho_mem]] has units of kg/m² and not kg/m³."
    next_step_rules:
      - id: rm_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[rho_mem]] definida, calcular la velocidad de onda de la membrana como la raíz del cociente [[T_mem]]/[[rho_mem]] y a partir de ahí estimar [[f_mn]] para cualquier modo."
          en: "With [[rho_mem]] defined, compute the membrane wave speed as the square root of the ratio [[T_mem]]/[[rho_mem]] and from there estimate [[f_mn]] for any mode."

  a_dim:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Longitud de la placa o membrana en la dirección x; junto con el índice m determina la escala espacial del modo en esa dirección."
      en: "Plate or membrane length in the x direction; together with index m determines the spatial scale of the mode in that direction."
    summary_rules:
      - id: ad_summary_default
        when: "true"
        status: ok
        text:
          es: "[[a_dim]] resume la dimensión principal de la estructura. Aumentar [[a_dim]] reduce las frecuencias modales en la dirección x porque permite longtitudes de onda más largas. Es un parámetro puramente geométrico."
          en: "[[a_dim]] summarizes the main structural dimension. Increasing [[a_dim]] reduces modal frequencies in the x direction because it allows longer wavelengths. It is a purely geometric parameter."
    physical_reading_rules:
      - id: ad_reading_default
        when: "true"
        status: ok
        text:
          es: "[[a_dim]] aparece en el término (m/a)² de la fórmula modal. Al duplicar [[a_dim]], el término (m/a)² disminuye a la cuarta parte, reduciendo [[f_mn]] a la mitad para el modo dominante en x."
          en: "[[a_dim]] appears in the (m/a)² term of the modal formula. Doubling [[a_dim]] reduces the (m/a)² term to one quarter, halving [[f_mn]] for the x-dominant mode."
    coherence_rules:
      - id: ad_coherence_positive
        when: "a_dim <= 0"
        status: error
        text:
          es: "[[a_dim]] debe ser positiva. Una dimensión nula o negativa no tiene sentido físico."
          en: "[[a_dim]] must be positive. Zero or negative dimension has no physical meaning."
      - id: ad_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[a_dim]] es coherente como longitud geométrica positiva."
          en: "[[a_dim]] is consistent as a positive geometric length."
    model_validity_rules:
      - id: ad_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo rectangular requiere bordes rectos y paralelos. Para geometrías irregulares, las frecuencias modales deben calcularse numéricamente."
          en: "The rectangular model requires straight parallel edges. For irregular geometries, modal frequencies must be computed numerically."
    graph_rules:
      - id: ad_graph_default
        when: "true"
        status: ok
        text:
          es: "[[a_dim]] controla la escala espacial del patrón nodal en el eje x. En el gráfico SVG, las líneas nodales perpendiculares al eje x están separadas por [[a_dim]]/m."
          en: "[[a_dim]] controls the spatial scale of the nodal pattern along the x axis. In the SVG graph, nodal lines perpendicular to the x axis are separated by [[a_dim]]/m."
    likely_errors:
      - id: ad_error_units
        when: "a_dim > 100"
        status: warning
        text:
          es: "[[a_dim]] superior a 100 m es inusual para una placa o membrana en laboratorio. Verificar que el valor está en metros y no en centímetros."
          en: "[[a_dim]] above 100 m is unusual for a laboratory plate or membrane. Verify the value is in metres and not centimetres."
      - id: ad_error_default
        when: "true"
        status: ok
        text:
          es: "Confirmar que [[a_dim]] corresponde a la dimensión en la dirección del índice m, no en la dirección del índice n."
          en: "Confirm that [[a_dim]] corresponds to the dimension in the direction of index m, not in the direction of index n."
    next_step_rules:
      - id: ad_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[a_dim]] y [[b_dim]] definidas, es posible calcular el espectro modal completo para todos los pares (m,n) de interés y ordenarlos por frecuencia ascendente."
          en: "With [[a_dim]] and [[b_dim]] defined, the complete modal spectrum can be calculated for all (m,n) pairs of interest and ordered by ascending frequency."

  b_dim:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Anchura de la placa o membrana en la dirección y; junto con el índice n determina la escala espacial del modo en esa dirección."
      en: "Plate or membrane width in the y direction; together with index n determines the spatial scale of the mode in that direction."
    summary_rules:
      - id: bd_summary_default
        when: "true"
        status: ok
        text:
          es: "[[b_dim]] resume la segunda dimensión de la estructura. Si [[b_dim]] es muy diferente de [[a_dim]], el espectro modal pierde la simetría y los modos dominantes en una dirección tienen frecuencias muy distintas a los de la otra."
          en: "[[b_dim]] summarizes the second structural dimension. If [[b_dim]] is very different from [[a_dim]], the modal spectrum loses symmetry and modes dominant in one direction have very different frequencies from those in the other."
    physical_reading_rules:
      - id: bd_reading_default
        when: "true"
        status: ok
        text:
          es: "[[b_dim]] aparece en el término (n/b)² de la fórmula modal. Si [[b_dim]] es mucho mayor que [[a_dim]], los modos con n > 1 tienen frecuencias muy altas y el espectro se domina por variaciones en la dirección x."
          en: "[[b_dim]] appears in the (n/b)² term of the modal formula. If [[b_dim]] is much greater than [[a_dim]], modes with n > 1 have very high frequencies and the spectrum is dominated by x-direction variations."
    coherence_rules:
      - id: bd_coherence_positive
        when: "b_dim <= 0"
        status: error
        text:
          es: "[[b_dim]] debe ser positiva."
          en: "[[b_dim]] must be positive."
      - id: bd_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[b_dim]] es coherente como longitud geométrica positiva."
          en: "[[b_dim]] is consistent as a positive geometric length."
    model_validity_rules:
      - id: bd_validity_default
        when: "true"
        status: ok
        text:
          es: "El modelo rectangular es válido para placas y membranas con bordes rectilíneos y paralelos en las dos direcciones ortogonales."
          en: "The rectangular model is valid for plates and membranes with rectilinear parallel edges in both orthogonal directions."
    graph_rules:
      - id: bd_graph_default
        when: "true"
        status: ok
        text:
          es: "[[b_dim]] controla el espaciado de las líneas nodales paralelas al eje x en el gráfico SVG del patrón modal."
          en: "[[b_dim]] controls the spacing of nodal lines parallel to the x axis in the SVG graph of the modal pattern."
    likely_errors:
      - id: bd_error_swap
        when: "true"
        status: ok
        text:
          es: "Verificar que [[b_dim]] corresponde a la dimensión asociada al índice n. Intercambiar [[a_dim]] y [[b_dim]] en una placa rectangular no cuadrada produce frecuencias incorrectas."
          en: "Verify that [[b_dim]] corresponds to the dimension associated with index n. Swapping [[a_dim]] and [[b_dim]] in a non-square rectangular plate produces incorrect frequencies."
      - id: bd_error_default
        when: "true"
        status: ok
        text:
          es: "Para una placa cuadrada ([[a_dim]] igual a [[b_dim]]), los modos (m,n) y (n,m) tienen la misma frecuencia: verificar si la degeneración modal es relevante para el problema."
          en: "For a square plate ([[a_dim]] equal to [[b_dim]]), modes (m,n) and (n,m) have the same frequency: check whether modal degeneracy is relevant for the problem."
    next_step_rules:
      - id: bd_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[a_dim]] y [[b_dim]] definidas, calcular los primeros modos y verificar si existe degeneración (igualdad de frecuencias para modos permutados) cuando la geometría es cuadrada."
          en: "With [[a_dim]] and [[b_dim]] defined, compute the first modes and verify whether degeneracy (equal frequencies for permuted modes) exists when the geometry is square."

  rho_vol:
    magnitude_type: scalar_unsigned
    semantic_role:
      es: "Densidad volumétrica del material de la placa; insumo para calcular la densidad superficial."
      en: "Volumetric mass density of the plate material; input for computing surface mass density."
    summary_rules:
      - id: rv_summary_default
        when: "true"
        status: ok
        text:
          es: "[[rho_vol]] resume la masa por unidad de volumen del material. Indica qué tan pesado es el material independientemente de la geometría de la placa. Materiales más densos deprimirán las frecuencias modales a través de [[rho_s]]."
          en: "[[rho_vol]] summarizes mass per unit volume of the material. It indicates how heavy the material is regardless of plate geometry. Denser materials will depress modal frequencies through [[rho_s]]."
    physical_reading_rules:
      - id: rv_reading_default
        when: "true"
        status: ok
        text:
          es: "[[rho_vol]] multiplicado por [[h_placa]] da [[rho_s]], que entra en la fórmula modal. A igual espesor, un material más denso baja todas las frecuencias modales por el factor raíz del cociente de densidades."
          en: "[[rho_vol]] multiplied by [[h_placa]] gives [[rho_s]], which enters the modal formula. At equal thickness, a denser material lowers all modal frequencies by the square root of the density ratio."
    coherence_rules:
      - id: rv_coherence_positive
        when: "rho_vol <= 0"
        status: error
        text:
          es: "[[rho_vol]] debe ser positiva para cualquier material sólido real."
          en: "[[rho_vol]] must be positive for any real solid material."
      - id: rv_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[rho_vol]] es coherente con el rango de materiales sólidos comunes: aluminio 2700 kg/m³, acero 7850 kg/m³, madera 400–900 kg/m³."
          en: "[[rho_vol]] is consistent with common solid materials: aluminium 2700 kg/m³, steel 7850 kg/m³, wood 400–900 kg/m³."
    model_validity_rules:
      - id: rv_validity_default
        when: "true"
        status: ok
        text:
          es: "[[rho_vol]] se asume constante en el modelo de placa homogénea. Para materiales compuestos, usar la densidad efectiva de la sección."
          en: "[[rho_vol]] is assumed constant in the homogeneous plate model. For composite materials, use the effective density of the cross-section."
    graph_rules:
      - id: rv_graph_default
        when: "true"
        status: ok
        text:
          es: "[[rho_vol]] influye en el espectro modal a través de [[rho_s]]. Materiales más densos producen espectros desplazados hacia frecuencias más bajas."
          en: "[[rho_vol]] influences the modal spectrum through [[rho_s]]. Denser materials produce spectra shifted to lower frequencies."
    likely_errors:
      - id: rv_error_units
        when: "rho_vol < 100"
        status: warning
        text:
          es: "[[rho_vol]] inferior a 100 kg/m³ es inusual para sólidos estructurales. Verificar que el valor está en kg/m³ y no en g/cm³."
          en: "[[rho_vol]] below 100 kg/m³ is unusual for structural solids. Verify the value is in kg/m³ and not g/cm³."
      - id: rv_error_default
        when: "true"
        status: ok
        text:
          es: "Confirmar que [[rho_vol]] corresponde al material de la placa, no a una carga aplicada sobre ella."
          en: "Confirm that [[rho_vol]] corresponds to the plate material, not to a load applied on it."
    next_step_rules:
      - id: rv_next_default
        when: "true"
        status: ok
        text:
          es: "Multiplicar [[rho_vol]] por [[h_placa]] para obtener [[rho_s]], paso previo indispensable antes de calcular [[f_mn]] para la placa."
          en: "Multiply [[rho_vol]] by [[h_placa]] to obtain [[rho_s]], an essential prior step before computing [[f_mn]] for the plate."

  nu_p:
    magnitude_type: ratio
    semantic_role:
      es: "Coeficiente de Poisson del material; corrección de rigidez a la flexión que reduce ligeramente las frecuencias modales respecto al caso unidimensional."
      en: "Poisson's ratio of the material; bending stiffness correction that slightly reduces modal frequencies compared to the one-dimensional case."
    summary_rules:
      - id: nu_summary_default
        when: "true"
        status: ok
        text:
          es: "[[nu_p]] resume el acoplamiento lateral del material. A través del factor (1 - nu²) en el denominador de [[D_placa]], reduce ligeramente la rigidez efectiva. Para materiales de construcción típicos, esta corrección es del 5 al 20 %."
          en: "[[nu_p]] summarizes the lateral coupling of the material. Through the factor (1 - nu²) in the denominator of [[D_placa]], it slightly reduces effective stiffness. For typical construction materials this correction is 5 to 20 %."
    physical_reading_rules:
      - id: nu_reading_default
        when: "true"
        status: ok
        text:
          es: "[[nu_p]] cerca de 0.5 (como el caucho) reduce [[D_placa]] considerablemente. [[nu_p]] cerca de 0 (como el corcho) deja [[D_placa]] prácticamente igual al resultado unidimensional. La diferencia en frecuencias modales entre nu=0 y nu=0.3 es de aproximadamente el 5 %."
          en: "[[nu_p]] close to 0.5 (like rubber) considerably reduces [[D_placa]]. [[nu_p]] close to 0 (like cork) leaves [[D_placa]] nearly equal to the one-dimensional result. The difference in modal frequencies between nu=0 and nu=0.3 is about 5 %."
    coherence_rules:
      - id: nu_coherence_range
        when: "nu_p >= 0.5"
        status: error
        text:
          es: "[[nu_p]] mayor o igual que 0.5 es el límite de incompresibilidad. Para sólidos convencionales debe ser menor que 0.5. Revisar el valor introducido."
          en: "[[nu_p]] equal to or greater than 0.5 is the incompressibility limit. For conventional solids it must be less than 0.5. Check the entered value."
      - id: nu_coherence_default
        when: "true"
        status: ok
        text:
          es: "[[nu_p]] está dentro del rango físico para materiales sólidos convencionales."
          en: "[[nu_p]] is within the physical range for conventional solid materials."
    model_validity_rules:
      - id: nu_validity_default
        when: "true"
        status: ok
        text:
          es: "El coeficiente de Poisson se asume constante e isótropo en el modelo de placa de Kirchhoff. Para materiales anisótropos, usar los coeficientes de Poisson independientes en cada plano."
          en: "Poisson's ratio is assumed constant and isotropic in the Kirchhoff plate model. For anisotropic materials, use independent Poisson ratios in each plane."
    graph_rules:
      - id: nu_graph_default
        when: "true"
        status: ok
        text:
          es: "[[nu_p]] no produce un desplazamiento visible en el espectro modal a menos que sea cercano al límite de 0.5. Su efecto es una corrección global de escala."
          en: "[[nu_p]] does not produce a visible shift in the modal spectrum unless it is close to the limit of 0.5. Its effect is a global scale correction."
    likely_errors:
      - id: nu_error_default
        when: "true"
        status: ok
        text:
          es: "El error más común con [[nu_p]] es olvidar el factor (1 - nu²) en el denominador de [[D_placa]], sobreestimando la rigidez. Para acero (0.3), el error es del 9 %."
          en: "The most common error with [[nu_p]] is forgetting the (1 - nu²) factor in the denominator of [[D_placa]], overestimating stiffness. For steel (0.3), the error is 9 %."
    next_step_rules:
      - id: nu_next_default
        when: "true"
        status: ok
        text:
          es: "Con [[nu_p]] determinado, calcular el factor (1 - nu²) y aplicarlo al denominador de la fórmula de [[D_placa]] para obtener la rigidez correcta."
          en: "With [[nu_p]] determined, compute the factor (1 - nu²) and apply it to the denominator of the [[D_placa]] formula to obtain the correct stiffness."

cross_checks:
  - id: placa_vs_membrana
    description:
      es: "Una placa rígida y delgada puede comportarse como membrana cuando su rigidez a la flexión es mucho menor que la tensión interna. Verificar el cociente D/T·a² para establecer qué modelo aplica."
      en: "A thin rigid plate may behave as a membrane when its bending stiffness is much smaller than the internal tension. Check the D/(T·a²) ratio to establish which model applies."
  - id: modo_fundamental_dominante
    description:
      es: "El modo (1,1) siempre debe tener la frecuencia más baja. Si otro modo resulta más bajo, hay un error en los índices o en los parámetros."
      en: "Mode (1,1) must always have the lowest frequency. If another mode comes out lower, there is an error in the indices or parameters."

error_patterns:
  - id: confusion_placa_membrana
    description:
      es: "Usar la fórmula de placa cuando la estructura es una membrana (sin rigidez propia), o viceversa."
      en: "Using the plate formula when the structure is a membrane (with no bending stiffness), or vice versa."
  - id: indice_cero
    description:
      es: "Usar el índice 0 para el primer modo en lugar del índice 1, lo que genera frecuencias nulas erróneas."
      en: "Using index 0 for the first mode instead of index 1, generating spurious zero frequencies."
  - id: GPa_sin_convertir
    description:
      es: "Introducir el módulo de Young en GPa sin convertir a Pa, generando frecuencias modales 31 000 veces más altas que las reales."
      en: "Entering Young's modulus in GPa without converting to Pa, generating modal frequencies 31 000 times higher than the real values."

graph_binding:
  enabled: true
  type: Coord
  primary_channel: freq_axis
  secondary_channel: modal_spectrum
  description:
    es: "El gráfico principal es un espectro modal (Coord) con el número de modo en el eje horizontal y [[f_mn]] en el vertical. El gráfico SVG secundario muestra el patrón nodal del modo seleccionado."
    en: "The main graph is a modal spectrum (Coord) with mode number on the horizontal axis and [[f_mn]] on the vertical axis. The secondary SVG graph shows the nodal pattern of the selected mode."

mini_graph:
  enabled: true
  preferred_type: Coord
  description:
    es: "Mini-espectro con los primeros 6 modos de la placa o membrana."
    en: "Mini-spectrum with the first 6 modes of the plate or membrane."

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
    priority: [summary, likely_errors]
  extended_mode:
    show_all: true
`;export{e as default};
