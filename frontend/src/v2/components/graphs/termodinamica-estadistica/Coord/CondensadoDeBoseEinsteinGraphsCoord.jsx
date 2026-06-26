import React, { useMemo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";
import { createCoordGraph } from "../../graphFactories.jsx";

const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo varía la fracción condensada de bosones con la temperatura relativa a la temperatura crítica?",
    en: "How does the condensed fraction of bosons vary with temperature relative to the critical temperature?",
  },
  variable_control: "temperatura",
  magnitud_estrella: "fraccion_condensada",
  formula: "f₀ = 1 − (T/Tc)^(3/2)",
  target_interpretable: true,
};

const axes = {
  x: { key: "x", label: { es: "T / Tc", en: "T / Tc" } },
  y: { key: "f", label: { es: "Fracción condensada f₀", en: "Condensed fraction f₀" } },
};

const formula = {
  latex: "f_0 = 1 - \\left(\\frac{T}{T_c}\\right)^{3/2}",
  slopeLatex: "-\\frac{3}{2}\\left(\\frac{T}{T_c}\\right)^{1/2}\\frac{1}{T_c}",
  slopeMeaning: {
    es: "La fracción condensada decrece al aumentar T/Tc y se anula en T = Tc.",
    en: "The condensed fraction decreases as T/Tc increases and vanishes at T = Tc.",
  },
};

const profile = {
  graph_identity,
  axes,
  formula,
  relation: {
    es: "La fracción condensada disminuye según (1 − (T/Tc)^(3/2)) y se anula al alcanzar la temperatura crítica.",
    en: "The condensed fraction decreases as (1 − (T/Tc)^(3/2)) and vanishes when temperature reaches the critical threshold.",
  },
  physicalReading: {
    es: "Cerca de T = 0 casi todos los bosones están en el estado fundamental; a medida que T se acerca a Tc, la fracción condensada cae hacia cero.",
    en: "Near T = 0 almost all bosons occupy the ground state; as T approaches Tc the condensed fraction falls to zero.",
  },
  domainMeaning: {
    es: "Válido para T ≤ Tc en el modelo de gas ideal de bosones no relativistas en equilibrio.",
    en: "Valid for T ≤ Tc in the ideal nonrelativistic boson gas model in equilibrium.",
  },
};

const buildSeries = ({ steps = 200 }) => {
  const out = [];
  for (let i = 0; i <= steps; i += 1) {
    const x = i / steps;
    const f = Math.max(0, 1 - Math.pow(x, 1.5));
    out.push({ x: parseFloat(x.toFixed(4)), f: parseFloat(f.toFixed(6)) });
  }
  return out;
};

function CondensadoDeBoseEinsteinGraphsCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 4) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "−");
  const inputValue = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d) : "");

  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "tRatio", aliases: ["t_ratio", "t_tc"], default: toNum(p.tRatio ?? p.t_ratio ?? p.t_tc, 0.5) },
    ],
    [p]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const tRatio = Math.min(Math.max(toNum(ep.tRatio, 0.5), 0.0), 1.0);
  const fAtVal = Math.max(0, 1 - Math.pow(tRatio, 1.5));

  const data = useMemo(() => buildSeries({}), []);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div
        className="v2-card"
        style={{
          padding: 12,
          background: "rgba(15,23,42,0.74)",
          borderRadius: 18,
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <div className="v2-card-title">
          {props.title ||
            tt(
              "Fracción condensada · transición Bose-Einstein",
              "Condensed fraction · Bose-Einstein transition"
            )}
        </div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={formula.latex} />.{" "}
          {tt(
            "Por encima de la temperatura crítica la fracción condensada es cero; al enfriar crece hasta 1.",
            "Above the critical temperature the condensed fraction is zero; on cooling it grows toward 1."
          )}
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            alignItems: "center",
            marginTop: 10,
            padding: "8px 12px",
            borderRadius: 10,
            border: "1px solid rgba(59,130,246,0.2)",
            background: "rgba(59,130,246,0.08)",
          }}
        >
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>
              <MathInline latex={"T/T_c"} />
            </span>
            <input
              className="form-control"
              style={{ width: 90 }}
              value={inputValue(tRatio, 3)}
              onChange={(e) => {
                exp.startExperiment();
                exp.setValue("tRatio", e.target.value);
              }}
            />
          </div>
          <button type="button" onClick={exp.resetToCalculator} style={{ marginLeft: "auto" }}>
            {tt("Seguir calculadora", "Follow calculator")}
          </button>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="muted" style={{ marginBottom: 10 }}>
          {tt("Fracción condensada", "Condensed fraction")}{" "}
          <MathInline latex={"f_0"} /> ={" "}
          <b>{fmt(fAtVal, 4)}</b>{" "}
          {tt(
            `para T/Tc = ${fmt(tRatio, 3)}`,
            `at T/Tc = ${fmt(tRatio, 3)}`
          )}
        </div>

        <div style={{ width: "100%", height: 320 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis
                dataKey="x"
                type="number"
                domain={[0, 1]}
                tickFormatter={(v) => v.toFixed(1)}
                stroke="rgba(255,255,255,0.4)"
                label={{
                  value: tt("T / Tc", "T / Tc"),
                  position: "insideBottomRight",
                  offset: -5,
                  fill: "rgba(255,255,255,0.5)",
                }}
              />
              <YAxis
                domain={[0, 1]}
                tickFormatter={(v) => v.toFixed(1)}
                stroke="rgba(255,255,255,0.4)"
                label={{
                  value: "f₀",
                  angle: -90,
                  position: "insideLeft",
                  fill: "rgba(255,255,255,0.5)",
                }}
              />
              <Tooltip
                formatter={(value) => [value.toFixed(4), "f₀"]}
                labelFormatter={(v) => `T/Tc = ${Number(v).toFixed(3)}`}
              />
              <Line type="monotone" dataKey="f" stroke="#8b5cf6" strokeWidth={3} dot={false} />
              <ReferenceDot x={tRatio} y={fAtVal} r={5} fill="#fb923c" stroke="none" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

CondensadoDeBoseEinsteinGraphsCoordView.graph_identity = graph_identity;
CondensadoDeBoseEinsteinGraphsCoordView.graphIdentity = graph_identity;
CondensadoDeBoseEinsteinGraphsCoordView.axes = axes;
CondensadoDeBoseEinsteinGraphsCoordView.formula = formula;
CondensadoDeBoseEinsteinGraphsCoordView.profile = profile;
CondensadoDeBoseEinsteinGraphsCoordView.pregunta_principal = graph_identity.pregunta_principal;
CondensadoDeBoseEinsteinGraphsCoordView.magnitud_estrella = graph_identity.magnitud_estrella;

const CondensadoDeBoseEinsteinGraphsCoord = createCoordGraph({
  Component: CondensadoDeBoseEinsteinGraphsCoordView,
  displayName: "CondensadoDeBoseEinsteinGraphsCoord",
});

CondensadoDeBoseEinsteinGraphsCoord.graph_identity = CondensadoDeBoseEinsteinGraphsCoordView.graph_identity;
CondensadoDeBoseEinsteinGraphsCoord.graphIdentity = CondensadoDeBoseEinsteinGraphsCoordView.graphIdentity;
CondensadoDeBoseEinsteinGraphsCoord.axes = CondensadoDeBoseEinsteinGraphsCoordView.axes;
CondensadoDeBoseEinsteinGraphsCoord.formula = CondensadoDeBoseEinsteinGraphsCoordView.formula;
CondensadoDeBoseEinsteinGraphsCoord.profile = CondensadoDeBoseEinsteinGraphsCoordView.profile;
CondensadoDeBoseEinsteinGraphsCoord.pregunta_principal = CondensadoDeBoseEinsteinGraphsCoordView.pregunta_principal;
CondensadoDeBoseEinsteinGraphsCoord.magnitud_estrella = CondensadoDeBoseEinsteinGraphsCoordView.magnitud_estrella;

export default CondensadoDeBoseEinsteinGraphsCoord;
