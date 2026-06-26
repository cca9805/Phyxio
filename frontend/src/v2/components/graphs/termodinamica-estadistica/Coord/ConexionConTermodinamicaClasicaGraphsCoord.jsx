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
    es: "¿Cómo conectan los microestados la entropía con la temperatura en termodinámica clásica?",
    en: "How do microstates connect entropy and temperature in classical thermodynamics?",
  },
  variable_control: "W",
  magnitud_estrella: "S",
  formula: "S = k_B · ln(W)",
  target_interpretable: true,
};

const axes = {
  x: { key: "W", label: { es: "Microestados W", en: "Microstates W" } },
  y: { key: "S", label: { es: "Entropía S (J/K)", en: "Entropy S (J/K)" } },
};

const formula = {
  latex: "S = k_B \\ln W",
  slopeLatex: "k_B / W",
  slopeMeaning: {
    es: "La pendiente k_B/W disminuye al aumentar W: la entropía crece de forma logarítmica, no lineal.",
    en: "The slope k_B/W decreases as W increases: entropy grows logarithmically, not linearly.",
  },
};

const profile = {
  graph_identity,
  axes,
  formula,
  relation: {
    es: "La entropía S crece con el logaritmo del número de microestados W, escalado por la constante de Boltzmann.",
    en: "Entropy S grows with the logarithm of the number of microstates W, scaled by the Boltzmann constant.",
  },
  physicalReading: {
    es: "La curva logarítmica indica que ganar muchos microestados nuevos produce cada vez menos ganancia entrópica adicional.",
    en: "The logarithmic curve indicates that gaining many new microstates yields diminishing additional entropy.",
  },
  domainMeaning: {
    es: "Válido para sistemas en equilibrio con microestados distinguibles y contables. W debe ser mayor que 1.",
    en: "Valid for equilibrium systems with distinguishable and countable microstates. W must be greater than 1.",
  },
};

const kB = 1.380649e-23;

const buildSeries = ({ wMin, wMax, steps = 80 }) => {
  const out = [];
  const w0 = Math.max(wMin, 1);
  for (let i = 0; i <= steps; i += 1) {
    const W = w0 + (i / steps) * (wMax - w0);
    const S = kB * Math.log(W);
    out.push({ W, S });
  }
  return out;
};

function ConexionConTermodinamicaClasicaGraphsCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-");
  const inputValue = (n, d = 0) => (Number.isFinite(n) ? n.toFixed(d) : "");

  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "wVal", aliases: ["W", "microestados"], default: toNum(p.wVal ?? p.W ?? p.microestados, 1e9) },
      { key: "wMax", aliases: ["wmax"], default: toNum(p.wMax ?? p.wmax, 1e12) },
    ],
    [p]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const wVal = Math.max(toNum(ep.wVal, 1e9), 1);
  const wMax = Math.max(toNum(ep.wMax, 1e12), wVal + 1);
  const wMin = 1;

  const Snow = kB * Math.log(wVal);
  const Smax = kB * Math.log(wMax);

  const data = useMemo(() => buildSeries({ wMin, wMax }), [wMax]);

  const yDomain = [0, Math.max(Smax, Snow) * 1.1];

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12, background: "rgba(15,23,42,0.74)", borderRadius: 18, border: "1px solid rgba(255,255,255,0.12)" }}>
        <div className="v2-card-title">
          {props.title || tt("Entropía frente a microestados · Puente estadístico-clásico", "Entropy vs microstates · Statistical-classical bridge")}
        </div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={formula.latex} />.
          {tt(" La entropía crece logarítmicamente con el número de microestados.", " Entropy grows logarithmically with the number of microstates.")}
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", marginTop: 10, padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}><MathInline latex={"W"} /></span>
            <input className="form-control" style={{ width: 100 }} value={inputValue(wVal, 0)} onChange={(e) => { exp.startExperiment(); exp.setValue("wVal", e.target.value); }} />
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}><MathInline latex={"W_{\\max}"} /></span>
            <input className="form-control" style={{ width: 100 }} value={inputValue(wMax, 0)} onChange={(e) => { exp.startExperiment(); exp.setValue("wMax", e.target.value); }} />
          </div>
          <button type="button" onClick={exp.resetToCalculator} style={{ marginLeft: "auto" }}>
            {tt("Seguir calculadora", "Follow calculator")}
          </button>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="muted" style={{ marginBottom: 10 }}>
          <MathInline latex={formula.latex} /> = <b>{(Snow).toExponential(3)}</b> J/K
        </div>

        <div style={{ width: "100%", height: 320 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis
                dataKey="W"
                type="number"
                domain={[wMin, wMax]}
                tickFormatter={(v) => v.toExponential(0)}
                stroke="rgba(255,255,255,0.4)"
                label={{ value: tt("Microestados W", "Microstates W"), position: "insideBottomRight", offset: -5, fill: "rgba(255,255,255,0.5)" }}
              />
              <YAxis
                domain={yDomain}
                tickFormatter={(v) => v.toExponential(1)}
                stroke="rgba(255,255,255,0.4)"
                label={{ value: "S (J/K)", angle: -90, position: "insideLeft", fill: "rgba(255,255,255,0.5)" }}
              />
              <Tooltip
                formatter={(value) => [value.toExponential(3), "S"]}
                labelFormatter={(v) => `W = ${v.toExponential(2)}`}
              />
              <Line type="monotone" dataKey="S" stroke="#3b82f6" strokeWidth={3} dot={false} />
              <ReferenceDot x={wVal} y={Snow} r={5} fill="#fb923c" stroke="none" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

ConexionConTermodinamicaClasicaGraphsCoordView.graph_identity = graph_identity;
ConexionConTermodinamicaClasicaGraphsCoordView.graphIdentity = graph_identity;
ConexionConTermodinamicaClasicaGraphsCoordView.axes = axes;
ConexionConTermodinamicaClasicaGraphsCoordView.formula = formula;
ConexionConTermodinamicaClasicaGraphsCoordView.profile = profile;
ConexionConTermodinamicaClasicaGraphsCoordView.pregunta_principal = graph_identity.pregunta_principal;
ConexionConTermodinamicaClasicaGraphsCoordView.magnitud_estrella = graph_identity.magnitud_estrella;

const ConexionConTermodinamicaClasicaGraphsCoord = createCoordGraph({
  Component: ConexionConTermodinamicaClasicaGraphsCoordView,
  displayName: "ConexionConTermodinamicaClasicaGraphsCoord",
});

ConexionConTermodinamicaClasicaGraphsCoord.graph_identity = ConexionConTermodinamicaClasicaGraphsCoordView.graph_identity;
ConexionConTermodinamicaClasicaGraphsCoord.graphIdentity = ConexionConTermodinamicaClasicaGraphsCoordView.graphIdentity;
ConexionConTermodinamicaClasicaGraphsCoord.axes = ConexionConTermodinamicaClasicaGraphsCoordView.axes;
ConexionConTermodinamicaClasicaGraphsCoord.formula = ConexionConTermodinamicaClasicaGraphsCoordView.formula;
ConexionConTermodinamicaClasicaGraphsCoord.profile = ConexionConTermodinamicaClasicaGraphsCoordView.profile;
ConexionConTermodinamicaClasicaGraphsCoord.pregunta_principal = ConexionConTermodinamicaClasicaGraphsCoordView.pregunta_principal;
ConexionConTermodinamicaClasicaGraphsCoord.magnitud_estrella = ConexionConTermodinamicaClasicaGraphsCoordView.magnitud_estrella;

export default ConexionConTermodinamicaClasicaGraphsCoord;
