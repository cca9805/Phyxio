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

const FORMULAS = {
  punto_material: { label: "Punto material", latex: "I = mR^2", fn: ({ m, R }) => m * R * R },
  aro: { label: "Aro fino", latex: "I = mR^2", fn: ({ m, R }) => m * R * R },
  disco: { label: "Disco macizo", latex: "I = \\frac{1}{2}mR^2", fn: ({ m, R }) => 0.5 * m * R * R },
  barra_centro: { label: "Barra (eje centro)", latex: "I = \\frac{1}{12}mL^2", fn: ({ m, L }) => (1 / 12) * m * L * L },
  barra_extremo: { label: "Barra (eje extremo)", latex: "I = \\frac{1}{3}mL^2", fn: ({ m, L }) => (1 / 3) * m * L * L },
};

export default function MomentosTipicosGraphsSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "tipo", aliases: ["cuerpo"], default: String(p.tipo ?? p.cuerpo ?? "disco") },
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, 2) },
      { key: "R", aliases: ["radio", "r"], default: toNum(p.R ?? p.radio ?? p.r, 1.2) },
      { key: "L", aliases: ["longitud", "l"], default: toNum(p.L ?? p.longitud ?? p.l, 2.4) },
      { key: "showAxis", aliases: ["mostrarEje"], default: p.showAxis ?? true },
      { key: "showFormula", aliases: ["mostrarFormula"], default: p.showFormula ?? true },
    ],
    [p.tipo, p.cuerpo, p.m, p.masa, p.R, p.radio, p.r, p.L, p.longitud, p.l, p.showAxis, p.showFormula]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const tipo = FORMULAS[ep.tipo] ? ep.tipo : "disco";
  const m = clamp(toNum(ep.m, 2), 0.1, 50);
  const R = clamp(toNum(ep.R, 1.2), 0.2, 4);
  const L = clamp(toNum(ep.L, 2.4), 0.2, 8);
  const showAxis = !!ep.showAxis;
  const showFormula = !!ep.showFormula;

  const current = FORMULAS[tipo];
  const I = current.fn({ m, R, L });

  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => { exp.startExperiment(); exp.setValue(k, v); }, [exp]);

  const cx = 420;
  const cy = 180;
  const rPx = clamp(R * 40, 24, 110);
  const lPx = clamp(L * 90, 50, 450);

  return (
    <SvgFrame
      title="Momentos tipicos de inercia (SVG)"
      subtitle="Compara formulas clasicas segun cuerpo y eje"
      badgeLabel="RESULTADO"
      badgeValue={`I = ${fmt(I, 3)} kg*m^2`}
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
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="v2-panel m-2" style={{ background: "rgba(0,0,0,0.65)" }}>
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>TIPO DE CUERPO</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
              <Pill active={tipo === "punto_material"} onClick={() => setValue("tipo", "punto_material")}>Punto</Pill>
              <Pill active={tipo === "aro"} onClick={() => setValue("tipo", "aro")}>Aro</Pill>
              <Pill active={tipo === "disco"} onClick={() => setValue("tipo", "disco")}>Disco</Pill>
              <Pill active={tipo === "barra_centro"} onClick={() => setValue("tipo", "barra_centro")}>Barra-centro</Pill>
              <Pill active={tipo === "barra_extremo"} onClick={() => setValue("tipo", "barra_extremo")}>Barra-extremo</Pill>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.68)" }}>
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARAMETROS</div>
            <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>m</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(m, 2)} kg</div></div>
                <div style={{ marginTop: 8 }}><Slider value={m} min={0.1} max={50} step={0.1} onChange={(v) => setValue("m", v)} /></div>
              </div>
              {(tipo === "punto_material" || tipo === "aro" || tipo === "disco") ? (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>R</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(R, 2)} m</div></div>
                  <div style={{ marginTop: 8 }}><Slider value={R} min={0.2} max={4} step={0.1} onChange={(v) => setValue("R", v)} /></div>
                </div>
              ) : null}
              {(tipo === "barra_centro" || tipo === "barra_extremo") ? (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>L</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(L, 2)} m</div></div>
                  <div style={{ marginTop: 8 }}><Slider value={L} min={0.2} max={8} step={0.1} onChange={(v) => setValue("L", v)} /></div>
                </div>
              ) : null}

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showAxis} onChange={(e) => setValue("showAxis", e.target.checked)} /><span className="v2-toggle-label">Mostrar eje</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showFormula} onChange={(e) => setValue("showFormula", e.target.checked)} /><span className="v2-toggle-label">Mostrar formula</span></label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.86, lineHeight: 1.45 }}>
              Tipo: <b>{current.label}</b>
              <br />
              I = <b style={{ color: "#f59e0b" }}>{fmt(I, 4)}</b> kg*m^2
              <br />
              {showFormula ? <MathInline latex={current.latex} /> : null}
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgMomentosTip" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="850" height="330" fill="url(#bgMomentosTip)" />
      <rect x="0" y="0" width="850" height="330" fill="rgba(0,0,0,0.08)" />

      <line x1="80" y1="260" x2="770" y2="260" stroke="rgba(15,23,42,0.20)" strokeWidth="2" />

      {(tipo === "punto_material") ? (
        <>
          <circle cx={cx} cy={cy} r="5" fill="#0f172a" />
          <line x1={cx} y1={cy} x2={cx + rPx} y2={cy} stroke="#1d4ed8" strokeWidth="2" strokeDasharray="5 4" />
          <circle cx={cx + rPx} cy={cy} r="10" fill="#1d4ed8" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
          <text x={cx + rPx + 10} y={cy - 6} fontSize="12" fill="#1d4ed8" fontWeight="900">m</text>
          <text x={cx + rPx * 0.5} y={cy - 8} fontSize="12" fill="#1d4ed8" fontWeight="900">R</text>
        </>
      ) : null}

      {(tipo === "aro") ? (
        <>
          <circle cx={cx} cy={cy} r={rPx} fill="none" stroke="#7c3aed" strokeWidth="7" />
          <circle cx={cx} cy={cy} r="5" fill="#0f172a" />
          {showAxis ? <line x1={cx} y1={cy - 120} x2={cx} y2={cy + 120} stroke="rgba(15,23,42,0.7)" strokeWidth="3" /> : null}
        </>
      ) : null}

      {(tipo === "disco") ? (
        <>
          <circle cx={cx} cy={cy} r={rPx} fill="rgba(59,130,246,0.25)" stroke="#2563eb" strokeWidth="4" />
          <circle cx={cx} cy={cy} r="5" fill="#0f172a" />
          {showAxis ? <line x1={cx} y1={cy - 120} x2={cx} y2={cy + 120} stroke="rgba(15,23,42,0.7)" strokeWidth="3" /> : null}
        </>
      ) : null}

      {(tipo === "barra_centro" || tipo === "barra_extremo") ? (
        <>
          <line x1={cx - lPx / 2} y1={cy} x2={cx + lPx / 2} y2={cy} stroke="#0f172a" strokeWidth="10" strokeLinecap="round" />
          {showAxis ? (
            (tipo === "barra_centro")
              ? <line x1={cx} y1={cy - 95} x2={cx} y2={cy + 95} stroke="#f97316" strokeWidth="4" />
              : <line x1={cx - lPx / 2} y1={cy - 95} x2={cx - lPx / 2} y2={cy + 95} stroke="#f97316" strokeWidth="4" />
          ) : null}
          <text x={cx - 10} y={cy - 18} fontSize="12" fill="#0f172a" fontWeight="900">L</text>
        </>
      ) : null}

      {showFormula ? (
        <foreignObject x="84" y="28" width="420" height="32">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: 13, color: "#0f172a", fontWeight: 900 }}>
            {current.label}: <MathInline latex={current.latex} />
          </div>
        </foreignObject>
      ) : null}
    </SvgFrame>
  );
}
