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

export default function IdentificacionDeFuerzasGraphsSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "scene", aliases: ["escena"], default: p.scene || "table" },
      { key: "theta", aliases: ["angulo", "th"], default: pickNum(p, ["theta", "angulo", "th"], 25) },
      { key: "showWeight", aliases: ["mostrarPeso"], default: p.showWeight ?? true },
      { key: "showNormal", aliases: ["mostrarNormal"], default: p.showNormal ?? true },
      { key: "showFriction", aliases: ["mostrarRozamiento"], default: p.showFriction ?? true },
      { key: "showTension", aliases: ["mostrarTension"], default: p.showTension ?? true },
      { key: "showMotion", aliases: ["mostrarMovimiento"], default: p.showMotion ?? true },
    ],
    [p.scene, pickNum(p, ["theta", "angulo", "th"], 25), p.showWeight, p.showNormal, p.showFriction, p.showTension, p.showMotion]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const scene = ep.scene || "table";
  const theta = clamp(toNum(ep.theta, 25), 5, 60);
  const showWeight = !!ep.showWeight;
  const showNormal = !!ep.showNormal;
  const showFriction = !!ep.showFriction;
  const showTension = !!ep.showTension;
  const showMotion = !!ep.showMotion;

  const tMax = 8;
  const player = useRafPlayer({ tMax, initialT: 0, autoStop: false });
  const t = player.t;

  const W = 850;
  const H = 430;
  const floorY = 320;
  const baseX = 430;

  const thetaRad = (theta * Math.PI) / 180;
  const planeUx = Math.cos(thetaRad);
  const planeUy = -Math.sin(thetaRad);
  const normalUx = -planeUy;
  const normalUy = planeUx;

  const motion = useMemo(() => {
    const amp = 95;
    const speed = 0.95;
    const s = Math.sin(t * speed);
    return showMotion ? amp * s : 0;
  }, [t, showMotion]);

  const tableObj = { x: clamp(baseX + motion, 140, W - 140), y: floorY - 38 };
  const inclineOrigin = { x: 290, y: floorY - 18 };
  const inclineObj = {
    x: clamp(inclineOrigin.x + planeUx * 170 + planeUx * motion * 0.5, 120, W - 120),
    y: clamp(inclineOrigin.y + planeUy * 170 + planeUy * motion * 0.5, 90, floorY - 30),
  };
  const hangingTop = { x: 430, y: 78 };
  const hangingObj = { x: hangingTop.x, y: clamp(150 + motion * 0.35, 110, 265) };

  const fmt = (n, d = 2) => {
    if (!Number.isFinite(n)) return "-";
    return n.toFixed(d).replace(".", ",");
  };

  const setScene = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("scene", val);
  }, [exp]);
  const setTheta = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("theta", val);
  }, [exp]);
  const setShowWeight = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("showWeight", val);
  }, [exp]);
  const setShowNormal = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("showNormal", val);
  }, [exp]);
  const setShowFriction = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("showFriction", val);
  }, [exp]);
  const setShowTension = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("showTension", val);
  }, [exp]);
  const setShowMotion = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("showMotion", val);
  }, [exp]);

  const onPlay = useCallback(() => player.play(), [player]);
  const onPause = useCallback(() => player.pause(), [player]);
  const onReset = useCallback(() => player.reset(0), [player]);

  return (
    <SvgFrame
      title="Identificacion de fuerzas (SVG)"
      subtitle="Escenas fisicas para reconocer que fuerzas reales actuan"
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
                <div style={{ fontSize: 12, opacity: 0.75 }}>Fuerzas reales</div>
                <div style={{ marginTop: 2, color: "#93c5fd" }}>
                  <MathInline latex={"\\{\\vec W,\\vec N,\\vec T,\\vec f\\}"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0, 0, 0, 1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Dinamica</div>
                <div style={{ marginTop: 2, color: "#86efac" }}>
                  <MathInline latex={"\\sum\\vec F = m\\,\\vec a"} />
                </div>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0, 0, 0, 0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>
              ESCENA
            </div>
            <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
              <Pill active={scene === "table"} onClick={() => setScene("table")}>
                Mesa
              </Pill>
              <Pill active={scene === "incline"} onClick={() => setScene("incline")}>
                Plano
              </Pill>
              <Pill active={scene === "hanging"} onClick={() => setScene("hanging")}>
                Colgante
              </Pill>
            </div>

            {scene === "incline" ? (
              <div style={{ marginTop: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>theta</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{theta.toFixed(0)} deg</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={theta} min={5} max={60} step={1} onChange={setTheta} />
                </div>
              </div>
            ) : null}

            <div className="v2-toggle-row" style={{ marginTop: 10 }}>
              <label className="v2-toggle">
                <input className="v2-toggle-input" type="checkbox" checked={showWeight} onChange={(e) => setShowWeight(e.target.checked)} />
                <span className="v2-toggle-label">Peso mg</span>
              </label>
              <label className="v2-toggle" style={{ opacity: scene === "hanging" ? 0.6 : 1 }}>
                <input className="v2-toggle-input" type="checkbox" checked={showNormal} onChange={(e) => setShowNormal(e.target.checked)} disabled={scene === "hanging"} />
                <span className="v2-toggle-label">Normal N</span>
              </label>
              <label className="v2-toggle" style={{ opacity: scene === "hanging" ? 0.6 : 1 }}>
                <input className="v2-toggle-input" type="checkbox" checked={showFriction} onChange={(e) => setShowFriction(e.target.checked)} disabled={scene === "hanging"} />
                <span className="v2-toggle-label">Rozamiento f</span>
              </label>
              <label className="v2-toggle" style={{ opacity: scene === "hanging" ? 1 : 0.6 }}>
                <input className="v2-toggle-input" type="checkbox" checked={showTension} onChange={(e) => setShowTension(e.target.checked)} disabled={scene !== "hanging"} />
                <span className="v2-toggle-label">Tension T</span>
              </label>
              <label className="v2-toggle">
                <input className="v2-toggle-input" type="checkbox" checked={showMotion} onChange={(e) => setShowMotion(e.target.checked)} />
                <span className="v2-toggle-label">Movimiento</span>
              </label>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0, 0, 0, 0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.82, lineHeight: 1.45 }}>
              t = <b>{fmt(t, 2)}</b> s
              <br />
              Escena: <b style={{ color: "#93c5fd" }}>{scene === "table" ? "mesa" : scene === "incline" ? "plano inclinado" : "masa colgante"}</b>
              <br />
              Objetivo: identificar fuerzas reales.
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgIdentSvg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4d3ff" />
          <stop offset="100%" stopColor="#a4b8f7" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={W} height={H} fill="url(#bgIdentSvg)" />
      <rect x="0" y={floorY} width={W} height={H - floorY} fill="rgba(15, 23, 42, 0.42)" />
      <line x1="0" y1={floorY} x2={W} y2={floorY} stroke="rgba(255,255,255,0.32)" strokeWidth="2" />

      {scene === "table" ? (
        <g>
          <rect x={tableObj.x - 54} y={tableObj.y - 28} width="108" height="56" rx="12" fill="rgba(15,23,42,0.95)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          <circle cx={tableObj.x} cy={tableObj.y} r="4" fill="rgba(255,255,255,0.85)" />
          {showWeight ? <Arrow x1={tableObj.x} y1={tableObj.y + 28} x2={tableObj.x} y2={tableObj.y + 130} color="#dc2626" label="mg" /> : null}
          {showNormal ? <Arrow x1={tableObj.x} y1={tableObj.y - 28} x2={tableObj.x} y2={tableObj.y - 130} color="#16a34a" label="N" /> : null}
          {showFriction ? <Arrow x1={tableObj.x - 54} y1={tableObj.y} x2={tableObj.x - 150} y2={tableObj.y} color="#f59e0b" label="f" labelNormalOffset={-10} /> : null}
        </g>
      ) : null}

      {scene === "incline" ? (
        <g>
          <line
            x1={inclineOrigin.x - planeUx * 150}
            y1={inclineOrigin.y - planeUy * 150}
            x2={inclineOrigin.x + planeUx * 420}
            y2={inclineOrigin.y + planeUy * 420}
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="6"
          />
          <g transform={`translate(${inclineObj.x},${inclineObj.y}) rotate(${-theta})`}>
            <rect x="-52" y="-24" width="104" height="48" rx="10" fill="rgba(15,23,42,0.95)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
            <circle cx="0" cy="0" r="4" fill="rgba(255,255,255,0.85)" />
          </g>
          {showWeight ? <Arrow x1={inclineObj.x} y1={inclineObj.y} x2={inclineObj.x} y2={inclineObj.y + 118} color="#dc2626" label="mg" /> : null}
          {showNormal ? (
            <Arrow
              x1={inclineObj.x}
              y1={inclineObj.y}
              x2={inclineObj.x + normalUx * 110}
              y2={inclineObj.y + normalUy * 110}
              color="#16a34a"
              label="N"
              labelNormalOffset={-10}
            />
          ) : null}
          {showFriction ? (
            <Arrow
              x1={inclineObj.x}
              y1={inclineObj.y}
              x2={inclineObj.x + planeUx * 100}
              y2={inclineObj.y + planeUy * 100}
              color="#f59e0b"
              label="f"
              labelNormalOffset={10}
            />
          ) : null}
        </g>
      ) : null}

      {scene === "hanging" ? (
        <g>
          <line x1={hangingTop.x - 110} y1={hangingTop.y} x2={hangingTop.x + 110} y2={hangingTop.y} stroke="rgba(255,255,255,0.32)" strokeWidth="5" />
          <line x1={hangingTop.x} y1={hangingTop.y} x2={hangingObj.x} y2={hangingObj.y - 26} stroke="rgba(203, 213, 225, 0.95)" strokeWidth="3" />
          <circle cx={hangingObj.x} cy={hangingObj.y} r="30" fill="rgba(15,23,42,0.95)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
          <text x={hangingObj.x} y={hangingObj.y + 4} textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.92)" fontWeight="700">
            m
          </text>
          {showWeight ? <Arrow x1={hangingObj.x} y1={hangingObj.y + 30} x2={hangingObj.x} y2={hangingObj.y + 130} color="#dc2626" label="mg" /> : null}
          {showTension ? <Arrow x1={hangingObj.x} y1={hangingObj.y - 30} x2={hangingObj.x} y2={hangingObj.y - 130} color="#16a34a" label="T" /> : null}
        </g>
      ) : null}
    </SvgFrame>
  );
}
