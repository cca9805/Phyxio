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

const OMEGA_EARTH = 7.2921159e-5;
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};
const deg2rad = (d) => (Math.PI * d) / 180;

const aCor = (omega, vRel, latDeg) => 2 * omega * vRel * Math.sin(deg2rad(latDeg));
const fCor = (m, omega, vRel, latDeg) => m * aCor(omega, vRel, latDeg);

const PRESETS = {
  avion: { m: 10000, vRel: 250, lat: 45, t: 3600, desc: "Vuelo de larga distancia: pequena a_cor, acumulable en el tiempo." },
  viento: { m: 1, vRel: 30, lat: 50, t: 7200, desc: "Masa de aire: Coriolis influye en la trayectoria de sistemas meteorologicos." },
  oceano: { m: 500, vRel: 1.2, lat: 60, t: 86400, desc: "Corriente oceanica: desviacion gradual a gran escala." },
  proyectil: { m: 20, vRel: 300, lat: 40, t: 120, desc: "Proyectil de largo alcance: correccion lateral apreciable." },
};

function buildSeries(omega, latDeg, vMax, step = 2) {
  const out = [];
  for (let vRel = 0; vRel <= vMax + 1e-9; vRel += step) {
    out.push({ vRel, a_cor: aCor(omega, vRel, latDeg) });
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

export default function AplicacionesFisicasGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "example", aliases: ["ejemplo"], default: p.example || "avion" },
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, PRESETS.avion.m) },
      { key: "vRel", aliases: ["v_rel", "vrel", "velocidad"], default: toNum(p.vRel ?? p.v_rel ?? p.vrel ?? p.velocidad, PRESETS.avion.vRel) },
      { key: "lat", aliases: ["phi", "latitud"], default: toNum(p.lat ?? p.phi ?? p.latitud, PRESETS.avion.lat) },
      { key: "t", aliases: ["tiempo"], default: toNum(p.t ?? p.tiempo, PRESETS.avion.t) },
      { key: "omega", aliases: ["Omega"], default: toNum(p.omega ?? p.Omega, OMEGA_EARTH) },
      { key: "showCurve", aliases: ["mostrarCurva"], default: p.showCurve ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
      { key: "showRef", aliases: ["mostrarRef"], default: p.showRef ?? true },
    ],
    [p.example, p.m, p.masa, p.vRel, p.v_rel, p.vrel, p.velocidad, p.lat, p.phi, p.latitud, p.t, p.tiempo, p.omega, p.Omega, p.showCurve, p.showPoint, p.showRef]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const example = PRESETS[ep.example] ? ep.example : "avion";
  const m = clamp(toNum(ep.m, PRESETS[example].m), 0.001, 1e8);
  const vRel = clamp(toNum(ep.vRel, PRESETS[example].vRel), 0, 1200);
  const lat = clamp(toNum(ep.lat, PRESETS[example].lat), -90, 90);
  const t = clamp(toNum(ep.t, PRESETS[example].t), 0, 7 * 24 * 3600);
  const omega = clamp(toNum(ep.omega, OMEGA_EARTH), 0, 1);
  const showCurve = !!ep.showCurve;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const acc = aCor(omega, vRel, lat);
  const force = m * acc;
  const y = 0.5 * acc * t * t;

  const vMax = Math.max(40, Math.min(1200, vRel * 1.4));
  const step = vMax > 300 ? 10 : 2;
  const data = useMemo(() => buildSeries(omega, lat, vMax, step), [omega, lat, vMax, step]);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v0) => {
    exp.startExperiment();
    exp.setValue(k, v0);
  }, [exp]);
  const setExample = useCallback((nextExample) => {
    const pr = PRESETS[nextExample] ?? PRESETS.avion;
    exp.startExperiment();
    exp.setValue("example", nextExample);
    exp.setValue("m", pr.m);
    exp.setValue("vRel", pr.vRel);
    exp.setValue("lat", pr.lat);
    exp.setValue("t", pr.t);
    exp.setValue("omega", OMEGA_EARTH);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Aplicaciones fisicas de Coriolis (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>{PRESETS[example].desc}</div>
        <div className="muted" style={{ marginTop: 4 }}>
          <MathInline latex={"a_{cor}=2\\Omega v_{rel}\\sin\\varphi,\\quad F_{cor}=m a_{cor},\\quad y\\approx\\frac{1}{2}a_{cor}t^2"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <Pill active={example === "avion"} onClick={() => setExample("avion")}>Avion</Pill>
            <Pill active={example === "viento"} onClick={() => setExample("viento")}>Viento</Pill>
            <Pill active={example === "oceano"} onClick={() => setExample("oceano")}>Oceano</Pill>
            <Pill active={example === "proyectil"} onClick={() => setExample("proyectil")}>Proyectil</Pill>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>m</span><input className="form-control" style={{ width: 90 }} value={fmt(m, 2).replace(",", ".")} onChange={(e) => setValue("m", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>v_rel</span><input className="form-control" style={{ width: 90 }} value={fmt(vRel, 2).replace(",", ".")} onChange={(e) => setValue("vRel", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>lat (deg)</span><input className="form-control" style={{ width: 90 }} value={fmt(lat, 1).replace(",", ".")} onChange={(e) => setValue("lat", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>t (s)</span><input className="form-control" style={{ width: 90 }} value={fmt(t, 0).replace(",", ".")} onChange={(e) => setValue("t", e.target.value)} /></div>
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
            <Pill active={showCurve} onClick={() => setValue("showCurve", !showCurve)}>a_cor(v_rel)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              a_cor = <b>{fmt(acc, 8)}</b> m/s2 | F_cor = <b>{fmt(force, 6)}</b> N | y aprox = <b>{fmt(y, 3)}</b> m.
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Aceleracion de Coriolis vs velocidad relativa</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="vRel" type="number" domain={[0, vMax]} tickFormatter={(v0) => fmt(v0, 1)} label={{ value: "v_rel (m/s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(v0) => fmt(v0, 6)} label={{ value: "a_cor (m/s2)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 10), name]} labelFormatter={(x) => `v_rel = ${fmt(x, 3)} m/s`} />
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showCurve ? <Line type="monotone" dataKey="a_cor" name="2*Omega*v_rel*sin(lat)" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showPoint ? <ReferenceDot x={vRel} y={acc} r={6} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
