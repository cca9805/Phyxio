import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_MOTION_TYPES,
  SVG_SCENE_TYPES,
} from "@/v2/components/SVG/svgGrammar";

const shapeOptions = [
  { value: "streamlined", cd: 0.08, es: "Perfil afinado", en: "Streamlined body" },
  { value: "cyclist", cd: 0.9, es: "Ciclista", en: "Cyclist" },
  { value: "cube", cd: 1.05, es: "Cubo", en: "Cube" },
];

const shapeData = Object.fromEntries(shapeOptions.map((item) => [item.value, item]));

const profile = {
  meta: {
    id: "svg-coeficiente-de-arrastre",
    leafId: "coeficiente-de-arrastre",
    title: {
      es: "Coeficiente de arrastre",
      en: "Drag coefficient",
    },
    subtitle: {
      es: "La forma cambia la estela y el costo energetico",
      en: "Shape changes wake and energetic cost",
    },
  },

  graph_identity: {
    pregunta_principal: {
      es: "Como leer en Coord y en SVG que C_d no es una fuerza, sino un resumen de forma y estela que cambia F_d y la potencia P_d necesaria para atravesar el fluido?",
      en: "How can we read in Coord and in the SVG that C_d is not a force, but a summary of shape and wake that changes drag F_d and the power P_d needed to move through the fluid?",
    },
    magnitud_estrella: "C_d",
    magnitud_secundaria: "F_d",
    variable_control: "v",
  },

  interpretation_binding: {
    paramsIn: ["shape", "rho", "A", "v"],
    stateOut: ["C_d", "F_d", "P_d"],
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 640,

  params: {
    schema: [
      {
        key: "shape",
        default: "cyclist",
        label: { es: "Forma", en: "Shape" },
        type: SVG_CONTROL_TYPES.SELECT,
        options: shapeOptions.map((item) => ({ value: item.value, label: { es: item.es, en: item.en } })),
      },
      {
        key: "rho",
        default: 1.2,
        label: { es: "Densidad", en: "Density" },
        unit: "kg/m^3",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.8,
        max: 2.0,
        step: 0.01,
      },
      {
        key: "A",
        default: 0.7,
        label: { es: "Area", en: "Area" },
        unit: "m^2",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.1,
        max: 1.5,
        step: 0.01,
      },
      {
        key: "v",
        default: 15,
        label: { es: "Velocidad", en: "Speed" },
        unit: "m/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 35,
        step: 0.5,
      },
    ],
    derivations: {
      C_d: ({ shape }) => (shapeData[shape]?.cd ?? shapeData.cyclist.cd),
      F_d: ({ shape, rho, A, v }) => 0.5 * rho * (shapeData[shape]?.cd ?? shapeData.cyclist.cd) * A * v * v,
      P_d: ({ shape, rho, A, v }) => {
        const cd = shapeData[shape]?.cd ?? shapeData.cyclist.cd;
        const fd = 0.5 * rho * cd * A * v * v;
        return fd * v;
      },
    },
  },

  infoCards: [
    {
      key: "shape",
      label: { es: "Lectura", en: "Reading" },
      lines: ({ p, state, lang }) => {
        const merged = { ...p, ...state };
        const item = shapeData[merged?.shape] || shapeData.cyclist;
        return [
          lang === "en" ? item.en : item.es,
          `C_d = ${Number(merged?.C_d ?? item.cd).toFixed(2)}`,
        ];
      },
      result: ({ p, state, lang }) => {
        const merged = { ...p, ...state };
        return `${lang === "en" ? "F_d" : "F_d"} = ${Number(merged?.F_d ?? 0).toFixed(1)} N`;
      },
      resultColor: "#fde68a",
    },
    {
      key: "power",
      label: { es: "Costo energetico", en: "Energetic cost" },
      lines: ({ p, state, lang }) => {
        const merged = { ...p, ...state };
        return [
          `${lang === "en" ? "P_d" : "P_d"} = ${Number(merged?.P_d ?? 0).toFixed(1)} W`,
          lang === "en" ? "Wake controls power demand." : "La estela gobierna la potencia.",
        ];
      },
    },
  ],

  motion: {
    type: SVG_MOTION_TYPES.NONE,
  },

  render: ({ p, state, lang = "es" }) => {
    const isEs = lang !== "en";
    const merged = { ...p, ...state };
    const item = shapeData[merged?.shape] || shapeData.cyclist;
    const wake = item.value === "streamlined" ? 80 : item.value === "cyclist" ? 140 : 200;
    const fd = Number(merged?.F_d ?? 0);
    const pd = Number(merged?.P_d ?? 0);

    return (
      <g>
        <defs>
          <linearGradient id="cdBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08121a" />
            <stop offset="100%" stopColor="#17344c" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="960" height="560" rx="20" fill="url(#cdBg)" />
        <text x="480" y="44" textAnchor="middle" fill="#ffffff" fontSize="28" fontWeight="800">
          {isEs ? "Coeficiente de arrastre" : "Drag coefficient"}
        </text>
        <text x="480" y="72" textAnchor="middle" fill="rgba(255,255,255,0.70)" fontSize="14">
          {isEs ? "La forma cambia la estela, F_d y P_d" : "Shape changes wake, F_d, and P_d"}
        </text>

        <rect x="60" y="112" width="840" height="380" rx="18" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" />

        {[150, 205, 260, 315, 370].map((y, index) => (
          <path
            key={index}
            d={`M 90 ${y} C 220 ${y} 320 ${y} 450 ${y} S ${620 + wake * 0.15} ${y + (index % 2 === 0 ? 12 : -12)} ${760 + wake * 0.3} ${y}`}
            fill="none"
            stroke="rgba(56,189,248,0.75)"
            strokeWidth="3"
          />
        ))}

        {item.value === "streamlined" ? (
          <path d="M 330 280 Q 410 210 520 280 Q 410 350 330 280 Z" fill="#cbd5e1" stroke="#ffffff" strokeWidth="3" />
        ) : item.value === "cyclist" ? (
          <g>
            <circle cx="390" cy="246" r="24" fill="#e2e8f0" stroke="#ffffff" strokeWidth="3" />
            <path d="M 360 286 L 430 262 L 478 298 L 426 320 Z" fill="#cbd5e1" stroke="#ffffff" strokeWidth="3" />
            <circle cx="360" cy="336" r="28" fill="none" stroke="#ffffff" strokeWidth="4" />
            <circle cx="446" cy="336" r="28" fill="none" stroke="#ffffff" strokeWidth="4" />
          </g>
        ) : (
          <rect x="340" y="220" width="150" height="120" rx="6" fill="#cbd5e1" stroke="#ffffff" strokeWidth="3" />
        )}

        <path
          d={`M 520 230 C ${620 + wake * 0.1} 240 ${650 + wake * 0.2} 290 ${760 + wake * 0.3} 280`}
          fill="none"
          stroke={item.value === "streamlined" ? "#22c55e" : item.value === "cyclist" ? "#f59e0b" : "#ef4444"}
          strokeWidth="6"
          strokeDasharray="10 10"
        />

        <rect x="622" y="156" width="220" height="156" rx="14" fill="rgba(15,23,42,0.58)" stroke="rgba(255,255,255,0.12)" />
        <text x="638" y="188" fill="#ffffff" fontSize="15" fontWeight="800">
          {isEs ? "Lectura del perfil" : "Profile reading"}
        </text>
        <text x="638" y="214" fill="#fde68a" fontSize="13" fontWeight="800">
          {isEs ? item.es : item.en}
        </text>
        <text x="638" y="238" fill="#7dd3fc" fontSize="13">
          C_d = {item.cd.toFixed(2)}
        </text>
        <text x="638" y="262" fill="#fca5a5" fontSize="13">
          F_d = {fd.toFixed(1)} N
        </text>
        <text x="638" y="286" fill="#86efac" fontSize="13">
          P_d = {pd.toFixed(1)} W
        </text>
        <text x="638" y="312" fill="rgba(255,255,255,0.78)" fontSize="13">
          {item.value === "streamlined"
            ? (isEs ? "La estela se separa tarde y cuesta menos potencia." : "The wake separates late and costs less power.")
            : item.value === "cube"
              ? (isEs ? "La estela crece pronto y penaliza mucho." : "The wake grows early and penalizes strongly.")
              : (isEs ? "La postura intermedia mantiene una estela apreciable." : "The intermediate posture keeps a noticeable wake.")}
        </text>
      </g>
    );
  },
};

export default profile;
