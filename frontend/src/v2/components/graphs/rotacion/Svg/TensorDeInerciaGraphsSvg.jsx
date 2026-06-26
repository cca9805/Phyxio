import profile from "@/v2/components/SVG/profiles/tensorDeInercia.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const TensorDeInerciaGraphsSvg = createSvgGraph({
  profile,
  displayName: "TensorDeInerciaGraphsSvg",
});

TensorDeInerciaGraphsSvg.profile = profile;


export default TensorDeInerciaGraphsSvg;
