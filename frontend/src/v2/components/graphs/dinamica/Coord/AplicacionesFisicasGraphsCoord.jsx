import React, { useCallback, useMemo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { createCoordGraph } from "@/v2/components/graphs/graphFactories.jsx";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};
const deg2rad = (d) => (Math.PI * d) / 180;

const coriolisAcceleration = (omega, vRel, alphaDeg) =>
  2 * omega * vRel * Math.sin(deg2rad(alphaDeg));

const coriolisForce = (m, aCor) => m * aCor;

const lateralDrift = (aCor, t) => 0.5 * aCor * t * t;

const graph_identity = {
  pregunta_principal: {
    es: "Cuando la aceleracion de Coriolis deja de ser una correccion pequena y pasa a reorganizar trayectorias reales?",
    en: "When does Coriolis acceleration stop being a small correction and start reorganizing real trajectories?",
  },
  magnitud_estrella: "y",
};
void graph_identity;

function buildSeries({ omega, vRel, alpha, m, tMax, step = 0.2 }) {
  const out = [];
  const aCor = coriolisAcceleration(omega, vRel, alpha);
  const fCor = coriolisForce(m, aCor);
  for (let t = 0; t <= tMax + 1e-9; t += step) {
    out.push({
      t,
      y: lateralDrift(aCor, t),
      F_cor: fCor,
      a_cor: aCor,
    });
  }
  return out;
}

function AplicacionesFisicasGraphsCoordComponent(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const decSep = uiLang === "en" ? "." : ",";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-");

  const p = props.params ?? props.sharedParams ?? props.paramsIn ?? {};
  const calc = props.sharedParams?.__calc ?? p.__calc ?? null;
  const schema = useMemo(
    () => [
      { key: "omega", aliases: ["w"], default: toNum(p.omega ?? p.w, 7.292e-5) },
      { key: "v_rel", aliases: ["vRel", "velocidad"], default: toNum(p.v_rel ?? p.vRel ?? p.velocidad, 250) },
      { key: "alpha", aliases: ["angulo"], default: toNum(p.alpha ?? p.angulo, 90) },
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, 1) },
      { key: "t", aliases: ["tiempo"], default: toNum(p.t ?? p.tiempo, 20) },
      { key: "tMax", aliases: ["t_max"], default: toNum(p.tMax ?? p.t_max, 60) },
    ],
    [p.alpha, p.angulo, p.m, p.masa, p.omega, p.t, p.tMax, p.t_max, p.tiempo, p.vRel, p.v_rel, p.velocidad, p.w]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const omega = clamp(toNum(ep.omega, 7.292e-5), 0, 0.01);
  const vRel = clamp(toNum(ep.v_rel, 250), 0, 1200);
  const alpha = clamp(toNum(ep.alpha, 90), 0, 180);
  const m = clamp(toNum(ep.m, 1), 0.01, 1000);
  const t = clamp(toNum(ep.t, 20), 0, 300);
  const tMax = clamp(toNum(ep.tMax, 60), 5, 300);

  const aCor = coriolisAcceleration(omega, vRel, alpha);
  const fCor = coriolisForce(m, aCor);
  const yObs = lateralDrift(aCor, t);
  const data = useMemo(() => buildSeries({ omega, vRel, alpha, m, tMax }), [alpha, m, omega, tMax, vRel]);

  const setValue = useCallback(
    (key, value) => {
      exp.startExperiment();
      exp.setValue(key, value);
    },
    [exp]
  );

  const target = {
    target: "y",
    a_cor: aCor,
    F_cor: fCor,
    t,
    y: yObs,
    omega,
    v_rel: vRel,
    alpha,
    source: "aplicaciones-fisicas",
  };

  React.useEffect(() => {
    props.onGraphStateChange?.(target);
    props.onInterpretationContextChange?.(target);
  }, [aCor, alpha, fCor, omega, props, t, vRel, yObs]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">
          {tt("Aplicaciones de Coriolis: desvio lateral", "Coriolis applications: lateral drift")}
        </div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"a_{cor}=2\\omega v_{rel}\\sin\\alpha,\\quad F_{cor}=m a_{cor},\\quad y\\approx \\frac{1}{2}a_{cor}t^2"} />
        </div>
        <div className="muted" style={{ marginTop: 6 }}>
          {tt(
            "Cuando la aceleracion de Coriolis reorganiza trayectorias reales, el desvio lateral deja de ser una correccion pequena.",
            "When Coriolis acceleration reorganizes real trajectories, lateral drift stops being a minor correction."
          )}
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
            marginTop: 10,
          }}
        >
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>omega</span>
            <input className="form-control" style={{ width: 94 }} value={String(omega)} onChange={(e) => setValue("omega", e.target.value)} />
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>v_rel</span>
            <input className="form-control" style={{ width: 90 }} value={fmt(vRel, 1).replace(",", ".")} onChange={(e) => setValue("v_rel", e.target.value)} />
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>alpha</span>
            <input className="form-control" style={{ width: 86 }} value={fmt(alpha, 1).replace(",", ".")} onChange={(e) => setValue("alpha", e.target.value)} />
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>m</span>
            <input className="form-control" style={{ width: 80 }} value={fmt(m, 2).replace(",", ".")} onChange={(e) => setValue("m", e.target.value)} />
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>t</span>
            <input className="form-control" style={{ width: 80 }} value={fmt(t, 1).replace(",", ".")} onChange={(e) => setValue("t", e.target.value)} />
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

        <div className="v2-panel" style={{ padding: 12, marginTop: 10 }}>
          <div style={{ fontSize: 13, opacity: 0.92, lineHeight: 1.5 }}>
            {tt("Lectura activa", "Active reading")}: <b>a_cor = {fmt(aCor, 6)}</b> m/s^2, <b>F_cor = {fmt(fCor, 6)}</b> N, <b>y = {fmt(yObs, 3)}</b> m.
          </div>
          <div style={{ fontSize: 12, opacity: 0.72, marginTop: 6 }}>
            {calc ? tt("El grafico puede vincularse con resultados de calculadora mediante sharedParams.__calc.", "This graph can be bound to calculator results through sharedParams.__calc.") : tt("Sin resultado calculado previo: el grafico trabaja en modo exploracion.", "No prior calculator result: the graph runs in exploration mode.")}
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">
          {tt("Desvio lateral acumulado", "Accumulated lateral drift")}
        </div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="t"
                type="number"
                domain={[0, tMax]}
                tickFormatter={(value) => fmt(value, 0)}
                label={{ value: "t (s)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                tickFormatter={(value) => fmt(value, 2)}
                label={{ value: "y (m)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 5), name]}
                labelFormatter={(value) => `t = ${fmt(value, 2)} s`}
              />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" />
              <ReferenceLine x={t} stroke="#94a3b8" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="y" name="y(t)" stroke="#3b82f6" strokeWidth={3} dot={false} />
              <ReferenceDot x={t} y={yObs} r={6} fill="#f97316" stroke="none" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default createCoordGraph({
  Component: AplicacionesFisicasGraphsCoordComponent,
  displayName: "AplicacionesFisicasGraphsCoord",
});
