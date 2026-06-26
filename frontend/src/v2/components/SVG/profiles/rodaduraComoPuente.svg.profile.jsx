import baseProfile from "./rodaduraCinematicaSinDeslizamiento.svg.profile.jsx";
import { createSvgProfileContract } from "./svgProfileContracts.js";

const profile = {
  ...baseProfile,
  meta: {
    ...baseProfile.meta,
    id: "svg-rodadura-como-puente",
    leafId: "rodadura-como-puente-entre-traslacion-y-rotacion",
    title: {
      es: "Rodadura como puente entre traslación y rotación",
      en: "Rolling as a Bridge",
    },
    subtitle: {
      es: "El avance del centro de masas y el giro del sólido se leen juntos",
      en: "Center-of-mass advance and rigid-body spin are read together",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo conecta la rodadura la traslación del centro de masas con la rotación del sólido?",
      en: "How does rolling connect center-of-mass translation with rigid-body rotation?",
    },
    magnitud_estrella: "v_cm",
    magnitud_secundaria: "omega",
    variable_control: "R",
  },
  graph_contract: createSvgProfileContract({
    leafId: "rodadura-como-puente-entre-traslacion-y-rotacion",
    graphId: "svg-rodadura-como-puente",
    purpose: {
      es: "Mostrar que rodar no es solo avanzar ni solo girar, sino acoplar ambas descripciones mediante el contacto.",
      en: "Show that rolling is neither only advancing nor only spinning, but coupling both descriptions through contact.",
    },
    level: {
      es: "bachillerato | universidad inicial",
      en: "high school | early undergraduate",
    },
    expectedInputs: ["R", "omega"],
    derivedMagnitudes: ["v_cm", "v_top", "v_contact"],
    targetCandidates: ["v_cm", "omega"],
    equations: ["v_cm = omega * R", "theta = s / R", "a_cm = alpha * R"],
    hypotheses: ["rodadura sin deslizamiento", "solido rigido", "contacto puntual"],
    validityDomain: ["sin patinaje", "radio constante", "eje definido"],
    visualSimplifications: ["rueda circular rigida", "suelo plano"],
    alwaysVisible: ["v_cm", "omega"],
  }),
  infoCards: [
    {
      key: "bridge",
      label: {
        es: "Puente físico",
        en: "Physical bridge",
      },
      highlight: "v_cm = omega R",
      highlightColor: "#38bdf8",
      description: {
        es: "El contacto convierte giro en avance del centro de masas.",
        en: "Contact turns spin into center-of-mass advance.",
      },
    },
  ],
  interpretation_binding: {
    paramsIn: ["R", "omega"],
    stateOut: ["v_cm", "v_top", "v_contact"],
    target: "v_cm",
  },
};

export default profile;
