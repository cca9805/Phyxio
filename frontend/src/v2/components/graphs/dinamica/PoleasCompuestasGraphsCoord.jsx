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

function buildData(W, nMax, eta) {
  const out = [];
  for (let n = 1; n <= nMax; n += 1) {
    out.push({ n, F_ideal: W / n, F_real: W / (eta * n) });
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

function PoleasCompuestasGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "W", aliases: ["peso"], default: toNum(p.W ?? p.peso, 800) },
      { key: "n", aliases: ["tramos"], default: toNum(p.n ?? p.tramos, 4) },
      { key: "dx_load", aliases: ["dxLoad", "h"], default: toNum(p.dx_load ?? p.dxLoad ?? p.h, 0.3) },
      { key: "eta", aliases: ["rendimiento", "eficiencia"], default: toNum(p.eta ?? p.rendimiento ?? p.eficiencia, 1) },
      { key: "nMax", aliases: ["n_max"], default: toNum(p.nMax ?? p.n_max, 10) },
      { key: "showCurve", aliases: ["mostrarCurva"], default: p.showCurve ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
      { key: "showRef", aliases: ["mostrarRef"], default: p.showRef ?? true },
    ],
    [p.W, p.peso, p.n, p.tramos, p.dx_load, p.dxLoad, p.h, p.eta, p.rendimiento, p.eficiencia, p.nMax, p.n_max, p.showCurve, p.showPoint, p.showRef]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const W = clamp(toNum(ep.W, 800), 1, 20000);
  const n = clamp(Math.round(toNum(ep.n, 4)), 1, 20);
  const dxLoad = clamp(toNum(ep.dx_load, 0.3), 0, 20);
  const eta = clamp(toNum(ep.eta, 1), 0.1, 1);
  const nMax = clamp(Math.round(toNum(ep.nMax, 10)), 2, 20);
  const nSel = clamp(n, 1, nMax);
  const showCurve = !!ep.showCurve;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const Fideal = W / nSel;
  const Freal = W / (eta * nSel);
  const dxPull = nSel * dxLoad;
  const data = useMemo(() => buildData(W, nMax, eta), [W, nMax, eta]);

  const fmt = (x, d = 3) => (Number.isFinite(x) ? x.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback(
    (k, v) => {
      exp.startExperiment();
      exp.setValue(k, v);
    },
    [exp]
  );

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Poleas compuestas (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"F=\\frac{W}{n},\\quad F_{real}=\\frac{W}{\\eta n},\\quad \\Delta x_{pull}=n\\,\\Delta x_{load}"} />.
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
              <span style={{ fontSize: 13, opacity: 0.85 }}>W</span>
              <input className="form-control" style={{ width: 100 }} value={fmt(W, 2).replace(",", ".")} onChange={(e) => setValue("W", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>n</span>
              <input className="form-control" style={{ width: 80 }} value={String(nSel)} onChange={(e) => setValue("n", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>eta</span>
              <input className="form-control" style={{ width: 80 }} value={fmt(eta, 3).replace(",", ".")} onChange={(e) => setValue("eta", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>dx_load</span>
              <input className="form-control" style={{ width: 95 }} value={fmt(dxLoad, 3).replace(",", ".")} onChange={(e) => setValue("dx_load", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>n_max</span>
              <input className="form-control" style={{ width: 82 }} value={String(nMax)} onChange={(e) => setValue("nMax", e.target.value)} />
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
            <Pill active={showCurve} onClick={() => setValue("showCurve", !showCurve)}>
              Curvas
            </Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>
              Puntos
            </Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>
              Referencias
            </Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              F_ideal = <b>{fmt(Fideal, 4)}</b> N | F_real = <b>{fmt(Freal, 4)}</b> N | dx_pull = <b>{fmt(dxPull, 4)}</b> m.
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Fuerza necesaria en funcion de n</div>
        <div style={{ width: "100%", height: 350, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="n" type="number" domain={[1, nMax]} tickFormatter={(v) => String(Math.round(v))} label={{ value: "n", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(v) => fmt(v, 2)} label={{ value: "F (N)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 5), name]} labelFormatter={(v) => `n = ${Math.round(v)}`} />
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showCurve ? <Line type="monotone" dataKey="F_ideal" name="F_ideal(n)" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showCurve ? <Line type="monotone" dataKey="F_real" name="F_real(n)" stroke="#f97316" strokeWidth={3} dot={false} /> : null}
              {showPoint ? <ReferenceDot x={nSel} y={Fideal} r={6} fill="#22c55e" stroke="none" /> : null}
              {showPoint ? <ReferenceDot x={nSel} y={Freal} r={6} fill="#f59e0b" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export { PoleasCompuestasGraphsCoord };
export default PoleasCompuestasGraphsCoord;
