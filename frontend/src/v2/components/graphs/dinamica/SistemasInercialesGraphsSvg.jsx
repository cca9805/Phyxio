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

export default function SistemasInercialesGraphsSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa", "M"], default: pickNum(p, ["m", "masa", "M"], 10) },
      { key: "g", aliases: ["gravedad"], default: pickNum(p, ["g", "gravedad"], 9.81) },
      { key: "v0", aliases: ["v", "velocidad"], default: pickNum(p, ["v0", "v", "velocidad"], 2) },
      { key: "horizF", aliases: ["F", "Fx", "fuerza"], default: pickNum(p, ["horizF", "F", "Fx"], 20) },
      { key: "showForces", aliases: ["mostrarFuerzas"], default: p.showForces ?? true },
      { key: "showVel", aliases: ["mostrarVel"], default: p.showVel ?? true },
      { key: "showTrail", aliases: ["mostrarTrayectoria"], default: p.showTrail ?? true },
      { key: "showHoriz", aliases: ["mostrarHoriz"], default: p.showHoriz ?? false },
    ],
    [pickNum(p, ["m", "masa", "M"], 10), pickNum(p, ["g", "gravedad"], 9.81), pickNum(p, ["v0", "v", "velocidad"], 2), pickNum(p, ["horizF", "F", "Fx"], 20), p.showForces, p.showVel, p.showTrail, p.showHoriz]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(toNum(ep.m, 10), 0.1, 200);
  const g = clamp(toNum(ep.g, 9.81), 0, 20);
  const v0 = clamp(toNum(ep.v0, 2), -8, 8);
  const horizF = clamp(toNum(ep.horizF, 20), 0, 120);
  const showForces = !!ep.showForces;
  const showVel = !!ep.showVel;
  const showTrail = !!ep.showTrail;
  const showHoriz = !!ep.showHoriz;

  const tMax = 8;
  const player = useRafPlayer({ tMax, initialT: 0, autoStop: false });
  const t = player.t;

  const W = 850;
  const H = 420;
  const floorY = 305;
  const laneStart = 70;
  const laneEnd = W - 70;
  const laneW = laneEnd - laneStart;
  const pxPerMS = 28;
  const disp = v0 * t * pxPerMS;
  const xCart = laneStart + ((((laneW * 0.5 + disp) % laneW) + laneW) % laneW);
  const yCart = floorY - 54;

  const vertLen = 42 + clamp(m * g, 0, 260) * 0.22;
  const horizLen = 48 + horizF * 0.9;
  const velLen = clamp(Math.abs(v0) * 30, 0, 180);
  const dirV = v0 >= 0 ? 1 : -1;

  const fmt = (n, d = 2) => {
    if (!Number.isFinite(n)) return "-";
    return n.toFixed(d).replace(".", ",");
  };

  const setM = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("m", val);
  }, [exp]);
  const setG = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("g", val);
  }, [exp]);
  const setV0 = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("v0", val);
  }, [exp]);
  const setHorizF = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("horizF", val);
  }, [exp]);
  const setShowForces = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("showForces", val);
  }, [exp]);
  const setShowVel = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("showVel", val);
  }, [exp]);
  const setShowTrail = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("showTrail", val);
  }, [exp]);
  const setShowHoriz = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("showHoriz", val);
  }, [exp]);

  const onPlay = useCallback(() => player.play(), [player]);
  const onPause = useCallback(() => player.pause(), [player]);
  const onReset = useCallback(() => player.reset(0), [player]);

  return (
    <SvgFrame
      title="Sistemas inerciales (SVG)"
      subtitle="Objeto en reposo o MRU cuando la resultante neta es cero"
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
                <div style={{ fontSize: 12, opacity: 0.75 }}>Marco inercial</div>
                <div style={{ marginTop: 2, color: "#93c5fd" }}>
                  <MathInline latex={"\\sum\\vec F=0\\Rightarrow\\vec a=0"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0, 0, 0, 1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Movimiento</div>
                <div style={{ marginTop: 2, color: "#86efac" }}>
                  <MathInline latex={"x(t)=x_0+v_0\\,t"} />
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
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>g</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(g, 2)} m/s^2</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={g} min={0} max={15} step={0.1} onChange={setG} />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>v0</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(v0, 2)} m/s</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={v0} min={-8} max={8} step={0.1} onChange={setV0} />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>F equilibrada</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(horizF, 2)} N</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={horizF} min={0} max={80} step={0.5} onChange={setHorizF} />
                </div>
              </div>

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showForces} onChange={(e) => setShowForces(e.target.checked)} />
                  <span className="v2-toggle-label">Fuerzas</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showVel} onChange={(e) => setShowVel(e.target.checked)} />
                  <span className="v2-toggle-label">Velocidad</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showTrail} onChange={(e) => setShowTrail(e.target.checked)} />
                  <span className="v2-toggle-label">Trayectoria</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showHoriz} onChange={(e) => setShowHoriz(e.target.checked)} />
                  <span className="v2-toggle-label">Fx equilibradas</span>
                </label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0, 0, 0, 0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.82, lineHeight: 1.45 }}>
              t = <b>{fmt(t, 2)}</b> s
              <br />
              Estado: <b style={{ color: "#93c5fd" }}>{Math.abs(v0) < 0.03 ? "Reposo" : "MRU"}</b>
              <br />
              N = mg = <b style={{ color: "#86efac" }}>{fmt(m * g, 2)}</b> N
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgInercialSvg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4d3ff" />
          <stop offset="100%" stopColor="#a4b8f7" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={W} height={H} fill="url(#bgInercialSvg)" />
      <rect x="0" y={floorY} width={W} height={H - floorY} fill="rgba(15, 23, 42, 0.42)" />
      <line x1="0" y1={floorY} x2={W} y2={floorY} stroke="rgba(255,255,255,0.32)" strokeWidth="2" />

      {showTrail ? (
        <line x1={laneStart} y1={yCart + 45} x2={xCart} y2={yCart + 45} stroke="#60a5fa" strokeWidth="3" strokeDasharray="7 6" opacity="0.7" />
      ) : null}

      <g>
        <rect x={xCart - 60} y={yCart - 30} width="120" height="60" rx="14" fill="rgba(15,23,42,0.94)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
        <circle cx={xCart} cy={yCart} r="4" fill="rgba(255,255,255,0.85)" />
      </g>

      {showForces ? (
        <g>
          <Arrow x1={xCart} y1={yCart - 30} x2={xCart} y2={yCart - 30 - vertLen} color="#16a34a" label="N" labelOffset={14} />
          <Arrow x1={xCart} y1={yCart + 30} x2={xCart} y2={yCart + 30 + vertLen} color="#dc2626" label="mg" labelOffset={14} />
          {showHoriz ? (
            <>
              <Arrow x1={xCart - 60} y1={yCart} x2={xCart - 60 - horizLen} y2={yCart} color="#2563eb" label="F" labelNormalOffset={-10} />
              <Arrow x1={xCart + 60} y1={yCart} x2={xCart + 60 + horizLen} y2={yCart} color="#2563eb" label="F" labelNormalOffset={10} />
            </>
          ) : null}
        </g>
      ) : null}

      {showVel && Math.abs(v0) > 0.02 ? (
        <Arrow
          x1={xCart}
          y1={yCart - 46}
          x2={xCart + dirV * velLen}
          y2={yCart - 46}
          color="#7c3aed"
          label="v"
          labelNormalOffset={-10}
        />
      ) : null}
    </SvgFrame>
  );
}
