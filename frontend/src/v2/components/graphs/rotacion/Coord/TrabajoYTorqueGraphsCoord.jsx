import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

// graph identity: pregunta_principal: { es: "Como calcula el torque el trabajo rotacional y la potencia durante un giro", en: "How does torque determine rotational work and power during a turn" }
// formula: W = tau theta; P = tau omega
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);

const fmt = (n) => (Number.isFinite(n) ? n.toFixed(2).replace(".", ",") : "-");

export default createCoordGraphPage({
  displayName: "TrabajoYTorqueGraphsCoord",
  title: {
    es: "Trabajo y potencia por torque",
    en: "Work and power from torque",
  },
  defaultParams: {
    tau: 18,
    theta: 3.14,
    omega: 4,
  },
  controls: [
    { id: "tau", label: { es: "tau (N m)", en: "tau (N m)" }, min: -80, max: 80, step: 1 },
    { id: "theta", label: { es: "theta (rad)", en: "theta (rad)" }, min: -12.57, max: 12.57, step: 0.01 },
    { id: "omega", label: { es: "omega (rad/s)", en: "omega (rad/s)" }, min: -20, max: 20, step: 0.1 },
  ],
  compute: (pNum) => {
    const tau = Number.isFinite(pNum.tau) ? pNum.tau : 18;
    const theta = Number.isFinite(pNum.theta) ? pNum.theta : 3.14;
    const omega = Number.isFinite(pNum.omega) ? pNum.omega : 4;
    const W = tau * theta;
    const P = tau * omega;

    return {
      data: [
        { x: "tau", y: tau },
        { x: "W", y: W },
        { x: "P", y: P },
      ],
      extra: {
        interpretationTarget: "W",
        interpretationValue: W,
        graphState: { tau, theta, omega, W, P },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const tau = Number.isFinite(pNum.tau) ? pNum.tau : 18;
    const theta = Number.isFinite(pNum.theta) ? pNum.theta : 3.14;
    const omega = Number.isFinite(pNum.omega) ? pNum.omega : 4;
    const W = tau * theta;
    const P = tau * omega;
    const maxAbs = Math.max(1, ...data.map((d) => Math.abs(d.y)));

    return (
      <div className="v2-card" style={{ display: "grid", gap: 12 }}>
        <div className="v2-card-title">W = tau theta · P = tau omega</div>
        <div className="muted">
          tau = {fmt(tau)} N m · theta = {fmt(theta)} rad · omega = {fmt(omega)} rad/s
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          {data.map((bar) => {
            const width = Math.max(3, (Math.abs(bar.y) / maxAbs) * 100);
            return (
              <div key={bar.x} style={{ display: "grid", gridTemplateColumns: "58px 1fr 84px", gap: 8, alignItems: "center" }}>
                <strong>{bar.x}</strong>
                <div style={{ height: 16, borderRadius: 999, background: "rgba(148,163,184,0.18)", overflow: "hidden" }}>
                  <div
                    style={{
                      width: `${width}%`,
                      height: "100%",
                      background: bar.y < 0 ? "#fb7185" : bar.x === "P" ? "#22c55e" : bar.x === "W" ? "#38bdf8" : "#f59e0b",
                    }}
                  />
                </div>
                <span>{fmt(bar.y)}</span>
              </div>
            );
          })}
        </div>
        <div style={{ fontSize: 13, opacity: 0.9 }}>
          W = {fmt(W)} J · P = {fmt(P)} W
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
