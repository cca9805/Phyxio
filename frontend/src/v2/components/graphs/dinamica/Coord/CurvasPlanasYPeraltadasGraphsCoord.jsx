import React, { useEffect, useMemo } from "react";
import { createCoordGraph } from "@/v2/components/graphs/graphFactories.jsx";
import EjemplosTipicosGraphsCoord from "./EjemplosTipicosGraphsCoord";

const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const graph_identity = {
  pregunta_principal: {
    es: "Que fuerza real aporta la componente radial cuando un vehiculo gira en una curva plana o peraltada?",
    en: "Which real force provides the radial component when a vehicle turns on a flat or banked curve?",
  },
  magnitud_estrella: "ac",
  variable_control: "v",
};
void graph_identity;

function CurvasPlanasYPeraltadasGraphsCoordComponent(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  void tt;
  const incoming = props?.params ?? props?.sharedParams ?? {};
  const derived = useMemo(() => {
    const v = Math.max(0, toNum(incoming.v ?? incoming.velocidad, 15));
    const r = Math.max(0.05, toNum(incoming.r ?? incoming.radio, 50));
    const mu = Math.max(0, toNum(incoming.mu ?? incoming.coeficiente, 0.35));
    const th = Math.max(0, toNum(incoming.th ?? incoming.theta ?? incoming.angulo, 12));
    const g = 9.8;
    const thRad = (th * Math.PI) / 180;
    const ac = (v * v) / r;
    const Frad = ac;
    const Nn = g / Math.max(0.15, Math.cos(thRad));
    const fsMax = mu * Nn;

    return {
      target: "Frad",
      source: "curvas-planas-y-peraltadas",
      question: "radial_component_source",
      v,
      r,
      mu,
      th,
      ac,
      Frad,
      Nn,
      fsMax,
    };
  }, [incoming.angulo, incoming.coeficiente, incoming.mu, incoming.r, incoming.radio, incoming.th, incoming.theta, incoming.v, incoming.velocidad]);

  useEffect(() => {
    props.onGraphStateChange?.(derived);
    props.onInterpretationContextChange?.(derived);
  }, [derived, props]);

  return <EjemplosTipicosGraphsCoord {...props} params={{ example: "curva", ...incoming }} />;
}

export default createCoordGraph({
  Component: CurvasPlanasYPeraltadasGraphsCoordComponent,
  displayName: "CurvasPlanasYPeraltadasGraphsCoord",
});
