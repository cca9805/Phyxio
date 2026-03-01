import React from "react";
import OndasGraphsCoord from "./OndasGraphsCoord";

export default function CuerdasOndasEstacionariasGraphsCoord(props) {
  return (
    <OndasGraphsCoord
      {...props}
      forcedScenario="standing"
      leafProfileId="cuerdas-ondas-estacionarias"
    />
  );
}
