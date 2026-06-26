import profile from "@/v2/components/DCL/profiles/particleFree.profile";
import { createDclGraph } from "../../graphFactories.jsx";


const DefinicionYExpresionGraphsDcl = createDclGraph({
  displayName: "DefinicionYExpresionGraphsDcl",
  profile,
  mapProfile: () => {
    const vectors = Array.isArray(profile?.vectors) ? profile.vectors : [];
    return {
      ...profile,
      meta: {
        ...(profile?.meta || {}),
        id: "dcl-definicion-y-expresion",
        leafId: "definicion-y-expresion",
        title: {
          es: "DCL - Definicion y expresion del peso",
          en: "FBD - Definition and expression of weight",
        },
        question: {
          es: "Leer el peso como fuerza gravitatoria dirigida hacia abajo",
          en: "Read weight as a gravitational force directed downward",
        },
      },
      vectors: vectors.map((vector) => {
        if (vector?.id === "weight_main") {
          return {
            ...vector,
            magnitudeId: "P",
            symbol: "P",
            directionMode: "down",
            style: {
              ...(vector?.style || {}),
              visible: true,
            },
          };
        }
        return {
          ...vector,
          style: {
            ...(vector?.style || {}),
            visible: false,
          },
        };
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

export default DefinicionYExpresionGraphsDcl;
