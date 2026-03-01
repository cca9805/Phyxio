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

const alphaFrom = (tauAp, tauRoz, I) => (tauAp - tauRoz) / I;

function buildAlphaVsTauAp(tauRoz, I, step = 0.1) {
  const out = [];
  for (let tauAp = 0; tauAp <= 10 + 1e-9; tauAp += step) {
    const sumTau = tauAp - tauRoz;
    out.push({ x: tauAp, y: sumTau / I, sumTau });
  }
  return out;
}

function buildAlphaVsI(tauAp, tauRoz, step = 0.05) {
  const out = [];
  for (let I = 0.1; I <= 3 + 1e-9; I += step) {
    const sumTau = tauAp - tauRoz;
    out.push({ x: I, y: sumTau / I });
  }
  return out;
}

export default function EjemplosAplicadosGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "tau_ap", aliases: ["tauAp", "tauap"], default: pickNum(p, ["tau_ap", "tauAp", "tauap"], 3) },
      { key: "tau_roz", aliases: ["tauRoz", "tauroz"], default: pickNum(p, ["tau_roz", "tauRoz", "tauroz"], 1) },
      { key: "I", aliases: ["inercia"], default: pickNum(p, ["I", "inercia"], 0.75) },
      { key: "showCurveAp", aliases: ["mostrarCurvaAp"], default: p.showCurveAp ?? true },
      { key: "showCurveI", aliases: ["mostrarCurvaI"], default: p.showCurveI ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [
      pickNum(p, ["tau_ap", "tauAp", "tauap"], 3),
      pickNum(p, ["tau_roz", "tauRoz", "tauroz"], 1),
      pickNum(p, ["I", "inercia"], 0.75),
      p.showCurveAp,
      p.showCurveI,
      p.showPoint,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const tauAp = clamp(toNum(ep.tau_ap, 3), 0, 10);
  const tauRoz = clamp(toNum(ep.tau_roz, 1), 0, 10);
  const I = clamp(toNum(ep.I, 0.75), 0.1, 3);
  const showCurveAp = !!ep.showCurveAp;
  const showCurveI = !!ep.showCurveI;
  const showPoint = !!ep.showPoint;

  const sumTau = tauAp - tauRoz;
  const alpha = alphaFrom(tauAp, tauRoz, I);

  const dataAp = useMemo(() => buildAlphaVsTauAp(tauRoz, I, 0.1), [tauRoz, I]);
  const dataI = useMemo(() => buildAlphaVsI(tauAp, tauRoz, 0.05), [tauAp, tauRoz]);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Ejemplos aplicados: rotacion con rozamiento (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"\\sum\\tau=\\tau_{ap}-\\tau_{roz}"} /> y{" "}
          <MathInline latex={"\\alpha=\\frac{\\tau_{ap}-\\tau_{roz}}{I}"} />.
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
              <span style={{ fontSize: 13, opacity: 0.85 }}>tau_ap (N*m)</span>
              <input className="form-control" style={{ width: 92 }} value={fmt(tauAp, 2).replace(",", ".")} onChange={(e) => setValue("tau_ap", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>tau_roz (N*m)</span>
              <input className="form-control" style={{ width: 92 }} value={fmt(tauRoz, 2).replace(",", ".")} onChange={(e) => setValue("tau_roz", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>I (kg*m²)</span>
              <input className="form-control" style={{ width: 92 }} value={fmt(I, 3).replace(",", ".")} onChange={(e) => setValue("I", e.target.value)} />
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
            <Pill active={showCurveAp} onClick={() => setValue("showCurveAp", !showCurveAp)}>alpha(tau_ap)</Pill>
            <Pill active={showCurveI} onClick={() => setValue("showCurveI", !showCurveI)}>alpha(I)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              Sigma tau = <b>{fmt(sumTau, 4)}</b> N*m | alpha = <b>{fmt(alpha, 4)}</b> rad/s².
              <br />
              Si tau_ap &lt; tau_roz, alpha sale negativa (frenado neto).
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Dependencias principales</div>
        <div className="v2-grid-2" style={{ marginTop: 10, gap: 12 }}>
          <div className="v2-panel" style={{ padding: 10 }}>
            <div style={{ fontWeight: 800, fontSize: 13, opacity: 0.9, marginBottom: 8 }}>alpha en funcion de tau_ap</div>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={dataAp} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="4 4" />
                  <XAxis dataKey="x" type="number" domain={[0, 10]} tickFormatter={(v) => fmt(v, 1)} label={{ value: "tau_ap (N*m)", position: "insideBottomRight", offset: -5 }} />
                  <YAxis tickFormatter={(v) => fmt(v, 1)} label={{ value: "alpha (rad/s²)", angle: -90, position: "insideLeft" }} />
                  <Tooltip formatter={(value, name) => [fmt(value, 5), name]} labelFormatter={(l) => `tau_ap = ${fmt(l, 3)} N*m`} />
                  <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
                  {showCurveAp ? <Line type="monotone" dataKey="y" name="alpha" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
                  {showPoint ? <ReferenceDot x={tauAp} y={alpha} r={5} fill="#22c55e" stroke="none" /> : null}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="v2-panel" style={{ padding: 10 }}>
            <div style={{ fontWeight: 800, fontSize: 13, opacity: 0.9, marginBottom: 8 }}>alpha en funcion de I</div>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={dataI} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="4 4" />
                  <XAxis dataKey="x" type="number" domain={[0.1, 3]} tickFormatter={(v) => fmt(v, 2)} label={{ value: "I (kg*m²)", position: "insideBottomRight", offset: -5 }} />
                  <YAxis tickFormatter={(v) => fmt(v, 1)} label={{ value: "alpha (rad/s²)", angle: -90, position: "insideLeft" }} />
                  <Tooltip formatter={(value, name) => [fmt(value, 5), name]} labelFormatter={(l) => `I = ${fmt(l, 3)} kg*m²`} />
                  <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
                  {showCurveI ? <Line type="monotone" dataKey="y" name="alpha" stroke="#38bdf8" strokeWidth={3} dot={false} /> : null}
                  {showPoint ? <ReferenceDot x={I} y={alpha} r={5} fill="#f97316" stroke="none" /> : null}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
