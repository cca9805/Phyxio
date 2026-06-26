const e=`formulas:
  - id: ecuacion_lente_delgada
    title:
      es: Ecuacion de la lente delgada
      en: Thin lens equation
    equation: "1/f = 1/d_o + 1/d_i"
    latex: "\\\\frac{1}{f} = \\\\frac{1}{d_o} + \\\\frac{1}{d_i}"
    rearrangements:
      - target: d_i
        equation: "d_i = f * d_o / (d_o - f)"
        latex: "d_i = \\\\frac{f \\\\cdot d_o}{d_o - f}"
      - target: d_o
        equation: "d_o = f * d_i / (d_i - f)"
        latex: "d_o = \\\\frac{f \\\\cdot d_i}{d_i - f}"
      - target: f
        equation: "f = d_o * d_i / (d_o + d_i)"
        latex: "f = \\\\frac{d_o \\\\cdot d_i}{d_o + d_i}"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: "Relaciona la distancia focal de una lente delgada con las distancias del objeto y la imagen, determinando la posicion de la imagen para un objeto dado."
      en: "Relates the focal length of a thin lens to the object and image distances, determining the image position for a given object."
    constraints:
      - "Lente delgada (espesor despreciable frente a distancias de trabajo)"
      - "Aproximacion paraxial (angulos pequenos con el eje optico)"
      - "Medio homogeneo a ambos lados de la lente"
    validity:
      es: "Valida para lentes con espesor mucho menor que su distancia focal y rayos que forman angulos pequenos con el eje optico."
      en: "Valid for lenses whose thickness is much less than their focal length and rays forming small angles with the optical axis."
    dimension_check: "[L]^-1 = [L]^-1 + [L]^-1"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - teoria
      - ejemplos
      - interpretacion
    interpretation_tags:
      - posicion_imagen
      - convergencia
      - divergencia
    result_semantics:
      target: d_i
      kind: distance
      sign_meaning:
        es: "Positivo indica imagen real al lado opuesto de la lente; negativo indica imagen virtual del mismo lado que el objeto."
        en: "Positive indicates a real image on the opposite side of the lens; negative indicates a virtual image on the same side as the object."
      absolute_value_meaning:
        es: "Distancia en metros entre la lente y la imagen formada."
        en: "Distance in metres between the lens and the formed image."
    domain_checks:
      - variable: d_o
        condition: "d_o > 0"
        message:
          es: "La distancia del objeto debe ser positiva para un objeto real."
          en: "The object distance must be positive for a real object."
      - variable: f
        condition: "f != 0"
        message:
          es: "La distancia focal no puede ser cero (la lente debe tener potencia optica)."
          en: "The focal length cannot be zero (the lens must have optical power)."
    coherence_checks:
      - condition: "d_o > f and f > 0"
        message:
          es: "Objeto mas alla del foco de lente convergente: la imagen debe ser real (d_i positivo)."
          en: "Object beyond the focus of a converging lens: the image must be real (positive d_i)."
      - condition: "f < 0"
        message:
          es: "Lente divergente: la imagen siempre es virtual (d_i negativo) con objeto real."
          en: "Diverging lens: the image is always virtual (negative d_i) with a real object."
    graph_implications:
      es: "En el grafico Svg la posicion de la imagen se desplaza al variar d_o; al cruzar el foco, d_i cambia de signo."
      en: "In the Svg graph the image position shifts as d_o varies; when it crosses the focus, d_i changes sign."
    pedagogical_triggers:
      - trigger: "d_o < f and f > 0"
        message:
          es: "El objeto esta entre la lente convergente y el foco: la imagen es virtual, derecha y amplificada."
          en: "The object is between the converging lens and the focus: the image is virtual, upright and magnified."

  - id: aumento_lateral
    title:
      es: Aumento lateral
      en: Lateral magnification
    equation: "m = -d_i / d_o"
    latex: "m = -\\\\frac{d_i}{d_o}"
    rearrangements:
      - target: m
        equation: "m = -d_i / d_o"
        latex: "m = -\\\\frac{d_i}{d_o}"
      - target: d_i
        equation: "d_i = -m * d_o"
        latex: "d_i = -m \\\\cdot d_o"
      - target: d_o
        equation: "d_o = -d_i / m"
        latex: "d_o = -\\\\frac{d_i}{m}"
    category: derived
    relation_type: definition
    physical_meaning:
      es: "Cuantifica la relacion entre el tamano de la imagen y el del objeto; el signo indica si la imagen esta invertida o derecha."
      en: "Quantifies the ratio between image size and object size; the sign indicates whether the image is inverted or upright."
    constraints:
      - "Requiere d_o y d_i obtenidos de la ecuacion de la lente"
      - "Aproximacion paraxial"
    validity:
      es: "Valida siempre que la ecuacion de la lente delgada sea aplicable."
      en: "Valid whenever the thin lens equation is applicable."
    dimension_check: "[1] = [L] / [L]"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - teoria
      - ejemplos
      - interpretacion
    interpretation_tags:
      - tamano_imagen
      - orientacion
      - ampliacion
    result_semantics:
      target: m
      kind: ratio
      sign_meaning:
        es: "Positivo indica imagen derecha; negativo indica imagen invertida respecto al objeto."
        en: "Positive indicates an upright image; negative indicates an inverted image relative to the object."
      absolute_value_meaning:
        es: "Factor por el cual se amplifica o reduce el tamano del objeto."
        en: "Factor by which the object size is magnified or reduced."
    domain_checks:
      - variable: d_o
        condition: "d_o > 0"
        message:
          es: "La distancia del objeto debe ser positiva."
          en: "The object distance must be positive."
    coherence_checks:
      - condition: "d_i > 0 and m < 0"
        message:
          es: "Imagen real (d_i positivo) implica imagen invertida (m negativo)."
          en: "Real image (positive d_i) implies inverted image (negative m)."
      - condition: "d_i < 0 and m > 0"
        message:
          es: "Imagen virtual (d_i negativo) implica imagen derecha (m positivo)."
          en: "Virtual image (negative d_i) implies upright image (positive m)."
    graph_implications:
      es: "El tamano y orientacion de la flecha de imagen en el Svg son proporcionales al aumento lateral."
      en: "The size and orientation of the image arrow in the Svg are proportional to the lateral magnification."
    pedagogical_triggers:
      - trigger: "m > 0 and d_i > 0"
        message:
          es: "Incoherencia: imagen real con aumento positivo. Revisar signos en la sustitucion."
          en: "Incoherence: real image with positive magnification. Check the signs in the substitution."

  - id: ecuacion_fabricante_lentes
    title:
      es: Ecuacion del fabricante de lentes
      en: Lensmaker's equation
    equation: "1/f = (n - 1) * (1/R1 - 1/R2)"
    latex: "\\\\frac{1}{f} = (n - 1)\\\\left(\\\\frac{1}{R_1} - \\\\frac{1}{R_2}\\\\right)"
    rearrangements:
      - target: f
        equation: "f = 1 / ((n - 1) * (1/R1 - 1/R2))"
        latex: "f = \\\\frac{1}{(n - 1)\\\\left(\\\\frac{1}{R_1} - \\\\frac{1}{R_2}\\\\right)}"
      - target: n
        equation: "n = 1 + 1 / (f * (1/R1 - 1/R2))"
        latex: "n = 1 + \\\\frac{1}{f \\\\left(\\\\frac{1}{R_1} - \\\\frac{1}{R_2}\\\\right)}"
    category: fundamental
    relation_type: constitutive_relation
    physical_meaning:
      es: "Conecta la distancia focal de la lente con sus propiedades geometricas (radios de curvatura) y el indice de refraccion del material."
      en: "Connects the focal length of the lens to its geometric properties (radii of curvature) and the refractive index of the material."
    constraints:
      - "Lente delgada en aire (medio exterior con indice 1)"
      - "Superficies esfericas"
      - "Espesor despreciable frente a los radios"
    validity:
      es: "Valida para lentes delgadas en aire con superficies esfericas y espesor mucho menor que los radios de curvatura."
      en: "Valid for thin lenses in air with spherical surfaces and thickness much less than the radii of curvature."
    dimension_check: "[L]^-1 = [1] * [L]^-1"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - teoria
      - ejemplos
      - interpretacion
    interpretation_tags:
      - focal_geometria
      - material_optico
    result_semantics:
      target: f
      kind: distance
      sign_meaning:
        es: "Positivo indica lente convergente; negativo indica lente divergente."
        en: "Positive indicates a converging lens; negative indicates a diverging lens."
      absolute_value_meaning:
        es: "Distancia en metros entre el centro de la lente y su foco."
        en: "Distance in metres between the lens centre and its focus."
    domain_checks:
      - variable: n
        condition: "n > 1"
        message:
          es: "El indice de refraccion del material de la lente debe ser mayor que 1."
          en: "The refractive index of the lens material must be greater than 1."
    coherence_checks:
      - condition: "R1 > 0 and R2 < 0 and f > 0"
        message:
          es: "Lente biconvexa (R1 positivo, R2 negativo) debe dar focal positiva (convergente)."
          en: "Biconvex lens (positive R1, negative R2) must give positive focal length (converging)."
    graph_implications:
      es: "La forma de la lente en el Svg (biconvexa, biconcava, menisco) refleja los signos de R1 y R2."
      en: "The lens shape in the Svg (biconvex, biconcave, meniscus) reflects the signs of R1 and R2."
    pedagogical_triggers:
      - trigger: "f < 0 and R1 > 0 and R2 < 0"
        message:
          es: "Focal negativa con R1 positivo y R2 negativo es incoherente: revisar la convencion de signos."
          en: "Negative focal length with positive R1 and negative R2 is incoherent: check the sign convention."
`;export{e as default};
