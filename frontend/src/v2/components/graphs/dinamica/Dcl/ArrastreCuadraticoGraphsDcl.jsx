import profile from "@/v2/components/DCL/profiles/particleFree.profile";
import { DCL_HIGHLIGHT_MODES, DCL_VECTOR_TYPE_IDS } from "@/v2/components/DCL/dclGrammar";
import { createDclGraph } from "../../graphFactories.jsx";


const ArrastreCuadraticoGraphsDcl = createDclGraph({
  displayName: "ArrastreCuadraticoGraphsDcl",
  profile,
  mapProfile: () => {
    const vectors = Array.isArray(profile?.vectors) ? profile.vectors : [];
    return {
      ...profile,
      meta: {
        ...(profile?.meta || {}),
        id: "dcl-arrastre-cuadratico",
        leafId: "arrastre-cuadratico",
        title: {
          es: "DCL - Arrastre cuadratico",
          en: "FBD - Quadratic drag",
        },
        question: {
          es: "Leer como el arrastre cuadratico crece con la rapidez",
          en: "Read how quadratic drag grows with speed",
        },
      },
      vectors: vectors.map((vector) => {
        if (vector?.id === "weight_main") {
          return {
            ...vector,
            magnitudeId: "P",
            symbol: "P",
            style: {
              ...(vector?.style || {}),
              visible: true,
            },
          };
        }
        if (vector?.id === "velocity_main") {
          return {
            ...vector,
            magnitudeId: "v",
            symbol: "v",
            directionMode: "down",
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
            directionMode: "down",
            style: {
              ...(vector?.style || {}),
              visible: false,
            },
          };
        }
        if (vector?.id === "applied_main") {
          return {
            ...vector,
            id: "drag_main",
            type: DCL_VECTOR_TYPE_IDS.DRAG,
            magnitudeId: "F_d",
            label: {
              es: "Arrastre cuadratico",
              en: "Quadratic drag",
            },
            symbol: "F_d",
            directionMode: "up",
            semanticRole: "fluid_resistance",
            style: {
              ...(vector?.style || {}),
              highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
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

export default ArrastreCuadraticoGraphsDcl;
