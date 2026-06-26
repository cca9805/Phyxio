// frontend/src/v2/components/graphs/fluidos/Coord/NavierStokesIntroGraphsCoord.jsx
//
// Gráfico coordinado dedicado: Ecuación de Navier-Stokes (Intro)
// Muestra dos modos seleccionables mediante pills:
//   1. Perfil de Poiseuille — u/u_max vs y/R (perfil parabólico laminar)
//   2. Número de Reynolds   — Re vs v con líneas de referencia de régimen
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

const tt = (lang, es, en) => (lang === "en" ? en : es);

// This matches the legacy structure expected by createCoordGraph(

const toNum = (v, fb) => {
  if (v == null || v === "") return fb;
  const n = typeof v === "number" ? v : Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const EPS = 1e-12;

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

// ── Modo 1: Perfil parabólico de Poiseuille ───────────────────────────────────
// u/u_max(y/R) = 1 - (y/R)²   con y/R ∈ [-1, 1]
// y/R como eje X, u/u_max como eje Y
function buildPoiseuilleData(steps = 200) {
  const out = [];
  for (let i = 0; i <= steps; i++) {
    const yR = -1 + (2 * i) / steps;           // y/R ∈ [-1, 1]
    const uNorm = Math.max(0, 1 - yR * yR);     // u/u_max = 1-(y/R)²
    out.push({
      yR: parseFloat(yR.toFixed(4)),
      uNorm: parseFloat(uNorm.toFixed(6)),
    });
  }
  return out;
}

// ── Modo 2: Re vs velocidad media ─────────────────────────────────────────────
// Re = ρ v L / μ,  v ∈ [0, vMax]
function buildReData(rho, mu, L, vMax, steps = 240) {
  const out = [];
  for (let i = 0; i <= steps; i++) {
    const v = (vMax * i) / steps;
    const Re = (rho * v * L) / Math.max(mu, EPS);
    out.push({
      v: parseFloat(v.toFixed(5)),
      Re: parseFloat(Re.toFixed(2)),
    });
  }
  return out;
}

export default function NavierStokesIntroGraphsCoord({ params, lang = "es" }) {
  const uiLang = lang === "en" ? "en" : "es";
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 2) =>
    Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "—";

  const p = params ?? {};

  // ── Parámetros físicos ──────────────────────────────────────────────────────
  const dpdx  = clamp(toNum(p.dpdx, -1000),  -1e6,  -1);      // Pa/m (negativo = caída de presión)
  const mu    = clamp(toNum(p.mu,    0.001),   1e-6,  10);     // Pa·s
  const R     = clamp(toNum(p.R,     0.025),   1e-4,  1);      // m (radio del tubo)
  const rho   = clamp(toNum(p.rho,   1000),    0.1,   15000);  // kg/m³
  const L_Re  = clamp(toNum(p.L,     0.05),    1e-4,  100);    // m (longitud característica para Re)
  const v_op  = clamp(toNum(p.v,     0.1),     0,     200);    // m/s (velocidad de operación para Re)

  // ── Valores derivados (modo Poiseuille) ─────────────────────────────────────
  // u_max = R²/(2μ) · (-∂p/∂x)
  const uMax = (R * R * Math.abs(dpdx)) / (2 * Math.max(mu, EPS));

  // ── Valores derivados (modo Reynolds) ───────────────────────────────────────
  const Re_op = (rho * v_op * L_Re) / Math.max(mu, EPS);
  const vMax_Re = Math.max(
    5 * Math.max(v_op, 0.01),
    (4500 * Math.max(mu, EPS)) / Math.max(rho * L_Re, EPS) * 1.1
  );

  // Velocidades de transición para líneas de referencia
  const v_lam = (2300 * mu) / Math.max(rho * L_Re, EPS);   // v en Re=2300
  const v_tur = (4000 * mu) / Math.max(rho * L_Re, EPS);   // v en Re=4000

  // Régimen actual
  const regime =
    Re_op < 2300
      ? tt(uiLang, "Laminar", "Laminar")
      : Re_op < 4000
      ? tt(uiLang, "Transición", "Transition")
      : tt(uiLang, "Turbulento", "Turbulent");

  const regimeColor =
    Re_op < 2300 ? "#34d399" : Re_op < 4000 ? "#f97316" : "#ef4444";

  // ── Modo activo ─────────────────────────────────────────────────────────────
  const [mode, setMode] = useState("poiseuille"); // "poiseuille" | "reynolds"

  // ── Datos de las curvas ─────────────────────────────────────────────────────
  const dataPoiseuille = useMemo(() => buildPoiseuilleData(200), []);

  const dataRe = useMemo(
    () => buildReData(rho, mu, L_Re, vMax_Re),
    [rho, mu, L_Re, vMax_Re]
  );

  const reAtVMax = (rho * vMax_Re * L_Re) / Math.max(mu, EPS);
  const reYMax = reAtVMax * 1.05;

  const inRangeRe = v_op >= 0 && v_op <= vMax_Re;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {/* ── Cabecera ─────────────────────────────────────────────────────── */}
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">
          {tt(
            uiLang,
            "Navier-Stokes — Perfil de velocidad y régimen",
            "Navier-Stokes — Velocity Profile and Regime"
          )}
        </div>
        <div className="muted" style={{ marginTop: 6, fontSize: 13 }}>
          <MathInline
            latex={
              "\\rho\\,a = -\\frac{\\partial p}{\\partial x} + \\mu\\,\\nabla^2 u + \\rho\\,g_x"
            }
          />
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
          <Pill
            active={mode === "poiseuille"}
            onClick={() => setMode("poiseuille")}
          >
            {tt(uiLang, "Perfil Poiseuille", "Poiseuille Profile")}
          </Pill>
          <Pill
            active={mode === "reynolds"}
            onClick={() => setMode("reynolds")}
          >
            {tt(uiLang, "Número de Reynolds", "Reynolds Number")}
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
          {mode === "poiseuille" ? (
            <>
              <span>
                <b>∂p/∂x</b> = {fmt(dpdx, 0)} Pa/m
              </span>
              <span>
                <b>μ</b> = {fmt(mu, 4)} Pa·s
              </span>
              <span>
                <b>R</b> = {fmt(R * 1000, 1)} mm
              </span>
              <span style={{ color: "#818cf8" }}>
                <b>u_max</b> = {fmt(uMax, 4)} m/s
              </span>
              <span style={{ color: "#facc15" }}>
                <b>ū</b> = {fmt(uMax / 2, 4)} m/s
              </span>
            </>
          ) : (
            <>
              <span>
                <b>ρ</b> = {fmt(rho, 0)} kg/m³
              </span>
              <span>
                <b>μ</b> = {fmt(mu, 4)} Pa·s
              </span>
              <span>
                <b>L</b> = {fmt(L_Re * 1000, 1)} mm
              </span>
              <span>
                <b>v</b> = {fmt(v_op, 3)} m/s
              </span>
              <span style={{ color: regimeColor }}>
                <b>Re</b> = {fmt(Re_op, 0)} — {regime}
              </span>
            </>
          )}
        </div>

        {/* ── Gráfico ───────────────────────────────────────────────────── */}
        <div style={{ marginTop: 14 }}>
          {mode === "poiseuille" ? (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={dataPoiseuille}
                margin={{ top: 4, right: 18, bottom: 18, left: 10 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.07)"
                />
                <XAxis
                  dataKey="yR"
                  domain={[-1, 1]}
                  label={{
                    value: tt(uiLang, "y / R", "y / R"),
                    position: "insideBottom",
                    offset: -8,
                    fill: "rgba(255,255,255,0.6)",
                    fontSize: 12,
                  }}
                  tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 11 }}
                  tickFormatter={(v) => fmt(Number(v), 1)}
                />
                <YAxis
                  domain={[0, 1.08]}
                  label={{
                    value: tt(uiLang, "u / u_max", "u / u_max"),
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
                  formatter={(val, name) => [
                    `${fmt(Number(val), 4)}`,
                    tt(uiLang, "u / u_max", "u / u_max"),
                  ]}
                  labelFormatter={(v) =>
                    `y/R = ${fmt(Number(v), 3)}`
                  }
                />
                <Legend wrapperStyle={{ fontSize: 12, paddingTop: 6 }} />
                <Line
                  type="monotone"
                  dataKey="uNorm"
                  name={tt(
                    uiLang,
                    "u/u_max = 1−(y/R)²",
                    "u/u_max = 1−(y/R)²"
                  )}
                  stroke="#818cf8"
                  strokeWidth={2.8}
                  dot={false}
                />
                {/* Punto de máximo axial (y/R = 0, u/u_max = 1) */}
                <ReferenceDot
                  x={0}
                  y={1}
                  r={6}
                  fill="#facc15"
                  stroke="none"
                  label={{
                    value: tt(uiLang, "u_max", "u_max"),
                    position: "top",
                    fill: "#facc15",
                    fontSize: 11,
                  }}
                />
                {/* Línea de simetría axial */}
                <ReferenceLine
                  x={0}
                  stroke="rgba(250,204,21,0.4)"
                  strokeDasharray="5 3"
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={dataRe}
                margin={{ top: 4, right: 18, bottom: 18, left: 10 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.07)"
                />
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
                  tickFormatter={(v) => fmt(Number(v), 3)}
                />
                <YAxis
                  domain={[0, reYMax]}
                  label={{
                    value: "Re",
                    angle: -90,
                    position: "insideLeft",
                    fill: "rgba(255,255,255,0.6)",
                    fontSize: 12,
                  }}
                  tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 11 }}
                  tickFormatter={(v) => fmt(Number(v), 0)}
                />
                <Tooltip
                  contentStyle={{
                    background: "rgba(15,15,30,0.92)",
                    border: "1px solid rgba(99,102,241,0.3)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                  formatter={(val) => [
                    `Re = ${fmt(Number(val), 0)}`,
                    "Re",
                  ]}
                  labelFormatter={(v) =>
                    `v = ${fmt(Number(v), 4)} m/s`
                  }
                />
                <Legend wrapperStyle={{ fontSize: 12, paddingTop: 6 }} />
                <Line
                  type="monotone"
                  dataKey="Re"
                  name="Re = ρvL/μ"
                  stroke="#818cf8"
                  strokeWidth={2.5}
                  dot={false}
                />
                {/* Línea de transición laminiar→turbulento Re=2300 */}
                <ReferenceLine
                  y={2300}
                  stroke="#f97316"
                  strokeDasharray="8 4"
                  label={{
                    value: "Re = 2300",
                    position: "insideTopRight",
                    fill: "#f97316",
                    fontSize: 11,
                  }}
                />
                {/* Línea de turbulencia plena Re=4000 */}
                <ReferenceLine
                  y={4000}
                  stroke="#ef4444"
                  strokeDasharray="8 4"
                  label={{
                    value: "Re = 4000",
                    position: "insideTopRight",
                    fill: "#ef4444",
                    fontSize: 11,
                  }}
                />
                {/* Punto de operación actual */}
                {inRangeRe && (
                  <ReferenceLine
                    x={parseFloat(v_op.toFixed(5))}
                    stroke="rgba(250,204,21,0.5)"
                    strokeDasharray="4 3"
                  />
                )}
                {inRangeRe && (
                  <ReferenceDot
                    x={parseFloat(v_op.toFixed(5))}
                    y={parseFloat(Re_op.toFixed(2))}
                    r={5}
                    fill="#facc15"
                    stroke="none"
                  />
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
            background:
              mode === "poiseuille"
                ? "rgba(129,140,248,0.07)"
                : "rgba(250,204,21,0.07)",
            border:
              mode === "poiseuille"
                ? "1px solid rgba(129,140,248,0.25)"
                : "1px solid rgba(250,204,21,0.25)",
            fontSize: 13,
          }}
        >
          {mode === "poiseuille" ? (
            <>
              {tt(
                uiLang,
                "Perfil parabólico de Poiseuille: ",
                "Poiseuille parabolic profile: "
              )}
              <b style={{ color: "#818cf8" }}>u/u_max = 1 − (y/R)²</b>
              {"  ·  "}
              {tt(uiLang, "Velocidad máxima en el eje: ", "Max velocity at axis: ")}
              <b style={{ color: "#facc15" }}>
                u_max = {fmt(uMax, 4)} m/s
              </b>
              {"  ·  "}
              {tt(uiLang, "Velocidad media: ", "Mean velocity: ")}
              <b>ū = {fmt(uMax / 2, 4)} m/s</b>
            </>
          ) : (
            <>
              {tt(uiLang, "Re = ", "Re = ")}
              <b style={{ color: regimeColor }}>{fmt(Re_op, 0)}</b>
              {"  →  "}
              <b style={{ color: regimeColor }}>{regime}</b>
              {"  ·  "}
              {tt(
                uiLang,
                "Lamininar < 2300 < Transición < 4000 < Turbulento",
                "Laminar < 2300 < Transition < 4000 < Turbulent"
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
