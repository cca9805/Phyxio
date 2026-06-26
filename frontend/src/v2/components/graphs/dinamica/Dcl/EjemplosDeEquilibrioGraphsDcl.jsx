import profile from "@/v2/components/DCL/profiles/particleFree.profile";
import { createDclGraph } from "../../graphFactories.jsx";

/**
 * DCL force declarations for examples of equilibrium:
 * Forces: peso (weight), normal force, tension, friction (fuerza de rozamiento).
 * Vector symbols: F_normal, F_tension, F_peso (Weight), F_friction (friccion).
 */
const EjemplosDeEquilibrioGraphsDcl = createDclGraph({
  displayName: "EjemplosDeEquilibrioGraphsDcl",
  profile,
  mapProfile: () => {
    return {
      ...profile,
      meta: {
        ...(profile?.meta || {}),
        id: "dcl-ejemplos-de-equilibrio",
        leafId: "ejemplos-de-equilibrio",
      },
      options: {
        ...(profile?.options || {}),
        displayMode: "student",
        enableVectorSelection: true,
        showTypicalErrors: true,
        showTheoryLink: true,
      },
    };
  },
});

export default EjemplosDeEquilibrioGraphsDcl;

