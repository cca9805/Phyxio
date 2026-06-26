import OscilacionesGraphsCoord from "./OscilacionesGraphsCoord";
import { createCoordGraph } from "../../graphFactories.jsx";

function PenduloFisicoAvanzadoCoordComponent(props) {
  const uiLang = props.lang || "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);

  const sharedParams = props.sharedParams || {};
  const calc = sharedParams.__calc || {};
  const paramsIn = props.paramsIn || props.params || {};
  const params = { ...paramsIn, ...calc };

  const I_O = Number(params.I_O ?? 0.2);
  const m = Number(params.m ?? 1);
  const g = Number(params.g ?? 9.81);
  const d = Number(params.d ?? 0.2);

  const omega0 = I_O > 0 && m > 0 && g > 0 && d > 0 ? Math.sqrt((m * g * d) / I_O) : 0;
  const T0 = omega0 > 0 ? (2 * Math.PI) / omega0 : 0;
  const leq = m > 0 && d > 0 ? I_O / (m * d) : 0;

  const stateOut = {
    omega0,
    T0,
    leq,
    summary: tt(
      "distribucion de masa y amplitud condicionan el periodo real",
      "mass distribution and amplitude condition the real period"
    ),
  };

  return (
    <OscilacionesGraphsCoord
      {...props}
      title={props.title || tt("Pendulo fisico avanzado", "Advanced physical pendulum")}
      params={params}
      paramsIn={paramsIn}
      stateOut={stateOut}
      leafRelPath={props.leafRelPath || "fisica-clasica/mecanica/oscilaciones/pendulo-fisico-avanzado"}
    />
  );
}

export default createCoordGraph({
  Component: PenduloFisicoAvanzadoCoordComponent,
  displayName: "PenduloFisicoAvanzadoGraphsCoord",
});
