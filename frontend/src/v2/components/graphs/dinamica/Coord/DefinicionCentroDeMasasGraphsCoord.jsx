import React, { useMemo, useCallback } from "react";
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
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";
import { createCoordGraph } from "@/v2/components/graphs/graphFactories.jsx";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

function buildSeries(m1, x1, x2, m2Min = 0.2, m2Max = 10, steps = 220) {
  const out = [];
  for (let i = 0; i <= steps; i += 1) {
    const m2 = m2Min + ((m2Max - m2Min) * i) / steps;
    const M = m1 + m2;
    const xcm = (m1 * x1 + m2 * x2) / M;
    out.push({ m2, xcm });
  }
  return out;
}

function DefinicionCentroDeMasasCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-");

  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "m1", aliases: ["masa1"], default: toNum(p.m1 ?? p.masa1, 2) },
      { key: "m2", aliases: ["masa2"], default: toNum(p.m2 ?? p.masa2, 6) },
      { key: "x1", aliases: ["pos1"], default: toNum(p.x1 ?? p.pos1, -1) },
      { key: "x2", aliases: ["pos2"], default: toNum(p.x2 ?? p.pos2, 3) },
      { key: "showCurve", aliases: ["mostrarCurva"], default: p.showCurve ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [p.m1, p.masa1, p.m2, p.masa2, p.x1, p.pos1, p.x2, p.pos2, p.showCurve, p.showPoint]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m1 = clamp(toNum(ep.m1, 2), 0.1, 20);
  const m2 = clamp(toNum(ep.m2, 6), 0.1, 20);
  const x1 = clamp(toNum(ep.x1, -1), -6, 6);
  const x2 = clamp(toNum(ep.x2, 3), -6, 6);
  const showCurve = !!ep.showCurve;
  const showPoint = !!ep.showPoint;

  const M = m1 + m2;
  const xcm = M > 0 ? (m1 * x1 + m2 * x2) / M : 0;
  const data = useMemo(() => buildSeries(m1, x1, x2), [m1, x1, x2]);

  const setValue = useCallback((k, val) => {
    exp.startExperiment();
    exp.setValue(k, val);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">
          {tt("Definicion de centro de masas (Coord)", "Definition of the Center of Mass (Coord)")}
        </div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"x_{cm}=\\frac{m_1x_1+m_2x_2}{m_1+m_2}"} />{" "}
          {tt(
            "para dos masas sobre un eje comun.",
            "for two masses on one shared axis."
          )}
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
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>m1</span>
              <input className="form-control" style={{ width: 82 }} value={fmt(m1, 2).replace(",", ".")} onChange={(e) => setValue("m1", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>x1</span>
              <input className="form-control" style={{ width: 82 }} value={fmt(x1, 2).replace(",", ".")} onChange={(e) => setValue("x1", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>m2</span>
              <input className="form-control" style={{ width: 82 }} value={fmt(m2, 2).replace(",", ".")} onChange={(e) => setValue("m2", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>x2</span>
              <input className="form-control" style={{ width: 82 }} value={fmt(x2, 2).replace(",", ".")} onChange={(e) => setValue("x2", e.target.value)} />
            </div>

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

          <div className="v2-panel" style={{ padding: 12 }}>
            <div>M = <b>{fmt(M, 3)}</b> kg</div>
            <div>x_cm = <b>{fmt(xcm, 3)}</b> m</div>
            <div style={{ marginTop: 6, fontSize: 13, opacity: 0.86 }}>
              {tt(
                "Si m2 aumenta con x2 fijo, la curva debe arrastrar x_cm hacia x2.",
                "If m2 increases with x2 fixed, the curve must pull x_cm toward x2."
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">
          {tt("Desplazamiento de x_cm al variar m2", "Shift of x_cm when m2 changes")}
        </div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="m2"
                type="number"
                domain={[0.2, 10]}
                tickFormatter={(val) => fmt(val, 1)}
                label={{ value: "m2 (kg)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                tickFormatter={(val) => fmt(val, 2)}
                label={{ value: "x_cm (m)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 4), name]}
                labelFormatter={(val) => `m2 = ${fmt(val, 3)} kg`}
              />
              <ReferenceLine y={x1} stroke="rgba(96,165,250,0.35)" strokeDasharray="4 4" />
              <ReferenceLine y={x2} stroke="rgba(248,113,113,0.35)" strokeDasharray="4 4" />
              {showCurve ? <Line type="monotone" dataKey="xcm" name="x_cm(m2)" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showPoint ? <ReferenceDot x={m2} y={xcm} r={6} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default createCoordGraph({
  displayName: "DefinicionCentroDeMasasGraphsCoord",
  Component: DefinicionCentroDeMasasCoordView,
});
