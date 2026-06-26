// frontend/src/v2/components/DCL/profiles/forceIdentification.profile.js

import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_ANCHORS,
  DCL_HIGHLIGHT_MODES,
  DCL_LABEL_POSITIONS,
} from "../dclGrammar";

const forceIdentificationProfile = {
  scene: DCL_SCENE_IDS.BLOCK_ON_INCLINE,
  question: DCL_QUESTION_TYPES.IDENTIFY_FORCES,
  lang: "es",

  meta: {
    id: "dcl-force-identification",
    title: {
      es: "DCL · Identificación de fuerzas",
      en: "FBD · Force identification",
    },
    leafId: "generic-force-identification",
    question: {
      es: "¿Qué fuerzas actúan realmente sobre el cuerpo?",
      en: "Which forces actually act on the body?",
    },
  },

  environment: {
    inclineAngleDeg: 25,
    showAxes: false,
    showGrid: false,
    gravityDirection: "down",
  },

  params: {
    theta: "theta",
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
      id: "weight",
      type: DCL_VECTOR_TYPE_IDS.WEIGHT,
      bodyId: "body_main",
      magnitudeId: "P",
      label: { es: "Peso", en: "Weight" },
      symbol: "P",
      anchor: DCL_ANCHORS.CENTER,
      semanticRole: "real_force",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 3,
        visible: true,
      },
    },
    {
      id: "normal",
      type: DCL_VECTOR_TYPE_IDS.NORMAL,
      bodyId: "body_main",
      magnitudeId: "N",
      label: { es: "Normal", en: "Normal" },
      symbol: "N",
      anchor: DCL_ANCHORS.CONTACT,
      semanticRole: "contact_force",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 2,
        visible: true,
      },
    },
    {
      id: "friction",
      type: DCL_VECTOR_TYPE_IDS.FRICTION,
      bodyId: "body_main",
      magnitudeId: "f",
      label: { es: "Rozamiento", en: "Friction" },
      symbol: "f",
      anchor: DCL_ANCHORS.CONTACT,
      directionMode: "along_surface_negative",
      semanticRole: "conditional_force",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 2,
        visible: true,
      },
    },
    {
      id: "applied",
      type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
      bodyId: "body_main",
      magnitudeId: "F_ap",
      label: { es: "Fuerza aplicada", en: "Applied force" },
      symbol: "F_{ap}",
      anchor: DCL_ANCHORS.CENTER,
      directionMode: "along_surface_positive",
      semanticRole: "external_action",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.NONE,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 1,
        visible: true,
      },
    },
    {
      id: "tension",
      type: DCL_VECTOR_TYPE_IDS.TENSION,
      bodyId: "body_main",
      magnitudeId: "T",
      label: { es: "Tensión", en: "Tension" },
      symbol: "T",
      anchor: DCL_ANCHORS.CENTER,
      directionMode: "up",
      semanticRole: "transmitted_force",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.NONE,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 1,
        visible: true,
      },
    },
  ],

  labels: [],

  options: {
    showSurface: true,
    autoLabelLayout: true,
    autoVectorScale: true,
    followCalculator: false,
    
    // Opciones de interactividad
    enableVectorSelection: true,
    showCompactLegend: false,
    showTypicalErrors: true,
    showTheoryLink: true,
    displayMode: "student",
  },

  theory_link: {
    sectionId: "identificacion-de-fuerzas",
    conceptId: "real_forces_only",
    label: {
      es: "Teoría · Identificación de fuerzas reales",
      en: "Theory · Real force identification",
    },
  },

  interpretation: {
    header_bridge: {
      es: "Cada flecha en un DCL debe representar una interacción física real con un agente identificable. Fuerzas inventadas o componentes etiquetadas como fuerzas nuevas rompen la lectura física del sistema.",
      en: "Each arrow in a FBD must represent a real physical interaction with an identifiable agent. Invented forces or components labeled as new forces break the physical reading of the system.",
    },
    reading_focus: {
      es: "Para cada fuerza, pregúntate: ¿Qué objeto del entorno la ejerce? ¿Es contacto directo, tensión de cuerda, o interacción a distancia? Si no puedes responder, probablemente la fuerza no existe.",
      en: "For each force, ask yourself: Which object in the environment exerts it? Is it direct contact, rope tension, or distance interaction? If you cannot answer, the force probably does not exist.",
    },
    graph_role: {
      es: "Distinguir fuerzas reales de las que el alumno tiende a inventar.",
      en: "Distinguish real forces from those students tend to invent.",
    },
    calc_reading: {
      es: "El gráfico no depende del cálculo, sino del modelo físico correcto.",
      en: "The graph depends on the physical model, not on calculation.",
    },
    graph_reading: {
      es: "Solo deben aparecer fuerzas con origen físico identificable.",
      en: "Only forces with identifiable physical origin should appear.",
    },
    physical_insight: {
      es: "La identificación correcta de fuerzas es el paso previo obligatorio antes de aplicar cualquier ley de Newton. Un inventario erróneo de fuerzas contamina todo el análisis dinámico posterior, independientemente de cuán bien se resuelvan las ecuaciones.",
      en: "Correct force identification is the mandatory preliminary step before applying any Newton's law. An erroneous force inventory contaminates all subsequent dynamic analysis, regardless of how well the equations are solved.",
    },
    likely_errors: {
      es: [
        "Añadir fuerza 'de movimiento'",
        "Confundir componente con fuerza",
        "Olvidar fuerzas de contacto"
      ],
      en: [
        "Adding a 'motion force'",
        "Confusing components with forces",
        "Forgetting contact forces"
      ],
    },
  },
};

export default forceIdentificationProfile;