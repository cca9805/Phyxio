import React from "react";
import { SVG_MOTION_TYPES, SVG_SCENE_TYPES } from "@/v2/components/SVG/svgGrammar";

const profile = {
  meta: {
    id: "svg-curvas-planas-y-peraltadas",
    leafId: "curvas-planas-y-peraltadas",
    title: {
      es: "Curvas planas y peraltadas",
      en: "Flat and banked curves",
    },
    subtitle: {
      es: "La componente radial puede venir de rozamiento o de la normal",
      en: "The radial component can come from friction or from the normal force",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como se reparte la fuerza centripeta entre rozamiento y normal al comparar una curva plana con una curva peraltada?",
      en: "How is the centripetal force split between friction and the normal force when comparing a flat curve with a banked curve?",
    },
    magnitud_estrella: "Frad",
    magnitud_secundaria: "fs",
    variable_control: "v",
  },
  interpretation_binding: {
    paramsIn: ["v", "r", "mu", "th"],
    stateOut: ["Frad", "fs", "Nn"],
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 620,
  params: {
    schema: [],
  },
  infoCards: [
    {
      key: "curveReading",
      label: { es: "Lectura", en: "Reading" },
      lines: ({ lang }) => [
        lang === "en" ? "Flat curve: friction provides the radial part" : "Curva plana: el rozamiento aporta la parte radial",
        lang === "en" ? "Banked curve: the normal already tilts inward" : "Curva peraltada: la normal ya se inclina hacia el centro",
      ],
      result: ({ lang }) =>
        lang === "en" ? "The graph explains where the inward component comes from" : "El grafico explica de donde sale la componente hacia el centro",
      resultColor: "#93c5fd",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.NONE,
  },
  render: ({ lang = "es" }) => {
    const isEs = lang !== "en";
    return (
      <g>
        <rect x="0" y="0" width="960" height="560" rx="20" fill="#0a1622" />

        <rect x="50" y="96" width="400" height="380" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" />
        <text x="250" y="132" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="800">
          {isEs ? "Curva plana" : "Flat curve"}
        </text>
        <circle cx="250" cy="292" r="118" fill="none" stroke="#60a5fa" strokeWidth="14" opacity="0.85" />
        <circle cx="360" cy="292" r="16" fill="#f8fafc" />
        <line x1="360" y1="292" x2="250" y2="292" stroke="#f59e0b" strokeWidth="7" />
        <polygon points="250,292 272,282 272,302" fill="#f59e0b" />
        <text x="308" y="275" fill="#f59e0b" fontSize="16" fontWeight="800">f_s</text>
        <text x="202" y="318" fill="#93c5fd" fontSize="14" fontWeight="700">F_rad</text>

        <rect x="510" y="96" width="400" height="380" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" />
        <text x="710" y="132" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="800">
          {isEs ? "Curva peraltada" : "Banked curve"}
        </text>
        <line x1="590" y1="360" x2="820" y2="290" stroke="#94a3b8" strokeWidth="10" />
        <rect x="690" y="265" width="48" height="32" rx="8" transform="rotate(-18 714 281)" fill="#e2e8f0" />
        <line x1="714" y1="282" x2="666" y2="196" stroke="#34d399" strokeWidth="7" />
        <polygon points="666,196 668,220 686,210" fill="#34d399" />
        <text x="650" y="192" fill="#34d399" fontSize="16" fontWeight="800">N</text>
        <line x1="714" y1="282" x2="714" y2="382" stroke="#fbbf24" strokeWidth="7" />
        <polygon points="714,382 704,360 724,360" fill="#fbbf24" />
        <text x="726" y="372" fill="#fbbf24" fontSize="16" fontWeight="800">P</text>
        <text x="632" y="250" fill="#93c5fd" fontSize="14" fontWeight="700">
          {isEs ? "La componente horizontal de N actua como F_rad" : "The horizontal component of N acts as F_rad"}
        </text>
      </g>
    );
  },
};

export default profile;
