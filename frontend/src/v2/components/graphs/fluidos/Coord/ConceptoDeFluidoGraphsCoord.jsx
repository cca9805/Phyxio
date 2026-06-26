import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";
import { createCoordGraph } from "../../graphFactories.jsx";

const EPS = 1e-12;
const tt = (uiLang, es, en) => (uiLang === "en" ? en : es);
const toNum = (value, fallback) => {
  if (value === null || value === undefined || value === "") return fallback;
  if (typeof value === "object" && "value" in value) return toNum(value.value, fallback);
  const n = typeof value === "number" ? value : Number(String(value).replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
};
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const fmt = (n, digits = 3, uiLang = "es") => {
  if (!Number.isFinite(n)) return "—";
  const text = n.toFixed(digits);
  return uiLang === "en" ? text : text.replace(".", ",");
};

function pickBag(params, sharedParams, paramsIn) {
  return {
    ...(paramsIn ?? {}),
    ...(sharedParams ?? {}),
    ...(params ?? {}),
  };
}

function readAny(bag, keys, fallback) {
  for (const key of keys) {
    const n = toNum(bag?.[key], Number.NaN);
    if (Number.isFinite(n)) return n;
  }
  return fallback;
}

function buildProfile({ mu, h, uMax, rho, diameter, uiLang }) {
  const cleanMu = Math.max(EPS, mu);
  const cleanH = Math.max(EPS, h);
  const cleanUMax = Math.max(0, uMax);
  const cleanRho = Math.max(EPS, rho);
  const cleanD = Math.max(EPS, diameter);
  const gradMax = cleanUMax / cleanH;
  const tauMax = cleanMu * gradMax;
  const Re = (cleanRho * cleanUMax * cleanD) / cleanMu;

  const data = Array.from({ length: 181 }, (_, i) => {
    const y = (cleanH * i) / 180;
    const duDy = cleanUMax / cleanH;
    const u = duDy * y;
    const tau = cleanMu * duDy;
    return {
      yMm: y * 1000,
      u,
      tau,
      duDy,
    };
  });

  const tauData = Array.from({ length: 181 }, (_, i) => {
    const g = (gradMax * i) / 180;
    return {
      grad: g,
      tau: cleanMu * g,
      tauReference: 0.001 * g,
    };
  });

  const regime = Re < 2300 ? "laminar" : Re < 4000 ? "transition" : "turbulent";
  const regimeLabel =
    regime === "laminar"
      ? tt(uiLang, "laminar", "laminar")
      : regime === "transition"
        ? tt(uiLang, "transición", "transition")
        : tt(uiLang, "turbulento", "turbulent");

  return { data, tauData, gradMax, tauMax, Re, regime, regimeLabel };
}

function ControlRow({ label, value, unit, onChange, min, max, step }) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
        <span style={{ fontSize: 12, fontWeight: 900, opacity: 0.82 }}>{label}</span>
        <span style={{ fontSize: 12, fontWeight: 900, color: "#bfdbfe" }}>
          {value} {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

function ConceptoDeFluidoCoordInner(props) {
  const uiLang = props.uiLang || "es";
  const {
    title,
    params = null,
    sharedParams = null,
    paramsIn = null,
    onGraphStateChange,
    onInterpretationContextChange,
  } = props;
  const seed = useMemo(() => {
    const bag = pickBag(params, sharedParams, paramsIn);
    const mu = readAny(bag, ["mu", "viscosidad_dinamica"], 0.001);
    const h = readAny(bag, ["h", "espesor", "separacion_placas"], 0.004);
    const uMax = readAny(bag, ["uMax", "u", "v", "velocidad_placa"], 0.12);
    const rho = readAny(bag, ["rho", "densidad"], 1000);
    const diameter = readAny(bag, ["D", "d", "diametro"], 0.01);
    return { mu, h, uMax, rho, diameter };
  }, [params, sharedParams, paramsIn]);

  const exp = useExperimentParams({
    params: seed,
    modeDefault: "follow",
    schema: [
      { key: "mu", default: seed.mu },
      { key: "h", default: seed.h },
      { key: "uMax", default: seed.uMax },
      { key: "rho", default: seed.rho },
      { key: "diameter", default: seed.diameter },
    ],
  });

  const p = exp.effectiveParams;
  const mu = clamp(toNum(p.mu, seed.mu), 0.00001, 2);
  const h = clamp(toNum(p.h, seed.h), 0.0005, 0.05);
  const uMax = clamp(toNum(p.uMax, seed.uMax), 0, 2);
  const rho = clamp(toNum(p.rho, seed.rho), 0.1, 2000);
  const diameter = clamp(toNum(p.diameter, seed.diameter), 0.0005, 0.25);

  const built = useMemo(
    () => buildProfile({ mu, h, uMax, rho, diameter, uiLang }),
    [mu, h, uMax, rho, diameter, uiLang]
  );

  React.useEffect(() => {
    const snapshot = {
      graphType: "Coord",
      leafId: "concepto-de-fluido",
      relation: "tau = mu * du_dy",
      target: "tau",
      tau: built.tauMax,
      mu,
      du_dy: built.gradMax,
      rho,
      Re: built.Re,
      regime: built.regime,
    };
    onGraphStateChange?.(snapshot);
    onInterpretationContextChange?.({
      source: "coord",
      target: "tau",
      values: snapshot,
      reading: {
        es: "El gráfico Coord muestra que, para un fluido newtoniano, el esfuerzo cortante aumenta linealmente con el gradiente de velocidad.",
        en: "The Coord graph shows that, for a Newtonian fluid, shear stress increases linearly with the velocity gradient.",
      },
    });
  }, [built, mu, rho, onGraphStateChange, onInterpretationContextChange]);

  const setValue = React.useCallback(
    (key, value) => {
      exp.startExperiment();
      exp.setValue(key, value);
    },
    [exp]
  );

  const cardStyle = {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(15,23,42,0.74)",
    boxShadow: "0 18px 50px rgba(0,0,0,0.28)",
  };

  return (
    <div className="v2-graph" style={{ display: "grid", gap: 14 }}>
      <section style={{ ...cardStyle, padding: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 18, alignItems: "flex-start", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", opacity: 0.62, fontWeight: 900 }}>
              {tt(uiLang, "Concepto de fluido · Coord", "Concept of a Fluid · Coord")}
            </div>
            <h3 style={{ margin: "6px 0 8px", fontSize: 22, fontWeight: 950, color: "#f8fafc" }}>
              {title || tt(uiLang, "Respuesta al esfuerzo cortante", "Response to shear stress")}
            </h3>
            <div style={{ color: "rgba(255,255,255,0.76)", maxWidth: 820, lineHeight: 1.45 }}>
              {tt(
                uiLang,
                "El gráfico conecta el criterio mecánico de fluido con la ley constitutiva newtoniana: no se representa solo velocidad, sino deformación continua medida por el gradiente.",
                "The graph connects the mechanical criterion of a fluid with the Newtonian constitutive law: it does not show velocity alone, but continuous deformation measured by the gradient."
              )}
            </div>
          </div>
          <div style={{ minWidth: 210, padding: 12, borderRadius: 14, background: "rgba(37,99,235,0.18)", border: "1px solid rgba(147,197,253,0.18)" }}>
            <div style={{ fontSize: 12, opacity: 0.72, fontWeight: 900 }}>{tt(uiLang, "Relación núcleo", "Core relation")}</div>
            <div style={{ marginTop: 8, color: "#bfdbfe", fontSize: 18, fontWeight: 900 }}>
              <MathInline latex="\tau = \mu\,\frac{du}{dy}" />
            </div>
          </div>
        </div>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.45fr) minmax(280px,0.55fr)", gap: 14 }}>
        <section style={{ ...cardStyle, padding: 14, minHeight: 360 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <div style={{ fontWeight: 950, color: "#f8fafc" }}>{tt(uiLang, "Perfil de velocidad entre placas", "Velocity profile between plates")}</div>
            <div style={{ fontSize: 12, opacity: 0.72 }}>{tt(uiLang, "eje vertical: posición en el fluido", "vertical axis: position in the fluid")}</div>
          </div>
          <ResponsiveContainer width="100%" height={330}>
            <LineChart data={built.data} margin={{ top: 12, right: 26, left: 12, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.12)" />
              <XAxis dataKey="yMm" stroke="rgba(255,255,255,0.62)" tickFormatter={(v) => fmt(v, 1, uiLang)} label={{ value: "y (mm)", position: "insideBottom", offset: -10, fill: "rgba(255,255,255,0.70)" }} />
              <YAxis stroke="rgba(255,255,255,0.62)" tickFormatter={(v) => fmt(v, 2, uiLang)} label={{ value: "u (m/s)", angle: -90, position: "insideLeft", fill: "rgba(255,255,255,0.70)" }} />
              <Tooltip
                formatter={(value, name) => [fmt(Number(value), name === "duDy" ? 1 : 4, uiLang), name]}
                labelFormatter={(label) => `y = ${fmt(Number(label), 2, uiLang)} mm`}
                contentStyle={{ background: "rgba(15,23,42,0.95)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 12 }}
              />
              <Line type="monotone" dataKey="u" name="u" stroke="#60a5fa" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="tau" name="tau" stroke="#f97316" strokeWidth={2} dot={false} strokeDasharray="6 6" />
            </LineChart>
          </ResponsiveContainer>
        </section>

        <section style={{ ...cardStyle, padding: 14, display: "grid", gap: 12 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontWeight: 950, color: "#f8fafc" }}>{tt(uiLang, "Parámetros", "Parameters")}</div>
            <button
              type="button"
              onClick={exp.resetToCalculator}
              style={{ padding: "7px 10px", borderRadius: 11, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.28)", color: "rgba(255,255,255,0.84)", fontWeight: 900, cursor: "pointer" }}
            >
              {tt(uiLang, "seguir calc.", "follow calc")}
            </button>
          </div>
          <ControlRow label="μ" value={fmt(mu, 5, "en")} unit="Pa·s" min={0.00001} max={0.1} step={0.00001} onChange={(v) => setValue("mu", v)} />
          <ControlRow label="h" value={fmt(h, 4, "en")} unit="m" min={0.0005} max={0.05} step={0.0005} onChange={(v) => setValue("h", v)} />
          <ControlRow label="u máx" value={fmt(uMax, 3, "en")} unit="m/s" min={0} max={2} step={0.01} onChange={(v) => setValue("uMax", v)} />
          <ControlRow label="ρ" value={fmt(rho, 0, "en")} unit="kg/m³" min={0.1} max={2000} step={1} onChange={(v) => setValue("rho", v)} />
          <ControlRow label="D" value={fmt(diameter, 4, "en")} unit="m" min={0.0005} max={0.25} step={0.0005} onChange={(v) => setValue("diameter", v)} />

          <div style={{ borderRadius: 14, padding: 12, background: "rgba(14,165,233,0.14)", border: "1px solid rgba(125,211,252,0.18)", color: "rgba(255,255,255,0.88)", lineHeight: 1.45 }}>
            <div style={{ fontWeight: 950, color: "#bfdbfe", marginBottom: 6 }}>{tt(uiLang, "Lectura instantánea", "Instant reading")}</div>
            <div>du/dy = <b>{fmt(built.gradMax, 1, uiLang)} s⁻¹</b></div>
            <div>τ = <b>{fmt(built.tauMax, 4, uiLang)} Pa</b></div>
            <div>Re = <b>{fmt(built.Re, 0, uiLang)}</b> · {built.regimeLabel}</div>
          </div>
        </section>
      </div>

      <section style={{ ...cardStyle, padding: 14, minHeight: 270 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, gap: 12, flexWrap: "wrap" }}>
          <div style={{ fontWeight: 950, color: "#f8fafc" }}>{tt(uiLang, "Esfuerzo frente a gradiente", "Stress versus gradient")}</div>
          <div style={{ fontSize: 12, opacity: 0.72 }}>
            {tt(uiLang, "pendiente = viscosidad dinámica", "slope = dynamic viscosity")}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={built.tauData} margin={{ top: 12, right: 24, left: 12, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.12)" />
            <XAxis dataKey="grad" stroke="rgba(255,255,255,0.62)" tickFormatter={(v) => fmt(v, 0, uiLang)} label={{ value: "du/dy (s⁻¹)", position: "insideBottom", offset: -10, fill: "rgba(255,255,255,0.70)" }} />
            <YAxis stroke="rgba(255,255,255,0.62)" tickFormatter={(v) => fmt(v, 3, uiLang)} label={{ value: "τ (Pa)", angle: -90, position: "insideLeft", fill: "rgba(255,255,255,0.70)" }} />
            <Tooltip
              formatter={(value, name) => [fmt(Number(value), 5, uiLang), name]}
              labelFormatter={(label) => `du/dy = ${fmt(Number(label), 1, uiLang)} s⁻¹`}
              contentStyle={{ background: "rgba(15,23,42,0.95)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 12 }}
            />
            <ReferenceLine x={built.gradMax} stroke="#fde68a" strokeDasharray="5 6" />
            <Line type="monotone" dataKey="tau" name="τ actual" stroke="#f97316" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="tauReference" name="τ agua ref." stroke="#34d399" strokeWidth={2} dot={false} strokeDasharray="7 7" />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
}

const ConceptoDeFluidoGraphsCoord = createCoordGraph({
  Component: ConceptoDeFluidoCoordInner,
  displayName: "ConceptoDeFluidoGraphsCoord",
});

export default ConceptoDeFluidoGraphsCoord;
