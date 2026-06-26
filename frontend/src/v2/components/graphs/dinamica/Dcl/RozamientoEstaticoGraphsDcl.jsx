import profile from "@/v2/components/DCL/profiles/blockOnIncline.profile";
import { createDclGraph } from "../../graphFactories.jsx";


const RozamientoEstaticoGraphsDcl = createDclGraph({
  displayName: "RozamientoEstaticoGraphsDcl",
  profile,
  mapProfile: () => {
    const vectors = Array.isArray(profile?.vectors) ? profile.vectors : [];
    return {
      ...profile,
      meta: {
        ...(profile?.meta || {}),
        id: "dcl-rozamiento-estatico",
        leafId: "rozamiento-estatico",
        title: {
          es: "DCL · Rozamiento estatico",
          en: "FBD · Static Friction",
        },
        question: {
          es: "Leer el rozamiento que se ajusta sin deslizar",
          en: "Read friction that adjusts without slipping",
        },
      },
      vectors: vectors.map((vector) => {
        if (vector?.id === "friction_main") {
          return { ...vector, magnitudeId: "f_s", symbol: "f_s" };
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

export default RozamientoEstaticoGraphsDcl;
