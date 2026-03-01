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

function Arrow({ x1, y1, x2, y2, color, label, labelOffset = 12, labelNormalOffset = 0, arrowExtend = 10 }) {
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
      <text x={tx} y={ty} fontSize="13" fontWeight="900" fill={color} textAnchor="middle" dominantBaseline="middle">
        {label}
      </text>
    </g>
  );
}

export default function DiagramasCuerpoLibreGraphsDcl(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "scene", aliases: ["escena"], default: p.scene || "table" },
      { key: "theta", aliases: ["angulo", "th"], default: pickNum(p, ["theta", "angulo", "th"], 25) },
      { key: "showWeight", aliases: ["mostrarPeso"], default: p.showWeight ?? true },
      { key: "showNormal", aliases: ["mostrarNormal"], default: p.showNormal ?? true },
      { key: "showFriction", aliases: ["mostrarRozamiento"], default: p.showFriction ?? true },
      { key: "showTension", aliases: ["mostrarTension"], default: p.showTension ?? true },
      { key: "showEquation", aliases: ["mostrarEcuacion"], default: p.showEquation ?? true },
    ],
    [p.scene, pickNum(p, ["theta", "angulo", "th"], 25), p.showWeight, p.showNormal, p.showFriction, p.showTension, p.showEquation]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const scene = ep.scene || "table";
  const theta = clamp(toNum(ep.theta, 25), 5, 60);
  const showWeight = !!ep.showWeight;
  const showNormal = !!ep.showNormal;
  const showFriction = !!ep.showFriction;
  const showTension = !!ep.showTension;
  const showEquation = !!ep.showEquation;

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
  const setShowEquation = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("showEquation", val);
  }, [exp]);

  const W = 850;
  const H = 360;
  const origin = { x: 430, y: 165 };

  const thetaRad = (theta * Math.PI) / 180;
  const planeUx = Math.cos(thetaRad);
  const planeUy = -Math.sin(thetaRad);
  const normalUx = -planeUy;
  const normalUy = planeUx;

  const lenW = 112;
  const lenN = 110;
  const lenF = 102;
  const lenT = 110;

  return (
    <SvgFrame
      title="Diagramas de cuerpo libre (DCL)"
      subtitle="Representa el cuerpo como punto y solo fuerzas reales"
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
                <div style={{ fontSize: 12, opacity: 0.75 }}>Fuerzas reales</div>
                <div style={{ marginTop: 2, color: "#93c5fd" }}>
                  <MathInline latex={"\\{\\vec W,\\vec N,\\vec T,\\vec f\\}"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0, 0, 0, 1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Dinamica</div>
                <div style={{ marginTop: 2, color: "#86efac" }}>
                  <MathInline latex={"\\sum\\vec F=m\\,\\vec a"} />
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
                <input className="v2-toggle-input" type="checkbox" checked={showEquation} onChange={(e) => setShowEquation(e.target.checked)} />
                <span className="v2-toggle-label">Ecuacion</span>
              </label>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0, 0, 0, 0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.82, lineHeight: 1.45 }}>
              Escenario: <b style={{ color: "#93c5fd" }}>{scene === "table" ? "mesa" : scene === "incline" ? "plano inclinado" : "masa colgante"}</b>
              <br />
              {scene === "incline" ? `theta = ${theta.toFixed(0)} deg` : "Solo fuerzas relevantes al problema."}
            </div>
          </div>
        </div>
      }
    >
      <rect x="0" y="0" width={W} height={H} fill="#b8c5ffff" />
      <rect x="0" y="0" width={W} height={H} fill="rgba(0,0,0,0.08)" />

      <g>
        <circle cx={origin.x} cy={origin.y} r="10" fill="rgba(0,0,0,0.55)" />
        <circle cx={origin.x} cy={origin.y} r="8" fill="rgba(255,255,255,0.12)" />
      </g>

      <g>
        {showWeight ? (
          <Arrow x1={origin.x} y1={origin.y} x2={origin.x} y2={origin.y + lenW} color="#dc2626" label="mg" labelOffset={14} />
        ) : null}

        {scene === "table" && showNormal ? (
          <Arrow x1={origin.x} y1={origin.y} x2={origin.x} y2={origin.y - lenN} color="#16a34a" label="N" labelOffset={14} />
        ) : null}
        {scene === "table" && showFriction ? (
          <Arrow x1={origin.x} y1={origin.y} x2={origin.x - lenF} y2={origin.y} color="#f59e0b" label="f" labelNormalOffset={-10} />
        ) : null}

        {scene === "incline" && showNormal ? (
          <Arrow
            x1={origin.x}
            y1={origin.y}
            x2={origin.x + normalUx * lenN}
            y2={origin.y + normalUy * lenN}
            color="#16a34a"
            label="N"
            labelNormalOffset={-10}
          />
        ) : null}
        {scene === "incline" && showFriction ? (
          <Arrow
            x1={origin.x}
            y1={origin.y}
            x2={origin.x + planeUx * lenF}
            y2={origin.y + planeUy * lenF}
            color="#f59e0b"
            label="f"
            labelNormalOffset={10}
          />
        ) : null}

        {scene === "hanging" && showTension ? (
          <Arrow x1={origin.x} y1={origin.y} x2={origin.x} y2={origin.y - lenT} color="#6366f1" label="T" labelOffset={14} />
        ) : null}
      </g>

      {showEquation ? (
        <text x={origin.x} y={H - 18} textAnchor="middle" fontSize="16" fill="#0f172a" fontWeight="900">
          Sigma F = m a
        </text>
      ) : null}
    </SvgFrame>
  );
}
