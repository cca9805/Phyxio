import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_MOTION_TYPES,
  SVG_SCENE_TYPES,
} from "../svgGrammar";

const safeNum = (value, fallback = 0) => {
  if (typeof value === "number") return value;
  if (value && typeof value.value === "number") return value.value;
  const parsed = Number(String(value ?? "").replace(",", "."));
  return Number.isFinite(parsed) ? parsed : fallback;
};

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const vectorEnd = (length, angleDeg) => {
  const angle = (angleDeg * Math.PI) / 180;
  return {
    x: length * Math.cos(angle),
    y: -length * Math.sin(angle),
  };
};

const tensorDeInerciaProfile = {
  meta: {
    id: "svg-tensor-de-inercia",
    leafId: "tensor-de-inercia",
    title: {
      es: "Tensor de inercia y desalineacion de L",
      en: "Inertia tensor and L misalignment",
    },
    subtitle: {
      es: "Los productos de inercia pueden inclinar el momento angular",
      en: "Products of inertia can tilt angular momentum",
    },
  },

  interpretation_binding: {
    paramsIn: ["Ixx", "Iyy", "Ixy", "omega", "angle"],
    stateOut: ["omegaX", "omegaY", "Lx", "Ly", "deltaAngle"],
    target: "tensor_inercia",
    preferredTarget: "tensor_inercia",
    secondaryTargets: ["producto_inercia", "momento_angular", "omega"],
    visibleMagnitudes: ["tensor_inercia", "producto_inercia", "momento_angular", "omega"],
  },

  graph_identity: {
    pregunta_principal: {
      es: "¿Como el tensor de inercia y el producto de inercia hacen que L deje de apuntar como omega?",
      en: "How do the inertia tensor and the product of inertia make L stop pointing like omega?",
    },
    magnitud_estrella: "tensor_inercia",
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 680",
  svgHeight: 720,

  params: {
    schema: [
      {
        key: "Ixx",
        default: 4.2,
        label: { es: "Ixx (kg*m^2)", en: "Ixx (kg*m^2)" },
        unit: "kg*m^2",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 8,
        step: 0.1,
      },
      {
        key: "Iyy",
        default: 2.3,
        label: { es: "Iyy (kg*m^2)", en: "Iyy (kg*m^2)" },
        unit: "kg*m^2",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 8,
        step: 0.1,
      },
      {
        key: "Ixy",
        default: 0.9,
        label: { es: "Producto Ixy", en: "Product Ixy" },
        unit: "kg*m^2",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -2,
        max: 2,
        step: 0.05,
      },
      {
        key: "omega",
        default: 3.5,
        label: { es: "Modulo de omega", en: "Magnitude of omega" },
        unit: "rad/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.5,
        max: 8,
        step: 0.1,
      },
      {
        key: "angle",
        default: 28,
        label: { es: "Angulo de omega", en: "Omega angle" },
        unit: "deg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -75,
        max: 75,
        step: 1,
      },
    ],
    derivations: {
      omegaX: ({ omega, angle }) => safeNum(omega, 3.5) * Math.cos((safeNum(angle, 28) * Math.PI) / 180),
      omegaY: ({ omega, angle }) => safeNum(omega, 3.5) * Math.sin((safeNum(angle, 28) * Math.PI) / 180),
      Lx: ({ Ixx, Ixy, omegaX, omegaY }) =>
        safeNum(Ixx, 4.2) * safeNum(omegaX, 0) + safeNum(Ixy, 0.9) * safeNum(omegaY, 0),
      Ly: ({ Ixy, Iyy, omegaX, omegaY }) =>
        safeNum(Ixy, 0.9) * safeNum(omegaX, 0) + safeNum(Iyy, 2.3) * safeNum(omegaY, 0),
      deltaAngle: ({ omegaX, omegaY, Lx, Ly }) => {
        const omegaAngle = Math.atan2(safeNum(omegaY, 0), safeNum(omegaX, 1));
        const lAngle = Math.atan2(safeNum(Ly, 0), safeNum(Lx, 1));
        return ((lAngle - omegaAngle) * 180) / Math.PI;
      },
    },
  },

  infoCards: [
    {
      key: "tensor-read",
      label: { es: "Lectura clave", en: "Key reading" },
      lines: ({ lang }) => [
        lang === "en" ? "L = I * omega" : "L = I * omega",
        lang === "en" ? "If Ixy != 0, L may tilt" : "Si Ixy != 0, L puede inclinarse",
      ],
      result: ({ lang, p }) => {
        const delta = safeNum(p.deltaAngle, 0);
        return lang === "en"
          ? `Angular misalignment: ${delta.toFixed(1)} deg`
          : `Desalineacion angular: ${delta.toFixed(1)} deg`;
      },
      resultColor: "#fbbf24",
    },
  ],

  motion: {
    type: SVG_MOTION_TYPES.STATIC,
  },

  render: ({ p, lang = "es", fmt }) => {
    const isEs = lang !== "en";
    const omegaX = safeNum(p.omegaX, 0);
    const omegaY = safeNum(p.omegaY, 0);
    const lX = safeNum(p.Lx, 0);
    const lY = safeNum(p.Ly, 0);
    const delta = safeNum(p.deltaAngle, 0);

    const omegaMagnitude = Math.hypot(omegaX, omegaY);
    const lMagnitude = Math.hypot(lX, lY);
    const omegaAngle = ((Math.atan2(omegaY, omegaX) * 180) / Math.PI);
    const lAngle = ((Math.atan2(lY, lX) * 180) / Math.PI);

    const omegaVec = vectorEnd(clamp(omegaMagnitude * 34, 40, 170), omegaAngle);
    const lVec = vectorEnd(clamp(lMagnitude * 11, 50, 185), lAngle);

    return (
      <g>
        <defs>
          <linearGradient id="tensorBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <marker id="tensorArrowCyan" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#67e8f9" />
          </marker>
          <marker id="tensorArrowAmber" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#fbbf24" />
          </marker>
        </defs>

        <rect x="0" y="0" width="960" height="680" fill="url(#tensorBg)" />

        <text x="480" y="52" textAnchor="middle" fill="#ffffff" fontSize="28" fontWeight="800">
          {isEs ? "Tensor de inercia, ejes y productos de inercia" : "Inertia tensor, axes, and products of inertia"}
        </text>
        <text x="480" y="82" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="14">
          {isEs ? "Si Ixy no es cero, L puede no ser paralelo a omega" : "If Ixy is nonzero, L may not stay parallel to omega"}
        </text>

        <g transform="translate(260, 360)">
          <ellipse cx="0" cy="0" rx="150" ry="90" fill="rgba(255,255,255,0.05)" stroke="#93c5fd" strokeWidth="3" />
          <ellipse cx="0" cy="0" rx="70" ry="150" fill="none" stroke="rgba(134,239,172,0.45)" strokeWidth="2" />
          <line x1="-190" y1="0" x2="190" y2="0" stroke="rgba(255,255,255,0.18)" strokeDasharray="6 4" />
          <line x1="0" y1="-180" x2="0" y2="180" stroke="rgba(255,255,255,0.18)" strokeDasharray="6 4" />
          <line x1={-omegaVec.x} y1={omegaVec.y} x2={omegaVec.x} y2={-omegaVec.y} stroke="rgba(103,232,249,0.16)" />

          <line
            x1="0"
            y1="0"
            x2={omegaVec.x}
            y2={omegaVec.y}
            stroke="#67e8f9"
            strokeWidth="5"
            markerEnd="url(#tensorArrowCyan)"
          />
          <line
            x1="0"
            y1="0"
            x2={lVec.x}
            y2={lVec.y}
            stroke="#fbbf24"
            strokeWidth="5"
            markerEnd="url(#tensorArrowAmber)"
          />

          <text x={omegaVec.x + 12} y={omegaVec.y - 8} fill="#67e8f9" fontSize="14" fontWeight="800">
            omega
          </text>
          <text x={lVec.x + 12} y={lVec.y - 8} fill="#fbbf24" fontSize="14" fontWeight="800">
            L
          </text>

          <text x="-178" y="-120" fill="#e2e8f0" fontSize="13">
            {isEs ? "Cuerpo con ejes no principales" : "Body in non-principal axes"}
          </text>
          <text x="-178" y="-98" fill="rgba(255,255,255,0.74)" fontSize="12">
            {isEs ? "Ixy acopla componentes" : "Ixy couples components"}
          </text>
        </g>

        <g transform="translate(570, 165)">
          <rect x="0" y="0" width="310" height="320" rx="18" fill="rgba(15,23,42,0.82)" stroke="rgba(255,255,255,0.16)" />
          <text x="26" y="38" fill="#ffffff" fontSize="20" fontWeight="800">
            {isEs ? "Corte 2x2 del tensor" : "2x2 tensor slice"}
          </text>
          <text x="26" y="74" fill="#cbd5e1" fontSize="18" fontFamily="monospace">
            {`| ${fmt(safeNum(p.Ixx, 4.2), 2)}   ${fmt(safeNum(p.Ixy, 0.9), 2)} |`}
          </text>
          <text x="26" y="108" fill="#cbd5e1" fontSize="18" fontFamily="monospace">
            {`| ${fmt(safeNum(p.Ixy, 0.9), 2)}   ${fmt(safeNum(p.Iyy, 2.3), 2)} |`}
          </text>

          <text x="26" y="160" fill="#67e8f9" fontSize="14" fontWeight="800">
            {isEs ? "omega = (" : "omega = ("}{fmt(omegaX, 2)}, {fmt(omegaY, 2)})
          </text>
          <text x="26" y="192" fill="#fbbf24" fontSize="14" fontWeight="800">
            {isEs ? "L = (" : "L = ("}{fmt(lX, 2)}, {fmt(lY, 2)})
          </text>
          <text x="26" y="236" fill="#f8fafc" fontSize="14">
            {isEs ? "Desalineacion angular" : "Angular misalignment"}: {fmt(delta, 2)} deg
          </text>
          <text x="26" y="270" fill="rgba(255,255,255,0.72)" fontSize="12">
            {isEs
              ? "Si Ixy = 0 y el eje es principal, L tiende a alinearse con omega."
              : "If Ixy = 0 and the axis is principal, L tends to align with omega."}
          </text>
          <text x="26" y="292" fill="rgba(255,255,255,0.72)" fontSize="12">
            {isEs
              ? "Si Ixy aumenta, aparece mezcla entre componentes y cambia la direccion de L."
              : "As Ixy grows, components mix and the direction of L changes."}
          </text>
        </g>

        <text x="480" y="625" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="800">
          {isEs
            ? "El tensor de inercia no solo fija el modulo de la respuesta; tambien puede rotar la direccion de L."
            : "The inertia tensor does not only set the response size; it can also rotate the direction of L."}
        </text>
        <text x="480" y="650" textAnchor="middle" fill="rgba(255,255,255,0.72)" fontSize="12">
          {isEs
            ? "La diagonal recoge momentos principales y los productos de inercia miden acoplamientos entre ejes."
            : "The diagonal stores principal moments and the products of inertia measure couplings between axes."}
        </text>
      </g>
    );
  },
};

export default tensorDeInerciaProfile;
