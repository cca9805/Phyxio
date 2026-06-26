// frontend/src/v2/components/DCL/profiles/diagramasCuerpoLibre.profile.js

import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_ANCHORS,
  DCL_HIGHLIGHT_MODES,
  DCL_LABEL_POSITIONS,
} from "../dclGrammar";

/**
 * Profile genérico para el leaf "diagramas-cuerpo-libre"
 * 
 * Este profile representa el método DCL en su forma más fundamental:
 * - Un cuerpo aislado (bloque o masa)
 * - Fuerzas externas identificadas (P, N, fk/fs, opcionalmente T)
 * - Configuración flexible para distintos contextos (horizontal, inclinado)
 * 
 * Compatible con calculadoras que incluyan magnitudes:
 * m, P, N, T, fk, fs, mu_k, mu_s, theta, ax, ay, Fx, Fy
 */

const diagramasCuerpoLibreProfile = {
  scene: DCL_SCENE_IDS.BLOCK_ON_TABLE,
  question: DCL_QUESTION_TYPES.IDENTIFY_FORCES,
  lang: "es",

  meta: {
    id: "dcl-diagramas-cuerpo-libre",
    title: {
      es: "DCL · Diagrama de Cuerpo Libre",
      en: "FBD · Free-Body Diagram",
    },
    leafId: "diagramas-cuerpo-libre",
    question: {
      es: "Identificar fuerzas externas sobre el sistema aislado",
      en: "Identify external forces on isolated system",
    },
  },

  environment: {
    inclineAngleDeg: 0,
    showAxes: true,
    showGrid: false,
    gravityDirection: "down",
  },

  params: {},

  bodies: [
    {
      id: "body_main",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: {
        es: "Sistema aislado",
        en: "Isolated system",
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
      id: "weight_main",
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
    },
    {
      id: "normal_main",
      type: DCL_VECTOR_TYPE_IDS.NORMAL,
      bodyId: "body_main",
      magnitudeId: "N",
      label: {
        es: "Normal",
        en: "Normal",
      },
      symbol: "N",
      anchor: DCL_ANCHORS.CONTACT,
      semanticRole: "constraint",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 2,
        visible: true,
      },
    },
    {
      id: "friction_main",
      type: DCL_VECTOR_TYPE_IDS.FRICTION,
      bodyId: "body_main",
      magnitudeId: "fk",
      label: {
        es: "Rozamiento cinético",
        en: "Kinetic friction",
      },
      symbol: "fₖ",
      anchor: DCL_ANCHORS.CONTACT,
      directionMode: "left",
      semanticRole: "opposition",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 2,
        visible: true,
      },
    },
    {
      id: "tension_main",
      type: DCL_VECTOR_TYPE_IDS.TENSION,
      bodyId: "body_main",
      magnitudeId: "T",
      label: {
        es: "Tensión",
        en: "Tension",
      },
      symbol: "T",
      anchor: DCL_ANCHORS.RIGHT,
      directionMode: "right",
      semanticRole: "external_action",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.NONE,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 2,
        visible: false, // visible solo si T existe en calculadora
      },
    },
  ],

  labels: [
    {
      id: "label_axes",
      text: {
        es: "Ejes de referencia",
        en: "Reference axes",
      },
      position: { x: 20, y: 20 },
      style: {
        fontSize: 11,
        color: "#666",
      },
    },
  ],

  options: {
    showSurface: true,
    showAxes: true,
    showAngleMarker: false,
    autoLabelLayout: true,
    autoVectorScale: true,
    clampVectorLengths: true,
    showVectorMagnitudes: true,
    showBodyNames: true,
    followCalculator: true,
    hideZeroVectors: true,
    showNetForce: true,
    enableVectorSelection: true,
    showTheoryLink: true,
    showCompactLegend: true,
    netForceLabel: {
      es: "Fuerza neta",
      en: "Net force",
    },
  },

  theory_link: {
    sectionId: "diagramas-cuerpo-libre",
    conceptId: "external_forces_only",
    label: {
      es: "Teoría · Método del DCL",
      en: "Theory · FBD Method",
    },
  },

  calculator: {
    enabled: true,
    requiredMagnitudes: ["P", "N"],
    optionalMagnitudes: ["fk", "fs", "T", "m", "ax", "ay", "mu_k", "mu_s", "theta"],
    bindMagnitudes: {
      P: "weight_main",
      N: "normal_main",
      fk: "friction_main",
      T: "tension_main",
    },
  },

  interpretation: {
    enabled: true,
    header_bridge: {
      es: "El diagrama de cuerpo libre aísla mentalmente el sistema y reemplaza cada vínculo físico cortado por la fuerza correspondiente. Solo fuerzas externas que actúan sobre el sistema deben aparecer; fuerzas internas quedan ocultas dentro del sistema.",
      en: "The free-body diagram mentally isolates the system and replaces each cut physical link with the corresponding force. Only external forces acting on the system should appear; internal forces remain hidden within the system.",
    },
    reading_focus: {
      es: "Identifica el origen físico de cada fuerza: ¿Es contacto? ¿Es a distancia? ¿Qué objeto del entorno la ejerce?",
      en: "Identify the physical origin of each force: Is it contact? Is it at distance? Which object in the environment exerts it?",
    },
    graph_role: {
      es: "Visualizar todas las fuerzas externas sobre el sistema aislado y preparar el balance vectorial para aplicar las leyes de Newton.",
      en: "Visualize all external forces on the isolated system and prepare the vector balance to apply Newton's laws.",
    },
    calc_reading: {
      es: "Los valores calculados (P, N, f, T) determinan la longitud de cada flecha en el DCL. La fuerza neta resultante indica si el sistema acelera o está en equilibrio.",
      en: "The calculated values (P, N, f, T) determine the length of each arrow in the FBD. The resulting net force indicates whether the system accelerates or is in equilibrium.",
    },
    graph_reading: {
      es: "El DCL muestra todas las fuerzas externas que actúan sobre el sistema aislado. Cada flecha representa una interacción física real con el entorno.",
      en: "The FBD shows all external forces acting on the isolated system. Each arrow represents a real physical interaction with the environment.",
    },
    physical_insight: {
      es: "El DCL no es un inventario de flechas, es una traducción geométrica de interacciones reales que permite plantear ecuaciones de Newton.",
      en: "The FBD is not an inventory of arrows, it is a geometric translation of real interactions that allows setting up Newton's equations.",
    },
    likely_errors: {
      es: "Errores típicos: dibujar fuerzas internas, añadir la fuerza neta como si fuera una fuerza nueva o igualar N y P sin justificar el contexto.",
      en: "Typical errors: drawing internal forces, adding net force as if it were a new force, or setting N equal to P without justifying the context.",
    },
    triggers: [
      {
        condition: "N > P",
        message: {
          es: "La normal es mayor que el peso: el cuerpo está siendo empujado contra la superficie.",
          en: "Normal force exceeds weight: the body is being pressed against the surface.",
        },
      },
      {
        condition: "N < P",
        message: {
          es: "La normal es menor que el peso: puede haber una fuerza vertical adicional hacia arriba o el cuerpo está acelerando hacia abajo.",
          en: "Normal force is less than weight: there may be an additional upward force or the body is accelerating downward.",
        },
      },
      {
        condition: "fk > 0 && N > 0",
        message: {
          es: "Existe rozamiento cinético: el cuerpo está en movimiento relativo con la superficie.",
          en: "Kinetic friction present: the body is moving relative to the surface.",
        },
      },
      {
        condition: "T > 0",
        message: {
          es: "La tensión indica que el cuerpo está conectado a una cuerda, cable o vínculo flexible.",
          en: "Tension indicates the body is connected to a rope, cable, or flexible link.",
        },
      },
      {
        condition: "abs(Fx) < 0.1 && abs(Fy) < 0.1",
        message: {
          es: "Fuerza neta ≈ 0: el sistema está en equilibrio dinámico (reposo o MRU).",
          en: "Net force ≈ 0: the system is in dynamic equilibrium (at rest or constant velocity).",
        },
      },
    ],
  },

  pedagogical: {
    commonMistakes: [
      {
        mistake: {
          es: "Dibujar el peso y la normal con la misma magnitud sin verificar",
          en: "Drawing weight and normal with same magnitude without verification",
        },
        correction: {
          es: "N = P solo en equilibrio vertical sin fuerzas verticales adicionales",
          en: "N = P only in vertical equilibrium without additional vertical forces",
        },
      },
      {
        mistake: {
          es: "Incluir la fuerza neta como vector adicional en el DCL",
          en: "Including net force as additional vector in FBD",
        },
        correction: {
          es: "La fuerza neta es la suma vectorial de las fuerzas externas, no una fuerza adicional",
          en: "Net force is the vector sum of external forces, not an additional force",
        },
      },
      {
        mistake: {
          es: "Dibujar fuerzas internas (tensiones entre partes del mismo cuerpo)",
          en: "Drawing internal forces (tensions between parts of same body)",
        },
        correction: {
          es: "El DCL solo incluye fuerzas externas que actúan sobre el sistema aislado",
          en: "FBD only includes external forces acting on the isolated system",
        },
      },
    ],
    keyInsights: [
      {
        es: "El DCL aísla mentalmente el cuerpo y reemplaza cada vínculo cortado por la fuerza correspondiente",
        en: "The FBD mentally isolates the body and replaces each cut link with the corresponding force",
      },
      {
        es: "La elección del sistema determina qué fuerzas son externas y cuáles desaparecen como internas",
        en: "The choice of system determines which forces are external and which disappear as internal",
      },
      {
        es: "La dirección de cada fuerza debe justificarse físicamente, no por el movimiento observado",
        en: "The direction of each force must be physically justified, not by observed motion",
      },
    ],
  },
};

export default diagramasCuerpoLibreProfile;
