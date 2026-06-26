import profile from "@/v2/components/SVG/profiles/archimedes.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const ArchimedesGraphsSvg = createSvgGraph({
  profile,
  displayName: "ArchimedesGraphsSvg",
});

ArchimedesGraphsSvg.profile = profile;


export default ArchimedesGraphsSvg;
