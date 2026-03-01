import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

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

export default function TornilloGraphsSvg(props) {
  const p = props?.params ?? props?.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "R", aliases: ["carga_axial"], default: toNum(p.R ?? p.carga_axial, 10000) },
      { key: "r", aliases: ["radio"], default: toNum(p.r ?? p.radio, 0.15) },
      { key: "paso", aliases: ["p"], default: toNum(p.paso ?? p.p, 0.006) },
      { key: "eta", aliases: ["rendimiento"], default: toNum(p.eta ?? p.rendimiento, 0.8) },
    ],
    [p.R, p.carga_axial, p.r, p.radio, p.paso, p.p, p.eta, p.rendimiento]
  );
  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const R = clamp(toNum(ep.R, 10000), 1, 500000);
  const r = clamp(toNum(ep.r, 0.15), 0.01, 1);
  const paso = clamp(toNum(ep.paso, 0.006), 0.0005, 0.05);
  const eta = clamp(toNum(ep.eta, 0.8), 0.2, 1);

  const Fideal = (R * paso) / (2 * Math.PI * r);
  const Freal = Fideal / eta;
  const VM = (2 * Math.PI * r) / paso;
  const tau = Freal * r;
  const setValue = useCallback((key, value) => {
    exp.startExperiment();
    exp.setValue(key, value);
  }, [exp]);

  return (
    <SvgFrame
      title="Tornillo (SVG)"
      subtitle="Conversion de par en fuerza axial mediante paso y radio"
      badgeLabel="RESULTADO"
      badgeValue={`F_real = ${fmt(Freal, 2)} N`}
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
          <div className="v2-panel m-2">
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>ECUACIONES</div>
            <div style={{ marginTop: 8, fontSize: 13, lineHeight: 1.5 }}>
              <MathInline latex={"F=\\frac{R\\,p}{2\\pi r\\,\\eta}"} />
              <br />
              <MathInline latex={"VM_{ideal}=\\frac{2\\pi r}{p}"} />
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.68)" }}>
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARAMETROS</div>
            <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900 }}>R</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(R, 1)} N</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={R} min={1} max={500000} step={1} onChange={(v) => setValue("R", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900 }}>r</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(r, 3)} m</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={r} min={0.01} max={1} step={0.001} onChange={(v) => setValue("r", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900 }}>paso</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(paso, 4)} m</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={paso} min={0.0005} max={0.05} step={0.0005} onChange={(v) => setValue("paso", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900 }}>eta</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(eta, 3)}</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={eta} min={0.2} max={1} step={0.01} onChange={(v) => setValue("eta", v)} /></div>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.86, lineHeight: 1.45 }}>
              F_ideal = <b>{fmt(Fideal, 2)}</b> N
              <br />
              F_real = <b>{fmt(Freal, 2)}</b> N
              <br />
              VM = <b>{fmt(VM, 2)}</b>
              <br />
              tau = <b>{fmt(tau, 2)}</b> N*m
            </div>
          </div>
        </div>
      }
      viewBox="0 0 760 360"
      svgHeight={360}
    >
      <defs>
        <linearGradient id="shaftGrad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="threadGrad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>
        <marker id="arrGreen" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 9 3, 0 6" fill="#22c55e" />
        </marker>
        <marker id="arrBlue" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 9 3, 0 6" fill="#60a5fa" />
        </marker>
      </defs>

      <rect x="0" y="0" width="760" height="360" fill="rgba(2,6,23,0.55)" />
      <text x="24" y="32" fontSize="16" fill="#e2e8f0" fontWeight="700">
        Tornillo como plano inclinado helicoidal
      </text>

      <rect x="80" y="130" width="500" height="96" rx="20" fill="url(#shaftGrad)" stroke="#64748b" />

      <path
        d="M 95 178
           C 120 146, 145 210, 170 178
           C 195 146, 220 210, 245 178
           C 270 146, 295 210, 320 178
           C 345 146, 370 210, 395 178
           C 420 146, 445 210, 470 178
           C 495 146, 520 210, 545 178"
        fill="none"
        stroke="url(#threadGrad)"
        strokeWidth="6"
        strokeLinecap="round"
      />

      <line x1="605" y1="178" x2="710" y2="178" stroke="#22c55e" strokeWidth="4" markerEnd="url(#arrGreen)" />
      <text x="614" y="166" fontSize="14" fill="#86efac" fontWeight="700">
        Carga axial R
      </text>

      <path d="M 95 88 A 52 52 0 1 1 94 88" fill="none" stroke="#60a5fa" strokeWidth="4" markerEnd="url(#arrBlue)" />
      <text x="32" y="66" fontSize="14" fill="#93c5fd" fontWeight="700">
        Par aplicado tau
      </text>

      <line x1="180" y1="252" x2="230" y2="252" stroke="#94a3b8" strokeWidth="2" />
      <line x1="180" y1="252" x2="180" y2="235" stroke="#94a3b8" strokeWidth="2" />
      <line x1="230" y1="252" x2="230" y2="235" stroke="#94a3b8" strokeWidth="2" />
      <text x="188" y="230" fontSize="12" fill="#cbd5e1">paso p</text>

      <line x1="100" y1="178" x2="150" y2="178" stroke="#94a3b8" strokeWidth="2" />
      <line x1="100" y1="178" x2="100" y2="195" stroke="#94a3b8" strokeWidth="2" />
      <line x1="150" y1="178" x2="150" y2="195" stroke="#94a3b8" strokeWidth="2" />
      <text x="112" y="210" fontSize="12" fill="#cbd5e1">radio r</text>
    </SvgFrame>
  );
}
