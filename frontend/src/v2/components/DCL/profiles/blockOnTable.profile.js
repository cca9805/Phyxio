// frontend/src/v2/components/DCL/profiles/blockOnTable.profile.js

import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_ANCHORS,
  DCL_HIGHLIGHT_MODES,
  DCL_LABEL_POSITIONS,
} from "../dclGrammar";

const blockOnTableProfile = {
  scene: DCL_SCENE_IDS.BLOCK_ON_TABLE,
  question: DCL_QUESTION_TYPES.IDENTIFY_FORCES,
  lang: "es",

  meta: {
    id: "dcl-block-on-table",
    title: {
      es: "DCL · Bloque sobre mesa",
      en: "FBD · Block on table",
    },
    leafId: "generic-block-on-table",
    question: {
      es: "Identificar fuerzas",
      en: "Identify forces",
    },
  },

  environment: {
    inclineAngleDeg: 0,
    showAxes: false,
    showGrid: false,
    gravityDirection: "down",
  },

  params: {},

  interpretation: {
    header_bridge: {
      es: "Lee primero que fuerza real aporta la componente radial y solo despues hables de centripeta.",
      en: "Read first which real force supplies the radial component and only then talk about centripetal force.",
    },
    reading_focus: {
      es: "Distinguir entre fuerzas reales dibujadas y resultante radial inferida.",
      en: "Distinguish between drawn real forces and the inferred radial resultant.",
    },
    graph_role: {
      es: "El DCL muestra de donde sale la componente hacia el centro en una curva plana o peraltada.",
      en: "The FBD shows where the inward component comes from on a flat or banked curve.",
    },
    calc_reading: {
      es: "Si el calculo entrega Frad, la escena permite comprobar si la produce el rozamiento o la componente horizontal de la normal.",
      en: "If the calculation returns Frad, the scene lets you check whether friction or the horizontal component of the normal produces it.",
    },
    graph_reading: {
      es: "En curva plana la flecha clave es f; en curva peraltada la normal ya esta inclinada y aporta parte de Frad.",
      en: "On a flat curve the key arrow is friction; on a banked curve the normal is already tilted and contributes to Frad.",
    },
    physical_insight: {
      es: "Centripeta no nombra una fuerza nueva: nombra la resultante radial de fuerzas de contacto reales.",
      en: "Centripetal does not name a new force: it names the radial resultant of real contact forces.",
    },
    summary: {
      es: "La lectura correcta empieza identificando fuerzas reales y su posible componente radial.",
      en: "The correct reading starts by identifying real forces and their possible radial component.",
    },
    physical_reading: {
      es: "La normal y el rozamiento pueden combinarse para sostener la curvatura del movimiento.",
      en: "The normal force and friction can combine to sustain the curvature of motion.",
    },
    likely_errors: {
      es: "No añadas una fuerza centripeta extra al DCL: la resultante radial sale de las fuerzas reales.",
      en: "Do not add an extra centripetal force to the FBD: the radial resultant comes from real forces.",
    },
  },

  bodies: [
    {
      id: "body_main",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: {
        es: "Bloque",
        en: "Block",
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
        highlight: DCL_HIGHLIGHT_MODES.NONE,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 2,
        visible: true,
      },
    },
    {
      id: "friction_main",
      type: DCL_VECTOR_TYPE_IDS.FRICTION,
      bodyId: "body_main",
      magnitudeId: "f",
      label: {
        es: "Rozamiento",
        en: "Friction",
      },
      symbol: "f",
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
      id: "applied_main",
      type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
      bodyId: "body_main",
      magnitudeId: "F",
      label: {
        es: "Fuerza aplicada",
        en: "Applied force",
      },
      symbol: "F",
      anchor: DCL_ANCHORS.CENTER,
      directionMode: "right",
      semanticRole: "external_action",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.NONE,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 2,
        visible: true,
      },
    },
  ],

  labels: [],

  options: {
    showSurface: true,
    showAxes: false,
    showAngleMarker: false,
    autoLabelLayout: true,
    autoVectorScale: true,
    clampVectorLengths: true,
    showCompactLegend: true,
    showVectorMagnitudes: false,
    showBodyNames: false,
    followCalculator: true,
    experimentMode: false,
    debug: false,
  },
};

export default blockOnTableProfile;
