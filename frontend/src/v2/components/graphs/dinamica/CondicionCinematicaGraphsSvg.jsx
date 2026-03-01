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

function Arrow({ x1, y1, x2, y2, color, label, labelDx = 8, labelDy = -8 }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const s = 11;
  const p1x = x2 - ux * s - uy * (s * 0.55);
  const p1y = y2 - uy * s + ux * (s * 0.55);
  const p2x = x2 - ux * s + uy * (s * 0.55);
  const p2y = y2 - uy * s - ux * (s * 0.55);
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="4" strokeLinecap="round" />
      <polygon points={`${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}`} fill={color} />
      {label ? (
        <text x={x2 + labelDx} y={y2 + labelDy} fill={color} fontSize="12" fontWeight="900">
          {label}
        </text>
      ) : null}
    </g>
  );
}

export default function CondicionCinematicaGraphsSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "R", aliases: ["radio", "r"], default: toNum(p.R ?? p.radio ?? p.r, 0.35) },
      { key: "w", aliases: ["omega"], default: toNum(p.w ?? p.omega, 6) },
      { key: "showVectors", aliases: ["mostrarVectores"], default: p.showVectors ?? true },
      { key: "showFormula", aliases: ["mostrarFormula"], default: p.showFormula ?? true },
      { key: "showSlip", aliases: ["mostrarDeslizamiento"], default: p.showSlip ?? false },
    ],
    [p.R, p.radio, p.r, p.w, p.omega, p.showVectors, p.showFormula, p.showSlip]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const R = clamp(toNum(ep.R, 0.35), 0.12, 0.75);
  const w = clamp(toNum(ep.w, 6), -14, 14);
  const showVectors = !!ep.showVectors;
  const showFormula = !!ep.showFormula;
  const showSlip = !!ep.showSlip;

  const pxPerM = 180;
  const wheelR = R * pxPerM;
  const vCenter = w * R;
  const vTop = vCenter + w * R;
  const vContact = showSlip ? vCenter * 0.35 : 0;

  const cx = 420;
  const floorY = 385;
  const sceneH = 545;
  const cy = floorY - wheelR;
  const maxArrow = 120;
  const speedToPx = (speed) => clamp(Math.abs(speed) * 14, 0, maxArrow) * Math.sign(speed || 1);

  const centerArrow = speedToPx(vCenter);
  const topArrow = speedToPx(vTop);
  const contactArrow = speedToPx(vContact);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, val) => {
    exp.startExperiment();
    exp.setValue(k, val);
  }, [exp]);

  return (
    <SvgFrame
      title="Condicion cinematica (SVG)"
      subtitle="Rodadura sin deslizamiento: velocidad del punto de contacto nula"
      badgeLabel="RELACION"
      badgeValue={`v = ${fmt(vCenter, 3)} m/s`}
      viewBox={`0 0 850 ${sceneH}`}
      svgHeight={990}
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
          <div className="v2-panel m-2" style={{ background: "rgba(0,0,0,0.66)" }}>
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARAMETROS</div>
            <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900 }}>R</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(R, 3)} m</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={R} min={0.12} max={0.75} step={0.01} onChange={(v) => setValue("R", v)} />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900 }}>omega</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(w, 2)} rad/s</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={w} min={-14} max={14} step={0.1} onChange={(v) => setValue("w", v)} />
                </div>
              </div>
              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showVectors} onChange={(e) => setValue("showVectors", e.target.checked)} />
                  <span className="v2-toggle-label">Mostrar vectores</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showFormula} onChange={(e) => setValue("showFormula", e.target.checked)} />
                  <span className="v2-toggle-label">Mostrar formula</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showSlip} onChange={(e) => setValue("showSlip", e.target.checked)} />
                  <span className="v2-toggle-label">Forzar deslizamiento</span>
                </label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.86, lineHeight: 1.45 }}>
              v_centro = <b>{fmt(vCenter, 3)}</b> m/s
              <br />
              v_superior = <b>{fmt(vTop, 3)}</b> m/s
              <br />
              v_contacto = <b>{fmt(vContact, 3)}</b> m/s
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgCondCine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="850" height={sceneH} fill="url(#bgCondCine)" />
      <rect x="0" y="0" width="850" height={sceneH} fill="rgba(0,0,0,0.08)" />

      <rect x="0" y={floorY} width="850" height={sceneH - floorY} fill="rgba(15,23,42,0.18)" />
      <line x1="0" y1={floorY} x2="850" y2={floorY} stroke="rgba(15,23,42,0.60)" strokeWidth="3" />

      <circle cx={cx} cy={cy} r={wheelR} fill="rgba(59,130,246,0.24)" stroke="#1d4ed8" strokeWidth="4" />
      <circle cx={cx} cy={cy} r="6" fill="#0f172a" />
      <line x1={cx} y1={cy} x2={cx} y2={floorY} stroke="rgba(30,41,59,0.4)" strokeDasharray="5 4" />
      <text x={cx + 10} y={cy + wheelR * 0.5} fontSize="12" fill="#1d4ed8" fontWeight="900">R</text>

      <line x1={cx} y1={cy} x2={cx + wheelR * 0.8} y2={cy - wheelR * 0.4} stroke="#0f172a" strokeWidth="3" />

      {showVectors ? (
        <>
          <Arrow x1={cx} y1={cy} x2={cx + centerArrow} y2={cy} color="#16a34a" label="v_centro" />
          <Arrow x1={cx} y1={cy - wheelR} x2={cx + topArrow} y2={cy - wheelR} color="#b45309" label="v_sup" />
          <Arrow
            x1={cx}
            y1={floorY}
            x2={cx + contactArrow}
            y2={floorY}
            color="#dc2626"
            label="v_contacto"
            labelDy={18}
          />
        </>
      ) : null}

      <text x={70} y={42} fontSize="13" fill="#0f172a" fontWeight="900">Rueda en contacto con el suelo</text>
      <text x={70} y={62} fontSize="12" fill="#0f172a" fontWeight="700">
        En rodadura pura, el punto de contacto queda instantaneamente en reposo.
      </text>

      {showFormula ? (
        <>
          <foreignObject x="70" y="78" width="360" height="30">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: 13, color: "#0f172a", fontWeight: 900 }}>
              <MathInline latex={"v = \\omega R"} />
            </div>
          </foreignObject>
          <foreignObject x="70" y="105" width="430" height="30">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: 12, color: "#0f172a", fontWeight: 700 }}>
              <MathInline latex={"v_{contacto}=0,\\quad v_{superior}=2v_{centro}"} />
            </div>
          </foreignObject>
        </>
      ) : null}

      {showSlip ? (
        <text x={560} y={36} fontSize="12" fill="#7f1d1d" fontWeight="900">
          Deslizamiento activado: v_contacto ya no es cero
        </text>
      ) : (
        <text x={600} y={36} fontSize="12" fill="#065f46" fontWeight="900">
          Sin deslizamiento
        </text>
      )}
    </SvgFrame>
  );
}
