import React from "react";
import { SVG_SCENE_TYPES } from "../svgGrammar";

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const profile = {
  meta: {
    id: "svg-introduccion-fisica-moderna",
    leafId: "introduccion-a-fisica-moderna",
    title: {
      es: "Cuantización de la energía y límite clásico",
      en: "Energy quantization and classical limit",
    },
    subtitle: {
      es: "Niveles discretos, fotón y cociente cuántico-clásico",
      en: "Discrete levels, photon, and quantum-classical ratio",
    },
  },

  graph_identity: {
    graph_type: "Svg",
    pregunta_principal: {
      es: "¿Por qué la cuantización de la energía obliga a ampliar la física clásica con niveles discretos?",
      en: "Why does energy quantization force an extension of classical physics through discrete levels?",
    },
    keywords: ["cuantizacion", "energia", "obliga", "ampliar", "clasica", "niveles", "discretos", "quantization", "classical", "extension"],
    magnitud_estrella: "energia_cuantizada",
    target_interpretable: true,
    interpretation_binding: {
      energia_cuantizada: "energia_cuantizada",
      constante_planck: "constante_planck",
      frecuencia: "frecuencia",
      energia_nivel: "energia_nivel",
      separacion_energia: "separacion_energia",
      numero_cuantico: "numero_cuantico",
    },
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 720 400",
  svgHeight: 420,

  params: {
    schema: [
      {
        key: "n",
        default: 3,
        label: { es: "Nivel cuántico n", en: "Quantum level n" },
        unit: "",
        min: 1,
        max: 8,
        step: 1,
      },
      {
        key: "h_nu",
        default: 3.98e-19,
        label: { es: "Energía fotón (J)", en: "Photon energy (J)" },
        unit: "J",
        min: 1e-20,
        max: 1e-18,
        step: 1e-20,
      },
    ],
    derivations: {
      E_n: ({ n, h_nu }) => safeNum(n, 3) * safeNum(h_nu, 3.98e-19),
      ratio: ({ h_nu }) => safeNum(h_nu, 3.98e-19) / 1e-15,
    },
  },

  infoCards: [
    {
      key: "foton",
      label: { es: "Fotón", en: "Photon" },
      highlight: "E = h·f",
      highlightColor: "#f59e0b",
      description: {
        es: "Cada fotón lleva un paquete fijo de energía proporcional a la frecuencia.",
        en: "Each photon carries a fixed energy packet proportional to frequency.",
      },
    },
    {
      key: "niveles",
      label: { es: "Niveles", en: "Levels" },
      highlight: "E_n = n·h·f₀",
      highlightColor: "#38bdf8",
      description: {
        es: "Los niveles discretos solo aceptan energías específicas; la escala la fija la constante de Planck.",
        en: "Discrete levels accept only specific energies; the scale is set by Planck's constant.",
      },
    },
    {
      key: "limite",
      label: { es: "Límite clásico", en: "Classical limit" },
      result: ({ p, lang }) => {
        const ratio = safeNum(p?.ratio, 0);
        if (ratio < 1e-4) return lang === "en" ? "classical regime" : "régimen clásico";
        if (ratio < 1e-2) return lang === "en" ? "transition zone" : "zona de transición";
        return lang === "en" ? "quantum regime" : "régimen cuántico";
      },
      resultColor: "#a78bfa",
    },
  ],

  render: ({ p, lang = "es" }) => {
    const tt = (es, en) => (lang === "en" ? en : es);
    const n = Math.max(1, Math.round(safeNum(p?.n, 3)));
    const h_nu = safeNum(p?.h_nu, 3.98e-19);

    const levels = Array.from({ length: Math.min(n + 2, 8) }, (_, i) => i + 1);
    const maxE = levels[levels.length - 1] * h_nu;
    const toY = (e) => 350 - (e / maxE) * 300;

    return (
      <g>
        <text x="20" y="25" fill="rgba(255,255,255,0.6)" fontSize="13">
          {tt("Niveles cuánticos (E = n·h·f)", "Quantum levels (E = n·h·f)")}
        </text>
        {levels.map((lvl) => {
          const y = toY(lvl * h_nu);
          const active = lvl === n;
          return (
            <g key={lvl}>
              <line x1="80" y1={y} x2="400" y2={y} stroke={active ? "#f59e0b" : "rgba(56,189,248,0.5)"} strokeWidth={active ? 2.5 : 1.5} />
              <text x="410" y={y + 4} fill={active ? "#f59e0b" : "rgba(255,255,255,0.6)"} fontSize="11">
                n={lvl}
              </text>
            </g>
          );
        })}
        <text x="80" y="380" fill="rgba(255,255,255,0.5)" fontSize="11">
          E = 0
        </text>
        <line x1="80" y1="355" x2="400" y2="355" stroke="rgba(255,255,255,0.25)" strokeWidth={1} strokeDasharray="4 4" />
        <text x="500" y="80" fill="rgba(255,255,255,0.8)" fontSize="12" fontWeight="bold">
          {tt("Energía del fotón:", "Photon energy:")}
        </text>
        <text x="500" y="100" fill="#f59e0b" fontSize="11">
          E = {h_nu.toExponential(2)} J
        </text>
        <text x="500" y="130" fill="rgba(255,255,255,0.8)" fontSize="12" fontWeight="bold">
          {tt("Nivel activo:", "Active level:")}
        </text>
        <text x="500" y="150" fill="#38bdf8" fontSize="11">
          n = {n}
        </text>
      </g>
    );
  },
};

export default profile;
