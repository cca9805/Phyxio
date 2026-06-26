import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo varía la amplitud de una onda ultrasónica con la distancia debido a la atenuación y la dispersión en un sólido?",
    en: "How does the amplitude of an ultrasonic wave vary with distance due to attenuation and dispersion in a solid?",
  },
  variable_control: "alpha",
  magnitud_estrella: "alpha",
  formula: "A = A0 * exp(-alpha * x)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "DispersionYAtenuacionEnSolidosGraphsCoord",
  title: {
    es: "Atenuación en sólidos",
    en: "Attenuation in solids",
  },
  defaultParams: {
    alpha: 50,
    A0: 2.0,
    xMax: 60,
    freq: 5,
  },
  controls: [
    { id: "alpha", label: { es: "α (Np/m)", en: "α (Np/m)" }, min: 1, max: 200, step: 1 },
    { id: "A0", label: { es: "A₀ (V)", en: "A₀ (V)" }, min: 0.1, max: 5, step: 0.1 },
    { id: "xMax", label: { es: "x máx (mm)", en: "x max (mm)" }, min: 10, max: 200, step: 5 },
    { id: "freq", label: { es: "f (MHz)", en: "f (MHz)" }, min: 0.5, max: 20, step: 0.5 },
  ],
  compute: (pNum) => {
    const alpha = Number.isFinite(pNum.alpha) ? pNum.alpha : 50;
    const A0 = Number.isFinite(pNum.A0) ? pNum.A0 : 2.0;
    const xMax = (Number.isFinite(pNum.xMax) ? pNum.xMax : 60) / 1000;
    const L_d = 1 / alpha;

    const data = Array.from({ length: 50 }, (_, i) => {
      const x = (i / 49) * xMax;
      const A = A0 * Math.exp(-alpha * x);
      return { x: x * 1000, y: A };
    });

    return {
      data,
      extra: {
        interpretationTarget: "alpha",
        interpretationValue: alpha,
        graphState: { alpha, A0, xMax: xMax * 1000, L_d: L_d * 1000 },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    void graph_identity;
    void t;
    const alpha = Number.isFinite(pNum.alpha) ? pNum.alpha : 50;
    const A0 = Number.isFinite(pNum.A0) ? pNum.A0 : 2.0;
    const L_d = (1 / alpha) * 1000;
    const A_at_Ld = A0 * Math.exp(-1);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">A(x) = A₀·exp(−α·x)</div>
        <div style={{ fontSize: 13, opacity: 0.9 }}>
          α = <strong>{alpha} Np/m</strong>
          {" · "}
          L<sub>d</sub> = <strong>{L_d.toFixed(1)} mm</strong>
          {" · "}
          A(L<sub>d</sub>) = <strong>{A_at_Ld.toFixed(3)} V</strong>
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          {t("Pérdida total", "Total loss")}: <strong>{(20 * Math.log10(A0 / (A0 * Math.exp(-alpha * (pNum.xMax / 1000))))).toFixed(1)} dB</strong>
        </div>
        {!linked ? (
          <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>
            {t("Cargar desde calculadora", "Load from calculator")}
          </button>
        ) : null}
      </div>
    );
  },
});


