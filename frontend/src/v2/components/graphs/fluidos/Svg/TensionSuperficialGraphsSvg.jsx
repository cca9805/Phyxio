import profile from "../../../SVG/profiles/tension-superficial.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const TensionSuperficialGraphsSvg = createSvgGraph({
  profile,
  displayName: "TensionSuperficialGraphsSvg",
});

TensionSuperficialGraphsSvg.profile = profile;


export default TensionSuperficialGraphsSvg;
