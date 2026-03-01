import React from "react";
import OndasGraphsSvg from "./OndasGraphsSvg";

export default function CuerdasVelocidadDePropagacionGraphsSvg(props) {
  return (
    <OndasGraphsSvg
      {...props}
      forcedScenario="stringPropagation"
      leafProfileId="cuerdas-velocidad-de-propagacion"
    />
  );
}
