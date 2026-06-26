import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import OndasGraphsCoord from "./OndasGraphsCoord";

function OndasSuperficialesCoordView(props) {
  const { lang = "es", params, sharedParams, paramsIn, onGraphStateChange, onInterpretationContextChange } = props;
  const uiLang = lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  const input = paramsIn ?? params ?? sharedParams ?? {};
  const calc = sharedParams?.__calc ?? params?.__calc ?? paramsIn?.__calc ?? {};
  const g = Number(input?.g?.value ?? input?.g ?? calc?.g ?? 9.81);
  const lambda = Number(input?.lambda?.value ?? input?.lambda ?? calc?.lambda ?? 150);
  const h = Number(input?.h?.value ?? input?.h ?? calc?.h ?? 4000);
  const ratio = h / Math.max(lambda, 0.1);
  const c = Math.sqrt((Math.max(g, 0) * Math.max(lambda, 0.1) / (2 * Math.PI)) * Math.tanh((2 * Math.PI * Math.max(h, 0.1)) / Math.max(lambda, 0.1)));
  const regime = ratio > 0.5 ? "deep" : ratio < 0.05 ? "shallow" : "intermediate";

  React.useEffect(() => {
    const stateOut = {
      target: "c",
      graphType: "Coord",
      g,
      lambda,
      h,
      ratio,
      c,
      regime,
    };
    onGraphStateChange?.(stateOut);
    onInterpretationContextChange?.({
      source: "coord",
      target: "c",
      values: stateOut,
      reading: {
        es: "La lectura Coord muestra como profundidad y longitud de onda deciden el regimen batimetrico y la velocidad de fase.",
        en: "The Coord reading shows how depth and wavelength decide the bathymetric regime and phase speed.",
      },
    });
  }, [g, lambda, h, ratio, c, regime, onGraphStateChange, onInterpretationContextChange]);

  return (
    <OndasGraphsCoord
      {...props}
      lang={uiLang}
      title={props?.title || tt("Ondas superficiales", "Surface waves")}
      params={{ ...input, g, lambda, h, c, ratio, regime }}
      forcedScenario="surfaceWaves"
      leafProfileId="ondas-superficiales"
    />
  );
}

export default createCoordGraph({
  displayName: "OndasSuperficialesGraphsCoord",
  Component: OndasSuperficialesCoordView,
});


