import { createSvgGraph } from "@/v2/components/graphs/graphFactories.jsx";
import profile from "@/v2/components/SVG/profiles/palanca.svg.profile.jsx";

export default createSvgGraph({
  displayName: "PalancaGraphsSvg",
  profile,
  graphIdentity: {
    pregunta_principal: {
      es: "¿Cómo se visualiza el balance de momentos y la ventaja mecánica en los distintos géneros de palanca?",
      en: "How is torque balance and mechanical advantage visualized in the different classes of levers?",
    },
  },
});
