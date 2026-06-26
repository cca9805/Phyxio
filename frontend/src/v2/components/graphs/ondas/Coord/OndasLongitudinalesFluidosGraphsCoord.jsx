import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import OndasGraphsCoord from "./OndasGraphsCoord";

function OndasLongitudinalesFluidosCoordView(props) {
  const { lang = "es", params, sharedParams, paramsIn, onGraphStateChange, onInterpretationContextChange } = props;
  const uiLang = lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  const input = paramsIn ?? params ?? sharedParams ?? {};
  const calc = sharedParams?.__calc ?? params?.__calc ?? paramsIn?.__calc ?? {};
  const B = Number(input?.B?.value ?? input?.B ?? calc?.B ?? 2.2e9);
  const rho = Number(input?.rho?.value ?? input?.rho ?? calc?.rho ?? 1000);
  const f = Number(input?.f?.value ?? input?.f ?? calc?.f ?? 440);
  const c = Math.sqrt(Math.max(B, 0) / Math.max(rho, 0.1));
  const lambda = c / Math.max(f, 0.1);

  React.useEffect(() => {
    const stateOut = {
      target: "c",
      graphType: "Coord",
      B,
      rho,
      f,
      c,
      lambda,
    };
    onGraphStateChange?.(stateOut);
    onInterpretationContextChange?.({
      source: "coord",
      target: "c",
      values: stateOut,
      reading: {
        es: "La lectura Coord vincula rigidez, densidad y frecuencia para interpretar la escala espacial de la onda sonora.",
        en: "The Coord reading links stiffness, density and frequency to interpret the spatial scale of the sound wave.",
      },
    });
  }, [B, rho, f, c, lambda, onGraphStateChange, onInterpretationContextChange]);

  return (
    <OndasGraphsCoord
      {...props}
      lang={uiLang}
      title={props?.title || tt("Onda longitudinal en fluido", "Longitudinal wave in a fluid")}
      params={{ ...input, B, rho, f, c, lambda }}
      forcedScenario="fluidLongitudinal"
      leafProfileId="introduccion-al-sonido"
    />
  );
}

export default createCoordGraph({
  displayName: "OndasLongitudinalesFluidosGraphsCoord",
  Component: OndasLongitudinalesFluidosCoordView,
});


