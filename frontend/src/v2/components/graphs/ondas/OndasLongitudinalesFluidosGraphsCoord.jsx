import React from "react";
import OndasGraphsCoord from "./OndasGraphsCoord";

export default function OndasLongitudinalesFluidosGraphsCoord(props) {
  return (
    <OndasGraphsCoord
      {...props}
      forcedScenario="fluidLongitudinal"
      leafProfileId="ondas-longitudinales"
    />
  );
}
