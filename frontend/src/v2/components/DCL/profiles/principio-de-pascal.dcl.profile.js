import { DCL_SCENE_IDS, DCL_BODY_KIND_IDS, DCL_VECTOR_TYPE_IDS } from "../dclGrammar.js";

const profile = {
  scene: DCL_SCENE_IDS.PARTICLE_FREE,
  meta: {
    id: "dcl-principio-de-pascal",
    leafId: "principio-de-pascal",
    title: { es: "DCL de Pascal", en: "Pascal DCL" },
  },

  graph_identity: {
    pregunta_principal: {
      es: "Como se transmite la presion en fluidos confinados y que fuerzas actuan sobre los embolos",
      en: "How is pressure transmitted in confined fluids and what forces act on the pistons",
    },
    magnitud_estrella: "none",
  },

  bodies: [
    {
      id: "small-piston",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: { es: "Embolo pequeno", en: "Small piston" },
    },
    {
      id: "large-piston",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: { es: "Embolo grande", en: "Large piston" },
    },
  ],

  vectors: [
    {
      id: "input-force",
      type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
      bodyId: "small-piston",
      magnitudeId: "F1",
      label: { es: "Fuerza de entrada", en: "Input force" },
      symbol: "F1",
      semanticRole: "cause",
      style: { color: "#f43f5e" },
    },
    {
      id: "fluid-reaction-small",
      type: DCL_VECTOR_TYPE_IDS.REACTION,
      bodyId: "small-piston",
      magnitudeId: "F1",
      label: { es: "Reaccion del fluido", en: "Fluid reaction" },
      symbol: "R1",
      semanticRole: "opposition",
      style: { color: "#38bdf8" },
    },
    {
      id: "fluid-force-large",
      type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
      bodyId: "large-piston",
      magnitudeId: "F2",
      label: { es: "Fuerza de salida", en: "Output force" },
      symbol: "F2",
      semanticRole: "result",
      style: { color: "#22c55e" },
    },
    {
      id: "load-reaction",
      type: DCL_VECTOR_TYPE_IDS.REACTION,
      bodyId: "large-piston",
      magnitudeId: "F2",
      label: { es: "Reaccion de la carga", en: "Load reaction" },
      symbol: "R2",
      semanticRole: "constraint",
      style: { color: "#f59e0b" },
    },
  ],

  interpretation: {
    header_bridge: { es: "Analisis de fuerzas en la prensa hidraulica", en: "Force analysis in the hydraulic press" },
    reading_focus: { es: "Balance entre fuerza aplicada y fuerza transmitida", en: "Balance between applied force and transmitted force" },
    graph_role: { es: "Representa las fuerzas sobre ambos embolos cuando la presion se transmite por el fluido", en: "Represents the forces on both pistons when pressure is transmitted by the fluid" },
    calc_reading: { es: "La igualdad F1/A1 = F2/A2 explica la multiplicacion de fuerza", en: "The equality F1/A1 = F2/A2 explains force multiplication" },
    graph_reading: { es: "El embolo pequeno recibe F1 y el grande entrega F2 por efecto de la misma presion confinada", en: "The small piston receives F1 and the large piston delivers F2 as an effect of the same confined pressure" },
    physical_insight: { es: "Pascal no crea trabajo: intercambia fuerza por desplazamiento en un fluido confinado", en: "Pascal does not create work: it trades force for displacement in a confined fluid" },
    likely_errors: {
      es: ["Confundir fuerza con presion", "Creer que la prensa multiplica trabajo en vez de fuerza"],
      en: ["Confusing force with pressure", "Thinking the press multiplies work instead of force"],
    },
  },

  options: {
    showCompactLegend: true,
  },
};

export default profile;
