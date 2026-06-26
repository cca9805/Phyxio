import profile from "@/v2/components/DCL/profiles/particleFree.profile";
import { DCL_VECTOR_TYPE_IDS } from "@/v2/components/DCL/dclGrammar";
import { createDclGraph } from "../../graphFactories.jsx";


const ConceptoFuerzaCentripetaGraphsDcl = createDclGraph({
  displayName: "ConceptoFuerzaCentripetaGraphsDcl",
  profile,
  mapProfile: () => {
    const vectors = Array.isArray(profile?.vectors) ? profile.vectors : [];
    return {
      ...profile,
      meta: {
        ...(profile?.meta || {}),
        id: "dcl-concepto-fuerza-centripeta",
        leafId: "concepto-fuerza-centripeta",
        title: {
          es: "DCL - Concepto de fuerza centripeta",
          en: "FBD - Concept of centripetal force",
        },
        question: {
          es: "Leer la resultante radial que curva la trayectoria",
          en: "Read the radial resultant that bends the trajectory",
        },
      },
      vectors: vectors.map((vector) => {
        if (vector?.id === "weight_main") {
          return {
            ...vector,
            style: { ...(vector?.style || {}), visible: false },
          };
        }
        if (vector?.id === "velocity_main") {
          return {
            ...vector,
            magnitudeId: "v",
            symbol: "v",
            directionMode: "up",
            style: { ...(vector?.style || {}), visible: true },
          };
        }
        if (vector?.id === "acceleration_main") {
          return {
            ...vector,
            magnitudeId: "a_c",
            symbol: "a_c",
            directionMode: "left",
            style: { ...(vector?.style || {}), visible: true },
          };
        }
        if (vector?.id === "applied_main") {
          return {
            ...vector,
            id: "centripetal_main",
            type: DCL_VECTOR_TYPE_IDS.CUSTOM,
            magnitudeId: "F_c",
            label: {
              es: "Resultante radial",
              en: "Radial resultant",
            },
            symbol: "F_c",
            directionMode: "left",
            semanticRole: "radial_resultant",
            style: { ...(vector?.style || {}), visible: true },
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

export default ConceptoFuerzaCentripetaGraphsDcl;
