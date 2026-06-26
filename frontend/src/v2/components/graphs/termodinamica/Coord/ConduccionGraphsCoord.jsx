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
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";
import { createCoordGraph } from "../../graphFactories.jsx";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo depende la potencia térmica conducida de la diferencia de temperatura?",
    en: "How does conducted thermal power depend on temperature difference?",
  },
  variable_control: "DeltaT",
  magnitud_estrella: "P",
  formula: "Q̇ = k A DeltaT / L",
  target_interpretable: true,
};

const axes = {
  x: { key: "DeltaT", label: { es: "ΔT (K)", en: "ΔT (K)" } },
  y: { key: "Q̇", label: { es: "Q̇", en: "Q̇ (W)" } },
};

const formula = {
  latex: "Q̇ = \\frac{k A \\Delta T}{L}",
  slopeLatex: "\\frac{kA}{L}",
  slopeMeaning: {
    es: "La pendiente de la recta es kA/L: aumenta con la conductividad y el área, y disminuye con el espesor.",
    en: "The slope is kA/L: it increases with conductivity and area, and decreases with thickness.",
  },
};

const profile = {
  graph_identity,
  axes,
  formula,
  relation: {
    es: "Para k, A y L constantes, la potencia conducida Q̇ es proporcional a la diferencia de temperatura ΔT.",
    en: "For constant k, A and L, conducted power Q̇ is proportional to the temperature difference ΔT.",
  },
  physicalReading: {
    es: "La recta muestra cuánta potencia térmica atraviesa el material para cada diferencia de temperatura.",
    en: "The line shows how much thermal power crosses the material for each temperature difference.",
  },
  domainMeaning: {
    es: "Modelo de conducción estacionaria unidimensional, material homogéneo, área constante y sin generación interna de calor.",
    en: "One-dimensional steady conduction model, homogeneous material, constant area and no internal heat generation.",
  },
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

const buildSeries = ({ k, A, L, dtMin, dtMax, steps = 80 }) => {
  const out = [];
  for (let i = 0; i <= steps; i += 1) {
    const DeltaT = dtMin + (i / steps) * (dtMax - dtMin);
    const Q̇ = (k * A * DeltaT) / L;
    out.push({ DeltaT, Q̇ });
  }
  return out;
};

function ConduccionGraphsCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-");
  const inputValue = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d) : "");

  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "k", aliases: ["conductividad"], default: toNum(p.k ?? p.conductividad, 1) },
      { key: "A", aliases: ["area"], default: toNum(p.A ?? p.area, 1) },
      { key: "L", aliases: ["espesor"], default: toNum(p.L ?? p.espesor, 0.1) },
      { key: "dT", aliases: ["DeltaT", "deltaT"], default: toNum(p.dT ?? p.DeltaT ?? p.deltaT, 50) },
      { key: "dtMin", aliases: ["deltaTmin"], default: toNum(p.dtMin ?? p.deltaTmin, 0) },
      { key: "dtMax", aliases: ["deltaTmax"], default: toNum(p.dtMax ?? p.deltaTmax, 100) },
      { key: "showCurve", aliases: ["mostrarCurva"], default: p.showCurve ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [p]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const k = clamp(toNum(ep.k, 1), 0.01, 500);
  const A = clamp(toNum(ep.A, 1), 0.001, 10);
  const L = clamp(toNum(ep.L, 0.1), 0.001, 10);
  const dT = clamp(toNum(ep.dT, 50), 0, 500);
  const dtMin = clamp(toNum(ep.dtMin, 0), 0, 500);
  const dtMax = clamp(Math.max(toNum(ep.dtMax, 100), dT, dtMin + 1), dtMin + 1, 500);
  const showCurve = !!ep.showCurve;
  const showPoint = !!ep.showPoint;

  const slope = (k * A) / L;
  const Rth = L / (k * A);
  const Pnow = slope * dT;
  const Pmax = slope * dtMax;

  const data = useMemo(
    () => buildSeries({ k, A, L, dtMin, dtMax }),
    [k, A, L, dtMin, dtMax]
  );

  const yDomain = useMemo(() => [0, Math.max(10, Pmax, Pnow) * 1.1], [Pmax, Pnow]);

  const setValue = useCallback(
    (key, value) => {
      exp.startExperiment();
      exp.setValue(key, value);
    },
    [exp]
  );

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12, background: "rgba(15,23,42,0.74)", borderRadius: 18, border: "1px solid rgba(255,255,255,0.12)" }}>
        <div className="v2-card-title">
          {props.title || tt("Conducción térmica · Potencia frente a diferencia de temperatura", "Thermal conduction · Power versus temperature difference")}
        </div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={formula.latex} />.
          {tt(" Ley de Fourier: Q̇ es proporcional a ΔT cuando k, A y L son constantes.", " Fourier law: Q̇ is proportional to ΔT when k, A and L are constant.")}
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
              <span style={{ fontSize: 13, opacity: 0.85 }}><MathInline latex={"k"} /></span>
              <input className="form-control" style={{ width: 74 }} value={inputValue(k, 2)} onChange={(e) => setValue("k", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}><MathInline latex={"A"} /></span>
              <input className="form-control" style={{ width: 74 }} value={inputValue(A, 3)} onChange={(e) => setValue("A", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}><MathInline latex={"L"} /></span>
              <input className="form-control" style={{ width: 74 }} value={inputValue(L, 3)} onChange={(e) => setValue("L", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}><MathInline latex={"\\Delta T"} /></span>
              <input className="form-control" style={{ width: 74 }} value={inputValue(dT, 1)} onChange={(e) => setValue("dT", e.target.value)} />
            </div>
            <button type="button" onClick={exp.resetToCalculator} style={{ marginLeft: "auto" }}>
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
            <Pill active={showCurve} onClick={() => setValue("showCurve", !showCurve)}>{tt("Curva", "Curve")}</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>{tt("Punto", "Point")}</Pill>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="muted" style={{ marginBottom: 10 }}>
          <MathInline latex={formula.latex} /> = <b>{fmt(Pnow, 2)}</b> W
        </div>

        <div className="v2-panel" style={{ padding: 12, marginBottom: 10, fontSize: 13, lineHeight: 1.5 }}>
          {tt("Pendiente", "Slope")} <MathInline latex={formula.slopeLatex} /> = <b>{fmt(slope, 2)}</b> W/K ·{" "}
          <MathInline latex={"R_{th}"} /> = <b>{fmt(Rth, 4)}</b> K/W ·{" "}
          {tt("punto activo", "active point")}: ΔT = <b>{fmt(dT, 1)}</b> K, Q̇ = <b>{fmt(Pnow, 2)}</b> W
        </div>

        <div style={{ width: "100%", height: 340 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis
                dataKey="DeltaT"
                type="number"
                domain={[dtMin, dtMax]}
                tickFormatter={(value) => fmt(value, 0)}
                stroke="rgba(255,255,255,0.4)"
                label={{ value: "ΔT (K)", position: "insideBottomRight", offset: -5, fill: "rgba(255,255,255,0.5)" }}
              />
              <YAxis
                domain={yDomain}
                tickFormatter={(value) => fmt(value, 1)}
                stroke="rgba(255,255,255,0.4)"
                label={{ value: "Q̇ (W)", angle: -90, position: "insideLeft", fill: "rgba(255,255,255,0.5)" }}
              />
              <Tooltip
                formatter={(value) => [fmt(value, 3), "P"]}
                labelFormatter={(value) => `ΔT = ${fmt(value, 1)} K`}
              />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {showCurve ? (
                <Line
                  type="monotone"
                  dataKey="P"
                  name="P(ΔT)"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={false}
                />
              ) : null}
              {showPoint ? (
                <ReferenceDot
                  x={dT}
                  y={Pnow}
                  r={5}
                  fill="#fb923c"
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

ConduccionGraphsCoordView.graph_identity = graph_identity;
ConduccionGraphsCoordView.graphIdentity = graph_identity;
ConduccionGraphsCoordView.axes = axes;
ConduccionGraphsCoordView.formula = formula;
ConduccionGraphsCoordView.profile = profile;
ConduccionGraphsCoordView.pregunta_principal = graph_identity.pregunta_principal;
ConduccionGraphsCoordView.magnitud_estrella = graph_identity.magnitud_estrella;

const ConduccionGraphsCoord = createCoordGraph({
  Component: ConduccionGraphsCoordView,
  displayName: "ConduccionGraphsCoord",
});

ConduccionGraphsCoord.graphContract = ConduccionGraphsCoordView.graphContract;
ConduccionGraphsCoord.graph_identity = ConduccionGraphsCoordView.graph_identity;
ConduccionGraphsCoord.graphIdentity = ConduccionGraphsCoordView.graphIdentity;
ConduccionGraphsCoord.axes = ConduccionGraphsCoordView.axes;
ConduccionGraphsCoord.formula = ConduccionGraphsCoordView.formula;
ConduccionGraphsCoord.profile = ConduccionGraphsCoordView.profile;
ConduccionGraphsCoord.pregunta_principal = ConduccionGraphsCoordView.pregunta_principal;
ConduccionGraphsCoord.magnitud_estrella = ConduccionGraphsCoordView.magnitud_estrella;

export default ConduccionGraphsCoord;
