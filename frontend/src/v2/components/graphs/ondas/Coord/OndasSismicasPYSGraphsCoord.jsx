import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Por que las ondas P llegan antes que las S a un sismografo y que informacion da esa diferencia temporal sobre la distancia al foco?",
    en: "Why do P waves arrive before S waves at a seismograph and what information does that time difference give about the distance to the focus?",
  },
  variable_control: "dMax",
  magnitud_estrella: "v_p",
  formula: "delta_t_ps = d_foco * (1/v_s - 1/v_p)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "OndasSismicasPYSGraphsCoord",
  title: {
    es: "Dromocronas P y S",
    en: "P and S travel-time curves",
  },
  defaultParams: {
    vP: 6000,
    vS: 3500,
    dMax: 300,
  },
  controls: [
    { id: "vP", label: { es: "v_p m/s", en: "v_p m/s" }, min: 3000, max: 9000, step: 250 },
    { id: "vS", label: { es: "v_s m/s", en: "v_s m/s" }, min: 500, max: 5000, step: 250 },
    { id: "dMax", label: { es: "distancia km", en: "distance km" }, min: 50, max: 1000, step: 50 },
  ],
  compute: (pNum) => {
    const vP = Number.isFinite(pNum.vP) ? pNum.vP : 6000;
    const vSraw = Number.isFinite(pNum.vS) ? pNum.vS : 3500;
    const vS = Math.min(vSraw, vP * 0.95);
    const dMax = Number.isFinite(pNum.dMax) ? pNum.dMax : 300;
    const data = Array.from({ length: 54 }, (_, i) => {
      const dKm = (i / 53) * dMax;
      const d = dKm * 1000;
      return {
        x: dKm,
        y: d / vP,
        s: d / vS,
        delta: d * (1 / vS - 1 / vP),
      };
    });

    return {
      data,
      extra: {
        interpretationTarget: "delta_t_ps",
        interpretationValue: data[data.length - 1]?.delta ?? 0,
        graphState: { vP, vS, dMax },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    void graph_identity;
    const dMax = Number.isFinite(pNum.dMax) ? pNum.dMax : 300;
    const yMax = Math.max(...data.map((d) => d.s), 1);
    const width = 720;
    const height = 320;
    const left = 58;
    const top = 24;
    const plotW = 604;
    const plotH = 230;
    const xOf = (x) => left + (x / Math.max(dMax, 1)) * plotW;
    const yOf = (y) => top + plotH - (y / yMax) * plotH;
    const pathP = data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.x)} ${yOf(pt.y)}`).join(" ");
    const pathS = data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.x)} ${yOf(pt.s)}`).join(" ");
    const sample = data[Math.floor(data.length * 0.7)] ?? data[data.length - 1];

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">{t("Tiempos de llegada", "Arrival times")}</div>
        <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={t("Dromocronas P y S", "P and S travel-time curves")}>
          <line x1={left} y1={top + plotH} x2={left + plotW} y2={top + plotH} stroke="#64748b" />
          <line x1={left} y1={top} x2={left} y2={top + plotH} stroke="#64748b" />
          <path d={pathP} fill="none" stroke="#2563eb" strokeWidth="3" />
          <path d={pathS} fill="none" stroke="#f97316" strokeWidth="3" />
          <line x1={xOf(sample.x)} y1={yOf(sample.y)} x2={xOf(sample.x)} y2={yOf(sample.s)} stroke="#0f172a" strokeWidth="2" strokeDasharray="6 5" />
          <text x={left + plotW / 2} y="302" textAnchor="middle" fontSize="12" fill="#475569">
            d_foco
          </text>
          <text x="18" y={top + plotH / 2} textAnchor="middle" fontSize="12" fill="#475569" transform={`rotate(-90,18,${top + plotH / 2})`}>
            {t("tiempo", "time")}
          </text>
          <text x="570" y="48" fontSize="12" fill="#2563eb">P</text>
          <text x="570" y="68" fontSize="12" fill="#f97316">S</text>
          <text x={xOf(sample.x) + 8} y={(yOf(sample.y) + yOf(sample.s)) / 2} fontSize="12" fill="#0f172a">delta_t_ps</text>
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>
          {t("Lectura", "Reading")}: <strong>{t("la separacion P-S crece con la distancia", "P-S separation grows with distance")}</strong>
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


