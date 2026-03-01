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
  ReferenceDot,
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

export default function EncuentrosYPersecucionesGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "xA0", aliases: ["x0A"], default: toNum(params?.xA0 ?? params?.x0A, 0) },
      { key: "xB0", aliases: ["x0B"], default: toNum(params?.xB0 ?? params?.x0B, 60) },
      { key: "vA", aliases: ["va"], default: toNum(params?.vA ?? params?.va, 12) },
      { key: "vB", aliases: ["vb"], default: toNum(params?.vB ?? params?.vb, -8) },
      { key: "modeCase", aliases: ["caso"], default: params?.modeCase ?? params?.caso ?? "encuentro" },
      { key: "tMax", aliases: ["tmax"], default: toNum(params?.tMax ?? params?.tmax, 12) },
      { key: "tObs", aliases: ["t"], default: toNum(params?.tObs ?? params?.t, 3) },
      { key: "showA", default: params?.showA ?? true },
      { key: "showB", default: params?.showB ?? true },
      { key: "showDist", default: params?.showDist ?? true },
      { key: "showPoint", default: params?.showPoint ?? true },
      { key: "showRef", default: params?.showRef ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const xA0 = toNum(ep.xA0, 0);
  const modeCase = String(ep.modeCase || "encuentro").toLowerCase().includes("per") ? "persecucion" : "encuentro";
  const xB0 = toNum(ep.xB0, modeCase === "encuentro" ? 60 : 26);
  const vA = toNum(ep.vA, modeCase === "encuentro" ? 12 : 14);
  const vB = toNum(ep.vB, modeCase === "encuentro" ? -8 : 6);
  const tMax = clamp(toNum(ep.tMax, 12), 0.5, 120);
  const tObs = clamp(toNum(ep.tObs, tMax * 0.3), 0, tMax);

  const showA = !!ep.showA;
  const showB = !!ep.showB;
  const showDist = !!ep.showDist;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const data = useMemo(() => {
    const out = [];
    const N = 260;
    for (let i = 0; i <= N; i += 1) {
      const t = (i / N) * tMax;
      const xA = xA0 + vA * t;
      const xB = xB0 + vB * t;
      out.push({ t, xA, xB, d: xB - xA });
    }
    return out;
  }, [xA0, xB0, vA, vB, tMax]);

  const xAObs = xA0 + vA * tObs;
  const xBObs = xB0 + vB * tObs;
  const dObs = xBObs - xAObs;

  const relSpeed = vA - vB;
  const tMeet = Math.abs(relSpeed) > 1e-9 ? (xB0 - xA0) / relSpeed : null;
  const meetsInWindow = tMeet !== null && tMeet >= 0 && tMeet <= tMax;

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };
  const applyCasePreset = (nextCase) => {
    exp.startExperiment();
    if (nextCase === "encuentro") {
      exp.setValue("modeCase", "encuentro");
      exp.setValue("xA0", -10);
      exp.setValue("xB0", 70);
      exp.setValue("vA", 12);
      exp.setValue("vB", -8);
      exp.setValue("tObs", 3);
      return;
    }
    exp.setValue("modeCase", "persecucion");
    exp.setValue("xA0", 0);
    exp.setValue("xB0", 26);
    exp.setValue("vA", 14);
    exp.setValue("vB", 6);
    exp.setValue("tObs", 3);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Encuentros y persecuciones (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"x_A=x_{A0}+v_A t,\\quad x_B=x_{B0}+v_B t,\\quad t_{enc}=\\frac{x_{B0}-x_{A0}}{v_A-v_B}"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <Pill active={modeCase === "encuentro"} onClick={() => applyCasePreset("encuentro")}>Encuentro (sentidos contrarios)</Pill>
            <Pill active={modeCase === "persecucion"} onClick={() => applyCasePreset("persecucion")}>Persecucion (mismo sentido)</Pill>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>xA0</span><input className="form-control" style={{ width: 90 }} value={xA0} onChange={(e) => setValue("xA0", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>xB0</span><input className="form-control" style={{ width: 90 }} value={xB0} onChange={(e) => setValue("xB0", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>vA</span><input className="form-control" style={{ width: 90 }} value={vA} onChange={(e) => setValue("vA", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>vB</span><input className="form-control" style={{ width: 90 }} value={vB} onChange={(e) => setValue("vB", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>t_max</span><input className="form-control" style={{ width: 90 }} value={tMax} onChange={(e) => setValue("tMax", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>t_obs</span><input className="form-control" style={{ width: 90 }} value={tObs} onChange={(e) => setValue("tObs", e.target.value)} /></div>
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showA} onClick={() => setValue("showA", !showA)}>xA(t)</Pill>
            <Pill active={showB} onClick={() => setValue("showB", !showB)}>xB(t)</Pill>
            <Pill active={showDist} onClick={() => setValue("showDist", !showDist)}>d(t)=xB-xA</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
            <span style={{ marginLeft: "auto", fontSize: 12, opacity: 0.78 }}>Modo: <b>{exp.mode === "follow" ? "calculadora" : "experimento"}</b></span>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              caso = <b>{modeCase === "encuentro" ? "encuentro (opuestos)" : "persecucion (mismo sentido)"}</b> |
              {" "}
              t_obs = <b>{fmt(tObs, 2)}</b> s | xA = <b>{fmt(xAObs, 3)}</b> m | xB = <b>{fmt(xBObs, 3)}</b> m | d = <b>{fmt(dObs, 3)}</b> m | t_enc = <b>{tMeet !== null ? fmt(tMeet, 3) : "-"}</b> s {meetsInWindow ? "(en ventana)" : ""}
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Evolucion temporal del encuentro</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="t" tickFormatter={(n) => fmt(n, 1)} label={{ value: "t (s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 1)} label={{ value: "x / d (m)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} labelFormatter={(value) => `t = ${fmt(value, 3)} s`} />
              {showRef ? <ReferenceLine x={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showA ? <Line type="monotone" dataKey="xA" name="xA" stroke="#60a5fa" strokeWidth={3} dot={false} /> : null}
              {showB ? <Line type="monotone" dataKey="xB" name="xB" stroke="#34d399" strokeWidth={2.6} dot={false} /> : null}
              {showDist ? <Line type="monotone" dataKey="d" name="d=xB-xA" stroke="#f97316" strokeWidth={2.6} dot={false} /> : null}
              {showPoint && showA ? <ReferenceDot x={tObs} y={xAObs} r={5} fill="#60a5fa" stroke="none" /> : null}
              {showPoint && showB ? <ReferenceDot x={tObs} y={xBObs} r={5} fill="#34d399" stroke="none" /> : null}
              {showPoint && showDist ? <ReferenceDot x={tObs} y={dObs} r={5} fill="#f97316" stroke="none" /> : null}
              {tMeet !== null && tMeet >= 0 && tMeet <= tMax ? <ReferenceLine x={tMeet} stroke="#eab308" strokeDasharray="6 6" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
