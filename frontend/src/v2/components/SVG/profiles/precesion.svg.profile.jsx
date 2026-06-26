import React from "react";
import { SVG_CONTROL_TYPES, SVG_MOTION_TYPES, SVG_SCENE_TYPES } from "../svgGrammar";
import { SvgArrow } from "../SvgProfileRenderer";
import { createSvgProfileContract } from "./svgProfileContracts.js";

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const fmt = (n, d = 2, lang = "es") => {
  if (!Number.isFinite(n)) return "-";
  const text = n.toFixed(d);
  return lang === "en" ? text : text.replace(".", ",");
};

const profile = {
  meta: {
    id: "svg-precesion",
    leafId: "precesion",
    title: {
      es: "Precesion",
      en: "Precession",
    },
    subtitle: {
      es: "Cono de precesion bajo un torque perpendicular al momento angular",
      en: "Precession cone under a torque perpendicular to angular momentum",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "precesion",
    graphId: "svg-precesion",
    purpose: {
      es: "Mostrar que el torque no suele acortar L de forma inmediata, sino doblar su direccion y producir un cono de precesion.",
      en: "Show that torque does not usually shorten L immediately, but bends its direction and produces a precession cone.",
    },
    level: {
      es: "universidad inicial",
      en: "early undergraduate",
    },
    expectedInputs: ["M", "d", "I", "omega", "g"],
    derivedMagnitudes: ["tau", "L", "Omegap", "Tp"],
    targetCandidates: ["Omegap", "Tp"],
    equations: ["tau = M g d", "L = I omega", "Omegap = tau / L"],
    hypotheses: ["precesion lenta", "torque aproximadamente perpendicular a L"],
    validityDomain: ["giro principal grande frente a la precesion", "torque casi constante"],
    visualSimplifications: ["giroscopio ideal", "cono fijo con inclinacion pedagogica"],
    alwaysVisible: ["tau", "L", "Omegap"],
    hasInternalTime: true,
    hasPlayPause: true,
    timeSemantics: "precession phase",
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 640,
  params: {
    schema: [
      { key: "M", default: 1.2, label: { es: "Masa", en: "Mass" }, unit: "kg", type: SVG_CONTROL_TYPES.RANGE, min: 0.2, max: 5, step: 0.1 },
      { key: "d", default: 0.08, label: { es: "Brazo", en: "Lever arm" }, unit: "m", type: SVG_CONTROL_TYPES.RANGE, min: 0.02, max: 0.25, step: 0.01 },
      { key: "I", default: 0.018, label: { es: "Inercia", en: "Inertia" }, unit: "kg m^2", type: SVG_CONTROL_TYPES.RANGE, min: 0.003, max: 0.08, step: 0.001 },
      { key: "omega", default: 90, label: { es: "Omega", en: "Omega" }, unit: "rad/s", type: SVG_CONTROL_TYPES.RANGE, min: 10, max: 180, step: 1 },
      { key: "g", default: 9.81, label: { es: "g", en: "g" }, unit: "m/s^2", type: SVG_CONTROL_TYPES.RANGE, min: 1, max: 15, step: 0.1 },
    ],
    derivations: {
      tau: ({ M, g, d }) => safeNum(M, 1.2) * safeNum(g, 9.81) * safeNum(d, 0.08),
      L: ({ I, omega }) => safeNum(I, 0.018) * safeNum(omega, 90),
      Omegap: ({ M, g, d, I, omega }) => {
        const L = safeNum(I, 0.018) * safeNum(omega, 90);
        return L === 0 ? 0 : (safeNum(M, 1.2) * safeNum(g, 9.81) * safeNum(d, 0.08)) / L;
      },
      Tp: ({ Omegap, M, g, d, I, omega }) => {
        const rate = safeNum(Omegap, null);
        const value = Number.isFinite(rate) ? rate : ((safeNum(M, 1.2) * safeNum(g, 9.81) * safeNum(d, 0.08)) / Math.max(1e-6, safeNum(I, 0.018) * safeNum(omega, 90)));
        return value === 0 ? 0 : (2 * Math.PI) / value;
      },
    },
  },
  infoCards: [
    {
      key: "base",
      label: { es: "Ecuación de precesión", en: "Precession equation" },
      highlight: "\\Omega_p = \\frac{\\tau}{L}",
      highlightColor: "#34d399",
      description: {
        es: "La velocidad de precesión es directamente proporcional al torque e inversamente al momento angular.",
        en: "The precession speed is directly proportional to the torque and inversely to the angular momentum.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura", en: "Reading" },
      lines: ({ p, lang }) => [
        `\\tau = ${fmt(safeNum(p?.tau, 0), 3, lang)} N·m`,
        `L = ${fmt(safeNum(p?.L, 0), 3, lang)} kg·m²/s`,
      ],
      result: ({ p, lang }) => `\\Omega_p = ${fmt(safeNum(p?.Omegap, 0), 3, lang)} rad/s`,
      resultColor: "#34d399",
    },
    {
      key: "period",
      label: { es: "Periodo", en: "Period" },
      bg: "rgba(96,165,250,0.10)",
      border: "rgba(96,165,250,0.18)",
      description: {
        es: "Tiempo necesario para que el eje complete un ciclo del cono de precesión.",
        en: "Time needed for the axis to complete one cycle of the precession cone.",
      },
      highlight: ({ p, lang }) => `T_p = ${fmt(safeNum(p?.Tp, 0), 2, lang)} s`,
      highlightColor: "#60a5fa",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    tMax: 6,
    loop: true,
    state: (t, p) => {
      const tau = safeNum(p?.tau, safeNum(p?.M, 1.2) * safeNum(p?.g, 9.81) * safeNum(p?.d, 0.08));
      const L = Math.max(1e-6, safeNum(p?.L, safeNum(p?.I, 0.018) * safeNum(p?.omega, 90)));
      const sweep = Math.max(0.2, Math.min(1.4, tau / L));
      return {
        phi: ((2 * Math.PI * sweep * t) / 6) % (2 * Math.PI),
        sweep,
      };
    },
  },
  render: ({ p, state, lang = "es" }) => {
    const isEs = lang !== "en";
    const M = safeNum(p?.M, 1.2);
    const d = safeNum(p?.d, 0.08);
    const I = safeNum(p?.I, 0.018);
    const omega = safeNum(p?.omega, 90);
    const tau = safeNum(p?.tau, M * safeNum(p?.g, 9.81) * d);
    const L = safeNum(p?.L, I * omega);
    const Omegap = safeNum(p?.Omegap, L === 0 ? 0 : tau / L);
    const Tp = safeNum(p?.Tp, Omegap === 0 ? 0 : (2 * Math.PI) / Omegap);
    const phi = safeNum(state?.phi, 0);
    const pivotX = 480;
    const pivotY = 145;
    const coneRx = 170;
    const coneRy = 62;
    const tipX = pivotX + coneRx * Math.cos(phi);
    const tipY = pivotY + 120 + coneRy * Math.sin(phi);
    const wheelR = 42;
    const lColor = "#60a5fa";
    const tauColor = "#f59e0b";
    const pColor = "#34d399";

    return (
      <g>
        <defs>
          <linearGradient id="preBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08111f" />
            <stop offset="100%" stopColor="#13263d" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="20" fill="url(#preBg)" />
        <text x="480" y="48" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="800">
          {isEs ? "Precesion giroscopica" : "Gyroscopic precession"}
        </text>
        <text x="480" y="76" textAnchor="middle" fill="rgba(255,255,255,0.62)" fontSize="13">
          {isEs ? "El torque dobla la direccion de L y hace que el eje barra un cono." : "Torque bends the direction of L and makes the axis sweep out a cone."}
        </text>
        <line x1={pivotX} y1="108" x2={pivotX} y2="450" stroke="rgba(255,255,255,0.18)" strokeWidth="3" strokeDasharray="8 8" />
        <ellipse cx={pivotX} cy={pivotY + 120} rx={coneRx} ry={coneRy} fill="none" stroke="rgba(52,211,153,0.28)" strokeWidth="2.5" strokeDasharray="10 8" />
        <line x1={pivotX} y1={pivotY} x2={tipX} y2={tipY} stroke="#e2e8f0" strokeWidth="5" strokeLinecap="round" />
        <circle cx={pivotX} cy={pivotY} r="9" fill="#e5e7eb" />
        <ellipse cx={tipX} cy={tipY} rx={wheelR} ry="16" fill="rgba(96,165,250,0.16)" stroke="#93c5fd" strokeWidth="3" transform={`rotate(${(phi * 180) / Math.PI} ${tipX} ${tipY})`} />
        <line x1={tipX - wheelR} y1={tipY} x2={tipX + wheelR} y2={tipY} stroke="#dbeafe" strokeWidth="2" transform={`rotate(${(phi * 180) / Math.PI} ${tipX} ${tipY})`} />
        <SvgArrow x1={pivotX} y1={pivotY} x2={pivotX + (tipX - pivotX) * 0.72} y2={pivotY + (tipY - pivotY) * 0.72} color={lColor} label={`L = ${fmt(L, 3, lang)}`} />
        <SvgArrow x1={pivotX + 130} y1={pivotY + 95} x2={pivotX + 130} y2={pivotY + 95 + Math.min(110, tau * 22)} color={tauColor} label={`tau = ${fmt(tau, 3, lang)}`} />
        <SvgArrow x1={pivotX - 220} y1={pivotY + 195} x2={pivotX - 220 + Math.min(160, Omegap * 140)} y2={pivotY + 195} color={pColor} label={`Omega_p = ${fmt(Omegap, 3, lang)}`} />
        <rect x="90" y="410" width="780" height="104" rx="16" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
        <text x="140" y="440" fill="#f8fafc" fontSize="13" fontWeight="800">{`M = ${fmt(M, 2, lang)} kg`}</text>
        <text x="280" y="440" fill="#f8fafc" fontSize="13" fontWeight="800">{`d = ${fmt(d, 3, lang)} m`}</text>
        <text x="420" y="440" fill="#f8fafc" fontSize="13" fontWeight="800">{`I = ${fmt(I, 4, lang)} kg m^2`}</text>
        <text x="610" y="440" fill="#f8fafc" fontSize="13" fontWeight="800">{`omega = ${fmt(omega, 1, lang)} rad/s`}</text>
        <text x="140" y="478" fill="#6ee7b7" fontSize="13" fontWeight="800">{`Tp = ${fmt(Tp, 2, lang)} s`}</text>
        <text x="480" y="478" textAnchor="middle" fill="rgba(255,255,255,0.68)" fontSize="12">
          {isEs ? "Mas torque o menos L implican una precesion mas rapida." : "More torque or less L imply faster precession."}
        </text>
        <text x="480" y="504" textAnchor="middle" fill="rgba(255,255,255,0.42)" fontSize="11">
          {isEs ? "El radio del cono es pedagogico: la fisica importante es que el eje cambia de direccion sin que el giro principal desaparezca de golpe." : "The cone radius is pedagogical: the key physics is that the axis changes direction without the main spin disappearing at once."}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["M", "d", "I", "omega", "g"],
    stateOut: ["tau", "L", "Omegap", "Tp"],
    target: "Omegap",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Por qué un torque perpendicular a L hace que el eje cambie de direccion en vez de caer de inmediato?",
      en: "Why does a torque perpendicular to L make the axis change direction instead of falling immediately?",
    },
    magnitud_estrella: "Omegap",
  },
};

export default profile;
