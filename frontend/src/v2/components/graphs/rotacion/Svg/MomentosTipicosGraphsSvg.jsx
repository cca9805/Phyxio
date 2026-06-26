import profile from "@/v2/components/SVG/profiles/momentosTipicos.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";

const MomentosTipicosGraphsSvg = createSvgGraph({
  profile,
  displayName: "MomentosTipicosGraphsSvg",
});

MomentosTipicosGraphsSvg.profile = profile;


export default MomentosTipicosGraphsSvg;
