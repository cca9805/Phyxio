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

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

const profile = {
  meta: {
    id: "svg-rodadura-cinematica-sin-deslizamiento",
    leafId: "rodadura-cinematica-sin-deslizamiento",
    title: {
      es: "Rodadura cinemática sin deslizamiento",
      en: "Rolling Kinematics Without Slipping",
    },
    subtitle: {
      es: "Condición v_cm = ω·R y velocidades en distintos puntos de la rueda",
      en: "Condition v_cm = ω·R and velocities at different points of the wheel",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Qué relación impone la rodadura sin deslizamiento entre la traslación del centro de masas y la rotación?",
      en: "Which relation does rolling without slipping impose between center-of-mass translation and rotation?",
    },
    magnitud_estrella: "v_cm",
    magnitud_secundaria: "omega",
    variable_control: "omega",
  },
  graph_contract: createSvgProfileContract({
    leafId: "rodadura-cinematica-sin-deslizamiento",
    graphId: "svg-rodadura-cinematica-sin-deslizamiento",
    purpose: {
      es: "Mostrar la condición v_cm = ω·R y las velocidades en los puntos top (2v_cm), centro (v_cm) y contacto (0).",
      en: "Show the condition v_cm = ω·R and velocities at top (2v_cm), center (v_cm), and contact point (0).",
    },
    level: {
      es: "bachillerato | universidad inicial",
      en: "high school | early undergraduate",
    },
    expectedInputs: ["R", "omega"],
    derivedMagnitudes: ["v_cm", "v_top", "v_contact"],
    targetCandidates: ["v_cm", "omega"],
    equations: ["v_cm = ω·R", "v_top = 2·v_cm", "v_contacto = 0"],
    hypotheses: ["rodadura sin deslizamiento", "superficie plana"],
    validityDomain: ["velocidades no relativistas"],
    visualSimplifications: ["rueda circular rígida", "contacto puntual"],
    alwaysVisible: ["v_cm"],
  }),
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 620,
  params: {
    schema: [
      {
        key: "R",
        default: 4,
        label: { es: "Radio R", en: "Radius R" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.5,
        max: 12,
        step: 0.5,
      },
      {
        key: "omega",
        default: 1.5,
        label: { es: "Vel. angular ω", en: "Angular velocity ω" },
        unit: "rad/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -5,
        max: 5,
        step: 0.1,
      },
    ],
    derivations: {
      v_cm: ({ R, omega }) => safeNum(omega, 1.5) * safeNum(R, 4),
      v_top: ({ R, omega }) => 2 * safeNum(omega, 1.5) * safeNum(R, 4),
      v_contact: () => 0,
    },
  },
  infoCards: [
    {
      key: "condicion",
      label: { es: "Condición de rodadura", en: "Rolling condition" },
      highlight: "v_cm = ω·R",
      highlightColor: "#93c5fd",
      description: {
        es: "Sin deslizamiento, la velocidad del punto de contacto es siempre cero.",
        en: "Without slipping, the contact point velocity is always zero.",
      },
    },
    {
      key: "lectura",
      label: { es: "Velocidades clave", en: "Key velocities" },
      lines: ({ p, lang }) => [
        `R   = ${fmt(safeNum(p?.R, 4), 2, lang)} m`,
        `ω   = ${fmt(safeNum(p?.omega, 1.5), 2, lang)} rad/s`,
        `v_top = ${fmt(2 * safeNum(p?.v_cm, 0), 2, lang)} m/s`,
      ],
      result: ({ p, lang }) => `v_cm = ${fmt(safeNum(p?.v_cm, 0), 2, lang)} m/s`,
      resultColor: "#34d399",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    tMax: 5,
    loop: true,
    state: (t, p) => {
      const R = clamp(safeNum(p?.R, 4), 0.2, 12);
      const omega = safeNum(p?.omega, 1.5);
      const v_cm = omega * R;
      const xCm = ((v_cm * t * 0.5) % 680) - 100;
      const theta = omega * t;
      return { xCm, theta };
    },
  },
  render: ({ p, state, lang = "es" }) => {
    const isEs = lang !== "en";
    const R = clamp(safeNum(p?.R, 4), 0.2, 12);
    const omega = safeNum(p?.omega, 1.5);
    const v_cm = safeNum(p?.v_cm, omega * R);
    const v_top = safeNum(p?.v_top, 2 * omega * R);

    const groundY = 400;
    const rPx = clamp(30 + R * 14, 50, 160);
    const cx = state?.xCm != null ? 200 + ((state.xCm + 100) % 680) : 420;
    const cy = groundY - rPx;
    const theta = state?.theta ?? 0;

    const velLen = clamp(Math.abs(v_cm) * 14, 10, 160);
    const sign = Math.sign(omega || 1);

    // Points on rim at top and contact
    const topX = cx;
    const topY = cy - rPx;
    const contactX = cx;
    const contactY = cy + rPx;

    // Spoke points for rotation visualization
    const spokeAngles = [0, Math.PI / 2, Math.PI, 3 * Math.PI / 2];

    return (
      <g>
        <defs>
          <linearGradient id="rodBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#07111e" />
            <stop offset="100%" stopColor="#0c1f35" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="960" height="560" rx="18" fill="url(#rodBg)" />

        <text x="480" y="48" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="800">
          {isEs ? "Rodadura sin deslizamiento" : "Rolling Without Slipping"}
        </text>
        <text x="480" y="73" textAnchor="middle" fill="rgba(255,255,255,0.58)" fontSize="13">
          {isEs ? "v_cm = ω·R   ·   punto de contacto: v = 0" : "v_cm = ω·R   ·   contact point: v = 0"}
        </text>

        {/* Ground */}
        <line x1="80" y1={groundY} x2="880" y2={groundY} stroke="rgba(255,255,255,0.28)" strokeWidth="3" />
        {/* Ground texture */}
        {[100, 160, 220, 280, 340, 400, 460, 520, 580, 640, 700, 760, 820].map((x) => (
          <line key={x} x1={x} y1={groundY} x2={x - 12} y2={groundY + 14} stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
        ))}

        {/* Wheel rim */}
        <circle cx={cx} cy={cy} r={rPx} fill="rgba(96,165,250,0.10)" stroke="#93c5fd" strokeWidth="2.5" />

        {/* Spokes */}
        {spokeAngles.map((a, i) => (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={cx + rPx * Math.cos(a + theta)}
            y2={cy + rPx * Math.sin(a + theta)}
            stroke="rgba(147,197,253,0.45)"
            strokeWidth="2"
          />
        ))}

        {/* Center */}
        <circle cx={cx} cy={cy} r="6" fill="#93c5fd" />

        {/* CM velocity arrow */}
        <SvgArrow x1={cx} y1={cy} x2={cx + sign * velLen} y2={cy} color="#34d399" label={`v_cm=${fmt(v_cm, 2, lang)}`} />

        {/* Top velocity (2·v_cm) */}
        <circle cx={topX} cy={topY} r="5" fill="#f87171" />
        <SvgArrow x1={topX} y1={topY} x2={topX + sign * clamp(Math.abs(v_top) * 14, 10, 220)} y2={topY} color="#f87171" label={`v_top=${fmt(v_top, 2, lang)}`} />

        {/* Contact point (v=0) */}
        <circle cx={contactX} cy={contactY} r="7" fill="#fbbf24" stroke="#fde68a" strokeWidth="2" />
        <text x={contactX + 12} y={contactY - 8} fill="#fde68a" fontSize="12" fontWeight="700">v=0</text>

        {/* Info panel */}
        <rect x="615" y="160" width="310" height="200" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" />
        <text x="770" y="188" textAnchor="middle" fill="#93c5fd" fontSize="13" fontWeight="700">{isEs ? "Condición de rodadura" : "Rolling condition"}</text>
        <text x="635" y="215" fill="rgba(255,255,255,0.75)" fontSize="13">R = {fmt(R, 2, lang)} m</text>
        <text x="635" y="239" fill="rgba(255,255,255,0.75)" fontSize="13">ω = {fmt(omega, 2, lang)} rad/s</text>
        <text x="635" y="263" fill="#34d399" fontSize="13">v_cm = {fmt(v_cm, 2, lang)} m/s</text>
        <text x="635" y="287" fill="#f87171" fontSize="13">v_top = {fmt(v_top, 2, lang)} m/s</text>
        <text x="635" y="311" fill="#fbbf24" fontSize="13">v_contacto = 0 m/s</text>
        <text x="635" y="340" fill="rgba(255,255,255,0.55)" fontSize="12">v_cm = ω·R</text>

        <text x="480" y="522" textAnchor="middle" fill="rgba(255,255,255,0.54)" fontSize="12">
          {isEs
            ? "Sin deslizamiento: la velocidad del punto de contacto es cero en todo instante."
            : "Without slipping: the contact point velocity is zero at all times."}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["R", "omega"],
    stateOut: ["v_cm", "v_top", "v_contact"],
    target: "v_cm",
  },
};

export default profile;
