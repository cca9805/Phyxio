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
    es: "¿Cómo varía la ocupación media de un estado bosónico con la energía cuando cambian temperatura y potencial químico?",
    en: "How does the mean occupation of a bosonic state vary with energy when temperature and chemical potential change?",
  },
  variable_control: "energia",
  magnitud_estrella: "ocupacion_media",
  formula: "n̄ = 1/(exp((ε−μ)/(k_B·T))−1)",
  target_interpretable: true,
};

const axes = {
  x: { key: "x", label: { es: "Energía relativa (ε−μ)/(k_B T)", en: "Relative energy (ε−μ)/(k_B T)" } },
  y: { key: "n", label: { es: "Ocupación media n̄", en: "Mean occupation n̄" } },
};

const formula = {
  latex: "\\bar{n} = \\frac{1}{e^{(\\varepsilon-\\mu)/(k_B T)}-1}",
  slopeLatex: "-\\frac{e^x}{(e^x-1)^2}",
  slopeMeaning: {
    es: "La pendiente negativa indica que la ocupación media decrece al aumentar la energía relativa.",
    en: "The negative slope indicates mean occupation decreases as relative energy increases.",
  },
};

const profile = {
  graph_identity,
  axes,
  formula,
  relation: {
    es: "La curva de Bose-Einstein muestra que la ocupación media decrece rápidamente con la energía relativa y diverge cuando la energía se acerca al potencial químico.",
    en: "The Bose-Einstein curve shows mean occupation decreasing rapidly with relative energy and diverging when energy approaches the chemical potential.",
  },
  physicalReading: {
    es: "Cerca de la divergencia los bosones se acumulan en el estado; a energías grandes la ocupación tiende a cero y se recupera el límite clásico.",
    en: "Near the divergence bosons accumulate in the state; at high energies occupation tends to zero and the classical limit is recovered.",
  },
  domainMeaning: {
    es: "Válido para bosones en equilibrio térmico con energía mayor que el potencial químico y temperatura positiva.",
    en: "Valid for bosons in thermal equilibrium with energy above the chemical potential and positive temperature.",
  },
};

const buildSeries = ({ xMax, steps = 120 }) => {
  const out = [];
  const xMin = 0.05;
  for (let i = 0; i <= steps; i += 1) {
    const x = xMin + ((xMax - xMin) * i) / steps;
    const expVal = Math.exp(x);
    const denom = expVal - 1;
    if (denom <= 0 || !Number.isFinite(denom)) continue;
    const n = 1 / denom;
    if (n > 20) continue;
    out.push({ x: parseFloat(x.toFixed(4)), n: parseFloat(n.toFixed(6)) });
  }
  return out;
};

function BosonesGraphsCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 4) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "−");
  const inputValue = (n, d = 4) => (Number.isFinite(n) ? n.toFixed(d) : "");

  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "xMax", aliases: ["x_max", "xmax"], default: toNum(p.xMax ?? p.x_max ?? p.xmax, 5.0) },
      { key: "xVal", aliases: ["x_val", "energia"], default: toNum(p.xVal ?? p.x_val ?? p.energia, 1.0) },
    ],
    [p]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const xMax = Math.max(toNum(ep.xMax, 5.0), 0.5);
  const xVal = Math.min(Math.max(toNum(ep.xVal, 1.0), 0.05), xMax);

  const expAtVal = Math.exp(xVal);
  const nAtVal = expAtVal > 1 ? 1 / (expAtVal - 1) : null;

  const data = useMemo(() => buildSeries({ xMax }), [xMax]);

  const yMax = Math.min(data.length > 0 ? Math.max(...data.map((d) => d.n)) * 1.15 : 12, 12);

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
              "Ocupación media bosónica · distribución Bose-Einstein",
              "Bosonic mean occupation · Bose-Einstein distribution"
            )}
        </div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={formula.latex} />.{" "}
          {tt(
            "La curva diverge cuando la energía relativa se acerca a cero; la ocupación puede superar 1 porque los bosones pueden compartir estado.",
            "The curve diverges as relative energy approaches zero; occupation may exceed 1 because bosons can share a state."
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
              <MathInline latex={"(\\varepsilon-\\mu)/(k_B T)"} />
            </span>
            <input
              className="form-control"
              style={{ width: 90 }}
              value={inputValue(xVal, 2)}
              onChange={(e) => {
                exp.startExperiment();
                exp.setValue("xVal", e.target.value);
              }}
            />
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>{tt("Rango x máx.", "Max x range")}</span>
            <input
              className="form-control"
              style={{ width: 80 }}
              value={inputValue(xMax, 1)}
              onChange={(e) => {
                exp.startExperiment();
                exp.setValue("xMax", e.target.value);
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
          {tt("Ocupación media", "Mean occupation")}{" "}
          <MathInline latex={"\\bar{n}"} /> ={" "}
          <b>
            {nAtVal !== null
              ? fmt(nAtVal, 4)
              : tt("diverge (ε ≈ μ)", "diverges (ε ≈ μ)")}
          </b>{" "}
          {tt(
            `para (ε−μ)/(k_B T) = ${fmt(xVal, 3)}`,
            `at (ε−μ)/(k_B T) = ${fmt(xVal, 3)}`
          )}
        </div>

        <div style={{ width: "100%", height: 320 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis
                dataKey="x"
                type="number"
                domain={[0, xMax]}
                tickFormatter={(v) => v.toFixed(1)}
                stroke="rgba(255,255,255,0.4)"
                label={{
                  value: tt("(ε−μ)/(k_B T)", "(ε−μ)/(k_B T)"),
                  position: "insideBottomRight",
                  offset: -5,
                  fill: "rgba(255,255,255,0.5)",
                }}
              />
              <YAxis
                domain={[0, yMax]}
                tickFormatter={(v) => v.toFixed(1)}
                stroke="rgba(255,255,255,0.4)"
                label={{
                  value: "n̄",
                  angle: -90,
                  position: "insideLeft",
                  fill: "rgba(255,255,255,0.5)",
                }}
              />
              <Tooltip
                formatter={(value) => [value.toFixed(4), "n̄"]}
                labelFormatter={(v) => `(ε−μ)/(k_B T) = ${Number(v).toFixed(3)}`}
              />
              <Line type="monotone" dataKey="n" stroke="#8b5cf6" strokeWidth={3} dot={false} />
              {nAtVal !== null && (
                <ReferenceDot x={xVal} y={Math.min(nAtVal, yMax)} r={5} fill="#fb923c" stroke="none" />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

BosonesGraphsCoordView.graph_identity = graph_identity;
BosonesGraphsCoordView.graphIdentity = graph_identity;
BosonesGraphsCoordView.axes = axes;
BosonesGraphsCoordView.formula = formula;
BosonesGraphsCoordView.profile = profile;
BosonesGraphsCoordView.pregunta_principal = graph_identity.pregunta_principal;
BosonesGraphsCoordView.magnitud_estrella = graph_identity.magnitud_estrella;

const BosonesGraphsCoord = createCoordGraph({
  Component: BosonesGraphsCoordView,
  displayName: "BosonesGraphsCoord",
});

BosonesGraphsCoord.graph_identity = BosonesGraphsCoordView.graph_identity;
BosonesGraphsCoord.graphIdentity = BosonesGraphsCoordView.graphIdentity;
BosonesGraphsCoord.axes = BosonesGraphsCoordView.axes;
BosonesGraphsCoord.formula = BosonesGraphsCoordView.formula;
BosonesGraphsCoord.profile = BosonesGraphsCoordView.profile;
BosonesGraphsCoord.pregunta_principal = BosonesGraphsCoordView.pregunta_principal;
BosonesGraphsCoord.magnitud_estrella = BosonesGraphsCoordView.magnitud_estrella;

export default BosonesGraphsCoord;
