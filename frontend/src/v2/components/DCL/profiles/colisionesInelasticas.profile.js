// frontend/src/v2/components/DCL/profiles/colisionesInelasticas.profile.js

import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_ANCHORS,
  DCL_HIGHLIGHT_MODES,
  DCL_LABEL_POSITIONS,
} from "../dclGrammar";

const colisionesInelasticasProfile = {
  scene: DCL_SCENE_IDS.TWO_BODIES_HORIZONTAL,
  question: DCL_QUESTION_TYPES.IDENTIFY_FORCES,
  lang: "es",

  meta: {
    id: "dcl-colisiones-inelasticas",
    title: {
      es: "DCL · Colisión inelástica",
      en: "FBD · Inelastic collision",
    },
    leafId: "colisiones-inelasticas",
    question: {
      es: "Identificar fuerzas durante el contacto y analizar la disipación de energía cinética",
      en: "Identify contact forces and analyze kinetic energy dissipation",
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
      label: { es: "Cuerpo 1", en: "Body 1" },
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
      label: { es: "Cuerpo 2", en: "Body 2" },
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
      style: { highlight: DCL_HIGHLIGHT_MODES.NONE, labelPosition: DCL_LABEL_POSITIONS.END, priority: 1, visible: true },
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
      style: { highlight: DCL_HIGHLIGHT_MODES.NONE, labelPosition: DCL_LABEL_POSITIONS.END, priority: 1, visible: true },
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
      style: { highlight: DCL_HIGHLIGHT_MODES.PRIMARY, labelPosition: DCL_LABEL_POSITIONS.END, priority: 3, visible: true },
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
      style: { highlight: DCL_HIGHLIGHT_MODES.NONE, labelPosition: DCL_LABEL_POSITIONS.END, priority: 1, visible: true },
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
      style: { highlight: DCL_HIGHLIGHT_MODES.NONE, labelPosition: DCL_LABEL_POSITIONS.END, priority: 1, visible: true },
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
      style: { highlight: DCL_HIGHLIGHT_MODES.PRIMARY, labelPosition: DCL_LABEL_POSITIONS.END, priority: 3, visible: true },
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
      style: { highlight: DCL_HIGHLIGHT_MODES.SECONDARY, labelPosition: DCL_LABEL_POSITIONS.END, priority: 2, visible: false },
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
      style: { highlight: DCL_HIGHLIGHT_MODES.SECONDARY, labelPosition: DCL_LABEL_POSITIONS.END, priority: 2, visible: false },
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
      es: "El DCL durante el contacto muestra el par acción-reacción; la pérdida de energía cinética se manifiesta en deformación, no en las fuerzas.",
      en: "The FBD during contact shows the action-reaction pair; kinetic energy loss manifests as deformation, not in the forces.",
    },
    reading_focus: {
      es: "Observa que F₁₂ y F₂₁ siguen siendo iguales y opuestas (3.ª ley). La diferencia con la colisión elástica no está en las fuerzas sino en el coeficiente de restitución 0 < e < 1.",
      en: "Notice that F₁₂ and F₂₁ are still equal and opposite (3rd law). The difference from elastic collision is not in the forces but in the coefficient of restitution 0 < e < 1.",
    },
    graph_role: {
      es: "Representar las fuerzas de contacto durante una colisión inelástica, donde se conserva el momento lineal pero se disipa parte de la energía cinética.",
      en: "Represent the contact forces during an inelastic collision, where linear momentum is conserved but part of the kinetic energy is dissipated.",
    },
    calc_reading: {
      es: "Los impulsos siguen siendo un par acción-reacción. La pérdida de energía cinética se manifiesta en deformación permanente, no en las fuerzas del DCL.",
      en: "The impulses are still an action-reaction pair. The kinetic energy loss manifests as permanent deformation, not in the FBD forces.",
    },
    graph_reading: {
      es: "El coeficiente de restitución es menor que 1. La diferencia de velocidades finales es menor que la diferencia de velocidades iniciales.",
      en: "The coefficient of restitution is less than 1. The final velocity difference is smaller than the initial velocity difference.",
    },
    physical_insight: {
      es: "La energía cinética disipada se transforma en deformación permanente, calor o sonido. El DCL es idéntico al de una colisión elástica: las fuerzas de contacto siguen siendo un par 3.ª ley. La inelasticidad se codifica en e < 1, no en las fuerzas.",
      en: "The dissipated kinetic energy transforms into permanent deformation, heat, or sound. The FBD is identical to an elastic collision: contact forces are still a 3rd-law pair. Inelasticity is encoded in e < 1, not in the forces.",
    },
    likely_errors: {
      es: [
        "Suponer que la pérdida de energía cinética implica que el momento no se conserva.",
        "Olvidar que las fuerzas internas siguen cumpliendo la tercera ley de Newton.",
        "Confundir colisión inelástica con totalmente inelástica.",
      ],
      en: [
        "Assuming kinetic energy loss implies momentum is not conserved.",
        "Forgetting that internal forces still obey Newton's third law.",
        "Confusing inelastic collision with perfectly inelastic collision.",
      ],
    },
  },
};

export default colisionesInelasticasProfile;
