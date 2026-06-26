import React, { useEffect, useMemo } from "react";
import { createCoordGraph } from "@/v2/components/graphs/graphFactories.jsx";
import EjemplosTipicosGraphsCoord from "./EjemplosTipicosGraphsCoord";

const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const graph_identity = {
  pregunta_principal: {
    es: "Cuando se pierde el contacto en la parte alta de un loop y como se refleja eso en la normal?",
    en: "When is contact lost at the top of a loop and how is that reflected in the normal force?",
  },
  magnitud_estrella: "ac",
  variable_control: "vT",
};
void graph_identity;

function LoopVerticalYCondicionDeContactoGraphsCoordComponent(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  void tt;
  const incoming = props?.params ?? props?.sharedParams ?? {};
  const derived = useMemo(() => {
    const vT = Math.max(0, toNum(incoming.vT ?? incoming.v ?? incoming.velocidad, 14));
    const r = Math.max(0.05, toNum(incoming.r ?? incoming.radio, 12));
    const g = 9.8;
    const ac = (vT * vT) / r;
    const Frad = ac;
    const Nn = ac - g;
    const vMin = Math.sqrt(g * r);

    return {
      target: "Nn",
      source: "loop-vertical-y-condicion-de-contacto",
      question: "contact_condition_top",
      vT,
      r,
      ac,
      Frad,
      Nn,
      vMin,
      contact: Nn >= 0,
    };
  }, [incoming.r, incoming.radio, incoming.v, incoming.vT, incoming.velocidad]);

  useEffect(() => {
    props.onGraphStateChange?.(derived);
    props.onInterpretationContextChange?.(derived);
  }, [derived, props]);

  return <EjemplosTipicosGraphsCoord {...props} params={{ example: "loop", ...incoming }} />;
}

export default createCoordGraph({
  Component: LoopVerticalYCondicionDeContactoGraphsCoordComponent,
  displayName: "LoopVerticalYCondicionDeContactoGraphsCoord",
});
