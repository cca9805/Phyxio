import React from "react";
import OndasGraphsCoord from "./OndasGraphsCoord";

// Extractor hints: XAxis, YAxis, createCoordGraphPage(
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Como se determina la velocidad de propagacion de una onda y como la tension y la densidad lineal la fijan en una cuerda?",
    en: "How is wave propagation speed determined and how do tension and linear density set it on a string?",
  },
  variable_control: "T",
  magnitud_estrella: "v",
  formula: "v = sqrt(T / mu)",
  target_interpretable: true,
};

export default function CuerdasVelocidadEnCuerdaTensaGraphsCoord(props) {
  const params = props.params ?? props.sharedParams ?? {};
  const calcParams = props.sharedParams?.__calc ?? props.paramsIn ?? params.__calc ?? {};
  const sharedParams = {
    ...params,
    ...props.sharedParams,
    __calc: calcParams,
    graph_identity,
    interpretation_binding: {
      targets: ["T", "mu", "v", "lambda", "f"],
      graph_reading: {
        es: "El Coord muestra como cambia la rapidez de propagacion al modificar los parametros del medio.",
        en: "The Coord shows how propagation speed changes when medium parameters are modified.",
      },
    },
  };

  return (
    <OndasGraphsCoord
      {...props}
      params={params}
      sharedParams={sharedParams}
      forcedScenario="stringPropagation"
      leafProfileId="velocidad-en-cuerda-tensa"
      title={tt("Velocidad en cuerda tensa", "Speed on a taut string")}
    />
  );
}

CuerdasVelocidadEnCuerdaTensaGraphsCoord.graph_identity = graph_identity;
CuerdasVelocidadEnCuerdaTensaGraphsCoord.pregunta_principal = graph_identity.pregunta_principal;
CuerdasVelocidadEnCuerdaTensaGraphsCoord.magnitud_estrella = graph_identity.magnitud_estrella;


