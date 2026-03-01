import { useMemo, useCallback } from "react";
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
        background: active ? "rgba(99,102,241,0.35)" : "rgba(255,255,255,0.06)",
        color: "rgba(255,255,255,0.92)",
        fontWeight: 800,
        fontSize: 12,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {children}
    </button>
  );
}

export default function SistemasConMuellesGraphsSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "topology", aliases: ["conexion", "tipo"], default: p.topology || "parallel" },
      { key: "k1", aliases: ["k_1"], default: pickNum(p, ["k1", "k_1"], 80) },
      { key: "k2", aliases: ["k_2"], default: pickNum(p, ["k2", "k_2"], 120) },
      { key: "x", aliases: ["elongacion"], default: pickNum(p, ["x", "elongacion"], 0.12) },
      { key: "F", aliases: ["fuerza"], default: pickNum(p, ["F", "fuerza"], 20) },
    ],
    [
      p.topology,
      pickNum(p, ["k1", "k_1"], 80),
      pickNum(p, ["k2", "k_2"], 120),
      pickNum(p, ["x", "elongacion"], 0.12),
      pickNum(p, ["F", "fuerza"], 20),
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const topology = ep.topology || "parallel";
  const k1 = clamp(toNum(ep.k1, 80), 1, 2000);
  const k2 = clamp(toNum(ep.k2, 120), 1, 2000);
  const x = clamp(toNum(ep.x, 0.12), 0, 0.4);
  const F = clamp(toNum(ep.F, 20), 0, 200);

  const keq = topology === "parallel" ? k1 + k2 : (k1 * k2) / (k1 + k2);

  const calc = useMemo(() => {
    if (topology === "parallel") {
      const F1 = k1 * x;
      const F2 = k2 * x;
      return { kind: "parallel", x, F1, F2, Ft: F1 + F2 };
    }
    const x1 = F / k1;
    const x2 = F / k2;
    return { kind: "series", F, x1, x2, x: x1 + x2, F1: F, F2: F, Ft: F };
  }, [topology, k1, k2, x, F]);

  const setTopology = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("topology", val);
  }, [exp]);

  const setK1 = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("k1", val);
  }, [exp]);

  const setK2 = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("k2", val);
  }, [exp]);

  const setX = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("x", val);
  }, [exp]);

  const setF = useCallback((val) => {
    exp.startExperiment();
    exp.setValue("F", val);
  }, [exp]);

  // Geometría SVG
  const W = 850;
  const H = 750;

  const panel = {
    w: 380,
    h: 330,
    y: 50,
    gap: 25,
  };
  const leftX = (W - (panel.w * 2 + panel.gap)) / 2;
  const rightX = leftX + panel.w + panel.gap;

  const inner = { xPad: 22, yPadTop: 56, yPadBot: 28 };

  const Fmax = Math.max(Math.abs(calc.Ft), Math.abs(calc.F1), Math.abs(calc.F2), 1);
  const arrowMax = 160;
  const sF = arrowMax / Fmax;

  const fmt = (n, d = 2) => {
    if (!Number.isFinite(n)) return "—";
    return n.toFixed(d).replace(".", ",");
  };

  const springPath = (x0, y0, len, turns = 8, amp = 10) => {
    const seg = len / (turns * 2);
    let d = `M ${x0} ${y0}`;
    for (let i = 0; i < turns * 2; i++) {
      const xx = x0 + seg * (i + 1);
      const yy = y0 + (i % 2 === 0 ? -amp : amp);
      d += ` L ${xx} ${yy}`;
    }
    d += ` L ${x0 + len} ${y0}`;
    return d;
  };

  const Arrow = ({ x1, y1, x2, y2, color, label }) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const L = Math.hypot(dx, dy) || 1;
    const ux = dx / L;
    const uy = dy / L;
    const head = 14;
    const wing = 8;

    const hx = x2;
    const hy = y2;
    const lx = hx - ux * head - uy * wing;
    const ly = hy - uy * head + ux * wing;
    const rx = hx - ux * head + uy * wing;
    const ry = hy - uy * head - ux * wing;

    return (
      <g>
        <line x1={x1} y1={y1} x2={hx} y2={hy} stroke={color} strokeWidth="5" strokeLinecap="round" />
        <polygon points={`${hx - 10},${hy} ${lx},${ly} ${rx},${ry}`} fill={color} opacity="0.96" />
        <text x={hx - 25} y={hy + 4} fontSize="13" fontWeight="900" fill={color}>
          {label}
        </text>
      </g>
    );
  };

  return (
    <SvgFrame
      title="Sistemas con muelles"
      subtitle="Equivalente k_eq en serie y paralelo"
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
          {/* Fórmulas */}
          <div className="v2-panel m-3 mb-1">
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>
              ECUACIONES
            </div>

            <div style={{ marginTop: 10, display: "grid", gap: 2 }}>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0, 0, 0, 1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Hooke (equivalente)</div>
                <div style={{ marginTop: 2, color: "#f87b7bff" }}>
                  <MathInline latex={"F=k_{eq}\\,x"} />
                </div>
              </div>

              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0, 0, 0, 1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Paralelo</div>
                <div style={{ marginTop: 2, color: "#f87b7bff" }}>
                  <MathInline latex={"k_{eq}=k_1+k_2"} />
                </div>
              </div>

              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0, 0, 0, 1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Serie</div>
                <div style={{ marginTop: 2, color: "#f87b7bff" }}>
                  <MathInline latex={"k_{eq}=\\frac{k_1k_2}{k_1+k_2}"} />
                </div>
              </div>
            </div>
          </div>

          {/* Sliders */}
          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0, 0, 0, 0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>
              PARÁMETROS
            </div>

            <div style={{ display: "grid", gap: 2 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>k₁</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{k1.toFixed(0)} N/m</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={k1} min={1} max={2000} step={1} onChange={setK1} />
                </div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>k₂</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{k2.toFixed(0)} N/m</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={k2} min={1} max={2000} step={1} onChange={setK2} />
                </div>
              </div>

              {topology === "parallel" ? (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                    <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>Elongación (x)</div>
                    <div style={{ fontSize: 12, opacity: 0.7 }}>{x.toFixed(3)} m</div>
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <Slider value={x} min={0} max={0.4} step={0.01} onChange={setX} />
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                    <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>Fuerza (F)</div>
                    <div style={{ fontSize: 12, opacity: 0.7 }}>{F.toFixed(1)} N</div>
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <Slider value={F} min={0} max={200} step={1} onChange={setF} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Conexión */}
          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(2, 2, 2, 0.40)" }}>
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>
              CONEXIÓN
            </div>

            <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 4 }}>
              <Pill active={topology === "parallel"} onClick={() => setTopology("parallel")}>
                Paralelo
              </Pill>
              <Pill active={topology === "series"} onClick={() => setTopology("series")}>
                Serie
              </Pill>
            </div>
          </div>

          {/* Lectura */}
          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0, 0, 0, 0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rápida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.8, lineHeight: 1.45 }}>
              k_eq = <b style={{ color: "#fb923c" }}>{fmt(keq, 2)}</b> N/m
            </div>

            {calc.kind === "parallel" ? (
              <div style={{ marginTop: 8, fontSize: 12, opacity: 0.9 }}>
                F₁ = <b style={{ color: "#7c3aed" }}>{fmt(calc.F1, 1)}</b> N<br />
                F₂ = <b style={{ color: "#006aff" }}>{fmt(calc.F2, 1)}</b> N<br />
                F = <b style={{ color: "#ff2d55" }}>{fmt(calc.Ft, 1)}</b> N
              </div>
            ) : (
              <div style={{ marginTop: 8, fontSize: 12, opacity: 0.9 }}>
                x₁ = <b style={{ color: "#7c3aed" }}>{fmt(calc.x1, 3)}</b> m<br />
                x₂ = <b style={{ color: "#006aff" }}>{fmt(calc.x2, 3)}</b> m<br />
                x = <b style={{ color: "#ff2d55" }}>{fmt(calc.x, 3)}</b> m
              </div>
            )}

            <div style={{ marginTop: 10, fontSize: 12, opacity: 0.75, lineHeight: 1.4 }}>
              {topology === "parallel"
                ? "Paralelo: ambos muelles se estiran igual (x), las fuerzas se suman."
                : "Serie: la fuerza es igual en ambos, las elongaciones se suman."}
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="panelGlow" x1="0" x2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.10)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
        </linearGradient>

        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Fondo */}
      <rect x="0" y="0" width={W} height={H} fill="#b8c5ffff" />

      {/* Paneles */}
      <g>
        {/* Izquierda: escena */}
        <g transform={`translate(${leftX}, ${panel.y})`}>
          <rect width={panel.w} height={panel.h} rx="22" fill="rgba(255,255,255,0.92)" stroke="#d6e5ff" strokeWidth="4" />
          <rect
            x={inner.xPad}
            y={inner.yPadTop}
            width={panel.w - inner.xPad * 2}
            height={panel.h - inner.yPadTop - inner.yPadBot}
            rx="18"
            fill="url(#panelGlow)"
            opacity="0.9"
          />
          <text x="20" y="36" fontSize="18" fontWeight="900" fill="#0f172a">
            Escena real
          </text>

          {/* Pared */}
          <rect
            x={inner.xPad + 12}
            y={inner.yPadTop + 30}
            width="12"
            height={panel.h - inner.yPadTop - inner.yPadBot - 60}
            rx="6"
            fill="#5b7aa8"
            opacity="0.55"
          />

          {/* Suelo */}
          <rect
            x={inner.xPad + 12}
            y={panel.h - inner.yPadBot - 14}
            width={panel.w - inner.xPad * 2 - 24}
            height="10"
            rx="5"
            fill="#5b7aa8"
            opacity="0.30"
          />

          {/* Muelles + bloque */}
          {topology === "parallel" ? (
            <>
              {/* muelle 1 */}
              <path
                d={springPath(inner.xPad + 28, inner.yPadTop + 110, 150, 6, 8)}
                stroke="#5b7aa8"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* muelle 2 */}
              <path
                d={springPath(inner.xPad + 28, inner.yPadTop + 155, 150, 6, 8)}
                stroke="#5b7aa8"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* unión */}
              <line x1={inner.xPad + 178} y1={inner.yPadTop + 110} x2={inner.xPad + 200} y2={inner.yPadTop + 110} stroke="#5b7aa8" strokeWidth="4" />
              <line x1={inner.xPad + 178} y1={inner.yPadTop + 155} x2={inner.xPad + 200} y2={inner.yPadTop + 155} stroke="#5b7aa8" strokeWidth="4" />
              <line x1={inner.xPad + 200} y1={inner.yPadTop + 110} x2={inner.xPad + 200} y2={inner.yPadTop + 155} stroke="#5b7aa8" strokeWidth="4" />

              {/* bloque */}
              <g transform={`translate(${inner.xPad + 200}, ${inner.yPadTop + 109})`}>
                <rect width="68" height="48" rx="10" fill="rgba(255,255,255,0.95)" stroke="#5b7aa8" strokeWidth="4" />
                <rect x="8" y="10" width="52" height="28" rx="8" fill="#b8c5ffff" opacity="0.9" />
              </g>

              <text x={inner.xPad + 42} y={panel.h - inner.yPadBot - 28} fontSize="13" fontWeight="900" fill="#0f172a">
                Paralelo: misma x
              </text>
            </>
          ) : (
            <>
              {/* muelle 1 */}
              <path
                d={springPath(inner.xPad + 28, inner.yPadTop + 132, 115, 6, 8)}
                stroke="#5b7aa8"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx={inner.xPad + 143} cy={inner.yPadTop + 132} r="6" fill="#5b7aa8" opacity="0.7" />

              {/* muelle 2 */}
              <path
                d={springPath(inner.xPad + 143, inner.yPadTop + 132, 115, 6, 8)}
                stroke="#5b7aa8"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* bloque */}
              <g transform={`translate(${inner.xPad + 258}, ${inner.yPadTop + 108})`}>
                <rect width="68" height="48" rx="10" fill="rgba(255,255,255,0.95)" stroke="#5b7aa8" strokeWidth="4" />
                <rect x="8" y="10" width="52" height="28" rx="8" fill="#b8c5ffff" opacity="0.9" />
              </g>

              <text x={inner.xPad + 12} y={panel.h - inner.yPadBot - 28} fontSize="13" fontWeight="900" fill="#0f172a">
                Serie: misma F
              </text>
            </>
          )}
        </g>

        {/* Derecha: fuerzas */}
        <g transform={`translate(${rightX}, ${panel.y})`}>
          <rect width={panel.w} height={panel.h} rx="22" fill="rgba(255,255,255,0.92)" stroke="#d6e5ff" strokeWidth="4" />
          <rect
            x={inner.xPad}
            y={inner.yPadTop}
            width={panel.w - inner.xPad * 2}
            height={panel.h - inner.yPadTop - inner.yPadBot}
            rx="18"
            fill="url(#panelGlow)"
            opacity="0.9"
          />
          <text x="20" y="36" fontSize="18" fontWeight="900" fill="#0f172a">
            Fuerzas (lectura)
          </text>

          {/* punto de referencia */}
          <circle cx={panel.w * 0.62} cy={panel.h * 0.55} r="8" fill="#0f172a" opacity="0.85" />

          {/* Resultante */}
          <Arrow
            x1={panel.w * 0.62}
            y1={panel.h * 0.55}
            x2={panel.w * 0.62 - calc.Ft * sF}
            y2={panel.h * 0.55}
            color="#ff2d55"
            label="F"
          />
          {/* Componentes */}
          <Arrow
            x1={panel.w * 0.62}
            y1={panel.h * 0.55 - 20}
            x2={panel.w * 0.62 - calc.F1 * sF}
            y2={panel.h * 0.55 - 20}
            color="#7c3aed"
            label="F₁"
          />
          <Arrow
            x1={panel.w * 0.62}
            y1={panel.h * 0.55 + 20}
            x2={panel.w * 0.62 - calc.F2 * sF}
            y2={panel.h * 0.55 + 20}
            color="#006aff"
            label="F₂"
          />

          <g>
            <text x={inner.xPad + 12} y={panel.h - inner.yPadBot - 42} fontSize="12" fill="#334155" opacity="0.85">
              k_eq = {fmt(keq, 2)} N/m
            </text>
            <text x={inner.xPad + 12} y={panel.h - inner.yPadBot - 24} fontSize="12" fill="#334155" opacity="0.85">
              {calc.kind === "parallel" ? `F = (k₁+k₂)·x` : `x = F·(1/k₁ + 1/k₂)`}
            </text>
          </g>
        </g>
      </g>

      {/* Pie global */}
      <g>
        <text x={W / 2} y={500} textAnchor="middle" fontSize="15" fill="#006affff">
          Paralelo: F = F₁ + F₂ | Serie: x = x₁ + x₂
        </text>
        <text x={W / 2} y={525} textAnchor="middle" fontSize="13" fill="#004cffff" fontWeight="900">
          Idea clave: paralelo endurece (k_eq sube) y serie ablanda (k_eq baja)
        </text>
      </g>
    </SvgFrame>
  );
}
