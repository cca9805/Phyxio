import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

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

function Arrow({ x1, y1, x2, y2, color, label, labelDy = -10 }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const L = Math.hypot(dx, dy) || 1;
  const ux = dx / L;
  const uy = dy / L;
  const head = 16;
  const wing = 7;

  const hx = x2;
  const hy = y2;
  const lx = hx - ux * head - uy * wing;
  const ly = hy - uy * head + ux * wing;
  const rx = hx - ux * head + uy * wing;
  const ry = hy - uy * head - ux * wing;

  return (
    <g>
      <line x1={x1} y1={y1} x2={hx} y2={hy} stroke={color} strokeWidth="4" strokeLinecap="round" />
      <polygon points={`${hx},${hy} ${lx},${ly} ${rx},${ry}`} fill={color} />
      <text x={hx} y={hy + labelDy} fill={color} fontSize="12" fontWeight="800" textAnchor="middle">{label}</text>
    </g>
  );
}

export default function SistemasRealesGraphsSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, 20) },
      { key: "F_ap", aliases: ["Fap", "f_ap"], default: toNum(p.F_ap ?? p.Fap ?? p.f_ap, 140) },
      { key: "F_loss", aliases: ["Floss", "f_loss"], default: toNum(p.F_loss ?? p.Floss ?? p.f_loss, 35) },
      { key: "showForces", aliases: ["mostrarFuerzas"], default: p.showForces ?? true },
      { key: "showTrail", aliases: ["mostrarRastro"], default: p.showTrail ?? true },
      { key: "showNet", aliases: ["mostrarNeta"], default: p.showNet ?? true },
    ],
    [p.m, p.masa, p.F_ap, p.Fap, p.f_ap, p.F_loss, p.Floss, p.f_loss, p.showForces, p.showTrail, p.showNet]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(toNum(ep.m, 20), 0.1, 100000);
  const fAp = clamp(toNum(ep.F_ap, 140), 0, 100000);
  const fLoss = clamp(toNum(ep.F_loss, 35), 0, fAp);
  const fNet = fAp - fLoss;
  const a = fNet / m;
  const showForces = !!ep.showForces;
  const showTrail = !!ep.showTrail;
  const showNet = !!ep.showNet;
  const yOffset = -70;

  const apLen = Math.min(130, 20 + fAp * 0.4);
  const lossLen = Math.min(130, 20 + fLoss * 0.4);
  const netLen = Math.min(130, 20 + Math.abs(fNet) * 0.4);
  const dir = fNet >= 0 ? 1 : -1;

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v0) => {
    exp.startExperiment();
    exp.setValue(k, v0);
  }, [exp]);

  return (
    <SvgFrame
      title="Sistemas reales (SVG)"
      subtitle="Fuerza aplicada, perdidas y respuesta neta"
      badgeLabel="MODO"
      badgeValue={exp.mode === "follow" ? "SIGUIENDO CALCULADORA" : "EXPERIMENTO"}
      controls={
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
        >
          Seguir calculadora
        </button>
      }
      aside={
        <div style={{ display: "grid", gap: 10 }}>
          <div className="v2-panel">
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>ECUACIONES</div>
            <div style={{ marginTop: 8, display: "grid", gap: 6 }}>
              <div><MathInline latex={"F_{net}=F_{ap}-F_{loss}"} /></div>
              <div><MathInline latex={"a=\\frac{F_{net}}{m}"} /></div>
            </div>
          </div>

          <div className="v2-panel">
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARAMETROS</div>
            <div style={{ marginTop: 10, display: "grid", gap: 10 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span>m</span><b>{fmt(m, 2)} kg</b>
                </div>
                <Slider value={m} min={1} max={120} step={0.5} onChange={(v) => setValue("m", v)} />
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span>F_ap</span><b>{fmt(fAp, 1)} N</b>
                </div>
                <Slider value={fAp} min={0} max={320} step={1} onChange={(v) => setValue("F_ap", v)} />
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span>F_loss</span><b>{fmt(fLoss, 1)} N</b>
                </div>
                <Slider value={fLoss} min={0} max={fAp} step={1} onChange={(v) => setValue("F_loss", v)} />
              </div>
            </div>
          </div>

          <div className="v2-panel">
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>CAPAS</div>
            <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 6 }}>
              <Pill active={showForces} onClick={() => setValue("showForces", !showForces)}>Fuerzas</Pill>
              <Pill active={showTrail} onClick={() => setValue("showTrail", !showTrail)}>Rastro</Pill>
              <Pill active={showNet} onClick={() => setValue("showNet", !showNet)}>Neta</Pill>
            </div>
          </div>

          <div className="v2-panel">
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.85, lineHeight: 1.45 }}>
              F_net = <b>{fmt(fNet, 3)}</b> N
              <br />
              a = <b>{fmt(a, 3)}</b> m/s²
              <br />
              perdida/aplicada = <b>{fmt(fAp > 0 ? (100 * fLoss) / fAp : 0, 1)}</b> %
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="srBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b1220" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="850" height="420" fill="url(#srBg)" />
      <line x1="40" y1={320 + yOffset} x2="810" y2={320 + yOffset} stroke="#334155" strokeWidth="4" />

      {showTrail ? (
        <>
                <line x1="130" y1={312 + yOffset} x2="430" y2={312 + yOffset} stroke="#1e293b" strokeWidth="10" strokeLinecap="round" />
                <line x1="130" y1={312 + yOffset} x2="430" y2={312 + yOffset} stroke="#475569" strokeDasharray="10 10" />
        </>
      ) : null}

      <rect x="300" y={250 + yOffset} width="200" height="56" rx="12" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2" />
      <circle cx="340" cy={314 + yOffset} r="18" fill="#0f172a" stroke="#94a3b8" />
      <circle cx="460" cy={314 + yOffset} r="18" fill="#0f172a" stroke="#94a3b8" />
      <text x="400" y={282 + yOffset} textAnchor="middle" fontSize="14" fill="#0f172a" fontWeight="700">Sistema real</text>

      {showForces ? (
        <>
          <Arrow x1={500} y1={260 + yOffset} x2={500 + apLen} y2={260 + yOffset} color="#3b82f6" label="F_ap" labelDy={-12} />
          <Arrow x1={300} y1={292 + yOffset} x2={300 - lossLen} y2={292 + yOffset} color="#f97316" label="F_loss" labelDy={-12} />
        </>
      ) : null}

      {showNet ? (
        <Arrow x1={400} y1={225 + yOffset} x2={400 + dir * netLen} y2={225 + yOffset} color="#22c55e" label="F_net" labelDy={-12} />
      ) : null}
    </SvgFrame>
  );
}
