import React from "react";
import OndasGraphsCoord from "./OndasGraphsCoord";

export default function OndasSuperficialesGraphsCoord(props) {
  return (
    <OndasGraphsCoord
      {...props}
      forcedScenario="surfaceWaves"
      leafProfileId="ondas-superficiales"
    />
  );
}
