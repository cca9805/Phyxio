import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useRafPlayer } from "@/v2/components/graphs_shared/sim";
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

function Arrow({ x1, y1, x2, y2, color, label, labelOffset = 12, labelNormalOffset = 0, arrowExtend = 8 }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const L = Math.hypot(dx, dy) || 1;
  const ux = dx / L;
  const uy = dy / L;

  const head = 18;
  const wing = 8;

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
      <line x1={x1} y1={y1} x2={hx} y2={hy} stroke={color} strokeWidth="4" strokeLinecap="round" />
      <polygon points={`${hx},${hy} ${lx},${ly} ${rx},${ry}`} fill={color} opacity="0.96" />
      <text x={tx} y={ty} fontSize="12" fontWeight="900" fill={color} textAnchor="middle" dominantBaseline="middle">
        {label}
      </text>
    </g>
  );
}

export default function SistemasNoInercialesIntroGraphsSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "mode", aliases: ["marco", "vista"], default: p.mode || "noninertial" },
      { key: "m", aliases: ["masa", "M"], default: pickNum(p, ["m", "masa", "M"], 10) },
      { key: "aFrame", aliases: ["a_marco", "aMarco", "a"], default: pickNum(p, ["aFrame", "a_marco", "a"], 2.5) },
      { key: "showForces", aliases: ["mostrarFuerzas"], default: p.showForces ?? true },
      { key: "showTrail", aliases: ["mostrarTrayectoria"], default: p.showTrail ?? true },
      { key: "showAFrame", aliases: ["mostrarA"], default: p.showAFrame ?? true },
    ],
    [p.mode, pickNum(p, ["m", "masa", "M"], 10), pickNum(p, ["aFrame", "a_marco", "a"], 2.5), p.showForces, p.showTrail, p.showAFrame]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const mode = ep.mode || "noninertial";
  const m = clamp(toNum(ep.m, 10), 0.1, 200);
  const aFrame = clamp(toNum(ep.aFrame, 2.5), -10, 10);
  const showForces = !!ep.showForces;
  const showTrail = !!ep.showTrail;
  const showAFrame = !!ep.showAFrame;

  const isNonInertial = mode === "noninertial";

  const tMax = 7;
  const player = useRafPlayer({ tMax, initialT: 0, autoStop: false });
  const t = player.t;

  const W = 850;
  const H = 430;
  const floorY = 315;
  const centerX = 430;
  const cartW = 520;
  const cartH = 145;

  const xFrame = 0.5 * aFrame * t * t;
  const vFrame = aFrame * t;

  const cartTravelPx = clamp(xFrame * 32, -180, 180);
  const relObjPx = clamp(-xFrame * 32, -150, 150);
  const cartCenterX = mode === "inertial" ? centerX + cartTravelPx : centerX;
  const cartX = cartCenterX - cartW / 2;
  const cartY = floorY - cartH;

  const objXRaw = mode === "inertial" ? centerX : centerX + relObjPx;
  const objX = clamp(objXRaw, cartX + 44, cartX + cartW - 44);
  const objY = floorY - 42;

  const ff = m * aFrame;
  const ffLen = clamp(Math.abs(ff), 0, 220) * 0.65;
  const aLen = clamp(Math.abs(aFrame), 0, 10) * 18;
  const dirA = aFrame >= 0 ? 1 : -1;

  const fmt = (n, d = 2) => {
    if (!Number.isFinite(n)) return "-";
    return n.toFixed(d).replace(".", ",");
  };

  const setMode = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("mode", val);
  }, [exp]);
  const setM = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("m", val);
  }, [exp]);
  const setAFrame = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("aFrame", val);
  }, [exp]);
  const setShowForces = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("showForces", val);
  }, [exp]);
  const setShowTrail = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("showTrail", val);
  }, [exp]);
  const setShowAFrame = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("showAFrame", val);
  }, [exp]);

  const onPlay = useCallback(() => player.play(), [player]);
  const onPause = useCallback(() => player.pause(), [player]);
  const onReset = useCallback(() => player.reset(0), [player]);

  return (
    <SvgFrame
      title="Sistemas no inerciales intro (SVG)"
      subtitle="Compara vista inercial y no inercial en un vagon acelerado"
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
                <div style={{ marginTop: 2, color: "#f59e0b" }}>
                  <MathInline latex={"\\vec F_{fic}=-m\\,\\vec a_{marco}"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0, 0, 0, 1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Posicion del marco</div>
                <div style={{ marginTop: 2, color: "#93c5fd" }}>
                  <MathInline latex={"x_{marco}(t)=\\frac{1}{2}a_{marco}t^2"} />
                </div>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0, 0, 0, 0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>
              PARAMETROS
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
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(aFrame, 2)} m/s^2</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={aFrame} min={-10} max={10} step={0.1} onChange={setAFrame} />
                </div>
              </div>

              <div style={{ marginTop: 4, display: "flex", gap: 4, flexWrap: "wrap" }}>
                <Pill active={mode === "noninertial"} onClick={() => setMode("noninertial")}>
                  Marco no inercial
                </Pill>
                <Pill active={mode === "inertial"} onClick={() => setMode("inertial")}>
                  Marco inercial
                </Pill>
              </div>

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showForces} onChange={(e) => setShowForces(e.target.checked)} />
                  <span className="v2-toggle-label">Fuerzas</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showAFrame} onChange={(e) => setShowAFrame(e.target.checked)} />
                  <span className="v2-toggle-label">a_marco</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showTrail} onChange={(e) => setShowTrail(e.target.checked)} />
                  <span className="v2-toggle-label">Trayectoria</span>
                </label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0, 0, 0, 0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.82, lineHeight: 1.45 }}>
              t = <b>{fmt(t, 2)}</b> s
              <br />
              v_marco = <b style={{ color: "#60a5fa" }}>{fmt(vFrame, 2)}</b> m/s
              <br />
              F_fic = <b style={{ color: "#f59e0b" }}>{isNonInertial ? fmt(-ff, 2) : "0,00"}</b> N
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgNoInercialSvg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4d3ff" />
          <stop offset="100%" stopColor="#a4b8f7" />
        </linearGradient>
        <linearGradient id="cartNoInercial" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={W} height={H} fill="url(#bgNoInercialSvg)" />
      <rect x="0" y={floorY} width={W} height={H - floorY} fill="rgba(15, 23, 42, 0.42)" />
      <line x1="0" y1={floorY} x2={W} y2={floorY} stroke="rgba(255,255,255,0.32)" strokeWidth="2" />

      {showTrail ? (
        <line x1={centerX} y1={objY + 36} x2={objX} y2={objY + 36} stroke="rgba(245, 158, 11, 0.8)" strokeWidth="3" strokeDasharray="7 5" />
      ) : null}

      <g>
        <rect x={cartX} y={cartY} width={cartW} height={cartH} rx="24" fill="url(#cartNoInercial)" stroke="rgba(255,255,255,0.24)" strokeWidth="2" />
        <rect x={cartX + 16} y={cartY + 16} width={cartW - 32} height={cartH - 46} rx="18" fill="rgba(148, 163, 184, 0.18)" stroke="rgba(255,255,255,0.16)" />
        <circle cx={cartX + 95} cy={floorY + 10} r="24" fill="rgba(15,23,42,0.95)" />
        <circle cx={cartX + cartW - 95} cy={floorY + 10} r="24" fill="rgba(15,23,42,0.95)" />
      </g>

      <g>
        <rect x={objX - 24} y={objY - 24} width="48" height="48" rx="12" fill="rgba(15,23,42,0.95)" stroke="rgba(255,255,255,0.35)" />
        <text x={objX} y={objY + 4} textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.9)" fontWeight="700">
          m
        </text>
      </g>

      {showAFrame ? (
        <Arrow
          x1={cartCenterX}
          y1={cartY - 32}
          x2={cartCenterX + dirA * aLen}
          y2={cartY - 32}
          color="#6366f1"
          label="a_marco"
          labelNormalOffset={-10}
        />
      ) : null}

      {showForces && isNonInertial ? (
        <Arrow
          x1={objX}
          y1={objY}
          x2={objX - dirA * ffLen}
          y2={objY}
          color="#f59e0b"
          label="F_fic"
          labelNormalOffset={10}
        />
      ) : null}

      <text x="20" y="28" fontSize="13" fill="rgba(15,23,42,0.84)" fontWeight="700">
        vista: {isNonInertial ? "no inercial" : "inercial"}
      </text>
    </SvgFrame>
  );
}
