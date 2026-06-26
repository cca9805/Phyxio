import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const graph_identity = {
  pregunta_principal: {
    es: "Como varian las frecuencias naturales con el numero de modo y las condiciones de contorno?",
    en: "How do natural frequencies vary with mode number and boundary conditions?",
  },
  variable_control: "n_modo",
  magnitud_estrella: "f_n",
  formula: "f_n = n * v_L / (2L) [libre-libre]; f_n = (2n-1) * v_L / (4L) [fijo-libre]",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "ResonanciaYModosEnBarrasGraphsCoord",
  title: {
    es: "Espectro de frecuencias naturales de una barra",
    en: "Natural frequency spectrum of a bar",
  },
  defaultParams: {
    L_m: 0.5,
    v_L: 5100,
    v_T: 3100,
    nMax: 10,
  },
  controls: [
    { id: "L_m", label: { es: "L (m)", en: "L (m)" }, min: 0.01, max: 5, step: 0.01 },
    { id: "v_L", label: { es: "v_L (m/s)", en: "v_L (m/s)" }, min: 500, max: 8000, step: 10 },
    { id: "v_T", label: { es: "v_T (m/s)", en: "v_T (m/s)" }, min: 300, max: 5000, step: 10 },
    { id: "nMax", label: { es: "Modos", en: "Modes" }, min: 1, max: 20, step: 1 },
  ],
  compute: (pNum) => {
    const L = Number.isFinite(pNum.L_m) ? Math.max(0.001, pNum.L_m) : 0.5;
    const vL = Number.isFinite(pNum.v_L) ? pNum.v_L : 5100;
    const vT = Number.isFinite(pNum.v_T) ? pNum.v_T : 3100;
    const nMax = Number.isFinite(pNum.nMax) ? Math.max(1, Math.min(20, Math.round(pNum.nMax))) : 10;

    const data = [];
    for (let n = 1; n <= nMax; n++) {
      const fLL = (n * vL) / (2 * L);
      const fFL = ((2 * n - 1) * vL) / (4 * L);
      const fTorsLL = (n * vT) / (2 * L);
      data.push({
        n,
        fLongLibreLibre: parseFloat(fLL.toFixed(1)),
        fLongFijoLibre: parseFloat(fFL.toFixed(1)),
        fTorsLibreLibre: parseFloat(fTorsLL.toFixed(1)),
      });
    }

    return {
      data,
      extra: {
        interpretationTarget: "f_n",
        graphState: {
          L_barra: L,
          v_L: vL,
          v_T: vT,
          f1_long_LL: parseFloat(((vL) / (2 * L)).toFixed(1)),
          f1_long_FL: parseFloat(((vL) / (4 * L)).toFixed(1)),
          f1_tors_LL: parseFloat(((vT) / (2 * L)).toFixed(1)),
        },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator, lang }) => {
    void graph_identity;
    void data;
    const uiLang = lang === "en" || pNum._lang === "en" ? "en" : "es";
    const tt = (es, en) => (uiLang === "en" ? en : es);
    const L = Number.isFinite(pNum.L_m) ? pNum.L_m : 0.5;
    const vL = Number.isFinite(pNum.v_L) ? pNum.v_L : 5100;
    const vT = Number.isFinite(pNum.v_T) ? pNum.v_T : 3100;
    const f1LL = vL / (2 * L);
    const f1FL = vL / (4 * L);
    const f1T = vT / (2 * L);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">
          {tt("Frecuencias naturales por modo", "Natural frequencies by mode")}
        </div>
        <div style={{ fontSize: 13, opacity: 0.9 }}>
          L = <strong>{L} m</strong>{" · "}
          v_L = <strong>{vL} m/s</strong>{" · "}
          v_T = <strong>{vT} m/s</strong>
        </div>
        <div style={{ fontSize: 12 }}>
          <span style={{ color: "#2563eb" }}>f₁ long. LL = {f1LL.toFixed(0)} Hz</span>{" · "}
          <span style={{ color: "#16a34a" }}>f₁ long. FL = {f1FL.toFixed(0)} Hz</span>{" · "}
          <span style={{ color: "#d97706" }}>f₁ tors. LL = {f1T.toFixed(0)} Hz</span>
        </div>
        {!linked ? (
          <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>
            {tt("Cargar desde calculadora", "Load from calculator")}
          </button>
        ) : null}
      </div>
    );
  },
});


