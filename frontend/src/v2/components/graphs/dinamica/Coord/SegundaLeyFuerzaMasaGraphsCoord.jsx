import React, { useEffect, useMemo, useState } from "react";
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

import { pickParam } from "@/v2/components/Coord/pickParamGraphs";
import MathInline from "@/v2/components/shared/MathInline";
import { fmt } from "@/v2/components/Coord/graphFormat";
import { createCoordGraph } from "../../graphFactories.jsx";

// useExperimentParams contract: see @/v2/components/graphs_shared/experiment/useExperimentParams

const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo determina la fuerza neta la aceleración de un cuerpo de masa m?",
    en: "How does the net force determine the acceleration of a body with mass m?",
  },
  magnitud_estrella: "F_net",
  magnitud_secundaria: "a",
  variable_control: "m",
};

const t = (lang, es, en) => (lang === "en" ? en : es);

function toNum(v, fallback) {
  if (v == null || v === "") return fallback;
  if (typeof v === "number") return Number.isFinite(v) ? v : fallback;
  const n = Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function buildSeriesAVsF({ m, Fmin, Fmax, step }) {
  const out = [];
  const lo = Math.min(Fmin, Fmax);
  const hi = Math.max(Fmin, Fmax);
  for (let F = lo; F <= hi + 1e-9; F += step) {
    out.push({ x: F, a: F / m });
  }
  return out;
}

function buildSeriesAVsM({ F, mMin, mMax, step }) {
  const out = [];
  const lo = Math.min(mMin, mMax);
  const hi = Math.max(mMin, mMax);
  for (let m = lo; m <= hi + 1e-9; m += step) {
    out.push({ x: m, a: F / m });
  }
  return out;
}

function Pill({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "8px 10px",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.14)",
        background: active ? "rgba(99,102,241,0.25)" : "rgba(0,0,0,0.35)",
        color: "rgba(255,255,255,0.90)",
        fontWeight: 900,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

function SegundaLeyFuerzaMasaGraphsCoordView(props) {
  const resolvedParams = props.params ?? props.sharedParams;
  const lang = props.lang ?? "es";
  const uiLang = lang === "en" ? "en" : "es";
  const decSep = uiLang === "en" ? "." : ",";
  const [linked, setLinked] = useState(true);
  const [mode, setMode] = useState("a_vs_F");
  const [showCurve, setShowCurve] = useState(true);
  const [showPoint, setShowPoint] = useState(true);
  const [showZero, setShowZero] = useState(true);

  const [p, setP] = useState({
    m: 10,
    F: 20,
    Fmin: 0,
    Fmax: 100,
    mMin: 1,
    mMax: 50,
    stepF: 2,
    stepM: 1,
  });

  useEffect(() => {
    if (!linked || !resolvedParams) return;
    const src = resolvedParams?.known ?? resolvedParams?.values ?? resolvedParams;
    setP((prev) => ({
      ...prev,
      m: pickParam(src, ["m", "masa", "M"], prev.m),
      F: pickParam(src, ["F", "f", "force", "Fres", "F_net"], prev.F),
    }));
  }, [linked, resolvedParams]);

  const safe = useMemo(() => {
    const m = clamp(toNum(p.m, 10), 0.05, 500);
    const F = clamp(toNum(p.F, 20), -400, 400);
    const Fmin = clamp(toNum(p.Fmin, 0), -500, 500);
    const Fmax = clamp(toNum(p.Fmax, 100), -500, 500);
    const mMin = clamp(toNum(p.mMin, 1), 0.05, 500);
    const mMax = clamp(toNum(p.mMax, 50), 0.05, 500);
    const stepF = clamp(toNum(p.stepF, 2), 0.1, 30);
    const stepM = clamp(toNum(p.stepM, 1), 0.05, 30);
    return { m, F, Fmin, Fmax, mMin, mMax, stepF, stepM };
  }, [p]);

  const aNow = useMemo(() => safe.F / safe.m, [safe]);

  const data = useMemo(() => {
    if (mode === "a_vs_m") {
      return buildSeriesAVsM({
        F: safe.F,
        mMin: safe.mMin,
        mMax: safe.mMax,
        step: safe.stepM,
      });
    }
    return buildSeriesAVsF({
      m: safe.m,
      Fmin: safe.Fmin,
      Fmax: safe.Fmax,
      step: safe.stepF,
    });
  }, [mode, safe]);

  const current = useMemo(
    () => ({
      x: mode === "a_vs_F" ? safe.F : safe.m,
      a: aNow,
    }),
    [mode, safe.F, safe.m, aNow]
  );

  const yBounds = useMemo(() => {
    if (!data.length) return [-1, 1];
    let minY = data[0].a;
    let maxY = data[0].a;
    for (const d of data) {
      if (d.a < minY) minY = d.a;
      if (d.a > maxY) maxY = d.a;
    }
    const pad = Math.max((maxY - minY) * 0.08, 0.5);
    return [minY - pad, maxY + pad];
  }, [data]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{t(uiLang, "Segunda ley (Coord)", "Second law (Coord)")}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"a=\\frac{F}{m}"} />.{" "}
          {t(
            uiLang,
            <>Explora la relación <b>a proporcional a F</b> y <b>a proporcional a 1/m</b> en dos vistas.</>,
            <>Explore the relation <b>a proportional to F</b> and <b>a proportional to 1/m</b> in two views.</>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              flexWrap: "wrap",
              padding: "8px 12px",
              background: "rgba(59, 130, 246, 0.08)",
              borderRadius: "10px",
              border: "1px solid rgba(59, 130, 246, 0.2)",
            }}
          >
            <span style={{ color: "#60a5fa", fontSize: "14px", fontWeight: "600" }}>
              {t(uiLang, "Parametros:", "Parameters:")}
            </span>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ color: "#fbbf24" }}>m (kg)</span>
              <input
                className="form-control"
                style={{ width: 84 }}
                disabled={linked}
                inputMode="decimal"
                value={p.m}
                onChange={(e) => setP((s) => ({ ...s, m: e.target.value }))}
              />
            </div>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ color: "#34d399" }}>F (N)</span>
              <input
                className="form-control"
                style={{ width: 84 }}
                disabled={linked}
                inputMode="decimal"
                value={p.F}
                onChange={(e) => setP((s) => ({ ...s, F: e.target.value }))}
              />
            </div>

            <Pill active={linked} onClick={() => setLinked(true)}>
              {t(uiLang, "Seguir calculadora", "Follow calculator")}
            </Pill>
            <Pill active={!linked} onClick={() => setLinked(false)}>
              {t(uiLang, "Experimento", "Experiment")}
            </Pill>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              flexWrap: "wrap",
              padding: "8px 12px",
              background: "rgba(2, 132, 199, 0.10)",
              borderRadius: "10px",
              border: "1px solid rgba(2, 132, 199, 0.22)",
            }}
          >
            <Pill active={mode === "a_vs_F"} onClick={() => setMode("a_vs_F")}>
              a(F)
            </Pill>
            <Pill active={mode === "a_vs_m"} onClick={() => setMode("a_vs_m")}>
              a(m)
            </Pill>

            {mode === "a_vs_F" ? (
              <>
                <span style={{ color: "#cbd5e1", fontSize: 13 }}>{t(uiLang, "F min", "F min")}</span>
                <input
                  className="form-control"
                  style={{ width: 76 }}
                  inputMode="decimal"
                  value={p.Fmin}
                  onChange={(e) => setP((s) => ({ ...s, Fmin: e.target.value }))}
                />
                <span style={{ color: "#cbd5e1", fontSize: 13 }}>{t(uiLang, "F max", "F max")}</span>
                <input
                  className="form-control"
                  style={{ width: 76 }}
                  inputMode="decimal"
                  value={p.Fmax}
                  onChange={(e) => setP((s) => ({ ...s, Fmax: e.target.value }))}
                />
                <span style={{ color: "#cbd5e1", fontSize: 13 }}>{t(uiLang, "Paso", "Step")}</span>
                <input
                  className="form-control"
                  style={{ width: 70 }}
                  inputMode="decimal"
                  value={p.stepF}
                  onChange={(e) => setP((s) => ({ ...s, stepF: e.target.value }))}
                />
              </>
            ) : (
              <>
                <span style={{ color: "#cbd5e1", fontSize: 13 }}>{t(uiLang, "m min", "m min")}</span>
                <input
                  className="form-control"
                  style={{ width: 76 }}
                  inputMode="decimal"
                  value={p.mMin}
                  onChange={(e) => setP((s) => ({ ...s, mMin: e.target.value }))}
                />
                <span style={{ color: "#cbd5e1", fontSize: 13 }}>{t(uiLang, "m max", "m max")}</span>
                <input
                  className="form-control"
                  style={{ width: 76 }}
                  inputMode="decimal"
                  value={p.mMax}
                  onChange={(e) => setP((s) => ({ ...s, mMax: e.target.value }))}
                />
                <span style={{ color: "#cbd5e1", fontSize: 13 }}>{t(uiLang, "Paso", "Step")}</span>
                <input
                  className="form-control"
                  style={{ width: 70 }}
                  inputMode="decimal"
                  value={p.stepM}
                  onChange={(e) => setP((s) => ({ ...s, stepM: e.target.value }))}
                />
              </>
            )}
          </div>

          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              padding: "8px 12px",
              background: "rgba(168, 85, 247, 0.07)",
              borderRadius: "10px",
              border: "1px solid rgba(168, 85, 247, 0.18)",
            }}
          >
            <label className="v2-toggle">
              <input className="v2-toggle-input" type="checkbox" checked={showCurve} onChange={(e) => setShowCurve(e.target.checked)} />
              <span className="v2-toggle-label">{t(uiLang, "Curva", "Curve")}</span>
            </label>
            <label className="v2-toggle">
              <input className="v2-toggle-input" type="checkbox" checked={showPoint} onChange={(e) => setShowPoint(e.target.checked)} />
              <span className="v2-toggle-label">{t(uiLang, "Punto actual", "Current point")}</span>
            </label>
            <label className="v2-toggle">
              <input className="v2-toggle-input" type="checkbox" checked={showZero} onChange={(e) => setShowZero(e.target.checked)} />
              <span className="v2-toggle-label">{t(uiLang, "Linea y=0", "Line y=0")}</span>
            </label>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <div style={{ fontWeight: 900, opacity: 0.95 }}>
                {mode === "a_vs_F"
                  ? t(uiLang, "Aceleracion en funcion de fuerza (m fija)", "Acceleration as a function of force (fixed m)")
                  : t(uiLang, "Aceleracion en funcion de masa (F fija)", "Acceleration as a function of mass (fixed F)")}
              </div>
              <div style={{ fontSize: 12, opacity: 0.75 }}>
                {t(uiLang, "Punto actual", "Current point")}: {mode === "a_vs_F" ? "F" : "m"} = <b>{fmt(current.x, 2)}</b> {mode === "a_vs_F" ? "N" : "kg"} {"->"} a ={" "}
                <b>{fmt(current.a, 3)}</b> m/s^2
              </div>
            </div>

            <div style={{ width: "100%", height: 330, marginTop: 10 }}>
              <ResponsiveContainer>
                <LineChart data={data} margin={{ left: 10, right: 20, top: 10, bottom: 10 }}>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" />
                  <XAxis
                    dataKey="x"
                    type="number"
                    tick={{ fill: "rgba(226,232,240,0.75)", fontSize: 12 }}
                    axisLine={{ stroke: "rgba(255,255,255,0.12)" }}
                    tickLine={{ stroke: "rgba(255,255,255,0.12)" }}
                    label={{
                      value: mode === "a_vs_F" ? "F (N)" : "m (kg)",
                      position: "insideBottomRight",
                      fill: "rgba(226,232,240,0.6)",
                    }}
                  />
                  <YAxis
                    type="number"
                    domain={yBounds}
                    tick={{ fill: "rgba(226,232,240,0.75)", fontSize: 12 }}
                    axisLine={{ stroke: "rgba(255,255,255,0.12)" }}
                    tickLine={{ stroke: "rgba(255,255,255,0.12)" }}
                    label={{ value: "a (m/s^2)", angle: -90, position: "insideLeft", fill: "rgba(226,232,240,0.6)" }}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "rgba(2,6,23,0.95)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 12,
                      color: "rgba(226,232,240,0.9)",
                    }}
                    formatter={(value, name) => [fmt(value, 3), name]}
                    labelFormatter={(l) => `${mode === "a_vs_F" ? "F" : "m"} = ${fmt(l, 2)} ${mode === "a_vs_F" ? "N" : "kg"}`}
                  />

                  {showZero ? <ReferenceLine y={0} stroke="rgba(148,163,184,0.5)" strokeDasharray="4 4" /> : null}
                  {showCurve ? <Line type="monotone" dataKey="a" stroke="#60a5fa" strokeWidth={3} dot={false} name="a(F)" /> : null}
                  {showPoint ? <ReferenceDot x={current.x} y={current.a} r={5} fill="#fb923c" stroke="none" /> : null}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="v2-panel" style={{ padding: 12, background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>{t(uiLang, "Lectura rapida", "Quick reading")}</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.85, lineHeight: 1.5 }}>
              {t(uiLang, "Ecuacion base", "Base equation")}: <MathInline latex={"a=\\frac{F}{m}"} />.
              <br />
              {t(uiLang, "Con", "With")} <b>F = {fmt(safe.F, 2)} N</b> {t(uiLang, "y", "and")} <b>m = {fmt(safe.m, 2)} kg</b>, {t(uiLang, "se obtiene", "we obtain")}{" "}
              <b style={{ color: "#fb923c" }}>a = {fmt(aNow, 3)} m/s^2</b>.
              <br />
              {t(uiLang, "Regla: al subir F, sube a; al subir m, baja a.", "Rule: increasing F increases a; increasing m decreases a.")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SegundaLeyFuerzaMasaGraphsCoord = createCoordGraph({
  Component: SegundaLeyFuerzaMasaGraphsCoordView,
  displayName: "SegundaLeyFuerzaMasaGraphsCoord",
});

SegundaLeyFuerzaMasaGraphsCoord.graphContract = SegundaLeyFuerzaMasaGraphsCoordView.graphContract;
SegundaLeyFuerzaMasaGraphsCoord.graph_identity = SegundaLeyFuerzaMasaGraphsCoordView.graph_identity;
SegundaLeyFuerzaMasaGraphsCoord.axes = SegundaLeyFuerzaMasaGraphsCoordView.axes;
SegundaLeyFuerzaMasaGraphsCoord.formula = SegundaLeyFuerzaMasaGraphsCoordView.formula;
SegundaLeyFuerzaMasaGraphsCoord.profile = SegundaLeyFuerzaMasaGraphsCoordView.profile;

export default SegundaLeyFuerzaMasaGraphsCoord;
