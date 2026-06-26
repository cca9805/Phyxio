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

// E = (3/2) k_B T, displayed in units of 1e-21 J
const K_B = 1.380649e-23;
const Emedia21 = (T) => 1.5 * K_B * T * 1e21;
const Emedia = (T) => 1.5 * K_B * T;

const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo depende la energía media de una partícula de la temperatura del gas?",
    en: "How does the average energy of a particle depend on the temperature of the gas?",
  },
  variable_control: "temperatura",
  magnitud_estrella: "energia_media",
  formula: "<E> = (3/2) k_B T",
  target_interpretable: true,
};

const axes = {
  x: { key: "T", label: { es: "Temperatura T (K)", en: "Temperature T (K)" } },
  y: { key: "E", label: { es: "Energía media (10⁻²¹ J)", en: "Average energy (10⁻²¹ J)" } },
};

const formula = {
  latex: "\\overline{E}=\\frac{3}{2}k_B T",
  slopeLatex: "\\frac{d\\overline{E}}{dT}=\\frac{3}{2}k_B",
  slopeMeaning: {
    es: "La pendiente constante indica que la energía media aumenta linealmente con la temperatura; duplicar T duplica la energía media.",
    en: "The constant slope shows average energy increases linearly with temperature; doubling T doubles average energy.",
  },
};

const profile = {
  graph_identity,
  axes,
  formula,
  relation: {
    es: "La energía media por partícula clásica crece linealmente con la temperatura absoluta; la pendiente es (3/2) k_B y no depende del tipo de gas ideal.",
    en: "The average energy per classical particle grows linearly with absolute temperature; the slope is (3/2) k_B and does not depend on the ideal gas type.",
  },
  physicalReading: {
    es: "Un valor alto de energía media indica mayor agitación térmica por partícula. La recta por el origen indica que a T = 0 K la energía media traslacional clásica tiende a cero.",
    en: "A high average energy indicates greater thermal agitation per particle. The line through the origin shows that at T = 0 K the classical translational average energy tends to zero.",
  },
  domainMeaning: {
    es: "Válido para gas ideal clásico en equilibrio térmico sin efectos cuánticos ni relativistas.",
    en: "Valid for a classical ideal gas in thermal equilibrium without quantum or relativistic effects.",
  },
};

const buildSeries = ({ tMax, steps = 200 }) => {
  const out = [];
  for (let i = 0; i <= steps; i++) {
    const T = (tMax * i) / steps;
    out.push({ T: parseFloat(T.toFixed(2)), E: parseFloat(Emedia21(T).toFixed(5)) });
  }
  return out;
};

function EnergiaMediaGraphsCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "−");
  const fmtSci = (n) => {
    if (!Number.isFinite(n)) return "−";
    return n.toExponential(3).replace(".", decSep);
  };

  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "T", aliases: ["temperatura", "temp"], default: toNum(p.T ?? p.temperatura ?? p.temp, 300) },
      { key: "tMax", aliases: ["t_max", "tmax"], default: toNum(p.tMax ?? p.t_max ?? p.tmax, 1000) },
    ],
    [p]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const T = Math.max(toNum(ep.T, 300), 0);
  const tMax = Math.max(toNum(ep.tMax, 1000), 100);
  const Tplot = Math.min(T, tMax);

  const EatT21 = Emedia21(T);
  const EatTJ = Emedia(T);

  const data = useMemo(() => buildSeries({ tMax }), [tMax]);
  const yMax = Emedia21(tMax) * 1.1;

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
          {props.title || tt("Energía media · Maxwell-Boltzmann", "Average energy · Maxwell-Boltzmann")}
        </div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"\\overline{E}=\\frac{3}{2}k_B T"} />.{" "}
          {tt(
            "Recta por el origen: la energía media por partícula es proporcional a la temperatura absoluta.",
            "Line through the origin: average energy per particle is proportional to absolute temperature."
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
            <span style={{ fontSize: 13, opacity: 0.85 }}>T (K)</span>
            <input
              className="form-control"
              style={{ width: 80 }}
              type="number"
              min={0}
              max={tMax}
              value={Math.round(T)}
              onChange={(e) => {
                exp.startExperiment();
                exp.setValue("T", e.target.value);
              }}
            />
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>{tt("T máx. (K)", "T max. (K)")}</span>
            <input
              className="form-control"
              style={{ width: 80 }}
              type="number"
              min={100}
              max={10000}
              value={Math.round(tMax)}
              onChange={(e) => {
                exp.startExperiment();
                exp.setValue("tMax", e.target.value);
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
          {tt("En T = ", "At T = ")}<b>{Math.round(T)} K</b>
          {tt(", energía media = ", ", average energy = ")}
          <b>{fmt(EatT21, 3)} × 10⁻²¹ J</b>
          <span style={{ opacity: 0.7 }}>{" "}({fmtSci(EatTJ)} J)</span>
        </div>

        <div style={{ width: "100%", height: 320 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis
                dataKey="T"
                type="number"
                domain={[0, tMax]}
                tickFormatter={(v) => Math.round(v).toString()}
                stroke="rgba(255,255,255,0.4)"
                label={{
                  value: "T (K)",
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
                  value: "E (10⁻²¹ J)",
                  angle: -90,
                  position: "insideLeft",
                  fill: "rgba(255,255,255,0.5)",
                }}
              />
              <Tooltip
                formatter={(value) => [`${value.toFixed(3)} × 10⁻²¹ J`, "E"]}
                labelFormatter={(v) => `T = ${Math.round(v)} K`}
              />
              <Line type="linear" dataKey="E" stroke="#34d399" strokeWidth={3} dot={false} />
              {Tplot >= 0 && Tplot <= tMax && (
                <ReferenceDot x={Tplot} y={Emedia21(Tplot)} r={5} fill="#fb923c" stroke="none" />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

EnergiaMediaGraphsCoordView.graph_identity = graph_identity;
EnergiaMediaGraphsCoordView.graphIdentity = graph_identity;
EnergiaMediaGraphsCoordView.axes = axes;
EnergiaMediaGraphsCoordView.formula = formula;
EnergiaMediaGraphsCoordView.profile = profile;
EnergiaMediaGraphsCoordView.pregunta_principal = graph_identity.pregunta_principal;
EnergiaMediaGraphsCoordView.magnitud_estrella = graph_identity.magnitud_estrella;

const EnergiaMediaGraphsCoord = createCoordGraph({
  Component: EnergiaMediaGraphsCoordView,
  displayName: "EnergiaMediaGraphsCoord",
});

EnergiaMediaGraphsCoord.graph_identity = EnergiaMediaGraphsCoordView.graph_identity;
EnergiaMediaGraphsCoord.graphIdentity = EnergiaMediaGraphsCoordView.graphIdentity;
EnergiaMediaGraphsCoord.axes = EnergiaMediaGraphsCoordView.axes;
EnergiaMediaGraphsCoord.formula = EnergiaMediaGraphsCoordView.formula;
EnergiaMediaGraphsCoord.profile = EnergiaMediaGraphsCoordView.profile;
EnergiaMediaGraphsCoord.pregunta_principal = EnergiaMediaGraphsCoordView.pregunta_principal;
EnergiaMediaGraphsCoord.magnitud_estrella = EnergiaMediaGraphsCoordView.magnitud_estrella;

export default EnergiaMediaGraphsCoord;
