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

const shapePresets = {
  streamlined: { C_d: 0.08, label: { es: "perfil afinado", en: "streamlined body" } },
  cyclist: { C_d: 0.9, label: { es: "ciclista", en: "cyclist" } },
  cube: { C_d: 1.05, label: { es: "cubo", en: "cube" } },
};

const graphIdentity = {
  pregunta_principal: {
    es: "Como leer en Coord y en SVG que C_d no es una fuerza, sino un resumen de forma y estela que cambia F_d y la potencia P_d necesaria para atravesar el fluido?",
    en: "How can we read in Coord and in the SVG that C_d is not a force, but a summary of shape and wake that changes drag F_d and the power P_d needed to move through the fluid?",
  },
};

const buildSeries = ({ rho, A, C_d, vmax = 40, step = 1 }) => {
  const out = [];
  for (let v = 0; v <= vmax + 1e-9; v += step) {
    const F_d = 0.5 * rho * C_d * A * v * v;
    out.push({ x: v, F_d, P_d: F_d * v });
  }
  return out;
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

function CoeficienteDeArrastreGraphsCoordView(props) {
  void graphIdentity;
  const uiLang = props.lang === "en" ? "en" : "es";
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-");
  const tt = (es, en) => (uiLang === "en" ? en : es);

  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "shape", aliases: ["forma"], default: p.shape || "cyclist" },
      { key: "rho", aliases: ["densidad"], default: pickNum(p, ["rho", "densidad"], 1.2) },
      { key: "A", aliases: ["area"], default: pickNum(p, ["A", "area"], 0.7) },
      { key: "v", aliases: ["velocidad"], default: pickNum(p, ["v", "velocidad"], 15) },
      { key: "showForce", aliases: ["mostrarFuerza"], default: p.showForce ?? true },
      { key: "showPower", aliases: ["mostrarPotencia"], default: p.showPower ?? true },
    ],
    [
      p.shape,
      pickNum(p, ["rho", "densidad"], 1.2),
      pickNum(p, ["A", "area"], 0.7),
      pickNum(p, ["v", "velocidad"], 15),
      p.showForce,
      p.showPower,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const shape = shapePresets[ep.shape] ? ep.shape : "cyclist";
  const rho = clamp(toNum(ep.rho, 1.2), 0.1, 2000);
  const A = clamp(toNum(ep.A, 0.7), 0.05, 5);
  const v = clamp(toNum(ep.v, 15), 0, 40);
  const C_d = shapePresets[shape].C_d;
  const showForce = !!ep.showForce;
  const showPower = !!ep.showPower;

  const data = useMemo(() => buildSeries({ rho, A, C_d }), [rho, A, C_d]);
  const F_d = 0.5 * rho * C_d * A * v * v;
  const P_d = F_d * v;
  const yMax = Math.max(10, F_d, P_d, ...data.map((item) => item.P_d)) * 1.08;

  const setValue = useCallback((key, value) => {
    exp.startExperiment();
    exp.setValue(key, value);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{tt("Coeficiente de arrastre (Coord)", "Drag coefficient (Coord)")}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"F_d = \\frac{1}{2}\\rho C_d A v^2"} /> {tt("y", "and")} <MathInline latex={"P_d = F_d v"} />.
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
            {Object.entries(shapePresets).map(([key, preset]) => (
              <Pill key={key} active={shape === key} onClick={() => setValue("shape", key)}>
                {uiLang === "en" ? preset.label.en : preset.label.es}
              </Pill>
            ))}

            {[
              ["rho", rho, 2],
              ["A", A, 2],
              ["v", v, 2],
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
            <Pill active={showForce} onClick={() => setValue("showForce", !showForce)}>{tt("Fuerza", "Force")}</Pill>
            <Pill active={showPower} onClick={() => setValue("showPower", !showPower)}>{tt("Potencia", "Power")}</Pill>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="muted" style={{ marginBottom: 10 }}>
          C_d = <b>{fmt(C_d, 2)}</b>, F_d = <b>{fmt(F_d, 2)}</b> N, P_d = <b>{fmt(P_d, 2)}</b> W
        </div>

        <div style={{ width: "100%", height: 340 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="x" type="number" domain={[0, 40]} tickFormatter={(value) => fmt(value, 0)} label={{ value: "v (m/s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis domain={[0, yMax]} tickFormatter={(value) => fmt(value, 1)} label={{ value: tt("Fuerza / Potencia", "Force / Power"), angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 3), name]} labelFormatter={(value) => `v = ${fmt(value, 1)} m/s`} />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {showForce ? <Line type="monotone" dataKey="F_d" name="F_d" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showPower ? <Line type="monotone" dataKey="P_d" name="P_d" stroke="#f97316" strokeWidth={3} dot={false} /> : null}
              {showForce ? <ReferenceDot x={v} y={F_d} r={5} fill="#60a5fa" stroke="none" /> : null}
              {showPower ? <ReferenceDot x={v} y={P_d} r={5} fill="#fb923c" stroke="none" /> : null}
              <ReferenceLine x={v} stroke="#64748b" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

const CoeficienteDeArrastreGraphsCoord = createCoordGraph({
  Component: CoeficienteDeArrastreGraphsCoordView,
  displayName: "CoeficienteDeArrastreGraphsCoord",
});

CoeficienteDeArrastreGraphsCoord.graphContract = CoeficienteDeArrastreGraphsCoordView.graphContract;
CoeficienteDeArrastreGraphsCoord.graph_identity = CoeficienteDeArrastreGraphsCoordView.graph_identity;
CoeficienteDeArrastreGraphsCoord.axes = CoeficienteDeArrastreGraphsCoordView.axes;
CoeficienteDeArrastreGraphsCoord.formula = CoeficienteDeArrastreGraphsCoordView.formula;
CoeficienteDeArrastreGraphsCoord.profile = CoeficienteDeArrastreGraphsCoordView.profile;

export default CoeficienteDeArrastreGraphsCoord;
