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

export default function RozamientoYDisipacionGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "m", default: toNum(params?.m, 5) },
      { key: "mu", default: toNum(params?.mu, 0.25) },
      { key: "g", default: toNum(params?.g, 9.81) },
      { key: "d", default: toNum(params?.d, 12) },
      { key: "showWr", default: params?.showWr ?? true },
      { key: "showEdis", default: params?.showEdis ?? true },
      { key: "showRef", default: params?.showRef ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const m = Math.max(0.001, toNum(ep.m, 5));
  const mu = clamp(Math.abs(toNum(ep.mu, 0.25)), 0, 2);
  const g = clamp(Math.abs(toNum(ep.g, 9.81)), 0.1, 40);
  const d = Math.max(0.001, toNum(ep.d, 12));
  const showWr = !!ep.showWr;
  const showEdis = !!ep.showEdis;
  const showRef = !!ep.showRef;

  const fr = mu * m * g;
  const WrTotal = -fr * d;
  const EdisTotal = -WrTotal;

  const data = useMemo(() => {
    const out = [];
    const nPts = 200;
    for (let i = 0; i <= nPts; i += 1) {
      const x = (d * i) / nPts;
      const Wr = -fr * x;
      const Edis = -Wr;
      out.push({ x, Wr, Edis });
    }
    return out;
  }, [d, fr]);

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Rozamiento y disipacion (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"f_r=\\mu N,\\quad W_r=-f_r d,\\quad E_{dis}=-W_r"} />
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
              <span style={{ fontSize: 13, opacity: 0.85 }}>m</span>
              <input className="form-control" style={{ width: 88 }} value={m} onChange={(e) => setValue("m", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>mu</span>
              <input className="form-control" style={{ width: 88 }} value={mu} onChange={(e) => setValue("mu", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>g</span>
              <input className="form-control" style={{ width: 88 }} value={g} onChange={(e) => setValue("g", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>d</span>
              <input className="form-control" style={{ width: 88 }} value={d} onChange={(e) => setValue("d", e.target.value)} />
            </div>
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>
              Experimentar
            </button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>
              Seguir calculadora
            </button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showWr} onClick={() => setValue("showWr", !showWr)}>Trabajo Wr</Pill>
            <Pill active={showEdis} onClick={() => setValue("showEdis", !showEdis)}>Energia disipada</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>eje y=0</Pill>
            <span style={{ marginLeft: "auto", fontSize: 12, opacity: 0.78 }}>Modo: <b>{exp.mode === "follow" ? "calculadora" : "experimento"}</b></span>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            fr=<b>{fmt(fr, 2)}</b> N | Wr(d)=<b>{fmt(WrTotal, 2)}</b> J | Edis=<b>{fmt(EdisTotal, 2)}</b> J
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Trabajo y disipacion a lo largo del recorrido</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="x" tickFormatter={(n) => fmt(n, 2)} label={{ value: "desplazamiento d (m)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 1)} label={{ value: "Energia / Trabajo (J)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 3), name]} />
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showWr ? <Line type="monotone" dataKey="Wr" name="W_r" stroke="#ef4444" strokeWidth={3} dot={false} /> : null}
              {showEdis ? <Line type="monotone" dataKey="Edis" name="E_dis" stroke="#22c55e" strokeWidth={3} dot={false} /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
