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
      {label ? (
        <text x={tx} y={ty} fontSize="12" fontWeight="900" fill={color} textAnchor="middle" dominantBaseline="middle">
          {label}
        </text>
      ) : null}
    </g>
  );
}

export default function DescomposicionVectorialGraphsSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "mode", aliases: ["modo"], default: p.mode || "incline" },
      { key: "A", aliases: ["magnitud"], default: pickNum(p, ["A", "magnitud"], 9.8) },
      { key: "theta", aliases: ["angulo", "th"], default: pickNum(p, ["theta", "angulo", "th"], 30) },
      { key: "showComponents", aliases: ["mostrarComp"], default: p.showComponents ?? true },
      { key: "showProjections", aliases: ["mostrarProy"], default: p.showProjections ?? true },
      { key: "showMotion", aliases: ["mostrarMovimiento"], default: p.showMotion ?? true },
    ],
    [p.mode, pickNum(p, ["A", "magnitud"], 9.8), pickNum(p, ["theta", "angulo", "th"], 30), p.showComponents, p.showProjections, p.showMotion]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const mode = ep.mode || "incline";
  const A = clamp(toNum(ep.A, 9.8), 1, 30);
  const thetaBase = clamp(toNum(ep.theta, 30), 0, 80);
  const showComponents = !!ep.showComponents;
  const showProjections = !!ep.showProjections;
  const showMotion = !!ep.showMotion;

  const tMax = 8;
  const player = useRafPlayer({ tMax, initialT: 0, autoStop: false });
  const t = player.t;

  const theta = showMotion ? clamp(thetaBase + 10 * Math.sin(t * 0.9), 0, 80) : thetaBase;
  const rad = (theta * Math.PI) / 180;

  const setMode = useCallback((v) => {
    exp.startExperiment();
    exp.setValue("mode", v);
  }, [exp]);
  const setA = useCallback((v) => {
    exp.startExperiment();
    exp.setValue("A", v);
  }, [exp]);
  const setTheta = useCallback((v) => {
    exp.startExperiment();
    exp.setValue("theta", v);
  }, [exp]);
  const setShowComponents = useCallback((v) => {
    exp.startExperiment();
    exp.setValue("showComponents", v);
  }, [exp]);
  const setShowProjections = useCallback((v) => {
    exp.startExperiment();
    exp.setValue("showProjections", v);
  }, [exp]);
  const setShowMotion = useCallback((v) => {
    exp.startExperiment();
    exp.setValue("showMotion", v);
  }, [exp]);

  const onPlay = useCallback(() => player.play(), [player]);
  const onPause = useCallback(() => player.pause(), [player]);
  const onReset = useCallback(() => player.reset(0), [player]);

  const W = 850;
  const H = 430;
  const origin = { x: 540, y: 220 };
  const scale = 9;
  const toPx = (v) => ({ x: origin.x + v.x * scale, y: origin.y - v.y * scale });

  const ePar = { x: Math.cos(rad), y: Math.sin(rad) };
  const ePerp = { x: -Math.sin(rad), y: Math.cos(rad) };

  let main = { x: 0, y: 0 };
  let c1 = { x: 0, y: 0 };
  let c2 = { x: 0, y: 0 };
  let labels = { main: "A", c1: "Ax", c2: "Ay" };

  if (mode === "cartesian") {
    main = { x: A * Math.cos(rad), y: A * Math.sin(rad) };
    c1 = { x: main.x, y: 0 };
    c2 = { x: 0, y: main.y };
    labels = { main: "A", c1: "Ax", c2: "Ay" };
  } else {
    main = { x: 0, y: -A };
    const APar = main.x * ePar.x + main.y * ePar.y;
    const APerp = main.x * ePerp.x + main.y * ePerp.y;
    c1 = { x: APar * ePar.x, y: APar * ePar.y };
    c2 = { x: APerp * ePerp.x, y: APerp * ePerp.y };
    labels = { main: "mg", c1: "mg_par", c2: "mg_perp" };
  }

  const Pm = toPx(main);
  const Pc1 = toPx(c1);
  const Pc2 = toPx(c2);

  const inclineOrigin = { x: 175, y: 315 };
  const inclineStart = {
    x: inclineOrigin.x - Math.cos(rad) * 140,
    y: inclineOrigin.y + Math.sin(rad) * 140,
  };
  const inclineEnd = {
    x: inclineOrigin.x + Math.cos(rad) * 280,
    y: inclineOrigin.y - Math.sin(rad) * 280,
  };
  const inclineObj = {
    x: inclineOrigin.x + Math.cos(rad) * 120,
    y: inclineOrigin.y - Math.sin(rad) * 120,
  };
  const inclineSpanX = Math.abs(inclineEnd.x - inclineStart.x);
  const sceneCardWidth = mode === "incline" ? clamp(inclineSpanX + 70, 290, 430) : 290;

  const fmt = (n, d = 2) => {
    if (!Number.isFinite(n)) return "-";
    return n.toFixed(d).replace(".", ",");
  };

  return (
    <SvgFrame
      title="Descomposicion vectorial (SVG)"
      subtitle="Visualiza el vector y sus componentes en un objeto real"
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
                <div style={{ fontSize: 12, opacity: 0.75 }}>Descomposicion</div>
                <div style={{ marginTop: 2, color: "#93c5fd" }}>
                  <MathInline latex={"\\vec A=\\vec A_1+\\vec A_2"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0, 0, 0, 1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Cartesianas</div>
                <div style={{ marginTop: 2, color: "#86efac" }}>
                  <MathInline latex={"A_x=A\\cos\\theta,\\;A_y=A\\sin\\theta"} />
                </div>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0, 0, 0, 0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>
              PARAMETROS
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                <Pill active={mode === "incline"} onClick={() => setMode("incline")}>
                  Plano inclinado
                </Pill>
                <Pill active={mode === "cartesian"} onClick={() => setMode("cartesian")}>
                  Cartesiano
                </Pill>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>{mode === "incline" ? "mg" : "A"}</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(A, 2)}</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={A} min={1} max={30} step={0.1} onChange={setA} />
                </div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>theta</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(thetaBase, 0)} deg</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={thetaBase} min={0} max={80} step={1} onChange={setTheta} />
                </div>
              </div>

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showComponents} onChange={(e) => setShowComponents(e.target.checked)} />
                  <span className="v2-toggle-label">Componentes</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showProjections} onChange={(e) => setShowProjections(e.target.checked)} />
                  <span className="v2-toggle-label">Proyecciones</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showMotion} onChange={(e) => setShowMotion(e.target.checked)} />
                  <span className="v2-toggle-label">Movimiento</span>
                </label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0, 0, 0, 0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.82, lineHeight: 1.45 }}>
              t = <b>{fmt(t, 2)}</b> s
              <br />
              theta_eff = <b style={{ color: "#93c5fd" }}>{fmt(theta, 1)}</b> deg
              <br />
              {mode === "cartesian" ? (
                <>
                  Ax = <b style={{ color: "#ff2d55" }}>{fmt(main.x, 2)}</b>, Ay = <b style={{ color: "#34c759" }}>{fmt(main.y, 2)}</b>
                </>
              ) : (
                <>
                  mg_par = <b style={{ color: "#ff2d55" }}>{fmt(Math.hypot(c1.x, c1.y), 2)}</b>, mg_perp = <b style={{ color: "#34c759" }}>{fmt(Math.hypot(c2.x, c2.y), 2)}</b>
                </>
              )}
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgVecSvg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4d3ff" />
          <stop offset="100%" stopColor="#a4b8f7" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={W} height={H} fill="url(#bgVecSvg)" />
      <rect x="20" y="20" width={sceneCardWidth} height={H - 40} rx="20" fill="rgba(15,23,42,0.18)" />

      {mode === "incline" ? (
        <g>
          <line
            x1={inclineStart.x}
            y1={inclineStart.y}
            x2={inclineEnd.x}
            y2={inclineEnd.y}
            stroke="rgba(255,255,255,0.30)"
            strokeWidth="6"
          />
          <g transform={`translate(${inclineObj.x},${inclineObj.y}) rotate(${-theta})`}>
            <rect x="-48" y="-22" width="96" height="44" rx="10" fill="rgba(15,23,42,0.95)" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
            <circle cx="0" cy="0" r="4" fill="rgba(255,255,255,0.85)" />
          </g>
        </g>
      ) : (
        <g>
          <circle cx="170" cy="190" r="56" fill="rgba(15,23,42,0.22)" />
          <circle cx="170" cy="190" r="38" fill="rgba(15,23,42,0.90)" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
          <text x="170" y="194" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.9)" fontWeight="700">
            objeto
          </text>
        </g>
      )}

      <g>
        <circle cx={origin.x} cy={origin.y} r="9" fill="rgba(0,0,0,0.55)" />
        <circle cx={origin.x} cy={origin.y} r="7" fill="rgba(255,255,255,0.12)" />
      </g>

      <g opacity="0.95">
        <Arrow x1={origin.x} y1={origin.y} x2={origin.x + 130} y2={origin.y} color="#5b7aa8" label="x" />
        <Arrow x1={origin.x} y1={origin.y} x2={origin.x} y2={origin.y - 130} color="#5b7aa8" label="y" />
        {mode === "incline" ? (
          <>
            <Arrow x1={origin.x} y1={origin.y} x2={origin.x + ePar.x * 130} y2={origin.y - ePar.y * 130} color="#7c3aed" label="par" />
            <Arrow x1={origin.x} y1={origin.y} x2={origin.x + ePerp.x * 110} y2={origin.y - ePerp.y * 110} color="#7c3aed" label="perp" />
          </>
        ) : null}
      </g>

      <Arrow x1={origin.x} y1={origin.y} x2={Pm.x} y2={Pm.y} color="#006aff" label={labels.main} />

      {showComponents ? (
        <>
          <Arrow x1={origin.x} y1={origin.y} x2={Pc1.x} y2={Pc1.y} color="#ff2d55" label={labels.c1} />
          <Arrow x1={origin.x} y1={origin.y} x2={Pc2.x} y2={Pc2.y} color="#34c759" label={labels.c2} />

          {showProjections ? (
            mode === "cartesian" ? (
              <>
                <line x1={Pm.x} y1={Pm.y} x2={Pc1.x} y2={Pm.y} stroke="#64748b" strokeWidth="3" strokeDasharray="8 8" opacity="0.85" />
                <line x1={Pm.x} y1={Pm.y} x2={Pm.x} y2={Pc2.y} stroke="#64748b" strokeWidth="3" strokeDasharray="8 8" opacity="0.85" />
              </>
            ) : (
              <>
                <line x1={Pc1.x} y1={Pc1.y} x2={Pm.x} y2={Pm.y} stroke="#64748b" strokeWidth="3" strokeDasharray="8 8" opacity="0.85" />
                <line x1={Pc2.x} y1={Pc2.y} x2={Pm.x} y2={Pm.y} stroke="#64748b" strokeWidth="3" strokeDasharray="8 8" opacity="0.85" />
              </>
            )
          ) : null}
        </>
      ) : null}
    </SvgFrame>
  );
}
