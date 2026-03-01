import React from "react";
import OndasGraphsCoord from "./OndasGraphsCoord";

export default function CuerdasArmonicosGraphsCoord(props) {
  return (
    <OndasGraphsCoord
      {...props}
      forcedScenario="standing"
      leafProfileId="cuerdas-armonicos"
    />
  );
}
