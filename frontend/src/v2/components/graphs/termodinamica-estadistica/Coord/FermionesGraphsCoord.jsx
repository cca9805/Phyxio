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
    es: "¿Cómo limita el carácter fermiónico la ocupación de estados al cambiar la energía?",
    en: "How does fermionic character limit state occupation as energy changes?",
  },
  variable_control: "energia",
  magnitud_estrella: "ocupacion_estado",
  formula: "f = 1/(exp(η)+1)",
  target_interpretable: true,
};

const axes = {
  x: { key: "eta", label: { es: "Energía reducida η = (E−μ)/(k_B T)", en: "Reduced energy η = (E−μ)/(k_B T)" } },
  y: { key: "f", label: { es: "Ocupación fermiónica f", en: "Fermionic occupation f" } },
};

const formula = {
  latex: "f(\\eta)=\\frac{1}{e^{\\eta}+1}",
  slopeLatex: "-\\frac{e^{\\eta}}{(e^{\\eta}+1)^2}",
  slopeMeaning: {
    es: "La pendiente negativa indica que la ocupación fermiónica decrece al aumentar la energía reducida.",
    en: "The negative slope indicates fermionic occupation decreases as reduced energy increases.",
  },
};

const profile = {
  graph_identity,
  axes,
  formula,
  relation: {
    es: "La curva de Fermi-Dirac muestra cómo la ocupación media de un estado fermiónico decrece de 1 a 0 al aumentar la energía relativa al potencial químico.",
    en: "The Fermi-Dirac curve shows how the mean occupation of a fermionic state decreases from 1 to 0 as energy increases relative to the chemical potential.",
  },
  physicalReading: {
    es: "En η = 0 la ocupación vale exactamente 1/2; para η >> 1 el estado tiende a vaciarse y para η << -1 tiende a llenarse al máximo permitido por la exclusión de Pauli.",
    en: "At η = 0 the occupation equals exactly 1/2; for η >> 1 the state tends to empty and for η << -1 it tends to fill up to the maximum allowed by Pauli exclusion.",
  },
  domainMeaning: {
    es: "Válido para fermiones en equilibrio térmico con temperatura absoluta positiva y potencial químico bien definido.",
    en: "Valid for fermions in thermal equilibrium with positive absolute temperature and well-defined chemical potential.",
  },
};

const buildSeries = ({ etaMin, etaMax, steps = 200 }) => {
  const out = [];
  for (let i = 0; i <= steps; i += 1) {
    const eta = etaMin + ((etaMax - etaMin) * i) / steps;
    const f = 1 / (Math.exp(eta) + 1);
    out.push({ eta: parseFloat(eta.toFixed(4)), f: parseFloat(f.toFixed(6)) });
  }
  return out;
};

function FermionesGraphsCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 4) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "−");
  const inputValue = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d) : "");

  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "etaMin", aliases: ["eta_min", "etamin"], default: toNum(p.etaMin ?? p.eta_min ?? p.etamin, -5.0) },
      { key: "etaMax", aliases: ["eta_max", "etamax"], default: toNum(p.etaMax ?? p.eta_max ?? p.etamax, 5.0) },
      { key: "etaVal", aliases: ["eta_val", "energia_reducida"], default: toNum(p.etaVal ?? p.eta_val ?? p.energia_reducida, 0.0) },
    ],
    [p]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const etaMin = toNum(ep.etaMin, -5.0);
  const etaMax = Math.max(toNum(ep.etaMax, 5.0), etaMin + 0.5);
  const etaVal = Math.min(Math.max(toNum(ep.etaVal, 0.0), etaMin), etaMax);

  const fAtVal = 1 / (Math.exp(etaVal) + 1);

  const data = useMemo(() => buildSeries({ etaMin, etaMax }), [etaMin, etaMax]);

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
              "Ocupación fermiónica · distribución Fermi-Dirac",
              "Fermionic occupation · Fermi-Dirac distribution"
            )}
        </div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={formula.latex} />.{" "}
          {tt(
            "La curva decrece de 1 a 0 al aumentar η; en η = 0 la ocupación vale exactamente 1/2, marcando el potencial químico.",
            "The curve decreases from 1 to 0 as η increases; at η = 0 the occupation equals exactly 1/2, marking the chemical potential."
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
              <MathInline latex={"\\eta"} />
            </span>
            <input
              className="form-control"
              style={{ width: 80 }}
              value={inputValue(etaVal, 2)}
              onChange={(e) => {
                exp.startExperiment();
                exp.setValue("etaVal", e.target.value);
              }}
            />
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>{tt("η mín.", "η min.")}</span>
            <input
              className="form-control"
              style={{ width: 70 }}
              value={inputValue(etaMin, 1)}
              onChange={(e) => {
                exp.startExperiment();
                exp.setValue("etaMin", e.target.value);
              }}
            />
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>{tt("η máx.", "η max.")}</span>
            <input
              className="form-control"
              style={{ width: 70 }}
              value={inputValue(etaMax, 1)}
              onChange={(e) => {
                exp.startExperiment();
                exp.setValue("etaMax", e.target.value);
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
          {tt("Ocupación fermiónica", "Fermionic occupation")}{" "}
          <MathInline latex={"f"} /> ={" "}
          <b>{fmt(fAtVal, 4)}</b>{" "}
          {tt(
            `para η = ${fmt(etaVal, 3)}`,
            `at η = ${fmt(etaVal, 3)}`
          )}
        </div>

        <div style={{ width: "100%", height: 320 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis
                dataKey="eta"
                type="number"
                domain={[etaMin, etaMax]}
                tickFormatter={(v) => v.toFixed(1)}
                stroke="rgba(255,255,255,0.4)"
                label={{
                  value: "η = (E−μ)/(k_B T)",
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
                  value: "f",
                  angle: -90,
                  position: "insideLeft",
                  fill: "rgba(255,255,255,0.5)",
                }}
              />
              <Tooltip
                formatter={(value) => [value.toFixed(4), "f"]}
                labelFormatter={(v) => `η = ${Number(v).toFixed(3)}`}
              />
              <Line type="monotone" dataKey="f" stroke="#22d3ee" strokeWidth={3} dot={false} />
              <ReferenceDot x={etaVal} y={fAtVal} r={5} fill="#fb923c" stroke="none" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

FermionesGraphsCoordView.graph_identity = graph_identity;
FermionesGraphsCoordView.graphIdentity = graph_identity;
FermionesGraphsCoordView.axes = axes;
FermionesGraphsCoordView.formula = formula;
FermionesGraphsCoordView.profile = profile;
FermionesGraphsCoordView.pregunta_principal = graph_identity.pregunta_principal;
FermionesGraphsCoordView.magnitud_estrella = graph_identity.magnitud_estrella;

const FermionesGraphsCoord = createCoordGraph({
  Component: FermionesGraphsCoordView,
  displayName: "FermionesGraphsCoord",
});

FermionesGraphsCoord.graph_identity = FermionesGraphsCoordView.graph_identity;
FermionesGraphsCoord.graphIdentity = FermionesGraphsCoordView.graphIdentity;
FermionesGraphsCoord.axes = FermionesGraphsCoordView.axes;
FermionesGraphsCoord.formula = FermionesGraphsCoordView.formula;
FermionesGraphsCoord.profile = FermionesGraphsCoordView.profile;
FermionesGraphsCoord.pregunta_principal = FermionesGraphsCoordView.pregunta_principal;
FermionesGraphsCoord.magnitud_estrella = FermionesGraphsCoordView.magnitud_estrella;

export default FermionesGraphsCoord;
