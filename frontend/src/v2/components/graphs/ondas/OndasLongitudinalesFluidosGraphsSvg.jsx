import React from "react";
import OndasGraphsSvg from "./OndasGraphsSvg";

export default function OndasLongitudinalesFluidosGraphsSvg(props) {
  return (
    <OndasGraphsSvg
      {...props}
      forcedScenario="fluidLongitudinal"
      leafProfileId="ondas-longitudinales"
    />
  );
}
