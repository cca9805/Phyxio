// frontend/src/v2/components/graphs/fluidos/Coord/EcuacionDeContinuidadGraphsCoordView.jsx
//
// Gráfico coordinado dedicado: Ecuación de Continuidad
// Muestra la hipérbola v₂ = Q/A₂ con punto de operación interactivo.
// Contrato: GraphPageV2 equivalente con params ?? sharedParams
//
import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceDot,
  ReferenceLine,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { createCoordGraph } from "../../graphFactories.jsx";


const tt = (lang, es, en) => (lang === "en" ? en : es);

const toNum = (v, fb) => {
  if (v == null || v === "") return fb;
  const n = typeof v === "number" ? v : Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

/**
 * Genera la curva hiperbólica v₂ = Q / A₂ para el rango [a2Min, a2Max].
 * También traza v₁ = Q / A₁ como línea de referencia constante.
 */
function buildData(Q, A1, a2Min, a2Max, steps = 240) {
  const v1 = Q / Math.max(A1, 1e-9);
  const out = [];
  for (let i = 0; i <= steps; i++) {
    const a2 = a2Min + ((a2Max - a2Min) * i) / steps;
    const v2 = Q / Math.max(a2, 1e-9);
    out.push({
      a2: parseFloat(a2.toFixed(7)),
      v2: parseFloat(v2.toFixed(4)),
      v1: parseFloat(v1.toFixed(4)),
    });
  }
  return out;
}

function EcuacionDeContinuidadGraphsCoordView({ params, sharedParams, lang = "es" }) {
  const uiLang = lang === "en" ? "en" : "es";
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 2) =>
    Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "—";

  const p = params ?? sharedParams ?? {};

  // --- Parámetros físicos ---
  const Q  = clamp(toNum(p.Q,  0.008),  1e-6, 50);
  const A1 = clamp(toNum(p.A1, 0.00785), 1e-6, 10);
  const A2 = clamp(toNum(p.A2, 0.00196), 1e-6, Math.max(A1 * 2.5, 1e-5));

  const v1 = Q / A1;
  const v2 = Q / A2;
  const ratio = A2 > 0 ? A1 / A2 : 1;

  // Rango del gráfico: desde A2_min (10 % del A2 actual) hasta 2.5 × A1
  const a2Min = Math.max(1e-7, A2 * 0.10);
  const a2Max = A1 * 2.5;

  const data = useMemo(
    () => buildData(Q, A1, a2Min, a2Max),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Q, A1, a2Min, a2Max]
  );

  // El punto de operación solo se dibuja si A2 está dentro del rango graficado
  const inRange = A2 >= a2Min && A2 <= a2Max;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {/* ── Cabecera ─────────────────────────────────────────────────────── */}
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">
          {tt(uiLang,
            "Ecuación de Continuidad — Velocidad vs Área",
            "Continuity Equation — Velocity vs Area")}
        </div>
        <div className="muted" style={{ marginTop: 6, fontSize: 13 }}>
          {tt(uiLang,
            "Hipérbola Q = A·v: al reducir el área la velocidad crece inversamente:",
            "Hyperbola Q = A·v: reducing the area increases velocity inversely:")}
          {" "}
          <MathInline latex={"Q = A_1 v_1 = A_2 v_2"} />
        </div>

        {/* ── Lectura de parámetros actuales ───────────────────────────── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 10,
            padding: "8px 12px",
            borderRadius: 10,
            border: "1px solid rgba(99,102,241,0.2)",
            background: "rgba(99,102,241,0.07)",
            fontSize: 13,
          }}
        >
          <span>
            <b>Q</b> = {fmt(Q * 1000, 2)} L/s
          </span>
          <span>
            <b>A₁</b> = {fmt(A1 * 10000, 2)} cm²
          </span>
          <span style={{ color: "#34d399" }}>
            <b>v₁</b> = {fmt(v1, 2)} m/s
          </span>
          <span>
            <b>A₂</b> = {fmt(A2 * 10000, 2)} cm²
          </span>
          <span style={{ color: "#818cf8" }}>
            <b>v₂</b> = {fmt(v2, 2)} m/s
          </span>
          <span>
            <b>v₂/v₁</b> = {fmt(ratio, 2)}×
          </span>
        </div>

        {/* ── Gráfico v₂ vs A₂ ─────────────────────────────────────────── */}
        <div style={{ marginTop: 14 }}>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart
              data={data}
              margin={{ top: 4, right: 18, bottom: 18, left: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.07)" />

              <XAxis
                dataKey="a2"
                label={{
                  value: tt(uiLang, "A₂ (m²)", "A₂ (m²)"),
                  position: "insideBottom",
                  offset: -8,
                  fill: "rgba(255,255,255,0.6)",
                  fontSize: 12,
                }}
                tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 11 }}
                tickFormatter={(v) =>
                  Number(v) >= 0.001
                    ? `${fmt(Number(v) * 10000, 0)} cm²`
                    : fmt(Number(v), 5)
                }
              />

              <YAxis
                label={{
                  value: tt(uiLang, "v (m/s)", "v (m/s)"),
                  angle: -90,
                  position: "insideLeft",
                  fill: "rgba(255,255,255,0.6)",
                  fontSize: 12,
                }}
                tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 11 }}
                tickFormatter={(v) => fmt(Number(v), 1)}
              />

              <Tooltip
                contentStyle={{
                  background: "rgba(15,15,30,0.92)",
                  border: "1px solid rgba(99,102,241,0.3)",
                  borderRadius: 8,
                  fontSize: 12,
                }}
                formatter={(val, name) => {
                  const num = Number(val);
                  if (name === "v2")
                    return [`${fmt(num, 2)} m/s`, tt(uiLang, "v₂", "v₂")];
                  if (name === "v1")
                    return [
                      `${fmt(num, 2)} m/s`,
                      tt(uiLang, "v₁ (ref.)", "v₁ (ref.)"),
                    ];
                  return [val, name];
                }}
                labelFormatter={(v) =>
                  `A₂ = ${fmt(Number(v) * 10000, 2)} cm²`
                }
              />

              {/* Curva principal: hipérbola v₂ = Q/A₂ */}
              <Line
                type="monotone"
                dataKey="v2"
                name="v2"
                stroke="#818cf8"
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 4 }}
              />

              {/* Línea de referencia: v₁ = Q/A₁ (constante) */}
              <Line
                type="monotone"
                dataKey="v1"
                name="v1"
                stroke="#34d399"
                strokeWidth={1.8}
                strokeDasharray="6 3"
                dot={false}
              />

              {/* Marcador vertical en A₂ actual */}
              {inRange && (
                <ReferenceLine
                  x={parseFloat(A2.toFixed(7))}
                  stroke="rgba(250,204,21,0.65)"
                  strokeDasharray="4 3"
                />
              )}

              {/* Punto de operación */}
              {inRange && (
                <ReferenceDot
                  x={parseFloat(A2.toFixed(7))}
                  y={parseFloat(v2.toFixed(4))}
                  r={5}
                  fill="#facc15"
                  stroke="none"
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* ── Nota de conservación ─────────────────────────────────────── */}
        <div
          style={{
            marginTop: 8,
            padding: "7px 12px",
            borderRadius: 8,
            background: "rgba(16,185,129,0.08)",
            border: "1px solid rgba(16,185,129,0.2)",
            fontSize: 13,
          }}
        >
          {tt(uiLang, "Conservación: ", "Conservation: ")}
          <MathInline latex={"Q = A_1 v_1 = A_2 v_2"} />
          {"  ·  "}
          {tt(uiLang, "Punto de operación: ", "Operating point: ")}
          <b style={{ color: "#facc15" }}>
            A₂ = {fmt(A2 * 10000, 2)} cm²
          </b>
          {" → "}
          <b style={{ color: "#818cf8" }}>v₂ = {fmt(v2, 2)} m/s</b>
          {"  ·  "}
          {tt(uiLang, "Ratio A₁/A₂ = ", "Ratio A₁/A₂ = ")}
          <b>{fmt(ratio, 2)}</b>
          {tt(uiLang, " (velocidad ×", " (velocity ×")}
          <b>{fmt(ratio, 2)}</b>
          {")"}
        </div>
      </div>
    </div>
  );
}

const EcuacionDeContinuidadGraphsCoord = createCoordGraph({
  Component: EcuacionDeContinuidadGraphsCoordView,
  displayName: "EcuacionDeContinuidadGraphsCoord",
});

EcuacionDeContinuidadGraphsCoord.graphContract = EcuacionDeContinuidadGraphsCoordView.graphContract;
EcuacionDeContinuidadGraphsCoord.graph_identity = EcuacionDeContinuidadGraphsCoordView.graph_identity;
EcuacionDeContinuidadGraphsCoord.axes = EcuacionDeContinuidadGraphsCoordView.axes;
EcuacionDeContinuidadGraphsCoord.formula = EcuacionDeContinuidadGraphsCoordView.formula;
EcuacionDeContinuidadGraphsCoord.profile = EcuacionDeContinuidadGraphsCoordView.profile;

export default EcuacionDeContinuidadGraphsCoord;
