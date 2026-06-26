import React from "react";
import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
} from "@/v2/components/SVG/svgGrammar";
import { createSvgProfileContract } from "@/v2/components/SVG/profiles/svgProfileContracts.js";

const profile = {
  meta: {
    leafId: "resonancia-y-modos-en-barras",
    title: {
      es: "Resonancia y modos en barras",
      en: "Resonance and Modes in Bars",
    },
  },
  title: {
    es: "Patrones modales de vibracion longitudinal en una barra",
    en: "Longitudinal vibration modal patterns in a bar",
  },
  infoCards: [
    {
      key: "modes",
      label: { es: "Modos normales", en: "Normal modes" },
      body: {
        es: "Cada modo tiene un patron espacial definido con n-1 nodos internos (libre-libre). La frecuencia es proporcional al numero de modo.",
        en: "Each mode has a defined spatial pattern with n-1 internal nodes (free-free). Frequency is proportional to mode number.",
      },
    },
    {
      key: "boundary",
      label: { es: "Condiciones de contorno", en: "Boundary conditions" },
      body: {
        es: "Libre-libre: ambos extremos son antinodos. Fijo-libre: un extremo es nodo (desplazamiento cero) y el otro es antinodo.",
        en: "Free-free: both ends are antinodes. Fixed-free: one end is a node (zero displacement) and the other is an antinode.",
      },
    },
  ],
  interpretation_binding: {
    target: "f_n",
    magnitudes: ["f_n", "n_modo", "v_L", "L_barra"],
    formula: "freq_longitudinal_libre_libre",
  },
  id: "resonancia-y-modos-en-barras-svg",
  leaf_id: "resonancia-y-modos-en-barras",
  graph_identity: {
    pregunta_principal: {
      es: "Como se conectan las frecuencias naturales de una barra con sus patrones modales y condiciones de contorno?",
      en: "How do a bar's natural frequencies connect with its modal patterns and boundary conditions?",
      keywords: ["frecuencias", "barra", "patrones modales", "condiciones de contorno", "desplazamiento"],
    },
    magnitud_estrella: "lambda_n",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 920 520",
  svgHeight: 600,
  motion: { type: SVG_MOTION_TYPES.NONE },
  graph_contract: createSvgProfileContract({
    leafId: "resonancia-y-modos-en-barras",
    graphId: "resonancia-y-modos-en-barras-svg",
    purpose: {
      es: "Visualizar los patrones modales de desplazamiento longitudinal para los primeros modos.",
      en: "Visualise longitudinal displacement modal patterns for the first modes.",
    },
    level: ["Upper Secondary", "University"],
    expectedInputs: ["n_modo", "L_barra", "v_L"],
    acceptedAliases: {
      n_modo: ["n", "mode"],
      L_barra: ["L", "length"],
      v_L: ["vL", "v_longitudinal"],
    },
    derivedMagnitudes: ["f_n", "lambda_n"],
    targetCandidates: ["f_n"],
    equations: ["f_n = n * v_L / (2 * L)"],
    hypotheses: [
      { es: "Barra delgada, isotropa, homogenea.", en: "Slender, isotropic, homogeneous bar." },
      { es: "Condiciones libre-libre.", en: "Free-free conditions." },
    ],
    validityDomain: [
      { es: "lambda_n >> diametro de la barra.", en: "lambda_n >> bar diameter." },
    ],
    visualSimplifications: [
      { es: "Se muestran los primeros 4 modos como curvas de desplazamiento sobre la barra.", en: "The first 4 modes are shown as displacement curves along the bar." },
    ],
    alwaysVisible: ["bar_outline", "mode_curves"],
  }),
  params: {
    schema: [
      { key: "n_modo", default: 3 },
      { key: "L_barra", default: 0.5 },
      { key: "v_L", default: 5100 },
      { key: "bc", default: "libre-libre" },
    ],
    derivations: {
      f_n: ({ n_modo, L_barra, v_L }) => {
        const n = Math.max(1, Math.round(Number(n_modo ?? 3)));
        const L = Number(L_barra ?? 0.5);
        const v = Number(v_L ?? 5100);
        return (n * v) / (2 * L);
      },
      lambda_n: ({ n_modo, L_barra }) => {
        const n = Math.max(1, Math.round(Number(n_modo ?? 3)));
        const L = Number(L_barra ?? 0.5);
        return (2 * L) / n;
      },
    },
  },
  render: ({ p = {}, lang = "es" }) => {
    const nMax = 4;
    const L = Number(p.L_barra ?? 0.5);
    const v = Number(p.v_L ?? 5100);
    const bc = p.bc || "libre-libre";

    const barX = 100;
    const barW = 720;
    const modeH = 90;
    const startY = 60;

    const colors = ["#2563eb", "#16a34a", "#d97706", "#dc2626"];

    const modes = [];
    for (let n = 1; n <= nMax; n++) {
      let freq;
      if (bc === "fijo-libre") {
        freq = ((2 * n - 1) * v) / (4 * L);
      } else {
        freq = (n * v) / (2 * L);
      }
      modes.push({ n, freq });
    }

    const nPoints = 200;

    return (
      <g>
        <rect x="50" y="30" width="820" height="460" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
        <text x="460" y="50" textAnchor="middle" fill="#0f172a" fontSize="15" fontWeight="700">
          {lang === "en"
            ? `Longitudinal modes (${bc === "fijo-libre" ? "fixed-free" : "free-free"})`
            : `Modos longitudinales (${bc})`}
        </text>

        {modes.map(({ n, freq }, idx) => {
          const cy = startY + idx * (modeH + 20);
          const pts = Array.from({ length: nPoints }, (_, i) => {
            const xFrac = i / (nPoints - 1);
            const x = barX + xFrac * barW;
            let y;
            if (bc === "fijo-libre") {
              y = cy + 30 * Math.sin(((2 * n - 1) * Math.PI * xFrac) / 2);
            } else {
              y = cy + 30 * Math.cos(n * Math.PI * xFrac);
            }
            return `${x.toFixed(1)},${y.toFixed(1)}`;
          });
          const polyline = pts.join(" ");

          return (
            <g key={n}>
              {/* Bar outline */}
              <rect x={barX} y={cy - 3} width={barW} height={6} fill="#e2e8f0" rx="3" />
              {/* Mode shape */}
              <polyline points={polyline} fill="none" stroke={colors[idx]} strokeWidth="2.5" />
              {/* Label */}
              <text x={barX - 10} y={cy + 5} textAnchor="end" fill={colors[idx]} fontSize="13" fontWeight="600">
                n={n}
              </text>
              <text x={barX + barW + 10} y={cy + 5} textAnchor="start" fill="#475569" fontSize="11">
                {freq.toFixed(0)} Hz
              </text>
            </g>
          );
        })}

        <text x="460" y="490" textAnchor="middle" fill="#475569" fontSize="12">
          L = {L} m · v_L = {v} m/s
        </text>
      </g>
    );
  },
};

export default profile;
