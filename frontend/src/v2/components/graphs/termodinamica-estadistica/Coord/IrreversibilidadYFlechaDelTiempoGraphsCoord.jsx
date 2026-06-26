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
    es: "¿Por qué la entropía del universo crece con el tiempo y define la dirección física de la flecha temporal?",
    en: "Why does entropy of the universe grow with time and define the physical direction of the time arrow?",
  },
  variable_control: "t",
  magnitud_estrella: "variacion_entropia_universo",
  formula: "ΔS_tot = S_gen · t",
  target_interpretable: true,
};

const axes = {
  x: { key: "t", label: { es: "Tiempo t (s)", en: "Time t (s)" } },
  y: { key: "dS", label: { es: "ΔS_univ (J/K)", en: "ΔS_univ (J/K)" } },
};

const formula = {
  latex: "\\Delta S_{\\text{univ}} = S_{\\text{gen}} \\cdot t",
  slopeLatex: "S_{\\text{gen}}",
  slopeMeaning: {
    es: "La pendiente es la tasa de producción de entropía: mayor pendiente indica mayor irreversibilidad.",
    en: "The slope is the entropy generation rate: a steeper slope indicates greater irreversibility.",
  },
};

const profile = {
  graph_identity,
  axes,
  formula,
  relation: {
    es: "La entropía total del universo crece linealmente con el tiempo para una tasa de producción constante, marcando la dirección física del proceso espontáneo.",
    en: "Total entropy of the universe grows linearly with time for a constant generation rate, marking the physical direction of the spontaneous process.",
  },
  physicalReading: {
    es: "Una pendiente positiva indica un proceso irreversible real porque la entropía total crece; la tendencia creciente define la flecha del tiempo.",
    en: "A positive slope indicates a real irreversible process because total entropy grows; the increasing trend defines the arrow of time.",
  },
  domainMeaning: {
    es: "Válido para procesos con estados termodinámicos bien definidos y tasa de producción de entropía constante.",
    en: "Valid for processes with well-defined thermodynamic states and a constant entropy generation rate.",
  },
};

const buildSeries = ({ tMax, sGen, steps = 80 }) => {
  const out = [];
  for (let i = 0; i <= steps; i += 1) {
    const t = (i / steps) * tMax;
    const dS = sGen * t;
    out.push({ t, dS });
  }
  return out;
};

function IrreversibilidadYFlechaDelTiempoGraphsCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 4) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-");
  const inputValue = (n, d = 4) => (Number.isFinite(n) ? n.toFixed(d) : "");

  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "sGen", aliases: ["S_gen", "entropia_producida"], default: toNum(p.sGen ?? p.S_gen ?? p.entropia_producida, 0.5) },
      { key: "tMax", aliases: ["tmax", "t_max"], default: toNum(p.tMax ?? p.tmax ?? p.t_max, 10) },
      { key: "tVal", aliases: ["t", "tiempo"], default: toNum(p.tVal ?? p.t ?? p.tiempo, 5) },
    ],
    [p]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const sGen = Math.max(toNum(ep.sGen, 0.5), 0);
  const tMax = Math.max(toNum(ep.tMax, 10), 0.01);
  const tVal = Math.min(Math.max(toNum(ep.tVal, 5), 0), tMax);

  const dSNow = sGen * tVal;
  const dSMax = sGen * tMax;

  const data = useMemo(() => buildSeries({ tMax, sGen }), [tMax, sGen]);

  const yDomain = [0, Math.max(dSMax, dSNow) * 1.15 + 0.001];

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12, background: "rgba(15,23,42,0.74)", borderRadius: 18, border: "1px solid rgba(255,255,255,0.12)" }}>
        <div className="v2-card-title">
          {props.title || tt("Entropía del universo frente al tiempo · Flecha temporal", "Universe entropy vs time · Time arrow")}
        </div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={formula.latex} />.
          {tt(
            " Una pendiente positiva indica proceso irreversible real; la tendencia creciente marca la dirección física del tiempo.",
            " A positive slope indicates a real irreversible process; the increasing trend marks the physical direction of time."
          )}
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", marginTop: 10, padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}><MathInline latex={"S_{\\text{gen}}"} /> (J/K·s)</span>
            <input className="form-control" style={{ width: 90 }} value={inputValue(sGen)} onChange={(e) => { exp.startExperiment(); exp.setValue("sGen", e.target.value); }} />
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}><MathInline latex={"t"} /> (s)</span>
            <input className="form-control" style={{ width: 80 }} value={inputValue(tVal, 2)} onChange={(e) => { exp.startExperiment(); exp.setValue("tVal", e.target.value); }} />
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}><MathInline latex={"t_{\\max}"} /></span>
            <input className="form-control" style={{ width: 80 }} value={inputValue(tMax, 2)} onChange={(e) => { exp.startExperiment(); exp.setValue("tMax", e.target.value); }} />
          </div>
          <button type="button" onClick={exp.resetToCalculator} style={{ marginLeft: "auto" }}>
            {tt("Seguir calculadora", "Follow calculator")}
          </button>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="muted" style={{ marginBottom: 10 }}>
          <MathInline latex={"\\Delta S_{\\text{univ}}"} /> = <b>{fmt(dSNow)} J/K</b>
          {" · "}
          {tt(`en t = ${fmt(tVal, 2)} s`, `at t = ${fmt(tVal, 2)} s`)}
        </div>

        <div style={{ width: "100%", height: 320 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis
                dataKey="t"
                type="number"
                domain={[0, tMax]}
                tickFormatter={(v) => v.toFixed(1)}
                stroke="rgba(255,255,255,0.4)"
                label={{ value: tt("Tiempo t (s)", "Time t (s)"), position: "insideBottomRight", offset: -5, fill: "rgba(255,255,255,0.5)" }}
              />
              <YAxis
                domain={yDomain}
                tickFormatter={(v) => v.toFixed(3)}
                stroke="rgba(255,255,255,0.4)"
                label={{ value: "ΔS (J/K)", angle: -90, position: "insideLeft", fill: "rgba(255,255,255,0.5)" }}
              />
              <Tooltip
                formatter={(value) => [value.toFixed(4), "ΔS_univ"]}
                labelFormatter={(v) => `t = ${Number(v).toFixed(2)} s`}
              />
              <Line type="monotone" dataKey="dS" stroke="#3b82f6" strokeWidth={3} dot={false} />
              <ReferenceDot x={tVal} y={dSNow} r={5} fill="#fb923c" stroke="none" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

IrreversibilidadYFlechaDelTiempoGraphsCoordView.graph_identity = graph_identity;
IrreversibilidadYFlechaDelTiempoGraphsCoordView.graphIdentity = graph_identity;
IrreversibilidadYFlechaDelTiempoGraphsCoordView.axes = axes;
IrreversibilidadYFlechaDelTiempoGraphsCoordView.formula = formula;
IrreversibilidadYFlechaDelTiempoGraphsCoordView.profile = profile;
IrreversibilidadYFlechaDelTiempoGraphsCoordView.pregunta_principal = graph_identity.pregunta_principal;
IrreversibilidadYFlechaDelTiempoGraphsCoordView.magnitud_estrella = graph_identity.magnitud_estrella;

const IrreversibilidadYFlechaDelTiempoGraphsCoord = createCoordGraph({
  Component: IrreversibilidadYFlechaDelTiempoGraphsCoordView,
  displayName: "IrreversibilidadYFlechaDelTiempoGraphsCoord",
});

IrreversibilidadYFlechaDelTiempoGraphsCoord.graph_identity = IrreversibilidadYFlechaDelTiempoGraphsCoordView.graph_identity;
IrreversibilidadYFlechaDelTiempoGraphsCoord.graphIdentity = IrreversibilidadYFlechaDelTiempoGraphsCoordView.graphIdentity;
IrreversibilidadYFlechaDelTiempoGraphsCoord.axes = IrreversibilidadYFlechaDelTiempoGraphsCoordView.axes;
IrreversibilidadYFlechaDelTiempoGraphsCoord.formula = IrreversibilidadYFlechaDelTiempoGraphsCoordView.formula;
IrreversibilidadYFlechaDelTiempoGraphsCoord.profile = IrreversibilidadYFlechaDelTiempoGraphsCoordView.profile;
IrreversibilidadYFlechaDelTiempoGraphsCoord.pregunta_principal = IrreversibilidadYFlechaDelTiempoGraphsCoordView.pregunta_principal;
IrreversibilidadYFlechaDelTiempoGraphsCoord.magnitud_estrella = IrreversibilidadYFlechaDelTiempoGraphsCoordView.magnitud_estrella;

export default IrreversibilidadYFlechaDelTiempoGraphsCoord;
