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

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

function buildSeries(m, aMax = 20, step = 0.5) {
  const out = [];
  for (let a = 0; a <= aMax + 1e-9; a += step) out.push({ a, Ff: m * a });
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

export default function ConceptoFuerzasFicticiasGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, 10) },
      { key: "aFrame", aliases: ["a", "a_marco"], default: toNum(p.aFrame ?? p.a ?? p.a_marco, 3) },
      { key: "aMax", aliases: ["a_max"], default: toNum(p.aMax ?? p.a_max, 20) },
      { key: "showFict", aliases: ["mostrarFict"], default: p.showFict ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
      { key: "showRef", aliases: ["mostrarRef"], default: p.showRef ?? true },
    ],
    [p.m, p.masa, p.aFrame, p.a, p.a_marco, p.aMax, p.a_max, p.showFict, p.showPoint, p.showRef]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(toNum(ep.m, 10), 0.05, 500);
  const aFrame = clamp(toNum(ep.aFrame, 3), 0, 20);
  const aMax = clamp(toNum(ep.aMax, 20), 1, 40);
  const showFict = !!ep.showFict;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const data = useMemo(() => buildSeries(m, aMax, 0.5), [m, aMax]);
  const Ff = m * aFrame;

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Concepto de fuerzas ficticias (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"\\vec F_{fict}=-m\\,\\vec a_{marco}"} />.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>m (kg)</span>
              <input className="form-control" style={{ width: 90 }} value={fmt(m, 3).replace(",", ".")} onChange={(e) => setValue("m", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>a_marco</span>
              <input className="form-control" style={{ width: 90 }} value={fmt(aFrame, 3).replace(",", ".")} onChange={(e) => setValue("aFrame", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>a_max</span>
              <input className="form-control" style={{ width: 90 }} value={fmt(aMax, 2).replace(",", ".")} onChange={(e) => setValue("aMax", e.target.value)} />
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
              Seguir calculadora
            </button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showFict} onClick={() => setValue("showFict", !showFict)}>Curva |F_fict|</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              Para a_marco = <b>{fmt(aFrame, 3)}</b> m/s², |F_fict| = <b>{fmt(Ff, 4)}</b> N.
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Magnitud de la fuerza ficticia vs aceleracion del marco</div>
        <div style={{ width: "100%", height: 350, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="a"
                type="number"
                domain={[0, aMax]}
                tickFormatter={(v) => fmt(v, 2)}
                label={{ value: "a_marco (m/s²)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                tickFormatter={(v) => fmt(v, 2)}
                label={{ value: "|F_fict| (N)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip formatter={(value, name) => [fmt(value, 5), name]} labelFormatter={(v) => `a = ${fmt(v, 4)} m/s²`} />
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showFict ? <Line type="monotone" dataKey="Ff" name="|F_fict|=m*a" stroke="#f87171" strokeWidth={3} dot={false} /> : null}
              {showPoint ? <ReferenceDot x={aFrame} y={Ff} r={6} fill="#fb923c" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
