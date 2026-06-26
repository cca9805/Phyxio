const e=`version: 5\r
topic:\r
  id: coordenadas-generalizadas\r
  title:\r
    es: Coordenadas generalizadas\r
    en: Generalized Coordinates\r
\r
formulas:\r
- id: posicion_generalizada\r
  title: { es: Posición como función de coordenadas generalizadas, en: Position as a function of generalized coordinates }\r
  equation: r_vec = r_vec(q,t)\r
  latex: \\vec r=\\vec r(q_i,t)\r
  category: parametrizacion\r
  relation_type: mapa_configuracion\r
  physical_meaning:\r
    es: Expresa la posición física como imagen de las coordenadas generalizadas y del tiempo.\r
    en: Expresses physical position as the image of generalized coordinates and time.\r
  constraints: [ carta_valida, coordenadas_independientes ]\r
  validity:\r
    es: Válida localmente mientras la carta describa la configuración sin ambigüedad.\r
    en: Locally valid while the chart describes the configuration without ambiguity.\r
  dimension_check: "[L] = [L]"\r
  calculable: false\r
  motivo_no_calculable: { es: "Requiere especificar el mapa geométrico concreto.", en: "Requires specifying the concrete geometric map." }\r
  used_in: [ velocidad_generalizada, energia_cinetica_generalizada ]\r
  interpretation_tags: [ coordenadas_generalizadas, parametrizacion, configuracion ]\r
  result_semantics:\r
    target: r_vec\r
  domain_checks: [ carta_no_singular ]\r
  coherence_checks: [ posicion_con_dimension_de_longitud ]\r
  graph_implications: "El gráfico debe mostrar cómo cambiar [[q]] mueve la posición física [[r_vec]]."\r
  pedagogical_triggers: [ confundir_coordenada_con_posicion, carta_singular ]\r
  rearrangements:\r
  - target: r_vec\r
    equation: r_vec(q,t)\r
  variables: [ r_vec, q, t ]\r
\r
- id: velocidad_generalizada\r
  title: { es: Velocidad inducida por coordenadas generalizadas, en: Velocity induced by generalized coordinates }\r
  equation: v = qdot\r
  latex: \\vec v=\\sum_i\\frac{\\partial \\vec r}{\\partial q_i}\\dot q_i+\\frac{\\partial \\vec r}{\\partial t}\r
  category: cinematica_generalizada\r
  relation_type: derivada_temporal\r
  physical_meaning:\r
    es: Obtiene la velocidad física diferenciando la parametrización respecto a coordenadas y tiempo.\r
    en: Obtains physical velocity by differentiating the parametrization with respect to coordinates and time.\r
  constraints: [ mapa_diferenciable ]\r
  validity:\r
    es: Válida para mapas de configuración diferenciables y coordenadas suficientemente suaves.\r
    en: Valid for differentiable configuration maps and sufficiently smooth coordinates.\r
  dimension_check: "[L T^-1] = [L/q][q T^-1]"\r
  calculable: false\r
  motivo_no_calculable: { es: "Requiere conocer derivadas parciales del mapa de posición.", en: "Requires knowing partial derivatives of the position map." }\r
  used_in: [ energia_cinetica_generalizada ]\r
  interpretation_tags: [ velocidad, jacobiano, coordenadas_generalizadas ]\r
  result_semantics:\r
    target: v\r
  domain_checks: [ qdot_finita ]\r
  coherence_checks: [ si_qdot_es_cero_y_no_hay_dependencia_temporal_la_velocidad_se_anula ]\r
  graph_implications: "El gráfico debe mostrar que [[qdot]] controla la velocidad física [[v]]."\r
  pedagogical_triggers: [ olvidar_derivada_temporal_explicita, confundir_qdot_con_v ]\r
  rearrangements:
  - target: v
    equation: v
  variables: [ v, q, qdot, r_vec, t ]\r
\r
- id: energia_cinetica_generalizada\r
  title: { es: Energía cinética en coordenadas generalizadas, en: Kinetic energy in generalized coordinates }\r
  equation: T = 1/2*m*v^2\r
  latex: T=\\frac12 m\\,\\vec v\\cdot\\vec v\r
  category: energia\r
  relation_type: energia_cinetica\r
  physical_meaning:\r
    es: Calcula la energía cinética usando la velocidad física inducida por las coordenadas generalizadas.\r
    en: Computes kinetic energy using the physical velocity induced by generalized coordinates.\r
  constraints: [ m > 0 ]\r
  validity:\r
    es: Válida para una partícula o elemento equivalente con masa constante y velocidad bien definida.\r
    en: Valid for a particle or equivalent element with constant mass and well-defined velocity.\r
  dimension_check: "[M L^2 T^-2] = [M][L^2 T^-2]"\r
  calculable: true\r
  motivo_no_calculable: { es: "Requiere [[m]] y [[v]].", en: "Requires [[m]] and [[v]]." }\r
  used_in: [ modelos, teoria, ejemplos, interpretacion ]\r
  interpretation_tags: [ energia, metrica_cinetica, coordenadas_generalizadas ]\r
  result_semantics:\r
    target: T\r
  domain_checks: [ m > 0 ]\r
  coherence_checks: [ T >= 0 ]\r
  graph_implications: "La energía [[T]] crece cuadráticamente con la rapidez física inducida por [[qdot]]."\r
  pedagogical_triggers: [ usar_qdot_como_si_fuera_v, ignorar_metrica ]\r
  rearrangements:\r
  - target: T\r
    equation: 0.5*m*v^2\r
  variables: [ T, m, v, qdot ]\r
\r
- id: x_desde_polar\r
  title: { es: Componente x desde coordenadas polares, en: x component from polar coordinates }\r
  equation: x = r*cos(theta)\r
  latex: x=r\\cos(\\\\theta)\r
  category: cambio_de_base\r
  relation_type: proyeccion_cartesiana\r
  physical_meaning:\r
    es: Convierte la coordenada radial y angular en la proyección cartesiana horizontal.\r
    en: Converts radial and angular coordinates into horizontal Cartesian projection.\r
  constraints: [ r >= 0 ]\r
  validity:\r
    es: Válida en el plano euclídeo con convención angular consistente.\r
    en: Valid in Euclidean plane with a consistent angular convention.\r
  dimension_check: "[L] = [L]"\r
  calculable: true\r
  motivo_no_calculable: { es: "Requiere [[r]] y [[theta]].", en: "Requires [[r]] and [[theta]]." }\r
  used_in: [ radio_cartesiano ]\r
  interpretation_tags: [ coordenadas, proyeccion, cambio_de_representacion ]\r
  result_semantics:\r
    target: x\r
  domain_checks: [ r >= 0 ]\r
  coherence_checks: [ abs(x) <= r ]\r
  graph_implications: "Para [[r]] fijo, [[x]] oscila con [[theta]] y cambia de signo entre cuadrantes."\r
  pedagogical_triggers: [ cuadrantes, seno_coseno ]\r
  rearrangements:\r
  - target: x\r
    equation: r*cos(theta)\r
  - target: r\r
    equation: x/cos(theta)\r
  variables: [ x, r, theta ]\r
\r
- id: y_desde_polar\r
  title: { es: Componente y desde coordenadas polares, en: y component from polar coordinates }\r
  equation: y = r*sin(theta)\r
  latex: y=r\\sin(\\\\theta)\r
  category: cambio_de_base\r
  relation_type: proyeccion_cartesiana\r
  physical_meaning:\r
    es: Convierte la coordenada radial y angular en la proyección cartesiana vertical.\r
    en: Converts radial and angular coordinates into vertical Cartesian projection.\r
  constraints: [ r >= 0 ]\r
  validity:\r
    es: Válida en el plano euclídeo con referencia angular bien definida.\r
    en: Valid in Euclidean plane with a well-defined angular reference.\r
  dimension_check: "[L] = [L]"\r
  calculable: true\r
  motivo_no_calculable: { es: "Requiere [[r]] y [[theta]].", en: "Requires [[r]] and [[theta]]." }\r
  used_in: [ radio_cartesiano ]\r
  interpretation_tags: [ coordenadas, proyeccion, cambio_de_representacion ]\r
  result_semantics:\r
    target: y\r
  domain_checks: [ r >= 0 ]\r
  coherence_checks: [ abs(y) <= r ]\r
  graph_implications: "Para [[r]] fijo, [[y]] alcanza extremos en theta = pi/2 y theta = -pi/2."\r
  pedagogical_triggers: [ cuadrantes, seno_coseno ]\r
  rearrangements:\r
  - target: y\r
    equation: r*sin(theta)\r
  - target: r\r
    equation: y/sin(theta)\r
  variables: [ y, r, theta ]\r
\r
- id: radio_cartesiano\r
  title: { es: Radio desde coordenadas cartesianas, en: Radius from Cartesian coordinates }\r
  equation: r = sqrt(x^2 + y^2)\r
  latex: r=\\sqrt{x^2+y^2}\r
  category: cambio_de_base\r
  relation_type: norma\r
  physical_meaning:\r
    es: Recupera la distancia al origen a partir de las componentes cartesianas.\r
    en: Recovers distance to the origin from Cartesian components.\r
  constraints: [ x^2 + y^2 >= 0 ]\r
  validity:\r
    es: Válida en geometría euclídea bidimensional.\r
    en: Valid in two-dimensional Euclidean geometry.\r
  dimension_check: "[L] = sqrt([L]^2 + [L]^2)"\r
  calculable: true\r
  motivo_no_calculable: { es: "Requiere [[x]] y [[y]].", en: "Requires [[x]] and [[y]]." }\r
  used_in: [ x_desde_polar, y_desde_polar ]\r
  interpretation_tags: [ distancia, geometria, conversion ]\r
  result_semantics:\r
    target: r\r
  domain_checks: [ x^2 + y^2 >= 0 ]\r
  coherence_checks: [ r >= 0 ]\r
  graph_implications: "Curvas de [[r]] constante corresponden a circunferencias en el plano [[x]]-[[y]]."\r
  pedagogical_triggers: [ pitagoras, norma ]\r
  rearrangements:\r
  - target: r\r
    equation: sqrt(x^2 + y^2)\r
  variables: [ r, x, y ]\r
\r
- id: grados_libertad\r
  title: { es: Conteo de grados de libertad, en: Degree-of-freedom count }\r
  equation: f = 3*n - C\r
  latex: f=3n-C\r
  category: modelizacion\r
  relation_type: conteo_estructural\r
  physical_meaning:\r
    es: Estima las coordenadas independientes requeridas tras imponer ligaduras.\r
    en: Estimates independent coordinates required after applying constraints.\r
  constraints: [ n >= 1, C >= 0, C <= 3*n ]\r
  validity:\r
    es: Válida para conteo estructural de sistemas tridimensionales discretos con ligaduras independientes.\r
    en: Valid for structural counting of discrete three-dimensional systems with independent constraints.\r
  dimension_check: "[1] = [1]"\r
  calculable: true\r
  motivo_no_calculable: { es: "Requiere [[n]] y [[C]].", en: "Requires [[n]] and [[C]]." }\r
  used_in: []\r
  interpretation_tags: [ ligaduras, modelizacion, reduccion ]\r
  result_semantics:\r
    target: f\r
  domain_checks: [ n >= 1, C >= 0, C <= 3*n ]\r
  coherence_checks: [ f >= 0 ]\r
  graph_implications: "Al aumentar [[C]] con [[n]] fijo, [[f]] decrece linealmente."\r
  pedagogical_triggers: [ conteo, independencia_de_ligaduras ]\r
  rearrangements:\r
  - target: f\r
    equation: 3*n - C\r
  - target: C\r
    equation: 3*n - f\r
  variables: [ f, n, C ]\r
\r
ui:\r
  default_formula: posicion_generalizada\r
  groups:\r
  - title:\r
      es: N?cleo generalizado\r
      en: Generalized core\r
    items: [ posicion_generalizada, velocidad_generalizada, energia_cinetica_generalizada ]\r
  - title:\r
      es: Conversión de coordenadas\r
      en: Coordinate conversion\r
    items: [ x_desde_polar, y_desde_polar, radio_cartesiano ]\r
  - title:\r
      es: Estructura del sistema\r
      en: System structure\r
    items: [ grados_libertad ]\r
`;export{e as default};
