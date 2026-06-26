import { createSvgGraph } from "../../graphFactories.jsx";
import profile from "@/v2/components/SVG/profiles/equilibrio-termodinamico.svg.profile.jsx";

export default createSvgGraph({
  displayName: "EquilibrioTermodinamicoGraphsSvg",
  profile,
  mapProfile: (baseProfile, { sharedParams, paramsIn }) => {
    const calc = sharedParams?.__calc || paramsIn?.__calc || {};
    return {
      ...baseProfile,
      params: {
        ...(baseProfile.params || {}),
        fromCalculator: calc,
      },
    };
  },
});
