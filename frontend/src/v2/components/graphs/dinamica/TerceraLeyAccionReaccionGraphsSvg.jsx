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

export default function TerceraLeyAccionReaccionGraphsSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "F", aliases: ["Fx", "Fnet"], default: pickNum(p, ["F", "Fx", "Fnet"], 20) },
      { key: "mA", aliases: ["mA", "m1", "m"], default: pickNum(p, ["mA", "m1", "m"], 5) },
      { key: "mB", aliases: ["mB", "m2"], default: pickNum(p, ["mB", "m2"], 8) },
      { key: "showForces", aliases: ["mostrarFuerzas"], default: p.showForces ?? true },
      { key: "showVel", aliases: ["mostrarVel"], default: p.showVel ?? true },
      { key: "showTrail", aliases: ["mostrarTrayectoria"], default: p.showTrail ?? true },
    ],
    [pickNum(p, ["F", "Fx", "Fnet"], 20), pickNum(p, ["mA", "m1", "m"], 5), pickNum(p, ["mB", "m2"], 8), p.showForces, p.showVel, p.showTrail]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const F = clamp(toNum(ep.F, 20), 1, 80);
  const mA = clamp(toNum(ep.mA, 5), 0.2, 60);
  const mB = clamp(toNum(ep.mB, 8), 0.2, 60);
  const showForces = !!ep.showForces;
  const showVel = !!ep.showVel;
  const showTrail = !!ep.showTrail;

  const tPush = 1.2;
  const tMax = 6;
  const player = useRafPlayer({ tMax, initialT: 0, autoStop: false });
  const t = player.t;

  const aA = -F / mA;
  const aB = F / mB;

  const state = useMemo(() => {
    const tau = Math.min(t, tPush);
    const after = Math.max(0, t - tPush);

    const xA_push = 0.5 * aA * tau * tau;
    const xB_push = 0.5 * aB * tau * tau;
    const vA_push = aA * tau;
    const vB_push = aB * tau;

    if (t <= tPush) {
      return { xA: xA_push, xB: xB_push, vA: vA_push, vB: vB_push, pushing: true };
    }

    const xA_end = 0.5 * aA * tPush * tPush;
    const xB_end = 0.5 * aB * tPush * tPush;
    const vA_end = aA * tPush;
    const vB_end = aB * tPush;

    return {
      xA: xA_end + vA_end * after,
      xB: xB_end + vB_end * after,
      vA: vA_end,
      vB: vB_end,
      pushing: false,
    };
  }, [t, aA, aB]);

  const fmt = (n, d = 2) => {
    if (!Number.isFinite(n)) return "-";
    return n.toFixed(d).replace(".", ",");
  };

  const setF = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("F", val);
  }, [exp]);

  const setMA = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("mA", val);
  }, [exp]);

  const setMB = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("mB", val);
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

  const onPlay = useCallback(() => player.play(), [player]);
  const onPause = useCallback(() => player.pause(), [player]);
  const onReset = useCallback(() => player.reset(0), [player]);

  const W = 850;
  const H = 420;
  const floorY = 250;
  const pxPerM = 24;

  const baseA = 360;
  const baseB = 490;
  const yObj = floorY - 42;
  const rA = 30;
  const rB = 34;

  const xA = clamp(baseA + state.xA * pxPerM, 80, W - 80);
  const xB = clamp(baseB + state.xB * pxPerM, 80, W - 80);

  const forceLen = 24 + F * 1.6;
  const velScale = 20;
  const vALen = clamp(Math.abs(state.vA) * velScale, 0, 120);
  const vBLen = clamp(Math.abs(state.vB) * velScale, 0, 120);

  const trailA1 = clamp(baseA + (state.pushing ? 0 : 0.5 * aA * tPush * tPush) * pxPerM, 80, W - 80);
  const trailA2 = xA;
  const trailB1 = clamp(baseB + (state.pushing ? 0 : 0.5 * aB * tPush * tPush) * pxPerM, 80, W - 80);
  const trailB2 = xB;

  return (
    <SvgFrame
      title="Tercera ley de Newton (SVG)"
      subtitle="Dos cuerpos se empujan: fuerzas iguales y opuestas en cuerpos distintos"
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
                <div style={{ fontSize: 12, opacity: 0.75 }}>Par accion-reaccion</div>
                <div style={{ marginTop: 2, color: "#c4b5fd" }}>
                  <MathInline latex={"\\vec F_{A\\to B}=-\\vec F_{B\\to A}"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0, 0, 0, 1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Aceleraciones</div>
                <div style={{ marginTop: 2, color: "#93c5fd" }}>
                  <MathInline latex={"a_A=-\\frac{F}{m_A},\\quad a_B=\\frac{F}{m_B}"} />
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
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>F</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(F, 2)} N</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={F} min={1} max={80} step={0.5} onChange={setF} />
                </div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>mA</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(mA, 2)} kg</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={mA} min={0.2} max={40} step={0.1} onChange={setMA} />
                </div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>mB</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(mB, 2)} kg</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={mB} min={0.2} max={40} step={0.1} onChange={setMB} />
                </div>
              </div>

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showForces} onChange={(e) => setShowForces(e.target.checked)} />
                  <span className="v2-toggle-label">Fuerzas</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showVel} onChange={(e) => setShowVel(e.target.checked)} />
                  <span className="v2-toggle-label">Velocidades</span>
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
              vA = <b style={{ color: "#60a5fa" }}>{fmt(state.vA, 2)}</b> m/s
              <br />
              vB = <b style={{ color: "#f472b6" }}>{fmt(state.vB, 2)}</b> m/s
              <br />
              {state.pushing ? "En contacto: hay par accion-reaccion." : "Sin contacto: movimiento inercial."}
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgThirdSvg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4d3ff" />
          <stop offset="100%" stopColor="#a4b8f7" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={W} height={H} fill="url(#bgThirdSvg)" />
      <rect x="0" y={floorY} width={W} height={H - floorY} fill="rgba(15, 23, 42, 0.42)" />
      <line x1="0" y1={floorY} x2={W} y2={floorY} stroke="rgba(255,255,255,0.32)" strokeWidth="2" />

      {showTrail ? (
        <g opacity="0.7">
          <line x1={trailA1} y1={yObj + 34} x2={trailA2} y2={yObj + 34} stroke="#60a5fa" strokeWidth="3" strokeDasharray="6 5" />
          <line x1={trailB1} y1={yObj + 34} x2={trailB2} y2={yObj + 34} stroke="#f472b6" strokeWidth="3" strokeDasharray="6 5" />
        </g>
      ) : null}

      <g>
        <circle cx={xA} cy={yObj} r={rA} fill="rgba(30, 64, 175, 0.92)" stroke="rgba(255,255,255,0.38)" strokeWidth="2" />
        <text x={xA} y={yObj + 4} textAnchor="middle" fontSize="14" fontWeight="900" fill="white">
          A
        </text>
        <circle cx={xB} cy={yObj} r={rB} fill="rgba(190, 24, 93, 0.90)" stroke="rgba(255,255,255,0.38)" strokeWidth="2" />
        <text x={xB} y={yObj + 4} textAnchor="middle" fontSize="14" fontWeight="900" fill="white">
          B
        </text>
      </g>

      {showForces && state.pushing ? (
        <g>
          <Arrow x1={xA + rA - 2} y1={yObj - 20} x2={xA - forceLen} y2={yObj - 20} color="#7c3aed" label="F(B->A)" labelNormalOffset={-10} />
          <Arrow x1={xB - rB + 2} y1={yObj - 20} x2={xB + forceLen} y2={yObj - 20} color="#7c3aed" label="F(A->B)" labelNormalOffset={10} />
        </g>
      ) : null}

      {showVel ? (
        <g>
          {Math.abs(state.vA) > 0.02 ? (
            <Arrow
              x1={xA}
              y1={yObj + 18}
              x2={xA + (state.vA >= 0 ? vALen : -vALen)}
              y2={yObj + 18}
              color="#60a5fa"
              label="vA"
              labelNormalOffset={10}
            />
          ) : null}
          {Math.abs(state.vB) > 0.02 ? (
            <Arrow
              x1={xB}
              y1={yObj + 24}
              x2={xB + (state.vB >= 0 ? vBLen : -vBLen)}
              y2={yObj + 24}
              color="#f472b6"
              label="vB"
              labelNormalOffset={10}
            />
          ) : null}
        </g>
      ) : null}

      <text x="20" y="28" fontSize="13" fill="rgba(15,23,42,0.84)" fontWeight="700">
        Contacto activo: {state.pushing ? "si" : "no"}
      </text>
    </SvgFrame>
  );
}
