import React, { useEffect, useMemo } from "react";
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

/**
 * createCoordGraph(
 * pregunta_principal: {
 *   es: "¿Como cambian el campo y el potencial gravitatorio con la distancia radial?",
 *   en: "How do gravitational field and potential change with radial distance?"
 * }
 * formula: g = (G*M)/(r^2), V = -(G*M)/r
 * Eje X: Distancia radial [[r]]
 * Eje Y: Campo [[g]] y potencial [[V]]
 * )
 */

const G = 6.674e-11;
const GRAPH_META = {
  pregunta_principal: {
    es: "Como cambian el campo y el potencial gravitatorio cuando aumenta la distancia radial",
    en: "How do gravitational field and potential change as radial distance increases",
  },
};

const toNum = (v, d) => {
  const n = Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : d;
};
const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

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

export default function CampoYPotencialGravitatorioGraphsCoord({
  title,
  params,
  paramsIn = {},
  sharedParams = null,
  onGraphStateChange,
  onInterpretationContextChange,
  lang = "es",
}) {
  const uiLang = lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  const calcParams = sharedParams?.__calc ?? sharedParams ?? paramsIn ?? params ?? {};

  const schema = useMemo(
    () => [
      { key: "M", default: toNum(calcParams?.M, 5.97e24) },
      { key: "rMin", default: toNum(calcParams?.rMin, 6.4e6) },
      { key: "rMax", default: toNum(calcParams?.rMax, 3.6e7) },
      { key: "showG", default: calcParams?.showG ?? true },
      { key: "showV", default: calcParams?.showV ?? true },
      { key: "showZero", default: calcParams?.showZero ?? true },
    ],
    [calcParams]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const p = exp.effectiveParams;
  const M = Math.max(1, toNum(p.M, 5.97e24));
  const rMin = Math.max(1, toNum(p.rMin, 6.4e6));
  const rMax = Math.max(rMin + 1, toNum(p.rMax, 3.6e7));
  const showG = !!p.showG;
  const showV = !!p.showV;
  const showZero = !!p.showZero;

  const data = useMemo(() => {
    const out = [];
    const nPts = 220;
    for (let i = 0; i <= nPts; i += 1) {
      const r = rMin + ((rMax - rMin) * i) / nPts;
      out.push({
        r,
        g: (G * M) / (r * r),
        V: -(G * M) / r / 1e6,
      });
    }
    return out;
  }, [M, rMin, rMax]);

  const refR = 0.5 * (rMin + rMax);
  const gRef = (G * M) / (refR * refR);
  const vRef = -(G * M) / refR / 1e6;

  useEffect(() => {
    const stateOut = {
      target: "g",
      gRef,
      vRef,
      M,
      rMin,
      rMax,
      label: tt("Lectura de campo y potencial", "Field and potential reading"),
    };
    onGraphStateChange?.(stateOut);
    onInterpretationContextChange?.(stateOut);
  }, [M, gRef, onGraphStateChange, onInterpretationContextChange, rMax, rMin, tt, vRef]);

  const setValue = (k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || tt("Campo y potencial gravitatorio (Coord)", "Gravitational field and potential (Coord)")}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"g=\\frac{G \\cdot M}{r^2},\\quad V=-\\frac{G \\cdot M}{r}"} />
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
              ["M", M],
              ["rMin", rMin],
              ["rMax", rMax],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 13, opacity: 0.85 }}>{k}</span>
                <input className="form-control" style={{ width: 120 }} value={v} onChange={(e) => setValue(k, e.target.value)} />
              </div>
            ))}
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>{tt("Experimentar", "Experiment")}</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>{tt("Seguir calculadora", "Follow calculator")}</button>
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
            <Pill active={showG} onClick={() => setValue("showG", !showG)}>g(r)</Pill>
            <Pill active={showV} onClick={() => setValue("showV", !showV)}>V(r)</Pill>
            <Pill active={showZero} onClick={() => setValue("showZero", !showZero)}>{tt("eje y=0", "y=0 axis")}</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12, fontSize: 13, opacity: 0.9 }}>
            {tt("Lectura en r*", "Reading at r*")}: g(r*)=<b>{fmt(gRef, 4)}</b> m/s2 | V(r*)=<b>{fmt(vRef, 2)}</b> x10^6 J/kg
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{tt("Caida de campo y potencial con la distancia", "Field and potential decay with distance")}</div>
        <div style={{ width: "100%", height: 350, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 12, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="r" tickFormatter={(v) => `${fmt(v / 1e6, 1)}`} label={{ value: tt("r (10^6 m)", "r (10^6 m)"), position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(v) => fmt(v, 1)} />
              <Tooltip
                formatter={(v, name) => [fmt(Number(v), 4), name === "g" ? tt("campo g", "field g") : tt("potencial V", "potential V")]}
                labelFormatter={(v) => `${tt("distancia", "distance")} r=${fmt(v / 1e6, 2)} x10^6 m`}
              />
              {showZero ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showG ? <Line type="monotone" dataKey="g" name={tt("campo g", "field g")} stroke="#34d399" strokeWidth={2.8} dot={false} /> : null}
              {showV ? <Line type="monotone" dataKey="V" name={tt("potencial V", "potential V")} stroke="#f59e0b" strokeWidth={2.8} dot={false} /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
