import React, { useMemo, useCallback, useEffect, useState } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const deg2rad = (d) => (Math.PI * d) / 180;
const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

function resolveSvgTopic(leafRelPath = "") {
  const clean = String(leafRelPath);
  if (clean.includes("oscilador-masa-muelle")) return "oscilador-masa-muelle";
  if (clean.includes("pendulo-simple")) return "pendulo-simple";
  if (clean.includes("pendulo-fisico-avanzado")) return "pendulo-fisico-avanzado";
  if (clean.includes("pendulo-fisico")) return "pendulo-fisico";
  return "oscilador-masa-muelle";
}

function arrowPoints(x1, y1, x2, y2, head = 12, wing = 6) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const L = Math.hypot(dx, dy) || 1;
  const ux = dx / L;
  const uy = dy / L;
  const lx = x2 - ux * head - uy * wing;
  const ly = y2 - uy * head + ux * wing;
  const rx = x2 - ux * head + uy * wing;
  const ry = y2 - uy * head - ux * wing;
  return `${x2},${y2} ${lx},${ly} ${rx},${ry}`;
}

function Arrow({ x1, y1, x2, y2, color = "#60a5fa", label }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      <polygon points={arrowPoints(x1, y1, x2, y2)} fill={color} />
      {label ? (
        <text x={x2 + 8} y={y2 - 8} fill={color} fontSize="12" fontWeight="900">
          {label}
        </text>
      ) : null}
    </g>
  );
}

function springPath(x0, y0, len, turns = 8, amp = 8) {
  const usable = Math.max(40, len);
  const seg = usable / (turns * 2);
  let d = `M ${x0} ${y0}`;
  for (let i = 0; i < turns * 2; i += 1) {
    const xx = x0 + seg * (i + 1);
    const yy = y0 + (i % 2 === 0 ? -amp : amp);
    d += ` L ${xx} ${yy}`;
  }
  return `${d} L ${x0 + usable} ${y0}`;
}

function buildTrailPolyline(builder, phase, count = 30, span = 2.2) {
  const pts = [];
  for (let i = 0; i < count; i += 1) {
    const a = phase - span + (span * i) / (count - 1);
    const p = builder(a);
    pts.push(`${p.x},${p.y}`);
  }
  return pts.join(" ");
}

export default function OscilacionesGraphsSvg({ title, params, leafRelPath }) {
  const topic = resolveSvgTopic(leafRelPath);

  const schema = useMemo(
    () => [
      { key: "phaseDeg", aliases: ["phiDeg"], default: toNum(params?.phaseDeg ?? params?.phiDeg, 18) },
      { key: "animSpeed", default: toNum(params?.animSpeed, 80) },
      { key: "A", aliases: ["ampPx", "amplitud"], default: toNum(params?.A ?? params?.ampPx, 0.25) },
      { key: "theta0Deg", aliases: ["thetaMaxDeg"], default: toNum(params?.theta0Deg ?? params?.thetaMaxDeg, 20) },
      { key: "L", aliases: ["lenPx"], default: toNum(params?.L ?? params?.lenPx, 1.2) },
      { key: "m", default: toNum(params?.m, 1.0) },
      { key: "k", default: toNum(params?.k, 24) },
      { key: "g", default: toNum(params?.g, 9.81) },
      { key: "I", default: toNum(params?.I, 0.7) },
      { key: "d", default: toNum(params?.d, 0.45) },
      { key: "showGuides", default: params?.showGuides ?? true },
      { key: "showVectors", default: params?.showVectors ?? true },
      { key: "showTrail", default: params?.showTrail ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({
    params,
    schema,
    modeDefault: "follow",
  });

  const ep = exp.effectiveParams;

  const phaseFromCalc = clamp(toNum(ep.phaseDeg, 18), -180, 180);
  const animSpeed = clamp(toNum(ep.animSpeed, 80), 10, 360);

  const [play, setPlay] = useState(false);
  const [animPhaseDeg, setAnimPhaseDeg] = useState(null);

  useEffect(() => {
    if (!play) return;
    let raf = 0;
    let prev = null;

    const step = (ts) => {
      if (prev == null) prev = ts;
      const dt = (ts - prev) / 1000;
      prev = ts;

      setAnimPhaseDeg((curr) => {
        const base = Number.isFinite(curr) ? curr : phaseFromCalc;
        let next = base + animSpeed * dt;
        while (next > 180) next -= 360;
        while (next < -180) next += 360;
        return next;
      });

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [play, animSpeed, phaseFromCalc]);

  useEffect(() => {
    if (exp.mode === "follow") {
      setPlay(false);
      setAnimPhaseDeg(null);
    }
  }, [exp.mode]);

  const phaseDeg = Number.isFinite(animPhaseDeg) ? animPhaseDeg : phaseFromCalc;

  const A = clamp(toNum(ep.A, 0.25), 0.02, 0.9);
  const theta0Deg = clamp(toNum(ep.theta0Deg, 20), 2, 50);
  const L = clamp(toNum(ep.L, 1.2), 0.2, 3.0);
  const m = clamp(toNum(ep.m, 1.0), 0.05, 20);
  const k = clamp(toNum(ep.k, 24), 0.2, 2000);
  const g = clamp(toNum(ep.g, 9.81), 0.1, 30);
  const I = clamp(toNum(ep.I, 0.7), 0.02, 30);
  const d = clamp(toNum(ep.d, 0.45), 0.02, 3);
  const showGuides = !!ep.showGuides;
  const showVectors = !!ep.showVectors;
  const showTrail = !!ep.showTrail;

  const phase = deg2rad(phaseDeg);
  const omegaMuelle = Math.sqrt(k / m);
  const omegaPendulo = Math.sqrt(g / L);
  const omegaFisico = Math.sqrt((m * g * d) / I);

  const setValue = useCallback(
    (key, value) => {
      exp.startExperiment();
      exp.setValue(key, value);
      if (key === "phaseDeg") setAnimPhaseDeg(null);
    },
    [exp]
  );

  const onTogglePlay = useCallback(() => {
    exp.startExperiment();
    setPlay((v) => !v);
  }, [exp]);

  const resetFollow = useCallback(() => {
    setPlay(false);
    setAnimPhaseDeg(null);
    exp.resetToCalculator();
  }, [exp]);

  const scene = useMemo(() => {
    const W = 840;
    const H = 380;

    if (topic === "oscilador-masa-muelle") {
      const anchorX = 68;
      const y = 205;
      const xEq = 220;
      const ampPx = 120 * A;
      const xMass = xEq + ampPx * Math.cos(phase);
      const massW = 54;
      const massH = 38;
      const xVal = A * Math.cos(phase);
      const vVal = -A * omegaMuelle * Math.sin(phase);
      const force = -k * xVal;

      const trail = showTrail
        ? buildTrailPolyline((a) => ({ x: xEq + ampPx * Math.cos(a), y }), phase, 34, 2.4)
        : "";

      return {
        subtitle: "MHS visual de masa-muelle",
        formula: "x(t)=A\\cos(\\omega t+\\varphi),\\ \\omega=\\sqrt{k/m}",
        formulaApplied: `\\omega=${omegaMuelle.toFixed(3)}\\,\\mathrm{rad/s},\\;x=${xVal.toFixed(3)}\\,\\mathrm{m},\\;F=-kx=${force.toFixed(2)}\\,\\mathrm{N}`,
        params: [
          { key: "A", value: A },
          { key: "k", value: k },
          { key: "m", value: m },
          { key: "phaseDeg", value: phaseDeg },
          { key: "animSpeed", value: animSpeed },
        ],
        readings: [
          `x = ${fmt(xVal)} m`,
          `v = ${fmt(vVal)} m/s`,
          `F = ${fmt(force, 2)} N`,
        ],
        children: (
          <>
            <defs>
              <linearGradient id="oscBgSvg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width={W} height={H} fill="url(#oscBgSvg)" />
            <line x1="430" y1="24" x2="430" y2="356" stroke="rgba(148,163,184,0.22)" strokeWidth="2" strokeDasharray="7 8" />

            <rect x="36" y="36" width="360" height="308" rx="18" fill="rgba(15,23,42,0.66)" stroke="rgba(96,165,250,0.38)" strokeWidth="2" />

            <rect x={anchorX - 14} y={130} width="16" height="150" rx="6" fill="#64748b" opacity="0.88" />
            <line x1="52" y1={y + 26} x2="384" y2={y + 26} stroke="rgba(148,163,184,0.6)" strokeWidth="5" />
            <path d={springPath(anchorX + 2, y, xMass - (anchorX + 2) - massW / 2, 9, 8)} stroke="#e2e8f0" strokeWidth="3" fill="none" />

            {showTrail ? <polyline points={trail} fill="none" stroke="rgba(52,211,153,0.7)" strokeWidth="2" strokeLinecap="round" /> : null}

            <rect x={xMass - massW / 2} y={y - massH / 2} width={massW} height={massH} rx="9" fill="#22d3ee" stroke="#0e7490" strokeWidth="3" />

            {showGuides ? (
              <>
                <line x1={xEq} y1="104" x2={xEq} y2="306" stroke="rgba(148,163,184,0.7)" strokeDasharray="6 5" strokeWidth="2" />
                <text x={xEq + 6} y="120" fill="#cbd5e1" fontSize="12">x=0</text>
              </>
            ) : null}

            {showVectors ? (
              <>
                <Arrow
                  x1={xMass}
                  y1={y - 34}
                  x2={xMass - clamp(Math.abs(force) * 0.45, 24, 74) * Math.sign(xVal || 1)}
                  y2={y - 34}
                  color="#f97316"
                  label="F"
                />
                <Arrow
                  x1={xMass}
                  y1={y - 64}
                  x2={xMass + clamp(Math.abs(vVal) * 28, 20, 78) * Math.sign(vVal || 1)}
                  y2={y - 64}
                  color="#60a5fa"
                  label="v"
                />
              </>
            ) : null}

            <text x="56" y="66" fill="#e2e8f0" fontSize="13" fontWeight="900">Oscilador masa-muelle</text>
            <text x="56" y="86" fill="#93c5fd" fontSize="12">El resorte restaura hacia el equilibrio</text>
          </>
        ),
      };
    }

    if (topic === "pendulo-simple") {
      const pivotX = 220;
      const pivotY = 96;
      const Lpx = clamp(168 * (L / 1.2), 90, 220);
      const thetaMax = deg2rad(theta0Deg);
      const theta = thetaMax * Math.sin(phase);
      const bob = { x: pivotX + Lpx * Math.sin(theta), y: pivotY + Lpx * Math.cos(theta) };

      const thetaDot = thetaMax * omegaPendulo * Math.cos(phase);
      const ut = { x: Math.cos(theta), y: -Math.sin(theta) };
      const torqueDir = Math.sign(-theta || -1);

      const trail = showTrail
        ? buildTrailPolyline(
            (a) => {
              const tt = thetaMax * Math.sin(a);
              return { x: pivotX + Lpx * Math.sin(tt), y: pivotY + Lpx * Math.cos(tt) };
            },
            phase,
            36,
            2.4
          )
        : "";

      return {
        subtitle: "Pendulo simple (angulo pequeno)",
        formula: "\\theta(t)=\\theta_0\\cos(\\sqrt{g/L}\\,t+\\varphi)",
        formulaApplied: `\\omega=${omegaPendulo.toFixed(3)}\\,\\mathrm{rad/s},\\;\\theta=${(theta * 180 / Math.PI).toFixed(2)}^\\circ`,
        params: [
          { key: "theta0Deg", value: theta0Deg },
          { key: "L", value: L },
          { key: "g", value: g },
          { key: "phaseDeg", value: phaseDeg },
          { key: "animSpeed", value: animSpeed },
        ],
        readings: [
          `theta = ${fmt((theta * 180) / Math.PI, 2)} deg`,
          `omega = ${fmt(omegaPendulo)} rad/s`,
          `L = ${fmt(L, 2)} m`,
        ],
        children: (
          <>
            <defs>
              <linearGradient id="pendSimpleBgSvg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>

            <rect x="0" y="0" width={W} height={H} fill="url(#pendSimpleBgSvg)" />
            <line x1="430" y1="24" x2="430" y2="356" stroke="rgba(148,163,184,0.22)" strokeWidth="2" strokeDasharray="7 8" />

            <rect x="36" y="36" width="360" height="308" rx="18" fill="rgba(15,23,42,0.66)" stroke="rgba(125,211,252,0.36)" strokeWidth="2" />
            <line x1={pivotX - 138} y1={pivotY} x2={pivotX + 138} y2={pivotY} stroke="#64748b" strokeWidth="8" />

            {showTrail ? <polyline points={trail} fill="none" stroke="rgba(52,211,153,0.72)" strokeWidth="2" /> : null}

            {showGuides ? (
              <>
                <line x1={pivotX} y1={pivotY} x2={pivotX} y2={pivotY + Lpx} stroke="rgba(148,163,184,0.8)" strokeDasharray="6 5" strokeWidth="2" />
                <path
                  d={`M ${pivotX + Lpx * Math.sin(-thetaMax)} ${pivotY + Lpx * Math.cos(-thetaMax)} A ${Lpx} ${Lpx} 0 0 1 ${pivotX + Lpx * Math.sin(thetaMax)} ${pivotY + Lpx * Math.cos(thetaMax)}`}
                  fill="none"
                  stroke="rgba(148,163,184,0.4)"
                  strokeWidth="1.5"
                />
              </>
            ) : null}

            <line x1={pivotX} y1={pivotY} x2={bob.x} y2={bob.y} stroke="#e2e8f0" strokeWidth="4" />
            <circle cx={pivotX} cy={pivotY} r="6" fill="#f8fafc" />
            <circle cx={bob.x} cy={bob.y} r="16" fill="#38bdf8" stroke="#0c4a6e" strokeWidth="3" />

            {showVectors ? (
              <>
                <Arrow
                  x1={bob.x}
                  y1={bob.y}
                  x2={bob.x + ut.x * clamp(Math.abs(thetaDot) * 24, 20, 70) * Math.sign(thetaDot || 1)}
                  y2={bob.y + ut.y * clamp(Math.abs(thetaDot) * 24, 20, 70) * Math.sign(thetaDot || 1)}
                  color="#60a5fa"
                  label="v"
                />
                <Arrow
                  x1={bob.x}
                  y1={bob.y}
                  x2={bob.x + ut.x * clamp(34 + Math.abs(theta) * 120, 26, 80) * torqueDir}
                  y2={bob.y + ut.y * clamp(34 + Math.abs(theta) * 120, 26, 80) * torqueDir}
                  color="#f97316"
                  label="tau"
                />
              </>
            ) : null}

            <text x="56" y="66" fill="#e2e8f0" fontSize="13" fontWeight="900">Pendulo simple</text>
            <text x="56" y="334" fill="#93c5fd" fontSize="12">Regimen lineal para amplitudes pequenas</text>
          </>
        ),
      };
    }

    const isAdvanced = topic === "pendulo-fisico-avanzado";
    const pivotX = 220;
    const pivotY = 96;
    const Lpx = clamp(172 * (L / 1.2), 95, 230);
    const thetaMax = deg2rad(theta0Deg);
    const theta = thetaMax * Math.sin(phase);
    const end = { x: pivotX + Lpx * Math.sin(theta), y: pivotY + Lpx * Math.cos(theta) };
    const cmRatio = clamp(d / Math.max(L, 1e-6), 0.18, 0.85);
    const cm = { x: pivotX + (Lpx * cmRatio) * Math.sin(theta), y: pivotY + (Lpx * cmRatio) * Math.cos(theta) };

    const thetaDot = thetaMax * omegaFisico * Math.cos(phase);
    const ut = { x: Math.cos(theta), y: -Math.sin(theta) };
    const torqueDir = Math.sign(-theta || -1);

    const trail = showTrail
      ? buildTrailPolyline(
          (a) => {
            const tt = thetaMax * Math.sin(a);
            return { x: pivotX + Lpx * Math.sin(tt), y: pivotY + Lpx * Math.cos(tt) };
          },
          phase,
          36,
          2.4
        )
      : "";

    return {
      subtitle: isAdvanced ? "Pendulo fisico avanzado" : "Pendulo fisico (cuerpo rigido)",
      formula: "\\omega_0=\\sqrt{mgd/I},\\quad T=2\\pi\\sqrt{I/(mgd)}",
      formulaApplied: `\\omega_0=${omegaFisico.toFixed(3)}\\,\\mathrm{rad/s},\\;T=${(2 * Math.PI / omegaFisico).toFixed(3)}\\,\\mathrm{s}`,
      params: [
        { key: "theta0Deg", value: theta0Deg },
        { key: "L", value: L },
        { key: "d", value: d },
        { key: "I", value: I },
        { key: "m", value: m },
        { key: "g", value: g },
        { key: "phaseDeg", value: phaseDeg },
        { key: "animSpeed", value: animSpeed },
      ],
      readings: [
        `theta = ${fmt((theta * 180) / Math.PI, 2)} deg`,
        `omega0 = ${fmt(omegaFisico)} rad/s`,
        `T = ${fmt((2 * Math.PI) / omegaFisico)} s`,
      ],
      children: (
        <>
          <defs>
            <linearGradient id="pendFisBgSvg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>

          <rect x="0" y="0" width={W} height={H} fill="url(#pendFisBgSvg)" />
          <line x1="430" y1="24" x2="430" y2="356" stroke="rgba(148,163,184,0.22)" strokeWidth="2" strokeDasharray="7 8" />

          <rect x="36" y="36" width="360" height="308" rx="18" fill="rgba(15,23,42,0.66)" stroke="rgba(196,181,253,0.40)" strokeWidth="2" />
          <line x1={pivotX - 138} y1={pivotY} x2={pivotX + 138} y2={pivotY} stroke="#64748b" strokeWidth="8" />

          {showTrail ? <polyline points={trail} fill="none" stroke="rgba(52,211,153,0.72)" strokeWidth="2" /> : null}

          {showGuides ? <line x1={pivotX} y1={pivotY} x2={pivotX} y2={pivotY + Lpx} stroke="rgba(148,163,184,0.8)" strokeDasharray="6 5" strokeWidth="2" /> : null}

          <line x1={pivotX} y1={pivotY} x2={end.x} y2={end.y} stroke="#e2e8f0" strokeWidth="11" strokeLinecap="round" />
          <circle cx={pivotX} cy={pivotY} r="6" fill="#f8fafc" />
          <circle cx={cm.x} cy={cm.y} r="9" fill="#f59e0b" stroke="#78350f" strokeWidth="2.6" />
          <text x={cm.x + 10} y={cm.y - 8} fill="#fbbf24" fontSize="11" fontWeight="900">CM</text>

          {showVectors ? (
            <>
              <Arrow
                x1={cm.x}
                y1={cm.y}
                x2={cm.x + ut.x * clamp(Math.abs(thetaDot) * 24, 18, 72) * Math.sign(thetaDot || 1)}
                y2={cm.y + ut.y * clamp(Math.abs(thetaDot) * 24, 18, 72) * Math.sign(thetaDot || 1)}
                color="#60a5fa"
                label="v"
              />
              <Arrow
                x1={cm.x}
                y1={cm.y}
                x2={cm.x + ut.x * clamp(30 + Math.abs(theta) * 120, 24, 80) * torqueDir}
                y2={cm.y + ut.y * clamp(30 + Math.abs(theta) * 120, 24, 80) * torqueDir}
                color="#f97316"
                label="tau"
              />
            </>
          ) : null}

          {isAdvanced ? (
            <>
              <line x1="56" y1="278" x2="186" y2="278" stroke="rgba(148,163,184,0.45)" strokeWidth="2" />
              <rect x="82" y={278 - clamp(I * 8, 24, 90)} width="24" height={clamp(I * 8, 24, 90)} fill="#a78bfa" opacity="0.92" />
              <rect x="128" y={278 - clamp(d * 95, 18, 90)} width="24" height={clamp(d * 95, 18, 90)} fill="#34d399" opacity="0.92" />
              <text x="94" y="294" textAnchor="middle" fill="#c4b5fd" fontSize="10" fontWeight="900">I</text>
              <text x="140" y="294" textAnchor="middle" fill="#86efac" fontSize="10" fontWeight="900">d</text>
            </>
          ) : null}

          <text x="56" y="66" fill="#e2e8f0" fontSize="13" fontWeight="900">
            {isAdvanced ? "Pendulo fisico avanzado" : "Pendulo fisico"}
          </text>
          <text x="56" y="334" fill="#c4b5fd" fontSize="12">Torque gravitatorio frente a inercia rotacional</text>
        </>
      ),
    };
  }, [topic, phase, phaseDeg, A, theta0Deg, L, m, k, g, I, d, animSpeed, showGuides, showVectors, showTrail, omegaMuelle, omegaPendulo, omegaFisico]);

  return (
    <SvgFrame
      title={title || "Oscilaciones (SVG)"}
      subtitle={scene.subtitle}
      badgeLabel="MODO"
      badgeValue={exp.mode === "follow" ? "SIGUIENDO CALCULADORA" : "EXPERIMENTO"}
      controls={
        <>
          <button
            type="button"
            onClick={exp.startExperiment}
            style={{
              padding: "10px 14px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(99,102,241,0.25)",
              color: "rgba(255,255,255,0.92)",
              fontWeight: 900,
              cursor: "pointer",
            }}
          >
            Experimentar
          </button>

          <button
            type="button"
            onClick={onTogglePlay}
            style={{
              padding: "10px 14px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.14)",
              background: play ? "rgba(239,68,68,0.28)" : "rgba(16,185,129,0.26)",
              color: "rgba(255,255,255,0.92)",
              fontWeight: 900,
              cursor: "pointer",
            }}
          >
            {play ? "Pausar" : "Play"}
          </button>

          <button
            type="button"
            onClick={resetFollow}
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
        </>
      }
      aside={
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="v2-panel m-3 mb-1">
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>ECUACION</div>
            <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)", marginTop: 8 }}>
              <div style={{ marginTop: 2, color: "#93c5fd" }}>
                <MathInline latex={scene.formula} />
              </div>
            </div>
            <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)", marginTop: 8 }}>
              <div style={{ fontSize: 11, opacity: 0.75 }}>Formula aplicada</div>
              <div style={{ marginTop: 2, color: "#fbbf24", fontSize: 13 }}>
                <MathInline latex={scene.formulaApplied} />
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARAMETROS</div>
            <div style={{ display: "grid", gap: 8 }}>
              {scene.params.map((cfg) => (
                <div key={cfg.key} style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>{cfg.key}</div>
                  <input
                    className="form-control"
                    style={{ width: 112 }}
                    value={cfg.value}
                    onChange={(e) => setValue(cfg.key, e.target.value)}
                  />
                </div>
              ))}
            </div>
            <div className="v2-toggle-row" style={{ marginTop: 10 }}>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showGuides} onChange={(e) => setValue("showGuides", e.target.checked)} /><span className="v2-toggle-label">guias</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showVectors} onChange={(e) => setValue("showVectors", e.target.checked)} /><span className="v2-toggle-label">vectores</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showTrail} onChange={(e) => setValue("showTrail", e.target.checked)} /><span className="v2-toggle-label">traza</span></label>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.84, lineHeight: 1.45 }}>
              {scene.readings.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>
        </div>
      }
      viewBox="0 0 840 380"
      svgHeight={540}
    >
      {scene.children}
    </SvgFrame>
  );
}


