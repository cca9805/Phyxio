import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

function Slider({ value, min, max, step, onChange }) {
  return (
    <input
      type="range"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={(e) => onChange(Number(e.target.value))}
      style={{ width: "100%", accentColor: "#6366f1", cursor: "pointer" }}
    />
  );
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

const cm1D = (shape, L) => {
  if (shape === "barra") return L / 2;
  if (shape === "semi") return (4 * L) / (3 * Math.PI);
  if (shape === "tri") return L / 3;
  return L / 2;
};

export default function CentroDeMasasEnCuerposExtendidosGraphsSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "shape", aliases: ["cuerpo", "figura"], default: p.shape || "barra" },
      { key: "L", aliases: ["longitud", "R"], default: toNum(p.L ?? p.longitud ?? p.R, 6) },
      { key: "showAxis", aliases: ["mostrarEje"], default: p.showAxis ?? true },
      { key: "showCM", aliases: ["mostrarCM"], default: p.showCM ?? true },
      { key: "showFormula", aliases: ["mostrarFormula"], default: p.showFormula ?? true },
    ],
    [p.shape, p.L, p.longitud, p.R, p.showAxis, p.showCM, p.showFormula]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const shape = ep.shape === "semi" ? "semi" : ep.shape === "tri" ? "tri" : "barra";
  const L = clamp(toNum(ep.L, 6), 0.2, 10);
  const showAxis = !!ep.showAxis;
  const showCM = !!ep.showCM;
  const showFormula = !!ep.showFormula;

  const xcm = cm1D(shape, L);
  const sx = (x) => 120 + (x / 10) * 560;
  const x0 = 120;
  const xL = sx(L);
  const xCMp = sx(xcm);

  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => { exp.startExperiment(); exp.setValue(k, v); }, [exp]);

  return (
    <SvgFrame
      title="Centro de masas en cuerpos extendidos (SVG)"
      subtitle="Barra, semicirculo y triangulo uniforme con su centro de masas"
      badgeLabel="FIGURA"
      badgeValue={shape.toUpperCase()}
      controls={
        <button
          type="button"
          onClick={exp.resetToCalculator}
          style={{
            padding: "10px 14px",
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
      }
      aside={
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="v2-panel m-2" style={{ background: "rgba(0,0,0,0.65)" }}>
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>FIGURA</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 }}>
              <Pill active={shape === "barra"} onClick={() => setValue("shape", "barra")}>Barra</Pill>
              <Pill active={shape === "semi"} onClick={() => setValue("shape", "semi")}>Semicirculo</Pill>
              <Pill active={shape === "tri"} onClick={() => setValue("shape", "tri")}>Triangulo</Pill>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARAMETROS</div>
            <div style={{ display: "grid", gap: 10 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>L o R</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(L, 2)} m</div></div>
                <div style={{ marginTop: 8 }}><Slider value={L} min={0.2} max={10} step={0.1} onChange={(v) => setValue("L", v)} /></div>
              </div>

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showAxis} onChange={(e) => setValue("showAxis", e.target.checked)} /><span className="v2-toggle-label">Eje</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showCM} onChange={(e) => setValue("showCM", e.target.checked)} /><span className="v2-toggle-label">Centro de masas</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showFormula} onChange={(e) => setValue("showFormula", e.target.checked)} /><span className="v2-toggle-label">Formula</span></label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.85, lineHeight: 1.45 }}>
              x_CM = <b style={{ color: "#22c55e" }}>{fmt(xcm, 3)}</b> m
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgCMExtSvg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="850" height="330" fill="url(#bgCMExtSvg)" />
      <rect x="0" y="0" width="850" height="330" fill="rgba(0,0,0,0.08)" />

      {showAxis ? <line x1={x0} y1={260} x2={680} y2={260} stroke="#334155" strokeWidth="3" /> : null}

      {shape === "barra" ? (
        <rect x={x0} y={140} width={xL - x0} height={34} rx="12" fill="rgba(30,64,175,0.90)" stroke="rgba(255,255,255,0.35)" />
      ) : null}

      {shape === "semi" ? (
        <path d={`M ${x0} 220 A ${(xL - x0) / 2} ${(xL - x0) / 2} 0 0 1 ${xL} 220 L ${x0} 220 Z`} fill="rgba(124,58,237,0.85)" stroke="rgba(255,255,255,0.35)" />
      ) : null}

      {shape === "tri" ? (
        <polygon points={`${x0},220 ${xL},220 ${x0},120`} fill="rgba(234,88,12,0.88)" stroke="rgba(255,255,255,0.35)" />
      ) : null}

      {showCM ? (
        <>
          <line x1={xCMp} y1={80} x2={xCMp} y2={280} stroke="#22c55e" strokeWidth="2" strokeDasharray="7 6" />
          <circle cx={xCMp} cy={220} r="8" fill="#22c55e" stroke="white" strokeWidth="2" />
          <text x={xCMp + 10} y={212} fontSize="12" fill="#166534" fontWeight="900">CM</text>
        </>
      ) : null}

      {showFormula ? (
        <foreignObject x="126" y="28" width="260" height="32">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: 13, color: "#0f172a", fontWeight: 900 }}>
            {shape === "barra" ? <MathInline latex={"x_{CM}=L/2"} /> : null}
            {shape === "semi" ? <MathInline latex={"x_{CM}=\\frac{4R}{3\\pi}"} /> : null}
            {shape === "tri" ? <MathInline latex={"x_{CM}=L/3"} /> : null}
          </div>
        </foreignObject>
      ) : null}
    </SvgFrame>
  );
}

