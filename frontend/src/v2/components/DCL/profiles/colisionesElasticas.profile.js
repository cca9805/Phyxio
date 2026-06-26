// frontend/src/v2/components/DCL/profiles/colisionesElasticas.profile.js

import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_ANCHORS,
  DCL_HIGHLIGHT_MODES,
  DCL_LABEL_POSITIONS,
} from "../dclGrammar";

const colisionesElasticasProfile = {
  scene: DCL_SCENE_IDS.TWO_BODIES_HORIZONTAL,
  question: DCL_QUESTION_TYPES.IDENTIFY_FORCES,
  lang: "es",

  meta: {
    id: "dcl-colisiones-elasticas",
    title: {
      es: "DCL · Colisión elástica",
      en: "FBD · Elastic collision",
    },
    leafId: "colisiones-elasticas",
    question: {
      es: "Identificar fuerzas durante el contacto y verificar conservación de momento y energía cinética",
      en: "Identify contact forces and verify conservation of momentum and kinetic energy",
    },
  },

  environment: {
    inclineAngleDeg: 0,
    showAxes: false,
    showGrid: false,
    gravityDirection: "down",
  },

  params: {},

  bodies: [
    {
      id: "body_1",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: {
        es: "Cuerpo 1",
        en: "Body 1",
      },
      role: "main",
      anchor: DCL_ANCHORS.CENTER,
      style: {
        variant: "default",
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        opacity: 1,
      },
    },
    {
      id: "body_2",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: {
        es: "Cuerpo 2",
        en: "Body 2",
      },
      role: "secondary",
      anchor: DCL_ANCHORS.CENTER,
      style: {
        variant: "default",
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        opacity: 1,
      },
    },
  ],

  vectors: [
    {
      id: "weight_1",
      type: DCL_VECTOR_TYPE_IDS.WEIGHT,
      bodyId: "body_1",
      magnitudeId: "P1",
      label: { es: "Peso 1", en: "Weight 1" },
      symbol: "P_{1}",
      anchor: DCL_ANCHORS.CENTER,
      semanticRole: "gravitational_cause",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.NONE,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 1,
        visible: true,
      },
    },
    {
      id: "normal_1",
      type: DCL_VECTOR_TYPE_IDS.NORMAL,
      bodyId: "body_1",
      magnitudeId: "N1",
      label: { es: "Normal 1", en: "Normal 1" },
      symbol: "N_{1}",
      anchor: DCL_ANCHORS.CONTACT,
      directionMode: "up",
      semanticRole: "contact_reaction",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.NONE,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 1,
        visible: true,
      },
    },
    {
      id: "impulse_12",
      type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
      bodyId: "body_1",
      magnitudeId: "F12",
      label: { es: "Impulso de 2 sobre 1", en: "Impulse from 2 on 1" },
      symbol: "F_{12}",
      anchor: DCL_ANCHORS.CONTACT,
      directionMode: "left",
      semanticRole: "external_action",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 3,
        visible: true,
      },
    },
    {
      id: "weight_2",
      type: DCL_VECTOR_TYPE_IDS.WEIGHT,
      bodyId: "body_2",
      magnitudeId: "P2",
      label: { es: "Peso 2", en: "Weight 2" },
      symbol: "P_{2}",
      anchor: DCL_ANCHORS.CENTER,
      semanticRole: "gravitational_cause",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.NONE,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 1,
        visible: true,
      },
    },
    {
      id: "normal_2",
      type: DCL_VECTOR_TYPE_IDS.NORMAL,
      bodyId: "body_2",
      magnitudeId: "N2",
      label: { es: "Normal 2", en: "Normal 2" },
      symbol: "N_{2}",
      anchor: DCL_ANCHORS.CONTACT,
      directionMode: "up",
      semanticRole: "contact_reaction",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.NONE,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 1,
        visible: true,
      },
    },
    {
      id: "impulse_21",
      type: DCL_VECTOR_TYPE_IDS.REACTION,
      bodyId: "body_2",
      magnitudeId: "F21",
      label: { es: "Impulso de 1 sobre 2", en: "Impulse from 1 on 2" },
      symbol: "F_{21}",
      anchor: DCL_ANCHORS.CONTACT,
      directionMode: "right",
      semanticRole: "reaction_pair",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 3,
        visible: true,
      },
    },
    {
      id: "velocity_1",
      type: DCL_VECTOR_TYPE_IDS.VELOCITY,
      bodyId: "body_1",
      magnitudeId: "v1",
      label: { es: "Velocidad 1", en: "Velocity 1" },
      symbol: "v_{1}",
      anchor: DCL_ANCHORS.CENTER,
      directionMode: "right",
      semanticRole: "kinematic_state",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 2,
        visible: false,
      },
    },
    {
      id: "velocity_2",
      type: DCL_VECTOR_TYPE_IDS.VELOCITY,
      bodyId: "body_2",
      magnitudeId: "v2",
      label: { es: "Velocidad 2", en: "Velocity 2" },
      symbol: "v_{2}",
      anchor: DCL_ANCHORS.CENTER,
      directionMode: "left",
      semanticRole: "kinematic_state",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 2,
        visible: false,
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
    showVectorMagnitudes: false,
    showBodyNames: true,
    followCalculator: true,
    experimentMode: false,
    showCompactLegend: true,
    showTypicalErrors: true,
    showTheoryLink: true,
    debug: false,
  },

  interpretation: {
    header_bridge: {
      es: "El DCL durante el contacto revela que las fuerzas internas son un par acción-reacción; ninguna fuerza externa horizontal altera el sistema.",
      en: "The FBD during contact reveals that internal forces are an action-reaction pair; no horizontal external force alters the system.",
    },
    reading_focus: {
      es: "Observa que F₁₂ y F₂₁ son siempre iguales en magnitud y opuestas, independientemente de las masas. La energía cinética se conserva íntegramente.",
      en: "Notice that F₁₂ and F₂₁ are always equal in magnitude and opposite, regardless of masses. Kinetic energy is fully conserved.",
    },
    graph_role: {
      es: "Representar las fuerzas de contacto durante una colisión elástica entre dos cuerpos, donde se conservan tanto el momento lineal como la energía cinética.",
      en: "Represent the contact forces during an elastic collision between two bodies, where both linear momentum and kinetic energy are conserved.",
    },
    calc_reading: {
      es: "Los impulsos F₁₂ y F₂₁ son iguales en magnitud y opuestos en sentido (tercera ley de Newton). El momento total se conserva.",
      en: "The impulses F₁₂ and F₂₁ are equal in magnitude and opposite in direction (Newton's third law). Total momentum is conserved.",
    },
    graph_reading: {
      es: "Si una masa es mucho mayor que la otra, el vector impulso sobre el cuerpo ligero domina visualmente. El coeficiente de restitución es 1.",
      en: "If one mass is much larger than the other, the impulse vector on the lighter body dominates visually. The coefficient of restitution is 1.",
    },
    physical_insight: {
      es: "En una colisión elástica, la energía cinética se redistribuye completamente entre los cuerpos sin pérdida. El par F₁₂/F₂₁ transfiere momento e intercambia energía sin disipar nada. La simetría del par acción-reacción es lo que garantiza la conservación del momento, mientras que e = 1 garantiza la conservación de Ec.",
      en: "In an elastic collision, kinetic energy is fully redistributed among the bodies without loss. The F₁₂/F₂₁ pair transfers momentum and exchanges energy without dissipating anything. The symmetry of the action-reaction pair guarantees momentum conservation, while e = 1 guarantees Ek conservation.",
    },
    likely_errors: {
      es: [
        "Olvidar que los impulsos son un par acción-reacción.",
        "Suponer que la energía cinética no se conserva en colisiones elásticas.",
        "Confundir fuerzas de contacto con fuerzas externas al sistema.",
      ],
      en: [
        "Forgetting that impulses are an action-reaction pair.",
        "Assuming kinetic energy is not conserved in elastic collisions.",
        "Confusing contact forces with external forces on the system.",
      ],
    },
  },
};

export default colisionesElasticasProfile;
