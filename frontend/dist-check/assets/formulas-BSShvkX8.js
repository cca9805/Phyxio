const e=`- id: cuantizacion_carga
  title:
    es: Cuantización de la carga eléctrica
    en: Quantization of electric charge
  equation: "q = n * e"
  latex: "q = n \\\\cdot e"
  rearrangements:
    - target: q
      equation: "q = n * e"
      latex: "q = n \\\\cdot e"
    - target: n
      equation: "n = q / e"
      latex: "n = \\\\frac{q}{e}"
    - target: e
      equation: "e = q / n"
      latex: "e = \\\\frac{q}{n}"
  category: fundamental
  relation_type: definition
  physical_meaning:
    es: "La carga eléctrica de cualquier objeto es un múltiplo entero de la carga elemental. [[q]] es la carga total, [[n]] es el número entero de cargas elementales y [[e]] es la carga del protón (1.602×10⁻¹⁹ C). Un valor negativo de [[n]] corresponde a exceso de electrones."
    en: "The electric charge of any object is an integer multiple of the elementary charge. [[q]] is the total charge, [[n]] is the integer number of elementary charges and [[e]] is the proton charge (1.602×10⁻¹⁹ C). A negative value of [[n]] corresponds to an excess of electrons."
  constraints:
    - "n debe ser un número entero (positivo, negativo o nulo)"
    - "e > 0 siempre (la carga del protón es positiva por convención)"
    - "q puede ser positiva, negativa o nula"
  validity:
    es: "Válida para toda la materia observable. La cuantización de la carga es una ley fundamental sin excepciones experimentales conocidas hasta la escala de quarks, donde las cargas son fracciones de e pero nunca se observan libres."
    en: "Valid for all observable matter. Charge quantization is a fundamental law with no known experimental exceptions, down to the quark scale where charges are fractions of e but are never observed in isolation."
  dimension_check: "\`[I T] = [1] · [I T]\` → C = adimensional · C ✓"
  calculable: true
  motivo_no_calculable: ""
  used_in:
    - calculo de carga de objetos electrizados
    - determinacion de deficit o exceso de electrones
    - electrostatica de conductores
  interpretation_tags:
    - cuantizacion
    - carga_total
    - conteo_cargas
  result_semantics:
    target: q
    kind: signed_quantity
    sign_meaning:
      es: "Positivo indica exceso de protones (déficit de electrones); negativo indica exceso de electrones; cero indica objeto neutro."
      en: "Positive indicates proton excess (electron deficit); negative indicates electron excess; zero indicates a neutral object."
    absolute_value_meaning:
      es: "Módulo de la carga total acumulada en el objeto, medida en culombios."
      en: "Magnitude of the total charge accumulated on the object, measured in coulombs."
  domain_checks:
    - "n debe ser entero"
    - "e > 0"
    - "q / e debe dar un entero exacto si el modelo es válido"
  coherence_checks:
    - "Si |q| < 1.602e-19 C, el resultado es físicamente imposible"
    - "Si n no es entero, revisar si se está mezclando con carga continua"
  graph_implications:
    - "En la gráfica q vs n, cada punto válido cae exactamente sobre la recta de pendiente e"
    - "Puntos fuera de la recta indican error de medida o conversión"
  pedagogical_triggers:
    - "Si el alumno obtiene q no múltiplo de e, detectar confusión con carga continua o error de unidades"
    - "Si n es fraccionario, recordar que quarks no se observan libres en condiciones ordinarias"

- id: carga_neta_sistema
  title:
    es: Carga neta de un sistema
    en: Net charge of a system
  equation: "q_neta = q_pos + q_neg"
  latex: "q_{neta} = q_{pos} + q_{neg}"
  rearrangements:
    - target: q_neta
      equation: "q_neta = q_pos + q_neg"
      latex: "q_{neta} = q_{pos} + q_{neg}"
    - target: q_pos
      equation: "q_pos = q_neta - q_neg"
      latex: "q_{pos} = q_{neta} - q_{neg}"
    - target: q_neg
      equation: "q_neg = q_neta - q_pos"
      latex: "q_{neg} = q_{neta} - q_{pos}"
  category: derived
  relation_type: definition
  physical_meaning:
    es: "La carga neta de un sistema es la suma algebraica de todas las cargas que lo componen. [[q_pos]] es la carga positiva total (protones), [[q_neg]] la carga negativa total (electrones, con valor negativo), y [[q_neta]] el resultado. Este principio refleja la conservación de la carga: la carga neta de un sistema aislado no cambia."
    en: "The net charge of a system is the algebraic sum of all its constituent charges. [[q_pos]] is the total positive charge (protons), [[q_neg]] the total negative charge (electrons, with negative value), and [[q_neta]] the result. This principle reflects charge conservation: the net charge of an isolated system does not change."
  constraints:
    - "q_neg debe ser negativo o nulo por convencion"
    - "q_pos debe ser positivo o nulo por convencion"
    - "aplica a sistemas aislados cuando se usa para verificar conservacion"
  validity:
    es: "Válida en cualquier sistema, escala o condición. La conservación de la carga es una de las leyes más fundamentales y mejor verificadas de la física. No hay excepción experimental conocida."
    en: "Valid in any system, scale or condition. Charge conservation is one of the most fundamental and best-verified laws in physics. No experimental exception is known."
  dimension_check: "\`[I T] = [I T] + [I T]\` → C = C + C ✓"
  calculable: true
  motivo_no_calculable: ""
  used_in:
    - verificacion de conservacion de carga en reacciones
    - calculo de carga de sistemas complejos
    - analisis de conductores cargados
  interpretation_tags:
    - carga_neta
    - conservacion
    - sistema_aislado
  result_semantics:
    target: q_neta
    kind: signed_quantity
    sign_meaning:
      es: "Positivo indica carga neta positiva (más protones que electrones); negativo indica carga negativa neta; cero indica neutralidad eléctrica."
      en: "Positive indicates net positive charge (more protons than electrons); negative indicates net negative charge; zero indicates electrical neutrality."
    absolute_value_meaning:
      es: "Magnitud del desequilibrio de cargas en el sistema, en culombios."
      en: "Magnitude of the charge imbalance in the system, in coulombs."
  domain_checks:
    - "q_pos >= 0"
    - "q_neg <= 0"
    - "|q_neta| <= |q_pos| + |q_neg|"
  coherence_checks:
    - "Si q_neta cambia en un sistema supuestamente aislado, revisar si hay intercambio de cargas con el entorno"
    - "Si q_pos y q_neg son iguales en módulo, q_neta debe ser exactamente cero"
  graph_implications:
    - "En la gráfica q_neta vs n, la pendiente es la carga elemental e; un alejamiento de la recta indica transferencia de carga fraccionaria no física"
  pedagogical_triggers:
    - "Si el alumno suma los módulos de q_pos y q_neg en lugar de hacer suma algebraica, detectar error de signo"
    - "Si el alumno cree que la carga se destruye en una neutralización, aclarar conservación"

`;export{e as default};
