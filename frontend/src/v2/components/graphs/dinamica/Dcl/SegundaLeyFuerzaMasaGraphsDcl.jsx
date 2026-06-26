import profile from "@/v2/components/DCL/profiles/secondLawForceMass.profile";
import { createDclGraph } from "../../graphFactories.jsx";


const SegundaLeyFuerzaMasaGraphsDcl = createDclGraph({
  displayName: "SegundaLeyFuerzaMasaGraphsDcl",
  profile,
});

export default SegundaLeyFuerzaMasaGraphsDcl;
