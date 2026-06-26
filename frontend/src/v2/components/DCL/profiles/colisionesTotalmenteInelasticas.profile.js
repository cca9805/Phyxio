// frontend/src/v2/components/DCL/profiles/colisionesTotalmenteInelasticas.profile.js

import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_ANCHORS,
  DCL_HIGHLIGHT_MODES,
  DCL_LABEL_POSITIONS,
} from "../dclGrammar";

const colisionesTotalmenteInelasticasProfile = {
  scene: DCL_SCENE_IDS.TWO_BODIES_HORIZONTAL,
  question: DCL_QUESTION_TYPES.IDENTIFY_FORCES,
  lang: "es",

  meta: {
    id: "dcl-colisiones-totalmente-inelasticas",
    title: {
      es: "DCL · Colisión totalmente inelástica",
      en: "FBD · Perfectly inelastic collision",
    },
    leafId: "colisiones-totalmente-inelasticas",
    question: {
      es: "Identificar fuerzas durante el contacto y analizar la unión posterior de los cuerpos",
      en: "Identify contact forces and analyze the post-collision sticking of bodies",
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
      id: "velocity_combined",
      type: DCL_VECTOR_TYPE_IDS.VELOCITY,
      bodyId: "body_1",
      magnitudeId: "vf",
      label: { es: "Velocidad final (unidos)", en: "Final velocity (combined)" },
      symbol: "v_{f}",
      anchor: DCL_ANCHORS.CENTER,
      directionMode: "right",
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
      es: "El DCL durante el contacto es idéntico al de cualquier colisión: par acción-reacción. La diferencia está en que los cuerpos quedan unidos (e = 0) y la pérdida de Ec es máxima.",
      en: "The FBD during contact is identical to any collision: action-reaction pair. The difference is that the bodies stick together (e = 0) and Ek loss is maximal.",
    },
    reading_focus: {
      es: "Observa que F₁₂ y F₂₁ siguen siendo iguales y opuestas. Tras el choque, los dos cuerpos se mueven como uno solo con velocidad v_f.",
      en: "Notice that F₁₂ and F₂₁ are still equal and opposite. After the collision, both bodies move as one with velocity v_f.",
    },
    graph_role: {
      es: "Representar las fuerzas durante una colisión totalmente inelástica, donde los cuerpos quedan unidos tras el impacto con máxima pérdida de energía cinética compatible con la conservación de momento.",
      en: "Represent the forces during a perfectly inelastic collision, where bodies stick together after impact with the maximum kinetic energy loss compatible with momentum conservation.",
    },
    calc_reading: {
      es: "Tras el choque ambos cuerpos se mueven con la misma velocidad final. El coeficiente de restitución es 0.",
      en: "After the collision both bodies move with the same final velocity. The coefficient of restitution is 0.",
    },
    graph_reading: {
      es: "Si las masas son iguales y un cuerpo está en reposo, el sistema final se mueve a la mitad de la velocidad inicial del cuerpo en movimiento.",
      en: "If the masses are equal and one body is at rest, the final system moves at half the initial velocity of the moving body.",
    },
    physical_insight: {
      es: "La colisión totalmente inelástica maximiza la energía cinética disipada compatible con la conservación del momento. Toda la energía cinética en el marco del centro de masas se transforma en deformación. Es el límite inferior de e = 0.",
      en: "The perfectly inelastic collision maximizes kinetic energy loss compatible with momentum conservation. All kinetic energy in the center-of-mass frame transforms into deformation. It is the lower bound e = 0.",
    },
    likely_errors: {
      es: [
        "Creer que los cuerpos se detienen siempre tras una colisión totalmente inelástica.",
        "Olvidar que el momento lineal sí se conserva aunque la energía cinética no.",
        "Aplicar coeficiente de restitución distinto de cero.",
      ],
      en: [
        "Believing that bodies always stop after a perfectly inelastic collision.",
        "Forgetting that linear momentum is conserved even though kinetic energy is not.",
        "Using a coefficient of restitution other than zero.",
      ],
    },
  },
};

export default colisionesTotalmenteInelasticasProfile;
