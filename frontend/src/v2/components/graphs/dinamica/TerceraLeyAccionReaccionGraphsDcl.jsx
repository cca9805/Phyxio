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
      <text x={tx} y={ty} fontSize="12" fontWeight="900" fill={color} textAnchor="middle" dominantBaseline="middle">
        {label}
      </text>
    </g>
  );
}

export default function TerceraLeyAccionReaccionGraphsDcl(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      {
        key: "F",
        aliases: ["Fx", "F_x", "Fap", "F_aplicada", "Faplicada", "Fnet", "F_net", "Fres", "F_res", "SigmaF", "SigmaFx", "sumFx"],
        default: pickNum(p, ["F", "Fx", "Fnet"], 20),
      },
      { key: "mA", aliases: ["mA", "m_a", "m1", "m"], default: pickNum(p, ["mA", "m_a", "m1", "m"], 5) },
      { key: "mB", aliases: ["mB", "m_b", "m2"], default: pickNum(p, ["mB", "m_b", "m2"], 8) },
      { key: "showExt", aliases: ["mostrarExterna"], default: p.showExt ?? true },
      { key: "showPair", aliases: ["mostrarPar"], default: p.showPair ?? true },
      { key: "showLabels", aliases: ["mostrarEtiquetas"], default: p.showLabels ?? true },
      { key: "showEquation", aliases: ["mostrarEcuacion"], default: p.showEquation ?? true },
    ],
    [pickNum(p, ["F", "Fx", "Fnet"], 20), pickNum(p, ["mA", "m_a", "m1", "m"], 5), pickNum(p, ["mB", "m_b", "m2"], 8), p.showExt, p.showPair, p.showLabels, p.showEquation]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const F = clamp(toNum(ep.F, 20), -200, 200);
  const mA = clamp(toNum(ep.mA, 5), 0.1, 200);
  const mB = clamp(toNum(ep.mB, 8), 0.1, 200);
  const showExt = !!ep.showExt;
  const showPair = !!ep.showPair;
  const showLabels = !!ep.showLabels;
  const showEquation = !!ep.showEquation;

  const fmt = (n, d = 2) => {
    if (!Number.isFinite(n)) return "-";
    return n.toFixed(d).replace(".", ",");
  };

  const setF = useCallback((v) => {
    exp.startExperiment();
    exp.setValue("F", v);
  }, [exp]);

  const setMA = useCallback((v) => {
    exp.startExperiment();
    exp.setValue("mA", v);
  }, [exp]);

  const setMB = useCallback((v) => {
    exp.startExperiment();
    exp.setValue("mB", v);
  }, [exp]);

  const setShowExt = useCallback((v) => {
    exp.startExperiment();
    exp.setValue("showExt", v);
  }, [exp]);

  const setShowPair = useCallback((v) => {
    exp.startExperiment();
    exp.setValue("showPair", v);
  }, [exp]);

  const setShowLabels = useCallback((v) => {
    exp.startExperiment();
    exp.setValue("showLabels", v);
  }, [exp]);

  const setShowEquation = useCallback((v) => {
    exp.startExperiment();
    exp.setValue("showEquation", v);
  }, [exp]);

  const W = 850;
  const H = 360;
  const floorY = 240;

  const ax = 280;
  const bx = 560;
  const by = 182;
  const blockW = 96;
  const blockH = 62;
  const dir = F >= 0 ? 1 : -1;
  const fLen = 50 + clamp(Math.abs(F), 0, 140) * 1.1;

  return (
    <SvgFrame
      title="Tercera ley de Newton (DCL)"
      subtitle="Accion y reaccion: mismas magnitudes, sentidos opuestos, cuerpos distintos"
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
                <div style={{ fontSize: 12, opacity: 0.75 }}>Par accion-reaccion</div>
                <div style={{ marginTop: 2, color: "#c4b5fd" }}>
                  <MathInline latex={"\\vec F_{A\\to B}=-\\vec F_{B\\to A}"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0, 0, 0, 1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Clave conceptual</div>
                <div style={{ marginTop: 2, color: "#93c5fd" }}>
                  <MathInline latex={"\\text{No se cancelan: actuan en cuerpos distintos}"} />
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
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>F de contacto</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(F, 2)} N</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={F} min={-80} max={80} step={0.5} onChange={setF} />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>mA</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(mA, 2)} kg</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={mA} min={0.1} max={60} step={0.1} onChange={setMA} />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>mB</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(mB, 2)} kg</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={mB} min={0.1} max={60} step={0.1} onChange={setMB} />
                </div>
              </div>

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showExt} onChange={(e) => setShowExt(e.target.checked)} />
                  <span className="v2-toggle-label">F externa en A</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showPair} onChange={(e) => setShowPair(e.target.checked)} />
                  <span className="v2-toggle-label">Par accion-reaccion</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showLabels} onChange={(e) => setShowLabels(e.target.checked)} />
                  <span className="v2-toggle-label">Etiquetas</span>
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
              F(A{"->"}B) = <b style={{ color: "#c4b5fd" }}>{fmt(F, 2)}</b> N
              <br />
              F(B{"->"}A) = <b style={{ color: "#c4b5fd" }}>{fmt(-F, 2)}</b> N
              <br />
              Magnitudes iguales, sentidos opuestos.
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bg3rdLaw" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4d3ff" />
          <stop offset="100%" stopColor="#a4b8f7" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={W} height={H} fill="url(#bg3rdLaw)" />
      <rect x="0" y={floorY} width={W} height={H - floorY} fill="rgba(15, 23, 42, 0.42)" />
      <line x1="0" y1={floorY} x2={W} y2={floorY} stroke="rgba(255,255,255,0.32)" strokeWidth="2" />

      <rect x={ax - blockW / 2} y={by - blockH / 2} width={blockW} height={blockH} rx="12" fill="rgba(15,23,42,0.95)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
      <rect x={bx - blockW / 2} y={by - blockH / 2} width={blockW} height={blockH} rx="12" fill="rgba(15,23,42,0.95)" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
      <circle cx={ax} cy={by} r="4" fill="rgba(255,255,255,0.85)" />
      <circle cx={bx} cy={by} r="4" fill="rgba(255,255,255,0.85)" />

      {showLabels ? (
        <>
          <text x={ax} y={by - 48} textAnchor="middle" fontSize="13" fill="rgba(15,23,42,0.88)" fontWeight="800">
            Cuerpo A
          </text>
          <text x={bx} y={by - 48} textAnchor="middle" fontSize="13" fill="rgba(15,23,42,0.88)" fontWeight="800">
            Cuerpo B
          </text>
        </>
      ) : null}

      <g>
        {showExt ? (
          <Arrow
            x1={ax + dir * (blockW / 2)}
            y1={by}
            x2={ax + dir * (blockW / 2 + fLen)}
            y2={by}
            color="#2563eb"
            label={showLabels ? "F ext" : ""}
            labelOffset={13}
            labelNormalOffset={dir > 0 ? 10 : -10}
          />
        ) : null}

        {showPair ? (
          <>
            <Arrow
              x1={ax + blockW / 2}
              y1={by + 20}
              x2={ax - fLen}
              y2={by + 20}
              color="#7c3aed"
              label={showLabels ? "F(B->A)" : ""}
              labelOffset={13}
              labelNormalOffset={-10}
            />
            <Arrow
              x1={bx - blockW / 2}
              y1={by + 20}
              x2={bx + fLen}
              y2={by + 20}
              color="#7c3aed"
              label={showLabels ? "F(A->B)" : ""}
              labelOffset={13}
              labelNormalOffset={10}
            />
          </>
        ) : null}
      </g>

      {showEquation ? (
        <text x={W / 2} y={H - 18} textAnchor="middle" fontSize="15" fill="#0f172a" fontWeight="900">
          F(A{"->"}B) = -F(B{"->"}A) | actuan en cuerpos distintos
        </text>
      ) : null}
    </SvgFrame>
  );
}
