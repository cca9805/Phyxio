import React, { useMemo, useCallback } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const CONTEXTS = [
  { key: "earth", label: "Tierra", g: 9.81 },
  { key: "moon", label: "Luna", g: 1.62 },
  { key: "mars", label: "Marte", g: 3.71 },
  { key: "jupiter", label: "Jupiter", g: 24.79 },
  { key: "elevator", label: "Ascensor", g: 9.81 },
];

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const pickNum = (obj, keys, fb) => {
  for (const k of keys) {
    const v = obj?.[k];
    if (v === undefined || v === null || v === "") continue;
    const n = toNum(v, NaN);
    if (Number.isFinite(n)) return n;
  }
  return fb;
};

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

export default function PesoEnDiferentesContextosGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "context", aliases: ["contexto"], default: p.context || "earth" },
      { key: "m", aliases: ["masa"], default: pickNum(p, ["m", "masa"], 10) },
      { key: "a", aliases: ["aceleracion"], default: pickNum(p, ["a", "aceleracion"], 0) },
      { key: "showW", aliases: ["mostrarW"], default: p.showW ?? true },
      { key: "showN", aliases: ["mostrarN"], default: p.showN ?? true },
    ],
    [p.context, pickNum(p, ["m", "masa"], 10), pickNum(p, ["a", "aceleracion"], 0), p.showW, p.showN]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const context = CONTEXTS.some((c) => c.key === ep.context) ? ep.context : "earth";
  const m = clamp(toNum(ep.m, 10), 0.1, 200);
  const a = clamp(toNum(ep.a, 0), -9.5, 9.5);
  const showW = !!ep.showW;
  const showN = !!ep.showN;

  const currentCtx = useMemo(() => CONTEXTS.find((c) => c.key === context) ?? CONTEXTS[0], [context]);
  const gEff = currentCtx.key === "elevator" ? currentCtx.g + a : currentCtx.g;
  const currentW = m * currentCtx.g;
  const currentN = m * gEff;

  const data = useMemo(
    () =>
      CONTEXTS.map((c) => {
        const gLocal = c.key === "elevator" ? c.g + a : c.g;
        return {
          key: c.key,
          contexto: c.label,
          W: m * c.g,
          N: m * gLocal,
        };
      }),
    [m, a]
  );

  const yMax = useMemo(() => {
    const v = data.reduce((acc, d) => Math.max(acc, d.W, d.N), 1);
    return v * 1.12;
  }, [data]);

  const fmt = (n, d = 2) => {
    if (!Number.isFinite(n)) return "-";
    return n.toFixed(d).replace(".", ",");
  };

  const setContext = useCallback(
    (v) => {
      exp.startExperiment();
      exp.setValue("context", v);
    },
    [exp]
  );
  const setM = useCallback(
    (v) => {
      exp.startExperiment();
      exp.setValue("m", v);
    },
    [exp]
  );
  const setA = useCallback(
    (v) => {
      exp.startExperiment();
      exp.setValue("a", v);
    },
    [exp]
  );
  const setShowW = useCallback(
    (v) => {
      exp.startExperiment();
      exp.setValue("showW", v);
    },
    [exp]
  );
  const setShowN = useCallback(
    (v) => {
      exp.startExperiment();
      exp.setValue("showN", v);
    },
    [exp]
  );

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Peso en diferentes contextos (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          Compara <MathInline latex={"W=mg"} /> y <MathInline latex={"N=m(g+a)"} /> por contexto.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
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
            }}
          >
            <Pill active={context === "earth"} onClick={() => setContext("earth")}>
              Tierra
            </Pill>
            <Pill active={context === "moon"} onClick={() => setContext("moon")}>
              Luna
            </Pill>
            <Pill active={context === "mars"} onClick={() => setContext("mars")}>
              Marte
            </Pill>
            <Pill active={context === "jupiter"} onClick={() => setContext("jupiter")}>
              Jupiter
            </Pill>
            <Pill active={context === "elevator"} onClick={() => setContext("elevator")}>
              Ascensor
            </Pill>

            <button
              type="button"
              onClick={exp.resetToCalculator}
              style={{
                marginLeft: "auto",
                padding: "8px 10px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(0,0,0,0.35)",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              Seguir calculadora
            </button>
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              alignItems: "center",
              padding: "8px 12px",
              borderRadius: 10,
              border: "1px solid rgba(2,132,199,0.22)",
              background: "rgba(2,132,199,0.10)",
            }}
          >
            <span style={{ fontSize: 13, opacity: 0.8 }}>m (kg)</span>
            <input
              className="form-control"
              style={{ width: 90 }}
              inputMode="decimal"
              value={fmt(m, 2).replace(",", ".")}
              onChange={(e) => setM(e.target.value)}
            />

            <span style={{ fontSize: 13, opacity: 0.8 }}>a (m/s2)</span>
            <input
              className="form-control"
              style={{ width: 90 }}
              inputMode="decimal"
              value={fmt(a, 2).replace(",", ".")}
              onChange={(e) => setA(e.target.value)}
              disabled={context !== "elevator"}
            />

            <div className="v2-toggle-row" style={{ marginLeft: "auto", display: "flex", gap: 10 }}>
              <label className="v2-toggle">
                <input className="v2-toggle-input" type="checkbox" checked={showW} onChange={(e) => setShowW(e.target.checked)} />
                <span className="v2-toggle-label">W</span>
              </label>
              <label className="v2-toggle">
                <input className="v2-toggle-input" type="checkbox" checked={showN} onChange={(e) => setShowN(e.target.checked)} />
                <span className="v2-toggle-label">N</span>
              </label>
            </div>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <div style={{ fontWeight: 900, opacity: 0.95 }}>Comparacion por contexto</div>
              <div style={{ fontSize: 12, opacity: 0.75 }}>
                Contexto actual: <b>{currentCtx.label}</b> | W = <b>{fmt(currentW, 2)}</b> N | N = <b>{fmt(currentN, 2)}</b> N
              </div>
            </div>

            <div style={{ width: "100%", height: 320, marginTop: 10 }}>
              <ResponsiveContainer>
                <BarChart data={data} margin={{ left: 6, right: 20, top: 10, bottom: 10 }}>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" />
                  <XAxis
                    dataKey="contexto"
                    tick={{ fill: "rgba(226,232,240,0.80)", fontSize: 12 }}
                    axisLine={{ stroke: "rgba(255,255,255,0.12)" }}
                    tickLine={{ stroke: "rgba(255,255,255,0.12)" }}
                  />
                  <YAxis
                    domain={[0, yMax]}
                    tick={{ fill: "rgba(226,232,240,0.75)", fontSize: 12 }}
                    axisLine={{ stroke: "rgba(255,255,255,0.12)" }}
                    tickLine={{ stroke: "rgba(255,255,255,0.12)" }}
                    label={{ value: "F (N)", angle: -90, position: "insideLeft", fill: "rgba(226,232,240,0.65)" }}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "rgba(2,6,23,0.95)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 12,
                      color: "rgba(226,232,240,0.9)",
                    }}
                    formatter={(value, name) => [fmt(value, 2), name]}
                  />

                  <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />

                  {showW ? <Bar dataKey="W" fill="#ef4444" radius={[8, 8, 0, 0]} /> : null}
                  {showN ? <Bar dataKey="N" fill="#3b82f6" radius={[8, 8, 0, 0]} /> : null}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="v2-panel" style={{ padding: 12, background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.84, lineHeight: 1.45 }}>
              <MathInline latex={"W=mg"} /> y <MathInline latex={"N=m(g+a)"} />.
              {context === "elevator" ? (
                <>
                  {" "}
                  Con a = <b>{fmt(a, 2)}</b> m/s2, g_eff = <b>{fmt(gEff, 2)}</b> m/s2.
                </>
              ) : (
                <> Fuera del ascensor, a = 0 y N coincide con W en reposo.</>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

