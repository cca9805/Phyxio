import React, { useMemo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
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

// Normalized Maxwell-Boltzmann: g(x) = (4/√π) x² exp(-x²), x = v/v_p
const gNorm = (x) => (4 / Math.sqrt(Math.PI)) * x * x * Math.exp(-x * x);

// v_p ratio of characteristic speeds
const X_MEAN = Math.sqrt(4 / Math.PI);   // ≈ 1.128 v_mean/v_p
const X_RMS  = Math.sqrt(3 / 2);         // ≈ 1.225 v_rms/v_p

// v_p in m/s for given T (K) and m (kg)
const vp_ms = (T, m) => Math.sqrt(2 * 1.38e-23 * T / m);

const GASES = [
  { label: "He (helio)", m: 6.646e-27 },
  { label: "N₂ (nitrógeno)", m: 4.652e-26 },
  { label: "O₂ (oxígeno)", m: 5.314e-26 },
  { label: "Ar (argón)", m: 6.633e-26 },
];

const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo determina la temperatura la distribución de velocidades en el gas ideal?",
    en: "How does temperature determine the speed distribution in an ideal gas?",
  },
  variable_control: "temperatura_absoluta",
  magnitud_estrella: "densidad_probabilidad_velocidad",
  formula: "f̃(x) = (4/√π) x² exp(−x²)",
  target_interpretable: true,
};

const axes = {
  x: { key: "x", label: { es: "Velocidad reducida x = v/v_p", en: "Reduced speed x = v/v_p" } },
  y: { key: "g", label: { es: "Distribución normalizada f̃(x)", en: "Normalised distribution f̃(x)" } },
};

const formula = {
  latex: "f(v)=4\\pi\\left(\\frac{m}{2\\pi k_B T}\\right)^{3/2}v^2 e^{-mv^2/(2k_BT)}",
  slopeLatex: "\\frac{d\\tilde{f}}{dx}=\\frac{4}{\\sqrt{\\pi}}e^{-x^2}(2x-2x^3)",
  slopeMeaning: {
    es: "La curva sube desde cero, alcanza el máximo en x=1 y decrece hacia cero, mostrando cómo la distribución estadística limita las velocidades extremas.",
    en: "The curve rises from zero, peaks at x=1, and decreases toward zero, showing how the statistical distribution limits extreme speeds.",
  },
};

const profile = {
  graph_identity,
  axes,
  formula,
  relation: {
    es: "La distribución de Maxwell-Boltzmann es unimodal: la [[densidad_probabilidad_velocidad]] sube desde cero, alcanza su máximo en la velocidad más probable y disminuye exponencialmente. La [[temperatura_absoluta]] controla la posición y el ancho de la distribución.",
    en: "The Maxwell-Boltzmann distribution is unimodal: [[densidad_probabilidad_velocidad]] rises from zero, peaks at the most probable speed, and decreases exponentially. [[temperatura_absoluta]] controls the position and width of the distribution.",
  },
  physicalReading: {
    es: "Un valor alto de [[densidad_probabilidad_velocidad]] indica que esa rapidez es relativamente frecuente en el gas. El área bajo la curva entre dos velocidades da la [[probabilidad_intervalo]]; la altura sola no es una probabilidad.",
    en: "A high value of [[densidad_probabilidad_velocidad]] indicates that speed is relatively frequent in the gas. The area under the curve between two speeds gives [[probabilidad_intervalo]]; the height alone is not a probability.",
  },
  domainMeaning: {
    es: "Válido para gas ideal clásico diluido en equilibrio térmico, sin efectos cuánticos ni relativistas.",
    en: "Valid for a dilute classical ideal gas in thermal equilibrium, without quantum or relativistic effects.",
  },
};

const buildSeries = (xMax = 3.5, steps = 300) => {
  const out = [];
  for (let i = 0; i <= steps; i++) {
    const x = (xMax * i) / steps;
    out.push({ x: parseFloat(x.toFixed(4)), g: parseFloat(gNorm(x).toFixed(6)) });
  }
  return out;
};

function DistribucionDeVelocidadesGraphsCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 0) => (Number.isFinite(n) ? Math.round(n).toString().replace(".", decSep) : "−");
  const fmtF = (n, d = 4) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "−");

  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "T", aliases: ["temperatura_absoluta", "temp"], default: toNum(p.T ?? p.temperatura_absoluta ?? p.temp, 300) },
      { key: "gasIdx", aliases: ["gas_idx"], default: toNum(p.gasIdx ?? p.gas_idx, 1) },
      { key: "xVal", aliases: ["x_val"], default: toNum(p.xVal ?? p.x_val, 1.0) },
    ],
    [p]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const T = Math.max(toNum(ep.T, 300), 10);
  const gasIdx = Math.min(Math.max(Math.round(toNum(ep.gasIdx, 1)), 0), GASES.length - 1);
  const xVal = Math.min(Math.max(toNum(ep.xVal, 1.0), 0), 3.5);

  const gas = GASES[gasIdx];
  const vp = vp_ms(T, gas.m);
  const gAtVal = gNorm(xVal);

  const data = useMemo(() => buildSeries(3.5), []);

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
              "Distribución de velocidades de Maxwell-Boltzmann",
              "Maxwell-Boltzmann speed distribution"
            )}
        </div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"\\tilde{f}(x)=\\frac{4}{\\sqrt{\\pi}}x^2 e^{-x^2}"} />{tt(", con ", ", with ")}
          <MathInline latex={"x = v/v_p"} />.{" "}
          {tt(
            "Velocidad más probable: ",
            "Most probable speed: "
          )}
          <b>v<sub>p</sub> = {fmt(vp)} m/s</b>
          {tt(" para ", " for ")}
          {gas.label}{tt(` a ${Math.round(T)} K.`, ` at ${Math.round(T)} K.`)}
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
            <span style={{ fontSize: 13, opacity: 0.85 }}>T (K)</span>
            <input
              className="form-control"
              style={{ width: 80 }}
              type="number"
              min={10}
              max={5000}
              value={Math.round(T)}
              onChange={(e) => {
                exp.startExperiment();
                exp.setValue("T", e.target.value);
              }}
            />
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>{tt("Gas", "Gas")}</span>
            <select
              className="form-control"
              style={{ width: 140 }}
              value={gasIdx}
              onChange={(e) => {
                exp.startExperiment();
                exp.setValue("gasIdx", e.target.value);
              }}
            >
              {GASES.map((g, i) => (
                <option key={i} value={i}>{g.label}</option>
              ))}
            </select>
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>
              <MathInline latex={"x = v/v_p"} />
            </span>
            <input
              className="form-control"
              style={{ width: 70 }}
              value={xVal.toFixed(2)}
              onChange={(e) => {
                exp.startExperiment();
                exp.setValue("xVal", e.target.value);
              }}
            />
          </div>
          <button type="button" onClick={exp.resetToCalculator} style={{ marginLeft: "auto" }}>
            {tt("Seguir calculadora", "Follow calculator")}
          </button>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="muted" style={{ marginBottom: 8, fontSize: 13 }}>
          {tt("En ", "At ")}x = {fmtF(xVal, 2)}{tt(", f̃ = ", ", f̃ = ")}<b>{fmtF(gAtVal, 4)}</b>
          {" · "}
          <span style={{ opacity: 0.7 }}>
            {tt("v_p = ", "v_p = ")}{fmt(vp)} m/s
            {"  |  v_mean ≈ "}{fmt(X_MEAN * vp)} m/s
            {"  |  v_rms ≈ "}{fmt(X_RMS * vp)} m/s
          </span>
        </div>

        <div style={{ width: "100%", height: 320 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis
                dataKey="x"
                type="number"
                domain={[0, 3.5]}
                tickFormatter={(v) => v.toFixed(1)}
                stroke="rgba(255,255,255,0.4)"
                label={{
                  value: tt("x = v/v_p", "x = v/v_p"),
                  position: "insideBottomRight",
                  offset: -5,
                  fill: "rgba(255,255,255,0.5)",
                }}
              />
              <YAxis
                domain={[0, 0.95]}
                tickFormatter={(v) => v.toFixed(2)}
                stroke="rgba(255,255,255,0.4)"
                label={{
                  value: "f̃(x)",
                  angle: -90,
                  position: "insideLeft",
                  fill: "rgba(255,255,255,0.5)",
                }}
              />
              <Tooltip
                formatter={(value) => [value.toFixed(4), "f̃"]}
                labelFormatter={(v) => `x = ${Number(v).toFixed(3)}`}
              />
              <Line type="monotone" dataKey="g" stroke="#34d399" strokeWidth={3} dot={false} />
              <ReferenceLine x={1} stroke="#f59e0b" strokeDasharray="5 3"
                label={{ value: "v_p", fill: "#f59e0b", fontSize: 11, position: "top" }} />
              <ReferenceLine x={X_MEAN} stroke="#60a5fa" strokeDasharray="4 3"
                label={{ value: "v̄", fill: "#60a5fa", fontSize: 11, position: "top" }} />
              <ReferenceLine x={X_RMS} stroke="#f472b6" strokeDasharray="3 3"
                label={{ value: "v_rms", fill: "#f472b6", fontSize: 11, position: "top" }} />
              <ReferenceDot x={xVal} y={gAtVal} r={5} fill="#fb923c" stroke="none" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

DistribucionDeVelocidadesGraphsCoordView.graph_identity = graph_identity;
DistribucionDeVelocidadesGraphsCoordView.graphIdentity = graph_identity;
DistribucionDeVelocidadesGraphsCoordView.axes = axes;
DistribucionDeVelocidadesGraphsCoordView.formula = formula;
DistribucionDeVelocidadesGraphsCoordView.profile = profile;
DistribucionDeVelocidadesGraphsCoordView.pregunta_principal = graph_identity.pregunta_principal;
DistribucionDeVelocidadesGraphsCoordView.magnitud_estrella = graph_identity.magnitud_estrella;

const DistribucionDeVelocidadesGraphsCoord = createCoordGraph({
  Component: DistribucionDeVelocidadesGraphsCoordView,
  displayName: "DistribucionDeVelocidadesGraphsCoord",
});

DistribucionDeVelocidadesGraphsCoord.graph_identity = DistribucionDeVelocidadesGraphsCoordView.graph_identity;
DistribucionDeVelocidadesGraphsCoord.graphIdentity = DistribucionDeVelocidadesGraphsCoordView.graphIdentity;
DistribucionDeVelocidadesGraphsCoord.axes = DistribucionDeVelocidadesGraphsCoordView.axes;
DistribucionDeVelocidadesGraphsCoord.formula = DistribucionDeVelocidadesGraphsCoordView.formula;
DistribucionDeVelocidadesGraphsCoord.profile = DistribucionDeVelocidadesGraphsCoordView.profile;
DistribucionDeVelocidadesGraphsCoord.pregunta_principal = DistribucionDeVelocidadesGraphsCoordView.pregunta_principal;
DistribucionDeVelocidadesGraphsCoord.magnitud_estrella = DistribucionDeVelocidadesGraphsCoordView.magnitud_estrella;

export default DistribucionDeVelocidadesGraphsCoord;
