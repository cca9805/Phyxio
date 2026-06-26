import OscilacionesGraphsCoord from "./OscilacionesGraphsCoord";
import { createCoordGraph } from "../../graphFactories.jsx";

function PenduloSimpleCoordComponent(props) {
  const uiLang = props.lang || "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);

  const sharedParams = props.sharedParams || {};
  const calc = sharedParams.__calc || {};
  const paramsIn = props.paramsIn || props.params || {};
  const params = { ...paramsIn, ...calc };

  const L = Number(params.L ?? 1);
  const g = Number(params.g ?? 9.81);
  const theta0 = Number(params.theta0 ?? 0.1);
  const omega0 = L > 0 && g > 0 ? Math.sqrt(g / L) : 0;
  const T = omega0 > 0 ? (2 * Math.PI) / omega0 : 0;
  const f = T > 0 ? 1 / T : 0;

  const stateOut = {
    omega0,
    T,
    f,
    theta: theta0,
    summary: tt(
      "la longitud y la gravedad controlan el ritmo del péndulo",
      "length and gravity control the pendulum timing"
    ),
  };

  return (
    <OscilacionesGraphsCoord
      {...props}
      title={props.title || tt("Péndulo simple", "Simple pendulum")}
      params={params}
      paramsIn={paramsIn}
      stateOut={stateOut}
      leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/pendulo-simple"}
    />
  );
}

export default createCoordGraph({
  Component: PenduloSimpleCoordComponent,
  displayName: "PenduloSimpleOscGraphsCoord",
});
