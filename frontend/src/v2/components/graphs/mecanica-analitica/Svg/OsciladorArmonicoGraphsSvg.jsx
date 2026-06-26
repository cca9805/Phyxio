import { createSvgGraph } from "../../graphFactories.jsx";
import profile from "./OsciladorArmonicoGraphsSvg.profile.js";

const OsciladorArmonicoGraphsSvg = createSvgGraph({
  profile,
  displayName: "OsciladorArmonicoGraphsSvg",
});

OsciladorArmonicoGraphsSvg.profile = profile;

export { profile };
export default OsciladorArmonicoGraphsSvg;
