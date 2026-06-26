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
    es: "Como leer en Coord que el arrastre cuadratico hace crecer F_d con v al cuadrado y como influye el coeficiente c?",
    en: "How can we read in Coord that quadratic drag makes F_d grow with the square of v and how does coefficient c influence it?",
  },
};

const buildForceSeries = ({ c, vmax = 60, step = 1 }) => {
  const out = [];
  for (let v = 0; v <= vmax + 1e-9; v += step) out.push({ x: v, drag: c * v * v });
  return out;
};

const buildTerminalSeries = ({ m, g, cmax = 1.5, step = 0.02 }) => {
  const out = [];
  for (let c = step; c <= cmax + 1e-9; c += step) out.push({ x: c, vt: Math.sqrt((m * g) / c) });
  return out;
};

function ArrastreCuadraticoGraphsCoordView(props) {
  void graphIdentity;
  const uiLang = props.lang === "en" ? "en" : "es";
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-");
  const tt = (es, en) => (uiLang === "en" ? en : es);

  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "mode", aliases: ["modo", "escena"], default: p.mode || "force" },
      { key: "c", aliases: ["coef", "k"], default: pickNum(p, ["c", "coef", "k"], 0.18) },
      { key: "v", aliases: ["velocidad"], default: pickNum(p, ["v", "velocidad"], 18) },
      { key: "m", aliases: ["masa"], default: pickNum(p, ["m", "masa"], 75) },
      { key: "g", aliases: ["gravedad"], default: pickNum(p, ["g", "gravedad"], 9.81) },
      { key: "showCurve", aliases: ["mostrarCurva"], default: p.showCurve ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [
      p.mode,
      pickNum(p, ["c", "coef", "k"], 0.18),
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
  const c = clamp(toNum(ep.c, 0.18), 0.01, 1.5);
  const v = clamp(toNum(ep.v, 18), 0, 60);
  const m = clamp(toNum(ep.m, 75), 0.1, 200);
  const g = clamp(toNum(ep.g, 9.81), 0.1, 30);
  const showCurve = !!ep.showCurve;
  const showPoint = !!ep.showPoint;

  const drag = c * v * v;
  const vt = Math.sqrt((m * g) / c);

  const data = useMemo(
    () => (mode === "force" ? buildForceSeries({ c }) : buildTerminalSeries({ m, g })),
    [mode, c, m, g]
  );

  const yDomain = useMemo(() => {
    if (mode === "force") return [0, Math.max(10, c * 60 * 60) * 1.1];
    return [0, Math.max(10, Math.sqrt((m * g) / 0.01)) * 1.05];
  }, [mode, c, m, g]);

  const setMode = useCallback((value) => { exp.startExperiment(); exp.setValue("mode", value); }, [exp]);
  const setC = useCallback((value) => { exp.startExperiment(); exp.setValue("c", value); }, [exp]);
  const setV = useCallback((value) => { exp.startExperiment(); exp.setValue("v", value); }, [exp]);
  const setM = useCallback((value) => { exp.startExperiment(); exp.setValue("m", value); }, [exp]);
  const setG = useCallback((value) => { exp.startExperiment(); exp.setValue("g", value); }, [exp]);
  const setShowCurve = useCallback((value) => { exp.startExperiment(); exp.setValue("showCurve", value); }, [exp]);
  const setShowPoint = useCallback((value) => { exp.startExperiment(); exp.setValue("showPoint", value); }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{tt("Arrastre cuadratico (Coord)", "Quadratic drag (Coord)")}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"F_d = c v^2"} /> {tt("y velocidad terminal", "and terminal speed")} <MathInline latex={"v_t = \\sqrt{\\frac{m g}{c}}"} />.
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
            <Pill active={mode === "terminal"} onClick={() => setMode("terminal")}>{tt("v_t vs c", "v_t vs c")}</Pill>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>c</span>
              <input className="form-control" style={{ width: 74 }} value={fmt(c, 2).replace(",", ".")} onChange={(e) => setC(e.target.value)} />
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
              <MathInline latex={"F_d = c v^2"} /> = <b>{fmt(drag, 2)}</b> N
            </>
          ) : (
            <>
              <MathInline latex={"v_t = \\sqrt{\\frac{m g}{c}}"} /> = <b>{fmt(vt, 2)}</b> m/s
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
                domain={mode === "force" ? [0, 60] : [0.02, 1.5]}
                tickFormatter={(value) => fmt(value, mode === "force" ? 0 : 2)}
                label={{ value: mode === "force" ? "v (m/s)" : "c", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                domain={yDomain}
                tickFormatter={(value) => fmt(value, 1)}
                label={{ value: mode === "force" ? "F_d (N)" : "v_t (m/s)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 3), name]}
                labelFormatter={(value) => (mode === "force" ? `v = ${fmt(value, 1)} m/s` : `c = ${fmt(value, 2)}`)}
              />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {showCurve ? (
                <Line
                  type="monotone"
                  dataKey={mode === "force" ? "drag" : "vt"}
                  name={mode === "force" ? "F_d = c v^2" : "v_t = sqrt(m g / c)"}
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={false}
                />
              ) : null}
              {showPoint ? (
                <ReferenceDot
                  x={mode === "force" ? v : c}
                  y={mode === "force" ? drag : vt}
                  r={5}
                  fill="#fb923c"
                  stroke="none"
                />
              ) : null}
              <ReferenceLine x={mode === "force" ? v : c} stroke="#64748b" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

const ArrastreCuadraticoGraphsCoord = createCoordGraph({
  Component: ArrastreCuadraticoGraphsCoordView,
  displayName: "ArrastreCuadraticoGraphsCoord",
});

ArrastreCuadraticoGraphsCoord.graphContract = ArrastreCuadraticoGraphsCoordView.graphContract;
ArrastreCuadraticoGraphsCoord.graph_identity = ArrastreCuadraticoGraphsCoordView.graph_identity;
ArrastreCuadraticoGraphsCoord.axes = ArrastreCuadraticoGraphsCoordView.axes;
ArrastreCuadraticoGraphsCoord.formula = ArrastreCuadraticoGraphsCoordView.formula;
ArrastreCuadraticoGraphsCoord.profile = ArrastreCuadraticoGraphsCoordView.profile;

export default ArrastreCuadraticoGraphsCoord;
