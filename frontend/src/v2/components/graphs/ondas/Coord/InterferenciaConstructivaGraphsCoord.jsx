import { createCoordGraph } from "../../graphFactories.jsx";
import profile from "./interferencia-constructiva.coord.profile.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
const axisContract = {
  xComponent: "XAxis",
  yComponent: "YAxis",
};

export default createCoordGraph({
  profile,
  axisContract,
  displayName: t("InterferenciaConstructivaGraphsCoord", "InterferenciaConstructivaGraphsCoord"),
});


