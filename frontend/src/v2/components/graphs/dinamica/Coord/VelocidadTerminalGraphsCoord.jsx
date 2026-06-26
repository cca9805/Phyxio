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
const pickNum = (obj, keys, fb) => {
  for (const k of keys) {
    const v = obj?.[k];
    if (v === undefined || v === null || v === "") continue;
    const n = toNum(v, NaN);
    if (Number.isFinite(n)) return n;
  }
  return fb;
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

const graphIdentity = {
  pregunta_principal: {
    es: "Como leer en Coord y en DCL que la velocidad terminal aparece cuando el peso se compensa con el arrastre y que rho, C_d y A reducen v_t?",
    en: "How can we read in Coord and in an FBD that terminal velocity appears when weight is balanced by drag and that rho, C_d, and A reduce v_t?",
  },
};

const buildSeries = ({ g, b, rho, C_d, A, mMax = 120, step = 2 }) => {
  const out = [];
  for (let m = step; m <= mMax + 1e-9; m += step) {
    out.push({
      x: m,
      vtLinear: (m * g) / b,
      vtQuadratic: Math.sqrt((2 * m * g) / (rho * C_d * A)),
    });
  }
  return out;
};

function VelocidadTerminalGraphsCoordView(props) {
  void graphIdentity;
  const uiLang = props.lang === "en" ? "en" : "es";
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-");
  const tt = (es, en) => (uiLang === "en" ? en : es);

  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: pickNum(p, ["m", "masa"], 80) },
      { key: "g", aliases: ["gravedad"], default: pickNum(p, ["g", "gravedad"], 9.81) },
      { key: "b", aliases: ["coef_lineal"], default: pickNum(p, ["b", "coef_lineal"], 12) },
      { key: "rho", aliases: ["densidad"], default: pickNum(p, ["rho", "densidad"], 1.2) },
      { key: "C_d", aliases: ["Cd"], default: pickNum(p, ["C_d", "Cd"], 1) },
      { key: "A", aliases: ["area"], default: pickNum(p, ["A", "area"], 0.7) },
      { key: "showLinear", aliases: ["mostrarLineal"], default: p.showLinear ?? true },
      { key: "showQuadratic", aliases: ["mostrarCuadratico"], default: p.showQuadratic ?? true },
    ],
    [
      pickNum(p, ["m", "masa"], 80),
      pickNum(p, ["g", "gravedad"], 9.81),
      pickNum(p, ["b", "coef_lineal"], 12),
      pickNum(p, ["rho", "densidad"], 1.2),
      pickNum(p, ["C_d", "Cd"], 1),
      pickNum(p, ["A", "area"], 0.7),
      p.showLinear,
      p.showQuadratic,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(toNum(ep.m, 80), 1, 120);
  const g = clamp(toNum(ep.g, 9.81), 0.1, 30);
  const b = clamp(toNum(ep.b, 12), 0.1, 60);
  const rho = clamp(toNum(ep.rho, 1.2), 0.1, 2000);
  const C_d = clamp(toNum(ep.C_d, 1), 0.05, 2);
  const A = clamp(toNum(ep.A, 0.7), 0.05, 5);
  const showLinear = !!ep.showLinear;
  const showQuadratic = !!ep.showQuadratic;

  const data = useMemo(() => buildSeries({ g, b, rho, C_d, A }), [g, b, rho, C_d, A]);
  const vtLinear = (m * g) / b;
  const vtQuadratic = Math.sqrt((2 * m * g) / (rho * C_d * A));
  const yMax = Math.max(10, vtLinear, vtQuadratic, ...data.map((item) => item.vtLinear), ...data.map((item) => item.vtQuadratic)) * 1.08;

  const setValue = useCallback((key, value) => {
    exp.startExperiment();
    exp.setValue(key, value);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{tt("Velocidad terminal (Coord)", "Terminal velocity (Coord)")}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"v_t = \\frac{m g}{b}"} /> {tt("y", "and")} <MathInline latex={"v_t = \\sqrt{\\frac{2 m g}{\\rho C_d A}}"} />.
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
            {[
              ["m", m, 1],
              ["g", g, 2],
              ["b", b, 2],
              ["rho", rho, 2],
              ["C_d", C_d, 2],
              ["A", A, 2],
            ].map(([key, value, digits]) => (
              <div key={key} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 13, opacity: 0.85 }}>{key}</span>
                <input
                  className="form-control"
                  style={{ width: 74 }}
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
            <Pill active={showLinear} onClick={() => setValue("showLinear", !showLinear)}>{tt("Modelo lineal", "Linear model")}</Pill>
            <Pill active={showQuadratic} onClick={() => setValue("showQuadratic", !showQuadratic)}>{tt("Modelo cuadratico", "Quadratic model")}</Pill>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="muted" style={{ marginBottom: 10 }}>
          <span>{tt("Para la masa seleccionada:", "For the selected mass:")} </span>
          <b>{tt("lineal", "linear")}</b> = {fmt(vtLinear, 2)} m/s, <b>{tt("cuadratico", "quadratic")}</b> = {fmt(vtQuadratic, 2)} m/s
        </div>

        <div style={{ width: "100%", height: 340 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="x" type="number" domain={[0, 120]} tickFormatter={(value) => fmt(value, 0)} label={{ value: "m (kg)", position: "insideBottomRight", offset: -5 }} />
              <YAxis domain={[0, yMax]} tickFormatter={(value) => fmt(value, 1)} label={{ value: "v_t (m/s)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 3), name]} labelFormatter={(value) => `m = ${fmt(value, 1)} kg`} />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {showLinear ? <Line type="monotone" dataKey="vtLinear" name="v_t lineal" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showQuadratic ? <Line type="monotone" dataKey="vtQuadratic" name="v_t cuadratico" stroke="#f97316" strokeWidth={3} dot={false} /> : null}
              {showLinear ? <ReferenceDot x={m} y={vtLinear} r={5} fill="#60a5fa" stroke="none" /> : null}
              {showQuadratic ? <ReferenceDot x={m} y={vtQuadratic} r={5} fill="#fb923c" stroke="none" /> : null}
              <ReferenceLine x={m} stroke="#64748b" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

const VelocidadTerminalGraphsCoord = createCoordGraph({
  Component: VelocidadTerminalGraphsCoordView,
  displayName: "VelocidadTerminalGraphsCoord",
});

VelocidadTerminalGraphsCoord.graphContract = VelocidadTerminalGraphsCoordView.graphContract;
VelocidadTerminalGraphsCoord.graph_identity = VelocidadTerminalGraphsCoordView.graph_identity;
VelocidadTerminalGraphsCoord.axes = VelocidadTerminalGraphsCoordView.axes;
VelocidadTerminalGraphsCoord.formula = VelocidadTerminalGraphsCoordView.formula;
VelocidadTerminalGraphsCoord.profile = VelocidadTerminalGraphsCoordView.profile;

export default VelocidadTerminalGraphsCoord;
