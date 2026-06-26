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


const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

function buildData({ m, g, muE, muC, fMax, n = 220 }) {
  const out = [];
  const N = m * g;
  const FextCrit = muE * N;

  for (let i = 0; i <= n; i += 1) {
    const F = (fMax * i) / n;
    const aStatic = 0;
    const aDynamic = F > FextCrit ? (F - muC * N) / m : 0;
    out.push({
      F,
      aStatic,
      aDynamic,
    });
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

const graphIdentity = {
  pregunta_principal: {
    es: "Que muestra la curva a(F_ext) sobre el umbral F_ext_crit y el cambio entre reposo posible y deslizamiento con rozamiento",
    en: "What the a(F_ext) curve shows about the threshold F_ext_crit and the change from possible rest to sliding with friction",
  },
  staticThresholdFormula: "F_ext_crit = mu_e N",
};

function AnalisisCompletoGraphsCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-");
  const tt = (es, en) => (uiLang === "en" ? en : es);
  void graphIdentity;

  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, 4) },
      { key: "g", aliases: ["gravedad"], default: toNum(p.g ?? p.gravedad, 9.8) },
      { key: "mu_e", aliases: ["muE", "coefEst", "coef_estatico"], default: toNum(p.mu_e ?? p.muE ?? p.coefEst ?? p.coef_estatico, 0.45) },
      { key: "mu_c", aliases: ["muC", "coefCin", "coef_cinetico"], default: toNum(p.mu_c ?? p.muC ?? p.coefCin ?? p.coef_cinetico, 0.30) },
      { key: "F_ext", aliases: ["F", "fuerza"], default: toNum(p.F_ext ?? p.F ?? p.fuerza, 18) },
      { key: "Fmax", aliases: ["fMax", "fuerzaMax"], default: toNum(p.Fmax ?? p.fMax ?? p.fuerzaMax, 60) },
      { key: "showStatic", aliases: ["mostrarEstatica"], default: p.showStatic ?? true },
      { key: "showDynamic", aliases: ["mostrarDinamica"], default: p.showDynamic ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
      { key: "showRef", aliases: ["mostrarRef"], default: p.showRef ?? true },
    ],
    [
      p.m, p.masa,
      p.g, p.gravedad,
      p.mu_e, p.muE, p.coefEst, p.coef_estatico,
      p.mu_c, p.muC, p.coefCin, p.coef_cinetico,
      p.F_ext, p.F, p.fuerza,
      p.Fmax, p.fMax, p.fuerzaMax,
      p.showStatic, p.showDynamic, p.showPoint, p.showRef,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(toNum(ep.m, 4), 0.1, 50);
  const g = clamp(toNum(ep.g, 9.8), 0.1, 25);
  const muE = clamp(toNum(ep.mu_e, 0.45), 0, 2);
  const muC = clamp(toNum(ep.mu_c, 0.30), 0, 2);
  const N = m * g;
  const FextCrit = muE * N;

  const autoFMax = Math.max(20, FextCrit * 2.2, toNum(ep.F_ext, 18) * 1.5);
  const Fmax = clamp(toNum(ep.Fmax, autoFMax), 10, 300);
  const Fext = clamp(toNum(ep.F_ext, 18), 0, Fmax);

  const showStatic = !!ep.showStatic;
  const showDynamic = !!ep.showDynamic;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const regime = Fext < FextCrit ? "static" : Fext === FextCrit ? "threshold" : "dynamic";
  const aNow = regime === "dynamic" ? (Fext - muC * N) / m : 0;
  const fK = muC * N;

  const data = useMemo(
    () => buildData({ m, g, muE, muC, fMax: Fmax }),
    [m, g, muE, muC, Fmax]
  );

  const setValue = useCallback(
    (k, val) => {
      exp.startExperiment();
      exp.setValue(k, val);
    },
    [exp]
  );

  const currentPoint = [{ F: Fext, a: aNow }];

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">
          {tt("Análisis completo con rozamiento (Coord)", "Complete friction analysis (Coord)")}
        </div>

        <div className="muted" style={{ marginTop: 6, display: "grid", gap: 4 }}>
          <div>
            <MathInline latex={"F_{ext,crit}=\\mu_e N"} />.
          </div>
          <div>
            <MathInline latex={"a=\\frac{F_{ext}-\\mu_c N}{m}"} />.
          </div>
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
              <span style={{ fontSize: 13, opacity: 0.85 }}>m (kg)</span>
              <input
                className="form-control"
                style={{ width: 86 }}
                value={fmt(m, 3).replace(",", ".")}
                onChange={(e) => setValue("m", e.target.value)}
              />
            </div>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>g (m/s²)</span>
              <input
                className="form-control"
                style={{ width: 92 }}
                value={fmt(g, 3).replace(",", ".")}
                onChange={(e) => setValue("g", e.target.value)}
              />
            </div>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>mu_e</span>
              <input
                className="form-control"
                style={{ width: 86 }}
                value={fmt(muE, 3).replace(",", ".")}
                onChange={(e) => setValue("mu_e", e.target.value)}
              />
            </div>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>mu_c</span>
              <input
                className="form-control"
                style={{ width: 86 }}
                value={fmt(muC, 3).replace(",", ".")}
                onChange={(e) => setValue("mu_c", e.target.value)}
              />
            </div>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>F_ext (N)</span>
              <input
                className="form-control"
                style={{ width: 100 }}
                value={fmt(Fext, 2).replace(",", ".")}
                onChange={(e) => setValue("F_ext", e.target.value)}
              />
            </div>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>F_max (N)</span>
              <input
                className="form-control"
                style={{ width: 110 }}
                value={fmt(Fmax, 2).replace(",", ".")}
                onChange={(e) => setValue("Fmax", e.target.value)}
              />
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
              border: "1px solid rgba(2,132,199,0.22)",
              background: "rgba(2,132,199,0.10)",
            }}
          >
            <Pill active={showStatic} onClick={() => setValue("showStatic", !showStatic)}>
              {tt("Zona estática", "Static zone")}
            </Pill>
            <Pill active={showDynamic} onClick={() => setValue("showDynamic", !showDynamic)}>
              {tt("Rama dinámica", "Dynamic branch")}
            </Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>
              {tt("Punto actual", "Current point")}
            </Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>
              {tt("Referencias", "References")}
            </Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.55 }}>
              N = <b>{fmt(N, 3)}</b> N.
              <br />
              F_ext_crit = <b>{fmt(FextCrit, 3)}</b> N.
              <br />
              {tt("Regimen actual", "Current regime")}:{" "}
              <b>
                {regime === "static"
                  ? tt("estático", "static")
                  : regime === "threshold"
                  ? tt("umbral", "threshold")
                  : tt("cinético", "kinetic")}
              </b>
              .
              <br />
              a({fmt(Fext, 2)} N) = <b>{fmt(aNow, 4)}</b> m/s².
              <br />
              mu_c N = <b>{fmt(fK, 3)}</b> N.
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">
          {tt(
            "Aceleración frente a fuerza externa con cambio de régimen",
            "Acceleration versus external force with regime change"
          )}
        </div>

        <div style={{ width: "100%", height: 350, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />

              <XAxis
                dataKey="F"
                type="number"
                domain={[0, Fmax]}
                tickFormatter={(val) => fmt(val, 1)}
                label={{
                  value: "F_ext (N)",
                  position: "insideBottomRight",
                  offset: -5,
                }}
              />

              <YAxis
                tickFormatter={(val) => fmt(val, 2)}
                label={{
                  value: "a (m/s²)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />

              <Tooltip
                formatter={(value, name) => [fmt(value, 5), name]}
                labelFormatter={(val) => `F_ext = ${fmt(val, 3)} N`}
              />

              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showRef ? (
                <ReferenceLine
                  x={FextCrit}
                  stroke="rgba(245,158,11,0.9)"
                  strokeDasharray="4 4"
                  label={{
                    value: "F_ext_crit",
                    position: "top",
                    fill: "rgba(245,158,11,0.95)",
                    fontSize: 12,
                  }}
                />
              ) : null}

              {showStatic ? (
                <Line
                  type="monotone"
                  dataKey="aStatic"
                  name={tt("Reposo posible", "Possible rest")}
                  stroke="#94a3b8"
                  strokeWidth={2}
                  dot={false}
                />
              ) : null}

              {showDynamic ? (
                <Line
                  type="monotone"
                  dataKey="aDynamic"
                  name={tt("Rama cinética", "Kinetic branch")}
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={false}
                />
              ) : null}

              {showPoint ? (
                <ReferenceDot
                  x={Fext}
                  y={aNow}
                  r={6}
                  fill={regime === "dynamic" ? "#22c55e" : "#f59e0b"}
                  stroke="none"
                />
              ) : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

const AnalisisCompletoGraphsCoord = createCoordGraph({
  Component: AnalisisCompletoGraphsCoordView,
  displayName: "AnalisisCompletoGraphsCoord",
});

AnalisisCompletoGraphsCoord.graphContract = AnalisisCompletoGraphsCoordView.graphContract;
AnalisisCompletoGraphsCoord.graph_identity = AnalisisCompletoGraphsCoordView.graph_identity;
AnalisisCompletoGraphsCoord.axes = AnalisisCompletoGraphsCoordView.axes;
AnalisisCompletoGraphsCoord.formula = AnalisisCompletoGraphsCoordView.formula;
AnalisisCompletoGraphsCoord.profile = AnalisisCompletoGraphsCoordView.profile;

export default AnalisisCompletoGraphsCoord;
