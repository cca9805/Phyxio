import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useRafPlayer } from "@/v2/components/graphs_shared/sim";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
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

function Arrow({ x1, y1, x2, y2, color, label, labelOffset = 12, labelNormalOffset = 0, dashed = false }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const L = Math.hypot(dx, dy) || 1;
  const ux = dx / L;
  const uy = dy / L;

  const head = 18;
  const wing = 8;
  const arrowExtend = 8;

  const hx = x2 + ux * arrowExtend;
  const hy = y2 + uy * arrowExtend;
  const lx = hx - ux * head - uy * wing;
  const ly = hy - uy * head + ux * wing;
  const rx = hx - ux * head + uy * wing;
  const ry = hy - uy * head - ux * wing;

  const nx = -uy;
  const ny = ux;
  const tx = hx + ux * labelOffset + nx * labelNormalOffset;
  const ty = hy + uy * labelOffset + ny * labelNormalOffset;

  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={hx}
        y2={hy}
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={dashed ? "7 6" : undefined}
      />
      <polygon points={`${hx},${hy} ${lx},${ly} ${rx},${ry}`} fill={color} opacity="0.96" />
      {label ? (
        <text x={tx} y={ty} fontSize="12" fontWeight="900" fill={color} textAnchor="middle" dominantBaseline="middle">
          {label}
        </text>
      ) : null}
    </g>
  );
}

export default function ConceptoFuerzaCentripetaGraphsSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: pickNum(p, ["m", "masa"], 2) },
      { key: "r", aliases: ["radio"], default: pickNum(p, ["r", "radio"], 4) },
      { key: "v", aliases: ["velocidad"], default: pickNum(p, ["v", "velocidad"], 8) },
      { key: "tCut", aliases: ["corte"], default: pickNum(p, ["tCut", "corte"], 3) },
      { key: "showV", aliases: ["mostrarV"], default: p.showV ?? true },
      { key: "showFc", aliases: ["mostrarFc"], default: p.showFc ?? true },
      { key: "showAc", aliases: ["mostrarAc"], default: p.showAc ?? true },
      { key: "showTrail", aliases: ["mostrarTrayectoria"], default: p.showTrail ?? true },
      { key: "showRadial", aliases: ["mostrarRadial"], default: p.showRadial ?? true },
    ],
    [
      pickNum(p, ["m", "masa"], 2),
      pickNum(p, ["r", "radio"], 4),
      pickNum(p, ["v", "velocidad"], 8),
      pickNum(p, ["tCut", "corte"], 3),
      p.showV,
      p.showFc,
      p.showAc,
      p.showTrail,
      p.showRadial,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(toNum(ep.m, 2), 0.1, 120);
  const r = clamp(toNum(ep.r, 4), 0.4, 20);
  const v = clamp(toNum(ep.v, 8), 0.1, 35);
  const tCut = clamp(toNum(ep.tCut, 3), 0.5, 10);
  const showV = !!ep.showV;
  const showFc = !!ep.showFc;
  const showAc = !!ep.showAc;
  const showTrail = !!ep.showTrail;
  const showRadial = !!ep.showRadial;

  const omega = v / r;
  const ac = (v * v) / r;
  const Fc = m * ac;

  const tMax = 12;
  const player = useRafPlayer({ tMax, initialT: 0, autoStop: false });
  const t = player.t;

  const W = 850;
  const H = 420;
  const leftC = { x: 260, y: 195 };
  const rightC = { x: 610, y: 195 };
  const rPx = clamp(r * 22, 60, 130);
  const pxPerMS = 24;

  const angle = omega * t;
  const cutAngle = omega * tCut;

  const pLeft = {
    x: leftC.x + rPx * Math.cos(angle),
    y: leftC.y + rPx * Math.sin(angle),
  };

  const pRightOn = {
    x: rightC.x + rPx * Math.cos(Math.min(t, tCut) * omega),
    y: rightC.y + rPx * Math.sin(Math.min(t, tCut) * omega),
  };
  const pCut = {
    x: rightC.x + rPx * Math.cos(cutAngle),
    y: rightC.y + rPx * Math.sin(cutAngle),
  };

  const uInLeft = { x: (leftC.x - pLeft.x) / rPx, y: (leftC.y - pLeft.y) / rPx };
  const uTanLeft = { x: -uInLeft.y, y: uInLeft.x };

  const uInCut = { x: (rightC.x - pCut.x) / rPx, y: (rightC.y - pCut.y) / rPx };
  const uTanCut = { x: -uInCut.y, y: uInCut.x };
  const dt = Math.max(0, t - tCut);
  const freeDisp = dt * v * pxPerMS;
  const pRight = t <= tCut ? pRightOn : { x: pCut.x + uTanCut.x * freeDisp, y: pCut.y + uTanCut.y * freeDisp };

  const uInRight = t <= tCut ? { x: (rightC.x - pRight.x) / rPx, y: (rightC.y - pRight.y) / rPx } : uInCut;
  const uTanRight = t <= tCut ? { x: -uInRight.y, y: uInRight.x } : uTanCut;

  const fcLen = clamp(35 + Fc * 0.5, 35, 120);
  const acLen = clamp(28 + ac * 3.0, 28, 98);
  const vLen = clamp(35 + v * 2.2, 35, 130);

  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

  const setM = useCallback((val) => { exp.startExperiment(); exp.setValue("m", val); }, [exp]);
  const setR = useCallback((val) => { exp.startExperiment(); exp.setValue("r", val); }, [exp]);
  const setV = useCallback((val) => { exp.startExperiment(); exp.setValue("v", val); }, [exp]);
  const setTCut = useCallback((val) => { exp.startExperiment(); exp.setValue("tCut", val); }, [exp]);
  const setShowV = useCallback((val) => { exp.startExperiment(); exp.setValue("showV", val); }, [exp]);
  const setShowFc = useCallback((val) => { exp.startExperiment(); exp.setValue("showFc", val); }, [exp]);
  const setShowAc = useCallback((val) => { exp.startExperiment(); exp.setValue("showAc", val); }, [exp]);
  const setShowTrail = useCallback((val) => { exp.startExperiment(); exp.setValue("showTrail", val); }, [exp]);
  const setShowRadial = useCallback((val) => { exp.startExperiment(); exp.setValue("showRadial", val); }, [exp]);

  const onPlay = useCallback(() => player.play(), [player]);
  const onPause = useCallback(() => player.pause(), [player]);
  const onReset = useCallback(() => player.reset(0), [player]);

  return (
    <SvgFrame
      title="Concepto de fuerza centripeta (SVG)"
      subtitle="Comparacion didactica: con fuerza radial vs corte de fuerza radial"
      badgeLabel="MODO"
      badgeValue={exp.mode === "follow" ? "SIGUIENDO CALCULADORA" : "EXPERIMENTO"}
      controls={
        <>
          <button
            type="button"
            onClick={onPlay}
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
            Play
          </button>
          <button
            type="button"
            onClick={onPause}
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
            Pause
          </button>
          <button
            type="button"
            onClick={onReset}
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
            Reset
          </button>
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
        </>
      }
      aside={
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="v2-panel m-3 mb-1">
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>IDEA CLAVE</div>
            <div style={{ marginTop: 10, display: "grid", gap: 2 }}>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Con fuerza radial</div>
                <div style={{ marginTop: 2, color: "#f97316" }}>
                  <MathInline latex={"F_c=m\\frac{v^2}{r}"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Sin fuerza radial</div>
                <div style={{ marginTop: 2, color: "#22c55e" }}>
                  Sale en direccion tangente
                </div>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>
              PARAMETROS
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>m</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(m, 2)} kg</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={m} min={0.1} max={30} step={0.1} onChange={setM} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>r</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(r, 2)} m</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={r} min={0.4} max={10} step={0.1} onChange={setR} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>v</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(v, 2)} m/s</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={v} min={0.1} max={25} step={0.1} onChange={setV} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>t_corte</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(tCut, 2)} s</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={tCut} min={0.5} max={10} step={0.1} onChange={setTCut} /></div>
              </div>
              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showV} onChange={(e) => setShowV(e.target.checked)} /><span className="v2-toggle-label">v tangencial</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showFc} onChange={(e) => setShowFc(e.target.checked)} /><span className="v2-toggle-label">F_c</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showAc} onChange={(e) => setShowAc(e.target.checked)} /><span className="v2-toggle-label">a_c</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showTrail} onChange={(e) => setShowTrail(e.target.checked)} /><span className="v2-toggle-label">trayectoria</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showRadial} onChange={(e) => setShowRadial(e.target.checked)} /><span className="v2-toggle-label">radio</span></label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.82, lineHeight: 1.45 }}>
              t = <b>{fmt(t, 2)}</b> s<br />
              a_c = <b style={{ color: "#3b82f6" }}>{fmt(ac, 2)}</b> m/s2<br />
              F_c = <b style={{ color: "#f97316" }}>{fmt(Fc, 2)}</b> N<br />
              {t <= tCut ? "En panel derecho aun hay fuerza radial." : "Panel derecho: se corto la fuerza radial, movimiento tangencial."}
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgCentripetaSvg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c7d2fe" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={W} height={H} fill="url(#bgCentripetaSvg)" />
      <rect x="0" y="0" width={W} height={H} fill="rgba(0,0,0,0.08)" />

      <line x1="430" y1="24" x2="430" y2="396" stroke="rgba(15,23,42,0.15)" strokeWidth="2" strokeDasharray="7 8" />
      <text x="182" y="34" fontSize="13" fill="#0f172a" fontWeight="900">Con fuerza radial</text>
      <text x="520" y="34" fontSize="13" fill="#0f172a" fontWeight="900">Corte de fuerza radial</text>

      <circle cx={leftC.x} cy={leftC.y} r={rPx} fill="none" stroke="rgba(15,23,42,0.34)" strokeWidth="2" strokeDasharray="6 6" />
      <circle cx={rightC.x} cy={rightC.y} r={rPx} fill="none" stroke="rgba(15,23,42,0.22)" strokeWidth="2" strokeDasharray="6 6" />

      {showTrail ? (
        <>
          <path d={`M ${rightC.x + rPx} ${rightC.y} A ${rPx} ${rPx} 0 0 1 ${pCut.x} ${pCut.y}`} fill="none" stroke="rgba(15,23,42,0.24)" strokeWidth="3" />
          {t > tCut ? <line x1={pCut.x} y1={pCut.y} x2={pRight.x} y2={pRight.y} stroke="#22c55e" strokeWidth="3" strokeDasharray="8 6" /> : null}
        </>
      ) : null}

      <circle cx={leftC.x} cy={leftC.y} r="5" fill="rgba(15,23,42,0.65)" />
      <circle cx={rightC.x} cy={rightC.y} r="5" fill="rgba(15,23,42,0.65)" />

      {showRadial ? <line x1={pLeft.x} y1={pLeft.y} x2={leftC.x} y2={leftC.y} stroke="rgba(15,23,42,0.40)" strokeWidth="2" strokeDasharray="6 5" /> : null}
      {showRadial && t <= tCut ? <line x1={pRight.x} y1={pRight.y} x2={rightC.x} y2={rightC.y} stroke="rgba(15,23,42,0.40)" strokeWidth="2" strokeDasharray="6 5" /> : null}

      <circle cx={pLeft.x} cy={pLeft.y} r="10" fill="#1e3a8a" stroke="rgba(255,255,255,0.40)" strokeWidth="2" />
      <circle cx={pRight.x} cy={pRight.y} r="10" fill={t <= tCut ? "#7c3aed" : "#16a34a"} stroke="rgba(255,255,255,0.40)" strokeWidth="2" />

      {showFc ? (
        <Arrow
          x1={pLeft.x}
          y1={pLeft.y}
          x2={pLeft.x + uInLeft.x * fcLen}
          y2={pLeft.y + uInLeft.y * fcLen}
          color="#f97316"
          label="F_c"
          labelNormalOffset={8}
        />
      ) : null}
      {showAc ? (
        <Arrow
          x1={pLeft.x}
          y1={pLeft.y}
          x2={pLeft.x + uInLeft.x * acLen}
          y2={pLeft.y + uInLeft.y * acLen}
          color="#3b82f6"
          label="a_c"
          dashed
          labelNormalOffset={-9}
        />
      ) : null}
      {showV ? (
        <Arrow
          x1={pLeft.x}
          y1={pLeft.y}
          x2={pLeft.x + uTanLeft.x * vLen}
          y2={pLeft.y + uTanLeft.y * vLen}
          color="#22c55e"
          label="v_t"
          labelNormalOffset={10}
        />
      ) : null}

      {showFc && t <= tCut ? (
        <Arrow
          x1={pRight.x}
          y1={pRight.y}
          x2={pRight.x + uInRight.x * fcLen}
          y2={pRight.y + uInRight.y * fcLen}
          color="#f97316"
          label="F_c"
          labelNormalOffset={8}
        />
      ) : null}
      {showV ? (
        <Arrow
          x1={pRight.x}
          y1={pRight.y}
          x2={pRight.x + uTanRight.x * vLen}
          y2={pRight.y + uTanRight.y * vLen}
          color="#22c55e"
          label="v_t"
          labelNormalOffset={10}
        />
      ) : null}

      {t > tCut ? (
        <text x={510} y={372} fontSize="13" fill="#166534" fontWeight="900">
          F_c = 0 -&gt; trayectoria tangencial
        </text>
      ) : (
        <text x={510} y={372} fontSize="13" fill="#7c2d12" fontWeight="900">
          Aun hay fuerza radial
        </text>
      )}
    </SvgFrame>
  );
}
