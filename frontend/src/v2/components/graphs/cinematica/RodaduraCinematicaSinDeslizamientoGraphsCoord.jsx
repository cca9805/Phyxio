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
import { sampleRollingRelations, samplePointSpeedsVsOmega } from "@/v2/engine/models/cinematica/rodadura-sin-deslizamiento";

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

export default function RodaduraCinematicaSinDeslizamientoGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "R", aliases: ["r", "radio"], default: toNum(params?.R ?? params?.r ?? params?.radio, 0.35) },
      { key: "alpha", aliases: ["a"], default: toNum(params?.alpha ?? params?.a, 1.2) },
      { key: "omega", aliases: ["w"], default: toNum(params?.omega ?? params?.w, 6) },
      { key: "thetaMax", aliases: ["theta_max"], default: toNum(params?.thetaMax ?? params?.theta_max, Math.PI * 6) },
      { key: "omegaMax", aliases: ["omega_max", "w_max"], default: toNum(params?.omegaMax ?? params?.omega_max ?? params?.w_max, 25) },
      { key: "showX", default: params?.showX ?? true },
      { key: "showAcm", default: params?.showAcm ?? true },
      { key: "showVcm", default: params?.showVcm ?? true },
      { key: "showVtop", default: params?.showVtop ?? true },
      { key: "showPoint", default: params?.showPoint ?? true },
      { key: "showRef", default: params?.showRef ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const R = clamp(toNum(ep.R, 0.35), 0.02, 3);
  const alpha = toNum(ep.alpha, 1.2);
  const omega = clamp(toNum(ep.omega, 6), 0, 200);
  const thetaMax = clamp(toNum(ep.thetaMax, Math.PI * 6), 0.5, Math.PI * 20);
  const omegaMax = clamp(toNum(ep.omegaMax, 25), 0.2, 120);

  const showX = !!ep.showX;
  const showAcm = !!ep.showAcm;
  const showVcm = !!ep.showVcm;
  const showVtop = !!ep.showVtop;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const relData = useMemo(
    () => sampleRollingRelations({ R, alpha, thetaMin: 0, thetaMax, n: 220 }),
    [R, alpha, thetaMax]
  );

  const speedData = useMemo(
    () => samplePointSpeedsVsOmega({ R, omegaMin: 0, omegaMax, n: 220 }),
    [R, omegaMax]
  );

  const thetaObs = clamp(omega, 0, omegaMax) * (thetaMax / Math.max(omegaMax, 1e-9));
  const xObs = R * thetaObs;
  const acmObs = alpha * R;
  const vcmObs = omega * R;
  const vtopObs = 2 * vcmObs;

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Rodadura sin deslizamiento (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"v_{cm}=\\omega R,\\quad x=R\\theta,\\quad a_{cm}=\\alpha R"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>R (m)</span><input className="form-control" style={{ width: 90 }} value={R} onChange={(e) => setValue("R", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>alpha (rad/s2)</span><input className="form-control" style={{ width: 110 }} value={alpha} onChange={(e) => setValue("alpha", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>omega (rad/s)</span><input className="form-control" style={{ width: 110 }} value={omega} onChange={(e) => setValue("omega", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>theta_max</span><input className="form-control" style={{ width: 100 }} value={thetaMax} onChange={(e) => setValue("thetaMax", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>omega_max</span><input className="form-control" style={{ width: 100 }} value={omegaMax} onChange={(e) => setValue("omegaMax", e.target.value)} /></div>
            <button type="button" onClick={exp.resetToCalculator} style={{ marginLeft: "auto", padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>
              Seguir calculadora
            </button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showX} onClick={() => setValue("showX", !showX)}>x(theta)</Pill>
            <Pill active={showAcm} onClick={() => setValue("showAcm", !showAcm)}>a_cm(theta)</Pill>
            <Pill active={showVcm} onClick={() => setValue("showVcm", !showVcm)}>v_cm(omega)</Pill>
            <Pill active={showVtop} onClick={() => setValue("showVtop", !showVtop)}>v_top(omega)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              theta = <b>{fmt(thetaObs, 3)}</b> rad | x = <b>{fmt(xObs, 3)}</b> m | a_cm = <b>{fmt(acmObs, 3)}</b> m/s2 | v_cm = <b>{fmt(vcmObs, 3)}</b> m/s | v_top = <b>{fmt(vtopObs, 3)}</b> m/s
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Relaciones de rodadura</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={relData} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="theta" tickFormatter={(n) => fmt(n, 2)} label={{ value: "theta (rad)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 2)} label={{ value: "Magnitud", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} labelFormatter={(value) => `theta = ${fmt(value, 3)} rad`} />
              {showRef ? <ReferenceLine x={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showX ? <Line type="monotone" dataKey="x" name="x=R*theta" stroke="#60a5fa" strokeWidth={3} dot={false} /> : null}
              {showAcm ? <Line type="monotone" dataKey="acm" name="a_cm=alpha*R" stroke="#34d399" strokeWidth={2.6} dot={false} /> : null}
              {showPoint && showX ? <ReferenceDot x={thetaObs} y={xObs} r={5} fill="#60a5fa" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Velocidades caracteristicas</div>
        <div style={{ width: "100%", height: 320, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={speedData} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="omega" tickFormatter={(n) => fmt(n, 2)} label={{ value: "omega (rad/s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 2)} label={{ value: "v (m/s)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} labelFormatter={(value) => `omega = ${fmt(value, 3)} rad/s`} />
              {showRef ? <ReferenceLine x={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showVcm ? <Line type="monotone" dataKey="vcm" name="v_cm" stroke="#f97316" strokeWidth={2.8} dot={false} /> : null}
              {showVtop ? <Line type="monotone" dataKey="vtop" name="v_top=2*v_cm" stroke="#a78bfa" strokeWidth={2.8} dot={false} /> : null}
              {showPoint && showVcm ? <ReferenceDot x={omega} y={vcmObs} r={5} fill="#f97316" stroke="none" /> : null}
              {showPoint && showVtop ? <ReferenceDot x={omega} y={vtopObs} r={5} fill="#a78bfa" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

