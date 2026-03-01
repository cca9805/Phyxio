import React from "react";
import OndasGraphsSvg from "./OndasGraphsSvg";

export default function CuerdasArmonicosGraphsSvg(props) {
  return (
    <OndasGraphsSvg
      {...props}
      forcedScenario="standing"
      leafProfileId="cuerdas-armonicos"
    />
  );
}
