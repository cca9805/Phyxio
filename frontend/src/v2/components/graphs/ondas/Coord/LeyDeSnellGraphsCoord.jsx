import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";
import profile from "./ley-de-snell.coord.profile.jsx";

const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);

const DEG = Math.PI / 180;
const RAD = 180 / Math.PI;

const clampIndex = (value, fallback) => {
  const n = Number.isFinite(value) ? value : fallback;
  return Math.min(2.5, Math.max(1, n));
};

const clampAngle = (value, fallback) => {
  const a = Number.isFinite(value) ? value : fallback;
  return Math.min(89.9, Math.max(0, a));
};

const fmt = (value, digits = 1) =>
  Number.isFinite(value) ? value.toFixed(digits).replace(".", ",") : "-";

const computeSnell = (pNum) => {
  const n1 = clampIndex(pNum.n1, 1);
  const n2 = clampIndex(pNum.n2, 1.5);
  const theta1Deg = clampAngle(pNum.theta_1, 40);
  const theta1 = theta1Deg * DEG;
  const argument = (n1 * Math.sin(theta1)) / n2;
  const hasRefraction = argument <= 1;
  const theta2Deg = hasRefraction ? Math.asin(argument) * RAD : null;
  const criticalDeg = n1 > n2 ? Math.asin(n2 / n1) * RAD : null;

  const data = Array.from({ length: 46 }, (_, index) => {
    const x = index * 2;
    const ratio = (n1 * Math.sin(x * DEG)) / n2;
    return {
      x,
      theta_2: ratio <= 1 ? Math.asin(ratio) * RAD : null,
      theta_c: criticalDeg,
    };
  });

  return {
    data,
    extra: {
      interpretationTarget: hasRefraction ? "theta_2" : "theta_c",
      interpretationValue: hasRefraction ? theta2Deg : criticalDeg,
      graphState: {
        n1,
        n2,
        theta_1: theta1Deg,
        theta_2: theta2Deg,
        theta_c: criticalDeg,
        total_internal_reflection: !hasRefraction,
      },
    },
  };
};

const LeyDeSnellGraphsCoord = createCoordGraphPage({
  displayName: "LeyDeSnellGraphsCoord",
  title: {
    es: "Ley de Snell",
    en: "Snell's law",
  },
  defaultParams: {
    n1: 1,
    n2: 1.5,
    theta_1: 40,
  },
  controls: [
    { id: "n1", label: { es: "n1", en: "n1" }, min: 1, max: 2.5, step: 0.01 },
    { id: "n2", label: { es: "n2", en: "n2" }, min: 1, max: 2.5, step: 0.01 },
    { id: "theta_1", label: { es: "theta_1 (deg)", en: "theta_1 (deg)" }, min: 0, max: 89.9, step: 0.1 },
  ],
  compute: computeSnell,
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const n1 = clampIndex(pNum.n1, 1);
    const n2 = clampIndex(pNum.n2, 1.5);
    const theta1Deg = clampAngle(pNum.theta_1, 40);
    const argument = (n1 * Math.sin(theta1Deg * DEG)) / n2;
    const hasRefraction = argument <= 1;
    const theta2Deg = hasRefraction ? Math.asin(argument) * RAD : null;
    const criticalDeg = n1 > n2 ? Math.asin(n2 / n1) * RAD : null;
    const maxY = 90;
    const validPoints = data.filter((point) => Number.isFinite(point.theta_2));

    return (
      <div className="v2-card" style={{ display: "grid", gap: 12 }}>
        <div className="v2-card-title">{tt("Curva theta_2 frente a theta_1", "theta_2 versus theta_1 curve")}</div>
        <div className="muted">
          {tt("n1", "n1")} = {fmt(n1, 2)}
          {" · "}
          {tt("n2", "n2")} = {fmt(n2, 2)}
          {" · "}
          {tt("theta_1", "theta_1")} = {fmt(theta1Deg)} deg
        </div>

        <div style={{ display: "grid", gap: 8 }}>
          {validPoints.slice(0, 12).map((point) => (
            <div
              key={point.x}
              style={{
                display: "grid",
                gridTemplateColumns: "62px 1fr 64px",
                gap: 8,
                alignItems: "center",
                fontSize: 13,
              }}
            >
              <span>{point.x} deg</span>
              <div style={{ height: 12, borderRadius: 999, background: "rgba(148,163,184,0.18)", overflow: "hidden" }}>
                <div
                  style={{
                    width: `${Math.max(2, (point.theta_2 / maxY) * 100)}%`,
                    height: "100%",
                    background: "#38bdf8",
                  }}
                />
              </div>
              <strong>{fmt(point.theta_2)} deg</strong>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 13, opacity: 0.92 }}>
          {hasRefraction
            ? `${tt("Rayo refractado", "Refracted ray")}: theta_2 ${fmt(theta2Deg)} deg`
            : tt("Reflexion total interna: no existe theta_2 real.", "Total internal reflection: no real theta_2 exists.")}
          {Number.isFinite(criticalDeg) ? ` · theta_c ${fmt(criticalDeg)} deg` : ""}
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

LeyDeSnellGraphsCoord.graph_identity = profile.graph_identity;
LeyDeSnellGraphsCoord.pregunta_principal = profile.graph_identity.pregunta_principal;
LeyDeSnellGraphsCoord.magnitud_estrella = profile.graph_identity.magnitud_estrella;

export default LeyDeSnellGraphsCoord;


