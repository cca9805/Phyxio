import profile from "@/v2/components/DCL/profiles/forceIdentification.profile";
import { createDclGraph } from "../../graphFactories.jsx";


const IdentificacionDeFuerzasGraphsDcl = createDclGraph({
  displayName: "IdentificacionDeFuerzasGraphsDcl",
  profile,
});

export default IdentificacionDeFuerzasGraphsDcl;
