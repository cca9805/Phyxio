export const GRAPH_TYPE_DEFAULTS = {
  Coord: {
    type: "Coord",
    graphType: "Coord",

    semanticRole: "law_relationship",
    readingMode: "axes_slope_trend",

    xAxis: {
      es: "magnitud independiente o parametro de barrido",
      en: "independent quantity or sweep parameter",
    },
    yAxis: {
      es: "magnitud dependiente representada",
      en: "represented dependent quantity",
    },

    relation: {
      es: "Muestra la relacion cuantitativa entre las magnitudes principales del leaf.",
      en: "Shows the quantitative relation between the main quantities of the leaf.",
    },

    physicalReading: {
      es: "Permite interpretar como cambia una magnitud fisica cuando varia otra, antes de sustituir valores en una formula.",
      en: "Helps interpret how one physical quantity changes when another varies, before substituting values into a formula.",
    },

    slopeMeaning: {
      es: "La pendiente indica la tasa de cambio de la magnitud dependiente respecto a la independiente cuando el modelo lo permite.",
      en: "The slope indicates the rate of change of the dependent quantity with respect to the independent one when the model allows it.",
    },

    interceptMeaning: {
      es: "Los cortes con los ejes indican valores iniciales, umbrales o condiciones limite segun el modelo fisico.",
      en: "Axis intercepts indicate initial values, thresholds, or boundary conditions depending on the physical model.",
    },

    curvatureMeaning: {
      es: "La curvatura indica si la relacion es lineal, cuadratica, inversa o cambia de regimen.",
      en: "Curvature indicates whether the relation is linear, quadratic, inverse, or changes regime.",
    },

    signMeaning: {
      es: "El signo indica sentido, orientacion, incremento, decremento o eleccion de referencia segun la magnitud representada.",
      en: "The sign indicates direction, orientation, increase, decrease, or reference choice depending on the represented quantity.",
    },

    formulaConnection: {
      es: "Conecta la lectura visual de la grafica con las formulas principales del leaf.",
      en: "Connects the visual reading of the graph with the main formulas of the leaf.",
    },

    modelConnection: {
      es: "La grafica debe interpretarse dentro de las hipotesis y limites de validez del modelo del leaf.",
      en: "The graph must be interpreted within the assumptions and validity limits of the leaf model.",
    },

    readingFocus: {
      es: "leer ejes, pendiente, tendencia, signos, cortes, curvatura y relacion entre magnitudes antes de usar formulas.",
      en: "read axes, slope, trend, signs, intercepts, curvature, and relation between quantities before using formulas.",
    },

    agentHints: {
      es: [
        "Identificar primero que representa cada eje.",
        "Distinguir si la relacion es lineal o no lineal.",
        "No interpretar la grafica como una escena de fuerzas si es Coord.",
      ],
      en: [
        "First identify what each axis represents.",
        "Distinguish whether the relation is linear or nonlinear.",
        "Do not interpret a Coord graph as a force scene.",
      ],
    },

    commonMistakes: {
      es: [
        "Confundir pendiente con valor de la magnitud.",
        "Aplicar una formula sin leer antes los ejes.",
        "Suponer proporcionalidad directa cuando la curva no es lineal.",
      ],
      en: [
        "Confusing slope with the value of the quantity.",
        "Applying a formula before reading the axes.",
        "Assuming direct proportionality when the curve is not linear.",
      ],
    },

    recommendedTab: "graficas",
  },

  Dcl: {
    type: "Dcl",
    graphType: "Dcl",

    semanticRole: "force_balance",
    readingMode: "forces_body_resultant",

    physicalReading: {
      es: "El diagrama muestra las fuerzas que actuan sobre el cuerpo seleccionado.",
      en: "The diagram shows the forces acting on the selected body.",
    },

    modelConnection: {
      es: "El DCL se interpreta dentro del modelo dinamico del leaf.",
      en: "The FBD is interpreted within the dynamic model of the leaf.",
    },

    formulaConnection: {
      es: "Conecta la lectura de fuerzas con las ecuaciones dinamicas por ejes.",
      en: "Connects the force reading with the dynamic equations by axis.",
    },

    readingFocus: {
      es: "identificar cuerpo, fuerzas reales, componentes, sentidos, equilibrio y resultante.",
      en: "identify body, real forces, components, directions, equilibrium, and resultant.",
    },

    agentHints: {
      es: [
        "Identificar primero el cuerpo seleccionado.",
        "Distinguir fuerzas reales, componentes y resultante.",
        "No tratar la fuerza neta como una fuerza nueva.",
      ],
      en: [
        "First identify the selected body.",
        "Distinguish real forces, components, and resultant.",
        "Do not treat net force as a new force.",
      ],
    },

    commonMistakes: {
      es: [
        "Dibujar fuerzas que actuan sobre otro cuerpo.",
        "Confundir componentes con fuerzas adicionales.",
        "Olvidar el sentido elegido como positivo.",
      ],
      en: [
        "Drawing forces that act on another body.",
        "Confusing components with additional forces.",
        "Forgetting the chosen positive direction.",
      ],
    },

    recommendedTab: "graficas",
  },

  Svg: {
    type: "Svg",
    graphType: "Svg",

    semanticRole: "physical_scene",
    readingMode: "scene_geometry_model",

    physicalReading: {
      es: "La escena representa visualmente el sistema fisico y sus relaciones principales.",
      en: "The scene visually represents the physical system and its main relations.",
    },

    modelConnection: {
      es: "La escena ayuda a identificar el modelo fisico antes de calcular.",
      en: "The scene helps identify the physical model before calculating.",
    },

    formulaConnection: {
      es: "Conecta la geometria o estructura visual de la escena con las magnitudes y formulas del leaf.",
      en: "Connects the geometry or visual structure of the scene with the quantities and formulas of the leaf.",
    },

    readingFocus: {
      es: "identificar objetos, posiciones, geometria, sentido fisico y limites del modelo.",
      en: "identify objects, positions, geometry, physical meaning, and model limits.",
    },

    agentHints: {
      es: [
        "Leer primero que objetos aparecen.",
        "Distinguir representacion cualitativa de medicion exacta.",
        "No buscar pendiente si no hay ejes.",
      ],
      en: [
        "First read which objects appear.",
        "Distinguish qualitative representation from exact measurement.",
        "Do not look for slope if there are no axes.",
      ],
    },

    commonMistakes: {
      es: [
        "Tomar la escena como una escala exacta.",
        "Confundir geometria visual con resultado numerico.",
      ],
      en: [
        "Treating the scene as an exact scale.",
        "Confusing visual geometry with a numerical result.",
      ],
    },

    recommendedTab: "graficas",
  },
};

export function getGraphTypeDefaults(type) {
  return GRAPH_TYPE_DEFAULTS[type] || {};
}
