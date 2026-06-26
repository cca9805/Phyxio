import profile from "@/v2/components/SVG/profiles/pascal.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const PrincipioDePascalGraphsSvg = createSvgGraph({
  profile,
  displayName: "PrincipioDePascalGraphsSvg",
});

PrincipioDePascalGraphsSvg.profile = profile;


export default PrincipioDePascalGraphsSvg;
