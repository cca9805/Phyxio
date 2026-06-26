import profile from "./ondas-superficiales.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const OndasSuperficialesGraphsSvg = createSvgGraph({
  profile,
  displayName: "OndasSuperficialesGraphsSvg",
});

OndasSuperficialesGraphsSvg.profile = profile;


export default OndasSuperficialesGraphsSvg;
