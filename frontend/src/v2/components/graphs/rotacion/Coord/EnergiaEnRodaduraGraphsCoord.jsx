import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

// graph identity: pregunta_principal: { es: "Como se reparte la energia cinetica de un cuerpo que rueda sin deslizar", en: "How is kinetic energy distributed in a body rolling without slipping" }
// formula: K_total = 1/2 m v_cm^2 + 1/2 I omega^2
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);

const fmt = (n) => (Number.isFinite(n) ? n.toFixed(2).replace(".", ",") : "-");

export default createCoordGraphPage({
  displayName: "EnergiaEnRodaduraGraphsCoord",
  title: {
    es: "Reparto de energia en rodadura",
    en: "Energy split in rolling",
  },
  defaultParams: {
    m: 4,
    R: 0.2,
    I: 0.08,
    v_cm: 3,
  },
  controls: [
    { id: "m", label: { es: "m (kg)", en: "m (kg)" }, min: 0.2, max: 20, step: 0.1 },
    { id: "R", label: { es: "R (m)", en: "R (m)" }, min: 0.05, max: 1.5, step: 0.01 },
    { id: "I", label: { es: "I (kg m^2)", en: "I (kg m^2)" }, min: 0.001, max: 5, step: 0.001 },
    { id: "v_cm", label: { es: "v_cm (m/s)", en: "v_cm (m/s)" }, min: 0, max: 30, step: 0.1 },
  ],
  compute: (pNum) => {
    const m = Number.isFinite(pNum.m) ? Math.max(0.001, pNum.m) : 4;
    const R = Number.isFinite(pNum.R) ? Math.max(0.001, pNum.R) : 0.2;
    const I = Number.isFinite(pNum.I) ? Math.max(0, pNum.I) : 0.08;
    const v = Number.isFinite(pNum.v_cm) ? pNum.v_cm : 3;
    const omega = v / R;
    const kTras = 0.5 * m * v * v;
    const kRot = 0.5 * I * omega * omega;
    const kTotal = kTras + kRot;

    return {
      data: [
        { x: "K_tras", y: kTras },
        { x: "K_rot", y: kRot },
        { x: "K_total", y: kTotal },
      ],
      extra: {
        interpretationTarget: "K_total",
        interpretationValue: kTotal,
        graphState: { m, R, I, v_cm: v, omega, K_total: kTotal },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const m = Number.isFinite(pNum.m) ? Math.max(0.001, pNum.m) : 4;
    const R = Number.isFinite(pNum.R) ? Math.max(0.001, pNum.R) : 0.2;
    const I = Number.isFinite(pNum.I) ? Math.max(0, pNum.I) : 0.08;
    const v = Number.isFinite(pNum.v_cm) ? pNum.v_cm : 3;
    const omega = v / R;
    const kTotal = data.find((d) => d.x === "K_total")?.y ?? 0;
    const maxY = Math.max(1, ...data.map((d) => d.y));

    return (
      <div className="v2-card" style={{ display: "grid", gap: 12 }}>
        <div className="v2-card-title">K_total = 1/2 m v_cm^2 + 1/2 I omega^2</div>
        <div className="muted">
          v_cm = R omega · omega = {fmt(omega)} rad/s · K_total = {fmt(kTotal)} J
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          {data.map((bar) => (
            <div key={bar.x} style={{ display: "grid", gridTemplateColumns: "72px 1fr 70px", gap: 8, alignItems: "center" }}>
              <strong>{bar.x}</strong>
              <div style={{ height: 16, borderRadius: 999, background: "rgba(148,163,184,0.18)", overflow: "hidden" }}>
                <div
                  style={{
                    width: `${Math.max(2, (bar.y / maxY) * 100)}%`,
                    height: "100%",
                    background: bar.x === "K_total" ? "#38bdf8" : bar.x === "K_rot" ? "#f59e0b" : "#22c55e",
                  }}
                />
              </div>
              <span>{fmt(bar.y)} J</span>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 13, opacity: 0.9 }}>
          m = {fmt(m)} kg · R = {fmt(R)} m · I = {fmt(I)} kg m^2 · v_cm = {fmt(v)} m/s
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
