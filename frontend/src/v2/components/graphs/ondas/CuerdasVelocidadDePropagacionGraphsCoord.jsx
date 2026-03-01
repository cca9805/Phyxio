import React from "react";
import OndasGraphsCoord from "./OndasGraphsCoord";

export default function CuerdasVelocidadDePropagacionGraphsCoord(props) {
  return (
    <OndasGraphsCoord
      {...props}
      forcedScenario="stringPropagation"
      leafProfileId="cuerdas-velocidad-de-propagacion"
    />
  );
}
