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

const cmX = (m1, x1, m2, x2, m3, x3) => {
  const mt = m1 + m2 + m3;
  return mt > 0 ? (m1 * x1 + m2 * x2 + m3 * x3) / mt : 0;
};

const rByMass = (m) => 8 + Math.min(18, m * 2);

export default function CentroDeMasasEnSistemasDiscretosGraphsSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "m1", aliases: ["masa1"], default: toNum(p.m1 ?? p.masa1, 2) },
      { key: "m2", aliases: ["masa2"], default: toNum(p.m2 ?? p.masa2, 3) },
      { key: "m3", aliases: ["masa3"], default: toNum(p.m3 ?? p.masa3, 1) },
      { key: "x1", aliases: ["pos1"], default: toNum(p.x1 ?? p.pos1, -4) },
      { key: "x2", aliases: ["pos2"], default: toNum(p.x2 ?? p.pos2, 3) },
      { key: "x3", aliases: ["pos3"], default: toNum(p.x3 ?? p.pos3, 1) },
      { key: "showGuide", aliases: ["mostrarGuia"], default: p.showGuide ?? true },
      { key: "showLabels", aliases: ["mostrarEtiquetas"], default: p.showLabels ?? true },
      { key: "showFormula", aliases: ["mostrarFormula"], default: p.showFormula ?? true },
    ],
    [p.m1, p.masa1, p.m2, p.masa2, p.m3, p.masa3, p.x1, p.pos1, p.x2, p.pos2, p.x3, p.pos3, p.showGuide, p.showLabels, p.showFormula]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m1 = clamp(toNum(ep.m1, 2), 0.1, 20);
  const m2 = clamp(toNum(ep.m2, 3), 0.1, 20);
  const m3 = clamp(toNum(ep.m3, 1), 0.1, 20);
  const x1 = clamp(toNum(ep.x1, -4), -10, 10);
  const x2 = clamp(toNum(ep.x2, 3), -10, 10);
  const x3 = clamp(toNum(ep.x3, 1), -10, 10);
  const showGuide = !!ep.showGuide;
  const showLabels = !!ep.showLabels;
  const showFormula = !!ep.showFormula;

  const xcm = cmX(m1, x1, m2, x2, m3, x3);
  const mTotal = m1 + m2 + m3;

  const sx = (x) => 80 + ((x + 10) / 20) * 690;
  const y = 180;

  const p1 = { x: sx(x1), y };
  const p2 = { x: sx(x2), y };
  const p3 = { x: sx(x3), y };
  const pcm = { x: sx(xcm), y };

  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => { exp.startExperiment(); exp.setValue(k, v); }, [exp]);

  return (
    <SvgFrame
      title="Centro de masas en sistemas discretos (SVG)"
      subtitle="Tres masas puntuales sobre un eje y su centro de masas"
      badgeLabel="M_TOTAL"
      badgeValue={`${fmt(mTotal, 2)} kg`}
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
          <div className="v2-panel m-3 mb-1">
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>FORMULA</div>
            <div style={{ marginTop: 10, color: "#93c5fd", fontSize: 13 }}>
              <MathInline latex={"x_{CM}=\\frac{m_1x_1+m_2x_2+m_3x_3}{m_1+m_2+m_3}"} />
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARAMETROS</div>
            <div style={{ display: "grid", gap: 10 }}>
              <div><div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>m1 / x1</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(m1, 1)} kg / {fmt(x1, 1)} m</div></div><div style={{ marginTop: 8 }}><Slider value={x1} min={-10} max={10} step={0.1} onChange={(v) => setValue("x1", v)} /></div></div>
              <div><div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>m2 / x2</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(m2, 1)} kg / {fmt(x2, 1)} m</div></div><div style={{ marginTop: 8 }}><Slider value={x2} min={-10} max={10} step={0.1} onChange={(v) => setValue("x2", v)} /></div></div>
              <div><div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>m3 / x3</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(m3, 1)} kg / {fmt(x3, 1)} m</div></div><div style={{ marginTop: 8 }}><Slider value={x3} min={-10} max={10} step={0.1} onChange={(v) => setValue("x3", v)} /></div></div>

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showGuide} onChange={(e) => setValue("showGuide", e.target.checked)} /><span className="v2-toggle-label">Guia</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showLabels} onChange={(e) => setValue("showLabels", e.target.checked)} /><span className="v2-toggle-label">Etiquetas</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showFormula} onChange={(e) => setValue("showFormula", e.target.checked)} /><span className="v2-toggle-label">Formula</span></label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.82, lineHeight: 1.45 }}>
              x_CM = <b style={{ color: "#22c55e" }}>{fmt(xcm, 3)}</b> m
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgCMSvg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="850" height="330" fill="url(#bgCMSvg)" />
      <rect x="0" y="0" width="850" height="330" fill="rgba(0,0,0,0.08)" />

      <line x1={sx(-10)} y1={y} x2={sx(10)} y2={y} stroke="rgba(15,23,42,0.75)" strokeWidth="4" />

      {showGuide ? (
        <g opacity="0.65">
          <line x1={pcm.x} y1={70} x2={pcm.x} y2={260} stroke="#22c55e" strokeWidth="2" strokeDasharray="6 5" />
        </g>
      ) : null}

      <circle cx={p1.x} cy={p1.y} r={rByMass(m1)} fill="#1d4ed8" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
      <circle cx={p2.x} cy={p2.y} r={rByMass(m2)} fill="#7c3aed" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
      <circle cx={p3.x} cy={p3.y} r={rByMass(m3)} fill="#ea580c" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />

      <circle cx={pcm.x} cy={pcm.y} r="9" fill="#22c55e" stroke="white" strokeWidth="2" />

      {showLabels ? (
        <>
          <text x={p1.x} y={p1.y - rByMass(m1) - 10} textAnchor="middle" fontSize="12" fill="#0f172a" fontWeight="900">m1</text>
          <text x={p2.x} y={p2.y - rByMass(m2) - 10} textAnchor="middle" fontSize="12" fill="#0f172a" fontWeight="900">m2</text>
          <text x={p3.x} y={p3.y - rByMass(m3) - 10} textAnchor="middle" fontSize="12" fill="#0f172a" fontWeight="900">m3</text>
          <text x={pcm.x} y={pcm.y - 16} textAnchor="middle" fontSize="12" fill="#166534" fontWeight="900">CM</text>
        </>
      ) : null}

      {showFormula ? (
        <text x="80" y="44" fontSize="13" fill="#0f172a" fontWeight="900">
          x_CM = {fmt(xcm, 3)} m
        </text>
      ) : null}
    </SvgFrame>
  );
}
