import profile from "@/v2/components/SVG/profiles/problemasTipoExamen.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const ProblemasTipoExamenGraphsSvg = createSvgGraph({
  profile,
  displayName: "ProblemasTipoExamenGraphsSvg",
});

ProblemasTipoExamenGraphsSvg.profile = profile;


export default ProblemasTipoExamenGraphsSvg;
