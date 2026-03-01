import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
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

function orderGeometry(tipo, xA, xP, xR) {
  const vals = [xA, xP, xR].sort((a, b) => a - b);
  if (tipo === "PAR") return { xP: vals[0], xA: vals[1], xR: vals[2] };
  if (tipo === "APR") return { xA: vals[0], xP: vals[1], xR: vals[2] };
  return { xA: vals[0], xR: vals[1], xP: vals[2] };
}

function geometryFromArms(tipo, dP, dR) {
  const a = Math.max(dP, 0.2);
  const b = Math.max(dR, 0.2);
  if (tipo === "APR") return { L: a + b, xA: 0, xP: a, xR: a + b };
  if (tipo === "ARP") return { L: a + b, xA: 0, xR: b, xP: b + a };
  return { L: a + b, xP: 0, xA: a, xR: a + b };
}

const LABELS = {
  PAR: "1a clase: apoyo entre potencia y resistencia",
  ARP: "2a clase: resistencia entre apoyo y potencia",
  APR: "3a clase: potencia entre apoyo y resistencia",
};

export default function TiposDePalancasGraphsSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "tipo", aliases: ["clase"], default: String(p.tipo ?? "PAR").toUpperCase() },
      { key: "R", aliases: ["resistencia"], default: toNum(p.R ?? p.resistencia, 120) },
      { key: "d_R", aliases: ["dR", "brazoR"], default: toNum(p.d_R ?? p.dR, 1.0) },
      { key: "d_P", aliases: ["dP", "brazoP"], default: toNum(p.d_P ?? p.dP, 4.0) },
      { key: "showMoments", aliases: ["mostrarMomentos"], default: p.showMoments ?? true },
      { key: "showArms", aliases: ["mostrarBrazos"], default: p.showArms ?? true },
      { key: "showLabels", aliases: ["mostrarEtiquetas"], default: p.showLabels ?? true },
    ],
    [p.tipo, p.R, p.resistencia, p.d_R, p.dR, p.d_P, p.dP, p.showMoments, p.showArms, p.showLabels]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const tipoRaw = String(ep.tipo ?? "PAR").toUpperCase();
  const tipo = tipoRaw === "APR" || tipoRaw === "ARP" ? tipoRaw : "PAR";
  const R = clamp(toNum(ep.R, 120), 1, 2000);
  const dR = clamp(toNum(ep.d_R, 1.0), 0.1, 10);
  const dP = clamp(toNum(ep.d_P, 4.0), 0.1, 10);
  const showMoments = !!ep.showMoments;
  const showArms = !!ep.showArms;
  const showLabels = !!ep.showLabels;

  const geo = geometryFromArms(tipo, dP, dR);
  const ordered = orderGeometry(tipo, geo.xA, geo.xP, geo.xR);
  const xA = ordered.xA;
  const xP = ordered.xP;
  const xR = ordered.xR;
  const L = geo.L;

  const Pstar = (R * dR) / Math.max(1e-9, dP);
  const MP = Pstar * dP;
  const MR = R * dR;

  const sx = (x) => 90 + (x / L) * 700;
  const yBar = 168;
  const xAp = sx(xA);
  const xPp = sx(xP);
  const xRp = sx(xR);

  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => { exp.startExperiment(); exp.setValue(k, v); }, [exp]);

  return (
    <SvgFrame
      title="Tipos de palancas (SVG)"
      subtitle="Visualiza como cambia la geometria y la ventaja mecanica segun la clase"
      badgeLabel="TIPO"
      badgeValue={tipo}
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
          <div className="v2-panel m-3 mb-1">
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>CONCEPTO</div>
            <div style={{ marginTop: 10, fontSize: 13, opacity: 0.86, lineHeight: 1.45 }}>
              {LABELS[tipo]}
              <div style={{ marginTop: 8, color: "#93c5fd" }}>
                <MathInline latex={"P\\,d_P=R\\,d_R"} />
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARAMETROS</div>
            <div style={{ display: "grid", gap: 10 }}>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                <Pill active={tipo === "PAR"} onClick={() => setValue("tipo", "PAR")}>1a clase</Pill>
                <Pill active={tipo === "ARP"} onClick={() => setValue("tipo", "ARP")}>2a clase</Pill>
                <Pill active={tipo === "APR"} onClick={() => setValue("tipo", "APR")}>3a clase</Pill>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}><div style={{ fontSize: 13, fontWeight: 900 }}>R</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(R, 1)} N</div></div>
                <div style={{ marginTop: 8 }}><Slider value={R} min={1} max={2000} step={1} onChange={(v) => setValue("R", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}><div style={{ fontSize: 13, fontWeight: 900 }}>d_R</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(dR, 2)} m</div></div>
                <div style={{ marginTop: 8 }}><Slider value={dR} min={0.1} max={10} step={0.1} onChange={(v) => setValue("d_R", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}><div style={{ fontSize: 13, fontWeight: 900 }}>d_P</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(dP, 2)} m</div></div>
                <div style={{ marginTop: 8 }}><Slider value={dP} min={0.1} max={10} step={0.1} onChange={(v) => setValue("d_P", v)} /></div>
              </div>

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showArms} onChange={(e) => setValue("showArms", e.target.checked)} /><span className="v2-toggle-label">Brazos</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showMoments} onChange={(e) => setValue("showMoments", e.target.checked)} /><span className="v2-toggle-label">Momentos</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showLabels} onChange={(e) => setValue("showLabels", e.target.checked)} /><span className="v2-toggle-label">Etiquetas</span></label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.82, lineHeight: 1.45 }}>
              P* = <b style={{ color: "#22c55e" }}>{fmt(Pstar, 2)}</b> N
              <br />
              M_P = <b>{fmt(MP, 2)}</b> N·m, M_R = <b>{fmt(MR, 2)}</b> N·m
              <br />
              VM = R/P* = <b>{fmt(R / Math.max(Pstar, 1e-9), 2)}</b>
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgPalancasSvg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="850" height="330" fill="url(#bgPalancasSvg)" />
      <rect x="0" y="0" width="850" height="330" fill="rgba(0,0,0,0.08)" />

      <line x1={sx(0)} y1={yBar} x2={sx(L)} y2={yBar} stroke="rgba(15,23,42,0.88)" strokeWidth="8" strokeLinecap="round" />

      <polygon points={`${xAp},${yBar + 2} ${xAp - 16},${yBar + 28} ${xAp + 16},${yBar + 28}`} fill="#f59e0b" />

      <line x1={xPp} y1={74} x2={xPp} y2={yBar - 12} stroke="#22c55e" strokeWidth="4" />
      <polygon points={`${xPp - 8},${yBar - 12} ${xPp + 8},${yBar - 12} ${xPp},${yBar + 5}`} fill="#22c55e" />

      <line x1={xRp} y1={74} x2={xRp} y2={yBar - 12} stroke="#ef4444" strokeWidth="4" />
      <polygon points={`${xRp - 8},${yBar - 12} ${xRp + 8},${yBar - 12} ${xRp},${yBar + 5}`} fill="#ef4444" />

      {showLabels ? (
        <>
          <text x={xAp} y={yBar + 46} textAnchor="middle" fontSize="13" fill="#b45309" fontWeight="900">A</text>
          <text x={xPp} y={58} textAnchor="middle" fontSize="13" fill="#166534" fontWeight="900">P*</text>
          <text x={xRp} y={58} textAnchor="middle" fontSize="13" fill="#991b1b" fontWeight="900">R</text>
        </>
      ) : null}

      {showArms ? (
        <>
          <line x1={xAp} y1={232} x2={xPp} y2={232} stroke="#334155" strokeWidth="2" />
          <line x1={xAp} y1={232} x2={xRp} y2={232} stroke="#334155" strokeWidth="2" />
          <line x1={xAp} y1={218} x2={xAp} y2={232} stroke="#334155" strokeWidth="2" />
          <line x1={xPp} y1={218} x2={xPp} y2={232} stroke="#334155" strokeWidth="2" />
          <line x1={xRp} y1={218} x2={xRp} y2={232} stroke="#334155" strokeWidth="2" />
          <text x={(xAp + xPp) / 2} y={213} textAnchor="middle" fontSize="12" fill="#334155">d_P = {fmt(dP, 2)} m</text>
          <text x={(xAp + xRp) / 2} y={252} textAnchor="middle" fontSize="12" fill="#334155">d_R = {fmt(dR, 2)} m</text>
        </>
      ) : null}

      {showMoments ? (
        <>
          <foreignObject x="86" y="22" width="360" height="24">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: 13, color: "#0f172a", fontWeight: 900 }}>
              <MathInline latex={"M_P=P^*d_P"} /> = {fmt(MP, 2)} N m
            </div>
          </foreignObject>
          <foreignObject x="86" y="42" width="360" height="24">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: 13, color: "#0f172a", fontWeight: 900 }}>
              <MathInline latex={"M_R=Rd_R"} /> = {fmt(MR, 2)} N m
            </div>
          </foreignObject>
        </>
      ) : null}
    </SvgFrame>
  );
}

