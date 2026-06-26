// frontend/src/v2/components/graphs/fluidos/Coord/EcuacionDeBernoulliGraphsCoordView.jsx
//
// Gráfico coordinado dedicado: Ecuación de Bernoulli
// Muestra dos modos seleccionables mediante pills:
//   1. Cabeza de energía — las tres componentes (H_p, H_v, H_z) vs velocidad
//   2. Presión dinámica  — curva q = ½ρv² con punto de operación
// Contrato: GraphPageV2 equivalente con params ?? sharedParams
//
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
  Legend,
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
const EPS = 1e-9;

function Pill({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "7px 13px",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.14)",
        background: active ? "rgba(99,102,241,0.28)" : "rgba(0,0,0,0.35)",
        color: "rgba(255,255,255,0.92)",
        fontWeight: 900,
        cursor: "pointer",
        fontSize: 13,
      }}
    >
      {children}
    </button>
  );
}

// ── Modo 1: Cabeza de energía ─────────────────────────────────────────────────
// Genera las tres componentes de H en función de v (manteniendo p, rho, g, z fijos)
function buildHeadData(rho, g, p, z, vMax, steps = 240) {
  const out = [];
  for (let i = 0; i <= steps; i++) {
    const v = (vMax * i) / steps;
    const Hp = p / Math.max(rho * g, EPS);
    const Hv = (v * v) / (2 * Math.max(g, EPS));
    const Hz = z;
    out.push({
      v: parseFloat(v.toFixed(4)),
      Hp: parseFloat(Hp.toFixed(4)),
      Hv: parseFloat(Hv.toFixed(4)),
      Hz: parseFloat(Hz.toFixed(4)),
      H:  parseFloat((Hp + Hv + Hz).toFixed(4)),
    });
  }
  return out;
}

// ── Modo 2: Presión dinámica ──────────────────────────────────────────────────
// q = ½ ρ v²;  p_static = p_total - q
function buildQData(rho, pTotal, vMax, steps = 240) {
  const out = [];
  for (let i = 0; i <= steps; i++) {
    const v = (vMax * i) / steps;
    const q = 0.5 * rho * v * v;
    const pSt = Math.max(0, pTotal - q);
    out.push({
      v:  parseFloat(v.toFixed(4)),
      q:  parseFloat((q / 1000).toFixed(5)),         // kPa
      pSt: parseFloat((pSt / 1000).toFixed(5)),      // kPa
    });
  }
  return out;
}

function EcuacionDeBernoulliGraphsCoordView({ params, sharedParams, lang = "es" }) {
  // param bridge: params ?? sharedParams
  const resolvedParams = params ?? sharedParams ?? {};
  const uiLang = lang === "en" ? "en" : "es";
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 2) =>
    Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "—";

  const p = params ?? {};

  // ── Parámetros físicos ──────────────────────────────────────────────────────
  const rho    = clamp(toNum(p.rho,    1000),  0.1,  15000);
  const g      = clamp(toNum(p.g,      9.81),  0.1,  25);
  const pPa    = clamp(toNum(p.p,    101325),  0,    2e6);    // presión estática [Pa]
  const z      = clamp(toNum(p.z,       0),   -500,  5000);   // cota [m]
  const v      = clamp(toNum(p.v,       5),    0,    200);    // velocidad actual [m/s]
  const vMax   = clamp(toNum(p.vMax,   25),    1,    200);    // rango del gráfico
  const pTotal = clamp(toNum(p.p0, pPa + 0.5 * rho * v * v), 0, 5e6); // presión total [Pa]

  // ── Modo activo ─────────────────────────────────────────────────────────────
  const [mode, setMode] = useState("head"); // "head" | "q"

  // ── Datos de las curvas ─────────────────────────────────────────────────────
  const dataHead = useMemo(
    () => buildHeadData(rho, g, pPa, z, vMax),
    [rho, g, pPa, z, vMax]
  );
  const dataQ = useMemo(
    () => buildQData(rho, pTotal, Math.min(vMax, Math.sqrt((2 * pTotal) / Math.max(rho, EPS)) * 1.05)),
    [rho, pTotal, vMax]
  );

  // ── Valores en el punto de operación ───────────────────────────────────────
  const Hp = pPa  / Math.max(rho * g, EPS);
  const Hv = (v * v) / (2 * Math.max(g, EPS));
  const Hz = z;
  const H  = Hp + Hv + Hz;
  const q  = 0.5 * rho * v * v;
  const pSt = Math.max(0, pTotal - q);

  // ── Rango del dominio Y en modo head ───────────────────────────────────────
  const hMin = Math.min(0, z);
  const hPMax = dataHead[dataHead.length - 1]?.H ?? 1;

  const inRangeHead = v >= 0 && v <= vMax;
  const vQMax = Math.sqrt((2 * pTotal) / Math.max(rho, EPS));
  const inRangeQ = v >= 0 && v <= vQMax * 1.05;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {/* ── Cabecera ─────────────────────────────────────────────────────── */}
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">
          {tt(uiLang,
            "Ecuación de Bernoulli — Análisis energético",
            "Bernoulli's Equation — Energy Analysis")}
        </div>
        <div className="muted" style={{ marginTop: 6, fontSize: 13 }}>
          <MathInline latex={"H = \\dfrac{p}{\\rho g} + \\dfrac{v^2}{2g} + z = \\text{cte}"} />
        </div>

        {/* ── Selector de modo ──────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginTop: 10,
            padding: "7px 12px",
            borderRadius: 10,
            border: "1px solid rgba(2,132,199,0.22)",
            background: "rgba(2,132,199,0.08)",
          }}
        >
          <Pill active={mode === "head"} onClick={() => setMode("head")}>
            {tt(uiLang, "Cabeza de energía", "Energy head")}
          </Pill>
          <Pill active={mode === "q"} onClick={() => setMode("q")}>
            {tt(uiLang, "Presión dinámica", "Dynamic pressure")}
          </Pill>
        </div>

        {/* ── Parámetros actuales ───────────────────────────────────────── */}
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
          <span><b>ρ</b> = {fmt(rho, 0)} kg/m³</span>
          <span><b>p</b> = {fmt(pPa / 1000, 1)} kPa</span>
          <span><b>v</b> = {fmt(v, 2)} m/s</span>
          <span><b>z</b> = {fmt(z, 1)} m</span>
          {mode === "head" && (
            <>
              <span style={{ color: "#f472b6" }}><b>H_p</b> = {fmt(Hp, 2)} m</span>
              <span style={{ color: "#818cf8" }}><b>H_v</b> = {fmt(Hv, 2)} m</span>
              <span style={{ color: "#34d399" }}><b>H_z</b> = {fmt(Hz, 2)} m</span>
              <span style={{ color: "#facc15" }}><b>H</b> = {fmt(H, 2)} m</span>
            </>
          )}
          {mode === "q" && (
            <>
              <span style={{ color: "#818cf8" }}><b>q</b> = {fmt(q / 1000, 2)} kPa</span>
              <span style={{ color: "#34d399" }}><b>p_est</b> = {fmt(pSt / 1000, 2)} kPa</span>
            </>
          )}
        </div>

        {/* ── Gráfico ───────────────────────────────────────────────────── */}
        <div style={{ marginTop: 14 }}>
          {mode === "head" ? (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dataHead} margin={{ top: 4, right: 18, bottom: 18, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.07)" />
                <XAxis
                  dataKey="v"
                  label={{
                    value: tt(uiLang, "v (m/s)", "v (m/s)"),
                    position: "insideBottom",
                    offset: -8,
                    fill: "rgba(255,255,255,0.6)",
                    fontSize: 12,
                  }}
                  tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 11 }}
                  tickFormatter={(v) => fmt(Number(v), 1)}
                />
                <YAxis
                  domain={[hMin - 0.5, hPMax * 1.06]}
                  label={{
                    value: tt(uiLang, "Altura (m)", "Head (m)"),
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
                    const labels = {
                      Hp: tt(uiLang, "H_p (m)", "H_p (m)"),
                      Hv: tt(uiLang, "H_v (m)", "H_v (m)"),
                      Hz: tt(uiLang, "H_z (m)", "H_z (m)"),
                      H:  tt(uiLang, "H total (m)", "H total (m)"),
                    };
                    return [`${fmt(Number(val), 3)} m`, labels[name] ?? name];
                  }}
                  labelFormatter={(v) => `v = ${fmt(Number(v), 2)} m/s`}
                />
                <Legend wrapperStyle={{ fontSize: 12, paddingTop: 6 }} />
                <Line type="monotone" dataKey="Hp" name={tt(uiLang, "H_p presión", "H_p pressure")}
                  stroke="#f472b6" strokeWidth={2.2} dot={false} />
                <Line type="monotone" dataKey="Hv" name={tt(uiLang, "H_v cinética", "H_v kinetic")}
                  stroke="#818cf8" strokeWidth={2.2} dot={false} />
                <Line type="monotone" dataKey="Hz" name={tt(uiLang, "H_z potencial", "H_z potential")}
                  stroke="#34d399" strokeWidth={1.8} strokeDasharray="6 3" dot={false} />
                <Line type="monotone" dataKey="H"  name={tt(uiLang, "H total (cte)", "H total (const)")}
                  stroke="#facc15" strokeWidth={2.8} dot={false} />
                {inRangeHead && (
                  <ReferenceLine x={parseFloat(v.toFixed(4))}
                    stroke="rgba(250,204,21,0.55)" strokeDasharray="4 3" />
                )}
                {inRangeHead && (
                  <ReferenceDot x={parseFloat(v.toFixed(4))}
                    y={parseFloat(H.toFixed(4))} r={5} fill="#facc15" stroke="none" />
                )}
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dataQ} margin={{ top: 4, right: 18, bottom: 18, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.07)" />
                <XAxis
                  dataKey="v"
                  label={{
                    value: tt(uiLang, "v (m/s)", "v (m/s)"),
                    position: "insideBottom",
                    offset: -8,
                    fill: "rgba(255,255,255,0.6)",
                    fontSize: 12,
                  }}
                  tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 11 }}
                  tickFormatter={(v) => fmt(Number(v), 1)}
                />
                <YAxis
                  label={{
                    value: tt(uiLang, "Presión (kPa)", "Pressure (kPa)"),
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
                    const labels = {
                      q:   tt(uiLang, "q dinámica (kPa)", "q dynamic (kPa)"),
                      pSt: tt(uiLang, "p estática (kPa)", "p static (kPa)"),
                    };
                    return [`${fmt(Number(val), 3)} kPa`, labels[name] ?? name];
                  }}
                  labelFormatter={(v) => `v = ${fmt(Number(v), 2)} m/s`}
                />
                <Legend wrapperStyle={{ fontSize: 12, paddingTop: 6 }} />
                <Line type="monotone" dataKey="q"   name={tt(uiLang, "q dinámica", "q dynamic")}
                  stroke="#818cf8" strokeWidth={2.5} dot={false} />
                <Line type="monotone" dataKey="pSt" name={tt(uiLang, "p estática", "p static")}
                  stroke="#34d399" strokeWidth={2.5} dot={false} />
                {inRangeQ && (
                  <ReferenceLine x={parseFloat(v.toFixed(4))}
                    stroke="rgba(250,204,21,0.55)" strokeDasharray="4 3" />
                )}
                {inRangeQ && (
                  <ReferenceDot x={parseFloat(v.toFixed(4))}
                    y={parseFloat((q / 1000).toFixed(5))} r={5} fill="#facc15" stroke="none" />
                )}
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* ── Nota de interpretación ────────────────────────────────────── */}
        <div
          style={{
            marginTop: 8,
            padding: "7px 12px",
            borderRadius: 8,
            background: mode === "head"
              ? "rgba(250,204,21,0.07)"
              : "rgba(16,185,129,0.07)",
            border: mode === "head"
              ? "1px solid rgba(250,204,21,0.25)"
              : "1px solid rgba(16,185,129,0.22)",
            fontSize: 13,
          }}
        >
          {mode === "head" ? (
            <>
              {tt(uiLang, "H total = ", "H total = ")}
              <b style={{ color: "#facc15" }}>{fmt(H, 3)} m</b>
              {"  —  "}
              {tt(uiLang, "constante a lo largo de la línea de corriente.", "constant along the streamline.")}
              {"  ·  "}
              {tt(uiLang, "H_v = ", "H_v = ")}
              <b style={{ color: "#818cf8" }}>{fmt(Hv, 3)} m</b>
              {"  ·  H_p = "}
              <b style={{ color: "#f472b6" }}>{fmt(Hp, 3)} m</b>
            </>
          ) : (
            <>
              {tt(uiLang, "q dinámica = ", "q dynamic = ")}
              <b style={{ color: "#818cf8" }}>{fmt(q / 1000, 3)} kPa</b>
              {"  ·  "}
              {tt(uiLang, "p estática = ", "p static = ")}
              <b style={{ color: "#34d399" }}>{fmt(pSt / 1000, 3)} kPa</b>
              {"  ·  "}
              {tt(uiLang,
                "Al aumentar v, p estática disminuye (efecto Venturi).",
                "As v increases, static pressure decreases (Venturi effect).")}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const EcuacionDeBernoulliGraphsCoord = createCoordGraph({
  Component: EcuacionDeBernoulliGraphsCoordView,
  displayName: "EcuacionDeBernoulliGraphsCoord",
});

EcuacionDeBernoulliGraphsCoord.graphContract = EcuacionDeBernoulliGraphsCoordView.graphContract;
EcuacionDeBernoulliGraphsCoord.graph_identity = EcuacionDeBernoulliGraphsCoordView.graph_identity;
EcuacionDeBernoulliGraphsCoord.axes = EcuacionDeBernoulliGraphsCoordView.axes;
EcuacionDeBernoulliGraphsCoord.formula = EcuacionDeBernoulliGraphsCoordView.formula;
EcuacionDeBernoulliGraphsCoord.profile = EcuacionDeBernoulliGraphsCoordView.profile;

export default EcuacionDeBernoulliGraphsCoord;
