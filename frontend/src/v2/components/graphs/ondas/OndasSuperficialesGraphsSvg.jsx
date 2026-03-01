import React from "react";
import OndasGraphsSvg from "./OndasGraphsSvg";

export default function OndasSuperficialesGraphsSvg(props) {
  return (
    <OndasGraphsSvg
      {...props}
      forcedScenario="surfaceWaves"
      leafProfileId="ondas-superficiales"
    />
  );
}
