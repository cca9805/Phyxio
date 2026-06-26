// frontend/src/v2/components/DCL/profiles/vectorDecomposition.profile.js

import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_ANCHORS,
  DCL_HIGHLIGHT_MODES,
  DCL_LABEL_POSITIONS,
  DCL_DIRECTION_MODE_IDS,
} from "../dclGrammar";

const vectorDecompositionProfile = {
  scene: DCL_SCENE_IDS.BLOCK_ON_INCLINE,
  question: DCL_QUESTION_TYPES.FORCE_BALANCE,
  lang: "es",

  meta: {
    id: "dcl-vector-decomposition",
    title: {
      es: "DCL · Descomposición Vectorial",
      en: "FBD · Vector Decomposition",
    },
    smartHeader: {
      es: "Fundamentos · Proyección sobre ejes",
      en: "Fundamentals · Projection onto axes",
    },
    leafId: "descomposicion-vectorial",
    question: {
      es: "¿Cómo se proyecta la fuerza sobre los ejes del sistema?",
      en: "How is the force projected onto the system axes?",
    },
    description: {
      es: "Visualización interactiva de cómo un vector se descompone en componentes ortogonales",
      en: "Interactive visualization of how a vector decomposes into orthogonal components",
    },
  },

  environment: {
    inclineAngleDeg: 30, // Default, can be overridden by paramsIn.theta
    showAxes: true,
    showGrid: false,
    gravityDirection: DCL_DIRECTION_MODE_IDS?.DOWN || "down",
  },

  params: {
    theta: "theta", // Angle of the incline plane
  },

  bodies: [
    {
      id: "body_main",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: {
        es: "Cuerpo",
        en: "Body",
      },
      role: "main",
      anchor: DCL_ANCHORS.CENTER,
      style: {
        variant: "default",
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        opacity: 1,
      },
    },
  ],

  vectors: [
    {
      id: "vector_main",
      type: DCL_VECTOR_TYPE_IDS.WEIGHT,
      bodyId: "body_main",
      magnitudeId: "P",
      label: {
        es: "Peso",
        en: "Weight",
      },
      symbol: "P",
      anchor: DCL_ANCHORS.CENTER,
      semanticRole: "cause",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 3,
        visible: true,
      },
      description: {
        es: "Peso del cuerpo (se descompone automáticamente en Ppar y Pperp por el sistema DCL)",
        en: "Body weight (automatically decomposed into Ppar and Pperp by DCL system)",
      },
    },
  ],

  labels: [
    {
      id: "angle_marker",
      type: "angle",
      text: {
        es: "θ",
        en: "θ",
      },
      position: "incline_angle",
      style: {
        visible: true,
        color: "#757575",
        fontSize: 14,
      },
    },
  ],

  options: {
    showSurface: true,
    showAxes: true,
    showAngleMarker: true,
    autoLabelLayout: true,
    autoVectorScale: true,
    clampVectorLengths: true,
    showVectorMagnitudes: true, // Show magnitude values
    showBodyNames: false,
    followCalculator: true,
    experimentMode: true,
    debug: false,

    resolveComponents: true, // Enable automatic component resolution
    resolveResultant: false,
    showStepControls: true,
    resolutionStep: 2, // 0: only main, 1: main + dashed guides, 2: main + components, 3: only components
    snapVectorDirections: true,

    displayMode: "student",
    enableVectorSelection: true,
    showCompactLegend: true,
    showTypicalErrors: true,
    showTheoryLink: true,
  },

  theory_link: {
    sectionId: "descomposicion-vectorial",
    conceptId: "axes_projection",
    label: {
      es: "Teoría · Proyección de vectores",
      en: "Theory · Vector projection",
    },
  },

  interpretation: {
    header_bridge: {
      es: "Un vector se puede expresar como la suma vectorial de sus proyecciones sobre ejes ortogonales. Las componentes no son fuerzas nuevas, sino partes del vector original.",
      en: "A vector can be expressed as the vector sum of its projections onto orthogonal axes. Components are not new forces, but parts of the original vector.",
    },
    reading_focus: {
      es: "Observa cómo el peso $P$ se proyecta geométricamente sobre los ejes paralelo y perpendicular al plano. Las líneas punteadas muestran las direcciones de proyección.",
      en: "Observe how weight $P$ projects geometrically onto axes parallel and perpendicular to the plane. Dashed lines show projection directions.",
    },
    graph_role: {
      es: "Visualizar el triángulo rectángulo formado por el vector original (hipotenusa) y sus componentes (catetos). La relación es pitagórica: $P^2 = P_{\\parallel}^2 + P_{\\perp}^2$",
      en: "Visualize the right triangle formed by the original vector (hypotenuse) and its components (legs). The relationship is Pythagorean: $P^2 = P_{\\parallel}^2 + P_{\\perp}^2$",
    },
    calc_reading: {
      es: "Las componentes calculadas $P_{\\parallel} = mg\\sin\\theta$ y $P_{\\perp} = mg\\cos\\theta$ determinan el comportamiento dinámico: $P_{\\parallel}$ causa aceleración hacia abajo del plano, mientras $P_{\\perp}$ comprime el contacto.",
      en: "Calculated components $P_{\\parallel} = mg\\sin\\theta$ and $P_{\\perp} = mg\\cos\\theta$ determine dynamic behavior: $P_{\\parallel}$ causes downward acceleration along the plane, while $P_{\\perp}$ compresses the contact.",
    },
    graph_reading: {
      es: "El ángulo $\\theta$ del plano aparece también como el ángulo interno entre el peso $P$ (vertical) y la componente perpendicular $P_{\\perp}$ (normal al plano). Esta simetría geométrica es clave para recordar las funciones trigonométricas correctas.",
      en: "The plane angle $\\theta$ also appears as the internal angle between weight $P$ (vertical) and perpendicular component $P_{\\perp}$ (normal to plane). This geometric symmetry is key to remembering the correct trigonometric functions.",
    },
    step_descriptions: [
      {
        step: 0,
        text: {
          es: "Solo el vector original $P$. Este es el peso real actuando verticalmente hacia abajo.",
          en: "Only the original vector $P$. This is the actual weight acting vertically downward.",
        },
      },
      {
        step: 1,
        text: {
          es: "Vector original $P$ con líneas de proyección punteadas mostrando cómo se descompone geométricamente.",
          en: "Original vector $P$ with dashed projection lines showing how it geometrically decomposes.",
        },
      },
      {
        step: 2,
        text: {
          es: "Vector original y sus componentes $P_{\\parallel}$ (azul, paralela al plano) y $P_{\\perp}$ (verde, perpendicular al plano).",
          en: "Original vector and its components $P_{\\parallel}$ (blue, parallel to plane) and $P_{\\perp}$ (green, perpendicular to plane).",
        },
      },
      {
        step: 3,
        text: {
          es: "Solo las componentes $P_{\\parallel}$ y $P_{\\perp}$. Estas reemplazan al vector original en ecuaciones por ejes.",
          en: "Only components $P_{\\parallel}$ and $P_{\\perp}$. These replace the original vector in axis-based equations.",
        },
      },
    ],
    likely_errors: {
      es: [
        "**Error conceptual**: Tratar las componentes como fuerzas adicionales. Las componentes no se suman al vector original; lo reemplazan en el análisis por ejes.",
        "**Error trigonométrico**: Confundir $\\sin\\theta$ y $\\cos\\theta$. Recuerda: $P_{\\parallel}$ (paralela al plano) usa $\\sin\\theta$, mientras $P_{\\perp}$ (perpendicular/normal) usa $\\cos\\theta$.",
        "**Error de referencia angular**: Usar el ángulo complementario sin ajustar las funciones trigonométricas. El ángulo $\\theta$ debe medirse desde la horizontal.",
        "**Error de superposición**: Mantener el vector original y las componentes en el mismo diagrama de fuerzas al resolver ecuaciones. Debes elegir: o trabajas con $P$, o con $(P_{\\parallel}, P_{\\perp})$.",
      ],
      en: [
        "**Conceptual error**: Treating components as additional forces. Components do not add to the original vector; they replace it in axis-based analysis.",
        "**Trigonometric error**: Confusing $\\sin\\theta$ and $\\cos\\theta$. Remember: $P_{\\parallel}$ (parallel to plane) uses $\\sin\\theta$, while $P_{\\perp}$ (perpendicular/normal) uses $\\cos\\theta$.",
        "**Angular reference error**: Using the complementary angle without adjusting trigonometric functions. Angle $\\theta$ must be measured from horizontal.",
        "**Superposition error**: Keeping both the original vector and components in the same force diagram when solving equations. You must choose: either work with $P$, or with $(P_{\\parallel}, P_{\\perp})$.",
      ],
    },
    physical_insight: {
      es: "La descomposición vectorial no es una operación matemática arbitraria, sino una herramienta para proyectar el efecto de una fuerza sobre direcciones de interés físico. En un plano inclinado, nos interesa separar qué parte del peso causa deslizamiento ($P_{\\parallel}$) y qué parte comprime el contacto ($P_{\\perp}$), porque cada una entra en ecuaciones dinámicas diferentes.",
      en: "Vector decomposition is not an arbitrary mathematical operation, but a tool to project the effect of a force onto directions of physical interest. On an inclined plane, we want to separate which part of weight causes sliding ($P_{\\parallel}$) and which part compresses the contact ($P_{\\perp}$), because each enters different dynamic equations.",
    },
    next_steps: {
      es: [
        "Verificar que $P^2 = P_{\\parallel}^2 + P_{\\perp}^2$ (teorema de Pitágoras)",
        "Usar $P_{\\parallel}$ en la ecuación de movimiento paralela al plano",
        "Relacionar $P_{\\perp}$ con la fuerza normal $N$ (en ausencia de otras fuerzas perpendiculares, $N = P_{\\perp}$)",
        "Calcular el rozamiento máximo como $f_{max} = \\mu N = \\mu P_{\\perp}$",
      ],
      en: [
        "Verify that $P^2 = P_{\\parallel}^2 + P_{\\perp}^2$ (Pythagorean theorem)",
        "Use $P_{\\parallel}$ in the equation of motion parallel to the plane",
        "Relate $P_{\\perp}$ to normal force $N$ (in absence of other perpendicular forces, $N = P_{\\perp}$)",
        "Calculate maximum friction as $f_{max} = \\mu N = \\mu P_{\\perp}$",
      ],
    },
  },
};

export default vectorDecompositionProfile;
