import baseProfile from "./rodaduraCinematicaSinDeslizamiento.svg.profile.jsx";
import { createSvgProfileContract } from "./svgProfileContracts.js";

const profile = {
  ...baseProfile,
  meta: {
    ...baseProfile.meta,
    id: "svg-estrategia-para-problemas-de-rodadura",
    leafId: "estrategia-para-problemas-de-rodadura",
    title: {
      es: "Estrategia para problemas de rodadura",
      en: "Strategy for Rolling Problems",
    },
    subtitle: {
      es: "Comparación visual entre condición de rodadura, dinámica y energía",
      en: "Visual comparison among rolling condition, dynamics, and energy",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Qué método conviene usar primero en un problema de rodadura?",
      en: "Which method should be used first in a rolling problem?",
    },
    magnitud_estrella: "a_cm",
    magnitud_secundaria: "K_total",
    variable_control: "phi",
  },
  graph_contract: createSvgProfileContract({
    leafId: "estrategia-para-problemas-de-rodadura",
    graphId: "svg-estrategia-para-problemas-de-rodadura",
    purpose: {
      es: "Usar la escena de rodadura como apoyo para decidir entre cinemática, dinámica y energía.",
      en: "Use the rolling scene as support for choosing among kinematics, dynamics, and energy.",
    },
    level: {
      es: "bachillerato | universidad inicial",
      en: "high school | early undergraduate",
    },
    expectedInputs: ["R", "omega"],
    derivedMagnitudes: ["v_cm", "K_total", "a_cm"],
    targetCandidates: ["a_cm", "K_total", "v_cm"],
    equations: ["v_cm = omega * R", "K_total = 1/2 m v_cm^2 + 1/2 I omega^2"],
    hypotheses: ["rodadura sin deslizamiento", "solido rigido", "eje definido"],
    validityDomain: ["rozamiento estatico suficiente", "sin deformacion apreciable"],
    visualSimplifications: ["rueda circular rigida", "contacto puntual"],
    alwaysVisible: ["v_cm"],
  }),
  infoCards: [
    {
      key: "decisionMethod",
      label: {
        es: "Decisión de método",
        en: "Method decision",
      },
      highlight: "a_cm, K_total, E_total",
      highlightColor: "#38bdf8",
      description: {
        es: "Compara condición de rodadura, dinámica y energía antes de elegir ecuaciones.",
        en: "Compare rolling condition, dynamics, and energy before choosing equations.",
      },
    },
  ],
  interpretation_binding: {
    paramsIn: ["R", "omega"],
    stateOut: ["v_cm", "K_total", "a_cm"],
    target: "a_cm",
  },
};

export default profile;
