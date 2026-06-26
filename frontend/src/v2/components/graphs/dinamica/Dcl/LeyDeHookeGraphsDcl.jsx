import profile from "@/v2/components/DCL/profiles/particleFree.profile";
import { createDclGraph } from "../../graphFactories.jsx";


const LeyDeHookeGraphsDcl = createDclGraph({
  displayName: "LeyDeHookeGraphsDcl",
  profile,
  mapProfile: () => {
    const vectors = Array.isArray(profile?.vectors) ? profile.vectors : [];
    return {
      ...profile,
      meta: {
        ...(profile?.meta || {}),
        id: "dcl-ley-de-hooke",
        leafId: "ley-de-hooke",
        title: {
          es: "DCL · Ley de Hooke",
          en: "FBD · Hooke's Law",
        },
        question: {
          es: "Leer la fuerza elastica y su sentido restaurador",
          en: "Read the elastic force and its restoring direction",
        },
      },
      vectors: vectors
        .filter((vector) => vector?.id !== "weight_main")
        .map((vector) => {
          if (vector?.id === "applied_main") {
            return {
              ...vector,
              id: "spring_main",
              type: "spring_force",
              magnitudeId: "F_e",
              label: {
                es: "Fuerza elastica",
                en: "Spring force",
              },
              symbol: "F_e",
              directionMode: "left",
              semanticRole: "restoring_force",
              style: {
                ...(vector?.style || {}),
                visible: true,
              },
            };
          }
          if (vector?.id === "velocity_main") {
            return {
              ...vector,
              magnitudeId: "x",
              label: {
                es: "Desplazamiento",
                en: "Displacement",
              },
              symbol: "x",
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

export default LeyDeHookeGraphsDcl;
