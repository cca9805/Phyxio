import profile from "@/v2/components/DCL/profiles/particleFree.profile";
import { DCL_VECTOR_TYPE_IDS } from "@/v2/components/DCL/dclGrammar";
import { createDclGraph } from "../../graphFactories.jsx";


const LoopVerticalYCondicionDeContactoGraphsDcl = createDclGraph({
  displayName: "LoopVerticalYCondicionDeContactoGraphsDcl",
  profile,
  mapProfile: () => {
    const vectors = Array.isArray(profile?.vectors) ? profile.vectors : [];
    return {
      ...profile,
      meta: {
        ...(profile?.meta || {}),
        id: "dcl-loop-vertical-y-condicion-de-contacto",
        leafId: "loop-vertical-y-condicion-de-contacto",
        title: {
          es: "DCL - Loop vertical y condicion de contacto",
          en: "FBD - Vertical loop and contact condition",
        },
        question: {
          es: "Leer las fuerzas en el punto alto del loop",
          en: "Read the forces at the top point of the loop",
        },
      },
      vectors: vectors.map((vector) => {
        if (vector?.id === "weight_main") {
          return {
            ...vector,
            magnitudeId: "P",
            symbol: "P",
            directionMode: "down",
            style: { ...(vector?.style || {}), visible: true },
          };
        }
        if (vector?.id === "velocity_main") {
          return {
            ...vector,
            magnitudeId: "v_top",
            symbol: "v_top",
            directionMode: "right",
            style: { ...(vector?.style || {}), visible: true },
          };
        }
        if (vector?.id === "acceleration_main") {
          return {
            ...vector,
            magnitudeId: "a_c",
            symbol: "a_c",
            directionMode: "down",
            style: { ...(vector?.style || {}), visible: true },
          };
        }
        if (vector?.id === "applied_main") {
          return {
            ...vector,
            id: "normal_track",
            type: DCL_VECTOR_TYPE_IDS.REACTION,
            magnitudeId: "N_top",
            label: {
              es: "Normal de la pista",
              en: "Track normal",
            },
            symbol: "N_top",
            directionMode: "down",
            semanticRole: "contact_force",
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

export default LoopVerticalYCondicionDeContactoGraphsDcl;
