import React, { useCallback, useMemo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";
import { createCoordGraph } from "../../graphFactories.jsx";


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

const graphIdentity = {
  pregunta_principal: {
    es: "Como leer en Coord que el arrastre lineal hace crecer F_d proporcionalmente a v y como cambia la escala temporal tau = m/b?",
    en: "How can we read in Coord that linear drag makes F_d grow in proportion to v and how does the time scale tau = m/b change?",
  },
};

const buildForceSeries = ({ b, vmax = 60, step = 1 }) => {
  const out = [];
  for (let v = 0; v <= vmax + 1e-9; v += step) out.push({ x: v, drag: b * v });
  return out;
};

const buildTerminalSeries = ({ m, g, bmax = 8, step = 0.1 }) => {
  const out = [];
  for (let b = step; b <= bmax + 1e-9; b += step) out.push({ x: b, vt: (m * g) / b });
  return out;
};

function ArrastreLinealGraphsCoordView(props) {
  void graphIdentity;
  const uiLang = props.lang === "en" ? "en" : "es";
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-");
  const tt = (es, en) => (uiLang === "en" ? en : es);

  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "mode", aliases: ["modo", "escena"], default: p.mode || "force" },
      { key: "b", aliases: ["coef", "k"], default: pickNum(p, ["b", "coef", "k"], 1.2) },
      { key: "v", aliases: ["velocidad"], default: pickNum(p, ["v", "velocidad"], 18) },
      { key: "m", aliases: ["masa"], default: pickNum(p, ["m", "masa"], 75) },
      { key: "g", aliases: ["gravedad"], default: pickNum(p, ["g", "gravedad"], 9.81) },
      { key: "showCurve", aliases: ["mostrarCurva"], default: p.showCurve ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [
      p.mode,
      pickNum(p, ["b", "coef", "k"], 1.2),
      pickNum(p, ["v", "velocidad"], 18),
      pickNum(p, ["m", "masa"], 75),
      pickNum(p, ["g", "gravedad"], 9.81),
      p.showCurve,
      p.showPoint,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const mode = ep.mode === "terminal" ? "terminal" : "force";
  const b = clamp(toNum(ep.b, 1.2), 0.05, 8);
  const v = clamp(toNum(ep.v, 18), 0, 60);
  const m = clamp(toNum(ep.m, 75), 0.1, 200);
  const g = clamp(toNum(ep.g, 9.81), 0.1, 30);
  const showCurve = !!ep.showCurve;
  const showPoint = !!ep.showPoint;

  const drag = b * v;
  const vt = (m * g) / b;

  const data = useMemo(
    () => (mode === "force" ? buildForceSeries({ b }) : buildTerminalSeries({ m, g })),
    [mode, b, m, g]
  );

  const yDomain = useMemo(() => {
    if (mode === "force") return [0, Math.max(10, b * 60) * 1.1];
    return [0, Math.max(10, (m * g) / 0.1) * 1.02];
  }, [mode, b, m, g]);

  const setMode = useCallback((value) => { exp.startExperiment(); exp.setValue("mode", value); }, [exp]);
  const setB = useCallback((value) => { exp.startExperiment(); exp.setValue("b", value); }, [exp]);
  const setV = useCallback((value) => { exp.startExperiment(); exp.setValue("v", value); }, [exp]);
  const setM = useCallback((value) => { exp.startExperiment(); exp.setValue("m", value); }, [exp]);
  const setG = useCallback((value) => { exp.startExperiment(); exp.setValue("g", value); }, [exp]);
  const setShowCurve = useCallback((value) => { exp.startExperiment(); exp.setValue("showCurve", value); }, [exp]);
  const setShowPoint = useCallback((value) => { exp.startExperiment(); exp.setValue("showPoint", value); }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{tt("Arrastre lineal (Coord)", "Linear drag (Coord)")}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"F_d = b v"} /> {tt("y velocidad terminal", "and terminal speed")} <MathInline latex={"v_t = \\frac{m g}{b}"} />.
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
            <Pill active={mode === "force"} onClick={() => setMode("force")}>{tt("F_d vs v", "F_d vs v")}</Pill>
            <Pill active={mode === "terminal"} onClick={() => setMode("terminal")}>{tt("v_t vs b", "v_t vs b")}</Pill>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>b</span>
              <input className="form-control" style={{ width: 74 }} value={fmt(b, 2).replace(",", ".")} onChange={(e) => setB(e.target.value)} />
            </div>

            {mode === "force" ? (
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 13, opacity: 0.85 }}>v</span>
                <input className="form-control" style={{ width: 74 }} value={fmt(v, 1).replace(",", ".")} onChange={(e) => setV(e.target.value)} />
              </div>
            ) : (
              <>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <span style={{ fontSize: 13, opacity: 0.85 }}>m</span>
                  <input className="form-control" style={{ width: 74 }} value={fmt(m, 1).replace(",", ".")} onChange={(e) => setM(e.target.value)} />
                </div>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <span style={{ fontSize: 13, opacity: 0.85 }}>g</span>
                  <input className="form-control" style={{ width: 74 }} value={fmt(g, 2).replace(",", ".")} onChange={(e) => setG(e.target.value)} />
                </div>
              </>
            )}

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
              {tt("Seguir calculadora", "Follow calculator")}
            </button>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              alignItems: "center",
              padding: "8px 12px",
              borderRadius: 10,
              border: "1px solid rgba(2,132,199,0.22)",
              background: "rgba(2,132,199,0.10)",
            }}
          >
            <Pill active={showCurve} onClick={() => setShowCurve(!showCurve)}>{tt("Curva", "Curve")}</Pill>
            <Pill active={showPoint} onClick={() => setShowPoint(!showPoint)}>{tt("Punto", "Point")}</Pill>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="muted" style={{ marginBottom: 10 }}>
          {mode === "force" ? (
            <>
              <MathInline latex={"F_d = b v"} /> = <b>{fmt(drag, 2)}</b> N
            </>
          ) : (
            <>
              <MathInline latex={"v_t = \\frac{m g}{b}"} /> = <b>{fmt(vt, 2)}</b> m/s
            </>
          )}
        </div>

        <div style={{ width: "100%", height: 340 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="x"
                type="number"
                domain={mode === "force" ? [0, 60] : [0.1, 8]}
                tickFormatter={(value) => fmt(value, mode === "force" ? 0 : 1)}
                label={{ value: mode === "force" ? "v (m/s)" : "b (N s/m)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                domain={yDomain}
                tickFormatter={(value) => fmt(value, 1)}
                label={{ value: mode === "force" ? "F_d (N)" : "v_t (m/s)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 3), name]}
                labelFormatter={(value) => (mode === "force" ? `v = ${fmt(value, 1)} m/s` : `b = ${fmt(value, 2)} N s/m`)}
              />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {showCurve ? (
                <Line
                  type="monotone"
                  dataKey={mode === "force" ? "drag" : "vt"}
                  name={mode === "force" ? "F_d = b v" : "v_t = m g / b"}
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={false}
                />
              ) : null}
              {showPoint ? (
                <ReferenceDot
                  x={mode === "force" ? v : b}
                  y={mode === "force" ? drag : vt}
                  r={5}
                  fill="#fb923c"
                  stroke="none"
                />
              ) : null}
              <ReferenceLine x={mode === "force" ? v : b} stroke="#64748b" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

const ArrastreLinealGraphsCoord = createCoordGraph({
  Component: ArrastreLinealGraphsCoordView,
  displayName: "ArrastreLinealGraphsCoord",
});

ArrastreLinealGraphsCoord.graphContract = ArrastreLinealGraphsCoordView.graphContract;
ArrastreLinealGraphsCoord.graph_identity = ArrastreLinealGraphsCoordView.graph_identity;
ArrastreLinealGraphsCoord.axes = ArrastreLinealGraphsCoordView.axes;
ArrastreLinealGraphsCoord.formula = ArrastreLinealGraphsCoordView.formula;
ArrastreLinealGraphsCoord.profile = ArrastreLinealGraphsCoordView.profile;

export default ArrastreLinealGraphsCoord;
