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

const diskRadius = (I) => 34 + Math.min(46, Math.sqrt(Math.max(I, 0)) * 18);
const barLen = (value, scale = 22) => Math.max(8, Math.min(220, Math.abs(value) * scale));

const profile = {
  meta: {
    id: "svg-conservacion-momento-angular",
    leafId: "conservacion-momento-angular",
    title: {
      es: "Conservacion de momento angular",
      en: "Angular momentum conservation",
    },
    subtitle: {
      es: "Lectura visual del intercambio entre inercia rotacional y velocidad angular",
      en: "Visual reading of the tradeoff between rotational inertia and angular speed",
    },
  },
  graph_contract: createSvgProfileContract({
    leafId: "conservacion-momento-angular",
    graphId: "svg-conservacion-momento-angular",
    purpose: {
      es: "Mostrar que si el torque externo neto es nulo, la reduccion de I obliga a aumentar omega para sostener L.",
      en: "Show that when the net external torque is zero, reducing I forces omega to increase in order to keep L constant.",
    },
    level: {
      es: "bachillerato",
      en: "high school",
    },
    expectedInputs: ["Ii", "omegai", "If", "tau", "DeltaT"],
    derivedMagnitudes: ["Li", "Lf", "omegaf"],
    targetCandidates: ["Lf", "omegaf"],
    equations: ["Li = Ii omegai", "Lf = Li + tau DeltaT", "omegaf = Lf / If"],
    hypotheses: ["eje fijo", "lectura escalar sobre el mismo eje de rotacion"],
    validityDomain: ["si tau = 0 entonces Li = Lf", "el cambio de I se compara antes y despues"],
    visualSimplifications: ["dos estados discretos", "rotor ideal sin detalles mecanicos secundarios"],
    alwaysVisible: ["Li", "Lf", "omegaf", "tau"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 640,
  params: {
    schema: [
      { key: "Ii", default: 3.5, label: { es: "Inercia inicial", en: "Initial inertia" }, unit: "kg m^2", type: SVG_CONTROL_TYPES.RANGE, min: 0.5, max: 8, step: 0.1 },
      { key: "omegai", default: 6, label: { es: "Omega inicial", en: "Initial omega" }, unit: "rad/s", type: SVG_CONTROL_TYPES.RANGE, min: 0.5, max: 16, step: 0.1 },
      { key: "If", default: 2, label: { es: "Inercia final", en: "Final inertia" }, unit: "kg m^2", type: SVG_CONTROL_TYPES.RANGE, min: 0.5, max: 8, step: 0.1 },
      { key: "tau", default: 0, label: { es: "Torque externo", en: "External torque" }, unit: "N m", type: SVG_CONTROL_TYPES.RANGE, min: -8, max: 8, step: 0.1 },
      { key: "DeltaT", default: 1.2, label: { es: "Delta t", en: "Delta t" }, unit: "s", type: SVG_CONTROL_TYPES.RANGE, min: 0.2, max: 4, step: 0.1 },
    ],
    derivations: {
      Li: ({ Ii, omegai }) => safeNum(Ii, 3.5) * safeNum(omegai, 6),
      Lf: ({ Ii, omegai, tau, DeltaT }) => safeNum(Ii, 3.5) * safeNum(omegai, 6) + safeNum(tau, 0) * safeNum(DeltaT, 1.2),
      omegaf: ({ Ii, omegai, If, tau, DeltaT }) => {
        const Ifv = Math.max(0.001, safeNum(If, 2));
        const Lf = safeNum(Ii, 3.5) * safeNum(omegai, 6) + safeNum(tau, 0) * safeNum(DeltaT, 1.2);
        return Lf / Ifv;
      },
    },
  },
  infoCards: [
    {
      key: "base",
      label: { es: "Ecuación base", en: "Base equation" },
      highlight: "L = I · ω",
      highlightColor: "#93c5fd",
      description: {
        es: "El momento angular es el producto de la inercia rotacional y la velocidad angular.",
        en: "Angular momentum is the product of rotational inertia and angular speed.",
      },
    },
    {
      key: "reading",
      label: { es: "Lectura", en: "Reading" },
      lines: ({ p, lang }) => [
        `I = ${fmt(safeNum(p?.Ii, 3.5), 2, lang)} → ${fmt(safeNum(p?.If, 2), 2, lang)} kg·m²`,
        `ω_i = ${fmt(safeNum(p?.omegai, 6), 2, lang)} rad/s`,
      ],
      result: ({ p, lang }) => `ω_f = ${fmt(safeNum(p?.omegaf, 0), 2, lang)} rad/s`,
      resultColor: "#34d399",
    },
    {
      key: "conservation",
      label: { es: "Conservación", en: "Conservation" },
      bg: "rgba(16,185,129,0.10)",
      border: "rgba(52,211,153,0.18)",
      description: ({ p, lang }) => {
        const tau = safeNum(p?.tau, 0);
        return tau === 0
          ? (lang === "en" ? "External torque is zero: L is conserved." : "Torque externo nulo: L se conserva.")
          : (lang === "en" ? "External torque is non-zero: L changes." : "Torque externo no nulo: L cambia.");
      },
    },
  ],
  motion: { type: SVG_MOTION_TYPES.STATIC },
  render: ({ p, lang = "es" }) => {
    const isEs = lang !== "en";
    const Ii = Math.max(0.001, safeNum(p?.Ii, 3.5));
    const If = Math.max(0.001, safeNum(p?.If, 2));
    const omegai = safeNum(p?.omegai, 6);
    const tau = safeNum(p?.tau, 0);
    const DeltaT = Math.max(0.001, safeNum(p?.DeltaT, 1.2));
    const Li = safeNum(p?.Li, Ii * omegai);
    const Lf = safeNum(p?.Lf, Li + tau * DeltaT);
    const omegaf = safeNum(p?.omegaf, Lf / If);
    const ri = diskRadius(Ii);
    const rf = diskRadius(If);
    const sameL = Math.abs(Lf - Li) < 0.08;
    const verdict = tau === 0 ? (isEs ? "Conservacion limpia" : "Clean conservation") : sameL ? (isEs ? "Casi conservado" : "Almost conserved") : (isEs ? "L cambia por torque" : "L changes due to torque");
    const verdictColor = tau === 0 ? "#34d399" : sameL ? "#fbbf24" : "#f87171";

    return (
      <g>
        <defs>
          <linearGradient id="angMomBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#091422" />
            <stop offset="100%" stopColor="#102744" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="20" fill="url(#angMomBg)" />
        <text x="480" y="48" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="800">
          {isEs ? "Conservacion de momento angular" : "Angular momentum conservation"}
        </text>
        <text x="480" y="76" textAnchor="middle" fill="rgba(255,255,255,0.62)" fontSize="13">
          {isEs ? "Si el torque externo neto vale cero, el sistema intercambia I y omega manteniendo L." : "If the net external torque is zero, the system trades I and omega while keeping L fixed."}
        </text>
        <rect x="332" y="90" width="296" height="32" rx="10" fill={`${verdictColor}1f`} stroke={verdictColor} strokeWidth="1.5" />
        <text x="480" y="111" textAnchor="middle" fill={verdictColor} fontSize="14" fontWeight="800">
          {verdict}
        </text>
        <rect x="70" y="150" width="360" height="250" rx="16" fill="rgba(96,165,250,0.08)" stroke="rgba(96,165,250,0.22)" />
        <rect x="530" y="150" width="360" height="250" rx="16" fill="rgba(52,211,153,0.08)" stroke="rgba(52,211,153,0.22)" />
        <text x="250" y="180" textAnchor="middle" fill="#93c5fd" fontSize="16" fontWeight="800">
          {isEs ? "Estado inicial" : "Initial state"}
        </text>
        <text x="710" y="180" textAnchor="middle" fill="#6ee7b7" fontSize="16" fontWeight="800">
          {isEs ? "Estado final" : "Final state"}
        </text>
        <line x1="250" y1="295" x2="250" y2="354" stroke="rgba(255,255,255,0.75)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="250" cy="295" r={ri} fill="rgba(96,165,250,0.15)" stroke="#93c5fd" strokeWidth="3" />
        <line x1={250 - ri} y1="295" x2={250 + ri} y2="295" stroke="#bfdbfe" strokeWidth="2" />
        <line x1="250" y1={295 - ri} x2="250" y2={295 + ri} stroke="#bfdbfe" strokeWidth="2" />
        <SvgArrow x1="180" y1="230" x2={180 + Math.sign(omegai || 1) * barLen(omegai, 10)} y2="230" color="#60a5fa" label={`omega_i = ${fmt(omegai, 2, lang)}`} />
        <text x="250" y="382" textAnchor="middle" fill="#dbeafe" fontSize="13">
          {`Ii = ${fmt(Ii, 2, lang)}`}
        </text>
        <line x1="710" y1="295" x2="710" y2="354" stroke="rgba(255,255,255,0.75)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="710" cy="295" r={rf} fill="rgba(52,211,153,0.15)" stroke="#6ee7b7" strokeWidth="3" />
        <line x1={710 - rf} y1="295" x2={710 + rf} y2="295" stroke="#d1fae5" strokeWidth="2" />
        <line x1="710" y1={295 - rf} x2="710" y2={295 + rf} stroke="#d1fae5" strokeWidth="2" />
        <SvgArrow x1="640" y1="230" x2={640 + Math.sign(omegaf || 1) * barLen(omegaf, 10)} y2="230" color="#34d399" label={`omega_f = ${fmt(omegaf, 2, lang)}`} />
        <text x="710" y="382" textAnchor="middle" fill="#d1fae5" fontSize="13">
          {`If = ${fmt(If, 2, lang)}`}
        </text>
        <rect x="110" y="430" width="740" height="90" rx="16" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
        <text x="180" y="458" fill="#93c5fd" fontSize="13" fontWeight="800">
          {`Li = ${fmt(Li, 2, lang)}`}
        </text>
        <text x="620" y="458" fill="#6ee7b7" fontSize="13" fontWeight="800">
          {`Lf = ${fmt(Lf, 2, lang)}`}
        </text>
        <rect x="150" y="470" width={barLen(Li)} height="14" rx="7" fill="#60a5fa" />
        <rect x="590" y="470" width={barLen(Lf)} height="14" rx="7" fill="#34d399" />
        <SvgArrow x1="480" y1="498" x2={480 + Math.sign(tau || 1) * barLen(tau, 14)} y2="498" color="#f59e0b" label={`tau ext = ${fmt(tau, 2, lang)}`} />
        <text x="480" y="524" textAnchor="middle" fill="rgba(255,255,255,0.68)" fontSize="12">
          {isEs ? `Delta t = ${fmt(DeltaT, 2, lang)} s. Con tau = 0, el cambio visible es de reparto entre I y omega, no de L.` : `Delta t = ${fmt(DeltaT, 2, lang)} s. With tau = 0, the visible change is a redistribution between I and omega, not a change in L.`}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["Ii", "omegai", "If", "tau", "DeltaT"],
    stateOut: ["Li", "Lf", "omegaf"],
    target: "Lf",
  },
  graph_identity: {
    pregunta_principal: {
      es: "Cuando el torque externo neto es cero, como se redistribuyen la inercia rotacional y la velocidad angular para sostener el momento angular?",
      en: "When the net external torque is zero, how do rotational inertia and angular speed redistribute to preserve angular momentum?",
    },
    magnitud_estrella: "L",
  },
};

export default profile;
