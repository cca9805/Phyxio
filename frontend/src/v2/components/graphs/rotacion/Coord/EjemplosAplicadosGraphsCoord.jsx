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
import { createCoordGraph } from "../../graphFactories.jsx";


const graphProfile = {
  pregunta_principal: {
    es: "Como decidir con omega y torque disipativo si el frenado rotacional responde mejor a rozamiento seco, viscoso o mixto?",
    en: "How can omega and dissipative torque show whether rotational braking is better explained by dry, viscous, or mixed friction?",
  },
};

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
        background: active ? "rgba(14,165,233,0.22)" : "rgba(0,0,0,0.35)",
        color: "rgba(255,255,255,0.9)",
        fontWeight: 900,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

function buildOmegaCurves({ omega0, tauDry, bRot, I, tMax, step = 0.1 }) {
  const out = [];
  for (let t = 0; t <= tMax + 1e-9; t += step) {
    const omegaDry = Math.max(omega0 - (tauDry / I) * t, 0);
    const omegaVisc = Math.max(omega0 * Math.exp((-bRot * t) / I), 0);
    const tauVisc = -bRot * omegaVisc;
    out.push({ t, omegaDry, omegaVisc, tauDry: -tauDry, tauVisc });
  }
  return out;
}

function EjemplosAplicadosGraphsCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-");
  const tt = (es, en) => (uiLang === "en" ? en : es);

  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "omega0", aliases: ["omega_0"], default: pickNum(p, ["omega0", "omega_0"], 140) },
      { key: "tauDry", aliases: ["tau_dry", "tau_roz"], default: pickNum(p, ["tauDry", "tau_dry", "tau_roz"], 10.4) },
      { key: "bRot", aliases: ["b_rot", "bRot"], default: pickNum(p, ["bRot", "b_rot"], 0.07) },
      { key: "I", aliases: ["inercia"], default: pickNum(p, ["I", "inercia"], 0.62) },
      { key: "tObs", aliases: ["t", "t_obs"], default: pickNum(p, ["tObs", "t", "t_obs"], 3) },
      { key: "tMax", aliases: ["t_max"], default: pickNum(p, ["tMax", "t_max"], 6) },
      { key: "showDry", aliases: ["showDry"], default: p.showDry ?? true },
      { key: "showVisc", aliases: ["showVisc"], default: p.showVisc ?? true },
      { key: "showTau", aliases: ["showTau"], default: p.showTau ?? true },
    ],
    [
      pickNum(p, ["omega0", "omega_0"], 140),
      pickNum(p, ["tauDry", "tau_dry", "tau_roz"], 10.4),
      pickNum(p, ["bRot", "b_rot"], 0.07),
      pickNum(p, ["I", "inercia"], 0.62),
      pickNum(p, ["tObs", "t", "t_obs"], 3),
      pickNum(p, ["tMax", "t_max"], 6),
      p.showDry,
      p.showVisc,
      p.showTau,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const omega0 = clamp(toNum(ep.omega0, 140), 1, 300);
  const tauDry = clamp(toNum(ep.tauDry, 10.4), 0.1, 30);
  const bRot = clamp(toNum(ep.bRot, 0.07), 0.001, 1);
  const I = clamp(toNum(ep.I, 0.62), 0.05, 5);
  const tMax = clamp(toNum(ep.tMax, 6), 1, 12);
  const tObs = clamp(toNum(ep.tObs, 3), 0, tMax);
  const showDry = !!ep.showDry;
  const showVisc = !!ep.showVisc;
  const showTau = !!ep.showTau;

  const data = useMemo(() => buildOmegaCurves({ omega0, tauDry, bRot, I, tMax, step: 0.1 }), [omega0, tauDry, bRot, I, tMax]);
  const current = useMemo(() => buildOmegaCurves({ omega0, tauDry, bRot, I, tMax: tObs, step: Math.max(tObs, 0.1) })[1] ?? data[0], [omega0, tauDry, bRot, I, tObs, data]);

  const setValue = useCallback((k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  }, [exp]);

  const drySlope = -tauDry / I;
  const viscRate = bRot / I;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">
          {tt("Comparar omega(t): rozamiento seco vs viscoso", "Compare omega(t): dry vs viscous friction")}
        </div>
        <div className="muted" style={{ marginTop: 6, lineHeight: 1.45 }}>
          {tt(
            "Este Coord responde a la pregunta fisica central: decidir si el frenado rotacional se explica mejor con torque disipativo seco, viscoso o mixto a partir de omega(t).",
            "This Coord answers the central physical question: decide whether rotational braking is better explained by dry, viscous, or mixed dissipative torque using omega(t)."
          )}
        </div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"\\tau_{seco}\\approx -\\mathrm{cte}"} /> {" | "}
          <MathInline latex={"\\tau_{visc}=-b_{rot}\\,\\omega"} /> {" | "}
          <MathInline latex={"\\omega(t)=\\omega_0 e^{-b_{rot}t/I}"} />
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
              border: "1px solid rgba(2,132,199,0.22)",
              background: "rgba(2,132,199,0.1)",
            }}
          >
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>omega0 (rad/s)</span>
              <input className="form-control" style={{ width: 90 }} value={fmt(omega0, 1).replace(",", ".")} onChange={(e) => setValue("omega0", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>tauDry (N*m)</span>
              <input className="form-control" style={{ width: 90 }} value={fmt(tauDry, 2).replace(",", ".")} onChange={(e) => setValue("tauDry", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>bRot (N*m*s)</span>
              <input className="form-control" style={{ width: 90 }} value={fmt(bRot, 3).replace(",", ".")} onChange={(e) => setValue("bRot", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>I (kg*m^2)</span>
              <input className="form-control" style={{ width: 90 }} value={fmt(I, 3).replace(",", ".")} onChange={(e) => setValue("I", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>tObs (s)</span>
              <input className="form-control" style={{ width: 80 }} value={fmt(tObs, 2).replace(",", ".")} onChange={(e) => setValue("tObs", e.target.value)} />
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
              {tt("Seguir calculadora", "Follow calculator")}
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
              border: "1px solid rgba(59,130,246,0.2)",
              background: "rgba(59,130,246,0.08)",
            }}
          >
            <Pill active={showDry} onClick={() => setValue("showDry", !showDry)}>{tt("Curva seca", "Dry curve")}</Pill>
            <Pill active={showVisc} onClick={() => setValue("showVisc", !showVisc)}>{tt("Curva viscosa", "Viscous curve")}</Pill>
            <Pill active={showTau} onClick={() => setValue("showTau", !showTau)}>{tt("Torque vs omega", "Torque vs omega")}</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12, fontSize: 13, lineHeight: 1.5, opacity: 0.92 }}>
            {tt("Pendiente seca local", "Dry local slope")} <b>{fmt(drySlope, 3)}</b> rad/s^2. {" "}
            {tt("Tasa viscosa b/I", "Viscous rate b/I")} <b>{fmt(viscRate, 3)}</b> s^-1. {" "}
            {tt(
              "Si la curva medida de omega se parece mas a la recta seca, domina el contacto seco; si se parece mas a la caida exponencial, domina el termino viscoso; si cambia de una a otra, el regimen es mixto.",
              "If the measured omega curve looks closer to the dry straight line, dry contact dominates; if it looks closer to the exponential decay, the viscous term dominates; if it shifts from one to the other, the regime is mixed."
            )}
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{tt("Lectura temporal de omega", "Temporal reading of omega")}</div>
        <div style={{ width: "100%", height: 320, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="t" type="number" domain={[0, tMax]} tickFormatter={(v) => fmt(v, 1)} label={{ value: "t (s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(v) => fmt(v, 1)} label={{ value: "omega (rad/s)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} labelFormatter={(l) => `t = ${fmt(l, 2)} s`} />
              <ReferenceLine x={tObs} stroke="rgba(255,255,255,0.25)" />
              {showDry ? <Line type="monotone" dataKey="omegaDry" name={tt("omega seco", "dry omega")} stroke="#f97316" strokeWidth={3} dot={false} /> : null}
              {showVisc ? <Line type="monotone" dataKey="omegaVisc" name={tt("omega viscoso", "viscous omega")} stroke="#38bdf8" strokeWidth={3} dot={false} /> : null}
              {showDry ? <ReferenceDot x={tObs} y={current.omegaDry} r={5} fill="#f97316" stroke="none" /> : null}
              {showVisc ? <ReferenceDot x={tObs} y={current.omegaVisc} r={5} fill="#38bdf8" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {showTau ? (
        <div className="v2-card" style={{ padding: 12 }}>
          <div className="v2-card-title">{tt("Torque disipativo frente a omega", "Dissipative torque versus omega")}</div>
          <div style={{ width: "100%", height: 300, marginTop: 10 }}>
            <ResponsiveContainer>
              <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
                <CartesianGrid strokeDasharray="4 4" />
                <XAxis dataKey="omegaVisc" type="number" domain={[0, omega0]} tickFormatter={(v) => fmt(v, 1)} label={{ value: "omega (rad/s)", position: "insideBottomRight", offset: -5 }} />
                <YAxis tickFormatter={(v) => fmt(v, 2)} label={{ value: "tau_roz (N*m)", angle: -90, position: "insideLeft" }} />
                <Tooltip formatter={(value, name) => [fmt(value, 4), name]} />
                <ReferenceLine y={-tauDry} stroke="rgba(255,255,255,0.25)" />
                <Line type="monotone" dataKey="tauVisc" name={tt("torque_viscoso", "torque_viscoso")} stroke="#0ea5e9" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : null}
    </div>
  );
}

const EjemplosAplicadosGraphsCoord = createCoordGraph({
  Component: EjemplosAplicadosGraphsCoordView,
  displayName: "EjemplosAplicadosGraphsCoord",
});

EjemplosAplicadosGraphsCoord.graphContract = EjemplosAplicadosGraphsCoordView.graphContract;
EjemplosAplicadosGraphsCoord.graph_identity = EjemplosAplicadosGraphsCoordView.graph_identity;
EjemplosAplicadosGraphsCoord.axes = EjemplosAplicadosGraphsCoordView.axes;
EjemplosAplicadosGraphsCoord.formula = EjemplosAplicadosGraphsCoordView.formula;
EjemplosAplicadosGraphsCoord.profile = EjemplosAplicadosGraphsCoordView.profile;

export default EjemplosAplicadosGraphsCoord;
