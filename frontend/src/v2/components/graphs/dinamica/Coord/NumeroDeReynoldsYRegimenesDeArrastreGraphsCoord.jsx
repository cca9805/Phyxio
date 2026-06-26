import React, { useCallback, useMemo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceArea,
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
const pickNum = (obj, keys, fb) => {
  for (const k of keys) {
    const v = obj?.[k];
    if (v === undefined || v === null || v === "") continue;
    const n = toNum(v, NaN);
    if (Number.isFinite(n)) return n;
  }
  return fb;
};

const graphIdentity = {
  pregunta_principal: {
    es: "Como leer en Coord y en SVG que Re no es una fuerza, sino el criterio que decide si domina la viscosidad o la inercia y, por tanto, que modelo de arrastre conviene usar?",
    en: "How can we read in Coord and in the SVG that Re is not a force, but the criterion deciding whether viscosity or inertia dominates and therefore which drag model should be used?",
  },
};

const buildSeries = ({ rho, L, eta, vmax = 30, step = 0.5 }) => {
  const out = [];
  for (let v = step; v <= vmax + 1e-9; v += step) out.push({ x: v, Re: (rho * v * L) / eta });
  return out;
};

const regimeLabel = (Re, lang) => {
  if (Re < 1) return lang === "en" ? "Stokes regime" : "Regimen de Stokes";
  if (Re < 1000) return lang === "en" ? "Transition region" : "Region transicional";
  return lang === "en" ? "Inertial regime" : "Regimen inercial";
};

function NumeroDeReynoldsYRegimenesDeArrastreGraphsCoordView(props) {
  void graphIdentity;
  const uiLang = props.lang === "en" ? "en" : "es";
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-");
  const tt = (es, en) => (uiLang === "en" ? en : es);

  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "rho", aliases: ["densidad"], default: pickNum(p, ["rho", "densidad"], 1.2) },
      { key: "L", aliases: ["longitud"], default: pickNum(p, ["L", "longitud"], 0.1) },
      { key: "eta", aliases: ["viscosidad"], default: pickNum(p, ["eta", "viscosidad"], 0.000018) },
      { key: "v", aliases: ["velocidad"], default: pickNum(p, ["v", "velocidad"], 12) },
    ],
    [
      pickNum(p, ["rho", "densidad"], 1.2),
      pickNum(p, ["L", "longitud"], 0.1),
      pickNum(p, ["eta", "viscosidad"], 0.000018),
      pickNum(p, ["v", "velocidad"], 12),
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const rho = clamp(toNum(ep.rho, 1.2), 0.01, 5000);
  const L = clamp(toNum(ep.L, 0.1), 0.001, 5);
  const eta = clamp(toNum(ep.eta, 0.000018), 0.000001, 10);
  const v = clamp(toNum(ep.v, 12), 0.1, 30);

  const data = useMemo(() => buildSeries({ rho, L, eta }), [rho, L, eta]);
  const Re = (rho * v * L) / eta;
  const yMax = Math.max(10, Re, ...data.map((item) => item.Re)) * 1.05;

  const setValue = useCallback((key, value) => {
    exp.startExperiment();
    exp.setValue(key, value);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{tt("Numero de Reynolds (Coord)", "Reynolds number (Coord)")}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"Re = \\frac{\\rho v L}{\\eta}"} />. {tt("El valor de", "The value of")} <b>Re</b> {tt("elige el regimen de arrastre", "selects the drag regime")}.
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
          {[
            ["rho", rho, 2],
            ["L", L, 3],
            ["eta", eta, 6],
            ["v", v, 2],
          ].map(([key, value, digits]) => (
            <div key={key} style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>{key}</span>
              <input
                className="form-control"
                style={{ width: 86 }}
                value={fmt(value, digits).replace(",", ".")}
                onChange={(e) => setValue(key, e.target.value)}
              />
            </div>
          ))}

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
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="muted" style={{ marginBottom: 10 }}>
          Re = <b>{fmt(Re, 1)}</b>. {tt("Lectura:", "Reading:")} <b>{regimeLabel(Re, uiLang)}</b>
        </div>

        <div style={{ width: "100%", height: 340 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="x" type="number" domain={[0, 30]} tickFormatter={(value) => fmt(value, 1)} label={{ value: "v (m/s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis domain={[0, yMax]} tickFormatter={(value) => fmt(value, 0)} label={{ value: "Re", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 2), name]} labelFormatter={(value) => `v = ${fmt(value, 2)} m/s`} />
              <ReferenceArea y1={0} y2={1} fill="rgba(34,197,94,0.10)" />
              <ReferenceArea y1={1} y2={1000} fill="rgba(245,158,11,0.10)" />
              <ReferenceArea y1={1000} y2={yMax} fill="rgba(239,68,68,0.10)" />
              <ReferenceLine y={1} stroke="#22c55e" strokeDasharray="5 5" />
              <ReferenceLine y={1000} stroke="#ef4444" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="Re" name="Re(v)" stroke="#3b82f6" strokeWidth={3} dot={false} />
              <ReferenceDot x={v} y={Re} r={5} fill="#fb923c" stroke="none" />
              <ReferenceLine x={v} stroke="#64748b" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

const NumeroDeReynoldsYRegimenesDeArrastreGraphsCoord = createCoordGraph({
  Component: NumeroDeReynoldsYRegimenesDeArrastreGraphsCoordView,
  displayName: "NumeroDeReynoldsYRegimenesDeArrastreGraphsCoord",
});

NumeroDeReynoldsYRegimenesDeArrastreGraphsCoord.graphContract = NumeroDeReynoldsYRegimenesDeArrastreGraphsCoordView.graphContract;
NumeroDeReynoldsYRegimenesDeArrastreGraphsCoord.graph_identity = NumeroDeReynoldsYRegimenesDeArrastreGraphsCoordView.graph_identity;
NumeroDeReynoldsYRegimenesDeArrastreGraphsCoord.axes = NumeroDeReynoldsYRegimenesDeArrastreGraphsCoordView.axes;
NumeroDeReynoldsYRegimenesDeArrastreGraphsCoord.formula = NumeroDeReynoldsYRegimenesDeArrastreGraphsCoordView.formula;
NumeroDeReynoldsYRegimenesDeArrastreGraphsCoord.profile = NumeroDeReynoldsYRegimenesDeArrastreGraphsCoordView.profile;

export default NumeroDeReynoldsYRegimenesDeArrastreGraphsCoord;
