import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import PrincipioBase from "./PrincipioDeConservacionMomentoGraphsCoord.jsx";

/** Graph identity metadata */
const _graph_meta = {
  pregunta_principal: {
    es: "¿Cuándo un impulso externo rompe la conservación del momento lineal del sistema?",
    en: "When does an external impulse break the conservation of the system's linear momentum?",
  },
};

function ImpulsoExternoYRupturaView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);

  return (
    <PrincipioBase
      {...props}
      lang={uiLang}
      title={props?.title || tt("Impulso externo y ruptura de la conservación", "External impulse and conservation breakdown")}
    />
  );
}

export default createCoordGraph({
  displayName: "ImpulsoExternoYRupturaGraphsCoord",
  Component: ImpulsoExternoYRupturaView,
});
