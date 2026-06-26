import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
} from "@/v2/components/SVG/svgGrammar";
import { createSvgProfileContract } from "@/v2/components/SVG/profiles/svgProfileContracts.js";

const profile = {
  meta: {
    leafId: "velocidad-del-sonido",
    title: {
      es: "Velocidad del sonido",
      en: "Speed of Sound",
    },
  },
  title: {
    es: "Rigidez, densidad y velocidad",
    en: "Stiffness, density, and speed",
  },
  infoCards: [
    {
      key: "stiffness",
      label: { es: "Rigidez", en: "Stiffness" },
      body: {
        es: "Mayor B_mod eleva v_son porque el medio recupera antes la compresion.",
        en: "Higher B_mod raises v_son because the medium restores compression faster.",
      },
    },
    {
      key: "inertia",
      label: { es: "Inercia", en: "Inertia" },
      body: {
        es: "Mayor rho_med reduce v_son si la rigidez no cambia.",
        en: "Higher rho_med lowers v_son if stiffness does not change.",
      },
    },
    {
      key: "temperature",
      label: { es: "Temperatura", en: "Temperature" },
      body: {
        es: "En gases ideales, T_abs controla la respuesta elastica efectiva.",
        en: "In ideal gases, T_abs controls the effective elastic response.",
      },
    },
  ],
  interpretation_binding: {
    target: "B_mod",
    magnitudes: ["v_son", "B_mod", "rho_med", "T_abs", "gamma_gas", "M_mol"],
    formula: "newton_laplace",
  },
  id: "velocidad-del-sonido-svg",
  leaf_id: "velocidad-del-sonido",
  graph_identity: {
    pregunta_principal: {
      es: "Como determinan la rigidez, la densidad y la temperatura la velocidad del sonido?",
      en: "How do stiffness, density, and temperature determine the speed of sound?",
      keywords: ["rigidez", "densidad", "temperatura", "velocidad", "sonido", "stiffness", "density", "temperature", "speed"],
    },
    magnitud_estrella: "B_mod",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 920 520",
  svgHeight: 560,
  motion: { type: SVG_MOTION_TYPES.NONE },
  controls: [
    { key: "material", type: SVG_CONTROL_TYPES.SLIDER, min: 0, max: 2, step: 1, default: 0 },
  ],
  graph_contract: createSvgProfileContract({
    leafId: "velocidad-del-sonido",
    graphId: "velocidad-del-sonido-svg",
    purpose: {
      es: "Comparar como rigidez y densidad explican que v_son sea pequena en aire y grande en solidos.",
      en: "Compare how stiffness and density explain why v_son is small in air and large in solids.",
    },
    level: ["Secondary", "Upper Secondary"],
    expectedInputs: ["v_son", "B_mod", "rho_med"],
    acceptedAliases: {
      v_son: ["sound_speed"],
      B_mod: ["bulk_modulus"],
      rho_med: ["density"],
    },
    derivedMagnitudes: ["v_son"],
    targetCandidates: ["v_son", "B_mod"],
    equations: ["v_son = sqrt(B_mod/rho_med)"],
    hypotheses: [
      { es: "Medio continuo lineal.", en: "Linear continuum medium." },
      { es: "Compresiones acusticas pequenas.", en: "Small acoustic compressions." },
    ],
    validityDomain: [
      { es: "Propagacion acustica local en medio homogeneo.", en: "Local acoustic propagation in a homogeneous medium." },
    ],
    visualSimplifications: [
      { es: "Las barras resumen ordenes de magnitud.", en: "Bars summarize orders of magnitude." },
    ],
    alwaysVisible: ["medium_bars", "speed_arrow"],
  }),
  params: {
    schema: [
      { key: "material", default: 0 },
      { key: "v_son", default: 343 },
      { key: "B_mod", default: 142000 },
      { key: "rho_med", default: 1.2 },
    ],
  },
  render: ({ p = {}, lang = "es" }) => {
    const items = [
      { id: "air", es: "aire", en: "air", v: 343, b: 0.000142, rho: 1.2, color: "#0f766e" },
      { id: "water", es: "agua", en: "water", v: 1480, b: 2.2, rho: 1000, color: "#2563eb" },
      { id: "steel", es: "acero", en: "steel", v: 5100, b: 160, rho: 7800, color: "#f97316" },
    ];
    const selected = Math.max(0, Math.min(2, Math.round(Number(p.material ?? 0))));
    const maxV = 5200;

    return (
      <g>
        <rect x="54" y="66" width="812" height="352" rx="18" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
        <text x="460" y="42" textAnchor="middle" fill="#0f172a" fontSize="24" fontWeight="800">
          {lang === "en" ? "Medium properties set sound speed" : "El medio fija la velocidad del sonido"}
        </text>
        {items.map((it, i) => {
          const y = 120 + i * 92;
          const w = 90 + (it.v / maxV) * 570;
          const active = i === selected;
          return (
            <g key={it.id} opacity={active ? 1 : 0.78}>
              <text x="92" y={y + 22} fill="#0f172a" fontSize="18" fontWeight="800">
                {lang === "en" ? it.en : it.es}
              </text>
              <rect x="190" y={y} width="620" height="34" rx="7" fill="#e2e8f0" />
              <rect x="190" y={y} width={w} height="34" rx="7" fill={it.color} />
              <text x={200 + w} y={y + 23} fill="#0f172a" fontSize="14" fontWeight="700">
                {it.v} m/s
              </text>
              <text x="190" y={y + 58} fill="#475569" fontSize="13">
                {lang === "en" ? "stiffness order" : "orden de rigidez"}: {it.b} GPa · rho_med: {it.rho} kg/m3
              </text>
            </g>
          );
        })}
        <path d="M 152 458 L 768 458" stroke="#0f172a" strokeWidth="3" markerEnd="url(#arrow-speed)" />
        <defs>
          <marker id="arrow-speed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0f172a" />
          </marker>
        </defs>
        <text x="460" y="488" textAnchor="middle" fill="#475569" fontSize="15">
          {lang === "en" ? "v_son grows when stiffness wins over density" : "v_son crece cuando la rigidez domina a la densidad"}
        </text>
      </g>
    );
  },
};

export default profile;
