import React, { useEffect, useMemo, useCallback } from "react";
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

function Arrow({ x1, y1, x2, y2, color, label, labelOffset = 14, labelNormalOffset = 0, arrowExtend = 10 }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const L = Math.hypot(dx, dy) || 1;
  const ux = dx / L;
  const uy = dy / L;

  const head = 20;
  const wing = 9;

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
      <line x1={x1} y1={y1} x2={hx} y2={hy} stroke={color} strokeWidth="5" strokeLinecap="round" />
      <polygon points={`${hx},${hy} ${lx},${ly} ${rx},${ry}`} fill={color} opacity="0.96" />
      <text x={tx} y={ty} fontSize="13" fontWeight="900" fill={color} textAnchor="middle" dominantBaseline="middle">
        {label}
      </text>
    </g>
  );
}

export default function ConceptoFuerzasFicticiasGraphsSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: pickNum(p, ["m", "masa"], 10) },
      { key: "a", aliases: ["aFrame", "a_marco", "aceleracion_marco"], default: pickNum(p, ["a", "aFrame", "a_marco"], 3) },
      { key: "view", aliases: ["vista"], default: p.view || "noninertial" },
      { key: "showFict", aliases: ["mostrarFict"], default: p.showFict ?? true },
      { key: "showAccel", aliases: ["mostrarA"], default: p.showAccel ?? true },
    ],
    [pickNum(p, ["m", "masa"], 10), pickNum(p, ["a", "aFrame", "a_marco"], 3), p.view, p.showFict, p.showAccel]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(toNum(ep.m, 10), 0.05, 500);
  const a = clamp(toNum(ep.a, 3), -12, 12);
  const view = ep.view || "noninertial";
  const showFict = !!ep.showFict;
  const showAccel = !!ep.showAccel;

  const tMax = 6;
  const player = useRafPlayer({ tMax, initialT: 0, autoStop: false });

  useEffect(() => {
    player.reset(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [a, view]);

  const t = player.t;
  const xFrame = useMemo(() => 0.5 * a * t * t, [a, t]);
  const vFrame = useMemo(() => a * t, [a, t]);

  const Ff = m * a;

  const fmt = (n, d = 2) => {
    if (!Number.isFinite(n)) return "-";
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

  const setView = useCallback(
    (val) => {
      exp.startExperiment();
      exp.setValue("view", val);
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

  const onPlay = useCallback(() => player.play(), [player]);
  const onPause = useCallback(() => player.pause(), [player]);
  const onReset = useCallback(() => player.reset(0), [player]);

  const W = 850;
  const H = 420;

  const sceneCenterX = 430;
  const floorY = 315;
  const cartW = 530;
  const cartH = 150;

  const cartTravelPx = clamp(xFrame * 34, -180, 180);
  const objRelativePx = clamp(-xFrame * 34, -155, 155);

  const cartCenterX = view === "inertial" ? sceneCenterX + cartTravelPx : sceneCenterX;
  const cartX = cartCenterX - cartW / 2;
  const cartY = floorY - cartH;

  const objCenterXRaw = view === "inertial" ? sceneCenterX : sceneCenterX + objRelativePx;
  const objCenterX = clamp(objCenterXRaw, cartX + 44, cartX + cartW - 44);
  const objCenterY = floorY - 44;

  const aPx = clamp(a, -10, 10) * 16;
  const ffPx = clamp(-Ff, -180, 180) * 0.75;

  return (
    <SvgFrame
      title="Concepto de fuerzas ficticias (SVG)"
      subtitle="Vagon acelerado y objeto visto desde marco inercial/no inercial"
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
                <div style={{ marginTop: 2, color: "#f87b7bff" }}>
                  <MathInline latex={"\\vec F_{fict}=-m\\,\\vec a_{marco}"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0, 0, 0, 1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>En marco no inercial</div>
                <div style={{ marginTop: 2, color: "#f87b7bff" }}>
                  <MathInline latex={"\\sum\\vec F_{reales}+\\vec F_{fict}=m\\,\\vec a_{rel}"} />
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
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(a, 2)} m/s^2</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={a} min={-10} max={10} step={0.1} onChange={setA} />
                </div>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(2, 2, 2, 0.40)" }}>
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>VISTA</div>
            <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 4 }}>
              <Pill active={view === "noninertial"} onClick={() => setView("noninertial")}>
                Marco no inercial
              </Pill>
              <Pill active={view === "inertial"} onClick={() => setView("inertial")}>
                Marco inercial
              </Pill>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0, 0, 0, 0.40)" }}>
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>MOSTRAR</div>
            <div className="v2-toggle-row" style={{ marginTop: 10 }}>
              <label className="v2-toggle">
                <input className="v2-toggle-input" type="checkbox" checked={showFict} onChange={(e) => setShowFict(e.target.checked)} />
                <span className="v2-toggle-label">Fuerza ficticia</span>
              </label>
              <label className="v2-toggle">
                <input className="v2-toggle-input" type="checkbox" checked={showAccel} onChange={(e) => setShowAccel(e.target.checked)} />
                <span className="v2-toggle-label">Aceleracion del marco</span>
              </label>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0, 0, 0, 0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.8, lineHeight: 1.45 }}>
              F_fict = <b style={{ color: "#fb923c" }}>{fmt(-Ff, 2)}</b> N
              <br />
              v_marco(t) = <b style={{ color: "#7c3aed" }}>{fmt(vFrame, 2)}</b> m/s
              <br />
              x_marco(t) = <b style={{ color: "#06b6d4" }}>{fmt(xFrame, 2)}</b> m
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="skyGradFict" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b9ceff" />
          <stop offset="100%" stopColor="#9bb7f5" />
        </linearGradient>
        <linearGradient id="cartGradFict" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={W} height={H} fill="url(#skyGradFict)" />
      <rect x="0" y={floorY} width={W} height={H - floorY} fill="rgba(20, 27, 40, 0.45)" />
      <line x1="0" y1={floorY} x2={W} y2={floorY} stroke="rgba(255,255,255,0.25)" strokeWidth="2" />

      <g opacity="0.4">
        <line x1="20" y1={floorY + 30} x2={W - 20} y2={floorY + 30} stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
        <line x1="40" y1={floorY + 50} x2={W - 40} y2={floorY + 50} stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
      </g>

      <g>
        <rect x={cartX} y={cartY} width={cartW} height={cartH} rx={24} fill="url(#cartGradFict)" stroke="rgba(255,255,255,0.24)" strokeWidth="2" />
        <rect
          x={cartX + 16}
          y={cartY + 16}
          width={cartW - 32}
          height={cartH - 46}
          rx={18}
          fill="rgba(148, 163, 184, 0.18)"
          stroke="rgba(255,255,255,0.16)"
        />
        <circle cx={cartX + 95} cy={floorY + 10} r="24" fill="rgba(15,23,42,0.95)" />
        <circle cx={cartX + cartW - 95} cy={floorY + 10} r="24" fill="rgba(15,23,42,0.95)" />
        <circle cx={cartX + 95} cy={floorY + 10} r="10" fill="rgba(148,163,184,0.65)" />
        <circle cx={cartX + cartW - 95} cy={floorY + 10} r="10" fill="rgba(148,163,184,0.65)" />
      </g>

      <g>
        <rect x={objCenterX - 24} y={objCenterY - 24} width="48" height="48" rx="12" fill="rgba(15,23,42,0.95)" stroke="rgba(255,255,255,0.35)" />
        <text x={objCenterX} y={objCenterY + 4} textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.9)" fontWeight="700">
          m
        </text>
      </g>

      <g>
        {showAccel ? (
          <Arrow
            x1={cartCenterX}
            y1={cartY - 34}
            x2={cartCenterX + aPx}
            y2={cartY - 34}
            color="#006aff"
            label="a_marco"
            labelOffset={14}
            labelNormalOffset={-10}
          />
        ) : null}
        {showFict ? (
          <Arrow
            x1={objCenterX}
            y1={objCenterY}
            x2={objCenterX + ffPx}
            y2={objCenterY}
            color="#ff2d55"
            label="F_fict"
            labelOffset={14}
            labelNormalOffset={12}
          />
        ) : null}
      </g>

      <text x="22" y="30" fontSize="13" fill="rgba(15,23,42,0.82)" fontWeight="700">
        t = {fmt(t, 2)} s
      </text>
      <text x="22" y="50" fontSize="13" fill="rgba(15,23,42,0.82)" fontWeight="700">
        vista: {view === "noninertial" ? "no inercial" : "inercial"}
      </text>
    </SvgFrame>
  );
}
