/**
 * DCL profile — Sistemas aislados y fuerzas externas
 * Dos bloques sobre superficie; fuerzas internas (F₁₂ / F₂₁) y una fuerza
 * externa aplicada (F_ext).  El diagrama destaca la diferencia entre internas
 * (que se cancelan) y externas (que alteran ΣP).
 *
 * Two blocks on a surface; internal forces (F₁₂ / F₂₁) and an applied external
 * force (F_ext). The diagram highlights the difference between internal forces
 * (which cancel) and external forces (which alter ΣP).
 */

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

const profile = {
  scene: DCL_SCENE_IDS.TWO_BODIES_HORIZONTAL,
  question: DCL_QUESTION_TYPES.IDENTIFY_FORCES,
  lang: "es",

  meta: {
    id: "dcl-sistemas-aislados-y-fuerzas-externas",
    title: {
      es: "DCL · Sistemas aislados y fuerzas externas",
      en: "FBD · Isolated systems and external forces",
    },
    smartHeader: {
      es: "Momento lineal · Fuerzas internas vs externas",
      en: "Linear momentum · Internal vs external forces",
    },
    leafId: "sistemas-aislados-y-fuerzas-externas",
    question: {
      es: "¿Qué fuerzas son internas al sistema (se cancelan) y cuáles son externas (alteran ΣP)?",
      en: "Which forces are internal to the system (cancel out) and which are external (alter ΣP)?",
    },
  },

  environment: {
    inclineAngleDeg: 0,
    showGrid: false,
    gravityDirection: DCL_DIRECTION_MODE_IDS.DOWN,
  },

  params: {},

  bodies: [
    {
      id: "body_1",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: { es: "Cuerpo 1 (m₁)", en: "Body 1 (m₁)" },
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
      label: { es: "Cuerpo 2 (m₂)", en: "Body 2 (m₂)" },
      role: "main",
      anchor: DCL_ANCHORS.CENTER,
      style: {
        variant: "default",
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        opacity: 1,
      },
    },
  ],

  vectors: [
    /* ─── Peso y normal — body_1 ─── */
    {
      id: "weight_1",
      type: DCL_VECTOR_TYPE_IDS.WEIGHT,
      bodyId: "body_1",
      magnitudeId: "W1",
      label: { es: "Peso 1", en: "Weight 1" },
      symbol: "P_{1}",
      anchor: DCL_ANCHORS.CENTER,
      semanticRole: "gravitational_cause",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.MUTED,
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
      directionMode: DCL_DIRECTION_MODE_IDS.UP,
      semanticRole: "contact_reaction",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.MUTED,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 1,
        visible: true,
      },
    },
    /* ─── Peso y normal — body_2 ─── */
    {
      id: "weight_2",
      type: DCL_VECTOR_TYPE_IDS.WEIGHT,
      bodyId: "body_2",
      magnitudeId: "W2",
      label: { es: "Peso 2", en: "Weight 2" },
      symbol: "P_{2}",
      anchor: DCL_ANCHORS.CENTER,
      semanticRole: "gravitational_cause",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.MUTED,
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
      directionMode: DCL_DIRECTION_MODE_IDS.UP,
      semanticRole: "contact_reaction",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.MUTED,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 1,
        visible: true,
      },
    },
    /* ─── Par interno acción-reacción (F₁₂ / F₂₁) ─── */
    {
      id: "F12",
      type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
      bodyId: "body_1",
      magnitudeId: "F12",
      label: { es: "Fuerza de 2 sobre 1 (interna)", en: "Force from 2 on 1 (internal)" },
      symbol: "F_{12}",
      anchor: DCL_ANCHORS.CONTACT,
      directionMode: DCL_DIRECTION_MODE_IDS.LEFT,
      semanticRole: "interaction",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        labelPosition: DCL_LABEL_POSITIONS.TOP,
        priority: 2,
        visible: true,
      },
    },
    {
      id: "F21",
      type: DCL_VECTOR_TYPE_IDS.REACTION,
      bodyId: "body_2",
      magnitudeId: "F21",
      label: { es: "Fuerza de 1 sobre 2 (interna)", en: "Force from 1 on 2 (internal)" },
      symbol: "F_{21}",
      anchor: DCL_ANCHORS.CONTACT,
      directionMode: DCL_DIRECTION_MODE_IDS.RIGHT,
      semanticRole: "reaction_pair",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        labelPosition: DCL_LABEL_POSITIONS.TOP,
        priority: 2,
        visible: true,
      },
    },
    /* ─── Fuerza externa ─── */
    {
      id: "Fext",
      type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
      bodyId: "body_2",
      magnitudeId: "Fext",
      label: { es: "Fuerza externa neta", en: "Net external force" },
      symbol: "F_{ext}",
      anchor: DCL_ANCHORS.CENTER,
      directionMode: DCL_DIRECTION_MODE_IDS.RIGHT,
      semanticRole: "external_action",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 3,
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
    showVectorMagnitudes: false,
    showBodyNames: true,
    followCalculator: true,
    experimentMode: true,
    debug: false,

    resolveComponents: false,
    resolveResultant: false,
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
    sectionId: "sistemas-aislados-y-fuerzas-externas",
    conceptId: "internal_vs_external_forces",
    label: {
      es: "Sistemas aislados · Clasificación de fuerzas",
      en: "Isolated systems · Force classification",
    },
  },

  interpretation: {
    header_bridge: {
      es: "La frontera del sistema determina qué fuerzas son internas (se cancelan por la 3.ª ley) y cuáles externas (alteran ΣP).",
      en: "The system boundary determines which forces are internal (cancel by the 3rd law) and which are external (alter ΣP).",
    },
    reading_focus: {
      es: "Observa cómo F₁₂ y F₂₁ son iguales y opuestas (par interno), mientras que F_ext no tiene contrapartida dentro del sistema.",
      en: "Notice how F₁₂ and F₂₁ are equal and opposite (internal pair), while F_ext has no counterpart inside the system.",
    },
    graph_role: {
      es: "Clasificar visualmente cada fuerza como interna o externa al sistema, mostrando que solo las externas rompen la conservación del momento.",
      en: "Visually classify each force as internal or external to the system, showing that only external forces break momentum conservation.",
    },
    calc_reading: {
      es: "Las fuerzas internas F₁₂ y F₂₁ se cancelan por la 3.ª ley de Newton. Solo la fuerza externa neta produce un impulso J_ext = F_ext · Δt que altera el momento total.",
      en: "Internal forces F₁₂ and F₂₁ cancel by Newton's 3rd law. Only the net external force produces an impulse J_ext = F_ext · Δt that changes total momentum.",
    },
    graph_reading: {
      es: "Los vectores atenuados (peso y normal) se anulan verticalmente. El par F₁₂/F₂₁ (secondary) es interno y se cancela. El vector destacado F_ext (primary) es la única fuerza neta sobre el sistema.",
      en: "Muted vectors (weight and normal) cancel vertically. The F₁₂/F₂₁ pair (secondary) is internal and cancels. The highlighted F_ext (primary) is the only net force on the system.",
    },
    physical_insight: {
      es: "La clasificación interna/externa depende de dónde se trace la frontera del sistema. Si agrandamos el sistema para incluir el agente que aplica F_ext, esa fuerza se convierte en interna. La conservación del momento es siempre relativa al sistema elegido.",
      en: "The internal/external classification depends on where the system boundary is drawn. If we enlarge the system to include the agent applying F_ext, that force becomes internal. Momentum conservation is always relative to the chosen system.",
    },
    likely_errors: {
      es: [
        "Confundir fuerzas internas con externas al redibujar la frontera del sistema.",
        "Olvidar que peso y normal se cancelan verticalmente y no afectan ΔP_x.",
        "Pensar que F₁₂ = −F₂₁ implica que no hay movimiento (confusión con equilibrio).",
      ],
      en: [
        "Confusing internal with external forces when redrawing the system boundary.",
        "Forgetting that weight and normal cancel vertically and do not affect ΔP_x.",
        "Thinking F₁₂ = −F₂₁ means no motion (confusion with equilibrium).",
      ],
    },
  },
};

export default profile;
