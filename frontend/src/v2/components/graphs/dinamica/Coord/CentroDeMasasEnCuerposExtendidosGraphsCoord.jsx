import React, { useMemo, useState } from "react";
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
  Area,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { createCoordGraph } from "@/v2/components/graphs/graphFactories.jsx";

const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const pillStyle = (active) => ({
  padding: "8px 10px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.14)",
  background: active ? "rgba(99,102,241,0.25)" : "rgba(0,0,0,0.35)",
  color: "rgba(255,255,255,0.92)",
  fontWeight: 900,
  cursor: "pointer",
});

function CentroDeMasasEnCuerposExtendidosCoordView({
  title,
  params = {},
  lang = "es",
}) {
  const uiLang = lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", uiLang === "en" ? "." : ",") : "-");

  const [L, setL] = useState(clamp(toNum(params?.L, 2), 0.4, 8));
  const [beta, setBeta] = useState(clamp(toNum(params?.beta, 0.4), -0.9, 0.9));
  const [showUniform, setShowUniform] = useState(true);
  const [showVariable, setShowVariable] = useState(true);
  const [showIdentity, setShowIdentity] = useState(true);
  const [showPoint, setShowPoint] = useState(true);

  const data = useMemo(() => {
    const out = [];
    const n = 140;
    for (let i = 0; i <= n; i += 1) {
      const b = -0.9 + (1.8 * i) / n;
      const xUniform = L / 2;
      const xVariable = L * ((0.5 + b / 3) / (1 + b / 2));
      out.push({
        beta: b,
        xUniform,
        xVariable,
      });
    }
    return out;
  }, [L]);

  const xcmUniform = L / 2;
  const xcmVariable = L * ((0.5 + beta / 3) / (1 + beta / 2));
  const delta = xcmVariable - xcmUniform;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">
          {title || tt("Centro de masas en cuerpos extendidos", "Center of mass in extended bodies")}
        </div>
        <div className="muted" style={{ marginTop: 6 }}>
          {tt(
            "Barra extendida con densidad uniforme o gradiente lineal de densidad.",
            "Extended rod with uniform density or linear density gradient."
          )}
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            alignItems: "center",
            padding: "8px 12px",
            borderRadius: 10,
            border: "1px solid rgba(59,130,246,0.2)",
            background: "rgba(59,130,246,0.08)",
            marginTop: 10,
          }}
        >
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>L</span>
            <input
              className="form-control"
              style={{ width: 90 }}
              value={L}
              onChange={(e) => setL(clamp(toNum(e.target.value, L), 0.4, 8))}
            />
          </div>

          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>β</span>
            <input
              className="form-control"
              style={{ width: 90 }}
              value={beta}
              onChange={(e) => setBeta(clamp(toNum(e.target.value, beta), -0.9, 0.9))}
            />
          </div>

          <button type="button" onClick={() => setShowUniform((v) => !v)} style={pillStyle(showUniform)}>
            {tt("Uniforme", "Uniform")}
          </button>
          <button type="button" onClick={() => setShowVariable((v) => !v)} style={pillStyle(showVariable)}>
            {tt("Densidad variable", "Variable density")}
          </button>
          <button type="button" onClick={() => setShowIdentity((v) => !v)} style={pillStyle(showIdentity)}>
            x = L/2
          </button>
          <button type="button" onClick={() => setShowPoint((v) => !v)} style={pillStyle(showPoint)}>
            {tt("Punto β actual", "Current β point")}
          </button>
        </div>

        <div className="v2-grid-2" style={{ gap: 12, marginTop: 12 }}>
          <div className="v2-card" style={{ padding: 12, minHeight: 340 }}>
            <div style={{ fontSize: 13, opacity: 0.75, fontWeight: 900, marginBottom: 6 }}>
              {tt("Dependencia de x_cm con el gradiente β", "Dependence of x_cm on the β gradient")}
            </div>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={data} margin={{ top: 10, right: 18, left: 6, bottom: 8 }}>
                  <CartesianGrid stroke="rgba(255,255,255,0.09)" />
                  <XAxis
                    dataKey="beta"
                    tickFormatter={(n) => fmt(n, 2)}
                    stroke="rgba(255,255,255,0.75)"
                    tick={{ fill: "rgba(255,255,255,0.75)", fontSize: 12 }}
                    label={{ value: "β", position: "insideBottomRight", offset: -5, fill: "rgba(255,255,255,0.75)" }}
                  />
                  <YAxis
                    tickFormatter={(n) => fmt(n, 2)}
                    stroke="rgba(255,255,255,0.75)"
                    tick={{ fill: "rgba(255,255,255,0.75)", fontSize: 12 }}
                    label={{ value: tt("x_cm (m)", "x_cm (m)"), angle: -90, position: "insideLeft", fill: "rgba(255,255,255,0.75)" }}
                  />
                  <Tooltip
                    contentStyle={{ background: "rgba(2,6,23,0.94)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10 }}
                    formatter={(v, name) => [fmt(Number(v), 4), name]}
                  />
                  {showIdentity ? (
                    <ReferenceLine y={L / 2} stroke="rgba(255,255,255,0.25)" strokeDasharray="6 4" />
                  ) : null}
                  {showUniform ? (
                    <>
                      <Area type="monotone" dataKey="xUniform" stroke="none" fill="rgba(96,165,250,0.10)" />
                      <Line type="monotone" dataKey="xUniform" name={tt("Uniforme", "Uniform")} stroke="#60a5fa" strokeWidth={2.8} dot={false} />
                    </>
                  ) : null}
                  {showVariable ? (
                    <>
                      <Area type="monotone" dataKey="xVariable" stroke="none" fill="rgba(245,158,11,0.08)" />
                      <Line type="monotone" dataKey="xVariable" name={tt("Variable", "Variable")} stroke="#f59e0b" strokeWidth={3.2} dot={false} />
                    </>
                  ) : null}
                  {showPoint ? (
                    <>
                      {showUniform ? <ReferenceDot x={beta} y={xcmUniform} r={5} fill="#60a5fa" stroke="none" /> : null}
                      {showVariable ? <ReferenceDot x={beta} y={xcmVariable} r={6} fill="#f59e0b" stroke="none" /> : null}
                    </>
                  ) : null}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="v2-card" style={{ padding: 12, display: "grid", gap: 10 }}>
            <div style={{ fontSize: 13, opacity: 0.75, fontWeight: 900 }}>
              {tt("Lectura física", "Physical reading")}
            </div>

            <div className="v2-panel" style={{ background: "rgba(0,0,0,0.28)" }}>
              <div style={{ fontSize: 12, opacity: 0.72 }}>
                {tt("Ecuación base", "Base equation")}
              </div>
              <div style={{ marginTop: 6, color: "#93c5fd" }}>
                <MathInline latex={"x_{cm}=\\frac{1}{M}\\int x\\,dm"} />
              </div>
              <div style={{ marginTop: 6, fontSize: 13 }}>
                {tt(
                  "Para una barra con densidad lineal variable, la integral ya no deja el centro en la mitad geométrica salvo que la densidad sea uniforme.",
                  "For a rod with variable linear density, the integral no longer leaves the center at the geometric midpoint unless the density is uniform."
                )}
              </div>
            </div>

            <div className="v2-panel" style={{ background: "rgba(0,0,0,0.28)" }}>
              <div style={{ fontSize: 12, opacity: 0.72 }}>
                {tt("Lectura", "Reading")}
              </div>
              <div style={{ marginTop: 6 }}>
                {tt("Barra uniforme", "Uniform rod")}: <strong style={{ color: "#60a5fa" }}>{fmt(xcmUniform, 4)} m</strong>
              </div>
              <div>
                {tt("Barra con gradiente β", "Rod with gradient β")}: <strong style={{ color: "#f59e0b" }}>{fmt(xcmVariable, 4)} m</strong>
              </div>
              <div>
                {tt("Desplazamiento respecto a L/2", "Shift relative to L/2")}:{" "}
                <strong style={{ color: delta >= 0 ? "#34d399" : "#fca5a5" }}>{fmt(delta, 4)} m</strong>
              </div>
            </div>

            <div className="v2-panel" style={{ background: "rgba(16,185,129,0.10)" }}>
              <div style={{ fontSize: 12, opacity: 0.78 }}>
                {tt("Idea física", "Physical idea")}
              </div>
              <div style={{ marginTop: 6 }}>
                {tt(
                  "Si β > 0, la densidad aumenta hacia la derecha y el centro de masas se desplaza hacia esa zona. Si β < 0, ocurre lo contrario.",
                  "If β > 0, density increases toward the right and the center of mass shifts toward that region. If β < 0, the opposite happens."
                )}
              </div>
            </div>

            <div className="v2-panel" style={{ background: "rgba(245,158,11,0.10)" }}>
              <div style={{ fontSize: 12, opacity: 0.78 }}>
                {tt("Expresión cerrada usada", "Closed-form expression used")}
              </div>
              <div style={{ marginTop: 6 }}>
                <MathInline latex={"x_{cm}=L\\,\\frac{\\frac{1}{2}+\\frac{\\beta}{3}}{1+\\frac{\\beta}{2}}"} />
              </div>
              <div style={{ marginTop: 6, fontSize: 13 }}>
                {tt(
                  "La curva naranja es el resultado exacto de integrar λ(x)=λ_0\\left(1+\\beta x/L\\right).",
                  "The orange curve is the exact result of integrating λ(x)=λ_0\\left(1+\\beta x/L\\right)."
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default createCoordGraph({
  displayName: "CentroDeMasasEnCuerposExtendidosGraphsCoord",
  Component: CentroDeMasasEnCuerposExtendidosCoordView,
});
