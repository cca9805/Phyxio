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

export default function TrabajoDeFuerzasNoConservativasGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "Emi", default: toNum(params?.Emi, 380) },
      { key: "Wnc", default: toNum(params?.Wnc, -120) },
      { key: "d", default: toNum(params?.d, 10) },
      { key: "showEm", default: params?.showEm ?? true },
      { key: "showWncAcc", default: params?.showWncAcc ?? true },
      { key: "showRef", default: params?.showRef ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const Emi = toNum(ep.Emi, 380);
  const Wnc = toNum(ep.Wnc, -120);
  const d = Math.max(0.001, toNum(ep.d, 10));
  const showEm = !!ep.showEm;
  const showWncAcc = !!ep.showWncAcc;
  const showRef = !!ep.showRef;

  const Emf = Emi + Wnc;

  const data = useMemo(() => {
    const out = [];
    const nPts = 180;
    for (let i = 0; i <= nPts; i += 1) {
      const x = (d * i) / nPts;
      const frac = x / d;
      out.push({
        x,
        Em: Emi + Wnc * frac,
        WncAcc: Wnc * frac,
      });
    }
    return out;
  }, [d, Emi, Wnc]);

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Trabajo de fuerzas no conservativas (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"W_{nc}=\\Delta E_m=E_{m,f}-E_{m,i},\\quad E_{m,f}=E_{m,i}+W_{nc}"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>Em inicial</span><input className="form-control" style={{ width: 100 }} value={Emi} onChange={(e) => setValue("Emi", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>Wnc</span><input className="form-control" style={{ width: 100 }} value={Wnc} onChange={(e) => setValue("Wnc", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>d</span><input className="form-control" style={{ width: 90 }} value={d} onChange={(e) => setValue("d", e.target.value)} /></div>
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showEm} onClick={() => setValue("showEm", !showEm)}>E_m</Pill>
            <Pill active={showWncAcc} onClick={() => setValue("showWncAcc", !showWncAcc)}>W_nc acumulado</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>eje y=0</Pill>
            <span style={{ marginLeft: "auto", fontSize: 12, opacity: 0.78 }}>Modo: <b>{exp.mode === "follow" ? "calculadora" : "experimento"}</b></span>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            Emi=<b>{fmt(Emi, 2)}</b> J | Wnc=<b>{fmt(Wnc, 2)}</b> J | Emf=<b>{fmt(Emf, 2)}</b> J
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Evolucion energetica con trabajo no conservativo</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="x" tickFormatter={(n) => fmt(n, 2)} label={{ value: "recorrido (m)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 1)} label={{ value: "Energia / Trabajo (J)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 3), name]} />
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showEm ? <Line type="monotone" dataKey="Em" name="E_m" stroke="#60a5fa" strokeWidth={3} dot={false} /> : null}
              {showWncAcc ? <Line type="monotone" dataKey="WncAcc" name="W_nc acumulado" stroke="#f59e0b" strokeWidth={2.8} dot={false} /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
