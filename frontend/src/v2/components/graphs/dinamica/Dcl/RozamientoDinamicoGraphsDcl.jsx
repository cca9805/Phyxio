import profile from "@/v2/components/DCL/profiles/blockOnIncline.profile";
import { createDclGraph } from "../../graphFactories.jsx";


const RozamientoDinamicoGraphsDcl = createDclGraph({
  displayName: "RozamientoDinamicoGraphsDcl",
  profile,
  mapProfile: () => {
    const vectors = Array.isArray(profile?.vectors) ? profile.vectors : [];
    return {
      ...profile,
      meta: {
        ...(profile?.meta || {}),
        id: "dcl-rozamiento-dinamico",
        leafId: "rozamiento-dinamico",
        title: {
          es: "DCL · Rozamiento dinamico",
          en: "FBD · Kinetic Friction",
        },
        question: {
          es: "Leer el rozamiento durante el deslizamiento",
          en: "Read friction during sliding motion",
        },
      },
      vectors: vectors.map((vector) => {
        if (vector?.id === "friction_main") {
          return { ...vector, magnitudeId: "f_k", symbol: "f_k" };
        }
        if (vector?.id === "applied_main") {
          return {
            ...vector,
            magnitudeId: "F",
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

export default RozamientoDinamicoGraphsDcl;
