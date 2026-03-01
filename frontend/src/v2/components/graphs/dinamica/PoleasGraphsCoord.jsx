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

const pNeeded = (R, n, eta) => R / (n * eta);
const vm = (n, eta) => n * eta;

function buildSeries(R, eta, nMax = 8) {
  const out = [];
  for (let n = 1; n <= nMax; n += 1) {
    out.push({ n, P: pNeeded(R, n, eta), VM: vm(n, eta) });
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

export default function PoleasGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "R", aliases: ["carga"], default: toNum(p.R ?? p.carga, 600) },
      { key: "n", aliases: ["tramos"], default: toNum(p.n ?? p.tramos, 3) },
      { key: "eta", aliases: ["eficiencia"], default: toNum(p.eta ?? p.eficiencia, 0.85) },
      { key: "nMax", aliases: ["n_max"], default: toNum(p.nMax ?? p.n_max, 8) },
      { key: "showP", aliases: ["mostrarP"], default: p.showP ?? true },
      { key: "showVM", aliases: ["mostrarVM"], default: p.showVM ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
      { key: "showRef", aliases: ["mostrarRef"], default: p.showRef ?? true },
    ],
    [p.R, p.carga, p.n, p.tramos, p.eta, p.eficiencia, p.nMax, p.n_max, p.showP, p.showVM, p.showPoint, p.showRef]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const R = clamp(toNum(ep.R, 600), 1, 200000);
  const nMax = Math.round(clamp(toNum(ep.nMax, 8), 2, 12));
  const n = Math.round(clamp(toNum(ep.n, 3), 1, nMax));
  const eta = clamp(toNum(ep.eta, 0.85), 0.2, 1);
  const showP = !!ep.showP;
  const showVM = !!ep.showVM;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const P = pNeeded(R, n, eta);
  const VM = vm(n, eta);
  const T = P;

  const data = useMemo(() => buildSeries(R, eta, nMax), [R, eta, nMax]);
  const fmt = (x, d = 3) => (Number.isFinite(x) ? x.toFixed(d).replace(".", ",") : "-");

  const setValue = useCallback((k, v0) => {
    exp.startExperiment();
    exp.setValue(k, v0);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Poleas (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"P=\\frac{R}{n\\eta},\\quad VM=\\frac{R}{P}=n\\eta,\\quad s_P=n\\,s_R"} />.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>R</span><input className="form-control" style={{ width: 90 }} value={fmt(R, 2).replace(",", ".")} onChange={(e) => setValue("R", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>n</span><input className="form-control" style={{ width: 90 }} value={String(n)} onChange={(e) => setValue("n", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>eta</span><input className="form-control" style={{ width: 90 }} value={fmt(eta, 3).replace(",", ".")} onChange={(e) => setValue("eta", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>n_max</span><input className="form-control" style={{ width: 90 }} value={String(nMax)} onChange={(e) => setValue("nMax", e.target.value)} /></div>

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
            <Pill active={showP} onClick={() => setValue("showP", !showP)}>P(n)</Pill>
            <Pill active={showVM} onClick={() => setValue("showVM", !showVM)}>VM(n)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              P necesaria = <b>{fmt(P, 4)}</b> N | VM = <b>{fmt(VM, 4)}</b> | T por tramo = <b>{fmt(T, 4)}</b> N.
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Efecto del numero de tramos de cuerda</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="n" type="number" domain={[1, nMax]} allowDecimals={false} label={{ value: "n (tramos)", position: "insideBottomRight", offset: -5 }} />
              <YAxis yAxisId="left" tickFormatter={(v0) => fmt(v0, 1)} label={{ value: "P (N)", angle: -90, position: "insideLeft" }} />
              <YAxis yAxisId="right" orientation="right" tickFormatter={(v0) => fmt(v0, 2)} label={{ value: "VM", angle: -90, position: "insideRight" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 5), name]} labelFormatter={(x) => `n = ${fmt(x, 0)}`} />
              {showRef ? <ReferenceLine yAxisId="left" y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showP ? <Line yAxisId="left" type="monotone" dataKey="P" name="P requerida" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showVM ? <Line yAxisId="right" type="monotone" dataKey="VM" name="VM" stroke="#f97316" strokeWidth={3} dot={false} /> : null}
              {showPoint && showP ? <ReferenceDot yAxisId="left" x={n} y={P} r={6} fill="#22c55e" stroke="none" /> : null}
              {showPoint && showVM ? <ReferenceDot yAxisId="right" x={n} y={VM} r={6} fill="#fb923c" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
