import profile from "@/v2/components/DCL/profiles/particleFree.profile";
import { createDclGraph } from "../../graphFactories.jsx";


const PesoEnDiferentesContextosGraphsDcl = createDclGraph({
  displayName: "PesoEnDiferentesContextosGraphsDcl",
  profile,
  mapProfile: () => {
    const vectors = Array.isArray(profile?.vectors) ? profile.vectors : [];
    return {
      ...profile,
      meta: {
        ...(profile?.meta || {}),
        id: "dcl-peso-en-diferentes-contextos",
        leafId: "peso-en-diferentes-contextos",
        title: {
          es: "DCL · Peso en diferentes contextos",
          en: "FBD · Weight in Different Contexts",
        },
        pregunta_principal: {
          es: "¿Cómo cambia la fuerza de soporte detectada por un sensor cuando varía la gravedad o la aceleración del sistema?",
          en: "How does the support force detected by a sensor change when gravity or system acceleration varies?",
        },
      },
      vectors: vectors.map((vector) => {
        if (vector?.id === "weight_main") {
          return { ...vector, magnitudeId: "P", symbol: "P" };
        }
        if (vector?.id === "applied_main") {
          return {
            ...vector,
            id: "apparent_main",
            type: "reaction",
            magnitudeId: "Pap",
            label: {
              es: "Peso aparente",
              en: "Apparent weight",
            },
            symbol: "P_ap",
            directionMode: "up",
            semanticRole: "support_reading",
            style: {
              ...(vector?.style || {}),
              visible: true,
            },
          };
        }
        if (vector?.id === "acceleration_main") {
          return {
            ...vector,
            magnitudeId: "a",
            symbol: "a",
            style: {
              ...(vector?.style || {}),
              visible: true,
            },
          };
        }
        return vector;
      }),
      options: {
        ...(profile?.options || {}),
        displayMode: "student",
        enableVectorSelection: true,
        showCompactLegend: true,
        showTypicalErrors: true,
        showTheoryLink: true,
      },
    };
  
  },
});

export default PesoEnDiferentesContextosGraphsDcl;
