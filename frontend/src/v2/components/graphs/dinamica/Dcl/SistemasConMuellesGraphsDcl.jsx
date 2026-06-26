import profile from "@/v2/components/DCL/profiles/particleFree.profile";
import { createDclGraph } from "../../graphFactories.jsx";


const SistemasConMuellesGraphsDcl = createDclGraph({
  displayName: "SistemasConMuellesGraphsDcl",
  profile,
  mapProfile: () => {
    const vectors = Array.isArray(profile?.vectors) ? profile.vectors : [];
    return {
      ...profile,
      meta: {
        ...(profile?.meta || {}),
        id: "dcl-sistemas-con-muelles",
        leafId: "sistemas-con-muelles",
        title: {
          es: "DCL · Sistemas con muelles",
          en: "FBD · Spring systems",
        },
        question: {
          es: "Leer la fuerza elastica equivalente y la deformacion del sistema",
          en: "Read the equivalent spring force and system deformation",
        },
      },
      vectors: vectors
        .filter((vector) => vector?.id !== "weight_main")
        .map((vector) => {
          if (vector?.id === "applied_main") {
            return {
              ...vector,
              id: "spring_equivalent",
              type: "spring_force",
              magnitudeId: "Fel",
              label: {
                es: "Fuerza elastica equivalente",
                en: "Equivalent spring force",
              },
              symbol: "F_el,tot",
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
              id: "deformation_total",
              magnitudeId: "x",
              label: {
                es: "Deformacion total",
                en: "Total deformation",
              },
              symbol: "x",
              directionMode: "right",
              semanticRole: "kinematic_state",
              style: {
                ...(vector?.style || {}),
                visible: true,
              },
            };
          }
          if (vector?.id === "acceleration_main") {
            return {
              ...vector,
              magnitudeId: "keq",
              label: {
                es: "Rigidez equivalente",
                en: "Equivalent stiffness",
              },
              symbol: "k_eq",
              directionMode: "up",
              semanticRole: "model_parameter",
              style: {
                ...(vector?.style || {}),
                visible: false,
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

export default SistemasConMuellesGraphsDcl;
