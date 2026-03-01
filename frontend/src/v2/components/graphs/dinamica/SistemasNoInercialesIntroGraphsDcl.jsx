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

export default function SistemasNoInercialesIntroGraphsDcl(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "mode", aliases: ["marco", "vista"], default: p.mode || "noninertial" },
      { key: "m", aliases: ["masa", "M"], default: pickNum(p, ["m", "masa", "M"], 10) },
      { key: "aFrame", aliases: ["a_marco", "aMarco", "a"], default: pickNum(p, ["aFrame", "a_marco", "a"], 2) },
      { key: "g", aliases: ["gravedad"], default: pickNum(p, ["g", "gravedad"], 9.81) },
      { key: "showNormal", aliases: ["mostrarNormal"], default: p.showNormal ?? true },
      { key: "showWeight", aliases: ["mostrarPeso"], default: p.showWeight ?? true },
      { key: "showFictitious", aliases: ["mostrarFict"], default: p.showFictitious ?? true },
      { key: "showAFrame", aliases: ["mostrarA"], default: p.showAFrame ?? true },
      { key: "showEquation", aliases: ["mostrarEcuacion"], default: p.showEquation ?? true },
    ],
    [p.mode, pickNum(p, ["m", "masa", "M"], 10), pickNum(p, ["aFrame", "a_marco", "a"], 2), pickNum(p, ["g", "gravedad"], 9.81), p.showNormal, p.showWeight, p.showFictitious, p.showAFrame, p.showEquation]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const mode = ep.mode || "noninertial";
  const m = clamp(toNum(ep.m, 10), 0.05, 300);
  const aFrame = clamp(toNum(ep.aFrame, 2), -12, 12);
  const g = clamp(toNum(ep.g, 9.81), 0, 20);
  const showNormal = !!ep.showNormal;
  const showWeight = !!ep.showWeight;
  const showFictitious = !!ep.showFictitious;
  const showAFrame = !!ep.showAFrame;
  const showEquation = !!ep.showEquation;

  const isNonInertial = mode === "noninertial";
  const weight = m * g;
  const Ffic = m * aFrame;

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
  const setG = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("g", val);
  }, [exp]);
  const setShowNormal = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("showNormal", val);
  }, [exp]);
  const setShowWeight = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("showWeight", val);
  }, [exp]);
  const setShowFictitious = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("showFictitious", val);
  }, [exp]);
  const setShowAFrame = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("showAFrame", val);
  }, [exp]);
  const setShowEquation = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("showEquation", val);
  }, [exp]);

  const W = 850;
  const H = 360;
  const origin = { x: 430, y: 165 };
  const dir = aFrame >= 0 ? 1 : -1;

  const vertLen = 48 + clamp(weight, 0, 280) * 0.24;
  const aLen = clamp(Math.abs(aFrame), 0, 10) * 16;
  const ficLen = clamp(Math.abs(Ffic), 0, 180) * 0.72;

  return (
    <SvgFrame
      title="Sistemas no inerciales (DCL)"
      subtitle="En un marco acelerado se agrega la fuerza ficticia para aplicar Newton"
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
                <div style={{ fontSize: 12, opacity: 0.75 }}>Fuerza ficticia</div>
                <div style={{ marginTop: 2, color: "#f59e0b" }}>
                  <MathInline latex={"\\vec F_{fic}=-m\\,\\vec a_{marco}"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0, 0, 0, 1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Ecuacion en marco no inercial</div>
                <div style={{ marginTop: 2, color: "#93c5fd" }}>
                  <MathInline latex={"\\sum\\vec F_{reales}+\\vec F_{fic}=m\\,\\vec a_{rel}"} />
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
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>g</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(g, 2)} m/s^2</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={g} min={0} max={15} step={0.1} onChange={setG} />
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
                  <input className="v2-toggle-input" type="checkbox" checked={showNormal} onChange={(e) => setShowNormal(e.target.checked)} />
                  <span className="v2-toggle-label">Normal N</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showWeight} onChange={(e) => setShowWeight(e.target.checked)} />
                  <span className="v2-toggle-label">Peso mg</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showAFrame} onChange={(e) => setShowAFrame(e.target.checked)} />
                  <span className="v2-toggle-label">a_marco</span>
                </label>
                <label className="v2-toggle" style={{ opacity: isNonInertial ? 1 : 0.6 }}>
                  <input className="v2-toggle-input" type="checkbox" checked={showFictitious} onChange={(e) => setShowFictitious(e.target.checked)} disabled={!isNonInertial} />
                  <span className="v2-toggle-label">F_fic</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showEquation} onChange={(e) => setShowEquation(e.target.checked)} />
                  <span className="v2-toggle-label">Ecuacion</span>
                </label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0, 0, 0, 0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.82, lineHeight: 1.45 }}>
              mg = <b style={{ color: "#fca5a5" }}>{fmt(weight, 2)}</b> N
              <br />
              F_fic = <b style={{ color: "#f59e0b" }}>{isNonInertial ? fmt(-Ffic, 2) : "0,00"}</b> N
              <br />
              Marco activo: <b style={{ color: "#93c5fd" }}>{isNonInertial ? "no inercial" : "inercial"}</b>
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
        {showNormal ? (
          <Arrow x1={origin.x} y1={origin.y} x2={origin.x} y2={origin.y - vertLen} color="#16a34a" label="N" labelOffset={14} />
        ) : null}
        {showWeight ? (
          <Arrow x1={origin.x} y1={origin.y} x2={origin.x} y2={origin.y + vertLen} color="#dc2626" label="mg" labelOffset={14} />
        ) : null}
        {showAFrame && isNonInertial ? (
          <Arrow
            x1={origin.x}
            y1={origin.y - 28}
            x2={origin.x + dir * aLen}
            y2={origin.y - 28}
            color="#6366f1"
            label="a_marco"
            labelOffset={13}
            labelNormalOffset={-10}
          />
        ) : null}
        {showFictitious && isNonInertial ? (
          <Arrow
            x1={origin.x}
            y1={origin.y}
            x2={origin.x - dir * ficLen}
            y2={origin.y}
            color="#f59e0b"
            label="F_fic"
            labelOffset={13}
            labelNormalOffset={10}
          />
        ) : null}
      </g>

      {showEquation ? (
        <text x={origin.x} y={H - 18} textAnchor="middle" fontSize="16" fill="#0f172a" fontWeight="900">
          {isNonInertial ? "Sigma F_reales + F_fic = m a_rel" : "Sigma F = m a"}
        </text>
      ) : null}
    </SvgFrame>
  );
}
