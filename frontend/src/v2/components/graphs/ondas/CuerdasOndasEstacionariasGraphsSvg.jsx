import React from "react";
import OndasGraphsSvg from "./OndasGraphsSvg";

export default function CuerdasOndasEstacionariasGraphsSvg(props) {
  return (
    <OndasGraphsSvg
      {...props}
      forcedScenario="standing"
      leafProfileId="cuerdas-ondas-estacionarias"
    />
  );
}
