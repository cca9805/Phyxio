import React from "react";
import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
  SVG_CONTROL_TYPES,
} from "../svgGrammar";
import { SvgArrow, SvgTorqueArc } from "../SvgProfileRenderer";

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const arcPath = (cx, cy, r, a0, a1) => {
  const x0 = cx + r * Math.cos(a0);
  const y0 = cy + r * Math.sin(a0);
  const x1 = cx + r * Math.cos(a1);
  const y1 = cy + r * Math.sin(a1);
  const da = Math.abs(a1 - a0);
  const largeArc = da > Math.PI ? 1 : 0;
  const sweep = a1 > a0 ? 1 : 0;
  return `M ${x0} ${y0} A ${r} ${r} 0 ${largeArc} ${sweep} ${x1} ${y1}`;
};

const VB_W = 900;
const VB_H = 700;

const definicionTorqueProfile = {
  graph_identity: {
    pregunta_principal: {
      es: "Definicion de torque: como varian las formulas de tau al cambiar r, theta y F?",
      en: "Definition of torque: how do the formulas for tau vary when r, theta, and F change?",
    },
    magnitud_estrella: "tau",
  },

  infoCards: [
    {
      key: "formula",
      label: { es: "Torque", en: "Torque" },
      highlight: "tau = r * F * sin(theta) = F * b",
      highlightColor: "#f59e0b",
      description: {
        es: "El torque depende de la fuerza, la distancia al eje y el angulo de aplicacion.",
        en: "Torque depends on force, distance to axis, and angle of application.",
      },
    },
    {
      key: "lectura",
      label: { es: "Lectura", en: "Reading" },
      lines: ({ p }) => [
        `F = ${p?.F ?? "?"} N`,
        `r = ${p?.r ?? "?"} m`,
        `theta = ${p?.theta ?? "?"} deg`,
      ],
      result: ({ p }) => `tau ≈ ${((p?.F ?? 0) * (p?.r ?? 0) * Math.sin(((p?.theta ?? 0) * Math.PI) / 180)).toFixed(2)} N·m`,
      resultColor: "#4ade80",
    },
  ],

  meta: {
    id: "svg-definicion-torque",
    leafId: "definicion-torque",
    title: {
      es: "Definicion de torque",
      en: "Torque definition",
    },
    subtitle: {
      es: "Relacion entre fuerza, brazo y angulo",
      en: "Relation between force, lever arm and angle",
    },
    badge: {
      label: {
        es: "Resultado",
        en: "Result",
      },
      value: ({ p, fmt }) => `tau = ${fmt(safeNum(p.tau, 0), 3)} N*m`,
    },
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: `0 0 ${VB_W} ${VB_H}`,
  svgHeight: 760,

  params: {
    schema: [
      {
        key: "F",
        aliases: ["f", "fuerza"],
        default: 20,
        label: { es: "Fuerza F (N)", en: "Force F (N)" },
        unit: "N",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 200,
        step: 1,
      },
      {
        key: "r",
        aliases: ["brazo"],
        default: 1,
        label: { es: "Brazo r (m)", en: "Lever arm r (m)" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.1,
        max: 3,
        step: 0.05,
      },
      {
        key: "theta",
        aliases: ["angulo", "angle"],
        default: 1.0472,
        label: { es: "Angulo theta (rad)", en: "Angle theta (rad)" },
        unit: "rad",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: Math.PI,
        step: 0.01,
      },
      {
        key: "showComponents",
        default: true,
        label: { es: "Mostrar componentes", en: "Show components" },
        type: SVG_CONTROL_TYPES.TOGGLE,
      },
    ],
    sanitize: (base) => ({
      ...base,
      F: clamp(safeNum(base.F, 20), 0, 200),
      r: clamp(safeNum(base.r, 1), 0.1, 3),
      theta: clamp(safeNum(base.theta, 1.0472), 0, Math.PI),
      showComponents: base.showComponents !== false,
    }),
    derivations: {
      Fperp: ({ F, theta }) => safeNum(F, 20) * Math.sin(safeNum(theta, 0)),
      b: ({ r, theta }) => safeNum(r, 1) * Math.sin(safeNum(theta, 0)),
      tau: ({ r, F, theta }) => safeNum(r, 1) * safeNum(F, 20) * Math.sin(safeNum(theta, 0)),
    },
  },

  motion: {
    type: SVG_MOTION_TYPES.ANIMATED,
    tMax: 6,
    loop: true,
    state: (t, p) => {
      const tau = safeNum(p.tau, 0);
      const spin = (t / 6) * Math.PI * 2;
      const pulse = 0.5 + 0.5 * Math.sin((2 * Math.PI * t) / 6);
      return {
        pulse,
        spin,
        tauSign: tau >= 0 ? 1 : -1,
      };
    },
  },

  render: ({ p, state, lang, toNum, fmt, formulaLabel }) => {
    const isEs = lang !== "en";

    const F = toNum(p.F, 20);
    const r = toNum(p.r, 1);
    const theta = toNum(p.theta, 1.0472);
    const Fperp = toNum(p.Fperp, F * Math.sin(theta));
    const b = toNum(p.b, r * Math.sin(theta));
    const tau = toNum(p.tau, r * F * Math.sin(theta));

    const pivotX = 450;
    const pivotY = 332;
    const armLen = clamp(r * 160, 78, 300);
    const armA = -theta;
    const tipX = pivotX + armLen * Math.cos(armA);
    const tipY = pivotY + armLen * Math.sin(armA);

    const forceLen = clamp(F * 1.08, 30, 155);
    const fX2 = tipX;
    const fY2 = tipY + forceLen;

    const nx = -Math.sin(armA);
    const ny = Math.cos(armA);
    const sgn = ny >= 0 ? 1 : -1;
    const fPerpLen = clamp(Math.abs(Fperp) * 1.08, 22, 133);
    const fpX2 = tipX + sgn * nx * fPerpLen;
    const fpY2 = tipY + sgn * ny * fPerpLen;

    const sparkR = 66 + 9 * toNum(state.pulse, 0.5);
    const sparkA = toNum(state.spin, 0) - Math.PI / 2;
    const sparkX = pivotX + sparkR * Math.cos(sparkA);
    const sparkY = pivotY + sparkR * Math.sin(sparkA);

    const thetaArc = arcPath(pivotX, pivotY, 56, armA, Math.PI / 2);

    return (
      <g>
        <defs>
          <linearGradient id="bgTorqueDef" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e3a5f" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width={VB_W} height={VB_H} fill="url(#bgTorqueDef)" />

        {formulaLabel ? (
          <g transform="translate(808, 25)">
            <rect x="0" y="-12" width="78" height="24" rx="12" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.4)" strokeWidth="1" />
            <text x="39" y="1" textAnchor="middle" dominantBaseline="middle" fontSize="9" fill="#22c55e" fontWeight="900">
              SYNC OK
            </text>
          </g>
        ) : null}

        <line x1="0" y1={pivotY + 80} x2={VB_W} y2={pivotY + 80} stroke="rgba(226,232,240,0.35)" strokeWidth="2" />

        <line x1={pivotX} y1={pivotY} x2={tipX} y2={tipY} stroke="#93c5fd" strokeWidth="6" strokeLinecap="round" />
        <circle cx={pivotX} cy={pivotY} r="10" fill="#f8fafc" />
        <circle cx={tipX} cy={tipY} r="7" fill="#93c5fd" />

        <line x1={pivotX} y1={pivotY} x2={tipX} y2={tipY} stroke="rgba(147,197,253,0.8)" strokeDasharray="6 5" strokeWidth="2" />
        <text x={(pivotX + tipX) / 2 + 8} y={(pivotY + tipY) / 2 - 8} fill="#bae6fd" fontSize="12" fontWeight="800">
          r
        </text>

        <line x1={tipX} y1={pivotY + 80} x2={tipX} y2={tipY} stroke="rgba(255,255,255,0.25)" strokeDasharray="5 4" strokeWidth="2" />
        <line x1={pivotX} y1={pivotY + 92} x2={tipX} y2={pivotY + 92} stroke="#fcd34d" strokeWidth="3" />
        <text x={(pivotX + tipX) / 2} y={pivotY + 112} textAnchor="middle" fill="#fcd34d" fontSize="12" fontWeight="900">
          b = {fmt(b, 3)} m
        </text>

        <SvgArrow x1={tipX} y1={tipY} x2={fX2} y2={fY2} color="#f87171" label="F" labelDx={8} labelDy={-6} />

        {p.showComponents !== false ? (
          <SvgArrow
            x1={tipX}
            y1={tipY}
            x2={fpX2}
            y2={fpY2}
            color="#fbbf24"
            label="F_perp"
            labelDx={8}
            labelDy={-6}
          />
        ) : null}

        <path d={thetaArc} fill="none" stroke="#c4b5fd" strokeWidth="3" />
        <text x={pivotX + 56} y={pivotY + 18} fill="#ddd6fe" fontSize="12" fontWeight="900">
          theta = {fmt(theta, 3)} rad
        </text>

        <SvgTorqueArc cx={pivotX} cy={pivotY} radius={78} label="tau" clockwise={false} />
        <circle cx={sparkX} cy={sparkY} r="5" fill="#22d3ee" opacity="0.9" />

        <g transform="translate(470, 460)">
          <rect x="0" y="0" width="390" height="210" rx="14" fill="rgba(15,23,42,0.62)" stroke="rgba(148,163,184,0.35)" />
          <text x="18" y="30" fill="#f8fafc" fontSize="14" fontWeight="900">
            {isEs ? "Definicion escalar" : "Scalar definition"}
          </text>
          <text x="18" y="58" fill="#93c5fd" fontSize="13" fontWeight="800">tau = r * F * sin(theta)</text>
          <text x="18" y="82" fill="#fbbf24" fontSize="13" fontWeight="800">tau = r * F_perp</text>
          <text x="18" y="106" fill="#fcd34d" fontSize="13" fontWeight="800">tau = F * b</text>

          <line x1="18" y1="124" x2="370" y2="124" stroke="rgba(148,163,184,0.35)" />

          <text x="18" y="150" fill="#e2e8f0" fontSize="12">F = {fmt(F, 3)} N</text>
          <text x="18" y="170" fill="#e2e8f0" fontSize="12">r = {fmt(r, 3)} m</text>
          <text x="18" y="190" fill="#e2e8f0" fontSize="12">F_perp = {fmt(Fperp, 3)} N</text>
          <text x="220" y="150" fill="#e2e8f0" fontSize="12">b = {fmt(b, 3)} m</text>
          <text x="220" y="170" fill="#e2e8f0" fontSize="12">theta = {fmt(theta, 3)} rad</text>
          <text x="220" y="190" fill="#22c55e" fontSize="13" fontWeight="900">tau = {fmt(tau, 4)} N*m</text>
        </g>

        <text x={VB_W / 2} y="38" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="900">
          {isEs ? "Torque como tendencia al giro" : "Torque as tendency to rotate"}
        </text>
        <text x={VB_W / 2} y="58" textAnchor="middle" fill="#cbd5e1" fontSize="12" fontWeight="700">
          {isEs ? "El efecto depende del brazo y de la componente perpendicular" : "Effect depends on lever arm and perpendicular component"}
        </text>
      </g>
    );
  },

  interpretation_binding: {
    paramsIn: ["F", "r", "theta"],
    stateOut: ["F", "r", "theta", "Fperp", "b", "tau"],
  },
};

export default definicionTorqueProfile;
