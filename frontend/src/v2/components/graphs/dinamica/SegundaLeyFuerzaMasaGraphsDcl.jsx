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

export default function SegundaLeyFuerzaMasaGraphsDcl(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa", "M"], default: pickNum(p, ["m", "masa", "M"], 10) },
      {
        key: "F",
        aliases: ["Fx", "F_x", "Fap", "F_aplicada", "Faplicada", "Fnet", "F_net", "Fres", "F_res", "Fresultante", "SigmaF", "SigmaFx", "sumFx"],
        default: pickNum(p, ["F", "Fx", "Fnet"], 20),
      },
      { key: "g", aliases: ["gravedad"], default: pickNum(p, ["g", "gravedad"], 9.81) },
      { key: "showNormal", aliases: ["mostrarNormal"], default: p.showNormal ?? true },
      { key: "showWeight", aliases: ["mostrarPeso"], default: p.showWeight ?? true },
      { key: "showApplied", aliases: ["mostrarF"], default: p.showApplied ?? true },
      { key: "showAccel", aliases: ["mostrarA"], default: p.showAccel ?? true },
      { key: "showEquation", aliases: ["mostrarEcuacion"], default: p.showEquation ?? true },
    ],
    [pickNum(p, ["m", "masa", "M"], 10), pickNum(p, ["F", "Fx", "Fnet"], 20), pickNum(p, ["g", "gravedad"], 9.81), p.showNormal, p.showWeight, p.showApplied, p.showAccel, p.showEquation]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(toNum(ep.m, 10), 0.05, 300);
  const F = clamp(toNum(ep.F, 20), -200, 200);
  const g = clamp(toNum(ep.g, 9.81), 0, 20);
  const showNormal = !!ep.showNormal;
  const showWeight = !!ep.showWeight;
  const showApplied = !!ep.showApplied;
  const showAccel = !!ep.showAccel;
  const showEquation = !!ep.showEquation;

  const a = F / m;
  const Wn = m * g;

  const fmt = (n, d = 2) => {
    if (!Number.isFinite(n)) return "-";
    return n.toFixed(d).replace(".", ",");
  };

  const setM = useCallback((v) => {
    exp.startExperiment();
    exp.setValue("m", v);
  }, [exp]);

  const setF = useCallback((v) => {
    exp.startExperiment();
    exp.setValue("F", v);
  }, [exp]);

  const setG = useCallback((v) => {
    exp.startExperiment();
    exp.setValue("g", v);
  }, [exp]);

  const setShowNormal = useCallback((v) => {
    exp.startExperiment();
    exp.setValue("showNormal", v);
  }, [exp]);

  const setShowWeight = useCallback((v) => {
    exp.startExperiment();
    exp.setValue("showWeight", v);
  }, [exp]);

  const setShowApplied = useCallback((v) => {
    exp.startExperiment();
    exp.setValue("showApplied", v);
  }, [exp]);

  const setShowAccel = useCallback((v) => {
    exp.startExperiment();
    exp.setValue("showAccel", v);
  }, [exp]);

  const setShowEquation = useCallback((v) => {
    exp.startExperiment();
    exp.setValue("showEquation", v);
  }, [exp]);

  const W = 850;
  const H = 360;
  const cx = 430;
  const floorY = 230;
  const blockW = 88;
  const blockH = 56;
  const blockX = cx - blockW / 2;
  const blockY = floorY - blockH;

  const dir = F >= 0 ? 1 : -1;
  const fLen = 52 + clamp(Math.abs(F), 0, 120) * 1.2;
  const aLen = 42 + clamp(Math.abs(a), 0, 25) * 8;
  const vLen = 48 + clamp(Wn, 0, 280) * 0.24;

  return (
    <SvgFrame
      title="Segunda ley de Newton (DCL)"
      subtitle="La aceleracion es proporcional a la fuerza neta e inversa a la masa"
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
                <div style={{ fontSize: 12, opacity: 0.75 }}>Segunda ley</div>
                <div style={{ marginTop: 2, color: "#93c5fd" }}>
                  <MathInline latex={"\\sum \\vec F = m\\,\\vec a"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0, 0, 0, 1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>En eje x</div>
                <div style={{ marginTop: 2, color: "#a5b4fc" }}>
                  <MathInline latex={"a=\\frac{F}{m}"} />
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
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>F neta</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(F, 2)} N</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={F} min={-80} max={80} step={0.5} onChange={setF} />
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

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showApplied} onChange={(e) => setShowApplied(e.target.checked)} />
                  <span className="v2-toggle-label">Fuerza F</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showAccel} onChange={(e) => setShowAccel(e.target.checked)} />
                  <span className="v2-toggle-label">Aceleracion a</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showNormal} onChange={(e) => setShowNormal(e.target.checked)} />
                  <span className="v2-toggle-label">Normal N</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showWeight} onChange={(e) => setShowWeight(e.target.checked)} />
                  <span className="v2-toggle-label">Peso mg</span>
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
              a = <b style={{ color: "#a5b4fc" }}>{fmt(a, 3)}</b> m/s^2
              <br />
              N = mg = <b style={{ color: "#86efac" }}>{fmt(Wn, 2)}</b> N
              <br />
              Sentido de movimiento: <b style={{ color: "#93c5fd" }}>{dir > 0 ? "+x" : "-x"}</b>
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bg2ndLaw" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4d3ff" />
          <stop offset="100%" stopColor="#a4b8f7" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={W} height={H} fill="url(#bg2ndLaw)" />
      <rect x="0" y={floorY} width={W} height={H - floorY} fill="rgba(15, 23, 42, 0.42)" />
      <line x1="0" y1={floorY} x2={W} y2={floorY} stroke="rgba(255,255,255,0.32)" strokeWidth="2" />

      <rect x={blockX} y={blockY} width={blockW} height={blockH} rx="12" fill="rgba(15,23,42,0.95)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
      <circle cx={cx} cy={blockY + blockH / 2} r="4" fill="rgba(255,255,255,0.85)" />

      <g>
        {showNormal ? (
          <Arrow x1={cx} y1={blockY} x2={cx} y2={blockY - vLen} color="#16a34a" label="N" labelOffset={14} />
        ) : null}
        {showWeight ? (
          <Arrow x1={cx} y1={blockY + blockH} x2={cx} y2={blockY + blockH + vLen} color="#dc2626" label="P=mg" labelOffset={14} />
        ) : null}
        {showApplied ? (
          <Arrow
            x1={dir > 0 ? blockX + blockW : blockX}
            y1={blockY + blockH / 2}
            x2={dir > 0 ? blockX + blockW + fLen : blockX - fLen}
            y2={blockY + blockH / 2}
            color="#2563eb"
            label="F"
            labelOffset={13}
            labelNormalOffset={dir > 0 ? 10 : -10}
          />
        ) : null}
        {showAccel ? (
          <Arrow
            x1={cx}
            y1={blockY - 26}
            x2={cx + dir * aLen}
            y2={blockY - 26}
            color="#7c3aed"
            label="a"
            labelOffset={13}
            labelNormalOffset={-10}
          />
        ) : null}
      </g>

      {showEquation ? (
        <text x={cx} y={H - 18} textAnchor="middle" fontSize="16" fill="#0f172a" fontWeight="900">
          Sigma F = m a {"=>"} a = F/m
        </text>
      ) : null}
    </SvgFrame>
  );
}
