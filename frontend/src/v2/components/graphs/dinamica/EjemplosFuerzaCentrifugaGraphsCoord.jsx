import React, { useMemo, useCallback } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceDot,
  ReferenceLine,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const Fcf = (m, omega, r) => m * omega * omega * r;

const PRESETS = {
  carrusel: { m: 70, r: 4, omega: 1.2, desc: "Persona en carrusel: fuerza centrifuga aparente radial hacia afuera." },
  centrifuga: { m: 0.2, r: 0.3, omega: 40, desc: "Muestra en centrifuga: gran omega produce fuerzas elevadas." },
  curva: { m: 1200, r: 45, omega: 0.35, desc: "Coche en curva visto desde el interior del vehiculo." },
  rotor: { m: 5, r: 0.25, omega: 80, desc: "Rotor industrial con masa desbalanceada." },
};

function buildSeries(m, r, omegaMax, step = 0.2) {
  const out = [];
  for (let omega = 0; omega <= omegaMax + 1e-9; omega += step) {
    out.push({ omega, F: Fcf(m, omega, r) });
  }
  return out;
}

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

export default function EjemplosFuerzaCentrifugaGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "example", aliases: ["ejemplo"], default: p.example || "carrusel" },
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, PRESETS.carrusel.m) },
      { key: "r", aliases: ["radio"], default: toNum(p.r ?? p.radio, PRESETS.carrusel.r) },
      { key: "omega", aliases: ["w"], default: toNum(p.omega ?? p.w, PRESETS.carrusel.omega) },
      { key: "showCurve", aliases: ["mostrarCurva"], default: p.showCurve ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
      { key: "showRef", aliases: ["mostrarRef"], default: p.showRef ?? true },
    ],
    [p.example, p.m, p.masa, p.r, p.radio, p.omega, p.w, p.showCurve, p.showPoint, p.showRef]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const example = PRESETS[ep.example] ? ep.example : "carrusel";
  const m = clamp(toNum(ep.m, PRESETS[example].m), 0.01, 5000);
  const r = clamp(toNum(ep.r, PRESETS[example].r), 0.05, 1e6);
  const omega = clamp(toNum(ep.omega, PRESETS[example].omega), 0, 200);
  const showCurve = !!ep.showCurve;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const omegaMax = example === "curva" ? 2 : Math.max(10, omega * 1.3);
  const step = omegaMax > 50 ? 0.5 : 0.05;
  const data = useMemo(() => buildSeries(m, r, omegaMax, step), [m, r, omegaMax, step]);

  const v = omega * r;
  const force = Fcf(m, omega, r);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v0) => {
    exp.startExperiment();
    exp.setValue(k, v0);
  }, [exp]);

  const setExample = useCallback((nextExample) => {
    const preset = PRESETS[nextExample] ?? PRESETS.carrusel;
    exp.startExperiment();
    exp.setValue("example", nextExample);
    exp.setValue("m", preset.m);
    exp.setValue("r", preset.r);
    exp.setValue("omega", preset.omega);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Ejemplos de fuerza centrifuga (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>{PRESETS[example].desc}</div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <Pill active={example === "carrusel"} onClick={() => setExample("carrusel")}>Carrusel</Pill>
            <Pill active={example === "centrifuga"} onClick={() => setExample("centrifuga")}>Centrifuga</Pill>
            <Pill active={example === "curva"} onClick={() => setExample("curva")}>Curva</Pill>
            <Pill active={example === "rotor"} onClick={() => setExample("rotor")}>Rotor</Pill>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>m</span>
              <input className="form-control" style={{ width: 90 }} value={fmt(m, 2).replace(",", ".")} onChange={(e) => setValue("m", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>r</span>
              <input className="form-control" style={{ width: 90 }} value={fmt(r, 3).replace(",", ".")} onChange={(e) => setValue("r", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>omega</span>
              <input className="form-control" style={{ width: 90 }} value={fmt(omega, 3).replace(",", ".")} onChange={(e) => setValue("omega", e.target.value)} />
            </div>

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
              Seguir calculadora
            </button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showCurve} onClick={() => setValue("showCurve", !showCurve)}>F(omega)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>
              <MathInline latex={"F_{cf}=m\\omega^2r=\\frac{mv^2}{r},\\quad v=\\omega r"} />
            </div>
            <div style={{ marginTop: 6, fontSize: 13, opacity: 0.9 }}>
              v = <b>{fmt(v, 3)}</b> m/s | F_cf = <b>{fmt(force, 3)}</b> N
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Dependencia de F_cf con omega</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="omega" type="number" domain={[0, omegaMax]} tickFormatter={(v0) => fmt(v0, 2)} label={{ value: "omega (rad/s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(v0) => fmt(v0, 1)} label={{ value: "F_cf (N)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 5), name]} labelFormatter={(x) => `omega = ${fmt(x, 3)} rad/s`} />
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showCurve ? <Line type="monotone" dataKey="F" name="F_cf" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showPoint ? <ReferenceDot x={omega} y={force} r={6} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
