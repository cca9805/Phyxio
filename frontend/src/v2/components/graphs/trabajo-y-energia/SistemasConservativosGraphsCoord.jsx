import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

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

export default function SistemasConservativosGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "m", default: toNum(params?.m, 1.5) },
      { key: "g", default: toNum(params?.g, 9.81) },
      { key: "h0", default: toNum(params?.h0, 10) },
      { key: "Wnc", default: toNum(params?.Wnc, 0) },
      { key: "showK", default: params?.showK ?? true },
      { key: "showUg", default: params?.showUg ?? true },
      { key: "showEm", default: params?.showEm ?? true },
      { key: "showRef", default: params?.showRef ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const m = Math.max(0.001, toNum(ep.m, 1.5));
  const g = clamp(Math.abs(toNum(ep.g, 9.81)), 0.1, 40);
  const h0 = Math.max(0, toNum(ep.h0, 10));
  const Wnc = toNum(ep.Wnc, 0);

  const showK = !!ep.showK;
  const showUg = !!ep.showUg;
  const showEm = !!ep.showEm;
  const showRef = !!ep.showRef;

  const Em0 = m * g * h0;
  const Em = Em0 + Wnc;

  const data = useMemo(() => {
    const out = [];
    const nPts = 220;
    for (let i = 0; i <= nPts; i += 1) {
      const s = i / nPts;
      const h = h0 * (1 - s);
      const Ug = m * g * h;
      const K = Em - Ug;
      out.push({ s, Ug, K, Em });
    }
    return out;
  }, [h0, m, g, Em]);

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Sistemas conservativos (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}><MathInline latex={"E_m=K+U_g=\\text{cte}\\; (W_{nc}=0)"} /></div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>m</span><input className="form-control" style={{ width: 88 }} value={m} onChange={(e) => setValue("m", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>g</span><input className="form-control" style={{ width: 88 }} value={g} onChange={(e) => setValue("g", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>h0</span><input className="form-control" style={{ width: 88 }} value={h0} onChange={(e) => setValue("h0", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>Wnc</span><input className="form-control" style={{ width: 88 }} value={Wnc} onChange={(e) => setValue("Wnc", e.target.value)} /></div>
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showK} onClick={() => setValue("showK", !showK)}>K</Pill>
            <Pill active={showUg} onClick={() => setValue("showUg", !showUg)}>Ug</Pill>
            <Pill active={showEm} onClick={() => setValue("showEm", !showEm)}>Em</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>eje y=0</Pill>
            <span style={{ marginLeft: "auto", fontSize: 12, opacity: 0.78 }}>Modo: <b>{exp.mode === "follow" ? "calculadora" : "experimento"}</b></span>
          </div>

          <div className="v2-panel" style={{ marginTop: 10, padding: 10, fontSize: 13 }}>
            Em_inicial=<b>{fmt(Em0, 2)}</b> J | Wnc=<b>{fmt(Wnc, 2)}</b> J | Em_modelada=<b>{fmt(Em, 2)}</b> J
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Criterio conservativo por balance energetico</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="s" tickFormatter={(n) => fmt(n, 2)} label={{ value: "estado normalizado", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 1)} label={{ value: "Energia (J)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} />
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showK ? <Line type="monotone" dataKey="K" name="K" stroke="#60a5fa" strokeWidth={3} dot={false} /> : null}
              {showUg ? <Line type="monotone" dataKey="Ug" name="Ug" stroke="#34d399" strokeWidth={2.6} dot={false} /> : null}
              {showEm ? <Line type="monotone" dataKey="Em" name="Em" stroke="#f59e0b" strokeWidth={2.4} dot={false} /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
