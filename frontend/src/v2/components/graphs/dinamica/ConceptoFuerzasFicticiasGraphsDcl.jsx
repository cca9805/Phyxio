import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

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

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

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

export default function ConceptoFuerzasFicticiasGraphsDcl(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: pickNum(p, ["m", "masa"], 10) },
      { key: "a", aliases: ["aFrame", "a_marco"], default: pickNum(p, ["a", "aFrame", "a_marco"], 3) },
      { key: "showFict", aliases: ["mostrarFict"], default: p.showFict ?? true },
      { key: "showAccel", aliases: ["mostrarA"], default: p.showAccel ?? true },
    ],
    [pickNum(p, ["m", "masa"], 10), pickNum(p, ["a", "aFrame", "a_marco"], 3), p.showFict, p.showAccel]
  );

  // estándar: empieza experimentando
  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(toNum(ep.m, 10), 0.05, 500);
  const a = clamp(toNum(ep.a, 3), -12, 12);
  const showFict = !!ep.showFict;
  const showAccel = !!ep.showAccel;

  const Ff = m * a;

  const fmt = (n, d = 2) => {
    if (!Number.isFinite(n)) return "--";
    return n.toFixed(d).replace(".", ",");
  };

  const setM = useCallback(
    (val) => {
      exp.startExperiment();
      exp.setValue("m", val);
    },
    [exp]
  );

  const setA = useCallback(
    (val) => {
      exp.startExperiment();
      exp.setValue("a", val);
    },
    [exp]
  );

  const setShowFict = useCallback(
    (val) => {
      exp.startExperiment();
      exp.setValue("showFict", val);
    },
    [exp]
  );

  const setShowAccel = useCallback(
    (val) => {
      exp.startExperiment();
      exp.setValue("showAccel", val);
    },
    [exp]
  );

  const W = 850;
  const H = 330;

  const Arrow = ({ x1, y1, x2, y2, color, label, labelOffset = 16, labelNormalOffset = 0, arrowExtend = 12 }) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const L = Math.hypot(dx, dy) || 1;
    const ux = dx / L;
    const uy = dy / L;

    const head = 22;
    const wing = 10;

    const hx = x2 + ux * arrowExtend;
    const hy = y2 + uy * arrowExtend;
    const lx = hx - ux * head - uy * wing;
    const ly = hy - uy * head + ux * wing;
    const rx = hx - ux * head + uy * wing;
    const ry = hy - uy * head - ux * wing;
     
    const nx = -uy;
    const ny = ux;

    // etiqueta en la punta de la flecha, desplazada hacia afuera en la dirección del vector
    const tx = hx + ux * labelOffset + nx * labelNormalOffset;
    const ty = hy + uy * labelOffset + ny * labelNormalOffset;

    return (
    <g>
      <line x1={x1} y1={y1} x2={hx} y2={hy} stroke={color} strokeWidth="5" strokeLinecap="round" />
      <polygon points={`${hx},${hy} ${lx},${ly} ${rx},${ry}`} fill={color} opacity="0.96" />
      <text x={tx} y={ty} fontSize="13" fontWeight="900" fill={color} textAnchor="middle" dominantBaseline="middle">
        {label}
      </text>
    </g>
    );
  };

  const origin = { x: 430, y: 150 };

  const aPx = clamp(a, -10, 10) * 16;
  const fPx = clamp(Ff, -300, 300) * 0.6; // escala para que no explote

  return (
    <SvgFrame
      title="Concepto de fuerzas ficticias (DCL)"
      subtitle="Solo vectores: marco no inercial"
      badgeLabel="MODO"
      badgeValue={exp.mode === "follow" ? "SIGUIENDO CALCULADORA" : "EXPERIMENTO"}
      controls={
        <>
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
            title="Volver a seguir a la calculadora"
          >
            Seguir calculadora
          </button>
        </>
      }
      aside={
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="v2-panel m-3 mb-1">
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>ECUACIONES</div>
            <div style={{ marginTop: 10, display: "grid", gap: 2 }}>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0, 0, 0, 1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Ficticia</div>
                <div style={{ marginTop: 2, color: "#f87b7bff" }}>
                  <MathInline latex={"\\vec F_{fict}=-m\\,\\vec a_{marco}"} />
                </div>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0, 0, 0, 0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>
              PARÁMETROS
            </div>

            <div style={{ display: "grid", gap: 10 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>m</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(m, 2)} kg</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={m} min={0.1} max={80} step={0.1} onChange={setM} />
                </div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>a_marco</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(a, 2)} m/s²</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={a} min={-10} max={10} step={0.1} onChange={setA} />
                </div>
              </div>

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showFict} onChange={(e) => setShowFict(e.target.checked)} />
                  <span className="v2-toggle-label">Fuerza ficticia</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showAccel} onChange={(e) => setShowAccel(e.target.checked)} />
                  <span className="v2-toggle-label">Aceleración del marco</span>
                </label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0, 0, 0, 0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rápida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.8, lineHeight: 1.45 }}>
              F_fict = <b style={{ color: "#fb923c" }}>{fmt(-Ff, 2)}</b> N (si a es +)
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="panelGlow" x1="0" x2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.10)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
        </linearGradient>

        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Fondo limpio (sin objetos) */}
      <rect x="0" y="0" width={W} height={H} fill="#b8c5ffff" />
      <rect x="0" y="0" width={W} height={H} fill="rgba(0,0,0,0.08)" />

      {/* Punto origen */}
      <g filter="url(#glow)">
        <circle cx={origin.x} cy={origin.y} r="10" fill="rgba(0,0,0,0.55)" />
        <circle cx={origin.x} cy={origin.y} r="8" fill="rgba(255,255,255,0.12)" />
      </g>

      {/* Vectores */}
      <g>
        {showAccel ? (
          <Arrow
            x1={origin.x}
            y1={origin.y}
            x2={origin.x + aPx}
            y2={origin.y}
            color="#006aff"
            label="a_marco"
            labelOffset={14}
            labelNormalOffset={-10}
          />
        ) : null}

        {showFict ? (
          <Arrow
            x1={origin.x}
            y1={origin.y}
            x2={origin.x - fPx}
            y2={origin.y}
            color="#ff2d55"
            label="F_fict"
            labelOffset={14}
            labelNormalOffset={10}
          />
        ) : null}
      </g>
      
    </SvgFrame>
  );
}

