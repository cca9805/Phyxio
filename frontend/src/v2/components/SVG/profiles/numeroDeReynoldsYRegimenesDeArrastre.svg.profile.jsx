import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_MOTION_TYPES,
  SVG_SCENE_TYPES,
} from "@/v2/components/SVG/svgGrammar";

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
const fmt = (n, d = 1, lang = "es") => {
  if (!Number.isFinite(n)) return "-";
  const text = n.toFixed(d);
  return lang === "en" ? text : text.replace(".", ",");
};

const regimeLabel = (value, lang) => {
  if (value < 1) return lang === "en" ? "Stokes regime" : "Regimen de Stokes";
  if (value < 1000) return lang === "en" ? "Transition" : "Transicion";
  return lang === "en" ? "Inertial regime" : "Regimen inercial";
};

const profile = {
  meta: {
    id: "svg-numero-de-reynolds-y-regimenes-de-arrastre",
    leafId: "numero-de-reynolds-y-regimenes-de-arrastre",
    title: {
      es: "Numero de Reynolds y regimenes de arrastre",
      en: "Reynolds number and drag regimes",
    },
    subtitle: {
      es: "Lectura visual del cambio de flujo",
      en: "Visual reading of flow change",
    },
  },

  graph_identity: {
    pregunta_principal: {
      es: "Como leer en Coord y en SVG que Re no es una fuerza, sino el criterio que decide si domina la viscosidad o la inercia y, por tanto, que modelo de arrastre conviene usar?",
      en: "How can we read in Coord and in the SVG that Re is not a force, but the criterion deciding whether viscosity or inertia dominates and therefore which drag model should be used?",
    },
    magnitud_estrella: "Re",
    magnitud_secundaria: "nu",
    variable_control: "Re",
  },

  interpretation_binding: {
    paramsIn: ["Re"],
    stateOut: ["Re"],
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 640,
  params: {
    schema: [
      {
        key: "Re",
        default: 250,
        label: { es: "Numero de Reynolds", en: "Reynolds number" },
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.1,
        max: 3000,
        step: 1,
      },
    ],
  },
  infoCards: [
    {
      key: "regime",
      label: { es: "Regimen", en: "Regime" },
      lines: ({ p, lang }) => [
        `Re = ${fmt(Number(p?.Re ?? 250), 1, lang)}`,
        regimeLabel(Number(p?.Re ?? 250), lang),
      ],
      result: ({ p, lang }) =>
        Number(p?.Re ?? 250) < 1
          ? (lang === "en" ? "Viscosity dominates" : "Domina la viscosidad")
          : Number(p?.Re ?? 250) < 1000
            ? (lang === "en" ? "Mixed behavior" : "Comportamiento mixto")
            : (lang === "en" ? "Inertia dominates" : "Domina la inercia"),
      resultColor: "#fde68a",
    },
    {
      key: "reading",
      label: { es: "Lectura de modelo", en: "Model reading" },
      lines: ({ p, lang }) => {
        const value = Number(p?.Re ?? 250);
        return value < 1
          ? [lang === "en" ? "Linear drag is plausible." : "El arrastre lineal es plausible.", lang === "en" ? "Viscous effects control the scene." : "Los efectos viscosos controlan la escena."]
          : value < 1000
            ? [lang === "en" ? "Transition zone." : "Zona transicional.", lang === "en" ? "Model choice requires caution." : "La eleccion del modelo exige cuidado."]
            : [lang === "en" ? "Quadratic drag becomes plausible." : "El arrastre cuadratico gana plausibilidad.", lang === "en" ? "Inertial wake is more important." : "La estela inercial pesa mas."];
      },
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.NONE,
  },
  render: ({ p, lang = "es", toNum }) => {
    const isEs = lang !== "en";
    const Re = clamp(toNum(p?.Re, 250), 0.1, 3000);
    const stage = Re < 1 ? "stokes" : Re < 1000 ? "transition" : "inertial";
    const flowColor = stage === "stokes" ? "#22c55e" : stage === "transition" ? "#f59e0b" : "#ef4444";
    const lines = stage === "stokes" ? [160, 205, 250, 295, 340, 385] : stage === "transition" ? [165, 208, 252, 298, 344, 388] : [150, 198, 246, 304, 356, 404];

    return (
      <g>
        <defs>
          <linearGradient id="reynoldsBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08121a" />
            <stop offset="100%" stopColor="#15344f" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="960" height="560" rx="20" fill="url(#reynoldsBg)" />
        <text x="480" y="44" textAnchor="middle" fill="#ffffff" fontSize="28" fontWeight="800">
          {isEs ? "Numero de Reynolds" : "Reynolds number"}
        </text>
        <text x="480" y="72" textAnchor="middle" fill="rgba(255,255,255,0.70)" fontSize="14">
          {isEs ? "Re cambia el mapa de flujo y el modelo" : "Re changes the flow map and the model"}
        </text>

        <rect x="60" y="110" width="840" height="380" rx="18" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" />

        {lines.map((y, index) => (
          <path
            key={index}
            d={stage === "stokes" ? `M 100 ${y} C 260 ${y} 360 ${y} 460 ${y}` : stage === "transition" ? `M 100 ${y} C 210 ${y - 12} 290 ${y + 10} 390 ${y} S 520 ${y - 10} 650 ${y + (index % 2 === 0 ? 8 : -8)}` : `M 100 ${y} C 180 ${y - 20} 240 ${y + 26} 320 ${y - 12} S 450 ${y + 24} 520 ${y - 16} S 630 ${y + 18} 740 ${y - 12}`}
            fill="none"
            stroke={flowColor}
            strokeWidth={stage === "inertial" ? 4 : 3}
            strokeOpacity={0.92}
          />
        ))}

        <circle cx="470" cy="275" r="58" fill="rgba(226,232,240,0.92)" stroke="#ffffff" strokeWidth="3" />

        {stage !== "stokes" ? (
          <path
            d={stage === "transition" ? "M 528 238 C 610 256 676 278 736 320" : "M 528 224 C 620 246 710 290 792 372"}
            fill="none"
            stroke={flowColor}
            strokeWidth="5"
            strokeDasharray={stage === "transition" ? "10 10" : "6 12"}
            strokeOpacity="0.9"
          />
        ) : null}

        <rect x="618" y="156" width="220" height="150" rx="14" fill="rgba(15,23,42,0.58)" stroke="rgba(255,255,255,0.12)" />
        <text x="634" y="188" fill="#ffffff" fontSize="15" fontWeight="800">
          {isEs ? "Lectura fisica" : "Physical reading"}
        </text>
        <text x="634" y="218" fill="#fde68a" fontSize="13" fontWeight="800">
          Re = {fmt(Re, 1, lang)}
        </text>
        <text x="634" y="244" fill={flowColor} fontSize="13">
          {regimeLabel(Re, lang)}
        </text>
        <text x="634" y="270" fill="rgba(255,255,255,0.78)" fontSize="13">
          {stage === "stokes" ? (isEs ? "Domina la viscosidad y el flujo se ordena." : "Viscosity dominates and the flow stays ordered.") : stage === "transition" ? (isEs ? "Compiten viscosidad e inercia." : "Viscosity and inertia compete.") : (isEs ? "La estela crece y domina la inercia." : "The wake grows and inertia dominates.")}
        </text>

        <text x="82" y="528" fill="rgba(255,255,255,0.72)" fontSize="13">
          {isEs ? "Idea clave: Re no es una fuerza, sino un criterio de modelo." : "Key idea: Re is not a force, but a model criterion."}
        </text>
      </g>
    );
  },
};

export default profile;
