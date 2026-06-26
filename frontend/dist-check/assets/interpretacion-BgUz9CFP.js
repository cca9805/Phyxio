const e=`version: "v5"
id: interpretacion_espejos
leaf_id: espejos

nombre:
  es: Interpretacion de resultados de espejos
  en: Mirror results interpretation

scope:
  area: fisica-clasica
  bloque: electromagnetismo
  subbloque: optica
  parent_id: optica-geometrica
  ruta_relativa: fisica-clasica/electromagnetismo/optica/optica-geometrica/espejos

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
    priority:
      - summary
      - likely_errors

dependencies:
  formulas:
    - ecuacion_espejo
    - aumento_lateral
    - distancia_focal_radio
  magnitudes:
    - d_o
    - d_i
    - f
    - R
    - M

global_context:
  physical_domain:
    es: Optica geometrica, formacion de imagenes por reflexion
    en: Geometrical optics, image formation by reflection
  axis_convention:
    es: "Distancias positivas delante del espejo; negativas detras. Aumento positivo: imagen derecha."
    en: "Distances positive in front of the mirror; negative behind. Positive magnification: upright image."
  standard_assumptions:
    - Rayos paraxiales cercanos al eje optico
    - Espejo esferico de pequena apertura
    - Medio homogeneo entre objeto y espejo
  standard_warnings:
    - "La ecuacion del espejo falla para rayos marginales con gran aberracion esferica"
    - "La convencion de signos debe ser coherente en todo el problema"

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
      es: Lectura fisica
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
      es: Lectura del grafico
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
  d_i:
    magnitude_type: derived
    semantic_role:
      es: Distancia de la imagen al espejo
      en: Image distance from the mirror
    summary_rules:
      - id: di_summary
        when: "true"
        status: ok
        text:
          es: "La imagen se forma a [[d_i]] m del vertice. Un valor positivo indica imagen real; negativo, imagen virtual."
          en: "The image forms at [[d_i]] m from the vertex. A positive value indicates a real image; negative, a virtual image."
    physical_reading_rules:
      - id: di_reading_real
        when: "d_i > 0"
        status: ok
        text:
          es: "[[d_i]] es positivo, lo que significa que la imagen es real y se forma delante del espejo. Puede proyectarse sobre una pantalla."
          en: "[[d_i]] is positive, meaning the image is real and forms in front of the mirror. It can be projected onto a screen."
      - id: di_reading_virtual
        when: "d_i < 0"
        status: ok
        text:
          es: "[[d_i]] es negativo, lo que significa que la imagen es virtual y se forma detras del espejo. No puede recogerse en una pantalla."
          en: "[[d_i]] is negative, meaning the image is virtual and forms behind the mirror. It cannot be captured on a screen."
    coherence_rules:
      - id: di_coherence_sign
        when: "f > 0 and d_o > f"
        status: ok
        text:
          es: "Con espejo concavo y objeto mas alla del foco, [[d_i]] positivo es coherente."
          en: "With a concave mirror and object beyond the focus, positive [[d_i]] is consistent."
      - id: di_coherence_convex
        when: "f < 0"
        status: ok
        text:
          es: "Espejo convexo: [[d_i]] debe ser negativo. Si resulta positivo, revisar datos."
          en: "Convex mirror: [[d_i]] must be negative. If positive, check the data."
    model_validity_rules:
      - id: di_validity
        when: "true"
        status: ok
        text:
          es: "El modelo supone rayos paraxiales. Deja de valer si la apertura del espejo es grande respecto al radio de curvatura, generando aberracion esferica."
          en: "The model assumes paraxial rays. It breaks down if the mirror aperture is large relative to the radius of curvature, producing spherical aberration."
    graph_rules:
      - id: di_graph
        when: "true"
        status: ok
        text:
          es: "En el diagrama de rayos, [[d_i]] se mide desde el vertice hasta el punto donde convergen los rayos reflejados (imagen real) o sus prolongaciones (imagen virtual)."
          en: "In the ray diagram, [[d_i]] is measured from the vertex to the point where reflected rays converge (real image) or their extensions (virtual image)."
    likely_errors:
      - id: di_error_sign
        when: "true"
        status: warning
        text:
          es: "Un error frecuente es olvidar la convencion de signos y asignar signo positivo a una imagen virtual. Verifica que d_i negativo corresponde a imagen detras del espejo."
          en: "A common mistake is to forget the sign convention and assign a positive sign to a virtual image. Verify that negative d_i corresponds to an image behind the mirror."
    next_step_rules:
      - id: di_next_step
        when: "true"
        status: ok
        text:
          es: "Con [[d_i]] conocido, calcula [[M]] para determinar el tamano y la orientacion de la imagen."
          en: "With [[d_i]] known, calculate [[M]] to determine the image size and orientation."

  d_o:
    magnitude_type: parameter
    semantic_role:
      es: Distancia del objeto al espejo
      en: Object distance from the mirror
    summary_rules:
      - id: do_summary
        when: "true"
        status: ok
        text:
          es: "El objeto esta a [[d_o]] m del vertice del espejo."
          en: "The object is at [[d_o]] m from the mirror vertex."
    physical_reading_rules:
      - id: do_reading
        when: "true"
        status: ok
        text:
          es: "[[d_o]] es la distancia de referencia. Aumentar [[d_o]] aleja el objeto del foco y modifica la posicion y tamano de la imagen segun la ecuacion del espejo."
          en: "[[d_o]] is the reference distance. Increasing [[d_o]] moves the object away from the focus and modifies the image position and size according to the mirror equation."
    coherence_rules:
      - id: do_coherence
        when: "d_o > 0"
        status: ok
        text:
          es: "Objeto real con distancia positiva, coherente con la convencion estandar."
          en: "Real object with positive distance, consistent with the standard convention."
    model_validity_rules:
      - id: do_validity
        when: "true"
        status: ok
        text:
          es: "El modelo supone un objeto puntual o extenso pero con dimension transversal pequena respecto a d_o y R."
          en: "The model assumes a point or extended object with transverse size small compared to d_o and R."
    graph_rules:
      - id: do_graph
        when: "true"
        status: ok
        text:
          es: "En el diagrama SVG, [[d_o]] se representa como la distancia horizontal desde el objeto hasta el vertice del espejo."
          en: "In the SVG diagram, [[d_o]] is represented as the horizontal distance from the object to the mirror vertex."
    likely_errors:
      - id: do_error_focus
        when: "true"
        status: warning
        text:
          es: "Un error habitual es confundir la distancia del objeto al foco con la distancia del objeto al vertice. Asegurate de medir desde el vertice."
          en: "A common mistake is to confuse the object-to-focus distance with the object-to-vertex distance. Make sure to measure from the vertex."
    next_step_rules:
      - id: do_next_step
        when: "true"
        status: ok
        text:
          es: "Con [[d_o]] conocido, introduce [[f]] o [[R]] en la ecuacion del espejo para obtener [[d_i]]."
          en: "With [[d_o]] known, enter [[f]] or [[R]] into the mirror equation to obtain [[d_i]]."

  f:
    magnitude_type: parameter
    semantic_role:
      es: Distancia focal del espejo
      en: Focal length of the mirror
    summary_rules:
      - id: f_summary
        when: "true"
        status: ok
        text:
          es: "La distancia focal es [[f]] m. Positivo indica espejo concavo; negativo, convexo."
          en: "The focal length is [[f]] m. Positive indicates a concave mirror; negative, convex."
    physical_reading_rules:
      - id: f_reading
        when: "true"
        status: ok
        text:
          es: "[[f]] determina la potencia convergente o divergente del espejo. Un valor de f grande implica curvatura suave y menor desviacion de los rayos."
          en: "[[f]] determines the converging or diverging power of the mirror. A large f implies gentle curvature and less ray deflection."
    coherence_rules:
      - id: f_coherence
        when: "f == R / 2"
        status: ok
        text:
          es: "La focal es la mitad del radio de curvatura, coherente con la relacion f igual a R sobre 2."
          en: "The focal length is half the radius of curvature, consistent with the relation f equals R over 2."
    model_validity_rules:
      - id: f_validity
        when: "true"
        status: ok
        text:
          es: "El modelo supone reflexion especular en una superficie esferica de apertura pequena. Deja de valer en espejos parabolicos o de gran apertura."
          en: "The model assumes specular reflection on a spherical surface of small aperture. It breaks down for parabolic or large-aperture mirrors."
    graph_rules:
      - id: f_graph
        when: "true"
        status: ok
        text:
          es: "En el diagrama, el foco se marca como el punto F sobre el eje optico a distancia [[f]] del vertice."
          en: "In the diagram, the focus is marked as point F on the optical axis at distance [[f]] from the vertex."
    likely_errors:
      - id: f_error_sign
        when: "true"
        status: warning
        text:
          es: "Un error comun es olvidar que la focal de un espejo convexo es negativa y usar un valor positivo."
          en: "A common mistake is to forget that the focal length of a convex mirror is negative and use a positive value."
    next_step_rules:
      - id: f_next_step
        when: "true"
        status: ok
        text:
          es: "Con [[f]] y [[d_o]] conocidos, aplica la ecuacion del espejo para obtener [[d_i]]."
          en: "With [[f]] and [[d_o]] known, apply the mirror equation to obtain [[d_i]]."

  R:
    magnitude_type: parameter
    semantic_role:
      es: Radio de curvatura del espejo
      en: Radius of curvature of the mirror
    summary_rules:
      - id: R_summary
        when: "true"
        status: ok
        text:
          es: "El radio de curvatura es [[R]] m. La distancia focal es la mitad de este valor."
          en: "The radius of curvature is [[R]] m. The focal length is half this value."
    physical_reading_rules:
      - id: R_reading
        when: "true"
        status: ok
        text:
          es: "[[R]] fija la geometria del espejo. Reducir [[R]] aumenta la curvatura y la potencia del espejo, acercando el foco al vertice."
          en: "[[R]] sets the mirror geometry. Reducing [[R]] increases the curvature and mirror power, bringing the focus closer to the vertex."
    coherence_rules:
      - id: R_coherence
        when: "R == 2 * f"
        status: ok
        text:
          es: "Coherente: R es el doble de f."
          en: "Consistent: R is twice f."
    model_validity_rules:
      - id: R_validity
        when: "true"
        status: ok
        text:
          es: "El modelo supone superficie perfectamente esferica. Deja de valer si el espejo tiene defectos de fabricacion o forma no esferica."
          en: "The model assumes a perfectly spherical surface. It breaks down if the mirror has manufacturing defects or a non-spherical shape."
    graph_rules:
      - id: R_graph
        when: "true"
        status: ok
        text:
          es: "En el diagrama, el centro de curvatura C se situa sobre el eje optico a distancia [[R]] del vertice."
          en: "In the diagram, the centre of curvature C lies on the optical axis at distance [[R]] from the vertex."
    likely_errors:
      - id: R_error_double
        when: "true"
        status: warning
        text:
          es: "Un error frecuente es confundir R con f y usar el radio como si fuera la focal, obteniendo resultados con factor 2 de error."
          en: "A common mistake is to confuse R with f and use the radius as if it were the focal length, producing results off by a factor of 2."
    next_step_rules:
      - id: R_next_step
        when: "true"
        status: ok
        text:
          es: "Con [[R]] conocido, calcula [[f]] como la mitad de [[R]] y luego aplica la ecuacion del espejo."
          en: "With [[R]] known, calculate [[f]] as half of [[R]] and then apply the mirror equation."

  M:
    magnitude_type: derived
    semantic_role:
      es: Aumento lateral
      en: Lateral magnification
    summary_rules:
      - id: M_summary
        when: "true"
        status: ok
        text:
          es: "El aumento lateral es [[M]]. Indica el tamano relativo y la orientacion de la imagen respecto al objeto."
          en: "The lateral magnification is [[M]]. It indicates the relative size and orientation of the image with respect to the object."
    physical_reading_rules:
      - id: M_reading_inverted
        when: "M < 0"
        status: ok
        text:
          es: "[[M]] es negativo: la imagen esta invertida respecto al objeto. Esto es tipico de imagenes reales formadas por espejos concavos con el objeto mas alla del foco."
          en: "[[M]] is negative: the image is inverted with respect to the object. This is typical of real images formed by concave mirrors with the object beyond the focus."
      - id: M_reading_upright
        when: "M > 0"
        status: ok
        text:
          es: "[[M]] es positivo: la imagen es derecha. Esto ocurre en espejos convexos y en espejos concavos con el objeto entre el foco y el vertice."
          en: "[[M]] is positive: the image is upright. This occurs in convex mirrors and in concave mirrors with the object between the focus and the vertex."
    coherence_rules:
      - id: M_coherence
        when: "true"
        status: ok
        text:
          es: "Verificar que el signo de [[M]] es coherente con el signo de [[d_i]] y [[d_o]]: M debe ser igual a menos d_i sobre d_o."
          en: "Verify that the sign of [[M]] is consistent with the signs of [[d_i]] and [[d_o]]: M must equal minus d_i over d_o."
    model_validity_rules:
      - id: M_validity
        when: "true"
        status: ok
        text:
          es: "El aumento lateral es valido dentro de la aproximacion paraxial. Para objetos extensos que subtienden angulos grandes, el aumento varia con la posicion sobre el objeto."
          en: "Lateral magnification is valid within the paraxial approximation. For extended objects subtending large angles, magnification varies across the object."
    graph_rules:
      - id: M_graph
        when: "true"
        status: ok
        text:
          es: "En el diagrama, [[M]] se visualiza como la relacion entre la altura de la imagen y la altura del objeto."
          en: "In the diagram, [[M]] is visualised as the ratio between the image height and the object height."
    likely_errors:
      - id: M_error_sign
        when: "true"
        status: warning
        text:
          es: "Un error comun es olvidar el signo negativo en la definicion de M y creer que la imagen es derecha cuando en realidad esta invertida."
          en: "A common mistake is to forget the negative sign in the definition of M and believe the image is upright when it is actually inverted."
    next_step_rules:
      - id: M_next_step
        when: "true"
        status: ok
        text:
          es: "Con [[M]] y la altura del objeto conocidos, calcula la altura de la imagen multiplicando ambos valores."
          en: "With [[M]] and the object height known, calculate the image height by multiplying both values."

cross_checks:
  - id: mirror_equation_check
    type: equality
    condition: "1/d_o + 1/d_i == 1/f"
    message:
      es: "La ecuacion del espejo debe cumplirse."
      en: "The mirror equation must hold."

error_patterns:
  - id: confuse_f_R
    description:
      es: "Confundir la distancia focal con el radio de curvatura."
      en: "Confusing the focal length with the radius of curvature."
  - id: wrong_sign_convex
    description:
      es: "Usar focal positiva para un espejo convexo."
      en: "Using a positive focal length for a convex mirror."

graph_binding:
  enabled: true
  graph_type: Svg
  primary_variable: d_o
  secondary_variable: d_i
  parameters:
    - f

mini_graph:
  enabled: true
  preferred_type: Svg

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
