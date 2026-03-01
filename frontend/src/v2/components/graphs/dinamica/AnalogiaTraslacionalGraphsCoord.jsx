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
import {
  computeAlpha,
  computeA,
} from "@/v2/engine/models/dinamica/segundaLeyRotacional";

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

function buildAlphaSeries(I, step = 0.1) {
  const out = [];
  for (let tau = 0; tau <= 10 + 1e-9; tau += step) {
    out.push({ x: tau, y: computeAlpha({ tau, I }) });
  }
  return out;
}

function buildASeries(m, step = 1) {
  const out = [];
  for (let F = 0; F <= 100 + 1e-9; F += step) {
    out.push({ x: F, y: computeA({ F, m }) });
  }
  return out;
}

export default function AnalogiaTraslacionalGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "tau", aliases: ["t", "torque"], default: pickNum(p, ["tau", "t", "torque"], 2) },
      { key: "I", aliases: ["inercia"], default: pickNum(p, ["I", "inercia"], 0.5) },
      { key: "F", aliases: ["f", "fuerza"], default: pickNum(p, ["F", "f", "fuerza"], 20) },
      { key: "m", aliases: ["masa"], default: pickNum(p, ["m", "masa"], 5) },
      { key: "showAlphaCurve", aliases: ["mostrarAlpha"], default: p.showAlphaCurve ?? true },
      { key: "showACurve", aliases: ["mostrarA"], default: p.showACurve ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [
      pickNum(p, ["tau", "t", "torque"], 2),
      pickNum(p, ["I", "inercia"], 0.5),
      pickNum(p, ["F", "f", "fuerza"], 20),
      pickNum(p, ["m", "masa"], 5),
      p.showAlphaCurve,
      p.showACurve,
      p.showPoint,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const tau = clamp(toNum(ep.tau, 2), 0, 10);
  const I = clamp(toNum(ep.I, 0.5), 0.05, 20);
  const F = clamp(toNum(ep.F, 20), 0, 100);
  const m = clamp(toNum(ep.m, 5), 0.05, 100);
  const showAlphaCurve = !!ep.showAlphaCurve;
  const showACurve = !!ep.showACurve;
  const showPoint = !!ep.showPoint;

  const alphaNow = computeAlpha({ tau, I });
  const aNow = computeA({ F, m });
  const slopeAlpha = 1 / I;
  const slopeA = 1 / m;

  const alphaData = useMemo(() => buildAlphaSeries(I, 0.1), [I]);
  const aData = useMemo(() => buildASeries(m, 1), [m]);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Analogia traslacional (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"\\alpha=\\frac{\\tau}{I}"} /> y <MathInline latex={"a=\\frac{F}{m}"} />.
          Misma estructura matematica: magnitud aplicada / inercia.
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
              <span style={{ fontSize: 13, opacity: 0.85 }}>tau (N*m)</span>
              <input className="form-control" style={{ width: 92 }} value={fmt(tau, 2).replace(",", ".")} onChange={(e) => setValue("tau", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>I (kg*m²)</span>
              <input className="form-control" style={{ width: 92 }} value={fmt(I, 3).replace(",", ".")} onChange={(e) => setValue("I", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>F (N)</span>
              <input className="form-control" style={{ width: 92 }} value={fmt(F, 2).replace(",", ".")} onChange={(e) => setValue("F", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>m (kg)</span>
              <input className="form-control" style={{ width: 92 }} value={fmt(m, 3).replace(",", ".")} onChange={(e) => setValue("m", e.target.value)} />
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
            <Pill active={showAlphaCurve} onClick={() => setValue("showAlphaCurve", !showAlphaCurve)}>Curva alpha(tau)</Pill>
            <Pill active={showACurve} onClick={() => setValue("showACurve", !showACurve)}>Curva a(F)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Puntos actuales</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              alpha = <b>{fmt(alphaNow, 4)}</b> rad/s² (pendiente 1/I = <b>{fmt(slopeAlpha, 4)}</b>)
              <br />
              a = <b>{fmt(aNow, 4)}</b> m/s² (pendiente 1/m = <b>{fmt(slopeA, 4)}</b>)
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Comparacion de linealidad</div>
        <div className="v2-grid-2" style={{ marginTop: 10, gap: 12 }}>
          <div className="v2-panel" style={{ padding: 10 }}>
            <div style={{ fontWeight: 800, fontSize: 13, opacity: 0.9, marginBottom: 8 }}><MathInline latex={"\\alpha(\\tau)=\\frac{\\tau}{I}"} /></div>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={alphaData} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="4 4" />
                  <XAxis dataKey="x" type="number" domain={[0, 10]} tickFormatter={(v) => fmt(v, 1)} label={{ value: "tau (N*m)", position: "insideBottomRight", offset: -5 }} />
                  <YAxis tickFormatter={(v) => fmt(v, 1)} label={{ value: "alpha (rad/s²)", angle: -90, position: "insideLeft" }} />
                  <Tooltip formatter={(value, name) => [fmt(value, 5), name]} labelFormatter={(l) => `tau = ${fmt(l, 3)} N*m`} />
                  <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
                  {showAlphaCurve ? <Line type="monotone" dataKey="y" name="alpha" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
                  {showPoint ? <ReferenceDot x={tau} y={alphaNow} r={5} fill="#22c55e" stroke="none" /> : null}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="v2-panel" style={{ padding: 10 }}>
            <div style={{ fontWeight: 800, fontSize: 13, opacity: 0.9, marginBottom: 8 }}><MathInline latex={"a(F)=\\frac{F}{m}"} /></div>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={aData} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="4 4" />
                  <XAxis dataKey="x" type="number" domain={[0, 100]} tickFormatter={(v) => fmt(v, 0)} label={{ value: "F (N)", position: "insideBottomRight", offset: -5 }} />
                  <YAxis tickFormatter={(v) => fmt(v, 1)} label={{ value: "a (m/s²)", angle: -90, position: "insideLeft" }} />
                  <Tooltip formatter={(value, name) => [fmt(value, 5), name]} labelFormatter={(l) => `F = ${fmt(l, 2)} N`} />
                  <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
                  {showACurve ? <Line type="monotone" dataKey="y" name="a" stroke="#38bdf8" strokeWidth={3} dot={false} /> : null}
                  {showPoint ? <ReferenceDot x={F} y={aNow} r={5} fill="#f97316" stroke="none" /> : null}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



