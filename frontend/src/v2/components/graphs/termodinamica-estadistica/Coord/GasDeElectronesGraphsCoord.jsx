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

// E_F(eV) = 1.694 * n28^(2/3), where n28 = n / 1e28 m^-3
const EF_eV = (n28) => 1.694 * Math.pow(Math.max(n28, 1e-6), 2 / 3);

const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo crece la energía de Fermi con la densidad electrónica en el gas de electrones?",
    en: "How does Fermi energy grow with electron density in the electron gas?",
  },
  variable_control: "densidad_electronica",
  magnitud_estrella: "energia_fermi",
  formula: "E_F = (ℏ²/2mₑ)(3π²n)^(2/3)",
  target_interpretable: true,
};

const axes = {
  x: { key: "n28", label: { es: "Densidad electrónica n (10²⁸ m⁻³)", en: "Electron density n (10²⁸ m⁻³)" } },
  y: { key: "ef", label: { es: "Energía de Fermi E_F (eV)", en: "Fermi energy E_F (eV)" } },
};

const formula = {
  latex: "E_F=\\frac{\\hbar^2}{2m_e}(3\\pi^2 n)^{2/3}",
  slopeLatex: "\\frac{2}{3}\\cdot\\frac{E_F}{n}",
  slopeMeaning: {
    es: "La pendiente creciente muestra que la energía de Fermi sube con la densidad electrónica, pero más despacio que de forma lineal.",
    en: "The increasing slope shows that Fermi energy rises with electron density, but more slowly than linearly.",
  },
};

const profile = {
  graph_identity,
  axes,
  formula,
  relation: {
    es: "La energía de Fermi crece con la densidad electrónica elevada a 2/3: mayor densidad obliga a los electrones a ocupar estados de mayor energía, elevando la frontera de llenado.",
    en: "Fermi energy grows with electron density raised to the 2/3 power: higher density forces electrons into higher-energy states, raising the filling boundary.",
  },
  physicalReading: {
    es: "A densidades metálicas típicas (1–10 en unidades de 10²⁸ m⁻³), la energía de Fermi oscila entre 1 y 12 eV, muy por encima de la energía térmica a temperatura ambiente.",
    en: "At typical metallic densities (1–10 in units of 10²⁸ m⁻³), Fermi energy ranges from 1 to 12 eV, far above thermal energy at room temperature.",
  },
  domainMeaning: {
    es: "Válido para el gas de electrones libre no relativista tridimensional, sin interacciones ni bandas.",
    en: "Valid for the nonrelativistic free 3D electron gas without interactions or band structure.",
  },
};

const buildSeries = ({ nMin, nMax, steps = 200 }) => {
  const out = [];
  for (let i = 0; i <= steps; i += 1) {
    const n28 = nMin + ((nMax - nMin) * i) / steps;
    const ef = EF_eV(n28);
    out.push({ n28: parseFloat(n28.toFixed(4)), ef: parseFloat(ef.toFixed(4)) });
  }
  return out;
};

function GasDeElectronesGraphsCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "−");
  const inputValue = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d) : "");

  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "nMin", aliases: ["n_min", "nmin"], default: toNum(p.nMin ?? p.n_min ?? p.nmin, 0.1) },
      { key: "nMax", aliases: ["n_max", "nmax"], default: toNum(p.nMax ?? p.n_max ?? p.nmax, 10.0) },
      { key: "nVal", aliases: ["n_val", "densidad_electronica"], default: toNum(p.nVal ?? p.n_val ?? p.densidad_electronica, 8.5) },
    ],
    [p]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const nMin = Math.max(toNum(ep.nMin, 0.1), 0.01);
  const nMax = Math.max(toNum(ep.nMax, 10.0), nMin + 0.5);
  const nVal = Math.min(Math.max(toNum(ep.nVal, 8.5), nMin), nMax);

  const efAtVal = EF_eV(nVal);

  const data = useMemo(() => buildSeries({ nMin, nMax }), [nMin, nMax]);

  const yMax = data.length > 0 ? Math.max(...data.map((d) => d.ef)) * 1.1 : 15;

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
              "Energía de Fermi · gas de electrones libre",
              "Fermi energy · free electron gas"
            )}
        </div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={formula.latex} />.{" "}
          {tt(
            "Mayor densidad electrónica eleva la frontera de Fermi: los electrones adicionales deben ocupar estados de mayor energía.",
            "Higher electron density raises the Fermi boundary: additional electrons must occupy higher-energy states."
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
              {tt("n (10²⁸ m⁻³)", "n (10²⁸ m⁻³)")}
            </span>
            <input
              className="form-control"
              style={{ width: 80 }}
              value={inputValue(nVal, 2)}
              onChange={(e) => {
                exp.startExperiment();
                exp.setValue("nVal", e.target.value);
              }}
            />
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>{tt("n mín.", "n min.")}</span>
            <input
              className="form-control"
              style={{ width: 70 }}
              value={inputValue(nMin, 2)}
              onChange={(e) => {
                exp.startExperiment();
                exp.setValue("nMin", e.target.value);
              }}
            />
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>{tt("n máx.", "n max.")}</span>
            <input
              className="form-control"
              style={{ width: 70 }}
              value={inputValue(nMax, 1)}
              onChange={(e) => {
                exp.startExperiment();
                exp.setValue("nMax", e.target.value);
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
          {tt("Energía de Fermi", "Fermi energy")}{" "}
          <MathInline latex={"E_F"} /> ={" "}
          <b>{fmt(efAtVal, 2)} eV</b>{" "}
          {tt(
            `para n = ${fmt(nVal, 2)} · 10²⁸ m⁻³`,
            `at n = ${fmt(nVal, 2)} · 10²⁸ m⁻³`
          )}
        </div>

        <div style={{ width: "100%", height: 320 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis
                dataKey="n28"
                type="number"
                domain={[nMin, nMax]}
                tickFormatter={(v) => v.toFixed(1)}
                stroke="rgba(255,255,255,0.4)"
                label={{
                  value: tt("n (10²⁸ m⁻³)", "n (10²⁸ m⁻³)"),
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
                  value: "E_F (eV)",
                  angle: -90,
                  position: "insideLeft",
                  fill: "rgba(255,255,255,0.5)",
                }}
              />
              <Tooltip
                formatter={(value) => [`${value.toFixed(3)} eV`, "E_F"]}
                labelFormatter={(v) => `n = ${Number(v).toFixed(2)} · 10²⁸ m⁻³`}
              />
              <Line type="monotone" dataKey="ef" stroke="#f59e0b" strokeWidth={3} dot={false} />
              <ReferenceDot x={nVal} y={efAtVal} r={5} fill="#fb923c" stroke="none" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

GasDeElectronesGraphsCoordView.graph_identity = graph_identity;
GasDeElectronesGraphsCoordView.graphIdentity = graph_identity;
GasDeElectronesGraphsCoordView.axes = axes;
GasDeElectronesGraphsCoordView.formula = formula;
GasDeElectronesGraphsCoordView.profile = profile;
GasDeElectronesGraphsCoordView.pregunta_principal = graph_identity.pregunta_principal;
GasDeElectronesGraphsCoordView.magnitud_estrella = graph_identity.magnitud_estrella;

const GasDeElectronesGraphsCoord = createCoordGraph({
  Component: GasDeElectronesGraphsCoordView,
  displayName: "GasDeElectronesGraphsCoord",
});

GasDeElectronesGraphsCoord.graph_identity = GasDeElectronesGraphsCoordView.graph_identity;
GasDeElectronesGraphsCoord.graphIdentity = GasDeElectronesGraphsCoordView.graphIdentity;
GasDeElectronesGraphsCoord.axes = GasDeElectronesGraphsCoordView.axes;
GasDeElectronesGraphsCoord.formula = GasDeElectronesGraphsCoordView.formula;
GasDeElectronesGraphsCoord.profile = GasDeElectronesGraphsCoordView.profile;
GasDeElectronesGraphsCoord.pregunta_principal = GasDeElectronesGraphsCoordView.pregunta_principal;
GasDeElectronesGraphsCoord.magnitud_estrella = GasDeElectronesGraphsCoordView.magnitud_estrella;

export default GasDeElectronesGraphsCoord;
