import profile from "@/v2/components/SVG/profiles/manometros.svg.profile.jsx";
import { createSvgGraph } from "../../graphFactories.jsx";


/*
  Contract for phyxio_leaf_validator:
  This SVG represents a U-tube manometer (tubo, fluido, nivel).
*/

const ManometrosGraphsSvg = createSvgGraph({
  profile,
  displayName: "ManometrosGraphsSvg",
});

ManometrosGraphsSvg.profile = profile;


export default ManometrosGraphsSvg;
