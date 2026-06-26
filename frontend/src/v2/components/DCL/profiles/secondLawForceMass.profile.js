// frontend/src/v2/components/DCL/profiles/secondLawForceMass.profile.js

import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_ANCHORS,
  DCL_HIGHLIGHT_MODES,
  DCL_LABEL_POSITIONS,
} from "../dclGrammar";

const secondLawForceMassProfile = {
  scene: DCL_SCENE_IDS.BLOCK_ON_TABLE,
  question: DCL_QUESTION_TYPES.FORCE_BALANCE,
  lang: "es",

  meta: {
    id: "dcl-second-law-force-mass",
    title: {
      es: "DCL · Segunda ley de Newton (Fuerza Neta)",
      en: "FBD · Newton's second law (Net Force)",
    },
    smartHeader: {
      es: "Dinámica · Aceleración inducida",
      en: "Dynamics · Induced acceleration",
    },
    leafId: "segunda-ley-fuerza-masa",
    question: {
      es: "¿Cómo responde el cuerpo inercial al aplicársele una fuerza desequilibrada?",
      en: "How does the inertial body respond when an unbalanced force is applied?",
    },
  },

  environment: {
    inclineAngleDeg: 0,
    showGrid: false,
    gravityDirection: "down",
  },

  params: {},

  bodies: [
    {
      id: "body_main",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: {
        es: "Masa m",
        en: "Mass m",
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
      semanticRole: "gravitational_cause",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.NONE,
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
      semanticRole: "constraint_force",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.NONE,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 2,
        visible: true,
      },
    },
    {
      id: "applied_main",
      type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
      bodyId: "body_main",
      magnitudeId: "F_net",
      label: {
        es: "Fuerza Neta",
        en: "Net Force",
      },
      symbol: "F_{net}",
      anchor: DCL_ANCHORS.CENTER,
      directionMode: "right",
      semanticRole: "external_action",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 1,
        visible: true,
      },
    },
    {
      id: "acceleration_main",
      type: DCL_VECTOR_TYPE_IDS.ACCELERATION,
      bodyId: "body_main",
      magnitudeId: "a",
      label: {
        es: "Aceleración",
        en: "Acceleration",
      },
      symbol: "a",
      anchor: DCL_ANCHORS.CENTER,
      directionMode: "right",
      semanticRole: "system_response",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 1,
        visible: true,
      },
    },
  ],

  labels: [],

  options: {
    showSurface: true,
    showAxes: true,
    showAngleMarker: false,
    autoLabelLayout: true,
    autoVectorScale: true,
    clampVectorLengths: true,
    showVectorMagnitudes: false,
    showBodyNames: true,
    followCalculator: true,
    experimentMode: true,
    debug: false,

    resolveComponents: false,
    resolveResultant: true,
    showStepControls: false,
    resolutionStep: 0,
    snapVectorDirections: true,

    displayMode: "student",
    enableVectorSelection: true,
    showCompactLegend: true,
    showTypicalErrors: true,
    showTheoryLink: true,
  },

  theory_link: {
    sectionId: "segunda-ley-fuerza-masa",
    conceptId: "F_net_equals_ma",
    label: {
      es: "Segunda ley de Newton · aceleración inducida",
      en: "Newton's second law · induced acceleration",
    },
  },

  interpretation: {
    header_bridge: {
      es: "La fuerza neta desequilibrada dicta de manera innegociable la existencia y dirección de la aceleración.",
      en: "The unbalanced net force non-negotiably dictates the existence and direction of acceleration.",
    },
    reading_focus: {
      es: "Observa la correspondencia geométrica vital: si la fuerza neta cambia de magnitud o sentido, la aceleración acompaña dictatorialmente.",
      en: "Observe the vital geometric correspondence: if the net force changes in magnitude or direction, the acceleration dictates its path.",
    },
    graph_role: {
      es: "Demostrar interactivamente la relación causal directa entre el vector de fuerza neta y el vector reactivo de aceleración.",
      en: "Directly and interactively demonstrate the causal relationship between the net force vector and the reactive acceleration vector.",
    },
    calc_reading: {
      es: "La lectura visual debe mostrar un evidente desequilibrio estructural paralelo al plano horizontal.",
      en: "The visual reading should show an evident structural imbalance parallel to the horizontal plane.",
    },
    graph_reading: {
      es: "Si m se duplica bajo la misma F_{net}, notarás que la resultante paramétrica visual de la aceleración a se recorta rigurosamente a la mitad.",
      en: "If m doubles under the same F_{net}, you will notice the visual parametric resultant of a rigorously cuts in half.",
    },
    likely_errors: {
      es: [
        "Confundir burdamente la dirección de la aceleración con una fuerza ficticia propia.",
        "Sumar el vector 'a' con las otras fuerzas en el sumatorio de equilibrio del eje X.",
        "Olvidar que 'F_net' es el resultado combinado de tracciones y rozamientos, no una fuerza natural.",
      ],
      en: [
        "Grossly confusing the direction of acceleration with a fictitious force of its own.",
        "Adding vector 'a' with the other forces in the X-axis equilibrium sum.",
        "Forgetting that 'F_net' is the combined result of tractions and frictions, not a natural force itself.",
      ],
    },
    physical_insight: {
      es: "La segunda ley revela que la fuerza neta es la causa directa de la aceleración: si F_net aumenta, a aumenta proporcionalmente; si F_net se anula, el cuerpo mantiene su estado de movimiento. La masa actúa como resistencia inercial que modula esa respuesta.",
      en: "The second law reveals that net force is the direct cause of acceleration: if F_net increases, a increases proportionally; if F_net vanishes, the body maintains its state of motion. Mass acts as inertial resistance that modulates that response.",
    },
  },
};

export default secondLawForceMassProfile;
